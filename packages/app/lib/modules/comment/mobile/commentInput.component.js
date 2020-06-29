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
var _global = require('../../../styles/global');
var utils = _interopRequireWildcard(require('../../../utils'));
var _textBody = _interopRequireDefault(require('../../text/mobile/textBody.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/mobile/commentInput.component.js';
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
var styles;
var DEFAULT_INPUT_HEIGHT = 25;
var CommentInput = (function(_Component) {
  (0, _inherits2.default)(CommentInput, _Component);
  var _super = _createSuper(CommentInput);
  function CommentInput(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, CommentInput);
    _this = _super.call(this, props, context);
    _this.setMention = _this.setMention.bind((0, _assertThisInitialized2.default)(_this));
    _this.createComment = _this.createComment.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.processInput = _this.processInput.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.state = { inputHeight: DEFAULT_INPUT_HEIGHT };
    return _this;
  }
  (0, _createClass2.default)(CommentInput, [
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.props.actions.setUserSearch([]);
      }
    },
    {
      key: 'setMention',
      value: function setMention(user) {
        var comment = this.state.comment.replace(this.mention, '@' + user.handle);
        this.setState({ comment: comment });
        this.props.actions.setUserSearch([]);
      }
    },
    {
      key: 'createComment',
      value: function createComment() {
        var _this2 = this;
        var _this$props = this.props,
          parentPost = _this$props.parentPost,
          parentComment = _this$props.parentComment,
          auth = _this$props.auth,
          actions = _this$props.actions,
          onFocus = _this$props.onFocus,
          scrollToBottom = _this$props.scrollToBottom;
        if (!this.state.comment || !this.state.comment.length) {
          return _reactNativeWeb.Alert.alert('no comment');
        }
        var comment = this.state.comment.trim();
        var commentObj = {
          parentPost: parentPost._id,
          parentComment: parentComment ? parentComment._id : null,
          linkParent: parentPost.type === 'link' ? parentPost._id : null,
          text: comment,
          tags: this.commentTags,
          mentions: this.commentMentions,
          user: auth.user._id
        };
        this.setState({ comment: '', inputHeight: DEFAULT_INPUT_HEIGHT });
        this.textInput.blur();
        onFocus('new');
        actions.setUserSearch([]);
        return this.props.actions.createComment(commentObj).then(function(success) {
          if (!success) {
            _this2.setState({ comment: comment, inputHeight: DEFAULT_INPUT_HEIGHT });
            _this2.textInput.focus();
            return;
          }
          scrollToBottom();
        });
      }
    },
    {
      key: 'processInput',
      value: function processInput(comment) {
        var words = utils.text.getWords(comment);
        var lastWord = words[words.length - 1];
        if (lastWord.match(/@\S+/g) && lastWord.length > 1) {
          this.mention = lastWord;
          this.props.actions.searchUser(lastWord.replace('@', ''));
        } else this.props.actions.setUserSearch([]);
        this.commentTags = utils.text.getTags(words);
        this.commentMentions = utils.text.getMentions(words);
        this.props.updatePosition({ inputHeight: this.state.inputHeight, top: this.top });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var _this$props2 = this.props,
          auth = _this$props2.auth,
          editing = _this$props2.editing,
          placeholder = _this$props2.placeholder;
        var user = auth.user;
        var inputHeight = this.state.inputHeight;
        if (editing) return null;
        var inputImage =
          user &&
          user.image &&
          _react.default.createElement(_reactNativeWeb.Image, {
            style: styles.inputImage,
            source: { uri: user.image },
            __source: { fileName: _jsxFileName, lineNumber: 116, columnNumber: 7 }
          });
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            onLayout: function onLayout(e) {
              _this3.top = e.nativeEvent.layout.y;
              _this3.props.updatePosition({ inputHeight: inputHeight, top: _this3.top });
            },
            style: styles.commentInputParent,
            __source: { fileName: _jsxFileName, lineNumber: 125, columnNumber: 7 }
          },
          inputImage,
          _react.default.createElement(
            _reactNativeWeb.TextInput,
            {
              ref: function ref(c) {
                _this3.textInput = c;
              },
              underlineColorAndroid: 'transparent',
              textAlignVertical: 'top',
              style: [styles.commentInput],
              placeholder: placeholder || 'Enter reply...',
              placeholderTextColor: _global.greyText,
              multiline: true,
              onChangeText: function onChangeText(comment) {
                _this3.processInput(comment, false);
                _this3.setState({ comment: comment });
              },
              onContentSizeChange: function onContentSizeChange(event) {
                var h = event.nativeEvent.contentSize.height;
                _this3.setState({ inputHeight: Math.max(DEFAULT_INPUT_HEIGHT, h) });
              },
              returnKeyType: 'default',
              onFocus: this.props.onFocus,
              onSubmitEditing: function onSubmitEditing() {
                if (_this3.okToSubmit) {
                  var comment = _this3.state.comment;
                  comment += '\n';
                  _this3.processInput(comment, false);
                  _this3.setState({ comment: comment });
                  return (_this3.okToSubmit = false);
                }
                return (_this3.okToSubmit = true);
              },
              __source: { fileName: _jsxFileName, lineNumber: 136, columnNumber: 9 }
            },
            _react.default.createElement(
              _textBody.default,
              {
                style: { flex: 1 },
                showAllMentions: true,
                __source: { fileName: _jsxFileName, lineNumber: 169, columnNumber: 11 }
              },
              this.state.comment
            )
          ),
          _react.default.createElement(
            _reactNativeWeb.TouchableHighlight,
            {
              underlayColor: 'transparent',
              style: [styles.commentSubmit],
              onPress: function onPress() {
                return _this3.createComment();
              },
              __source: { fileName: _jsxFileName, lineNumber: 173, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [{ fontSize: 18, fontWeight: 'bold', color: 'white' }],
                __source: { fileName: _jsxFileName, lineNumber: 178, columnNumber: 11 }
              },
              '\u2191'
            )
          )
        );
      }
    }
  ]);
  return CommentInput;
})(_react.Component);
(0, _defineProperty2.default)(CommentInput, 'propTypes', {
  actions: _propTypes.default.object,
  parentPost: _propTypes.default.object,
  parentComment: _propTypes.default.object,
  auth: _propTypes.default.object,
  onFocus: _propTypes.default.func,
  scrollToBottom: _propTypes.default.func,
  updatePosition: _propTypes.default.func,
  editing: _propTypes.default.bool,
  placeholder: _propTypes.default.string
});
var _default = CommentInput;
exports.default = _default;
var localStyles = _reactNativeWeb.StyleSheet.create({
  commentInput: {
    minHeight: 50,
    maxHeight: 200,
    paddingTop: 14,
    paddingBottom: 10,
    paddingLeft: 10,
    flex: 5,
    lineHeight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 16
  },
  commentInputParent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    backgroundColor: 'white'
  },
  inputImage: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    marginLeft: _global.mainPadding
  },
  commentSubmit: {
    backgroundColor: '#0000FF',
    marginRight: 16,
    flex: 0,
    width: 25,
    height: 25,
    paddingHorizontal: 4,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
//# sourceMappingURL=commentInput.component.js.map
