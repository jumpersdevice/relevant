"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloClient = require("apollo-client");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _apolloLinkSchema = require("apollo-link-schema");

var _storage = require("@r3l/app/lib/utils/storage");

var _apolloLinkContext = require("apollo-link-context");

var _apolloLink = require("apollo-link");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var cache = new _apolloCacheInmemory.InMemoryCache({
  dataIdFromObject: object => object._id || null,
  resultCaching: false
});
var authMiddleware = (0, _apolloLinkContext.setContext)( /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)(function* (req, _ref) {
    var {
      headers
    } = _ref;
    var token = yield (0, _storage.getToken)();
    return {
      credentials: 'include',
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        authorization: token ? "Bearer ".concat(token) : ''
      })
    };
  });

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());
var client = new _apolloClient.ApolloClient({
  cache,
  link: (0, _apolloLink.concat)(authMiddleware, new _apolloLinkSchema.SchemaLink({
    schema: _schema.default
  })),
  ssrMode: true
});
exports.client = client;
//# sourceMappingURL=apollo.client.server.js.map