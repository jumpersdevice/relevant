(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [59],
  {
    './src/modules/navigation/web/withTopNav.component.js': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('../../node_modules/@babel/runtime/helpers/extends.js'),
        r = a.n(n),
        o = a('../../node_modules/react/index.js'),
        s = a.n(o),
        l = a('../../node_modules/prop-types/index.js'),
        c = a.n(l),
        u = a(
          '../../node_modules/react-router-dom/node_modules/react-router/esm/react-router.js'
        ),
        d = a('./src/modules/styled/uni.js'),
        m = e => {
          var { route: t } = e;
          return s.a.createElement(
            d.E,
            { fdirection: 'column', display: 'flex', grow: 1 },
            s.a.createElement(
              u.c,
              null,
              t.routes.map((e, t) =>
                s.a.createElement(u.a, {
                  key: t,
                  path: e.path,
                  exact: e.exact,
                  state: e.state,
                  render: t =>
                    e.navbar
                      ? s.a.createElement(e.navbar, r()({}, t, { title: e.title }))
                      : null
                })
              )
            ),
            s.a.createElement(
              u.c,
              null,
              t.routes.map((e, t) =>
                s.a.createElement(u.a, {
                  key: t,
                  path: e.path,
                  exact: e.exact,
                  component: e.component
                })
              )
            )
          );
        };
      (m.propTypes = { route: c.a.object }), (t.default = Object(u.f)(m));
    }
  }
]);
//# sourceMappingURL=59.bundle.js.map
