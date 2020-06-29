'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getUsers = getUsers;
exports.getPosts = getPosts;
exports.getCommunities = getCommunities;
exports.setupTestData = setupTestData;
exports.setupVotes = setupVotes;

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _post = _interopRequireDefault(require('../api/post/post.model'));

var _postData = _interopRequireDefault(require('../api/post/postData.model'));

var _communityMember = _interopRequireDefault(
  require('../api/community/community.member.model')
);

var _earnings = _interopRequireDefault(require('../api/earnings/earnings.model'));

var _communityFeed = _interopRequireDefault(
  require('../api/communityFeed/communityFeed.model')
);

var _treasury = _interopRequireDefault(require('../api/treasury/treasury.model'));

var _link = _interopRequireDefault(require('../api/post/link.model'));

var _invest = _interopRequireDefault(require('../api/invest/invest.model'));

var _community2 = _interopRequireDefault(require('../api/community/community.model'));

var _user2 = _interopRequireDefault(require('../api/user/user.model'));

var _post2 = require('@r3l/app/lib/mockdata/post');

var _user3 = require('@r3l/app/lib/mockdata/user');

var _community3 = require('@r3l/app/lib/mockdata/community');

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

var userInstances = {};
var communityInstances = {};
var postInstances = {};

function getUsers() {
  return userInstances;
}

function getPosts() {
  return postInstances;
}

function getCommunities() {
  return communityInstances;
}

function setupTestData() {
  return _setupTestData.apply(this, arguments);
}

function _setupTestData() {
  _setupTestData = (0, _asyncToGenerator2.default)(function*() {
    yield setupCommunities();
    yield setupUsers();
    yield setupMembers();
    yield setupPosts();
    yield setupVotes();
  });
  return _setupTestData.apply(this, arguments);
}

function setupPosts() {
  return _setupPosts.apply(this, arguments);
}

function _setupPosts() {
  _setupPosts = (0, _asyncToGenerator2.default)(function*() {
    var link1 = new _post.default(_post2.linkPost1);
    yield link1.save();
    link1 = yield link1.addPostData(); // cross-post link1 to crypto community

    yield link1.addPostData(
      _objectSpread(_objectSpread({}, _post2.linkPost1), _post2.linkPost1.altCommunity)
    );
    link1.insertIntoFeed(_post2.linkPost1.communityId);
    var link2 = new _post.default(_post2.linkPost2);
    yield link2.save();
    link2 = yield link2.addPostData();
    var link3 = new _post.default(_post2.linkPost3);
    yield link3.save();
    link3 = yield link3.addPostData();
    var link4 = new _post.default(_post2.linkPost4);
    yield link4.save();
    link4 = yield link4.addPostData();
    var link5 = new _post.default(_post2.linkPost5);
    yield link5.save();
    link5 = yield link5.addPostData();
    delete _post2.post1.link;
    var postI1 = new _post.default(_post2.post1);
    yield postI1.save();
    postI1 = yield postI1.addPostData();
    var addToFeed = [link1, link2, link3, link4, link5].map(
      /*#__PURE__*/ (function() {
        var _ref = (0, _asyncToGenerator2.default)(function*(p) {
          yield p.upsertMetaPost(undefined, p.toObject());
          return p.insertIntoFeed(p.communityId);
        });

        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    yield Promise.all(addToFeed);
    postInstances = {
      postI1,
      link1,
      link2,
      link3,
      link4,
      link5
    };
  });
  return _setupPosts.apply(this, arguments);
}

function setupUsers() {
  return _setupUsers.apply(this, arguments);
}

function _setupUsers() {
  _setupUsers = (0, _asyncToGenerator2.default)(function*() {
    var users = _user3.allUsers.map(
      /*#__PURE__*/ (function() {
        var _ref2 = (0, _asyncToGenerator2.default)(function*(_user) {
          delete _user.relevance;
          var user = new _user2.default(_user);
          return user.save();
        });

        return function(_x2) {
          return _ref2.apply(this, arguments);
        };
      })()
    );

    users = yield Promise.all(users);
    var alice = users.find(u => u.handle === 'alice');
    var bob = users.find(u => u.handle === 'bob');
    var carol = users.find(u => u.handle === 'carol');
    return (userInstances = {
      alice,
      bob,
      carol
    });
  });
  return _setupUsers.apply(this, arguments);
}

function setupCommunities() {
  return _setupCommunities.apply(this, arguments);
}

function _setupCommunities() {
  _setupCommunities = (0, _asyncToGenerator2.default)(function*() {
    var communities = _community3.allCommunities.map(
      /*#__PURE__*/ (function() {
        var _ref3 = (0, _asyncToGenerator2.default)(function*(_community) {
          var community = new _community2.default(_community);
          return community.save();
        });

        return function(_x3) {
          return _ref3.apply(this, arguments);
        };
      })()
    );

    communities = yield Promise.all(communities);
    var relevant = communities.find(c => c.slug === 'relevant');
    var crypto = communities.find(c => c.slug === 'crypto');
    return (communityInstances = {
      relevant,
      crypto
    });
  });
  return _setupCommunities.apply(this, arguments);
}

function setupMembers() {
  return _setupMembers.apply(this, arguments);
}

function _setupMembers() {
  _setupMembers = (0, _asyncToGenerator2.default)(function*() {
    var { relevant, crypto } = communityInstances;
    var { alice, bob, carol } = userInstances;
    yield relevant.join(alice._id, 'admin');
    yield relevant.join(bob._id);
    yield relevant.join(carol._id);
    yield crypto.join(alice._id, 'admin');
    yield crypto.join(bob._id);
  });
  return _setupMembers.apply(this, arguments);
}

function setupVotes() {
  return _setupVotes.apply(this, arguments);
}

function _setupVotes() {
  _setupVotes = (0, _asyncToGenerator2.default)(function*() {
    var { relevant, crypto } = communityInstances;
    var { alice, bob, carol } = userInstances;
    var votes = [];
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
  });
  return _setupVotes.apply(this, arguments);
}
//# sourceMappingURL=seedData.js.map
