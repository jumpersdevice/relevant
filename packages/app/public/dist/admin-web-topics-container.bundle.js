(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [20],
  {
    './src/modules/admin/web/topics.container.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = {};
      n.r(r),
        n.d(r, 'setDiscoverTags', function() {
          return F;
        }),
        n.d(r, 'selectTag', function() {
          return U;
        }),
        n.d(r, 'deselectTag', function() {
          return V;
        }),
        n.d(r, 'updateParentTag', function() {
          return W;
        }),
        n.d(r, 'setParentTags', function() {
          return L;
        }),
        n.d(r, 'getDiscoverTags', function() {
          return Y;
        }),
        n.d(r, 'searchTags', function() {
          return k;
        }),
        n.d(r, 'createTag', function() {
          return J;
        }),
        n.d(r, 'updateTag', function() {
          return G;
        }),
        n.d(r, 'getParentTags', function() {
          return q;
        });
      var a = n('./node_modules/@babel/runtime/helpers/toConsumableArray.js'),
        c = n.n(a),
        o = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        i = n.n(o),
        u = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        s = n.n(u),
        p = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        l = n.n(p),
        d = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        f = n.n(d),
        h = n('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        E = n.n(h),
        _ = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        b = n.n(_),
        m = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        g = n.n(m),
        O = n('../../node_modules/react/index.js'),
        T = n.n(O),
        y = n('../../node_modules/prop-types/index.js'),
        N = n.n(y),
        R = n('../../node_modules/redux/es/redux.js'),
        v = n('../../node_modules/react-redux/es/index.js'),
        j = n('./node_modules/@babel/runtime/regenerator/index.js'),
        A = n.n(j),
        C = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        S = n.n(C),
        B = n('./src/core/actionTypes.js'),
        D = n('./src/utils/index.js');
      function P(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function(t) {
                g()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var K,
        w = D.a.Alert(),
        x = (function() {
          var e = S()(
            A.a.mark(function e() {
              var t;
              return A.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), D.f.getToken();
                    case 2:
                      return (
                        (t = e.sent),
                        e.abrupt('return', {
                          credentials: 'include',
                          headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer '.concat(t)
                          }
                        })
                      );
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function() {
            return e.apply(this, arguments);
          };
        })();
      function F(e) {
        return { type: B.Q, payload: e };
      }
      function U(e) {
        return { type: 'SELECT_TAG', payload: e };
      }
      function V(e) {
        return { type: 'DESELECT_TAG', payload: e };
      }
      function W(e) {
        return { type: B.Jb, payload: e };
      }
      function L(e) {
        return { type: B.bb, payload: e };
      }
      function Y() {
        return function(e) {
          fetch(
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
            }).API_SERVER + '/api/tag?sort=count',
            {
              credentials: 'include',
              method: 'GET',
              headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
            }
          )
            .then(D.b.handleErrors)
            .then(function(e) {
              return e.json();
            })
            .then(function(t) {
              e(F(t));
            })
            .catch(function(e) {
              return w('Error getting tags ' + e.message);
            });
        };
      }
      function k(e) {
        return function(t) {
          return e && '' !== e
            ? fetch(
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
                }).API_SERVER +
                  '/api/tag/search/' +
                  e,
                {
                  credentials: 'include',
                  method: 'GET',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  }
                }
              )
                .then(function(e) {
                  return e.json();
                })
                .then(function(e) {
                  t(F(e));
                })
                .catch(function(e) {
                  w('Search error ', e);
                })
            : t(F([]));
        };
      }
      function J(e) {
        return (function() {
          var t = S()(
            A.a.mark(function t(n) {
              return A.a.wrap(function(t) {
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
                          }).API_SERVER + '/api/tag'),
                        (t.t2 = I),
                        (t.t3 = I),
                        (t.t4 = {}),
                        (t.next = 7),
                        x()
                      );
                    case 7:
                      return (
                        (t.t5 = t.sent),
                        (t.t6 = (0, t.t3)(t.t4, t.t5)),
                        (t.t7 = {}),
                        (t.t8 = { method: 'POST', body: JSON.stringify(e) }),
                        (t.t9 = (0, t.t2)(t.t6, t.t7, t.t8)),
                        t.abrupt(
                          'return',
                          (0, t.t0)(t.t1, t.t9)
                            .then(function(e) {
                              return e.json();
                            })
                            .then(function(e) {
                              n(L([e]));
                            })
                            .catch(function(e) {
                              return (
                                w('error creating tag ' + e), { status: !1, data: e }
                              );
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
      function G(e) {
        return (function() {
          var t = S()(
            A.a.mark(function t(n) {
              return A.a.wrap(function(t) {
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
                          }).API_SERVER + '/api/tag/categories'),
                        (t.t2 = I),
                        (t.t3 = I),
                        (t.t4 = {}),
                        (t.next = 7),
                        x()
                      );
                    case 7:
                      return (
                        (t.t5 = t.sent),
                        (t.t6 = (0, t.t3)(t.t4, t.t5)),
                        (t.t7 = {}),
                        (t.t8 = { method: 'PUT', body: JSON.stringify(e) }),
                        (t.t9 = (0, t.t2)(t.t6, t.t7, t.t8)),
                        t.abrupt(
                          'return',
                          (0, t.t0)(t.t1, t.t9)
                            .then(function(e) {
                              return e.json();
                            })
                            .then(function(e) {
                              n(W(e));
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
      function q() {
        return (function() {
          var e = S()(
            A.a.mark(function e(t) {
              return A.a.wrap(function(e) {
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
                          }).API_SERVER + '/api/tag/categories?active'),
                        (e.t2 = I),
                        (e.t3 = { method: 'GET' }),
                        (e.next = 6),
                        x()
                      );
                    case 6:
                      (e.t4 = e.sent),
                        (e.t5 = (0, e.t2)(e.t3, e.t4)),
                        (0, e.t0)(e.t1, e.t5)
                          .then(function(e) {
                            return e.json();
                          })
                          .then(function(e) {
                            t(L(e));
                          })
                          .catch(function(e) {
                            return w('parents error', e);
                          });
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
      function M(e) {
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
            r = b()(e);
          if (t) {
            var a = b()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return E()(this, n);
        };
      }
      var Z = (function(e) {
        f()(n, e);
        var t = M(n);
        function n(e) {
          var r;
          return (
            i()(this, n),
            ((r = t.call(this, e)).state = { topic: '', emoji: '' }),
            (r.handleChange = r.handleChange.bind(l()(r))),
            (r.updateTag = r.updateTag.bind(l()(r))),
            r
          );
        }
        return (
          s()(n, [
            {
              key: 'componentDidMount',
              value: function() {
                this.props.actions.getParentTags();
              }
            },
            {
              key: 'handleChange',
              value: function(e) {
                this.setState(g()({}, e.target.name, e.target.value));
              }
            },
            {
              key: 'updateTag',
              value: function(e, t) {
                (t[e.target.name] = e.target.value),
                  this.props.actions.updateParentTag(t);
              }
            },
            {
              key: 'archiveTag',
              value: function(e) {
                (e.active = !e.active), this.props.actions.updateTag(e);
              }
            },
            {
              key: 'saveTag',
              value: function(e) {
                (e.main = e.main.split(', ').filter(function(e) {
                  return '' !== e;
                })),
                  (e.children = e.children.split(', ').filter(function(e) {
                    return '' !== e;
                  })),
                  this.props.actions.updateTag(e);
              }
            },
            {
              key: 'newTag',
              value: function() {
                var e = {
                  _id: this.state.topic + '_category_tag',
                  categoryName: this.state.topic,
                  category: !0,
                  emoji: this.state.emoji
                };
                this.props.actions.createTag(e);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props.tags.parentTags || [];
                return (
                  (t = [].concat(
                    c()(
                      t.filter(function(e) {
                        return e.active;
                      })
                    ),
                    c()(
                      t.filter(function(e) {
                        return !e.active;
                      })
                    )
                  )),
                  T.a.createElement(
                    'div',
                    { style: K.topicsContainerStyle },
                    T.a.createElement('input', {
                      type: 'text',
                      name: 'topic',
                      placeholder: 'topic',
                      value: this.state.topic,
                      onChange: this.handleChange
                    }),
                    T.a.createElement('input', {
                      type: 'text',
                      name: 'emoji',
                      placeholder: 'emoji',
                      value: this.state.emoji,
                      onChange: this.handleChange
                    }),
                    T.a.createElement(
                      'button',
                      {
                        onClick: function() {
                          return e.newTag();
                        }
                      },
                      'Add new category'
                    ),
                    t.map(function(t) {
                      return (
                        t.newId || (t.newId = t._id),
                        t.main &&
                          'string' != typeof t.main &&
                          (t.main = t.main.join(', ')),
                        t.children &&
                          'string' != typeof t.children &&
                          (t.children = t.children.join(', ')),
                        T.a.createElement(
                          'div',
                          {
                            style: t.active ? null : { textDecoration: 'line-through' },
                            key: t._id
                          },
                          t.emoji,
                          ' ',
                          T.a.createElement('input', {
                            type: 'text',
                            name: 'categoryName',
                            placeholder: 'topic',
                            value: t.categoryName,
                            onChange: function(n) {
                              return e.updateTag(n, t);
                            }
                          }),
                          T.a.createElement('input', {
                            type: 'text',
                            name: 'newId',
                            placeholder: '_id',
                            value: t.newId,
                            onChange: function(n) {
                              return e.updateTag(n, t);
                            }
                          }),
                          T.a.createElement('input', {
                            type: 'text',
                            name: 'main',
                            placeholder: 'main',
                            value: t.main,
                            onChange: function(n) {
                              return e.updateTag(n, t);
                            }
                          }),
                          T.a.createElement('input', {
                            type: 'text',
                            name: 'children',
                            placeholder: 'children',
                            value: t.children,
                            onChange: function(n) {
                              return e.updateTag(n, t);
                            }
                          }),
                          ' ',
                          t.count,
                          ' ',
                          T.a.createElement(
                            'button',
                            {
                              onClick: function() {
                                return e.archiveTag(t);
                              }
                            },
                            'remove'
                          ),
                          T.a.createElement(
                            'button',
                            {
                              onClick: function() {
                                return e.saveTag(t);
                              }
                            },
                            'save'
                          )
                        )
                      );
                    })
                  )
                );
              }
            }
          ]),
          n
        );
      })(O.Component);
      g()(Z, 'propTypes', { actions: N.a.object, tags: N.a.array }),
        (K = {
          topicsContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        });
      t.default = Object(v.c)(
        function(e) {
          return { auth: e.auth, tags: e.tags };
        },
        function(e) {
          return { actions: Object(R.bindActionCreators)(r, e) };
        }
      )(Z);
    }
  }
]);
//# sourceMappingURL=admin-web-topics-container.bundle.js.map
