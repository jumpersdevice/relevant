"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logCashOut = logCashOut;
exports.getTotalEarnings = getTotalEarnings;

var _earnings = _interopRequireDefault(require("../api/earnings/earnings.model"));

async function logCashOut(user, cashOutAmt) {
  const earnings = await _earnings.default.find({
    user: user._id,
    status: 'paidout',
    earned: {
      $gt: 0
    }
  });
  const totalPreviousPaidout = earnings.reduce(getTotalEarnings, 0);
  const cashOutLog = new _earnings.default({
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
  await cashOutLog.save();
  return cashOutLog;
}

function getTotalEarnings(total, currentVal) {
  total += currentVal.earned;
  return total;
}
//# sourceMappingURL=cashOut.js.map