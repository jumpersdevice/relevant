'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.CreatePostNavigator = exports.CreatePostStack = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _nav = require('../../../utils/nav');
var _reactNavigation = require('react-navigation');
var _reactNavigationStack = require('react-navigation-stack');
var _url = _interopRequireDefault(require('../../createPost/mobile/url.component'));
var _categories = _interopRequireDefault(
  require('../../createPost/mobile/categories.component')
);
var _headerLeft = _interopRequireDefault(
  require('../../navigation/mobile/headerLeft.component')
);
var _createPostHeaderRight = _interopRequireDefault(
  require('../../createPost/mobile/createPostHeaderRight.component')
);
var _headerTitle = _interopRequireDefault(
  require('../../navigation/mobile/headerTitle.component')
);
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/mobile/createPostRouter.js';
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
var CreatePostStack = (0, _reactNavigationStack.createStackNavigator)(
  {
    createPostUrl: {
      screen: (0, _nav.withProps)(_url.default),
      params: { left: 'Cancel', next: 'Next' }
    },
    createPostTags: {
      screen: (0, _nav.withProps)(_categories.default),
      params: { title: 'Select Tags' }
    }
  },
  {
    initialRouteName: 'createPostUrl',
    headerLayoutPreset: 'center',
    cardOverlayEnabled: true,
    cardShadowEnabled: true,
    defaultNavigationOptions: function defaultNavigationOptions(props) {
      return _objectSpread(
        {
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
              __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 20 }
            })
          ),
          headerRight: _react.default.createElement(
            _createPostHeaderRight.default,
            (0, _extends2.default)({}, props, {
              __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 20 }
            })
          ),
          headerLeft: _react.default.createElement(
            _headerLeft.default,
            (0, _extends2.default)({}, props, {
              __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 19 }
            })
          )
        },
        _reactNavigationStack.TransitionPresets.SlideFromRightIOS
      );
    }
  }
);
exports.CreatePostStack = CreatePostStack;
var CreatePostNavigator = (0, _reactNavigation.createAppContainer)(CreatePostStack);
exports.CreatePostNavigator = CreatePostNavigator;
//# sourceMappingURL=createPostRouter.js.map
