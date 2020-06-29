(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [58],
  {
    './src/modules/invites/inviteModalTitle.component.js': function(e, n, s) {
      'use strict';
      s.r(n);
      var t = s('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = s.n(t),
        o = s('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        r = s.n(o),
        d = s('../../node_modules/react/index.js'),
        u = s.n(d),
        c = s('../../node_modules/prop-types/index.js'),
        m = s.n(c),
        a = s('../../node_modules/lodash/get.js'),
        l = s.n(a),
        _ = s('./src/modules/styled/uni.js'),
        p = s('../../node_modules/react-redux/es/index.js');
      class j extends d.Component {
        constructor() {
          super(...arguments),
            r()(
              this,
              'submit',
              i()(function*() {})
            );
        }
        render() {
          var { community: e } = this.props,
            n = l()(e, 'communities.'.concat(e.active, '.name'));
          return u.a.createElement(
            _.E,
            {
              display: 'flex',
              fdirection: 'row',
              justify: 'space-between',
              align: 'center',
              flex: 1
            },
            u.a.createElement(_.q, { shrink: 1 }, 'Invite Friends To ', n)
          );
        }
      }
      r()(j, 'propTypes', { community: m.a.object });
      n.default = Object(p.c)(
        e => ({
          user: e.auth.user,
          community: e.community,
          inviteList: l()(e, 'admin.inviteList', {}) || {}
        }),
        () => ({})
      )(j);
    }
  }
]);
//# sourceMappingURL=58.bundle.js.map
