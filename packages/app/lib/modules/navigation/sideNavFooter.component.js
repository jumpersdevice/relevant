'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../styled/uni');
var _ULink = _interopRequireDefault(require('./ULink.component'));
var _social = _interopRequireDefault(require('./social.icons'));
var _styles = require('../../styles');
var _layout = require('../../styles/layout');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/sideNavFooter.component.js';
var SideNavFooter = function SideNavFooter(_ref) {
  var actions = _ref.actions;
  return _react.default.createElement(
    _uni.View,
    {
      m: [_layout.SIDE_NAV_PADDING, 2],
      mb: 8,
      __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 3 }
    },
    _react.default.createElement(_social.default, {
      actions: actions,
      __source: { fileName: _jsxFileName, lineNumber: 11, columnNumber: 5 }
    }),
    _react.default.createElement(
      _uni.View,
      {
        fdirection: 'row',
        mt: 3,
        __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 5 }
      },
      _react.default.createElement(
        _ULink.default,
        {
          inline: 1,
          to: '/info/faq',
          __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 7 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            c: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 9 }
          },
          'FAQ'
        )
      ),
      _react.default.createElement(
        _uni.InlineText,
        { __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 } },
        ' | '
      ),
      _react.default.createElement(
        _ULink.default,
        {
          inline: 1,
          to: '/eula.html',
          external: true,
          target: '_blank',
          __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 7 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            c: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 9 }
          },
          'Content Policy'
        )
      ),
      _react.default.createElement(
        _uni.InlineText,
        { __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 7 } },
        ' | '
      ),
      _react.default.createElement(
        _ULink.default,
        {
          inline: 1,
          external: true,
          to: '/privacy.html',
          target: '_blank',
          __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 7 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            c: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 9 }
          },
          'Privacy Policy'
        )
      )
    ),
    _react.default.createElement(
      _uni.BodyText,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 5 } },
      '\xA9 2019 Relevant Protocols Inc.'
    )
  );
};
SideNavFooter.propTypes = { actions: _propTypes.default.object };
var _default = (0, _react.memo)(SideNavFooter);
exports.default = _default;
//# sourceMappingURL=sideNavFooter.component.js.map
