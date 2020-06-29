'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = ProfileStats;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _coinStat = _interopRequireDefault(require('../stats/coinStat.component'));
var _rStat = _interopRequireDefault(require('../stats/rStat.component'));
var _percent = _interopRequireDefault(require('../stats/percent.component'));
var _uni = require('../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/profile.stats.js';
ProfileStats.propTypes = {
  user: _propTypes.default.object,
  isOwner: _propTypes.default.bool
};
function ProfileStats(_ref) {
  var user = _ref.user,
    isOwner = _ref.isOwner;
  return _react.default.createElement(
    _uni.Text,
    { __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 5 } },
    _react.default.createElement(_rStat.default, {
      pr: 1.5,
      inline: 1,
      size: 1.75,
      user: user,
      align: 'baseline',
      __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 }
    }),
    '  ',
    _react.default.createElement(_percent.default, {
      size: 1.75,
      user: user,
      align: 'baseline',
      __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 7 }
    }),
    '   ',
    _react.default.createElement(_coinStat.default, {
      inline: 1,
      size: 1.75,
      user: user,
      isOwner: isOwner,
      align: 'baseline',
      __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 7 }
    })
  );
}
//# sourceMappingURL=profile.stats.js.map
