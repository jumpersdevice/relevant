'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = community;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _normalizr = require('normalizr');
var types = _interopRequireWildcard(require('../../core/actionTypes'));
var _list = require('../../utils/list');
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
var CommunitySchema = new _normalizr.schema.Entity(
  'communities',
  {},
  { idAttribute: 'slug' }
);
var MemberSchema = new _normalizr.schema.Entity('members', {}, { idAttribute: '_id' });
var initialState = {
  communities: {},
  list: [],
  active: null,
  members: {},
  communityMembers: {},
  userMemberships: [],
  userCommunities: [],
  slugToId: {}
};
function community() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types.SET_COMMUNITIES: {
      var normalized = (0, _normalizr.normalize)(action.payload, [CommunitySchema]);
      var slugToId = {};
      normalized.result.forEach(function(cId) {
        var c = normalized.entities.communities[cId];
        slugToId[c.slug] = c._id;
      });
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          communities: _objectSpread(
            _objectSpread({}, state.communities),
            normalized.entities.communities
          ),
          list: (0, _toConsumableArray2.default)(
            new Set(
              [].concat(
                (0, _toConsumableArray2.default)(state.list),
                (0, _toConsumableArray2.default)(normalized.result)
              )
            )
          ),
          slugToId: _objectSpread(_objectSpread({}, state.slugToId), slugToId)
        }
      );
    }
    case types.SET_USER_MEMBERSHIPS: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          userMemberships: action.payload,
          userCommunities: action.payload.map(function(m) {
            return m.communityId;
          })
        }
      );
    }
    case types.ADD_USER_MEMBERSHIP: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          userMemberships: [].concat(
            (0, _toConsumableArray2.default)(state.userMemberships),
            [action.payload]
          ),
          userCommunities: [].concat(
            (0, _toConsumableArray2.default)(state.userCommunities),
            [action.payload.communityId]
          )
        }
      );
    }
    case types.SET_COMMUNITY: {
      return _objectSpread(_objectSpread({}, state), {}, { active: action.payload });
    }
    case types.REMOVE_COMMUNITY: {
      var updatedCommunities = _objectSpread({}, state.communities);
      delete updatedCommunities[action.payload];
      delete updatedCommunities[action.payload];
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { communities: _objectSpread({}, updatedCommunities) }
      );
    }
    case types.SET_COMMUNITY_MEMBERS: {
      var _action$payload = action.payload,
        members = _action$payload.members,
        slug = _action$payload.slug;
      var data = (0, _normalizr.normalize)(members, [MemberSchema]);
      var existingCommunityMembers = state.communityMembers[slug] || [];
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          communityMembers: _objectSpread(
            _objectSpread({}, state.communityMembers),
            {},
            (0, _defineProperty2.default)(
              {},
              slug,
              (0, _list.unique)(
                [].concat(
                  (0, _toConsumableArray2.default)(existingCommunityMembers),
                  (0, _toConsumableArray2.default)(data.result)
                )
              )
            )
          ),
          members: _objectSpread(_objectSpread({}, state.members), data.entities.members)
        }
      );
    }
    case types.ADD_COMMUNITY: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          communities: _objectSpread(
            _objectSpread({}, state.communities),
            {},
            (0, _defineProperty2.default)({}, action.payload.slug, action.payload)
          ),
          list: (0, _toConsumableArray2.default)(
            new Set(
              [].concat((0, _toConsumableArray2.default)(state.list), [
                action.payload.slug
              ])
            )
          )
        }
      );
    }
    case types.UPDATE_COMMUNITY: {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          communities: _objectSpread(
            _objectSpread({}, state.communities),
            {},
            (0, _defineProperty2.default)({}, action.payload.slug, action.payload)
          )
        }
      );
    }
    default:
      return state;
  }
}
//# sourceMappingURL=community.reducer.js.map
