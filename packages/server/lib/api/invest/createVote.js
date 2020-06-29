"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _earnings = _interopRequireDefault(require("../earnings/earnings.model"));

var _notifications = require("../../notifications");

var _computeApproxPageRank = _interopRequireDefault(require("../../pagerank/computeApproxPageRank"));

var _rewards = require("@r3l/app/lib/utils/rewards");

var _community = _interopRequireDefault(require("../community/community.model"));

var _post = _interopRequireDefault(require("../post/post.model"));

var _user = _interopRequireDefault(require("../user/user.model"));

var _subscription = _interopRequireDefault(require("../subscription/subscription.model"));

var _notification = _interopRequireDefault(require("../notification/notification.model"));

var _invest = _interopRequireDefault(require("./invest.model"));

var {
  NODE_ENV
} = process.env; // General problem: a user with some reputation who hasn't upvoted anyone
// adds much more weight to the first few posts he/she upvotes
// TODO: Solution — only start counting weights after N upvotes?
// Rate-limit vote weights?
// Weight allocation attack:
// Above also solves this possible attack...
// 1. Build up some degree of relevance (takes time)
// 2. Create N sibyls ahead of time and upvote each one
// 3. Wait until right before the a given post's payout time
// 4. Each sybil upvotes the post and effectively transferring all of the rep weight to the post
// 5. After, delete the sybils, and to restore original weights
// This is mitigated by not deleting links to sybil nodes upon their deletion :)
// Partial solution: prevent undoing vote after payout

var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        community,
        communityId
      } = req.communityMember;
      var communityInstance = yield _community.default.findOne({
        _id: communityId
      });
      var userId = req.user._id;
      var postId = req.body.post;
      var {
        amount
      } = req.body; // amount should be on a scale of -1 to 1 to prevent abuse;

      amount = Math.max(-1, amount);
      amount = Math.min(1, amount);
      var {
        post,
        user,
        author
      } = yield queryDb({
        userId,
        postId,
        communityId
      });
      post = yield unhideTwitterComments({
        amount,
        post,
        communityId,
        community
      }); // TODO create twitter user authors!

      ratelimitVotes({
        user
      });

      if (author) {
        author.relevance = yield ensurePagerank({
          user: author,
          communityInstance
        });
      }

      if (user) {
        user.relevance = yield ensurePagerank({
          user,
          communityInstance
        });
      }

      var vote = yield getExistingVote({
        user,
        post,
        amount,
        communityId
      });
      var undoInvest = !!vote;

      if (undoInvest && vote.isManualBet && vote.stakedTokens) {
        throw new Error('You cannot undo a vote once after you bet on a post.');
      }

      vote = undoInvest ? yield vote.removeVote({
        post,
        user
      }) : yield _invest.default.createVote({
        post,
        community,
        communityId,
        communityInstance,
        amount,
        user
      });
      var adjustVotes = undoInvest ? -1 : 1;
      post.data.upVotes += amount > 0 ? adjustVotes : 0;
      post.data.downVotes += amount < 0 ? adjustVotes : 0;
      post.data = yield post.data.save();
      var authorPagerank = author && (author.relevance.pagerank || 0);
      var initialPostRank = post.data.pagerank || 0;
      var updatePageRank = yield (0, _computeApproxPageRank.default)({
        communityId,
        author,
        post,
        vote,
        user,
        undoInvest
      });
      if (updatePageRank) ({
        author,
        post
      } = updatePageRank);

      if (vote && !undoInvest) {
        vote.rankChange = post.data.pagerank - initialPostRank;
        yield vote.save();
      }

      yield post.updateRank({
        communityId
      });
      post.data.expectedPayout = (0, _rewards.computePostPayout)(post.data, communityInstance);
      post = yield post.save();

      if (post.parentPost) {
        yield post.parentPost.updateRank({
          communityId
        });
        yield post.parentPost.save();
      }

      var subscription = yield updateSubscriptions({
        post,
        user,
        amount,
        communityId,
        community,
        undoInvest
      });
      res.status(200).json({
        investment: vote,
        success: true,
        subscription,
        undoInvest,
        rankChange: post.data.pagerank - initialPostRank
      }); // TODO - put the rest into queue on worker?

      post.updateClient();

      _earnings.default.updateEarnings({
        post,
        communityId
      }); // updates user votes


      user.voteCount = yield _invest.default.countDocuments({
        investor: user._id,
        amount: {
          $gt: 0
        }
      }); // updates follow & follower counts - deprecated?

      user = yield user.getSubscriptions();
      user = yield user.save();
      user.updateClient(); // updates author reputation and send notificaitons

      yield processNotifications({
        author,
        community,
        post,
        user,
        amount,
        authorPagerank,
        undoInvest,
        communityId
      });
    } catch (err) {
      next(err);
    }
  });

  return function create(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;

function getExistingVote(_x4) {
  return _getExistingVote.apply(this, arguments);
}

function _getExistingVote() {
  _getExistingVote = (0, _asyncToGenerator2.default)(function* (_ref2) {
    var {
      user,
      post,
      amount,
      communityId
    } = _ref2;
    var type = amount < 0 ? 'dowvote' : 'upvote'; // Don't let users downvote posts older than one week

    var now = new Date();
    var oneWeek = 1000 * 60 * 60 * 24 * 7;

    if (type === 'downvote' && post.data.postDate < now.getTime() - oneWeek && NODE_ENV === 'production') {
      throw new Error('you cannot downvote posts older than one week');
    }

    if (user._id.equals(post.user)) {
      throw new Error('You can not ' + type + ' your own comment');
    }

    var vote = yield _invest.default.findOne({
      investor: user._id,
      post: post._id,
      communityId
    });
    if (!vote) return null; // TODO undo invest

    var timeElapsed = now.getTime() - new Date(vote.createdAt).getTime(); // TODO 15m to update post is this fine?

    if (timeElapsed > 15 * 60 * 1000 && NODE_ENV === 'production') {
      throw new Error('You cannot change your vote after 15m');
    }

    if (new Date(post.data.payoutTime).getTime() < now.getTime() && NODE_ENV === 'production') {
      throw new Error('you cannot change your vote after post payout');
    }

    return vote;
  });
  return _getExistingVote.apply(this, arguments);
}

function updateSubscriptions(_x5) {
  return _updateSubscriptions.apply(this, arguments);
}

function _updateSubscriptions() {
  _updateSubscriptions = (0, _asyncToGenerator2.default)(function* (_ref3) {
    var {
      post,
      user,
      amount,
      undoInvest,
      communityId,
      community
    } = _ref3;
    if (amount < 0) return null;
    var subscription = yield _subscription.default.findOne({
      follower: user._id,
      following: post.user,
      communityId
    });
    if (!subscription && undoInvest) return null;

    if (!subscription) {
      subscription = new _subscription.default({
        follower: user._id,
        following: post.user,
        communityId,
        community,
        amount: 0
      });
    }

    var inc = undoInvest ? Math.max(-3, -subscription.amount) : 3;
    subscription.amount = Math.min(subscription.amount + inc, 20);
    return subscription.save();
  });
  return _updateSubscriptions.apply(this, arguments);
}

function sendAuthorNotification(_x6) {
  return _sendAuthorNotification.apply(this, arguments);
}

function _sendAuthorNotification() {
  _sendAuthorNotification = (0, _asyncToGenerator2.default)(function* (_ref4) {
    var {
      author,
      user,
      post,
      type,
      undoInvest,
      amount
    } = _ref4;
    if (!author) return null; // Remove notification if undo;

    if (undoInvest) {
      yield _notification.default.deleteOne({
        type,
        post: post._id,
        forUser: author._id,
        byUser: user._id
      }).exec();
      return null;
    }

    yield _notification.default.createNotification({
      post: post._id,
      forUser: author._id,
      byUser: user._id,
      amount,
      type
    });
    var action = type === 'upvote' ? ' thinks your comment is relevant' : ' upvoted a link you shared';
    var payload = {
      fromUser: user,
      toUser: author,
      post,
      action,
      noteType: type
    };
    var alert = user.name + action;

    try {
      (0, _notifications.sendNotification)(author, alert, payload);
    } catch (err) {
      console.log(err); // eslint-disable-line
    }

    return null;
  });
  return _sendAuthorNotification.apply(this, arguments);
}

function processNotifications(_x7) {
  return _processNotifications.apply(this, arguments);
}

function _processNotifications() {
  _processNotifications = (0, _asyncToGenerator2.default)(function* (params) {
    var {
      post,
      user,
      amount,
      authorPagerank,
      undoInvest
    } = params;
    var {
      author
    } = params;

    if (!author) {
      if (amount < 0) return null;
      var children = yield _post.default.find({
        parentPost: post._id,
        parentComment: {
          $exists: false
        }
      }).populate('user');
      var authors = children.map(child => child.user);
      var notes = authors.map(u => sendAuthorNotification({
        author: u,
        user,
        post,
        undoInvest,
        type: 'upvoteParent'
      }));
      return Promise.all(notes);
    }

    var pageRankChange = author.relevance ? author.relevance.pagerank - authorPagerank : 0;
    var type = 'upvote';
    author = yield author.save();
    author.updateClient(user);
    if (amount < 0) return null;
    yield sendAuthorNotification({
      author,
      user,
      post,
      undoInvest,
      amount: pageRankChange,
      type
    });
    return author;
  });
  return _processNotifications.apply(this, arguments);
}

function ratelimitVotes(_ref5) {
  var {
    user
  } = _ref5;
  var now = new Date();
  var elapsedTime = new Date(now).getTime() - new Date(user.lastVote || 0).getTime();

  if (elapsedTime < 5 * 1000 && NODE_ENV === 'production') {
    throw new Error('you cannot up-vote posts more often than 5s');
  }
}

function unhideTwitterComments(_x8) {
  return _unhideTwitterComments.apply(this, arguments);
}

function _unhideTwitterComments() {
  _unhideTwitterComments = (0, _asyncToGenerator2.default)(function* (_ref6) {
    var {
      amount,
      post,
      communityId,
      community
    } = _ref6;
    if (!post) return null;

    if (amount > 0 && post.hidden && post.parentPost) {
      yield post.parentPost.insertIntoFeed(communityId, community);
      post.hidden = false;
    }

    post.hidden = false;
    return post;
  });
  return _unhideTwitterComments.apply(this, arguments);
}

function ensurePagerank(_x9) {
  return _ensurePagerank.apply(this, arguments);
}

function _ensurePagerank() {
  _ensurePagerank = (0, _asyncToGenerator2.default)(function* (_ref7) {
    var {
      user,
      communityInstance
    } = _ref7;
    if (!user) return null;
    if (user.relevance) return user.relevance;
    return communityInstance.join(user._id);
  });
  return _ensurePagerank.apply(this, arguments);
}

function queryDb(_x10) {
  return _queryDb.apply(this, arguments);
}

function _queryDb() {
  _queryDb = (0, _asyncToGenerator2.default)(function* (_ref8) {
    var {
      userId,
      postId,
      communityId
    } = _ref8;
    var post = yield _post.default.findOne({
      _id: postId
    }).populate({
      path: 'parentPost'
    }).populate({
      path: 'data',
      match: {
        communityId
      }
    });
    var user = yield _user.default.findOne({
      _id: userId
    }, 'name balance ethAddress image lastVote votePower handle tokenBalance lockedTokens notificationSettings').populate({
      path: 'relevance',
      match: {
        communityId
      }
    });
    var author = yield _user.default.findOne({
      _id: post.user
    }, 'name handle image balance deviceTokens badge').populate({
      path: 'relevance',
      match: {
        communityId
      }
    });
    return {
      user,
      author,
      post
    };
  });
  return _queryDb.apply(this, arguments);
}
//# sourceMappingURL=createVote.js.map