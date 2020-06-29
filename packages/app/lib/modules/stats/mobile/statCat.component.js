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
var _statRow = _interopRequireDefault(require('./statRow.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/mobile/statCat.component.js';
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
        var titleAction = function titleAction() {
          return null;
        };
        var titleStyle;
        var progressEl;
        if (typeof stats.level !== 'number') return null;
        if (stats.tag) {
          title = '#' + stats.tag.charAt(0).toUpperCase() + stats.tag.slice(1);
          button = _react.default.createElement(
            _reactNativeWeb.Text,
            {
              onPress: function onPress() {
                return _this2.goToPeople(stats.tag);
              },
              style: [styles.button, styles.active],
              __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 }
            },
            'See top users.'
          );
          var topic = { _id: stats.tag.replace('#', '').trim(), categoryName: stats.tag };
          titleAction = function titleAction() {
            return _this2.props.actions.goToTopic(topic);
          };
          titleStyle = { color: _global.blue };
        } else {
          title = 'Level Progress';
          button = _react.default.createElement(
            _reactNativeWeb.Text,
            {
              onPress: function onPress() {
                return _this2.goToPeople(null);
              },
              style: [styles.button, styles.active],
              __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 9 }
            },
            'See all users.'
          );
        }
        var untilNext = Math.round((10 * stats.level) % 100) / 100;
        var level = Math.floor(stats.level / 10);
        var relGoal = Math.round((stats.relevance / stats.level) * (level + 1) * 10);
        var relMore = Math.round(relGoal - stats.relevance);
        if (!stats.tag) {
          progressEl = _react.default.createElement(
            Progress.Bar,
            {
              style: { marginHorizontal: 15, marginBottom: 25, borderWidth: 0 },
              color: _global.blue,
              width: _global.fullWidth - 30,
              height: 7,
              borderRadius: 0,
              progress: this.state.loaded ? untilNext : 0,
              __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 9 }
            },
            _react.default.createElement(_reactNativeWeb.Image, {
              resizeMode: 'contain',
              style: {
                position: 'absolute',
                top: 0,
                zIndex: -1,
                width: _global.fullWidth - 30,
                height: 7
              },
              source: require('../../../../public/img/icons/dashedbg.png'),
              __source: { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 }
            })
          );
        }
        var rIcon = _react.default.createElement(_reactNativeWeb.Image, {
          resizeMode: 'contain',
          style: [styles.smallR, { width: 10, height: 12, marginRight: 0.5 }],
          source: require('../../../../public/img/icons/smallR.png'),
          __source: { fileName: _jsxFileName, lineNumber: 101, columnNumber: 7 }
        });
        var statEls = [
          {
            el: _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.statNumber, styles.statRowNumber],
                __source: { fileName: _jsxFileName, lineNumber: 110, columnNumber: 13 }
              },
              level
            ),
            label: 'Level'
          },
          {
            el: _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: { flexDirection: 'row', justifyContent: 'flex-start' },
                __source: { fileName: _jsxFileName, lineNumber: 115, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [
                    styles.statNumber,
                    styles.statRowNumber,
                    { fontSize: 16, lineHeight: 18 }
                  ],
                  __source: { fileName: _jsxFileName, lineNumber: 116, columnNumber: 13 }
                },
                '#'
              ),
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [styles.statNumber, styles.statRowNumber],
                  __source: { fileName: _jsxFileName, lineNumber: 125, columnNumber: 13 }
                },
                stats.rank
              )
            ),
            label: 'Rank'
          },
          {
            el: _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: { flexDirection: 'row', justifyContent: 'flex-start' },
                __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [styles.statNumber, styles.statRowNumber],
                  __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 13 }
                },
                Math.round(untilNext * 100)
              ),
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [
                    styles.statNumber,
                    styles.statRowNumber,
                    { fontSize: 16, lineHeight: 18 }
                  ],
                  __source: { fileName: _jsxFileName, lineNumber: 136, columnNumber: 13 }
                },
                '%'
              )
            ),
            label: 'Completed'
          }
        ];
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: [styles.container, styles.statSection],
            __source: { fileName: _jsxFileName, lineNumber: 152, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flexDirection: 'column', alignItems: 'center' },
              __source: { fileName: _jsxFileName, lineNumber: 153, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                onPress: titleAction,
                style: [styles.statNumber, styles.rowTitle, titleStyle],
                __source: { fileName: _jsxFileName, lineNumber: 154, columnNumber: 11 }
              },
              title
            ),
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: [styles.textRow],
                __source: { fileName: _jsxFileName, lineNumber: 160, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: styles.smallInfo,
                  __source: { fileName: _jsxFileName, lineNumber: 161, columnNumber: 13 }
                },
                'Get '
              ),
              rIcon,
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: styles.smallInfo,
                  __source: { fileName: _jsxFileName, lineNumber: 163, columnNumber: 13 }
                },
                relMore,
                ' more to reach next level. '
              ),
              button
            )
          ),
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.innerContainer,
              __source: { fileName: _jsxFileName, lineNumber: 168, columnNumber: 9 }
            },
            _react.default.createElement(_statRow.default, {
              elements: statEls,
              __source: { fileName: _jsxFileName, lineNumber: 169, columnNumber: 11 }
            })
          ),
          progressEl
        );
      }
    }
  ]);
  return StatCategory;
})(_react.Component);
exports.default = StatCategory;
(0, _defineProperty2.default)(StatCategory, 'propTypes', {
  actions: _propTypes.default.object,
  stats: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  rowTitle: { marginVertical: 5, marginBottom: 5 },
  container: { flex: 1 },
  innerContainer: { flexDirection: 'row', flex: 1 },
  vBorder: {
    borderRightWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderColor: 'hsl(0,0%,80%)'
  },
  row: {
    marginTop: 20,
    marginBottom: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statRow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statRowNumber: { fontSize: 25 },
  statSection: {
    flexDirection: 'column',
    backgroundColor: 'white',
    marginBottom: 25,
    marginTop: 40
  },
  button: { flex: 0, fontSize: 10 }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=statCat.component.js.map
