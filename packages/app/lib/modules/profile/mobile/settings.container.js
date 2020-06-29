'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _uni = require('../../styled/uni');
var _toggle = _interopRequireDefault(require('../settings/toggle.container'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/mobile/settings.container.js';
var Settings = function Settings() {
  return _react.default.createElement(
    _reactNativeWeb.ScrollView,
    { __source: { fileName: _jsxFileName, lineNumber: 7, columnNumber: 3 } },
    _react.default.createElement(
      _uni.View,
      { m: 2, __source: { fileName: _jsxFileName, lineNumber: 8, columnNumber: 5 } },
      _react.default.createElement(_toggle.default, {
        __source: { fileName: _jsxFileName, lineNumber: 9, columnNumber: 7 }
      })
    )
  );
};
var _default = Settings;
exports.default = _default;
//# sourceMappingURL=settings.container.js.map
