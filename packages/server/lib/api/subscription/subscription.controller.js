"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _subscription = _interopRequireDefault(require("./subscription.model"));

exports.index = async (req, res, next) => {
  let subscriptions;

  try {
    const user = req.user._id;
    subscriptions = await _subscription.default.find({
      follower: user,
      amount: {
        $ne: 0
      }
    });
  } catch (err) {
    next(err);
  }

  return res.status(200).json(subscriptions);
};

exports.search = (req, res, next) => {
  const {
    query
  } = req;

  _subscription.default.find(query).then(subscriptions => {
    res.status(200).json(subscriptions);
  }).catch(next);
};
//# sourceMappingURL=subscription.controller.js.map