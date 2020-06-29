'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _percent = _interopRequireDefault(require('../../stats/mobile/percent.component'));
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/tabBar.component.js';
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
var styles;
var Emoji = _reactNativeWeb.Text;
if (_reactNativeWeb.Platform.OS === 'android') {
  Emoji = require('react-native-emoji-compat-text').default;
}
TabBar.propTypes = {
  currentTab: _propTypes.default.object,
  changeTab: _propTypes.default.func,
  tabs: _propTypes.default.array
};
var _default = (0, _react.memo)(TabBar);
exports.default = _default;
function TabBar(_ref) {
  var tabs = _ref.tabs,
    currentTab = _ref.currentTab,
    changeTab = _ref.changeTab;
  return _react.default.createElement(
    _reactNativeWeb.View,
    {
      style: styles.footer,
      __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 5 }
    },
    tabs.map(function(t) {
      return _react.default.createElement(Tab, {
        key: t.key,
        tab: t,
        currentTab: currentTab,
        changeTab: changeTab,
        __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 9 }
      });
    })
  );
}
Tab.propTypes = {
  tab: _propTypes.default.object,
  currentTab: _propTypes.default.object,
  changeTab: _propTypes.default.func
};
function Tab(_ref2) {
  var tab = _ref2.tab,
    currentTab = _ref2.currentTab,
    changeTab = _ref2.changeTab;
  var notif = (0, _reactRedux.useSelector)(function(state) {
    return state.notif;
  });
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var active = tab.key === currentTab.key;
  var badge = tab.params.title === 'Activity' && notif.count && notif.count;
  var fontAdjust = tab.params.title === 'Wallet' &&
    _reactNativeWeb.Platform.OS === 'ios' && { fontSize: 23 };
  var defaultIcon = _react.default.createElement(
    Emoji,
    {
      style: [
        styles.icon,
        styles.textCenter,
        fontAdjust,
        active ? styles.footerTextActive : null
      ],
      __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 5 }
    },
    tab.params.icon
  );
  var defaultTitle = _react.default.createElement(
    _uni.SmallText,
    {
      fs: 1.25,
      c: active ? _styles.colors.blue : _styles.colors.grey,
      __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 5 }
    },
    tab.params.title
  );
  var profileTab = tab.key === 'myProfile';
  var icon =
    profileTab && user && user.image
      ? _react.default.createElement(_reactNativeWeb.Image, {
          source: { uri: user.image },
          style: [styles.footerImg],
          __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 7 }
        })
      : defaultIcon;
  var title =
    profileTab && user
      ? _react.default.createElement(
          _reactNativeWeb.View,
          { __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 7 } },
          _react.default.createElement(_percent.default, {
            fontSize: 10,
            fontFamily: 'Arial',
            user: user,
            __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 9 }
          })
        )
      : defaultTitle;
  return _react.default.createElement(
    _reactNativeWeb.View,
    {
      style: { flex: 1 },
      key: tab.key,
      __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 5 }
    },
    _react.default.createElement(
      _reactNativeWeb.TouchableHighlight,
      {
        onPress: function onPress() {
          return requestAnimationFrame(function() {
            return changeTab(tab.key);
          });
        },
        underlayColor: 'transparent',
        style: [
          styles.footerItem,
          { borderBottomColor: active ? _styles.colors.blue : 'transparent' }
        ],
        __source: { fileName: _jsxFileName, lineNumber: 96, columnNumber: 7 }
      },
      _react.default.createElement(
        _reactNativeWeb.View,
        {
          style: styles.footerItemView,
          __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 9 }
        },
        _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: styles.footerItemInner,
            __source: { fileName: _jsxFileName, lineNumber: 105, columnNumber: 11 }
          },
          icon
        ),
        title
      )
    ),
    badge
      ? _react.default.createElement(
          _reactNativeWeb.View,
          {
            pointerEvents: 'none',
            style: styles.notifCount,
            __source: { fileName: _jsxFileName, lineNumber: 110, columnNumber: 9 }
          },
          _react.default.createElement(
            _reactNativeWeb.Text,
            {
              style: styles.notifText,
              __source: { fileName: _jsxFileName, lineNumber: 111, columnNumber: 11 }
            },
            badge
          )
        )
      : null
  );
}
var localStyles = _reactNativeWeb.StyleSheet.create({
  footer: {
    width: _global.fullWidth,
    height: _global.IphoneX ? 83 : 50,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    borderTopWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderTopColor: 'black',
    paddingBottom: _global.IphoneX ? 33 : 0
  },
  footerItem: {
    flex: 1,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerItemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2
  },
  footerItemInner: { height: 27, justifyContent: 'flex-start' },
  footerImg: { resizeMode: 'cover', height: 25, width: 25, borderRadius: 12.5 },
  icon: { fontSize: 20, opacity: 1, color: 'black', width: 25 }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
//# sourceMappingURL=tabBar.component.js.map
