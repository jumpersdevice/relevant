'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.BigThumb = BigThumb;
exports.Arrows = Arrows;
exports.ArrowTimer = exports.Coin = exports.Arrow = exports.Thumb = void 0;
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
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _web = require('../../styled/web');
var _styles = require('../../../styles');
var _utils = require('../../../utils');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/web_about/countUp/countUp.images.js';
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
var isWeb = process.env.BROWSER;
var ThumbContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpimages__ThumbContainer',
  componentId: 'sc-1nmo0vo-0'
})(['position:absolute;top:0;left:100%;']);
var ThumbImage = (0, _styledComponents.default)(_web.Image).withConfig({
  displayName: 'countUpimages__ThumbImage',
  componentId: 'sc-1nmo0vo-1'
})(['height:', ';'], function() {
  return (0, _styles.size)([8, 6]);
});
var ThumbContents = (0, _styledComponents.default)(_web.Text).withConfig({
  displayName: 'countUpimages__ThumbContents',
  componentId: 'sc-1nmo0vo-2'
})(['position:absolute;top:50%;left:45%;font-size:14px;font-weight:bold;']);
var Thumb = _react.default.forwardRef(function(props, ref) {
  return _react.default.createElement(
    ThumbContainer,
    (0, _extends2.default)({ ref: ref }, props, {
      __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 3 }
    }),
    _react.default.createElement(ThumbImage, {
      src: '/img/thumb-bg.svg',
      __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 5 }
    }),
    _react.default.createElement(
      ThumbContents,
      { __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 5 } },
      '+1'
    )
  );
});
exports.Thumb = Thumb;
var ArrowContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpimages__ArrowContainer',
  componentId: 'sc-1nmo0vo-3'
})([
  'position:absolute;top:0;left:100%;justify-content:center;align-items:center;border-radius:50%;'
]);
var ArrowImage = (0, _styledComponents.default)(_web.Image).withConfig({
  displayName: 'countUpimages__ArrowImage',
  componentId: 'sc-1nmo0vo-4'
})(['width:50%;']);
var Arrow = _react.default.forwardRef(function(props, ref) {
  return _react.default.createElement(
    ArrowContainer,
    (0, _extends2.default)(
      {
        ref: ref,
        bounce: true,
        w: props.big ? (0, _styles.sizing)(9) : (0, _styles.sizing)(3),
        h: props.big ? (0, _styles.sizing)(9) : (0, _styles.sizing)(3)
      },
      props,
      {
        bg: props.up ? _styles.colors.green : _styles.colors.red,
        __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 3 }
      }
    ),
    _react.default.createElement(ArrowImage, {
      src: props.up ? '/img/countUp-big-arrow-up.svg' : '/img/countUp-big-arrow-down.svg',
      __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 5 }
    })
  );
});
exports.Arrow = Arrow;
Arrow.propTypes = { big: _propTypes.default.bool, up: _propTypes.default.bool };
var BigThumbContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpimages__BigThumbContainer',
  componentId: 'sc-1nmo0vo-5'
})(
  [
    'position:relative;margin-left:',
    ';margin-right:',
    ';padding-bottom:',
    ';color:',
    ';'
  ],
  function() {
    return (0, _styles.size)([4, 2]);
  },
  function() {
    return (0, _styles.size)([4, 2]);
  },
  (0, _styles.sizing)(2),
  _styles.colors.black
);
var BigThumbImage = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpimages__BigThumbImage',
  componentId: 'sc-1nmo0vo-6'
})(
  [
    'width:',
    ';height:',
    ';background-size:contain;background-repeat:no-repeat;background-position:50% 50%;background-image:url(/img/thumb.svg);align-items:center;justify-content:center;'
  ],
  function() {
    return (0, _styles.size)([8, 6]);
  },
  function() {
    return (0, _styles.size)([8, 6]);
  }
);
function BigThumb(_ref) {
  var score = _ref.score;
  return _react.default.createElement(
    BigThumbContainer,
    { __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 5 } },
    _react.default.createElement(
      BigThumbImage,
      {
        src: '/img/thumb.svg',
        __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 7 }
      },
      _react.default.createElement(
        _web.NumericalValue,
        {
          mt: 2.2,
          ml: 1.2,
          fs: [2.4, 1.8],
          __source: { fileName: _jsxFileName, lineNumber: 97, columnNumber: 9 }
        },
        score
      )
    )
  );
}
BigThumb.propTypes = { score: _propTypes.default.number };
var ArrowsContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpimages__ArrowsContainer',
  componentId: 'sc-1nmo0vo-7'
})(
  [
    'flex-direction:column;justify-content:center;align-items:center;margin-left:',
    ';margin-right:',
    ';'
  ],
  function() {
    return (0, _styles.size)([2, 1]);
  },
  function() {
    return (0, _styles.size)([2, 1]);
  }
);
var ArrowsImage = (0, _styledComponents.default)(_web.Image).withConfig({
  displayName: 'countUpimages__ArrowsImage',
  componentId: 'sc-1nmo0vo-8'
})(
  ['width:', ';height:', ';transition:', ';transform:', ';'],
  function() {
    return (0, _styles.size)([12, 7]);
  },
  function() {
    return (0, _styles.size)([7, 5]);
  },
  function(p) {
    return p.bounce ? 'transform .2 ease-out' : 'transform .7s ease-out';
  },
  function(p) {
    return p.bounce ? 'scale(1.2)' : 'scale(1)';
  }
);
var ArrowsContents = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpimages__ArrowsContents',
  componentId: 'sc-1nmo0vo-9'
})(
  ['justify-content:center;font-size:', ';line-height:', ';height:', ';margin:', ' 0;'],
  function() {
    return (0, _styles.size)([5, 3.5]);
  },
  (0, _styles.sizing)(5),
  (0, _styles.sizing)(5),
  (0, _styles.sizing)(1.5)
);
function Arrows(_ref2) {
  var score = _ref2.score;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    _score = _useState2[0],
    setSize = _useState2[1];
  var animate = _score !== score && score !== 0;
  if (animate && isWeb)
    requestAnimationFrame(function() {
      return setSize(score);
    });
  return _react.default.createElement(
    ArrowsContainer,
    { __source: { fileName: _jsxFileName, lineNumber: 137, columnNumber: 5 } },
    _react.default.createElement(ArrowsImage, {
      bounce: animate && _score < score,
      src: '/img/countUp-big-arrow-up.svg',
      __source: { fileName: _jsxFileName, lineNumber: 138, columnNumber: 7 }
    }),
    _react.default.createElement(
      ArrowsContents,
      {
        bounce: animate,
        __source: { fileName: _jsxFileName, lineNumber: 142, columnNumber: 7 }
      },
      score
    ),
    _react.default.createElement(ArrowsImage, {
      bounce: animate && _score > score,
      src: '/img/countUp-big-arrow-down.svg',
      __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 7 }
    })
  );
}
Arrows.propTypes = { score: _propTypes.default.number };
var CoinContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpimages__CoinContainer',
  componentId: 'sc-1nmo0vo-10'
})(
  [
    'position:absolute;top:0;right:-100px;width:100px;height:100px;justify-content:center;align-items:center;background:',
    ';color:black;border-radius:50%;text-transform:uppercase;font-size:',
    ';'
  ],
  _styles.colors.gold,
  function() {
    return (0, _styles.size)([5, 3.5]);
  }
);
var Coin = _react.default.forwardRef(function(props, ref) {
  return _react.default.createElement(
    CoinContainer,
    (0, _extends2.default)({ ref: ref }, props, {
      __source: { fileName: _jsxFileName, lineNumber: 173, columnNumber: 3 }
    }),
    'BET'
  );
});
exports.Coin = Coin;
var TimerWidth = 45;
var LineWidth = 3.5;
var TimerCanvas = _styledComponents.default.canvas.withConfig({
  displayName: 'countUpimages__TimerCanvas',
  componentId: 'sc-1nmo0vo-11'
})(
  ['width:', 'px;height:', 'px};margin-top:', ';margin-bottom:', ';'],
  TimerWidth,
  TimerWidth,
  (0, _styles.sizing)(1),
  (0, _styles.sizing)(1)
);
var ArrowTimer = (function(_PureComponent) {
  (0, _inherits2.default)(ArrowTimer, _PureComponent);
  var _super = _createSuper(ArrowTimer);
  function ArrowTimer() {
    (0, _classCallCheck2.default)(this, ArrowTimer);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(ArrowTimer, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.resize();
        this.reset();
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(oldProps) {
        if (this.props.score !== oldProps.score) {
          this.animate();
        }
        if (!this.props.showRank && oldProps.showRank) {
          this.resize();
        }
      }
    },
    {
      key: 'resize',
      value: function resize() {
        var _window = window,
          devicePixelRatio = _window.devicePixelRatio;
        var w = TimerWidth * devicePixelRatio;
        var h = TimerWidth * devicePixelRatio;
        this.canvas.width = w;
        this.canvas.height = h;
        this.canvas.style.width = TimerWidth + 'px';
        this.canvas.style.height = TimerWidth + 'px';
      }
    },
    {
      key: 'reset',
      value: function reset(ctx) {
        ctx = ctx || this.canvas.getContext('2d');
        var w = this.canvas.width;
        var h = this.canvas.height;
        var lineWidth = LineWidth * devicePixelRatio;
        ctx.strokeStyle = '#000';
        ctx.lineWidth = lineWidth;
        ctx.lineJoin = 'round';
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, w / 2 - lineWidth, 0, 2.0 * Math.PI);
        ctx.stroke();
      }
    },
    {
      key: 'animate',
      value: function animate() {
        var _this = this;
        if (!this.canvas) return;
        var _this$props = this.props,
          delay = _this$props.delay,
          duration = _this$props.duration,
          score = _this$props.score,
          onTimerFinished = _this$props.onTimerFinished;
        var ctx = this.canvas.getContext('2d');
        var w = this.canvas.width;
        var h = this.canvas.height;
        var lineWidth = LineWidth * devicePixelRatio;
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = lineWidth;
        ctx.lineJoin = 'round';
        _utils.tween.remove(this.t);
        this.t = _utils.tween.add({
          from: { angle: 1.5 * Math.PI },
          to: { angle: 3.5 * Math.PI },
          delay: delay,
          duration: duration,
          update: function update(_ref3) {
            var angle = _ref3.angle;
            ctx.clearRect(0, 0, w, h);
            ctx.beginPath();
            ctx.moveTo(w / 2, h / 2);
            ctx.lineTo(w / 2, lineWidth);
            ctx.arc(w / 2, h / 2, w / 2 - lineWidth, 1.5 * Math.PI, angle);
            ctx.closePath();
            ctx.stroke();
          },
          finished: function finished() {
            _this.reset(ctx);
            if (onTimerFinished) onTimerFinished(score);
          }
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props2 = this.props,
          showRank = _this$props2.showRank,
          postRank = _this$props2.postRank;
        return _react.default.createElement(
          ArrowsContainer,
          { __source: { fileName: _jsxFileName, lineNumber: 268, columnNumber: 7 } },
          _react.default.createElement(ArrowsImage, {
            src: '/img/countUp-black-arrow-up.svg',
            __source: { fileName: _jsxFileName, lineNumber: 269, columnNumber: 9 }
          }),
          _react.default.createElement(
            _web.View,
            {
              h: 9,
              align: 'center',
              __source: { fileName: _jsxFileName, lineNumber: 270, columnNumber: 9 }
            },
            showRank
              ? _react.default.createElement(
                  ArrowsContents,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 272,
                      columnNumber: 13
                    }
                  },
                  postRank
                )
              : _react.default.createElement(TimerCanvas, {
                  ref: function ref(_ref4) {
                    return (_this2.canvas = _ref4);
                  },
                  __source: { fileName: _jsxFileName, lineNumber: 274, columnNumber: 13 }
                })
          ),
          _react.default.createElement(ArrowsImage, {
            src: '/img/countUp-black-arrow-down.svg',
            __source: { fileName: _jsxFileName, lineNumber: 277, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return ArrowTimer;
})(_react.PureComponent);
exports.ArrowTimer = ArrowTimer;
ArrowTimer.propTypes = {
  showRank: _propTypes.default.bool,
  postRank: _propTypes.default.number,
  score: _propTypes.default.number,
  delay: _propTypes.default.number,
  duration: _propTypes.default.number,
  onTimerFinished: _propTypes.default.func
};
//# sourceMappingURL=countUp.images.js.map
