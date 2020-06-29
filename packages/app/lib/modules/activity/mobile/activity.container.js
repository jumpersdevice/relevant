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
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var statsActions = _interopRequireWildcard(require('../../stats/stats.actions'));
var tooltipActions = _interopRequireWildcard(require('../../tooltip/tooltip.actions'));
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var _global = require('../../../styles/global');
var _discoverUser = _interopRequireDefault(
  require('../../discover/mobile/discoverUser.component')
);
var _customList = _interopRequireDefault(
  require('../../listview/mobile/customList.component')
);
var _reactNavigation = require('react-navigation');
var _activity = _interopRequireDefault(require('../activity.component'));
var _post2 = _interopRequireDefault(require('../../post/mobile/post.component'));
var notifActions = _interopRequireWildcard(require('../activity.actions'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/activity/mobile/activity.container.js';
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
var localStyles = _reactNativeWeb.StyleSheet.create({});
var styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
var Activity = (function(_Component) {
  (0, _inherits2.default)(Activity, _Component);
  var _super = _createSuper(Activity);
  function Activity(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Activity);
    _this = _super.call(this, props, context);
    _this.state = { view: 0 };
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.changeView = _this.changeView.bind((0, _assertThisInitialized2.default)(_this));
    _this.getViewData = _this.getViewData.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.needsReload = new Date().getTime();
    _this.scrollToTop = _this.scrollToTop.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.tabs = [{ id: 0, title: 'Personal' }];
    return _this;
  }
  (0, _createClass2.default)(Activity, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.auth.user && this.props.notif.count) {
          this.props.actions.markRead();
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev) {
        var _this$props = this.props,
          refresh = _this$props.refresh,
          reload = _this$props.reload,
          actions = _this$props.actions;
        if (refresh !== prev.refresh) this.scrollToTop();
        if (reload !== prev.reload) {
          actions.markRead();
          this.needsReload = new Date().getTime();
        }
      }
    },
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(next) {
        return next.navigation.isFocused();
      }
    },
    {
      key: 'scrollToTop',
      value: function scrollToTop() {
        if (this.tabs[this.state.view].component) {
          var view = this.tabs[this.state.view].component.listview;
          if (view) view.scrollToOffset({ offset: 0 });
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
      key: 'load',
      value: function load(view, length) {
        if (!view) view = this.state.view;
        if (!length) length = 0;
        switch (view) {
          case 0:
            this.props.actions.getActivity(length);
            break;
          default:
        }
      }
    },
    {
      key: 'renderRow',
      value: function renderRow(rowData) {
        var _this$props2 = this.props,
          screenSize = _this$props2.screenSize,
          actions = _this$props2.actions;
        if (this.state.view === 0) {
          return _react.default.createElement(_activity.default, {
            screenSize: screenSize,
            PostComponent: _post2.default,
            singleActivity: rowData,
            actions: actions,
            __source: { fileName: _jsxFileName, lineNumber: 97, columnNumber: 9 }
          });
        }
        return _react.default.createElement(
          _discoverUser.default,
          (0, _extends2.default)({ user: rowData }, this.props, {
            styles: styles,
            __source: { fileName: _jsxFileName, lineNumber: 105, columnNumber: 12 }
          })
        );
      }
    },
    {
      key: 'getViewData',
      value: function getViewData(view) {
        var _this$props3 = this.props,
          loaded = _this$props3.loaded,
          notif = _this$props3.notif,
          online = _this$props3.online;
        switch (view) {
          case 0:
            return { data: notif.personal, loaded: notif.loaded };
          case 1:
            return { data: online, loaded: loaded };
          default:
            return null;
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var activityEl = [];
        this.tabs.forEach(function(tab) {
          var tabData = _this2.getViewData(tab.id) || { data: [] };
          var active = _this2.state.view === tab.id;
          activityEl.push(
            _react.default.createElement(_customList.default, {
              style: { flex: 1 },
              ref: function ref(c) {
                _this2.tabs[tab.id].component = c;
              },
              key: tab.id,
              data: tabData.data,
              loaded: tabData.loaded,
              renderRow: _this2.renderRow,
              type: 'activity',
              parent: 'activity',
              load: _this2.load,
              view: tab.id,
              active: active,
              needsReload: _this2.needsReload,
              error: _this2.props.error,
              __source: { fileName: _jsxFileName, lineNumber: 127, columnNumber: 9 }
            })
          );
        });
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [styles.fullContainer],
            __source: { fileName: _jsxFileName, lineNumber: 147, columnNumber: 12 }
          },
          activityEl
        );
      }
    }
  ]);
  return Activity;
})(_react.Component);
(0, _defineProperty2.default)(Activity, 'propTypes', {
  auth: _propTypes.default.object,
  notif: _propTypes.default.object,
  actions: _propTypes.default.object,
  refresh: _propTypes.default.number,
  reload: _propTypes.default.number,
  error: _propTypes.default.bool,
  online: _propTypes.default.array,
  loaded: _propTypes.default.bool,
  screenSize: _propTypes.default.number
});
var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    notif: state.notif,
    loaded: state.user.loaded,
    online: state.user.online,
    stats: state.stats,
    error: state.error.activity,
    refresh: state.navigation.activity.refresh,
    reload: state.navigation.activity.reload,
    screenSize: state.navigation.screenSize,
    posts: state.posts
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            _objectSpread(
              _objectSpread(_objectSpread({}, postActions), notifActions),
              statsActions
            ),
            userActions
          ),
          tooltipActions
        ),
        navigationActions
      ),
      dispatch
    )
  };
};
var _default = (0, _reactNavigation.withNavigation)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Activity)
);
exports.default = _default;
//# sourceMappingURL=activity.container.js.map
