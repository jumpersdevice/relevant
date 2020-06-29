'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = exports.NavProfile = void 0;
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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _UAvatar = _interopRequireDefault(require('../user/UAvatar.component'));
var _coinStat = _interopRequireDefault(require('../stats/coinStat.component'));
var _rStat = _interopRequireDefault(require('../stats/rStat.component'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var navigationActions = _interopRequireWildcard(
  require('../navigation/navigation.actions')
);
var _auth = require('../auth/auth.actions');
var _reactTooltip = _interopRequireDefault(require('react-tooltip'));
var _styles = require('../../styles');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _uni = require('../styled/uni');
var _rewards = require('../../utils/rewards');
var _layout = require('../../styles/layout');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/profile/navProfile.component.js';
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
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
var WalletInfo = _primitives.default.View.withConfig({
  displayName: 'navProfilecomponent__WalletInfo',
  componentId: 'sc-1bsgc0z-0'
})(
  ['display:flex;flex-direction:column;padding-left:', ';flex-shrink:1;'],
  (0, _styles.sizing)(2)
);
var NavProfile = (function(_Component) {
  (0, _inherits2.default)(NavProfile, _Component);
  var _super = _createSuper(NavProfile);
  function NavProfile() {
    (0, _classCallCheck2.default)(this, NavProfile);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(NavProfile, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (_reactTooltip.default.rebuild) _reactTooltip.default.rebuild();
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(lastProps) {
        var _this$props = this.props,
          auth = _this$props.auth,
          actions = _this$props.actions,
          user = _this$props.user;
        if (
          auth.community !== lastProps.auth.community &&
          user &&
          (!user.relevance || user.relevance.community !== auth.community)
        ) {
          actions.getUser();
        }
        if (user && auth.community !== lastProps.auth.community) {
          actions.cacheCommunity(auth.community);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          user = _this$props2.user,
          earnings = _this$props2.earnings,
          actions = _this$props2.actions,
          auth = _this$props2.auth;
        var community = auth.community;
        if (!user) return null;
        var pendingPayouts = 0;
        earnings.pending.forEach(function(id) {
          var earning = earnings.entities[id];
          pendingPayouts += (0, _rewards.computeUserPayout)(earning);
        });
        var hideGetTokens = (user.twitterId && user.confirmed) || !community;
        return _react.default.createElement(
          _uni.View,
          {
            bb: true,
            flex: 1,
            __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              p: [_layout.SIDE_NAV_PADDING, 2],
              pb: [4, 3],
              __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.View,
              {
                fdirection: 'row',
                justify: 'space-between',
                align: 'center',
                __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }
              },
              _react.default.createElement(
                _uni.Header,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 71, columnNumber: 13 }
                },
                user.name
              ),
              _react.default.createElement(
                _ULink.default,
                {
                  inline: 1,
                  hu: true,
                  to: '/user/wallet',
                  onPress: function onPress() {
                    return actions.goToTab('wallet');
                  },
                  __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 13 }
                },
                _react.default.createElement(
                  _uni.CTALink,
                  {
                    c: _styles.colors.blue,
                    __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 15 }
                  },
                  'My Wallet'
                )
              )
            ),
            _react.default.createElement(
              _uni.View,
              {
                fdirection: 'row',
                align: 'center',
                mt: [3, 2],
                __source: { fileName: _jsxFileName, lineNumber: 82, columnNumber: 11 }
              },
              _react.default.createElement(_UAvatar.default, {
                user: user,
                size: 8,
                noName: true,
                goToProfile: function goToProfile() {
                  return actions.goToTab('myProfile');
                },
                __source: { fileName: _jsxFileName, lineNumber: 83, columnNumber: 13 }
              }),
              _react.default.createElement(
                WalletInfo,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 89, columnNumber: 13 }
                },
                _react.default.createElement(
                  _uni.View,
                  {
                    fdirection: 'row',
                    __source: { fileName: _jsxFileName, lineNumber: 90, columnNumber: 15 }
                  },
                  _react.default.createElement(
                    _ULink.default,
                    {
                      to: '/user/wallet',
                      inline: 1,
                      onPress: function onPress() {
                        return actions.push('statsView');
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 17
                      }
                    },
                    _react.default.createElement(_rStat.default, {
                      user: user,
                      align: 'center',
                      'data-for': 'mainTooltip',
                      'data-tip': JSON.stringify({
                        type: 'TEXT',
                        props: {
                          text:
                            'Earn Reputation by posting comments.\nThe higher your score, the more weight your votes have.'
                        }
                      }),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 19
                      }
                    })
                  ),
                  _react.default.createElement(
                    _ULink.default,
                    {
                      to: '/user/wallet',
                      inline: 1,
                      onPress: function onPress() {
                        return actions.goToTab('wallet');
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 17
                      }
                    },
                    _react.default.createElement(_coinStat.default, {
                      user: user,
                      isOwner: true,
                      align: 'center',
                      'data-for': 'mainTooltip',
                      'data-tip': JSON.stringify({
                        type: 'TEXT',
                        props: {
                          text:
                            'Get coins by upvoting quality links.\nThe higher your Reputation the more coins you earn.'
                        }
                      }),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 19
                      }
                    })
                  )
                ),
                _react.default.createElement(
                  _uni.View,
                  {
                    fdirection: 'row',
                    align: 'center',
                    color: _styles.colors.grey,
                    mt: 2,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 15
                    }
                  },
                  _react.default.createElement(
                    _uni.SecondaryText,
                    {
                      fs: 1.5,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 17
                      }
                    },
                    'Pending Rewards: '
                  ),
                  _react.default.createElement(_coinStat.default, {
                    size: 1.5,
                    mr: 1.5,
                    fs: 1.5,
                    secondary: true,
                    c: _styles.colors.black,
                    amount: pendingPayouts,
                    align: 'baseline',
                    'data-for': 'mainTooltip',
                    'data-tip': JSON.stringify({
                      type: 'TEXT',
                      props: {
                        text:
                          'These are your projected earnings for upvoting quality posts.\nRewards are paid out 3 days after a link is posted.'
                      }
                    }),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 17
                    }
                  })
                )
              )
            ),
            _react.default.createElement(
              _uni.View,
              {
                fdirection: 'row',
                align: 'baseline',
                mt: 3,
                __source: { fileName: _jsxFileName, lineNumber: 153, columnNumber: 11 }
              },
              hideGetTokens
                ? null
                : _react.default.createElement(
                    _ULink.default,
                    {
                      to: '/user/wallet',
                      c: _styles.colors.blue,
                      hu: true,
                      onPress: function onPress() {
                        actions.push('getTokens');
                      },
                      onClick: function onClick(e) {
                        e.preventDefault();
                        actions.showModal('getTokens');
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 15
                      }
                    },
                    _react.default.createElement(
                      _uni.CTALink,
                      {
                        c: _styles.colors.blue,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 167,
                          columnNumber: 17
                        }
                      },
                      'Get Tokens'
                    )
                  ),
              hideGetTokens
                ? null
                : _react.default.createElement(
                    _uni.Text,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 37
                      }
                    },
                    ' \xA0\xA0 '
                  ),
              community &&
                _react.default.createElement(
                  _ULink.default,
                  {
                    to: '/user/wallet',
                    ml: 1,
                    c: _styles.colors.blue,
                    hu: true,
                    onPress: function onPress() {
                      actions.push('invites');
                    },
                    onClick: function onClick(e) {
                      e.preventDefault();
                      actions.showModal('invite');
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 15
                    }
                  },
                  _react.default.createElement(
                    _uni.CTALink,
                    {
                      c: _styles.colors.blue,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 17
                      }
                    },
                    'Invite Friends'
                  )
                )
            )
          )
        );
      }
    }
  ]);
  return NavProfile;
})(_react.Component);
exports.NavProfile = NavProfile;
(0, _defineProperty2.default)(NavProfile, 'propTypes', {
  user: _propTypes.default.object,
  earnings: _propTypes.default.object,
  actions: _propTypes.default.object,
  auth: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  var _state$auth;
  return {
    auth: state.auth,
    user:
      state === null || state === void 0
        ? void 0
        : (_state$auth = state.auth) === null || _state$auth === void 0
        ? void 0
        : _state$auth.user,
    earnings: state.earnings
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread({}, navigationActions),
        {},
        { cacheCommunity: _auth.cacheCommunity, getUser: _auth.getUser }
      ),
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavProfile);
exports.default = _default;
//# sourceMappingURL=navProfile.component.js.map
