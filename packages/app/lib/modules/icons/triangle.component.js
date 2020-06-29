'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _styles = require('../../styles');
var _uni = require('../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/icons/triangle.component.js';
var Triangle = function Triangle(_ref) {
  var direction = _ref.direction,
    inline = _ref.inline,
    lh = _ref.lh;
  if (direction === 'UP') {
    return _react.default.createElement(
      _uni.Text,
      {
        lh: lh,
        inline: inline,
        c: _styles.colors.green,
        __source: { fileName: _jsxFileName, lineNumber: 9, columnNumber: 7 }
      },
      '\u25B2'
    );
  }
  if (direction === 'DOWN') {
    return _react.default.createElement(
      _uni.Text,
      {
        lh: lh,
        inline: inline,
        c: _styles.colors.red,
        __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 }
      },
      '\u25BC'
    );
  }
  return null;
};
Triangle.propTypes = {
  direction: _propTypes.default.oneOf(['UP', 'DOWN']),
  inline: _propTypes.default.number,
  lh: _propTypes.default.number
};
var _default = Triangle;
exports.default = _default;
//# sourceMappingURL=triangle.component.js.map
