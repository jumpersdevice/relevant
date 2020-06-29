'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
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

var _pagerankCompute = _interopRequireDefault(require('../../pagerank/pagerankCompute'));

var _postData = _interopRequireDefault(require('../post/postData.model'));

var _community = _interopRequireDefault(require('./community.model'));

var _communityMember = _interopRequireDefault(require('./community.member.model'));

var _user = _interopRequireDefault(require('../user/user.model'));

const RESERVED = [
  'user',
  'admin',
  'info',
  'api',
  'img',
  'fonts',
  'files',
  'home',
  'undefined'
];

async function findOne(req, res, next) {
  try {
    const { user } = req;
    const { slug } = req.params;
    const community = await _community.default.findOne({
      slug,
      inactive: {
        $ne: true
      }
    });
    if (!community) throw new Error(`Community ${slug} doesn't exist`);

    if (community.private) {
      if (!user) throw new Error('This community is private');
      const member = await _communityMember.default.findOne({
        communityId: community._id,
        user: user._id
      });
      if (!member) throw new Error('This community is private');
    }

    res.status(200).json(community);
  } catch (err) {
    next(err);
  }
} // uses middleware for server-sider rendering

async function index(req) {
  const { user } = req;
  const { community } = req.query;
  const onlyPublic =
    user && user.role === 'admin'
      ? {}
      : {
          private: {
            $ne: true
          }
        };
  const onlyVisible =
    user && user.role === 'admin'
      ? {}
      : {
          hidden: {
            $ne: true
          }
        };
  const communties = await _community.default
    .find({
      inactive: {
        $ne: true
      },
      ...onlyPublic,
      $or: [
        onlyVisible,
        {
          slug: community
        }
      ]
    })
    .populate({
      path: 'admins',
      match: {
        role: 'admin'
      }
    })
    .populate({
      path: 'superAdmins',
      match: {
        superAdmin: true
      }
    }); // find private communities where user is a member

  let privateCommunities = [];

  if (user) {
    const memberships = await _communityMember.default
      .find({
        user: user._id
      })
      .populate({
        path: 'communityId',
        match: {
          inactive: {
            $ne: true
          }
        }
      });
    privateCommunities = memberships
      .filter(m => m.communityId)
      .filter(
        m =>
          m.communityId.private === true ||
          (m.communityId.hidden === true && m.communityId.slug !== community)
      )
      .map(m => m.communityId);
  }

  return [...communties, ...privateCommunities].map(c => c.toObject());
}

async function members(req, res, next) {
  try {
    const { user } = req;
    let blocked = [];

    if (user) {
      blocked = [...user.blocked, ...user.blockedBy];
    }

    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 20;
    const skip = req.query.skip ? parseInt(req.query.skip, 10) : 0;
    const community = req.params.slug;
    const users = await _communityMember.default
      .find({
        community,
        'user.embeddedUser._id': {
          $nin: blocked
        }
      })
      .sort({
        role: 1,
        pagerank: -1
      })
      .limit(limit)
      .skip(skip);
    res.status(200).json(users || []);
  } catch (err) {
    next(err);
  }
}

async function memberSearch(req, res, next) {
  try {
    let blocked = [];
    const { user } = req;

    if (user) {
      blocked = [...user.blocked, ...user.blockedBy];
    }

    const { search, limit } = req.query;
    const name = new RegExp(search, 'i');
    const query = {
      $and: [
        {
          $or: [
            {
              'embeddedUser.name': name
            },
            {
              'embeddedUser.handle': name
            }
          ]
        },
        {
          'embeddedUser._id': {
            $nin: blocked
          }
        }
      ]
    };
    const community = req.params.slug;

    _communityMember.default
      .find({
        community,
        ...query
      })
      .sort({
        role: 1,
        reputation: -1
      })
      .limit(parseInt(limit, 10))
      .then(users => {
        res.status(200).json(users || []);
      });
  } catch (err) {
    next(err);
  }
}

async function membership(req, res, next) {
  try {
    const user = req.user._id;
    const m = await _communityMember.default
      .find({
        user
      })
      .sort('role reputation');
    res.status(200).json(m);
  } catch (err) {
    next(err);
  }
}

async function join(req, res, next) {
  try {
    const userId = req.user._id;
    const { slug } = req.params;
    const community = await _community.default.findOne({
      slug
    });
    const member = await community.join(userId);
    res.status(200).json(member);
  } catch (err) {
    next(err);
  }
}

async function leave(req, res, next) {
  try {
    const userId = req.user._id;
    const { slug } = req.params;
    const community = await _community.default.findOne({
      slug
    });
    await community.leave(userId);
    res.status(200).send();
  } catch (err) {
    next(err);
  }
}

async function showAdmins(req, res, next) {
  try {
    const { slug } = req.params;
    const admins = await _communityMember.default.find({
      slug,
      role: 'admin'
    });
    res.status(200).json(admins);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { user } = req;
    if (!user) throw new Error('You need to be logged in');
    const c = req.body;
    const slug = c.slug.toLowerCase();
    if (RESERVED.indexOf(slug) > -1) throw new Error(`The slug ${slug} cannot be used`);
    const newCommunity = {
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
    const { admins = [], superAdmins = [] } = req.body;
    let community = new _community.default(newCommunity);
    community = await community.save();
    const superAdminsAndCreator = [...new Set([...superAdmins, user.handle])]; // order matters here - superAdmins should go first

    const newSuperAdmins = await updateAdmins(
      superAdminsAndCreator,
      'superAdmin',
      community
    );
    const newAdmins = await updateAdmins(admins, 'admin', community);
    community = await community.updateMemeberCount();
    community.admins = newAdmins;
    community.superAdmins = newSuperAdmins;
    res.status(200).json(community);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    // for now only admins create communities
    const updatedCommunity = req.body;
    const { admins, superAdmins } = updatedCommunity;
    const { user, communityMember } = req;
    if (!communityMember.communityId.equals(updatedCommunity._id))
      throw new Error('Community id mismatch');
    if (!updatedCommunity) throw new Error('There was an error processing your request');
    const isSuperAdmin = communityMember && communityMember.superAdmin;
    const canEdit = user.role === 'admin' || isSuperAdmin;
    if (!canEdit) throw new Error("You don't have permission to edit a community");
    let community = await _community.default.findOne({
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
    community = await community.save();
    community = await community.updateMemeberCount(); // order matters here - superAdmins should go first

    const newSuperAdmins = await updateAdmins(superAdmins, 'superAdmin', community);
    const newAdmins = await updateAdmins(admins, 'admin', community);
    community = await community.updateMemeberCount();
    community.admins = newAdmins;
    community.superAdmins = newSuperAdmins;
    res.status(200).json(community); // TODO: only do this when admins change

    await updateReputationScores(community);
  } catch (err) {
    next(err);
  }
}

async function updateReputationScores(community) {
  // Only do this for small communities;
  if (community.memberCount > 100) return;
  await _postData.default.updateMany(
    {
      communityId: community._id
    },
    {
      needsRankUpdate: true
    }
  );
  await (0, _pagerankCompute.default)({
    communityId: community._id,
    community: community.slug,
    debug: false
  });
}
/**
 * upserts admins
 * @param  {[_id]} admins array of user ids
 * @param  {string} type type of admin ('admin', 'superAdmin')
 * @param  {commuinty}
 * @return {[CommunityMembers]} array of community member objects
 */

async function updateAdmins(admins, type, community) {
  const newAdmins = (
    await _user.default.find(
      {
        handle: {
          $in: admins
        }
      },
      '_id'
    )
  ).map(m => m._id);
  const query = {
    admin: {
      role: 'admin'
    },
    superAdmin: {
      superAdmin: true
    }
  };
  const updateFields = {
    admin: {
      role: 'user'
    },
    superAdmin: {
      superAdmin: false
    }
  };
  await _communityMember.default.updateMany(
    {
      user: {
        $nin: newAdmins
      },
      communityId: community._id,
      ...query[type]
    },
    updateFields[type]
  );
  const dontUpdateCount = true; // TODO - should create an invitation

  const newAdminMembers = newAdmins.map(async _id =>
    community.join(_id, type, dontUpdateCount)
  );
  return Promise.all(newAdminMembers);
}

async function remove(req, res, next) {
  try {
    const { user } = req;
    const { id } = req.params; // check that user is an admin

    const member = await _communityMember.default.findOne({
      communityId: id,
      user: user._id,
      role: 'admin'
    });
    const canDelete = (member && member.superAdmin) || user.role === 'admin';
    if (!canDelete) throw new Error('you need to be a community admin to do this'); // await Community.findOne({ slug }).remove().exec();

    const community = await _community.default.findOneAndUpdate(
      {
        _id: id
      },
      {
        inactive: true
      },
      {
        new: true
      }
    );
    await _communityMember.default.update(
      {
        communityId: community._id
      },
      {
        deletedCommunity: true
      }
    );
    res.status(200).json('removed');
  } catch (err) {
    next(err);
  }
}
//# sourceMappingURL=community.controller.js.map
