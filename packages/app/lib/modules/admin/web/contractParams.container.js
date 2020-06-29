'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = TokenPanel;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _pickBy = _interopRequireDefault(require('lodash/pickBy'));
var _numbers = require('../../../utils/numbers');
var _uni = require('../../styled/uni');
var _contract = require('../../contract/contract.hooks');
var _eth = require('../../../utils/eth');
var _web = require('../../styled/web');
var _apollo = _interopRequireDefault(require('../../profile/apollo.demo'));
var _contract2 = require('../../contract/contract.context');
var _treasury = _interopRequireDefault(require('./treasury'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/contractParams.container.js';
var ParamsTable = _styledComponents.default.table.withConfig({
  displayName: 'contractParamscontainer__ParamsTable',
  componentId: 'sc-1szweku-0'
})([
  'margin-top:10px;margin-left:20px;th,td{padding:15px;text-align:left;}tr:nth-child(even){background-color:#f8f8f8;}'
]);
var AdminActions = _styledComponents.default.div.withConfig({
  displayName: 'contractParamscontainer__AdminActions',
  componentId: 'sc-1szweku-1'
})(['max-width:280px;margin-top:10px;']);
function TokenPanel() {
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 5 } },
    _react.default.createElement(_treasury.default, {
      __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 7 }
    }),
    _react.default.createElement(_apollo.default, {
      __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }
    }),
    _react.default.createElement(ContractParams, {
      __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 7 }
    })
  );
}
function ContractParams() {
  var _useRelevantToken = (0, _contract.useRelevantToken)(),
    userBalance = _useRelevantToken.userBalance,
    accounts = _useRelevantToken.accounts,
    send = _useRelevantToken.send,
    call = _useRelevantToken.call,
    getState = _useRelevantToken.getState;
  var _useContract = (0, _contract2.useContract)(),
    types = _useContract.types,
    initialized = _useContract.initialized;
  var readableMethods = types ? getReadableMethods(types) : [];
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    allocateAmount = _useState2[0],
    setAllocateAmount = _useState2[1];
  (0, _react.useEffect)(
    function() {
      if (!initialized) return;
      call &&
        readableMethods.forEach(function(method) {
          return call(method);
        });
    },
    [call, initialized]
  );
  var releaseTokens = function releaseTokens() {
    return send('releaseTokens', { from: accounts[0] });
  };
  var allocateRewards = function allocateRewards() {
    return send(
      'allocateRewards',
      { from: accounts[0] },
      (0, _eth.formatBalanceWrite)(allocateAmount, 18)
    );
  };
  return _react.default.createElement(
    _uni.View,
    { m: 4, __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 5 } },
    _react.default.createElement(
      _uni.Title,
      { __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 7 } },
      'Contract Params'
    ),
    _react.default.createElement(
      _uni.View,
      { __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 7 } },
      _react.default.createElement(
        _uni.View,
        { __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 9 } },
        _react.default.createElement(
          _uni.SecondaryText,
          { __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 11 } },
          'User address: ',
          accounts && accounts[0] ? accounts[0] : 'Loading...'
        ),
        _react.default.createElement(
          _uni.SecondaryText,
          { __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 11 } },
          'User balance:',
          ' ',
          userBalance && userBalance.value
            ? (0, _eth.parseBN)(userBalance.value).toString()
            : 'Loading...'
        ),
        accounts &&
          accounts[0] &&
          _react.default.createElement(
            AdminActions,
            { __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 13 } },
            _react.default.createElement(
              _uni.Button,
              {
                mr: 'auto',
                mt: 4,
                onClick: function onClick() {
                  return releaseTokens();
                },
                __source: { fileName: _jsxFileName, lineNumber: 84, columnNumber: 15 }
              },
              'Release Tokens'
            ),
            _react.default.createElement(
              _uni.View,
              {
                mt: 4,
                fdirection: 'row',
                align: 'flex-start',
                __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 15 }
              },
              _react.default.createElement(_web.Input, {
                mt: '0',
                p: 1.7,
                type: 'text',
                value: allocateAmount,
                onChange: function onChange(e) {
                  return setAllocateAmount(e.target.value);
                },
                __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 17 }
              }),
              _react.default.createElement(
                _uni.Button,
                {
                  mr: 'auto',
                  onClick: function onClick() {
                    return allocateRewards();
                  },
                  __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 17 }
                },
                'Allocate Rewards'
              )
            )
          ),
        _react.default.createElement(
          _uni.BodyText,
          { __source: { fileName: _jsxFileName, lineNumber: 101, columnNumber: 11 } },
          _react.default.createElement(
            ParamsTable,
            { __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 13 } },
            _react.default.createElement(
              'tbody',
              { __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 15 } },
              _react.default.createElement(
                'tr',
                {
                  __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 17 }
                },
                _react.default.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 19
                    }
                  },
                  'Method'
                ),
                _react.default.createElement(
                  'th',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 19
                    }
                  },
                  'Value'
                )
              )
            ),
            _react.default.createElement(
              'tbody',
              { __source: { fileName: _jsxFileName, lineNumber: 109, columnNumber: 15 } },
              hasValue(getState) &&
                readableMethods.map(function(method) {
                  return _react.default.createElement(ParamRow, {
                    key: method,
                    method: method,
                    getState: getState,
                    call: call,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 21
                    }
                  });
                })
            )
          )
        )
      )
    )
  );
}
ParamRow.propTypes = {
  method: _propTypes.default.string,
  getState: _propTypes.default.func,
  call: _propTypes.default.func
};
function ParamRow(_ref) {
  var method = _ref.method,
    call = _ref.call,
    getState = _ref.getState;
  return _react.default.createElement(
    'tr',
    { __source: { fileName: _jsxFileName, lineNumber: 136, columnNumber: 5 } },
    _react.default.createElement(
      'td',
      { __source: { fileName: _jsxFileName, lineNumber: 137, columnNumber: 7 } },
      method
    ),
    _react.default.createElement(
      'td',
      { __source: { fileName: _jsxFileName, lineNumber: 138, columnNumber: 7 } },
      _react.default.createElement(
        _uni.NumericalValue,
        { __source: { fileName: _jsxFileName, lineNumber: 139, columnNumber: 9 } },
        (0, _numbers.abbreviateNumber)(getState(method).value)
      )
    ),
    _react.default.createElement(
      'td',
      { __source: { fileName: _jsxFileName, lineNumber: 141, columnNumber: 7 } },
      _react.default.createElement(
        _uni.Button,
        {
          onClick: function onClick() {
            return call(method);
          },
          __source: { fileName: _jsxFileName, lineNumber: 142, columnNumber: 9 }
        },
        'Call'
      )
    ),
    _react.default.createElement(
      'td',
      { __source: { fileName: _jsxFileName, lineNumber: 144, columnNumber: 7 } },
      _react.default.createElement(_web.Input, {
        __source: { fileName: _jsxFileName, lineNumber: 145, columnNumber: 9 }
      })
    )
  );
}
function hasValue(state) {
  return state && state('name') && state('name').value;
}
function getReadableMethods(types) {
  return ['allocatedRewards', 'totalReleased'].concat(
    Object.keys(
      (0, _pickBy.default)(types.methods, function(_, method) {
        return (
          !types.methods[method].send &&
          method !== 'balanceOf' &&
          method !== 'isMinter' &&
          method !== 'allowance' &&
          method !== 'partialSum' &&
          method !== 'nonceOf' &&
          method !== 'isOwner' &&
          method !== 'allocatedRewards' &&
          method !== 'totalReleased' &&
          method !== 'currentRound' &&
          method !== 'initializeRewardSplit' &&
          method !== 'airdropSwitchRound'
        );
      })
    )
  );
}
//# sourceMappingURL=contractParams.container.js.map
