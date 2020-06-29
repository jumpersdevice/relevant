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
var _text = require('../../../utils/text');
var _get = _interopRequireDefault(require('lodash/get'));
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/signup.component.js';
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
var localStyles;
var styles;
var SignUp = (function(_Component) {
  (0, _inherits2.default)(SignUp, _Component);
  var _super = _createSuper(SignUp);
  function SignUp(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, SignUp);
    _this = _super.call(this, props, context);
    _this.validate = _this.validate.bind((0, _assertThisInitialized2.default)(_this));
    _this.checkUser = _this.checkUser.bind((0, _assertThisInitialized2.default)(_this));
    _this.devSkip = _this.devSkip.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      message: '',
      name: null,
      phone: null,
      email: null,
      password: null,
      cPassword: null,
      nameError: null,
      emailError: null,
      twitter: true
    };
    return _this;
  }
  (0, _createClass2.default)(SignUp, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;
        var params = (0, _get.default)(this.props.navigation, 'state.params');
        if (this.props.auth.preUser) {
          this.setState({
            name: this.props.auth.preUser.name || null,
            phone: this.props.auth.preUser.phone || null,
            email: this.props.auth.preUser.email || null,
            password: this.props.auth.preUser.password || null,
            cPassword: this.props.auth.preUser.password || null
          });
        }
        if (params && params.email) {
          this.setState({ email: params.email.trim(), code: params.code });
          setTimeout(function() {
            return _this2.checkEmail();
          }, 100);
        }
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        _reactNativeCodePush.default.disallowRestart();
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev) {
        var auth = this.props.auth;
        if (auth.preUser && prev.auth.preUser !== auth.preUser) {
          this.setState({
            name: auth.preUser.name || null,
            phone: auth.preUser.phone || null,
            email: auth.preUser.email || null,
            password: auth.preUser.password || null,
            cPassword: auth.preUser.password || null
          });
        }
      }
    },
    {
      key: 'checkEmail',
      value: function checkEmail() {
        var _this3 = this;
        var string = this.state.email;
        var valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(string);
        if (!valid) return this.setState({ emailError: 'invalid email' });
        this.props.actions.checkUser(string, 'email').then(function(results) {
          if (results) {
            _this3.setState({ emailError: 'This email has already been used' });
          }
        });
        return null;
      }
    },
    {
      key: 'checkUser',
      value: function checkUser(name) {
        var _this4 = this;
        this.nameError = null;
        var toCheck = name || this.state.name;
        if (toCheck) {
          var string = toCheck;
          var match = _text.NAME_PATTERN.test(string);
          if (match) {
            this.props.actions.checkUser(string, 'name').then(function(results) {
              if (results) {
                _this4.usernameExists = true;
                _this4.nameError = 'This username is already taken';
              } else _this4.usernameExists = false;
              _this4.setState({});
            });
          } else {
            this.nameError =
              'username can only contain letters, numbers, dashes and underscores';
          }
        }
      }
    },
    {
      key: 'validate',
      value: function validate() {
        var user = {
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          password: this.state.password
        };
        if (this.usernameExists) {
          return _reactNativeWeb.Alert.alert('this username is taken');
        }
        if (!_text.NAME_PATTERN.test(this.state.name)) {
          return _reactNativeWeb.Alert.alert(
            'username can only contain letters, numbers, dashes and underscores'
          );
        }
        if (this.state.name) {
          if (this.state.name.length > 15) {
            return _reactNativeWeb.Alert.alert('name must be less than 15 characters');
          }
        } else {
          return _reactNativeWeb.Alert.alert('name required');
        }
        if (!this.state.email) {
          return _reactNativeWeb.Alert.alert('email required');
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
          return _reactNativeWeb.Alert.alert('invalid email address');
        }
        if (this.state.emailError) {
          return _reactNativeWeb.Alert.alert(this.state.emailError);
        }
        if (this.state.password) {
          if (this.state.password !== this.state.cPassword) {
            return _reactNativeWeb.Alert.alert("Passwords don't match");
          }
        } else {
          return _reactNativeWeb.Alert.alert('Password required');
        }
        this.props.actions.setPreUser(user);
        (0, _reactNativeDismissKeyboard.default)();
        this.props.actions.push({ key: 'imageUpload', title: 'image' });
        return null;
      }
    },
    {
      key: 'devSkip',
      value: function devSkip() {
        var randomNum = String(Math.floor(Math.random() * 1000));
        var randomName = 'test' + randomNum;
        var randomEmail = 'test' + randomNum + '@test.com';
        this.setState({
          name: randomName,
          email: randomEmail,
          password: 'test',
          cPassword: 'test'
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this5 = this;
        styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
        return _react.default.createElement(
          _reactNativeWeb.KeyboardAvoidingView,
          {
            behavior: 'padding',
            style: { flex: 1 },
            keyboardVerticalOffset:
              _reactNativeWeb.Platform.OS === 'android'
                ? _reactNativeWeb.StatusBar.currentHeight / 2 + 64
                : _global.IphoneX
                ? 88
                : 64,
            __source: { fileName: _jsxFileName, lineNumber: 196, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.ScrollView,
            {
              keyboardDismissMode: 'interactive',
              keyboardShouldPersistTaps: 'always',
              style: { flex: 1 },
              contentContainerStyle: styles.authScrollContent,
              __source: { fileName: _jsxFileName, lineNumber: 203, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: styles.fieldsInner,
                __source: { fileName: _jsxFileName, lineNumber: 209, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.fieldsInputParent,
                  __source: { fileName: _jsxFileName, lineNumber: 210, columnNumber: 13 }
                },
                _react.default.createElement(_reactNativeWeb.TextInput, {
                  underlineColorAndroid: 'transparent',
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  keyboardType: 'default',
                  clearTextOnFocus: false,
                  placeholderTextColor: _styles.colors.grey,
                  placeholder: 'username',
                  onChangeText: function onChangeText(name) {
                    _this5.setState({ name: name.trim() });
                    _this5.checkUser(name.trim());
                  },
                  value: this.state.name,
                  style: styles.fieldsInput,
                  __source: { fileName: _jsxFileName, lineNumber: 211, columnNumber: 15 }
                })
              ),
              this.nameError
                ? _react.default.createElement(
                    _reactNativeWeb.Text,
                    {
                      style: [styles.smallInfo, styles.error],
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 15
                      }
                    },
                    this.nameError
                  )
                : null,
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.fieldsInputParent,
                  __source: { fileName: _jsxFileName, lineNumber: 230, columnNumber: 13 }
                },
                _react.default.createElement(_reactNativeWeb.TextInput, {
                  underlineColorAndroid: 'transparent',
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  keyboardType: 'email-address',
                  clearTextOnFocus: false,
                  placeholderTextColor: _styles.colors.grey,
                  placeholder: 'email',
                  onBlur: function onBlur() {
                    return _this5.checkEmail();
                  },
                  onChangeText: function onChangeText(email) {
                    return _this5.setState({ email: email.trim(), emailError: null });
                  },
                  value: this.state.email,
                  style: styles.fieldsInput,
                  __source: { fileName: _jsxFileName, lineNumber: 231, columnNumber: 15 }
                })
              ),
              this.state.emailError
                ? _react.default.createElement(
                    _reactNativeWeb.Text,
                    {
                      style: [styles.smallInfo, styles.error],
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 248,
                        columnNumber: 15
                      }
                    },
                    this.state.emailError
                  )
                : null,
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.fieldsInputParent,
                  __source: { fileName: _jsxFileName, lineNumber: 253, columnNumber: 13 }
                },
                _react.default.createElement(_reactNativeWeb.TextInput, {
                  underlineColorAndroid: 'transparent',
                  autoCapitalize: 'none',
                  secureTextEntry: true,
                  keyboardType: 'default',
                  placeholderTextColor: _styles.colors.grey,
                  placeholder: 'password',
                  onChangeText: function onChangeText(password) {
                    return _this5.setState({ password: password });
                  },
                  value: this.state.password,
                  style: styles.fieldsInput,
                  __source: { fileName: _jsxFileName, lineNumber: 254, columnNumber: 15 }
                })
              ),
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.fieldsInputParent,
                  __source: { fileName: _jsxFileName, lineNumber: 267, columnNumber: 13 }
                },
                _react.default.createElement(_reactNativeWeb.TextInput, {
                  underlineColorAndroid: 'transparent',
                  autoCapitalize: 'none',
                  secureTextEntry: true,
                  keyboardType: 'default',
                  clearTextOnFocus: false,
                  placeholderTextColor: _styles.colors.grey,
                  placeholder: 'confirm password',
                  onChangeText: function onChangeText(cPassword) {
                    return _this5.setState({ cPassword: cPassword });
                  },
                  value: this.state.cPassword,
                  style: styles.fieldsInput,
                  __source: { fileName: _jsxFileName, lineNumber: 268, columnNumber: 15 }
                })
              )
            ),
            _react.default.createElement(
              _reactNativeWeb.TouchableOpacity,
              {
                style: [styles.largeButton, { marginTop: 20 }],
                onPress: this.validate,
                __source: { fileName: _jsxFileName, lineNumber: 283, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: styles.largeButtonText,
                  __source: { fileName: _jsxFileName, lineNumber: 287, columnNumber: 13 }
                },
                'next'
              )
            ),
            _react.default.createElement(
              _reactNativeWeb.TouchableOpacity,
              {
                onPress: function onPress() {
                  return _this5.props.actions.goToUrl(
                    'https://relevant.community/eula.html'
                  );
                },
                __source: { fileName: _jsxFileName, lineNumber: 290, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [styles.signInText, styles.font12],
                  __source: { fileName: _jsxFileName, lineNumber: 295, columnNumber: 13 }
                },
                'By signing up, you agree to our',
                ' ',
                _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: [styles.signInText, styles.active, styles.font12],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 15
                    }
                  },
                  'Terms of Use'
                )
              )
            )
          )
        );
      }
    }
  ]);
  return SignUp;
})(_react.Component);
(0, _defineProperty2.default)(SignUp, 'propTypes', {
  auth: _propTypes.default.object,
  actions: _propTypes.default.object,
  navigation: _propTypes.default.object
});
localStyles = _reactNativeWeb.StyleSheet.create({
  error: { marginTop: 5, color: 'red', textAlign: 'center' }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
var _default = SignUp;
exports.default = _default;
//# sourceMappingURL=signup.component.js.map
