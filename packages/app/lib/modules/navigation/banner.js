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
var _uni = require('../styled/uni');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styles = require('../../styles');
var _ULink = _interopRequireDefault(require('./ULink.component'));
var _reactRouterDom = require('react-router-dom');
var _utils = require('../../utils');
var _bannerButtons = _interopRequireDefault(require('./bannerButtons'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/banner.js';
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
var mobilePhone =
  '\n  position: absolute;\n  bottom: 0;\n  width: 80vw;\n  right: -40px;\n  opacity: .3;\n';
var Phone = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'banner__Phone',
  componentId: 'sc-1d6sbqc-0'
})(
  [
    'flex:0.65;align-self:flex-end;transform-origin:bottom;z-index:-1;max-height:400px;',
    ''
  ],
  function(p) {
    return p.screenSize ? mobilePhone : '';
  }
);
var Wrapper = (0, _primitives.default)(_uni.View).withConfig({
  displayName: 'banner__Wrapper',
  componentId: 'sc-1d6sbqc-1'
})(['position:relative;overflow:hidden;max-height:550px;']);
var SplashText = (0, _primitives.default)(_uni.InlineText).withConfig({
  displayName: 'banner__SplashText',
  componentId: 'sc-1d6sbqc-2'
})(
  ['font-family:', ';color:', ';'],
  _styles.fonts.HELVETICA_NEUE_MEDIUM,
  _styles.colors.black
);
var SubHeader = (0, _primitives.default)(_uni.Text).withConfig({
  displayName: 'banner__SubHeader',
  componentId: 'sc-1d6sbqc-3'
})(['font-family:', ';display:inline;'], _styles.fonts.GEORGIA);
var Splash = (function(_Component) {
  (0, _inherits2.default)(Splash, _Component);
  var _super = _createSuper(Splash);
  function Splash(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Splash);
    _this = _super.call(this, props, context);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      isDismissed: true
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'componentDidMount',
      (0, _asyncToGenerator2.default)(
        _regenerator.default.mark(function _callee() {
          var isDismissed;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  window.addEventListener('scroll', _this.onScroll);
                  _context.next = 3;
                  return _utils.storage.isDismissed('splashDismissed', 5);
                case 3:
                  isDismissed = _context.sent;
                  _this.setState({ isDismissed: isDismissed });
                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        })
      )
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'dismiss',
      function() {
        var now = new Date().getTime();
        _utils.storage.set('splashDismissed', now);
        _this.setState({ isDismissed: true });
      }
    );
    _this.onScroll = _this.onScroll.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(Splash, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.isDismissed !== this.state.isDismissed) {
          this.onScroll();
        }
      }
    },
    {
      key: 'onScroll',
      value: function onScroll() {
        if (!this.phone) return;
        this.phone.style.transform = '';
        var top = this.phone.getBoundingClientRect().top - 100;
        var y = Math.max(-top / 3, 0);
        this.phone.style.transform = 'translateX(0) translateY('.concat(y, 'px)');
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          hideCloseButton = _this$props.hideCloseButton,
          location = _this$props.location,
          history = _this$props.history,
          screenSize = _this$props.screenSize,
          overRideDismiss = _this$props.overRideDismiss;
        if (this.state.isDismissed && !overRideDismiss) {
          return null;
        }
        var img = '/img/hand-transparent.png';
        var learnMoreUrl =
          'https://blog.relevant.community/relevant-curated-by-communities-not-clicks-ba8d346c47da';
        return _react.default.createElement(
          Wrapper,
          {
            ref: function ref(c) {
              return (_this2.container = c);
            },
            display: 'flex',
            justify: 'flex-start',
            align: 'center',
            fdirection: 'row',
            of: 'hidden',
            bb: true,
            __source: { fileName: _jsxFileName, lineNumber: 108, columnNumber: 7 }
          },
          hideCloseButton
            ? null
            : _react.default.createElement(
                _uni.Touchable,
                {
                  onPress: this.dismiss,
                  __source: { fileName: _jsxFileName, lineNumber: 118, columnNumber: 11 }
                },
                _react.default.createElement(_uni.CloseX, {
                  w: 3,
                  h: 3,
                  top: [6, 4],
                  right: [6, 3],
                  resizeMode: 'contain',
                  source: require('../../../public/img/x.png'),
                  __source: { fileName: _jsxFileName, lineNumber: 119, columnNumber: 13 }
                })
              ),
          _react.default.createElement(
            _uni.View,
            {
              m: ['6 0 6 12', '3 4 2 2'],
              flex: 1,
              justify: 'center',
              align: ['flex-start', 'stretch'],
              fdirection: 'column',
              __source: { fileName: _jsxFileName, lineNumber: 129, columnNumber: 9 }
            },
            _react.default.createElement(
              _uni.View,
              { __source: { fileName: _jsxFileName, lineNumber: 136, columnNumber: 11 } },
              _react.default.createElement(
                SplashText,
                {
                  fs: [6, 3],
                  lh: [9, 4.2],
                  __source: { fileName: _jsxFileName, lineNumber: 137, columnNumber: 13 }
                },
                _react.default.createElement(
                  _uni.Text,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 15
                    }
                  },
                  'Information curated by humans, not algorithms.'
                )
              ),
              _react.default.createElement(
                _uni.View,
                {
                  mt: [5, 2],
                  mb: [6, 0],
                  __source: { fileName: _jsxFileName, lineNumber: 140, columnNumber: 13 }
                },
                _react.default.createElement(
                  SubHeader,
                  {
                    fs: [2.5, 1.75],
                    lh: [4, 3],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 15
                    }
                  },
                  'Join a ',
                  _react.default.createElement(
                    _ULink.default,
                    {
                      to: '/communities',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 24
                      }
                    },
                    'community'
                  ),
                  ', curate content and earn rewards.',
                  ' ',
                  _react.default.createElement(
                    _ULink.default,
                    {
                      to: learnMoreUrl,
                      external: true,
                      target: '_blank',
                      display: 'inline',
                      td: 'underline',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 17
                      }
                    },
                    'Learn More'
                  )
                )
              )
            ),
            _react.default.createElement(_bannerButtons.default, {
              location: location,
              history: history,
              __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 11 }
            })
          ),
          _react.default.createElement(
            Phone,
            {
              screenSize: screenSize,
              flexshrink: [1, 0],
              __source: { fileName: _jsxFileName, lineNumber: 158, columnNumber: 9 }
            },
            _react.default.createElement('img', {
              style: { width: '100%' },
              ref: function ref(c) {
                return (_this2.phone = c);
              },
              onLoad: this.onScroll,
              src: img,
              alt: 'phone',
              __source: { fileName: _jsxFileName, lineNumber: 159, columnNumber: 11 }
            })
          )
        );
      }
    }
  ]);
  return Splash;
})(_react.Component);
(0, _defineProperty2.default)(Splash, 'propTypes', {
  hideCloseButton: _propTypes.default.bool,
  location: _propTypes.default.object,
  history: _propTypes.default.object,
  screenSize: _propTypes.default.number,
  overRideDismiss: _propTypes.default.bool
});
var _default = (0, _reactRouterDom.withRouter)(Splash);
exports.default = _default;
//# sourceMappingURL=banner.js.map
