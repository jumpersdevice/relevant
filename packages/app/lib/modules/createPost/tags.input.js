'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = TagsInput;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _selectTags = _interopRequireDefault(require('./web/selectTags.component'));
var _uni = require('../styled/uni');
var _TagInput = _interopRequireDefault(require('./web/TagInput.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/tags.input.js';
TagsInput.propTypes = {
  selectedTags: _propTypes.default.array,
  allTags: _propTypes.default.array,
  setState: _propTypes.default.func
};
function TagsInput(_ref) {
  var selectedTags = _ref.selectedTags,
    setState = _ref.setState,
    allTags = _ref.allTags;
  var selectTags = function selectTags(tag) {
    if (!tag || !tag.length) return;
    if (typeof tag === 'string') tag = [tag];
    selectedTags = (0, _toConsumableArray2.default)(
      new Set(
        [].concat(
          (0, _toConsumableArray2.default)(selectedTags),
          (0, _toConsumableArray2.default)(tag)
        )
      )
    );
    setState({ selectedTags: selectedTags });
  };
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 5 } },
    _react.default.createElement(
      _uni.View,
      {
        mt: [3, 2],
        __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }
      },
      _react.default.createElement(_TagInput.default, {
        selectedTags: selectedTags,
        selectTag: selectTags,
        deselectTag: function deselectTag(tag) {
          return setState({
            selectedTags: selectedTags.filter(function(t) {
              return t !== tag;
            })
          });
        },
        placeholderText: !selectedTags.length ? 'Please add at least one tag' : '',
        __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 9 }
      }),
      _react.default.createElement(
        _uni.View,
        {
          mt: [4, 2],
          __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 9 }
        },
        _react.default.createElement(_selectTags.default, {
          text: 'Suggested tags',
          tags: allTags,
          selectedTags: selectedTags,
          selectTag: selectTags,
          deselectTag: function deselectTag(tag) {
            return setState({
              selectedTags: selectedTags.filter(function(t) {
                return t !== tag;
              })
            });
          },
          __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 11 }
        })
      ),
      _react.default.createElement(_uni.Divider, {
        mt: [4, 2],
        __source: { fileName: _jsxFileName, lineNumber: 43, columnNumber: 9 }
      })
    )
  );
}
//# sourceMappingURL=tags.input.js.map
