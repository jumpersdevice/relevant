'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.injectReducer = injectReducer;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _redux = require('redux');
var _activity = _interopRequireDefault(require('../modules/activity/activity.reducer'));
var _animation = _interopRequireDefault(
  require('../modules/animation/animation.reducer')
);
var _auth = _interopRequireDefault(require('../modules/auth/auth.reducer'));
var _admin = _interopRequireDefault(require('../modules/admin/admin.reducer'));
var _community2 = _interopRequireDefault(
  require('../modules/community/community.reducer')
);
var _createPost = _interopRequireDefault(
  require('../modules/createPost/createPost.reducer')
);
var _post = _interopRequireDefault(require('../modules/post/post.reducer'));
var _user2 = _interopRequireDefault(require('../modules/user/user.reducer'));
var _invest = _interopRequireDefault(require('../modules/post/invest.reducer'));
var _comment = _interopRequireDefault(require('../modules/comment/comment.reducer'));
var _tag = _interopRequireDefault(require('../modules/tag/tag.reducer'));
var _stats2 = _interopRequireDefault(require('../modules/stats/stats.reducer'));
var _tooltip = _interopRequireDefault(require('../modules/tooltip/tooltip.reducer'));
var _error = _interopRequireDefault(require('../modules/ui/error.reducer'));
var _earnings2 = _interopRequireDefault(require('../modules/wallet/earnings.reducer'));
var _navigation = _interopRequireDefault(
  require('../modules/navigation/navigation.reducer')
);
var _reduxForm = require('redux-form');
var _socket = _interopRequireDefault(require('./socket.reducer'));
var _subscriptions = _interopRequireDefault(require('./subscriptions.reducer'));
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
var communityState = {};
var reducers = {
  auth: _auth.default,
  posts: _post.default,
  user: _user2.default,
  socket: _socket.default,
  form: _reduxForm.reducer,
  notif: _activity.default,
  error: _error.default,
  animation: _animation.default,
  investments: _invest.default,
  stats: _stats2.default,
  comments: _comment.default,
  navigation: _navigation.default,
  createPost: _createPost.default,
  tags: _tag.default,
  tooltip: _tooltip.default,
  subscriptions: _subscriptions.default,
  admin: _admin.default,
  community: _community2.default,
  earnings: _earnings2.default
};
var createReducer = function createReducer() {
  var asyncReducers =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.combineReducers)(
    _objectSpread(_objectSpread({}, reducers), asyncReducers)
  );
};
var appReducer = createReducer();
function injectReducer(store, name, asyncReducer) {
  if (store.asyncReducers[name]) {
    return;
  }
  store.asyncReducers[name] = asyncReducer;
  appReducer = createReducer(store.asyncReducers);
  store.replaceReducer(appReducer);
}
var initialState = {
  posts: appReducer.posts,
  user: appReducer.user,
  stats: appReducer.stats
};
var rootReducer = function rootReducer(state, action) {
  if (action.type === 'SET_COMMUNITY') {
    var _community = state.auth.community;
    if (_community === action.payload) return appReducer(state, action);
    var _posts = state.posts,
      _user = state.user,
      _stats = state.stats,
      _earnings = state.earnings;
    if (_community) {
      communityState = _objectSpread(
        _objectSpread({}, communityState),
        {},
        (0, _defineProperty2.default)({}, _community, {
          posts: _posts,
          user: _user,
          stats: _stats,
          earnings: _earnings
        })
      );
    }
    var cachedCommunityState = communityState[action.payload] || initialState;
    var authUser =
      (state.auth.user &&
        cachedCommunityState.user &&
        cachedCommunityState.user.users[state.auth.user._id] &&
        cachedCommunityState.user.users[state.auth.user._id]) ||
      state.auth.user;
    var newState = _objectSpread(
      _objectSpread(_objectSpread({}, state), cachedCommunityState),
      {},
      {
        auth: _objectSpread(
          _objectSpread({}, state.auth),
          {},
          { community: action.payload, user: authUser }
        )
      }
    );
    return appReducer(newState, action);
  }
  return appReducer(state, action);
};
var _default = rootReducer;
exports.default = _default;
//# sourceMappingURL=reducers.js.map
