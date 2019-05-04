import Community from './community.model';
import CommunityMember from './community.member.model';
import User from '../user/user.model';
// import Post from './post.model';

// Community.update({}, { currentShares: 0, postCount: 0 }, { multi: true }).exec();

CommunityMember.remove({ 'embeddedUser.handle': 'a' }).exec();

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

export async function findOne(req, res, next) {
  try {
    const { slug } = req.params;
    const community = await Community.findOne({ slug, inactive: { $ne: true } });
    res.status(200).json(community);
  } catch (err) {
    next(err);
  }
}

export async function index(req, res, next) {
  try {
    const communties = await Community.find({ inactive: { $ne: true } })
    .populate({
      path: 'members',
      match: { role: 'admin' }
    })
    .populate({
      path: 'channels',
      match: { channel: true }
    });
    res.status(200).json(communties);
  } catch (err) {
    next(err);
  }
}

export async function members(req, res, next) {
  try {
    const { user } = req;
    let blocked = [];
    if (user) {
      blocked = [...user.blocked, ...user.blockedBy];
    }
    // const userId = user ? user._id : null;
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 20;
    const skip = req.query.skip ? parseInt(req.query.skip, 10) : 0;
    const community = req.params.slug;
    // const isMember = await CommunityMember.findOne({ community, user: userId });
    const users = await CommunityMember.find({
      community,
      'user.embeddedUser._id': {
        $nin: blocked
      }
    })
    .sort({ role: 1, reputation: -1 })
    .limit(limit)
    .skip(skip);
    res.status(200).json(users || []);
  } catch (err) {
    next(err);
  }
}

export async function memberSearch(req, res, next) {
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
        { $or: [{ 'embeddedUser.name': name }, { 'embeddedUser.handle': name }] },
        { 'embeddedUser._id': { $nin: blocked } }
      ]
    };
    const community = req.params.slug;
    CommunityMember.find({ community, ...query })
    .sort({ role: 1, reputation: -1 })
    .limit(parseInt(limit, 10))
    .then(users => {
      res.status(200).json(users || []);
    });
    // res.status(200).json(users);
    // .catch(next);
  } catch (err) {
    next(err);
  }
}

export async function membership(req, res, next) {
  try {
    const user = req.user._id;
    const m = await CommunityMember.find({ user }).sort('role reputation');
    res.status(200).json(m);
  } catch (err) {
    next(err);
  }
}

export async function join(req, res, next) {
  try {
    const userId = req.user._id;
    const { slug } = req.params;
    const community = await Community.findOne({ slug });
    const member = await community.join(userId);
    res.status(200).json(member);
  } catch (err) {
    next(err);
  }
}

export async function leave(req, res, next) {
  try {
    const userId = req.user._id;
    const { slug } = req.params;
    const community = await Community.findOne({ slug });
    await community.leave(userId);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

export async function showAdmins(req, res, next) {
  try {
    const { slug } = req.params;
    const admins = await CommunityMember.find({ slug, role: 'admin' });
    res.status(200).json(admins);
  } catch (err) {
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    // for no only admins create communities
    // TODO relax this and community creator as admin
    if (!req.user || !req.user.role === 'admin') {
      throw new Error("You don't have permission to create a community");
    }
    let community = req.body;
    let { admins } = community;
    admins = await User.find({ handle: { $in: admins } }, '_id');
    community.slug = community.slug.toLowerCase();
    if (RESERVED.indexOf(community.slug) > -1) throw new Error('Reserved slug');
    if (!admins || !admins.length) throw new Error('Please set community admins');
    community = new Community(community);
    community = await community.save();

    // TODO - this should create an invitation!
    admins = admins.map(async admin => {
      try {
        return await community.join(admin._id, 'admin');
      } catch (err) {
        throw err;
      }
    });

    admins = await Promise.all(admins);

    res.status(200).json(community);
  } catch (err) {
    next(err);
  }
}

// export async function createDefaultChannels(req, res, next) {
//   new Post({

//   })
// }

export async function update(req, res, next) {
  try {
    // for no only admins create communities
    const updatedCommunity = req.body;
    const { admins } = updatedCommunity;
    const { user } = req;

    if (!updatedCommunity || !user) return;
    const member = await CommunityMember.findOne({
      _id: updatedCommunity._id,
      user: user._id
    });
    const currentAdmins = await CommunityMember.find({
      communityId: updatedCommunity._id,
      role: 'admin'
    });

    const currentAdminsList = currentAdmins.map(a => a.embeddedUser.handle);
    let newAdmins = admins.filter(a => !currentAdminsList.includes(a));

    const canEdit = user.role === 'admin' || (member && member.role === 'admin');

    if (!canEdit) {
      throw new Error("You don't have permission to edit a community");
    }

    newAdmins = await User.find({ handle: { $in: newAdmins } }, '_id');

    let community = await Community.findOne({ _id: updatedCommunity._id });
    community.set({
      image: updatedCommunity.image,
      name: updatedCommunity.name,
      topics: updatedCommunity.topics,
      description: updatedCommunity.description,
      channels: updatedCommunity.channels
    });
    community = await community.save();

    // TODO - this should create an invitation!
    newAdmins = newAdmins.map(async admin => {
      try {
        return await community.join(admin._id, 'admin');
      } catch (err) {
        throw err;
      }
    });

    newAdmins = await Promise.all(newAdmins);

    let removeAdmins;
    if (user.role === 'admin') {
      removeAdmins = currentAdminsList.filter(a => !admins.includes(a));
      removeAdmins = await User.find({ handle: { $in: removeAdmins } }, '_id');
      removeAdmins = removeAdmins.map(u => u._id.toString());
      await CommunityMember.update(
        { user: { $in: removeAdmins } },
        { role: 'user' },
        { multi: true }
      );
    }

    community.members = [...newAdmins, ...currentAdmins].filter(u =>
      removeAdmins.includes(u.user.toString())
    );

    res.status(200).json(community);
  } catch (err) {
    next(err);
  }
}

export async function remove(req, res, next) {
  try {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('deleting communities is disabled in production');
    }
    const { user } = req;
    if (user.role !== 'admin') {
      throw new Error("you don't have permission to delete this community");
    }

    const userId = req.user._id;
    const { slug } = req.params;
    // check that user is an admin
    const admin = CommunityMember.findOne({
      community: slug,
      user: userId,
      role: 'admin'
    });

    if (!admin) throw new Error('you need to be a community admin to do this');

    // await Community.findOne({ slug }).remove().exec();
    await Community.findOneAndUpdate({ slug }, { inactive: true }, { new: true });

    res.status(200).json('removed');
  } catch (err) {
    next(err);
  }
}
