'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var express = require('express');

var passport = require('passport');

var auth = require('../auth.service');

var twitter = require('../twitter/passport');

var router = express.Router();
router.post('/', (req, res, next) => {
  passport.authenticate(
    'local',
    /*#__PURE__*/ (function() {
      var _ref = (0, _asyncToGenerator2.default)(function*(err, user, info) {
        try {
          var error = err || info;
          if (error) return res.status(401).json(error);

          if (!user) {
            return res.status(404).json({
              message: 'Something went wrong, please try again.'
            });
          }

          if (req.body.twitter) {
            var profile = yield twitter.getProfile(req.body.twitter);
            yield twitter.addTwitterProfile({
              user,
              profile,
              twitterAuth: req.body.twitter
            });
          }

          user = user.toObject();
          delete user.twitterAuthToken;
          delete user.hashedPassword;
          delete user.salt;
          delete user.twitter;
          var token = auth.signToken(user._id, user.role);
          req.universalCookies.set('token', token);
          return res.json({
            token
          });
        } catch (error) {
          return res.status(404).json({
            message: 'Something went wrong, please try again.'
          });
        }
      });

      return function(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    })()
  )(req, res, next);
});
module.exports = router;
//# sourceMappingURL=index.js.map
