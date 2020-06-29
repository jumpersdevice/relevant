"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTokenBalance = void 0;

var _ethers = require("ethers");

const erc20abi = [{
  constant: true,
  inputs: [{
    name: '_owner',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    name: 'balance',
    type: 'uint256'
  }],
  payable: false,
  type: 'function'
}];

const getTokenBalance = async ({
  address,
  tokenAddress
}) => {
  const provider = _ethers.ethers.getDefaultProvider('mainnet');

  const contract = new _ethers.Contract(tokenAddress, erc20abi, provider);
  const balance = await contract.balanceOf(address);
  return balance.toString();
};

exports.getTokenBalance = getTokenBalance;
//# sourceMappingURL=contract.js.map