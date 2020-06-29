'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
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
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/mobile/level.component.js';
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
var Level = (function(_Component) {
  (0, _inherits2.default)(Level, _Component);
  var _super = _createSuper(Level);
  function Level() {
    (0, _classCallCheck2.default)(this, Level);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Level, [
    {
      key: 'render',
      value: function render() {
        var _this = this;
        var level = this.props.level;
        var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(l) {
          return { level: l };
        });
        level = Math.floor(level / 10);
        var img = require('../../../../public/img/icons/lock.png');
        var renderItem = function renderItem(_ref) {
          var item = _ref.item;
          var style = [styles.statNumber];
          if (item.level === level) {
            style = [styles.statNumber, { fontSize: 175, marginBottom: -30 }];
          }
          var divider = _react.default.createElement(_reactNativeWeb.View, {
            style: styles.statSeparator,
            __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 23 }
          });
          var itemEl = _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [].concat((0, _toConsumableArray2.default)(style), [
                { paddingHorizontal: 23 }
              ]),
              __source: { fileName: _jsxFileName, lineNumber: 27, columnNumber: 9 }
            },
            item.level
          );
          if (item.level > level) {
            itemEl = _react.default.createElement(_reactNativeWeb.Image, {
              source: img,
              style: {
                width: 14,
                height: 11,
                resizeMode: 'contain',
                paddingHorizontal: 23
              },
              __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 11 }
            });
          }
          return _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { justifyContent: 'center', flex: 1 },
              __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: { flexDirection: 'row', alignItems: 'center' },
                __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 11 }
              },
              itemEl,
              item.level !== 10 ? divider : null
            )
          );
        };
        return _react.default.createElement(_reactNativeWeb.FlatList, {
          ref: function ref(c) {
            return (_this.scrollView = c);
          },
          horizontal: true,
          data: data,
          extraData: this.props,
          renderItem: renderItem,
          ListHeaderComponent: function ListHeaderComponent() {
            return _react.default.createElement(_reactNativeWeb.View, {
              style: { flex: 1, width: _global.fullWidth / 2 },
              __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 36 }
            });
          },
          ListFooterComponent: function ListFooterComponent() {
            return _react.default.createElement(_reactNativeWeb.View, {
              style: { flex: 1, width: _global.fullWidth / 2 },
              __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 36 }
            });
          },
          keyExtractor: function keyExtractor(item) {
            return item.level.toString();
          },
          style: { marginTop: 35 },
          scrollEnabled: false,
          showsHorizontalScrollIndicator: false,
          removeClippedSubviews: false,
          initialNumToRender: 20,
          onLayout: function onLayout() {
            setTimeout(function() {
              _this.scrollView.scrollToIndex({
                index: level,
                viewPosition: 0.5,
                animated: true
              });
            }, 1);
          },
          __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 7 }
        });
      }
    }
  ]);
  return Level;
})(_react.Component);
exports.default = Level;
(0, _defineProperty2.default)(Level, 'propTypes', { level: _propTypes.default.number });
var localStyles = _reactNativeWeb.StyleSheet.create({
  statSeparator: {
    borderRightWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderRightColor: _global.borderGrey,
    height: 20
  },
  samallNumber: {}
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=level.component.js.map
