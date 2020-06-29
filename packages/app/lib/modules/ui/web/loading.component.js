'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = _default;
var _react = _interopRequireDefault(require('react'));
var _reactActivity = require('react-activity');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/web/loading.component.js';
if (process.env.BROWSER === true) {
  require('./loading.css');
  require('react-activity/lib/Spinner/Spinner.css');
}
function _default() {
  return _react.default.createElement(
    'div',
    {
      className: 'loadingContainer',
      __source: { fileName: _jsxFileName, lineNumber: 11, columnNumber: 5 }
    },
    _react.default.createElement(
      'div',
      {
        className: 'loadingEl',
        __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 7 }
      },
      _react.default.createElement(_reactActivity.Spinner, {
        color: '#858586',
        size: 32,
        speed: 1,
        __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 9 }
      })
    )
  );
}
//# sourceMappingURL=loading.component.js.map
