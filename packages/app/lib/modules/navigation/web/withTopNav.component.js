'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRouterDom = require('react-router-dom');
var _uni = require('../../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/web/withTopNav.component.js';
var WithTopNav = function WithTopNav(_ref) {
  var route = _ref.route;
  return _react.default.createElement(
    _uni.View,
    {
      fdirection: 'column',
      display: 'flex',
      grow: 1,
      __source: { fileName: _jsxFileName, lineNumber: 7, columnNumber: 3 }
    },
    _react.default.createElement(
      _reactRouterDom.Switch,
      { __source: { fileName: _jsxFileName, lineNumber: 8, columnNumber: 5 } },
      route.routes.map(function(r, index) {
        return _react.default.createElement(_reactRouterDom.Route, {
          key: index,
          path: r.path,
          exact: r.exact,
          state: r.state,
          render: function render(props) {
            return r.navbar
              ? _react.default.createElement(
                  r.navbar,
                  (0, _extends2.default)({}, props, {
                    title: r.title,
                    __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 40 }
                  })
                )
              : null;
          },
          __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 9 }
        });
      })
    ),
    _react.default.createElement(
      _reactRouterDom.Switch,
      { __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 5 } },
      route.routes.map(function(r, index) {
        return _react.default.createElement(_reactRouterDom.Route, {
          key: index,
          path: r.path,
          exact: r.exact,
          component: r.component,
          __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 9 }
        });
      })
    )
  );
};
WithTopNav.propTypes = { route: _propTypes.default.object };
var _default = (0, _reactRouterDom.withRouter)(WithTopNav);
exports.default = _default;
//# sourceMappingURL=withTopNav.component.js.map
