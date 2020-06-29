"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findOne = findOne;
exports.index = index;
exports.members = members;
exports.memberSearch = memberSearch;
exports.membership = membership;
exports.join = join;
exports.leave = leave;
exports.showAdmins = showAdmins;
exports.create = create;
exports.update = update;
exports.remove = remove;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pagerankCompute = _interopRequireDefault(require("../../pagerank/pagerankCompute"));

var _postData = _interopRequireDefault(require("../post/postData.model"));

var _community = _interopRequireDefault(require("./community.model"));

var _communityMember = _interopRequireDefault(require("./community.member.model"));

var _user = _interopRequireDefault(require("../user/user.model"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RESERVED = ['user', 'admin', 'info', 'api', 'img', 'fonts', 'files', 'home', 'undefined'];

function findOne(_x, _x2, _x3) {
  return _findOne.apply(this, arguments);
} // uses middleware for server-sider rendering


function _findOne() {
  _findOne = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        user
      } = req;
      var {
        slug
      } = req.params;
      var community = yield _community.default.findOne({
        slug,
        inactive: {
          $ne: true
        }
      });
      if (!community) throw new Error("Community ".concat(slug, " doesn't exist"));

      if (community.private) {
        if (!user) throw new Error('This community is private');
        var member = yield _communityMember.default.findOne({
          communityId: community._id,
          user: user._id
        });
        if (!member) throw new Error('This community is private');
      }

      res.status(200).json(community);
    } catch (err) {
      next(err);
    }
  });
  return _findOne.apply(this, arguments);
}

function index(_x4) {
  return _index.apply(this, arguments);
}

function _index() {
  _index = (0, _asyncToGenerator2.default)(function* (req) {
    var {
      user
    } = req;
    var {
      community
    } = req.query;
    var onlyPublic = user && user.role === 'admin' ? {} : {
      private: {
        $ne: true
      }
    };
    var onlyVisible = user && user.role === 'admin' ? {} : {
      hidden: {
        $ne: true
      }
    };
    var communties = yield _community.default.find(_objectSpread(_objectSpread({
      inactive: {
        $ne: true
      }
    }, onlyPublic), {}, {
      $or: [onlyVisible, {
        slug: community
      }]
    })).populate({
      path: 'admins',
      match: {
        role: 'admin'
      }
    }).populate({
      path: 'superAdmins',
      match: {
        superAdmin: true
      }
    }); // find private communities where user is a member

    var privateCommunities = [];

    if (user) {
      var memberships = yield _communityMember.default.find({
        user: user._id
      }).populate({
        path: 'communityId',
        match: {
          inactive: {
            $ne: true
          }
        }
      });
      privateCommunities = memberships.filter(m => m.communityId).filter(m => m.communityId.private === true || m.communityId.hidden === true && m.communityId.slug !== community).map(m => m.communityId);
    }

    return [...communties, ...privateCommunities].map(c => c.toObject());
  });
  return _index.apply(this, arguments);
}

function members(_x5, _x6, _x7) {
  return _members.apply(this, arguments);
}

function _members() {
  _members = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        user
      } = req;
      var blocked = [];

      if (user) {
        blocked = [...user.blocked, ...user.blockedBy];
      }

      var limit = req.query.limit ? parseInt(req.query.limit, 10) : 20;
      var skip = req.query.skip ? parseInt(req.query.skip, 10) : 0;
      var community = req.params.slug;
      var users = yield _communityMember.default.find({
        community,
        'user.embeddedUser._id': {
          $nin: blocked
        }
      }).sort({
        role: 1,
        pagerank: -1
      }).limit(limit).skip(skip);
      res.status(200).json(users || []);
    } catch (err) {
      next(err);
    }
  });
  return _members.apply(this, arguments);
}

function memberSearch(_x8, _x9, _x10) {
  return _memberSearch.apply(this, arguments);
}

function _memberSearch() {
  _memberSearch = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var blocked = [];
      var {
        user
      } = req;

      if (user) {
        blocked = [...user.blocked, ...user.blockedBy];
      }

      var {
        search,
        limit
      } = req.query;
      var name = new RegExp(search, 'i');
      var query = {
        $and: [{
          $or: [{
            'embeddedUser.name': name
          }, {
            'embeddedUser.handle': name
          }]
        }, {
          'embeddedUser._id': {
            $nin: blocked
          }
        }]
      };
      var community = req.params.slug;

      _communityMember.default.find(_objectSpread({
        community
      }, query)).sort({
        role: 1,
        reputation: -1
      }).limit(parseInt(limit, 10)).then(users => {
        res.status(200).json(users || []);
      });
    } catch (err) {
      next(err);
    }
  });
  return _memberSearch.apply(this, arguments);
}

function membership(_x11, _x12, _x13) {
  return _membership.apply(this, arguments);
}

function _membership() {
  _membership = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var user = req.user._id;
      var m = yield _communityMember.default.find({
        user
      }).sort('role reputation');
      res.status(200).json(m);
    } catch (err) {
      next(err);
    }
  });
  return _membership.apply(this, arguments);
}

function join(_x14, _x15, _x16) {
  return _join.apply(this, arguments);
}

function _join() {
  _join = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var userId = req.user._id;
      var {
        slug
      } = req.params;
      var community = yield _community.default.findOne({
        slug
      });
      var member = yield community.join(userId);
      res.status(200).json(member);
    } catch (err) {
      next(err);
    }
  });
  return _join.apply(this, arguments);
}

function leave(_x17, _x18, _x19) {
  return _leave.apply(this, arguments);
}

function _leave() {
  _leave = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var userId = req.user._id;
      var {
        slug
      } = req.params;
      var community = yield _community.default.findOne({
        slug
      });
      yield community.leave(userId);
      res.status(200).send();
    } catch (err) {
      next(err);
    }
  });
  return _leave.apply(this, arguments);
}

function showAdmins(_x20, _x21, _x22) {
  return _showAdmins.apply(this, arguments);
}

function _showAdmins() {
  _showAdmins = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        slug
      } = req.params;
      var admins = yield _communityMember.default.find({
        slug,
        role: 'admin'
      });
      res.status(200).json(admins);
    } catch (err) {
      next(err);
    }
  });
  return _showAdmins.apply(this, arguments);
}

function create(_x23, _x24, _x25) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        user
      } = req;
      if (!user) throw new Error('You need to be logged in');
      var c = req.body;
      var slug = c.slug.toLowerCase();
      if (RESERVED.indexOf(slug) > -1) throw new Error("The slug ".concat(slug, " cannot be used"));
      var newCommunity = {
        slug,
        image: c.image,
        name: c.name,
        topics: c.topics,
        description: c.description,
        channels: c.channels,
        private: c.private,
        hidden: c.hidden,
        betEnabled: c.betEnabled
      };
      var {
        admins = [],
        superAdmins = []
      } = req.body;
      var community = new _community.default(newCommunity);
      community = yield community.save();
      var superAdminsAndCreator = [...new Set([...superAdmins, user.handle])]; // order matters here - superAdmins should go first

      var newSuperAdmins = yield updateAdmins(superAdminsAndCreator, 'superAdmin', community);
      var newAdmins = yield updateAdmins(admins, 'admin', community);
      community = yield community.updateMemeberCount();
      community.admins = newAdmins;
      community.superAdmins = newSuperAdmins;
      res.status(200).json(community);
    } catch (err) {
      next(err);
    }
  });
  return _create.apply(this, arguments);
}

function update(_x26, _x27, _x28) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      // for now only admins create communities
      var updatedCommunity = req.body;
      var {
        admins,
        superAdmins
      } = updatedCommunity;
      var {
        user,
        communityMember
      } = req;
      if (!communityMember.communityId.equals(updatedCommunity._id)) throw new Error('Community id mismatch');
      if (!updatedCommunity) throw new Error('There was an error processing your request');
      var isSuperAdmin = communityMember && communityMember.superAdmin;
      var canEdit = user.role === 'admin' || isSuperAdmin;
      if (!canEdit) throw new Error("You don't have permission to edit a community");
      var community = yield _community.default.findOne({
        _id: updatedCommunity._id
      });
      community.set({
        image: updatedCommunity.image,
        name: updatedCommunity.name,
        topics: updatedCommunity.topics,
        description: updatedCommunity.description,
        channels: updatedCommunity.channels,
        private: updatedCommunity.private,
        hidden: updatedCommunity.hidden,
        betEnabled: updatedCommunity.betEnabled,
        customParams: updatedCommunity.customParams,
        defaultPost: updatedCommunity.defaultPost
      });
      community = yield community.save();
      community = yield community.updateMemeberCount(); // order matters here - superAdmins should go first

      var newSuperAdmins = yield updateAdmins(superAdmins, 'superAdmin', community);
      var newAdmins = yield updateAdmins(admins, 'admin', community);
      community = yield community.updateMemeberCount();
      community.admins = newAdmins;
      community.superAdmins = newSuperAdmins;
      res.status(200).json(community); // TODO: only do this when admins change

      yield updateReputationScores(community);
    } catch (err) {
      next(err);
    }
  });
  return _update.apply(this, arguments);
}

function updateReputationScores(_x29) {
  return _updateReputationScores.apply(this, arguments);
}
/**
 * upserts admins
 * @param  {[_id]} admins array of user ids
 * @param  {string} type type of admin ('admin', 'superAdmin')
 * @param  {commuinty}
 * @return {[CommunityMembers]} array of community member objects
 */


function _updateReputationScores() {
  _updateReputationScores = (0, _asyncToGenerator2.default)(function* (community) {
    // Only do this for small communities;
    if (community.memberCount > 100) return;
    yield _postData.default.updateMany({
      communityId: community._id
    }, {
      needsRankUpdate: true
    });
    yield (0, _pagerankCompute.default)({
      communityId: community._id,
      community: community.slug,
      debug: false
    });
  });
  return _updateReputationScores.apply(this, arguments);
}

function updateAdmins(_x30, _x31, _x32) {
  return _updateAdmins.apply(this, arguments);
}

function _updateAdmins() {
  _updateAdmins = (0, _asyncToGenerator2.default)(function* (admins, type, community) {
    var newAdmins = (yield _user.default.find({
      handle: {
        $in: admins
      }
    }, '_id')).map(m => m._id);
    var query = {
      admin: {
        role: 'admin'
      },
      superAdmin: {
        superAdmin: true
      }
    };
    var updateFields = {
      admin: {
        role: 'user'
      },
      superAdmin: {
        superAdmin: false
      }
    };
    yield _communityMember.default.updateMany(_objectSpread({
      user: {
        $nin: newAdmins
      },
      communityId: community._id
    }, query[type]), updateFields[type]);
    var dontUpdateCount = true; // TODO - should create an invitation

    var newAdminMembers = newAdmins.map( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)(function* (_id) {
        return community.join(_id, type, dontUpdateCount);
      });

      return function (_x36) {
        return _ref.apply(this, arguments);
      };
    }());
    return Promise.all(newAdminMembers);
  });
  return _updateAdmins.apply(this, arguments);
}

function remove(_x33, _x34, _x35) {
  return _remove.apply(this, arguments);
}

function _remove() {
  _remove = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    try {
      var {
        user
      } = req;
      var {
        id
      } = req.params; // check that user is an admin

      var member = yield _communityMember.default.findOne({
        communityId: id,
        user: user._id,
        role: 'admin'
      });
      var canDelete = member && member.superAdmin || user.role === 'admin';
      if (!canDelete) throw new Error('you need to be a community admin to do this'); // await Community.findOne({ slug }).remove().exec();

      var community = yield _community.default.findOneAndUpdate({
        _id: id
      }, {
        inactive: true
      }, {
        new: true
      });
      yield _communityMember.default.update({
        communityId: community._id
      }, {
        deletedCommunity: true
      });
      res.status(200).json('removed');
    } catch (err) {
      next(err);
    }
  });
  return _remove.apply(this, arguments);
}
//# sourceMappingURL=community.controller.js.map