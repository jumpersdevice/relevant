'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.useCommunityAuth = useCommunityAuth;
exports.useCreatePost = useCreatePost;
exports.usePreview = usePreview;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _uni = require('../styled/uni');
var _reactRedux = require('react-redux');
var _navigation = require('../navigation/navigation.actions');
var _post = require('../post/post.actions');
var _createPost = require('./createPost.actions');
var _community = require('../community/community.actions');
var _login = _interopRequireDefault(require('../auth/web/login.3box'));
var _reactGa = _interopRequireDefault(require('react-ga'));
var _utils = require('../../utils');
var _history = _interopRequireDefault(require('../navigation/history'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/hooks.js';
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
function useCommunityAuth() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    authError = _useState2[0],
    setAuthError = _useState2[1];
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var ethAddress = user && user.ethLogin;
  (0, _react.useEffect)(
    function() {
      var sendAuthRequtest = (function() {
        var _ref = (0, _asyncToGenerator2.default)(
          _regenerator.default.mark(function _callee() {
            var err;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.next = 2;
                    return dispatch((0, _community.checkAuth)());
                  case 2:
                    err = _context.sent;
                    err &&
                      setAuthError({
                        component: _react.default.createElement(
                          _react.Fragment,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 24,
                              columnNumber: 13
                            }
                          },
                          _react.default.createElement(
                            _uni.ErrorBox,
                            {
                              align: 'flex-start',
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25,
                                columnNumber: 15
                              }
                            },
                            _react.default.createElement(
                              _uni.BodyText,
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 26,
                                  columnNumber: 17
                                }
                              },
                              err.message
                            ),
                            !ethAddress &&
                              _react.default.createElement(
                                _react.Fragment,
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 28,
                                    columnNumber: 19
                                  }
                                },
                                _react.default.createElement(_uni.Box, {
                                  mt: 3,
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 29,
                                    columnNumber: 21
                                  }
                                }),
                                _react.default.createElement(_login.default, {
                                  type: 'metamask',
                                  text: 'Connect your Ethereum Address',
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30,
                                    columnNumber: 21
                                  }
                                })
                              )
                          )
                        )
                      });
                  case 4:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return function sendAuthRequtest() {
          return _ref.apply(this, arguments);
        };
      })();
      sendAuthRequtest();
    },
    [dispatch, ethAddress]
  );
  return authError;
}
function useCreatePost(_ref2) {
  var close = _ref2.close,
    clearPost = _ref2.clearPost,
    setStatus = _ref2.setStatus;
  var community = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.community;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var createPost = (function() {
    var _ref3 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee2(postData) {
        var selectedTags,
          postUrl,
          urlPreview,
          edit,
          mentions,
          domain,
          channel,
          title,
          postBody,
          originalPost,
          image,
          validate,
          newPost,
          success;
        return _regenerator.default.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  setStatus({ submitting: true, error: null });
                  (selectedTags = postData.selectedTags),
                    (postUrl = postData.postUrl),
                    (urlPreview = postData.urlPreview),
                    (edit = postData.edit),
                    (mentions = postData.mentions),
                    (domain = postData.domain),
                    (channel = postData.channel),
                    (title = postData.title),
                    (postBody = postData.postBody),
                    (originalPost = postData.editPost);
                  image = urlPreview ? urlPreview.image : null;
                  _context2.prev = 3;
                  validate = validateInput({
                    postBody: postBody,
                    selectedTags: selectedTags,
                    setStatus: setStatus
                  });
                  if (!(validate !== true)) {
                    _context2.next = 7;
                    break;
                  }
                  throw new Error(validate);
                case 7:
                  newPost = {
                    url: postUrl || postUrl,
                    tags: selectedTags,
                    body: postBody,
                    title: urlPreview ? urlPreview.title : title,
                    description: urlPreview ? urlPreview.description : null,
                    image: image,
                    mentions: mentions,
                    domain: domain,
                    channel: channel
                  };
                  if (!edit) {
                    _context2.next = 15;
                    break;
                  }
                  newPost = _objectSpread(_objectSpread({}, originalPost), newPost);
                  _context2.next = 12;
                  return dispatch((0, _post.editPost)(newPost));
                case 12:
                  success = _context2.sent;
                  if (success) {
                    clearPost();
                    _history.default.push(_history.default.location.pathname);
                    if (close) close();
                  }
                  return _context2.abrupt('return');
                case 15:
                  _context2.next = 17;
                  return dispatch((0, _createPost.submitPost)(newPost));
                case 17:
                  newPost = _context2.sent;
                  if (newPost) {
                    _context2.next = 20;
                    break;
                  }
                  throw new Error('Something went wrong... please try again');
                case 20:
                  close && close();
                  clearPost();
                  _history.default.push('/'.concat(community, '/new/'));
                  dispatch((0, _navigation.refreshTab)('discover'));
                  _reactGa.default.event({ category: 'User', action: 'Created a Post' });
                  setStatus({ submitting: false, error: null });
                  _context2.next = 32;
                  break;
                case 28:
                  _context2.prev = 28;
                  _context2.t0 = _context2['catch'](3);
                  _utils.alert.browserAlerts.alert(_context2.t0.message);
                  setStatus({ error: _context2.t0.message, submitting: false });
                case 32:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[3, 28]]
        );
      })
    );
    return function createPost(_x) {
      return _ref3.apply(this, arguments);
    };
  })();
  return (0, _react.useCallback)(createPost, [
    community,
    dispatch,
    clearPost,
    close,
    setStatus
  ]);
}
function validateInput(_ref4) {
  var postBody = _ref4.postBody,
    selectedTags = _ref4.selectedTags,
    setStatus = _ref4.setStatus;
  if (!selectedTags.length) {
    setStatus({ error: 'Please select at least one topic' });
    return 'Please select at least one topic';
  }
  if (!postBody || !postBody.trim().length) {
    setStatus({ error: 'Please write something' });
    return 'Can not create empty post';
  }
  return true;
}
function usePreview(setState) {
  var dispatch = (0, _reactRedux.useDispatch)();
  var createPreview = (function() {
    var _ref6 = (0, _asyncToGenerator2.default)(
      _regenerator.default.mark(function _callee3(_ref5) {
        var postUrl, postBody, preview, images, imageURL;
        return _regenerator.default.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  (postUrl = _ref5.postUrl), (postBody = _ref5.postBody);
                  _context3.prev = 1;
                  setState({ loadingPreview: true, urlPreview: { loading: true } });
                  _context3.next = 5;
                  return dispatch((0, _createPost.generatePreviewServer)(postUrl));
                case 5:
                  preview = _context3.sent;
                  if (!(!preview || !preview.url)) {
                    _context3.next = 8;
                    break;
                  }
                  throw new Error("Couldn't generate preview");
                case 8:
                  images = preview.image;
                  imageURL =
                    images && images.indexOf(', ') ? images.split(', ')[0] : images;
                  setState({
                    domain: preview.domain,
                    url: preview.url,
                    loadingPreview: false,
                    keywords: preview.keywords,
                    postTags: preview.keywords,
                    urlPreview: _objectSpread(
                      _objectSpread({}, preview),
                      {},
                      {
                        image: imageURL,
                        title: preview.title || 'Untitled',
                        loading: false,
                        tags: []
                      }
                    ),
                    linkPreview: _objectSpread(
                      _objectSpread({}, preview),
                      {},
                      { image: imageURL }
                    )
                  });
                  _context3.next = 16;
                  break;
                case 13:
                  _context3.prev = 13;
                  _context3.t0 = _context3['catch'](1);
                  setState({
                    failedUrl: postUrl,
                    loadingPreview: false,
                    postBody: postBody
                  });
                case 16:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          null,
          [[1, 13]]
        );
      })
    );
    return function createPreview(_x2) {
      return _ref6.apply(this, arguments);
    };
  })();
  return createPreview;
}
//# sourceMappingURL=hooks.js.map
