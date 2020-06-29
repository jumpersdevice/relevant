'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.Video = exports.Form = exports.StyledTextarea = exports.StyledTextareaAutocomplete = exports.Input = exports.InputPlain = exports.NumericalValue = exports.Button = exports.BodyText = exports.CommentText = exports.AltLink = exports.SecondaryText = exports.LinkFont = exports.Title = exports.Header = exports.Divider = exports.ImageWrapper = exports.Image = exports.InlineText = exports.Text = exports.View = exports.StyledNavLink = void 0;
var _reactRouterDom = require('react-router-dom');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _styles = require('../../styles');
var _reactTextareaAutosize = _interopRequireDefault(require('react-textarea-autosize'));
var _reactTextareaAutocomplete = _interopRequireDefault(
  require('@webscopeio/react-textarea-autocomplete')
);
var StyledNavLink = (0, _styledComponents.default)(_reactRouterDom.NavLink).withConfig({
  displayName: 'web__StyledNavLink',
  componentId: 'kfa5fa-0'
})(
  ['', ';color:', ';&.active{color:', ';}:hover{color:', ';}', ' ', ' ', ' ', ''],
  _styles.fonts.header,
  _styles.colors.grey,
  _styles.colors.black,
  _styles.colors.black,
  _styles.mixins.font,
  _styles.mixins.display,
  _styles.mixins.color,
  _styles.mixins.margin
);
exports.StyledNavLink = StyledNavLink;
var View = _styledComponents.default.div.withConfig({
  displayName: 'web__View',
  componentId: 'kfa5fa-1'
})(
  ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.padding,
  _styles.mixins.flex,
  _styles.mixins.font,
  _styles.mixins.background,
  _styles.mixins.border,
  _styles.mixins.width,
  _styles.mixins.height,
  function(p) {
    return p.onClick ? 'cursor: pointer;' : '';
  }
);
exports.View = View;
var Text = _styledComponents.default.span.withConfig({
  displayName: 'web__Text',
  componentId: 'kfa5fa-2'
})(
  ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.padding,
  _styles.mixins.flex,
  _styles.mixins.font,
  _styles.mixins.background,
  _styles.mixins.border,
  _styles.mixins.color,
  function(p) {
    return p.onClick ? 'cursor: pointer;' : '';
  }
);
exports.Text = Text;
var InlineText = _styledComponents.default.span.withConfig({
  displayName: 'web__InlineText',
  componentId: 'kfa5fa-3'
})(
  ['', ' ', ' ', ' ', ' ', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.padding,
  _styles.mixins.font,
  _styles.mixins.background,
  _styles.mixins.border,
  _styles.mixins.color
);
exports.InlineText = InlineText;
var Image = _styledComponents.default.img.withConfig({
  displayName: 'web__Image',
  componentId: 'kfa5fa-4'
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
var ImageWrapper = _styledComponents.default.span.withConfig({
  displayName: 'web__ImageWrapper',
  componentId: 'kfa5fa-5'
})(
  ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.flex
);
exports.ImageWrapper = ImageWrapper;
var Divider = _styledComponents.default.div.withConfig({
  displayName: 'web__Divider',
  componentId: 'kfa5fa-6'
})(
  ['', ' ', ' ', ' ', ''],
  _styles.mixins.margin,
  _styles.mixins.padding,
  _styles.mixins.width,
  _styles.layout.universalBorder('bottom')
);
exports.Divider = Divider;
var Header = (0, _styledComponents.default)(Text).withConfig({
  displayName: 'web__Header',
  componentId: 'kfa5fa-7'
})(['', ' ', ''], _styles.fonts.header, _styles.mixins.color);
exports.Header = Header;
var Title = (0, _styledComponents.default)(Text).withConfig({
  displayName: 'web__Title',
  componentId: 'kfa5fa-8'
})(['', ' ', ' ', ''], _styles.fonts.title, _styles.mixins.color, _styles.mixins.font);
exports.Title = Title;
var LinkFont = (0, _styledComponents.default)(Text).withConfig({
  displayName: 'web__LinkFont',
  componentId: 'kfa5fa-9'
})(['', ' ', ' ', ''], _styles.fonts.link, _styles.mixins.color, _styles.mixins.font);
exports.LinkFont = LinkFont;
var SecondaryText = (0, _styledComponents.default)(Text).withConfig({
  displayName: 'web__SecondaryText',
  componentId: 'kfa5fa-10'
})(
  ['', ' ', ' ', ''],
  _styles.fonts.secondaryText,
  _styles.mixins.font,
  _styles.mixins.color
);
exports.SecondaryText = SecondaryText;
var AltLink = (0, _styledComponents.default)(Text).withConfig({
  displayName: 'web__AltLink',
  componentId: 'kfa5fa-11'
})(['', ' ', ' ', ''], _styles.fonts.altLink, _styles.mixins.color, _styles.mixins.font);
exports.AltLink = AltLink;
var CommentText = (0, _styledComponents.default)(Text).withConfig({
  displayName: 'web__CommentText',
  componentId: 'kfa5fa-12'
})(
  ['', ' ', ' ', ''],
  _styles.fonts.commentText,
  _styles.mixins.color,
  _styles.mixins.font
);
exports.CommentText = CommentText;
var BodyText = (0, _styledComponents.default)(Text).withConfig({
  displayName: 'web__BodyText',
  componentId: 'kfa5fa-13'
})(
  ['', ' ', ' ', ''],
  _styles.fonts.bodyStyle,
  _styles.mixins.color,
  _styles.mixins.font
);
exports.BodyText = BodyText;
var Button = _styledComponents.default.button.withConfig({
  displayName: 'web__Button',
  componentId: 'kfa5fa-14'
})(
  [
    '',
    ' ',
    ' ',
    ';',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' &:hover{',
    '};user-select:none;cursor:pointer;'
  ],
  _styles.layout.button,
  _styles.layout.buttonFont,
  function(p) {
    return p.disabled
      ? '\n    color: '
          .concat(_styles.colors.white, ';\n    background: ')
          .concat(_styles.colors.grey, ';\n    ')
      : '';
  },
  _styles.mixins.flex,
  _styles.mixins.background,
  _styles.mixins.padding,
  _styles.mixins.width,
  _styles.mixins.margin,
  _styles.mixins.color,
  _styles.mixins.width,
  _styles.mixins.height,
  _styles.layout.activeButtonShadow
);
exports.Button = Button;
var NumericalValue = (0, _styledComponents.default)(Text).withConfig({
  displayName: 'web__NumericalValue',
  componentId: 'kfa5fa-15'
})(
  ['', ' ', ' ', ' ', ' ', ''],
  _styles.fonts.numericalValue,
  _styles.mixins.width,
  _styles.mixins.font,
  _styles.mixins.inheritfont,
  _styles.mixins.color
);
exports.NumericalValue = NumericalValue;
var InputPlain = _styledComponents.default.input.withConfig({
  displayName: 'web__InputPlain',
  componentId: 'kfa5fa-16'
})(
  [
    '',
    ' ',
    ' ',
    ' ',
    ' ',
    '::placeholder:{font-size:',
    ';line-height:',
    ';};:focus{outline:none !important;',
    '}'
  ],
  _styles.mixins.font,
  _styles.mixins.flex,
  _styles.mixins.border,
  _styles.mixins.padding,
  _styles.mixins.margin,
  (0, _styles.sizing)(1.75),
  (0, _styles.sizing)(1.75),
  _styles.layout.universalBorder('', _styles.colors.blue)
);
exports.InputPlain = InputPlain;
var Input = _styledComponents.default.input.withConfig({
  displayName: 'web__Input',
  componentId: 'kfa5fa-17'
})(
  [
    'padding:',
    ' ',
    ';margin-top:',
    ';',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    '::placeholder:{font-size:',
    ';line-height:',
    ';};:focus{outline:none !important;',
    '}'
  ],
  (0, _styles.sizing)(2),
  (0, _styles.sizing)(2),
  (0, _styles.sizing)(1),
  _styles.fonts.bodyStyle,
  _styles.mixins.font,
  _styles.mixins.flex,
  _styles.mixins.border,
  _styles.layout.universalBorder(),
  _styles.mixins.padding,
  _styles.mixins.margin,
  (0, _styles.sizing)(1.75),
  (0, _styles.sizing)(1.75),
  _styles.layout.universalBorder('', _styles.colors.blue)
);
exports.Input = Input;
var StyledTextareaAutocomplete = (0, _styledComponents.default)(
  _reactTextareaAutocomplete.default
).withConfig({
  displayName: 'web__StyledTextareaAutocomplete',
  componentId: 'kfa5fa-18'
})(
  [
    '',
    ' ',
    ' ',
    ' ',
    ' padding:',
    ' ',
    ';min-width:0;&:focus{outline:1px solid ',
    ';}',
    ' ',
    ' ',
    ''
  ],
  _styles.fonts.bodyStyle,
  _styles.mixins.border,
  _styles.mixins.flex,
  _styles.layout.universalBorder(),
  (0, _styles.sizing)(2),
  (0, _styles.sizing)(2),
  _styles.colors.blue,
  _styles.mixins.padding,
  _styles.mixins.margin,
  _styles.mixins.height
);
exports.StyledTextareaAutocomplete = StyledTextareaAutocomplete;
var StyledTextarea = (0, _styledComponents.default)(
  _reactTextareaAutosize.default
).withConfig({ displayName: 'web__StyledTextarea', componentId: 'kfa5fa-19' })(
  [
    '',
    ' ',
    ' ',
    ' ',
    ' padding:',
    ' ',
    ';min-width:0;&:focus{outline:1px solid ',
    ';}',
    ' ',
    ' ',
    ''
  ],
  _styles.fonts.bodyStyle,
  _styles.mixins.border,
  _styles.mixins.flex,
  _styles.layout.universalBorder(),
  (0, _styles.sizing)(2),
  (0, _styles.sizing)(2),
  _styles.colors.blue,
  _styles.mixins.padding,
  _styles.mixins.margin,
  _styles.mixins.height
);
exports.StyledTextarea = StyledTextarea;
var Form = _styledComponents.default.form.withConfig({
  displayName: 'web__Form',
  componentId: 'kfa5fa-20'
})(['', ' ', ''], _styles.mixins.flex, _styles.mixins.margin);
exports.Form = Form;
var Video = _styledComponents.default.video.withConfig({
  displayName: 'web__Video',
  componentId: 'kfa5fa-21'
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
exports.Video = Video;
//# sourceMappingURL=web.js.map
