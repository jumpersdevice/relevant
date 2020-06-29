'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.transtionConfig = transtionConfig;
exports.setTopLevelNavigator = setTopLevelNavigator;
exports.getNavigator = getNavigator;
exports.dispatchNavigatorAction = dispatchNavigatorAction;
exports.getCurrentRouteAndTab = getCurrentRouteAndTab;
exports.withProps = exports.getScreenSize = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _screens = require('../styles/screens');
var _jsxFileName = '/Users/slavab/local/relevant/packages/app/src/utils/nav.js';
function transtionConfig() {
  return {
    timing: _reactNativeWeb.Animated.spring,
    useNativeDriver: true,
    speed: 20,
    bounciness: 0,
    overshootClamping: true
  };
}
var getScreenSize = function getScreenSize(width) {
  var breakpoints = [_screens.mediumScreenWidth, _screens.smallScreenWidth];
  var screenSize = 0;
  for (var i = 0; i < breakpoints.length; i++) {
    screenSize = i;
    if (width > breakpoints[i]) return screenSize;
  }
  return screenSize;
};
exports.getScreenSize = getScreenSize;
var withProps = function withProps(component) {
  var Comp = component;
  return function(navProps) {
    return _react.default.createElement(
      Comp,
      (0, _extends2.default)({ navigation: navProps.navigation }, navProps.screenProps, {
        __source: { fileName: _jsxFileName, lineNumber: 27, columnNumber: 22 }
      })
    );
  };
};
exports.withProps = withProps;
var _navigator;
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}
function getNavigator() {
  return _navigator;
}
function dispatchNavigatorAction(action) {
  if (!_navigator) return console.warn('TopLevelNavigator not ready!');
  return _navigator.dispatch(action);
}
function getCurrentRouteAndTab() {
  if (!_navigator) return {};
  var route = _navigator.state.nav;
  var tab;
  var tabChildrenCount = 0;
  while (route.routes) {
    route = route.routes[route.index];
    if (tab) tabChildrenCount++;
    if (route.routeName === 'main') {
      tab = route.routes[route.index];
    }
  }
  return { route: route, tab: tab, tabChildrenCount: tabChildrenCount };
}
//# sourceMappingURL=nav.js.map
