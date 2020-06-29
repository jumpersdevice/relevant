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
var _reactRouter = require('react-router');
var _redux = require('redux');
var _reactRedux = require('react-redux');
var communityActions = _interopRequireWildcard(
  require('../../community/community.actions')
);
var _ULink = _interopRequireDefault(require('../../navigation/ULink.component'));
var _web = require('../../styled/web');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/communityAdminList.component.js';
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
var CommunityAdminList = (function(_Component) {
  (0, _inherits2.default)(CommunityAdminList, _Component);
  var _super = _createSuper(CommunityAdminList);
  function CommunityAdminList() {
    (0, _classCallCheck2.default)(this, CommunityAdminList);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(CommunityAdminList, [
    {
      key: 'render',
      value: function render() {
        var communities = this.props.community.communities;
        return _react.default.createElement(
          _web.View,
          {
            m: 4,
            fdirection: 'column',
            __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 7 }
          },
          Object.values(communities).map(function(c) {
            return _react.default.createElement(
              _web.View,
              {
                mt: 2,
                key: c.slug,
                __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 11 }
              },
              _react.default.createElement(
                _ULink.default,
                {
                  to: '/admin/community/'.concat(c.slug),
                  __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 13 }
                },
                c.name
              )
            );
          }),
          _react.default.createElement(
            _web.View,
            {
              mt: 2,
              __source: { fileName: _jsxFileName, lineNumber: 27, columnNumber: 9 }
            },
            _react.default.createElement(
              _ULink.default,
              {
                to: '/admin/community/new',
                m: 0,
                __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 }
              },
              _react.default.createElement(
                _web.Button,
                {
                  to: '/admin/community/new',
                  ml: 0,
                  __source: { fileName: _jsxFileName, lineNumber: 29, columnNumber: 13 }
                },
                'Create New'
              )
            )
          )
        );
      }
    }
  ]);
  return CommunityAdminList;
})(_react.Component);
(0, _defineProperty2.default)(CommunityAdminList, 'propTypes', {
  community: _propTypes.default.object
});
var mapStateToProps = function mapStateToProps(state) {
  return { routing: state.routing, community: state.community };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_objectSpread({}, communityActions), dispatch)
  };
};
var _default = (0, _reactRouter.withRouter)(
  (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommunityAdminList)
);
exports.default = _default;
//# sourceMappingURL=communityAdminList.component.js.map
