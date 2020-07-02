require('@babel/polyfill');

const { AppRegistry } = require('react-native');
const Share = require('./packages/app/src/modules/_app/mobile/share.index').default;

AppRegistry.registerComponent('Relevant', () => Share);
