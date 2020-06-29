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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRouterConfig = require('react-router-config');
var _reactRedux = require('react-redux');
var _sideNav = _interopRequireDefault(require('./sideNav.component'));
var _reactRouterDom = require('react-router-dom');
var _styles = require('../../../styles');
var _uni = require('../../styled/uni');
var _banner = _interopRequireDefault(require('../../bannerPrompt/banner.container'));
var _banner2 = _interopRequireDefault(require('../banner'));
var _reactBurgerMenu = require('react-burger-menu');
var _navigation = require('../navigation.actions');
var _redux = require('redux');
var _community = require('../../community/community.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/web/withSideNav.component.js';
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
var WithSideNav = (function(_Component) {
  (0, _inherits2.default)(WithSideNav, _Component);
  var _super = _createSuper(WithSideNav);
  function WithSideNav() {
    var _this;
    (0, _classCallCheck2.default)(this, WithSideNav);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'isMenuOpen',
      function(state) {
        if (state.isOpen) {
          _this.props.actions.openWebSideNav();
        } else {
          _this.props.actions.closeWebSideNav();
        }
        return state.isOpen;
      }
    );
    return _this;
  }
  (0, _createClass2.default)(
    WithSideNav,
    [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this$props = this.props,
            actions = _this$props.actions,
            communities = _this$props.communities;
          if (!communities.length) actions.getCommunities();
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            isAuthenticated = _this$props2.isAuthenticated,
            sideNavIsOpen = _this$props2.sideNavIsOpen,
            screenSize = _this$props2.screenSize,
            notif = _this$props2.notif,
            route = _this$props2.route;
          var promptType = notif.promptType;
          var isDesktop = screenSize === 0;
          return _react.default.createElement(
            _uni.View,
            {
              bg: _styles.colors.white,
              display: 'flex',
              flex: 1,
              __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 }
            },
            !isAuthenticated
              ? _react.default.createElement(_banner2.default, {
                  screenSize: screenSize,
                  type: 'app',
                  cta: 'SIGN_UP',
                  __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 11 }
                })
              : null,
            promptType
              ? _react.default.createElement(
                  _uni.View,
                  {
                    position: 'sticky',
                    zIndex: '200',
                    style: {
                      top: 0,
                      right: 0,
                      left: 0,
                      minHeight: _styles.layout.BANNER_PROMPT_HEIGHT
                    },
                    __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }
                  },
                  _react.default.createElement(_banner.default, {
                    __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 13 }
                  })
                )
              : null,
            _react.default.createElement(
              _uni.View,
              {
                fdirection: 'row',
                display: 'flex',
                __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 9 }
              },
              !isDesktop
                ? _react.default.createElement(
                    _reactBurgerMenu.slide,
                    {
                      width: _styles.layout.sideNavWidth,
                      isOpen: sideNavIsOpen,
                      onStateChange: this.isMenuOpen,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 13
                      }
                    },
                    _react.default.createElement(
                      _uni.View,
                      {
                        fdirection: 'column',
                        display: 'flex',
                        style: {
                          top: promptType ? _styles.layout.BANNER_PROMPT_HEIGHT : 0
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 80,
                          columnNumber: 15
                        }
                      },
                      _react.default.createElement(_sideNav.default, {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 17
                        }
                      })
                    )
                  )
                : _react.default.createElement(
                    _uni.View,
                    {
                      fdirection: 'column',
                      display: 'flex',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 13
                      }
                    },
                    _react.default.createElement(_sideNav.default, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 15
                      }
                    })
                  ),
              _react.default.createElement(
                _uni.View,
                {
                  display: 'flex',
                  flex: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 11 }
                },
                (0, _reactRouterConfig.renderRoutes)(route.routes)
              )
            )
          );
        }
      }
    ],
    [
      {
        key: 'fetchData',
        value: function fetchData(dispatch) {
          return dispatch((0, _community.getCommunities)());
        }
      }
    ]
  );
  return WithSideNav;
})(_react.Component);
(0, _defineProperty2.default)(WithSideNav, 'propTypes', {
  route: _propTypes.default.object,
  isAuthenticated: _propTypes.default.bool,
  notif: _propTypes.default.object,
  actions: _propTypes.default.object,
  communities: _propTypes.default.array,
  sideNavIsOpen: _propTypes.default.bool,
  screenSize: _propTypes.default.number
});
var mapStateToProps = function mapStateToProps(state) {
  return {
    communities: state.community.list,
    isAuthenticated: state.auth.isAuthenticated,
    navigation: state.navigation,
    sideNavIsOpen: state.navigation.sideNavIsOpen,
    screenSize: state.navigation.screenSize,
    notif: state.notif
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        openWebSideNav: _navigation.openWebSideNav,
        closeWebSideNav: _navigation.closeWebSideNav,
        hideModal: _navigation.hideModal,
        getCommunities: _community.getCommunities
      },
      dispatch
    )
  };
};
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WithSideNav)
);
exports.default = _default;
//# sourceMappingURL=withSideNav.component.js.map
