'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = TextAreaWithMention;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _reactTextareaAutosize = _interopRequireDefault(require('react-textarea-autosize'));
var _user = require('../../user/user.actions');
var _web = require('../../styled/web');
var _uni = require('../../styled/uni');
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _styles = require('../../../styles');
var _avatarbox = _interopRequireDefault(require('../../user/avatarbox.component'));
var _commentBody = _interopRequireDefault(require('../../comment/commentBody'));
var _sizing = _interopRequireDefault(require('../../../styles/sizing'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/text/web/textAreaWithMention.js';
var UserSelect = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'textAreaWithMention__UserSelect',
  componentId: 'luf962-0'
})(['cursor:pointer;&:hover{background:', ';}'], _styles.colors.lightGrey);
TextAreaWithMention.propTypes = {
  textArea: _propTypes.default.shape({ current: _propTypes.default.any }),
  value: _propTypes.default.string,
  autoFocus: _propTypes.default.bool,
  leftPadding: _propTypes.default.number,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  setFocused: _propTypes.default.func,
  withPreview: _propTypes.default.bool,
  children: _propTypes.default.node,
  placeholder: _propTypes.default.string,
  minheight: _propTypes.default.oneOfType([
    _propTypes.default.number,
    _propTypes.default.string
  ])
};
function TextAreaWithMention(_ref) {
  var textArea = _ref.textArea,
    value = _ref.value,
    autoFocus = _ref.autoFocus,
    leftPadding = _ref.leftPadding,
    onChange = _ref.onChange,
    _onBlur = _ref.onBlur,
    setFocused = _ref.setFocused,
    children = _ref.children,
    withPreview = _ref.withPreview,
    placeholder = _ref.placeholder,
    minheight = _ref.minheight;
  var dispatch = (0, _reactRedux.useDispatch)();
  var innerTextAreaRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)('write'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    mode = _useState2[0],
    setMode = _useState2[1];
  var showWrite = mode === 'write';
  var showPreview = mode === 'preview';
  (0, _react.useEffect)(function() {
    return function() {
      return dispatch((0, _user.searchUser)());
    };
  }, []);
  return _react.default.createElement(
    _web.View,
    {
      fdirection: 'column',
      __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 5 }
    },
    withPreview &&
      _react.default.createElement(
        _web.View,
        {
          mb: 0.5,
          __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 9 }
        },
        _react.default.createElement(
          _web.View,
          {
            p: '.5 1',
            mr: 1,
            __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.CTALink,
            {
              c: _styles.colors.black,
              td: showWrite ? 'underline' : '',
              onPress: function onPress() {
                return setMode('write');
              },
              p: 1,
              __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 13 }
            },
            'Write'
          )
        ),
        _react.default.createElement(
          _web.View,
          {
            p: '.5 1',
            __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.CTALink,
            {
              c: _styles.colors.black,
              td: showPreview ? 'underline' : '',
              onPress: function onPress() {
                return setMode('preview');
              },
              p: 1,
              __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 13 }
            },
            'Preview Markdown'
          )
        )
      ),
    showWrite &&
      _react.default.createElement(
        _web.View,
        {
          fdirection: 'row',
          'justify-': 'space-between',
          align: 'flex-start',
          m: '0 0 2.5 0',
          flex: 1,
          position: 'relative',
          __source: { fileName: _jsxFileName, lineNumber: 86, columnNumber: 9 }
        },
        _react.default.createElement(_web.StyledTextareaAutocomplete, {
          containerStyle: { display: 'flex', flex: 'auto', flexDirection: 'column' },
          listStyle: {
            display: 'flex',
            flexWrap: 'wrap',
            listStyleType: 'none',
            padding: 0
          },
          style: { flex: 'auto' },
          innerRef: function innerRef(c) {
            return (textArea.current = c);
          },
          ref: function ref(c) {
            return (innerTextAreaRef.current = c);
          },
          rows: 2,
          placeholder: placeholder,
          value: value,
          onChange: onChange,
          m: 0,
          flex: 1,
          autoFocus: !!autoFocus,
          pl: leftPadding,
          minheight: minheight,
          onFocus: function onFocus() {
            setFocused && setFocused(true);
            setTimeout(function() {
              var p = innerTextAreaRef.current.getCaretPosition();
              if (p === 0) innerTextAreaRef.current.setCaretPosition(value.length);
            });
          },
          onBlur: function onBlur(e) {
            e.type === 'blur' && _onBlur && _onBlur(e);
            e.type === 'blur' && setFocused && setFocused(false);
          },
          textAreaComponent: {
            component: _reactTextareaAutosize.default,
            ref: 'inputRef'
          },
          loadingComponent: function loadingComponent() {
            return _react.default.createElement(
              'span',
              { __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 37 } },
              'Loading'
            );
          },
          trigger: {
            '@': {
              dataProvider: (function() {
                var _dataProvider = (0, _asyncToGenerator2.default)(
                  _regenerator.default.mark(function _callee(token) {
                    var users;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.next = 2;
                            return dispatch((0, _user.searchUser)(token));
                          case 2:
                            users = _context.sent;
                            return _context.abrupt(
                              'return',
                              users.map(function(u) {
                                return { user: u, name: u.handle };
                              })
                            );
                          case 4:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })
                );
                function dataProvider(_x) {
                  return _dataProvider.apply(this, arguments);
                }
                return dataProvider;
              })(),
              component: Item,
              output: function output(item) {
                return '@' + item.name;
              }
            }
          },
          __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 11 }
        }),
        children
      ),
    showPreview &&
      _react.default.createElement(
        _web.View,
        {
          minheight: minheight || (0, _sizing.default)(8),
          p: '1 2 0 2',
          mb: 2,
          fjustify: 'center',
          border: _styles.colors.lightBorder,
          __source: { fileName: _jsxFileName, lineNumber: 152, columnNumber: 9 }
        },
        _react.default.createElement(_commentBody.default, {
          noLink: true,
          comment: { body: value },
          noPostLink: true,
          __source: { fileName: _jsxFileName, lineNumber: 159, columnNumber: 11 }
        })
      )
  );
}
Item.propTypes = { entity: { user: _propTypes.default.object } };
function Item(_ref2) {
  var entity = _ref2.entity;
  return _react.default.createElement(
    UserSelect,
    {
      p: '1 2 1 1',
      __source: { fileName: _jsxFileName, lineNumber: 172, columnNumber: 5 }
    },
    _react.default.createElement(_avatarbox.default, {
      user: entity.user,
      noLink: true,
      __source: { fileName: _jsxFileName, lineNumber: 173, columnNumber: 7 }
    })
  );
}
//# sourceMappingURL=textAreaWithMention.js.map
