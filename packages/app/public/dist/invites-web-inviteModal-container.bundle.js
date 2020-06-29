(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [42, 59],
  {
    './src/modules/admin/admin.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'setInvites', function() {
          return E;
        }),
        n.d(t, 'setWaitlist', function() {
          return y;
        }),
        n.d(t, 'deleteWaitlistUsers', function() {
          return O;
        }),
        n.d(t, 'updateInvite', function() {
          return _;
        }),
        n.d(t, 'destroyInvite', function() {
          return j;
        }),
        n.d(t, 'setInviteCount', function() {
          return w;
        }),
        n.d(t, 'getInviteCount', function() {
          return g;
        }),
        n.d(t, 'getInvites', function() {
          return R;
        }),
        n.d(t, 'createInvite', function() {
          return x;
        }),
        n.d(t, 'destroy', function() {
          return I;
        }),
        n.d(t, 'getWaitlist', function() {
          return P;
        }),
        n.d(t, 'inviteFromWaitlist', function() {
          return N;
        }),
        n.d(t, 'signupForMailingList', function() {
          return C;
        }),
        n.d(t, 'setDownvotes', function() {
          return S;
        }),
        n.d(t, 'getDownvotes', function() {
          return T;
        }),
        n.d(t, 'sendEmail', function() {
          return D;
        }),
        n.d(t, 'saveEmail', function() {
          return k;
        }),
        n.d(t, 'loadEmail', function() {
          return A;
        }),
        n.d(t, 'deleteWaitlistUser', function() {
          return B;
        }),
        n.d(t, 'sendPostNotification', function() {
          return F;
        });
      var r = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = n.n(r),
        a = n('./node_modules/@babel/runtime/regenerator/index.js'),
        o = n.n(a),
        c = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = n.n(c),
        s = n('../../node_modules/normalizr/dist/normalizr.es.js'),
        l = n('./src/core/actionTypes.js'),
        d = n('./src/utils/index.js');
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
      function m(e) {
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
      var f = d.a.Alert(),
        b =
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
          }).API_SERVER + '/api',
        v = new s.b.Entity('invites', {}, { idAttribute: '_id' }),
        h = new s.b.Entity('wait', {}, { idAttribute: '_id' });
      function E(e) {
        var t = e.data,
          n = e.community,
          r = e.skip;
        return { type: l.W, payload: { data: t, community: n, skip: r } };
      }
      function y(e) {
        return { type: l.wb, payload: e };
      }
      function O(e) {
        return { type: l.h, payload: e };
      }
      function _(e) {
        return { type: l.Ib, payload: e };
      }
      function j(e) {
        return { type: l.j, payload: e };
      }
      function w(e) {
        return { type: l.Y, payload: e };
      }
      function g() {
        return (function() {
          var e = u()(
            o.a.mark(function e(t) {
              var n;
              return o.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          t(
                            d.b.request({
                              method: 'GET',
                              endpoint: 'invites',
                              path: '/count'
                            })
                          )
                        );
                      case 3:
                        (n = e.sent), t(w(n)), (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0)), f.alert(e.t0.message);
                      case 10:
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
      function R(e, t, n) {
        return (function() {
          var r = u()(
            o.a.mark(function r(i) {
              var a, c;
              return o.a.wrap(
                function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          i(
                            d.b.request({
                              method: 'GET',
                              query: { skip: e, limit: t },
                              endpoint: 'invites',
                              path: ''
                            })
                          )
                        );
                      case 3:
                        return (
                          (a = r.sent),
                          (c = Object(s.a)({ invites: a }, { invites: [v] })),
                          i(E({ data: c, community: n, skip: e })),
                          r.abrupt('return', !0)
                        );
                      case 9:
                        return (r.prev = 9), (r.t0 = r.catch(0)), r.abrupt('return', !1);
                      case 12:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 9]]
              );
            })
          );
          return function(e) {
            return r.apply(this, arguments);
          };
        })();
      }
      function x(e) {
        return (function() {
          var t = u()(
            o.a.mark(function t(n) {
              var r;
              return o.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          n(
                            d.b.request({
                              method: 'POST',
                              endpoint: 'invites',
                              path: '/',
                              body: JSON.stringify(e)
                            })
                          )
                        );
                      case 3:
                        return (
                          (r = t.sent),
                          n(_(r.invite[0])),
                          n(w(r.count)),
                          t.abrupt('return', r)
                        );
                      case 9:
                        return (
                          (t.prev = 9),
                          (t.t0 = t.catch(0)),
                          f.alert(t.t0.message),
                          t.abrupt('return', !1)
                        );
                      case 13:
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
      function I(e) {
        return (function() {
          var t = u()(
            o.a.mark(function t(n) {
              return o.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.t0 = fetch),
                        (t.t1 = b + '/invites/' + e._id),
                        (t.t2 = m),
                        (t.t3 = { method: 'DELETE' }),
                        (t.next = 6),
                        d.b.reqOptions()
                      );
                    case 6:
                      return (
                        (t.t4 = t.sent),
                        (t.t5 = (0, t.t2)(t.t3, t.t4)),
                        t.abrupt(
                          'return',
                          (0, t.t0)(t.t1, t.t5)
                            .then(d.b.handleErrors)
                            .then(function() {
                              f.alert('removed item'), n(j(e));
                            })
                            .catch(function(e) {
                              f.alert(e.message), console.log('invites error', e);
                            })
                        )
                      );
                    case 9:
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
      }
      function P() {
        return (function() {
          var e = u()(
            o.a.mark(function e(t) {
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = fetch),
                        (e.t1 = b + '/list'),
                        (e.t2 = m),
                        (e.t3 = { method: 'GET' }),
                        (e.next = 6),
                        d.b.reqOptions()
                      );
                    case 6:
                      return (
                        (e.t4 = e.sent),
                        (e.t5 = (0, e.t2)(e.t3, e.t4)),
                        e.abrupt(
                          'return',
                          (0, e.t0)(e.t1, e.t5)
                            .then(d.b.handleErrors)
                            .then(function(e) {
                              return e.json();
                            })
                            .then(function(e) {
                              var n = Object(s.a)({ wait: e }, { wait: [h] });
                              t(y(n));
                            })
                            .catch(function(e) {
                              console.log('invites error', e);
                            })
                        )
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function N(e) {
        return (function() {
          var t = u()(
            o.a.mark(function t(n) {
              return o.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.t0 = fetch),
                        (t.t1 =
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
                          }).API_SERVER + '/api/list/'),
                        (t.t2 = m),
                        (t.t3 = m),
                        (t.t4 = { method: 'PUT' }),
                        (t.next = 7),
                        d.b.reqOptions()
                      );
                    case 7:
                      return (
                        (t.t5 = t.sent),
                        (t.t6 = (0, t.t3)(t.t4, t.t5)),
                        (t.t7 = {}),
                        (t.t8 = { body: JSON.stringify(e) }),
                        (t.t9 = (0, t.t2)(t.t6, t.t7, t.t8)),
                        t.abrupt(
                          'return',
                          (0, t.t0)(t.t1, t.t9)
                            .then(d.b.handleErrors)
                            .then(function() {
                              return f.alert('users have been invited!'), n(O(e)), !0;
                            })
                            .catch(function(e) {
                              return f.alert(e.message), console.log(e), !1;
                            })
                        )
                      );
                    case 13:
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
      }
      function C(e) {
        return u()(
          o.a.mark(function t() {
            return o.a.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.t0 = fetch),
                      (t.t1 =
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
                        }).API_SERVER + '/api/list/'),
                      (t.t2 = m),
                      (t.t3 = m),
                      (t.t4 = { method: 'POST' }),
                      (t.next = 7),
                      d.b.reqOptions()
                    );
                  case 7:
                    return (
                      (t.t5 = t.sent),
                      (t.t6 = (0, t.t3)(t.t4, t.t5)),
                      (t.t7 = {}),
                      (t.t8 = { body: JSON.stringify(e) }),
                      (t.t9 = (0, t.t2)(t.t6, t.t7, t.t8)),
                      t.abrupt(
                        'return',
                        (0, t.t0)(t.t1, t.t9)
                          .then(d.b.handleErrors)
                          .then(function() {
                            return (
                              f.alert("You've been added to the waitlist.", 'success'), !0
                            );
                          })
                          .catch(function(e) {
                            return f.alert(e.message), console.log(e), !1;
                          })
                      )
                    );
                  case 13:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        );
      }
      function S(e) {
        return { type: l.R, payload: e };
      }
      function T(e, t) {
        return function(n) {
          return n(
            d.b.request({
              method: 'GET',
              query: { skip: e, limit: t },
              endpoint: 'invest',
              path: '/downvotes'
            })
          )
            .then(function(e) {
              return n(S(e));
            })
            .catch(function(e) {
              return f.alert(e.message);
            });
        };
      }
      function D(e) {
        return (function() {
          var t = u()(
            o.a.mark(function t(n) {
              return o.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          n(
                            d.b.request({
                              method: 'PUT',
                              endpoint: 'email',
                              path: '/',
                              body: JSON.stringify(e)
                            })
                          )
                        );
                      case 3:
                        return f.alert('Email has been sent'), t.abrupt('return', !0);
                      case 7:
                        return (t.prev = 7), (t.t0 = t.catch(0)), t.abrupt('return', !1);
                      case 10:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 7]]
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function k(e) {
        return (function() {
          var t = u()(
            o.a.mark(function t(n) {
              return o.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          n(
                            d.b.request({
                              method: 'PUT',
                              endpoint: 'email',
                              path: '/save',
                              body: JSON.stringify(e)
                            })
                          )
                        );
                      case 3:
                        return f.alert('Email has been saved'), t.abrupt('return', !0);
                      case 7:
                        return (t.prev = 7), (t.t0 = t.catch(0)), t.abrupt('return', !1);
                      case 10:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 7]]
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function A() {
        return (function() {
          var e = u()(
            o.a.mark(function e(t) {
              var n;
              return o.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          t(
                            d.b.request({
                              method: 'GET',
                              endpoint: 'email',
                              path: '/load'
                            })
                          )
                        );
                      case 3:
                        return (n = e.sent), e.abrupt('return', n);
                      case 7:
                        return (e.prev = 7), (e.t0 = e.catch(0)), e.abrupt('return', !1);
                      case 10:
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
      function B(e) {
        return (function() {
          var t = u()(
            o.a.mark(function t(n) {
              return o.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.t0 = fetch),
                          (t.t1 = b + '/list/' + e._id),
                          (t.t2 = m),
                          (t.t3 = { method: 'DELETE' }),
                          (t.next = 7),
                          d.b.reqOptions()
                        );
                      case 7:
                        return (
                          (t.t4 = t.sent),
                          (t.t5 = (0, t.t2)(t.t3, t.t4)),
                          (t.next = 11),
                          (0, t.t0)(t.t1, t.t5)
                        );
                      case 11:
                        t.sent && n(O([e])), (t.next = 18);
                        break;
                      case 15:
                        (t.prev = 15), (t.t6 = t.catch(0)), f.alert(t.t6.message);
                      case 18:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 15]]
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function F(e) {
        return (function() {
          var t = u()(
            o.a.mark(function t(n) {
              return o.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          n(
                            d.b.request({
                              method: 'POST',
                              endpoint: 'post',
                              path: '/sendPostNotification',
                              body: JSON.stringify(e)
                            })
                          )
                        );
                      case 3:
                        return t.abrupt('return', f.alert('Notification sent!'));
                      case 6:
                        return (t.prev = 6), (t.t0 = t.catch(0)), t.abrupt('return', !1);
                      case 9:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 6]]
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
    },
    './src/modules/invites/web/inviteModal.container.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('./node_modules/@babel/runtime/helpers/extends.js'),
        i = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        o = n.n(a),
        c = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        u = n.n(c),
        s = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        l = n.n(s),
        d = n('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        p = n.n(d),
        m = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        f = n.n(m),
        b = n('../../node_modules/react/index.js'),
        v = n.n(b),
        h = n('../../node_modules/prop-types/index.js'),
        E = n.n(h),
        y = n('../../node_modules/lodash/get.js'),
        O = n.n(y),
        _ = n('./src/modules/admin/admin.actions.js'),
        j = n('../../node_modules/redux/es/redux.js'),
        w = n('../../node_modules/react-redux/es/index.js'),
        g = n('./node_modules/@babel/runtime/regenerator/index.js'),
        R = n.n(g),
        x = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        I = n.n(x),
        P = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        N = n.n(P),
        C = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        S = n.n(C),
        T = n('./src/modules/stats/coinStat.component.js'),
        D = n('./src/modules/styled/uni.js'),
        k = n('./src/styles/index.js'),
        A = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        B = n('./src/modules/navigation/ULink.component.js'),
        F = n('../common/lib/index.js'),
        K = n('./src/utils/text.js'),
        L = n('../../node_modules/react-native-web/dist/exports/Animated/index.js');
      function U(e) {
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
            r = f()(e);
          if (t) {
            var i = f()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return p()(this, n);
        };
      }
      var W = Object(A.b)(D.m).withConfig({
          displayName: 'inviteModalcomponent__ModalDivider',
          componentId: 'xhvi07-0'
        })(['position:relative;margin:0 -', ';'], Object(k.i)(6)),
        q = (function(e) {
          l()(n, e);
          var t = U(n);
          function n(e, r) {
            var i;
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              S()(N()(i), 'animate', function() {
                i.position.setValue(0),
                  (i.color = i.position.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['#7ED321', '#0000ff']
                  })),
                  (i.animation = L.a
                    .timing(i.position, { toValue: 1, duration: 8e3 })
                    .start());
              }),
              S()(
                N()(i),
                'generateInvite',
                (function() {
                  var e = I()(
                    R.a.mark(function e(t) {
                      var n, r, a;
                      return R.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = { invitedBy: i.props.auth.user._id }),
                                t && (n.type = t),
                                (r = i.props.postInviteGeneration),
                                (e.next = 5),
                                i.props.actions.createInvite(n)
                              );
                            case 5:
                              (a = e.sent), r && r(a);
                            case 7:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              S()(N()(i), 'generateInviteUrl', function(e) {
                var t = e.invite,
                  n =
                    window && window.location
                      ? window.location.origin
                      : 'https://relevant.community';
                return ''
                  .concat(n, '/')
                  .concat(t.community, '?invitecode=')
                  .concat(t.code);
              }),
              (i.position = new L.a.Value(0)),
              (i.color = k.b.black),
              i
            );
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props,
                    t = e.auth,
                    n = e.inviteList,
                    r = e.actions,
                    i = n[t.community] || [];
                  if (!n.length) {
                    var a = i.length;
                    r.getInvites(a, 100, t.community);
                  }
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.auth,
                    r = t.community,
                    i = t.count,
                    a = t.inviteList,
                    o = t.invites,
                    c = t.onShare,
                    u = n.user,
                    s = r.userMemberships,
                    l = void 0 === s ? [] : s,
                    d = r.communities,
                    p = Object.keys(d).find(function(e) {
                      return d[e].slug === r.active;
                    }),
                    m = d[p] || {},
                    f = l.find(function(e) {
                      return e.communityId === m._id;
                    }),
                    b = 'admin' === u.role || (f && f.superAdmin),
                    h = '/'.concat(n.community, '?invitecode=').concat(n.user.handle),
                    E =
                      window && window.location
                        ? window.location.origin
                        : 'https://relevant.community',
                    y = ''.concat(E).concat(h),
                    O = (a[n.community] || []).map(function(t) {
                      var n = o[t],
                        r = e.generateInviteUrl({ invite: n }),
                        i = new Date().getTime() - Date.parse(n.createdAt) < 5e3,
                        a = n.redeemed ? k.b.grey : k.b.blue;
                      return (
                        i && (e.animate(), (a = e.color || k.b.black)),
                        v.a.createElement(
                          D.E,
                          { mt: 2, fdirection: 'column', key: t },
                          v.a.createElement(
                            D.E,
                            { fdirection: 'row', justify: 'space-between' },
                            v.a.createElement(
                              D.E,
                              { fdirection: 'row', flex: 1, mr: 1 },
                              v.a.createElement(
                                D.E,
                                { flex: 1 },
                                v.a.createElement(
                                  D.i,
                                  { numberOfLines: 1 },
                                  v.a.createElement(
                                    L.a.Text,
                                    {
                                      onClick: function() {
                                        return Object(K.copyToClipBoard)(r);
                                      },
                                      onPress: function() {
                                        return c({
                                          title: 'Join Relevant',
                                          message: 'Join Relevant',
                                          url: r,
                                          subject: 'Join Relevant'
                                        });
                                      },
                                      style: { color: a, cursor: 'pointer' }
                                    },
                                    r
                                  )
                                )
                              ),
                              v.a.createElement(
                                D.E,
                                { ml: 0.5, alignSelf: 'flex-end' },
                                v.a.createElement(
                                  D.i,
                                  { c: k.b.grey },
                                  'admin' === n.type ? 'mod' : null
                                )
                              )
                            ),
                            v.a.createElement(
                              D.i,
                              { c: n.redeemed ? k.b.grey : k.b.green },
                              n.redeemed ? 'redeemed' : 'available'
                            )
                          ),
                          v.a.createElement(D.m, { pt: 2 })
                        )
                      );
                    }),
                    _ = y;
                  return v.a.createElement(
                    D.E,
                    { display: 'flex', fdirection: 'column' },
                    v.a.createElement(
                      D.E,
                      { mt: 6, display: 'flex', fdirection: 'column' },
                      v.a.createElement(D.x, null, 'Public Invite Link'),
                      v.a.createElement(
                        D.d,
                        { inline: 1, mt: 1 },
                        'You and each new users get',
                        ' ',
                        v.a.createElement(T.a, {
                          size: 2,
                          amount: F.PUBLIC_LINK_REWARD,
                          inline: 1
                        }),
                        ' coin',
                        1 === F.PUBLIC_LINK_REWARD ? '' : 's',
                        ' per signup via your public invite code.'
                      ),
                      v.a.createElement(
                        D.v,
                        {
                          mt: 1,
                          onClick: function() {
                            return Object(K.copyToClipBoard)(_);
                          },
                          c: k.b.blue,
                          onPress: function() {
                            return c({
                              title: 'Join Relevant',
                              message: 'Join Relevant',
                              url: y,
                              subject: 'Join Relevant'
                            });
                          }
                        },
                        y
                      )
                    ),
                    v.a.createElement(D.m, { pt: 6 }),
                    v.a.createElement(
                      D.E,
                      { display: 'flex', fdirection: 'column', mt: 6 },
                      v.a.createElement(
                        D.x,
                        null,
                        'Private Invite: Your have ',
                        i[r.active],
                        ' referral invite',
                        i[r.active] > 1 ? 's' : '',
                        ' left.'
                      ),
                      v.a.createElement(D.e, { mt: 1 }),
                      v.a.createElement(
                        D.d,
                        { inline: 1 },
                        'Share your Reputation with trustworthy friends with your private invite codes. Earn ',
                        v.a.createElement(T.a, {
                          size: 2,
                          amount: F.REFERRAL_REWARD,
                          inline: 1
                        }),
                        ' coin',
                        1 === F.REFERRAL_REWARD ? '' : 's',
                        ' per signup.'
                      )
                    ),
                    v.a.createElement(
                      B.a,
                      {
                        to: '#',
                        onPress: function() {
                          return e.generateInvite();
                        },
                        onClick: function() {
                          return e.generateInvite();
                        },
                        c: k.b.blue
                      },
                      v.a.createElement(D.e, { mt: 1 }),
                      v.a.createElement(
                        D.v,
                        { c: k.b.blue },
                        'Click here to generate a new private link'
                      )
                    ),
                    b
                      ? v.a.createElement(
                          B.a,
                          {
                            to: '#',
                            onPress: function() {
                              return e.generateInvite('admin');
                            },
                            onClick: function() {
                              return e.generateInvite('admin');
                            },
                            c: k.b.blue
                          },
                          v.a.createElement(D.e, { mt: 1 }),
                          v.a.createElement(
                            D.v,
                            { mt: 1, c: k.b.blue },
                            'Click here to generate moderator invite link'
                          )
                        )
                      : null,
                    v.a.createElement(W, { pt: 6 }),
                    v.a.createElement(
                      D.E,
                      { mt: 6, fdirection: 'column' },
                      v.a.createElement(D.q, null, 'Private Invites'),
                      v.a.createElement(
                        D.d,
                        { inline: 1, fdirection: 'row' },
                        'Here’s how many coins you’ve made from invites so far:',
                        ' ',
                        v.a.createElement(T.a, {
                          size: 2,
                          amount: u.referralTokens,
                          inline: 1
                        }),
                        ' coin',
                        1 === u.referralTokens ? '' : 's',
                        ' (max amount is ',
                        F.MAX_AIRDROP,
                        ')'
                      ),
                      v.a.createElement(D.E, { mt: 4, fdirection: 'column' }, O)
                    )
                  );
                }
              }
            ]),
            n
          );
        })(b.Component);
      q.propTypes = {
        inviteList: E.a.object,
        invites: E.a.object,
        auth: E.a.object,
        community: E.a.object,
        actions: E.a.object,
        count: E.a.object,
        onShare: E.a.func,
        postInviteGeneration: E.a.func
      };
      var V = q,
        J = n('./src/utils/alert.js');
      function Y(e) {
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
            r = f()(e);
          if (t) {
            var i = f()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return p()(this, n);
        };
      }
      var G = (function(e) {
        l()(n, e);
        var t = Y(n);
        function n() {
          return o()(this, n), t.apply(this, arguments);
        }
        return (
          u()(n, [
            {
              key: 'componentDidMount',
              value: function() {
                this.props.auth.community && this.props.actions.getInviteCount();
              }
            },
            {
              key: 'postInviteGeneration',
              value: function(e) {
                e && Object(J.Alert)().alert('Generated new invite link', 'success');
              }
            },
            {
              key: 'handleShare',
              value: function(e) {
                Object(K.copyToClipBoard)(e.url);
              }
            },
            {
              key: 'render',
              value: function() {
                return v.a.createElement(
                  V,
                  i()({}, this.props, {
                    postInviteGeneration: this.postInviteGeneration,
                    onShare: this.handleShare
                  })
                );
              }
            }
          ]),
          n
        );
      })(b.Component);
      G.propTypes = { actions: E.a.object, close: E.a.func, auth: E.a.object };
      t.default = Object(w.c)(
        function(e) {
          return {
            auth: O()(e, 'auth', {}),
            community: O()(e, 'community', {}),
            count: e.admin.count,
            invites: e.admin.invites,
            inviteList: e.admin.inviteList,
            initialValues: { invitedByString: O()(e, 'auth.user.name', '') }
          };
        },
        function(e) {
          return {
            actions: Object(j.bindActionCreators)(
              {
                createInvite: _.createInvite,
                getInviteCount: _.getInviteCount,
                getInvites: _.getInvites
              },
              e
            )
          };
        }
      )(G);
    },
    './src/modules/stats/coinStat.component.js': function(e, t, n) {
      'use strict';
      var r = n('./node_modules/@babel/runtime/helpers/extends.js'),
        i = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        o = n.n(a),
        c = n('../../node_modules/react/index.js'),
        u = n.n(c),
        s = n('../../node_modules/prop-types/index.js'),
        l = n.n(s),
        d = u.a.createContext({ wallet: null }),
        p = n('./src/utils/numbers.js'),
        m = n('./src/utils/propValidation.js'),
        f = n('./src/styles/index.js'),
        b = n('./src/modules/styled/uni.js'),
        v = n('./src/modules/wallet/price.context.js'),
        h = n('./public/img/relevantcoin.png');
      function E(e) {
        var t,
          n = e.user,
          r = e.isOwner,
          a = e.wallet,
          c = e.size,
          s = e.amount,
          l = e.mr,
          d = e.align,
          m = e.noNumber,
          E = e.secondary,
          y = e.fs,
          O = e.lh,
          _ = e.inline,
          j = e.c,
          w = e.spaceBetween,
          g = e.showPrice,
          R = o()(e, [
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
        'number' == typeof s
          ? (t = s)
          : n && ((t = n.balance), n.tokenBalance && (t += n.tokenBalance));
        var x = Object(v.usePrice)(t);
        r &&
          n.ethAddress &&
          n.ethAddress[0] &&
          a.connectedBalance &&
          (t = a.connectedBalance + n.balance);
        var I = 'number' == typeof c ? c : 3,
          P = E ? b.x : b.w,
          N = 'center' === d ? 0 : Object(f.i)(-1, 'px'),
          C = _ ? b.B : b.t,
          S = 0;
        return (
          !_ && I && (S = I / 4),
          !_ && w && (S = w),
          u.a.createElement(
            C,
            i()({}, R, {
              inline: _ ? 1 : 0,
              mr: 'number' == typeof l ? l : _ ? 0 : 1.5,
              align: d
            }),
            u.a.createElement(b.s, {
              inline: _ ? 1 : 0,
              source: h,
              h: 1 * I,
              w: 1.05 * I,
              style: { bottom: N },
              resizeMode: 'contain'
            }),
            m
              ? null
              : u.a.createElement(
                  P,
                  { ml: S, fs: y, lh: O, inline: _ ? 1 : 0, c: j },
                  _ ? ' ' : '',
                  Object(p.abbreviateNumber)(t),
                  g ? x : ''
                )
          )
        );
      }
      E.propTypes = {
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
      t.a = Object(c.memo)(function(e) {
        return u.a.createElement(d.Consumer, null, function(t) {
          return u.a.createElement(E, i()({ wallet: t }, e));
        });
      });
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return j;
        }),
        n.d(t, 'exchangeLink', function() {
          return w;
        }),
        n.d(t, 'tokenEnabled', function() {
          return g;
        }),
        n.d(t, 'usePrice', function() {
          return R;
        }),
        n.d(t, 'default', function() {
          return x;
        });
      var r = n('./node_modules/@babel/runtime/regenerator/index.js'),
        i = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(a),
        c = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = n.n(c),
        s = n('./node_modules/@babel/runtime/helpers/slicedToArray.js'),
        l = n.n(s),
        d = n('../../node_modules/react/index.js'),
        p = n.n(d),
        m = n('../../node_modules/prop-types/index.js'),
        f = n.n(m),
        b = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        v = n('./src/utils/numbers.js');
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
      function E(e) {
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
      var y = Object({
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
        }),
        O = y.TOKEN_ADDRESS,
        _ = y.DISABLE_PRICE,
        j = p.a.createContext(0);
      function w() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(O);
      }
      function g() {
        return !!O;
      }
      function R(e, t) {
        var n = Object(d.useContext)(j).price;
        return n
          ? 'number' === t
            ? Object(v.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(v.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function x(e) {
        var t = e.children,
          n = Object(d.useReducer)(I, { loading: !1, error: !1, data: null, refresh: 0 }),
          r = l()(n, 2),
          a = r[0],
          o = r[1];
        Object(d.useEffect)(
          function() {
            var e = !1;
            return (
              (function() {
                var t = u()(
                  i.a.mark(function t() {
                    var n, r, a;
                    return i.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((o({ type: 'FETCH_PRICE_INIT' }), O && !_)) {
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
                              (a = t.sent),
                                e ||
                                  o({
                                    type: 'FETCH_PRICE_SUCCESS',
                                    payload: E(E({}, n), {}, { ethPrice: a.bid })
                                  }),
                                (t.next = 19);
                              break;
                            case 16:
                              (t.prev = 16),
                                (t.t0 = t.catch(3)),
                                e || o({ type: 'FETCH_PRICE_ERROR', payload: t.t0 });
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
                o({ type: 'REFRESH_PRICE' });
              }, 6e4),
              function() {
                e = !0;
              }
            );
          },
          [a.refresh]
        );
        var c = (function(e) {
            if (!e) return null;
            var t = e.ethReserve,
              n = e.tokenReserve,
              r = e.ethPrice;
            if (!t || !n) return null;
            var i = t.amount.div(n.amount).times(r);
            return parseFloat(i.toString());
          })(a.data),
          s = '($'.concat(Object(v.abbreviateNumber)(c, 2), ')');
        return p.a.createElement(j.Provider, { value: { price: c, priceString: s } }, t);
      }
      x.propTypes = { children: f.a.node };
      var I = function(e, t) {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return E(E({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return E(E({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return E(E({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return E(E({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/utils/propValidation.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return o;
      }),
        n.d(t, 'a', function() {
          return c;
        }),
        n.d(t, 'b', function() {
          return u;
        });
      var r = n('../../node_modules/prop-types/index.js'),
        i = n.n(r),
        a = n('../../node_modules/react-is/index.js'),
        o = i.a.shape({
          handle: i.a.string,
          balance: i.a.number,
          image: i.a.string,
          name: i.a.string
        }),
        c =
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
          i.a.shape({ isAuthenticated: i.a.bool, user: o, community: i.a.string }));
      function u(e, t, n) {
        if (e[t] && !Object(a.isValidElementType)(e[t]))
          return new Error(
            "Invalid prop '"
              .concat(t, "' supplied to '")
              .concat(n, "': the prop is not a valid React component")
          );
      }
    }
  }
]);
//# sourceMappingURL=invites-web-inviteModal-container.bundle.js.map
