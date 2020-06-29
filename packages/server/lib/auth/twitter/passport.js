"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleTwitterAuth = handleTwitterAuth;
exports.getProfile = getProfile;
exports.addTwitterProfile = addTwitterProfile;
exports.addNewTwitterUser = addNewTwitterUser;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _invite = require("../../api/invites/invite.controller");

var _mail = require("../../utils/mail");

var passport = require('passport');

var TwitterStrategy = require('passport-twitter').Strategy;

var {
  promisify
} = require('util');

var config = require("../../config/config");

var User = require("../../api/user/user.model");

var Invite = require("../../api/invites/invite.model");

var auth = require("../auth.service"); // Handles both login and signup via http POST request - native


exports.nativeAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        profile: twitterAuth,
        invitecode
      } = req.body;
      if (!twitterAuth || !twitterAuth.userID) throw new Error('Missing twitter id');
      var profile = yield getProfile(twitterAuth);
      var user = yield handleTwitterAuth({
        req,
        twitterAuth,
        profile,
        invitecode
      });
      var token = auth.signToken(user._id, user.role);
      return res.json({
        token,
        user
      });
    } catch (err) {
      return next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Handles both login and signup via http GET request - web


exports.setup = () => {
  passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_ID,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: config.twitter.callbackURL,
    passReqToCallback: true,
    includeEmail: true
  }, /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)(function* (req, token, tokenSecret, profile, done) {
      try {
        var twitterAuth = {
          authToken: token,
          authTokenSecret: tokenSecret
        };
        var {
          invitecode
        } = req.query;
        var user = yield handleTwitterAuth({
          req,
          twitterAuth,
          profile,
          invitecode
        });
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    });

    return function (_x4, _x5, _x6, _x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }()));
};

function handleTwitterAuth(_x9) {
  return _handleTwitterAuth.apply(this, arguments);
}

function _handleTwitterAuth() {
  _handleTwitterAuth = (0, _asyncToGenerator2.default)(function* (_ref3) {
    var {
      req,
      twitterAuth,
      profile,
      invitecode
    } = _ref3;
    if (!profile) throw new Error('missing twitter profile');
    var {
      user
    } = req;
    var connectedToUser = yield isConnectedToDifferentUser({
      user,
      profile
    });

    if (connectedToUser) {
      throw new Error('A user with this twitter account already exists');
    }

    if (!user) user = yield User.findOne({
      twitterId: profile.id
    }); // check if we have someone with a matching email
    // SECURITY RISK (could potentially add email account to another person's email?)

    if (!user && profile._json.email && profile._json.email.length) {
      user = yield User.findOne({
        email: profile._json.email,
        confirmed: true
      });
    }

    var isNewUser = !user || false;
    var handle = profile.username;

    if (isNewUser) {
      user = yield addNewTwitterUser({
        handle,
        invitecode
      });
      user = yield addTwitterProfile({
        profile,
        user,
        twitterAuth
      });
      yield (0, _mail.addUserToEmailList)(user);
      user = yield user.initialCoins();

      if (invitecode && invitecode !== 'undefined') {
        user = yield Invite.processInvite({
          invitecode,
          user
        }); // const invite = await Invite.findOne({ code: invitecode, redeemed: { $ne: true } });
        // if (invite) user = await invite.referral(user);
      }
    } else if (!user.twitterId) {
      user = yield addTwitterProfile({
        profile,
        user,
        twitterAuth
      });
      user = yield user.addReward({
        type: 'twitter'
      });
    }

    if (!isNewUser && invitecode && invitecode !== 'undefined') {
      try {
        user = yield (0, _invite.handleAdminInvite)({
          invitecode,
          user
        });
      } catch (err) {
        console.log(err); // eslint-disable-line
      }
    }

    return user.save();
  });
  return _handleTwitterAuth.apply(this, arguments);
}

function getProfile(_x10) {
  return _getProfile.apply(this, arguments);
}

function _getProfile() {
  _getProfile = (0, _asyncToGenerator2.default)(function* (props) {
    var {
      authToken,
      authTokenSecret
    } = props;
    var user_id = props.userID; // eslint-disable-line

    var url = 'https://api.twitter.com/1.1/users/show.json';
    var twitter = new TwitterStrategy({
      consumerKey: process.env.TWITTER_ID,
      consumerSecret: process.env.TWITTER_SECRET,
      callbackURL: config.twitter.callbackURL,
      passReqToCallback: true,
      includeEmail: true
    }, () => null); // need to bind original object

    var userProfile = promisify(twitter.userProfile.bind(twitter));
    var profile = yield userProfile(authToken, authTokenSecret, {
      url,
      user_id
    });
    return profile;
  });
  return _getProfile.apply(this, arguments);
}

function addTwitterProfile(_x11) {
  return _addTwitterProfile.apply(this, arguments);
}

function _addTwitterProfile() {
  _addTwitterProfile = (0, _asyncToGenerator2.default)(function* (_ref4) {
    var {
      profile,
      twitterAuth,
      user
    } = _ref4;
    var {
      description
    } = profile._json;

    if (profile._json.entities.description && profile._json.entities.description.urls) {
      profile._json.entities.description.urls.forEach(u => {
        description = description.replace(u.url, u.display_url);
      });
    }

    var image = profile._json.profile_image_url_https;
    var twitterHandle = profile.username;
    var twitterEmail = profile._json.email;
    var twitterImage = image.replace('_normal', '');
    var twitterId = profile.id; // TODO include twitter bio URL?

    description += "\ntwitter.com/".concat(profile.username);
    if (!user.bio || !user.bio.length) user.bio = description;

    if (!user.image || !user.image.length) {
      user.image = twitterImage; // update existing posts using this

      yield user.updateMeta();
    }

    if (!user.name) user.name = profile.displayName;

    if (!user.email && twitterEmail && twitterEmail.length) {
      user.email = twitterEmail;
      user.confirmed;
    }

    user.twitter = profile._json;
    user.twitterHandle = twitterHandle;
    user.twitterImage = twitterImage;
    user.twitterEmail = twitterEmail;
    user.twitterId = twitterId;
    user.twitterAuthToken = twitterAuth.authToken;
    user.twitterAuthSecret = twitterAuth.authTokenSecret;
    return user.save();
  });
  return _addTwitterProfile.apply(this, arguments);
}

function isConnectedToDifferentUser(_x12) {
  return _isConnectedToDifferentUser.apply(this, arguments);
}

function _isConnectedToDifferentUser() {
  _isConnectedToDifferentUser = (0, _asyncToGenerator2.default)(function* (_ref5) {
    var {
      user,
      profile
    } = _ref5;
    if (!user) return null;
    return User.findOne({
      twitterId: profile.id,
      _id: {
        $ne: user._id.toString()
      }
    });
  });
  return _isConnectedToDifferentUser.apply(this, arguments);
}

function addNewTwitterUser(_x13) {
  return _addNewTwitterUser.apply(this, arguments);
}

function _addNewTwitterUser() {
  _addNewTwitterUser = (0, _asyncToGenerator2.default)(function* (_ref6) {
    var {
      handle
    } = _ref6;
    var handleExists = yield User.findOne({
      handle
    });

    if (handleExists) {
      handle += Math.random().toString(36).substr(2, 3);
    }

    var user = new User({
      role: 'temp',
      handle,
      provider: 'twitter'
    });
    return user.save();
  });
  return _addNewTwitterUser.apply(this, arguments);
}
//# sourceMappingURL=passport.js.map