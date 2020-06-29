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
var _utils = require('../../../utils');
var _global = require('../../../styles/global');
var _get = _interopRequireDefault(require('lodash/get'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/mobile/percent.component.js';
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
var Percent = (function(_Component) {
  (0, _inherits2.default)(Percent, _Component);
  var _super = _createSuper(Percent);
  function Percent() {
    (0, _classCallCheck2.default)(this, Percent);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Percent, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.percent = Math.max(
          0,
          _utils.numbers.percentChange((0, _get.default)(this.props.user, 'relevance'))
        );
        this.percentPretty = _utils.numbers.abbreviateNumber(this.percent);
        this.animate();
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.animationTimer);
      }
    },
    {
      key: 'animate',
      value: function animate() {
        var _this = this;
        var newPercent = Math.max(
          0,
          _utils.numbers.percentChange((0, _get.default)(this.props.user, 'relevance'))
        );
        var newPercentPretty = _utils.numbers.abbreviateNumber(newPercent);
        if (parseFloat(this.percentPretty) !== parseFloat(newPercentPretty)) {
          this.percent = newPercent;
          this.forceUpdate();
        }
        this.animationTimer = setTimeout(function() {
          return _this.animate();
        }, 300);
      }
    },
    {
      key: 'render',
      value: function render() {
        var user = (0, _get.default)(this.props.user, 'relevance');
        var fontSize = this.props.fontSize || 17;
        if (!user) return null;
        var fontFamily;
        if (this.props.fontFamily) {
          fontFamily = { fontFamily: this.props.fontFamily, letterSpacing: 0 };
        }
        var percent = Math.max(0, _utils.numbers.percentChange(user));
        var percentComponent = null;
        if (percent >= 0) {
          percentComponent = _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flexDirection: 'row', alignItems: 'flex-end' },
              __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: { fontSize: fontSize, color: _global.green, marginBottom: -3 },
                __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 11 }
              },
              '\u25B2'
            ),
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [
                  { fontSize: fontSize, textAlign: 'right', color: _global.green },
                  styles.bebas,
                  fontFamily
                ],
                __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }
              },
              _utils.numbers.abbreviateNumber(percent),
              '%'
            )
          );
        } else if (percent < 0) {
          percentComponent = _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flexDirection: 'row', alignItems: 'flex-end' },
              __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: { fontSize: fontSize, color: 'red', marginBottom: -3 },
                __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 }
              },
              '\u25BC'
            ),
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [
                  { fontSize: fontSize, color: 'red', textAlign: 'right' },
                  styles.bebas,
                  fontFamily
                ],
                __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 11 }
              },
              _utils.numbers.abbreviateNumber(percent),
              '%'
            )
          );
        }
        return percentComponent;
      }
    }
  ]);
  return Percent;
})(_react.Component);
(0, _defineProperty2.default)(Percent, 'propTypes', {
  user: _propTypes.default.object,
  fontSize: _propTypes.default.number,
  fontFamily: _propTypes.default.string
});
var _default = Percent;
exports.default = _default;
var localStyles = _reactNativeWeb.StyleSheet.create({});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=percent.component.js.map
