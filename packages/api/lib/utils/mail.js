'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.sendAdminAlert = sendAdminAlert;
exports.addUserToEmailList = addUserToEmailList;
exports.updateUserEmail = updateUserEmail;
exports.removeFromEmailList = removeFromEmailList;
exports.getMLUser = getMLUser;
exports.default = exports.sendEmail = exports.test = exports.mailgun = void 0;

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _htmlToText = _interopRequireDefault(require('html-to-text'));

var _mailgunJs = _interopRequireDefault(require('mailgun-js'));

var _mailerliteMailerlite = _interopRequireDefault(require('mailerlite-mailerlite'));

var _skipErrors = require('./skipErrors');

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

var { SYS_ADMIN_EMAIL, RELEVANT_ENV } = process.env;
var IS_PRODUCTION = RELEVANT_ENV === 'production';
var ML = new _mailerliteMailerlite.default(process.env.MAILER_LITE_KEY, 2);
var ML_CONST = 'Groups';
var TEST_ID = '69351596';
var REGISTERED_USERS = '11298808';
var NO_DIGEST = '11349218';
var LISTS = {
  general: {
    mailgun: IS_PRODUCTION ? 'currentUsers' : 'test',
    ml: IS_PRODUCTION ? REGISTERED_USERS : TEST_ID
  },
  nodigest: {
    mailgun: IS_PRODUCTION ? 'nodigest' : 'test',
    ml: IS_PRODUCTION ? NO_DIGEST : TEST_ID
  }
};
var dummyKey = 'XXXXXXXXXXXXXXXXXXXXXXX';
var mailgun = (0, _mailgunJs.default)({
  apiKey: process.env.MAILGUN_API_KEY || dummyKey,
  domain: process.env.MAILGUN_DOMAIN || dummyKey
});
exports.mailgun = mailgun;

var test = () => {
  var data = {
    from: 'Relevant <noreply@mail.relevant.community>',
    to: 'slava@4real.io',
    subject: 'Message from relevant',
    text: 'Test message from relevant!'
  };
  exports.send(data);
};

exports.test = test;

var sendEmail = data => {
  var text = _htmlToText.default.fromString(data.html);

  data = _objectSpread(
    _objectSpread({}, data),
    {},
    {
      text
    }
  ); // console.log('env ', process.env.NODE_ENV)

  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve();
  }

  return mailgun
    .messages()
    .send(data)
    .catch(err => {
      // console.log('mail error ', err);
      throw err;
    });
};

exports.sendEmail = sendEmail;

function sendAdminAlert(_x) {
  return _sendAdminAlert.apply(this, arguments);
}

function _sendAdminAlert() {
  _sendAdminAlert = (0, _asyncToGenerator2.default)(function*(err) {
    if (!SYS_ADMIN_EMAIL) return null;
    if ((0, _skipErrors.shouldSkip)(err.message)) return null;
    var data = {
      from: 'Relevant <info@relevant.community>',
      to: SYS_ADMIN_EMAIL,
      subject: 'Error: '.concat(err.message),
      html: '\n      message: '
        .concat(err.message, '\n      <br /><br />\n      stack:\n      <br />\n      ')
        .concat(err.stack, '\n      <br />\n      ')
    };
    return sendEmail(data);
  });
  return _sendAdminAlert.apply(this, arguments);
}

function addUserToEmailList(_x2, _x3) {
  return _addUserToEmailList.apply(this, arguments);
}

function _addUserToEmailList() {
  _addUserToEmailList = (0, _asyncToGenerator2.default)(function*(user, _list) {
    user = yield ensureEmail(user);
    var listParams = LISTS[_list || 'general'];

    try {
      yield ML[ML_CONST].addSubscriber(listParams.ml, user.email, {
        name: '@' + user.handle
      });
    } catch (err) {
      // console.log('mailer lite err', er);
    }

    try {
      var list = mailgun.lists(listParams.mailgun + '@mail.relevant.community');
      var u = mailgunUser(user);
      if (!u) return null;
      return yield handleRes(params => list.members().create(u, params));
    } catch (err) {
      return handleErr(err);
    }
  });
  return _addUserToEmailList.apply(this, arguments);
}

function updateUserEmail(_x4, _x5, _x6) {
  return _updateUserEmail.apply(this, arguments);
}

function _updateUserEmail() {
  _updateUserEmail = (0, _asyncToGenerator2.default)(function*(
    user,
    previousAddress,
    _list
  ) {
    user = yield ensureEmail(user);
    var listParams = LISTS[_list || 'general'];

    try {
      yield ML[ML_CONST].deleteSubscriber(listParams.ml, previousAddress);
      yield ML[ML_CONST].addSubscriber(listParams.ml, user.email, {
        name: '@' + user.handle
      });
    } catch (er) {
      // console.log('ml err', er);
    }

    try {
      var list = mailgun.lists(listParams.mailgun + '@mail.relevant.community');
      var u = mailgunUser(user);
      if (!u) return null;
      return yield handleRes(params => list.members(previousAddress).update(u, params));
    } catch (err) {
      return handleErr(err);
    }
  });
  return _updateUserEmail.apply(this, arguments);
}

function removeFromEmailList(_x7, _x8) {
  return _removeFromEmailList.apply(this, arguments);
}

function _removeFromEmailList() {
  _removeFromEmailList = (0, _asyncToGenerator2.default)(function*(user, _list) {
    user = yield ensureEmail(user);
    var listParams = LISTS[_list || 'general'];

    try {
      yield ML[ML_CONST].deleteSubscriber(listParams.ml, user.email);
    } catch (er) {
      // console.log('ml err', er);
    }

    try {
      var list = mailgun.lists(listParams.mailgun + '@mail.relevant.community');
      return yield handleRes(params => list.members(user.email).delete(params));
    } catch (err) {
      return handleErr(err);
    }
  });
  return _removeFromEmailList.apply(this, arguments);
}

function ensureEmail(_x9) {
  return _ensureEmail.apply(this, arguments);
}

function _ensureEmail() {
  _ensureEmail = (0, _asyncToGenerator2.default)(function*(user) {
    if (!user.email && user.ensureParam) return user.ensureParam('email');
    return user;
  });
  return _ensureEmail.apply(this, arguments);
}

function mailgunUser(user) {
  var email = user.email || user.twitterEmail;
  if (!email) return null;
  return {
    subscribed: true,
    address: email.trim(),
    name: '@' + user.handle
  };
}

function handleErr(err) {
  console.log(err); // eslint-disable-line

  sendAdminAlert(err);
  return null;
}

function handleRes(fn) {
  return new Promise((resolve, reject) =>
    fn((err, data) => {
      if (err) return reject(err);
      return resolve(data);
    })
  );
}

function getMLUser(_x10) {
  return _getMLUser.apply(this, arguments);
}

function _getMLUser() {
  _getMLUser = (0, _asyncToGenerator2.default)(function*(email) {
    return ML.Subscribers.getDetails(email);
  });
  return _getMLUser.apply(this, arguments);
}

var _default = {
  send: sendEmail
};
exports.default = _default;
//# sourceMappingURL=mail.js.map
