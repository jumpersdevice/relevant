"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userVotePower = exports.BANNED_USER_HANDLES = exports.BANNED_COMMUNITY_SLUGS = exports.newUserCoins = exports.getRewardForType = exports.MAX_AIRDROP = exports.totalAllowedInvites = exports.TOKEN_DECIMALS = exports.REDDIT_REWARD = exports.CASHOUT_MAX = exports.CASHOUT_LIMIT = exports.EMAIL_REWARD = exports.TWITTER_REWARD = exports.REFERRAL_REWARD = exports.PUBLIC_LINK_REWARD = exports.MINIMUM_RANK = exports.REP_CUTOFF_POSTS = exports.REP_CUTOFF = exports.RELEVANCE_DECAY_POSTS = exports.RELEVANCE_DECAY = exports.POWER_REGEN_INTERVAL = exports.EXPONENT = exports.SLOPE = exports.VOTE_COST_RATIO = exports.PAYOUT_TIME = exports.TWITTER_DECAY = exports.SHARE_DECAY = exports.INIT_COIN = exports.INTERVAL_INFLAITION = exports.YEARLY_INFLATION = exports.PAYOUT_FREQUENCY_FRACTION = exports.PAYOUT_FREQUENCY = exports.DAYS = exports.HOURS = void 0;
var HOURS = 60 * 60 * 1000;
exports.HOURS = HOURS;
var DAYS = HOURS * 24;
exports.DAYS = DAYS;
var PAYOUT_FREQUENCY = 1 * HOURS; // how often we compute payouts

exports.PAYOUT_FREQUENCY = PAYOUT_FREQUENCY;
var PAYOUT_FREQUENCY_FRACTION = 1 / (365 * 24); // fraction of year

exports.PAYOUT_FREQUENCY_FRACTION = PAYOUT_FREQUENCY_FRACTION;
var YEARLY_INFLATION = 0.1; // 10%

exports.YEARLY_INFLATION = YEARLY_INFLATION;
var INTERVAL_INFLAITION = (1 + YEARLY_INFLATION) ** PAYOUT_FREQUENCY_FRACTION - 1;
exports.INTERVAL_INFLAITION = INTERVAL_INFLAITION;
var INIT_COIN = 1000000;
exports.INIT_COIN = INIT_COIN;
var SHARE_DECAY = 6 * DAYS; // time it takes to decay payout post shares

exports.SHARE_DECAY = SHARE_DECAY;
var TWITTER_DECAY = 12 * HOURS; // time it takes to decay payout post shares

exports.TWITTER_DECAY = TWITTER_DECAY;
var PAYOUT_TIME = 3 * DAYS; // time it takes for post to pay out

exports.PAYOUT_TIME = PAYOUT_TIME;
var VOTE_COST_RATIO = 0.1; // votes cost 10% of user balance
// export const NEW_USER_COINS = 20; // amount of coins new users get

exports.VOTE_COST_RATIO = VOTE_COST_RATIO;
var SLOPE = 1 / 1; // slope of bonding curve for posts

exports.SLOPE = SLOPE;
var EXPONENT = 1; // exponent for bonding curve price formula

exports.EXPONENT = EXPONENT;
var POWER_REGEN_INTERVAL = 24 * 60 * 60 * 1000; // 1 day to fully regenerate vote power

exports.POWER_REGEN_INTERVAL = POWER_REGEN_INTERVAL;
var RELEVANCE_DECAY = 90 * DAYS; // half life of relevance

exports.RELEVANCE_DECAY = RELEVANCE_DECAY;
var RELEVANCE_DECAY_POSTS = 90 * DAYS; // half life of relevance

exports.RELEVANCE_DECAY_POSTS = RELEVANCE_DECAY_POSTS;
var REP_CUTOFF = 2; // number of years before we ignore votes for users

exports.REP_CUTOFF = REP_CUTOFF;
var REP_CUTOFF_POSTS = 90 * DAYS; // time before we ignore votes for posts

exports.REP_CUTOFF_POSTS = REP_CUTOFF_POSTS;
var MINIMUM_RANK = 1; // minimum rank to be considered for rewards

exports.MINIMUM_RANK = MINIMUM_RANK;
var PUBLIC_LINK_REWARD = 5; // amount of tokens you get for public referral

exports.PUBLIC_LINK_REWARD = PUBLIC_LINK_REWARD;
var REFERRAL_REWARD = 20; // amount of tokens awarded both the referrer and referee

exports.REFERRAL_REWARD = REFERRAL_REWARD;
var TWITTER_REWARD = 20; // amount of tokens awarded for connecting twitter

exports.TWITTER_REWARD = TWITTER_REWARD;
var EMAIL_REWARD = 20; // amount of tokens awarded for connecting email
// TODO: Deprecate CASHOUT_LIMIT

exports.EMAIL_REWARD = EMAIL_REWARD;
var CASHOUT_LIMIT = 0; // amount of tokens one needs to earn to cash out

exports.CASHOUT_LIMIT = CASHOUT_LIMIT;
var CASHOUT_MAX = 1000;
exports.CASHOUT_MAX = CASHOUT_MAX;
var REDDIT_REWARD = 5;
exports.REDDIT_REWARD = REDDIT_REWARD;
var TOKEN_DECIMALS = 1e18;
exports.TOKEN_DECIMALS = TOKEN_DECIMALS;

var totalAllowedInvites = pagerank => {
  if (pagerank < 1) return 0;
  if (pagerank < 3) return 1;
  if (pagerank < 5) return 2;
  if (pagerank < 10) return 3;
  if (pagerank < 20) return 8;
  if (pagerank < 40) return 13;
  if (pagerank < 60) return 23;
  if (pagerank < 80) return 33;
  return 100;
};

exports.totalAllowedInvites = totalAllowedInvites;
var MAX_AIRDROP = 300;
exports.MAX_AIRDROP = MAX_AIRDROP;

var getRewardForType = type => {
  switch (type) {
    case 'reddit':
      return REDDIT_REWARD;

    case 'email':
      return EMAIL_REWARD;

    case 'twitter':
      return TWITTER_REWARD;

    case 'referral':
      return REFERRAL_REWARD;

    case 'referredBy':
      return REFERRAL_REWARD;

    case 'publicLink':
    case 'publicInvite':
      return PUBLIC_LINK_REWARD;

    default:
      return 0;
  }
};

exports.getRewardForType = getRewardForType;

var newUserCoins = user => {
  var reward = 0;
  if (user.email && user.confirmed) reward = EMAIL_REWARD;
  if (user.twitterId) reward = EMAIL_REWARD + TWITTER_REWARD;
  return reward;
};

exports.newUserCoins = newUserCoins;
var BANNED_COMMUNITY_SLUGS = ['admin', 'user', 'channel', 'home', 'auth', 'profile', 'communities', 'subscriptions', 'graphql'];
exports.BANNED_COMMUNITY_SLUGS = BANNED_COMMUNITY_SLUGS;
var BANNED_USER_HANDLES = [...BANNED_COMMUNITY_SLUGS, 'everyone', 'group', 'all', 'invite'];
exports.BANNED_USER_HANDLES = BANNED_USER_HANDLES;

var userVotePower = pagerank => Math.round(Math.sqrt(1 + pagerank * 4));

exports.userVotePower = userVotePower;
//# sourceMappingURL=globalConstants.js.map