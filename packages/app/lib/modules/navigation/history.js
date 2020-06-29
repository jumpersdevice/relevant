'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _history = require('history');
var _styles = require('../../styles');
var isNode = !process.env.BROWSER;
var history = !_styles.isNative && !isNode && (0, _history.createBrowserHistory)();
var _default = history;
exports.default = _default;
//# sourceMappingURL=history.js.map
