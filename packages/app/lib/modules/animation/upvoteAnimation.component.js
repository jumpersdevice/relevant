'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = UpvoteAnimation;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styles = require('../../styles');
var _vote = _interopRequireDefault(require('./vote.component'));
var _upvoteNumber = _interopRequireDefault(require('./upvoteNumber.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/animation/upvoteAnimation.component.js';
var HANDLE_ANIMATIONS = ['upvote', 'bet'];
var Container = _primitives.default.View.withConfig({
  displayName: 'upvoteAnimationcomponent__Container',
  componentId: 'qlc741-0'
})(
  ['position:', ';z-index:10000;left:0;top:0;right:0;bottom:0;'],
  _styles.isNative ? 'absolute' : 'fixed'
);
function UpvoteAnimation() {
  var type = (0, _reactRedux.useSelector)(function(state) {
    return state.animation.currentType;
  });
  var _useSelector = (0, _reactRedux.useSelector)(function(state) {
      return HANDLE_ANIMATIONS.includes(type) ? state.animation[type] : {};
    }),
    index = _useSelector.index,
    parent = _useSelector.parent,
    horizontal = _useSelector.horizontal,
    amount = _useSelector.amount;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    voteEls = _useState2[0],
    setVoteEls = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    numEls = _useState4[0],
    setNumEls = _useState4[1];
  (0, _react.useEffect)(
    function() {
      function initAnimation() {
        if (!parent) return;
        setVoteEls((0, _toConsumableArray2.default)(Array(10).keys()));
        if (!amount) return;
        setNumEls((0, _toConsumableArray2.default)(Array(1).keys()));
      }
      initAnimation();
      return function() {
        setVoteEls([]);
        setNumEls([]);
      };
    },
    [index, parent, amount]
  );
  if (!HANDLE_ANIMATIONS.includes(type)) return null;
  function destroy(key, coinKey) {
    if (typeof key === 'number') {
      setVoteEls(function(els) {
        return [].concat(
          (0, _toConsumableArray2.default)(els.slice(0, key)),
          (0, _toConsumableArray2.default)(els.slice(key + 1))
        );
      });
    }
    if (typeof coinKey === 'number') {
      setNumEls(function(els) {
        return [].concat(
          (0, _toConsumableArray2.default)(els.slice(0, coinKey)),
          (0, _toConsumableArray2.default)(els.slice(coinKey + 1))
        );
      });
    }
  }
  return _react.default.createElement(
    Container,
    {
      pointerEvents: 'none',
      __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 5 }
    },
    voteEls.map(function(i) {
      return _react.default.createElement(_vote.default, {
        type: type,
        horizontal: horizontal,
        destroy: destroy,
        parent: parent,
        key: i,
        specialKey: i,
        __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 9 }
      });
    }),
    numEls.map(function(i) {
      return _react.default.createElement(_upvoteNumber.default, {
        destroy: destroy,
        parent: parent,
        amount: amount,
        key: i,
        specialKey: i,
        horizontal: horizontal,
        __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 9 }
      });
    })
  );
}
//# sourceMappingURL=upvoteAnimation.component.js.map
