'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _reactRouterDom = require('react-router-dom');
var _reactRouter = require('react-router');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/web/withAuth.js';
var withAuth = function withAuth(Component, role) {
  var AuthComponent = function AuthComponent(props) {
    var authenticated = props.authenticated;
    if (role && props.user) {
      if (role !== props.user.role) authenticated = false;
    }
    return authenticated
      ? _react.default.createElement(
          Component,
          (0, _extends2.default)({}, props, {
            __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }
          })
        )
      : _react.default.createElement(_reactRouter.Redirect, {
          to: { pathname: '/', state: { from: props.location } },
          __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 }
        });
  };
  AuthComponent.propTypes = {
    location: _propTypes.default.object.isRequired,
    authenticated: _propTypes.default.bool.isRequired,
    user: _propTypes.default.object
  };
  return (0, _reactRouterDom.withRouter)(
    (0, _reactRedux.connect)(function(state) {
      return { authenticated: state.auth.isAuthenticated, user: state.auth.user };
    })(AuthComponent)
  );
};
var _default = withAuth;
exports.default = _default;
//# sourceMappingURL=withAuth.js.map
