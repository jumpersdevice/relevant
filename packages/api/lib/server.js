"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("dotenv/config");

require("sqreen");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("passport"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

var _cors = _interopRequireDefault(require("cors"));

var _subscriptionsTransportWs = require("subscriptions-transport-ws");

var _graphql = require("graphql");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var cookieParser = require('cookie-parser');

var session = require('express-session');

var favicon = require('serve-favicon');

var MongoStore = require('connect-mongo')(session);

var cookiesMiddleware = require('universal-cookie-express');

var path = require('path');

var expressStaticGzip = require('express-static-gzip');

var app = new _express.default();
mongoose.Promise = global.Promise;

var {
  validateTokenLenient,
  verify
} = require("./auth/auth.service");

var corsOptions = ENABLE_CORS ? {
  origin: 'https://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

} : null;
var {
  ENABLE_CORS
} = process.env;
app.use((0, _cors.default)(corsOptions));
var limiter = (0, _expressRateLimit.default)({
  windowMs: 1 * 60 * 1000,
  // 1 minute
  max: 1000 // limit each IP to 1000 requests per windowMs

});
console.log('NODE_ENV', process.env.NODE_ENV);
require('events').EventEmitter.prototype._maxListeners = 100; // -------------Dev server watch and hot reload---------------

var isDevelopment = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'native';
var relevantEnv = process.env.RELEVANT_ENV;
app.use(limiter);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(favicon(path.join(__dirname, '../favicon.ico'))); // Connect to db

var {
  db
} = require("./config/db.connect"); // Persist sessions with MongoStore
// We need to enable sessions for passport twitter because its an oauth 1.0 strategy


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    autoRemove: 'interval',
    autoRemoveInterval: 10,
    // In minutes. Default
    touchAfter: 24 * 3600,
    // time period in seconds
    clear_interval: 3600
  })
}));
app.use(_passport.default.initialize());
app.use(_passport.default.session());

function requireHTTPS(req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
    return res.redirect('https://' + req.get('host') + req.url);
  }

  return next();
}

if (process.env.NO_SSL !== 'true') {
  app.use(requireHTTPS);
} // public folder


app.use('/', expressStaticGzip(require.resolve('@r3l/app/public/service-worker').replace('/service-worker.js', ''), {
  index: false
}));
app.use(cookiesMiddleware());
app.use((0, _morgan.default)('short'));
var port = process.env.PORT || 3000;
console.log('WEB CONCURRENCY ', process.env.WEB_CONCURRENCY);
var server = new _apolloServerExpress.ApolloServer({
  schema: _schema.default,
  playground: process.env.NODE_ENV !== 'production',
  context: (_ref) => {
    var {
      req,
      connection
    } = _ref;
    return connection ? connection.context : {
      user: req.user || {}
    };
  }
});
app.use('/graphql', validateTokenLenient);
server.applyMiddleware({
  app,
  cors: false
});

var socketServer = require("./socket").default;

server = app.listen({
  port
}, error => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> \uD83C\uDF0E  Listening on port ".concat(port, ". Open up http://localhost:").concat(port, "/ in your browser."));
    var now = new Date();

    require("./routes")(app);

    var time = new Date().getTime() - now.getTime();
    console.log('done loading routes', time / 1000, 's');
  }
});
socketServer(server, {
  pingTimeout: 30000
});

_subscriptionsTransportWs.SubscriptionServer.create({
  onOperation: function () {
    var _onOperation = (0, _asyncToGenerator2.default)(function* (message, params) {
      var {
        token
      } = message.payload;
      var user;

      try {
        user = yield verify(token);
      } catch (err) {// console.log(err);
      }

      return _objectSpread(_objectSpread({}, params), {}, {
        context: _objectSpread(_objectSpread({}, params.context), {}, {
          user
        })
      });
    });

    function onOperation(_x, _x2) {
      return _onOperation.apply(this, arguments);
    }

    return onOperation;
  }(),
  execute: _graphql.execute,
  subscribe: _graphql.subscribe,
  schema: _schema.default,
  keepAlive: 10000
}, {
  server,
  path: '/graphql'
});

socketServer(server, {
  pingTimeout: 30000
}); // in production this is a worker

if (relevantEnv === 'staging' || isDevelopment || process.env.NODE_ENV === 'native') {
  require("./queue");
}

require("./utils/tokenAudit");

require("./utils/ethereum").init(); // require('./utils/dbMigrate-v1.1.1');


exports.app = app;
exports.server = server;
exports.db = db;
//# sourceMappingURL=server.js.map