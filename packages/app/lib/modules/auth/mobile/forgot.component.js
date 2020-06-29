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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNativeDismissKeyboard = _interopRequireDefault(
  require('react-native-dismiss-keyboard')
);
var _global = require('../../../styles/global');
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/forgot.component.js';
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
var Forgot = (function(_Component) {
  (0, _inherits2.default)(Forgot, _Component);
  var _super = _createSuper(Forgot);
  function Forgot(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Forgot);
    _this = _super.call(this, props, context);
    _this.forgotPassword = _this.forgotPassword.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.state = { username: null, sendingEmail: false };
    return _this;
  }
  (0, _createClass2.default)(Forgot, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.userInput.focus();
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.props.actions.setAuthStatusText();
      }
    },
    {
      key: 'forgotPassword',
      value: (function() {
        var _forgotPassword = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee() {
            var res;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      if (this.state.username) {
                        _context.next = 4;
                        break;
                      }
                      _reactNativeWeb.Alert.alert('must enter a username or password');
                      return _context.abrupt('return');
                    case 4:
                      this.userInput.blur();
                      (0, _reactNativeDismissKeyboard.default)();
                      this.setState({ sendingEmail: true });
                      _context.next = 9;
                      return this.props.actions.forgotPassword(this.state.username);
                    case 9:
                      res = _context.sent;
                      if (res && res.email) {
                        this.props.navigation.navigate('mainAuth');
                        this.setState({ sendingEmail: false });
                        _reactNativeWeb.Alert.alert(
                          'We have set an email to '
                            .concat(
                              res.email,
                              '\n      with a link to reset the password for '
                            )
                            .concat(res.username, '.'),
                          "If you don't see a password reset email in your inbox, please check your spam folder."
                        );
                      }
                      _context.next = 16;
                      break;
                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context['catch'](0);
                      _reactNativeWeb.Alert.alert(_context.t0);
                    case 16:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this,
              [[0, 13]]
            );
          })
        );
        function forgotPassword() {
          return _forgotPassword.apply(this, arguments);
        }
        return forgotPassword;
      })()
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var spinner;
        if (this.state.sendingEmail) {
          spinner = _react.default.createElement(_CustomSpinner.default, {
            __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 17 }
          });
        }
        var KBView = _reactNativeWeb.KeyboardAvoidingView;
        if (this.props.share) {
          KBView = _reactNativeWeb.View;
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
            __source: { fileName: _jsxFileName, lineNumber: 85, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.ScrollView,
            {
              keyboardShouldPersistTaps: 'always',
              keyboardDismissMode: 'interactive',
              scrollEnabled: false,
              contentContainerStyle: styles.fieldsParent,
              __source: { fileName: _jsxFileName, lineNumber: 92, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: styles.fieldsInner,
                __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.fieldsInputParent,
                  __source: { fileName: _jsxFileName, lineNumber: 99, columnNumber: 13 }
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
                    return _this2.setState({ username: username });
                  },
                  value: this.state.username,
                  style: styles.fieldsInput,
                  __source: { fileName: _jsxFileName, lineNumber: 100, columnNumber: 15 }
                })
              )
            ),
            _react.default.createElement(
              _reactNativeWeb.TouchableHighlight,
              {
                onPress: this.forgotPassword,
                underlayColor: 'transparent',
                style: [styles.largeButton],
                __source: { fileName: _jsxFileName, lineNumber: 116, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: styles.largeButtonText,
                  __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 13 }
                },
                'Send Password Reset Link'
              )
            ),
            spinner
          )
        );
      }
    }
  ]);
  return Forgot;
})(_react.Component);
(0, _defineProperty2.default)(Forgot, 'propTypes', {
  actions: _propTypes.default.object,
  navigation: _propTypes.default.object,
  share: _propTypes.default.bool
});
Forgot.propTypes = { actions: _propTypes.default.object };
var localStyles = _reactNativeWeb.StyleSheet.create({});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
var _default = Forgot;
exports.default = _default;
//# sourceMappingURL=forgot.component.js.map
