(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [53],
  {
    './src/modules/admin/web/header.component.js': function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('../../node_modules/react/index.js'),
        o = t.n(n),
        s = t('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        m = t(
          '../../node_modules/react-router-dom/node_modules/react-router/esm/react-router.js'
        ),
        l = t('../../node_modules/prop-types/index.js'),
        r = t.n(l),
        i = t('../../node_modules/react-router-config/esm/react-router-config.js');
      function c(e) {
        return o.a.createElement(
          'div',
          null,
          o.a.createElement(
            'div',
            { style: { alignSelf: 'flex-start', margin: 20 } },
            o.a.createElement(
              s.a,
              { className: 'link', to: '/admin/contract' },
              'Contract'
            ),
            o.a.createElement(s.a, { className: 'link', to: '/admin/topics' }, 'Topics'),
            o.a.createElement(
              s.a,
              { className: 'link', to: '/admin/invites' },
              'Invites'
            ),
            o.a.createElement(
              s.a,
              { className: 'link', to: '/admin/waitlist' },
              'Waitlist'
            ),
            o.a.createElement(
              s.a,
              { className: 'link', to: '/admin/flagged' },
              'Flagged'
            ),
            o.a.createElement(
              s.a,
              { className: 'link', to: '/admin/downvotes' },
              'Downvotes'
            ),
            o.a.createElement(s.a, { className: 'link', to: '/admin/email' }, 'Email'),
            o.a.createElement(
              s.a,
              { className: 'link', to: '/admin/topPosts' },
              'Top Posts'
            ),
            o.a.createElement(
              s.a,
              { className: 'link', to: '/admin/community' },
              'Community'
            )
          ),
          Object(i.b)(e.route.routes)
        );
      }
      (c.propTypes = { route: r.a.object }), (a.default = Object(m.f)(c));
    }
  }
]);
//# sourceMappingURL=53.bundle.js.map
