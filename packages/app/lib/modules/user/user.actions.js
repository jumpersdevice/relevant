'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.updateLocalUser = updateLocalUser;
exports.getUsersLoading = getUsersLoading;
exports.getUserLoading = getUserLoading;
exports.setUserList = setUserList;
exports.clearUserList = clearUserList;
exports.clearSelectedUser = clearSelectedUser;
exports.setSelectedUserData = setSelectedUserData;
exports.setUserSearch = setUserSearch;
exports.searchUser = searchUser;
exports.getSelectedUser = getSelectedUser;
exports.updateBlock = updateBlock;
exports.getBlocked = getBlocked;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _utils = require('../../utils');
var errorActions = _interopRequireWildcard(require('../ui/error.actions'));
var types = _interopRequireWildcard(require('../../core/actionTypes'));
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
function updateLocalUser(user) {
  return { type: types.UPDATE_USER, payload: user };
}
function getUsersLoading() {
  return { type: 'GET_USER_LIST' };
}
function getUserLoading() {
  return { type: 'GET_USER_LOADING' };
}
function setUserList(users, index, topic) {
  return { type: 'SET_USER_LIST', payload: { users: users, index: index, topic: topic } };
}
function clearUserList() {
  return { type: 'CLEAR_USER_LIST' };
}
function clearSelectedUser() {
  return { type: 'CLEAR_SELECTED_USER' };
}
function setSelectedUserData(data) {
  return { type: types.SET_SELECTED_USER_DATA, payload: data };
}
function setUserSearch(data) {
  return { type: 'SET_USER_SEARCH', payload: data };
}
function searchUser(userName) {
  var limit = 50;
  return (function() {
    var _ref = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        var res;
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
                      endpoint: 'user',
                      path: '/search',
                      query: { limit: limit, search: userName }
                    })
                  );
                case 3:
                  res = _context.sent;
                  dispatch(setUserSearch(res));
                  return _context.abrupt('return', res);
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);
                  dispatch(errorActions.setError('activity', true, _context.t0.message));
                  return _context.abrupt('return', false);
                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x) {
      return _ref.apply(this, arguments);
    };
  })();
}
function getSelectedUser(userName) {
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        var user;
        return _regenerator.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0;
                  dispatch(getUserLoading());
                  _context2.next = 4;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'user',
                      path: '/user/' + userName
                    })
                  );
                case 4:
                  user = _context2.sent;
                  dispatch(setSelectedUserData(user));
                  dispatch(errorActions.setError('profile', false));
                  return _context2.abrupt('return', true);
                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2['catch'](0);
                  dispatch(errorActions.setError('profile', true, _context2.t0.message));
                  return _context2.abrupt('return', false);
                case 14:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[0, 10]]
        );
      })
    );
    return function(_x2) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function updateBlock(block, unblock) {
  var url = process.env.API_SERVER + '/api/user/block';
  if (unblock) {
    url = process.env.API_SERVER + '/api/user/unblock';
  }
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(dispatch) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.t0 = fetch;
                _context3.t1 = url;
                _context3.t2 = _objectSpread;
                _context3.t3 = { method: 'PUT', body: JSON.stringify({ block: block }) };
                _context3.next = 6;
                return _utils.api.reqOptions();
              case 6:
                _context3.t4 = _context3.sent;
                _context3.t5 = (0, _context3.t2)(_context3.t3, _context3.t4);
                return _context3.abrupt(
                  'return',
                  (0, _context3.t0)(_context3.t1, _context3.t5)
                    .then(_utils.api.handleErrors)
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(responseJSON) {
                      var action = 'blocked';
                      if (unblock) action = 'unblocked';
                      Alert.alert('user ' + block + ' has been ' + action);
                      dispatch(updateLocalUser(responseJSON));
                    })
                    .catch(null)
                );
              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    );
    return function(_x3) {
      return _ref3.apply(this, arguments);
    };
  })();
}
function getBlocked() {
  return (function() {
    var _ref4 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee4(dispatch) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _context4.t0 = fetch;
                _context4.t1 = process.env.API_SERVER + '/api/user/blocked';
                _context4.t2 = _objectSpread;
                _context4.t3 = { method: 'GET' };
                _context4.next = 6;
                return _utils.api.reqOptions();
              case 6:
                _context4.t4 = _context4.sent;
                _context4.t5 = (0, _context4.t2)(_context4.t3, _context4.t4);
                return _context4.abrupt(
                  'return',
                  (0, _context4.t0)(_context4.t1, _context4.t5)
                    .then(_utils.api.handleErrors)
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(responseJSON) {
                      dispatch(updateLocalUser(responseJSON));
                    })
                    .catch(null)
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
      return _ref4.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=user.actions.js.map
