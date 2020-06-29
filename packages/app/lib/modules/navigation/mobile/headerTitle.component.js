'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _uni = require('../../styled/uni');
var _this = void 0,
  _jsxFileName =
    '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/headerTitle.component.js';
var HeaderTitle = function HeaderTitle(props) {
  var navigation = props.navigation,
    auth = props.auth,
    navigationOptions = props.navigationOptions,
    community = props.community;
  var state = navigation.state;
  var params = state.params,
    routeName = state.routeName;
  var title = params && params.title ? params.title.trim() : null;
  if (state.routeName === 'myProfileView' && auth.user) {
    title = auth.user.name;
  }
  var communityName;
  if (auth.community) {
    communityName =
      community.communities[auth.community] && community.communities[auth.community].name;
  }
  if (routeName === 'discoverView') {
    title = communityName || 'Communities';
  }
  var clipped = title || navigationOptions.title;
  if (title && title.length > 16) {
    clipped = title.substring(0, _global.smallScreen ? 14 : 18);
    clipped += '...';
  }
  if (
    routeName === 'login' ||
    routeName === 'signup' ||
    routeName === 'imageUpload' ||
    routeName === 'twitterSignup'
  ) {
    return _react.default.createElement(
      _uni.View,
      {
        style: {
          alignItems: 'center',
          paddingVertical: 6,
          backgroundColor: 'transparent'
        },
        __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }
      },
      _react.default.createElement(_reactNativeWeb.Image, {
        source: require('../../../../public/img/logo.png'),
        resizeMode: 'contain',
        style: { width: 120, height: 20, marginBottom: 2 },
        __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 9 }
      })
    );
  }
  return _react.default.createElement(
    _uni.View,
    {
      ref: function ref(c) {
        return (_this.title = c);
      },
      justify: 'center',
      align: 'center',
      alignSelf: 'center',
      __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 5 }
    },
    _react.default.createElement(
      _reactNativeWeb.TouchableOpacity,
      { __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 7 } },
      _react.default.createElement(
        _uni.Title,
        { __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 9 } },
        clipped
      )
    )
  );
};
HeaderTitle.propTypes = {
  community: _propTypes.default.object,
  auth: _propTypes.default.object,
  navigation: _propTypes.default.object,
  navigationOptions: _propTypes.default.object
};
var _default = (0, _reactRedux.connect)(function(state) {
  return { auth: state.auth, community: state.community };
})(HeaderTitle);
exports.default = _default;
//# sourceMappingURL=headerTitle.component.js.map
