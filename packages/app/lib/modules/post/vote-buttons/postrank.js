'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = PostRank;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _post = require('../../../utils/post');
var _styles = require('../../../styles');
var _tooltip = _interopRequireDefault(require('../../tooltip/tooltip.component'));
var _uni = require('../../styled/uni');
var _reactNativeWeb = require('react-native-web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/vote-buttons/postrank.js';
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
PostRank.propTypes = {
  horizontal: _propTypes.default.bool,
  color: _propTypes.default.string,
  post: _propTypes.default.object
};
function PostRank(_ref) {
  var horizontal = _ref.horizontal,
    color = _ref.color,
    post = _ref.post;
  var type = (0, _post.getPostType)({ post: post });
  var tipText =
    type === 'link'
      ? "This is the article's reputation score"
      : 'This is the '.concat(type, "'s reputation scroe");
  var tooltipData = { text: tipText, position: 'right' };
  var postRank = post.data
    ? Math.round(post.data.pagerank) + post.data.upVotes - post.data.downVotes
    : 0;
  return _react.default.createElement(
    _uni.View,
    {
      h: horizontal ? 2 : 4,
      minwidth: horizontal ? 8 : null,
      justify: 'center',
      align: 'center',
      __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 5 }
    },
    _react.default.createElement(_tooltip.default, {
      name: 'vote',
      data: tooltipData,
      __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }
    }),
    _react.default.createElement(
      _uni.View,
      {
        m: horizontal ? '0 1' : null,
        fdirection: 'row',
        align: 'center',
        __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 7 }
      },
      _react.default.createElement(_uni.Image, {
        h: 1.2,
        w: 1.2,
        style: {
          opacity: 0.5,
          transform: [
            _objectSpread(
              {},
              _reactNativeWeb.Platform.select({
                ios: { translateY: 1.0 },
                android: { translateY: 1.0 },
                default: { translateY: 0.5 }
              })
            )
          ]
        },
        resizeMode: 'contain',
        resizeMethod: 'resize',
        mr: 0.2,
        source: require('../../../../public/img/r.png'),
        __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 9 }
      }),
      _react.default.createElement(
        _uni.SmallText,
        {
          h:
            _reactNativeWeb.Platform && _reactNativeWeb.Platform.OS === 'android'
              ? 1.7
              : 2,
          c: color || _styles.colors.secondaryText,
          __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 9 }
        },
        postRank || 0
      )
    )
  );
}
//# sourceMappingURL=postrank.js.map
