'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.checkAuthRoute = checkAuthRoute;
exports.checkCommunityAuth = checkCommunityAuth;

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _request = _interopRequireDefault(require('request'));

var _util = require('util');

var _ethers = require('ethers');

var _contract = require('../../utils/contract');

var _pagerankCompute = _interopRequireDefault(require('../../pagerank/pagerankCompute'));

var _community = _interopRequireDefault(require('./community.model'));

var requestAsync = (0, _util.promisify)(_request.default);

var getAssetsUrl = address =>
  'https://map-api-direct.foam.space:443/user/'.concat(address, '/assets');

var foamToken = '0x4946fcea7c692606e8908002e55a582af44ac121'; // const dummyAddress = '0x222861f16354020F62bBfa0A878B2F047a385576';

var foamParams = {
  auth: {
    tokens: 100,
    points: 5
  }
};

function initFoamParams() {
  return _initFoamParams.apply(this, arguments);
}

function _initFoamParams() {
  _initFoamParams = (0, _asyncToGenerator2.default)(function*() {
    var foam = yield _community.default.findOne({
      slug: 'foam'
    });
    if (!foam || foam.customParams) return;
    yield foam.setCustomParams(foamParams);
  });
  return _initFoamParams.apply(this, arguments);
}

function checkAuthRoute(_x, _x2, _x3) {
  return _checkAuthRoute.apply(this, arguments);
}

function _checkAuthRoute() {
  _checkAuthRoute = (0, _asyncToGenerator2.default)(function*(req, res, next) {
    try {
      var { user, communityMember } = req;
      var { communityId } = communityMember;
      yield checkCommunityAuth({
        user,
        communityId,
        communityMember
      });
      res.status(200).json({
        OK: true
      });
    } catch (err) {
      next(err);
    }
  });
  return _checkAuthRoute.apply(this, arguments);
}

function checkCommunityAuth(_x4) {
  return _checkCommunityAuth.apply(this, arguments);
}

function _checkCommunityAuth() {
  _checkCommunityAuth = (0, _asyncToGenerator2.default)(function*(_ref) {
    var { user, communityId, communityMember } = _ref;
    var community = yield _community.default.findOne({
      _id: communityId
    });
    if (community.slug !== 'foam') return true;

    if (!community.customParams) {
      community = yield initFoamParams();
    }

    var { tokens, points } = community.customParams.auth;
    var { ethLogin } = user; // FOR TESTING ONLY
    // const ethLogin = dummyAddress;

    if (!ethLogin) {
      throw new Error(
        'You need to connect the Ethereum address you use with FOAM in order to participate in this forum.\nYou can connect your address with Metamask via Wallet -> Connect Wallet.'
      );
    }

    var res = yield requestAsync({
      url: getAssetsUrl(ethLogin)
    });
    var { verifiedPOIs, pendingPOIs } = JSON.parse(res.body);
    var totalPoints = verifiedPOIs + pendingPOIs || 0;

    if (!totalPoints || totalPoints < points) {
      throw new Error(
        'You can participate in this forum only after you have:\n - added '
          .concat(
            points,
            ' points of interest to the FOAM map\n - have a balance of at least '
          )
          .concat(tokens, ' FOAM tokens')
      );
    }

    var balanceWei = yield (0, _contract.getTokenBalance)({
      address: ethLogin,
      tokenAddress: foamToken
    });

    var balance = _ethers.utils.formatEther(balanceWei);

    if (balance < tokens)
      throw new Error(
        'You can participate in this forum only after you have:\n - added '
          .concat(
            points,
            ' points of interest to the FOAM map\n - have a balance of at least '
          )
          .concat(tokens, ' FOAM tokens')
      ); // if (!communityMember || !communityMember.role !== 'admin') {
    // await community.join(user._id, 'admin');

    if (!communityMember) {
      yield community.join(user._id);
    }

    if (communityMember.pagerank === 0) {
      (0, _pagerankCompute.default)({
        communityId: community._id,
        community: community.slug
      });
    }

    if (communityMember.defaultWeight !== totalPoints + Math.log(tokens + 1)) {
      communityMember.defaultWeight = totalPoints + Math.log(tokens + 1); // communityMember.customAdminWeight = totalPoints + Math.log(tokens + 1);

      yield communityMember.save();
    }

    return true;
  });
  return _checkCommunityAuth.apply(this, arguments);
}
//# sourceMappingURL=community.auth.js.map
