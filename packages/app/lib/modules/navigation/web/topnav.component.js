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
var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _web = require('../../styled/web');
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _reactRouterDom = require('react-router-dom');
var _discoverTabs = _interopRequireDefault(
  require('../../discover/web/discoverTabs.component')
);
var _breadcrumbs = _interopRequireDefault(require('./breadcrumbs.component'));
var _uni = require('../../styled/uni');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _styles = require('../../../styles');
var _navigation = require('../navigation.actions');
var _activity = require('../../activity/activity.actions');
var _ULink = _interopRequireDefault(require('../ULink.component'));
var _menuIcon = _interopRequireDefault(require('../../ui/web/menuIcon.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/web/topnav.component.js';
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
function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  border-radius: 100%;\n  align-items: center;\n  height: ',
    ';\n  width: ',
    ';\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: ',
    ';\n'
  ]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([
    '\n  position: sticky;\n  /*   background-image: linear-gradient(hsla(0, 0%, 100%, 1) 80%, hsla(0, 0%, 100%, 0) 100%);\n   */\n  z-index: 100;\n  background-color: ',
    ';\n  height: ',
    ';\n  top: ',
    ';\n  left: ',
    ';\n'
  ]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var Nav = (0, _primitives.default)(_uni.View)(
  _templateObject(),
  _styles.colors.white,
  _styles.layout.headerHeight,
  function(p) {
    return p.top ? p.top : 0;
  },
  _styles.layout.sideNavWidth
);
var Badge = (0, _primitives.default)(_uni.View)(
  _templateObject2(),
  (0, _styles.sizing)(2),
  (0, _styles.sizing)(2),
  (0, _styles.sizing)(1)
);
var ActionButton = (0, _styledComponents.default)(_web.Button).withConfig({
  displayName: 'topnavcomponent__ActionButton',
  componentId: 'zzcwot-0'
})(['', ''], function(p) {
  return !p.screenSize
    ? ''
    : '\n    position: fixed;\n    bottom: '
        .concat((0, _styles.sizing)(2), ';\n    right: ')
        .concat((0, _styles.sizing)(2), ';\n    height: ')
        .concat((0, _styles.sizing)(8), ';\n    width: ')
        .concat(
          (0, _styles.sizing)(8),
          ';\n    min-width: 0;\n    border-radius: 100%;\n    background-color: '
        )
        .concat(_styles.colors.blue, ';\n  ');
});
var TopNav = (function(_Component) {
  (0, _inherits2.default)(TopNav, _Component);
  var _super = _createSuper(TopNav);
  function TopNav() {
    var _this;
    (0, _classCallCheck2.default)(this, TopNav);
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
      'state',
      {}
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'getNotificationCount',
      function() {
        var now = new Date();
        var isAuthenticated = _this.props.auth.isAuthenticated;
        if (
          _this.state.timeSinceNotificationCount &&
          now.getTime() - _this.state.timeSinceNotificationCount.getTime() < 30000
        ) {
          return;
        }
        if (isAuthenticated) {
          _this.setState({ timeSinceNotificationCount: now });
          _this.props.actions.getNotificationCount();
        }
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'toggleLogin',
      function() {
        var _this$props = _this.props,
          location = _this$props.location,
          history = _this$props.history;
        history.push({ search: '?redirect='.concat(location.pathname) });
        _this.props.actions.showModal('login');
      }
    );
    return _this;
  }
  (0, _createClass2.default)(TopNav, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.getNotificationCount();
        window.addEventListener('focus', _activity.getNotificationCount);
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var wasNotAuthenticated = !prevProps.auth.isAuthenticated;
        var isAuthenticated = this.props.auth.isAuthenticated;
        if (wasNotAuthenticated && isAuthenticated) this.getNotificationCount();
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('focus', _activity.getNotificationCount);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          auth = _this$props2.auth,
          actions = _this$props2.actions,
          notif = _this$props2.notif,
          screenSize = _this$props2.screenSize,
          title = _this$props2.title;
        return _react.default.createElement(
          Nav,
          {
            fdirection: 'column',
            justify: 'center',
            p: ['0 4', '0 2'],
            top: notif.promptType ? _styles.layout.BANNER_PROMPT_HEIGHT : null,
            __source: { fileName: _jsxFileName, lineNumber: 108, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              zIndex: 1,
              justify: 'space-between',
              display: 'flex',
              fdirection: 'row',
              align: 'center',
              __source: { fileName: _jsxFileName, lineNumber: 114, columnNumber: 9 }
            },
            _react.default.createElement(_menuIcon.default, {
              mr: [4, 2],
              __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 11 }
            }),
            title
              ? _react.default.createElement(
                  _uni.Header,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 20
                    }
                  },
                  title
                )
              : _react.default.createElement(_discoverTabs.default, {
                  __source: { fileName: _jsxFileName, lineNumber: 122, columnNumber: 47 }
                }),
            _react.default.createElement(
              _uni.View,
              {
                justify: 'space-between',
                display: 'flex',
                fdirection: 'row',
                flex: 1,
                grow: 1,
                align: 'center',
                __source: { fileName: _jsxFileName, lineNumber: 123, columnNumber: 11 }
              },
              !title && auth.isAuthenticated
                ? _react.default.createElement(
                    _web.StyledNavLink,
                    {
                      to: '/user/activity',
                      hc: _styles.colors.black,
                      c: _styles.colors.grey,
                      fdirection: 'row',
                      d: 'flex',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 132,
                        columnNumber: 15
                      }
                    },
                    'Activity',
                    notif.count
                      ? _react.default.createElement(
                          Badge,
                          {
                            bg: _styles.colors.red,
                            ml: 0.5,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 141,
                              columnNumber: 19
                            }
                          },
                          _react.default.createElement(
                            _uni.Text,
                            {
                              c: _styles.colors.white,
                              fw: 'bold',
                              fs: 1.25,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 142,
                                columnNumber: 21
                              }
                            },
                            notif.count
                          )
                        )
                      : null
                  )
                : _react.default.createElement('div', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 15
                    }
                  }),
              _react.default.createElement(
                _uni.View,
                {
                  fdirection: 'row',
                  d: 'flex',
                  flex: 1,
                  align: 'center',
                  justify: 'flex-end',
                  __source: { fileName: _jsxFileName, lineNumber: 152, columnNumber: 13 }
                },
                screenSize
                  ? null
                  : _react.default.createElement(
                      _ULink.default,
                      {
                        onClick: function onClick(e) {
                          e.preventDefault();
                          actions.showModal('onboarding');
                        },
                        align: 'center',
                        mr: 2,
                        hu: true,
                        color: _styles.colors.blue,
                        to: '/home',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 154,
                          columnNumber: 17
                        }
                      },
                      _react.default.createElement(
                        _uni.LinkFont,
                        {
                          c: _styles.colors.blue,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 165,
                            columnNumber: 19
                          }
                        },
                        'Get Started'
                      )
                    ),
                auth.isAuthenticated
                  ? _react.default.createElement(
                      ActionButton,
                      {
                        onClick: function onClick() {
                          return actions.showModal('newpost');
                        },
                        disabled: !auth.user,
                        screenSize: screenSize,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 169,
                          columnNumber: 17
                        }
                      },
                      _react.default.createElement(
                        _uni.ButtonText,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 174,
                            columnNumber: 19
                          }
                        },
                        'New Post'
                      )
                    )
                  : _react.default.createElement(
                      ActionButton,
                      {
                        onClick: this.toggleLogin,
                        screenSize: screenSize,
                        color: _styles.colors.blue,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 177,
                          columnNumber: 17
                        }
                      },
                      _react.default.createElement(
                        _uni.ButtonText,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 182,
                            columnNumber: 19
                          }
                        },
                        'Login'
                      )
                    )
              )
            )
          ),
          _react.default.createElement(
            _uni.View,
            {
              fdirection: 'row',
              mt: [0, 1],
              ml: [0, 5.5],
              __source: { fileName: _jsxFileName, lineNumber: 188, columnNumber: 9 }
            },
            !title &&
              _react.default.createElement(_breadcrumbs.default, {
                __source: { fileName: _jsxFileName, lineNumber: 189, columnNumber: 22 }
              })
          )
        );
      }
    }
  ]);
  return TopNav;
})(_react.Component);
(0, _defineProperty2.default)(TopNav, 'propTypes', {
  location: _propTypes.default.object,
  auth: _propTypes.default.object,
  history: _propTypes.default.object,
  actions: _propTypes.default.object,
  notif: _propTypes.default.object,
  screenSize: _propTypes.default.number,
  title: _propTypes.default.string
});
function mapStateToProps(state) {
  return {
    auth: state.auth,
    notif: state.notif,
    screenSize: state.navigation.screenSize
  };
}
var _default = (0, _reactRouterDom.withRouter)(
  (0, _reactRedux.connect)(mapStateToProps, function(dispatch) {
    return {
      actions: (0, _redux.bindActionCreators)(
        {
          showModal: _navigation.showModal,
          getNotificationCount: _activity.getNotificationCount
        },
        dispatch
      )
    };
  })(TopNav)
);
exports.default = _default;
//# sourceMappingURL=topnav.component.js.map
