'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.BoxButton = BoxButton;
exports.MetamaskButton = MetamaskButton;
exports.ConnectDesktopButton = ConnectDesktopButton;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../styled/uni');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _styles = require('../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/auth/socialButtons.js';
var boxIcon = require('../../../public/img/icons/3box.png');
var boxIconComponent = _react.default.createElement(_uni.Image, {
  resizeMode: 'contain',
  source: boxIcon,
  w: 3,
  h: 3,
  mr: 1.5,
  __source: { fileName: _jsxFileName, lineNumber: 10, columnNumber: 3 }
});
var MetamaskIcon = require('../../../public/img/metamask.png');
var MetamaskIconComponent = _react.default.createElement(_uni.Image, {
  resizeMode: 'contain',
  source: MetamaskIcon,
  w: 3,
  h: 3,
  mr: 1.5,
  __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 3 }
});
var DesktopIcon = require('../../../public/img/desktop.png');
var DesktopIconComponent = _react.default.createElement(_uni.Image, {
  resizeMode: 'contain',
  source: DesktopIcon,
  w: 3,
  h: 3,
  mr: 1.5,
  __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 3 }
});
BoxButton.propTypes = {
  onPress: _propTypes.default.func,
  text: _propTypes.default.string
};
function BoxButton(_ref) {
  var text = _ref.text,
    onPress = _ref.onPress,
    styleProps = (0, _objectWithoutProperties2.default)(_ref, ['text', 'onPress']);
  return _react.default.createElement(
    _ULink.default,
    {
      to: '#',
      onClick: onPress,
      __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.LinkFont,
      {
        c: _styles.colors.blue,
        __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.ButtonWithIcon,
        (0, _extends2.default)({}, styleProps, {
          fdirection: 'row',
          bg: 'rgb(248,49,255)',
          image: boxIconComponent,
          text: text,
          __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 9 }
        })
      )
    )
  );
}
MetamaskButton.propTypes = {
  onPress: _propTypes.default.func,
  text: _propTypes.default.string
};
function MetamaskButton(_ref2) {
  var text = _ref2.text,
    onPress = _ref2.onPress,
    styleProps = (0, _objectWithoutProperties2.default)(_ref2, ['text', 'onPress']);
  return _react.default.createElement(
    _ULink.default,
    {
      to: '#',
      onClick: onPress,
      __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.LinkFont,
      {
        c: _styles.colors.blue,
        __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.ButtonWithIcon,
        (0, _extends2.default)({}, styleProps, {
          fdirection: 'row',
          bg: '#161616',
          image: MetamaskIconComponent,
          text: text,
          __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 9 }
        })
      )
    )
  );
}
MetamaskButton.propTypes = {
  onPress: _propTypes.default.func,
  text: _propTypes.default.string
};
ConnectDesktopButton.propTypes = {
  onPress: _propTypes.default.func,
  text: _propTypes.default.string
};
function ConnectDesktopButton(_ref3) {
  var text = _ref3.text,
    onPress = _ref3.onPress,
    styleProps = (0, _objectWithoutProperties2.default)(_ref3, ['text', 'onPress']);
  return _react.default.createElement(
    _ULink.default,
    {
      to: '#',
      onClick: onPress,
      onPress: onPress,
      __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.ButtonWithIcon,
      (0, _extends2.default)({}, styleProps, {
        fdirection: 'row',
        image: DesktopIconComponent,
        text: text,
        __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 7 }
      })
    )
  );
}
//# sourceMappingURL=socialButtons.js.map
