'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = SettingsModalContainer;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _utils = require('../../../utils');
var _reactRedux = require('react-redux');
var _auth = require('../../auth/auth.actions');
var _settingsModal = _interopRequireDefault(require('./settingsModal.component'));
var _alert = require('../../../utils/alert');
var _toggle = _interopRequireDefault(require('../settings/toggle.container'));
var _login = _interopRequireDefault(require('../../auth/web/login.3box'));
var _uni = require('../../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/web/settingsModal.container.js';
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
SettingsModalContainer.propTypes = { close: _propTypes.default.func };
function SettingsModalContainer(_ref) {
  var close = _ref.close;
  var dispatch = (0, _reactRedux.useDispatch)();
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var submit = (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee(vals) {
        var allVals, image, resp;
        return _regenerator.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  allVals = _objectSpread({}, vals);
                  if (
                    !(allVals.image && allVals.image.preview && allVals.image.fileName)
                  ) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 5;
                  return _utils.s3.toS3Advanced(
                    allVals.image.preview,
                    allVals.image.fileName
                  );
                case 5:
                  image = _context.sent;
                  allVals.image = image.url;
                case 7:
                  _context.next = 9;
                  return dispatch((0, _auth.updateUser)(allVals));
                case 9:
                  resp = _context.sent;
                  if (resp) {
                    close();
                  }
                  _context.next = 16;
                  break;
                case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](0);
                  _alert.browserAlerts.alert(_context.t0);
                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 13]]
        );
      })
    );
    return function submit(_x) {
      return _ref2.apply(this, arguments);
    };
  })();
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 5 } },
    _react.default.createElement(_settingsModal.default, {
      initialValues: user,
      enableReinitialize: true,
      onSubmit: submit,
      __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 7 }
    }),
    _react.default.createElement(
      _uni.Header,
      { __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 7 } },
      'Connect Accounts'
    ),
    _react.default.createElement(
      _uni.View,
      {
        m: '3 0',
        fdirection: 'row',
        align: 'center',
        __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }
      },
      _react.default.createElement(_login.default, {
        type: 'metamask',
        text: 'Connect Ethereum Address',
        __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 9 }
      }),
      user.ethLogin
        ? _react.default.createElement(
            _uni.Text,
            { __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 } },
            'Connected address: ',
            _react.default.createElement(_uni.EthAddress, {
              address: user.ethLogin,
              __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 32 }
            })
          )
        : _react.default.createElement(
            _uni.Text,
            { __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 11 } },
            'Not connected'
          )
    ),
    _react.default.createElement(_toggle.default, {
      __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 7 }
    })
  );
}
//# sourceMappingURL=settingsModal.container.js.map
