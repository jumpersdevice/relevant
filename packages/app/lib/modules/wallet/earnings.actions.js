'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setEarnings = setEarnings;
exports.addEarning = addEarning;
exports.updateEarning = updateEarning;
exports.getEarnings = getEarnings;
exports.updateCashoutLog = updateCashoutLog;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _normalizr = require('normalizr');
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _utils = require('../../utils');
var _post = require('../post/post.actions');
var _auth = require('../auth/auth.actions');
var earningSchema = new _normalizr.schema.Entity(
  'earnings',
  { post: _post.postSchema },
  { idAttribute: '_id' }
);
function setEarnings(_ref) {
  var data = _ref.data,
    status = _ref.status,
    skip = _ref.skip;
  return {
    type: types.SET_EARNINGS,
    payload: { data: data, status: status, skip: skip }
  };
}
function addEarning(earning) {
  return { type: types.ADD_EARNING, payload: earning };
}
function updateEarning(earning) {
  return { type: types.UPDATE_EARNING, payload: earning };
}
function getEarnings(status, limit, skip) {
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        var earnings, data;
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
                      endpoint: 'earnings',
                      query: { status: status, limit: limit, skip: skip }
                    })
                  );
                case 3:
                  earnings = _context.sent;
                  data = (0, _normalizr.normalize)(earnings, [earningSchema]);
                  dispatch(setEarnings({ data: data, status: status, skip: skip }));
                  dispatch((0, _post.setPostsSimple)(data));
                  return _context.abrupt('return', true);
                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', false);
                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 10]]
        );
      })
    );
    return function(_x) {
      return _ref2.apply(this, arguments);
    };
  })();
}
function updateCashoutLog(_id) {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch) {
        var _yield$dispatch, user, earning;
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
                      endpoint: 'earnings',
                      params: { _id: _id }
                    })
                  );
                case 3:
                  _yield$dispatch = _context2.sent;
                  user = _yield$dispatch.user;
                  earning = _yield$dispatch.earning;
                  dispatch((0, _auth.updateAuthUser)(user));
                  dispatch(updateEarning(earning));
                  return _context2.abrupt('return', true);
                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2['catch'](0);
                  return _context2.abrupt('return', false);
                case 14:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[0, 11]]
        );
      })
    );
    return function(_x2) {
      return _ref3.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=earnings.actions.js.map
