'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _mongoose = _interopRequireDefault(require('mongoose'));

var _socketEvent = _interopRequireDefault(require('../../socket/socketEvent'));

var { Schema } = _mongoose.default;
var NotificationSchema = new Schema(
  {
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
    byUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
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
  },
  {
    timestamps: true
  }
);
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

NotificationSchema.statics.createNotification = /*#__PURE__*/ (function() {
  var _createNotification = (0, _asyncToGenerator2.default)(function*(
    notificationObject
  ) {
    var notification = new this(notificationObject);
    notification = yield notification.save();
    var earningNotificationEvent = {
      _id: notificationObject.forUser,
      type: 'ADD_ACTIVITY',
      payload: notification
    };

    _socketEvent.default.emit('socketEvent', earningNotificationEvent);

    return notification;
  });

  function createNotification(_x) {
    return _createNotification.apply(this, arguments);
  }

  return createNotification;
})();

NotificationSchema.pre('save', function limitNotifications(next) {
  this.model('Notification').countDocuments(
    {
      forUser: this.forUser
    },
    (err, c) => {
      if (c >= 500) {
        this.model('Notification')
          .find({
            forUser: this.forUser
          })
          .sort({
            _id: 1
          })
          .then(results => {
            results[0].remove();
          });
        next();
      } else {
        next();
      }
    }
  );
});
module.exports = _mongoose.default.model('Notification', NotificationSchema);
//# sourceMappingURL=notification.model.js.map
