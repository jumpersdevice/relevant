'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setCommunity = setCommunity;
exports.setInviteCode = setInviteCode;
exports.updateInvite = updateInvite;
exports.sendPong = sendPong;
exports.updateAuthUser = updateAuthUser;
exports.setUser = setUser;
exports.setSelectedUserData = setSelectedUserData;
exports.setUserIndex = setUserIndex;
exports.setPreUser = setPreUser;
exports.setAuthStatusText = setAuthStatusText;
exports.loginUserSuccess = loginUserSuccess;
exports.loginUserFailure = loginUserFailure;
exports.loginUserRequest = loginUserRequest;
exports.logout = logout;
exports.cacheCommunity = cacheCommunity;
exports.logoutAction = logoutAction;
exports.setCurrentTooltip = setCurrentTooltip;
exports.updateUser = updateUser;
exports.updateNotificationSettings = updateNotificationSettings;
exports.setDeviceToken = setDeviceToken;
exports.removeDeviceToken = removeDeviceToken;
exports.enableMobileNotifications = enableMobileNotifications;
exports.getUser = getUser;
exports.setOnboardingStep = setOnboardingStep;
exports.webOnboard = webOnboard;
exports.loginUser = loginUser;
exports.userOnline = userOnline;
exports.checkUser = checkUser;
exports.createUser = createUser;
exports.updateHandle = updateHandle;
exports.sendConfirmation = sendConfirmation;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
exports.confirmEmail = confirmEmail;
exports.setStats = setStats;
exports.getChart = getChart;
exports.getStats = getStats;
exports.getRelChart = getRelChart;
exports.setTwitter = setTwitter;
exports.setLoading = setLoading;
exports.twitterAuth = twitterAuth;
exports.userToSocket = userToSocket;
exports.redeemInvite = redeemInvite;
exports.loginWithBox = loginWithBox;
exports.updateUserTokenBalance = updateUserTokenBalance;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _utils = require('../../utils');
var errorActions = _interopRequireWildcard(require('../ui/error.actions'));
var navigationActions = _interopRequireWildcard(
  require('../navigation/navigation.actions')
);
var tooltipActions = _interopRequireWildcard(require('../tooltip/tooltip.actions'));
var _community = require('../community/community.actions');
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
var Alert = _utils.alert.Alert();
var PushNotification;
var userDefaults;
var Analytics;
var ReactGA;
var TwitterCT;
if (process.env.WEB !== 'true') {
  Analytics = require('react-native-firebase').analytics();
  userDefaults = require('react-native-swiss-knife').RNSKBucket;
  PushNotification = require('react-native-push-notification');
} else {
  ReactGA = require('react-ga').default;
  TwitterCT = require('../../utils/social').TwitterCT;
}
var APP_GROUP_ID = 'group.com.4real.relevant';
var reqOptions = (function() {
  var _ref = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee() {
      var token;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return _utils.storage.getToken();
            case 2:
              token = _context.sent;
              return _context.abrupt('return', {
                credentials: 'include',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer '.concat(token)
                }
              });
            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return function reqOptions() {
    return _ref.apply(this, arguments);
  };
})();
function setCommunity(community) {
  return function(dispatch) {
    dispatch({ type: types.SET_COMMUNITY, payload: community });
  };
}
function setInviteCode(code) {
  return { type: types.SET_INVITE_CODE, payload: code };
}
function updateInvite(invite) {
  return { type: types.UPDATE_INVITE, payload: invite };
}
function sendPong() {
  return { type: 'server/pong' };
}
function updateAuthUser(user) {
  return { type: types.UPDATE_AUTH_USER, payload: user };
}
function setUser(user) {
  return { type: types.SET_USER, payload: user };
}
function setSelectedUserData(data) {
  return { type: 'SET_SELECTED_USER_DATA', payload: data };
}
function setUserIndex(userIndex) {
  return { type: types.SET_USER_INDEX, payload: userIndex };
}
function setPreUser(preUser) {
  return { type: 'SET_PRE_USER', payload: preUser };
}
function setAuthStatusText(text) {
  return { type: 'SET_AUTH_STATUS_TEXT', payload: text || null };
}
function loginUserSuccess(token) {
  return { type: types.LOGIN_USER_SUCCESS, payload: { token: token } };
}
function loginUserFailure() {
  return { type: types.LOGIN_USER_FAILURE };
}
function loginUserRequest() {
  return { type: types.LOGIN_USER_REQUEST };
}
function logout() {
  return { type: types.LOGOUT_USER };
}
function cacheCommunity(community) {
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        return _regenerator.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'user',
                      path: '/updateCommunity',
                      body: JSON.stringify({ community: community })
                    })
                  );
                case 3:
                  _context2.next = 8;
                  break;
                case 5:
                  _context2.prev = 5;
                  _context2.t0 = _context2['catch'](0);
                  console.log(_context2.t0);
                case 8:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[0, 5]]
        );
      })
    );
    return function(_x) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function logoutAction(user) {
  return function(dispatch) {
    _utils.storage.removeToken().then(function() {
      if (user && user._id) {
        dispatch({ type: 'server/logout', payload: user._id });
      }
      dispatch(logout());
    });
  };
}
function setCurrentTooltip(step) {
  return { type: types.SET_ONBOARDING_STEP, payload: step };
}
function updateUser(user, preventLocalUpdate) {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(dispatch) {
        var res;
        return _regenerator.default.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'user',
                      path: '/',
                      body: JSON.stringify(user)
                    })
                  );
                case 3:
                  res = _context3.sent;
                  if (!preventLocalUpdate) dispatch(updateAuthUser(res));
                  return _context3.abrupt('return', true);
                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3['catch'](0);
                  Alert.alert(_context3.t0.message);
                  return _context3.abrupt('return', false);
                case 12:
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
    return function(_x2) {
      return _ref3.apply(this, arguments);
    };
  })();
}
function updateNotificationSettings(notificationSettings, subscription, deviceTokens) {
  return (function() {
    var _ref4 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee4(dispatch) {
        var res;
        return _regenerator.default.wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'user',
                      path: '/notifications',
                      body: JSON.stringify({
                        notificationSettings: notificationSettings,
                        subscription: subscription,
                        deviceTokens: deviceTokens
                      })
                    })
                  );
                case 3:
                  res = _context4.sent;
                  dispatch(updateAuthUser(res));
                  return _context4.abrupt('return', true);
                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4['catch'](0);
                  Alert.alert(_context4.t0.message);
                  return _context4.abrupt('return', false);
                case 12:
                case 'end':
                  return _context4.stop();
              }
            }
          },
          _callee4,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x3) {
      return _ref4.apply(this, arguments);
    };
  })();
}
function setDeviceToken(token) {
  return { type: 'SET_DEVICE_TOKEN', payload: token };
}
function removeDeviceToken(auth) {
  if (!auth) return null;
  return function(dispatch) {
    var user = auth.user;
    if (user.deviceTokens) {
      var index = user.deviceTokens.indexOf(auth.deviceToken);
      if (index > -1) {
        user.deviceTokens.splice(index, 1);
        dispatch(updateUser(user, true));
      }
    }
  };
}
function enableMobileNotifications(user, checkIfEnbaled) {
  return function(dispatch) {
    if (!user.notificationSettings.mobile.all && checkIfEnbaled) return;
    if (!PushNotification) return;
    configurePushNotifications(dispatch);
    registerPushNotification({ dispatch: dispatch, user: user });
  };
}
function configurePushNotifications(dispatch) {
  PushNotification.configure({
    onNotification: function onNotification(notification) {
      var userInteraction = notification.userInteraction,
        data = notification.data;
      if (!userInteraction) return;
      if (data && data.postId) {
        var comment = data.comment ? { _id: data.comment } : null;
        if (data.community) dispatch(setCommunity(data.community));
        dispatch(
          navigationActions.goToPost({
            _id: data.postId,
            title: data.title,
            community: data.community,
            comment: comment
          })
        );
      }
    },
    senderID: '271994332492',
    permissions: { alert: true, badge: true, sound: true },
    popInitialNotification: true,
    requestPermissions: true
  });
}
function registerPushNotification(_ref5) {
  var dispatch = _ref5.dispatch,
    user = _ref5.user;
  PushNotification.onRegister = function(deviceToken) {
    var token = deviceToken.token;
    userDefaults.set('deviceToken', token, APP_GROUP_ID);
    dispatch(setDeviceToken(token));
    var newUser = _objectSpread({}, user);
    if (user.deviceTokens && user.deviceTokens.indexOf(token) < 0) {
      newUser.deviceTokens.push(token);
    } else if (user.deviceTokens.indexOf(token) < 0) {
      newUser.deviceTokens = [token];
    }
    var notificationSettings = _objectSpread({}, newUser.notificationSettings);
    dispatch(
      updateNotificationSettings(notificationSettings, null, newUser.deviceTokens)
    );
  };
}
function setupUser(user, dispatch) {
  dispatch(setUser(user));
  dispatch(setSelectedUserData(user));
  dispatch(errorActions.setError('universal', false));
  dispatch(tooltipActions.tooltipReady(true));
  return user;
}
function getUser(callback) {
  return (function() {
    var _ref6 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee5(dispatch, getState) {
        var token, user, state, community, checkIfEnabled, message;
        return _regenerator.default.wrap(
          function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return _utils.storage.getToken();
                case 3:
                  token = _context5.sent;
                  if (token) {
                    _context5.next = 6;
                    break;
                  }
                  return _context5.abrupt('return', null);
                case 6:
                  dispatch(loginUserSuccess(token));
                  _context5.next = 9;
                  return dispatch(
                    _utils.api.request({ method: 'GET', endpoint: 'user', path: '/me' })
                  );
                case 9:
                  user = _context5.sent;
                  setupUser(user, dispatch);
                  state = getState();
                  community = state.auth.community;
                  if (!community && user.community) {
                    dispatch(setCommunity(null));
                  }
                  checkIfEnabled = true;
                  dispatch(enableMobileNotifications(user, checkIfEnabled));
                  if (user.memberships) {
                    dispatch((0, _community.setUserMemberships)(user.memberships));
                  }
                  if (callback) callback(user);
                  return _context5.abrupt('return', user);
                case 21:
                  _context5.prev = 21;
                  _context5.t0 = _context5['catch'](0);
                  message = _context5.t0 ? _context5.t0.message : null;
                  dispatch(errorActions.setError('universal', true, message));
                  dispatch(loginUserFailure('Server error'));
                  if (callback) callback({ ok: false });
                  return _context5.abrupt('return', null);
                case 28:
                case 'end':
                  return _context5.stop();
              }
            }
          },
          _callee5,
          null,
          [[0, 21]]
        );
      })
    );
    return function(_x4, _x5) {
      return _ref6.apply(this, arguments);
    };
  })();
}
function setOnboardingStep(step) {
  return (function() {
    var _ref7 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee6(dispatch) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                _context6.t0 = fetch;
                _context6.t1 = process.env.API_SERVER + '/api/user/onboarding/' + step;
                _context6.t2 = _objectSpread;
                _context6.t3 = { credentials: 'include', method: 'GET' };
                _context6.next = 6;
                return reqOptions();
              case 6:
                _context6.t4 = _context6.sent;
                _context6.t5 = (0, _context6.t2)(_context6.t3, _context6.t4);
                return _context6.abrupt(
                  'return',
                  (0, _context6.t0)(_context6.t1, _context6.t5)
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(responseJSON) {
                      dispatch(updateAuthUser(responseJSON));
                      return true;
                    })
                    .catch(function() {
                      return false;
                    })
                );
              case 9:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6);
      })
    );
    return function(_x6) {
      return _ref7.apply(this, arguments);
    };
  })();
}
function webOnboard(step) {
  return (function() {
    var _ref8 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee7(dispatch) {
        return _regenerator.default.wrap(
          function _callee7$(_context7) {
            while (1) {
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'user',
                      path: '/webonboard',
                      params: { step: step }
                    })
                  );
                case 3:
                  return _context7.abrupt('return', true);
                case 6:
                  _context7.prev = 6;
                  _context7.t0 = _context7['catch'](0);
                  Alert.alert(_context7.t0.message);
                  return _context7.abrupt('return', false);
                case 10:
                case 'end':
                  return _context7.stop();
              }
            }
          },
          _callee7,
          null,
          [[0, 6]]
        );
      })
    );
    return function(_x7) {
      return _ref8.apply(this, arguments);
    };
  })();
}
function loginUser(user) {
  return (function() {
    var _ref9 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee8(dispatch) {
        var responseJSON;
        return _regenerator.default.wrap(
          function _callee8$(_context8) {
            while (1) {
              switch ((_context8.prev = _context8.next)) {
                case 0:
                  _context8.prev = 0;
                  _context8.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'POST',
                      endpoint: '/auth',
                      path: '/local',
                      body: JSON.stringify(user)
                    })
                  );
                case 3:
                  responseJSON = _context8.sent;
                  if (!responseJSON.token) {
                    _context8.next = 10;
                    break;
                  }
                  _context8.next = 7;
                  return _utils.storage.setToken(responseJSON.token);
                case 7:
                  dispatch(loginUserSuccess(responseJSON.token));
                  dispatch(getUser());
                  return _context8.abrupt('return', true);
                case 10:
                  dispatch(loginUserFailure(responseJSON.message));
                  Alert.alert(responseJSON.message);
                  return _context8.abrupt('return', false);
                case 15:
                  _context8.prev = 15;
                  _context8.t0 = _context8['catch'](0);
                  Alert.alert(_context8.t0.message);
                  return _context8.abrupt('return', false);
                case 19:
                case 'end':
                  return _context8.stop();
              }
            }
          },
          _callee8,
          null,
          [[0, 15]]
        );
      })
    );
    return function(_x8) {
      return _ref9.apply(this, arguments);
    };
  })();
}
function userOnline(user, token) {
  return function() {
    return fetch(
      process.env.API_SERVER +
        '/notification/online/' +
        user._id +
        '?access_token=' +
        token,
      {
        credentials: 'include',
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
      }
    )
      .then(function(response) {
        return response.json();
      })
      .catch(function() {});
  };
}
function checkUser(string, type) {
  var omitSelf =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return function() {
    return fetch(
      ''
        .concat(process.env.API_SERVER, '/api/user/check/user/?')
        .concat(type, '=')
        .concat(string, '&omitSelf=')
        .concat(omitSelf),
      {
        credentials: 'include',
        method: 'GET',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJSON) {
        return responseJSON;
      })
      .catch(function(error) {
        Alert.alert(error.message);
      });
  };
}
function createUser(user, invitecode) {
  return function(dispatch) {
    return fetch(process.env.API_SERVER + '/api/user', {
      credentials: 'include',
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: user, invitecode: invitecode })
    })
      .then(_utils.api.handleErrors)
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJSON) {
        if (responseJSON.token) {
          return _utils.storage.setToken(responseJSON.token).then(function() {
            ReactGA && ReactGA.event({ category: 'User', action: 'Created an Account' });
            TwitterCT && TwitterCT.signUp();
            Analytics && Analytics.logEvent('CreatedAccount');
            dispatch(loginUserSuccess(responseJSON.token));
            dispatch(getUser());
            return true;
          });
        }
        if (responseJSON.errors) {
          var errors = responseJSON.errors;
          var message = '';
          Object.keys(errors).forEach(function(key) {
            if (errors[key].message) message += errors[key].message;
          });
          Alert.alert(message);
          return false;
        }
        return false;
      })
      .catch(function(error) {
        if (error.message.match('invitation code')) {
          dispatch(updateInvite(null));
        }
        Alert.alert(error.message);
        return false;
      });
  };
}
function updateHandle(user) {
  return (function() {
    var _ref10 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee9(dispatch) {
        var result;
        return _regenerator.default.wrap(
          function _callee9$(_context9) {
            while (1) {
              switch ((_context9.prev = _context9.next)) {
                case 0:
                  _context9.prev = 0;
                  _context9.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'user',
                      path: '/updateHandle',
                      body: JSON.stringify({ user: user })
                    })
                  );
                case 3:
                  result = _context9.sent;
                  ReactGA &&
                    ReactGA.event({ category: 'User', action: 'Created an Account' });
                  Analytics && Analytics.logEvent('CreatedAccount');
                  setupUser(result, dispatch);
                  return _context9.abrupt('return', true);
                case 10:
                  _context9.prev = 10;
                  _context9.t0 = _context9['catch'](0);
                  Alert.alert(_context9.t0.message);
                  return _context9.abrupt('return', false);
                case 14:
                case 'end':
                  return _context9.stop();
              }
            }
          },
          _callee9,
          null,
          [[0, 10]]
        );
      })
    );
    return function(_x9) {
      return _ref10.apply(this, arguments);
    };
  })();
}
function sendConfirmation() {
  return (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee10() {
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch ((_context10.prev = _context10.next)) {
            case 0:
              _context10.t0 = fetch;
              _context10.t1 = process.env.API_SERVER + '/api/user/sendConfirmation';
              _context10.t2 = _objectSpread;
              _context10.t3 = { method: 'GET' };
              _context10.next = 6;
              return reqOptions();
            case 6:
              _context10.t4 = _context10.sent;
              _context10.t5 = (0, _context10.t2)(_context10.t3, _context10.t4);
              return _context10.abrupt(
                'return',
                (0, _context10.t0)(_context10.t1, _context10.t5)
                  .then(_utils.api.handleErrors)
                  .then(function(response) {
                    return response.json();
                  })
                  .then(function(responseJSON) {
                    Alert.alert(
                      'A confirmation email has been sent to ' + responseJSON.email,
                      'success'
                    );
                    return true;
                  })
                  .catch(function(err) {
                    Alert.alert('Error sending email, please try again ', err.message);
                    return false;
                  })
              );
            case 9:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10);
    })
  );
}
function forgotPassword(user, query) {
  return (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee11() {
      return _regenerator.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch ((_context11.prev = _context11.next)) {
            case 0:
              _context11.t0 = fetch;
              _context11.t1 = process.env.API_SERVER + '/api/user/forgot' + (query || '');
              _context11.t2 = _objectSpread;
              _context11.t3 = _objectSpread;
              _context11.t4 = { method: 'PUT' };
              _context11.next = 7;
              return reqOptions();
            case 7:
              _context11.t5 = _context11.sent;
              _context11.t6 = (0, _context11.t3)(_context11.t4, _context11.t5);
              _context11.t7 = {};
              _context11.t8 = { body: JSON.stringify({ user: user }) };
              _context11.t9 = (0, _context11.t2)(
                _context11.t6,
                _context11.t7,
                _context11.t8
              );
              return _context11.abrupt(
                'return',
                (0, _context11.t0)(_context11.t1, _context11.t9)
                  .then(_utils.api.handleErrors)
                  .then(function(response) {
                    return response.json();
                  })
                  .then(function(responseJSON) {
                    return responseJSON;
                  })
                  .catch(function(err) {
                    Alert.alert(err.message);
                    return false;
                  })
              );
            case 13:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11);
    })
  );
}
function resetPassword(password, token) {
  return (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee12() {
      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch ((_context12.prev = _context12.next)) {
            case 0:
              _context12.t0 = fetch;
              _context12.t1 = process.env.API_SERVER + '/api/user/resetPassword';
              _context12.t2 = _objectSpread;
              _context12.t3 = _objectSpread;
              _context12.t4 = { method: 'PUT' };
              _context12.next = 7;
              return reqOptions();
            case 7:
              _context12.t5 = _context12.sent;
              _context12.t6 = (0, _context12.t3)(_context12.t4, _context12.t5);
              _context12.t7 = {};
              _context12.t8 = {
                body: JSON.stringify({ password: password, token: token })
              };
              _context12.t9 = (0, _context12.t2)(
                _context12.t6,
                _context12.t7,
                _context12.t8
              );
              return _context12.abrupt(
                'return',
                (0, _context12.t0)(_context12.t1, _context12.t9)
                  .then(_utils.api.handleErrors)
                  .then(function(response) {
                    return response.json();
                  })
                  .then(function() {
                    Alert.alert(
                      'Your password has been updated! Try loggin in.',
                      'success'
                    );
                    return true;
                  })
                  .catch(function(err) {
                    Alert.alert(err.message);
                    return false;
                  })
              );
            case 13:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12);
    })
  );
}
function confirmEmail(user, code) {
  return (function() {
    var _ref14 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee13(dispatch) {
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch ((_context13.prev = _context13.next)) {
              case 0:
                _context13.t0 = fetch;
                _context13.t1 = process.env.API_SERVER + '/api/user/confirm';
                _context13.t2 = _objectSpread;
                _context13.t3 = _objectSpread;
                _context13.t4 = { method: 'PUT' };
                _context13.next = 7;
                return reqOptions();
              case 7:
                _context13.t5 = _context13.sent;
                _context13.t6 = (0, _context13.t3)(_context13.t4, _context13.t5);
                _context13.t7 = {};
                _context13.t8 = { body: JSON.stringify({ user: user, code: code }) };
                _context13.t9 = (0, _context13.t2)(
                  _context13.t6,
                  _context13.t7,
                  _context13.t8
                );
                return _context13.abrupt(
                  'return',
                  (0, _context13.t0)(_context13.t1, _context13.t9)
                    .then(_utils.api.handleErrors)
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(responseJSON) {
                      Alert.alert('Your email has been confirmed');
                      dispatch(updateAuthUser(responseJSON));
                      return true;
                    })
                    .catch(function(err) {
                      Alert.alert(err.message);
                      return false;
                    })
                );
              case 13:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13);
      })
    );
    return function(_x10) {
      return _ref14.apply(this, arguments);
    };
  })();
}
function setStats(stats) {
  return { type: types.SET_STATS, payload: stats };
}
function getChart(start, end) {
  return (function() {
    var _ref15 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee14(dispatch) {
        var chart;
        return _regenerator.default.wrap(
          function _callee14$(_context14) {
            while (1) {
              switch ((_context14.prev = _context14.next)) {
                case 0:
                  _context14.prev = 0;
                  _context14.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'relevanceStats',
                      path: '/user',
                      query: { start: start, end: end }
                    })
                  );
                case 3:
                  chart = _context14.sent;
                  dispatch(setStats({ chart: chart }));
                  dispatch(errorActions.setError('stats', false));
                  return _context14.abrupt('return', true);
                case 9:
                  _context14.prev = 9;
                  _context14.t0 = _context14['catch'](0);
                  dispatch(errorActions.setError('stats', true, _context14.t0.message));
                  return _context14.abrupt('return', false);
                case 13:
                case 'end':
                  return _context14.stop();
              }
            }
          },
          _callee14,
          null,
          [[0, 9]]
        );
      })
    );
    return function(_x11) {
      return _ref15.apply(this, arguments);
    };
  })();
}
function getStats(user) {
  return (function() {
    var _ref16 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee15(dispatch) {
        var stats;
        return _regenerator.default.wrap(
          function _callee15$(_context15) {
            while (1) {
              switch ((_context15.prev = _context15.next)) {
                case 0:
                  _context15.prev = 0;
                  _context15.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'relevance',
                      path: '/user/'.concat(user._id, '/stats')
                    })
                  );
                case 3:
                  stats = _context15.sent;
                  dispatch(setStats(stats));
                  dispatch(errorActions.setError('stats', false));
                  return _context15.abrupt('return', true);
                case 9:
                  _context15.prev = 9;
                  _context15.t0 = _context15['catch'](0);
                  dispatch(errorActions.setError('stats', true, _context15.t0.message));
                  return _context15.abrupt('return', false);
                case 13:
                case 'end':
                  return _context15.stop();
              }
            }
          },
          _callee15,
          null,
          [[0, 9]]
        );
      })
    );
    return function(_x12) {
      return _ref16.apply(this, arguments);
    };
  })();
}
function getRelChart(start, end) {
  return (function() {
    var _ref17 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee16(dispatch) {
        var relChart;
        return _regenerator.default.wrap(
          function _callee16$(_context16) {
            while (1) {
              switch ((_context16.prev = _context16.next)) {
                case 0:
                  _context16.prev = 0;
                  _context16.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'statistics',
                      path: '/user',
                      query: { start: start, end: end }
                    })
                  );
                case 3:
                  relChart = _context16.sent;
                  dispatch(setStats({ relChart: relChart }));
                  dispatch(errorActions.setError('stats', false));
                  return _context16.abrupt('return', true);
                case 9:
                  _context16.prev = 9;
                  _context16.t0 = _context16['catch'](0);
                  dispatch(errorActions.setError('stats', true, _context16.t0.message));
                  return _context16.abrupt('return', false);
                case 13:
                case 'end':
                  return _context16.stop();
              }
            }
          },
          _callee16,
          null,
          [[0, 9]]
        );
      })
    );
    return function(_x13) {
      return _ref17.apply(this, arguments);
    };
  })();
}
function setTwitter(profile) {
  return { type: types.SET_TWITTER, payload: profile };
}
function setLoading(loading) {
  return { type: types.SET_LOADING, payload: loading };
}
function twitterAuth(profile, invite) {
  return (function() {
    var _ref18 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee17(dispatch) {
        var result;
        return _regenerator.default.wrap(
          function _callee17$(_context17) {
            while (1) {
              switch ((_context17.prev = _context17.next)) {
                case 0:
                  _context17.prev = 0;
                  dispatch(setLoading(true));
                  _context17.next = 4;
                  return dispatch(
                    _utils.api.request({
                      method: 'POST',
                      endpoint: '/auth/',
                      path: 'twitter/login',
                      body: JSON.stringify({ profile: profile, invite: invite })
                    })
                  );
                case 4:
                  result = _context17.sent;
                  if (result) {
                    _context17.next = 7;
                    break;
                  }
                  throw new Error('Twitter Auth failed');
                case 7:
                  dispatch(setLoading(false));
                  if (!(result.user && result.user.role === 'temp')) {
                    _context17.next = 15;
                    break;
                  }
                  _context17.next = 11;
                  return _utils.storage.setToken(result.token);
                case 11:
                  dispatch(loginUserSuccess(result.token));
                  dispatch(setPreUser(result.user));
                  dispatch(
                    setTwitter(
                      _objectSpread(
                        _objectSpread({}, profile),
                        {},
                        { token: result.token }
                      )
                    )
                  );
                  return _context17.abrupt('return', false);
                case 15:
                  if (!(result.token && result.user)) {
                    _context17.next = 20;
                    break;
                  }
                  _context17.next = 18;
                  return _utils.storage.setToken(result.token);
                case 18:
                  dispatch(loginUserSuccess(result.token));
                  setupUser(result.user, dispatch);
                case 20:
                  return _context17.abrupt('return', true);
                case 23:
                  _context17.prev = 23;
                  _context17.t0 = _context17['catch'](0);
                  dispatch(setTwitter(null));
                  dispatch(setLoading(false));
                  Alert.alert(_context17.t0.message);
                  return _context17.abrupt('return', false);
                case 29:
                case 'end':
                  return _context17.stop();
              }
            }
          },
          _callee17,
          null,
          [[0, 23]]
        );
      })
    );
    return function(_x14) {
      return _ref18.apply(this, arguments);
    };
  })();
}
function userToSocket(user) {
  return function(dispatch) {
    if (!user) return;
    dispatch({ type: 'server/storeUser', payload: user });
  };
}
function redeemInvite(invitecode) {
  return (function() {
    var _ref19 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee18(dispatch) {
        var user;
        return _regenerator.default.wrap(
          function _callee18$(_context18) {
            while (1) {
              switch ((_context18.prev = _context18.next)) {
                case 0:
                  _context18.prev = 0;
                  _context18.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'invites',
                      path: '/',
                      body: JSON.stringify({ invitecode: invitecode })
                    })
                  );
                case 3:
                  user = _context18.sent;
                  dispatch(setInviteCode(null));
                  dispatch(updateAuthUser(user));
                  Alert.alert('You are now a trusted admin of the community!', 'success');
                  _context18.next = 12;
                  break;
                case 9:
                  _context18.prev = 9;
                  _context18.t0 = _context18['catch'](0);
                  dispatch(setInviteCode(null));
                case 12:
                case 'end':
                  return _context18.stop();
              }
            }
          },
          _callee18,
          null,
          [[0, 9]]
        );
      })
    );
    return function(_x15) {
      return _ref19.apply(this, arguments);
    };
  })();
}
function loginWithBox(_ref20) {
  var address = _ref20.address,
    signature = _ref20.signature,
    msg = _ref20.msg;
  return (function() {
    var _ref21 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee19(dispatch) {
        var res;
        return _regenerator.default.wrap(
          function _callee19$(_context19) {
            while (1) {
              switch ((_context19.prev = _context19.next)) {
                case 0:
                  _context19.prev = 0;
                  _context19.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'POST',
                      endpoint: '/auth',
                      path: '/web3',
                      body: JSON.stringify({
                        address: address,
                        signature: signature,
                        msg: msg
                      })
                    })
                  );
                case 3:
                  res = _context19.sent;
                  if (!res.token) {
                    _context19.next = 10;
                    break;
                  }
                  _context19.next = 7;
                  return _utils.storage.setToken(res.token);
                case 7:
                  dispatch(loginUserSuccess(res.token));
                  dispatch(getUser());
                  return _context19.abrupt('return', true);
                case 10:
                  dispatch(loginUserFailure(res.message));
                  Alert.alert(res.message);
                  return _context19.abrupt('return', false);
                case 15:
                  _context19.prev = 15;
                  _context19.t0 = _context19['catch'](0);
                  Alert.alert(_context19.t0.message);
                  return _context19.abrupt('return', false);
                case 19:
                case 'end':
                  return _context19.stop();
              }
            }
          },
          _callee19,
          null,
          [[0, 15]]
        );
      })
    );
    return function(_x16) {
      return _ref21.apply(this, arguments);
    };
  })();
}
function updateUserTokenBalance() {
  return (function() {
    var _ref22 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee20(dispatch) {
        var res;
        return _regenerator.default.wrap(
          function _callee20$(_context20) {
            while (1) {
              switch ((_context20.prev = _context20.next)) {
                case 0:
                  _context20.prev = 0;
                  _context20.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'user',
                      path: '/updateUserTokenBalance'
                    })
                  );
                case 3:
                  res = _context20.sent;
                  dispatch(updateAuthUser(res));
                  _context20.next = 10;
                  break;
                case 7:
                  _context20.prev = 7;
                  _context20.t0 = _context20['catch'](0);
                  Alert.alert(_context20.t0.message);
                case 10:
                case 'end':
                  return _context20.stop();
              }
            }
          },
          _callee20,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x17) {
      return _ref22.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=auth.actions.js.map
