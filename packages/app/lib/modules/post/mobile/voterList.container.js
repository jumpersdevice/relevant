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
var investActions = _interopRequireWildcard(require('../invest.actions'));
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
var _utils = require('../../../utils');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/voterList.container.js';
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
var VoterList = (function(_Component) {
  (0, _inherits2.default)(VoterList, _Component);
  var _super = _createSuper(VoterList);
  function VoterList(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, VoterList);
    _this = _super.call(this, props, context);
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.load = _this.load.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderRight = _this.renderRight.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.state = {};
    _this.loading = false;
    return _this;
  }
  (0, _createClass2.default)(VoterList, [
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;
        this.postId = this.props.navigation.state.params.id;
        this.onInteraction = _reactNativeWeb.InteractionManager.runAfterInteractions(
          function() {
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
      key: 'getViewData',
      value: function getViewData() {
        var _this3 = this;
        var inv = this.props.invest.posts[this.postId];
        var data = [];
        if (inv) {
          data = inv.map(function(id) {
            return _this3.props.invest.investments[id];
          });
        }
        var loaded = this.props.invest.loaded[this.postId];
        return { data: data, loaded: loaded };
      }
    },
    {
      key: 'load',
      value: function load(view, length) {
        if (length === undefined) length = 0;
        this.props.actions.getPostInvestments(this.postId, 100, length);
      }
    },
    {
      key: 'renderRow',
      value: function renderRow(rowData) {
        var _this4 = this;
        var user = this.props.users[rowData.investor];
        if (!user || !rowData) return null;
        return _react.default.createElement(
          _discoverUser.default,
          (0, _extends2.default)({ relevance: true, user: user }, this.props, {
            renderRight: function renderRight() {
              return _this4.renderRight(rowData);
            },
            __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 7 }
          })
        );
      }
    },
    {
      key: 'renderRight',
      value: function renderRight(props) {
        var amount = props.amount,
          relevantPoints = props.relevantPoints;
        var icon = require('../../../../public/img/rup.png');
        var color = { color: _global.darkGrey };
        if (amount < 0) {
          icon = require('../../../../public/img/rdown.png');
        }
        var inner = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flexDirection: 'row', alignItems: 'center' },
            __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [styles.statNumber, color],
              __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 9 }
            },
            '+ '
          ),
          _react.default.createElement(_reactNativeWeb.Image, {
            resizeMode: 'contain',
            style: [styles.r, { height: 16, width: 20 }],
            source: icon,
            __source: { fileName: _jsxFileName, lineNumber: 89, columnNumber: 9 }
          }),
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: [styles.bebas, color, { lineHeight: 17, fontSize: 17 }],
              __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 9 }
            },
            Math.abs(_utils.numbers.abbreviateNumber(relevantPoints))
          )
        );
        if (amount < 0) {
          inner = _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: { flexDirection: 'row', alignItems: 'center' },
              __source: { fileName: _jsxFileName, lineNumber: 102, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.statNumber, color],
                __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 11 }
              },
              '- '
            ),
            _react.default.createElement(_reactNativeWeb.Image, {
              resizeMode: 'contain',
              style: [styles.r, { height: 16, width: 20 }],
              source: icon,
              __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 11 }
            }),
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.bebas, color, { lineHeight: 17, fontSize: 17 }],
                __source: { fileName: _jsxFileName, lineNumber: 109, columnNumber: 11 }
              },
              Math.abs(_utils.numbers.abbreviateNumber(relevantPoints))
            )
          );
        }
        return inner;
      }
    },
    {
      key: 'render',
      value: function render() {
        var data = this.getViewData();
        var listEl = _react.default.createElement(_CustomSpinner.default, {
          __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 18 }
        });
        if (!this.loading) {
          listEl = _react.default.createElement(_customList.default, {
            data: data.data || [],
            loaded: data.loaded,
            renderRow: this.renderRow,
            load: this.load,
            type: 'votes',
            parent: 'discover',
            active: true,
            view: 0,
            scrollableTab: true,
            __source: { fileName: _jsxFileName, lineNumber: 124, columnNumber: 9 }
          });
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 138, columnNumber: 12 }
          },
          listEl
        );
      }
    }
  ]);
  return VoterList;
})(_react.Component);
(0, _defineProperty2.default)(VoterList, 'propTypes', {
  navigation: _propTypes.default.object,
  invest: _propTypes.default.object,
  actions: _propTypes.default.object,
  users: _propTypes.default.object
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  votes: { alignSelf: 'flex-end', fontSize: 17 }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
function mapStateToProps(state) {
  return {
    invest: state.investments,
    users: state.user.users,
    error: state.error.discover,
    tabs: state.navigation.tabs
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(_objectSpread({}, investActions), navigationActions),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VoterList);
exports.default = _default;
//# sourceMappingURL=voterList.container.js.map
