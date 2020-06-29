'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
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
var _comment2 = _interopRequireDefault(require('../../comment/mobile/comment.component'));
var _commentInput = _interopRequireDefault(
  require('../../comment/mobile/commentInput.component')
);
var _userSearch = _interopRequireDefault(
  require('../../createPost/mobile/userSearch.component')
);
var _urlPreview = _interopRequireDefault(
  require('../../createPost/mobile/urlPreview.component')
);
var _uni = require('../../styled/uni');
var _postButtons = _interopRequireDefault(require('./postButtons.container'));
var _post = _interopRequireDefault(require('./post.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/singlePost.component.js';
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
var INPUT_OFFSET = _global.IphoneX ? 33 + 55 : 55;
var SinglePostComponent = (function(_Component) {
  (0, _inherits2.default)(SinglePostComponent, _Component);
  var _super = _createSuper(SinglePostComponent);
  function SinglePostComponent(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SinglePostComponent);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'comments',
      []
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'nestingLevel',
      {}
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'onLoad',
      function() {
        setTimeout(function() {
          var params = _this.props.navigation.state.params;
          if (params.comment && _this.comments.length) {
            var id = params.comment._id || params.comment;
            var index = _this.comments.findIndex(function(c) {
              return c && id === c._id;
            });
            _this.scrollToComment(index);
          }
          if (params && params.openComment) {
            _this.input.textInput.focus();
          }
          _this.forceUpdate();
        }, 1000);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'getChildren',
      function() {
        var id =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : _this.props.postId;
        var nestingLevel =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (nestingLevel === 0) _this.comments = [];
        var _this$props = _this.props,
          comments = _this$props.comments,
          posts = _this$props.posts;
        var children = comments.childComments[id] || [];
        children.forEach(function(c) {
          _this.nestingLevel[c] = nestingLevel;
          _this.comments.push(posts.posts[c]);
          _this.getChildren(c, nestingLevel + 1);
        });
      }
    );
    _this.state = {
      inputHeight: 0,
      editing: false,
      reloading: false,
      top: 0,
      suggestionHeight: 0,
      loaded: false,
      gotData: false
    };
    _this.id = null;
    _this.comments = null;
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.dataSource = null;
    _this.loadMoreComments = _this.loadMoreComments.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.longFormat = false;
    _this.total = null;
    _this.renderHeader = _this.renderHeader.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.toggleEditing = _this.toggleEditing.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.reload = _this.reload.bind((0, _assertThisInitialized2.default)(_this));
    _this.scrollToComment = _this.scrollToComment.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.scrollToBottom = _this.scrollToBottom.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.renderUserSuggestions = _this.renderUserSuggestions.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.renderRelated = _this.renderRelated.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(SinglePostComponent, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        var params = this.props.navigation.state.params;
        this.id = this.props.postId;
        this.getChildren(this.id);
        requestAnimationFrame(function() {
          _this2.setState({ loaded: true });
        });
        if (params.comment) {
          this.setState({ activeComment: params.comment });
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev) {
        var _this3 = this;
        var post = this.props.post;
        if (this.comments.length && !this.state.gotData && this.scrollView) {
          this.onLoad();
          this.setState({ gotData: true });
        }
        if (post !== prev.post) {
          clearTimeout(this.stateTimeout);
          this.stateTimeout = setTimeout(function() {
            return _this3.setState({ reloading: false });
          }, 1000);
        }
      }
    },
    {
      key: 'loadMoreComments',
      value: function loadMoreComments() {
        var length = 0;
        if (this.comments) {
          length = this.comments.length || 0;
        }
        this.props.actions.getComments(this.id, length, 10);
      }
    },
    {
      key: 'toggleEditing',
      value: function toggleEditing(editing) {
        this.setState({ editing: editing });
      }
    },
    {
      key: 'scrollToComment',
      value: function scrollToComment(index) {
        if (typeof index !== 'number' || index < 0 || !this.scrollView) return;
        this.scrollView.scrollToIndex({ viewPosition: 0.1, index: index });
        this.setState({ activeComment: this.comments[index], activeIndex: index });
      }
    },
    {
      key: 'scrollToTop',
      value: function scrollToTop() {
        if (!this.scrollView) return;
        this.scrollView.scrollToOffset({ offset: 0 });
      }
    },
    {
      key: 'scrollToBottom',
      value: function scrollToBottom() {
        var _this4 = this;
        if (!this.scrollView) return;
        this.scrollTimeout = setTimeout(function() {
          if (!_this4.scrollView) return;
          if (_this4.comments && _this4.comments.length) {
            _this4.scrollView.scrollToEnd();
          } else if (!_this4.comments || _this4.comments.length === 0) {
            var offset = Math.max(0, _this4.headerHeight - _this4.scrollHeight);
            _this4.scrollView.scrollToOffset({ offset: offset });
          }
        }, 60);
      }
    },
    {
      key: 'reloadComments',
      value: function reloadComments() {
        this.props.actions.getComments(this.id, 0, 10);
      }
    },
    {
      key: 'reload',
      value: function reload() {
        this.reloading = true;
        this.props.actions.getComments(this.id, 0, 10);
        this.props.actions.getSelectedPost(this.id);
      }
    },
    {
      key: 'renderRelated',
      value: function renderRelated() {
        var _this5 = this;
        var relatedEl = this.props.related.map(function(r) {
          var post = { _id: r.commentary[0], title: r.title };
          return _react.default.createElement(
            _uni.View,
            {
              key: r._id,
              style: { paddingHorizontal: 15 },
              __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 9 }
            },
            _react.default.createElement(_urlPreview.default, {
              size: 'small',
              urlPreview: r,
              onPress: function onPress() {
                return _this5.props.actions.goToPost(post);
              },
              domain: r.domain,
              actions: _this5.props.actions,
              __source: { fileName: _jsxFileName, lineNumber: 175, columnNumber: 11 }
            })
          );
        });
        return relatedEl;
      }
    },
    {
      key: 'renderHeader',
      value: function renderHeader() {
        var _this6 = this;
        var _this$props2 = this.props,
          post = _this$props2.post,
          link = _this$props2.link,
          actions = _this$props2.actions;
        return _react.default.createElement(
          _uni.View,
          {
            onLayout: function onLayout(e) {
              _this6.headerHeight = e.nativeEvent.layout.height;
            },
            __source: { fileName: _jsxFileName, lineNumber: 191, columnNumber: 7 }
          },
          _react.default.createElement(_post.default, {
            singlePost: true,
            key: 0,
            post: post,
            link: link,
            actions: actions,
            focusInput: function focusInput() {
              _this6.setState({ activeComment: post });
              _this6.input.textInput.focus();
            },
            __source: { fileName: _jsxFileName, lineNumber: 196, columnNumber: 9 }
          }),
          this.renderRelated()
        );
      }
    },
    {
      key: 'renderRow',
      value: function renderRow(_ref) {
        var _this7 = this;
        var item = _ref.item,
          index = _ref.index;
        if (!this.state.loaded) return null;
        var comment = item;
        if (!comment) return null;
        var _this$props3 = this.props,
          post = _this$props3.post,
          auth = _this$props3.auth,
          actions = _this$props3.actions,
          users = _this$props3.users;
        var setupReply = function setupReply(_comment) {
          return _this7.setState({ activeComment: _comment, activeIndex: index });
        };
        var focusInput = function focusInput() {
          return _this7.input.textInput.focus();
        };
        var user = users.users[comment.user] || comment.embeddedUser;
        var nestingLevel = this.nestingLevel[comment._id];
        return _react.default.createElement(
          _uni.View,
          {
            fdirection: 'column',
            __source: { fileName: _jsxFileName, lineNumber: 239, columnNumber: 7 }
          },
          nestingLevel
            ? _react.default.createElement(
                _uni.View,
                {
                  ml: nestingLevel * 3 - 1,
                  mr: 2,
                  __source: { fileName: _jsxFileName, lineNumber: 241, columnNumber: 11 }
                },
                _react.default.createElement(_uni.Divider, {
                  __source: { fileName: _jsxFileName, lineNumber: 242, columnNumber: 13 }
                })
              )
            : _react.default.createElement(_uni.MobileDivider, {
                __source: { fileName: _jsxFileName, lineNumber: 245, columnNumber: 11 }
              }),
          _react.default.createElement(_comment2.default, {
            singlePost: true,
            actions: actions,
            auth: auth,
            parentEditing: this.toggleEditing,
            scrollToComment: function scrollToComment() {
              return _this7.scrollToComment(index);
            },
            comment: comment,
            nestingLevel: nestingLevel,
            user: user,
            renderButtons: function renderButtons() {
              return _react.default.createElement(
                _uni.View,
                {
                  m: '2 0',
                  __source: { fileName: _jsxFileName, lineNumber: 257, columnNumber: 13 }
                },
                _react.default.createElement(_postButtons.default, {
                  horizontal: true,
                  isComment: true,
                  parentPost: post,
                  post: comment,
                  actions: actions,
                  auth: auth,
                  singlePost: true,
                  setupReply: setupReply,
                  focusInput: focusInput,
                  __source: { fileName: _jsxFileName, lineNumber: 258, columnNumber: 15 }
                })
              );
            },
            __source: { fileName: _jsxFileName, lineNumber: 247, columnNumber: 9 }
          })
        );
      }
    },
    {
      key: 'renderUserSuggestions',
      value: function renderUserSuggestions() {
        var _this8 = this;
        var parentEl = null;
        if (this.props.users.search) {
          if (this.props.users.search.length) {
            parentEl = _react.default.createElement(
              _uni.View,
              {
                style: {
                  position: 'absolute',
                  top: this.state.top - this.state.suggestionHeight,
                  left: 0,
                  right: 0,
                  flex: 1,
                  maxHeight: this.state.top,
                  backgroundColor: 'white',
                  borderTopWidth: 1,
                  borderTopColor: '#F0F0F0'
                },
                onLayout: function onLayout(e) {
                  _this8.setState({ suggestionHeight: e.nativeEvent.layout.height });
                },
                __source: { fileName: _jsxFileName, lineNumber: 281, columnNumber: 11 }
              },
              _react.default.createElement(_userSearch.default, {
                style: { paddingTop: INPUT_OFFSET },
                setSelected: this.input.setMention,
                users: this.props.users.search,
                __source: { fileName: _jsxFileName, lineNumber: 297, columnNumber: 13 }
              })
            );
          }
        }
        return parentEl;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this9 = this;
        var post = this.props.post;
        if (!post) return null;
        var editing = this.state.editing;
        var activeComment = this.state.activeComment;
        this.getChildren();
        var commentIndex =
          activeComment &&
          this.comments.findIndex(function(c) {
            return c && c._id === activeComment._id;
          });
        if (activeComment && activeComment._id === post._id) {
          commentIndex = -1;
        } else {
          commentIndex = commentIndex > -1 ? commentIndex : this.comments.length - 1;
          activeComment = this.comments[commentIndex];
        }
        return _react.default.createElement(
          _reactNativeWeb.KeyboardAvoidingView,
          {
            behavior: 'padding',
            style: { flex: 1, backgroundColor: 'white' },
            keyboardVerticalOffset:
              INPUT_OFFSET +
              (_reactNativeWeb.Platform.OS === 'android'
                ? _reactNativeWeb.StatusBar.currentHeight
                : 0),
            __source: { fileName: _jsxFileName, lineNumber: 329, columnNumber: 7 }
          },
          _react.default.createElement(_reactNativeWeb.FlatList, {
            ref: function ref(c) {
              return (_this9.scrollView = c);
            },
            data: this.comments,
            renderItem: this.renderRow,
            keyExtractor: function keyExtractor(item, i) {
              return item ? item._id : 'x' + i;
            },
            removeClippedSubviews: true,
            pageSize: 1,
            initialListSize: 4,
            keyboardShouldPersistTaps: 'always',
            keyboardDismissMode: 'interactive',
            onScrollBeginDrag: _reactNativeWeb.Keyboard.dismiss,
            onEndReachedThreshold: 100,
            overScrollMode: 'always',
            scrollToOverflowEnabled: true,
            style: { flex: 1 },
            ListHeaderComponent: this.renderHeader,
            onScrollToIndexFailed: function onScrollToIndexFailed() {},
            onLayout: function onLayout(e) {
              _this9.scrollHeight = e.nativeEvent.layout.height;
            },
            refreshControl: _react.default.createElement(_reactNativeWeb.RefreshControl, {
              refreshing: this.state.reloading,
              onRefresh: this.reload,
              tintColor: '#000000',
              colors: ['#000000', '#000000', '#000000'],
              progressBackgroundColor: '#ffffff',
              __source: { fileName: _jsxFileName, lineNumber: 359, columnNumber: 13 }
            }),
            __source: { fileName: _jsxFileName, lineNumber: 336, columnNumber: 9 }
          }),
          this.renderUserSuggestions(),
          _react.default.createElement(
            _commentInput.default,
            (0, _extends2.default)(
              {
                position: 'fixed',
                parentPost: post,
                parentComment: activeComment,
                ref: function ref(c) {
                  return (_this9.input = c);
                },
                postId: this.id,
                placeholder: activeComment
                  ? 'Reply to @'.concat(activeComment.embeddedUser.handle)
                  : null,
                editing: editing
              },
              this.props,
              {
                scrollView: this.scrollView,
                scrollToBottom: this.scrollToBottom,
                updatePosition: function updatePosition(params) {
                  return _this9.setState(params);
                },
                onBlur: function onBlur() {
                  return _this9.setState({ comment: null, index: null });
                },
                onFocus: function onFocus() {
                  if (commentIndex > -1) _this9.scrollToComment(commentIndex);
                  else _this9.scrollToTop();
                },
                __source: { fileName: _jsxFileName, lineNumber: 371, columnNumber: 9 }
              }
            )
          )
        );
      }
    }
  ]);
  return SinglePostComponent;
})(_react.Component);
(0, _defineProperty2.default)(SinglePostComponent, 'propTypes', {
  postId: _propTypes.default.string,
  postComments: _propTypes.default.array,
  posts: _propTypes.default.object,
  post: _propTypes.default.object,
  error: _propTypes.default.bool,
  actions: _propTypes.default.object,
  related: _propTypes.default.array,
  link: _propTypes.default.object,
  users: _propTypes.default.object,
  comments: _propTypes.default.object,
  navigation: _propTypes.default.object,
  auth: _propTypes.default.object,
  admin: _propTypes.default.object,
  comment: _propTypes.default.object
});
var _default = SinglePostComponent;
exports.default = _default;
//# sourceMappingURL=singlePost.component.js.map
