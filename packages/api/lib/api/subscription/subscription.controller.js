'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _subscription = _interopRequireDefault(require('./subscription.model'));

exports.index = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    var subscriptions;

    try {
      var user = req.user._id;
      subscriptions = yield _subscription.default.find({
        follower: user,
        amount: {
          $ne: 0
        }
      });
    } catch (err) {
      next(err);
    }

    return res.status(200).json(subscriptions);
  });

  return function(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

exports.search = (req, res, next) => {
  var { query } = req;

  _subscription.default
    .find(query)
    .then(subscriptions => {
      res.status(200).json(subscriptions);
    })
    .catch(next);
};
//# sourceMappingURL=subscription.controller.js.map
