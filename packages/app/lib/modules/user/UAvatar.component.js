'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _uni = require('../styled/uni');
var _layout = require('../../styles/layout');
var _navigation = require('../navigation/navigation.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/user/UAvatar.component.js';
UAvatar.propTypes = {
  user: _propTypes.default.object,
  size: _propTypes.default.number,
  noLink: _propTypes.default.bool,
  m: _propTypes.default.string,
  goToProfile: _propTypes.default.func,
  style: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.array
  ])
};
function UAvatar(_ref) {
  var size = _ref.size,
    user = _ref.user,
    m = _ref.m,
    _onPress = _ref.goToProfile,
    style = _ref.style,
    noLink = _ref.noLink;
  var dispatch = (0, _reactRedux.useDispatch)();
  if (!user) return null;
  var profileLink = '/user/profile/' + user.handle;
  var image = user.image
    ? { uri: user.image }
    : require('../../../public/img/default_user.jpg');
  var imageSize = size || _layout.AVATAR_SIZE;
  var AvatarImage = _react.default.createElement(_uni.Image, {
    source: image,
    h: imageSize,
    w: imageSize,
    bradius: imageSize / 2,
    __source: { fileName: _jsxFileName, lineNumber: 26, columnNumber: 5 }
  });
  if (noLink) {
    return _react.default.createElement(
      _uni.View,
      {
        style: style,
        m: m,
        __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 7 }
      },
      AvatarImage
    );
  }
  return _react.default.createElement(
    _uni.View,
    {
      style: style,
      m: m,
      __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 5 }
    },
    _react.default.createElement(
      _ULink.default,
      {
        onPress: function onPress() {
          return _onPress ? _onPress(user) : dispatch((0, _navigation.goToProfile)(user));
        },
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        to: profileLink,
        __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 7 }
      },
      AvatarImage
    )
  );
}
var _default = (0, _react.memo)(UAvatar);
exports.default = _default;
//# sourceMappingURL=UAvatar.component.js.map
