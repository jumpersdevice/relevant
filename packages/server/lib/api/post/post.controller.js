"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _url2 = _interopRequireDefault(require("url"));

var _request = _interopRequireDefault(require("request"));

var _get = _interopRequireDefault(require("lodash/get"));

var _socketEvent = _interopRequireDefault(require("../../socket/socketEvent"));

var _community = _interopRequireDefault(require("../community/community.model"));

var _mail = require("../../utils/mail");

var _notifications = require("../../notifications");

var _community2 = require("../community/community.auth");

var proxyHelpers = _interopRequireWildcard(require("./html"));

var _link = _interopRequireDefault(require("./link.model"));

var _post = _interopRequireDefault(require("./post.model"));

var _user = _interopRequireDefault(require("../user/user.model"));

var _subscription = _interopRequireDefault(require("../subscription/subscription.model"));

var _feed = _interopRequireDefault(require("../feed/feed.model"));

var _tag = _interopRequireDefault(require("../tag/tag.model"));

var _notification = _interopRequireDefault(require("../notification/notification.model"));

var _postData = _interopRequireDefault(require("./postData.model"));

var _globalConstants = require("../../config/globalConstants");

const {
  promisify
} = require('util');

const requestAsync = promisify(_request.default);

_request.default.defaults({
  maxRedirects: 22,
  jar: true
});

async function findRelatedPosts(metaId) {
  try {
    const post = await _link.default.findOne({
      _id: metaId
    }).populate('tags');
    const tagsArr = post.tags.filter(t => !t.category).map(t => t._id);
    const tags = tagsArr.join(' ');
    const keywords = post.keywords.join(' ');
    const search = `${tags} ${keywords} ${post.title}`.replace(/"|'/g, '');
    const posts = await _link.default.find({
      $text: {
        $search: search
      },
      _id: {
        $ne: metaId
      }
    }, {
      score: {
        $meta: 'textScore'
      }
    }).sort({
      score: {
        $meta: 'textScore'
      }
    }).limit(5);
    return posts;
  } catch (err) {
    throw new Error(err);
  }
}

exports.flagged = async (req, res, next) => {
  try {
    const {
      community,
      limit,
      skip
    } = req.query;
    const posts = await _post.default.find({
      flagged: true
    }).populate([{
      path: 'metaPost'
    }, {
      path: 'parentPost',
      populate: 'metaPost'
    }, {
      path: 'post',
      populate: [{
        path: 'commentary',
        match: {
          repost: {
            $exists: false
          },
          $or: [{
            hidden: {
              $ne: true
            }
          }]
        }
      }, {
        path: 'embeddedUser.relevance',
        match: {
          community
        },
        select: 'pagerank'
      }]
    }]).skip(parseInt(skip, 10)).limit(parseInt(limit, 10)).sort('-createdAt');
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

exports.topPosts = async (req, res, next) => {
  try {
    let posts;
    const now = new Date();
    now.setDate(now.getDate() - 7);
    posts = await _postData.default.find({
      createdAt: {
        $gt: now
      },
      isInFeed: true
    }).populate({
      path: 'post',
      populate: [{
        path: 'metaPost'
      }]
    }).sort('-pagerank').limit(20); // TODO do this on frontend?

    posts = posts.filter(d => d.post);
    posts = posts.map(d => ({ ...d.post.toObject(),
      data: { ...d.toObject(),
        post: (0, _get.default)(d, 'post._id')
      }
    }));
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

exports.sendPostNotification = async (req, res, next) => {
  // todo: add tweet option
  try {
    const post = req.body;
    const users = await _user.default.find({});
    const alert = `In case you missed this top-ranked post from @${post.user}: ${post.title}`; // TODO - optimize this or put in queue so we don't create a bottle neck;

    const finished = users.map(async user => {
      try {
        const payload = {
          fromUser: null,
          toUser: user,
          post,
          action: alert,
          noteType: 'general'
        };
        await (0, _notifications.sendNotification)(user, alert, payload);
      } catch (err) {
        // eslint-disable-next-line
        console.log('sending notifications error ', err);
      }

      return _notification.default.createNotification({
        post: post._id,
        forUser: user._id,
        byUser: post.user,
        type: 'topPost'
      });
    });
    await Promise.all(finished);
    res.status(200).json({
      success: true
    });
  } catch (err) {
    next(err);
  }
};

async function sendFlagEmail() {
  const flaggedUrl = `${process.env.API_SERVER}/admin/flagged`;
  const data = {
    from: 'Relevant <info@relevant.community>',
    to: 'info@relevant.community',
    subject: 'Inapproprate Content',
    html: `Someone has flagged a post for inappropriate content
      <br />
      <br />
      You can manage flagged content here:&nbsp;
      <a href="${flaggedUrl}" target="_blank">${flaggedUrl}</a>
      <br />
      <br />`
  };
  return (0, _mail.sendEmail)(data);
}

exports.flag = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const {
      postId
    } = req.body;
    const post = await _post.default.findOneAndUpdate({
      _id: postId
    }, {
      flagged: true,
      $addToSet: {
        flaggedBy: userId
      },
      flaggedTime: Date.now()
    }, {
      new: true
    });
    await _link.default.findOneAndUpdate({
      _id: post.metaPost
    }, {
      flagged: true,
      $addToSet: {
        flaggedBy: userId
      },
      flaggedTime: Date.now()
    }, {
      new: true
    });
    await sendFlagEmail();
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

exports.userPosts = async (req, res, next) => {
  try {
    const {
      community
    } = req.query;
    const cObj = await _community.default.findOne({
      slug: community
    }, '_id');
    if (!cObj) return res.status(200).json({});
    const communityId = cObj._id;
    const {
      user
    } = req;
    const blocked = user ? [...user.blocked, ...user.blockedBy] : [];
    const limit = parseInt(req.query.limit, 10);
    const skip = parseInt(req.query.skip, 10);
    const author = await _user.default.findOne({
      handle: req.params.id
    }, '_id');
    if (!author) throw new Error('Missing user');
    const sortQuery = {
      _id: -1
    };
    const query = {
      user: author._id,
      communityId
    };

    if (blocked.find(u => author._id.equals(u))) {
      return res.status(200).json({});
    }

    const myVote = user ? [{
      path: 'myVote',
      match: {
        investor: user._id,
        communityId
      }
    }] : [];
    const posts = await _post.default.find(query).populate({
      path: 'repost.post',
      populate: [{
        path: 'embeddedUser.relevance',
        select: 'pagerank',
        match: {
          communityId
        }
      }, {
        path: 'metaPost'
      }, {
        path: 'data',
        match: {
          communityId
        }
      }]
    }).populate({
      path: 'parentPost',
      populate: [{
        path: 'data',
        match: {
          communityId
        }
      }, {
        path: 'metaPost'
      }, ...myVote]
    }).populate({
      path: 'parentComment',
      populate: [{
        path: 'data',
        match: {
          communityId
        }
      }, {
        path: 'metaPost'
      }, ...myVote]
    }).populate({
      path: 'metaPost '
    }).populate({
      path: 'embeddedUser.relevance',
      select: 'pagerank',
      match: {
        communityId
      }
    }).populate([{
      path: 'data',
      match: {
        communityId
      }
    }, ...myVote]).limit(limit).skip(skip).sort(sortQuery);
    return res.status(200).json(posts);
  } catch (err) {
    return next(err);
  }
};

exports.preview = async (req, res, next) => {
  try {
    const urlParts = _url2.default.parse(req.url, false);

    const {
      query
    } = urlParts;
    const previewUrl = decodeURIComponent(query.replace('url=', ''));
    const result = await exports.previewDataAsync(previewUrl);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.previewDataAsync = async (previewUrl, noReadability) => {
  if (!previewUrl.match(/http:\/\//i) && !previewUrl.match(/https:\/\//i)) {
    previewUrl = 'http://' + previewUrl;
  }

  function getHeader(uri) {
    const fbHeader = {
      'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php) Facebot'
    };
    const relevantHeader = {
      'User-Agent': 'This is a user request for article matadata for Relevant Community (https://relevant.community | info@relevant.community)'
    };
    const noFb = uri.match('apple.news') || uri.match('bloomberg.com') || uri.match('washingtonpost.com');
    if (noFb) return relevantHeader;
    return fbHeader;
  } // recursive fuction TODO - max recursive calls check?


  async function queryUrl(_url) {
    const response = await requestAsync({
      url: _url,
      maxRedirects: 22,
      jar: true,
      gzip: true,
      headers: getHeader(_url),
      rejectUnauthorized: false,
      timeout: 20000,
      pool: {
        maxSockets: 1000
      },
      agent: false
    });
    let uri = response.request.uri.href;
    const processed = await proxyHelpers.generatePreview(response.body, uri, _url, noReadability);

    if (processed.redirect && processed.uri) {
      console.log('redirect ', processed.uri); // eslint-disable-line

      uri = processed.uri;
      return queryUrl(uri);
    }

    return Promise.resolve(processed.result);
  } // Its a PDF


  if (previewUrl.match('.pdf')) {
    return {
      url: previewUrl,
      title: previewUrl.substring(previewUrl.lastIndexOf('/') + 1),
      domain: proxyHelpers.extractDomain(previewUrl)
    };
  }

  return queryUrl(previewUrl);
};

exports.readable = async (req, res, next) => {
  try {
    const {
      uri
    } = req.query;
    const article = await proxyHelpers.getReadable(uri); // let short = proxyHelpers.trimToLength(article.article, 140);

    res.send(article.content);
  } catch (err) {
    next(err);
  }
};

exports.index = async req => {
  const {
    community
  } = req.query;
  if (!community) throw new Error('missing the community query parameter');
  const {
    id: postId
  } = req.params;
  const {
    user
  } = req;
  const cObj = await _community.default.findOne({
    slug: community
  }, '_id');
  const communityId = cObj._id;
  let blocked = []; // TODO server rendering doesn't run the blocked middleware!

  if (user) blocked = [...(user.blocked || []), ...(user.blockedBy || [])];
  const myVote = user ? [{
    path: 'myVote',
    match: {
      investor: user._id,
      communityId
    }
  }] : [];
  const post = await _post.default.findOne({
    _id: postId,
    user: {
      $nin: blocked
    }
  }).populate([...myVote, {
    path: 'embeddedUser.relevance',
    select: 'pagerank',
    match: {
      communityId
    }
  }, {
    path: 'metaPost'
  }, {
    path: 'data',
    match: {
      communityId
    }
  }]);
  return post;
}; // NOT USED RN


exports.related = async req => {
  const {
    id
  } = req.params;
  return findRelatedPosts(id);
};

exports.update = async (req, res, next) => {
  try {
    const {
      communityId
    } = req.communityMember;
    let tags = req.body.tags.filter(tag => tag); // DEPRECATED old mobile

    tags = tags.map(tag => tag.replace('_category_tag', '').trim());
    const mentions = req.body.mentions || [];
    let newMentions;
    let newTags;
    const {
      category
    } = req.body;
    let newPost;
    let linkObject;
    newPost = await _post.default.findOne({
      _id: req.body._id
    }).populate('parentPost');

    if (!communityId.equals(newPost.communityId)) {
      throw new Error("Community doesn't match");
    }

    const prevMentions = [...newPost.mentions];
    const prevTags = [...newPost.mentions];
    newMentions = mentions.filter(m => prevMentions.indexOf(m) < 0);
    newTags = tags.filter(t => prevTags.indexOf(t) < 0);
    newPost.tags = tags;
    newPost.mentions = mentions;
    newPost.body = req.body.body;

    if (newPost.url !== req.body.url) {
      linkObject = {
        url: req.body.link,
        title: req.body.title || null,
        description: req.body.description || null,
        image: req.body.image || null,
        articleAuthor: req.body.articleAuthor,
        shortText: req.body.shortText,
        categories: [category],
        domain: req.body.domain,
        tags
      }; // upsert new parent post

      newPost = await newPost.upsertLinkParent(linkObject);
      const oldLinkParent = await _post.default.findOne({
        _id: newPost.linkParent
      });
      await oldLinkParent.pruneFeed({
        communityId
      });
    }

    if (newPost.parentPost && tags && tags.length) {
      const {
        parentPost
      } = newPost;
      const originalTags = parentPost.tags || [];
      parentPost.tags = [...new Set([...originalTags, ...tags])];
      await newPost.parentPost.save();
    }

    await newPost.save();
    res.status(200).json(newPost); // some post processing

    newTags = newTags || [];
    newMentions = newMentions || []; // TODO redo tag processing stuff

    const pTags = newTags.map(tag => _tag.default.updateOne({
      _id: tag
    }, {
      $addToSet: {
        parents: category
      },
      $inc: {
        count: 1
      } // eslint-disable-line

    }, {
      upsert: true
    }).exec());
    await _post.default.sendOutMentions(newMentions, newPost, {
      _id: newPost.user,
      name: newPost.embeddedUser.name
    });
    return await Promise.all([...pTags]);
  } catch (err) {
    return next(err);
  }
};

async function processSubscriptions(newPost, communityId) {
  try {
    const author = newPost.embeddedUser;
    const subscribers = await _subscription.default.find({
      following: newPost.user,
      communityId // category: newPostObj.category

    }).populate('follower', '_id handle name deviceTokens badge lastFeedNotification');
    const cObj = await _community.default.findOne({
      _id: communityId
    }, 'name');
    const promises = subscribers.map(async subscription => {
      if (!subscription.follower) return null;

      try {
        let updateFeed;
        /**
         * In case subscription has expired, but user hasn't seen the articles
         * remove oldest unread in feed and push new one
         */
        // console.log(subscription);
        // // NO SUBSCRIPTIONS RN
        // if (subscription.amount < 1) {
        // check unread here
        // updateFeed = await Feed.processExpired(subscription.follower._id);
        // }

        if (!updateFeed && subscription.amount < 1) {
          return subscription.remove();
        }

        subscription.amount -= 1;
        subscription.amount = Math.max(subscription.amount, 0);
        subscription = await subscription.save();
        const feed = new _feed.default({
          userId: subscription.follower,
          from: newPost.user,
          post: newPost._id,
          tags: newPost.tags,
          createdAt: new Date()
        });
        await feed.save();
        const now = new Date();
        const {
          follower
        } = subscription; // TODO put it on a queue, only certain hours of the day

        if (now - 12 * 60 * 60 * 1000 > new Date(follower.lastFeedNotification)) {
          // if (true) {
          const unread = await _feed.default.find({
            userId: follower._id,
            read: false,
            createdAt: {
              $gte: now - 24 * 60 * 60 * 1000
            }
          });
          const n = unread.length;
          await _feed.default.updateMany({
            userId: follower._id,
            read: false
          }, {
            read: true
          }, {
            multi: true
          });
          const alert = `There is a new post from ${author.name} in the ${cObj.name} community`;
          const payload = {
            fromUser: author,
            toUser: subscription.follower,
            post: newPost,
            action: alert,
            noteType: 'newPost',
            number: n,
            community: cObj.name
          }; // console.log('New post in feed alert', alert);

          (0, _notifications.sendNotification)(follower, alert, payload);
          follower.lastFeedNotification = now;
          follower.save();
        }

        const newFeedPost = {
          _id: subscription.follower._id,
          type: 'INC_FEED_COUNT'
        };

        _socketEvent.default.emit('socketEvent', newFeedPost);

        return null;
      } catch (err) {
        // eslint-disable-next-line
        console.error('error updating subscription ', err);
        return null;
      }
    });
    await Promise.all(promises);
  } catch (err) {
    // eslint-disable-next-line
    console.error('error processing subscriptions', err);
  }
}
/**
 * Creates a new post
 */


exports.create = async (req, res, next) => {
  try {
    const {
      user,
      communityMember
    } = req;
    const {
      community,
      communityId
    } = communityMember;
    if (community === 'foam') await (0, _community2.checkCommunityAuth)({
      user,
      communityId,
      communityMember
    });

    if (user.banned) {
      throw new Error('You are temporarily blocked from making new posts, if you think this is an error, please reach out to info@relevant.community');
    }

    const {
      channel,
      body,
      postUrl: inputUrl
    } = req.body; // TODO rate limiting?
    // current rate limiting is 5s via invest

    const hasChildComment = body && body.length;
    const mentions = req.body.mentions || [];
    let tags = [];
    const keywords = req.body.keywords || [];
    const category = req.body.category ? req.body.category._id : null;
    const postUrl = req.body.url || req.body.link;
    const now = new Date();
    let payoutTime = new Date(now.getTime() + _globalConstants.PAYOUT_TIME);

    if (process.env.NODE_ENV === 'test' && req.body.payoutTime) {
      payoutTime = req.body.payoutTime;
    } // TODO clean up tag stuff


    if (category) tags.push(category); // Deprecate this (old category tag stuff from mobile)

    req.body.tags.forEach(tag => {
      if (tag) {
        tags.push(tag.replace('_category_tag', '').trim());
      }
    });
    tags = [...new Set(tags)];
    const linkObject = {
      // this is stored in metaPost
      url: postUrl,
      title: req.body.title ? req.body.title : '',
      description: req.body.description ? req.body.description : null,
      image: req.body.image ? req.body.image : null,
      articleAuthor: req.body.articleAuthor,
      shortText: req.body.shortText,
      keywords,
      domain: req.body.domain,
      categories: [category],
      tags
    };
    const postObject = {
      url: postUrl,
      inputUrl,
      image: req.body.image ? req.body.image : null,
      title: req.body.title ? req.body.title : '',
      body: hasChildComment ? body : null,
      tags,
      community,
      communityId,
      category,
      relevance: 0,
      user: user._id,
      mentions: req.body.mentions,
      postDate: now,
      payoutTime,
      description: channel && hasChildComment ? body : null,
      channel: !postUrl && channel || false
    }; // TODO Work on better length limits

    const postString = JSON.stringify(postObject);

    if (postString.length > 100000) {
      return res.status(500).json('post is too long');
    }

    const author = await _user.default.findOne({
      _id: user._id
    });
    let linkParent;

    if (postUrl) {
      linkParent = await _post.default.newLinkPost({
        linkObject,
        postObject
      });
      await linkParent.insertIntoFeed(communityId, community); // await Invest.createVote({
      //   post: linkParent,
      //   user: author,
      //   amount: 1,
      //   relevanceToAdd: 0,
      //   community,
      //   communityId
      // });
    }

    if (!hasChildComment) return res.status(200).json(linkParent);
    let newPost = new _post.default(postObject);
    newPost = await newPost.save();

    if (linkParent) {
      newPost.linkParent = linkParent;
      newPost.parentPost = linkParent;
      newPost.metaPost = linkParent.metaPost;
    }

    newPost = await newPost.addPostData();
    newPost.data.parentPost = linkParent;
    newPost = await newPost.addUserInfo(author);
    newPost = await newPost.save();
    if (linkParent) await linkParent.save(); // TODO should you invest in own comment?
    // await Invest.createVote({
    //   post: newPost,
    //   user: author,
    //   amount: 1,
    //   relevanceToAdd: 0,
    //   community,
    //   communityId
    // });

    if (!postUrl && !channel) await newPost.insertIntoFeed(communityId, community);
    await newPost.incrementUnread({
      communityId,
      community
    });
    await author.updatePostCount();
    res.status(200).json(newPost || linkParent);
    processSubscriptions(newPost, communityId);
    return _post.default.sendOutMentions(mentions, newPost, author);
  } catch (err) {
    return next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const {
      id
    } = req.params;
    let query = {
      _id: id,
      user: userId
    };

    if (req.user.role === 'admin') {
      query = {
        _id: id
      };
    }

    const post = await _post.default.findOne(query);
    if (!post) throw new Error('No post found', query);
    await post.remove();
    const newPostEvent = {
      type: 'REMOVE_POST',
      notMe: true,
      payload: post
    };

    _socketEvent.default.emit('socketEvent', newPostEvent);

    await req.user.updatePostCount();
    res.status(200).json('removed');
  } catch (err) {
    next(err);
  }
};
//# sourceMappingURL=post.controller.js.map