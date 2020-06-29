'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Alert = Alert;
exports.browserAlerts = void 0;
var _reactToastify = require('react-toastify');
var IS_NATIVE = process.env.WEB !== 'true';
var IS_BROWSER = process.env.BROWSER;
var browserAlerts = {
  alert: function alert(message, alertType) {
    (0, _reactToastify.toast)(message, {
      position: _reactToastify.toast.POSITION.BOTTOM_RIGHT,
      type: alertType || 'error',
      hideProgressBar: true
    });
  }
};
exports.browserAlerts = browserAlerts;
function Alert() {
  if (IS_NATIVE) return require('react-native-web').Alert;
  if (IS_BROWSER) return browserAlerts;
  return {
    alert: function alert(a, b) {
      return console.log(a, ' ', b);
    }
  };
}
//# sourceMappingURL=alert.js.map
