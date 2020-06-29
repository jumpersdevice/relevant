'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _community = _interopRequireDefault(require('../community/community.model'));

var _text = require('@r3l/app/lib/utils/text');

var _notifications = require('../../notifications');

var _socketEvent = _interopRequireDefault(require('../../socket/socketEvent'));

var _post = _interopRequireDefault(require('../post/post.model'));

var _user = _interopRequireDefault(require('../user/user.model'));

var _notification = _interopRequireDefault(require('../notification/notification.model'));

var _invest = _interopRequireDefault(require('../invest/invest.model'));

var _community2 = require('../community/community.auth');

// COMMENTS ARE USING POST SCHEMA
exports.index = async req => {
  // TODO - pagination
  // const limit = parseInt(req.query.limit, 10) || 10;
  // const skip = parseInt(req.query.skip, 10) || 0;
  const { user } = req;
  const { community, post } = req.query;
  if (!post) throw Error('missing parent post id');
  const cObj = await _community.default.findOne(
    {
      slug: community
    },
    '_id'
  );
  const communityId = cObj._id;
  const query = {
    parentPost: post,
    hidden: {
      $ne: true
    },
    communityId
  };
  const myVote = user
    ? [
        {
          path: 'myVote',
          match: {
            investor: user._id,
            communityId
          }
        }
      ]
    : [];
  const comments = await _post.default
    .find(query)
    .populate([
      ...myVote,
      {
        path: 'embeddedUser.relevance',
        select: 'pagerank',
        match: {
          communityId
        }
      },
      {
        path: 'data',
        match: {
          communityId
        }
      }
    ])
    .sort({
      pagerank: -1,
      createdAt: 1
    });
  return {
    data: comments.map(c => c.toObject())
  };
};

exports.create = async (req, res, next) => {
  try {
    let user = req.user._id;
    const { communityMember } = req;
    const { community, communityId } = communityMember;
    await (0, _community2.checkCommunityAuth)({
      user: req.user,
      communityId,
      communityMember
    });
    const { linkParent, text: body, repost = false, metaPost } = req.body;
    let { parentPost, parentComment, mentions = [], tags = [] } = req.body;
    const type = !parentComment || parentComment === parentPost ? 'post' : 'comment';
    const words = (0, _text.getWords)(body);
    const mentionsFromBody = (0, _text.getMentions)(words);
    const tagsFromBody = (0, _text.getTags)(words);
    tags = [...new Set([...tags, ...tagsFromBody])];
    mentions = [...new Set([...mentions, ...mentionsFromBody])];
    const commentObj = {
      body,
      mentions,
      tags,
      parentPost,
      linkParent,
      parentComment,
      user,
      type,
      eligibleForRewards: true,
      postDate: new Date(),
      community,
      communityId,
      metaPost
    };
    let comment = new _post.default(commentObj);
    user = await _user.default.findOne({
      _id: user
    });

    if (user.banned) {
      throw new Error(
        'You are temporarily blocked from making comments, if you think this is an error, please reach out to info@relevant.community'
      );
    }

    parentPost = await _post.default.findOne({
      _id: parentPost
    });
    parentComment = await _post.default.findOne({
      _id: parentComment
    });
    comment = await comment.addUserInfo(user);
    comment = await comment.addPostData(); // this will also save the new comment

    comment = await _post.default.sendOutMentions(mentions, comment, user, comment);
    const updateTime = type === 'post' || false;
    await parentPost.updateRank({
      communityId,
      updateTime
    });

    if (tags && tags.length) {
      parentPost = await parentPost.addTags({
        tags,
        communityId
      });
    }

    parentPost = await parentPost.save();
    parentPost.updateClient();
    const postAuthor = await _user.default.findOne(
      {
        _id: parentPost.user
      },
      'name _id deviceTokens handle email notificationSettings'
    );
    const commentAuthor =
      parentComment &&
      (await _user.default.findOne(
        {
          _id: parentComment.user
        },
        'name _id deviceTokens handle email notificationSettings'
      ));
    let otherCommentors = await _post.default
      .find({
        parentPost: parentPost._id
      })
      .populate('user', 'name _id deviceTokens handle email notificationSettings');
    otherCommentors = otherCommentors.map(comm => comm.user).filter(u => u);
    if (postAuthor) otherCommentors.push(postAuthor);
    if (commentAuthor) otherCommentors.push(commentAuthor);
    let voters = await _invest.default
      .find({
        post: parentPost._id
      })
      .populate('investor', 'name _id deviceTokens handle email notificationSettings');
    let commentVoters =
      parentComment &&
      (await _invest.default
        .find({
          post: parentComment._id
        })
        .populate('investor', 'name _id deviceTokens handle email notificationSettings'));
    commentVoters = commentVoters ? commentVoters.map(v => v.investor) : [];
    voters = voters.map(v => v.investor);
    otherCommentors = [...otherCommentors, ...voters, ...commentVoters];
    otherCommentors = otherCommentors.filter(u => u); // filter out duplicates

    otherCommentors = otherCommentors.filter((u, i) => {
      const index = otherCommentors.findIndex(c => (c ? c._id.equals(u._id) : false));
      return index === i;
    });
    await comment.save();
    res.status(200).json(comment);
    otherCommentors = otherCommentors.filter(u => !mentions.find(m => m === u.handle));
    otherCommentors.forEach(commentor =>
      sendNotifications({
        commentor,
        postAuthor,
        commentAuthor,
        repost,
        parentPost,
        user,
        comment,
        type
      })
    );
  } catch (err) {
    next(err);
  }
};

async function sendNotifications({
  commentor,
  postAuthor,
  commentAuthor,
  repost,
  user,
  comment,
  type
}) {
  if (user._id.equals(commentor._id)) return;

  const ownPost = postAuthor && commentor._id.equals(postAuthor._id);

  const ownComment = commentAuthor && commentor._id.equals(commentAuthor._id);

  const noteType = !ownPost && !ownComment ? 'commentAlso' : 'comment';
  if (repost && ownPost) type = 'repost';
  let note = {
    post: comment._id,
    forUser: commentor._id,
    byUser: user._id,
    amount: null,
    type: noteType,
    source: type,
    personal: true,
    read: false
  };
  note = new _notification.default(note);
  note = await note.save();
  const noteAction = {
    _id: commentor._id,
    type: 'ADD_ACTIVITY',
    payload: note
  };

  _socketEvent.default.emit('socketEvent', noteAction);

  let action = ` replied to ${ownPost || ownComment ? 'your' : 'a'} ${type}`;
  if (type === 'repost' && ownPost) action = ` reposted your ${type}`;
  const alert = user.name + action;
  const payload = {
    fromUser: user,
    toUser: commentor,
    post: comment,
    action,
    noteType: ownPost || ownComment ? 'reply' : 'general'
  };
  (0, _notifications.sendNotification)(commentor, alert, payload);
}

exports.update = async (req, res, next) => {
  try {
    const comment = req.body;
    const { user } = req;
    const { mentions } = comment;
    let newMentions;
    const newComment = await _post.default.findOne({
      _id: comment._id
    });
    if (!user._id.equals(newComment.user)) throw new Error("Can't edit other's comments");
    newComment.body = req.body.body;
    newMentions = mentions.filter(m => newComment.mentions.indexOf(m) < 0);
    newComment.mentions = mentions;
    newMentions = newMentions || [];

    if (newMentions.length) {
      _post.default.sendOutMentions(mentions, newComment, newComment.user, newComment);
    }

    await newComment.save();
    res.json(200, newComment);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;
    const query = {
      _id: id,
      user: userId
    };
    const comment = await _post.default.findOne(query);
    if (!comment) throw new Error("Comment doesn't exist");

    if (comment.repost) {
      await _post.default
        .findOne({
          'repost.comment': id
        })
        .remove();
    }

    const post = await _post.default
      .findOneAndUpdate(
        {
          _id: comment.parentPost
        },
        {
          $inc: {
            commentCount: -1
          }
        },
        {
          new: true
        }
      )
      .exec();
    await comment.remove();
    if (post) post.updateClient();
    return res.json(200, true);
  } catch (err) {
    return next(err);
  }
};
//# sourceMappingURL=comment.controller.js.map
