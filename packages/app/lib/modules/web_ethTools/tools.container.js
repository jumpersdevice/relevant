'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _redux = require('redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var authActions = _interopRequireWildcard(require('../auth/auth.actions'));
var _numbers = require('../../utils/numbers');
var _eth = _interopRequireDefault(require('./eth.context'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/web_ethTools/tools.container.js';
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
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
var EthTools = (function(_Component) {
  (0, _inherits2.default)(EthTools, _Component);
  var _super = _createSuper(EthTools);
  function EthTools() {
    var _this;
    (0, _classCallCheck2.default)(this, EthTools);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      balance: 0,
      connectedBalance: 0,
      account: null,
      connectedAccount: null,
      differentAccount: null,
      network: null,
      status: null,
      nonce: null
    });
    return _this;
  }
  (0, _createClass2.default)(
    EthTools,
    [
      {
        key: 'queryBalance',
        value: function queryBalance(address) {
          var RelevantCoin = this.props.RelevantCoin;
          if (address && RelevantCoin && RelevantCoin.initialized) {
            RelevantCoin.methods.balanceOf.cacheCall(address);
            RelevantCoin.methods.nonceOf.fromCache(address);
          }
        }
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
          var _this$props = this.props,
            account = _this$props.account,
            user = _this$props.user;
          if (!user) return;
          var connectedAccount = user.ethAddress ? user.ethAddress[0] : null;
          if (connectedAccount && connectedAccount !== prevState.connectedAccount) {
            this.queryBalance(connectedAccount);
          }
          if (account && account !== prevState.account) {
            this.queryBalance(account);
          }
        }
      },
      {
        key: 'render',
        value: function render() {
          return _react.default.createElement(
            _eth.default.Provider,
            {
              value: this.state,
              __source: { fileName: _jsxFileName, lineNumber: 100, columnNumber: 12 }
            },
            this.props.children
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
          var account = nextProps.account,
            RelevantCoin = nextProps.RelevantCoin,
            network = nextProps.network,
            status = nextProps.status,
            user = nextProps.user;
          if (!RelevantCoin || !RelevantCoin.initialized) return null;
          var balance = 0;
          var connectedAccount = null;
          var connectedBalance;
          var differentAccount = true;
          var nonce = null;
          if (!user) return null;
          var decimals = (0, _numbers.toNumber)(
            RelevantCoin.methods.decimals.fromCache(),
            0
          );
          connectedAccount = user.ethAddress ? user.ethAddress[0] : null;
          if (!connectedAccount && !account) return null;
          if (account) {
            balance = (0, _numbers.toNumber)(
              RelevantCoin.methods.balanceOf.fromCache(account),
              decimals
            );
          }
          if (connectedAccount) {
            connectedBalance = (0, _numbers.toNumber)(
              RelevantCoin.methods.balanceOf.fromCache(connectedAccount),
              decimals
            );
          }
          differentAccount = account !== connectedAccount;
          if (RelevantCoin && RelevantCoin.methods && connectedAccount) {
            nonce = RelevantCoin.methods.nonceOf.fromCache(connectedAccount);
            nonce = parseInt(nonce, 0);
          }
          return {
            nonce: nonce,
            balance: balance,
            account: account,
            connectedAccount: connectedAccount,
            connectedBalance: connectedBalance,
            differentAccount: differentAccount,
            network: network,
            status: status
          };
        }
      }
    ]
  );
  return EthTools;
})(_react.Component);
(0, _defineProperty2.default)(EthTools, 'propTypes', {
  account: _propTypes.default.string,
  user: _propTypes.default.object,
  RelevantCoin: _propTypes.default.object,
  children: _propTypes.default.node,
  network: _propTypes.default.number,
  status: _propTypes.default.string
});
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user,
    account: state.accounts[0],
    RelevantCoin: state.contracts.RelevantCoin,
    network: state.web3.networkId,
    status: state.web3.status
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_objectSpread({}, authActions), dispatch)
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EthTools);
exports.default = _default;
//# sourceMappingURL=tools.container.js.map
