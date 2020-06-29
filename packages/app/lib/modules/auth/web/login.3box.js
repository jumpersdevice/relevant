'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = BoxLogin;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _box = require('../3box.hooks');
var _contract = require('../../contract/contract.hooks');
var _ethers = require('ethers');
var _socialButtons = require('../socialButtons');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/login.3box.js';
BoxLogin.propTypes = {
  close: _propTypes.default.func,
  text: _propTypes.default.string,
  type: _propTypes.default.string
};
function BoxLogin(_ref) {
  var close = _ref.close,
    text = _ref.text,
    type = _ref.type;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    doLogin = _useState2[0],
    logIn = _useState2[1];
  var Button =
    type === 'metamask' ? _socialButtons.MetamaskButton : _socialButtons.BoxButton;
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 5 } },
    doLogin &&
      _react.default.createElement(Web3Login, {
        close: close,
        resetLogin: function resetLogin() {
          return logIn(false);
        },
        __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 19 }
      }),
    _react.default.createElement(Button, {
      mr: [4, 0],
      mt: [0, 2],
      flex: 1,
      onPress: function onPress(e) {
        e.preventDefault();
        logIn(false);
        setTimeout(function() {
          return logIn(true);
        });
      },
      text: text || 'Sign In with 3Box',
      __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 7 }
    })
  );
}
Web3Login.propTypes = { close: _propTypes.default.func };
function Web3Login(_ref2) {
  var close = _ref2.close;
  var _useWeb = (0, _contract.useWeb3)(),
    _useWeb2 = (0, _slicedToArray2.default)(_useWeb, 1),
    accounts = _useWeb2[0];
  var metamask = (0, _contract.useMetamask)();
  var address = accounts && accounts[0] && _ethers.utils.getAddress(accounts[0]);
  var logIn = (0, _box.useLoginWithBox)(close);
  (0, _react.useEffect)(
    function() {
      metamask && address && logIn();
    },
    [metamask, address]
  );
  return null;
}
//# sourceMappingURL=login.3box.js.map
