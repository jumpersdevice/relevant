'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getStatParams = getStatParams;
exports.getActivityParams = getActivityParams;
function getStatParams(activity) {
  var _ref = {},
    relevance = _ref.relevance,
    coin = _ref.coin;
  switch (activity.type) {
    case 'upvote':
    case 'partialUpvote':
    case 'downvote':
    case 'partialDownvote':
      relevance = true;
      break;
    case 'vote':
    case 'basicIncome':
      coin = true;
      break;
    default:
      if (activity.coin) coin = true;
  }
  return { relevance: relevance, coin: coin };
}
function getActivityParams(activity) {
  var post = activity.post;
  var emoji;
  var userImage;
  var image;
  var byUser;
  switch (activity.type) {
    case 'upvote':
    case 'partialUpvote':
    case 'downvote':
    case 'partialDownvote':
    case 'reward_referral':
    case 'reward_referredBy':
    case 'reward_publicInvite':
    case 'reward_publicLink':
    case 'mention':
    case 'commentMention':
    case 'postMention':
      if (activity.byUser) userImage = activity.byUser;
      else emoji = '☺️';
      byUser = activity.byUser;
      break;
    case 'basicIncome':
    case 'reward':
    case 'reward_twitter':
    case 'reward_email':
    case 'reward_reddit':
      emoji = '☺️';
      break;
    case 'topPost':
      image = require('../../../public/img/r-emoji.png');
      break;
    default:
      userImage = activity.byUser;
      byUser = activity.byUser;
      break;
  }
  return { emoji: emoji, userImage: userImage, post: post, image: image, byUser: byUser };
}
//# sourceMappingURL=activityHelper.js.map
