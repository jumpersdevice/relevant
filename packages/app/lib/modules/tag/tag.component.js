'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Tag;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _uni = require('../styled/uni');
var _navigation = require('../navigation/navigation.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/tag/tag.component.js';
Tag.propTypes = {
  name: _propTypes.default.string,
  community: _propTypes.default.string,
  noLink: _propTypes.default.bool
};
function Tag(_ref) {
  var community = _ref.community,
    name = _ref.name,
    noLink = _ref.noLink,
    rest = (0, _objectWithoutProperties2.default)(_ref, ['community', 'name', 'noLink']);
  var filter = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.discover.sort;
  });
  var link = encodeURI(
    '/'
      .concat(community, '/')
      .concat(filter || 'new', '/')
      .concat(name)
  );
  var dispatch = (0, _reactRedux.useDispatch)();
  return _react.default.createElement(
    _ULink.default,
    {
      hu: true,
      type: 'text',
      to: link,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      onPress: function onPress() {
        return dispatch((0, _navigation.goToTopic)(name));
      },
      noLink: noLink,
      inline: 1,
      __source: { fileName: _jsxFileName, lineNumber: 19, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.SmallText,
      (0, _extends2.default)({ inline: 1 }, rest, {
        __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 }
      }),
      '#',
      name,
      ' '
    )
  );
}
//# sourceMappingURL=tag.component.js.map
