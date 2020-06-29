(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [42, 59],
  {
    './src/modules/admin/admin.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'setInvites', function() {
          return y;
        }),
        n.d(t, 'setWaitlist', function() {
          return E;
        }),
        n.d(t, 'deleteWaitlistUsers', function() {
          return j;
        }),
        n.d(t, 'updateInvite', function() {
          return g;
        }),
        n.d(t, 'destroyInvite', function() {
          return w;
        }),
        n.d(t, 'setInviteCount', function() {
          return O;
        }),
        n.d(t, 'getInviteCount', function() {
          return _;
        }),
        n.d(t, 'getInvites', function() {
          return x;
        }),
        n.d(t, 'createInvite', function() {
          return R;
        }),
        n.d(t, 'destroy', function() {
          return P;
        }),
        n.d(t, 'getWaitlist', function() {
          return I;
        }),
        n.d(t, 'inviteFromWaitlist', function() {
          return k;
        }),
        n.d(t, 'signupForMailingList', function() {
          return C;
        }),
        n.d(t, 'setDownvotes', function() {
          return T;
        }),
        n.d(t, 'getDownvotes', function() {
          return S;
        }),
        n.d(t, 'sendEmail', function() {
          return D;
        }),
        n.d(t, 'saveEmail', function() {
          return A;
        }),
        n.d(t, 'loadEmail', function() {
          return N;
        }),
        n.d(t, 'deleteWaitlistUser', function() {
          return B;
        }),
        n.d(t, 'sendPostNotification', function() {
          return L;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = n.n(r),
        a = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        o = n.n(a),
        c = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = n.n(c),
        s = n('../../node_modules/normalizr/dist/normalizr.es.js'),
        l = n('./src/core/actionTypes.js'),
        p = n('./src/utils/index.js');
      function d(e, t) {
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
            ? d(Object(n), !0).forEach(function(t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var f = p.a.Alert(),
        b = 'http://localhost:3000/api',
        v = new s.b.Entity('invites', {}, { idAttribute: '_id' }),
        h = new s.b.Entity('wait', {}, { idAttribute: '_id' });
      function y(e) {
        var t = e.data,
          n = e.community,
          r = e.skip;
        return { type: l.W, payload: { data: t, community: n, skip: r } };
      }
      function E(e) {
        return { type: l.wb, payload: e };
      }
      function j(e) {
        return { type: l.h, payload: e };
      }
      function g(e) {
        return { type: l.Ib, payload: e };
      }
      function w(e) {
        return { type: l.j, payload: e };
      }
      function O(e) {
        return { type: l.Y, payload: e };
      }
      function _() {
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
                            p.b.request({
                              method: 'GET',
                              endpoint: 'invites',
                              path: '/count'
                            })
                          )
                        );
                      case 3:
                        (n = e.sent), t(O(n)), (e.next = 10);
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
      function x(e, t, n) {
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
                            p.b.request({
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
                          i(y({ data: c, community: n, skip: e })),
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
      function R(e) {
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
                            p.b.request({
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
                          n(g(r.invite[0])),
                          n(O(r.count)),
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
      function P(e) {
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
                        p.b.reqOptions()
                      );
                    case 6:
                      return (
                        (t.t4 = t.sent),
                        (t.t5 = (0, t.t2)(t.t3, t.t4)),
                        t.abrupt(
                          'return',
                          (0, t.t0)(t.t1, t.t5)
                            .then(p.b.handleErrors)
                            .then(function() {
                              f.alert('removed item'), n(w(e));
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
      function I() {
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
                        p.b.reqOptions()
                      );
                    case 6:
                      return (
                        (e.t4 = e.sent),
                        (e.t5 = (0, e.t2)(e.t3, e.t4)),
                        e.abrupt(
                          'return',
                          (0, e.t0)(e.t1, e.t5)
                            .then(p.b.handleErrors)
                            .then(function(e) {
                              return e.json();
                            })
                            .then(function(e) {
                              var n = Object(s.a)({ wait: e }, { wait: [h] });
                              t(E(n));
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
      function k(e) {
        return (function() {
          var t = u()(
            o.a.mark(function t(n) {
              return o.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.t0 = fetch),
                        (t.t1 = 'http://localhost:3000/api/list/'),
                        (t.t2 = m),
                        (t.t3 = m),
                        (t.t4 = { method: 'PUT' }),
                        (t.next = 7),
                        p.b.reqOptions()
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
                            .then(p.b.handleErrors)
                            .then(function() {
                              return f.alert('users have been invited!'), n(j(e)), !0;
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
                      (t.t1 = 'http://localhost:3000/api/list/'),
                      (t.t2 = m),
                      (t.t3 = m),
                      (t.t4 = { method: 'POST' }),
                      (t.next = 7),
                      p.b.reqOptions()
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
                          .then(p.b.handleErrors)
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
      function T(e) {
        return { type: l.R, payload: e };
      }
      function S(e, t) {
        return function(n) {
          return n(
            p.b.request({
              method: 'GET',
              query: { skip: e, limit: t },
              endpoint: 'invest',
              path: '/downvotes'
            })
          )
            .then(function(e) {
              return n(T(e));
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
                            p.b.request({
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
      function A(e) {
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
                            p.b.request({
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
      function N() {
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
                            p.b.request({
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
                          p.b.reqOptions()
                        );
                      case 7:
                        return (
                          (t.t4 = t.sent),
                          (t.t5 = (0, t.t2)(t.t3, t.t4)),
                          (t.next = 11),
                          (0, t.t0)(t.t1, t.t5)
                        );
                      case 11:
                        t.sent && n(j([e])), (t.next = 18);
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
      function L(e) {
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
                            p.b.request({
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
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        i = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        o = n.n(a),
        c = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        u = n.n(c),
        s = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        l = n.n(s),
        p = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        d = n.n(p),
        m = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        f = n.n(m),
        b = n('../../node_modules/react/index.js'),
        v = n.n(b),
        h = n('../../node_modules/prop-types/index.js'),
        y = n.n(h),
        E = n('../../node_modules/lodash/get.js'),
        j = n.n(E),
        g = n('./src/modules/admin/admin.actions.js'),
        w = n('../../node_modules/redux/es/redux.js'),
        O = n('../../node_modules/react-redux/es/index.js'),
        _ = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        x = n.n(_),
        R = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        P = n.n(R),
        I = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        k = n.n(I),
        C = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        T = n.n(C),
        S = n('./src/modules/stats/coinStat.component.js'),
        D = n('./src/modules/styled/uni.js'),
        A = n('./src/styles/index.js'),
        N = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        B = n('./src/modules/navigation/ULink.component.js'),
        L = n('../common/lib/index.js'),
        F = n('./src/utils/text.js'),
        q = n('../../node_modules/react-native-web/dist/exports/Animated/index.js');
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
          return d()(this, n);
        };
      }
      var W = Object(N.b)(D.m).withConfig({
          displayName: 'inviteModalcomponent__ModalDivider',
          componentId: 'xhvi07-0'
        })(['position:relative;margin:0 -', ';'], Object(A.i)(6)),
        G = (function(e) {
          l()(n, e);
          var t = U(n);
          function n(e, r) {
            var i;
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              T()(k()(i), 'animate', function() {
                i.position.setValue(0),
                  (i.color = i.position.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['#7ED321', '#0000ff']
                  })),
                  (i.animation = q.a
                    .timing(i.position, { toValue: 1, duration: 8e3 })
                    .start());
              }),
              T()(
                k()(i),
                'generateInvite',
                (function() {
                  var e = P()(
                    x.a.mark(function e(t) {
                      var n, r, a;
                      return x.a.wrap(function(e) {
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
              T()(k()(i), 'generateInviteUrl', function(e) {
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
              (i.position = new q.a.Value(0)),
              (i.color = A.b.black),
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
                    p = r.communities,
                    d = Object.keys(p).find(function(e) {
                      return p[e].slug === r.active;
                    }),
                    m = p[d] || {},
                    f = l.find(function(e) {
                      return e.communityId === m._id;
                    }),
                    b = 'admin' === u.role || (f && f.superAdmin),
                    h = '/'.concat(n.community, '?invitecode=').concat(n.user.handle),
                    y =
                      window && window.location
                        ? window.location.origin
                        : 'https://relevant.community',
                    E = ''.concat(y).concat(h),
                    j = (a[n.community] || []).map(function(t) {
                      var n = o[t],
                        r = e.generateInviteUrl({ invite: n }),
                        i = new Date().getTime() - Date.parse(n.createdAt) < 5e3,
                        a = n.redeemed ? A.b.grey : A.b.blue;
                      return (
                        i && (e.animate(), (a = e.color || A.b.black)),
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
                                    q.a.Text,
                                    {
                                      onClick: function() {
                                        return Object(F.copyToClipBoard)(r);
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
                                  { c: A.b.grey },
                                  'admin' === n.type ? 'mod' : null
                                )
                              )
                            ),
                            v.a.createElement(
                              D.i,
                              { c: n.redeemed ? A.b.grey : A.b.green },
                              n.redeemed ? 'redeemed' : 'available'
                            )
                          ),
                          v.a.createElement(D.m, { pt: 2 })
                        )
                      );
                    }),
                    g = E;
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
                        v.a.createElement(S.a, {
                          size: 2,
                          amount: L.PUBLIC_LINK_REWARD,
                          inline: 1
                        }),
                        ' coin',
                        1 === L.PUBLIC_LINK_REWARD ? '' : 's',
                        ' per signup via your public invite code.'
                      ),
                      v.a.createElement(
                        D.v,
                        {
                          mt: 1,
                          onClick: function() {
                            return Object(F.copyToClipBoard)(g);
                          },
                          c: A.b.blue,
                          onPress: function() {
                            return c({
                              title: 'Join Relevant',
                              message: 'Join Relevant',
                              url: E,
                              subject: 'Join Relevant'
                            });
                          }
                        },
                        E
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
                        v.a.createElement(S.a, {
                          size: 2,
                          amount: L.REFERRAL_REWARD,
                          inline: 1
                        }),
                        ' coin',
                        1 === L.REFERRAL_REWARD ? '' : 's',
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
                        c: A.b.blue
                      },
                      v.a.createElement(D.e, { mt: 1 }),
                      v.a.createElement(
                        D.v,
                        { c: A.b.blue },
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
                            c: A.b.blue
                          },
                          v.a.createElement(D.e, { mt: 1 }),
                          v.a.createElement(
                            D.v,
                            { mt: 1, c: A.b.blue },
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
                        v.a.createElement(S.a, {
                          size: 2,
                          amount: u.referralTokens,
                          inline: 1
                        }),
                        ' coin',
                        1 === u.referralTokens ? '' : 's',
                        ' (max amount is ',
                        L.MAX_AIRDROP,
                        ')'
                      ),
                      v.a.createElement(D.E, { mt: 4, fdirection: 'column' }, j)
                    )
                  );
                }
              }
            ]),
            n
          );
        })(b.Component);
      G.propTypes = {
        inviteList: y.a.object,
        invites: y.a.object,
        auth: y.a.object,
        community: y.a.object,
        actions: y.a.object,
        count: y.a.object,
        onShare: y.a.func,
        postInviteGeneration: y.a.func
      };
      var J = G,
        K = n('./src/utils/alert.js');
      function V(e) {
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
          return d()(this, n);
        };
      }
      var H = (function(e) {
        l()(n, e);
        var t = V(n);
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
                e && Object(K.Alert)().alert('Generated new invite link', 'success');
              }
            },
            {
              key: 'handleShare',
              value: function(e) {
                Object(F.copyToClipBoard)(e.url);
              }
            },
            {
              key: 'render',
              value: function() {
                return v.a.createElement(
                  J,
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
      H.propTypes = { actions: y.a.object, close: y.a.func, auth: y.a.object };
      t.default = Object(O.c)(
        function(e) {
          return {
            auth: j()(e, 'auth', {}),
            community: j()(e, 'community', {}),
            count: e.admin.count,
            invites: e.admin.invites,
            inviteList: e.admin.inviteList,
            initialValues: { invitedByString: j()(e, 'auth.user.name', '') }
          };
        },
        function(e) {
          return {
            actions: Object(w.bindActionCreators)(
              {
                createInvite: g.createInvite,
                getInviteCount: g.getInviteCount,
                getInvites: g.getInvites
              },
              e
            )
          };
        }
      )(H);
    },
    './src/modules/stats/coinStat.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        i = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        o = n.n(a),
        c = n('../../node_modules/react/index.js'),
        u = n.n(c),
        s = n('../../node_modules/prop-types/index.js'),
        l = n.n(s),
        p = u.a.createContext({ wallet: null }),
        d = n('./src/utils/numbers.js'),
        m = n('./src/utils/propValidation.js'),
        f = n('./src/styles/index.js'),
        b = n('./src/modules/styled/uni.js'),
        v = n('./src/modules/wallet/price.context.js'),
        h = n('./public/img/relevantcoin.png');
      function y(e) {
        var t,
          n = e.user,
          r = e.isOwner,
          a = e.wallet,
          c = e.size,
          s = e.amount,
          l = e.mr,
          p = e.align,
          m = e.noNumber,
          y = e.secondary,
          E = e.fs,
          j = e.lh,
          g = e.inline,
          w = e.c,
          O = e.spaceBetween,
          _ = e.showPrice,
          x = o()(e, [
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
        var R = Object(v.usePrice)(t);
        r &&
          n.ethAddress &&
          n.ethAddress[0] &&
          a.connectedBalance &&
          (t = a.connectedBalance + n.balance);
        var P = 'number' == typeof c ? c : 3,
          I = y ? b.x : b.w,
          k = 'center' === p ? 0 : Object(f.i)(-1, 'px'),
          C = g ? b.B : b.t,
          T = 0;
        return (
          !g && P && (T = P / 4),
          !g && O && (T = O),
          u.a.createElement(
            C,
            i()({}, x, {
              inline: g ? 1 : 0,
              mr: 'number' == typeof l ? l : g ? 0 : 1.5,
              align: p
            }),
            u.a.createElement(b.s, {
              inline: g ? 1 : 0,
              source: h,
              h: 1 * P,
              w: 1.05 * P,
              style: { bottom: k },
              resizeMode: 'contain'
            }),
            m
              ? null
              : u.a.createElement(
                  I,
                  { ml: T, fs: E, lh: j, inline: g ? 1 : 0, c: w },
                  g ? ' ' : '',
                  Object(d.abbreviateNumber)(t),
                  _ ? R : ''
                )
          )
        );
      }
      y.propTypes = {
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
        return u.a.createElement(p.Consumer, null, function(t) {
          return u.a.createElement(y, i()({ wallet: t }, e));
        });
      });
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return w;
        }),
        n.d(t, 'exchangeLink', function() {
          return O;
        }),
        n.d(t, 'tokenEnabled', function() {
          return _;
        }),
        n.d(t, 'usePrice', function() {
          return x;
        }),
        n.d(t, 'default', function() {
          return R;
        });
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        i = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(a),
        c = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = n.n(c),
        s = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        l = n.n(s),
        p = n('../../node_modules/react/index.js'),
        d = n.n(p),
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
      var E = Object({
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
        j = E.TOKEN_ADDRESS,
        g = E.DISABLE_PRICE,
        w = d.a.createContext(0);
      function O() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(j);
      }
      function _() {
        return !!j;
      }
      function x(e, t) {
        var n = Object(p.useContext)(w).price;
        return n
          ? 'number' === t
            ? Object(v.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(v.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function R(e) {
        var t = e.children,
          n = Object(p.useReducer)(P, { loading: !1, error: !1, data: null, refresh: 0 }),
          r = l()(n, 2),
          a = r[0],
          o = r[1];
        Object(p.useEffect)(
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
                              if ((o({ type: 'FETCH_PRICE_INIT' }), j && !g)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt('return');
                            case 3:
                              return (
                                (t.prev = 3), (t.next = 6), Object(b.getTokenReserves)(j)
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
                                    payload: y(y({}, n), {}, { ethPrice: a.bid })
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
        return d.a.createElement(w.Provider, { value: { price: c, priceString: s } }, t);
      }
      R.propTypes = { children: f.a.node };
      var P = function(e, t) {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return y(y({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return y(y({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return y(y({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return y(y({}, e), {}, { loading: !1, error: t.payload });
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