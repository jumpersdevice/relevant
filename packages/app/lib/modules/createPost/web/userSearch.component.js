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
var _uni = require('../../styled/uni');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/web/userSearch.component.js';
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
var UserSelect = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'userSearchcomponent__UserSelect',
  componentId: 'sdnxgq-0'
})(['&:hover{background:', ';}', ''], _styles.colors.lightGrey, function(p) {
  return p.selected ? '\n    background: '.concat(_styles.colors.lightGrey, ';\n  ') : '';
});
var Container = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'userSearchcomponent__Container',
  componentId: 'sdnxgq-1'
})([
  'max-height:250px;min-width:250px;overflow-y:scroll;overflow-x:hidden;background:white;'
]);
var USER_ELEMENT_HEIGHT = 38;
var UserSuggestion = (function(_Component) {
  (0, _inherits2.default)(UserSuggestion, _Component);
  var _super = _createSuper(UserSuggestion);
  function UserSuggestion() {
    (0, _classCallCheck2.default)(this, UserSuggestion);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(UserSuggestion, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.updateScrollPosition();
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.updateScrollPosition();
      }
    },
    {
      key: 'updateScrollPosition',
      value: function updateScrollPosition() {
        var offset = Math.max(this.props.userSearchIndex - 1, 0) * USER_ELEMENT_HEIGHT;
        if (this.el) this.el.scrollTop = offset;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this = this;
        if (!this.props.users || !this.props.users.length) {
          return null;
        }
        var selected = this.props.userSearchIndex;
        var inner = this.props.users.map(function(user, i) {
          return _react.default.createElement(
            UserSelect,
            {
              p: '1 3',
              key: i,
              selected: selected === i ? 'selected' : '',
              onClick: function onClick() {
                return _this.props.onChange(user);
              },
              __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 7 }
            },
            _react.default.createElement(_avatarbox.default, {
              user: user,
              noLink: true,
              __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 9 }
            })
          );
        });
        return _react.default.createElement(
          Container,
          {
            wrap: true,
            fdirection: 'row',
            bl: true,
            bb: true,
            br: true,
            mt: '1px',
            ref: function ref(el) {
              _this.el = el;
            },
            className: 'userSearch',
            __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 7 }
          },
          inner
        );
      }
    }
  ]);
  return UserSuggestion;
})(_react.Component);
exports.default = UserSuggestion;
(0, _defineProperty2.default)(UserSuggestion, 'propTypes', {
  userSearchIndex: _propTypes.default.number,
  users: _propTypes.default.array,
  onChange: _propTypes.default.func
});
//# sourceMappingURL=userSearch.component.js.map
