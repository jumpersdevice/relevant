'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.BottomSheet = BottomSheet;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNativeGestureHandler = require('react-native-gesture-handler');
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/mobile/bottomSheet.js';
var USE_NATIVE_DRIVER = true;
var windowHeight = _reactNativeWeb.Dimensions.get('window').height;
BottomSheet.propTypes = {
  children: _propTypes.default.node,
  close: _propTypes.default.func
};
function BottomSheet(_ref) {
  var children = _ref.children,
    close = _ref.close;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    showBg = _useState4[0],
    setShowBg = _useState4[1];
  var SnapPointsFromTop =
    Math.round(height) <= Math.round(windowHeight)
      ? [windowHeight - height, windowHeight]
      : [50, windowHeight * 0.4, windowHeight];
  var masterdrawer = (0, _react.useRef)();
  var drawer = (0, _react.useRef)();
  var scroll = _react.default.createRef();
  var START = SnapPointsFromTop[0];
  var END = SnapPointsFromTop[SnapPointsFromTop.length - 1];
  var _useState5 = (0, _react.useState)(END),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    lastSnap = _useState6[0],
    setSnap = _useState6[1];
  var lastScrollYValue = 0;
  var _useState7 = (0, _react.useState)(new _reactNativeWeb.Animated.Value(0)),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 1),
    lastScrollY = _useState8[0];
  var onRegisterLastScroll = _reactNativeWeb.Animated.event(
    [{ nativeEvent: { contentOffset: { y: lastScrollY } } }],
    { useNativeDriver: USE_NATIVE_DRIVER }
  );
  lastScrollY.addListener(function(_ref2) {
    var value = _ref2.value;
    lastScrollYValue = value;
  });
  var _useState9 = (0, _react.useState)(new _reactNativeWeb.Animated.Value(0)),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 1),
    dragY = _useState10[0];
  var onGestureEvent = _reactNativeWeb.Animated.event(
    [{ nativeEvent: { translationY: dragY } }],
    { useNativeDriver: USE_NATIVE_DRIVER }
  );
  var _useState11 = (0, _react.useState)(
      _reactNativeWeb.Animated.multiply(
        new _reactNativeWeb.Animated.Value(-1),
        lastScrollY
      )
    ),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 1),
    reverseLastScrollY = _useState12[0];
  var _useState13 = (0, _react.useState)(new _reactNativeWeb.Animated.Value(END)),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 1),
    translateYOffset = _useState14[0];
  var translateY = _reactNativeWeb.Animated.add(
    translateYOffset,
    _reactNativeWeb.Animated.add(dragY, reverseLastScrollY)
  ).interpolate({ inputRange: [START, END], outputRange: [START, END] });
  var onHandlerStateChange = function onHandlerStateChange(_ref3) {
    var nativeEvent = _ref3.nativeEvent;
    if (nativeEvent.oldState === _reactNativeGestureHandler.State.ACTIVE) {
      var velocityY = nativeEvent.velocityY;
      var translationY = nativeEvent.translationY;
      translationY -= lastScrollYValue;
      var dragToss = 0.1;
      var endOffsetY = lastSnap + translationY + dragToss * velocityY;
      var destSnapPoint = SnapPointsFromTop[0];
      SnapPointsFromTop.forEach(function(snapPoint) {
        var distFromSnap = Math.abs(snapPoint - endOffsetY);
        if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
          destSnapPoint = snapPoint;
        }
      });
      setSnap(destSnapPoint);
      translateYOffset.extractOffset();
      translateYOffset.setValue(translationY);
      translateYOffset.flattenOffset();
      dragY.setValue(0);
      if (destSnapPoint === END) return closeModal(velocityY);
      return animateView({
        offset: translateYOffset,
        velocityY: velocityY,
        destSnapPoint: destSnapPoint
      });
    }
    return null;
  };
  function closeModal(_ref4) {
    var _ref4$velocityY = _ref4.velocityY,
      velocityY = _ref4$velocityY === void 0 ? 0 : _ref4$velocityY;
    setShowBg(false);
    animateView({
      offset: translateYOffset,
      velocityY: velocityY,
      destSnapPoint: END,
      callback: close
    });
  }
  (0, _react.useEffect)(
    function() {
      if (height === 0) return;
      setSnap(START);
      animateView({ offset: translateYOffset, velocityY: 0, destSnapPoint: START });
    },
    [START, translateYOffset, height]
  );
  return _react.default.createElement(
    _reactNativeGestureHandler.TapGestureHandler,
    {
      maxDurationMs: 100000,
      ref: masterdrawer,
      maxDeltaY: lastSnap - SnapPointsFromTop[0],
      style: [_reactNativeWeb.StyleSheet.absoluteFillObject],
      __source: { fileName: _jsxFileName, lineNumber: 127, columnNumber: 5 }
    },
    _react.default.createElement(
      _reactNativeWeb.View,
      {
        style: [
          _reactNativeWeb.StyleSheet.absoluteFillObject,
          showBg && { backgroundColor: 'hsla(0,0%,0%,.4)' }
        ],
        pointerEvents: 'box-none',
        __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 7 }
      },
      _react.default.createElement(
        _reactNativeWeb.Animated.View,
        {
          style: [
            _reactNativeWeb.StyleSheet.absoluteFillObject,
            { transform: [{ translateY: translateY }] }
          ],
          __source: { fileName: _jsxFileName, lineNumber: 140, columnNumber: 9 }
        },
        _react.default.createElement(
          _reactNativeGestureHandler.PanGestureHandler,
          {
            ref: drawer,
            simultaneousHandlers: [scroll, masterdrawer],
            shouldCancelWhenOutside: false,
            onGestureEvent: onGestureEvent,
            onHandlerStateChange: onHandlerStateChange,
            __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 11 }
          },
          _react.default.createElement(
            _reactNativeWeb.Animated.View,
            {
              style: { flex: 1 },
              __source: { fileName: _jsxFileName, lineNumber: 155, columnNumber: 13 }
            },
            _react.default.createElement(
              _reactNativeGestureHandler.NativeViewGestureHandler,
              {
                ref: scroll,
                waitFor: masterdrawer,
                simultaneousHandlers: drawer,
                __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 15 }
              },
              _react.default.createElement(
                _reactNativeWeb.Animated.ScrollView,
                {
                  style: [
                    {
                      flex: 1,
                      backgroundColor: 'white',
                      paddingBottom: _global.IphoneX ? 33 : 0
                    }
                  ],
                  bounces: false,
                  onScrollBeginDrag: onRegisterLastScroll,
                  scrollEventThrottle: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 161, columnNumber: 17 }
                },
                _react.default.createElement(
                  _reactNativeWeb.TouchableWithoutFeedback,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 19
                    }
                  },
                  _react.default.createElement(
                    _reactNativeWeb.View,
                    {
                      style: [{ paddingVertical: 48, paddingHorizontal: 32 }],
                      onLayout: function onLayout(e) {
                        return setHeight(
                          e.nativeEvent.layout.height + (_global.IphoneX ? 33 : 0)
                        );
                      },
                      flex: 1,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 21
                      }
                    },
                    children
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
function animateView(_ref5) {
  var offset = _ref5.offset,
    velocityY = _ref5.velocityY,
    destSnapPoint = _ref5.destSnapPoint,
    callback = _ref5.callback;
  _reactNativeWeb.Animated.spring(offset, {
    velocity: velocityY,
    tension: 86,
    friction: 10,
    toValue: destSnapPoint,
    useNativeDriver: USE_NATIVE_DRIVER
  }).start(function(_ref6) {
    var finished = _ref6.finished;
    finished && callback && callback();
  });
}
//# sourceMappingURL=bottomSheet.js.map
