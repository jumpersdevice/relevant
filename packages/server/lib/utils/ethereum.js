"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.getBalance = getBalance;
exports.getParam = getParam;
exports.getGasPrice = getGasPrice;
exports.sendTx = sendTx;
exports.toBN = toBN;
exports.mintRewardTokens = mintRewardTokens;
exports.allocateRewards = allocateRewards;
exports.allocateAirdrops = allocateAirdrops;
exports.getNonce = getNonce;
exports.sign = sign;
exports.getInstance = exports.getWeb3 = exports.isInitialized = void 0;

var _requestPromiseAny = _interopRequireDefault(require("request-promise-any"));

var _ethers = require("ethers");

var _config = require("@r3l/app/lib/core/config");

var _mail = require("./mail");

var _RelevantToken = _interopRequireDefault(require("@r3l/common/lib/contracts/RelevantToken.json"));

let decimals;
let instance;
let rpcUrl;
let provider;
let network;
let key;
let tokenAddress;
let web3;
let initialized = false;
let wallet;
const pendingTx = {};
const GAS_SPEED = process.env.GAS_SPEED || 'average';
process.on('beforeExit', async () => {
  const err = `Un-executed Pending Transactions: ${pendingTx}`; // eslint-disable-next-line

  console.log(err);
  await (0, _mail.sendAdminAlert)(new Error(err));
});

const isInitialized = () => initialized;

exports.isInitialized = isInitialized;

const getWeb3 = () => web3; // SECURITY - this should never by exposed via any APIs!


exports.getWeb3 = getWeb3;

const getInstance = () => instance;

exports.getInstance = getInstance;

async function init(_provider, _address) {
  try {
    // SECURITY - this env var should never by exposed via any APIs!
    if (process.env.NODE_ENV === 'production') {
      key = process.env.OWNER_KEY;
      if (!key) return false;
      provider = _ethers.ethers.getDefaultProvider(_config.INFURA_NETWORK);
      tokenAddress = _RelevantToken.default.networks[_config.NETWORK_NUMBER] ? _RelevantToken.default.networks[_config.NETWORK_NUMBER].address : null;
    } else {
      key = process.env.TEST_KEY;
      if (!key) return false;
      rpcUrl = process.env.TEST_RPC;
      provider = _provider || new _ethers.ethers.providers.JsonRpcProvider(rpcUrl);
      network = await provider.getNetwork();
      tokenAddress = _address || _RelevantToken.default.networks[network.chainId].address;
    }

    wallet = new _ethers.ethers.Wallet(key, provider);
    instance = new _ethers.ethers.Contract(tokenAddress, _RelevantToken.default.abi, provider); // SECURITY - this should never by exposed via any APIs!

    instance = instance.connect(wallet);
    decimals = await instance.decimals();
    initialized = true;
    return true;
  } catch (err) {
    console.log(err); // eslint-disable-line

    return false;
  }
}

async function getBalance(address) {
  if (!instance) return 0;
  const balance = await instance.balanceOf(address);
  const val = balance.div((10 ** decimals).toString());
  return parseFloat(val.toString());
}

async function getParam(param, opt) {
  if (!initialized) await init();
  let value = await instance[param]();
  if (!opt || !opt.noConvert) value = value.div((10 ** decimals).toString());
  if (!opt || !opt.string) value = parseFloat(value.toString());
  return value;
}

async function getGasPrice(gasSpeed) {
  const speed = gasSpeed || GAS_SPEED;
  const gasPrice = await (0, _requestPromiseAny.default)('https://ethgasstation.info/json/ethgasAPI.json');
  const price = JSON.parse(gasPrice);
  console.log(price); // eslint-disable-line

  console.log('gas price', price[speed]); // eslint-disable-line

  return price[speed];
} // SECURITY - this function should never by exposed via any APIs!


async function sendTx({
  method,
  args,
  cancelPendingTx
}) {
  const nonce = await wallet.getTransactionCount();
  const pending = await wallet.getTransactionCount('pending');
  console.log('current nonce', nonce, 'pending nonce:', pending); // eslint-disable-line

  const speed = pending > nonce && cancelPendingTx ? 'fast' : null;
  const gasPrice = await getGasPrice(speed);
  const optNonce = cancelPendingTx ? {
    nonce
  } : {};
  const options = {
    gasPrice: gasPrice * 1e8,
    gasLimit: 6e6,
    ...optNonce
  };
  const tx = await instance[method](...args, options);
  pendingTx[method] = tx;
  const result = await tx.wait();
  delete pendingTx[method];
  console.log('status:', result.status); // eslint-disable-line

  console.log(`gas used by ${method}: ${result.gasUsed}`); // eslint-disable-line

  return result;
}

function toBN(num) {
  return _ethers.ethers.utils.parseUnits((num / 10 ** decimals).toString(), decimals);
}

async function mintRewardTokens(cancelPendingTx) {
  if (!instance) await init();
  const lastMint = await instance.roundsSincleLast();
  if (lastMint.toNumber() === 0) return null;
  return sendTx({
    method: 'releaseTokens',
    args: [],
    cancelPendingTx
  });
}

async function allocateRewards(_amount, cancelPendingTx) {
  return sendTx({
    method: 'allocateRewards',
    args: [toBN(_amount)],
    cancelPendingTx
  });
}

async function allocateAirdrops(_amount) {
  return sendTx({
    method: 'allocateAirdrops',
    args: [toBN(_amount)]
  });
}

async function getNonce(_account) {
  const nonce = await instance.nonceOf(_account);
  return nonce.toNumber();
}

async function sign(_account, _amount) {
  const nonce = await getNonce(_account);

  const amount = _ethers.ethers.utils.parseUnits(_amount.toString(), decimals).toString();

  const hash = _ethers.ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [amount, _account, nonce]);

  const sig = await wallet.signMessage(_ethers.ethers.utils.arrayify(hash));
  return {
    sig,
    amount
  };
}
//# sourceMappingURL=ethereum.js.map