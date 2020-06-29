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
  '/Users/slavab/local/relevant/packages/app/src/modules/animation/mobile/heart.component.js';
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
var Heart = (function(_Component) {
  (0, _inherits2.default)(Heart, _Component);
  var _super = _createSuper(Heart);
  function Heart(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Heart);
    _this = _super.call(this, props, context);
    _this.state = {
      opacity: new _reactNativeWeb.Animated.Value(1),
      yVal: new _reactNativeWeb.Animated.Value(0),
      xVal: new _reactNativeWeb.Animated.Value(0),
      scale: new _reactNativeWeb.Animated.Value(0)
    };
    return _this;
  }
  (0, _createClass2.default)(Heart, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var i = this.props.specialKey;
        var delay = this.props.delay;
        _reactNativeWeb.Animated.parallel([
          _reactNativeWeb.Animated.timing(this.state.yVal, {
            toValue: -_global.fullHeight / 1.5,
            delay: delay * i,
            duration: 1000,
            easing: _reactNativeWeb.Easing.quad
          }),
          _reactNativeWeb.Animated.timing(this.state.opacity, {
            toValue: 0,
            delay: delay * i,
            duration: 1000,
            easing: _reactNativeWeb.Easing.in(_reactNativeWeb.Easing.exp)
          }),
          _reactNativeWeb.Animated.sequence([
            _reactNativeWeb.Animated.timing(this.state.xVal, {
              toValue: (Math.random() - 0.5) * 40,
              delay: delay * i,
              duration: 1000,
              easing: _reactNativeWeb.Easing.ease
            })
          ]),
          _reactNativeWeb.Animated.sequence([
            _reactNativeWeb.Animated.timing(this.state.scale, {
              toValue: 0.5,
              delay: delay * i,
              duration: 100,
              easing: _reactNativeWeb.Easing.in(_reactNativeWeb.Easing.exp)
            }),
            _reactNativeWeb.Animated.timing(this.state.scale, {
              toValue: 1,
              delay: 100,
              duration: 500,
              easing: _reactNativeWeb.Easing.ease
            })
          ]).start()
        ]).start();
      }
    },
    {
      key: 'render',
      value: function render() {
        var key = this.props.specialKey;
        return _react.default.createElement(
          _reactNativeWeb.Animated.Text,
          {
            pointerEvents: 'none',
            key: key,
            style: [
              styles.aniHeart,
              {
                transform: [
                  { scale: this.state.scale },
                  { translateY: this.state.yVal },
                  { translateX: this.state.xVal }
                ],
                opacity: this.state.opacity
              }
            ],
            __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 7 }
          },
          '\u2764\uFE0F'
        );
      }
    }
  ]);
  return Heart;
})(_react.Component);
(0, _defineProperty2.default)(Heart, 'propTypes', {
  specialKey: _propTypes.default.number,
  delay: _propTypes.default.number
});
var _default = Heart;
exports.default = _default;
styles = _reactNativeWeb.StyleSheet.create({
  aniHeart: {
    position: 'absolute',
    left: (_global.fullWidth / 5) * 3.5,
    fontSize: 12 * 2,
    bottom: 40,
    backgroundColor: 'transparent'
  }
});
//# sourceMappingURL=heart.component.js.map
