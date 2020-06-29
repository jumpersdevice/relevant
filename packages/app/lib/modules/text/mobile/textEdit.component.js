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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _textBody = _interopRequireDefault(require('./textBody.component'));
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/text/mobile/textEdit.component.js';
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
var styles;
var TextEdit = (function(_Component) {
  (0, _inherits2.default)(TextEdit, _Component);
  var _super = _createSuper(TextEdit);
  function TextEdit(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, TextEdit);
    _this = _super.call(this, props, context);
    _this.state = { height: 50 };
    return _this;
  }
  (0, _createClass2.default)(TextEdit, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setState({ text: this.props.text });
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        setTimeout(this.textInput.focus, 100);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var buttonAdjust = 0;
        if (_reactNativeWeb.Platform.OS === 'android') buttonAdjust = 80;
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.TextInput,
            {
              multiline: true,
              underlineColorAndroid: 'transparent',
              placeholder: this.props.placeholder,
              placeholderTextColor: _global.greyText,
              ref: function ref(c) {
                return (_this2.textInput = c);
              },
              style: [
                {
                  height: Math.min(this.state.height, 120) + buttonAdjust,
                  maxHeight: 120 + buttonAdjust,
                  minHeight: 50,
                  paddingBottom: buttonAdjust,
                  paddingHorizontal: 0
                },
                this.props.style
              ],
              textAlignVertical: 'top',
              onFocus: this.props.onFocus,
              onBlur: this.props.onBlur,
              onChange: function onChange(evt) {
                return _this2.setState({ text: evt.nativeEvent.text });
              },
              onContentSizeChange: function onContentSizeChange(e) {
                _this2.setState({
                  height: Math.max(e.nativeEvent.contentSize.height, 50)
                });
                if (_this2.props.onContentSizeChange) _this2.props.onContentSizeChange();
              },
              blurOnSubmit: false,
              onSubmitEditing: function onSubmitEditing() {
                if (_this2.bug) {
                  var text = _this2.state.text.text;
                  text += '\n';
                  _this2.setState({ text: text });
                  return (_this2.bug = false);
                }
                return (_this2.bug = true);
              },
              __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 }
            },
            _react.default.createElement(
              _textBody.default,
              {
                style: { flex: 1 },
                showAllMentions: true,
                __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 11 }
              },
              this.state.text
            )
          ),
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: [styles.editingCommentButtons, { marginTop: -1 * buttonAdjust }],
              __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.Button,
              {
                mr: 1,
                h: 5,
                p: ['0 2'],
                bg: _styles.colors.lightGrey,
                c: _styles.colors.black,
                onPress: function onPress() {
                  _this2.props.toggleFunction();
                },
                __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 11 }
              },
              'Cancel'
            ),
            _react.default.createElement(
              _uni.Button,
              {
                h: 5,
                p: ['0 2'],
                onPress: function onPress() {
                  return _this2.props.saveEditFunction(_this2.state.text);
                },
                __source: { fileName: _jsxFileName, lineNumber: 107, columnNumber: 11 }
              },
              'Save changes'
            )
          )
        );
      }
    }
  ]);
  return TextEdit;
})(_react.Component);
(0, _defineProperty2.default)(TextEdit, 'propTypes', {
  text: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  style: _propTypes.default.object,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onContentSizeChange: _propTypes.default.func,
  toggleFunction: _propTypes.default.func,
  saveEditFunction: _propTypes.default.func
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  editingCommentButtons: {
    flexDirection: 'row',
    paddingVertical: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
});
TextEdit.propTypes = {
  text: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  toggleFunction: _propTypes.default.func,
  saveEditFunction: _propTypes.default.func,
  style: _propTypes.default.array
};
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
var _default = TextEdit;
exports.default = _default;
//# sourceMappingURL=textEdit.component.js.map
