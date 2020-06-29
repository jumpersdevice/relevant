(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [28, 61],
  {
    './public/img/info.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/info.png');
    },
    './src/modules/activity/activity.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'setActivity', function() {
          return h;
        }),
        n.d(t, 'resetActivity', function() {
          return j;
        }),
        n.d(t, 'clearCount', function() {
          return v;
        }),
        n.d(t, 'setCount', function() {
          return O;
        }),
        n.d(t, 'getActivity', function() {
          return g;
        }),
        n.d(t, 'markRead', function() {
          return E;
        }),
        n.d(t, 'createNotification', function() {
          return P;
        }),
        n.d(t, 'getNotificationCount', function() {
          return _;
        }),
        n.d(t, 'showBannerPrompt', function() {
          return w;
        }),
        n.d(t, 'hideBannerPrompt', function() {
          return T;
        }),
        n.d(t, 'enableDesktopNotifications', function() {
          return x;
        }),
        n.d(t, 'showBetPrompt', function() {
          return k;
        }),
        n.d(t, 'showPushNotificationPrompt', function() {
          return S;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = n.n(a),
        s = n('./src/core/actionTypes.js'),
        c = n('./src/modules/ui/error.actions.js'),
        u = n('./src/utils/index.js');
      function l() {
        return (l = i()(function*() {
          try {
            var e = yield navigator.serviceWorker.ready,
              t = yield e.pushManager.getSubscription();
            if (t) return t;
            var n = d(
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4'
            );
            return e.pushManager.subscribe({
              userVisibleOnly: !0,
              applicationServerKey: n
            });
          } catch (e) {
            return console.log(e), null;
          }
        })).apply(this, arguments);
      }
      function d(e) {
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
      var p = n('./src/modules/auth/auth.actions.js');
      function m(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var f = ''.concat('http://localhost:3000', '/api/notification'),
        y = e => ({
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer '.concat(e)
          }
        });
      function h(e, t, n) {
        return { type: s.G, payload: { data: e, type: t, index: n } };
      }
      function j(e) {
        return { type: 'RESET_ACTIVITY', payload: e };
      }
      function v() {
        return { type: 'CLEAR_COUNT' };
      }
      function O(e) {
        return { type: s.O, payload: e };
      }
      function g(e) {
        return (function() {
          var t = i()(function*(t) {
            try {
              var n = yield t(
                u.b.request({
                  method: 'GET',
                  endpoint: 'notification',
                  path: '/',
                  auth: !0,
                  query: { skip: e }
                })
              );
              t(h(n, 'personal', e)), t(c.a('activity', !1));
            } catch (e) {
              c.a('activity', !0, e.message);
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function E() {
        return e =>
          u.f
            .getToken()
            .then(e =>
              fetch(''.concat(f, '/markread'), b(b({}, y(e)), {}, { method: 'PUT' }))
            )
            .then(() => {
              e({ type: 'CLEAR_COUNT' });
            })
            .catch(null);
      }
      function P(e) {
        return () =>
          u.f
            .getToken()
            .then(t =>
              fetch(
                ''.concat(f),
                b(b({}, y(t)), {}, { method: 'POST', body: JSON.stringify(e) })
              )
            )
            .catch(null);
      }
      function _() {
        return (function() {
          var e = i()(function*(e) {
            try {
              var t = yield e(
                u.b.request({
                  method: 'GET',
                  endpoint: 'notification',
                  path: '/unread',
                  auth: !0
                })
              );
              e(O(t.unread));
            } catch (e) {}
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function w(e, t) {
        return { type: s.yb, payload: { promptType: e, promptProps: t } };
      }
      function T(e) {
        return { type: s.l, payload: e };
      }
      function x() {
        return (function() {
          var e = i()(function*(e) {
            try {
              var t = yield (function() {
                return l.apply(this, arguments);
              })();
              e(
                Object(p.updateNotificationSettings)({ desktop: { all: !0 } }, t.toJSON())
              ),
                e(T());
            } catch (e) {
              console.log(e);
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      var k = (function() {
          var e = i()(function*(e) {
            return !(yield u.f.isDismissed('betDismissed', 14)) && e(w('bet'));
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        S = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (function() {
            var t = i()(function*(t) {
              return C({ dispatch: t, promptProps: e });
            });
            return function(e) {
              return t.apply(this, arguments);
            };
          })();
        };
      function C(e) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = i()(function*(e) {
          var { dispatch: t, promptProps: n } = e;
          return (
            (!Notification ||
              ('granted' !== Notification.permission &&
                'denied' !== Notification.permission)) &&
            !(yield u.f.isDismissed('pushDismissed', 30)) && t(w('push', n))
          );
        })).apply(this, arguments);
      }
    },
    './src/modules/community/community.selectors.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      });
      var r = n('../../node_modules/react-redux/es/index.js'),
        o = () => Object(r.e)(e => e.community.communities[e.community.active]);
    },
    './src/modules/post/bet/bet.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'BetContainer', function() {
          return N;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        i = n.n(a),
        s = n('../../node_modules/react/index.js'),
        c = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = n('../../node_modules/react-redux/es/index.js'),
        p = n('./src/modules/styled/uni.js'),
        m = n('./src/utils/numbers.js'),
        b = n('./src/styles/index.js'),
        f = n('../common/lib/index.js'),
        y = n('./src/modules/stats/coinStat.component.js'),
        h = n('./src/modules/post/invest.actions.js'),
        j = n('./src/modules/navigation/navigation.actions.js'),
        v = n('./src/modules/tooltip/tooltip.component.js'),
        O = n('./src/modules/wallet/price.context.js'),
        g = n('./src/modules/navigation/ULink.component.js'),
        E = n('./src/utils/post.js'),
        P = n('./src/utils/rewards.js'),
        _ = n('./src/modules/community/community.selectors.js');
      function w(e) {
        var { percent: t, color: n, text: r, strokeWidth: o, w: a, h: i } = e,
          s = 15.91549430918954,
          u = 2 * s + o;
        return c.a.createElement(
          'svg',
          {
            height: i || '100%',
            width: a || '100%',
            viewBox: '0 0 '.concat(u, ' ').concat(u)
          },
          c.a.createElement('circle', {
            cx: '50%',
            cy: '50%',
            r: s,
            fill: 'none',
            strokeWidth: o,
            stroke: b.b.lightBorder
          }),
          c.a.createElement('circle', {
            cx: '50%',
            cy: '50%',
            r: s,
            fill: 'none',
            strokeWidth: o,
            stroke: n,
            strokeDasharray: ''.concat(100 - t, ', ').concat(t),
            strokeDashoffset: 125 - t
          }),
          r &&
            c.a.createElement(
              'text',
              {
                fontSize: '10px',
                x: '50%',
                y: '60%',
                fill: b.b.black,
                textAnchor: 'middle',
                fontFamily: 'HelveticaNeue-CondensedBold'
              },
              r
            )
        );
      }
      w.propTypes = {
        percent: l.a.number,
        color: l.a.string,
        text: l.a.string,
        strokeWidth: l.a.number,
        w: l.a.string,
        h: l.a.string
      };
      var T = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        x = n.n(T);
      function k(e) {
        var { amount: t } = e,
          n = x()(e, ['amount']);
        return c.a.createElement(
          y.a,
          i()(
            { size: 1.5, fs: 1.5, secondary: !0, c: b.b.black, inline: 1, amount: t },
            n
          )
        );
      }
      function S(e) {
        var { post: t, amount: n, earning: r, maxBet: o } = e,
          a = Object(_.a)(),
          i = Object(d.e)(e =>
            (e.investments.posts[t._id] || [])
              .map(t => e.investments.investments[t])
              .filter(t => t.stakedTokens > 0 && t.investor !== e.auth.user._id)
          ),
          u = Object(d.d)();
        Object(s.useEffect)(() => {
          u(Object(h.getPostInvestments)(t._id));
        }, [u, t._id]);
        var l = r ? r.shares : 0,
          f = r ? r.stakedTokens : 0,
          y = i.length,
          j = y > 1 ? 'users' : 'user',
          v = y
            ? ''
                .concat(y, ' ')
                .concat(j, ' bet a total of ')
                .concat(
                  Object(m.abbreviateNumber)(t.data.totalShares - f),
                  ' coins on this post'
                )
            : '',
          O = Object(E.a)({ post: t, stakedTokens: n }),
          g = Object(P.a)(t.data, a),
          T = y ? (O + l) / (t.data.shares + O) : (f + n) / (o + f),
          x = 100 * T,
          S = g * T,
          C = c.a.createElement(
            p.y,
            { inline: 1 },
            '  ',
            c.a.createElement(
              p.B,
              { style: { top: 2 }, inline: 1, mb: -0.5 },
              c.a.createElement(w, {
                w: '12px',
                h: '12px',
                percent: 100 - x,
                strokeWidth: 30,
                color: b.b.blue
              })
            ),
            ' ',
            Object(m.abbreviateNumber)(x),
            '%'
          );
        return c.a.createElement(
          s.Fragment,
          null,
          c.a.createElement(p.y, null, v),
          S > 0 &&
            c.a.createElement(
              p.E,
              { mt: 0.25, fdirection: 'row' },
              c.a.createElement(
                p.y,
                { inline: 1 },
                'Your estimated rewards: ',
                c.a.createElement(k, { amount: S })
              ),
              c.a.createElement(p.y, { inline: 1 }, C, ' of total')
            )
        );
      }
      function C(e) {
        var { children: t, onPress: n } = e;
        return c.a.createElement(
          p.r,
          {
            border: 1,
            w: 8,
            h: 8,
            minwidth: 'auto',
            bradius: 4,
            bg: b.b.white,
            onPress: n
          },
          c.a.createElement(p.v, { c: b.b.blue, fs: 2.5, lh: 2.5 }, t)
        );
      }
      function N(e) {
        var t = i()({}, e),
          n = Object(d.e)(e => e.auth.user) || {},
          r = Object(d.e)(e => e.posts.posts[e.navigation.modalData.postId]);
        return n && r ? c.a.createElement(R, i()({ user: n, post: r }, t)) : null;
      }
      function R(e) {
        var { user: t, post: n, close: r } = e,
          a = Object(d.d)(),
          i = Object(d.e)(e =>
            e.earnings.pending
              .map(t => e.earnings.entities[t])
              .find(e => e.post === n._id)
          ),
          [u, l] = Object(s.useState)(!1),
          E = i ? 'Increase Your Bet' : 'Bet on the Relevance of this Post',
          P = t.balance + t.tokenBalance,
          _ = P - t.lockedTokens,
          w = Math.max(_ * f.VOTE_COST_RATIO, 0),
          [T, x] = Object(s.useState)(w),
          [N, R] = Object(s.useState)(Object(m.timeLeftTick)(n.data.payoutTime));
        if (
          (Object(s.useEffect)(() => {
            var e = setInterval(() => R(Object(m.timeLeftTick)(n.data.payoutTime)), 1e3);
            return () => clearInterval(e);
          }, [n.data.payoutTime, N]),
          !t || !n)
        )
          return null;
        var I = (function() {
            var e = o()(function*() {
              try {
                l(!0),
                  yield a(Object(h.bet)({ postId: n._id, stakedTokens: T })),
                  l(!1),
                  r();
              } catch (e) {
                l(!1);
              }
            });
            return function() {
              return e.apply(this, arguments);
            };
          })(),
          B = Object(O.exchangeLink)(),
          D = (100 * T) / _;
        return c.a.createElement(
          p.E,
          null,
          c.a.createElement(
            p.q,
            { inline: 1, mr: 2 },
            E,
            ' ',
            c.a.createElement(v.a, {
              inline: 1,
              name: 'betInfo',
              data: {
                text:
                  'Posts that get upvoted by lots of users with high Reputation get payouts.\n\nBet more coins and bet early in order to win the biggest portion of the payout.'
              },
              info: !0
            })
          ),
          c.a.createElement(
            p.E,
            { fdirection: 'row', align: 'baseline' },
            c.a.createElement(p.y, { mt: 1, mr: 1 }, 'Time until payout: ', N)
          ),
          c.a.createElement(
            p.E,
            { mt: 4, fdirection: 'row', justify: 'space-between', align: 'center' },
            c.a.createElement(
              C,
              {
                onPress: () =>
                  x(e => {
                    var n = (P - t.lockedTokens - w) / 5,
                      r = w / 5,
                      o = w / 100;
                    return e - r <= 0 + o
                      ? e
                      : e - n >= w - o
                      ? e - n
                      : Math.max(0, e - r);
                  })
              },
              '–'
            ),
            c.a.createElement(
              p.E,
              { pr: 1 },
              c.a.createElement(y.a, {
                align: 'center',
                fs: 4.5,
                lh: 4.5,
                spaceBetween: 1,
                c: b.b.black,
                amount: T
              })
            ),
            c.a.createElement(
              C,
              {
                onPress: () =>
                  x(e => {
                    var t = (_ - w) / 5,
                      n = w / 5;
                    return e + n <= w + w / 100 ? e + n : Math.min(e + t, _);
                  })
              },
              '+'
            )
          ),
          c.a.createElement(
            p.E,
            { mt: 2 },
            c.a.createElement(
              p.E,
              { h: 0.5, fdirection: 'row' },
              c.a.createElement(p.E, { w: ''.concat(D, '%'), bg: b.b.blue }),
              c.a.createElement(p.E, { w: ''.concat(100 - D, '%'), bg: b.b.lightBorder })
            ),
            c.a.createElement(
              p.E,
              { fdirection: 'row', justify: 'space-between' },
              c.a.createElement(
                p.x,
                { mt: 0.5 },
                'Available Coins: ',
                c.a.createElement(k, { amount: _ - T })
              ),
              Object(O.tokenEnabled)() &&
                c.a.createElement(
                  g.a,
                  { inline: 1, to: B, external: !0, target: '_blank' },
                  c.a.createElement(
                    p.x,
                    {
                      mt: 0.5,
                      c: b.b.blue,
                      onPress: () => {
                        a(Object(j.goToUrl)(B));
                      }
                    },
                    'Get more coins'
                  )
                )
            )
          ),
          c.a.createElement(
            p.E,
            { mt: 3 },
            c.a.createElement(S, { maxBet: _, post: n, amount: T, earning: i })
          ),
          c.a.createElement(
            p.r,
            { mt: 3, onPress: I, disabled: u || !T },
            'Bet ',
            Object(m.abbreviateNumber)(T),
            ' Coins'
          ),
          c.a.createElement(
            p.y,
            { mt: 2 },
            '*You always get your coins back once the betting round ends.'
          )
        );
      }
      (k.propTypes = { amount: l.a.number }),
        (S.propTypes = {
          post: l.a.object,
          earning: l.a.object,
          amount: l.a.number,
          maxBet: l.a.number
        }),
        (C.propTypes = { children: l.a.node, onPress: l.a.func }),
        (R.propTypes = { user: l.a.object, post: l.a.object, close: l.a.func });
      t.default = N;
    },
    './src/modules/post/invest.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'updatePostVote', function() {
          return f;
        }),
        n.d(t, 'undoPostVote', function() {
          return y;
        }),
        n.d(t, 'setInvestments', function() {
          return h;
        }),
        n.d(t, 'loadingInvestments', function() {
          return j;
        }),
        n.d(t, 'setPostInvestments', function() {
          return v;
        }),
        n.d(t, 'setUsers', function() {
          return O;
        }),
        n.d(t, 'vote', function() {
          return g;
        }),
        n.d(t, 'getInvestments', function() {
          return E;
        }),
        n.d(t, 'loadingPostInvestments', function() {
          return P;
        }),
        n.d(t, 'getPostInvestments', function() {
          return _;
        }),
        n.d(t, 'bet', function() {
          return w;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(r),
        a = n('../../node_modules/normalizr/dist/normalizr.es.js'),
        i = n('./src/core/actionTypes.js'),
        s = n('./src/utils/index.js'),
        c = n('./src/modules/post/post.actions.js'),
        u = n('./src/modules/activity/activity.actions.js'),
        l = s.a.Alert(),
        d = new a.b.Entity('links', {}, { idAttribute: '_id' }),
        p = new a.b.Entity('posts', { metaPost: d }, { idAttribute: '_id' }),
        m = new a.b.Entity('users', {}, { idAttribute: '_id' }),
        b = new a.b.Entity(
          'investments',
          { post: p, investor: m },
          { idAttribute: '_id' }
        );
      function f(e) {
        return { type: i.Lb, payload: e };
      }
      function y(e) {
        return { type: i.Db, payload: e };
      }
      function h(e, t, n) {
        return { type: i.V, payload: { investments: e, userId: t, index: n } };
      }
      function j() {
        return { type: i.o };
      }
      function v(e, t, n) {
        return { type: i.fb, payload: { postId: t, data: e, index: n || 0 } };
      }
      function O(e) {
        return { type: i.rb, payload: e };
      }
      function g(e) {
        var { amount: t, post: n, user: r, vote: a, displayBetPrompt: i } = e;
        return (function() {
          var e = o()(function*(e) {
            try {
              e(a ? y(n._id) : f({ post: n._id, amount: t }));
              var o = yield e(
                s.b.request({
                  method: 'POST',
                  endpoint: 'invest',
                  path: '/',
                  body: JSON.stringify({ investor: r._id, amount: t, post: n })
                })
              );
              o.undoInvest ? e(y(n._id)) : e(f(o.investment));
              var c = !!n.parentPost;
              if (t > 0 && !a)
                !(yield e(
                  Object(u.showPushNotificationPrompt)({
                    type: c ? 'upvoteComment' : 'upvotePost'
                  })
                )) &&
                  i &&
                  e(u.showBetPrompt);
              return o;
            } catch (r) {
              return e(a ? f({ post: n._id, amount: t }) : y(n._id)), l.alert(r.message);
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function E(e, t, n) {
        return (function() {
          var r = o()(function*(r) {
            try {
              r(j());
              var o = yield r(
                  s.b.request({
                    method: 'GET',
                    endpoint: 'invest',
                    path: '/' + e,
                    query: { skip: t, limit: n }
                  })
                ),
                i = Object(a.a)({ investments: o }, { investments: [b] });
              r(Object(c.setPostsSimple)(i)), r(h(i, e, t));
            } catch (e) {}
          });
          return function(e) {
            return r.apply(this, arguments);
          };
        })();
      }
      function P(e) {
        return { type: i.p, payload: e };
      }
      function _(e, t, n) {
        return (function() {
          var r = o()(function*(r) {
            try {
              r(P(e));
              var o = yield r(
                  s.b.request({
                    method: 'GET',
                    endpoint: 'invest',
                    query: { skip: n, limit: t },
                    path: '/post/'.concat(e)
                  })
                ),
                i = Object(a.a)({ investments: o }, { investments: [b] });
              r(O(i.entities.users)), r(v(i, e, n));
            } catch (e) {}
          });
          return function(e) {
            return r.apply(this, arguments);
          };
        })();
      }
      function w(e) {
        var { postId: t, stakedTokens: n } = e;
        return (function() {
          var e = o()(function*(e) {
            try {
              var r = yield e(
                s.b.request({
                  method: 'POST',
                  endpoint: 'invest',
                  path: '/bet',
                  body: JSON.stringify({ postId: t, stakedTokens: n })
                })
              );
              return e(f(r));
            } catch (e) {
              throw (l.alert(e.message), e);
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
    },
    './src/modules/stats/coinStat.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        i = n.n(a),
        s = n('../../node_modules/react/index.js'),
        c = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = c.a.createContext({ wallet: null }),
        p = n('./src/utils/numbers.js'),
        m = n('./src/utils/propValidation.js'),
        b = n('./src/styles/index.js'),
        f = n('./src/modules/styled/uni.js'),
        y = n('./src/modules/wallet/price.context.js'),
        h = n('./public/img/relevantcoin.png');
      function j(e) {
        var t,
          {
            user: n,
            isOwner: r,
            wallet: a,
            size: s,
            amount: u,
            mr: l,
            align: d,
            noNumber: m,
            secondary: j,
            fs: v,
            lh: O,
            inline: g,
            c: E,
            spaceBetween: P,
            showPrice: _
          } = e,
          w = i()(e, [
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
        var T = Object(y.usePrice)(t);
        r &&
          n.ethAddress &&
          n.ethAddress[0] &&
          a.connectedBalance &&
          (t = a.connectedBalance + n.balance);
        var x = 'number' == typeof s ? s : 3,
          k = j ? f.x : f.w,
          S = 'center' === d ? 0 : Object(b.i)(-1, 'px'),
          C = g ? f.B : f.t,
          N = 0;
        return (
          !g && x && (N = x / 4),
          !g && P && (N = P),
          c.a.createElement(
            C,
            o()({}, w, {
              inline: g ? 1 : 0,
              mr: 'number' == typeof l ? l : g ? 0 : 1.5,
              align: d
            }),
            c.a.createElement(f.s, {
              inline: g ? 1 : 0,
              source: h,
              h: 1 * x,
              w: 1.05 * x,
              style: { bottom: S },
              resizeMode: 'contain'
            }),
            m
              ? null
              : c.a.createElement(
                  k,
                  { ml: N, fs: v, lh: O, inline: g ? 1 : 0, c: E },
                  g ? ' ' : '',
                  Object(p.abbreviateNumber)(t),
                  _ ? T : ''
                )
          )
        );
      }
      j.propTypes = {
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
      t.a = Object(s.memo)(e =>
        c.a.createElement(d.Consumer, null, t =>
          c.a.createElement(j, o()({ wallet: t }, e))
        )
      );
    },
    './src/modules/tooltip/tooltip.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return x;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        i = n.n(a),
        s = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        c = n.n(s),
        u = n('../../node_modules/react/index.js'),
        l = n.n(u),
        d = n('../../node_modules/react-redux/es/index.js'),
        p = n('../../node_modules/prop-types/index.js'),
        m = n.n(p),
        b = n('./src/modules/styled/uni.js'),
        f = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        y = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        h = n.n(y),
        j = n('../../node_modules/react-native-web/dist/exports/Dimensions/index.js'),
        v = n('./src/modules/tooltip/tooltip.actions.js');
      function O(e, t) {
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
            ? O(Object(n), !0).forEach(function(t) {
                h()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var E = {
        vertical: 'top',
        horizontal: 'right',
        horizontalOffset: 0,
        verticalOffset: 10
      };
      var P = n('../../node_modules/react-tooltip/dist/index.es.js');
      function _() {
        var e = c()([
          '\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  z-index: 1;\n'
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      var w = n('./public/img/info.png'),
        T = f.b.Text(_());
      function x(e) {
        var { children: t, name: n, data: r, info: a, inline: s } = e,
          c = i()(e, ['children', 'name', 'data', 'info', 'inline']);
        Object(u.useEffect)(() => {
          P.a.rebuild && P.a.rebuild();
        }, [r, n, t]),
          Object(u.useEffect)(() => r.shouldRegister && y(), [r.shouldRegister, y]);
        var p = Object(d.d)(),
          m = Object(u.useRef)(),
          { toggleTooltip: f, initTooltip: y } = (function(e) {
            var { tooltips: t, dispatch: n } = e,
              r = e => {
                t.forEach(t => {
                  t.data.desktopOnly ||
                    (t.el.current &&
                      t.el.current.measureInWindow((r, o, a, i) => {
                        var s = { x: r, y: o, w: a, h: i };
                        r + o + a + i !== 0 &&
                          (o > j.a.get('window').height - 50 ||
                            (n(
                              Object(v.b)(
                                g(g({ name: t.name, parent: s }, E), {}, { data: t.data })
                              )
                            ),
                            n(Object(v.c)(e))));
                      }));
                });
              };
            return {
              initTooltips: () => {
                t.forEach(e =>
                  e.data.desktopOnly
                    ? null
                    : n(Object(v.b)({ name: e.name, toggle: () => r(e.name) }))
                );
              },
              toggleTooltip: r
            };
          })({ tooltips: [{ name: n, el: m, data: r }], dispatch: p }),
          h = (t && b.E) || T;
        return a
          ? l.a.createElement(
              b.B,
              { ref: m, onPress: (r.desktopOnly, null), inline: s },
              l.a.createElement(
                b.s,
                o()(
                  {
                    'data-event-off': 'click',
                    'data-place': r.position,
                    'data-for': 'mainTooltip',
                    'data-tip': JSON.stringify({ type: 'TEXT', props: r })
                  },
                  c,
                  { source: w, resizeMode: 'contain', h: 1.7, w: 1.7, inline: s },
                  c
                )
              )
            )
          : l.a.createElement(
              h,
              {
                ref: m,
                'data-event-off': 'click',
                'data-place': r.position,
                'data-for': 'mainTooltip',
                'data-tip': JSON.stringify({ type: 'TEXT', props: r }),
                onLongPress: () => f(n),
                onPress: (r.desktopOnly, null)
              },
              t
            );
      }
      x.propTypes = {
        name: m.a.string,
        data: m.a.object,
        children: m.a.object,
        info: m.a.bool,
        inline: m.a.oneOfType([m.a.bool, m.a.number])
      };
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return h;
        }),
        n.d(t, 'exchangeLink', function() {
          return j;
        }),
        n.d(t, 'tokenEnabled', function() {
          return v;
        }),
        n.d(t, 'usePrice', function() {
          return O;
        }),
        n.d(t, 'default', function() {
          return g;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = n.n(a),
        s = n('../../node_modules/react/index.js'),
        c = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        p = n('./src/utils/numbers.js');
      function m(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var { TOKEN_ADDRESS: f, DISABLE_PRICE: y } = Object({
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
        h = c.a.createContext(0);
      function j() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(f);
      }
      function v() {
        return !!f;
      }
      function O(e, t) {
        var { price: n } = Object(s.useContext)(h);
        return n
          ? 'number' === t
            ? Object(p.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(p.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function g(e) {
        var { children: t } = e,
          [n, r] = Object(s.useReducer)(E, {
            loading: !1,
            error: !1,
            data: null,
            refresh: 0
          });
        Object(s.useEffect)(() => {
          var e = !1;
          return (
            (function() {
              var t = i()(function*() {
                if ((r({ type: 'FETCH_PRICE_INIT' }), f && !y))
                  try {
                    var t = yield Object(d.getTokenReserves)(f),
                      n = yield fetch('https://api.infura.io/v1/ticker/ethusd'),
                      o = yield n.json();
                    e ||
                      r({
                        type: 'FETCH_PRICE_SUCCESS',
                        payload: b(b({}, t), {}, { ethPrice: o.bid })
                      });
                  } catch (t) {
                    e || r({ type: 'FETCH_PRICE_ERROR', payload: t });
                  }
              });
              return function() {
                return t.apply(this, arguments);
              };
            })()(),
            setTimeout(() => {
              r({ type: 'REFRESH_PRICE' });
            }, 6e4),
            () => {
              e = !0;
            }
          );
        }, [n.refresh]);
        var o = (function(e) {
            if (!e) return null;
            var { ethReserve: t, tokenReserve: n, ethPrice: r } = e;
            if (!t || !n) return null;
            var o = t.amount.div(n.amount).times(r);
            return parseFloat(o.toString());
          })(n.data),
          a = '($'.concat(Object(p.abbreviateNumber)(o, 2), ')');
        return c.a.createElement(h.Provider, { value: { price: o, priceString: a } }, t);
      }
      g.propTypes = { children: l.a.node };
      var E = (e, t) => {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return b(b({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return b(b({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return b(b({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return b(b({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/utils/propValidation.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return i;
      }),
        n.d(t, 'a', function() {
          return s;
        }),
        n.d(t, 'b', function() {
          return c;
        });
      var r = n('../../node_modules/prop-types/index.js'),
        o = n.n(r),
        a = n('../../node_modules/react-is/index.js'),
        i = o.a.shape({
          handle: o.a.string,
          balance: o.a.number,
          image: o.a.string,
          name: o.a.string
        }),
        s =
          (o.a.shape({
            _id: o.a.string.isRequired,
            user: o.a.string.isRequired,
            title: o.a.string,
            embeddedUser: o.a.object,
            tags: o.a.array,
            body: o.a.string,
            postDate: o.a.instanceOf(Date),
            data: o.a.object,
            link: o.a.object,
            parentPost: o.a.number,
            type: o.a.string
          }),
          o.a.shape({ isAuthenticated: o.a.bool, user: i, community: o.a.string }));
      function c(e, t, n) {
        if (e[t] && !Object(a.isValidElementType)(e[t]))
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
        return o;
      }),
        n.d(t, 'b', function() {
          return a;
        });
      var r = n('../common/lib/index.js');
      function o(e, t) {
        return t && e && !e.parentPost
          ? e.pagerank < t.currentShares / (t.postCount || 1)
            ? 0
            : ((e.payoutShare = e.pagerank / (t.topPostShares + e.pagerank || 1)),
              (e.payout = t.rewardFund * e.payoutShare),
              e.payout / r.TOKEN_DECIMALS)
          : null;
      }
      function a(e) {
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
//# sourceMappingURL=28.bundle.js.map
