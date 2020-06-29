'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = investments;
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
  userInvestments: {},
  investments: {},
  myInvestments: [],
  myEarnings: {},
  posts: {},
  loaded: {},
  loadedProfileInv: false,
  voteSuccess: null
};
function investments() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.UPDATE_POST_INVESTMENTS: {
      return _objectSpread(_objectSpread({}, state), {}, { voteSuccess: action.payload });
    }
    case types.LOADING_POST_INVESTMENTS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          loaded: _objectSpread(
            _objectSpread({}, state.loaded),
            {},
            (0, _defineProperty2.default)({}, action.payload, false)
          )
        }
      );
    }
    case types.SET_POST_INVESTMENTS: {
      var post = state.posts[action.payload.postId] || [];
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          posts: _objectSpread(
            _objectSpread({}, state.posts),
            {},
            (0, _defineProperty2.default)(
              {},
              action.payload.postId,
              [].concat(
                (0, _toConsumableArray2.default)(post.slice(0, action.payload.index)),
                (0, _toConsumableArray2.default)(action.payload.data.result.investments)
              )
            )
          ),
          loaded: _objectSpread(
            _objectSpread({}, state.loaded),
            {},
            (0, _defineProperty2.default)({}, action.payload.postId, true)
          ),
          investments: _objectSpread(
            _objectSpread({}, state.investments),
            action.payload.data.entities.investments
          )
        }
      );
    }
    case types.UPDATE_EARNINGS: {
      var earnings = {};
      action.payload.forEach(function(earning) {
        earnings[earning.post] = earning;
      });
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { myEarnings: _objectSpread(_objectSpread({}, state.myEarnings), earnings) }
      );
    }
    case 'SET_INVESTMENTS': {
      var id = action.payload.userId;
      var currentInvestments = state.userInvestments[id] || [];
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          userInvestments: _objectSpread(
            _objectSpread({}, state.userInvestments),
            {},
            (0, _defineProperty2.default)(
              {},
              id,
              [].concat(
                (0, _toConsumableArray2.default)(
                  currentInvestments.slice(0, action.payload.index)
                ),
                (0, _toConsumableArray2.default)(
                  action.payload.investments.result.investments
                )
              )
            )
          ),
          investments: _objectSpread(
            _objectSpread({}, state.investments),
            action.payload.investments.entities.investments
          ),
          loadedProfileInv: true
        }
      );
    }
    case 'LOADING_INVESTMENTS': {
      return _objectSpread(_objectSpread({}, state), {}, { loadedProfileInv: false });
    }
    case types.LOGOUT_USER: {
      return _objectSpread({}, initialState);
    }
    default:
      return state;
  }
}
//# sourceMappingURL=invest.reducer.js.map
