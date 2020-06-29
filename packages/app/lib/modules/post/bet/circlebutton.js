'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = CircleButton;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _styles = require('../../../styles');
var _uni = require('../../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/bet/circlebutton.js';
CircleButton.propTypes = {
  children: _propTypes.default.node,
  onPress: _propTypes.default.func
};
function CircleButton(_ref) {
  var children = _ref.children,
    onPress = _ref.onPress;
  return _react.default.createElement(
    _uni.HoverButton,
    {
      border: 1,
      w: 8,
      h: 8,
      minwidth: 'auto',
      bradius: 4,
      bg: _styles.colors.white,
      onPress: onPress,
      __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.LinkFont,
      {
        c: _styles.colors.blue,
        fs: 2.5,
        lh: 2.5,
        __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 7 }
      },
      children
    )
  );
}
//# sourceMappingURL=circlebutton.js.map
