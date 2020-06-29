(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [43],
  {
    './src/modules/activity/activity.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'setActivity', function() {
          return w;
        }),
        n.d(t, 'resetActivity', function() {
          return j;
        }),
        n.d(t, 'clearCount', function() {
          return _;
        }),
        n.d(t, 'setCount', function() {
          return k;
        }),
        n.d(t, 'getActivity', function() {
          return x;
        }),
        n.d(t, 'markRead', function() {
          return O;
        }),
        n.d(t, 'createNotification', function() {
          return N;
        }),
        n.d(t, 'getNotificationCount', function() {
          return C;
        }),
        n.d(t, 'showBannerPrompt', function() {
          return E;
        }),
        n.d(t, 'hideBannerPrompt', function() {
          return S;
        }),
        n.d(t, 'enableDesktopNotifications', function() {
          return I;
        }),
        n.d(t, 'showBetPrompt', function() {
          return T;
        }),
        n.d(t, 'showPushNotificationPrompt', function() {
          return P;
        });
      var r = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        i = n('./node_modules/@babel/runtime/regenerator/index.js'),
        a = n.n(i),
        c = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = n.n(c),
        s = n('./src/core/actionTypes.js'),
        l = n('./src/modules/ui/error.actions.js'),
        f = n('./src/utils/index.js');
      function d() {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = u()(
          a.a.mark(function e() {
            var t, n, r;
            return a.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), navigator.serviceWorker.ready;
                    case 3:
                      return (t = e.sent), (e.next = 6), t.pushManager.getSubscription();
                    case 6:
                      if (!(n = e.sent)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt('return', n);
                    case 9:
                      return (
                        'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
                        (r = m(
                          'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4'
                        )),
                        e.abrupt(
                          'return',
                          t.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: r
                          })
                        )
                      );
                    case 14:
                      return (
                        (e.prev = 14),
                        (e.t0 = e.catch(0)),
                        console.log(e.t0),
                        e.abrupt('return', null)
                      );
                    case 18:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 14]]
            );
          })
        )).apply(this, arguments);
      }
      function m(e) {
        for (
          var t = (e + '='.repeat((4 - (e.length % 4)) % 4))
              .replace(/-/g, '+')
              .replace(/_/g, '/'),
            n = window.atob(t),
            r = new Uint8Array(n.length),
            o = 0;
          o < n.length;
          ++o
        )
          r[o] = n.charCodeAt(o);
        return r;
      }
      (function() {
        try {
          navigator.serviceWorker.register('/service-worker.js');
        } catch (e) {
          console.log(e);
        }
      })();
      var b = n('./src/modules/auth/auth.actions.js');
      function h(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var g = ''.concat(
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).API_SERVER,
          '/api/notification'
        ),
        v = function(e) {
          return {
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer '.concat(e)
            }
          };
        };
      function w(e, t, n) {
        return { type: s.G, payload: { data: e, type: t, index: n } };
      }
      function j(e) {
        return { type: 'RESET_ACTIVITY', payload: e };
      }
      function _() {
        return { type: 'CLEAR_COUNT' };
      }
      function k(e) {
        return { type: s.O, payload: e };
      }
      function x(e) {
        return (function() {
          var t = u()(
            a.a.mark(function t(n) {
              var r, o;
              return a.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (r = 'personal'),
                          (t.next = 4),
                          n(
                            f.b.request({
                              method: 'GET',
                              endpoint: 'notification',
                              path: '/',
                              auth: !0,
                              query: { skip: e }
                            })
                          )
                        );
                      case 4:
                        (o = t.sent),
                          n(w(o, r, e)),
                          n(l.a('activity', !1)),
                          (t.next = 12);
                        break;
                      case 9:
                        (t.prev = 9),
                          (t.t0 = t.catch(0)),
                          l.a('activity', !0, t.t0.message);
                      case 12:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 9]]
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function O() {
        return function(e) {
          return f.f
            .getToken()
            .then(function(e) {
              return fetch(
                ''.concat(g, '/markread'),
                y(y({}, v(e)), {}, { method: 'PUT' })
              );
            })
            .then(function() {
              e({ type: 'CLEAR_COUNT' });
            })
            .catch(null);
        };
      }
      function N(e) {
        return function() {
          return f.f
            .getToken()
            .then(function(t) {
              return fetch(
                ''.concat(g),
                y(y({}, v(t)), {}, { method: 'POST', body: JSON.stringify(e) })
              );
            })
            .catch(null);
        };
      }
      function C() {
        return (function() {
          var e = u()(
            a.a.mark(function e(t) {
              var n;
              return a.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          t(
                            f.b.request({
                              method: 'GET',
                              endpoint: 'notification',
                              path: '/unread',
                              auth: !0
                            })
                          )
                        );
                      case 3:
                        (n = e.sent), t(k(n.unread)), (e.next = 9);
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0));
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function E(e, t) {
        return { type: s.yb, payload: { promptType: e, promptProps: t } };
      }
      function S(e) {
        return { type: s.l, payload: e };
      }
      function I() {
        return (function() {
          var e = u()(
            a.a.mark(function e(t) {
              var n;
              return a.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), d();
                      case 3:
                        (n = e.sent),
                          t(
                            Object(b.updateNotificationSettings)(
                              { desktop: { all: !0 } },
                              n.toJSON()
                            )
                          ),
                          t(S()),
                          (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(0)), console.log(e.t0);
                      case 11:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      var T = (function() {
          var e = u()(
            a.a.mark(function e(t) {
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), f.f.isDismissed('betDismissed', 14);
                    case 2:
                      if (e.sent) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt('return', t(E('bet')));
                    case 5:
                      return e.abrupt('return', !1);
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        P = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (function() {
            var t = u()(
              a.a.mark(function t(n) {
                return a.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt('return', D({ dispatch: n, promptProps: e }));
                      case 2:
                        return t.abrupt('return', A({ dispatch: n, promptProps: e }));
                      case 3:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e) {
              return t.apply(this, arguments);
            };
          })();
        };
      function D(e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = u()(
          a.a.mark(function e(t) {
            var n, r;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.dispatch),
                      (r = t.promptProps),
                      !Notification ||
                        ('granted' !== Notification.permission &&
                          'denied' !== Notification.permission))
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 3:
                    return (e.next = 5), f.f.isDismissed('pushDismissed', 30);
                  case 5:
                    if (!e.sent) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 8:
                    return e.abrupt('return', n(E('push', r)));
                  case 9:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function A(e) {
        return B.apply(this, arguments);
      }
      function B() {
        return (B = u()(
          a.a.mark(function e(t) {
            var n, r;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = t.dispatch), (r = t.promptProps), e.abrupt('return', !1);
                  case 3:
                    return (
                      (e.next = 5),
                      new Promise(function(e, t) {
                        (void 0).checkPermissions(function(n) {
                          return n ? e(n) : t();
                        });
                      })
                    );
                  case 5:
                    if (!e.sent.alert) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 8:
                    return (e.next = 10), f.f.isDismissed('pushDismissed', 21);
                  case 10:
                    if (!e.sent) {
                      e.next = 13;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 13:
                    return e.abrupt(
                      'return',
                      n(E('push', y(y({}, r), {}, { isMobile: !0 })))
                    );
                  case 14:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    './src/modules/discover/web/discoverHelper.js': function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return r;
      }),
        n.d(t, 'c', function() {
          return o;
        }),
        n.d(t, 'a', function() {
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
      function i(e, t) {
        var n = e.match.params,
          i = n.tag,
          a = n.sort,
          c = i ? o : r;
        return a && a !== t.sort
          ? {
              tabIndex: t.routes.findIndex(function(e) {
                return e.key === a;
              }),
              routes: c,
              sort: a
            }
          : a
          ? null
          : { tabIndex: -1, routes: c, sort: a };
      }
    },
    './src/modules/navigation/web/topnav.component.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        o = n.n(r),
        i = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        a = n.n(i),
        c = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        u = n.n(c),
        s = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        l = n.n(s),
        f = n('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        d = n.n(f),
        p = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        m = n.n(p),
        b = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        h = n.n(b),
        y = n('./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        g = n.n(y),
        v = n('../../node_modules/react/index.js'),
        w = n.n(v),
        j = n('../../node_modules/prop-types/index.js'),
        _ = n.n(j),
        k = n('./src/modules/styled/web.js'),
        x = n('../../node_modules/react-redux/es/index.js'),
        O = n('../../node_modules/redux/es/redux.js'),
        N = n('../../node_modules/react-router/esm/react-router.js'),
        C = n('../../node_modules/lodash/get.js'),
        E = n.n(C),
        S = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        I = n('./src/modules/discover/web/discoverHelper.js'),
        T = function(e) {
          var t = e.linkData,
            n = e.community,
            r = e.tag,
            o = n ? '/'.concat(n, '/').concat(t.key) : '/communities';
          return (
            r && (o += '/'.concat(r)),
            w.a.createElement(k.l, { to: encodeURI(o), mr: [2, 1] }, t.title)
          );
        };
      T.propTypes = { linkData: _.a.object, community: _.a.string, tag: _.a.string };
      var P = S.default.ul.withConfig({
          displayName: 'discoverTabscomponent__StyledUl',
          componentId: 'jxfvd7-0'
        })(['margin:0;padding:0;']),
        D = function(e) {
          var t = e.view,
            n = e.community;
          return w.a.createElement(
            P,
            null,
            I.b.map(function(e, r) {
              return w.a.createElement(T, {
                key: r,
                tag: E()(t, 'discover.tag'),
                community: n,
                linkData: e
              });
            })
          );
        };
      D.propTypes = { view: _.a.object, community: _.a.string };
      var R = Object(x.c)(function(e) {
          return { view: e.view, community: e.auth.community };
        })(D),
        A = n('./src/styles/index.js'),
        B = n('./src/modules/styled/uni.js'),
        L = n('./src/modules/navigation/navigation.actions.js');
      function z(e) {
        var t = (function() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var n,
            r = m()(e);
          if (t) {
            var o = m()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var U = (function(e) {
        l()(n, e);
        var t = z(n);
        function n() {
          return o()(this, n), t.apply(this, arguments);
        }
        return (
          a()(n, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.view,
                  n = e.auth,
                  r = e.community,
                  o = e.newPosts,
                  i = e.actions,
                  a = E()(t, 'discover.community') || E()(n, 'community');
                if (!a) return null;
                var c = E()(r, 'communities.'.concat(a)),
                  u = E()(t, 'discover.sort') || 'new',
                  s = o[n.community],
                  l = w.a.createElement(
                    k.l,
                    {
                      to: '#',
                      onClick: function() {
                        return i.refreshTab('discover');
                      },
                      ml: 1,
                      c: A.b.blue,
                      hu: 1,
                      lh: 1.5,
                      fs: 1.5
                    },
                    'See New Posts'
                  );
                return w.a.createElement(
                  B.E,
                  { fdirection: 'row', align: 'flex-start' },
                  c
                    ? w.a.createElement(
                        k.l,
                        {
                          lh: 1.5,
                          fs: 1.5,
                          c: A.b.black,
                          to: encodeURI('/'.concat(a, '/').concat(u))
                        },
                        'Community: ',
                        c.name,
                        ' '
                      )
                    : null,
                  E()(t, 'discover.tag')
                    ? w.a.createElement(
                        k.l,
                        {
                          lh: 1.5,
                          fs: 1.5,
                          c: A.b.black,
                          to: encodeURI(
                            '/'
                              .concat(a, '/')
                              .concat(u, '/')
                              .concat(t.discover.tag)
                          )
                        },
                        ' → #',
                        t.discover.tag
                      )
                    : null,
                  s ? l : null
                );
              }
            }
          ]),
          n
        );
      })(v.Component);
      h()(U, 'propTypes', {
        view: _.a.object,
        auth: _.a.object,
        community: _.a.object,
        newPosts: _.a.object,
        actions: _.a.object
      });
      var W = Object(x.c)(
          function(e) {
            return {
              newPosts: e.posts.newPostsAvailable,
              view: e.view,
              auth: e.auth,
              community: e.community
            };
          },
          function(e) {
            return {
              actions: Object(O.bindActionCreators)({ refreshTab: L.refreshTab }, e)
            };
          }
        )(U),
        F = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        K = n('./src/modules/activity/activity.actions.js'),
        M = n('./src/modules/navigation/ULink.component.js'),
        V = n('./src/modules/ui/web/menuIcon.component.js');
      function q(e) {
        var t = (function() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var n,
            r = m()(e);
          if (t) {
            var o = m()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      function J() {
        var e = g()([
          '\n  border-radius: 100%;\n  align-items: center;\n  height: ',
          ';\n  width: ',
          ';\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: ',
          ';\n'
        ]);
        return (
          (J = function() {
            return e;
          }),
          e
        );
      }
      function G() {
        var e = g()([
          '\n  position: sticky;\n  /*   background-image: linear-gradient(hsla(0, 0%, 100%, 1) 80%, hsla(0, 0%, 100%, 0) 100%);\n   */\n  z-index: 100;\n  background-color: ',
          ';\n  height: ',
          ';\n  top: ',
          ';\n  left: ',
          ';\n'
        ]);
        return (
          (G = function() {
            return e;
          }),
          e
        );
      }
      var Y = Object(F.b)(B.E)(
          G(),
          A.b.white,
          A.e.headerHeight,
          function(e) {
            return e.top ? e.top : 0;
          },
          A.e.sideNavWidth
        ),
        H = Object(F.b)(B.E)(J(), Object(A.i)(2), Object(A.i)(2), Object(A.i)(1)),
        Z = Object(S.default)(k.b).withConfig({
          displayName: 'topnavcomponent__ActionButton',
          componentId: 'zzcwot-0'
        })(['', ''], function(e) {
          return e.screenSize
            ? '\n    position: fixed;\n    bottom: '
                .concat(Object(A.i)(2), ';\n    right: ')
                .concat(Object(A.i)(2), ';\n    height: ')
                .concat(Object(A.i)(8), ';\n    width: ')
                .concat(
                  Object(A.i)(8),
                  ';\n    min-width: 0;\n    border-radius: 100%;\n    background-color: '
                )
                .concat(A.b.blue, ';\n  ')
            : '';
        }),
        Q = (function(e) {
          l()(n, e);
          var t = q(n);
          function n() {
            var e;
            o()(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(u()(e), 'state', {}),
              h()(u()(e), 'getNotificationCount', function() {
                var t = new Date(),
                  n = e.props.auth.isAuthenticated;
                (e.state.timeSinceNotificationCount &&
                  t.getTime() - e.state.timeSinceNotificationCount.getTime() < 3e4) ||
                  (n &&
                    (e.setState({ timeSinceNotificationCount: t }),
                    e.props.actions.getNotificationCount()));
              }),
              h()(u()(e), 'toggleLogin', function() {
                var t = e.props,
                  n = t.location;
                t.history.push({ search: '?redirect='.concat(n.pathname) }),
                  e.props.actions.showModal('login');
              }),
              e
            );
          }
          return (
            a()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.getNotificationCount(),
                    window.addEventListener('focus', K.getNotificationCount);
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = !e.auth.isAuthenticated,
                    n = this.props.auth.isAuthenticated;
                  t && n && this.getNotificationCount();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  window.removeEventListener('focus', K.getNotificationCount);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.auth,
                    n = e.actions,
                    r = e.notif,
                    o = e.screenSize,
                    i = e.title;
                  return w.a.createElement(
                    Y,
                    {
                      fdirection: 'column',
                      justify: 'center',
                      p: ['0 4', '0 2'],
                      top: r.promptType ? A.e.BANNER_PROMPT_HEIGHT : null
                    },
                    w.a.createElement(
                      B.E,
                      {
                        zIndex: 1,
                        justify: 'space-between',
                        display: 'flex',
                        fdirection: 'row',
                        align: 'center'
                      },
                      w.a.createElement(V.a, { mr: [4, 2] }),
                      i ? w.a.createElement(B.q, null, i) : w.a.createElement(R, null),
                      w.a.createElement(
                        B.E,
                        {
                          justify: 'space-between',
                          display: 'flex',
                          fdirection: 'row',
                          flex: 1,
                          grow: 1,
                          align: 'center'
                        },
                        !i && t.isAuthenticated
                          ? w.a.createElement(
                              k.l,
                              {
                                to: '/user/activity',
                                hc: A.b.black,
                                c: A.b.grey,
                                fdirection: 'row',
                                d: 'flex'
                              },
                              'Activity',
                              r.count
                                ? w.a.createElement(
                                    H,
                                    { bg: A.b.red, ml: 0.5 },
                                    w.a.createElement(
                                      B.B,
                                      { c: A.b.white, fw: 'bold', fs: 1.25 },
                                      r.count
                                    )
                                  )
                                : null
                            )
                          : w.a.createElement('div', null),
                        w.a.createElement(
                          B.E,
                          {
                            fdirection: 'row',
                            d: 'flex',
                            flex: 1,
                            align: 'center',
                            justify: 'flex-end'
                          },
                          o
                            ? null
                            : w.a.createElement(
                                M.a,
                                {
                                  onClick: function(e) {
                                    e.preventDefault(), n.showModal('onboarding');
                                  },
                                  align: 'center',
                                  mr: 2,
                                  hu: !0,
                                  color: A.b.blue,
                                  to: '/home'
                                },
                                w.a.createElement(B.v, { c: A.b.blue }, 'Get Started')
                              ),
                          t.isAuthenticated
                            ? w.a.createElement(
                                Z,
                                {
                                  onClick: function() {
                                    return n.showModal('newpost');
                                  },
                                  disabled: !t.user,
                                  screenSize: o
                                },
                                w.a.createElement(B.g, null, 'New Post')
                              )
                            : w.a.createElement(
                                Z,
                                {
                                  onClick: this.toggleLogin,
                                  screenSize: o,
                                  color: A.b.blue
                                },
                                w.a.createElement(B.g, null, 'Login')
                              )
                        )
                      )
                    ),
                    w.a.createElement(
                      B.E,
                      { fdirection: 'row', mt: [0, 1], ml: [0, 5.5] },
                      !i && w.a.createElement(W, null)
                    )
                  );
                }
              }
            ]),
            n
          );
        })(v.Component);
      h()(Q, 'propTypes', {
        location: _.a.object,
        auth: _.a.object,
        history: _.a.object,
        actions: _.a.object,
        notif: _.a.object,
        screenSize: _.a.number,
        title: _.a.string
      });
      t.default = Object(N.g)(
        Object(x.c)(
          function(e) {
            return { auth: e.auth, notif: e.notif, screenSize: e.navigation.screenSize };
          },
          function(e) {
            return {
              actions: Object(O.bindActionCreators)(
                { showModal: L.showModal, getNotificationCount: K.getNotificationCount },
                e
              )
            };
          }
        )(Q)
      );
    },
    './src/modules/styled/web.js': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return u;
      }),
        n.d(t, 'r', function() {
          return s;
        }),
        n.d(t, 'o', function() {
          return l;
        }),
        n.d(t, 'f', function() {
          return f;
        }),
        n.d(t, 'e', function() {
          return d;
        }),
        n.d(t, 'c', function() {
          return p;
        }),
        n.d(t, 'p', function() {
          return m;
        }),
        n.d(t, 'i', function() {
          return b;
        }),
        n.d(t, 'k', function() {
          return h;
        }),
        n.d(t, 'a', function() {
          return y;
        }),
        n.d(t, 'b', function() {
          return g;
        }),
        n.d(t, 'j', function() {
          return v;
        }),
        n.d(t, 'h', function() {
          return w;
        }),
        n.d(t, 'g', function() {
          return j;
        }),
        n.d(t, 'n', function() {
          return _;
        }),
        n.d(t, 'm', function() {
          return k;
        }),
        n.d(t, 'd', function() {
          return x;
        }),
        n.d(t, 'q', function() {
          return O;
        });
      var r = n('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        o = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        i = n('./src/styles/index.js'),
        a = n(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        c = n(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        u = Object(o.default)(r.b).withConfig({
          displayName: 'web__StyledNavLink',
          componentId: 'kfa5fa-0'
        })(
          ['', ';color:', ';&.active{color:', ';}:hover{color:', ';}', ' ', ' ', ' ', ''],
          i.c.header,
          i.b.grey,
          i.b.black,
          i.b.black,
          i.f.font,
          i.f.display,
          i.f.color,
          i.f.margin
        ),
        s = o.default.div.withConfig({
          displayName: 'web__View',
          componentId: 'kfa5fa-1'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.padding,
          i.f.flex,
          i.f.font,
          i.f.background,
          i.f.border,
          i.f.width,
          i.f.height,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        l = o.default.span.withConfig({
          displayName: 'web__Text',
          componentId: 'kfa5fa-2'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.padding,
          i.f.flex,
          i.f.font,
          i.f.background,
          i.f.border,
          i.f.color,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        f = o.default.span.withConfig({
          displayName: 'web__InlineText',
          componentId: 'kfa5fa-3'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.padding,
          i.f.font,
          i.f.background,
          i.f.border,
          i.f.color
        ),
        d = o.default.img.withConfig({
          displayName: 'web__Image',
          componentId: 'kfa5fa-4'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.height,
          i.f.width,
          i.f.padding,
          i.f.background,
          i.f.borderRadius,
          i.f.flex
        ),
        p =
          (o.default.span.withConfig({
            displayName: 'web__ImageWrapper',
            componentId: 'kfa5fa-5'
          })(
            ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
            i.f.margin,
            i.f.flex
          ),
          o.default.div.withConfig({
            displayName: 'web__Divider',
            componentId: 'kfa5fa-6'
          })(
            ['', ' ', ' ', ' ', ''],
            i.f.margin,
            i.f.padding,
            i.f.width,
            i.e.universalBorder('bottom')
          )),
        m =
          (Object(o.default)(l).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], i.c.header, i.f.color),
          Object(o.default)(l).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], i.c.title, i.f.color, i.f.font)),
        b = Object(o.default)(l).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], i.c.link, i.f.color, i.f.font),
        h = Object(o.default)(l).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], i.c.secondaryText, i.f.font, i.f.color),
        y =
          (Object(o.default)(l).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], i.c.altLink, i.f.color, i.f.font),
          Object(o.default)(l).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], i.c.commentText, i.f.color, i.f.font),
          Object(o.default)(l).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], i.c.bodyStyle, i.f.color, i.f.font)),
        g = o.default.button.withConfig({
          displayName: 'web__Button',
          componentId: 'kfa5fa-14'
        })(
          [
            '',
            ' ',
            ' ',
            ';',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' &:hover{',
            '};user-select:none;cursor:pointer;'
          ],
          i.e.button,
          i.e.buttonFont,
          function(e) {
            return e.disabled
              ? '\n    color: '
                  .concat(i.b.white, ';\n    background: ')
                  .concat(i.b.grey, ';\n    ')
              : '';
          },
          i.f.flex,
          i.f.background,
          i.f.padding,
          i.f.width,
          i.f.margin,
          i.f.color,
          i.f.width,
          i.f.height,
          i.e.activeButtonShadow
        ),
        v = Object(o.default)(l).withConfig({
          displayName: 'web__NumericalValue',
          componentId: 'kfa5fa-15'
        })(
          ['', ' ', ' ', ' ', ' ', ''],
          i.c.numericalValue,
          i.f.width,
          i.f.font,
          i.f.inheritfont,
          i.f.color
        ),
        w = o.default.input.withConfig({
          displayName: 'web__InputPlain',
          componentId: 'kfa5fa-16'
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' ',
            '::placeholder:{font-size:',
            ';line-height:',
            ';};:focus{outline:none !important;',
            '}'
          ],
          i.f.font,
          i.f.flex,
          i.f.border,
          i.f.padding,
          i.f.margin,
          Object(i.i)(1.75),
          Object(i.i)(1.75),
          i.e.universalBorder('', i.b.blue)
        ),
        j = o.default.input.withConfig({
          displayName: 'web__Input',
          componentId: 'kfa5fa-17'
        })(
          [
            'padding:',
            ' ',
            ';margin-top:',
            ';',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '::placeholder:{font-size:',
            ';line-height:',
            ';};:focus{outline:none !important;',
            '}'
          ],
          Object(i.i)(2),
          Object(i.i)(2),
          Object(i.i)(1),
          i.c.bodyStyle,
          i.f.font,
          i.f.flex,
          i.f.border,
          i.e.universalBorder(),
          i.f.padding,
          i.f.margin,
          Object(i.i)(1.75),
          Object(i.i)(1.75),
          i.e.universalBorder('', i.b.blue)
        ),
        _ = Object(o.default)(c.a).withConfig({
          displayName: 'web__StyledTextareaAutocomplete',
          componentId: 'kfa5fa-18'
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' padding:',
            ' ',
            ';min-width:0;&:focus{outline:1px solid ',
            ';}',
            ' ',
            ' ',
            ''
          ],
          i.c.bodyStyle,
          i.f.border,
          i.f.flex,
          i.e.universalBorder(),
          Object(i.i)(2),
          Object(i.i)(2),
          i.b.blue,
          i.f.padding,
          i.f.margin,
          i.f.height
        ),
        k = Object(o.default)(a.a).withConfig({
          displayName: 'web__StyledTextarea',
          componentId: 'kfa5fa-19'
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' padding:',
            ' ',
            ';min-width:0;&:focus{outline:1px solid ',
            ';}',
            ' ',
            ' ',
            ''
          ],
          i.c.bodyStyle,
          i.f.border,
          i.f.flex,
          i.e.universalBorder(),
          Object(i.i)(2),
          Object(i.i)(2),
          i.b.blue,
          i.f.padding,
          i.f.margin,
          i.f.height
        ),
        x = o.default.form.withConfig({
          displayName: 'web__Form',
          componentId: 'kfa5fa-20'
        })(['', ' ', ''], i.f.flex, i.f.margin),
        O = o.default.video.withConfig({
          displayName: 'web__Video',
          componentId: 'kfa5fa-21'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.height,
          i.f.width,
          i.f.padding,
          i.f.background,
          i.f.borderRadius,
          i.f.flex
        );
    },
    './src/modules/ui/web/menuIcon.component.js': function(e, t, n) {
      'use strict';
      var r = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        o = n.n(r),
        i = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        a = n.n(i),
        c = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        u = n.n(c),
        s = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        l = n.n(s),
        f = n('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        d = n.n(f),
        p = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        m = n.n(p),
        b = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        h = n.n(b),
        y = n('../../node_modules/react/index.js'),
        g = n.n(y),
        v = n('../../node_modules/prop-types/index.js'),
        w = n.n(v),
        j = n('../../node_modules/react-redux/es/index.js'),
        _ = n('../../node_modules/redux/es/redux.js'),
        k = n('./src/modules/styled/web.js'),
        x = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        O = n('./src/modules/navigation/navigation.actions.js'),
        N = n('./src/styles/index.js');
      function C(e) {
        var t = (function() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var n,
            r = m()(e);
          if (t) {
            var o = m()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var E = Object(x.default)(k.r).withConfig({
          displayName: 'menuIconcomponent__Menu',
          componentId: 'sc-1lbjr5g-0'
        })(
          ['display:flex;cursor:pointer;width:', ';:hover *{background-color:', ';}'],
          Object(N.i)(3),
          N.b.black
        ),
        S = Object(x.default)(k.r).withConfig({
          displayName: 'menuIconcomponent__MenuBar',
          componentId: 'sc-1lbjr5g-1'
        })(['width:100%;height:3px;background-color:', ';margin:0.2rem 0;'], N.b.grey),
        I = (function(e) {
          l()(n, e);
          var t = C(n);
          function n() {
            var e;
            o()(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(u()(e), 'toggleMenu', function() {
                var t = e.props,
                  n = t.actions,
                  r = t.navigation.sideNavIsOpen;
                r && n.closeWebSideNav(), r || n.openWebSideNav();
              }),
              e
            );
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.mr,
                    n = e.ml;
                  return e.navigation.screenSize
                    ? g.a.createElement(
                        k.r,
                        { mr: t, ml: n },
                        g.a.createElement(
                          E,
                          {
                            onClick: this.toggleMenu,
                            fdirection: 'column',
                            justify: 'space-between'
                          },
                          g.a.createElement(S, null),
                          g.a.createElement(S, null),
                          g.a.createElement(S, null)
                        )
                      )
                    : null;
                }
              }
            ]),
            n
          );
        })(y.Component);
      I.propTypes = {
        actions: w.a.object,
        navigation: w.a.object,
        ml: w.a.oneOfType([w.a.string, w.a.number, w.a.array]),
        mr: w.a.oneOfType([w.a.string, w.a.number, w.a.array])
      };
      t.a = Object(j.c)(
        function(e) {
          return { navigation: e.navigation };
        },
        function(e) {
          return {
            actions: Object(_.bindActionCreators)(
              { openWebSideNav: O.openWebSideNav, closeWebSideNav: O.closeWebSideNav },
              e
            )
          };
        }
      )(I);
    }
  }
]);
//# sourceMappingURL=navigation-web-topnav-component.bundle.js.map
