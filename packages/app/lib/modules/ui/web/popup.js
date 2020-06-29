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
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/web/popup.js';
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
  require('./popup.css');
}
var Popup = (function(_Component) {
  (0, _inherits2.default)(Popup, _Component);
  var _super = _createSuper(Popup);
  function Popup() {
    var _this;
    (0, _classCallCheck2.default)(this, Popup);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      visible: false
    });
    return _this;
  }
  (0, _createClass2.default)(Popup, [
    {
      key: 'hidePopup',
      value: function hidePopup(e) {
        if (this.el === e.target) return;
        if (this.state.visible) {
          this.setState({ visible: false });
        }
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('click', this.hidePopup.bind(this));
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('click', this.hidePopup.bind(this));
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var visible = this.state.visible;
        var popupOptions = _react.default.createElement(
          'div',
          {
            className: 'popupOptions',
            __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 7 }
          },
          this.props.options.map(function(option) {
            return _react.default.createElement(
              'div',
              {
                key: option.text,
                onClick: option.action,
                __source: { fileName: _jsxFileName, lineNumber: 38, columnNumber: 11 }
              },
              option.text
            );
          })
        );
        if (!visible) popupOptions = null;
        return _react.default.createElement(
          'div',
          {
            onClick: function onClick(e) {
              _this2.setState({ visible: !visible });
              e.preventDefault();
              e.stopPropagation();
            },
            __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }
          },
          _react.default.createElement(
            'span',
            {
              ref: function ref(c) {
                return (_this2.el = c);
              },
              className: 'popup',
              __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 9 }
            },
            this.props.children
          ),
          popupOptions
        );
      }
    }
  ]);
  return Popup;
})(_react.Component);
exports.default = Popup;
(0, _defineProperty2.default)(Popup, 'propTypes', {
  options: _propTypes.default.array,
  children: _propTypes.default.node
});
//# sourceMappingURL=popup.js.map
