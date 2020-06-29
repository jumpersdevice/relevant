'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/web/onboardingModal.js';
var coin = require('../../../../public/img/relevantcoin.png');
var upvote = require('../../../../public/img/upvote.png');
var OnboardingModal = function OnboardingModal(props) {
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 3 } },
    _react.default.createElement(
      _uni.ImageWrapper,
      { mt: 6, __source: { fileName: _jsxFileName, lineNumber: 11, columnNumber: 5 } },
      _react.default.createElement(_uni.Image, {
        resizeMode: 'contain',
        w: 2.8,
        h: 2.8,
        mr: 0.75,
        source: require('../../../../public/img/r-emoji.png'),
        __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 7 }
      }),
      _react.default.createElement(
        _uni.Title,
        { __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 7 } },
        'Build Trust'
      )
    ),
    _react.default.createElement(
      _uni.Text,
      {
        fs: 1.75,
        mt: 1,
        __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 5 }
      },
      'Boost your Reputation by posting quality comments. As your Reputation grows so does your voting impact, and your earnings. The most reputable users become community leaders.'
    ),
    _react.default.createElement(
      _uni.ImageWrapper,
      { mt: 6, __source: { fileName: _jsxFileName, lineNumber: 27, columnNumber: 5 } },
      _react.default.createElement(_uni.Image, {
        resizeMode: 'contain',
        w: 2.8,
        h: 2.8,
        mr: 0.75,
        source: upvote,
        __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 }
      }),
      _react.default.createElement(
        _uni.Title,
        { __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 7 } },
        'Curate Content'
      )
    ),
    _react.default.createElement(
      _uni.Text,
      {
        fs: 1.75,
        c: _styles.colors.black,
        mt: 1,
        __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 5 }
      },
      'Share links, upvote quality content and downvote spam.'
    ),
    _react.default.createElement(
      _uni.ImageWrapper,
      { mt: 6, __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 5 } },
      _react.default.createElement(_uni.Image, {
        resizeMode: 'contain',
        w: 2.8,
        h: 2.8,
        mr: 0.75,
        source: coin,
        __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 7 }
      }),
      _react.default.createElement(
        _uni.Title,
        { __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 7 } },
        'Get Rewards'
      )
    ),
    _react.default.createElement(
      _uni.Text,
      {
        fs: 1.75,
        mt: 1,
        __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 5 }
      },
      'Earn coins for upvoting quality links. Coins can be traded in for Relevant Tokens that represent ownership in the platform.'
    ),
    _react.default.createElement(
      _uni.View,
      {
        align: 'flex-start',
        mt: 3,
        __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 5 }
      },
      _react.default.createElement(
        _uni.Button,
        {
          onPress: function onPress() {
            return props.close();
          },
          __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 7 }
        },
        'Got It'
      )
    )
  );
};
OnboardingModal.propTypes = { close: _propTypes.default.func };
var _default = OnboardingModal;
exports.default = _default;
//# sourceMappingURL=onboardingModal.js.map
