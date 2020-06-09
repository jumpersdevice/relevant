import { NativeModules } from 'react-native';

// Buffer shim for data-uri-to-buffer
global.Buffer = global.Buffer || require('buffer').Buffer;

const { UIManager } = NativeModules;

if (UIManager) {
  UIManager.genericDirectEventTypes = {
    ...UIManager.genericDirectEventTypes,
    onGestureHandlerEvent: { registrationName: 'onGestureHandlerEvent' },
    onGestureHandlerStateChange: {
      registrationName: 'onGestureHandlerStateChange'
    }
  };
}

// Fixes a nasty bug: https://github.com/kmagiera/react-native-gesture-handler/issues/746
require('react-native-gesture-handler');

console.ignoredYellowBox = ['Setting a timer']; // eslint-disable-line

const { AppRegistry } = require('react-native');
const App = require('./app/modules/_app/mobile/app.index').default;
const Share = require('./app/modules/_app/mobile/share.index').default;

AppRegistry.registerComponent('relevantNative', () => App);
AppRegistry.registerComponent('Relevant', () => Share);
