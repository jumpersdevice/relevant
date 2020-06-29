'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Test;
var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral')
);
var _react = _interopRequireWildcard(require('react'));
var _uni = require('../styled/uni');
var _reactHooks = require('@apollo/react-hooks');
var _graphqlTag = _interopRequireDefault(require('graphql-tag'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/apollo.demo.js';
function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  query {\n    me(filter: { handle: "slava" }) {\n      _id\n      handle\n      balance\n      name\n      email\n    }\n  }\n'
  ]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  subscription {\n    userUpdated {\n      _id\n      balance\n      handle\n      name\n      email\n    }\n  }\n'
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var SUBSCRIBE = (0, _graphqlTag.default)(_templateObject());
var GET_ME = (0, _graphqlTag.default)(_templateObject2());
function Test() {
  var _useQuery = (0, _reactHooks.useQuery)(GET_ME),
    data = _useQuery.data,
    loading = _useQuery.loading,
    error = _useQuery.error,
    subscribeToMore = _useQuery.subscribeToMore;
  (0, _react.useEffect)(
    function() {
      var unsubscribe = subscribeToMore({ document: SUBSCRIBE });
      return function() {
        return unsubscribe();
      };
    },
    [subscribeToMore]
  );
  if (loading)
    return _react.default.createElement(
      _uni.BodyText,
      { __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 23 } },
      'Loading...'
    );
  if (error)
    return _react.default.createElement(
      _uni.BodyText,
      { __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 21 } },
      'ERROR: ',
      error.message
    );
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 39, columnNumber: 5 } },
    _react.default.createElement(
      _uni.BodyText,
      { __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 7 } },
      'handle: ',
      data.me.handle,
      ', email: ',
      data.me.email,
      ', balance=',
      data.me.balance
    )
  );
}
//# sourceMappingURL=apollo.demo.js.map
