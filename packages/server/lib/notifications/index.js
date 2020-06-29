"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNotification = sendNotification;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _emailPushNotifications = require("./emailPushNotifications");

var _webPushNotifications = require("./webPushNotifications");

var _mobilePushNotifications = require("./mobilePushNotifications");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var relevantEnv = process.env.RELEVANT_ENV;

function sendNotification(_x, _x2, _x3) {
  return _sendNotification.apply(this, arguments);
}

function _sendNotification() {
  _sendNotification = (0, _asyncToGenerator2.default)(function* (user, alert, payload) {
    try {
      if (relevantEnv !== 'production') return;
      (0, _emailPushNotifications.handleEmailNotifications)(payload);
      (0, _webPushNotifications.handleWebNotifications)(_objectSpread(_objectSpread({}, payload), {}, {
        alert
      }));
      (0, _mobilePushNotifications.handleMobileNotifications)(user, alert, payload);
      return;
    } catch (err) {
      console.log(err); // eslint-disable-line
    }
  });
  return _sendNotification.apply(this, arguments);
}
//# sourceMappingURL=index.js.map