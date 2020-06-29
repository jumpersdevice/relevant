'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _web = require('../styled/web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/web_about/appStoreButtons.js';
var iosLink = 'https://itunes.apple.com/us/app/relevant-communities/id1173025051?mt=8';
var googlePlay =
  'https://play.google.com/store/apps/details?id=com.relevantnative&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
var iosImg = '/img/appstore.png';
var googleImg = '/img/googleplaystore.png';
var AppStoreButtons = function AppStoreButtons(styleProps) {
  return _react.default.createElement(
    _web.View,
    (0, _extends2.default)({}, styleProps, {
      mt: [8, 4],
      mb: [0, 1],
      __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 3 }
    }),
    _react.default.createElement(
      'a',
      {
        href: iosLink,
        target: '_blank',
        __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 5 }
      },
      _react.default.createElement(_web.Image, {
        h: [6, 6, 5],
        mr: [2, 1],
        src: iosImg,
        __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }
      })
    ),
    _react.default.createElement(
      'a',
      {
        href: googlePlay,
        target: '_blank',
        __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 5 }
      },
      _react.default.createElement(_web.Image, {
        h: [6, 6, 5],
        src: googleImg,
        __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 7 }
      })
    )
  );
};
var _default = AppStoreButtons;
exports.default = _default;
//# sourceMappingURL=appStoreButtons.js.map
