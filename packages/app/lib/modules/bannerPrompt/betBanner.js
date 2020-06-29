'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = exports.TEXT = void 0;
var _react = _interopRequireDefault(require('react'));
var _reactRedux = require('react-redux');
var _utils = require('../../utils');
var _activity = require('../activity/activity.actions');
var _auth = require('../auth/auth.actions');
var _styles = require('../../styles');
var _banner = _interopRequireDefault(require('./banner.mobile'));
var _banner2 = _interopRequireDefault(require('./banner.desktop'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/bannerPrompt/betBanner.js';
var TEXT = {
  mobileText:
    'When you upvote a post you are automatically betting some coins on it. You can customize bet amounts if you enable manual betting.',
  messageText:
    'When you upvote a post you are automatically betting some coins on it. To customize bet amounts, ',
  actionText: 'enable manual betting.',
  dismissText: 'Dismiss'
};
exports.TEXT = TEXT;
function PushNotification() {
  var messageText = TEXT.messageText,
    actionText = TEXT.actionText,
    dismissText = TEXT.dismissText,
    mobileText = TEXT.mobileText;
  var dispatch = (0, _reactRedux.useDispatch)();
  var onClick = function onClick() {
    dispatch((0, _auth.updateNotificationSettings)({ bet: { manual: true } }));
    dispatch((0, _activity.hideBannerPrompt)());
  };
  var handleDismiss = function handleDismiss() {
    dispatch((0, _activity.hideBannerPrompt)());
    var now = new Date().getTime();
    _utils.storage.set('betDismissed', now);
  };
  if (_styles.isNative) {
    (0, _banner.default)({
      title: 'Enable manual betting?',
      messageText: mobileText,
      onDismiss: handleDismiss,
      onClick: onClick
    });
    dispatch((0, _activity.hideBannerPrompt)());
    return null;
  }
  return _react.default.createElement(_banner2.default, {
    onClick: onClick,
    onDismiss: handleDismiss,
    messageText: messageText,
    dismissText: dismissText,
    actionText: actionText,
    __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 5 }
  });
}
var _default = PushNotification;
exports.default = _default;
//# sourceMappingURL=betBanner.js.map
