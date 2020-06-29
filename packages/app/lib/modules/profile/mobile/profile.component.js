'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));
var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);
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
var _Ionicons = _interopRequireDefault(require('react-native-vector-icons/Ionicons'));
var _reactNativeBottomsheet = _interopRequireDefault(require('react-native-bottomsheet'));
var _uni = require('../../styled/uni');
var _styles = require('../../../styles');
var _bio = _interopRequireDefault(require('./bio.component'));
var _profile = _interopRequireDefault(require('../profile.stats'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/mobile/profile.component.js';
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
var defaultImg = require('../../../../public/img/default_user.jpg');
var ActionSheet = _reactNativeWeb.ActionSheetIOS;
if (_reactNativeWeb.Platform.OS === 'android') {
  ActionSheet = _reactNativeBottomsheet.default;
  ActionSheet.showActionSheetWithOptions =
    _reactNativeBottomsheet.default.showBottomSheetWithOptions;
}
var ProfileComponent = (function(_Component) {
  (0, _inherits2.default)(ProfileComponent, _Component);
  var _super = _createSuper(ProfileComponent);
  function ProfileComponent(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, ProfileComponent);
    _this = _super.call(this, props, context);
    _this.setTag = _this.setTag.bind((0, _assertThisInitialized2.default)(_this));
    _this.showActionSheet = _this.showActionSheet.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.initTooltips = _this.initTooltips.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.toggleTooltip = _this.toggleTooltip.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }
  (0, _createClass2.default)(ProfileComponent, [
    {
      key: 'toggleTooltip',
      value: function toggleTooltip() {
        this.props.actions.createToggleAction('relevance', this.tooltipParent);
      }
    },
    {
      key: 'initTooltips',
      value: function initTooltips() {
        var _this2 = this;
        this.props.actions.setTooltipData({
          name: 'relevance',
          toggle: function toggle() {
            return _this2.toggleTooltip();
          }
        });
      }
    },
    {
      key: 'showActionSheet',
      value: function showActionSheet(id) {
        var _this3 = this;
        ActionSheet.showActionSheetWithOptions(
          {
            options: ['Block User', 'Cancel'],
            cancelButtonIndex: 1,
            destructiveIndex: 0
          },
          function(buttonIndex) {
            switch (buttonIndex) {
              case 0:
                _this3.props.actions.updateBlock(id);
                break;
              default:
            }
          }
        );
      }
    },
    {
      key: 'setTag',
      value: function setTag(tag) {
        if (!this.props.actions) return;
        this.props.actions.selectTag({ _id: tag.replace('#', '') });
        this.props.actions.changeTab('discover');
        this.props.actions.resetRoutes('discover');
      }
    },
    {
      key: 'setCat',
      value: function setCat(cat) {
        if (!this.props.actions) return;
        this.props.actions.selectTag({
          _id: cat,
          category: true,
          categoryName: cat.replace('_category_tag', '')
        });
        this.props.actions.changeTab('discover');
        this.props.actions.resetRoutes('discover');
      }
    },
    {
      key: 'goToTopic',
      value: function goToTopic(tag) {
        var name = tag.replace('#', '').trim();
        var topic = { _id: name, categoryName: '#' + name };
        this.props.actions.goToTopic(topic);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this;
        var _this$props = this.props,
          user = _this$props.user,
          isOwner = _this$props.isOwner;
        var userImage = user && user.image ? { uri: user.image } : defaultImg;
        var optionsEl =
          !isOwner &&
          _react.default.createElement(
            _reactNativeWeb.TouchableOpacity,
            {
              style: {
                position: 'absolute',
                right: 0,
                top: 0,
                paddingVertical: 10,
                paddingHorizontal: 15
              },
              onPress: function onPress() {
                return _this4.showActionSheet(user._id);
              },
              __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 7 }
            },
            _react.default.createElement(_Ionicons.default, {
              name: 'ios-more',
              size: 24,
              color: _styles.colors.black,
              __source: { fileName: _jsxFileName, lineNumber: 108, columnNumber: 9 }
            })
          );
        return _react.default.createElement(
          _uni.View,
          {
            bg: 'white',
            p: '2 2 0 2',
            __source: { fileName: _jsxFileName, lineNumber: 113, columnNumber: 7 }
          },
          _react.default.createElement(_uni.Image, {
            resizeMode: 'cover',
            alignSelf: 'center',
            w: 21,
            h: 21,
            bradius: 10.5,
            source: userImage,
            __source: { fileName: _jsxFileName, lineNumber: 114, columnNumber: 9 }
          }),
          optionsEl,
          _react.default.createElement(
            _uni.View,
            {
              m: '2 0',
              fdirection: 'row',
              justify: 'center',
              align: 'baseline',
              __source: { fileName: _jsxFileName, lineNumber: 124, columnNumber: 9 }
            },
            _react.default.createElement(_profile.default, {
              user: user,
              isOwner: isOwner,
              __source: { fileName: _jsxFileName, lineNumber: 125, columnNumber: 11 }
            })
          ),
          user.bio !== '' || this.props.isOwner
            ? _react.default.createElement(_bio.default, {
                scrollTo: this.props.scrollTo,
                user: user,
                actions: this.props.actions,
                isOwner: this.props.isOwner,
                __source: { fileName: _jsxFileName, lineNumber: 129, columnNumber: 11 }
              })
            : null,
          _react.default.createElement(_uni.Divider, {
            __source: { fileName: _jsxFileName, lineNumber: 136, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return ProfileComponent;
})(_react.Component);
(0, _defineProperty2.default)(ProfileComponent, 'propTypes', {
  actions: _propTypes.default.object,
  user: _propTypes.default.object,
  isOwner: _propTypes.default.bool,
  scrollTo: _propTypes.default.func
});
var _default = ProfileComponent;
exports.default = _default;
//# sourceMappingURL=profile.component.js.map
