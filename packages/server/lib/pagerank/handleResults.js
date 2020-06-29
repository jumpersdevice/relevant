"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleResults = handleResults;

var _queue = _interopRequireDefault(require("queue"));

var _communityMember = _interopRequireDefault(require("../api/community/community.member.model"));

var _post = _interopRequireDefault(require("../api/post/post.model"));

var _postData = _interopRequireDefault(require("../api/post/postData.model"));

var _community = _interopRequireDefault(require("../api/community/community.model"));

const q = (0, _queue.default)({
  concurrency: 10
});
const IS_TEST = process.env.NODE_ENV === 'test';
/* eslint no-console: 0 */

async function handleResults({
  scores,
  nodes,
  communityId,
  debug,
  postNodes
}) {
  let max = 0;
  let secondMax = 0;
  const min = 0;
  let maxPost = 0;
  const minPost = 0;
  Object.keys(scores).forEach(id => {
    const node = nodes[id];
    const isPost = node.type === 'post';
    const isUser = node.type === 'user';
    const score = scores[id] || 0;
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
      const inputNode = nodes[inputId];
      if (!inputNode) return;
      if (!inputNode.rank) return;
      const d = inputNode.degree + inputNode.postDegree; // increase degree if a node has any negative rank

      const negPosRatio = inputNode.prevNeg / inputNode.rank;
      const negDegree = inputNode.degree * negPosRatio;
      postNode.rank += inputNode.rank / (d + negDegree);
      inputNode.adjustedDegree = d + negDegree;
      maxPost = Math.max(postNode.rank, maxPost);
    });
  });
  const N = Object.keys(nodes).length;
  await _community.default.findOneAndUpdate({
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
  const sortedNodes = [...Object.values(postNodes), ...Object.values(nodes)].filter(n => !n.negativeNode).sort((a, b) => a.rank - a.rankNeg - (b.rank - b.rankNeg));
  sortedNodes.forEach(async node => {
    q.push(async cb => {
      await updateItemRank({
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
  });
  return new Promise((resolve, reject) => q.start(err => {
    if (err) reject(err);
    resolve();
  }));
}

function mergeNegativeNodes(nodes) {
  const newNodes = {};
  Object.values(nodes).forEach(node => {
    if (node.negativeNode) {
      const posNode = nodes[node._id.replace('__neg', '')];

      if (posNode) return;

      const _id = node._id.replace('__neg', '');

      newNodes[_id] = {
        _id,
        rank: 0,
        type: 'user',
        rankNeg: node.rank
      };
      return;
    }

    const negativeNode = nodes[node._id + '__neg'];
    node.rankNeg = negativeNode ? negativeNode.rank : 0;
  });
  return { ...nodes,
    ...newNodes
  };
}

async function updateItemRank(props) {
  const {
    secondMax,
    maxPost,
    node,
    N,
    debug,
    communityId
  } = props;
  let {
    min,
    minPost
  } = props;
  min = 0;
  minPost = 0;
  let rank;
  const userRank = Math.min(99, 100 * Math.log(N * (node.rank - min) + 1) / Math.log(N * (secondMax - min) + 1)) || 0;
  const userRankNeg = 100 * Math.log(N * (node.rankNeg - min) + 1) / Math.log(N * (secondMax - min) + 1) || 0;
  const postRank = 100 * Math.log(N * (node.rank - minPost) + 1) / Math.log(N * (maxPost - minPost) + 1) || 0;
  const postRankNeg = 100 * Math.log(N * (node.rankNeg - minPost) + 1) / Math.log(N * (maxPost - minPost) + 1) || 0;

  if (node.type === 'post') {
    rank = postRank - postRankNeg;
  }

  const voteWeight = 100 * Math.log(N * (node.rank / (1 + node.adjustedDegree) - min) + 1) / Math.log(N * (secondMax - min) + 1) || 0;

  if (debug) {
    const uRank = (userRank - userRankNeg).toFixed(2);
    console.log('name: ', node.handle || node.title || node._id, node._id);
    console.log('PageRank', uRank, 'pRank', userRank, 'pRankNeg', userRankNeg, 'weight', voteWeight, 'degree', node.adjustedDegree);
    console.log('-----');
  }

  if (node.type === 'user') {
    if (Number.isNaN(rank)) return null;
    const user = await _communityMember.default.findOneAndUpdate({
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
    let post = await _post.default.findOneAndUpdate({
      _id: node._id
    }, {
      pagerank: rank
    }, {
      new: true,
      fields: 'pagerank title rank relevance parentPost communityId postDate'
    });
    const postData = await _postData.default.findOneAndUpdate({
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
      post = await post.updateRank({
        communityId
      });
    }

    return post.data || postData;
  }

  return null;
}
//# sourceMappingURL=handleResults.js.map