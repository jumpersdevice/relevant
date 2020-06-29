'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.unique = unique;
function unique(array) {
  return array.filter(function(elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
}
//# sourceMappingURL=list.js.map
