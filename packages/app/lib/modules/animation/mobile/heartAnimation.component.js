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
var animationActions = _interopRequireWildcard(require('../animation.actions'));
var _global = require('../../../styles/global');
var _heart = _interopRequireDefault(require('./heart.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/animation/mobile/heartAnimation.component.js';
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
var heartAnimation = (function(_Component) {
  (0, _inherits2.default)(heartAnimation, _Component);
  var _super = _createSuper(heartAnimation);
  function heartAnimation(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, heartAnimation);
    _this = _super.call(this, props, context);
    _this.heartAni = _this.heartAni.bind((0, _assertThisInitialized2.default)(_this));
    _this.num = 0;
    _this.state = { heartAni: [] };
    return _this;
  }
  (0, _createClass2.default)(heartAnimation, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev) {
        var notif = this.props.notif;
        if (notif.count && prev.notif.count < notif.count) {
          var newNotifications = notif.count - prev.notif.count;
          this.num = newNotifications;
          this.heartAni();
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.clearEls();
      }
    },
    {
      key: 'clearEls',
      value: function clearEls() {
        this.num = 0;
        this.setState({ heartAni: [] });
      }
    },
    {
      key: 'heartAni',
      value: function heartAni() {
        var _this2 = this;
        var length = this.state.heartAni.length;
        var delay = 500 / this.num;
        if (length < this.num) {
          var newArr = this.state.heartAni;
          newArr.push(
            _react.default.createElement(_heart.default, {
              delay: delay,
              key: length,
              specialKey: length,
              __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 19 }
            })
          );
          this.setState({ heartAni: newArr });
          setTimeout(function() {
            _this2.heartAni();
          }, delay);
        } else {
          setTimeout(function() {
            _this2.clearEls();
          }, 2000);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            pointerEvents: 'none',
            style: styles.heartsContainer,
            __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 }
          },
          this.state.heartAni
        );
      }
    }
  ]);
  return heartAnimation;
})(_react.Component);
(0, _defineProperty2.default)(heartAnimation, 'propTypes', {
  notif: _propTypes.default.object
});
function mapStateToProps(state) {
  return { animation: state.animation, notif: state.notif };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_objectSpread({}, animationActions), dispatch)
  };
}
var localStyles = _reactNativeWeb.StyleSheet.create({
  heartsContainer: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    height: _global.fullHeight,
    width: _global.fullWidth
  }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(heartAnimation);
exports.default = _default;
//# sourceMappingURL=heartAnimation.component.js.map
