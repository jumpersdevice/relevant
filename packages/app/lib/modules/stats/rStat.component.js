'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = RStat;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _numbers = require('../../utils/numbers');
var _propValidation = require('../../utils/propValidation');
var _styles = require('../../styles');
var _uni = require('../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/rStat.component.js';
var iconImage = require('../../../public/img/r-emoji.png');
function RStat(props) {
  var size = props.size,
    user = props.user,
    color = props.color,
    mr = props.mr,
    align = props.align,
    lh = props.lh,
    inline = props.inline,
    rest = (0, _objectWithoutProperties2.default)(props, [
      'size',
      'user',
      'color',
      'mr',
      'align',
      'lh',
      'inline'
    ]);
  if (!user) {
    return null;
  }
  var relevance = user.relevance;
  var pagerank = relevance ? relevance.pagerank || 0 : 0;
  var iconSize = size || 3;
  var imageMargin = align === 'center' ? 0 : (0, _styles.sizing)(-1, 'px');
  if (inline) {
    return _react.default.createElement(
      _uni.Text,
      (0, _extends2.default)({}, rest, {
        inline: inline ? 1 : 0,
        align: align || 'center',
        __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }
      }),
      _react.default.createElement(_uni.Image, {
        h: iconSize * 1.0,
        w: iconSize * 1.0,
        source: iconImage,
        style: { bottom: imageMargin },
        resizeMode: 'contain',
        inline: 1,
        __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 9 }
      }),
      ' ',
      _react.default.createElement(
        _uni.NumericalValue,
        {
          inline: inline ? 1 : 0,
          lh: lh,
          c: color,
          __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 9 }
        },
        (0, _numbers.abbreviateNumber)(pagerank) || 0
      )
    );
  }
  return _react.default.createElement(
    _uni.ImageWrapper,
    (0, _extends2.default)({}, rest, {
      inline: inline ? 1 : 0,
      align: align || 'center',
      mr: typeof mr === 'number' ? mr : 1.5,
      __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 5 }
    }),
    _react.default.createElement(_uni.Image, {
      h: iconSize * 1,
      w: iconSize * 1,
      source: iconImage,
      mr: iconSize / 10,
      style: { bottom: imageMargin },
      resizeMode: 'contain',
      inline: inline ? 1 : 0,
      __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 7 }
    }),
    _react.default.createElement(
      _uni.NumericalValue,
      {
        inline: inline ? 1 : 0,
        lh: lh,
        c: color,
        __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 }
      },
      (0, _numbers.abbreviateNumber)(pagerank) || 0
    )
  );
}
RStat.propTypes = {
  inline: _propTypes.default.oneOfType([
    _propTypes.default.bool,
    _propTypes.default.number
  ]),
  lh: _propTypes.default.number,
  align: _propTypes.default.string,
  mr: _propTypes.default.number,
  color: _propTypes.default.string,
  user: _propValidation.userProps,
  size: _propTypes.default.number
};
//# sourceMappingURL=rStat.component.js.map
