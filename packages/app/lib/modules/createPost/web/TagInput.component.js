'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
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
var _web = require('../../styled/web');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/web/TagInput.component.js';
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
if (process.env.BROWSER === true) {
  require('./selectTags.css');
}
var TagInput = (function(_Component) {
  (0, _inherits2.default)(TagInput, _Component);
  var _super = _createSuper(TagInput);
  function TagInput() {
    var _this;
    (0, _classCallCheck2.default)(this, TagInput);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      input: ''
    });
    return _this;
  }
  (0, _createClass2.default)(TagInput, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          selectedTags = _this$props.selectedTags,
          deselectTag = _this$props.deselectTag,
          selectTag = _this$props.selectTag;
        var tagEls = selectedTags.map(function(tag, i) {
          return _react.default.createElement(
            _uni.Tag,
            {
              key: i,
              m: 0,
              mr: 1,
              mt: 1,
              disabled: false,
              role: 'checkbox',
              'aria-checked': true,
              onClick: function onClick() {
                return deselectTag(tag);
              },
              __source: { fileName: _jsxFileName, lineNumber: 26, columnNumber: 7 }
            },
            '#',
            tag
          );
        });
        return _react.default.createElement(
          'div',
          { __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 7 } },
          _react.default.createElement(
            _uni.View,
            { __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 9 } },
            _react.default.createElement(
              _uni.LinkFont,
              {
                c: _styles.colors.black,
                __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 11 }
              },
              'Your Tags '
            ),
            _react.default.createElement(
              _uni.View,
              {
                display: 'flex',
                fdirection: 'row',
                wrap: 'wrap',
                __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 11 }
              },
              tagEls
            )
          ),
          _react.default.createElement(
            _uni.View,
            {
              flex: 1,
              __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 9 }
            },
            _react.default.createElement(_web.Input, {
              placeholder: this.props.placeholderText,
              value: this.state.input,
              onKeyDown: function onKeyDown(e) {
                if (e.keyCode === 13) {
                  var tag = e.target.value.trim().replace('#', '');
                  selectTag(tag);
                  return _this2.setState({ input: '' });
                }
                return null;
              },
              onBlur: function onBlur(e) {
                var tags = e.target.value.split(/,|#/);
                tags = tags
                  .map(function(t) {
                    return t.trim().replace('#', '');
                  })
                  .filter(function(t) {
                    return t.length;
                  });
                if (tags.length) {
                  selectTag(tags);
                }
                return _this2.setState({ input: '' });
              },
              onChange: function onChange(e) {
                var tags = e.target.value;
                var tagsArr = tags.split(/,|#/);
                tagsArr = tagsArr
                  .map(function(t) {
                    return t.trim();
                  })
                  .filter(function(t) {
                    return t.length;
                  });
                if (tagsArr.length > 1) {
                  selectTag(tagsArr[0]);
                  return _this2.setState({ input: tagsArr[1] });
                }
                return _this2.setState({ input: tags });
              },
              __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 11 }
            })
          )
        );
      }
    }
  ]);
  return TagInput;
})(_react.Component);
exports.default = TagInput;
(0, _defineProperty2.default)(TagInput, 'propTypes', {
  placeholderText: _propTypes.default.string,
  selectedTags: _propTypes.default.array,
  deselectTag: _propTypes.default.func,
  selectTag: _propTypes.default.func
});
//# sourceMappingURL=TagInput.component.js.map
