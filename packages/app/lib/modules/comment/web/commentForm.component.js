'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.CommentFormComponent = CommentFormComponent;
exports.default = void 0;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _web = require('../../styled/web');
var _utils = require('../../../utils');
var _styles = require('../../../styles');
var _UAvatar = _interopRequireDefault(require('../../user/UAvatar.component'));
var _styledComponents = _interopRequireDefault(require('styled-components'));
var _uni = require('../../styled/uni');
var _comment = require('../comment.actions');
var _history = _interopRequireDefault(require('../../navigation/history'));
var _textAreaWithMention = _interopRequireDefault(
  require('../../text/web/textAreaWithMention')
);
var _hooks = require('../../createPost/hooks');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/web/commentForm.component.js';
var AvatarContainer = (0, _styledComponents.default)(_web.View).withConfig({
  displayName: 'commentFormcomponent__AvatarContainer',
  componentId: 'dxxc52-0'
})(
  ['position:absolute;left:', ';top:', ';z-index:10;'],
  (0, _styles.sizing)(0),
  (0, _styles.sizing)(0)
);
CommentFormComponent.propTypes = {
  edit: _propTypes.default.bool,
  comment: _propTypes.default.object,
  cancel: _propTypes.default.func,
  buttonText: _propTypes.default.string,
  parentPost: _propTypes.default.object,
  parentComment: _propTypes.default.object,
  nestingLevel: _propTypes.default.number,
  additionalNesting: _propTypes.default.number,
  autoFocus: _propTypes.default.bool,
  screenSize: _propTypes.default.number
};
function CommentFormComponent(_ref) {
  var comment = _ref.comment,
    edit = _ref.edit,
    cancel = _ref.cancel,
    nestingLevel = _ref.nestingLevel,
    additionalNesting = _ref.additionalNesting,
    autoFocus = _ref.autoFocus,
    parentComment = _ref.parentComment,
    parentPost = _ref.parentPost,
    buttonText = _ref.buttonText,
    styleProps = (0, _objectWithoutProperties2.default)(_ref, [
      'comment',
      'edit',
      'cancel',
      'nestingLevel',
      'additionalNesting',
      'autoFocus',
      'parentComment',
      'parentPost',
      'buttonText'
    ]);
  var auth = (0, _reactRedux.useSelector)(function(state) {
    return state.auth;
  });
  var screenSize = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.screenSize;
  });
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  var initalText = edit ? comment.body : '';
  var _useState3 = (0, _react.useState)(initalText),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    commentText = _useState4[0],
    setCommentText = _useState4[1];
  var textArea = (0, _react.useRef)();
  var handleChange = function handleChange(e) {
    return setCommentText(e.target.value);
  };
  var authError = (0, _hooks.useCommunityAuth)();
  function _createComment() {
    return _createComment2.apply(this, arguments);
  }
  function _createComment2() {
    _createComment2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee() {
        var _getMentionsAndTags, mentions, tags, commentObj, newComment;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                if (auth.isAuthenticated) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt(
                  'return',
                  _utils.alert.browserAlerts.alert('Please log in to post comments')
                );
              case 2:
                if (!(!commentText || !commentText.length)) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt(
                  'return',
                  _utils.alert.browserAlerts.alert('no comment')
                );
              case 4:
                (_getMentionsAndTags = getMentionsAndTags()),
                  (mentions = _getMentionsAndTags.mentions),
                  (tags = _getMentionsAndTags.tags);
                commentObj = {
                  parentPost: parentPost._id,
                  parentComment: parentComment ? parentComment._id : null,
                  linkParent: parentPost.type === 'link' ? parentPost._id : null,
                  text: commentText.trim(),
                  tags: tags,
                  mentions: mentions,
                  metaPost: parentPost.metaPost
                };
                setCommentText('');
                _context.next = 9;
                return dispatch((0, _comment.createComment)(commentObj));
              case 9:
                newComment = _context.sent;
                if (newComment) {
                  _context.next = 14;
                  break;
                }
                setCommentText(commentText);
                if (textArea.current) textArea.current.focus();
                return _context.abrupt('return', null);
              case 14:
                _cancel();
                return _context.abrupt(
                  'return',
                  _history.default.push(
                    '/'
                      .concat(newComment.community, '/post/')
                      .concat(newComment.parentPost, '/')
                      .concat(newComment._id)
                  )
                );
              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    );
    return _createComment2.apply(this, arguments);
  }
  function _updateComment() {
    return _updateComment2.apply(this, arguments);
  }
  function _updateComment2() {
    _updateComment2 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2() {
        var _getMentionsAndTags2, mentions, originalText, newComment;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                if (!(comment.body === commentText)) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt('return', _cancel());
              case 2:
                (_getMentionsAndTags2 = getMentionsAndTags()),
                  (mentions = _getMentionsAndTags2.mentions);
                originalText = comment.body;
                comment.body = commentText;
                comment.mentions = mentions;
                _context2.next = 8;
                return dispatch((0, _comment.updateComment)(comment));
              case 8:
                newComment = _context2.sent;
                if (!newComment) {
                  _context2.next = 11;
                  break;
                }
                return _context2.abrupt('return', _cancel());
              case 11:
                comment.body = originalText;
                _utils.alert.browserAlerts.alert('Error updating comment');
                return _context2.abrupt('return', null);
              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    );
    return _updateComment2.apply(this, arguments);
  }
  function getMentionsAndTags() {
    var words = _utils.text.getWords(commentText);
    var tags = _utils.text.getTags(words);
    var mentions = _utils.text.getMentions(words);
    return { mentions: mentions, tags: tags };
  }
  function _cancel() {
    setCommentText('');
    cancel && cancel();
  }
  var handleSubmit = function handleSubmit() {
    if (edit) return _updateComment();
    return _createComment();
  };
  if (!auth.isAuthenticated) return null;
  var backgroundColor = !edit && focused ? _styles.colors.secondaryBG : 'transparent';
  var paddingTop = !edit && focused ? 4 : 0;
  return _react.default.createElement(
    _uni.Spacer,
    (0, _extends2.default)({ fdirection: 'row', grow: 1 }, styleProps, {
      pt: paddingTop,
      bg: backgroundColor,
      nestingLevel: screenSize ? 0 : nestingLevel,
      additionalNesting: screenSize ? 0 : additionalNesting,
      screenSize: screenSize,
      __source: { fileName: _jsxFileName, lineNumber: 142, columnNumber: 5 }
    }),
    authError && focused
      ? authError.component
      : _react.default.createElement(
          _web.View,
          {
            fdirection: 'column',
            flex: 1,
            style: { position: 'relative' },
            __source: { fileName: _jsxFileName, lineNumber: 155, columnNumber: 9 }
          },
          _react.default.createElement(
            _textAreaWithMention.default,
            {
              textArea: textArea,
              value: commentText,
              autoFocus: autoFocus,
              leftPadding: focused ? 2 : 6,
              onChange: handleChange,
              setFocused: setFocused,
              placeholder: 'Enter comment...',
              minheight: focused ? (0, _styles.sizing)(8) : null,
              __source: { fileName: _jsxFileName, lineNumber: 156, columnNumber: 11 }
            },
            focused
              ? null
              : _react.default.createElement(
                  AvatarContainer,
                  {
                    p: 2,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 15
                    }
                  },
                  _react.default.createElement(_UAvatar.default, {
                    user: auth.user,
                    size: 3,
                    noLink: true,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 17
                    }
                  })
                )
          ),
          focused || commentText
            ? _react.default.createElement(
                _web.View,
                {
                  justify: 'flex-end',
                  fdirection: 'row',
                  __source: { fileName: _jsxFileName, lineNumber: 174, columnNumber: 13 }
                },
                _react.default.createElement(
                  _web.Button,
                  {
                    onMouseDown: _cancel,
                    onTouchStart: _cancel,
                    bg: 'transparent',
                    c: _styles.colors.secondaryText,
                    disabled: !auth.isAuthenticated,
                    p: [null, '0 4'],
                    minwidth: 1,
                    mr: 1,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 15
                    }
                  },
                  'Cancel'
                ),
                _react.default.createElement(
                  _web.Button,
                  {
                    onMouseDown: handleSubmit,
                    onTouchStart: handleSubmit,
                    disabled: !auth.isAuthenticated,
                    p: [null, '0 4'],
                    minwidth: 1,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 15
                    }
                  },
                  buttonText
                )
              )
            : null
        )
  );
}
var _default = (0, _react.memo)(CommentFormComponent);
exports.default = _default;
//# sourceMappingURL=commentForm.component.js.map
