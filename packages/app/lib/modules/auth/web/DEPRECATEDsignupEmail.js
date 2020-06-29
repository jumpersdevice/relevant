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
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _utils = require('../../../utils');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _auth = require('../auth.actions');
var _alert = require('../../../utils/alert');
var _reactRouterDom = require('react-router-dom');
var _navigation = require('../../navigation/navigation.actions');
var _reduxformfield = _interopRequireDefault(
  require('../../styled/form/reduxformfield.component')
);
var _reduxformimageupload = _interopRequireDefault(
  require('../../styled/form/reduxformimageupload.component')
);
var _reduxForm = require('redux-form');
var _web = require('../../styled/web');
var _validators = require('../../form/validators');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/DEPRECATEDsignupEmail.js';
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
var SignupEmail = (function(_Component) {
  (0, _inherits2.default)(SignupEmail, _Component);
  var _super = _createSuper(SignupEmail);
  function SignupEmail(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SignupEmail);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'signup',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(data) {
            var invitecode, actions, user, signedUp;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      invitecode = _this.props.auth.invitecode;
                      actions = _this.props.actions;
                      _context.prev = 2;
                      user = {
                        name: data.username,
                        email: data.email,
                        password: data.password,
                        image: data.image
                      };
                      _context.next = 6;
                      return actions.createUser(user, invitecode);
                    case 6:
                      signedUp = _context.sent;
                      if (signedUp) {
                        _this.close();
                      }
                      _context.next = 12;
                      break;
                    case 10:
                      _context.prev = 10;
                      _context.t0 = _context['catch'](2);
                    case 12:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              null,
              [[2, 10]]
            );
          })
        );
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'submit',
      (function() {
        var _ref2 = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee2(vals) {
            var allVals, image;
            return _regenerator.default.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.prev = 0;
                      allVals = _objectSpread({}, vals);
                      if (
                        !(
                          allVals.image &&
                          allVals.image.preview &&
                          allVals.image.fileName
                        )
                      ) {
                        _context2.next = 7;
                        break;
                      }
                      _context2.next = 5;
                      return _utils.s3.toS3Advanced(
                        allVals.image.preview,
                        allVals.image.fileName
                      );
                    case 5:
                      image = _context2.sent;
                      allVals.image = image.url;
                    case 7:
                      _this.signup(allVals);
                      _context2.next = 13;
                      break;
                    case 10:
                      _context2.prev = 10;
                      _context2.t0 = _context2['catch'](0);
                      _alert.browserAlerts.alert(_context2.t0);
                    case 13:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              null,
              [[0, 10]]
            );
          })
        );
        return function(_x2) {
          return _ref2.apply(this, arguments);
        };
      })()
    );
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)(_this));
    _this.signup = _this.signup.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(SignupEmail, [
    {
      key: 'render',
      value: function render() {
        var handleSubmit = this.props.handleSubmit;
        var FORM_FIELDS = [
          {
            name: 'image',
            component: _reduxformimageupload.default,
            imageComponent: _react.default.createElement(_uni.FormImage, {
              __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 25 }
            }),
            type: 'file-upload',
            label: 'User Image',
            validate: []
          },
          {
            name: 'username',
            component: _reduxformfield.default,
            type: 'text',
            label: 'Username',
            autocomplete: 'username',
            validate: [_validators.required, _validators.validCharacters]
          },
          {
            name: 'email',
            type: 'email',
            label: 'Email',
            component: _reduxformfield.default,
            autocomplete: 'username',
            validate: [_validators.required, _validators.email]
          },
          {
            name: 'password',
            type: 'password',
            label: 'Password',
            autocomplete: 'new-password',
            component: _reduxformfield.default,
            validate: [_validators.required]
          },
          {
            name: 'confirmPassword',
            type: 'password',
            autocomplete: 'new-password',
            label: 'Confirm Password',
            component: _reduxformfield.default,
            validate: [_validators.required]
          }
        ];
        return _react.default.createElement(
          _web.Form,
          {
            fdirection: 'column',
            onSubmit: handleSubmit(this.submit),
            __source: { fileName: _jsxFileName, lineNumber: 123, columnNumber: 7 }
          },
          FORM_FIELDS.map(function(field) {
            return _react.default.createElement(
              _reduxForm.Field,
              (0, _extends2.default)({}, field, {
                key: field.name,
                __source: { fileName: _jsxFileName, lineNumber: 125, columnNumber: 11 }
              })
            );
          }),
          _react.default.createElement(
            _web.View,
            {
              display: 'flex',
              fdirection: 'row',
              justify: 'flex-end',
              mt: 6,
              align: 'center',
              __source: { fileName: _jsxFileName, lineNumber: 127, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.LinkFont,
              {
                inline: 1,
                __source: { fileName: _jsxFileName, lineNumber: 128, columnNumber: 11 }
              },
              'By signing up, you agree to our',
              ' ',
              _react.default.createElement(
                _ULink.default,
                {
                  to: '//relevant.community/eula.html',
                  external: true,
                  target: '_blank',
                  inline: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 130, columnNumber: 13 }
                },
                'Terms of Use'
              )
            ),
            _react.default.createElement(
              _web.Button,
              {
                type: 'submit',
                ml: 2.5,
                __source: { fileName: _jsxFileName, lineNumber: 139, columnNumber: 11 }
              },
              'Sign Up'
            )
          )
        );
      }
    }
  ]);
  return SignupEmail;
})(_react.Component);
(0, _defineProperty2.default)(SignupEmail, 'propTypes', {
  location: _propTypes.default.object,
  actions: _propTypes.default.object,
  user: _propTypes.default.object,
  auth: _propTypes.default.object,
  handleSubmit: _propTypes.default.func,
  initialValues: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  return { user: state.auth.user, auth: state.auth };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        loginUser: _auth.loginUser,
        showModal: _navigation.showModal,
        checkUser: _auth.checkUser,
        createUser: _auth.createUser
      },
      dispatch
    )
  };
};
var validate = function validate(values) {
  var errors = {};
  if (!values.password || !values.confirmPassword) {
    return null;
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }
  return errors;
};
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(
    mapStateToProps,
    mapDispatchToProps
  )(
    (0, _reduxForm.reduxForm)({
      form: 'signup',
      validate: validate,
      asyncValidate: _validators.signupAsyncValidation,
      asyncChangeFields: ['username', 'email']
    })(SignupEmail)
  )
);
exports.default = _default;
//# sourceMappingURL=DEPRECATEDsignupEmail.js.map
