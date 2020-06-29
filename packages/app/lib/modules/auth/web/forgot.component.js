'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
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
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _reactRouterDom = require('react-router-dom');
var _navigation = require('../../navigation/navigation.actions');
var _auth = require('../auth.actions');
var _reduxformfield = _interopRequireDefault(
  require('../../styled/form/reduxformfield.component')
);
var _validators = require('../../form/validators');
var _reduxForm = require('redux-form');
var _web = require('../../styled/web');
var _queryString = _interopRequireDefault(require('query-string'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/forgot.component.js';
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
var Forgot = (function(_Component) {
  (0, _inherits2.default)(Forgot, _Component);
  var _super = _createSuper(Forgot);
  function Forgot(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Forgot);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'sendEmail',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(data) {
            var _this$props, actions, location, params, queryParams, res;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    (_this$props = _this.props),
                      (actions = _this$props.actions),
                      (location = _this$props.location);
                    params = _queryString.default.parse(location.search);
                    delete params.modal;
                    queryParams = '?' + _queryString.default.stringify(params);
                    _context.next = 6;
                    return actions.forgotPassword(data.username, queryParams);
                  case 6:
                    res = _context.sent;
                    if (res && res.email) {
                      _this.setState({ sentEmailTo: res.email });
                    }
                  case 8:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    _this.state = { sentEmailTo: null };
    _this.FORM_FIELDS = [
      {
        name: 'username',
        component: _reduxformfield.default,
        type: 'text',
        placeholder: 'Username or Email',
        validate: [_validators.required]
      }
    ];
    return _this;
  }
  (0, _createClass2.default)(Forgot, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var handleSubmit = this.props.handleSubmit;
        if (this.state.sentEmailTo) {
          return _react.default.createElement(
            _uni.BodyText,
            {
              c: _styles.colors.black,
              __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 9 }
            },
            'We have set an email to ',
            this.state.sentEmailTo,
            ' with a link to reset your password.',
            '\n',
            "If you don't see a password reset email in your inbox, please check your spam folder."
          );
        }
        return _react.default.createElement(
          _web.View,
          {
            fdirection: 'column',
            __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 7 }
          },
          _react.default.createElement(
            _web.Form,
            {
              fdirection: 'column',
              onSubmit: handleSubmit(this.sendEmail),
              __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 9 }
            },
            this.FORM_FIELDS.map(function(field, index) {
              return _react.default.createElement(
                _reduxForm.Field,
                (0, _extends2.default)({}, field, {
                  key: index,
                  __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 13 }
                })
              );
            }),
            _react.default.createElement(
              _web.View,
              {
                display: 'flex',
                fdirection: 'row',
                align: 'center',
                mt: 7,
                justify: 'flex-end',
                __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.LinkFont,
                {
                  shrink: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 13 }
                },
                'Back to ',
                _react.default.createElement(
                  'a',
                  {
                    onClick: function onClick() {
                      return _this2.props.actions.showModal('login');
                    },
                    __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 23 }
                  },
                  'Sign in'
                )
              ),
              _react.default.createElement(
                _web.Button,
                {
                  type: 'submit',
                  m: 0,
                  ml: 2,
                  __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 13 }
                },
                'Send Recovery Email'
              )
            )
          )
        );
      }
    }
  ]);
  return Forgot;
})(_react.Component);
(0, _defineProperty2.default)(Forgot, 'propTypes', {
  actions: _propTypes.default.object,
  location: _propTypes.default.object,
  handleSubmit: _propTypes.default.func,
  initialValues: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user,
    auth: state.auth,
    initialValues: {},
    enableReinitialize: true
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      { showModal: _navigation.showModal, forgotPassword: _auth.forgotPassword },
      dispatch
    )
  };
};
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(
    mapStateToProps,
    mapDispatchToProps
  )((0, _reduxForm.reduxForm)({ form: 'forgotPassword' })(Forgot))
);
exports.default = _default;
//# sourceMappingURL=forgot.component.js.map
