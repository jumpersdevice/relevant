'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.PieChart = PieChart;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _styles = require('../../styles');
var _reactNativeWebSvg = _interopRequireWildcard(require('react-native-web-svg'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/piechart.js';
PieChart.propTypes = {
  percent: _propTypes.default.number,
  color: _propTypes.default.string,
  text: _propTypes.default.string,
  strokeWidth: _propTypes.default.number,
  w: _propTypes.default.string,
  h: _propTypes.default.string
};
function PieChart(_ref) {
  var percent = _ref.percent,
    color = _ref.color,
    text = _ref.text,
    strokeWidth = _ref.strokeWidth,
    w = _ref.w,
    h = _ref.h;
  var r = 15.91549430918954;
  var d = 2 * r + strokeWidth;
  return _react.default.createElement(
    _reactNativeWebSvg.default,
    {
      height: h || '100%',
      width: w || '100%',
      viewBox: '0 0 '.concat(d, ' ').concat(d),
      __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 5 }
    },
    _react.default.createElement(_reactNativeWebSvg.Circle, {
      cx: '50%',
      cy: '50%',
      r: r,
      fill: 'none',
      strokeWidth: strokeWidth,
      stroke: _styles.colors.lightBorder,
      __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 7 }
    }),
    _react.default.createElement(_reactNativeWebSvg.Circle, {
      cx: '50%',
      cy: '50%',
      r: r,
      fill: 'none',
      strokeWidth: strokeWidth,
      stroke: color,
      strokeDasharray: ''.concat(100 - percent, ', ').concat(percent),
      strokeDashoffset: 25 + 100 - percent,
      __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 7 }
    }),
    text &&
      _react.default.createElement(
        _reactNativeWebSvg.Text,
        {
          fontSize: '10px',
          x: '50%',
          y: '60%',
          fill: _styles.colors.black,
          textAnchor: 'middle',
          fontFamily: 'HelveticaNeue-CondensedBold',
          __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 9 }
        },
        text
      )
  );
}
//# sourceMappingURL=piechart.js.map
