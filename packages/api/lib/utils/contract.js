'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getTokenBalance = void 0;

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _ethers = require('ethers');

var erc20abi = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256'
      }
    ],
    payable: false,
    type: 'function'
  }
];

var getTokenBalance = /*#__PURE__*/ (function() {
  var _ref2 = (0, _asyncToGenerator2.default)(function*(_ref) {
    var { address, tokenAddress } = _ref;

    var provider = _ethers.ethers.getDefaultProvider('mainnet');

    var contract = new _ethers.Contract(tokenAddress, erc20abi, provider);
    var balance = yield contract.balanceOf(address);
    return balance.toString();
  });

  return function getTokenBalance(_x) {
    return _ref2.apply(this, arguments);
  };
})();

exports.getTokenBalance = getTokenBalance;
//# sourceMappingURL=contract.js.map
