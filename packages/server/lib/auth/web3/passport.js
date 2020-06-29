"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authorizeUser = authorizeUser;
exports.verifyEthSignature = verifyEthSignature;

var _ethers = require("ethers");

var _passportCustom = require("passport-custom");

var _passport = _interopRequireDefault(require("passport"));

var _user = _interopRequireDefault(require("../../api/user/user.model"));

_passport.default.use('web3', new _passportCustom.Strategy(async (req, callback) => {
  try {
    const user = await authorizeUser(req);
    if (!user) throw new Error('User not found');
    return callback(null, user);
  } catch (err) {
    return callback(err);
  }
}));

async function authorizeUser(req) {
  const sigAddress = verifyEthSignature(req.body); // user is already logged in

  if (req.user) {
    req.user.ethLogin = sigAddress;
    await req.user.save();
    return req.user;
  }

  return _user.default.findOne({
    ethLogin: sigAddress
  });
}

function verifyEthSignature({
  signature,
  msg
}) {
  if (!signature || !msg) throw Error('Missing signature parameters');

  const sigAddress = _ethers.utils.verifyMessage(JSON.stringify(msg), signature);

  if (sigAddress !== msg.address) throw new Error("Signature doesn't match");
  const {
    exp
  } = msg;
  const claimExp = new Date(exp * 1000);
  if (claimExp < new Date()) throw new Error('This signature is expired');
  return sigAddress;
}
//# sourceMappingURL=passport.js.map