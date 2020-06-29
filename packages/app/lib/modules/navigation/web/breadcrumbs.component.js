'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _get = _interopRequireDefault(require('lodash/get'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _styles = require('../../../styles');
var _web = require('../../styled/web');
var _uni = require('../../styled/uni');
var _navigation = require('../navigation.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/web/breadcrumbs.component.js';
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
var Breadcrumbs = (function(_Component) {
  (0, _inherits2.default)(Breadcrumbs, _Component);
  var _super = _createSuper(Breadcrumbs);
  function Breadcrumbs() {
    (0, _classCallCheck2.default)(this, Breadcrumbs);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Breadcrumbs, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          view = _this$props.view,
          auth = _this$props.auth,
          community = _this$props.community,
          newPosts = _this$props.newPosts,
          actions = _this$props.actions;
        var communitySlug =
          (0, _get.default)(view, 'discover.community') ||
          (0, _get.default)(auth, 'community');
        if (!communitySlug) {
          return null;
        }
        var activeCommunity = (0, _get.default)(
          community,
          'communities.'.concat(communitySlug)
        );
        var sort = (0, _get.default)(view, 'discover.sort') || 'new';
        var newPostsNumber = newPosts[auth.community];
        var refreshPostsEl = _react.default.createElement(
          _web.StyledNavLink,
          {
            to: '#',
            onClick: function onClick() {
              return actions.refreshTab('discover');
            },
            ml: 1,
            c: _styles.colors.blue,
            hu: 1,
            lh: 1.5,
            fs: 1.5,
            __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 7 }
          },
          'See New Posts'
        );
        return _react.default.createElement(
          _uni.View,
          {
            fdirection: 'row',
            align: 'flex-start',
            __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 7 }
          },
          activeCommunity
            ? _react.default.createElement(
                _web.StyledNavLink,
                {
                  lh: 1.5,
                  fs: 1.5,
                  c: _styles.colors.black,
                  to: encodeURI('/'.concat(communitySlug, '/').concat(sort)),
                  __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 11 }
                },
                'Community: ',
                activeCommunity.name,
                ' '
              )
            : null,
          (0, _get.default)(view, 'discover.tag')
            ? _react.default.createElement(
                _web.StyledNavLink,
                {
                  lh: 1.5,
                  fs: 1.5,
                  c: _styles.colors.black,
                  to: encodeURI(
                    '/'
                      .concat(communitySlug, '/')
                      .concat(sort, '/')
                      .concat(view.discover.tag)
                  ),
                  __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 11 }
                },
                '\xA0\u2192 #',
                view.discover.tag
              )
            : null,
          newPostsNumber ? refreshPostsEl : null
        );
      }
    }
  ]);
  return Breadcrumbs;
})(_react.Component);
(0, _defineProperty2.default)(Breadcrumbs, 'propTypes', {
  view: _propTypes.default.object,
  auth: _propTypes.default.object,
  community: _propTypes.default.object,
  newPosts: _propTypes.default.object,
  actions: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  return {
    newPosts: state.posts.newPostsAvailable,
    view: state.view,
    auth: state.auth,
    community: state.community
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      { refreshTab: _navigation.refreshTab },
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
exports.default = _default;
//# sourceMappingURL=breadcrumbs.component.js.map
