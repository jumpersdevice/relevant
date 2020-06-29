'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = PostTitle;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _tag = _interopRequireDefault(require('../../tag/tag.component'));
var _get = _interopRequireDefault(require('lodash/get'));
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _uni = require('../../styled/uni');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/postTitle.component.js';
var Mobile = _primitives.default.View.withConfig({
  displayName: 'postTitlecomponent__Mobile',
  componentId: 'v21vbn-0'
})(
  ['position:absolute;bottom:0;left:0;right:0;color:white;padding:', ';'],
  (0, _styles.sizing)(2)
);
function PostTitle(props) {
  var children = props.children,
    postUrl = props.postUrl,
    post = props.post,
    link = props.link,
    community = props.community,
    title = props.title,
    mobile = props.mobile;
  var c = mobile ? _styles.colors.white : null;
  var Wrapper = mobile ? Mobile : _uni.View;
  if (!post) return null;
  var tags = post.tags && post.tags.length ? (0, _get.default)(post, 'tags', []) : [];
  var titleEl = postUrl
    ? _react.default.createElement(
        _ULink.default,
        {
          to: postUrl,
          __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 5 }
        },
        _react.default.createElement(
          _uni.Title,
          {
            c: c,
            flex: 1,
            __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 7 }
          },
          title
        )
      )
    : _react.default.createElement(
        _uni.Title,
        {
          c: c,
          flex: 1,
          mb: 4,
          __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 5 }
        },
        title
      );
  var commentEl =
    post.commentCount && postUrl
      ? _react.default.createElement(
          _uni.InlineText,
          { __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 7 } },
          _react.default.createElement(
            _ULink.default,
            {
              to: postUrl,
              __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.InlineText,
              { __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 11 } },
              post.commentCount,
              ' Comment',
              post.commentCount > 1 ? 's' : ''
            )
          ),
          _react.default.createElement(
            _uni.InlineText,
            { __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 9 } },
            ' \u2022 '
          )
        )
      : null;
  var tagEl = tags.length
    ? _react.default.createElement(
        _uni.InlineText,
        { __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 5 } },
        tags.map(function(tag) {
          return _react.default.createElement(_tag.default, {
            name: tag,
            community: community,
            key: tag,
            __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 9 }
          });
        }),
        _react.default.createElement(
          _uni.InlineText,
          { __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 7 } },
          '\u2022 '
        )
      )
    : null;
  var domainEl =
    (0, _get.default)(link, 'domain') &&
    _react.default.createElement(
      _uni.InlineText,
      { __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 5 } },
      _react.default.createElement(
        _ULink.default,
        {
          external: true,
          to: post.url,
          target: '_blank',
          disabled: !postUrl,
          __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 7 }
        },
        _react.default.createElement(
          _uni.InlineText,
          { c: c, __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 9 } },
          link.domain && ''.concat(link.domain, ' \u2197')
        )
      )
    );
  return _react.default.createElement(
    Wrapper,
    {
      flex: 1,
      fdirection: 'column',
      __source: { fileName: _jsxFileName, lineNumber: 90, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.View,
      { __source: { fileName: _jsxFileName, lineNumber: 91, columnNumber: 7 } },
      titleEl,
      _react.default.createElement(
        _uni.SecondaryText,
        { c: c, __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 9 } },
        _react.default.createElement(
          _uni.InlineText,
          { __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 11 } },
          commentEl,
          tagEl,
          domainEl
        )
      ),
      children
    )
  );
}
PostTitle.propTypes = {
  mobile: _propTypes.default.bool,
  children: _propTypes.default.node,
  link: _propTypes.default.object,
  post: _propTypes.default.object,
  community: _propTypes.default.string,
  postUrl: _propTypes.default.string,
  title: _propTypes.default.string
};
//# sourceMappingURL=postTitle.component.js.map
