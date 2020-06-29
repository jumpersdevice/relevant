"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _seedData = require("./seedData");

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongooseOpts = {
  // options for mongoose 4.11.3 and above
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};
beforeAll( /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
  if (!process.env.TEST_SUITE) {
    // eslint-disable-next-line
    console.warn('MISSING TEST_SUITE NAME - you need to set a process.env.TEST_SUITE variable in your test file');
  }

  if (mongoose.connection.readyState === 0) {
    yield mongoose.connect("".concat(global.MONGO_URI).concat(process.env.TEST_SUITE), mongooseOpts);
  }

  yield clearDB();
  return (0, _seedData.setupTestData)();

  function clearDB() {
    return _clearDB.apply(this, arguments);
  }

  function _clearDB() {
    _clearDB = (0, _asyncToGenerator2.default)(function* () {
      if (mongoose.connection.host !== '127.0.0.1') {
        throw new Error('this is not a test db!');
      }

      var clear = Object.values(mongoose.connection.collections).map( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)(function* (collection) {
          return collection.deleteMany();
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      yield Promise.all(clear);
    });
    return _clearDB.apply(this, arguments);
  }
}));
afterAll( /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
  return mongoose.disconnect();
}));
//# sourceMappingURL=testDbSetup.js.map