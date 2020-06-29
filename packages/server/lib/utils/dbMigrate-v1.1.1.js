"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _communityMember = _interopRequireDefault(require("../api/community/community.member.model"));

var _community = _interopRequireDefault(require("../api/community/community.model"));

function markDeletedMembers() {
  return _markDeletedMembers.apply(this, arguments);
}

function _markDeletedMembers() {
  _markDeletedMembers = (0, _asyncToGenerator2.default)(function* () {
    var deletedCom = yield _community.default.find({
      inactive: true
    }, '_id');
    var ids = deletedCom.map(c => c._id);
    return _communityMember.default.updateMany({
      communityId: {
        $in: ids
      }
    }, {
      deletedCommunity: true
    }, {
      new: true
    });
  });
  return _markDeletedMembers.apply(this, arguments);
}

function updateDB() {
  return _updateDB.apply(this, arguments);
}

function _updateDB() {
  _updateDB = (0, _asyncToGenerator2.default)(function* () {
    try {
      yield markDeletedMembers();
    } catch (err) {
      console.log(err); // eslint-disable-line
    }
  });
  return _updateDB.apply(this, arguments);
}

updateDB();
//# sourceMappingURL=dbMigrate-v1.1.1.js.map