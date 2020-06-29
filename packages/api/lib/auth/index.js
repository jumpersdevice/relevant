"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _web = _interopRequireDefault(require("./web3"));

var express = require('express');

var config = require("../config/config");

var User = require("../api/user/user.model"); // Passport Configuration


require("./local/passport").setup(User, config);

require("./twitter/passport").setup(User, config);

require("./facebook/passport").setup(User, config);

require("./reddit/passport");

var router = express.Router();
router.use('/web3', _web.default);
router.use('/local', require("./local"));
router.use('/facebook', require("./facebook"));
router.use('/twitter', require("./twitter"));
router.use('/reddit', require("./reddit"));
module.exports = router;
//# sourceMappingURL=index.js.map