'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.showAuth = showAuth;
exports.lockDrawer = lockDrawer;
exports.showModal = showModal;
exports.hideModal = hideModal;
exports.scrolling = scrolling;
exports.registerGesture = registerGesture;
exports.closeDrawer = closeDrawer;
exports.push = push;
exports.pop = pop;
exports.replace = replace;
exports.toggleTopics = toggleTopics;
exports.goToTab = goToTab;
exports.resetTabs = resetTabs;
exports.goToTopic = goToTopic;
exports.setScrollTab = setScrollTab;
exports.setWidth = setWidth;
exports.refreshTab = refreshTab;
exports.reloadTab = reloadTab;
exports.reloadAllTabs = reloadAllTabs;
exports.openWebSideNav = openWebSideNav;
exports.closeWebSideNav = closeWebSideNav;
exports.goToPeople = goToPeople;
exports.goToUrl = goToUrl;
exports.goToComments = goToComments;
exports.goToPost = goToPost;
exports.goToProfile = goToProfile;
exports.viewBlocked = viewBlocked;
exports.viewInvites = viewInvites;
exports.goToInviteList = goToInviteList;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _actionTypes = require('../../core/actionTypes');
var _tooltip = require('../tooltip/tooltip.actions');
var _nav = require('../../utils/nav');
var _auth = require('../auth/auth.actions');
var dismissKeyboard;
var safariView;
var Orientation;
var NavigationActions;
var StackActions;
var DrawerActions;
var Linking;
var native;
var isNative = process.env.WEB !== 'true';
if (process.env.WEB !== 'true') {
  Orientation = require('react-native-orientation');
  dismissKeyboard = require('react-native-dismiss-keyboard');
  safariView = require('react-native-safari-view').default;
  NavigationActions = require('react-navigation').NavigationActions;
  StackActions = require('react-navigation').StackActions;
  DrawerActions = require('react-navigation-drawer').DrawerActions;
  Linking = require('react-native-web').Linking;
  native = true;
}
function showAuth() {
  return function(dispatch) {
    return isNative
      ? (0, _nav.dispatchNavigatorAction)(
          NavigationActions.navigate({ routeName: 'auth' })
        )
      : dispatch(showModal('login'));
  };
}
function lockDrawer(lock) {
  return { type: _actionTypes.LOCK_DRAWER, payload: lock };
}
function showModal(modal, data) {
  return { type: _actionTypes.SHOW_MODAL, payload: { modal: modal, data: data } };
}
function hideModal(modal) {
  return { type: _actionTypes.HIDE_MODAL, payload: modal };
}
function scrolling(scroll) {
  return { type: _actionTypes.SCROLL, payload: scroll };
}
function registerGesture(gesture) {
  return { type: _actionTypes.REGISTER_GESTURE, payload: gesture };
}
function closeDrawer() {
  return function() {
    return native ? (0, _nav.dispatchNavigatorAction)(DrawerActions.closeDrawer()) : null;
  };
}
function push(route) {
  return function(dispatch) {
    if (dismissKeyboard) dismissKeyboard();
    if (native) {
      (0, _nav.dispatchNavigatorAction)(DrawerActions.closeDrawer());
      (0, _nav.dispatchNavigatorAction)(
        NavigationActions.navigate({ routeName: route.key || route, params: route })
      );
    }
    if (route.community && route.community !== '') {
      requestAnimationFrame(function() {
        return dispatch((0, _auth.setCommunity)(route.community));
      });
    }
  };
}
function pop() {
  return function() {
    (0, _nav.dispatchNavigatorAction)(NavigationActions.back());
  };
}
function replace(key) {
  return function() {
    (0, _nav.dispatchNavigatorAction)(StackActions.replace({ routeName: key }));
  };
}
function toggleTopics(showTopics) {
  return { type: _actionTypes.TOGGLE_TOPICS, payload: showTopics };
}
function goToTab(tab) {
  return function() {
    if (!native) return;
    (0, _nav.dispatchNavigatorAction)(DrawerActions.closeDrawer());
    (0, _nav.dispatchNavigatorAction)(NavigationActions.navigate({ routeName: tab }));
  };
}
function resetTabs() {
  return function() {
    if (!native) return;
    var resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'main' })]
    });
    (0, _nav.dispatchNavigatorAction)(resetAction);
  };
}
function goToTopic(topic) {
  return function(dispatch) {
    (0, _nav.dispatchNavigatorAction)(
      NavigationActions.navigate({ routeName: 'discover' })
    );
    dispatch(
      push({
        key: 'discoverTag',
        title: topic.categoryName || topic,
        back: true,
        id: topic._id || topic.topic || topic,
        topic: topic,
        gestureResponseDistance: 150
      })
    );
    dispatch(toggleTopics(false));
  };
}
function setScrollTab(type, view) {
  return { type: _actionTypes.SET_SCROLL_TAB, payload: { type: type, view: view } };
}
function setWidth(width) {
  var screenSize = (0, _nav.getScreenSize)(width);
  return {
    type: _actionTypes.SET_WIDTH,
    payload: { width: width, screenSize: screenSize }
  };
}
function refreshTab(key) {
  return { type: _actionTypes.REFRESH_ROUTE, key: key };
}
function reloadTab(key) {
  return { type: _actionTypes.RELOAD_ROUTE, key: key };
}
function reloadAllTabs() {
  return { type: _actionTypes.RELOAD_ALL_TABS };
}
function openWebSideNav() {
  return { type: _actionTypes.OPEN_WEB_SIDE_NAV };
}
function closeWebSideNav() {
  return { type: _actionTypes.CLOSE_WEB_SIDE_NAV };
}
function goToPeople(topic) {
  return push({
    key: 'peopleView',
    component: 'peopleView',
    title: topic ? '#' + topic : 'People',
    back: true,
    id: topic + '_people',
    topic: topic ? { _id: topic.toLowerCase() } : null
  });
}
function goToUrl(url, id) {
  return (function() {
    var _ref = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(dispatch) {
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  if (!url.match('mailto:')) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt('return', Linking.openURL(url));
                case 3:
                  dispatch((0, _tooltip.setButtonTooltip)('upvote', id));
                  if (safariView) {
                    _context.next = 6;
                    break;
                  }
                  return _context.abrupt('return', null);
                case 6:
                  _context.next = 8;
                  return safariView.isAvailable();
                case 8:
                  Orientation.unlockAllOrientations();
                  return _context.abrupt(
                    'return',
                    safariView.show({ url: url, readerMode: true })
                  );
                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt(
                    'return',
                    dispatch(
                      push(
                        {
                          key: 'articleView',
                          component: 'articleView',
                          back: true,
                          uri: url,
                          id: url,
                          gestureResponseDistance: 120
                        },
                        'home'
                      )
                    )
                  );
                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 12]]
        );
      })
    );
    return function(_x) {
      return _ref.apply(this, arguments);
    };
  })();
}
function goToComments(post, key, animation) {
  return push(
    {
      key: 'comment',
      title: 'Comments',
      community: post.data ? post.data.community : post.community,
      back: true,
      id: post._id
    },
    key,
    animation
  );
}
function goToPost(post, openComment) {
  return push({
    key: 'singlePost',
    title: post.title ? post.title : '',
    back: true,
    community: post.data ? post.data.community : post.community,
    id: post._id,
    comment: post.comment,
    commentCount: post.commentCount,
    openComment: openComment
  });
}
function goToProfile(user, key) {
  var handle = user.handle || user.replace('@', '');
  return push({ key: 'profile', title: user.name, back: true, id: handle }, key);
}
function viewBlocked() {
  return push({ key: 'blocked', title: 'Blocked Users', id: 'blocked', back: true });
}
function viewInvites() {
  return push({ key: 'invites', title: 'Invite Friends', id: 'invites', back: true });
}
function goToInviteList() {
  return push({ key: 'inviteList', title: 'Invite List', id: 'inviteList', back: true });
}
//# sourceMappingURL=navigation.actions.js.map
