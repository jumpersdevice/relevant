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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _redux = require('redux');
var authActions = _interopRequireWildcard(require('../../auth/auth.actions'));
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var postActions = _interopRequireWildcard(require('../post.actions'));
var commentActions = _interopRequireWildcard(require('../../comment/comment.actions'));
var statsActions = _interopRequireWildcard(require('../../stats/stats.actions'));
var tagActions = _interopRequireWildcard(require('../../tag/tag.actions'));
var investActions = _interopRequireWildcard(require('../invest.actions'));
var createPostActions = _interopRequireWildcard(
  require('../../createPost/createPost.actions')
);
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var animationActions = _interopRequireWildcard(
  require('../../animation/animation.actions')
);
var tooltipActions = _interopRequireWildcard(require('../../tooltip/tooltip.actions'));
var _customSpinnerRelative = _interopRequireDefault(
  require('../../ui/mobile/customSpinnerRelative.component')
);
var _error = _interopRequireDefault(require('../../ui/mobile/error.component'));
var _singlePost = _interopRequireDefault(require('./singlePost.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/singlePost.container.js';
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      inputHeight: 0,
      editing: false,
      comment: null
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'getPost',
      function() {
        var _this$props = _this.props,
          posts = _this$props.posts,
          navigation = _this$props.navigation;
        var id = navigation.state.params.id;
        var post = posts.posts[id];
        if (!post) _this.props.actions.getSelectedPost(id);
        _this.props.actions.getComments(id);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'setEditing',
      function(bool) {
        _this.setState({ editing: bool });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'reload',
      function() {
        var id = _this.props.navigation.state.params.id;
        _this.props.actions.getSelectedPost(id);
        _this.props.actions.getComments(id);
      }
    );
    return _this;
  }
  (0, _createClass2.default)(SinglePostContainer, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setTitle(this.props);
        _reactNativeWeb.InteractionManager.runAfterInteractions(this.getPost());
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.auth.community !== this.props.auth.community) this.getPost();
      }
    },
    {
      key: 'setTitle',
      value: function setTitle(props) {
        var posts = props.posts,
          navigation = props.navigation;
        var id = navigation.state.params.id;
        var post = posts.posts[id];
        if (!post) return;
        var link = post && posts.links[post.metaPost];
        var title = post.title || post.body || link.title;
        if (
          !this.props.navigation.state.params ||
          title !== navigation.state.params.title
        ) {
          navigation.setParams({ title: title });
        }
      }
    },
    {
      key: 'componentDidWillUpdate',
      value: function componentDidWillUpdate(next) {
        if (
          !this.props.navigation.state.params ||
          !this.props.navigation.state.params.title
        ) {
          this.setTitle(next);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          posts = _this$props2.posts,
          navigation = _this$props2.navigation,
          error = _this$props2.error;
        var id = navigation.state.params.id;
        var post = posts.posts[id];
        var related = posts.related[id] || [];
        var link = post && posts.links[post.metaPost];
        if (error && !post) {
          return _react.default.createElement(_error.default, {
            error: this.props.error,
            parent: 'singlepost',
            reloadFunction: this.reload,
            __source: { fileName: _jsxFileName, lineNumber: 100, columnNumber: 9 }
          });
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 109, columnNumber: 7 }
          },
          _react.default.createElement(
            _singlePost.default,
            (0, _extends2.default)(
              {
                postId: id,
                post: post,
                link: link,
                singlePostEditing: this.setEditing,
                error: this.error,
                related: related
              },
              this.props,
              { __source: { fileName: _jsxFileName, lineNumber: 110, columnNumber: 9 } }
            )
          ),
          _react.default.createElement(_customSpinnerRelative.default, {
            visible: !post && !this.props.error,
            __source: { fileName: _jsxFileName, lineNumber: 119, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return SinglePostContainer;
})(_react.Component);
(0, _defineProperty2.default)(SinglePostContainer, 'propTypes', {
  navigation: _propTypes.default.object,
  actions: _propTypes.default.object,
  comments: _propTypes.default.object,
  users: _propTypes.default.object,
  auth: _propTypes.default.object,
  error: _propTypes.default.bool,
  posts: _propTypes.default.object
});
function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts,
    user: state.user,
    error: state.error.singlepost,
    comments: state.comments,
    users: state.user,
    tags: state.tags
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(
          _objectSpread(
            _objectSpread(
              _objectSpread(
                _objectSpread(
                  _objectSpread(
                    _objectSpread(
                      _objectSpread(
                        _objectSpread(_objectSpread({}, statsActions), tagActions),
                        authActions
                      ),
                      commentActions
                    ),
                    postActions
                  ),
                  animationActions
                ),
                investActions
              ),
              userActions
            ),
            createPostActions
          ),
          navigationActions
        ),
        tooltipActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(SinglePostContainer);
exports.default = _default;
//# sourceMappingURL=singlePost.container.js.map
