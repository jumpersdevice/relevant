'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.useCurrentWarning = void 0;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = require('react');
var _contract = require('../../../contract/contract.hooks');
var warnings = _interopRequireWildcard(require('./web3Warning.constants'));
var _web3Warning2 = require('./web3Warning.selectors');
var useCurrentWarning = function useCurrentWarning(_ref) {
  var accounts = _ref.accounts,
    user = _ref.user,
    networkId = _ref.networkId,
    canClaim = _ref.canClaim;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    warning = _useState2[0],
    setWarning = _useState2[1];
  var metamask = (0, _contract.useMetamask)();
  (0, _react.useEffect)(
    function() {
      var updateWarnings = function updateWarnings() {
        if (!metamask) return warnings.metamask;
        if (metamask && !(0, _web3Warning2.hasAccount)(accounts))
          return warnings.connectMetamask;
        if (!(0, _web3Warning2.hasCorrectNetwork)(networkId)) return warnings.network;
        if (!(0, _web3Warning2.hasAccountConnected)(user)) return warnings.connection;
        if (!(0, _web3Warning2.hasCorrectAccount)(user, accounts))
          return warnings.account(user.ethAddress[0]);
        return null;
      };
      setWarning(updateWarnings());
    },
    [accounts, user.ethAddress, networkId, user, canClaim, metamask]
  );
  return warning;
};
exports.useCurrentWarning = useCurrentWarning;
//# sourceMappingURL=web3Warning.hooks.js.map
