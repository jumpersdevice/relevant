'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _uni = require('../../styled/uni');
var _get = _interopRequireDefault(require('lodash/get'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _popup = _interopRequireDefault(require('../../ui/web/popup'));
var _postbuttons = _interopRequireDefault(
  require('../../post/vote-buttons/postbuttons.container')
);
var _commentForm = _interopRequireDefault(require('./commentForm.component'));
var _commentBody = _interopRequireDefault(require('../commentBody'));
var _styles = require('../../../styles');
var _buttonRow = _interopRequireDefault(require('../../post/web/buttonRow.component'));
var _comment = require('../comment.actions');
var _comment2 = _interopRequireDefault(require('../comment.author'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/web/comment.component.js';
Comment.propTypes = {
  comment: _propTypes.default.object,
  user: _propTypes.default.object,
  activeComment: _propTypes.default.string,
  setActiveComment: _propTypes.default.func,
  parentPost: _propTypes.default.object,
  childComments: _propTypes.default.object,
  posts: _propTypes.default.object,
  nestingLevel: _propTypes.default.number,
  hidePostButtons: _propTypes.default.bool,
  hideReplyButtons: _propTypes.default.bool,
  condensedView: _propTypes.default.bool,
  hideBorder: _propTypes.default.bool,
  post: _propTypes.default.object,
  hideAvatar: _propTypes.default.bool,
  noLink: _propTypes.default.bool,
  avatarText: _propTypes.default.func,
  focusedComment: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.number
  ]),
  scrollTo: _propTypes.default.func,
  preview: _propTypes.default.bool,
  inMainFeed: _propTypes.default.bool,
  additionalNesting: _propTypes.default.number
};
Comment.defaultProps = { additionalNesting: 0 };
function Comment(props) {
  var comment = props.comment,
    activeComment = props.activeComment,
    childComments = props.childComments,
    posts = props.posts,
    nestingLevel = props.nestingLevel,
    hidePostButtons = props.hidePostButtons,
    hideReplyButtons = props.hideReplyButtons,
    hideBorder = props.hideBorder,
    hideAvatar = props.hideAvatar,
    noLink = props.noLink,
    avatarText = props.avatarText,
    preview = props.preview,
    inMainFeed = props.inMainFeed,
    additionalNesting = props.additionalNesting,
    parentPost = props.parentPost,
    scrollTo = props.scrollTo,
    focusedComment = props.focusedComment,
    setActiveComment = props.setActiveComment;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    editing = _useState2[0],
    setEditing = _useState2[1];
  var users = (0, _reactRedux.useSelector)(function(state) {
    return state.user;
  });
  var screenSize = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.screenSize;
  });
  var auth = (0, _reactRedux.useSelector)(function(state) {
    return state.auth;
  });
  var embeddedUser = (0, _get.default)(comment, 'embeddedUser', {});
  var userId = users.handleToId[embeddedUser.handle];
  var user = users.users[userId] || embeddedUser;
  var el = (0, _react.createRef)();
  (0, _react.useEffect)(
    function() {
      var scrollIfFocused = function scrollIfFocused() {
        if (comment && focusedComment === comment._id) {
          el.current.measureInWindow(function(x, y) {
            scrollTo && scrollTo(0, y);
          });
        }
      };
      scrollIfFocused();
    },
    [focusedComment]
  );
  var deletePost = function deletePost() {
    var okToDelete = confirm('Are you sure you want to delete this post?');
    if (!okToDelete) return;
    dispatch((0, _comment.deleteComment)(comment._id));
  };
  var cancel = function cancel() {
    setActiveComment(null);
    setEditing(false);
  };
  if (!comment) return null;
  var isActive = activeComment === comment.id;
  var body = _react.default.createElement(_commentBody.default, {
    comment: comment,
    inMainFeed: inMainFeed,
    preview: preview,
    avatarText: avatarText,
    noLink: noLink,
    __source: { fileName: _jsxFileName, lineNumber: 105, columnNumber: 5 }
  });
  var commentChildren = (0, _get.default)(childComments, comment.id) || [];
  var borderMargin =
    hidePostButtons || screenSize
      ? (nestingLevel && -3) || 0
      : _styles.layout.POST_BUTTONS_WIDTH / 3;
  var popup =
    auth.user &&
    auth.user._id === comment.user &&
    _react.default.createElement(
      _popup.default,
      {
        options: [
          {
            text: 'Edit Post',
            action: function action() {
              return setEditing(true);
            }
          },
          {
            text: 'Delete Post',
            action: function action() {
              return deletePost();
            }
          }
        ],
        __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 5 }
      },
      _react.default.createElement(
        'span',
        {
          className: 'optionDots',
          __source: { fileName: _jsxFileName, lineNumber: 127, columnNumber: 7 }
        },
        '...'
      )
    );
  return _react.default.createElement(
    _uni.Box,
    { ref: el, __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 5 } },
    _react.default.createElement(
      _uni.Spacer,
      {
        nestingLevel: nestingLevel,
        additionalNesting: additionalNesting,
        screenSize: screenSize,
        fdirection: 'column',
        __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.Box,
        {
          m: ['0 3 0 0', ''.concat(preview ? '0 2 0 0' : '0 2 2 2')],
          __source: { fileName: _jsxFileName, lineNumber: 139, columnNumber: 9 }
        },
        !hideBorder &&
          (nestingLevel > 0 || inMainFeed) &&
          _react.default.createElement(_uni.Divider, {
            ml: borderMargin,
            __source: { fileName: _jsxFileName, lineNumber: 141, columnNumber: 13 }
          }),
        _react.default.createElement(
          _uni.View,
          {
            fdirection: 'row',
            mt: 4,
            __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 11 }
          },
          !hidePostButtons && !screenSize
            ? _react.default.createElement(
                _uni.View,
                {
                  w: _styles.layout.POST_BUTTONS_WIDTH,
                  __source: { fileName: _jsxFileName, lineNumber: 145, columnNumber: 15 }
                },
                _react.default.createElement(_postbuttons.default, {
                  post: comment,
                  __source: { fileName: _jsxFileName, lineNumber: 146, columnNumber: 17 }
                })
              )
            : null,
          nestingLevel > 0
            ? _react.default.createElement(_uni.Image, {
                h: 3,
                w: 2,
                ml: [-3, 0],
                mr: 1,
                resizeMode: 'contain',
                source: require('../../../../public/img/reply.png'),
                __source: { fileName: _jsxFileName, lineNumber: 150, columnNumber: 15 }
              })
            : null,
          _react.default.createElement(
            _uni.View,
            {
              fdirection: 'column',
              grow: 1,
              shrink: 1,
              __source: { fileName: _jsxFileName, lineNumber: 160, columnNumber: 13 }
            },
            _react.default.createElement(_comment2.default, {
              user: user,
              comment: comment,
              hideAvatar: hideAvatar,
              avatarText: avatarText,
              noLink: noLink,
              popup: !preview && popup,
              preview: preview,
              __source: { fileName: _jsxFileName, lineNumber: 161, columnNumber: 15 }
            }),
            _react.default.createElement(_uni.Box, {
              mt: 1,
              __source: { fileName: _jsxFileName, lineNumber: 170, columnNumber: 15 }
            }),
            editing
              ? _react.default.createElement(
                  _uni.Box,
                  {
                    mt: 2,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 17
                    }
                  },
                  _react.default.createElement(_commentForm.default, {
                    edit: true,
                    p: ['0 0 4 0', 2],
                    parentPost: parentPost,
                    comment: comment,
                    buttonText: 'Update',
                    cancel: cancel,
                    nestingLevel: nestingLevel,
                    autoFocus: true,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 19
                    }
                  })
                )
              : body,
            editing || hideReplyButtons || (hidePostButtons && preview)
              ? null
              : _react.default.createElement(
                  _uni.Box,
                  {
                    mt: 1,
                    mb: [4, 2],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 17
                    }
                  },
                  _react.default.createElement(
                    _buttonRow.default,
                    (0, _extends2.default)({}, props, {
                      post: comment,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 19
                      }
                    })
                  )
                )
          )
        )
      )
    ),
    isActive &&
      !editing &&
      _react.default.createElement(_commentForm.default, {
        parentPost: parentPost,
        nestingLevel: nestingLevel,
        p: [4, 2],
        buttonText: 'Comment',
        additionalNesting:
          additionalNesting +
          (hidePostButtons ? 0 : _styles.layout.POST_BUTTONS_NESTING_UNITS),
        parentComment: comment,
        cancel: cancel,
        autoFocus: true,
        __source: { fileName: _jsxFileName, lineNumber: 198, columnNumber: 9 }
      }),
    commentChildren.map(function(childId) {
      return _react.default.createElement(
        Comment,
        (0, _extends2.default)({}, props, {
          comment: posts.posts[childId],
          key: childId,
          nestingLevel: nestingLevel + 1,
          __source: { fileName: _jsxFileName, lineNumber: 212, columnNumber: 9 }
        })
      );
    })
  );
}
var _default = Comment;
exports.default = _default;
//# sourceMappingURL=comment.component.js.map
