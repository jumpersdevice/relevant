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
var _richText = _interopRequireDefault(require('../text/web/richText.component'));
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/form/RichTextForm.component.js';
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
var RichTextForm = (function(_Component) {
  (0, _inherits2.default)(RichTextForm, _Component);
  var _super = _createSuper(RichTextForm);
  function RichTextForm() {
    var _this;
    (0, _classCallCheck2.default)(this, RichTextForm);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      admins: _this.props.initialValues,
      adminsText: ''
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'updateAdmins',
      function(adminsText, data) {
        _this.setState({ admins: data.mentions, adminsText: adminsText });
      }
    );
    return _this;
  }
  (0, _createClass2.default)(RichTextForm, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.props.onChange(this.state.admins);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _React$createElement;
        var _this$props = this.props,
          input = _this$props.input,
          placeholder = _this$props.placeholder,
          label = _this$props.label;
        var adminsText = this.state.adminsText;
        return _react.default.createElement(
          _uni.View,
          {
            display: 'flex',
            fdirection: 'column',
            mt: 3,
            __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 7 }
          },
          _react.default.createElement(
            'label',
            { __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 } },
            _react.default.createElement(
              _uni.LinkFont,
              {
                c: _styles.colors.black,
                __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 11 }
              },
              label,
              ':'
            )
          ),
          _react.default.createElement(
            _richText.default,
            ((_React$createElement = {
              className: 'editor',
              body: 'test',
              onChange: this.updateAdmins
            }),
            (0, _defineProperty2.default)(_React$createElement, 'body', adminsText),
            (0, _defineProperty2.default)(
              _React$createElement,
              'placeholder',
              placeholder || label
            ),
            (0, _defineProperty2.default)(
              _React$createElement,
              'onBlur',
              function onBlur() {
                return input.onBlur(input.value);
              }
            ),
            (0, _defineProperty2.default)(_React$createElement, '__source', {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 9
            }),
            _React$createElement)
          )
        );
      }
    }
  ]);
  return RichTextForm;
})(_react.Component);
exports.default = RichTextForm;
(0, _defineProperty2.default)(RichTextForm, 'propTypes', {
  onChange: _propTypes.default.func,
  input: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string,
  initialValues: _propTypes.default.object
});
//# sourceMappingURL=RichTextForm.component.js.map
