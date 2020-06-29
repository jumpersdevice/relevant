'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setCreatePostState = setCreatePostState;
exports.setPostCategory = setPostCategory;
exports.clearCreatePost = clearCreatePost;
exports.submitPost = submitPost;
exports.generatePreviewServer = generatePreviewServer;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _utils = require('../../utils');
var _activity = require('../activity/activity.actions');
var Alert = _utils.alert.Alert();
function setCreatePostState(state) {
  return { type: types.SET_CREATE_POST_STATE, payload: state };
}
function setPostCategory(tag) {
  var set = tag || null;
  return { type: 'SET_POST_CATEGORY', payload: set };
}
function clearCreatePost() {
  return { type: 'CLEAR_CREATE_POST' };
}
function submitPost(post) {
  return (function() {
    var _ref = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
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
                      endpoint: 'post',
                      body: JSON.stringify(post)
                    })
                  );
                case 3:
                  dispatch(
                    (0, _activity.showPushNotificationPrompt)({ type: 'createPost' })
                  );
                  return _context.abrupt('return', true);
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);
                  Alert.alert('Error creating post: '.concat(_context.t0.message));
                  return _context.abrupt('return', false);
                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x) {
      return _ref.apply(this, arguments);
    };
  })();
}
function generatePreviewServer(link) {
  return function() {
    return fetch(
      process.env.API_SERVER +
        '/api/post/preview/generate?url=' +
        encodeURIComponent(link),
      { method: 'GET' }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJSON) {
        return responseJSON;
      })
      .catch(Alert);
  };
}
//# sourceMappingURL=createPost.actions.js.map
