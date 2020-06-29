'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserName = UserName;
exports.default = exports.Name = void 0;
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactRedux = require('react-redux');
var _styles = require('../../styles');
var _rStat = _interopRequireDefault(require('../stats/rStat.component'));
var _ULink = _interopRequireDefault(require('../navigation/ULink.component'));
var _UAvatar = _interopRequireDefault(require('./UAvatar.component'));
var _numbers = require('../../utils/numbers');
var _primitives = _interopRequireDefault(require('styled-components/primitives'));
var _uni = require('../styled/uni');
var _sizing = _interopRequireDefault(require('../../styles/sizing'));
var _navigation = require('../navigation/navigation.actions');
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/user/avatarbox.component.js';
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
var Name = (0, _primitives.default)(_uni.BodyText).withConfig({
  displayName: 'avatarboxcomponent__Name',
  componentId: 'sc-116xds-0'
})(['']);
exports.Name = Name;
var _default = (0, _react.memo)(AvatarBox);
exports.default = _default;
AvatarBox.propTypes = {
  noLink: _propTypes.default.bool,
  avatarText: _propTypes.default.func,
  twitter: _propTypes.default.bool,
  type: _propTypes.default.string,
  user: _propTypes.default.object,
  size: _propTypes.default.number,
  showRelevance: _propTypes.default.bool,
  repost: _propTypes.default.bool,
  postTime: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.object
  ]),
  setSelected: _propTypes.default.func,
  navigationCallback: _propTypes.default.func,
  vertical: _propTypes.default.bool
};
function AvatarBox(props) {
  var user = props.user,
    showRelevance = props.showRelevance,
    type = props.type,
    setSelected = props.setSelected,
    size = props.size,
    postTime = props.postTime,
    repost = props.repost,
    twitter = props.twitter,
    avatarText = props.avatarText,
    noLink = props.noLink,
    navigationCallback = props.navigationCallback,
    vertical = props.vertical;
  var dispatch = (0, _reactRedux.useDispatch)();
  if (!user) return null;
  var handle = user.handle;
  if (type !== 'invite' && handle) handle = '@'.concat(handle);
  var timestamp;
  if (postTime) {
    timestamp = ' • ' + (0, _numbers.getTimestamp)(postTime);
  }
  var handleEl =
    handle &&
    !vertical &&
    _react.default.createElement(
      _uni.SecondaryText,
      { mt: 0.25, __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 5 } },
      handle,
      ' ',
      timestamp
    );
  var repostIcon =
    repost &&
    _react.default.createElement(_uni.Image, {
      resizeMode: 'contain',
      source: require('../../../public/img/reposted.png'),
      w: 2,
      h: 2,
      mr: 0.2,
      mb: 2,
      __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 5 }
    });
  var twitterIcon =
    twitter &&
    _react.default.createElement(_uni.Image, {
      inline: true,
      resizeMode: 'contain',
      w: 2.5,
      h: 1.5,
      ml: 0.5,
      mb: -0.1,
      source: require('../../../public/img/icons/twitter_blue.png'),
      __source: { fileName: _jsxFileName, lineNumber: 78, columnNumber: 5 }
    });
  var showRel =
    user.relevance && !!user.relevance.pagerank && showRelevance && !avatarText;
  return _react.default.createElement(
    _uni.Box,
    { __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 5 } },
    _react.default.createElement(
      _ULink.default,
      {
        noLink: noLink,
        to: '/user/profile/'.concat(user.handle),
        onPress: function onPress() {
          setSelected ? setSelected(user) : dispatch((0, _navigation.goToProfile)(user));
          navigationCallback && navigationCallback();
        },
        onClick: function onClick() {
          return navigationCallback && navigationCallback();
        },
        __source: { fileName: _jsxFileName, lineNumber: 94, columnNumber: 7 }
      },
      _react.default.createElement(
        _uni.View,
        {
          fdirection: vertical ? 'column' : 'row',
          __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 9 }
        },
        _react.default.createElement(_UAvatar.default, {
          size: size,
          user: user,
          noLink: true,
          __source: { fileName: _jsxFileName, lineNumber: 104, columnNumber: 11 }
        }),
        repostIcon,
        _react.default.createElement(
          _uni.View,
          {
            ml: vertical ? 0 : avatarText ? 1.5 : 1,
            align: vertical ? 'center' : 'flex-start',
            __source: { fileName: _jsxFileName, lineNumber: 106, columnNumber: 11 }
          },
          _react.default.createElement(
            _uni.Text,
            {
              inline: 1,
              __source: { fileName: _jsxFileName, lineNumber: 110, columnNumber: 13 }
            },
            _react.default.createElement(UserName, {
              user: user,
              showRel: showRel,
              twitterIcon: twitterIcon,
              __source: { fileName: _jsxFileName, lineNumber: 111, columnNumber: 15 }
            }),
            avatarText
              ? _react.default.createElement(
                  _uni.Text,
                  {
                    c: _styles.colors.black,
                    inline: 1,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 17
                    }
                  },
                  avatarText()
                )
              : null
          ),
          handleEl
        )
      )
    )
  );
}
UserName.propTypes = {
  user: _propTypes.default.object,
  twitterIcon: _propTypes.default.node,
  showRel: _propTypes.default.bool
};
function UserName(_ref) {
  var user = _ref.user,
    showRel = _ref.showRel,
    twitterIcon = _ref.twitterIcon;
  var elipses = _styles.isNative
    ? {}
    : { maxWidth: (0, _sizing.default)(12), whiteSpace: 'nowrap' };
  return _react.default.createElement(
    _react.Fragment,
    { __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 5 } },
    _react.default.createElement(
      Name,
      {
        numberOfLines: 1,
        style: _objectSpread({ overflow: 'hidden' }, elipses),
        inline: 1,
        c: _styles.colors.black,
        __source: { fileName: _jsxFileName, lineNumber: 144, columnNumber: 7 }
      },
      user.name,
      twitterIcon
    ),
    showRel &&
      _react.default.createElement(
        _uni.Text,
        {
          inline: 1,
          __source: { fileName: _jsxFileName, lineNumber: 157, columnNumber: 9 }
        },
        ' ',
        _react.default.createElement(_rStat.default, {
          inline: 1,
          align: 'baseline',
          lh: 1.75,
          size: 1.75,
          user: user,
          __source: { fileName: _jsxFileName, lineNumber: 159, columnNumber: 11 }
        })
      )
  );
}
//# sourceMappingURL=avatarbox.component.js.map
