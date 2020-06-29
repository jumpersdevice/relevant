(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [54],
  {
    './src/modules/admin/web/topics.container.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var a = {};
      n.r(a),
        n.d(a, 'setDiscoverTags', function() {
          return b;
        }),
        n.d(a, 'selectTag', function() {
          return E;
        }),
        n.d(a, 'deselectTag', function() {
          return O;
        }),
        n.d(a, 'updateParentTag', function() {
          return _;
        }),
        n.d(a, 'setParentTags', function() {
          return C;
        }),
        n.d(a, 'getDiscoverTags', function() {
          return w;
        }),
        n.d(a, 'searchTags', function() {
          return x;
        }),
        n.d(a, 'createTag', function() {
          return D;
        }),
        n.d(a, 'updateTag', function() {
          return P;
        }),
        n.d(a, 'getParentTags', function() {
          return A;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = n.n(r),
        o = n('../../node_modules/react/index.js'),
        c = n.n(o),
        s = n('../../node_modules/prop-types/index.js'),
        u = n.n(s),
        p = n('../../node_modules/redux/es/redux.js'),
        l = n('../../node_modules/react-redux/es/index.js'),
        h = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        d = n.n(h),
        g = n('./src/core/actionTypes.js'),
        f = n('./src/utils/index.js');
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function(t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var T,
        j = f.a.Alert(),
        v = (function() {
          var e = d()(function*() {
            var e = yield f.f.getToken();
            return {
              credentials: 'include',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer '.concat(e)
              }
            };
          });
          return function() {
            return e.apply(this, arguments);
          };
        })();
      function b(e) {
        return { type: g.Q, payload: e };
      }
      function E(e) {
        return { type: 'SELECT_TAG', payload: e };
      }
      function O(e) {
        return { type: 'DESELECT_TAG', payload: e };
      }
      function _(e) {
        return { type: g.Jb, payload: e };
      }
      function C(e) {
        return { type: g.bb, payload: e };
      }
      function w() {
        return e => {
          fetch('http://localhost:3000/api/tag?sort=count', {
            credentials: 'include',
            method: 'GET',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
          })
            .then(f.b.handleErrors)
            .then(e => e.json())
            .then(t => {
              e(b(t));
            })
            .catch(e => j('Error getting tags ' + e.message));
        };
      }
      function x(e) {
        return t =>
          e && '' !== e
            ? fetch('http://localhost:3000/api/tag/search/' + e, {
                credentials: 'include',
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                }
              })
                .then(e => e.json())
                .then(e => {
                  t(b(e));
                })
                .catch(e => {
                  j('Search error ', e);
                })
            : t(b([]));
      }
      function D(e) {
        return (function() {
          var t = d()(function*(t) {
            return fetch(
              'http://localhost:3000/api/tag',
              y(y({}, yield v()), {}, { method: 'POST', body: JSON.stringify(e) })
            )
              .then(e => e.json())
              .then(e => {
                t(C([e]));
              })
              .catch(e => (j('error creating tag ' + e), { status: !1, data: e }));
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function P(e) {
        return (function() {
          var t = d()(function*(t) {
            return fetch(
              'http://localhost:3000/api/tag/categories',
              y(y({}, yield v()), {}, { method: 'PUT', body: JSON.stringify(e) })
            )
              .then(e => e.json())
              .then(e => {
                t(_(e));
              });
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function A() {
        return (function() {
          var e = d()(function*(e) {
            fetch(
              'http://localhost:3000/api/tag/categories?active',
              y({ method: 'GET' }, yield v())
            )
              .then(e => e.json())
              .then(t => {
                e(C(t));
              })
              .catch(e => j('parents error', e));
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      class S extends o.Component {
        constructor(e) {
          super(e),
            (this.state = { topic: '', emoji: '' }),
            (this.handleChange = this.handleChange.bind(this)),
            (this.updateTag = this.updateTag.bind(this));
        }
        componentDidMount() {
          this.props.actions.getParentTags();
        }
        handleChange(e) {
          this.setState({ [e.target.name]: e.target.value });
        }
        updateTag(e, t) {
          (t[e.target.name] = e.target.value), this.props.actions.updateParentTag(t);
        }
        archiveTag(e) {
          (e.active = !e.active), this.props.actions.updateTag(e);
        }
        saveTag(e) {
          (e.main = e.main.split(', ').filter(e => '' !== e)),
            (e.children = e.children.split(', ').filter(e => '' !== e)),
            this.props.actions.updateTag(e);
        }
        newTag() {
          var e = {
            _id: this.state.topic + '_category_tag',
            categoryName: this.state.topic,
            category: !0,
            emoji: this.state.emoji
          };
          this.props.actions.createTag(e);
        }
        render() {
          var e = this.props.tags.parentTags || [];
          return (
            (e = [...e.filter(e => e.active), ...e.filter(e => !e.active)]),
            c.a.createElement(
              'div',
              { style: T.topicsContainerStyle },
              c.a.createElement('input', {
                type: 'text',
                name: 'topic',
                placeholder: 'topic',
                value: this.state.topic,
                onChange: this.handleChange
              }),
              c.a.createElement('input', {
                type: 'text',
                name: 'emoji',
                placeholder: 'emoji',
                value: this.state.emoji,
                onChange: this.handleChange
              }),
              c.a.createElement(
                'button',
                { onClick: () => this.newTag() },
                'Add new category'
              ),
              e.map(
                e => (
                  e.newId || (e.newId = e._id),
                  e.main && 'string' != typeof e.main && (e.main = e.main.join(', ')),
                  e.children &&
                    'string' != typeof e.children &&
                    (e.children = e.children.join(', ')),
                  c.a.createElement(
                    'div',
                    {
                      style: e.active ? null : { textDecoration: 'line-through' },
                      key: e._id
                    },
                    e.emoji,
                    ' ',
                    c.a.createElement('input', {
                      type: 'text',
                      name: 'categoryName',
                      placeholder: 'topic',
                      value: e.categoryName,
                      onChange: t => this.updateTag(t, e)
                    }),
                    c.a.createElement('input', {
                      type: 'text',
                      name: 'newId',
                      placeholder: '_id',
                      value: e.newId,
                      onChange: t => this.updateTag(t, e)
                    }),
                    c.a.createElement('input', {
                      type: 'text',
                      name: 'main',
                      placeholder: 'main',
                      value: e.main,
                      onChange: t => this.updateTag(t, e)
                    }),
                    c.a.createElement('input', {
                      type: 'text',
                      name: 'children',
                      placeholder: 'children',
                      value: e.children,
                      onChange: t => this.updateTag(t, e)
                    }),
                    ' ',
                    e.count,
                    ' ',
                    c.a.createElement(
                      'button',
                      { onClick: () => this.archiveTag(e) },
                      'remove'
                    ),
                    c.a.createElement(
                      'button',
                      { onClick: () => this.saveTag(e) },
                      'save'
                    )
                  )
                )
              )
            )
          );
        }
      }
      i()(S, 'propTypes', { actions: u.a.object, tags: u.a.array }),
        (T = {
          topicsContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        });
      t.default = Object(l.c)(
        e => ({ auth: e.auth, tags: e.tags }),
        e => ({ actions: Object(p.bindActionCreators)(a, e) })
      )(S);
    }
  }
]);
//# sourceMappingURL=54.bundle.js.map
