'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.getNetworkName = getNetworkName;
exports.getMetamask = getMetamask;
exports.getProvider = getProvider;
exports.initMetamask = initMetamask;
exports.initProvider = initProvider;
exports.getRpcUrl = getRpcUrl;
exports.createProvider = createProvider;
exports.buildRpcUrl = buildRpcUrl;
var _web = _interopRequireDefault(require('web3'));
var _config = require('../core/config');
var web3;
var rpcUrl;
var metamask;
var defaultOptions = { rpcUrl: getRpcUrl(), metamask: null };
function getNetworkName(id) {
  switch (parseInt(id, 10)) {
    case 1:
      return 'Mainnet';
    case 4:
      return 'Rinkeby';
    case 3:
      return 'Ropsten';
    case 5:
      return 'Goerli';
    case 42:
      return 'Kovan';
    default:
      return 'Unknown';
  }
}
function getMetamask() {
  return metamask || initMetamask();
}
function getProvider() {
  var options =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  return options.metamask || options.rpcUrl !== defaultOptions.rpcUrl
    ? initProvider(options)
    : web3 || initProvider();
}
function initMetamask() {
  metamask = typeof window !== 'undefined' && window.ethereum ? window.ethereum : null;
  return metamask;
}
function initProvider() {
  var options =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  var provider = createProvider(options);
  web3 = new _web.default(provider);
  return web3;
}
function getRpcUrl() {
  return rpcUrl || buildRpcUrl();
}
function createProvider() {
  var options =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  if (options.metamask) return options.metamask;
  return options.rpcUrl.slice(0, 2) === 'ws'
    ? new _web.default.providers.WebsocketProvider(options.rpcUrl)
    : new _web.default.providers.HttpProvider(options.rpcUrl);
}
function buildRpcUrl() {
  var protocol =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : _config.INFURA_PROTOCOL;
  var network =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : _config.INFURA_NETWORK;
  var apiKey =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : _config.INFURA_API_KEY;
  rpcUrl = ''
    .concat(protocol, 's://')
    .concat(network, '.infura.io/')
    .concat(protocol === 'ws' ? 'ws/' : '', 'v3/')
    .concat(apiKey);
  return rpcUrl;
}
//# sourceMappingURL=web3.provider.js.map
