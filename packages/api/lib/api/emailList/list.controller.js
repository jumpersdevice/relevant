'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _list = _interopRequireDefault(require('./list.model'));

var InviteController = _interopRequireWildcard(require('../invites/invite.controller'));

// List.countDocuments({ status: { $exists: false } }).then(c => console.log('Waitlist', c));
// List.find({}).then(u => u.map(c => console.log('List', c.toObject())));
exports.index = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var list = yield _list.default.find({
        status: {
          $ne: 'invited'
        }
      });
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  });

  return function(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

exports.addWaitlist = /*#__PURE__*/ (function() {
  var _ref2 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { email } = req.body;
      if (!email) throw new Error('no email');
      email = email.trim();
      var waitlist = yield _list.default
        .findOneAndUpdate(
          {
            email
          },
          req.body,
          {
            upsert: true,
            new: true
          }
        )
        .exec();
      res.status(200).json(waitlist);
    } catch (err) {
      next(err);
    }
  });

  return function(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
})();
/*
  req.body should contains an array of invite objects
  [{
    invitedBy: handle,
    invitedByString: inviter name,
    name: invitee name
    email: eamil
  }]
 */

exports.invite = /*#__PURE__*/ (function() {
  var _ref3 = (0, _asyncToGenerator2.default)(function*(req) {
    var invites = req.body;
    invites = yield InviteController.createInvites(invites);
    yield _list.default
      .update(
        {
          _id: {
            $in: invites.map(i => i._id)
          }
        },
        {
          status: 'invited'
        },
        {
          multi: true
        }
      )
      .exec();
    return invites;
  });

  return function(_x7) {
    return _ref3.apply(this, arguments);
  };
})();

exports.delete = /*#__PURE__*/ (function() {
  var _ref4 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { id } = req.params;
      yield _list.default
        .findOne({
          _id: id
        })
        .remove();
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  });

  return function(_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
})();
//# sourceMappingURL=list.controller.js.map
