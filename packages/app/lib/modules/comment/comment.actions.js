'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.addComment = addComment;
exports.setComments = setComments;
exports.createComment = createComment;
exports.getComments = getComments;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _normalizr = require('normalizr');
var _utils = require('../../utils');
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _error = require('../ui/error.actions');
var _post = require('../post/post.actions');
var _activity = require('../activity/activity.actions');
var Alert = _utils.alert.Alert();
var commentSchema = new _normalizr.schema.Entity('comments', {}, { idAttribute: '_id' });
function addComment(parentId, newComment) {
  return {
    type: types.ADD_COMMENT,
    payload: { comment: newComment, parentId: parentId }
  };
}
function setComments(_ref) {
  var comments = _ref.comments,
    childComments = _ref.childComments;
  return {
    type: types.SET_COMMENTS,
    payload: { comments: comments, childComments: childComments }
  };
}
function filterComments(comments) {
  var childComments = {};
  comments.forEach(function(c) {
    if (!c.parentComment || c.parentComment === c.parentPost) {
      return (childComments[c.parentPost] = [].concat(
        (0, _toConsumableArray2.default)(childComments[c.parentPost] || []),
        [c._id]
      ));
    }
    return (childComments[c.parentComment] = [].concat(
      (0, _toConsumableArray2.default)(childComments[c.parentComment] || []),
      [c._id]
    ));
  });
  return childComments;
}
function createComment(commentObj) {
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        var comment, parentComment, parentPost, parentId;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'POST',
                      endpoint: 'comment',
                      path: '/',
                      body: JSON.stringify(commentObj)
                    })
                  );
                case 3:
                  comment = _context.sent;
                  (parentComment = comment.parentComment),
                    (parentPost = comment.parentPost);
                  parentId = parentComment || parentPost;
                  dispatch(addComment(parentId, comment));
                  dispatch(
                    (0, _activity.showPushNotificationPrompt)({ type: 'createComment' })
                  );
                  return _context.abrupt('return', comment);
                case 11:
                  _context.prev = 11;
                  _context.t0 = _context['catch'](0);
                  Alert.alert(_context.t0.message);
                  return _context.abrupt('return', false);
                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 11]]
        );
      })
    );
    return function(_x) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function getComments(post, skip, limit) {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        var responseJSON, childComments, comments;
        return _regenerator.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0;
                  if (!skip) skip = 0;
                  if (!limit) limit = 0;
                  _context2.next = 5;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'comment',
                      query: { post: post, skip: skip, limit: limit }
                    })
                  );
                case 5:
                  responseJSON = _context2.sent;
                  dispatch((0, _error.setError)('comments', false));
                  childComments = filterComments(responseJSON.data);
                  comments = (0, _normalizr.normalize)(responseJSON.data, [commentSchema])
                    .entities.comments;
                  dispatch(
                    setComments({ comments: comments, childComments: childComments })
                  );
                  _context2.next = 15;
                  break;
                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](0);
                  dispatch((0, _error.setError)('comments', true, _context2.t0.message));
                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[0, 12]]
        );
      })
    );
    return function(_x2) {
      return _ref3.apply(this, arguments);
    };
  })();
}
function updateComment(comment) {
  return function(dispatch) {
    return dispatch(
      _utils.api.request({
        method: 'PUT',
        endpoint: 'comment',
        body: JSON.stringify(comment)
      })
    )
      .then(function(res) {
        return dispatch((0, _post.updatePost)(res));
      })
      .catch(function(error) {
        return Alert.alert(error.message);
      });
  };
}
function deleteComment(id) {
  return (function() {
    var _ref4 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(dispatch) {
        return _regenerator.default.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'DELETE',
                      endpoint: 'comment',
                      path: '/' + id
                    })
                  );
                case 3:
                  return _context3.abrupt('return', dispatch((0, _post.removePost)(id)));
                case 6:
                  _context3.prev = 6;
                  _context3.t0 = _context3['catch'](0);
                  return _context3.abrupt('return', Alert.alert(_context3.t0.message));
                case 9:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          null,
          [[0, 6]]
        );
      })
    );
    return function(_x3) {
      return _ref4.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=comment.actions.js.map
