'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.handleAuth = handleAuth;
exports.addNewRedditUser = addNewRedditUser;
exports.addRedditProfile = addRedditProfile;

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _queryString = _interopRequireDefault(require('query-string'));

var _invite = require('../../api/invites/invite.controller');

var passport = require('passport');

var RedditStrategy = require('passport-reddit').Strategy;

var config = require('../../config/config');

var User = require('../../api/user/user.model');

var Invite = require('../../api/invites/invite.model'); // User.find({ 'reddit.id': { $exists: true } })
// .remove()
// .exec();
// User.findOne({ 'reddit.id': { $exists: true } }, '+reddit')
// .then(async user => {
//   user.redditId = null;
//   user.reddit = null;
//   await user.save();
// });

passport.use(
  new RedditStrategy(
    {
      clientID: config.reddit.clientID,
      clientSecret: config.reddit.clientSecret,
      callbackURL: config.reddit.callbackURL,
      passReqToCallback: true
    },
    /*#__PURE__*/ (function() {
      var _ref = (0, _asyncToGenerator2.default)(function*(
        req,
        accessToken,
        refreshToken,
        profile,
        done
      ) {
        try {
          var redditAuth = {
            accessToken,
            refreshToken
          };
          req.query = _queryString.default.parse(req.query.state);
          var { invitecode } = req.query;
          var user = yield handleAuth({
            req,
            redditAuth,
            profile,
            invitecode
          });
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      });

      return function(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    })()
  )
);

function handleAuth(_x6) {
  return _handleAuth.apply(this, arguments);
}

function _handleAuth() {
  _handleAuth = (0, _asyncToGenerator2.default)(function*(_ref2) {
    var { req, redditAuth, profile, invitecode } = _ref2;
    if (!profile) throw new Error('missing reddit profile');
    var { user } = req;
    var isConnectAccount = user || false;
    var alreadyInUse =
      isConnectAccount &&
      (yield isConnectedToDifferentUser({
        user,
        profile
      }));

    if (alreadyInUse) {
      throw new Error('A user with this reddit account already exists');
    }

    if (!isConnectAccount)
      user = yield User.findOne({
        redditId: profile._json.id
      });
    var isNewUser = !user || false;
    var handle = profile._json.name;

    if (isNewUser) {
      var extraRewards = Math.round(Math.log10(profile._json.comment_karma || 1) * 10);
      user = yield addNewRedditUser({
        handle
      });
      user = yield addRedditProfile({
        profile,
        user,
        redditAuth
      });
      user = yield user.addReward({
        type: 'reddit',
        extraRewards
      });

      if (invitecode && invitecode !== 'undefined') {
        user = yield Invite.processInvite({
          invitecode,
          user
        });
      }
    } else if (!user.redditId) {
      user = yield addRedditProfile({
        profile,
        user,
        redditAuth
      });
      user = yield user.addReward({
        type: 'reddit'
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
  return _handleAuth.apply(this, arguments);
}

function isConnectedToDifferentUser(_x7) {
  return _isConnectedToDifferentUser.apply(this, arguments);
}

function _isConnectedToDifferentUser() {
  _isConnectedToDifferentUser = (0, _asyncToGenerator2.default)(function*(_ref3) {
    var { user, profile } = _ref3;
    return User.findOne({
      redditId: profile._json.id,
      _id: {
        $ne: user._id
      }
    });
  });
  return _isConnectedToDifferentUser.apply(this, arguments);
}

function addNewRedditUser(_x8) {
  return _addNewRedditUser.apply(this, arguments);
}

function _addNewRedditUser() {
  _addNewRedditUser = (0, _asyncToGenerator2.default)(function*(_ref4) {
    var { handle } = _ref4;
    var handleExists = yield User.findOne({
      handle
    });

    if (handleExists) {
      handle += Math.random()
        .toString(36)
        .substr(2, 3);
    }

    var user = new User({
      role: 'temp',
      handle,
      provider: 'reddit'
    });
    return user.save();
  });
  return _addNewRedditUser.apply(this, arguments);
}

function addRedditProfile(_x9) {
  return _addRedditProfile.apply(this, arguments);
}

function _addRedditProfile() {
  _addRedditProfile = (0, _asyncToGenerator2.default)(function*(_ref5) {
    var { profile, redditAuth, user } = _ref5;
    var redditUser = profile._json;
    var image = redditUser.icon_img;

    if (!user.image || !user.image.length) {
      user.image = image; // update existing posts

      yield user.updateMeta();
    }

    if (!user.name) user.name = redditUser.name;
    user.reddit = redditUser;
    user.redditId = redditUser.id;
    user.redditAuth = redditAuth;
    return user.save();
  });
  return _addRedditProfile.apply(this, arguments);
}
//# sourceMappingURL=passport.js.map
