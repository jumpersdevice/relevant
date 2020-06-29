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
var _moment = _interopRequireDefault(require('moment'));
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _global = require('../../../styles/global');
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _error = _interopRequireDefault(require('../../ui/mobile/error.component'));
var _emptyList = _interopRequireDefault(require('../../ui/mobile/emptyList.component'));
var _level = _interopRequireDefault(require('./level.component'));
var _statCat = _interopRequireDefault(require('./statCat.component'));
var _chart = _interopRequireDefault(require('./chart.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/mobile/stats.container.js';
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
var StatsContainer = (function(_Component) {
  (0, _inherits2.default)(StatsContainer, _Component);
  var _super = _createSuper(StatsContainer);
  function StatsContainer(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, StatsContainer);
    _this = _super.call(this, props, context);
    _this.state = { refreshing: false, loading: true };
    _this.renderItem = _this.renderItem.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderHeader = _this.renderHeader.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(StatsContainer, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.load();
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(next) {
        if (next.auth.stats !== this.props.auth.stats) {
          this.setState({ refreshing: false });
          this.setState({ loading: false });
        }
        if (next.error) {
          this.setState({ refreshing: false });
          this.setState({ loading: false });
        }
        if (this.props.refresh !== next.refresh && this.list) {
          this.list.scrollToOffset({ offset: 0 });
        }
      }
    },
    {
      key: 'load',
      value: function load() {
        this.end = new Date();
        this.start = new Date();
        this.relStart = new Date();
        this.start.setUTCHours(0, 0, 0, 0);
        this.relStart.setUTCHours(0, 0, 0, 0);
        this.relStart.setDate(this.start.getDate() - 28);
        this.start.setDate(this.start.getDate() - 14);
        this.props.actions.getChart(this.start, this.end);
        this.props.actions.getRelChart(this.start, this.end);
        this.props.actions.getStats(this.props.auth.user);
      }
    },
    {
      key: 'renderHeader',
      value: function renderHeader() {
        if (this.filler) return this.filler;
        var nextUpdate = (0, _moment.default)(this.props.auth.nextUpdate).fromNow(true);
        var relChart = _react.default.createElement(_chart.default, {
          start: this.relStart,
          end: this.end,
          type: 'smooth',
          dataKey: 'aggregateRelevance',
          data: this.props.auth.relChart,
          renderHeader: function renderHeader() {
            return _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.statNumber, { alignSelf: 'center', marginTop: 45 }],
                __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 11 }
              },
              'Relevance'
            );
          },
          renderFooter: function renderFooter() {
            return _react.default.createElement(_reactNativeWeb.View, {
              style: styles.break,
              __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 29 }
            });
          },
          __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 7 }
        });
        return _react.default.createElement(
          _reactNativeWeb.View,
          { __source: { fileName: _jsxFileName, lineNumber: 92, columnNumber: 7 } },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.nextUpdate,
              __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.smallInfo, { color: 'white' }],
                __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 11 }
              },
              nextUpdate,
              ' until next update'
            )
          ),
          _react.default.createElement(_level.default, {
            level: this.props.auth.user.level,
            __source: { fileName: _jsxFileName, lineNumber: 99, columnNumber: 9 }
          }),
          _react.default.createElement(_statCat.default, {
            index: 0,
            stats: this.props.auth.user,
            actions: this.props.actions,
            __source: { fileName: _jsxFileName, lineNumber: 101, columnNumber: 9 }
          }),
          _react.default.createElement(_reactNativeWeb.View, {
            style: styles.break,
            __source: { fileName: _jsxFileName, lineNumber: 107, columnNumber: 9 }
          }),
          relChart
        );
      }
    },
    {
      key: 'renderItem',
      value: function renderItem(_ref) {
        var item = _ref.item,
          index = _ref.index;
        return _react.default.createElement(
          _reactNativeWeb.View,
          { __source: { fileName: _jsxFileName, lineNumber: 117, columnNumber: 7 } },
          _react.default.createElement(_statCat.default, {
            index: index + 1,
            stats: item,
            actions: this.props.actions,
            __source: { fileName: _jsxFileName, lineNumber: 118, columnNumber: 9 }
          }),
          _react.default.createElement(_reactNativeWeb.View, {
            style: styles.break,
            __source: { fileName: _jsxFileName, lineNumber: 119, columnNumber: 9 }
          })
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var auth = this.props.auth;
        var stats = auth.stats || [];
        var user = auth.user;
        this.filler = null;
        if (this.props.error && !this.props.auth.user) {
          return _react.default.createElement(_error.default, {
            error: this.props.error,
            parent: 'stats',
            reloadFunction: this.load,
            __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 9 }
          });
        }
        if (this.state.loading) {
          return _react.default.createElement(_CustomSpinner.default, {
            visible: true,
            __source: { fileName: _jsxFileName, lineNumber: 141, columnNumber: 14 }
          });
        }
        if (!this.props.auth.user.level) {
          var nextUpdate = (0, _moment.default)(this.props.auth.nextUpdate).fromNow(true);
          this.filler = _react.default.createElement(
            _emptyList.default,
            {
              visible: true,
              style: styles.emptyList,
              __source: { fileName: _jsxFileName, lineNumber: 147, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.libre, { fontSize: 40, textAlign: 'center' }],
                __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 11 }
              },
              'You will see your stats here soon'
            ),
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.georgia, styles.emptyText, styles.quarterLetterSpacing],
                __source: { fileName: _jsxFileName, lineNumber: 151, columnNumber: 11 }
              },
              nextUpdate,
              ' until next update'
            )
          );
        }
        if (user.relevance < 5) {
          this.filler = _react.default.createElement(
            _emptyList.default,
            {
              visible: true,
              style: styles.emptyList,
              __source: { fileName: _jsxFileName, lineNumber: 160, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [
                  styles.libre,
                  styles.darkGrey,
                  { fontSize: 40, textAlign: 'center' }
                ],
                __source: { fileName: _jsxFileName, lineNumber: 161, columnNumber: 11 }
              },
              'Earn 5 relevant points to see your stats!'
            ),
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [
                  styles.georgia,
                  styles.darkGrey,
                  styles.emptyText,
                  styles.quarterLetterSpacing
                ],
                __source: { fileName: _jsxFileName, lineNumber: 166, columnNumber: 11 }
              },
              'Tip: ',
              _reactNativeWeb.Platform.OS === 'android' ? '😎' : '🤓',
              ' You can earn relevance by being one of the first to upvote a quality post'
            )
          );
        }
        return _react.default.createElement(_reactNativeWeb.FlatList, {
          ref: function ref(c) {
            return (_this2.list = c);
          },
          style: { flex: 1 },
          keyExtractor: function keyExtractor(item, index) {
            return index.toString();
          },
          extraData: _objectSpread(_objectSpread({}, this.props), this.state),
          data: stats,
          ListHeaderComponent: this.renderHeader,
          renderItem: function renderItem(item) {
            return !_this2.filler ? _this2.renderItem(item) : null;
          },
          refreshControl: _react.default.createElement(_reactNativeWeb.RefreshControl, {
            style: [{ backgroundColor: 'hsl(238,20%,95%)' }],
            refreshing: this.state.refreshing && !this.props.error,
            onRefresh: function onRefresh() {
              _this2.setState({ refreshing: true });
              _this2.load();
            },
            __source: { fileName: _jsxFileName, lineNumber: 191, columnNumber: 11 }
          }),
          __source: { fileName: _jsxFileName, lineNumber: 182, columnNumber: 7 }
        });
      }
    }
  ]);
  return StatsContainer;
})(_react.Component);
(0, _defineProperty2.default)(StatsContainer, 'propTypes', {
  auth: _propTypes.default.object,
  refresh: _propTypes.default.number,
  actions: _propTypes.default.object,
  error: _propTypes.default.bool
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  container: { flex: 1 },
  rowTitle: {
    fontSize: 17,
    paddingRight: 5,
    backgroundColor: 'transparent',
    fontFamily: 'System',
    paddingVertical: 20,
    alignSelf: 'center',
    color: _global.darkGrey
  },
  label: {
    backgroundColor: _global.blue,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    color: 'white'
  },
  nextUpdate: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: _global.blue,
    borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth
  }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
function mapStateToProps(state) {
  return {
    tags: state.tags,
    auth: state.auth,
    refresh: state.navigation.stats.refresh,
    error: state.error.stats
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(_objectSpread({}, authActions), navigationActions),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(StatsContainer);
exports.default = _default;
//# sourceMappingURL=stats.container.js.map
