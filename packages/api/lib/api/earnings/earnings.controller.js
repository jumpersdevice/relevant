'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _earnings = _interopRequireDefault(require('./earnings.model'));

exports.index = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      var { status } = req.query;
      var limit = parseInt(req.query.limit, 10);
      var skip = parseInt(req.query.skip, 10);
      var query = {
        user: user._id,
        status: {
          $ne: 'expired'
        }
      };
      if (status && status !== 'all')
        query = {
          user: user._id,
          status
        };
      var earnings = yield _earnings.default
        .find(query)
        .populate({
          path: 'post',
          populate: [
            {
              path: 'data'
            },
            {
              path: 'metaPost'
            }
          ]
        })
        .limit(limit)
        .skip(skip)
        .sort({
          createdAt: -1
        });
      res.status(200).json(earnings);
    } catch (err) {
      next(err);
    }
  });

  return function(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

exports.updateCashoutLog = /*#__PURE__*/ (function() {
  var _ref2 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      var _id = req.params.id;
      var earning = yield _earnings.default.findOneAndUpdate(
        {
          _id,
          cashOutAttempt: true
        },
        {
          status: 'completed'
        },
        {
          new: true
        }
      );
      yield user.updateBalance();
      yield user.save();
      res.status(200).json({
        earning,
        user
      });
    } catch (err) {
      next(err);
    }
  });

  return function(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
})();
//# sourceMappingURL=earnings.controller.js.map
