'use strict';

var path = require('path');

var env = require('dotenv'); // grab root .env file

env.config({
  path: path.join(__dirname, '../../../.env')
}); // grab local .env file if it exists

env.config({});
var isProduction = process.env.NODE_ENV === 'production';
if (isProduction) require('newrelic');
delete process.env.BROWSER;
process.env.WEB = 'true';

require('./server');
//# sourceMappingURL=index.js.map
