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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _web = require('../../styled/web');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _styles = require('../../../styles');
var _utils = require('../../../utils');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/web_about/countUp/countUp.box.js';
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
var CountUpBoxContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpbox__CountUpBoxContainer',
  componentId: 'sc-19uyszk-0'
})(
  [
    'justify-content:flex-start;flex-direction:row;align-items:center;transition:background-color 0.5s ease;',
    ';'
  ],
  function(p) {
    return p.c ? 'color: '.concat(p.c, ';') : '';
  }
);
var CountUpBoxShadow = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'countUpbox__CountUpBoxShadow',
  componentId: 'sc-19uyszk-1'
})(['position:absolute;top:0;box-shadow:-4px 0px 5px -1px #dddddd;z-index:-1;']);
var Headline = (0, _styledComponents.default)(_web.Text).withConfig({
  displayName: 'countUpbox__Headline',
  componentId: 'sc-19uyszk-2'
})(
  ['text-transform:uppercase;font-size:', ';line-height:', ';', ''],
  function() {
    return (0, _styles.size)([5, 3]);
  },
  function() {
    return (0, _styles.size)([5, 3]);
  },
  function(p) {
    return p.hide ? 'visibility: hidden;' : '';
  }
);
var CountUpBox = (function(_PureComponent) {
  (0, _inherits2.default)(CountUpBox, _PureComponent);
  var _super = _createSuper(CountUpBox);
  function CountUpBox() {
    (0, _classCallCheck2.default)(this, CountUpBox);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(CountUpBox, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.animate();
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(oldProps) {
        if (oldProps.headline !== this.props.headline) {
          this.animate();
        }
      }
    },
    {
      key: 'animate',
      value: function animate() {
        var _this = this;
        var _this$props = this.props,
          headline = _this$props.headline,
          onHeadlineFinished = _this$props.onHeadlineFinished;
        var len = headline.length;
        var lastIndex = 0;
        _utils.tween.remove(this.t);
        this.t = _utils.tween.add({
          duration: 500,
          easing: _utils.tween.easing.circOut,
          update: function update(obj, t) {
            var roundedIndex = Math.round(t * len);
            if (lastIndex !== roundedIndex) {
              lastIndex = roundedIndex;
              _this.label.innerHTML = headline.substr(0, roundedIndex);
              _this.labelRest.innerHTML = headline.substr(
                roundedIndex,
                headline.length - 1
              );
            }
          },
          finished: function finished() {
            if (onHeadlineFinished) onHeadlineFinished();
          }
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props2 = this.props,
          type = _this$props2.type,
          color = _this$props2.color,
          children = _this$props2.children,
          height = _this$props2.height;
        var width = [(0, _styles.sizing)(75), '65%'];
        return _react.default.createElement(
          CountUpBoxContainer,
          {
            h: height,
            w: width,
            bg: color,
            c: type === 'relevant' ? 'white' : 'black',
            pr: 1,
            __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 7 }
          },
          children,
          _react.default.createElement(
            _web.InlineText,
            { __source: { fileName: _jsxFileName, lineNumber: 85, columnNumber: 9 } },
            _react.default.createElement(Headline, {
              inline: 1,
              ref: function ref(_ref) {
                return (_this2.label = _ref);
              },
              __source: { fileName: _jsxFileName, lineNumber: 86, columnNumber: 11 }
            }),
            _react.default.createElement(Headline, {
              inline: 1,
              hide: true,
              ref: function ref(_ref2) {
                return (_this2.labelRest = _ref2);
              },
              __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 11 }
            })
          ),
          _react.default.createElement(CountUpBoxShadow, {
            h: height,
            w: width,
            __source: { fileName: _jsxFileName, lineNumber: 89, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return CountUpBox;
})(_react.PureComponent);
exports.default = CountUpBox;
(0, _defineProperty2.default)(CountUpBox, 'propTypes', {
  height: _propTypes.default.number,
  type: _propTypes.default.string,
  headline: _propTypes.default.string,
  color: _propTypes.default.string,
  onHeadlineFinished: _propTypes.default.func,
  children: _propTypes.default.oneOfType([
    _propTypes.default.array,
    _propTypes.default.object
  ])
});
//# sourceMappingURL=countUp.box.js.map
