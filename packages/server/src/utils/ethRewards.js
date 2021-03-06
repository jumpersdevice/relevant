/* eslint no-console: 0 */
import { sendNotification as sendPushNotification } from 'server/notifications';
import Notification from 'server/api/notification/notification.model';
import Post from 'server/api/post/post.model';
import { sendAdminAlert } from 'server/utils/mail';
import Treasury from 'server/api/treasury/treasury.model';
import computePageRank from 'server/pagerank/pagerankCompute';
import * as numbers from 'app/utils/numbers';
import * as Sentry from '@sentry/node';
import User from '../api/user/user.model';
import Invest from '../api/invest/invest.model';
import Earnings from '../api/earnings/earnings.model';
import Community from '../api/community/community.model';
import * as Eth from './ethereum';
import { SHARE_DECAY, MINIMUM_RANK, TOKEN_DECIMALS } from '../config/globalConstants';
import PostData from '../api/post/postData.model';
import { runAudit } from './tokenAudit';

const queue = require('queue');

const IS_TEST = process.env.NODE_ENV === 'test';

const q = queue({ concurrency: 1 });

// const q5 = queue({ concurrency: 5 });

// const debug = process.env.NODE_ENV === 'test';
const debug = false;

let computingRewards = false;

let startRewards;
exports.rewards = async () => {
  // safeguard
  if (computingRewards) throw new Error('computing rewards is already in progress!');
  computingRewards = true;

  startRewards = new Date();
  let rewardPool;
  try {
    rewardPool = await allocateRewards();
    const oldRewards = await getOldRewards();
    rewardPool -= Math.max(0, oldRewards[0].rewardFund);
    console.log('rewardPool', rewardPool); // eslint-disable;
    if (rewardPool < 0) throw new Error(`not enough funds in reward pool ${rewardPool}`);
  } catch (err) {
    console.log(err);
    Sentry.captureException(err);
    await sendAdminAlert(err);
    throw err;
  }

  try {
    const communities = await Community.find({ inactive: { $ne: true } });

    const stakedTokens = await Earnings.stakedTokens();
    console.log('stakedTokens', stakedTokens);

    const totalBalance = stakedTokens.reduce((a, c) => c.stakedTokens + a, 0);
    if (totalBalance === 0) return (computingRewards = false);

    communities.forEach(community =>
      q.push(async cb => {
        community = await computeCommunityRewards(community, rewardPool, stakedTokens);
        const { updatedPosts, postPayouts } = await postRewards(community);
        const { payouts, distributedRewards } = await distributeUserRewards(
          updatedPosts,
          community
        );

        const res = {
          community: community.slug,
          payouts,
          distributedRewards,
          postPayouts
        };

        return cb(null, res);
      })
    );

    const payoutData = await new Promise((resolve, reject) => {
      const results = {};
      q.on('success', res => (results[res.community] = res));
      q.start(err => (err ? reject(err) : resolve(results)));
    });

    const totalDistributedRewards = Object.values(payoutData).reduce(
      (result, value) => result + value.distributedRewards,
      0
    );

    await Earnings.updateMany(
      { payoutTime: { $lte: startRewards }, status: 'pending' },
      { $set: { status: 'expired' } },
      { multi: true }
    );

    computingRewards = false;
    await runAudit();

    const treasury = await Treasury.findOne({ community: 'global' });
    treasury.unAllocatedRewards += totalDistributedRewards;
    await treasury.save();

    if (treasury.unAllocatedRewards) await updateRewardAllocation();

    return { payoutData, totalDistributedRewards };
  } catch (err) {
    console.log('rewards error', err);
    computingRewards = false;
    await sendAdminAlert(err);
    // return null;
    throw err;
  }
};

async function updateRewardAllocation() {
  let treasury = await Treasury.findOne({ community: 'global' });
  if (!treasury) {
    treasury = new Treasury({ community: 'global' });
    treasury = await treasury.save();
  }
  const { unAllocatedRewards } = treasury || {};
  if (unAllocatedRewards) {
    console.log('unAllocated Rewards', allocateRewards);
    const cancelPendingTx = true;
    await Eth.allocateRewards(unAllocatedRewards, cancelPendingTx);
    treasury.unAllocatedRewards = 0;
    await treasury.save();
  }
}

async function allocateRewards() {
  await updateRewardAllocation();
  const cancelPendingTx = true;
  await Eth.mintRewardTokens(cancelPendingTx);
  const rewardPool = await Eth.getParam('rewardFund', { noConvert: true });
  return rewardPool;
}

async function computeCommunityRewards(community, rewardPool, stakedTokens) {
  await computePageRank({ communityId: community._id, community: community.slug, debug });
  const reward = await communityRewardShare({ community, stakedTokens, rewardPool });

  community.rewardFund += reward;
  community = await community.save();
  return community;
}

function communityRewardShare({ community, stakedTokens, rewardPool }) {
  const totalBalance = stakedTokens.reduce((a, c) => c.stakedTokens + a, 0);
  let communityBalance = stakedTokens.find(c => c._id === community.slug);
  if (!communityBalance || !communityBalance.stakedTokens) return 0;
  communityBalance = communityBalance.stakedTokens;

  // compute portion of reward pool allocated to community
  const rewardShare = communityBalance / totalBalance;
  const rewards = rewardPool * rewardShare;

  console.log('\x1b[32m', 'Reward share of', community.slug, rewardShare);
  console.log('\x1b[32m', 'Rewards for', community.slug, rewards);
  console.log('\x1b[0m');

  return rewards;
}

async function postRewards(community) {
  // TODO paginate this
  const postDataSelect = `
    post
    shares
    paidOut
    eligibleForReward
    payoutTime
    communityId
    pagerank
    paidOut
    payout
    payoutShare
  `;

  const posts = await PostData.find(
    {
      eligibleForReward: true,
      paidOut: false,
      payoutTime: { $lte: startRewards },
      communityId: community._id
    },
    postDataSelect
  );

  const pendingPayouts = await PostData.find(
    {
      eligibleForReward: true,
      paidOut: false,
      payoutTime: { $gt: startRewards },
      communityId: community._id
    },
    postDataSelect
  );

  // decay current reward shares
  const decay = IS_TEST
    ? 0
    : (startRewards.getTime() - community.lastRewardFundUpdate.getTime()) / SHARE_DECAY;

  community.currentShares *= 1 - Math.min(1, decay);
  community.topPostShares *= 1 - Math.min(1, decay);
  community.postCount *= 1 - Math.min(1, decay);

  // add post relevance to treasury
  posts.forEach(post => {
    // cut off low-ranking posts
    if (post.pagerank > MINIMUM_RANK) {
      community.currentShares += post.pagerank;
      community.postCount += 1;
      if (post.pagerank >= community.currentShares / (community.postCount || 1)) {
        community.topPostShares += post.pagerank;
      }
    }
    post.paidOut = true;
  });

  community.lastRewardFundUpdate = startRewards;
  community = await community.save();

  const updatedPosts = await computePostPayout({ posts, community, futurePayout: false });

  // estimates future post payout
  const pendingPosts = await computePostPayout({
    posts: pendingPayouts,
    community,
    futurePayout: true
  });
  await updatePendingEarnings(pendingPosts);

  const postPayouts = updatedPosts.map(p => ({
    title: p.post,
    payout: p.payout,
    payoutShare: p.payoutShare,
    rank: p.pagerank
  }));
  console.log(
    '\x1b[32m',
    'distributed rewards to posts',
    postPayouts.filter(p => p.payout > 0)
  );
  console.log('\x1b[0m');

  return { updatedPosts, postPayouts };
}

// ANALYSIS — attack scenario community with low-quality posts to bring down the average?
async function computePostPayout({ posts, community, futurePayout }) {
  // let posts = await Post.find({ paidOut: false, payoutTime: { $lt: now } });
  const communityRewardFund = community.rewardFund;
  let updatedPosts = posts.map(async post => {
    const average = community.currentShares / (community.postCount || 1);

    // only reward above-average posts
    if (post.pagerank < average) {
      post.payout = 0;
      return post.save();
    }

    // linear reward curve
    // cap rewards share at 1/20th of the fund - especially for the first rewards?
    const payoutShare = post.pagerank / (community.topPostShares || 1);
    post.payoutShare = payoutShare > 0.05 ? 0.05 : payoutShare;

    const payout = communityRewardFund * post.payoutShare;
    post.payout = payout;
    return post.save();
  });
  updatedPosts = await Promise.all(updatedPosts);
  updatedPosts = updatedPosts.filter(p => p != null);
  if (!futurePayout) {
    const totalPayout = updatedPosts.reduce((a, post) => a + post.payout, 0);
    console.log(
      community.slug,
      'totalPayout',
      totalPayout,
      'rewardFund',
      community.rewardFund
    );
    community.rewardFund = Math.max(0, community.rewardFund - totalPayout);
    console.log('community reward fund after payout', community.rewardFund);
  }
  await community.save();
  return updatedPosts;
}

async function distributeUserRewards(posts, _community) {
  const { slug: community, _id: communityId } = _community;
  const payouts = {};
  let distributedRewards = 0;

  const updatedUsers = posts.map(async post => {
    const votes = await Invest.find({ post: post.post, communityId: post.communityId });

    // compute total vote shares
    const totalShares = votes.reduce((a, v) => a + v.shares, 0);

    if (totalShares !== post.shares) {
      Sentry.captureException(
        new Error(`
        ERROR: shares mismatch, investShares: ${post.post}
        totalShares: ${totalShares} post shares: ${post.shares}
        `)
      );
    }

    if (totalShares === 0) return null;

    const curationReward = post.payout;

    //  ---------- Curation rewards ------------

    const updatedVotes = votes.map(async vote => {
      // don't count downvotes
      if (vote.amount < 0) return null;

      let user = await User.findOne(
        { _id: vote.investor },
        'name balance deviceTokens badge lockedTokens legacyAirdrop referralTokens airdropTokens'
      );

      const curationWeight = vote.shares / totalShares;
      const curationPayout = Math.floor(curationWeight * curationReward);

      distributedRewards += curationPayout;

      payouts[user._id] = payouts[user._id]
        ? payouts[user._id] + curationPayout
        : curationPayout;

      // TODO diff decimal?
      const reward = Math.max(curationPayout, 0) / 10 ** 18;

      await Earnings.updateRewardsRecord({
        user: user._id,
        post: post.post,
        earned: reward,
        status: reward ? 'paidout' : 'expired',
        prevBalance: user.balance,
        endBalance: user.balance + reward,
        legacyAirdrop: user.legacyAirdrop,
        referralTokens: user.referralTokens,
        airdropTokens: user.airdropTokens,
        community,
        communityId
      });

      const pendingEarnings = await Earnings.find({
        user: user._id,
        status: 'pending'
      });

      const lockedTokens = pendingEarnings.reduce((a, e) => e.stakedTokens + a, 0);
      // console.log('pending staked', user.name, lockedTokens, user.lockedTokens);

      user = await User.findOneAndUpdate(
        { _id: user._id },
        { $inc: { balance: reward }, $set: { lockedTokens } },
        { new: true }
      );

      if (curationPayout === 0) return null;

      console.log('Awarded', user.name, reward, 'tokens for', post.post);
      return sendNotification({
        user,
        reward,
        post: post.post,
        type: 'vote',
        community,
        communityId,
        postData: post
      });
    });
    return Promise.all(updatedVotes);
  });

  await Promise.all(updatedUsers);

  // transfer amounts to distributed rewards
  console.log('total distributed rewards for', community, distributedRewards);
  console.log('\x1b[32m', payouts);
  console.log('\x1b[0m');
  return { payouts, distributedRewards };
}

async function sendNotification(props) {
  const { user, reward, post, community, communityId, type, postData } = props;
  const s = reward === 1 ? '' : 's';
  const action = type === 'vote' ? 'upvoting ' : '';

  const amount = numbers.abbreviateNumber(reward);
  const text = `You earned ${amount} coin${s} from ${action}this post`;
  const alertText = `You earned ${amount} coin${s} from ${action}a post`;

  await Notification.createNotification({
    post,
    forUser: user._id,
    type: 'reward',
    coin: reward,
    text,
    coinType: 'eth',
    community,
    communityId
  });

  const postObj = await Post.findOne({ _id: post });
  postObj.data = postData;

  const payload = {
    toUser: user,
    post: postObj,
    action: alertText,
    noteType: 'reward'
  };

  sendPushNotification(user, alertText, payload);
  return user;
}

async function updatePendingEarnings(posts) {
  posts = await posts.map(post =>
    Earnings.updateMany(
      { post: post.post },
      { $set: { estimatedPostPayout: post.payout / TOKEN_DECIMALS } },
      { multi: true }
    )
  );
  return Promise.all(posts);
}

async function getOldRewards() {
  return Community.aggregate([
    { $match: {} },
    {
      $group: {
        _id: 0,
        rewardFund: { $sum: '$rewardFund' }
      }
    }
  ]);
}
