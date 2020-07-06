const base = require('../../jest.config.base.js');
const pack = require('./package.json');

// TODO - move this stuff to setup file?
process.env.WEB = 'true';
process.env.API_SERVER = '';
process.env.BROWSER = true;
process.env.NETWORK_NUMBER = 99;

const packageRoot = `<rootDir>/packages/${pack.name.replace('@r3l/', '')}`;

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
  rootDir: '../..',
  roots: [`<rootDir>/packages/${pack.name.replace('@r3l/', '')}`],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>packages/server/'],
  preset: 'react-native-web',
  testEnvironment: 'jsdom',
  transform: {
    '\\.(js|ts)$': ['babel-jest', { rootMode: 'upward' }],
    '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
      '<rootDir>/packages/app/__mocks__/fileTransformer.js'
  },
  setupFilesAfterEnv: [`${packageRoot}/jest.setup.js`],
  setupFiles: ['jest-canvas-mock', '<rootDir>/node_modules/regenerator-runtime/runtime']
};
