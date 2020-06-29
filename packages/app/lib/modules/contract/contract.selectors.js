'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.useRelevantState = exports.useWeb3State = exports.formatSelection = exports.selectCashOut = exports.selectUserNonce = exports.selectUserBalance = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _reactRedux = require('react-redux');
var _eth = require('../../utils/eth');
var _contract = require('./contract.context');
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
var selectUserBalance = function selectUserBalance(selectors, state, address) {
  return selectors.methods.balanceOf({ at: address })(
    state,
    state.web3 && state.web3.accounts.items && state.web3.accounts.items[0]
  );
};
exports.selectUserBalance = selectUserBalance;
var selectUserNonce = function selectUserNonce(selectors, state, address) {
  return selectors.methods.nonceOf({ at: address })(
    state,
    state.web3 && state.web3.accounts.items && state.web3.accounts.items[0]
  );
};
exports.selectUserNonce = selectUserNonce;
var selectCashOut = function selectCashOut(selectors, state, address) {
  return selectors.methods.cashOut({ at: address })(
    state,
    state.web3 && state.web3.accounts.items && state.web3.accounts.items[0]
  );
};
exports.selectCashOut = selectCashOut;
var formatSelection = function formatSelection(el) {
  if (!el) return {};
  var value =
    typeof (0, _eth.parseBN)(el.value) !== 'number'
      ? (0, _eth.parseBN)(el.value)
      : el.value;
  return _objectSpread(_objectSpread({}, el), {}, { value: value });
};
exports.formatSelection = formatSelection;
var useWeb3State = function useWeb3State() {
  (0, _contract.useContract)();
  return (0, _reactRedux.useSelector)(function(state) {
    return {
      web3: state.web3,
      status: state.web3 && state.web3.init.status,
      isInitialized: state.web3 && state.web3.init.isInitialized,
      networkId: state.web3 && state.web3.network.id && state.web3.network.id,
      accounts: state.web3 && state.web3.accounts.items && state.web3.accounts.items,
      address: state.web3 && state.web3.accounts.items && state.web3.accounts.items[0]
    };
  });
};
exports.useWeb3State = useWeb3State;
var useRelevantState = function useRelevantState() {
  var _useContract = (0, _contract.useContract)(),
    selectors = _useContract.selectors,
    tokenAddress = _useContract.tokenAddress,
    initialized = _useContract.initialized;
  return (0, _reactRedux.useSelector)(function(state) {
    return initialized
      ? {
          userNonce: selectUserNonce(selectors, state, tokenAddress),
          userBalance: selectUserBalance(selectors, state, tokenAddress),
          RelevantToken: state.RelevantToken,
          getState: function getState(method) {
            for (
              var _len = arguments.length,
                args = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }
            return selectors.methods[method]
              ? formatSelection(
                  selectors.methods[method]({ at: tokenAddress }).apply(
                    void 0,
                    [state].concat(args)
                  )
                )
              : {};
          },
          eventCache: function eventCache(event) {
            return selectors.events[event];
          }
        }
      : {
          getState: function getState() {
            return {};
          }
        };
  });
};
exports.useRelevantState = useRelevantState;
//# sourceMappingURL=contract.selectors.js.map
