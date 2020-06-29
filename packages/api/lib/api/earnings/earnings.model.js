'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _mongoose = _interopRequireDefault(require('mongoose'));

var _socketEvent = _interopRequireDefault(require('../../socket/socketEvent'));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

var { Schema } = _mongoose.default;
var EarningsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    source: {
      type: String,
      default: 'post'
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    // amount: { type: Number, default: 0 },
    // spent is legacy code keep in case we need to recompute legacy tokens
    spent: {
      type: Number,
      default: 0
    },
    // pending: { type: Number, default: 0 },
    stakedTokens: {
      type: Number,
      default: 0
    },
    totalPostShares: {
      type: Number,
      default: 0
    },
    estimatedPostPayout: {
      type: Number,
      default: 0
    },
    shares: {
      type: Number,
      default: 0
    },
    earned: {
      type: Number,
      default: 0
    },
    payoutTime: Date,
    status: String,
    type: {
      type: String,
      default: 'coins'
    },
    community: {
      type: String
    },
    communityId: {
      type: Schema.Types.ObjectId,
      ref: 'Community'
    },
    cashOutAttempt: {
      type: Schema.Types.Boolean,
      default: false
    },
    cashOutAmt: {
      type: Number,
      default: 0
    },
    prevBalance: {
      type: Number,
      default: 0
    },
    endBalance: {
      type: Number,
      default: 0
    },
    totalPreviousPaidout: {
      type: Number,
      default: 0
    },
    legacyAirdrop: {
      type: Number,
      default: 0
    },
    referralTokens: {
      type: Number,
      default: 0
    },
    airdropTokens: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);
EarningsSchema.index({
  post: 1
});
EarningsSchema.index({
  status: 1
});
EarningsSchema.index({
  user: 1,
  status: 1
});
EarningsSchema.index({
  user: 1,
  post: 1
});

EarningsSchema.statics.updateRewardsRecord = /*#__PURE__*/ (function() {
  var _updateRewardsRecord = (0, _asyncToGenerator2.default)(function*(earning) {
    var updatedEarning = yield this.findOneAndUpdate(
      {
        user: earning.user,
        post: earning.post,
        communityId: earning.communityId
      },
      _objectSpread({}, earning),
      {
        new: true,
        upsert: true
      }
    );
    updatedEarning.updateClient({
      actionType: 'UPDATE_EARNING'
    });
    return updatedEarning;
  });

  function updateRewardsRecord(_x) {
    return _updateRewardsRecord.apply(this, arguments);
  }

  return updateRewardsRecord;
})();

EarningsSchema.methods.updateClient = function updateClient(_ref) {
  var { actionType } = _ref;
  var earningsAction = {
    _id: this.user,
    type: actionType,
    payload: this
  };

  _socketEvent.default.emit('socketEvent', earningsAction);
};

EarningsSchema.pre(
  'remove',
  /*#__PURE__*/ (function() {
    var _preRemove = (0, _asyncToGenerator2.default)(function*(next) {
      this.updateClient({
        actionType: 'REMOVE_EARNING'
      });
      next();
    });

    function preRemove(_x2) {
      return _preRemove.apply(this, arguments);
    }

    return preRemove;
  })()
);

EarningsSchema.statics.updateUserBalance = /*#__PURE__*/ (function() {
  var _updateBalance = (0, _asyncToGenerator2.default)(function*(earning) {
    earning = new this(earning);
    earning = yield earning.save();
    return earning;
  });

  function updateBalance(_x3) {
    return _updateBalance.apply(this, arguments);
  }

  return updateBalance;
})();

EarningsSchema.statics.updateEarnings = /*#__PURE__*/ (function() {
  var _updateEarnings = (0, _asyncToGenerator2.default)(function*(_ref2) {
    var { post, communityId } = _ref2;

    if (!post.data) {
      post.data = yield this.model('PostData').find({
        post: post._id,
        communityId
      });
    }

    yield this.model('Earnings').updateMany(
      {
        post: post._id,
        communityId
      },
      {
        estimatedPostPayout: post.data.expectedPayout,
        totalPostShares: post.data.shares
      },
      {
        multi: true
      }
    );
    var earnings = yield this.find({
      post: post._id,
      communityId
    });
    earnings.forEach(e =>
      e.updateClient({
        actionType: 'UPDATE_EARNING'
      })
    );
    return earnings;
  });

  function updateEarnings(_x4) {
    return _updateEarnings.apply(this, arguments);
  }

  return updateEarnings;
})();

EarningsSchema.statics.stakedTokens = /*#__PURE__*/ (function() {
  var _stakedTokens = (0, _asyncToGenerator2.default)(function*() {
    return this.model('Earnings').aggregate([
      {
        $match: {
          status: 'pending'
        }
      },
      {
        $group: {
          _id: '$community',
          stakedTokens: {
            $sum: '$stakedTokens'
          }
        }
      }
    ]);
  });

  function stakedTokens() {
    return _stakedTokens.apply(this, arguments);
  }

  return stakedTokens;
})();

module.exports = _mongoose.default.model('Earnings', EarningsSchema);
//# sourceMappingURL=earnings.model.js.map
