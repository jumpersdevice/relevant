"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logCashOut = logCashOut;
exports.getTotalEarnings = getTotalEarnings;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _earnings = _interopRequireDefault(require("../api/earnings/earnings.model"));

function logCashOut(_x, _x2) {
  return _logCashOut.apply(this, arguments);
}

function _logCashOut() {
  _logCashOut = (0, _asyncToGenerator2.default)(function* (user, cashOutAmt) {
    var earnings = yield _earnings.default.find({
      user: user._id,
      status: 'paidout',
      earned: {
        $gt: 0
      }
    });
    var totalPreviousPaidout = earnings.reduce(getTotalEarnings, 0);
    var cashOutLog = new _earnings.default({
      user: user._id,
      cashOutAttempt: true,
      cashOutAmt,
      prevBalance: user.balance,
      endBalance: user.balance - cashOutAmt,
      totalPreviousPaidout,
      legacyAirdrop: user.legacyAirdrop,
      referralTokens: user.referralTokens,
      airdropTokens: user.airdropTokens,
      status: 'in progress',
      source: 'wallet'
    });
    yield cashOutLog.save();
    return cashOutLog;
  });
  return _logCashOut.apply(this, arguments);
}

function getTotalEarnings(total, currentVal) {
  total += currentVal.earned;
  return total;
}
//# sourceMappingURL=cashOut.js.map