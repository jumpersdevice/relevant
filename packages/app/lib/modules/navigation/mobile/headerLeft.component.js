'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _Ionicons = _interopRequireDefault(require('react-native-vector-icons/Ionicons'));
var _navigation = require('../navigation.actions');
var _hooks = require('../../community/hooks');
var _uni = require('../../styled/uni');
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/headerLeft.component.js';
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
HeaderLeft.propTypes = {
  navigation: _propTypes.default.object,
  screenProps: _propTypes.default.object
};
function HeaderLeft(_ref) {
  var navigation = _ref.navigation,
    screenProps = _ref.screenProps;
  var parent = navigation.dangerouslyGetParent() || navigation;
  var index = parent.state.index;
  var state = navigation.state;
  var params = state.params || {};
  var back;
  var backEl;
  var goBack = function goBack() {
    requestAnimationFrame(function() {
      navigation.goBack(navigation.state.key);
    });
  };
  if (state.routeName === 'createPostUrl' || state.routeName === 'shareAuth') {
    if (params.share) {
      goBack = function goBack() {
        return screenProps.close();
      };
    } else
      goBack = function goBack() {
        return navigation.navigate('main');
      };
  }
  if (index > 0 || params.left) {
    back = _react.default.createElement(_Ionicons.default, {
      name: 'ios-arrow-back',
      size: 28,
      color: _global.darkGrey,
      __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 12 }
    });
    if (params.left) {
      back = _react.default.createElement(
        _reactNativeWeb.Text,
        {
          style: [{ fontSize: 17 }, styles.active],
          __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 14 }
        },
        params.left
      );
    }
    backEl = _react.default.createElement(
      _reactNativeWeb.TouchableOpacity,
      {
        onPress: goBack,
        style: { justifyContent: 'center', padding: 0, paddingHorizontal: 10 },
        __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 7 }
      },
      back
    );
  }
  var unread = (0, _hooks.useTotalUnread)();
  var options = _react.default.createElement(
    _reactNativeWeb.TouchableOpacity,
    {
      onPress: function onPress() {
        return navigation.openDrawer();
      },
      style: { padding: 0, paddingHorizontal: 10 },
      __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 5 }
    },
    _react.default.createElement(
      _reactNativeWeb.View,
      { __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 7 } },
      _react.default.createElement(_Ionicons.default, {
        name: 'ios-options',
        size: 23,
        style: { height: 26 },
        color: _global.darkGrey,
        __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 9 }
      }),
      _react.default.createElement(_uni.Badge, {
        style: { position: 'absolute', bottom: 0, right: -8 },
        number: unread,
        __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 9 }
      })
    )
  );
  return _react.default.createElement(
    _reactNativeWeb.View,
    {
      style: [styles.leftButton, { flexDirection: 'row' }],
      __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 5 }
    },
    backEl || options
  );
}
var localStyles = {
  leftButton: {
    flex: 1,
    marginLeft: _global.mainPadding - 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
};
styles = _reactNativeWeb.StyleSheet.create(
  _objectSpread(_objectSpread({}, localStyles), _global.colors)
);
var _default = (0, _reactRedux.connect)(
  function() {
    return {};
  },
  function(dispatch) {
    return {
      actions: (0, _redux.bindActionCreators)(
        { toggleTopics: _navigation.toggleTopics },
        dispatch
      )
    };
  }
)(HeaderLeft);
exports.default = _default;
//# sourceMappingURL=headerLeft.component.js.map
