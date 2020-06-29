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
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/mobile/emptyList.component.js';
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
var EmptyList = (function(_Component) {
  (0, _inherits2.default)(EmptyList, _Component);
  var _super = _createSuper(EmptyList);
  function EmptyList(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, EmptyList);
    _this = _super.call(this, props, context);
    _this.state = { top: 0, ready: false };
    return _this;
  }
  (0, _createClass2.default)(EmptyList, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var type = this.props.type || '';
        var emoji =
          this.props.emoji || (_reactNativeWeb.Platform.OS === 'android' ? '😮' : '😶');
        var visible = this.props.visible;
        var content =
          this.props.children ||
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [
                styles.libre,
                styles.darkGrey,
                { fontSize: 40, textAlign: 'center' }
              ],
              __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 7 }
            },
            this.props.text ? this.props.text : 'Sorry, no ' + type + ' ' + emoji
          );
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [
              visible && this.state.ready ? styles.emptyList : styles.hideEmptyList,
              {
                height:
                  _global.fullHeight -
                  (59 * 2 + this.state.top + (this.props.YOffset || 0))
              }
            ],
            pointerEvents: visible ? 'auto' : 'none',
            onLayout: function onLayout(e) {
              _this2.setState({ top: e.nativeEvent.layout.y });
              _this2.setState({ ready: true });
            },
            __source: { fileName: _jsxFileName, lineNumber: 38, columnNumber: 7 }
          },
          content
        );
      }
    }
  ]);
  return EmptyList;
})(_react.Component);
(0, _defineProperty2.default)(EmptyList, 'propTypes', {
  type: _propTypes.default.string,
  emoji: _propTypes.default.string,
  visible: _propTypes.default.bool,
  children: _propTypes.default.node,
  text: _propTypes.default.string,
  YOffset: _propTypes.default.number
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  hideEmptyList: { flex: 0, opacity: 0, position: 'absolute' }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
module.exports = EmptyList;
//# sourceMappingURL=emptyList.component.js.map
