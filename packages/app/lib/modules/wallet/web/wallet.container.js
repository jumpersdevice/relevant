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
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var earningsActions = _interopRequireWildcard(require('../earnings.actions'));
var _earning = _interopRequireDefault(require('../earning.component'));
var _balance = _interopRequireDefault(require('../balance.component'));
var _uni = require('../../styled/uni');
var _infScroll = _interopRequireDefault(
  require('../../listview/web/infScroll.component')
);
var _rewards = require('../../../utils/rewards');
var _postPreview = _interopRequireDefault(require('../../post/postPreview.container'));
var _numbers = require('../../../utils/numbers');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/web/wallet.container.js';
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
var PAGE_SIZE = 50;
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
      'hasMore',
      true
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'load',
      function(page, length) {
        _this.hasMore = page * PAGE_SIZE <= length;
        if (_this.hasMore) {
          _this.props.actions.getEarnings(null, PAGE_SIZE, length);
        }
      }
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
          { __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 5 } },
          _react.default.createElement(_balance.default, {
            isWeb: true,
            __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 7 }
          })
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'renderRow',
      function(_ref) {
        var item = _ref.item;
        var screenSize = _this.props.screenSize;
        if (!item) return null;
        var earning = item;
        var payout = (0, _rewards.computeUserPayout)(earning);
        var month = (0, _numbers.getMonth)(earning.createdAt);
        var showMonth = _this.previousMonth !== month;
        _this.previousMonth = month;
        return _react.default.createElement(_earning.default, {
          key: earning._id,
          earning: earning,
          payout: payout,
          month: showMonth ? month : null,
          PostPreview: _postPreview.default,
          screenSize: screenSize,
          __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 7 }
        });
      }
    );
    return _this;
  }
  (0, _createClass2.default)(WalletContainer, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var earnings = this.props.earnings;
        var list = earnings.list;
        var entities = list.map(function(id) {
          return earnings.entities[id];
        });
        this.previousMonth = null;
        return _react.default.createElement(
          _uni.View,
          {
            mb: 8,
            __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 7 }
          },
          this.renderHeader(),
          _react.default.createElement(
            _uni.View,
            { __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 9 } },
            _react.default.createElement(
              _infScroll.default,
              {
                data: list,
                loadMore: function loadMore(p) {
                  return _this2.load(p, list.length);
                },
                hasMore: this.hasMore,
                key: 'recent-activity',
                className: 'parent',
                style: { position: 'relative', marginBottom: 20 },
                __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 11 }
              },
              entities.map(function(item) {
                return _this2.renderRow({ item: item });
              })
            )
          )
        );
      }
    }
  ]);
  return WalletContainer;
})(_react.Component);
(0, _defineProperty2.default)(WalletContainer, 'propTypes', {
  actions: _propTypes.default.object,
  earnings: _propTypes.default.object,
  screenSize: _propTypes.default.number
});
function mapStateToProps(state) {
  return { earnings: state.earnings, screenSize: state.navigation.screenSize };
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(_objectSpread({}, authActions), earningsActions),
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(WalletContainer);
exports.default = _default;
//# sourceMappingURL=wallet.container.js.map
