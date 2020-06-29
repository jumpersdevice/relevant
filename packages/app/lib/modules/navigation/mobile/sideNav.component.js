'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNativeWeb = require('react-native-web');
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _navProfile = _interopRequireDefault(require('../../profile/navProfile.component'));
var _communityNav = _interopRequireDefault(
  require('../../community/communityNav.component')
);
var _styles = require('../../../styles');
var navigationActions = _interopRequireWildcard(require('../navigation.actions'));
var _uni = require('../../styled/uni');
var _reactNavigation = require('react-navigation');
var _ULink = _interopRequireDefault(require('../ULink.component'));
var _sideNavFooter = _interopRequireDefault(require('../sideNavFooter.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/sideNav.component.js';
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
var LogoContainer = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'sideNavcomponent__LogoContainer',
  componentId: 'w7es61-0'
})(['background-color:', ';', ''], _styles.colors.secondaryBG, _styles.mixins.border);
var logoLink = '/relevant/new';
var SideNav = function SideNav(props) {
  return _react.default.createElement(
    _reactNavigation.SafeAreaView,
    {
      style: { backgroundColor: _styles.colors.secondaryBG },
      __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 3 }
    },
    _react.default.createElement(
      _reactNativeWeb.ScrollView,
      {
        stickyHeaderIndices: [0],
        __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 5 }
      },
      _react.default.createElement(
        LogoContainer,
        {
          bb: true,
          h: 8,
          __source: { fileName: _jsxFileName, lineNumber: 26, columnNumber: 7 }
        },
        _react.default.createElement(
          _ULink.default,
          {
            align: 'flex-start',
            onPress: function onPress() {
              return props.actions.goToTab('discover');
            },
            to: logoLink,
            __source: { fileName: _jsxFileName, lineNumber: 27, columnNumber: 9 }
          },
          _react.default.createElement(
            _uni.View,
            {
              pl: 2,
              flex: 1,
              align: 'center',
              fdirection: 'row',
              __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 11 }
            },
            _react.default.createElement(_uni.Image, {
              h: 6,
              w: 16,
              resizeMode: 'contain',
              source: require('../../../../public/img/logo-opt.png'),
              alt: 'Relevant',
              __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 13 }
            })
          )
        )
      ),
      _react.default.createElement(
        _uni.View,
        {
          flex: 1,
          __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }
        },
        _react.default.createElement(
          _navProfile.default,
          (0, _extends2.default)({}, props, {
            __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 }
          })
        )
      ),
      _react.default.createElement(
        _uni.View,
        {
          flex: 1,
          __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 7 }
        },
        _react.default.createElement(
          _communityNav.default,
          (0, _extends2.default)(
            {
              viewCommunityMembers: function viewCommunityMembers() {
                return props.navigation.navigate('communityMembers');
              }
            },
            props,
            { __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 9 } }
          )
        )
      ),
      _react.default.createElement(
        _uni.View,
        {
          mt: 4,
          flex: 1,
          __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 7 }
        },
        _react.default.createElement(
          _sideNavFooter.default,
          (0, _extends2.default)({}, props, {
            __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 9 }
          })
        )
      )
    )
  );
};
SideNav.propTypes = {
  className: _propTypes.default.string,
  actions: _propTypes.default.object,
  screenSize: _propTypes.default.number,
  navigation: _propTypes.default.object
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    screenSize: state.navigation.screenSize
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps, function(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread({}, navigationActions),
      dispatch
    )
  };
})(SideNav);
exports.default = _default;
//# sourceMappingURL=sideNav.component.js.map
