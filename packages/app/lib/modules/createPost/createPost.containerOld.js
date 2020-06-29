'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _reactRouterDom = require('react-router-dom');
var _richText = _interopRequireDefault(require('../text/web/richText.component'));
var _get = _interopRequireDefault(require('lodash/get'));
var _reactGa = _interopRequireDefault(require('react-ga'));
var _styles = require('../../styles');
var navigationActions = _interopRequireWildcard(
  require('../navigation/navigation.actions')
);
var userActions = _interopRequireWildcard(require('../user/user.actions'));
var createPostActions = _interopRequireWildcard(require('./createPost.actions'));
var postActions = _interopRequireWildcard(require('../post/post.actions'));
var tagActions = _interopRequireWildcard(require('../tag/tag.actions'));
var _utils = require('../../utils');
var _uni = require('../styled/uni');
var _web = require('../styled/web');
var _avatarbox = _interopRequireDefault(require('../user/avatarbox.component'));
var _postinfo = _interopRequireDefault(require('../post/postinfo.component'));
var _TagInput = _interopRequireDefault(require('./web/TagInput.component'));
var _selectTags = _interopRequireDefault(require('./web/selectTags.component'));
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/createPost.containerOld.js';
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
var urlPlaceholder = "What's relevant?  Paste article URL.";
var textPlaceholder =
  'Add your commentary, opinion, summary or a relevant quote from the article';
var PasteTextFromLink = (0, _primitives.default)(_uni.SmallText).withConfig({
  displayName: 'createPostcontainerOld__PasteTextFromLink',
  componentId: 'sc-4qn7kt-0'
})(
  ['position:absolute;right:', ';bottom:', ';'],
  (0, _styles.sizing)(1.5),
  (0, _styles.sizing)(1.5)
);
var CreatePostContainer = (function(_Component) {
  (0, _inherits2.default)(CreatePostContainer, _Component);
  var _super = _createSuper(CreatePostContainer);
  function CreatePostContainer(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CreatePostContainer);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'createPost',
      (0, _asyncToGenerator2.default)(
        _regenerator.default.mark(function _callee() {
          var _this$props,
            auth,
            close,
            actions,
            history,
            location,
            createPost,
            _this$state,
            selectedTags,
            postUrl,
            urlPreview,
            category,
            mentions,
            domain,
            channel,
            title,
            _this$state2,
            tags,
            body,
            validate,
            allTags,
            newPost,
            success;
          return _regenerator.default.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _this.setState({ submitting: true });
                    (_this$props = _this.props),
                      (auth = _this$props.auth),
                      (close = _this$props.close),
                      (actions = _this$props.actions),
                      (history = _this$props.history),
                      (location = _this$props.location),
                      (createPost = _this$props.createPost);
                    (_this$state = _this.state),
                      (selectedTags = _this$state.selectedTags),
                      (postUrl = _this$state.postUrl),
                      (urlPreview = _this$state.urlPreview),
                      (category = _this$state.category),
                      (mentions = _this$state.mentions),
                      (domain = _this$state.domain),
                      (channel = _this$state.channel),
                      (title = _this$state.title);
                    (_this$state2 = _this.state),
                      (tags = _this$state2.tags),
                      (body = _this$state2.body);
                    _context.prev = 4;
                    validate = _this.validateInput();
                    if (!(validate !== true)) {
                      _context.next = 8;
                      break;
                    }
                    throw new Error(validate);
                  case 8:
                    allTags = tags.concat(selectedTags);
                    tags = Array.from(new Set(allTags));
                    body = body.replace(/&nbsp;/gi, '');
                    newPost = {
                      url: postUrl || postUrl,
                      tags: tags,
                      body: body,
                      title: urlPreview ? urlPreview.title : title,
                      description: urlPreview ? urlPreview.description : null,
                      category: category,
                      image: urlPreview ? urlPreview.image : null,
                      mentions: mentions,
                      domain: domain,
                      channel: channel
                    };
                    if (!createPost.edit) {
                      _context.next = 19;
                      break;
                    }
                    newPost = _objectSpread(
                      _objectSpread({}, createPost.editPost),
                      newPost
                    );
                    _context.next = 16;
                    return actions.editPost(newPost);
                  case 16:
                    success = _context.sent;
                    if (success) {
                      _this.clearPost();
                      history.push(location.pathname);
                      if (close) close();
                    }
                    return _context.abrupt('return');
                  case 19:
                    _context.next = 21;
                    return actions.submitPost(newPost);
                  case 21:
                    newPost = _context.sent;
                    if (newPost) {
                      _context.next = 25;
                      break;
                    }
                    _this.setState({ submitting: false });
                    return _context.abrupt('return');
                  case 25:
                    close && close();
                    _this.clearPost();
                    history.push('/'.concat(auth.community, '/new/'));
                    actions.refreshTab('discover');
                    _reactGa.default.event({
                      category: 'User',
                      action: 'Created a Post'
                    });
                    _context.next = 35;
                    break;
                  case 32:
                    _context.prev = 32;
                    _context.t0 = _context['catch'](4);
                    _utils.alert.browserAlerts.alert(_context.t0.message);
                  case 35:
                    _this.setState({ submitting: false });
                  case 36:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[4, 32]]
          );
        })
      )
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleInput',
      function(e) {
        return _this.setState(
          (0, _defineProperty2.default)({}, e.target.name, e.target.value)
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleCheckbox',
      function(e) {
        return _this.setState(
          (0, _defineProperty2.default)({}, e.target.name, e.target.checked)
        );
      }
    );
    _this.handleChange = _this.handleChange.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.handleBodyChange = _this.handleBodyChange.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.parseBody = _this.parseBody.bind((0, _assertThisInitialized2.default)(_this));
    _this.createPreview = _this.createPreview.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.addTextFromLink = _this.addTextFromLink.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.setCategory = _this.setCategory.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.renderPreview = _this.renderPreview.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.createPost = _this.createPost.bind((0, _assertThisInitialized2.default)(_this));
    _this.validateInput = _this.validateInput.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.clearPost = _this.clearPost.bind((0, _assertThisInitialized2.default)(_this));
    _this.selectTags = _this.selectTags.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      body: '',
      category: '',
      domain: null,
      urlPreview: null,
      loadingPreview: false,
      selectedTags: [],
      tags: null,
      url: null,
      mentions: null,
      failedUrl: null,
      submitting: false
    };
    return _this;
  }
  (0, _createClass2.default)(CreatePostContainer, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.stateFromReducer();
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!this.props.tags || !this.props.tags.parentTags.length) {
          this.props.actions.getParentTags();
        }
        this.setState({ submitting: false });
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        if (newProps.userSearch !== this.props.userSearch) {
          this.setState({ userSearchIndex: -1 });
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(newProps, oldState) {
        if (oldState.body !== this.state.body) {
          this.parseBody();
        }
      }
    },
    {
      key: 'selectTags',
      value: function selectTags(tag) {
        if (!tag || !tag.length) return;
        if (typeof tag === 'string') tag = [tag];
        var selectedTags = this.state.selectedTags;
        selectedTags = (0, _toConsumableArray2.default)(
          new Set(
            [].concat(
              (0, _toConsumableArray2.default)(selectedTags),
              (0, _toConsumableArray2.default)(tag)
            )
          )
        );
        this.setState({ selectedTags: selectedTags });
      }
    },
    {
      key: 'clearPost',
      value: function clearPost() {
        this.props.actions.clearCreatePost();
        this.clearUrl();
        this.stateFromReducer();
      }
    },
    {
      key: 'clearUrl',
      value: function clearUrl() {
        this.setState({
          url: null,
          postUrl: null,
          urlPreview: null,
          loadingPreview: false
        });
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.updateReducer();
      }
    },
    {
      key: 'stateFromReducer',
      value: function stateFromReducer() {
        var props = this.props.createPost;
        this.setState(
          _objectSpread(
            _objectSpread({}, props),
            {},
            {
              body: props.postBody || '',
              category: props.postCategory,
              tags: props.allTags
            }
          )
        );
        this.parseBody(this.state);
      }
    },
    {
      key: 'updateReducer',
      value: function updateReducer() {
        var allTags = this.state.tags
          ? this.state.tags.concat(this.state.selectedTags)
          : [];
        var tags = Array.from(new Set(allTags));
        var state = _objectSpread(
          _objectSpread({}, this.state),
          {},
          {
            postBody: this.state.body,
            postCategory: this.state.category,
            allTags: tags,
            postImage: this.state.urlPreview ? this.state.urlPreview.image : null
          }
        );
        this.props.actions.setCreatePostState(state);
      }
    },
    {
      key: 'validateInput',
      value: function validateInput() {
        if (!this.state.selectedTags.length) {
          this.setSate({ validate: 'Please select at least one topic' });
          return 'Please select at least one topic';
        }
        if (!this.state.body || !this.state.body.trim().length) {
          this.setState({ validate: 'Please write something' });
          return 'Can not create empty post';
        }
        return true;
      }
    },
    {
      key: 'handleChange',
      value: function handleChange(field, data) {
        this.setState((0, _defineProperty2.default)({}, field, data));
      }
    },
    {
      key: 'handleBodyChange',
      value: function handleBodyChange(body, data) {
        if (body !== this.state.body) {
          this.setState(_objectSpread(_objectSpread({}, data), {}, { body: body }));
        }
      }
    },
    {
      key: 'parseBody',
      value: function parseBody() {
        if (
          this.state.url &&
          !this.state.postUrl &&
          this.state.shouldParseUrl &&
          this.state.postUrl !== this.state.url
        ) {
          this.createPreview();
        }
      }
    },
    {
      key: 'addTextFromLink',
      value: function addTextFromLink() {
        var description =
          '"' + _utils.text.stripHTML(this.state.urlPreview.description) + '"';
        this.setState({ body: description });
      }
    },
    {
      key: 'setCategory',
      value: function setCategory(category) {
        this.setState({ category: category });
        this.props.actions.setPostCategory(category);
      }
    },
    {
      key: 'createPreview',
      value: function createPreview() {
        var _this2 = this;
        var url = this.state.url;
        var auth = this.props.auth;
        if (this.state.loadingPreview) return;
        var postUrl = url;
        this.setState({
          body: this.state.body.replace(postUrl, '').trim(),
          loadingPreview: true,
          urlPreview: { loading: true }
        });
        this.props.actions.generatePreviewServer(postUrl).then(function(results) {
          if (results && results.url) {
            var imageURL = results.image;
            if (imageURL && imageURL.indexOf(', ')) {
              imageURL = imageURL.split(', ')[0];
            }
            _this2.setState({
              domain: results.domain,
              postUrl: results.url,
              url: results.url,
              loadingPreview: false,
              keywords: results.keywords,
              postTags: results.tags,
              urlPreview: _objectSpread(
                _objectSpread({}, results),
                {},
                {
                  image: imageURL,
                  title: results.title || 'Untitled',
                  loading: false,
                  embeddedUser: auth.user,
                  tags: []
                }
              ),
              linkPreview: _objectSpread(
                _objectSpread({}, results),
                {},
                { image: imageURL }
              )
            });
          } else {
            _this2.setState({ failedUrl: _this2.state.url, loadingPreview: false });
          }
        });
      }
    },
    {
      key: 'renderPreview',
      value: function renderPreview() {
        if (!this.state.urlPreview) return null;
        var _this$props2 = this.props,
          auth = _this$props2.auth,
          screenSize = _this$props2.screenSize;
        return _react.default.createElement(
          _uni.Box,
          { __source: { fileName: _jsxFileName, lineNumber: 334, columnNumber: 7 } },
          _react.default.createElement(_postinfo.default, {
            small: true,
            preview: !!screenSize,
            auth: auth,
            screenSize: screenSize,
            close: this.clearUrl.bind(this),
            post: this.state.urlPreview,
            link: this.state.linkPreview,
            __source: { fileName: _jsxFileName, lineNumber: 335, columnNumber: 9 }
          }),
          _react.default.createElement(
            _uni.SmallText,
            {
              style: { textAlign: 'right' },
              __source: { fileName: _jsxFileName, lineNumber: 344, columnNumber: 9 }
            },
            _react.default.createElement(
              'a',
              {
                onClick: this.clearUrl.bind(this),
                className: 'removeUrl',
                __source: { fileName: _jsxFileName, lineNumber: 345, columnNumber: 11 }
              },
              'remove url'
            )
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var placeholder = this.state.urlPreview ? textPlaceholder : urlPlaceholder;
        var _this$state3 = this.state,
          body = _this$state3.body,
          url = _this$state3.url,
          submitting = _this$state3.submitting,
          channel = _this$state3.channel,
          title = _this$state3.title;
        var _this$props3 = this.props,
          community = _this$props3.community,
          auth = _this$props3.auth;
        var articleTags = this.state.keywords;
        var communityTags = [];
        if (community) {
          var activeCommunity =
            (0, _get.default)(community.communities, community.active, {}) || {};
          communityTags =
            (0, _get.default)(activeCommunity, 'topics', []) ||
            [].map(function(t) {
              return t._id;
            });
        }
        var allTags = [].concat(articleTags, communityTags);
        var isAdmin = auth.user && auth.user.role === 'admin';
        var submitDisabled =
          submitting || !this.state.selectedTags.length || !body || !body.trim().length;
        var chatEnabled = false;
        return _react.default.createElement(
          _uni.View,
          { __source: { fileName: _jsxFileName, lineNumber: 376, columnNumber: 7 } },
          _react.default.createElement(
            _uni.View,
            {
              display: 'flex',
              fdirection: 'row',
              align: 'center',
              __source: { fileName: _jsxFileName, lineNumber: 377, columnNumber: 9 }
            },
            _react.default.createElement(_avatarbox.default, {
              user: auth.user,
              size: 4,
              __source: { fileName: _jsxFileName, lineNumber: 378, columnNumber: 11 }
            })
          ),
          channel &&
            _react.default.createElement(_web.Input, {
              onChange: this.handleInput,
              value: title,
              name: 'title',
              mt: 2,
              type: 'text',
              placeholder: 'Title',
              __source: { fileName: _jsxFileName, lineNumber: 382, columnNumber: 11 }
            }),
          _react.default.createElement(
            _uni.View,
            {
              mt: 2,
              __source: { fileName: _jsxFileName, lineNumber: 392, columnNumber: 9 }
            },
            _react.default.createElement(_richText.default, {
              body: this.state.body,
              placeholder: placeholder,
              onChange: this.handleBodyChange,
              onBlur: function onBlur() {
                if (!_this3.state.body.length && !_this3.state.postUrl) {
                  _this3.setState({ active: false });
                }
              },
              __source: { fileName: _jsxFileName, lineNumber: 393, columnNumber: 11 }
            }),
            _react.default.createElement(
              PasteTextFromLink,
              {
                c: _styles.colors.blue,
                __source: { fileName: _jsxFileName, lineNumber: 403, columnNumber: 11 }
              },
              this.state.urlPreview &&
                this.state.body === '' &&
                this.state.urlPreview.description &&
                _react.default.createElement(
                  'a',
                  {
                    href: '#',
                    onClick: function onClick(e) {
                      e.preventDefault();
                      _this3.addTextFromLink();
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 407,
                      columnNumber: 17
                    }
                  },
                  'Paste article description'
                )
            )
          ),
          _react.default.createElement(
            _uni.View,
            {
              mt: [3, 2],
              __source: { fileName: _jsxFileName, lineNumber: 420, columnNumber: 9 }
            },
            this.renderPreview()
          ),
          body || url
            ? _react.default.createElement(
                _uni.View,
                {
                  mt: [3, 2],
                  __source: { fileName: _jsxFileName, lineNumber: 423, columnNumber: 11 }
                },
                _react.default.createElement(_TagInput.default, {
                  selectedTags: this.state.selectedTags,
                  selectTag: this.selectTags,
                  deselectTag: function deselectTag(tag) {
                    var selectedTags = _this3.state.selectedTags;
                    selectedTags = selectedTags.filter(function(t) {
                      return t !== tag;
                    });
                    _this3.setState({ selectedTags: selectedTags });
                  },
                  placeholderText: !this.state.selectedTags.length
                    ? 'Please add at least one tag'
                    : '',
                  __source: { fileName: _jsxFileName, lineNumber: 424, columnNumber: 13 }
                }),
                _react.default.createElement(
                  _uni.View,
                  {
                    mt: [4, 2],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 436,
                      columnNumber: 13
                    }
                  },
                  _react.default.createElement(_selectTags.default, {
                    text: 'Suggested tags',
                    tags: allTags,
                    selectedTags: this.state.selectedTags,
                    selectTag: this.selectTags,
                    deselectTag: function deselectTag(tag) {
                      var selectedTags = _this3.state.selectedTags.selectedTags;
                      selectedTags = selectedTags.filter(function(t) {
                        return t !== tag;
                      });
                      _this3.setState({ selectedTags: selectedTags });
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 437,
                      columnNumber: 15
                    }
                  })
                ),
                _react.default.createElement(_uni.Divider, {
                  mt: [4, 2],
                  __source: { fileName: _jsxFileName, lineNumber: 449, columnNumber: 13 }
                })
              )
            : null,
          _react.default.createElement(
            _uni.View,
            {
              mt: 2,
              fdirection: 'row',
              justify: 'space-between',
              __source: { fileName: _jsxFileName, lineNumber: 453, columnNumber: 9 }
            },
            isAdmin &&
              chatEnabled &&
              _react.default.createElement(
                _uni.View,
                {
                  fdirection: 'row',
                  align: 'center',
                  alignself: 'center',
                  __source: { fileName: _jsxFileName, lineNumber: 455, columnNumber: 13 }
                },
                _react.default.createElement('input', {
                  checked: channel,
                  type: 'checkbox',
                  name: 'channel',
                  onChange: this.handleCheckbox,
                  __source: { fileName: _jsxFileName, lineNumber: 456, columnNumber: 15 }
                }),
                _react.default.createElement(
                  _uni.BodyText,
                  {
                    ml: 0.5,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 462,
                      columnNumber: 15
                    }
                  },
                  'This is a chat channel'
                )
              ),
            _react.default.createElement(
              _uni.View,
              {
                fdirection: 'row',
                flex: 1,
                justify: 'flex-end',
                align: 'center',
                __source: { fileName: _jsxFileName, lineNumber: 465, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.LinkFont,
                {
                  mr: 3,
                  onClick: this.clearPost,
                  __source: { fileName: _jsxFileName, lineNumber: 466, columnNumber: 13 }
                },
                'Clear'
              ),
              _react.default.createElement(
                _uni.Button,
                {
                  onClick: function onClick() {
                    return !submitDisabled && _this3.createPost();
                  },
                  disabled: submitDisabled,
                  ml: 2,
                  __source: { fileName: _jsxFileName, lineNumber: 470, columnNumber: 13 }
                },
                this.props.createPost.edit ? 'Update Post' : 'Create Post'
              )
            )
          )
        );
      }
    }
  ]);
  return CreatePostContainer;
})(_react.Component);
(0, _defineProperty2.default)(CreatePostContainer, 'propTypes', {
  tags: _propTypes.default.object,
  actions: _propTypes.default.object,
  userSearch: _propTypes.default.array,
  createPost: _propTypes.default.object,
  auth: _propTypes.default.object,
  close: _propTypes.default.func,
  location: _propTypes.default.object,
  history: _propTypes.default.object,
  community: _propTypes.default.object,
  screenSize: _propTypes.default.number
});
function mapStateToProps(state) {
  return {
    createPost: state.createPost,
    auth: state.auth,
    users: state.user,
    tags: state.tags,
    userSearch: state.user.search,
    community: state.community,
    screenSize: state.navigation.screenSize
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            _objectSpread(_objectSpread({}, navigationActions), createPostActions),
            postActions
          ),
          userActions
        ),
        tagActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreatePostContainer)
);
exports.default = _default;
//# sourceMappingURL=createPost.containerOld.js.map
