'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var adminActions = _interopRequireWildcard(require('../admin.actions'));
var _infScroll = _interopRequireDefault(
  require('../../listview/web/infScroll.component')
);
var _numbers = require('../../../utils/numbers');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/downvotes.container.js';
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
var PAGE_SIZE = 40;
var Downvotes = (function(_Component) {
  (0, _inherits2.default)(Downvotes, _Component);
  var _super = _createSuper(Downvotes);
  function Downvotes(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Downvotes);
    _this = _super.call(this, props);
    _this.renderDownvote = _this.renderDownvote.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.hasMore = true;
    return _this;
  }
  (0, _createClass2.default)(Downvotes, [
    {
      key: 'renderDownvote',
      value: function renderDownvote(downvote) {
        return _react.default.createElement(
          'div',
          {
            className: 'downvoteList',
            key: downvote._id,
            __source: { fileName: _jsxFileName, lineNumber: 26, columnNumber: 7 }
          },
          _react.default.createElement(
            'div',
            {
              className: 'dUser',
              __source: { fileName: _jsxFileName, lineNumber: 27, columnNumber: 9 }
            },
            downvote.investor
          ),
          _react.default.createElement(
            'div',
            { __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 9 } },
            '- ',
            downvote.author
          ),
          _react.default.createElement(
            'div',
            { __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 9 } },
            (0, _numbers.getDayMonthYearTimestamp)(downvote.createdAt)
          ),
          _react.default.createElement(
            'div',
            { __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 9 } },
            downvote.post
              ? (0, _numbers.getDayMonthYearTimestamp)(downvote.post.createdAt)
              : '[deleted]'
          )
        );
      }
    },
    {
      key: 'load',
      value: function load(page) {
        var l = this.props.admin.downvotes.length;
        this.hasMore = (page - 1) * PAGE_SIZE <= l;
        if (this.hasMore) {
          this.props.actions.getDownvotes(l, PAGE_SIZE);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var downvoteEl = this.props.admin.downvotes.map(function(d) {
          return _this2.renderDownvote(d);
        });
        return _react.default.createElement(
          'div',
          { __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 7 } },
          _react.default.createElement(
            'h2',
            { __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 9 } },
            'Downvotes'
          ),
          _react.default.createElement(
            _infScroll.default,
            {
              data: this.props.admin.downvotes,
              className: 'adminContainer',
              loadMore: this.load,
              hasMore: this.hasMore,
              __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 9 }
            },
            downvoteEl
          )
        );
      }
    }
  ]);
  return Downvotes;
})(_react.Component);
(0, _defineProperty2.default)(Downvotes, 'propTypes', {
  admin: _propTypes.default.object,
  actions: _propTypes.default.object
});
var _default = (0, _reactRedux.connect)(
  function(state) {
    return { auth: state.auth, admin: state.admin };
  },
  function(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(adminActions, dispatch) };
  }
)(Downvotes);
exports.default = _default;
//# sourceMappingURL=downvotes.container.js.map
