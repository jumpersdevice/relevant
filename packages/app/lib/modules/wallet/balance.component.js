'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.Balance = Balance;
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _numbers = require('../../utils/numbers');
var _eth = require('../../utils/eth');
var _price = require('./price.context');
var _uni = require('../styled/uni');
var _coinStat = _interopRequireDefault(require('../stats/coinStat.component'));
var _common = require('@r3l/common');
var _tooltip = _interopRequireDefault(require('../tooltip/tooltip.component'));
var _walletLinks = _interopRequireDefault(require('./walletLinks'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/balance.component.js';
function Balance() {
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var screenSize = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.screenSize;
  });
  var maxUSD = (0, _price.usePrice)(_common.CASHOUT_MAX);
  if (!user) return null;
  var metaMaskTokens = user.tokenBalance;
  var airdropTokens = user.airdropTokens,
    lockedTokens = user.lockedTokens;
  var stakingPower = user.balance
    ? Math.round(100 * (1 - lockedTokens / user.balance))
    : 0;
  var unclaimed = user.balance - user.airdropTokens;
  var accountDetail = getAccountDetail({
    unclaimed: unclaimed,
    metaMaskTokens: metaMaskTokens,
    airdropTokens: airdropTokens,
    lockedTokens: lockedTokens,
    stakingPower: stakingPower
  });
  return _react.default.createElement(
    _uni.View,
    {
      m: ['0 4 2 4', '2 2 0 2'],
      __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 5 }
    },
    !screenSize
      ? _react.default.createElement(
          _uni.View,
          { __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 9 } },
          _react.default.createElement(
            _uni.BodyText,
            {
              mt: 2,
              __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 11 }
            },
            'These are coins you earned as rewards. You can transfer up to ',
            _common.CASHOUT_MAX,
            maxUSD,
            ' coins to your Ethereum wallet (this limit will be increased as the network grows).'
          )
        )
      : null,
    _react.default.createElement(
      _uni.View,
      {
        br: true,
        bl: true,
        bt: true,
        p: '2',
        mt: 2,
        __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        {
          fdirection: 'row',
          justify: 'space-between',
          wrap: true,
          __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            mb: 0.5,
            __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 11 }
          },
          'Account Balance'
        ),
        _react.default.createElement(
          _uni.SecondaryText,
          { __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 11 } },
          (0, _eth.truncateAddress)(user.ethAddress[0])
        )
      ),
      _react.default.createElement(
        _uni.View,
        {
          fdirection: 'row',
          align: 'center',
          display: 'flex',
          mt: 2,
          __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 9 }
        },
        _react.default.createElement(_coinStat.default, {
          fs: 4.5,
          lh: 5,
          size: 5,
          user: user,
          align: 'center',
          showPrice: true,
          __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 11 }
        })
      )
    ),
    _react.default.createElement(
      _uni.View,
      {
        fdirection: 'row',
        wrap: true,
        border: 1,
        p: '2',
        __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 7 }
      },
      accountDetail.map(function(detail) {
        return (
          (!!detail.value || !detail.alwayShow) &&
          _react.default.createElement(
            _uni.View,
            {
              key: detail.text,
              __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 15 }
            },
            detail.tip &&
              _react.default.createElement(_tooltip.default, {
                name: detail.text.replace(' ', ''),
                data: { text: detail.tip },
                __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 19 }
              }),
            _react.default.createElement(
              _uni.SecondaryText,
              {
                mr: 2,
                __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 17 }
              },
              detail.text,
              ': ',
              (0, _numbers.abbreviateNumber)(detail.value)
            )
          )
        );
      })
    ),
    _react.default.createElement(_walletLinks.default, {
      __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 7 }
    }),
    _react.default.createElement(
      _uni.Header,
      {
        mt: [9, 4],
        __source: { fileName: _jsxFileName, lineNumber: 106, columnNumber: 7 }
      },
      'Recent Activity'
    ),
    !screenSize
      ? _react.default.createElement(
          _uni.BodyText,
          {
            mt: 2,
            __source: { fileName: _jsxFileName, lineNumber: 108, columnNumber: 9 }
          },
          'Your rewards for upvoting links and discussion threads that are relevant to the community.'
        )
      : null
  );
}
function getAccountDetail(_ref) {
  var unclaimed = _ref.unclaimed,
    metaMaskTokens = _ref.metaMaskTokens,
    airdropTokens = _ref.airdropTokens,
    lockedTokens = _ref.lockedTokens,
    stakingPower = _ref.stakingPower;
  return [
    {
      text: 'Unclaimed Coins',
      value: Math.max(unclaimed, 0),
      tip: 'You can transfer these coins to your Ethereum wallet.'
    },
    {
      text: 'Metamask Coins',
      value: metaMaskTokens,
      tip: 'These are the coins located in your connected Ethereum wallet.'
    },
    {
      text: 'Airdrop Coins',
      value: airdropTokens,
      tip:
        'These are coins you got for referrals and verifying social accounts.\nYou cannot transfer these coins to Metamask.',
      alwaysShow: true
    },
    {
      text: 'Locked Tokens Coins',
      value: lockedTokens,
      tip:
        'These are coins that you are currently betting on posts.\nThey get unlocked once the bets expire.'
    },
    {
      text: 'Staking Power',
      value: stakingPower + '%',
      tip: 'This is the ratio between unlocked and locked coins.',
      alwaysShow: true,
      stringValue: true
    }
  ];
}
var _default = (0, _react.memo)(Balance);
exports.default = _default;
//# sourceMappingURL=balance.component.js.map
