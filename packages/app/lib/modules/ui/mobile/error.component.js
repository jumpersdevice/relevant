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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _global = require('../../../styles/global');
var errorActions = _interopRequireWildcard(require('../error.actions'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/mobile/error.component.js';
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
var styles;
var ErrorComponent = (function(_Component) {
  (0, _inherits2.default)(ErrorComponent, _Component);
  var _super = _createSuper(ErrorComponent);
  function ErrorComponent(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, ErrorComponent);
    _this = _super.call(this, props, context);
    _this.reload = _this.reload.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(ErrorComponent, [
    {
      key: 'reload',
      value: function reload() {
        this.setState({ loading: true });
        this.props.actions.setError(this.props.parent, false);
        this.props.reloadFunction();
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var errorEl = null;
        if (this.props.error) {
          errorEl = _react.default.createElement(
            _reactNativeWeb.TouchableHighlight,
            {
              underlayColor: 'transparent',
              onPress: function onPress() {
                return _this2.reload();
              },
              __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              { __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 11 } },
              _react.default.createElement(_reactNativeWeb.Image, {
                source: require('../../../../public/img/reload.png'),
                style: styles.reloadIcon,
                __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 13 }
              }),
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: { fontSize: 20, textAlign: 'center' },
                  __source: { fileName: _jsxFileName, lineNumber: 38, columnNumber: 13 }
                },
                'Reload'
              )
            )
          );
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            pointerEvents: this.props.error ? 'auto' : 'none',
            style: styles.errorComponentContainer,
            __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 7 }
          },
          errorEl
        );
      }
    }
  ]);
  return ErrorComponent;
})(_react.Component);
(0, _defineProperty2.default)(ErrorComponent, 'propTypes', {
  actions: _propTypes.default.object,
  parent: _propTypes.default.string,
  reloadFunction: _propTypes.default.func,
  error: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  errorComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
function mapStateToProps(state) {
  return { error: state.error };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_objectSpread({}, errorActions), dispatch)
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(ErrorComponent);
exports.default = _default;
//# sourceMappingURL=error.component.js.map
