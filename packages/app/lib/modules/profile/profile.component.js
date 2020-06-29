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
var _reactRouterDom = require('react-router-dom');
var _UAvatar = _interopRequireDefault(require('../user/UAvatar.component'));
var _styles = require('../../styles');
var _uni = require('../styled/uni');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _primitives = require('styled-components/primitives');
var _profile = _interopRequireDefault(require('./profile.stats'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/profile.component.js';
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
var SettingsImage = function SettingsImage(props) {
  return _react.default.createElement(
    'svg',
    props,
    _react.default.createElement('title', null, 'Shape'),
    _react.default.createElement('path', {
      d:
        'M4.625.131l2.903.037-.018 1.41A4.79 4.79 0 0 1 9.265 2.61l1.243-.69 1.42 2.505-1.244.69c.14.674.127 1.363-.027 2.018l1.227.722-1.484 2.468-1.226-.721a4.805 4.805 0 0 1-1.78.987L7.373 12l-2.902-.036.018-1.411A4.788 4.788 0 0 1 2.735 9.52l-1.244.689-1.42-2.505 1.244-.689a4.676 4.676 0 0 1 .027-2.02l-1.225-.72L1.6 1.808l1.225.72a4.806 4.806 0 0 1 1.782-.988L4.625.131zm3.339 4.846a2.214 2.214 0 0 1-.864 3.03 2.265 2.265 0 0 1-3.064-.853 2.214 2.214 0 0 1 .863-3.031 2.265 2.265 0 0 1 3.065.854z',
      fill: '#000',
      fillRule: 'evenodd'
    })
  );
};
SettingsImage.defaultProps = {
  width: '12',
  height: '12',
  viewBox: '0 0 12 12',
  xmlns: 'http://www.w3.org/2000/svg'
};
var InviteImage = function InviteImage(props) {
  return _react.default.createElement(
    'svg',
    props,
    _react.default.createElement('title', null, 'Group 33'),
    _react.default.createElement(
      'g',
      { fill: '#000', fillRule: 'evenodd' },
      _react.default.createElement('path', {
        d:
          'M5.463 7.444c1.439 0 2.605-1.765 2.605-3.163-.035-1.373-1.19-2.469-2.604-2.469-1.413 0-2.568 1.096-2.604 2.469-.002 1.39 1.165 3.163 2.603 3.163zM7.867 7.743h-.134c-.63.788-1.433 1.222-2.27 1.222-.836 0-1.638-.426-2.27-1.222H3.06c-.813 0-1.592.314-2.166.874A2.933 2.933 0 0 0 0 10.725v1.837h10.927v-1.837a2.933 2.933 0 0 0-.894-2.108 3.105 3.105 0 0 0-2.166-.874zM12.868 2.115V.042h-1.773v2.073H8.963v1.724h2.132V5.91h1.773V3.84H15V2.115z'
      })
    )
  );
};
InviteImage.defaultProps = {
  width: '15',
  height: '13',
  viewBox: '0 0 15 13',
  xmlns: 'http://www.w3.org/2000/svg'
};
var linkStyle = (0, _primitives.css)(
  ['', ' ', ''],
  _styles.fonts.altLink,
  _styles.mixins.color
);
var Profile = (function(_Component) {
  (0, _inherits2.default)(Profile, _Component);
  var _super = _createSuper(Profile);
  function Profile() {
    (0, _classCallCheck2.default)(this, Profile);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Profile, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.checkRouteForModal(true);
      }
    },
    {
      key: 'checkRouteForModal',
      value: function checkRouteForModal(firstRun) {
        var _this$props = this.props,
          user = _this$props.user,
          actions = _this$props.actions,
          location = _this$props.location,
          history = _this$props.history;
        if (location.search.match('modal=settings')) return;
        var settingsUrl = '/user/profile/'.concat(user.handle, '/settings');
        var profileUrl = '/user/profile/'.concat(user.handle);
        if (settingsUrl === location.pathname) {
          var searchString = '?redirect='.concat(profileUrl);
          if (firstRun && location.search !== searchString) {
            history.push({ search: searchString });
          }
          actions.showModal('settings');
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          user = _this$props2.user,
          isOwner = _this$props2.isOwner,
          actions = _this$props2.actions,
          location = _this$props2.location,
          bio = _this$props2.bio;
        if (!user) {
          return _react.default.createElement(
            'div',
            {
              className: 'profileContainer',
              __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 14 }
            },
            'User not found!'
          );
        }
        return _react.default.createElement(
          _uni.View,
          {
            m: [4, 2],
            display: 'flex',
            fdirection: 'row',
            align: 'flex-start',
            justify: 'flex-start',
            __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 7 }
          },
          _react.default.createElement(_UAvatar.default, {
            user: user,
            size: 9,
            __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 9 }
          }),
          _react.default.createElement(
            _uni.View,
            {
              ml: (0, _styles.sizing)(2),
              grow: 1,
              shrink: 1,
              wrap: 1,
              __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.View,
              {
                fdirection: 'row',
                display: 'flex',
                justify: 'space-between',
                align: 'baseline',
                wrap: 1,
                __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.View,
                {
                  display: 'flex',
                  fdirection: 'row',
                  align: 'baseline',
                  shrink: 1,
                  wrap: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 77, columnNumber: 13 }
                },
                _react.default.createElement(
                  _uni.Header,
                  {
                    mr: (0, _styles.sizing)(2),
                    __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 15 }
                  },
                  user.name
                ),
                _react.default.createElement(_profile.default, {
                  user: user,
                  isOwner: isOwner,
                  __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 15 }
                })
              ),
              isOwner
                ? _react.default.createElement(
                    _ULink.default,
                    {
                      onClick: function onClick() {
                        actions.logoutAction(user);
                      },
                      onPress: function onPress() {
                        actions.logoutAction(user);
                      },
                      color: _styles.colors.blue,
                      to: '#',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 15
                      }
                    },
                    'Logout'
                  )
                : _react.default.createElement(_uni.View, {
                    __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 15 }
                  })
            ),
            bio
              ? _react.default.createElement(
                  _uni.View,
                  {
                    mt: [2, 2],
                    __source: { fileName: _jsxFileName, lineNumber: 99, columnNumber: 13 }
                  },
                  _react.default.createElement(
                    _uni.BodyText,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 15
                      }
                    },
                    bio
                  )
                )
              : null,
            isOwner
              ? _react.default.createElement(
                  _uni.View,
                  {
                    fdirection: 'row',
                    align: 'center',
                    mt: 2,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 13
                    }
                  },
                  _react.default.createElement(
                    _uni.AltLink,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 15
                      }
                    },
                    _react.default.createElement(
                      _ULink.default,
                      {
                        c: _styles.colors.black,
                        to: ''
                          .concat(location.pathname, '/settings?redirect=')
                          .concat(location.pathname),
                        hc: _styles.colors.secondaryText,
                        styles: linkStyle,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 17
                        }
                      },
                      _react.default.createElement(
                        _uni.Text,
                        {
                          fdirection: 'row',
                          align: 'center',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 112,
                            columnNumber: 19
                          }
                        },
                        _react.default.createElement(
                          _uni.View,
                          {
                            mr: 0.5,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 113,
                              columnNumber: 21
                            }
                          },
                          _react.default.createElement(SettingsImage, {
                            h: 2,
                            w: 2,
                            bg: _styles.colors.grey,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 114,
                              columnNumber: 23
                            }
                          })
                        ),
                        'Settings'
                      )
                    )
                  ),
                  _react.default.createElement(
                    _uni.AltLink,
                    {
                      ml: 1,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 15
                      }
                    },
                    _react.default.createElement(
                      _ULink.default,
                      {
                        c: _styles.colors.black,
                        to: '/invites',
                        hc: _styles.colors.secondaryText,
                        styles: linkStyle,
                        onPress: function onPress(e) {
                          e.preventDefault();
                          actions.showModal('invite');
                        },
                        onClick: function onClick(e) {
                          e.preventDefault();
                          actions.showModal('invite');
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 122,
                          columnNumber: 17
                        }
                      },
                      _react.default.createElement(
                        _uni.Text,
                        {
                          fdirection: 'row',
                          align: 'center',
                          ml: 1,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 136,
                            columnNumber: 19
                          }
                        },
                        _react.default.createElement(
                          _uni.View,
                          {
                            mr: 0.5,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 137,
                              columnNumber: 21
                            }
                          },
                          _react.default.createElement(InviteImage, {
                            h: 2,
                            w: 2,
                            bg: _styles.colors.grey,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 138,
                              columnNumber: 23
                            }
                          })
                        ),
                        'Invite Friend'
                      )
                    )
                  ),
                  _react.default.createElement(
                    _uni.AltLink,
                    {
                      ml: 1,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 15
                      }
                    },
                    _react.default.createElement(
                      _ULink.default,
                      {
                        to: '#',
                        c: _styles.colors.black,
                        hc: _styles.colors.secondaryText,
                        styles: linkStyle,
                        onClick: function onClick(e) {
                          e.preventDefault();
                          actions.showModal('linkMobile');
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 146,
                          columnNumber: 17
                        }
                      },
                      _react.default.createElement(
                        _uni.Text,
                        {
                          fdirection: 'row',
                          align: 'center',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 156,
                            columnNumber: 19
                          }
                        },
                        _react.default.createElement(
                          _uni.View,
                          {
                            mr: 0.5,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 157,
                              columnNumber: 21
                            }
                          },
                          _react.default.createElement(SettingsImage, {
                            h: 2,
                            w: 2,
                            bg: _styles.colors.grey,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 158,
                              columnNumber: 23
                            }
                          })
                        ),
                        'Connect Mobile Device'
                      )
                    )
                  )
                )
              : null
          )
        );
      }
    }
  ]);
  return Profile;
})(_react.Component);
(0, _defineProperty2.default)(Profile, 'propTypes', {
  actions: _propTypes.default.object,
  isOwner: _propTypes.default.bool,
  user: _propTypes.default.object,
  location: _propTypes.default.object,
  history: _propTypes.default.object,
  bio: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.object
  ])
});
var _default = (0, _reactRouterDom.withRouter)(Profile);
exports.default = _default;
//# sourceMappingURL=profile.component.js.map
