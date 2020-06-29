'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getWidth = getWidth;
exports.responsiveHandler = void 0;
var _screens = require('./screens');
var Dimensions;
var isNative = false;
var isServer = false;
var NATIVE_WIDTH;
if (process.env.WEB !== 'true') {
  isNative = true;
  Dimensions = require('react-native-web').Dimensions;
  var _Dimensions$get = Dimensions.get('window'),
    width = _Dimensions$get.width;
  NATIVE_WIDTH = width;
}
if (!process.env.BROWSER) {
  isServer = true;
  Dimensions = require('react-native-web').Dimensions;
}
var responsiveHandler = function responsiveHandler(val) {
  if (!Array.isArray(val)) return val;
  if (val.length === 1) return val[0];
  var WIDTH = getWidth();
  if (!WIDTH) return val[0];
  var breakpoints = [_screens.mediumScreenWidth, _screens.smallScreenWidth, 0];
  for (var i = 0; i < breakpoints.length; i++) {
    if (WIDTH >= breakpoints[i]) {
      if (val.length > i) return val[i];
      return val[val.length - 1];
    }
  }
  return null;
};
exports.responsiveHandler = responsiveHandler;
function getWidth() {
  try {
    if (isNative) return NATIVE_WIDTH;
    if (isServer) return Dimensions.get('window').width;
    return window.innerWidth;
  } catch (err) {
    return null;
  }
}
//# sourceMappingURL=responsive.js.map
