"use strict";

var express = require('express');

var controller = require("./tag.controller");

var auth = require("../../auth/auth.service");

var router = express.Router();
router.post('/', auth.hasRole('admin'), controller.create);
router.put('/categories', auth.hasRole('admin'), controller.update);
router.get('/', controller.index);
router.get('/categories', controller.categories);
router.get('/search/:term', controller.search);
module.exports = router;
//# sourceMappingURL=index.js.map