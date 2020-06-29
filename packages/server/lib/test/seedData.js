"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.getPosts = getPosts;
exports.getCommunities = getCommunities;
exports.setupTestData = setupTestData;
exports.setupVotes = setupVotes;

var _post = _interopRequireDefault(require("../api/post/post.model"));

var _postData = _interopRequireDefault(require("../api/post/postData.model"));

var _communityMember = _interopRequireDefault(require("../api/community/community.member.model"));

var _earnings = _interopRequireDefault(require("../api/earnings/earnings.model"));

var _communityFeed = _interopRequireDefault(require("../api/communityFeed/communityFeed.model"));

var _treasury = _interopRequireDefault(require("../api/treasury/treasury.model"));

var _link = _interopRequireDefault(require("../api/post/link.model"));

var _invest = _interopRequireDefault(require("../api/invest/invest.model"));

var _community2 = _interopRequireDefault(require("../api/community/community.model"));

var _user2 = _interopRequireDefault(require("../api/user/user.model"));

var _post2 = require("@r3l/app/lib/mockdata/post");

var _user3 = require("@r3l/app/lib/mockdata/user");

var _community3 = require("@r3l/app/lib/mockdata/community");

// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
// eslint-disable-line
let userInstances = {};
let communityInstances = {};
let postInstances = {};

function getUsers() {
  return userInstances;
}

function getPosts() {
  return postInstances;
}

function getCommunities() {
  return communityInstances;
}

async function setupTestData() {
  await setupCommunities();
  await setupUsers();
  await setupMembers();
  await setupPosts();
  await setupVotes();
}

async function setupPosts() {
  let link1 = new _post.default(_post2.linkPost1);
  await link1.save();
  link1 = await link1.addPostData(); // cross-post link1 to crypto community

  await link1.addPostData({ ..._post2.linkPost1,
    ..._post2.linkPost1.altCommunity
  });
  link1.insertIntoFeed(_post2.linkPost1.communityId);
  let link2 = new _post.default(_post2.linkPost2);
  await link2.save();
  link2 = await link2.addPostData();
  let link3 = new _post.default(_post2.linkPost3);
  await link3.save();
  link3 = await link3.addPostData();
  let link4 = new _post.default(_post2.linkPost4);
  await link4.save();
  link4 = await link4.addPostData();
  let link5 = new _post.default(_post2.linkPost5);
  await link5.save();
  link5 = await link5.addPostData();
  delete _post2.post1.link;
  let postI1 = new _post.default(_post2.post1);
  await postI1.save();
  postI1 = await postI1.addPostData();
  const addToFeed = [link1, link2, link3, link4, link5].map(async p => {
    await p.upsertMetaPost(undefined, p.toObject());
    return p.insertIntoFeed(p.communityId);
  });
  await Promise.all(addToFeed);
  postInstances = {
    postI1,
    link1,
    link2,
    link3,
    link4,
    link5
  };
}

async function setupUsers() {
  let users = _user3.allUsers.map(async _user => {
    delete _user.relevance;
    const user = new _user2.default(_user);
    return user.save();
  });

  users = await Promise.all(users);
  const alice = users.find(u => u.handle === 'alice');
  const bob = users.find(u => u.handle === 'bob');
  const carol = users.find(u => u.handle === 'carol');
  return userInstances = {
    alice,
    bob,
    carol
  };
}

async function setupCommunities() {
  let communities = _community3.allCommunities.map(async _community => {
    const community = new _community2.default(_community);
    return community.save();
  });

  communities = await Promise.all(communities);
  const relevant = communities.find(c => c.slug === 'relevant');
  const crypto = communities.find(c => c.slug === 'crypto');
  return communityInstances = {
    relevant,
    crypto
  };
}

async function setupMembers() {
  const {
    relevant,
    crypto
  } = communityInstances;
  const {
    alice,
    bob,
    carol
  } = userInstances;
  await relevant.join(alice._id, 'admin');
  await relevant.join(bob._id);
  await relevant.join(carol._id);
  await crypto.join(alice._id, 'admin');
  await crypto.join(bob._id);
}

async function setupVotes() {
  const {
    relevant,
    crypto
  } = communityInstances;
  const {
    alice,
    bob,
    carol
  } = userInstances;
  const votes = [];
  votes[0] = new _invest.default({
    investor: alice._id,
    author: bob._id,
    amount: 1,
    ownPost: false,
    communityId: relevant._id,
    community: relevant.slug
  });
  votes[1] = new _invest.default({
    investor: alice._id,
    author: bob._id,
    amount: 1,
    ownPost: false,
    communityId: crypto._id,
    community: crypto.slug
  });
  votes[2] = new _invest.default({
    investor: alice._id,
    author: carol._id,
    amount: 1,
    ownPost: false,
    communityId: relevant._id,
    community: relevant.slug
  });
  votes[3] = new _invest.default({
    investor: alice._id,
    author: bob._id,
    amount: 1,
    ownPost: false,
    communityId: crypto._id,
    community: crypto.slug
  });
  return Promise.all(votes.map(v => v.save()));
}
//# sourceMappingURL=seedData.js.map