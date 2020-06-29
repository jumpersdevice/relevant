'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = auth;
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
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  user: null,
  deviceToken: null,
  preUser: null,
  confirmed: false,
  stats: null,
  nextUpdate: new Date(),
  chart: [],
  relChart: [],
  twitter: null,
  currentInvite: null,
  loading: false,
  community: null,
  invitecode: null
};
function auth() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_INVITE_CODE: {
      return _objectSpread(_objectSpread({}, state), {}, { invitecode: action.payload });
    }
    case types.SET_LOADING: {
      return _objectSpread(_objectSpread({}, state), {}, { loading: action.payload });
    }
    case types.SET_TWITTER: {
      return _objectSpread(_objectSpread({}, state), {}, { twitter: action.payload });
    }
    case types.SET_STATS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          stats: action.payload.stats || state.stats,
          nextUpdate: action.payload.nextUpdate || state.nextUpdate,
          chart: action.payload.chart || state.chart,
          relChart: action.payload.relChart || state.relChart
        }
      );
    }
    case types.LOGIN_USER_REQUEST:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { isAuthenticating: true, statusText: null }
      );
    case 'SET_PRE_USER':
      return _objectSpread(_objectSpread({}, state), {}, { preUser: action.payload });
    case types.LOGIN_USER_SUCCESS:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          isAuthenticating: false,
          isAuthenticated: true,
          token: action.payload.token,
          statusText: 'You have been successfully logged in.'
        }
      );
    case types.LOGIN_USER_FAILURE:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { isAuthenticating: false, isAuthenticated: false, user: null }
      );
    case 'SET_AUTH_STATUS_TEXT':
      return _objectSpread(_objectSpread({}, state), {}, { statusText: action.payload });
    case types.SET_SELECTED_USER_DATA: {
      if (!state.user || state.user._id !== action.payload._id) return state;
      return _objectSpread(_objectSpread({}, state), {}, { user: action.payload });
    }
    case types.SET_USER:
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          isAuthenticating: false,
          isAuthenticated: !!action.payload || false,
          user: action.payload,
          preUser: null
        }
      );
    case types.UPDATE_USER:
    case types.UPDATE_AUTH_USER: {
      var id = action.payload._id;
      if (state.user && id !== state.user._id) return state;
      var relevance = action.payload.relevance;
      if ((!relevance || relevance.pagerank === undefined) && state.user) {
        relevance = state.user.relevance;
      }
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          user: _objectSpread(
            _objectSpread(_objectSpread({}, state.user), action.payload),
            {},
            { relevance: relevance }
          )
        }
      );
    }
    case 'SET_DEVICE_TOKEN':
      return _objectSpread(_objectSpread({}, state), {}, { deviceToken: action.payload });
    case types.SET_CONTACTS:
      return _objectSpread(_objectSpread({}, state), {}, { contacts: action.payload });
    case types.LOGOUT_USER: {
      return _objectSpread(
        _objectSpread({}, initialState),
        {},
        { community: state.community }
      );
    }
    case types.UPDATE_INVITE: {
      if (action.payload === null) {
        return _objectSpread(_objectSpread({}, state), {}, { currentInvite: null });
      }
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { currentInvite: action.payload }
      );
    }
    default:
      return state;
  }
}
//# sourceMappingURL=auth.reducer.js.map
