'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = DrawerRouter;
exports.MainStack = void 0;
var _react = _interopRequireDefault(require('react'));
var _reactRedux = require('react-redux');
var _app = _interopRequireDefault(require('./app.container'));
var _reactNavigation = require('react-navigation');
var _reactNavigationDrawer = require('react-navigation-drawer');
var _sideNav = _interopRequireDefault(
  require('../../navigation/mobile/sideNav.component')
);
var _global = require('../../../styles/global');
var _nav = require('../../../utils/nav');
var _reactNativeFirebase = require('react-native-firebase');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/mobile/drawerRouter.js';
var Analytics = (0, _reactNativeFirebase.analytics)();
var MainStack = (0, _reactNavigationDrawer.createDrawerNavigator)(
  {
    container: {
      screen: _app.default,
      path: '',
      navigationOptions: function navigationOptions(props) {
        var discoverTab = props.screenProps.discoverTab;
        var _getCurrentRouteAndTa = (0, _nav.getCurrentRouteAndTab)(),
          tab = _getCurrentRouteAndTa.tab;
        var tabName = tab && tab.routeName;
        var isLocked =
          (discoverTab > 0 && tabName === 'discover') || (tab && tab.index > 0) || !tab;
        return { header: null, drawerLockMode: isLocked ? 'locked-closed' : 'unlocked' };
      }
    }
  },
  {
    drawerType: 'slide',
    edgeWidth: _global.fullWidth,
    overlayColor: 'rgba(0, 0, 0, 0.3)',
    minSwipeDistance: 10,
    useNativeAnimations: true,
    contentComponent: _sideNav.default,
    gesturesEnabled: true,
    drawerWidth: function drawerWidth() {
      return Math.min(320, _global.fullWidth * 0.9);
    },
    defaultNavigationOptions: function defaultNavigationOptions() {
      return { gestureResponseDistance: { horizontal: _global.fullWidth } };
    }
  }
);
exports.MainStack = MainStack;
var MainNavigator = (0, _reactNavigation.createAppContainer)(MainStack);
function DrawerRouter() {
  var discoverTab = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.discover.tab;
  });
  return _react.default.createElement(MainNavigator, {
    screenProps: { discoverTab: discoverTab },
    uriPrefix: 'https://relevant.community/',
    ref: function ref(navigatorRef) {
      (0, _nav.setTopLevelNavigator)(navigatorRef);
    },
    onNavigationStateChange: function onNavigationStateChange(prevState, currentState) {
      var currentScreen = getActiveRouteName(currentState);
      var prevScreen = getActiveRouteName(prevState);
      if (prevScreen !== currentScreen) {
        Analytics.logEvent('screenView', { viewName: currentScreen });
      }
    },
    __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 5 }
  });
}
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  var route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}
//# sourceMappingURL=drawerRouter.js.map
