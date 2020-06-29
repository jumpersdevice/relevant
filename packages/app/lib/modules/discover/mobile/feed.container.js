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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _global = require('../../../styles/global');
var _post = _interopRequireDefault(require('../../post/mobile/post.component'));
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var createPostActions = _interopRequireWildcard(
  require('../../createPost/createPost.actions')
);
var investActions = _interopRequireWildcard(require('../../post/invest.actions'));
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var tagActions = _interopRequireWildcard(require('../../tag/tag.actions'));
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var _customList = _interopRequireDefault(
  require('../../listview/mobile/customList.component')
);
var animationActions = _interopRequireWildcard(
  require('../../animation/animation.actions')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/mobile/feed.container.js';
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
var Read = (function(_Component) {
  (0, _inherits2.default)(Read, _Component);
  var _super = _createSuper(Read);
  function Read(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Read);
    _this = _super.call(this, props, context);
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.needsReload = new Date().getTime();
    _this.renderHeader = _this.renderHeader.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.tooltipParent = {};
    _this.toggleTooltip = _this.toggleTooltip.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.initTooltips = _this.initTooltips.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.tabs = [{ id: 0, title: 'Feed', type: 'feed' }];
    return _this;
  }
  (0, _createClass2.default)(Read, [
    { key: 'componentWillMount', value: function componentWillMount() {} },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(next) {
        if (this.props.refresh !== next.refresh && this.props.active) {
          this.scrollToTop();
        }
        if (this.props.reload !== next.reload) {
          this.needsReload = new Date().getTime();
        }
        if (this.props.reloadFeed !== next.reloadFeed) {
          this.props.actions.getSubscriptions();
        }
        if (next.posts.feedUnread && next.active && !this.props.active) {
          this.needsReload = new Date().getTime();
        }
      }
    },
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(next) {
        if (!next.active) return false;
        return true;
      }
    },
    {
      key: 'initTooltips',
      value: function initTooltips() {
        var _this2 = this;
        ['subscriptions'].forEach(function(name) {
          _this2.props.actions.setTooltipData({
            name: name,
            toggle: function toggle() {
              return _this2.toggleTooltip(name);
            }
          });
        });
      }
    },
    {
      key: 'toggleTooltip',
      value: function toggleTooltip(name) {
        var _this3 = this;
        if (!this.tooltipParent[name]) return;
        this.tooltipParent[name].measureInWindow(function(x, y, w, h) {
          var parent = { x: x, y: y, w: w, h: h };
          if (x + y + w + h === 0) return;
          _this3.props.actions.setTooltipData({ name: name, parent: parent });
          _this3.props.actions.showTooltip(name);
        });
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
        var _this$props$posts = this.props.posts,
          tag = _this$props$posts.tag,
          actions = _this$props$posts.actions,
          posts = _this$props$posts.posts;
        if (!length) length = 0;
        if (length === 0) actions.getSubscriptions();
        actions.getFeed(length, tag);
        if (posts.feedUnread) {
          actions.markFeedRead();
        }
      }
    },
    {
      key: 'renderHeader',
      value: function renderHeader() {
        var _this4 = this;
        var _this$props$subscript = this.props.subscriptions,
          total = _this$props$subscript.total,
          totalUsers = _this$props$subscript.totalUsers;
        if (!total) return null;
        setTimeout(this.initTooltips, 0);
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: styles.feedHeader,
            ref: function ref(c) {
              return (_this4.tooltipParent.subscriptions = c);
            },
            __source: { fileName: _jsxFileName, lineNumber: 117, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              onPress: function onPress() {
                return _this4.toggleTooltip('subscriptions');
              },
              style: [styles.font10, { color: 'white' }],
              __source: { fileName: _jsxFileName, lineNumber: 118, columnNumber: 9 }
            },
            'You are subscribed to ',
            total,
            ' post',
            total > 1 ? 's' : '',
            ' from ',
            totalUsers,
            ' user',
            totalUsers > 1 ? 's' : ''
          )
        );
      }
    },
    {
      key: 'renderRow',
      value: function renderRow(rowData) {
        var post = this.props.posts.posts[rowData];
        return _react.default.createElement(
          _post.default,
          (0, _extends2.default)({ post: post }, this.props, {
            styles: styles,
            __source: { fileName: _jsxFileName, lineNumber: 131, columnNumber: 12 }
          })
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this5 = this;
        var _this$props$subscript2 = this.props.subscriptions,
          total = _this$props$subscript2.total,
          totalUsers = _this$props$subscript2.totalUsers;
        var feedEl = [];
        var filler = _react.default.createElement(
          _reactNativeWeb.View,
          { __source: { fileName: _jsxFileName, lineNumber: 139, columnNumber: 7 } },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [
                styles.georgia,
                styles.darkGrey,
                styles.emptyText,
                styles.quarterLetterSpacing
              ],
              __source: { fileName: _jsxFileName, lineNumber: 140, columnNumber: 9 }
            },
            !total
              ? 'You have not subscribed to anyone yet'
              : 'You have subscribed to ' +
                  totalUsers +
                  ' user' +
                  (totalUsers > 1 ? 's' : '') +
                  ' — find their future posts here!'
          ),
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              onPress: function onPress() {
                _this5.props.actions.setScrollTab('discover', 1);
              },
              style: [
                styles.libre,
                styles.darkGrey,
                { fontSize: 40, textAlign: 'center' }
              ],
              __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 9 }
            },
            !total
              ? '😎\nUpvote posts to subscribe to users'
              : '😛\nKeep upvoting to subscribe to more users'
          )
        );
        this.tabs.forEach(function(tab) {
          var tabData = _this5.props.posts.feed;
          var loaded = _this5.props.posts.loaded.feed;
          feedEl.push(
            _react.default.createElement(
              _customList.default,
              {
                ref: function ref(c) {
                  _this5.listview = c;
                },
                key: tab.id,
                data: tabData,
                loaded: loaded,
                renderRow: _this5.renderRow,
                renderHeader: _this5.renderHeader,
                load: _this5.load,
                view: tab.id,
                type: 'posts',
                parent: 'feed',
                active: _this5.props.active,
                YOffset: _this5.props.offsetY,
                onScroll: _this5.props.onScroll,
                needsReload: _this5.needsReload,
                actions: _this5.props.actions,
                error: _this5.props.error,
                __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 9 }
              },
              filler
            )
          );
        });
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [styles.fullContainer, { backgroundColor: 'hsl(0,0%,100%)' }],
            __source: { fileName: _jsxFileName, lineNumber: 200, columnNumber: 7 }
          },
          feedEl
        );
      }
    }
  ]);
  return Read;
})(_react.Component);
(0, _defineProperty2.default)(Read, 'propTypes', {
  refresh: _propTypes.default.object,
  active: _propTypes.default.object,
  reload: _propTypes.default.object,
  reloadFeed: _propTypes.default.object,
  actions: _propTypes.default.object,
  offsetY: _propTypes.default.number,
  posts: _propTypes.default.object,
  subscriptions: _propTypes.default.object,
  onScroll: _propTypes.default.func,
  error: _propTypes.default.string
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  feedHeader: { padding: 10, alignItems: 'center', backgroundColor: _global.blue },
  thirstyHeader: {
    alignItems: 'center',
    borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderBottomColor: '#F0F0F0',
    padding: 10,
    flexDirection: 'row'
  },
  messagesCount: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  recentNames: { flexDirection: 'row' },
  recentName: { color: 'gray' },
  readHeader: { marginBottom: 10 }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts,
    messages: state.messages,
    refresh: state.navigation.discover.refresh,
    reload: state.navigation.discover.reload,
    reloadFeed: state.navigation.read.reload,
    error: state.error.read,
    tabs: state.navigation.tabs,
    subscriptions: state.subscriptions
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
                  investActions
                ),
                userActions
              ),
              tagActions
            ),
            navigationActions
          ),
          authActions
        ),
        createPostActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Read);
exports.default = _default;
//# sourceMappingURL=feed.container.js.map
