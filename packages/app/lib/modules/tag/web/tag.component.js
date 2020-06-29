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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRouterDom = require('react-router-dom');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/tag/web/tag.component.js';
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
var Tag = (function(_Component) {
  (0, _inherits2.default)(Tag, _Component);
  var _super = _createSuper(Tag);
  function Tag() {
    (0, _classCallCheck2.default)(this, Tag);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Tag, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          community = _this$props.community,
          name = _this$props.name;
        var link = '/'.concat(community, '/top/').concat(name);
        return _react.default.createElement(
          _reactRouterDom.Link,
          {
            to: link,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 7 }
          },
          '#',
          this.props.name
        );
      }
    }
  ]);
  return Tag;
})(_react.Component);
(0, _defineProperty2.default)(Tag, 'propTypes', {
  name: _propTypes.default.string,
  community: _propTypes.default.string
});
var _default = Tag;
exports.default = _default;
//# sourceMappingURL=tag.component.js.map
