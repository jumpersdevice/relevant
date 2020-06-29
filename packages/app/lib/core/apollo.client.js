'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.client = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _apolloClient = require('apollo-client');
var _apolloCacheInmemory = require('apollo-cache-inmemory');
var _apolloLinkHttp = require('apollo-link-http');
var _storage = require('../utils/storage');
var _apolloLinkContext = require('apollo-link-context');
var _apolloLink = require('apollo-link');
var _apolloLinkWs = require('apollo-link-ws');
var _apolloUtilities = require('apollo-utilities');
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
var API_URL;
if (process.env.WEB !== 'true') {
  require('../../publicenv');
  API_URL = process.env.API_SERVER;
} else if (process.env.BROWSER) {
  API_URL = window.API_SERVER;
}
var cache = new _apolloCacheInmemory.InMemoryCache({
  dataIdFromObject: function dataIdFromObject(object) {
    return object._id || null;
  }
});
cache.restore(window.__APOLLO_STATE__);
var uri = API_URL;
var wsUri = uri.replace('http', 'ws');
var wsLink = new _apolloLinkWs.WebSocketLink({
  uri: ''.concat(wsUri, '/graphql'),
  options: { reconnect: true, reconnectionAttempts: 50, lazy: true, timeout: 20000 }
});
var subscriptionMiddleware = {
  applyMiddleware: (function() {
    var _applyMiddleware = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(options, next) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2;
                return (0, _storage.getToken)();
              case 2:
                options.token = _context.sent;
                next();
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    );
    function applyMiddleware(_x, _x2) {
      return _applyMiddleware.apply(this, arguments);
    }
    return applyMiddleware;
  })()
};
wsLink.subscriptionClient.use([subscriptionMiddleware]);
var httpLink = new _apolloLinkHttp.HttpLink({ uri: ''.concat(uri, '/graphql') });
var authMiddleware = (0, _apolloLinkContext.setContext)(
  (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(req, _ref) {
        var headers, token;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                headers = _ref.headers;
                _context2.next = 3;
                return (0, _storage.getToken)();
              case 3:
                token = _context2.sent;
                return _context2.abrupt('return', {
                  credentials: 'include',
                  headers: _objectSpread(
                    _objectSpread({}, headers),
                    {},
                    { authorization: token ? 'Bearer '.concat(token) : '' }
                  )
                });
              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    );
    return function(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })()
);
var link = (0, _apolloLink.split)(
  function(_ref3) {
    var query = _ref3.query;
    var definition = (0, _apolloUtilities.getMainDefinition)(query);
    return (
      definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);
var client = new _apolloClient.ApolloClient({
  cache: cache,
  link: (0, _apolloLink.concat)(authMiddleware, link)
});
exports.client = client;
//# sourceMappingURL=apollo.client.js.map
