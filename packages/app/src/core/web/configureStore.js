import createSocketIoMiddleware from 'redux-socket.io';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createInjectSagasStore, sagaMiddleware } from 'redux-sagas-injector';

import { API_URL } from 'utils/env';
import rootReducer, { injectReducer } from '../reducers';

function* rootSaga() {} // eslint-disable-line

let server = API_URL;

if (process.env.NODE_ENV === 'development') {
  server = 'http://localhost:3000';
}

let socket;
if (process.env.BROWSER) {
  socket = window.io(server, {
    transports: ['websocket', 'polling'],
    jsonp: false
  });
  socket.on('pingKeepAlive', () => {
    socket.emit('pingResponse');
  });
}

export default function configureStore(initialState = {}) {
  // Compose final middleware and use devtools in debug environment
  let middleware;

  if (process.env.BROWSER) {
    // only use the socket middleware on client and not on server
    const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');
    const _middleware = [thunk, socketIoMiddleware, sagaMiddleware];
    middleware = applyMiddleware(..._middleware);
  } else {
    middleware = applyMiddleware(thunk, sagaMiddleware);
  }

  if (process.env.BROWSER && process.env.DEVTOOLS) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middleware = composeEnhancers(middleware);
  }

  const store = process.env.BROWSER
    ? // This causes a small memory leak on server
      createInjectSagasStore({ rootSaga }, rootReducer, initialState, middleware)
    : // This doesn't cause leak on server
      createStore(rootReducer, initialState, middleware);

  store.asyncReducers = {};
  store.injectReducer = (key, asyncReducer) => injectReducer(store, key, asyncReducer);

  if (process.env.BROWSER) {
    socket.on('connect', () => {
      const state = store.getState();
      if (state.auth && state.auth.user) {
        socket.emit('action', {
          type: 'server/storeUser',
          payload: state.auth.user._id
        });
      }
    });
  }

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
