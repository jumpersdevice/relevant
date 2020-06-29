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
var _reactNativeCodePush = _interopRequireDefault(require('react-native-code-push'));
var _reactNativeDismissKeyboard = _interopRequireDefault(
  require('react-native-dismiss-keyboard')
);
var _global = require('../../../styles/global');
var _styles = require('../../../styles');
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _TwitterButton = _interopRequireDefault(require('./TwitterButton.component'));
var _socialButtons = require('../socialButtons');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/login.component.js';
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
var Login = (function(_Component) {
  (0, _inherits2.default)(Login, _Component);
  var _super = _createSuper(Login);
  function Login(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Login);
    _this = _super.call(this, props, context);
    _this.login = _this.login.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = { bool: false, notifText: null, username: null, password: null };
    return _this;
  }
  (0, _createClass2.default)(Login, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        _reactNativeCodePush.default.disallowRestart();
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.props.actions.setAuthStatusText();
      }
    },
    {
      key: 'login',
      value: function login() {
        if (!this.state.username) {
          _reactNativeWeb.Alert.alert('must enter username');
          return;
        }
        if (!this.state.password) {
          _reactNativeWeb.Alert.alert('must enter password');
          return;
        }
        (0, _reactNativeDismissKeyboard.default)();
        this.props.actions.loginUser({
          name: this.state.username,
          password: this.state.password,
          twitter: this.props.auth.twitter
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var actions = this.props.actions;
        var KBView = _reactNativeWeb.KeyboardAvoidingView;
        if (this.props.share) {
          KBView = _reactNativeWeb.View;
        }
        var local =
          this.state.username &&
          this.state.password &&
          this.state.username.length &&
          this.state.password.length;
        if (this.props.auth.twitter) local = true;
        var twitterConnect = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [{ justifyContent: 'center', alignItems: 'center' }],
            __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: styles.signInText,
              __source: { fileName: _jsxFileName, lineNumber: 89, columnNumber: 9 }
            },
            'Sign in with your Relevant account to finish'
          )
        );
        var signIn = _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            onPress: this.login,
            style: [styles.largeButton],
            __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: styles.largeButtonText,
              __source: { fileName: _jsxFileName, lineNumber: 97, columnNumber: 9 }
            },
            'sign in'
          )
        );
        if (this.props.auth.loading) {
          return _react.default.createElement(_CustomSpinner.default, {
            __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 14 }
          });
        }
        return _react.default.createElement(
          KBView,
          {
            behavior: 'padding',
            style: { flex: 1 },
            keyboardVerticalOffset:
              _reactNativeWeb.Platform.OS === 'android'
                ? _reactNativeWeb.StatusBar.currentHeight / 2 + 64
                : _global.IphoneX
                ? 88
                : 64,
            __source: { fileName: _jsxFileName, lineNumber: 106, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.ScrollView,
            {
              keyboardShouldPersistTaps: 'always',
              keyboardDismissMode: 'interactive',
              contentContainerStyle: styles.authScrollContent,
              __source: { fileName: _jsxFileName, lineNumber: 113, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: styles.fieldsInner,
                __source: { fileName: _jsxFileName, lineNumber: 118, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.fieldsInputParent,
                  __source: { fileName: _jsxFileName, lineNumber: 119, columnNumber: 13 }
                },
                _react.default.createElement(_reactNativeWeb.TextInput, {
                  ref: function ref(c) {
                    return (_this2.userInput = c);
                  },
                  underlineColorAndroid: 'transparent',
                  autoCorrect: false,
                  autoCapitalize: 'none',
                  clearTextOnFocus: false,
                  placeholderTextColor: _styles.colors.grey,
                  placeholder: 'username or email',
                  onChangeText: function onChangeText(username) {
                    return _this2.setState({ username: username.trim() });
                  },
                  value: this.state.username,
                  style: styles.fieldsInput,
                  __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 15 }
                })
              ),
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.fieldsInputParent,
                  __source: { fileName: _jsxFileName, lineNumber: 134, columnNumber: 13 }
                },
                _react.default.createElement(_reactNativeWeb.TextInput, {
                  ref: function ref(c) {
                    return (_this2.passInput = c);
                  },
                  underlineColorAndroid: 'transparent',
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  secureTextEntry: true,
                  keyboardType: 'default',
                  clearTextOnFocus: false,
                  placeholderTextColor: _styles.colors.grey,
                  placeholder: 'password',
                  onChangeText: function onChangeText(password) {
                    return _this2.setState({ password: password.trim() });
                  },
                  value: this.state.password,
                  style: styles.fieldsInput,
                  __source: { fileName: _jsxFileName, lineNumber: 135, columnNumber: 15 }
                })
              ),
              local
                ? null
                : _react.default.createElement(
                    _reactNativeWeb.View,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 15
                      }
                    },
                    _react.default.createElement(
                      _reactNativeWeb.Text,
                      {
                        style: styles.signInText,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 17
                        }
                      },
                      'or'
                    ),
                    _react.default.createElement(_TwitterButton.default, {
                      auth: this.props.auth,
                      actions: this.props.actions,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 17
                      }
                    })
                  ),
              !local &&
                _react.default.createElement(
                  _reactNativeWeb.View,
                  {
                    style: { marginTop: 18 },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 15
                    }
                  },
                  _react.default.createElement(_socialButtons.ConnectDesktopButton, {
                    text: 'Sign in with Desktop Browser',
                    onPress: function onPress() {
                      return actions.showModal('connectDesktop');
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 17
                    }
                  })
                ),
              _react.default.createElement(_reactNativeWeb.View, {
                style: { flex: 1 },
                __source: { fileName: _jsxFileName, lineNumber: 164, columnNumber: 13 }
              }),
              this.props.auth.twitter ? twitterConnect : null
            ),
            local ? signIn : null,
            _react.default.createElement(
              _reactNativeWeb.TouchableOpacity,
              {
                onPress: function onPress() {
                  _this2.props.navigation.navigate({
                    routeName: 'forgot',
                    params: { title: 'Forgot Password' }
                  });
                },
                __source: { fileName: _jsxFileName, lineNumber: 170, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [styles.signInText, styles.active],
                  __source: { fileName: _jsxFileName, lineNumber: 178, columnNumber: 13 }
                },
                'Forgot your password?'
              )
            )
          )
        );
      }
    }
  ]);
  return Login;
})(_react.Component);
(0, _defineProperty2.default)(Login, 'propTypes', {
  actions: _propTypes.default.object,
  auth: _propTypes.default.object,
  navigation: _propTypes.default.object,
  share: _propTypes.default.bool
});
Login.propTypes = {
  auth: _propTypes.default.object,
  actions: _propTypes.default.object,
  navigation: _propTypes.default.object,
  share: _propTypes.default.bool
};
var localStyles = _reactNativeWeb.StyleSheet.create({
  forgot: { textAlign: 'center', marginTop: 5 }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
var _default = Login;
exports.default = _default;
//# sourceMappingURL=login.component.js.map
