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
var _reactNativeWeb = require('react-native-web');
var _get = _interopRequireDefault(require('lodash/get'));
var _auth = require('../../auth/auth.actions');
var _navigation = require('../../navigation/navigation.actions');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _getTokensModal = _interopRequireDefault(require('../getTokensModal.component'));
var _uni = require('../../styled/uni');
var _TwitterButton = _interopRequireDefault(
  require('../../auth/mobile/TwitterButton.component')
);
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/getTokens/mobile/getTokens.container.js';
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
var GetTokensModalContainer = (function(_Component) {
  (0, _inherits2.default)(GetTokensModalContainer, _Component);
  var _super = _createSuper(GetTokensModalContainer);
  function GetTokensModalContainer() {
    (0, _classCallCheck2.default)(this, GetTokensModalContainer);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(GetTokensModalContainer, [
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _reactNativeWeb.ScrollView,
          {
            style: { backgroundColor: _styles.colors.white },
            __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              m: 2,
              mt: 4,
              __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 9 }
            },
            _react.default.createElement(
              _getTokensModal.default,
              (0, _extends2.default)({}, this.props, {
                mobile: true,
                twitterButton: _react.default.createElement(_TwitterButton.default, {
                  auth: this.props.auth,
                  actions: this.props.actions,
                  __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 15 }
                }),
                __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 11 }
              })
            )
          )
        );
      }
    }
  ]);
  return GetTokensModalContainer;
})(_react.Component);
GetTokensModalContainer.propTypes = {
  actions: _propTypes.default.object,
  close: _propTypes.default.func,
  auth: _propTypes.default.object
};
var mapStateToProps = function mapStateToProps(state) {
  return { auth: (0, _get.default)(state, 'auth', {}) || {} };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        sendConfirmation: _auth.sendConfirmation,
        showModal: _navigation.showModal,
        push: _navigation.push,
        twitterAuth: _auth.twitterAuth,
        reloadTab: _navigation.reloadTab
      },
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(GetTokensModalContainer);
exports.default = _default;
//# sourceMappingURL=getTokens.container.js.map
