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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _admin = require('../../admin/admin.actions');
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var postActions = _interopRequireWildcard(require('../../post/post.actions'));
var _reactNativeShare = _interopRequireDefault(require('react-native-share'));
var _inviteModal = _interopRequireDefault(require('../inviteModal.component'));
var _uni = require('../../styled/uni');
var _inviteModalTitle = _interopRequireDefault(require('../inviteModalTitle.component'));
var _styles = require('../../../styles');
var _reactNativeWeb = require('react-native-web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/invites/mobile/invites.container.js';
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
var Invites = (function(_Component) {
  (0, _inherits2.default)(Invites, _Component);
  var _super = _createSuper(Invites);
  function Invites() {
    var _this;
    (0, _classCallCheck2.default)(this, Invites);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleShare',
      function(shareOptions) {
        _reactNativeShare.default
          .open(shareOptions)
          .then(function(res) {})
          .catch(function(err) {});
      }
    );
    return _this;
  }
  (0, _createClass2.default)(Invites, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var community = this.props.auth.community;
        if (community) this.props.actions.getInviteCount();
      }
    },
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _reactNativeWeb.ScrollView,
          {
            style: { backgroundColor: _styles.colors.white },
            __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              m: 2,
              __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 9 }
            },
            _react.default.createElement(_inviteModalTitle.default, {
              __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 11 }
            }),
            _react.default.createElement(
              _inviteModal.default,
              (0, _extends2.default)({ mobile: true }, this.props, {
                onShare: this.handleShare,
                __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 11 }
              })
            )
          )
        );
      }
    }
  ]);
  return Invites;
})(_react.Component);
(0, _defineProperty2.default)(Invites, 'propTypes', {
  actions: _propTypes.default.object,
  auth: _propTypes.default.objec
});
function mapStateToProps(state) {
  return {
    users: state.user.users,
    auth: state.auth,
    invites: state.admin.invites,
    inviteList: state.admin.inviteList,
    community: state.community,
    count: state.admin.count
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread(_objectSpread({}, postActions), navigationActions),
        {},
        {
          createInvite: _admin.createInvite,
          getInviteCount: _admin.getInviteCount,
          getInvites: _admin.getInvites
        }
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Invites);
exports.default = _default;
//# sourceMappingURL=invites.container.js.map
