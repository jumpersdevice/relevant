'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.use3BoxProfile = use3BoxProfile;
exports.useUpdateProfile = useUpdateProfile;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _react = require('react');
var _contract = require('../contract/contract.hooks');
var _box = _interopRequireDefault(require('3box'));
var _utils = require('../../utils');
var _ethers = require('ethers');
var _identityWallet = _interopRequireDefault(require('identity-wallet'));
var _storage = require('../../utils/storage');
var _api = require('3box/lib/api');
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
var idWallet;
var box;
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
          _regenerator.default.mark(function _callee2() {
            var mnemonic,
              seed,
              provider,
              relevantSpace,
              relevantProfile,
              _email,
              _yield$signClaim,
              _signature,
              _DID,
              boxProfile,
              verified,
              emailObj,
              email,
              _yield$signClaim2,
              signature,
              DID;
            return _regenerator.default.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.prev = 0;
                      mnemonic = getMnemonic();
                      seed = _ethers.utils.HDNode.mnemonicToSeed(mnemonic);
                      idWallet = new _identityWallet.default(
                        (0, _asyncToGenerator2.default)(
                          _regenerator.default.mark(function _callee() {
                            return _regenerator.default.wrap(function _callee$(_context) {
                              while (1) {
                                switch ((_context.prev = _context.next)) {
                                  case 0:
                                    return _context.abrupt('return', true);
                                  case 1:
                                  case 'end':
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          })
                        ),
                        { seed: seed }
                      );
                      _context2.next = 6;
                      return idWallet.authenticate(['relevant', '3Box']);
                    case 6:
                      _context2.next = 8;
                      return idWallet.linkAddress(address, metamask);
                    case 8:
                      _context2.next = 10;
                      return idWallet.get3idProvider();
                    case 10:
                      provider = _context2.sent;
                      _context2.next = 13;
                      return _box.default.openBox(address, provider);
                    case 13:
                      box = _context2.sent;
                      _context2.next = 16;
                      return box.openSpace('relevant');
                    case 16:
                      relevantSpace = _context2.sent;
                      _context2.next = 19;
                      return relevantSpace.public.all();
                    case 19:
                      relevantProfile = _context2.sent;
                      console.log('relevantProfile', relevantProfile);
                      if (!(relevantProfile.defaultProfile === 'relevant')) {
                        _context2.next = 31;
                        break;
                      }
                      _context2.next = 24;
                      return relevantSpace.private.get('email');
                    case 24:
                      _email = _context2.sent;
                      _context2.next = 27;
                      return signClaim(idWallet, address);
                    case 27:
                      _yield$signClaim = _context2.sent;
                      _signature = _yield$signClaim.signature;
                      _DID = _yield$signClaim.DID;
                      return _context2.abrupt(
                        'return',
                        setProfile([
                          null,
                          _objectSpread(
                            _objectSpread({}, relevantProfile),
                            {},
                            { email: _email, signature: _signature, DID: _DID }
                          )
                        ])
                      );
                    case 31:
                      _context2.next = 33;
                      return (0, _api.getProfile)(address);
                    case 33:
                      boxProfile = _context2.sent;
                      _context2.next = 36;
                      return (0, _api.getVerifiedAccounts)(boxProfile);
                    case 36:
                      verified = _context2.sent;
                      console.log(boxProfile);
                      console.log(verified);
                      _context2.next = 41;
                      return relevantSpace.public.set('defaultProfile', '3box');
                    case 41:
                      _context2.next = 43;
                      return box.verified.email();
                    case 43:
                      emailObj = _context2.sent;
                      email = emailObj && emailObj.email_address;
                      _context2.next = 47;
                      return signClaim(idWallet, address);
                    case 47:
                      _yield$signClaim2 = _context2.sent;
                      signature = _yield$signClaim2.signature;
                      DID = _yield$signClaim2.DID;
                      return _context2.abrupt(
                        'return',
                        setProfile([
                          null,
                          _objectSpread(
                            _objectSpread({}, boxProfile),
                            {},
                            { signature: signature, DID: DID, email: email }
                          )
                        ])
                      );
                    case 53:
                      _context2.prev = 53;
                      _context2.t0 = _context2['catch'](0);
                      Alert.alert(_context2.t0.message);
                      return _context2.abrupt(
                        'return',
                        setProfile([_context2.t0.message])
                      );
                    case 57:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              null,
              [[0, 53]]
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
function useUpdateProfile() {
  var _useWeb = (0, _contract.useWeb3)(),
    _useWeb2 = (0, _slicedToArray2.default)(_useWeb, 1),
    accounts = _useWeb2[0];
  var address = accounts && _ethers.utils.getAddress(accounts[0]);
  return (0, _react.useCallback)(
    (function() {
      var _ref4 = (0, _asyncToGenerator2.default)(
        _regenerator.default.mark(function _callee3(profile) {
          var relevantSpace, imageObject, relevantProfile, email, all;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  if (box) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt('return');
                case 2:
                  _context3.next = 4;
                  return box.openSpace('relevant');
                case 4:
                  relevantSpace = _context3.sent;
                  _context3.next = 7;
                  return Promise.all([box.syncDone]);
                case 7:
                  imageObject = profile.image && [
                    { '@type': 'ImageObject', contentUrl: profile.image }
                  ];
                  _context3.next = 10;
                  return relevantSpace.public.set('defaultProfile', 'relevant');
                case 10:
                  _context3.next = 12;
                  return relevantSpace.public.set('image', imageObject);
                case 12:
                  _context3.next = 14;
                  return relevantSpace.public.set('name', profile.name);
                case 14:
                  _context3.next = 16;
                  return relevantSpace.private.set('email', profile.email);
                case 16:
                  _context3.next = 18;
                  return box.syncDone;
                case 18:
                  _context3.next = 20;
                  return _box.default.getSpace(address, 'relevant');
                case 20:
                  relevantProfile = _context3.sent;
                  _context3.next = 23;
                  return relevantSpace.private.get('email');
                case 23:
                  email = _context3.sent;
                  _context3.next = 26;
                  return relevantSpace.public.all();
                case 26:
                  all = _context3.sent;
                  console.log('all', all);
                  console.log('relevantProfile', relevantProfile, email);
                case 29:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3);
        })
      );
      return function(_x) {
        return _ref4.apply(this, arguments);
      };
    })(),
    [address]
  );
}
function signClaim(_x2, _x3) {
  return _signClaim.apply(this, arguments);
}
function _signClaim() {
  _signClaim = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee4(user, address) {
      var DID, expiresIn, signature;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch ((_context4.prev = _context4.next)) {
            case 0:
              DID = user.DID;
              expiresIn = 10 * 60;
              _context4.next = 4;
              return user.signClaim(
                { DID: DID, address: address },
                { expiresIn: expiresIn }
              );
            case 4:
              signature = _context4.sent;
              return _context4.abrupt('return', {
                signature: signature,
                address: address,
                DID: DID
              });
            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4);
    })
  );
  return _signClaim.apply(this, arguments);
}
function getMnemonic() {
  var mnemonic = _storage.local.getItem('3box_mnemonic');
  if (mnemonic) return mnemonic;
  var wallet = _ethers.Wallet.createRandom();
  _storage.local.setItem('3box_mnemonic', wallet.mnemonic);
  return wallet.mnemonic;
}
//# sourceMappingURL=3box.hooks.fancy.js.map
