'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.API_URL = void 0;
var _process$env = process.env,
  WEB = _process$env.WEB,
  BROWSER = _process$env.BROWSER;
var apiUrl;
if (process.env.WEB !== 'true') {
  require('../../publicenv');
  apiUrl = process.env.API_SERVER;
} else if (WEB === 'true' && BROWSER) {
  apiUrl = window.API_SERVER;
} else {
  apiUrl = process.env.API_SERVER;
}
var API_URL = apiUrl;
exports.API_URL = API_URL;
//# sourceMappingURL=env.js.map
