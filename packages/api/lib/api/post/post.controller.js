"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var {
  promisify
} = require('util');

var requestAsync = promisify(_request.default);

_request.default.defaults({
  maxRedirects: 22,
  jar: true
});

function findRelatedPosts(_x) {
  return _findRelatedPosts.apply(this, arguments);
}

function _findRelatedPosts() {
  _findRelatedPosts = (0, _asyncToGenerator2.default)(function* (metaId) {
    try {
      var post = yield _link.default.findOne({
        _id: metaId
      }).populate('tags');
      var tagsArr = post.tags.filter(t => !t.category).map(t => t._id);
      var tags = tagsArr.join(' ');
      var keywords = post.keywords.join(' ');
      var search = "".concat(tags, " ").concat(keywords, " ").concat(post.title).replace(/"|'/g, '');
      var posts = yield _link.default.find({
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
  });
  return _findRelatedPosts.apply(this, arguments);
}

exports.flagged = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        community,
        limit,
        skip
      } = req.query;
      var posts = yield _post.default.find({
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
  });

  return function (_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.topPosts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var posts;
      var now = new Date();
      now.setDate(now.getDate() - 7);
      posts = yield _postData.default.find({
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
      posts = posts.map(d => _objectSpread(_objectSpread({}, d.post.toObject()), {}, {
        data: _objectSpread(_objectSpread({}, d.toObject()), {}, {
          post: (0, _get.default)(d, 'post._id')
        })
      }));
      res.status(200).json(posts);
    } catch (err) {
      next(err);
    }
  });

  return function (_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sendPostNotification = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    // todo: add tweet option
    try {
      var post = req.body;
      var users = yield _user.default.find({});
      var alert = "In case you missed this top-ranked post from @".concat(post.user, ": ").concat(post.title); // TODO - optimize this or put in queue so we don't create a bottle neck;

      var finished = users.map( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)(function* (user) {
          try {
            var payload = {
              fromUser: null,
              toUser: user,
              post,
              action: alert,
              noteType: 'general'
            };
            yield (0, _notifications.sendNotification)(user, alert, payload);
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

        return function (_x11) {
          return _ref4.apply(this, arguments);
        };
      }());
      yield Promise.all(finished);
      res.status(200).json({
        success: true
      });
    } catch (err) {
      next(err);
    }
  });

  return function (_x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}();

function sendFlagEmail() {
  return _sendFlagEmail.apply(this, arguments);
}

function _sendFlagEmail() {
  _sendFlagEmail = (0, _asyncToGenerator2.default)(function* () {
    var flaggedUrl = "".concat(process.env.API_SERVER, "/admin/flagged");
    var data = {
      from: 'Relevant <info@relevant.community>',
      to: 'info@relevant.community',
      subject: 'Inapproprate Content',
      html: "Someone has flagged a post for inappropriate content\n      <br />\n      <br />\n      You can manage flagged content here:&nbsp;\n      <a href=\"".concat(flaggedUrl, "\" target=\"_blank\">").concat(flaggedUrl, "</a>\n      <br />\n      <br />")
    };
    return (0, _mail.sendEmail)(data);
  });
  return _sendFlagEmail.apply(this, arguments);
}

exports.flag = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var userId = req.user._id;
      var {
        postId
      } = req.body;
      var post = yield _post.default.findOneAndUpdate({
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
      yield _link.default.findOneAndUpdate({
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
      yield sendFlagEmail();
      res.status(200).json(post);
    } catch (err) {
      next(err);
    }
  });

  return function (_x12, _x13, _x14) {
    return _ref5.apply(this, arguments);
  };
}();

exports.userPosts = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        community
      } = req.query;
      var cObj = yield _community.default.findOne({
        slug: community
      }, '_id');
      if (!cObj) return res.status(200).json({});
      var communityId = cObj._id;
      var {
        user
      } = req;
      var blocked = user ? [...user.blocked, ...user.blockedBy] : [];
      var limit = parseInt(req.query.limit, 10);
      var skip = parseInt(req.query.skip, 10);
      var author = yield _user.default.findOne({
        handle: req.params.id
      }, '_id');
      if (!author) throw new Error('Missing user');
      var sortQuery = {
        _id: -1
      };
      var query = {
        user: author._id,
        communityId
      };

      if (blocked.find(u => author._id.equals(u))) {
        return res.status(200).json({});
      }

      var myVote = user ? [{
        path: 'myVote',
        match: {
          investor: user._id,
          communityId
        }
      }] : [];
      var posts = yield _post.default.find(query).populate({
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
  });

  return function (_x15, _x16, _x17) {
    return _ref6.apply(this, arguments);
  };
}();

exports.preview = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var urlParts = _url2.default.parse(req.url, false);

      var {
        query
      } = urlParts;
      var previewUrl = decodeURIComponent(query.replace('url=', ''));
      var result = yield exports.previewDataAsync(previewUrl);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  });

  return function (_x18, _x19, _x20) {
    return _ref7.apply(this, arguments);
  };
}();

exports.previewDataAsync = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)(function* (previewUrl, noReadability) {
    if (!previewUrl.match(/http:\/\//i) && !previewUrl.match(/https:\/\//i)) {
      previewUrl = 'http://' + previewUrl;
    }

    function getHeader(uri) {
      var fbHeader = {
        'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php) Facebot'
      };
      var relevantHeader = {
        'User-Agent': 'This is a user request for article matadata for Relevant Community (https://relevant.community | info@relevant.community)'
      };
      var noFb = uri.match('apple.news') || uri.match('bloomberg.com') || uri.match('washingtonpost.com');
      if (noFb) return relevantHeader;
      return fbHeader;
    } // recursive fuction TODO - max recursive calls check?


    function queryUrl(_x23) {
      return _queryUrl.apply(this, arguments);
    } // Its a PDF


    function _queryUrl() {
      _queryUrl = (0, _asyncToGenerator2.default)(function* (_url) {
        var response = yield requestAsync({
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
        var uri = response.request.uri.href;
        var processed = yield proxyHelpers.generatePreview(response.body, uri, _url, noReadability);

        if (processed.redirect && processed.uri) {
          console.log('redirect ', processed.uri); // eslint-disable-line

          uri = processed.uri;
          return queryUrl(uri);
        }

        return Promise.resolve(processed.result);
      });
      return _queryUrl.apply(this, arguments);
    }

    if (previewUrl.match('.pdf')) {
      return {
        url: previewUrl,
        title: previewUrl.substring(previewUrl.lastIndexOf('/') + 1),
        domain: proxyHelpers.extractDomain(previewUrl)
      };
    }

    return queryUrl(previewUrl);
  });

  return function (_x21, _x22) {
    return _ref8.apply(this, arguments);
  };
}();

exports.readable = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        uri
      } = req.query;
      var article = yield proxyHelpers.getReadable(uri); // let short = proxyHelpers.trimToLength(article.article, 140);

      res.send(article.content);
    } catch (err) {
      next(err);
    }
  });

  return function (_x24, _x25, _x26) {
    return _ref9.apply(this, arguments);
  };
}();

exports.index = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)(function* (req) {
    var {
      community
    } = req.query;
    if (!community) throw new Error('missing the community query parameter');
    var {
      id: postId
    } = req.params;
    var {
      user
    } = req;
    var cObj = yield _community.default.findOne({
      slug: community
    }, '_id');
    var communityId = cObj._id;
    var blocked = []; // TODO server rendering doesn't run the blocked middleware!

    if (user) blocked = [...(user.blocked || []), ...(user.blockedBy || [])];
    var myVote = user ? [{
      path: 'myVote',
      match: {
        investor: user._id,
        communityId
      }
    }] : [];
    var post = yield _post.default.findOne({
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
  });

  return function (_x27) {
    return _ref10.apply(this, arguments);
  };
}(); // NOT USED RN


exports.related = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)(function* (req) {
    var {
      id
    } = req.params;
    return findRelatedPosts(id);
  });

  return function (_x28) {
    return _ref11.apply(this, arguments);
  };
}();

exports.update = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        communityId
      } = req.communityMember;
      var tags = req.body.tags.filter(tag => tag); // DEPRECATED old mobile

      tags = tags.map(tag => tag.replace('_category_tag', '').trim());
      var mentions = req.body.mentions || [];
      var newMentions;
      var newTags;
      var {
        category
      } = req.body;
      var newPost;
      var linkObject;
      newPost = yield _post.default.findOne({
        _id: req.body._id
      }).populate('parentPost');

      if (!communityId.equals(newPost.communityId)) {
        throw new Error("Community doesn't match");
      }

      var prevMentions = [...newPost.mentions];
      var prevTags = [...newPost.mentions];
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

        newPost = yield newPost.upsertLinkParent(linkObject);
        var oldLinkParent = yield _post.default.findOne({
          _id: newPost.linkParent
        });
        yield oldLinkParent.pruneFeed({
          communityId
        });
      }

      if (newPost.parentPost && tags && tags.length) {
        var {
          parentPost
        } = newPost;
        var originalTags = parentPost.tags || [];
        parentPost.tags = [...new Set([...originalTags, ...tags])];
        yield newPost.parentPost.save();
      }

      yield newPost.save();
      res.status(200).json(newPost); // some post processing

      newTags = newTags || [];
      newMentions = newMentions || []; // TODO redo tag processing stuff

      var pTags = newTags.map(tag => _tag.default.updateOne({
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
      yield _post.default.sendOutMentions(newMentions, newPost, {
        _id: newPost.user,
        name: newPost.embeddedUser.name
      });
      return yield Promise.all([...pTags]);
    } catch (err) {
      return next(err);
    }
  });

  return function (_x29, _x30, _x31) {
    return _ref12.apply(this, arguments);
  };
}();

function processSubscriptions(_x32, _x33) {
  return _processSubscriptions.apply(this, arguments);
}
/**
 * Creates a new post
 */


function _processSubscriptions() {
  _processSubscriptions = (0, _asyncToGenerator2.default)(function* (newPost, communityId) {
    try {
      var author = newPost.embeddedUser;
      var subscribers = yield _subscription.default.find({
        following: newPost.user,
        communityId // category: newPostObj.category

      }).populate('follower', '_id handle name deviceTokens badge lastFeedNotification');
      var cObj = yield _community.default.findOne({
        _id: communityId
      }, 'name');
      var promises = subscribers.map( /*#__PURE__*/function () {
        var _ref15 = (0, _asyncToGenerator2.default)(function* (subscription) {
          if (!subscription.follower) return null;

          try {
            var updateFeed;
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
            subscription = yield subscription.save();
            var feed = new _feed.default({
              userId: subscription.follower,
              from: newPost.user,
              post: newPost._id,
              tags: newPost.tags,
              createdAt: new Date()
            });
            yield feed.save();
            var now = new Date();
            var {
              follower
            } = subscription; // TODO put it on a queue, only certain hours of the day

            if (now - 12 * 60 * 60 * 1000 > new Date(follower.lastFeedNotification)) {
              // if (true) {
              var unread = yield _feed.default.find({
                userId: follower._id,
                read: false,
                createdAt: {
                  $gte: now - 24 * 60 * 60 * 1000
                }
              });
              var n = unread.length;
              yield _feed.default.updateMany({
                userId: follower._id,
                read: false
              }, {
                read: true
              }, {
                multi: true
              });
              var alert = "There is a new post from ".concat(author.name, " in the ").concat(cObj.name, " community");
              var payload = {
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

            var newFeedPost = {
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

        return function (_x40) {
          return _ref15.apply(this, arguments);
        };
      }());
      yield Promise.all(promises);
    } catch (err) {
      // eslint-disable-next-line
      console.error('error processing subscriptions', err);
    }
  });
  return _processSubscriptions.apply(this, arguments);
}

exports.create = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        user,
        communityMember
      } = req;
      var {
        community,
        communityId
      } = communityMember;
      if (community === 'foam') yield (0, _community2.checkCommunityAuth)({
        user,
        communityId,
        communityMember
      });

      if (user.banned) {
        throw new Error('You are temporarily blocked from making new posts, if you think this is an error, please reach out to info@relevant.community');
      }

      var {
        channel,
        body,
        postUrl: inputUrl
      } = req.body; // TODO rate limiting?
      // current rate limiting is 5s via invest

      var hasChildComment = body && body.length;
      var mentions = req.body.mentions || [];
      var tags = [];
      var keywords = req.body.keywords || [];
      var category = req.body.category ? req.body.category._id : null;
      var postUrl = req.body.url || req.body.link;
      var now = new Date();
      var payoutTime = new Date(now.getTime() + _globalConstants.PAYOUT_TIME);

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
      var linkObject = {
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
      var postObject = {
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

      var postString = JSON.stringify(postObject);

      if (postString.length > 100000) {
        return res.status(500).json('post is too long');
      }

      var author = yield _user.default.findOne({
        _id: user._id
      });
      var linkParent;

      if (postUrl) {
        linkParent = yield _post.default.newLinkPost({
          linkObject,
          postObject
        });
        yield linkParent.insertIntoFeed(communityId, community); // await Invest.createVote({
        //   post: linkParent,
        //   user: author,
        //   amount: 1,
        //   relevanceToAdd: 0,
        //   community,
        //   communityId
        // });
      }

      if (!hasChildComment) return res.status(200).json(linkParent);
      var newPost = new _post.default(postObject);
      newPost = yield newPost.save();

      if (linkParent) {
        newPost.linkParent = linkParent;
        newPost.parentPost = linkParent;
        newPost.metaPost = linkParent.metaPost;
      }

      newPost = yield newPost.addPostData();
      newPost.data.parentPost = linkParent;
      newPost = yield newPost.addUserInfo(author);
      newPost = yield newPost.save();
      if (linkParent) yield linkParent.save(); // TODO should you invest in own comment?
      // await Invest.createVote({
      //   post: newPost,
      //   user: author,
      //   amount: 1,
      //   relevanceToAdd: 0,
      //   community,
      //   communityId
      // });

      if (!postUrl && !channel) yield newPost.insertIntoFeed(communityId, community);
      yield newPost.incrementUnread({
        communityId,
        community
      });
      yield author.updatePostCount();
      res.status(200).json(newPost || linkParent);
      processSubscriptions(newPost, communityId);
      return _post.default.sendOutMentions(mentions, newPost, author);
    } catch (err) {
      return next(err);
    }
  });

  return function (_x34, _x35, _x36) {
    return _ref13.apply(this, arguments);
  };
}();

exports.remove = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var userId = req.user._id;
      var {
        id
      } = req.params;
      var query = {
        _id: id,
        user: userId
      };

      if (req.user.role === 'admin') {
        query = {
          _id: id
        };
      }

      var post = yield _post.default.findOne(query);
      if (!post) throw new Error('No post found', query);
      yield post.remove();
      var newPostEvent = {
        type: 'REMOVE_POST',
        notMe: true,
        payload: post
      };

      _socketEvent.default.emit('socketEvent', newPostEvent);

      yield req.user.updatePostCount();
      res.status(200).json('removed');
    } catch (err) {
      next(err);
    }
  });

  return function (_x37, _x38, _x39) {
    return _ref14.apply(this, arguments);
  };
}();
//# sourceMappingURL=post.controller.js.map