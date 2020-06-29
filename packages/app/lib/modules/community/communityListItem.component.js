'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/community/communityListItem.component.js';
var CommunityImage = (0, _primitives.default)(_uni.Image).withConfig({
  displayName: 'communityListItemcomponent__CommunityImage',
  componentId: 'sc-597jb2-0'
})(['background-color:', ';'], function(p) {
  return p.image ? 'transparent' : _styles.colors.grey;
});
CommunityListItem.propTypes = {
  community: _propTypes.default.object,
  c: _propTypes.default.string
};
function CommunityListItem(_ref) {
  var community = _ref.community,
    c = _ref.c,
    rest = (0, _objectWithoutProperties2.default)(_ref, ['community', 'c']);
  var image = community.image
    ? { uri: community.image }
    : require('../../../public/img/default_community.png');
  return _react.default.createElement(
    _uni.View,
    (0, _extends2.default)({ align: 'center', fdirection: 'row' }, rest, {
      __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 5 }
    }),
    _react.default.createElement(CommunityImage, {
      w: 4,
      h: 4,
      mr: 1.5,
      source: image,
      resizeMode: 'cover',
      __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 7 }
    }),
    _react.default.createElement(
      _uni.CommunityLink,
      {
        lh: 1.75,
        c: c || _styles.colors.black,
        __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }
      },
      community.name
    )
  );
}
var _default = CommunityListItem;
exports.default = _default;
//# sourceMappingURL=communityListItem.component.js.map
