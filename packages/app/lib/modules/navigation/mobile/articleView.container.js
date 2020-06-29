'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
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
var _reactNativeWebview = _interopRequireDefault(require('react-native-webview'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNativeBottomsheet = _interopRequireDefault(require('react-native-bottomsheet'));
var _reactNativeOrientation = _interopRequireDefault(require('react-native-orientation'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _global = require('../../../styles/global');
var navigationActions = _interopRequireWildcard(require('../navigation.actions'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/articleView.container.js';
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
var styles;
var RWebView;
var ActionSheet = _reactNativeWeb.ActionSheetIOS;
if (_reactNativeWeb.Platform.OS === 'android') {
  RWebView = _reactNativeWebview.default;
  ActionSheet = _reactNativeBottomsheet.default;
  ActionSheet.showActionSheetWithOptions =
    _reactNativeBottomsheet.default.showBottomSheetWithOptions;
} else {
  RWebView = _reactNativeWebview.default;
}
var ArticleView = (function(_Component) {
  (0, _inherits2.default)(ArticleView, _Component);
  var _super = _createSuper(ArticleView);
  function ArticleView(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, ArticleView);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'showActionSheet',
      function() {
        ActionSheet.showActionSheetWithOptions(
          {
            options: ['Open in Browser', 'Share Via...', 'Cancel'],
            cancelButtonIndex: 4
          },
          function(button) {
            switch (button) {
              case 0:
                return _reactNativeWeb.Linking.openURL(_this.url);
              case 1:
                return _this.onShare();
              default:
                return null;
            }
          }
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'onShare',
      (0, _asyncToGenerator2.default)(
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _reactNativeWeb.Share.share({
                      url: _this.url,
                      subject: 'Article From Relevant'
                    });
                  case 3:
                    _context.next = 8;
                    break;
                  case 5:
                    _context.prev = 5;
                    _context.t0 = _context['catch'](0);
                    _reactNativeWeb.Alert.alert(_context.t0.message);
                  case 8:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[0, 5]]
          );
        })
      )
    );
    _this.back = _this.back.bind((0, _assertThisInitialized2.default)(_this));
    _this.onShare = _this.onShare.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      url: null,
      initalUrl: null,
      status: '',
      loading: true,
      progress: 0
    };
    return _this;
  }
  (0, _createClass2.default)(ArticleView, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;
        this.onInteraction = _reactNativeWeb.InteractionManager.runAfterInteractions(
          function() {
            _this2.setState({
              initalUrl: _this2.props.navigation.state.params.uri,
              url: _this2.props.navigation.state.params.uri
            });
          }
        );
        _reactNativeOrientation.default.unlockAllOrientations();
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.onInteraction) this.onInteraction.cancel();
        _reactNativeOrientation.default.lockToPortrait();
      }
    },
    {
      key: 'back',
      value: function back() {
        var _this3 = this;
        if (this.backButtonEnabled) {
          return function() {
            return _this3.webview.goBack();
          };
        }
        return function() {
          return _this3.props.actions.pop('home');
        };
      }
    },
    {
      key: 'renderBack',
      value: function renderBack() {
        var back = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { paddingHorizontal: 10, marginLeft: -10 },
            __source: { fileName: _jsxFileName, lineNumber: 115, columnNumber: 7 }
          },
          _react.default.createElement(_reactNativeWeb.Image, {
            resizeMode: 'contain',
            style: { width: 11, height: 19 },
            source: require('../../../../public/img/backarrow.png'),
            __source: { fileName: _jsxFileName, lineNumber: 116, columnNumber: 9 }
          })
        );
        return _react.default.createElement(
          _reactNativeWeb.TouchableHighlight,
          {
            style: [styles.leftButton],
            underlayColor: 'transparent',
            onPress: this.back(),
            __source: { fileName: _jsxFileName, lineNumber: 124, columnNumber: 7 }
          },
          back
        );
      }
    },
    {
      key: 'renderShare',
      value: function renderShare() {
        var _this4 = this;
        return _react.default.createElement(
          _reactNativeWeb.TouchableHighlight,
          {
            style: [styles.leftButton],
            underlayColor: 'transparent',
            onPress: function onPress() {
              return _this4.showActionSheet();
            },
            __source: { fileName: _jsxFileName, lineNumber: 136, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { paddingHorizontal: 10, marginLeft: 0 },
              __source: { fileName: _jsxFileName, lineNumber: 141, columnNumber: 9 }
            },
            _react.default.createElement(_reactNativeWeb.Image, {
              resizeMode: 'contain',
              style: { width: 22, height: 22 },
              source: require('../../../../public/img/shareOut.png'),
              __source: { fileName: _jsxFileName, lineNumber: 142, columnNumber: 11 }
            })
          )
        );
      }
    },
    {
      key: 'renderFooter',
      value: function renderFooter() {
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: styles.webMenu,
            __source: { fileName: _jsxFileName, lineNumber: 154, columnNumber: 7 }
          },
          this.renderBack(),
          this.renderShare()
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this5 = this;
        var activity;
        var progressEl;
        if (this.state.loading) {
          activity = _react.default.createElement(
            _reactNativeWeb.View,
            {
              pointerEvents: 'none',
              style: { position: 'absolute', bottom: 0, top: 0, left: 0, right: 0 },
              __source: { fileName: _jsxFileName, lineNumber: 167, columnNumber: 9 }
            },
            _react.default.createElement(_reactNativeWeb.ActivityIndicator, {
              style: { position: 'absolute', bottom: 0, top: 0, left: 0, right: 0 },
              animating: this.state.loading,
              size: 'small',
              __source: { fileName: _jsxFileName, lineNumber: 171, columnNumber: 11 }
            })
          );
        }
        var webView = _react.default.createElement(_reactNativeWeb.View, {
          style: { flex: 1 },
          __source: { fileName: _jsxFileName, lineNumber: 180, columnNumber: 19 }
        });
        if (this.state.progress > 0 && this.state.progress < 1) {
          progressEl = _react.default.createElement(_reactNativeWeb.View, {
            style: {
              position: 'absolute',
              height: 3,
              width: _global.fullWidth * this.state.progress,
              backgroundColor: _global.blue
            },
            __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 9 }
          });
          activity = null;
        }
        if (this.state.initalUrl) {
          webView = _react.default.createElement(RWebView, {
            ref: function ref(_ref2) {
              _this5.webview = _ref2;
            },
            scalesPageToFit: true,
            onNavigationStateChange: function onNavigationStateChange(navState) {
              _this5.url = navState.url;
              _this5.backButtonEnabled = navState.canGoBack;
            },
            onError: function onError(err) {
              _reactNativeWeb.Alert.alert(err.message);
            },
            onLoadStart: function onLoadStart() {
              return _this5.setState({ loading: true });
            },
            onLoadEnd: function onLoadEnd() {
              return _this5.setState({ loading: false });
            },
            style: { flex: 1, backgroundColor: 'transparent', marginTop: 0 },
            source: { uri: this.state.initalUrl },
            onProgress: function onProgress(progress) {
              return progress
                ? _this5.setState({ progress: progress })
                : _this5.setState({ progress: 0 });
            },
            __source: { fileName: _jsxFileName, lineNumber: 197, columnNumber: 9 }
          });
        }
        return _react.default.createElement(
          _reactNativeWeb.SafeAreaView,
          {
            style: { flex: 1, backgroundColor: 'white' },
            __source: { fileName: _jsxFileName, lineNumber: 221, columnNumber: 7 }
          },
          progressEl,
          activity,
          webView,
          this.renderFooter()
        );
      }
    }
  ]);
  return ArticleView;
})(_react.Component);
(0, _defineProperty2.default)(ArticleView, 'propTypes', {
  navigation: _propTypes.default.object,
  actions: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  webMenu: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderTopColor: 'black',
    zIndex: 1
  },
  leftButton: { flex: 0, width: 50, alignItems: 'center', justifyContent: 'center' }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
var _default = (0, _reactRedux.connect)(
  function() {
    return {};
  },
  function(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(navigationActions, dispatch) };
  }
)(ArticleView);
exports.default = _default;
//# sourceMappingURL=articleView.container.js.map
