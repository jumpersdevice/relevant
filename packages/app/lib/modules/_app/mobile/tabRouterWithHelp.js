'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _uni = require('../../styled/uni');
var _global = require('../../../styles/global');
var _reactNativeHelpScout = require('react-native-help-scout');
var _tabRouter = require('./tabRouter');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/mobile/tabRouterWithHelp.js';
_reactNativeHelpScout.Beacon.init('40ed799c-8c6c-4226-9215-5adfd59e35eb');
var TabContainerWithHelp = function TabContainerWithHelp(props) {
  return _react.default.createElement(
    _uni.Box,
    {
      style: { flex: 1 },
      __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 3 }
    },
    _react.default.createElement(
      _tabRouter.TabContainer,
      (0, _extends2.default)({}, props, {
        __source: { fileName: _jsxFileName, lineNumber: 11, columnNumber: 5 }
      })
    ),
    _react.default.createElement(
      _uni.AbsoluteView,
      {
        absolute: true,
        bottom: _global.IphoneX ? 12 : 8,
        right: 2,
        styles: { zIndex: 10 },
        __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 5 }
      },
      _react.default.createElement(
        _uni.Button,
        {
          onPress: function onPress() {
            return _reactNativeHelpScout.Beacon.open();
          },
          bradius: 2,
          h: 4,
          minwidth: '0',
          __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 7 }
        },
        'Help'
      )
    )
  );
};
TabContainerWithHelp.router = _tabRouter.TabNavigator.router;
var _default = TabContainerWithHelp;
exports.default = _default;
//# sourceMappingURL=tabRouterWithHelp.js.map
