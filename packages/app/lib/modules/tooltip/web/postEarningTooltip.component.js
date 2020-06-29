'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _postinfo = _interopRequireDefault(require('../../post/postinfo.component'));
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/tooltip/web/postEarningTooltip.component.js';
var EarningTooltip = function EarningTooltip(props) {
  var earning = props.earning,
    posts = props.posts,
    navigation = props.navigation,
    auth = props.auth;
  var postId = earning.post;
  var post = posts.posts[postId];
  if (!post) {
    return _react.default.createElement(
      'div',
      { __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 12 } },
      'No Post'
    );
  }
  var link;
  if (post && post.metaPost) {
    link = posts.links[post.metaPost];
  }
  return _react.default.createElement(
    'div',
    { __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 5 } },
    _react.default.createElement(
      _ULink.default,
      {
        to: '/'
          .concat(earning.community, '/post/')
          .concat(post.parentPost ? post.parentPost : post._id),
        __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 7 }
      },
      _react.default.createElement(_postinfo.default, {
        link: link,
        post: post,
        community: earning.community,
        noLink: true,
        navigation: navigation,
        auth: auth,
        __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 9 }
      })
    )
  );
};
EarningTooltip.propTypes = {
  earning: _propTypes.default.object,
  posts: _propTypes.default.object,
  navigation: _propTypes.default.object,
  auth: _propTypes.default.object
};
function mapStateToProps(state) {
  return { posts: state.posts, navigation: state.navigation, auth: state.auth };
}
var _default = (0, _reactRedux.connect)(mapStateToProps)(EarningTooltip);
exports.default = _default;
//# sourceMappingURL=postEarningTooltip.component.js.map
