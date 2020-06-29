'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

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
exports.index = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2.default)(function*(req) {
    // TODO - pagination
    // const limit = parseInt(req.query.limit, 10) || 10;
    // const skip = parseInt(req.query.skip, 10) || 0;
    var { user } = req;
    var { community, post } = req.query;
    if (!post) throw Error('missing parent post id');
    var cObj = yield _community.default.findOne(
      {
        slug: community
      },
      '_id'
    );
    var communityId = cObj._id;
    var query = {
      parentPost: post,
      hidden: {
        $ne: true
      },
      communityId
    };
    var myVote = user
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
    var comments = yield _post.default
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
  });

  return function(_x) {
    return _ref.apply(this, arguments);
  };
})();

exports.create = /*#__PURE__*/ (function() {
  var _ref2 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var user = req.user._id;
      var { communityMember } = req;
      var { community, communityId } = communityMember;
      yield (0, _community2.checkCommunityAuth)({
        user: req.user,
        communityId,
        communityMember
      });
      var { linkParent, text: body, repost = false, metaPost } = req.body;
      var { parentPost, parentComment, mentions = [], tags = [] } = req.body;
      var type = !parentComment || parentComment === parentPost ? 'post' : 'comment';
      var words = (0, _text.getWords)(body);
      var mentionsFromBody = (0, _text.getMentions)(words);
      var tagsFromBody = (0, _text.getTags)(words);
      tags = [...new Set([...tags, ...tagsFromBody])];
      mentions = [...new Set([...mentions, ...mentionsFromBody])];
      var commentObj = {
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
      var comment = new _post.default(commentObj);
      user = yield _user.default.findOne({
        _id: user
      });

      if (user.banned) {
        throw new Error(
          'You are temporarily blocked from making comments, if you think this is an error, please reach out to info@relevant.community'
        );
      }

      parentPost = yield _post.default.findOne({
        _id: parentPost
      });
      parentComment = yield _post.default.findOne({
        _id: parentComment
      });
      comment = yield comment.addUserInfo(user);
      comment = yield comment.addPostData(); // this will also save the new comment

      comment = yield _post.default.sendOutMentions(mentions, comment, user, comment);
      var updateTime = type === 'post' || false;
      yield parentPost.updateRank({
        communityId,
        updateTime
      });

      if (tags && tags.length) {
        parentPost = yield parentPost.addTags({
          tags,
          communityId
        });
      }

      parentPost = yield parentPost.save();
      parentPost.updateClient();
      var postAuthor = yield _user.default.findOne(
        {
          _id: parentPost.user
        },
        'name _id deviceTokens handle email notificationSettings'
      );
      var commentAuthor =
        parentComment &&
        (yield _user.default.findOne(
          {
            _id: parentComment.user
          },
          'name _id deviceTokens handle email notificationSettings'
        ));
      var otherCommentors = yield _post.default
        .find({
          parentPost: parentPost._id
        })
        .populate('user', 'name _id deviceTokens handle email notificationSettings');
      otherCommentors = otherCommentors.map(comm => comm.user).filter(u => u);
      if (postAuthor) otherCommentors.push(postAuthor);
      if (commentAuthor) otherCommentors.push(commentAuthor);
      var voters = yield _invest.default
        .find({
          post: parentPost._id
        })
        .populate('investor', 'name _id deviceTokens handle email notificationSettings');
      var commentVoters =
        parentComment &&
        (yield _invest.default
          .find({
            post: parentComment._id
          })
          .populate(
            'investor',
            'name _id deviceTokens handle email notificationSettings'
          ));
      commentVoters = commentVoters ? commentVoters.map(v => v.investor) : [];
      voters = voters.map(v => v.investor);
      otherCommentors = [...otherCommentors, ...voters, ...commentVoters];
      otherCommentors = otherCommentors.filter(u => u); // filter out duplicates

      otherCommentors = otherCommentors.filter((u, i) => {
        var index = otherCommentors.findIndex(c => (c ? c._id.equals(u._id) : false));
        return index === i;
      });
      yield comment.save();
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
  });

  return function(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();

function sendNotifications(_x5) {
  return _sendNotifications.apply(this, arguments);
}

function _sendNotifications() {
  _sendNotifications = (0, _asyncToGenerator2.default)(function*(_ref3) {
    var { commentor, postAuthor, commentAuthor, repost, user, comment, type } = _ref3;
    if (user._id.equals(commentor._id)) return;

    var ownPost = postAuthor && commentor._id.equals(postAuthor._id);

    var ownComment = commentAuthor && commentor._id.equals(commentAuthor._id);

    var noteType = !ownPost && !ownComment ? 'commentAlso' : 'comment';
    if (repost && ownPost) type = 'repost';
    var note = {
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
    note = yield note.save();
    var noteAction = {
      _id: commentor._id,
      type: 'ADD_ACTIVITY',
      payload: note
    };

    _socketEvent.default.emit('socketEvent', noteAction);

    var action = ' replied to '
      .concat(ownPost || ownComment ? 'your' : 'a', ' ')
      .concat(type);
    if (type === 'repost' && ownPost) action = ' reposted your '.concat(type);
    var alert = user.name + action;
    var payload = {
      fromUser: user,
      toUser: commentor,
      post: comment,
      action,
      noteType: ownPost || ownComment ? 'reply' : 'general'
    };
    (0, _notifications.sendNotification)(commentor, alert, payload);
  });
  return _sendNotifications.apply(this, arguments);
}

exports.update = /*#__PURE__*/ (function() {
  var _ref4 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var comment = req.body;
      var { user } = req;
      var { mentions } = comment;
      var newMentions;
      var newComment = yield _post.default.findOne({
        _id: comment._id
      });
      if (!user._id.equals(newComment.user))
        throw new Error("Can't edit other's comments");
      newComment.body = req.body.body;
      newMentions = mentions.filter(m => newComment.mentions.indexOf(m) < 0);
      newComment.mentions = mentions;
      newMentions = newMentions || [];

      if (newMentions.length) {
        _post.default.sendOutMentions(mentions, newComment, newComment.user, newComment);
      }

      yield newComment.save();
      res.json(200, newComment);
    } catch (err) {
      next(err);
    }
  });

  return function(_x6, _x7, _x8) {
    return _ref4.apply(this, arguments);
  };
})();

exports.delete = /*#__PURE__*/ (function() {
  var _ref5 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var userId = req.user._id;
      var { id } = req.params;
      var query = {
        _id: id,
        user: userId
      };
      var comment = yield _post.default.findOne(query);
      if (!comment) throw new Error("Comment doesn't exist");

      if (comment.repost) {
        yield _post.default
          .findOne({
            'repost.comment': id
          })
          .remove();
      }

      var post = yield _post.default
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
      yield comment.remove();
      if (post) post.updateClient();
      return res.json(200, true);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x9, _x10, _x11) {
    return _ref5.apply(this, arguments);
  };
})();
//# sourceMappingURL=comment.controller.js.map
