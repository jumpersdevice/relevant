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
var _creatable = _interopRequireDefault(require('react-select/creatable'));
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/form/createSelectField.component.js';
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
var components = { DropdownIndicator: null };
var createOption = function createOption(label) {
  return { label: label, value: label };
};
var CreatableMulti = (function(_Component) {
  (0, _inherits2.default)(CreatableMulti, _Component);
  var _super = _createSuper(CreatableMulti);
  function CreatableMulti() {
    var _this;
    (0, _classCallCheck2.default)(this, CreatableMulti);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      inputValue: '',
      value: _this.props.input.value
        ? _this.props.input.value.map(function(option) {
            return { value: option, label: option };
          })
        : []
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleChange',
      function(value) {
        _this.setState({ value: value });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleInputChange',
      function(inputValue) {
        _this.setState({ inputValue: inputValue });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleKeyDown',
      function(event) {
        var _this$state = _this.state,
          inputValue = _this$state.inputValue,
          value = _this$state.value;
        if (!inputValue) return;
        switch (event.key) {
          case 'Enter':
          case 'Tab':
            _this.setState({
              inputValue: '',
              value: [].concat((0, _toConsumableArray2.default)(value), [
                createOption(inputValue)
              ])
            });
            event.preventDefault();
            break;
          default:
            break;
        }
      }
    );
    return _this;
  }
  (0, _createClass2.default)(CreatableMulti, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var vals = this.state.value.map(function(v) {
          return v.label;
        });
        this.props.input.onChange(vals);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          placeholder = _this$props.placeholder,
          label = _this$props.label,
          error = _this$props.error,
          input = _this$props.input;
        var inputValue = this.state.inputValue;
        var vals = input.value
          ? input.value.map(function(v) {
              return { label: v, value: v };
            })
          : [];
        return _react.default.createElement(
          _uni.View,
          {
            key: 'tags-input',
            mt: 2,
            __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 7 }
          },
          label
            ? _react.default.createElement(
                _uni.LinkFont,
                {
                  c: _styles.colors.black,
                  mb: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 }
                },
                label
              )
            : null,
          _react.default.createElement(_creatable.default, {
            key: 'tags-input-select',
            components: components,
            inputValue: inputValue,
            isClearable: true,
            isMulti: true,
            menuIsOpen: false,
            onChange: this.handleChange,
            onInputChange: this.handleInputChange,
            onKeyDown: this.handleKeyDown,
            placeholder: placeholder,
            value: vals,
            __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 9 }
          }),
          error
            ? _react.default.createElement(
                _uni.SecondaryText,
                {
                  c: _styles.colors.red,
                  mt: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 92, columnNumber: 11 }
                },
                error
              )
            : null
        );
      }
    }
  ]);
  return CreatableMulti;
})(_react.Component);
exports.default = CreatableMulti;
(0, _defineProperty2.default)(CreatableMulti, 'propTypes', {
  input: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string,
  error: _propTypes.default.string
});
//# sourceMappingURL=createSelectField.component.js.map
