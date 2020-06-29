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
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/web/selectTags.component.js';
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
var SelectTags = (function(_Component) {
  (0, _inherits2.default)(SelectTags, _Component);
  var _super = _createSuper(SelectTags);
  function SelectTags() {
    (0, _classCallCheck2.default)(this, SelectTags);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(SelectTags, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return (
          this.props.tags !== nextProps.tags ||
          this.props.selectedTags.length !== nextProps.selectedTags.length
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          tags = _this$props.tags,
          selectedTags = _this$props.selectedTags,
          selectTag = _this$props.selectTag,
          deselectTag = _this$props.deselectTag;
        if (!tags || !tags.length) return null;
        var inner = tags.map(function(tag, i) {
          var selected = selectedTags.indexOf(tag) !== -1;
          if (selected) return null;
          return _react.default.createElement(
            _uni.Tag,
            {
              key: i,
              m: 0,
              mr: 1,
              mt: 1,
              disabled: !selected,
              role: 'checkbox',
              'aria-checked': selected,
              onClick: function onClick() {
                if (selected) return deselectTag(tag);
                return selectTag(tag);
              },
              __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 }
            },
            '#',
            tag
          );
        });
        return _react.default.createElement(
          _uni.View,
          { __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 7 } },
          _react.default.createElement(
            _uni.LinkFont,
            {
              c: _styles.colors.black,
              __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 9 }
            },
            this.props.text + ': '
          ),
          _react.default.createElement(
            _uni.View,
            {
              mt: 1,
              display: 'flex',
              fdirection: 'row',
              wrap: 'wrap',
              justify: 'flex-start',
              __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 9 }
            },
            inner
          )
        );
      }
    }
  ]);
  return SelectTags;
})(_react.Component);
exports.default = SelectTags;
(0, _defineProperty2.default)(SelectTags, 'propTypes', {
  tags: _propTypes.default.array,
  selectedTags: _propTypes.default.array,
  text: _propTypes.default.string,
  deselectTag: _propTypes.default.func,
  selectTag: _propTypes.default.func
});
//# sourceMappingURL=selectTags.component.js.map
