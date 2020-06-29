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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _utils = require('../../../utils');
var _userSearch = _interopRequireDefault(
  require('../../createPost/web/userSearch.component')
);
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var _contentEditable = _interopRequireDefault(require('./contentEditable.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/text/web/richText.component.js';
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
if (process.env.BROWSER === true) {
  require('./richText.css');
}
var RichText = (function(_Component) {
  (0, _inherits2.default)(RichText, _Component);
  var _super = _createSuper(RichText);
  function RichText(props) {
    var _this;
    (0, _classCallCheck2.default)(this, RichText);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      body: '',
      userSearchIndex: -1,
      text: ''
    });
    _this.handleKeyDown = _this.handleKeyDown.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.handleChange = _this.handleChange.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.handleSetMention = _this.handleSetMention.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.parseBody = _this.parseBody.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(
    RichText,
    [
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
          this.lengthDelta = 0;
          if (prevState.text === this.state.text) return null;
          var text = this.state.text;
          var data = this.parseBody(text, prevState);
          return this.props.onChange(text, data);
        }
      },
      {
        key: 'parseBody',
        value: function parseBody() {
          var text =
            arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var prevState = arguments.length > 1 ? arguments[1] : undefined;
          var userSearch = this.props.userSearch;
          text = text.replace(/&nbsp;/gi, ' ');
          var words = _utils.text.getWords(text);
          var shouldParseUrl = false;
          if (prevState) {
            var prevLength = prevState.text.length || 0;
            if (text.length - prevLength > 1) shouldParseUrl = true;
            if (words[words.length - 1] == '') shouldParseUrl = true;
            if (text[text.length - 1] == '\n') shouldParseUrl = true;
          }
          var url = shouldParseUrl
            ? words.find(function(word) {
                return _utils.post.URL_REGEX.test(word.toLowerCase());
              })
            : null;
          var lastWord = words[words.length - 1];
          if (lastWord.match(/^@\S+/g) && lastWord.length > 1) {
            this.mention = lastWord;
            this.props.actions.searchUser(lastWord.replace('@', ''));
          } else if (userSearch.length) {
            this.props.actions.setUserSearch([]);
          }
          var tags = _utils.text.getTags(words);
          var mentions = _utils.text.getMentions(words);
          return {
            url: url,
            tags: tags,
            mentions: mentions,
            shouldParseUrl: shouldParseUrl
          };
        }
      },
      {
        key: 'handleChange',
        value: function handleChange(e) {
          this.setState({ text: e.target.value });
        }
      },
      {
        key: 'handleSetMention',
        value: function handleSetMention(user) {
          if (!user) return;
          this.lengthDelta = user.handle.length - this.mention.length + 2;
          var body =
            this.state.text.slice(0, -this.mention.length) + '@' + user.handle + ' ';
          this.setState({ text: body, userSearchIndex: -1 });
          var data = this.parseBody(body);
          this.props.onChange(body, data);
          this.props.actions.setUserSearch([]);
        }
      },
      {
        key: 'handleKeyDown',
        value: function handleKeyDown(e) {
          var userCount = this.props.userSearch.length;
          switch (e.keyCode) {
            case 37:
            case 38:
              if (this.props.userSearch.length) {
                e.preventDefault();
                this.setState({
                  userSearchIndex:
                    (this.state.userSearchIndex - 1 + userCount) % userCount
                });
              }
              break;
            case 39:
            case 40:
              if (this.props.userSearch.length) {
                e.preventDefault();
                this.setState({
                  userSearchIndex: (this.state.userSearchIndex + 1) % userCount
                });
              }
              break;
            case 13:
              if (this.props.userSearch.length) {
                e.preventDefault();
                var userIndex = Math.max(this.state.userSearchIndex, 0);
                var user = this.props.userSearch[userIndex];
                this.handleSetMention(user);
              }
              break;
            default:
              break;
          }
          return true;
        }
      },
      {
        key: 'render',
        value: function render() {
          return _react.default.createElement(
            'div',
            { __source: { fileName: _jsxFileName, lineNumber: 147, columnNumber: 7 } },
            _react.default.createElement(_contentEditable.default, {
              className: 'editor ' + this.props.className,
              body: this.state.body,
              placeholder: this.props.placeholder,
              onChange: this.handleChange,
              onKeyDown: this.handleKeyDown,
              lengthDelta: this.lengthDelta,
              onBlur: this.props.onBlur,
              onFocus: this.props.onFocus,
              __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 9 }
            }),
            _react.default.createElement(_userSearch.default, {
              users: this.props.userSearch,
              onChange: this.handleSetMention,
              userSearchIndex: this.state.userSearchIndex,
              __source: { fileName: _jsxFileName, lineNumber: 158, columnNumber: 9 }
            })
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, state) {
          if (props.body === state.body) return null;
          return { body: props.body, text: props.body };
        }
      }
    ]
  );
  return RichText;
})(_react.Component);
(0, _defineProperty2.default)(RichText, 'propTypes', {
  actions: _propTypes.default.object,
  onChange: _propTypes.default.func,
  userSearch: _propTypes.default.array,
  className: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  body: _propTypes.default.string
});
function mapStateToProps(state) {
  return { userSearch: state.user.search };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_objectSpread({}, userActions), dispatch)
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RichText);
exports.default = _default;
//# sourceMappingURL=richText.component.js.map
