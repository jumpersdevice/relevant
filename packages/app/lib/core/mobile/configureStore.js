'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = configureStore;
var _redux = require('redux');
var _reduxThunk = _interopRequireDefault(require('redux-thunk'));
var _reduxSocket = _interopRequireDefault(require('redux-socket.io'));
var _reducers = _interopRequireDefault(require('../reducers'));
var _env = require('../../utils/env');
window.navigator.userAgent = 'react-native';
var io = require('socket.io-client/dist/socket.io');
var socket = io(_env.API_URL, { transports: ['websocket', 'polling'], jsonp: false });
socket.on('pingKeepAlive', function() {
  socket.emit('pingResponse');
});
socket.on('reconnect_attempt', function() {
  socket.io.opts.transports = ['websocket', 'polling'];
});
var store;
function configureStore() {
  var socketIoMiddleware = (0, _reduxSocket.default)(socket, 'server/');
  store = (0, _redux.applyMiddleware)(
    _reduxThunk.default,
    socketIoMiddleware
  )(_redux.createStore)(_reducers.default);
  socket.on('connect', function() {
    var s = store.getState();
    if (s.auth && s.auth.user) {
      socket.emit('action', { type: 'server/storeUser', payload: s.auth.user._id });
    }
  });
  if (module.hot) {
    module.hot.accept(function() {
      var nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
exports.STORE = store;
//# sourceMappingURL=configureStore.js.map
