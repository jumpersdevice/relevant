'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.use3BoxProfile = use3BoxProfile;
exports.useLoginWithBox = useLoginWithBox;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _react = require('react');
var _utils = require('../../utils');
var _ethers = require('ethers');
var _api = require('3box/lib/api');
var _eth = require('../../utils/eth');
var _contract = require('../contract/contract.hooks');
var _reactRedux = require('react-redux');
var _auth = require('./auth.actions');
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Alert = _utils.alert.Alert();
function use3BoxProfile(_ref) {
  var address = _ref.address,
    metamask = _ref.metamask,
    setProfile = _ref.setProfile;
  return (0, _react.useEffect)(
    function() {
      if (!address || !metamask) return;
      var init3Box = (function() {
        var _ref2 = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee() {
            var boxProfile, provider, _yield$signMessage, msg, signature;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return (0, _api.getProfile)(address);
                    case 3:
                      boxProfile = _context.sent;
                      setProfile([null, _objectSpread({}, boxProfile)]);
                      provider = new _ethers.providers.Web3Provider(metamask);
                      _context.next = 8;
                      return (0, _eth.signMessage)(provider, address);
                    case 8:
                      _yield$signMessage = _context.sent;
                      msg = _yield$signMessage.msg;
                      signature = _yield$signMessage.signature;
                      return _context.abrupt(
                        'return',
                        setProfile([
                          null,
                          _objectSpread(
                            _objectSpread({}, boxProfile),
                            {},
                            { signature: signature, msg: msg }
                          )
                        ])
                      );
                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context['catch'](0);
                      Alert.alert(_context.t0.message);
                      return _context.abrupt('return', setProfile([_context.t0.message]));
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
        return function init3Box() {
          return _ref2.apply(this, arguments);
        };
      })();
      init3Box();
    },
    [address]
  );
}
function useLoginWithBox(close) {
  var _useWeb = (0, _contract.useWeb3)(),
    _useWeb2 = (0, _slicedToArray2.default)(_useWeb, 1),
    accounts = _useWeb2[0];
  var metamask = (0, _contract.useMetamask)();
  var address = accounts && accounts[0] && _ethers.utils.getAddress(accounts[0]);
  var dispatch = (0, _reactRedux.useDispatch)();
  var logIn = (0, _react.useCallback)(
    (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2() {
        var provider, _yield$signMessage2, signature, msg, success;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                if (!(!metamask || !address)) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt(
                  'return',
                  Alert.alert('Pleas enable Metamask to log in.')
                );
              case 2:
                provider = new _ethers.providers.Web3Provider(metamask);
                _context2.next = 5;
                return (0, _eth.signMessage)(provider, address);
              case 5:
                _yield$signMessage2 = _context2.sent;
                signature = _yield$signMessage2.signature;
                msg = _yield$signMessage2.msg;
                _context2.next = 10;
                return dispatch(
                  (0, _auth.loginWithBox)({
                    signature: signature,
                    address: address,
                    msg: msg
                  })
                );
              case 10:
                success = _context2.sent;
                success && close && close();
                return _context2.abrupt('return', success);
              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    ),
    [address, metamask, dispatch, close]
  );
  return logIn;
}
//# sourceMappingURL=3box.hooks.js.map
