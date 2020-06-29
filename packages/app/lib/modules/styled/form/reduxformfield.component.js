'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _web = require('../web');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/styled/form/reduxformfield.component.js';
var ReduxFormField = function ReduxFormField(props) {
  var label = props.label,
    input = props.input,
    type = props.type,
    meta = props.meta,
    name = props.name,
    placeholder = props.placeholder,
    autocomplete = props.autocomplete;
  var dirty = meta.dirty,
    touched = meta.touched,
    error = meta.error,
    warning = meta.warning;
  return _react.default.createElement(
    _web.View,
    {
      display: 'flex',
      fdirection: 'column',
      mt: 3,
      __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 5 }
    },
    label
      ? _react.default.createElement(
          'label',
          {
            'html-for': name,
            __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 9 }
          },
          _react.default.createElement(
            _web.LinkFont,
            {
              c: _styles.colors.black,
              __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 11 }
            },
            label
          )
        )
      : null,
    _react.default.createElement(
      _web.Input,
      (0, _extends2.default)({}, input, {
        placeholder: placeholder || label,
        autoComplete: autocomplete,
        name: name,
        type: type,
        border: 1,
        p: '2 2',
        mt: 1,
        __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 }
      })
    ),
    (dirty || touched) &&
      ((error &&
        _react.default.createElement(
          _web.SecondaryText,
          {
            c: _styles.colors.red,
            mt: 1,
            __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 }
          },
          error
        )) ||
        (warning &&
          _react.default.createElement(
            _web.SecondaryText,
            {
              c: _styles.colors.red,
              __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 23 }
            },
            warning
          )))
  );
};
ReduxFormField.propTypes = {
  error: _propTypes.default.string,
  type: _propTypes.default.string,
  name: _propTypes.default.string,
  label: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.node
  ]),
  placeholder: _propTypes.default.string,
  meta: _propTypes.default.object,
  input: _propTypes.default.object,
  autocomplete: _propTypes.default.string
};
ReduxFormField.defaultProps = { autocomplete: null };
var _default = ReduxFormField;
exports.default = _default;
//# sourceMappingURL=reduxformfield.component.js.map
