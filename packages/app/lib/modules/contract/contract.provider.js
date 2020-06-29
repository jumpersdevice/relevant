'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard3 = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.useContract = useContract;
exports.ContractProvider = ContractProvider;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _interopRequireWildcard2 = _interopRequireDefault(
  require('@babel/runtime/helpers/interopRequireWildcard')
);
var _react = _interopRequireWildcard3(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _component = _interopRequireDefault(require('@loadable/component'));
var _reduxSagasInjector = require('redux-sagas-injector');
var _reactRedux = require('react-redux');
var _contract = require('./contract.context');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/contract/contract.provider.js';
var contract = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'setupStatesauce';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0, _interopRequireWildcard2.default)(require('./setupStatesauce'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('./setupStatesauce');
    }
    return eval('require.resolve')('./setupStatesauce');
  }
});
function useContract() {
  var contractData = (0, _react.useContext)(_contract.ContractContext);
  if (!contractData.initialized) contractData.init(true);
  return contractData;
}
ContractProvider.propTypes = { children: _propTypes.default.node };
function ContractProvider(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    initialized = _useState2[0],
    setInitialized = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    shouldInit = _useState4[0],
    init = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    instance = _useState6[0],
    setInstance = _useState6[1];
  var _useContext = (0, _react.useContext)(_reactRedux.ReactReduxContext),
    store = _useContext.store;
  (0, _react.useEffect)(
    function() {
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      function _initialize() {
        _initialize = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee() {
            var _yield$contract$load, _instance, web3Sagas, web3Reducers, saga, reducer;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.next = 2;
                    return contract.load();
                  case 2:
                    _yield$contract$load = _context.sent;
                    _instance = _yield$contract$load.instance;
                    web3Sagas = _yield$contract$load.web3Sagas;
                    web3Reducers = _yield$contract$load.web3Reducers;
                    (saga = _instance.saga), (reducer = _instance.reducer);
                    (0, _reduxSagasInjector.injectSaga)('RelevantToken', saga);
                    (0, _reduxSagasInjector.injectSaga)('web3Sagas', web3Sagas);
                    store.injectReducer('RelevantToken', reducer.RelevantToken);
                    store.injectReducer('web3', web3Reducers);
                    setInstance(_instance);
                    setInitialized(true);
                  case 13:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return _initialize.apply(this, arguments);
      }
      shouldInit && initialize();
    },
    [shouldInit, store]
  );
  var actions = instance.actions,
    tokenAddress = instance.tokenAddress,
    selectors = instance.selectors,
    types = instance.types;
  return _react.default.createElement(
    _contract.ContractContext.Provider,
    {
      value: {
        initialized: initialized,
        actions: actions,
        types: types,
        tokenAddress: tokenAddress,
        selectors: selectors,
        init: init
      },
      __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 5 }
    },
    children
  );
}
//# sourceMappingURL=contract.provider.js.map
