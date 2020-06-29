'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.get = get;
exports.remove = remove;
exports.set = set;
exports.getToken = getToken;
exports.isDismissed = exports.removeToken = exports.setToken = exports.local = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var userDefaults;
var cookie;
var localStorage;
if (process.env.WEB !== 'true') {
  userDefaults = require('react-native-swiss-knife').RNSKBucket;
} else {
  var Cookies =
    process.env.BROWSER && process.env.NODE_ENV !== 'test'
      ? require('universal-cookie').default
      : require('universal-cookie');
  cookie = new Cookies();
  if (process.env.BROWSER) localStorage = window.localStorage;
}
var APP_GROUP_ID = 'group.com.4real.relevant';
var token;
var local = localStorage;
exports.local = local;
function get(key) {
  return new Promise(function(resolve, reject) {
    if (userDefaults) {
      return userDefaults
        .get(key, APP_GROUP_ID)
        .then(function(val) {
          if (val) {
            return resolve(val);
          }
          return resolve(null);
        })
        .catch(function(err) {
          return reject(err);
        });
    }
    var val = cookie.get(key, { path: '/' });
    if (val) {
      return resolve(val);
    }
    return resolve(null);
  });
}
function remove(key) {
  if (userDefaults) {
    return new Promise(function(resolve) {
      userDefaults.remove(key, APP_GROUP_ID);
      resolve();
    });
  }
  return new Promise(function(resolve) {
    cookie.remove(key, { path: '/' });
    resolve();
  });
}
function set(key, val) {
  if (userDefaults) {
    return new Promise(function(resolve) {
      userDefaults.set(key, String(val), APP_GROUP_ID);
      resolve();
    });
  }
  return new Promise(function(resolve) {
    cookie.set(key, val, { path: '/' });
    resolve();
  });
}
function getToken() {
  return new Promise(function(resolve, reject) {
    if (token) return resolve(token);
    if (userDefaults) {
      return userDefaults
        .get('token', APP_GROUP_ID)
        .then(function(newToken) {
          if (newToken) {
            token = newToken;
            return resolve(token);
          }
          return resolve(null);
        })
        .catch(function(err) {
          return reject(err);
        });
    }
    var newToken = cookie.get('token', { path: '/' });
    if (newToken) {
      token = newToken;
      return resolve(token);
    }
    return resolve(token);
  });
}
var setToken = (function() {
  var _ref = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee(newToken) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              token = newToken;
              set('token', newToken);
            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return function setToken(_x) {
    return _ref.apply(this, arguments);
  };
})();
exports.setToken = setToken;
var removeToken = (function() {
  var _ref2 = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              token = null;
              console.log('REMOVING TOKEN!');
              remove('token');
            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2);
    })
  );
  return function removeToken() {
    return _ref2.apply(this, arguments);
  };
})();
exports.removeToken = removeToken;
var isTimecodeExpired = function isTimecodeExpired(date, days) {
  var now = new Date().getTime();
  var diff = Math.abs(now - Number(date));
  var ONE_DAY = 1000 * 60 * 60 * 24;
  return diff > days * ONE_DAY;
};
var isDismissed = (function() {
  var _ref3 = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee3(key, days) {
      var dismissed;
      return _regenerator.default.wrap(
        function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return get(key);
              case 3:
                dismissed = _context3.sent;
                _context3.next = 9;
                break;
              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', false);
              case 9:
                if (dismissed) {
                  _context3.next = 11;
                  break;
                }
                return _context3.abrupt('return', false);
              case 11:
                if (!isTimecodeExpired(Number(dismissed), days)) {
                  _context3.next = 14;
                  break;
                }
                remove(key);
                return _context3.abrupt('return', false);
              case 14:
                return _context3.abrupt('return', true);
              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        },
        _callee3,
        null,
        [[0, 6]]
      );
    })
  );
  return function isDismissed(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
})();
exports.isDismissed = isDismissed;
//# sourceMappingURL=storage.js.map
