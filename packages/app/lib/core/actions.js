'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var activityActions = _interopRequireWildcard(
  require('../modules/activity/activity.actions')
);
var animationActions = _interopRequireWildcard(
  require('../modules/animation/animation.actions')
);
var authActions = _interopRequireWildcard(require('../modules/auth/auth.actions'));
var adminActions = _interopRequireWildcard(require('../modules/admin/admin.actions'));
var communityActions = _interopRequireWildcard(
  require('../modules/community/community.actions')
);
var createPostActions = _interopRequireWildcard(
  require('../modules/createPost/createPost.actions')
);
var postActions = _interopRequireWildcard(require('../modules/post/post.actions'));
var userActions = _interopRequireWildcard(require('../modules/user/user.actions'));
var navigationActions = _interopRequireWildcard(
  require('../modules/navigation/navigation.actions')
);
var investActions = _interopRequireWildcard(require('../modules/post/invest.actions'));
var statsActions = _interopRequireWildcard(require('../modules/stats/stats.actions'));
var tooltipActions = _interopRequireWildcard(
  require('../modules/tooltip/tooltip.actions')
);
var commentActions = _interopRequireWildcard(
  require('../modules/comment/comment.actions')
);
var _default = {
  activityActions: activityActions,
  animationActions: animationActions,
  authActions: authActions,
  adminActions: adminActions,
  communityActions: communityActions,
  createPostActions: createPostActions,
  postActions: postActions,
  userActions: userActions,
  navigationActions: navigationActions,
  investActions: investActions,
  statsActions: statsActions,
  tooltipActions: tooltipActions,
  commentActions: commentActions
};
exports.default = _default;
//# sourceMappingURL=actions.js.map
