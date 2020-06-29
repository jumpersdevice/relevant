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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _communityListItem = _interopRequireDefault(
  require('../../community/communityListItem.component')
);
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/mobile/communitySelection.component.js';
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
var CommunitySelection = (function(_Component) {
  (0, _inherits2.default)(CommunitySelection, _Component);
  var _super = _createSuper(CommunitySelection);
  function CommunitySelection(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, CommunitySelection);
    _this = _super.call(this, props, context);
    _this.state = { input: '', inputFocused: false };
    return _this;
  }
  (0, _createClass2.default)(CommunitySelection, [
    {
      key: 'setCommunity',
      value: function setCommunity(community) {
        this.props.actions.setCommunity(community.slug);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var community = this.props.community;
        var communities = community.communities;
        if (!communities) {
          return null;
        }
        if (!Object.values(communities)) {
          return null;
        }
        return _react.default.createElement(
          _uni.View,
          {
            pt: 3,
            style: { flexDirection: 'column' },
            __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 7 }
          },
          Object.values(communities).map(function(c) {
            return _react.default.createElement(
              _reactNativeWeb.TouchableOpacity,
              {
                onPress: function onPress() {
                  return requestAnimationFrame(function() {
                    return _this2.setCommunity(c);
                  });
                },
                key: c.slug,
                __source: { fileName: _jsxFileName, lineNumber: 38, columnNumber: 11 }
              },
              _react.default.createElement(_communityListItem.default, {
                p: '1 2',
                community: c,
                bg: community.active === c.slug ? _styles.colors.blue : null,
                c: community.active === c.slug ? ''.concat(_styles.colors.white) : null,
                __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 13 }
              })
            );
          })
        );
      }
    }
  ]);
  return CommunitySelection;
})(_react.Component);
(0, _defineProperty2.default)(CommunitySelection, 'propTypes', {
  actions: _propTypes.default.object,
  community: _propTypes.default.object
});
var _default = CommunitySelection;
exports.default = _default;
//# sourceMappingURL=communitySelection.component.js.map
