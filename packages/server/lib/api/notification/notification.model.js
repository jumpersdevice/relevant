"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _socketEvent = _interopRequireDefault(require("../../socket/socketEvent"));

const {
  Schema
} = _mongoose.default;
const NotificationSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  forUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  byUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  byUsers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  byUsersHandle: [String],
  group: [String],
  totalUsers: Number,
  read: {
    type: Boolean,
    default: false
  },
  // Deprecated
  comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  },
  amount: Number,
  coin: Number,
  source: {
    type: String,
    default: 'post'
  },
  type: String,
  personal: {
    type: Boolean,
    default: true
  },
  tag: {
    type: String,
    ref: 'Tag'
  },
  text: {
    type: String
  },
  coinType: String
}, {
  timestamps: true
});
NotificationSchema.index({
  forUser: 1
});
NotificationSchema.index({
  forUser: 1,
  _id: 1
});
NotificationSchema.index({
  forUser: 1,
  _id: 1,
  createdAt: 1
});

NotificationSchema.statics.createNotification = async function createNotification(notificationObject) {
  let notification = new this(notificationObject);
  notification = await notification.save();
  const earningNotificationEvent = {
    _id: notificationObject.forUser,
    type: 'ADD_ACTIVITY',
    payload: notification
  };

  _socketEvent.default.emit('socketEvent', earningNotificationEvent);

  return notification;
};

NotificationSchema.pre('save', function limitNotifications(next) {
  this.model('Notification').countDocuments({
    forUser: this.forUser
  }, (err, c) => {
    if (c >= 500) {
      this.model('Notification').find({
        forUser: this.forUser
      }).sort({
        _id: 1
      }).then(results => {
        results[0].remove();
      });
      next();
    } else {
      next();
    }
  });
});
module.exports = _mongoose.default.model('Notification', NotificationSchema);
//# sourceMappingURL=notification.model.js.map