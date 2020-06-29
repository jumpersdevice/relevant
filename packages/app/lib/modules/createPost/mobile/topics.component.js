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
var _tagSelection = _interopRequireDefault(require('./tagSelection.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/mobile/topics.component.js';
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
var topics = (function(_Component) {
  (0, _inherits2.default)(topics, _Component);
  var _super = _createSuper(topics);
  function topics(props) {
    var _this;
    (0, _classCallCheck2.default)(this, topics);
    _this = _super.call(this, props);
    _this.renderItem = _this.renderItem.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(topics, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        _reactNativeWeb.InteractionManager.runAfterInteractions(function() {
          if (!_this2.props.topics.length) _this2.props.actions.getParentTags();
          if (_this2.props.selectedTopic) {
            _this2.goToElement = true;
          }
        });
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prev) {
        var selectedTopic = this.props.selectedTopic;
        if (
          selectedTopic &&
          (!prev.selectedTopic || prev.selectedTopic._id !== selectedTopic._id)
        ) {
          this.goToElement = true;
        } else this.goToElement = false;
      }
    },
    {
      key: 'renderItem',
      value: function renderItem(_ref) {
        var _this3 = this;
        var item = _ref.item,
          index = _ref.index;
        var topic = item;
        var i = index;
        var active = false;
        var innerView;
        if (this.props.selectedTopic && topic._id === this.props.selectedTopic._id) {
          active = true;
        }
        if (this.props.type === 'create' && active) {
          innerView = _react.default.createElement(_tagSelection.default, {
            key: topic._id,
            topic: topic,
            scrollToElement: function scrollToElement() {
              _this3.scrollView.scrollToIndex({ viewPosition: 0.2, index: index });
              var scroll = function scroll() {
                setTimeout(function() {
                  return _this3.scrollView.scrollToIndex({
                    viewPosition: 0.2,
                    index: index
                  });
                }, 1);
                _reactNativeWeb.Keyboard.removeListener('keyboardDidShow', scroll);
              };
              if (_reactNativeWeb.Platform.OS === 'android') {
                _reactNativeWeb.Keyboard.addListener('keyboardDidShow', scroll);
              }
            },
            actions: this.props.actions,
            createPost: this.props.createPost,
            __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 9 }
          });
        }
        if (active && this.goToElement) {
          setTimeout(function() {
            _this3.scrollView.scrollToIndex({ viewPosition: 0.1, index: index });
          }, 10);
        }
        return _react.default.createElement(
          _reactNativeWeb.View,
          {
            key: i,
            __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 7 }
          },
          _react.default.createElement(
            _reactNativeWeb.TouchableOpacity,
            {
              onPress: function onPress() {
                return _this3.props.action(topic);
              },
              style: [
                styles.categoryItem,
                { backgroundColor: active ? '#4d4eff' : 'white' }
              ],
              __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 9 }
            },
            _react.default.createElement(
              _reactNativeWeb.View,
              {
                style: { alignItems: 'center' },
                __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 11 }
              },
              _react.default.createElement(
                _reactNativeWeb.Text,
                {
                  style: [active ? { color: 'white' } : null],
                  __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 13 }
                },
                _reactNativeWeb.Platform.OS === 'android' ? '#' : topic.emoji + ' ',
                topic.categoryName
              )
            )
          ),
          innerView
        );
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this4 = this;
        return _react.default.createElement(_reactNativeWeb.FlatList, {
          style: { flex: 1 },
          container: true,
          ref: function ref(c) {
            return (_this4.scrollView = c);
          },
          keyboardDismissMode: 'interactive',
          keyboardShouldPersistTaps: 'always',
          data: this.props.topics,
          renderItem: this.renderItem,
          keyExtractor: function keyExtractor(item, index) {
            return index.toString();
          },
          tagsView: this.tagsView,
          extraData: this.props.selectedTopic,
          removeClippedSubviews: false,
          initialNumToRender: 20,
          __source: { fileName: _jsxFileName, lineNumber: 116, columnNumber: 7 }
        });
      }
    }
  ]);
  return topics;
})(_react.Component);
exports.default = topics;
(0, _defineProperty2.default)(topics, 'propTypes', {
  topics: _propTypes.default.array,
  actions: _propTypes.default.object,
  selectedTopic: _propTypes.default.object,
  type: _propTypes.default.string,
  createPost: _propTypes.default.object,
  action: _propTypes.default.func
});
var localStyles = _reactNativeWeb.StyleSheet.create({});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
//# sourceMappingURL=topics.component.js.map
