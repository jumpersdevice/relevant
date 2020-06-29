'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.useTxState = exports.useRelevantToken = exports.useTokenContract = exports.useEventSubscription = exports.useBalance = exports.useMetamask = exports.useWeb3 = exports.useRelevantActions = exports.useWeb3Actions = void 0;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = require('react');
var _reactRedux = require('react-redux');
var _eth = require('../../utils/eth');
var _web = require('../../utils/web3.provider');
var _redux = require('redux');
var _reduxSagaWeb = require('redux-saga-web3');
var _utils = require('../../utils');
var _contract = require('./contract.selectors');
var _contract2 = require('./contract.context');
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
var Alert = _utils.alert.Alert();
var _web3 = (0, _web.getProvider)();
var useWeb3Actions = function useWeb3Actions() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return {
    init: (0, _react.useCallback)(
      function(web3Instance) {
        return dispatch(_reduxSagaWeb.actions.init.init(web3Instance));
      },
      [dispatch]
    ),
    network: (0, _redux.bindActionCreators)(
      _objectSpread({}, _reduxSagaWeb.actions.network),
      dispatch
    ),
    accounts: (0, _redux.bindActionCreators)(
      _objectSpread({}, _reduxSagaWeb.actions.accounts),
      dispatch
    )
  };
};
exports.useWeb3Actions = useWeb3Actions;
var useRelevantActions = function useRelevantActions() {
  var _useContract = (0, _contract2.useContract)(),
    tokenActions = _useContract.actions,
    tokenAddress = _useContract.tokenAddress;
  var dispatch = (0, _reactRedux.useDispatch)();
  var actions = {
    getEvent: (0, _react.useCallback)(
      function(event) {
        dispatch(tokenActions.events[event].get({ at: tokenAddress }));
      },
      [dispatch, tokenActions, tokenAddress]
    ),
    subscribeToEvent: (0, _react.useCallback)(
      function(event) {
        dispatch(tokenActions.events[event].get({ at: tokenAddress }));
        return dispatch(tokenActions.events[event].subscribe({ at: tokenAddress }));
      },
      [dispatch, tokenActions, tokenAddress]
    ),
    call: (0, _react.useCallback)(
      function(method, args) {
        if (args)
          return dispatch(tokenActions.methods[method]({ at: tokenAddress }).call(args));
        return dispatch(tokenActions.methods[method]({ at: tokenAddress }).call());
      },
      [dispatch, tokenActions, tokenAddress]
    ),
    send: (0, _react.useCallback)(
      function(method, options) {
        for (
          var _len = arguments.length,
            args = new Array(_len > 2 ? _len - 2 : 0),
            _key = 2;
          _key < _len;
          _key++
        ) {
          args[_key - 2] = arguments[_key];
        }
        if (args) {
          var _tokenActions$methods;
          return dispatch(
            (_tokenActions$methods = tokenActions.methods[method](
              _objectSpread({ at: tokenAddress }, options)
            )).send.apply(_tokenActions$methods, args)
          );
        }
        return dispatch(
          tokenActions.methods[method](
            _objectSpread({ at: tokenAddress }, options)
          ).send()
        );
      },
      [dispatch, tokenActions, tokenAddress]
    )
  };
  return tokenActions ? actions : {};
};
exports.useRelevantActions = useRelevantActions;
var useWeb3 = function useWeb3() {
  (0, _contract2.useContract)();
  useMetamask();
  var web3 = (0, _contract.useWeb3State)();
  var _useWeb3Actions = useWeb3Actions(),
    init = _useWeb3Actions.init;
  (0, _react.useEffect)(
    function() {
      if (!web3.isInitialized) init(_web3);
    },
    [web3.status, web3.isInitialized, init]
  );
  return [web3.accounts, web3.isInitialized, web3.networkId];
};
exports.useWeb3 = useWeb3;
var useMetamask = function useMetamask() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var metamask = (0, _web.getMetamask)();
  if (metamask) metamask.autoRefreshOnNetworkChange = false;
  (0, _react.useEffect)(
    function() {
      if (!metamask) return function() {};
      try {
        metamask.enable();
      } catch (err) {
        return function() {};
      }
      var getAccounts = function getAccounts(_accounts) {
        return dispatch(_reduxSagaWeb.actions.accounts.getSuccess(_accounts));
      };
      var getNetworkId = function getNetworkId() {
        return dispatch(_reduxSagaWeb.actions.network.getId());
      };
      metamask.on('accountsChanged', getAccounts);
      metamask.on('networkChanged', getNetworkId);
      return function() {
        metamask.off('accountsChanged', getAccounts);
        metamask.off('networkChanged', getNetworkId);
      };
    },
    [dispatch, metamask]
  );
  return metamask;
};
exports.useMetamask = useMetamask;
var useBalance = function useBalance() {
  var _useWeb3State = (0, _contract.useWeb3State)(),
    accounts = _useWeb3State.accounts;
  var _useRelevantState = (0, _contract.useRelevantState)(),
    userBalance = _useRelevantState.userBalance;
  var _useRelevantActions = useRelevantActions(),
    call = _useRelevantActions.call,
    subscribeToEvent = _useRelevantActions.subscribeToEvent;
  var haveBalance = !!userBalance;
  (0, _react.useEffect)(
    function() {
      subscribeToEvent && subscribeToEvent('Transfer');
      if (accounts && accounts.length && !haveBalance) {
        call && call('balanceOf', accounts[0]);
      }
    },
    [accounts, haveBalance, call, subscribeToEvent]
  );
  var relCoins =
    userBalance && userBalance.phase === 'SUCCESS'
      ? (0, _eth.formatBN)(userBalance.value, 18)
      : null;
  return relCoins;
};
exports.useBalance = useBalance;
var useEventSubscription = function useEventSubscription() {
  var _useRelevantActions2 = useRelevantActions(),
    subscribeToEvent = _useRelevantActions2.subscribeToEvent;
  (0, _react.useEffect)(
    function() {
      subscribeToEvent('Released');
    },
    [subscribeToEvent]
  );
};
exports.useEventSubscription = useEventSubscription;
var useTokenContract = function useTokenContract() {
  (0, _contract2.useContract)();
  var _useRelevantState2 = (0, _contract.useRelevantState)(),
    getState = _useRelevantState2.getState;
  var web3 = (0, _contract.useWeb3State)();
  var _useRelevantActions3 = useRelevantActions(),
    call = _useRelevantActions3.call,
    send = _useRelevantActions3.send;
  useWeb3();
  useBalance();
  return [
    web3.accounts,
    { methodCache: { select: getState } },
    { cacheMethod: call, cacheSend: send }
  ];
};
exports.useTokenContract = useTokenContract;
var useRelevantToken = function useRelevantToken() {
  (0, _contract2.useContract)();
  var _useRelevantState3 = (0, _contract.useRelevantState)(),
    getState = _useRelevantState3.getState;
  var web3 = (0, _contract.useWeb3State)();
  var _useRelevantActions4 = useRelevantActions(),
    call = _useRelevantActions4.call,
    send = _useRelevantActions4.send;
  useWeb3();
  useBalance();
  return { accounts: web3.accounts, getState: getState, call: call, send: send };
};
exports.useRelevantToken = useRelevantToken;
var useTxState = function useTxState(_ref) {
  var tx = _ref.tx,
    method = _ref.method,
    callback = _ref.callback;
  var _useRelevantState4 = (0, _contract.useRelevantState)(),
    getState = _useRelevantState4.getState;
  if (!tx || !getState) return null;
  var txState = getState.apply(
    void 0,
    [method].concat((0, _toConsumableArray2.default)(tx.payload.args))
  );
  if (txState && txState.phase === 'RECEIPT') {
    Alert.alert('Transaction Completed!', 'success');
    callback();
    return 'success';
  }
  if (txState && txState.phase === 'ERROR') {
    Alert.alert(txState.value.get('message'));
    callback();
    return 'error';
  }
  return 'pending';
};
exports.useTxState = useTxState;
//# sourceMappingURL=contract.hooks.js.map
