'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = AddEthAddress;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _web3Warning = _interopRequireDefault(require('./web3Warning/web3Warning.component'));
var _contract = require('../../contract/contract.hooks');
var _web3Warning2 = require('./web3Warning/web3Warning.hooks');
var _wallet = require('../wallet.actions');
var _navigation = require('../../navigation/navigation.actions');
var _price = require('../price.context');
var _cashoutFooter = require('./cashoutFooter');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/web/connectMetamaskModal.js';
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
  var warning = (0, _web3Warning2.useCurrentWarning)({
    accounts: accounts,
    user: user,
    networkId: networkId,
    canClaim: canClaim
  });
  var title = warning ? 'Connect Your Ethereum Wallet' : 'Ethereum Address is Connected';
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 39, columnNumber: 5 } },
    _react.default.createElement(
      _uni.Title,
      { __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 7 } },
      title
    ),
    warning
      ? _react.default.createElement(_web3Warning.default, {
          connectAddress: function connectAddress() {
            return dispatch((0, _wallet.connectAddress)(account));
          },
          warning: warning,
          __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 9 }
        })
      : _react.default.createElement(Connected, {
          close: close,
          account: account,
          __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 9 }
        })
  );
}
Connected.propTypes = { account: _propTypes.default.string };
function Connected(_ref2) {
  var account = _ref2.account;
  var balance = (0, _contract.useBalance)();
  var usdAmount = (0, _price.usePrice)(balance, 'number');
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 5 } },
    _react.default.createElement(
      _uni.BodyText,
      { mt: 4, __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 7 } },
      'Connected account: ',
      account
    ),
    _react.default.createElement(
      _uni.BodyText,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 } },
      'Balance in Ethereum wallet: ',
      balance,
      ' REL ($',
      usdAmount,
      ')'
    ),
    _react.default.createElement(_cashoutFooter.CashoutFooter, {
      __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 7 }
    })
  );
}
//# sourceMappingURL=connectMetamaskModal.js.map
