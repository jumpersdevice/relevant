'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
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
var _get = _interopRequireDefault(require('lodash/get'));
var _uni = require('../styled/uni');
var _reactRedux = require('react-redux');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/invites/inviteModalTitle.component.js';
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
var InviteModalTitle = (function(_Component) {
  (0, _inherits2.default)(InviteModalTitle, _Component);
  var _super = _createSuper(InviteModalTitle);
  function InviteModalTitle() {
    var _this;
    (0, _classCallCheck2.default)(this, InviteModalTitle);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'submit',
      (0, _asyncToGenerator2.default)(
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        })
      )
    );
    return _this;
  }
  (0, _createClass2.default)(InviteModalTitle, [
    {
      key: 'render',
      value: function render() {
        var community = this.props.community;
        var activeCommunity = (0, _get.default)(
          community,
          'communities.'.concat(community.active, '.name')
        );
        return _react.default.createElement(
          _uni.View,
          {
            display: 'flex',
            fdirection: 'row',
            justify: 'space-between',
            align: 'center',
            flex: 1,
            __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.Header,
            {
              shrink: 1,
              __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 9 }
            },
            'Invite Friends To ',
            activeCommunity
          )
        );
      }
    }
  ]);
  return InviteModalTitle;
})(_react.Component);
(0, _defineProperty2.default)(InviteModalTitle, 'propTypes', {
  community: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user,
    community: state.community,
    inviteList: (0, _get.default)(state, 'admin.inviteList', {}) || {}
  };
};
var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(InviteModalTitle);
exports.default = _default;
//# sourceMappingURL=inviteModalTitle.component.js.map
