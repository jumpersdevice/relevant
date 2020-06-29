'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.setupMobileTooltips = setupMobileTooltips;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _reactNativeWeb = require('react-native-web');
var _tooltip = require('../tooltip.actions');
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
var defaultData = {
  vertical: 'top',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 10
};
function setupMobileTooltips(_ref) {
  var tooltips = _ref.tooltips,
    dispatch = _ref.dispatch;
  var initTooltips = function initTooltips() {
    tooltips.forEach(function(tooltip) {
      if (tooltip.data.desktopOnly) return null;
      return dispatch(
        (0, _tooltip.setTooltipData)({
          name: tooltip.name,
          toggle: function toggle() {
            return toggleTooltip(tooltip.name);
          }
        })
      );
    });
  };
  var toggleTooltip = function toggleTooltip(name) {
    tooltips.forEach(function(tooltip) {
      if (tooltip.data.desktopOnly) return;
      if (!tooltip.el.current) return;
      tooltip.el.current.measureInWindow(function(x, y, w, h) {
        var parent = { x: x, y: y, w: w, h: h };
        if (x + y + w + h === 0) return;
        var fullHeight = _reactNativeWeb.Dimensions.get('window').height;
        if (y > fullHeight - 50) return;
        dispatch(
          (0, _tooltip.setTooltipData)(
            _objectSpread(
              _objectSpread({ name: tooltip.name, parent: parent }, defaultData),
              {},
              { data: tooltip.data }
            )
          )
        );
        dispatch((0, _tooltip.showTooltip)(name));
      });
    });
  };
  return { initTooltips: initTooltips, toggleTooltip: toggleTooltip };
}
//# sourceMappingURL=setupTooltips.js.map
