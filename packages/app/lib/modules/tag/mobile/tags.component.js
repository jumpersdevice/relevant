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
var _uni = require('../../styled/uni');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/tag/mobile/tags.component.js';
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
var styles = _objectSpread({}, _global.globalStyles);
var Tags = (function(_Component) {
  (0, _inherits2.default)(Tags, _Component);
  var _super = _createSuper(Tags);
  function Tags(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, Tags);
    _this = _super.call(this, props, context);
    _this.state = {};
    _this.toggleTag = _this.toggleTag.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(Tags, [
    {
      key: 'toggleTag',
      value: function toggleTag(tag) {
        if (this.props.toggleTag) return this.props.toggleTag(tag);
        if (this.selectedLookup[tag._id || tag]) {
          return this.props.actions.deselectTag(tag);
        }
        return this.props.actions.selectTag(tag);
      }
    },
    {
      key: 'renderTag',
      value: function renderTag(tag, i) {
        var _this2 = this;
        var selected = this.selectedLookup[tag._id || tag] || false;
        var name = '#'.concat(tag._id || tag);
        return _react.default.createElement(
          _reactNativeWeb.TouchableOpacity,
          {
            style: [styles.tagBox, { backgroundColor: selected ? '#4d4eff' : '#F0F0F0' }],
            onPress: function onPress() {
              return _this2.toggleTag(tag);
            },
            key: i,
            __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }
          },
          _react.default.createElement(
            _uni.View,
            {
              fdirection: 'row',
              __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.Text,
              {
                style: [styles.font15, { color: selected ? 'white' : '#808080' }],
                __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }
              },
              name
            )
          )
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var _this$props$tags = this.props.tags,
          tags = _this$props$tags.tags,
          selectedTags = _this$props$tags.selectedTags;
        if (selectedTags.length + tags.length === 0) return null;
        this.selectedLookup = {};
        selectedTags.forEach(function(tag) {
          _this3.selectedLookup[tag._id] = tag;
        });
        var allTags = tags.map(function(tag, i) {
          return _this3.renderTag(tag, i);
        });
        return _react.default.createElement(
          _uni.View,
          {
            fdirection: 'row',
            wrap: true,
            align: 'center',
            justify: 'flex-start',
            bg: _styles.colors.white,
            __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 7 }
          },
          allTags
        );
      }
    }
  ]);
  return Tags;
})(_react.Component);
exports.default = Tags;
(0, _defineProperty2.default)(Tags, 'propTypes', {
  toggleTag: _propTypes.default.func,
  actions: _propTypes.default.object,
  tags: _propTypes.default.object
});
//# sourceMappingURL=tags.component.js.map
