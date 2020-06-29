'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = exports.ShareStack = void 0;
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
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _reactNativeShareExtension = _interopRequireDefault(
  require('react-native-share-extension')
);
var _reactNativeExitApp = _interopRequireDefault(require('react-native-exit-app'));
var createPostActions = _interopRequireWildcard(
  require('../../createPost/createPost.actions')
);
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var communityActions = _interopRequireWildcard(
  require('../../community/community.actions')
);
var _auth2 = _interopRequireDefault(require('../../auth/mobile/auth.component'));
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
var _nav = require('../../../utils/nav');
var _utils = require('../../../utils');
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/mobile/share.container.js';
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
var fullWidth = _reactNativeWeb.Dimensions.get('screen').width;
var fullHeight = _reactNativeWeb.Dimensions.get('screen').height;
_reactNativeWeb.Dimensions.get = function() {
  return { width: fullWidth, height: fullHeight };
};
var Modal = require('react-native-modalbox').default;
var style;
var ShareStack = (0, _reactNavigationStack.createStackNavigator)(
  {
    createPostUrl: {
      screen: (0, _nav.withProps)(_url.default),
      params: { title: 'Share On Relevant', left: 'Close', next: 'Next', share: true }
    },
    createPostTags: {
      screen: (0, _nav.withProps)(_categories.default),
      params: { title: 'Post Category', share: true }
    },
    shareAuth: {
      screen: (0, _nav.withProps)(_auth2.default),
      params: { left: 'Close', share: true }
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
          gestureResponseDistance: { horizontal: fullWidth },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomColor: _global.darkGrey,
            borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
            height: 45
          },
          headerTitle: _react.default.createElement(
            _headerTitle.default,
            (0, _extends2.default)({}, props, {
              __source: { fileName: _jsxFileName, lineNumber: 90, columnNumber: 20 }
            })
          ),
          headerRight: _react.default.createElement(
            _createPostHeaderRight.default,
            (0, _extends2.default)({}, props, {
              __source: { fileName: _jsxFileName, lineNumber: 91, columnNumber: 20 }
            })
          ),
          headerLeft: _react.default.createElement(
            _headerLeft.default,
            (0, _extends2.default)({}, props, {
              __source: { fileName: _jsxFileName, lineNumber: 92, columnNumber: 19 }
            })
          )
        },
        _reactNavigationStack.TransitionPresets.SlideFromRightIOS
      );
    }
  }
);
exports.ShareStack = ShareStack;
var ShareAppContainer = (0, _reactNavigation.createAppContainer)(ShareStack);
var ShareContainer = (function(_Component) {
  (0, _inherits2.default)(ShareContainer, _Component);
  var _super = _createSuper(ShareContainer);
  function ShareContainer(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, ShareContainer);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      token: null
    });
    _this.state = { isOpen: true, type: '', value: '', data: {} };
    _this.closeModal = _this.closeModal.bind((0, _assertThisInitialized2.default)(_this));
    _reactNativeWeb.AppState.addEventListener(
      'change',
      _this.handleAppStateChange.bind((0, _assertThisInitialized2.default)(_this))
    );
    return _this;
  }
  (0, _createClass2.default)(ShareContainer, [
    {
      key: 'componentDidMount',
      value: (function() {
        var _componentDidMount = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee() {
            var community, token, actions, resp, auth, _actions, data, url, words;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      community = 'relevant';
                      this.props.actions.setCommunity(community);
                      _context.next = 5;
                      return _utils.storage.getToken();
                    case 5:
                      token = _context.sent;
                      this.setState({ token: token });
                      if (!token) this.props.actions.replace('shareAuth');
                      actions = this.props.actions;
                      _context.next = 11;
                      return this.props.actions.getUser();
                    case 11:
                      resp = _context.sent;
                      auth = this.props.auth;
                      if (!(resp && auth && auth.user && auth.user.community)) {
                        _context.next = 17;
                        break;
                      }
                      _context.next = 16;
                      return actions.getCommunities();
                    case 16:
                      actions.setCommunity(auth.user.community);
                    case 17:
                      _context.next = 21;
                      break;
                    case 19:
                      _context.prev = 19;
                      _context.t0 = _context['catch'](0);
                    case 21:
                      _context.prev = 21;
                      _actions = this.props.actions;
                      _context.next = 25;
                      return _reactNativeShareExtension.default.data();
                    case 25:
                      data = _context.sent;
                      this.data = data;
                      this.setState({ type: data.type, value: data.value, data: data });
                      url = data.url || data.value;
                      if (url) {
                        words = _utils.text.getWords(url);
                        url = words.find(function(word) {
                          return _utils.post.URL_REGEX.test(word);
                        });
                      }
                      _actions.setCreatePostState({
                        postUrl: url || null,
                        postBody: data.selection || !url ? data.value : '',
                        createPreview: {}
                      });
                      _context.next = 35;
                      break;
                    case 33:
                      _context.prev = 33;
                      _context.t1 = _context['catch'](21);
                    case 35:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this,
              [
                [0, 19],
                [21, 33]
              ]
            );
          })
        );
        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }
        return componentDidMount;
      })()
    },
    {
      key: 'handleAppStateChange',
      value: function handleAppStateChange(currentAppState) {
        var _this2 = this;
        if (currentAppState === 'extension' && !this.state.token) {
          _utils.storage.getToken().then(function(tk) {
            _this2.setState({ token: tk });
            if (tk) _this2.props.actions.replace('createPostUrl');
          });
        }
      }
    },
    {
      key: 'onClose',
      value: function onClose() {
        _reactNativeShareExtension.default.close();
        _reactNativeExitApp.default.exitApp();
      }
    },
    {
      key: 'closeModal',
      value: function closeModal() {
        this.setState({ isOpen: false });
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          Modal,
          {
            backdrop: true,
            style: { backgroundColor: 'transparent', flex: 1 },
            coverScreen: true,
            keyboardTopOffset: 0,
            swipeToClose: false,
            position: 'top',
            entry: 'bottom',
            isOpen: this.state.isOpen,
            onClosed: this.onClose,
            __source: { fileName: _jsxFileName, lineNumber: 189, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.KeyboardAvoidingView,
            {
              behavior: 'padding',
              style: { alignItems: 'center', flex: 1, maxHeight: fullHeight * 0.9 },
              __source: { fileName: _jsxFileName, lineNumber: 203, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: style.modalBody,
                __source: { fileName: _jsxFileName, lineNumber: 211, columnNumber: 11 }
              },
              _react.default.createElement(ShareAppContainer, {
                ref: function ref(navigatorRef) {
                  (0, _nav.setTopLevelNavigator)(navigatorRef);
                },
                screenProps: { close: this.closeModal, share: true },
                __source: { fileName: _jsxFileName, lineNumber: 212, columnNumber: 13 }
              })
            )
          )
        );
      }
    }
  ]);
  return ShareContainer;
})(_react.Component);
(0, _defineProperty2.default)(ShareContainer, 'propTypes', {
  actions: _propTypes.default.object,
  auth: _propTypes.default.object
});
style = _reactNativeWeb.StyleSheet.create({
  modalBody: {
    borderRadius: 10,
    backgroundColor: 'white',
    flexGrow: 1,
    flex: 1,
    width: fullWidth * 0.95,
    marginTop: fullHeight * 0.05,
    marginBottom: 30,
    padding: 0,
    overflow: 'hidden',
    paddingBottom: 0
  }
});
function mapStateToProps(store) {
  return { auth: store.auth, community: store.community };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            _objectSpread(_objectSpread({}, authActions), postActions),
            navigationActions
          ),
          createPostActions
        ),
        communityActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(ShareContainer);
exports.default = _default;
//# sourceMappingURL=share.container.js.map
