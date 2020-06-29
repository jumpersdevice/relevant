'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Spinner;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/mobile/customSpinnerRelative.component.js';
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
var styles;
function Spinner(props) {
  return _react.default.createElement(
    _reactNativeWeb.View,
    {
      pointerEvents: 'none',
      style: props.visible ? styles.spinnerContainerRelative : styles.hideSpinner,
      __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 5 }
    },
    _react.default.createElement(_reactNativeWeb.ActivityIndicator, {
      animating: props.visible,
      size: 'large',
      __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }
    })
  );
}
Spinner.propTypes = { visible: _propTypes.default.bool };
var localStyles = _reactNativeWeb.StyleSheet.create({
  spinnerContainerRelative: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  hideSpinner: { position: 'absolute' }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
//# sourceMappingURL=customSpinnerRelative.component.js.map
