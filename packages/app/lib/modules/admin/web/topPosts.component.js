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
var adminActions = _interopRequireWildcard(require('../admin.actions'));
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var _post2 = _interopRequireDefault(require('../../post/web/post.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/topPosts.component.js';
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
var TopPosts = (function(_Component) {
  (0, _inherits2.default)(TopPosts, _Component);
  var _super = _createSuper(TopPosts);
  function TopPosts() {
    (0, _classCallCheck2.default)(this, TopPosts);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(TopPosts, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.actions.getTopPosts();
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this = this;
        var topPosts = this.props.topPosts;
        var postsEl = topPosts.map(function(p) {
          return _react.default.createElement(
            'div',
            {
              key: p._id,
              __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }
            },
            _react.default.createElement(
              _post2.default,
              (0, _extends2.default)({}, _this.props, {
                post: p,
                __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 9 }
              })
            ),
            _react.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this.props.actions.sendPostNotification(p);
                },
                __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 9 }
              },
              "Send 'Top Post' notification"
            )
          );
        });
        return _react.default.createElement(
          'div',
          {
            className: 'postContainer narrow',
            __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 7 }
          },
          _react.default.createElement(
            'h2',
            { __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 9 } },
            'Top Posts'
          ),
          postsEl
        );
      }
    }
  ]);
  return TopPosts;
})(_react.Component);
(0, _defineProperty2.default)(TopPosts, 'propTypes', {
  actions: _propTypes.default.object,
  topPosts: _propTypes.default.array
});
var _default = (0, _reactRedux.connect)(
  function(state) {
    return { auth: state.auth, topPosts: state.posts.topPosts, user: state.user };
  },
  function(dispatch) {
    return {
      actions: (0, _redux.bindActionCreators)(
        _objectSpread(_objectSpread({}, adminActions), postActions),
        dispatch
      )
    };
  }
)(TopPosts);
exports.default = _default;
//# sourceMappingURL=topPosts.component.js.map
