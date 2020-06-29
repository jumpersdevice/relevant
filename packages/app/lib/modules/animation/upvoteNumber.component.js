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
var _layout = require('../../styles/layout');
var _styles = require('../../styles');
var _uni = require('../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/animation/upvoteNumber.component.js';
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
var ENDY = 100;
var VoteNumber = (function(_Component) {
  (0, _inherits2.default)(VoteNumber, _Component);
  var _super = _createSuper(VoteNumber);
  function VoteNumber(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, VoteNumber);
    _this = _super.call(this, props, context);
    _this.state = { position: new _reactNativeWeb.Animated.Value(0) };
    return _this;
  }
  (0, _createClass2.default)(VoteNumber, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this$props$parent = this.props.parent,
          x = _this$props$parent.x,
          y = _this$props$parent.y;
        var ENDX = (Math.random() - 0.5) * 20;
        this.y = this.state.position.interpolate({
          inputRange: [0, 1],
          outputRange: [y + 10, y - ENDY]
        });
        this.x = this.state.position.interpolate({
          inputRange: [0, 0.05, 0.5, 1],
          outputRange: [x - 15, x, x + ENDX / 2, x + ENDX]
        });
        this.opacity = this.state.position.interpolate({
          inputRange: [0.7, 1],
          outputRange: [1, 0],
          extrapolate: 'clamp'
        });
        this.rotateAnimation = this.state.position.interpolate({
          inputRange: [0, 1 / 4, 1 / 3, 1 / 2, 1],
          outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg']
        });
        this.scale = this.state.position.interpolate({
          inputRange: [0, 0.05, 0.1, 0.9, 0.95, 1],
          outputRange: [0, 1.4, 1, 1, 1.2, 0]
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
          duration: 2000,
          useNativeDriver: true
        }).start(function() {
          return _this2.props.destroy(null, i);
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          amount = _this$props.amount,
          parent = _this$props.parent,
          horizontal = _this$props.horizontal;
        var w = parent.w;
        var specialKey = this.props.specialKey;
        var element = _react.default.createElement(
          _uni.Title,
          {
            c: _styles.colors.green,
            __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 21 }
          },
          '+',
          amount
        );
        return _react.default.createElement(
          _reactNativeWeb.Animated.View,
          {
            key: specialKey,
            style: [
              _objectSpread({}, _layout.animatedElement),
              {
                left: horizontal ? 20 : (w * 2) / 3,
                transform: [
                  { translateX: this.x },
                  { translateY: this.y },
                  { scale: this.scale }
                ],
                opacity: this.opacity
              }
            ],
            __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 7 }
          },
          element
        );
      }
    }
  ]);
  return VoteNumber;
})(_react.Component);
(0, _defineProperty2.default)(VoteNumber, 'propTypes', {
  parent: _propTypes.default.object,
  specialKey: _propTypes.default.number,
  amount: _propTypes.default.number,
  destroy: _propTypes.default.func,
  horizontal: _propTypes.default.bool
});
var _default = VoteNumber;
exports.default = _default;
//# sourceMappingURL=upvoteNumber.component.js.map
