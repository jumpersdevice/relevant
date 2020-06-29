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
var _propTypes = _interopRequireDefault(require('prop-types'));
var _redux = require('redux');
var _reactRedux = require('react-redux');
var tagActions = _interopRequireWildcard(require('../../tag/tag.actions'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/topics.container.js';
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
var TopicsAdmin = (function(_Component) {
  (0, _inherits2.default)(TopicsAdmin, _Component);
  var _super = _createSuper(TopicsAdmin);
  function TopicsAdmin(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TopicsAdmin);
    _this = _super.call(this, props);
    _this.state = { topic: '', emoji: '' };
    _this.handleChange = _this.handleChange.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    _this.updateTag = _this.updateTag.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(TopicsAdmin, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.actions.getParentTags();
      }
    },
    {
      key: 'handleChange',
      value: function handleChange(event) {
        this.setState(
          (0, _defineProperty2.default)({}, event.target.name, event.target.value)
        );
      }
    },
    {
      key: 'updateTag',
      value: function updateTag(e, tag) {
        tag[e.target.name] = e.target.value;
        this.props.actions.updateParentTag(tag);
      }
    },
    {
      key: 'archiveTag',
      value: function archiveTag(tag) {
        tag.active = !tag.active;
        this.props.actions.updateTag(tag);
      }
    },
    {
      key: 'saveTag',
      value: function saveTag(tag) {
        tag.main = tag.main.split(', ').filter(function(t) {
          return t !== '';
        });
        tag.children = tag.children.split(', ').filter(function(t) {
          return t !== '';
        });
        this.props.actions.updateTag(tag);
      }
    },
    {
      key: 'newTag',
      value: function newTag() {
        var tag = {
          _id: this.state.topic + '_category_tag',
          categoryName: this.state.topic,
          category: true,
          emoji: this.state.emoji
        };
        this.props.actions.createTag(tag);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var tags = this.props.tags.parentTags || [];
        tags = [].concat(
          (0, _toConsumableArray2.default)(
            tags.filter(function(tag) {
              return tag.active;
            })
          ),
          (0, _toConsumableArray2.default)(
            tags.filter(function(tag) {
              return !tag.active;
            })
          )
        );
        return _react.default.createElement(
          'div',
          {
            style: styles.topicsContainerStyle,
            __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 7 }
          },
          _react.default.createElement('input', {
            type: 'text',
            name: 'topic',
            placeholder: 'topic',
            value: this.state.topic,
            onChange: this.handleChange,
            __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 9 }
          }),
          _react.default.createElement('input', {
            type: 'text',
            name: 'emoji',
            placeholder: 'emoji',
            value: this.state.emoji,
            onChange: this.handleChange,
            __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 9 }
          }),
          _react.default.createElement(
            'button',
            {
              onClick: function onClick() {
                return _this2.newTag();
              },
              __source: { fileName: _jsxFileName, lineNumber: 81, columnNumber: 9 }
            },
            'Add new category'
          ),
          tags.map(function(tag) {
            if (!tag.newId) tag.newId = tag._id;
            if (tag.main && typeof tag.main !== 'string') {
              tag.main = tag.main.join(', ');
            }
            if (tag.children && typeof tag.children !== 'string') {
              tag.children = tag.children.join(', ');
            }
            return _react.default.createElement(
              'div',
              {
                style: tag.active ? null : { textDecoration: 'line-through' },
                key: tag._id,
                __source: { fileName: _jsxFileName, lineNumber: 91, columnNumber: 13 }
              },
              tag.emoji,
              '\xA0',
              _react.default.createElement('input', {
                type: 'text',
                name: 'categoryName',
                placeholder: 'topic',
                value: tag.categoryName,
                onChange: function onChange(e) {
                  return _this2.updateTag(e, tag);
                },
                __source: { fileName: _jsxFileName, lineNumber: 97, columnNumber: 15 }
              }),
              _react.default.createElement('input', {
                type: 'text',
                name: 'newId',
                placeholder: '_id',
                value: tag.newId,
                onChange: function onChange(e) {
                  return _this2.updateTag(e, tag);
                },
                __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 15 }
              }),
              _react.default.createElement('input', {
                type: 'text',
                name: 'main',
                placeholder: 'main',
                value: tag.main,
                onChange: function onChange(e) {
                  return _this2.updateTag(e, tag);
                },
                __source: { fileName: _jsxFileName, lineNumber: 111, columnNumber: 15 }
              }),
              _react.default.createElement('input', {
                type: 'text',
                name: 'children',
                placeholder: 'children',
                value: tag.children,
                onChange: function onChange(e) {
                  return _this2.updateTag(e, tag);
                },
                __source: { fileName: _jsxFileName, lineNumber: 118, columnNumber: 15 }
              }),
              '\xA0',
              tag.count,
              '\xA0',
              _react.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    return _this2.archiveTag(tag);
                  },
                  __source: { fileName: _jsxFileName, lineNumber: 128, columnNumber: 15 }
                },
                'remove'
              ),
              _react.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    return _this2.saveTag(tag);
                  },
                  __source: { fileName: _jsxFileName, lineNumber: 129, columnNumber: 15 }
                },
                'save'
              )
            );
          })
        );
      }
    }
  ]);
  return TopicsAdmin;
})(_react.Component);
(0, _defineProperty2.default)(TopicsAdmin, 'propTypes', {
  actions: _propTypes.default.object,
  tags: _propTypes.default.array
});
styles = {
  topicsContainerStyle: { display: 'flex', flexDirection: 'column', alignItems: 'center' }
};
var _default = (0, _reactRedux.connect)(
  function(state) {
    return { auth: state.auth, tags: state.tags };
  },
  function(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(tagActions, dispatch) };
  }
)(TopicsAdmin);
exports.default = _default;
//# sourceMappingURL=topics.container.js.map
