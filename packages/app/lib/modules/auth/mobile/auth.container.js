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
var _reactNavigation = require('react-navigation');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNativeCodePush = _interopRequireDefault(require('react-native-code-push'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var adminActions = _interopRequireWildcard(require('../../admin/admin.actions'));
var authActions = _interopRequireWildcard(require('../auth.actions'));
var _navigation = require('../../navigation/navigation.actions');
var _authRouter = require('../../_app/mobile/authRouter');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/auth.container.js';
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
        var _this = this;
        this.props.actions.getUser().then(
          (function() {
            var _ref = (0, _asyncToGenerator2.default)(
              _regenerator.default.mark(function _callee(user) {
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        if (user) {
                          _context.next = 2;
                          break;
                        }
                        return _context.abrupt('return', null);
                      case 2:
                        _reactNativeCodePush.default.allowRestart();
                        return _context.abrupt(
                          'return',
                          _this.props.navigation.navigate('main')
                        );
                      case 4:
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
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.props.auth.user) {
          _reactNativeCodePush.default.allowRestart();
          this.props.navigation.navigate('main');
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _reactNativeCodePush.default.allowRestart();
        this.props.actions.refreshTab('discover');
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _reactNavigation.SafeAreaView,
          {
            style: { flex: 1, backgroundColor: 'colors.white' },
            forceInset: { top: 'never' },
            __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 7 }
          },
          _react.default.createElement(_authRouter.AuthNavigator, {
            navigation: this.props.navigation,
            screenProps: this.props,
            __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return AuthContainer;
})(_react.Component);
(0, _defineProperty2.default)(AuthContainer, 'propTypes', {
  navigation: _propTypes.default.object,
  actions: _propTypes.default.object,
  auth: _propTypes.default.object
});
(0, _defineProperty2.default)(AuthContainer, 'router', _authRouter.AuthStack.router);
var mapStateToProps = function mapStateToProps(state) {
  return { auth: state.auth, admin: state.admin };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(_objectSpread({}, authActions), adminActions),
        {},
        {
          goToUrl: _navigation.goToUrl,
          push: _navigation.push,
          refreshTab: _navigation.refreshTab,
          reloadTab: _navigation.reloadTab,
          showModal: _navigation.showModal
        }
      ),
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
exports.default = _default;
//# sourceMappingURL=auth.container.js.map
