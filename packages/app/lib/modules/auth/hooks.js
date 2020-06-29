'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useAuth = useAuth;
var _react = require('react');
var _reactRedux = require('react-redux');
var _navigation = require('../navigation/navigation.actions');
function useAuth() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var isAuthenticated = (0, _reactRedux.useSelector)(function(state) {
    return state.auth.isAuthenticated;
  });
  if (!isAuthenticated);
  return (0, _react.useCallback)(
    function() {
      if (isAuthenticated) return true;
      dispatch((0, _navigation.showAuth)());
      return false;
    },
    [isAuthenticated, dispatch]
  );
}
//# sourceMappingURL=hooks.js.map
