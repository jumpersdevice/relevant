'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var mongoose = require('mongoose');

var { Schema } = mongoose;
var CommunityFeedSchema = new Schema(
  {
    community: String,
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    // metaPost: { type: Schema.Types.ObjectId, ref: 'MetaPost' },
    rank: {
      type: Number,
      default: 0
    },
    latestPost: {
      type: Date
    },
    tags: [
      {
        type: String,
        ref: 'Tag'
      }
    ],
    keywords: [String],
    categories: [
      {
        type: String,
        ref: 'Tag'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    timestamps: false
  }
);
CommunityFeedSchema.index({
  community: 1
});
CommunityFeedSchema.index({
  metaPost: 1
});
CommunityFeedSchema.index({
  latestPost: 1
});
CommunityFeedSchema.index({
  community: 1,
  rank: 1
});
CommunityFeedSchema.index({
  community: 1,
  metaPost: 1
});
CommunityFeedSchema.index({
  community: 1,
  latestPost: 1
});

CommunityFeedSchema.statics.updateDate = /*#__PURE__*/ (function() {
  var _updateDate = (0, _asyncToGenerator2.default)(function*(_id, community, date) {
    var feedItem = yield this.findOneAndUpdate(
      {
        post: _id,
        community
      },
      {
        latestPost: date
      },
      {
        new: true
      }
    );
    return feedItem;
  });

  function updateDate(_x, _x2, _x3) {
    return _updateDate.apply(this, arguments);
  }

  return updateDate;
})();

CommunityFeedSchema.statics.addToFeed = /*#__PURE__*/ (function() {
  var _addToFeed = (0, _asyncToGenerator2.default)(function*(post, community) {
    if (community === 'twitter') community = 'relevant';
    if (!community) throw new Error('missing community');
    yield this.findOneAndUpdate(
      {
        community,
        post: post._id
      },
      {
        latestPost: post.data.latestComment || post.data.postDate,
        tags: post.tags,
        // categories: post.categories,
        rank: post.data.rank
      },
      {
        upsert: true,
        new: true
      }
    );
  });

  function addToFeed(_x4, _x5) {
    return _addToFeed.apply(this, arguments);
  }

  return addToFeed;
})();

CommunityFeedSchema.statics.updateRank = /*#__PURE__*/ (function() {
  var _updateRank = (0, _asyncToGenerator2.default)(function*(post, community) {
    if (!community) throw new Error('missing community');
    var feedItem = yield this.findOne({
      post: post._id,
      community
    });
    if (!feedItem) return null; // TODO - post rank should be tracked in a separate table
    // so that we are not grabbing stuff from a diff communities

    feedItem.rank = post.data.rank;
    feedItem.latestPost = post.data.latestComment || post.data.postDate;
    return feedItem.save();
  });

  function updateRank(_x6, _x7) {
    return _updateRank.apply(this, arguments);
  }

  return updateRank;
})();

CommunityFeedSchema.statics.removeFromCommunityFeed = /*#__PURE__*/ (function() {
  var _removeFromCommunityFeed = (0, _asyncToGenerator2.default)(function*(
    _id,
    community
  ) {
    return this.deleteMany({
      post: _id,
      community
    }).exec();
  });

  function removeFromCommunityFeed(_x8, _x9) {
    return _removeFromCommunityFeed.apply(this, arguments);
  }

  return removeFromCommunityFeed;
})();

CommunityFeedSchema.statics.removeFromAllFeeds = /*#__PURE__*/ (function() {
  var _removeFromFeed = (0, _asyncToGenerator2.default)(function*(_id) {
    return this.deleteMany({
      post: _id
    }).exec();
  });

  function removeFromFeed(_x10) {
    return _removeFromFeed.apply(this, arguments);
  }

  return removeFromFeed;
})();

module.exports = mongoose.model('CommunityFeed', CommunityFeedSchema);
//# sourceMappingURL=communityFeed.model.js.map
