'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = comments;
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
var initialState = { childComments: {} };
function comments() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_COMMENTS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          childComments: _objectSpread(
            _objectSpread({}, state.childComments),
            action.payload.childComments
          )
        }
      );
    }
    case types.ADD_COMMENT: {
      var newState = _objectSpread(
        _objectSpread({}, state),
        {},
        {
          childComments: _objectSpread(
            _objectSpread({}, state.childComments),
            {},
            (0, _defineProperty2.default)(
              {},
              action.payload.parentId,
              [].concat(
                (0, _toConsumableArray2.default)(
                  state.childComments[action.payload.parentId] || []
                ),
                [action.payload.comment._id]
              )
            )
          )
        }
      );
      return newState;
    }
    default:
      return state;
  }
}
//# sourceMappingURL=comment.reducer.js.map
