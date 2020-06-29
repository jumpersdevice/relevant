"use strict";

var express = require('express');

var controller = require("./statistics.controller");

var auth = require("../../auth/auth.service");

var router = express.Router();
router.get('/user', auth.isAuthenticated(), auth.communityMember(), controller.user);
module.exports = router;
//# sourceMappingURL=index.js.map