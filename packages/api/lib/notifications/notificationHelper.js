'use strict';

module.exports.getUrls = _ref => {
  var { post, fromUser, toUser } = _ref;
  var postId = post.parentPost ? post.parentPost._id || post.parentPost : post._id;
  var replyIdSting = post.parentPost ? '/'.concat(post._id) : '';
  var userUrl = fromUser
    ? ''.concat(process.env.API_SERVER, '/user/profile/').concat(fromUser.handle)
    : null;
  var postUrl = ''
    .concat(process.env.API_SERVER, '/')
    .concat(post.data ? post.data.community : post.community, '/post/')
    .concat(postId)
    .concat(replyIdSting);
  var settingsUrl = ''
    .concat(process.env.API_SERVER, '/user/profile/')
    .concat(toUser.handle, '/settings');
  return {
    userUrl,
    postUrl,
    settingsUrl
  };
};
//# sourceMappingURL=notificationHelper.js.map
