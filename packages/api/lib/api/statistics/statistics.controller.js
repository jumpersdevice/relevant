'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _statistics = _interopRequireDefault(require('./statistics.model'));

exports.index = (req, res) => {
  var { time } = req.query;
  time = new Date(time);
  var now = new Date();
  var hour = time.getHours();
  var hour2 = now.getHours();

  _statistics.default.find().exec((err, stats) => {
    res.json(200, {
      stats,
      time,
      now,
      hour,
      hour2
    });
  });
};

exports.user = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { communityId } = req.communityMember;
      var user = req.user._id;
      var start = new Date(req.query.start);
      var end = new Date(req.query.end);
      var stats = yield _statistics.default.find(
        {
          user,
          date: {
            $gte: start,
            $lt: end
          },
          communityId
        },
        'aggregateRelevance totalSamples date communityId'
      );
      res.status(200).json(stats);
    } catch (err) {
      next(err);
    }
  });

  return function(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

exports.change = (req, res, next) => {
  var { id } = req.params;
  if (!id) id = req.user._id;
  if (!id) return next(new Error('No user id'));
  var startTime = new Date(req.query.startTime).setHours(0, 0, 0, 0);
  var endTime = new Date(req.query.endTime).setHours(0, 0, 0, 0);
  var query = {
    user: id,
    startTime: {
      $gte: startTime,
      $lte: endTime
    }
  };
  return _statistics.default.find(query).exec((err, stats) => {
    if (err || !stats.length) return next(err);
    var startDate = new Date(req.query.startTime);
    var startHour = startDate.getHours();
    var endHour = new Date(req.query.endTime).getHours();
    var startObject = stats.find(
      (
        s // console.log(s.startTime == new Date(startTime))
      ) =>
        // console.log('STAT START ', s.startTime.getTime());
        // console.log(startTime);
        s.startTime.getTime() === startTime
    );
    var startAmount;
    if (!startObject) startAmount = 0;
    else startAmount = startObject.hours[startHour] || 0;
    var endAmount = stats[stats.length - 1].hours[endHour] || 0;
    var change;
    if (startAmount) change = ((endAmount - startAmount) * 100) / startAmount;
    else change = 0;
    var response = {
      change,
      startAmount,
      endAmount
    };
    return res.json(200, response);
  });
};
//# sourceMappingURL=statistics.controller.js.map
