"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _postData = _interopRequireDefault(require("../post/postData.model"));

var _globalConstants = require("../../config/globalConstants");

var _community = _interopRequireDefault(require("../community/community.model"));

var _communityMember = _interopRequireDefault(require("../community/community.member.model"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.index = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req) {
    // try {
    // TODO - right now sorting commentary by latest and relevance
    // only works for community's own posts
    // solution: populate postData then populate with postData post
    // TODO - for now isolate commentary to given community
    var {
      community
    } = req.query;
    var {
      user
    } = req;
    var skip = parseInt(req.query.skip, 10) || 0;
    var limit = parseInt(req.query.limit, 10) || 5;
    var tag = req.query.tag || null;
    var {
      sort
    } = req.query;
    var sortQuery;
    var commentarySort;
    if (!community) return [];
    var cObj = yield _community.default.findOne({
      slug: community
    }, '_id private');
    if (!cObj) return [];

    if (cObj.private) {
      if (!user) throw new Error('This community is private');
      var member = yield _communityMember.default.findOne({
        communityId: cObj._id,
        user: user._id
      });
      if (!member && user.role !== 'admin') throw new Error('This community is private');
    }

    var communityId = cObj._id;
    var query = {
      communityId,
      isInFeed: true
    };

    if (sort === 'rank') {
      sortQuery = {
        rank: -1
      };
      query.pagerank = {
        $gt: _globalConstants.MINIMUM_RANK
      };
      commentarySort = {
        pagerank: -1
      };
    } else {
      sortQuery = {
        latestComment: -1
      };
      commentarySort = {
        postDate: -1
      };
    }

    var blocked = [];

    if (req.user) {
      blocked = [...(req.user.blocked || []), ...(req.user.blockedBy || [])];
    }

    if (tag) query = _objectSpread(_objectSpread({}, query), {}, {
      tags: {
        $regex: "".concat(tag),
        $options: 'i'
      }
    });
    var myVote = user ? [{
      path: 'myVote',
      match: {
        investor: user._id,
        communityId
      }
    }] : [];
    var feed = yield _postData.default.find(query).sort(sortQuery).skip(skip).limit(limit).populate({
      path: 'post',
      populate: [...myVote, {
        path: 'commentary',
        match: {
          // TODO implement intra-community commentary
          communityId,
          type: 'post',
          // TODO - we should probably sort the non-community commentary
          // with some randomness on client side
          // repost: { $exists: false },
          user: {
            $nin: blocked
          },
          hidden: {
            $ne: true
          }
        },
        options: {
          sort: commentarySort
        },
        populate: [...myVote, {
          path: 'data'
        }, {
          path: 'embeddedUser.relevance',
          select: 'pagerank',
          match: {
            communityId
          }
        }]
      }, {
        path: 'metaPost'
      }, {
        path: 'embeddedUser.relevance',
        select: 'pagerank',
        match: {
          communityId
        }
      }]
    });
    var posts = [];
    feed.forEach( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* (f) {
        if (f.post) {
          // if (f.post.commentary.length && f.post.commentary.find(p => p.twitter)) {
          //   console.log(f.post.toObject());
          // }
          var data = _objectSpread({}, f.toObject());

          delete data.post;
          f.post.data = data;
          posts.push(f.post.toObject());
        } else {
          // just in case - this shouldn't happen
          console.log('error: post is null!', f.toObject()); // eslint-disable-line
          // await f.remove();
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    return posts;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=communityFeed.controller.js.map