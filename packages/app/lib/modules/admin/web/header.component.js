'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _reactRouterDom = require('react-router-dom');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRouterConfig = require('react-router-config');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/header.component.js';
function AdminHeader(props) {
  return _react.default.createElement(
    'div',
    { __source: { fileName: _jsxFileName, lineNumber: 8, columnNumber: 5 } },
    _react.default.createElement(
      'div',
      {
        style: { alignSelf: 'flex-start', margin: 20 },
        __source: { fileName: _jsxFileName, lineNumber: 9, columnNumber: 7 }
      },
      _react.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'link',
          to: '/admin/contract',
          __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 9 }
        },
        'Contract'
      ),
      _react.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'link',
          to: '/admin/topics',
          __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 9 }
        },
        'Topics'
      ),
      _react.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'link',
          to: '/admin/invites',
          __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 9 }
        },
        'Invites'
      ),
      _react.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'link',
          to: '/admin/waitlist',
          __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 9 }
        },
        'Waitlist'
      ),
      _react.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'link',
          to: '/admin/flagged',
          __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 9 }
        },
        'Flagged'
      ),
      _react.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'link',
          to: '/admin/downvotes',
          __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 9 }
        },
        'Downvotes'
      ),
      _react.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'link',
          to: '/admin/email',
          __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 9 }
        },
        'Email'
      ),
      _react.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'link',
          to: '/admin/topPosts',
          __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 9 }
        },
        'Top Posts'
      ),
      _react.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'link',
          to: '/admin/community',
          __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 }
        },
        'Community'
      )
    ),
    (0, _reactRouterConfig.renderRoutes)(props.route.routes)
  );
}
AdminHeader.propTypes = { route: _propTypes.default.object };
var _default = (0, _reactRouterDom.withRouter)(AdminHeader);
exports.default = _default;
//# sourceMappingURL=header.component.js.map
