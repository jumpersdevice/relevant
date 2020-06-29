(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [39],
  {
    './src/modules/admin/admin.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'setInvites', function() {
          return y;
        }),
        n.d(t, 'setWaitlist', function() {
          return b;
        }),
        n.d(t, 'deleteWaitlistUsers', function() {
          return v;
        }),
        n.d(t, 'updateInvite', function() {
          return g;
        }),
        n.d(t, 'destroyInvite', function() {
          return E;
        }),
        n.d(t, 'setInviteCount', function() {
          return w;
        }),
        n.d(t, 'getInviteCount', function() {
          return O;
        }),
        n.d(t, 'getInvites', function() {
          return j;
        }),
        n.d(t, 'createInvite', function() {
          return C;
        }),
        n.d(t, 'destroy', function() {
          return L;
        }),
        n.d(t, 'getWaitlist', function() {
          return S;
        }),
        n.d(t, 'inviteFromWaitlist', function() {
          return P;
        }),
        n.d(t, 'signupForMailingList', function() {
          return _;
        }),
        n.d(t, 'setDownvotes', function() {
          return N;
        }),
        n.d(t, 'getDownvotes', function() {
          return I;
        }),
        n.d(t, 'sendEmail', function() {
          return T;
        }),
        n.d(t, 'saveEmail', function() {
          return k;
        }),
        n.d(t, 'loadEmail', function() {
          return D;
        }),
        n.d(t, 'deleteWaitlistUser', function() {
          return x;
        }),
        n.d(t, 'sendPostNotification', function() {
          return M;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = n.n(r),
        s = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = n.n(s),
        o = n('../../node_modules/normalizr/dist/normalizr.es.js'),
        l = n('./src/core/actionTypes.js'),
        u = n('./src/utils/index.js');
      function c(e, t) {
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
            ? c(Object(n), !0).forEach(function(t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var p = u.a.Alert(),
        h = 'http://localhost:3000/api',
        m = new o.b.Entity('invites', {}, { idAttribute: '_id' }),
        f = new o.b.Entity('wait', {}, { idAttribute: '_id' });
      function y(e) {
        var { data: t, community: n, skip: r } = e;
        return { type: l.W, payload: { data: t, community: n, skip: r } };
      }
      function b(e) {
        return { type: l.wb, payload: e };
      }
      function v(e) {
        return { type: l.h, payload: e };
      }
      function g(e) {
        return { type: l.Ib, payload: e };
      }
      function E(e) {
        return { type: l.j, payload: e };
      }
      function w(e) {
        return { type: l.Y, payload: e };
      }
      function O() {
        return (function() {
          var e = a()(function*(e) {
            try {
              var t = yield e(
                u.b.request({ method: 'GET', endpoint: 'invites', path: '/count' })
              );
              e(w(t));
            } catch (e) {
              p.alert(e.message);
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function j(e, t, n) {
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
                  y({
                    data: Object(o.a)({ invites: i }, { invites: [m] }),
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
      function C(e) {
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
              return t(g(n.invite[0])), t(w(n.count)), n;
            } catch (e) {
              return p.alert(e.message), !1;
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function L(e) {
        return (function() {
          var t = a()(function*(t) {
            return fetch(
              h + '/invites/' + e._id,
              d({ method: 'DELETE' }, yield u.b.reqOptions())
            )
              .then(u.b.handleErrors)
              .then(() => {
                p.alert('removed item'), t(E(e));
              })
              .catch(e => {
                p.alert(e.message), console.log('invites error', e);
              });
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function S() {
        return (function() {
          var e = a()(function*(e) {
            return fetch(h + '/list', d({ method: 'GET' }, yield u.b.reqOptions()))
              .then(u.b.handleErrors)
              .then(e => e.json())
              .then(t => {
                var n = Object(o.a)({ wait: t }, { wait: [f] });
                e(b(n));
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
      function P(e) {
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
              .then(() => (p.alert('users have been invited!'), t(v(e)), !0))
              .catch(e => (p.alert(e.message), console.log(e), !1));
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function _(e) {
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
            .then(() => (p.alert("You've been added to the waitlist.", 'success'), !0))
            .catch(e => (p.alert(e.message), console.log(e), !1));
        });
      }
      function N(e) {
        return { type: l.R, payload: e };
      }
      function I(e, t) {
        return n =>
          n(
            u.b.request({
              method: 'GET',
              query: { skip: e, limit: t },
              endpoint: 'invest',
              path: '/downvotes'
            })
          )
            .then(e => n(N(e)))
            .catch(e => p.alert(e.message));
      }
      function T(e) {
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
                p.alert('Email has been sent'),
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
      function k(e) {
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
                p.alert('Email has been saved'),
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
      function D() {
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
      function x(e) {
        return (function() {
          var t = a()(function*(t) {
            try {
              (yield fetch(
                h + '/list/' + e._id,
                d({ method: 'DELETE' }, yield u.b.reqOptions())
              )) && t(v([e]));
            } catch (e) {
              p.alert(e.message);
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function M(e) {
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
                p.alert('Notification sent!')
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
    './src/modules/admin/web/admin.css': function(e, t, n) {},
    './src/modules/admin/web/invites.container.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = n.n(r),
        s = n('../../node_modules/react/index.js'),
        a = n.n(s),
        o = n('../../node_modules/prop-types/index.js'),
        l = n.n(o),
        u = n('../../node_modules/redux/es/redux.js'),
        c = n('../../node_modules/react-redux/es/index.js'),
        d = n('./src/modules/admin/admin.actions.js'),
        p = n('./src/modules/ui/web/ShadowButton.js'),
        h = n('./src/modules/listview/web/infScroll.component.js');
      n('./src/modules/admin/web/admin.css');
      class m extends s.Component {
        constructor(e) {
          super(e),
            (this.handleChange = this.handleChange.bind(this)),
            (this.createInvite = this.createInvite.bind(this)),
            (this.sendEmail = this.sendEmail.bind(this)),
            (this.load = this.load.bind(this)),
            (this.hasMore = !0),
            (this.state = {
              email: '',
              name: '',
              number: 1,
              filter: null,
              invitedBy: ''
            });
        }
        componentDidMount() {}
        load(e) {
          var t = this.props.admin.inviteList.length;
          (this.hasMore = 40 * (e - 1) <= t),
            this.hasMore && this.props.actions.getInvites(t, 40);
        }
        sendEmail(e) {
          e.status
            ? window.confirm(
                'We have already sent one email to this user, are you sure you would like to send another one?'
              ) && this.props.actions.sendInvitationEmail(e._id)
            : this.props.actions.sendInvitationEmail(e._id);
        }
        destroy(e) {
          window.confirm('Are you sure you would like to delete this invite?') &&
            this.props.actions.destroy(e);
        }
        createInvite() {
          var e = {
            email: this.state.email,
            name: this.state.name,
            number: this.state.number,
            invitedByString: this.state.invitedBy
          };
          this.props.actions.createInvite(e),
            this.setState({ name: '', email: '', number: 1 });
        }
        handleChange(e) {
          this.setState({ [e.target.name]: e.target.value });
        }
        renderInvite(e) {
          var t = this.props.admin.invites[e];
          return t && ('original' !== this.state.filter || t.email)
            ? 'registered' === this.state.filter && 'registered' !== t.status
              ? null
              : 'notregistered' !== this.state.filter ||
                ('registered' !== t.status && t.email)
              ? a.a.createElement(
                  'div',
                  { key: e, className: 'adminRow' },
                  a.a.createElement('span', null, t.invitedBy),
                  a.a.createElement('span', null, t.name),
                  a.a.createElement('span', null, t.email),
                  a.a.createElement('span', null, t.code),
                  a.a.createElement('span', null, t.status),
                  a.a.createElement('span', { style: { width: '40px' } }, t.number),
                  a.a.createElement(
                    'button',
                    { onClick: () => this.sendEmail(t) },
                    'Resend Email'
                  ),
                  a.a.createElement(
                    'button',
                    { className: 'alert', onClick: () => this.destroy(t) },
                    'Delete'
                  )
                )
              : null
            : null;
        }
        render() {
          var e = a.a.createElement(
              'div',
              { className: 'adminInner' },
              a.a.createElement('input', {
                className: 'blueInput',
                type: 'text',
                name: 'invitedBy',
                placeholder: 'invited by',
                value: this.state.invitedBy,
                onChange: this.handleChange
              }),
              a.a.createElement('input', {
                className: 'blueInput',
                type: 'email',
                name: 'email',
                placeholder: 'user email',
                value: this.state.email,
                onChange: this.handleChange
              }),
              a.a.createElement('input', {
                className: 'blueInput',
                type: 'text',
                name: 'name',
                placeholder: 'user name',
                value: this.state.name,
                onChange: this.handleChange
              }),
              a.a.createElement('input', {
                className: 'blueInput',
                style: { width: '40px', textAlign: 'right' },
                type: 'text',
                name: 'number',
                placeholder: 'number of invites',
                value: this.state.number,
                onChange: this.handleChange
              }),
              a.a.createElement(
                p.a,
                {
                  backgroundColor: 'white',
                  color: '#3E3EFF',
                  onClick: this.createInvite
                },
                this.state.email ? 'Send Invite Email' : 'Create Invite Code'
              )
            ),
            t = this.props.admin.inviteList
              ? this.props.admin.inviteList.map(e => this.renderInvite(e))
              : null;
          return a.a.createElement(
            'div',
            { className: 'adminContainer' },
            a.a.createElement('h2', null, 'Manage Invites'),
            e,
            a.a.createElement(
              'div',
              { className: 'filter' },
              a.a.createElement(
                'span',
                { onClick: () => this.setState({ filter: null }) },
                'all'
              ),
              a.a.createElement(
                'span',
                { onClick: () => this.setState({ filter: 'original' }) },
                'original'
              ),
              a.a.createElement(
                'span',
                { onClick: () => this.setState({ filter: 'registered' }) },
                'registered'
              ),
              a.a.createElement(
                'span',
                { onClick: () => this.setState({ filter: 'notregistered' }) },
                'notregistered'
              )
            ),
            a.a.createElement(
              'div',
              { key: 'inviteId', className: 'titleRow' },
              a.a.createElement('span', null, 'Invited by'),
              a.a.createElement('span', null, 'Name'),
              a.a.createElement('span', null, 'Email'),
              a.a.createElement('span', null, 'Invite Code'),
              a.a.createElement('span', null, 'Status'),
              a.a.createElement('span', { style: { width: '40px' } }, 'Number'),
              a.a.createElement('span', { style: { maxWidth: 130 } })
            ),
            a.a.createElement(
              h.a,
              {
                className: 'adminContainer',
                data: this.props.admin.inviteList,
                loadMore: this.load,
                hasMore: this.hasMore
              },
              t
            )
          );
        }
      }
      i()(m, 'propTypes', { admin: l.a.object, actions: l.a.object }),
        (t.default = Object(c.c)(
          e => ({ auth: e.auth, admin: e.admin }),
          e => ({ actions: Object(u.bindActionCreators)(d, e) })
        )(m));
    },
    './src/modules/listview/web/infScroll.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return d;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        i = n.n(r),
        s = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(s),
        o = n('../../node_modules/react/index.js'),
        l = n.n(o),
        u = n('../../node_modules/prop-types/index.js'),
        c = n.n(u);
      class d extends o.Component {
        constructor(e) {
          super(e),
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
        setDefaultLoader(e) {
          this.defaultLoader = e;
        }
        detachScrollListener() {
          var e = window;
          !1 === this.props.useWindow && (e = this.scrollComponent.parentNode),
            e.removeEventListener('scroll', this.scrollListener, this.props.useCapture),
            e.removeEventListener('resize', this.scrollListener, this.props.useCapture);
        }
        attachScrollListener() {
          if (this.props.hasMore) {
            var e = window;
            !1 === this.props.useWindow && (e = this.scrollComponent.parentNode),
              e.addEventListener('scroll', this.scrollListener, this.props.useCapture),
              e.addEventListener('resize', this.scrollListener, this.props.useCapture),
              this.props.initialLoad && this.scrollListener();
          }
        }
        scrollListener() {
          if (this.props.data && this.props.data.length) {
            var e,
              t = this.scrollComponent,
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
              e = this.props.isReverse
                ? r
                : this.calculateTopPosition(t) +
                  (t.offsetHeight - r - window.innerHeight);
            } else
              e = this.props.isReverse
                ? t.parentNode.scrollTop
                : t.scrollHeight - t.parentNode.scrollTop - t.parentNode.clientHeight;
            e < Number(this.props.threshold) &&
              (this.detachScrollListener(),
              'function' == typeof this.props.loadMore &&
                this.props.loadMore((this.pageLoaded += 1)));
          }
        }
        calculateTopPosition(e) {
          return e ? e.offsetTop + this.calculateTopPosition(e.offsetParent) : 0;
        }
        render() {
          var e = this.props,
            {
              children: t,
              element: n,
              hasMore: r,
              initialLoad: s,
              isReverse: a,
              loader: o,
              loadMore: u,
              pageStart: c,
              threshold: d,
              useCapture: p,
              useWindow: h,
              data: m
            } = e,
            f = i()(e, [
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
            (f.ref = e => {
              this.scrollComponent = e;
            }),
            l.a.createElement(n, f, t, r && (o || this.defaultLoader))
          );
        }
      }
      a()(d, 'propTypes', { data: c.a.array }),
        (d.propTypes = {
          element: c.a.string,
          hasMore: c.a.bool,
          initialLoad: c.a.bool,
          isReverse: c.a.bool,
          loadMore: c.a.func.isRequired,
          pageStart: c.a.number,
          threshold: c.a.number,
          useCapture: c.a.bool,
          useWindow: c.a.bool,
          children: c.a.oneOfType([c.a.object, c.a.array]).isRequired,
          loader: c.a.object
        }),
        (d.defaultProps = {
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
    },
    './src/modules/ui/web/ShadowButton.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return d;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = n.n(r),
        s = n('../../node_modules/react/index.js'),
        a = n.n(s),
        o = n('../../node_modules/prop-types/index.js'),
        l = n.n(o);
      function u(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function(t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function d(e) {
        return a.a.createElement(
          'button',
          {
            className: 'shadowButton',
            onClick: () => (e.onClick ? e.onClick() : null),
            style: c({}, e.style)
          },
          a.a.createElement('span', null, e.children)
        );
      }
      d.propTypes = { onClick: l.a.func, style: l.a.object, children: l.a.node };
    }
  }
]);
//# sourceMappingURL=39.bundle.js.map
