'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var mongoose = require('mongoose');

var { Schema } = mongoose;
var FeedSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    from: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    metaPost: {
      type: Schema.Types.ObjectId,
      ref: 'metaPost'
    },
    tags: [
      {
        type: String,
        ref: 'Tag'
      }
    ],
    createdAt: {
      type: Date
    },
    read: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: false
  }
);
FeedSchema.index({
  userId: 1,
  createdAt: 1
});
FeedSchema.index({
  userId: 1,
  createdAt: 1,
  tags: 1
});

FeedSchema.statics.processExpired = /*#__PURE__*/ (function() {
  var _processExpired = (0, _asyncToGenerator2.default)(function*(user) {
    var updateFeed;
    var oldestUnread = yield this.findOne({
      userId: user,
      read: false
    })
      .sort({
        createdAt: 1
      })
      .limit(1);

    if (oldestUnread) {
      oldestUnread.remove();
      updateFeed = true;
    } else updateFeed = false;

    return updateFeed;
  });

  function processExpired(_x) {
    return _processExpired.apply(this, arguments);
  }

  return processExpired;
})();

module.exports = mongoose.model('Feed', FeedSchema);
//# sourceMappingURL=feed.model.js.map
