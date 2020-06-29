'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = auth;
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
  error: false,
  users: {},
  handleToId: {},
  list: [],
  listByTopic: {},
  online: [],
  loading: false,
  garbage: [],
  search: []
};
function auth() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_USER_SEARCH: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { search: action.payload.length ? action.payload : initialState.search }
      );
    }
    case types.SET_USERS: {
      var users = {};
      var handleToId = {};
      if (!action.payload) return state;
      Object.keys(action.payload).forEach(function(id) {
        handleToId[action.payload[id].handle] = id;
        users[id] = _objectSpread(_objectSpread({}, state.users[id]), action.payload[id]);
      });
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          handleToId: _objectSpread(_objectSpread({}, state.handleToId), handleToId),
          users: _objectSpread(_objectSpread({}, state.users), users)
        }
      );
    }
    case 'SET_SELECTED_USER_DATA': {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          handleToId: _objectSpread(
            _objectSpread({}, state.handleToId),
            {},
            (0, _defineProperty2.default)({}, action.payload.handle, action.payload._id)
          ),
          users: _objectSpread(
            _objectSpread({}, state.users),
            {},
            (0, _defineProperty2.default)(
              {},
              action.payload._id,
              _objectSpread(
                _objectSpread({}, state.users[action.payload._id]),
                action.payload
              )
            )
          )
        }
      );
    }
    case 'GET_USER_LIST': {
      return _objectSpread(_objectSpread({}, state), {}, { loading: true });
    }
    case 'SET_USER_LIST': {
      var topic = action.payload.topic || 'all';
      var currentList = state.list[topic] || [];
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          list: _objectSpread(
            _objectSpread({}, state.list),
            {},
            (0, _defineProperty2.default)(
              {},
              topic,
              [].concat(
                (0, _toConsumableArray2.default)(
                  currentList.slice(0, action.payload.index)
                ),
                (0, _toConsumableArray2.default)(action.payload.users)
              )
            )
          ),
          loading: false
        }
      );
    }
    case types.UPDATE_USER: {
      var id = action.payload._id;
      var relevance = action.payload.relevance;
      if ((!relevance || relevance.pagerank === undefined) && state.users[id]) {
        relevance = state.users[id].relevance;
      }
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          handleToId: _objectSpread(
            _objectSpread({}, state.handleToId),
            {},
            (0, _defineProperty2.default)({}, action.payload.handle, action.payload._id)
          ),
          users: _objectSpread(
            _objectSpread({}, state.users),
            {},
            (0, _defineProperty2.default)(
              {},
              action.payload._id,
              _objectSpread(
                _objectSpread(
                  _objectSpread({}, state.users[action.payload._id]),
                  action.payload
                ),
                {},
                { relevance: relevance }
              )
            )
          )
        }
      );
    }
    case 'CLEAR_USER_LIST': {
      return _objectSpread(_objectSpread({}, state), {}, { list: [] });
    }
    default:
      return state;
  }
}
//# sourceMappingURL=user.reducer.js.map
