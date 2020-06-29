'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = exports.ULinkComponent = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
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
var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRouterDom = require('react-router-dom');
var _styles = require('../../styles');
var _styledComponents = require('styled-components');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _navigation = require('./navigation.actions');
var _alert = require('../../utils/alert');
var _reactNativeWeb = require('react-native-web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/ULink.component.js';
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
function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(['\n    ', '\n    ', '\n    ', '\n  ']);
  _templateObject7 = function _templateObject7() {
    return data;
  };
  return data;
}
function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(['\n    ', '\n  ']);
  _templateObject6 = function _templateObject6() {
    return data;
  };
  return data;
}
function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(['\n    ', '\n    ', '\n  ']);
  _templateObject5 = function _templateObject5() {
    return data;
  };
  return data;
}
function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(['\n    ', '\n    ', '\n  ']);
  _templateObject4 = function _templateObject4() {
    return data;
  };
  return data;
}
function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(['']);
  _templateObject3 = function _templateObject3() {
    return data;
  };
  return data;
}
function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(['']);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(['']);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var styled;
var StyledLink;
var StyledNavLink;
var StyledA;
var DisabledLink;
var DisabledLinkText;
var DisabledLinkView;
var environment = 'web';
var linkStyles = (0, _styledComponents.css)(
  ['', ' color:', ';', ' ', ' ', ' ', ':hover *{', ' ', '}'],
  function(p) {
    return p.styles;
  },
  _styles.colors.blue,
  _styles.mixins.link,
  _styles.mixins.margin,
  _styles.mixins.padding,
  _styles.mixins.color,
  function(p) {
    return p.hc ? 'color: '.concat(p.hc) : '';
  },
  function(p) {
    return p.hu ? 'text-decoration: underline' : '';
  }
);
if (process.env.WEB !== 'true') {
  environment = 'native';
  styled = require('styled-components/primitives').default;
  StyledLink = styled.Touchable(_templateObject());
  DisabledLinkText = styled.Text(_templateObject2());
  DisabledLinkView = styled.View(_templateObject3());
} else {
  styled = require('styled-components').default;
  StyledLink = styled(_reactRouterDom.Link)(
    _templateObject4(),
    linkStyles,
    _styles.mixins.cursor
  );
  StyledNavLink = styled(_reactRouterDom.NavLink)(
    _templateObject5(),
    linkStyles,
    _styles.mixins.cursor
  );
  StyledA = styled.a(_templateObject6(), linkStyles);
  DisabledLink = styled.span(
    _templateObject7(),
    function(p) {
      return p.disabled ? 'color: '.concat(_styles.colors.secondaryText, ';') : '';
    },
    linkStyles,
    _styles.mixins.cursor
  );
}
var ULinkComponent = (function(_PureComponent) {
  (0, _inherits2.default)(ULinkComponent, _PureComponent);
  var _super = _createSuper(ULinkComponent);
  function ULinkComponent() {
    var _this;
    (0, _classCallCheck2.default)(this, ULinkComponent);
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
      'checkAuth',
      function(e, callback) {
        var _this$props = _this.props,
          auth = _this$props.auth,
          authrequired = _this$props.authrequired;
        if (!authrequired) {
          try {
            callback(e);
          } catch (err) {}
        } else if (authrequired && !auth.isAuthenticated) {
          e.preventDefault();
          (0, _alert.Alert)().alert('You must be signed in to do this');
        } else {
          try {
            callback(e);
          } catch (err) {}
        }
      }
    );
    return _this;
  }
  (0, _createClass2.default)(ULinkComponent, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props2 = this.props,
          _onClick = _this$props2.onClick,
          onPress = _this$props2.onPress,
          to = _this$props2.to,
          styles = _this$props2.styles,
          children = _this$props2.children,
          navLink = _this$props2.navLink,
          external = _this$props2.external,
          target = _this$props2.target,
          disabled = _this$props2.disabled,
          noLink = _this$props2.noLink,
          auth = _this$props2.auth,
          authrequired = _this$props2.authrequired,
          type = _this$props2.type,
          hu = _this$props2.hu,
          inline = _this$props2.inline,
          actions = _this$props2.actions,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, [
            'onClick',
            'onPress',
            'to',
            'styles',
            'children',
            'navLink',
            'external',
            'target',
            'disabled',
            'noLink',
            'auth',
            'authrequired',
            'type',
            'hu',
            'inline',
            'actions'
          ]);
        if (environment === 'web') {
          if (disabled || noLink) {
            return _react.default.createElement(
              DisabledLink,
              (0, _extends2.default)({}, rest, {
                hu: hu ? 1 : 0,
                inline: inline ? 1 : 0,
                styles: styles || '',
                __source: { fileName: _jsxFileName, lineNumber: 112, columnNumber: 11 }
              }),
              children
            );
          }
          if (navLink) {
            return _react.default.createElement(
              StyledNavLink,
              (0, _extends2.default)({}, rest, {
                hu: hu ? 1 : 0,
                inline: inline ? 1 : 0,
                onClick: function onClick(e) {
                  _this2.checkAuth(e, _onClick);
                },
                to: to || '#',
                styles: styles || '',
                __source: { fileName: _jsxFileName, lineNumber: 124, columnNumber: 11 }
              }),
              children
            );
          }
          if (external) {
            return _react.default.createElement(
              StyledA,
              (0, _extends2.default)({}, rest, {
                hu: hu ? 1 : 0,
                inline: inline ? 1 : 0,
                onClick: function onClick(e) {
                  _this2.checkAuth(e, _onClick);
                },
                href: to || '#',
                target: target,
                styles: styles || '',
                __source: { fileName: _jsxFileName, lineNumber: 140, columnNumber: 11 }
              }),
              children
            );
          }
          return _react.default.createElement(
            StyledLink,
            (0, _extends2.default)({}, rest, {
              hu: hu ? 1 : 0,
              inline: inline ? 1 : 0,
              onClick: function onClick(e) {
                _this2.checkAuth(e, _onClick);
              },
              to: to,
              target: target,
              styles: styles || '',
              __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 9 }
            }),
            children
          );
        }
        if (disabled || noLink) {
          if (type === 'text') {
            return _react.default.createElement(
              DisabledLinkText,
              { __source: { fileName: _jsxFileName, lineNumber: 175, columnNumber: 16 } },
              children
            );
          }
          return _react.default.createElement(
            DisabledLinkView,
            {
              flex: 1,
              __source: { fileName: _jsxFileName, lineNumber: 178, columnNumber: 14 }
            },
            children
          );
        }
        var pressHandler =
          external && !onPress
            ? function() {
                return actions.goToUrl(to);
              }
            : function() {
                return onPress();
              };
        return _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            style: { flex: inline ? 0 : 1 },
            to: to || '#',
            onPress: function onPress() {
              return requestAnimationFrame(function() {
                return pressHandler();
              });
            },
            activeOpacity: 0.8,
            __source: { fileName: _jsxFileName, lineNumber: 197, columnNumber: 7 }
          },
          children
        );
      }
    }
  ]);
  return ULinkComponent;
})(_react.PureComponent);
exports.ULinkComponent = ULinkComponent;
ULinkComponent.propTypes = {
  inline: _propTypes.default.oneOfType([
    _propTypes.default.bool,
    _propTypes.default.number
  ]),
  hu: _propTypes.default.bool,
  type: _propTypes.default.string,
  navLink: _propTypes.default.bool,
  children: _propTypes.default.node,
  to: _propTypes.default.string,
  onPress: _propTypes.default.func,
  onClick: _propTypes.default.func,
  styles: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.array
  ]),
  external: _propTypes.default.bool,
  target: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  noLink: _propTypes.default.bool,
  auth: _propTypes.default.object,
  actions: _propTypes.default.object,
  authrequired: _propTypes.default.bool
};
var _default = (0, _reactRedux.connect)(
  function(state) {
    return { auth: state.auth };
  },
  function(dispatch) {
    return {
      actions: (0, _redux.bindActionCreators)(
        { showModal: _navigation.showModal, goToUrl: _navigation.goToUrl },
        dispatch
      )
    };
  }
)(ULinkComponent);
exports.default = _default;
//# sourceMappingURL=ULink.component.js.map
