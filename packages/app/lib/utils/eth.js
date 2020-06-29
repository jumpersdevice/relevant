'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.signMessage = signMessage;
exports.truncateAddress = truncateAddress;
exports.parseBN = parseBN;
exports.getBN = getBN;
exports.formatBN = formatBN;
exports.generateSalt = generateSalt;
exports.formatBalanceRead = formatBalanceRead;
exports.formatBalanceWrite = formatBalanceWrite;
exports.appendZeroes = appendZeroes;
exports.removeDecimal = removeDecimal;
exports.withoutZeros = withoutZeros;
exports.getTrailingZeros = getTrailingZeros;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _crypto = _interopRequireDefault(require('crypto'));
function signMessage(_x, _x2) {
  return _signMessage.apply(this, arguments);
}
function _signMessage() {
  _signMessage = (0, _asyncToGenerator2.default)(
    _regenerator.default.mark(function _callee(provider, address) {
      var signer, now, exp, msg, signature;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              signer = provider.getSigner();
              now = new Date();
              exp = Math.floor(now.setMinutes(now.getMinutes() + 5) / 1000);
              msg = { address: address, exp: exp };
              _context.next = 6;
              return signer.signMessage(JSON.stringify(msg));
            case 6:
              signature = _context.sent;
              return _context.abrupt('return', { msg: msg, signature: signature });
            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _signMessage.apply(this, arguments);
}
function truncateAddress(address) {
  if (!address) return null;
  return address.slice(0, 6) + '...' + address.slice(address.length - 4, address.length);
}
function parseBN(value) {
  return value && value.get ? getBN(value) : value;
}
function getBN(value) {
  var hex = value.get('_hex');
  if (hex === '0x00') {
    return 0;
  }
  return formatBN(hex, 18);
}
function formatBN(hex) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  var numString = Number(hex).toString();
  if (numString[numString.length - 3] === '+') {
    var trailingZeroes = getTrailingZeros(numString, decimals);
    var result = Number(withoutZeros(numString) + trailingZeroes);
    return Number.parseFloat(result).toFixed(0);
  }
  if (numString.length > 18) {
    return Number(numString.slice(0, -18));
  }
  if (numString.length === 18) {
    return Number('0.'.concat(numString));
  }
  return Number(numString);
}
function generateSalt() {
  return _crypto.default.randomBytes(16).toString('hex');
}
function formatBalanceRead(balString) {
  return ''.concat(balString.slice(0, -18), '.').concat(balString.slice(-18));
}
function formatBalanceWrite(balString) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return (balString * Math.pow(10, decimals)).toString();
}
function appendZeroes(numString, amount) {
  return ''.concat(numString).concat('0'.repeat(amount));
}
function removeDecimal(balString) {
  return balString.split('.').join('');
}
function withoutZeros(numString) {
  return numString.slice(0, -2).toString();
}
function getTrailingZeros(numString, decimals) {
  return Number(Number(numString.slice(-2)) - decimals).toString();
}
//# sourceMappingURL=eth.js.map
