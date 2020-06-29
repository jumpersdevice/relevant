"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleResults = handleResults;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _queue = _interopRequireDefault(require("queue"));

var _communityMember = _interopRequireDefault(require("../api/community/community.member.model"));

var _post = _interopRequireDefault(require("../api/post/post.model"));

var _postData = _interopRequireDefault(require("../api/post/postData.model"));

var _community = _interopRequireDefault(require("../api/community/community.model"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var q = (0, _queue.default)({
  concurrency: 10
});
var IS_TEST = process.env.NODE_ENV === 'test';
/* eslint no-console: 0 */

function handleResults(_x) {
  return _handleResults.apply(this, arguments);
}

function _handleResults() {
  _handleResults = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      scores,
      nodes,
      communityId,
      debug,
      postNodes
    } = _ref;
    var max = 0;
    var secondMax = 0;
    var min = 0;
    var maxPost = 0;
    var minPost = 0;
    Object.keys(scores).forEach(id => {
      var node = nodes[id];
      var isPost = node.type === 'post';
      var isUser = node.type === 'user';
      var score = scores[id] || 0;
      if (isPost) maxPost = Math.max(score.rank, maxPost);

      if (isUser) {
        secondMax = Math.max(secondMax, Math.min(score.rank, max));
        max = Math.max(score.rank, max);
      }

      node.rank = score.rank;
      node.degree = score.degree; // or node.degree note = for score degree we replace 0

      node.adjustedDegree = score.degree;
    });
    Object.values(postNodes).forEach(postNode => {
      Object.keys(postNode.inputs).forEach(inputId => {
        var inputNode = nodes[inputId];
        if (!inputNode) return;
        if (!inputNode.rank) return;
        var d = inputNode.degree + inputNode.postDegree; // increase degree if a node has any negative rank

        var negPosRatio = inputNode.prevNeg / inputNode.rank;
        var negDegree = inputNode.degree * negPosRatio;
        postNode.rank += inputNode.rank / (d + negDegree);
        inputNode.adjustedDegree = d + negDegree;
        maxPost = Math.max(postNode.rank, maxPost);
      });
    });
    var N = Object.keys(nodes).length;
    yield _community.default.findOneAndUpdate({
      _id: communityId
    }, {
      maxPostRank: maxPost || 50,
      maxUserRank: secondMax || 50,
      numberOfElements: N,
      danglingConsumer: nodes.danglingConsumer ? nodes.danglingConsumer.rank : 0,
      negConsumer: nodes.negConsumer ? nodes.negConsumer.rank : 0
    });
    postNodes = mergeNegativeNodes(postNodes);
    nodes = mergeNegativeNodes(nodes);
    var sortedNodes = [...Object.values(postNodes), ...Object.values(nodes)].filter(n => !n.negativeNode).sort((a, b) => a.rank - a.rankNeg - (b.rank - b.rankNeg));
    sortedNodes.forEach( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* (node) {
        q.push( /*#__PURE__*/function () {
          var _ref3 = (0, _asyncToGenerator2.default)(function* (cb) {
            yield updateItemRank({
              min,
              max,
              secondMax,
              minPost,
              maxPost,
              node,
              N,
              debug,
              communityId
            });
            cb();
          });

          return function (_x4) {
            return _ref3.apply(this, arguments);
          };
        }());
      });

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());
    return new Promise((resolve, reject) => q.start(err => {
      if (err) reject(err);
      resolve();
    }));
  });
  return _handleResults.apply(this, arguments);
}

function mergeNegativeNodes(nodes) {
  var newNodes = {};
  Object.values(nodes).forEach(node => {
    if (node.negativeNode) {
      var posNode = nodes[node._id.replace('__neg', '')];

      if (posNode) return;

      var _id = node._id.replace('__neg', '');

      newNodes[_id] = {
        _id,
        rank: 0,
        type: 'user',
        rankNeg: node.rank
      };
      return;
    }

    var negativeNode = nodes[node._id + '__neg'];
    node.rankNeg = negativeNode ? negativeNode.rank : 0;
  });
  return _objectSpread(_objectSpread({}, nodes), newNodes);
}

function updateItemRank(_x2) {
  return _updateItemRank.apply(this, arguments);
}

function _updateItemRank() {
  _updateItemRank = (0, _asyncToGenerator2.default)(function* (props) {
    var {
      secondMax,
      maxPost,
      node,
      N,
      debug,
      communityId
    } = props;
    var {
      min,
      minPost
    } = props;
    min = 0;
    minPost = 0;
    var rank;
    var userRank = Math.min(99, 100 * Math.log(N * (node.rank - min) + 1) / Math.log(N * (secondMax - min) + 1)) || 0;
    var userRankNeg = 100 * Math.log(N * (node.rankNeg - min) + 1) / Math.log(N * (secondMax - min) + 1) || 0;
    var postRank = 100 * Math.log(N * (node.rank - minPost) + 1) / Math.log(N * (maxPost - minPost) + 1) || 0;
    var postRankNeg = 100 * Math.log(N * (node.rankNeg - minPost) + 1) / Math.log(N * (maxPost - minPost) + 1) || 0;

    if (node.type === 'post') {
      rank = postRank - postRankNeg;
    }

    var voteWeight = 100 * Math.log(N * (node.rank / (1 + node.adjustedDegree) - min) + 1) / Math.log(N * (secondMax - min) + 1) || 0;

    if (debug) {
      var uRank = (userRank - userRankNeg).toFixed(2);
      console.log('name: ', node.handle || node.title || node._id, node._id);
      console.log('PageRank', uRank, 'pRank', userRank, 'pRankNeg', userRankNeg, 'weight', voteWeight, 'degree', node.adjustedDegree);
      console.log('-----');
    }

    if (node.type === 'user') {
      if (Number.isNaN(rank)) return null;
      var user = yield _communityMember.default.findOneAndUpdate({
        user: node._id,
        communityId
      }, {
        reputation: rank,
        degree: node.degree,
        postDegree: node.postDegree,
        pagerank: userRank,
        pagerankNeg: userRankNeg,
        pagerankRaw: node.rank,
        pagerankRawNeg: node.rankNeg
      }, {
        new: true,
        upsert: true
      });
      return user;
    }

    if (node.type === 'post') {
      if (Number.isNaN(rank)) return null;
      var post = yield _post.default.findOneAndUpdate({
        _id: node._id
      }, {
        pagerank: rank
      }, {
        new: true,
        fields: 'pagerank title rank relevance parentPost communityId postDate'
      });
      var postData = yield _postData.default.findOneAndUpdate({
        post: node._id,
        communityId
      }, {
        pagerank: IS_TEST ? rank.toFixed(2) : rank,
        pagerankRaw: node.rank,
        pagerankRawNeg: node.rankNeg
      }, {
        new: true,
        fields: 'pagerank pagerankRaw pagerankRawNeg post rank relevance postDate communityId needsRankUpdate'
      });

      if (postData && postData.needsRankUpdate) {
        postData.needsRankUpdate = false;
        post.data = postData;
        post = yield post.updateRank({
          communityId
        });
      }

      return post.data || postData;
    }

    return null;
  });
  return _updateItemRank.apply(this, arguments);
}
//# sourceMappingURL=handleResults.js.map