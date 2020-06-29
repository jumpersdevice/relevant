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
var _Ionicons = _interopRequireDefault(require('react-native-vector-icons/Ionicons'));
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/TwitterButton.component.js';
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
require('../../../../publicenv');
var RNTwitterSignIn = _reactNativeWeb.NativeModules.RNTwitterSignIn;
var Constants = {
  TWITTER_COMSUMER_KEY: process.env.TWITTER_COMSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET
};
var TwitterButton = (function(_Component) {
  (0, _inherits2.default)(TwitterButton, _Component);
  var _super = _createSuper(TwitterButton);
  function TwitterButton(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TwitterButton);
    _this = _super.call(this, props);
    _this.state = { loggedIn: false };
    return _this;
  }
  (0, _createClass2.default)(TwitterButton, [
    {
      key: '_twitterSignIn',
      value: (function() {
        var _twitterSignIn2 = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee() {
            var _this2 = this;
            var invitecode, loginData, authToken, authTokenSecret, serverLogin;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      invitecode = this.props.auth.invitecode;
                      RNTwitterSignIn.init(
                        Constants.TWITTER_COMSUMER_KEY,
                        Constants.TWITTER_CONSUMER_SECRET
                      );
                      _context.next = 5;
                      return RNTwitterSignIn.logIn();
                    case 5:
                      loginData = _context.sent;
                      (authToken = loginData.authToken),
                        (authTokenSecret = loginData.authTokenSecret);
                      if (!(!authToken || !authTokenSecret)) {
                        _context.next = 9;
                        break;
                      }
                      throw new Error('Twitter login failed');
                    case 9:
                      _context.next = 11;
                      return this.props.actions.twitterAuth(
                        _objectSpread(
                          _objectSpread({}, loginData),
                          {},
                          { invitecode: invitecode }
                        )
                      );
                    case 11:
                      serverLogin = _context.sent;
                      if (serverLogin) {
                        setTimeout(function() {
                          _this2.props.actions.reloadTab('discover');
                        }, 3000);
                      }
                      _context.next = 17;
                      break;
                    case 15:
                      _context.prev = 15;
                      _context.t0 = _context['catch'](0);
                    case 17:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this,
              [[0, 15]]
            );
          })
        );
        function _twitterSignIn() {
          return _twitterSignIn2.apply(this, arguments);
        }
        return _twitterSignIn;
      })()
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var text = this.props.type === 'signup' ? 'Sign up' : 'Sign In';
        text += ' with Twitter';
        if (this.props.children) text = this.props.children;
        var isLoggedIn = this.props.auth.twitter;
        var connected;
        if (isLoggedIn && !this.props.type === 'signup') {
          connected = _react.default.createElement(
            _uni.BodyText,
            {
              alignSelf: 'center',
              __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 9 }
            },
            'Twitter connected! Log in to complete.'
          );
        }
        return _react.default.createElement(
          _uni.View,
          {
            style: { flex: 0, paddingTop: 20, flexDirection: 'row' },
            __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 7 }
          },
          isLoggedIn
            ? connected
            : _react.default.createElement(
                _uni.View,
                {
                  flex: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 11 }
                },
                _react.default.createElement(
                  _uni.HoverButton,
                  {
                    bg: _styles.colors.twitterBlue,
                    onPress: function onPress() {
                      return _this3._twitterSignIn();
                    },
                    __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 13 }
                  },
                  _react.default.createElement(
                    _uni.View,
                    {
                      fdirection: 'row',
                      align: 'center',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 15
                      }
                    },
                    _react.default.createElement(_Ionicons.default, {
                      borderRadius: 0,
                      name: 'logo-twitter',
                      size: 24,
                      color: 'white',
                      style: { color: 'white', marginRight: 10 },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 17
                      }
                    }),
                    _react.default.createElement(
                      _uni.ButtonText,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                          columnNumber: 17
                        }
                      },
                      text
                    )
                  )
                )
              )
        );
      }
    }
  ]);
  return TwitterButton;
})(_react.Component);
exports.default = TwitterButton;
(0, _defineProperty2.default)(TwitterButton, 'propTypes', {
  type: _propTypes.default.string,
  actions: _propTypes.default.object,
  children: _propTypes.default.node,
  auth: _propTypes.default.object
});
//# sourceMappingURL=TwitterButton.component.js.map
