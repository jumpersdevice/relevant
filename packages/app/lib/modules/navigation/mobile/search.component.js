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
var _reactNativeWeb = require('react-native-web');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/navigation/mobile/search.component.js';
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
var styles;
var Search = (function(_Component) {
  (0, _inherits2.default)(Search, _Component);
  var _super = _createSuper(Search);
  function Search(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Search);
    _this = _super.call(this, props, context);
    _this.state = { search: false };
    _this.renderTitle = _this.renderSearch.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.close = _this.close.bind((0, _assertThisInitialized2.default)(_this));
    _this.search = _this.search.bind((0, _assertThisInitialized2.default)(_this));
    _this.input = null;
    _this.searchTerm = '';
    return _this;
  }
  (0, _createClass2.default)(Search, [
    {
      key: 'search',
      value: function search(term) {
        if (term && term.length > 1) this.props.actions.searchTags(term);
        else this.props.actions.searchTags(null);
      }
    },
    {
      key: 'close',
      value: function close() {
        this.search();
        this.input.clear();
      }
    },
    {
      key: 'renderSearch',
      value: function renderSearch() {
        var _this2 = this;
        var searchEl = null;
        searchEl = _react.default.createElement(
          _reactNativeWeb.View,
          {
            style: { flex: 1, paddingVertical: 10 },
            __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 7 }
          },
          _react.default.createElement(_reactNativeWeb.TextInput, {
            ref: function ref(input) {
              _this2.input = input;
            },
            onSubmitEditing: this.search,
            style: [styles.searchInput, styles.font15],
            placeholderTextColor: _styles.colors.grey,
            placeholder: 'Search',
            autoFocus: true,
            onBlur: this.props.toggleSearch,
            multiline: false,
            onChangeText: function onChangeText(term) {
              return _this2.search(term);
            },
            returnKeyType: 'done',
            clearTextOnFocus: true,
            __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 9 }
          }),
          _react.default.createElement(
            _reactNativeWeb.View,
            {
              style: styles.closeParent,
              __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: styles.close,
                onPress: function onPress() {
                  return _this2.close();
                },
                __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }
              },
              '\u2715'
            )
          )
        );
        return searchEl;
      }
    },
    {
      key: 'render',
      value: function render() {
        return this.renderSearch();
      }
    }
  ]);
  return Search;
})(_react.Component);
(0, _defineProperty2.default)(Search, 'propTypes', {
  actions: _propTypes.default.object,
  toggleSearch: _propTypes.default.func
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  titleComponent: { justifyContent: 'flex-end' },
  backArrow: { paddingTop: 4 },
  leftButton: { flex: 1, marginLeft: 15, justifyContent: 'center', paddingVertical: 10 },
  rightButton: { flex: 1, marginRight: 15, paddingVertical: 10 },
  statsTxt: { color: 'black', fontSize: 13, textAlign: 'right' },
  gearImg: { height: 20, width: 20, justifyContent: 'center' },
  gear: { flexDirection: 'row', justifyContent: 'flex-end' },
  searchInput: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: 10,
    marginTop: 2,
    marginRight: 35
  },
  closeParent: {
    position: 'absolute',
    top: 3,
    right: 5,
    width: 35,
    height: 35,
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  close: { padding: 5, color: 'grey', fontSize: 16, textAlign: 'center', opacity: 0.8 }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
var _default = Search;
exports.default = _default;
//# sourceMappingURL=search.component.js.map
