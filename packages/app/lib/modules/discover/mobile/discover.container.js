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
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _post = _interopRequireDefault(require('../../post/mobile/post.component'));
var _get = _interopRequireDefault(require('lodash/get'));
var statsActions = _interopRequireWildcard(require('../../stats/stats.actions'));
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var tagActions = _interopRequireWildcard(require('../../tag/tag.actions'));
var investActions = _interopRequireWildcard(require('../../post/invest.actions'));
var animationActions = _interopRequireWildcard(
  require('../../animation/animation.actions')
);
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var createPostActions = _interopRequireWildcard(
  require('../../createPost/createPost.actions')
);
var _global = require('../../../styles/global');
var _customList = _interopRequireDefault(
  require('../../listview/mobile/customList.component')
);
var _TwitterButton = _interopRequireDefault(
  require('../../auth/mobile/TwitterButton.component')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/mobile/discover.container.js';
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
var styles;
var POST_PAGE_SIZE = 15;
var Discover = (function(_Component) {
  (0, _inherits2.default)(Discover, _Component);
  var _super = _createSuper(Discover);
  function Discover(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Discover);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'shouldComponentUpdate',
      function(next) {
        return next.active && next.navigation.isFocused();
      }
    );
    _this.state = { offsetY: 50, view: 0 };
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderHeader = _this.renderHeader.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.scrollToTop = _this.scrollToTop.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.needsReload = new Date().getTime();
    _this.myTabs = [
      { id: 0, title: 'Trending', type: 'top' },
      { id: 1, title: 'New', type: 'new' },
      { id: 2, title: 'People', type: 'people' },
      { id: 3, title: 'Twitter', type: 'twitterFeed' }
    ];
    _this.loaded = true;
    _this.type = _this.props.type;
    _this.state.view = _this.myTabs.find(function(tab) {
      return tab.type === _this.type;
    }).id;
    return _this;
  }
  (0, _createClass2.default)(Discover, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.navigation.state.params) {
          this.topic = this.props.navigation.state.params.topic;
          this.topic = this.topic && this.topic._id ? this.topic._id : this.topic;
          this.filter = this.topic ? [this.topic] : [];
        }
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(next) {
        var type = this.myTabs[this.state.view].type;
        if (
          this.props.tags.selectedTags !== next.tags.selectedTags &&
          type !== 'people'
        ) {
          this.filter = next.tags.selectedTags;
          this.needsReload = new Date().getTime();
        }
        if (this.props.refresh !== next.refresh && this.props.active) {
          if (this.scrollOffset !== -50) this.scrollToTop();
        }
        if (this.props.reload !== next.reload) {
          this.needsReload = new Date().getTime();
        }
        if (this.props.auth.community !== next.auth.community) {
          this.needsReload = new Date().getTime();
        }
      }
    },
    {
      key: 'getViewData',
      value: function getViewData(props, view) {
        switch (view) {
          case 0:
            if (this.topic) {
              return {
                data: props.posts.topics.top[this.topic],
                loaded: props.posts.loaded.topics[this.topic]
                  ? props.posts.loaded.topics[this.topic].top
                  : false
              };
            }
            return { data: props.posts.top, loaded: props.posts.loaded.top };
          case 1:
            if (this.topic) {
              return {
                data: props.posts.topics.new[this.topic],
                loaded: props.posts.loaded.topics[this.topic]
                  ? props.posts.loaded.topics[this.topic].new
                  : false
              };
            }
            return { data: props.posts.new, loaded: props.posts.loaded.new };
          default:
            return null;
        }
      }
    },
    {
      key: 'scrollToTop',
      value: function scrollToTop() {
        var view = this.listview;
        if (view && view.listview) {
          view.listview.scrollToOffset({ offset: -this.props.offsetY });
        }
      }
    },
    {
      key: 'load',
      value: function load(view, length) {
        if (!view) view = this.state.view;
        if (!length) length = 0;
        var tags = this.filter;
        switch (view) {
          case 0:
            this.props.actions.getPosts(length, tags, 'rank', POST_PAGE_SIZE);
            break;
          case 1:
            this.props.actions.getPosts(length, tags, null, POST_PAGE_SIZE);
            break;
          default:
        }
      }
    },
    {
      key: 'renderHeader',
      value: function renderHeader() {
        if (
          this.state.view !== 3 ||
          (0, _get.default)(this.props.auth, 'user.twitterId')
        ) {
          return null;
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { paddingBottom: 20, paddingHorizontal: _global.mainPadding },
            __source: { fileName: _jsxFileName, lineNumber: 150, columnNumber: 7 }
          },
          _react.default.createElement(
            _TwitterButton.default,
            {
              auth: this.props.auth,
              actions: this.props.actions,
              __source: { fileName: _jsxFileName, lineNumber: 151, columnNumber: 9 }
            },
            'Connect Twitter Account'
          ),
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [styles.smallInfo, { paddingTop: 5, textAlign: 'center' }],
              __source: { fileName: _jsxFileName, lineNumber: 154, columnNumber: 9 }
            },
            'Connect your accont to see relevant post from your twitter feed'
          )
        );
      }
    },
    {
      key: 'renderRow',
      value: function renderRow(rowData, view, i) {
        var posts = this.props.posts;
        var type = this.myTabs[view].type;
        return _react.default.createElement(PostEl, {
          type: type,
          rowData: rowData,
          posts: posts,
          index: i,
          __source: { fileName: _jsxFileName, lineNumber: 164, columnNumber: 12 }
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var dataEl = [];
        if (this.loaded) {
          var tabData = this.getViewData(this.props, this.state.view) || [];
          dataEl = _react.default.createElement(_customList.default, {
            ref: function ref(c) {
              return (_this2.listview = c);
            },
            key: this.state.view + this.topic,
            data: tabData.data || [],
            loaded: tabData.loaded,
            renderRow: this.renderRow,
            renderHeader: this.renderHeader,
            load: this.load,
            type: 'posts',
            parent: 'discover',
            view: this.state.view,
            active: this.props.active,
            YOffset: this.props.offsetY,
            onScroll: this.props.onScroll,
            needsReload: this.needsReload,
            scrollableTab: true,
            error: this.props.error,
            __source: { fileName: _jsxFileName, lineNumber: 173, columnNumber: 9 }
          });
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { backgroundColor: 'hsl(0,0%,100%)', flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 194, columnNumber: 12 }
          },
          dataEl
        );
      }
    }
  ]);
  return Discover;
})(_react.Component);
(0, _defineProperty2.default)(Discover, 'propTypes', {
  type: _propTypes.default.string,
  navigation: _propTypes.default.object,
  tags: _propTypes.default.object,
  refresh: _propTypes.default.number,
  active: _propTypes.default.bool,
  reload: _propTypes.default.number,
  offsetY: _propTypes.default.number,
  actions: _propTypes.default.object,
  auth: _propTypes.default.object,
  onScroll: _propTypes.default.func,
  error: _propTypes.default.bool,
  posts: _propTypes.default.object
});
PostEl.propTypes = {
  posts: _propTypes.default.object,
  rowData: _propTypes.default.string,
  type: _propTypes.default.string,
  index: _propTypes.default.number
};
function PostEl(_ref) {
  var posts = _ref.posts,
    rowData = _ref.rowData,
    type = _ref.type,
    index = _ref.index;
  var post = posts.posts[rowData];
  var commentary = (0, _react.useMemo)(
    function() {
      if (!post) return null;
      return post[type].map(function(c) {
        return posts.posts[c];
      });
    },
    [posts.posts, post, type]
  );
  if (!post) return null;
  var link = posts.links[post.metaPost];
  return _react.default.createElement(_post.default, {
    tooltip: parseInt(index, 10) === 0 || false,
    post: post,
    commentary: commentary,
    link: link,
    styles: styles,
    posts: posts,
    __source: { fileName: _jsxFileName, lineNumber: 217, columnNumber: 5 }
  });
}
var localStyles = _reactNativeWeb.StyleSheet.create({
  padding20: { padding: 20 },
  listStyle: { height: 100 },
  listScroll: { height: 100, borderWidth: 1, borderColor: 'red' },
  scrollPadding: { marginTop: 300 }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts,
    animation: state.animation,
    stats: state.stats,
    userList: state.user.list,
    tags: state.tags,
    error: state.error.discover,
    refresh: state.navigation.discover.refresh,
    reload: state.navigation.discover.reload,
    topics: state.navigation.showTopics
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            _objectSpread(
              _objectSpread(
                _objectSpread(
                  _objectSpread(_objectSpread({}, postActions), animationActions),
                  tagActions
                ),
                investActions
              ),
              statsActions
            ),
            authActions
          ),
          navigationActions
        ),
        createPostActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Discover);
exports.default = _default;
//# sourceMappingURL=discover.container.js.map
