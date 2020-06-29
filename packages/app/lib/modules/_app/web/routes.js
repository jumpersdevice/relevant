'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _interopRequireWildcard2 = _interopRequireDefault(
  require('@babel/runtime/helpers/interopRequireWildcard')
);
var _react = _interopRequireDefault(require('react'));
var _component = _interopRequireDefault(require('@loadable/component'));
var _reactRouter = require('react-router');
var _reactRouterDom = require('react-router-dom');
var _app = _interopRequireDefault(require('./app'));
var _ = _interopRequireDefault(require('./404'));
var _withAuth = _interopRequireDefault(require('./withAuth'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/_app/web/routes.js';
var DiscoverContainer = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'discover-web-discover-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../discover/web/discover.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../discover/web/discover.container');
    }
    return eval('require.resolve')('../../discover/web/discover.container');
  }
});
var TopicsAdmin = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-topics-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/topics.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/topics.container');
    }
    return eval('require.resolve')('../../admin/web/topics.container');
  }
});
var Invites = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-invites-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/invites.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/invites.container');
    }
    return eval('require.resolve')('../../admin/web/invites.container');
  }
});
var Invite = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-invite-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/invite.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/invite.component');
    }
    return eval('require.resolve')('../../admin/web/invite.component');
  }
});
var Faq = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-faq-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/faq.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/faq.component');
    }
    return eval('require.resolve')('../../admin/web/faq.component');
  }
});
var AdminHeader = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-header-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/header.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/header.component');
    }
    return eval('require.resolve')('../../admin/web/header.component');
  }
});
var Flagged = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-flagged-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/flagged.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/flagged.component');
    }
    return eval('require.resolve')('../../admin/web/flagged.component');
  }
});
var Waitlist = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-waitlist-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/waitlist.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/waitlist.component');
    }
    return eval('require.resolve')('../../admin/web/waitlist.component');
  }
});
var Downvotes = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-downvotes-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/downvotes.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/downvotes.container');
    }
    return eval('require.resolve')('../../admin/web/downvotes.container');
  }
});
var Email = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-email-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/email.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/email.component');
    }
    return eval('require.resolve')('../../admin/web/email.component');
  }
});
var TopPosts = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-topPosts-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/topPosts.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/topPosts.component');
    }
    return eval('require.resolve')('../../admin/web/topPosts.component');
  }
});
var Contract = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-contractParams-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/contractParams.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/contractParams.container');
    }
    return eval('require.resolve')('../../admin/web/contractParams.container');
  }
});
var About = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'web_about-about-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../web_about/about.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../web_about/about.component');
    }
    return eval('require.resolve')('../../web_about/about.component');
  }
});
var TopNav = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'navigation-web-topnav-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../navigation/web/topnav.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../navigation/web/topnav.component');
    }
    return eval('require.resolve')('../../navigation/web/topnav.component');
  }
});
var CommunityAdminForm = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-communityAdminForm-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/communityAdminForm.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/communityAdminForm.component');
    }
    return eval('require.resolve')('../../admin/web/communityAdminForm.component');
  }
});
var CommunityAdminList = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'admin-web-communityAdminList-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../admin/web/communityAdminList.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../admin/web/communityAdminList.component');
    }
    return eval('require.resolve')('../../admin/web/communityAdminList.component');
  }
});
var Styles = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'ui-styles-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0, _interopRequireWildcard2.default)(require('../../ui/styles.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../ui/styles.component');
    }
    return eval('require.resolve')('../../ui/styles.component');
  }
});
var CommunityList = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'community-communityList-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../community/communityList.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../community/communityList.container');
    }
    return eval('require.resolve')('../../community/communityList.container');
  }
});
var ProfileContainer = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'profile-web-profile-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../profile/web/profile.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../profile/web/profile.container');
    }
    return eval('require.resolve')('../../profile/web/profile.container');
  }
});
var ActivityContainer = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'activity-activity-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../activity/activity.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../activity/activity.container');
    }
    return eval('require.resolve')('../../activity/activity.container');
  }
});
var WithSideNav = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'navigation-web-withSideNav-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../navigation/web/withSideNav.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../navigation/web/withSideNav.component');
    }
    return eval('require.resolve')('../../navigation/web/withSideNav.component');
  }
});
var WithTopNav = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'navigation-web-withTopNav-component';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../navigation/web/withTopNav.component'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../navigation/web/withTopNav.component');
    }
    return eval('require.resolve')('../../navigation/web/withTopNav.component');
  }
});
var PostContainer = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'post-web-singlePost-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../post/web/singlePost.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../post/web/singlePost.container');
    }
    return eval('require.resolve')('../../post/web/singlePost.container');
  }
});
var Wallet = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'wallet-web-wallet-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../wallet/web/wallet.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../wallet/web/wallet.container');
    }
    return eval('require.resolve')('../../wallet/web/wallet.container');
  }
});
var Auth = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'auth-web-auth-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../auth/web/auth.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../auth/web/auth.container');
    }
    return eval('require.resolve')('../../auth/web/auth.container');
  }
});
var CreatePostContainer = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'createPost-createPost-container';
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] === false) {
      return false;
    }
    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve().then(function() {
      return (0,
      _interopRequireWildcard2.default)(require('../../createPost/createPost.container'));
    });
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function(resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak('../../createPost/createPost.container');
    }
    return eval('require.resolve')('../../createPost/createPost.container');
  }
});
var MyRedirect = (0, _reactRouterDom.withRouter)(function(props) {
  return _react.default.createElement(
    _reactRouter.Redirect,
    (0, _extends2.default)({}, props, {
      to: props.match.url + props.to + props.location.search,
      __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 3 }
    })
  );
});
var routes = [
  {
    path: '/',
    component: _app.default,
    routes: [
      { path: '/', component: About, exact: true },
      { path: '/about', component: About, exact: true },
      {
        path: '/',
        component: WithSideNav,
        routes: [
          {
            path: '/admin',
            component: (0, _withAuth.default)(AdminHeader, 'admin'),
            indexRoute: { component: Contract },
            routes: [
              { path: '/admin/contract', component: Contract },
              { path: '/admin/flagged', component: Flagged },
              { path: '/admin/waitlist', component: Waitlist },
              { path: '/admin/downvotes', component: Downvotes },
              { path: '/admin/topics', component: TopicsAdmin },
              { path: '/admin/invites', component: Invites },
              { path: '/admin/email', component: Email },
              { path: '/admin/topPosts', component: TopPosts },
              { path: '/admin/community', component: CommunityAdminList, exact: true },
              {
                path: '/admin/community/new',
                component: CommunityAdminForm,
                exact: true
              },
              {
                path: '/admin/community/:slug',
                component: CommunityAdminForm,
                exact: true
              }
            ]
          },
          { path: '/info/faq', component: Faq, exact: true },
          { path: '/info/styles', component: Styles, exact: true },
          {
            path: '/',
            component: WithTopNav,
            routes: [
              {
                path: '/user/wallet',
                component: Wallet,
                navbar: TopNav,
                title: 'Wallet',
                exact: true
              },
              {
                path: '/user/:modal(resetPassword)/:token',
                component: Auth,
                navbar: TopNav,
                exact: true
              },
              {
                path:
                  '/user/:modal(login|confirmEmail|confirm|signup|resetPassword|forgot|setHandle)',
                component: Auth,
                navbar: TopNav,
                exact: true
              },
              {
                path: '/user/:modal(confirm)/:user/:code',
                component: Auth,
                navbar: TopNav,
                exact: true
              },
              {
                path: '/user/profile/:id',
                component: ProfileContainer,
                navbar: TopNav,
                exact: true
              },
              {
                path: '/user/profile/:id/settings',
                component: ProfileContainer,
                exact: true,
                navbar: TopNav
              },
              {
                path: '/user/activity',
                component: ActivityContainer,
                exact: true,
                navbar: TopNav
              },
              {
                path: '/user/invite/:code',
                component: Invite,
                exact: true,
                navbar: TopNav
              },
              {
                path: '/communities',
                component: CommunityList,
                exact: true,
                navbar: TopNav,
                title: 'Communities'
              },
              {
                path: '/communities/new',
                component: CommunityAdminForm,
                exact: true,
                navbar: TopNav,
                title: 'Create a New Community'
              },
              {
                path: '/:community/post/:id',
                component: PostContainer,
                exact: true,
                navbar: TopNav
              },
              {
                path: '/:community/post/:id/:commentId',
                component: PostContainer,
                exact: true,
                navbar: TopNav
              },
              {
                path: '/:community/',
                component: function component(props) {
                  return _react.default.createElement(
                    MyRedirect,
                    (0, _extends2.default)({}, props, {
                      to: '/new',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 202,
                        columnNumber: 37
                      }
                    })
                  );
                },
                exact: true,
                navbar: TopNav
              },
              {
                path: '/:community/:sort/:tag?',
                component: DiscoverContainer,
                exact: true,
                navbar: TopNav
              },
              {
                path: '/:community/post/new',
                exact: true,
                component: (0, _withAuth.default)(CreatePostContainer),
                navbar: TopNav
              }
            ]
          }
        ]
      },
      { path: '*', component: _.default }
    ]
  }
];
var _default = routes;
exports.default = _default;
//# sourceMappingURL=routes.js.map
