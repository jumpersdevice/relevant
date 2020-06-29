"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeApproxPageRank;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _invest = _interopRequireDefault(require("../api/invest/invest.model"));

var _communityMember = _interopRequireDefault(require("../api/community/community.member.model"));

var _community = _interopRequireDefault(require("../api/community/community.model"));

function computeApproxPageRank(_x) {
  return _computeApproxPageRank.apply(this, arguments);
}

function _computeApproxPageRank() {
  _computeApproxPageRank = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      author,
      post,
      user,
      communityId,
      vote,
      undoInvest
    } = _ref;

    try {
      var com = yield _community.default.findOne({
        _id: communityId
      }, 'maxUserRank maxPostRank numberOfElements');
      var member = yield _communityMember.default.findOne({
        communityId,
        user: user._id
      });
      var amount;
      if (vote) amount = vote.amount;
      var N = com.numberOfElements;
      var {
        maxUserRank,
        maxPostRank
      } = com; // if user relevance object doesn't exist, there is nothing to update

      if (!user.relevance || user.relevance.pagerankRaw <= 0) return {
        author,
        post
      };
      var userR = user.relevance ? user.relevance.pagerankRaw : 0;
      var authorId = author ? author._id : null;

      if (author && !author.relevance) {
        author.relevance = yield _communityMember.default.findOne({
          user: author._id,
          communityId
        });
      } // Need a way to 0 out post votes and user votes


      var postVotes = true;
      var userVotes = true;

      if (undoInvest) {
        postVotes = yield _invest.default.countDocuments({
          post: post._id,
          ownPost: false
        });

        if (!postVotes && post) {
          post.data.pagerank = 0;
          post.data.pagerankRaw = 0;
          post.data.pagerankRawNeg = 0;
          yield post.data.save();
        }

        userVotes = yield _invest.default.countDocuments({
          author: authorId,
          ownPost: false
        });

        if (!userVotes && author) {
          author.relevance.pagerank = 0;
          author.relevance.pagerankRaw = 0;
          yield author.relevance.save();
        }

        if (!postVotes && !userVotes) {
          return {
            author,
            post
          };
        }
      }

      var negPosRatio = member.pagerankRaw ? member.pagerankRawNeg / member.pagerankRaw : 0;
      var userDegree = member.degree * (1 + negPosRatio) + 1;
      var mergedDegree = member.degree + member.postDegree;
      var postDegree = mergedDegree * (1 + negPosRatio) + 1;
      var a = Math.abs(amount);
      var uInc = a / userDegree * userR;
      var pInc = a / postDegree * userR;
      var uDownvoteInc = uInc / 3;

      if (amount >= 0) {
        if (undoInvest) {
          if (author && userVotes) author.relevance.pagerankRaw -= uInc;
          if (post && postVotes) post.data.pagerankRaw -= pInc;
        } else {
          if (author) author.relevance.pagerankRaw += uInc;
          if (post) post.data.pagerankRaw += pInc;
        }
      } else if (amount < 0) {
        if (undoInvest) {
          if (author && userVotes) {
            author.relevance.pagerankRaw += uDownvoteInc;
          }

          if (post && postVotes) post.data.pagerankRawNeg -= pInc;
        } else {
          if (author) author.relevance.pagerankRaw -= uDownvoteInc;
          if (post) post.data.pagerankRawNeg += pInc;
        }
      }

      if (author) {
        var rA = author ? Math.max(author.relevance.pagerankRaw, 0) : 0;
        author.relevance.pagerank = Math.min(99, 100 * Math.log(N * rA + 1) / Math.log(N * maxUserRank + 1));
      }

      if (post) {
        var pRank = Math.max(post.data.pagerankRaw, 0);
        var pRankNeg = Math.max(post.data.pagerankRawNeg || 0, 0);
        var normRank = Math.min(100, 100 * Math.log(N * pRank + 1) / Math.log(N * maxPostRank + 1));
        var normRankNeg = Math.min(100, 100 * Math.log(N * pRankNeg + 1) / Math.log(N * maxPostRank + 1));
        post.data.pagerank = normRank - normRankNeg;
        yield post.updateRank({
          communityId
        });
      }

      yield Promise.all([post ? post.data.save() : null, author ? author.relevance.save() : null]);
      return {
        author,
        post
      };
    } catch (err) {
      console.log('page rank approx error ', err); // eslint-disable-line

      return null;
    }
  });
  return _computeApproxPageRank.apply(this, arguments);
}
//# sourceMappingURL=computeApproxPageRank.js.map