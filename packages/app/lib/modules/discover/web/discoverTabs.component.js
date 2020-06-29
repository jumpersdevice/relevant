'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _get = _interopRequireDefault(require('lodash/get'));
var _reactRedux = require('react-redux');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _web = require('../../styled/web');
var _discoverHelper = require('./discoverHelper');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/discover/web/discoverTabs.component.js';
var DiscoverTab = function DiscoverTab(props) {
  var linkData = props.linkData,
    community = props.community,
    tag = props.tag;
  var url = community ? '/'.concat(community, '/').concat(linkData.key) : '/communities';
  if (tag) url += '/'.concat(tag);
  return _react.default.createElement(
    _web.StyledNavLink,
    {
      to: encodeURI(url),
      mr: [2, 1],
      __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 5 }
    },
    linkData.title
  );
};
DiscoverTab.propTypes = {
  linkData: _propTypes.default.object,
  community: _propTypes.default.string,
  tag: _propTypes.default.string
};
var StyledUl = _styledComponents.default.ul.withConfig({
  displayName: 'discoverTabscomponent__StyledUl',
  componentId: 'jxfvd7-0'
})(['margin:0;padding:0;']);
var DiscoverTabs = function DiscoverTabs(_ref) {
  var view = _ref.view,
    community = _ref.community;
  return _react.default.createElement(
    StyledUl,
    { __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 3 } },
    _discoverHelper.standardRoutes.map(function(linkData, i) {
      return _react.default.createElement(DiscoverTab, {
        key: i,
        tag: (0, _get.default)(view, 'discover.tag'),
        community: community,
        linkData: linkData,
        __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }
      });
    })
  );
};
DiscoverTabs.propTypes = {
  view: _propTypes.default.object,
  community: _propTypes.default.string
};
function mapStateToProps(state) {
  return { view: state.view, community: state.auth.community };
}
var _default = (0, _reactRedux.connect)(mapStateToProps)(DiscoverTabs);
exports.default = _default;
//# sourceMappingURL=discoverTabs.component.js.map
