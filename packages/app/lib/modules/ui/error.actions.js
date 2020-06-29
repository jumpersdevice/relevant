'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setError = setError;
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var utils = _interopRequireWildcard(require('../../utils'));
var Alert = utils.alert.Alert();
function setError(type, bool, message) {
  if (message) Alert.alert(message);
  return { type: types.SET_ERROR, payload: { type: type, bool: bool } };
}
//# sourceMappingURL=error.actions.js.map
