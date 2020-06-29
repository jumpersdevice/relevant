'use strict';

var express = require('express');

var controller = require('./notification.controller');

var auth = require('../../auth/auth.service');

var router = express.Router();
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/markread', auth.isAuthenticated(), controller.markRead);
router.get('/unread', auth.isAuthenticated(), controller.unread);
router.get('/', auth.isAuthenticated(), controller.show); // router.get('/general', auth.isAuthenticated(), controller.showGeneral);

module.exports = router;
//# sourceMappingURL=index.js.map
