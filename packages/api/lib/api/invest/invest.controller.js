"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _invest = _interopRequireDefault(require("./invest.model"));

var _post = _interopRequireDefault(require("../post/post.model"));

var _community = _interopRequireDefault(require("../community/community.model"));

var _createVote = require("./createVote");

exports.create = _createVote.create;

exports.bet = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        user
      } = req;
      var {
        stakedTokens,
        postId: _id
      } = req.body;
      if (stakedTokens === 0) throw new Error("You don't have enough tokens to bet");
      var {
        communityId,
        community
      } = req.communityMember;
      var communityObj = yield _community.default.findOne({
        _id: communityId
      });

      if (communityObj.betEnabled === false) {
        throw new Error("This community doesn't support betting");
      }

      var post = yield _post.default.findOne({
        _id
      }).populate({
        path: 'data',
        match: {
          communityId
        }
      });
      var vote = yield _invest.default.findOne({
        post: _id,
        investor: user._id
      });
      if (!vote) throw new Error('You must upvote the post first');
      vote = yield vote.placeBet({
        post,
        community,
        communityId,
        stakedTokens,
        user
      });
      return res.status(200).json(vote);
    } catch (err) {
      return next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.postInvestments = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        postId
      } = req.params;
      var limit = parseInt(req.query.limit, 10);
      var skip = parseInt(req.query.skip, 10);
      var {
        community
      } = req.query;
      var investments = yield _invest.default.find({
        post: postId,
        amount: {
          $gt: 0
        }
      }).limit(limit).skip(skip).sort({
        createdAt: -1
      }).populate({
        path: 'investor',
        select: 'name image handle',
        populate: {
          path: 'relevance',
          match: {
            community
          }
        }
      });
      return res.status(200).json(investments);
    } catch (err) {
      return next(err);
    }
  });

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postvotes = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        postId
      } = req.params;
      var limit = parseInt(req.query.limit, 10);
      var skip = parseInt(req.query.skip, 10);
      var {
        community
      } = req.query;
      var votes = yield _invest.default.find({
        post: postId,
        amount: {
          $gt: 0
        }
      }).limit(limit).skip(skip).sort({
        createdAt: -1
      }).populate({
        path: 'investor',
        select: 'name image handle',
        populate: {
          path: 'relevance',
          match: {
            community
          }
        }
      });
      return res.status(200).json(votes);
    } catch (err) {
      return next(err);
    }
  });

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.downvotes = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    var limit = parseInt(req.query.limit, 10) || null;
    var skip = parseInt(req.query.skip, 10) || null;
    var downvotes;

    try {
      downvotes = yield _invest.default.find({
        amount: {
          $lt: 0
        }
      }).sort({
        createdAt: -1
      }).skip(skip).limit(limit).populate('post');
      return res.status(200).json(downvotes);
    } catch (err) {
      return next(err);
    }
  });

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.show = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        communityId
      } = req.communityMember;
      var {
        user
      } = req;
      var blocked = user ? [...user.blocked, ...user.blockedBy] : [];
      var limit = parseInt(req.query.limit, 10);
      var skip = parseInt(req.query.skip, 10);
      var userId = req.params.userId || null;
      var sortQuery = {
        createdAt: -1
      };
      var query = {
        investor: userId,
        amount: {
          $gt: 0
        }
      };

      if (blocked.find(u => u.toString() === userId.toString())) {
        return res.status(200).json({});
      }

      var votes = yield _invest.default.find(query).populate({
        path: 'post',
        populate: [{
          path: 'embeddedUser.relevance',
          match: {
            communityId
          }
        }, {
          path: 'data',
          select: 'pagerank'
        }, {
          path: 'metaPost'
        }]
      }).limit(limit).skip(skip).sort(sortQuery);
      return res.status(200).json(votes);
    } catch (err) {
      return next(err);
    }
  });

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
//# sourceMappingURL=invest.controller.js.map