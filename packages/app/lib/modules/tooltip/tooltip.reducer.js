'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = tooltip;
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
  vertical: null,
  horizontal: null,
  horizontalOffset: 0,
  verticalOffset: 0,
  text: '',
  parent: {},
  next: null,
  data: {},
  showing: {},
  onboarding: ['vote', 'relevance', 'coin', 'shareTip'],
  current: null,
  ready: false,
  buttonId: {}
};
function tooltip() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_BUTTON_TOOLTIP: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          buttonId: _objectSpread(
            _objectSpread({}, state.buttonId),
            {},
            (0, _defineProperty2.default)({}, action.payload.type, action.payload.id)
          )
        }
      );
    }
    case types.TOOLTIP_READY: {
      return _objectSpread(_objectSpread({}, state), {}, { ready: action.payload });
    }
    case types.SET_ONBOARDING_STEP: {
      return _objectSpread(_objectSpread({}, state), {}, { current: action.payload });
    }
    case types.SET_TOOLTIP_DATA: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          data: _objectSpread(
            _objectSpread({}, state.data),
            {},
            (0, _defineProperty2.default)(
              {},
              action.payload.name,
              _objectSpread(
                _objectSpread({}, state.data[action.payload.name]),
                action.payload
              )
            )
          )
        }
      );
    }
    case types.SHOW_TOOLTIP: {
      if (action.payload) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          { showing: _objectSpread({}, state.data[action.payload]) }
        );
      }
      return _objectSpread(_objectSpread({}, initialState), {}, { data: state.data });
    }
    case types.LOGOUT_USER: {
      return _objectSpread({}, initialState);
    }
    default:
      return state;
  }
}
//# sourceMappingURL=tooltip.reducer.js.map
