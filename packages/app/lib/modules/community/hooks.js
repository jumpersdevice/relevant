'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.useUnread = useUnread;
exports.useTotalUnread = useTotalUnread;
exports.useMembers = useMembers;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _reactRedux = require('react-redux');
var _reactHooks = require('@apollo/react-hooks');
var _queries = require('./queries');
function useUnread(community, active) {
  var myMemberships = useMembers();
  var membership =
    myMemberships &&
    myMemberships.find(function(m) {
      return m.communityId === community._id;
    });
  var unread = membership && membership.unread;
  useSubscribeToUnread(membership);
  useResetUnread(unread, membership, active);
  return unread;
}
function useTotalUnread() {
  var myMemberships = useMembers();
  return myMemberships.reduce(function(a, m) {
    return a + m.unread;
  }, 0);
}
function useMembers() {
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var _useQuery = (0, _reactHooks.useQuery)(_queries.MY_MEMBERSHIPS, {
      skip: !user,
      ssr: false
    }),
    _useQuery$data = _useQuery.data,
    data = _useQuery$data === void 0 ? { myMemberships: [] } : _useQuery$data;
  var myMemberships = data.myMemberships;
  return myMemberships;
}
function useSubscribeToUnread(membership) {
  var myMemberships = useMembers();
  var client = (0, _reactHooks.useApolloClient)();
  var _ref = membership || {},
    communityId = _ref.communityId;
  (0, _reactHooks.useSubscription)(_queries.INC_UNREAD, {
    ssr: false,
    variables: { communities: [communityId] },
    onSubscriptionData: function onSubscriptionData() {
      membership.unread++;
      client.writeQuery({
        query: _queries.MY_MEMBERSHIPS,
        data: { myMemberships: myMemberships }
      });
    }
  });
}
function useResetUnread(unread, membership, active) {
  var client = (0, _reactHooks.useApolloClient)();
  var _useMutation = (0, _reactHooks.useMutation)(_queries.CLEAR_UNREAD),
    _useMutation2 = (0, _slicedToArray2.default)(_useMutation, 1),
    clearUnread = _useMutation2[0];
  var myMemberships = useMembers();
  if (unread && active) {
    membership.unread = 0;
    client.writeQuery({
      query: _queries.MY_MEMBERSHIPS,
      data: { myMemberships: myMemberships }
    });
    clearUnread({ variables: { _id: membership._id } });
  }
}
//# sourceMappingURL=hooks.js.map
