'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
var _reactNativeWeb = require('react-native-web');
var _global = require('../../../styles/global');
var _utils = require('../../../utils');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/tooltip/mobile/tooltip.helper.js';
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
exports.data = {};
exports.text = {};
exports.tooltips = [
  'relevance',
  'coin',
  'topics',
  'subscriptions',
  'activity',
  'shareTip',
  'vote'
];
exports.data.default = {
  vertical: 'top',
  horizontal: 'right',
  horizontalOffset: 1,
  verticalOffset: 15
};
exports.data.relevance = {
  name: 'relevance',
  vertical: 'bottom',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 10
};
function renderRow(props, txt) {
  return _react.default.createElement(
    _reactNativeWeb.View,
    {
      key: txt,
      style: { flexDirection: 'row' },
      __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 5 }
    },
    _react.default.createElement(
      _reactNativeWeb.Text,
      {
        allowFontScaling: false,
        style: [props.style],
        __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 7 }
      },
      '\u2022'
    ),
    _react.default.createElement(
      _reactNativeWeb.Text,
      {
        allowFontScaling: false,
        style: [props.style, styles.ul],
        __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 7 }
      },
      txt
    )
  );
}
exports.text.relevance = function relevance(props) {
  if (!props.auth.user) return null;
  var data = [
    'Earn Reputation by posting comments.',
    'The higher your score, the more weight your votes have.'
  ];
  var dataEl = data.map(function(txt) {
    return renderRow(props, txt);
  });
  var user = props.auth.user;
  var rel = user.relevance ? user.relevance.pagerank || 0 : 0;
  return _react.default.createElement(
    _reactNativeWeb.View,
    { __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 5 } },
    _react.default.createElement(
      _reactNativeWeb.View,
      {
        style: [styles.textRow],
        __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 7 }
      },
      _react.default.createElement(
        _reactNativeWeb.Text,
        {
          allowFontScaling: false,
          style: [props.style, styles.title],
          __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 9 }
        },
        'This is your Reputation:',
        ' '
      ),
      _react.default.createElement(_reactNativeWeb.Image, {
        resizeMode: 'contain',
        style: [styles.r, { width: 19, height: 16, marginBottom: 1 }],
        source: require('../../../../public/img/rWhite.png'),
        __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 9 }
      }),
      _react.default.createElement(
        _reactNativeWeb.Text,
        {
          allowFontScaling: false,
          style: [
            styles.bebas,
            props.style,
            _reactNativeWeb.Platform.OS === 'android' ? { marginBottom: 0 } : null,
            styles.title
          ],
          __source: { fileName: _jsxFileName, lineNumber: 75, columnNumber: 9 }
        },
        _utils.numbers.abbreviateNumber(rel)
      )
    ),
    _react.default.createElement(
      _reactNativeWeb.View,
      {
        style: styles.ulParent,
        __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 7 }
      },
      dataEl
    )
  );
};
exports.data.coin = {
  name: 'coin',
  vertical: 'bottom',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 10
};
exports.text.coin = function coin(props) {
  if (!props.auth.user) return null;
  var data = [
    'Get coins by upvoting quality links. ',
    "The more coins you have, the more rewards you'll be able to earn"
  ];
  var dataEl = data.map(function(txt) {
    return renderRow(props, txt);
  });
  return _react.default.createElement(
    _reactNativeWeb.View,
    { __source: { fileName: _jsxFileName, lineNumber: 111, columnNumber: 5 } },
    _react.default.createElement(
      _reactNativeWeb.View,
      {
        allowFontScaling: false,
        style: [styles.textRow],
        __source: { fileName: _jsxFileName, lineNumber: 112, columnNumber: 7 }
      },
      _react.default.createElement(
        _reactNativeWeb.Text,
        {
          style: [props.style, styles.title],
          __source: { fileName: _jsxFileName, lineNumber: 113, columnNumber: 9 }
        },
        'These are your coins: '
      ),
      _react.default.createElement(_reactNativeWeb.Image, {
        resizeMode: 'contain',
        style: [styles.r, { width: 20, height: 18, marginBottom: 1 }],
        source: require('../../../../public/img/relevantcoin.png'),
        __source: { fileName: _jsxFileName, lineNumber: 114, columnNumber: 9 }
      }),
      _react.default.createElement(
        _reactNativeWeb.Text,
        {
          allowFontScaling: false,
          style: [
            styles.bebas,
            props.style,
            _reactNativeWeb.Platform.OS === 'android' ? { marginBottom: 0 } : null,
            styles.title
          ],
          __source: { fileName: _jsxFileName, lineNumber: 119, columnNumber: 9 }
        },
        _utils.numbers.abbreviateNumber(
          props.auth.user.balance + props.auth.user.tokenBalance
        )
      )
    ),
    _react.default.createElement(
      _reactNativeWeb.View,
      {
        style: styles.ulParent,
        __source: { fileName: _jsxFileName, lineNumber: 133, columnNumber: 7 }
      },
      dataEl
    )
  );
};
exports.data.topics = {
  name: 'topics',
  vertical: 'bottom',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 10
};
exports.text.topics = function topics(props) {
  if (!props.auth.user) return null;
  return _react.default.createElement(
    _reactNativeWeb.Text,
    {
      style: [props.style, { textAlign: 'center' }],
      __source: { fileName: _jsxFileName, lineNumber: 149, columnNumber: 5 }
    },
    'Press on Discover to toggle specific topics'
  );
};
exports.data.subscriptions = {
  name: 'subscriptions',
  vertical: 'bottom',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 10
};
exports.text.subscriptions = function subscription(props) {
  if (!props.auth.user) return null;
  return _react.default.createElement(
    _reactNativeWeb.Text,
    {
      allowFontScaling: false,
      style: [props.style, { textAlign: 'center' }],
      __source: { fileName: _jsxFileName, lineNumber: 166, columnNumber: 5 }
    },
    'When you upvote a post, you subscribe to the next 3 posts from the author'
  );
};
exports.data.vote = {
  name: 'vote',
  vertical: 'top',
  horizontal: 'right',
  horizontalOffset: 1,
  verticalOffset: 15
};
exports.text.vote = function vote(props) {
  if (!props.auth.user) return null;
  var data = [
    'Upvote articles and that are worth reading, downvote spam.',
    "Voters will earn coins based on the article's ranking after 3 days"
  ];
  var dataEl = data.map(function(txt) {
    return renderRow(props, txt);
  });
  return _react.default.createElement(
    _reactNativeWeb.View,
    { __source: { fileName: _jsxFileName, lineNumber: 191, columnNumber: 5 } },
    _react.default.createElement(
      _reactNativeWeb.Text,
      {
        allowFontScaling: false,
        style: [props.style, styles.title],
        __source: { fileName: _jsxFileName, lineNumber: 192, columnNumber: 7 }
      },
      'Was it worth reading?'
    ),
    _react.default.createElement(
      _reactNativeWeb.View,
      {
        style: styles.ulParent,
        __source: { fileName: _jsxFileName, lineNumber: 195, columnNumber: 7 }
      },
      dataEl
    )
  );
};
exports.data.activity = {
  name: 'activity',
  vertical: 'top',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 0
};
exports.text.activity = function activity(props) {
  if (!props.auth.user) return null;
  var data = [
    'When others upvote your posts your Relevance goes up',
    'You earn more Relevance from users that are more Relevant than you'
  ];
  if (props.type && props.type.match('partial')) {
    data = [
      'You earn Relevance when you are one of the first to upvote a quality article',
      'For best results find new posts no one upvoted yet'
    ];
  }
  var dataEl = data.map(function(txt) {
    return renderRow(props, txt);
  });
  return _react.default.createElement(
    _reactNativeWeb.View,
    { __source: { fileName: _jsxFileName, lineNumber: 226, columnNumber: 5 } },
    _react.default.createElement(
      _reactNativeWeb.Text,
      {
        allowFontScaling: false,
        style: [props.style, styles.title],
        __source: { fileName: _jsxFileName, lineNumber: 227, columnNumber: 7 }
      },
      'Relevance'
    ),
    _react.default.createElement(
      _reactNativeWeb.View,
      {
        style: styles.ulParent,
        __source: { fileName: _jsxFileName, lineNumber: 230, columnNumber: 7 }
      },
      dataEl
    )
  );
};
exports.data.shareTip = {
  name: 'shareTip',
  vertical: 'top',
  horizontal: 'right',
  horizontalOffset: 0,
  verticalOffset: 4,
  noButton: true
};
exports.text.shareTip = function shareTip() {
  var width = _global.fullWidth / 2.4;
  var Video = require('react-native-video').default;
  return _react.default.createElement(
    _reactNativeWeb.View,
    {
      style: styles.videoTip,
      __source: { fileName: _jsxFileName, lineNumber: 248, columnNumber: 5 }
    },
    _react.default.createElement(
      _reactNativeWeb.View,
      {
        style: { flex: 1 },
        __source: { fileName: _jsxFileName, lineNumber: 249, columnNumber: 7 }
      },
      _react.default.createElement(
        _reactNativeWeb.View,
        {
          style: styles.ol,
          __source: { fileName: _jsxFileName, lineNumber: 250, columnNumber: 9 }
        },
        _react.default.createElement(
          _reactNativeWeb.Text,
          {
            allowFontScaling: false,
            style: [styles.textP, { fontWeight: 'bold', fontSize: 14 }],
            __source: { fileName: _jsxFileName, lineNumber: 251, columnNumber: 11 }
          },
          'Enable posting from Chrome, Safari and other apps:'
        )
      ),
      _react.default.createElement(
        _reactNativeWeb.View,
        {
          style: styles.ol,
          __source: { fileName: _jsxFileName, lineNumber: 258, columnNumber: 9 }
        },
        _react.default.createElement(
          _reactNativeWeb.Text,
          {
            allowFontScaling: false,
            style: styles.textP,
            __source: { fileName: _jsxFileName, lineNumber: 259, columnNumber: 11 }
          },
          '1',
          ' '
        ),
        _react.default.createElement(
          _reactNativeWeb.Text,
          {
            allowFontScaling: false,
            style: styles.textP,
            __source: { fileName: _jsxFileName, lineNumber: 262, columnNumber: 11 }
          },
          'Tap on share icon'
        )
      ),
      _react.default.createElement(
        _reactNativeWeb.View,
        {
          style: styles.ol,
          __source: { fileName: _jsxFileName, lineNumber: 267, columnNumber: 9 }
        },
        _react.default.createElement(
          _reactNativeWeb.Text,
          {
            allowFontScaling: false,
            style: styles.textP,
            __source: { fileName: _jsxFileName, lineNumber: 268, columnNumber: 11 }
          },
          '2',
          ' '
        ),
        _react.default.createElement(
          _reactNativeWeb.Text,
          {
            allowFontScaling: false,
            style: styles.textP,
            __source: { fileName: _jsxFileName, lineNumber: 271, columnNumber: 11 }
          },
          "Tap on 'More'"
        )
      ),
      _react.default.createElement(
        _reactNativeWeb.View,
        {
          style: styles.ol,
          __source: { fileName: _jsxFileName, lineNumber: 276, columnNumber: 9 }
        },
        _react.default.createElement(
          _reactNativeWeb.Text,
          {
            allowFontScaling: false,
            style: styles.textP,
            __source: { fileName: _jsxFileName, lineNumber: 277, columnNumber: 11 }
          },
          '3',
          ' '
        ),
        _react.default.createElement(
          _reactNativeWeb.Text,
          {
            allowFontScaling: false,
            style: styles.textP,
            __source: { fileName: _jsxFileName, lineNumber: 280, columnNumber: 11 }
          },
          'Find and toggle Relevant app'
        )
      ),
      _react.default.createElement(
        _reactNativeWeb.View,
        {
          style: styles.ol,
          __source: { fileName: _jsxFileName, lineNumber: 285, columnNumber: 9 }
        },
        _react.default.createElement(
          _reactNativeWeb.Text,
          {
            allowFontScaling: false,
            style: styles.textP,
            __source: { fileName: _jsxFileName, lineNumber: 286, columnNumber: 11 }
          },
          '4',
          ' '
        ),
        _react.default.createElement(
          _reactNativeWeb.Text,
          {
            allowFontScaling: false,
            style: styles.textP,
            __source: { fileName: _jsxFileName, lineNumber: 289, columnNumber: 11 }
          },
          'Rearrange Relevant icon as you like'
        )
      )
    ),
    _react.default.createElement(
      _reactNativeWeb.View,
      {
        style: { flex: 0, width: width, height: width + 40, overflow: 'hidden' },
        __source: { fileName: _jsxFileName, lineNumber: 294, columnNumber: 7 }
      },
      _react.default.createElement(Video, {
        resizeMode: 'contain',
        source: require('../../../../public/img/shareTip.mp4'),
        style: {
          width: width,
          height: (width * 16) / 9,
          bottom: 0,
          position: 'absolute'
        },
        repeat: true,
        __source: { fileName: _jsxFileName, lineNumber: 295, columnNumber: 9 }
      })
    )
  );
};
var localStyles = _reactNativeWeb.StyleSheet.create({
  ol: { flexDirection: 'row', paddingRight: 15 },
  tooltipText: { fontSize: 15 },
  title: { fontSize: 20, lineHeight: 22, fontWeight: 'bold' },
  textP: { fontSize: 12, flex: 0, marginBottom: 10, color: 'white' },
  videoTip: { flexDirection: 'row', alignItems: 'center' },
  ul: { flex: 1, paddingLeft: 10, marginBottom: 10 },
  ulParent: { flexDirection: 'column', marginTop: 20 }
});
styles = _objectSpread(_objectSpread({}, _global.globalStyles), localStyles);
//# sourceMappingURL=tooltip.helper.js.map
