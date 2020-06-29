'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = ConnectDesktop;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _reactRedux = require('react-redux');
var _uni = require('../../styled/uni');
var _reactNativeQrcodeScanner = _interopRequireDefault(
  require('react-native-qrcode-scanner')
);
var _reactNativeCamera = require('react-native-camera');
var _utils = require('../../../utils');
var _auth = require('../auth.actions');
var _navigation = require('../../navigation/navigation.actions');
var _global = require('../../../styles/global');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/mobile/connectDesktop.js';
function ConnectDesktop() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var onRead = (function() {
    var _ref = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(e) {
        var token;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                token = e.data;
                _context.next = 3;
                return _utils.storage.setToken(token);
              case 3:
                dispatch((0, _auth.loginUserSuccess)(token));
                dispatch((0, _auth.getUser)());
                dispatch((0, _navigation.hideModal)());
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    );
    return function onRead(_x) {
      return _ref.apply(this, arguments);
    };
  })();
  return _react.default.createElement(
    _uni.Box,
    {
      style: { minHeight: _global.fullHeight - 2 * 48 - (_global.IphoneX ? 33 : 0) },
      __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.AbsoluteView,
      {
        left: '-32px',
        top: _reactNativeWeb.Platform.OS === 'android' ? '-48px' : '0',
        __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 7 }
      },
      _react.default.createElement(_reactNativeQrcodeScanner.default, {
        topViewStyle: { flex: 1, alignItems: 'flex-start' },
        topContent: _react.default.createElement(
          _uni.Box,
          {
            p: 2,
            __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 13 }
          },
          _react.default.createElement(
            _uni.Title,
            { __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 15 } },
            'Log in with Desktop Browser'
          )
        ),
        cameraStyle: { overflow: 'hidden' },
        cameraProps: { flashMode: _reactNativeCamera.RNCamera.Constants.FlashMode.auto },
        onRead: onRead,
        bottomViewStyle: { flex: 1, alignItems: 'flex-start' },
        bottomContent: _react.default.createElement(
          _uni.Box,
          {
            p: 2,
            __source: { fileName: _jsxFileName, lineNumber: 44, columnNumber: 13 }
          },
          _react.default.createElement(
            _uni.Title,
            { __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 15 } },
            'Instructions:'
          ),
          _react.default.createElement(
            _uni.BodyText,
            {
              mt: 1,
              __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 15 }
            },
            '1. Go to relevant.community on your computer'
          ),
          _react.default.createElement(
            _uni.BodyText,
            {
              mt: 0.5,
              __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 15 }
            },
            '2. Log in and navigate to your profile'
          ),
          _react.default.createElement(
            _uni.BodyText,
            {
              mt: 0.5,
              __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 15 }
            },
            "3. Click 'Connect Mobile Device'"
          ),
          _react.default.createElement(
            _uni.BodyText,
            {
              mt: 0.5,
              __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 15 }
            },
            '4. Scan the QR code'
          )
        ),
        __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 9 }
      })
    )
  );
}
//# sourceMappingURL=connectDesktop.js.map
