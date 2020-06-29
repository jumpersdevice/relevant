'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.AppContainer = exports.RootStack = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
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
var _reactNavigation = require('react-navigation');
var _reactNavigationStack = require('react-navigation-stack');
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _auth = _interopRequireDefault(require('../../auth/mobile/auth.container'));
var _articleView = _interopRequireDefault(
  require('../../navigation/mobile/articleView.container')
);
var _error = _interopRequireDefault(require('../../ui/mobile/error.component'));
var _stallScreen = _interopRequireDefault(
  require('../../navigation/mobile/stallScreen.component')
);
var _createPostRouter = require('./createPostRouter');
var _tabRouterWithHelp = _interopRequireDefault(require('./tabRouterWithHelp'));
var _global = require('../../../styles/global');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/mobile/mainRouter.js';
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
var CreatePostWrapper = (function(_Component) {
  (0, _inherits2.default)(CreatePostWrapper, _Component);
  var _super = _createSuper(CreatePostWrapper);
  function CreatePostWrapper() {
    (0, _classCallCheck2.default)(this, CreatePostWrapper);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(CreatePostWrapper, [
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _reactNativeWeb.KeyboardAvoidingView,
          {
            behavior: 'padding',
            style: { flex: 1 },
            keyboardVerticalOffset:
              _reactNativeWeb.Platform.OS === 'android'
                ? _reactNativeWeb.StatusBar.currentHeight
                : 0,
            __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 7 }
          },
          _react.default.createElement(_createPostRouter.CreatePostNavigator, {
            navigation: this.props.navigation,
            __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return CreatePostWrapper;
})(_react.Component);
(0, _defineProperty2.default)(CreatePostWrapper, 'propTypes', {
  navigation: _propTypes.default.object
});
(0, _defineProperty2.default)(
  CreatePostWrapper,
  'router',
  _createPostRouter.CreatePostStack.router
);
var RootStack = (0, _reactNavigationStack.createStackNavigator)(
  {
    auth: { screen: _auth.default, header: false, path: '' },
    main: { screen: _tabRouterWithHelp.default, path: '' },
    stall: { screen: _stallScreen.default },
    error: { screen: _error.default, path: 'error' },
    articleView: { screen: _articleView.default },
    createPost: {
      screen: CreatePostWrapper,
      header: false,
      navigationOptions: _objectSpread(
        {},
        _reactNavigationStack.TransitionPresets.ModalSlideFromBottomIOS
      )
    }
  },
  {
    initialRouteName: 'main',
    headerMode: 'none',
    headerLayoutPreset: 'center',
    cardOverlayEnabled: true,
    cardShadowEnabled: true,
    defaultNavigationOptions: function defaultNavigationOptions() {
      return _objectSpread(
        {
          gesturesEnabled: true,
          gestureResponseDistance: { horizontal: _global.fullWidth },
          cardStyle: { backgroundColor: _styles.colors.white }
        },
        _reactNavigationStack.TransitionPresets.SlideFromRightIOS
      );
    }
  }
);
exports.RootStack = RootStack;
var AppContainer = (0, _reactNavigation.createAppContainer)(RootStack);
exports.AppContainer = AppContainer;
//# sourceMappingURL=mainRouter.js.map
