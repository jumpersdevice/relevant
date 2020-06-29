'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _get = _interopRequireDefault(require('lodash/get'));
var _styles = require('../../styles');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _UAvatar = _interopRequireDefault(require('../user/UAvatar.component'));
var _uni = require('../styled/uni');
var _text = require('../../utils/text');
var _layout = require('../../styles/layout');
var _navigation = require('../navigation/navigation.actions');
var _community = require('./community.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/community/communityActive.component.js';
CommunityActive.propTypes = {
  community: _propTypes.default.object,
  children: _propTypes.default.node,
  members: _propTypes.default.array,
  view: _propTypes.default.object,
  auth: _propTypes.default.object,
  screenSize: _propTypes.default.number,
  viewCommunityMembers: _propTypes.default.func,
  showSettings: _propTypes.default.func,
  userCommunities: _propTypes.default.array,
  userMemberships: _propTypes.default.array
};
var _default = (0, _react.memo)(CommunityActive);
exports.default = _default;
function CommunityActive(_ref) {
  var community = _ref.community,
    children = _ref.children,
    members = _ref.members,
    view = _ref.view,
    screenSize = _ref.screenSize,
    auth = _ref.auth,
    viewCommunityMembers = _ref.viewCommunityMembers,
    userCommunities = _ref.userCommunities,
    showSettings = _ref.showSettings,
    userMemberships = _ref.userMemberships;
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function() {
    if (!members.length)
      dispatch((0, _community.getCommunityMembers)({ slug: community.slug }));
  }, []);
  var topics = (0, _get.default)(community, 'topics', []);
  var totalMembers = (0, _get.default)(community, 'memberCount', 0);
  var userId = (0, _get.default)(auth, 'user._id', null);
  var allMembers = members.filter(function(member) {
    return member.embeddedUser._id !== userId;
  });
  var isMember;
  if (auth.user) {
    isMember = userCommunities.find(function(_id) {
      return _id === community._id;
    });
    if (isMember) {
      allMembers.unshift({ _id: userId, embeddedUser: auth.user });
    }
  }
  var memberShip = userMemberships.find(function(m) {
    return m.communityId === community._id;
  });
  var isSuperAdmin =
    (memberShip && memberShip.superAdmin) ||
    (0, _get.default)(auth, 'user.role') === 'admin';
  var limitedMembers = allMembers.slice(0, screenSize ? 14 : 12);
  var sort = (0, _get.default)(view, 'sort') || 'new';
  return _react.default.createElement(
    _uni.View,
    {
      bg: _styles.colors.white,
      mr: '1px',
      __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 5 }
    },
    _react.default.createElement(_uni.View, {
      mt: [_layout.SIDE_NAV_PADDING, 2],
      __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 7 }
    }),
    children,
    _react.default.createElement(
      _uni.View,
      {
        bb: true,
        p: [
          '0 '.concat(_layout.SIDE_NAV_PADDING, ' 4 ').concat(_layout.SIDE_NAV_PADDING),
          '0 2 4 2'
        ],
        __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        {
          m: '0.5 0 0 5.5',
          __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 9 }
        },
        topics.map(function(topic) {
          return _react.default.createElement(
            _ULink.default,
            {
              key: topic,
              color: _styles.colors.grey,
              hc: _styles.colors.black,
              ac: _styles.colors.black,
              navLink: true,
              onPress: function onPress() {
                return dispatch((0, _navigation.goToTopic)(topic));
              },
              to: '/'
                .concat(community.slug, '/')
                .concat(sort, '/')
                .concat(topic),
              __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 13 }
            },
            _react.default.createElement(
              _uni.Box,
              {
                mt: 0.5,
                mb: 0.5,
                __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 15 }
              },
              _react.default.createElement(
                _uni.CommunityLink,
                {
                  key: topic,
                  __source: { fileName: _jsxFileName, lineNumber: 82, columnNumber: 17 }
                },
                '#',
                topic
              )
            )
          );
        })
      ),
      _react.default.createElement(
        _uni.View,
        {
          mt: [_layout.SIDE_NAV_PADDING, 2],
          __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          { __source: { fileName: _jsxFileName, lineNumber: 89, columnNumber: 11 } },
          _react.default.createElement(
            _text.Linkify,
            { __source: { fileName: _jsxFileName, lineNumber: 90, columnNumber: 13 } },
            community.description
          )
        )
      ),
      _react.default.createElement(
        _uni.View,
        {
          mt: _layout.SIDE_NAV_PADDING,
          mb: 2,
          fdirection: 'row',
          justify: 'space-between',
          __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.CommunityLink,
          {
            c: _styles.colors.black,
            __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 11 }
          },
          ''.concat(totalMembers, ' Members')
        ),
        _react.default.createElement(
          _ULink.default,
          {
            inline: 1,
            to: '#',
            onPress: viewCommunityMembers,
            onClick: viewCommunityMembers,
            __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.CommunityLink,
            {
              c: _styles.colors.blue,
              __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 13 }
            },
            'See All'
          )
        )
      ),
      _react.default.createElement(
        _uni.View,
        {
          fdirection: 'row',
          wrap: true,
          __source: { fileName: _jsxFileName, lineNumber: 106, columnNumber: 9 }
        },
        limitedMembers.map(function(member) {
          return _react.default.createElement(_UAvatar.default, {
            key: member._id,
            user: member.embeddedUser,
            m: '0 1 1 0',
            __source: { fileName: _jsxFileName, lineNumber: 108, columnNumber: 13 }
          });
        })
      ),
      isSuperAdmin &&
        _react.default.createElement(
          _uni.SecondaryText,
          {
            mt: 2,
            c: _styles.colors.blue,
            onPress: showSettings,
            key: 'settings_',
            p: '0.5 0',
            __source: { fileName: _jsxFileName, lineNumber: 113, columnNumber: 11 }
          },
          'Settings'
        )
    )
  );
}
//# sourceMappingURL=communityActive.component.js.map
