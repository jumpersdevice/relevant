'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
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
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/animation/mobile/coin.component.js';
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
var styles;
var ENDY = _global.fullHeight * 0.7;
var Dollar = (function(_Component) {
  (0, _inherits2.default)(Dollar, _Component);
  var _super = _createSuper(Dollar);
  function Dollar(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Dollar);
    _this = _super.call(this, props, context);
    _this.state = { position: new _reactNativeWeb.Animated.Value(0) };
    return _this;
  }
  (0, _createClass2.default)(Dollar, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var ENDX = -(_global.fullWidth / 3) + (Math.random() - 0.5) * 50;
        this.y = this.state.position.interpolate({
          inputRange: [0, 1],
          outputRange: [0, ENDY],
          easing: _reactNativeWeb.Easing.in(_reactNativeWeb.Easing.ease)
        });
        this.x = this.state.position.interpolate({
          inputRange: [0, 1],
          outputRange: [0, ENDX],
          easing: _reactNativeWeb.Easing.out(_reactNativeWeb.Easing.ease)
        });
        this.opacity = 1;
        this.scale = this.state.position.interpolate({
          inputRange: [0, 0.5, 0.9, 1],
          outputRange: [0, 1, 1, 0],
          extrapolate: 'clamp'
        });
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        var amount = this.props.amount;
        var i = this.props.specialKey;
        var r = Math.random();
        _reactNativeWeb.Animated.timing(this.state.position, {
          toValue: 1,
          delay: r * 30 + (i * 100 * 10) / amount,
          duration: 1000
        }).start(function() {
          return _this2.props.destroy(i);
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var specialKey = this.props.specialKey;
        var icon = require('../../../../public/img/relevantcoin.png');
        var img = _react.default.createElement(_reactNativeWeb.Image, {
          style: [styles.coin, { width: 30, height: 30 }],
          source: icon,
          __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 17 }
        });
        return _react.default.createElement(
          _reactNativeWeb.Animated.View,
          {
            key: specialKey,
            style: [
              styles.aniMoney,
              {
                transform: [
                  { translateX: this.x },
                  { translateY: this.y },
                  { scale: this.scale }
                ],
                opacity: this.opacity
              }
            ],
            __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 7 }
          },
          img
        );
      }
    }
  ]);
  return Dollar;
})(_react.Component);
(0, _defineProperty2.default)(Dollar, 'propTypes', {
  specialKey: _propTypes.default.number,
  amount: _propTypes.default.number,
  destroy: _propTypes.default.func
});
var _default = Dollar;
exports.default = _default;
var localStyles = _reactNativeWeb.StyleSheet.create({
  aniMoney: { position: 'absolute', top: 25, right: 45, backgroundColor: 'transparent' }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
//# sourceMappingURL=coin.component.js.map
