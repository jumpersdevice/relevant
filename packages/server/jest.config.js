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
  // moduleDirectories: ['node_modules', 'src'],
  // transform: {
  //   '^.+\\.(js|jsx|model)$': '<rootDir>/../node_modules/babel-jest',
  //   '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
  //     '<rootDir>/../__mocks__/fileTransformer.js',
  // },
  // transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFilesAfterEnv: [`${packageRoot}/src/test/testDbSetup`],
  setupFiles: [`${packageRoot}/src/utils/env`]
  // testPathIgnorePatterns: [
  //   '/node_modules/',
  //   `${packageRoot}/node_modules/`,
  //   // 'ethereum.test.js'
  //   // 'cashout.test.js'
  // ],
};
