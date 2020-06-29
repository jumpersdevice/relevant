(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [40],
  {
    './src/modules/activity/activity.actions.js': function(n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, 'setActivity', function() {
          return g;
        }),
        t.d(e, 'resetActivity', function() {
          return v;
        }),
        t.d(e, 'clearCount', function() {
          return y;
        }),
        t.d(e, 'setCount', function() {
          return j;
        }),
        t.d(e, 'getActivity', function() {
          return w;
        }),
        t.d(e, 'markRead', function() {
          return O;
        }),
        t.d(e, 'createNotification', function() {
          return x;
        }),
        t.d(e, 'getNotificationCount', function() {
          return E;
        }),
        t.d(e, 'showBannerPrompt', function() {
          return k;
        }),
        t.d(e, 'hideBannerPrompt', function() {
          return _;
        }),
        t.d(e, 'enableDesktopNotifications', function() {
          return N;
        }),
        t.d(e, 'showBetPrompt', function() {
          return S;
        }),
        t.d(e, 'showPushNotificationPrompt', function() {
          return C;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = t.n(r),
        i = t('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        c = t.n(i),
        a = t('./src/core/actionTypes.js'),
        u = t('./src/modules/ui/error.actions.js'),
        s = t('./src/utils/index.js');
      function l() {
        return (l = c()(function*() {
          try {
            var n = yield navigator.serviceWorker.ready,
              e = yield n.pushManager.getSubscription();
            if (e) return e;
            var t = d(
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4'
            );
            return n.pushManager.subscribe({
              userVisibleOnly: !0,
              applicationServerKey: t
            });
          } catch (n) {
            return console.log(n), null;
          }
        })).apply(this, arguments);
      }
      function d(n) {
        for (
          var e = (n + '='.repeat((4 - (n.length % 4)) % 4))
              .replace(/-/g, '+')
              .replace(/_/g, '/'),
            t = window.atob(e),
            r = new Uint8Array(t.length),
            o = 0;
          o < t.length;
          ++o
        )
          r[o] = t.charCodeAt(o);
        return r;
      }
      (function() {
        try {
          navigator.serviceWorker.register('/service-worker.js');
        } catch (n) {
          console.log(n);
        }
      })();
      var f = t('./src/modules/auth/auth.actions.js');
      function p(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function m(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(t), !0).forEach(function(e) {
                o()(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              });
        }
        return n;
      }
      var b = ''.concat('http://localhost:3000', '/api/notification'),
        h = n => ({
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer '.concat(n)
          }
        });
      function g(n, e, t) {
        return { type: a.G, payload: { data: n, type: e, index: t } };
      }
      function v(n) {
        return { type: 'RESET_ACTIVITY', payload: n };
      }
      function y() {
        return { type: 'CLEAR_COUNT' };
      }
      function j(n) {
        return { type: a.O, payload: n };
      }
      function w(n) {
        return (function() {
          var e = c()(function*(e) {
            try {
              var t = yield e(
                s.b.request({
                  method: 'GET',
                  endpoint: 'notification',
                  path: '/',
                  auth: !0,
                  query: { skip: n }
                })
              );
              e(g(t, 'personal', n)), e(u.a('activity', !1));
            } catch (n) {
              u.a('activity', !0, n.message);
            }
          });
          return function(n) {
            return e.apply(this, arguments);
          };
        })();
      }
      function O() {
        return n =>
          s.f
            .getToken()
            .then(n =>
              fetch(''.concat(b, '/markread'), m(m({}, h(n)), {}, { method: 'PUT' }))
            )
            .then(() => {
              n({ type: 'CLEAR_COUNT' });
            })
            .catch(null);
      }
      function x(n) {
        return () =>
          s.f
            .getToken()
            .then(e =>
              fetch(
                ''.concat(b),
                m(m({}, h(e)), {}, { method: 'POST', body: JSON.stringify(n) })
              )
            )
            .catch(null);
      }
      function E() {
        return (function() {
          var n = c()(function*(n) {
            try {
              var e = yield n(
                s.b.request({
                  method: 'GET',
                  endpoint: 'notification',
                  path: '/unread',
                  auth: !0
                })
              );
              n(j(e.unread));
            } catch (n) {}
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })();
      }
      function k(n, e) {
        return { type: a.yb, payload: { promptType: n, promptProps: e } };
      }
      function _(n) {
        return { type: a.l, payload: n };
      }
      function N() {
        return (function() {
          var n = c()(function*(n) {
            try {
              var e = yield (function() {
                return l.apply(this, arguments);
              })();
              n(
                Object(f.updateNotificationSettings)({ desktop: { all: !0 } }, e.toJSON())
              ),
                n(_());
            } catch (n) {
              console.log(n);
            }
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })();
      }
      var S = (function() {
          var n = c()(function*(n) {
            return !(yield s.f.isDismissed('betDismissed', 14)) && n(k('bet'));
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })(),
        C = function() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (function() {
            var e = c()(function*(e) {
              return T({ dispatch: e, promptProps: n });
            });
            return function(n) {
              return e.apply(this, arguments);
            };
          })();
        };
      function T(n) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = c()(function*(n) {
          var { dispatch: e, promptProps: t } = n;
          return (
            (!Notification ||
              ('granted' !== Notification.permission &&
                'denied' !== Notification.permission)) &&
            !(yield s.f.isDismissed('pushDismissed', 30)) && e(k('push', t))
          );
        })).apply(this, arguments);
      }
    },
    './src/modules/discover/web/discoverHelper.js': function(n, e, t) {
      'use strict';
      t.d(e, 'b', function() {
        return r;
      }),
        t.d(e, 'c', function() {
          return o;
        }),
        t.d(e, 'a', function() {
          return i;
        });
      var r = [
          { key: 'new', title: 'New' },
          { key: 'top', title: 'Relevant' }
        ],
        o = [
          { key: 'new', title: 'New' },
          { key: 'top', title: 'Relevant' }
        ];
      function i(n, e) {
        var { tag: t, sort: i } = n.match.params,
          c = t ? o : r;
        return i && i !== e.sort
          ? { tabIndex: e.routes.findIndex(n => n.key === i), routes: c, sort: i }
          : i
          ? null
          : { tabIndex: -1, routes: c, sort: i };
      }
    },
    './src/modules/navigation/web/topnav.component.js': function(n, e, t) {
      'use strict';
      t.r(e);
      var r = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = t.n(r),
        i = t('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        c = t.n(i),
        a = t('../../node_modules/react/index.js'),
        u = t.n(a),
        s = t('../../node_modules/prop-types/index.js'),
        l = t.n(s),
        d = t('./src/modules/styled/web.js'),
        f = t('../../node_modules/react-redux/es/index.js'),
        p = t('../../node_modules/redux/es/redux.js'),
        m = t(
          '../../node_modules/react-router-dom/node_modules/react-router/esm/react-router.js'
        ),
        b = t('../../node_modules/lodash/get.js'),
        h = t.n(b),
        g = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        v = t('./src/modules/discover/web/discoverHelper.js');
      function y() {
        var n = c()(['\n  margin: 0;\n  padding: 0;\n']);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      var j = n => {
        var { linkData: e, community: t, tag: r } = n,
          o = t ? '/'.concat(t, '/').concat(e.key) : '/communities';
        return (
          r && (o += '/'.concat(r)),
          u.a.createElement(d.l, { to: encodeURI(o), mr: [2, 1] }, e.title)
        );
      };
      j.propTypes = { linkData: l.a.object, community: l.a.string, tag: l.a.string };
      var w = g.default.ul(y()),
        O = n => {
          var { view: e, community: t } = n;
          return u.a.createElement(
            w,
            null,
            v.b.map((n, r) =>
              u.a.createElement(j, {
                key: r,
                tag: h()(e, 'discover.tag'),
                community: t,
                linkData: n
              })
            )
          );
        };
      O.propTypes = { view: l.a.object, community: l.a.string };
      var x = Object(f.c)(function(n) {
          return { view: n.view, community: n.auth.community };
        })(O),
        E = t('./src/styles/index.js'),
        k = t('./src/modules/styled/uni.js'),
        _ = t('./src/modules/navigation/navigation.actions.js');
      class N extends a.Component {
        render() {
          var { view: n, auth: e, community: t, newPosts: r, actions: o } = this.props,
            i = h()(n, 'discover.community') || h()(e, 'community');
          if (!i) return null;
          var c = h()(t, 'communities.'.concat(i)),
            a = h()(n, 'discover.sort') || 'new',
            s = r[e.community],
            l = u.a.createElement(
              d.l,
              {
                to: '#',
                onClick: () => o.refreshTab('discover'),
                ml: 1,
                c: E.b.blue,
                hu: 1,
                lh: 1.5,
                fs: 1.5
              },
              'See New Posts'
            );
          return u.a.createElement(
            k.E,
            { fdirection: 'row', align: 'flex-start' },
            c
              ? u.a.createElement(
                  d.l,
                  {
                    lh: 1.5,
                    fs: 1.5,
                    c: E.b.black,
                    to: encodeURI('/'.concat(i, '/').concat(a))
                  },
                  'Community: ',
                  c.name,
                  ' '
                )
              : null,
            h()(n, 'discover.tag')
              ? u.a.createElement(
                  d.l,
                  {
                    lh: 1.5,
                    fs: 1.5,
                    c: E.b.black,
                    to: encodeURI(
                      '/'
                        .concat(i, '/')
                        .concat(a, '/')
                        .concat(n.discover.tag)
                    )
                  },
                  ' → #',
                  n.discover.tag
                )
              : null,
            s ? l : null
          );
        }
      }
      o()(N, 'propTypes', {
        view: l.a.object,
        auth: l.a.object,
        community: l.a.object,
        newPosts: l.a.object,
        actions: l.a.object
      });
      var S = Object(f.c)(
          n => ({
            newPosts: n.posts.newPostsAvailable,
            view: n.view,
            auth: n.auth,
            community: n.community
          }),
          n => ({
            actions: Object(p.bindActionCreators)({ refreshTab: _.refreshTab }, n)
          })
        )(N),
        C = t(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        T = t('./src/modules/activity/activity.actions.js'),
        P = t('./src/modules/navigation/ULink.component.js'),
        A = t('./src/modules/ui/web/menuIcon.component.js');
      function D() {
        var n = c()(['\n  ', '\n']);
        return (
          (D = function() {
            return n;
          }),
          n
        );
      }
      function L() {
        var n = c()([
          '\n  border-radius: 100%;\n  align-items: center;\n  height: ',
          ';\n  width: ',
          ';\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: ',
          ';\n'
        ]);
        return (
          (L = function() {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = c()([
          '\n  position: sticky;\n  /*   background-image: linear-gradient(hsla(0, 0%, 100%, 1) 80%, hsla(0, 0%, 100%, 0) 100%);\n   */\n  z-index: 100;\n  background-color: ',
          ';\n  height: ',
          ';\n  top: ',
          ';\n  left: ',
          ';\n'
        ]);
        return (
          (B = function() {
            return n;
          }),
          n
        );
      }
      var z = Object(C.b)(k.E)(
          B(),
          E.b.white,
          E.e.headerHeight,
          n => (n.top ? n.top : 0),
          E.e.sideNavWidth
        ),
        I = Object(C.b)(k.E)(L(), Object(E.i)(2), Object(E.i)(2), Object(E.i)(1)),
        R = Object(g.default)(d.b)(D(), n =>
          n.screenSize
            ? '\n    position: fixed;\n    bottom: '
                .concat(Object(E.i)(2), ';\n    right: ')
                .concat(Object(E.i)(2), ';\n    height: ')
                .concat(Object(E.i)(8), ';\n    width: ')
                .concat(
                  Object(E.i)(8),
                  ';\n    min-width: 0;\n    border-radius: 100%;\n    background-color: '
                )
                .concat(E.b.blue, ';\n  ')
            : ''
        );
      class U extends a.Component {
        constructor() {
          super(...arguments),
            o()(this, 'state', {}),
            o()(this, 'getNotificationCount', () => {
              var n = new Date(),
                { isAuthenticated: e } = this.props.auth;
              (this.state.timeSinceNotificationCount &&
                n.getTime() - this.state.timeSinceNotificationCount.getTime() < 3e4) ||
                (e &&
                  (this.setState({ timeSinceNotificationCount: n }),
                  this.props.actions.getNotificationCount()));
            }),
            o()(this, 'toggleLogin', () => {
              var { location: n, history: e } = this.props;
              e.push({ search: '?redirect='.concat(n.pathname) }),
                this.props.actions.showModal('login');
            });
        }
        componentDidMount() {
          this.getNotificationCount(),
            window.addEventListener('focus', T.getNotificationCount);
        }
        componentDidUpdate(n) {
          var e = !n.auth.isAuthenticated,
            { isAuthenticated: t } = this.props.auth;
          e && t && this.getNotificationCount();
        }
        componentWillUnmount() {
          window.removeEventListener('focus', T.getNotificationCount);
        }
        render() {
          var { auth: n, actions: e, notif: t, screenSize: r, title: o } = this.props;
          return u.a.createElement(
            z,
            {
              fdirection: 'column',
              justify: 'center',
              p: ['0 4', '0 2'],
              top: t.promptType ? E.e.BANNER_PROMPT_HEIGHT : null
            },
            u.a.createElement(
              k.E,
              {
                zIndex: 1,
                justify: 'space-between',
                display: 'flex',
                fdirection: 'row',
                align: 'center'
              },
              u.a.createElement(A.a, { mr: [4, 2] }),
              o ? u.a.createElement(k.q, null, o) : u.a.createElement(x, null),
              u.a.createElement(
                k.E,
                {
                  justify: 'space-between',
                  display: 'flex',
                  fdirection: 'row',
                  flex: 1,
                  grow: 1,
                  align: 'center'
                },
                !o && n.isAuthenticated
                  ? u.a.createElement(
                      d.l,
                      {
                        to: '/user/activity',
                        hc: E.b.black,
                        c: E.b.grey,
                        fdirection: 'row',
                        d: 'flex'
                      },
                      'Activity',
                      t.count
                        ? u.a.createElement(
                            I,
                            { bg: E.b.red, ml: 0.5 },
                            u.a.createElement(
                              k.B,
                              { c: E.b.white, fw: 'bold', fs: 1.25 },
                              t.count
                            )
                          )
                        : null
                    )
                  : u.a.createElement('div', null),
                u.a.createElement(
                  k.E,
                  {
                    fdirection: 'row',
                    d: 'flex',
                    flex: 1,
                    align: 'center',
                    justify: 'flex-end'
                  },
                  r
                    ? null
                    : u.a.createElement(
                        P.a,
                        {
                          onClick: n => {
                            n.preventDefault(), e.showModal('onboarding');
                          },
                          align: 'center',
                          mr: 2,
                          hu: !0,
                          color: E.b.blue,
                          to: '/home'
                        },
                        u.a.createElement(k.v, { c: E.b.blue }, 'Get Started')
                      ),
                  n.isAuthenticated
                    ? u.a.createElement(
                        R,
                        {
                          onClick: () => e.showModal('newpost'),
                          disabled: !n.user,
                          screenSize: r
                        },
                        u.a.createElement(k.g, null, 'New Post')
                      )
                    : u.a.createElement(
                        R,
                        { onClick: this.toggleLogin, screenSize: r, color: E.b.blue },
                        u.a.createElement(k.g, null, 'Login')
                      )
                )
              )
            ),
            u.a.createElement(
              k.E,
              { fdirection: 'row', mt: [0, 1], ml: [0, 5.5] },
              !o && u.a.createElement(S, null)
            )
          );
        }
      }
      o()(U, 'propTypes', {
        location: l.a.object,
        auth: l.a.object,
        history: l.a.object,
        actions: l.a.object,
        notif: l.a.object,
        screenSize: l.a.number,
        title: l.a.string
      });
      e.default = Object(m.f)(
        Object(f.c)(
          function(n) {
            return { auth: n.auth, notif: n.notif, screenSize: n.navigation.screenSize };
          },
          n => ({
            actions: Object(p.bindActionCreators)(
              { showModal: _.showModal, getNotificationCount: T.getNotificationCount },
              n
            )
          })
        )(U)
      );
    },
    './src/modules/styled/web.js': function(n, e, t) {
      'use strict';
      t.d(e, 'l', function() {
        return A;
      }),
        t.d(e, 'r', function() {
          return D;
        }),
        t.d(e, 'o', function() {
          return L;
        }),
        t.d(e, 'f', function() {
          return B;
        }),
        t.d(e, 'e', function() {
          return z;
        }),
        t.d(e, 'c', function() {
          return I;
        }),
        t.d(e, 'p', function() {
          return R;
        }),
        t.d(e, 'i', function() {
          return U;
        }),
        t.d(e, 'k', function() {
          return M;
        }),
        t.d(e, 'a', function() {
          return W;
        }),
        t.d(e, 'b', function() {
          return q;
        }),
        t.d(e, 'j', function() {
          return G;
        }),
        t.d(e, 'h', function() {
          return H;
        }),
        t.d(e, 'g', function() {
          return K;
        }),
        t.d(e, 'n', function() {
          return J;
        }),
        t.d(e, 'm', function() {
          return F;
        }),
        t.d(e, 'd', function() {
          return V;
        }),
        t.d(e, 'q', function() {
          return Y;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        o = t.n(r),
        i = t('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        c = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        a = t('./src/styles/index.js'),
        u = t(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        s = t(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        );
      function l() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = o()(['\n  ', '\n  ', '\n']);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = o()([
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
          (f = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = o()([
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
          (p = function() {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = o()([
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
          (m = function() {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = o()([
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
          (b = function() {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = o()([
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
            return n;
          }),
          n
        );
      }
      function v() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function j() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (j = function() {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (w = function() {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = o()(['\n  ', '\n  ', '\n']);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = o()([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function N() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (N = function() {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (S = function() {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = o()([
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
          (C = function() {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = o()([
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
          (T = function() {
            return n;
          }),
          n
        );
      }
      function P() {
        var n = o()([
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
          (P = function() {
            return n;
          }),
          n
        );
      }
      var A = Object(c.default)(i.b)(
          P(),
          a.c.header,
          a.b.grey,
          a.b.black,
          a.b.black,
          a.f.font,
          a.f.display,
          a.f.color,
          a.f.margin
        ),
        D = c.default.div(
          T(),
          a.f.margin,
          a.f.padding,
          a.f.flex,
          a.f.font,
          a.f.background,
          a.f.border,
          a.f.width,
          a.f.height,
          n => (n.onClick ? 'cursor: pointer;' : '')
        ),
        L = c.default.span(
          C(),
          a.f.margin,
          a.f.padding,
          a.f.flex,
          a.f.font,
          a.f.background,
          a.f.border,
          a.f.color,
          n => (n.onClick ? 'cursor: pointer;' : '')
        ),
        B = c.default.span(
          S(),
          a.f.margin,
          a.f.padding,
          a.f.font,
          a.f.background,
          a.f.border,
          a.f.color
        ),
        z = c.default.img(
          N(),
          a.f.margin,
          a.f.height,
          a.f.width,
          a.f.padding,
          a.f.background,
          a.f.borderRadius,
          a.f.flex
        ),
        I =
          (c.default.span(_(), a.f.margin, a.f.flex),
          c.default.div(
            k(),
            a.f.margin,
            a.f.padding,
            a.f.width,
            a.e.universalBorder('bottom')
          )),
        R =
          (Object(c.default)(L)(E(), a.c.header, a.f.color),
          Object(c.default)(L)(x(), a.c.title, a.f.color, a.f.font)),
        U = Object(c.default)(L)(O(), a.c.link, a.f.color, a.f.font),
        M = Object(c.default)(L)(w(), a.c.secondaryText, a.f.font, a.f.color),
        W =
          (Object(c.default)(L)(j(), a.c.altLink, a.f.color, a.f.font),
          Object(c.default)(L)(y(), a.c.commentText, a.f.color, a.f.font),
          Object(c.default)(L)(v(), a.c.bodyStyle, a.f.color, a.f.font)),
        q = c.default.button(
          g(),
          a.e.button,
          a.e.buttonFont,
          n =>
            n.disabled
              ? '\n    color: '
                  .concat(a.b.white, ';\n    background: ')
                  .concat(a.b.grey, ';\n    ')
              : '',
          a.f.flex,
          a.f.background,
          a.f.padding,
          a.f.width,
          a.f.margin,
          a.f.color,
          a.f.width,
          a.f.height,
          a.e.activeButtonShadow
        ),
        G = Object(c.default)(L)(
          h(),
          a.c.numericalValue,
          a.f.width,
          a.f.font,
          a.f.inheritfont,
          a.f.color
        ),
        H = c.default.input(
          b(),
          a.f.font,
          a.f.flex,
          a.f.border,
          a.f.padding,
          a.f.margin,
          Object(a.i)(1.75),
          Object(a.i)(1.75),
          a.e.universalBorder('', a.b.blue)
        ),
        K = c.default.input(
          m(),
          Object(a.i)(2),
          Object(a.i)(2),
          Object(a.i)(1),
          a.c.bodyStyle,
          a.f.font,
          a.f.flex,
          a.f.border,
          a.e.universalBorder(),
          a.f.padding,
          a.f.margin,
          Object(a.i)(1.75),
          Object(a.i)(1.75),
          a.e.universalBorder('', a.b.blue)
        ),
        J = Object(c.default)(s.a)(
          p(),
          a.c.bodyStyle,
          a.f.border,
          a.f.flex,
          a.e.universalBorder(),
          Object(a.i)(2),
          Object(a.i)(2),
          a.b.blue,
          a.f.padding,
          a.f.margin,
          a.f.height
        ),
        F = Object(c.default)(u.a)(
          f(),
          a.c.bodyStyle,
          a.f.border,
          a.f.flex,
          a.e.universalBorder(),
          Object(a.i)(2),
          Object(a.i)(2),
          a.b.blue,
          a.f.padding,
          a.f.margin,
          a.f.height
        ),
        V = c.default.form(d(), a.f.flex, a.f.margin),
        Y = c.default.video(
          l(),
          a.f.margin,
          a.f.height,
          a.f.width,
          a.f.padding,
          a.f.background,
          a.f.borderRadius,
          a.f.flex
        );
    },
    './src/modules/ui/web/menuIcon.component.js': function(n, e, t) {
      'use strict';
      var r = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = t.n(r),
        i = t('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        c = t.n(i),
        a = t('../../node_modules/react/index.js'),
        u = t.n(a),
        s = t('../../node_modules/prop-types/index.js'),
        l = t.n(s),
        d = t('../../node_modules/react-redux/es/index.js'),
        f = t('../../node_modules/redux/es/redux.js'),
        p = t('./src/modules/styled/web.js'),
        m = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        b = t('./src/modules/navigation/navigation.actions.js'),
        h = t('./src/styles/index.js');
      function g() {
        var n = c()([
          '\n  width: 100%;\n  height: 3px;\n  background-color: ',
          ';\n  margin: 0.2rem 0;\n'
        ]);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = c()([
          '\n  display: flex;\n  cursor: pointer;\n  width: ',
          ';\n  :hover * {\n    background-color: ',
          ';\n  }\n'
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      var y = Object(m.default)(p.r)(v(), Object(h.i)(3), h.b.black),
        j = Object(m.default)(p.r)(g(), h.b.grey);
      class w extends a.Component {
        constructor() {
          super(...arguments),
            o()(this, 'toggleMenu', () => {
              var {
                actions: n,
                navigation: { sideNavIsOpen: e }
              } = this.props;
              e && n.closeWebSideNav(), e || n.openWebSideNav();
            });
        }
        render() {
          var {
            mr: n,
            ml: e,
            navigation: { screenSize: t }
          } = this.props;
          return t
            ? u.a.createElement(
                p.r,
                { mr: n, ml: e },
                u.a.createElement(
                  y,
                  {
                    onClick: this.toggleMenu,
                    fdirection: 'column',
                    justify: 'space-between'
                  },
                  u.a.createElement(j, null),
                  u.a.createElement(j, null),
                  u.a.createElement(j, null)
                )
              )
            : null;
        }
      }
      w.propTypes = {
        actions: l.a.object,
        navigation: l.a.object,
        ml: l.a.oneOfType([l.a.string, l.a.number, l.a.array]),
        mr: l.a.oneOfType([l.a.string, l.a.number, l.a.array])
      };
      e.a = Object(d.c)(
        n => ({ navigation: n.navigation }),
        n => ({
          actions: Object(f.bindActionCreators)(
            { openWebSideNav: b.openWebSideNav, closeWebSideNav: b.closeWebSideNav },
            n
          )
        })
      )(w);
    }
  }
]);
//# sourceMappingURL=40.bundle.js.map
