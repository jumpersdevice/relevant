"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deployContract = deployContract;
exports.provider = void 0;

var _ethers = require("ethers");

var _RelevantToken = _interopRequireDefault(require("@r3l/app/lib/contracts/RelevantToken.json"));

var _ganacheCli = _interopRequireDefault(require("ganache-cli"));

var _bignumber = _interopRequireDefault(require("bignumber.js"));

require('dotenv').config();

const key = process.env.TEST_KEY;
const provider = new _ethers.ethers.providers.Web3Provider(_ganacheCli.default.provider({
  network_id: 99,
  accounts: [{
    secretKey: '0x' + key,
    balance: 99e18
  }]
}));
exports.provider = provider;
const wallet = new _ethers.ethers.Wallet(key, provider);

async function deployContract() {
  try {
    const factory = new _ethers.ethers.ContractFactory(_RelevantToken.default.abi, _RelevantToken.default.bytecode, wallet);
    const contract = await factory.deploy();
    await contract.deployed();
    await initContract(contract);
    console.log('CONTRACT_ADDRESS', contract.address); // eslint-disable-line

    return {
      address: contract.address,
      provider
    };
  } catch (err) {
    console.log('failed to deploy contract', err); // eslint-disable-line

    return null;
  }
}

async function initContract(contract) {
  const testName = 'Relevant Token';
  const testDecimals = 18;
  const p = 1e18;
  const testSymbol = 'REL';
  const testVersion = '1.0';
  const testDevFundAddress = '0xffcf8fdee72ac11b5c542428b35eef5769c409f0';
  const halfLife = 8760; // # of rounds to decay by half

  const timeConstant = halfLife / Math.LN2 * p;
  const targetInflation = 10880216701148;
  const initRoundReward = 2500 * p;
  const roundLength = 1; // 240;

  const roundDecay = 999920876739935000;
  const targetRound = 26704;
  const totalPremint = 27777044629743800000000000;
  const airdropSwitchRound = 8352;
  const airdropRoundDecay = 999762649000782000;
  const firstNewAirdrop = 3442799625893100000000; // transform big number parameters for contract initialization
  // (ugh is there a better way to do this?)

  const airdropRoundDecayBNString = new _bignumber.default(airdropRoundDecay.toString()).toFixed(0).toString();
  const firstNewAirdropBNString = new _bignumber.default(firstNewAirdrop.toString()).toFixed(0).toString();
  const initRoundRewardBNString = new _bignumber.default(initRoundReward.toString()).toFixed(0).toString();
  const timeConstantBNString = new _bignumber.default(timeConstant.toString()).toFixed(0).toString();
  const totalPremintBNString = new _bignumber.default(totalPremint.toString()).toFixed(0).toString();
  const roundDecayBNString = new _bignumber.default(roundDecay.toString()).toFixed(0).toString();
  await contract.initialize(testName, testDecimals, testSymbol, testVersion, testDevFundAddress, initRoundRewardBNString, timeConstantBNString, targetInflation, targetRound, roundLength, roundDecayBNString, totalPremintBNString);
  await contract.initializeRewardSplit(airdropSwitchRound, airdropRoundDecayBNString, firstNewAirdropBNString); // feature was added in contract upgrade

  return contract;
}
//# sourceMappingURL=setup.eth.js.map