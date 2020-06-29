'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _mongoose = _interopRequireDefault(require('mongoose'));

var _computeApproxPageRank = _interopRequireDefault(
  require('../../pagerank/computeApproxPageRank')
);

var { Schema } = _mongoose.default;
var InviteSchema = new Schema(
  {
    invitedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    invitee: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    registeredAs: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    email: {
      type: String
    },
    name: {
      type: String
    },
    redeemed: {
      type: Boolean,
      default: false
    },
    number: {
      type: Number,
      default: 1
    },
    status: {
      type: String
    },
    invitedByString: {
      type: String
    },
    code: {
      type: String,
      index: true
    },
    url: String,
    type: String,
    // referral / admin
    community: String,
    communityId: {
      type: Schema.Types.ObjectId,
      ref: 'Community'
    }
  },
  {
    timestamps: true
  }
);

InviteSchema.statics.checkInvite = /*#__PURE__*/ (function() {
  var _checkInvite = (0, _asyncToGenerator2.default)(function*(invite) {
    if (!invite) throw new Error('No invitation code found');
    invite = yield this.findOne({
      _id: invite._id,
      redeemed: false
    });
    if (!invite) throw new Error('No invitation code found');
    return invite;
  });

  function checkInvite(_x) {
    return _checkInvite.apply(this, arguments);
  }

  return checkInvite;
})();

InviteSchema.statics.processInvite = /*#__PURE__*/ (function() {
  var _processInvite = (0, _asyncToGenerator2.default)(function*(_ref) {
    var { invitecode, user, isNotNew } = _ref;
    var invite = yield this.model('Invite').findOne({
      code: invitecode,
      redeemed: {
        $ne: true
      }
    });
    if (isNotNew && user.balance > 0 && invite !== 'admin') return user;
    if (invite)
      return referralRewards({
        invite,
        user,
        Invite: this
      });
    var publicInvite = yield this.model('User').findOne({
      handle: invitecode
    });
    if (publicInvite)
      return publicReward({
        inviter: publicInvite,
        user,
        Invite: this
      });
    return user;
  });

  function processInvite(_x2) {
    return _processInvite.apply(this, arguments);
  }

  return processInvite;
})();

function publicReward(_x3) {
  return _publicReward.apply(this, arguments);
}

function _publicReward() {
  _publicReward = (0, _asyncToGenerator2.default)(function*(_ref2) {
    var { user, inviter } = _ref2;
    yield inviter.addReward({
      type: 'publicLink',
      user
    });
    return user.addReward({
      type: 'publicInvite',
      user: inviter
    });
  });
  return _publicReward.apply(this, arguments);
}

function referralRewards(_x4) {
  return _referralRewards.apply(this, arguments);
}

function _referralRewards() {
  _referralRewards = (0, _asyncToGenerator2.default)(function*(_ref3) {
    var { invite, user, Invite } = _ref3;
    // InviteSchema.methods.referral = async function referral(user) {
    var { communityId, community } = invite;
    invite.status = 'registered';
    invite.number -= 1;
    if (invite.number === 0) invite.redeemed = true;
    invite.registeredAs = user._id;
    yield invite.save();
    var inviter = yield Invite.model('User')
      .findOne({
        _id: invite.invitedBy
      })
      .populate({
        path: 'relevance',
        match: {
          communityId
        }
      });
    var communityInstance = yield Invite.model('Community').findOne({
      _id: communityId
    });
    var role = invite.type === 'admin' ? 'admin' : null;
    yield communityInstance.join(user._id, role);

    if (role === 'admin') {
      var relevance = yield Invite.model('CommunityMember').findOne({
        user: user._id,
        communityId
      });
      relevance.pagerank = 70;
      yield relevance.save();
      user.relevance = relevance;
      return user;
    }

    user = yield user.addReward({
      type: 'referredBy',
      user: inviter
    });
    inviter = yield inviter.addReward({
      type: 'referral',
      user
    }); // console.log('updated relevance', updatedUser);

    if (user.email === invite.email) user.confirmed = true;
    var vote = new (Invite.model('Invest'))({
      investor: inviter._id,
      author: user._id,
      amount: Math.min(1, (100 - inviter.relevance.pagerank + 50) / 100),
      ownPost: false,
      communityId,
      community
    });
    yield vote.save();
    var { author: updatedUser } = yield (0, _computeApproxPageRank.default)({
      communityId,
      author: user,
      vote,
      user: inviter
    });
    return updatedUser;
  });
  return _referralRewards.apply(this, arguments);
}

module.exports = _mongoose.default.model('Invite', InviteSchema);
//# sourceMappingURL=invite.model.js.map
