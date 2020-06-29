'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = BetStats;
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _post = require('../../../utils/post');
var _rewards = require('../../../utils/rewards');
var _community = require('../../community/community.selectors');
var _piechart = require('../../stats/piechart');
var _invest = require('../invest.actions');
var _styles = require('../../../styles');
var _numbers = require('../../../utils/numbers');
var _smallcoinstat = _interopRequireDefault(require('./smallcoinstat'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/bet/betstats.js';
BetStats.propTypes = {
  post: _propTypes.default.object,
  earning: _propTypes.default.object,
  amount: _propTypes.default.number,
  maxBet: _propTypes.default.number
};
function BetStats(_ref) {
  var post = _ref.post,
    amount = _ref.amount,
    earning = _ref.earning,
    maxBet = _ref.maxBet;
  var community = (0, _community.useCommunity)();
  var investments = (0, _reactRedux.useSelector)(function(state) {
    return (state.investments.posts[post._id] || [])
      .map(function(_id) {
        return state.investments.investments[_id];
      })
      .filter(function(inv) {
        return inv.stakedTokens > 0 && inv.investor !== state.auth.user._id;
      });
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(
    function() {
      dispatch((0, _invest.getPostInvestments)(post._id));
    },
    [dispatch, post._id]
  );
  var existingShares = earning ? earning.shares : 0;
  var existingStake = earning ? earning.stakedTokens : 0;
  var bets = investments.length;
  var users = bets > 1 ? 'users' : 'user';
  var invText = bets
    ? ''
        .concat(bets, ' ')
        .concat(users, ' bet a total of ')
        .concat(
          (0, _numbers.abbreviateNumber)(post.data.totalShares - existingStake),
          ' coins on this post'
        )
    : '';
  var shares = (0, _post.computeShares)({ post: post, stakedTokens: amount });
  var postRewards = (0, _rewards.computePostPayout)(post.data, community);
  var shareOfRewards = !bets
    ? (existingStake + amount) / (maxBet + existingStake)
    : (shares + existingShares) / (post.data.shares + shares);
  var shareOfRewardsPercent = shareOfRewards * 100;
  var potentialRewards = postRewards * shareOfRewards;
  var shareEl = _react.default.createElement(
    _uni.SmallText,
    { inline: 1, __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 5 } },
    '  ',
    _react.default.createElement(
      _uni.Text,
      {
        style: { top: 2 },
        inline: 1,
        mb: -0.5,
        __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 7 }
      },
      _react.default.createElement(_piechart.PieChart, {
        w: '12px',
        h: '12px',
        percent: 100 - shareOfRewardsPercent,
        strokeWidth: 30,
        color: _styles.colors.blue,
        __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 9 }
      })
    ),
    ' ',
    (0, _numbers.abbreviateNumber)(shareOfRewardsPercent),
    '%'
  );
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 5 } },
    _react.default.createElement(
      _uni.SmallText,
      { __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 7 } },
      invText
    ),
    potentialRewards > 0 &&
      _react.default.createElement(
        _uni.View,
        {
          mt: 0.25,
          fdirection: 'row',
          __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.SmallText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 11 }
          },
          'Your estimated rewards: ',
          _react.default.createElement(_smallcoinstat.default, {
            amount: potentialRewards,
            __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 37 }
          })
        ),
        _react.default.createElement(
          _uni.SmallText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 11 }
          },
          shareEl,
          ' of total'
        )
      )
  );
}
//# sourceMappingURL=betstats.js.map
