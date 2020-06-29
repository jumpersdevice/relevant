'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.handleEmailNotifications = handleEmailNotifications;

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var { sendEmail } = require('../utils/mail');

var inlineCss = require('inline-css');

var { notificationStyle } = require('../utils/emailStyle');

var User = require('../api/user/user.model');

var { getUrls } = require('./notificationHelper');

function handleEmailNotifications(_x) {
  return _handleEmailNotifications.apply(this, arguments);
}

function _handleEmailNotifications() {
  _handleEmailNotifications = (0, _asyncToGenerator2.default)(function*(params) {
    try {
      params.toUser = yield ensureUserEamil(params.toUser);
      if (!params.toUser) return null;
      if (!emailNotificationIsEnabled(params)) return null;
      var { html, subject } = yield getHtml(params);
      var data = {
        from: 'Relevant <info@relevant.community>',
        to: params.toUser.email,
        subject,
        html
      };
      return sendEmail(data);
    } catch (err) {
      return console.log(err); // eslint-disable-line
    }
  });
  return _handleEmailNotifications.apply(this, arguments);
}

function getHtml(_x2) {
  return _getHtml.apply(this, arguments);
}

function _getHtml() {
  _getHtml = (0, _asyncToGenerator2.default)(function*(params) {
    params.urls = getUrls(params);
    var { noteType } = params;

    switch (noteType) {
      case 'newPost':
        return getNewPostHtml(params);

      case 'reward':
        return getRewardHtml(params);

      default:
        return getDefaultEmailHtml(params);
    }
  });
  return _getHtml.apply(this, arguments);
}

function ensureUserEamil(_x3) {
  return _ensureUserEamil.apply(this, arguments);
}

function _ensureUserEamil() {
  _ensureUserEamil = (0, _asyncToGenerator2.default)(function*(user) {
    if (user.email && user.notificationSettings) return user;
    user = yield User.findOne(
      {
        _id: user._id
      },
      '+email'
    );
    if (!user.email) throw new Error('user is missing email');
    return user;
  });
  return _ensureUserEamil.apply(this, arguments);
}

function emailNotificationIsEnabled(_ref) {
  var { noteType, toUser } = _ref;
  var isPersonal =
    noteType === 'reward' || noteType === 'reply' || noteType === 'mention';

  if (isPersonal && toUser.notificationSettings.email.personal) {
    return true;
  }

  if (!isPersonal && toUser.notificationSettings.email.general) {
    return true;
  }

  return false;
}

function getDefaultEmailHtml(_x4) {
  return _getDefaultEmailHtml.apply(this, arguments);
}

function _getDefaultEmailHtml() {
  _getDefaultEmailHtml = (0, _asyncToGenerator2.default)(function*(_ref2) {
    var { urls, fromUser, post, toUser, action, noteType } = _ref2;
    var { userUrl, postUrl, settingsUrl } = urls;
    var noteHtml = fromUser
      ? '<a href="'
          .concat(userUrl, '">')
          .concat(fromUser.name, '</a> ')
          .concat(action)
      : action;
    var subject = fromUser ? ''.concat(fromUser.name, ' ').concat(action) : action;
    var isReplyOrMention = noteType === 'reply' || noteType === 'mention';
    var html = '\n    <br/>\n    '
      .concat(toUser.name, ', ')
      .concat(
        isReplyOrMention ? 'you have a new notification' : noteHtml,
        ':\n    <br />\n    <br />\n    <div class="post" />\n      '
      )
      .concat(
        isReplyOrMention ? '<div class="head">' + noteHtml + '</div>' : '',
        '\n      <a class="body" href="'
      )
      .concat(postUrl, '">\n        ')
      .concat(
        post.body || post.title,
        "\n      </a>\n    </div>\n    <br />\n    <br />\n    <p class='footer'>You can adjust your email notification settings <a href=\""
      )
      .concat(settingsUrl, '">here</a></p>\n    ');
    html = yield inlineCss(notificationStyle + html, {
      url: 'https://relevant.community'
    });
    return {
      html,
      subject
    };
  });
  return _getDefaultEmailHtml.apply(this, arguments);
}

function getNewPostHtml(_x5) {
  return _getNewPostHtml.apply(this, arguments);
}

function _getNewPostHtml() {
  _getNewPostHtml = (0, _asyncToGenerator2.default)(function*(_ref3) {
    var { urls, fromUser, toUser, action, community } = _ref3;
    var { userUrl, postUrl, settingsUrl } = urls;
    var fromHtml = '<a href="'.concat(userUrl, '">').concat(fromUser.name, '</a>');
    var postHtml = '<a href="'.concat(postUrl, '">post</a>');
    var noteHtml = 'there is a new '
      .concat(postHtml, ' from ')
      .concat(fromHtml, ' in the ')
      .concat(community, ' community');
    var subject = action;
    var html = '\n    <br/>\n    '
      .concat(toUser.name, ', ')
      .concat(
        noteHtml,
        "\n    <br />\n    <br />\n    <p class='footer'>You can adjust your email notification settings <a href=\""
      )
      .concat(settingsUrl, '">here</a></p>\n    ');
    html = yield inlineCss(notificationStyle + html, {
      url: 'https://relevant.community'
    });
    return {
      html,
      subject
    };
  });
  return _getNewPostHtml.apply(this, arguments);
}

function getRewardHtml(_x6) {
  return _getRewardHtml.apply(this, arguments);
}

function _getRewardHtml() {
  _getRewardHtml = (0, _asyncToGenerator2.default)(function*(_ref4) {
    var { urls, toUser, action } = _ref4;
    var { postUrl, settingsUrl } = urls;
    var walletUrl = ''.concat(process.env.API_SERVER, '/user/wallet');
    var postHtml = '<a href="'.concat(postUrl, '">post</a>');
    var noteHtml = action.toLowerCase().replace('post', postHtml);
    var subject = action;
    var html = '\n    <br/>\n    '
      .concat(toUser.name, ', ')
      .concat(
        noteHtml,
        '\n    <br />\n    <br />\n    You can see all of your earnings in your <a href="'
      )
      .concat(
        walletUrl,
        '">wallet</a>.\n    <br />\n    <br />\n    <p class=\'footer\'>You can adjust your email notification settings <a href="'
      )
      .concat(settingsUrl, '">here</a></p>\n    ');
    html = yield inlineCss(notificationStyle + html, {
      url: 'https://relevant.community'
    });
    return {
      html,
      subject
    };
  });
  return _getRewardHtml.apply(this, arguments);
}
//# sourceMappingURL=emailPushNotifications.js.map
