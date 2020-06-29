'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _createPost = require('./createPost.actions');
var _uni = require('../styled/uni');
var _hooks = require('./hooks');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/createPost/footer.js';
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
var CHAT_ENABLED = false;
var _default = (0, _react.memo)(Footer);
exports.default = _default;
Footer.propTypes = { close: _propTypes.default.func };
function Footer(_ref) {
  var close = _ref.close;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)({ submitting: false, error: null }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    submitting = _useState2[0].submitting,
    setStatus = _useState2[1];
  var user = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.user;
  });
  var postData = (0, _reactRedux.useSelector)(function(state) {
    return state.createPost;
  });
  var channel = postData.channel,
    postBody = postData.postBody,
    edit = postData.edit,
    selectedTags = postData.selectedTags;
  var handleCheckbox = function handleCheckbox(e) {
    return setState((0, _defineProperty2.default)({}, e.target.name, e.target.checked));
  };
  var clearPost = (0, _react.useCallback)(
    function() {
      return dispatch((0, _createPost.clearCreatePost)());
    },
    [dispatch]
  );
  var createPost = (0, _hooks.useCreatePost)({
    close: close,
    clearPost: clearPost,
    setStatus: setStatus
  });
  var setState = function setState(state) {
    return dispatch(
      (0, _createPost.setCreatePostState)(
        _objectSpread(_objectSpread({}, postData), state)
      )
    );
  };
  var submitDisabled =
    submitting || !selectedTags.length || !postBody || !postBody.trim().length;
  var isAdmin = user && user.role === 'admin';
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 5 } },
    _react.default.createElement(
      _uni.View,
      {
        mt: 2,
        fdirection: 'row',
        justify: 'space-between',
        __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 7 }
      },
      isAdmin &&
        CHAT_ENABLED &&
        _react.default.createElement(
          _uni.View,
          {
            fdirection: 'row',
            align: 'center',
            alignself: 'center',
            __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 11 }
          },
          _react.default.createElement('input', {
            checked: channel,
            type: 'checkbox',
            name: 'channel',
            onChange: handleCheckbox,
            __source: { fileName: _jsxFileName, lineNumber: 49, columnNumber: 13 }
          }),
          _react.default.createElement(
            _uni.BodyText,
            {
              ml: 0.5,
              __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 13 }
            },
            'This is a chat channel'
          )
        ),
      _react.default.createElement(
        _uni.View,
        {
          fdirection: 'row',
          flex: 1,
          justify: 'flex-end',
          align: 'center',
          __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.LinkFont,
          {
            mr: 3,
            onClick: clearPost,
            __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 11 }
          },
          'Clear'
        ),
        _react.default.createElement(
          _uni.Button,
          {
            onClick: function onClick() {
              return !submitDisabled && createPost(postData);
            },
            disabled: submitDisabled,
            ml: 2,
            __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 11 }
          },
          edit ? 'Update Post' : 'Create Post'
        )
      )
    )
  );
}
//# sourceMappingURL=footer.js.map
