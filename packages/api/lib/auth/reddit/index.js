'use strict';

var express = require('express');

var passport = require('passport');

var auth = require('../auth.service');

var config = require('../../config/config');

var router = express.Router();
router.get('/', auth.currentUser(), (req, res, next) => {
  req.invitecode = req.query.invitecode;
  passport.authenticate('reddit', {
    callbackURL: config.reddit.callbackURL,
    duration: 'permanent',
    state: '?redirect=' + req.query.redirect + '&invitecode=' + req.query.invitecode,
    failureRedirect: '/user/login',
    session: false,
    scope: 'identity'
  })(req, res, next);
});
router.get(
  '/callback',
  auth.currentUser(),
  passport.authenticate('reddit', {
    failureRedirect: '/user/login',
    session: false
  }),
  auth.setTokenCookieDesktop
);
module.exports = router;
//# sourceMappingURL=index.js.map
