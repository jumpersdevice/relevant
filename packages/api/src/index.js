const path = require('path');
const env = require('dotenv');

// grab root .env file
env.config({ path: path.join(__dirname, '../../../.env') });
// grab local .env file if it exists
env.config({});

const isProduction = process.env.NODE_ENV === 'production';
if (isProduction) require('newrelic');

delete process.env.BROWSER;
process.env.WEB = 'true';

require('./server');
