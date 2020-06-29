'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = WalletLinks;
var _react = _interopRequireDefault(require('react'));
var _reactRedux = require('react-redux');
var _styles = require('../../styles');
var _price = require('./price.context');
var _navigation = require('../navigation/navigation.actions');
var _uni = require('../styled/uni');
var _common = require('@r3l/common');
var _tooltip = _interopRequireDefault(require('../tooltip/tooltip.component'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _auth = require('../auth/auth.actions');
var _alert = require('../../utils/alert');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/walletLinks.js';
function WalletLinks() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var exchageUrl = (0, _price.exchangeLink)();
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var isManualBet = user.notificationSettings.bet.manual;
  var toggleManualBet = function toggleManualBet() {
    dispatch((0, _auth.updateNotificationSettings)({ bet: { manual: !isManualBet } }));
  };
  function claimTokens() {
    return _styles.isNative
      ? (0, _alert.Alert)().alert(
          'you can claim tokens via the Relevant browser app on https://relevant.community'
        )
      : dispatch((0, _navigation.showModal)('cashOut'));
  }
  return _react.default.createElement(
    _uni.View,
    {
      mt: 2,
      fdirection: 'row',
      wrap: 'wrap',
      __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 5 }
    },
    _styles.isNative &&
      _react.default.createElement(
        _uni.View,
        {
          mr: [2, 1],
          mt: 1,
          fdirection: 'row',
          align: 'center',
          __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 }
        },
        _react.default.createElement(_tooltip.default, {
          name: 'coinInfo',
          data: {
            text: 'You can get more coins or transfer up to '.concat(
              _common.CASHOUT_MAX,
              ' coins to your your Metamask wallet via the browser app on https://relevant.community.'
            )
          },
          __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.LinkFont,
          {
            c: _styles.colors.blue,
            mr: 0.5,
            __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 11 }
          },
          'Manage Coins'
        )
      ),
    !_styles.isNative &&
      _react.default.createElement(
        _uni.View,
        {
          mr: [2, 1],
          mt: 1,
          fdirection: 'row',
          align: 'center',
          __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.Touchable,
          {
            onPress: claimTokens,
            td: 'underline',
            __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.LinkFont,
            {
              c: _styles.colors.blue,
              mr: 0.5,
              __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 13 }
            },
            'Claim Tokens'
          )
        ),
        _react.default.createElement(_tooltip.default, {
          info: true,
          data: {
            text: 'You can transfer up to '.concat(
              _common.CASHOUT_MAX,
              ' coins to your your Metamask wallet.\n(You cannot transfer coins you got for refferrals and verifying social accounts.)'
            )
          },
          __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 }
        })
      ),
    !_styles.isNative &&
      _react.default.createElement(
        _uni.View,
        {
          mr: [2, 1],
          mt: 1,
          fdirection: 'row',
          align: 'center',
          __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 9 }
        },
        _react.default.createElement(
          _tooltip.default,
          {
            data: {
              text:
                'If you have Relevant tokens in your Metamask wallet, you need to connect your account to be able to use them.'
            },
            __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.Touchable,
            {
              style: { zIndex: 1 },
              onClick: function onClick() {
                return dispatch((0, _navigation.showModal)('connectMetamask'));
              },
              td: 'underline',
              __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 13 }
            },
            _react.default.createElement(
              _uni.LinkFont,
              {
                c: _styles.colors.blue,
                __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 15 }
              },
              'Connect Your Wallet'
            )
          )
        )
      ),
    (0, _price.tokenEnabled)() &&
      !_styles.isNative &&
      _react.default.createElement(
        _uni.View,
        {
          mt: 1,
          fdirection: 'row',
          mr: [2, 1],
          align: 'center',
          __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 9 }
        },
        _react.default.createElement(
          _ULink.default,
          {
            to: exchageUrl,
            external: true,
            target: '_blank',
            __source: { fileName: _jsxFileName, lineNumber: 82, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.LinkFont,
            {
              c: _styles.colors.blue,
              onPress: function onPress() {
                dispatch((0, _navigation.goToUrl)(exchageUrl));
              },
              __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 13 }
            },
            'Get more coins'
          )
        )
      ),
    _react.default.createElement(
      _uni.View,
      {
        mt: 1,
        fdirection: 'row',
        align: 'center',
        __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 7 }
      },
      _react.default.createElement(
        _tooltip.default,
        {
          data: {
            text:
              'When you upvote posts you also bet coins on them. How much you bet can be decided automatically or manualy.'
          },
          __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.Touchable,
          {
            style: { zIndex: 1 },
            onPress: toggleManualBet,
            td: 'underline',
            __source: { fileName: _jsxFileName, lineNumber: 101, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.LinkFont,
            {
              c: _styles.colors.blue,
              __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 13 }
            },
            isManualBet ? 'Disable' : 'Enable',
            ' Betting Mode'
          )
        )
      )
    )
  );
}
//# sourceMappingURL=walletLinks.js.map
