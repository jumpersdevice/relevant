'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = configureStore;
var _redux = require('redux');
var _reduxThunk = _interopRequireDefault(require('redux-thunk'));
var _reducers = _interopRequireDefault(require('../reducers'));
window.navigator.userAgent = 'react-native';
function configureStore() {
  var store = (0, _redux.applyMiddleware)(_reduxThunk.default)(_redux.createStore)(
    _reducers.default
  );
  if (module.hot) {
    module.hot.accept(function() {
      var nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
//# sourceMappingURL=configureShareStore.js.map
