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
var _reactRouterDom = require('react-router-dom');
var _queryString = _interopRequireDefault(require('query-string'));
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _navigation = require('../../navigation/navigation.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/signupSocial.js';
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
var twitterIcon = require('../../../../public/img/icons/twitter_white.png');
var boxIcon = require('../../../../public/img/icons/3box.png');
var twitterIconComponent = _react.default.createElement(_uni.Image, {
  resizeMode: 'contain',
  source: twitterIcon,
  w: 3,
  h: 3,
  mr: 1.5,
  __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 3 }
});
var boxIconComponent = _react.default.createElement(_uni.Image, {
  resizeMode: 'contain',
  source: boxIcon,
  w: 3,
  h: 3,
  mr: 1.5,
  __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 3 }
});
var SignupSocial = (function(_Component) {
  (0, _inherits2.default)(SignupSocial, _Component);
  var _super = _createSuper(SignupSocial);
  function SignupSocial() {
    (0, _classCallCheck2.default)(this, SignupSocial);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(SignupSocial, [
    {
      key: 'render',
      value: function render() {
        var _this = this;
        var _this$props = this.props,
          location = _this$props.location,
          auth = _this$props.auth;
        var _queryString$parse = _queryString.default.parse(location.search),
          redirect = _queryString$parse.redirect;
        if (!redirect) redirect = location.pathname;
        var invitecode = auth.invitecode;
        return _react.default.createElement(
          _uni.View,
          {
            display: 'flex',
            fdirection: 'column',
            'align-items': 'flex-start',
            __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.SecondaryText,
            { __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 9 } },
            'Sign up for Relevant.'
          ),
          _react.default.createElement(
            _uni.View,
            {
              display: 'flex',
              fdirection: ['row', 'column'],
              align: ['center', 'stretch'],
              justify: 'flex-start',
              mt: [7, 4],
              __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 9 }
            },
            _react.default.createElement(
              _ULink.default,
              {
                to: '/auth/twitter?invitecode='
                  .concat(invitecode, '&redirect=')
                  .concat(redirect),
                external: true,
                rel: 'nofollow',
                mr: [4, 0],
                __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 11 }
              },
              _react.default.createElement(_uni.ButtonWithIcon, {
                bg: _styles.colors.twitterBlue,
                image: twitterIconComponent,
                text: 'Sign up with Twitter',
                __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 13 }
              })
            ),
            _react.default.createElement(
              _ULink.default,
              {
                to: '#',
                mr: [4, 0],
                onClick: function onClick(e) {
                  e.preventDefault();
                  _this.props.actions.showModal('signup3Box');
                },
                __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.LinkFont,
                {
                  c: _styles.colors.blue,
                  __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 13 }
                },
                _react.default.createElement(_uni.ButtonWithIcon, {
                  bg: 'rgb(248,49,255)',
                  image: boxIconComponent,
                  text: 'Sign up with 3Box',
                  __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 15 }
                })
              )
            ),
            _react.default.createElement(
              _ULink.default,
              {
                to: '#',
                mt: [0, 3],
                onClick: function onClick(e) {
                  e.preventDefault();
                  _this.props.actions.showModal('signupEmail');
                },
                __source: { fileName: _jsxFileName, lineNumber: 91, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.LinkFont,
                {
                  c: _styles.colors.blue,
                  __source: { fileName: _jsxFileName, lineNumber: 100, columnNumber: 13 }
                },
                'Sign up with Email'
              )
            )
          ),
          _react.default.createElement(
            _uni.LinkFont,
            {
              mt: 4,
              __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 9 }
            },
            'Already registered?',
            ' ',
            _react.default.createElement(
              'a',
              {
                onClick: function onClick() {
                  return _this.props.actions.showModal('login');
                },
                __source: { fileName: _jsxFileName, lineNumber: 106, columnNumber: 11 }
              },
              'Sign In'
            )
          )
        );
      }
    }
  ]);
  return SignupSocial;
})(_react.Component);
(0, _defineProperty2.default)(SignupSocial, 'propTypes', {
  location: _propTypes.default.object,
  actions: _propTypes.default.object,
  auth: _propTypes.default.object
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
      { showModal: _navigation.showModal },
      dispatch
    )
  };
};
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignupSocial)
);
exports.default = _default;
//# sourceMappingURL=signupSocial.js.map
