'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.memberMutation = exports.memberSubscription = exports.memberQuery = exports.UPDATE_UNREAD = void 0;

var _graphqlComposeMongoose = require('graphql-compose-mongoose');

var _graphqlSubscriptions = require('graphql-subscriptions');

var _pubsub = require('../../graphql/pubsub');

var _graphqlCompose = require('graphql-compose');

var _communityMember = _interopRequireDefault(require('./community.member.model'));

// import Community from './community.model';
const UPDATE_UNREAD = 'UPDATE_UNREAD';
exports.UPDATE_UNREAD = UPDATE_UNREAD;
const TC = (0, _graphqlComposeMongoose.composeWithMongoose)(_communityMember.default, {}); // async function testSub() {
//   const c = await Community.findOne({ slug: 'relevant' });
//   console.log(c);
//   setInterval(() => {
//     pubsub.publish(UPDATE_UNREAD, { communityId: c._id.toString(), community: c.slug });
//   }, 1000);
// }
// testSub();
// STEP 3: Add needed CRUD User operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing

const memberQuery = {
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
    rp.args.filter = {
      ...rp.args.filter,
      user: rp.context.user._id,
      deletedCommunity: {
        $ne: true
      }
    };
    return next(rp);
  })
};
exports.memberQuery = memberQuery;

function onlyOwner(resolvers) {
  Object.keys(resolvers).forEach(k => {
    resolvers[k] = resolvers[k].wrapResolve(next => async rp => {
      rp.beforeRecordMutate = async function bfRM(doc, rpHook) {
        if (!rpHook.context.user || !doc.user.equals(rpHook.context.user._id)) {
          throw new Error('Forbidden!');
        }

        return doc;
      };

      return next(rp);
    });
  });
  return resolvers;
}

const memberSubscription = {
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
const memberMutation = {
  // userCreateOne: UserTC.getResolver('createOne'),
  // userCreateMany: UserTC.getResolver('createMany'),
  ...onlyOwner({
    memberUpdateById: TC.getResolver('updateById'),
    memberUpdateOne: TC.getResolver('updateOne'),
    updateUnread: _graphqlCompose.schemaComposer.createResolver({
      name: 'updateUnread',
      type: TC.getResolver('updateById').type,
      kind: TC.getResolver('updateById').kind,
      args: {
        record: `input MemberUnreadInput {
        _id: ID!
        unread: Int!
      }`
      },
      resolve: TC.getResolver('updateById').resolve
    })
  }) //   userUpdateMany: UserTC.getResolver('updateMany'),
  //   userRemoveById: UserTC.getResolver('removeById'),
  //   userRemoveOne: UserTC.getResolver('removeOne'),
  //   userRemoveMany: UserTC.getResolver('removeMany'),
};
exports.memberMutation = memberMutation;
//# sourceMappingURL=member.schema.js.map
