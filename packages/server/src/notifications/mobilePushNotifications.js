import apn from 'apn';
import Notification from 'server/api/notification/notification.model';
import User from 'server/api/user/user.model';

/* eslint no-console: 0 */

const options = {
  cert: process.env.APN_CERT || 'server/dev-cert.pem',
  key: process.env.APN_KEY || 'server/dev-key.pem',
  production: process.env.NODE_ENV === 'production'
};

const KEY = process.env.ANDROID_KEY;

const settings = {
  gcm: {
    id: KEY
  },
  apn: {
    cert: process.env.APN_CERT || 'server/dev-cert.pem',
    key: process.env.APN_KEY || 'server/dev-key.pem',
    production: process.env.NODE_ENV === 'production'
  }
};

const PushNotifications = require('node-pushnotifications');

const push = new PushNotifications(settings);

function initNotificationService() {
  try {
    return new apn.Provider(options);
  } catch (err) {
    return { on: () => null };
  }
}
const service = initNotificationService();

service.on('transmissionError', (errCode, notification, device) => {
  if (errCode === 8) {
    const deviceToken = device.toString('utf8');
    User.findOneAndUpdate(
      { _id: notification.payload.toUser },
      { $pull: { deviceTokens: deviceToken } }
    ).exec();
  }
});

service.on('socketError', console.error);

async function handleMobileNotifications(user, alert, payload) {
  try {
    if (!user) return null;

    const userObj = user.toObject();
    if (!userObj.notificationSettings || !userObj.deviceTokens) {
      user = await User.findOne({ _id: user._id });
    }

    if (
      !user.notificationSettings.mobile.all ||
      !user.deviceTokens ||
      !user.deviceTokens.length
    ) {
      return null;
    }

    const { post } = payload;
    const badge = await Notification.countDocuments({
      forUser: user._id,
      read: false
    });

    const registrationIds = [];
    user.deviceTokens.forEach(deviceToken => {
      registrationIds.push(deviceToken);
    });

    const postId = post?.parentPost?._id || post.parentPost || post._id;
    const community =
      post?.data?.community || post.community || post?.parentPost?.data?.community;

    const notePayload = payload.post
      ? {
          postId,
          title: post.title || post?.parentPost?.title,
          community,
          comment: post.parentPost ? post._id : null
        }
      : {};

    const data = {
      body: alert,
      expiry: Math.floor(Date.now() / 1000) + 3600,
      custom: { ...notePayload, toUser: user._id },
      // this has the effect of playing the sound if we have an alert
      // and silence when there is no alert
      // 0 causes the default sound to be played
      sound: alert ? 0 : 1,
      badge,
      topic: 'org.reactjs.native.Relevant',
      contentAvailable: 1
    };

    const results = await push.send(registrationIds, data);

    if (!results) return null;
    let updatedTokens = user.deviceTokens;
    results.forEach(result => {
      result.message.forEach(message => {
        if (message.error) {
          updatedTokens = updatedTokens.filter(token => token !== message.regId);
          console.log('push notification error ', message.error);
        }
      });
    });
    if (updatedTokens.length !== user.deviceTokens.length) {
      user.markModified('deviceTokens');
      user.deviceTokens = updatedTokens;
      user.save();
    }
  } catch (err) {
    console.log('push notifications error', err);
  }
  return null;
}

module.exports = {
  apnConnection: service,
  handleMobileNotifications
};
