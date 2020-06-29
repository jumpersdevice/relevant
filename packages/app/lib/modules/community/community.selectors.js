'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useCommunity = void 0;
var _reactRedux = require('react-redux');
var useCommunity = function useCommunity() {
  return (0, _reactRedux.useSelector)(function(state) {
    return state.community.communities[state.community.active];
  });
};
exports.useCommunity = useCommunity;
//# sourceMappingURL=community.selectors.js.map
