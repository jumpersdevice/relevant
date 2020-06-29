'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styles = require('../../../styles');
var _tooltip = _interopRequireDefault(require('../../tooltip/tooltip.component'));
var _layout = require('../../../styles/layout');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/vote-buttons/postbutton.js';
var BUTTON_IMAGES = {
  UPVOTE: {
    white: require('../../../../public/img/vote_buttons/upvote-white.png'),
    default: require('../../../../public/img/vote_buttons/upvote-grey-outline.png'),
    active: require('../../../../public/img/vote_buttons/upvote-blue.png'),
    hover: require('../../../../public/img/vote_buttons/upvote-blue-outline.png')
  },
  DOWNVOTE: {
    white: require('../../../../public/img/vote_buttons/downvote-white.png'),
    default: require('../../../../public/img/vote_buttons/downvote-grey-outline.png'),
    active: require('../../../../public/img/vote_buttons/downvote-red.png'),
    hover: require('../../../../public/img/vote_buttons/downvote-red-outline.png')
  }
};
var ButtonImage = (0, _primitives.default)(_uni.Image).withConfig({
  displayName: 'postbutton__ButtonImage',
  componentId: 'sc-1372biy-0'
})(
  ['', ' ', ''],
  function() {
    return !_styles.isNative
      ? 'transition-property: all;\n        transition-duration: 0.2s;\n        transition-timing-function: ease'
      : '';
  },
  function(p) {
    return p.hover && !p.active && !p.disabled && !_styles.isNative
      ? 'transform: scale(1.1);'
      : '';
  }
);
PostButton.propTypes = {
  color: _propTypes.default.string,
  alt: _propTypes.default.string,
  isActive: _propTypes.default.bool,
  imageSet: _propTypes.default.oneOf(['DOWNVOTE', 'UPVOTE']),
  onPress: _propTypes.default.func,
  tooltipData: _propTypes.default.object
};
function PostButton(_ref) {
  var alt = _ref.alt,
    isActive = _ref.isActive,
    imageSet = _ref.imageSet,
    onPress = _ref.onPress,
    color = _ref.color,
    tooltipData = _ref.tooltipData;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    active = _useState4[0],
    setActive = _useState4[1];
  var images = BUTTON_IMAGES[imageSet];
  var defaultState = images[color] || images.default;
  var source = (isActive && images.active) || (hover && images.hover) || defaultState;
  console.log('vote button', source);
  console.log(BUTTON_IMAGES);
  return _react.default.createElement(
    _tooltip.default,
    {
      data: tooltipData,
      name: 'voteDesk',
      __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.Touchable,
      {
        onPress: onPress,
        bradius: 2,
        __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 }
      },
      _react.default.createElement(ButtonImage, {
        w: _layout.VOTE_BUTTON_SIZE,
        h: _layout.VOTE_BUTTON_SIZE,
        alt: alt,
        resizeMode: 'contain',
        source: source,
        hover: hover,
        active: active,
        onMouseDown: function onMouseDown() {
          return setActive(1);
        },
        onMouseUp: function onMouseUp() {
          return setActive(0);
        },
        onMouseEnter: function onMouseEnter() {
          return setHover(1);
        },
        onMouseLeave: function onMouseLeave() {
          setHover(0);
          setActive(0);
        },
        __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 9 }
      })
    )
  );
}
var _default = PostButton;
exports.default = _default;
//# sourceMappingURL=postbutton.js.map
