'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _postinfo = _interopRequireDefault(require('./postinfo.component'));
var _postinfoMobile = _interopRequireDefault(require('./postinfo.mobile.component'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _uni = require('../styled/uni');
var navigationActions = _interopRequireWildcard(
  require('../navigation/navigation.actions')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/postPreview.container.js';
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
var PostPreview = function PostPreview(props) {
  var posts = props.posts,
    postId = props.postId,
    community = props.community,
    actions = props.actions,
    auth = props.auth,
    screenSize = props.screenSize;
  var post = posts.posts[postId];
  if (!post) return null;
  var link = post && post.metaPost && posts.links[post.metaPost];
  var parentId = post.parentPost ? post.parentPost._id || post.parentPost : post._id;
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 5 } },
    _react.default.createElement(
      _ULink.default,
      {
        onPress: function onPress() {
          return actions.goToPost({ _id: parentId, community: community });
        },
        to: '/'.concat(community, '/post/').concat(parentId),
        __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        { __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 9 } },
        screenSize
          ? _react.default.createElement(_postinfoMobile.default, {
              preview: true,
              link: link,
              post: post,
              noLink: true,
              __source: { fileName: _jsxFileName, lineNumber: 27, columnNumber: 13 }
            })
          : _react.default.createElement(_postinfo.default, {
              preview: true,
              link: link,
              post: post,
              noLink: true,
              auth: auth,
              __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 13 }
            })
      )
    )
  );
};
PostPreview.propTypes = {
  posts: _propTypes.default.object,
  screenSize: _propTypes.default.number,
  postId: _propTypes.default.string,
  community: _propTypes.default.string,
  actions: _propTypes.default.object,
  auth: _propTypes.default.object
};
function mapStateToProps(state) {
  return { posts: state.posts, auth: state.auth };
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread({}, navigationActions),
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostPreview);
exports.default = _default;
//# sourceMappingURL=postPreview.container.js.map
