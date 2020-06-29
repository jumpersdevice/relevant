'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _eth = _interopRequireDefault(require('../web_ethTools/eth.context'));
var _numbers = require('../../utils/numbers');
var _propValidation = require('../../utils/propValidation');
var _styles = require('../../styles');
var _uni = require('../styled/uni');
var _price = require('../wallet/price.context');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/coinStat.component.js';
var coinImage = require('../../../public/img/relevantcoin.png');
function CoinStat(props) {
  var user = props.user,
    isOwner = props.isOwner,
    wallet = props.wallet,
    size = props.size,
    amount = props.amount,
    mr = props.mr,
    align = props.align,
    noNumber = props.noNumber,
    secondary = props.secondary,
    fs = props.fs,
    lh = props.lh,
    inline = props.inline,
    c = props.c,
    spaceBetween = props.spaceBetween,
    showPrice = props.showPrice,
    rest = (0, _objectWithoutProperties2.default)(props, [
      'user',
      'isOwner',
      'wallet',
      'size',
      'amount',
      'mr',
      'align',
      'noNumber',
      'secondary',
      'fs',
      'lh',
      'inline',
      'c',
      'spaceBetween',
      'showPrice'
    ]);
  var tokens;
  if (typeof amount === 'number') tokens = amount;
  else if (user) {
    tokens = user.balance;
    if (user.tokenBalance) tokens += user.tokenBalance;
  }
  var usdValue = (0, _price.usePrice)(tokens);
  if (isOwner && user.ethAddress && user.ethAddress[0] && wallet.connectedBalance) {
    tokens = wallet.connectedBalance + user.balance;
  }
  var iconSize = typeof size === 'number' ? size : 3;
  var NumberStyle = secondary ? _uni.SecondaryText : _uni.NumericalValue;
  var imageMargin = align === 'center' ? 0 : (0, _styles.sizing)(-1, 'px');
  var Wrapper = inline ? _uni.Text : _uni.ImageWrapper;
  var spacer = 0;
  if (!inline && iconSize) {
    spacer = iconSize / 4;
  }
  if (!inline && spaceBetween) {
    spacer = spaceBetween;
  }
  return _react.default.createElement(
    Wrapper,
    (0, _extends2.default)({}, rest, {
      inline: inline ? 1 : 0,
      mr: typeof mr === 'number' ? mr : inline ? 0 : 1.5,
      align: align,
      __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 5 }
    }),
    _react.default.createElement(_uni.Image, {
      inline: inline ? 1 : 0,
      source: coinImage,
      h: iconSize * 1,
      w: iconSize * 1.05,
      style: { bottom: imageMargin },
      resizeMode: 'contain',
      __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 7 }
    }),
    noNumber
      ? null
      : _react.default.createElement(
          NumberStyle,
          {
            ml: spacer,
            fs: fs,
            lh: lh,
            inline: inline ? 1 : 0,
            c: c,
            __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 9 }
          },
          inline ? ' ' : '',
          (0, _numbers.abbreviateNumber)(tokens),
          showPrice ? usdValue : ''
        )
  );
}
CoinStat.propTypes = {
  lh: _propTypes.default.number,
  inline: _propTypes.default.oneOfType([
    _propTypes.default.bool,
    _propTypes.default.number
  ]),
  secondary: _propTypes.default.bool,
  mr: _propTypes.default.number,
  fs: _propTypes.default.number,
  amount: _propTypes.default.number,
  size: _propTypes.default.number,
  user: _propValidation.userProps,
  isOwner: _propTypes.default.bool,
  wallet: _propTypes.default.object,
  align: _propTypes.default.string,
  lineheight: _propTypes.default.string,
  c: _propTypes.default.string,
  noNumber: _propTypes.default.bool,
  spaceBetween: _propTypes.default.number,
  showPrice: _propTypes.default.bool
};
var _default = (0, _react.memo)(function(props) {
  return _react.default.createElement(
    _eth.default.Consumer,
    { __source: { fileName: _jsxFileName, lineNumber: 110, columnNumber: 3 } },
    function(wallet) {
      return _react.default.createElement(
        CoinStat,
        (0, _extends2.default)({ wallet: wallet }, props, {
          __source: { fileName: _jsxFileName, lineNumber: 110, columnNumber: 28 }
        })
      );
    }
  );
});
exports.default = _default;
//# sourceMappingURL=coinStat.component.js.map
