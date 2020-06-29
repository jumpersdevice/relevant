'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = MD;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireWildcard(require('react'));
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _styles = require('../../styles');
var _navigation = require('../navigation/navigation.actions');
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _markdown = _interopRequireDefault(require('../../styles/markdown.native'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/comment/renderMarkdown.js';
var MarkdownNative;
var ReactMarkdown;
if (process.env.WEB === 'true') {
  ReactMarkdown = require('react-markdown');
} else {
  MarkdownNative = require('react-native-markdown-display').default;
}
MD.propTypes = {
  markdown: _propTypes.default.string,
  noLink: _propTypes.default.bool,
  className: _propTypes.default.string
};
function MD(_ref) {
  var markdown = _ref.markdown,
    noLink = _ref.noLink,
    className = _ref.className;
  var processNativeLink = useNativeLink(noLink);
  var MarkdownLink = getMDLink(noLink);
  var RENDERERS = { link: MarkdownLink, linkReference: MarkdownLink };
  return _styles.isNative
    ? _react.default.createElement(
        MarkdownNative,
        {
          mergeStyle: true,
          onLinkPress: processNativeLink,
          style: _markdown.default,
          __source: { fileName: _jsxFileName, lineNumber: 33, columnNumber: 5 }
        },
        markdown
      )
    : _react.default.createElement(ReactMarkdown, {
        renderers: RENDERERS,
        className: className,
        source: markdown,
        __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 5 }
      });
}
function useNativeLink(noLink) {
  var dispatch = (0, _reactRedux.useDispatch)();
  return (0, _react.useCallback)(
    function(url) {
      if (noLink) return null;
      switch (true) {
        case url === '':
          return true;
        case /__user_profile__/.test(url):
          return dispatch(
            (0, _navigation.goToProfile)(url.replace('__user_profile__', ''))
          );
        case /__tag_link__/.test(url):
          return dispatch((0, _navigation.goToTopic)(url.replace('__tag_link__', '')));
        default:
          return dispatch((0, _navigation.goToUrl)(url));
      }
    },
    [dispatch, noLink]
  );
}
function getMDLink(noLink) {
  MarkdownLink.propTypes = {
    href: _propTypes.default.string,
    children: _propTypes.default.node,
    onPress: _propTypes.default.func
  };
  function MarkdownLink(_ref2) {
    var href = _ref2.href,
      children = _ref2.children,
      _onPress = _ref2.onPress,
      rest = (0, _objectWithoutProperties2.default)(_ref2, [
        'href',
        'children',
        'onPress'
      ]);
    if (href === '') return children;
    var regex = /^(https?|file|ftps?|mailto|javascript|data:image\/[^;]{2,9};):/i;
    var isAbsolute = regex.test(href);
    return _react.default.createElement(
      _ULink.default,
      (0, _extends2.default)({ to: href }, rest, {
        children: children,
        onClick: function onClick(e) {
          return noLink ? e.preventDefault() : e.stopPropagation();
        },
        onPress: function onPress(e) {
          return noLink ? e.preventDefault() : _onPress(e);
        },
        external: isAbsolute,
        target: isAbsolute ? '_blank' : null,
        __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 7 }
      })
    );
  }
  return (0, _react.memo)(MarkdownLink);
}
//# sourceMappingURL=renderMarkdown.js.map
