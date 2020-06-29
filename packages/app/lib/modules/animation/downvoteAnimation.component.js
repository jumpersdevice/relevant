'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = DownvoteAnimation;
var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styles = require('../../styles');
var _utils = require('../../utils');
var _thumb = _interopRequireDefault(require('./thumb.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/animation/downvoteAnimation.component.js';
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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return (0, _typeof2.default)(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if ((0, _typeof2.default)(input) !== 'object' || input === null) return input;
  var prim = input[typeof Symbol === 'function' ? Symbol.toPrimitive : '@@toPrimitive'];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if ((0, _typeof2.default)(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
var Container = _primitives.default.View.withConfig({
  displayName: 'downvoteAnimationcomponent__Container',
  componentId: 'nlmhqb-0'
})(
  [
    'position:',
    ';z-index:10000;left:0;top:0;right:0;display:flex;align-items:center;justify-content:center;'
  ],
  _styles.isNative ? 'absolute' : 'fixed'
);
function DownvoteAnimation() {
  var _useState = (0, _react.useState)({}),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    animEls = _useState2[0],
    setAnimEls = _useState2[1];
  var _useSelector = (0, _reactRedux.useSelector)(function(state) {
      return state.animation.downvote || {};
    }),
    index = _useSelector.index,
    parent = _useSelector.parent;
  function destroy(key) {
    setAnimEls(function(els) {
      var removeEl = els[key],
        newEls = (0, _objectWithoutProperties2.default)(els, [key].map(_toPropertyKey));
      return newEls;
    });
  }
  (0, _react.useEffect)(
    function() {
      function runAnimation() {
        if (!parent) return;
        var key = _utils.numbers.guid();
        var newEl = (0, _defineProperty2.default)(
          {},
          key,
          _react.default.createElement(_thumb.default, {
            destroy: destroy,
            parent: parent,
            key: key,
            id: key,
            __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 16 }
          })
        );
        setAnimEls(function(els) {
          return _objectSpread(_objectSpread({}, els), newEl);
        });
      }
      runAnimation();
    },
    [index, parent]
  );
  return _react.default.createElement(
    Container,
    {
      pointerEvents: 'none',
      __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 10 }
    },
    Object.values(animEls)
  );
}
//# sourceMappingURL=downvoteAnimation.component.js.map
