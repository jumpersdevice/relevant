"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var path = require('path');

var fs = require('fs');

var {
  MongoMemoryServer
} = require('mongodb-memory-server');

var mongoTestConfigPath = path.join(__dirname, './mongoTestConfig.json');
process.env.WEB = 'true';
delete process.env.BROWSER;
var mongod = new MongoMemoryServer({
  autoStart: false
});
module.exports = /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
  if (!mongod.isRunning) {
    yield mongod.start();
  }

  var mongoUri = yield mongod.getConnectionString();
  fs.writeFileSync(mongoTestConfigPath, JSON.stringify({
    mongoUri: mongoUri.replace('?', '')
  })); // Set reference to mongod in order to close the server during teardown.

  global.__MONGOD__ = mongod;
});
//# sourceMappingURL=setup.js.map