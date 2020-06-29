'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = admin;
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
  inviteList: {},
  invites: {},
  waitList: [],
  wait: {},
  currentInvite: null,
  downvotes: [],
  count: {}
};
function admin() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.DESTROY_INVITE: {
      var invites = _objectSpread({}, state.invites);
      delete invites[action.payload._id];
      return _objectSpread(_objectSpread({}, state), {}, { invites: invites });
    }
    case types.SET_INVITE_COUNT: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { count: _objectSpread(_objectSpread({}, state.count), action.payload) }
      );
    }
    case types.DELETE_WAITLIST_USER: {
      var users = {};
      action.payload.forEach(function(u) {
        return (users[u._id] = null);
      });
      var waitList = state.waitList.filter(function(u) {
        return users[u] !== null;
      });
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { wait: _objectSpread(_objectSpread({}, state.wait), users), waitList: waitList }
      );
    }
    case types.SET_WAITLIST: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          waitList: [].concat(
            (0, _toConsumableArray2.default)(action.payload.result.wait),
            (0, _toConsumableArray2.default)(state.waitList)
          ),
          wait: _objectSpread(_objectSpread({}, state.wait), action.payload.entities.wait)
        }
      );
    }
    case types.SET_INVITES: {
      var _action$payload = action.payload,
        community = _action$payload.community,
        data = _action$payload.data,
        skip = _action$payload.skip;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          inviteList: _objectSpread(
            _objectSpread({}, state.inviteList),
            {},
            (0, _defineProperty2.default)(
              {},
              community,
              [].concat(
                (0, _toConsumableArray2.default)(
                  (state.inviteList[community] || []).slice(0, skip)
                ),
                (0, _toConsumableArray2.default)(data.result.invites)
              )
            )
          ),
          invites: _objectSpread(_objectSpread({}, state.invites), data.entities.invites)
        }
      );
    }
    case types.UPDATE_INVITE: {
      var _action$payload2 = action.payload,
        _community = _action$payload2.community,
        _id = _action$payload2._id;
      if (action.payload === null) {
        return _objectSpread(_objectSpread({}, state), {}, { currentInvite: null });
      }
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          currentInvite: action.payload,
          inviteList: _objectSpread(
            _objectSpread({}, state.inviteList),
            {},
            (0, _defineProperty2.default)(
              {},
              _community,
              (0, _toConsumableArray2.default)(
                new Set(
                  [_id].concat(
                    (0, _toConsumableArray2.default)(state.inviteList[_community] || [])
                  )
                )
              )
            )
          ),
          invites: _objectSpread(
            _objectSpread({}, state.invites),
            {},
            (0, _defineProperty2.default)(
              {},
              action.payload._id,
              _objectSpread(
                _objectSpread({}, state.invites[action.payload._id]),
                action.payload
              )
            )
          )
        }
      );
    }
    case types.SET_DOWNVOTES: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          downvotes: [].concat(
            (0, _toConsumableArray2.default)(state.downvotes),
            (0, _toConsumableArray2.default)(action.payload)
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
//# sourceMappingURL=admin.reducer.js.map
