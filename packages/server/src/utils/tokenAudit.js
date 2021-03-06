/* eslint no-console: 0 */
/* eslint no-unused-vars: 0 */

import User from 'server/api/user/user.model';
import Earnings from 'server/api/earnings/earnings.model';
import Invest from 'server/api/invest/invest.model';
import PostData from 'server/api/post/postData.model';
import Community from 'server/api/community/community.model';
import Notification from 'server/api/notification/notification.model';
import { sendEmail } from 'server/utils/mail';
import * as Sentry from '@sentry/node';

const queue = require('queue');

const q = queue({
  concurrency: 5
});

const { RELEVANT_ENV, SYS_ADMIN_EMAIL } = process.env;

export async function runAudit() {
  try {
    // const communities = await Community.find({ inactive: { $ne: true } });
    // communities.forEach((c) => {
    //   console.log(c.slug, 'rewardFund', c.rewardFund);
    // });
    await auditUserEarnings();
    console.log('finished audit');
  } catch (err) {
    console.log(err);
  }
}
// runAudit();

async function sendAdminAlert(user, diff) {
  if (RELEVANT_ENV !== 'production') return null;
  const data = {
    from: 'Relevant <info@relevant.community>',
    to: 'slava@relevant.community',
    subject: 'User balance discrepancy',
    html: `
      user: @${user.handle}
      discrepancy: ${diff}
      <br />
      <br />
      user object:
      <br />
      ${JSON.stringify(user)}
      <br />
      `
  };
  return sendEmail(data);
}

async function auditUserEarnings() {
  const users = await User.find({ balance: { $gt: 0 } });
  const audited = users.map(user =>
    q.push(async cb => {
      try {
        await userEarnings(user);
      } catch (err) {
        console.log('Error auditing user earnings', err);
      }
      cb();
    })
  );
  return new Promise((resolve, reject) => {
    q.start(err => (err ? reject(err) : resolve()));
  });
}

async function userEarnings(user) {
  const pendingEarnings = await Earnings.find({
    user: user._id,
    status: 'pending'
  }).sort('updatedAt');
  const totalStaked = pendingEarnings.reduce((a, e) => e.stakedTokens + a, 0);

  if (Math.abs(totalStaked - user.lockedTokens) > 0.000001) {
    console.log('locked token mismatch', user.handle, totalStaked, user.lockedTokens);
    // user.lockedTokens = totalStaked;
    // await user.save();
  }

  const earnings = await Earnings.find({
    user: user._id,
    status: 'paidout'
  });

  // const userCashoutLog = await Earnings.find({ user: user._id, cashOutAttempt: true });
  // const cashedOut = userCashoutLog
  //   .filter((e) => e.status === 'completed')
  //   .reduce((a, e) => a + e.cashOutAmt, 0);

  // if (Math.abs(user.cashedOut - cashedOut) > 0.000001) {
  //   // console.log(userCashoutLog);
  //   console.log(user.handle, 'cashed out is', user.cashedOut, 'should be', cashedOut);
  // }

  const totalRewards = earnings.reduce((a, e) => e.earned + a, 0);
  const diff = difference(user, totalRewards);

  if (Math.abs(diff) > 0.000001) {
    console.log(user.handle);
    console.log('error! earnings mismatch for', user._id);

    // const allEarnings = await Earnings.find({
    //   user: user._id,
    //   earned: { $gt: 0 },
    //   // status: { $ne: 'paidout' },
    // });
    // console.log(allEarnings);

    const notes = await Notification.find({ forUser: user._id, coin: { $gt: 0 } });
    const sum = await notes.reduce((a, n) => (n.coin || 0) + a, 0);
    // console.log(sum);
    // console.log(notes);

    // if (user._id.toString() === '5f04ac11151b1a00176afa01') {
    //   const earning = await Earnings.findOne({
    //     user: user._id,
    //     post: '5f03b513d0b41200176fc12a',
    //   });
    //   // earning.earned = diff;
    //   // earning.status = 'paidout';
    //   // await earning.save();
    // }

    // allEarnings.forEach(async (e) => {
    //   e.status = 'paidout';
    //   await e.save();
    // });

    logUser(user, totalRewards);
    console.log(user.handle, 'discrepancy', diff);
    Sentry.captureException(new Error(`${user.handle} discrepancy: ${diff}`));
    sendAdminAlert(user, diff);
    // allEarnings.forEach((e) => {
    //   if (e.earned > 0) {
    //     // console.log(e.earned, e.endBalance - e.prevBalance);
    //     console.log('earned', new Date(e.updatedAt).toTimeString(), e.earned);
    //   }
    // });
  }
}

function difference(user, totalRewards) {
  return (
    user.balance +
    user.cashedOut -
    user.airdropTokens -
    totalRewards -
    user.legacyTokens -
    user.legacyAirdrop
  );
}

function logUser(user, totalRewards) {
  console.log(
    user.handle,
    'balance:',
    user.balance,
    'tokenBalance:',
    user.tokenBalance,
    'newRewards:',
    totalRewards,
    'airdrop | referral',
    user.airdropTokens,
    '|',
    user.referralTokens,
    'legacyRewards:',
    user.legacyTokens,
    'legacyAirdrop:',
    user.legacyAirdrop,
    'cashedOut:',
    user.cashedOut
  );
}

async function auditUser(handle) {
  const user = await User.findOne({ handle });
  const earnings = await Earnings.find({
    user: user._id,
    $or: [{ status: 'paidout' }, { status: 'expired' }]
  }).populate('post');
  const totalEarnigns = earnings.reduce((a, e) => e.earned + a, 0);

  let diff = difference(user, totalEarnigns);

  let adjust = 0;

  const postData = await earnings.map(async e => {
    const investments = await Invest.find({ post: e.post._id, investor: user._id });
    if (investments.length > 1) {
      console.log('multiple inv', investments);
    }
    const investment = investments[0];
    const postdata = await PostData.findOne({
      post: e.post,
      communityId: investment.communityId
    });

    if (!postdata) {
      console.log('missing post data for', e);
      console.log(' ');
      return;
    }

    if (e.communityId && !investment.communityId.equals(e.communityId)) {
      console.log('invest/earning mismatch', e.community, investment.community);
      if (!e.communityId) {
        // e.communityId = investment.communityId;
        // e.community = investment.community;
      }
    }

    const postInv = await Invest.find({ post: e.post._id });
    const invShares = postInv.reduce((a, inv) => inv.shares + a, 0);

    const estimatedReward = !postdata.payout
      ? 0
      : (postdata.payout * e.shares * 1e-18) / invShares;

    if (Math.abs(estimatedReward - e.earned) > 0.001) {
      console.log(e.post._id, e.post.title);
      console.log('shares', e.totalPostShares, postdata.shares, invShares);
      console.log('est vs payout', e.estimatedPostPayout, postdata.payout * 1e-18);
      console.log(estimatedReward, 'vs', e.earned);
      console.log('invest', investment.community, investment.createdAt);
      console.log('post', postdata.community, investment.createdAt);
      console.log('earning', e.community, e.earned, e.status);

      adjust += estimatedReward - e.earned;
      user.balance -= e.earned;

      diff = difference(user, totalEarnigns);
      e.communityId = investment.communityId;
      e.community = investment.community;
      e.earned = estimatedReward;
      e.status = 'paidout';
      // await e.save();
      console.log(' ');
    }
  });
  await Promise.all(postData);
  console.log(adjust, 'vs', diff);
}

async function listAllBalances() {
  const users = await User.find({ balance: { $gt: 0 } }).sort('-balance');
  users.forEach(u => console.log(u.handle, ',', u.balance));
}
