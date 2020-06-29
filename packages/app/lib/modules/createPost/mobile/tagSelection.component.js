'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
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
var _reactNativeWeb = require('react-native-web');
var _uni = require('../../styled/uni');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _tags = _interopRequireDefault(require('../../tag/mobile/tags.component'));
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _styles = require('../../../styles');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/mobile/tagSelection.component.js';
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
var Input = (0, _primitives.default)(_reactNativeWeb.TextInput).withConfig({
  displayName: 'tagSelectioncomponent__Input',
  componentId: 'sc-14sez7m-0'
})(
  ['padding:', ';background-color:', ';', ' ', ' margin-bottom:', ''],
  (0, _styles.sizing)(1.5),
  _styles.colors.white,
  _styles.layout.universalBorder(),
  function(p) {
    return p.isFocused ? 'border-color: '.concat(_styles.colors.blue, ';}') : null;
  },
  (0, _styles.sizing)(2)
);
var styles;
var TagSelection = (function(_Component) {
  (0, _inherits2.default)(TagSelection, _Component);
  var _super = _createSuper(TagSelection);
  function TagSelection(_props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, TagSelection);
    _this = _super.call(this, _props, context);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      'updateTags',
      function() {
        var props = _this.props.createPost;
        if (props) {
          _this.bodyTags = props.bodyTags.map(function(tag) {
            return { _id: tag, bodyTag: true };
          });
          _this.tags = props.keywords.map(function(tag) {
            return { _id: tag };
          });
          _this.selectedTags = (0, _toConsumableArray2.default)(
            new Set(
              [].concat(
                (0, _toConsumableArray2.default)(_this.bodyTags),
                (0, _toConsumableArray2.default)(_this.selectedTags)
              )
            )
          );
        }
      }
    );
    _this.state = { input: '', inputFocused: false, communityTags: [] };
    _this.toggleTag = _this.toggleTag.bind((0, _assertThisInitialized2.default)(_this));
    _this.selectedTags = [];
    _this.inputTags = [];
    _this.tags = [];
    _this.topicTags = [];
    _this.bodyTags = [];
    return _this;
  }
  (0, _createClass2.default)(TagSelection, [
    {
      key: 'onFocus',
      value: function onFocus() {
        this.setState({ inputFocused: true });
      }
    },
    {
      key: 'onBlur',
      value: function onBlur() {
        this.setState({ inputFocused: false });
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setState({
          communityTags: this.props.communityTags.map(function(tag) {
            return { _id: tag };
          })
        });
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.communityTags !== this.props.communityTags) {
          this.setState({
            communityTags: this.props.communityTags.map(function(tag) {
              return { _id: tag };
            })
          });
        }
      }
    },
    {
      key: 'setTopicTags',
      value: function setTopicTags(selectedTopic, updateSelected) {
        this.selectedTopic = selectedTopic;
        if (!this.selectedTopic) return;
        var children = this.selectedTopic.children || [];
        children = children.map(function(topic) {
          return { _id: topic };
        });
        var main = this.selectedTopic.main || [];
        main = main.map(function(topic) {
          return { _id: topic };
        });
        if (!main.length) main = [this.selectedTopic];
        this.topicTags = [].concat(
          (0, _toConsumableArray2.default)(main),
          (0, _toConsumableArray2.default)(children)
        );
        if (updateSelected) {
          var bodyTags = this.bodyTags.filter(function(tag) {
            return (
              main.findIndex(function(t) {
                return tag._id === t._id;
              }) === -1
            );
          });
          this.selectedTags = (0, _toConsumableArray2.default)(
            new Set(
              [].concat(
                (0, _toConsumableArray2.default)(main),
                (0, _toConsumableArray2.default)(bodyTags)
              )
            )
          );
        }
      }
    },
    {
      key: 'processInput',
      value: function processInput(input) {
        this.setState({ input: input.toLowerCase() });
        if (input === '') {
          this.inputTags = [];
          this.props.actions.setCreatePostState({
            allTags: [].concat(
              (0, _toConsumableArray2.default)(this.inputTags),
              (0, _toConsumableArray2.default)(this.selectedTags)
            )
          });
        }
        var words = input.split(' ');
        var tags = words
          .map(function(word) {
            word = word
              .replace('#', '')
              .replace(/(,|\.|!|\?)\s*$/, '')
              .toLowerCase();
            if (word === '') return null;
            return { _id: word };
          })
          .filter(function(el) {
            return el !== null;
          });
        if (this.selectedTags.length + tags.length >= 7) {
          return _reactNativeWeb.Alert.alert('👋 too many topics!');
        }
        this.inputTags = tags;
        this.props.actions.setCreatePostState({
          allTags: [].concat(
            (0, _toConsumableArray2.default)(this.inputTags),
            (0, _toConsumableArray2.default)(this.selectedTags)
          )
        });
        return null;
      }
    },
    {
      key: 'toggleTag',
      value: function toggleTag(tag) {
        var index = this.selectedTags.findIndex(function(t) {
          return t._id === tag;
        });
        var indexInput = this.inputTags.findIndex(function(t) {
          return t._id === tag;
        });
        if (tag.bodyTag) {
          return _reactNativeWeb.Alert.alert(
            'text tag',
            'You can remove this topic by going back and editing the text'
          );
        }
        if (index > -1) {
          this.selectedTags.splice(index, 1);
          var bodyTags = this.bodyTags.filter(function(t) {
            return tag !== t._id;
          });
          this.bodyTags = bodyTags;
          this.props.actions.setCreatePostState({
            bodyTags: bodyTags.map(function(t) {
              return t._id;
            })
          });
        } else if (indexInput === -1) {
          if (this.selectedTags.length + this.inputTags.length >= 7) {
            return _reactNativeWeb.Alert.alert('👋 too many topics!');
          }
          this.selectedTags.push({ _id: tag });
        }
        this.props.actions.setCreatePostState({
          allTags: [].concat(
            (0, _toConsumableArray2.default)(this.inputTags),
            (0, _toConsumableArray2.default)(this.selectedTags)
          ),
          selectedTags: this.selectedTags
        });
        this.forceUpdate();
        return null;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var selectedTopic = this.selectedTopic;
        this.updateTags();
        var selectedTags = [].concat(
          (0, _toConsumableArray2.default)(this.selectedTags),
          (0, _toConsumableArray2.default)(this.inputTags)
        );
        var tags = (0, _toConsumableArray2.default)(
          new Set(
            [].concat(
              (0, _toConsumableArray2.default)(this.inputTags),
              (0, _toConsumableArray2.default)(this.state.communityTags),
              (0, _toConsumableArray2.default)(this.tags),
              (0, _toConsumableArray2.default)(this.bodyTags)
            )
          )
        );
        tags = (0, _toConsumableArray2.default)(
          new Set(
            tags.map(function(t) {
              return t._id;
            })
          )
        );
        if (selectedTopic) {
          tags = tags.filter(function(tag) {
            return tag !== selectedTopic._id;
          });
        }
        return _react.default.createElement(
          _uni.View,
          {
            p: 2,
            pt: 3,
            style: { flexDirection: 'column' },
            __source: { fileName: _jsxFileName, lineNumber: 173, columnNumber: 7 }
          },
          _react.default.createElement(Input, {
            autoCapitalize: 'none',
            autoCorrect: false,
            underlineColorAndroid: 'transparent',
            onChangeText: function onChangeText(input) {
              return _this2.processInput(input);
            },
            ref: function ref(c) {
              _this2.input = c;
            },
            onBlur: function onBlur() {
              return _this2.onBlur();
            },
            onFocus: function onFocus() {
              return _this2.onFocus();
            },
            value: this.state.input,
            multiline: false,
            isFocused: this.state.inputFocused,
            placeholderTextColor: _styles.colors.grey,
            style: { color: _styles.colors.black },
            placeholder: 'Select additional topics or create your own',
            onSubmitEditing: _reactNativeWeb.Keyboard.dismiss,
            __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 9 }
          }),
          _react.default.createElement(_uni.View, {
            style: styles.break,
            __source: { fileName: _jsxFileName, lineNumber: 192, columnNumber: 9 }
          }),
          _react.default.createElement(_tags.default, {
            toggleTag: this.toggleTag,
            tags: { tags: tags, selectedTags: selectedTags },
            __source: { fileName: _jsxFileName, lineNumber: 193, columnNumber: 9 }
          }),
          _react.default.createElement(_uni.View, {
            style: styles.break,
            __source: { fileName: _jsxFileName, lineNumber: 194, columnNumber: 9 }
          })
        );
      }
    }
  ]);
  return TagSelection;
})(_react.Component);
(0, _defineProperty2.default)(TagSelection, 'propTypes', {
  createPost: _propTypes.default.object,
  actions: _propTypes.default.object,
  communityTags: _propTypes.default.array
});
var localStyles = _reactNativeWeb.StyleSheet.create({
  topicInput: { height: 45, padding: 10, backgroundColor: 'white' },
  break: {
    borderBottomWidth: _reactNativeWeb.StyleSheet.hairlineWidth,
    borderBottomColor: '#F0F0F0'
  }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
var _default = TagSelection;
exports.default = _default;
//# sourceMappingURL=tagSelection.component.js.map
