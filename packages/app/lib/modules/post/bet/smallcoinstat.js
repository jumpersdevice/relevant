'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = SmallCoinStat;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _coinStat = _interopRequireDefault(require('../../stats/coinStat.component'));
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/bet/smallcoinstat.js';
SmallCoinStat.propTypes = { amount: _propTypes.default.number };
function SmallCoinStat(_ref) {
  var amount = _ref.amount,
    rest = (0, _objectWithoutProperties2.default)(_ref, ['amount']);
  return _react.default.createElement(
    _coinStat.default,
    (0, _extends2.default)(
      {
        size: 1.5,
        fs: 1.5,
        secondary: true,
        c: _styles.colors.black,
        inline: 1,
        amount: amount
      },
      rest,
      { __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 5 } }
    )
  );
}
//# sourceMappingURL=smallcoinstat.js.map
