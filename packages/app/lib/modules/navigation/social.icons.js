'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = FooterIcons;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../styled/uni');
var _ULink = _interopRequireDefault(require('./ULink.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/social.icons.js';
var TwitterIcon = require('../../../public/img/twitter-black.png');
var EmailIcon = require('../../../public/img/email.png');
var SlackIcon = require('../../../public/img/slack.png');
var MediumIcon = require('../../../public/img/medium.png');
var InstaIcon = require('../../../public/img/instagram.png');
var icons = [
  { href: 'https://blog.relevant.community', source: MediumIcon, target: '_blank' },
  {
    href: 'https://instagram.com/relevant_community',
    source: InstaIcon,
    target: '_blank'
  },
  { href: 'https://twitter.com/relevantfeed', source: TwitterIcon, target: '_blank' },
  {
    href:
      'https://join.slack.com/t/relevantcommunity/shared_invite/enQtMjIwMjEwNzUzMjUzLWVjODViM2ZkZDE5ZWMyYzcxMzI3ZTQ3Njc4YTBmYmVmMTQxZGJiNDcxYzljODZlM2U0NGU1YTE3MDlhM2I1NmI',
    source: SlackIcon,
    target: '_blank'
  },
  { href: 'mailto:info@relevant.community', source: EmailIcon, target: '_blank' }
];
var FooterIcon = function FooterIcon(_ref) {
  var href = _ref.href,
    source = _ref.source,
    target = _ref.target,
    actions = _ref.actions;
  if (!source) {
    return null;
  }
  return _react.default.createElement(
    _ULink.default,
    {
      external: true,
      to: href,
      onPress: function onPress() {
        return actions.goToUrl(href);
      },
      target: target || '_self',
      inline: 1,
      __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 5 }
    },
    _react.default.createElement(_uni.Image, {
      w: 2.8,
      h: 2.4,
      mr: 2,
      resizeMode: 'contain',
      source: source,
      __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 7 }
    })
  );
};
FooterIcon.propTypes = {
  href: _propTypes.default.string,
  source: _propTypes.default.oneOfType([
    _propTypes.default.number,
    _propTypes.default.string,
    _propTypes.default.object
  ]),
  target: _propTypes.default.string,
  actions: _propTypes.default.object
};
function FooterIcons(_ref2) {
  var actions = _ref2.actions;
  return _react.default.createElement(
    _uni.View,
    {
      flex: 1,
      fdirection: 'row',
      mt: 2,
      mb: [2, 0],
      __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 5 }
    },
    icons.map(function(icon) {
      return _react.default.createElement(
        FooterIcon,
        (0, _extends2.default)({ actions: actions, key: icon.href }, icon, {
          __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 9 }
        })
      );
    })
  );
}
FooterIcons.propTypes = { actions: _propTypes.default.object };
//# sourceMappingURL=social.icons.js.map
