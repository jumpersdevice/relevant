'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
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
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/text/web/contentEditable.component.js';
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
var HTML_REGEX = new RegExp(/<[^>]*>/, 'gm');
function stripContentEditableHTML(text) {
  return (text || '')
    .replace(/<div><br>/g, '\n')
    .replace(/<\/div>/g, '\n')
    .replace(/<br>/g, '\n')
    .replace(HTML_REGEX, '');
}
function renderBody(lines) {
  return lines
    .split('\n')
    .map(function(line) {
      return line
        .split(' ')
        .map(function(word) {
          if (word[0] === '#' || word[0] === '@') {
            return '<b>' + word + '</b>';
          }
          return word;
        })
        .join(' ');
    })
    .join('\n');
}
function onPaste(e) {
  e.preventDefault();
  var text = e.clipboardData
    .getData('text/plain')
    .replace(/&/g, '&amp')
    .replace(/</g, '&lt')
    .replace(/>/g, '&gt');
  document.execCommand('insertHTML', false, text);
}
function getCurrentCursorPosition(parentId) {
  var el = document.getElementById(parentId);
  var caretOffset = 0;
  if (typeof window.getSelection !== 'undefined') {
    var range = window.getSelection().getRangeAt(0);
    var selected = range.toString().length;
    var preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(el);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    caretOffset = preCaretRange.toString().length - selected;
  }
  return caretOffset;
}
function createRange(node, chars, range) {
  if (!range) {
    range = document.createRange();
    range.selectNode(node);
    range.setStart(node, 0);
  }
  if (chars.count === 0) {
    range.setEnd(node, chars.count);
  } else if (node && chars.count > 0) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.length < chars.count) {
        chars.count -= node.textContent.length;
      } else {
        range.setEnd(node, chars.count);
        chars.count = 0;
      }
    } else {
      for (var lp = 0; lp < node.childNodes.length; lp++) {
        range = createRange(node.childNodes[lp], chars, range);
        if (chars.count === 0) {
          break;
        }
      }
    }
  }
  return range;
}
function setCurrentCursorPosition(node, chars) {
  if (chars >= 0) {
    var selection = window.getSelection();
    var range = createRange(node, { count: chars });
    if (range) {
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}
var ContentEditable = (function(_React$Component) {
  (0, _inherits2.default)(ContentEditable, _React$Component);
  var _super = _createSuper(ContentEditable);
  function ContentEditable() {
    var _this;
    (0, _classCallCheck2.default)(this, ContentEditable);
    _this = _super.call(this);
    _this.emitChange = _this.emitChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(ContentEditable, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.el.focus();
        document.execCommand('defaultParagraphSeparator', false, 'br');
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(lastProps) {
        if (lastProps.body === this.props.body) return;
        var lengthWithoutNewlines =
          this.props.body.replace(/\n/, '').replace(/&[^;]+;/g, ' ').length + 1;
        var newPosition = this.position + (this.hitEnter ? 1 : 0);
        if (this.props.lengthDelta) {
          setCurrentCursorPosition(this.el, (this.position += this.props.lengthDelta));
        } else if (newPosition <= lengthWithoutNewlines) {
          setCurrentCursorPosition(this.el, newPosition);
          this.hitEnter = false;
        } else {
          setCurrentCursorPosition(this.el, lengthWithoutNewlines - 1);
        }
        this.el.focus();
      }
    },
    {
      key: 'handleKeyDown',
      value: function handleKeyDown(e) {
        if (this.props.onKeyDown && this.props.onKeyDown(e) === false) {
          return false;
        }
        this.hitEnter = e.keyCode === 13;
        return true;
      }
    },
    {
      key: 'emitChange',
      value: function emitChange(e) {
        if (!this.el) return;
        var html = this.el.innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
          var value = stripContentEditableHTML(html);
          e.target = { value: value };
          this.props.onChange(e);
        }
        this.lastHtml = html;
        this.position = getCurrentCursorPosition('editor');
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        this.lastHTML = renderBody(this.props.body);
        var className = [this.props.className];
        if (this.props.body.length) className.push('active');
        return _react.default.createElement('div', {
          id: 'editor',
          className: this.props.className,
          placeholder: this.props.placeholder,
          role: 'textbox',
          ref: function ref(el) {
            return (_this2.el = el);
          },
          onInput: this.emitChange,
          onKeyDown: this.handleKeyDown,
          onBlur: this.props.onBlur || this.emitChange,
          onPaste: onPaste,
          contentEditable: !this.props.disabled,
          dangerouslySetInnerHTML: { __html: this.lastHTML },
          __source: { fileName: _jsxFileName, lineNumber: 176, columnNumber: 7 }
        });
      }
    }
  ]);
  return ContentEditable;
})(_react.default.Component);
exports.default = ContentEditable;
(0, _defineProperty2.default)(ContentEditable, 'propTypes', {
  body: _propTypes.default.string,
  lengthDelta: _propTypes.default.number,
  onKeyDown: _propTypes.default.func,
  onChange: _propTypes.default.func,
  className: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  disabled: _propTypes.default.object
});
//# sourceMappingURL=contentEditable.component.js.map
