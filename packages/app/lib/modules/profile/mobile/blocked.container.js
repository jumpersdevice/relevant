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
var _global = require('../../../styles/global');
var userActions = _interopRequireWildcard(require('../../user/user.actions'));
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var _userList = _interopRequireDefault(require('./userList.component'));
var _discoverUser = _interopRequireDefault(
  require('../../discover/mobile/discoverUser.component')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/mobile/blocked.container.js';
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
var styles;
var Blocked = (function(_Component) {
  (0, _inherits2.default)(Blocked, _Component);
  var _super = _createSuper(Blocked);
  function Blocked(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Blocked);
    _this = _super.call(this, props, context);
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.getDataAction = _this.getDataAction.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.renderRight = _this.renderRight.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.getViewData = _this.getViewData.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(Blocked, [
    {
      key: 'getViewData',
      value: function getViewData() {
        var data = [];
        if (this.props.auth.user) {
          data = this.props.auth.user.blocked;
        }
        var loaded = true;
        return { data: data, loaded: loaded };
      }
    },
    {
      key: 'getDataAction',
      value: function getDataAction() {
        this.props.actions.getBlocked();
      }
    },
    {
      key: 'renderRow',
      value: function renderRow(rowData) {
        var _this2 = this;
        var user = rowData;
        if (!user || !user._id) return null;
        return _react.default.createElement(
          _discoverUser.default,
          (0, _extends2.default)({ relevance: false, user: user }, this.props, {
            renderRight: function renderRight() {
              return _this2.renderRight(rowData);
            },
            __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 7 }
          })
        );
      }
    },
    {
      key: 'renderRight',
      value: function renderRight(props) {
        var _this3 = this;
        var inner = _react.default.createElement(
          _reactNativeWeb.TouchableHighlight,
          {
            underlayColor: 'transparent',
            style: [styles.button, { alignSelf: 'flex-end' }],
            onPress: function onPress() {
              return _this3.props.actions.updateBlock(props._id, true);
            },
            __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [styles.bebas, styles.votes],
              __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 9 }
            },
            'Unblock'
          )
        );
        return inner;
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(_userList.default, {
          getViewData: this.getViewData,
          renderRow: this.renderRow,
          getDataAction: this.getDataAction,
          type: 'Blocked Users ',
          __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 7 }
        });
      }
    }
  ]);
  return Blocked;
})(_react.Component);
(0, _defineProperty2.default)(Blocked, 'propTypes', {
  auth: _propTypes.default.object,
  actions: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  votes: { alignSelf: 'center', fontSize: 17 },
  button: {
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: 'grey',
    borderWidth: _reactNativeWeb.StyleSheet.hairlineWidth
  }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
function mapStateToProps(state) {
  return { users: state.user.users, auth: state.auth };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(_objectSpread({}, postActions), userActions),
        navigationActions
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Blocked);
exports.default = _default;
//# sourceMappingURL=blocked.container.js.map
