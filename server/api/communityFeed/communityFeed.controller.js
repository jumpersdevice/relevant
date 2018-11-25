import Feed from './communityFeed.model';
import Post from '../post/post.model';

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return (err) => {
    console.log(err);
    res.status(statusCode).send(err);
  };
}

exports.get = async (req, res) => {
  try {
    let community = req.subdomain || 'relevant';
    let user = req.user;

    let skip = parseInt(req.query.skip, 10) || 0;
    let limit = parseInt(req.query.limit, 10) || 5;
    let tag = req.query.tag || null;
    let sort = req.query.sort;
    let sortQuery;
    let commentarySort;

    if (sort === 'rank') {
      sortQuery = { rank: -1 };
      commentarySort = { relevance: -1 };
    } else {
      sortQuery = { latestPost: -1 };
      commentarySort = { postDate: -1 };
    }

    let blocked = [];
    if (req.user) {
      blocked = [...req.user.blocked || [], ...req.user.blockedBy || []];
    }

    let query = { community };

    if (tag) query = { tags: tag };
    let feed;
    let posts = [];

    feed = await Feed.find(query)
    .sort(sortQuery)
    .skip(skip)
    .limit(limit)
    .populate({
      path: 'metaPost',
      populate: [
        {
          path: 'commentary',
          match: {
            // this is a temp problem for twitter
            // community,

            // TODO - we should probably sort the non-community commentary
            // with some randomness on client side
            repost: { $exists: false },
            user: { $nin: blocked },
            $or: [{ twitter: { $ne: true } }, { relevance: { $gt: 0 } }],
          },
          options: { sort: commentarySort },
          populate: {
            path: 'embeddedUser.relevance',
            select: 'relevance'
          },
        },
      ]
    });

    feed.forEach(async (f) => {
      if (f.metaPost) {
        posts.push(f.metaPost);
      } else { // just in case - this shouldn't happen
        console.log('error: metapost is null!');
        await f.remove();
      }
    });

    // TODO worker thread?
    if (user) {
      let postIds = [];
      posts.forEach(meta => {
        meta.commentary.forEach(post => {
          // post.user = post.embeddedUser.id;
          postIds.push(post._id || post);
        });
      });
      Post.sendOutInvestInfo(postIds, user._id);
    }

    res.status(200).json(posts);
  } catch (err) {
    handleError(res)(err);
  }
};
