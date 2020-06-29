'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = MobileAlert;
var _propTypes = _interopRequireDefault(require('prop-types'));
var _alert = require('../../utils/alert');
var _Alert = (0, _alert.Alert)(),
  alert = _Alert.alert;
MobileAlert.propTypes = {
  messageText: _propTypes.default.string,
  actionText: _propTypes.default.string,
  dismissText: _propTypes.default.string,
  title: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onDismiss: _propTypes.default.func
};
function MobileAlert(_ref) {
  var messageText = _ref.messageText,
    actionText = _ref.actionText,
    dismissText = _ref.dismissText,
    onDismiss = _ref.onDismiss,
    onClick = _ref.onClick,
    title = _ref.title;
  return alert(
    title || messageText,
    title ? messageText : null,
    [
      { text: dismissText || 'Not Now', onPress: onDismiss },
      { text: actionText || 'Enable', onPress: onClick }
    ],
    { cancelable: false }
  );
}
//# sourceMappingURL=banner.mobile.js.map
