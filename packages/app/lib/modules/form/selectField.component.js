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
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _reactSelect = _interopRequireDefault(require('react-select'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/form/selectField.component.js';
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
var SelectField = (function(_Component) {
  (0, _inherits2.default)(SelectField, _Component);
  var _super = _createSuper(SelectField);
  function SelectField() {
    var _this;
    (0, _classCallCheck2.default)(this, SelectField);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      inputValue: ''
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleChange',
      function(value) {
        _this.props.input.onChange(value.value);
      }
    );
    return _this;
  }
  (0, _createClass2.default)(SelectField, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          label = _this$props.label,
          error = _this$props.error,
          options = _this$props.options,
          input = _this$props.input;
        var defaultValue = { value: input.value, label: input.value };
        var opts = options.map(function(o) {
          return { label: o, value: o };
        });
        return _react.default.createElement(
          _uni.View,
          {
            mt: 2,
            zIndex: 0,
            __source: { fileName: _jsxFileName, lineNumber: 26, columnNumber: 7 }
          },
          label
            ? _react.default.createElement(
                _uni.LinkFont,
                {
                  c: _styles.colors.black,
                  mb: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 }
                },
                label
              )
            : null,
          _react.default.createElement(_reactSelect.default, {
            styles: {
              menu: function menu(styles) {
                return _objectSpread(
                  _objectSpread({}, styles),
                  {},
                  { position: 'relative', top: 0, zIndex: 10 }
                );
              }
            },
            defaultValue: defaultValue,
            onChange: this.handleChange,
            options: opts,
            __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 9 }
          }),
          error
            ? _react.default.createElement(
                _uni.SecondaryText,
                {
                  c: _styles.colors.red,
                  mt: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 11 }
                },
                error
              )
            : null
        );
      }
    }
  ]);
  return SelectField;
})(_react.Component);
exports.default = SelectField;
(0, _defineProperty2.default)(SelectField, 'propTypes', {
  input: _propTypes.default.object,
  options: _propTypes.default.array,
  label: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.node
  ]),
  error: _propTypes.default.string
});
//# sourceMappingURL=selectField.component.js.map
