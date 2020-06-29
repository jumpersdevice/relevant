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
var _infScroll = _interopRequireDefault(require('../listview/web/infScroll.component'));
var postActions = _interopRequireWildcard(require('../post/post.actions'));
var userActions = _interopRequireWildcard(require('../user/user.actions'));
var notifActions = _interopRequireWildcard(require('./activity.actions'));
var navigationActions = _interopRequireWildcard(
  require('../navigation/navigation.actions')
);
var _activity2 = _interopRequireDefault(require('./activity.component'));
var _post2 = _interopRequireDefault(require('../post/web/post.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/activity/activity.container.js';
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
var Activity = (function(_Component) {
  (0, _inherits2.default)(Activity, _Component);
  var _super = _createSuper(Activity);
  function Activity(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Activity);
    _this = _super.call(this, props, context);
    _this.state = { view: 0 };
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.getViewData = _this.getViewData.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.needsReload = new Date().getTime();
    _this.hasMore = true;
    _this.pageSize = 20;
    _this.ready = false;
    return _this;
  }
  (0, _createClass2.default)(Activity, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.auth.user && this.props.notif.count) {
          this.props.actions.markRead();
        }
        this.ready = true;
        this.load(0, 0);
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.reload !== prevProps.reload) {
          this.props.actions.markRead();
          this.load(0, 0);
        }
      }
    },
    {
      key: 'load',
      value: function load(page, length) {
        if (!this.ready) return;
        this.hasMore = page * this.pageSize <= length;
        if (this.hasMore) {
          this.props.actions.getActivity(length, this.pageSize);
        }
      }
    },
    {
      key: 'renderRow',
      value: function renderRow(rowData) {
        var _this$props = this.props,
          screenSize = _this$props.screenSize,
          actions = _this$props.actions;
        return _react.default.createElement(_activity2.default, {
          PostComponent: _post2.default,
          key: rowData._id,
          singleActivity: rowData,
          screenSize: screenSize,
          actions: actions,
          __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 }
        });
      }
    },
    {
      key: 'getViewData',
      value: function getViewData(props) {
        return { data: props.notif.personal, loaded: props.notif.loaded };
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$getViewData = this.getViewData(this.props),
          data = _this$getViewData.data;
        var activity = data.map(function(a) {
          return _this2.renderRow(a);
        });
        var length = activity.length;
        return _react.default.createElement(
          'div',
          { __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 7 } },
          _react.default.createElement(
            _infScroll.default,
            {
              className: 'activityContainer',
              data: data,
              loadMore: function loadMore(p) {
                return _this2.load(p, length);
              },
              hasMore: this.hasMore,
              useWindow: true,
              __source: { fileName: _jsxFileName, lineNumber: 84, columnNumber: 9 }
            },
            activity
          )
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
  reload: _propTypes.default.number,
  screenSize: _propTypes.default.number
});
function mapStateToProps(state) {
  return {
    auth: state.auth,
    notif: state.notif,
    loaded: state.user.loaded,
    online: state.user.online,
    stats: state.stats,
    error: state.error.activity,
    posts: state.posts,
    screenSize: state.navigation.screenSize,
    reload: state.navigation.reload
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(_objectSpread({}, postActions), notifActions),
          userActions
        ),
        navigationActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Activity);
exports.default = _default;
//# sourceMappingURL=activity.container.js.map
