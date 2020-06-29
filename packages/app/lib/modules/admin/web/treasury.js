'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Treasury;
var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral')
);
var _react = _interopRequireWildcard(require('react'));
var _uni = require('../../styled/uni');
var _contract = require('../../contract/contract.hooks');
var _reactHooks = require('@apollo/react-hooks');
var _graphqlTag = _interopRequireDefault(require('graphql-tag'));
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/treasury.js';
function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  query {\n    distributedTokens {\n      balance\n      legacyTokens\n      airdropTokens\n      cashedOut\n      curationRewards\n      airdrop\n      earned\n      rewardFund\n    }\n  }\n'
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var contractParams = [
  'totalReleased',
  'allocatedRewards',
  'rewardFund',
  'airdropFund',
  'allocatedAirdrops'
];
var tableData = [
  { label: 'Total Released Tokens', contract: 'totalReleased' },
  { label: 'Curation Reward Fund', contract: 'rewardFund', db: 'rewardFund' },
  {
    label: 'Allocated Curation Rewards',
    contract: 'allocatedRewards',
    db: 'curationRewards'
  },
  { label: 'Earnings', db: 'earned' },
  { label: 'Airdrop Fund', contract: 'airdropFund' },
  { label: 'Allocated Airdrops', contract: 'allocatedAirdrops', db: 'airdrop' }
];
var GET_TREASURY = (0, _graphqlTag.default)(_templateObject());
function Treasury() {
  var _useQuery = (0, _reactHooks.useQuery)(GET_TREASURY),
    data = _useQuery.data,
    loading = _useQuery.loading,
    error = _useQuery.error;
  var _useRelevantToken = (0, _contract.useRelevantToken)(),
    getState = _useRelevantToken.getState,
    call = _useRelevantToken.call;
  (0, _react.useEffect)(
    function() {
      call &&
        contractParams.forEach(function(method) {
          return call(method);
        });
    },
    [call]
  );
  if (loading)
    return _react.default.createElement(
      _uni.BodyText,
      { __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 23 } },
      'Loading...'
    );
  if (error)
    return _react.default.createElement(
      _uni.BodyText,
      { __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 21 } },
      'ERROR: ',
      error.message
    );
  return _react.default.createElement(
    _uni.View,
    {
      m: [4, 2],
      maxWidth: 75,
      border: _styles.colors.lightGrey,
      __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.View,
      {
        p: 1,
        fdirection: 'row',
        __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.NumericalValue,
        {
          br: _styles.colors.lightGrey,
          mr: 1,
          flex: 1,
          __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 9 }
        },
        'contract'
      ),
      _react.default.createElement(
        _uni.NumericalValue,
        {
          br: _styles.colors.lightGrey,
          mr: 1,
          flex: 1,
          __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 9 }
        },
        'db'
      ),
      _react.default.createElement(
        _uni.NumericalValue,
        {
          flex: 1,
          pl: 1,
          __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 9 }
        },
        'difference'
      )
    ),
    tableData.map(function(row, i) {
      return _react.default.createElement(
        _uni.View,
        { key: i, __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 9 } },
        _react.default.createElement(
          _uni.BodyText,
          {
            p: 1,
            bg: _styles.colors.lightGrey,
            __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 11 }
          },
          row.label
        ),
        _react.default.createElement(
          _uni.View,
          {
            p: 1,
            fdirection: 'row',
            __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.BodyText,
            {
              br: _styles.colors.lightGrey,
              mr: 1,
              flex: 1,
              __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 13 }
            },
            getState(row.contract).value && getState(row.contract).value / 1e18
          ),
          _react.default.createElement(
            _uni.BodyText,
            {
              br: _styles.colors.lightGrey,
              mr: 1,
              flex: 1,
              __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 13 }
            },
            data.distributedTokens[row.db]
          ),
          _react.default.createElement(
            _uni.BodyText,
            {
              flex: 1,
              __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 13 }
            },
            row.contract && row.db
              ? (
                  getState(row.contract).value / 1e18 -
                  data.distributedTokens[row.db]
                ).toString()
              : ''
          )
        )
      );
    })
  );
}
//# sourceMappingURL=treasury.js.map
