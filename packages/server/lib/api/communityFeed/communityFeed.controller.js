'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _postData = _interopRequireDefault(require('../post/postData.model'));

var _globalConstants = require('../../config/globalConstants');

var _community = _interopRequireDefault(require('../community/community.model'));

var _communityMember = _interopRequireDefault(
  require('../community/community.member.model')
);

exports.index = async req => {
  // try {
  // TODO - right now sorting commentary by latest and relevance
  // only works for community's own posts
  // solution: populate postData then populate with postData post
  // TODO - for now isolate commentary to given community
  const { community } = req.query;
  const { user } = req;
  const skip = parseInt(req.query.skip, 10) || 0;
  const limit = parseInt(req.query.limit, 10) || 5;
  const tag = req.query.tag || null;
  const { sort } = req.query;
  let sortQuery;
  let commentarySort;
  if (!community) return [];
  const cObj = await _community.default.findOne(
    {
      slug: community
    },
    '_id private'
  );
  if (!cObj) return [];

  if (cObj.private) {
    if (!user) throw new Error('This community is private');
    const member = await _communityMember.default.findOne({
      communityId: cObj._id,
      user: user._id
    });
    if (!member && user.role !== 'admin') throw new Error('This community is private');
  }

  const communityId = cObj._id;
  let query = {
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

  let blocked = [];

  if (req.user) {
    blocked = [...(req.user.blocked || []), ...(req.user.blockedBy || [])];
  }

  if (tag)
    query = {
      ...query,
      tags: {
        $regex: `${tag}`,
        $options: 'i'
      }
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
  const feed = await _postData.default
    .find(query)
    .sort(sortQuery)
    .skip(skip)
    .limit(limit)
    .populate({
      path: 'post',
      populate: [
        ...myVote,
        {
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
          populate: [
            ...myVote,
            {
              path: 'data'
            },
            {
              path: 'embeddedUser.relevance',
              select: 'pagerank',
              match: {
                communityId
              }
            }
          ]
        },
        {
          path: 'metaPost'
        },
        {
          path: 'embeddedUser.relevance',
          select: 'pagerank',
          match: {
            communityId
          }
        }
      ]
    });
  const posts = [];
  feed.forEach(async f => {
    if (f.post) {
      // if (f.post.commentary.length && f.post.commentary.find(p => p.twitter)) {
      //   console.log(f.post.toObject());
      // }
      const data = { ...f.toObject() };
      delete data.post;
      f.post.data = data;
      posts.push(f.post.toObject());
    } else {
      // just in case - this shouldn't happen
      console.log('error: post is null!', f.toObject()); // eslint-disable-line
      // await f.remove();
    }
  });
  return posts;
};
//# sourceMappingURL=communityFeed.controller.js.map
