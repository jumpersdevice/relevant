"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNotification = sendNotification;

var _emailPushNotifications = require("./emailPushNotifications");

var _webPushNotifications = require("./webPushNotifications");

var _mobilePushNotifications = require("./mobilePushNotifications");

const relevantEnv = process.env.RELEVANT_ENV;

async function sendNotification(user, alert, payload) {
  try {
    if (relevantEnv !== 'production') return;
    (0, _emailPushNotifications.handleEmailNotifications)(payload);
    (0, _webPushNotifications.handleWebNotifications)({ ...payload,
      alert
    });
    (0, _mobilePushNotifications.handleMobileNotifications)(user, alert, payload);
    return;
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}
//# sourceMappingURL=index.js.map