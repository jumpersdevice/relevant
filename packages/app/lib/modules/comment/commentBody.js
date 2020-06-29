'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = CommentBody;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _reactRedux = require('react-redux');
var _uni = require('../styled/uni');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _text = require('../../utils/text');
var _renderMarkdown = _interopRequireDefault(require('./renderMarkdown'));
var _history = _interopRequireDefault(require('../navigation/history'));
var _navigation = require('../navigation/navigation.actions');
var _post = require('../../utils/post');
var _linkify = _interopRequireDefault(require('./linkify'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/commentBody.js';
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var MAX_LINES = 4;
var LONG_EXCERPT = 240;
var SHORT_EXCERPT = 140;
CommentBody.propTypes = {
  noLink: _propTypes.default.bool,
  avatarText: _propTypes.default.func,
  comment: _propTypes.default.object,
  inMainFeed: _propTypes.default.bool,
  preview: _propTypes.default.bool,
  omitTitle: _propTypes.default.bool,
  noPostLink: _propTypes.default.bool
};
function CommentBody(_ref) {
  var avatarText = _ref.avatarText,
    inMainFeed = _ref.inMainFeed,
    comment = _ref.comment,
    noLink = _ref.noLink,
    preview = _ref.preview,
    omitTitle = _ref.omitTitle,
    noPostLink = _ref.noPostLink;
  var dispatch = (0, _reactRedux.useDispatch)();
  var currentCommunity = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.community;
  });
  var commentCommunity =
    comment && comment.data ? comment.data.community : comment.community;
  var community = commentCommunity || currentCommunity;
  var postUrl = (0, _post.getPostUrl)(community, comment);
  if (!comment || !comment.body) return null;
  var _ref2 = omitTitle ? (0, _text.getTitle)(comment.body) : {},
    isHeading = _ref2.isHeading,
    titleText = _ref2.titleText;
  var isPreview = inMainFeed || preview;
  var fullText = isHeading
    ? comment.body.replace('# '.concat(titleText), '').trim()
    : comment.body.replace(''.concat(titleText), '').trim();
  var textTrim = preview ? SHORT_EXCERPT : LONG_EXCERPT;
  var text = isPreview ? trimText(fullText, textTrim) : fullText;
  var readMore = text.length < fullText.length;
  text += readMore ? ' _...Read More_' : '';
  var inputUrl = comment.inputUrl || comment.url;
  text = (0, _linkify.default)(text, community, inputUrl);
  var body = _react.default.createElement(_renderMarkdown.default, {
    noLink: noLink,
    className: 'markdown-body',
    markdown: text,
    __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 16 }
  });
  var postLink = comment.parentPost || comment;
  var postLinkObj = postLink._id ? postLink : { _id: postLink };
  if (!noPostLink && (isPreview || noLink)) {
    return _react.default.createElement(
      _uni.View,
      {
        shrink: 1,
        pl: avatarText ? 5 : 0,
        __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.Touchable,
        {
          style: { zIndex: 0 },
          to: postUrl,
          onPress: function onPress(e) {
            if (noLink) {
              e.preventDefault();
              e.stopPropagation();
            }
            return dispatch(
              (0, _navigation.goToPost)(
                _objectSpread(
                  _objectSpread({}, postLinkObj),
                  {},
                  { comment: comment, community: community }
                )
              )
            );
          },
          onClick: function onClick(e) {
            if (noLink) {
              e.preventDefault();
              e.stopPropagation();
            }
            return _history.default.push(postUrl);
          },
          __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 9 }
        },
        body
      )
    );
  }
  return _react.default.createElement(
    _uni.View,
    {
      shrink: 1,
      pl: avatarText ? 5 : 0,
      __source: { fileName: _jsxFileName, lineNumber: 92, columnNumber: 5 }
    },
    body
  );
}
function trimText(text, limit) {
  if (!text || !text.length) return text;
  var lines = text.split(/\n/);
  text = lines.slice(0, MAX_LINES).join('\n');
  if (text.length <= limit) return handleCodeblock(text);
  var excerpt = text.substr(0, text.lastIndexOf(' ', limit));
  return handleCodeblock(excerpt);
}
function handleCodeblock(excerpt) {
  var hasCodeblock = excerpt.match(/```/g);
  if (!hasCodeblock || !hasCodeblock.length || hasCodeblock.length % 2 === 0)
    return excerpt;
  var lastIndex = excerpt.substr(excerpt.length - 3, excerpt.length) === '```';
  if (lastIndex) return excerpt.substr(0, excerpt.length - 3);
  return excerpt + '\n```\n';
}
//# sourceMappingURL=commentBody.js.map
