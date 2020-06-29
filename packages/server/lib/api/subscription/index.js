"use strict";

var express = require('express');

var controller = require("./subscription.controller");

var auth = require("../../auth/auth.service");

var router = express.Router();
router.get('/user', auth.isAuthenticated(), controller.index);
router.get('/search', controller.search);
module.exports = router;
//# sourceMappingURL=index.js.map