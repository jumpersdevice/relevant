'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _reactNativeWeb = require('react-native-web');
var _reactNativeBottomsheet = _interopRequireDefault(require('react-native-bottomsheet'));
var _reactNativeShare = _interopRequireDefault(require('react-native-share'));
var _post = require('../../../utils/post');
var _navigation = require('../../navigation/navigation.actions');
var _createPost = require('../../createPost/createPost.actions');
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _hooks = require('../../auth/hooks');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/buttonRow.js';
var ActionSheet = _reactNativeWeb.ActionSheetIOS;
if (_reactNativeWeb.Platform.OS === 'android') {
  ActionSheet = _reactNativeBottomsheet.default;
  ActionSheet.showActionSheetWithOptions =
    _reactNativeBottomsheet.default.showBottomSheetWithOptions;
}
var linkMenu = {
  buttons: ['Repost Article', 'Share Via...', 'Open Link in Browser', 'Cancel'],
  cancelIndex: 3
};
var defaultMenu = { buttons: ['Share Via...', 'Cancel'], cancelIndex: 2 };
ButtonRow.propTypes = {
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
  ])
};
var _default = (0, _react.memo)(ButtonRow);
exports.default = _default;
function ButtonRow(_ref) {
  var link = _ref.link,
    post = _ref.post,
    parentPost = _ref.parentPost,
    singlePost = _ref.singlePost,
    focusInput = _ref.focusInput,
    comment = _ref.comment,
    setupReply = _ref.setupReply;
  var auth = (0, _reactRedux.useSelector)(function(state) {
    return state.auth;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var menu = link ? linkMenu : defaultMenu;
  var hasAuth = (0, _hooks.useAuth)();
  var onShare = function onShare() {
    var community = auth.community;
    if (!hasAuth()) return;
    var postUrl = (0, _post.getPostUrl)(community, post);
    var title = (0, _post.getTitle)({ post: post });
    _reactNativeShare.default
      .open({
        title: title || '',
        url: 'https://relevant.community' + postUrl,
        subject: 'Share Link'
      })
      .catch(function(err) {
        return console.log(err);
      });
  };
  function showActionSheet() {
    if (!hasAuth()) return;
    ActionSheet.showActionSheetWithOptions(
      {
        options: menu.buttons,
        cancelButtonIndex: menu.cancelIndex,
        destructiveButtonIndex: menu.destructiveIndex
      },
      function(buttonIndex) {
        if (link) {
          switch (buttonIndex) {
            case 0:
              return repostUrl();
            case 1:
              return onShare();
            case 2:
              return _reactNativeWeb.Linking.openURL(link.url);
            default:
              return null;
          }
        }
        switch (buttonIndex) {
          case 0:
            return onShare();
          default:
            return null;
        }
      }
    );
  }
  function repostUrl() {
    if (!hasAuth()) return;
    if (!link) return;
    dispatch(
      (0, _createPost.setCreatePostState)({
        postBody: '',
        component: 'createPost',
        nativeImage: true,
        postUrl: link.url,
        postImage: link.image,
        urlPreview: {
          image: link.image,
          title: link.title ? link.title : 'Untitled',
          description: link.description
        }
      })
    );
    dispatch((0, _navigation.push)({ key: 'createPost', title: 'Add Commentary' }));
  }
  function NavigateToPost(openComment) {
    if (openComment && !hasAuth()) return;
    var _parentPost = parentPost || post;
    var parentPostId = _parentPost._id || _parentPost;
    if (singlePost) {
      if (setupReply) setupReply(post);
      if (focusInput) focusInput();
      return;
    }
    dispatch(
      (0, _navigation.goToPost)({ _id: parentPostId, comment: comment }, openComment)
    );
  }
  var isLink = !post.parentPost && post.url;
  return _react.default.createElement(
    _uni.View,
    {
      fdirection: 'row',
      __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 5 }
    },
    _react.default.createElement(
      _reactNativeWeb.TouchableOpacity,
      {
        onPress: function onPress() {
          return isLink ? repostUrl() : NavigateToPost(true);
        },
        style: { paddingHorizontal: 12 },
        __source: { fileName: _jsxFileName, lineNumber: 144, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        {
          style: [{ flexDirection: 'row', alignItems: 'center' }],
          __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.CTALink,
          {
            c: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 149, columnNumber: 11 }
          },
          isLink ? 'Comment' : 'Reply'
        ),
        post.commentCount && !isLink
          ? _react.default.createElement(
              _uni.CTALink,
              { __source: { fileName: _jsxFileName, lineNumber: 151, columnNumber: 13 } },
              ' (',
              post.commentCount,
              ')'
            )
          : null
      )
    ),
    _react.default.createElement(
      _reactNativeWeb.TouchableOpacity,
      {
        style: { paddingRight: 8 },
        onPress: function onPress() {
          return showActionSheet();
        },
        __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        {
          style: [{ flexDirection: 'column', alignItems: 'center' }],
          __source: { fileName: _jsxFileName, lineNumber: 157, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.CTALink,
          {
            c: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 158, columnNumber: 11 }
          },
          'Share'
        )
      )
    )
  );
}
//# sourceMappingURL=buttonRow.js.map
