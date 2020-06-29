'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.CommentEl = CommentEl;
exports.TagEl = TagEl;
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _tag = _interopRequireDefault(require('../tag/tag.component'));
var _get = _interopRequireDefault(require('lodash/get'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _post = require('../../utils/post');
var _navigation = require('../navigation/navigation.actions');
var _history = _interopRequireDefault(require('../navigation/history'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/postTitle.component.js';
PostTitle.propTypes = {
  mobile: _propTypes.default.bool,
  preview: _propTypes.default.bool,
  singlePost: _propTypes.default.bool,
  children: _propTypes.default.node,
  noLink: _propTypes.default.bool,
  link: _propTypes.default.object,
  post: _propTypes.default.object,
  title: _propTypes.default.string
};
var _default = (0, _react.memo)(PostTitle);
exports.default = _default;
function PostTitle(_ref) {
  var children = _ref.children,
    post = _ref.post,
    link = _ref.link,
    title = _ref.title,
    noLink = _ref.noLink,
    mobile = _ref.mobile,
    singlePost = _ref.singlePost,
    preview = _ref.preview;
  var dispatch = (0, _reactRedux.useDispatch)();
  var currentCommunity = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.community;
  });
  var postCommunity = post && post.data && post.data.community;
  var community = postCommunity || currentCommunity;
  var c = mobile ? _styles.colors.white : null;
  if (!post) return null;
  var titleLines = preview && mobile ? 2 : 3;
  var parentPost = post.parentPost || post;
  var postUrl = (0, _post.getPostUrl)(community, parentPost);
  var titleEl = link
    ? _react.default.createElement(
        _ULink.default,
        {
          to: post.url,
          external: true,
          target: '_blank',
          noLink: noLink,
          onClick: function onClick() {
            return _history.default.push(postUrl);
          },
          onPress: function onPress() {
            singlePost
              ? dispatch((0, _navigation.goToUrl)(post.url))
              : dispatch((0, _navigation.goToUrl)(post.url)) &&
                dispatch((0, _navigation.goToPost)(post));
          },
          __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 5 }
        },
        _react.default.createElement(
          _uni.Title,
          {
            inline: 1,
            lh: mobile ? 2.7 : null,
            c: c,
            flex: 1,
            numberOfLines: titleLines,
            __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 7 }
          },
          title
        )
      )
    : _react.default.createElement(
        _uni.Title,
        {
          inline: 1,
          c: c,
          flex: 1,
          numberOfLines: titleLines,
          __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 5 }
        },
        title
      );
  var hasAuthor = link && link.articleAuthor && link.articleAuthor.length;
  var authorEl = hasAuthor
    ? _react.default.createElement(
        _uni.SecondaryText,
        {
          c: c,
          numberOfLines: 1,
          mr: 0.5,
          __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 5 }
        },
        link.articleAuthor.join(', '),
        ' \u2022'
      )
    : null;
  var domainEl =
    (0, _get.default)(link, 'domain') &&
    _react.default.createElement(
      _uni.View,
      {
        fdirection: 'row',
        numberOfLines: 1,
        align: 'flex-end',
        __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 5 }
      },
      authorEl,
      _react.default.createElement(
        _ULink.default,
        {
          type: 'text',
          external: true,
          to: post.url,
          hc: _styles.colors.blue,
          hu: true,
          target: '_blank',
          disabled: !postUrl,
          noLink: noLink,
          onPress: function onPress() {
            return dispatch((0, _navigation.goToUrl)(post.url));
          },
          __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 7 }
        },
        _react.default.createElement(
          _uni.SecondaryText,
          {
            c: c || null,
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 91, columnNumber: 9 }
          },
          link.domain && ''.concat(link.domain, '\xA0\u2197\uFE0E')
        )
      )
    );
  var renderCommentLink = post.commentCount && postUrl;
  var tags = (0, _get.default)(post, 'tags', []);
  return _react.default.createElement(
    _uni.View,
    {
      fdirection: 'column',
      flex: 1,
      justify: mobile ? 'center' : 'flex-start',
      __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.View,
      { __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 7 } },
      titleEl,
      _react.default.createElement(
        _uni.View,
        {
          mt: mobile ? 1 : 0,
          c: c,
          __source: { fileName: _jsxFileName, lineNumber: 105, columnNumber: 9 }
        },
        domainEl
      )
    ),
    renderCommentLink || tags.length
      ? _react.default.createElement(
          _uni.View,
          {
            fdirection: 'row',
            wrap: 'wrap',
            align: 'flex-end',
            h: 2,
            style: { overflow: 'hidden' },
            c: c,
            mt: mobile ? 1 : 0.5,
            numberOfLines: mobile ? 1 : null,
            __source: { fileName: _jsxFileName, lineNumber: 110, columnNumber: 9 }
          },
          _react.default.createElement(CommentEl, {
            post: post,
            c: c,
            postUrl: postUrl,
            noLink: noLink,
            __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 11 }
          }),
          _react.default.createElement(TagEl, {
            post: post,
            c: c,
            noLink: noLink,
            community: community,
            __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 11 }
          })
        )
      : null,
    children
  );
}
CommentEl.propTypes = {
  post: _propTypes.default.object,
  noLink: _propTypes.default.bool,
  c: _propTypes.default.string
};
function CommentEl(_ref2) {
  var post = _ref2.post,
    noLink = _ref2.noLink,
    c = _ref2.c;
  var dispatch = (0, _reactRedux.useDispatch)();
  var parentPost = post.parentPost || post;
  var currentCommunity = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.community;
  });
  var postCommunity = post && post.data && post.data.community;
  var community = postCommunity || currentCommunity;
  var postUrl = (0, _post.getPostUrl)(community, parentPost);
  if (!post.commentCount) return null;
  return _react.default.createElement(
    _ULink.default,
    {
      type: 'text',
      to: postUrl,
      hu: true,
      noLink: noLink,
      onPress: function onPress() {
        return dispatch((0, _navigation.goToPost)(post));
      },
      inline: 1,
      __source: { fileName: _jsxFileName, lineNumber: 146, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.SecondaryText,
      {
        mr: 1,
        c: c || _styles.colors.blue,
        __source: { fileName: _jsxFileName, lineNumber: 154, columnNumber: 7 }
      },
      post.commentCount,
      ' Comment',
      post.commentCount > 1 ? 's' : ''
    )
  );
}
TagEl.propTypes = {
  post: _propTypes.default.object,
  noLink: _propTypes.default.bool,
  c: _propTypes.default.string
};
function TagEl(_ref3) {
  var noLink = _ref3.noLink,
    c = _ref3.c,
    post = _ref3.post;
  var tags = (0, _get.default)(post, 'tags', []);
  var currentCommunity = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.community;
  });
  var postCommunity = post && post.data && post.data.community;
  var community = postCommunity || currentCommunity;
  if (!tags.length) return null;
  return tags.map(function(tag) {
    return _react.default.createElement(_tag.default, {
      name: tag,
      community: community || (post.data && post.data.community),
      key: tag,
      noLink: noLink,
      c: c || _styles.colors.blue,
      __source: { fileName: _jsxFileName, lineNumber: 176, columnNumber: 5 }
    });
  });
}
//# sourceMappingURL=postTitle.component.js.map
