'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.CenterButton = CenterButton;
exports.BetButton = BetButton;
exports.Timer = Timer;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _numbers = require('../../../utils/numbers');
var _styles = require('../../../styles');
var _common = require('@r3l/common');
var _navigation = require('../../navigation/navigation.actions');
var _piechart = require('../../stats/piechart');
var _coinStat = _interopRequireDefault(require('../../stats/coinStat.component'));
var _tooltip = _interopRequireDefault(require('../../tooltip/tooltip.component'));
var _layout = require('../../../styles/layout');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/vote-buttons/center-button.js';
CenterButton.propTypes = {
  post: _propTypes.default.object,
  votedUp: _propTypes.default.bool,
  horizontal: _propTypes.default.bool
};
function CenterButton(_ref) {
  var post = _ref.post,
    votedUp = _ref.votedUp,
    horizontal = _ref.horizontal;
  var payoutTime = post.data.payoutTime;
  var dispatch = (0, _reactRedux.useDispatch)();
  var openBetModal = function openBetModal() {
    return dispatch((0, _navigation.showModal)('investModal', { postId: post._id }));
  };
  var timer = _react.default.createElement(
    _uni.View,
    {
      w: _layout.CENTER_BUTTON_SIZE,
      h: _layout.CENTER_BUTTON_SIZE,
      __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 5 }
    },
    _react.default.createElement(Timer, {
      payoutTime: payoutTime,
      post: post,
      __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }
    })
  );
  return _react.default.createElement(
    _uni.View,
    {
      p: horizontal ? '0 1.5' : '.75 0',
      __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 5 }
    },
    votedUp
      ? _react.default.createElement(BetButton, {
          size: _layout.CENTER_BUTTON_SIZE,
          openBetModal: openBetModal,
          post: post,
          __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 9 }
        })
      : timer
  );
}
BetButton.propTypes = {
  size: _propTypes.default.number,
  openBetModal: _propTypes.default.func,
  post: _propTypes.default.object
};
function BetButton(_ref2) {
  var size = _ref2.size,
    openBetModal = _ref2.openBetModal,
    post = _ref2.post;
  var earning = (0, _reactRedux.useSelector)(function(state) {
    return state.earnings.pending
      .map(function(e) {
        return state.earnings.entities[e];
      })
      .find(function(ee) {
        return ee.post === post._id;
      });
  });
  var tooltipData = {
    text: earning
      ? 'This is your projected reward for this post, click to increase your bet'
      : 'Bet on the relevance of this post to earn rewards',
    position: 'right',
    desktopOnly: true
  };
  var estimatedRewards =
    earning && (earning.estimatedPostPayout * earning.shares) / earning.totalPostShares;
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 5 } },
    _react.default.createElement(
      _tooltip.default,
      {
        data: tooltipData,
        name: 'betButton',
        globalEventOff: 'click',
        __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.HoverButton,
        {
          w: size,
          h: size * 0.8,
          minwidth: '0',
          bradius: size / 2,
          onPress: openBetModal,
          bg: earning ? 'transparent' : _styles.colors.gold,
          p: '0 0',
          c: _styles.colors.white,
          __source: { fileName: _jsxFileName, lineNumber: 89, columnNumber: 9 }
        },
        earning
          ? _react.default.createElement(_coinStat.default, {
              mr: 0,
              spaceBetween: 0,
              lh: 2,
              fs: 1.5,
              size: 1.5,
              align: 'center',
              amount: estimatedRewards,
              __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 13 }
            })
          : _react.default.createElement(
              _uni.LinkFont,
              {
                c: earning ? _styles.colors.white : _styles.colors.black,
                __source: { fileName: _jsxFileName, lineNumber: 113, columnNumber: 13 }
              },
              'BET'
            )
      )
    )
  );
}
Timer.propTypes = {
  payoutTime: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.object
  ]),
  post: _propTypes.default.object
};
function Timer(_ref3) {
  var payoutTime = _ref3.payoutTime,
    post = _ref3.post;
  var updateTimerParams = (0, _react.useCallback)(
    function() {
      var now = new Date();
      var payoutDate = new Date(payoutTime);
      var percent =
        100 - (100 * (payoutDate.getTime() - now.getTime())) / _common.PAYOUT_TIME;
      var text = (0, _numbers.timeLeft)({ _date: payoutTime, index: 1 });
      return { percent: percent, text: text };
    },
    [payoutTime]
  );
  var _useState = (0, _react.useState)(updateTimerParams),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    timer = _useState2[0],
    updateTimer = _useState2[1];
  (0, _react.useEffect)(
    function() {
      var id = setInterval(function() {
        return updateTimer(updateTimerParams);
      }, 10000);
      return function() {
        return clearInterval(id);
      };
    },
    [payoutTime, updateTimerParams]
  );
  var timeLelft = (0, _numbers.getTimestamp)(post.data.payoutTime, true).toLowerCase();
  var tooltipData = {
    text: 'Upvote this post to be able to bet on it.\nYou have '.concat(
      timeLelft,
      ' to bet.'
    ),
    position: 'right'
  };
  return _react.default.createElement(
    _react.default.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 155, columnNumber: 5 } },
    _react.default.createElement(
      _piechart.PieChart,
      (0, _extends2.default)({ color: _styles.colors.black, strokeWidth: 1 }, timer, {
        __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 7 }
      })
    ),
    _react.default.createElement(_tooltip.default, {
      name: 'bet',
      data: tooltipData,
      __source: { fileName: _jsxFileName, lineNumber: 157, columnNumber: 7 }
    })
  );
}
//# sourceMappingURL=center-button.js.map
