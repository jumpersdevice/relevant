'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
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
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _get = _interopRequireDefault(require('lodash/get'));
var _admin = require('../../admin/admin.actions');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _inviteModal = _interopRequireDefault(require('../inviteModal.component'));
var _alert = require('../../../utils/alert');
var _text = require('../../../utils/text');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/invites/web/inviteModal.container.js';
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
var InviteModalContainer = (function(_Component) {
  (0, _inherits2.default)(InviteModalContainer, _Component);
  var _super = _createSuper(InviteModalContainer);
  function InviteModalContainer() {
    (0, _classCallCheck2.default)(this, InviteModalContainer);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(InviteModalContainer, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var community = this.props.auth.community;
        if (community) this.props.actions.getInviteCount();
      }
    },
    {
      key: 'postInviteGeneration',
      value: function postInviteGeneration(invite) {
        if (invite) {
          (0, _alert.Alert)().alert('Generated new invite link', 'success');
        }
      }
    },
    {
      key: 'handleShare',
      value: function handleShare(data) {
        (0, _text.copyToClipBoard)(data.url);
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _inviteModal.default,
          (0, _extends2.default)({}, this.props, {
            postInviteGeneration: this.postInviteGeneration,
            onShare: this.handleShare,
            __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 7 }
          })
        );
      }
    }
  ]);
  return InviteModalContainer;
})(_react.Component);
InviteModalContainer.propTypes = {
  actions: _propTypes.default.object,
  close: _propTypes.default.func,
  auth: _propTypes.default.object
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: (0, _get.default)(state, 'auth', {}),
    community: (0, _get.default)(state, 'community', {}),
    count: state.admin.count,
    invites: state.admin.invites,
    inviteList: state.admin.inviteList,
    initialValues: { invitedByString: (0, _get.default)(state, 'auth.user.name', '') }
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        createInvite: _admin.createInvite,
        getInviteCount: _admin.getInviteCount,
        getInvites: _admin.getInvites
      },
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(InviteModalContainer);
exports.default = _default;
//# sourceMappingURL=inviteModal.container.js.map
