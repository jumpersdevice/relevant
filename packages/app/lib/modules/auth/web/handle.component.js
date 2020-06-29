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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _auth = require('../auth.actions');
var _reactRouterDom = require('react-router-dom');
var _navigation = require('../../navigation/navigation.actions');
var _reduxformfield = _interopRequireDefault(
  require('../../styled/form/reduxformfield.component')
);
var _validators = require('../../form/validators');
var _reduxForm = require('redux-form');
var _web = require('../../styled/web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/handle.component.js';
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
var SetHandle = (function(_Component) {
  (0, _inherits2.default)(SetHandle, _Component);
  var _super = _createSuper(SetHandle);
  function SetHandle(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SetHandle);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'updateFormFields',
      function() {
        var user = _this.props.user;
        _this.FORM_FIELDS = [
          {
            name: 'handle',
            component: _reduxformfield.default,
            type: 'text',
            label: 'Handle',
            placeholder: 'Choose your handle:',
            validate: [_validators.required, _validators.validCharacters]
          },
          {
            name: 'email',
            component: _reduxformfield.default,
            type: 'email',
            label: 'Email',
            placeholder: 'Email (optional for email reset and notifications)',
            validate: [_validators.email],
            isHidden: user && user.email
          }
        ];
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'submit',
      function(values) {
        var actions = _this.props.actions;
        actions.updateHandle(values);
      }
    );
    _this.updateFormFields();
    return _this;
  }
  (0, _createClass2.default)(SetHandle, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
          this.updateFormFields();
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          handleSubmit = _this$props.handleSubmit,
          user = _this$props.user;
        if (!user) {
          return _react.default.createElement(
            _web.View,
            { __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 9 } },
            _react.default.createElement(
              _web.BodyText,
              { __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 11 } },
              ' You must be logged in to change your handle.'
            )
          );
        }
        return _react.default.createElement(
          _web.Form,
          {
            fdirection: 'column',
            onSubmit: handleSubmit(this.submit),
            __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 7 }
          },
          this.FORM_FIELDS.map(function(field) {
            return field.isHidden
              ? null
              : _react.default.createElement(
                  _reduxForm.Field,
                  (0, _extends2.default)({}, field, {
                    key: field.name,
                    __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 35 }
                  })
                );
          }),
          _react.default.createElement(
            _web.View,
            {
              justify: 'flex-start',
              __source: { fileName: _jsxFileName, lineNumber: 85, columnNumber: 9 }
            },
            _react.default.createElement(
              _web.Button,
              {
                type: 'submit',
                ml: 'auto',
                mt: 4,
                __source: { fileName: _jsxFileName, lineNumber: 86, columnNumber: 11 }
              },
              'Finish'
            )
          )
        );
      }
    }
  ]);
  return SetHandle;
})(_react.Component);
(0, _defineProperty2.default)(SetHandle, 'propTypes', {
  user: _propTypes.default.object,
  actions: _propTypes.default.object,
  checkUser: _propTypes.default.func,
  nameError: _propTypes.default.string,
  handleSubmit: _propTypes.default.func
});
var mapStateToProps = function mapStateToProps(state) {
  var initialValues = {};
  var user = state.auth.user;
  if (user && user.handle) {
    initialValues.handle = user.handle;
  }
  return { user: user, auth: state.auth, initialValues: initialValues };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        loginUser: _auth.loginUser,
        showModal: _navigation.showModal,
        checkUser: _auth.checkUser,
        createUser: _auth.createUser,
        updateHandle: _auth.updateHandle
      },
      dispatch
    )
  };
};
var validate = function validate() {};
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(
    mapStateToProps,
    mapDispatchToProps
  )(
    (0, _reduxForm.reduxForm)({
      form: 'setHandle',
      validate: validate,
      asyncValidate: _validators.signupAsyncValidation,
      asyncChangeFields: ['handle', 'email']
    })(SetHandle)
  )
);
exports.default = _default;
//# sourceMappingURL=handle.component.js.map
