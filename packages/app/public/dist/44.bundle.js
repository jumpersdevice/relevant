(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [44],
  {
    './src/modules/admin/admin.actions.js': function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'setInvites', function() {
          return y;
        }),
        n.d(e, 'setWaitlist', function() {
          return v;
        }),
        n.d(e, 'deleteWaitlistUsers', function() {
          return b;
        }),
        n.d(e, 'updateInvite', function() {
          return g;
        }),
        n.d(e, 'destroyInvite', function() {
          return w;
        }),
        n.d(e, 'setInviteCount', function() {
          return j;
        }),
        n.d(e, 'getInviteCount', function() {
          return O;
        }),
        n.d(e, 'getInvites', function() {
          return E;
        }),
        n.d(e, 'createInvite', function() {
          return L;
        }),
        n.d(e, 'destroy', function() {
          return S;
        }),
        n.d(e, 'getWaitlist', function() {
          return _;
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
          return M;
        }),
        n.d(e, 'sendEmail', function() {
          return N;
        }),
        n.d(e, 'saveEmail', function() {
          return C;
        }),
        n.d(e, 'loadEmail', function() {
          return q;
        }),
        n.d(e, 'deleteWaitlistUser', function() {
          return W;
        }),
        n.d(e, 'sendPostNotification', function() {
          return A;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = n.n(i),
        a = n('../../node_modules/normalizr/dist/normalizr.es.js'),
        u = n('./src/core/actionTypes.js'),
        d = n('./src/utils/index.js');
      function l(t, e) {
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
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function(e) {
                o()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var p = d.a.Alert(),
        h = 'http://localhost:3000/api',
        f = new a.b.Entity('invites', {}, { idAttribute: '_id' }),
        m = new a.b.Entity('wait', {}, { idAttribute: '_id' });
      function y(t) {
        var { data: e, community: n, skip: r } = t;
        return { type: u.W, payload: { data: e, community: n, skip: r } };
      }
      function v(t) {
        return { type: u.wb, payload: t };
      }
      function b(t) {
        return { type: u.h, payload: t };
      }
      function g(t) {
        return { type: u.Ib, payload: t };
      }
      function w(t) {
        return { type: u.j, payload: t };
      }
      function j(t) {
        return { type: u.Y, payload: t };
      }
      function O() {
        return (function() {
          var t = s()(function*(t) {
            try {
              var e = yield t(
                d.b.request({ method: 'GET', endpoint: 'invites', path: '/count' })
              );
              t(j(e));
            } catch (t) {
              p.alert(t.message);
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function E(t, e, n) {
        return (function() {
          var r = s()(function*(r) {
            try {
              var o = yield r(
                d.b.request({
                  method: 'GET',
                  query: { skip: t, limit: e },
                  endpoint: 'invites',
                  path: ''
                })
              );
              return (
                r(
                  y({
                    data: Object(a.a)({ invites: o }, { invites: [f] }),
                    community: n,
                    skip: t
                  })
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          });
          return function(t) {
            return r.apply(this, arguments);
          };
        })();
      }
      function L(t) {
        return (function() {
          var e = s()(function*(e) {
            try {
              var n = yield e(
                d.b.request({
                  method: 'POST',
                  endpoint: 'invites',
                  path: '/',
                  body: JSON.stringify(t)
                })
              );
              return e(g(n.invite[0])), e(j(n.count)), n;
            } catch (t) {
              return p.alert(t.message), !1;
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function S(t) {
        return (function() {
          var e = s()(function*(e) {
            return fetch(
              h + '/invites/' + t._id,
              c({ method: 'DELETE' }, yield d.b.reqOptions())
            )
              .then(d.b.handleErrors)
              .then(() => {
                p.alert('removed item'), e(w(t));
              })
              .catch(t => {
                p.alert(t.message), console.log('invites error', t);
              });
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function _() {
        return (function() {
          var t = s()(function*(t) {
            return fetch(h + '/list', c({ method: 'GET' }, yield d.b.reqOptions()))
              .then(d.b.handleErrors)
              .then(t => t.json())
              .then(e => {
                var n = Object(a.a)({ wait: e }, { wait: [m] });
                t(v(n));
              })
              .catch(t => {
                console.log('invites error', t);
              });
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function T(t) {
        return (function() {
          var e = s()(function*(e) {
            return fetch(
              'http://localhost:3000/api/list/',
              c(
                c({ method: 'PUT' }, yield d.b.reqOptions()),
                {},
                { body: JSON.stringify(t) }
              )
            )
              .then(d.b.handleErrors)
              .then(() => (p.alert('users have been invited!'), e(b(t)), !0))
              .catch(t => (p.alert(t.message), console.log(t), !1));
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function D(t) {
        return s()(function*() {
          return fetch(
            'http://localhost:3000/api/list/',
            c(
              c({ method: 'POST' }, yield d.b.reqOptions()),
              {},
              { body: JSON.stringify(t) }
            )
          )
            .then(d.b.handleErrors)
            .then(() => (p.alert("You've been added to the waitlist.", 'success'), !0))
            .catch(t => (p.alert(t.message), console.log(t), !1));
        });
      }
      function P(t) {
        return { type: u.R, payload: t };
      }
      function M(t, e) {
        return n =>
          n(
            d.b.request({
              method: 'GET',
              query: { skip: t, limit: e },
              endpoint: 'invest',
              path: '/downvotes'
            })
          )
            .then(t => n(P(t)))
            .catch(t => p.alert(t.message));
      }
      function N(t) {
        return (function() {
          var e = s()(function*(e) {
            try {
              return (
                yield e(
                  d.b.request({
                    method: 'PUT',
                    endpoint: 'email',
                    path: '/',
                    body: JSON.stringify(t)
                  })
                ),
                p.alert('Email has been sent'),
                !0
              );
            } catch (t) {
              return !1;
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function C(t) {
        return (function() {
          var e = s()(function*(e) {
            try {
              return (
                yield e(
                  d.b.request({
                    method: 'PUT',
                    endpoint: 'email',
                    path: '/save',
                    body: JSON.stringify(t)
                  })
                ),
                p.alert('Email has been saved'),
                !0
              );
            } catch (t) {
              return !1;
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function q() {
        return (function() {
          var t = s()(function*(t) {
            try {
              return yield t(
                d.b.request({ method: 'GET', endpoint: 'email', path: '/load' })
              );
            } catch (t) {
              return !1;
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function W(t) {
        return (function() {
          var e = s()(function*(e) {
            try {
              (yield fetch(
                h + '/list/' + t._id,
                c({ method: 'DELETE' }, yield d.b.reqOptions())
              )) && e(b([t]));
            } catch (t) {
              p.alert(t.message);
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function A(t) {
        return (function() {
          var e = s()(function*(e) {
            try {
              return (
                yield e(
                  d.b.request({
                    method: 'POST',
                    endpoint: 'post',
                    path: '/sendPostNotification',
                    body: JSON.stringify(t)
                  })
                ),
                p.alert('Notification sent!')
              );
            } catch (t) {
              return !1;
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
    },
    './src/modules/admin/web/downvotes.container.js': function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        i = n('../../node_modules/react/index.js'),
        s = n.n(i),
        a = n('../../node_modules/prop-types/index.js'),
        u = n.n(a),
        d = n('../../node_modules/redux/es/redux.js'),
        l = n('../../node_modules/react-redux/es/index.js'),
        c = n('./src/modules/admin/admin.actions.js'),
        p = n('./src/modules/listview/web/infScroll.component.js'),
        h = n('./src/utils/numbers.js');
      class f extends i.Component {
        constructor(t) {
          super(t),
            (this.renderDownvote = this.renderDownvote.bind(this)),
            (this.load = this.load.bind(this)),
            (this.hasMore = !0);
        }
        renderDownvote(t) {
          return s.a.createElement(
            'div',
            { className: 'downvoteList', key: t._id },
            s.a.createElement('div', { className: 'dUser' }, t.investor),
            s.a.createElement('div', null, '- ', t.author),
            s.a.createElement(
              'div',
              null,
              Object(h.getDayMonthYearTimestamp)(t.createdAt)
            ),
            s.a.createElement(
              'div',
              null,
              t.post ? Object(h.getDayMonthYearTimestamp)(t.post.createdAt) : '[deleted]'
            )
          );
        }
        load(t) {
          var e = this.props.admin.downvotes.length;
          (this.hasMore = 40 * (t - 1) <= e),
            this.hasMore && this.props.actions.getDownvotes(e, 40);
        }
        render() {
          var t = this.props.admin.downvotes.map(t => this.renderDownvote(t));
          return s.a.createElement(
            'div',
            null,
            s.a.createElement('h2', null, 'Downvotes'),
            s.a.createElement(
              p.a,
              {
                data: this.props.admin.downvotes,
                className: 'adminContainer',
                loadMore: this.load,
                hasMore: this.hasMore
              },
              t
            )
          );
        }
      }
      o()(f, 'propTypes', { admin: u.a.object, actions: u.a.object }),
        (e.default = Object(l.c)(
          t => ({ auth: t.auth, admin: t.admin }),
          t => ({ actions: Object(d.bindActionCreators)(c, t) })
        )(f));
    },
    './src/modules/listview/web/infScroll.component.js': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return c;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        s = n.n(i),
        a = n('../../node_modules/react/index.js'),
        u = n.n(a),
        d = n('../../node_modules/prop-types/index.js'),
        l = n.n(d);
      class c extends a.Component {
        constructor(t) {
          super(t),
            (this.scrollListener = this.scrollListener.bind(this)),
            (this.attachScrollListener = this.attachScrollListener.bind(this));
        }
        componentDidMount() {
          (this.pageLoaded = this.props.pageStart),
            this.attachScrollListener(),
            (this.data = this.props.data),
            (this.data && this.data.length) || this.props.loadMore(this.pageLoaded);
        }
        componentDidUpdate() {
          this.data.length !== this.props.data.length &&
            (this.attachScrollListener(), (this.data = this.props.data)),
            !this.props.data.length < this.data.length &&
              (this.pageLoaded = this.props.pageStart);
        }
        componentWillUnmount() {
          this.detachScrollListener();
        }
        setDefaultLoader(t) {
          this.defaultLoader = t;
        }
        detachScrollListener() {
          var t = window;
          !1 === this.props.useWindow && (t = this.scrollComponent.parentNode),
            t.removeEventListener('scroll', this.scrollListener, this.props.useCapture),
            t.removeEventListener('resize', this.scrollListener, this.props.useCapture);
        }
        attachScrollListener() {
          if (this.props.hasMore) {
            var t = window;
            !1 === this.props.useWindow && (t = this.scrollComponent.parentNode),
              t.addEventListener('scroll', this.scrollListener, this.props.useCapture),
              t.addEventListener('resize', this.scrollListener, this.props.useCapture),
              this.props.initialLoad && this.scrollListener();
          }
        }
        scrollListener() {
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
                : e.scrollHeight - e.parentNode.scrollTop - e.parentNode.clientHeight;
            t < Number(this.props.threshold) &&
              (this.detachScrollListener(),
              'function' == typeof this.props.loadMore &&
                this.props.loadMore((this.pageLoaded += 1)));
          }
        }
        calculateTopPosition(t) {
          return t ? t.offsetTop + this.calculateTopPosition(t.offsetParent) : 0;
        }
        render() {
          var t = this.props,
            {
              children: e,
              element: n,
              hasMore: r,
              initialLoad: i,
              isReverse: s,
              loader: a,
              loadMore: d,
              pageStart: l,
              threshold: c,
              useCapture: p,
              useWindow: h,
              data: f
            } = t,
            m = o()(t, [
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
            ]);
          return (
            (m.ref = t => {
              this.scrollComponent = t;
            }),
            u.a.createElement(n, m, e, r && (a || this.defaultLoader))
          );
        }
      }
      s()(c, 'propTypes', { data: l.a.array }),
        (c.propTypes = {
          element: l.a.string,
          hasMore: l.a.bool,
          initialLoad: l.a.bool,
          isReverse: l.a.bool,
          loadMore: l.a.func.isRequired,
          pageStart: l.a.number,
          threshold: l.a.number,
          useCapture: l.a.bool,
          useWindow: l.a.bool,
          children: l.a.oneOfType([l.a.object, l.a.array]).isRequired,
          loader: l.a.object
        }),
        (c.defaultProps = {
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
//# sourceMappingURL=44.bundle.js.map
