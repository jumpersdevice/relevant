'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _postbuttons = _interopRequireDefault(
  require('../vote-buttons/postbuttons.container')
);
var _buttonRow = _interopRequireDefault(require('./buttonRow'));
var _uni = require('../../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/postButtons.container.js';
ButtonContainer.propTypes = {
  singlePost: _propTypes.default.bool,
  focusInput: _propTypes.default.func,
  link: _propTypes.default.object,
  comment: _propTypes.default.object,
  setupReply: _propTypes.default.func,
  post: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.object
  ]),
  parentPost: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.object
  ]),
  horizontal: _propTypes.default.bool
};
function ButtonContainer(_ref) {
  var post = _ref.post,
    horizontal = _ref.horizontal,
    singlePost = _ref.singlePost,
    focusInput = _ref.focusInput,
    link = _ref.link,
    comment = _ref.comment,
    parentPost = _ref.parentPost,
    setupReply = _ref.setupReply;
  return _react.default.createElement(
    _uni.View,
    {
      fdirection: 'row',
      justify: 'space-between',
      align: 'center',
      __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 5 }
    },
    _react.default.createElement(_postbuttons.default, {
      post: post,
      horizontal: horizontal,
      __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 7 }
    }),
    _react.default.createElement(_buttonRow.default, {
      post: post,
      singlePost: singlePost,
      link: link,
      comment: comment,
      focusInput: focusInput,
      parentPost: parentPost,
      setupReply: setupReply,
      __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 7 }
    })
  );
}
var _default = (0, _react.memo)(ButtonContainer);
exports.default = _default;
//# sourceMappingURL=postButtons.container.js.map
