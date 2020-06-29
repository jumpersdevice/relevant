'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.cashOutCall = cashOutCall;
exports.connectAddress = connectAddress;
exports.addEthAddress = addEthAddress;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _eth = require('../../utils/eth');
var _web = require('../../utils/web3.provider');
var _utils = require('../../utils');
var _auth = require('../auth/auth.actions');
var _earnings = require('./earnings.actions');
var Alert = _utils.alert.Alert();
function cashOutCall() {
  var customAmount =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var sendCashoutAction = arguments.length > 1 ? arguments[1] : undefined;
  return (function() {
    var _ref = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        var _yield$dispatch, user, earning, _user$cashOut, amnt, sig, tx;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'POST',
                      endpoint: 'user',
                      path: '/cashOut',
                      body: JSON.stringify({ customAmount: customAmount })
                    })
                  );
                case 3:
                  _yield$dispatch = _context.sent;
                  user = _yield$dispatch.user;
                  earning = _yield$dispatch.earning;
                  dispatch((0, _auth.updateAuthUser)(user));
                  earning && dispatch((0, _earnings.addEarning)(earning));
                  (_user$cashOut = user.cashOut),
                    (amnt = _user$cashOut.amount),
                    (sig = _user$cashOut.sig);
                  tx = sendCashoutAction(amnt, sig);
                  Alert.alert(
                    'Claiming '.concat(
                      parseFloat((0, _eth.formatBalanceRead)(amnt)),
                      ' tokens \uD83D\uDE04'
                    ),
                    'success'
                  );
                  return _context.abrupt('return', tx);
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](0);
                  console.log(_context.t0);
                  return _context.abrupt(
                    'return',
                    Alert.alert(_context.t0.message, 'error')
                  );
                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 14]]
        );
      })
    );
    return function(_x) {
      return _ref.apply(this, arguments);
    };
  })();
}
function connectAddress(account) {
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        var salt, msgParams, web3;
        return _regenerator.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0;
                  salt = (0, _eth.generateSalt)();
                  msgParams = [
                    {
                      type: 'string',
                      name: 'Message',
                      value: 'Connect Ethereum address to the Relevant account ' + salt
                    }
                  ];
                  web3 = (0, _web.getProvider)();
                  _context2.next = 6;
                  return web3.currentProvider.sendAsync(
                    {
                      method: 'eth_signTypedData',
                      params: [msgParams, account],
                      from: account
                    },
                    function(err, msg) {
                      if (err || msg.error) {
                        var error = err || msg.error;
                        Alert.alert(error, 'error');
                        return;
                      }
                      dispatch(addEthAddress(msgParams, msg.result, account));
                    }
                  );
                case 6:
                  _context2.next = 11;
                  break;
                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2['catch'](0);
                  Alert.alert('Failed signing message: ' + _context2.t0.messate, 'error');
                case 11:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x2) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function addEthAddress(msg, sig, acc) {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(dispatch) {
        var result;
        return _regenerator.default.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'user',
                      path: '/ethAddress',
                      body: JSON.stringify({ msg: msg, sig: sig, acc: acc })
                    })
                  );
                case 3:
                  result = _context3.sent;
                  dispatch((0, _auth.updateAuthUser)(result));
                  return _context3.abrupt('return', true);
                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3['catch'](0);
                  Alert.alert(_context3.t0.message, 'error');
                  return _context3.abrupt('return', false);
                case 12:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x3) {
      return _ref3.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=wallet.actions.js.map
