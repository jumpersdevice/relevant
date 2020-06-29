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
var _reactNativePathjsCharts = require('react-native-pathjs-charts');
var _moment = _interopRequireDefault(require('moment'));
var _chartOptions = _interopRequireDefault(require('./chartOptions'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/mobile/chart.component.js';
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
var Chart = (function(_Component) {
  (0, _inherits2.default)(Chart, _Component);
  var _super = _createSuper(Chart);
  function Chart(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Chart);
    _this = _super.call(this, props, context);
    _this.state = { refreshing: false };
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.data = [];
    _this.chartData = _this.chartData.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(Chart, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (this.props.data) {
          if (this.props.data.length < 2 && this.props.type === 'smooth') {
            return;
          }
          this.data = [];
          this.chartData(this.props);
        }
      }
    },
    {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(next) {
        if (next.data !== this.props.data && next.data.length) {
          if (next.data) {
            if (next.data.lenght < 2 && this.props.type === 'smooth') return;
            this.data = [];
            this.chartData(next);
          }
        }
      }
    },
    {
      key: 'load',
      value: function load() {
        this.end = new Date();
        this.start = new Date();
        this.end.setUTCHours(0, 0, 0, 0);
        this.start.setUTCHours(0, 0, 0, 0);
        this.start.setDate(this.start.getDate() - 14);
        this.props.actions.getStats(this.props.auth.user);
        this.props.actions.getChart(this.start, this.end);
      }
    },
    {
      key: 'chartData',
      value: function chartData(props) {
        var type = props.type,
          data = props.data,
          start = props.start,
          end = props.end,
          dataKey = props.dataKey;
        var current = new Date(start);
        var min;
        var max;
        this.data = [];
        while (current < end) {
          var entry = data.find(function(el) {
            return new Date(el.date).getTime() === current.getTime();
          });
          var value = void 0;
          if (type === 'bar') {
            value = entry ? entry[dataKey] : 0;
          } else {
            value = entry ? entry.aggregateRelevance / entry.totalSamples : 0;
          }
          min = min || value;
          max = max || value;
          min = Math.min(min, value);
          max = Math.max(max, value);
          if (type === 'bar') {
            this.data.push({
              v: value,
              name: (0, _moment.default)(current)
                .utcOffset(0)
                .format('M/D', 'utc')
            });
          } else if (entry) {
            this.data.push({ y: value, x: current.getTime() });
          }
          current.setDate(current.getDate() + 1);
        }
        max = Math.ceil(max);
        min = Math.floor(min);
        var tickCount = Math.min(min < 0 ? max - min + 1 : max + 1, 6);
        if (max - min < 1) tickCount = 6;
        if (typeof max !== 'number' || Math.abs(max) < 1) max = 1;
        if (typeof min !== 'number' || Math.abs(min) < 1) min = -1;
        this.chartOptions = _objectSpread(
          _objectSpread({}, _chartOptions.default),
          {},
          {
            min: min || 0,
            max: max || 1,
            axisY: _objectSpread(
              _objectSpread({}, _chartOptions.default.axisY),
              {},
              {
                tickCount: tickCount,
                labelFunction: function labelFunction(val) {
                  return max - min > 1 ? Math.round(val) : val;
                },
                scale: 10,
                min: min,
                max: max
              }
            ),
            axisX: _objectSpread(
              _objectSpread({}, _chartOptions.default.axisX),
              {},
              {
                labelFunction: function labelFunction(val) {
                  return (0, _moment.default)(new Date(val))
                    .utcOffset(0)
                    .format('M/D', 'utc');
                }
              }
            )
          }
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var type = this.props.type;
        var chart;
        if (type === 'bar' && this.data.length > 1) {
          chart = _react.default.createElement(
            _reactNativeWeb.View,
            { __source: { fileName: _jsxFileName, lineNumber: 132, columnNumber: 9 } },
            _react.default.createElement(_reactNativePathjsCharts.Bar, {
              data: [this.data],
              options: this.chartOptions,
              accessorKey: 'v',
              __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 11 }
            })
          );
        } else if (type === 'smooth' && this.data.length > 1) {
          chart = _react.default.createElement(
            _reactNativeWeb.View,
            { __source: { fileName: _jsxFileName, lineNumber: 138, columnNumber: 9 } },
            _react.default.createElement(_reactNativePathjsCharts.StockLine, {
              regionStyling: { fillOpacity: 0 },
              data: [this.data],
              options: this.chartOptions,
              xKey: 'x',
              yKey: 'y',
              __source: { fileName: _jsxFileName, lineNumber: 139, columnNumber: 11 }
            })
          );
        } else {
          return null;
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          { __source: { fileName: _jsxFileName, lineNumber: 152, columnNumber: 7 } },
          this.props.renderHeader(),
          chart,
          this.props.renderFooter()
        );
      }
    }
  ]);
  return Chart;
})(_react.Component);
exports.default = Chart;
(0, _defineProperty2.default)(Chart, 'propTypes', {
  data: _propTypes.default.array,
  type: _propTypes.default.string,
  actions: _propTypes.default.object,
  auth: _propTypes.default.object,
  renderHeader: _propTypes.default.func,
  renderFooter: _propTypes.default.func
});
//# sourceMappingURL=chart.component.js.map
