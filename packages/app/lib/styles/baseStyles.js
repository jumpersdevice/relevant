'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.GlobalStyle = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral')
);
var _styledComponents = require('styled-components');
var colors = _interopRequireWildcard(require('./colors'));
var _sizing = _interopRequireDefault(require('./sizing'));
var _fonts = require('./fonts');
var _markdown = _interopRequireDefault(require('./markdown'));
function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  * {\n    box-sizing: border-box;\n    border-width: 0px;\n  }\n\n  html {\n    font-size: 95%;\n    display: flex;\n  }\n  body {\n    font-size: ',
    ';\n    line-height: ',
    ';\n  }\n\n  html, body {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    color: ',
    ';\n    font-family: HelveticaNeue, Helvetica Neue, sans-serif;\n    position:relative;\n    flex: 1;\n    font-smooth: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  ',
    '\n  .markdown-body h1 {',
    '}\n  .markdown-body h2 {',
    '}\n  .markdown-body, .markdown-body p, .markdown-body li {',
    '}\n\n  #app, main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    position: relative;\n    width: 100%;\n  }\n\n  /* pre {\n    font-family: inherit;\n    font-size: inherit;\n    white-space: pre-wrap;\n    margin: 0;\n    display: inline-block;\n    overflow-wrap: break-word;\n    overflow-wrap: anywhere;\n    max-width: 100%;\n  }\n  */\n\n  a {\n    color: ',
    ';\n    overflow-wrap: anywhere;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  .smartbanner-top.smartbanner-android {\n    top: -80px !important;\n  }\n  .smartbanner-top.smartbanner-ios {\n    top: -80px !important;\n  }\n\n  // Hamburger menu transition time\n  .bm-overlay,\n  .bm-menu-wrap {\n    top: 0;\n    transition-duration: .3s !important;\n  }\n\n  @media screen\n  and (max-device-width: 414px) {\n    html {\n      font-size: 100%;\n    }\n\n    .BeaconContainer {\n      /*bottom: 30px !important; */\n      left: 0 !important;\n      top: 0 !important;\n      padding-bottom: 32px;\n    }\n    .c-BeaconCloseButton {\n      padding: 0;\n      margin: 0;\n      top: auto !important;\n      bottom: -32px !important;\n      height: 32px;\n      backgroundColor: blue;\n      z-index: 1000 !important;\n    }\n    .BeaconFabButtonFrame {\n      left: 16px !important;\n      right: auto !important;\n      bottom: 16px !important;\n    }\n  }\n'
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(
  _templateObject(),
  (0, _sizing.default)(1.75),
  (0, _sizing.default)(2),
  colors.black,
  _markdown.default,
  _fonts.header,
  _fonts.title,
  _fonts.commentText,
  colors.blue
);
exports.GlobalStyle = GlobalStyle;
//# sourceMappingURL=baseStyles.js.map
