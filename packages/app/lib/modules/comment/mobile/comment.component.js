'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNativeBottomsheet = _interopRequireDefault(require('react-native-bottomsheet'));
var _textEdit = _interopRequireDefault(require('../../text/mobile/textEdit.component'));
var _utils = require('../../../utils');
var _commentBody = _interopRequireDefault(require('../commentBody'));
var _styles = require('../../../styles');
var _postInfo = _interopRequireDefault(require('../../post/mobile/postInfo.component'));
var _uni = require('../../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/mobile/comment.component.js';
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
var ActionSheet = _reactNativeWeb.ActionSheetIOS;
if (_reactNativeWeb.Platform.OS === 'android') {
  ActionSheet = _reactNativeBottomsheet.default;
  ActionSheet.showActionSheetWithOptions =
    _reactNativeBottomsheet.default.showBottomSheetWithOptions;
}
var Comment = (function(_Component) {
  (0, _inherits2.default)(Comment, _Component);
  var _super = _createSuper(Comment);
  function Comment(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Comment);
    _this = _super.call(this, props, context);
    _this.state = {
      buttons: ['Edit', 'Delete', 'Cancel'],
      destructiveIndex: 1,
      cancelIndex: 2,
      editedText: null,
      editing: false,
      height: 0
    };
    _this.deleteComment = _this.deleteComment.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.showActionSheet = _this.showActionSheet.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.editComment = _this.editComment.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.saveEdit = _this.saveEdit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(Comment, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var body = this.props.comment.body;
        if (body) this.setState({ editedText: body });
      }
    },
    {
      key: 'saveEdit',
      value: function saveEdit(body) {
        var _this2 = this;
        var comment = this.props.comment;
        if (comment.body === body) return this.editComment();
        var words = _utils.text.getWords(body);
        var mentions = _utils.text.getMentions(words);
        var originalText = comment.body;
        comment.body = body;
        comment.mentions = mentions;
        this.setState({ editing: false, editedText: body });
        return this.props.actions.updateComment(comment).then(function(results) {
          if (results) {
            _this2.setState({ editedText: null });
            _reactNativeWeb.Alert.alert('Comment updated');
          } else {
            comment.body = originalText;
            _this2.setState({ editing: true });
          }
        });
      }
    },
    {
      key: 'showActionSheet',
      value: function showActionSheet() {
        var _this3 = this;
        ActionSheet.showActionSheetWithOptions(
          {
            options: this.state.buttons,
            cancelButtonIndex: this.state.cancelIndex,
            destructiveButtonIndex: this.state.destructiveIndex
          },
          function(buttonIndex) {
            switch (buttonIndex) {
              case 0:
                _this3.editComment();
                break;
              case 1:
                _this3.deleteComment();
                break;
              default:
            }
          }
        );
      }
    },
    {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if (nextState.editing !== this.state.editing) {
          this.props.parentEditing(nextState.editing);
        }
      }
    },
    {
      key: 'deleteComment',
      value: function deleteComment() {
        this.props.actions.deleteComment(this.props.comment._id);
      }
    },
    {
      key: 'editComment',
      value: function editComment() {
        if (!this.state.editing) {
          this.props.scrollToComment();
        }
        this.setState({
          editedText: this.props.comment.body,
          editing: !this.state.editing
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this;
        var _this$props = this.props,
          comment = _this$props.comment,
          auth = _this$props.auth,
          nestingLevel = _this$props.nestingLevel,
          renderButtons = _this$props.renderButtons,
          user = _this$props.user,
          actions = _this$props.actions,
          singlePost = _this$props.singlePost,
          preview = _this$props.preview;
        if (!comment) return null;
        var editing = this.state.editing;
        var editingEl =
          editing &&
          _react.default.createElement(_textEdit.default, {
            style: { color: _styles.colors.black, fontSize: 16, lineHeight: 22 },
            text: this.state.editedText || comment.body,
            toggleFunction: this.editComment,
            saveEditFunction: this.saveEdit,
            onChange: function onChange(e) {
              var h = e.nativeEvent.contentSize.height;
              if (h !== _this4.height) {
                _this4.height = h;
              }
            },
            __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 7 }
          });
        var textBody = _react.default.createElement(_commentBody.default, {
          preview: preview,
          comment: comment,
          __source: { fileName: _jsxFileName, lineNumber: 146, columnNumber: 22 }
        });
        return _react.default.createElement(
          _uni.View,
          {
            ref: function ref(c) {
              _this4.singleComment = c;
            },
            onLayout: function onLayout() {
              return null;
            },
            mr: 2,
            mb: 2,
            ml: nestingLevel ? 2 + nestingLevel * 3 - 3 : 2,
            fdirection: 'row',
            __source: { fileName: _jsxFileName, lineNumber: 149, columnNumber: 7 }
          },
          nestingLevel
            ? _react.default.createElement(_uni.Image, {
                h: 2,
                w: 2,
                mt: 5,
                mr: 1,
                resizeMode: 'contain',
                source: require('../../../../public/img/reply.png'),
                __source: { fileName: _jsxFileName, lineNumber: 160, columnNumber: 11 }
              })
            : null,
          _react.default.createElement(
            _uni.View,
            {
              flex: 1,
              __source: { fileName: _jsxFileName, lineNumber: 169, columnNumber: 9 }
            },
            _react.default.createElement(_uni.Box, {
              mt: 2,
              __source: { fileName: _jsxFileName, lineNumber: 170, columnNumber: 11 }
            }),
            _react.default.createElement(_postInfo.default, {
              post: comment,
              actions: actions,
              auth: auth,
              singlePost: singlePost,
              delete: this.deleteComment,
              edit: this.editComment,
              user: user,
              __source: { fileName: _jsxFileName, lineNumber: 171, columnNumber: 11 }
            }),
            _react.default.createElement(
              _uni.Box,
              {
                mt: 2,
                __source: { fileName: _jsxFileName, lineNumber: 181, columnNumber: 11 }
              },
              this.state.editing ? editingEl : textBody
            ),
            renderButtons()
          )
        );
      }
    }
  ]);
  return Comment;
})(_react.Component);
(0, _defineProperty2.default)(Comment, 'propTypes', {
  comment: _propTypes.default.object,
  actions: _propTypes.default.object,
  parentEditing: _propTypes.default.func,
  scrollToComment: _propTypes.default.func,
  auth: _propTypes.default.object,
  singlePost: _propTypes.default.bool,
  user: _propTypes.default.object,
  nestingLevel: _propTypes.default.number,
  renderButtons: _propTypes.default.func,
  preview: _propTypes.default.bool
});
var _default = Comment;
exports.default = _default;
//# sourceMappingURL=comment.component.js.map
