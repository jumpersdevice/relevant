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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _invariant = _interopRequireDefault(require('invariant'));
var _reactNativeWeb = require('react-native-web');
var _reactNativeGestureHandler = require('react-native-gesture-handler');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/mobile/DrawerLayout.js';
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
var DRAG_TOSS = 0.7;
var IDLE = 'Idle';
var DRAGGING = 'Dragging';
var SETTLING = 'Settling';
var PanHandler = {};
var SPRING_CONFIG = {
  speed: 20,
  bounciness: 0,
  overshootClamping: true,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001
};
var DrawerLayout = (function(_Component) {
  (0, _inherits2.default)(DrawerLayout, _Component);
  var _super = _createSuper(DrawerLayout);
  function DrawerLayout(_props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, DrawerLayout);
    _this = _super.call(this, _props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_accessibilityIsModalView',
      _react.default.createRef()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_pointerEventsView',
      _react.default.createRef()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_panGestureHandler',
      _react.default.createRef()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_drawerShown',
      false
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_updateAnimatedEvent',
      function(props, state) {
        var drawerPosition = props.drawerPosition,
          drawerWidth = props.drawerWidth,
          drawerType = props.drawerType;
        var dragXValue = state.dragX,
          touchXValue = state.touchX,
          drawerTranslation = state.drawerTranslation,
          containerWidth = state.containerWidth;
        var dragX = dragXValue;
        var touchX = touchXValue;
        if (drawerPosition !== 'left') {
          dragX = _reactNativeWeb.Animated.multiply(
            new _reactNativeWeb.Animated.Value(-1),
            dragXValue
          );
          touchX = _reactNativeWeb.Animated.add(
            new _reactNativeWeb.Animated.Value(containerWidth),
            _reactNativeWeb.Animated.multiply(
              new _reactNativeWeb.Animated.Value(-1),
              touchXValue
            )
          );
          touchXValue.setValue(containerWidth);
        } else {
          touchXValue.setValue(0);
        }
        var translationX = dragX;
        if (drawerType === 'front') {
          var startPositionX = _reactNativeWeb.Animated.add(
            touchX,
            _reactNativeWeb.Animated.multiply(
              new _reactNativeWeb.Animated.Value(-1),
              dragX
            )
          );
          var dragOffsetFromOnStartPosition = startPositionX.interpolate({
            inputRange: [drawerWidth - 1, drawerWidth, drawerWidth + 1],
            outputRange: [0, 0, 1]
          });
          translationX = _reactNativeWeb.Animated.add(
            dragX,
            dragOffsetFromOnStartPosition
          );
        }
        _this._openValue = _reactNativeWeb.Animated.add(
          translationX,
          drawerTranslation
        ).interpolate({
          inputRange: [0, drawerWidth],
          outputRange: [0, 1],
          extrapolate: 'clamp'
        });
        _this._onGestureEvent = _reactNativeWeb.Animated.event(
          [{ nativeEvent: { translationX: dragXValue, x: touchXValue } }],
          { useNativeDriver: props.useNativeAnimations }
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_handleContainerLayout',
      function(_ref) {
        var nativeEvent = _ref.nativeEvent;
        _this.setState({ containerWidth: nativeEvent.layout.width });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_emitStateChanged',
      function(newState, drawerWillShow) {
        _this.props.onDrawerStateChanged &&
          _this.props.onDrawerStateChanged(newState, drawerWillShow);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_openingHandlerStateChange',
      function(_ref2) {
        var nativeEvent = _ref2.nativeEvent;
        if (nativeEvent.oldState === _reactNativeGestureHandler.State.ACTIVE) {
          _this._handleRelease(nativeEvent);
        } else if (nativeEvent.state === _reactNativeGestureHandler.State.ACTIVE) {
          _this._emitStateChanged(DRAGGING, false);
          if (_this.props.keyboardDismissMode === 'on-drag') {
            _reactNativeWeb.Keyboard.dismiss();
          }
          if (_this.props.hideStatusBar) {
            _reactNativeWeb.StatusBar.setHidden(
              true,
              _this.props.statusBarAnimation || 'slide'
            );
          }
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_onTapHandlerStateChange',
      function(_ref3) {
        var nativeEvent = _ref3.nativeEvent;
        if (
          _this._drawerShown &&
          nativeEvent.oldState === _reactNativeGestureHandler.State.ACTIVE &&
          _this.props.drawerLockMode !== 'locked-open'
        ) {
          _this.closeDrawer();
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_handleRelease',
      function(nativeEvent) {
        var _this$props = _this.props,
          drawerWidth = _this$props.drawerWidth,
          drawerPosition = _this$props.drawerPosition,
          drawerType = _this$props.drawerType;
        var containerWidth = _this.state.containerWidth;
        var dragX = nativeEvent.translationX,
          velocityX = nativeEvent.velocityX,
          touchX = nativeEvent.x;
        if (drawerPosition !== 'left') {
          dragX = -dragX;
          touchX = containerWidth - touchX;
          velocityX = -velocityX;
        }
        var gestureStartX = touchX - dragX;
        var dragOffsetBasedOnStart = 0;
        if (drawerType === 'front') {
          dragOffsetBasedOnStart =
            gestureStartX > drawerWidth ? gestureStartX - drawerWidth : 0;
        }
        var startOffsetX =
          dragX + dragOffsetBasedOnStart + (_this._drawerShown ? drawerWidth : 0);
        var projOffsetX = startOffsetX + DRAG_TOSS * velocityX;
        var shouldOpen = projOffsetX > drawerWidth / 2;
        if (shouldOpen) {
          _this._animateDrawer(startOffsetX, drawerWidth, velocityX * 2);
        } else {
          _this._animateDrawer(startOffsetX, 0, velocityX);
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_updateShowing',
      function(showing) {
        _this._drawerShown = showing;
        _this._accessibilityIsModalView.current &&
          _this._accessibilityIsModalView.current.setNativeProps({
            accessibilityViewIsModal: showing
          });
        _this._pointerEventsView.current &&
          _this._pointerEventsView.current.setNativeProps({
            pointerEvents: showing ? 'auto' : 'none'
          });
        var _this$props2 = _this.props,
          drawerPosition = _this$props2.drawerPosition,
          minSwipeDistance = _this$props2.minSwipeDistance,
          edgeWidth = _this$props2.edgeWidth;
        var fromLeft = drawerPosition === 'left';
        var gestureOrientation = (fromLeft ? 1 : -1) * (_this._drawerShown ? -1 : 1);
        var hitSlop = fromLeft
          ? { left: 0, width: showing ? undefined : edgeWidth }
          : { right: 0, width: showing ? undefined : edgeWidth };
        _this._panGestureHandler.current &&
          _this._panGestureHandler.current.setNativeProps({
            hitSlop: hitSlop,
            activeOffsetX: gestureOrientation * minSwipeDistance
          });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_animateDrawer',
      function(fromValue, toValue, velocity) {
        if (fromValue !== undefined) {
          var nextFramePosition = fromValue;
          if (_this.props.useNativeAnimations) {
            if (fromValue < toValue && velocity > 0) {
              nextFramePosition = Math.min(fromValue + velocity / 60.0, toValue);
            } else if (fromValue > toValue && velocity < 0) {
              nextFramePosition = Math.max(fromValue + velocity / 60.0, toValue);
            }
          }
          _this.state.drawerTranslation.setValue(nextFramePosition);
        }
        var willShow = toValue !== 0;
        _reactNativeWeb.Animated.spring(
          _this.state.drawerTranslation,
          _objectSpread(
            _objectSpread({ velocity: velocity }, SPRING_CONFIG),
            {},
            { toValue: toValue, useNativeDriver: _this.props.useNativeAnimations }
          )
        ).start(function(_ref4) {
          var finished = _ref4.finished;
          if (finished) {
            _this._emitStateChanged(IDLE, willShow);
            if (willShow) {
              _this.props.onDrawerOpen && _this.props.onDrawerOpen();
            } else {
              _this.props.onDrawerClose && _this.props.onDrawerClose();
            }
          }
        });
        _this.state.dragX.setValue(0);
        requestAnimationFrame(function() {
          _this.state.touchX.setValue(
            _this.props.drawerPosition === 'left' ? 0 : _this.state.containerWidth
          );
          _this._updateShowing(willShow);
          _this._emitStateChanged(SETTLING, willShow);
          if (_this.props.hideStatusBar) {
            _reactNativeWeb.StatusBar.setHidden(
              willShow,
              _this.props.statusBarAnimation || 'slide'
            );
          }
        });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'openDrawer',
      function() {
        var options =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _this._animateDrawer(
          undefined,
          _this.props.drawerWidth,
          options.velocity ? options.velocity : 0
        );
        _this.forceUpdate();
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'closeDrawer',
      function() {
        var options =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _this._animateDrawer(undefined, 0, options.velocity ? options.velocity : 0);
        _this.forceUpdate();
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_renderOverlay',
      function() {
        (0, _invariant.default)(_this._openValue, 'should be set');
        var overlayOpacity = _this._openValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.7],
          extrapolate: 'clamp'
        });
        var dynamicOverlayStyles = {
          opacity: overlayOpacity,
          backgroundColor: _this.props.overlayColor
        };
        return _react.default.createElement(
          _reactNativeGestureHandler.TapGestureHandler,
          {
            onHandlerStateChange: _this._onTapHandlerStateChange,
            __source: { fileName: _jsxFileName, lineNumber: 407, columnNumber: 7 }
          },
          _react.default.createElement(_reactNativeWeb.Animated.View, {
            pointerEvents: _this._drawerShown ? 'auto' : 'none',
            ref: _this._pointerEventsView,
            style: [styles.overlay, dynamicOverlayStyles],
            __source: { fileName: _jsxFileName, lineNumber: 408, columnNumber: 9 }
          })
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_renderDrawer',
      function() {
        var _this$props3 = _this.props,
          drawerBackgroundColor = _this$props3.drawerBackgroundColor,
          drawerWidth = _this$props3.drawerWidth,
          drawerPosition = _this$props3.drawerPosition,
          drawerType = _this$props3.drawerType,
          drawerContainerStyle = _this$props3.drawerContainerStyle,
          contentContainerStyle = _this$props3.contentContainerStyle;
        var fromLeft = drawerPosition === 'left';
        var drawerSlide = drawerType !== 'back';
        var containerSlide = drawerType !== 'front';
        var reverseContentDirection = _reactNativeWeb.I18nManager.isRTL
          ? fromLeft
          : !fromLeft;
        var dynamicDrawerStyles = {
          backgroundColor: drawerBackgroundColor,
          width: drawerWidth
        };
        var openValue = _this._openValue;
        (0, _invariant.default)(openValue, 'should be set');
        var containerStyles;
        if (containerSlide) {
          var containerTranslateX = openValue.interpolate({
            inputRange: [0, 1],
            outputRange: fromLeft ? [0, drawerWidth] : [0, -drawerWidth],
            extrapolate: 'clamp'
          });
          containerStyles = { transform: [{ translateX: containerTranslateX }] };
        }
        var drawerTranslateX = 0;
        if (drawerSlide) {
          var closedDrawerOffset = fromLeft ? -drawerWidth : drawerWidth;
          drawerTranslateX = openValue.interpolate({
            inputRange: [0, 1],
            outputRange: [closedDrawerOffset, 0],
            extrapolate: 'clamp'
          });
        }
        var drawerStyles = {
          transform: [{ translateX: drawerTranslateX }],
          flexDirection: reverseContentDirection ? 'row-reverse' : 'row'
        };
        return _react.default.createElement(
          _reactNativeWeb.Animated.View,
          {
            style: styles.main,
            onLayout: _this._handleContainerLayout,
            __source: { fileName: _jsxFileName, lineNumber: 471, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Animated.View,
            {
              style: [
                drawerType === 'front' ? styles.containerOnBack : styles.containerInFront,
                containerStyles,
                contentContainerStyle
              ],
              __source: { fileName: _jsxFileName, lineNumber: 472, columnNumber: 9 }
            },
            typeof _this.props.children === 'function'
              ? _this.props.children(_this._openValue)
              : _this.props.children,
            _this._renderOverlay()
          ),
          _react.default.createElement(
            _reactNativeWeb.Animated.View,
            {
              pointerEvents: 'box-none',
              ref: _this._accessibilityIsModalView,
              accessibilityViewIsModal: _this._drawerShown,
              style: [styles.drawerContainer, drawerStyles, drawerContainerStyle],
              __source: { fileName: _jsxFileName, lineNumber: 484, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: dynamicDrawerStyles,
                __source: { fileName: _jsxFileName, lineNumber: 490, columnNumber: 11 }
              },
              _this.props.renderNavigationView(_this._openValue)
            )
          )
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      '_setPanGestureRef',
      function(ref) {
        _this._panGestureHandler.current = ref;
        _this.props.onGestureRef && _this.props.onGestureRef(ref);
      }
    );
    var _dragX = new _reactNativeWeb.Animated.Value(0);
    var _touchX = new _reactNativeWeb.Animated.Value(0);
    var _drawerTranslation = new _reactNativeWeb.Animated.Value(0);
    _this.state = {
      dragX: _dragX,
      touchX: _touchX,
      drawerTranslation: _drawerTranslation,
      containerWidth: 0
    };
    _this._updateAnimatedEvent(_props, _this.state);
    return _this;
  }
  (0, _createClass2.default)(DrawerLayout, [
    {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(props, state) {
        if (
          this.props.drawerPosition !== props.drawerPosition ||
          this.props.drawerWidth !== props.drawerWidth ||
          this.props.drawerType !== props.drawerType ||
          this.state.containerWidth !== state.containerWidth
        ) {
          this._updateAnimatedEvent(props, state);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props4 = this.props,
          drawerPosition = _this$props4.drawerPosition,
          drawerLockMode = _this$props4.drawerLockMode,
          edgeWidth = _this$props4.edgeWidth,
          minSwipeDistance = _this$props4.minSwipeDistance;
        var fromLeft = drawerPosition === 'left';
        var gestureOrientation = (fromLeft ? 1 : -1) * (this._drawerShown ? -1 : 1);
        var hitSlop = fromLeft
          ? { left: 0, width: this._drawerShown ? undefined : edgeWidth }
          : { right: 0, width: this._drawerShown ? undefined : edgeWidth };
        return _react.default.createElement(PanHandler, {
          ref: this._setPanGestureRef,
          hitSlop: hitSlop,
          activeOffsetX: gestureOrientation * minSwipeDistance,
          onGestureEvent: this._onGestureEvent,
          onHandlerStateChange: this._openingHandlerStateChange,
          enabled: drawerLockMode !== 'locked-closed' && drawerLockMode !== 'locked-open',
          renderDrawer: this._renderDrawer,
          __source: { fileName: _jsxFileName, lineNumber: 521, columnNumber: 7 }
        });
      }
    }
  ]);
  return DrawerLayout;
})(_react.Component);
exports.default = DrawerLayout;
(0, _defineProperty2.default)(DrawerLayout, 'defaultProps', {
  drawerWidth: 200,
  drawerPosition: 'left',
  useNativeAnimations: true,
  drawerType: 'front',
  edgeWidth: 20,
  minSwipeDistance: 3,
  overlayColor: 'black',
  drawerLockMode: 'unlocked'
});
(0, _defineProperty2.default)(DrawerLayout, 'positions', {
  Left: 'left',
  Right: 'right'
});
PanHandler.propTypes = {
  hitSlop: _propTypes.default.object,
  activeOffsetX: _propTypes.default.array,
  enabled: _propTypes.default.bool,
  onHandlerStateChange: _propTypes.default.func,
  onGestureEvent: _propTypes.default.func,
  renderDrawer: _propTypes.default.func
};
PanHandler = _react.default.forwardRef(function(_ref5, ref) {
  var hitSlop = _ref5.hitSlop,
    activeOffsetX = _ref5.activeOffsetX,
    enabled = _ref5.enabled,
    onHandlerStateChange = _ref5.onHandlerStateChange,
    onGestureEvent = _ref5.onGestureEvent,
    renderDrawer = _ref5.renderDrawer;
  var gesture = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.gesture;
  });
  return _react.default.createElement(
    _reactNativeGestureHandler.PanGestureHandler,
    {
      ref: ref,
      hitSlop: hitSlop,
      activeOffsetX: activeOffsetX,
      onGestureEvent: onGestureEvent,
      onHandlerStateChange: onHandlerStateChange,
      enabled: enabled,
      simultaneousHandlers: gesture || {},
      waitFor: gesture || {},
      __source: { fileName: _jsxFileName, lineNumber: 559, columnNumber: 7 }
    },
    renderDrawer()
  );
});
var styles = _reactNativeWeb.StyleSheet.create({
  drawerContainer: _objectSpread(
    _objectSpread({}, _reactNativeWeb.StyleSheet.absoluteFillObject),
    {},
    { zIndex: 1001, flexDirection: 'row' }
  ),
  containerInFront: _objectSpread(
    _objectSpread({}, _reactNativeWeb.StyleSheet.absoluteFillObject),
    {},
    { zIndex: 1002 }
  ),
  containerOnBack: _objectSpread({}, _reactNativeWeb.StyleSheet.absoluteFillObject),
  main: { flex: 1, zIndex: 0, overflow: 'hidden' },
  overlay: _objectSpread(
    _objectSpread({}, _reactNativeWeb.StyleSheet.absoluteFillObject),
    {},
    { zIndex: 1000 }
  )
});
//# sourceMappingURL=DrawerLayout.js.map
