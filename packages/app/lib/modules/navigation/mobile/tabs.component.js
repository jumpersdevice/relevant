'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
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
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/tabs.component.js';
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
var HeaderTabs = (function(_Component) {
  (0, _inherits2.default)(HeaderTabs, _Component);
  var _super = _createSuper(HeaderTabs);
  function HeaderTabs() {
    (0, _classCallCheck2.default)(this, HeaderTabs);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(HeaderTabs, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          handleChange = _this$props.handleChange,
          active = _this$props.active,
          tabs = _this$props.tabs,
          scrollValue = _this$props.scrollValue;
        var tabWidth = _global.fullWidth / tabs.length;
        var tabUnderlineStyle = {
          position: 'absolute',
          width: tabWidth,
          height: 4,
          backgroundColor: '#3E3EFF',
          bottom: 0
        };
        var left;
        if (scrollValue) {
          left = scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, tabWidth]
          });
        } else {
          left = active * tabWidth;
        }
        var tabsEl = tabs.map(function(tab) {
          var isActive = active === tab.id;
          return _react.default.createElement(
            _reactNativeWeb.TouchableHighlight,
            {
              key: tab.id,
              underlayColor: 'white',
              style: [
                styles.typeParent,
                { alignItems: 'stretch' },
                styles.inactiveBorder
              ],
              onPress: function onPress() {
                return handleChange(tab.id);
              },
              __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: {
                  position: 'relative',
                  alignItems: 'stretch',
                  flex: 1,
                  justifyContent: 'center'
                },
                __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [
                    styles.darkGrey,
                    styles.tabFont,
                    styles.quarterLetterSpacing,
                    styles.font15,
                    isActive ? styles.active : null,
                    { textAlign: 'center' }
                  ],
                  __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 13 }
                },
                tab.title
              )
            )
          );
        });
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [styles.row, styles.tabsParent, { width: _global.fullWidth }],
            __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 7 }
          },
          tabsEl,
          _react.default.createElement(_reactNativeWeb.Animated.View, {
            style: [tabUnderlineStyle, { left: left }],
            __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return HeaderTabs;
})(_react.Component);
(0, _defineProperty2.default)(HeaderTabs, 'propTypes', {
  scrollValue: _propTypes.default.object,
  tabs: _propTypes.default.array,
  active: _propTypes.default.number,
  handleChange: _propTypes.default.func
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  typeParent: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  tabsParent: { backgroundColor: 'white', height: 50 },
  inactiveBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth
  }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
var _default = HeaderTabs;
exports.default = _default;
//# sourceMappingURL=tabs.component.js.map
