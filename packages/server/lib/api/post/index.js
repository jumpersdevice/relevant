"use strict";

var express = require('express');

var controller = require("./post.controller");

var auth = require("../../auth/auth.service");

var {
  asyncMiddleware
} = require("../../utils/middlewares");

var router = express.Router();
router.post('/', auth.isAuthenticated(), auth.communityMember(), controller.create);
router.post('/sendPostNotification', auth.hasRole('admin'), controller.sendPostNotification);
router.put('/', auth.isAuthenticated(), auth.communityMember(), controller.update);
router.put('/flag', auth.isAuthenticated(), controller.flag);
router.get('/flagged', auth.hasRole('admin'), controller.flagged); // router.get('/', auth.authMiddleware(), controller.index);

router.get('/readable', controller.readable);
router.get('/topPosts', controller.topPosts);
router.get('/:id', auth.blocked(), asyncMiddleware(controller.index));
router.get('/user/:id', auth.blocked(), controller.userPosts);
router.get('/preview/generate', controller.preview);
router.delete('/:id', auth.isAuthenticated(), controller.remove);
module.exports = router;
//# sourceMappingURL=index.js.map