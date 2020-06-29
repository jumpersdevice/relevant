'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Thumb;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/animation/thumb.component.js';
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
var thumbStyles = {
  position: 'absolute',
  top: 0,
  padding: 10,
  fontSize: 100,
  backgroundColor: 'transparent'
};
Thumb.propTypes = {
  parent: _propTypes.default.object,
  id: _propTypes.default.string,
  destroy: _propTypes.default.func
};
function Thumb(_ref) {
  var parent = _ref.parent,
    id = _ref.id,
    destroy = _ref.destroy;
  var _useState = (0, _react.useState)(new _reactNativeWeb.Animated.Value(1)),
    _useState2 = (0, _slicedToArray2.default)(_useState, 1),
    opacity = _useState2[0];
  var _useState3 = (0, _react.useState)(new _reactNativeWeb.Animated.Value(0)),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 1),
    scale = _useState4[0];
  (0, _react.useEffect)(
    function() {
      _reactNativeWeb.Animated.parallel([
        _reactNativeWeb.Animated.timing(opacity, {
          toValue: 0,
          delay: 500,
          duration: 300,
          easing: _reactNativeWeb.Easing.in(_reactNativeWeb.Easing.ease),
          useNativeDriver: true
        }),
        _reactNativeWeb.Animated.timing(scale, {
          toValue: 1,
          delay: 0,
          duration: 500,
          easing: _reactNativeWeb.Easing.elastic(2),
          useNativeDriver: true
        }).start()
      ]).start();
      var timeout = setTimeout(function() {
        return destroy(id);
      }, 2000);
      return function() {
        clearTimeout(timeout);
        destroy(id);
      };
    },
    [destroy, id, opacity, scale]
  );
  return _react.default.createElement(
    _reactNativeWeb.Animated.Text,
    {
      pointerEvents: 'none',
      key: id,
      style: [
        _objectSpread({}, thumbStyles),
        { top: parent.y, transform: [{ scale: scale }], opacity: opacity }
      ],
      __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 5 }
    },
    '\uD83D\uDC4E'
  );
}
//# sourceMappingURL=thumb.component.js.map
