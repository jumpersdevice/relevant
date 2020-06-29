(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [46],
  {
    './public/img/icons/3box.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/icons/3box.png');
    },
    './public/img/icons/twitter_white.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/icons/twitter_white.png');
    },
    './src/modules/auth/web/signupSocial.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var i = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(i),
        a = n('../../node_modules/react/index.js'),
        r = n.n(a),
        s = n('../../node_modules/prop-types/index.js'),
        c = n.n(s),
        l = n(
          '../../node_modules/react-router-dom/node_modules/react-router/esm/react-router.js'
        ),
        u = n('../../node_modules/query-string/index.js'),
        d = n.n(u),
        m = n('./src/modules/styled/uni.js'),
        p = n('./src/styles/index.js'),
        g = n('./src/modules/navigation/ULink.component.js'),
        h = n('../../node_modules/redux/es/redux.js'),
        b = n('../../node_modules/react-redux/es/index.js'),
        w = n('./src/modules/navigation/navigation.actions.js'),
        _ = n('./public/img/icons/twitter_white.png'),
        x = n('./public/img/icons/3box.png'),
        E = r.a.createElement(m.s, {
          resizeMode: 'contain',
          source: _,
          w: 3,
          h: 3,
          mr: 1.5
        }),
        f = r.a.createElement(m.s, {
          resizeMode: 'contain',
          source: x,
          w: 3,
          h: 3,
          mr: 1.5
        });
      class j extends a.Component {
        render() {
          var { location: e, auth: t } = this.props,
            { redirect: n } = d.a.parse(e.search);
          n || (n = e.pathname);
          var { invitecode: i } = t;
          return r.a.createElement(
            m.E,
            { display: 'flex', fdirection: 'column', 'align-items': 'flex-start' },
            r.a.createElement(m.x, null, 'Sign up for Relevant.'),
            r.a.createElement(
              m.E,
              {
                display: 'flex',
                fdirection: ['row', 'column'],
                align: ['center', 'stretch'],
                justify: 'flex-start',
                mt: [7, 4]
              },
              r.a.createElement(
                g.a,
                {
                  to: '/auth/twitter?invitecode='.concat(i, '&redirect=').concat(n),
                  external: !0,
                  rel: 'nofollow',
                  mr: [4, 0]
                },
                r.a.createElement(m.h, {
                  bg: p.b.twitterBlue,
                  image: E,
                  text: 'Sign up with Twitter'
                })
              ),
              r.a.createElement(
                g.a,
                {
                  to: '#',
                  mr: [4, 0],
                  onClick: e => {
                    e.preventDefault(), this.props.actions.showModal('signup3Box');
                  }
                },
                r.a.createElement(
                  m.v,
                  { c: p.b.blue },
                  r.a.createElement(m.h, {
                    bg: 'rgb(248,49,255)',
                    image: f,
                    text: 'Sign up with 3Box'
                  })
                )
              ),
              r.a.createElement(
                g.a,
                {
                  to: '#',
                  mt: [0, 3],
                  onClick: e => {
                    e.preventDefault(), this.props.actions.showModal('signupEmail');
                  }
                },
                r.a.createElement(m.v, { c: p.b.blue }, 'Sign up with Email')
              )
            ),
            r.a.createElement(
              m.v,
              { mt: 4 },
              'Already registered?',
              ' ',
              r.a.createElement(
                'a',
                { onClick: () => this.props.actions.showModal('login') },
                'Sign In'
              )
            )
          );
        }
      }
      o()(j, 'propTypes', {
        location: c.a.object,
        actions: c.a.object,
        auth: c.a.object
      });
      t.default = Object(l.f)(
        Object(b.c)(
          e => ({
            user: e.auth.user,
            auth: e.auth,
            initialValues: {},
            enableReinitialize: !0
          }),
          e => ({ actions: Object(h.bindActionCreators)({ showModal: w.showModal }, e) })
        )(j)
      );
    }
  }
]);
//# sourceMappingURL=46.bundle.js.map
