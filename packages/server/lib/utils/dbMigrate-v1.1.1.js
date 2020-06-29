"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _communityMember = _interopRequireDefault(require("../api/community/community.member.model"));

var _community = _interopRequireDefault(require("../api/community/community.model"));

async function markDeletedMembers() {
  const deletedCom = await _community.default.find({
    inactive: true
  }, '_id');
  const ids = deletedCom.map(c => c._id);
  return _communityMember.default.updateMany({
    communityId: {
      $in: ids
    }
  }, {
    deletedCommunity: true
  }, {
    new: true
  });
}

async function updateDB() {
  try {
    await markDeletedMembers();
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}

updateDB();
//# sourceMappingURL=dbMigrate-v1.1.1.js.map