'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.useContract = useContract;
exports.ContractContext = void 0;
var _react = _interopRequireWildcard(require('react'));
var ContractContext = _react.default.createContext(0);
exports.ContractContext = ContractContext;
function useContract() {
  var contract = (0, _react.useContext)(ContractContext);
  if (contract && !contract.initialized) contract.init(true);
  return contract;
}
//# sourceMappingURL=contract.context.js.map
