'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.getTitle = getTitle;
exports.getFavIcon = getFavIcon;
exports.getPostType = exports.computeShares = exports.getPostUrl = exports.URL_REGEX = void 0;
var _get = _interopRequireDefault(require('lodash/get'));
var _common = require('@r3l/common');
var URL_REGEX = new RegExp(
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%_\+~#=]{2,256}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_\+~#?&//=]*)/g
);
exports.URL_REGEX = URL_REGEX;
function getTitle(_ref) {
  var post = _ref.post,
    link = _ref.link,
    maxLength = _ref.maxLength;
  var title =
    (link === null || link === void 0 ? void 0 : link.title) ||
    (post === null || post === void 0 ? void 0 : post.title);
  var fromBody = !title || title === '';
  title = title || (0, _get.default)(post, 'body');
  var limit = maxLength || 160;
  if (fromBody) {
    var _title, _title2, _title3;
    var lines =
      (_title = title) === null || _title === void 0 ? void 0 : _title.split(/\n/);
    title = lines === null || lines === void 0 ? void 0 : lines.slice(0, 1).join('\n');
    if (!title) return 'Untitled';
    if (
      ((_title2 = title) === null || _title2 === void 0 ? void 0 : _title2.length) <=
      limit
    )
      return title;
    return (
      ((_title3 = title) === null || _title3 === void 0
        ? void 0
        : _title3.substr(0, title.lastIndexOf(' ', limit))) + '...'
    );
  }
  if (title && title.length > limit) {
    title = title.substr(0, title.lastIndexOf(' ', limit)) + '...';
  }
  title = title && title.trim();
  return title || 'Untitled';
}
function getFavIcon(domain) {
  return 'https://api.faviconkit.com/'.concat(domain, '/144');
}
var getPostUrl = function getPostUrl(community, post) {
  if (!post) return null;
  var parentPost = post.parentPost;
  var postId = parentPost ? parentPost._id || parentPost : post._id || post;
  var commentId = parentPost ? '/' + (post._id || post) : '';
  return '/'
    .concat(community, '/post/')
    .concat(postId)
    .concat(commentId);
};
exports.getPostUrl = getPostUrl;
var computeShares = function computeShares(_ref2) {
  var post = _ref2.post,
    stakedTokens = _ref2.stakedTokens;
  var _post$data = post.data,
    balance = _post$data.balance,
    postShares = _post$data.shares;
  var nexp = _common.EXPONENT + 1;
  var shares =
    Math.pow(((Math.max(balance, 0) + stakedTokens) / _common.SLOPE) * nexp, 1 / nexp) -
    (postShares || 0);
  return shares;
};
exports.computeShares = computeShares;
var getPostType = function getPostType(_ref3) {
  var post = _ref3.post;
  var type = !post.parentPost && post.url ? 'link' : post.type;
  return type;
};
exports.getPostType = getPostType;
//# sourceMappingURL=post.js.map
