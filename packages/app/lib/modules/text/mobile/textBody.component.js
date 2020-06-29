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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var utils = _interopRequireWildcard(require('../../../utils'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/text/mobile/textBody.component.js';
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
var TextBody = (function(_Component) {
  (0, _inherits2.default)(TextBody, _Component);
  var _super = _createSuper(TextBody);
  function TextBody(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, TextBody);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'setSelected',
      function(user) {
        return _this.props.actions && _this.props.actions.goToProfile(user);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'goToPost',
      function() {
        var _this$props = _this.props,
          actions = _this$props.actions,
          post = _this$props.post;
        actions && post && post._id && actions.goToPost(_this.props.post);
      }
    );
    _this.goToPost = _this.goToPost.bind((0, _assertThisInitialized2.default)(_this));
    _this.goToTopic = _this.goToTopic.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(TextBody, [
    {
      key: 'setTag',
      value: function setTag(tag) {
        if (!this.props.actions) return;
        this.props.actions.selectTag({ _id: tag.replace('#', '') });
        this.props.actions.changeTab('discover');
        this.props.actions.resetRoutes('discover');
      }
    },
    {
      key: 'goToTopic',
      value: function goToTopic(tag) {
        var topic = { _id: tag.replace('#', '').trim(), categoryName: tag };
        this.props.actions.goToTopic(topic);
      }
    },
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(next) {
        if (this.props.body !== next.body || this.props.children !== next.children) {
          return true;
        }
        return false;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var expanded = this.props.singlePost;
        var maxTextLength = this.props.maxTextLength || Math.pow(100, 10);
        var body = this.props.body || this.props.children || '';
        var post = this.props.post || {};
        var showAllMentions = this.props.showAllMentions;
        var bodyEl = null;
        var bodyObj = [];
        var extraTags = post.tags || [];
        var textArr = utils.text.getWords(body);
        textArr.forEach(function(section) {
          var word = {};
          word.text = section;
          if (section.match(/^#/) && section.replace(/#/g, '') !== '') {
            word.type = 'hashtag';
            var ind = extraTags.indexOf(word.text.replace('#', '').trim());
            if (ind > -1) extraTags.splice(ind, 1);
          } else if (section.match(/^@/) && section.replace(/@/g, '') !== '') {
            var m = section.replace('@', '');
            if (
              post.mentions &&
              post.mentions.find(function(mention) {
                return mention === m;
              })
            ) {
              word.type = 'mention';
            }
            if (showAllMentions) word.type = 'mention';
          } else if (utils.post.URL_REGEX.test(section)) {
            word.type = 'url';
          } else word.type = 'text';
          bodyObj.push(word);
        });
        var breakText;
        var tagsOnEnd = false;
        extraTags.forEach(function(tag) {
          bodyObj.push({ type: 'hashtag', text: ' #' + tag });
        });
        var reduced = [];
        var currentText = '';
        bodyObj.forEach(function(word, i) {
          if (word.type === 'text' && i <= maxTextLength) {
            currentText += word.text;
          } else {
            if (currentText.length) {
              reduced.push({ type: 'text', text: currentText });
            }
            reduced.push(word);
            currentText = '';
          }
        });
        if (currentText.length) {
          reduced.push({ type: 'text', text: currentText });
        }
        bodyEl = reduced.map(function(word, i) {
          var space = '';
          if (breakText) space = ' ';
          if (word.type === 'hashtag') {
            if (i >= maxTextLength) tagsOnEnd = true;
            return _react.default.createElement(
              _reactNativeWeb.Text,
              {
                key: i,
                onPress: function onPress() {
                  return _this2.goToTopic(word.text);
                },
                style: [_this2.props.style, styles.active],
                __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 11 }
              },
              word.text + space
            );
          }
          if (word.type === 'mention') {
            if (i >= maxTextLength) tagsOnEnd = true;
            return _react.default.createElement(
              _reactNativeWeb.Text,
              {
                key: i,
                onPress: function onPress() {
                  return _this2.setSelected(word.text);
                },
                style: [_this2.props.style, styles.active],
                __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 11 }
              },
              word.text + space
            );
          }
          if (word.type === 'url') {
            return _react.default.createElement(
              _reactNativeWeb.Text,
              {
                key: i,
                onPress: function onPress() {
                  var link = word.text;
                  if (!link.match(/http:\/\//i) && !link.match(/https:\/\//i)) {
                    word.text = 'http://' + word.text;
                  }
                  return _reactNativeWeb.Linking.openURL(word.text);
                },
                style: [_this2.props.style, styles.active],
                __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 11 }
              },
              word.text + space
            );
          }
          if (i < maxTextLength || expanded) {
            return _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: _this2.props.style,
                key: i,
                __source: { fileName: _jsxFileName, lineNumber: 160, columnNumber: 11 }
              },
              word.text
            );
          }
          if (!breakText) {
            breakText = i;
            return _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: _this2.props.style,
                key: 'break',
                __source: { fileName: _jsxFileName, lineNumber: 168, columnNumber: 11 }
              },
              '...',
              ' '
            );
          }
          return null;
        });
        if (breakText) {
          bodyEl.push(
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [this.props.style, styles.greyText],
                key: 'readmore',
                __source: { fileName: _jsxFileName, lineNumber: 178, columnNumber: 9 }
              },
              tagsOnEnd ? '...' : '',
              'read more'
            )
          );
        }
        return _react.default.createElement(
          _reactNativeWeb.Text,
          {
            numberOfLines: this.props.numberOfLines,
            ellipsizeMode: 'tail',
            style: [this.props.style],
            __source: { fileName: _jsxFileName, lineNumber: 185, columnNumber: 7 }
          },
          bodyEl
        );
      }
    }
  ]);
  return TextBody;
})(_react.Component);
(0, _defineProperty2.default)(TextBody, 'propTypes', {
  actions: _propTypes.default.object,
  post: _propTypes.default.object,
  body: _propTypes.default.string,
  children: _propTypes.default.node,
  singlePost: _propTypes.default.bool,
  maxTextLength: _propTypes.default.number,
  showAllMentions: _propTypes.default.bool,
  numberOfLines: _propTypes.default.number,
  style: _reactNativeWeb.Text.propTypes.style
});
var _default = TextBody;
exports.default = _default;
var localStyles = _reactNativeWeb.StyleSheet.create({});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=textBody.component.js.map
