'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _reactNavigation = require('react-navigation');
var createPostActions = _interopRequireWildcard(require('../createPost.actions'));
var tagActions = _interopRequireWildcard(require('../../tag/tag.actions'));
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var tooltipActions = _interopRequireWildcard(require('../../tooltip/tooltip.actions'));
var _text = require('../../../utils/text');
var _avatarbox = _interopRequireDefault(require('../../user/avatarbox.component'));
var _textBody = _interopRequireDefault(require('../../text/mobile/textBody.component'));
var _reactNativeBottomsheet = _interopRequireDefault(require('react-native-bottomsheet'));
var _styles = require('../../../styles');
var _userSearch = _interopRequireDefault(require('./userSearch.component'));
var _urlPreview = _interopRequireDefault(require('./urlPreview.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/mobile/url.component.js';
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
var ActionSheet = _reactNativeWeb.ActionSheetIOS;
if (_reactNativeWeb.Platform.OS === 'android') {
  ActionSheet = _reactNativeBottomsheet.default;
  ActionSheet.showActionSheetWithOptions =
    _reactNativeBottomsheet.default.showBottomSheetWithOptions;
}
var styles;
var UrlComponent = (function(_Component) {
  (0, _inherits2.default)(UrlComponent, _Component);
  var _super = _createSuper(UrlComponent);
  function UrlComponent(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, UrlComponent);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'removeUrlPreview',
      function() {
        _this.props.actions.setCreatePostState({
          urlPreview: null,
          postUrl: null,
          disableUrl: true
        });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'enableUrlPreview',
      function() {
        var postBody = _this.props.postBody;
        _this.props.actions.setCreatePostState({ disableUrl: false });
        setTimeout(function() {
          return _this.processInput(postBody);
        }, 1);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'previewMenu',
      function() {
        if (_this.props.edit || _this.props.repost) return;
        ActionSheet.showActionSheetWithOptions(
          {
            options: ['Remove Url', 'Cancel'],
            cancelButtonIndex: 1,
            destructiveButtonIndex: 0
          },
          function(buttonIndex) {
            switch (buttonIndex) {
              case 0:
                _this.removeUrlPreview();
                break;
              default:
            }
          }
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'createPreview',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(postUrl) {
            var results;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return _this.props.actions.generatePreviewServer(postUrl);
                    case 3:
                      results = _context.sent;
                      if (results) {
                        _context.next = 6;
                        break;
                      }
                      throw new Error('Unable to generate preview for url');
                    case 6:
                      _this.props.actions.setCreatePostState({
                        domain: results.domain,
                        postUrl: results.url,
                        inputUrl: postUrl,
                        keywords: results.keywords,
                        postTags: results.tags,
                        articleAuthor: results.articleAuthor,
                        shortText: results.shortText,
                        urlPreview: {
                          image: results.image,
                          title: results.title ? results.title : 'Untitled',
                          description: results.description
                        }
                      });
                      _context.next = 13;
                      break;
                    case 9:
                      _context.prev = 9;
                      _context.t0 = _context['catch'](0);
                      _this.props.actions.setCreatePostState({ postUrl: null });
                      _reactNativeWeb.Alert.alert(_context.t0.message);
                    case 13:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              null,
              [[0, 9]]
            );
          })
        );
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    _this.setMention = _this.setMention.bind((0, _assertThisInitialized2.default)(_this));
    _this.previousPostLength = 0;
    _this.toggleTooltip = _this.toggleTooltip.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.initTooltips = _this.initTooltips.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(UrlComponent, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        if (this.props.postUrl) {
          this.createPreview(this.props.postUrl);
        }
        setTimeout(function() {
          return _this2.initTooltips('shareTip');
        }, 1000);
        _reactNativeWeb.InteractionManager.runAfterInteractions(function() {
          if (!_this2.props.tags.length) _this2.props.actions.getParentTags();
        });
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev) {
        var _this$props = this.props,
          createPreview = _this$props.createPreview,
          postUrl = _this$props.postUrl,
          navigation = _this$props.navigation;
        if (_reactNativeWeb.Platform.OS === 'android' && !navigation.isFocused()) {
          this.input.blur();
          _reactNativeWeb.Keyboard.dismiss();
        }
        if (createPreview !== prev.createPreview && postUrl) {
          this.createPreview(postUrl);
          this.input.focus();
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.input.blur();
      }
    },
    {
      key: 'initTooltips',
      value: function initTooltips(name) {
        var _this3 = this;
        this.props.actions.setTooltipData({
          name: name,
          toggle: function toggle() {
            return _this3.toggleTooltip(_this3[name], name);
          }
        });
      }
    },
    {
      key: 'toggleTooltip',
      value: function toggleTooltip(parentEl, name) {
        var _this4 = this;
        if (!parentEl) return;
        parentEl.measureInWindow(function(x, y, w, h) {
          var parent = { x: x, y: y, w: w, h: h };
          if (x + y + w + h === 0) return;
          _this4.props.actions.setTooltipData({ name: name, parent: parent });
          _this4.props.actions.showTooltip(name);
        });
      }
    },
    {
      key: 'setMention',
      value: function setMention(user) {
        var postBody = this.props.postBody.replace(this.mention, '@' + user.handle);
        this.props.actions.setCreatePostState({ postBody: postBody });
        this.props.actions.setUserSearch([]);
        this.input.focus();
      }
    },
    {
      key: 'processInput',
      value: function processInput(postBody, doneTyping) {
        var _this$props2 = this.props,
          disableUrl = _this$props2.disableUrl,
          postUrl = _this$props2.postUrl;
        var length = postBody ? postBody.length : 0;
        if (doneTyping) postBody = this.props.postBody;
        var shouldParseUrl = false;
        var prevLength = this.props.postBody.length || 0;
        if (length - prevLength > 1) shouldParseUrl = true;
        if (postBody[postBody.length - 1] == ' ') shouldParseUrl = true;
        if (postBody[postBody.length - 1] == '\n') shouldParseUrl = true;
        var _getTextData = (0, _text.getTextData)(postBody),
          tags = _getTextData.tags,
          mentions = _getTextData.mentions,
          url = _getTextData.url;
        if (!disableUrl && !postUrl && shouldParseUrl) {
          var newUrl = url && url.url;
          if (newUrl) {
            this.props.actions.setCreatePostState({ postUrl: newUrl });
            this.createPreview(newUrl);
          }
        }
        var bodyTags = tags;
        var bodyMentions = mentions;
        var words = (0, _text.getWords)(postBody);
        var lastWord = words[words.length - 1];
        if (lastWord.match(/^@\S+/g) && lastWord.length > 1) {
          this.mention = lastWord;
          this.props.actions.searchUser(lastWord.replace('@', ''));
        } else this.props.actions.setUserSearch([]);
        var addTagsAndMentions = doneTyping
          ? { bodyTags: bodyTags, bodyMentions: bodyMentions }
          : {};
        this.props.actions.setCreatePostState(
          _objectSpread({ postBody: postBody }, addTagsAndMentions)
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this5 = this;
        var _this$props3 = this.props,
          disableUrl = _this$props3.disableUrl,
          postUrl = _this$props3.postUrl,
          postBody = _this$props3.postBody,
          navigation = _this$props3.navigation;
        var urlPlaceholder = 'Article URL.';
        if (postUrl) {
          urlPlaceholder = 'Add your own commentary';
        }
        if (this.props.repost) {
          urlPlaceholder = 'Add a comment';
        }
        var userHeader = null;
        if (this.props.user && !this.props.share && !this.props.repost) {
          userHeader = _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.createPostUser,
              __source: { fileName: _jsxFileName, lineNumber: 233, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: [styles.innerBorder, { paddingVertical: 10 }],
                __source: { fileName: _jsxFileName, lineNumber: 234, columnNumber: 11 }
              },
              _react.default.createElement(_avatarbox.default, {
                style: styles.innerBorder,
                user: this.props.user,
                setSelected: function setSelected() {
                  return null;
                },
                __source: { fileName: _jsxFileName, lineNumber: 235, columnNumber: 13 }
              })
            )
          );
        }
        var userSearch = null;
        if (this.props.users.search && this.props.users.search.length) {
          userSearch = _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flex: 1, maxHeight: 220 },
              __source: { fileName: _jsxFileName, lineNumber: 249, columnNumber: 9 }
            },
            _react.default.createElement(_userSearch.default, {
              setSelected: this.setMention,
              users: this.props.users.search,
              __source: { fileName: _jsxFileName, lineNumber: 250, columnNumber: 11 }
            })
          );
        }
        var addP = null;
        if (
          this.props.urlPreview &&
          this.props.urlPreview.description &&
          !this.props.repost
        ) {
          addP = _react.default.createElement(
            _reactNativeWeb.TouchableHighlight,
            {
              underlayColor: 'transparent',
              style: styles.postButton,
              onPress: function onPress() {
                return _this5.props.actions.setCreatePostState({
                  postBody: postBody + '\n>"' + _this5.props.urlPreview.description + '"'
                });
              },
              __source: { fileName: _jsxFileName, lineNumber: 266, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.font12, styles.active],
                __source: { fileName: _jsxFileName, lineNumber: 275, columnNumber: 11 }
              },
              'Add text from link'
            )
          );
        }
        var tipCTA;
        if (
          _reactNativeWeb.Platform.OS === 'ios' &&
          !this.props.urlPreview &&
          postBody === '' &&
          !this.props.share
        ) {
          tipCTA = _react.default.createElement(
            _reactNativeWeb.TouchableHighlight,
            {
              ref: function ref(c) {
                return (_this5.shareTip = c);
              },
              underlayColor: 'transparent',
              style: [styles.postButtonShare],
              onPress: function onPress() {
                return _this5.toggleTooltip(_this5.shareTip, 'shareTip');
              },
              __source: { fileName: _jsxFileName, lineNumber: 288, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.font12, styles.active, { textAlign: 'center' }],
                __source: { fileName: _jsxFileName, lineNumber: 294, columnNumber: 11 }
              },
              'How to post from Chrome, Safari & other apps'
            )
          );
        }
        return _react.default.createElement(
          _reactNativeWeb.ScrollView,
          {
            keyboardShouldPersistTaps: 'always',
            ref: function ref(c) {
              return (_this5.scrollView = c);
            },
            style: {
              flex: 1,
              paddingHorizontal: _global.mainPadding,
              backgroundColor: _styles.colors.white
            },
            contentContainerStyle: { flexGrow: 1, height: 'auto', minHeight: 260 },
            __source: { fileName: _jsxFileName, lineNumber: 302, columnNumber: 7 }
          },
          _react.default.createElement(_reactNavigation.NavigationEvents, {
            onDidBlur: function onDidBlur() {
              _this5.input && _this5.input.blur();
              _reactNativeWeb.Keyboard.dismiss();
            },
            onWillBlur: function onWillBlur() {
              _this5.input && _this5.input.blur();
              _reactNativeWeb.Keyboard.dismiss();
            },
            __source: { fileName: _jsxFileName, lineNumber: 312, columnNumber: 9 }
          }),
          userHeader,
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: [{ flex: 1, marginTop: 8 }],
              __source: { fileName: _jsxFileName, lineNumber: 323, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.TextInput,
              {
                ref: function ref(c) {
                  _this5.input = c;
                },
                style: [
                  { flex: 1 },
                  styles.font15,
                  styles.createPostInput,
                  { maxHeight: 280 }
                ],
                autoFocus: navigation.isFocused(),
                underlineColorAndroid: 'transparent',
                placeholder: urlPlaceholder,
                placeholderTextColor: _global.greyText,
                multiline: true,
                clearButtonMode: 'while-editing',
                onChangeText: function onChangeText(_postBody) {
                  _this5.processInput(_postBody, false);
                },
                onBlur: function onBlur() {
                  return _this5.processInput(null, true);
                },
                returnKeyType: 'default',
                onFocus: function onFocus() {
                  return null;
                },
                keyboardShouldPersistTaps: 'never',
                disableFullscreenUI: true,
                textAlignVertical: 'top',
                onSubmitEditing: function onSubmitEditing() {
                  if (_this5.okToSubmit) {
                    _this5.processInput(postBody + '\n', true);
                    return (_this5.okToSubmit = false);
                  }
                  return (_this5.okToSubmit = true);
                },
                __source: { fileName: _jsxFileName, lineNumber: 324, columnNumber: 11 }
              },
              _react.default.createElement(
                _textBody.default,
                {
                  showAllMentions: true,
                  __source: { fileName: _jsxFileName, lineNumber: 357, columnNumber: 13 }
                },
                postBody
              )
            ),
            addP,
            tipCTA
          ),
          userSearch,
          disableUrl &&
            postBody !== '' &&
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                onPress: this.enableUrlPreview,
                style: {
                  color: _styles.colors.blue,
                  position: 'absolute',
                  bottom: 16,
                  right: 0
                },
                __source: { fileName: _jsxFileName, lineNumber: 364, columnNumber: 11 }
              },
              'Enable Link Preview'
            ),
          postUrl && !this.props.users.search.length && !this.props.repost
            ? _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: { marginVertical: 8 },
                  __source: { fileName: _jsxFileName, lineNumber: 372, columnNumber: 11 }
                },
                _react.default.createElement(
                  _urlPreview.default,
                  (0, _extends2.default)({ remove: true }, this.props, {
                    size: 'small',
                    urlMenu: this.previewMenu,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 373,
                      columnNumber: 13
                    }
                  })
                )
              )
            : null
        );
      }
    }
  ]);
  return UrlComponent;
})(_react.Component);
(0, _defineProperty2.default)(UrlComponent, 'propTypes', {
  postUrl: _propTypes.default.string,
  createPreview: _propTypes.default.object,
  postBody: _propTypes.default.string,
  urlPreview: _propTypes.default.object,
  share: _propTypes.default.bool,
  actions: _propTypes.default.object,
  repost: _propTypes.default.object,
  edit: _propTypes.default.bool,
  users: _propTypes.default.object,
  user: _propTypes.default.object,
  tags: _propTypes.default.array,
  disableUrl: _propTypes.default.bool,
  navigation: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  textP: { flex: 0, marginBottom: 10 },
  videoTip: {
    borderColor: 'lightgrey',
    borderWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10
  },
  createPostUser: { height: 55 },
  postButtonShare: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 3
  },
  postButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 3
  },
  innerBorder: {
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: _global.borderGrey
  },
  noBorder: { borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth },
  inputBox: { flex: 1, backgroundColor: '#ffffff' }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
function mapStateToProps(state) {
  return {
    user: state.auth.user,
    users: state.user,
    postUrl: state.createPost.postUrl,
    createPreview: state.createPost.createPreview,
    postBody: state.createPost.postBody,
    urlPreview: state.createPost.urlPreview,
    repost: state.createPost.repost,
    tags: state.tags.parentTags,
    disableUrl: state.createPost.disableUrl
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(_objectSpread({}, createPostActions), tagActions),
          userActions
        ),
        tooltipActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(UrlComponent);
exports.default = _default;
//# sourceMappingURL=url.component.js.map
