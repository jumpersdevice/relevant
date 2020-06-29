'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = launchAnimation;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _animation = require('../../animation/animation.actions');
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function launchAnimation(_ref) {
  var type = _ref.type,
    params = _ref.params,
    el = _ref.el,
    dispatch = _ref.dispatch;
  el.current.measureInWindow(function(x, y, w, h) {
    var parent = { x: x, y: y, w: w, h: h };
    if (x + y + w + h === 0) return;
    var action = (0, _animation.triggerAnimation)(
      type,
      _objectSpread({ parent: parent }, params)
    );
    dispatch(action);
  });
}
//# sourceMappingURL=launchAnimation.js.map
