'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.contractSagas = contractSagas;
exports.saga = exports.selectors = exports.reducer = exports.actions = exports.types = exports.contract = exports.instance = exports.tokenAddress = exports.context = exports.network = exports.init = exports.blocks = exports.accounts = exports.web3Reducers = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _reduxSagaWeb3EthContract = _interopRequireDefault(
  require('redux-saga-web3-eth-contract')
);
var _web = require('../utils/web3.provider');
var _get = _interopRequireDefault(require('lodash/get'));
var _redux = require('redux');
var _reduxSagaWeb = require('redux-saga-web3');
var _effects = require('redux-saga/effects');
var _RelevantToken = _interopRequireDefault(require('../contracts/RelevantToken.json'));
var _config = require('./config');
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
var _marked = _regenerator.default.mark(contractSagas);
function contractSagas() {
  return _regenerator.default.wrap(function contractSagas$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)(
            (0, _toConsumableArray2.default)(
              Object.values(_reduxSagaWeb.sagas).map(function(saga) {
                return (0, _effects.fork)(saga);
              })
            )
          );
        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}
var web3Reducers = (0, _redux.combineReducers)(_objectSpread({}, _reduxSagaWeb.reducers));
exports.web3Reducers = web3Reducers;
var accounts = _reduxSagaWeb.reducers.accounts,
  blocks = _reduxSagaWeb.reducers.blocks,
  init = _reduxSagaWeb.reducers.init,
  network = _reduxSagaWeb.reducers.network,
  context = _reduxSagaWeb.reducers.context;
exports.context = context;
exports.network = network;
exports.init = init;
exports.blocks = blocks;
exports.accounts = accounts;
var web3 = (0, _web.getProvider)({
  rpcUrl: (0, _web.getRpcUrl)(),
  metamask: (0, _web.getMetamask)()
});
var tokenAddress = (0, _get.default)(
  _RelevantToken.default,
  'networks.'.concat(_config.NETWORK_NUMBER, '.address')
);
exports.tokenAddress = tokenAddress;
var instance = new _reduxSagaWeb3EthContract.default(
  _RelevantToken.default.contractName,
  _RelevantToken.default.abi,
  { at: tokenAddress, web3Instance: web3 }
);
exports.instance = instance;
var contract = instance.contract,
  types = instance.types,
  actions = instance.actions,
  reducer = instance.reducer,
  selectors = instance.selectors,
  saga = instance.saga;
exports.saga = saga;
exports.selectors = selectors;
exports.reducer = reducer;
exports.actions = actions;
exports.types = types;
exports.contract = contract;
//# sourceMappingURL=contracts.js.map
