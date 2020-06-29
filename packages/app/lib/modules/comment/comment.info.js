'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _avatarbox = require('../user/avatarbox.component');
var _UAvatar = _interopRequireDefault(require('../user/UAvatar.component'));
var _uni = require('../styled/uni');
var _numbers = require('../../utils/numbers');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _postTitle = require('../post/postTitle.component');
var _navigation = require('../navigation/navigation.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/comment.info.js';
CommentInfo.propTypes = {
  comment: _propTypes.default.object,
  user: _propTypes.default.object
};
var _default = (0, _react.memo)(CommentInfo);
exports.default = _default;
function CommentInfo(_ref) {
  var comment = _ref.comment,
    user = _ref.user;
  user = user || comment.embeddedUser;
  return _react.default.createElement(
    _uni.View,
    {
      fdirection: 'row',
      align: 'center',
      __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 5 }
    },
    _react.default.createElement(_UAvatar.default, {
      size: 7,
      vertical: true,
      user: user,
      __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 7 }
    }),
    _react.default.createElement(
      _uni.View,
      {
        ml: [2, 2],
        mr: [3, 2],
        __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 7 }
      },
      _react.default.createElement(InfoRow, {
        comment: comment,
        __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 9 }
      }),
      _react.default.createElement(
        _uni.View,
        {
          fdirection: 'row',
          wrap: 'wrap',
          align: 'flex-end',
          h: 2,
          style: { overflow: 'hidden' },
          mt: 0.5,
          numberOfLines: 1,
          __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 9 }
        },
        _react.default.createElement(_postTitle.CommentEl, {
          post: comment,
          postUrl: true,
          __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 11 }
        }),
        _react.default.createElement(_postTitle.TagEl, {
          post: comment,
          __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 11 }
        })
      )
    )
  );
}
InfoRow.propTypes = { comment: _propTypes.default.object };
function InfoRow(_ref2) {
  var comment = _ref2.comment;
  var dispatch = (0, _reactRedux.useDispatch)();
  var postTime = comment.createdAt;
  var timestamp = !!postTime && ' • ' + (0, _numbers.getTimestamp)(postTime);
  var handle = comment.embeddedUser.handle;
  return _react.default.createElement(
    _ULink.default,
    {
      to: '/user/profile/'.concat(handle),
      onPress: function onPress() {
        return dispatch((0, _navigation.goToProfile)(handle));
      },
      __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.InlineText,
      { __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 7 } },
      _react.default.createElement(_avatarbox.UserName, {
        user: comment.embeddedUser,
        showRel: true,
        __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 9 }
      }),
      _react.default.createElement(
        _uni.SecondaryText,
        {
          mt: 0.25,
          __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 9 }
        },
        '\n',
        '@',
        handle,
        ' ',
        timestamp
      )
    )
  );
}
//# sourceMappingURL=comment.info.js.map
