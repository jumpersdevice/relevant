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
var _react = _interopRequireWildcard(require('react'));
var _reactNativeCodePush = _interopRequireDefault(require('react-native-code-push'));
var _reactRedux = require('react-redux');
var _configureStore = _interopRequireDefault(
  require('../../../core/mobile/configureStore')
);
var _reactHooks = require('@apollo/react-hooks');
var _apollo = require('../../../core/apollo.client');
var _drawerRouter = _interopRequireDefault(require('./drawerRouter'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/mobile/app.index.js';
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
var store = (0, _configureStore.default)();
var codePushOptions = {
  checkFrequency: _reactNativeCodePush.default.CheckFrequency.ON_APP_RESUME,
  installMode: _reactNativeCodePush.default.InstallMode.IMMEDIATE
};
var App = (function(_Component) {
  (0, _inherits2.default)(App, _Component);
  var _super = _createSuper(App);
  function App() {
    (0, _classCallCheck2.default)(this, App);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(App, [
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _reactHooks.ApolloProvider,
          {
            client: _apollo.client,
            __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactRedux.Provider,
            {
              store: store,
              __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 9 }
            },
            _react.default.createElement(_drawerRouter.default, {
              __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 11 }
            })
          )
        );
      }
    }
  ]);
  return App;
})(_react.Component);
var _default = (0, _reactNativeCodePush.default)(codePushOptions)(App);
exports.default = _default;
//# sourceMappingURL=app.index.js.map
