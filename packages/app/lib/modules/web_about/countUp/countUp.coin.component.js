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
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _web = require('../../styled/web');
var _styles = require('../../../styles');
var _countUp = require('./countUp.styles');
var _countUp2 = _interopRequireDefault(require('./countUp.box'));
var _countUp3 = _interopRequireDefault(require('./countUp.animatedEl'));
var _countUp4 = require('./countUp.images');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/web_about/countUp/countUp.coin.component.js';
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
var randrange = function randrange(a) {
  return Math.floor(Math.random() * (a[1] - a[0]) + a[0]);
};
var marqueeCoin = { active: true, firingRate: 2000, parallax: 1, speed: 4.5 };
var marqueeOff = { active: false, firingRate: 0, parallax: 0, speed: 0 };
var BetResult = (0, _styledComponents.default)(_web.Text).withConfig({
  displayName: 'countUpcoincomponent__BetResult',
  componentId: 'sc-6mb0bd-0'
})(
  [
    'position:absolute;width:',
    ';height:',
    ';background-size:contain;display:flex;justify-content:center;align-items:center;text-align:center;z-index:1;opacity:1;'
  ],
  function() {
    return (0, _styles.size)([25, 20]);
  },
  function() {
    return (0, _styles.size)([25, 20]);
  }
);
var BetWin = (0, _styledComponents.default)(BetResult).withConfig({
  displayName: 'countUpcoincomponent__BetWin',
  componentId: 'sc-6mb0bd-1'
})(
  [
    'top:',
    ';right:',
    ';background-image:url(/img/betWin.png);transform:rotate(0deg) scale(0);',
    ''
  ],
  function() {
    return (0, _styles.size)([-7.5, -8]);
  },
  function() {
    return (0, _styles.size)([-12, -3]);
  },
  function(p) {
    return p.show
      ? '\n    transition: all .3s cubic-bezier(.83,.42,0,1.24);\n    transform:  rotate(23deg) scale(1);\n    '
      : '';
  }
);
var BetLoose = (0, _styledComponents.default)(BetResult).withConfig({
  displayName: 'countUpcoincomponent__BetLoose',
  componentId: 'sc-6mb0bd-2'
})(
  [
    'bottom:-60px;right:-20px;background-image:url(/img/betLoose.png);transform:rotate(0deg) scale(0);',
    ''
  ],
  function(p) {
    return p.show
      ? '\n    transition: all .5s cubic-bezier(.83,.42,0,1.24);\n    transform: rotate(-15deg) scale(1);\n    '
      : '';
  }
);
var CountUpCoin = (function(_Component) {
  (0, _inherits2.default)(CountUpCoin, _Component);
  var _super = _createSuper(CountUpCoin);
  function CountUpCoin() {
    var _this;
    (0, _classCallCheck2.default)(this, CountUpCoin);
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
      animationState: 0,
      headline: '',
      score: 0,
      highIndex: -1,
      lowIndex: -1,
      marquee: _objectSpread({}, marqueeOff),
      thumbTiming: { delay: 10, duration: 3000 },
      width: global.window ? window.innerWidth / 3 : 0,
      height: 212,
      postRank: 0
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
          low = _this$props.low;
        var _this$state = _this.state,
          mode = _this$state.mode,
          highIndex = _this$state.highIndex,
          lowIndex = _this$state.lowIndex,
          postRank = _this$state.postRank;
        var headline;
        mode = !mode;
        if (mode) {
          highIndex += 1;
          headline = high[highIndex % high.length];
          postRank = randrange([50, 100]);
        } else {
          lowIndex += 1;
          headline = low[lowIndex % low.length];
          postRank = randrange([-100, -50]);
        }
        _this.setState({
          mode: mode,
          headline: headline,
          highIndex: highIndex,
          lowIndex: lowIndex,
          animationState: 0,
          postRank: postRank
        });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleMeasurement',
      function(width, height) {
        _this.setState({ width: width, height: height }, function() {
          return _this.advance();
        });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleHeadlineFinished',
      function() {
        if (_this.state.animationState !== 0) return;
        clearTimeout(_this.timeout);
        _this.setState({ marquee: marqueeCoin, score: _this.state.score + 1 });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleCoinFinished',
      function() {
        _this.setState({ marquee: marqueeOff });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleTimerFinished',
      function() {
        _this.setState({ animationState: 1 });
        _this.timeout = setTimeout(function() {
          _this.advance();
        }, 3000);
      }
    );
    return _this;
  }
  (0, _createClass2.default)(CountUpCoin, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('blur', this.pause);
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('blur', this.pause);
        window.removeEventListener('focus', this.advance);
        clearTimeout(this.timeout);
        _utils.tween.reset();
      }
    },
    {
      key: 'render',
      value: function render() {
        var color = this.props.color;
        var _this$state2 = this.state,
          mode = _this$state2.mode,
          headline = _this$state2.headline,
          score = _this$state2.score,
          marquee = _this$state2.marquee,
          thumbTiming = _this$state2.thumbTiming,
          animationState = _this$state2.animationState,
          postRank = _this$state2.postRank;
        var outcome = animationState === 1 && (mode ? 'win' : 'loose');
        return _react.default.createElement(
          _countUp.CountUpContainer,
          { __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 7 } },
          _react.default.createElement(
            _countUp3.default,
            (0, _extends2.default)(
              {
                height: BOX_HEIGHT,
                type: 'coin',
                score: score,
                onMeasure: this.handleMeasurement,
                onFinished: this.handleCoinFinished
              },
              marquee,
              { __source: { fileName: _jsxFileName, lineNumber: 175, columnNumber: 9 } }
            )
          ),
          _react.default.createElement(
            _countUp2.default,
            {
              height: BOX_HEIGHT,
              type: 'coin',
              color: color,
              headline: headline,
              onHeadlineFinished: this.handleHeadlineFinished,
              __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 9 }
            },
            _react.default.createElement(
              _countUp4.ArrowTimer,
              (0, _extends2.default)(
                { showRank: animationState === 1, score: score, postRank: postRank },
                thumbTiming,
                {
                  onTimerFinished: this.handleTimerFinished,
                  __source: { fileName: _jsxFileName, lineNumber: 190, columnNumber: 11 }
                }
              )
            ),
            _react.default.createElement(
              BetWin,
              {
                show: outcome === 'win',
                __source: { fileName: _jsxFileName, lineNumber: 198, columnNumber: 11 }
              },
              _react.default.createElement(
                _web.BodyText,
                {
                  p: 4,
                  fs: [3, 2.5],
                  lh: [4, 3],
                  __source: { fileName: _jsxFileName, lineNumber: 199, columnNumber: 13 }
                },
                'YOU WIN!'
              )
            ),
            _react.default.createElement(
              BetLoose,
              {
                show: outcome === 'loose',
                __source: { fileName: _jsxFileName, lineNumber: 203, columnNumber: 11 }
              },
              _react.default.createElement(
                _web.BodyText,
                {
                  p: 7,
                  fs: [3, 2.5],
                  lh: [4, 3],
                  __source: { fileName: _jsxFileName, lineNumber: 204, columnNumber: 13 }
                },
                'NOT A GREAT BET :('
              )
            )
          ),
          _react.default.createElement(_countUp.CountUpSpacer, {
            flex: [1, null],
            w: ['auto', 2],
            __source: { fileName: _jsxFileName, lineNumber: 209, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return CountUpCoin;
})(_react.Component);
exports.default = CountUpCoin;
(0, _defineProperty2.default)(CountUpCoin, 'propTypes', {
  high: _propTypes.default.array,
  low: _propTypes.default.array,
  color: _propTypes.default.string
});
//# sourceMappingURL=countUp.coin.component.js.map
