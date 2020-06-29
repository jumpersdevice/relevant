'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard3 = require('@babel/runtime/helpers/interopRequireWildcard');
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
var _interopRequireWildcard2 = _interopRequireDefault(
  require('@babel/runtime/helpers/interopRequireWildcard')
);
var _react = _interopRequireWildcard3(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _component = _interopRequireDefault(require('@loadable/component'));
var _awesomeDebouncePromise = _interopRequireDefault(require('awesome-debounce-promise'));
var _routes = _interopRequireDefault(require('./routes'));
var _queryString = _interopRequireDefault(require('query-string'));
var _get = _interopRequireDefault(require('lodash/get'));
var _reactRouterConfig = require('react-router-config');
var _community = require('../../community/community.actions');
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _reactRouterDom = require('react-router-dom');
var _earnings = require('../../wallet/earnings.actions');
var navigationActions = _interopRequireWildcard3(
  require('../../navigation/navigation.actions')
);
var authActions = _interopRequireWildcard3(require('../../auth/auth.actions'));
var _modal = _interopRequireDefault(require('../../ui/modals/modal.container'));
var _styles = require('../../../styles');
var _common = require('@r3l/common');
var _reactSmartbanner = _interopRequireDefault(require('react-smartbanner'));
var _reactGa = _interopRequireDefault(require('react-ga'));
var _social = require('../../../utils/social');
var _tooltip = require('../../tooltip/web/tooltip.component');
var _reactToastify = require('react-toastify');
var _contract = require('../../contract/contract.provider');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/web/app.js';
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
var PriceProvider = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'wallet-price-context';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0, _interopRequireWildcard2.default)(require('../../wallet/price.context'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../wallet/price.context');
    }
    return eval('require.resolve')('../../wallet/price.context');
  }
});
var UpvoteAnimation = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'animation-upvoteAnimation-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../animation/upvoteAnimation.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../animation/upvoteAnimation.component');
    }
    return eval('require.resolve')('../../animation/upvoteAnimation.component');
  }
});
var DownvoteAnimation = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'animation-downvoteAnimation-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../animation/downvoteAnimation.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../animation/downvoteAnimation.component');
    }
    return eval('require.resolve')('../../animation/downvoteAnimation.component');
  }
});
var AnimationContainer = _styledComponents.default.div.withConfig({
  displayName: 'app__AnimationContainer',
  componentId: 'sc-10z8mx4-0'
})(["pointer-events:none;top:'0',left:'0',zIndex:'10000'"]);
if (process.env.BROWSER === true) {
  require('../../../styles/fonts.css');
  require('react-toastify/dist/ReactToastify.css');
  require('react-smartbanner/dist/main.css');
}
var App = (function(_Component) {
  (0, _inherits2.default)(App, _Component);
  var _super = _createSuper(App);
  function App(props) {
    var _this2;
    (0, _classCallCheck2.default)(this, App);
    _this2 = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), 'state', {
      authType: null
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this2),
      'initAnalytics',
      function(_ref) {
        var location = _ref.location,
          history = _ref.history;
        _social.TwitterCT.init('o1p7u');
        _reactGa.default.initialize('UA-51795165-6');
        _social.TwitterCT.pageView();
        _reactGa.default.pageview(location.pathname + location.search);
        history.listen(function(loc) {
          _social.TwitterCT.pageView();
          _reactGa.default.pageview(loc.pathname + loc.search);
        });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this2),
      'setWidth',
      function() {
        _this2.props.actions.setWidth(window.innerWidth);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this2),
      'debouncedSetWidth',
      (0, _awesomeDebouncePromise.default)(_this2.setWidth, 100)
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this2),
      'updateWidth',
      function() {
        _this2.debouncedSetWidth();
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this2),
      'reloadTabs',
      function() {
        var now = new Date().getTime();
        if (now - _this2.backgroundTime > 10 * 60 * 1000) {
          _this2.props.actions.reloadAllTabs();
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this2),
      'handleUserLogin',
      function() {
        var _this2$props = _this2.props,
          auth = _this2$props.auth,
          actions = _this2$props.actions,
          navigation = _this2$props.navigation,
          location = _this2$props.location,
          history = _this2$props.history;
        var screenSize = navigation.screenSize;
        if (auth.user.role === 'temp') {
          return actions.showModal('setHandle');
        }
        if (!auth.user.webOnboard.onboarding) {
          actions.showModal('onboarding');
          actions.webOnboard('onboarding');
        }
        if (auth.invitecode) {
          actions.redeemInvite(auth.invitecode);
          _reactGa.default.event({ category: 'User', action: 'Redeemed Invite' });
        }
        _reactGa.default.set({ userId: auth.user._id });
        actions.getEarnings('pending');
        if (!auth.community && location.pathname === '/') {
          history.replace('/communities');
        }
        if (screenSize) return null;
        return null;
      }
    );
    var _history = props.history;
    _history.listen(function(loc) {
      return _this2.updateCommunity(loc);
    });
    return _this2;
  }
  (0, _createClass2.default)(App, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this3 = this;
        var _this$props = this.props,
          actions = _this$props.actions,
          auth = _this$props.auth,
          location = _this$props.location,
          history = _this$props.history;
        if (process.env.NODE_ENV !== 'development') {
          this.initAnalytics({ location: location, history: history });
        }
        actions.getUser();
        if (auth.user) this.handleUserLogin();
        var parsed = _queryString.default.parse(location.search);
        if (parsed.invitecode) {
          actions.setInviteCode(parsed.invitecode);
          if (auth.isAuthenticated) {
            actions.redeemInvite(parsed.invitecode);
          } else if (!location.pathname.match('resetPassword')) {
            history.push({
              pathname: '/user/signup',
              search: ''.concat(location.search, '&redirect=').concat(location.pathname)
            });
          }
        }
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth);
        window.addEventListener('blur', function() {
          _this3.backgroundTime = new Date().getTime();
        });
        window.addEventListener('focus', function() {
          return _this3.reloadTabs();
        });
      }
    },
    {
      key: 'updateCommunity',
      value: function updateCommunity(location) {
        var _this$props2 = this.props,
          actions = _this$props2.actions,
          auth = _this$props2.auth;
        var route = (0, _reactRouterConfig.matchRoutes)(
          _routes.default,
          location.pathname
        );
        var newCommunity = (0, _get.default)(
          route,
          '['.concat(route.length - 1, '].match.params.community')
        );
        if (
          newCommunity &&
          newCommunity !== auth.community &&
          !_common.BANNED_COMMUNITY_SLUGS.includes(newCommunity)
        ) {
          actions.setCommunity(newCommunity);
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this$props3 = this.props,
          actions = _this$props3.actions,
          auth = _this$props3.auth,
          location = _this$props3.location;
        if (location.pathname !== prevProps.location.pathname) {
          window.scrollTo(0, 0);
        }
        var userId = auth.user ? auth.user._id : null;
        var PrevUserId = prevProps.auth.user ? prevProps.auth.user._id : null;
        if (userId !== PrevUserId) {
          actions.userToSocket(userId);
        }
        if (!prevProps.auth.user && auth.user) {
          this.handleUserLogin();
        }
        if (
          prevProps.auth.user &&
          auth.user &&
          prevProps.auth.user.role === 'temp' &&
          auth.user.role !== 'temp'
        ) {
          this.handleUserLogin();
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props4 = this.props,
          globalModal = _this$props4.globalModal,
          navigation = _this$props4.navigation;
        var screenSize = navigation.screenSize;
        return _react.default.createElement(
          'div',
          { __source: { fileName: _jsxFileName, lineNumber: 217, columnNumber: 7 } },
          _react.default.createElement(_styles.GlobalStyle, {
            __source: { fileName: _jsxFileName, lineNumber: 218, columnNumber: 9 }
          }),
          _react.default.createElement(_reactSmartbanner.default, {
            daysHidden: 0,
            daysReminder: 0,
            title: 'Relevant Communities',
            position: 'top',
            __source: { fileName: _jsxFileName, lineNumber: 219, columnNumber: 9 }
          }),
          _react.default.createElement(_tooltip.TextTooltip, {
            globalEventOff: 'click',
            type: 'dark',
            scrollHide: true,
            id: 'mainTooltip',
            multiline: true,
            __source: { fileName: _jsxFileName, lineNumber: 226, columnNumber: 9 }
          }),
          _react.default.createElement(
            AnimationContainer,
            { __source: { fileName: _jsxFileName, lineNumber: 235, columnNumber: 9 } },
            _react.default.createElement(UpvoteAnimation, {
              __source: { fileName: _jsxFileName, lineNumber: 236, columnNumber: 11 }
            }),
            _react.default.createElement(DownvoteAnimation, {
              __source: { fileName: _jsxFileName, lineNumber: 237, columnNumber: 11 }
            })
          ),
          _react.default.createElement(
            _contract.ContractProvider,
            { __source: { fileName: _jsxFileName, lineNumber: 240, columnNumber: 9 } },
            _react.default.createElement(
              PriceProvider,
              { __source: { fileName: _jsxFileName, lineNumber: 241, columnNumber: 11 } },
              _react.default.createElement(
                _react.Fragment,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 242, columnNumber: 13 }
                },
                _react.default.createElement(_modal.default, {
                  __source: { fileName: _jsxFileName, lineNumber: 243, columnNumber: 15 }
                }),
                _react.default.createElement(_reactToastify.ToastContainer, {
                  __source: { fileName: _jsxFileName, lineNumber: 244, columnNumber: 15 }
                }),
                _react.default.createElement(
                  'div',
                  {
                    style: globalModal && !screenSize ? { filter: 'blur(2px)' } : {},
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 15
                    }
                  },
                  (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
                )
              )
            )
          )
        );
      }
    }
  ]);
  return App;
})(_react.Component);
(0, _defineProperty2.default)(App, 'propTypes', {
  auth: _propTypes.default.object,
  actions: _propTypes.default.object,
  match: _propTypes.default.object,
  location: _propTypes.default.object,
  user: _propTypes.default.object,
  history: _propTypes.default.object,
  route: _propTypes.default.object,
  globalModal: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.string
  ]),
  navigation: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user,
    auth: state.auth,
    navigation: state.navigation,
    globalModal: state.navigation.modal
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(_objectSpread({}, navigationActions), authActions),
        {},
        { getCommunities: _community.getCommunities, getEarnings: _earnings.getEarnings }
      ),
      dispatch
    )
  };
};
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App)
);
exports.default = _default;
//# sourceMappingURL=app.js.map
