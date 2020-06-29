'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Banner;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _navigation = require('./navigation.actions');
var _uni = require('../styled/uni');
var _appStoreButtons = _interopRequireDefault(require('../web_about/appStoreButtons'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/bannerButtons.js';
Banner.propTypes = {
  location: _propTypes.default.object,
  history: _propTypes.default.object
};
function Banner(_ref) {
  var location = _ref.location,
    history = _ref.history;
  var dispatch = (0, _reactRedux.useDispatch)();
  var screenSize = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.screenSize;
  });
  if (screenSize > 0)
    return _react.default.createElement(_appStoreButtons.default, {
      mt: [8, 4],
      mb: [0, 1],
      __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 30 }
    });
  var setRedirect = function setRedirect() {
    return history.replace({ search: '?redirect='.concat(location.pathname) });
  };
  return _react.default.createElement(
    _uni.View,
    {
      display: 'flex',
      fdirection: 'row',
      justify: ['flex-start'],
      __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.Button,
      {
        onPress: function onPress() {
          setRedirect();
          dispatch((0, _navigation.showModal)('login'));
        },
        mr: 4,
        __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }
      },
      'Login'
    ),
    _react.default.createElement(
      _uni.Button,
      {
        onPress: function onPress() {
          setRedirect();
          dispatch((0, _navigation.showModal)('signupSocial'));
        },
        mr: 0,
        __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 7 }
      },
      'Sign Up'
    )
  );
}
//# sourceMappingURL=bannerButtons.js.map
