'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = exports.size = void 0;
var _memoizee = _interopRequireDefault(require('memoizee'));
var _responsive = require('./responsive');
var isNative = true;
if (process.env.WEB === 'true') {
  isNative = false;
}
var cache = {};
var sizing = (0, _memoizee.default)(
  function(unit, type) {
    if (type === 'mobileNumber' && isNative) return unit * 8;
    if (!isNative) {
      if (type) return ''.concat(unit).concat(type);
      return ''.concat(unit / 2, 'rem');
    }
    if (type) {
      if (unit < 0) return unit;
      return ''.concat(unit).concat(type);
    }
    if (unit < 0) return unit * 8;
    return ''.concat(unit * 8, 'px');
  },
  { primitive: true }
);
var size = function size(value) {
  var w = (0, _responsive.getWidth)();
  if (cache[w] && cache[w][value]) return cache[w][value];
  var units = (0, _responsive.responsiveHandler)(value);
  if (typeof units === 'number') return sizing(units);
  if (!units || units.match(/px|rem|em|vh|vw|auto|%|pt/)) return units;
  var uArray = units.split(' ');
  if (uArray.length === 1) sizing(Number(units));
  var result = uArray
    .map(function(u) {
      return sizing(Number(u));
    })
    .join(' ');
  if (!cache[w]) cache[w] = {};
  cache[w][value] = result;
  return result;
};
exports.size = size;
var _default = sizing;
exports.default = _default;
//# sourceMappingURL=sizing.js.map
