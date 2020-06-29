'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _react = _interopRequireDefault(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _utils = require('../../utils');
var _activity = require('../activity/activity.actions');
var _styles = require('../../styles');
var _auth = require('../auth/auth.actions');
var _banner = _interopRequireDefault(require('./banner.mobile'));
var _banner2 = _interopRequireDefault(require('./banner.desktop'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/bannerPrompt/notificationBanner.js';
var TEXT_DEFAULTS = {
  messageText: 'Enable notifications and get alerted when people respond',
  actionText: 'Enable',
  dismissText: 'Dismiss'
};
var MESSAGE_TEXT_DEFAULTS = {
  upvoteComment: 'Get notified when someone comments on this thread',
  upvotePost: 'Get notified when you earn rewards for upvoting posts',
  createComment: 'Get notified when someone replies to your comment',
  createPost: 'Get notified when someone replies to your post'
};
PushNotification.propTypes = {
  messageText: _propTypes.default.string,
  actionText: _propTypes.default.string,
  dismissText: _propTypes.default.string,
  type: _propTypes.default.string
};
function PushNotification(_ref) {
  var _ref$messageText = _ref.messageText,
    messageText =
      _ref$messageText === void 0 ? TEXT_DEFAULTS.messageText : _ref$messageText,
    _ref$actionText = _ref.actionText,
    actionText = _ref$actionText === void 0 ? TEXT_DEFAULTS.actionText : _ref$actionText,
    _ref$dismissText = _ref.dismissText,
    dismissText =
      _ref$dismissText === void 0 ? TEXT_DEFAULTS.dismissText : _ref$dismissText,
    type = _ref.type;
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var handleClick = (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                return _context.abrupt(
                  'return',
                  dispatch((0, _activity.enableDesktopNotifications)())
                );
              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    );
    return function handleClick() {
      return _ref2.apply(this, arguments);
    };
  })();
  var handleClickMobile = (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                return _context2.abrupt(
                  'return',
                  dispatch((0, _auth.enableMobileNotifications)(user))
                );
              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    );
    return function handleClickMobile() {
      return _ref3.apply(this, arguments);
    };
  })();
  var handleDismiss = function handleDismiss() {
    dispatch((0, _activity.hideBannerPrompt)());
    var now = new Date().getTime();
    _utils.storage.set('pushDismissed', now);
  };
  var mainText = messageText || MESSAGE_TEXT_DEFAULTS[type];
  if (_styles.isNative) {
    (0, _banner.default)({
      title: 'Stay up to date',
      messageText: mainText,
      onDismiss: handleDismiss,
      onClick: handleClickMobile
    });
    dispatch((0, _activity.hideBannerPrompt)());
    return null;
  }
  return _react.default.createElement(_banner2.default, {
    onClick: handleClick,
    onDismiss: handleDismiss,
    messageText: mainText + ': ',
    dismissText: dismissText,
    actionText: actionText,
    __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 5 }
  });
}
var _default = PushNotification;
exports.default = _default;
//# sourceMappingURL=notificationBanner.js.map
