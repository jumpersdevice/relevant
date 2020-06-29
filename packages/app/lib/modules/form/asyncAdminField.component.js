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
var _get = _interopRequireDefault(require('lodash/get'));
var _uni = require('../styled/uni');
var _styles = require('../../styles');
var _async = _interopRequireDefault(require('react-select/async'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var _user = require('../user/user.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/form/asyncAdminField.component.js';
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
var AsyncAdminField = (function(_Component) {
  (0, _inherits2.default)(AsyncAdminField, _Component);
  var _super = _createSuper(AsyncAdminField);
  function AsyncAdminField() {
    var _this;
    (0, _classCallCheck2.default)(this, AsyncAdminField);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
      inputValue: ''
    });
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleInputChange',
      function(newValue) {
        var inputValue = newValue.replace(/\W/g, '');
        _this.setState({ inputValue: inputValue });
        return inputValue;
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'loadOptions',
      (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee(val) {
            var userSearch;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    if (val.length) {
                      _context.next = 2;
                      break;
                    }
                    return _context.abrupt('return', null);
                  case 2:
                    _context.next = 4;
                    return _this.props.actions.searchUser(val);
                  case 4:
                    userSearch = _context.sent;
                    return _context.abrupt(
                      'return',
                      userSearch.map(function(u) {
                        return { label: u.handle, value: u.handle };
                      })
                    );
                  case 6:
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
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'handleChange',
      function(vals) {
        var formattedVals = vals.map(function(v) {
          return v.value;
        });
        _this.props.input.onChange(formattedVals);
      }
    );
    return _this;
  }
  (0, _createClass2.default)(AsyncAdminField, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          label = _this$props.label,
          error = _this$props.error,
          input = _this$props.input;
        var vals = (0, _get.default)(input, 'value', []).map(function(u) {
          return { label: u, value: u };
        });
        return _react.default.createElement(
          _uni.View,
          {
            mt: 2,
            zIndex: 0,
            __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }
          },
          label
            ? _react.default.createElement(
                _uni.LinkFont,
                {
                  c: _styles.colors.black,
                  mb: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 11 }
                },
                label
              )
            : null,
          _react.default.createElement(_async.default, {
            styles: {
              menu: function menu(styles) {
                return _objectSpread(
                  _objectSpread({}, styles),
                  {},
                  { position: 'relative', top: 0 }
                );
              }
            },
            isMulti: true,
            cacheOptions: true,
            defaultOptions: true,
            value: vals,
            loadOptions: this.loadOptions,
            onChange: this.handleChange,
            __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 9 }
          }),
          error
            ? _react.default.createElement(
                _uni.SecondaryText,
                {
                  c: _styles.colors.red,
                  mt: 1,
                  __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 11 }
                },
                error
              )
            : null
        );
      }
    }
  ]);
  return AsyncAdminField;
})(_react.Component);
(0, _defineProperty2.default)(AsyncAdminField, 'propTypes', {
  input: _propTypes.default.object,
  label: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.node
  ]),
  error: _propTypes.default.string,
  actions: _propTypes.default.object
});
function mapStateToProps(state) {
  return { userSearch: state.user.search };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)({ searchUser: _user.searchUser }, dispatch)
  };
}
var _default = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(AsyncAdminField);
exports.default = _default;
//# sourceMappingURL=asyncAdminField.component.js.map
