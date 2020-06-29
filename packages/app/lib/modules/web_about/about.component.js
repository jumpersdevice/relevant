'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
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
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _web = require('../styled/web');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _styles = require('../../styles');
var _utils = require('../../utils');
var navigationActions = _interopRequireWildcard(
  require('../navigation/navigation.actions')
);
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _communityList = _interopRequireDefault(
  require('../community/communityList.component')
);
var _social = _interopRequireDefault(require('../navigation/social.icons'));
var _community = require('../community/community.actions');
var _post = _interopRequireDefault(require('./post.marquee'));
var _countUp = _interopRequireDefault(require('./countUp/countUp.component'));
var _countUpCoin = _interopRequireDefault(require('./countUp/countUp.coin.component'));
var _appStoreButtons = _interopRequireDefault(require('./appStoreButtons'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/web_about/about.component.js';
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
var SHOW_FIXED_JOIN_HEIGHT = 250;
var SHOW_FIXED_LOGO = 500;
var VID_RATIO = 2.167042889390519;
var VID_TO_PHONE = 0.85;
var ImageLabel = (0, _styledComponents.default)(_web.BodyText).withConfig({
  displayName: 'aboutcomponent__ImageLabel',
  componentId: 'u2ioqj-0'
})(
  ['margin:', ' auto;text-align:center;padding:0 ', ';'],
  (0, _styles.sizing)(1),
  (0, _styles.sizing)(2)
);
var PhoneVideo = (0, _styledComponents.default)(_web.Video).withConfig({
  displayName: 'aboutcomponent__PhoneVideo',
  componentId: 'u2ioqj-1'
})(['position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);']);
var Phone = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'aboutcomponent__Phone',
  componentId: 'u2ioqj-2'
})(
  ['position:', ';bottom:', ';right:', ';opacity:', ';transform:rotate(-2.82deg);'],
  function() {
    return (0, _styles.responsive)(['relative', 'absolute']);
  },
  function() {
    return (0, _styles.responsive)(['auto', 0]);
  },
  function() {
    return (0, _styles.responsive)(['auto', '-20vw']);
  },
  function() {
    return (0, _styles.responsive)([1, 0.5]);
  }
);
var Join = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'aboutcomponent__Join',
  componentId: 'u2ioqj-3'
})(
  [
    'position:fixed;left:50%;transform:translate3d(-50%,',
    ',0);transition:transform 0.3s ease-in;bottom:',
    ';z-index:1000;'
  ],
  function(p) {
    return p.visible ? '0px' : '200px';
  },
  (0, _styles.sizing)(4)
);
var Social = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'aboutcomponent__Social',
  componentId: 'u2ioqj-4'
})(
  ['top:', ';right:', ";align-self:'center';position:", ';justify-content:center;'],
  function() {
    return (0, _styles.size)([4, 'auto']);
  },
  function() {
    return (0, _styles.size)([1, 'auto']);
  },
  function() {
    return (0, _styles.responsive)(['fixed', 'relative']);
  }
);
var FixedLogo = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'aboutcomponent__FixedLogo',
  componentId: 'u2ioqj-5'
})(
  ['position:fixed;left:', ';top:', ';opacity:', ';transition:opacity 0.1s linear;'],
  (0, _styles.sizing)(2),
  (0, _styles.sizing)(4),
  function(p) {
    return p.visible ? 1 : 0;
  }
);
var Section = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'aboutcomponent__Section',
  componentId: 'u2ioqj-6'
})(
  [
    'flex:1;flex-direction:column;justify-content:center;margin-left:auto;margin-right:auto;padding:',
    ';padding-left:',
    ';padding-right:',
    ';max-width:',
    ';'
  ],
  (0, _styles.sizing)(6),
  (0, _styles.sizing)(2),
  (0, _styles.sizing)(2),
  (0, _styles.sizing)(75)
);
var SplashText = (0, _styledComponents.default)(_web.Text).withConfig({
  displayName: 'aboutcomponent__SplashText',
  componentId: 'u2ioqj-7'
})(
  ['font-family:', ';color:', ';font-size:', ';line-height:', ';margin-top:', ' 0;'],
  _styles.fonts.HELVETICA_NEUE,
  _styles.colors.black,
  function() {
    return (0, _styles.size)([4.5, 3]);
  },
  function() {
    return (0, _styles.size)([6, 4.8]);
  },
  function() {
    return (0, _styles.size)(2);
  }
);
var SectionText = (0, _styledComponents.default)(_web.Text).withConfig({
  displayName: 'aboutcomponent__SectionText',
  componentId: 'u2ioqj-8'
})(
  ['font-family:', ';flex-direction:column;font-size:', ';line-height:', ';'],
  _styles.fonts.HELVETICA_NEUE,
  function() {
    return (0, _styles.size)([2.5, 2]);
  },
  function() {
    return (0, _styles.size)([3, 2.5]);
  }
);
var Splash = (function(_Component) {
  (0, _inherits2.default)(Splash, _Component);
  var _super = _createSuper(Splash);
  function Splash() {
    var _this;
    (0, _classCallCheck2.default)(this, Splash);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      showJoinButton: false
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'onScroll',
      function() {
        var showJoinButton =
          document.body.scrollHeight - window.innerHeight - window.scrollY <
          SHOW_FIXED_JOIN_HEIGHT;
        if (_this.state.showJoinButton !== showJoinButton)
          _this.setState({ showJoinButton: showJoinButton });
        var showFixedLogo = window.scrollY > SHOW_FIXED_LOGO;
        if (_this.state.showFixedLogo !== showFixedLogo)
          _this.setState({ showFixedLogo: showFixedLogo });
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'signUp',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(modal) {
            var _this$props, actions, history;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    (_this$props = _this.props),
                      (actions = _this$props.actions),
                      (history = _this$props.history);
                    history.push('/communities');
                    actions.showModal(modal);
                  case 3:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    return _this;
  }
  (0, _createClass2.default)(
    Splash,
    [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this$props2 = this.props,
            communities = _this$props2.communities,
            actions = _this$props2.actions;
          window.addEventListener('scroll', this.onScroll);
          _utils.tween.start();
          if (!communities.length) actions.getCommunities();
        }
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('scroll', this.onScroll);
          _utils.tween.stop();
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this;
          var screenSize = this.props.screenSize;
          var _this$state = this.state,
            showFixedLogo = _this$state.showFixedLogo,
            showJoinButton = _this$state.showJoinButton;
          var sectionSpace = screenSize ? 4 : 16;
          return _react.default.createElement(
            _web.View,
            {
              bg: _styles.colors.white,
              flex: 1,
              fdirection: 'column',
              style: { overflow: 'hidden' },
              __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 7 }
            },
            _react.default.createElement(_post.default, {
              __source: { fileName: _jsxFileName, lineNumber: 149, columnNumber: 9 }
            }),
            _react.default.createElement(
              Section,
              {
                minheight: '100vh',
                __source: { fileName: _jsxFileName, lineNumber: 151, columnNumber: 9 }
              },
              _react.default.createElement(
                _ULink.default,
                {
                  to: '/relevant/top',
                  __source: { fileName: _jsxFileName, lineNumber: 152, columnNumber: 11 }
                },
                _react.default.createElement(_web.Image, {
                  mt: [0, 6],
                  h: [8, 7, 6],
                  mb: [6, 4],
                  mr: 'auto',
                  ml: [0, 'auto'],
                  src: '/img//logo.png',
                  alt: 'Relevant',
                  __source: { fileName: _jsxFileName, lineNumber: 153, columnNumber: 13 }
                })
              ),
              _react.default.createElement(
                SplashText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 163, columnNumber: 11 }
                },
                'Tired of the social media',
                _react.default.createElement('br', {
                  __source: { fileName: _jsxFileName, lineNumber: 165, columnNumber: 13 }
                }),
                'popularity game?'
              ),
              _react.default.createElement(
                SplashText,
                {
                  inline: 1,
                  mt: 6,
                  __source: { fileName: _jsxFileName, lineNumber: 168, columnNumber: 11 }
                },
                'Join a ',
                _react.default.createElement(
                  _ULink.default,
                  {
                    to: '/communities',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 20
                    }
                  },
                  'Relevant Community'
                ),
                ' and get rewarded for your expertise.'
              ),
              _react.default.createElement(
                _web.View,
                {
                  mt: 6,
                  fdirection: ['row', 'column'],
                  align: 'center',
                  __source: { fileName: _jsxFileName, lineNumber: 173, columnNumber: 11 }
                },
                _react.default.createElement(
                  _web.Button,
                  {
                    h: 8,
                    p: '2 6',
                    mr: [3, 0],
                    onClick: function onClick() {
                      return _this2.signUp('signupSocial');
                    },
                    alignself: ['flex-start', 'stretch'],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 13
                    }
                  },
                  _react.default.createElement(
                    SectionText,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 15
                      }
                    },
                    'Join Relevant'
                  )
                ),
                _react.default.createElement(
                  SectionText,
                  {
                    mt: [0, 2],
                    inline: 1,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 13
                    }
                  },
                  'or',
                  ' ',
                  _react.default.createElement(
                    _web.Text,
                    {
                      style: { textDecoration: 'underline' },
                      inline: 1,
                      onClick: function onClick() {
                        return _this2.signUp('login');
                      },
                      c: _styles.colors.blue,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 15
                      }
                    },
                    'Log In'
                  )
                )
              )
            ),
            _react.default.createElement(
              Section,
              {
                mt: sectionSpace,
                __source: { fileName: _jsxFileName, lineNumber: 197, columnNumber: 9 }
              },
              _react.default.createElement(
                SplashText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 198, columnNumber: 11 }
                },
                "Most social networks make it easy to find popular content, but they don't help us determine what\u2019s important, or who we can trust."
              )
            ),
            _react.default.createElement(_countUp.default, {
              high: ['clickbait', 'cat videos'],
              highScore: [700, 1000],
              low: ['climate change study', 'a nuanced opinion'],
              lowScore: [10, 30],
              type: 'thumb',
              color: _styles.colors.lightGrey,
              __source: { fileName: _jsxFileName, lineNumber: 204, columnNumber: 9 }
            }),
            _react.default.createElement(
              ImageLabel,
              { __source: { fileName: _jsxFileName, lineNumber: 212, columnNumber: 9 } },
              'Web 2.0 metrics measure value according to engagement.'
            ),
            _react.default.createElement(
              Section,
              {
                mt: sectionSpace,
                __source: { fileName: _jsxFileName, lineNumber: 214, columnNumber: 9 }
              },
              _react.default.createElement(
                SplashText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 215, columnNumber: 11 }
                },
                'That\u2019s why we created Relevant, a manipulation-resistant social network that filters content according to quality, not clicks.'
              )
            ),
            _react.default.createElement(_countUp.default, {
              high: ['climate change study', 'a nuanced opinion'],
              highScore: [300, 500],
              low: ['clickbait', 'cat videos'],
              lowScore: [-40, -10],
              type: 'relevant',
              color: _styles.colors.blue,
              __source: { fileName: _jsxFileName, lineNumber: 221, columnNumber: 9 }
            }),
            _react.default.createElement(
              ImageLabel,
              { __source: { fileName: _jsxFileName, lineNumber: 229, columnNumber: 9 } },
              'Votes from users with high Reputation count for more'
            ),
            _react.default.createElement(
              Section,
              {
                mt: 2,
                __source: { fileName: _jsxFileName, lineNumber: 231, columnNumber: 9 }
              },
              _react.default.createElement(
                SplashText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 232, columnNumber: 11 }
                },
                'The Relevant Reputation System puts curation power in the hands of trusted community members instead of passive consumers.'
              )
            ),
            _react.default.createElement(
              Section,
              {
                mt: sectionSpace,
                __source: { fileName: _jsxFileName, lineNumber: 238, columnNumber: 9 }
              },
              _react.default.createElement(
                SplashText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 239, columnNumber: 11 }
                },
                'Relevant rewards users for curating content.'
              )
            ),
            _react.default.createElement(_countUpCoin.default, {
              high: ['climate change study', 'a nuanced opinion'],
              low: ['clickbait', 'cat videos'],
              type: 'coin',
              color: _styles.colors.gold,
              __source: { fileName: _jsxFileName, lineNumber: 242, columnNumber: 9 }
            }),
            _react.default.createElement(
              ImageLabel,
              { __source: { fileName: _jsxFileName, lineNumber: 248, columnNumber: 9 } },
              'Users earn coins for betting on quality content.'
            ),
            _react.default.createElement(
              Section,
              { __source: { fileName: _jsxFileName, lineNumber: 250, columnNumber: 9 } },
              _react.default.createElement(
                SplashText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 251, columnNumber: 11 }
                },
                'Users can earn coins by betting on the relevance of content. Bets don\u2019t impact content rankings but provide a way to reward users for their expertise.'
              )
            ),
            _react.default.createElement(
              Section,
              {
                mt: sectionSpace,
                __source: { fileName: _jsxFileName, lineNumber: 257, columnNumber: 9 }
              },
              _react.default.createElement(
                SplashText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 258, columnNumber: 11 }
                },
                'Each Relevant Community has its own unique Reputation System. Communities decide what kind of information is valuable to them and how that value is measured.'
              ),
              _react.default.createElement(
                SplashText,
                {
                  __source: { fileName: _jsxFileName, lineNumber: 263, columnNumber: 11 }
                },
                'Here are a few communities you can join right now:'
              ),
              _react.default.createElement(_web.View, {
                mt: 6,
                __source: { fileName: _jsxFileName, lineNumber: 264, columnNumber: 11 }
              }),
              _react.default.createElement(_communityList.default, {
                p: 0,
                hashtags: true,
                __source: { fileName: _jsxFileName, lineNumber: 265, columnNumber: 11 }
              })
            ),
            _react.default.createElement(
              _web.View,
              {
                margin: 'auto',
                flex: [1, null],
                mt: sectionSpace,
                fdirection: ['row', 'column'],
                justify: ['center', 'center'],
                align: 'center',
                h: ['auto', '100vh'],
                mb: [0, 0],
                __source: { fileName: _jsxFileName, lineNumber: 268, columnNumber: 9 }
              },
              _react.default.createElement(
                _web.View,
                {
                  fdirection: 'column',
                  align: ['flex-start', 'center'],
                  justify: 'center',
                  style: { zIndex: 1 },
                  flex: [0, 1],
                  __source: { fileName: _jsxFileName, lineNumber: 278, columnNumber: 11 }
                },
                _react.default.createElement(
                  _web.View,
                  {
                    align: 'center',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 13
                    }
                  },
                  _react.default.createElement(_web.Image, {
                    h: [8, 0],
                    src: '/img/logo.png',
                    alt: 'Relevant',
                    zIndex: 1,
                    mt: 'auto',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 289,
                      columnNumber: 15
                    }
                  })
                ),
                _react.default.createElement(_appStoreButtons.default, {
                  mt: [8, 4],
                  mb: [0, 1],
                  __source: { fileName: _jsxFileName, lineNumber: 298, columnNumber: 13 }
                }),
                _react.default.createElement(
                  Social,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 13
                    }
                  },
                  _react.default.createElement(_social.default, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 301,
                      columnNumber: 15
                    }
                  })
                )
              ),
              _react.default.createElement(
                Phone,
                {
                  ml: 3,
                  justify: 'center',
                  align: 'center',
                  __source: { fileName: _jsxFileName, lineNumber: 304, columnNumber: 11 }
                },
                _react.default.createElement(
                  PhoneVideo,
                  {
                    w: [VID_TO_PHONE * 50, 'auto'],
                    h: [
                      VID_TO_PHONE * 50 * VID_RATIO,
                      ''.concat(VID_TO_PHONE * 100, 'vh')
                    ],
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 305,
                      columnNumber: 13
                    }
                  },
                  _react.default.createElement('source', {
                    src: '/img/vid.webm',
                    type: 'video/webm',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 313,
                      columnNumber: 15
                    }
                  }),
                  _react.default.createElement('source', {
                    src: '/img/vid.mp4',
                    type: 'video/mp4',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 314,
                      columnNumber: 15
                    }
                  })
                ),
                _react.default.createElement(_web.Image, {
                  w: [50, 'auto'],
                  h: ['auto', '100vh'],
                  src: '/img/phone-blank.png',
                  alt: 'Relevant Phone',
                  __source: { fileName: _jsxFileName, lineNumber: 316, columnNumber: 13 }
                })
              )
            ),
            _react.default.createElement(
              FixedLogo,
              {
                mt: [2, 1],
                visible: showFixedLogo && !screenSize,
                __source: { fileName: _jsxFileName, lineNumber: 325, columnNumber: 9 }
              },
              _react.default.createElement(
                _ULink.default,
                {
                  to: '/relevant/top',
                  __source: { fileName: _jsxFileName, lineNumber: 326, columnNumber: 11 }
                },
                _react.default.createElement(_web.Image, {
                  h: [6, 4, 3],
                  src: '/img/r-big.png',
                  alt: 'Relevant',
                  __source: { fileName: _jsxFileName, lineNumber: 327, columnNumber: 13 }
                })
              )
            ),
            _react.default.createElement(
              Join,
              {
                w: ['auto', '100%'],
                mb: [0, 0],
                p: [0, '0 2'],
                visible: showJoinButton,
                __source: { fileName: _jsxFileName, lineNumber: 331, columnNumber: 9 }
              },
              _react.default.createElement(
                _web.Button,
                {
                  flex: 1,
                  h: 8,
                  p: '2 6',
                  onClick: function onClick() {
                    return _this2.signUp('signupSocial');
                  },
                  __source: { fileName: _jsxFileName, lineNumber: 332, columnNumber: 11 }
                },
                _react.default.createElement(
                  SectionText,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 333,
                      columnNumber: 13
                    }
                  },
                  'Join Relevant'
                )
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
  return Splash;
})(_react.Component);
(0, _defineProperty2.default)(Splash, 'propTypes', {
  history: _propTypes.default.object,
  actions: _propTypes.default.object,
  communities: _propTypes.default.object,
  screenSize: _propTypes.default.number
});
function mapStateToProps(state) {
  return {
    screenSize: state.navigation.screenSize,
    communities: state.community.communities
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      _objectSpread(
        _objectSpread({}, navigationActions),
        {},
        { getCommunities: _community.getCommunities }
      ),
      dispatch
    )
  };
}
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Splash);
exports.default = _default;
//# sourceMappingURL=about.component.js.map
