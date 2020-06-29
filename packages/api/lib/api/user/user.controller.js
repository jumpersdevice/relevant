'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _cryptoPromise = _interopRequireDefault(require('crypto-promise'));

var _v = _interopRequireDefault(require('uuid/v4'));

var _merge = _interopRequireDefault(require('lodash/merge'));

var _url = _interopRequireDefault(require('url'));

var _auth = require('../../auth/auth.service');

var _invite = _interopRequireDefault(require('../invites/invite.model'));

var _mail = require('../../utils/mail');

var _globalConstants = require('../../config/globalConstants');

var _passport = require('../../auth/web3/passport');

var _earnings = _interopRequireDefault(require('../earnings/earnings.model'));

var _user = _interopRequireDefault(require('./user.model'));

var _post = _interopRequireDefault(require('../post/post.model'));

var _communityMember = _interopRequireDefault(
  require('../community/community.member.model')
);

var _subscription = _interopRequireDefault(require('../subscription/subscription.model'));

var _feed = _interopRequireDefault(require('../feed/feed.model'));

var ethUtils = _interopRequireWildcard(require('../../utils/ethereum'));

var _cashOut = require('../../utils/cashOut');

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

var sigUtil = require('eth-sig-util');

function sendConfirmation(_x, _x2) {
  return _sendConfirmation.apply(this, arguments);
}

function _sendConfirmation() {
  _sendConfirmation = (0, _asyncToGenerator2.default)(function*(user, newUser) {
    var text = '';
    if (newUser) text = ', welcome to Relevant';
    var confirmUrl = ''
      .concat(process.env.API_SERVER, '/user/confirm/')
      .concat(user.handle, '/')
      .concat(user.confirmCode);
    var data = {
      from: 'Relevant <info@relevant.community>',
      to: user.email,
      subject: 'Relevant Email Confirmation',
      html: '\n        Hi @'
        .concat(user.handle)
        .concat(
          text,
          '!\n      <br />\n      <br />\n        Please click on the link below to confirm your email address:\n      <br />\n      <br />\n      <a href="'
        )
        .concat(
          confirmUrl,
          '" target="_blank">Confirm Email</a>\n      <br />\n      <br />\n      '
        )
    };
    yield (0, _mail.sendEmail)(data);
    return {
      email: user.email
    };
  });
  return _sendConfirmation.apply(this, arguments);
}

function sendResetEmail(_x3, _x4) {
  return _sendResetEmail.apply(this, arguments);
}

function _sendResetEmail() {
  _sendResetEmail = (0, _asyncToGenerator2.default)(function*(user, queryString) {
    var resetUrl = ''
      .concat(process.env.API_SERVER, '/user/resetPassword/')
      .concat(user.resetPasswordToken)
      .concat(queryString);
    var data = {
      from: 'Relevant <info@relevant.community>',
      to: user.email,
      subject: 'Reset Relevant Password',
      html: '\n      Hi, @'
        .concat(
          user.handle,
          '\n      <br/><br/>\n      You are receiving this because you have requested the reset of the password for your account.<br />\n      Please click on the following link, or paste this into your browser to complete the process:<br/><br/>\n      '
        )
        .concat(
          resetUrl,
          '<br/><br/>\n      If you did not request a password reset, please ignore this email and your password will remain unchanged.'
        )
    };
    return (0, _mail.sendEmail)(data);
  });
  return _sendResetEmail.apply(this, arguments);
}

exports.forgot = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    var email;

    try {
      var urlParts = _url.default.parse(req.url, true);

      var queryString = urlParts.search || '';
      var string = req.body.user;
      email = /^.+@.+\..+$/.test(string);
      var query = email
        ? {
            email: {
              $regex: '^'.concat(string, '$'),
              $options: 'i'
            }
          }
        : {
            handle: {
              $regex: '^'.concat(string, '$'),
              $options: 'i'
            }
          };
      var user = yield _user.default.findOne(
        query,
        'resetPasswordToken resetPasswordExpires email handle'
      );

      if (!user) {
        var errorText = email
          ? 'No user with this email exists'
          : "Couldn't find user with this username";
        throw new Error(errorText);
      }

      var rand = yield _cryptoPromise.default.randomBytes(32);
      var token = rand.toString('hex');
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000;
      user = yield user.save();
      yield sendResetEmail(user, queryString);
      return res.status(200).json({
        email: user.email,
        username: user.handle
      });
    } catch (err) {
      return next(err);
    }
  });

  return function(_x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
})();

exports.confirm = /*#__PURE__*/ (function() {
  var _ref2 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var user;
      var middleware = false;
      if (!req.params) req.params = {};
      if (req.params.user) middleware = true;
      var confirmCode = req.params.code || req.body.code;
      var handle = req.params.user || req.body.user;
      if (!handle || !confirmCode)
        throw new Error('Missing user id or confirmation token');
      user = yield _user.default.findOne({
        handle,
        confirmCode
      });
      if (!user) throw new Error('Wrong confirmation code');
      if (user.confirmed) throw new Error('Email is already confirmed.');
      user.confirmed = true;
      user = yield user.addReward({
        type: 'email'
      });
      user = yield user.save();
      yield (0, _mail.addUserToEmailList)(user);
      req.confirmed = true;
      return middleware ? next() : res.status(200).json(user);
    } catch (err) {
      return next();
    }
  });

  return function(_x8, _x9, _x10) {
    return _ref2.apply(this, arguments);
  };
})();

exports.sendConfirmationCode = /*#__PURE__*/ (function() {
  var _ref3 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var user = yield _user.default.findOne(
        {
          handle: req.user.handle
        },
        'email confirmCode name handle'
      );
      user.confirmCode = (0, _v.default)();
      user = yield user.save();
      var status = yield sendConfirmation(user);
      return res.status(200).json(status);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x11, _x12, _x13) {
    return _ref3.apply(this, arguments);
  };
})();

exports.webOnboard = (req, res, next) => {
  var { handle } = req.user;
  var { step } = req.params;
  var path = 'webOnboard.'.concat(step);

  _user.default
    .findOneAndUpdate(
      {
        handle
      },
      {
        $set: {
          [path]: true
        }
      },
      {
        projection: 'webOnboard',
        new: true
      }
    )
    .then(newUser => {
      res.status(200).json(newUser);
    })
    .catch(next);
};

exports.onboarding = (req, res, next) => {
  var { handle } = req.user;
  var { step } = req.params;

  _user.default
    .findOneAndUpdate(
      {
        handle
      },
      {
        onboarding: step
      },
      {
        projection: 'onboarding',
        new: true
      }
    )
    .then(newUser => {
      res.status(200).json(newUser);
    })
    .catch(next);
};
/**
 * Reset password
 */

exports.resetPassword = /*#__PURE__*/ (function() {
  var _ref4 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { token, password } = req.body;
      var { user } = req;
      if (!token && !user) throw new Error('token missing');

      if (!user) {
        user = yield _user.default.findOne({
          resetPasswordToken: token
        });

        if (user && user.resetPasswordExpires > Date.now()) {
          throw new Error('Password reset time has expired');
        }
      }

      if (!user) throw new Error('No user found');
      if (!user.onboarding) user.onboarding = 0;
      user.password = password;
      user = yield user.save();
      res.status(200).json({
        success: true
      });
    } catch (err) {
      next(err);
    }
  });

  return function(_x14, _x15, _x16) {
    return _ref4.apply(this, arguments);
  };
})();
/**
 * Change a users password
 */

exports.changePassword = /*#__PURE__*/ (function() {
  var _ref5 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var userId = req.user._id;
      var oldPass = String(req.body.oldPassword);
      var newPass = String(req.body.newPassword);

      var user = _user.default.findById(userId);

      if (user.authenticate(oldPass)) {
        user.password = newPass;
        yield user.save();
        return res.sendStatus(200);
      }

      throw new Error('incorrect password');
    } catch (err) {
      return next(err);
    }
  });

  return function(_x17, _x18, _x19) {
    return _ref5.apply(this, arguments);
  };
})();

exports.search = (req, res, next) => {
  var blocked = [];
  var { user } = req;

  if (user) {
    blocked = [...user.blocked, ...user.blockedBy];
  }

  var { search, limit } = req.query;
  var name = new RegExp(search, 'i');
  var query = {
    $and: [
      {
        $or: [
          {
            name
          },
          {
            handle: name
          }
        ]
      },
      {
        handle: {
          $nin: blocked
        }
      }
    ]
  };

  _user.default
    .find(query, 'handle name image')
    .sort({
      handle: 1
    })
    .limit(parseInt(limit, 10))
    .then(users => {
      res.json(200, users);
    })
    .catch(next);
};
/**
 * Get list of users
 * restriction: 'admin'
 */

exports.index = (req, res, next) => {
  var { search } = req.query;
  var query = {};

  if (search) {
    var name = new RegExp(req.query.name, 'i');
    query = {
      name
    };
  }

  _user.default
    .find(query, '-salt -hashedPassword')
    .sort({
      rank: -1
    })
    .then(users => {
      res.status(200).json(users);
    })
    .catch(next);
};

exports.checkUser = /*#__PURE__*/ (function() {
  var _ref6 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { name, email, omitSelf } = req.query;
      var { user } = req;
      var query = {};
      var type;

      if (name === 'everyone') {
        return res.status(200).json({
          type
        });
      }

      var formatted;
      var omit;

      if (user && omitSelf) {
        omit = user.handle;
      }

      if (name) {
        type = 'user';
        formatted = '^' + name + '$';
        query = _objectSpread(
          _objectSpread({}, query),
          {},
          {
            $and: [
              {
                handle: {
                  $regex: formatted,
                  $options: 'i'
                }
              },
              {
                handle: {
                  $ne: omit
                }
              }
            ]
          }
        );
      } else if (email) {
        formatted = '^' + email + '$';
        type = 'email';
        query = {
          $and: [
            {
              email: {
                $regex: formatted,
                $options: 'i'
              }
            },
            {
              handle: {
                $ne: omit
              }
            }
          ]
        };
      }

      var userExists = yield _user.default.findOne(query, '_id handle');
      if (userExists) return res.status(200).json(userExists);
      return res.status(200).json(null);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x20, _x21, _x22) {
    return _ref6.apply(this, arguments);
  };
})();

exports.testData = /*#__PURE__*/ (function() {
  var _ref7 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var limit = parseInt(req.query.limit, 10) || 5;
      var skip = parseInt(req.query.skip, 10) || 0;
      var community = req.query.community || 'relevant';
      var query = {
        community,
        pagerank: {
          $gt: 0
        }
      };
      var rel = yield _communityMember.default
        .find(query, 'pagerank level community communityId pagerankRaw')
        .limit(limit)
        .skip(skip) // .sort(sort)
        .populate({
          path: 'user',
          select: 'handle name votePower image bio'
        });
      return res.status(200).json(rel);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x23, _x24, _x25) {
    return _ref7.apply(this, arguments);
  };
})();

exports.list = /*#__PURE__*/ (function() {
  var _ref8 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      var limit = parseInt(req.query.limit, 10) || 5;
      var skip = parseInt(req.query.skip, 10) || 0;
      var blocked = [];

      if (user) {
        blocked = [...user.blocked, ...user.blockedBy];
      }

      var community = req.query.community || 'relevant';
      var sort = {
        pagerank: -1
      };
      var query = {
        community,
        user: {
          $nin: blocked
        }
      };
      var rel = yield _communityMember.default
        .find(query)
        .limit(limit)
        .skip(skip)
        .sort(sort)
        .populate({
          path: 'user',
          select: 'handle name image bio'
        });
      var users = rel.map(r => {
        r = r.toObject();
        if (!r.user) return null;

        var u = _objectSpread({}, r.user); // eslint-disable-line

        u.relevance = {};
        delete r.user;
        u.relevance = r;
        return u;
      });
      return res.status(200).json(users);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x26, _x27, _x28) {
    return _ref8.apply(this, arguments);
  };
})();
/**
 * Creates a new user
 */

exports.create = /*#__PURE__*/ (function() {
  var _ref9 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var confirmCode = (0, _v.default)();
      var { user } = req.body;
      var { invitecode } = req.body;

      if (_globalConstants.BANNED_USER_HANDLES.includes(user.name)) {
        throw new Error('this username is taken');
      }

      if (!user.email) throw new Error('missing email');
      var usingWeb3 = !!user.ethLogin;
      var additionalFields = usingWeb3 ? yield getEthFields(user) : {};

      if (additionalFields.user) {
        var _token = (0, _auth.signToken)(additionalFields.user._id, 'user');

        return res.status(200).json({
          token: _token,
          user: additionalFields.user
        });
      }

      var userObj = _objectSpread(
        {
          handle: user.name,
          name: user.name,
          phone: user.phone,
          email: user.email,
          password: user.password,
          image: user.image,
          provider: usingWeb3 ? 'web3' : 'local',
          role: 'user',
          relevance: 0,
          confirmCode
        },
        additionalFields
      );

      if (usingWeb3) delete userObj.password;
      user = new _user.default(userObj);
      user = yield user.save();
      if (invitecode)
        user = yield _invite.default.processInvite({
          invitecode,
          user
        });
      user = yield user.initialCoins();
      var token = (0, _auth.signToken)(user._id, 'user');
      if (!user.confirmed) sendConfirmation(user, true);
      user = yield user.save();
      user = user.toObject();
      delete user.hashedPassword;
      delete user.salt;
      delete user.password;
      return res.status(200).json({
        token,
        user
      });
    } catch (err) {
      return next(err);
    }
  });

  return function(_x29, _x30, _x31) {
    return _ref9.apply(this, arguments);
  };
})();

function getEthFields(_x32) {
  return _getEthFields.apply(this, arguments);
} // async function processBoxFields(user) {
//   const { signature, boxAddress, DID } = user;
//   if (!signature || !boxAddress || !DID) throw new Error('Missing 3box parametrs');
//   const claim = await idUtils.verifyClaim(signature, { auth: true });
//   const { payload } = claim;
//   const { exp, DID: claimDID, address } = payload;
//   const claimExp = new Date(exp * 1000);
//   if (claimExp < new Date()) throw new Error('Expired 3box signature');
//   if (DID !== claimDID) throw new Error('Invalid 3box DID in signature');
//   if (boxAddress !== address) throw new Error('Invalid Ethereum address in signature');
//   const userExists = await User.findOne({ boxDID: DID });
//   if (userExists) {
//     userExists.email = user.email;
//     userExists.image = user.image;
//     userExists.name = user.name;
//     await userExists.save();
//     return { user: userExists };
//   }
//   return { boxDID: DID, boxAddress, confirmed: !!user.email };
// }

/**
 * Get a single user
 */

function _getEthFields() {
  _getEthFields = (0, _asyncToGenerator2.default)(function*(_ref10) {
    var { signature, msg } = _ref10,
      profile = (0, _objectWithoutProperties2.default)(_ref10, ['signature', 'msg']);
    var ethLogin = (0, _passport.verifyEthSignature)({
      signature,
      msg
    });
    var user = yield _user.default.findOne({
      ethLogin
    });

    if (user) {
      user.email = profile.email;
      user.image = profile.image;
      user.name = profile.name;
      yield user.save();
      return {
        user
      };
    }

    return {
      ethLogin,
      ethAddress: [ethLogin]
    };
  });
  return _getEthFields.apply(this, arguments);
}

exports.show = /*#__PURE__*/ (function() {
  var _show = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      var handle = req.params.id;
      var me = null;
      var memberships;

      if (!handle && user) {
        handle = user.handle;
      }

      if (user && user._id) {
        memberships = yield _communityMember.default.find({
          user: user._id
        });
      }

      me = user && user.handle === handle;
      var community = req.query.community || 'relevant'; // don't show blocked user;

      var blocked = [];

      if (user) {
        blocked = [...(user.blocked || []), ...(user.blockedBy || [])];

        if (blocked.find(u => u === handle)) {
          return res.status(200).json({});
        }
      }

      var select = me ? '+email' : null;
      user = yield _user.default
        .findOne(
          {
            handle
          },
          select
        )
        .populate({
          path: 'relevance',
          match: {
            community
          },
          select: 'pagerank relevanceRecord community'
        });
      if (!user) throw new Error('no such user ', handle);
      user = yield user.getSubscriptions(); // topic relevance

      var relevance = yield _communityMember.default
        .find({
          user: user._id
        })
        .sort('-relevance')
        .limit(5);
      var userObj = user.toObject();
      userObj.topTags = relevance || [];
      res.status(200).json(
        _objectSpread(
          _objectSpread({}, userObj),
          {},
          {
            memberships
          }
        )
      ); // update token balance based on ETH account

      if (me) {
        var addr = user.ethAddress[0];
        var tokenBalance = addr ? yield ethUtils.getBalance(user.ethAddress[0]) : 0;

        if (user.tokenBalance !== tokenBalance) {
          user.tokenBalance = tokenBalance;
          user = yield user.save();
          yield user.updateClient();
        }
      }

      return null;
    } catch (err) {
      return next(err);
    }
  });

  function show(_x33, _x34, _x35) {
    return _show.apply(this, arguments);
  }

  return show;
})();
/**
 * Deletes a user
 * restriction: 'admin' or user
 */

exports.destroy = /*#__PURE__*/ (function() {
  var _ref11 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { id } = req.params;

      if (!req.user || !req.user.role === 'admin' || !req.user._id.equals(id)) {
        throw new Error('no right to delete');
      }

      var user = yield _user.default.findOne({
        _id: id
      });
      yield (0, _mail.removeFromEmailList)(user);
      yield _user.default.deleteOne({
        handle: req.params.id
      });
      return res.sendStatus(204);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x36, _x37, _x38) {
    return _ref11.apply(this, arguments);
  };
})();

exports.updateComunity = /*#__PURE__*/ (function() {
  var _ref12 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      if (!user) throw new Error('missing user');
      var { community } = req.body;
      user.community = community;
      yield user.save();
      return res.status(200).json({
        succcess: true
      });
    } catch (err) {
      return next(err);
    }
  });

  return function(_x39, _x40, _x41) {
    return _ref12.apply(this, arguments);
  };
})();

exports.updateHandle = /*#__PURE__*/ (function() {
  var _ref13 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      if (user.role !== 'temp') throw new Error('Cannot change user handle');
      var { handle, email } = req.body.user;
      if (!handle) throw new Error('missing handle'); // make sure its not used

      if (handle !== user.handle) {
        var used = yield _user.default.findOne({
          handle
        });
        if (used) throw new Error('This handle is already taken');
      }

      if (email && email !== user.email) {
        var usedEmail = yield _user.default.findOne({
          _id: {
            $ne: user._id
          },
          email
        });
        if (usedEmail) throw new Error('This email is already in use');
        user.email = email;
        user.confirmCode = (0, _v.default)();
        user = yield user.save();
        yield sendConfirmation(user, true);
      }

      user.handle = handle;
      user.role = 'user';
      yield (0, _mail.addUserToEmailList)(user);
      var newUser = {
        name: user.name,
        image: user.image,
        handle: user.handle,
        _id: user._id
      };
      yield _communityMember.default.updateMany(
        {
          user: user._id
        },
        {
          embeddedUser: newUser
        },
        {
          multi: true
        }
      );
      user = yield user.save();
      return res.status(200).json(user);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x42, _x43, _x44) {
    return _ref13.apply(this, arguments);
  };
})();

exports.update = /*#__PURE__*/ (function() {
  var _ref14 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { role } = req.user;
      var authUser = JSON.stringify(req.user._id);
      var reqUser = JSON.stringify(req.body._id);
      var updateImage = false;
      var updateName = false;
      var user;

      if (authUser !== reqUser && role !== 'admin') {
        throw new Error('Not authorized to edit this user');
      }

      user = yield _user.default.findOne(
        {
          _id: req.body._id
        },
        '-salt -hashedPassword -relevance'
      );
      if (!user) throw new Error('user not found');

      if (user.name !== req.body.name) {
        updateName = true;
        user.name = req.body.name;
      }

      if (user.image !== req.body.image) {
        updateImage = true;
        user.image = req.body.image;
      }

      user.bio = typeof req.body.bio === 'string' ? req.body.bio : user.bio;
      user.deviceTokens = req.body.deviceTokens;

      if (role === 'admin') {
        user.role = req.body.role;
      }

      user = yield user.save();
      user.updateClient();

      if (updateName || updateImage) {
        var newUser = {
          name: user.name,
          image: user.image,
          handle: user.handle,
          _id: user._id
        }; // Do this on a separate thread?

        yield _post.default.updateMany(
          {
            user: user._id
          },
          {
            embeddedUser: newUser
          },
          {
            multi: true
          }
        );
        yield _communityMember.default.updateMany(
          {
            user: user._id
          },
          {
            embeddedUser: newUser
          },
          {
            multi: true
          }
        );
      }

      return res.status(200).json(user);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x45, _x46, _x47) {
    return _ref14.apply(this, arguments);
  };
})();

exports.block = /*#__PURE__*/ (function() {
  var _ref15 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      var { block } = req.body;
      if (user._id === block) throw new Error("You can't block yourself!");

      var userPromise = _user.default.findOneAndUpdate(
        {
          _id: user._id
        },
        {
          $addToSet: {
            blocked: block
          }
        },
        {
          new: true
        }
      );

      var blockPromise = _user.default.findOneAndUpdate(
        {
          _id: block
        },
        {
          $addToSet: {
            blockedBy: user._id
          }
        },
        {
          new: true
        }
      ); // clear any existing subscriptions

      var sub1 = _subscription.default
        .deleteMany({
          following: user._id,
          follower: block
        })
        .exec();

      var sub2 = _subscription.default
        .deleteMany({
          following: block,
          follower: user._id
        })
        .exec();

      var feed1 = _feed.default
        .deleteMany({
          userId: user._id,
          from: block
        })
        .exec();

      var feed2 = _feed.default
        .deleteMany({
          userId: block,
          from: user._id
        })
        .exec();

      var results = yield Promise.all([
        userPromise,
        blockPromise,
        sub1,
        sub2,
        feed1,
        feed2
      ]);
      user = results[0];
      return res.status(200).json(user);
    } catch (err) {
      return next(err);
    }
  });

  return function(_x48, _x49, _x50) {
    return _ref15.apply(this, arguments);
  };
})();

exports.unblock = /*#__PURE__*/ (function() {
  var _ref16 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      var { block } = req.body;
      user = yield _user.default.findOneAndUpdate(
        {
          handle: user.handle
        },
        {
          $pull: {
            blocked: block
          }
        },
        {
          new: true
        }
      );
      block = yield _user.default.findOneAndUpdate(
        {
          _id: block
        },
        {
          $pull: {
            blockedBy: user._id
          }
        }
      );
      res.status(200).json(user);
    } catch (err) {
      next(res, err);
    }
  });

  return function(_x51, _x52, _x53) {
    return _ref16.apply(this, arguments);
  };
})();

exports.blocked = /*#__PURE__*/ (function() {
  var _ref17 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      user = yield _user.default
        .findOne({
          _id: user._id
        })
        .populate('blocked');
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  });

  return function(_x54, _x55, _x56) {
    return _ref17.apply(this, arguments);
  };
})();

exports.updateUserTokenBalance = /*#__PURE__*/ (function() {
  var _ref18 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;

      if (!user.ethAddress || !user.ethAddress.length) {
        throw new Error('missing connected Ethereum address');
      }

      var userBalance = yield ethUtils.getBalance(user.ethAddress[0]);
      user.tokenBalance = userBalance;
      yield user.save();
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  });

  return function(_x57, _x58, _x59) {
    return _ref18.apply(this, arguments);
  };
})();

exports.updateUserNotifications = /*#__PURE__*/ (function() {
  var _ref19 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user, body } = req;
      var { notificationSettings, subscription, deviceTokens } = body;
      var newSettings = (0, _merge.default)(
        user.notificationSettings.toObject(),
        notificationSettings
      );

      if (user.notificationSettings.email.digest !== newSettings.email.digest) {
        if (!newSettings.email.digest) (0, _mail.addUserToEmailList)(user, 'nodigest');
        else (0, _mail.removeFromEmailList)(user, 'nodigest');
      }

      user.notificationSettings = newSettings;

      if (subscription) {
        var findIndex = user.desktopSubscriptions.findIndex(
          s =>
            s.endpoint === subscription.endpoint &&
            s.keys &&
            s.keys.auth === subscription.keys.auth &&
            s.keys.p256dh === subscription.keys.p256dh
        );

        if (findIndex === -1) {
          user.desktopSubscriptions = [...user.desktopSubscriptions, subscription];
        }
      }

      if (deviceTokens) {
        user.deviceTokens = deviceTokens;
      }

      yield user.save();
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  });

  return function(_x60, _x61, _x62) {
    return _ref19.apply(this, arguments);
  };
})();

exports.ethAddress = /*#__PURE__*/ (function() {
  var _ref20 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      var { msg, sig, acc } = req.body;
      var recovered = sigUtil.recoverTypedSignatureLegacy({
        data: msg,
        sig
      });
      if (recovered !== acc.toLowerCase()) throw new Error('address does not match');
      var exists = yield _user.default.findOne(
        {
          ethAddress: acc
        },
        'handle'
      );
      if (exists) throw new Error('This address is already in use by @' + exists.handle);
      user = yield _user.default.findOne(
        {
          handle: user.handle
        },
        'ethAddress'
      );
      user.ethAddress = [acc];

      if (!user.ethLogin) {
        user.ethLogin = acc;
      }

      var userBalance = yield ethUtils.getBalance(user.ethAddress[0]);
      user.tokenBalance = userBalance;
      yield user.save();
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  });

  return function(_x63, _x64, _x65) {
    return _ref20.apply(this, arguments);
  };
})();

exports.cashOut = /*#__PURE__*/ (function() {
  var _ref21 = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user } = req;
      var {
        body: { customAmount }
      } = req;
      if (!user) throw new Error('Missing user when trying to claim tokens.');
      if (!customAmount) throw new Error('Missing token claim amount.');
      if (!user.ethAddress[0]) throw new Error('No Ethereum address connected');
      var address = user.ethAddress[0]; // if the nonce is the same as last time, resend last signature

      var nonce = yield ethUtils.getNonce(address); // Prioritize last withdrawal attempt

      if (user.cashOut && user.cashOut.nonce === nonce.toString()) {
        return res.status(200).json({
          user,
          earning: null
        });
      }

      var userCashoutLog = yield _earnings.default.find({
        user: user._id,
        cashOutAttempt: true
      });
      var cashedOut = userCashoutLog.reduce((a, e) => a + e.cashOutAmt, 0);

      if (user.cashedOut !== cashedOut) {
        throw new Error(
          'There is a mismatch in previous cashout amounts',
          user.cashedOut,
          cashedOut
        );
      }

      var maxClaim = _globalConstants.CASHOUT_MAX - cashedOut;
      var canClaim = Math.min(maxClaim, user.balance - (user.airdropTokens || 0));
      var amount = Number(customAmount);
      if (amount > maxClaim)
        throw new Error(
          'You can not claim more than '.concat(maxClaim, ' coins at this time.')
        );
      if (amount > canClaim) throw new Error('You can not claim this many coins.');
      if (amount <= 0) throw new Error('You do not have enough coins to claim.'); // if (amount < 100) throw new Error('Balance is too small to withdraw');

      var allocatedRewards = yield ethUtils.getParam('allocatedRewards');

      if (allocatedRewards < amount) {
        throw new Error(
          'There are not enough funds allocated in the contract at the moment'
        );
      }

      var earning = yield (0, _cashOut.logCashOut)(user, amount);
      user.balance -= amount;
      console.log('prev cashout', cashedOut, 'cashout', amount); // eslint-disable-line

      user.cashedOut += amount;
      user = yield user.save();
      console.log('new cashout', user.cashedOut); // eslint-disable-line

      var { sig, amount: bnAmount } = yield ethUtils.sign(address, amount);
      user.nonce = nonce;
      user.cashOut = {
        sig,
        amount: bnAmount,
        nonce,
        earningId: earning._id
      };
      user = yield user.save();
      return res.status(200).json({
        user,
        earning
      });
    } catch (err) {
      return next(err);
    }
  });

  return function(_x66, _x67, _x68) {
    return _ref21.apply(this, arguments);
  };
})();
/**
 * Authentication callback
 */

exports.authCallback = (req, res) => {
  res.redirect('/');
};
//# sourceMappingURL=user.controller.js.map
