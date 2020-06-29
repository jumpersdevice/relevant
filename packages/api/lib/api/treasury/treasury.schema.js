'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.treasuryQuery = void 0;

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _graphqlComposeMongoose = require('graphql-compose-mongoose');

var _user = _interopRequireDefault(require('../user/user.model'));

var _earnings = _interopRequireDefault(require('../earnings/earnings.model'));

var _community = _interopRequireDefault(require('../community/community.model'));

var _treasury = _interopRequireDefault(require('./treasury.model'));

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

var customizationOptions = {}; // left it empty for simplicity, described below

var TreasuryTC = (0, _graphqlComposeMongoose.composeWithMongoose)(
  _treasury.default,
  customizationOptions
); // STEP 3: Add needed CRUD User operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing

var treasuryQuery = {
  distributedTokens: {
    type:
      'type Aggregate {\n      _id: String,\n      balance: Float,\n      legacyTokens: Float,\n      legacyAirdrop: Float,\n      airdropTokens: Float,\n      cashedOut: Float,\n      tokenBalance: Float,\n      curationRewards: Float,\n      airdrop: Float,\n      earned: Float,\n      rewardFund: Float,\n    }',
    resolve: (function() {
      var _resolve = (0, _asyncToGenerator2.default)(function*() {
        var ag = yield _user.default.aggregate([
          {
            $match: {}
          },
          {
            $group: {
              _id: '',
              balance: {
                $sum: '$balance'
              },
              legacyTokens: {
                $sum: '$legacyTokens'
              },
              airdropTokens: {
                $sum: '$airdropTokens'
              },
              legacyAirdrop: {
                $sum: '$legacyAirdrop'
              },
              cashedOut: {
                $sum: '$cashedOut'
              },
              tokenBalance: {
                $sum: '$tokenBalance'
              }
            }
          }
        ]);
        var earnigns = yield _earnings.default.aggregate([
          {
            $match: {
              status: 'paidout'
            }
          },
          {
            $group: {
              _id: '',
              earned: {
                $sum: '$earned'
              }
            }
          }
        ]);
        var rewards = yield _community.default.aggregate([
          {
            $match: {}
          },
          {
            $group: {
              _id: '',
              rewardFund: {
                $sum: '$rewardFund'
              }
            }
          }
        ]);
        var { earned } = earnigns[0];
        var rewardFund = rewards[0].rewardFund / 1e18;
        var { balance, legacyTokens, airdropTokens, legacyAirdrop, cashedOut } = ag[0];
        var curationRewards =
          balance - legacyTokens - airdropTokens - legacyAirdrop + cashedOut;
        var airdrop = legacyTokens + airdropTokens + legacyAirdrop;
        return _objectSpread(
          _objectSpread({}, ag[0]),
          {},
          {
            curationRewards,
            airdrop,
            earned,
            rewardFund
          }
        );
      });

      function resolve() {
        return _resolve.apply(this, arguments);
      }

      return resolve;
    })()
  },
  treasuryOne: TreasuryTC.getResolver('findOne'),
  treasuryById: TreasuryTC.getResolver('findById'),
  treasuryByIds: TreasuryTC.getResolver('findByIds'),
  treasuryMany: TreasuryTC.getResolver('findMany'),
  treasuryCount: TreasuryTC.getResolver('count'),
  treasuryConnection: TreasuryTC.getResolver('connection'),
  treasuryPagination: TreasuryTC.getResolver('pagination')
}; // schemaComposer.Mutation.addFields({
//   //   userCreateOne: UserTC.getResolver('createOne'),
//   //   userCreateMany: UserTC.getResolver('createMany'),
//   //   userUpdateById: UserTC.getResolver('updateById'),
//   //   userUpdateOne: UserTC.getResolver('updateOne'),
//   //   userUpdateMany: UserTC.getResolver('updateMany'),
//   //   userRemoveById: UserTC.getResolver('removeById'),
//   //   userRemoveOne: UserTC.getResolver('removeOne'),
//   //   userRemoveMany: UserTC.getResolver('removeMany'),
// });

exports.treasuryQuery = treasuryQuery;
//# sourceMappingURL=treasury.schema.js.map
