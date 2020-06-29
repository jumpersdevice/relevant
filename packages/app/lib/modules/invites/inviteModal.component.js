'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _coinStat = _interopRequireDefault(require('../stats/coinStat.component'));
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _common = require('@r3l/common');
var _text = require('../../utils/text');
var _reactNativeWeb = require('react-native-web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/invites/inviteModal.component.js';
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
var ModalDivider = (0, _primitives.default)(_uni.Divider).withConfig({
  displayName: 'inviteModalcomponent__ModalDivider',
  componentId: 'xhvi07-0'
})(['position:relative;margin:0 -', ';'], (0, _styles.sizing)(6));
var InviteModal = (function(_Component) {
  (0, _inherits2.default)(InviteModal, _Component);
  var _super = _createSuper(InviteModal);
  function InviteModal(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, InviteModal);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'animate',
      function() {
        _this.position.setValue(0);
        _this.color = _this.position.interpolate({
          inputRange: [0, 1],
          outputRange: ['#7ED321', '#0000ff']
        });
        _this.animation = _reactNativeWeb.Animated.timing(_this.position, {
          toValue: 1,
          duration: 8000
        }).start();
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'generateInvite',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(type) {
            var invite, postInviteGeneration, newInvite;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    invite = { invitedBy: _this.props.auth.user._id };
                    if (type) {
                      invite.type = type;
                    }
                    postInviteGeneration = _this.props.postInviteGeneration;
                    _context.next = 5;
                    return _this.props.actions.createInvite(invite);
                  case 5:
                    newInvite = _context.sent;
                    if (postInviteGeneration) {
                      postInviteGeneration(newInvite);
                    }
                  case 7:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'generateInviteUrl',
      function(_ref2) {
        var invite = _ref2.invite;
        var origin =
          window && window.location
            ? window.location.origin
            : 'https://relevant.community';
        return ''
          .concat(origin, '/')
          .concat(invite.community, '?invitecode=')
          .concat(invite.code);
      }
    );
    _this.position = new _reactNativeWeb.Animated.Value(0);
    _this.color = _styles.colors.black;
    return _this;
  }
  (0, _createClass2.default)(InviteModal, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this$props = this.props,
          auth = _this$props.auth,
          inviteList = _this$props.inviteList,
          actions = _this$props.actions;
        var communityInvites = inviteList[auth.community] || [];
        if (!inviteList.length) {
          var skip = communityInvites.length;
          actions.getInvites(skip, 100, auth.community);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props2 = this.props,
          auth = _this$props2.auth,
          community = _this$props2.community,
          count = _this$props2.count,
          inviteList = _this$props2.inviteList,
          invites = _this$props2.invites,
          onShare = _this$props2.onShare;
        var user = auth.user;
        var _community$userMember = community.userMemberships,
          userMemberships = _community$userMember === void 0 ? [] : _community$userMember,
          communities = community.communities;
        var currentId = Object.keys(communities).find(function(key) {
          return communities[key].slug === community.active;
        });
        var currentCommunity = communities[currentId] || {};
        var membership = userMemberships.find(function(m) {
          return m.communityId === currentCommunity._id;
        });
        var showAdminInvite =
          user.role === 'admin' || (membership && membership.superAdmin);
        var publicInviteUrl = '/'
          .concat(auth.community, '?invitecode=')
          .concat(auth.user.handle);
        var origin =
          window && window.location
            ? window.location.origin
            : 'https://relevant.community';
        var publicLink = ''.concat(origin).concat(publicInviteUrl);
        var communityInvites = inviteList[auth.community] || [];
        var invitesEl = communityInvites.map(function(_id) {
          var invite = invites[_id];
          var url = _this2.generateInviteUrl({ invite: invite });
          var now = new Date().getTime();
          var createdAt = Date.parse(invite.createdAt);
          var isNew = now - createdAt < 5000;
          var color = invite.redeemed ? _styles.colors.grey : _styles.colors.blue;
          if (isNew) {
            _this2.animate();
            color = _this2.color || _styles.colors.black;
          }
          return _react.default.createElement(
            _uni.View,
            {
              mt: 2,
              fdirection: 'column',
              key: _id,
              __source: { fileName: _jsxFileName, lineNumber: 110, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.View,
              {
                fdirection: 'row',
                justify: 'space-between',
                __source: { fileName: _jsxFileName, lineNumber: 111, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.View,
                {
                  fdirection: 'row',
                  flex: 1,
                  mr: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 112, columnNumber: 13 }
                },
                _react.default.createElement(
                  _uni.View,
                  {
                    flex: 1,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 15
                    }
                  },
                  _react.default.createElement(
                    _uni.CTALink,
                    {
                      numberOfLines: 1,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 17
                      }
                    },
                    _react.default.createElement(
                      _reactNativeWeb.Animated.Text,
                      {
                        onClick: function onClick() {
                          return (0, _text.copyToClipBoard)(url);
                        },
                        onPress: function onPress() {
                          return onShare({
                            title: 'Join Relevant',
                            message: 'Join Relevant',
                            url: url,
                            subject: 'Join Relevant'
                          });
                        },
                        style: { color: color, cursor: 'pointer' },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                          columnNumber: 19
                        }
                      },
                      url
                    )
                  )
                ),
                _react.default.createElement(
                  _uni.View,
                  {
                    ml: 0.5,
                    alignSelf: 'flex-end',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 15
                    }
                  },
                  _react.default.createElement(
                    _uni.CTALink,
                    {
                      c: _styles.colors.grey,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 17
                      }
                    },
                    invite.type === 'admin' ? 'mod' : null
                  )
                )
              ),
              _react.default.createElement(
                _uni.CTALink,
                {
                  c: invite.redeemed ? _styles.colors.grey : _styles.colors.green,
                  __source: { fileName: _jsxFileName, lineNumber: 140, columnNumber: 13 }
                },
                invite.redeemed ? 'redeemed' : 'available'
              )
            ),
            _react.default.createElement(_uni.Divider, {
              pt: 2,
              __source: { fileName: _jsxFileName, lineNumber: 144, columnNumber: 11 }
            })
          );
        });
        var url = publicLink;
        return _react.default.createElement(
          _uni.View,
          {
            display: 'flex',
            fdirection: 'column',
            __source: { fileName: _jsxFileName, lineNumber: 152, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              mt: 6,
              display: 'flex',
              fdirection: 'column',
              __source: { fileName: _jsxFileName, lineNumber: 153, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.SecondaryText,
              { __source: { fileName: _jsxFileName, lineNumber: 154, columnNumber: 11 } },
              'Public Invite Link'
            ),
            _react.default.createElement(
              _uni.BodyText,
              {
                inline: 1,
                mt: 1,
                __source: { fileName: _jsxFileName, lineNumber: 155, columnNumber: 11 }
              },
              'You and each new users get',
              ' ',
              _react.default.createElement(_coinStat.default, {
                size: 2,
                amount: _common.PUBLIC_LINK_REWARD,
                inline: 1,
                __source: { fileName: _jsxFileName, lineNumber: 157, columnNumber: 13 }
              }),
              ' coin',
              _common.PUBLIC_LINK_REWARD === 1 ? '' : 's',
              ' per signup via your public invite code.'
            ),
            _react.default.createElement(
              _uni.LinkFont,
              {
                mt: 1,
                onClick: function onClick() {
                  return (0, _text.copyToClipBoard)(url);
                },
                c: _styles.colors.blue,
                onPress: function onPress() {
                  return onShare({
                    title: 'Join Relevant',
                    message: 'Join Relevant',
                    url: publicLink,
                    subject: 'Join Relevant'
                  });
                },
                __source: { fileName: _jsxFileName, lineNumber: 160, columnNumber: 11 }
              },
              publicLink
            )
          ),
          _react.default.createElement(_uni.Divider, {
            pt: 6,
            __source: { fileName: _jsxFileName, lineNumber: 176, columnNumber: 9 }
          }),
          _react.default.createElement(
            _uni.View,
            {
              display: 'flex',
              fdirection: 'column',
              mt: 6,
              __source: { fileName: _jsxFileName, lineNumber: 177, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.SecondaryText,
              { __source: { fileName: _jsxFileName, lineNumber: 178, columnNumber: 11 } },
              'Private Invite: Your have ',
              count[community.active],
              ' referral invite',
              count[community.active] > 1 ? 's' : '',
              ' left.'
            ),
            _react.default.createElement(_uni.Box, {
              mt: 1,
              __source: { fileName: _jsxFileName, lineNumber: 182, columnNumber: 11 }
            }),
            _react.default.createElement(
              _uni.BodyText,
              {
                inline: 1,
                __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 11 }
              },
              'Share your Reputation with trustworthy friends with your private invite codes. Earn ',
              _react.default.createElement(_coinStat.default, {
                size: 2,
                amount: _common.REFERRAL_REWARD,
                inline: 1,
                __source: { fileName: _jsxFileName, lineNumber: 185, columnNumber: 18 }
              }),
              ' coin',
              _common.REFERRAL_REWARD === 1 ? '' : 's',
              ' per signup.'
            )
          ),
          _react.default.createElement(
            _ULink.default,
            {
              to: '#',
              onPress: function onPress() {
                return _this2.generateInvite();
              },
              onClick: function onClick() {
                return _this2.generateInvite();
              },
              c: _styles.colors.blue,
              __source: { fileName: _jsxFileName, lineNumber: 189, columnNumber: 9 }
            },
            _react.default.createElement(_uni.Box, {
              mt: 1,
              __source: { fileName: _jsxFileName, lineNumber: 195, columnNumber: 11 }
            }),
            _react.default.createElement(
              _uni.LinkFont,
              {
                c: _styles.colors.blue,
                __source: { fileName: _jsxFileName, lineNumber: 196, columnNumber: 11 }
              },
              'Click here to generate a new private link'
            )
          ),
          showAdminInvite
            ? _react.default.createElement(
                _ULink.default,
                {
                  to: '#',
                  onPress: function onPress() {
                    return _this2.generateInvite('admin');
                  },
                  onClick: function onClick() {
                    return _this2.generateInvite('admin');
                  },
                  c: _styles.colors.blue,
                  __source: { fileName: _jsxFileName, lineNumber: 199, columnNumber: 11 }
                },
                _react.default.createElement(_uni.Box, {
                  mt: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 205, columnNumber: 13 }
                }),
                _react.default.createElement(
                  _uni.LinkFont,
                  {
                    mt: 1,
                    c: _styles.colors.blue,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 13
                    }
                  },
                  'Click here to generate moderator invite link'
                )
              )
            : null,
          _react.default.createElement(ModalDivider, {
            pt: 6,
            __source: { fileName: _jsxFileName, lineNumber: 211, columnNumber: 9 }
          }),
          _react.default.createElement(
            _uni.View,
            {
              mt: 6,
              fdirection: 'column',
              __source: { fileName: _jsxFileName, lineNumber: 212, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.Header,
              { __source: { fileName: _jsxFileName, lineNumber: 213, columnNumber: 11 } },
              'Private Invites'
            ),
            _react.default.createElement(
              _uni.BodyText,
              {
                inline: 1,
                fdirection: 'row',
                __source: { fileName: _jsxFileName, lineNumber: 214, columnNumber: 11 }
              },
              'Here\u2019s how many coins you\u2019ve made from invites so far:',
              ' ',
              _react.default.createElement(_coinStat.default, {
                size: 2,
                amount: user.referralTokens,
                inline: 1,
                __source: { fileName: _jsxFileName, lineNumber: 216, columnNumber: 13 }
              }),
              ' coin',
              user.referralTokens === 1 ? '' : 's',
              ' (max amount is ',
              _common.MAX_AIRDROP,
              ')'
            ),
            _react.default.createElement(
              _uni.View,
              {
                mt: 4,
                fdirection: 'column',
                __source: { fileName: _jsxFileName, lineNumber: 219, columnNumber: 11 }
              },
              invitesEl
            )
          )
        );
      }
    }
  ]);
  return InviteModal;
})(_react.Component);
InviteModal.propTypes = {
  inviteList: _propTypes.default.object,
  invites: _propTypes.default.object,
  auth: _propTypes.default.object,
  community: _propTypes.default.object,
  actions: _propTypes.default.object,
  count: _propTypes.default.object,
  onShare: _propTypes.default.func,
  postInviteGeneration: _propTypes.default.func
};
var _default = InviteModal;
exports.default = _default;
//# sourceMappingURL=inviteModal.component.js.map
