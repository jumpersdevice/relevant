'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
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
var _reactNativeFirebase = require('react-native-firebase');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var createPostActions = _interopRequireWildcard(require('../createPost.actions'));
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var commentActions = _interopRequireWildcard(require('../../comment/comment.actions'));
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var utils = _interopRequireWildcard(require('../../../utils'));
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/mobile/createPostHeaderRight.component.js';
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
var Analytics = (0, _reactNativeFirebase.analytics)();
var styles;
var CreatePostHeaderRight = (function(_Component) {
  (0, _inherits2.default)(CreatePostHeaderRight, _Component);
  var _super = _createSuper(CreatePostHeaderRight);
  function CreatePostHeaderRight(_props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, CreatePostHeaderRight);
    _this = _super.call(this, _props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'editPost',
      (0, _asyncToGenerator2.default)(
        _regenerator.default.mark(function _callee() {
          var props, _props$allTags, allTags, _props$bodyTags, bodyTags, postBody, res;
          return _regenerator.default.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    props = _this.props.createPost;
                    (_props$allTags = props.allTags),
                      (allTags = _props$allTags === void 0 ? [] : _props$allTags),
                      (_props$bodyTags = props.bodyTags),
                      (bodyTags = _props$bodyTags === void 0 ? [] : _props$bodyTags);
                    postBody = _objectSpread(
                      _objectSpread({}, props.editPost),
                      {},
                      {
                        tags: (0, _toConsumableArray2.default)(
                          new Set(
                            [].concat(
                              (0, _toConsumableArray2.default)(allTags),
                              (0, _toConsumableArray2.default)(bodyTags)
                            )
                          )
                        ),
                        body: props.postBody,
                        mentions: props.bodyMentions
                      }
                    );
                    _context.next = 6;
                    return _this.props.actions.editPost(postBody);
                  case 6:
                    res = _context.sent;
                    if (res) {
                      _context.next = 9;
                      break;
                    }
                    throw new Error('Something went wrong... please try again');
                  case 9:
                    _reactNativeWeb.Alert.alert('Success!');
                    _this.props.actions.clearCreatePost();
                    _this.props.navigation.navigate('main');
                    _this.props.actions.setUserSearch([]);
                    _context.next = 18;
                    break;
                  case 15:
                    _context.prev = 15;
                    _context.t0 = _context['catch'](0);
                    _reactNativeWeb.Alert.alert(_context.t0.message);
                  case 18:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[0, 15]]
          );
        })
      )
    );
    _this.state = { creatingPost: false };
    _this.rightButtonAction = _this.rightButtonAction.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.uploadPost = _this.uploadPost.bind((0, _assertThisInitialized2.default)(_this));
    _this.createPost = _this.createPost.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(CreatePostHeaderRight, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev) {
        var createPost = this.props.createPost;
        var edit = createPost.edit,
          postUrl = createPost.postUrl;
        if (edit && postUrl !== prev.createPost.postUrl) {
          this.newUrl = true;
        }
      }
    },
    {
      key: 'rightButtonAction',
      value: function rightButtonAction(props) {
        var _this2 = this;
        if (
          !this.skipUrl &&
          this.props.createPost.postUrl &&
          !this.props.createPost.urlPreview
        ) {
          _reactNativeWeb.Alert.alert(
            'Url is still loading, please give it a few more seconds',
            null,
            [
              {
                text: 'Continue Anyway',
                onPress: function onPress() {
                  _this2.skipUrl = true;
                  return _this2.rightButtonAction(true);
                }
              },
              {
                text: 'Wait',
                onPress: function onPress() {
                  return null;
                }
              }
            ]
          );
          return null;
        }
        this.skipUrl = false;
        if (this.props.createPost.repost) return this.createRepost();
        if (this.props.createPost.edit && !this.newUrl) {
          return this.editPost();
        }
        if (this.enableNext) {
          _reactNativeWeb.Keyboard.dismiss();
          props.navigation.navigate({
            routeName: 'createPostTags',
            params: { title: 'Post Category', next: 'Post' }
          });
        }
        return null;
      }
    },
    {
      key: 'createRepost',
      value: function createRepost() {
        var _this3 = this;
        if (this.state.creatingPost) return;
        var props = this.props.createPost;
        var commentObj = { post: props.repost._id, text: props.postBody, repost: true };
        this.setState({ creatingPost: true });
        this.props.actions.createComment(commentObj).then(function() {
          _this3.props.actions.clearCreatePost();
          _this3.props.actions.setUserSearch([]);
          _this3.setState({ creatingPost: false });
          if (_this3.props.screenProps.close) {
            return _this3.props.screenProps.close();
          }
          _this3.props.navigation.navigate('main');
          _this3.props.navigation.navigate('discover');
          _this3.props.navigation.popToTop();
          _this3.props.actions.setScrollTab('discover', { tab: 0 });
          _this3.props.actions.reloadTab('discover');
          return null;
        });
      }
    },
    {
      key: 'createPost',
      value: function createPost() {
        var _this4 = this;
        if (this.state.creatingPost) return;
        var props = this.props.createPost;
        this.image = null;
        if (!props.allTags.length) {
          _reactNativeWeb.Alert.alert('Please select at least one tag');
          return;
        }
        this.setState({ creatingPost: true });
        if (props.urlPreview && props.urlPreview.image && !props.nativeImage) {
          utils.s3
            .toS3Advanced(props.urlPreview.image)
            .then(function(results) {
              if (results.success) {
                _this4.image = results.url;
                _this4.uploadPost();
              } else {
                _reactNativeWeb.Alert.alert('Error uploading image, please try again');
                _this4.setState({ creatingPost: false });
              }
            })
            .catch(function(err) {
              _reactNativeWeb.Alert.alert('Error uploading image: ', err.message);
              _this4.setState({ creatingPost: false });
            });
        } else {
          this.image =
            props.urlPreview && props.urlPreview.image
              ? props.urlPreview.image
              : props.postImage;
          this.uploadPost();
        }
      }
    },
    {
      key: 'uploadPost',
      value: function uploadPost() {
        var _this5 = this;
        var props = this.props.createPost;
        var postBody = {
          link: props.postUrl,
          tags: (0, _toConsumableArray2.default)(
            new Set(
              [].concat(
                (0, _toConsumableArray2.default)(
                  props.allTags.map(function(tag) {
                    return tag._id;
                  })
                ),
                (0, _toConsumableArray2.default)(props.bodyTags)
              )
            )
          ),
          body: props.postBody,
          title: props.urlPreview ? props.urlPreview.title.trim() : null,
          description: props.urlPreview ? props.urlPreview.description : null,
          category: props.postCategory,
          image: this.image,
          mentions: props.bodyMentions,
          domain: props.domain,
          keywords: props.keywords,
          articleAuthor: props.articleAuthor,
          shortText: props.shortText
        };
        if (props.edit) {
          postBody = _objectSpread(_objectSpread({}, props.editPost), postBody);
          return this.props.actions.editPost(postBody).then(function(res) {
            if (!res) return;
            _reactNativeWeb.Alert.alert('Success!');
            _this5.props.actions.clearCreatePost();
            _this5.props.navigation.navigate('main');
            _this5.props.actions.setUserSearch([]);
          });
        }
        this.props.actions.submitPost(postBody).then(function(results) {
          if (!results) {
            _reactNativeWeb.Alert.alert('Post error please try again');
            return _this5.setState({ creatingPost: false });
          }
          _this5.props.actions.setUserSearch([]);
          _this5.props.actions.clearCreatePost();
          Analytics.logEvent('newPost', { viaShare: _this5.props.share });
          if (_this5.props.screenProps.close) {
            return _this5.props.screenProps.close();
          }
          _this5.props.navigation.navigate('main');
          _this5.props.navigation.navigate('discover');
          _this5.props.navigation.popToTop();
          _this5.props.actions.reloadTab('discover');
          _this5.props.actions.setScrollTab('discover', { tab: 0 });
          return null;
        });
        return null;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this6 = this;
        var state = this.props.navigation.state;
        var params = state.params;
        var postBody = this.props.createPost.postBody;
        if (state.routeName === 'shareAuth') {
          return null;
        }
        this.enableNext = false;
        var hasBody = postBody && postBody.trim().length;
        if (hasBody) {
          this.enableNext = true;
        }
        if (this.state.creatingPost) this.enabledNext = false;
        var rightText = params && params.next ? params.next : 'Post';
        var enabled;
        var rightAction;
        if (state.routeName === 'createPostUrl') {
          enabled = this.enableNext;
          rightAction = function rightAction(p) {
            return _this6.rightButtonAction(p);
          };
        } else {
          enabled = this.props.createPost.allTags.length && !this.state.creatingPost;
          rightAction = function rightAction() {
            return _this6.createPost();
          };
        }
        return _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            key: state.routeName,
            style: [styles.rightButton],
            onPress: function onPress() {
              return rightAction(_this6.props);
            },
            __source: { fileName: _jsxFileName, lineNumber: 264, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [
                { opacity: enabled ? 1 : 0.6 },
                styles.active,
                styles.rightButtonText
              ],
              __source: { fileName: _jsxFileName, lineNumber: 269, columnNumber: 9 }
            },
            rightText
          )
        );
      }
    }
  ]);
  return CreatePostHeaderRight;
})(_react.Component);
(0, _defineProperty2.default)(CreatePostHeaderRight, 'propTypes', {
  actions: _propTypes.default.object,
  createPost: _propTypes.default.object,
  navigation: _propTypes.default.object,
  screenProps: _propTypes.default.object,
  share: _propTypes.default.bool,
  editPost: _propTypes.default.object,
  postBody: _propTypes.default.object,
  repost: _propTypes.default.object,
  urlPreview: _propTypes.default.object,
  postUrl: _propTypes.default.object,
  edit: _propTypes.default.bool
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  rightButton: {
    flex: 1,
    marginRight: _global.mainPadding - 10,
    paddingVertical: 10,
    justifyContent: 'center'
  },
  rightButtonText: {
    textAlign: 'right',
    fontSize: 17,
    fontFamily: 'Helvetica',
    paddingRight: 10
  }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
function mapStateToProps(state) {
  return { createPost: state.createPost };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            _objectSpread(_objectSpread({}, commentActions), navigationActions),
            createPostActions
          ),
          postActions
        ),
        userActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostHeaderRight);
exports.default = _default;
//# sourceMappingURL=createPostHeaderRight.component.js.map
