'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reduxformimageupload = _interopRequireDefault(
  require('../../styled/form/reduxformimageupload.component')
);
var _uni = require('../../styled/uni');
var _reduxformfield = _interopRequireDefault(
  require('../../styled/form/reduxformfield.component')
);
var _web = require('../../styled/web');
var _styles = require('../../../styles');
var _reduxForm = require('redux-form');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _validators = require('../../form/validators');
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _reactRouterDom = require('react-router-dom');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/web/settingsModal.component.js';
var Form = _styledComponents.default.form.withConfig({
  displayName: 'settingsModalcomponent__Form',
  componentId: 'sc-18jdkmm-0'
})(['display:flex;flex-direction:column;']);
SettingsModal.propTypes = {
  close: _propTypes.default.func,
  handleSubmit: _propTypes.default.func,
  initialValues: _propTypes.default.object,
  history: _propTypes.default.object,
  location: _propTypes.default.object
};
function SettingsModal(_ref) {
  var _this = this;
  var handleSubmit = _ref.handleSubmit,
    location = _ref.location;
  var FORM_FIELDS = [
    {
      name: 'image',
      component: _reduxformimageupload.default,
      placeholder: '/img/blueR.png',
      imageComponent: _react.default.createElement(_uni.FormImage, {
        __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 23 }
      }),
      type: 'file-upload',
      label: 'User Image',
      validate: []
    },
    {
      name: 'name',
      component: _reduxformfield.default,
      type: 'text',
      label: 'Display Name',
      validate: [_validators.required]
    },
    { name: 'bio', component: _reduxformfield.default, type: 'text', label: 'Bio' }
  ];
  return _react.default.createElement(
    _web.View,
    {
      display: 'flex',
      fdirection: 'column',
      __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 5 }
    },
    _react.default.createElement(
      Form,
      {
        onSubmit: handleSubmit,
        __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 7 }
      },
      FORM_FIELDS.map(function(field, index) {
        return _react.default.createElement(
          _reduxForm.Field,
          (0, _extends2.default)({}, field, {
            key: index,
            __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 11 }
          })
        );
      }),
      _react.default.createElement(
        _ULink.default,
        {
          mt: 2,
          to: '/user/resetPassword'.concat(location.search),
          __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 9 }
        },
        'Reset Password'
      ),
      _react.default.createElement(
        _web.View,
        {
          justify: 'flex-end',
          mt: 3,
          fdirection: 'row',
          __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 9 }
        },
        _react.default.createElement(
          _web.Button,
          {
            bg: _styles.colors.white,
            c: _styles.colors.black,
            onClick: function onClick() {
              return _this.props.close();
            },
            __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 11 }
          },
          'Cancel'
        ),
        _react.default.createElement(
          _web.Button,
          {
            ml: 2,
            c: _styles.colors.white,
            type: 'submit',
            __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 11 }
          },
          'Submit'
        )
      )
    )
  );
}
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reduxForm.reduxForm)({ form: 'settings' })(SettingsModal)
);
exports.default = _default;
//# sourceMappingURL=settingsModal.component.js.map
