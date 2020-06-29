'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.confirmPassword = exports.password = exports.email = exports.username = exports.image = void 0;
var _reduxformfield = _interopRequireDefault(
  require('../styled/form/reduxformfield.component')
);
var _reduxformimageupload = _interopRequireDefault(
  require('../styled/form/reduxformimageupload.component')
);
var _validators = require('../form/validators');
var _uni = require('../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/form.fields.js';
var image = {
  name: 'image',
  component: _reduxformimageupload.default,
  placeholder: '/img/blueR.png',
  imageComponent: React.createElement(_uni.FormImage, {
    __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 19 }
  }),
  type: 'file-upload',
  label: 'User Image'
};
exports.image = image;
var username = {
  name: 'username',
  component: _reduxformfield.default,
  type: 'text',
  label: 'Username',
  autocomplete: 'username',
  validate: (0, _validators.compose)(
    _validators.required,
    _validators.validCharacters,
    _validators.asyncUsername
  )
};
exports.username = username;
var email = {
  name: 'email',
  type: 'email',
  label: 'Email',
  component: _reduxformfield.default,
  autocomplete: 'username',
  validate: (0, _validators.compose)(
    _validators.required,
    _validators.email,
    _validators.asyncEmail
  )
};
exports.email = email;
var password = {
  name: 'password',
  type: 'password',
  label: 'Password',
  autocomplete: 'new-password',
  component: _reduxformfield.default,
  validate: _validators.required
};
exports.password = password;
var confirmPassword = {
  name: 'confirmPassword',
  type: 'password',
  autocomplete: 'new-password',
  label: 'Confirm Password',
  component: _reduxformfield.default,
  validate: _validators.required
};
exports.confirmPassword = confirmPassword;
//# sourceMappingURL=form.fields.js.map
