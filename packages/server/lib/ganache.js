"use strict";

require('@babel/register');

require('@babel/polyfill');

var {
  deployContract
} = require("./test/setup.eth");

deployContract();
//# sourceMappingURL=ganache.js.map