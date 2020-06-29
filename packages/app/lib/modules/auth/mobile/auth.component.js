'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
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
var _react = _interopRequireWildcard(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _rnPrompt = _interopRequireDefault(require('rn-prompt'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var adminActions = _interopRequireWildcard(require('../../admin/admin.actions'));
var authActions = _interopRequireWildcard(require('../auth.actions'));
var _global = require('../../../styles/global');
var _get = _interopRequireDefault(require('lodash/get'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/auth.component.js';
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
var Auth = (function(_Component) {
  (0, _inherits2.default)(Auth, _Component);
  var _super = _createSuper(Auth);
  function Auth(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Auth);
    _this = _super.call(this, props, context);
    _this.slides = [1, 2, 3, 4];
    _this.state = {
      visibleHeight: _reactNativeWeb.Dimensions.get('window').height,
      xOffset: 0,
      currentIndex: 0
    };
    _this.scrollToPage = _this.scrollToPage.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.signup = _this.signup.bind((0, _assertThisInitialized2.default)(_this));
    _this.login = _this.login.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderIndicator = _this.renderIndicator.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.listview = null;
    _this.changeRow = _this.changeRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.onScrollEnd = _this.onScrollEnd.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(Auth, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        setTimeout(function() {
          return _this2.setState({ changed: [false, false, false] });
        }, 100);
      }
    },
    {
      key: 'onScrollEnd',
      value: function onScrollEnd(e) {
        var contentOffset = e.nativeEvent.contentOffset;
        var viewSize = e.nativeEvent.layoutMeasurement;
        var pageNum = Math.floor(contentOffset.x / viewSize.width);
        this.setState({ currentIndex: pageNum });
      }
    },
    {
      key: 'login',
      value: function login() {
        this.props.navigation.navigate({ routeName: 'login' });
      }
    },
    {
      key: 'signup',
      value: function signup() {
        return this.props.navigation.navigate({
          routeName: 'twitterSignup',
          title: 'Signup'
        });
      }
    },
    {
      key: 'changeRow',
      value: function changeRow(event, changed) {
        if (event && event.s1) this.setState({ currentIndex: event.s1 });
        if (changed && changed.s1) this.setState({ changed: changed.s1 });
      }
    },
    {
      key: 'scrollToPage',
      value: function scrollToPage(index) {
        this.setState({ currentIndex: index });
        this.listview.scrollToIndex({ index: index });
      }
    },
    {
      key: 'renderIndicator',
      value: function renderIndicator() {
        var _this3 = this;
        var indicator = [];
        if (!this.slides) return indicator;
        if (this.slides.length) {
          this.slides.forEach(function(slide, i) {
            var active = _this3.state.currentIndex === i;
            indicator.push(
              _react.default.createElement(
                _reactNativeWeb.TouchableWithoutFeedback,
                {
                  onPress: function onPress() {
                    return _this3.scrollToPage(i);
                  },
                  key: i,
                  __source: { fileName: _jsxFileName, lineNumber: 91, columnNumber: 11 }
                },
                _react.default.createElement(_reactNativeWeb.View, {
                  style: [
                    styles.indicatorItem,
                    { backgroundColor: active ? 'black' : 'white' }
                  ],
                  __source: { fileName: _jsxFileName, lineNumber: 92, columnNumber: 13 }
                })
              )
            );
          });
        }
        return indicator;
      }
    },
    {
      key: 'renderRow',
      value: function renderRow(_ref) {
        var index = _ref.index;
        function sentance(text, special) {
          var words = text.split(/\s/);
          var l = words.length - 1;
          return words.map(function(t, j) {
            if (
              special.find(function(w) {
                return t.replace(/\.|,/, '') === w;
              })
            ) {
              return _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  key: j + t,
                  allowFontScaling: false,
                  style: [styles.strokeText, styles.relevant],
                  __source: { fileName: _jsxFileName, lineNumber: 112, columnNumber: 13 }
                },
                t + (l === j ? '' : ' ')
              );
            }
            return _react.default.createElement(
              _reactNativeWeb.Text,
              {
                key: j + t,
                allowFontScaling: false,
                style: [styles.slideText],
                __source: { fileName: _jsxFileName, lineNumber: 122, columnNumber: 11 }
              },
              t + (l === j ? '' : ' ')
            );
          });
        }
        switch (index) {
          case 0:
            return _react.default.createElement(
              _reactNativeWeb.View,
              { __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 11 } },
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: [styles.authSlide, { background: 'pink' }],
                  __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 13 }
                },
                sentance('Curated by communities, not clicks', [
                  'Relevant',
                  'communities',
                  'clicks'
                ]),
                _react.default.createElement(_reactNativeWeb.Text, {
                  allowFontScaling: false,
                  style: styles.slideText,
                  __source: { fileName: _jsxFileName, lineNumber: 139, columnNumber: 15 }
                })
              ),
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.splashEmojiContainer,
                  __source: { fileName: _jsxFileName, lineNumber: 141, columnNumber: 13 }
                },
                _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: styles.splashEmoji,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 15
                    }
                  },
                  '\u270C\uFE0F'
                )
              )
            );
          case 1:
            return _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: styles.authSlide,
                __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 11 }
              },
              sentance('Discover content that’s relevant to you', ['relevant', 'you']),
              _react.default.createElement(_reactNativeWeb.Text, {
                allowFontScaling: false,
                style: styles.slideText,
                __source: { fileName: _jsxFileName, lineNumber: 150, columnNumber: 13 }
              })
            );
          case 2:
            return _react.default.createElement(
              _reactNativeWeb.View,
              {
                key: index,
                style: styles.authSlide,
                __source: { fileName: _jsxFileName, lineNumber: 155, columnNumber: 11 }
              },
              sentance('Connect with thought leaders, build trust and earn rewards', [
                'rewards',
                'trust'
              ]),
              _react.default.createElement(_reactNativeWeb.Text, {
                allowFontScaling: false,
                style: styles.slideText,
                __source: { fileName: _jsxFileName, lineNumber: 160, columnNumber: 13 }
              })
            );
          case 3:
            return _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: styles.authSlide,
                __source: { fileName: _jsxFileName, lineNumber: 165, columnNumber: 11 }
              },
              sentance(
                'Find your community and help us build a better information environment for all',
                ['Join', 'community', 'for', 'all']
              ),
              _react.default.createElement(_reactNativeWeb.Text, {
                allowFontScaling: false,
                style: styles.slideText,
                __source: { fileName: _jsxFileName, lineNumber: 170, columnNumber: 13 }
              })
            );
          default:
            return _react.default.createElement(_reactNativeWeb.View, {
              key: index,
              style: styles.authSlide,
              __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 16 }
            });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this;
        var share = (0, _get.default)(this.props.navigation, 'state.params');
        var auth = this.props.auth;
        var isAuthenticated = auth.isAuthenticated;
        var intro = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flex: 1, justifyContent: 'center' },
            __source: { fileName: _jsxFileName, lineNumber: 184, columnNumber: 7 }
          },
          _react.default.createElement(_reactNativeWeb.FlatList, {
            horizontal: true,
            scrollEnabled: true,
            ref: function ref(c) {
              _this4.listview = c;
            },
            decelerationRate: 'fast',
            showsHorizontalScrollIndicator: false,
            automaticallyAdjustContentInsets: false,
            contentContainerStyle: styles.authSlidesParent,
            renderItem: this.renderRow,
            keyExtractor: function keyExtractor(item, index) {
              return index.toString();
            },
            data: this.slides,
            onMomentumScrollEnd: this.onScrollEnd,
            pagingEnabled: true,
            __source: { fileName: _jsxFileName, lineNumber: 185, columnNumber: 9 }
          }),
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.indicatorParent,
              __source: { fileName: _jsxFileName, lineNumber: 201, columnNumber: 9 }
            },
            this.renderIndicator()
          )
        );
        if (share)
          intro = _react.default.createElement(_reactNativeWeb.View, {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 205, columnNumber: 24 }
          });
        var cta = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: styles.authPadding,
            __source: { fileName: _jsxFileName, lineNumber: 208, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.TouchableOpacity,
            {
              onPress: this.signup,
              style: styles.largeButton,
              __source: { fileName: _jsxFileName, lineNumber: 209, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: styles.largeButtonText,
                __source: { fileName: _jsxFileName, lineNumber: 210, columnNumber: 11 }
              },
              'Sign Up Now'
            )
          ),
          _react.default.createElement(
            _reactNativeWeb.TouchableOpacity,
            {
              style: {},
              onPress: this.login,
              __source: { fileName: _jsxFileName, lineNumber: 213, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: { flexDirection: 'row', alignSelf: 'center' },
                __source: { fileName: _jsxFileName, lineNumber: 214, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  allowFontScaling: false,
                  style: styles.signInText,
                  __source: { fileName: _jsxFileName, lineNumber: 215, columnNumber: 13 }
                },
                'Already have an account?'
              ),
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [styles.signInText, { color: '#3E3EFF' }],
                  __source: { fileName: _jsxFileName, lineNumber: 218, columnNumber: 13 }
                },
                ' Sign In.'
              )
            )
          )
        );
        if (share) {
          cta = _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flex: 1, alignSelf: 'center' },
              __source: { fileName: _jsxFileName, lineNumber: 226, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: {
                  fontFamily: 'Libre Caslon Display',
                  fontSize: 34,
                  alignSelf: 'center',
                  textAlign: 'center',
                  padding: 20,
                  lineHeight: 44
                },
                __source: { fileName: _jsxFileName, lineNumber: 227, columnNumber: 11 }
              },
              'Ooops',
              '\n',
              'You are not logged in',
              '\n',
              'Please sign in via',
              '\n',
              'Relevant App'
            )
          );
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [
              {
                height: isAuthenticated
                  ? this.state.visibleHeight - 60
                  : this.state.visibleHeight
              },
              styles.authParent
            ],
            __source: { fileName: _jsxFileName, lineNumber: 244, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.logoContainer,
              __source: { fileName: _jsxFileName, lineNumber: 254, columnNumber: 9 }
            },
            _react.default.createElement(_reactNativeWeb.Image, {
              source: require('../../../../public/img/logo.png'),
              style: styles.authLogo,
              __source: { fileName: _jsxFileName, lineNumber: 255, columnNumber: 11 }
            })
          ),
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.authPadding,
              __source: { fileName: _jsxFileName, lineNumber: 257, columnNumber: 9 }
            },
            _react.default.createElement(_reactNativeWeb.View, {
              style: styles.authDivider,
              __source: { fileName: _jsxFileName, lineNumber: 258, columnNumber: 11 }
            })
          ),
          share ? null : intro,
          cta,
          _react.default.createElement(_rnPrompt.default, {
            title: this.promptTitle || '',
            visible: this.state.promptVisible,
            onCancel: function onCancel() {
              return _this4.setState({ promptVisible: false });
            },
            onSubmit: function onSubmit() {
              _this4.props.navigation.navigate({ key: 'twitterSignup', title: 'Signup' });
              _this4.setState({ promptVisible: false });
            },
            __source: { fileName: _jsxFileName, lineNumber: 265, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return Auth;
})(_react.Component);
(0, _defineProperty2.default)(Auth, 'propTypes', {
  auth: _propTypes.default.object,
  navigation: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  adjust: { fontSize: 38, lineHeight: 30 },
  strokeText: {
    fontSize: _global.smallScreen ? 32 : 36,
    fontFamily: 'HelveticaNeueLTStd-BdOu',
    lineHeight:
      _reactNativeWeb.Platform.OS === 'ios'
        ? _global.smallScreen
          ? 47
          : 55
        : _global.smallScreen
        ? 39
        : 46,
    color: 'black'
  },
  slideText: {
    fontFamily: 'HelveticaNeue',
    fontSize: _global.smallScreen ? 30 : 34,
    lineHeight: _global.smallScreen ? 40 : 45,
    color: 'black'
  },
  relevant: { height: _global.smallScreen ? 40 : 45 },
  authSlidesParent: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start'
  },
  authSlide: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: _global.fullWidth - 40,
    marginHorizontal: 20
  },
  indicatorParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30
  },
  indicatorItem: {
    marginLeft: 5,
    marginRight: 5,
    height: 8,
    width: 8,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1
  },
  authDivider: {
    height: 5,
    marginTop: _global.fullHeight / 40,
    marginBottom: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderTopColor: 'black'
  },
  logoContainer: {
    marginTop: _global.fullHeight / 40,
    height: _global.fullHeight / 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: 'auto',
    flexDirection: 'row'
  },
  authLogo: { resizeMode: 'contain', flex: 1 },
  authParent: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingVertical: 20
  },
  authPadding: { paddingHorizontal: 20 },
  splashEmojiContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  splashEmoji: {
    alignSelf: 'center',
    fontSize: _reactNativeWeb.Platform.OS === 'android' ? 50 : 65
  }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
var mapStateToProps = function mapStateToProps(state) {
  return { auth: state.auth, admin: state.admin };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(_objectSpread({}, authActions), adminActions),
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Auth);
exports.default = _default;
//# sourceMappingURL=auth.component.js.map
