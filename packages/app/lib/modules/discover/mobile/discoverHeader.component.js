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
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/mobile/discoverHeader.component.js';
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
var DiscoverHeader = (function(_Component) {
  (0, _inherits2.default)(DiscoverHeader, _Component);
  var _super = _createSuper(DiscoverHeader);
  function DiscoverHeader(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, DiscoverHeader);
    _this = _super.call(this, props, context);
    _this.state = {
      searchTerm: null,
      transY: new _reactNativeWeb.Animated.Value(0),
      offsetY: new _reactNativeWeb.Animated.Value(0)
    };
    _this.headerHeight = 50;
    _this.lastOffset = -50;
    _this.onScroll = _this.onScroll.bind((0, _assertThisInitialized2.default)(_this));
    _this.currentOffset = -50;
    return _this;
  }
  (0, _createClass2.default)(DiscoverHeader, [
    {
      key: 'onScroll',
      value: function onScroll(event) {
        var _this2 = this;
        this.currentOffset = event.nativeEvent.contentOffset.y;
        var threshold =
          _reactNativeWeb.Platform.OS === 'android' ? 0 : -this.headerHeight;
        if (!event.nativeEvent.contentSize.height || this.currentOffset <= threshold) {
          this.state.offsetY.setValue(0);
          return;
        }
        var diff = this.lastOffset - this.currentOffset;
        var top = Math.max(this.state.offsetY._value + diff, -this.headerHeight);
        top = Math.min(top, 0);
        this.state.offsetY.setValue(top);
        this.lastOffset = this.currentOffset;
        clearTimeout(this.scrollEnd);
        this.scrollEnd = setTimeout(function() {
          return _this2.onScrollEnd();
        }, 100);
      }
    },
    {
      key: 'onScrollEnd',
      value: function onScrollEnd() {
        if (this.state.offsetY._value >= -this.headerHeight / 2) {
          this.showHeader();
        } else this.hideHeader();
      }
    },
    {
      key: 'hideHeader',
      value: function hideHeader() {
        var moveHeader = this.headerHeight * -1;
        _reactNativeWeb.Animated.timing(this.state.offsetY, {
          toValue: moveHeader,
          duration: 200,
          easing: _reactNativeWeb.Easing.quad,
          useNativeDriver: true
        }).start();
      }
    },
    {
      key: 'showHeader',
      value: function showHeader() {
        _reactNativeWeb.Animated.timing(this.state.offsetY, {
          toValue: 0,
          duration: 200,
          easing: _reactNativeWeb.Easing.quad,
          useNativeDriver: true
        }).start();
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        return _react.default.createElement(
          _reactNativeWeb.Animated.View,
          {
            style: {
              position: 'absolute',
              top: 0,
              width: _global.fullWidth,
              zIndex: 1000,
              backgroundColor: 'white',
              transform: [{ translateY: this.state.offsetY }],
              overflow: 'hidden'
            },
            ref: function ref(c) {
              _this3.header = c;
            },
            onLayout: function onLayout(event) {
              var height = event.nativeEvent.layout.height;
              if (_this3.headerHeight === height) return;
              _this3.headerHeight = height;
              _this3.props.setPostTop(_this3.headerHeight);
              _this3.layout = true;
            },
            __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 7 }
          },
          this.props.children
        );
      }
    }
  ]);
  return DiscoverHeader;
})(_react.Component);
exports.default = DiscoverHeader;
(0, _defineProperty2.default)(DiscoverHeader, 'propTypes', {
  setPostTop: _propTypes.default.func,
  children: _propTypes.default.node
});
//# sourceMappingURL=discoverHeader.component.js.map
