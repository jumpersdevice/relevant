"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computePageRank;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _invest = _interopRequireDefault(require("../api/invest/invest.model"));

var _communityMember = _interopRequireDefault(require("../api/community/community.member.model"));

var _community = _interopRequireDefault(require("../api/community/community.model"));

var _globalConstants = require("../config/globalConstants");

var _pagerank = _interopRequireDefault(require("./pagerank"));

var _graph = _interopRequireDefault(require("./graph"));

var _handleResults = require("./handleResults");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint no-console: 0 */
function computePageRank(_x) {
  return _computePageRank.apply(this, arguments);
}

function _computePageRank() {
  _computePageRank = (0, _asyncToGenerator2.default)(function* (params) {
    var {
      debug,
      communityId,
      community
    } = params;
    if (!community) throw new Error('missing community name');
    var {
      heapUsed
    } = process.memoryUsage();
    var mb = Math.round(100 * heapUsed / 1048576) / 100;
    debug && console.log('Init PR is using ' + mb + 'MB of Heap.');
    var now = new Date();
    var admins = yield _communityMember.default.find({
      role: 'admin',
      communityId
    }, 'embeddedUser defaultWeight customAdminWeight pagerank pagerankRaw pagerankRawNeg');
    var usersWithDefaultWeight = yield _communityMember.default.find({
      role: 'user',
      communityId,
      defaultWeight: {
        $gt: 0
      }
    }, 'embeddedUser customAdminWeight defaultWeight pagerank pagerankRaw pagerankRawNeg');
    var comObj = yield _community.default.findOne({
      _id: communityId
    }, 'danglingConsumer negConsumer');
    var votes = yield getVotes(communityId);
    var personalization = {};
    var tranformedAdmins = admins.map(a => {
      var userId = a.embeddedUser._id;
      personalization[userId] = a.customAdminWeight || 1;
      return _objectSpread(_objectSpread({}, a.embeddedUser), {}, {
        relevance: a
      });
    });
    var {
      nodes,
      postNodes
    } = new _graph.default({
      votes,
      admins: tranformedAdmins,
      community: comObj,
      usersWithDefault: usersWithDefaultWeight.map(u => _objectSpread(_objectSpread({}, u.embeddedUser), {}, {
        relevance: u
      }))
    });

    if (debug) {
      heapUsed = process.memoryUsage().heapUsed;
      mb = Math.round(100 * heapUsed / 1048576) / 100;
      console.log('Before PR - using ' + mb + 'MB of Heap.');
      console.log('user query time ', (new Date().getTime() - now) / 1000 + 's');
    }

    var scores = (0, _pagerank.default)(nodes, {
      personalization,
      debug
    });

    if (debug) {
      heapUsed = process.memoryUsage().heapUsed;
      mb = Math.round(100 * heapUsed / 1048576) / 100;
      debug && console.log('After PR is using ' + mb + 'MB of Heap.');
    }

    yield (0, _handleResults.handleResults)({
      scores,
      nodes,
      communityId,
      debug,
      postNodes
    });
  });
  return _computePageRank.apply(this, arguments);
}

function getVotes(_x2) {
  return _getVotes.apply(this, arguments);
}

function _getVotes() {
  _getVotes = (0, _asyncToGenerator2.default)(function* (communityId) {
    // only look at votes up to a REP_CUTOFF years ago
    var timeLimit = new Date().setFullYear(new Date().getFullYear() - _globalConstants.REP_CUTOFF);
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
  });
  return _getVotes.apply(this, arguments);
}
//# sourceMappingURL=pagerankCompute.js.map