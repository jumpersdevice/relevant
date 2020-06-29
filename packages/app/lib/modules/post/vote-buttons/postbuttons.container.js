'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _post = require('../../../utils/post');
var _uni = require('../../styled/uni');
var _community = require('../../community/community.selectors');
var _styles = require('../../../styles');
var _postbutton = _interopRequireDefault(require('./postbutton'));
var _postrank = _interopRequireDefault(require('./postrank'));
var _button = require('./button.hooks');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/vote-buttons/postbuttons.container.js';
var coinImage = require('../../../../public/img/relevantcoin.png');
PostButtons.propTypes = {
  post: _propTypes.default.shape({
    _id: _propTypes.default.oneOfType([
      _propTypes.default.string,
      _propTypes.default.object
    ]),
    id: _propTypes.default.string,
    data: _propTypes.default.object,
    user: _propTypes.default.oneOfType([
      _propTypes.default.string,
      _propTypes.default.object
    ]),
    myVote: _propTypes.default.object,
    parentPost: _propTypes.default.oneOfType([
      _propTypes.default.string,
      _propTypes.default.object
    ]),
    type: _propTypes.default.string,
    url: _propTypes.default.string
  }),
  color: _propTypes.default.string,
  horizontal: _propTypes.default.bool
};
var _default = (0, _react.memo)(PostButtons);
exports.default = _default;
function PostButtons(_ref) {
  var post = _ref.post,
    color = _ref.color,
    horizontal = _ref.horizontal;
  var investButton = (0, _react.useRef)();
  var community = (0, _community.useCommunity)();
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var canBet = getCanBet({ post: post, community: community, user: user });
  (0, _button.useVoteAnimation)({
    post: post,
    investButton: investButton,
    horizontal: horizontal
  });
  var castVote = (0, _button.useCastVote)({
    post: post,
    user: user,
    community: community,
    canBet: canBet
  });
  var tooltipData = getTooltipData(post);
  var voteStatus = getVoteStatus(user, post);
  if (!post || post === 'notFound') return null;
  return _react.default.createElement(
    _uni.View,
    {
      ref: investButton,
      onLayout: function onLayout() {},
      align: 'center',
      fdirection: horizontal ? 'row' : 'column',
      style: { opacity: 1 },
      __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.View,
      { __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 7 } },
      canBet &&
        _react.default.createElement(_uni.Image, {
          w: 1.6,
          h: 1.6,
          position: 'absolute',
          style: { top: (0, _styles.sizing)(-0.1), right: (0, _styles.sizing)(-0.4) },
          source: coinImage,
          __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 }
        }),
      _react.default.createElement(_postbutton.default, {
        canBet: canBet,
        tooltipData: tooltipData,
        key: ''.concat(post.id, '-up'),
        imageSet: 'UPVOTE',
        isActive: voteStatus.up,
        alt: 'upvote',
        color: color,
        onPress: function onPress(e) {
          return castVote(e, voteStatus.vote, 1);
        },
        __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 9 }
      })
    ),
    _react.default.createElement(_postrank.default, {
      horizontal: horizontal,
      color: color,
      post: post,
      __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 7 }
    }),
    _react.default.createElement(_postbutton.default, {
      tooltipData: tooltipData,
      key: ''.concat(post.id, '-down'),
      imageSet: 'DOWNVOTE',
      isActive: voteStatus.down,
      alt: 'downvote',
      color: color,
      onPress: function onPress(e) {
        return castVote(e, voteStatus.vote, -1);
      },
      __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 7 }
    })
  );
}
function getVoteStatus(user, post) {
  var ownPost = user && user._id === post.user;
  var vote = ownPost ? true : post.myVote;
  return { vote: vote, up: vote && vote.amount > 0, down: vote && vote.amount < 0 };
}
function getTooltipData(post) {
  var postType = (0, _post.getPostType)({ post: post });
  var tipText =
    postType === 'link'
      ? 'Upvote articles that are worth reading, downvote spam.'
      : 'Upvote quality '.concat(postType, 's and downvote spam');
  return { text: tipText, position: 'right', desktopOnly: true };
}
function getCanBet(_ref2) {
  var post = _ref2.post,
    community = _ref2.community,
    user = _ref2.user;
  if (!post) return false;
  var now = new Date();
  var bettingEnabled = community && community.betEnabled;
  var manualBet = user && user.notificationSettings.bet.manual;
  return (
    manualBet &&
    bettingEnabled &&
    post.data &&
    post.data.eligibleForReward &&
    now.getTime() < new Date(post.data.payoutTime).getTime()
  );
}
//# sourceMappingURL=postbuttons.container.js.map
