'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = CreatePostContainer;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _createPost = require('./createPost.actions');
var _utils = require('../../utils');
var _uni = require('../styled/uni');
var _web = require('../styled/web');
var _avatarbox = _interopRequireDefault(require('../user/avatarbox.component'));
var _postinfo = _interopRequireDefault(require('../post/postinfo.component'));
var _styles = require('../../styles');
var _text = require('../../utils/text');
var _community = require('../community/community.selectors');
var _hooks = require('../../utils/hooks');
var _textAreaWithMention = _interopRequireDefault(
  require('../text/web/textAreaWithMention')
);
var _tags = _interopRequireDefault(require('./tags.input'));
var _footer = _interopRequireDefault(require('./footer'));
var _hooks2 = require('./hooks');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/createPost.container.js';
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
var PLACEHOLDER_URL = "What's relevant?  Paste article URL.";
var PLACEHOLDER_TEXT =
  'Add your commentary, opinion, summary or a relevant quote from the article';
var MD_PLACEHOLDER =
  'Add text or paste a url here.\n\nYou can use Markdown:\n# Title\n**bold**\n`inline code`\n```code block```';
CreatePostContainer.propTypes = { close: _propTypes.default.func };
function CreatePostContainer(_ref) {
  var close = _ref.close;
  var dispatch = (0, _reactRedux.useDispatch)();
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var postData = (0, _reactRedux.useSelector)(function(state) {
    return state.createPost;
  });
  var community = (0, _community.useCommunity)();
  var textArea = (0, _react.useRef)();
  var authError = (0, _hooks2.useCommunityAuth)();
  var title = postData.title,
    channel = postData.channel,
    postBody = postData.postBody,
    urlPreview = postData.urlPreview,
    linkPreview = postData.linkPreview,
    selectedTags = postData.selectedTags,
    allTags = postData.allTags,
    postUrl = postData.postUrl,
    loadingPreview = postData.loadingPreview,
    postTags = postData.postTags,
    disableUrl = postData.disableUrl;
  var setState = function setState(state) {
    dispatch(
      (0, _createPost.setCreatePostState)(
        _objectSpread(_objectSpread({}, postData), state)
      )
    );
  };
  (0, _react.useEffect)(
    function() {
      setState({ allTags: community.topics });
    },
    [community.topics]
  );
  var prevUrl = (0, _hooks.usePrevious)(postUrl);
  var createPreview = (0, _hooks2.usePreview)(setState);
  var clearUrl = function clearUrl() {
    var shouldDisableUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    setState({
      url: null,
      postUrl: null,
      urlPreview: null,
      loadingPreview: false,
      postTags: [],
      disableUrl: shouldDisableUrl && true
    });
  };
  (0, _react.useEffect)(
    function() {
      var shouldDisableUrl = false;
      if (!postUrl && urlPreview) clearUrl(shouldDisableUrl);
      else if (postUrl && prevUrl !== postUrl && !loadingPreview && !disableUrl) {
        createPreview({ postUrl: postUrl, postBody: postBody });
      }
    },
    [postUrl]
  );
  var enableUrl = function enableUrl() {
    return setState({ disableUrl: false });
  };
  var prevDisableUrl = (0, _hooks.usePrevious)(disableUrl);
  (0, _react.useEffect)(
    function() {
      prevDisableUrl &&
        !disableUrl &&
        handleBodyChange({ target: { value: postBody } }) &&
        textArea.current.focus();
    },
    [disableUrl]
  );
  var handleBlur = function handleBlur() {
    var _getTextData = (0, _text.getTextData)(postBody),
      tags = _getTextData.tags,
      mentions = _getTextData.mentions;
    var mergedTags = (0, _toConsumableArray2.default)(
      new Set(
        [].concat(
          (0, _toConsumableArray2.default)(selectedTags),
          (0, _toConsumableArray2.default)(tags)
        )
      )
    );
    setState({ mentions: mentions, selectedTags: mergedTags });
  };
  var handleBodyChange = function handleBodyChange(e) {
    var newBody = e.target.value;
    var _getTextData2 = (0, _text.getTextData)(newBody),
      url = _getTextData2.url;
    var newUrl = url && url.url;
    var isPaste = newBody.length > postBody + 4;
    var doneTypingUrl = url && url.lastIndex !== newBody.length;
    var shouldUpdateUrl = doneTypingUrl || isPaste;
    var addUrlToState = !disableUrl && shouldUpdateUrl && { postUrl: newUrl };
    setState(_objectSpread({ postBody: newBody }, addUrlToState));
  };
  var addTextFromLink = function addTextFromLink() {
    return handleBodyChange({
      target: {
        value: ''
          .concat(postBody, '\n>"')
          .concat(_utils.text.stripHTML(urlPreview.description), '"')
      }
    });
  };
  var showPasteButton = urlPreview && urlPreview.description;
  var placeholder = urlPreview ? PLACEHOLDER_TEXT : PLACEHOLDER_URL;
  var renderTags = postBody || postUrl;
  var suggestedTags = (0, _toConsumableArray2.default)(
    new Set(
      [].concat(
        (0, _toConsumableArray2.default)(allTags),
        (0, _toConsumableArray2.default)(postTags)
      )
    )
  );
  if (authError) return authError.component;
  return _react.default.createElement(
    _uni.View,
    { __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 5 } },
    _react.default.createElement(
      _uni.View,
      {
        display: 'flex',
        fdirection: 'row',
        align: 'center',
        __source: { fileName: _jsxFileName, lineNumber: 144, columnNumber: 7 }
      },
      _react.default.createElement(_avatarbox.default, {
        user: user,
        size: 4,
        __source: { fileName: _jsxFileName, lineNumber: 145, columnNumber: 9 }
      })
    ),
    channel &&
      _react.default.createElement(_web.Input, {
        onChange: function onChange(e) {
          return setState({ title: e.target.value });
        },
        value: title,
        name: 'title',
        mt: 2,
        type: 'text',
        placeholder: 'Title',
        __source: { fileName: _jsxFileName, lineNumber: 148, columnNumber: 9 }
      }),
    _react.default.createElement(
      _uni.View,
      { mt: 2, __source: { fileName: _jsxFileName, lineNumber: 158, columnNumber: 7 } },
      _react.default.createElement(_textAreaWithMention.default, {
        value: postBody,
        onChange: handleBodyChange,
        placeholder: community.defaultPost === 'text' ? MD_PLACEHOLDER : placeholder,
        withPreview: true,
        textArea: textArea,
        minheight: 22,
        onBlur: handleBlur,
        onSubmit: handleBlur,
        __source: { fileName: _jsxFileName, lineNumber: 159, columnNumber: 9 }
      }),
      showPasteButton &&
        _react.default.createElement(PasteTextButton, {
          addTextFromLink: addTextFromLink,
          __source: { fileName: _jsxFileName, lineNumber: 169, columnNumber: 29 }
        })
    ),
    _react.default.createElement(_uni.Box, {
      mt: 1,
      __source: { fileName: _jsxFileName, lineNumber: 172, columnNumber: 7 }
    }),
    _react.default.createElement(PostPreview, {
      clearUrl: clearUrl,
      urlPreview: urlPreview,
      linkPreview: linkPreview,
      PostPreview: PostPreview,
      enableUrl: enableUrl,
      disableUrl: disableUrl,
      __source: { fileName: _jsxFileName, lineNumber: 173, columnNumber: 7 }
    }),
    renderTags &&
      _react.default.createElement(_tags.default, {
        setState: setState,
        selectedTags: selectedTags || [],
        allTags: suggestedTags || [],
        __source: { fileName: _jsxFileName, lineNumber: 183, columnNumber: 9 }
      }),
    _react.default.createElement(_footer.default, {
      close: close,
      __source: { fileName: _jsxFileName, lineNumber: 190, columnNumber: 7 }
    })
  );
}
PostPreview.propTypes = {
  urlPreview: _propTypes.default.object,
  linkPreview: _propTypes.default.object,
  clearUrl: _propTypes.default.func,
  enableUrl: _propTypes.default.func,
  disableUrl: _propTypes.default.bool
};
function PostPreview(_ref2) {
  var urlPreview = _ref2.urlPreview,
    linkPreview = _ref2.linkPreview,
    clearUrl = _ref2.clearUrl,
    disableUrl = _ref2.disableUrl,
    enableUrl = _ref2.enableUrl;
  var screenSize = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.screenSize;
  });
  if (disableUrl)
    return _react.default.createElement(
      _uni.View,
      {
        fdirection: 'row',
        align: 'center',
        __source: { fileName: _jsxFileName, lineNumber: 208, columnNumber: 7 }
      },
      _react.default.createElement('input', {
        checked: !disableUrl,
        type: 'checkbox',
        name: 'preivew',
        onChange: enableUrl,
        __source: { fileName: _jsxFileName, lineNumber: 209, columnNumber: 9 }
      }),
      _react.default.createElement(
        _uni.BodyText,
        {
          ml: 0.5,
          __source: { fileName: _jsxFileName, lineNumber: 215, columnNumber: 9 }
        },
        'Add Link Preview'
      )
    );
  if (!urlPreview) return null;
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 222, columnNumber: 5 } },
    _react.default.createElement(_postinfo.default, {
      preview: !!screenSize,
      post: urlPreview,
      link: linkPreview,
      __source: { fileName: _jsxFileName, lineNumber: 223, columnNumber: 7 }
    }),
    _react.default.createElement(
      _uni.SmallText,
      {
        onPress: clearUrl,
        c: _styles.colors.blue,
        style: { textAlign: 'right' },
        __source: { fileName: _jsxFileName, lineNumber: 224, columnNumber: 7 }
      },
      'Remove Link Preview'
    )
  );
}
PasteTextButton.propTypes = { addTextFromLink: _propTypes.default.func };
function PasteTextButton(_ref3) {
  var addTextFromLink = _ref3.addTextFromLink;
  return _react.default.createElement(
    _uni.AbsoluteView,
    {
      right: (0, _styles.sizing)(2),
      bottom: (0, _styles.sizing)(3.5),
      __source: { fileName: _jsxFileName, lineNumber: 237, columnNumber: 5 }
    },
    _react.default.createElement(
      _uni.SmallText,
      {
        c: _styles.colors.blue,
        onPress: function onPress(e) {
          e.preventDefault();
          addTextFromLink();
        },
        __source: { fileName: _jsxFileName, lineNumber: 238, columnNumber: 7 }
      },
      'Paste article description'
    )
  );
}
//# sourceMappingURL=createPost.container.js.map
