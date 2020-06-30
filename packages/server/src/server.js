/* eslint-disable no-console, no-use-before-define */
import 'dotenv/config';
import 'sqreen';
import Express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import { ApolloServer } from 'apollo-server-express';
import schema from 'server/graphql/schema';
import rateLimit from 'express-rate-limit';

import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const favicon = require('serve-favicon');
const MongoStore = require('connect-mongo')(session);
const cookiesMiddleware = require('universal-cookie-express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const app = new Express();
mongoose.Promise = global.Promise;

const { validateTokenLenient, verify } = require('server/auth/auth.service');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100000, // limit each IP to 1000 requests per windowMs
});

console.log('NODE_ENV', process.env.NODE_ENV);

require('events').EventEmitter.prototype._maxListeners = 100;

// -------------Dev server watch and hot reload---------------
const isDevelopment =
  process.env.NODE_ENV !== 'production' &&
  process.env.NODE_ENV !== 'test' &&
  process.env.NODE_ENV !== 'native';

const relevantEnv = process.env.RELEVANT_ENV;

if (isDevelopment) {
  console.log('in development environment');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('@r3l/app/webpack.config');
  // Use this middleware to set up hot module reloading via webpack.
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      // noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      writeToDisk: (filePath) => /loadable-stats-dev\.json$/.test(filePath),
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.use(limiter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(favicon(path.join(__dirname, '../favicon.ico')));

// Connect to db
const { db } = require('./config/db.connect');

// Persist sessions with MongoStore
// We need to enable sessions for passport twitter because its an oauth 1.0 strategy
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      autoRemove: 'interval',
      autoRemoveInterval: 10, // In minutes. Default
      touchAfter: 24 * 3600, // time period in seconds
      clear_interval: 3600,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

function requireHTTPS(req, res, next) {
  if (
    req.headers['x-forwarded-proto'] !== 'https' &&
    process.env.NODE_ENV === 'production'
  ) {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  return next();
}

if (process.env.NO_SSL !== 'true') {
  app.use(requireHTTPS);
}

// public folder
console.log(
  'public path',
  require.resolve('@r3l/app/public/service-worker').replace('/service-worker.js', '')
);
app.use(
  '/',
  expressStaticGzip(
    require.resolve('@r3l/app/public/service-worker').replace('/service-worker.js', ''),
    { index: false }
  )
);
app.use(cookiesMiddleware());
app.use(morgan('short'));

const port = process.env.PORT || 3000;

console.log('WEB CONCURRENCY ', process.env.WEB_CONCURRENCY);

let server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV !== 'production',
  context: ({ req, connection }) =>
    connection ? connection.context : { user: req.user || {} },
});

app.use('/graphql', validateTokenLenient);
server.applyMiddleware({ app });

const socketServer = require('./socket').default;

server = app.listen({ port }, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      `==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`
    );
    const now = new Date();
    require('./routes')(app);
    const time = new Date().getTime() - now.getTime();
    console.log('done loading routes', time / 1000, 's');
  }
});

// SubscriptionServer.create(
//   {
//     onOperation: async (message, params) => {
//       const { token } = message.payload;
//       let user;
//       try {
//         user = await verify(token);
//       } catch (err) {
//         // console.log(err);
//       }
//       return {
//         ...params,
//         context: {
//           ...params.context,
//           user
//         }
//       };
//     },
//     execute,
//     subscribe,
//     schema,
//     keepAlive: 10000
//   },
//   {
//     server,
//     path: '/graphql'
//   }
// );

socketServer(server);

// in production this is a worker
if (relevantEnv === 'staging' || isDevelopment || process.env.NODE_ENV === 'native') {
  require('./queue');
}

require('./utils/tokenAudit');
require('./utils/ethereum').init();
// require('./utils/dbMigrate-v1.1.1');

exports.app = app;
exports.server = server;
exports.db = db;
