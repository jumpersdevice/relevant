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
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/animation/vote.component.js';
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
var ENDY = 300;
var ICONS = {
  upvote: { size: 28, icon: require('../../../public/img/icons/upvoteActive.png') },
  bet: { size: 18, icon: require('../../../public/img/relevantcoin.png') }
};
var Vote = (function(_Component) {
  (0, _inherits2.default)(Vote, _Component);
  var _super = _createSuper(Vote);
  function Vote(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Vote);
    _this = _super.call(this, props, context);
    _this.state = { position: new _reactNativeWeb.Animated.Value(0) };
    return _this;
  }
  (0, _createClass2.default)(Vote, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this$props$parent = this.props.parent,
          x = _this$props$parent.x,
          y = _this$props$parent.y;
        var ENDX = Math.random() * 50;
        this.y = this.state.position.interpolate({
          inputRange: [0, 1],
          outputRange: [y, y - ENDY]
        });
        this.x = this.state.position.interpolate({
          inputRange: [0, 0.5 * Math.random(), 1],
          outputRange: [x, x + ENDX / 2, x + ENDX]
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
          inputRange: [0, 0.2, 0.3, 1],
          outputRange: [0, 1.2, 1, 1.5],
          extrapolate: 'clamp'
        });
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        var i = this.props.specialKey;
        var r = Math.random();
        _reactNativeWeb.Animated.timing(this.state.position, {
          toValue: 1,
          delay: i * (75 + r * 50),
          duration: 1000,
          useNativeDriver: true
        }).start(function() {
          return _this2.props.destroy(i);
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          specialKey = _this$props.specialKey,
          horizontal = _this$props.horizontal,
          parent = _this$props.parent,
          type = _this$props.type;
        var _ICONS$type = ICONS[type],
          icon = _ICONS$type.icon,
          size = _ICONS$type.size;
        var img = _react.default.createElement(_reactNativeWeb.Image, {
          resizeMode: 'contain',
          style: { width: size, height: size },
          source: icon,
          __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 7 }
        });
        return _react.default.createElement(
          _reactNativeWeb.Animated.View,
          {
            key: specialKey,
            style: [
              _objectSpread({}, _layout.animatedElement),
              {
                left: horizontal ? 0 : parent.w / 2,
                transform: [
                  { translateX: this.x },
                  { translateY: this.y },
                  { scale: this.scale },
                  { rotate: this.rotateAnimation }
                ],
                opacity: this.opacity
              }
            ],
            __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 7 }
          },
          img
        );
      }
    }
  ]);
  return Vote;
})(_react.Component);
(0, _defineProperty2.default)(Vote, 'propTypes', {
  horizontal: _propTypes.default.bool,
  parent: _propTypes.default.object,
  specialKey: _propTypes.default.number,
  destroy: _propTypes.default.func,
  type: _propTypes.default.string
});
var _default = Vote;
exports.default = _default;
//# sourceMappingURL=vote.component.js.map
