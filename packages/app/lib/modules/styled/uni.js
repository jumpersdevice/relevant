'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.ButtonWithIcon = ButtonWithIcon;
exports.Badge = Badge;
exports.EthAddress = EthAddress;
exports.WarningBox = exports.ErrorBox = exports.Err = exports.Overlay = exports.Warning = exports.CloseX = exports.Spacer = exports.BigNumber = exports.NumericalValue = exports.Tag = exports.ViewButton = exports.Button = exports.HoverButton = exports.ButtonText = exports.StaticButton = exports.BodyText = exports.CommentText = exports.CommunityLink = exports.AltLink = exports.SmallText = exports.SecondaryText = exports.CTALink = exports.LinkFont = exports.Title = exports.Highlight = exports.Header = exports.MobileDivider = exports.Divider = exports.FormImage = exports.ImageWrapper = exports.Image = exports.InlineText = exports.Text = exports.AbsoluteView = exports.View = exports.Box = exports.Touchable = void 0;
var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styles = require('../../styles');
var _numbers = require('../../utils/numbers');
var _reactNativeWeb = require('react-native-web');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _jsxFileName = '/Users/slavab/local/relevant/packages/app/src/modules/styled/uni.js';
var Touchable = _reactNativeWeb.TouchableOpacity;
exports.Touchable = Touchable;
var Box = _primitives.default.View.withConfig({
  displayName: 'uni__Box',
  componentId: 'sc-1cjgut2-0'
})(['', ' ', ''], _styles.mixins.margin, _styles.mixins.padding);
exports.Box = Box;
var View = _primitives.default.View.withConfig({
  displayName: 'uni__View',
  componentId: 'sc-1cjgut2-1'
})(
  ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.padding,
  _styles.mixins.flex,
  _styles.mixins.font,
  _styles.mixins.background,
  _styles.mixins.border,
  _styles.mixins.width,
  _styles.mixins.height,
  _styles.mixins.zIndex,
  _styles.mixins.borderRadius
);
exports.View = View;
var AbsoluteView = _primitives.default.View.withConfig({
  displayName: 'uni__AbsoluteView',
  componentId: 'sc-1cjgut2-2'
})(['position:absolute;', ''], _styles.mixins.position);
exports.AbsoluteView = AbsoluteView;
var Text = _primitives.default.Text.withConfig({
  displayName: 'uni__Text',
  componentId: 'sc-1cjgut2-3'
})(
  ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.padding,
  _styles.mixins.flex,
  _styles.mixins.font,
  _styles.mixins.background,
  _styles.mixins.border,
  _styles.mixins.color,
  _styles.mixins.height
);
exports.Text = Text;
var InlineText = _primitives.default.Text.withConfig({
  displayName: 'uni__InlineText',
  componentId: 'sc-1cjgut2-4'
})(
  ['', ' ', ' ', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.padding,
  _styles.mixins.font,
  _styles.mixins.color
);
exports.InlineText = InlineText;
var Image = _primitives.default.Image.withConfig({
  displayName: 'uni__Image',
  componentId: 'sc-1cjgut2-5'
})(
  ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.height,
  _styles.mixins.width,
  _styles.mixins.padding,
  _styles.mixins.background,
  _styles.mixins.borderRadius,
  _styles.mixins.flex
);
exports.Image = Image;
var ImageWrapper = _primitives.default.View.withConfig({
  displayName: 'uni__ImageWrapper',
  componentId: 'sc-1cjgut2-6'
})(
  ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.flex
);
exports.ImageWrapper = ImageWrapper;
var FormImage = function FormImage(props) {
  return _react.default.createElement(
    Image,
    (0, _extends2.default)({}, props, _styles.layout.formImageProps, {
      __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 35 }
    })
  );
};
exports.FormImage = FormImage;
var Divider = _primitives.default.View.withConfig({
  displayName: 'uni__Divider',
  componentId: 'sc-1cjgut2-7'
})(['', ' ', ' ', ''], _styles.mixins.margin, _styles.mixins.padding, function(p) {
  if (p.screenSize && p.screenSize > 0) {
    return '\n        height: '
      .concat((0, _styles.sizing)(4), ';\n        background-color: ')
      .concat(_styles.colors.dividerBg, ';\n      ');
  }
  return _styles.layout.universalBorder('bottom');
});
exports.Divider = Divider;
var MobileDivider = (0, _primitives.default)(View).withConfig({
  displayName: 'uni__MobileDivider',
  componentId: 'sc-1cjgut2-8'
})(
  ['height:', ';background-color:', ';'],
  (0, _styles.sizing)(4),
  _styles.colors.dividerBg
);
exports.MobileDivider = MobileDivider;
var Header = _primitives.default.Text.withConfig({
  displayName: 'uni__Header',
  componentId: 'sc-1cjgut2-9'
})(['', ' ', ' ', ''], _styles.fonts.header, _styles.mixins.color, _styles.mixins.margin);
exports.Header = Header;
var Highlight = _primitives.default.Text.withConfig({
  displayName: 'uni__Highlight',
  componentId: 'sc-1cjgut2-10'
})(
  ['', ' ', ' ', ''],
  _styles.fonts.highlight,
  _styles.mixins.color,
  _styles.mixins.margin
);
exports.Highlight = Highlight;
var Title = _primitives.default.Text.withConfig({
  displayName: 'uni__Title',
  componentId: 'sc-1cjgut2-11'
})(
  ['', ' ', ' ', ' ', ' ', ''],
  _styles.fonts.title,
  _styles.mixins.color,
  _styles.mixins.font,
  _styles.mixins.flex,
  _styles.mixins.margin
);
exports.Title = Title;
var LinkFont = _primitives.default.Text.withConfig({
  displayName: 'uni__LinkFont',
  componentId: 'sc-1cjgut2-12'
})(
  ['', ' ', ' ', ' ', ' ', ' ', ''],
  _styles.fonts.link,
  _styles.mixins.link,
  _styles.mixins.font,
  _styles.mixins.color,
  _styles.mixins.margin,
  function() {
    return !_styles.isNative ? 'user-select: none; cursor: pointer;' : '';
  }
);
exports.LinkFont = LinkFont;
var CTALink = _primitives.default.Text.withConfig({
  displayName: 'uni__CTALink',
  componentId: 'sc-1cjgut2-13'
})(
  ['', ' ', ' ', ' ', ' ', ''],
  _styles.fonts.CTALink,
  _styles.mixins.link,
  _styles.mixins.color,
  _styles.mixins.font,
  _styles.mixins.margin
);
exports.CTALink = CTALink;
var SecondaryText = _primitives.default.Text.withConfig({
  displayName: 'uni__SecondaryText',
  componentId: 'sc-1cjgut2-14'
})(
  ['', ' ', ' ', ' ', ''],
  _styles.fonts.secondaryText,
  _styles.mixins.color,
  _styles.mixins.font,
  _styles.mixins.margin
);
exports.SecondaryText = SecondaryText;
var SmallText = _primitives.default.Text.withConfig({
  displayName: 'uni__SmallText',
  componentId: 'sc-1cjgut2-15'
})(
  ['', ' color:', ';', ' ', ' ', ''],
  _styles.fonts.secondaryText,
  _styles.colors.black,
  _styles.mixins.color,
  _styles.mixins.font,
  _styles.mixins.margin
);
exports.SmallText = SmallText;
var AltLink = _primitives.default.Text.withConfig({
  displayName: 'uni__AltLink',
  componentId: 'sc-1cjgut2-16'
})(
  ['', ' ', ' ', ' ', ''],
  _styles.fonts.altLink,
  _styles.mixins.color,
  _styles.mixins.font,
  _styles.mixins.margin
);
exports.AltLink = AltLink;
var CommunityLink = _primitives.default.Text.withConfig({
  displayName: 'uni__CommunityLink',
  componentId: 'sc-1cjgut2-17'
})(
  ['', ' ', ' ', ' ', ''],
  _styles.fonts.communityLink,
  _styles.mixins.color,
  _styles.mixins.font,
  _styles.mixins.margin
);
exports.CommunityLink = CommunityLink;
var CommentText = _primitives.default.Text.withConfig({
  displayName: 'uni__CommentText',
  componentId: 'sc-1cjgut2-18'
})(
  ['', ' ', ' ', ' z-index:1;'],
  _styles.fonts.commentText,
  _styles.mixins.color,
  _styles.mixins.font
);
exports.CommentText = CommentText;
var BodyText = _primitives.default.Text.withConfig({
  displayName: 'uni__BodyText',
  componentId: 'sc-1cjgut2-19'
})(
  ['', ' ', ' ', ' ', ''],
  _styles.fonts.bodyStyle,
  _styles.mixins.color,
  _styles.mixins.font,
  _styles.mixins.margin
);
exports.BodyText = BodyText;
var StaticButton = (0, _primitives.default)(View).withConfig({
  displayName: 'uni__StaticButton',
  componentId: 'sc-1cjgut2-20'
})(
  ['', ' ', ';', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
  _styles.layout.button,
  function(p) {
    return p.disabled
      ? '\n      background: '
          .concat(_styles.colors.grey, ';\n    & > div {\n      color: ')
          .concat(_styles.colors.white, ';\n    }\n    ')
      : '';
  },
  _styles.mixins.width,
  _styles.mixins.height,
  _styles.mixins.margin,
  _styles.mixins.background,
  _styles.mixins.padding,
  _styles.mixins.border,
  _styles.mixins.borderRadius,
  function(p) {
    return p.hover && !p.active && !p.disabled ? _styles.layout.activeButtonShadow : '';
  },
  function() {
    return !_styles.isNative ? 'user-select: none; cursor: pointer;' : '';
  }
);
exports.StaticButton = StaticButton;
var ButtonText = _primitives.default.Text.withConfig({
  displayName: 'uni__ButtonText',
  componentId: 'sc-1cjgut2-21'
})(['', ' ', ''], _styles.layout.buttonFont, _styles.mixins.color);
exports.ButtonText = ButtonText;
HB.propTypes = {
  children: _propTypes.default.node,
  onPress: _propTypes.default.func,
  onClick: _propTypes.default.func
};
var HoverButton = (0, _react.memo)(HB);
exports.HoverButton = HoverButton;
function HB(_ref) {
  var children = _ref.children,
    onPress = _ref.onPress,
    onClick = _ref.onClick,
    rest = (0, _objectWithoutProperties2.default)(_ref, [
      'children',
      'onPress',
      'onClick'
    ]);
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    active = _useState4[0],
    setActive = _useState4[1];
  var isString = typeof children === 'string';
  var isArray = (0, _typeof2.default)(children) === 'object' && children.length;
  var isTextArray =
    isArray &&
    children.find(function(el) {
      return typeof el === 'string';
    });
  var renderString =
    !children || (!isArray && !children.$$typeof) || isTextArray || isString;
  return _react.default.createElement(
    _reactNativeWeb.TouchableOpacity,
    {
      onClick: onClick,
      onPress: onPress,
      __source: { fileName: _jsxFileName, lineNumber: 215, columnNumber: 5 }
    },
    _react.default.createElement(
      StaticButton,
      (0, _extends2.default)(
        {
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
          }
        },
        rest,
        { __source: { fileName: _jsxFileName, lineNumber: 216, columnNumber: 7 } }
      ),
      renderString
        ? _react.default.createElement(
            ButtonText,
            (0, _extends2.default)({}, rest, {
              __source: { fileName: _jsxFileName, lineNumber: 228, columnNumber: 25 }
            }),
            children
          )
        : children
    )
  );
}
var Button = (0, _react.memo)(HB);
exports.Button = Button;
ButtonWithIcon.propTypes = {
  text: _propTypes.default.string,
  image: _propTypes.default.node
};
function ButtonWithIcon(_ref2) {
  var text = _ref2.text,
    image = _ref2.image,
    rest = (0, _objectWithoutProperties2.default)(_ref2, ['text', 'image']);
  return _react.default.createElement(
    ViewButton,
    (0, _extends2.default)({ fdirection: 'row' }, rest, {
      __source: { fileName: _jsxFileName, lineNumber: 243, columnNumber: 5 }
    }),
    image,
    _react.default.createElement(
      ButtonText,
      { __source: { fileName: _jsxFileName, lineNumber: 245, columnNumber: 7 } },
      text
    )
  );
}
var ViewButton = (0, _primitives.default)(View).withConfig({
  displayName: 'uni__ViewButton',
  componentId: 'sc-1cjgut2-22'
})(
  ['', ' ', ' ', ';', ' ', ' ', ''],
  _styles.layout.button,
  function() {
    return !_styles.isNative ? 'cursor: pointer;' : '';
  },
  function(p) {
    return p.disabled ? '\n    background: '.concat(_styles.colors.grey, ';\n    ') : '';
  },
  _styles.mixins.background,
  _styles.mixins.padding,
  _styles.mixins.margin
);
exports.ViewButton = ViewButton;
var Tag = (0, _primitives.default)(Text).withConfig({
  displayName: 'uni__Tag',
  componentId: 'sc-1cjgut2-23'
})(
  ['', ' ', ';', ' ', ' ', ' ', ''],
  _styles.layout.tag,
  function(p) {
    return p.disabled
      ? '\n    color: '
          .concat(_styles.colors.grey, ';\n    background: ')
          .concat(_styles.colors.secondaryBG, ';\n    ')
      : '';
  },
  _styles.mixins.background,
  _styles.mixins.padding,
  _styles.mixins.margin,
  _styles.mixins.color
);
exports.Tag = Tag;
var NumericalValue = (0, _primitives.default)(Text).withConfig({
  displayName: 'uni__NumericalValue',
  componentId: 'sc-1cjgut2-24'
})(
  ['', ' ', ' ', ' ', ' ', ''],
  _styles.fonts.numericalValue,
  _styles.mixins.width,
  _styles.mixins.font,
  _styles.mixins.inheritfont,
  _styles.mixins.color
);
exports.NumericalValue = NumericalValue;
var BigNumber = (0, _primitives.default)(NumericalValue).withConfig({
  displayName: 'uni__BigNumber',
  componentId: 'sc-1cjgut2-25'
})(['', ''], _styles.fonts.bigNumber);
exports.BigNumber = BigNumber;
var Spacer = (0, _primitives.default)(View).withConfig({
  displayName: 'uni__Spacer',
  componentId: 'sc-1cjgut2-26'
})(
  ['flex-direction:row;position:relative;', ' flex-grow:1;', ''],
  function(p) {
    if (Number.isInteger(p.nestingLevel) || Number.isInteger(p.additionalNesting)) {
      var total = (p.nestingLevel || 0) + (p.additionalNesting || 0);
      var UNIT =
        p.screenSize > 0
          ? _styles.layout.NESTING_UNIT_RESONSIVE
          : _styles.layout.NESTING_UNIT;
      if (!total * UNIT) {
        return '';
      }
      return 'padding-left: '.concat(
        (0, _styles.sizing)((total - (p.screenSize > 0 ? 1 : 0)) * UNIT),
        ';'
      );
    }
    return '';
  },
  _styles.mixins.flex
);
exports.Spacer = Spacer;
var CloseX = (0, _primitives.default)(Image).withConfig({
  displayName: 'uni__CloseX',
  componentId: 'sc-1cjgut2-27'
})(
  ['position:absolute;', ' ', ' ', ' ', ' z-index:10;'],
  function(p) {
    return p.position ? 'position: '.concat(p.position, ';') : null;
  },
  function(p) {
    return p.top ? 'top: '.concat((0, _styles.size)(p.top), ';') : null;
  },
  function(p) {
    return p.right ? 'right: '.concat((0, _styles.size)(p.right), ';') : null;
  },
  function() {
    return !_styles.isNative ? 'user-select: none; cursor: pointer;' : '';
  }
);
exports.CloseX = CloseX;
var Warning = (0, _primitives.default)(SmallText).withConfig({
  displayName: 'uni__Warning',
  componentId: 'sc-1cjgut2-28'
})(['color:', ';'], _styles.colors.warning);
exports.Warning = Warning;
var Overlay = (0, _primitives.default)(View).withConfig({
  displayName: 'uni__Overlay',
  componentId: 'sc-1cjgut2-29'
})(
  ['position:absolute;top:0;left:0;right:0;bottom:0;background-color:', ';'],
  _styles.colors.modalBackground
);
exports.Overlay = Overlay;
Badge.propTypes = {
  color: _propTypes.default.string,
  textColor: _propTypes.default.string,
  h: _propTypes.default.number,
  children: _propTypes.default.node,
  number: _propTypes.default.number
};
function Badge(_ref3) {
  var color = _ref3.color,
    textColor = _ref3.textColor,
    h = _ref3.h,
    children = _ref3.children,
    number = _ref3.number,
    styles = (0, _objectWithoutProperties2.default)(_ref3, [
      'color',
      'textColor',
      'h',
      'children',
      'number'
    ]);
  if (!number) return null;
  return _react.default.createElement(
    View,
    (0, _extends2.default)(
      {
        minwidth: h || 1.75,
        p: '0 0.5',
        h: h || 1.75,
        bradius: (h || 1.75) / 2,
        align: 'center',
        justify: 'center',
        bg: color || _styles.colors.blue
      },
      styles,
      { __source: { fileName: _jsxFileName, lineNumber: 349, columnNumber: 5 } }
    ),
    _react.default.createElement(
      NumericalValue,
      {
        fs: 1.25,
        lh: h || 1.75,
        c: textColor || _styles.colors.white,
        __source: { fileName: _jsxFileName, lineNumber: 359, columnNumber: 7 }
      },
      (0, _numbers.abbreviateNumber)(number)
    )
  );
}
var Err = (0, _primitives.default)(Text).withConfig({
  displayName: 'uni__Err',
  componentId: 'sc-1cjgut2-30'
})(['color:', ';'], _styles.colors.red);
exports.Err = Err;
EthAddress.propTypes = { address: _propTypes.default.object };
function EthAddress(_ref4) {
  var address = _ref4.address;
  if (!address) return null;
  return _react.default.createElement(
    _ULink.default,
    {
      to: 'https://etherscan.io/address/'.concat(address),
      target: '_blank',
      external: true,
      __source: { fileName: _jsxFileName, lineNumber: 377, columnNumber: 5 }
    },
    address.slice(0, 6) + '...' + address.slice(address.length - 4, address.length)
  );
}
var ErrorBox = function ErrorBox(_ref5) {
  var children = _ref5.children,
    styleProps = (0, _objectWithoutProperties2.default)(_ref5, ['children']);
  return _react.default.createElement(
    View,
    (0, _extends2.default)(
      { mt: 2, p: 2, bg: _styles.colors.errorA, border: true, bc: _styles.colors.error },
      styleProps,
      { __source: { fileName: _jsxFileName, lineNumber: 384, columnNumber: 3 } }
    ),
    children
  );
};
exports.ErrorBox = ErrorBox;
var WarningBox = function WarningBox(_ref6) {
  var children = _ref6.children,
    styleProps = (0, _objectWithoutProperties2.default)(_ref6, ['children']);
  return _react.default.createElement(
    View,
    (0, _extends2.default)(
      {
        mt: 2,
        p: 2,
        bg: _styles.colors.warningA,
        border: true,
        bc: _styles.colors.warning
      },
      styleProps,
      { __source: { fileName: _jsxFileName, lineNumber: 390, columnNumber: 3 } }
    ),
    children
  );
};
exports.WarningBox = WarningBox;
ErrorBox.propTypes = { children: _propTypes.default.node };
WarningBox.propTypes = {
  children: _propTypes.default.node,
  styleProps: _propTypes.default.object
};
//# sourceMappingURL=uni.js.map
