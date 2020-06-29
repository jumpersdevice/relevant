'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.CashoutFooter = CashoutFooter;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _eth = require('../../../utils/eth');
var _web = require('../../../utils/web3.provider');
var _contract = require('../../contract/contract.selectors');
var _uni = require('../../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/web/cashoutFooter.js';
CashoutFooter.propTypes = { customButton: _propTypes.default.node };
function CashoutFooter(_ref) {
  var customButton = _ref.customButton;
  var web3 = (0, _contract.useWeb3State)();
  var rightEl =
    customButton ||
    _react.default.createElement(
      _uni.BodyText,
      { __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 5 } },
      'Connected to Ethereum ',
      (0, _web.getNetworkName)(web3.networkId)
    );
  var account = web3.accounts && web3.accounts[0];
  var leftEl = account
    ? _react.default.createElement(
        _uni.BodyText,
        { __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 28 } },
        (0, _eth.truncateAddress)(account)
      )
    : _react.default.createElement(_uni.BodyText, {
        __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 78 }
      });
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 5 } },
    _react.default.createElement(_uni.Divider, {
      mt: 4,
      mb: 4,
      __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 7 }
    }),
    _react.default.createElement(
      _uni.View,
      {
        fdirection: 'row',
        justify: 'space-between',
        __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        { __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 9 } },
        leftEl
      ),
      _react.default.createElement(
        _uni.View,
        { __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 9 } },
        rightEl
      )
    )
  );
}
//# sourceMappingURL=cashoutFooter.js.map
