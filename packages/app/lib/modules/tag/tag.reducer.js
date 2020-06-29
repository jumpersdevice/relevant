'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = tags;
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
var initialState = { tags: [], selectedTags: [], parentTags: [] };
function tags() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_DISCOVER_TAGS: {
      return _objectSpread(_objectSpread({}, state), {}, { tags: action.payload });
    }
    case types.SELECT_TAG: {
      var index = state.selectedTags.findIndex(function(tag) {
        return action.payload._id === tag._id;
      });
      if (index > -1) return state;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          selectedTags: [].concat((0, _toConsumableArray2.default)(state.selectedTags), [
            action.payload
          ])
        }
      );
    }
    case types.DESELECT_TAG: {
      var _index = state.selectedTags.findIndex(function(tag) {
        return action.payload._id === tag._id;
      });
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          selectedTags: [].concat(
            (0, _toConsumableArray2.default)(state.selectedTags.slice(0, _index)),
            (0, _toConsumableArray2.default)(state.selectedTags.slice(_index + 1))
          )
        }
      );
    }
    case types.UPDATE_PARENT_TAG: {
      var _index2 = state.parentTags.findIndex(function(tag) {
        return tag._id === action.payload._id;
      });
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          parentTags: [].concat(
            (0, _toConsumableArray2.default)(state.parentTags.slice(0, _index2)),
            [action.payload],
            (0, _toConsumableArray2.default)(state.parentTags.slice(_index2 + 1))
          )
        }
      );
    }
    case types.SET_PARENT_TAGS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          parentTags: [].concat(
            (0, _toConsumableArray2.default)(action.payload),
            (0, _toConsumableArray2.default)(state.parentTags)
          )
        }
      );
    }
    case types.LOGOUT_USER: {
      return _objectSpread({}, initialState);
    }
    default:
      return state;
  }
}
//# sourceMappingURL=tag.reducer.js.map
