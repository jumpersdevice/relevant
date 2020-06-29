'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
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
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var earningsActions = _interopRequireWildcard(require('../earnings.actions'));
var _earning = _interopRequireDefault(require('../earning.component'));
var _balance = _interopRequireDefault(require('../balance.component'));
var _uni = require('../../styled/uni');
var _get = _interopRequireDefault(require('lodash/get'));
var _customList = _interopRequireDefault(
  require('../../listview/mobile/customList.component')
);
var _rewards = require('../../../utils/rewards');
var _postPreview = _interopRequireDefault(require('../../post/postPreview.container'));
var _reactNavigation = require('react-navigation');
var _numbers = require('../../../utils/numbers');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/mobile/wallet.container.js';
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
var PAGE_SIZE = 30;
var WalletContainer = (function(_Component) {
  (0, _inherits2.default)(WalletContainer, _Component);
  var _super = _createSuper(WalletContainer);
  function WalletContainer() {
    var _this;
    (0, _classCallCheck2.default)(this, WalletContainer);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      reloading: false
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'needsReload',
      new Date().getTime()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'shouldComponentUpdate',
      function(next) {
        return next.navigation.isFocused();
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'scrollToTop',
      function() {
        var view = _this.listview;
        if (view && view.listview) {
          view.listview.scrollToOffset({ offset: 0 });
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'load',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(view, length) {
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    if (!_this.loading) {
                      _context.next = 2;
                      break;
                    }
                    return _context.abrupt('return', null);
                  case 2:
                    _this.loading = true;
                    _context.next = 5;
                    return _this.props.actions.getEarnings(null, PAGE_SIZE, length);
                  case 5:
                    _this.loading = false;
                    return _context.abrupt('return', null);
                  case 7:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return function(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'reload',
      function() {
        return _this.load(0, 0);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'renderHeader',
      function() {
        return _react.default.createElement(
          _uni.View,
          { __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 5 } },
          _react.default.createElement(
            _balance.default,
            (0, _extends2.default)({}, _this.props, {
              __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 7 }
            })
          )
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'createListItem',
      function(item, i) {
        if (parseInt(i, 10) === 0) _this.previousMonth = null;
        if (!item) return null;
        var earning = item;
        var payout = (0, _rewards.computeUserPayout)(earning);
        var month = (0, _numbers.getMonth)(earning.createdAt);
        var showMonth = month !== _this.previousMonth;
        _this.previousMonth = month;
        return { earning: earning, payout: payout, month: showMonth ? month : null };
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'renderRow',
      function(item) {
        var screenSize = _this.props.screenSize;
        var earning = item.earning,
          payout = item.payout,
          month = item.month;
        return _react.default.createElement(_earning.default, {
          screenSize: screenSize,
          earning: earning,
          payout: payout,
          month: month,
          PostPreview: _postPreview.default,
          __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 7 }
        });
      }
    );
    return _this;
  }
  (0, _createClass2.default)(WalletContainer, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!this.props.earnings.list.length) {
          this.load(0, 0);
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.refresh !== prevProps.refresh) {
          this.scrollToTop();
        }
        if (this.props.reload !== prevProps.reload) {
          this.needsReload = new Date().getTime();
        }
        if (!this.props.earnings.list.length) this.reload();
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          contract = _this$props.contract,
          earnings = _this$props.earnings;
        if (contract && !contract.initialized) return null;
        var list = earnings.list;
        var entities = list
          .map(function(id, i) {
            return _this2.createListItem(earnings.entities[id], i);
          })
          .filter(function(el) {
            return el !== null;
          });
        return _react.default.createElement(
          _uni.View,
          {
            flex: 1,
            __source: { fileName: _jsxFileName, lineNumber: 124, columnNumber: 7 }
          },
          _react.default.createElement(_customList.default, {
            ref: function ref(c) {
              _this2.listview = c;
            },
            view: 0,
            data: entities,
            loaded: true,
            active: true,
            renderRow: this.renderRow,
            renderHeader: this.renderHeader,
            load: this.load,
            type: 'posts',
            parent: 'wallet',
            needsReload: this.needsReload,
            actions: this.props.actions,
            __source: { fileName: _jsxFileName, lineNumber: 125, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return WalletContainer;
})(_react.Component);
(0, _defineProperty2.default)(WalletContainer, 'propTypes', {
  user: _propTypes.default.object,
  auth: _propTypes.default.object,
  contract: _propTypes.default.object,
  actions: _propTypes.default.object,
  earnings: _propTypes.default.object,
  reload: _propTypes.default.number,
  refresh: _propTypes.default.number,
  screenSize: _propTypes.default.number
});
(0, _defineProperty2.default)(WalletContainer, 'contextTypes', {
  store: _propTypes.default.object
});
function mapStateToProps(state) {
  return {
    auth: state.auth,
    earnings: state.earnings,
    user: state.auth.user,
    drizzleStatus: state.drizzleStatus,
    contract: (0, _get.default)(state, 'contracts.RelevantCoin'),
    accounts: state.accounts,
    contracts: state.contracts,
    accountBalances: state.accountBalances,
    drizzle: {
      transactions: state.transactions,
      web3: state.web3,
      transactionStack: state.transactionStack
    },
    refresh: state.navigation.wallet.refresh,
    reload: state.navigation.wallet.reload,
    screenSize: state.navigation.screenSize
  };
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(_objectSpread({}, authActions), earningsActions),
      dispatch
    )
  };
};
var _default = (0, _reactNavigation.withNavigation)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WalletContainer)
);
exports.default = _default;
//# sourceMappingURL=wallet.container.js.map
