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
var _web = require('../../styled/web');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _styles = require('../../../styles');
var _utils = require('../../../utils');
var _countUp = require('./countUp.images');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/web_about/countUp/countUp.animatedEl.js';
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
var randfloat = function randfloat(n) {
  return Math.random() * n;
};
var randint = function randint(n) {
  return Math.floor(Math.random() * n);
};
var CountUpMarqueeContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpanimatedEl__CountUpMarqueeContainer',
  componentId: 'sc-6gwii-0'
})(['flex:1;overflow:hidden;max-width:', ';'], (0, _styles.sizing)(30));
var CountUpMarquee = (function(_PureComponent) {
  (0, _inherits2.default)(CountUpMarquee, _PureComponent);
  var _super = _createSuper(CountUpMarquee);
  function CountUpMarquee() {
    var _this;
    (0, _classCallCheck2.default)(this, CountUpMarquee);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      index: 0
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'container',
      _react.default.createRef()
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'index',
      0
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'thumbs',
      Array.from({ length: 20 }, _react.default.createRef)
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'arrowTypes',
      Array.from({ length: 20 }, function() {
        return { up: Math.random() > 0.5, big: Math.random() > 0.2 };
      })
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'pause',
      function() {
        clearTimeout(_this.timeout);
        window.removeEventListener('focus', _this.animate);
        window.addEventListener('focus', _this.animate);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'animate',
      function(_ref) {
        var _ref$index = _ref.index,
          index = _ref$index === void 0 ? 0 : _ref$index;
        var _this$props = _this.props,
          active = _this$props.active,
          firingRate = _this$props.firingRate;
        if (active) {
          _this.timeout = setTimeout(function() {
            return _this.animate({ index: index + 1 });
          }, firingRate);
          _this.add(index);
          _this.setState({ index: index });
        } else {
          _this.timeout = setTimeout(function() {
            return _this.animate({ index: index });
          }, 100);
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'add',
      function(index) {
        var _this$props2 = _this.props,
          parallax = _this$props2.parallax,
          speed = _this$props2.speed,
          mode = _this$props2.mode,
          type = _this$props2.type,
          onFinished = _this$props2.onFinished;
        var width = _this.container.current.offsetWidth;
        var height = _this.container.current.offsetHeight;
        var duration = width * speed;
        var y;
        var elScore = 1;
        var modIndex = index % _this.thumbs.length;
        var el = _this.thumbs[modIndex];
        var elHeight = el.current.offsetHeight;
        _this.arrowTypes[modIndex] = {};
        var arrowType = _this.arrowTypes[modIndex];
        var targetY;
        var startX = 0;
        switch (type) {
          case 'relevant':
            if (mode) {
              arrowType.big = Math.random() < 0.7;
              arrowType.up = arrowType.big ? Math.random() < 0.9 : Math.random() < 0.2;
            } else {
              arrowType.big = Math.random() < 0.3;
              arrowType.up = arrowType.big ? Math.random() < 0.1 : Math.random() < 0.8;
            }
            elScore = arrowType.big ? randint(10) + 10 : 1;
            if (!arrowType.up) elScore *= -1;
            elHeight = arrowType.big ? 70 : 25;
            startX = randfloat(20);
            y = randint(height - elHeight);
            targetY = arrowType.up ? 0 : height - elHeight;
            break;
          case 'thumb':
            targetY = (height - elHeight) / 2;
            y = randint(height - elHeight);
            break;
          default:
            y = (height - elHeight) / 2;
            targetY = y;
            break;
        }
        if (!el || !el.current || !y) return;
        var tween1 = function tween1() {
          return _utils.tween.add({
            from: { scale: 0 },
            to: { scale: 1 },
            duration: 200,
            update: function update(_ref2) {
              var scale = _ref2.scale;
              el.current.style.transform = 'translate3D('
                .concat(-width + startX, 'px, ')
                .concat(y, 'px, 0) scale(')
                .concat(scale, ') ');
            },
            easing: _utils.tween.easing.cubic_bezier(0.83, 0.42, 0, 1.24),
            finished: function finished() {
              return tween2();
            }
          });
        };
        var tween2 = function tween2() {
          return _utils.tween.add({
            from: { x: -width + startX, y: y },
            to: { x: 0, y: targetY },
            duration: duration + randfloat(parallax),
            easing: _utils.tween.easing.circ_in,
            update: function update(_ref3) {
              var x = _ref3.x,
                tY = _ref3.y;
              el.current.style.transform = 'translate3D('
                .concat(x.toFixed(1), 'px, ')
                .concat(tY || y, 'px, 0)');
            },
            finished: function finished() {
              el.current.style.transform = 'translate3D('.concat(50, 'px, ', y, 'px, 0)');
              if (onFinished) onFinished(elScore);
            }
          });
        };
        tween1();
      }
    );
    return _this;
  }
  (0, _createClass2.default)(CountUpMarquee, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.animate(0);
        this.thumbs.forEach(function(el) {
          el.current.style.transform = 'translate3D(' + [10, 0, 0].join('px,') + 'px)';
        });
        this.props.onMeasure(
          this.container.current.offsetWidth,
          this.container.current.offsetHeight
        );
        window.addEventListener('blur', this.pause);
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('blur', this.pause);
        window.removeEventListener('focus', this.animate);
        clearTimeout(this.timeout);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props3 = this.props,
          type = _this$props3.type,
          height = _this$props3.height;
        var thumbs;
        switch (type) {
          case 'thumb':
            thumbs = this.thumbs.map(function(ref, i) {
              return _react.default.createElement(_countUp.Thumb, {
                ref: ref,
                key: i,
                __source: { fileName: _jsxFileName, lineNumber: 176, columnNumber: 46 }
              });
            });
            break;
          case 'coin':
            thumbs = this.thumbs.map(function(ref, i) {
              return _react.default.createElement(_countUp.Coin, {
                ref: ref,
                key: i,
                __source: { fileName: _jsxFileName, lineNumber: 179, columnNumber: 46 }
              });
            });
            break;
          default:
            thumbs = this.thumbs.map(function(ref, i) {
              return _react.default.createElement(
                _countUp.Arrow,
                (0, _extends2.default)({ ref: ref, key: i }, _this2.arrowTypes[i], {
                  __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 11 }
                })
              );
            });
            break;
        }
        return _react.default.createElement(
          CountUpMarqueeContainer,
          {
            h: height,
            ref: this.container,
            __source: { fileName: _jsxFileName, lineNumber: 188, columnNumber: 7 }
          },
          thumbs
        );
      }
    }
  ]);
  return CountUpMarquee;
})(_react.PureComponent);
exports.default = CountUpMarquee;
(0, _defineProperty2.default)(CountUpMarquee, 'propTypes', {
  type: _propTypes.default.string,
  active: _propTypes.default.bool,
  firingRate: _propTypes.default.number,
  parallax: _propTypes.default.number,
  speed: _propTypes.default.number,
  onMeasure: _propTypes.default.func,
  onFinished: _propTypes.default.func,
  score: _propTypes.default.number,
  mode: _propTypes.default.bool,
  height: _propTypes.default.number
});
//# sourceMappingURL=countUp.animatedEl.js.map
