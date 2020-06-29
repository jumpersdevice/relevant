"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _communityMember = _interopRequireDefault(require("./api/community/community.member.model"));

var _queue = _interopRequireDefault(require("queue"));

var _pagerankCompute = _interopRequireDefault(require("./pagerank/pagerankCompute"));

var _statistics = _interopRequireDefault(require("./api/statistics/statistics.model"));

var _community = _interopRequireDefault(require("./api/community/community.model"));

var _ethRewards = _interopRequireDefault(require("./utils/ethRewards"));

/* eslint no-console: 0 */
var relevantEnv = process.env.RELEVANT_ENV;
var q = (0, _queue.default)({
  concurrency: 5
});
q.on('timeout', (next, job) => {
  console.log('job timed out:', job.toString().replace(/\n/g, ''));
  next();
});

function updateUserStats() {
  return _updateUserStats.apply(this, arguments);
}

function _updateUserStats() {
  _updateUserStats = (0, _asyncToGenerator2.default)(function* () {
    var repuatations = yield _communityMember.default.find({});
    repuatations.forEach(rel => {
      q.push( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)(function* (cb) {
          var date = new Date();
          var hour = date.getHours();
          var day = date.setUTCHours(0, 0, 0, 0);
          var endTime = day + 24 * 60 * 60 * 1000;
          var query = {
            user: rel.user,
            date: day,
            endTime,
            communityId: rel.communityId
          };
          var set = {};
          set['hours.' + hour] = rel.pagerank || 0;
          var update = {
            $set: set,
            $inc: {
              aggregateRelevance: rel.pagerank,
              totalSamples: 1
            }
          };
          yield _statistics.default.findOneAndUpdate(query, update, {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true
          });
          cb();
        });

        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());
    });
    return new Promise((resolve, reject) => {
      q.start(err => err ? reject(err) : resolve());
    });
  });
  return _updateUserStats.apply(this, arguments);
}

function updateRepChange() {
  return _updateRepChange.apply(this, arguments);
} // eslint-disable-next-line


function _updateRepChange() {
  _updateRepChange = (0, _asyncToGenerator2.default)(function* () {
    var rep = yield _communityMember.default.find();
    rep.forEach(userRep => q.push( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* (cb) {
        try {
          if (userRep.user) {
            // updates % stats
            yield userRep.updateRelevanceRecord();
            yield userRep.save();
          }
        } catch (err) {
          console.log('error updating topic relevance income ', err);
        }

        cb();
      });

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }()));
    return new Promise((resolve, reject) => {
      q.start(err => err ? reject(err) : resolve());
    });
  });
  return _updateRepChange.apply(this, arguments);
}

function pagerank(_x) {
  return _pagerank.apply(this, arguments);
}

function _pagerank() {
  _pagerank = (0, _asyncToGenerator2.default)(function* (community) {
    var communityId = (yield _community.default.findOne({
      slug: community
    }))._id;
    yield (0, _pagerankCompute.default)({
      communityId,
      community,
      debug: true
    });
  });
  return _pagerank.apply(this, arguments);
}

function updateRewards() {
  return _updateRewards.apply(this, arguments);
}

function _updateRewards() {
  _updateRewards = (0, _asyncToGenerator2.default)(function* () {
    try {
      yield _ethRewards.default.rewards();
      console.log('done updating rewards');
    } catch (err) {
      console.log(err);
    }

    try {
      yield updateUserStats();
      console.log('done updating stats');
      var now = new Date();

      if (now.getUTCHours() === 14) {
        yield updateRepChange();
        console.log('done updating rep stats: ');
      }
    } catch (err) {
      console.log(err);
    }

    if (relevantEnv === 'staging' || process.env.NODE_ENV === 'native') {
      return;
    }

    process.exit();
  });
  return _updateRewards.apply(this, arguments);
}

if (process.env.NODE_ENV === 'production') {
  updateRewards();
}

module.exports = {
  updateUserStats,
  updateRepChange
};
//# sourceMappingURL=queue.js.map