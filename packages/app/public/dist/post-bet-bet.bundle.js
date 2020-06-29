(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [46, 59],
  {
    './public/img/info.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/info.png');
    },
    './src/modules/activity/activity.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'setActivity', function() {
          return O;
        }),
        n.d(t, 'resetActivity', function() {
          return g;
        }),
        n.d(t, 'clearCount', function() {
          return E;
        }),
        n.d(t, 'setCount', function() {
          return w;
        }),
        n.d(t, 'getActivity', function() {
          return x;
        }),
        n.d(t, 'markRead', function() {
          return _;
        }),
        n.d(t, 'createNotification', function() {
          return P;
        }),
        n.d(t, 'getNotificationCount', function() {
          return k;
        }),
        n.d(t, 'showBannerPrompt', function() {
          return T;
        }),
        n.d(t, 'hideBannerPrompt', function() {
          return S;
        }),
        n.d(t, 'enableDesktopNotifications', function() {
          return C;
        }),
        n.d(t, 'showBetPrompt', function() {
          return N;
        }),
        n.d(t, 'showPushNotificationPrompt', function() {
          return I;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        s = n.n(o),
        i = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        c = n.n(i),
        u = n('./src/core/actionTypes.js'),
        l = n('./src/modules/ui/error.actions.js'),
        p = n('./src/utils/index.js');
      function d() {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = c()(
          s.a.mark(function e() {
            var t, n, r;
            return s.a.wrap(
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
                        (r = f(
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
      function f(e) {
        for (
          var t = (e + '='.repeat((4 - (e.length % 4)) % 4))
              .replace(/-/g, '+')
              .replace(/_/g, '/'),
            n = window.atob(t),
            r = new Uint8Array(n.length),
            a = 0;
          a < n.length;
          ++a
        )
          r[a] = n.charCodeAt(a);
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
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var v = ''.concat('http://localhost:3000', '/api/notification'),
        j = function(e) {
          return {
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer '.concat(e)
            }
          };
        };
      function O(e, t, n) {
        return { type: u.G, payload: { data: e, type: t, index: n } };
      }
      function g(e) {
        return { type: 'RESET_ACTIVITY', payload: e };
      }
      function E() {
        return { type: 'CLEAR_COUNT' };
      }
      function w(e) {
        return { type: u.O, payload: e };
      }
      function x(e) {
        return (function() {
          var t = c()(
            s.a.mark(function t(n) {
              var r, a;
              return s.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (r = 'personal'),
                          (t.next = 4),
                          n(
                            p.b.request({
                              method: 'GET',
                              endpoint: 'notification',
                              path: '/',
                              auth: !0,
                              query: { skip: e }
                            })
                          )
                        );
                      case 4:
                        (a = t.sent),
                          n(O(a, r, e)),
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
      function _() {
        return function(e) {
          return p.f
            .getToken()
            .then(function(e) {
              return fetch(
                ''.concat(v, '/markread'),
                y(y({}, j(e)), {}, { method: 'PUT' })
              );
            })
            .then(function() {
              e({ type: 'CLEAR_COUNT' });
            })
            .catch(null);
        };
      }
      function P(e) {
        return function() {
          return p.f
            .getToken()
            .then(function(t) {
              return fetch(
                ''.concat(v),
                y(y({}, j(t)), {}, { method: 'POST', body: JSON.stringify(e) })
              );
            })
            .catch(null);
        };
      }
      function k() {
        return (function() {
          var e = c()(
            s.a.mark(function e(t) {
              var n;
              return s.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          t(
                            p.b.request({
                              method: 'GET',
                              endpoint: 'notification',
                              path: '/unread',
                              auth: !0
                            })
                          )
                        );
                      case 3:
                        (n = e.sent), t(w(n.unread)), (e.next = 9);
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
      function T(e, t) {
        return { type: u.yb, payload: { promptType: e, promptProps: t } };
      }
      function S(e) {
        return { type: u.l, payload: e };
      }
      function C() {
        return (function() {
          var e = c()(
            s.a.mark(function e(t) {
              var n;
              return s.a.wrap(
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
      var N = (function() {
          var e = c()(
            s.a.mark(function e(t) {
              return s.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), p.f.isDismissed('betDismissed', 14);
                    case 2:
                      if (e.sent) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt('return', t(T('bet')));
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
        I = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (function() {
            var t = c()(
              s.a.mark(function t(n) {
                return s.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt('return', R({ dispatch: n, promptProps: e }));
                      case 2:
                        return t.abrupt('return', B({ dispatch: n, promptProps: e }));
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
      function R(e) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = c()(
          s.a.mark(function e(t) {
            var n, r;
            return s.a.wrap(function(e) {
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
                    return (e.next = 5), p.f.isDismissed('pushDismissed', 30);
                  case 5:
                    if (!e.sent) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 8:
                    return e.abrupt('return', n(T('push', r)));
                  case 9:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function B(e) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = c()(
          s.a.mark(function e(t) {
            var n, r;
            return s.a.wrap(function(e) {
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
                    return (e.next = 10), p.f.isDismissed('pushDismissed', 21);
                  case 10:
                    if (!e.sent) {
                      e.next = 13;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 13:
                    return e.abrupt(
                      'return',
                      n(T('push', y(y({}, r), {}, { isMobile: !0 })))
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
    './src/modules/community/community.selectors.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      });
      var r = n('../../node_modules/react-redux/es/index.js'),
        a = function() {
          return Object(r.e)(function(e) {
            return e.community.communities[e.community.active];
          });
        };
    },
    './src/modules/post/bet/bet.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'BetContainer', function() {
          return B;
        });
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = n.n(o),
        i = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        c = n.n(i),
        u = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        l = n.n(u),
        p = n('../../node_modules/react/index.js'),
        d = n.n(p),
        m = n('../../node_modules/prop-types/index.js'),
        f = n.n(m),
        b = n('../../node_modules/react-redux/es/index.js'),
        h = n('./src/modules/styled/uni.js'),
        y = n('./src/utils/numbers.js'),
        v = n('./src/styles/index.js'),
        j = n('../common/lib/index.js'),
        O = n('./src/modules/stats/coinStat.component.js'),
        g = n('./src/modules/post/invest.actions.js'),
        E = n('./src/modules/navigation/navigation.actions.js'),
        w = n('./src/modules/tooltip/tooltip.component.js'),
        x = n('./src/modules/wallet/price.context.js'),
        _ = n('./src/modules/navigation/ULink.component.js'),
        P = n('./src/utils/post.js'),
        k = n('./src/utils/rewards.js'),
        T = n('./src/modules/community/community.selectors.js');
      function S(e) {
        var t = e.percent,
          n = e.color,
          r = e.text,
          a = e.strokeWidth,
          o = e.w,
          s = e.h,
          i = 15.91549430918954,
          c = 2 * i + a;
        return d.a.createElement(
          'svg',
          {
            height: s || '100%',
            width: o || '100%',
            viewBox: '0 0 '.concat(c, ' ').concat(c)
          },
          d.a.createElement('circle', {
            cx: '50%',
            cy: '50%',
            r: i,
            fill: 'none',
            strokeWidth: a,
            stroke: v.b.lightBorder
          }),
          d.a.createElement('circle', {
            cx: '50%',
            cy: '50%',
            r: i,
            fill: 'none',
            strokeWidth: a,
            stroke: n,
            strokeDasharray: ''.concat(100 - t, ', ').concat(t),
            strokeDashoffset: 125 - t
          }),
          r &&
            d.a.createElement(
              'text',
              {
                fontSize: '10px',
                x: '50%',
                y: '60%',
                fill: v.b.black,
                textAnchor: 'middle',
                fontFamily: 'HelveticaNeue-CondensedBold'
              },
              r
            )
        );
      }
      S.propTypes = {
        percent: f.a.number,
        color: f.a.string,
        text: f.a.string,
        strokeWidth: f.a.number,
        w: f.a.string,
        h: f.a.string
      };
      var C = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        N = n.n(C);
      function I(e) {
        var t = e.amount,
          n = N()(e, ['amount']);
        return d.a.createElement(
          O.a,
          l()(
            { size: 1.5, fs: 1.5, secondary: !0, c: v.b.black, inline: 1, amount: t },
            n
          )
        );
      }
      function R(e) {
        var t = e.post,
          n = e.amount,
          r = e.earning,
          a = e.maxBet,
          o = Object(T.a)(),
          s = Object(b.e)(function(e) {
            return (e.investments.posts[t._id] || [])
              .map(function(t) {
                return e.investments.investments[t];
              })
              .filter(function(t) {
                return t.stakedTokens > 0 && t.investor !== e.auth.user._id;
              });
          }),
          i = Object(b.d)();
        Object(p.useEffect)(
          function() {
            i(Object(g.getPostInvestments)(t._id));
          },
          [i, t._id]
        );
        var c = r ? r.shares : 0,
          u = r ? r.stakedTokens : 0,
          l = s.length,
          m = l > 1 ? 'users' : 'user',
          f = l
            ? ''
                .concat(l, ' ')
                .concat(m, ' bet a total of ')
                .concat(
                  Object(y.abbreviateNumber)(t.data.totalShares - u),
                  ' coins on this post'
                )
            : '',
          j = Object(P.a)({ post: t, stakedTokens: n }),
          O = Object(k.a)(t.data, o),
          E = l ? (j + c) / (t.data.shares + j) : (u + n) / (a + u),
          w = 100 * E,
          x = O * E,
          _ = d.a.createElement(
            h.y,
            { inline: 1 },
            '  ',
            d.a.createElement(
              h.B,
              { style: { top: 2 }, inline: 1, mb: -0.5 },
              d.a.createElement(S, {
                w: '12px',
                h: '12px',
                percent: 100 - w,
                strokeWidth: 30,
                color: v.b.blue
              })
            ),
            ' ',
            Object(y.abbreviateNumber)(w),
            '%'
          );
        return d.a.createElement(
          p.Fragment,
          null,
          d.a.createElement(h.y, null, f),
          x > 0 &&
            d.a.createElement(
              h.E,
              { mt: 0.25, fdirection: 'row' },
              d.a.createElement(
                h.y,
                { inline: 1 },
                'Your estimated rewards: ',
                d.a.createElement(I, { amount: x })
              ),
              d.a.createElement(h.y, { inline: 1 }, _, ' of total')
            )
        );
      }
      function D(e) {
        var t = e.children,
          n = e.onPress;
        return d.a.createElement(
          h.r,
          {
            border: 1,
            w: 8,
            h: 8,
            minwidth: 'auto',
            bradius: 4,
            bg: v.b.white,
            onPress: n
          },
          d.a.createElement(h.v, { c: v.b.blue, fs: 2.5, lh: 2.5 }, t)
        );
      }
      function B(e) {
        var t = l()({}, e),
          n =
            Object(b.e)(function(e) {
              return e.auth.user;
            }) || {},
          r = Object(b.e)(function(e) {
            return e.posts.posts[e.navigation.modalData.postId];
          });
        return n && r ? d.a.createElement(A, l()({ user: n, post: r }, t)) : null;
      }
      function A(e) {
        var t = e.user,
          n = e.post,
          r = e.close,
          o = Object(b.d)(),
          i = Object(b.e)(function(e) {
            return e.earnings.pending
              .map(function(t) {
                return e.earnings.entities[t];
              })
              .find(function(e) {
                return e.post === n._id;
              });
          }),
          u = Object(p.useState)(!1),
          l = c()(u, 2),
          m = l[0],
          f = l[1],
          P = i ? 'Increase Your Bet' : 'Bet on the Relevance of this Post',
          k = t.balance + t.tokenBalance,
          T = k - t.lockedTokens,
          S = Math.max(T * j.VOTE_COST_RATIO, 0),
          C = Object(p.useState)(S),
          N = c()(C, 2),
          B = N[0],
          A = N[1],
          F = Object(p.useState)(Object(y.timeLeftTick)(n.data.payoutTime)),
          L = c()(F, 2),
          K = L[0],
          W = L[1];
        if (
          (Object(p.useEffect)(
            function() {
              var e = setInterval(function() {
                return W(Object(y.timeLeftTick)(n.data.payoutTime));
              }, 1e3);
              return function() {
                return clearInterval(e);
              };
            },
            [n.data.payoutTime, K]
          ),
          !t || !n)
        )
          return null;
        var q = (function() {
            var e = s()(
              a.a.mark(function e() {
                return a.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            f(!0),
                            (e.next = 4),
                            o(Object(g.bet)({ postId: n._id, stakedTokens: B }))
                          );
                        case 4:
                          f(!1), r(), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(0)), f(!1);
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
            return function() {
              return e.apply(this, arguments);
            };
          })(),
          U = Object(x.exchangeLink)(),
          V = (100 * B) / T;
        return d.a.createElement(
          h.E,
          null,
          d.a.createElement(
            h.q,
            { inline: 1, mr: 2 },
            P,
            ' ',
            d.a.createElement(w.a, {
              inline: 1,
              name: 'betInfo',
              data: {
                text:
                  'Posts that get upvoted by lots of users with high Reputation get payouts.\n\nBet more coins and bet early in order to win the biggest portion of the payout.'
              },
              info: !0
            })
          ),
          d.a.createElement(
            h.E,
            { fdirection: 'row', align: 'baseline' },
            d.a.createElement(h.y, { mt: 1, mr: 1 }, 'Time until payout: ', K)
          ),
          d.a.createElement(
            h.E,
            { mt: 4, fdirection: 'row', justify: 'space-between', align: 'center' },
            d.a.createElement(
              D,
              {
                onPress: function() {
                  return A(function(e) {
                    var n = (k - t.lockedTokens - S) / 5,
                      r = S / 5,
                      a = S / 100;
                    return e - r <= 0 + a
                      ? e
                      : e - n >= S - a
                      ? e - n
                      : Math.max(0, e - r);
                  });
                }
              },
              '–'
            ),
            d.a.createElement(
              h.E,
              { pr: 1 },
              d.a.createElement(O.a, {
                align: 'center',
                fs: 4.5,
                lh: 4.5,
                spaceBetween: 1,
                c: v.b.black,
                amount: B
              })
            ),
            d.a.createElement(
              D,
              {
                onPress: function() {
                  return A(function(e) {
                    var t = (T - S) / 5,
                      n = S / 5;
                    return e + n <= S + S / 100 ? e + n : Math.min(e + t, T);
                  });
                }
              },
              '+'
            )
          ),
          d.a.createElement(
            h.E,
            { mt: 2 },
            d.a.createElement(
              h.E,
              { h: 0.5, fdirection: 'row' },
              d.a.createElement(h.E, { w: ''.concat(V, '%'), bg: v.b.blue }),
              d.a.createElement(h.E, { w: ''.concat(100 - V, '%'), bg: v.b.lightBorder })
            ),
            d.a.createElement(
              h.E,
              { fdirection: 'row', justify: 'space-between' },
              d.a.createElement(
                h.x,
                { mt: 0.5 },
                'Available Coins: ',
                d.a.createElement(I, { amount: T - B })
              ),
              Object(x.tokenEnabled)() &&
                d.a.createElement(
                  _.a,
                  { inline: 1, to: U, external: !0, target: '_blank' },
                  d.a.createElement(
                    h.x,
                    {
                      mt: 0.5,
                      c: v.b.blue,
                      onPress: function() {
                        o(Object(E.goToUrl)(U));
                      }
                    },
                    'Get more coins'
                  )
                )
            )
          ),
          d.a.createElement(
            h.E,
            { mt: 3 },
            d.a.createElement(R, { maxBet: T, post: n, amount: B, earning: i })
          ),
          d.a.createElement(
            h.r,
            { mt: 3, onPress: q, disabled: m || !B },
            'Bet ',
            Object(y.abbreviateNumber)(B),
            ' Coins'
          ),
          d.a.createElement(
            h.y,
            { mt: 2 },
            '*You always get your coins back once the betting round ends.'
          )
        );
      }
      (I.propTypes = { amount: f.a.number }),
        (R.propTypes = {
          post: f.a.object,
          earning: f.a.object,
          amount: f.a.number,
          maxBet: f.a.number
        }),
        (D.propTypes = { children: f.a.node, onPress: f.a.func }),
        (A.propTypes = { user: f.a.object, post: f.a.object, close: f.a.func });
      t.default = B;
    },
    './src/modules/post/invest.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'updatePostVote', function() {
          return y;
        }),
        n.d(t, 'undoPostVote', function() {
          return v;
        }),
        n.d(t, 'setInvestments', function() {
          return j;
        }),
        n.d(t, 'loadingInvestments', function() {
          return O;
        }),
        n.d(t, 'setPostInvestments', function() {
          return g;
        }),
        n.d(t, 'setUsers', function() {
          return E;
        }),
        n.d(t, 'vote', function() {
          return w;
        }),
        n.d(t, 'getInvestments', function() {
          return x;
        }),
        n.d(t, 'loadingPostInvestments', function() {
          return _;
        }),
        n.d(t, 'getPostInvestments', function() {
          return P;
        }),
        n.d(t, 'bet', function() {
          return k;
        });
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = n.n(o),
        i = n('../../node_modules/normalizr/dist/normalizr.es.js'),
        c = n('./src/core/actionTypes.js'),
        u = n('./src/utils/index.js'),
        l = n('./src/modules/post/post.actions.js'),
        p = n('./src/modules/activity/activity.actions.js'),
        d = u.a.Alert(),
        m = new i.b.Entity('links', {}, { idAttribute: '_id' }),
        f = new i.b.Entity('posts', { metaPost: m }, { idAttribute: '_id' }),
        b = new i.b.Entity('users', {}, { idAttribute: '_id' }),
        h = new i.b.Entity(
          'investments',
          { post: f, investor: b },
          { idAttribute: '_id' }
        );
      function y(e) {
        return { type: c.Lb, payload: e };
      }
      function v(e) {
        return { type: c.Db, payload: e };
      }
      function j(e, t, n) {
        return { type: c.V, payload: { investments: e, userId: t, index: n } };
      }
      function O() {
        return { type: c.o };
      }
      function g(e, t, n) {
        return { type: c.fb, payload: { postId: t, data: e, index: n || 0 } };
      }
      function E(e) {
        return { type: c.rb, payload: e };
      }
      function w(e) {
        var t = e.amount,
          n = e.post,
          r = e.user,
          o = e.vote,
          i = e.displayBetPrompt;
        return (function() {
          var e = s()(
            a.a.mark(function e(s) {
              var c, l;
              return a.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          s(o ? v(n._id) : y({ post: n._id, amount: t })),
                          (e.next = 4),
                          s(
                            u.b.request({
                              method: 'POST',
                              endpoint: 'invest',
                              path: '/',
                              body: JSON.stringify({
                                investor: r._id,
                                amount: t,
                                post: n
                              })
                            })
                          )
                        );
                      case 4:
                        if (
                          ((c = e.sent).undoInvest ? s(v(n._id)) : s(y(c.investment)),
                          (l = !!n.parentPost),
                          !(t > 0) || o)
                        ) {
                          e.next = 12;
                          break;
                        }
                        return (
                          (e.next = 10),
                          s(
                            Object(p.showPushNotificationPrompt)({
                              type: l ? 'upvoteComment' : 'upvotePost'
                            })
                          )
                        );
                      case 10:
                        !e.sent && i && s(p.showBetPrompt);
                      case 12:
                        return e.abrupt('return', c);
                      case 15:
                        return (
                          (e.prev = 15),
                          (e.t0 = e.catch(0)),
                          s(o ? y({ post: n._id, amount: t }) : v(n._id)),
                          e.abrupt('return', d.alert(e.t0.message))
                        );
                      case 19:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 15]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function x(e, t, n) {
        return (function() {
          var r = s()(
            a.a.mark(function r(o) {
              var s, c;
              return a.a.wrap(
                function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          o(O()),
                          (r.next = 4),
                          o(
                            u.b.request({
                              method: 'GET',
                              endpoint: 'invest',
                              path: '/' + e,
                              query: { skip: t, limit: n }
                            })
                          )
                        );
                      case 4:
                        (s = r.sent),
                          (c = Object(i.a)({ investments: s }, { investments: [h] })),
                          o(Object(l.setPostsSimple)(c)),
                          o(j(c, e, t)),
                          (r.next = 12);
                        break;
                      case 10:
                        (r.prev = 10), (r.t0 = r.catch(0));
                      case 12:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 10]]
              );
            })
          );
          return function(e) {
            return r.apply(this, arguments);
          };
        })();
      }
      function _(e) {
        return { type: c.p, payload: e };
      }
      function P(e, t, n) {
        return (function() {
          var r = s()(
            a.a.mark(function r(o) {
              var s, c;
              return a.a.wrap(
                function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          o(_(e)),
                          (r.next = 4),
                          o(
                            u.b.request({
                              method: 'GET',
                              endpoint: 'invest',
                              query: { skip: n, limit: t },
                              path: '/post/'.concat(e)
                            })
                          )
                        );
                      case 4:
                        (s = r.sent),
                          (c = Object(i.a)({ investments: s }, { investments: [h] })),
                          o(E(c.entities.users)),
                          o(g(c, e, n)),
                          (r.next = 12);
                        break;
                      case 10:
                        (r.prev = 10), (r.t0 = r.catch(0));
                      case 12:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 10]]
              );
            })
          );
          return function(e) {
            return r.apply(this, arguments);
          };
        })();
      }
      function k(e) {
        var t = e.postId,
          n = e.stakedTokens;
        return (function() {
          var e = s()(
            a.a.mark(function e(r) {
              var o;
              return a.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          r(
                            u.b.request({
                              method: 'POST',
                              endpoint: 'invest',
                              path: '/bet',
                              body: JSON.stringify({ postId: t, stakedTokens: n })
                            })
                          )
                        );
                      case 3:
                        return (o = e.sent), e.abrupt('return', r(y(o)));
                      case 7:
                        throw ((e.prev = 7),
                        (e.t0 = e.catch(0)),
                        d.alert(e.t0.message),
                        e.t0);
                      case 11:
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
    },
    './src/modules/stats/coinStat.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        s = n.n(o),
        i = n('../../node_modules/react/index.js'),
        c = n.n(i),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        p = c.a.createContext({ wallet: null }),
        d = n('./src/utils/numbers.js'),
        m = n('./src/utils/propValidation.js'),
        f = n('./src/styles/index.js'),
        b = n('./src/modules/styled/uni.js'),
        h = n('./src/modules/wallet/price.context.js'),
        y = n('./public/img/relevantcoin.png');
      function v(e) {
        var t,
          n = e.user,
          r = e.isOwner,
          o = e.wallet,
          i = e.size,
          u = e.amount,
          l = e.mr,
          p = e.align,
          m = e.noNumber,
          v = e.secondary,
          j = e.fs,
          O = e.lh,
          g = e.inline,
          E = e.c,
          w = e.spaceBetween,
          x = e.showPrice,
          _ = s()(e, [
            'user',
            'isOwner',
            'wallet',
            'size',
            'amount',
            'mr',
            'align',
            'noNumber',
            'secondary',
            'fs',
            'lh',
            'inline',
            'c',
            'spaceBetween',
            'showPrice'
          ]);
        'number' == typeof u
          ? (t = u)
          : n && ((t = n.balance), n.tokenBalance && (t += n.tokenBalance));
        var P = Object(h.usePrice)(t);
        r &&
          n.ethAddress &&
          n.ethAddress[0] &&
          o.connectedBalance &&
          (t = o.connectedBalance + n.balance);
        var k = 'number' == typeof i ? i : 3,
          T = v ? b.x : b.w,
          S = 'center' === p ? 0 : Object(f.i)(-1, 'px'),
          C = g ? b.B : b.t,
          N = 0;
        return (
          !g && k && (N = k / 4),
          !g && w && (N = w),
          c.a.createElement(
            C,
            a()({}, _, {
              inline: g ? 1 : 0,
              mr: 'number' == typeof l ? l : g ? 0 : 1.5,
              align: p
            }),
            c.a.createElement(b.s, {
              inline: g ? 1 : 0,
              source: y,
              h: 1 * k,
              w: 1.05 * k,
              style: { bottom: S },
              resizeMode: 'contain'
            }),
            m
              ? null
              : c.a.createElement(
                  T,
                  { ml: N, fs: j, lh: O, inline: g ? 1 : 0, c: E },
                  g ? ' ' : '',
                  Object(d.abbreviateNumber)(t),
                  x ? P : ''
                )
          )
        );
      }
      v.propTypes = {
        lh: l.a.number,
        inline: l.a.oneOfType([l.a.bool, l.a.number]),
        secondary: l.a.bool,
        mr: l.a.number,
        fs: l.a.number,
        amount: l.a.number,
        size: l.a.number,
        user: m.c,
        isOwner: l.a.bool,
        wallet: l.a.object,
        align: l.a.string,
        lineheight: l.a.string,
        c: l.a.string,
        noNumber: l.a.bool,
        spaceBetween: l.a.number,
        showPrice: l.a.bool
      };
      t.a = Object(i.memo)(function(e) {
        return c.a.createElement(p.Consumer, null, function(t) {
          return c.a.createElement(v, a()({ wallet: t }, e));
        });
      });
    },
    './src/modules/tooltip/tooltip.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return x;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        s = n.n(o),
        i = n('../../node_modules/react/index.js'),
        c = n.n(i),
        u = n('../../node_modules/react-redux/es/index.js'),
        l = n('../../node_modules/prop-types/index.js'),
        p = n.n(l),
        d = n('./src/modules/styled/uni.js'),
        m = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        f = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        b = n.n(f),
        h = n('../../node_modules/react-native-web/dist/exports/Dimensions/index.js'),
        y = n('./src/modules/tooltip/tooltip.actions.js');
      function v(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function(t) {
                b()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var O = {
        vertical: 'top',
        horizontal: 'right',
        horizontalOffset: 0,
        verticalOffset: 10
      };
      var g = n('../../node_modules/react-tooltip/dist/index.es.js'),
        E = n('./public/img/info.png'),
        w = m.b.Text.withConfig({
          displayName: 'tooltipcomponent__AbsoluteWrapper',
          componentId: 'sc-17j84b5-0'
        })([
          'position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden;z-index:1;'
        ]);
      function x(e) {
        var t = e.children,
          n = e.name,
          r = e.data,
          o = e.info,
          l = e.inline,
          p = s()(e, ['children', 'name', 'data', 'info', 'inline']);
        Object(i.useEffect)(
          function() {
            g.a.rebuild && g.a.rebuild();
          },
          [r, n, t]
        ),
          Object(i.useEffect)(
            function() {
              return r.shouldRegister && x();
            },
            [r.shouldRegister, x]
          );
        var m = Object(u.d)(),
          f = Object(i.useRef)(),
          b = (function(e) {
            var t = e.tooltips,
              n = e.dispatch,
              r = function(e) {
                t.forEach(function(t) {
                  t.data.desktopOnly ||
                    (t.el.current &&
                      t.el.current.measureInWindow(function(r, a, o, s) {
                        var i = { x: r, y: a, w: o, h: s };
                        r + a + o + s !== 0 &&
                          (a > h.a.get('window').height - 50 ||
                            (n(
                              Object(y.b)(
                                j(j({ name: t.name, parent: i }, O), {}, { data: t.data })
                              )
                            ),
                            n(Object(y.c)(e))));
                      }));
                });
              };
            return {
              initTooltips: function() {
                t.forEach(function(e) {
                  return e.data.desktopOnly
                    ? null
                    : n(
                        Object(y.b)({
                          name: e.name,
                          toggle: function() {
                            return r(e.name);
                          }
                        })
                      );
                });
              },
              toggleTooltip: r
            };
          })({ tooltips: [{ name: n, el: f, data: r }], dispatch: m }),
          v = b.toggleTooltip,
          x = b.initTooltip,
          _ = (t && d.E) || w;
        return o
          ? c.a.createElement(
              d.B,
              { ref: f, onPress: (r.desktopOnly, null), inline: l },
              c.a.createElement(
                d.s,
                a()(
                  {
                    'data-event-off': 'click',
                    'data-place': r.position,
                    'data-for': 'mainTooltip',
                    'data-tip': JSON.stringify({ type: 'TEXT', props: r })
                  },
                  p,
                  { source: E, resizeMode: 'contain', h: 1.7, w: 1.7, inline: l },
                  p
                )
              )
            )
          : c.a.createElement(
              _,
              {
                ref: f,
                'data-event-off': 'click',
                'data-place': r.position,
                'data-for': 'mainTooltip',
                'data-tip': JSON.stringify({ type: 'TEXT', props: r }),
                onLongPress: function() {
                  return v(n);
                },
                onPress: (r.desktopOnly, null)
              },
              t
            );
      }
      x.propTypes = {
        name: p.a.string,
        data: p.a.object,
        children: p.a.object,
        info: p.a.bool,
        inline: p.a.oneOfType([p.a.bool, p.a.number])
      };
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return E;
        }),
        n.d(t, 'exchangeLink', function() {
          return w;
        }),
        n.d(t, 'tokenEnabled', function() {
          return x;
        }),
        n.d(t, 'usePrice', function() {
          return _;
        }),
        n.d(t, 'default', function() {
          return P;
        });
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        s = n.n(o),
        i = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        c = n.n(i),
        u = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        l = n.n(u),
        p = n('../../node_modules/react/index.js'),
        d = n.n(p),
        m = n('../../node_modules/prop-types/index.js'),
        f = n.n(m),
        b = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        h = n('./src/utils/numbers.js');
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function(t) {
                s()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var j = Object({
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
          TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec',
          API_SERVER: 'http://localhost:3000'
        }),
        O = j.TOKEN_ADDRESS,
        g = j.DISABLE_PRICE,
        E = d.a.createContext(0);
      function w() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(O);
      }
      function x() {
        return !!O;
      }
      function _(e, t) {
        var n = Object(p.useContext)(E).price;
        return n
          ? 'number' === t
            ? Object(h.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(h.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function P(e) {
        var t = e.children,
          n = Object(p.useReducer)(k, { loading: !1, error: !1, data: null, refresh: 0 }),
          r = l()(n, 2),
          o = r[0],
          s = r[1];
        Object(p.useEffect)(
          function() {
            var e = !1;
            return (
              (function() {
                var t = c()(
                  a.a.mark(function t() {
                    var n, r, o;
                    return a.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((s({ type: 'FETCH_PRICE_INIT' }), O && !g)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt('return');
                            case 3:
                              return (
                                (t.prev = 3), (t.next = 6), Object(b.getTokenReserves)(O)
                              );
                            case 6:
                              return (
                                (n = t.sent),
                                (t.next = 9),
                                fetch('https://api.infura.io/v1/ticker/ethusd')
                              );
                            case 9:
                              return (r = t.sent), (t.next = 12), r.json();
                            case 12:
                              (o = t.sent),
                                e ||
                                  s({
                                    type: 'FETCH_PRICE_SUCCESS',
                                    payload: v(v({}, n), {}, { ethPrice: o.bid })
                                  }),
                                (t.next = 19);
                              break;
                            case 16:
                              (t.prev = 16),
                                (t.t0 = t.catch(3)),
                                e || s({ type: 'FETCH_PRICE_ERROR', payload: t.t0 });
                            case 19:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[3, 16]]
                    );
                  })
                );
                return function() {
                  return t.apply(this, arguments);
                };
              })()(),
              setTimeout(function() {
                s({ type: 'REFRESH_PRICE' });
              }, 6e4),
              function() {
                e = !0;
              }
            );
          },
          [o.refresh]
        );
        var i = (function(e) {
            if (!e) return null;
            var t = e.ethReserve,
              n = e.tokenReserve,
              r = e.ethPrice;
            if (!t || !n) return null;
            var a = t.amount.div(n.amount).times(r);
            return parseFloat(a.toString());
          })(o.data),
          u = '($'.concat(Object(h.abbreviateNumber)(i, 2), ')');
        return d.a.createElement(E.Provider, { value: { price: i, priceString: u } }, t);
      }
      P.propTypes = { children: f.a.node };
      var k = function(e, t) {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return v(v({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return v(v({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return v(v({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return v(v({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/utils/propValidation.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return s;
      }),
        n.d(t, 'a', function() {
          return i;
        }),
        n.d(t, 'b', function() {
          return c;
        });
      var r = n('../../node_modules/prop-types/index.js'),
        a = n.n(r),
        o = n('../../node_modules/react-is/index.js'),
        s = a.a.shape({
          handle: a.a.string,
          balance: a.a.number,
          image: a.a.string,
          name: a.a.string
        }),
        i =
          (a.a.shape({
            _id: a.a.string.isRequired,
            user: a.a.string.isRequired,
            title: a.a.string,
            embeddedUser: a.a.object,
            tags: a.a.array,
            body: a.a.string,
            postDate: a.a.instanceOf(Date),
            data: a.a.object,
            link: a.a.object,
            parentPost: a.a.number,
            type: a.a.string
          }),
          a.a.shape({ isAuthenticated: a.a.bool, user: s, community: a.a.string }));
      function c(e, t, n) {
        if (e[t] && !Object(o.isValidElementType)(e[t]))
          return new Error(
            "Invalid prop '"
              .concat(t, "' supplied to '")
              .concat(n, "': the prop is not a valid React component")
          );
      }
    },
    './src/utils/rewards.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      }),
        n.d(t, 'b', function() {
          return o;
        });
      var r = n('../common/lib/index.js');
      function a(e, t) {
        return t && e && !e.parentPost
          ? e.pagerank < t.currentShares / (t.postCount || 1)
            ? 0
            : ((e.payoutShare = e.pagerank / (t.topPostShares + e.pagerank || 1)),
              (e.payout = t.rewardFund * e.payoutShare),
              e.payout / r.TOKEN_DECIMALS)
          : null;
      }
      function o(e) {
        if ('pending' === e.status) {
          if (0 === e.totalPostShares) return 0;
          var t = e.estimatedPostPayout;
          return t > 1e8 && (t /= r.TOKEN_DECIMALS), (t * e.shares) / e.totalPostShares;
        }
        return e.earned || 'paidout' === e.status ? e.earned : 0;
      }
    }
  }
]);
//# sourceMappingURL=post-bet-bet.bundle.js.map