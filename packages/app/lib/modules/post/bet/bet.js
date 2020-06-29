'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.BetContainer = BetContainer;
exports.default = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _uni = require('../../styled/uni');
var _numbers = require('../../../utils/numbers');
var _styles = require('../../../styles');
var _common = require('@r3l/common');
var _coinStat = _interopRequireDefault(require('../../stats/coinStat.component'));
var _invest = require('../invest.actions');
var _navigation = require('../../navigation/navigation.actions');
var _tooltip = _interopRequireDefault(require('../../tooltip/tooltip.component'));
var _price = require('../../wallet/price.context');
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _betstats = _interopRequireDefault(require('./betstats'));
var _circlebutton = _interopRequireDefault(require('./circlebutton'));
var _smallcoinstat = _interopRequireDefault(require('./smallcoinstat'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/bet/bet.js';
function BetContainer(_ref) {
  var props = (0, _extends2.default)({}, _ref);
  var user =
    (0, _reactRedux.useSelector)(function(state) {
      return state.auth.user;
    }) || {};
  var post = (0, _reactRedux.useSelector)(function(state) {
    return state.posts.posts[state.navigation.modalData.postId];
  });
  if (!user || !post) return null;
  return _react.default.createElement(
    Bet,
    (0, _extends2.default)({ user: user, post: post }, props, {
      __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 10 }
    })
  );
}
Bet.propTypes = {
  user: _propTypes.default.object,
  post: _propTypes.default.object,
  close: _propTypes.default.func
};
function Bet(_ref2) {
  var user = _ref2.user,
    post = _ref2.post,
    close = _ref2.close;
  var dispatch = (0, _reactRedux.useDispatch)();
  var earning = (0, _reactRedux.useSelector)(function(state) {
    return state.earnings.pending
      .map(function(e) {
        return state.earnings.entities[e];
      })
      .find(function(ee) {
        return ee.post === post._id;
      });
  });
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    processingBet = _useState2[0],
    setProcessingBet = _useState2[1];
  var title = earning ? 'Increase Your Bet' : 'Bet on the Relevance of this Post';
  var totalBalance = user.balance + user.tokenBalance;
  var maxBet = totalBalance - user.lockedTokens;
  var defaultAmount = Math.max(maxBet * _common.VOTE_COST_RATIO, 0);
  var _useState3 = (0, _react.useState)(defaultAmount),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    amount = _useState4[0],
    setAmount = _useState4[1];
  var _useState5 = (0, _react.useState)((0, _numbers.timeLeftTick)(post.data.payoutTime)),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    time = _useState6[0],
    setTimer = _useState6[1];
  (0, _react.useEffect)(
    function() {
      var id = setInterval(function() {
        return setTimer((0, _numbers.timeLeftTick)(post.data.payoutTime));
      }, 1000);
      return function() {
        return clearInterval(id);
      };
    },
    [post.data.payoutTime, time]
  );
  if (!user || !post) return null;
  var plusAmount = function plusAmount() {
    return setAmount(function(a) {
      var largeStep = (maxBet - defaultAmount) / 5;
      var smallStep = defaultAmount / 5;
      var err = defaultAmount / 100;
      return a + smallStep <= defaultAmount + err
        ? a + smallStep
        : Math.min(a + largeStep, maxBet);
    });
  };
  var minusAmount = function minusAmount() {
    return setAmount(function(a) {
      var largeStep = (totalBalance - user.lockedTokens - defaultAmount) / 5;
      var smallStep = defaultAmount / 5;
      var err = defaultAmount / 100;
      if (a - smallStep <= 0 + err) return a;
      return a - largeStep >= defaultAmount - err
        ? a - largeStep
        : Math.max(0, a - smallStep);
    });
  };
  var placeBet = (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  setProcessingBet(true);
                  _context.next = 4;
                  return dispatch(
                    (0, _invest.bet)({ postId: post._id, stakedTokens: amount })
                  );
                case 4:
                  setProcessingBet(false);
                  close();
                  _context.next = 11;
                  break;
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);
                  setProcessingBet(false);
                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 8]]
        );
      })
    );
    return function placeBet() {
      return _ref3.apply(this, arguments);
    };
  })();
  var exchageUrl = (0, _price.exchangeLink)();
  var power = (100 * amount) / maxBet;
  var tooltipData = {
    text:
      'Posts that get upvoted by lots of users with high Reputation get payouts.\n\nBet more coins and bet early in order to win the biggest portion of the payout.'
  };
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 5 } },
    _react.default.createElement(
      _uni.Header,
      {
        inline: 1,
        mr: 2,
        __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 7 }
      },
      title,
      ' ',
      _react.default.createElement(_tooltip.default, {
        inline: 1,
        name: 'betInfo',
        data: tooltipData,
        info: true,
        __source: { fileName: _jsxFileName, lineNumber: 122, columnNumber: 17 }
      })
    ),
    _react.default.createElement(
      _uni.View,
      {
        fdirection: 'row',
        align: 'baseline',
        __source: { fileName: _jsxFileName, lineNumber: 125, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.SmallText,
        {
          mt: 1,
          mr: 1,
          __source: { fileName: _jsxFileName, lineNumber: 126, columnNumber: 9 }
        },
        'Time until payout: ',
        time
      )
    ),
    _react.default.createElement(
      _uni.View,
      {
        mt: 4,
        fdirection: 'row',
        justify: 'space-between',
        align: 'center',
        __source: { fileName: _jsxFileName, lineNumber: 131, columnNumber: 7 }
      },
      _react.default.createElement(
        _circlebutton.default,
        {
          onPress: minusAmount,
          __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 9 }
        },
        '\u2013'
      ),
      _react.default.createElement(
        _uni.View,
        { pr: 1, __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 9 } },
        _react.default.createElement(_coinStat.default, {
          align: 'center',
          fs: 4.5,
          lh: 4.5,
          spaceBetween: 1,
          c: _styles.colors.black,
          amount: amount,
          __source: { fileName: _jsxFileName, lineNumber: 134, columnNumber: 11 }
        })
      ),
      _react.default.createElement(
        _circlebutton.default,
        {
          onPress: plusAmount,
          __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 9 }
        },
        '+'
      )
    ),
    _react.default.createElement(
      _uni.View,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 145, columnNumber: 7 } },
      _react.default.createElement(
        _uni.View,
        {
          h: 0.5,
          fdirection: 'row',
          __source: { fileName: _jsxFileName, lineNumber: 146, columnNumber: 9 }
        },
        _react.default.createElement(_uni.View, {
          w: ''.concat(power, '%'),
          bg: _styles.colors.blue,
          __source: { fileName: _jsxFileName, lineNumber: 147, columnNumber: 11 }
        }),
        _react.default.createElement(_uni.View, {
          w: ''.concat(100 - power, '%'),
          bg: _styles.colors.lightBorder,
          __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 11 }
        })
      ),
      _react.default.createElement(
        _uni.View,
        {
          fdirection: 'row',
          justify: 'space-between',
          __source: { fileName: _jsxFileName, lineNumber: 150, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.SecondaryText,
          {
            mt: 0.5,
            __source: { fileName: _jsxFileName, lineNumber: 151, columnNumber: 11 }
          },
          'Available Coins: ',
          _react.default.createElement(_smallcoinstat.default, {
            amount: maxBet - amount,
            __source: { fileName: _jsxFileName, lineNumber: 152, columnNumber: 30 }
          })
        ),
        (0, _price.tokenEnabled)() &&
          _react.default.createElement(
            _ULink.default,
            {
              inline: 1,
              to: exchageUrl,
              external: true,
              target: '_blank',
              __source: { fileName: _jsxFileName, lineNumber: 155, columnNumber: 13 }
            },
            _react.default.createElement(
              _uni.SecondaryText,
              {
                mt: 0.5,
                c: _styles.colors.blue,
                onPress: function onPress() {
                  dispatch((0, _navigation.goToUrl)(exchageUrl));
                },
                __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 15 }
              },
              'Get more coins'
            )
          )
      )
    ),
    _react.default.createElement(
      _uni.View,
      { mt: 3, __source: { fileName: _jsxFileName, lineNumber: 170, columnNumber: 7 } },
      _react.default.createElement(_betstats.default, {
        maxBet: maxBet,
        post: post,
        amount: amount,
        earning: earning,
        __source: { fileName: _jsxFileName, lineNumber: 171, columnNumber: 9 }
      })
    ),
    _react.default.createElement(
      _uni.HoverButton,
      {
        mt: 3,
        onPress: placeBet,
        disabled: processingBet || !amount,
        __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 7 }
      },
      'Bet ',
      (0, _numbers.abbreviateNumber)(amount),
      ' Coins'
    ),
    _react.default.createElement(
      _uni.SmallText,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 181, columnNumber: 7 } },
      '*You always get your coins back once the betting round ends.'
    )
  );
}
var _default = BetContainer;
exports.default = _default;
//# sourceMappingURL=bet.js.map
