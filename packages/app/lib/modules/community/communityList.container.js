'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _uni = require('../styled/uni');
var _communityList = _interopRequireDefault(require('./communityList.component'));
var _styles = require('../../styles');
var _reactNativeWeb = require('react-native-web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/community/communityList.container.js';
var _default = function _default() {
  return _react.default.createElement(
    _reactNativeWeb.ScrollView,
    {
      flex: 1,
      fdirection: 'column',
      style: { backgroundColor: _styles.colors.white },
      __source: { fileName: _jsxFileName, lineNumber: 9, columnNumber: 3 }
    },
    _react.default.createElement(_communityList.default, {
      __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 5 }
    }),
    _react.default.createElement(
      _uni.View,
      {
        m: '6 4 12 4',
        fdirection: 'row',
        __source: { fileName: _jsxFileName, lineNumber: 11, columnNumber: 5 }
      },
      _react.default.createElement(
        _ULink.default,
        {
          inline: 1,
          external: true,
          to: 'mailto:info@relevant.community',
          __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 7 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            c: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 9 }
          },
          'Get in touch '
        )
      ),
      _react.default.createElement(
        _uni.BodyText,
        { __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 7 } },
        "if you'd like to start your own community"
      )
    )
  );
};
exports.default = _default;
//# sourceMappingURL=communityList.container.js.map
