'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.checkAuthRoute = checkAuthRoute;
exports.checkCommunityAuth = checkCommunityAuth;

var _request = _interopRequireDefault(require('request'));

var _util = require('util');

var _ethers = require('ethers');

var _contract = require('../../utils/contract');

var _pagerankCompute = _interopRequireDefault(require('../../pagerank/pagerankCompute'));

var _community = _interopRequireDefault(require('./community.model'));

const requestAsync = (0, _util.promisify)(_request.default);

const getAssetsUrl = address =>
  `https://map-api-direct.foam.space:443/user/${address}/assets`;

const foamToken = '0x4946fcea7c692606e8908002e55a582af44ac121'; // const dummyAddress = '0x222861f16354020F62bBfa0A878B2F047a385576';

const foamParams = {
  auth: {
    tokens: 100,
    points: 5
  }
};

async function initFoamParams() {
  const foam = await _community.default.findOne({
    slug: 'foam'
  });
  if (!foam || foam.customParams) return;
  await foam.setCustomParams(foamParams);
}

async function checkAuthRoute(req, res, next) {
  try {
    const { user, communityMember } = req;
    const { communityId } = communityMember;
    await checkCommunityAuth({
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
}

async function checkCommunityAuth({ user, communityId, communityMember }) {
  let community = await _community.default.findOne({
    _id: communityId
  });
  if (community.slug !== 'foam') return true;

  if (!community.customParams) {
    community = await initFoamParams();
  }

  const { tokens, points } = community.customParams.auth;
  const { ethLogin } = user; // FOR TESTING ONLY
  // const ethLogin = dummyAddress;

  if (!ethLogin) {
    throw new Error(
      'You need to connect the Ethereum address you use with FOAM in order to participate in this forum.\nYou can connect your address with Metamask via Wallet -> Connect Wallet.'
    );
  }

  const res = await requestAsync({
    url: getAssetsUrl(ethLogin)
  });
  const { verifiedPOIs, pendingPOIs } = JSON.parse(res.body);
  const totalPoints = verifiedPOIs + pendingPOIs || 0;

  if (!totalPoints || totalPoints < points) {
    throw new Error(
      `You can participate in this forum only after you have:\n - added ${points} points of interest to the FOAM map\n - have a balance of at least ${tokens} FOAM tokens`
    );
  }

  const balanceWei = await (0, _contract.getTokenBalance)({
    address: ethLogin,
    tokenAddress: foamToken
  });

  const balance = _ethers.utils.formatEther(balanceWei);

  if (balance < tokens)
    throw new Error(
      `You can participate in this forum only after you have:\n - added ${points} points of interest to the FOAM map\n - have a balance of at least ${tokens} FOAM tokens`
    ); // if (!communityMember || !communityMember.role !== 'admin') {
  // await community.join(user._id, 'admin');

  if (!communityMember) {
    await community.join(user._id);
  }

  if (communityMember.pagerank === 0) {
    (0, _pagerankCompute.default)({
      communityId: community._id,
      community: community.slug
    });
  }

  if (communityMember.defaultWeight !== totalPoints + Math.log(tokens + 1)) {
    communityMember.defaultWeight = totalPoints + Math.log(tokens + 1); // communityMember.customAdminWeight = totalPoints + Math.log(tokens + 1);

    await communityMember.save();
  }

  return true;
}
//# sourceMappingURL=community.auth.js.map
