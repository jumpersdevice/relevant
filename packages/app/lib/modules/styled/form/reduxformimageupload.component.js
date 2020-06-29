'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _imageUpload = _interopRequireDefault(require('../../ui/web/imageUpload.component'));
var _web = require('../web');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/styled/form/reduxformimageupload.component.js';
var ReduxFormField = function ReduxFormField(props) {
  var label = props.label,
    meta = props.meta,
    name = props.name,
    placeholder = props.placeholder,
    imageComponent = props.imageComponent;
  var _props$input = props.input,
    _onChange = _props$input.onChange,
    value = _props$input.value;
  var touched = meta.touched,
    error = meta.error,
    warning = meta.warning;
  return _react.default.createElement(
    _web.View,
    {
      display: 'flex',
      fdirection: 'column',
      mt: 3,
      __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 5 }
    },
    label
      ? _react.default.createElement(
          'label',
          {
            'html-for': name,
            __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 9 }
          },
          _react.default.createElement(
            _web.LinkFont,
            {
              c: _styles.colors.black,
              __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 11 }
            },
            label
          )
        )
      : null,
    _react.default.createElement(_imageUpload.default, {
      placeholder: value || placeholder,
      imageComponent: imageComponent,
      onChange: function onChange(vals) {
        _onChange(vals);
      },
      __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 7 }
    }),
    touched &&
      ((error &&
        _react.default.createElement(
          _web.SecondaryText,
          {
            c: _styles.colors.red,
            mt: 1,
            __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 11 }
          },
          error
        )) ||
        (warning &&
          _react.default.createElement(
            _web.SecondaryText,
            {
              c: _styles.colors.red,
              __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 23 }
            },
            warning
          )))
  );
};
ReduxFormField.propTypes = {
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  meta: _propTypes.default.object,
  input: _propTypes.default.object,
  placeholder: _propTypes.default.node,
  imageComponent: _propTypes.default.node
};
var _default = ReduxFormField;
exports.default = _default;
//# sourceMappingURL=reduxformimageupload.component.js.map
