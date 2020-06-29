'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
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
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/toggleswitch.component.js';
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
var ToggleSwitch = (function(_React$Component) {
  (0, _inherits2.default)(ToggleSwitch, _React$Component);
  var _super = _createSuper(ToggleSwitch);
  function ToggleSwitch() {
    var _this;
    (0, _classCallCheck2.default)(this, ToggleSwitch);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'offsetX',
      new _reactNativeWeb.Animated.Value(0)
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'dimensions',
      ToggleSwitch.calculateDimensions(_this.props.size)
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'createToggleSwitchStyle',
      function() {
        return {
          justifyContent: 'center',
          width: _this.dimensions.width,
          borderRadius: 20,
          padding: _this.dimensions.padding,
          backgroundColor: _this.props.isOn ? _this.props.onColor : _this.props.offColor
        };
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'createInsideCircleStyle',
      function() {
        return {
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 4,
          marginLeft: 4,
          left: 0,
          position: 'absolute',
          backgroundColor: 'white',
          transform: [{ translateX: _this.offsetX }],
          width: _this.dimensions.circleWidth,
          height: _this.dimensions.circleHeight,
          borderRadius: _this.dimensions.circleWidth / 2
        };
      }
    );
    return _this;
  }
  (0, _createClass2.default)(
    ToggleSwitch,
    [
      {
        key: 'render',
        value: function render() {
          var toValue = this.props.isOn
            ? this.dimensions.width - this.dimensions.translateX
            : 0;
          _reactNativeWeb.Animated.timing(this.offsetX, {
            toValue: toValue,
            delay: 0,
            duration: 300
          }).start();
          var _this$props = this.props,
            isOn = _this$props.isOn,
            onToggle = _this$props.onToggle;
          return _react.default.createElement(
            _reactNativeWeb.TouchableOpacity,
            {
              style: this.createToggleSwitchStyle(),
              activeOpacity: 0.8,
              onPress: function onPress() {
                onToggle(!isOn);
              },
              __source: { fileName: _jsxFileName, lineNumber: 117, columnNumber: 7 }
            },
            _react.default.createElement(_reactNativeWeb.Animated.View, {
              style: this.createInsideCircleStyle(),
              __source: { fileName: _jsxFileName, lineNumber: 124, columnNumber: 9 }
            })
          );
        }
      }
    ],
    [
      {
        key: 'calculateDimensions',
        value: function calculateDimensions(size) {
          switch (size) {
            case 'custom':
              return {
                width: 32,
                padding: 10,
                circleWidth: 14,
                circleHeight: 14,
                translateX: 22
              };
            case 'custom2':
              return {
                width: 32,
                padding: 10,
                circleWidth: 14,
                circleHeight: 14,
                translateX: 18
              };
            case 'small':
              return {
                width: 50,
                padding: 10,
                circleWidth: 15,
                circleHeight: 15,
                translateX: 22
              };
            case 'large':
              return {
                width: 100,
                padding: 20,
                circleWidth: 30,
                circleHeight: 30,
                translateX: 38
              };
            default:
              return {
                width: 60,
                padding: 12,
                circleWidth: 18,
                circleHeight: 18,
                translateX: 26
              };
          }
        }
      }
    ]
  );
  return ToggleSwitch;
})(_react.default.Component);
exports.default = ToggleSwitch;
(0, _defineProperty2.default)(ToggleSwitch, 'propTypes', {
  isOn: _propTypes.default.bool.isRequired,
  onColor: _propTypes.default.string.isRequired,
  offColor: _propTypes.default.string.isRequired,
  size: _propTypes.default.string,
  onToggle: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(ToggleSwitch, 'defaultProps', {
  isOn: false,
  onColor: '#634fc9',
  offColor: '#ecf0f1',
  size: 'medium',
  labelStyle: {},
  icon: null
});
//# sourceMappingURL=toggleswitch.component.js.map
