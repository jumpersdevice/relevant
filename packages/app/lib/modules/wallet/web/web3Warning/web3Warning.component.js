'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Web3Warning;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../../styled/uni');
var _contract = require('../../../contract/contract.hooks');
var _cashoutFooter = require('../cashoutFooter');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/web/web3Warning/web3Warning.component.js';
var DEFAULT_BG = 'rgba(0, 0, 0, 0.05)';
var DEFAULT_BORDER_C = '#000000';
Web3Warning.propTypes = {
  connectAddress: _propTypes.default.func,
  warning: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.func
  ])
};
function Web3Warning(_ref) {
  var connectAddress = _ref.connectAddress,
    warning = _ref.warning;
  var _warning$bg = warning.bg,
    bg = _warning$bg === void 0 ? DEFAULT_BG : _warning$bg,
    _warning$bc = warning.bc,
    bc = _warning$bc === void 0 ? DEFAULT_BORDER_C : _warning$bc;
  var metamask = (0, _contract.useMetamask)();
  if (!warning) return null;
  var onClickCreator = function onClickCreator() {
    switch (warning.buttonAction) {
      case 'connectMetamask':
        return function() {
          return metamask.enable();
        };
      case 'getMetamask':
        return function() {
          return window.open('https://metamask.io/', '_blank');
        };
      case 'connectAddress':
        return function() {
          return connectAddress();
        };
      default:
        return null;
    }
  };
  var onClick = onClickCreator();
  var customButton =
    onClick &&
    _react.default.createElement(
      _uni.Button,
      {
        disabled: warning.disabled,
        mr: 'auto',
        onClick: onClick,
        __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 5 }
      },
      warning.buttonText
    );
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 5 } },
    _react.default.createElement(
      _uni.View,
      {
        mt: 2,
        p: 2,
        id: warning.id,
        bg: bg,
        border: true,
        bc: bc,
        __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.Title,
        { __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 9 } },
        warning.title
      ),
      _react.default.createElement(
        _uni.BodyText,
        { mt: 1, __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 } },
        warning.message
      )
    ),
    _react.default.createElement(_cashoutFooter.CashoutFooter, {
      customButton: customButton,
      __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 7 }
    })
  );
}
//# sourceMappingURL=web3Warning.component.js.map
