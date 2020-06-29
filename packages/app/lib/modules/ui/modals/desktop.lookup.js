'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.confirm = exports.setHandle = exports.signupEmail = exports.signupSocial = exports.forgot = exports.login = exports.resetPassword = exports.communityMembers = exports.getTokens = exports.invite = exports.communitySettings = exports.settings = exports.onboarding = exports.investModal = exports.connectMetamask = exports.cashOut = exports.newpost = exports.signup3Box = exports.linkMobile = void 0;
var _interopRequireWildcard2 = _interopRequireDefault(
  require('@babel/runtime/helpers/interopRequireWildcard')
);
var _react = _interopRequireDefault(require('react'));
var _component = _interopRequireDefault(require('@loadable/component'));
var _onboardingModal = _interopRequireDefault(require('../web/onboardingModal'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/modals/desktop.lookup.js';
var SettingsModal = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'profile-web-settingsModal-container';
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
      _interopRequireWildcard2.default)(require('../../profile/web/settingsModal.container'));
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
      return require.resolveWeak('../../profile/web/settingsModal.container');
    }
    return eval('require.resolve')('../../profile/web/settingsModal.container');
  }
});
var InviteModal = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'invites-web-inviteModal-container';
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
      _interopRequireWildcard2.default)(require('../../invites/web/inviteModal.container'));
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
      return require.resolveWeak('../../invites/web/inviteModal.container');
    }
    return eval('require.resolve')('../../invites/web/inviteModal.container');
  }
});
var InviteModalTitle = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'invites-inviteModalTitle-component';
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
      _interopRequireWildcard2.default)(require('../../invites/inviteModalTitle.component'));
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
      return require.resolveWeak('../../invites/inviteModalTitle.component');
    }
    return eval('require.resolve')('../../invites/inviteModalTitle.component');
  }
});
var GetTokensModal = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'getTokens-web-getTokensModal-container';
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
      _interopRequireWildcard2.default)(require('../../getTokens/web/getTokensModal.container'));
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
      return require.resolveWeak('../../getTokens/web/getTokensModal.container');
    }
    return eval('require.resolve')('../../getTokens/web/getTokensModal.container');
  }
});
var CommunityMembers = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'community-web-communityMembers-component';
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
      _interopRequireWildcard2.default)(require('../../community/web/communityMembers.component'));
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
      return require.resolveWeak('../../community/web/communityMembers.component');
    }
    return eval('require.resolve')('../../community/web/communityMembers.component');
  }
});
var CommunityMembersTitle = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'community-communityMembersTitle-component';
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
      _interopRequireWildcard2.default)(require('../../community/communityMembersTitle.component'));
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
      return require.resolveWeak('../../community/communityMembersTitle.component');
    }
    return eval('require.resolve')('../../community/communityMembersTitle.component');
  }
});
var ResetPassword = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'auth-web-resetPassword-component';
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
      _interopRequireWildcard2.default)(require('../../auth/web/resetPassword.component'));
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
      return require.resolveWeak('../../auth/web/resetPassword.component');
    }
    return eval('require.resolve')('../../auth/web/resetPassword.component');
  }
});
var LoginForm = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'auth-web-login';
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
      return (0, _interopRequireWildcard2.default)(require('../../auth/web/login'));
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
      return require.resolveWeak('../../auth/web/login');
    }
    return eval('require.resolve')('../../auth/web/login');
  }
});
var Forgot = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'auth-web-forgot-component';
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
      _interopRequireWildcard2.default)(require('../../auth/web/forgot.component'));
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
      return require.resolveWeak('../../auth/web/forgot.component');
    }
    return eval('require.resolve')('../../auth/web/forgot.component');
  }
});
var SignupSocial = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'auth-web-signupSocial';
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
      _interopRequireWildcard2.default)(require('../../auth/web/signupSocial'));
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
      return require.resolveWeak('../../auth/web/signupSocial');
    }
    return eval('require.resolve')('../../auth/web/signupSocial');
  }
});
var SignupEmail = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'auth-web-profile-form';
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
      _interopRequireWildcard2.default)(require('../../auth/web/profile.form'));
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
      return require.resolveWeak('../../auth/web/profile.form');
    }
    return eval('require.resolve')('../../auth/web/profile.form');
  }
});
var SetHandle = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'auth-web-handle-component';
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
      _interopRequireWildcard2.default)(require('../../auth/web/handle.component'));
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
      return require.resolveWeak('../../auth/web/handle.component');
    }
    return eval('require.resolve')('../../auth/web/handle.component');
  }
});
var ConfirmEmail = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'auth-web-confirmEmail-component';
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
      _interopRequireWildcard2.default)(require('../../auth/web/confirmEmail.component'));
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
      return require.resolveWeak('../../auth/web/confirmEmail.component');
    }
    return eval('require.resolve')('../../auth/web/confirmEmail.component');
  }
});
var BetBody = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'post-bet-bet';
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
      return (0, _interopRequireWildcard2.default)(require('../../post/bet/bet'));
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
      return require.resolveWeak('../../post/bet/bet');
    }
    return eval('require.resolve')('../../post/bet/bet');
  }
});
var CashOutModal = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'wallet-web-cashOutModal';
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
      _interopRequireWildcard2.default)(require('../../wallet/web/cashOutModal'));
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
      return require.resolveWeak('../../wallet/web/cashOutModal');
    }
    return eval('require.resolve')('../../wallet/web/cashOutModal');
  }
});
var Signup3Box = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'auth-web-signup3Box';
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
      return (0, _interopRequireWildcard2.default)(require('../../auth/web/signup3Box'));
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
      return require.resolveWeak('../../auth/web/signup3Box');
    }
    return eval('require.resolve')('../../auth/web/signup3Box');
  }
});
var LinkMobile = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'profile-web-linkMobile';
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
      _interopRequireWildcard2.default)(require('../../profile/web/linkMobile'));
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
      return require.resolveWeak('../../profile/web/linkMobile');
    }
    return eval('require.resolve')('../../profile/web/linkMobile');
  }
});
var ConnectMetamaskModal = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'wallet-web-connectMetamaskModal';
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
      _interopRequireWildcard2.default)(require('../../wallet/web/connectMetamaskModal'));
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
      return require.resolveWeak('../../wallet/web/connectMetamaskModal');
    }
    return eval('require.resolve')('../../wallet/web/connectMetamaskModal');
  }
});
var CommunitySettings = (0, _component.default)({
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
var CreatePost = (0, _component.default)({
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
var ModalHeader = (0, _component.default)({
  resolved: {},
  chunkName: function chunkName() {
    return 'createPost-web-createPostModal-header';
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
      _interopRequireWildcard2.default)(require('../../createPost/web/createPostModal.header'));
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
      return require.resolveWeak('../../createPost/web/createPostModal.header');
    }
    return eval('require.resolve')('../../createPost/web/createPostModal.header');
  }
});
var linkMobile = { Body: LinkMobile, maxWidth: [52, 40] };
exports.linkMobile = linkMobile;
var signup3Box = { Body: Signup3Box };
exports.signup3Box = signup3Box;
var newpost = {
  header: _react.default.createElement(ModalHeader, {
    __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 11 }
  }),
  Body: CreatePost
};
exports.newpost = newpost;
var cashOut = { Body: CashOutModal };
exports.cashOut = cashOut;
var connectMetamask = { Body: ConnectMetamaskModal };
exports.connectMetamask = connectMetamask;
var investModal = { Body: BetBody, maxWidth: [52, 40] };
exports.investModal = investModal;
var onboarding = {
  title: 'Welcome To Relevant',
  Body: _onboardingModal.default,
  footer: function footer() {}
};
exports.onboarding = onboarding;
var settings = { title: 'Settings', Body: SettingsModal, footer: function footer() {} };
exports.settings = settings;
var communitySettings = { title: 'Community Settings', Body: CommunitySettings };
exports.communitySettings = communitySettings;
var invite = {
  title: _react.default.createElement(InviteModalTitle, {
    __source: { fileName: _jsxFileName, lineNumber: 90, columnNumber: 10 }
  }),
  Body: InviteModal,
  footer: function footer() {}
};
exports.invite = invite;
var getTokens = {
  title: 'Get Tokens',
  Body: GetTokensModal,
  footer: function footer() {}
};
exports.getTokens = getTokens;
var communityMembers = {
  title: _react.default.createElement(CommunityMembersTitle, {
    __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 10 }
  }),
  Body: CommunityMembers,
  footer: function footer() {}
};
exports.communityMembers = communityMembers;
var resetPassword = {
  title: 'Reset Password',
  Body: ResetPassword,
  redirect: '/user/login'
};
exports.resetPassword = resetPassword;
var login = { title: 'Sign In', Body: LoginForm, footer: function footer() {} };
exports.login = login;
var forgot = { title: 'Recover Password', Body: Forgot, redirect: '/user/login' };
exports.forgot = forgot;
var signupSocial = { title: 'Join the Community', Body: SignupSocial };
exports.signupSocial = signupSocial;
var signupEmail = { title: 'Join the Community', Body: SignupEmail };
exports.signupEmail = signupEmail;
var setHandle = { title: 'Set your Handle', Body: SetHandle };
exports.setHandle = setHandle;
var confirm = { title: 'Confirm Your Email', Body: ConfirmEmail };
exports.confirm = confirm;
//# sourceMappingURL=desktop.lookup.js.map
