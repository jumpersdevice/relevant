'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
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
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/mobile/discoverTabBar.component.js';
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
var DefaultTabBar = (function(_Component) {
  (0, _inherits2.default)(DefaultTabBar, _Component);
  var _super = _createSuper(DefaultTabBar);
  function DefaultTabBar(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DefaultTabBar);
    _this = _super.call(this, props);
    _this.nonNativeScroll = new _reactNativeWeb.Animated.Value(props.initialTab);
    props.scrollValue.addListener(
      _reactNativeWeb.Animated.event([{ value: _this.nonNativeScroll }], {
        useNativeDriver: false
      })
    );
    return _this;
  }
  (0, _createClass2.default)(DefaultTabBar, [
    {
      key: 'renderTab',
      value: function renderTab(name, page, isTabActive, onPressHandler, textColor) {
        var textStyle = this.props.textStyle;
        var fontWeight = isTabActive ? 'bold' : 'normal';
        return _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            style: styles.flexOne,
            key: name,
            accessible: true,
            accessibilityLabel: name,
            accessibilityTraits: 'button',
            onPress: function onPress() {
              return onPressHandler(page);
            },
            __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: [styles.tab, this.props.tabStyle],
              __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              { __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 11 } },
              _react.default.createElement(
                _reactNativeWeb.Animated.Text,
                {
                  style: [{ color: textColor, fontWeight: fontWeight }, textStyle],
                  __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 13 }
                },
                name
              ),
              this.props.renderBadge(name)
            )
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          containerWidth = _this$props.containerWidth,
          backgroundColor = _this$props.backgroundColor,
          scrollValue = _this$props.scrollValue,
          style = _this$props.style,
          activeTab = _this$props.activeTab,
          goToPage = _this$props.goToPage;
        var numberOfTabs = this.props.tabs.length;
        var tabUnderlineStyle = {
          position: 'absolute',
          width: containerWidth / numberOfTabs,
          height: 4,
          backgroundColor: 'navy',
          bottom: 0
        };
        var left = scrollValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, containerWidth / numberOfTabs]
        });
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [styles.tabs, { backgroundColor: backgroundColor }, style],
            __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 7 }
          },
          this.props.tabs.map(function(name, page) {
            var inputRange = [0, 1, 2];
            var outputRange = inputRange.map(function(i) {
              return i === page ? 1 : 0;
            });
            var textColor = _this2.nonNativeScroll
              .interpolate({ inputRange: inputRange, outputRange: outputRange })
              .interpolate({
                inputRange: [0, 1],
                outputRange: ['rgba(35, 31, 32, 1)', 'rgba(77, 78, 255, 1)']
              });
            var isTabActive = activeTab === page;
            var renderTab = _this2.props.renderTab || _this2.renderTab.bind(_this2);
            return renderTab(name, page, isTabActive, goToPage, textColor);
          }),
          _react.default.createElement(_reactNativeWeb.Animated.View, {
            style: [
              tabUnderlineStyle,
              { transform: [{ translateX: left }] },
              this.props.underlineStyle
            ],
            __source: { fileName: _jsxFileName, lineNumber: 112, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return DefaultTabBar;
})(_react.Component);
(0, _defineProperty2.default)(DefaultTabBar, 'propTypes', {
  goToPage: _propTypes.default.func,
  activeTab: _propTypes.default.number,
  tabs: _propTypes.default.array,
  backgroundColor: _propTypes.default.string,
  textStyle: _propTypes.default.object,
  tabStyle: _propTypes.default.object,
  renderTab: _propTypes.default.func,
  underlineStyle: _propTypes.default.object,
  initialTab: _propTypes.default.number,
  scrollValue: _propTypes.default.object,
  containerWidth: _propTypes.default.number,
  renderBadge: _propTypes.default.func,
  style: _propTypes.default.object
});
(0, _defineProperty2.default)(DefaultTabBar, 'defaultProps', {
  inactiveTextColor: 'black',
  backgroundColor: null
});
styles = _reactNativeWeb.StyleSheet.create({
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 10 },
  flexOne: { flex: 1 },
  tabs: { height: 50, flexDirection: 'row', justifyContent: 'space-around' }
});
module.exports = DefaultTabBar;
//# sourceMappingURL=discoverTabBar.component.js.map
