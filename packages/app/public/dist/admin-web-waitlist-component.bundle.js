(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [21],
  {
    './src/modules/admin/admin.actions.js': function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'setInvites', function() {
          return y;
        }),
        n.d(e, 'setWaitlist', function() {
          return E;
        }),
        n.d(e, 'deleteWaitlistUsers', function() {
          return O;
        }),
        n.d(e, 'updateInvite', function() {
          return w;
        }),
        n.d(e, 'destroyInvite', function() {
          return _;
        }),
        n.d(e, 'setInviteCount', function() {
          return j;
        }),
        n.d(e, 'getInviteCount', function() {
          return N;
        }),
        n.d(e, 'getInvites', function() {
          return x;
        }),
        n.d(e, 'createInvite', function() {
          return g;
        }),
        n.d(e, 'destroy', function() {
          return P;
        }),
        n.d(e, 'getWaitlist', function() {
          return R;
        }),
        n.d(e, 'inviteFromWaitlist', function() {
          return S;
        }),
        n.d(e, 'signupForMailingList', function() {
          return D;
        }),
        n.d(e, 'setDownvotes', function() {
          return I;
        }),
        n.d(e, 'getDownvotes', function() {
          return T;
        }),
        n.d(e, 'sendEmail', function() {
          return k;
        }),
        n.d(e, 'saveEmail', function() {
          return C;
        }),
        n.d(e, 'loadEmail', function() {
          return A;
        }),
        n.d(e, 'deleteWaitlistUser', function() {
          return B;
        }),
        n.d(e, 'sendPostNotification', function() {
          return F;
        });
      var r = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(r),
        i = n('./node_modules/@babel/runtime/regenerator/index.js'),
        u = n.n(i),
        s = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(s),
        c = n('../../node_modules/normalizr/dist/normalizr.es.js'),
        l = n('./src/core/actionTypes.js'),
        p = n('./src/utils/index.js');
      function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(n), !0).forEach(function(e) {
                a()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var m = p.a.Alert(),
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
        h = new c.b.Entity('invites', {}, { idAttribute: '_id' }),
        v = new c.b.Entity('wait', {}, { idAttribute: '_id' });
      function y(t) {
        var e = t.data,
          n = t.community,
          r = t.skip;
        return { type: l.W, payload: { data: e, community: n, skip: r } };
      }
      function E(t) {
        return { type: l.wb, payload: t };
      }
      function O(t) {
        return { type: l.h, payload: t };
      }
      function w(t) {
        return { type: l.Ib, payload: t };
      }
      function _(t) {
        return { type: l.j, payload: t };
      }
      function j(t) {
        return { type: l.Y, payload: t };
      }
      function N() {
        return (function() {
          var t = o()(
            u.a.mark(function t(e) {
              var n;
              return u.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          e(
                            p.b.request({
                              method: 'GET',
                              endpoint: 'invites',
                              path: '/count'
                            })
                          )
                        );
                      case 3:
                        (n = t.sent), e(j(n)), (t.next = 10);
                        break;
                      case 7:
                        (t.prev = 7), (t.t0 = t.catch(0)), m.alert(t.t0.message);
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
      function x(t, e, n) {
        return (function() {
          var r = o()(
            u.a.mark(function r(a) {
              var i, s;
              return u.a.wrap(
                function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          a(
                            p.b.request({
                              method: 'GET',
                              query: { skip: t, limit: e },
                              endpoint: 'invites',
                              path: ''
                            })
                          )
                        );
                      case 3:
                        return (
                          (i = r.sent),
                          (s = Object(c.a)({ invites: i }, { invites: [h] })),
                          a(y({ data: s, community: n, skip: t })),
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
          return function(t) {
            return r.apply(this, arguments);
          };
        })();
      }
      function g(t) {
        return (function() {
          var e = o()(
            u.a.mark(function e(n) {
              var r;
              return u.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          n(
                            p.b.request({
                              method: 'POST',
                              endpoint: 'invites',
                              path: '/',
                              body: JSON.stringify(t)
                            })
                          )
                        );
                      case 3:
                        return (
                          (r = e.sent),
                          n(w(r.invite[0])),
                          n(j(r.count)),
                          e.abrupt('return', r)
                        );
                      case 9:
                        return (
                          (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          m.alert(e.t0.message),
                          e.abrupt('return', !1)
                        );
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function P(t) {
        return (function() {
          var e = o()(
            u.a.mark(function e(n) {
              return u.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = fetch),
                        (e.t1 = b + '/invites/' + t._id),
                        (e.t2 = f),
                        (e.t3 = { method: 'DELETE' }),
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
                            .then(function() {
                              m.alert('removed item'), n(_(t));
                            })
                            .catch(function(t) {
                              m.alert(t.message), console.log('invites error', t);
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
      function R() {
        return (function() {
          var t = o()(
            u.a.mark(function t(e) {
              return u.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.t0 = fetch),
                        (t.t1 = b + '/list'),
                        (t.t2 = f),
                        (t.t3 = { method: 'GET' }),
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
                            .then(function(t) {
                              return t.json();
                            })
                            .then(function(t) {
                              var n = Object(c.a)({ wait: t }, { wait: [v] });
                              e(E(n));
                            })
                            .catch(function(t) {
                              console.log('invites error', t);
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
      function S(t) {
        return (function() {
          var e = o()(
            u.a.mark(function e(n) {
              return u.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = fetch),
                        (e.t1 =
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
                        (e.t2 = f),
                        (e.t3 = f),
                        (e.t4 = { method: 'PUT' }),
                        (e.next = 7),
                        p.b.reqOptions()
                      );
                    case 7:
                      return (
                        (e.t5 = e.sent),
                        (e.t6 = (0, e.t3)(e.t4, e.t5)),
                        (e.t7 = {}),
                        (e.t8 = { body: JSON.stringify(t) }),
                        (e.t9 = (0, e.t2)(e.t6, e.t7, e.t8)),
                        e.abrupt(
                          'return',
                          (0, e.t0)(e.t1, e.t9)
                            .then(p.b.handleErrors)
                            .then(function() {
                              return m.alert('users have been invited!'), n(O(t)), !0;
                            })
                            .catch(function(t) {
                              return m.alert(t.message), console.log(t), !1;
                            })
                        )
                      );
                    case 13:
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
      function D(t) {
        return o()(
          u.a.mark(function e() {
            return u.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.t0 = fetch),
                      (e.t1 =
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
                      (e.t2 = f),
                      (e.t3 = f),
                      (e.t4 = { method: 'POST' }),
                      (e.next = 7),
                      p.b.reqOptions()
                    );
                  case 7:
                    return (
                      (e.t5 = e.sent),
                      (e.t6 = (0, e.t3)(e.t4, e.t5)),
                      (e.t7 = {}),
                      (e.t8 = { body: JSON.stringify(t) }),
                      (e.t9 = (0, e.t2)(e.t6, e.t7, e.t8)),
                      e.abrupt(
                        'return',
                        (0, e.t0)(e.t1, e.t9)
                          .then(p.b.handleErrors)
                          .then(function() {
                            return (
                              m.alert("You've been added to the waitlist.", 'success'), !0
                            );
                          })
                          .catch(function(t) {
                            return m.alert(t.message), console.log(t), !1;
                          })
                      )
                    );
                  case 13:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
      }
      function I(t) {
        return { type: l.R, payload: t };
      }
      function T(t, e) {
        return function(n) {
          return n(
            p.b.request({
              method: 'GET',
              query: { skip: t, limit: e },
              endpoint: 'invest',
              path: '/downvotes'
            })
          )
            .then(function(t) {
              return n(I(t));
            })
            .catch(function(t) {
              return m.alert(t.message);
            });
        };
      }
      function k(t) {
        return (function() {
          var e = o()(
            u.a.mark(function e(n) {
              return u.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          n(
                            p.b.request({
                              method: 'PUT',
                              endpoint: 'email',
                              path: '/',
                              body: JSON.stringify(t)
                            })
                          )
                        );
                      case 3:
                        return m.alert('Email has been sent'), e.abrupt('return', !0);
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
      function C(t) {
        return (function() {
          var e = o()(
            u.a.mark(function e(n) {
              return u.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          n(
                            p.b.request({
                              method: 'PUT',
                              endpoint: 'email',
                              path: '/save',
                              body: JSON.stringify(t)
                            })
                          )
                        );
                      case 3:
                        return m.alert('Email has been saved'), e.abrupt('return', !0);
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
      function A() {
        return (function() {
          var t = o()(
            u.a.mark(function t(e) {
              var n;
              return u.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          e(
                            p.b.request({
                              method: 'GET',
                              endpoint: 'email',
                              path: '/load'
                            })
                          )
                        );
                      case 3:
                        return (n = t.sent), t.abrupt('return', n);
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
      function B(t) {
        return (function() {
          var e = o()(
            u.a.mark(function e(n) {
              return u.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.t0 = fetch),
                          (e.t1 = b + '/list/' + t._id),
                          (e.t2 = f),
                          (e.t3 = { method: 'DELETE' }),
                          (e.next = 7),
                          p.b.reqOptions()
                        );
                      case 7:
                        return (
                          (e.t4 = e.sent),
                          (e.t5 = (0, e.t2)(e.t3, e.t4)),
                          (e.next = 11),
                          (0, e.t0)(e.t1, e.t5)
                        );
                      case 11:
                        e.sent && n(O([t])), (e.next = 18);
                        break;
                      case 15:
                        (e.prev = 15), (e.t6 = e.catch(0)), m.alert(e.t6.message);
                      case 18:
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
      function F(t) {
        return (function() {
          var e = o()(
            u.a.mark(function e(n) {
              return u.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          n(
                            p.b.request({
                              method: 'POST',
                              endpoint: 'post',
                              path: '/sendPostNotification',
                              body: JSON.stringify(t)
                            })
                          )
                        );
                      case 3:
                        return e.abrupt('return', m.alert('Notification sent!'));
                      case 6:
                        return (e.prev = 6), (e.t0 = e.catch(0)), e.abrupt('return', !1);
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 6]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
    },
    './src/modules/admin/web/admin.css': function(t, e, n) {},
    './src/modules/admin/web/waitlist.component.js': function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        a = n.n(r),
        i = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        u = n.n(i),
        s = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        o = n.n(s),
        c = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        l = n.n(c),
        p = n('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        d = n.n(p),
        f = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        m = n.n(f),
        b = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        h = n.n(b),
        v = n('../../node_modules/react/index.js'),
        y = n.n(v),
        E = n('../../node_modules/prop-types/index.js'),
        O = n.n(E),
        w = n('../../node_modules/redux/es/redux.js'),
        _ = n('../../node_modules/react-redux/es/index.js'),
        j = n('./src/modules/admin/admin.actions.js'),
        N = n('./src/modules/ui/web/ShadowButton.js');
      function x(t) {
        var e = (function() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function() {
          var n,
            r = m()(t);
          if (e) {
            var a = m()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      n('./src/modules/admin/web/admin.css');
      var g = (function(t) {
        l()(n, t);
        var e = x(n);
        function n(t) {
          var r;
          return (
            a()(this, n),
            ((r = e.call(this, t)).handleChange = r.handleChange.bind(o()(r))),
            (r.sendInvites = r.sendInvites.bind(o()(r))),
            (r.state = { number: 1 }),
            r
          );
        }
        return (
          u()(n, [
            {
              key: 'componentDidMount',
              value: function() {
                this.props.actions.getWaitlist();
              }
            },
            {
              key: 'destroy',
              value: function(t) {
                window.confirm('Are you sure you would like to delete this invite?') &&
                  this.props.actions.destroy(t);
              }
            },
            {
              key: 'sendInvites',
              value: function() {
                var t = this,
                  e = this.props.admin.waitList
                    .slice(0, this.state.number)
                    .map(function(e) {
                      return t.props.admin.wait[e];
                    });
                this.props.actions.inviteFromWaitlist(e);
              }
            },
            {
              key: 'handleChange',
              value: function(t) {
                this.setState(h()({}, t.target.name, t.target.value));
              }
            },
            {
              key: 'renderWaitlist',
              value: function(t) {
                var e = this,
                  n = this.props.admin.wait[t];
                return n
                  ? y.a.createElement(
                      'div',
                      { key: t, className: 'adminRow' },
                      y.a.createElement('span', null, n.name),
                      y.a.createElement('span', null, n.email),
                      y.a.createElement('span', null, n.status),
                      y.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return e.props.actions.inviteFromWaitlist([n]);
                          }
                        },
                        'Send Invite'
                      ),
                      y.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return e.props.actions.deleteWaitlistUser(n);
                          }
                        },
                        'Remove'
                      )
                    )
                  : null;
              }
            },
            {
              key: 'render',
              value: function() {
                var t = this,
                  e = this.props.admin.waitList.map(function(e) {
                    return t.renderWaitlist(e);
                  });
                return y.a.createElement(
                  'div',
                  { className: 'adminContainer' },
                  y.a.createElement('h2', null, 'Waitlist'),
                  y.a.createElement(
                    'div',
                    { className: 'adminInner' },
                    y.a.createElement('input', {
                      className: 'blueInput',
                      style: { width: '40px', textAlign: 'right' },
                      type: 'text',
                      name: 'number',
                      placeholder: 'number of users',
                      value: this.state.number,
                      onChange: this.handleChange
                    }),
                    y.a.createElement(
                      N.a,
                      {
                        backgroundColor: 'white',
                        color: '#3E3EFF',
                        onClick: this.sendInvites
                      },
                      'Invite the next ' +
                        (1 === this.state.number ? 'user' : this.state.number + ' users')
                    )
                  ),
                  y.a.createElement(
                    'div',
                    { key: 'inviteId', className: 'titleRow' },
                    y.a.createElement('span', null, 'Name'),
                    y.a.createElement('span', null, 'Email'),
                    y.a.createElement('span', null, 'Status'),
                    y.a.createElement('span', { style: { maxWidth: 130 } })
                  ),
                  e
                );
              }
            }
          ]),
          n
        );
      })(v.Component);
      h()(g, 'propTypes', { actions: O.a.object, admin: O.a.object }),
        (g.propTypes = { actions: O.a.object, admin: O.a.object }),
        (e.default = Object(_.c)(
          function(t) {
            return { auth: t.auth, admin: t.admin };
          },
          function(t) {
            return { actions: Object(w.bindActionCreators)(j, t) };
          }
        )(g));
    },
    './src/modules/ui/web/ShadowButton.js': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return p;
      });
      var r = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(r),
        i = n('../../node_modules/react/index.js'),
        u = n.n(i),
        s = n('../../node_modules/prop-types/index.js'),
        o = n.n(s);
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function(e) {
                a()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function p(t) {
        return u.a.createElement(
          'button',
          {
            className: 'shadowButton',
            onClick: function() {
              return t.onClick ? t.onClick() : null;
            },
            style: l({}, t.style)
          },
          u.a.createElement('span', null, t.children)
        );
      }
      p.propTypes = { onClick: o.a.func, style: o.a.object, children: o.a.node };
    }
  }
]);
//# sourceMappingURL=admin-web-waitlist-component.bundle.js.map
