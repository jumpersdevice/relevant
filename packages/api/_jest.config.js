const base = require('../../jest.config.base.js');
const pack = require('./package.json');

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
  rootDir: '../..',
  roots: [`<rootDir>/packages/${pack.name.replace('@r3l/', '')}`],
  globalSetup: './src/test/setup',
  globalTeardown: './src/test/teardown',
  testEnvironment: './src/test/mongo.environment',
  transform: { '\\.(js|ts)$': ['babel-jest', { rootMode: 'upward' }] },
  // transform: {
  //   '^.+\\.(js|jsx|model)$': '<rootDir>/../node_modules/babel-jest',
  //   '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
  //     '<rootDir>/../__mocks__/fileTransformer.js',
  // },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFilesAfterEnv: ['./src/test/testDbSetup'],
  setupFiles: ['dotenv/config'],
  testPathIgnorePatterns: [
    '<rootDir>/../node_modules/'
    // 'ethereum.test.js'
    // 'cashout.test.js'
  ]
};
