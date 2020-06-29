'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _community = require('./community.actions');
var _uni = require('../styled/uni');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/community/communityMembersTitle.component.js';
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
var CommunityMembersTitle = (function(_Component) {
  (0, _inherits2.default)(CommunityMembersTitle, _Component);
  var _super = _createSuper(CommunityMembersTitle);
  function CommunityMembersTitle() {
    (0, _classCallCheck2.default)(this, CommunityMembersTitle);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(CommunityMembersTitle, [
    {
      key: 'render',
      value: function render() {
        var community = this.props.community;
        var communities = community.communities,
          active = community.active;
        var activeCommunity = communities[active];
        if (!activeCommunity) return null;
        return _react.default.createElement(
          _uni.View,
          {
            fdirection: 'row',
            align: 'baseline',
            __source: { fileName: _jsxFileName, lineNumber: 20, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.Header,
            {
              inline: 1,
              __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 9 }
            },
            'Community Members'
          ),
          _react.default.createElement(
            _uni.BodyText,
            {
              ml: 2,
              inline: 1,
              __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 9 }
            },
            activeCommunity.memberCount,
            ' Total'
          )
        );
      }
    }
  ]);
  return CommunityMembersTitle;
})(_react.Component);
(0, _defineProperty2.default)(CommunityMembersTitle, 'propTypes', {
  community: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  return { community: state.community };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      { joinCommunity: _community.joinCommunity },
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(CommunityMembersTitle);
exports.default = _default;
//# sourceMappingURL=communityMembersTitle.component.js.map
