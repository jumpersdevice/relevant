const base = require('../../jest.config.base.js');
const pack = require('./package.json');

const packageRoot = `<rootDir>/packages/${pack.name.replace('@r3l/', '')}`;

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
  rootDir: '../..',
  roots: [packageRoot],
  globalSetup: `${packageRoot}/src/test/setup`,
  globalTeardown: `${packageRoot}/src/test/teardown`,
  testEnvironment: `${packageRoot}/src/test/mongo.environment`,
  transform: { '\\.(js|ts)$': ['babel-jest', { rootMode: 'upward' }] },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|mp4)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [`${packageRoot}/src/test/testDbSetup`],
  setupFiles: [`${packageRoot}/src/utils/env`]
};
