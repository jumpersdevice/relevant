'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _list = _interopRequireDefault(require('../emailList/list.model'));

var _mail = require('../../utils/mail');

var _email = _interopRequireDefault(require('./email.model'));

var _invite = _interopRequireDefault(require('../invites/invite.model'));

var _user = _interopRequireDefault(require('../user/user.model'));

var inlineCss = require('inline-css');

var { emailStyle } = require('../../utils/emailStyle'); // const unsub = [
//   'jasonfeifer@gmail.com',
//   'nikitanaggarwal@gmail.com',
//   'samseurynck@gmail.com',
//   'adrianzorz@gmail.com',
//   'disinfeqt@gmail.com',
//   'mattf96@gmail.com'
// ];
// async function removeUnsubscribed() {
//   await Invite.find({ email: { $in: unsub } }).remove();
// }

/* eslint no-console: 0 */
// eslint-disable-next-line

function generateList(_x) {
  return _generateList.apply(this, arguments);
} // generateList('nodigest');
// generateList('currentUsers');
// generateList('notregistered');
// generateList('waitlist');
// mailgun.lists().create({
//   address: 'test1@mail.relevant.community',
//   name: 'test1',
//   description: 'Users that have invites but have not registered',
// });
// let list = mailgun.lists('test@mail.relevant.community');
// let slava = {
//   subscribed: true,
//   address: 'byslava@gmail.com',
//   name: 'Slava',
//   vars: { code: 'xyDFz' },
// };
// list.members().create(slava, err => {
//   if (err) throw err;
// });
// let analisa = {
//   subscribed: 'true',
//   address: 'analisa@4real.io',
//   name: 'Analisa',
//   vars: { code: 'fsdflkj' },
// };
// list.members('byslava@gmail.com').update(slava, function (err, data) {
//   // `data` is the member details
//   console.log(data);
//   console.log(err);
// });
// list.members('analisa@4real.io').update(analisa, function (err, data) {
//   // `data` is the member details
//   console.log(data);
//   console.log(err);
// });
// list.members().list(function (err, members) {
//   // `members` is the list of members
//   console.log(members);
// });
// list.members('byslava@gmail.com').delete(function (err, body) {
//   console.log(body);
// });
//
// need this?

function _generateList() {
  _generateList = (0, _asyncToGenerator2.default)(function*(type) {
    try {
      var query;
      var users;

      if (type === 'notregistered') {
        var now = new Date(); // now.setDate(now.getDate() - 5);

        query = {
          status: 'email sent',
          createdAt: {
            $lt: now
          }
        };
        users = yield _invite.default.find(query); // const now = new Date();
        // now.setDate(now.getDate() - 5);

        query = {
          status: {
            $exists: false
          }
        };
        var waitlist = yield _list.default.find(query);
        users = [...users, ...waitlist];
      } else if (type === 'currentUsers') {
        var _now = new Date(); // now.setDate(now.getDate() - 5);

        query = {
          createdAt: {
            $lt: _now
          }
        };
        users = yield _user.default.find(
          query,
          'email code twitterEmail twitter handle name'
        );
      } else if (type === 'waitlist') {
        // const now = new Date();
        // now.setDate(now.getDate() - 5);
        query = {
          status: {
            $exists: false
          }
        };
        users = yield _list.default.find(query);
      } else if (type === 'nodigest') {
        // const now = new Date();
        // now.setDate(now.getDate() - 5);
        query = {
          'notificationSettings.email.digest': false
        };
        users = yield _user.default.find(
          query,
          'email code twitterEmail twitter handle name'
        );
        console.log('nodigest', users.length);
      }

      var list = _mail.mailgun.lists(type + '@mail.relevant.community');

      users.forEach(
        /*#__PURE__*/ (function() {
          var _ref4 = (0, _asyncToGenerator2.default)(function*(user) {
            var vars = {};

            if (type === 'notregistered') {
              vars = {
                code: user.code
              };
            } // if (!user.email && !user.twitterEmail) console.log(user.toObject());

            if (type === 'notregistered' || type === 'waitlist') {
              var remove = yield _user.default.findOne({
                $or: [
                  {
                    email: user.email
                  },
                  {
                    twitterEmail: user.email
                  }
                ]
              });

              if (type === 'waitlist') {
                remove =
                  (yield _invite.default.findOne({
                    email: user.email,
                    status: 'email sent'
                  })) || remove;
              }

              if (remove) {
                console.log('remove', user.email);
                list.members(user.email).delete();
                return;
              }
            } // return;

            var u = {
              subscribed: true,
              address: user.email || user.twitterEmail,
              name:
                type === 'notregistered' || type === 'waitlist'
                  ? user.name
                  : '@' + user.handle,
              vars
            };

            if (u.address) {
              u.address = u.address.trim();
            }

            console.log('handle', user.handle, u.name, u.address);
            if (!u.address) return;
            list.members().create(u, err => {
              if (err) {
                try {
                  list.members(u.address).update(u, console.log);
                } catch (error) {
                  console.log('err updating', u);
                }
              } // console.log
            });
          });

          return function(_x11) {
            return _ref4.apply(this, arguments);
          };
        })()
      );
    } catch (err) {
      console.log(err); // throw err;
    }
  });
  return _generateList.apply(this, arguments);
}

exports.validate = function validate(req, res, next) {
  var { body } = req;

  if (!_mail.mailgun.validateWebhook(body.timestamp, body.token, body.signature)) {
    res.send({
      error: {
        message: 'Invalid signature. Are you even Mailgun?'
      }
    });
    return;
  }

  next();
};

exports.index = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { email } = req.body;
      var html = emailStyle + req.body.html;
      html = yield inlineCss(html, {
        url: 'https://relevant.community'
      });
      if (!email) throw new Error('no email');
      if (!html) throw new Error('no html');
      var data = {
        'o:tag': [req.body.campaign],
        from: 'Relevant <info@relevant.community>',
        to: req.body.email,
        subject: req.body.subject,
        html
      };
      var status = yield (0, _mail.sendEmail)(data);
      return res.status(200).json(status);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
})();

exports.save = /*#__PURE__*/ (function() {
  var _ref2 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      yield _email.default.find({}).remove();
      var draft = new _email.default(req.body);
      yield draft.save();
      return res.sendStatus(200);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
})();

exports.load = /*#__PURE__*/ (function() {
  var _ref3 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var email = yield _email.default.findOne({});
      return res.status(200).json(email);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
})();
//# sourceMappingURL=email.controller.js.map
