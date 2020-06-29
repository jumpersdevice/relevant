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
var _uni = require('../../styled/uni');
var _reduxForm = require('redux-form');
var _web = require('../../styled/web');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _auth = require('../auth.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/confirmEmail.component.js';
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
var EmailConfirm = (function(_Component) {
  (0, _inherits2.default)(EmailConfirm, _Component);
  var _super = _createSuper(EmailConfirm);
  function EmailConfirm(props) {
    var _this;
    (0, _classCallCheck2.default)(this, EmailConfirm);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'sendConfirmation',
      function() {
        _this.setState({ sending: true });
        _this.props.actions.sendConfirmation().then(function() {
          _this.setState({ sending: false });
        });
      }
    );
    _this.state = { sending: false, email: null };
    return _this;
  }
  (0, _createClass2.default)(
    EmailConfirm,
    [
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          this.props.initialize(this.state);
        }
      },
      {
        key: 'render',
        value: function render() {
          var auth = this.props.auth;
          var text = 'Your email has been confirmed';
          var resend;
          if (!auth.confirmed) {
            text = 'Your email is not confirmed';
            if (auth.user) {
              resend = _react.default.createElement(
                _uni.View,
                {
                  justify: ['flex-end', 'stretch'],
                  fdirection: 'column',
                  __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }
                },
                _react.default.createElement(
                  _web.Button,
                  {
                    mr: ['auto', 0],
                    mt: 4,
                    onClick: this.sendConfirmation,
                    p: 0,
                    disabled: this.state.sending,
                    __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 13 }
                  },
                  'Resend email confirmation code'
                ),
                _react.default.createElement(
                  _uni.SecondaryText,
                  {
                    mt: 2,
                    __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 13 }
                  },
                  "If you don't see an email in your inbox, please check your spam folder"
                )
              );
            }
          }
          return _react.default.createElement(
            _uni.View,
            {
              fdirection: 'column',
              __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 7 }
            },
            _react.default.createElement(
              _uni.BodyText,
              { __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 9 } },
              text
            ),
            resend
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props) {
          var email = props.auth.user ? props.auth.user.email : null;
          var confirmed = props.auth.user ? props.auth.user.confirmed : null;
          return { email: email, confirmed: confirmed };
        }
      }
    ]
  );
  return EmailConfirm;
})(_react.Component);
(0, _defineProperty2.default)(EmailConfirm, 'propTypes', {
  actions: _propTypes.default.object,
  auth: _propTypes.default.object,
  initialize: _propTypes.default.func
});
var mapStateToProps = function mapStateToProps(state) {
  return { auth: state.auth };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      { sendConfirmation: _auth.sendConfirmation },
      dispatch
    )
  };
};
var _default = (0, _reduxForm.reduxForm)({
  form: 'emailConfirm',
  enableReinitialize: true
})((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EmailConfirm));
exports.default = _default;
//# sourceMappingURL=confirmEmail.component.js.map
