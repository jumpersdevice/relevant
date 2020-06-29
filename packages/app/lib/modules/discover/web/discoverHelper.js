'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getDiscoverState = getDiscoverState;
exports.tagRoutes = exports.standardRoutes = void 0;
var standardRoutes = [
  { key: 'new', title: 'New' },
  { key: 'top', title: 'Relevant' }
];
exports.standardRoutes = standardRoutes;
var tagRoutes = [
  { key: 'new', title: 'New' },
  { key: 'top', title: 'Relevant' }
];
exports.tagRoutes = tagRoutes;
function getDiscoverState(nextProps, prevState) {
  var _nextProps$match$para = nextProps.match.params,
    tag = _nextProps$match$para.tag,
    sort = _nextProps$match$para.sort;
  var routes = tag ? tagRoutes : standardRoutes;
  if (sort && sort !== prevState.sort) {
    var tabIndex = prevState.routes.findIndex(function(tab) {
      return tab.key === sort;
    });
    return { tabIndex: tabIndex, routes: routes, sort: sort };
  }
  if (!sort) return { tabIndex: -1, routes: routes, sort: sort };
  return null;
}
//# sourceMappingURL=discoverHelper.js.map
