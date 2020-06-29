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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var commentActions = _interopRequireWildcard(require('../comment.actions'));
var investActions = _interopRequireWildcard(require('../../post/invest.actions'));
var createPostActions = _interopRequireWildcard(
  require('../../createPost/createPost.actions')
);
var animationActions = _interopRequireWildcard(
  require('../../animation/animation.actions')
);
var _comment2 = _interopRequireDefault(require('./comment.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/web/singleComment.container.js';
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
var SingleComment = (function(_Component) {
  (0, _inherits2.default)(SingleComment, _Component);
  var _super = _createSuper(SingleComment);
  function SingleComment() {
    var _this;
    (0, _classCallCheck2.default)(this, SingleComment);
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
    return _this;
  }
  (0, _createClass2.default)(SingleComment, [
    { key: 'componentDidMount', value: function componentDidMount() {} },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          comment = _this$props.comment,
          nestingLevel = _this$props.nestingLevel,
          screenSize = _this$props.screenSize,
          parentPost = _this$props.parentPost,
          preview = _this$props.preview,
          hidePostButtons = _this$props.hidePostButtons,
          inMainFeed = _this$props.inMainFeed,
          avatarText = _this$props.avatarText,
          noLink = _this$props.noLink,
          hideBorder = _this$props.hideBorder,
          user = _this$props.user,
          hideAvatar = _this$props.hideAvatar,
          actions = _this$props.actions,
          additionalNesting = _this$props.additionalNesting;
        if (!comment) return null;
        return _react.default.createElement(_comment2.default, {
          activeComment: this.state.activeComment,
          setActiveComment: this.setActiveComment,
          nestingLevel: nestingLevel || 0,
          screenSize: screenSize,
          inMainFeed: inMainFeed,
          avatarText: avatarText,
          noLink: noLink,
          hideBorder: hideBorder,
          hideAvatar: hideAvatar,
          preview: preview,
          parentPost: parentPost,
          hidePostButtons: hidePostButtons,
          comment: comment,
          user: user,
          auth: actions,
          actions: actions,
          additionalNesting: additionalNesting,
          __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 }
        });
      }
    }
  ]);
  return SingleComment;
})(_react.Component);
(0, _defineProperty2.default)(SingleComment, 'propTypes', {
  actions: _propTypes.default.object,
  user: _propTypes.default.object,
  comment: _propTypes.default.object,
  hidePostButtons: _propTypes.default.bool,
  screenSize: _propTypes.default.number,
  nestingLevel: _propTypes.default.number,
  parentPost: _propTypes.default.object,
  preview: _propTypes.default.bool,
  hideAvatar: _propTypes.default.bool,
  hideBorder: _propTypes.default.bool,
  noLink: _propTypes.default.bool,
  avatarText: _propTypes.default.func,
  inMainFeed: _propTypes.default.bool,
  additionalNesting: _propTypes.default.number
});
var _default = (0, _reactRedux.connect)(
  function(state) {
    return {
      auth: state.auth,
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
)(SingleComment);
exports.default = _default;
//# sourceMappingURL=singleComment.container.js.map
