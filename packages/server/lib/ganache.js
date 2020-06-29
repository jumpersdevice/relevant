"use strict";

require('@babel/register');

require('@babel/polyfill');

const {
  deployContract
} = require("./test/setup.eth");

deployContract();
//# sourceMappingURL=ganache.js.map