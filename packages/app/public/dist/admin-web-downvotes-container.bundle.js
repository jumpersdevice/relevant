(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [12],
  {
    './src/modules/admin/admin.actions.js': function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'setInvites', function() {
          return y;
        }),
        n.d(e, 'setWaitlist', function() {
          return w;
        }),
        n.d(e, 'deleteWaitlistUsers', function() {
          return g;
        }),
        n.d(e, 'updateInvite', function() {
          return j;
        }),
        n.d(e, 'destroyInvite', function() {
          return O;
        }),
        n.d(e, 'setInviteCount', function() {
          return E;
        }),
        n.d(e, 'getInviteCount', function() {
          return L;
        }),
        n.d(e, 'getInvites', function() {
          return _;
        }),
        n.d(e, 'createInvite', function() {
          return x;
        }),
        n.d(e, 'destroy', function() {
          return k;
        }),
        n.d(e, 'getWaitlist', function() {
          return S;
        }),
        n.d(e, 'inviteFromWaitlist', function() {
          return T;
        }),
        n.d(e, 'signupForMailingList', function() {
          return D;
        }),
        n.d(e, 'setDownvotes', function() {
          return P;
        }),
        n.d(e, 'getDownvotes', function() {
          return C;
        }),
        n.d(e, 'sendEmail', function() {
          return M;
        }),
        n.d(e, 'saveEmail', function() {
          return N;
        }),
        n.d(e, 'loadEmail', function() {
          return R;
        }),
        n.d(e, 'deleteWaitlistUser', function() {
          return q;
        }),
        n.d(e, 'sendPostNotification', function() {
          return W;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        s = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        a = n.n(s),
        i = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = n.n(i),
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
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(n), !0).forEach(function(e) {
                o()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var f = p.a.Alert(),
        m = 'http://localhost:3000/api',
        v = new c.b.Entity('invites', {}, { idAttribute: '_id' }),
        b = new c.b.Entity('wait', {}, { idAttribute: '_id' });
      function y(t) {
        var e = t.data,
          n = t.community,
          r = t.skip;
        return { type: l.W, payload: { data: e, community: n, skip: r } };
      }
      function w(t) {
        return { type: l.wb, payload: t };
      }
      function g(t) {
        return { type: l.h, payload: t };
      }
      function j(t) {
        return { type: l.Ib, payload: t };
      }
      function O(t) {
        return { type: l.j, payload: t };
      }
      function E(t) {
        return { type: l.Y, payload: t };
      }
      function L() {
        return (function() {
          var t = u()(
            a.a.mark(function t(e) {
              var n;
              return a.a.wrap(
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
                        (n = t.sent), e(E(n)), (t.next = 10);
                        break;
                      case 7:
                        (t.prev = 7), (t.t0 = t.catch(0)), f.alert(t.t0.message);
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
      function _(t, e, n) {
        return (function() {
          var r = u()(
            a.a.mark(function r(o) {
              var s, i;
              return a.a.wrap(
                function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          o(
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
                          (s = r.sent),
                          (i = Object(c.a)({ invites: s }, { invites: [v] })),
                          o(y({ data: i, community: n, skip: t })),
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
      function x(t) {
        return (function() {
          var e = u()(
            a.a.mark(function e(n) {
              var r;
              return a.a.wrap(
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
                          n(j(r.invite[0])),
                          n(E(r.count)),
                          e.abrupt('return', r)
                        );
                      case 9:
                        return (
                          (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          f.alert(e.t0.message),
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
      function k(t) {
        return (function() {
          var e = u()(
            a.a.mark(function e(n) {
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = fetch),
                        (e.t1 = m + '/invites/' + t._id),
                        (e.t2 = h),
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
                              f.alert('removed item'), n(O(t));
                            })
                            .catch(function(t) {
                              f.alert(t.message), console.log('invites error', t);
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
      function S() {
        return (function() {
          var t = u()(
            a.a.mark(function t(e) {
              return a.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.t0 = fetch),
                        (t.t1 = m + '/list'),
                        (t.t2 = h),
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
                              var n = Object(c.a)({ wait: t }, { wait: [b] });
                              e(w(n));
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
      function T(t) {
        return (function() {
          var e = u()(
            a.a.mark(function e(n) {
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = fetch),
                        (e.t1 = 'http://localhost:3000/api/list/'),
                        (e.t2 = h),
                        (e.t3 = h),
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
                              return f.alert('users have been invited!'), n(g(t)), !0;
                            })
                            .catch(function(t) {
                              return f.alert(t.message), console.log(t), !1;
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
        return u()(
          a.a.mark(function e() {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.t0 = fetch),
                      (e.t1 = 'http://localhost:3000/api/list/'),
                      (e.t2 = h),
                      (e.t3 = h),
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
                              f.alert("You've been added to the waitlist.", 'success'), !0
                            );
                          })
                          .catch(function(t) {
                            return f.alert(t.message), console.log(t), !1;
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
      function P(t) {
        return { type: l.R, payload: t };
      }
      function C(t, e) {
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
              return n(P(t));
            })
            .catch(function(t) {
              return f.alert(t.message);
            });
        };
      }
      function M(t) {
        return (function() {
          var e = u()(
            a.a.mark(function e(n) {
              return a.a.wrap(
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
                        return f.alert('Email has been sent'), e.abrupt('return', !0);
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
      function N(t) {
        return (function() {
          var e = u()(
            a.a.mark(function e(n) {
              return a.a.wrap(
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
                        return f.alert('Email has been saved'), e.abrupt('return', !0);
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
      function R() {
        return (function() {
          var t = u()(
            a.a.mark(function t(e) {
              var n;
              return a.a.wrap(
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
      function q(t) {
        return (function() {
          var e = u()(
            a.a.mark(function e(n) {
              return a.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.t0 = fetch),
                          (e.t1 = m + '/list/' + t._id),
                          (e.t2 = h),
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
                        e.sent && n(g([t])), (e.next = 18);
                        break;
                      case 15:
                        (e.prev = 15), (e.t6 = e.catch(0)), f.alert(e.t6.message);
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
      function W(t) {
        return (function() {
          var e = u()(
            a.a.mark(function e(n) {
              return a.a.wrap(
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
                        return e.abrupt('return', f.alert('Notification sent!'));
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
    './src/modules/admin/web/downvotes.container.js': function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        o = n.n(r),
        s = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        a = n.n(s),
        i = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        u = n.n(i),
        c = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        l = n.n(c),
        p = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        d = n.n(p),
        h = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        f = n.n(h),
        m = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        v = n.n(m),
        b = n('../../node_modules/react/index.js'),
        y = n.n(b),
        w = n('../../node_modules/prop-types/index.js'),
        g = n.n(w),
        j = n('../../node_modules/redux/es/redux.js'),
        O = n('../../node_modules/react-redux/es/index.js'),
        E = n('./src/modules/admin/admin.actions.js'),
        L = n('./src/modules/listview/web/infScroll.component.js'),
        _ = n('./src/utils/numbers.js');
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
            r = f()(t);
          if (e) {
            var o = f()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var k = (function(t) {
        l()(n, t);
        var e = x(n);
        function n(t) {
          var r;
          return (
            o()(this, n),
            ((r = e.call(this, t)).renderDownvote = r.renderDownvote.bind(u()(r))),
            (r.load = r.load.bind(u()(r))),
            (r.hasMore = !0),
            r
          );
        }
        return (
          a()(n, [
            {
              key: 'renderDownvote',
              value: function(t) {
                return y.a.createElement(
                  'div',
                  { className: 'downvoteList', key: t._id },
                  y.a.createElement('div', { className: 'dUser' }, t.investor),
                  y.a.createElement('div', null, '- ', t.author),
                  y.a.createElement(
                    'div',
                    null,
                    Object(_.getDayMonthYearTimestamp)(t.createdAt)
                  ),
                  y.a.createElement(
                    'div',
                    null,
                    t.post
                      ? Object(_.getDayMonthYearTimestamp)(t.post.createdAt)
                      : '[deleted]'
                  )
                );
              }
            },
            {
              key: 'load',
              value: function(t) {
                var e = this.props.admin.downvotes.length;
                (this.hasMore = 40 * (t - 1) <= e),
                  this.hasMore && this.props.actions.getDownvotes(e, 40);
              }
            },
            {
              key: 'render',
              value: function() {
                var t = this,
                  e = this.props.admin.downvotes.map(function(e) {
                    return t.renderDownvote(e);
                  });
                return y.a.createElement(
                  'div',
                  null,
                  y.a.createElement('h2', null, 'Downvotes'),
                  y.a.createElement(
                    L.a,
                    {
                      data: this.props.admin.downvotes,
                      className: 'adminContainer',
                      loadMore: this.load,
                      hasMore: this.hasMore
                    },
                    e
                  )
                );
              }
            }
          ]),
          n
        );
      })(b.Component);
      v()(k, 'propTypes', { admin: g.a.object, actions: g.a.object }),
        (e.default = Object(O.c)(
          function(t) {
            return { auth: t.auth, admin: t.admin };
          },
          function(t) {
            return { actions: Object(j.bindActionCreators)(E, t) };
          }
        )(k));
    },
    './src/modules/listview/web/infScroll.component.js': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return L;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        o = n.n(r),
        s = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        a = n.n(s),
        i = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        u = n.n(i),
        c = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        l = n.n(c),
        p = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        d = n.n(p),
        h = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        f = n.n(h),
        m = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        v = n.n(m),
        b = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        y = n.n(b),
        w = n('../../node_modules/react/index.js'),
        g = n.n(w),
        j = n('../../node_modules/prop-types/index.js'),
        O = n.n(j);
      function E(t) {
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
            r = v()(t);
          if (e) {
            var o = v()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return f()(this, n);
        };
      }
      var L = (function(t) {
        d()(n, t);
        var e = E(n);
        function n(t) {
          var r;
          return (
            a()(this, n),
            ((r = e.call(this, t)).scrollListener = r.scrollListener.bind(l()(r))),
            (r.attachScrollListener = r.attachScrollListener.bind(l()(r))),
            r
          );
        }
        return (
          u()(n, [
            {
              key: 'componentDidMount',
              value: function() {
                (this.pageLoaded = this.props.pageStart),
                  this.attachScrollListener(),
                  (this.data = this.props.data),
                  (this.data && this.data.length) || this.props.loadMore(this.pageLoaded);
              }
            },
            {
              key: 'componentDidUpdate',
              value: function() {
                this.data.length !== this.props.data.length &&
                  (this.attachScrollListener(), (this.data = this.props.data)),
                  !this.props.data.length < this.data.length &&
                    (this.pageLoaded = this.props.pageStart);
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.detachScrollListener();
              }
            },
            {
              key: 'setDefaultLoader',
              value: function(t) {
                this.defaultLoader = t;
              }
            },
            {
              key: 'detachScrollListener',
              value: function() {
                var t = window;
                !1 === this.props.useWindow && (t = this.scrollComponent.parentNode),
                  t.removeEventListener(
                    'scroll',
                    this.scrollListener,
                    this.props.useCapture
                  ),
                  t.removeEventListener(
                    'resize',
                    this.scrollListener,
                    this.props.useCapture
                  );
              }
            },
            {
              key: 'attachScrollListener',
              value: function() {
                if (this.props.hasMore) {
                  var t = window;
                  !1 === this.props.useWindow && (t = this.scrollComponent.parentNode),
                    t.addEventListener(
                      'scroll',
                      this.scrollListener,
                      this.props.useCapture
                    ),
                    t.addEventListener(
                      'resize',
                      this.scrollListener,
                      this.props.useCapture
                    ),
                    this.props.initialLoad && this.scrollListener();
                }
              }
            },
            {
              key: 'scrollListener',
              value: function() {
                if (this.props.data && this.props.data.length) {
                  var t,
                    e = this.scrollComponent,
                    n = window;
                  if (this.props.useWindow) {
                    var r =
                      void 0 !== n.pageYOffset
                        ? n.pageYOffset
                        : (
                            document.documentElement ||
                            document.body.parentNode ||
                            document.body
                          ).scrollTop;
                    t = this.props.isReverse
                      ? r
                      : this.calculateTopPosition(e) +
                        (e.offsetHeight - r - window.innerHeight);
                  } else
                    t = this.props.isReverse
                      ? e.parentNode.scrollTop
                      : e.scrollHeight -
                        e.parentNode.scrollTop -
                        e.parentNode.clientHeight;
                  t < Number(this.props.threshold) &&
                    (this.detachScrollListener(),
                    'function' == typeof this.props.loadMore &&
                      this.props.loadMore((this.pageLoaded += 1)));
                }
              }
            },
            {
              key: 'calculateTopPosition',
              value: function(t) {
                return t ? t.offsetTop + this.calculateTopPosition(t.offsetParent) : 0;
              }
            },
            {
              key: 'render',
              value: function() {
                var t = this,
                  e = this.props,
                  n = e.children,
                  r = e.element,
                  s = e.hasMore,
                  a = (e.initialLoad, e.isReverse, e.loader),
                  i =
                    (e.loadMore,
                    e.pageStart,
                    e.threshold,
                    e.useCapture,
                    e.useWindow,
                    e.data,
                    o()(e, [
                      'children',
                      'element',
                      'hasMore',
                      'initialLoad',
                      'isReverse',
                      'loader',
                      'loadMore',
                      'pageStart',
                      'threshold',
                      'useCapture',
                      'useWindow',
                      'data'
                    ]));
                return (
                  (i.ref = function(e) {
                    t.scrollComponent = e;
                  }),
                  g.a.createElement(r, i, n, s && (a || this.defaultLoader))
                );
              }
            }
          ]),
          n
        );
      })(w.Component);
      y()(L, 'propTypes', { data: O.a.array }),
        (L.propTypes = {
          element: O.a.string,
          hasMore: O.a.bool,
          initialLoad: O.a.bool,
          isReverse: O.a.bool,
          loadMore: O.a.func.isRequired,
          pageStart: O.a.number,
          threshold: O.a.number,
          useCapture: O.a.bool,
          useWindow: O.a.bool,
          children: O.a.oneOfType([O.a.object, O.a.array]).isRequired,
          loader: O.a.object
        }),
        (L.defaultProps = {
          element: 'div',
          hasMore: !1,
          initialLoad: !0,
          pageStart: 0,
          threshold: 250,
          useWindow: !0,
          isReverse: !1,
          useCapture: !1,
          loader: null
        });
    }
  }
]);
//# sourceMappingURL=admin-web-downvotes-container.bundle.js.map
