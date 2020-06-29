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
var _react = _interopRequireWildcard(require('react'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/web/404.js';
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
var NotFound = (function(_Component) {
  (0, _inherits2.default)(NotFound, _Component);
  var _super = _createSuper(NotFound);
  function NotFound() {
    (0, _classCallCheck2.default)(this, NotFound);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(NotFound, [
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          'div',
          { __source: { fileName: _jsxFileName, lineNumber: 5, columnNumber: 12 } },
          'NOT FOUND'
        );
      }
    }
  ]);
  return NotFound;
})(_react.Component);
exports.default = NotFound;
//# sourceMappingURL=404.js.map
