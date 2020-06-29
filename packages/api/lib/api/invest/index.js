'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _express = _interopRequireDefault(require('express'));

var _invest = _interopRequireDefault(require('./invest.controller'));

var _auth = _interopRequireDefault(require('../../auth/auth.service'));

var router = _express.default.Router();

router.post(
  '/bet',
  _auth.default.isAuthenticated(),
  _auth.default.communityMember(),
  _invest.default.bet
);
router.post(
  '/',
  _auth.default.isAuthenticated(),
  _auth.default.communityMember(),
  _invest.default.create
);
router.get('/downvotes', _auth.default.hasRole('admin'), _invest.default.downvotes);
router.get(
  '/:userId',
  _auth.default.blocked(),
  _auth.default.communityMember(),
  _invest.default.show
);
router.get(
  '/post/:postId',
  _auth.default.authMiddleware(),
  _invest.default.postInvestments
);
module.exports = router;
//# sourceMappingURL=index.js.map
