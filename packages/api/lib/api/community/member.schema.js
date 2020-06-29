'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.memberMutation = exports.memberSubscription = exports.memberQuery = exports.UPDATE_UNREAD = void 0;

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _graphqlComposeMongoose = require('graphql-compose-mongoose');

var _graphqlSubscriptions = require('graphql-subscriptions');

var _pubsub = require('../../graphql/pubsub');

var _graphqlCompose = require('graphql-compose');

var _communityMember = _interopRequireDefault(require('./community.member.model'));

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

// import Community from './community.model';
var UPDATE_UNREAD = 'UPDATE_UNREAD';
exports.UPDATE_UNREAD = UPDATE_UNREAD;
var TC = (0, _graphqlComposeMongoose.composeWithMongoose)(_communityMember.default, {}); // async function testSub() {
//   const c = await Community.findOne({ slug: 'relevant' });
//   console.log(c);
//   setInterval(() => {
//     pubsub.publish(UPDATE_UNREAD, { communityId: c._id.toString(), community: c.slug });
//   }, 1000);
// }
// testSub();
// STEP 3: Add needed CRUD User operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing

var memberQuery = {
  memberOne: TC.getResolver('findOne'),
  memberById: TC.getResolver('findById').wrapResolve(next => rp => {
    return next(rp);
  }),
  // userByIds: TC.getResolver('findByIds'),
  memberMany: TC.getResolver('findMany'),
  // userCount: TC.getResolver('count'),
  // userConnection: TC.getResolver('connection'),
  // userPagination: TC.getResolver('pagination')
  myMemberships: TC.getResolver('findMany').wrapResolve(next => rp => {
    if (!rp.context.user) return null;
    rp.args.filter = _objectSpread(
      _objectSpread({}, rp.args.filter),
      {},
      {
        user: rp.context.user._id,
        deletedCommunity: {
          $ne: true
        }
      }
    );
    return next(rp);
  })
};
exports.memberQuery = memberQuery;

function onlyOwner(resolvers) {
  Object.keys(resolvers).forEach(k => {
    resolvers[k] = resolvers[k].wrapResolve(next =>
      /*#__PURE__*/ (function() {
        var _ref = (0, _asyncToGenerator2.default)(function*(rp) {
          rp.beforeRecordMutate = /*#__PURE__*/ (function() {
            var _bfRM = (0, _asyncToGenerator2.default)(function*(doc, rpHook) {
              if (!rpHook.context.user || !doc.user.equals(rpHook.context.user._id)) {
                throw new Error('Forbidden!');
              }

              return doc;
            });

            function bfRM(_x2, _x3) {
              return _bfRM.apply(this, arguments);
            }

            return bfRM;
          })();

          return next(rp);
        });

        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
  });
  return resolvers;
}

var memberSubscription = {
  updateUnread: {
    type: TC.getType(),
    args: {
      communities: '[ID!]!'
    },
    description: 'Subscribe to unread posts notifications',
    resolve: payload => payload,
    subscribe: (0, _graphqlSubscriptions.withFilter)(
      () => _pubsub.pubsub.asyncIterator(UPDATE_UNREAD),
      (payload, args) => args.communities.includes(payload.communityId)
    )
  }
};
exports.memberSubscription = memberSubscription;

var memberMutation = _objectSpread(
  {},
  onlyOwner({
    memberUpdateById: TC.getResolver('updateById'),
    memberUpdateOne: TC.getResolver('updateOne'),
    updateUnread: _graphqlCompose.schemaComposer.createResolver({
      name: 'updateUnread',
      type: TC.getResolver('updateById').type,
      kind: TC.getResolver('updateById').kind,
      args: {
        record:
          'input MemberUnreadInput {\n        _id: ID!\n        unread: Int!\n      }'
      },
      resolve: TC.getResolver('updateById').resolve
    })
  })
);

exports.memberMutation = memberMutation;
//# sourceMappingURL=member.schema.js.map
