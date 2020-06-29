'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Signup3Box;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _contract = require('../../contract/contract.hooks');
var _uni = require('../../styled/uni');
var _box = require('../3box.hooks');
var _reactNativeWeb = require('react-native-web');
var _ethers = require('ethers');
var _profile = _interopRequireDefault(require('./profile.form'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/web/signup3Box.js';
Signup3Box.propTypes = { close: _propTypes.default.func };
function Signup3Box(_ref) {
  var close = _ref.close;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    _useState2$ = (0, _slicedToArray2.default)(_useState2[0], 2),
    profileEror = _useState2$[0],
    profile = _useState2$[1],
    setProfile = _useState2[1];
  var _useWeb = (0, _contract.useWeb3)(),
    _useWeb2 = (0, _slicedToArray2.default)(_useWeb, 1),
    accounts = _useWeb2[0];
  var metamask = (0, _contract.useMetamask)();
  var address = accounts && _ethers.utils.getAddress(accounts[0]);
  (0, _react.useEffect)(
    function() {
      if (address) setProfile([]);
    },
    [address]
  );
  (0, _box.use3BoxProfile)({
    address: address,
    metamask: metamask,
    setProfile: setProfile
  });
  var initialValues = profile
    ? { username: profile.name, image: getImg(profile), email: profile.email }
    : {};
  var signature = profile && profile.signature;
  var additionalFields = profile && {
    signature: signature,
    ethLogin: address,
    msg: profile.msg
  };
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 5 } },
    _react.default.createElement(
      _uni.Header,
      { mb: 2, __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 7 } },
      'Sign up with 3box'
    ),
    address &&
      !profile &&
      _react.default.createElement(
        _uni.View,
        { mt: 4, __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 9 } },
        _react.default.createElement(_reactNativeWeb.ActivityIndicator, {
          __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.Text,
          {
            mt: 2,
            __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 11 }
          },
          'Fetching 3box profile...'
        )
      ),
    address &&
      !profile &&
      _react.default.createElement(
        _uni.Text,
        { mt: 1, __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 31 } },
        'Address: ',
        address
      ),
    !signature &&
      _react.default.createElement(
        _uni.WarningBox,
        { mt: 4, __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 9 } },
        _react.default.createElement(
          _uni.Text,
          { __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 } },
          'Please sign the authorization message using Metamask'
        )
      ),
    profileEror &&
      _react.default.createElement(
        _uni.ErrorBox,
        { mt: 4, __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 9 } },
        _react.default.createElement(
          _uni.Text,
          { __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 11 } },
          profileEror
        )
      ),
    _react.default.createElement(_uni.View, {
      mt: 2,
      __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 7 }
    }),
    address &&
      profile &&
      signature &&
      _react.default.createElement(_profile.default, {
        initialValues: initialValues,
        additionalFields: additionalFields,
        close: close,
        __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 9 }
      })
  );
}
function getImg(profile) {
  if (!profile.image || !profile.image.length) return null;
  var url = profile.image[0].contentUrl;
  if (!url) return null;
  return url['/'] ? 'https://ipfs.infura.io/ipfs/' + url['/'] : url;
}
//# sourceMappingURL=signup3Box.js.map
