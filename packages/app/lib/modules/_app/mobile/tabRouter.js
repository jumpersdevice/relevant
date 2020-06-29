'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.TabContainer = exports.TabNavigator = exports.DefaultStack = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _global = require('../../../styles/global');
var _reactNavigation = require('react-navigation');
var _reactNavigationTabs = require('react-navigation-tabs');
var _discoverTabs = _interopRequireDefault(
  require('../../discover/mobile/discoverTabs.component')
);
var _stats = _interopRequireDefault(require('../../stats/mobile/stats.container'));
var _activity = _interopRequireDefault(
  require('../../activity/mobile/activity.container')
);
var _profile = _interopRequireDefault(require('../../profile/mobile/profile.container'));
var _tabBar = _interopRequireDefault(require('../../navigation/mobile/tabBar.container'));
var _discover = _interopRequireDefault(
  require('../../discover/mobile/discover.container')
);
var _singlePost = _interopRequireDefault(
  require('../../post/mobile/singlePost.container')
);
var _blocked = _interopRequireDefault(require('../../profile/mobile/blocked.container'));
var _invites = _interopRequireDefault(require('../../invites/mobile/invites.container'));
var _settings = _interopRequireDefault(
  require('../../profile/mobile/settings.container')
);
var _getTokens = _interopRequireDefault(
  require('../../getTokens/mobile/getTokens.container')
);
var _voterList = _interopRequireDefault(require('../../post/mobile/voterList.container'));
var _wallet = _interopRequireDefault(require('../../wallet/mobile/wallet.container'));
var _headerLeft = _interopRequireDefault(
  require('../../navigation/mobile/headerLeft.component')
);
var _headerRight = _interopRequireDefault(
  require('../../navigation/mobile/headerRight.component')
);
var _headerTitle = _interopRequireDefault(
  require('../../navigation/mobile/headerTitle.component')
);
var _communityMembers = _interopRequireDefault(
  require('../../community/mobile/communityMembers.component')
);
var _styles = require('../../../styles');
var _reactNavigationStack = require('react-navigation-stack');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/mobile/tabRouter.js';
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
var DefaultStack = {
  notifications: { screen: _settings.default, path: 'user/profile/:id/settings' },
  profile: { screen: _profile.default, path: 'user/profile/:id' },
  singlePost: {
    screen: _singlePost.default,
    path: ':community/post/:id',
    navigationOptions: { title: 'Read' }
  },
  singlePostComment: {
    screen: _singlePost.default,
    path: ':community/post/:id/:comment',
    navigationOptions: { title: 'Read' }
  },
  discoverView: {
    screen: _discoverTabs.default,
    path: ':community/:sort',
    navigationOptions: { title: 'Read' }
  },
  discoverTag: { screen: _discoverTabs.default, path: ':community/:sort/:topic' },
  statsView: {
    screen: _stats.default,
    params: {
      icon: _reactNativeWeb.Platform.OS === 'android' ? '📈' : '📈',
      title: 'Stats'
    }
  },
  walletView: {
    screen: _wallet.default,
    params: {
      icon: _reactNativeWeb.Platform.OS === 'android' ? '📈' : '📈',
      title: 'Wallet'
    }
  },
  activityView: {
    screen: _activity.default,
    params: {
      icon: _reactNativeWeb.Platform.OS === 'android' ? '⚡' : '⚡',
      title: 'Activity'
    }
  },
  myProfileView: {
    screen: _profile.default,
    path: 'user/profile',
    params: {
      icon: _reactNativeWeb.Platform.OS === 'android' ? '👤' : '👤',
      title: 'Profile'
    }
  },
  blocked: { screen: _blocked.default, params: { title: 'Blocked' } },
  invites: { screen: _invites.default, params: { title: 'Invites' } },
  getTokens: { screen: _getTokens.default, params: { title: 'Get Tokens' } },
  people: { screen: _voterList.default, params: { title: 'Votes' } },
  communityMembers: {
    screen: _communityMembers.default,
    params: { title: 'Community Members' }
  },
  peopleView: {
    screen: function screen(props) {
      return _react.default.createElement(
        _discover.default,
        (0, _extends2.default)({ active: true, type: 'people', key: 'people' }, props, {
          __source: { fileName: _jsxFileName, lineNumber: 131, columnNumber: 7 }
        })
      );
    }
  },
  inviteList: {
    screen: function screen(props) {
      return _react.default.createElement(
        'inviteListView',
        (0, _extends2.default)({}, props, {
          __source: { fileName: _jsxFileName, lineNumber: 135, columnNumber: 22 }
        })
      );
    },
    params: { title: 'Invite List' }
  }
};
exports.DefaultStack = DefaultStack;
var defaultStackSettings = {
  headerLayoutPreset: 'center',
  cardOverlayEnabled: true,
  cardShadowEnabled: true,
  mode: 'card',
  cardStyle: { elevation: 4 },
  defaultNavigationOptions: function defaultNavigationOptions(props) {
    return _objectSpread(
      {
        cardStyle: { backgroundColor: _styles.colors.white },
        gesturesEnabled: true,
        gestureResponseDistance: { horizontal: _global.fullWidth },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomColor: _global.darkGrey,
          borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth
        },
        headerTitle: _react.default.createElement(
          _headerTitle.default,
          (0, _extends2.default)({}, props, {
            __source: { fileName: _jsxFileName, lineNumber: 165, columnNumber: 18 }
          })
        ),
        headerRight: _react.default.createElement(
          _headerRight.default,
          (0, _extends2.default)({}, props, {
            __source: { fileName: _jsxFileName, lineNumber: 166, columnNumber: 18 }
          })
        ),
        headerLeft: _react.default.createElement(
          _headerLeft.default,
          (0, _extends2.default)({}, props, {
            __source: { fileName: _jsxFileName, lineNumber: 167, columnNumber: 17 }
          })
        )
      },
      _reactNavigationStack.TransitionPresets.SlideFromRightIOS
    );
  }
};
var TabNavigator = (0, _reactNavigationTabs.createBottomTabNavigator)(
  {
    myProfile: {
      screen: (0, _reactNavigationStack.createStackNavigator)(
        DefaultStack,
        _objectSpread(
          _objectSpread({}, defaultStackSettings),
          {},
          { initialRouteName: 'myProfileView' }
        )
      ),
      path: '',
      params: {
        icon: _reactNativeWeb.Platform.OS === 'android' ? '👤' : '👤',
        title: 'Profile'
      }
    },
    wallet: {
      screen: (0, _reactNavigationStack.createStackNavigator)(
        DefaultStack,
        _objectSpread(
          _objectSpread({}, defaultStackSettings),
          {},
          { initialRouteName: 'walletView' }
        )
      ),
      path: 'user/wallet',
      params: {
        icon: _reactNativeWeb.Platform.OS === 'android' ? '💵' : '💵',
        title: 'Wallet'
      }
    },
    createPostTab: {
      screen: function screen() {
        return null;
      },
      path: 'newpost',
      params: {
        icon: _reactNativeWeb.Platform.OS === 'android' ? '📝' : '✍️',
        title: 'New Post'
      }
    },
    activity: {
      screen: (0, _reactNavigationStack.createStackNavigator)(
        DefaultStack,
        _objectSpread(
          _objectSpread({}, defaultStackSettings),
          {},
          { initialRouteName: 'activityView' }
        )
      ),
      path: 'user/activity',
      params: {
        icon: _reactNativeWeb.Platform.OS === 'android' ? '⚡' : '⚡',
        title: 'Activity'
      }
    },
    discover: {
      screen: (0, _reactNavigationStack.createStackNavigator)(
        DefaultStack,
        _objectSpread(
          _objectSpread({}, defaultStackSettings),
          {},
          { initialRouteName: 'discoverView' }
        )
      ),
      path: '',
      params: {
        icon: _reactNativeWeb.Platform.OS === 'android' ? '📰' : '📰',
        title: 'Read'
      }
    }
  },
  {
    order: ['discover', 'wallet', 'createPostTab', 'activity', 'myProfile'],
    initialRouteName: 'discover',
    tabBarComponent: function tabBarComponent(navProps) {
      return _react.default.createElement(_tabBar.default, {
        navigation: navProps.navigation,
        __source: { fileName: _jsxFileName, lineNumber: 241, columnNumber: 34 }
      });
    }
  }
);
exports.TabNavigator = TabNavigator;
var TabContainer = (0, _reactNavigation.createAppContainer)(TabNavigator);
exports.TabContainer = TabContainer;
//# sourceMappingURL=tabRouter.js.map
