'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = ULink;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactPrimitives = require('react-primitives');
var _reactRouterDom = require('react-router-dom');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/link.component.js';
var environment = 'web';
if (process.env.WEB !== 'true') {
  environment = 'native';
}
function ULink(props) {
  if (environment === 'web') {
    return _react.default.createElement(
      _reactRouterDom.Link,
      {
        onClick: props.onClick,
        to: props.to,
        __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }
      },
      props.children
    );
  }
  return _react.default.createElement(
    _reactPrimitives.Touchable,
    {
      onPress: props.onPress,
      __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 10 }
    },
    props.children
  );
}
ULink.propTypes = {
  children: _propTypes.default.node,
  to: _propTypes.default.string,
  onPress: _propTypes.default.func,
  onClick: _propTypes.default.func
};
//# sourceMappingURL=link.component.js.map
