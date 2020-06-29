'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = post;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _normalizr = require('normalizr');
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _get = _interopRequireDefault(require('lodash/get'));
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
var repostSchema = new _normalizr.schema.Entity('posts', { idAttribute: '_id' });
var linkSchema = new _normalizr.schema.Entity('links', {}, { idAttribute: '_id' });
var postSchema = new _normalizr.schema.Entity(
  'posts',
  { repost: { post: repostSchema }, metaPost: linkSchema },
  { idAttribute: '_id' }
);
var initialState = {
  postError: null,
  feedUnread: null,
  feed: [],
  twitterFeed: [],
  top: [],
  new: [],
  flagged: [],
  loading: true,
  loaded: {
    feed: false,
    top: false,
    new: false,
    twitterFeed: false,
    userPosts: false,
    topics: {}
  },
  newFeedAvailable: false,
  newPostsAvailable: {},
  userPosts: {},
  topics: { new: {}, top: {}, all: {} },
  posts: {},
  topPosts: [],
  related: {},
  links: {}
};
function mergePosts(posts, state) {
  var mPosts = {};
  if (!posts) return mPosts;
  Object.keys(posts).forEach(function(id) {
    var reposted = posts[id].reposted;
    if (!reposted) reposted = state.posts[id] ? state.posts[id].reposted : undefined;
    var postData =
      (posts[id] && posts[id].data) || (state.posts[id] && state.posts[id].data);
    mPosts[id] = _objectSpread(
      _objectSpread(_objectSpread({}, state.posts[id]), posts[id]),
      {},
      { reposted: reposted, postData: postData }
    );
  });
  return mPosts;
}
function post() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_RELATED: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          related: _objectSpread(
            _objectSpread({}, state.related),
            {},
            (0, _defineProperty2.default)(
              {},
              action.payload.postId,
              action.payload.related
            )
          )
        }
      );
    }
    case types.SET_TOP_POSTS: {
      return _objectSpread(_objectSpread({}, state), {}, { topPosts: action.payload });
    }
    case types.INC_FEED_COUNT: {
      var unread = state.feedUnread || 0;
      return _objectSpread(_objectSpread({}, state), {}, { feedUnread: unread + 1 });
    }
    case types.SET_FEED_COUNT: {
      return _objectSpread(_objectSpread({}, state), {}, { feedUnread: action.payload });
    }
    case types.SET_POSTS_SIMPLE: {
      var posts = mergePosts(action.payload.data.entities.posts, state);
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          posts: _objectSpread(_objectSpread({}, state.posts), posts),
          links: _objectSpread(
            _objectSpread({}, state.links),
            action.payload.data.entities.links
          )
        }
      );
    }
    case types.SET_TOPIC_POSTS: {
      var _objectSpread7;
      var _action$payload = action.payload,
        type = _action$payload.type,
        topic = _action$payload.topic,
        index = _action$payload.index;
      var _posts = mergePosts(action.payload.data.entities.posts, state);
      if (!state.topics[type][topic]) state.topics[type][topic] = [];
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          topics: _objectSpread(
            _objectSpread({}, state.topics),
            {},
            (0, _defineProperty2.default)(
              {},
              type,
              _objectSpread(
                _objectSpread({}, state.topics[type]),
                {},
                (0, _defineProperty2.default)(
                  {},
                  topic,
                  [].concat(
                    (0, _toConsumableArray2.default)(
                      state.topics[type][topic].slice(0, index)
                    ),
                    (0, _toConsumableArray2.default)(action.payload.data.result[type])
                  )
                )
              )
            )
          ),
          posts: _objectSpread(_objectSpread({}, state.posts), _posts),
          loaded: _objectSpread(
            _objectSpread({}, state.loaded),
            {},
            ((_objectSpread7 = {}),
            (0, _defineProperty2.default)(_objectSpread7, type, true),
            (0, _defineProperty2.default)(
              _objectSpread7,
              'topics',
              _objectSpread(
                _objectSpread({}, state.loaded.topics),
                {},
                (0, _defineProperty2.default)(
                  {},
                  topic,
                  _objectSpread(
                    _objectSpread({}, state.loaded.topics[topic]),
                    {},
                    (0, _defineProperty2.default)({}, type, true)
                  )
                )
              )
            ),
            _objectSpread7)
          ),
          links: _objectSpread(
            _objectSpread({}, state.links),
            action.payload.data.entities.links
          )
        }
      );
    }
    case types.SET_POSTS: {
      var _objectSpread9;
      var _type = action.payload.type;
      var _posts2 = mergePosts(action.payload.data.entities.posts, state);
      return _objectSpread(
        _objectSpread({}, state),
        {},
        ((_objectSpread9 = {}),
        (0, _defineProperty2.default)(
          _objectSpread9,
          _type,
          [].concat(
            (0, _toConsumableArray2.default)(state[_type].slice(0, action.payload.index)),
            (0, _toConsumableArray2.default)(action.payload.data.result[_type])
          )
        ),
        (0, _defineProperty2.default)(
          _objectSpread9,
          'posts',
          _objectSpread(_objectSpread({}, state.posts), _posts2)
        ),
        (0, _defineProperty2.default)(
          _objectSpread9,
          'loaded',
          _objectSpread(
            _objectSpread({}, state.loaded),
            {},
            (0, _defineProperty2.default)({}, _type, true)
          )
        ),
        (0, _defineProperty2.default)(
          _objectSpread9,
          'links',
          _objectSpread(
            _objectSpread({}, state.links),
            action.payload.data.entities.links
          )
        ),
        (0, _defineProperty2.default)(_objectSpread9, 'newPostsAvailable', {}),
        _objectSpread9)
      );
    }
    case types.GET_POSTS: {
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
    case types.UPDATE_POST: {
      var id = action.payload._id;
      var data = (0, _normalizr.normalize)(action.payload, postSchema);
      var updatePost = data.entities.posts[id];
      var reposted = action.payload.reposted;
      if (!reposted) reposted = state.posts[id] ? state.posts[id].reposted : undefined;
      var postData = updatePost.data || (0, _get.default)(state.posts[id], 'data');
      var embeddedUser = state.posts[id] ? state.posts[id].embeddedUser : null;
      if (
        updatePost.embeddedUser &&
        updatePost.embeddedUser.relevance &&
        updatePost.embeddedUser.relevance.pagerank !== undefined
      ) {
        embeddedUser = updatePost.embeddedUser;
      }
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          links: _objectSpread(_objectSpread({}, state.links), data.entities.links),
          posts: _objectSpread(
            _objectSpread({}, state.posts),
            {},
            (0, _defineProperty2.default)(
              {},
              id,
              _objectSpread(
                _objectSpread(_objectSpread({}, state.posts[id]), updatePost),
                {},
                { reposted: reposted, data: postData, embeddedUser: embeddedUser }
              )
            )
          )
        }
      );
    }
    case types.REMOVE_POST: {
      var _id = action.payload._id || action.payload;
      var newPosts = _objectSpread({}, state.posts);
      delete newPosts[_id];
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          posts: _objectSpread(
            _objectSpread({}, state.posts),
            {},
            (0, _defineProperty2.default)({}, _id, null)
          )
        }
      );
    }
    case 'SET_USER_POSTS': {
      var _id2 = action.payload.id;
      var currentPosts = state.userPosts[_id2] || [];
      var _posts3 = mergePosts(action.payload.data.entities.posts, state);
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          userPosts: _objectSpread(
            _objectSpread({}, state.userPosts),
            {},
            (0, _defineProperty2.default)(
              {},
              _id2,
              [].concat(
                (0, _toConsumableArray2.default)(
                  currentPosts.slice(0, action.payload.index)
                ),
                (0, _toConsumableArray2.default)(action.payload.data.result[_id2])
              )
            )
          ),
          links: _objectSpread(
            _objectSpread({}, state.links),
            action.payload.data.entities.links
          ),
          posts: _objectSpread(_objectSpread({}, state.posts), _posts3),
          loaded: _objectSpread(_objectSpread({}, state.loaded), {}, { userPosts: true })
        }
      );
    }
    case 'LOADING_USER_POSTS': {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          loaded: _objectSpread(_objectSpread({}, state.loaded), {}, { userPosts: false })
        }
      );
    }
    case types.CLEAR_POSTS: {
      var _type2 = action.payload.type;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        (0, _defineProperty2.default)({}, _type2, [])
      );
    }
    case 'SET_NEW_POSTS_STATUS': {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          newPostsAvailable: _objectSpread(
            _objectSpread({}, state.newPostsAvailable),
            {},
            (0, _defineProperty2.default)(
              {},
              action.payload.community,
              state.newPostsAvailable[action.payload.community] || 0 + 1
            )
          )
        }
      );
    }
    case types.POST_ERROR: {
      return _objectSpread(_objectSpread({}, state), {}, { postError: action.payload });
    }
    case types.SET_DISCOVER_TAGS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { discoverTags: action.payload }
      );
    }
    case 'SET_SELECTED_POST': {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { selectedPostId: action.payload }
      );
    }
    case 'SET_SELECTED_POST_DATA': {
      var _id3 = action.payload._id;
      var _reposted = action.payload.reposted;
      if (!_reposted)
        _reposted = state.posts[_id3] ? state.posts[_id3].reposted : undefined;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          posts: _objectSpread(
            _objectSpread({}, state.posts),
            {},
            (0, _defineProperty2.default)(
              {},
              _id3,
              _objectSpread(
                _objectSpread(_objectSpread({}, state.posts[_id3]), action.payload),
                {},
                { reposted: _reposted }
              )
            )
          )
        }
      );
    }
    case 'CLEAR_SELECTED_POST': {
      return _objectSpread(_objectSpread({}, state), {}, { selectedPostId: null });
    }
    case 'SET_NEW_FEED_STATUS': {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { newFeedAvailable: action.payload }
      );
    }
    case 'CLEAR_USER_POSTS': {
      return _objectSpread(_objectSpread({}, state), {}, { userPosts: {} });
    }
    case types.SET_COMMENTS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { posts: _objectSpread(_objectSpread({}, state.posts), action.payload.comments) }
      );
    }
    case types.ADD_COMMENT: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          posts: _objectSpread(
            _objectSpread({}, state.posts),
            {},
            (0, _defineProperty2.default)(
              {},
              action.payload.comment._id,
              action.payload.comment
            )
          )
        }
      );
    }
    case types.UNDO_POST_INVESTMENT: {
      var postId = action.payload;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          posts: _objectSpread(
            _objectSpread({}, state.posts),
            {},
            (0, _defineProperty2.default)(
              {},
              postId,
              _objectSpread(_objectSpread({}, state.posts[postId]), {}, { myVote: null })
            )
          )
        }
      );
    }
    case types.UPDATE_POST_INVESTMENTS: {
      if (!action.payload) return state;
      var _postId = action.payload.post;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          posts: _objectSpread(
            _objectSpread({}, state.posts),
            {},
            (0, _defineProperty2.default)(
              {},
              _postId,
              _objectSpread(
                _objectSpread({}, state.posts[_postId]),
                {},
                { myVote: action.payload }
              )
            )
          )
        }
      );
    }
    default:
      return state;
  }
}
//# sourceMappingURL=post.reducer.js.map
