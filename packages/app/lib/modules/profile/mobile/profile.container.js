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
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _global = require('../../../styles/global');
var _post2 = _interopRequireDefault(require('../../post/mobile/post.component'));
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var createPostActions = _interopRequireWildcard(
  require('../../createPost/createPost.actions')
);
var tooltipActions = _interopRequireWildcard(require('../../tooltip/tooltip.actions'));
var tagActions = _interopRequireWildcard(require('../../tag/tag.actions'));
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var statsActions = _interopRequireWildcard(require('../../stats/stats.actions'));
var notifActions = _interopRequireWildcard(require('../../activity/activity.actions'));
var errorActions = _interopRequireWildcard(require('../../ui/error.actions'));
var investActions = _interopRequireWildcard(require('../../post/invest.actions'));
var animationActions = _interopRequireWildcard(
  require('../../animation/animation.actions')
);
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var _customList = _interopRequireDefault(
  require('../../listview/mobile/customList.component')
);
var _tabs = _interopRequireDefault(require('../../navigation/mobile/tabs.component'));
var _get = _interopRequireDefault(require('lodash/get'));
var _profile = _interopRequireDefault(require('./profile.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/mobile/profile.container.js';
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
var Profile = (function(_Component) {
  (0, _inherits2.default)(Profile, _Component);
  var _super = _createSuper(Profile);
  function Profile(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Profile);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      user: {},
      handle: null,
      isOwner: false,
      view: 0,
      loaded: false
    });
    _this.renderHeader = _this.renderHeader.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.loadUser = _this.loadUser.bind((0, _assertThisInitialized2.default)(_this));
    _this.changeView = _this.changeView.bind((0, _assertThisInitialized2.default)(_this));
    _this.offset = 0;
    _this.needsReload = new Date().getTime();
    _this.tabs = [{ id: 0, title: 'Posts' }];
    _this.scrollTo = _this.scrollTo.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(
    Profile,
    [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;
          var _this$state = this.state,
            handle = _this$state.handle,
            user = _this$state.user;
          this.onInteraction = _reactNativeWeb.InteractionManager.runAfterInteractions(
            function() {
              if (user) _this2.loadUser();
            }
          );
          requestAnimationFrame(function() {
            if (!user) _this2.loadUser();
            _this2.setState({ loaded: true });
          });
          if (handle) return this.props.navigation.setParams({ title: handle });
          return null;
        }
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prev) {
          if (this.props.refresh !== prev.refresh) {
            this.scrollToTop();
          }
          if (this.props.reload !== prev.reload) {
            this.needsReload = new Date().getTime();
          }
        }
      },
      {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(next) {
          if (next.auth.community !== this.props.auth.community) {
            return true;
          }
          return next.navigation.isFocused();
        }
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.onInteraction) this.onInteraction.cancel();
        }
      },
      {
        key: 'loadUser',
        value: function loadUser() {
          this.props.actions.getSelectedUser(this.state.handle);
        }
      },
      {
        key: 'load',
        value: function load(view, length) {
          var _this$state2 = this.state,
            handle = _this$state2.handle,
            user = _this$state2.user;
          if (view === undefined) view = this.state.view;
          if (length === undefined) length = 0;
          if (this.state.view === 0) {
            this.props.actions.getUserPosts(length, 5, handle);
          } else {
            this.props.actions.getInvestments(user._id, length, 10);
          }
        }
      },
      {
        key: 'renderRow',
        value: function renderRow(rowData, view) {
          var _this$props = this.props,
            posts = _this$props.posts,
            investments = _this$props.investments;
          if (view === 0) {
            var post = posts.posts[rowData];
            if (!post) return null;
            var link = posts.links[post.metaPost];
            var parentPost;
            var parentId = post.parentPost;
            if (parentId) {
              parentPost = this.props.posts.posts[parentId];
            }
            if (!link && parentPost) {
              link = this.props.posts.links[parentPost.metaPost];
            }
            return _react.default.createElement(
              _post2.default,
              (0, _extends2.default)({}, this.props, {
                post: parentPost || post,
                commentary: parentPost ? [post] : [],
                link: link,
                __source: { fileName: _jsxFileName, lineNumber: 149, columnNumber: 9 }
              })
            );
          }
          if (view === 1) {
            var investment = investments.investments[rowData];
            var _post = posts.posts[investment.post];
            if (!_post) return null;
            var _link = posts.links[_post.metaPost];
            return _react.default.createElement(
              _post2.default,
              (0, _extends2.default)({}, this.props, {
                post: _post,
                commentary: [_post],
                link: _link,
                __source: { fileName: _jsxFileName, lineNumber: 162, columnNumber: 14 }
              })
            );
          }
          return null;
        }
      },
      {
        key: 'scrollToTop',
        value: function scrollToTop() {
          if (!this.tabs[this.state.view].component) return;
          var view = this.tabs[this.state.view].component.listview;
          if (view) view.scrollToLocation({ sectionIndex: 0, itemIndex: 0 });
        }
      },
      {
        key: 'scrollTo',
        value: function scrollTo(y) {
          if (!this.tabs[this.state.view].component) return;
          var view = this.tabs[this.state.view].component.listview;
          if (view)
            view.scrollToLocation({ sectionIndex: 0, itemIndex: 0, viewOffset: -y });
        }
      },
      {
        key: 'renderHeader',
        value: function renderHeader() {
          var _this$state3 = this.state,
            isOwner = _this$state3.isOwner,
            user = _this$state3.user;
          return user
            ? _react.default.createElement(
                _reactNativeWeb.View,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 182, columnNumber: 7 }
                },
                _react.default.createElement(
                  _profile.default,
                  (0, _extends2.default)({ key: 0 }, this.props, {
                    isOwner: isOwner,
                    user: user,
                    styles: styles,
                    scrollTo: this.scrollTo,
                    __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 9 }
                  })
                )
              )
            : null;
        }
      },
      {
        key: 'getViewData',
        value: function getViewData(props, view) {
          var _this$props2 = this.props,
            posts = _this$props2.posts,
            investments = _this$props2.investments;
          var _this$state4 = this.state,
            handle = _this$state4.handle,
            user = _this$state4.user;
          switch (view) {
            case 0:
              return {
                data: posts.userPosts[handle],
                loaded: this.props.posts.loaded.userPosts
              };
            case 1:
              return {
                data: investments.userInvestments[user._id],
                loaded: investments.loadedProfileInv
              };
            default:
              return null;
          }
        }
      },
      {
        key: 'changeView',
        value: function changeView(view) {
          if (view === this.state.view) this.scrollToTop();
          this.setState({ view: view });
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this3 = this;
          var error = this.props.error;
          var _this$state5 = this.state,
            user = _this$state5.user,
            loaded = _this$state5.loaded,
            view = _this$state5.view;
          var listEl = _react.default.createElement(_CustomSpinner.default, {
            __source: { fileName: _jsxFileName, lineNumber: 225, columnNumber: 18 }
          });
          if (user && loaded) {
            listEl = [];
            this.tabs.forEach(function(tab) {
              var tabData = _this3.getViewData(_this3.props, tab.id);
              var active = _this3.state.view === tab.id;
              var data = tabData.data || [];
              var postCount = user.postCount !== undefined ? user.postCount : '';
              var Upvotes =
                user.investmentCount !== undefined ? user.investmentCount : '';
              if (tab.id === 0) {
                tab.title = 'Posts ' + postCount;
                tab.type = 'posts';
              }
              if (tab.id === 1) {
                tab.title = 'Upvotes ' + Upvotes;
                tab.type = 'upvotes';
              }
              var sections = [
                { title: 'header', data: [0], renderItem: _this3.renderHeader },
                {
                  title: 'main',
                  data: data,
                  header: _react.default.createElement(_tabs.default, {
                    key: 1,
                    tabs: _this3.tabs,
                    active: view,
                    handleChange: _this3.changeView,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 15
                    }
                  })
                }
              ];
              listEl.push(
                _react.default.createElement(_customList.default, {
                  ref: function ref(c) {
                    _this3.tabs[tab.id].component = c;
                  },
                  key: tab.id,
                  data: data,
                  sections: sections,
                  parent: 'profile',
                  loaded: tabData.loaded,
                  renderRow: _this3.renderRow,
                  load: _this3.load,
                  view: tab.id,
                  stickyHeaderIndices: [1],
                  type: tab.type,
                  active: active,
                  needsReload: _this3.needsReload,
                  onReload: _this3.loadUser,
                  error: error,
                  headerData: user,
                  __source: { fileName: _jsxFileName, lineNumber: 266, columnNumber: 11 }
                })
              );
            });
          }
          return _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.profileContainer,
              __source: { fileName: _jsxFileName, lineNumber: 290, columnNumber: 12 }
            },
            listEl
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props) {
          var auth = props.auth,
            navigation = props.navigation,
            usersState = props.usersState;
          var handle = (0, _get.default)(navigation, 'state.params.id');
          if (!handle && auth.user) handle = auth.user.handle;
          var userId = usersState.handleToId[handle];
          var user = usersState.users[userId];
          if (!user) return { handle: handle };
          var isOwner = auth.user && user._id === auth.user._id;
          return { user: isOwner ? auth.user : user, isOwner: isOwner, handle: handle };
        }
      }
    ]
  );
  return Profile;
})(_react.Component);
(0, _defineProperty2.default)(Profile, 'propTypes', {
  navigation: _propTypes.default.object,
  usersState: _propTypes.default.object,
  auth: _propTypes.default.object,
  refresh: _propTypes.default.number,
  reload: _propTypes.default.number,
  actions: _propTypes.default.object,
  posts: _propTypes.default.object,
  investments: _propTypes.default.object,
  error: _propTypes.default.bool
});
function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts,
    usersState: state.user,
    online: state.online,
    error: state.error.profile,
    view: state.view,
    stats: state.stats,
    investments: state.investments,
    refresh: state.navigation.myProfile.refresh,
    reload: state.navigation.myProfile.reload,
    tabs: state.navigation.tabs,
    navState: state.navigation
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
                  _objectSpread(
                    _objectSpread(
                      _objectSpread(
                        _objectSpread(
                          _objectSpread(_objectSpread({}, statsActions), authActions),
                          postActions
                        ),
                        notifActions
                      ),
                      errorActions
                    ),
                    animationActions
                  ),
                  tagActions
                ),
                userActions
              ),
              investActions
            ),
            createPostActions
          ),
          navigationActions
        ),
        tooltipActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Profile);
exports.default = _default;
var localStyles = _reactNativeWeb.StyleSheet.create({
  postsHeader: { padding: 10 },
  profileContainer: {
    position: 'relative',
    flex: 1,
    flexGrow: 1,
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  wrap: { flexDirection: 'row', flexWrap: 'nowrap' },
  centering: { alignItems: 'center', justifyContent: 'center', padding: 8 }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
//# sourceMappingURL=profile.container.js.map
