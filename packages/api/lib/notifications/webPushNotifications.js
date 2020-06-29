'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var User = require('../api/user/user.model');

var webPush = require('web-push');

var { getUrls } = require('./notificationHelper');

if (process.env.NODE_ENV !== 'test') {
  initWebPush();
}

function initWebPush() {
  try {
    webPush.setVapidDetails(
      'https://relevant.community/',
      process.env.VAPID_PUBLIC_KEY,
      process.env.VAPID_PRIVATE_KEY
    );
  } catch (err) {
    // console.log(err); // eslint-disable-line
  }
}

exports.handleWebNotifications = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2.default)(function*(params) {
    try {
      var { toUser: user } = params;
      var userObj = user.toObject();

      if (!userObj.notificationSettings || !userObj.desktopSubscriptions) {
        user = yield User.findOne(
          {
            _id: user._id
          },
          'notificationSettings desktopSubscriptions'
        );
      }

      if (
        !user.notificationSettings.desktop.all ||
        !user.desktopSubscriptions ||
        !user.desktopSubscriptions.length
      ) {
        return;
      }

      var { postUrl } = getUrls(params);
      var payload = {
        title: params.alert,
        url: postUrl,
        icon: '/img/default_community.png',
        body: params.post ? params.post.body || params.post.title : null
      };
      var options = {};
      var processed = user.desktopSubscriptions.map(subscription =>
        webPush.sendNotification(subscription, JSON.stringify(payload), options)
      );
      yield Promise.all(processed);
    } catch (err) {
      // TODO remove failed or expired notifications
      console.log(err); // eslint-disable-line
    }
  });

  return function(_x) {
    return _ref.apply(this, arguments);
  };
})();
//# sourceMappingURL=webPushNotifications.js.map
