'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setUsers = setUsers;
exports.setUserPosts = setUserPosts;
exports.setMyPosts = setMyPosts;
exports.setRecentPosts = setRecentPosts;
exports.updatePost = updatePost;
exports.updateRelated = updateRelated;
exports.removePost = removePost;
exports.postError = postError;
exports.setTopic = setTopic;
exports.setPosts = setPosts;
exports.setPostsSimple = setPostsSimple;
exports.getFeed = getFeed;
exports.getTwitterFeed = getTwitterFeed;
exports.deletePost = deletePost;
exports.clearPosts = clearPosts;
exports.getPostsAction = getPostsAction;
exports.setSelectedPost = setSelectedPost;
exports.setSelectedPostData = setSelectedPostData;
exports.clearSelectedPost = clearSelectedPost;
exports.getPosts = getPosts;
exports.loadingUserPosts = loadingUserPosts;
exports.getUserPosts = getUserPosts;
exports.addUpdatedComment = addUpdatedComment;
exports.editPost = editPost;
exports.getSelectedPost = getSelectedPost;
exports.getRelated = getRelated;
exports.setFeedCount = setFeedCount;
exports.setSubscriptions = setSubscriptions;
exports.getSubscriptions = getSubscriptions;
exports.flag = flag;
exports.getPostHtml = getPostHtml;
exports.setTopPosts = setTopPosts;
exports.getFlaggedPosts = getFlaggedPosts;
exports.getTopPosts = getTopPosts;
exports.postSchema = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _normalizr = require('normalizr');
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _utils = require('../../utils');
var errorActions = _interopRequireWildcard(require('../ui/error.actions'));
var navigationActions = _interopRequireWildcard(
  require('../navigation/navigation.actions')
);
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
var Alert = _utils.alert.Alert();
var apiServer = process.env.API_SERVER + '/api/';
var userSchema = new _normalizr.schema.Entity('users', {}, { idAttribute: '_id' });
var repostSchema = new _normalizr.schema.Entity('posts', { idAttribute: '_id' });
var linkSchema = new _normalizr.schema.Entity('links', {}, { idAttribute: '_id' });
var parentPostSchema = new _normalizr.schema.Entity(
  'posts',
  { metaPost: linkSchema, user: userSchema },
  { idAttribute: '_id' }
);
var postSchema = new _normalizr.schema.Entity(
  'posts',
  {
    user: userSchema,
    repost: { post: repostSchema },
    metaPost: linkSchema,
    parentPost: parentPostSchema,
    commentPost: parentPostSchema
  },
  { idAttribute: '_id' }
);
exports.postSchema = postSchema;
var feedSchema = new _normalizr.schema.Entity(
  'posts',
  {
    commentary: [postSchema],
    new: [postSchema],
    top: [postSchema],
    twitterFeed: [postSchema],
    user: userSchema,
    repost: { post: repostSchema },
    metaPost: linkSchema
  },
  {
    idAttribute: '_id',
    processStrategy: function processStrategy(value, parent, key) {
      value[key] = value.commentary;
      return value;
    }
  }
);
var reqOptions = function reqOptions(tk) {
  return {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(tk)
    }
  };
};
var DEFAULT_LIMIT = 10;
function setUsers(users) {
  return { type: types.SET_USERS, payload: users };
}
function setUserPosts(data, id, index) {
  return { type: types.SET_USER_POSTS, payload: { data: data, id: id, index: index } };
}
function setMyPosts(posts) {
  return { type: 'SET_MY_POSTS', payload: posts };
}
function setRecentPosts(posts) {
  return { type: types.SET_RECENT_POSTS, payload: posts };
}
function updatePost(post) {
  return { type: types.UPDATE_POST, payload: post };
}
function updateRelated(related) {
  return { type: types.SET_RELATED, payload: related };
}
function removePost(post) {
  return { type: types.REMOVE_POST, payload: post };
}
function postError() {
  return { type: types.POST_ERROR };
}
function setTopic(data, type, index, topic) {
  return {
    type: types.SET_TOPIC_POSTS,
    payload: { topic: topic._id || topic, data: data, type: type, index: index }
  };
}
function setPosts(data, type, index) {
  return { type: types.SET_POSTS, payload: { data: data, type: type, index: index } };
}
function setPostsSimple(data) {
  return { type: types.SET_POSTS_SIMPLE, payload: { data: data } };
}
function getFeed(skip, _tag) {
  if (!skip) skip = 0;
  var type = 'feed';
  var limit = DEFAULT_LIMIT;
  var tag = _tag ? _tag._id : null;
  return function(dispatch) {
    return dispatch(
      _utils.api.request({
        method: 'GET',
        query: { skip: skip, limit: limit, tag: tag },
        endpoint: 'feed',
        path: '/'
      })
    )
      .then(function(res) {
        var data = (0, _normalizr.normalize)({ feed: res }, { feed: [postSchema] });
        dispatch(setUsers(data.entities.users));
        dispatch(setPosts(data, type, skip));
        dispatch(errorActions.setError('read', false));
      })
      .catch(function(err) {
        if (!err.message.match('Get fail for key: token')) {
          dispatch(errorActions.setError('read', true, err.message));
        }
      });
  };
}
function getTwitterFeed(skip, _tag) {
  if (!skip) skip = 0;
  var type = 'twitterFeed';
  var limit = DEFAULT_LIMIT;
  var tag = _tag ? _tag._id : null;
  return function(dispatch) {
    return dispatch(
      _utils.api.request({
        method: 'GET',
        query: { skip: skip, limit: limit, tag: tag },
        endpoint: 'twitterFeed',
        path: '/'
      })
    )
      .then(function(res) {
        var data = (0, _normalizr.normalize)(
          { twitterFeed: res },
          { twitterFeed: [feedSchema] }
        );
        dispatch(setPosts(data, type, skip));
        dispatch(errorActions.setError('read', false));
      })
      .catch(function(err) {
        if (!err.message.match('Get fail for key: token')) {
          dispatch(errorActions.setError('read', true, err.message));
        }
      });
  };
}
function deletePost(post, redirect) {
  return function(dispatch) {
    return dispatch(
      _utils.api.request({ method: 'DELETE', endpoint: 'post', params: { id: post._id } })
    )
      .then(function() {
        dispatch(removePost(post));
        if (redirect) dispatch(navigationActions.pop());
      })
      .catch(null);
  };
}
function clearPosts(type) {
  return { type: types.CLEAR_POSTS, payload: { type: type } };
}
function getPostsAction(type) {
  return { type: 'GET_POSTS', payload: type };
}
function setSelectedPost(id) {
  return { type: 'SET_SELECTED_POST', payload: id };
}
function setSelectedPostData(post) {
  return { type: 'SET_SELECTED_POST_DATA', payload: post };
}
function clearSelectedPost() {
  return { type: 'CLEAR_SELECTED_POST' };
}
function getPosts(skip, tags, sort, limit, community) {
  var tagsString = '';
  if (!skip) skip = 0;
  if (!limit) limit = DEFAULT_LIMIT;
  if (!sort) sort = null;
  var tag = null;
  var type = sort ? 'top' : 'new';
  var topic;
  if (tags && tags.length) {
    tagsString = tags
      .map(function(t) {
        return t._id || t;
      })
      .join(', ');
    tag = tagsString;
    if (tags.length === 1) topic = tags[0];
  }
  var communityParam = community ? { community: community } : {};
  return (function() {
    var _ref = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var _getState, auth, res, dataType, data;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  (_getState = getState()), (auth = _getState.auth);
                  dispatch(getPostsAction(type));
                  _context.next = 5;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'communityFeed',
                      query: _objectSpread(
                        { skip: skip, sort: sort, limit: limit, tag: tag },
                        communityParam
                      ),
                      user: auth.user
                    })
                  );
                case 5:
                  res = _context.sent;
                  dataType = feedSchema;
                  data = (0, _normalizr.normalize)(
                    (0, _defineProperty2.default)({}, type, res),
                    (0, _defineProperty2.default)({}, type, [dataType])
                  );
                  if (topic) {
                    dispatch(setTopic(data, type, skip, topic));
                  } else dispatch(setPosts(data, type, skip));
                  dispatch(errorActions.setError('discover', false));
                  _context.next = 15;
                  break;
                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](0);
                  dispatch(errorActions.setError('discover', true, _context.t0.message));
                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 12]]
        );
      })
    );
    return function(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })();
}
function loadingUserPosts() {
  return { type: 'LOADING_USER_POSTS' };
}
function getUserPosts(skip, limit, userId) {
  if (!skip) skip = 0;
  if (!limit) limit = 5;
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                dispatch(loadingUserPosts());
                return _context2.abrupt(
                  'return',
                  dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'post/user',
                      params: { id: userId },
                      query: { skip: skip, limit: limit }
                    })
                  )
                    .then(function(responseJSON) {
                      var data = (0, _normalizr.normalize)(
                        (0, _defineProperty2.default)({}, userId, responseJSON),
                        (0, _defineProperty2.default)({}, userId, [postSchema])
                      );
                      dispatch(setUsers(data.entities.users));
                      dispatch(setUserPosts(data, userId, skip));
                      dispatch(errorActions.setError('profile', false));
                    })
                    .catch(function(error) {
                      dispatch(errorActions.setError('profile', true, error.message));
                    })
                );
              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    );
    return function(_x3) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function addUpdatedComment(comment) {
  return { type: 'UPDATE_COMMENT', payload: comment };
}
function editPost(post) {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(dispatch) {
        var response;
        return _regenerator.default.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'post',
                      body: JSON.stringify(post)
                    })
                  );
                case 3:
                  response = _context3.sent;
                  dispatch(updatePost(response));
                  return _context3.abrupt('return', true);
                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3['catch'](0);
                  Alert.alert('Post error please try again', _context3.t0.message);
                  return _context3.abrupt('return', false);
                case 12:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x4) {
      return _ref3.apply(this, arguments);
    };
  })();
}
function getSelectedPost(postId) {
  return (function() {
    var _ref4 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee4(dispatch, getState) {
        var _getState2, auth, post;
        return _regenerator.default.wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.prev = 0;
                  (_getState2 = getState()), (auth = _getState2.auth);
                  _context4.next = 4;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'post',
                      path: '',
                      params: { id: postId },
                      user: auth.user
                    })
                  );
                case 4:
                  post = _context4.sent;
                  if (!post) {
                    dispatch(removePost(postId));
                  } else {
                    dispatch(updatePost(post));
                  }
                  dispatch(errorActions.setError('singlepost', false));
                  return _context4.abrupt('return', post);
                case 10:
                  _context4.prev = 10;
                  _context4.t0 = _context4['catch'](0);
                  dispatch(
                    errorActions.setError('singlepost', true, _context4.t0.message)
                  );
                  return _context4.abrupt('return', false);
                case 14:
                case 'end':
                  return _context4.stop();
              }
            }
          },
          _callee4,
          null,
          [[0, 10]]
        );
      })
    );
    return function(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  })();
}
function getRelated(postId) {
  return (function() {
    var _ref5 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee5(dispatch) {
        var responseJSON;
        return _regenerator.default.wrap(
          function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'metaPost',
                      path: '/related',
                      params: { id: postId }
                    })
                  );
                case 3:
                  responseJSON = _context5.sent;
                  dispatch(updateRelated({ related: responseJSON, postId: postId }));
                  return _context5.abrupt('return', responseJSON);
                case 8:
                  _context5.prev = 8;
                  _context5.t0 = _context5['catch'](0);
                  return _context5.abrupt('return', false);
                case 11:
                case 'end':
                  return _context5.stop();
              }
            }
          },
          _callee5,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x7) {
      return _ref5.apply(this, arguments);
    };
  })();
}
function setFeedCount(data) {
  return { type: types.SET_FEED_COUNT, payload: data };
}
function setSubscriptions(data) {
  return { type: types.SET_SUBSCRIPTIONS, payload: data };
}
function getSubscriptions() {
  return function(dispatch) {
    return _utils.storage
      .getToken()
      .then(function(tk) {
        return fetch(
          ''.concat(apiServer, 'subscription/user'),
          _objectSpread(_objectSpread({}, reqOptions(tk)), {}, { method: 'GET' })
        );
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJSON) {
        return dispatch(setSubscriptions(responseJSON));
      })
      .catch(null);
  };
}
function flag(post) {
  return function(dispatch) {
    return _utils.storage
      .getToken()
      .then(function(tk) {
        return fetch(
          ''.concat(apiServer, 'post/flag'),
          _objectSpread(
            _objectSpread({}, reqOptions(tk)),
            {},
            { method: 'PUT', body: JSON.stringify({ postId: post._id }) }
          )
        );
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJSON) {
        Alert.alert('Thank you', 'Flagged posts will be reviewed by the administrators');
        dispatch(updatePost(responseJSON));
      })
      .catch(null);
  };
}
function getPostHtml(post) {
  return function(dispatch) {
    return fetch(''.concat(apiServer, 'post/readable?uri=').concat(post.link), {
      method: 'GET'
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        dispatch(updatePost(_objectSpread(_objectSpread({}, post), {}, { html: html })));
      })
      .catch(null);
  };
}
function setTopPosts(data) {
  return { type: types.SET_TOP_POSTS, payload: data };
}
function getFlaggedPosts(skip) {
  if (!skip) skip = 0;
  var type = 'flagged';
  return (function() {
    var _ref6 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee6(dispatch) {
        var flagged, data;
        return _regenerator.default.wrap(
          function _callee6$(_context6) {
            while (1) {
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'post',
                      path: '/flagged',
                      query: { skip: skip, limit: DEFAULT_LIMIT }
                    })
                  );
                case 3:
                  flagged = _context6.sent;
                  data = (0, _normalizr.normalize)(
                    (0, _defineProperty2.default)({}, type, flagged),
                    (0, _defineProperty2.default)({}, type, [postSchema])
                  );
                  dispatch(setPosts(data, type, skip));
                  _context6.next = 11;
                  break;
                case 8:
                  _context6.prev = 8;
                  _context6.t0 = _context6['catch'](0);
                  Alert.alert(_context6.t0.message, 'error');
                case 11:
                case 'end':
                  return _context6.stop();
              }
            }
          },
          _callee6,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x8) {
      return _ref6.apply(this, arguments);
    };
  })();
}
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref7 = [array[j], array[i]];
    array[i] = _ref7[0];
    array[j] = _ref7[1];
  }
  return array;
}
function getTopPosts() {
  return (function() {
    var _ref8 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee7(dispatch) {
        var topPosts;
        return _regenerator.default.wrap(
          function _callee7$(_context7) {
            while (1) {
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'post',
                      path: '/topPosts'
                    })
                  );
                case 3:
                  topPosts = _context7.sent;
                  return _context7.abrupt(
                    'return',
                    dispatch(setTopPosts(shuffleArray(topPosts)))
                  );
                case 7:
                  _context7.prev = 7;
                  _context7.t0 = _context7['catch'](0);
                  return _context7.abrupt('return', false);
                case 10:
                case 'end':
                  return _context7.stop();
              }
            }
          },
          _callee7,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x9) {
      return _ref8.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=post.actions.js.map
