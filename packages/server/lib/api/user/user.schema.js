"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userMutation = exports.userSubscription = exports.userQuery = void 0;

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

var _apolloServer = require("apollo-server");

var _user = _interopRequireDefault(require("./user.model"));

const USER_UPDATED = 'USER_UPDATED';
const pubsub = new _apolloServer.PubSub();
const remove = Object.keys(_user.default.schema.paths).filter(key => _user.default.schema.paths[key].options.select === false);
const customizationOptions = {};
const TC = (0, _graphqlComposeMongoose.composeWithMongoose)(_user.default, customizationOptions); // async function testSub() {
//   const user = await User.findOne({ handle: 'slava' }, '+email');
//   setInterval(() => {
//     user.balance += 10;
//     pubsub.publish(USER_UPDATED, user);
//   }, 1000);
// }
// testSub();

remove.map(field => TC.extendField(field, {
  description: 'Only visible to owner',
  resolve: (source, args, context) => {
    const isOwner = context.user && source._id.equals(context.user._id);

    return isOwner ? source[field] : null;
  }
})); // STEP 3: Add needed CRUD User operations to the GraphQL Schema
// via graphql-compose it will be much much easier, with less typing

const userQuery = {
  userOne: TC.getResolver('findOne'),
  // userById: TC.getResolver('findById'),
  // userByIds: TC.getResolver('findByIds'),
  // userMany: TC.getResolver('findMany'),
  // userCount: TC.getResolver('count'),
  // userConnection: TC.getResolver('connection'),
  // userPagination: TC.getResolver('pagination')
  me: TC.getResolver('findOne').wrapResolve(next => rp => {
    if (!rp.context.user) return null;
    rp.args.user = rp.context.user._id;
    return next(rp);
  })
}; // TC.addFields({
//   test: { type: 'String' }
// });

exports.userQuery = userQuery;
const userSubscription = {
  userUpdated: {
    type: TC.getType(),
    // args: {
    //   userId: 'ID!'
    // },
    description: 'Subscribe to userUpdated',
    resolve: payload => payload,
    subscribe: () => pubsub.asyncIterator([USER_UPDATED])
  }
};
exports.userSubscription = userSubscription;
const userMutation = {}; // schemaComposer.Mutation.addFields({
//   //   userCreateOne: UserTC.getResolver('createOne'),
//   //   userCreateMany: UserTC.getResolver('createMany'),
//   //   userUpdateById: UserTC.getResolver('updateById'),
//   //   userUpdateOne: UserTC.getResolver('updateOne'),
//   //   userUpdateMany: UserTC.getResolver('updateMany'),
//   //   userRemoveById: UserTC.getResolver('removeById'),
//   //   userRemoveOne: UserTC.getResolver('removeOne'),
//   //   userRemoveMany: UserTC.getResolver('removeMany'),
// });

exports.userMutation = userMutation;
//# sourceMappingURL=user.schema.js.map