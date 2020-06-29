'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Percent;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _get = _interopRequireDefault(require('lodash/get'));
var _propValidation = require('../../utils/propValidation');
var _utils = require('../../utils');
var _styles = require('../../styles');
var _uni = require('../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/percent.component.js';
function Percent(props) {
  if (!(0, _get.default)(props.user, 'relevance')) {
    return null;
  }
  var align = props.align,
    mr = props.mr,
    size = props.size,
    rest = (0, _objectWithoutProperties2.default)(props, ['align', 'mr', 'size']);
  var percent = Math.max(
    0,
    _utils.numbers.percentChange((0, _get.default)(props.user, 'relevance'))
  );
  var percentPretty = _utils.numbers.abbreviateNumber(percent);
  var isNegative = percent < 0;
  return _react.default.createElement(
    _uni.NumericalValue,
    (0, _extends2.default)({}, rest, {
      align: align || 'center',
      mr: 2 || mr,
      __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 5 }
    }),
    _react.default.createElement(
      _uni.Text,
      {
        fs: size,
        c: isNegative ? _styles.colors.red : _styles.colors.green,
        __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 7 }
      },
      isNegative ? '▼ ' : '▲ '
    ),
    percentPretty,
    '%'
  );
}
Percent.propTypes = {
  user: _propValidation.userProps,
  align: _propTypes.default.string,
  mr: _propTypes.default.string,
  size: _propTypes.default.number
};
//# sourceMappingURL=percent.component.js.map
