import PostData from 'server/api/post/postData.model';
import { MINIMUM_RANK } from 'server/config/globalConstants';
import Community from 'server/api/community/community.model';
import CommunityMember from 'server/api/community/community.member.model';
import sanitizeHtml from 'sanitize-html';

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

  const cObj = await Community.findOne({ slug: community }, '_id private');
  if (!cObj) return [];

  if (cObj.private) {
    if (!user) throw new Error('This community is private');
    const member = await CommunityMember.findOne({
      communityId: cObj._id,
      user: user._id
    });
    if (!member && user.role !== 'admin') throw new Error('This community is private');
  }
  const communityId = cObj._id;

  let query = { communityId, isInFeed: true };
  if (sort === 'rank') {
    sortQuery = { rank: -1 };
    query.pagerank = { $gt: MINIMUM_RANK };
    commentarySort = { pagerank: -1 };
  } else {
    sortQuery = { latestComment: -1 };
    commentarySort = { postDate: -1 };
  }

  let blocked = [];
  if (req.user) {
    blocked = [...(req.user.blocked || []), ...(req.user.blockedBy || [])];
  }

  if (tag) query = { ...query, tags: { $regex: `${tag}`, $options: 'i' } };

  const myVote = user
    ? [
        {
          path: 'myVote',
          match: { investor: user._id, communityId },
          select: 'investor post amount communityId community'
        }
      ]
    : [];

  const feed = await PostData.find(
    query,
    `
      pagerank
      upVotes
      downVotes
      paidOut
      payoutTime
      post
      community
      communityId
    `
  )
    .sort(sortQuery)
    .skip(skip)
    .limit(limit)
    .populate({
      path: 'post',
      select: `
        embeddedUser
        user
        tags
        title
        body
        community
        communityId
        mentions
        type
        myVote
        commentCount
      `,
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
            user: { $nin: blocked },
            hidden: { $ne: true }
          },
          options: { sort: commentarySort },
          select: `
            embeddedUser
            user
            body
            parentPost
            parentComment
            linkParent
            myVote
          `,
          populate: [
            ...myVote,
            {
              path: 'data',
              select: `
                embeddedUser
                user
                tags
                body
                community
                communityId
                mentions
                type
                pagerank
                upVotes
                downVotes
                commentCount
              `
            },
            {
              path: 'embeddedUser.relevance',
              select: 'pagerank',
              match: { communityId }
            }
          ]
        },
        {
          path: 'metaPost',
          select: `
            title
            image
            url
            articleDate
            articleAuthor
            tags
            domain
          `
        },
        {
          path: 'embeddedUser.relevance',
          select: 'pagerank',
          match: { communityId }
        }
      ]
    });

  const posts = [];
  feed.forEach(async f => {
    if (f.post) {
      f.post.title = sanitizeHtml(f.post.title || '');
      f.post.body = sanitizeHtml(f.post.body);
      f.post.tags = f.post.tags.map(sanitizeHtml);
      const data = { ...f.toObject() };
      delete data.post;
      f.post.data = data;
      posts.push(f.post.toObject());
    } else {
      // this shouldn't happen
    }
  });

  return posts;
};
