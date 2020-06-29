'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _UAvatar = _interopRequireDefault(require('../../user/UAvatar.component'));
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _styles = require('../../../styles');
var _uni = require('../../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/web/postComment.component.js';
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
var CommentText = _primitives.default.Text.withConfig({
  displayName: 'postCommentcomponent__CommentText',
  componentId: 'u3ctje-0'
})(['', ''], _styles.fonts.commentText);
var Container = _primitives.default.View.withConfig({
  displayName: 'postCommentcomponent__Container',
  componentId: 'u3ctje-1'
})(
  ['padding:0 ', ';flex-shrink:1;max-height:', ';overflow:hidden;'],
  (0, _styles.sizing)(1),
  (0, _styles.sizing)(4.5)
);
var PostComment = (function(_Component) {
  (0, _inherits2.default)(PostComment, _Component);
  var _super = _createSuper(PostComment);
  function PostComment() {
    (0, _classCallCheck2.default)(this, PostComment);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(PostComment, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          comment = _this$props.comment,
          auth = _this$props.auth,
          postUrl = _this$props.postUrl;
        if (!comment || !comment.body) {
          return null;
        }
        return _react.default.createElement(
          _uni.View,
          {
            mt: (0, _styles.sizing)(2),
            fdirection: 'row',
            align: 'center',
            __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 7 }
          },
          _react.default.createElement(_UAvatar.default, {
            user: comment.embeddedUser,
            auth: auth,
            postTime: comment.postDate,
            setSelected: function setSelected() {
              console.warning('TODO:');
            },
            showRelevance: true,
            __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 9 }
          }),
          _react.default.createElement(
            Container,
            { __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 } },
            _react.default.createElement(
              _ULink.default,
              {
                to: postUrl,
                __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 11 }
              },
              _react.default.createElement(
                CommentText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 13 }
                },
                comment.body
              )
            )
          )
        );
      }
    }
  ]);
  return PostComment;
})(_react.Component);
(0, _defineProperty2.default)(PostComment, 'propTypes', {
  auth: _propTypes.default.object,
  comment: _propTypes.default.object,
  postUrl: _propTypes.default.string
});
var _default = PostComment;
exports.default = _default;
//# sourceMappingURL=postComment.component.js.map
