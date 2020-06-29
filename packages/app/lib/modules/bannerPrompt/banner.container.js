'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = BannerPrompt;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _reactRedux = require('react-redux');
var _styles = require('../../styles');
var _uni = require('../styled/uni');
var _notificationBanner = _interopRequireDefault(require('./notificationBanner'));
var _betBanner = _interopRequireDefault(require('./betBanner'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/bannerPrompt/banner.container.js';
var PROMPT_TYPES = { push: _notificationBanner.default, bet: _betBanner.default };
function BannerPrompt() {
  var notif = (0, _reactRedux.useSelector)(function(state) {
    return state.notif;
  });
  if (!notif.promptType) return null;
  var Prompt = PROMPT_TYPES[notif.promptType];
  if (!Prompt) return null;
  var promptProps = notif.promptProps;
  return _react.default.createElement(
    _uni.View,
    {
      fdirectio: 'column',
      justify: 'center',
      flex: 1,
      bg: _styles.colors.green,
      p: ['0 4', '0 2'],
      __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 5 }
    },
    _react.default.createElement(
      Prompt,
      (0, _extends2.default)({}, promptProps, {
        __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 7 }
      })
    )
  );
}
//# sourceMappingURL=banner.container.js.map
