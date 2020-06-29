'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.useCastVote = useCastVote;
exports.useVoteAnimation = useVoteAnimation;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = require('react');
var _reactRedux = require('react-redux');
var _alert = require('../../../utils/alert');
var _navigation = require('../../navigation/navigation.actions');
var _hooks = require('../../auth/hooks');
var _launchAnimation = _interopRequireDefault(require('./launchAnimation'));
var _invest = require('../invest.actions');
var _Alert = (0, _alert.Alert)(),
  alert = _Alert.alert;
var Analytics;
var ReactGA;
if (process.env.WEB !== 'true') {
  Analytics = require('react-native-firebase').analytics();
} else {
  ReactGA = require('react-ga').default;
}
function useCastVote(_ref) {
  var post = _ref.post,
    user = _ref.user,
    canBet = _ref.canBet;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    processingVote = _useState2[0],
    setProcessingVote = _useState2[1];
  var displayBetPrompt = false;
  var hasAuth = (0, _hooks.useAuth)();
  return (0, _react.useCallback)(
    (function() {
      var _ref2 = (0, _asyncToGenerator2.default)(
        _regenerator.default.mark(function _callee(e, vote, amount) {
          var type, res;
          return _regenerator.default.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    e.preventDefault();
                    e.stopPropagation();
                    if (!processingVote) {
                      _context.next = 5;
                      break;
                    }
                    return _context.abrupt('return');
                  case 5:
                    if (hasAuth()) {
                      _context.next = 7;
                      break;
                    }
                    return _context.abrupt('return');
                  case 7:
                    type = amount > 0 ? 'upvote' : 'downvote';
                    if (!(vote && vote.isManualBet && type === 'upvote' && canBet)) {
                      _context.next = 11;
                      break;
                    }
                    showBetModal({ dispatch: dispatch, postId: post._id });
                    return _context.abrupt('return');
                  case 11:
                    setProcessingVote(true);
                    _context.next = 14;
                    return dispatch(
                      (0, _invest.vote)({
                        amount: amount,
                        post: post,
                        user: user,
                        vote: vote,
                        displayBetPrompt: displayBetPrompt
                      })
                    );
                  case 14:
                    res = _context.sent;
                    setProcessingVote(false);
                    if (!(!res || res.undoInvest)) {
                      _context.next = 18;
                      break;
                    }
                    return _context.abrupt('return');
                  case 18:
                    type === 'upvote' &&
                      canBet &&
                      showBetModal({ dispatch: dispatch, postId: post._id });
                    runAnalytics(type);
                    _context.next = 26;
                    break;
                  case 22:
                    _context.prev = 22;
                    _context.t0 = _context['catch'](0);
                    setProcessingVote(false);
                    alert(_context.t0.message);
                  case 26:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[0, 22]]
          );
        })
      );
      return function(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    })(),
    [processingVote, hasAuth, dispatch, post, user, displayBetPrompt, canBet]
  );
}
function useVoteAnimation(_ref3) {
  var post = _ref3.post,
    investButton = _ref3.investButton,
    horizontal = _ref3.horizontal;
  var dispatch = (0, _reactRedux.useDispatch)();
  var newVote = (0, _reactRedux.useSelector)(function(state) {
    return state.investments.voteSuccess;
  });
  (0, _react.useEffect)(
    function() {
      if (!newVote || !newVote._id) return;
      var postId = newVote.post._id || newVote.post;
      if (postId !== post._id) return;
      var rankChange = computeRankChange({ post: post, rankChange: newVote.rankChange });
      var type = newVote.amount >= 0 ? 'upvote' : 'downvote';
      var el = investButton;
      var params = { amount: rankChange, horizontal: horizontal };
      if (newVote.isManualBet && newVote.stakedTokens > 0) {
        params.amount = 0;
        (0, _launchAnimation.default)({
          type: 'bet',
          params: params,
          el: el,
          dispatch: dispatch
        });
      } else {
        (0, _launchAnimation.default)({
          type: type,
          params: params,
          el: el,
          dispatch: dispatch
        });
      }
      dispatch((0, _invest.updatePostVote)());
    },
    [newVote]
  );
}
function showBetModal(_ref4) {
  var dispatch = _ref4.dispatch,
    postId = _ref4.postId;
  setTimeout(function() {
    return dispatch((0, _navigation.showModal)('investModal', { postId: postId }));
  }, 1000);
}
function computeRankChange(_ref5) {
  var post = _ref5.post,
    rankChange = _ref5.rankChange;
  var startRank = post.data ? post.data.pagerank : 0;
  var total = startRank + rankChange + 1;
  return Math.round(total) - Math.round(startRank);
}
function runAnalytics(type) {
  Analytics && Analytics.logEvent(type);
  ReactGA && ReactGA.event({ category: 'User', action: ''.concat(type, 'ed a post') });
}
//# sourceMappingURL=button.hooks.js.map
