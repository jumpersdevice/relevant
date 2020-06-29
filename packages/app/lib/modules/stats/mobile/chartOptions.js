'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _global = require('../../../styles/global');
var options = {
  width: _global.fullWidth - 50,
  height: 100,
  margin: { top: 20, left: 30, bottom: 50 },
  color: _global.blue,
  gutter: 4,
  strokeWidth: '6',
  showAreas: false,
  animate: { type: 'oneByOne', duration: 200, fillTransition: 3 },
  axisX: {
    showLines: true,
    showLabels: true,
    showTicks: false,
    zeroAxis: false,
    orient: 'bottom',
    strokeWidth: '0.5',
    tickCount: 14,
    opacity: 0.5,
    gridColor: '#979797',
    tailLength: 1,
    label: {
      fontFamily: 'Arial',
      fontSize: 7,
      fontWeight: 0,
      stroke: _global.darkGrey,
      rotate: 0,
      bold: false
    }
  },
  axisY: {
    showLabels: true,
    color: _global.blue,
    orient: 'left',
    strokeWidth: '0.5',
    opacity: 1,
    gridColor: 'rgb(77, 78, 255, .2)',
    tailLength: 1,
    label: {
      fontFamily: 'Arial',
      fontSize: 7,
      fontWeight: 0,
      stroke: _global.darkGrey,
      strokeWeight: 0.5,
      bold: false
    }
  }
};
var _default = options;
exports.default = _default;
//# sourceMappingURL=chartOptions.js.map
