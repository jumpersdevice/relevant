"use strict";

var _community = require("./community.auth");

var express = require('express');

var controller = require("./community.controller");

var auth = require("../../auth/auth.service");

var {
  asyncMiddleware
} = require("../../utils/middlewares");

var router = express.Router();
router.get('/:slug/members', auth.blocked(), controller.members); // Search by embedded user handle and name

router.get('/:slug/members/search', auth.blocked(), controller.memberSearch);
router.get('/membership/:user', auth.isAuthenticated(), controller.membership);
router.get('/', auth.currentUser(), asyncMiddleware(controller.index));
router.get('/:slug', auth.isAuthenticated(), controller.findOne);
router.get('/:slug/checkAuth', auth.isAuthenticated(), auth.communityMember(), _community.checkAuthRoute);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:slug', auth.isAuthenticated(), auth.communityMember('superAdmin'), controller.update);
router.put('/:slug/join', auth.isAuthenticated(), controller.join);
router.put('/:slug/leave', auth.isAuthenticated(), controller.leave);
router.delete('/:id', auth.isAuthenticated(), controller.remove);
module.exports = router;
//# sourceMappingURL=index.js.map