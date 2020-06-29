'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _reactHotLoader = require('react-hot-loader');
var _react = _interopRequireDefault(require('react'));
var _reactDom = require('react-dom');
var _reactRouterDom = require('react-router-dom');
var _history = _interopRequireDefault(require('./modules/navigation/history'));
var _reactRouterConfig = require('react-router-config');
var _reactRedux = require('react-redux');
var _debug = _interopRequireDefault(require('debug'));
var _configureStore = _interopRequireDefault(require('./core/web/configureStore'));
var _routes = _interopRequireDefault(require('./modules/_app/web/routes'));
var _component = require('@loadable/component');
var _apollo = require('./core/apollo.client');
var _reactHooks = require('@apollo/react-hooks');
var _jsxFileName = '/Users/slavab/local/relevant/packages/app/src/index.js';
var clientDebug = (0, _debug.default)('app:client');
var rootElement = document.getElementById('app');
window.React = _react.default;
var initialState = window.__INITIAL_STATE__ || undefined;
var store = (0, _configureStore.default)(initialState);
clientDebug('rehydrating app');
if (localStorage) localStorage.debug = '';
var renderApp = function renderApp(appRoutes) {
  (0, _reactDom.hydrate)(
    _react.default.createElement(
      _reactHotLoader.AppContainer,
      { __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 5 } },
      _react.default.createElement(
        _reactHooks.ApolloProvider,
        {
          client: _apollo.client,
          __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }
        },
        _react.default.createElement(
          _reactRedux.Provider,
          {
            store: store,
            __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 9 }
          },
          _react.default.createElement(
            _reactRouterDom.Router,
            {
              history: _history.default,
              __source: { fileName: _jsxFileName, lineNumber: 37, columnNumber: 11 }
            },
            (0, _reactRouterConfig.renderRoutes)(appRoutes)
          )
        )
      )
    ),
    rootElement
  );
};
(0, _component.loadableReady)(function() {
  return renderApp(_routes.default);
});
if (module.hot) {
  module.hot.accept('./modules/_app/web/routes', function() {
    var newRoutes = require('./modules/_app/web/routes').default;
    renderApp(newRoutes);
  });
}
//# sourceMappingURL=index.js.map
