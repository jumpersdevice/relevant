'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _utils = require('../../utils');
var _styles = require('../../styles');
var _uni = require('../styled/uni');
var _propValidation = require('../../utils/propValidation');
var _numbers = require('../../utils/numbers');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/earning.component.js';
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
var Earning = (function(_PureComponent) {
  (0, _inherits2.default)(Earning, _PureComponent);
  var _super = _createSuper(Earning);
  function Earning() {
    (0, _classCallCheck2.default)(this, Earning);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Earning, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          earning = _this$props.earning,
          month = _this$props.month,
          payout = _this$props.payout,
          screenSize = _this$props.screenSize,
          PostPreview = _this$props.PostPreview;
        var community = earning.community,
          post = earning.post;
        if (!earning) return null;
        var _earning$status = earning.status,
          status = _earning$status === void 0 ? '' : _earning$status;
        var payoutTime =
          status === 'pending' && (0, _numbers.getTimestamp)(earning.payoutTime);
        var text = earning.cashOutAttempt
          ? 'Transfer tokens to Ethereum wallet: '.concat(status)
          : ''.concat(status).concat(payoutTime ? ' ' + payoutTime.toLowerCase() : '');
        var monthEl =
          month &&
          _react.default.createElement(
            _uni.View,
            {
              mt: 4,
              __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 7 }
            },
            _react.default.createElement(
              _uni.BodyText,
              { __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 9 } },
              month.toUpperCase()
            )
          );
        return _react.default.createElement(
          _uni.View,
          {
            m: ['0 4', '0 2'],
            key: earning._id,
            __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 7 }
          },
          monthEl,
          _react.default.createElement(Header, {
            date: earning.createdAt,
            amount: payout || -earning.cashOutAmt,
            text: text,
            bb: !post,
            __source: { fileName: _jsxFileName, lineNumber: 39, columnNumber: 9 }
          }),
          post
            ? _react.default.createElement(
                _uni.View,
                {
                  border: screenSize ? null : 1,
                  __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }
                },
                _react.default.createElement(PostPreview, {
                  screenSize: screenSize,
                  community: community,
                  postId: post,
                  __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 13 }
                })
              )
            : null
        );
      }
    }
  ]);
  return Earning;
})(_react.PureComponent);
exports.default = Earning;
(0, _defineProperty2.default)(Earning, 'propTypes', {
  earning: _propTypes.default.object,
  month: _propTypes.default.string,
  payout: _propTypes.default.number,
  screenSize: _propTypes.default.number,
  PostPreview: _propValidation.elementTypePropTypeChecker
});
Header.propTypes = {
  text: _propTypes.default.string,
  amount: _propTypes.default.number,
  date: _propTypes.default.string,
  bb: _propTypes.default.bool
};
function Header(_ref) {
  var date = _ref.date,
    amount = _ref.amount,
    text = _ref.text,
    bb = _ref.bb;
  return _react.default.createElement(
    _uni.View,
    {
      bt: true,
      bl: true,
      br: true,
      bb: bb,
      p: '1.5 1',
      fdirection: 'row',
      mt: 2,
      bg: _styles.colors.secondaryBG,
      grow: 1,
      justify: 'space-between',
      __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.View,
      {
        display: 'flex',
        fdirection: 'row',
        wrap: true,
        flex: 1,
        __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.BodyText,
        {
          mr: [4, 2],
          __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 9 }
        },
        date && _utils.numbers.getDayMonthYearTimestamp(date)
      ),
      _react.default.createElement(
        _uni.BodyText,
        {
          c: _styles.colors.secondaryText,
          __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 9 }
        },
        text
      )
    ),
    amount < 0
      ? _react.default.createElement(
          _uni.BodyText,
          {
            c: _styles.colors.red,
            __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 9 }
          },
          _utils.numbers.abbreviateNumber(amount),
          ' REL'
        )
      : _react.default.createElement(
          _uni.BodyText,
          {
            c: _styles.colors.green,
            __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 9 }
          },
          '+ ',
          _utils.numbers.abbreviateNumber(amount),
          ' REL'
        )
  );
}
//# sourceMappingURL=earning.component.js.map
