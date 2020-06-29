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
var _reactRedux = require('react-redux');
var _reactNativeReanimated = _interopRequireDefault(require('react-native-reanimated'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _redux = require('redux');
var _reactNativeScrollableTabView = _interopRequireDefault(
  require('react-native-scrollable-tab-view')
);
var _global = require('../../../styles/global');
var _tag = require('../../tag/tag.actions');
var _navigation = require('../../navigation/navigation.actions');
var _topics = _interopRequireDefault(require('../../createPost/mobile/topics.component'));
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _get = _interopRequireDefault(require('lodash/get'));
var _reactNativeTabView = require('react-native-tab-view');
var _reactNavigationDrawer = require('react-navigation-drawer');
var _discoverTabContext = require('./discoverTabContext');
var _TabBar = _interopRequireDefault(require('./TabBar'));
var _discover = _interopRequireDefault(require('./discover.container'));
var _discoverHeader = _interopRequireDefault(require('./discoverHeader.component'));
var _communityList = _interopRequireDefault(
  require('../../community/communityList.container')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/mobile/discoverTabs.component.js';
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
var DiscoverTabs = (function(_Component) {
  (0, _inherits2.default)(DiscoverTabs, _Component);
  var _super = _createSuper(DiscoverTabs);
  function DiscoverTabs(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, DiscoverTabs);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'tabView',
      _react.default.createRef()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'header',
      _react.default.createRef()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'position',
      new _reactNativeReanimated.default.Value(0)
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'onScroll',
      function(event) {
        return _this.header.current.onScroll(event);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'setPostTop',
      function(height) {
        return _this.setState({ headerHeight: height });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleChangeTab',
      function(index) {
        var _this$props = _this.props,
          actions = _this$props.actions,
          navigation = _this$props.navigation;
        _this.setState({ index: index });
        actions.setScrollTab('discover', { tab: index });
        navigation.setParams({ tab: index });
      }
    );
    _this.state = {
      index: 0,
      routes: [
        { key: 'new', title: 'New' },
        { key: 'top', title: 'Top' }
      ],
      headerHeight: 50
    };
    _this.renderHeader = _this.renderHeader.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.renderScene = _this.renderScene.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    var params = _this.props.navigation.state.params;
    if (params && params.topic) {
      _this.topicId = params.id;
      _this.state.routes = [
        { key: 'new', title: 'New' },
        { key: 'top', title: 'Top' }
      ];
    }
    _this.loaded = false;
    return _this;
  }
  (0, _createClass2.default)(DiscoverTabs, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        var navigation = this.props.navigation;
        var index = this.state.index;
        if (this.topicId) {
          this.needsReload = new Date().getTime();
          requestAnimationFrame(function() {
            _this2.loaded = true;
            _this2.setState({});
          });
        } else {
          this.loaded = true;
        }
        navigation.setParams({ tab: index });
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev, prevState) {
        var _this$props2 = this.props,
          navigation = _this$props2.navigation,
          tabId = _this$props2.tabId,
          actions = _this$props2.actions,
          auth = _this$props2.auth;
        var newSortUrlParam = (0, _get.default)(navigation, 'state.params.sort');
        var oldSortUrlParam = (0, _get.default)(prev.navigation, 'state.params.sort');
        if (newSortUrlParam && newSortUrlParam !== oldSortUrlParam) {
          console.log('change sort', navigation.state.params);
        }
        if (tabId > -1 && tabId !== prev.tabId && tabId !== this.state.index) {
          this.setState({ index: tabId });
        }
        var index = this.state.index;
        var prevIndex = prevState.index;
        if (index !== prevIndex) {
          var _this$header, _this$header$current;
          var isActive = index !== 0;
          (_this$header = this.header) === null || _this$header === void 0
            ? void 0
            : (_this$header$current = _this$header.current) === null ||
              _this$header$current === void 0
            ? void 0
            : _this$header$current.showHeader();
        }
      }
    },
    {
      key: 'renderScene',
      value: function renderScene(_ref) {
        var route = _ref.route;
        var _this$state = this.state,
          index = _this$state.index,
          headerHeight = _this$state.headerHeight;
        var navigation = this.props.navigation;
        var currentRoute = this.state.routes[index] || {};
        if (!this.loaded)
          return _react.default.createElement(_reactNativeWeb.View, {
            key: route.key,
            __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 30 }
          });
        switch (route.key) {
          case 'new':
            return _react.default.createElement(_discover.default, {
              active: currentRoute.key === route.key,
              type: 'new',
              key: 'new',
              navigation: navigation,
              onScroll: this.onScroll,
              offsetY: headerHeight,
              tabLabel: route.title,
              __source: { fileName: _jsxFileName, lineNumber: 137, columnNumber: 11 }
            });
          case 'top':
            return _react.default.createElement(_discover.default, {
              active: currentRoute.key === route.key,
              type: 'top',
              key: 'top',
              navigation: navigation,
              onScroll: this.onScroll,
              offsetY: headerHeight,
              tabLabel: route.title,
              __source: { fileName: _jsxFileName, lineNumber: 149, columnNumber: 11 }
            });
          default:
            return null;
        }
      }
    },
    {
      key: 'renderHeader',
      value: function renderHeader(props) {
        var _this3 = this;
        return _react.default.createElement(
          _discoverHeader.default,
          {
            ref: this.header,
            setPostTop: this.setPostTop,
            __source: { fileName: _jsxFileName, lineNumber: 166, columnNumber: 7 }
          },
          _react.default.createElement(
            _TabBar.default,
            (0, _extends2.default)(
              {
                setTab: function setTab(index) {
                  return _this3.setState({ index: index });
                }
              },
              props,
              { __source: { fileName: _jsxFileName, lineNumber: 167, columnNumber: 9 } }
            )
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this;
        var index = this.state.index;
        var _this$props3 = this.props,
          actions = _this$props3.actions,
          gesture = _this$props3.gesture;
        var auth = this.props.auth;
        var community = auth.community;
        if (!community)
          return _react.default.createElement(_communityList.default, {
            __source: { fileName: _jsxFileName, lineNumber: 179, columnNumber: 28 }
          });
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 182, columnNumber: 7 }
          },
          _react.default.createElement(
            _discoverTabContext.TabViewContext.Provider,
            {
              value: this.tabView,
              __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNavigationDrawer.DrawerGestureContext.Consumer,
              { __source: { fileName: _jsxFileName, lineNumber: 184, columnNumber: 11 } },
              function(ref) {
                return _react.default.createElement(
                  _reactNativeWeb.View,
                  {
                    style: { flex: 1 },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 15
                    }
                  },
                  _react.default.createElement(_reactNativeTabView.TabView, {
                    gestureHandlerProps: {
                      ref: _this4.tabView,
                      simultaneousHandlers: [ref, gesture || {}],
                      waitFor: [gesture || {}]
                    },
                    renderTabBar: function renderTabBar(props) {
                      return _this4.renderHeader(props);
                    },
                    position: _this4.position,
                    navigationState: _this4.state,
                    renderScene: _this4.renderScene,
                    onIndexChange: _this4.handleChangeTab,
                    initialLayout: {
                      width: _reactNativeWeb.Dimensions.get('window').width
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 17
                    }
                  })
                );
              }
            )
          )
        );
      }
    }
  ]);
  return DiscoverTabs;
})(_react.Component);
(0, _defineProperty2.default)(DiscoverTabs, 'propTypes', {
  navigation: _propTypes.default.object,
  tabId: _propTypes.default.number,
  actions: _propTypes.default.object,
  topics: _propTypes.default.bool,
  tags: _propTypes.default.object
});
(0, _defineProperty2.default)(DiscoverTabs, 'navigationOptions', function(_ref2) {
  var navigation = _ref2.navigation;
  var routeName = navigation.state.routeName;
  var tab = (0, _get.default)(navigation, 'state.params.tab', null);
  var disabled = routeName === 'discoverTag' && tab > 0;
  var isLocked = tab > 0;
  return {
    title: 'Communitites',
    gesturesEnabled: !disabled,
    drawerLockMode: isLocked ? 'locked-closed' : 'unlocked'
  };
});
var localStyles = _reactNativeWeb.StyleSheet.create({ container: { flex: 1 } });
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
function mapStateToProps(state) {
  return {
    auth: state.auth,
    tags: state.tags,
    tabId: state.navigation.discover.tab,
    topics: state.navigation.showTopics,
    feedUnread: state.posts.feedUnread,
    gesture: state.navigation.gesture
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        getParentTags: _tag.getParentTags,
        goToTopic: _navigation.goToTopic,
        setScrollTab: _navigation.setScrollTab,
        goToPage: _navigation.goToPage,
        lockDrawer: _navigation.lockDrawer
      },
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverTabs);
exports.default = _default;
//# sourceMappingURL=discoverTabs.component.js.map
