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
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _navigation = require('../navigation.actions');
var _reactNativePushNotification = _interopRequireDefault(
  require('react-native-push-notification')
);
var _tabBar = _interopRequireDefault(require('./tabBar.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/tabBar.container.js';
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
var TabBarContainer = (function(_PureComponent) {
  (0, _inherits2.default)(TabBarContainer, _PureComponent);
  var _super = _createSuper(TabBarContainer);
  function TabBarContainer() {
    var _this;
    (0, _classCallCheck2.default)(this, TabBarContainer);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'changeTab',
      function(key) {
        var _this$props = _this.props,
          actions = _this$props.actions,
          navigation = _this$props.navigation,
          reducerNav = _this$props.reducerNav,
          notif = _this$props.notif,
          isAuthenticated = _this$props.isAuthenticated;
        var tab = navigation.state.routes[_this.props.navigation.state.index];
        if (key !== 'discover' && !isAuthenticated) {
          return navigation.navigate('auth');
        }
        if (key === 'createPostTab') {
          return navigation.navigate({
            routeName: 'createPost',
            params: { left: 'Cancel', title: 'New Post', next: 'Next' }
          });
        }
        if (reducerNav.reload > reducerNav[key].reload) actions.reloadTab(key);
        if (key === 'activity' && notif.count) actions.reloadTab(key);
        if (tab.key === key) {
          if (tab.routes.length === 1) return actions.refreshTab(key);
          if (key === 'discover') {
            var route = tab.routes[tab.index];
            if (route.params.key === 'discoverTag') return actions.refreshTab(key);
          }
          navigation.popToTop();
        }
        return navigation.navigate(key);
      }
    );
    return _this;
  }
  (0, _createClass2.default)(TabBarContainer, [
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          navigation = _this$props2.navigation,
          notif = _this$props2.notif;
        var currentTab = navigation.state
          ? navigation.state.routes[navigation.state.index]
          : null;
        var tabs = navigation.state.routes;
        _reactNativePushNotification.default.setApplicationIconBadgeNumber(notif.count);
        return _react.default.createElement(_tabBar.default, {
          tabs: tabs,
          currentTab: currentTab,
          changeTab: this.changeTab,
          __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 12 }
        });
      }
    }
  ]);
  return TabBarContainer;
})(_react.PureComponent);
(0, _defineProperty2.default)(TabBarContainer, 'propTypes', {
  navigation: _propTypes.default.object,
  actions: _propTypes.default.object,
  notif: _propTypes.default.object,
  reducerNav: _propTypes.default.object,
  isAuthenticated: _propTypes.default.bool
});
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    notif: state.notif,
    reducerNav: state.navigation
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      { reloadTab: _navigation.reloadTab, refreshTab: _navigation.refreshTab },
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(TabBarContainer);
exports.default = _default;
//# sourceMappingURL=tabBar.container.js.map
