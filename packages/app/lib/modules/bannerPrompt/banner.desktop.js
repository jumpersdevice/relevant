'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = ComponentName;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _styles = require('../../styles');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _uni = require('../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/bannerPrompt/banner.desktop.js';
ComponentName.propTypes = {
  messageText: _propTypes.default.string,
  actionText: _propTypes.default.string,
  dismissText: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onDismiss: _propTypes.default.func
};
function ComponentName(_ref) {
  var messageText = _ref.messageText,
    actionText = _ref.actionText,
    dismissText = _ref.dismissText,
    onClick = _ref.onClick,
    onDismiss = _ref.onDismiss;
  return _react.default.createElement(
    _uni.View,
    {
      fdirection: 'row',
      justify: 'space-between',
      align: 'center',
      __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.BodyText,
      {
        c: _styles.colors.black,
        inline: 1,
        __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 7 }
      },
      messageText,
      _react.default.createElement(
        _ULink.default,
        {
          to: '#',
          __source: { fileName: _jsxFileName, lineNumber: 26, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.Text,
          {
            inline: 1,
            onClick: onClick,
            __source: { fileName: _jsxFileName, lineNumber: 27, columnNumber: 11 }
          },
          actionText
        )
      )
    ),
    _react.default.createElement(
      _ULink.default,
      {
        onClick: onDismiss,
        to: '#',
        c: _styles.colors.black,
        __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 7 }
      },
      dismissText
    )
  );
}
//# sourceMappingURL=banner.desktop.js.map
