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
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/server/'],
  preset: 'react-native-web',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|mp4)$': 'identity-obj-proxy'
  },
  transform: { '\\.(js|ts)$': ['babel-jest', { rootMode: 'upward' }] },
  // transform: {
  //   '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  //   '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
  //     '<rootDir>/__mocks__/fileTransformer.js',
  // },
  // transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  // for some react-native-web aliasing is causing a
  // console / 'canvas' error - this mocks canvas as a solution
  setupFilesAfterEnv: [`${packageRoot}/jest.setup.js`],
  setupFiles: ['jest-canvas-mock', '<rootDir>/node_modules/regenerator-runtime/runtime']
};
