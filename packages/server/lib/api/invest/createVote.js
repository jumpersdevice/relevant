"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

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

const {
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

const create = async (req, res, next) => {
  try {
    const {
      community,
      communityId
    } = req.communityMember;
    const communityInstance = await _community.default.findOne({
      _id: communityId
    });
    const userId = req.user._id;
    const postId = req.body.post;
    let {
      amount
    } = req.body; // amount should be on a scale of -1 to 1 to prevent abuse;

    amount = Math.max(-1, amount);
    amount = Math.min(1, amount);
    let {
      post,
      user,
      author
    } = await queryDb({
      userId,
      postId,
      communityId
    });
    post = await unhideTwitterComments({
      amount,
      post,
      communityId,
      community
    }); // TODO create twitter user authors!

    ratelimitVotes({
      user
    });

    if (author) {
      author.relevance = await ensurePagerank({
        user: author,
        communityInstance
      });
    }

    if (user) {
      user.relevance = await ensurePagerank({
        user,
        communityInstance
      });
    }

    let vote = await getExistingVote({
      user,
      post,
      amount,
      communityId
    });
    const undoInvest = !!vote;

    if (undoInvest && vote.isManualBet && vote.stakedTokens) {
      throw new Error('You cannot undo a vote once after you bet on a post.');
    }

    vote = undoInvest ? await vote.removeVote({
      post,
      user
    }) : await _invest.default.createVote({
      post,
      community,
      communityId,
      communityInstance,
      amount,
      user
    });
    const adjustVotes = undoInvest ? -1 : 1;
    post.data.upVotes += amount > 0 ? adjustVotes : 0;
    post.data.downVotes += amount < 0 ? adjustVotes : 0;
    post.data = await post.data.save();
    const authorPagerank = author && (author.relevance.pagerank || 0);
    const initialPostRank = post.data.pagerank || 0;
    const updatePageRank = await (0, _computeApproxPageRank.default)({
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
      await vote.save();
    }

    await post.updateRank({
      communityId
    });
    post.data.expectedPayout = (0, _rewards.computePostPayout)(post.data, communityInstance);
    post = await post.save();

    if (post.parentPost) {
      await post.parentPost.updateRank({
        communityId
      });
      await post.parentPost.save();
    }

    const subscription = await updateSubscriptions({
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


    user.voteCount = await _invest.default.countDocuments({
      investor: user._id,
      amount: {
        $gt: 0
      }
    }); // updates follow & follower counts - deprecated?

    user = await user.getSubscriptions();
    user = await user.save();
    user.updateClient(); // updates author reputation and send notificaitons

    await processNotifications({
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
};

exports.create = create;

async function getExistingVote({
  user,
  post,
  amount,
  communityId
}) {
  const type = amount < 0 ? 'dowvote' : 'upvote'; // Don't let users downvote posts older than one week

  const now = new Date();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;

  if (type === 'downvote' && post.data.postDate < now.getTime() - oneWeek && NODE_ENV === 'production') {
    throw new Error('you cannot downvote posts older than one week');
  }

  if (user._id.equals(post.user)) {
    throw new Error('You can not ' + type + ' your own comment');
  }

  const vote = await _invest.default.findOne({
    investor: user._id,
    post: post._id,
    communityId
  });
  if (!vote) return null; // TODO undo invest

  const timeElapsed = now.getTime() - new Date(vote.createdAt).getTime(); // TODO 15m to update post is this fine?

  if (timeElapsed > 15 * 60 * 1000 && NODE_ENV === 'production') {
    throw new Error('You cannot change your vote after 15m');
  }

  if (new Date(post.data.payoutTime).getTime() < now.getTime() && NODE_ENV === 'production') {
    throw new Error('you cannot change your vote after post payout');
  }

  return vote;
}

async function updateSubscriptions({
  post,
  user,
  amount,
  undoInvest,
  communityId,
  community
}) {
  if (amount < 0) return null;
  let subscription = await _subscription.default.findOne({
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

  const inc = undoInvest ? Math.max(-3, -subscription.amount) : 3;
  subscription.amount = Math.min(subscription.amount + inc, 20);
  return subscription.save();
}

async function sendAuthorNotification({
  author,
  user,
  post,
  type,
  undoInvest,
  amount
}) {
  if (!author) return null; // Remove notification if undo;

  if (undoInvest) {
    await _notification.default.deleteOne({
      type,
      post: post._id,
      forUser: author._id,
      byUser: user._id
    }).exec();
    return null;
  }

  await _notification.default.createNotification({
    post: post._id,
    forUser: author._id,
    byUser: user._id,
    amount,
    type
  });
  const action = type === 'upvote' ? ' thinks your comment is relevant' : ' upvoted a link you shared';
  const payload = {
    fromUser: user,
    toUser: author,
    post,
    action,
    noteType: type
  };
  const alert = user.name + action;

  try {
    (0, _notifications.sendNotification)(author, alert, payload);
  } catch (err) {
    console.log(err); // eslint-disable-line
  }

  return null;
}

async function processNotifications(params) {
  const {
    post,
    user,
    amount,
    authorPagerank,
    undoInvest
  } = params;
  let {
    author
  } = params;

  if (!author) {
    if (amount < 0) return null;
    const children = await _post.default.find({
      parentPost: post._id,
      parentComment: {
        $exists: false
      }
    }).populate('user');
    const authors = children.map(child => child.user);
    const notes = authors.map(u => sendAuthorNotification({
      author: u,
      user,
      post,
      undoInvest,
      type: 'upvoteParent'
    }));
    return Promise.all(notes);
  }

  const pageRankChange = author.relevance ? author.relevance.pagerank - authorPagerank : 0;
  const type = 'upvote';
  author = await author.save();
  author.updateClient(user);
  if (amount < 0) return null;
  await sendAuthorNotification({
    author,
    user,
    post,
    undoInvest,
    amount: pageRankChange,
    type
  });
  return author;
}

function ratelimitVotes({
  user
}) {
  const now = new Date();
  const elapsedTime = new Date(now).getTime() - new Date(user.lastVote || 0).getTime();

  if (elapsedTime < 5 * 1000 && NODE_ENV === 'production') {
    throw new Error('you cannot up-vote posts more often than 5s');
  }
}

async function unhideTwitterComments({
  amount,
  post,
  communityId,
  community
}) {
  if (!post) return null;

  if (amount > 0 && post.hidden && post.parentPost) {
    await post.parentPost.insertIntoFeed(communityId, community);
    post.hidden = false;
  }

  post.hidden = false;
  return post;
}

async function ensurePagerank({
  user,
  communityInstance
}) {
  if (!user) return null;
  if (user.relevance) return user.relevance;
  return communityInstance.join(user._id);
}

async function queryDb({
  userId,
  postId,
  communityId
}) {
  const post = await _post.default.findOne({
    _id: postId
  }).populate({
    path: 'parentPost'
  }).populate({
    path: 'data',
    match: {
      communityId
    }
  });
  const user = await _user.default.findOne({
    _id: userId
  }, 'name balance ethAddress image lastVote votePower handle tokenBalance lockedTokens notificationSettings').populate({
    path: 'relevance',
    match: {
      communityId
    }
  });
  const author = await _user.default.findOne({
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
}
//# sourceMappingURL=createVote.js.map