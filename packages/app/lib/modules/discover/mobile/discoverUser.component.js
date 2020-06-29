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
var _global = require('../../../styles/global');
var _stats = _interopRequireDefault(require('../../stats/mobile/stats.component'));
var _avatarbox = _interopRequireDefault(require('../../user/avatarbox.component'));
var _textBody = _interopRequireDefault(require('../../text/mobile/textBody.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/mobile/discoverUser.component.js';
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
var DiscoverUser = (function(_Component) {
  (0, _inherits2.default)(DiscoverUser, _Component);
  var _super = _createSuper(DiscoverUser);
  function DiscoverUser(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, DiscoverUser);
    _this = _super.call(this, props, context);
    _this.setSelected = _this.setSelected.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(DiscoverUser, [
    {
      key: 'setSelected',
      value: function setSelected() {
        var _this$props = this.props,
          user = _this$props.user,
          type = _this$props.type,
          actions = _this$props.actions;
        if (type === 'invite') return;
        if (!user._id) return;
        actions.goToProfile(user);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props2 = this.props,
          user = _this$props2.user,
          showRelevance = _this$props2.showRelevance;
        if (!user) return null;
        var relevance = this.props.topic
          ? user[this.props.topic + '_relevance']
          : user.relevance;
        var stats = _react.default.createElement(_stats.default, {
          type: 'percent',
          topic: this.props.topic,
          entity: user,
          renderLeft: this.props.topic
            ? _react.default.createElement(_reactNativeWeb.Text, {
                __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 40 }
              })
            : null,
          __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }
        });
        var right = this.props.renderRight ? this.props.renderRight() : stats;
        var bioEl = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: styles.bioContainer,
            __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 7 }
          },
          _react.default.createElement(
            _textBody.default,
            {
              actions: this.props.actions,
              style: [styles.discoverBio, styles.darkGrey],
              numberOfLines: 3,
              __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 9 }
            },
            this.props.user.bio
          )
        );
        return _react.default.createElement(
          _reactNativeWeb.TouchableHighlight,
          {
            underlayColor: 'transparent',
            onPress: function onPress() {
              return _this2.setSelected();
            },
            __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.discoverUserContainer,
              __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: [styles.discoverUser],
                __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 11 }
              },
              _react.default.createElement(_avatarbox.default, {
                bio: this.props.bio,
                big: true,
                inline: 1,
                type: this.props.type,
                relevance: this.props.topic ? false : this.props.relevance,
                user: _objectSpread(
                  _objectSpread({}, user),
                  {},
                  { relevance: relevance }
                ),
                setSelected: this.setSelected,
                showRelevance: showRelevance,
                __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 13 }
              }),
              _react.default.createElement(
                _reactNativeWeb.View,
                {
                  style: { alignItems: 'flex-end', justifyContent: 'center' },
                  __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 13 }
                },
                right
              )
            ),
            this.props.user.bio && this.props.bio ? bioEl : null
          )
        );
      }
    }
  ]);
  return DiscoverUser;
})(_react.Component);
(0, _defineProperty2.default)(DiscoverUser, 'propTypes', {
  type: _propTypes.default.string,
  user: _propTypes.default.object,
  actions: _propTypes.default.object,
  topic: _propTypes.default.string,
  renderRight: _propTypes.default.func,
  bio: _propTypes.default.bool,
  relevance: _propTypes.default.number,
  showRelevance: _propTypes.default.bool
});
var _default = DiscoverUser;
exports.default = _default;
var localStyles = _reactNativeWeb.StyleSheet.create({
  bioContainer: { marginLeft: 51 },
  discoverBio: {
    fontFamily: 'Georgia',
    fontSize: 30 / 2,
    lineHeight: 40 / 2,
    paddingTop: 15,
    paddingBottom: 5
  },
  discoverUser: { flex: 1, flexDirection: 'row' },
  discoverUserContainer: {
    paddingVertical: 20,
    paddingHorizontal: _global.mainPadding,
    borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderBottomColor: '#242425'
  }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
//# sourceMappingURL=discoverUser.component.js.map
