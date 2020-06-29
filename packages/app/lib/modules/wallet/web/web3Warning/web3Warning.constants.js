'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.connectMetamask = exports.balance = exports.account = exports.network = exports.connection = exports.metamask = void 0;
var _react = _interopRequireDefault(require('react'));
var _common = require('@r3l/common');
var _uni = require('../../../styled/uni');
var _ULink = _interopRequireDefault(require('../../../navigation/ULink.component'));
var _eth = require('../../../../utils/eth');
var _styles = require('../../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/web/web3Warning/web3Warning.constants.js';
var metamask = {
  id: 1,
  title: 'No Ethereum wallet found',
  message: _react.default.createElement(
    _uni.Text,
    { inline: 1, __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 5 } },
    'You will need to install an Ethereum wallet, like',
    ' ',
    _react.default.createElement(
      _ULink.default,
      {
        to: 'https://metamask.io/',
        external: true,
        target: '_blank',
        __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }
      },
      'Metamask'
    ),
    ' ',
    'in order to claim your coins.',
    '\n\n',
    '*Note: you will also need to purchace a small amount of Ethereum in order to pay for the transaction.'
  ),
  bc: _styles.colors.error,
  bg: _styles.colors.errorA,
  buttonText: 'Get Metamask',
  buttonAction: 'getMetamask'
};
exports.metamask = metamask;
var connection = {
  id: 2,
  title: 'Connect Relevant to Metamask',
  message:
    "We'll need to connect your Metamask account before you can transfer coins. Connecting your Metamask to Relevant is not a transaction and totally free.",
  buttonText: 'Connect Account',
  buttonAction: 'connectAddress',
  bc: _styles.colors.warning,
  bg: _styles.colors.warningA
};
exports.connection = connection;
var network = {
  id: 3,
  title: 'Use Metamask to switch Ethereum networks',
  message: 'Please connect to Ethereum Mainnet.',
  buttonText: 'Switch Networks',
  disabled: true,
  bc: _styles.colors.error,
  bg: _styles.colors.errorA
};
exports.network = network;
var account = function account() {
  var ethAddress =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0x..';
  return {
    id: 4,
    title: 'Account mismatch (wanted: '.concat(
      (0, _eth.truncateAddress)(ethAddress),
      ')'
    ),
    message: 'Your connected wallet address is different from the address linked to your Relevant account. Please select account '.concat(
      (0, _eth.truncateAddress)(ethAddress),
      ' in Metamask. Alternately you can connect a new account address to Relevant.'
    ),
    buttonText: 'Connect Current Account to Relevant',
    buttonAction: 'connectAddress',
    bc: _styles.colors.warning,
    bg: _styles.colors.warningA
  };
};
exports.account = account;
var balance = {
  id: 5,
  title: 'Your balance is too low',
  message: 'Your current balance is too low, you need to earn more than '.concat(
    _common.CASHOUT_LIMIT,
    ' coins in order to be able to cash out.'
  ),
  disabled: true,
  bc: _styles.colors.warning,
  bg: _styles.colors.warningA
};
exports.balance = balance;
var connectMetamask = {
  id: 1,
  title: 'Log into Metamask and Connect it to Relevant',
  message: 'Make sure you are logged into Metamask and have connected it to Relevant',
  bc: _styles.colors.warning,
  bg: _styles.colors.warningA,
  buttonText: 'Connect Metamask',
  buttonAction: 'connectMetamask'
};
exports.connectMetamask = connectMetamask;
//# sourceMappingURL=web3Warning.constants.js.map
