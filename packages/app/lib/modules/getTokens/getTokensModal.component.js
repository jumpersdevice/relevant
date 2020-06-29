'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../styled/uni');
var _coinStat = _interopRequireDefault(require('../stats/coinStat.component'));
var _common = require('@r3l/common');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _styles = require('../../styles');
var _price = require('../wallet/price.context');
var _navigation = require('../navigation/navigation.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/getTokens/getTokensModal.component.js';
GetTokensModal.propTypes = {
  actions: _propTypes.default.object,
  auth: _propTypes.default.object,
  mobile: _propTypes.default.bool,
  twitterButton: _propTypes.default.node
};
function GetTokensModal(_ref) {
  var user = _ref.auth.user,
    _ref$actions = _ref.actions,
    sendConfirmation = _ref$actions.sendConfirmation,
    showModal = _ref$actions.showModal,
    push = _ref$actions.push,
    mobile = _ref.mobile,
    twitterButton = _ref.twitterButton;
  return _react.default.createElement(
    _uni.Box,
    { __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 5 } },
    (0, _price.tokenEnabled)() &&
      _react.default.createElement(
        _react.Fragment,
        { __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 } },
        _react.default.createElement(UniswapButton, {
          __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 11 }
        }),
        _react.default.createElement(_uni.Divider, {
          mt: 4,
          __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }
        })
      ),
    !user.confirmed &&
      _react.default.createElement(
        _uni.View,
        {
          fdirection: 'column',
          justify: 'space-between',
          __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.View,
          {
            fdirection: 'row',
            align: 'center',
            mt: 4,
            __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.BodyText,
            {
              c: _styles.colors.secondaryText,
              inline: 1,
              __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 13 }
            },
            'Confirm your e-mail to earn',
            ' ',
            _react.default.createElement(_coinStat.default, {
              inline: 1,
              size: 2,
              amount: _common.EMAIL_REWARD,
              __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 15 }
            }),
            ' ',
            _common.EMAIL_REWARD > 1 ? 'coins' : 'coin',
            _react.default.createElement(
              _uni.SecondaryText,
              { __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 15 } },
              "*if you don't see a confirmation email in your inbox, please check your spam folder"
            )
          )
        ),
        _react.default.createElement(
          _ULink.default,
          {
            to: '#',
            onClick: sendConfirmation,
            onPress: sendConfirmation,
            external: true,
            mr: ['auto', 0],
            mobile: mobile,
            fel: true,
            __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.ViewButton,
            {
              w: [22, 'auto'],
              mt: 3,
              mobile: mobile,
              __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 13 }
            },
            _react.default.createElement(
              _uni.LinkFont,
              {
                c: _styles.colors.white,
                __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 15 }
              },
              'Confirm E-mail'
            )
          )
        ),
        _react.default.createElement(_uni.Divider, {
          mt: 4,
          __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 11 }
        })
      ),
    !user.twitterId &&
      _react.default.createElement(
        _uni.Box,
        { __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 9 } },
        _react.default.createElement(
          _uni.View,
          {
            fdirection: 'row',
            align: 'center',
            mt: 4,
            __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.BodyText,
            {
              c: _styles.colors.secondaryText,
              inline: 1,
              __source: { fileName: _jsxFileName, lineNumber: 82, columnNumber: 13 }
            },
            'Connect your Relevant account with your Twitter account to earn',
            ' ',
            _react.default.createElement(_coinStat.default, {
              inline: 1,
              size: 2,
              amount: user.confirmed
                ? _common.TWITTER_REWARD
                : _common.TWITTER_REWARD + _common.EMAIL_REWARD,
              __source: { fileName: _jsxFileName, lineNumber: 84, columnNumber: 15 }
            }),
            ' ',
            _common.TWITTER_REWARD > 1 ? 'coins' : 'coin'
          )
        ),
        twitterButton,
        _react.default.createElement(_uni.Divider, {
          mt: 4,
          __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 11 }
        })
      ),
    _react.default.createElement(
      _uni.View,
      { mt: 4, __source: { fileName: _jsxFileName, lineNumber: 111, columnNumber: 7 } },
      _react.default.createElement(
        _ULink.default,
        {
          to: '#',
          onClick: function onClick() {
            return showModal('invite');
          },
          onPress: function onPress() {
            return push('invites');
          },
          external: true,
          mr: 'auto',
          mobile: mobile,
          __source: { fileName: _jsxFileName, lineNumber: 112, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.LinkFont,
          {
            c: _styles.colors.blue,
            __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 11 }
          },
          'Invite Friends'
        )
      )
    )
  );
}
function UniswapButton() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var uniIcon = require('../../../public/img/uniswap.png');
  var exchageUrl = (0, _price.exchangeLink)();
  return _react.default.createElement(
    _ULink.default,
    {
      inline: 1,
      to: exchageUrl,
      external: true,
      mr: ['auto', 0],
      mt: 3,
      target: '_blank',
      __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.HoverButton,
      {
        w: [22, 'auto'],
        bg: _styles.colors.uniswap,
        m: 0,
        c: _styles.colors.white,
        onPress: function onPress() {
          return dispatch((0, _navigation.goToUrl)(exchageUrl));
        },
        __source: { fileName: _jsxFileName, lineNumber: 134, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        {
          fdirection: 'row',
          justify: 'center',
          align: 'center',
          __source: { fileName: _jsxFileName, lineNumber: 141, columnNumber: 9 }
        },
        _react.default.createElement(_uni.Image, {
          resizeMode: 'contain',
          source: uniIcon,
          w: 3,
          h: 3,
          mr: 1.5,
          __source: { fileName: _jsxFileName, lineNumber: 142, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.LinkFont,
          {
            c: _styles.colors.white,
            __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 11 }
          },
          'Uniswap Exchange'
        )
      )
    )
  );
}
var _default = GetTokensModal;
exports.default = _default;
//# sourceMappingURL=getTokensModal.component.js.map
