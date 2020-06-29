'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _feed = _interopRequireDefault(require('./feed.model'));

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return err => {
    res.status(statusCode).send(err);
  };
}

exports.get = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2.default)(function*(req, res) {
    var userId = req.user._id;
    var skip = parseInt(req.query.skip, 10) || 0;
    var limit = parseInt(req.query.limit, 10) || 5;
    var tag = req.query.tag || null;
    var query = {
      userId
    };
    if (tag)
      query = {
        tags: tag,
        userId
      };
    var feed;
    var posts = [];

    try {
      feed = yield _feed.default
        .find(query)
        .sort({
          createdAt: -1
        })
        .skip(skip)
        .limit(limit)
        .populate({
          path: 'post',
          populate: [
            {
              path: 'user',
              select: 'name image relevance'
            },
            {
              path: 'repost.post',
              populate: {
                path: 'user',
                select: 'name image relevance'
              }
            }
          ]
        });
      feed.forEach(f => {
        if (f.post) posts.push(f.post);
      });
      res.status(200).json(posts);
    } catch (err) {
      handleError(res)(err);
    }
  });

  return function(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

exports.unread = (req, res) => {
  var query = null;
  var userId = req.user._id;

  if (userId) {
    query = {
      userId,
      read: false
    };
  }

  _feed.default.countDocuments(query).then(unread => {
    res.status(200).json({
      unread
    });
  });
};

exports.markRead = (req, res) => {
  var query = {
    userId: req.user._id,
    read: false
  };
  return _feed.default
    .update(
      query,
      {
        read: true
      },
      {
        multi: true
      }
    )
    .then(() => res.status(200).send())
    .catch(err => handleError(res, err));
}; // for testing

exports.post = (req, res) => {
  var postId = req.params.id;

  _feed.default
    .find({
      post: postId
    })
    .sort({
      createdAt: -1
    }) // .populate('post')
    .then(feed => {
      res.status(200).json(feed);
    })
    .catch(handleError(res));
};
//# sourceMappingURL=feed.controller.js.map
