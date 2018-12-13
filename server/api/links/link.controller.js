import MetaPost from './link.model';
import Post from '../post/post.model';


function handleError(res, err) {
  console.log(err);
  return res.status(500).send(err);
}


exports.related = async req => {
  const postId = req.params.id;
  const post = await MetaPost.findOne({ commentary: postId }).populate('tags');
  const tagsArr = post.tags.filter(t => !t.category).map(t => t._id);
  const tags = tagsArr.join(' ');
  const keywords = post.keywords.join(' ');
  const search = `${tags} ${keywords} ${post.title}`.replace(/"|'/g, '');

  const posts = await MetaPost.find(
    { $text: { $search: search }, _id: { $ne: post._id } },
    { score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
    .limit(5);
  posts.forEach((p, i) => {
    console.log(i, ' ' + p.title);
  });
  return posts;
};


exports.index = async (req, res) => {
  try {
    let userId;
    let blocked = [];
    if (req.user) {
      userId = req.user._id;
      blocked = [...req.user.blocked || [], ...req.user.blockedBy || []];
    }

    const limit = parseInt(req.query.limit, 10) || 5;
    const skip = parseInt(req.query.skip, 10) || 0;
    const tags = req.query.tag || null;
    const sort = req.query.sort || null;
    let category = req.query.category || null;
    if (category === '') category = null;
    let query = { twitter: { $ne: true } };
    let tagsArr = null;
    let sortQuery;
    let commentarySort = { postDate: -1 };
    let posts;

    if (sort === 'rank') {
      sortQuery = { rank: -1 };
      commentarySort = { relevance: -1 };
    } else {
      sortQuery = { latestPost: -1 };
    }

    if (tags) {
      tagsArr = tags.split(',');
      query = { twitter: { $ne: true }, $or: [{ tags: { $in: tagsArr } }, { categories: { $in: tagsArr } }] };
    }

    posts = await MetaPost.find(query)
    // TODO - limit the commenatry and paginate / inf scroll it on backend
      .populate({
        path: 'commentary',
        // match: { user: { $nin: blocked } },
        match: {
          repost: { $exists: false },
          user: { $nin: blocked },
          $or: [{ twitter: { $ne: true } }, { relevance: { $gt: 0 } }] },
        options: { sort: commentarySort },
        populate: [
        // DEPRECATED (this is to support react-native 43 - but new version doesn't use metaPost anyway)
          {
            path: 'user',
            select: 'relevance name image'
          },
          // {
          //   path: 'embeddedUser.relevance',
          //   select: 'relevance'
          // },
          {
            path: 'reposted',
            select: 'user embeddedUser',
            options: { sort: { _id: -1 } },
          }
        ]
      })
      .limit(limit)
      .skip(skip)
      .sort(sortQuery);

    // TODO worker thread?
    if (userId) {
      const postIds = [];
      posts.forEach(meta => {
        meta.commentary.forEach(post => {
          if (!post.user) post.user = post.embeddedUser.id;
          postIds.push(post._id || post);
        });
      });
      Post.sendOutInvestInfo(postIds, userId);
    }
    res.status(200).json(posts);
  } catch (err) {
    handleError(res, err);
  }
};

exports.flagged = async (req, res) => {
  let meta;
  try {
    meta = await MetaPost.find({ flagged: true })
      .sort({ flaggedTime: -1 })
      .populate({
        path: 'commentary',
        // match: { repost: { $exists: false } },
        options: { sort: { postDate: -1 } },
        populate: [
          {
            path: 'user',
            select: 'relevance name image'
          }
        ]
      });
  } catch (err) {
    handleError(res, err);
  }
  res.status(200).json(meta);
};
