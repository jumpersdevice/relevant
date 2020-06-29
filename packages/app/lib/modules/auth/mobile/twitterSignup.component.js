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
var _reactNativeCodePush = _interopRequireDefault(require('react-native-code-push'));
var _global = require('../../../styles/global');
var _text = require('../../../utils/text');
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _styles = require('../../../styles');
var _TwitterButton = _interopRequireDefault(require('./TwitterButton.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/twitterSignup.component.js';
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
var TwitterSignup = (function(_Component) {
  (0, _inherits2.default)(TwitterSignup, _Component);
  var _super = _createSuper(TwitterSignup);
  function TwitterSignup(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, TwitterSignup);
    _this = _super.call(this, props, context);
    _this.state = { username: '', inProgress: false };
    _this.renderUserName = _this.renderUserName.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.signUp = _this.signUp.bind((0, _assertThisInitialized2.default)(_this));
    _this.checkUser = _this.checkUser.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(TwitterSignup, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        _reactNativeCodePush.default.disallowRestart();
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(next) {
        if (next.auth.twitter && !this.props.auth.twitter) {
          var name = next.auth.twitter.userName;
          this.setState({ username: next.auth.twitter.userName });
          this.checkUser(name);
        }
      }
    },
    {
      key: 'signUp',
      value: (function() {
        var _signUp = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee() {
            var inProgress, twitterProfile, preUser;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      inProgress = this.state.inProgress;
                      if (!inProgress) {
                        _context.next = 3;
                        break;
                      }
                      return _context.abrupt('return', null);
                    case 3:
                      if (!this.usernameExists) {
                        _context.next = 5;
                        break;
                      }
                      return _context.abrupt(
                        'return',
                        _reactNativeWeb.Alert.alert('This handle is already taken')
                      );
                    case 5:
                      twitterProfile = this.props.auth.twitter;
                      preUser = this.props.auth.preUser;
                      if (preUser) {
                        _context.next = 9;
                        break;
                      }
                      return _context.abrupt('return', null);
                    case 9:
                      preUser.handle = this.state.username;
                      this.setState({ inProgress: true });
                      _context.next = 13;
                      return this.props.actions.updateHandle(
                        preUser,
                        twitterProfile.token
                      );
                    case 13:
                      this.setState({ inProgress: false });
                      return _context.abrupt('return', null);
                    case 15:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this
            );
          })
        );
        function signUp() {
          return _signUp.apply(this, arguments);
        }
        return signUp;
      })()
    },
    {
      key: 'checkUser',
      value: function checkUser(name) {
        var _this2 = this;
        var preUser = this.props.auth.preUser;
        if (!preUser) return null;
        this.nameError = null;
        var string = name || this.state.username;
        if (!string) return null;
        var match = _text.NAME_PATTERN.test(string);
        if (!match) {
          return (this.nameError =
            'username can only contain letters, numbers, dashes and underscores');
        }
        this.props.actions.checkUser(string, 'name').then(function(results) {
          if (results && !preUser && results._id !== preUser._id) {
            _this2.usernameExists = true;
            _this2.nameError = 'This handle is already taken';
          } else _this2.usernameExists = false;
          _this2.setState({});
        });
        return true;
      }
    },
    {
      key: 'renderUserName',
      value: function renderUserName() {
        var _this3 = this;
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.fieldsInputParent,
              __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: styles.smallInfo,
                __source: { fileName: _jsxFileName, lineNumber: 97, columnNumber: 11 }
              },
              'Choose your handle'
            ),
            _react.default.createElement(_reactNativeWeb.TextInput, {
              underlineColorAndroid: 'transparent',
              autoCapitalize: 'none',
              autoCorrect: false,
              keyboardType: 'default',
              clearTextOnFocus: false,
              placeholderTextColor: _styles.colors.grey,
              placeholder: 'username',
              onChangeText: function onChangeText(username) {
                username = username.replace('@', '').trim();
                _this3.setState({ username: username });
                _this3.checkUser(username.trim());
              },
              value: '@' + this.state.username,
              style: styles.fieldsInput,
              __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 11 }
            })
          ),
          this.nameError
            ? _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [styles.smallInfo, styles.error],
                  __source: { fileName: _jsxFileName, lineNumber: 116, columnNumber: 11 }
                },
                this.nameError
              )
            : null
        );
      }
    },
    {
      key: 'renderCTA',
      value: function renderCTA() {
        var _this4 = this;
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: {
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            },
            __source: { fileName: _jsxFileName, lineNumber: 124, columnNumber: 7 }
          },
          _react.default.createElement(_TwitterButton.default, {
            type: 'signup',
            auth: this.props.auth,
            admin: this.props.admin,
            actions: this.props.actions,
            __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 9 }
          }),
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: styles.signInText,
              __source: { fileName: _jsxFileName, lineNumber: 138, columnNumber: 9 }
            },
            'or'
          ),
          _react.default.createElement(
            _reactNativeWeb.TouchableOpacity,
            {
              onPress: function onPress() {
                _this4.props.navigation.navigate({ routeName: 'signup' });
              },
              __source: { fileName: _jsxFileName, lineNumber: 139, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.signInText, styles.active],
                __source: { fileName: _jsxFileName, lineNumber: 144, columnNumber: 11 }
              },
              'Sign up with email'
            )
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this5 = this;
        var auth = this.props.auth;
        var inProgress = this.state.inProgress;
        var button = _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            style: [styles.largeButton],
            disabled: inProgress || auth.loading,
            onPress: this.signUp,
            __source: { fileName: _jsxFileName, lineNumber: 154, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: styles.largeButtonText,
              __source: { fileName: _jsxFileName, lineNumber: 159, columnNumber: 9 }
            },
            'Finish'
          )
        );
        if (this.props.auth.loading) {
          return _react.default.createElement(_CustomSpinner.default, {
            __source: { fileName: _jsxFileName, lineNumber: 164, columnNumber: 14 }
          });
        }
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
            __source: { fileName: _jsxFileName, lineNumber: 168, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.ScrollView,
            {
              keyboardShouldPersistTaps: 'always',
              keyboardDismissMode: 'interactive',
              style: { flex: 1 },
              contentContainerStyle: styles.authScrollContent,
              __source: { fileName: _jsxFileName, lineNumber: 175, columnNumber: 9 }
            },
            this.props.auth.twitter ? this.renderUserName() : this.renderCTA(),
            this.props.auth.twitter ? button : null,
            _react.default.createElement(
              _reactNativeWeb.TouchableOpacity,
              {
                onPress: function onPress() {
                  return _this5.props.actions.goToUrl(
                    'https://relevant.community/eula.html'
                  );
                },
                __source: { fileName: _jsxFileName, lineNumber: 184, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [styles.signInText, styles.font12],
                  __source: { fileName: _jsxFileName, lineNumber: 189, columnNumber: 13 }
                },
                'By signing up, you agree to our',
                ' ',
                _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: [styles.signInText, styles.active, styles.font12],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 191,
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
  return TwitterSignup;
})(_react.Component);
exports.default = TwitterSignup;
(0, _defineProperty2.default)(TwitterSignup, 'propTypes', {
  auth: _propTypes.default.object,
  actions: _propTypes.default.object,
  admin: _propTypes.default.object,
  navigation: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  forgot: { textAlign: 'center', marginTop: 5 },
  error: { marginTop: 5, color: 'red', textAlign: 'center' }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=twitterSignup.component.js.map
