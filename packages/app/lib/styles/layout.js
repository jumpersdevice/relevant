'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.formImageProps = exports.animatedElement = exports.tag = exports.button = exports.buttonFont = exports.textRow = exports.universalBorder = exports.POST_BUTTONS_WIDTH_RESPONSIVE = exports.NESTING_UNIT_RESONSIVE = exports.POST_BUTTONS_WIDTH = exports.POST_BUTTONS_NESTING_UNITS = exports.NESTING_UNIT = exports.sideNavWidth = exports.mainHeaderHeight = exports.headerHeight = exports.BANNER_PROMPT_HEIGHT = exports.DESKTOP_PADDING = exports.MAX_POST_WIDTH = exports.SIDE_NAV_PADDING = exports.VOTE_BUTTON_SIZE = exports.CENTER_BUTTON_SIZE = exports.POST_IMAGE_W = exports.POST_IMAGE_H = exports.AVATAR_SIZE = exports.modalShadow = exports.activeButtonShadow = exports.linkStyle = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var colors = _interopRequireWildcard(require('./colors'));
var _sizing = _interopRequireWildcard(require('./sizing'));
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
var linkStyle = '\n  text-decoration: none;\n  color: '.concat(function(props) {
  return props.color || 'black';
}, '\n');
exports.linkStyle = linkStyle;
var activeButtonShadow = { boxShadow: '0 2px 6px hsl(240,0%,70%);' };
exports.activeButtonShadow = activeButtonShadow;
var modalShadow = { boxShadow: '0 2px 6px hsl(0,0%,70%)' };
exports.modalShadow = modalShadow;
var s = 1;
var AVATAR_SIZE = 4 * s;
exports.AVATAR_SIZE = AVATAR_SIZE;
var POST_IMAGE_H = 10 * s;
exports.POST_IMAGE_H = POST_IMAGE_H;
var POST_IMAGE_W = 20 * s;
exports.POST_IMAGE_W = POST_IMAGE_W;
var CENTER_BUTTON_SIZE = 4.5 * s;
exports.CENTER_BUTTON_SIZE = CENTER_BUTTON_SIZE;
var VOTE_BUTTON_SIZE = 2.75 * s;
exports.VOTE_BUTTON_SIZE = VOTE_BUTTON_SIZE;
var SIDE_NAV_PADDING = 3;
exports.SIDE_NAV_PADDING = SIDE_NAV_PADDING;
var MAX_POST_WIDTH = 120;
exports.MAX_POST_WIDTH = MAX_POST_WIDTH;
var DESKTOP_PADDING = 4;
exports.DESKTOP_PADDING = DESKTOP_PADDING;
var BANNER_PROMPT_HEIGHT = (0, _sizing.size)([5, 7]);
exports.BANNER_PROMPT_HEIGHT = BANNER_PROMPT_HEIGHT;
var headerHeight = (0, _sizing.default)(10);
exports.headerHeight = headerHeight;
var mainHeaderHeight = (0, _sizing.default)(10);
exports.mainHeaderHeight = mainHeaderHeight;
var sideNavWidth = (0, _sizing.default)(37);
exports.sideNavWidth = sideNavWidth;
var NESTING_UNIT = 3;
exports.NESTING_UNIT = NESTING_UNIT;
var POST_BUTTONS_NESTING_UNITS = 4;
exports.POST_BUTTONS_NESTING_UNITS = POST_BUTTONS_NESTING_UNITS;
var POST_BUTTONS_WIDTH = POST_BUTTONS_NESTING_UNITS * NESTING_UNIT;
exports.POST_BUTTONS_WIDTH = POST_BUTTONS_WIDTH;
var NESTING_UNIT_RESONSIVE = 2;
exports.NESTING_UNIT_RESONSIVE = NESTING_UNIT_RESONSIVE;
var POST_BUTTONS_WIDTH_RESPONSIVE = POST_BUTTONS_NESTING_UNITS * NESTING_UNIT_RESONSIVE;
exports.POST_BUTTONS_WIDTH_RESPONSIVE = POST_BUTTONS_WIDTH_RESPONSIVE;
var universalBorder = function universalBorder(side, color, width) {
  return '\n  border'
    .concat(side ? '-'.concat(side) : '', '-color: ')
    .concat(color || colors.lineColor, ';\n  border')
    .concat(side ? '-'.concat(side) : '', '-width: ')
    .concat(width || '1px', ';\n  border-style: solid;\n');
};
exports.universalBorder = universalBorder;
var textRow = { display: 'flex', flexDirection: 'row', alignItems: 'center' };
exports.textRow = textRow;
var buttonFont = {
  fontSize: (0, _sizing.default)(1.5),
  color: colors.white,
  fontFamily: 'HelveticaNeue-Medium'
};
exports.buttonFont = buttonFont;
var button = {
  background: colors.blue,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: (0, _sizing.size)(6),
  minWidth: (0, _sizing.size)([18, 15]),
  padding: '0 '.concat((0, _sizing.default)(2)),
  margin: 0
};
exports.button = button;
var tag = _objectSpread(
  _objectSpread({}, button),
  {},
  {
    cursor: 'pointer',
    background: colors.blue,
    color: colors.white,
    minWidth: 0,
    height: (0, _sizing.default)(4),
    padding: (0, _sizing.default)(1.5),
    fontSize: (0, _sizing.default)(1.5)
  }
);
exports.tag = tag;
var animatedElement = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10000,
  backgroundColor: 'transparent'
};
exports.animatedElement = animatedElement;
var formImageProps = { p: 2, w: 9, h: 9, m: '1 0 0 0', bradius: '50%' };
exports.formImageProps = formImageProps;
//# sourceMappingURL=layout.js.map
