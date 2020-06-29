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
var _get = _interopRequireDefault(require('lodash/get'));
var _styles = require('../../../styles');
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/resetPassword.component.js';
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
var ResetPassword = (function(_Component) {
  (0, _inherits2.default)(ResetPassword, _Component);
  var _super = _createSuper(ResetPassword);
  function ResetPassword(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, ResetPassword);
    _this = _super.call(this, props, context);
    _this.validate = _this.validate.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = { message: '', password: null, cPassword: null };
    return _this;
  }
  (0, _createClass2.default)(ResetPassword, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this$props$navigatio = this.props.navigation.state,
          index = _this$props$navigatio.index,
          routes = _this$props$navigatio.routes;
        this.token = (0, _get.default)(routes[index], 'params.token');
      }
    },
    {
      key: 'validate',
      value: function validate() {
        var _this2 = this;
        if (this.state.password) {
          if (this.state.password !== this.state.cPassword) {
            _reactNativeWeb.Alert.alert("Passwords don't match");
            return;
          }
        } else {
          _reactNativeWeb.Alert.alert('Password required');
          return;
        }
        this.props.actions
          .resetPassword(this.state.password, this.token)
          .then(function(success) {
            if (success) {
              _this2.props.navigation.replace('login');
            }
          })
          .catch(_reactNativeWeb.Alert.alert);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
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
            __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.ScrollView,
            {
              keyboardShouldPersistTaps: 'always',
              scrollEnabled: false,
              keyboardDismissMode: 'interactive',
              contentContainerStyle: styles.fieldsParent,
              __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: styles.fieldsInner,
                __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.fieldsInputParent,
                  __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 13 }
                },
                _react.default.createElement(_reactNativeWeb.TextInput, {
                  autoCapitalize: 'none',
                  secureTextEntry: true,
                  keyboardType: 'default',
                  clearTextOnFocus: false,
                  placeholderTextColor: _styles.colors.grey,
                  placeholder: 'new password',
                  onChangeText: function onChangeText(password) {
                    return _this3.setState({ password: password });
                  },
                  value: this.state.password,
                  style: styles.fieldsInput,
                  __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 15 }
                })
              ),
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.fieldsInputParent,
                  __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 13 }
                },
                _react.default.createElement(_reactNativeWeb.TextInput, {
                  autoCapitalize: 'none',
                  secureTextEntry: true,
                  keyboardType: 'default',
                  clearTextOnFocus: false,
                  placeholderTextColor: _styles.colors.grey,
                  placeholder: 'confirm password',
                  onChangeText: function onChangeText(cPassword) {
                    return _this3.setState({ cPassword: cPassword });
                  },
                  value: this.state.cPassword,
                  style: styles.fieldsInput,
                  __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 15 }
                })
              )
            ),
            _react.default.createElement(
              _reactNativeWeb.TouchableHighlight,
              {
                underlayColor: 'transparent',
                style: [styles.largeButton],
                onPress: this.validate,
                __source: { fileName: _jsxFileName, lineNumber: 108, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: styles.largeButtonText,
                  __source: { fileName: _jsxFileName, lineNumber: 113, columnNumber: 13 }
                },
                'next'
              )
            )
          )
        );
      }
    }
  ]);
  return ResetPassword;
})(_react.Component);
(0, _defineProperty2.default)(ResetPassword, 'propTypes', {
  actions: _propTypes.default.object,
  navigation: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  error: { color: 'red', textAlign: 'center' }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
var _default = ResetPassword;
exports.default = _default;
//# sourceMappingURL=resetPassword.component.js.map
