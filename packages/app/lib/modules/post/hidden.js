'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _jsxFileName = '/Users/slavab/local/relevant/packages/app/src/modules/post/hidden.js';
HiddenPost.propTypes = { onPress: _propTypes.default.func };
function HiddenPost(_ref) {
  var onPress = _ref.onPress;
  return _react.default.createElement(
    _uni.View,
    {
      fdirection: 'row',
      __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.SmallText,
      { __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 7 } },
      'This post is hidden because it got too many downvotes. '
    ),
    _react.default.createElement(
      _uni.Touchable,
      {
        onPress: onPress,
        __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.SmallText,
        {
          c: _styles.colors.blue,
          __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 9 }
        },
        'Show post.'
      )
    )
  );
}
var _default = (0, _react.memo)(HiddenPost);
exports.default = _default;
//# sourceMappingURL=hidden.js.map
