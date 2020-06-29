'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _get = _interopRequireDefault(require('lodash/get'));
var _reactRouterDom = require('react-router-dom');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _styles = require('../../../styles');
var commentActions = _interopRequireWildcard(require('../comment.actions'));
var investActions = _interopRequireWildcard(require('../../post/invest.actions'));
var createPostActions = _interopRequireWildcard(
  require('../../createPost/createPost.actions')
);
var animationActions = _interopRequireWildcard(
  require('../../animation/animation.actions')
);
var _uni = require('../../styled/uni');
var _commentForm = _interopRequireDefault(require('./commentForm.component'));
var _comment2 = _interopRequireDefault(require('./comment.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/web/comment.container.js';
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
var Comments = (function(_Component) {
  (0, _inherits2.default)(Comments, _Component);
  var _super = _createSuper(Comments);
  function Comments() {
    var _this;
    (0, _classCallCheck2.default)(this, Comments);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      activeComment: null
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'setActiveComment',
      function(commentId) {
        var activeComment = _this.state.activeComment === commentId ? null : commentId;
        _this.setState({ activeComment: activeComment });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'scrollTo',
      function(x, y) {
        var paddingY = window.outerHeight / 4;
        window.scrollTo(x, y - paddingY);
      }
    );
    return _this;
  }
  (0, _createClass2.default)(Comments, [
    {
      key: 'scrollToBottom',
      value: function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          comments = _this$props.comments,
          posts = _this$props.posts,
          post = _this$props.post,
          auth = _this$props.auth,
          actions = _this$props.actions,
          myPostInv = _this$props.myPostInv,
          user = _this$props.user,
          match = _this$props.match,
          screenSize = _this$props.screenSize;
        var children = comments.childComments[post._id] || [];
        var focusedComment = (0, _get.default)(match, 'params.commentId', null);
        return _react.default.createElement(
          'div',
          { __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 7 } },
          _react.default.createElement(_commentForm.default, {
            nestingLevel: 0,
            additionalNesting: screenSize ? 0 : _styles.layout.POST_BUTTONS_NESTING_UNITS,
            buttonText: 'Comment',
            parentPost: post,
            p: ['0 4 4 4', '4 2 2 2'],
            __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 9 }
          }),
          children.length !== 0
            ? _react.default.createElement(
                'div',
                {
                  __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 11 }
                },
                children.map(function(id) {
                  var _React$createElement;
                  var comment = posts.posts[id];
                  if (!comment) return null;
                  return _react.default.createElement(
                    _uni.View,
                    {
                      key: id,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 17
                      }
                    },
                    _react.default.createElement(_uni.Divider, {
                      m: ['0 4', 0],
                      screenSize: screenSize,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 19
                      }
                    }),
                    _react.default.createElement(
                      _comment2.default,
                      ((_React$createElement = {
                        auth: auth,
                        comment: comment,
                        actions: actions,
                        myPostInv: myPostInv,
                        user: user,
                        activeComment: _this2.state.activeComment,
                        setActiveComment: _this2.setActiveComment,
                        parentPost: post._id,
                        childComments: comments.childComments,
                        posts: posts
                      }),
                      (0, _defineProperty2.default)(
                        _React$createElement,
                        'parentPost',
                        post
                      ),
                      (0, _defineProperty2.default)(
                        _React$createElement,
                        'nestingLevel',
                        0
                      ),
                      (0, _defineProperty2.default)(
                        _React$createElement,
                        'actions',
                        actions
                      ),
                      (0, _defineProperty2.default)(
                        _React$createElement,
                        'focusedComment',
                        focusedComment
                      ),
                      (0, _defineProperty2.default)(
                        _React$createElement,
                        'scrollTo',
                        _this2.scrollTo
                      ),
                      (0, _defineProperty2.default)(
                        _React$createElement,
                        'screenSize',
                        screenSize
                      ),
                      (0, _defineProperty2.default)(_React$createElement, '__source', {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 19
                      }),
                      _React$createElement)
                    )
                  );
                })
              )
            : null
        );
      }
    }
  ]);
  return Comments;
})(_react.Component);
(0, _defineProperty2.default)(Comments, 'propTypes', {
  actions: _propTypes.default.object,
  match: _propTypes.default.object,
  comments: _propTypes.default.object,
  posts: _propTypes.default.object,
  auth: _propTypes.default.object,
  post: _propTypes.default.object,
  myPostInv: _propTypes.default.object,
  user: _propTypes.default.object,
  screenSize: _propTypes.default.number
});
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(
    function(state) {
      return {
        auth: state.auth,
        comments: state.comments,
        myPostInv: state.investments.myPostInv,
        user: state.user,
        screenSize: state.navigation.screenSize
      };
    },
    function(dispatch) {
      return {
        actions: (0, _redux.bindActionCreators)(
          _objectSpread(
            _objectSpread(
              _objectSpread(_objectSpread({}, commentActions), createPostActions),
              investActions
            ),
            animationActions
          ),
          dispatch
        )
      };
    }
  )(Comments)
);
exports.default = _default;
//# sourceMappingURL=comment.container.js.map
