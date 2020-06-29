'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = TabBar;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNativeReanimated = _interopRequireDefault(require('react-native-reanimated'));
var _uni = require('../../styled/uni');
var _global = require('../../../styles/global');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/mobile/TabBar.js';
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
var styles;
TabBar.propTypes = {
  position: _propTypes.default.object,
  navigationState: _propTypes.default.object,
  setTab: _propTypes.default.func
};
function TabBar(_ref) {
  var navigationState = _ref.navigationState,
    position = _ref.position,
    setTab = _ref.setTab;
  var inputRange = navigationState.routes.map(function(x, i) {
    return i;
  });
  var nRoutes = navigationState.routes.length;
  var tabUnderlineStyle = {
    position: 'absolute',
    width: _global.fullWidth / nRoutes,
    height: 4,
    backgroundColor: _styles.colors.blue,
    bottom: 0
  };
  function getColor(inactive, active, i) {
    return _reactNativeReanimated.default.round(
      _reactNativeReanimated.default.interpolate(position, {
        inputRange: inputRange,
        outputRange: inputRange.map(function(inputIndex) {
          return inputIndex === i ? active : inactive;
        }),
        extrapolate: 'clamp'
      })
    );
  }
  var left = _reactNativeReanimated.default.interpolate(position, {
    inputRange: [0, 1],
    outputRange: [0, _global.fullWidth / nRoutes],
    extrapolate: 'clamp'
  });
  return _react.default.createElement(
    _reactNativeWeb.View,
    {
      style: styles.tabs,
      __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 5 }
    },
    navigationState.routes.map(function(route, i) {
      var color = _reactNativeReanimated.default.color(
        getColor(33, 0, i),
        getColor(33, 0, i),
        getColor(33, 255, i)
      );
      return _react.default.createElement(
        _reactNativeWeb.TouchableOpacity,
        {
          key: route.title,
          activeOpacity: 0.6,
          style: styles.tab,
          onPress: function onPress() {
            return setTab(i);
          },
          __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 11 }
        },
        _react.default.createElement(
          _uni.NumericalValue,
          { __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 13 } },
          _react.default.createElement(
            _reactNativeReanimated.default.Text,
            {
              style: [{ color: color, fontWeight: 'bold' }],
              __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 15 }
            },
            route.title
          )
        )
      );
    }),
    _react.default.createElement(_reactNativeReanimated.default.View, {
      style: [tabUnderlineStyle, { transform: [{ translateX: left }] }],
      __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 7 }
    })
  );
}
var localStyles = _reactNativeWeb.StyleSheet.create({
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderColor: _styles.colors.borderGrey
  }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=TabBar.js.map
