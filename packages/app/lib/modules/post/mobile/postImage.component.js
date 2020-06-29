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
var _reactNativeWebLinearGradient = _interopRequireDefault(
  require('react-native-web-linear-gradient')
);
var _utils = require('../../../utils');
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/postImage.component.js';
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
var PostImage = (function(_Component) {
  (0, _inherits2.default)(PostImage, _Component);
  var _super = _createSuper(PostImage);
  function PostImage(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, PostImage);
    _this = _super.call(this, props, context);
    _this.openLink = _this.openLink.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {};
    return _this;
  }
  (0, _createClass2.default)(PostImage, [
    { key: 'componentDidMount', value: function componentDidMount() {} },
    {
      key: 'openLink',
      value: function openLink(url) {
        this.props.actions.goToUrl(url, this.props.post._id);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var image = null;
        var post = this.props.metaPost || this.props.post;
        if (post.metaPost) post = post.metaPost;
        if (!post) return null;
        var single = false;
        var smallerImg;
        var title = null;
        var linkEl = null;
        var time;
        var author;
        var authorEl;
        if (post.articleDate) {
          time = _utils.numbers.getTimestamp(Date.parse(post.articleDate));
        }
        if (post.articleAuthor && post.articleAuthor.length) {
          author = post.articleAuthor.join(', ');
          authorEl = _react.default.createElement(
            _reactNativeWeb.Text,
            {
              numberOfLines: 1,
              style: [
                styles.font12,
                styles.articleTitle,
                single ? styles.darkGrey : null
              ],
              __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 9 }
            },
            author || ''
          );
        }
        if (post.image && !post.image.match('gif')) {
          image = post.image.match('http') ? post.image : 'https:' + post.image;
        }
        if (post.link || post.url) {
          linkEl = _react.default.createElement(
            _reactNativeWeb.View,
            { __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 9 } },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [
                  styles.font12,
                  styles.articleTitle,
                  single ? styles.darkGrey : null
                ],
                __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 11 }
              },
              post.publisher || post.domain,
              time ? ' · ' + time : '',
              authorEl ? ' · ' : null,
              authorEl
            )
          );
        }
        title = post.title ? post.title.trim() : '';
        var titleEl = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [styles.textContainer],
            __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            { __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 9 } },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                numberOfLines: 3,
                style: [
                  styles.articleTitle,
                  styles.bebasBold,
                  { color: 'white', lineHeight: 28 },
                  { fontSize: 30, letterSpacing: 0.1, marginBottom: 0, paddingTop: 3 },
                  single ? styles.darkGrey : null
                ],
                __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 11 }
              },
              title || 'Untitled'
            ),
            linkEl
          )
        );
        var imageEl;
        var imgColors = [
          'hsla(240, 70%, 30%, .01)',
          'hsla(240, 70%, 20%, .05)',
          'hsla(240, 70%, 10%, .2)',
          'hsla(240, 70%, 10%, .7)',
          'hsla(240, 70%, 10%, .6)'
        ];
        var titleLength = post.title ? post.title.length : 0;
        var color = post.body ? post.body.length : titleLength;
        color = (color % 220) + 200 || 200;
        color = Math.max(100, color);
        var colors = [
          'hsla(' + parseInt(color - 30, 10) + ', 100%, 50%, 1)',
          'hsla(' + parseInt(color, 10) + ',      100%, 50%, 1)',
          'hsla(' + parseInt(color + 30, 10) + ', 100%, 50%, 1)'
        ];
        var start = { x: 0.8, y: 0.0 };
        var end = { x: 0.2, y: 1.0 };
        var gradient = _react.default.createElement(
          _reactNativeWebLinearGradient.default,
          {
            start: image ? { x: 0.5, y: 0.0 } : start,
            end: image ? { x: 0.5, y: 1.0 } : end,
            colors: image ? imgColors : colors,
            style: [styles.linearGradient, smallerImg ? { height: 180 } : null],
            __source: { fileName: _jsxFileName, lineNumber: 119, columnNumber: 7 }
          },
          single ? null : titleEl
        );
        var img;
        if (image) {
          img = _react.default.createElement(_reactNativeWeb.Image, {
            style: [styles.postImage, smallerImg ? { height: 180 } : null],
            source: image
              ? { uri: image }
              : require('../../../../public/img/missing.png'),
            __source: { fileName: _jsxFileName, lineNumber: 131, columnNumber: 9 }
          });
        }
        if (post.link || post.url || image) {
          imageEl = _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: [styles.imageCont, smallerImg ? { height: 180 } : null],
              __source: { fileName: _jsxFileName, lineNumber: 140, columnNumber: 9 }
            },
            img,
            !single ? gradient : null
          );
        }
        return _react.default.createElement(
          _reactNativeWeb.TouchableHighlight,
          {
            style: { flex: 1, marginTop: 0 },
            underlayColor: 'transparent',
            onPressIn: function onPressIn(e) {
              _this2.touchable1x = e.nativeEvent.pageX;
            },
            onPress: function onPress(e) {
              var x = e.nativeEvent.pageX;
              if (Math.abs(_this2.touchable1x - x) > 5) {
                return;
              }
              _this2.openLink(post.link || post.url);
            },
            pressRetentionOffset: { top: 100, left: 100, right: 100, bottom: 100 },
            __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: [styles.postImageContainer],
              __source: { fileName: _jsxFileName, lineNumber: 164, columnNumber: 9 }
            },
            imageEl,
            single ? titleEl : null
          )
        );
      }
    }
  ]);
  return PostImage;
})(_react.Component);
(0, _defineProperty2.default)(PostImage, 'propTypes', {
  actions: _propTypes.default.object,
  post: _propTypes.default.object,
  metaPost: _propTypes.default.object
});
var _default = PostImage;
exports.default = _default;
var localStyles = _reactNativeWeb.StyleSheet.create({
  whiteText: { backgroundColor: 'transparent', color: 'white' },
  textContainer: {
    paddingHorizontal: _global.mainPadding,
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  articleTitle: { backgroundColor: 'transparent', color: 'white' },
  postImage: {
    height: _global.smallScreen ? 200 : 256,
    flex: 1,
    maxWidth: _global.fullWidth,
    position: 'relative',
    resizeMode: 'cover'
  },
  imageCont: { height: _global.smallScreen ? 200 : 256, flex: 1, overflow: 'hidden' },
  linearGradient: {
    height: 256,
    width: _global.fullWidth,
    position: 'absolute',
    bottom: 0
  },
  postImageContainer: {
    marginBottom: 0,
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=postImage.component.js.map
