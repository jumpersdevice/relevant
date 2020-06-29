"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runAudit = runAudit;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../api/user/user.model"));

var _earnings = _interopRequireDefault(require("../api/earnings/earnings.model"));

var _invest = _interopRequireDefault(require("../api/invest/invest.model"));

var _postData = _interopRequireDefault(require("../api/post/postData.model"));

var _mail = require("./mail");

/* eslint no-console: 0 */

/* eslint no-unused-vars: 0 */
var queue = require('queue');

var q = queue({
  concurrency: 1
});
var {
  RELEVANT_ENV,
  SYS_ADMIN_EMAIL
} = process.env;

function runAudit() {
  return _runAudit.apply(this, arguments);
} // runAudit();


function _runAudit() {
  _runAudit = (0, _asyncToGenerator2.default)(function* () {
    try {
      yield auditUserEarnings();
      console.log('finished audit');
    } catch (err) {
      console.log(err);
    }
  });
  return _runAudit.apply(this, arguments);
}

function sendAdminAlert(_x, _x2) {
  return _sendAdminAlert.apply(this, arguments);
}

function _sendAdminAlert() {
  _sendAdminAlert = (0, _asyncToGenerator2.default)(function* (user, diff) {
    if (RELEVANT_ENV !== 'production') return null;
    var data = {
      from: 'Relevant <info@relevant.community>',
      to: 'slava@relevant.community',
      subject: 'User balance discreptacy',
      html: "\n      user: @".concat(user.handle, "\n      discreptacy: ").concat(diff, "\n      <br />\n      <br />\n      user object:\n      <br />\n      ").concat(JSON.stringify(user), "\n      <br />\n      ")
    };
    return (0, _mail.sendEmail)(data);
  });
  return _sendAdminAlert.apply(this, arguments);
}

function auditUserEarnings() {
  return _auditUserEarnings.apply(this, arguments);
}

function _auditUserEarnings() {
  _auditUserEarnings = (0, _asyncToGenerator2.default)(function* () {
    var users = yield _user.default.find({
      balance: {
        $gt: 0
      }
    });
    var audited = users.map(userEarnings);
    return Promise.all(audited);
  });
  return _auditUserEarnings.apply(this, arguments);
}

function userEarnings(_x3) {
  return _userEarnings.apply(this, arguments);
}

function _userEarnings() {
  _userEarnings = (0, _asyncToGenerator2.default)(function* (user) {
    var earnings = yield _earnings.default.find({
      user: user._id,
      $or: [{
        status: 'paidout'
      }]
    });
    var totalRewards = earnings.reduce((a, e) => e.earned + a, 0);
    var diff = difference(user, totalRewards);

    if (Math.abs(diff) > 0.000001) {
      console.log('error! earnings mismatch for', user._id);
      var userCashoutLog = yield _earnings.default.find({
        user: user._id,
        cashOutAttempt: true
      });
      var cashedOut = userCashoutLog.filter(e => e.status === 'completed').reduce((a, e) => a + e.cashOutAmt, 0);
      logUser(user, totalRewards);
      console.log(user.handle, 'discrepancy', diff);
      console.log(user.handle, 'cashed out is', user.cashedOut, 'should be', cashedOut);
      sendAdminAlert(user, diff);
    }
  });
  return _userEarnings.apply(this, arguments);
}

function difference(user, totalRewards) {
  return user.balance + user.cashedOut - user.airdropTokens - totalRewards - user.legacyTokens - user.legacyAirdrop;
}

function logUser(user, totalRewards) {
  console.log(user.handle, 'balance:', user.balance, 'tokenBalance:', user.tokenBalance, 'newRewards:', totalRewards, 'airdrop / referral', user.airdropTokens, '/', user.referralTokens, 'legacyRewards:', user.legacyTokens, 'legacyAirdrop:', user.legacyAirdrop, 'cashedOut:', user.cashedOut);
}

function auditUser(_x4) {
  return _auditUser.apply(this, arguments);
}

function _auditUser() {
  _auditUser = (0, _asyncToGenerator2.default)(function* (handle) {
    var user = yield _user.default.findOne({
      handle
    });
    var earnings = yield _earnings.default.find({
      user: user._id,
      $or: [{
        status: 'paidout'
      }, {
        status: 'expired'
      }]
    }).populate('post');
    var totalEarnigns = earnings.reduce((a, e) => e.earned + a, 0);
    var diff = difference(user, totalEarnigns);
    var adjust = 0;
    var postData = yield earnings.map( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)(function* (e) {
        var investments = yield _invest.default.find({
          post: e.post._id,
          investor: user._id
        });

        if (investments.length > 1) {
          console.log('multiple inv', investments);
        }

        var investment = investments[0];
        var postdata = yield _postData.default.findOne({
          post: e.post,
          communityId: investment.communityId
        });

        if (!postdata) {
          console.log('missing post data for', e);
          console.log(' ');
          return;
        }

        if (e.communityId && !investment.communityId.equals(e.communityId)) {
          console.log('invest/earning mismatch', e.community, investment.community);

          if (!e.communityId) {// e.communityId = investment.communityId;
            // e.community = investment.community;
          }
        }

        var postInv = yield _invest.default.find({
          post: e.post._id
        });
        var invShares = postInv.reduce((a, inv) => inv.shares + a, 0);
        var estimatedReward = !postdata.payout ? 0 : postdata.payout * e.shares * 1e-18 / invShares;

        if (Math.abs(estimatedReward - e.earned) > 0.001) {
          console.log(e.post._id, e.post.title);
          console.log('shares', e.totalPostShares, postdata.shares, invShares);
          console.log('est vs payout', e.estimatedPostPayout, postdata.payout * 1e-18);
          console.log(estimatedReward, 'vs', e.earned);
          console.log('invest', investment.community, investment.createdAt);
          console.log('post', postdata.community, investment.createdAt);
          console.log('earning', e.community, e.earned, e.status);
          adjust += estimatedReward - e.earned;
          user.balance -= e.earned;
          diff = difference(user, totalEarnigns);
          e.communityId = investment.communityId;
          e.community = investment.community;
          e.earned = estimatedReward;
          e.status = 'paidout'; // await e.save();

          console.log(' ');
        }
      });

      return function (_x5) {
        return _ref.apply(this, arguments);
      };
    }());
    yield Promise.all(postData); // user.balance -= diff;
    // await user.save();

    console.log(adjust, 'vs', diff);
  });
  return _auditUser.apply(this, arguments);
}

function listAllBalances() {
  return _listAllBalances.apply(this, arguments);
}

function _listAllBalances() {
  _listAllBalances = (0, _asyncToGenerator2.default)(function* () {
    var users = yield _user.default.find({
      balance: {
        $gt: 0
      }
    }).sort('-balance');
    users.forEach(u => console.log(u.handle, ',', u.balance));
  });
  return _listAllBalances.apply(this, arguments);
}
//# sourceMappingURL=tokenAudit.js.map