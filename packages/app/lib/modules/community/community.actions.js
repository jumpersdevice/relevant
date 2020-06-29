'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.addCommunity = addCommunity;
exports.modifyCommunity = modifyCommunity;
exports.removeCommunity = removeCommunity;
exports.setCommunities = setCommunities;
exports.setCommunityMembers = setCommunityMembers;
exports.getCommunityAdmins = getCommunityAdmins;
exports.setUserMemberships = setUserMemberships;
exports.getCommunityMembers = getCommunityMembers;
exports.getCommunities = getCommunities;
exports.createCommunity = createCommunity;
exports.updateCommunity = updateCommunity;
exports.deleteCommunity = deleteCommunity;
exports.joinCommunity = joinCommunity;
exports.searchMembers = searchMembers;
exports.checkAuth = checkAuth;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _utils = require('../../utils');
var Alert = _utils.alert.Alert();
function addCommunity(community) {
  return { type: types.ADD_COMMUNITY, payload: community };
}
function modifyCommunity(community) {
  return { type: types.UPDATE_COMMUNITY, payload: community };
}
function removeCommunity(communitySlug) {
  return { type: types.REMOVE_COMMUNITY, payload: communitySlug };
}
function setCommunities(communities) {
  return { type: types.SET_COMMUNITIES, payload: communities };
}
function setCommunityMembers(slug, members) {
  return { type: types.SET_COMMUNITY_MEMBERS, payload: { slug: slug, members: members } };
}
function getCommunityAdmins() {}
function setUserMemberships(memberships) {
  return { type: types.SET_USER_MEMBERSHIPS, payload: memberships };
}
function getCommunityMembers(_ref) {
  var slug = _ref.slug,
    skip = _ref.skip,
    limit = _ref.limit;
  return (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        var members;
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
                      endpoint: 'community',
                      params: { slug: slug, members: 'members' },
                      query: { skip: skip, limit: limit }
                    })
                  );
                case 3:
                  members = _context.sent;
                  return _context.abrupt(
                    'return',
                    dispatch(setCommunityMembers(slug, members))
                  );
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', false);
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
function getCommunities() {
  return (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        var _getState, auth, res;
        return _regenerator.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  (_getState = getState()), (auth = _getState.auth);
                  _context2.prev = 1;
                  _context2.next = 4;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'community',
                      user: auth.user
                    })
                  );
                case 4:
                  res = _context2.sent;
                  return _context2.abrupt('return', dispatch(setCommunities(res)));
                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2['catch'](1);
                  return _context2.abrupt('return', false);
                case 11:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[1, 8]]
        );
      })
    );
    return function(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  })();
}
function createCommunity(community) {
  return (function() {
    var _ref4 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(dispatch) {
        var responseJSON;
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
                      endpoint: 'community',
                      body: JSON.stringify(community)
                    })
                  );
                case 3:
                  responseJSON = _context3.sent;
                  dispatch(addCommunity(responseJSON));
                  return _context3.abrupt(
                    'return',
                    Alert.alert('Community Created', 'success')
                  );
                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3['catch'](0);
                  return _context3.abrupt('return', Alert.alert(_context3.t0.message));
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
    return function(_x4) {
      return _ref4.apply(this, arguments);
    };
  })();
}
function updateCommunity(community) {
  return (function() {
    var _ref5 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee4(dispatch) {
        var responseJSON;
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
                      endpoint: 'community/'.concat(community._id),
                      body: JSON.stringify(community)
                    })
                  );
                case 3:
                  responseJSON = _context4.sent;
                  dispatch(modifyCommunity(responseJSON));
                  return _context4.abrupt(
                    'return',
                    Alert.alert('Community Updated', 'success')
                  );
                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4['catch'](0);
                  return _context4.abrupt('return', Alert.alert(_context4.t0.message));
                case 11:
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
    return function(_x5) {
      return _ref5.apply(this, arguments);
    };
  })();
}
function deleteCommunity(community) {
  var slug = community.slug,
    _id = community._id;
  return (function() {
    var _ref6 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee5(dispatch) {
        return _regenerator.default.wrap(
          function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'DELETE',
                      endpoint: 'community/'.concat(_id)
                    })
                  );
                case 3:
                  dispatch(removeCommunity(slug));
                  Alert.alert('Community Removed', 'success');
                  return _context5.abrupt('return', true);
                case 8:
                  _context5.prev = 8;
                  _context5.t0 = _context5['catch'](0);
                  Alert.alert(_context5.t0.message);
                  return _context5.abrupt('return', false);
                case 12:
                case 'end':
                  return _context5.stop();
              }
            }
          },
          _callee5,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x6) {
      return _ref6.apply(this, arguments);
    };
  })();
}
function joinCommunity(community) {
  var slug = community.slug,
    name = community.name;
  return (function() {
    var _ref7 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee6(dispatch) {
        return _regenerator.default.wrap(
          function _callee6$(_context6) {
            while (1) {
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'PUT',
                      endpoint: 'community/'.concat(slug, '/join')
                    })
                  );
                case 3:
                  return _context6.abrupt(
                    'return',
                    Alert.alert('Joined Community: '.concat(name), 'success')
                  );
                case 6:
                  _context6.prev = 6;
                  _context6.t0 = _context6['catch'](0);
                  return _context6.abrupt('return', Alert.alert(_context6.t0.message));
                case 9:
                case 'end':
                  return _context6.stop();
              }
            }
          },
          _callee6,
          null,
          [[0, 6]]
        );
      })
    );
    return function(_x7) {
      return _ref7.apply(this, arguments);
    };
  })();
}
function searchMembers(val, community) {
  var limit = 50;
  return (function() {
    var _ref8 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee7(dispatch) {
        var res;
        return _regenerator.default.wrap(
          function _callee7$(_context7) {
            while (1) {
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'community',
                      path: '/'.concat(community, '/members/search'),
                      query: { limit: limit, search: val }
                    })
                  );
                case 3:
                  res = _context7.sent;
                  return _context7.abrupt('return', res);
                case 7:
                  _context7.prev = 7;
                  _context7.t0 = _context7['catch'](0);
                  return _context7.abrupt('return', _context7.t0);
                case 10:
                case 'end':
                  return _context7.stop();
              }
            }
          },
          _callee7,
          null,
          [[0, 7]]
        );
      })
    );
    return function(_x8) {
      return _ref8.apply(this, arguments);
    };
  })();
}
function checkAuth() {
  return (function() {
    var _ref9 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee8(dispatch, getState) {
        var state, community;
        return _regenerator.default.wrap(
          function _callee8$(_context8) {
            while (1) {
              switch ((_context8.prev = _context8.next)) {
                case 0:
                  _context8.prev = 0;
                  state = getState();
                  community = state.auth.community;
                  _context8.next = 5;
                  return dispatch(
                    _utils.api.request({
                      method: 'GET',
                      endpoint: 'community',
                      path: '/'.concat(community, '/checkAuth')
                    })
                  );
                case 5:
                  return _context8.abrupt('return', null);
                case 8:
                  _context8.prev = 8;
                  _context8.t0 = _context8['catch'](0);
                  return _context8.abrupt('return', _context8.t0);
                case 11:
                case 'end':
                  return _context8.stop();
              }
            }
          },
          _callee8,
          null,
          [[0, 8]]
        );
      })
    );
    return function(_x9, _x10) {
      return _ref9.apply(this, arguments);
    };
  })();
}
//# sourceMappingURL=community.actions.js.map
