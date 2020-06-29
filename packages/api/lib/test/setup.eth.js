'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.deployContract = deployContract;
exports.provider = void 0;

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _ethers = require('ethers');

var _RelevantToken = _interopRequireDefault(
  require('@r3l/common/lib/contracts/RelevantToken.json')
);

var _ganacheCli = _interopRequireDefault(require('ganache-cli'));

var _bignumber = _interopRequireDefault(require('bignumber.js'));

require('dotenv').config();

var key = process.env.TEST_KEY;
var provider = new _ethers.ethers.providers.Web3Provider(
  _ganacheCli.default.provider({
    network_id: 99,
    accounts: [
      {
        secretKey: '0x' + key,
        balance: 99e18
      }
    ]
  })
);
exports.provider = provider;
var wallet = new _ethers.ethers.Wallet(key, provider);

function deployContract() {
  return _deployContract.apply(this, arguments);
}

function _deployContract() {
  _deployContract = (0, _asyncToGenerator2.default)(function*() {
    try {
      var factory = new _ethers.ethers.ContractFactory(
        _RelevantToken.default.abi,
        _RelevantToken.default.bytecode,
        wallet
      );
      var contract = yield factory.deploy();
      yield contract.deployed();
      yield initContract(contract);
      console.log('CONTRACT_ADDRESS', contract.address); // eslint-disable-line

      return {
        address: contract.address,
        provider
      };
    } catch (err) {
      console.log('failed to deploy contract', err); // eslint-disable-line

      return null;
    }
  });
  return _deployContract.apply(this, arguments);
}

function initContract(_x) {
  return _initContract.apply(this, arguments);
}

function _initContract() {
  _initContract = (0, _asyncToGenerator2.default)(function*(contract) {
    var testName = 'Relevant Token';
    var testDecimals = 18;
    var p = 1e18;
    var testSymbol = 'REL';
    var testVersion = '1.0';
    var testDevFundAddress = '0xffcf8fdee72ac11b5c542428b35eef5769c409f0';
    var halfLife = 8760; // # of rounds to decay by half

    var timeConstant = (halfLife / Math.LN2) * p;
    var targetInflation = 10880216701148;
    var initRoundReward = 2500 * p;
    var roundLength = 1; // 240;

    var roundDecay = 999920876739935000;
    var targetRound = 26704;
    var totalPremint = 27777044629743800000000000;
    var airdropSwitchRound = 8352;
    var airdropRoundDecay = 999762649000782000;
    var firstNewAirdrop = 3442799625893100000000; // transform big number parameters for contract initialization
    // (ugh is there a better way to do this?)

    var airdropRoundDecayBNString = new _bignumber.default(airdropRoundDecay.toString())
      .toFixed(0)
      .toString();
    var firstNewAirdropBNString = new _bignumber.default(firstNewAirdrop.toString())
      .toFixed(0)
      .toString();
    var initRoundRewardBNString = new _bignumber.default(initRoundReward.toString())
      .toFixed(0)
      .toString();
    var timeConstantBNString = new _bignumber.default(timeConstant.toString())
      .toFixed(0)
      .toString();
    var totalPremintBNString = new _bignumber.default(totalPremint.toString())
      .toFixed(0)
      .toString();
    var roundDecayBNString = new _bignumber.default(roundDecay.toString())
      .toFixed(0)
      .toString();
    yield contract.initialize(
      testName,
      testDecimals,
      testSymbol,
      testVersion,
      testDevFundAddress,
      initRoundRewardBNString,
      timeConstantBNString,
      targetInflation,
      targetRound,
      roundLength,
      roundDecayBNString,
      totalPremintBNString
    );
    yield contract.initializeRewardSplit(
      airdropSwitchRound,
      airdropRoundDecayBNString,
      firstNewAirdropBNString
    ); // feature was added in contract upgrade

    return contract;
  });
  return _initContract.apply(this, arguments);
}
//# sourceMappingURL=setup.eth.js.map
