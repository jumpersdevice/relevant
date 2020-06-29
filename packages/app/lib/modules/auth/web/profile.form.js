'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = ProfileForm;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _utils = require('../../../utils');
var _reactRedux = require('react-redux');
var _auth = require('../auth.actions');
var _reactFinalForm = require('react-final-form');
var _web = require('../../styled/web');
var _form = require('../form.fields');
var _validators = require('../../form/validators');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/profile.form.js';
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
var Alert = _utils.alert.Alert();
ProfileForm.propTypes = {
  initialValues: _propTypes.default.object,
  additionalFields: _propTypes.default.object,
  close: _propTypes.default.func
};
function ProfileForm(_ref) {
  var _ref$initialValues = _ref.initialValues,
    initialValues = _ref$initialValues === void 0 ? {} : _ref$initialValues,
    _ref$additionalFields = _ref.additionalFields,
    additionalFields = _ref$additionalFields === void 0 ? {} : _ref$additionalFields,
    close = _ref.close;
  var ethLogin = additionalFields.ethLogin,
    signupCallback = additionalFields.signupCallback;
  var signup = useSignUp(additionalFields, close, signupCallback);
  var onSubmit = useOnSubmit(signup);
  var showEmailField = initialValues.email ? null : _form.email;
  var showPass = ethLogin ? null : _form.password;
  var showConfirmPass = showPass ? _form.confirmPassword : null;
  var FORM_FIELDS = [
    _form.image,
    _form.username,
    showEmailField,
    showPass,
    showConfirmPass
  ].filter(function(f) {
    return f;
  });
  return _react.default.createElement(_reactFinalForm.Form, {
    onSubmit: onSubmit,
    validate: _validators.passwordsShouldMatch,
    initialValues: initialValues,
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit;
      return _react.default.createElement(
        _web.Form,
        {
          fdirection: 'column',
          onSubmit: handleSubmit,
          __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 9 }
        },
        FORM_FIELDS.map(function(field) {
          return _react.default.createElement(
            _reactFinalForm.Field,
            (0, _extends2.default)({}, field, {
              key: field.name,
              __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 13 }
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
            __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.LinkFont,
            {
              inline: 1,
              __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 13 }
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
                __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 15 }
              },
              'Terms of Use'
            )
          ),
          _react.default.createElement(
            _web.Button,
            {
              type: 'submit',
              ml: 2.5,
              __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 13 }
            },
            'Sign Up'
          )
        )
      );
    },
    __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 5 }
  });
}
function useOnSubmit(signup) {
  return (0, _react.useCallback)(
    (function() {
      var _ref3 = (0, _asyncToGenerator2.default)(
        _regenerator.default.mark(function _callee(vals) {
          var allVals, img;
          return _regenerator.default.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    allVals = _objectSpread({}, vals);
                    if (
                      !(allVals.image && allVals.image.preview && allVals.image.fileName)
                    ) {
                      _context.next = 7;
                      break;
                    }
                    _context.next = 5;
                    return _utils.s3.toS3Advanced(
                      allVals.image.preview,
                      allVals.image.fileName
                    );
                  case 5:
                    img = _context.sent;
                    allVals.image = img.url;
                  case 7:
                    signup(allVals);
                    _context.next = 13;
                    break;
                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context['catch'](0);
                    Alert.alert(_context.t0.message, 'error');
                  case 13:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[0, 10]]
          );
        })
      );
      return function(_x) {
        return _ref3.apply(this, arguments);
      };
    })(),
    [signup]
  );
}
function useSignUp(additionalFields, close, signupCallback) {
  var auth = (0, _reactRedux.useSelector)(function(state) {
    return state.auth;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var invitecode = auth.invitecode;
  return (0, _react.useCallback)(
    (function() {
      var _ref4 = (0, _asyncToGenerator2.default)(
        _regenerator.default.mark(function _callee2(data) {
          var user;
          return _regenerator.default.wrap(
            function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;
                    user = _objectSpread(
                      {
                        name: data.username,
                        email: data.email,
                        password: data.password,
                        image: data.image
                      },
                      additionalFields
                    );
                    _context2.next = 4;
                    return dispatch((0, _auth.createUser)(user, invitecode));
                  case 4:
                    signupCallback && signupCallback(user);
                    close();
                    _context2.next = 11;
                    break;
                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2['catch'](0);
                    Alert.alert(_context2.t0.message, 'error');
                  case 11:
                  case 'end':
                    return _context2.stop();
                }
              }
            },
            _callee2,
            null,
            [[0, 8]]
          );
        })
      );
      return function(_x2) {
        return _ref4.apply(this, arguments);
      };
    })(),
    [additionalFields, dispatch, invitecode, close, signupCallback]
  );
}
//# sourceMappingURL=profile.form.js.map
