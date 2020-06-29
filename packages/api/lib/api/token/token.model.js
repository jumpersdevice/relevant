'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var mongoose = require('mongoose');

var { Schema } = mongoose;
var AuthTokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      index: true
    },
    revokeBefore: Number
  },
  {
    timestamps: true
  }
);

AuthTokenSchema.statics.revoke = /*#__PURE__*/ (function() {
  var _revoke = (0, _asyncToGenerator2.default)(function*(_id) {
    var now = new Date();
    var revokeBefore = Math.floor(now.getTime() / 1000);
    var revokeToken = new this({
      user: _id,
      revokeBefore
    });
    return revokeToken.save();
  });

  function revoke(_x) {
    return _revoke.apply(this, arguments);
  }

  return revoke;
})();

AuthTokenSchema.statics.checkRevoked = /*#__PURE__*/ (function() {
  var _checkRevoked = (0, _asyncToGenerator2.default)(function*(_ref) {
    var { _id, iat } = _ref;
    return this.findOne({
      user: _id,
      revokeBefore: {
        $gte: iat
      }
    });
  });

  function checkRevoked(_x2) {
    return _checkRevoked.apply(this, arguments);
  }

  return checkRevoked;
})();

module.exports = mongoose.model('AuthToken', AuthTokenSchema);
//# sourceMappingURL=token.model.js.map
