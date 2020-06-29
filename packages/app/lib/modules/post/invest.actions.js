'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.updatePostVote = updatePostVote;
exports.undoPostVote = undoPostVote;
exports.setInvestments = setInvestments;
exports.loadingInvestments = loadingInvestments;
exports.setPostInvestments = setPostInvestments;
exports.setUsers = setUsers;
exports.vote = vote;
exports.getInvestments = getInvestments;
exports.loadingPostInvestments = loadingPostInvestments;
exports.getPostInvestments = getPostInvestments;
exports.bet = bet;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _normalizr = require('normalizr');
var _actionTypes = require('../../core/actionTypes');
var _utils = require('../../utils');
var _post = require('./post.actions');
var _activity = require('../activity/activity.actions');
var Alert = _utils.alert.Alert();
var linkSchema = new _normalizr.schema.Entity('links', {}, { idAttribute: '_id' });
var postSchema = new _normalizr.schema.Entity(
  'posts',
  { metaPost: linkSchema },
  { idAttribute: '_id' }
);
var userSchema = new _normalizr.schema.Entity('users', {}, { idAttribute: '_id' });
var investmentSchema = new _normalizr.schema.Entity(
  'investments',
  { post: postSchema, investor: userSchema },
  { idAttribute: '_id' }
);
function updatePostVote(voteObj) {
  return { type: _actionTypes.UPDATE_POST_INVESTMENTS, payload: voteObj };
}
function undoPostVote(post) {
  return { type: _actionTypes.UNDO_POST_INVESTMENT, payload: post };
}
function setInvestments(investments, userId, index) {
  return {
    type: _actionTypes.SET_INVESTMENTS,
    payload: { investments: investments, userId: userId, index: index }
  };
}
function loadingInvestments() {
  return { type: _actionTypes.LOADING_INVESTMENTS };
}
function setPostInvestments(data, postId, skip) {
  return {
    type: _actionTypes.SET_POST_INVESTMENTS,
    payload: { postId: postId, data: data, index: skip || 0 }
  };
}
function setUsers(users) {
  return { type: _actionTypes.SET_USERS, payload: users };
}
function vote(_ref) {
  var amount = _ref.amount,
    post = _ref.post,
    user = _ref.user,
    undo = _ref.vote,
    displayBetPrompt = _ref.displayBetPrompt;
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        var res, isComment, showingPushBanner;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  if (undo) dispatch(undoPostVote(post._id));
                  else dispatch(updatePostVote({ post: post._id, amount: amount }));
                  _context.next = 4;
                  return dispatch(
                    _utils.api.request({
                      method: 'POST',
                      endpoint: 'invest',
                      path: '/',
                      body: JSON.stringify({
                        investor: user._id,
                        amount: amount,
                        post: post
                      })
                    })
                  );
                case 4:
                  res = _context.sent;
                  if (res.undoInvest) dispatch(undoPostVote(post._id));
                  else dispatch(updatePostVote(res.investment));
                  isComment = !!post.parentPost;
                  if (!(amount > 0 && !undo)) {
                    _context.next = 12;
                    break;
                  }
                  _context.next = 10;
                  return dispatch(
                    (0, _activity.showPushNotificationPrompt)({
                      type: isComment ? 'upvoteComment' : 'upvotePost'
                    })
                  );
                case 10:
                  showingPushBanner = _context.sent;
                  if (!showingPushBanner && displayBetPrompt)
                    dispatch(_activity.showBetPrompt);
                case 12:
                  return _context.abrupt('return', res);
                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](0);
                  if (undo) dispatch(updatePostVote({ post: post._id, amount: amount }));
                  else dispatch(undoPostVote(post._id));
                  return _context.abrupt('return', Alert.alert(_context.t0.message));
                case 19:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 15]]
        );
      })
    );
    return function(_x) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function getInvestments(userId, skip, limit) {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        var res, data;
        return _regenerator.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0;
                  dispatch(loadingInvestments());
                  _context2.next = 4;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'invest',
                      path: '/' + userId,
                      query: { skip: skip, limit: limit }
                    })
                  );
                case 4:
                  res = _context2.sent;
                  data = (0, _normalizr.normalize)(
                    { investments: res },
                    { investments: [investmentSchema] }
                  );
                  dispatch((0, _post.setPostsSimple)(data));
                  dispatch(setInvestments(data, userId, skip));
                  _context2.next = 12;
                  break;
                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2['catch'](0);
                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[0, 10]]
        );
      })
    );
    return function(_x2) {
      return _ref3.apply(this, arguments);
    };
  })();
}
function loadingPostInvestments(postId) {
  return { type: _actionTypes.LOADING_POST_INVESTMENTS, payload: postId };
}
function getPostInvestments(postId, limit, skip) {
  return (function() {
    var _ref4 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(dispatch) {
        var res, data;
        return _regenerator.default.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0;
                  dispatch(loadingPostInvestments(postId));
                  _context3.next = 4;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'invest',
                      query: { skip: skip, limit: limit },
                      path: '/post/'.concat(postId)
                    })
                  );
                case 4:
                  res = _context3.sent;
                  data = (0, _normalizr.normalize)(
                    { investments: res },
                    { investments: [investmentSchema] }
                  );
                  dispatch(setUsers(data.entities.users));
                  dispatch(setPostInvestments(data, postId, skip));
                  _context3.next = 12;
                  break;
                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3['catch'](0);
                case 12:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          null,
          [[0, 10]]
        );
      })
    );
    return function(_x3) {
      return _ref4.apply(this, arguments);
    };
  })();
}
function bet(_ref5) {
  var postId = _ref5.postId,
    stakedTokens = _ref5.stakedTokens;
  return (function() {
    var _ref6 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee4(dispatch) {
        var res;
        return _regenerator.default.wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'POST',
                      endpoint: 'invest',
                      path: '/bet',
                      body: JSON.stringify({ postId: postId, stakedTokens: stakedTokens })
                    })
                  );
                case 3:
                  res = _context4.sent;
                  return _context4.abrupt('return', dispatch(updatePostVote(res)));
                case 7:
                  _context4.prev = 7;
                  _context4.t0 = _context4['catch'](0);
                  Alert.alert(_context4.t0.message);
                  throw _context4.t0;
                case 11:
                case 'end':
                  return _context4.stop();
              }
            }
          },
          _callee4,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x4) {
      return _ref6.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=invest.actions.js.map
