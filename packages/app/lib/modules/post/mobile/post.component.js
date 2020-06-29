'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _postinfoMobile = _interopRequireDefault(require('../postinfo.mobile.component'));
var _postButtons = _interopRequireDefault(require('./postButtons.container'));
var _uni = require('../../styled/uni');
var _hidden = _interopRequireDefault(require('../hidden'));
var _commentary = _interopRequireDefault(require('./commentary.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/post.component.js';
Post.propTypes = {
  link: _propTypes.default.object,
  post: _propTypes.default.object,
  commentary: _propTypes.default.array,
  singlePost: _propTypes.default.bool,
  hideDivider: _propTypes.default.bool,
  preview: _propTypes.default.bool,
  noLink: _propTypes.default.bool
};
function Post(props) {
  var _post$data;
  var link = props.link,
    commentary = props.commentary,
    singlePost = props.singlePost,
    hideDivider = props.hideDivider,
    preview = props.preview,
    noLink = props.noLink,
    post = props.post;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    showPost = _useState2[0],
    setShowPost = _useState2[1];
  var separator = _react.default.createElement(_uni.Box, {
    style: [{ height: 30, backgroundColor: 'rgba(0,0,0,.03)' }],
    __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 21 }
  });
  if (
    (post === null || post === void 0
      ? void 0
      : (_post$data = post.data) === null || _post$data === void 0
      ? void 0
      : _post$data.pagerank) <= -8 &&
    !showPost
  ) {
    return _react.default.createElement(
      _uni.Box,
      { __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 } },
      _react.default.createElement(
        _uni.Box,
        {
          mt: 1,
          mb: 1,
          ml: [0, 2],
          __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 9 }
        },
        _react.default.createElement(_hidden.default, {
          onPress: function onPress() {
            return setShowPost(true);
          },
          __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 11 }
        })
      ),
      !hideDivider ? separator : null
    );
  }
  var blocked = _react.default.createElement(_uni.Box, {
    style: { height: _reactNativeWeb.StyleSheet.hairlineWidth },
    __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 19 }
  });
  if (!post || !post._id) return blocked;
  var isLinkPost = link && (link.url || link.image);
  var renderComment = (commentary && commentary.length) || (isLinkPost && post.body);
  var commentaryEl = renderComment
    ? _react.default.createElement(_commentary.default, {
        isReply: true,
        isLinkPost: isLinkPost,
        preview: preview,
        post: post,
        link: link,
        singlePost: singlePost,
        commentary: commentary || [post],
        __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 5 }
      })
    : null;
  var postEl = isLinkPost
    ? _react.default.createElement(
        _uni.Box,
        {
          m: preview ? '4 0 0 0' : 0,
          __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 5 }
        },
        _react.default.createElement(_postinfoMobile.default, {
          key: link._id,
          post: post,
          link: link,
          singlePost: singlePost,
          preview: preview,
          noLink: noLink,
          __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 7 }
        }),
        !preview &&
          _react.default.createElement(
            _uni.Box,
            {
              m: 2,
              __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 9 }
            },
            _react.default.createElement(_postButtons.default, {
              horizontal: true,
              post: post,
              singlePost: singlePost,
              link: link,
              __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 11 }
            })
          )
      )
    : _react.default.createElement(_commentary.default, {
        preview: preview,
        post: post,
        link: link,
        singlePost: singlePost,
        commentary: [post],
        __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 5 }
      });
  return _react.default.createElement(
    _uni.Box,
    {
      style: { overflow: 'hidden' },
      __source: { fileName: _jsxFileName, lineNumber: 84, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.Box,
      { __source: { fileName: _jsxFileName, lineNumber: 85, columnNumber: 7 } },
      postEl,
      commentaryEl ||
        (preview && isLinkPost
          ? _react.default.createElement(_uni.Box, {
              mt: 2,
              __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 51 }
            })
          : null)
    ),
    !singlePost && !hideDivider ? separator : null
  );
}
var _default = (0, _react.memo)(Post);
exports.default = _default;
//# sourceMappingURL=post.component.js.map
