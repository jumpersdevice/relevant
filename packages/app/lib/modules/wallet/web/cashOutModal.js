'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = AddEthAddress;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _web = require('../../styled/web');
var _web3Warning = _interopRequireDefault(require('./web3Warning/web3Warning.component'));
var _contract = require('../../contract/contract.hooks');
var _contract2 = require('../../contract/contract.selectors');
var _web3Warning2 = require('./web3Warning/web3Warning.hooks');
var _eth = require('../../../utils/eth');
var _wallet = require('../wallet.actions');
var _earnings = require('../earnings.actions');
var _navigation = require('../../navigation/navigation.actions');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styles = require('../../../styles');
var _reactNativeWeb = require('react-native-web');
var _common = require('@r3l/common');
var _tooltip = _interopRequireDefault(require('../../tooltip/tooltip.component'));
var _price = require('../price.context');
var _cashoutFooter = require('./cashoutFooter');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/web/cashOutModal.js';
var TxProgress = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'cashOutModal__TxProgress',
  componentId: 'k62wp8-0'
})(
  ['position:absolute;top:0;left:0;right:0;bottom:0;background-color:', ';'],
  _styles.colors.modalBackground
);
AddEthAddress.propTypes = { close: _propTypes.default.func };
function AddEthAddress(_ref) {
  var close = _ref.close;
  var _useWeb = (0, _contract.useWeb3)(),
    _useWeb2 = (0, _slicedToArray2.default)(_useWeb, 3),
    accounts = _useWeb2[0],
    networkId = _useWeb2[2];
  var dispatch = (0, _reactRedux.useDispatch)();
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var canClaim = user.balance - (user.airdropTokens || 0);
  var account = accounts && accounts[0];
  (0, _contract.useMetamask)();
  var unclaimedSig = useUnclaimedSig(user, account);
  var warning = (0, _web3Warning2.useCurrentWarning)({
    accounts: accounts,
    user: user,
    networkId: networkId,
    unclaimedSig: unclaimedSig,
    canClaim: canClaim
  });
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 5 } },
    _react.default.createElement(
      _uni.Title,
      { __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 7 } },
      'Claim Your Relevant Coins'
    ),
    _react.default.createElement(
      _uni.BodyText,
      {
        mt: 1,
        mb: 4,
        __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 7 }
      },
      'Transfer Coins to your Ethereum Wallet'
    ),
    warning
      ? _react.default.createElement(_web3Warning.default, {
          connectAddress: function connectAddress() {
            return dispatch((0, _wallet.connectAddress)(account));
          },
          warning: warning,
          __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 9 }
        })
      : _react.default.createElement(CashOutHandler, {
          close: close,
          canClaim: canClaim,
          account: account,
          unclaimedSig: unclaimedSig,
          __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 9 }
        })
  );
}
CashOutHandler.propTypes = {
  canClaim: _propTypes.default.number,
  account: _propTypes.default.string,
  unclaimedSig: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.bool
  ]),
  close: _propTypes.default.func
};
function CashOutHandler(_ref2) {
  var canClaim = _ref2.canClaim,
    account = _ref2.account,
    unclaimedSig = _ref2.unclaimedSig,
    close = _ref2.close;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    currentTx = _useState2[0],
    setCurrentTx = _useState2[1];
  var _useRelevantActions = (0, _contract.useRelevantActions)(),
    send = _useRelevantActions.send;
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var maxClaim =
    user.role === 'admin'
      ? Math.min(1000 * 1e6, canClaim)
      : Math.min(canClaim, Math.max(_common.CASHOUT_MAX - user.cashedOut, 0));
  var initAmnt = unclaimedSig && !currentTx ? unclaimedSig.amount / 1e18 : maxClaim;
  var _useState3 = (0, _react.useState)(initAmnt),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    amount = _useState4[0],
    setAmount = _useState4[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  var usdAmount = (0, _price.usePrice)(amount, 'number');
  var maxUSD = (0, _price.usePrice)(maxClaim);
  (0, _react.useEffect)(
    function() {
      if (unclaimedSig) setAmount(unclaimedSig.amount / 1e18);
    },
    [unclaimedSig]
  );
  var cashOut = (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(customAmount) {
        var sendCashoutAction, tx;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                sendCashoutAction = function sendCashoutAction(amnt, sig) {
                  return send('claimTokens', { from: account }, amnt, sig);
                };
                _context.next = 3;
                return dispatch(
                  (0, _wallet.cashOutCall)(customAmount, sendCashoutAction)
                );
              case 3:
                tx = _context.sent;
                setCurrentTx(tx);
              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    );
    return function cashOut(_x) {
      return _ref3.apply(this, arguments);
    };
  })();
  var txState = (0, _contract.useTxState)({
    tx: currentTx,
    method: 'claimTokens',
    callback: function callback() {
      dispatch((0, _earnings.updateCashoutLog)(user.cashOut.earningId));
      setCurrentTx(null);
    }
  });
  if (txState === 'success') {
    close();
  }
  var validateAmount = function validateAmount(value) {
    return value < 0 ? 0 : value > maxClaim ? maxClaim : value;
  };
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 5 } },
    unclaimedSig &&
      !currentTx &&
      _react.default.createElement(
        _uni.Warning,
        { mb: 2, __source: { fileName: _jsxFileName, lineNumber: 145, columnNumber: 9 } },
        "Warning: You have not completed a previous transfer attempt, press the 'Transfer' button below to complete."
      ),
    ' ',
    _react.default.createElement(
      _uni.View,
      {
        fdirection: 'row',
        __source: { fileName: _jsxFileName, lineNumber: 150, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        {
          flex: 1,
          mr: 1,
          __source: { fileName: _jsxFileName, lineNumber: 151, columnNumber: 9 }
        },
        _react.default.createElement(_web.Input, {
          mt: '0',
          flex: 1,
          type: 'number',
          onChange: function onChange(_ref4) {
            var value = _ref4.target.value;
            return unclaimedSig ? amount : setAmount(validateAmount(value));
          },
          value: amount,
          h: 6,
          fs: amount ? 4 : 2,
          p: '0 1.5 0 1.5',
          fw: 'bold',
          __source: { fileName: _jsxFileName, lineNumber: 152, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.Text,
          {
            h: 6,
            style: { right: (0, _styles.sizing)(1), bottom: (0, _styles.sizing)(0) },
            position: 'absolute',
            fs: 4,
            __source: { fileName: _jsxFileName, lineNumber: 165, columnNumber: 11 }
          },
          '$' + usdAmount
        )
      ),
      _react.default.createElement(
        _uni.Button,
        {
          disabled: !amount || amount === '',
          h: 7,
          mr: 'auto',
          onClick: function onClick() {
            return cashOut(amount);
          },
          __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 9 }
        },
        'Transfer coins to wallet'
      )
    ),
    _react.default.createElement(
      _uni.View,
      {
        fdirection: 'row',
        __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.SecondaryText,
        {
          mr: 2,
          mt: 1,
          onPress: function onPress() {
            return setAmount(maxClaim);
          },
          __source: { fileName: _jsxFileName, lineNumber: 184, columnNumber: 9 }
        },
        _react.default.createElement(_tooltip.default, {
          data: {
            text: 'This is the maximum amount of coins you can claim at this time.'
          },
          __source: { fileName: _jsxFileName, lineNumber: 185, columnNumber: 11 }
        }),
        'Maximum claim: ',
        maxClaim,
        maxUSD,
        ' Coins'
      ),
      _react.default.createElement(
        _uni.SecondaryText,
        { mt: 1, __source: { fileName: _jsxFileName, lineNumber: 193, columnNumber: 9 } },
        _react.default.createElement(_tooltip.default, {
          data: { text: 'Total unclaimed coins.' },
          __source: { fileName: _jsxFileName, lineNumber: 194, columnNumber: 11 }
        }),
        'Unclaimed: ',
        canClaim,
        ' Coins'
      )
    ),
    _react.default.createElement(_cashoutFooter.CashoutFooter, {
      __source: { fileName: _jsxFileName, lineNumber: 198, columnNumber: 7 }
    }),
    txState === 'pending' &&
      _react.default.createElement(
        TxProgress,
        {
          align: 'center',
          justify: 'center',
          __source: { fileName: _jsxFileName, lineNumber: 200, columnNumber: 9 }
        },
        _react.default.createElement(_reactNativeWeb.ActivityIndicator, {
          __source: { fileName: _jsxFileName, lineNumber: 201, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.BodyText,
          {
            mt: 2,
            __source: { fileName: _jsxFileName, lineNumber: 202, columnNumber: 11 }
          },
          'Processing Transaction'
        )
      )
  );
}
function useUnclaimedSig(user, account) {
  var _useRelevantState = (0, _contract2.useRelevantState)(),
    userNonce = _useRelevantState.userNonce;
  var nonce =
    userNonce && userNonce.phase === 'SUCCESS' && (0, _eth.parseBN)(userNonce.value);
  var unclaimedSig = user && user.cashOut && user.cashOut.nonce === nonce && user.cashOut;
  var _useRelevantActions2 = (0, _contract.useRelevantActions)(),
    call = _useRelevantActions2.call;
  (0, _react.useEffect)(
    function() {
      account && call && call('nonceOf', account);
    },
    [account, call]
  );
  return unclaimedSig;
}
//# sourceMappingURL=cashOutModal.js.map
