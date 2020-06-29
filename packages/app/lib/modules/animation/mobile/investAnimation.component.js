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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _redux = require('redux');
var animationActions = _interopRequireWildcard(require('../animation.actions'));
var _global = require('../../../styles/global');
var _coin = _interopRequireDefault(require('./coin.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/animation/mobile/investAnimation.component.js';
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
var localStyles = _reactNativeWeb.StyleSheet.create({
  moneyContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: _global.fullHeight,
    width: _global.fullWidth
  }
});
var styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
var InvestAnimation = (function(_Component) {
  (0, _inherits2.default)(InvestAnimation, _Component);
  var _super = _createSuper(InvestAnimation);
  function InvestAnimation(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, InvestAnimation);
    _this = _super.call(this, props, context);
    _this.enabled = true;
    _this.state = { investAni: [], num: 0 };
    _this.clearEls = _this.clearEls.bind((0, _assertThisInitialized2.default)(_this));
    _this.destroy = _this.destroy.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(InvestAnimation, [
    {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(next) {
        if (this.props.animation.invest !== next.animation.invest) {
          this.amount = Math.min(20, next.animation.amount.invest) || 10;
          this.investAni();
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.clearEls();
      }
    },
    {
      key: 'clearEls',
      value: function clearEls() {
        this.setState({ num: 0, investAni: [] });
      }
    },
    {
      key: 'destroy',
      value: function destroy(key) {
        delete this.state.investAni[key];
        this.setState({ thumbs: this.state.investAni });
      }
    },
    {
      key: 'investAni',
      value: function investAni() {
        this.clearEls();
        var newArr = [];
        for (var i = 0; i < this.amount; i++) {
          newArr.push(
            _react.default.createElement(_coin.default, {
              destroy: this.destroy,
              amount: this.amount,
              key: i + Math.random(),
              specialKey: i,
              __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 9 }
            })
          );
          this.setState({ investAni: newArr });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            pointerEvents: 'none',
            style: styles.moneyContainer,
            __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 7 }
          },
          this.state.investAni
        );
      }
    }
  ]);
  return InvestAnimation;
})(_react.Component);
(0, _defineProperty2.default)(InvestAnimation, 'propTypes', {
  animation: _propTypes.default.object
});
function mapStateToProps(state) {
  return { animation: state.animation };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_objectSpread({}, animationActions), dispatch)
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(InvestAnimation);
exports.default = _default;
//# sourceMappingURL=investAnimation.component.js.map
