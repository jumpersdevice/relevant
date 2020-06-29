'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _get = _interopRequireDefault(require('lodash/get'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _gradient = _interopRequireDefault(require('./gradient.component'));
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _uni = require('../styled/uni');
var _post = require('../../utils/post');
var _urlPreview = _interopRequireDefault(
  require('../createPost/mobile/urlPreview.component')
);
var _navigation = require('../navigation/navigation.actions');
var _postTitle = _interopRequireDefault(require('./postTitle.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/postinfo.mobile.component.js';
var GradientContainer = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'postinfomobilecomponent__GradientContainer',
  componentId: 'sc-4etqbl-0'
})(['position:absolute;top:0;bottom:0;right:0;left:0;']);
var TitleContainer = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'postinfomobilecomponent__TitleContainer',
  componentId: 'sc-4etqbl-1'
})(['position:absolute;bottom:0;left:0;right:0;']);
var IMAGE_HEIGHT = 30;
var PREVIEW_HEIGHT = 16;
ImagePost.propTypes = {
  noLink: _propTypes.default.bool,
  link: _propTypes.default.object,
  post: _propTypes.default.object,
  singlePost: _propTypes.default.bool,
  preview: _propTypes.default.bool,
  goToPost: _propTypes.default.func
};
var _default = (0, _react.memo)(ImagePost);
exports.default = _default;
function ImagePost(props) {
  var dispatch = (0, _reactRedux.useDispatch)();
  var post = props.post,
    link = props.link,
    goToPost = props.goToPost,
    preview = props.preview,
    noLink = props.noLink;
  if (!post) return null;
  var imageUrl = (0, _get.default)(link, 'image');
  var favIcon =
    (0, _get.default)(link, 'domain', null) && (0, _post.getFavIcon)(link.domain);
  var title = (0, _post.getTitle)({ post: post, link: link });
  var image = imageUrl || favIcon;
  var imgBg =
    image &&
    _react.default.createElement(
      _uni.View,
      { flex: 1, __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 5 } },
      _react.default.createElement(_uni.Image, {
        resizeMode: 'cover',
        flex: 1,
        source: { uri: image },
        __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 }
      }),
      _react.default.createElement(
        GradientContainer,
        { __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 7 } },
        _react.default.createElement(_gradient.default, {
          flex: 1,
          title: title,
          image: true,
          preview: preview,
          __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 9 }
        })
      )
    );
  var imageHeight = preview ? PREVIEW_HEIGHT : IMAGE_HEIGHT;
  var postContent = _react.default.createElement(
    _uni.View,
    {
      fdirection: 'row',
      __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 5 }
    },
    _react.default.createElement(
      _ULink.default,
      {
        onPress:
          goToPost ||
          function() {
            return dispatch((0, _navigation.goToUrl)(post.url));
          },
        external: true,
        to: post.url,
        target: '_blank',
        noLink: noLink,
        style: { flex: 1 },
        __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        {
          h: imageHeight,
          __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 9 }
        },
        imgBg ||
          _react.default.createElement(_gradient.default, {
            flex: 1,
            title: title,
            __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 41 }
          })
      )
    ),
    _react.default.createElement(
      TitleContainer,
      {
        fdirection: 'row',
        p: '0 2 2 2',
        pl: preview ? 2 : 0,
        __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 7 }
      },
      _react.default.createElement(
        _postTitle.default,
        (0, _extends2.default)({ ml: 2 }, props, {
          title: title,
          mobile: true,
          __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 9 }
        })
      )
    )
  );
  if (preview) {
    return _react.default.createElement(_urlPreview.default, {
      size: 'small',
      urlPreview: link || post,
      title: title,
      image: image,
      noLink: noLink,
      __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 7 }
    });
  }
  if (post.url)
    return _react.default.createElement(
      _uni.View,
      { __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 24 } },
      postContent
    );
  return postContent;
}
//# sourceMappingURL=postinfo.mobile.component.js.map
