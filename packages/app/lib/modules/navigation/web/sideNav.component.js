'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
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
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _navigation = require('../navigation.actions');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _navProfile = _interopRequireDefault(require('../../profile/navProfile.component'));
var _communityNav = _interopRequireDefault(
  require('../../community/communityNav.component')
);
var _sideNavFooter = _interopRequireDefault(require('../sideNavFooter.component'));
var _styles = require('../../../styles');
var _ULink = _interopRequireDefault(require('../ULink.component'));
var _web = require('../../styled/web');
var _menuIcon = _interopRequireDefault(require('../../ui/web/menuIcon.component'));
var _layout = require('../../../styles/layout');
var _history = _interopRequireDefault(require('../history'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/web/sideNav.component.js';
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
var Container = _styledComponents.default.div.withConfig({
  displayName: 'sideNavcomponent__Container',
  componentId: 'sc-1ylcrf7-0'
})(['position:sticky;z-index:100;top:', ';'], function(p) {
  return p.top ? p.top : 0;
});
var SideNavContent = _styledComponents.default.div.withConfig({
  displayName: 'sideNavcomponent__SideNavContent',
  componentId: 'sc-1ylcrf7-1'
})(
  [
    'background:',
    ';width:',
    ';max-width:',
    ';',
    ' display:flex;z-index:100;height:calc(100vh - ',
    ');top:0;'
  ],
  _styles.colors.secondaryBG,
  _styles.layout.sideNavWidth,
  _styles.layout.sideNavWidth,
  _styles.layout.universalBorder('right'),
  function(p) {
    return p.top ? p.top : '0px';
  }
);
var SideNavScroll = _styledComponents.default.div.withConfig({
  displayName: 'sideNavcomponent__SideNavScroll',
  componentId: 'sc-1ylcrf7-2'
})(
  [
    'flex-direction:column;display:block;overflow:scroll;-webkit-overflow-scrolling:touch;flex:1;width:',
    ';'
  ],
  _styles.layout.sideNavWidth
);
var LogoContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'sideNavcomponent__LogoContainer',
  componentId: 'sc-1ylcrf7-3'
})(
  ['position:', ';background:', ';height:', ';top:0;z-index:10;flex:1;', ''],
  function(p) {
    return p.screenSize ? 'relative' : 'sticky';
  },
  _styles.colors.secondaryBG,
  _styles.layout.headerHeight,
  _styles.mixins.border
);
var SideNav = (function(_Component) {
  (0, _inherits2.default)(SideNav, _Component);
  var _super = _createSuper(SideNav);
  function SideNav() {
    (0, _classCallCheck2.default)(this, SideNav);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(SideNav, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
        _history.default.listen(function() {
          _this.props.actions.closeWebSideNav();
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          community = _this$props.community,
          actions = _this$props.actions,
          notif = _this$props.notif,
          navigation = _this$props.navigation;
        var logoLink = '/'.concat(community || 'relevant', '/new');
        return _react.default.createElement(
          Container,
          {
            top: notif.promptType ? _styles.layout.BANNER_PROMPT_HEIGHT : null,
            __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 }
          },
          _react.default.createElement(
            SideNavContent,
            {
              flex: 1,
              top: notif.promptType ? _styles.layout.BANNER_PROMPT_HEIGHT : null,
              __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 9 }
            },
            _react.default.createElement(
              SideNavScroll,
              {
                flex: 1,
                __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 11 }
              },
              _react.default.createElement(
                LogoContainer,
                {
                  bb: true,
                  h: _styles.layout.headerHeight,
                  align: 'center',
                  fdirection: 'row',
                  justify: 'space-between',
                  p: ['0 '.concat(_layout.SIDE_NAV_PADDING), '0 2'],
                  screenSize: navigation.screenSize,
                  __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 13 }
                },
                _react.default.createElement(
                  _ULink.default,
                  {
                    align: 'flex-start',
                    to: logoLink,
                    __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 15 }
                  },
                  _react.default.createElement(_web.Image, {
                    h: 4,
                    w: 22,
                    resizeMode: 'contain',
                    src: '/img/logo-opt.png',
                    alt: 'Relevant',
                    __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 17 }
                  })
                ),
                _react.default.createElement(_menuIcon.default, {
                  __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 15 }
                })
              ),
              _react.default.createElement(
                _web.View,
                {
                  flex: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 90, columnNumber: 13 }
                },
                _react.default.createElement(_navProfile.default, {
                  __source: { fileName: _jsxFileName, lineNumber: 91, columnNumber: 15 }
                })
              ),
              _react.default.createElement(
                _web.View,
                {
                  flex: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 13 }
                },
                _react.default.createElement(
                  _communityNav.default,
                  (0, _extends2.default)({}, this.props, {
                    viewCommunityMembers: function viewCommunityMembers() {
                      actions.showModal('communityMembers');
                    },
                    showSettings: function showSettings() {
                      actions.showModal('communitySettings');
                    },
                    __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 15 }
                  })
                )
              ),
              _react.default.createElement(_sideNavFooter.default, {
                __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 13 }
              })
            )
          )
        );
      }
    }
  ]);
  return SideNav;
})(_react.Component);
SideNav.propTypes = {
  actions: _propTypes.default.object,
  community: _propTypes.default.string,
  navigation: _propTypes.default.object,
  notif: _propTypes.default.object
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    community: state.auth.community,
    isAuthenticated: state.auth.isAuthenticated,
    navigation: state.navigation,
    notif: state.notif
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps, function(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      { showModal: _navigation.showModal, closeWebSideNav: _navigation.closeWebSideNav },
      dispatch
    )
  };
})(SideNav);
exports.default = _default;
//# sourceMappingURL=sideNav.component.js.map
