'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.connectDesktop = exports.investModal = void 0;
var _bet = _interopRequireDefault(require('../../post/bet/bet'));
var _connectDesktop = _interopRequireDefault(require('../../auth/mobile/connectDesktop'));
var investModal = { Body: _bet.default, maxWidth: [45, 40] };
exports.investModal = investModal;
var connectDesktop = { Body: _connectDesktop.default };
exports.connectDesktop = connectDesktop;
//# sourceMappingURL=mobile.lookup.js.map
