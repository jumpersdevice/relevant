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
var _reactRedux = require('react-redux');
var _redux = require('redux');
var _web = require('../../styled/web');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _navigation = require('../../navigation/navigation.actions');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/ui/web/menuIcon.component.js';
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
var Menu = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'menuIconcomponent__Menu',
  componentId: 'sc-1lbjr5g-0'
})(
  ['display:flex;cursor:pointer;width:', ';:hover *{background-color:', ';}'],
  (0, _styles.sizing)(3),
  _styles.colors.black
);
var MenuBar = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'menuIconcomponent__MenuBar',
  componentId: 'sc-1lbjr5g-1'
})(['width:100%;height:3px;background-color:', ';margin:0.2rem 0;'], _styles.colors.grey);
var MenuIcon = (function(_Component) {
  (0, _inherits2.default)(MenuIcon, _Component);
  var _super = _createSuper(MenuIcon);
  function MenuIcon() {
    var _this;
    (0, _classCallCheck2.default)(this, MenuIcon);
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
      'toggleMenu',
      function() {
        var _this$props = _this.props,
          actions = _this$props.actions,
          sideNavIsOpen = _this$props.navigation.sideNavIsOpen;
        if (sideNavIsOpen) {
          actions.closeWebSideNav();
        }
        if (!sideNavIsOpen) {
          actions.openWebSideNav();
        }
      }
    );
    return _this;
  }
  (0, _createClass2.default)(MenuIcon, [
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          mr = _this$props2.mr,
          ml = _this$props2.ml,
          screenSize = _this$props2.navigation.screenSize;
        if (!screenSize) return null;
        return _react.default.createElement(
          _web.View,
          {
            mr: mr,
            ml: ml,
            __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 7 }
          },
          _react.default.createElement(
            Menu,
            {
              onClick: this.toggleMenu,
              fdirection: 'column',
              justify: 'space-between',
              __source: { fileName: _jsxFileName, lineNumber: 50, columnNumber: 9 }
            },
            _react.default.createElement(MenuBar, {
              __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 11 }
            }),
            _react.default.createElement(MenuBar, {
              __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 11 }
            }),
            _react.default.createElement(MenuBar, {
              __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 11 }
            })
          )
        );
      }
    }
  ]);
  return MenuIcon;
})(_react.Component);
MenuIcon.propTypes = {
  actions: _propTypes.default.object,
  navigation: _propTypes.default.object,
  ml: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.number,
    _propTypes.default.array
  ]),
  mr: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.number,
    _propTypes.default.array
  ])
};
var mapStateToProps = function mapStateToProps(state) {
  return { navigation: state.navigation };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(
      {
        openWebSideNav: _navigation.openWebSideNav,
        closeWebSideNav: _navigation.closeWebSideNav
      },
      dispatch
    )
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MenuIcon);
exports.default = _default;
//# sourceMappingURL=menuIcon.component.js.map
