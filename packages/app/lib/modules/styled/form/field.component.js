'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _web = require('../web');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/styled/form/field.component.js';
var FormField = function FormField(props) {
  var error = props.error,
    type = props.type,
    placeholder = props.placeholder,
    label = props.label,
    value = props.value,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    onKeyDown = props.onKeyDown;
  return _react.default.createElement(
    _web.View,
    {
      display: 'flex',
      fdirection: 'column',
      mt: 3,
      __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 5 }
    },
    _react.default.createElement(
      'label',
      { __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 7 } },
      _react.default.createElement(
        _web.LinkFont,
        {
          c: _styles.colors.black,
          __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 9 }
        },
        label
      )
    ),
    _react.default.createElement(_web.Input, {
      type: type,
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      onBlur: onBlur,
      onFocus: onFocus,
      onKeyDown: onKeyDown,
      __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }
    }),
    error
      ? _react.default.createElement(
          _web.SecondaryText,
          {
            c: _styles.colors.red,
            mt: 1,
            __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 9 }
          },
          error
        )
      : null
  );
};
FormField.propTypes = {
  error: _propTypes.default.string,
  type: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onKeyDown: _propTypes.default.func
};
var _default = FormField;
exports.default = _default;
//# sourceMappingURL=field.component.js.map
