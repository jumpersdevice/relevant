(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [45],
  {
    './src/modules/navigation/web/withTopNav.component.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('./node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        o = n('../../node_modules/react/index.js'),
        u = n.n(o),
        c = n('../../node_modules/prop-types/index.js'),
        s = n.n(c),
        l = n('../../node_modules/react-router/esm/react-router.js'),
        d = n('./src/modules/styled/uni.js'),
        i = function(e) {
          var t = e.route;
          return u.a.createElement(
            d.E,
            { fdirection: 'column', display: 'flex', grow: 1 },
            u.a.createElement(
              l.d,
              null,
              t.routes.map(function(e, t) {
                return u.a.createElement(l.b, {
                  key: t,
                  path: e.path,
                  exact: e.exact,
                  state: e.state,
                  render: function(t) {
                    return e.navbar
                      ? u.a.createElement(e.navbar, a()({}, t, { title: e.title }))
                      : null;
                  }
                });
              })
            ),
            u.a.createElement(
              l.d,
              null,
              t.routes.map(function(e, t) {
                return u.a.createElement(l.b, {
                  key: t,
                  path: e.path,
                  exact: e.exact,
                  component: e.component
                });
              })
            )
          );
        };
      (i.propTypes = { route: s.a.object }), (t.default = Object(l.g)(i));
    }
  }
]);
//# sourceMappingURL=navigation-web-withTopNav-component.bundle.js.map
