'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var postActions = _interopRequireWildcard(require('../post.actions'));
var investActions = _interopRequireWildcard(require('../invest.actions'));
var _comment = require('../../comment/comment.actions');
var _comment2 = _interopRequireDefault(require('../../comment/web/comment.container'));
var _get = _interopRequireDefault(require('lodash/get'));
var _uni = require('../../styled/uni');
var _layout = require('../../../styles/layout');
var _post2 = _interopRequireDefault(require('./post.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/web/singlePost.container.js';
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
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
var SinglePostContainer = (function(_Component) {
  (0, _inherits2.default)(SinglePostContainer, _Component);
  var _super = _createSuper(SinglePostContainer);
  function SinglePostContainer() {
    var _this;
    (0, _classCallCheck2.default)(this, SinglePostContainer);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'getPost',
      function() {
        var _this$props = _this.props,
          actions = _this$props.actions,
          match = _this$props.match,
          posts = _this$props.posts;
        var params = match.params;
        var post = posts.posts[params.id];
        if (!post) actions.getSelectedPost(params.id);
        actions.getComments(params.id);
      }
    );
    return _this;
  }
  (0, _createClass2.default)(
    SinglePostContainer,
    [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.getPost();
        }
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (prevProps.auth.community !== this.props.auth.community) this.getPost();
        }
      },
      {
        key: 'render',
        value: function render() {
          var params = this.props.match.params;
          var _this$props2 = this.props,
            posts = _this$props2.posts,
            comments = _this$props2.comments;
          var post = posts.posts[params.id];
          if (!post) return null;
          var hasPost = post && post !== 'notFound';
          var firstPostId = (0, _get.default)(
            comments.childComments,
            ''.concat(post._id, '.0')
          );
          var firstPost = posts.posts[firstPostId];
          var link = posts.links[post.metaPost];
          return _react.default.createElement(
            _uni.View,
            {
              maxWidth: _layout.MAX_POST_WIDTH,
              mb: 20,
              __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 7 }
            },
            hasPost &&
              _react.default.createElement(
                _uni.View,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 11 }
                },
                _react.default.createElement(
                  _post2.default,
                  (0, _extends2.default)(
                    { noComments: true, link: link, post: post, firstPost: firstPost },
                    this.props,
                    {
                      hideDivider: true,
                      singlePost: true,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 13
                      }
                    }
                  )
                ),
                _react.default.createElement(
                  _comment2.default,
                  (0, _extends2.default)({ post: post }, this.props, {
                    __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 13 }
                  })
                )
              )
          );
        }
      }
    ],
    [
      {
        key: 'fetchData',
        value: (function() {
          var _fetchData = (0, _asyncToGenerator2.default)(
            _regenerator.default.mark(function _callee(dispatch, params) {
              var fetchComments, fetchPost;
              return _regenerator.default.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      if (!(!params.id || params.id === undefined)) {
                        _context.next = 2;
                        break;
                      }
                      return _context.abrupt('return', null);
                    case 2:
                      fetchComments = dispatch((0, _comment.getComments)(params.id));
                      fetchPost = dispatch(postActions.getSelectedPost(params.id));
                      return _context.abrupt(
                        'return',
                        Promise.all([fetchComments, fetchPost])
                      );
                    case 5:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );
          function fetchData(_x, _x2) {
            return _fetchData.apply(this, arguments);
          }
          return fetchData;
        })()
      }
    ]
  );
  return SinglePostContainer;
})(_react.Component);
(0, _defineProperty2.default)(SinglePostContainer, 'propTypes', {
  actions: _propTypes.default.object,
  posts: _propTypes.default.object,
  match: _propTypes.default.object,
  location: _propTypes.default.object,
  comments: _propTypes.default.object,
  auth: _propTypes.default.object
});
var _default = (0, _reactRedux.connect)(
  function(state) {
    return {
      comments: state.comments,
      auth: state.auth,
      posts: state.posts,
      user: state.user,
      investments: state.investments,
      isAuthenticated: state.auth.isAuthenticated
    };
  },
  function(dispatch) {
    return {
      actions: (0, _redux.bindActionCreators)(
        _objectSpread(
          _objectSpread(_objectSpread({}, postActions), investActions),
          {},
          { getComments: _comment.getComments }
        ),
        dispatch
      )
    };
  }
)(SinglePostContainer);
exports.default = _default;
//# sourceMappingURL=singlePost.container.js.map
