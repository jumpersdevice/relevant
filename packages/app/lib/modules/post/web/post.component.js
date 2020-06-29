'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _styles = require('../../../styles');
var _singleComment = _interopRequireDefault(
  require('../../comment/web/singleComment.container')
);
var _postbuttons = _interopRequireDefault(
  require('../vote-buttons/postbuttons.container')
);
var _postinfo = _interopRequireDefault(require('../postinfo.component'));
var _uni = require('../../styled/uni');
var _buttonRow = _interopRequireDefault(require('./buttonRow.component'));
var _layout = require('../../../styles/layout');
var _hidden = _interopRequireDefault(require('../hidden'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/web/post.component.js';
Post.propTypes = {
  post: _propTypes.default.object,
  link: _propTypes.default.object,
  noComments: _propTypes.default.bool,
  comment: _propTypes.default.object,
  hideDivider: _propTypes.default.bool,
  hidePostButtons: _propTypes.default.bool,
  hideAvatar: _propTypes.default.bool,
  noLink: _propTypes.default.bool,
  preview: _propTypes.default.bool,
  avatarText: _propTypes.default.func,
  singlePost: _propTypes.default.bool,
  children: _propTypes.default.node
};
var _default = (0, _react.memo)(Post);
exports.default = _default;
function Post(_ref) {
  var _post$data;
  var post = _ref.post,
    noComments = _ref.noComments,
    link = _ref.link,
    hideDivider = _ref.hideDivider,
    hidePostButtons = _ref.hidePostButtons,
    comment = _ref.comment,
    hideAvatar = _ref.hideAvatar,
    noLink = _ref.noLink,
    preview = _ref.preview,
    avatarText = _ref.avatarText,
    singlePost = _ref.singlePost,
    children = _ref.children;
  var screenSize = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.screenSize;
  });
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    showPost = _useState2[0],
    setShowPost = _useState2[1];
  if (!post) return null;
  var isLink = post.type === 'link';
  if (
    (post === null || post === void 0
      ? void 0
      : (_post$data = post.data) === null || _post$data === void 0
      ? void 0
      : _post$data.pagerank) <= -8 &&
    !showPost
  ) {
    return _react.default.createElement(
      _uni.View,
      { __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 7 } },
      _react.default.createElement(
        _uni.View,
        {
          mt: 1,
          mb: 1,
          ml: !screenSize ? _styles.layout.POST_BUTTONS_WIDTH : 0,
          __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 9 }
        },
        _react.default.createElement(_hidden.default, {
          onPress: function onPress() {
            return setShowPost(true);
          },
          __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 11 }
        })
      ),
      hideDivider
        ? null
        : _react.default.createElement(_uni.Divider, {
            m: ['0 4', 0],
            screenSize: screenSize,
            __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 31 }
          })
    );
  }
  if (post === 'notFound') {
    return _react.default.createElement(
      _uni.View,
      { __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 } },
      _react.default.createElement(
        _uni.Text,
        { __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 9 } },
        'Post not found'
      )
    );
  }
  if (!post) return null;
  var parentPost = post.parentPost || post;
  var renderComment = !noComments && comment;
  var postEl = isLink
    ? _react.default.createElement(
        _uni.View,
        {
          fdirection: 'row',
          m: ['4 3 '.concat(renderComment ? 0 : 3, ' 0'), 0],
          __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 5 }
        },
        !hidePostButtons &&
          !screenSize &&
          _react.default.createElement(
            _uni.View,
            {
              w: _styles.layout.POST_BUTTONS_WIDTH,
              __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 9 }
            },
            _react.default.createElement(_postbuttons.default, {
              post: post,
              __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 11 }
            })
          ),
        _react.default.createElement(
          _uni.View,
          {
            flex: 1,
            __source: { fileName: _jsxFileName, lineNumber: 82, columnNumber: 7 }
          },
          _react.default.createElement(_postinfo.default, {
            post: post,
            link: link,
            noLink: noLink,
            singlePost: singlePost,
            __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 9 }
          }),
          screenSize > 0
            ? _react.default.createElement(
                _uni.View,
                {
                  m: 2,
                  __source: { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 }
                },
                _react.default.createElement(_buttonRow.default, {
                  post: post,
                  hidePostButtons: hidePostButtons,
                  parentPost: parentPost,
                  __source: { fileName: _jsxFileName, lineNumber: 86, columnNumber: 13 }
                })
              )
            : null
        )
      )
    : _react.default.createElement(_singleComment.default, {
        hideAvatar: hideAvatar,
        comment: post,
        parentPost: post,
        hidePostButtons: hidePostButtons,
        additionalNesting: 0,
        nestingLevel: 0,
        hideBorder: true,
        noLink: noLink,
        avatarText: avatarText,
        preview: preview,
        inMainFeed: !singlePost,
        __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 5 }
      });
  var additionalNesting =
    hidePostButtons || screenSize ? 0 : _styles.layout.POST_BUTTONS_NESTING_UNITS;
  var commentEl = renderComment
    ? _react.default.createElement(_singleComment.default, {
        comment: comment,
        parentPost: parentPost,
        hidePostButtons: screenSize === 0,
        hideBorder: isLink && !screenSize,
        additionalNesting: additionalNesting,
        nestingLevel: isLink ? 0 : 1,
        preview: preview,
        inMainFeed: true,
        __source: { fileName: _jsxFileName, lineNumber: 115, columnNumber: 5 }
      })
    : null;
  var previewEl =
    preview &&
    link &&
    (link.url || link.image) &&
    _react.default.createElement(
      _uni.View,
      {
        m: ['4 0 0 0'],
        __source: { fileName: _jsxFileName, lineNumber: 128, columnNumber: 5 }
      },
      _react.default.createElement(_postinfo.default, {
        post: post,
        link: link,
        noLink: noLink,
        preview: preview,
        __source: { fileName: _jsxFileName, lineNumber: 129, columnNumber: 7 }
      })
    );
  return _react.default.createElement(
    _uni.View,
    {
      maxWidth: _layout.MAX_POST_WIDTH,
      fdirection: 'column',
      __source: { fileName: _jsxFileName, lineNumber: 134, columnNumber: 5 }
    },
    previewEl,
    isLink && previewEl
      ? _react.default.createElement(_uni.View, {
          mt: 2,
          __source: { fileName: _jsxFileName, lineNumber: 136, columnNumber: 30 }
        })
      : postEl,
    commentEl,
    children,
    hideDivider
      ? null
      : _react.default.createElement(_uni.Divider, {
          m: ['0 4', 0],
          screenSize: screenSize,
          __source: { fileName: _jsxFileName, lineNumber: 139, columnNumber: 29 }
        })
  );
}
//# sourceMappingURL=post.component.js.map
