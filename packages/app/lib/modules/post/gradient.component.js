'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Gradient;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNativeWebLinearGradient = _interopRequireDefault(
  require('react-native-web-linear-gradient')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/gradient.component.js';
var bgGradient = [
  'hsla(240, 70%, 30%, .03)',
  'hsla(240, 70%, 20%, .08)',
  'hsla(240, 70%, 10%, .4)',
  'hsla(240, 70%, 8%, .7)',
  'hsla(240, 70%, 5%, .6)'
];
var previewGradient = [
  'hsla(240, 70%, 10%, .4)',
  'hsla(240, 70%, 8%, .7)',
  'hsla(240, 70%, 5%, .6)'
];
function Gradient(_ref) {
  var title = _ref.title,
    image = _ref.image,
    preview = _ref.preview;
  var textOverlay = preview ? previewGradient : bgGradient;
  var colors = image ? textOverlay : generateColors(title);
  var start = image ? { x: 0.5, y: 0.0 } : { x: 0.8, y: 0.0 };
  var end = image ? { x: 0.5, y: 1.0 } : { x: 0.2, y: 1.0 };
  return _react.default.createElement(_reactNativeWebLinearGradient.default, {
    start: start,
    end: end,
    colors: colors,
    style: { flex: 1 },
    __source: { fileName: _jsxFileName, lineNumber: 26, columnNumber: 10 }
  });
}
function generateColors(string) {
  var color = string ? string.length : 0;
  color = (color % 220) + 200 || 200;
  color = Math.max(100, color);
  return [
    'hsla('.concat(parseInt(color - 30, 10), ', 100%, 50%, 1)'),
    'hsla('.concat(parseInt(color, 10), ',      100%, 50%, 1)'),
    'hsla('.concat(parseInt(color + 30, 10), ', 100%, 50%, 1)')
  ];
}
Gradient.propTypes = {
  preview: _propTypes.default.bool,
  image: _propTypes.default.bool,
  title: _propTypes.default.string
};
//# sourceMappingURL=gradient.component.js.map
