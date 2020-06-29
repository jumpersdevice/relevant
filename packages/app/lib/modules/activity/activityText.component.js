'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _triangle = _interopRequireDefault(require('../icons/triangle.component'));
var _uni = require('../styled/uni');
var _coinStat = _interopRequireDefault(require('../stats/coinStat.component'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/activity/activityText.component.js';
var ActivityText = function ActivityText(_ref) {
  var activity = _ref.activity,
    amount = _ref.amount;
  var action = 'increased';
  var also = 'also ';
  var triangleDirection = 'UP';
  if (amount < 0) {
    action = 'decreased';
    also = '';
    triangleDirection = 'DOWN';
  }
  var postType = 'comment';
  var coin = activity.coin;
  var text = null;
  switch (activity.type) {
    case 'upvote': {
      var relText = null;
      var arrow = null;
      if (amount > 0) {
        arrow = ' → ';
        relText = _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 }
          },
          'your reputation increased by ',
          _react.default.createElement(_triangle.default, {
            inline: 1,
            direction: triangleDirection,
            __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 13 }
          }),
          '\xA0',
          ''.concat(amount, '%')
        );
      }
      return [
        _react.default.createElement(
          _uni.BodyText,
          {
            key: 'action',
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 9 }
          },
          'upvoted your '.concat(postType)
        ),
        _react.default.createElement(
          _uni.BodyText,
          {
            key: 'arrow',
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 38, columnNumber: 9 }
          },
          arrow
        ),
        _react.default.createElement(
          _uni.BodyText,
          {
            key: 'result',
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 9 }
          },
          relText
        )
      ];
    }
    case 'upvoteParent':
      return _react.default.createElement(
        _uni.BodyText,
        {
          inline: 1,
          __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 14 }
        },
        'upvoted a link you shared'
      );
    case 'downvote':
      return _react.default.createElement(
        _uni.BodyText,
        {
          inline: 1,
          __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 9 }
        },
        'downvoted your '.concat(postType, ' \u2192 your reputation decreased by '),
        _react.default.createElement(_triangle.default, {
          inline: 1,
          direction: triangleDirection,
          __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 11 }
        }),
        ' '.concat(amount, '%')
      );
    case 'partialUpvote':
      return _react.default.createElement(
        _uni.Text,
        {
          inline: 1,
          __source: { fileName: _jsxFileName, lineNumber: 62, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 11 }
          },
          ''
            .concat(also, 'upvoted this ')
            .concat(postType, ' \u2192 your reputation ')
            .concat(action, ' by '),
          _react.default.createElement(_triangle.default, {
            inline: 1,
            direction: triangleDirection,
            __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 13 }
          }),
          ' '.concat(amount, '%')
        )
      );
    case 'partialDownvote':
      return _react.default.createElement(
        _uni.Text,
        {
          inline: 1,
          __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 }
          },
          ''
            .concat(also, 'downvoted this ')
            .concat(postType, ' \u2192 your reputation ')
            .concat(action, ' by '),
          _react.default.createElement(_triangle.default, {
            inline: 1,
            direction: triangleDirection,
            __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 13 }
          }),
          ' '.concat(amount, '%')
        )
      );
    case 'basicIncome':
      text = 'You got '
        .concat(coin, ' extra coin')
        .concat(activity.coin > 1 ? 's' : '', ' so you can upvote more posts!');
      break;
    case 'commentAlso':
    case 'postAlso':
      text = 'commented on a post';
      break;
    case 'comment':
      text = 'replied to your comment';
      break;
    case 'repost':
      text = 'reposted your post';
      break;
    case 'commentMention':
    case 'postMention':
    case 'mention':
      text = 'mentioned you in a '.concat(postType);
      break;
    case 'topPost':
      text = 'In case you missed this top-ranked post';
      break;
    case 'reward':
      return _react.default.createElement(
        _uni.Text,
        {
          inline: 1,
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 118, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 119, columnNumber: 11 }
          },
          'You earned '
        ),
        _react.default.createElement(_coinStat.default, {
          inline: true,
          size: 1.75,
          lh: 1.75,
          amount: Number(coin),
          mr: 0,
          ml: 0,
          slef: 'flex-end',
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 130, columnNumber: 11 }
          },
          ' coins from upvoting this post'
        )
      );
    case 'reward_twitter':
    case 'reward_email':
    case 'reward_reddit':
      var txt;
      if (activity.type === 'reward_twitter') txt = 'connecting your Twitter account';
      if (activity.type === 'reward_email') txt = 'verifying your email';
      if (activity.type === 'reward_reddit') txt = 'connecting your Reddit account';
      return _react.default.createElement(
        _uni.Text,
        {
          inline: 1,
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 144, columnNumber: 11 }
          },
          'You got '
        ),
        _react.default.createElement(_coinStat.default, {
          inline: true,
          size: 1.75,
          lh: 1.75,
          amount: Number(coin),
          mr: 0,
          ml: 0,
          slef: 'flex-end',
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 145, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 155, columnNumber: 11 }
          },
          ' coins for '.concat(txt)
        )
      );
    case 'reward_referral':
      return _react.default.createElement(
        _uni.Text,
        {
          inline: 1,
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 161, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 162, columnNumber: 11 }
          },
          'signed up via your referral link, you got '
        ),
        _react.default.createElement(_coinStat.default, {
          inline: true,
          size: 1.75,
          lh: 1.75,
          amount: Number(coin),
          mr: 0,
          ml: 0,
          slef: 'flex-end',
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 163, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 173, columnNumber: 11 }
          },
          ' coins for your referral'
        )
      );
    case 'reward_publicLink':
      return _react.default.createElement(
        _uni.Text,
        {
          inline: 1,
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 179, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 180, columnNumber: 11 }
          },
          'signed up via your public link, you got '
        ),
        _react.default.createElement(_coinStat.default, {
          inline: true,
          size: 1.75,
          lh: 1.75,
          amount: Number(coin),
          mr: 0,
          ml: 0,
          slef: 'flex-end',
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 181, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 191, columnNumber: 11 }
          },
          ' coins for your referral'
        )
      );
    case 'reward_referredBy':
      return _react.default.createElement(
        _uni.Text,
        {
          inline: 1,
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 197, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 198, columnNumber: 11 }
          },
          "gave you a referral, so you're getting started with an extra "
        ),
        _react.default.createElement(_coinStat.default, {
          inline: true,
          size: 1.75,
          lh: 1.75,
          amount: Number(coin),
          mr: 0,
          ml: 0,
          slef: 'flex-end',
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 201, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 211, columnNumber: 11 }
          },
          ' coins and some reputation!'
        )
      );
    case 'reward_publicInvite':
      return _react.default.createElement(
        _uni.Text,
        {
          inline: 1,
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 217, columnNumber: 9 }
        },
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 218, columnNumber: 11 }
          },
          "gave you a referral, so you're getting started with an extra "
        ),
        _react.default.createElement(_coinStat.default, {
          inline: true,
          size: 1.75,
          lh: 1.75,
          amount: Number(coin),
          mr: 0,
          ml: 0,
          slef: 'flex-end',
          align: 'baseline',
          __source: { fileName: _jsxFileName, lineNumber: 221, columnNumber: 11 }
        }),
        _react.default.createElement(
          _uni.BodyText,
          {
            inline: 1,
            __source: { fileName: _jsxFileName, lineNumber: 231, columnNumber: 11 }
          },
          ' coins.'
        )
      );
    default:
      if (activity.text) {
        text = activity.text;
      }
  }
  return _react.default.createElement(
    _uni.BodyText,
    {
      inline: 1,
      __source: { fileName: _jsxFileName, lineNumber: 240, columnNumber: 10 }
    },
    text
  );
};
ActivityText.propTypes = {
  activity: _propTypes.default.object,
  amount: _propTypes.default.oneOfType([
    _propTypes.default.number,
    _propTypes.default.string
  ])
};
var _default = ActivityText;
exports.default = _default;
//# sourceMappingURL=activityText.component.js.map
