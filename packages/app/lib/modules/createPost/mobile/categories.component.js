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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _get = _interopRequireDefault(require('lodash/get'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var createPostActions = _interopRequireWildcard(require('../createPost.actions'));
var tagActions = _interopRequireWildcard(require('../../tag/tag.actions'));
var _auth = require('../../auth/auth.actions');
var _styles = require('../../../styles');
var _tagSelection = _interopRequireDefault(require('./tagSelection.component'));
var _communitySelection = _interopRequireDefault(
  require('./communitySelection.component')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/mobile/categories.component.js';
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
var Categories = (function(_Component) {
  (0, _inherits2.default)(Categories, _Component);
  var _super = _createSuper(Categories);
  function Categories(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Categories);
    _this = _super.call(this, props, context);
    _this.setTopic = _this.setTopic.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(Categories, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        _reactNativeWeb.InteractionManager.runAfterInteractions(function() {
          if (!_this2.props.tags.length) _this2.props.actions.getParentTags();
        });
        if (this.props.createPost.postCategory) {
          this.selectedTopic = this.props.createPost.postCategory;
        }
      }
    },
    {
      key: 'setTopic',
      value: function setTopic(topic) {
        if (this.props.createPost.postCategory === topic) {
          this.selectedTopic = null;
          this.props.actions.setPostCategory(null);
        } else {
          this.selectedTopic = topic;
          this.props.actions.setPostCategory(topic);
        }
        return null;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          createPost = _this$props.createPost,
          actions = _this$props.actions,
          community = _this$props.community;
        var communityTags = [];
        if (community) {
          var activeCommunity =
            (0, _get.default)(community.communities, community.active, {}) || {};
          communityTags = (0, _get.default)(activeCommunity, 'topics', []);
        }
        if (!this.props.tags) {
          return null;
        }
        return _react.default.createElement(
          _reactNativeWeb.ScrollView,
          {
            style: { backgroundColor: _styles.colors.white },
            __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 7 }
          },
          _react.default.createElement(_communitySelection.default, {
            actions: actions,
            community: community,
            __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 9 }
          }),
          _react.default.createElement(_tagSelection.default, {
            topic: null,
            communityTags: communityTags,
            actions: actions,
            createPost: createPost,
            __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return Categories;
})(_react.Component);
(0, _defineProperty2.default)(Categories, 'propTypes', {
  createPost: _propTypes.default.object,
  actions: _propTypes.default.object,
  tags: _propTypes.default.array,
  community: _propTypes.default.object
});
function mapStateToProps(state) {
  return {
    createPost: state.createPost,
    community: state.community,
    user: state.user,
    tags: state.tags.parentTags
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(_objectSpread({}, createPostActions), tagActions),
        {},
        { setCommunity: _auth.setCommunity }
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Categories);
exports.default = _default;
//# sourceMappingURL=categories.component.js.map
