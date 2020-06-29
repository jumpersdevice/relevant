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
var _avatarbox = _interopRequireDefault(require('../../user/avatarbox.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/web/discoverUsers.component.js';
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
var DiscoverUsers = (function(_Component) {
  (0, _inherits2.default)(DiscoverUsers, _Component);
  var _super = _createSuper(DiscoverUsers);
  function DiscoverUsers(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DiscoverUsers);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  (0, _createClass2.default)(DiscoverUsers, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var users = this.props.user.list[this.props.tag || 'all'] || [];
        var userRows = users.map(function(user, i) {
          return _react.default.createElement(DiscoverUser, {
            key: i,
            relevance: _this2.props.tag || false,
            tag: _this2.props.tag,
            user: user,
            __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 7 }
          });
        });
        return _react.default.createElement(
          'div',
          {
            className: 'discoverUsers',
            __source: { fileName: _jsxFileName, lineNumber: 26, columnNumber: 12 }
          },
          userRows
        );
      }
    }
  ]);
  return DiscoverUsers;
})(_react.Component);
(0, _defineProperty2.default)(DiscoverUsers, 'propTypes', {
  user: _propTypes.default.object,
  tag: _propTypes.default.object
});
DiscoverUser.propTypes = {
  user: _propTypes.default.object,
  tag: _propTypes.default.object
};
function DiscoverUser(_ref) {
  var tag = _ref.tag,
    user = _ref.user;
  var relevance = tag ? user[tag + '_relevance'] : user.relevance;
  var bio = user.bio;
  return _react.default.createElement(
    'div',
    {
      className: 'discoverUserContainer',
      __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 5 }
    },
    _react.default.createElement(
      'div',
      {
        className: 'discoverUser',
        __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 7 }
      },
      _react.default.createElement(
        'div',
        {
          className: 'left',
          __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 9 }
        },
        _react.default.createElement(_avatarbox.default, {
          user: user,
          __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 11 }
        })
      ),
      _react.default.createElement(
        'div',
        {
          className: 'right',
          __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }
        },
        _react.default.createElement('img', {
          src: '/img/r-emoji.png',
          className: 'r',
          __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }
        }),
        Math.round(relevance)
      )
    ),
    bio &&
      _react.default.createElement(
        'div',
        {
          className: 'bio',
          __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 15 }
        },
        bio
      )
  );
}
var _default = DiscoverUsers;
exports.default = _default;
//# sourceMappingURL=discoverUsers.component.js.map
