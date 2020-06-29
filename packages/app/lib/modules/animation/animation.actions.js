'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.triggerAnimation = triggerAnimation;
var types = _interopRequireWildcard(require('../../core/actionTypes'));
function triggerAnimation(type, data) {
  return { type: types.SET_ANIMATION, payload: { type: type, data: data } };
}
//# sourceMappingURL=animation.actions.js.map
