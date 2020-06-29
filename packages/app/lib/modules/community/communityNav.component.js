'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.Community = Community;
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _styles = require('../../styles');
var _navigation = require('../navigation/navigation.actions');
var _auth = require('../auth/auth.actions');
var _primitives = require('styled-components/primitives');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _communityActive = _interopRequireDefault(require('./communityActive.component'));
var _communityListItem = _interopRequireDefault(require('./communityListItem.component'));
var _get = _interopRequireDefault(require('lodash/get'));
var _uni = require('../styled/uni');
var _layout = require('../../styles/layout');
var _hooks = require('./hooks');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/community/communityNav.component.js';
var linkStyle = (0, _primitives.css)(
  [
    'display:flex;align-items:center;color:',
    ';&:hover > div > div:first-child{text-decoration:underline;text-decoration-color:',
    ';}&:hover{background:',
    ';}'
  ],
  _styles.colors.black,
  _styles.colors.black,
  _styles.colors.white
);
Community.propTypes = {
  viewCommunityMembers: _propTypes.default.func,
  showSettings: _propTypes.default.func
};
function Community(_ref) {
  var viewCommunityMembers = _ref.viewCommunityMembers,
    showSettings = _ref.showSettings;
  var community = (0, _reactRedux.useSelector)(function(state) {
    return state.community;
  });
  var auth = (0, _reactRedux.useSelector)(function(state) {
    return state.auth;
  });
  var view = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.discover;
  });
  var screenSize = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.screenSize;
  });
  var communityMembers = community.communityMembers,
    members = community.members,
    communities = community.communities,
    userCommunities = community.userCommunities,
    userMemberships = community.userMemberships;
  var activeCommunity = communities[community.active];
  var activeMembers = (0, _get.default)(communityMembers, community.active, []).map(
    function(id) {
      return members[id];
    }
  );
  return _react.default.createElement(
    _uni.View,
    { flex: 1, __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 5 } },
    _react.default.createElement(
      _uni.View,
      { bb: true, __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 } },
      activeCommunity &&
        _react.default.createElement(
          _communityActive.default,
          {
            key: activeCommunity._id,
            community: activeCommunity,
            userCommunities: userCommunities,
            userMemberships: userMemberships,
            members: activeMembers,
            screenSize: screenSize,
            viewCommunityMembers: viewCommunityMembers,
            showSettings: showSettings,
            view: view,
            auth: auth,
            __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 11 }
          },
          _react.default.createElement(MemoCommunityLink, {
            community: activeCommunity,
            active: true,
            __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 13 }
          })
        ),
      _react.default.createElement(
        _uni.View,
        {
          m: '2 0',
          __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 9 }
        },
        _react.default.createElement(OtherCommunities, {
          __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 11 }
        })
      )
    ),
    _react.default.createElement(
      _uni.BodyText,
      {
        m: [_layout.SIDE_NAV_PADDING, 2],
        __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 7 }
      },
      "We'll be adding more communities soon!",
      '\n\n'
    )
  );
}
var OtherCommunities = (0, _react.memo)(function() {
  var _useSelector = (0, _reactRedux.useSelector)(function(state) {
      return state.community;
    }),
    communities = _useSelector.communities,
    list = _useSelector.list,
    active = _useSelector.active;
  return list
    .map(function(id) {
      return communities[id];
    })
    .filter(function(community) {
      return community && active !== community.slug;
    })
    .map(function(community) {
      return _react.default.createElement(MemoCommunityLink, {
        key: community._id,
        community: community,
        __source: { fileName: _jsxFileName, lineNumber: 89, columnNumber: 23 }
      });
    });
});
CommunityLink.propTypes = {
  community: _propTypes.default.object,
  active: _propTypes.default.bool
};
var MemoCommunityLink = (0, _react.memo)(CommunityLink);
function CommunityLink(_ref2) {
  var community = _ref2.community,
    active = _ref2.active;
  var dispatch = (0, _reactRedux.useDispatch)();
  var unread = (0, _hooks.useUnread)(community, active);
  return _react.default.createElement(
    _ULink.default,
    {
      flex: 1,
      styles: linkStyle,
      key: community._id,
      to: '/' + community.slug + '/new',
      onPress: function onPress() {
        dispatch((0, _navigation.closeDrawer)());
        requestAnimationFrame(function() {
          dispatch((0, _auth.setCommunity)(community.slug));
          dispatch((0, _navigation.resetTabs)());
        });
      },
      __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.View,
      {
        flex: 1,
        fdirection: 'row',
        align: 'center',
        justify: 'space-between',
        __source: { fileName: _jsxFileName, lineNumber: 117, columnNumber: 7 }
      },
      _react.default.createElement(_communityListItem.default, {
        community: community,
        p: ['1 '.concat(_layout.SIDE_NAV_PADDING), '1 2'],
        __source: { fileName: _jsxFileName, lineNumber: 118, columnNumber: 9 }
      }),
      _react.default.createElement(_uni.Badge, {
        mr: [_layout.SIDE_NAV_PADDING, 2],
        number: unread,
        __source: { fileName: _jsxFileName, lineNumber: 119, columnNumber: 9 }
      })
    )
  );
}
var _default = (0, _react.memo)(Community);
exports.default = _default;
//# sourceMappingURL=communityNav.component.js.map
