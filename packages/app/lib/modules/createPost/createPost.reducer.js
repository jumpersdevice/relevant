'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = createPost;
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
  urlPreview: null,
  domain: null,
  postBody: '',
  postUrl: null,
  postCategory: null,
  bodyTags: [],
  bodyMentions: [],
  allTags: [],
  postTags: [],
  postImage: null,
  nativeImage: false,
  repost: null,
  repostBody: null,
  edit: false,
  postId: null,
  editPost: null,
  keywords: [],
  createPreview: {},
  selectedTags: [],
  disableUrl: false
};
function createPost() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_CREATE_POST_STATE: {
      return _objectSpread(_objectSpread({}, state), action.payload);
    }
    case types.SET_POST_CATEGORY: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { postCategory: action.payload }
      );
    }
    case types.CLEAR_CREATE_POST: {
      return _objectSpread({}, initialState);
    }
    case types.LOGOUT_USER: {
      return _objectSpread({}, initialState);
    }
    default:
      return state;
  }
}
//# sourceMappingURL=createPost.reducer.js.map
