'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _mongoose = _interopRequireDefault(require('mongoose'));

var _text = require('@r3l/app/lib/utils/text');

var _socketEvent = _interopRequireDefault(require('../../socket/socketEvent'));

var { Schema } = _mongoose.default;
var CommunitySchema = new Schema(
  {
    name: String,
    slug: {
      type: String,
      unique: true,
      required: true
    },
    description: String,
    channels: [
      {
        type: String
      }
    ],
    topics: [
      {
        type: String,
        ref: 'Tags'
      }
    ],
    image: String,
    currentPosts: {
      type: Number,
      default: 0
    },
    rewardFund: {
      type: Number,
      default: 0
    },
    currentShares: {
      type: Number,
      default: 0
    },
    topPostShares: {
      type: Number,
      default: 0
    },
    postCount: {
      type: Number,
      default: 0
    },
    lastRewardFundUpdate: {
      type: Date,
      default: new Date()
    },
    // TODO - start using this for twitter?
    avgTwitterScore: {
      type: Number,
      default: 0
    },
    twitterCount: {
      type: Number,
      default: 0
    },
    lastTwitterUpdate: {
      type: Date
    },
    maxUserRank: {
      type: Number
    },
    maxPostRank: {
      type: Number
    },
    danglingConsumer: {
      type: Number,
      default: 0
    },
    negConsumer: {
      type: Number,
      default: 0
    },
    numberOfElements: {
      type: Number
    },
    memberCount: {
      type: Number
    },
    inactive: Boolean,
    private: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    betEnabled: {
      type: Boolean,
      default: true
    },
    defaultPost: {
      type: String,
      default: 'link'
    },
    customParams: {}
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  }
);
CommunitySchema.virtual('admins', {
  ref: 'CommunityMember',
  localField: 'slug',
  foreignField: 'community'
});
CommunitySchema.virtual('superAdmins', {
  ref: 'CommunityMember',
  localField: 'slug',
  foreignField: 'community'
});
CommunitySchema.virtual('members', {
  ref: 'CommunityMember',
  localField: 'slug',
  foreignField: 'community'
});
CommunitySchema.index({
  slug: 1
}); // Validate _id

CommunitySchema.path('slug').validate(
  slug => _text.NAME_PATTERN.test(slug),
  'Username can only contain letters, numbers, dashes and underscores'
);
CommunitySchema.pre(
  'remove',
  /*#__PURE__*/ (function() {
    var _remove = (0, _asyncToGenerator2.default)(function*(next) {
      var _this = this;

      var members = yield this.model('CommunityMember').find({
        community: this.slug
      });
      yield this.model('CommunityMember')
        .deleteMany({
          community: this.slug
        })
        .exec(); // THIS IS TRICKY BECAUSE OF LEAVE RACE CONDITIONS

      var leave = members.map(
        /*#__PURE__*/ (function() {
          var _ref = (0, _asyncToGenerator2.default)(function*(m) {
            return _this.leave(m.user);
          });

          return function(_x2) {
            return _ref.apply(this, arguments);
          };
        })()
      );
      if (leave) yield Promise.all(leave);
      next();
    });

    function remove(_x) {
      return _remove.apply(this, arguments);
    }

    return remove;
  })()
);

CommunitySchema.methods.updateMemeberCount = /*#__PURE__*/ (function() {
  var _updateMemeberCount = (0, _asyncToGenerator2.default)(function*() {
    this.memberCount = yield this.model('CommunityMember').countDocuments({
      communityId: this._id
    });
    return this.save();
  });

  function updateMemeberCount() {
    return _updateMemeberCount.apply(this, arguments);
  }

  return updateMemeberCount;
})();

CommunitySchema.methods.leave = /*#__PURE__*/ (function() {
  var _leave = (0, _asyncToGenerator2.default)(function*(userId) {
    yield this.model('CommunityMember').deleteOne({
      user: userId,
      communityId: this._id
    });
    yield this.updateMemeberCount();
  });

  function leave(_x3) {
    return _leave.apply(this, arguments);
  }

  return leave;
})();

CommunitySchema.methods.join = /*#__PURE__*/ (function() {
  var _join = (0, _asyncToGenerator2.default)(function*(userId, role, dontUpdateCount) {
    var superAdmin = role === 'superAdmin';
    var { _id: communityId, slug: community } = this;
    var user = yield this.model('User').findOne(
      {
        _id: userId
      },
      'name image handle'
    );
    if (!user) throw new Error('missing user');
    var member = yield this.model('CommunityMember').findOne({
      user: user._id,
      communityId
    });

    if (member && role === 'admin') {
      member.role = 'admin';
      return member.save();
    }

    if (member && superAdmin) {
      member.superAdmin = true;
      return member.save();
    }

    if (member) return member;
    member = {
      user: userId,
      embeddedUser: user,
      communityId,
      community,
      reputation: 0,
      superAdmin,
      role: superAdmin ? 'admin' : role || 'user'
    };
    member = new (this.model('CommunityMember'))(member);
    yield member.save();

    if (!dontUpdateCount) {
      yield this.updateMemeberCount();
    }

    var memberEvent = {
      _id: user._id,
      type: 'ADD_USER_MEMBERSHIP',
      payload: member
    };

    _socketEvent.default.emit('socketEvent', memberEvent);

    return member;
  });

  function join(_x4, _x5, _x6) {
    return _join.apply(this, arguments);
  }

  return join;
})();

CommunitySchema.methods.setCustomParams = /*#__PURE__*/ (function() {
  var _setCustomParams = (0, _asyncToGenerator2.default)(function*(params) {
    this.customParams = params;
    return this.save();
  });

  function setCustomParams(_x7) {
    return _setCustomParams.apply(this, arguments);
  }

  return setCustomParams;
})();

var _default = _mongoose.default.model('Community', CommunitySchema);

exports.default = _default;
//# sourceMappingURL=community.model.js.map
