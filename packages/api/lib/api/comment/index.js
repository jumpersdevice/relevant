'use strict';

var express = require('express');

var controller = require('./comment.controller');

var auth = require('../../auth/auth.service');

var { asyncMiddleware } = require('../../utils/middlewares');

var router = express.Router();
router.get('/', auth.blocked(), asyncMiddleware(controller.index));
router.post('/', auth.isAuthenticated(), auth.communityMember(), controller.create);
router.delete('/:id', auth.isAuthenticated(), controller.delete);
router.put('/', auth.isAuthenticated(), controller.update);
module.exports = router;
//# sourceMappingURL=index.js.map
