'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _apn = _interopRequireDefault(require('apn'));

var _notification = _interopRequireDefault(
  require('../api/notification/notification.model')
);

var _user = _interopRequireDefault(require('../api/user/user.model'));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

/* eslint no-console: 0 */
var options = {
  cert: process.env.APN_CERT || 'server/dev-cert.pem',
  key: process.env.APN_KEY || 'server/dev-key.pem',
  production: process.env.NODE_ENV === 'production'
};
var KEY = process.env.ANDROID_KEY;
var settings = {
  gcm: {
    id: KEY
  },
  apn: {
    cert: process.env.APN_CERT || 'server/dev-cert.pem',
    key: process.env.APN_KEY || 'server/dev-key.pem',
    production: process.env.NODE_ENV === 'production'
  }
};

var PushNotifications = require('node-pushnotifications');

var push = new PushNotifications(settings);

function initNotificationService() {
  try {
    return new _apn.default.Provider(options);
  } catch (err) {
    // console.log(err)
    return {
      on: () => null
    };
  }
}

var service = initNotificationService();
service.on('connected', () => {
  console.log('Connected');
});
service.on('transmitted', (notification, device) => {
  console.log('Notification transmitted to:' + device.token.toString('hex'));
});
service.on('transmissionError', (errCode, notification, device) => {
  console.error(
    'Notification caused error: ' + errCode + ' for device ',
    device,
    notification
  );

  if (errCode === 8) {
    var deviceToken = device.toString('utf8');
    console.log('device id', deviceToken);

    _user.default
      .findOneAndUpdate(
        {
          _id: notification.payload.toUser
        },
        {
          $pull: {
            deviceTokens: deviceToken
          }
        }
      )
      .exec();

    console.log(
      'A error code of 8 indicates that the device token is invalid. This could be for a number of reasons - are you using the correct environment? i.e. Production vs. Sandbox'
    );
  }
});
service.on('timeout', () => {
  console.log('Connection Timeout');
});
service.on('disconnected', () => {
  console.log('Disconnected from APNS');
});
service.on('socketError', console.error);

function handleMobileNotifications(_x, _x2, _x3) {
  return _handleMobileNotifications.apply(this, arguments);
}

function _handleMobileNotifications() {
  _handleMobileNotifications = (0, _asyncToGenerator2.default)(function*(
    user,
    alert,
    payload
  ) {
    try {
      if (!user) return;
      var userObj = user.toObject();

      if (!userObj.notificationSettings || !userObj.deviceTokens) {
        user = yield _user.default.findOne({
          _id: user._id
        });
      }

      if (
        !user.notificationSettings.mobile.all ||
        !user.deviceTokens ||
        !user.deviceTokens.length
      ) {
        return;
      }

      var { post } = payload;
      var badge = yield _notification.default.countDocuments({
        forUser: user._id,
        read: false
      }); // badge += await Feed.count({ userId: user._id, read: false });

      var registrationIds = [];
      user.deviceTokens.forEach(deviceToken => {
        registrationIds.push(deviceToken);
        console.log('pushing to device tokens ', deviceToken);
      });
      var postId = post.parentPost ? post.parentPost._id || post.parentPost : post._id;
      var notePayload = payload.post
        ? {
            postId,
            title: post.title,
            community: post.data ? post.data.community : post.community,
            comment: post.parentPost ? post._id : null
          }
        : {};
      var data = {
        body: alert,
        expiry: Math.floor(Date.now() / 1000) + 3600,
        custom: _objectSpread(
          _objectSpread({}, notePayload),
          {},
          {
            toUser: user._id
          }
        ),
        // this has the effect of playing the sound if we have an alert
        // and silence when there is no alert
        // 0 causes the default sound to be played
        sound: alert ? 0 : 1,
        badge,
        topic: 'org.reactjs.native.Relevant',
        contentAvailable: 1
      };
      var results = yield push.send(registrationIds, data);

      if (!results) {
        console.log('notification error');
      }

      var updatedTokens = user.deviceTokens;
      results.forEach(result => {
        result.message.forEach(message => {
          if (message.error) {
            updatedTokens = updatedTokens.filter(token => token !== message.regId);
            console.log('push notification error ', message.error);
            console.log('removing device token', message.regId);
          }
        });
      });

      if (updatedTokens.length !== user.deviceTokens.length) {
        user.markModified('deviceTokens');
        user.deviceTokens = updatedTokens;
        yield user.save();
      }
    } catch (err) {
      console.log('push notifications error', err);
    }
  });
  return _handleMobileNotifications.apply(this, arguments);
}

module.exports = {
  apnConnection: service,
  handleMobileNotifications
};
//# sourceMappingURL=mobilePushNotifications.js.map
