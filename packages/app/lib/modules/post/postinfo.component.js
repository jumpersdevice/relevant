'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _get = _interopRequireDefault(require('lodash/get'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _gradient = _interopRequireDefault(require('./gradient.component'));
var _reactNativeWeb = require('react-native-web');
var _uni = require('../styled/uni');
var _post = require('../../utils/post');
var _postinfoMobile = _interopRequireDefault(require('./postinfo.mobile.component'));
var _layout = require('../../styles/layout');
var _postTitle = _interopRequireDefault(require('./postTitle.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/postinfo.component.js';
PostInfo.propTypes = {
  noLink: _propTypes.default.bool,
  link: _propTypes.default.object,
  post: _propTypes.default.object,
  singlePost: _propTypes.default.bool,
  preview: _propTypes.default.bool
};
var _default = (0, _react.memo)(PostInfo);
exports.default = _default;
function PostInfo(_ref) {
  var post = _ref.post,
    link = _ref.link,
    noLink = _ref.noLink,
    singlePost = _ref.singlePost,
    preview = _ref.preview;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    showImage = _useState2[0],
    setShowImage = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    showFavIcon = _useState4[0],
    setShowFavIcon = _useState4[1];
  var screenSize = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.screenSize;
  });
  if (screenSize)
    return _react.default.createElement(_postinfoMobile.default, {
      preview: preview,
      post: post,
      singlePost: singlePost,
      noLink: noLink,
      link: link,
      __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 7 }
    });
  if (post.loading) {
    return _react.default.createElement(
      _uni.View,
      { __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 7 } },
      _react.default.createElement(_reactNativeWeb.ActivityIndicator, {
        __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 9 }
      })
    );
  }
  if (!post) return null;
  var imageUrl = (0, _get.default)(link, 'image') || null;
  var favIcon = (0, _get.default)(link, 'domain') && (0, _post.getFavIcon)(link.domain);
  var title = (0, _post.getTitle)({ post: post, link: link });
  var postImage = _react.default.createElement(
    _ULink.default,
    {
      external: true,
      to: post.url,
      target: '_blank',
      noLink: noLink,
      __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.View,
      {
        flex: 1,
        w: _layout.POST_IMAGE_W,
        h: _layout.POST_IMAGE_H,
        mr: 2,
        __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 }
      },
      showImage && imageUrl
        ? _react.default.createElement(_uni.Image, {
            flex: 1,
            source: { uri: imageUrl },
            onError: function onError() {
              return setShowImage(false);
            },
            __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 11 }
          })
        : showFavIcon && favIcon
        ? _react.default.createElement(_uni.Image, {
            resizeMode: 'cover',
            flex: 1,
            source: { uri: favIcon },
            onError: function onError() {
              return setShowFavIcon(false);
            },
            __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 11 }
          })
        : _react.default.createElement(_gradient.default, {
            flex: 1,
            title: title,
            __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }
          })
    )
  );
  var postContent = _react.default.createElement(
    _uni.View,
    {
      fdirection: ['row', 'column'],
      __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 5 }
    },
    postImage,
    _react.default.createElement(_postTitle.default, {
      post: post,
      link: link,
      noLink: noLink,
      title: title,
      singlePost: singlePost,
      preview: preview,
      __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 7 }
    })
  );
  if (post.url)
    return _react.default.createElement(
      _uni.View,
      { __source: { fileName: _jsxFileName, lineNumber: 90, columnNumber: 24 } },
      postContent
    );
  return postContent;
}
//# sourceMappingURL=postinfo.component.js.map
