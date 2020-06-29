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
var _reactNativeWeb = require('react-native-web');
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/stallScreen.component.js';
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
var StallScreen = (function(_Component) {
  (0, _inherits2.default)(StallScreen, _Component);
  var _super = _createSuper(StallScreen);
  function StallScreen(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, StallScreen);
    _this = _super.call(this, props, context);
    _this.state = {};
    return _this;
  }
  (0, _createClass2.default)(StallScreen, [
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: {
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center'
            },
            __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 7 }
          },
          _react.default.createElement(_CustomSpinner.default, {
            visible: true,
            __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return StallScreen;
})(_react.Component);
var _default = StallScreen;
exports.default = _default;
//# sourceMappingURL=stallScreen.component.js.map
