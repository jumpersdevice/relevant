'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Commentary;
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _reactNativeWeb = require('react-native-web');
var _reactRedux = require('react-redux');
var _propTypes = _interopRequireDefault(require('prop-types'));
var _global = require('../../../styles/global');
var _pills = _interopRequireDefault(require('../../ui/mobile/pills.component'));
var _uni = require('../../styled/uni');
var _reactNativeGestureHandler = require('react-native-gesture-handler');
var _navigation = require('../../navigation/navigation.actions');
var _postButtons = _interopRequireDefault(require('./postButtons.container'));
var _reactNavigationDrawer = require('react-navigation-drawer');
var _discoverTabContext = require('../../discover/mobile/discoverTabContext');
var _commentBody = _interopRequireDefault(require('../../comment/commentBody'));
var _postInfo = _interopRequireDefault(require('./postInfo.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/post/mobile/commentary.component.js';
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
var styles;
Commentary.propTypes = {
  link: _propTypes.default.object,
  singlePost: _propTypes.default.bool,
  focusInput: _propTypes.default.func,
  commentary: _propTypes.default.array,
  preview: _propTypes.default.bool,
  avatarText: _propTypes.default.func,
  isReply: _propTypes.default.bool
};
function Commentary(props) {
  var auth = (0, _reactRedux.useSelector)(function(state) {
    return state.auth;
  });
  var users = (0, _reactRedux.useSelector)(function(state) {
    return state.user.users;
  });
  var commentary = props.commentary,
    preview = props.preview,
    isReply = props.isReply,
    link = props.link,
    singlePost = props.singlePost,
    focusInput = props.focusInput,
    avatarText = props.avatarText;
  var scrollToPage = function scrollToPage(p) {
    return scrollView.current.scrollToIndex({ index: p });
  };
  var renderItem = function renderItem(_ref) {
    var item = _ref.item,
      index = _ref.index;
    var i = index;
    var post = _objectSpread({}, item);
    if (!post) return null;
    var user = users[post.user] || post.embeddedUser;
    var hideButtons = preview;
    return _react.default.createElement(
      _uni.Box,
      {
        key: post._id + i,
        style: [
          styles.commentaryContainer,
          preview ? { width: 'auto', flex: 1 } : null,
          preview ? { marginHorizontal: 0, marginTop: 16 } : null
        ],
        __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 7 }
      },
      isReply && !preview
        ? _react.default.createElement(_uni.Divider, {
            __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 32 }
          })
        : null,
      _react.default.createElement(
        _uni.Box,
        {
          style: [styles.commentary],
          __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.View,
          {
            flex: 1,
            fdirection: 'row',
            m: '2 0 '.concat(preview ? 0 : 2, ' 0'),
            __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 11 }
          },
          isReply && !preview
            ? _react.default.createElement(_uni.Image, {
                h: 2,
                w: 2,
                mt: 1,
                mr: 1,
                resizeMode: 'contain',
                source: require('../../../../public/img/reply.png'),
                __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 15 }
              })
            : null,
          _react.default.createElement(
            _uni.Box,
            {
              style: { flex: 1 },
              __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 13 }
            },
            _react.default.createElement(_postInfo.default, {
              big: true,
              post: post,
              auth: auth,
              singlePost: singlePost,
              user: user,
              avatarText: avatarText,
              preview: preview,
              __source: { fileName: _jsxFileName, lineNumber: 79, columnNumber: 15 }
            }),
            _react.default.createElement(
              _uni.Box,
              {
                style: [
                  {
                    marginTop: preview && !post.link && !post.parentPost ? 0 : 8,
                    flex: 1,
                    justifyContent: 'center',
                    marginLeft: avatarText ? 6 * 8 : 0
                  }
                ],
                __source: { fileName: _jsxFileName, lineNumber: 88, columnNumber: 15 }
              },
              _react.default.createElement(_commentBody.default, {
                community: 'relevant',
                comment: post,
                preview: preview,
                inMainFeed: !singlePost && !preview,
                __source: { fileName: _jsxFileName, lineNumber: 98, columnNumber: 17 }
              })
            ),
            !hideButtons &&
              _react.default.createElement(
                _uni.Box,
                {
                  m: '2 0',
                  __source: { fileName: _jsxFileName, lineNumber: 106, columnNumber: 17 }
                },
                _react.default.createElement(_postButtons.default, {
                  horizontal: true,
                  post: post,
                  parentPost: post.parentPost ? post.parentPost : post,
                  comment: post,
                  link: link,
                  focusInput: focusInput,
                  singlePost: singlePost,
                  __source: { fileName: _jsxFileName, lineNumber: 107, columnNumber: 19 }
                })
              )
          )
        )
      )
    );
  };
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    scrollEnabled = _useState4[0],
    setScrollEnabled = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    scrollOffset = _useState6[0],
    setScrollOffset = _useState6[1];
  var _useState7 = (0, _react.useState)(10000),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    maxOffset = _useState8[0],
    setMaxOffset = _useState8[1];
  var scrollView = (0, _react.useRef)();
  var panRef = (0, _react.useRef)();
  var listRef = (0, _react.useRef)();
  var gesture = (0, _reactRedux.useSelector)(function(state) {
    return state.navigation.gesture;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var onScrollEnd = function onScrollEnd(e) {
    var contentOffset = e.nativeEvent.contentOffset;
    var viewSize = e.nativeEvent.layoutMeasurement;
    var pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentIndex(pageNum);
  };
  var handleGesture = function handleGesture(e) {
    var _e$nativeEvent = e.nativeEvent,
      translationX = _e$nativeEvent.translationX,
      state = _e$nativeEvent.state;
    if (gesture !== listRef && state === 2) {
      dispatch((0, _navigation.registerGesture)(listRef));
    }
    if (state === 2) return;
    var offset = translationX;
    var leftEnd = scrollOffset - offset <= 0 && offset > 0;
    var rightEnd = scrollOffset - offset >= maxOffset;
    var shouldDisableScroll = leftEnd || rightEnd;
    var shouldEnableScroll = !shouldDisableScroll || state === 5;
    shouldDisableScroll && scrollEnabled && setScrollEnabled(false);
    shouldEnableScroll && !scrollEnabled && setScrollEnabled(true);
  };
  var pills = _react.default.createElement(
    _uni.Box,
    {
      style: { marginVertical: 16 },
      __source: { fileName: _jsxFileName, lineNumber: 166, columnNumber: 5 }
    },
    _react.default.createElement(_pills.default, {
      currentIndex: currentIndex,
      slides: commentary.map(function(c, i) {
        return i + 1;
      }),
      scrollToPage: scrollToPage,
      __source: { fileName: _jsxFileName, lineNumber: 167, columnNumber: 7 }
    })
  );
  return _react.default.createElement(
    _uni.Box,
    {
      style: { marginBottom: !preview ? 16 : 0 },
      __source: { fileName: _jsxFileName, lineNumber: 177, columnNumber: 5 }
    },
    isReply && !preview
      ? _react.default.createElement(_uni.Divider, {
          m: '0 2',
          __source: { fileName: _jsxFileName, lineNumber: 178, columnNumber: 30 }
        })
      : null,
    _react.default.createElement(
      _discoverTabContext.TabViewContext.Consumer,
      { __source: { fileName: _jsxFileName, lineNumber: 179, columnNumber: 7 } },
      function(tabView) {
        return _react.default.createElement(
          _reactNavigationDrawer.DrawerGestureContext.Consumer,
          { __source: { fileName: _jsxFileName, lineNumber: 181, columnNumber: 11 } },
          function(drawer) {
            return _react.default.createElement(
              _reactNativeGestureHandler.PanGestureHandler,
              {
                enabled: commentary.length > 1,
                ref: panRef,
                activeOffsetX: [-5, 5],
                onHandlerStateChange: handleGesture,
                onGestureEvent: handleGesture,
                simultaneousHandlers: [drawer, tabView, listRef].filter(function(h) {
                  return h;
                }),
                __source: { fileName: _jsxFileName, lineNumber: 184, columnNumber: 17 }
              },
              _react.default.createElement(
                _reactNativeGestureHandler.NativeViewGestureHandler,
                {
                  enabled: commentary.length > 1 && scrollEnabled,
                  ref: listRef,
                  simultaneousHandlers: [drawer, tabView, panRef].filter(function(h) {
                    return h;
                  }),
                  __source: { fileName: _jsxFileName, lineNumber: 192, columnNumber: 19 }
                },
                _react.default.createElement(_reactNativeWeb.FlatList, {
                  style: { marginTop: !preview ? 16 : 0 },
                  ref: scrollView,
                  shouldActivateOnStart: false,
                  scrollEnabled: commentary.length > 1 && scrollEnabled,
                  scrollEventThrottle: 30,
                  scrollToOverflowEnabled: false,
                  alwaysBounceHorizontal: false,
                  bounces: false,
                  onScroll: function onScroll(e) {
                    var x = e.nativeEvent.contentOffset.x;
                    var length = e.nativeEvent.layoutMeasurement.width;
                    setScrollOffset(x);
                    setMaxOffset(length * (commentary.length - 1));
                  },
                  keyExtractor: function keyExtractor(item, index) {
                    return index.toString();
                  },
                  horizontal: !preview,
                  data: commentary,
                  renderItem: renderItem,
                  pagingEnabled: true,
                  contentContainerStyle: [!preview ? styles.postScroll : null],
                  showsHorizontalScrollIndicator: false,
                  onMomentumScrollEnd: onScrollEnd,
                  __source: { fileName: _jsxFileName, lineNumber: 198, columnNumber: 21 }
                })
              )
            );
          }
        );
      }
    ),
    commentary.length > 1 ? pills : null
  );
}
var localStyles = _reactNativeWeb.StyleSheet.create({
  commentaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: _global.fullWidth - _global.mainPadding * 2,
    marginHorizontal: _global.mainPadding
  },
  postScroll: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    marginLeft: 0,
    marginRight: 0
  },
  commentary: { flexGrow: 1, flexDirection: 'column' }
});
styles = _objectSpread(_objectSpread({}, localStyles), _global.globalStyles);
//# sourceMappingURL=commentary.component.js.map
