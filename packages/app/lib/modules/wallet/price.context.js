'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.exchangeLink = exchangeLink;
exports.tokenEnabled = tokenEnabled;
exports.usePrice = usePrice;
exports.default = PriceProvider;
exports.PriceContext = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _sdk = require('@uniswap/sdk');
var _numbers = require('../../utils/numbers');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/wallet/price.context.js';
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
if (process.env.WEB !== 'true') {
  require('../../../publicenv');
}
var _process$env = process.env,
  TOKEN_ADDRESS = _process$env.TOKEN_ADDRESS,
  DISABLE_PRICE = _process$env.DISABLE_PRICE;
var UPDATE_INTERVAL = 1 * 60 * 1000;
var PriceContext = _react.default.createContext(0);
exports.PriceContext = PriceContext;
function exchangeLink() {
  return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(TOKEN_ADDRESS);
}
function tokenEnabled() {
  return !!TOKEN_ADDRESS;
}
function usePrice(amount, type) {
  var _useContext = (0, _react.useContext)(PriceContext),
    price = _useContext.price;
  if (!price) return '';
  if (type === 'number') return (0, _numbers.abbreviateNumber)(price * amount);
  return ' ($'.concat((0, _numbers.abbreviateNumber)(price * amount, 2), ')');
}
PriceProvider.propTypes = { children: _propTypes.default.node };
function PriceProvider(_ref) {
  var children = _ref.children;
  var _useReducer = (0, _react.useReducer)(priceReducer, {
      loading: false,
      error: false,
      data: null,
      refresh: 0
    }),
    _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  (0, _react.useEffect)(
    function() {
      var didCancel = false;
      var fetchData = (function() {
        var _ref2 = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee() {
            var tokenPrice, res, ethPrice;
            return _regenerator.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      dispatch({ type: 'FETCH_PRICE_INIT' });
                      if (!(!TOKEN_ADDRESS || DISABLE_PRICE)) {
                        _context.next = 3;
                        break;
                      }
                      return _context.abrupt('return');
                    case 3:
                      _context.prev = 3;
                      _context.next = 6;
                      return (0, _sdk.getTokenReserves)(TOKEN_ADDRESS);
                    case 6:
                      tokenPrice = _context.sent;
                      _context.next = 9;
                      return fetch('https://api.infura.io/v1/ticker/ethusd');
                    case 9:
                      res = _context.sent;
                      _context.next = 12;
                      return res.json();
                    case 12:
                      ethPrice = _context.sent;
                      if (!didCancel) {
                        dispatch({
                          type: 'FETCH_PRICE_SUCCESS',
                          payload: _objectSpread(
                            _objectSpread({}, tokenPrice),
                            {},
                            { ethPrice: ethPrice.bid }
                          )
                        });
                      }
                      _context.next = 19;
                      break;
                    case 16:
                      _context.prev = 16;
                      _context.t0 = _context['catch'](3);
                      if (!didCancel) {
                        dispatch({ type: 'FETCH_PRICE_ERROR', payload: _context.t0 });
                      }
                    case 19:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              null,
              [[3, 16]]
            );
          })
        );
        return function fetchData() {
          return _ref2.apply(this, arguments);
        };
      })();
      fetchData();
      setTimeout(function() {
        dispatch({ type: 'REFRESH_PRICE' });
      }, UPDATE_INTERVAL);
      return function() {
        didCancel = true;
      };
    },
    [state.refresh]
  );
  var price = computePrice(state.data);
  var priceString = '($'.concat((0, _numbers.abbreviateNumber)(price, 2), ')');
  return _react.default.createElement(
    PriceContext.Provider,
    {
      value: { price: price, priceString: priceString },
      __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 5 }
    },
    children
  );
}
var priceReducer = function priceReducer(state, action) {
  switch (action.type) {
    case 'REFRESH_PRICE':
      return _objectSpread(_objectSpread({}, state), {}, { refresh: state.refresh + 1 });
    case 'FETCH_PRICE_INIT':
      return _objectSpread(_objectSpread({}, state), {}, { loading: true, error: false });
    case 'FETCH_PRICE_SUCCESS':
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { loading: false, error: false, data: action.payload }
      );
    case 'FETCH_PRICE_ERROR':
      return _objectSpread(
        _objectSpread({}, state),
        {},
        { loading: false, error: action.payload }
      );
    default:
      throw new Error();
  }
};
function computePrice(data) {
  if (!data) return null;
  var ethReserve = data.ethReserve,
    tokenReserve = data.tokenReserve,
    ethPrice = data.ethPrice;
  if (!ethReserve || !tokenReserve) return null;
  var priceInEth = ethReserve.amount.div(tokenReserve.amount);
  var usdPrice = priceInEth.times(ethPrice);
  return parseFloat(usdPrice.toString());
}
//# sourceMappingURL=price.context.js.map
