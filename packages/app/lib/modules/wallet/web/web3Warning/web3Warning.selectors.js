'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.hasWarning = exports.hasCorrectAccount = exports.hasCorrectNetwork = exports.hasAccountConnected = exports.hasAccount = void 0;
var _config = require('../../../../core/config');
var hasAccount = function hasAccount(accounts) {
  return accounts && accounts[0];
};
exports.hasAccount = hasAccount;
var hasAccountConnected = function hasAccountConnected(user) {
  return user.ethAddress && user.ethAddress[0];
};
exports.hasAccountConnected = hasAccountConnected;
var hasCorrectNetwork = function hasCorrectNetwork(networkId) {
  return networkId && networkId === _config.NETWORK_NUMBER;
};
exports.hasCorrectNetwork = hasCorrectNetwork;
var hasCorrectAccount = function hasCorrectAccount(user, accounts) {
  return user.ethAddress[0].toLowerCase() === accounts[0].toLowerCase();
};
exports.hasCorrectAccount = hasCorrectAccount;
var hasWarning = function hasWarning(stack, _id) {
  return stack.find(function(_ref) {
    var id = _ref.id;
    return id === _id;
  });
};
exports.hasWarning = hasWarning;
//# sourceMappingURL=web3Warning.selectors.js.map
