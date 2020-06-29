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
var _community = require('../community.actions');
var navigationActions = _interopRequireWildcard(
  require('../../navigation/navigation.actions')
);
var _discoverUser = _interopRequireDefault(
  require('../../discover/mobile/discoverUser.component')
);
var _customList = _interopRequireDefault(
  require('../../listview/mobile/customList.component')
);
var _CustomSpinner = _interopRequireDefault(
  require('../../ui/mobile/CustomSpinner.component')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/community/mobile/communityMembers.component.js';
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
var CommunityMembers = (function(_Component) {
  (0, _inherits2.default)(CommunityMembers, _Component);
  var _super = _createSuper(CommunityMembers);
  function CommunityMembers(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, CommunityMembers);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'load',
      function(page, length) {
        _this.setState({ loaded: false });
        var community = _this.props.community;
        _this.props.actions
          .getCommunityMembers({
            slug: community.active,
            skip: length,
            limit: _this.pageSize
          })
          .then(function() {
            _this.setState({ loaded: true });
          });
      }
    );
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = { loaded: false };
    _this.pageSize = 20;
    return _this;
  }
  (0, _createClass2.default)(CommunityMembers, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;
        this.onInteraction = _reactNativeWeb.InteractionManager.runAfterInteractions(
          function() {
            _this2.load(0, _this2.pageSize);
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
      key: 'renderRow',
      value: function renderRow(memberId) {
        var members = this.props.community.members;
        var user = members[memberId];
        if (!user || !memberId) return null;
        return _react.default.createElement(
          _discoverUser.default,
          (0, _extends2.default)(
            {
              relevance: true,
              user: _objectSpread(
                _objectSpread({}, user.embeddedUser),
                {},
                { relevance: { pagerank: user.pagerank } }
              ),
              renderRight: function renderRight() {
                return null;
              },
              showRelevance: true
            },
            this.props,
            { __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 7 } }
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var community = this.props.community;
        var loaded = this.state.loaded;
        var active = community.active,
          communityMembers = community.communityMembers;
        var activeCommunityMembers = communityMembers[active] || [];
        var listEl = _react.default.createElement(_CustomSpinner.default, {
          __source: { fileName: _jsxFileName, lineNumber: 84, columnNumber: 18 }
        });
        if (!this.loading) {
          listEl = _react.default.createElement(_customList.default, {
            data: activeCommunityMembers,
            loaded: !!activeCommunityMembers.length || loaded,
            renderRow: this.renderRow,
            load: this.load,
            type: 'community members',
            parent: 'members',
            active: true,
            view: 0,
            scrollableTab: true,
            __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 9 }
          });
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 12 }
          },
          listEl
        );
      }
    }
  ]);
  return CommunityMembers;
})(_react.Component);
(0, _defineProperty2.default)(CommunityMembers, 'propTypes', {
  navigation: _propTypes.default.object,
  invest: _propTypes.default.object,
  actions: _propTypes.default.object,
  users: _propTypes.default.object,
  community: _propTypes.default.object
});
function mapStateToProps(state) {
  return {
    community: state.community,
    invest: state.investments,
    users: state.user.users,
    error: state.error.discover,
    tabs: state.navigation.tabs
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread({}, navigationActions),
        {},
        {
          searchMembers: _community.searchMembers,
          getCommunityMembers: _community.getCommunityMembers
        }
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(CommunityMembers);
exports.default = _default;
//# sourceMappingURL=communityMembers.component.js.map
