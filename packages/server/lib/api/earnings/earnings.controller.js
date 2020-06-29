"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _earnings = _interopRequireDefault(require("./earnings.model"));

exports.index = async (req, res, next) => {
  try {
    const {
      user
    } = req;
    const {
      status
    } = req.query;
    const limit = parseInt(req.query.limit, 10);
    const skip = parseInt(req.query.skip, 10);
    let query = {
      user: user._id,
      status: {
        $ne: 'expired'
      }
    };
    if (status && status !== 'all') query = {
      user: user._id,
      status
    };
    const earnings = await _earnings.default.find(query).populate({
      path: 'post',
      populate: [{
        path: 'data'
      }, {
        path: 'metaPost'
      }]
    }).limit(limit).skip(skip).sort({
      createdAt: -1
    });
    res.status(200).json(earnings);
  } catch (err) {
    next(err);
  }
};

exports.updateCashoutLog = async (req, res, next) => {
  try {
    const {
      user
    } = req;
    const _id = req.params.id;
    const earning = await _earnings.default.findOneAndUpdate({
      _id,
      cashOutAttempt: true
    }, {
      status: 'completed'
    }, {
      new: true
    });
    await user.updateBalance();
    await user.save();
    res.status(200).json({
      earning,
      user
    });
  } catch (err) {
    next(err);
  }
};
//# sourceMappingURL=earnings.controller.js.map