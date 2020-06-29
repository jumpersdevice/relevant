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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var Progress = _interopRequireWildcard(require('react-native-progress'));
var _global = require('../../../styles/global');
var _stats = _interopRequireDefault(require('./stats.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/mobile/statCategoryView.component.js';
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
var StatCategory = (function(_Component) {
  (0, _inherits2.default)(StatCategory, _Component);
  var _super = _createSuper(StatCategory);
  function StatCategory(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, StatCategory);
    _this = _super.call(this, props, context);
    _this.state = { loaded: false };
    return _this;
  }
  (0, _createClass2.default)(StatCategory, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setState({ loaded: true });
      }
    },
    {
      key: 'goToPeople',
      value: function goToPeople(topic) {
        this.props.actions.goToPeople(topic);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var stats = this.props.stats;
        var title;
        var button;
        if (typeof stats.level !== 'number') return null;
        if (stats.tag) {
          title = stats.tag.charAt(0).toUpperCase() + stats.tag.slice(1);
          button = _react.default.createElement(
            _reactNativeWeb.Text,
            {
              onPress: function onPress() {
                return _this2.goToPeople(title);
              },
              style: [styles.button, styles.active],
              __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 9 }
            },
            'See top users in ',
            title
          );
        } else {
          title = 'Relevance Stats';
          button = _react.default.createElement(
            _reactNativeWeb.Text,
            {
              onPress: function onPress() {
                return _this2.goToPeople(null);
              },
              style: [styles.button, styles.active],
              __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 9 }
            },
            'See all users'
          );
        }
        var untilNext = Math.round((10 * stats.level) % 100) / 100;
        var level = Math.floor(stats.level / 10);
        var color = this.props.index * 80 + 240;
        var relGoal = Math.round((stats.relevance / stats.level) * (level + 1) * 10);
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [styles.container, styles.statSection],
            __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flexDirection: 'row', justifyContent: 'center' },
              __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.bebas, styles.rowTitle],
                __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 11 }
              },
              title
            )
          ),
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.innerContainer,
              __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: [styles.col, styles.vBorder],
                __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: [styles.statRow, styles.hBorder],
                  __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 13 }
                },
                _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: [styles.rowText, styles.numberText],
                    __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 15 }
                  },
                  level
                ),
                _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: [styles.rowText],
                    __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 15 }
                  },
                  'Level'
                )
              ),
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: [styles.statRow, styles.hBorder],
                  __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 13 }
                },
                _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: [styles.rowText, styles.numberText],
                    __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 15 }
                  },
                  '#',
                  stats.rank
                ),
                _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: [styles.rowText],
                    __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 15 }
                  },
                  'Rank'
                )
              ),
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: [styles.statRow],
                  __source: { fileName: _jsxFileName, lineNumber: 84, columnNumber: 13 }
                },
                _react.default.createElement(_stats.default, {
                  textStyle: { fontWeight: 'bold', fontSize: 16 },
                  style: { alignSelf: 'center', marginVertical: 2 },
                  type: 'relevance',
                  entity: stats,
                  renderLeft: title ? title + '  ' : null,
                  __source: { fileName: _jsxFileName, lineNumber: 85, columnNumber: 15 }
                })
              )
            ),
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: styles.col,
                __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: styles.statRow,
                  __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 13 }
                },
                _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: [styles.rowText, { marginBottom: 5 }],
                    __source: { fileName: _jsxFileName, lineNumber: 97, columnNumber: 15 }
                  },
                  'Next Goal:'
                ),
                _react.default.createElement(
                  _reactNativeWeb.Text,
                  {
                    style: [styles.rowText],
                    __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 15 }
                  },
                  'Level:',
                  ' ',
                  _react.default.createElement(
                    _reactNativeWeb.Text,
                    {
                      style: [styles.rowText, styles.numberText],
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 17
                      }
                    },
                    level + 1
                  )
                ),
                _react.default.createElement(Progress.Circle, {
                  style: { marginVertical: 10 },
                  color: 'hsla(' + parseInt(color, 10) + ',      80%, 50%, 1)',
                  size: 60,
                  showsText: true,
                  progress: this.state.loaded ? untilNext : 0,
                  __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 15 }
                }),
                _react.default.createElement(_stats.default, {
                  textStyle: { fontWeight: 'bold', fontSize: 16 },
                  style: { alignSelf: 'center', marginVertical: 2 },
                  type: 'relevance',
                  entity: { relevance: relGoal },
                  renderLeft: title ? title + '  ' : null,
                  __source: { fileName: _jsxFileName, lineNumber: 109, columnNumber: 15 }
                })
              )
            )
          ),
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flex: 1, alignItems: 'center' },
              __source: { fileName: _jsxFileName, lineNumber: 119, columnNumber: 9 }
            },
            button
          )
        );
      }
    }
  ]);
  return StatCategory;
})(_react.Component);
exports.default = StatCategory;
(0, _defineProperty2.default)(StatCategory, 'propTypes', {
  actions: _propTypes.default.object,
  stats: _propTypes.default.object,
  index: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  linearGradient: { height: 60, width: _global.fullWidth, justifyContent: 'flex-end' },
  rowTitle: {
    fontSize: 17,
    paddingRight: 5,
    backgroundColor: 'transparent',
    fontFamily: 'System',
    paddingVertical: 20,
    color: _global.darkGrey
  },
  defaultText: { fontFamily: 'System', fontSize: 15 },
  numberText: {
    fontFamily: 'BebasNeueRelevantRegular',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontSize: 16
  },
  rowText: {
    fontSize: 14,
    paddingRight: 5,
    paddingVertical: 1,
    textAlign: 'center',
    lineHeight: 17,
    color: _global.darkGrey
  },
  container: { flex: 1 },
  innerContainer: { flexDirection: 'row', flex: 1 },
  hBorder: {
    borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderColor: 'hsl(0,0%,80%)'
  },
  vBorder: {
    borderRightWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderColor: 'hsl(0,0%,80%)'
  },
  col: {
    marginTop: 10,
    marginBottom: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statRow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  statSection: { flexDirection: 'column', backgroundColor: 'white' },
  button: { flex: 0, marginBottom: 20, paddingVertical: 8, paddingHorizontal: 10 }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=statCategoryView.component.js.map
