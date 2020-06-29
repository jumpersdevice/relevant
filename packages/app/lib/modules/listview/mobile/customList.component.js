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
var _global = require('../../../styles/global');
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _emptyList = _interopRequireDefault(require('../../ui/mobile/emptyList.component'));
var _error = _interopRequireDefault(require('../../ui/mobile/error.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/listview/mobile/customList.component.js';
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
var CustomListView = (function(_Component) {
  (0, _inherits2.default)(CustomListView, _Component);
  var _super = _createSuper(CustomListView);
  function CustomListView(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, CustomListView);
    _this = _super.call(this, props, context);
    _this.state = { reloading: false };
    _this.reload = _this.reload.bind((0, _assertThisInitialized2.default)(_this));
    _this.loadMore = _this.loadMore.bind((0, _assertThisInitialized2.default)(_this));
    _this.lastReload = 0;
    _this.List = props.sections ? _reactNativeWeb.SectionList : _reactNativeWeb.FlatList;
    return _this;
  }
  (0, _createClass2.default)(CustomListView, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.data && this.props.data.length) {
          this.lastReload = new Date().getTime();
        } else if (this.props.active) {
          this.props.load(this.props.view, 0);
          this.setState({ loading: true });
          this.lastReload = new Date().getTime();
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev) {
        var _this2 = this;
        var _this$props = this.props,
          data = _this$props.data,
          error = _this$props.error,
          active = _this$props.active,
          needsReload = _this$props.needsReload,
          load = _this$props.load,
          view = _this$props.view;
        var _this$state = this.state,
          reloading = _this$state.reloading,
          loading = _this$state.loading;
        if (JSON.stringify(data) !== JSON.stringify(prev.data) || error) {
          reloading && this.setState({ reloading: false });
          loading && this.setState({ loading: false });
        }
        if (reloading) {
          clearTimeout(this.stateTimeout);
          this.stateTimeout = setTimeout(function() {
            return _this2.setState({ reloading: false, loading: false });
          }, 100);
        }
        if (active && needsReload > this.lastReload && !loading) {
          load(view, 0);
          this.lastReload = new Date().getTime();
        }
      }
    },
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(next) {
        if (!this.props.active && !next.active) return false;
        return true;
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.stateTimeout);
      }
    },
    {
      key: 'reload',
      value: function reload() {
        if (this.state.loading || this.state.reloading) return;
        this.setState({ reloading: true });
        this.lastReload = new Date().getTime();
        this.props.load(this.props.view, 0);
        if (this.props.onReload) this.props.onReload();
      }
    },
    {
      key: 'loadMore',
      value: function loadMore() {
        if (this.props.loaded && !this.props.data.length) return;
        if (!this.props.active) return;
        if (this.state.loading || this.state.reloading) return;
        this.setState({ loading: true });
        var length = 0;
        if (this.props.data) length = this.props.data.length;
        this.props.load(this.props.view, length);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var _this$props2 = this.props,
          active = _this$props2.active,
          data = _this$props2.data,
          scrollableTab = _this$props2.scrollableTab,
          headerData = _this$props2.headerData,
          sections = _this$props2.sections,
          _this$props2$type = _this$props2.type,
          type = _this$props2$type === void 0 ? 'data' : _this$props2$type,
          loaded = _this$props2.loaded,
          parent = _this$props2.parent,
          error = _this$props2.error,
          children = _this$props2.children,
          YOffset = _this$props2.YOffset,
          load = _this$props2.load,
          stickyHeaderIndices = _this$props2.stickyHeaderIndices,
          renderRow = _this$props2.renderRow,
          renderHeader = _this$props2.renderHeader,
          _onScroll = _this$props2.onScroll,
          view = _this$props2.view;
        var reloading = this.state.reloading;
        var spinnerEl =
          !loaded &&
          _react.default.createElement(_CustomSpinner.default, {
            visible: !data.length && active && !headerData,
            __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 7 }
          });
        var listStyle =
          active || scrollableTab
            ? [styles.commonList, styles.vis]
            : [styles.commonList, styles.hiddenList];
        var emptyEl =
          loaded && !data.length
            ? _react.default.createElement(
                _emptyList.default,
                {
                  visible: true,
                  emoji: '😶',
                  type: type,
                  YOffset: YOffset,
                  __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 9 }
                },
                children
              )
            : null;
        var List = this.List;
        var listEl = _react.default.createElement(List, {
          ref: function ref(c) {
            _this3.listview = c;
          },
          sections: sections,
          enableEmptySections: true,
          scrollToOverflowEnabled: true,
          stickySectionHeadersEnabled: true,
          initialNumToRender: 5,
          maxToRenderPerBatch: 10,
          windowSize: 10,
          scrollEventThrottle: 10,
          renderSectionHeader: function renderSectionHeader(_ref) {
            var header = _ref.section.header;
            return header;
          },
          automaticallyAdjustContentInsets: false,
          stickyHeaderIndices: stickyHeaderIndices,
          data: data,
          renderItem: function renderItem(_ref2) {
            var item = _ref2.item,
              index = _ref2.index;
            return renderRow(item, view, index);
          },
          keyExtractor: function keyExtractor(item, index) {
            return index.toString();
          },
          contentInset: { top: YOffset || 0 },
          contentOffset: { y: -YOffset || 0 },
          ListHeaderComponent: renderHeader,
          contentContainerStyle: {
            paddingTop:
              _reactNativeWeb.Platform.OS === 'android' ? this.props.YOffset : 0,
            backgroundColor: 'white'
          },
          style: { flex: 0.5, width: _global.fullWidth, backgroundColor: 'white' },
          keyboardShouldPersistTaps: 'always',
          keyboardDismissMode: 'on-drag',
          onScroll: function onScroll(e) {
            if (_onScroll) {
              _onScroll(e, view || 0);
            }
          },
          onEndReached: this.loadMore,
          onEndReachedThreshold: 0.3,
          ListFooterComponent: function ListFooterComponent() {
            return emptyEl;
          },
          refreshControl: _react.default.createElement(_reactNativeWeb.RefreshControl, {
            style: [
              { backgroundColor: 'hsl(238,20%,95%)' },
              data.length ? null : styles.hideReload
            ],
            refreshing: reloading && !error,
            onRefresh: this.reload,
            tintColor: '#000000',
            colors: ['#000000', '#000000', '#000000'],
            progressBackgroundColor: '#ffffff',
            __source: { fileName: _jsxFileName, lineNumber: 195, columnNumber: 11 }
          }),
          __source: { fileName: _jsxFileName, lineNumber: 151, columnNumber: 7 }
        });
        if (error && !data.length && !headerData) {
          return _react.default.createElement(_error.default, {
            parent: parent,
            error: error,
            reloadFunction: function reloadFunction() {
              return load(view, 0);
            },
            __source: { fileName: _jsxFileName, lineNumber: 212, columnNumber: 9 }
          });
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: listStyle,
            __source: { fileName: _jsxFileName, lineNumber: 221, columnNumber: 7 }
          },
          listEl,
          spinnerEl
        );
      }
    }
  ]);
  return CustomListView;
})(_react.Component);
exports.default = CustomListView;
(0, _defineProperty2.default)(CustomListView, 'propTypes', {
  data: _propTypes.default.array,
  active: _propTypes.default.bool,
  view: _propTypes.default.number,
  load: _propTypes.default.func,
  onReload: _propTypes.default.func,
  loaded: _propTypes.default.bool,
  headerData: _propTypes.default.object,
  parent: _propTypes.default.string,
  error: _propTypes.default.bool,
  scrollableTab: _propTypes.default.bool,
  YOffset: _propTypes.default.number,
  stickyHeaderIndices: _propTypes.default.array,
  onScroll: _propTypes.default.func,
  renderHeader: _propTypes.default.func,
  renderRow: _propTypes.default.func,
  children: _propTypes.default.object,
  type: _propTypes.default.string,
  sections: _propTypes.default.array,
  needsReload: _propTypes.default.number
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  hideReload: { backgroundColor: 'white' },
  vis: {
    flex: 1,
    width: _global.fullWidth,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  hiddenList: { flex: 0, height: 0, width: 0, position: 'absolute' }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
//# sourceMappingURL=customList.component.js.map
