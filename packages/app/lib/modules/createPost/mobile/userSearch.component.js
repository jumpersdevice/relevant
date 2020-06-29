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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _avatarbox = _interopRequireDefault(require('../../user/avatarbox.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/mobile/userSearch.component.js';
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
var UserSearchComponent = (function(_Component) {
  (0, _inherits2.default)(UserSearchComponent, _Component);
  var _super = _createSuper(UserSearchComponent);
  function UserSearchComponent() {
    (0, _classCallCheck2.default)(this, UserSearchComponent);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(UserSearchComponent, [
    {
      key: 'renderRow',
      value: function renderRow(_ref) {
        var item = _ref.item;
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { padding: 5, flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }
          },
          _react.default.createElement(_avatarbox.default, {
            user: item,
            setSelected: this.props.setSelected,
            __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 9 }
          })
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this = this;
        return _react.default.createElement(_reactNativeWeb.FlatList, {
          automaticallyAdjustContentInsets: false,
          keyboardShouldPersistTaps: 'always',
          contentContainerStyle: { backgroundColor: 'white' },
          style: [{ flex: 1 }],
          keyExtractor: function keyExtractor(item) {
            return item._id;
          },
          data: this.props.users,
          renderItem: function renderItem(rowData) {
            return _this.renderRow(rowData);
          },
          __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 7 }
        });
      }
    }
  ]);
  return UserSearchComponent;
})(_react.Component);
exports.default = UserSearchComponent;
(0, _defineProperty2.default)(UserSearchComponent, 'propTypes', {
  setSelected: _propTypes.default.func,
  users: _propTypes.default.array
});
//# sourceMappingURL=userSearch.component.js.map
