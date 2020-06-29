'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _uni = require('../styled/uni');
var _web = require('../styled/web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/styles.component.js';
var _default = function _default() {
  return _react.default.createElement(
    _uni.View,
    { p: 4, __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 3 } },
    _react.default.createElement(
      _uni.Header,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 5 } },
      'Header'
    ),
    _react.default.createElement(
      _uni.Title,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 5 } },
      'Title'
    ),
    _react.default.createElement(
      _uni.BodyText,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 5 } },
      'BodyText'
    ),
    _react.default.createElement(
      _uni.SecondaryText,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 5 } },
      'SecondaryText'
    ),
    _react.default.createElement(
      _uni.NumericalValue,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 5 } },
      'NumericalValue'
    ),
    _react.default.createElement(
      _uni.Button,
      {
        mt: 2,
        mr: 'auto',
        __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 5 }
      },
      'Button'
    ),
    _react.default.createElement(
      _uni.Button,
      {
        disabled: true,
        mt: 2,
        mr: 'auto',
        __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 5 }
      },
      'Disabled Button'
    ),
    _react.default.createElement(_web.Input, {
      type: 'text',
      value: 'Input',
      mr: 'auto',
      mt: 2,
      __source: { fileName: _jsxFileName, lineNumber: 27, columnNumber: 5 }
    }),
    _react.default.createElement(
      _uni.CommentText,
      {
        mr: 'auto',
        mt: 2,
        __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 5 }
      },
      'CommentText'
    ),
    _react.default.createElement(_web.StyledTextarea, {
      value: 'StyledTextarea',
      mt: 2,
      __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 5 }
    })
  );
};
exports.default = _default;
//# sourceMappingURL=styles.component.js.map
