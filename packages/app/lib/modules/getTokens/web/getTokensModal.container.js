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
var _get = _interopRequireDefault(require('lodash/get'));
var _auth = require('../../auth/auth.actions');
var _navigation = require('../../navigation/navigation.actions');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _getTokensModal = _interopRequireDefault(require('../getTokensModal.component'));
var _styles = require('../../../styles');
var _uni = require('../../styled/uni');
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/getTokens/web/getTokensModal.container.js';
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
var twitterIcon = require('../../../../public/img/icons/twitter_white.png');
var redditIcon = require('../../../../public/img/icons/reddit.png');
var TwitterButton = function TwitterButton() {
  return _react.default.createElement(
    _ULink.default,
    {
      to: '/auth/twitter',
      external: true,
      mr: ['auto', 0],
      mt: 3,
      __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 3 }
    },
    _react.default.createElement(
      _uni.HoverButton,
      {
        w: [22, 'auto'],
        bg: _styles.colors.twitterBlue,
        m: 0,
        c: _styles.colors.white,
        fdirection: 'row',
        __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 5 }
      },
      _react.default.createElement(_uni.Image, {
        resizeMode: 'contain',
        source: twitterIcon,
        w: 3,
        h: 3,
        mr: 1.5,
        __source: { fileName: _jsxFileName, lineNumber: 25, columnNumber: 7 }
      }),
      _react.default.createElement(
        _uni.LinkFont,
        {
          c: _styles.colors.white,
          __source: { fileName: _jsxFileName, lineNumber: 26, columnNumber: 7 }
        },
        'Connect Twitter'
      )
    )
  );
};
var RedditButton = function RedditButton() {
  return _react.default.createElement(
    _ULink.default,
    {
      to: '/auth/reddit',
      external: true,
      mr: ['auto', 0],
      mt: 3,
      __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 3 }
    },
    _react.default.createElement(
      _uni.HoverButton,
      {
        w: [22, 'auto'],
        bg: _styles.colors.redditColor,
        m: 0,
        c: _styles.colors.white,
        fdirection: 'row',
        __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 5 }
      },
      _react.default.createElement(_uni.Image, {
        resizeMode: 'contain',
        source: redditIcon,
        w: 3,
        h: 3,
        mr: 1.5,
        __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 7 }
      }),
      _react.default.createElement(
        _uni.LinkFont,
        {
          c: _styles.colors.white,
          __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 7 }
        },
        'Connect Reddit'
      )
    )
  );
};
var GetTokensModalContainer = (function(_Component) {
  (0, _inherits2.default)(GetTokensModalContainer, _Component);
  var _super = _createSuper(GetTokensModalContainer);
  function GetTokensModalContainer() {
    (0, _classCallCheck2.default)(this, GetTokensModalContainer);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(GetTokensModalContainer, [
    {
      key: 'render',
      value: function render() {
        return _react.default.createElement(
          _getTokensModal.default,
          (0, _extends2.default)({}, this.props, {
            twitterButton: _react.default.createElement(TwitterButton, {
              __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 24 }
            }),
            redditButton: _react.default.createElement(RedditButton, {
              __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 23 }
            }),
            __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 7 }
          })
        );
      }
    }
  ]);
  return GetTokensModalContainer;
})(_react.Component);
GetTokensModalContainer.propTypes = {
  actions: _propTypes.default.object,
  close: _propTypes.default.func,
  auth: _propTypes.default.object
};
var mapStateToProps = function mapStateToProps(state) {
  return { auth: (0, _get.default)(state, 'auth', {}) || {} };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      { sendConfirmation: _auth.sendConfirmation, showModal: _navigation.showModal },
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(GetTokensModalContainer);
exports.default = _default;
//# sourceMappingURL=getTokensModal.container.js.map
