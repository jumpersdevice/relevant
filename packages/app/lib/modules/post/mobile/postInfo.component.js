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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _reactNativeBottomsheet = _interopRequireDefault(require('react-native-bottomsheet'));
var _Ionicons = _interopRequireDefault(require('react-native-vector-icons/Ionicons'));
var _global = require('../../../styles/global');
var _comment = _interopRequireDefault(require('../../comment/comment.author'));
var _post = require('../post.actions');
var _navigation = require('../../navigation/navigation.actions');
var _createPost = require('../../createPost/createPost.actions');
var _tag = require('../../tag/tag.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/postInfo.component.js';
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
var PostInfo = (function(_Component) {
  (0, _inherits2.default)(PostInfo, _Component);
  var _super = _createSuper(PostInfo);
  function PostInfo(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, PostInfo);
    _this = _super.call(this, props, context);
    _this.setTag = _this.setTag.bind((0, _assertThisInitialized2.default)(_this));
    _this.setSelected = _this.setSelected.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.state = {
      passed: false,
      invested: false,
      timeUntilString: null,
      timePassedPercent: 0,
      time: 0,
      posted: null,
      input: null
    };
    _this.ownerMenu = {
      myPost: true,
      buttons: ['Edit', 'Delete', 'Cancel'],
      destructiveIndex: 1,
      cancelIndex: 2
    };
    _this.showActionSheet = _this.showActionSheet.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(PostInfo, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this$props = this.props,
          auth = _this$props.auth,
          user = _this$props.user;
        if (!user) return;
        if (auth && auth.user && user._id === auth.user._id) {
          this.menu = this.ownerMenu;
          this.myPost = true;
        }
      }
    },
    {
      key: 'deletePost',
      value: function deletePost() {
        var _this$props2 = this.props,
          singlePost = _this$props2.singlePost,
          actions = _this$props2.actions,
          post = _this$props2.post;
        var redirect = false;
        if (singlePost) redirect = true;
        actions.deletePost(post, redirect);
      }
    },
    {
      key: 'toggleEditing',
      value: function toggleEditing() {
        var _this$props3 = this.props,
          post = _this$props3.post,
          actions = _this$props3.actions;
        actions.setCreatePostState({
          postBody: post.body,
          nativeImage: true,
          postUrl: post.url,
          postImage: post.image,
          allTags: post.tags,
          urlPreview: {
            image: post.image,
            title: post.title ? post.title : 'Untitled',
            description: post.description
          },
          edit: true,
          editPost: post
        });
        actions.push({
          key: 'createPost',
          back: true,
          title: 'Edit Post',
          next: 'Update',
          left: 'Cancel'
        });
      }
    },
    {
      key: 'setTag',
      value: function setTag(tag) {
        var actions = this.props.actions;
        if (!tag) return;
        actions.selectTag(tag);
        actions.changeTab('discover');
      }
    },
    {
      key: 'setSelected',
      value: function setSelected() {
        var _this$props4 = this.props,
          actions = _this$props4.actions,
          post = _this$props4.post;
        if (!actions) return null;
        if (this.props.post.twitter) {
          return _reactNativeWeb.Linking.openURL(
            'https://twitter.com/' + post.embeddedUser.handle
          );
        }
        return actions.goToProfile(post.embeddedUser);
      }
    },
    {
      key: 'showActionSheet',
      value: function showActionSheet() {
        var _this2 = this;
        var _this$props5 = this.props,
          post = _this$props5.post,
          actions = _this$props5.actions;
        if (this.myPost) {
          return ActionSheet.showActionSheetWithOptions(
            {
              options: this.menu.buttons,
              cancelButtonIndex: this.menu.cancelIndex,
              destructiveButtonIndex: this.menu.destructiveIndex
            },
            function(buttonIndex) {
              switch (buttonIndex) {
                case 0:
                  if (_this2.props.edit) _this2.props.edit();
                  else _this2.toggleEditing();
                  break;
                case 1:
                  if (_this2.props.delete) _this2.props.delete();
                  else _this2.deletePost();
                  break;
                default:
              }
            }
          );
        }
        return ActionSheet.showActionSheetWithOptions(
          { options: ['Flag Inappropriate Content', 'Cancel'], cancelButtonIndex: 1 },
          function(buttonIndex) {
            switch (buttonIndex) {
              case 0:
                actions.flag(post);
                break;
              default:
            }
          }
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var _this$props6 = this.props,
          post = _this$props6.post,
          preview = _this$props6.preview,
          repost = _this$props6.repost,
          user = _this$props6.user,
          avatarText = _this$props6.avatarText;
        if (!user) return null;
        var postActions = _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            style: [styles.postButton, { paddingRight: 10 }],
            onPress: function onPress() {
              return _this3.showActionSheet();
            },
            __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 7 }
          },
          _react.default.createElement(_Ionicons.default, {
            name: 'ios-more',
            size: 24,
            color: _global.greyText,
            __source: { fileName: _jsxFileName, lineNumber: 178, columnNumber: 9 }
          })
        );
        var popup = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [styles.infoRight],
            __source: { fileName: _jsxFileName, lineNumber: 182, columnNumber: 19 }
          },
          repost ? null : postActions
        );
        return _react.default.createElement(_comment.default, {
          avatarText: avatarText,
          comment: post,
          user: user,
          popup: !preview && popup,
          preview: preview,
          __source: { fileName: _jsxFileName, lineNumber: 185, columnNumber: 7 }
        });
      }
    }
  ]);
  return PostInfo;
})(_react.Component);
(0, _defineProperty2.default)(PostInfo, 'propTypes', {
  post: _propTypes.default.object,
  auth: _propTypes.default.object,
  singlePost: _propTypes.default.bool,
  actions: _propTypes.default.object,
  edit: _propTypes.default.func,
  delete: _propTypes.default.func,
  preview: _propTypes.default.bool,
  repost: _propTypes.default.bool,
  user: _propTypes.default.object,
  avatarText: _propTypes.default.func
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  infoRight: { justifyContent: 'flex-end', overflow: 'visible', alignSelf: 'center' }
});
var mapStateToProps = function mapStateToProps() {
  return {};
};
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        deletePost: _post.deletePost,
        flag: _post.flag,
        push: _navigation.push,
        changeTab: _navigation.changeTab,
        goToProfile: _navigation.goToProfile,
        setCreatePostState: _createPost.setCreatePostState,
        selectTag: _tag.selectTag
      },
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostInfo);
exports.default = _default;
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=postInfo.component.js.map
