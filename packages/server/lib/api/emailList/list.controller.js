"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _list = _interopRequireDefault(require("./list.model"));

var InviteController = _interopRequireWildcard(require("../invites/invite.controller"));

// List.countDocuments({ status: { $exists: false } }).then(c => console.log('Waitlist', c));
// List.find({}).then(u => u.map(c => console.log('List', c.toObject())));
exports.index = async (req, res, next) => {
  try {
    const list = await _list.default.find({
      status: {
        $ne: 'invited'
      }
    });
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

exports.addWaitlist = async (req, res, next) => {
  try {
    let {
      email
    } = req.body;
    if (!email) throw new Error('no email');
    email = email.trim();
    const waitlist = await _list.default.findOneAndUpdate({
      email
    }, req.body, {
      upsert: true,
      new: true
    }).exec();
    res.status(200).json(waitlist);
  } catch (err) {
    next(err);
  }
};
/*
  req.body should contains an array of invite objects
  [{
    invitedBy: handle,
    invitedByString: inviter name,
    name: invitee name
    email: eamil
  }]
 */


exports.invite = async req => {
  let invites = req.body;
  invites = await InviteController.createInvites(invites);
  await _list.default.update({
    _id: {
      $in: invites.map(i => i._id)
    }
  }, {
    status: 'invited'
  }, {
    multi: true
  }).exec();
  return invites;
};

exports.delete = async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    await _list.default.findOne({
      _id: id
    }).remove();
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
//# sourceMappingURL=list.controller.js.map