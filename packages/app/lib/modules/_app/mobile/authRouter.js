'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthNavigator = exports.AuthStack = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _nav = require('../../../utils/nav');
var _reactNavigation = require('react-navigation');
var _reactNavigationStack = require('react-navigation-stack');
var _twitterSignup = _interopRequireDefault(
  require('../../auth/mobile/twitterSignup.component')
);
var _imageUpload = _interopRequireDefault(
  require('../../auth/mobile/imageUpload.component')
);
var _forgot = _interopRequireDefault(require('../../auth/mobile/forgot.component'));
var _resetPassword = _interopRequireDefault(
  require('../../auth/mobile/resetPassword.component')
);
var _auth = _interopRequireDefault(require('../../auth/mobile/auth.component'));
var _login = _interopRequireDefault(require('../../auth/mobile/login.component'));
var _signup = _interopRequireDefault(require('../../auth/mobile/signup.component'));
var _headerLeft = _interopRequireDefault(
  require('../../navigation/mobile/headerLeft.component')
);
var _headerRight = _interopRequireDefault(
  require('../../navigation/mobile/headerRight.component')
);
var _headerTitle = _interopRequireDefault(
  require('../../navigation/mobile/headerTitle.component')
);
var _styles = require('../../../styles');
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/mobile/authRouter.js';
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
var AuthStack = (0, _reactNavigationStack.createStackNavigator)(
  {
    mainAuth: { screen: _auth.default, navigationOptions: { header: null } },
    login: {
      screen: (0, _nav.withProps)(_login.default),
      path: 'login',
      params: { title: 'Sign In' }
    },
    signup: {
      screen: (0, _nav.withProps)(_signup.default),
      params: { title: 'Sign Up' }
    },
    twitterSignup: {
      screen: (0, _nav.withProps)(_twitterSignup.default),
      params: { title: 'Sign Up' }
    },
    imageUpload: {
      screen: (0, _nav.withProps)(_imageUpload.default),
      params: { title: 'Upload Image' }
    },
    forgot: {
      screen: (0, _nav.withProps)(_forgot.default),
      params: { title: 'Reset Password' }
    },
    resetPassword: {
      screen: (0, _nav.withProps)(_resetPassword.default),
      uriPrefix: 'Relevant://',
      path: 'user/resetPassword/:token',
      params: { title: 'Reset Password' }
    }
  },
  {
    initialRouteName: 'mainAuth',
    headerLayoutPreset: 'center',
    mode: 'card',
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
              __source: { fileName: _jsxFileName, lineNumber: 86, columnNumber: 20 }
            })
          ),
          headerRight: _react.default.createElement(
            _headerRight.default,
            (0, _extends2.default)({}, props, {
              __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 20 }
            })
          ),
          headerLeft: _react.default.createElement(
            _headerLeft.default,
            (0, _extends2.default)({}, props, {
              __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 19 }
            })
          )
        },
        _reactNavigationStack.TransitionPresets.SlideFromRightIOS
      );
    }
  }
);
exports.AuthStack = AuthStack;
var AuthNavigator = (0, _reactNavigation.createAppContainer)(AuthStack);
exports.AuthNavigator = AuthNavigator;
//# sourceMappingURL=authRouter.js.map
