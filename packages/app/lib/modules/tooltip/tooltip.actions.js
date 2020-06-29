'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.setButtonTooltip = setButtonTooltip;
exports.tooltipReady = tooltipReady;
exports.setTooltipData = setTooltipData;
exports.showTooltip = showTooltip;
exports.createToggleAction = createToggleAction;
var _actionTypes = require('../../core/actionTypes');
function setButtonTooltip(type, id) {
  return { type: _actionTypes.SET_BUTTON_TOOLTIP, payload: { id: id, type: type } };
}
function tooltipReady(ready) {
  return { type: _actionTypes.TOOLTIP_READY, payload: ready };
}
function setTooltipData(data) {
  return { type: _actionTypes.SET_TOOLTIP_DATA, payload: data };
}
function showTooltip(name) {
  return { type: _actionTypes.SHOW_TOOLTIP, payload: name };
}
function createToggleAction(name, el) {
  return function(dispatch) {
    if (!el) return;
    el.measureInWindow(function(x, y, w, h) {
      var parent = { x: x, y: y, w: w, h: h };
      if (x + y + w + h === 0) return;
      dispatch(setTooltipData({ name: name, parent: parent }));
      dispatch(showTooltip(name));
    });
  };
}
//# sourceMappingURL=tooltip.actions.js.map
