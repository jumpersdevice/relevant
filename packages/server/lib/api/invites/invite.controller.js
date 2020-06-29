"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _communityMember = _interopRequireDefault(require("../community/community.member.model"));

var _globalConstants = require("../../config/globalConstants");

var _community = _interopRequireDefault(require("../community/community.model"));

var _mail = require("../../utils/mail");

var _invite2 = _interopRequireDefault(require("./invite.model"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var inlineCss = require('inline-css');

var {
  emailStyle
} = require("../../utils/emailStyle");

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return err => {
    res.status(statusCode).json({
      message: err.message
    });
  };
}

exports.index = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    var {
      community
    } = req.query;
    var invites;
    var limit = parseInt(req.query.limit, 0) || null;
    var skip = parseInt(req.query.skip, 0) || null;

    try {
      var query = {
        invitedBy: req.user._id,
        community
      };
      invites = yield _invite2.default.find(query).populate('registeredAs').sort({
        updatedAt: -1
      }).skip(skip).limit(limit);
    } catch (err) {
      return next(err);
    }

    return res.status(200).json(invites);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Takes array of invites;


exports.createInvites = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)(function* (invites) {
    invites = invites.map( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)(function* (invite) {
        var code = (0, _v.default)();
        invite = new _invite2.default(_objectSpread(_objectSpread({}, invite), {}, {
          code
        }));
        invite = yield invite.save();

        if (invite.email) {
          invite = yield exports.sendEmailFunc(invite);
        }

        return invite;
      });

      return function (_x5) {
        return _ref3.apply(this, arguments);
      };
    }());
    return Promise.all(invites);
  });

  return function (_x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.create = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        user,
        communityMember
      } = req;
      var {
        communityId,
        community
      } = communityMember;
      var {
        email,
        name,
        invitee
      } = req.body;
      var type = req.body.type || 'referral';
      var invite = {
        invitedBy: user._id,
        invitedByString: user.name,
        invitee,
        email: email ? email.trim() : null,
        name: name ? name.trim() : null,
        type,
        number: 1,
        community,
        communityId
      };

      if (!user.relevance) {
        user.relevance = yield _communityMember.default.findOne({
          user: user._id,
          communityId
        });
      }

      if (!user.relevance) {
        throw new Error("You don't have enough reputation to refer new users");
      }

      var unusedInvites = yield computeInviteNumber({
        user,
        communityId
      });

      if (unusedInvites <= 0) {
        throw new Error('You have used all of your available referrals - earn more reputation to get more!');
      } // TODO consensus of existing admins


      if (invite.type === 'admin' && user.role !== 'admin' && !communityMember.superAdmin) {
        throw new Error("You don't have the privileges required to invite an admin");
      }

      invite = yield exports.createInvites([invite]);
      if (invite.type !== 'admin') communityMember.invites = unusedInvites - 1;
      yield communityMember.save();
      return res.status(200).json({
        invite,
        count: {
          [community]: communityMember.invites
        }
      });
    } catch (err) {
      return next(err);
    }
  });

  return function (_x6, _x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

function computeInviteNumber(_x9) {
  return _computeInviteNumber.apply(this, arguments);
}

function _computeInviteNumber() {
  _computeInviteNumber = (0, _asyncToGenerator2.default)(function* (_ref5) {
    var {
      user,
      communityId
    } = _ref5;

    if (!user.relevance) {
      user.relevance = yield _communityMember.default.findOne({
        user: user._id.toString(),
        communityId
      });
      if (!user.relevance) return 0;
    }

    var totalInvites = (0, _globalConstants.totalAllowedInvites)(user.relevance.pagerank);
    var usedInvites = yield _invite2.default.countDocuments({
      invitedBy: user._id,
      communityId,
      type: 'referral'
    });
    return totalInvites - usedInvites;
  });
  return _computeInviteNumber.apply(this, arguments);
}

exports.sendEmail = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)(function* (req, res) {
    var invite;

    try {
      var _id = req.body.inviteId;
      invite = yield exports.sendEmailFunc(_id);
    } catch (err) {
      return handleError(res)(err);
    }

    return res.status(200).json(invite);
  });

  return function (_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

exports.sendEmailFunc = /*#__PURE__*/function () {
  var _inviteEamil = (0, _asyncToGenerator2.default)(function* (_invite) {
    var invite = _invite;

    if (invite && !invite._id) {
      invite = yield _invite2.default.findById(invite);
    }

    if (!invite || !invite.code) throw new Error('no invite or code');
    var name = invite.name ? invite.name.split(' ')[0] : null;
    if (name) name = name.charAt(0).toUpperCase() + name.slice(1);
    var hi = 'Hi!<br /><br />';

    if (name) {
      hi = "<span style=\"text-transform: capitalize;\">Hi ".concat(name, "!</span><br /><br />");
    }

    var intro = 'You are invited to join Relevant, a social news reader that values <i>quality</i> over <i>clicks</i>.';

    if (invite.invitedByString && invite.invitedByString !== '') {
      intro = "".concat(invite.invitedByString, " invited you to join Relevant, a social news reader that values <i>quality</i> over <i>clicks</i>.");
    }

    var html = "\n      <p>\n      ".concat(hi).concat(intro, "\n      <p>\n\n      <hr/>\n\n      <p>\n      <b>Mobile</b>: Download Relevant from the app store:\n      </p>\n\n      <p>\n        <a\n          href=\"https://itunes.apple.com/us/app/relevant-a-social-news-reader/id1173025051?mt=8\"\n          style=\"display:inline-block;\"\n        >\n         <img\n          alt=\"iOS App Store\"\n          style=\"width:auto; max-height: 40px; height: 40px; max-width:none;\"\n          src=\"https://relevant.community/img/appstore.png\"/>\n        </a>\n\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <a\n          href=\"https://play.google.com/store/apps/details?id=com.relevantnative&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\"\n          style=\"display:inline-block;\"\n        >\n          <img\n            alt=\"Google Play Store\"\n            style=\"width:auto; max-height: 40px; height: 40px; max-width:none;\"\n            src=\"https://relevant.community/img/googleplaystore.png\">\n          </a>\n      </p>\n\n      <p>\n      <b>Desktop</b>: Navigate to https://relevant.community/home and sing up!\n      </p>\n\n      <hr/>\n      <p>\n      <a href=\"https://blog.relevant.community/relevant-an-introduction-5b79ef7afa9\" target=\"_blank\" style=\"text-decoration:none;\">\n      <span>Read Our Mission Statement</span>\n      </a>\n      </p>\n      <p>\n        We created Relevant because we saw how exploitative existing platforms have become \u2014 they treat people like commodities and culture like a slot machine and we are starting to fear their long-term effects on our world.\n      </p>\n\n      <p>\n      At Relevant, we have created a <b>quality metric</b> for the attention economy that lets you share and rank information according to it\u2019s value. Unlike other networks that fill your feed with clickbait and promoted posts, Relevant is optimized for and by <b>you</b>.\n      </p>\n\n      <p>\n      Join RELEVANT and get the best social news reader today \u2014 for a better information environment tomorrow.\n      </p>\n\n      <hr/>\n\n      <p>If you want to get involved or just say hello you can find us on <a href=\"https://join.slack.com/t/relevantcommunity/shared_invite/enQtMjIwMjEwNzUzMjUzLTFkOTkwNzFjN2EzMjFhYTVkZDZmYzU1ZGFlZmY4MzdjNGMyOWIwYjhmYTE2OTQ1NmJlOWVmNjkyODNjM2I4YWI\">Slack</a> or <a href=\"https://twitter.com/relevantfeed\">Twitter</a><br></p><p><br></p>\n      <p>\n      <a href=\"https://relevant.community\">\n      <img src=\"https://relevant.community/img/logo.png\">\n      </a>\n      </p>\n      ");
    html = yield inlineCss(emailStyle + html, {
      url: 'https://relevant.community'
    });
    var data = {
      from: 'Relevant <info@relevant.community>',
      to: invite.email,
      subject: 'Your Relevant Invitation',
      html
    };
    yield (0, _mail.sendEmail)(data);
    invite.status = 'email sent';
    invite = yield invite.save();
    return invite;
  });

  function inviteEamil(_x12) {
    return _inviteEamil.apply(this, arguments);
  }

  return inviteEamil;
}();

exports.adminInvite = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        user
      } = req;
      var {
        invitecode
      } = req.body;
      user = yield exports.handleAdminInvite({
        user,
        invitecode
      });
      return res.status(200).json(user);
    } catch (err) {
      return next(err);
    }
  });

  return function (_x13, _x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();

exports.handleAdminInvite = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2.default)(function* (_ref8) {
    var {
      user,
      invitecode
    } = _ref8;
    if (!invitecode) throw new Error('No invitation code');
    var invite = yield _invite2.default.findOne({
      code: invitecode,
      type: 'admin',
      redeemed: {
        $ne: true
      }
    });
    if (!invite) throw new Error('Missing or used invite');
    var {
      communityId
    } = invite;
    var communityInstance = yield _community.default.findOne({
      _id: communityId
    });
    var role = invite.type === 'admin' ? 'admin' : null;
    yield communityInstance.join(user._id, role);
    invite.redeemed = true;
    yield invite.save();
    var relevance = yield _communityMember.default.findOne({
      user: user._id,
      communityId
    });
    relevance.pagerank = 70;
    yield relevance.save();
    user.relevance = relevance;
    return user;
  });

  return function (_x16) {
    return _ref9.apply(this, arguments);
  };
}();

exports.count = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        user,
        communityMember
      } = req;
      var {
        communityId,
        community
      } = communityMember;
      var number = yield computeInviteNumber({
        user,
        communityId
      });
      return res.status(200).json({
        [community]: number
      });
    } catch (err) {
      return next(err);
    }
  });

  return function (_x17, _x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();

exports.destroy = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2.default)(function* (req, res) {
    var inviteId = req.params.id;

    try {
      yield _invite2.default.findById(inviteId).remove();
    } catch (err) {
      return handleError(res)(err);
    }

    return res.sendStatus(200);
  });

  return function (_x20, _x21) {
    return _ref11.apply(this, arguments);
  };
}();
//# sourceMappingURL=invite.controller.js.map