'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setActivity = setActivity;
exports.resetActivity = resetActivity;
exports.clearCount = clearCount;
exports.setCount = setCount;
exports.getActivity = getActivity;
exports.markRead = markRead;
exports.createNotification = createNotification;
exports.getNotificationCount = getNotificationCount;
exports.showBannerPrompt = showBannerPrompt;
exports.hideBannerPrompt = hideBannerPrompt;
exports.enableDesktopNotifications = enableDesktopNotifications;
exports.showPushNotificationPrompt = exports.showBetPrompt = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var errorActions = _interopRequireWildcard(require('../ui/error.actions'));
var _utils = require('../../utils');
var _notifications = require('../../utils/notifications');
var _auth = require('../auth/auth.actions');
var _notificationTimes = require('./notificationTimes');
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
var PushNotification;
if (process.env.WEB !== 'true') {
  PushNotification = require('react-native-push-notification');
}
var apiServer = ''.concat(process.env.API_SERVER, '/api/notification');
var reqOptions = function reqOptions(tk) {
  return {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(tk)
    }
  };
};
function setActivity(data, type, index) {
  return { type: types.SET_ACTIVITY, payload: { data: data, type: type, index: index } };
}
function resetActivity(data) {
  return { type: 'RESET_ACTIVITY', payload: data };
}
function clearCount() {
  return { type: 'CLEAR_COUNT' };
}
function setCount(data) {
  return { type: types.SET_COUNT, payload: data };
}
function getActivity(skip) {
  return (function() {
    var _ref = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        var type, res;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  type = 'personal';
                  _context.next = 4;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'notification',
                      path: '/',
                      auth: true,
                      query: { skip: skip }
                    })
                  );
                case 4:
                  res = _context.sent;
                  dispatch(setActivity(res, type, skip));
                  dispatch(errorActions.setError('activity', false));
                  _context.next = 12;
                  break;
                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](0);
                  errorActions.setError('activity', true, _context.t0.message);
                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 9]]
        );
      })
    );
    return function(_x) {
      return _ref.apply(this, arguments);
    };
  })();
}
function markRead() {
  return function(dispatch) {
    return _utils.storage
      .getToken()
      .then(function(tk) {
        return fetch(
          ''.concat(apiServer, '/markread'),
          _objectSpread(_objectSpread({}, reqOptions(tk)), {}, { method: 'PUT' })
        );
      })
      .then(function() {
        dispatch(clearCount());
      })
      .catch(null);
  };
}
function createNotification(obj) {
  return function() {
    return _utils.storage
      .getToken()
      .then(function(tk) {
        return fetch(
          ''.concat(apiServer),
          _objectSpread(
            _objectSpread({}, reqOptions(tk)),
            {},
            { method: 'POST', body: JSON.stringify(obj) }
          )
        );
      })
      .catch(null);
  };
}
function getNotificationCount() {
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        var res;
        return _regenerator.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'notification',
                      path: '/unread',
                      auth: true
                    })
                  );
                case 3:
                  res = _context2.sent;
                  dispatch(setCount(res.unread));
                  _context2.next = 9;
                  break;
                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2['catch'](0);
                case 9:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x2) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function showBannerPrompt(promptType, promptProps) {
  return {
    type: types.SHOW_BANNER_PROMPT,
    payload: { promptType: promptType, promptProps: promptProps }
  };
}
function hideBannerPrompt(notification) {
  return { type: types.HIDE_BANNER_PROMPT, payload: notification };
}
function enableDesktopNotifications() {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(dispatch) {
        var subscription;
        return _regenerator.default.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return (0, _notifications.initPushNotifications)();
                case 3:
                  subscription = _context3.sent;
                  dispatch(
                    (0, _auth.updateNotificationSettings)(
                      { desktop: { all: true } },
                      subscription.toJSON()
                    )
                  );
                  dispatch(hideBannerPrompt());
                  _context3.next = 11;
                  break;
                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3['catch'](0);
                  console.log(_context3.t0);
                case 11:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x3) {
      return _ref3.apply(this, arguments);
    };
  })();
}
var showBetPrompt = (function() {
  var _ref4 = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee4(dispatch) {
      var isDismissed;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch ((_context4.prev = _context4.next)) {
            case 0:
              _context4.next = 2;
              return _utils.storage.isDismissed(
                'betDismissed',
                _notificationTimes.SHOW_BET_PROMPT_AFTER_DAYS
              );
            case 2:
              isDismissed = _context4.sent;
              if (isDismissed) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt('return', dispatch(showBannerPrompt('bet')));
            case 5:
              return _context4.abrupt('return', false);
            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4);
    })
  );
  return function showBetPrompt(_x4) {
    return _ref4.apply(this, arguments);
  };
})();
exports.showBetPrompt = showBetPrompt;
var showPushNotificationPrompt = function showPushNotificationPrompt() {
  var promptProps =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (function() {
    var _ref5 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee5(dispatch) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                if (!(process.env.BROWSER === true)) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt(
                  'return',
                  handleDesktopPrompt({ dispatch: dispatch, promptProps: promptProps })
                );
              case 2:
                return _context5.abrupt(
                  'return',
                  handleMobilePrompt({ dispatch: dispatch, promptProps: promptProps })
                );
              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5);
      })
    );
    return function(_x5) {
      return _ref5.apply(this, arguments);
    };
  })();
};
exports.showPushNotificationPrompt = showPushNotificationPrompt;
function handleDesktopPrompt(_x6) {
  return _handleDesktopPrompt.apply(this, arguments);
}
function _handleDesktopPrompt() {
  _handleDesktopPrompt = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee6(_ref6) {
      var dispatch, promptProps, isDismissed;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch ((_context6.prev = _context6.next)) {
            case 0:
              (dispatch = _ref6.dispatch), (promptProps = _ref6.promptProps);
              if (
                !(
                  Notification &&
                  (Notification.permission === 'granted' ||
                    Notification.permission === 'denied')
                )
              ) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt('return', false);
            case 3:
              _context6.next = 5;
              return _utils.storage.isDismissed(
                'pushDismissed',
                _notificationTimes.SHOW_DESKTOP_PROMPT_AFTER_DAYS
              );
            case 5:
              isDismissed = _context6.sent;
              if (!isDismissed) {
                _context6.next = 8;
                break;
              }
              return _context6.abrupt('return', false);
            case 8:
              return _context6.abrupt(
                'return',
                dispatch(showBannerPrompt('push', promptProps))
              );
            case 9:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6);
    })
  );
  return _handleDesktopPrompt.apply(this, arguments);
}
function handleMobilePrompt(_x7) {
  return _handleMobilePrompt.apply(this, arguments);
}
function _handleMobilePrompt() {
  _handleMobilePrompt = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee7(_ref7) {
      var dispatch, promptProps, permissions, isDismissed;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch ((_context7.prev = _context7.next)) {
            case 0:
              (dispatch = _ref7.dispatch), (promptProps = _ref7.promptProps);
              if (PushNotification) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt('return', false);
            case 3:
              _context7.next = 5;
              return new Promise(function(resolve, reject) {
                PushNotification.checkPermissions(function(resp) {
                  if (!resp) return reject();
                  return resolve(resp);
                });
              });
            case 5:
              permissions = _context7.sent;
              if (!permissions.alert) {
                _context7.next = 8;
                break;
              }
              return _context7.abrupt('return', false);
            case 8:
              _context7.next = 10;
              return _utils.storage.isDismissed(
                'pushDismissed',
                _notificationTimes.SHOW_MOBILE_PROMPT_AFTER_DAYS
              );
            case 10:
              isDismissed = _context7.sent;
              if (!isDismissed) {
                _context7.next = 13;
                break;
              }
              return _context7.abrupt('return', false);
            case 13:
              return _context7.abrupt(
                'return',
                dispatch(
                  showBannerPrompt(
                    'push',
                    _objectSpread(_objectSpread({}, promptProps), {}, { isMobile: true })
                  )
                )
              );
            case 14:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7);
    })
  );
  return _handleMobilePrompt.apply(this, arguments);
}
//# sourceMappingURL=activity.actions.js.map
