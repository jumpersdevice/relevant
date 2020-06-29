(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [24],
  {
    './public/img/email.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/email.png');
    },
    './public/img/instagram.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/instagram.png');
    },
    './public/img/medium.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/medium.png');
    },
    './public/img/slack.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/slack.png');
    },
    './public/img/twitter-black.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/twitter-black.png');
    },
    './src/modules/community/communityList.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        a = n.n(i),
        s = n('../../node_modules/react/index.js'),
        c = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = n('../../node_modules/react-redux/es/index.js'),
        m = n('../../node_modules/redux/es/redux.js'),
        h = n('./src/modules/community/community.actions.js'),
        p = n('./src/modules/auth/auth.actions.js'),
        f = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        b = n('./src/modules/navigation/ULink.component.js'),
        g = n('./src/modules/styled/uni.js'),
        j = n('./src/styles/index.js');
      function v() {
        var e = a()(['\n  :hover {\n    background: ', ';\n  }\n']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      var w = Object(f.css)(v(), j.b.secondaryBG);
      class y extends s.Component {
        constructor() {
          super(...arguments),
            o()(this, 'handleJoinCommunity', (e, t) => {
              var { auth: n } = this.props;
              n.isAuthenticated && this.props.actions.joinCommunity(t);
            }),
            o()(this, 'renderJoinLink', e =>
              c.a.createElement(
                g.v,
                {
                  inline: 1,
                  c: j.b.blue,
                  onPress: t => this.handleJoinCommunity(t, e),
                  onClick: t => this.handleJoinCommunity(t, e)
                },
                'Join Community'
              )
            ),
            o()(this, 'renderInnerText', e => {
              var { hashtags: t } = this.props;
              return t
                ? c.a.createElement(
                    g.d,
                    { c: j.b.black, mt: 0.5 },
                    e.topics.map(e => '#' + e).join(', ')
                  )
                : c.a.createElement(
                    g.e,
                    null,
                    c.a.createElement(
                      g.d,
                      { inline: 1, c: j.b.black, mt: 0.5 },
                      e.description
                    ),
                    c.a.createElement(
                      g.v,
                      { inline: 1, c: j.b.black, mt: 0.5 },
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
              actions: t,
              p: n
            } = this.props,
            r = void 0 !== n ? n : 4;
          return c.a.createElement(
            g.E,
            { fdirection: 'column' },
            Object.values(e).map(e => {
              var n = '/'.concat(e.slug, '/new');
              return c.a.createElement(
                b.a,
                {
                  to: n,
                  onPress: () => t.setCommunity(e.slug),
                  onClick: () => t.setCommunity(e.slug),
                  key: e._id,
                  styles: w,
                  fdirection: 'column',
                  flex: 1
                },
                c.a.createElement(
                  g.E,
                  { fdirection: 'row', align: 'flex-start', p: '2 '.concat(r) },
                  c.a.createElement(g.s, {
                    source: { uri: e.image },
                    h: 8,
                    w: 8,
                    mr: 2,
                    bg: j.b.secondaryBG
                  }),
                  c.a.createElement(
                    g.E,
                    { fdirection: 'column', flex: 1 },
                    c.a.createElement(g.C, { inline: 1 }, e.name, ' '),
                    c.a.createElement(g.E, { wrap: !0 }, this.renderInnerText(e))
                  ),
                  c.a.createElement(g.e, { mt: 6 })
                )
              );
            })
          );
        }
      }
      o()(y, 'propTypes', {
        community: l.a.object,
        actions: l.a.object,
        auth: l.a.object,
        hashtags: l.a.bool,
        p: l.a.number
      });
      t.a = Object(d.c)(
        e => ({ routing: e.routing, community: e.community, auth: e.auth }),
        e => ({
          actions: Object(m.bindActionCreators)(
            { joinCommunity: h.joinCommunity, setCommunity: p.setCommunity },
            e
          )
        })
      )(y);
    },
    './src/modules/navigation/social.icons.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return b;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        i = n('../../node_modules/react/index.js'),
        a = n.n(i),
        s = n('../../node_modules/prop-types/index.js'),
        c = n.n(s),
        u = n('./src/modules/styled/uni.js'),
        l = n('./src/modules/navigation/ULink.component.js'),
        d = n('./public/img/twitter-black.png'),
        m = n('./public/img/email.png'),
        h = n('./public/img/slack.png'),
        p = [
          {
            href: 'https://blog.relevant.community',
            source: n('./public/img/medium.png'),
            target: '_blank'
          },
          {
            href: 'https://instagram.com/relevant_community',
            source: n('./public/img/instagram.png'),
            target: '_blank'
          },
          { href: 'https://twitter.com/relevantfeed', source: d, target: '_blank' },
          {
            href:
              'https://join.slack.com/t/relevantcommunity/shared_invite/enQtMjIwMjEwNzUzMjUzLWVjODViM2ZkZDE5ZWMyYzcxMzI3ZTQ3Njc4YTBmYmVmMTQxZGJiNDcxYzljODZlM2U0NGU1YTE3MDlhM2I1NmI',
            source: h,
            target: '_blank'
          },
          { href: 'mailto:info@relevant.community', source: m, target: '_blank' }
        ],
        f = e => {
          var { href: t, source: n, target: r, actions: o } = e;
          return n
            ? a.a.createElement(
                l.a,
                {
                  external: !0,
                  to: t,
                  onPress: () => o.goToUrl(t),
                  target: r || '_self',
                  inline: 1
                },
                a.a.createElement(u.s, {
                  w: 2.8,
                  h: 2.4,
                  mr: 2,
                  resizeMode: 'contain',
                  source: n
                })
              )
            : null;
        };
      function b(e) {
        var { actions: t } = e;
        return a.a.createElement(
          u.E,
          { flex: 1, fdirection: 'row', mt: 2, mb: [2, 0] },
          p.map(e => a.a.createElement(f, o()({ actions: t, key: e.href }, e)))
        );
      }
      (f.propTypes = {
        href: c.a.string,
        source: c.a.oneOfType([c.a.number, c.a.string, c.a.object]),
        target: c.a.string,
        actions: c.a.object
      }),
        (b.propTypes = { actions: c.a.object });
    },
    './src/modules/styled/web.js': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return M;
      }),
        n.d(t, 'r', function() {
          return R;
        }),
        n.d(t, 'o', function() {
          return C;
        }),
        n.d(t, 'f', function() {
          return D;
        }),
        n.d(t, 'e', function() {
          return z;
        }),
        n.d(t, 'c', function() {
          return F;
        }),
        n.d(t, 'p', function() {
          return I;
        }),
        n.d(t, 'i', function() {
          return A;
        }),
        n.d(t, 'k', function() {
          return B;
        }),
        n.d(t, 'a', function() {
          return H;
        }),
        n.d(t, 'b', function() {
          return W;
        }),
        n.d(t, 'j', function() {
          return q;
        }),
        n.d(t, 'h', function() {
          return J;
        }),
        n.d(t, 'g', function() {
          return N;
        }),
        n.d(t, 'n', function() {
          return Y;
        }),
        n.d(t, 'm', function() {
          return G;
        }),
        n.d(t, 'd', function() {
          return V;
        }),
        n.d(t, 'q', function() {
          return Z;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        o = n.n(r),
        i = n('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        a = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        s = n('./src/styles/index.js'),
        c = n(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        u = n(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        );
      function l() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = o()(['\n  ', '\n  ', '\n']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  padding: ',
          ' ',
          ';\n  min-width: 0;\n  &: focus {\n    outline: 1px solid ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  padding: ',
          ' ',
          ';\n  min-width: 0;\n  &: focus {\n    outline: 1px solid ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = o()([
          '\n  padding: ',
          ' ',
          ';\n  margin-top: ',
          ';  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ::placeholder: {\n    font-size: ',
          ';\n    line-height: ',
          ';\n  };\n  :focus {\n    outline: none !important;\n    ',
          '\n  }\n'
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ::placeholder: {\n    font-size: ',
          ';\n    line-height: ',
          ';\n  };\n  :focus {\n    outline: none !important;\n    ',
          '\n  }\n'
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          ';\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  &:hover {\n    ',
          '\n  };\n  user-select: none; cursor: pointer;\n'
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = o()(['\n  ', '\n  ', '\n']);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = o()([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (U = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      function L() {
        var e = o()([
          '\n  ',
          ';\n  color: ',
          ';\n  &.active {\n    color: ',
          ';\n  }\n  :hover {\n    color: ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (L = function() {
            return e;
          }),
          e
        );
      }
      var M = Object(a.default)(i.b)(
          L(),
          s.c.header,
          s.b.grey,
          s.b.black,
          s.b.black,
          s.f.font,
          s.f.display,
          s.f.color,
          s.f.margin
        ),
        R = a.default.div(
          P(),
          s.f.margin,
          s.f.padding,
          s.f.flex,
          s.f.font,
          s.f.background,
          s.f.border,
          s.f.width,
          s.f.height,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        C = a.default.span(
          S(),
          s.f.margin,
          s.f.padding,
          s.f.flex,
          s.f.font,
          s.f.background,
          s.f.border,
          s.f.color,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        D = a.default.span(
          U(),
          s.f.margin,
          s.f.padding,
          s.f.font,
          s.f.background,
          s.f.border,
          s.f.color
        ),
        z = a.default.img(
          T(),
          s.f.margin,
          s.f.height,
          s.f.width,
          s.f.padding,
          s.f.background,
          s.f.borderRadius,
          s.f.flex
        ),
        F =
          (a.default.span(_(), s.f.margin, s.f.flex),
          a.default.div(
            k(),
            s.f.margin,
            s.f.padding,
            s.f.width,
            s.e.universalBorder('bottom')
          )),
        I =
          (Object(a.default)(C)(O(), s.c.header, s.f.color),
          Object(a.default)(C)(E(), s.c.title, s.f.color, s.f.font)),
        A = Object(a.default)(C)(x(), s.c.link, s.f.color, s.f.font),
        B = Object(a.default)(C)(y(), s.c.secondaryText, s.f.font, s.f.color),
        H =
          (Object(a.default)(C)(w(), s.c.altLink, s.f.color, s.f.font),
          Object(a.default)(C)(v(), s.c.commentText, s.f.color, s.f.font),
          Object(a.default)(C)(j(), s.c.bodyStyle, s.f.color, s.f.font)),
        W = a.default.button(
          g(),
          s.e.button,
          s.e.buttonFont,
          e =>
            e.disabled
              ? '\n    color: '
                  .concat(s.b.white, ';\n    background: ')
                  .concat(s.b.grey, ';\n    ')
              : '',
          s.f.flex,
          s.f.background,
          s.f.padding,
          s.f.width,
          s.f.margin,
          s.f.color,
          s.f.width,
          s.f.height,
          s.e.activeButtonShadow
        ),
        q = Object(a.default)(C)(
          b(),
          s.c.numericalValue,
          s.f.width,
          s.f.font,
          s.f.inheritfont,
          s.f.color
        ),
        J = a.default.input(
          f(),
          s.f.font,
          s.f.flex,
          s.f.border,
          s.f.padding,
          s.f.margin,
          Object(s.i)(1.75),
          Object(s.i)(1.75),
          s.e.universalBorder('', s.b.blue)
        ),
        N = a.default.input(
          p(),
          Object(s.i)(2),
          Object(s.i)(2),
          Object(s.i)(1),
          s.c.bodyStyle,
          s.f.font,
          s.f.flex,
          s.f.border,
          s.e.universalBorder(),
          s.f.padding,
          s.f.margin,
          Object(s.i)(1.75),
          Object(s.i)(1.75),
          s.e.universalBorder('', s.b.blue)
        ),
        Y = Object(a.default)(u.a)(
          h(),
          s.c.bodyStyle,
          s.f.border,
          s.f.flex,
          s.e.universalBorder(),
          Object(s.i)(2),
          Object(s.i)(2),
          s.b.blue,
          s.f.padding,
          s.f.margin,
          s.f.height
        ),
        G = Object(a.default)(c.a)(
          m(),
          s.c.bodyStyle,
          s.f.border,
          s.f.flex,
          s.e.universalBorder(),
          Object(s.i)(2),
          Object(s.i)(2),
          s.b.blue,
          s.f.padding,
          s.f.margin,
          s.f.height
        ),
        V = a.default.form(d(), s.f.flex, s.f.margin),
        Z = a.default.video(
          l(),
          s.f.margin,
          s.f.height,
          s.f.width,
          s.f.padding,
          s.f.background,
          s.f.borderRadius,
          s.f.flex
        );
    },
    './src/modules/web_about/about.component.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(i),
        s = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        c = n.n(s),
        u = n('../../node_modules/react/index.js'),
        l = n.n(u),
        d = n('../../node_modules/prop-types/index.js'),
        m = n.n(d),
        h = n('../../node_modules/redux/es/redux.js'),
        p = n('../../node_modules/react-redux/es/index.js'),
        f = n('./src/modules/styled/web.js'),
        b = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        g = n('./src/styles/index.js'),
        j = n('./src/utils/index.js'),
        v = n('./src/modules/navigation/navigation.actions.js'),
        w = n('./src/modules/navigation/ULink.component.js'),
        y = n('./src/modules/community/communityList.component.js'),
        x = n('./src/modules/navigation/social.icons.js'),
        E = n('./src/modules/community/community.actions.js'),
        O = n('./src/modules/post/post.actions.js'),
        k = n('./src/utils/post.js'),
        _ = n('./src/utils/numbers.js');
      function T() {
        var e = c()([
          '\n  white-space: nowrap;\n  width: 100vw;\n  overflow: hidden;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n'
        ]);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      var U = Object(b.default)(f.r)(T()),
        S = [g.b.black, g.b.white];
      class P extends u.Component {
        constructor() {
          super(...arguments),
            a()(this, 'x', []),
            a()(this, 'rows', []),
            a()(this, 'pause', () => {
              cancelAnimationFrame(this.lastFrame),
                window.removeEventListener('focus', this.animate),
                window.addEventListener('focus', this.animate);
            }),
            a()(this, 'rowSpeed', e => {
              switch (e % 3) {
                case 0:
                  return 0.6;
                case 1:
                  return 0.85;
                case 2:
                  return 0.75;
                default:
                  return 0.6;
              }
            }),
            a()(this, 'animate', () => {
              var e = new Date(),
                t = this.lastTime ? (e - this.lastTime) / 10 : 0;
              (this.x = this.rows.map((e, n) => {
                var r = e.offsetWidth / 2,
                  o = (this.x[n] || n) - t * this.rowSpeed(n);
                o <= -r && (o += r);
                var i = Math.round(1e3 * o) / 1e3;
                return (e.style.transform = 'translate3d('.concat(i, 'px, 0, 0)')), i;
              })),
                (this.lastTime = e),
                (this.lastFrame = requestAnimationFrame(this.animate));
            }),
            a()(this, 'renderTicker', (e, t) => {
              var { posts: n, rows: r, communityState: o } = this.props;
              return n.topPosts
                .filter(e => e.title)
                .map((n, i) => {
                  if (i % r !== e) return null;
                  var a = S[(e + 1) % 2],
                    s = o.communities[n.data.community];
                  if (!s) return null;
                  var c = s.currentShares / s.postCount,
                    u = n.data.pagerank - c,
                    d = Object(k.e)({ post: n, maxLength: 60 }).toUpperCase(),
                    m = Object(k.b)(n.metaPost.domain),
                    h = l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(f.e, {
                        bg: g.b.white,
                        w: 2,
                        h: 2,
                        mr: 1,
                        src: m,
                        resizeMode: 'contain'
                      }),
                      l.a.createElement(f.o, { mr: 0.5, c: a }, d),
                      l.a.createElement(
                        f.o,
                        { mr: 0.5, c: u < 0 ? g.b.red : g.b.green },
                        u >= 0 ? '▲' : '▼'
                      ),
                      l.a.createElement(f.o, { c: a }, Object(_.abbreviateNumber)(u), '%')
                    );
                  return l.a.createElement(
                    w.a,
                    {
                      m: '1 4',
                      key: ''.concat(n._id).concat(t),
                      to: Object(k.d)(n.data.community, n)
                    },
                    l.a.createElement(f.j, null, h)
                  );
                });
            }),
            a()(this, 'renderRow', e => {
              var t = S[e % 2],
                n = this.renderTicker(e, 1),
                r = this.renderTicker(e, 2);
              return l.a.createElement(
                f.r,
                { fdirection: 'row', flex: 1, bg: t, key: 'row'.concat(e) },
                l.a.createElement(f.o, { ref: t => (this.rows[e] = t) }, n, r)
              );
            });
        }
        componentDidMount() {
          this.props.actions.getTopPosts(),
            this.animate(),
            window.addEventListener('blur', this.pause);
        }
        componentWillUnmount() {
          window.removeEventListener('blur', this.pause),
            window.removeEventListener('focus', this.animate),
            cancelAnimationFrame(this.lastFrame);
        }
        render() {
          var { rows: e } = this.props,
            t = Array.from(Array(e).keys());
          return l.a.createElement(U, { fdirection: 'column' }, t.map(this.renderRow));
        }
      }
      a()(P, 'propTypes', {
        rows: m.a.number,
        actions: m.a.object,
        posts: m.a.object,
        communityState: m.a.object
      }),
        a()(P, 'defaultProps', { rows: 1 });
      var L = Object(p.c)(
          function(e) {
            return { posts: e.posts, communityState: e.community };
          },
          function(e) {
            return {
              actions: Object(h.bindActionCreators)({ getTopPosts: O.getTopPosts }, e)
            };
          }
        )(P),
        M = n('./src/modules/web_about/countUp/countUp.component.js'),
        R = n('./src/modules/web_about/countUp/countUp.coin.component.js'),
        C = n('./src/modules/web_about/appStoreButtons.js');
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function(t) {
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function F() {
        var e = c()([
          '\n  font-family: ',
          ';\n  flex-direction: column;\n  font-size: ',
          ';\n  line-height: ',
          ';\n'
        ]);
        return (
          (F = function() {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = c()([
          '\n  font-family: ',
          ';\n  color: ',
          ';\n  font-size: ',
          ';\n  line-height: ',
          ';\n  margin-top: ',
          ' 0;\n'
        ]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = c()([
          '\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding: ',
          ';\n  padding-left: ',
          ';\n  padding-right: ',
          ';\n  max-width: ',
          ';\n'
        ]);
        return (
          (A = function() {
            return e;
          }),
          e
        );
      }
      function B() {
        var e = c()([
          '\n  position: fixed;\n  left: ',
          ';\n  top: ',
          ';\n  opacity: ',
          ';\n  transition: opacity 0.1s linear;\n'
        ]);
        return (
          (B = function() {
            return e;
          }),
          e
        );
      }
      function H() {
        var e = c()([
          '\n  top: ',
          ';\n  right: ',
          ";\n  align-self: 'center';\n  position: ",
          ';\n  justify-content: center;\n'
        ]);
        return (
          (H = function() {
            return e;
          }),
          e
        );
      }
      function W() {
        var e = c()([
          '\n  position: fixed;\n  left: 50%;\n  transform: translate3d(-50%, ',
          ', 0);\n  transition: transform 0.3s ease-in;\n  bottom: ',
          ';\n  z-index: 1000;\n'
        ]);
        return (
          (W = function() {
            return e;
          }),
          e
        );
      }
      function q() {
        var e = c()([
          '\n  position: ',
          ';\n  bottom: ',
          ';\n  right: ',
          ';\n  opacity: ',
          ';\n  transform: rotate(-2.82deg);\n'
        ]);
        return (
          (q = function() {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = c()([
          '\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n'
        ]);
        return (
          (J = function() {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = c()([
          '\n  margin: ',
          ' auto;\n  text-align: center;\n  padding: 0 ',
          ';\n'
        ]);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      var Y = Object(b.default)(f.a)(N(), Object(g.i)(1), Object(g.i)(2)),
        G = Object(b.default)(f.q)(J()),
        V = Object(b.default)(f.r)(
          q(),
          () => Object(g.g)(['relative', 'absolute']),
          () => Object(g.g)(['auto', 0]),
          () => Object(g.g)(['auto', '-20vw']),
          () => Object(g.g)([1, 0.5])
        ),
        Z = Object(b.default)(f.r)(
          W(),
          e => (e.visible ? '0px' : '200px'),
          Object(g.i)(4)
        ),
        K = Object(b.default)(f.r)(
          H(),
          () => Object(g.h)([4, 'auto']),
          () => Object(g.h)([1, 'auto']),
          () => Object(g.g)(['fixed', 'relative'])
        ),
        Q = Object(b.default)(f.r)(B(), Object(g.i)(2), Object(g.i)(4), e =>
          e.visible ? 1 : 0
        ),
        X = Object(b.default)(f.r)(
          A(),
          Object(g.i)(6),
          Object(g.i)(2),
          Object(g.i)(2),
          Object(g.i)(75)
        ),
        $ = Object(b.default)(f.o)(
          I(),
          g.c.HELVETICA_NEUE,
          g.b.black,
          () => Object(g.h)([4.5, 3]),
          () => Object(g.h)([6, 4.8]),
          () => Object(g.h)(2)
        ),
        ee = Object(b.default)(f.o)(
          F(),
          g.c.HELVETICA_NEUE,
          () => Object(g.h)([2.5, 2]),
          () => Object(g.h)([3, 2.5])
        );
      class te extends u.Component {
        constructor() {
          var e;
          super(...arguments),
            (e = this),
            a()(this, 'state', { showJoinButton: !1 }),
            a()(this, 'onScroll', () => {
              var e =
                document.body.scrollHeight - window.innerHeight - window.scrollY < 250;
              this.state.showJoinButton !== e && this.setState({ showJoinButton: e });
              var t = window.scrollY > 500;
              this.state.showFixedLogo !== t && this.setState({ showFixedLogo: t });
            }),
            a()(
              this,
              'signUp',
              (function() {
                var t = o()(function*(t) {
                  var { actions: n, history: r } = e.props;
                  r.push('/communities'), n.showModal(t);
                });
                return function(e) {
                  return t.apply(this, arguments);
                };
              })()
            );
        }
        static fetchData(e) {
          return e(Object(E.getCommunities)());
        }
        componentDidMount() {
          var { communities: e, actions: t } = this.props;
          window.addEventListener('scroll', this.onScroll),
            j.h.start(),
            e.length || t.getCommunities();
        }
        componentWillUnmount() {
          window.removeEventListener('scroll', this.onScroll), j.h.stop();
        }
        render() {
          var { screenSize: e } = this.props,
            { showFixedLogo: t, showJoinButton: n } = this.state,
            r = e ? 4 : 16;
          return l.a.createElement(
            f.r,
            {
              bg: g.b.white,
              flex: 1,
              fdirection: 'column',
              style: { overflow: 'hidden' }
            },
            l.a.createElement(L, null),
            l.a.createElement(
              X,
              { minheight: '100vh' },
              l.a.createElement(
                w.a,
                { to: '/relevant/top' },
                l.a.createElement(f.e, {
                  mt: [0, 6],
                  h: [8, 7, 6],
                  mb: [6, 4],
                  mr: 'auto',
                  ml: [0, 'auto'],
                  src: '/img//logo.png',
                  alt: 'Relevant'
                })
              ),
              l.a.createElement(
                $,
                null,
                'Tired of the social media',
                l.a.createElement('br', null),
                'popularity game?'
              ),
              l.a.createElement(
                $,
                { inline: 1, mt: 6 },
                'Join a ',
                l.a.createElement(w.a, { to: '/communities' }, 'Relevant Community'),
                ' and get rewarded for your expertise.'
              ),
              l.a.createElement(
                f.r,
                { mt: 6, fdirection: ['row', 'column'], align: 'center' },
                l.a.createElement(
                  f.b,
                  {
                    h: 8,
                    p: '2 6',
                    mr: [3, 0],
                    onClick: () => this.signUp('signupSocial'),
                    alignself: ['flex-start', 'stretch']
                  },
                  l.a.createElement(ee, null, 'Join Relevant')
                ),
                l.a.createElement(
                  ee,
                  { mt: [0, 2], inline: 1 },
                  'or',
                  ' ',
                  l.a.createElement(
                    f.o,
                    {
                      style: { textDecoration: 'underline' },
                      inline: 1,
                      onClick: () => this.signUp('login'),
                      c: g.b.blue
                    },
                    'Log In'
                  )
                )
              )
            ),
            l.a.createElement(
              X,
              { mt: r },
              l.a.createElement(
                $,
                null,
                "Most social networks make it easy to find popular content, but they don't help us determine what’s important, or who we can trust."
              )
            ),
            l.a.createElement(M.a, {
              high: ['clickbait', 'cat videos'],
              highScore: [700, 1e3],
              low: ['climate change study', 'a nuanced opinion'],
              lowScore: [10, 30],
              type: 'thumb',
              color: g.b.lightGrey
            }),
            l.a.createElement(
              Y,
              null,
              'Web 2.0 metrics measure value according to engagement.'
            ),
            l.a.createElement(
              X,
              { mt: r },
              l.a.createElement(
                $,
                null,
                'That’s why we created Relevant, a manipulation-resistant social network that filters content according to quality, not clicks.'
              )
            ),
            l.a.createElement(M.a, {
              high: ['climate change study', 'a nuanced opinion'],
              highScore: [300, 500],
              low: ['clickbait', 'cat videos'],
              lowScore: [-40, -10],
              type: 'relevant',
              color: g.b.blue
            }),
            l.a.createElement(
              Y,
              null,
              'Votes from users with high Reputation count for more'
            ),
            l.a.createElement(
              X,
              { mt: 2 },
              l.a.createElement(
                $,
                null,
                'The Relevant Reputation System puts curation power in the hands of trusted community members instead of passive consumers.'
              )
            ),
            l.a.createElement(
              X,
              { mt: r },
              l.a.createElement($, null, 'Relevant rewards users for curating content.')
            ),
            l.a.createElement(R.a, {
              high: ['climate change study', 'a nuanced opinion'],
              low: ['clickbait', 'cat videos'],
              type: 'coin',
              color: g.b.gold
            }),
            l.a.createElement(
              Y,
              null,
              'Users earn coins for betting on quality content.'
            ),
            l.a.createElement(
              X,
              null,
              l.a.createElement(
                $,
                null,
                'Users can earn coins by betting on the relevance of content. Bets don’t impact content rankings but provide a way to reward users for their expertise.'
              )
            ),
            l.a.createElement(
              X,
              { mt: r },
              l.a.createElement(
                $,
                null,
                'Each Relevant Community has its own unique Reputation System. Communities decide what kind of information is valuable to them and how that value is measured.'
              ),
              l.a.createElement(
                $,
                null,
                'Here are a few communities you can join right now:'
              ),
              l.a.createElement(f.r, { mt: 6 }),
              l.a.createElement(y.a, { p: 0, hashtags: !0 })
            ),
            l.a.createElement(
              f.r,
              {
                margin: 'auto',
                flex: [1, null],
                mt: r,
                fdirection: ['row', 'column'],
                justify: ['center', 'center'],
                align: 'center',
                h: ['auto', '100vh'],
                mb: [0, 0]
              },
              l.a.createElement(
                f.r,
                {
                  fdirection: 'column',
                  align: ['flex-start', 'center'],
                  justify: 'center',
                  style: { zIndex: 1 },
                  flex: [0, 1]
                },
                l.a.createElement(
                  f.r,
                  { align: 'center' },
                  l.a.createElement(f.e, {
                    h: [8, 0],
                    src: '/img/logo.png',
                    alt: 'Relevant',
                    zIndex: 1,
                    mt: 'auto'
                  })
                ),
                l.a.createElement(C.a, { mt: [8, 4], mb: [0, 1] }),
                l.a.createElement(K, null, l.a.createElement(x.a, null))
              ),
              l.a.createElement(
                V,
                { ml: 3, justify: 'center', align: 'center' },
                l.a.createElement(
                  G,
                  {
                    w: [42.5, 'auto'],
                    h: [92.09932279909705, ''.concat(85, 'vh')],
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0
                  },
                  l.a.createElement('source', {
                    src: '/img/vid.webm',
                    type: 'video/webm'
                  }),
                  l.a.createElement('source', { src: '/img/vid.mp4', type: 'video/mp4' })
                ),
                l.a.createElement(f.e, {
                  w: [50, 'auto'],
                  h: ['auto', '100vh'],
                  src: '/img/phone-blank.png',
                  alt: 'Relevant Phone'
                })
              )
            ),
            l.a.createElement(
              Q,
              { mt: [2, 1], visible: t && !e },
              l.a.createElement(
                w.a,
                { to: '/relevant/top' },
                l.a.createElement(f.e, {
                  h: [6, 4, 3],
                  src: '/img/r-big.png',
                  alt: 'Relevant'
                })
              )
            ),
            l.a.createElement(
              Z,
              { w: ['auto', '100%'], mb: [0, 0], p: [0, '0 2'], visible: n },
              l.a.createElement(
                f.b,
                { flex: 1, h: 8, p: '2 6', onClick: () => this.signUp('signupSocial') },
                l.a.createElement(ee, null, 'Join Relevant')
              )
            )
          );
        }
      }
      a()(te, 'propTypes', {
        history: m.a.object,
        actions: m.a.object,
        communities: m.a.object,
        screenSize: m.a.number
      });
      t.default = Object(p.c)(
        function(e) {
          return {
            screenSize: e.navigation.screenSize,
            communities: e.community.communities
          };
        },
        function(e) {
          return {
            actions: Object(h.bindActionCreators)(
              z(z({}, v), {}, { getCommunities: E.getCommunities }),
              e
            )
          };
        }
      )(te);
    },
    './src/modules/web_about/appStoreButtons.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        i = n('../../node_modules/react/index.js'),
        a = n.n(i),
        s = n('./src/modules/styled/web.js');
      t.a = e =>
        a.a.createElement(
          s.r,
          o()({}, e, { mt: [8, 4], mb: [0, 1] }),
          a.a.createElement(
            'a',
            {
              href:
                'https://itunes.apple.com/us/app/relevant-communities/id1173025051?mt=8',
              target: '_blank'
            },
            a.a.createElement(s.e, { h: [6, 6, 5], mr: [2, 1], src: '/img/appstore.png' })
          ),
          a.a.createElement(
            'a',
            {
              href:
                'https://play.google.com/store/apps/details?id=com.relevantnative&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
              target: '_blank'
            },
            a.a.createElement(s.e, { h: [6, 6, 5], src: '/img/googleplaystore.png' })
          )
        );
    },
    './src/modules/web_about/countUp/countUp.animatedEl.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return x;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(i),
        s = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        c = n.n(s),
        u = n('../../node_modules/react/index.js'),
        l = n.n(u),
        d = n('../../node_modules/prop-types/index.js'),
        m = n.n(d),
        h = n('./src/modules/styled/web.js'),
        p = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        f = n('./src/styles/index.js'),
        b = n('./src/utils/index.js'),
        g = n('./src/modules/web_about/countUp/countUp.images.js');
      function j() {
        var e = c()(['\n  flex: 1;\n  overflow: hidden;\n  max-width: ', ';\n']);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      var v = e => Math.random() * e,
        w = e => Math.floor(Math.random() * e),
        y = Object(p.default)(h.r)(j(), Object(f.i)(30));
      class x extends u.PureComponent {
        constructor() {
          super(...arguments),
            a()(this, 'state', { index: 0 }),
            a()(this, 'container', l.a.createRef()),
            a()(this, 'index', 0),
            a()(this, 'thumbs', Array.from({ length: 20 }, l.a.createRef)),
            a()(
              this,
              'arrowTypes',
              Array.from({ length: 20 }, () => ({
                up: Math.random() > 0.5,
                big: Math.random() > 0.2
              }))
            ),
            a()(this, 'pause', () => {
              clearTimeout(this.timeout),
                window.removeEventListener('focus', this.animate),
                window.addEventListener('focus', this.animate);
            }),
            a()(this, 'animate', e => {
              var { index: t = 0 } = e,
                { active: n, firingRate: r } = this.props;
              n
                ? ((this.timeout = setTimeout(() => this.animate({ index: t + 1 }), r)),
                  this.add(t),
                  this.setState({ index: t }))
                : (this.timeout = setTimeout(() => this.animate({ index: t }), 100));
            }),
            a()(this, 'add', e => {
              var t,
                { parallax: n, speed: r, mode: o, type: i, onFinished: a } = this.props,
                s = this.container.current.offsetWidth,
                c = this.container.current.offsetHeight,
                u = s * r,
                l = 1,
                d = e % this.thumbs.length,
                m = this.thumbs[d],
                h = m.current.offsetHeight;
              this.arrowTypes[d] = {};
              var p,
                f = this.arrowTypes[d],
                g = 0;
              switch (i) {
                case 'relevant':
                  o
                    ? ((f.big = Math.random() < 0.7),
                      (f.up = f.big ? Math.random() < 0.9 : Math.random() < 0.2))
                    : ((f.big = Math.random() < 0.3),
                      (f.up = f.big ? Math.random() < 0.1 : Math.random() < 0.8)),
                    (l = f.big ? w(10) + 10 : 1),
                    f.up || (l *= -1),
                    (h = f.big ? 70 : 25),
                    (g = v(20)),
                    (t = w(c - h)),
                    (p = f.up ? 0 : c - h);
                  break;
                case 'thumb':
                  (p = (c - h) / 2), (t = w(c - h));
                  break;
                default:
                  p = t = (c - h) / 2;
              }
              if (m && m.current && t) {
                var j = () =>
                  b.h.add({
                    from: { x: -s + g, y: t },
                    to: { x: 0, y: p },
                    duration: u + v(n),
                    easing: b.h.easing.circ_in,
                    update: e => {
                      var { x: n, y: r } = e;
                      m.current.style.transform = 'translate3D('
                        .concat(n.toFixed(1), 'px, ')
                        .concat(r || t, 'px, 0)');
                    },
                    finished: () => {
                      (m.current.style.transform = 'translate3D('.concat(
                        50,
                        'px, ',
                        t,
                        'px, 0)'
                      )),
                        a && a(l);
                    }
                  });
                b.h.add({
                  from: { scale: 0 },
                  to: { scale: 1 },
                  duration: 200,
                  update: e => {
                    var { scale: n } = e;
                    m.current.style.transform = 'translate3D('
                      .concat(-s + g, 'px, ')
                      .concat(t, 'px, 0) scale(')
                      .concat(n, ') ');
                  },
                  easing: b.h.easing.cubic_bezier(0.83, 0.42, 0, 1.24),
                  finished: () => j()
                });
              }
            });
        }
        componentDidMount() {
          this.animate(0),
            this.thumbs.forEach(e => {
              e.current.style.transform = 'translate3D(' + [10, 0, 0].join('px,') + 'px)';
            }),
            this.props.onMeasure(
              this.container.current.offsetWidth,
              this.container.current.offsetHeight
            ),
            window.addEventListener('blur', this.pause);
        }
        componentWillUnmount() {
          window.removeEventListener('blur', this.pause),
            window.removeEventListener('focus', this.animate),
            clearTimeout(this.timeout);
        }
        render() {
          var e,
            { type: t, height: n } = this.props;
          switch (t) {
            case 'thumb':
              e = this.thumbs.map((e, t) => l.a.createElement(g.f, { ref: e, key: t }));
              break;
            case 'coin':
              e = this.thumbs.map((e, t) => l.a.createElement(g.e, { ref: e, key: t }));
              break;
            default:
              e = this.thumbs.map((e, t) =>
                l.a.createElement(g.a, o()({ ref: e, key: t }, this.arrowTypes[t]))
              );
          }
          return l.a.createElement(y, { h: n, ref: this.container }, e);
        }
      }
      a()(x, 'propTypes', {
        type: m.a.string,
        active: m.a.bool,
        firingRate: m.a.number,
        parallax: m.a.number,
        speed: m.a.number,
        onMeasure: m.a.func,
        onFinished: m.a.func,
        score: m.a.number,
        mode: m.a.bool,
        height: m.a.number
      });
    },
    './src/modules/web_about/countUp/countUp.box.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return y;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        a = n.n(i),
        s = n('../../node_modules/react/index.js'),
        c = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = n('./src/modules/styled/web.js'),
        m = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        h = n('./src/styles/index.js'),
        p = n('./src/utils/index.js');
      function f() {
        var e = a()([
          '\n  text-transform: uppercase;\n  font-size: ',
          ';\n  line-height: ',
          ';\n  ',
          '\n'
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = a()([
          '\n  position: absolute;\n  top: 0;\n  box-shadow: -4px 0px 5px -1px #dddddd;\n  z-index: -1;\n'
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = a()([
          '\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  transition: background-color 0.5s ease;\n  ',
          ';\n'
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      var j = Object(m.default)(d.r)(g(), e => (e.c ? 'color: '.concat(e.c, ';') : '')),
        v = Object(m.default)(d.r)(b()),
        w = Object(m.default)(d.o)(
          f(),
          () => Object(h.h)([5, 3]),
          () => Object(h.h)([5, 3]),
          e => (e.hide ? 'visibility: hidden;' : '')
        );
      class y extends s.PureComponent {
        componentDidMount() {
          this.animate();
        }
        componentDidUpdate(e) {
          e.headline !== this.props.headline && this.animate();
        }
        animate() {
          var { headline: e, onHeadlineFinished: t } = this.props,
            n = e.length,
            r = 0;
          p.h.remove(this.t),
            (this.t = p.h.add({
              duration: 500,
              easing: p.h.easing.circOut,
              update: (t, o) => {
                var i = Math.round(o * n);
                r !== i &&
                  ((r = i),
                  (this.label.innerHTML = e.substr(0, i)),
                  (this.labelRest.innerHTML = e.substr(i, e.length - 1)));
              },
              finished: () => {
                t && t();
              }
            }));
        }
        render() {
          var { type: e, color: t, children: n, height: r } = this.props,
            o = [Object(h.i)(75), '65%'];
          return c.a.createElement(
            j,
            { h: r, w: o, bg: t, c: 'relevant' === e ? 'white' : 'black', pr: 1 },
            n,
            c.a.createElement(
              d.f,
              null,
              c.a.createElement(w, { inline: 1, ref: e => (this.label = e) }),
              c.a.createElement(w, {
                inline: 1,
                hide: !0,
                ref: e => (this.labelRest = e)
              })
            ),
            c.a.createElement(v, { h: r, w: o })
          );
        }
      }
      o()(y, 'propTypes', {
        height: l.a.number,
        type: l.a.string,
        headline: l.a.string,
        color: l.a.string,
        onHeadlineFinished: l.a.func,
        children: l.a.oneOfType([l.a.array, l.a.object])
      });
    },
    './src/modules/web_about/countUp/countUp.coin.component.js': function(e, t, n) {
      'use strict';
      (function(e) {
        n.d(t, 'a', function() {
          return M;
        });
        var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
          o = n.n(r),
          i = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
          a = n.n(i),
          s = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
          c = n.n(s),
          u = n('../../node_modules/react/index.js'),
          l = n.n(u),
          d = n('../../node_modules/prop-types/index.js'),
          m = n.n(d),
          h = n('./src/utils/index.js'),
          p = n(
            '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
          ),
          f = n('./src/modules/styled/web.js'),
          b = n('./src/styles/index.js'),
          g = n('./src/modules/web_about/countUp/countUp.styles.js'),
          j = n('./src/modules/web_about/countUp/countUp.box.js'),
          v = n('./src/modules/web_about/countUp/countUp.animatedEl.js'),
          w = n('./src/modules/web_about/countUp/countUp.images.js');
        function y(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function x(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? y(Object(n), !0).forEach(function(t) {
                  a()(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : y(Object(n)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        function E() {
          var e = c()([
            '\n  bottom: -60px;\n  right: -20px;\n  background-image: url(/img/betLoose.png);\n  transform: rotate(0deg) scale(0);\n  ',
            '\n'
          ]);
          return (
            (E = function() {
              return e;
            }),
            e
          );
        }
        function O() {
          var e = c()([
            '\n  top: ',
            ';\n  right: ',
            ';\n  background-image: url(/img/betWin.png);\n  transform: rotate(0deg) scale(0);\n  ',
            '\n'
          ]);
          return (
            (O = function() {
              return e;
            }),
            e
          );
        }
        function k() {
          var e = c()([
            '\n  position: absolute;\n  width: ',
            ';\n  height: ',
            ';\n  background-size: contain;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  z-index: 1;\n  opacity: 1;\n'
          ]);
          return (
            (k = function() {
              return e;
            }),
            e
          );
        }
        var _ = e => Math.floor(Math.random() * (e[1] - e[0]) + e[0]),
          T = { active: !0, firingRate: 2e3, parallax: 1, speed: 4.5 },
          U = { active: !1, firingRate: 0, parallax: 0, speed: 0 },
          S = Object(p.default)(f.o)(
            k(),
            () => Object(b.h)([25, 20]),
            () => Object(b.h)([25, 20])
          ),
          P = Object(p.default)(S)(
            O(),
            () => Object(b.h)([-7.5, -8]),
            () => Object(b.h)([-12, -3]),
            e =>
              e.show
                ? '\n    transition: all .3s cubic-bezier(.83,.42,0,1.24);\n    transform:  rotate(23deg) scale(1);\n    '
                : ''
          ),
          L = Object(p.default)(S)(E(), e =>
            e.show
              ? '\n    transition: all .5s cubic-bezier(.83,.42,0,1.24);\n    transform: rotate(-15deg) scale(1);\n    '
              : ''
          );
        class M extends u.Component {
          constructor() {
            super(...arguments),
              a()(this, 'state', {
                mode: !1,
                animationState: 0,
                headline: '',
                score: 0,
                highIndex: -1,
                lowIndex: -1,
                marquee: x({}, U),
                thumbTiming: { delay: 10, duration: 3e3 },
                width: e.window ? window.innerWidth / 3 : 0,
                height: 212,
                postRank: 0
              }),
              a()(this, 'pause', () => {
                clearTimeout(this.timeout),
                  window.removeEventListener('focus', this.advance),
                  window.addEventListener('focus', this.advance);
              }),
              a()(this, 'advance', () => {
                var e,
                  { high: t, low: n } = this.props,
                  { mode: r, highIndex: o, lowIndex: i, postRank: a } = this.state;
                (r = !r)
                  ? ((e = t[(o += 1) % t.length]), (a = _([50, 100])))
                  : ((e = n[(i += 1) % n.length]), (a = _([-100, -50]))),
                  this.setState({
                    mode: r,
                    headline: e,
                    highIndex: o,
                    lowIndex: i,
                    animationState: 0,
                    postRank: a
                  });
              }),
              a()(this, 'handleMeasurement', (e, t) => {
                this.setState({ width: e, height: t }, () => this.advance());
              }),
              a()(this, 'handleHeadlineFinished', () => {
                0 === this.state.animationState &&
                  (clearTimeout(this.timeout),
                  this.setState({ marquee: T, score: this.state.score + 1 }));
              }),
              a()(this, 'handleCoinFinished', () => {
                this.setState({ marquee: U });
              }),
              a()(this, 'handleTimerFinished', () => {
                this.setState({ animationState: 1 }),
                  (this.timeout = setTimeout(() => {
                    this.advance();
                  }, 3e3));
              });
          }
          componentDidMount() {
            window.addEventListener('blur', this.pause);
          }
          componentWillUnmount() {
            window.removeEventListener('blur', this.pause),
              window.removeEventListener('focus', this.advance),
              clearTimeout(this.timeout),
              h.h.reset();
          }
          render() {
            var { color: e } = this.props,
              {
                mode: t,
                headline: n,
                score: r,
                marquee: i,
                thumbTiming: a,
                animationState: s,
                postRank: c
              } = this.state,
              u = 1 === s && (t ? 'win' : 'loose');
            return l.a.createElement(
              g.a,
              null,
              l.a.createElement(
                v.a,
                o()(
                  {
                    height: 26,
                    type: 'coin',
                    score: r,
                    onMeasure: this.handleMeasurement,
                    onFinished: this.handleCoinFinished
                  },
                  i
                )
              ),
              l.a.createElement(
                j.a,
                {
                  height: 26,
                  type: 'coin',
                  color: e,
                  headline: n,
                  onHeadlineFinished: this.handleHeadlineFinished
                },
                l.a.createElement(
                  w.b,
                  o()({ showRank: 1 === s, score: r, postRank: c }, a, {
                    onTimerFinished: this.handleTimerFinished
                  })
                ),
                l.a.createElement(
                  P,
                  { show: 'win' === u },
                  l.a.createElement(f.a, { p: 4, fs: [3, 2.5], lh: [4, 3] }, 'YOU WIN!')
                ),
                l.a.createElement(
                  L,
                  { show: 'loose' === u },
                  l.a.createElement(
                    f.a,
                    { p: 7, fs: [3, 2.5], lh: [4, 3] },
                    'NOT A GREAT BET :('
                  )
                )
              ),
              l.a.createElement(g.b, { flex: [1, null], w: ['auto', 2] })
            );
          }
        }
        a()(M, 'propTypes', { high: m.a.array, low: m.a.array, color: m.a.string });
      }.call(this, n('../../node_modules/webpack/buildin/global.js')));
    },
    './src/modules/web_about/countUp/countUp.component.js': function(e, t, n) {
      'use strict';
      (function(e) {
        n.d(t, 'a', function() {
          return v;
        });
        var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
          o = n.n(r),
          i = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
          a = n.n(i),
          s = n('../../node_modules/react/index.js'),
          c = n.n(s),
          u = n('../../node_modules/prop-types/index.js'),
          l = n.n(u),
          d = n('./src/utils/index.js'),
          m = n('./src/modules/web_about/countUp/countUp.styles.js'),
          h = n('./src/modules/web_about/countUp/countUp.box.js'),
          p = n('./src/modules/web_about/countUp/countUp.animatedEl.js'),
          f = n('./src/modules/web_about/countUp/countUp.images.js');
        function b(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function g(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? b(Object(n), !0).forEach(function(t) {
                  a()(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : b(Object(n)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        var j = {
          good: {
            relevant: { active: !0, firingRate: 100, parallax: 1.3, speed: 5 },
            thumb: { active: !0, firingRate: 340, parallax: 1.1, speed: 3.69 }
          },
          bad: {
            relevant: { active: !0, firingRate: 300, parallax: 1.3, speed: 5 },
            thumb: { active: !0, firingRate: 20, parallax: 1.3, speed: 0.8 }
          },
          off: { active: !1, firingRate: 0, parallax: 0, speed: 0 }
        };
        class v extends s.Component {
          constructor() {
            super(...arguments),
              a()(this, 'state', {
                mode: !1,
                headline: '',
                score: 0,
                highIndex: -1,
                lowIndex: -1,
                marquee: j.off,
                thumbTiming: { delay: 0, duration: 2800 },
                width: e.window ? window.innerWidth / 3 : 0
              }),
              a()(this, 'pause', () => {
                clearTimeout(this.timeout),
                  window.removeEventListener('focus', this.advance),
                  window.addEventListener('focus', this.advance);
              }),
              a()(this, 'advance', () => {
                var e,
                  t,
                  n,
                  { high: r, low: o, type: i } = this.props,
                  { mode: a, highIndex: s, lowIndex: c } = this.state;
                (a = !a)
                  ? ((e = r[(s += 1) % r.length]), (n = 100), (t = g({}, j.bad[i])))
                  : ((e = o[(c += 1) % o.length]), (n = -100), (t = g({}, j.good[i])));
                this.setState({
                  mode: a,
                  headline: e,
                  score: n,
                  currentScore: 0,
                  highIndex: s,
                  lowIndex: c,
                  marquee: t,
                  thumbTiming: { delay: t.speed * this.state.width, duration: 1950 }
                }),
                  (this.timeout = setTimeout(() => {
                    (t.active = !1),
                      this.setState({ marquee: j.off }),
                      (this.timeout = setTimeout(() => {
                        this.advance();
                      }, 2e3));
                  }, 2e3));
              });
          }
          componentDidMount() {
            window.addEventListener('blur', this.pause);
          }
          handleMeasurement(e) {
            this.setState({ width: e }, () => this.advance());
          }
          handleFinished(e) {
            this.setState({ currentScore: this.state.currentScore + e });
          }
          componentWillUnmount() {
            d.h.reset(),
              clearTimeout(this.timeout),
              window.removeEventListener('blur', this.pause),
              window.removeEventListener('focus', this.advance);
          }
          render() {
            var { color: e, type: t } = this.props,
              {
                headline: n,
                mode: r,
                currentScore: i,
                marquee: a,
                thumbTiming: s
              } = this.state;
            return c.a.createElement(
              m.a,
              null,
              c.a.createElement(
                p.a,
                o()(
                  {
                    height: 26,
                    type: t,
                    mode: r,
                    onMeasure: this.handleMeasurement.bind(this),
                    onFinished: this.handleFinished.bind(this)
                  },
                  a
                )
              ),
              c.a.createElement(
                h.a,
                { height: 26, type: t, color: e, score: i, headline: n, thumbTiming: s },
                'thumb' === t
                  ? c.a.createElement(f.d, o()({ score: i }, s))
                  : c.a.createElement(f.c, o()({ score: i }, s))
              ),
              c.a.createElement(m.b, { flex: [1, null], w: ['auto', 2] })
            );
          }
        }
        a()(v, 'propTypes', {
          high: l.a.array,
          highScore: l.a.array,
          low: l.a.array,
          lowScore: l.a.array,
          color: l.a.string,
          type: l.a.string
        });
      }.call(this, n('../../node_modules/webpack/buildin/global.js')));
    },
    './src/modules/web_about/countUp/countUp.images.js': function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return P;
      }),
        n.d(t, 'a', function() {
          return R;
        }),
        n.d(t, 'd', function() {
          return z;
        }),
        n.d(t, 'c', function() {
          return B;
        }),
        n.d(t, 'e', function() {
          return W;
        }),
        n.d(t, 'b', function() {
          return J;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        a = n.n(i),
        s = n('../../node_modules/react/index.js'),
        c = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = n('./src/modules/styled/web.js'),
        m = n('./src/styles/index.js'),
        h = n('./src/utils/index.js'),
        p = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
      function f() {
        var e = a()([
          '\n  width: ',
          'px;\n  height: ',
          'px};\n  margin-top: ',
          ';\n  margin-bottom: ',
          ';\n'
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = a()([
          '\n  position: absolute;\n  top: 0;\n  right: -100px;\n  width: 100px;\n  height: 100px;\n  justify-content: center;\n  align-items: center;\n  background: ',
          ';\n  color: black;\n  border-radius: 50%;\n  text-transform: uppercase;\n  font-size: ',
          ';\n'
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = a()([
          '\n  justify-content: center;\n  font-size: ',
          ';\n  line-height: ',
          ';\n  height: ',
          ';\n  margin: ',
          ' 0;\n'
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = a()([
          '\n  width: ',
          ';\n  height: ',
          ';\n  transition: ',
          ';\n  transform: ',
          ';\n'
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = a()([
          '\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: ',
          ';\n  margin-right: ',
          ';\n'
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = a()([
          '\n  width: ',
          ';\n  height: ',
          ';\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-image: url(/img/thumb.svg);\n  align-items: center;\n  justify-content: center;\n'
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = a()([
          '\n  position: relative;\n  margin-left: ',
          ';\n  margin-right: ',
          ';\n  padding-bottom: ',
          ';\n  color: ',
          ';\n'
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = a()(['\n  width: 50%;\n']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = a()([
          '\n  position: absolute;\n  top: 0;\n  left: 100%;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n'
        ]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = a()([
          '\n  position: absolute;\n  top: 50%;\n  left: 45%;\n  font-size: 14px;\n  font-weight: bold;\n'
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = a()(['\n  height: ', ';\n']);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = a()(['\n  position: absolute;\n  top: 0;\n  left: 100%;\n']);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      var T = Object(p.default)(d.r)(_()),
        U = Object(p.default)(d.e)(k(), () => Object(m.h)([8, 6])),
        S = Object(p.default)(d.o)(O()),
        P = c.a.forwardRef((e, t) =>
          c.a.createElement(
            T,
            o()({ ref: t }, e),
            c.a.createElement(U, { src: '/img/thumb-bg.svg' }),
            c.a.createElement(S, null, '+1')
          )
        ),
        L = Object(p.default)(d.r)(E()),
        M = Object(p.default)(d.e)(x()),
        R = c.a.forwardRef((e, t) =>
          c.a.createElement(
            L,
            o()(
              {
                ref: t,
                bounce: !0,
                w: e.big ? Object(m.i)(9) : Object(m.i)(3),
                h: e.big ? Object(m.i)(9) : Object(m.i)(3)
              },
              e,
              { bg: e.up ? m.b.green : m.b.red }
            ),
            c.a.createElement(M, {
              src: e.up
                ? '/img/countUp-big-arrow-up.svg'
                : '/img/countUp-big-arrow-down.svg'
            })
          )
        );
      R.propTypes = { big: l.a.bool, up: l.a.bool };
      var C = Object(p.default)(d.r)(
          y(),
          () => Object(m.h)([4, 2]),
          () => Object(m.h)([4, 2]),
          Object(m.i)(2),
          m.b.black
        ),
        D = Object(p.default)(d.r)(
          w(),
          () => Object(m.h)([8, 6]),
          () => Object(m.h)([8, 6])
        );
      function z(e) {
        var { score: t } = e;
        return c.a.createElement(
          C,
          null,
          c.a.createElement(
            D,
            { src: '/img/thumb.svg' },
            c.a.createElement(d.j, { mt: 2.2, ml: 1.2, fs: [2.4, 1.8] }, t)
          )
        );
      }
      z.propTypes = { score: l.a.number };
      var F = Object(p.default)(d.r)(
          v(),
          () => Object(m.h)([2, 1]),
          () => Object(m.h)([2, 1])
        ),
        I = Object(p.default)(d.e)(
          j(),
          () => Object(m.h)([12, 7]),
          () => Object(m.h)([7, 5]),
          e => (e.bounce ? 'transform .2 ease-out' : 'transform .7s ease-out'),
          e => (e.bounce ? 'scale(1.2)' : 'scale(1)')
        ),
        A = Object(p.default)(d.r)(
          g(),
          () => Object(m.h)([5, 3.5]),
          Object(m.i)(5),
          Object(m.i)(5),
          Object(m.i)(1.5)
        );
      function B(e) {
        var { score: t } = e,
          [n, r] = Object(s.useState)(0),
          o = n !== t && 0 !== t;
        return (
          o && requestAnimationFrame(() => r(t)),
          c.a.createElement(
            F,
            null,
            c.a.createElement(I, {
              bounce: o && n < t,
              src: '/img/countUp-big-arrow-up.svg'
            }),
            c.a.createElement(A, { bounce: o }, t),
            c.a.createElement(I, {
              bounce: o && n > t,
              src: '/img/countUp-big-arrow-down.svg'
            })
          )
        );
      }
      B.propTypes = { score: l.a.number };
      var H = Object(p.default)(d.r)(b(), m.b.gold, () => Object(m.h)([5, 3.5])),
        W = c.a.forwardRef((e, t) => c.a.createElement(H, o()({ ref: t }, e), 'BET')),
        q = p.default.canvas(f(), 45, 45, Object(m.i)(1), Object(m.i)(1));
      class J extends s.PureComponent {
        componentDidMount() {
          this.resize(), this.reset();
        }
        componentDidUpdate(e) {
          this.props.score !== e.score && this.animate(),
            !this.props.showRank && e.showRank && this.resize();
        }
        resize() {
          var { devicePixelRatio: e } = window,
            t = 45 * e,
            n = 45 * e;
          (this.canvas.width = t),
            (this.canvas.height = n),
            (this.canvas.style.width = '45px'),
            (this.canvas.style.height = '45px');
        }
        reset(e) {
          e = e || this.canvas.getContext('2d');
          var t = this.canvas.width,
            n = this.canvas.height,
            r = 3.5 * devicePixelRatio;
          (e.strokeStyle = '#000'),
            (e.lineWidth = r),
            (e.lineJoin = 'round'),
            e.clearRect(0, 0, t, n),
            e.beginPath(),
            e.arc(t / 2, n / 2, t / 2 - r, 0, 2 * Math.PI),
            e.stroke();
        }
        animate() {
          if (this.canvas) {
            var { delay: e, duration: t, score: n, onTimerFinished: r } = this.props,
              o = this.canvas.getContext('2d'),
              i = this.canvas.width,
              a = this.canvas.height,
              s = 3.5 * devicePixelRatio;
            (o.fillStyle = '#fff'),
              (o.strokeStyle = '#000'),
              (o.lineWidth = s),
              (o.lineJoin = 'round'),
              h.h.remove(this.t),
              (this.t = h.h.add({
                from: { angle: 1.5 * Math.PI },
                to: { angle: 3.5 * Math.PI },
                delay: e,
                duration: t,
                update: e => {
                  var { angle: t } = e;
                  o.clearRect(0, 0, i, a),
                    o.beginPath(),
                    o.moveTo(i / 2, a / 2),
                    o.lineTo(i / 2, s),
                    o.arc(i / 2, a / 2, i / 2 - s, 1.5 * Math.PI, t),
                    o.closePath(),
                    o.stroke();
                },
                finished: () => {
                  this.reset(o), r && r(n);
                }
              }));
          }
        }
        render() {
          var { showRank: e, postRank: t } = this.props;
          return c.a.createElement(
            F,
            null,
            c.a.createElement(I, { src: '/img/countUp-black-arrow-up.svg' }),
            c.a.createElement(
              d.r,
              { h: 9, align: 'center' },
              e
                ? c.a.createElement(A, null, t)
                : c.a.createElement(q, { ref: e => (this.canvas = e) })
            ),
            c.a.createElement(I, { src: '/img/countUp-black-arrow-down.svg' })
          );
        }
      }
      J.propTypes = {
        showRank: l.a.bool,
        postRank: l.a.number,
        score: l.a.number,
        delay: l.a.number,
        duration: l.a.number,
        onTimerFinished: l.a.func
      };
    },
    './src/modules/web_about/countUp/countUp.styles.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return l;
      }),
        n.d(t, 'b', function() {
          return d;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        o = n.n(r),
        i = n('./src/modules/styled/web.js'),
        a = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        s = n('./src/styles/index.js');
      function c() {
        var e = o()(['\n  max-width: ', ';\n']);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = o()([
          '\n  flex: 1;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n'
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      var l = Object(a.default)(i.r)(u()),
        d = Object(a.default)(i.r)(c(), Object(s.i)(30));
    }
  }
]);
//# sourceMappingURL=24.bundle.js.map
