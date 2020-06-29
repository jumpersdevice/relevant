'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Spinner;
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/mobile/CustomSpinner.component.js';
var SpinnerContainer = _primitives.default.View.withConfig({
  displayName: 'CustomSpinnercomponent__SpinnerContainer',
  componentId: 'hanwem-0'
})([
  'position:absolute;left:0;right:0;bottom:0;top:0;flex:1;justify-content:center;align-items:center;flex-grow:1;'
]);
function Spinner(props) {
  return _react.default.createElement(
    SpinnerContainer,
    {
      pointerEvents: 'none',
      __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 5 }
    },
    _react.default.createElement(_reactNativeWeb.ActivityIndicator, {
      animating: props.visible,
      size: props.size || 'large',
      __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 7 }
    })
  );
}
Spinner.propTypes = { visible: _propTypes.default.bool, size: _propTypes.default.string };
//# sourceMappingURL=CustomSpinner.component.js.map
