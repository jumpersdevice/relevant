'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _global = require('../../../styles/global');
var _styles = require('../../../styles');
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var helper = _interopRequireWildcard(require('./tooltip.helper'));
var tooltipActions = _interopRequireWildcard(require('../tooltip.actions'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/tooltip/mobile/tooltip.container.js';
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
var TOOLTIP_MARGIN = _global.smallScreen ? 4 : 10;
var TOOLTIP_WIDTH = _global.fullWidth - 2 * TOOLTIP_MARGIN;
var Tooltip = (function(_Component) {
  (0, _inherits2.default)(Tooltip, _Component);
  var _super = _createSuper(Tooltip);
  function Tooltip(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Tooltip);
    _this = _super.call(this, props, context);
    _this.state = {
      height: 0,
      scale: new _reactNativeWeb.Animated.Value(0),
      opacity: new _reactNativeWeb.Animated.Value(0),
      x: new _reactNativeWeb.Animated.Value(0),
      width: 0
    };
    _this.offset = 15;
    _this.nextOnboarding = _this.nextOnboarding.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(Tooltip, [
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(next) {
        if (!this.props.tooltip.ready && next.tooltip.ready) {
          this.initTooltipData(next);
        }
        if (!this.props.auth.user) return;
        this.step = this.props.auth.user.onboarding;
        var id = next.tooltip.current;
        var tooltipId = next.tooltip.onboarding[id];
        var nextT = next.tooltip.data[tooltipId];
        if (nextT && nextT.toggle && tooltipId !== next.tooltip.showing.name) {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(function() {
            return nextT.toggle();
          }, 300);
        }
        if (next.tooltip.showing.name !== this.props.tooltip.showing.name) {
          var tooltip = next.tooltip.showing;
          if (tooltip && tooltip.name) {
            _reactNativeWeb.Animated.spring(this.state.scale, {
              toValue: 1,
              delay: 0,
              useNativeDriver: true,
              velocity: 25,
              friction: 10
            }).start();
            _reactNativeWeb.Animated.spring(this.state.opacity, {
              toValue: 1,
              delay: 0,
              velocity: 25,
              friction: 10,
              useNativeDriver: true
            }).start();
          } else {
            this.setState({
              scale: new _reactNativeWeb.Animated.Value(0.0),
              x: new _reactNativeWeb.Animated.Value(0)
            });
          }
        }
      }
    },
    {
      key: 'initTooltipData',
      value: function initTooltipData(props) {
        var _this2 = this;
        helper.tooltips.forEach(function(tooltip) {
          _this2.props.actions.setTooltipData(helper.data[tooltip]);
        });
        setTimeout(function() {
          if (!props.auth.user) return;
          _this2.props.actions.setCurrentTooltip(props.auth.user.onboarding);
        }, 1100);
      }
    },
    {
      key: 'nextOnboarding',
      value: function nextOnboarding() {
        var current = this.props.tooltip.showing.name;
        var index = this.props.tooltip.onboarding.findIndex(function(t) {
          return t === current;
        });
        this.props.actions.showTooltip(null);
        if (index === this.step) {
          var inc = 1;
          if (
            this.props.tooltip.onboarding[index + 1] === 'shareTip' &&
            _reactNativeWeb.Platform.OS === 'android'
          ) {
            inc = 2;
          }
          this.step += inc;
          this.props.actions.tooltipReady(false);
          this.props.actions.setOnboardingStep(this.step);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var auth = this.props.auth;
        if (!auth.user) return null;
        var tooltip = this.props.tooltip.showing;
        if (!tooltip || !tooltip.name) return null;
        if (!tooltip.parent) return null;
        var style = { opacity: this.state.opacity };
        var arrowStyle = [];
        var transform = [{ scale: this.state.scale }];
        var parent = tooltip.parent;
        if (parent.y < _global.fullHeight / 2) {
          tooltip.vertical = 'bottom';
        } else {
          tooltip.vertical = 'top';
        }
        var verticalOffset = tooltip.verticalOffset || helper.data.default.verticalOffset;
        var horizontal = tooltip.horizontal || helper.data.default.horizontal;
        var horizontalOffset =
          tooltip.horizontalOffset || helper.data.default.horizontalOffset;
        var arrowOffset = 3;
        if (tooltip.vertical === 'bottom') {
          transform = [].concat((0, _toConsumableArray2.default)(transform), [
            { translateY: this.state.height / 2 }
          ]);
          style = _objectSpread(
            _objectSpread({}, style),
            {},
            {
              top: -10 + parent.y + parent.h + verticalOffset - this.state.height / 2,
              transform: transform
            }
          );
          arrowOffset = 5;
          arrowStyle = [].concat((0, _toConsumableArray2.default)(arrowStyle), [
            { top: _reactNativeWeb.Platform.OS === 'android' ? 5 : 4 }
          ]);
        }
        if (tooltip.vertical === 'top') {
          transform = [].concat((0, _toConsumableArray2.default)(transform), [
            { translateY: -this.state.height / 2 }
          ]);
          style = _objectSpread(
            _objectSpread({}, style),
            {},
            {
              top: 10 + parent.y - this.state.height / 2 - verticalOffset,
              transform: transform
            }
          );
          arrowStyle = [].concat((0, _toConsumableArray2.default)(arrowStyle), [
            styles.arrowBottom,
            { bottom: _reactNativeWeb.Platform.OS === 'ios' ? 9 : 5 }
          ]);
        }
        if (horizontal === 'right') {
          var px = parent.w / 2 + parent.x + horizontalOffset * 2;
          var o = _global.fullWidth - px - TOOLTIP_MARGIN;
          var x = this.state.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -TOOLTIP_WIDTH + TOOLTIP_WIDTH / 2 + o + TOOLTIP_MARGIN]
          });
          transform = [{ translateX: x }].concat(
            (0, _toConsumableArray2.default)(transform)
          );
          style = _objectSpread(
            _objectSpread({}, style),
            {},
            { left: px - TOOLTIP_WIDTH / 2 - TOOLTIP_MARGIN, transform: transform }
          );
          arrowStyle = [].concat((0, _toConsumableArray2.default)(arrowStyle), [
            { right: _global.fullWidth - px - TOOLTIP_MARGIN - arrowOffset }
          ]);
        }
        if (horizontal === 'left') {
          style = _objectSpread(
            _objectSpread({}, style),
            {},
            { left: parent.x + horizontalOffset, transform: transform }
          );
          arrowStyle = [].concat((0, _toConsumableArray2.default)(arrowStyle), [
            { left: 8 }
          ]);
        }
        if (horizontal === 'center') {
          style = _objectSpread(
            _objectSpread({}, style),
            {},
            {
              width: tooltip.width,
              left: parent.x + parent.w / 2 - this.state.width / 2 + horizontalOffset,
              transform: transform
            }
          );
          arrowStyle = [].concat(
            (0, _toConsumableArray2.default)(arrowStyle),
            (0, _toConsumableArray2.default)(styles.arrowBottom),
            [{ left: this.state.width / 2 }]
          );
        }
        var button = _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            style: [styles.mediumButton, { borderColor: 'white' }],
            onPress: this.nextOnboarding,
            underlayColor: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 212, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [styles.mediumButtonText, { color: 'white' }],
              __source: { fileName: _jsxFileName, lineNumber: 217, columnNumber: 9 }
            },
            'Got It'
          )
        );
        var dismiss = true;
        var body = helper.text[tooltip.name]
          ? helper.text[tooltip.name](
              _objectSpread(
                _objectSpread({}, this.props),
                {},
                { style: styles.tooltipText },
                tooltip
              )
            )
          : _react.default.createElement(
              _reactNativeWeb.Text,
              (0, _extends2.default)({}, this.props, {
                style: styles.tooltipText,
                __source: { fileName: _jsxFileName, lineNumber: 230, columnNumber: 7 }
              }),
              tooltip.data.text
            );
        return _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            style: styles.overlay,
            onPress: dismiss ? this.nextOnboarding : null,
            underlayColor: _styles.colors.blue,
            activeOpacity: 1,
            __source: { fileName: _jsxFileName, lineNumber: 236, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Animated.View,
            {
              style: {
                flex: 1,
                backgroundColor: 'hsla(0,0%,100%,0.3)',
                opacity: this.state.opacity
              },
              __source: { fileName: _jsxFileName, lineNumber: 242, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Animated.View,
              {
                style: [styles.tooltip, style],
                onLayout: function onLayout(e) {
                  var _e$nativeEvent$layout = e.nativeEvent.layout,
                    width = _e$nativeEvent$layout.width,
                    height = _e$nativeEvent$layout.height;
                  _this3.setState({ height: height, width: width });
                },
                __source: { fileName: _jsxFileName, lineNumber: 250, columnNumber: 11 }
              },
              _react.default.createElement(_reactNativeWeb.View, {
                style: [styles.arrow].concat(
                  (0, _toConsumableArray2.default)(arrowStyle)
                ),
                __source: { fileName: _jsxFileName, lineNumber: 257, columnNumber: 13 }
              }),
              _react.default.createElement(
                _reactNativeWeb.TouchableHighlight,
                {
                  style: styles.tooltipCard,
                  onPress: this.nextOnboarding,
                  underlayColor: _styles.colors.blue,
                  __source: { fileName: _jsxFileName, lineNumber: 258, columnNumber: 13 }
                },
                _react.default.createElement(
                  _reactNativeWeb.View,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 263,
                      columnNumber: 15
                    }
                  },
                  body,
                  !helper.data[tooltip.name] || helper.data[tooltip.name].noButton
                    ? null
                    : button
                )
              )
            )
          )
        );
      }
    }
  ]);
  return Tooltip;
})(_react.Component);
(0, _defineProperty2.default)(Tooltip, 'propTypes', {
  tooltip: _propTypes.default.object,
  auth: _propTypes.default.object,
  actions: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: _global.fullWidth,
    height: _global.fullHeight,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  tooltipCard: {
    backgroundColor: _styles.colors.blue,
    padding: 15,
    paddingVertical: 20,
    paddingTop: 25,
    zIndex: 1000000,
    width: TOOLTIP_WIDTH
  },
  tooltip: { position: 'absolute', paddingVertical: 10 },
  tooltipText: { fontSize: 15, lineHeight: 20, color: 'white' },
  arrow: {
    width: 10,
    height: 10,
    position: 'absolute',
    transform:
      _reactNativeWeb.Platform.OS === 'android'
        ? [{ rotate: '45deg' }]
        : [{ rotate: '35deg' }, { skewY: '45deg' }, { translateY: 3 }],
    backgroundColor: _styles.colors.blue
  },
  arrowBottom: { shadowOffset: { width: 1, height: 1 } }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
function mapStateToProps(state) {
  return { auth: state.auth, tooltip: state.tooltip, nav: state.navigation };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(_objectSpread({}, authActions), navigationActions),
        tooltipActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Tooltip);
exports.default = _default;
//# sourceMappingURL=tooltip.container.js.map
