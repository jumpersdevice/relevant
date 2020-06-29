'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setInvites = setInvites;
exports.setWaitlist = setWaitlist;
exports.deleteWaitlistUsers = deleteWaitlistUsers;
exports.updateInvite = updateInvite;
exports.destroyInvite = destroyInvite;
exports.setInviteCount = setInviteCount;
exports.getInviteCount = getInviteCount;
exports.getInvites = getInvites;
exports.createInvite = createInvite;
exports.destroy = destroy;
exports.getWaitlist = getWaitlist;
exports.inviteFromWaitlist = inviteFromWaitlist;
exports.signupForMailingList = signupForMailingList;
exports.setDownvotes = setDownvotes;
exports.getDownvotes = getDownvotes;
exports.sendEmail = sendEmail;
exports.saveEmail = saveEmail;
exports.loadEmail = loadEmail;
exports.deleteWaitlistUser = deleteWaitlistUser;
exports.sendPostNotification = sendPostNotification;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _normalizr = require('normalizr');
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _utils = require('../../utils');
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
var API = process.env.API_SERVER + '/api';
var inviteSchema = new _normalizr.schema.Entity('invites', {}, { idAttribute: '_id' });
var listSchema = new _normalizr.schema.Entity('wait', {}, { idAttribute: '_id' });
function setInvites(_ref) {
  var data = _ref.data,
    community = _ref.community,
    skip = _ref.skip;
  return {
    type: types.SET_INVITES,
    payload: { data: data, community: community, skip: skip }
  };
}
function setWaitlist(data) {
  return { type: types.SET_WAITLIST, payload: data };
}
function deleteWaitlistUsers(users) {
  return { type: types.DELETE_WAITLIST_USER, payload: users };
}
function updateInvite(invite) {
  return { type: types.UPDATE_INVITE, payload: invite };
}
function destroyInvite(invite) {
  return { type: types.DESTROY_INVITE, payload: invite };
}
function setInviteCount(count) {
  return { type: types.SET_INVITE_COUNT, payload: count };
}
function getInviteCount() {
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        var count;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'invites',
                      path: '/count'
                    })
                  );
                case 3:
                  count = _context.sent;
                  dispatch(setInviteCount(count));
                  _context.next = 10;
                  break;
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);
                  Alert.alert(_context.t0.message);
                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function getInvites(skip, limit, community) {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        var responseJSON, data;
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
                      query: { skip: skip, limit: limit },
                      endpoint: 'invites',
                      path: ''
                    })
                  );
                case 3:
                  responseJSON = _context2.sent;
                  data = (0, _normalizr.normalize)(
                    { invites: responseJSON },
                    { invites: [inviteSchema] }
                  );
                  dispatch(setInvites({ data: data, community: community, skip: skip }));
                  return _context2.abrupt('return', true);
                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2['catch'](0);
                  return _context2.abrupt('return', false);
                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[0, 9]]
        );
      })
    );
    return function(_x2) {
      return _ref3.apply(this, arguments);
    };
  })();
}
function createInvite(invite) {
  return (function() {
    var _ref4 = (0, _asyncToGenerator2.default)(
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
                      method: 'POST',
                      endpoint: 'invites',
                      path: '/',
                      body: JSON.stringify(invite)
                    })
                  );
                case 3:
                  res = _context3.sent;
                  dispatch(updateInvite(res.invite[0]));
                  dispatch(setInviteCount(res.count));
                  return _context3.abrupt('return', res);
                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3['catch'](0);
                  Alert.alert(_context3.t0.message);
                  return _context3.abrupt('return', false);
                case 13:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          null,
          [[0, 9]]
        );
      })
    );
    return function(_x3) {
      return _ref4.apply(this, arguments);
    };
  })();
}
function destroy(invite) {
  return (function() {
    var _ref5 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee4(dispatch) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _context4.t0 = fetch;
                _context4.t1 = API + '/invites/' + invite._id;
                _context4.t2 = _objectSpread;
                _context4.t3 = { method: 'DELETE' };
                _context4.next = 6;
                return _utils.api.reqOptions();
              case 6:
                _context4.t4 = _context4.sent;
                _context4.t5 = (0, _context4.t2)(_context4.t3, _context4.t4);
                return _context4.abrupt(
                  'return',
                  (0, _context4.t0)(_context4.t1, _context4.t5)
                    .then(_utils.api.handleErrors)
                    .then(function() {
                      Alert.alert('removed item');
                      dispatch(destroyInvite(invite));
                    })
                    .catch(function(error) {
                      Alert.alert(error.message);
                      console.log('invites error', error);
                    })
                );
              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4);
      })
    );
    return function(_x4) {
      return _ref5.apply(this, arguments);
    };
  })();
}
function getWaitlist() {
  return (function() {
    var _ref6 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee5(dispatch) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                _context5.t0 = fetch;
                _context5.t1 = API + '/list';
                _context5.t2 = _objectSpread;
                _context5.t3 = { method: 'GET' };
                _context5.next = 6;
                return _utils.api.reqOptions();
              case 6:
                _context5.t4 = _context5.sent;
                _context5.t5 = (0, _context5.t2)(_context5.t3, _context5.t4);
                return _context5.abrupt(
                  'return',
                  (0, _context5.t0)(_context5.t1, _context5.t5)
                    .then(_utils.api.handleErrors)
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(responseJSON) {
                      var data = (0, _normalizr.normalize)(
                        { wait: responseJSON },
                        { wait: [listSchema] }
                      );
                      dispatch(setWaitlist(data));
                    })
                    .catch(function(error) {
                      console.log('invites error', error);
                    })
                );
              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5);
      })
    );
    return function(_x5) {
      return _ref6.apply(this, arguments);
    };
  })();
}
function inviteFromWaitlist(invites) {
  return (function() {
    var _ref7 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee6(dispatch) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                _context6.t0 = fetch;
                _context6.t1 = process.env.API_SERVER + '/api/list/';
                _context6.t2 = _objectSpread;
                _context6.t3 = _objectSpread;
                _context6.t4 = { method: 'PUT' };
                _context6.next = 7;
                return _utils.api.reqOptions();
              case 7:
                _context6.t5 = _context6.sent;
                _context6.t6 = (0, _context6.t3)(_context6.t4, _context6.t5);
                _context6.t7 = {};
                _context6.t8 = { body: JSON.stringify(invites) };
                _context6.t9 = (0, _context6.t2)(
                  _context6.t6,
                  _context6.t7,
                  _context6.t8
                );
                return _context6.abrupt(
                  'return',
                  (0, _context6.t0)(_context6.t1, _context6.t9)
                    .then(_utils.api.handleErrors)
                    .then(function() {
                      Alert.alert('users have been invited!');
                      dispatch(deleteWaitlistUsers(invites));
                      return true;
                    })
                    .catch(function(err) {
                      Alert.alert(err.message);
                      console.log(err);
                      return false;
                    })
                );
              case 13:
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
function signupForMailingList(user) {
  return (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee7() {
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch ((_context7.prev = _context7.next)) {
            case 0:
              _context7.t0 = fetch;
              _context7.t1 = process.env.API_SERVER + '/api/list/';
              _context7.t2 = _objectSpread;
              _context7.t3 = _objectSpread;
              _context7.t4 = { method: 'POST' };
              _context7.next = 7;
              return _utils.api.reqOptions();
            case 7:
              _context7.t5 = _context7.sent;
              _context7.t6 = (0, _context7.t3)(_context7.t4, _context7.t5);
              _context7.t7 = {};
              _context7.t8 = { body: JSON.stringify(user) };
              _context7.t9 = (0, _context7.t2)(_context7.t6, _context7.t7, _context7.t8);
              return _context7.abrupt(
                'return',
                (0, _context7.t0)(_context7.t1, _context7.t9)
                  .then(_utils.api.handleErrors)
                  .then(function() {
                    Alert.alert("You've been added to the waitlist.", 'success');
                    return true;
                  })
                  .catch(function(err) {
                    Alert.alert(err.message);
                    console.log(err);
                    return false;
                  })
              );
            case 13:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7);
    })
  );
}
function setDownvotes(data) {
  return { type: types.SET_DOWNVOTES, payload: data };
}
function getDownvotes(skip, limit) {
  return function(dispatch) {
    return dispatch(
      _utils.api.request({
        method: 'GET',
        query: { skip: skip, limit: limit },
        endpoint: 'invest',
        path: '/downvotes'
      })
    )
      .then(function(res) {
        return dispatch(setDownvotes(res));
      })
      .catch(function(err) {
        return Alert.alert(err.message);
      });
  };
}
function sendEmail(email) {
  return (function() {
    var _ref9 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee8(dispatch) {
        return _regenerator.default.wrap(
          function _callee8$(_context8) {
            while (1) {
              switch ((_context8.prev = _context8.next)) {
                case 0:
                  _context8.prev = 0;
                  _context8.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'email',
                      path: '/',
                      body: JSON.stringify(email)
                    })
                  );
                case 3:
                  Alert.alert('Email has been sent');
                  return _context8.abrupt('return', true);
                case 7:
                  _context8.prev = 7;
                  _context8.t0 = _context8['catch'](0);
                  return _context8.abrupt('return', false);
                case 10:
                case 'end':
                  return _context8.stop();
              }
            }
          },
          _callee8,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x7) {
      return _ref9.apply(this, arguments);
    };
  })();
}
function saveEmail(email) {
  return (function() {
    var _ref10 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee9(dispatch) {
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
                      endpoint: 'email',
                      path: '/save',
                      body: JSON.stringify(email)
                    })
                  );
                case 3:
                  Alert.alert('Email has been saved');
                  return _context9.abrupt('return', true);
                case 7:
                  _context9.prev = 7;
                  _context9.t0 = _context9['catch'](0);
                  return _context9.abrupt('return', false);
                case 10:
                case 'end':
                  return _context9.stop();
              }
            }
          },
          _callee9,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x8) {
      return _ref10.apply(this, arguments);
    };
  })();
}
function loadEmail() {
  return (function() {
    var _ref11 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee10(dispatch) {
        var responseJSON;
        return _regenerator.default.wrap(
          function _callee10$(_context10) {
            while (1) {
              switch ((_context10.prev = _context10.next)) {
                case 0:
                  _context10.prev = 0;
                  _context10.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'email',
                      path: '/load'
                    })
                  );
                case 3:
                  responseJSON = _context10.sent;
                  return _context10.abrupt('return', responseJSON);
                case 7:
                  _context10.prev = 7;
                  _context10.t0 = _context10['catch'](0);
                  return _context10.abrupt('return', false);
                case 10:
                case 'end':
                  return _context10.stop();
              }
            }
          },
          _callee10,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x9) {
      return _ref11.apply(this, arguments);
    };
  })();
}
function deleteWaitlistUser(user) {
  return (function() {
    var _ref12 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee11(dispatch) {
        var result;
        return _regenerator.default.wrap(
          function _callee11$(_context11) {
            while (1) {
              switch ((_context11.prev = _context11.next)) {
                case 0:
                  _context11.prev = 0;
                  _context11.t0 = fetch;
                  _context11.t1 = API + '/list/' + user._id;
                  _context11.t2 = _objectSpread;
                  _context11.t3 = { method: 'DELETE' };
                  _context11.next = 7;
                  return _utils.api.reqOptions();
                case 7:
                  _context11.t4 = _context11.sent;
                  _context11.t5 = (0, _context11.t2)(_context11.t3, _context11.t4);
                  _context11.next = 11;
                  return (0, _context11.t0)(_context11.t1, _context11.t5);
                case 11:
                  result = _context11.sent;
                  if (result) {
                    dispatch(deleteWaitlistUsers([user]));
                  }
                  _context11.next = 18;
                  break;
                case 15:
                  _context11.prev = 15;
                  _context11.t6 = _context11['catch'](0);
                  Alert.alert(_context11.t6.message);
                case 18:
                case 'end':
                  return _context11.stop();
              }
            }
          },
          _callee11,
          null,
          [[0, 15]]
        );
      })
    );
    return function(_x10) {
      return _ref12.apply(this, arguments);
    };
  })();
}
function sendPostNotification(post) {
  return (function() {
    var _ref13 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee12(dispatch) {
        return _regenerator.default.wrap(
          function _callee12$(_context12) {
            while (1) {
              switch ((_context12.prev = _context12.next)) {
                case 0:
                  _context12.prev = 0;
                  _context12.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'POST',
                      endpoint: 'post',
                      path: '/sendPostNotification',
                      body: JSON.stringify(post)
                    })
                  );
                case 3:
                  return _context12.abrupt('return', Alert.alert('Notification sent!'));
                case 6:
                  _context12.prev = 6;
                  _context12.t0 = _context12['catch'](0);
                  return _context12.abrupt('return', false);
                case 9:
                case 'end':
                  return _context12.stop();
              }
            }
          },
          _callee12,
          null,
          [[0, 6]]
        );
      })
    );
    return function(_x11) {
      return _ref13.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=admin.actions.js.map
