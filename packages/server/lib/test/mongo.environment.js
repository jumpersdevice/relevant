"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var NodeEnvironment = require('jest-environment-node');

var path = require('path');

var fs = require('fs');

var mongoTestConfigPath = path.join(__dirname, './mongoTestConfig.json');

class MongoEnvironment extends NodeEnvironment {
  // eslint-disable-next-line
  constructor(config) {
    super(config);
  }

  setup() {
    var _superprop_getSetup = () => super.setup,
        _this = this;

    return (0, _asyncToGenerator2.default)(function* () {
      var mongoTestConfig = JSON.parse(fs.readFileSync(mongoTestConfigPath, 'utf-8'));
      _this.global.MONGO_URI = mongoTestConfig.mongoUri;
      yield _superprop_getSetup().call(_this);
    })();
  }

  teardown() {
    var _superprop_getTeardown = () => super.teardown,
        _this2 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      yield _superprop_getTeardown().call(_this2);
    })();
  }

  runScript(script) {
    return super.runScript(script);
  }

}

module.exports = MongoEnvironment;
//# sourceMappingURL=mongo.environment.js.map