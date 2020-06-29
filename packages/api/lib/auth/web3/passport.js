"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authorizeUser = authorizeUser;
exports.verifyEthSignature = verifyEthSignature;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ethers = require("ethers");

var _passportCustom = require("passport-custom");

var _passport = _interopRequireDefault(require("passport"));

var _user = _interopRequireDefault(require("../../api/user/user.model"));

_passport.default.use('web3', new _passportCustom.Strategy( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req, callback) {
    try {
      var user = yield authorizeUser(req);
      if (!user) throw new Error('User not found');
      return callback(null, user);
    } catch (err) {
      return callback(err);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));

function authorizeUser(_x3) {
  return _authorizeUser.apply(this, arguments);
}

function _authorizeUser() {
  _authorizeUser = (0, _asyncToGenerator2.default)(function* (req) {
    var sigAddress = verifyEthSignature(req.body); // user is already logged in

    if (req.user) {
      req.user.ethLogin = sigAddress;
      yield req.user.save();
      return req.user;
    }

    return _user.default.findOne({
      ethLogin: sigAddress
    });
  });
  return _authorizeUser.apply(this, arguments);
}

function verifyEthSignature(_ref2) {
  var {
    signature,
    msg
  } = _ref2;
  if (!signature || !msg) throw Error('Missing signature parameters');

  var sigAddress = _ethers.utils.verifyMessage(JSON.stringify(msg), signature);

  if (sigAddress !== msg.address) throw new Error("Signature doesn't match");
  var {
    exp
  } = msg;
  var claimExp = new Date(exp * 1000);
  if (claimExp < new Date()) throw new Error('This signature is expired');
  return sigAddress;
}
//# sourceMappingURL=passport.js.map