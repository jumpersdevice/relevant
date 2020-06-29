'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _global = require('../../../styles/global');
var _percent = _interopRequireDefault(require('./percent.component'));
var _utils = require('../../../utils');
var tooltipActions = _interopRequireWildcard(require('../../tooltip/tooltip.actions'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/mobile/stats.component.js';
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
var Stats = (function(_Component) {
  (0, _inherits2.default)(Stats, _Component);
  var _super = _createSuper(Stats);
  function Stats(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Stats);
    _this = _super.call(this, props, context);
    _this.initTooltips = _this.initTooltips.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.toggleTooltip = _this.toggleTooltip.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.tooltipParent = {};
    return _this;
  }
  (0, _createClass2.default)(Stats, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        if (this.props.type === 'nav' && this.props.discover) {
          this.tooltipParent.topics = this.props.parent.title;
          setTimeout(function() {
            return _this2.initTooltips();
          }, 1000);
        }
      }
    },
    {
      key: 'initTooltips',
      value: function initTooltips() {
        var _this3 = this;
        ['relevance', 'coin', 'topics', 'earnings'].forEach(function(name) {
          _this3.props.actions.setTooltipData({
            name: name,
            toggle: function toggle() {
              return _this3.toggleTooltip(name);
            }
          });
        });
      }
    },
    {
      key: 'toggleTooltip',
      value: function toggleTooltip(name) {
        var _this4 = this;
        if (this.props.type !== 'nav') return;
        if (!this.tooltipParent[name]) return;
        this.tooltipParent[name].measureInWindow(function(x, y, w, h) {
          var parent = { x: x, y: y, w: w, h: h };
          if (x + y + w + h === 0) return;
          _this4.props.actions.setTooltipData({ name: name, parent: parent });
          _this4.props.actions.showTooltip(name);
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this5 = this;
        var type = this.props.type;
        var entity = this.props.entity || this.props.auth.user;
        if (!entity) return null;
        var statsStyle = [
          { fontSize: 17, lineHeight: 17, height: 17 },
          styles.bebas,
          styles.quarterLetterSpacing
        ];
        var iconStyle = [];
        var coinStyle = [];
        if (this.props.size === 'small' || (_global.smallScreen && type === 'nav')) {
          statsStyle = [
            { fontSize: 15, lineHeight: 15 },
            styles.bebas,
            styles.quarterLetterSpacing
          ];
          iconStyle = [{ width: 15, height: 15 }];
          coinStyle = [{ width: 15, height: 15 }];
        }
        if (this.props.size === 'tiny') {
          statsStyle = [
            { fontSize: 13, lineHeight: 13 },
            styles.bebas,
            styles.quarterLetterSpacing
          ];
          iconStyle = [{ width: 14, height: 14 }];
        }
        var value = _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            ref: function ref(c) {
              return (_this5.tooltipParent.coin = c);
            },
            onPress: function onPress() {
              return _this5.toggleTooltip('coin');
            },
            style: styles.statInner,
            __source: { fileName: _jsxFileName, lineNumber: 107, columnNumber: 7 }
          },
          _react.default.createElement(_reactNativeWeb.Image, {
            resizeMode: 'contain',
            style: [styles.coin].concat((0, _toConsumableArray2.default)(coinStyle)),
            source: require('../../../../public/img/relevantcoin.png'),
            __source: { fileName: _jsxFileName, lineNumber: 112, columnNumber: 9 }
          }),
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [this.props.textStyle, statsStyle, styles.darkGrey],
              __source: { fileName: _jsxFileName, lineNumber: 117, columnNumber: 9 }
            },
            _utils.numbers.abbreviateNumber(
              entity.value || entity.balance + entity.tokenBalance || 0
            )
          )
        );
        var percent = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: styles.statInner,
            __source: { fileName: _jsxFileName, lineNumber: 126, columnNumber: 7 }
          },
          _react.default.createElement(_percent.default, {
            fontSize: 17,
            user: entity,
            __source: { fileName: _jsxFileName, lineNumber: 127, columnNumber: 9 }
          })
        );
        entity.relevance = entity.relevance || {};
        var rank = this.props.topic
          ? entity[this.props.topic + '_relevance']
          : entity.relevance.pagerank || 0;
        var relevance = _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            ref: function ref(c) {
              return (_this5.tooltipParent.relevance = c);
            },
            onPress: function onPress() {
              return _this5.toggleTooltip('relevance');
            },
            style: styles.statInner,
            __source: { fileName: _jsxFileName, lineNumber: 137, columnNumber: 7 }
          },
          _react.default.createElement(_reactNativeWeb.Image, {
            resizeMode: 'contain',
            style: [styles.r].concat((0, _toConsumableArray2.default)(iconStyle)),
            source: require('../../../../public/img/r.png'),
            __source: { fileName: _jsxFileName, lineNumber: 142, columnNumber: 9 }
          }),
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [this.props.textStyle, statsStyle, styles.darkGrey],
              __source: { fileName: _jsxFileName, lineNumber: 147, columnNumber: 9 }
            },
            _utils.numbers.abbreviateNumber(rank)
          )
        );
        var getLeft = function getLeft() {
          if (type === 'relevance') return null;
          if (type === 'value') return value;
          if (type === 'percent') return _this5.props.renderLeft || percent;
          if (type === 'nav') return value;
          return null;
        };
        var getRight = function getRight() {
          if (type === 'value') return relevance;
          if (type === 'percent') return relevance;
          if (type === 'nav') return relevance;
          if (type === 'relevance') return relevance;
          return null;
        };
        var br = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: styles.statInner,
            __source: { fileName: _jsxFileName, lineNumber: 170, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: statsStyle,
              __source: { fileName: _jsxFileName, lineNumber: 171, columnNumber: 9 }
            },
            _global.smallScreen ? '•' : ' • '
          )
        );
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [styles.stats, this.props.style],
            __source: { fileName: _jsxFileName, lineNumber: 176, columnNumber: 7 }
          },
          getLeft(),
          getLeft() && !this.props.renderLeft ? br : null,
          getRight()
        );
      }
    }
  ]);
  return Stats;
})(_react.Component);
(0, _defineProperty2.default)(Stats, 'propTypes', {
  type: _propTypes.default.string,
  discover: _propTypes.default.bool,
  parent: _propTypes.default.object,
  actions: _propTypes.default.object,
  size: _propTypes.default.string,
  textStyle: _propTypes.default.object,
  topic: _propTypes.default.string,
  renderLeft: _propTypes.default.object,
  style: _propTypes.default.object,
  entity: _propTypes.default.object,
  auth: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  stats: { alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' },
  statInner: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_objectSpread({}, tooltipActions), dispatch)
  };
}
var _default = (0, _reactRedux.connect)(function(state) {
  return { auth: state.auth };
}, mapDispatchToProps)(Stats);
exports.default = _default;
//# sourceMappingURL=stats.component.js.map
