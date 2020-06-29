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
var _reactRouterDom = require('react-router-dom');
var _reduxformfield = _interopRequireDefault(
  require('../../styled/form/reduxformfield.component')
);
var _reduxForm = require('redux-form');
var _web = require('../../styled/web');
var _validators = require('../../form/validators');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _auth = require('../auth.actions');
var _navigation = require('../../navigation/navigation.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/resetPassword.component.js';
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
var ResetPassword = (function(_Component) {
  (0, _inherits2.default)(ResetPassword, _Component);
  var _super = _createSuper(ResetPassword);
  function ResetPassword(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ResetPassword);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'submit',
      function(vals) {
        var user = _this.props.auth.user;
        _this.props.actions
          .resetPassword(vals.password, _this.token)
          .then(function(success) {
            if (success && !user) {
              _this.props.actions.showModal('login');
            } else {
              _this.props.close();
            }
          });
      }
    );
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(ResetPassword, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var location = this.props.location;
        var route = { path: '/user/resetPassword/:token', exact: true };
        var match = (0, _reactRouterDom.matchPath)(location.pathname, route);
        this.token = match && match.params && match.params.token;
      }
    },
    {
      key: 'render',
      value: function render() {
        var handleSubmit = this.props.handleSubmit;
        var FORM_FIELDS = [
          {
            name: 'password',
            component: _reduxformfield.default,
            type: 'password',
            label: 'Password',
            validate: [_validators.required]
          },
          {
            name: 'confirmPassword',
            component: _reduxformfield.default,
            type: 'password',
            label: 'Confirm Password',
            validate: [_validators.required]
          }
        ];
        return _react.default.createElement(
          _web.View,
          {
            display: 'flex',
            fdirection: 'column',
            m: '4 0',
            __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 7 }
          },
          _react.default.createElement(
            _web.Form,
            {
              fdirection: 'column',
              onSubmit: handleSubmit(this.submit.bind(this)),
              __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 9 }
            },
            FORM_FIELDS.map(function(field, index) {
              return _react.default.createElement(
                _reduxForm.Field,
                (0, _extends2.default)({}, field, {
                  key: index,
                  __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 13 }
                })
              );
            }),
            _react.default.createElement(
              _web.View,
              {
                mt: 4,
                ml: 0,
                justify: 'flex-end',
                __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 11 }
              },
              _react.default.createElement(
                _web.Button,
                {
                  type: 'submit',
                  p: 0,
                  __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 13 }
                },
                'Update Password'
              )
            )
          )
        );
      }
    }
  ]);
  return ResetPassword;
})(_react.Component);
(0, _defineProperty2.default)(ResetPassword, 'propTypes', {
  match: _propTypes.default.object,
  actions: _propTypes.default.object,
  history: _propTypes.default.object,
  handleSubmit: _propTypes.default.func,
  auth: _propTypes.default.object,
  close: _propTypes.default.func,
  showModal: _propTypes.default.func,
  location: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  return { user: state.auth.user, auth: state.auth };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        resetPassword: _auth.resetPassword,
        hideModal: _navigation.hideModal,
        showModal: _navigation.showModal
      },
      dispatch
    )
  };
};
var _default = (0, _reduxForm.reduxForm)({
  form: 'settings',
  validate: function validate(vals) {
    var errors = {};
    if (vals.password !== vals.confirmPassword) {
      var message = 'Passwords must be identical';
      errors.password = message;
      errors.confirmPassword = message;
    }
    return errors;
  }
})(
  (0, _reactRedux.connect)(
    mapStateToProps,
    mapDispatchToProps
  )((0, _reactRouterDom.withRouter)(ResetPassword))
);
exports.default = _default;
//# sourceMappingURL=resetPassword.component.js.map
