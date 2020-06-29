'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.initPushNotifications = initPushNotifications;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
if (process.env.BROWSER === true) {
  registerServiceWorker();
}
function registerServiceWorker() {
  try {
    navigator.serviceWorker.register('/service-worker.js');
  } catch (err) {
    console.log(err);
  }
}
function initPushNotifications() {
  return _initPushNotifications.apply(this, arguments);
}
function _initPushNotifications() {
  _initPushNotifications = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee() {
      var registration, subscription, vapidPublicKey, convertedVapidKey;
      return _regenerator.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return navigator.serviceWorker.ready;
              case 3:
                registration = _context.sent;
                _context.next = 6;
                return registration.pushManager.getSubscription();
              case 6:
                subscription = _context.sent;
                if (!subscription) {
                  _context.next = 9;
                  break;
                }
                return _context.abrupt('return', subscription);
              case 9:
                vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
                convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
                return _context.abrupt(
                  'return',
                  registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey
                  })
                );
              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](0);
                console.log(_context.t0);
                return _context.abrupt('return', null);
              case 18:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[0, 14]]
      );
    })
  );
  return _initPushNotifications.apply(this, arguments);
}
function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);
  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
//# sourceMappingURL=notifications.js.map
