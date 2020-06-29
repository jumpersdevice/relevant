(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [49],
  {
    './src/modules/community/communityList.component.js': function(e, n, t) {
      'use strict';
      var o = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        s = t.n(o),
        i = t('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        r = t.n(i),
        m = t('../../node_modules/react/index.js'),
        a = t.n(m),
        c = t('../../node_modules/prop-types/index.js'),
        u = t.n(c),
        l = t('../../node_modules/react-redux/es/index.js'),
        d = t('../../node_modules/redux/es/redux.js'),
        y = t('./src/modules/community/community.actions.js'),
        p = t('./src/modules/auth/auth.actions.js'),
        b = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        h = t('./src/modules/navigation/ULink.component.js'),
        j = t('./src/modules/styled/uni.js'),
        E = t('./src/styles/index.js');
      function _() {
        var e = r()(['\n  :hover {\n    background: ', ';\n  }\n']);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      var C = Object(b.css)(_(), E.b.secondaryBG);
      class x extends m.Component {
        constructor() {
          super(...arguments),
            s()(this, 'handleJoinCommunity', (e, n) => {
              var { auth: t } = this.props;
              t.isAuthenticated && this.props.actions.joinCommunity(n);
            }),
            s()(this, 'renderJoinLink', e =>
              a.a.createElement(
                j.v,
                {
                  inline: 1,
                  c: E.b.blue,
                  onPress: n => this.handleJoinCommunity(n, e),
                  onClick: n => this.handleJoinCommunity(n, e)
                },
                'Join Community'
              )
            ),
            s()(this, 'renderInnerText', e => {
              var { hashtags: n } = this.props;
              return n
                ? a.a.createElement(
                    j.d,
                    { c: E.b.black, mt: 0.5 },
                    e.topics.map(e => '#' + e).join(', ')
                  )
                : a.a.createElement(
                    j.e,
                    null,
                    a.a.createElement(
                      j.d,
                      { inline: 1, c: E.b.black, mt: 0.5 },
                      e.description
                    ),
                    a.a.createElement(
                      j.v,
                      { inline: 1, c: E.b.black, mt: 0.5 },
                      e.memberCount,
                      ' member',
                      e.memberCount > 1 ? 's' : ''
                    )
                  );
            });
        }
        render() {
          var {
              community: { communities: e },
              actions: n,
              p: t
            } = this.props,
            o = void 0 !== t ? t : 4;
          return a.a.createElement(
            j.E,
            { fdirection: 'column' },
            Object.values(e).map(e => {
              var t = '/'.concat(e.slug, '/new');
              return a.a.createElement(
                h.a,
                {
                  to: t,
                  onPress: () => n.setCommunity(e.slug),
                  onClick: () => n.setCommunity(e.slug),
                  key: e._id,
                  styles: C,
                  fdirection: 'column',
                  flex: 1
                },
                a.a.createElement(
                  j.E,
                  { fdirection: 'row', align: 'flex-start', p: '2 '.concat(o) },
                  a.a.createElement(j.s, {
                    source: { uri: e.image },
                    h: 8,
                    w: 8,
                    mr: 2,
                    bg: E.b.secondaryBG
                  }),
                  a.a.createElement(
                    j.E,
                    { fdirection: 'column', flex: 1 },
                    a.a.createElement(j.C, { inline: 1 }, e.name, ' '),
                    a.a.createElement(j.E, { wrap: !0 }, this.renderInnerText(e))
                  ),
                  a.a.createElement(j.e, { mt: 6 })
                )
              );
            })
          );
        }
      }
      s()(x, 'propTypes', {
        community: u.a.object,
        actions: u.a.object,
        auth: u.a.object,
        hashtags: u.a.bool,
        p: u.a.number
      });
      n.a = Object(l.c)(
        e => ({ routing: e.routing, community: e.community, auth: e.auth }),
        e => ({
          actions: Object(d.bindActionCreators)(
            { joinCommunity: y.joinCommunity, setCommunity: p.setCommunity },
            e
          )
        })
      )(x);
    },
    './src/modules/community/communityList.container.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var o = t('../../node_modules/react/index.js'),
        s = t.n(o),
        i = t('./src/modules/navigation/ULink.component.js'),
        r = t('./src/modules/styled/uni.js'),
        m = t('./src/modules/community/communityList.component.js'),
        a = t('./src/styles/index.js'),
        c = t('../../node_modules/react-native-web/dist/exports/ScrollView/index.js');
      n.default = () =>
        s.a.createElement(
          c.a,
          { flex: 1, fdirection: 'column', style: { backgroundColor: a.b.white } },
          s.a.createElement(m.a, null),
          s.a.createElement(
            r.E,
            { m: '6 4 12 4', fdirection: 'row' },
            s.a.createElement(
              i.a,
              { inline: 1, external: !0, to: 'mailto:info@relevant.community' },
              s.a.createElement(r.d, { c: a.b.blue }, 'Get in touch ')
            ),
            s.a.createElement(r.d, null, "if you'd like to start your own community")
          )
        );
    }
  }
]);
//# sourceMappingURL=49.bundle.js.map
