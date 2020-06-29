'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
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
var _utils = require('../../utils');
var _styles = require('../../styles');
var activityHelper = _interopRequireWildcard(require('./activityHelper'));
var _activityText = _interopRequireDefault(require('./activityText.component'));
var _UAvatar = _interopRequireDefault(require('../user/UAvatar.component'));
var _uni = require('../styled/uni');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _layout = require('../../styles/layout');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/activity/activity.component.js';
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
var SingleActivity = (function(_PureComponent) {
  (0, _inherits2.default)(SingleActivity, _PureComponent);
  var _super = _createSuper(SingleActivity);
  function SingleActivity() {
    (0, _classCallCheck2.default)(this, SingleActivity);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(SingleActivity, [
    {
      key: 'renderName',
      value: function renderName(activity, user) {
        var actions = this.props.actions;
        if (!user && activity.totalUsers) {
          var s = '';
          if (activity.totalUsers > 1) s = 's';
          return _react.default.createElement(
            _uni.Box,
            {
              mr: 0.75,
              __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 }
            },
            activity.totalUsers,
            ' user',
            s,
            ' '
          );
        }
        if (!user) return null;
        if (user && user.handle && activity.totalUsers - 1) {
          var _s = '';
          if (activity.totalUsers - 1 > 1) _s = 's';
          return _react.default.createElement(
            _uni.Box,
            {
              mr: 0.75,
              __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }
            },
            _react.default.createElement(
              _ULink.default,
              {
                inline: 1,
                onPress: function onPress() {
                  return actions.goToProfile(user);
                },
                to: '/user/profile/' + user.handle,
                __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.BodyText,
                {
                  c: _styles.colors.blue,
                  inline: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 13 }
                },
                '@',
                user.handle
              )
            ),
            _react.default.createElement(
              _uni.BodyText,
              { __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 11 } },
              activity.totalUsers - 1,
              ' other',
              _s
            )
          );
        }
        if (user.handle) {
          return _react.default.createElement(
            _uni.Box,
            {
              mr: 0.75,
              __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 9 }
            },
            _react.default.createElement(
              _ULink.default,
              {
                inline: 1,
                onPress: function onPress() {
                  return actions.goToProfile(user);
                },
                to: '/user/profile/' + user.handle,
                __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.BodyText,
                {
                  c: _styles.colors.blue,
                  inline: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 13 }
                },
                '@',
                user.handle
              )
            )
          );
        }
        return _react.default.createElement(
          _uni.Box,
          {
            mr: 0.75,
            __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 12 }
          },
          'user.name'
        );
      }
    },
    {
      key: 'renderIcon',
      value: function renderIcon(img) {
        if (!img) {
          return null;
        }
        return _react.default.createElement(_uni.Image, {
          w: 4,
          h: 3.5,
          resizeMode: 'contain',
          source: img,
          __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 12 }
        });
      }
    },
    {
      key: 'renderPostPreview',
      value: function renderPostPreview(activity) {
        var _this$props = this.props,
          PostComponent = _this$props.PostComponent,
          actions = _this$props.actions;
        var post = activity.post;
        var parentId = post.parentPost
          ? post.parentPost._id || post.parentPost
          : post._id;
        var link = post.metaPost || post.parentPost;
        var community = post.community || post.data ? post.data.community : null;
        var linkToPost = '/'.concat(community, '/post/').concat(parentId);
        var onPress = function onPress() {
          return actions.goToPost({ _id: parentId, community: community });
        };
        return _react.default.createElement(
          _ULink.default,
          {
            to: linkToPost,
            onPress: onPress,
            __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              m: ['0 4', '0 2'],
              __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 9 }
            },
            _react.default.createElement(PostComponent, {
              post: post,
              link: link,
              hideDivider: true,
              hidePostButtons: true,
              preview: true,
              noLink: true,
              __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 11 }
            })
          )
        );
      }
    },
    {
      key: 'renderActivity',
      value: function renderActivity(activity) {
        var _this$props2 = this.props,
          screenSize = _this$props2.screenSize,
          actions = _this$props2.actions;
        var _activityHelper$getAc = activityHelper.getActivityParams(activity),
          emoji = _activityHelper$getAc.emoji,
          image = _activityHelper$getAc.image,
          byUser = _activityHelper$getAc.byUser;
        var amount = _utils.numbers.abbreviateNumber(activity.amount);
        return _react.default.createElement(
          _uni.View,
          {
            flex: 1,
            fdirection: 'row',
            align: 'center',
            __source: { fileName: _jsxFileName, lineNumber: 122, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              alignself: 'flex-start',
              mr: 1.5,
              __source: { fileName: _jsxFileName, lineNumber: 123, columnNumber: 9 }
            },
            this.renderIcon(image),
            emoji
              ? _react.default.createElement(
                  _uni.BodyText,
                  {
                    fs: 4,
                    lh: 4.2,
                    pt: 1,
                    align: 'baseline',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 13
                    }
                  },
                  emoji
                )
              : null,
            byUser &&
              _react.default.createElement(_UAvatar.default, {
                goToProfile: actions.goToProfile,
                user: byUser,
                size: 4,
                __source: { fileName: _jsxFileName, lineNumber: 130, columnNumber: 22 }
              })
          ),
          _react.default.createElement(
            _uni.View,
            {
              flex: 1,
              fdirection: 'column',
              align: 'baseline',
              __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.View,
              {
                fdirection: 'row',
                wrap: 'wrap',
                justify: 'flex-start',
                __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 11 }
              },
              this.renderName(activity, byUser),
              _react.default.createElement(_activityText.default, {
                activity: activity,
                amount: amount,
                __source: { fileName: _jsxFileName, lineNumber: 135, columnNumber: 13 }
              })
            ),
            _react.default.createElement(
              _uni.View,
              { __source: { fileName: _jsxFileName, lineNumber: 137, columnNumber: 11 } },
              screenSize ? this.renderDate(activity) : null
            )
          )
        );
      }
    },
    {
      key: 'renderDate',
      value: function renderDate(activity) {
        var fromNow = _utils.numbers.getTimestamp(activity.createdAt);
        return activity.type
          ? _react.default.createElement(
              _uni.SecondaryText,
              {
                lh: 2,
                __source: { fileName: _jsxFileName, lineNumber: 145, columnNumber: 28 }
              },
              fromNow
            )
          : null;
      }
    },
    {
      key: 'renderComment',
      value: function renderComment(activity) {
        var PostComponent = this.props.PostComponent;
        var post = activity.post,
          amount = activity.amount,
          byUser = activity.byUser;
        post.embeddedUser = byUser;
        return _react.default.createElement(
          _uni.View,
          { __source: { fileName: _jsxFileName, lineNumber: 154, columnNumber: 7 } },
          _react.default.createElement(
            _uni.View,
            {
              m: ['0 4', '0 2'],
              __source: { fileName: _jsxFileName, lineNumber: 155, columnNumber: 9 }
            },
            _react.default.createElement(PostComponent, {
              post: post,
              hidePostButtons: true,
              preview: true,
              hideDivider: true,
              avatarText: function avatarText() {
                return _react.default.createElement(_activityText.default, {
                  activity: activity,
                  amount: amount,
                  __source: { fileName: _jsxFileName, lineNumber: 161, columnNumber: 31 }
                });
              },
              __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 11 }
            })
          ),
          _react.default.createElement(_uni.Divider, {
            m: '2 0 0 0',
            __source: { fileName: _jsxFileName, lineNumber: 164, columnNumber: 9 }
          })
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var screenSize = this.props.screenSize;
        var activity = this.props.singleActivity;
        if (!activity) return null;
        if (activity.type === 'comment') return this.renderComment(activity);
        return _react.default.createElement(
          _uni.View,
          {
            maxWidth: _layout.MAX_POST_WIDTH,
            __source: { fileName: _jsxFileName, lineNumber: 177, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              m: ['4 4 0 4', '4 2 0 2'],
              fdirection: 'row',
              justify: 'space-between',
              align: 'center',
              __source: { fileName: _jsxFileName, lineNumber: 178, columnNumber: 9 }
            },
            this.renderActivity(activity),
            screenSize ? null : this.renderDate(activity)
          ),
          activity.post
            ? _react.default.createElement(
                _uni.View,
                {
                  m: 0,
                  ml: [6, 5.5],
                  pr: 0,
                  __source: { fileName: _jsxFileName, lineNumber: 188, columnNumber: 11 }
                },
                this.renderPostPreview(activity)
              )
            : _react.default.createElement(_uni.View, {
                mt: [4, 0],
                __source: { fileName: _jsxFileName, lineNumber: 192, columnNumber: 11 }
              }),
          _react.default.createElement(_uni.Divider, {
            m: '2 0 0 0',
            __source: { fileName: _jsxFileName, lineNumber: 194, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return SingleActivity;
})(_react.PureComponent);
exports.default = SingleActivity;
(0, _defineProperty2.default)(SingleActivity, 'propTypes', {
  actions: _propTypes.default.object,
  singleActivity: _propTypes.default.shape({
    totlaUsers: _propTypes.default.number,
    amount: _propTypes.default.number,
    byUser: _propTypes.default.object,
    post: _propTypes.default.object,
    type: _propTypes.default.string,
    text: _propTypes.default.string,
    createdAt: _propTypes.default.oneOfType([
      _propTypes.default.string,
      _propTypes.default.object
    ])
  }).isRequired,
  screenSize: _propTypes.default.number,
  PostComponent: _propTypes.default.object
});
//# sourceMappingURL=activity.component.js.map
