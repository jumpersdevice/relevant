'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _reactRouter = require('react-router');
var _reactRouterDom = require('react-router-dom');
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/web/communityRedirect.js';
var CommunityRedirect = (0, _reactRouterDom.withRouter)(function(props) {
  var community = props.community;
  var activeCommunity;
  if (community.active && community.active !== 'undefined') {
    activeCommunity = community.active;
  }
  if (
    !activeCommunity ||
    activeCommunity === 'undefined' ||
    activeCommunity === undefined
  ) {
    activeCommunity = 'relevant';
  }
  return _react.default.createElement(
    _reactRouter.Redirect,
    (0, _extends2.default)({}, props, {
      to: '/'.concat(activeCommunity, '/new'),
      __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 10 }
    })
  );
});
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user,
    auth: state.auth,
    community: state.community,
    initialValues: {},
    enableReinitialize: true
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)({}, dispatch) };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(CommunityRedirect);
exports.default = _default;
//# sourceMappingURL=communityRedirect.js.map
