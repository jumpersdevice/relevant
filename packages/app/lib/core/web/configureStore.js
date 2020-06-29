'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = configureStore;
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));
var _reduxSocket = _interopRequireDefault(require('redux-socket.io'));
var _redux = require('redux');
var _reduxThunk = _interopRequireDefault(require('redux-thunk'));
var _reduxSagasInjector = require('redux-sagas-injector');
var _env = require('../../utils/env');
var _reducers = _interopRequireWildcard(require('../reducers'));
var _marked = _regenerator.default.mark(rootSaga);
function rootSaga() {
  return _regenerator.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked);
}
var server = _env.API_URL;
if (process.env.NODE_ENV === 'development') {
  server = 'http://localhost:3000';
}
var socket;
var io;
if (process.env.BROWSER) {
  io = require('socket.io-client');
  socket = io(server);
  socket.on('pingKeepAlive', function() {
    socket.emit('pingResponse');
  });
}
function configureStore() {
  var initialState =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var middleware;
  if (process.env.BROWSER) {
    var socketIoMiddleware = (0, _reduxSocket.default)(socket, 'server/');
    var _middleware = [
      _reduxThunk.default,
      socketIoMiddleware,
      _reduxSagasInjector.sagaMiddleware
    ];
    middleware = _redux.applyMiddleware.apply(void 0, _middleware);
  } else {
    middleware = (0, _redux.applyMiddleware)(
      _reduxThunk.default,
      _reduxSagasInjector.sagaMiddleware
    );
  }
  if (process.env.BROWSER && process.env.DEVTOOLS) {
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
    middleware = composeEnhancers(middleware);
  }
  var store = process.env.BROWSER
    ? (0, _reduxSagasInjector.createInjectSagasStore)(
        { rootSaga: rootSaga },
        _reducers.default,
        initialState,
        middleware
      )
    : (0, _redux.createStore)(_reducers.default, initialState, middleware);
  store.asyncReducers = {};
  store.injectReducer = function(key, asyncReducer) {
    return (0, _reducers.injectReducer)(store, key, asyncReducer);
  };
  if (process.env.BROWSER) {
    socket.on('connect', function() {
      var state = store.getState();
      if (state.auth && state.auth.user) {
        socket.emit('action', { type: 'server/storeUser', payload: state.auth.user._id });
      }
    });
  }
  if (module.hot) {
    module.hot.accept('../reducers', function() {
      var nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
//# sourceMappingURL=configureStore.js.map
