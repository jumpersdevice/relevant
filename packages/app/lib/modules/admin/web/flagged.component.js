'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var _post2 = _interopRequireDefault(require('../../post/web/post.component'));
var _web = require('../../styled/web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/flagged.component.js';
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
var Flagged = (function(_Component) {
  (0, _inherits2.default)(Flagged, _Component);
  var _super = _createSuper(Flagged);
  function Flagged() {
    (0, _classCallCheck2.default)(this, Flagged);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Flagged, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.actions.getFlaggedPosts();
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this = this;
        var _this$props = this.props,
          flagged = _this$props.flagged,
          posts = _this$props.posts,
          auth = _this$props.auth,
          actions = _this$props.actions;
        var postsEl = flagged.map(function(p) {
          var post = posts.posts[p];
          var parentPost = post.parentPost ? posts.posts[post.parentPost] : null;
          var link = posts.links[post.metaPost];
          var authorizedToDelete =
            post.user === auth.user._id || auth.user.role === 'admin';
          return _react.default.createElement(
            _web.View,
            { __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 9 } },
            _react.default.createElement(
              _post2.default,
              (0, _extends2.default)({ key: post._id }, _this.props, {
                flagged: post.flagged,
                post: parentPost || post,
                comment: parentPost ? post : null,
                link: link,
                __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 11 }
              }),
              authorizedToDelete &&
                _react.default.createElement(
                  _web.View,
                  {
                    __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 15 }
                  },
                  _react.default.createElement(
                    _web.Button,
                    {
                      bg: 'red',
                      w: 12,
                      m: 4,
                      onClick: function onClick() {
                        return actions.deletePost(post);
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 17
                      }
                    },
                    'Delete'
                  )
                )
            )
          );
        });
        return _react.default.createElement(
          _web.View,
          {
            fdirection: 'column',
            __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 }
          },
          _react.default.createElement(
            _web.Title,
            {
              m: '0 4',
              __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 9 }
            },
            'Flagged Posts'
          ),
          postsEl
        );
      }
    }
  ]);
  return Flagged;
})(_react.Component);
(0, _defineProperty2.default)(Flagged, 'propTypes', {
  actions: _propTypes.default.object,
  auth: _propTypes.default.object,
  flagged: _propTypes.default.array,
  metaPosts: _propTypes.default.object,
  posts: _propTypes.default.object
});
var _default = (0, _reactRedux.connect)(
  function(state) {
    return {
      auth: state.auth,
      flagged: state.posts.flagged,
      posts: state.posts,
      all: state.posts
    };
  },
  function(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(postActions, dispatch) };
  }
)(Flagged);
exports.default = _default;
//# sourceMappingURL=flagged.component.js.map
