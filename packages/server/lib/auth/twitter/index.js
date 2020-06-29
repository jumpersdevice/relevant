"use strict";

var express = require('express');

var passport = require('passport');

var auth = require("../auth.service");

var controller = require("./passport");

var config = require("../../config/config");

var router = express.Router();
router.get('/', auth.currentUser(), (req, res, next) => {
  req.invitecode = req.query.invitecode;
  passport.authenticate('twitter', {
    callbackURL: "".concat(config.twitter.callbackURL, "?invitecode=").concat(req.query.invitecode, "&redirect=").concat(req.query.redirect),
    failureRedirect: '/user/login',
    session: false
  })(req, res, next);
});
router.get('/callback', auth.currentUser(), passport.authenticate('twitter', {
  failureRedirect: '/user/login',
  session: false
}), auth.setTokenCookieDesktop);
router.post('/login', auth.currentUser(), controller.nativeAuth);
module.exports = router;
//# sourceMappingURL=index.js.map