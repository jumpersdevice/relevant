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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _utils = require('../../../utils');
var _countUp = require('./countUp.styles');
var _countUp2 = _interopRequireDefault(require('./countUp.box'));
var _countUp3 = _interopRequireDefault(require('./countUp.animatedEl'));
var _countUp4 = require('./countUp.images');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/web_about/countUp/countUp.component.js';
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
var BOX_HEIGHT = 26;
var animationParams = {
  good: {
    relevant: { active: true, firingRate: 100, parallax: 1.3, speed: 5 },
    thumb: { active: true, firingRate: 340, parallax: 1.1, speed: 3.69 }
  },
  bad: {
    relevant: { active: true, firingRate: 300, parallax: 1.3, speed: 5 },
    thumb: { active: true, firingRate: 20, parallax: 1.3, speed: 0.8 }
  },
  off: { active: false, firingRate: 0, parallax: 0, speed: 0 }
};
var marqueeOffTime = 2000;
var marqueeAdvanceTime = 2000;
var CountUp = (function(_Component) {
  (0, _inherits2.default)(CountUp, _Component);
  var _super = _createSuper(CountUp);
  function CountUp() {
    var _this;
    (0, _classCallCheck2.default)(this, CountUp);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      mode: false,
      headline: '',
      score: 0,
      highIndex: -1,
      lowIndex: -1,
      marquee: animationParams.off,
      thumbTiming: { delay: 0, duration: 2800 },
      width: global.window ? window.innerWidth / 3 : 0
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'pause',
      function() {
        clearTimeout(_this.timeout);
        window.removeEventListener('focus', _this.advance);
        window.addEventListener('focus', _this.advance);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'advance',
      function() {
        var _this$props = _this.props,
          high = _this$props.high,
          low = _this$props.low,
          type = _this$props.type;
        var _this$state = _this.state,
          mode = _this$state.mode,
          highIndex = _this$state.highIndex,
          lowIndex = _this$state.lowIndex;
        var headline;
        var marquee;
        var score;
        mode = !mode;
        if (mode) {
          highIndex += 1;
          headline = high[highIndex % high.length];
          score = 100;
          marquee = _objectSpread({}, animationParams.bad[type]);
        } else {
          lowIndex += 1;
          headline = low[lowIndex % low.length];
          score = -100;
          marquee = _objectSpread({}, animationParams.good[type]);
        }
        var currentScore = 0;
        _this.setState({
          mode: mode,
          headline: headline,
          score: score,
          currentScore: currentScore,
          highIndex: highIndex,
          lowIndex: lowIndex,
          marquee: marquee,
          thumbTiming: { delay: marquee.speed * _this.state.width, duration: 1950 }
        });
        _this.timeout = setTimeout(function() {
          marquee.active = false;
          _this.setState({ marquee: animationParams.off });
          _this.timeout = setTimeout(function() {
            _this.advance();
          }, marqueeAdvanceTime);
        }, marqueeOffTime);
      }
    );
    return _this;
  }
  (0, _createClass2.default)(CountUp, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('blur', this.pause);
      }
    },
    {
      key: 'handleMeasurement',
      value: function handleMeasurement(width) {
        var _this2 = this;
        this.setState({ width: width }, function() {
          return _this2.advance();
        });
      }
    },
    {
      key: 'handleFinished',
      value: function handleFinished(score) {
        this.setState({ currentScore: this.state.currentScore + score });
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _utils.tween.reset();
        clearTimeout(this.timeout);
        window.removeEventListener('blur', this.pause);
        window.removeEventListener('focus', this.advance);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          color = _this$props2.color,
          type = _this$props2.type;
        var _this$state2 = this.state,
          headline = _this$state2.headline,
          mode = _this$state2.mode,
          currentScore = _this$state2.currentScore,
          marquee = _this$state2.marquee,
          thumbTiming = _this$state2.thumbTiming;
        return _react.default.createElement(
          _countUp.CountUpContainer,
          { __source: { fileName: _jsxFileName, lineNumber: 147, columnNumber: 7 } },
          _react.default.createElement(
            _countUp3.default,
            (0, _extends2.default)(
              {
                height: BOX_HEIGHT,
                type: type,
                mode: mode,
                onMeasure: this.handleMeasurement.bind(this),
                onFinished: this.handleFinished.bind(this)
              },
              marquee,
              { __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 9 } }
            )
          ),
          _react.default.createElement(
            _countUp2.default,
            {
              height: BOX_HEIGHT,
              type: type,
              color: color,
              score: currentScore,
              headline: headline,
              thumbTiming: thumbTiming,
              __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 9 }
            },
            type === 'thumb'
              ? _react.default.createElement(
                  _countUp4.BigThumb,
                  (0, _extends2.default)({ score: currentScore }, thumbTiming, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 13
                    }
                  })
                )
              : _react.default.createElement(
                  _countUp4.Arrows,
                  (0, _extends2.default)({ score: currentScore }, thumbTiming, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 13
                    }
                  })
                )
          ),
          _react.default.createElement(_countUp.CountUpSpacer, {
            flex: [1, null],
            w: ['auto', 2],
            __source: { fileName: _jsxFileName, lineNumber: 170, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return CountUp;
})(_react.Component);
exports.default = CountUp;
(0, _defineProperty2.default)(CountUp, 'propTypes', {
  high: _propTypes.default.array,
  highScore: _propTypes.default.array,
  low: _propTypes.default.array,
  lowScore: _propTypes.default.array,
  color: _propTypes.default.string,
  type: _propTypes.default.string
});
//# sourceMappingURL=countUp.component.js.map
