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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _infScroll = _interopRequireDefault(
  require('../../listview/web/infScroll.component')
);
var _post = _interopRequireDefault(require('../../post/web/post.component'));
var _uni = require('../../styled/uni');
var _post2 = require('../../../utils/post');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/web/userPosts.component.js';
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
var UserPosts = (function(_Component) {
  (0, _inherits2.default)(UserPosts, _Component);
  var _super = _createSuper(UserPosts);
  function UserPosts(props) {
    var _this;
    (0, _classCallCheck2.default)(this, UserPosts);
    _this = _super.call(this, props);
    _this.state = { postsToRender: [], isInfiniteLoading: false };
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.hasMore = true;
    return _this;
  }
  (0, _createClass2.default)(UserPosts, [
    {
      key: 'load',
      value: function load(page, length) {
        this.hasMore = page * this.props.pageSize <= length;
        if (this.hasMore) {
          this.props.load(length);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var community = this.props.community;
        var userId = this.props.match.params.id;
        var postIds = this.props.posts.userPosts[userId] || [];
        var posts = postIds.map(function(id) {
          var post = _this2.props.posts.posts[id];
          if (!post) return null;
          var repost = post.repost ? _this2.props.posts.posts[post.repost.post] : null;
          var postUser = _objectSpread(
            _objectSpread({}, post.embeddedUser),
            {},
            { _id: post.user }
          );
          var parentPost;
          var parentId = post.parentPost;
          if (parentId) {
            parentPost = _this2.props.posts.posts[parentId];
          }
          var postUrl = (0, _post2.getPostUrl)(community, post);
          var link = _this2.props.posts.links[post.metaPost];
          if (!link && parentPost) {
            link = _this2.props.posts.links[parentPost.metaPost];
          }
          return _react.default.createElement(
            _uni.View,
            {
              shrink: 1,
              key: id,
              fdirection: 'column',
              __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 9 }
            },
            _react.default.createElement(
              _post.default,
              (0, _extends2.default)({}, _this2.props, {
                post: parentPost,
                comment: post,
                link: _objectSpread(_objectSpread({}, parentPost), link),
                repost: repost,
                postUser: postUser,
                community: community._id,
                postUrl: postUrl,
                __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 11 }
              })
            )
          );
        });
        var length = posts.length;
        return _react.default.createElement(
          _infScroll.default,
          {
            key: 'userPosts',
            data: postIds,
            loadMore: function loadMore(p) {
              return _this2.load(p, length);
            },
            hasMore: this.hasMore,
            __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              fdirection: 'column',
              shrink: 1,
              __source: { fileName: _jsxFileName, lineNumber: 84, columnNumber: 9 }
            },
            posts
          )
        );
      }
    }
  ]);
  return UserPosts;
})(_react.Component);
(0, _defineProperty2.default)(UserPosts, 'propTypes', {
  pageSize: _propTypes.default.number,
  load: _propTypes.default.func,
  match: _propTypes.default.object,
  posts: _propTypes.default.object,
  community: _propTypes.default.object
});
var _default = UserPosts;
exports.default = _default;
//# sourceMappingURL=userPosts.component.js.map
