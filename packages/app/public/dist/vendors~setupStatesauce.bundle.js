(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [58],
  {
    '../../node_modules/redux-saga-web3-eth-contract/lib/actions.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createActionsForInterface = function(e, t) {
          return t.reduce(
            function(t, n) {
              return (
                'function' === n.type
                  ? (t.methods[n.name] = function(t, r) {
                      return p(e, n, t, r);
                    })
                  : 'event' === n.type && (t.events[n.name] = s(e, n.name)),
                t
              );
            },
            { methods: {}, events: {} }
          );
        }),
        (t.createActionsForEvent = s),
        (t.createActionForEventSubscribe = o),
        (t.createActionForEventGet = c),
        (t.createActionsForMapping = function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return {
            type: (0, a.createType)(e, 'MAPPING', t, 'INIT'),
            payload: { options: n, event: t },
            meta: r
          };
        }),
        (t.createActionsForMethod = p),
        (t.createActionForMethodCall = i),
        (t.createActionForMethodSend = u);
      n('../../node_modules/redux-saga-web3-utils/lib/index.js');
      var r = n('../../node_modules/redux-saga-web3-eth-contract/lib/util.js'),
        a = n('../../node_modules/redux-saga-web3-eth-contract/lib/types.js');
      function o(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return {
          type: (0, a.createType)(e, 'EVENTS', t, 'SUBSCRIBE'),
          payload: { options: n },
          meta: r
        };
      }
      function c(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return {
          type: (0, a.createType)(e, 'EVENTS', t, 'GET'),
          payload: { options: n, event: t },
          meta: r
        };
      }
      function s(e, t) {
        return {
          subscribe: function(n, r) {
            return o(e, t, n, r);
          },
          get: function(n, r) {
            return c(e, t, n, r);
          }
        };
      }
      function i(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return function() {
          for (var o = arguments.length, c = new Array(o), s = 0; s < o; s++)
            c[s] = arguments[s];
          return {
            type: (0, a.createType)(e, 'METHODS', t, 'CALL'),
            payload: { args: c, options: n },
            meta: r
          };
        };
      }
      function u(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return function() {
          for (var o = arguments.length, c = new Array(o), s = 0; s < o; s++)
            c[s] = arguments[s];
          return {
            type: (0, a.createType)(e, 'METHODS', t, 'SEND'),
            payload: { args: c, options: n },
            meta: r
          };
        };
      }
      function p(e, t, n, a) {
        return (0, r.isSendable)(t)
          ? { call: i(e, t.name, n, a), send: u(e, t.name, n, a) }
          : { call: i(e, t.name, n, a) };
      }
    },
    '../../node_modules/redux-saga-web3-eth-contract/lib/index.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'createSaga', {
          enumerable: !0,
          get: function() {
            return c.create;
          }
        }),
        Object.defineProperty(t, 'createReducer', {
          enumerable: !0,
          get: function() {
            return s.create;
          }
        }),
        Object.defineProperty(t, 'createActionsForInterface', {
          enumerable: !0,
          get: function() {
            return i.createActionsForInterface;
          }
        }),
        Object.defineProperty(t, 'createActionsForMethod', {
          enumerable: !0,
          get: function() {
            return i.createActionsForMethod;
          }
        }),
        Object.defineProperty(t, 'createActionForMethodCall', {
          enumerable: !0,
          get: function() {
            return i.createActionForMethodCall;
          }
        }),
        Object.defineProperty(t, 'createActionForMethodSend', {
          enumerable: !0,
          get: function() {
            return i.createActionForMethodSend;
          }
        }),
        Object.defineProperty(t, 'createActionsForEvent', {
          enumerable: !0,
          get: function() {
            return i.createActionsForEvent;
          }
        }),
        Object.defineProperty(t, 'createActionForEventGet', {
          enumerable: !0,
          get: function() {
            return i.createActionForEventGet;
          }
        }),
        Object.defineProperty(t, 'createActionForEventSubscribe', {
          enumerable: !0,
          get: function() {
            return i.createActionForEventSubscribe;
          }
        }),
        Object.defineProperty(t, 'createTypesForEventSubscribe', {
          enumerable: !0,
          get: function() {
            return p.createTypesForEventSubscribe;
          }
        }),
        Object.defineProperty(t, 'createTypesForEventGet', {
          enumerable: !0,
          get: function() {
            return p.createTypesForEventGet;
          }
        }),
        Object.defineProperty(t, 'createTypesForMethod', {
          enumerable: !0,
          get: function() {
            return p.createTypesForMethod;
          }
        }),
        Object.defineProperty(t, 'createTypesForMethodCall', {
          enumerable: !0,
          get: function() {
            return p.createTypesForMethodCall;
          }
        }),
        Object.defineProperty(t, 'createTypesForMethodSend', {
          enumerable: !0,
          get: function() {
            return p.createTypesForMethodSend;
          }
        }),
        (t.default = void 0);
      var r,
        a =
          (r = n('../../node_modules/web3/dist/web3.umd.js')) && r.__esModule
            ? r
            : { default: r },
        o =
          (n('../../node_modules/web3-eth-contract/dist/web3-eth-contract.umd.js'),
          n('../../node_modules/immutable/dist/immutable.es.js'),
          n('../../node_modules/redux/es/redux.js'),
          n('../../node_modules/redux-saga-web3/lib/index.js'),
          n('../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js')),
        c =
          (n('../../node_modules/redux-saga-web3-eth-subscribe/lib/index.js'),
          n('../../node_modules/redux-saga-web3-eth-contract/lib/saga.js')),
        s = n('../../node_modules/redux-saga-web3-eth-contract/lib/reducer.js'),
        i = n('../../node_modules/redux-saga-web3-eth-contract/lib/actions.js'),
        u = n('../../node_modules/redux-saga-web3-eth-contract/lib/selectors.js'),
        p = n('../../node_modules/redux-saga-web3-eth-contract/lib/types.js'),
        d = n('../../node_modules/redux-saga-web3-eth-contract/lib/util.js');
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function(t) {
              f(e, t, n[t]);
            });
        }
        return e;
      }
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function m(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var y = (function() {
        function e(t, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          m(this, e),
            (this._namespace = t),
            (this._options = r),
            (this.web3Instance = this.instantiateWeb3(r)),
            (this.contract = new this.web3Instance.eth.Contract(n, r.at)),
            (this._types = (0, p.createTypesForInterface)(t, n)),
            (this._actions = (0, i.createActionsForInterface)(t, n)),
            (this._reducer = f({}, t, (0, s.create)(t, n, r.at))),
            (this._selectors = (0, u.createSelectorsForInterface)(t, n, r.at)),
            (this._saga = (0, c.create)(
              t,
              this.contract,
              Object.keys(this.types.methods),
              Object.keys(this.types.events)
            )),
            (this._attachedActions = {}),
            (this._attachedTypes = {}),
            (this._attachedSelectors = {}),
            (this._attachedReducers = []),
            (this._attachedSagas = []);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: 'instantiateWeb3',
              value: function(e) {
                var t = e.web3Instance,
                  n = e.provider;
                return t || (n ? new a.default(n) : void 0);
              }
            },
            {
              key: 'createMapping',
              value: function(e, t, n) {
                var r = this,
                  a = this,
                  c = (0, p.createTypesForMapping)(this._namespace, e),
                  s = function(t) {
                    return (0, u.createSelectorForMapping)(r._namespace, e, t);
                  };
                (this._attachedActions = l({}, this._attachedActions, {
                  mappings: l(
                    {},
                    this._attachedActions.mappings,
                    f({}, e, function(t) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return (0,
                      i.createActionsForMapping)(r._namespace, e, t, l({}, n, { isMapping: !0 }));
                    })
                  )
                })),
                  (this._attachedSelectors = l({}, this._attachedSelectors, {
                    mappings: l({}, this._attachedSelectors.mappings, f({}, e, s))
                  })),
                  (this._attachedTypes = l({}, this._attachedTypes, {
                    mappings: l({}, this._attachedTypes.mappings, f({}, e, c))
                  })),
                  this._attachedSagas.push([
                    (0, o.takeEvery)(
                      c.INIT,
                      regeneratorRuntime.mark(function e(n) {
                        var r, c;
                        return regeneratorRuntime.wrap(function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.meta),
                                  (c = n.payload.options),
                                  (e.next = 3),
                                  (0, o.put)(a.actions.events[t].subscribe(c, r))
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    (0, o.takeEvery)(
                      a.types.events[t].subscribe.DATA,
                      regeneratorRuntime.mark(function t(n) {
                        var r, c, i;
                        return regeneratorRuntime.wrap(function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((r = n.meta), (c = n.payload), !r.isMapping)) {
                                  t.next = 7;
                                  break;
                                }
                                return (t.next = 4), (0, o.select)(s(r.options));
                              case 4:
                                return (
                                  (i = t.sent),
                                  (t.next = 7),
                                  (0, o.put)({
                                    type: a.types.mappings[e].DATA,
                                    payload: c,
                                    meta: r,
                                    state: i || void 0
                                  })
                                );
                              case 7:
                              case 'end':
                                return t.stop();
                            }
                        }, t);
                      })
                    ),
                    (0, o.takeEvery)(
                      a.types.mappings[e].DATA,
                      regeneratorRuntime.mark(function t(r) {
                        var c;
                        return regeneratorRuntime.wrap(function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), n(r);
                              case 2:
                                return (
                                  (c = t.sent),
                                  (t.next = 5),
                                  (0, o.put)({
                                    type: a.types.mappings[e].MAPPED,
                                    payload: c,
                                    meta: r.meta
                                  })
                                );
                              case 5:
                              case 'end':
                                return t.stop();
                            }
                        }, t);
                      })
                    )
                  ]),
                  this._attachedReducers.push(function(t, n) {
                    var r = n.type,
                      o = n.payload;
                    if (r === a.types.mappings[e].MAPPED) {
                      var c = (0, d.pickAddress)(n);
                      return l({}, t, {
                        contracts: l(
                          {},
                          t.contracts,
                          f(
                            {},
                            c,
                            l({}, t.contracts[c], {
                              mappings: l(
                                {},
                                t.contracts[c].mappings,
                                f(
                                  {},
                                  e,
                                  l({}, t.contracts[c].mappings[e], { payload: o })
                                )
                              )
                            })
                          )
                        )
                      });
                    }
                    return t;
                  });
              }
            },
            {
              key: 'attachMethod',
              value: function(e, t, n) {
                var r = this,
                  a = (0, p.createTypesForMethod)(this._namespace, e);
                (this._attachedActions = l({}, this._attachedActions, {
                  methods: l(
                    {},
                    this._attachedActions.methods,
                    f({}, e, function(t, n) {
                      return (0, i.createActionsForMethod)(r._namespace, e, t, n);
                    })
                  )
                })),
                  (this._attachedSelectors = l({}, this._attachedSelectors, {
                    methods: l(
                      {},
                      this._attachedSelectors.methods,
                      f({}, e, function(t) {
                        return (0, u.createSelectorForMethod)(r._namespace, e, t);
                      })
                    )
                  })),
                  (this._attachedTypes = l({}, this._attachedTypes, {
                    methods: l({}, this._attachedTypes.methods, f({}, e, a))
                  })),
                  this._attachedSagas.push(t(a)()),
                  n &&
                    this._attachedReducers.push(function() {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        r = arguments.length > 1 ? arguments[1] : void 0,
                        o = (0, d.pickAddress)(r);
                      return o &&
                        Object.values(a.call)
                          .concat(Object.values(a.send))
                          .includes(r.type)
                        ? l({}, t, {
                            contracts: l(
                              {},
                              t.contracts,
                              f(
                                {},
                                o,
                                l({}, t.contracts[o], {
                                  methods: l(
                                    {},
                                    t.contracts[o].methods,
                                    f(
                                      {},
                                      e,
                                      l({}, t.contracts[o].mappings[e], n(a)(t, r))
                                    )
                                  )
                                })
                              )
                            )
                          })
                        : t;
                    });
              }
            },
            {
              key: 'actions',
              get: function() {
                return l({}, this._actions, this._attachedActions);
              }
            },
            {
              key: 'selectors',
              get: function() {
                return l({}, this._selectors, this._attachedSelectors);
              }
            },
            {
              key: 'types',
              get: function() {
                return l({}, this._types, this._attachedTypes);
              }
            },
            {
              key: 'saga',
              get: function() {
                var e = this;
                return regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.delegateYield(e._saga(), 't0', 1);
                        case 1:
                          return (t.next = 3), (0, o.all)(e._attachedSagas);
                        case 3:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                });
              }
            },
            {
              key: 'reducer',
              get: function() {
                var e = this,
                  t = Object.keys(this._reducer)[0],
                  n = Object.values(this._reducer)[0];
                return f({}, t, function(t, r) {
                  return e._attachedReducers.reduce(function(e, t) {
                    return t(e, r);
                  }, n(t, r));
                });
              }
            }
          ]) && h(t.prototype, n),
          r && h(t, r),
          e
        );
      })();
      t.default = y;
    },
    '../../node_modules/redux-saga-web3-eth-contract/lib/reducer.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.create = function(e, t, n) {
          var p = (function(e, t) {
            return t.reduce(function(t, n) {
              return t.merge(
                (0, r.Map)(
                  (function(e, t, n) {
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (e[t] = n);
                    return e;
                  })(
                    {},
                    'function' === n.type
                      ? (0, a.createBaseTypeForMethod)(e, n.name)
                      : (0, a.createBaseTypeForEvent)(e, n.name),
                    (0, r.fromJS)(n)
                  )
                )
              );
            }, (0, r.Map)());
          })(e, t);
          return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
              t = arguments.length > 1 ? arguments[1] : void 0,
              d = t.type,
              l = t.meta,
              f = t.payload,
              m = (0, a.decomposeType)(d),
              h = m.base,
              y = m.directive,
              b = m.phase,
              g = (0, r.fromJS)(e);
            if (p.has(h)) {
              var v = p.get(h);
              if ('function' === v.get('type')) {
                if ('' === b) {
                  var S = f.args,
                    _ = f.options;
                  return g.mergeIn(
                    ['contracts', _.at ? _.at : n, 'methods', v.get('name')].concat(
                      c(_.path ? _.path : S)
                    ),
                    (0, r.Map)({ phase: s[y] })
                  );
                }
                if ('TRANSACTION_HASH' === b) {
                  var A = l.args,
                    E = l.options;
                  return g.mergeIn(
                    ['contracts', E.at ? E.at : n, 'methods', v.get('name')].concat(
                      c(E.path ? E.path : A)
                    ),
                    (0, r.Map)({
                      confirmations: (0, r.Stack)(),
                      transactionHash: f,
                      phase: s[b]
                    })
                  );
                }
                if ('RECEIPT' === b) {
                  var O = l.args,
                    j = l.options;
                  return g.mergeIn(
                    ['contracts', j.at ? j.at : n, 'methods', v.get('name')].concat(
                      c(j.path ? j.path : O)
                    ),
                    (0, r.Map)({ receipt: f, phase: s[b] })
                  );
                }
                if ('CONFIRMATION' === b) {
                  var T = l.args,
                    R = l.options;
                  return g.setIn(
                    ['contracts', R.at ? R.at : n, 'methods', v.get('name')].concat(
                      c(R.path ? R.path : T),
                      ['confirmations']
                    ),
                    g
                      .getIn(
                        ['contracts', R.at ? R.at : n, 'methods', v.get('name')].concat(
                          c(R.path ? R.path : T),
                          ['confirmations']
                        )
                      )
                      .push(f)
                  );
                }
                var w = l.args,
                  x = l.options;
                return g.mergeIn(
                  ['contracts', x.at ? x.at : n, 'methods', v.get('name')].concat(
                    c(x.path ? x.path : w)
                  ),
                  (0, r.Map)({ value: 'object' === o(f) ? i(f) : f, phase: s[b] })
                );
              }
              if ('event' === v.get('type')) {
                var M = l.event,
                  I = l.options;
                if ('SUCCESS' === b)
                  return g.hasIn(['contracts', I.at ? I.at : n, 'events', M])
                    ? g.setIn(
                        ['contracts', I.at ? I.at : n, 'events', M],
                        g
                          .getIn(['contracts', I.at ? I.at : n, 'events', M])
                          .union((0, r.fromJS)(f).toOrderedSet())
                          .sort(function(e, t) {
                            return e.get('blockNumber') < t.get('blockNumber')
                              ? 1
                              : e.get('blockNumber') > t.get('blockNumber')
                              ? -1
                              : e.get('blockNumber') === t.get('blockNumber')
                              ? 0
                              : void 0;
                          })
                      )
                    : g.setIn(
                        ['contracts', I.at ? I.at : n, 'events', M],
                        (0, r.fromJS)(f).toOrderedSet()
                      );
              }
            }
            return g;
          };
        });
      var r = n('../../node_modules/immutable/dist/immutable.es.js'),
        a = n('../../node_modules/redux-saga-web3-eth-contract/lib/types.js');
      function o(e) {
        return (o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function c(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      var s = {
        CALL: 'CALLED',
        SEND: 'SENT',
        SUCCESS: 'SUCCESS',
        TRANSACTION_HASH: 'PENDING',
        RECEIPT: 'RECEIPT',
        ERROR: 'ERROR'
      };
      function i(e) {
        return Object.getOwnPropertyNames(e).reduce(function(t, n) {
          return t.set(n, e[n]);
        }, (0, r.Map)());
      }
      var u = (0, r.Map)({ contracts: (0, r.Map)() });
    },
    '../../node_modules/redux-saga-web3-eth-contract/lib/saga.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.create = function(e, t, n, i) {
          function p(e) {
            var n = e.at,
              r = e.provider,
              a = t.clone();
            return n && (a.options.address = n), r && a.setProvider(r), a;
          }
          return function() {
            var t = n.reduce(function(t, n) {
                if ('()' === n.slice(-2) || '0x' === n.substring(0, 2)) return t;
                var i = (0, c.createTypesForMethodCall)(e, n),
                  d = (0, c.createTypesForMethodSend)(e, n);
                return [].concat(u(t), [
                  (0, r.takeEvery)(
                    i.CALL,
                    regeneratorRuntime.mark(function e(t) {
                      var a, o, c, d, l, f;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (o = t.payload),
                                  (c = o.args),
                                  (d = o.options),
                                  (l = t.meta),
                                  (e.next = 3),
                                  (0, r.call)(
                                    (a = p(d).methods)[n].apply(a, u(c)).call,
                                    d
                                  )
                                );
                              case 3:
                                return (
                                  (f = e.sent),
                                  (e.prev = 4),
                                  (e.next = 7),
                                  (0, r.put)({
                                    type: i.SUCCESS,
                                    payload: f,
                                    meta: s({}, l, { args: c, options: d })
                                  })
                                );
                              case 7:
                                e.next = 13;
                                break;
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t0 = e.catch(4)),
                                  (e.next = 13),
                                  (0, r.put)({ type: i.ERROR, payload: e.t0 })
                                );
                              case 13:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[4, 9]]
                      );
                    })
                  ),
                  (0, r.takeEvery)(
                    d.SEND,
                    regeneratorRuntime.mark(function e(t) {
                      var c, i, l, f, m, h, y, b;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((h = function(e, t, r) {
                                    var o,
                                      c = (o = p(t).methods)[n].apply(o, u(e)).send(t);
                                    return (0, a.eventChannel)(function(n) {
                                      return (
                                        c.on('transactionHash', function(a) {
                                          n({
                                            type: d.TRANSACTION_HASH,
                                            payload: a,
                                            meta: s({}, r, { args: e, options: t })
                                          });
                                        }),
                                        c.on('receipt', function(a) {
                                          return n({
                                            type: d.RECEIPT,
                                            payload: a,
                                            meta: s({}, r, { args: e, options: t })
                                          });
                                        }),
                                        c.on('confirmation', function(a) {
                                          return n({
                                            type: d.CONFIRMATION,
                                            payload: a,
                                            meta: s({}, r, { args: e, options: t })
                                          });
                                        }),
                                        c.on('error', function(o) {
                                          n({
                                            type: d.ERROR,
                                            payload: { name: o.name, message: o.message },
                                            meta: s({}, r, { args: e, options: t })
                                          }),
                                            n(a.END);
                                        }),
                                        function() {}
                                      );
                                    });
                                  }),
                                  (c = t.payload),
                                  (i = t.meta),
                                  (l = c.args),
                                  (f = c.options).from)
                                ) {
                                  e.next = 8;
                                  break;
                                }
                                return (
                                  (e.next = 6),
                                  (0, r.select)(o.selectors.accounts.selectAccounts)
                                );
                              case 6:
                                (m = e.sent), (f.from = m.get(0));
                              case 8:
                                (y = h(l, f, i)), (e.prev = 9);
                              case 10:
                                return (e.next = 13), (0, r.take)(y);
                              case 13:
                                return (b = e.sent), (e.next = 16), (0, r.put)(b);
                              case 16:
                                e.next = 10;
                                break;
                              case 18:
                                return (e.prev = 18), y.close(), e.finish(18);
                              case 21:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[9, , 18, 21]]
                      );
                    })
                  )
                ]);
              }, []),
              d = i.reduce(function(t, n) {
                var o = regeneratorRuntime.mark(f),
                  i = (0, c.createTypesForEventSubscribe)(e, n),
                  d = (0, c.createTypesForEventGet)(e, n);
                function l(e, t) {
                  var r,
                    o = e.options,
                    c = p(o);
                  return (
                    o.at || (o.at = c.options.address),
                    (r = c.events[n](o)),
                    (0, a.eventChannel)(function(e) {
                      return (
                        r.on('data', function(r) {
                          return e({
                            type: i.DATA,
                            payload: r,
                            meta: s({}, t, { event: n, options: o })
                          });
                        }),
                        r.on('changed', function(t) {
                          return e({ type: i.CHANGED, payload: t });
                        }),
                        r.on('error', function(t) {
                          e({
                            type: i.ERROR,
                            payload: t,
                            meta: { event: n, options: o }
                          }),
                            e(a.END);
                        }),
                        function() {}
                      );
                    })
                  );
                }
                function f(e) {
                  var t, n, a, c;
                  return regeneratorRuntime.wrap(
                    function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            (t = e.payload), (n = e.meta), (a = l(t, n)), (o.prev = 2);
                          case 3:
                            return (o.next = 6), (0, r.take)(a);
                          case 6:
                            return (c = o.sent), (o.next = 9), (0, r.put)(c);
                          case 9:
                            o.next = 3;
                            break;
                          case 11:
                            return (o.prev = 11), a.close(), o.finish(11);
                          case 14:
                          case 'end':
                            return o.stop();
                        }
                    },
                    o,
                    null,
                    [[2, , 11, 14]]
                  );
                }
                return [].concat(u(t), [
                  (0, r.takeEvery)(i.SUBSCRIBE, function(e) {
                    e.type;
                    var t = (function(e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        a = (function(e, t) {
                          if (null == e) return {};
                          var n,
                            r,
                            a = {},
                            o = Object.keys(e);
                          for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                          return a;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++)
                          (n = o[r]),
                            t.indexOf(n) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
                      }
                      return a;
                    })(e, ['type']);
                    return [(0, r.call)(f, t)];
                  }),
                  (0, r.takeEvery)(
                    d.GET,
                    regeneratorRuntime.mark(function e(t) {
                      var n, a, o, c, i, u;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  t.type,
                                  (n = t.payload),
                                  (a = n.event),
                                  (o = n.options),
                                  (c = t.meta),
                                  (e.prev = 1),
                                  (i = p(o)),
                                  (e.next = 5),
                                  (0, r.call)(i.getPastEvents.bind(i), a, o)
                                );
                              case 5:
                                return (
                                  (u = e.sent),
                                  (e.next = 8),
                                  (0, r.put)({
                                    type: d.SUCCESS,
                                    payload: u,
                                    meta: s({}, c, { event: a, options: o })
                                  })
                                );
                              case 8:
                                e.next = 14;
                                break;
                              case 10:
                                return (
                                  (e.prev = 10),
                                  (e.t0 = e.catch(1)),
                                  (e.next = 14),
                                  (0, r.put)({
                                    type: d.ERROR,
                                    payload: e.t0,
                                    meta: s({}, c, { event: a, options: o }),
                                    error: !0
                                  })
                                );
                              case 14:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 10]]
                      );
                    })
                  )
                ]);
              }, []);
            return [].concat(u(t), u(d));
          };
        });
      var r = n('../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js'),
        a = n('../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js'),
        o = n('../../node_modules/redux-saga-web3/lib/index.js'),
        c =
          (n('../../node_modules/redux-saga-web3-utils/lib/index.js'),
          n('../../node_modules/redux-saga-web3-eth-contract/lib/types.js'));
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function(t) {
              i(e, t, n[t]);
            });
        }
        return e;
      }
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function u(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
    },
    '../../node_modules/redux-saga-web3-eth-contract/lib/selectors.js': function(
      e,
      t,
      n
    ) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createSelectorsForInterface = function(e, t, n) {
          return t.reduce(
            function(t, r) {
              return (
                'function' === r.type
                  ? (t.methods[r.name] = function() {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return y(e, r.name, t.at ? t : o({}, t, { at: n }));
                    })
                  : 'event' === r.type &&
                    (t.events[r.name] = function() {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return b(e, r.name, t.at ? t : o({}, t, { at: n }));
                    }),
                t
              );
            },
            { methods: {}, events: {} }
          );
        }),
        (t.createSelectorForMapping = function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return function(r) {
            return h(r, o({}, n, { event: t, namespace: e }));
          };
        }),
        (t.createSelectorForMethod = y),
        (t.selectIsSubscribed = t.selectContract = t.selectContracts = void 0);
      var r = n('../../node_modules/reselect/es/index.js'),
        a = n('../../node_modules/immutable/dist/immutable.es.js');
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function(t) {
              c(e, t, n[t]);
            });
        }
        return e;
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function s(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      var i = function(e, t) {
        return e[t.namespace].get('contracts');
      };
      t.selectContracts = i;
      var u = function(e, t) {
          return t.event;
        },
        p = function(e, t) {
          return t.reducer;
        },
        d = (0, r.createSelector)(
          i,
          function(e, t) {
            return t.at;
          },
          function(e, t) {
            return e ? e.get(t) : null;
          }
        );
      t.selectContract = d;
      var l = (0, r.createSelector)(d, function(e) {
        return !(!e || !e.has('isSubscribed')) && e.get('isSubscribed');
      });
      t.selectIsSubscribed = l;
      var f = (0, r.createSelector)(
          d,
          function(e, t) {
            return t.method;
          },
          function(e, t) {
            return t.args;
          },
          p,
          function(e, t, n, r) {
            if (!e) return null;
            var o,
              c = e.getIn(['methods', t].concat(s(n)));
            r && (0, a.isCollection)(c)
              ? (c = (o = c).reduce.apply(o, s(r)))
              : r &&
                !(0, a.isCollection)(c) &&
                console.warn(
                  'Did not reduce state for method "'.concat(
                    t,
                    '". Method state needs to be a collection to be reduced.'
                  )
                );
            return c ? { phase: c.get('phase'), value: c.get('value') } : null;
          }
        ),
        m = (0, r.createSelector)(d, u, p, function(e, t, n) {
          return e
            ? n
              ? e.getIn(['events', t]).filter(function(e) {
                  return !0;
                })
              : e.getIn(['events', t])
            : null;
        }),
        h = (0, r.createSelector)(d, u, p, function(e, t, n) {
          return e
            ? n
              ? e.getIn(['mappings', t]).filter(function(e) {
                  return !0;
                })
              : e.getIn(['mappings', t])
            : null;
        });
      function y(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return function(r) {
          for (
            var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), s = 1;
            s < a;
            s++
          )
            c[s - 1] = arguments[s];
          return f(r, o({}, n, { method: t, namespace: e, args: c }));
        };
      }
      function b(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return function(r, a) {
          return m(r, o({}, n, { event: t, namespace: e, filter: a }));
        };
      }
    },
    '../../node_modules/redux-saga-web3-eth-contract/lib/types.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createType = o),
        (t.createBaseTypeForEvent = s),
        (t.createBaseTypeForMethod = c),
        (t.createTypesForMapping = function(e, t) {
          var n = o(e, 'MAPPING', t);
          return {
            INIT: n + '/INIT',
            DATA: n + '/DATA',
            MAPPED: n + '/MAPPED',
            ERROR: n + '/ERROR'
          };
        }),
        (t.createTypesForMethod = p),
        (t.createTypesForMethodCall = i),
        (t.createTypesForMethodSend = u),
        (t.createTypesForEvent = f),
        (t.createTypesForEventGet = l),
        (t.createTypesForEventSubscribe = d),
        (t.createTypesForInterface = function(e, t) {
          return t.reduce(
            function(t, n) {
              return (
                'function' === n.type
                  ? (t.methods[n.name] = p(e, n))
                  : 'event' === n.type && (t.events[n.name] = f(e, n.name)),
                t
              );
            },
            { methods: {}, events: {} }
          );
        }),
        (t.decomposeType = function(e) {
          var t = e.split('/');
          return t.length < 3
            ? { base: '', directive: '', phase: '' }
            : 3 === t.length
            ? { base: t.slice(0, 2).join('/'), directive: '', phase: t[2] }
            : 4 === t.length
            ? { base: t.slice(0, 3).join('/'), directive: t[3], phase: '' }
            : { base: t.slice(0, 3).join('/'), directive: t[3], phase: t[4] };
        });
      var r = n('../../node_modules/redux-saga-web3-utils/lib/index.js'),
        a = n('../../node_modules/redux-saga-web3-eth-contract/lib/util.js');
      function o() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .reduce(function(e, t) {
            return ''.concat(e).concat((0, r.formatName)(t), '/');
          }, '')
          .slice(0, -1);
      }
      function c(e, t) {
        return o(e, 'METHODS', t);
      }
      function s(e, t) {
        return o(e, 'EVENTS', t);
      }
      function i(e, t) {
        var n = ''.concat(c(e, t), '/CALL');
        return { CALL: n, SUCCESS: n + '/SUCCESS', ERROR: n + '/ERROR' };
      }
      function u(e, t) {
        var n = ''.concat(c(e, t), '/SEND');
        return {
          SEND: n,
          TRANSACTION_HASH: n + '/TRANSACTION_HASH',
          RECEIPT: n + '/RECEIPT',
          CONFIRMATION: n + '/CONFIRMATION',
          ERROR: n + '/ERROR'
        };
      }
      function p(e, t) {
        return (0, a.isSendable)(t)
          ? { call: i(e, t.name), send: u(e, t.name) }
          : { call: i(e, t.name) };
      }
      function d(e, t) {
        var n = ''.concat(s(e, t), '/SUBSCRIBE');
        return {
          SUBSCRIBE: n,
          DATA: n + '/DATA',
          CHANGED: n + '/CHANGED',
          ERROR: n + '/ERROR'
        };
      }
      function l(e, t) {
        var n = ''.concat(s(e, t), '/GET');
        return { GET: n, SUCCESS: n + '/SUCCESS', ERROR: n + '/ERROR' };
      }
      function f(e, t) {
        return { subscribe: d(e, t), get: l(e, t) };
      }
    },
    '../../node_modules/redux-saga-web3-eth-contract/lib/util.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.pickAddress = function(e) {
          return e.meta && e.meta.options && e.meta.options.at
            ? e.meta.options.at
            : e.payload && e.payload.options && e.payload.options.at
            ? e.payload.options.at
            : null;
        }),
        (t.isSendable = function(e) {
          var t = e.constant,
            n = e.payable,
            r = e.stateMutability;
          if (t) return !1;
          if (r) {
            if ('payable' === r) return !0;
            if ('nonpayable' === r) return !0;
          }
          return !!n;
        });
    }
  }
]);
//# sourceMappingURL=vendors~setupStatesauce.bundle.js.map
