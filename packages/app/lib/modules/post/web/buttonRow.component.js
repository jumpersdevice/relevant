'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _uni = require('../../styled/uni');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _styles = require('../../../styles');
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _postbuttons = _interopRequireDefault(
  require('../vote-buttons/postbuttons.container')
);
var _text = require('../../../utils/text');
var _post = require('../../../utils/post');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/web/buttonRow.component.js';
PostButtonRow.propTypes = {
  post: _propTypes.default.object,
  hidePostButtons: _propTypes.default.bool,
  setActiveComment: _propTypes.default.func,
  parentPost: _propTypes.default.object
};
var _default = (0, _react.memo)(PostButtonRow);
exports.default = _default;
function PostButtonRow(props) {
  var post = props.post,
    hidePostButtons = props.hidePostButtons,
    setActiveComment = props.setActiveComment,
    parentPost = props.parentPost;
  var screenSize = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.screenSize;
  });
  var community = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.community;
  });
  var url = 'https://relevant.community' + (0, _post.getPostUrl)(community, post);
  return _react.default.createElement(
    _uni.View,
    {
      fdirection: 'row',
      justify: 'space-between',
      align: 'center',
      wrap: 1,
      __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 5 }
    },
    !hidePostButtons && screenSize
      ? _react.default.createElement(
          _uni.View,
          {
            w: 12,
            __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 9 }
          },
          _react.default.createElement(
            _postbuttons.default,
            (0, _extends2.default)({}, props, {
              post: post,
              horizontal: true,
              __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 11 }
            })
          )
        )
      : null,
    _react.default.createElement(
      _uni.View,
      {
        fdirection: 'row',
        __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 7 }
      },
      _react.default.createElement(
        _ULink.default,
        {
          hu: true,
          to: setActiveComment ? '#' : url,
          inline: true,
          authrequired: true,
          onClick: function onClick(e) {
            if (!setActiveComment) return;
            e.preventDefault();
            setActiveComment(post.id);
          },
          onPress: function onPress(e) {
            e.preventDefault();
            setActiveComment(post.id);
          },
          __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.CTALink,
          {
            mr: 3,
            c: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 11 }
          },
          parentPost ? 'Reply' : 'Comment'
        )
      ),
      _react.default.createElement(
        _ULink.default,
        {
          hu: true,
          to: '#',
          authrequired: true,
          inline: true,
          onClick: function onClick(e) {
            e.preventDefault();
            (0, _text.copyToClipBoard)(url);
          },
          onPress: function onPress(e) {
            e.preventDefault();
            (0, _text.copyToClipBoard)(url);
          },
          __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.CTALink,
          {
            c: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 }
          },
          'Share'
        )
      )
    )
  );
}
//# sourceMappingURL=buttonRow.component.js.map
