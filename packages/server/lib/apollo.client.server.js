"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _apolloClient = require("apollo-client");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _apolloLinkSchema = require("apollo-link-schema");

var _storage = require("@r3l/app/lib/utils/storage");

var _apolloLinkContext = require("apollo-link-context");

var _apolloLink = require("apollo-link");

const cache = new _apolloCacheInmemory.InMemoryCache({
  dataIdFromObject: object => object._id || null,
  resultCaching: false
});
const authMiddleware = (0, _apolloLinkContext.setContext)(async (req, {
  headers
}) => {
  const token = await (0, _storage.getToken)();
  return {
    credentials: 'include',
    headers: { ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
const client = new _apolloClient.ApolloClient({
  cache,
  link: (0, _apolloLink.concat)(authMiddleware, new _apolloLinkSchema.SchemaLink({
    schema: _schema.default
  })),
  ssrMode: true
});
exports.client = client;
//# sourceMappingURL=apollo.client.server.js.map