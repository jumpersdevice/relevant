'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setStats = setStats;
exports.addStats = addStats;
exports.parseStats = parseStats;
exports.getAllStats = getAllStats;
exports.getStats = getStats;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _utils = require('../../utils');
function setStats(data) {
  return { type: types.SET_STATS, payload: data };
}
function addStats(data) {
  return { type: types.ADD_STATS, payload: { user: data.user, data: data.data } };
}
function parseStats(data) {
  return function(dispatch) {
    var d = new Date();
    var currentHour = d.getHours();
    var prevHour = currentHour--;
    var dataObj = {};
    data.stats.forEach(function(item) {
      dataObj[item.user] = {};
      dataObj[item.user].value = 0;
      if (item.hours[prevHour]) dataObj[item.user].value = item.hours[prevHour];
    });
    dispatch(setStats(dataObj));
  };
}
function getAllStats() {
  return (function() {
    var _ref = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        var responseJSON;
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
                      endpoint: 'statistics',
                      path: '/all'
                    })
                  );
                case 3:
                  responseJSON = _context.sent;
                  return _context.abrupt('return', dispatch(parseStats(responseJSON)));
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', null);
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
      return _ref.apply(this, arguments);
    };
  })();
}
function getStats(id) {
  var present = new Date();
  var past = new Date(present - 1000 * 60 * 60 * 1);
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
                      endpoint: 'statistics',
                      path: '/change/'
                        .concat(id, '?startTime=')
                        .concat(past, "'&endTime=")
                        .concat(present)
                    })
                  );
                case 3:
                  res = _context2.sent;
                  return _context2.abrupt(
                    'return',
                    dispatch(addStats({ user: id, data: res }))
                  );
                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2['catch'](0);
                  return _context2.abrupt('return', null);
                case 10:
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
//# sourceMappingURL=stats.actions.js.map
