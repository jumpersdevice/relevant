(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [42, 61],
  {
    './src/modules/admin/admin.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'setInvites', function() {
          return h;
        }),
        n.d(t, 'setWaitlist', function() {
          return y;
        }),
        n.d(t, 'deleteWaitlistUsers', function() {
          return v;
        }),
        n.d(t, 'updateInvite', function() {
          return E;
        }),
        n.d(t, 'destroyInvite', function() {
          return j;
        }),
        n.d(t, 'setInviteCount', function() {
          return g;
        }),
        n.d(t, 'getInviteCount', function() {
          return O;
        }),
        n.d(t, 'getInvites', function() {
          return w;
        }),
        n.d(t, 'createInvite', function() {
          return _;
        }),
        n.d(t, 'destroy', function() {
          return R;
        }),
        n.d(t, 'getWaitlist', function() {
          return P;
        }),
        n.d(t, 'inviteFromWaitlist', function() {
          return I;
        }),
        n.d(t, 'signupForMailingList', function() {
          return C;
        }),
        n.d(t, 'setDownvotes', function() {
          return T;
        }),
        n.d(t, 'getDownvotes', function() {
          return x;
        }),
        n.d(t, 'sendEmail', function() {
          return S;
        }),
        n.d(t, 'saveEmail', function() {
          return D;
        }),
        n.d(t, 'loadEmail', function() {
          return A;
        }),
        n.d(t, 'deleteWaitlistUser', function() {
          return N;
        }),
        n.d(t, 'sendPostNotification', function() {
          return k;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = n.n(o),
        s = n('../../node_modules/normalizr/dist/normalizr.es.js'),
        c = n('./src/core/actionTypes.js'),
        u = n('./src/utils/index.js');
      function l(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function(t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var m = u.a.Alert(),
        p = 'http://localhost:3000/api',
        b = new s.b.Entity('invites', {}, { idAttribute: '_id' }),
        f = new s.b.Entity('wait', {}, { idAttribute: '_id' });
      function h(e) {
        var { data: t, community: n, skip: r } = e;
        return { type: c.W, payload: { data: t, community: n, skip: r } };
      }
      function y(e) {
        return { type: c.wb, payload: e };
      }
      function v(e) {
        return { type: c.h, payload: e };
      }
      function E(e) {
        return { type: c.Ib, payload: e };
      }
      function j(e) {
        return { type: c.j, payload: e };
      }
      function g(e) {
        return { type: c.Y, payload: e };
      }
      function O() {
        return (function() {
          var e = a()(function*(e) {
            try {
              var t = yield e(
                u.b.request({ method: 'GET', endpoint: 'invites', path: '/count' })
              );
              e(g(t));
            } catch (e) {
              m.alert(e.message);
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function w(e, t, n) {
        return (function() {
          var r = a()(function*(r) {
            try {
              var i = yield r(
                u.b.request({
                  method: 'GET',
                  query: { skip: e, limit: t },
                  endpoint: 'invites',
                  path: ''
                })
              );
              return (
                r(
                  h({
                    data: Object(s.a)({ invites: i }, { invites: [b] }),
                    community: n,
                    skip: e
                  })
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          });
          return function(e) {
            return r.apply(this, arguments);
          };
        })();
      }
      function _(e) {
        return (function() {
          var t = a()(function*(t) {
            try {
              var n = yield t(
                u.b.request({
                  method: 'POST',
                  endpoint: 'invites',
                  path: '/',
                  body: JSON.stringify(e)
                })
              );
              return t(E(n.invite[0])), t(g(n.count)), n;
            } catch (e) {
              return m.alert(e.message), !1;
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function R(e) {
        return (function() {
          var t = a()(function*(t) {
            return fetch(
              p + '/invites/' + e._id,
              d({ method: 'DELETE' }, yield u.b.reqOptions())
            )
              .then(u.b.handleErrors)
              .then(() => {
                m.alert('removed item'), t(j(e));
              })
              .catch(e => {
                m.alert(e.message), console.log('invites error', e);
              });
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function P() {
        return (function() {
          var e = a()(function*(e) {
            return fetch(p + '/list', d({ method: 'GET' }, yield u.b.reqOptions()))
              .then(u.b.handleErrors)
              .then(e => e.json())
              .then(t => {
                var n = Object(s.a)({ wait: t }, { wait: [f] });
                e(y(n));
              })
              .catch(e => {
                console.log('invites error', e);
              });
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function I(e) {
        return (function() {
          var t = a()(function*(t) {
            return fetch(
              'http://localhost:3000/api/list/',
              d(
                d({ method: 'PUT' }, yield u.b.reqOptions()),
                {},
                { body: JSON.stringify(e) }
              )
            )
              .then(u.b.handleErrors)
              .then(() => (m.alert('users have been invited!'), t(v(e)), !0))
              .catch(e => (m.alert(e.message), console.log(e), !1));
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function C(e) {
        return a()(function*() {
          return fetch(
            'http://localhost:3000/api/list/',
            d(
              d({ method: 'POST' }, yield u.b.reqOptions()),
              {},
              { body: JSON.stringify(e) }
            )
          )
            .then(u.b.handleErrors)
            .then(() => (m.alert("You've been added to the waitlist.", 'success'), !0))
            .catch(e => (m.alert(e.message), console.log(e), !1));
        });
      }
      function T(e) {
        return { type: c.R, payload: e };
      }
      function x(e, t) {
        return n =>
          n(
            u.b.request({
              method: 'GET',
              query: { skip: e, limit: t },
              endpoint: 'invest',
              path: '/downvotes'
            })
          )
            .then(e => n(T(e)))
            .catch(e => m.alert(e.message));
      }
      function S(e) {
        return (function() {
          var t = a()(function*(t) {
            try {
              return (
                yield t(
                  u.b.request({
                    method: 'PUT',
                    endpoint: 'email',
                    path: '/',
                    body: JSON.stringify(e)
                  })
                ),
                m.alert('Email has been sent'),
                !0
              );
            } catch (e) {
              return !1;
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function D(e) {
        return (function() {
          var t = a()(function*(t) {
            try {
              return (
                yield t(
                  u.b.request({
                    method: 'PUT',
                    endpoint: 'email',
                    path: '/save',
                    body: JSON.stringify(e)
                  })
                ),
                m.alert('Email has been saved'),
                !0
              );
            } catch (e) {
              return !1;
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function A() {
        return (function() {
          var e = a()(function*(e) {
            try {
              return yield e(
                u.b.request({ method: 'GET', endpoint: 'email', path: '/load' })
              );
            } catch (e) {
              return !1;
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function N(e) {
        return (function() {
          var t = a()(function*(t) {
            try {
              (yield fetch(
                p + '/list/' + e._id,
                d({ method: 'DELETE' }, yield u.b.reqOptions())
              )) && t(v([e]));
            } catch (e) {
              m.alert(e.message);
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function k(e) {
        return (function() {
          var t = a()(function*(t) {
            try {
              return (
                yield t(
                  u.b.request({
                    method: 'POST',
                    endpoint: 'post',
                    path: '/sendPostNotification',
                    body: JSON.stringify(e)
                  })
                ),
                m.alert('Notification sent!')
              );
            } catch (e) {
              return !1;
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
    },
    './src/modules/invites/web/inviteModal.container.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        i = n.n(r),
        o = n('../../node_modules/react/index.js'),
        a = n.n(o),
        s = n('../../node_modules/prop-types/index.js'),
        c = n.n(s),
        u = n('../../node_modules/lodash/get.js'),
        l = n.n(u),
        d = n('./src/modules/admin/admin.actions.js'),
        m = n('../../node_modules/redux/es/redux.js'),
        p = n('../../node_modules/react-redux/es/index.js'),
        b = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        f = n.n(b),
        h = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        y = n.n(h),
        v = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        E = n.n(v),
        j = n('./src/modules/stats/coinStat.component.js'),
        g = n('./src/modules/styled/uni.js'),
        O = n('./src/styles/index.js'),
        w = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        _ = n('./src/modules/navigation/ULink.component.js'),
        R = n('../common/lib/index.js'),
        P = n('./src/utils/text.js'),
        I = n('../../node_modules/react-native-web/dist/exports/Animated/index.js');
      function C() {
        var e = E()(['\n  position: relative;\n  margin: 0 -', ';\n']);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      var T = Object(w.b)(g.m)(C(), Object(O.i)(6));
      class x extends o.Component {
        constructor(e, t) {
          var n;
          super(e, t),
            (n = this),
            y()(this, 'animate', () => {
              this.position.setValue(0),
                (this.color = this.position.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#7ED321', '#0000ff']
                })),
                (this.animation = I.a
                  .timing(this.position, { toValue: 1, duration: 8e3 })
                  .start());
            }),
            y()(
              this,
              'generateInvite',
              (function() {
                var e = f()(function*(e) {
                  var t = { invitedBy: n.props.auth.user._id };
                  e && (t.type = e);
                  var { postInviteGeneration: r } = n.props,
                    i = yield n.props.actions.createInvite(t);
                  r && r(i);
                });
                return function(t) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            y()(this, 'generateInviteUrl', e => {
              var { invite: t } = e,
                n =
                  window && window.location
                    ? window.location.origin
                    : 'https://relevant.community';
              return ''
                .concat(n, '/')
                .concat(t.community, '?invitecode=')
                .concat(t.code);
            }),
            (this.position = new I.a.Value(0)),
            (this.color = O.b.black);
        }
        componentDidMount() {
          var { auth: e, inviteList: t, actions: n } = this.props,
            r = t[e.community] || [];
          if (!t.length) {
            var i = r.length;
            n.getInvites(i, 100, e.community);
          }
        }
        render() {
          var {
              auth: e,
              community: t,
              count: n,
              inviteList: r,
              invites: i,
              onShare: o
            } = this.props,
            { user: s } = e,
            { userMemberships: c = [], communities: u } = t,
            l = Object.keys(u).find(e => u[e].slug === t.active),
            d = u[l] || {},
            m = c.find(e => e.communityId === d._id),
            p = 'admin' === s.role || (m && m.superAdmin),
            b = '/'.concat(e.community, '?invitecode=').concat(e.user.handle),
            f =
              window && window.location
                ? window.location.origin
                : 'https://relevant.community',
            h = ''.concat(f).concat(b),
            y = (r[e.community] || []).map(e => {
              var t = i[e],
                n = this.generateInviteUrl({ invite: t }),
                r = new Date().getTime() - Date.parse(t.createdAt) < 5e3,
                s = t.redeemed ? O.b.grey : O.b.blue;
              return (
                r && (this.animate(), (s = this.color || O.b.black)),
                a.a.createElement(
                  g.E,
                  { mt: 2, fdirection: 'column', key: e },
                  a.a.createElement(
                    g.E,
                    { fdirection: 'row', justify: 'space-between' },
                    a.a.createElement(
                      g.E,
                      { fdirection: 'row', flex: 1, mr: 1 },
                      a.a.createElement(
                        g.E,
                        { flex: 1 },
                        a.a.createElement(
                          g.i,
                          { numberOfLines: 1 },
                          a.a.createElement(
                            I.a.Text,
                            {
                              onClick: () => Object(P.copyToClipBoard)(n),
                              onPress: () =>
                                o({
                                  title: 'Join Relevant',
                                  message: 'Join Relevant',
                                  url: n,
                                  subject: 'Join Relevant'
                                }),
                              style: { color: s, cursor: 'pointer' }
                            },
                            n
                          )
                        )
                      ),
                      a.a.createElement(
                        g.E,
                        { ml: 0.5, alignSelf: 'flex-end' },
                        a.a.createElement(
                          g.i,
                          { c: O.b.grey },
                          'admin' === t.type ? 'mod' : null
                        )
                      )
                    ),
                    a.a.createElement(
                      g.i,
                      { c: t.redeemed ? O.b.grey : O.b.green },
                      t.redeemed ? 'redeemed' : 'available'
                    )
                  ),
                  a.a.createElement(g.m, { pt: 2 })
                )
              );
            }),
            v = h;
          return a.a.createElement(
            g.E,
            { display: 'flex', fdirection: 'column' },
            a.a.createElement(
              g.E,
              { mt: 6, display: 'flex', fdirection: 'column' },
              a.a.createElement(g.x, null, 'Public Invite Link'),
              a.a.createElement(
                g.d,
                { inline: 1, mt: 1 },
                'You and each new users get',
                ' ',
                a.a.createElement(j.a, {
                  size: 2,
                  amount: R.PUBLIC_LINK_REWARD,
                  inline: 1
                }),
                ' coin',
                1 === R.PUBLIC_LINK_REWARD ? '' : 's',
                ' per signup via your public invite code.'
              ),
              a.a.createElement(
                g.v,
                {
                  mt: 1,
                  onClick: () => Object(P.copyToClipBoard)(v),
                  c: O.b.blue,
                  onPress: () =>
                    o({
                      title: 'Join Relevant',
                      message: 'Join Relevant',
                      url: h,
                      subject: 'Join Relevant'
                    })
                },
                h
              )
            ),
            a.a.createElement(g.m, { pt: 6 }),
            a.a.createElement(
              g.E,
              { display: 'flex', fdirection: 'column', mt: 6 },
              a.a.createElement(
                g.x,
                null,
                'Private Invite: Your have ',
                n[t.active],
                ' referral invite',
                n[t.active] > 1 ? 's' : '',
                ' left.'
              ),
              a.a.createElement(g.e, { mt: 1 }),
              a.a.createElement(
                g.d,
                { inline: 1 },
                'Share your Reputation with trustworthy friends with your private invite codes. Earn ',
                a.a.createElement(j.a, { size: 2, amount: R.REFERRAL_REWARD, inline: 1 }),
                ' coin',
                1 === R.REFERRAL_REWARD ? '' : 's',
                ' per signup.'
              )
            ),
            a.a.createElement(
              _.a,
              {
                to: '#',
                onPress: () => this.generateInvite(),
                onClick: () => this.generateInvite(),
                c: O.b.blue
              },
              a.a.createElement(g.e, { mt: 1 }),
              a.a.createElement(
                g.v,
                { c: O.b.blue },
                'Click here to generate a new private link'
              )
            ),
            p
              ? a.a.createElement(
                  _.a,
                  {
                    to: '#',
                    onPress: () => this.generateInvite('admin'),
                    onClick: () => this.generateInvite('admin'),
                    c: O.b.blue
                  },
                  a.a.createElement(g.e, { mt: 1 }),
                  a.a.createElement(
                    g.v,
                    { mt: 1, c: O.b.blue },
                    'Click here to generate moderator invite link'
                  )
                )
              : null,
            a.a.createElement(T, { pt: 6 }),
            a.a.createElement(
              g.E,
              { mt: 6, fdirection: 'column' },
              a.a.createElement(g.q, null, 'Private Invites'),
              a.a.createElement(
                g.d,
                { inline: 1, fdirection: 'row' },
                'Here’s how many coins you’ve made from invites so far:',
                ' ',
                a.a.createElement(j.a, { size: 2, amount: s.referralTokens, inline: 1 }),
                ' coin',
                1 === s.referralTokens ? '' : 's',
                ' (max amount is ',
                R.MAX_AIRDROP,
                ')'
              ),
              a.a.createElement(g.E, { mt: 4, fdirection: 'column' }, y)
            )
          );
        }
      }
      x.propTypes = {
        inviteList: c.a.object,
        invites: c.a.object,
        auth: c.a.object,
        community: c.a.object,
        actions: c.a.object,
        count: c.a.object,
        onShare: c.a.func,
        postInviteGeneration: c.a.func
      };
      var S = x,
        D = n('./src/utils/alert.js');
      class A extends o.Component {
        componentDidMount() {
          var { community: e } = this.props.auth;
          e && this.props.actions.getInviteCount();
        }
        postInviteGeneration(e) {
          e && Object(D.Alert)().alert('Generated new invite link', 'success');
        }
        handleShare(e) {
          Object(P.copyToClipBoard)(e.url);
        }
        render() {
          return a.a.createElement(
            S,
            i()({}, this.props, {
              postInviteGeneration: this.postInviteGeneration,
              onShare: this.handleShare
            })
          );
        }
      }
      A.propTypes = { actions: c.a.object, close: c.a.func, auth: c.a.object };
      t.default = Object(p.c)(
        e => ({
          auth: l()(e, 'auth', {}),
          community: l()(e, 'community', {}),
          count: e.admin.count,
          invites: e.admin.invites,
          inviteList: e.admin.inviteList,
          initialValues: { invitedByString: l()(e, 'auth.user.name', '') }
        }),
        e => ({
          actions: Object(m.bindActionCreators)(
            {
              createInvite: d.createInvite,
              getInviteCount: d.getInviteCount,
              getInvites: d.getInvites
            },
            e
          )
        })
      )(A);
    },
    './src/modules/stats/coinStat.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        i = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        a = n.n(o),
        s = n('../../node_modules/react/index.js'),
        c = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = c.a.createContext({ wallet: null }),
        m = n('./src/utils/numbers.js'),
        p = n('./src/utils/propValidation.js'),
        b = n('./src/styles/index.js'),
        f = n('./src/modules/styled/uni.js'),
        h = n('./src/modules/wallet/price.context.js'),
        y = n('./public/img/relevantcoin.png');
      function v(e) {
        var t,
          {
            user: n,
            isOwner: r,
            wallet: o,
            size: s,
            amount: u,
            mr: l,
            align: d,
            noNumber: p,
            secondary: v,
            fs: E,
            lh: j,
            inline: g,
            c: O,
            spaceBetween: w,
            showPrice: _
          } = e,
          R = a()(e, [
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
        var I = 'number' == typeof s ? s : 3,
          C = v ? f.x : f.w,
          T = 'center' === d ? 0 : Object(b.i)(-1, 'px'),
          x = g ? f.B : f.t,
          S = 0;
        return (
          !g && I && (S = I / 4),
          !g && w && (S = w),
          c.a.createElement(
            x,
            i()({}, R, {
              inline: g ? 1 : 0,
              mr: 'number' == typeof l ? l : g ? 0 : 1.5,
              align: d
            }),
            c.a.createElement(f.s, {
              inline: g ? 1 : 0,
              source: y,
              h: 1 * I,
              w: 1.05 * I,
              style: { bottom: T },
              resizeMode: 'contain'
            }),
            p
              ? null
              : c.a.createElement(
                  C,
                  { ml: S, fs: E, lh: j, inline: g ? 1 : 0, c: O },
                  g ? ' ' : '',
                  Object(m.abbreviateNumber)(t),
                  _ ? P : ''
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
        user: p.c,
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
          c.a.createElement(v, i()({ wallet: t }, e))
        )
      );
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return y;
        }),
        n.d(t, 'exchangeLink', function() {
          return v;
        }),
        n.d(t, 'tokenEnabled', function() {
          return E;
        }),
        n.d(t, 'usePrice', function() {
          return j;
        }),
        n.d(t, 'default', function() {
          return g;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = n.n(o),
        s = n('../../node_modules/react/index.js'),
        c = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        m = n('./src/utils/numbers.js');
      function p(e, t) {
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
            ? p(Object(n), !0).forEach(function(t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var { TOKEN_ADDRESS: f, DISABLE_PRICE: h } = Object({
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
        y = c.a.createContext(0);
      function v() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(f);
      }
      function E() {
        return !!f;
      }
      function j(e, t) {
        var { price: n } = Object(s.useContext)(y);
        return n
          ? 'number' === t
            ? Object(m.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(m.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function g(e) {
        var { children: t } = e,
          [n, r] = Object(s.useReducer)(O, {
            loading: !1,
            error: !1,
            data: null,
            refresh: 0
          });
        Object(s.useEffect)(() => {
          var e = !1;
          return (
            (function() {
              var t = a()(function*() {
                if ((r({ type: 'FETCH_PRICE_INIT' }), f && !h))
                  try {
                    var t = yield Object(d.getTokenReserves)(f),
                      n = yield fetch('https://api.infura.io/v1/ticker/ethusd'),
                      i = yield n.json();
                    e ||
                      r({
                        type: 'FETCH_PRICE_SUCCESS',
                        payload: b(b({}, t), {}, { ethPrice: i.bid })
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
        var i = (function(e) {
            if (!e) return null;
            var { ethReserve: t, tokenReserve: n, ethPrice: r } = e;
            if (!t || !n) return null;
            var i = t.amount.div(n.amount).times(r);
            return parseFloat(i.toString());
          })(n.data),
          o = '($'.concat(Object(m.abbreviateNumber)(i, 2), ')');
        return c.a.createElement(y.Provider, { value: { price: i, priceString: o } }, t);
      }
      g.propTypes = { children: l.a.node };
      var O = (e, t) => {
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
        return a;
      }),
        n.d(t, 'a', function() {
          return s;
        }),
        n.d(t, 'b', function() {
          return c;
        });
      var r = n('../../node_modules/prop-types/index.js'),
        i = n.n(r),
        o = n('../../node_modules/react-is/index.js'),
        a = i.a.shape({
          handle: i.a.string,
          balance: i.a.number,
          image: i.a.string,
          name: i.a.string
        }),
        s =
          (i.a.shape({
            _id: i.a.string.isRequired,
            user: i.a.string.isRequired,
            title: i.a.string,
            embeddedUser: i.a.object,
            tags: i.a.array,
            body: i.a.string,
            postDate: i.a.instanceOf(Date),
            data: i.a.object,
            link: i.a.object,
            parentPost: i.a.number,
            type: i.a.string
          }),
          i.a.shape({ isAuthenticated: i.a.bool, user: a, community: i.a.string }));
      function c(e, t, n) {
        if (e[t] && !Object(o.isValidElementType)(e[t]))
          return new Error(
            "Invalid prop '"
              .concat(t, "' supplied to '")
              .concat(n, "': the prop is not a valid React component")
          );
      }
    }
  }
]);
//# sourceMappingURL=42.bundle.js.map
