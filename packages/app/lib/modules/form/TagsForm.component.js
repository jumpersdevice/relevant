'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
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
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/form/TagsForm.component.js';
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
  require('../createPost/web/selectTags.css');
}
var TagsForm = (function(_Component) {
  (0, _inherits2.default)(TagsForm, _Component);
  var _super = _createSuper(TagsForm);
  function TagsForm(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TagsForm);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      input: '',
      tags: []
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'selectTag',
      function(tag) {
        _this.setState({
          tags: [].concat((0, _toConsumableArray2.default)(_this.state.tags), [tag])
        });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'deselectTag',
      function(tag) {
        var tags = _this.state.tags.filter(function(t) {
          return t !== tag;
        });
        _this.setState({ tags: tags });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleBlur',
      function() {}
    );
    _this.handleChange = _this.handleChange.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(TagsForm, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.props.onChange(this.state.tags);
      }
    },
    {
      key: 'handleChange',
      value: function handleChange(e) {
        this.setState({ input: e.target.value });
        return null;
      }
    },
    {
      key: 'handleKeyDown',
      value: function handleKeyDown() {
        return null;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$state = this.state,
          tags = _this$state.tags,
          input = _this$state.input;
        var tagEls;
        if (!tags || !tags.length) {
          tagEls = null;
        } else {
          tagEls = tags.map(function(tag, i) {
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
                  return _this2.deselectTag(tag);
                },
                __source: { fileName: _jsxFileName, lineNumber: 110, columnNumber: 9 }
              },
              '#',
              tag
            );
          });
        }
        return _react.default.createElement(
          _uni.View,
          {
            display: 'flex',
            fdirection: 'column',
            mt: 3,
            __source: { fileName: _jsxFileName, lineNumber: 127, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            { __source: { fileName: _jsxFileName, lineNumber: 128, columnNumber: 9 } },
            _react.default.createElement(
              _uni.LinkFont,
              {
                c: _styles.colors.black,
                __source: { fileName: _jsxFileName, lineNumber: 129, columnNumber: 11 }
              },
              'Your Tags '
            ),
            _react.default.createElement(
              _uni.View,
              {
                display: 'flex',
                fdirection: 'row',
                wrap: 'wrap',
                __source: { fileName: _jsxFileName, lineNumber: 130, columnNumber: 11 }
              },
              tagEls
            )
          ),
          _react.default.createElement(
            'div',
            {
              className: 'tagInput',
              __source: { fileName: _jsxFileName, lineNumber: 134, columnNumber: 9 }
            },
            _react.default.createElement('input', {
              key: 'tags-input',
              placeholder: this.props.placeholderText,
              value: this.props.input.value,
              onKeyDown: this.handleKeyDown,
              onBlur: this.handleBlur,
              onChange: this.handleChange,
              __source: { fileName: _jsxFileName, lineNumber: 135, columnNumber: 11 }
            })
          )
        );
      }
    }
  ]);
  return TagsForm;
})(_react.Component);
exports.default = TagsForm;
(0, _defineProperty2.default)(TagsForm, 'propTypes', {
  placeholderText: _propTypes.default.string,
  onChange: _propTypes.default.func,
  input: _propTypes.default.object
});
//# sourceMappingURL=TagsForm.component.js.map
