'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = StatRow;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/stats/mobile/statRow.component.js';
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
var styles;
function StatRow(props) {
  var l = props.elements.length;
  var els = props.elements.map(function(el, i) {
    return _react.default.createElement(
      _reactNativeWeb.View,
      {
        key: i,
        style: [styles.statRow, i < l - 1 ? styles.vBorder : null],
        __source: { fileName: _jsxFileName, lineNumber: 11, columnNumber: 5 }
      },
      el.el,
      el.label
        ? _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: styles.smallInfo,
              __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 19 }
            },
            el.label
          )
        : null
    );
  });
  return _react.default.createElement(
    _reactNativeWeb.View,
    {
      style: [styles.row],
      __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 10 }
    },
    els
  );
}
var localStyles = _reactNativeWeb.StyleSheet.create({
  vBorder: {
    borderRightWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderColor: 'hsl(0,0%,80%)'
  },
  statRow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  row: {
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
StatRow.propTypes = { elements: _propTypes.default.array };
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=statRow.component.js.map
