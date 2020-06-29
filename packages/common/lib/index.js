'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _globalConstants = require('./globalConstants');
Object.keys(_globalConstants).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _globalConstants[key];
    }
  });
});
//# sourceMappingURL=index.js.map
