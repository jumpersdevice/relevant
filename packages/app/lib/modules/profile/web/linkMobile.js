'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = LinkMobile;
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _qrcode = _interopRequireDefault(require('qrcode.react'));
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/web/linkMobile.js';
function LinkMobile() {
  var token = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.token;
  });
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 11, columnNumber: 5 } },
    _react.default.createElement(
      _uni.Header,
      { __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 7 } },
      'Mobile Login'
    ),
    _react.default.createElement(
      _uni.View,
      {
        p: 2,
        mt: 4,
        mb: 4,
        ml: 'auto',
        mr: 'auto',
        alignSelf: 'center',
        border: true,
        bc: _styles.colors.gray,
        __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 7 }
      },
      _react.default.createElement(_qrcode.default, {
        value: token,
        __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 9 }
      })
    ),
    _react.default.createElement(
      _uni.BodyText,
      { __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 7 } },
      'Open the Relevant Mobile App, press "Link Desktop Account" and scan the QR code'
    )
  );
}
//# sourceMappingURL=linkMobile.js.map
