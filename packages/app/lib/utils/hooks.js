'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.usePrevious = usePrevious;
var _react = require('react');
function usePrevious(value) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function() {
    ref.current = value;
  });
  return ref.current;
}
//# sourceMappingURL=hooks.js.map
