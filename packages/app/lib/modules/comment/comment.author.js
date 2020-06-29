'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _uni = require('../styled/uni');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _avatarbox = _interopRequireDefault(require('../user/avatarbox.component'));
var _comment = _interopRequireDefault(require('./comment.info'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/comment.author.js';
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
CommentAuthor.propTypes = {
  comment: _propTypes.default.object,
  hideAvatar: _propTypes.default.bool,
  avatarText: _propTypes.default.func,
  noLink: _propTypes.default.bool,
  user: _propTypes.default.object,
  popup: _propTypes.default.node,
  preview: _propTypes.default.bool
};
var _default = (0, _react.memo)(CommentAuthor);
exports.default = _default;
function CommentAuthor(_ref) {
  var comment = _ref.comment,
    hideAvatar = _ref.hideAvatar,
    user = _ref.user,
    avatarText = _ref.avatarText,
    noLink = _ref.noLink,
    popup = _ref.popup,
    preview = _ref.preview;
  if (hideAvatar && popup)
    return _react.default.createElement(
      _uni.Box,
      {
        style: { position: 'absolute', right: 0, zIndex: 10 },
        __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 12 }
      },
      popup
    );
  var originalPost = !comment.parentPost;
  var userEl = originalPost
    ? !preview &&
      _react.default.createElement(_comment.default, {
        hidePostButtons: true,
        comment: comment,
        user: user,
        __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 17 }
      })
    : _react.default.createElement(_avatarbox.default, {
        twitter: comment.twitter,
        user: _objectSpread(_objectSpread({}, user), {}, { _id: comment.user }),
        postTime: comment.createdAt,
        showRelevance: true,
        avatarText: avatarText,
        noLink: noLink,
        __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 5 }
      });
  if (!userEl && !popup) return null;
  return _react.default.createElement(
    _uni.View,
    {
      fdirection: 'row',
      justify: 'space-between',
      zIndex: 2,
      __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 5 }
    },
    userEl,
    popup
  );
}
//# sourceMappingURL=comment.author.js.map
