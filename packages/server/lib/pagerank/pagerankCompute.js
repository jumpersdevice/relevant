"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computePageRank;

var _invest = _interopRequireDefault(require("../api/invest/invest.model"));

var _communityMember = _interopRequireDefault(require("../api/community/community.member.model"));

var _community = _interopRequireDefault(require("../api/community/community.model"));

var _globalConstants = require("../config/globalConstants");

var _pagerank = _interopRequireDefault(require("./pagerank"));

var _graph = _interopRequireDefault(require("./graph"));

var _handleResults = require("./handleResults");

/* eslint no-console: 0 */
async function computePageRank(params) {
  const {
    debug,
    communityId,
    community
  } = params;
  if (!community) throw new Error('missing community name');
  let {
    heapUsed
  } = process.memoryUsage();
  let mb = Math.round(100 * heapUsed / 1048576) / 100;
  debug && console.log('Init PR is using ' + mb + 'MB of Heap.');
  const now = new Date();
  const admins = await _communityMember.default.find({
    role: 'admin',
    communityId
  }, 'embeddedUser defaultWeight customAdminWeight pagerank pagerankRaw pagerankRawNeg');
  const usersWithDefaultWeight = await _communityMember.default.find({
    role: 'user',
    communityId,
    defaultWeight: {
      $gt: 0
    }
  }, 'embeddedUser customAdminWeight defaultWeight pagerank pagerankRaw pagerankRawNeg');
  const comObj = await _community.default.findOne({
    _id: communityId
  }, 'danglingConsumer negConsumer');
  const votes = await getVotes(communityId);
  const personalization = {};
  const tranformedAdmins = admins.map(a => {
    const userId = a.embeddedUser._id;
    personalization[userId] = a.customAdminWeight || 1;
    return { ...a.embeddedUser,
      relevance: a
    };
  });
  const {
    nodes,
    postNodes
  } = new _graph.default({
    votes,
    admins: tranformedAdmins,
    community: comObj,
    usersWithDefault: usersWithDefaultWeight.map(u => ({ ...u.embeddedUser,
      relevance: u
    }))
  });

  if (debug) {
    heapUsed = process.memoryUsage().heapUsed;
    mb = Math.round(100 * heapUsed / 1048576) / 100;
    console.log('Before PR - using ' + mb + 'MB of Heap.');
    console.log('user query time ', (new Date().getTime() - now) / 1000 + 's');
  }

  const scores = (0, _pagerank.default)(nodes, {
    personalization,
    debug
  });

  if (debug) {
    heapUsed = process.memoryUsage().heapUsed;
    mb = Math.round(100 * heapUsed / 1048576) / 100;
    debug && console.log('After PR is using ' + mb + 'MB of Heap.');
  }

  await (0, _handleResults.handleResults)({
    scores,
    nodes,
    communityId,
    debug,
    postNodes
  });
}

async function getVotes(communityId) {
  // only look at votes up to a REP_CUTOFF years ago
  const timeLimit = new Date().setFullYear(new Date().getFullYear() - _globalConstants.REP_CUTOFF);
  return _invest.default.find({
    communityId,
    createdAt: {
      $gt: timeLimit
    },
    ownPost: {
      $ne: true
    },
    investor: {
      $exists: true
    }
  }).populate({
    path: 'investor',
    select: 'handle',
    populate: {
      path: 'relevance',
      match: {
        communityId
      },
      select: 'pagerank pagerankRaw pagerankRawNeg'
    }
  }).populate({
    path: 'author',
    select: 'handle',
    populate: {
      path: 'relevance',
      match: {
        communityId
      },
      select: 'pagerank pagerankRaw pagerankRawNeg'
    }
  }).populate({
    path: 'post',
    select: 'title',
    populate: {
      path: 'data',
      select: 'pagerank pagerankRaw pagerankRawNeg body needsRankUpdate'
    }
  });
}
//# sourceMappingURL=pagerankCompute.js.map