"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphqlCompose = require("graphql-compose");

var _treasury = require("../api/treasury/treasury.schema");

var _user = require("../api/user/user.schema");

var _member = require("../api/community/member.schema");

_graphqlCompose.schemaComposer.Query.addFields({ ..._treasury.treasuryQuery,
  ..._user.userQuery,
  ..._member.memberQuery
});

_graphqlCompose.schemaComposer.Subscription.addFields({ ..._user.userSubscription,
  ..._member.memberSubscription
});

_graphqlCompose.schemaComposer.Mutation.addFields({ ..._member.memberMutation
});

var _default = _graphqlCompose.schemaComposer.buildSchema();

exports.default = _default;
//# sourceMappingURL=schema.js.map