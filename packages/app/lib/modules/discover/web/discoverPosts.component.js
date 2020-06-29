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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _infScroll = _interopRequireDefault(
  require('../../listview/web/infScroll.component')
);
var _post = _interopRequireDefault(require('../../post/web/post.component'));
var _get = _interopRequireDefault(require('lodash/get'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/web/discoverPosts.component.js';
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
var DiscoverPosts = (function(_Component) {
  (0, _inherits2.default)(DiscoverPosts, _Component);
  var _super = _createSuper(DiscoverPosts);
  function DiscoverPosts(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DiscoverPosts);
    _this = _super.call(this, props);
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.hasMore = true;
    return _this;
  }
  (0, _createClass2.default)(DiscoverPosts, [
    {
      key: 'getData',
      value: function getData(sort, tag) {
        var data;
        if (sort === 'feed') {
          data = this.props.posts.feed;
        } else {
          data = tag ? this.props.posts.topics[sort][tag] : this.props.posts[sort];
        }
        return data || [];
      }
    },
    {
      key: 'load',
      value: function load(page, length) {
        this.hasMore = page * this.props.pageSize <= length;
        if (this.hasMore) {
          this.props.load(null, null, length);
        }
      }
    },
    {
      key: 'renderFeed',
      value: function renderFeed() {
        var _this2 = this;
        return this.props.posts.feed.map(function(id) {
          var post = _this2.props.posts.posts[id];
          var repost = post.repost ? _this2.props.posts.posts[post.repost.post] : null;
          return _react.default.createElement(Post, {
            key: id,
            post: post,
            repost: repost,
            __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 14 }
          });
        });
      }
    },
    {
      key: 'renderDiscover',
      value: function renderDiscover(sort, tag) {
        var _this3 = this;
        var postIds = tag ? this.props.posts.topics[sort][tag] : this.props.posts[sort];
        var posts = this.props.posts.posts;
        return (postIds || []).map(function(id) {
          var post = posts[id];
          if (!post) return null;
          var link = _this3.props.posts.links[post.metaPost];
          var commentId = (0, _get.default)(post, ''.concat(sort, '.0'));
          var comment = posts[commentId];
          var repost = post.repost ? _this3.props.posts.posts[post.repost.post] : null;
          return _react.default.createElement(_post.default, {
            key: id,
            post: post,
            link: link,
            repost: repost,
            comment: comment,
            __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 9 }
          });
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this;
        var _this$props = this.props,
          sort = _this$props.sort,
          tag = _this$props.tag;
        var data = this.getData(sort, tag);
        var posts = this.renderDiscover(sort, tag);
        var length = posts.length;
        return _react.default.createElement(
          'div',
          {
            style: { position: 'relative' },
            __source: { fileName: _jsxFileName, lineNumber: 92, columnNumber: 7 }
          },
          _react.default.createElement(
            _infScroll.default,
            {
              key: this.props.auth.community,
              className: 'parent',
              data: data,
              loadMore: function loadMore(p) {
                return _this4.load(p, length);
              },
              hasMore: this.hasMore,
              style: { position: 'relative' },
              __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 9 }
            },
            posts
          )
        );
      }
    }
  ]);
  return DiscoverPosts;
})(_react.Component);
(0, _defineProperty2.default)(DiscoverPosts, 'propTypes', {
  posts: _propTypes.default.object,
  pageSize: _propTypes.default.number,
  load: _propTypes.default.func,
  sort: _propTypes.default.string,
  tag: _propTypes.default.string,
  auth: _propTypes.default.object
});
var _default = DiscoverPosts;
exports.default = _default;
//# sourceMappingURL=discoverPosts.component.js.map
