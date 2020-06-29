"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _globalConstants = require("../../config/globalConstants");

var _earnings = _interopRequireDefault(require("../earnings/earnings.model"));

var _rewards = require("@r3l/app/lib/utils/rewards");

var _post = require("@r3l/app/lib/utils/post");

var {
  Schema
} = _mongoose.default;
var TEST_ENV = process.env.NODE_ENV === 'test';
var InvestSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  investor: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  ownPost: {
    type: Boolean,
    default: false
  },
  amount: Number,
  community: String,
  communityId: {
    type: Schema.Types.ObjectId,
    ref: 'Community'
  },
  // voteWeight is DEPRECATED same as shares - shares is better
  // TODO convert this in old data
  // voteWeight: { type: Number, default: 0 },
  shares: {
    type: Number,
    default: 0
  },
  stakedTokens: {
    type: Number,
    default: 0
  },
  paidOut: {
    type: Boolean,
    default: false
  },
  payoutDate: {
    type: Date
  },
  // EVERYTHING BELOW SHOULD BE REMOVED - DEPRECATED
  // vote weight
  relevantPoints: {
    type: Number,
    default: 0
  },
  rankChange: {
    type: Number,
    default: 0
  },
  // this info helps us determine how much the
  // investor (or author) has earned from this post
  upvotes: {
    type: Number,
    default: 0
  },
  downVotes: {
    type: Number,
    default: 0
  },
  updatePowerInvestor: {
    type: String,
    ref: 'User'
  },
  partialUsers: {
    type: Number,
    default: 0
  },
  relevance: {
    type: Number,
    default: 0
  },
  partialRelevance: {
    type: Number,
    default: 0
  },
  isManualBet: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
}); // InvestSchema.index({ community: 1 });

InvestSchema.index({
  post: 1
});
InvestSchema.index({
  investor: 1
});
InvestSchema.index({
  communityId: 1,
  investor: 1
});
InvestSchema.index({
  communityId: 1,
  investor: 1,
  createdAt: 1
});
InvestSchema.index({
  post: 1,
  investor: 1,
  ownPost: 1
});
InvestSchema.index({
  post: 1,
  investor: 1,
  communityId: 1
}); // TODO: we should not remove the bet and only the vote
// otherwise voters before the removal of the bet will get a worse price
// alternately we can recompute everyone's shares upon removal

InvestSchema.methods.removeVote = /*#__PURE__*/function () {
  var _removeVote = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      post,
      user
    } = _ref;
    var vote = this;
    post.data.shares -= vote.shares;
    post.data.balance = Math.max(post.data.balance - vote.stakedTokens, 0);
    var returnTokens = Math.min(user.lockedTokens, vote.stakedTokens);
    user.lockedTokens = (user.lockedTokens || 0) - returnTokens; // eslint-disable-next-line

    console.log('UNLOCK TOKENS', vote.stakedTokens, user.balance, user.lockedTokens);
    post.data.needsRankUpdate = true;
    post.data.totalShares -= vote.stakedTokens;
    var earning = yield _earnings.default.findOne({
      user: user._id,
      post: post._id
    });

    if (earning) {
      yield earning.remove();
      earning.updateClient({
        actionType: 'REMOVE_EARNING'
      });
    }

    yield post.data.save();
    yield user.save();
    yield post.save();
    yield vote.remove();
    return vote;
  });

  function removeVote(_x) {
    return _removeVote.apply(this, arguments);
  }

  return removeVote;
}();

InvestSchema.methods.placeBet = /*#__PURE__*/function () {
  var _placeBet = (0, _asyncToGenerator2.default)(function* (_ref2) {
    var {
      post,
      communityId,
      stakedTokens,
      user
    } = _ref2;
    var vote = this;
    user = yield user.updateBalance();
    canBet({
      user,
      post,
      stakedTokens
    });
    var shares = (0, _post.computeShares)({
      post,
      stakedTokens
    });
    var postData = yield this.model('PostData').findOne({
      post: post._id,
      communityId
    }); // eslint-disable-next-line

    console.log(user.handle, 'got', shares, 'for', stakedTokens, 'staked tokens');
    user.lockedTokens += stakedTokens;
    postData.shares += shares;
    postData.balance += stakedTokens;
    postData.totalShares += stakedTokens;
    var communityInstance = yield this.model('Community').findOne({
      _id: communityId
    });
    postData.expectedPayout = (0, _rewards.computePostPayout)(post.data, communityInstance);
    yield user.save();
    yield postData.save();
    post.data = postData;
    vote.shares += shares;
    vote.stakedTokens += stakedTokens;
    vote.isManualBet = user.notificationSettings.bet.manual && communityInstance.betEnabled;
    vote = yield vote.save();
    post.myVote = vote;
    yield post.save();
    user.updateClient();
    post.updateClient();
    yield updateUserEarnings({
      user,
      post,
      vote
    });
    return vote;
  });

  function placeBet(_x2) {
    return _placeBet.apply(this, arguments);
  }

  return placeBet;
}();

InvestSchema.statics.createVote = /*#__PURE__*/function () {
  var _createVote = (0, _asyncToGenerator2.default)(function* (_ref3) {
    var {
      post,
      communityInstance,
      community,
      communityId,
      amount,
      user
    } = _ref3;
    var isManualBet = user.notificationSettings.bet.manual && communityInstance.betEnabled;
    if (!post.data) throw new Error("Missing post data ".concat(post.id, " ").concat(community, " ").concat(communityId));
    var vote = new (this.model('Invest'))({
      investor: user._id,
      post: post._id,
      author: post.user,
      amount,
      ownPost: user._id.equals(post.user),
      community: communityInstance.slug,
      communityId: communityInstance._id,
      // TODO track parentPost && linkPost/aboutLink?
      // parentPost: post.parentPost,
      // linkPost: post.linkPost,
      payoutDate: post.data.payoutDate,
      paidOut: post.data.paidOut,
      isManualBet
    });
    vote = yield vote.save();
    post.data.needsRankUpdate = true; // If manual betting is enabled don't auto-bet

    if (isManualBet || amount <= 0) return vote;

    try {
      var stakedTokens = Math.abs(amount) * _globalConstants.VOTE_COST_RATIO * (user.balance + user.tokenBalance);

      if (stakedTokens > 0) {
        vote = yield vote.placeBet({
          post,
          community,
          communityId,
          stakedTokens,
          user
        });
      }
    } catch (err) {// console.log('bet error', err); // eslint-disable-line
    }

    return vote;
  });

  function createVote(_x3) {
    return _createVote.apply(this, arguments);
  }

  return createVote;
}();

function updateUserEarnings(_x4) {
  return _updateUserEarnings.apply(this, arguments);
}

function _updateUserEarnings() {
  _updateUserEarnings = (0, _asyncToGenerator2.default)(function* (_ref4) {
    var {
      user,
      post,
      vote
    } = _ref4;
    var lookup = {
      user: user._id,
      post: post._id,
      communityId: vote.communityId
    };
    var earningExists = yield _earnings.default.countDocuments(lookup);
    var earning = yield _earnings.default.findOneAndUpdate(lookup, {
      shares: vote.shares,
      stakedTokens: vote.stakedTokens,
      community: vote.community,
      communityId: vote.communityId,
      payoutTime: post.data.payoutTime,
      estimatedPostPayout: post.data.expectedPayout,
      totalPostShares: post.data.shares,
      status: 'pending'
    }, {
      new: true,
      upsert: true
    });
    if (earningExists) return earning.updateClient({
      actionType: 'UPDATE_EARNING'
    });
    return earning.updateClient({
      actionType: 'ADD_EARNING'
    });
  });
  return _updateUserEarnings.apply(this, arguments);
}

function canBet(_ref5) {
  var {
    post,
    user,
    stakedTokens
  } = _ref5;
  var now = new Date();
  var leeway = TEST_ENV ? 1000 * 60 : 0;
  var availableBalance = user.balance + user.tokenBalance - user.lockedTokens;

  if (!post.parentPost && stakedTokens <= availableBalance && post.data.eligibleForReward && !post.data.paidOut && post.data.payoutTime && new Date(post.data.payoutTime).getTime() + leeway > now.getTime()) {
    return true;
  }

  throw new Error("You cannot bet on this post, ".concat(JSON.stringify(post)));
}

module.exports = _mongoose.default.model('Invest', InvestSchema);
//# sourceMappingURL=invest.model.js.map