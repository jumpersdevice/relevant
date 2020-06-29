'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.INC_UNREAD = exports.CLEAR_UNREAD = exports.MEMBER_BY_ID = exports.MY_MEMBERSHIPS = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral')
);
var _graphqlTag = _interopRequireDefault(require('graphql-tag'));
function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  subscription IncrementUread($communities: [ID!]!) {\n    updateUnread(communities: $communities) {\n      communityId\n      community\n    }\n  }\n'
  ]);
  _templateObject4 = function _templateObject4() {
    return data;
  };
  return data;
}
function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  mutation UpdateUnread($_id: ID!) {\n    updateUnread(record: { _id: $_id, unread: 0 }) {\n      record {\n        _id\n        unread\n        pagerank\n        embeddedUser {\n          handle\n        }\n      }\n    }\n  }\n'
  ]);
  _templateObject3 = function _templateObject3() {
    return data;
  };
  return data;
}
function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  query MemberById($_id: MongoID!) {\n    memberById(_id: $_id) {\n      _id\n      unread\n      user\n      community\n      communityId\n      pagerank\n    }\n  }\n'
  ]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  query myMemberships($communityId: MongoID) {\n    myMemberships(filter: { communityId: $communityId }) {\n      _id\n      unread\n      user\n      community\n      communityId\n      pagerank\n    }\n  }\n'
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var MY_MEMBERSHIPS = (0, _graphqlTag.default)(_templateObject());
exports.MY_MEMBERSHIPS = MY_MEMBERSHIPS;
var MEMBER_BY_ID = (0, _graphqlTag.default)(_templateObject2());
exports.MEMBER_BY_ID = MEMBER_BY_ID;
var CLEAR_UNREAD = (0, _graphqlTag.default)(_templateObject3());
exports.CLEAR_UNREAD = CLEAR_UNREAD;
var INC_UNREAD = (0, _graphqlTag.default)(_templateObject4());
exports.INC_UNREAD = INC_UNREAD;
//# sourceMappingURL=queries.js.map
