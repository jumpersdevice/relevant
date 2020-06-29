'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Component;
var _react = _interopRequireDefault(require('react'));
var _jsxFileName =
  '/Users/slavab/local/relevant/packages/app/src/modules/admin/web/faq.component.js';
var styles;
function Component() {
  return _react.default.createElement(
    'container',
    {
      className: 'main',
      __source: { fileName: _jsxFileName, lineNumber: 7, columnNumber: 5 }
    },
    _react.default.createElement(
      'container',
      {
        style: styles.faq,
        __source: { fileName: _jsxFileName, lineNumber: 8, columnNumber: 7 }
      },
      _react.default.createElement(
        'h1',
        { __source: { fileName: _jsxFileName, lineNumber: 9, columnNumber: 9 } },
        'FAQ'
      ),
      _react.default.createElement(
        'h3',
        { __source: { fileName: _jsxFileName, lineNumber: 11, columnNumber: 9 } },
        'What is Relevant?'
      ),
      _react.default.createElement(
        'p',
        {
          style: styles.p,
          __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 9 }
        },
        'Relevant is a community-based network for building trust, curating content and earning rewards. Learn more',
        ' ',
        _react.default.createElement(
          'a',
          {
            target: '_blank',
            href: 'https://blog.relevant.community',
            __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 11 }
          },
          'here'
        ),
        '.'
      ),
      _react.default.createElement(
        'h3',
        { __source: { fileName: _jsxFileName, lineNumber: 21, columnNumber: 9 } },
        'How is Relevant different from other social platforms?'
      ),
      _react.default.createElement(
        'p',
        {
          style: styles.p,
          __source: { fileName: _jsxFileName, lineNumber: 22, columnNumber: 9 }
        },
        'Unlike networks that rely on ad money and opaque algorithms, Relevant uses a reputation system that enables users to earn rewards for curating community-specific feeds. Instead of ranking content according to clicks, trusted community members decide which posts have the most value. Plus, curation rewards can be exchanged for tokens on the Ethereum network (REL) that represent ownership in the platform.'
      ),
      _react.default.createElement(
        'h3',
        { __source: { fileName: _jsxFileName, lineNumber: 31, columnNumber: 9 } },
        'What is a Relevant community?'
      ),
      _react.default.createElement(
        'p',
        {
          style: styles.p,
          __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 9 }
        },
        'Each Relevant community is similar to a subreddit. Users can upvote, downvote, and discuss links, only instead of using the number of upvotes to rank posts, we look at who upvoted posts to determine their value. That\u2019s why on Relevant, one upvote from a trusted user is worth a lot more than a million votes from bot accounts.'
      ),
      _react.default.createElement(
        'h3',
        { __source: { fileName: _jsxFileName, lineNumber: 40, columnNumber: 9 } },
        'How do I join a community?'
      ),
      _react.default.createElement(
        'p',
        {
          style: styles.p,
          __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 9 }
        },
        'You can join a community by making posts, commenting on links or voting on content in a community thread. You will have a seperate Reputation score for each community you become a member of.'
      ),
      _react.default.createElement(
        'h3',
        { __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 9 } },
        'What is Reputation?'
      ),
      _react.default.createElement(
        'p',
        {
          style: styles.p,
          __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 9 }
        },
        'Reputation is a metric for measuring quality and trust on the Relevant network.'
      ),
      _react.default.createElement(
        'div',
        {
          style: styles.subsection,
          __source: { fileName: _jsxFileName, lineNumber: 51, columnNumber: 9 }
        },
        _react.default.createElement(
          'h4',
          {
            style: styles.h4,
            __source: { fileName: _jsxFileName, lineNumber: 52, columnNumber: 11 }
          },
          'User Reputation'
        ),
        _react.default.createElement(
          'p',
          {
            style: styles.p,
            __source: { fileName: _jsxFileName, lineNumber: 53, columnNumber: 11 }
          },
          'Each user has a Reputation score. You earn Reputation when reputable community members upvote your comments. The higher your Reputation, the more impact your votes have. Reputation scores are community-specific and non-transferrable.'
        ),
        _react.default.createElement(
          'h4',
          {
            style: styles.h4,
            __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 11 }
          },
          'Comment Reputation'
        ),
        _react.default.createElement(
          'p',
          {
            style: styles.p,
            __source: { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }
          },
          'Comments are ranked according to their Reputation score. Comment Reputation comes from upvotes and downvotes.'
        ),
        _react.default.createElement(
          'h4',
          {
            style: styles.h4,
            __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 11 }
          },
          'Link Ranking'
        ),
        _react.default.createElement(
          'p',
          {
            style: styles.p,
            __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 11 }
          },
          'Like comments, links are ranked according to the Reputation of the users who upvote them. Users do not earn Reputation from upvoting links.'
        )
      ),
      _react.default.createElement(
        'h3',
        { __source: { fileName: _jsxFileName, lineNumber: 72, columnNumber: 9 } },
        'How do I get coins?'
      ),
      _react.default.createElement(
        'p',
        {
          style: styles.p,
          __source: { fileName: _jsxFileName, lineNumber: 73, columnNumber: 9 }
        },
        'Earn coins by upvoting quality posts. You have 3 days to upvote a post after it goes live. If that post is upvoted by users with high-Reputation scores, you\u2019ll earn rewards. You don\u2019t earn coins from posting content, only from upvoting. You can also earn coins by [inviting friends] to join Relevant.'
      ),
      _react.default.createElement(
        'h3',
        { __source: { fileName: _jsxFileName, lineNumber: 80, columnNumber: 9 } },
        'On IOS, how do you I share an article directly from Chrome, Safari or another app?'
      ),
      _react.default.createElement(
        'ul',
        { __source: { fileName: _jsxFileName, lineNumber: 84, columnNumber: 9 } },
        _react.default.createElement(
          'li',
          { __source: { fileName: _jsxFileName, lineNumber: 85, columnNumber: 11 } },
          'Press on the share icon',
          ' ',
          _react.default.createElement('img', {
            alt: 'share icon',
            style: styles.smallImg,
            src: '/img/faq/shareIcon.jpg',
            __source: { fileName: _jsxFileName, lineNumber: 87, columnNumber: 13 }
          })
        ),
        _react.default.createElement(
          'li',
          { __source: { fileName: _jsxFileName, lineNumber: 93, columnNumber: 11 } },
          'Press "More" button',
          ' ',
          _react.default.createElement('img', {
            alt: 'share menu',
            style: styles.bigImg,
            src: '/img/faq/share.jpg',
            __source: { fileName: _jsxFileName, lineNumber: 95, columnNumber: 13 }
          })
        ),
        _react.default.createElement(
          'li',
          { __source: { fileName: _jsxFileName, lineNumber: 97, columnNumber: 11 } },
          'Toggle on Relevant app',
          ' ',
          _react.default.createElement('img', {
            alt: 'share toggle',
            style: styles.bigImg,
            src: '/img/faq/toggle.jpg',
            __source: { fileName: _jsxFileName, lineNumber: 99, columnNumber: 13 }
          })
        ),
        _react.default.createElement(
          'li',
          { __source: { fileName: _jsxFileName, lineNumber: 101, columnNumber: 11 } },
          'Press on Relevant icon',
          ' ',
          _react.default.createElement('img', {
            alt: 'share button',
            style: styles.bigImg,
            src: '/img/faq/shareRelevant.jpg',
            __source: { fileName: _jsxFileName, lineNumber: 103, columnNumber: 13 }
          })
        )
      ),
      _react.default.createElement(
        'p',
        {
          style: styles.p,
          __source: { fileName: _jsxFileName, lineNumber: 128, columnNumber: 9 }
        },
        'Got more questions?',
        ' ',
        _react.default.createElement(
          'a',
          {
            href: 'mailto:info@relevant.community',
            target: '_blank',
            __source: { fileName: _jsxFileName, lineNumber: 130, columnNumber: 11 }
          },
          'Email Us'
        )
      )
    )
  );
}
styles = {
  faq: { maxWidth: '800px', margin: 'auto', marginBottom: '40px' },
  subsection: { paddingLeft: '16px' },
  h4: { marginVertical: '5px' },
  p: { marginTop: '0px', marginLeft: '0px' },
  bigImg: { width: '300px', display: 'block', margin: '10px 0', maxWidth: '100%' },
  smallImg: { verticalAlign: 'middle', width: '30px', hegiht: 'auto', maxWidth: '100%' }
};
//# sourceMappingURL=faq.component.js.map
