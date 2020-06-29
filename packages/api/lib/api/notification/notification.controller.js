'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _socketEvent = _interopRequireDefault(require('../../socket/socketEvent'));

var Notification = require('./notification.model');

exports.create = (req, res, next) => {
  var dbNotificationObj = {
    post: req.body.post ? req.body.post : null,
    forUser: req.body.forUser ? req.body.forUser : null,
    byUser: req.body.byUser ? req.body.byUser : null,
    amount: req.body.amount ? req.body.amount : null,
    type: req.body.type ? req.body.type : null,
    personal: req.body.personal ? req.body.personal : false,
    read: false,
    tag: req.body.tag ? req.body.tag : null
  };
  var newNotification = new Notification(dbNotificationObj);
  return newNotification
    .save()
    .then(() => {
      var newNotifObj = {
        _id: req.body.forUser,
        type: 'ADD_ACTIVITY'
      };

      if (newNotification.personal) {
        _socketEvent.default.emit('socketEvent', newNotifObj);
      }

      res.send(200).send();
    })
    .catch(next);
};

exports.show = (req, res, next) => {
  var query = null;
  var userId = req.user._id;
  var skip = parseInt(req.query.skip, 10) || 0;
  var limit = 20;

  if (userId) {
    query = {
      $or: [
        {
          forUser: userId
        },
        {
          group: 'everyone'
        }
      ]
    };
  }

  Notification.find(query)
    .limit(limit)
    .skip(skip)
    .sort({
      _id: -1
    }) // .populate('byUser')
    .populate({
      path: 'byUser',
      populate: {
        path: 'relevance',
        match: {
          community: req.query.community
        }
      }
    })
    .populate({
      path: 'post',
      populate: [
        {
          path: 'metaPost'
        },
        {
          path: 'parentPost'
        },
        {
          path: 'data'
        }
      ]
    })
    .then(notifications => res.status(200).json(notifications))
    .catch(next);
};

exports.unread = (req, res, next) => {
  var query = null;
  var userId = req.user._id;

  if (userId) {
    query = {
      forUser: userId,
      read: false
    };
  }

  Notification.countDocuments(query)
    .then(unread => {
      res.status(200).json({
        unread
      });
    })
    .catch(next);
};

exports.showGeneral = (req, res, next) => {
  var avoidUser = req.user._id;
  var skip = parseInt(req.query.skip, 10) || 0;
  var limit = 20;
  var query = {
    personal: false
  };
  if (avoidUser)
    query = {
      $and: [
        {
          personal: false
        },
        {
          byUser: {
            $ne: avoidUser
          }
        }
      ]
    };
  Notification.find(query)
    .limit(limit)
    .skip(skip)
    .sort({
      _id: -1
    })
    .populate('byUser post tag')
    .then(notifications => res.status(200).json(notifications))
    .catch(next);
};

exports.markRead = (req, res, next) => {
  var query = {
    forUser: req.user._id,
    read: false
  };
  return Notification.updateMany(
    query,
    {
      read: true
    },
    {
      multi: true
    }
  )
    .then(() => res.status(200).send())
    .catch(next);
};
//# sourceMappingURL=notification.controller.js.map
