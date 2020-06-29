'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.compose = exports.passwordsShouldMatch = exports.signupAsyncValidation = exports.asyncUsername = exports.asyncEmail = exports.validCharacters = exports.email = exports.required = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _text = require('../../utils/text');
var _auth = require('../auth/auth.actions');
var required = function required(value) {
  return value || typeof value === 'number' ? undefined : 'Required';
};
exports.required = required;
var email = function email(value) {
  if (!value) {
    return undefined;
  }
  var valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(value);
  if (valid) {
    return undefined;
  }
  return 'Not a valid e-mail';
};
exports.email = email;
var validCharacters = function validCharacters(value) {
  var match = _text.NAME_PATTERN.test(value);
  if (!match) {
    return 'Can only contain letters, \nnumbers, dashes and underscores';
  }
  return undefined;
};
exports.validCharacters = validCharacters;
var asyncEmail = (function() {
  var _ref = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee(value) {
      var results;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return (0, _auth.checkUser)(value, 'email', true)();
            case 2:
              results = _context.sent;
              if (!results) {
                _context.next = 5;
                break;
              }
              return _context.abrupt('return', 'This email has already been used');
            case 5:
              return _context.abrupt('return', undefined);
            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return function asyncEmail(_x) {
    return _ref.apply(this, arguments);
  };
})();
exports.asyncEmail = asyncEmail;
var asyncUsername = (function() {
  var _ref2 = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee2(value) {
      var results;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              if (!value) {
                _context2.next = 6;
                break;
              }
              _context2.next = 3;
              return (0, _auth.checkUser)(value, 'name', true)();
            case 3:
              results = _context2.sent;
              if (!results) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt('return', 'This username is already taken');
            case 6:
              return _context2.abrupt('return', undefined);
            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2);
    })
  );
  return function asyncUsername(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
exports.asyncUsername = asyncUsername;
var signupAsyncValidation = (function() {
  var _ref3 = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee3(values) {
      var errors, error, _error, _error2;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch ((_context3.prev = _context3.next)) {
            case 0:
              errors = {};
              if (!values.username) {
                _context3.next = 6;
                break;
              }
              _context3.next = 4;
              return asyncUsername(values.username);
            case 4:
              error = _context3.sent;
              if (error) {
                errors.username = error;
              }
            case 6:
              if (!values.email) {
                _context3.next = 11;
                break;
              }
              _context3.next = 9;
              return asyncEmail(values.email);
            case 9:
              _error = _context3.sent;
              if (_error) {
                errors.email = _error;
              }
            case 11:
              if (!values.handle) {
                _context3.next = 16;
                break;
              }
              _context3.next = 14;
              return asyncUsername(values.handle);
            case 14:
              _error2 = _context3.sent;
              if (_error2) {
                errors.handle = _error2;
              }
            case 16:
              if (!Object.keys(errors).length) {
                _context3.next = 18;
                break;
              }
              throw errors;
            case 18:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3);
    })
  );
  return function signupAsyncValidation(_x3) {
    return _ref3.apply(this, arguments);
  };
})();
exports.signupAsyncValidation = signupAsyncValidation;
var passwordsShouldMatch = function passwordsShouldMatch(values) {
  var errors = {};
  if (!values.password || !values.confirmPassword) {
    return null;
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }
  return errors;
};
exports.passwordsShouldMatch = passwordsShouldMatch;
var compose = function compose() {
  for (
    var _len = arguments.length, validators = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    validators[_key] = arguments[_key];
  }
  return function(value) {
    return validators.reduce(function(error, validator) {
      return error || validator(value);
    }, undefined);
  };
};
exports.compose = compose;
//# sourceMappingURL=validators.js.map
