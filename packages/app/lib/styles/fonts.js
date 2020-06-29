'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.button = exports.CTALink = exports.communityLink = exports.secondaryText = exports.commentText = exports.altLink = exports.link = exports.numericalValue = exports.title = exports.highlight = exports.header = exports.bodyStyle = exports.lh = exports.Georgia = exports.HelveticaNeue = exports.HelveticaNeueMedium = exports.HelveticaNeueCondensedBold = exports.HelveticaNeueBold = exports.GEORGIA = exports.HELVETICA_REGULAR = exports.HELVETICA_NEUE = exports.HELVETICA_NEUE_MEDIUM = exports.HELVETICA_NEUE_CONDENSED_BOLD = exports.HELVETICA_NEUE_BOLD = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _sizing = _interopRequireDefault(require('./sizing'));
var colors = _interopRequireWildcard(require('./colors'));
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
var HELVETICA_NEUE_BOLD = 'HelveticaNeue-Bold';
exports.HELVETICA_NEUE_BOLD = HELVETICA_NEUE_BOLD;
var HELVETICA_NEUE_CONDENSED_BOLD = 'HelveticaNeue-CondensedBold';
exports.HELVETICA_NEUE_CONDENSED_BOLD = HELVETICA_NEUE_CONDENSED_BOLD;
var HELVETICA_NEUE_MEDIUM = 'HelveticaNeue-Medium';
exports.HELVETICA_NEUE_MEDIUM = HELVETICA_NEUE_MEDIUM;
var HELVETICA_NEUE = 'HelveticaNeue';
exports.HELVETICA_NEUE = HELVETICA_NEUE;
var HELVETICA_REGULAR = 'HelveticaNeue';
exports.HELVETICA_REGULAR = HELVETICA_REGULAR;
var GEORGIA = 'Georgia';
exports.GEORGIA = GEORGIA;
var HelveticaNeueBold = "font-family: '".concat(HELVETICA_NEUE_BOLD, "';");
exports.HelveticaNeueBold = HelveticaNeueBold;
var HelveticaNeueCondensedBold = "font-family: '".concat(
  HELVETICA_NEUE_CONDENSED_BOLD,
  "';"
);
exports.HelveticaNeueCondensedBold = HelveticaNeueCondensedBold;
var HelveticaNeueMedium = "font-family: '".concat(HELVETICA_NEUE_MEDIUM, "';");
exports.HelveticaNeueMedium = HelveticaNeueMedium;
var HelveticaNeue = "font-family: '".concat(HELVETICA_NEUE, "';");
exports.HelveticaNeue = HelveticaNeue;
var Georgia = "font-family: '".concat(GEORGIA, "';");
exports.Georgia = Georgia;
var lh = 1.4;
exports.lh = lh;
var bodyStyle = {
  fontSize: (0, _sizing.default)(1.75),
  lineHeight: (0, _sizing.default)(1.75 * lh),
  fontFamily: HELVETICA_REGULAR,
  color: colors.black
};
exports.bodyStyle = bodyStyle;
var header = {
  fontSize: (0, _sizing.default)(3),
  lineHeight: (0, _sizing.default)(3 * lh),
  fontFamily: HELVETICA_NEUE_BOLD,
  color: colors.black
};
exports.header = header;
var highlight = {
  fontSize: (0, _sizing.default)(2.5),
  lineHeight: (0, _sizing.default)(2.5 * lh),
  fontFamily: GEORGIA,
  fontStyle: 'italic',
  color: colors.black
};
exports.highlight = highlight;
var title = {
  fontSize: (0, _sizing.default)(2.5),
  lineHeight: (0, _sizing.default)(2.5 * lh),
  fontFamily: HELVETICA_NEUE_CONDENSED_BOLD,
  color: colors.black
};
exports.title = title;
var numericalValue = {
  fontSize: (0, _sizing.default)(1.75),
  lineHeight: (0, _sizing.default)(1.75 * lh),
  fontFamily: HELVETICA_NEUE_CONDENSED_BOLD,
  color: colors.black
};
exports.numericalValue = numericalValue;
var link = {
  fontSize: (0, _sizing.default)(1.5),
  lineHeight: (0, _sizing.default)(1.5 * lh),
  fontFamily: HELVETICA_NEUE_MEDIUM,
  color: colors.grey
};
exports.link = link;
var altLink = _objectSpread(_objectSpread({}, link), {}, { textDecoration: 'underline' });
exports.altLink = altLink;
var commentText = {
  fontSize: (0, _sizing.default)(2),
  lineHeight: (0, _sizing.default)(2 * lh),
  fontFamily: GEORGIA,
  color: colors.black
};
exports.commentText = commentText;
var secondaryText = {
  fontSize: (0, _sizing.default)(1.5),
  lineHeight: (0, _sizing.default)(1.5 * lh),
  fontFamily: HELVETICA_REGULAR,
  color: colors.secondaryText
};
exports.secondaryText = secondaryText;
var communityLink = {
  fontSize: (0, _sizing.default)(1.75),
  lineHeight: (0, _sizing.default)(1.75 * lh),
  fontFamily: HELVETICA_REGULAR,
  color: colors.grey
};
exports.communityLink = communityLink;
var CTALink = {
  fontSize: (0, _sizing.default)(1.5),
  lineHeight: (0, _sizing.default)(1.5 * lh),
  fontFamily: HELVETICA_REGULAR,
  color: colors.blue
};
exports.CTALink = CTALink;
var button = {
  background: colors.blue,
  color: colors.white,
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  justifyContent: 'space-between',
  height: (0, _sizing.default)(16),
  minWidth: (0, _sizing.default)(18),
  padding: '0  '.concat((0, _sizing.default)(2)),
  fontsize: (0, _sizing.default)(1.5),
  fontFamily: HELVETICA_NEUE_MEDIUM
};
exports.button = button;
//# sourceMappingURL=fonts.js.map
