"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _notifications = require("../notifications");

var _notification = _interopRequireDefault(require("../api/notification/notification.model"));

var _post = _interopRequireDefault(require("../api/post/post.model"));

var _mail = require("./mail");

var _treasury = _interopRequireDefault(require("../api/treasury/treasury.model"));

var _pagerankCompute = _interopRequireDefault(require("../pagerank/pagerankCompute"));

var numbers = _interopRequireWildcard(require("@r3l/app/lib/utils/numbers"));

var _user = _interopRequireDefault(require("../api/user/user.model"));

var _invest = _interopRequireDefault(require("../api/invest/invest.model"));

var _earnings = _interopRequireDefault(require("../api/earnings/earnings.model"));

var _community2 = _interopRequireDefault(require("../api/community/community.model"));

var Eth = _interopRequireWildcard(require("./ethereum"));

var _globalConstants = require("../config/globalConstants");

var _postData = _interopRequireDefault(require("../api/post/postData.model"));

var _tokenAudit = require("./tokenAudit");

/* eslint no-console: 0 */
var queue = require('queue');

var IS_TEST = process.env.NODE_ENV === 'test';
var q = queue({
  concurrency: 1
}); // const debug = process.env.NODE_ENV === 'test';

var debug = false;
var computingRewards = false;
exports.rewards = /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
  // safeguard
  if (computingRewards) throw new Error('computing rewards is already in progress!');
  computingRewards = true;
  var rewardPool;

  try {
    rewardPool = yield allocateRewards();
    var oldRewards = yield getOldRewards();
    rewardPool -= oldRewards[0].rewardFund;
    console.log('rewardPool', rewardPool); // eslint-disable;

    if (rewardPool < 0) throw new Error("not enough funds in reward pool ".concat(rewardPool));
  } catch (err) {
    console.log(err);
    yield (0, _mail.sendAdminAlert)(err);
    throw err;
  }

  try {
    var communities = yield _community2.default.find({
      inactive: {
        $ne: true
      }
    });
    var stakedTokens = yield _earnings.default.stakedTokens();
    console.log('stakedTokens', stakedTokens);
    var totalBalance = stakedTokens.reduce((a, c) => c.stakedTokens + a, 0);
    if (totalBalance === 0) return computingRewards = false;
    communities.forEach(community => q.push( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* (cb) {
        community = yield computeCommunityRewards(community, rewardPool, stakedTokens);
        var {
          updatedPosts,
          postPayouts
        } = yield postRewards(community);
        var {
          payouts,
          distributedRewards
        } = yield distributeUserRewards(updatedPosts, community);
        var res = {
          community: community.slug,
          payouts,
          distributedRewards,
          postPayouts
        };
        return cb(null, res);
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()));
    var payoutData = yield new Promise((resolve, reject) => {
      var results = {};
      q.on('success', res => results[res.community] = res);
      q.start(err => err ? reject(err) : resolve(results));
    });
    var totalDistributedRewards = Object.values(payoutData).reduce((result, value) => result + value.distributedRewards, 0); // TODO do we need these checks?
    // const remainingRewards = await Eth.getParam('rewardPool', { noConvert: true });
    // const distPool = await Eth.getParam('distributedRewards', { noConvert: true });
    // console.log('distributedRewards Pool', distPool);
    // console.log('Finished distributing rewards, remaining reward fund: ', remainingRewards);

    var now = new Date();
    yield _earnings.default.updateMany({
      payoutTime: {
        $lte: now
      },
      status: 'pending'
    }, {
      status: 'expired'
    }, {
      multi: true
    });
    computingRewards = false;
    yield (0, _tokenAudit.runAudit)();
    var treasury = yield _treasury.default.findOne({
      community: 'global'
    });
    treasury.unAllocatedRewards += totalDistributedRewards;
    yield treasury.save();
    if (treasury.unAllocatedRewards) yield updateRewardAllocation();
    return {
      payoutData,
      totalDistributedRewards
    };
  } catch (err) {
    console.log('rewards error', err);
    computingRewards = false;
    yield (0, _mail.sendAdminAlert)(err); // return null;

    throw err;
  }
});

function updateRewardAllocation() {
  return _updateRewardAllocation.apply(this, arguments);
}

function _updateRewardAllocation() {
  _updateRewardAllocation = (0, _asyncToGenerator2.default)(function* () {
    var treasury = yield _treasury.default.findOne({
      community: 'global'
    });

    if (!treasury) {
      treasury = new _treasury.default({
        community: 'global'
      });
      treasury = yield treasury.save();
    }

    var {
      unAllocatedRewards
    } = treasury || {};

    if (unAllocatedRewards) {
      console.log('unAllocated Rewards', allocateRewards);
      var cancelPendingTx = true;
      yield Eth.allocateRewards(unAllocatedRewards, cancelPendingTx);
      treasury.unAllocatedRewards = 0;
      yield treasury.save();
    }
  });
  return _updateRewardAllocation.apply(this, arguments);
}

function allocateRewards() {
  return _allocateRewards.apply(this, arguments);
}

function _allocateRewards() {
  _allocateRewards = (0, _asyncToGenerator2.default)(function* () {
    yield updateRewardAllocation();
    var cancelPendingTx = true;
    yield Eth.mintRewardTokens(cancelPendingTx);
    var rewardPool = yield Eth.getParam('rewardFund', {
      noConvert: true
    });
    return rewardPool;
  });
  return _allocateRewards.apply(this, arguments);
}

function computeCommunityRewards(_x2, _x3, _x4) {
  return _computeCommunityRewards.apply(this, arguments);
}

function _computeCommunityRewards() {
  _computeCommunityRewards = (0, _asyncToGenerator2.default)(function* (community, rewardPool, stakedTokens) {
    yield (0, _pagerankCompute.default)({
      communityId: community._id,
      community: community.slug,
      debug
    });
    var reward = yield communityRewardShare({
      community,
      stakedTokens,
      rewardPool
    });
    community.rewardFund += reward;
    community = yield community.save();
    return community;
  });
  return _computeCommunityRewards.apply(this, arguments);
}

function communityRewardShare(_ref3) {
  var {
    community,
    stakedTokens,
    rewardPool
  } = _ref3;
  var totalBalance = stakedTokens.reduce((a, c) => c.stakedTokens + a, 0);
  var communityBalance = stakedTokens.find(c => c._id === community.slug);
  if (!communityBalance || !communityBalance.stakedTokens) return 0;
  communityBalance = communityBalance.stakedTokens; // compute portion of reward pool allocated to community

  var rewardShare = communityBalance / totalBalance;
  var rewards = rewardPool * rewardShare;
  console.log('\x1b[32m', 'Reward share of', community.slug, rewardShare);
  console.log('\x1b[32m', 'Rewards for', community.slug, rewards);
  console.log('\x1b[0m');
  return rewards;
}

function postRewards(_x5) {
  return _postRewards.apply(this, arguments);
} // ANALYSIS — attack scenario community with low-quality posts to bring down the average?


function _postRewards() {
  _postRewards = (0, _asyncToGenerator2.default)(function* (community) {
    var now = new Date(); // use postData as post

    var posts = yield _postData.default.find({
      eligibleForReward: true,
      paidOut: false,
      payoutTime: {
        $lte: now
      },
      communityId: community._id
    });
    var pendingPayouts = yield _postData.default.find({
      eligibleForReward: true,
      paidOut: false,
      payoutTime: {
        $gt: now
      },
      communityId: community._id
    }); // decay current reward shares

    var decay = IS_TEST ? 0 : (now.getTime() - community.lastRewardFundUpdate.getTime()) / _globalConstants.SHARE_DECAY;
    community.currentShares *= 1 - Math.min(1, decay);
    community.topPostShares *= 1 - Math.min(1, decay);
    community.postCount *= 1 - Math.min(1, decay); // add post relevance to treasury

    posts.forEach(post => {
      // cut off low-ranking posts
      if (post.pagerank > _globalConstants.MINIMUM_RANK) {
        community.currentShares += post.pagerank;
        community.postCount += 1;

        if (post.pagerank >= community.currentShares / (community.postCount || 1)) {
          community.topPostShares += post.pagerank;
        }
      }

      post.paidOut = true;
    });
    community.lastRewardFundUpdate = now;
    community = yield community.save();
    var updatedPosts = yield computePostPayout({
      posts,
      community
    }); // estimates post payout

    var pendingPosts = yield computePostPayout({
      posts: pendingPayouts,
      community
    });
    yield updatePendingEarnings(pendingPosts);
    var postPayouts = updatedPosts.map(p => ({
      title: p.post,
      payout: p.payout,
      payoutShare: p.payoutShare,
      rank: p.pagerank
    }));
    console.log('\x1b[32m', 'distributed rewards to posts', postPayouts);
    console.log('\x1b[0m');
    return {
      updatedPosts,
      postPayouts
    };
  });
  return _postRewards.apply(this, arguments);
}

function computePostPayout(_x6) {
  return _computePostPayout.apply(this, arguments);
}

function _computePostPayout() {
  _computePostPayout = (0, _asyncToGenerator2.default)(function* (_ref4) {
    var {
      posts,
      community
    } = _ref4;
    // let posts = await Post.find({ paidOut: false, payoutTime: { $lt: now } });
    var communityRewardFund = community.rewardFund;
    var updatedPosts = posts.map( /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2.default)(function* (post) {
        var average = community.currentShares / (community.postCount || 1); // only reward above-average posts

        console.log('rank vs average', post.pagerank, average);

        if (post.pagerank < average) {
          post.payout = 0;
          return post.save();
        } // linear reward curve
        // cap rewards share at 1/20th of the fund - especially for the first rewards?


        post.payoutShare = Math.min(0.05, post.pagerank / (community.topPostShares || 1));
        var payout = communityRewardFund * post.payoutShare;
        community.rewardFund -= payout;
        post.payout = payout;
        return post.save();
      });

      return function (_x11) {
        return _ref5.apply(this, arguments);
      };
    }());
    updatedPosts = yield Promise.all(updatedPosts);
    yield community.save();
    return updatedPosts;
  });
  return _computePostPayout.apply(this, arguments);
}

function distributeUserRewards(_x7, _x8) {
  return _distributeUserRewards.apply(this, arguments);
}

function _distributeUserRewards() {
  _distributeUserRewards = (0, _asyncToGenerator2.default)(function* (posts, _community) {
    var {
      slug: community,
      _id: communityId
    } = _community;
    var payouts = {};
    var distributedRewards = 0;
    var updatedUsers = posts.map( /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2.default)(function* (post) {
        var votes = yield _invest.default.find({
          post: post.post,
          communityId: post.communityId
        }); // compute total vote shares

        var totalShares = votes.reduce((a, v) => a + v.shares, 0);

        if (totalShares !== post.shares) {
          console.log('post:', post.post);
          console.log('ERROR: shares mismatch, investShares:', totalShares, 'postShares:', post.shares);
        }

        if (totalShares === 0) return null;
        var curationReward = post.payout; //  ---------- Curation rewards ------------

        var updatedVotes = votes.map( /*#__PURE__*/function () {
          var _ref7 = (0, _asyncToGenerator2.default)(function* (vote) {
            // don't count downvotes
            if (vote.amount < 0) return null;
            var user = yield _user.default.findOne({
              _id: vote.investor
            }, 'name balance deviceTokens badge lockedTokens legacyAirdrop referralTokens airdropTokens');
            var curationWeight = vote.shares / totalShares;
            var curationPayout = Math.floor(curationWeight * curationReward);
            distributedRewards += curationPayout;
            payouts[user._id] = payouts[user._id] ? payouts[user._id] + curationPayout : curationPayout; // TODO diff decimal?

            var reward = Math.max(curationPayout, 0) / 10 ** 18;
            var earning = yield _earnings.default.updateRewardsRecord({
              user: user._id,
              post: post.post,
              earned: reward,
              status: curationPayout ? 'paidout' : 'expired',
              prevBalance: user.balance,
              endBalance: user.balance + reward,
              legacyAirdrop: user.legacyAirdrop,
              referralTokens: user.referralTokens,
              airdropTokens: user.airdropTokens,
              community,
              communityId
            });
            var unlockTokens = Math.min(user.lockedTokens, earning.stakedTokens);
            user = yield _user.default.findOneAndUpdate({
              _id: user._id
            }, {
              $inc: {
                balance: reward,
                lockedTokens: -unlockTokens
              }
            }, {
              new: true
            });
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

          return function (_x13) {
            return _ref7.apply(this, arguments);
          };
        }());
        return Promise.all(updatedVotes);
      });

      return function (_x12) {
        return _ref6.apply(this, arguments);
      };
    }());
    yield Promise.all(updatedUsers); // transfer amounts to distributed rewards

    console.log('total distributed rewards for', community, distributedRewards);
    console.log('\x1b[32m', payouts);
    console.log('\x1b[0m');
    return {
      payouts,
      distributedRewards
    };
  });
  return _distributeUserRewards.apply(this, arguments);
}

function sendNotification(_x9) {
  return _sendNotification.apply(this, arguments);
}

function _sendNotification() {
  _sendNotification = (0, _asyncToGenerator2.default)(function* (props) {
    var {
      user,
      reward,
      post,
      community,
      communityId,
      type,
      postData
    } = props;
    var s = reward === 1 ? '' : 's';
    var action = type === 'vote' ? 'upvoting ' : '';
    var amount = numbers.abbreviateNumber(reward);
    var text = "You earned ".concat(amount, " coin").concat(s, " from ").concat(action, "this post");
    var alertText = "You earned ".concat(amount, " coin").concat(s, " from ").concat(action, "a post");
    yield _notification.default.createNotification({
      post,
      forUser: user._id,
      type: 'reward',
      coin: reward,
      text,
      coinType: 'eth',
      community,
      communityId
    });
    var postObj = yield _post.default.findOne({
      _id: post
    });
    postObj.data = postData;
    var payload = {
      toUser: user,
      post: postObj,
      action: alertText,
      noteType: 'reward'
    };
    (0, _notifications.sendNotification)(user, alertText, payload);
    return user;
  });
  return _sendNotification.apply(this, arguments);
}

function updatePendingEarnings(_x10) {
  return _updatePendingEarnings.apply(this, arguments);
}

function _updatePendingEarnings() {
  _updatePendingEarnings = (0, _asyncToGenerator2.default)(function* (posts) {
    posts = yield posts.map(post => _earnings.default.updateMany({
      post: post.post
    }, {
      estimatedPostPayout: post.payout / _globalConstants.TOKEN_DECIMALS
    }, {
      multi: true
    }));
    return Promise.all(posts);
  });
  return _updatePendingEarnings.apply(this, arguments);
}

function getOldRewards() {
  return _getOldRewards.apply(this, arguments);
}

function _getOldRewards() {
  _getOldRewards = (0, _asyncToGenerator2.default)(function* () {
    return _community2.default.aggregate([{
      $match: {}
    }, {
      $group: {
        _id: 0,
        rewardFund: {
          $sum: '$rewardFund'
        }
      }
    }]);
  });
  return _getOldRewards.apply(this, arguments);
}
//# sourceMappingURL=ethRewards.js.map