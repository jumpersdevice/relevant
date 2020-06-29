"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pubsub = require("../../graphql/pubsub");

var _member = require("../community/member.schema");

var mongoose = require('mongoose');

var socketEvent = require("../../socket/socketEvent").default;

var {
  Schema
} = mongoose;

var {
  sendNotification
} = require("../../notifications");

var TENTH_LIFE = 3 * 24 * 60 * 60 * 1000;
var PostSchema = new Schema({
  body: String,
  title: String,
  description: String,
  channel: {
    type: Boolean,
    default: false
  },
  community: String,
  communityId: {
    type: Schema.Types.ObjectId,
    ref: 'Community'
  },
  tags: [{
    type: String,
    ref: 'Tag'
  }],
  category: {
    type: String,
    ref: 'Tag'
  },
  repost: {
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    commentBody: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true
  },
  embeddedUser: {
    _id: String,
    handle: String,
    name: String,
    image: String
  },
  flagged: {
    type: Boolean,
    default: false
  },
  flaggedBy: [{
    type: String,
    ref: 'User',
    select: false
  }],
  flaggedTime: Date,
  mentions: [{
    type: String,
    ref: 'User'
  }],
  // store link info here
  metaPost: {
    type: Schema.Types.ObjectId,
    ref: 'MetaPost'
  },
  url: {
    type: String,
    unique: false
  },
  inputUrl: {
    type: String,
    unique: false
  },
  image: {
    type: String
  },
  // TEMP Deprecate remove after migrate 0.20
  link: {
    type: String,
    unique: false
  },
  // Should be array of links used instead of metaPost
  // TODO: Implement this
  links: [{
    text: String,
    href: String,
    position: Number,
    metaPost: {
      type: Schema.Types.ObjectId,
      ref: 'MetaPost'
    }
  }],
  // aboutLink: { type: Schema.Types.ObjectId, ref: 'Post' },
  linkParent: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  // top-level comments have parent
  parentPost: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  // replies have parent comment
  parentComment: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  postDate: {
    type: Date,
    index: true
  },
  latestComment: {
    type: Date,
    index: true
  },
  commentCount: {
    type: Number,
    default: 0
  },
  // todo should be diff table - diff communities will have diff payouts
  rank: {
    type: Number,
    default: 0
  },
  relevance: {
    type: Number,
    default: 0
  },
  pagerank: {
    type: Number,
    default: 0
  },
  upVotes: {
    type: Number,
    default: 0
  },
  downVotes: {
    type: Number,
    default: 0
  },
  paidOut: {
    type: Boolean,
    default: false
  },
  payoutTime: {
    type: Date
  },
  // TODO twitter stuff should go into data model
  twitter: {
    type: Boolean,
    default: false
  },
  // Use this to hide twitter posts
  // TODO this should also go into a data model
  // and data should be used to query community feed
  hidden: {
    type: Boolean,
    default: false
  },
  twitterUser: Number,
  twitterId: Number,
  twitterScore: {
    type: Number,
    default: 0
  },
  // feedRelevance: Number,
  twitterUrl: String,
  seenInFeedNumber: {
    type: Number,
    default: 0
  },
  // link, comment, repost, post
  type: {
    type: String,
    default: 'post'
  },
  version: {
    type: String,
    default: 'metaRework'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});
PostSchema.virtual('myVote', {
  ref: 'Invest',
  localField: '_id',
  foreignField: 'post',
  justOne: true
});
PostSchema.virtual('reposted', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'repost.post'
});
PostSchema.virtual('commentary', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'parentPost'
});
PostSchema.virtual('embeddedUser.relevance', {
  ref: 'CommunityMember',
  localField: 'user',
  foreignField: 'user',
  justOne: true
});
PostSchema.virtual('data', {
  ref: 'PostData',
  localField: '_id',
  foreignField: 'post',
  justOne: true
});
PostSchema.virtual('children', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'parentPost',
  justOne: false
});
PostSchema.index({
  twitter: 1
});
PostSchema.index({
  parentPost: 1,
  hidden: 1
});
PostSchema.index({
  parentPost: 1,
  pagerank: 1,
  hidden: 1
});
PostSchema.index({
  twitter: 1,
  twitterId: 1
});
PostSchema.index({
  rank: 1
});
PostSchema.index({
  postDate: -1
});
PostSchema.index({
  postDate: -1,
  community: 1
});
PostSchema.index({
  postDate: -1,
  communitId: 1,
  parentPost: 1
});
PostSchema.index({
  _id: 1,
  community: 1,
  user: 1
});
PostSchema.index({
  _id: 1,
  user: 1
});
PostSchema.index({
  _id: -1,
  communityId: 1,
  user: 1
});
PostSchema.index({
  communityId: 1,
  user: 1
});
PostSchema.index({
  postDate: -1,
  tags: 1
});
PostSchema.index({
  rank: 1,
  tags: 1
});
PostSchema.index({
  paidOut: 1,
  payoutTime: 1
});
PostSchema.pre('save', /*#__PURE__*/function () {
  var _save = (0, _asyncToGenerator2.default)(function* (next) {
    try {
      var countQuery = {
        parentPost: this._id,
        hidden: false
      };
      this.commentCount = yield this.model('Post').countDocuments(countQuery);
      return next();
    } catch (err) {
      console.log('error updating post count', err); // eslint-disable-line

      return next();
    }
  });

  function save(_x) {
    return _save.apply(this, arguments);
  }

  return save;
}());

PostSchema.methods.addPostData = /*#__PURE__*/function () {
  var _addPostData = (0, _asyncToGenerator2.default)(function* (postObject) {
    var eligibleForReward = !this.parentPost && !this.twitter;
    var now = new Date();
    var data = new (this.model('PostData'))({
      eligibleForReward,
      hidden: this.hidden,
      type: this.type,
      parentPost: this.parentPost,
      postDate: now,
      // if we are creating post data object date is new!
      payoutTime: postObject ? postObject.payoutTime : this.payoutTime,
      // payoutTime: this.payoutTime,
      // postDate: this.postDate || this.createdAt,
      post: this._id,
      community: postObject ? postObject.community : this.community,
      communityId: postObject ? postObject.communityId : this.communityId,
      relevance: this.relevance,
      rank: this.rank,
      relevanceNeg: this.relevanceNeg,
      latestComment: this.latestComment || this.postDate,
      tags: this.tags
    });
    yield data.save();
    this.data = data;
    return this;
  });

  function addPostData(_x2) {
    return _addPostData.apply(this, arguments);
  }

  return addPostData;
}();

PostSchema.methods.updateClient = function updateClient(user) {
  if (this.user && this.user._id) this.user = this.user._id;
  var post = this.toObject(); // Prevent over-writing post object
  // TODO - normalize on client instead

  if (post.parentPost && post.parentPost._id) {
    post.parentPost = post.parentPost._id;
  }

  var postNote = {
    _id: user ? user._id : null,
    type: 'UPDATE_POST',
    payload: post
  };
  socketEvent.emit('socketEvent', postNote);
};

PostSchema.methods.addUserInfo = /*#__PURE__*/function () {
  var _addUserInfo = (0, _asyncToGenerator2.default)(function* (user) {
    this.embeddedUser = {
      id: user._id,
      _id: user._id,
      handle: user.handle,
      name: user.name,
      image: user.image
    };
    return this;
  });

  function addUserInfo(_x3) {
    return _addUserInfo.apply(this, arguments);
  }

  return addUserInfo;
}();

function updateLatestComment(_x4) {
  return _updateLatestComment.apply(this, arguments);
} // TODO work on this


function _updateLatestComment() {
  _updateLatestComment = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      post,
      communityId
    } = _ref;
    if (post.parentPost) return post;
    var latestComment = yield post.model('Post').findOne({
      parentPost: post._id,
      communityId,
      hidden: {
        $ne: true
      },
      type: 'post'
    }, 'postDate').sort({
      postDate: -1
    });
    if (!latestComment) return post;
    post.data.latestComment = latestComment.postDate;
    post.latestComment = latestComment.postDate;
    return post;
  });
  return _updateLatestComment.apply(this, arguments);
}

PostSchema.methods.updateRank = /*#__PURE__*/function () {
  var _updateRank = (0, _asyncToGenerator2.default)(function* (_ref2) {
    var {
      communityId,
      updateTime
    } = _ref2;
    var post = this;

    try {
      if (!post.data) {
        post.data = yield post.model('PostData').findOne({
          post: post._id,
          communityId
        });
      }

      var {
        pagerank
      } = post.data;

      if (updateTime && !post.parentPost) {
        post = yield updateLatestComment({
          post,
          communityId
        });
      } // Don't use latestComment to compute post rank!


      if (!post.data.postDate) post.data.postDate = post.postDate;
      var {
        postDate
      } = post.data;
      var rank = pagerank < 0 ? 0 : postDate.getTime() / TENTH_LIFE + Math.log10(pagerank + 1);
      rank = Math.round(rank * 1000) / 1000; // But if a comment ranks highly - update post rank

      var topComment = yield post.model('PostData').findOne({
        parentPost: post._id,
        communityId
      }, 'rank pagerank').sort({
        rank: -1
      });
      if (topComment) rank = Math.max(rank, topComment.rank);
      post.data.rank = rank; // TODO - deprecate this once we don't use this in the feed
      // post.rank = rank;
      // if (post.communityId && post.communityId.toString() === communityId.toString()) {
      //   post.pagerank = post.data.pagerank;
      //   // console.log('updating post pagerank', post.pagerank);
      // }

      yield post.data.save();
      yield post.save();
      return post;
    } catch (err) {
      console.log(err); // eslint-disable-line

      return post;
    }
  });

  function updateRank(_x5) {
    return _updateRank.apply(this, arguments);
  }

  return updateRank;
}();

PostSchema.statics.newLinkPost = /*#__PURE__*/function () {
  var _newLinkPost = (0, _asyncToGenerator2.default)(function* (_ref3) {
    var {
      linkObject,
      postObject
    } = _ref3;
    var {
      tags,
      postDate,
      payoutTime,
      hidden,
      image,
      title,
      url,
      communityId
    } = postObject;
    var post = yield this.model('Post').findOne({
      url,
      type: 'link'
    }).populate({
      path: 'data',
      match: {
        communityId
      }
    });

    if (!post) {
      var parentObj = {
        image,
        title,
        description: linkObject.description,
        url,
        tags,
        postDate,
        payoutTime,
        hidden,
        type: 'link',
        latestComment: postDate
      };
      post = yield new (this.model('Post'))(parentObj);
    }

    var eligibleForReward = !post.parentPost && !post.twitter;

    if (!post.data) {
      post = yield post.addPostData(postObject);
    } else if (!post.data.eligibleForReward && eligibleForReward) {
      post.data.eligibleForReward = eligibleForReward;
      post.data.postDate = postDate;
      post.data.payoutTime = payoutTime;
    }

    var combinedTags = [...new Set([...(post.tags || []), ...(tags || [])])];
    post.tags = combinedTags;
    post.data.tags = combinedTags;
    linkObject.tags = combinedTags; // TODO figure out what to do with payoutTime should old post reset?
    // for now we don't update payout time

    if (!hidden && post.latestComment < postDate) {
      post.latestComment = postDate;
      post.data.latestComment = postDate;
    }

    if (!hidden) yield post.updateRank({
      communityId
    });
    post = yield post.upsertMetaPost(post.metaPost, linkObject);
    post.data = yield post.data.save();
    post = yield post.save();
    return post;
  });

  function newLinkPost(_x6) {
    return _newLinkPost.apply(this, arguments);
  }

  return newLinkPost;
}();

PostSchema.methods.upsertLinkParent = /*#__PURE__*/function () {
  var _upsertLinkParent = (0, _asyncToGenerator2.default)(function* (linkObject) {
    var post = this;
    var parent = yield this.model('Post').newLinkPost({
      postObject: post,
      linkObject
    });
    parent.commentCount++;
    post.linkParent = parent;
    post.parentPost = parent;
    if (post.data) post.data.parentPost = parent;
    post.metaPost = parent.metaPost;
    return post;
  });

  function upsertLinkParent(_x7) {
    return _upsertLinkParent.apply(this, arguments);
  }

  return upsertLinkParent;
}();

PostSchema.methods.insertIntoFeed = /*#__PURE__*/function () {
  var _insertIntoFeed = (0, _asyncToGenerator2.default)(function* (communityId, community) {
    try {
      var post = this;
      if (post.parentPost) throw new Error("Child comments don't go in the feed");
      post.data = yield this.model('PostData').findOneAndUpdate({
        post: post._id,
        communityId
      }, {
        isInFeed: true
      }, {
        new: true
      }); // this.model('CommunityFeed').addToFeed(post, post.data.community);

      var newPostEvent = {
        type: 'SET_NEW_POSTS_STATUS',
        payload: {
          communityId,
          community
        }
      };
      socketEvent.emit('socketEvent', newPostEvent);
      return post;
    } catch (err) {
      return console.log('insertIntoFeed error', err); // eslint-disable-line
    }
  });

  function insertIntoFeed(_x8, _x9) {
    return _insertIntoFeed.apply(this, arguments);
  }

  return insertIntoFeed;
}();

PostSchema.methods.upsertMetaPost = /*#__PURE__*/function () {
  var _upsertMetaPost = (0, _asyncToGenerator2.default)(function* (metaId, linkObject) {
    try {
      var MetaPost = this.model('MetaPost');
      var meta;

      if (metaId) {
        var _id = metaId._id || metaId;

        if (_id) meta = yield MetaPost.findOne({
          _id
        });
      }

      var url = linkObject ? linkObject.url : this.url || this.link;
      if (url && !meta) meta = yield MetaPost.findOne({
        url
      });
      if (!meta) meta = new MetaPost(linkObject);else meta.set(linkObject);
      meta = yield meta.save();
      this.metaPost = meta;
      return this.save();
    } catch (err) {
      console.log('upsertMetaPost error', err); // eslint-disable-line

      return this;
    }
  });

  function upsertMetaPost(_x10, _x11) {
    return _upsertMetaPost.apply(this, arguments);
  }

  return upsertMetaPost;
}(); // PostSchema.statics.sendOutInvestInfo = async function sendOutInvestInfo(postIds, userId) {
//   try {
//     const investments = await this.model('Invest').find({
//       investor: userId,
//       post: { $in: postIds }
//     });
//     const updatePosts = {
//       _id: userId,
//       type: 'UPDATE_POST_INVESTMENTS',
//       payload: investments
//     };
//     socketEvent.emit('socketEvent', updatePosts);
//   } catch (err) {
//     console.log('sendOutInvestInfo error', err); // eslint-disable-line
//   }
// };


function getPostData(_x12) {
  return _getPostData.apply(this, arguments);
}

function _getPostData() {
  _getPostData = (0, _asyncToGenerator2.default)(function* (_ref4) {
    var {
      post,
      communityId
    } = _ref4;

    if (!post.data) {
      post.data = yield this.model('PostData').findOne({
        post: post._id,
        communityId
      });
    }

    return post;
  });
  return _getPostData.apply(this, arguments);
}

PostSchema.methods.addTags = /*#__PURE__*/function () {
  var _addTags = (0, _asyncToGenerator2.default)(function* (_ref5) {
    var {
      tags,
      communityId
    } = _ref5;

    try {
      var post = this;
      post = yield getPostData({
        post,
        communityId
      });
      var combinedTags = [...new Set([...(post.tags || []), ...(tags || [])])];
      post.tags = combinedTags;
      post.data.tags = combinedTags;
      yield post.data.save(); // linkObject.tags = combinedTags;

      return post.save();
    } catch (err) {
      return console.log('error adding tags', err); // eslint-disable-line
    }
  });

  function addTags(_x13) {
    return _addTags.apply(this, arguments);
  }

  return addTags;
}();

PostSchema.statics.sendOutMentions = /*#__PURE__*/function () {
  var _sendOutMentions = (0, _asyncToGenerator2.default)(function* (mentions, post, mUser, comment) {
    var _this = this;

    try {
      var textParent = comment || post;
      var promises = mentions.map( /*#__PURE__*/function () {
        var _ref6 = (0, _asyncToGenerator2.default)(function* (mention) {
          var type = comment ? 'comment' : 'post';
          mUser = yield _this.model('User').findOne({
            _id: mUser._id || mUser
          }, 'blockedBy blocked name role');
          var blocked = mUser.blockedBy.find(u => u === mention) || mUser.blocked.find(u => u === mention);
          if (blocked) textParent.mentions = textParent.mentions.filter(m => m !== blocked);
          var query = {
            handle: mention
          };
          var group;

          if (mention === 'everyone') {
            if (mUser.role !== 'admin') return null;
            query = {}; // TODO should this this as community

            group = ['everyone'];
            createMentionNotification({
              post,
              user: {
                _id: null
              },
              mUser,
              type,
              Notification: _this.model('Notification'),
              group,
              mention
            });
          }

          var users = yield _this.model('User').find(query, 'deviceTokens email name notificationSettings');
          users.forEach( /*#__PURE__*/function () {
            var _ref7 = (0, _asyncToGenerator2.default)(function* (user) {
              var action = ' mentioned you in a ' + type;
              var alert = (mUser.name || mUser) + action;
              if (mention === 'everyone' && post.body) alert = post.body; // TODO batch notifications & emails

              var payload = {
                fromUser: mUser,
                toUser: user,
                post,
                action,
                noteType: 'mention'
              };
              sendNotification(user, alert, payload);
              if (mention === 'everyone') return;
              createMentionNotification({
                post,
                user,
                mUser,
                type,
                Notification: _this.model('Notification'),
                group,
                mention
              });
            });

            return function (_x19) {
              return _ref7.apply(this, arguments);
            };
          }());
          return null;
        });

        return function (_x18) {
          return _ref6.apply(this, arguments);
        };
      }());
      yield Promise.all(promises);
      textParent = yield textParent.save();
      textParent.updateClient();
      return textParent;
    } catch (err) {
      return console.log('sendOutMentions error', err); // eslint-disable-line
    }
  });

  function sendOutMentions(_x14, _x15, _x16, _x17) {
    return _sendOutMentions.apply(this, arguments);
  }

  return sendOutMentions;
}();

function createMentionNotification(_x20) {
  return _createMentionNotification.apply(this, arguments);
} // pruneFeed (only for link posts)


function _createMentionNotification() {
  _createMentionNotification = (0, _asyncToGenerator2.default)(function* (_ref8) {
    var {
      post,
      user,
      mUser,
      type,
      Notification,
      group,
      mention
    } = _ref8;
    var dbNotificationObj = {
      post: post._id,
      forUser: user._id,
      group,
      byUser: mUser._id || mUser,
      amount: null,
      type: type + 'Mention',
      personal: true,
      read: false
    };
    var newDbNotification = new Notification(dbNotificationObj);
    var note = yield newDbNotification.save();
    var newNotifObj = {
      _id: group ? null : mention,
      type: 'ADD_ACTIVITY',
      payload: note
    };
    socketEvent.emit('socketEvent', newNotifObj);
  });
  return _createMentionNotification.apply(this, arguments);
}

PostSchema.methods.pruneFeed = /*#__PURE__*/function () {
  var _pruneFeed = (0, _asyncToGenerator2.default)(function* (_ref9) {
    var {
      communityId
    } = _ref9;
    var post = this;

    if (!post.data) {
      post.data = yield this.model('PostData').findOne({
        post: post._id,
        communityId
      });
    }

    var {
      shares
    } = post.data;
    if (post.type !== 'link') throw new Error('Should not prune anything but links');
    if (!communityId) throw new Error('missing community'); // Thread has no children - remove everything

    var children = yield this.model('Post').countDocuments({
      parentPost: post._id
    }); // there is no way to remove post link
    // maybe we shouldn't 'invest in links automatically'?

    if (!children && !shares) {
      yield post.remove();
      return null;
    }

    var communityChildren = yield this.model('Post').countDocuments({
      communityId,
      parentPost: post._id
    });
    if (communityChildren || shares) return post;
    yield this.model('PostData').deleteOne({
      post: post._id,
      communityId
    }).exec();
    return post;
  });

  function pruneFeed(_x21) {
    return _pruneFeed.apply(this, arguments);
  }

  return pruneFeed;
}();

function updateParentPostOnRemovingChild(_x22) {
  return _updateParentPostOnRemovingChild.apply(this, arguments);
} // TODO we should replace post with a dummy post if post has
// comments or replies so we can preserver


function _updateParentPostOnRemovingChild() {
  _updateParentPostOnRemovingChild = (0, _asyncToGenerator2.default)(function* (post) {
    var {
      communityId
    } = post;

    if (!communityId) {
      throw new Error('error missing post community id!', post.toObject());
    }

    var parent = yield post.model('Post').findOne({
      _id: post.linkParent
    }).populate({
      path: 'data',
      match: {
        communityId
      }
    });
    if (parent) parent = yield parent.pruneFeed({
      communityId
    });
    if (!parent) return null;
    if (post.hidden) return parent; // parent.data = await post.model('PostData').findOne({ post: parent._id, communityId });

    if (!post.data) {
      post.data = yield post.model('PostData').findOne({
        post: post._id,
        communityId
      });
    }

    if (!post.data || !parent.data) throw new Error('missing post data'); // TODO maybe always update the time?

    var shouldUpdateTime = post.postDate === parent.data.latestComment;
    var shouldUpdateRank = post.data.rank >= parent.data.rank;

    if (shouldUpdateRank || shouldUpdateTime) {
      parent = yield parent.updateRank({
        communityId,
        shouldUpdateTime
      });
    }

    return parent;
  });
  return _updateParentPostOnRemovingChild.apply(this, arguments);
}

PostSchema.post('remove', /*#__PURE__*/function () {
  var _postRemove = (0, _asyncToGenerator2.default)(function* (post, next) {
    if (post.linkParent && post.type !== 'comment') {
      yield updateParentPostOnRemovingChild(post);
    } // await this.model('CommunityFeed').removeFromAllFeeds(doc);


    var note = this.model('Notification').deleteMany({
      post: post._id
    }).exec();
    var feed = this.model('Feed').deleteMany({
      post: post._id
    }).exec();
    var data = this.model('PostData').deleteMany({
      post: post._id
    }).exec();
    var metaPost; // if (post.type === 'link' && !post.parentParent) {
    //   metaPost = await this.model('MetaPost')
    //   .deleteMany({ post: post._id })
    //   .exec();
    // }

    var commentNote; // remove notifications

    if (post.type === 'comment' || post.type === 'repost') {
      commentNote = this.model('Notification').deleteMany({
        comment: post._id
      }).exec();
    }

    yield Promise.all([note, feed, data, metaPost, commentNote]);
    return next();
  });

  function postRemove(_x23, _x24) {
    return _postRemove.apply(this, arguments);
  }

  return postRemove;
}());

PostSchema.methods.incrementUnread = /*#__PURE__*/function () {
  var _incrementUnread = (0, _asyncToGenerator2.default)(function* (_ref10) {
    var {
      communityId,
      community
    } = _ref10;
    yield this.model('CommunityMember').updateMany({
      communityId
    }, {
      $inc: {
        unread: 1
      }
    });

    _pubsub.pubsub.publish(_member.UPDATE_UNREAD, {
      community,
      communityId: communityId.toString()
    });
  });

  function incrementUnread(_x25) {
    return _incrementUnread.apply(this, arguments);
  }

  return incrementUnread;
}();

module.exports = mongoose.model('Post', PostSchema);
//# sourceMappingURL=post.model.js.map