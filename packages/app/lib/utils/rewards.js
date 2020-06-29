'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.computePostPayout = computePostPayout;
exports.computeUserPayout = computeUserPayout;
var _common = require('@r3l/common');
function computePostPayout(postData, community) {
  if (!community || !postData || postData.parentPost) return null;
  if (postData.pagerank < community.currentShares / (community.postCount || 1)) {
    return 0;
  }
  postData.payoutShare =
    postData.pagerank / (community.topPostShares + postData.pagerank || 1);
  postData.payout = community.rewardFund * postData.payoutShare;
  return postData.payout / _common.TOKEN_DECIMALS;
}
function computeUserPayout(earning) {
  if (earning.status === 'pending') {
    if (earning.totalPostShares === 0) return 0;
    var estimatedPayout = earning.estimatedPostPayout;
    if (estimatedPayout > 1e8) estimatedPayout /= _common.TOKEN_DECIMALS;
    var payout = (estimatedPayout * earning.shares) / earning.totalPostShares;
    return payout;
  }
  if (earning.earned || earning.status === 'paidout') return earning.earned;
  return 0;
}
//# sourceMappingURL=rewards.js.map
