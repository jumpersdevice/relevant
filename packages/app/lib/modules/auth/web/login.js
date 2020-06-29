'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _web = require('../../styled/web');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _styles = require('../../../styles');
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _queryString = _interopRequireDefault(require('query-string'));
var _auth = require('../auth.actions');
var _reactRouterDom = require('react-router-dom');
var _navigation = require('../../navigation/navigation.actions');
var _reduxformfield = _interopRequireDefault(
  require('../../styled/form/reduxformfield.component')
);
var _reduxForm = require('redux-form');
var _validators = require('../../form/validators');
var _login = _interopRequireDefault(require('./login.3box'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/login.js';
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
var twitterIcon = require('../../../../public/img/icons/twitter_white.png');
var LoginForm = (function(_Component) {
  (0, _inherits2.default)(LoginForm, _Component);
  var _super = _createSuper(LoginForm);
  function LoginForm() {
    var _this;
    (0, _classCallCheck2.default)(this, LoginForm);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'login',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(data) {
            var user, loggedIn;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      user = { name: data.username, password: data.password };
                      _context.next = 4;
                      return _this.props.actions.loginUser(user);
                    case 4:
                      loggedIn = _context.sent;
                      if (loggedIn) {
                        _this.props.close();
                      }
                      _context.next = 10;
                      break;
                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context['catch'](0);
                    case 10:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              null,
              [[0, 8]]
            );
          })
        );
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    return _this;
  }
  (0, _createClass2.default)(LoginForm, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          location = _this$props.location,
          handleSubmit = _this$props.handleSubmit,
          username = _this$props.username,
          password = _this$props.password;
        var invitecode = this.props.auth.invitecode;
        var local = username && username.length && password && password.length;
        var _queryString$parse = _queryString.default.parse(location.search),
          redirect = _queryString$parse.redirect;
        if (!redirect) redirect = location.pathname;
        var FORM_FIELDS = [
          {
            label: 'Username or email',
            component: _reduxformfield.default,
            name: 'username',
            autocomplete: 'username',
            type: 'text',
            validate: [_validators.required]
          },
          {
            type: 'password',
            component: _reduxformfield.default,
            label: 'Password',
            name: 'password',
            autocomplete: 'current-password',
            validate: [_validators.required]
          }
        ];
        var socialSignup = _react.default.createElement(
          _uni.LinkFont,
          {
            shrink: 1,
            mt: [0, 4],
            __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 7 }
          },
          'Not registered yet?',
          ' ',
          _react.default.createElement(
            'a',
            {
              onClick: function onClick() {
                _this2.props.actions.showModal('signupSocial');
              },
              __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 9 }
            },
            'Sign up'
          )
        );
        return _react.default.createElement(
          _web.Form,
          {
            fdirection: 'column',
            onSubmit: handleSubmit(this.login),
            __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 7 }
          },
          FORM_FIELDS.map(function(field) {
            return _react.default.createElement(
              _reduxForm.Field,
              (0, _extends2.default)({}, field, {
                key: field.name,
                __source: { fileName: _jsxFileName, lineNumber: 89, columnNumber: 11 }
              })
            );
          }),
          _react.default.createElement(
            _web.View,
            {
              mt: 2,
              display: 'flex',
              fdirection: 'column',
              align: 'flex-start',
              justify: 'flex-start',
              __source: { fileName: _jsxFileName, lineNumber: 91, columnNumber: 9 }
            },
            _react.default.createElement(
              'a',
              {
                onClick: function onClick() {
                  _this2.props.actions.showModal('forgot');
                },
                __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.LinkFont,
                {
                  c: _styles.colors.blue,
                  __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 13 }
                },
                'Forgot Your Password?'
              )
            ),
            local
              ? _react.default.createElement(
                  _web.View,
                  {
                    fdirection: 'row',
                    mt: [4, 2],
                    align: 'center',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 13
                    }
                  },
                  _react.default.createElement(
                    _web.Button,
                    {
                      onClick: this.submit,
                      type: 'submit',
                      mr: [2, 0],
                      fdirection: 'row',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 15
                      }
                    },
                    ' ',
                    'Sign In',
                    ' '
                  ),
                  socialSignup
                )
              : null
          ),
          _react.default.createElement(
            _web.View,
            { __source: { fileName: _jsxFileName, lineNumber: 116, columnNumber: 9 } },
            !local
              ? _react.default.createElement(
                  _web.View,
                  {
                    fdirection: ['row', 'column'],
                    align: ['center', 'stretch'],
                    mt: [4, 2],
                    flex: 1,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 13
                    }
                  },
                  _react.default.createElement(
                    _ULink.default,
                    {
                      to: '/auth/twitter?redirect='
                        .concat(redirect, '&invitecode=')
                        .concat(invitecode),
                      external: true,
                      rel: 'nofollow',
                      mr: [2, 0],
                      mt: [0, 2],
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                        columnNumber: 15
                      }
                    },
                    _react.default.createElement(
                      _uni.ViewButton,
                      {
                        flex: 1,
                        bg: _styles.colors.twitterBlue,
                        fdirection: 'row',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 131,
                          columnNumber: 17
                        }
                      },
                      _react.default.createElement(_uni.Image, {
                        source: twitterIcon,
                        w: 2.5,
                        h: 2.5,
                        mr: 1.5,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 132,
                          columnNumber: 19
                        }
                      }),
                      _react.default.createElement(
                        _uni.LinkFont,
                        {
                          c: _styles.colors.white,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 133,
                            columnNumber: 19
                          }
                        },
                        'Sign In with Twitter'
                      )
                    )
                  ),
                  _react.default.createElement(_login.default, {
                    close: this.props.close,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 15
                    }
                  }),
                  socialSignup
                )
              : null
          )
        );
      }
    }
  ]);
  return LoginForm;
})(_react.Component);
(0, _defineProperty2.default)(LoginForm, 'propTypes', {
  location: _propTypes.default.object,
  auth: _propTypes.default.object,
  actions: _propTypes.default.object,
  close: _propTypes.default.func,
  handleSubmit: _propTypes.default.func,
  username: _propTypes.default.string,
  password: _propTypes.default.string
});
var selector = (0, _reduxForm.formValueSelector)('login');
var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread(
    _objectSpread(
      { user: state.auth.user, auth: state.auth },
      selector(state, 'username', 'password')
    ),
    {},
    { initialValues: {}, enableReinitialize: true }
  );
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      { loginUser: _auth.loginUser, showModal: _navigation.showModal },
      dispatch
    )
  };
};
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(
    mapStateToProps,
    mapDispatchToProps
  )((0, _reduxForm.reduxForm)({ form: 'login' })(LoginForm))
);
exports.default = _default;
//# sourceMappingURL=login.js.map
