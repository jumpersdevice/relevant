'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
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
var _reactNativeGlobalProps = require('react-native-global-props');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNativeOrientation = _interopRequireDefault(require('react-native-orientation'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _reactNativePushNotification = _interopRequireDefault(
  require('react-native-push-notification')
);
var _reactNativeSafariView = _interopRequireDefault(require('react-native-safari-view'));
var _mainRouter = require('./mainRouter');
var _reactNativeFirebase = require('react-native-firebase');
var _investAnimation = _interopRequireDefault(
  require('../../animation/mobile/investAnimation.component')
);
var _heartAnimation = _interopRequireDefault(
  require('../../animation/mobile/heartAnimation.component')
);
var _upvoteAnimation = _interopRequireDefault(
  require('../../animation/upvoteAnimation.component')
);
var _downvoteAnimation = _interopRequireDefault(
  require('../../animation/downvoteAnimation.component')
);
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var notifActions = _interopRequireWildcard(require('../../activity/activity.actions'));
var tooltipActions = _interopRequireWildcard(require('../../tooltip/tooltip.actions'));
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var _earnings = require('../../wallet/earnings.actions');
var _community = require('../../community/community.actions');
var _banner = _interopRequireDefault(require('../../bannerPrompt/banner.container'));
var _tooltip2 = _interopRequireDefault(require('../../tooltip/mobile/tooltip.container'));
var _global = require('../../../styles/global');
var _queryString = _interopRequireDefault(require('query-string'));
var _common = require('@r3l/common');
var _price = _interopRequireDefault(require('../../wallet/price.context'));
var _bottomSheet = require('../../ui/mobile/bottomSheet');
var modals = _interopRequireWildcard(require('../../ui/modals/mobile.lookup'));
var _styles = require('../../../styles');
var _Ionicons = _interopRequireDefault(require('react-native-vector-icons/Ionicons'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/mobile/app.container.js';
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
global.Buffer = global.Buffer || require('buffer').Buffer;
_Ionicons.default.loadFont();
var Analytics = (0, _reactNativeFirebase.analytics)();
var customTextProps = { style: { fontFamily: 'HelveticaNeue' } };
(0, _reactNativeGlobalProps.setCustomText)(customTextProps);
_reactNativeWeb.StatusBar.setBarStyle('dark-content');
_reactNativeWeb.StatusBar.setBackgroundColor(_styles.colors.white);
var Application = (function(_Component) {
  (0, _inherits2.default)(Application, _Component);
  var _super = _createSuper(Application);
  function Application(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Application);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleOpenURL',
      function(url) {
        var _this$props = _this.props,
          actions = _this$props.actions,
          navigation = _this$props.navigation,
          auth = _this$props.auth;
        if (url.url.match('://callback')) return;
        var params = url.url.split(/\/\//)[1].split(/\/|\?/);
        var newCommunity = params[1];
        newCommunity = newCommunity && newCommunity.replace(/user|admin|info/, '');
        if (url.url.match('/user/confirm')) {
          var user = params[2];
          var confirmCode = params[3];
          actions.confirmEmail(user, confirmCode);
        }
        if (
          !newCommunity ||
          newCommunity === 'user' ||
          newCommunity === 'info' ||
          newCommunity === 'admin'
        ) {
          newCommunity = null;
        }
        if (
          newCommunity &&
          newCommunity !== '' &&
          newCommunity !== auth.community &&
          !_common.BANNED_COMMUNITY_SLUGS.includes(newCommunity)
        ) {
          actions.setCommunity(newCommunity);
        }
        var query = url.url.split('?')[1];
        var parsed = _queryString.default.parse(query);
        if (parsed.invitecode && !auth.isAuthenticated) {
          actions.setInviteCode(parsed.invitecode);
          navigation.navigate('twitterSignup');
        }
        if (parsed.invitecode && auth.isAuthenticated) {
          actions.redeemInvite(parsed.invitecode);
        }
      }
    );
    _this.state = { newName: null, height: _global.fullHeight };
    _this.backgroundTime = 0;
    return _this;
  }
  (0, _createClass2.default)(Application, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        var actions = this.props.actions;
        _reactNativeWeb.AppState.addEventListener(
          'change',
          this.handleAppStateChange.bind(this)
        );
        var _Dimensions$get = _reactNativeWeb.Dimensions.get('window'),
          width = _Dimensions$get.width;
        this.props.actions.setWidth(width);
        actions.getUser().then(
          (function() {
            var _ref = (0, _asyncToGenerator2.default)(
              _regenerator.default.mark(function _callee(user) {
                var community;
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        if (user) {
                          _context.next = 2;
                          break;
                        }
                        return _context.abrupt(
                          'return',
                          _this2.props.actions.setScrollTab('discover', { tab: 1 })
                        );
                      case 2:
                        Analytics.setUserId(user._id);
                        community = user.community;
                        if (community) actions.setCommunity(community);
                        actions.getEarnings('pending');
                        return _context.abrupt('return', null);
                      case 7:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            );
            return function(_x) {
              return _ref.apply(this, arguments);
            };
          })()
        );
        actions.getCommunities();
        _reactNativePushNotification.default.setApplicationIconBadgeNumber(0);
        _reactNativeWeb.Linking.addEventListener('url', this.handleOpenURL);
        this.fullHeight = _global.fullHeight;
        _reactNativeOrientation.default.lockToPortrait();
        if (_reactNativeSafariView.default.addEventListener) {
          _reactNativeSafariView.default.addEventListener('onDismiss', function() {
            _reactNativeOrientation.default.lockToPortrait();
          });
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev) {
        var _this$props2 = this.props,
          auth = _this$props2.auth,
          actions = _this$props2.actions;
        if (!prev.auth.user && auth.user) {
          Analytics.setUserId(auth.user._id);
          actions.userToSocket(auth.user._id);
          actions.getNotificationCount();
          var community = auth.user.community;
          if (community) actions.setCommunity(community);
          if (auth.invitecode) {
            actions.redeemInvite(auth.invitecode);
          }
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _reactNativeWeb.Linking.removeEventListener('url', this.handleOpenURL);
        _reactNativeWeb.AppState.removeEventListener(
          'change',
          this.handleAppStateChange.bind(this)
        );
      }
    },
    {
      key: 'handleAppStateChange',
      value: function handleAppStateChange(currentAppState) {
        var navigation = this.props.navigation;
        var state = navigation.state;
        if (currentAppState === 'active' && this.props.auth.user) {
          this.props.actions.userToSocket(this.props.auth.user._id);
          this.props.actions.getNotificationCount();
          this.props.actions.tooltipReady(true);
          _reactNativePushNotification.default.setApplicationIconBadgeNumber(0);
          var now = new Date().getTime();
          if (this.backgroundTime + 10 * 60 * 1000 < now) {
            if (!state.routes) return null;
            var tabNavigator = state.routes[0];
            if (!tabNavigator.routes) return null;
            var currentTab = tabNavigator.routes[tabNavigator.index].routeName;
            this.props.actions.reloadTab(currentTab);
            return this.props.actions.reloadAllTabs();
          }
        }
        this.backgroundTime = new Date().getTime();
        return true;
      }
    },
    {
      key: 'renderModal',
      value: function renderModal() {
        var _this3 = this;
        var globalModal = this.props.globalModal;
        if (!globalModal) return null;
        var modalProps = modals[globalModal] || globalModal;
        if (typeof modalProps === 'string') return null;
        var Body = modalProps.Body;
        var bodyProps = modalProps.bodyProps ? modalProps.bodyProps : {};
        var close = function close() {
          return _this3.props.actions.hideModal();
        };
        return _react.default.createElement(
          _bottomSheet.BottomSheet,
          (0, _extends2.default)({}, modalProps, {
            close: close,
            visible: true,
            __source: { fileName: _jsxFileName, lineNumber: 230, columnNumber: 7 }
          }),
          _react.default.createElement(
            Body,
            (0, _extends2.default)({}, bodyProps, {
              close: close,
              __source: { fileName: _jsxFileName, lineNumber: 231, columnNumber: 9 }
            })
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var platformStyles = {};
        if (_reactNativeWeb.Platform.OS === 'android') {
          var height = this.state.height - _reactNativeWeb.StatusBar.currentHeight;
          platformStyles = { height: height };
        } else {
          platformStyles = { flex: 1 };
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: _objectSpread(
              _objectSpread({}, platformStyles),
              {},
              { backgroundColor: 'black' }
            ),
            __source: { fileName: _jsxFileName, lineNumber: 246, columnNumber: 7 }
          },
          _react.default.createElement(
            _price.default,
            { __source: { fileName: _jsxFileName, lineNumber: 247, columnNumber: 9 } },
            _react.default.createElement(_mainRouter.AppContainer, {
              navigation: this.props.navigation,
              __source: { fileName: _jsxFileName, lineNumber: 248, columnNumber: 11 }
            }),
            _react.default.createElement(_banner.default, {
              isMobile: true,
              __source: { fileName: _jsxFileName, lineNumber: 249, columnNumber: 11 }
            }),
            this.renderModal(),
            _react.default.createElement(_tooltip2.default, {
              __source: { fileName: _jsxFileName, lineNumber: 251, columnNumber: 11 }
            }),
            _react.default.createElement(_investAnimation.default, {
              __source: { fileName: _jsxFileName, lineNumber: 252, columnNumber: 11 }
            }),
            _react.default.createElement(_heartAnimation.default, {
              __source: { fileName: _jsxFileName, lineNumber: 253, columnNumber: 11 }
            }),
            _react.default.createElement(_downvoteAnimation.default, {
              __source: { fileName: _jsxFileName, lineNumber: 254, columnNumber: 11 }
            }),
            _react.default.createElement(_upvoteAnimation.default, {
              __source: { fileName: _jsxFileName, lineNumber: 255, columnNumber: 11 }
            })
          )
        );
      }
    }
  ]);
  return Application;
})(_react.Component);
(0, _defineProperty2.default)(Application, 'propTypes', {
  actions: _propTypes.default.object,
  auth: _propTypes.default.object,
  globalModal: _propTypes.default.string,
  navigation: _propTypes.default.object
});
(0, _defineProperty2.default)(Application, 'router', _mainRouter.RootStack.router);
function mapStateToProps(state) {
  return {
    auth: state.auth,
    error: state.error.universal,
    globalModal: state.navigation.modal,
    discoverTab: state.navigation.discover.tab
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            _objectSpread(
              _objectSpread(_objectSpread({}, authActions), notifActions),
              userActions
            ),
            navigationActions
          ),
          tooltipActions
        ),
        {},
        { getEarnings: _earnings.getEarnings, getCommunities: _community.getCommunities }
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Application);
exports.default = _default;
//# sourceMappingURL=app.container.js.map
