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
var _customList = _interopRequireDefault(
  require('../../listview/mobile/customList.component')
);
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/mobile/userList.component.js';
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
var UserList = (function(_Component) {
  (0, _inherits2.default)(UserList, _Component);
  var _super = _createSuper(UserList);
  function UserList(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, UserList);
    _this = _super.call(this, props, context);
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {};
    _this.loading = true;
    return _this;
  }
  (0, _createClass2.default)(UserList, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;
        this.onInteraction = _reactNativeWeb.InteractionManager.runAfterInteractions(
          function() {
            _this2.loading = false;
            _this2.load();
            _this2.forceUpdate();
          }
        );
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.onInteraction) this.onInteraction.cancel();
      }
    },
    {
      key: 'load',
      value: function load(view, length) {
        if (length === undefined) length = 0;
        this.props.getDataAction(view, length);
      }
    },
    {
      key: 'render',
      value: function render() {
        var data = this.props.getViewData();
        var listEl = _react.default.createElement(_CustomSpinner.default, {
          __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 18 }
        });
        if (!this.loading) {
          listEl = _react.default.createElement(_customList.default, {
            data: data.data || [],
            loaded: data.loaded,
            renderRow: this.props.renderRow,
            load: this.load,
            type: this.props.type,
            parent: 'discover',
            active: true,
            view: 0,
            scrollableTab: true,
            __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 9 }
          });
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 12 }
          },
          listEl
        );
      }
    }
  ]);
  return UserList;
})(_react.Component);
exports.default = UserList;
(0, _defineProperty2.default)(UserList, 'propTypes', {
  getDataAction: _propTypes.default.func,
  getViewData: _propTypes.default.func,
  renderRow: _propTypes.default.func,
  type: _propTypes.default.string
});
UserList.propTypes = {
  getViewData: _propTypes.default.func,
  renderRow: _propTypes.default.func,
  getDataAction: _propTypes.default.func,
  type: _propTypes.default.string
};
//# sourceMappingURL=userList.component.js.map
