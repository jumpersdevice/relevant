'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
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

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _requestPromiseAny = _interopRequireDefault(require('request-promise-any'));

var _ethers = require('ethers');

var _config = require('@r3l/app/lib/core/config');

var _mail = require('./mail');

var _RelevantToken = _interopRequireDefault(
  require('@r3l/common/lib/contracts/RelevantToken.json')
);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

var decimals;
var instance;
var rpcUrl;
var provider;
var network;
var key;
var tokenAddress;
var web3;
var initialized = false;
var wallet;
var pendingTx = {};
var GAS_SPEED = process.env.GAS_SPEED || 'average';
process.on(
  'beforeExit',
  /*#__PURE__*/ (0, _asyncToGenerator2.default)(function*() {
    var err = 'Un-executed Pending Transactions: '.concat(pendingTx); // eslint-disable-next-line

    console.log(err);
    yield (0, _mail.sendAdminAlert)(new Error(err));
  })
);

var isInitialized = () => initialized;

exports.isInitialized = isInitialized;

var getWeb3 = () => web3; // SECURITY - this should never by exposed via any APIs!

exports.getWeb3 = getWeb3;

var getInstance = () => instance;

exports.getInstance = getInstance;

function init(_x, _x2) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = (0, _asyncToGenerator2.default)(function*(_provider, _address) {
    try {
      // SECURITY - this env var should never by exposed via any APIs!
      if (process.env.NODE_ENV === 'production') {
        key = process.env.OWNER_KEY;
        if (!key) return false;
        provider = _ethers.ethers.getDefaultProvider(_config.INFURA_NETWORK);
        tokenAddress = _RelevantToken.default.networks[_config.NETWORK_NUMBER]
          ? _RelevantToken.default.networks[_config.NETWORK_NUMBER].address
          : null;
      } else {
        key = process.env.TEST_KEY;
        if (!key) return false;
        rpcUrl = process.env.TEST_RPC;
        provider = _provider || new _ethers.ethers.providers.JsonRpcProvider(rpcUrl);
        network = yield provider.getNetwork();
        tokenAddress =
          _address || _RelevantToken.default.networks[network.chainId].address;
      }

      wallet = new _ethers.ethers.Wallet(key, provider);
      instance = new _ethers.ethers.Contract(
        tokenAddress,
        _RelevantToken.default.abi,
        provider
      ); // SECURITY - this should never by exposed via any APIs!

      instance = instance.connect(wallet);
      decimals = yield instance.decimals();
      initialized = true;
      return true;
    } catch (err) {
      console.log(err); // eslint-disable-line

      return false;
    }
  });
  return _init.apply(this, arguments);
}

function getBalance(_x3) {
  return _getBalance.apply(this, arguments);
}

function _getBalance() {
  _getBalance = (0, _asyncToGenerator2.default)(function*(address) {
    if (!instance) return 0;
    var balance = yield instance.balanceOf(address);
    var val = balance.div((10 ** decimals).toString());
    return parseFloat(val.toString());
  });
  return _getBalance.apply(this, arguments);
}

function getParam(_x4, _x5) {
  return _getParam.apply(this, arguments);
}

function _getParam() {
  _getParam = (0, _asyncToGenerator2.default)(function*(param, opt) {
    if (!initialized) yield init();
    var value = yield instance[param]();
    if (!opt || !opt.noConvert) value = value.div((10 ** decimals).toString());
    if (!opt || !opt.string) value = parseFloat(value.toString());
    return value;
  });
  return _getParam.apply(this, arguments);
}

function getGasPrice(_x6) {
  return _getGasPrice.apply(this, arguments);
} // SECURITY - this function should never by exposed via any APIs!

function _getGasPrice() {
  _getGasPrice = (0, _asyncToGenerator2.default)(function*(gasSpeed) {
    var speed = gasSpeed || GAS_SPEED;
    var gasPrice = yield (0, _requestPromiseAny.default)(
      'https://ethgasstation.info/json/ethgasAPI.json'
    );
    var price = JSON.parse(gasPrice);
    console.log(price); // eslint-disable-line

    console.log('gas price', price[speed]); // eslint-disable-line

    return price[speed];
  });
  return _getGasPrice.apply(this, arguments);
}

function sendTx(_x7) {
  return _sendTx.apply(this, arguments);
}

function _sendTx() {
  _sendTx = (0, _asyncToGenerator2.default)(function*(_ref2) {
    var { method, args, cancelPendingTx } = _ref2;
    var nonce = yield wallet.getTransactionCount();
    var pending = yield wallet.getTransactionCount('pending');
    console.log('current nonce', nonce, 'pending nonce:', pending); // eslint-disable-line

    var speed = pending > nonce && cancelPendingTx ? 'fast' : null;
    var gasPrice = yield getGasPrice(speed);
    var optNonce = cancelPendingTx
      ? {
          nonce
        }
      : {};

    var options = _objectSpread(
      {
        gasPrice: gasPrice * 1e8,
        gasLimit: 6e6
      },
      optNonce
    );

    var tx = yield instance[method](...args, options);
    pendingTx[method] = tx;
    var result = yield tx.wait();
    delete pendingTx[method];
    console.log('status:', result.status); // eslint-disable-line

    console.log('gas used by '.concat(method, ': ').concat(result.gasUsed)); // eslint-disable-line

    return result;
  });
  return _sendTx.apply(this, arguments);
}

function toBN(num) {
  return _ethers.ethers.utils.parseUnits((num / 10 ** decimals).toString(), decimals);
}

function mintRewardTokens(_x8) {
  return _mintRewardTokens.apply(this, arguments);
}

function _mintRewardTokens() {
  _mintRewardTokens = (0, _asyncToGenerator2.default)(function*(cancelPendingTx) {
    if (!instance) yield init();
    var lastMint = yield instance.roundsSincleLast();
    if (lastMint.toNumber() === 0) return null;
    return sendTx({
      method: 'releaseTokens',
      args: [],
      cancelPendingTx
    });
  });
  return _mintRewardTokens.apply(this, arguments);
}

function allocateRewards(_x9, _x10) {
  return _allocateRewards.apply(this, arguments);
}

function _allocateRewards() {
  _allocateRewards = (0, _asyncToGenerator2.default)(function*(_amount, cancelPendingTx) {
    return sendTx({
      method: 'allocateRewards',
      args: [toBN(_amount)],
      cancelPendingTx
    });
  });
  return _allocateRewards.apply(this, arguments);
}

function allocateAirdrops(_x11) {
  return _allocateAirdrops.apply(this, arguments);
}

function _allocateAirdrops() {
  _allocateAirdrops = (0, _asyncToGenerator2.default)(function*(_amount) {
    return sendTx({
      method: 'allocateAirdrops',
      args: [toBN(_amount)]
    });
  });
  return _allocateAirdrops.apply(this, arguments);
}

function getNonce(_x12) {
  return _getNonce.apply(this, arguments);
}

function _getNonce() {
  _getNonce = (0, _asyncToGenerator2.default)(function*(_account) {
    var nonce = yield instance.nonceOf(_account);
    return nonce.toNumber();
  });
  return _getNonce.apply(this, arguments);
}

function sign(_x13, _x14) {
  return _sign.apply(this, arguments);
}

function _sign() {
  _sign = (0, _asyncToGenerator2.default)(function*(_account, _amount) {
    var nonce = yield getNonce(_account);

    var amount = _ethers.ethers.utils.parseUnits(_amount.toString(), decimals).toString();

    var hash = _ethers.ethers.utils.solidityKeccak256(
      ['uint256', 'address', 'uint256'],
      [amount, _account, nonce]
    );

    var sig = yield wallet.signMessage(_ethers.ethers.utils.arrayify(hash));
    return {
      sig,
      amount
    };
  });
  return _sign.apply(this, arguments);
}
//# sourceMappingURL=ethereum.js.map
