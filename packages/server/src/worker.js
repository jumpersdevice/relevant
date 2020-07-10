if (process.env.NODE_ENV === 'production') {
  require('newrelic');
}

delete process.env.BROWSER;

process.env.WEB = 'true';
require('@babel/register');
require('@babel/polyfill');

const Sentry = require('@sentry/node');

require('dotenv').config({ silent: true });

const mongoose = require('mongoose');

Sentry.init({ dsn: process.env.SENTRY_DNS, environment: process.env.NODE_ENV });

mongoose.Promise = global.Promise;
require('./config/db.connect');

require('./utils/ethereum').init();

require('./queue');
