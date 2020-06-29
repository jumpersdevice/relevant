"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require('@babel/register');

require('@babel/polyfill');

require('dotenv').config({
  silent: true
});

process.env.NODE_ENV = 'test';
process.env.WEB = 'true';

var computePageRank = require("./pagerankCompute").default;

var Community = require("../api/community/community.model").default;

var community = 'relevant';

var {
  db
} = require("../config/db.connect");

function runTest() {
  return _runTest.apply(this, arguments);
}

function _runTest() {
  _runTest = (0, _asyncToGenerator2.default)(function* () {
    try {
      yield db;
      var communityId = (yield Community.findOne({
        slug: community
      }))._id;
      yield computePageRank({
        communityId,
        community,
        debug: true
      });
    } catch (err) {
      console.log(err); // eslint-disable-line
    }
  });
  return _runTest.apply(this, arguments);
}

setTimeout(runTest, 3000); // runTest();
//# sourceMappingURL=manualTest.js.map