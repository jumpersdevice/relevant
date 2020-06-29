'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = ShadowButton;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/web/ShadowButton.js';
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
function ShadowButton(props) {
  return _react.default.createElement(
    'button',
    {
      className: 'shadowButton',
      onClick: function onClick() {
        return props.onClick ? props.onClick() : null;
      },
      style: _objectSpread({}, props.style),
      __source: { fileName: _jsxFileName, lineNumber: 6, columnNumber: 5 }
    },
    _react.default.createElement(
      'span',
      { __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 7 } },
      props.children
    )
  );
}
ShadowButton.propTypes = {
  onClick: _propTypes.default.func,
  style: _propTypes.default.object,
  children: _propTypes.default.node
};
//# sourceMappingURL=ShadowButton.js.map
