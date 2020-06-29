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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _reactRouterDom = require('react-router-dom');
var _navigation = require('../../navigation/navigation.actions');
var authActions = _interopRequireWildcard(require('../auth.actions'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/auth.container.js';
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
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
var AuthContainer = (function(_Component) {
  (0, _inherits2.default)(AuthContainer, _Component);
  var _super = _createSuper(AuthContainer);
  function AuthContainer() {
    (0, _classCallCheck2.default)(this, AuthContainer);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(AuthContainer, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.openModal();
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.match.params.modal !== this.props.match.params.modal) {
          this.openModal();
        }
      }
    },
    {
      key: 'openModal',
      value: function openModal() {
        var _this$props = this.props,
          user = _this$props.user,
          match = _this$props.match;
        var modal;
        if (match.params.modal) {
          modal = match.params.modal;
        }
        if (user && user.role === 'temp') {
          modal = 'setHandle';
        }
        if (modal === 'confirm' || modal === 'confirmEmail') {
          this.props.actions.showModal('confirm');
        } else if (modal === 'forgot') {
          this.props.actions.showModal('forgot');
        } else if (modal === 'login') {
          this.props.actions.showModal('login');
        } else if (modal === 'signup') {
          this.props.actions.showModal('signupSocial');
        } else if (modal === 'setHandle') {
          this.props.actions.showModal('setHandle');
        } else if (modal === 'resetPassword') {
          this.props.actions.showModal('resetPassword');
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement('div', {
          __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 12 }
        });
      }
    }
  ]);
  return AuthContainer;
})(_react.Component);
(0, _defineProperty2.default)(AuthContainer, 'propTypes', {
  modal: _propTypes.default.bool,
  actions: _propTypes.default.object,
  user: _propTypes.default.object,
  match: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  return { user: state.auth.user, auth: state.auth };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread({}, authActions),
        {},
        { hideModal: _navigation.hideModal, showModal: _navigation.showModal }
      ),
      dispatch
    )
  };
};
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AuthContainer)
);
exports.default = _default;
//# sourceMappingURL=auth.container.js.map
