'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = notifications;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var types = _interopRequireWildcard(require('../../core/actionTypes'));
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
var initialState = {
  personal: [],
  count: 0,
  loaded: false,
  general: [],
  promptType: null,
  promptProps: {}
};
function notifications() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_ACTIVITY: {
      var _objectSpread2;
      var type = action.payload.type;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        ((_objectSpread2 = {}),
        (0, _defineProperty2.default)(
          _objectSpread2,
          type,
          [].concat(
            (0, _toConsumableArray2.default)(state[type].slice(0, action.payload.index)),
            (0, _toConsumableArray2.default)(action.payload.data)
          )
        ),
        (0, _defineProperty2.default)(_objectSpread2, 'loaded', true),
        _objectSpread2)
      );
    }
    case types.SET_COUNT: {
      return _objectSpread(_objectSpread({}, state), {}, { count: action.payload });
    }
    case 'CLEAR_COUNT': {
      return _objectSpread(_objectSpread({}, state), {}, { count: 0 });
    }
    case 'ADD_ACTIVITY': {
      return _objectSpread(_objectSpread({}, state), {}, { count: state.count + 1 });
    }
    case types.LOGOUT_USER: {
      return _objectSpread({}, initialState);
    }
    case types.SHOW_BANNER_PROMPT: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { promptType: action.payload.promptType, promptProps: action.payload.promptProps }
      );
    }
    case types.HIDE_BANNER_PROMPT: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { promptType: null, promptProps: {} }
      );
    }
    default:
      return state;
  }
}
//# sourceMappingURL=activity.reducer.js.map
