"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _graphqlCompose = require("graphql-compose");

var _treasury = require("../api/treasury/treasury.schema");

var _user = require("../api/user/user.schema");

var _member = require("../api/community/member.schema");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

_graphqlCompose.schemaComposer.Query.addFields(_objectSpread(_objectSpread(_objectSpread({}, _treasury.treasuryQuery), _user.userQuery), _member.memberQuery));

_graphqlCompose.schemaComposer.Subscription.addFields(_objectSpread(_objectSpread({}, _user.userSubscription), _member.memberSubscription));

_graphqlCompose.schemaComposer.Mutation.addFields(_objectSpread({}, _member.memberMutation));

var _default = _graphqlCompose.schemaComposer.buildSchema();

exports.default = _default;
//# sourceMappingURL=schema.js.map