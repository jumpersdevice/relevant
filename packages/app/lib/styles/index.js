'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
Object.defineProperty(exports, 'sizing', {
  enumerable: true,
  get: function get() {
    return _sizing.default;
  }
});
Object.defineProperty(exports, 'size', {
  enumerable: true,
  get: function get() {
    return _sizing.size;
  }
});
Object.defineProperty(exports, 'responsive', {
  enumerable: true,
  get: function get() {
    return _responsive.responsiveHandler;
  }
});
exports.screens = exports.mixins = exports.fonts = exports.layout = exports.colors = exports.GlobalStyle = exports.isNative = void 0;
var colors = _interopRequireWildcard(require('./colors'));
exports.colors = colors;
var layout = _interopRequireWildcard(require('./layout'));
exports.layout = layout;
var _sizing = _interopRequireWildcard(require('./sizing'));
var fonts = _interopRequireWildcard(require('./fonts'));
exports.fonts = fonts;
var mixins = _interopRequireWildcard(require('./mixins'));
exports.mixins = mixins;
var screens = _interopRequireWildcard(require('./screens'));
exports.screens = screens;
var _responsive = require('./responsive');
var GlobalStyle;
exports.GlobalStyle = GlobalStyle;
if (process.env.WEB === 'true') {
  exports.GlobalStyle = GlobalStyle = require('./baseStyles').GlobalStyle;
}
var isNative = process.env.WEB !== 'true';
exports.isNative = isNative;
//# sourceMappingURL=index.js.map
