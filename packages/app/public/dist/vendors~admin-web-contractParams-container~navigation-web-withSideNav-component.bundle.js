(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [7],
  {
    '../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js': function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return O;
      }),
        r.d(t, 'b', function() {
          return v;
        }),
        r.d(t, 'c', function() {
          return f;
        }),
        r.d(t, 'd', function() {
          return y;
        });
      var i = r('../../node_modules/@apollo/react-common/lib/react-common.esm.js'),
        n = r('../../node_modules/tslib/tslib.es6.js'),
        s = r('../../node_modules/react/index.js'),
        o = r.n(s),
        a = r('../../node_modules/apollo-client/bundle.esm.js'),
        c = r('../../node_modules/@wry/equality/lib/equality.esm.js'),
        u = r('../../node_modules/ts-invariant/lib/invariant.esm.js'),
        l = (function() {
          function e(e, t) {
            (this.isMounted = !1),
              (this.previousOptions = {}),
              (this.context = {}),
              (this.options = {}),
              (this.options = e || {}),
              (this.context = t || {});
          }
          return (
            (e.prototype.getOptions = function() {
              return this.options;
            }),
            (e.prototype.setOptions = function(e, t) {
              void 0 === t && (t = !1),
                t &&
                  !Object(c.a)(this.options, e) &&
                  (this.previousOptions = this.options),
                (this.options = e);
            }),
            (e.prototype.unmount = function() {
              this.isMounted = !1;
            }),
            (e.prototype.refreshClient = function() {
              var e =
                (this.options && this.options.client) ||
                (this.context && this.context.client);
              Object(u.b)(!!e, 2);
              var t = !1;
              return (
                e !== this.client && ((t = !0), (this.client = e), this.cleanup()),
                { client: this.client, isNew: t }
              );
            }),
            (e.prototype.verifyDocumentType = function(e, t) {
              var r = Object(i.e)(e);
              Object(i.d)(t), Object(i.d)(r.type);
              Object(u.b)(r.type === t, 3);
            }),
            e
          );
        })(),
        p = (function(e) {
          function t(t) {
            var r = t.options,
              i = t.context,
              n = t.onNewData,
              s = e.call(this, r, i) || this;
            return (
              (s.previousData = {}),
              (s.currentObservable = {}),
              (s.runLazy = !1),
              (s.runLazyQuery = function(e) {
                s.cleanup(), (s.runLazy = !0), (s.lazyOptions = e), s.onNewData();
              }),
              (s.getExecuteResult = function() {
                var e = s.getQueryResult();
                return s.startQuerySubscription(), e;
              }),
              (s.obsRefetch = function(e) {
                return s.currentObservable.query.refetch(e);
              }),
              (s.obsFetchMore = function(e) {
                return s.currentObservable.query.fetchMore(e);
              }),
              (s.obsUpdateQuery = function(e) {
                return s.currentObservable.query.updateQuery(e);
              }),
              (s.obsStartPolling = function(e) {
                s.currentObservable &&
                  s.currentObservable.query &&
                  s.currentObservable.query.startPolling(e);
              }),
              (s.obsStopPolling = function() {
                s.currentObservable &&
                  s.currentObservable.query &&
                  s.currentObservable.query.stopPolling();
              }),
              (s.obsSubscribeToMore = function(e) {
                return s.currentObservable.query.subscribeToMore(e);
              }),
              (s.onNewData = n),
              s
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.execute = function() {
              this.refreshClient();
              var e = this.getOptions(),
                t = e.skip,
                r = e.query;
              return (
                (t || r !== this.previousData.query) &&
                  (this.removeQuerySubscription(), (this.previousData.query = r)),
                this.updateObservableQuery(),
                this.isMounted && this.startQuerySubscription(),
                this.getExecuteSsrResult() || this.getExecuteResult()
              );
            }),
            (t.prototype.executeLazy = function() {
              return this.runLazy
                ? [this.runLazyQuery, this.execute()]
                : [
                    this.runLazyQuery,
                    { loading: !1, networkStatus: a.c.ready, called: !1, data: void 0 }
                  ];
            }),
            (t.prototype.fetchData = function() {
              var e = this.getOptions();
              if (e.skip || !1 === e.ssr) return !1;
              var t = this.currentObservable.query;
              return !!t.getCurrentResult().loading && t.result();
            }),
            (t.prototype.afterExecute = function(e) {
              var t = this,
                r = (void 0 === e ? {} : e).lazy,
                i = void 0 !== r && r;
              return (
                (this.isMounted = !0),
                (i && !this.runLazy) ||
                  (this.handleErrorOrCompleted(),
                  setTimeout(function() {
                    t.currentObservable.query &&
                      t.currentObservable.query.resetQueryStoreErrors();
                  })),
                (this.previousOptions = this.getOptions()),
                this.unmount.bind(this)
              );
            }),
            (t.prototype.cleanup = function() {
              this.removeQuerySubscription(),
                delete this.currentObservable.query,
                delete this.previousData.result;
            }),
            (t.prototype.getOptions = function() {
              var t = e.prototype.getOptions.call(this);
              return (
                this.lazyOptions &&
                  ((t.variables = Object(n.a)(
                    Object(n.a)({}, t.variables),
                    this.lazyOptions.variables
                  )),
                  (t.context = Object(n.a)(
                    Object(n.a)({}, t.context),
                    this.lazyOptions.context
                  ))),
                this.runLazy && delete t.skip,
                t
              );
            }),
            (t.prototype.ssrInitiated = function() {
              return this.context && this.context.renderPromises;
            }),
            (t.prototype.getExecuteSsrResult = function() {
              var e,
                t = !1 === this.getOptions().ssr,
                r = this.refreshClient().client.disableNetworkFetches,
                i = { loading: !0, networkStatus: a.c.loading, called: !0, data: void 0 };
              return t && (this.ssrInitiated() || r)
                ? i
                : (this.ssrInitiated() &&
                    (e =
                      this.context.renderPromises.addQueryPromise(
                        this,
                        this.getExecuteResult
                      ) || i),
                  e);
            }),
            (t.prototype.prepareObservableQueryOptions = function() {
              var e = this.getOptions();
              this.verifyDocumentType(e.query, i.b.Query);
              var t = e.displayName || 'Query';
              return (
                !this.ssrInitiated() ||
                  ('network-only' !== e.fetchPolicy &&
                    'cache-and-network' !== e.fetchPolicy) ||
                  (e.fetchPolicy = 'cache-first'),
                Object(n.a)(Object(n.a)({}, e), {
                  displayName: t,
                  context: e.context,
                  metadata: { reactComponent: { displayName: t } }
                })
              );
            }),
            (t.prototype.initializeObservableQuery = function() {
              var e, t;
              if (
                (this.ssrInitiated() &&
                  (this.currentObservable.query = this.context.renderPromises.getSSRObservable(
                    this.getOptions()
                  )),
                !this.currentObservable.query)
              ) {
                var r = this.prepareObservableQueryOptions();
                (this.previousData.observableQueryOptions = Object(n.a)(
                  Object(n.a)({}, r),
                  { children: null }
                )),
                  (this.currentObservable.query = this.refreshClient().client.watchQuery(
                    Object(n.a)({}, r)
                  )),
                  this.ssrInitiated() &&
                    (null ===
                      (t =
                        null === (e = this.context) || void 0 === e
                          ? void 0
                          : e.renderPromises) ||
                      void 0 === t ||
                      t.registerSSRObservable(this.currentObservable.query, r));
              }
            }),
            (t.prototype.updateObservableQuery = function() {
              if (this.currentObservable.query) {
                var e = Object(n.a)(
                  Object(n.a)({}, this.prepareObservableQueryOptions()),
                  { children: null }
                );
                Object(c.a)(e, this.previousData.observableQueryOptions) ||
                  ((this.previousData.observableQueryOptions = e),
                  this.currentObservable.query.setOptions(e).catch(function() {}));
              } else this.initializeObservableQuery();
            }),
            (t.prototype.startQuerySubscription = function() {
              var e = this;
              if (!this.currentObservable.subscription && !this.getOptions().skip) {
                var t = this.currentObservable.query;
                this.currentObservable.subscription = t.subscribe({
                  next: function(t) {
                    var r = t.loading,
                      i = t.networkStatus,
                      n = t.data,
                      s = e.previousData.result;
                    (s &&
                      s.loading === r &&
                      s.networkStatus === i &&
                      Object(c.a)(s.data, n)) ||
                      e.onNewData();
                  },
                  error: function(t) {
                    if ((e.resubscribeToQuery(), !t.hasOwnProperty('graphQLErrors')))
                      throw t;
                    var r = e.previousData.result;
                    ((r && r.loading) || !Object(c.a)(t, e.previousData.error)) &&
                      ((e.previousData.error = t), e.onNewData());
                  }
                });
              }
            }),
            (t.prototype.resubscribeToQuery = function() {
              this.removeQuerySubscription();
              var e = this.currentObservable.query.getLastError(),
                t = this.currentObservable.query.getLastResult();
              this.currentObservable.query.resetLastResults(),
                this.startQuerySubscription(),
                Object.assign(this.currentObservable.query, {
                  lastError: e,
                  lastResult: t
                });
            }),
            (t.prototype.getQueryResult = function() {
              var e = this.observableQueryFields(),
                t = this.getOptions();
              if (t.skip)
                e = Object(n.a)(Object(n.a)({}, e), {
                  data: void 0,
                  error: void 0,
                  loading: !1,
                  called: !0
                });
              else {
                var r = this.currentObservable.query.getCurrentResult(),
                  i = r.loading,
                  s = r.partial,
                  o = r.networkStatus,
                  c = r.errors,
                  u = r.error,
                  l = r.data;
                if (
                  (c && c.length > 0 && (u = new a.b({ graphQLErrors: c })),
                  (e = Object(n.a)(Object(n.a)({}, e), {
                    loading: i,
                    networkStatus: o,
                    error: u,
                    called: !0
                  })),
                  i)
                ) {
                  var p = this.previousData.result && this.previousData.result.data;
                  e.data = p && l ? Object(n.a)(Object(n.a)({}, p), l) : p || l;
                } else if (u)
                  Object.assign(e, {
                    data: (this.currentObservable.query.getLastResult() || {}).data
                  });
                else {
                  var h = this.currentObservable.query.options.fetchPolicy;
                  if (t.partialRefetch && !l && s && 'cache-only' !== h)
                    return (
                      Object.assign(e, { loading: !0, networkStatus: a.c.loading }),
                      e.refetch(),
                      e
                    );
                  e.data = l;
                }
              }
              return (
                (e.client = this.client),
                (this.previousData.loading =
                  (this.previousData.result && this.previousData.result.loading) || !1),
                (this.previousData.result = e),
                e
              );
            }),
            (t.prototype.handleErrorOrCompleted = function() {
              var e = this.currentObservable.query;
              if (e) {
                var t = e.getCurrentResult(),
                  r = t.data,
                  i = t.loading,
                  n = t.error;
                if (!i) {
                  var s = this.getOptions(),
                    o = s.query,
                    a = s.variables,
                    u = s.onCompleted,
                    l = s.onError;
                  if (
                    this.previousOptions &&
                    !this.previousData.loading &&
                    Object(c.a)(this.previousOptions.query, o) &&
                    Object(c.a)(this.previousOptions.variables, a)
                  )
                    return;
                  u && !n ? u(r) : l && n && l(n);
                }
              }
            }),
            (t.prototype.removeQuerySubscription = function() {
              this.currentObservable.subscription &&
                (this.currentObservable.subscription.unsubscribe(),
                delete this.currentObservable.subscription);
            }),
            (t.prototype.observableQueryFields = function() {
              return {
                variables: this.currentObservable.query.variables,
                refetch: this.obsRefetch,
                fetchMore: this.obsFetchMore,
                updateQuery: this.obsUpdateQuery,
                startPolling: this.obsStartPolling,
                stopPolling: this.obsStopPolling,
                subscribeToMore: this.obsSubscribeToMore
              };
            }),
            t
          );
        })(l);
      function h(e, t, r) {
        void 0 === r && (r = !1);
        var o = Object(s.useContext)(Object(i.c)()),
          a = Object(s.useReducer)(function(e) {
            return e + 1;
          }, 0),
          u = a[0],
          l = a[1],
          h = t ? Object(n.a)(Object(n.a)({}, t), { query: e }) : { query: e },
          f = Object(s.useRef)(!0),
          d = Object(s.useRef)(!1),
          v = Object(s.useRef)(),
          b =
            v.current ||
            new p({
              options: h,
              context: o,
              onNewData: function() {
                !b.ssrInitiated() && f.current ? (d.current = !0) : l();
              }
            });
        b.setOptions(h),
          (b.context = o),
          b.ssrInitiated() && !v.current && (v.current = b);
        var y,
          O,
          m,
          E = {
            options: Object(n.a)(Object(n.a)({}, h), {
              onError: void 0,
              onCompleted: void 0
            }),
            context: o,
            tick: u
          },
          N =
            ((y = function() {
              return r ? b.executeLazy() : b.execute();
            }),
            (O = E),
            ((m = Object(s.useRef)()).current && Object(c.a)(O, m.current.key)) ||
              (m.current = { key: O, value: y() }),
            m.current.value),
          x = r ? N[1] : N;
        return (
          Object(s.useEffect)(function() {
            v.current || (v.current = b),
              (f.current = !1),
              d.current && ((d.current = !1), l());
          }),
          Object(s.useEffect)(
            function() {
              return b.afterExecute({ lazy: r });
            },
            [x.loading, x.networkStatus, x.error, x.data]
          ),
          Object(s.useEffect)(function() {
            return function() {
              return b.cleanup();
            };
          }, []),
          N
        );
      }
      function f(e, t) {
        return h(e, t, !1);
      }
      var d = (function(e) {
        function t(t) {
          var r = t.options,
            n = t.context,
            s = t.result,
            o = t.setResult,
            a = e.call(this, r, n) || this;
          return (
            (a.runMutation = function(e) {
              void 0 === e && (e = {}), a.onMutationStart();
              var t = a.generateNewMutationId();
              return a
                .mutate(e)
                .then(function(e) {
                  return a.onMutationCompleted(e, t), e;
                })
                .catch(function(e) {
                  if ((a.onMutationError(e, t), !a.getOptions().onError)) throw e;
                });
            }),
            a.verifyDocumentType(r.mutation, i.b.Mutation),
            (a.result = s),
            (a.setResult = o),
            (a.mostRecentMutationId = 0),
            a
          );
        }
        return (
          Object(n.c)(t, e),
          (t.prototype.execute = function(e) {
            return (
              (this.isMounted = !0),
              this.verifyDocumentType(this.getOptions().mutation, i.b.Mutation),
              (e.client = this.refreshClient().client),
              [this.runMutation, e]
            );
          }),
          (t.prototype.afterExecute = function() {
            return (this.isMounted = !0), this.unmount.bind(this);
          }),
          (t.prototype.cleanup = function() {}),
          (t.prototype.mutate = function(e) {
            var t = this.getOptions(),
              r = t.mutation,
              i = t.variables,
              s = t.optimisticResponse,
              o = t.update,
              a = t.context,
              c = void 0 === a ? {} : a,
              u = t.awaitRefetchQueries,
              l = void 0 !== u && u,
              p = t.fetchPolicy,
              h = Object(n.a)({}, e),
              f = Object.assign({}, i, h.variables);
            return (
              delete h.variables,
              this.refreshClient().client.mutate(
                Object(n.a)(
                  {
                    mutation: r,
                    optimisticResponse: s,
                    refetchQueries: h.refetchQueries || this.getOptions().refetchQueries,
                    awaitRefetchQueries: l,
                    update: o,
                    context: c,
                    fetchPolicy: p,
                    variables: f
                  },
                  h
                )
              )
            );
          }),
          (t.prototype.onMutationStart = function() {
            this.result.loading ||
              this.getOptions().ignoreResults ||
              this.updateResult({ loading: !0, error: void 0, data: void 0, called: !0 });
          }),
          (t.prototype.onMutationCompleted = function(e, t) {
            var r = this.getOptions(),
              i = r.onCompleted,
              n = r.ignoreResults,
              s = e.data,
              o = e.errors,
              c = o && o.length > 0 ? new a.b({ graphQLErrors: o }) : void 0;
            this.isMostRecentMutation(t) &&
              !n &&
              this.updateResult({ called: !0, loading: !1, data: s, error: c }),
              i && i(s);
          }),
          (t.prototype.onMutationError = function(e, t) {
            var r = this.getOptions().onError;
            this.isMostRecentMutation(t) &&
              this.updateResult({ loading: !1, error: e, data: void 0, called: !0 }),
              r && r(e);
          }),
          (t.prototype.generateNewMutationId = function() {
            return ++this.mostRecentMutationId;
          }),
          (t.prototype.isMostRecentMutation = function(e) {
            return this.mostRecentMutationId === e;
          }),
          (t.prototype.updateResult = function(e) {
            !this.isMounted ||
              (this.previousResult && Object(c.a)(this.previousResult, e)) ||
              (this.setResult(e), (this.previousResult = e));
          }),
          t
        );
      })(l);
      function v(e, t) {
        var r = Object(s.useContext)(Object(i.c)()),
          o = Object(s.useState)({ called: !1, loading: !1 }),
          a = o[0],
          c = o[1],
          u = t ? Object(n.a)(Object(n.a)({}, t), { mutation: e }) : { mutation: e },
          l = Object(s.useRef)();
        var p =
          (l.current ||
            (l.current = new d({ options: u, context: r, result: a, setResult: c })),
          l.current);
        return (
          p.setOptions(u),
          (p.context = r),
          Object(s.useEffect)(function() {
            return p.afterExecute();
          }),
          p.execute(a)
        );
      }
      var b = (function(e) {
        function t(t) {
          var r = t.options,
            i = t.context,
            n = t.setResult,
            s = e.call(this, r, i) || this;
          return (s.currentObservable = {}), (s.setResult = n), s.initialize(r), s;
        }
        return (
          Object(n.c)(t, e),
          (t.prototype.execute = function(e) {
            if (!0 === this.getOptions().skip)
              return (
                this.cleanup(),
                {
                  loading: !1,
                  error: void 0,
                  data: void 0,
                  variables: this.getOptions().variables
                }
              );
            var t = e;
            this.refreshClient().isNew && (t = this.getLoadingResult());
            var r = this.getOptions().shouldResubscribe;
            return (
              'function' == typeof r && (r = !!r(this.getOptions())),
              !1 !== r &&
                this.previousOptions &&
                Object.keys(this.previousOptions).length > 0 &&
                (this.previousOptions.subscription !== this.getOptions().subscription ||
                  !Object(c.a)(
                    this.previousOptions.variables,
                    this.getOptions().variables
                  ) ||
                  this.previousOptions.skip !== this.getOptions().skip) &&
                (this.cleanup(), (t = this.getLoadingResult())),
              this.initialize(this.getOptions()),
              this.startSubscription(),
              (this.previousOptions = this.getOptions()),
              Object(n.a)(Object(n.a)({}, t), { variables: this.getOptions().variables })
            );
          }),
          (t.prototype.afterExecute = function() {
            this.isMounted = !0;
          }),
          (t.prototype.cleanup = function() {
            this.endSubscription(), delete this.currentObservable.query;
          }),
          (t.prototype.initialize = function(e) {
            this.currentObservable.query ||
              !0 === this.getOptions().skip ||
              (this.currentObservable.query = this.refreshClient().client.subscribe({
                query: e.subscription,
                variables: e.variables,
                fetchPolicy: e.fetchPolicy
              }));
          }),
          (t.prototype.startSubscription = function() {
            this.currentObservable.subscription ||
              (this.currentObservable.subscription = this.currentObservable.query.subscribe(
                {
                  next: this.updateCurrentData.bind(this),
                  error: this.updateError.bind(this),
                  complete: this.completeSubscription.bind(this)
                }
              ));
          }),
          (t.prototype.getLoadingResult = function() {
            return { loading: !0, error: void 0, data: void 0 };
          }),
          (t.prototype.updateResult = function(e) {
            this.isMounted && this.setResult(e);
          }),
          (t.prototype.updateCurrentData = function(e) {
            var t = this.getOptions().onSubscriptionData;
            this.updateResult({ data: e.data, loading: !1, error: void 0 }),
              t && t({ client: this.refreshClient().client, subscriptionData: e });
          }),
          (t.prototype.updateError = function(e) {
            this.updateResult({ error: e, loading: !1 });
          }),
          (t.prototype.completeSubscription = function() {
            var e = this.getOptions().onSubscriptionComplete;
            e && e(), this.endSubscription();
          }),
          (t.prototype.endSubscription = function() {
            this.currentObservable.subscription &&
              (this.currentObservable.subscription.unsubscribe(),
              delete this.currentObservable.subscription);
          }),
          t
        );
      })(l);
      function y(e, t) {
        var r = Object(s.useContext)(Object(i.c)()),
          o = t
            ? Object(n.a)(Object(n.a)({}, t), { subscription: e })
            : { subscription: e },
          a = Object(s.useState)({ loading: !o.skip, error: void 0, data: void 0 }),
          c = a[0],
          u = a[1],
          l = Object(s.useRef)();
        var p =
          (l.current || (l.current = new b({ options: o, context: r, setResult: u })),
          l.current);
        return (
          p.setOptions(o, !0),
          (p.context = r),
          Object(s.useEffect)(function() {
            return p.afterExecute();
          }),
          Object(s.useEffect)(function() {
            return p.cleanup.bind(p);
          }, []),
          p.execute(c)
        );
      }
      function O() {
        var e = o.a.useContext(Object(i.c)()).client;
        return Object(u.b)(e, 1), e;
      }
      !(function() {
        function e() {
          (this.queryPromises = new Map()), (this.queryInfoTrie = new Map());
        }
        (e.prototype.registerSSRObservable = function(e, t) {
          this.lookupQueryInfo(t).observable = e;
        }),
          (e.prototype.getSSRObservable = function(e) {
            return this.lookupQueryInfo(e).observable;
          }),
          (e.prototype.addQueryPromise = function(e, t) {
            return this.lookupQueryInfo(e.getOptions()).seen
              ? t()
              : (this.queryPromises.set(
                  e.getOptions(),
                  new Promise(function(t) {
                    t(e.fetchData());
                  })
                ),
                null);
          }),
          (e.prototype.hasPromises = function() {
            return this.queryPromises.size > 0;
          }),
          (e.prototype.consumeAndAwaitPromises = function() {
            var e = this,
              t = [];
            return (
              this.queryPromises.forEach(function(r, i) {
                (e.lookupQueryInfo(i).seen = !0), t.push(r);
              }),
              this.queryPromises.clear(),
              Promise.all(t)
            );
          }),
          (e.prototype.lookupQueryInfo = function(e) {
            var t = this.queryInfoTrie,
              r = e.query,
              i = e.variables,
              n = t.get(r) || new Map();
            t.has(r) || t.set(r, n);
            var s = JSON.stringify(i),
              o = n.get(s) || { seen: !1, observable: null };
            return n.has(s) || n.set(s, o), o;
          });
      })();
    },
    '../../node_modules/graphql-tag/src/index.js': function(e, t, r) {
      var i = r('../../node_modules/graphql/language/parser.mjs').parse;
      function n(e) {
        return e.replace(/[\s,]+/g, ' ').trim();
      }
      var s = {},
        o = {};
      var a = !0;
      var c = !1;
      function u(e) {
        var t = n(e);
        if (s[t]) return s[t];
        var r = i(e, { experimentalFragmentVariables: c });
        if (!r || 'Document' !== r.kind) throw new Error('Not a valid GraphQL document.');
        return (
          (r = (function e(t, r) {
            var i = Object.prototype.toString.call(t);
            if ('[object Array]' === i)
              return t.map(function(t) {
                return e(t, r);
              });
            if ('[object Object]' !== i) throw new Error('Unexpected input.');
            r && t.loc && delete t.loc,
              t.loc && (delete t.loc.startToken, delete t.loc.endToken);
            var n,
              s,
              o,
              a = Object.keys(t);
            for (n in a)
              a.hasOwnProperty(n) &&
                ((s = t[a[n]]),
                ('[object Object]' !== (o = Object.prototype.toString.call(s)) &&
                  '[object Array]' !== o) ||
                  (t[a[n]] = e(s, !0)));
            return t;
          })(
            (r = (function(e) {
              for (var t, r = {}, i = [], s = 0; s < e.definitions.length; s++) {
                var c = e.definitions[s];
                if ('FragmentDefinition' === c.kind) {
                  var u = c.name.value,
                    l = n((t = c.loc).source.body.substring(t.start, t.end));
                  o.hasOwnProperty(u) && !o[u][l]
                    ? (a &&
                        console.warn(
                          'Warning: fragment with name ' +
                            u +
                            ' already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names'
                        ),
                      (o[u][l] = !0))
                    : o.hasOwnProperty(u) || ((o[u] = {}), (o[u][l] = !0)),
                    r[l] || ((r[l] = !0), i.push(c));
                } else i.push(c);
              }
              return (e.definitions = i), e;
            })(r)),
            !1
          )),
          (s[t] = r),
          r
        );
      }
      function l() {
        for (
          var e = Array.prototype.slice.call(arguments),
            t = e[0],
            r = 'string' == typeof t ? t : t[0],
            i = 1;
          i < e.length;
          i++
        )
          e[i] && e[i].kind && 'Document' === e[i].kind
            ? (r += e[i].loc.source.body)
            : (r += e[i]),
            (r += t[i]);
        return u(r);
      }
      (l.default = l),
        (l.resetCaches = function() {
          (s = {}), (o = {});
        }),
        (l.disableFragmentWarnings = function() {
          a = !1;
        }),
        (l.enableExperimentalFragmentVariables = function() {
          c = !0;
        }),
        (l.disableExperimentalFragmentVariables = function() {
          c = !1;
        }),
        (e.exports = l);
    },
    '../../node_modules/graphql/language/parser.mjs': function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'parse', function() {
          return j;
        }),
        r.d(t, 'parseValue', function() {
          return M;
        }),
        r.d(t, 'parseType', function() {
          return P;
        });
      var i = r('../../node_modules/graphql/jsutils/inspect.mjs');
      function n(e, t) {
        if (!Boolean(e)) throw new Error(t);
      }
      function s(e) {
        return (s =
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
      'function' == typeof Symbol && Symbol.iterator,
        'function' == typeof Symbol && Symbol.asyncIterator;
      var o = 'function' == typeof Symbol ? Symbol.toStringTag : '@@toStringTag';
      function a(e, t) {
        for (
          var r, i = /\r\n|[\n\r]/g, n = 1, s = t + 1;
          (r = i.exec(e.body)) && r.index < t;

        )
          (n += 1), (s = t + 1 - (r.index + r[0].length));
        return { line: n, column: s };
      }
      function c(e) {
        return u(e.source, a(e.source, e.start));
      }
      function u(e, t) {
        var r = e.locationOffset.column - 1,
          i = p(r) + e.body,
          n = t.line - 1,
          s = e.locationOffset.line - 1,
          o = t.line + s,
          a = 1 === t.line ? r : 0,
          c = t.column + a,
          u = ''
            .concat(e.name, ':')
            .concat(o, ':')
            .concat(c, '\n'),
          h = i.split(/\r\n|[\n\r]/g),
          f = h[n];
        if (f.length > 120) {
          for (
            var d = Math.floor(c / 80), v = c % 80, b = [], y = 0;
            y < f.length;
            y += 80
          )
            b.push(f.slice(y, y + 80));
          return (
            u +
            l(
              [[''.concat(o), b[0]]].concat(
                b.slice(1, d + 1).map(function(e) {
                  return ['', e];
                }),
                [
                  [' ', p(v - 1) + '^'],
                  ['', b[d + 1]]
                ]
              )
            )
          );
        }
        return (
          u +
          l([
            [''.concat(o - 1), h[n - 1]],
            [''.concat(o), f],
            ['', p(c - 1) + '^'],
            [''.concat(o + 1), h[n + 1]]
          ])
        );
      }
      function l(e) {
        var t = e.filter(function(e) {
            e[0];
            return void 0 !== e[1];
          }),
          r = Math.max.apply(
            Math,
            t.map(function(e) {
              return e[0].length;
            })
          );
        return t
          .map(function(e) {
            var t,
              i = e[0],
              n = e[1];
            return p(r - (t = i).length) + t + (n ? ' | ' + n : ' |');
          })
          .join('\n');
      }
      function p(e) {
        return Array(e + 1).join(' ');
      }
      function h(e) {
        return (h =
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
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function d(e, t) {
        return !t || ('object' !== h(t) && 'function' != typeof t) ? v(e) : t;
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        var t = 'function' == typeof Map ? new Map() : void 0;
        return (b = function(e) {
          if (
            null === e ||
            ((r = e), -1 === Function.toString.call(r).indexOf('[native code]'))
          )
            return e;
          var r;
          if ('function' != typeof e)
            throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, i);
          }
          function i() {
            return y(e, arguments, E(this).constructor);
          }
          return (
            (i.prototype = Object.create(e.prototype, {
              constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 }
            })),
            m(i, e)
          );
        })(e);
      }
      function y(e, t, r) {
        return (y = O()
          ? Reflect.construct
          : function(e, t, r) {
              var i = [null];
              i.push.apply(i, t);
              var n = new (Function.bind.apply(e, i))();
              return r && m(n, r.prototype), n;
            }).apply(null, arguments);
      }
      function O() {
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
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var N = (function(e) {
        !(function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && m(e, t);
        })(h, e);
        var t,
          r,
          i,
          n,
          l,
          p =
            ((t = h),
            (r = O()),
            function() {
              var e,
                i = E(t);
              if (r) {
                var n = E(this).constructor;
                e = Reflect.construct(i, arguments, n);
              } else e = i.apply(this, arguments);
              return d(this, e);
            });
        function h(e, t, r, i, n, o, c) {
          var u, l, f, b, y;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, h),
            (y = p.call(this, e));
          var O,
            m = Array.isArray(t) ? (0 !== t.length ? t : void 0) : t ? [t] : void 0,
            E = r;
          !E && m && (E = null === (O = m[0].loc) || void 0 === O ? void 0 : O.source);
          var N,
            x = i;
          !x &&
            m &&
            (x = m.reduce(function(e, t) {
              return t.loc && e.push(t.loc.start), e;
            }, [])),
            x && 0 === x.length && (x = void 0),
            i && r
              ? (N = i.map(function(e) {
                  return a(r, e);
                }))
              : m &&
                (N = m.reduce(function(e, t) {
                  return t.loc && e.push(a(t.loc.source, t.loc.start)), e;
                }, []));
          var T,
            g = c;
          if (null == g && null != o) {
            var k = o.extensions;
            'object' == s((T = k)) && null !== T && (g = k);
          }
          return (
            Object.defineProperties(v(y), {
              name: { value: 'GraphQLError' },
              message: { value: e, enumerable: !0, writable: !0 },
              locations: {
                value: null !== (u = N) && void 0 !== u ? u : void 0,
                enumerable: null != N
              },
              path: { value: null != n ? n : void 0, enumerable: null != n },
              nodes: { value: null != m ? m : void 0 },
              source: { value: null !== (l = E) && void 0 !== l ? l : void 0 },
              positions: { value: null !== (f = x) && void 0 !== f ? f : void 0 },
              originalError: { value: o },
              extensions: {
                value: null !== (b = g) && void 0 !== b ? b : void 0,
                enumerable: null != g
              }
            }),
            (null == o
            ? void 0
            : o.stack)
              ? (Object.defineProperty(v(y), 'stack', {
                  value: o.stack,
                  writable: !0,
                  configurable: !0
                }),
                d(y))
              : (Error.captureStackTrace
                  ? Error.captureStackTrace(v(y), h)
                  : Object.defineProperty(v(y), 'stack', {
                      value: Error().stack,
                      writable: !0,
                      configurable: !0
                    }),
                y)
          );
        }
        return (
          (i = h),
          (n = [
            {
              key: 'toString',
              value: function() {
                return (function(e) {
                  var t = e.message;
                  if (e.nodes)
                    for (var r = 0, i = e.nodes; r < i.length; r++) {
                      var n = i[r];
                      n.loc && (t += '\n\n' + c(n.loc));
                    }
                  else if (e.source && e.locations)
                    for (var s = 0, o = e.locations; s < o.length; s++) {
                      var a = o[s];
                      t += '\n\n' + u(e.source, a);
                    }
                  return t;
                })(this);
              }
            },
            {
              key: o,
              get: function() {
                return 'Object';
              }
            }
          ]) && f(i.prototype, n),
          l && f(i, l),
          h
        );
      })(b(Error));
      function x(e, t, r) {
        return new N('Syntax Error: '.concat(r), void 0, e, [t]);
      }
      var T = r('../../node_modules/graphql/language/kinds.mjs');
      function g(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var k = (function() {
          function e(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'GraphQL request',
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { line: 1, column: 1 };
            (this.body = e),
              (this.name = t),
              (this.locationOffset = r),
              this.locationOffset.line > 0 ||
                n(0, 'line in locationOffset is 1-indexed and must be positive.'),
              this.locationOffset.column > 0 ||
                n(0, 'column in locationOffset is 1-indexed and must be positive.');
          }
          var t, r, i;
          return (
            (t = e),
            (r = [
              {
                key: o,
                get: function() {
                  return 'Source';
                }
              }
            ]) && g(t.prototype, r),
            i && g(t, i),
            e
          );
        })(),
        _ = Object.freeze({
          QUERY: 'QUERY',
          MUTATION: 'MUTATION',
          SUBSCRIPTION: 'SUBSCRIPTION',
          FIELD: 'FIELD',
          FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
          FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
          INLINE_FRAGMENT: 'INLINE_FRAGMENT',
          VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
          SCHEMA: 'SCHEMA',
          SCALAR: 'SCALAR',
          OBJECT: 'OBJECT',
          FIELD_DEFINITION: 'FIELD_DEFINITION',
          ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
          INTERFACE: 'INTERFACE',
          UNION: 'UNION',
          ENUM: 'ENUM',
          ENUM_VALUE: 'ENUM_VALUE',
          INPUT_OBJECT: 'INPUT_OBJECT',
          INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
        }),
        I = Object.freeze({
          SOF: '<SOF>',
          EOF: '<EOF>',
          BANG: '!',
          DOLLAR: '$',
          AMP: '&',
          PAREN_L: '(',
          PAREN_R: ')',
          SPREAD: '...',
          COLON: ':',
          EQUALS: '=',
          AT: '@',
          BRACKET_L: '[',
          BRACKET_R: ']',
          BRACE_L: '{',
          PIPE: '|',
          BRACE_R: '}',
          NAME: 'Name',
          INT: 'Int',
          FLOAT: 'Float',
          STRING: 'String',
          BLOCK_STRING: 'BlockString',
          COMMENT: 'Comment'
        }),
        D = r('../../node_modules/graphql/language/ast.mjs'),
        A = r('../../node_modules/graphql/language/blockString.mjs'),
        R = (function() {
          function e(e) {
            var t = new D.b(I.SOF, 0, 0, 0, 0, null);
            (this.source = e),
              (this.lastToken = t),
              (this.token = t),
              (this.line = 1),
              (this.lineStart = 0);
          }
          var t = e.prototype;
          return (
            (t.advance = function() {
              return (this.lastToken = this.token), (this.token = this.lookahead());
            }),
            (t.lookahead = function() {
              var e = this.token;
              if (e.kind !== I.EOF)
                do {
                  var t;
                  e = null !== (t = e.next) && void 0 !== t ? t : (e.next = w(this, e));
                } while (e.kind === I.COMMENT);
              return e;
            }),
            e
          );
        })();
      function S(e) {
        return isNaN(e)
          ? I.EOF
          : e < 127
          ? JSON.stringify(String.fromCharCode(e))
          : '"\\u'.concat(('00' + e.toString(16).toUpperCase()).slice(-4), '"');
      }
      function w(e, t) {
        var r = e.source,
          i = r.body,
          n = i.length,
          s = (function(e, t, r) {
            var i = e.length,
              n = t;
            for (; n < i; ) {
              var s = e.charCodeAt(n);
              if (9 === s || 32 === s || 44 === s || 65279 === s) ++n;
              else if (10 === s) ++n, ++r.line, (r.lineStart = n);
              else {
                if (13 !== s) break;
                10 === e.charCodeAt(n + 1) ? (n += 2) : ++n, ++r.line, (r.lineStart = n);
              }
            }
            return n;
          })(i, t.end, e),
          o = e.line,
          a = 1 + s - e.lineStart;
        if (s >= n) return new D.b(I.EOF, n, n, o, a, t);
        var c = i.charCodeAt(s);
        switch (c) {
          case 33:
            return new D.b(I.BANG, s, s + 1, o, a, t);
          case 35:
            return (function(e, t, r, i, n) {
              var s,
                o = e.body,
                a = t;
              do {
                s = o.charCodeAt(++a);
              } while (!isNaN(s) && (s > 31 || 9 === s));
              return new D.b(I.COMMENT, t, a, r, i, n, o.slice(t + 1, a));
            })(r, s, o, a, t);
          case 36:
            return new D.b(I.DOLLAR, s, s + 1, o, a, t);
          case 38:
            return new D.b(I.AMP, s, s + 1, o, a, t);
          case 40:
            return new D.b(I.PAREN_L, s, s + 1, o, a, t);
          case 41:
            return new D.b(I.PAREN_R, s, s + 1, o, a, t);
          case 46:
            if (46 === i.charCodeAt(s + 1) && 46 === i.charCodeAt(s + 2))
              return new D.b(I.SPREAD, s, s + 3, o, a, t);
            break;
          case 58:
            return new D.b(I.COLON, s, s + 1, o, a, t);
          case 61:
            return new D.b(I.EQUALS, s, s + 1, o, a, t);
          case 64:
            return new D.b(I.AT, s, s + 1, o, a, t);
          case 91:
            return new D.b(I.BRACKET_L, s, s + 1, o, a, t);
          case 93:
            return new D.b(I.BRACKET_R, s, s + 1, o, a, t);
          case 123:
            return new D.b(I.BRACE_L, s, s + 1, o, a, t);
          case 124:
            return new D.b(I.PIPE, s, s + 1, o, a, t);
          case 125:
            return new D.b(I.BRACE_R, s, s + 1, o, a, t);
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 95:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            return (function(e, t, r, i, n) {
              var s = e.body,
                o = s.length,
                a = t + 1,
                c = 0;
              for (
                ;
                a !== o &&
                !isNaN((c = s.charCodeAt(a))) &&
                (95 === c ||
                  (c >= 48 && c <= 57) ||
                  (c >= 65 && c <= 90) ||
                  (c >= 97 && c <= 122));

              )
                ++a;
              return new D.b(I.NAME, t, a, r, i, n, s.slice(t, a));
            })(r, s, o, a, t);
          case 45:
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return (function(e, t, r, i, n, s) {
              var o = e.body,
                a = r,
                c = t,
                u = !1;
              45 === a && (a = o.charCodeAt(++c));
              if (48 === a) {
                if ((a = o.charCodeAt(++c)) >= 48 && a <= 57)
                  throw x(
                    e,
                    c,
                    'Invalid number, unexpected digit after 0: '.concat(S(a), '.')
                  );
              } else (c = C(e, c, a)), (a = o.charCodeAt(c));
              46 === a &&
                ((u = !0),
                (a = o.charCodeAt(++c)),
                (c = C(e, c, a)),
                (a = o.charCodeAt(c)));
              (69 !== a && 101 !== a) ||
                ((u = !0),
                (43 !== (a = o.charCodeAt(++c)) && 45 !== a) || (a = o.charCodeAt(++c)),
                (c = C(e, c, a)),
                (a = o.charCodeAt(c)));
              if (
                46 === a ||
                (function(e) {
                  return 95 === e || (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
                })(a)
              )
                throw x(
                  e,
                  c,
                  'Invalid number, expected digit but got: '.concat(S(a), '.')
                );
              return new D.b(u ? I.FLOAT : I.INT, t, c, i, n, s, o.slice(t, c));
            })(r, s, c, o, a, t);
          case 34:
            return 34 === i.charCodeAt(s + 1) && 34 === i.charCodeAt(s + 2)
              ? (function(e, t, r, i, n, s) {
                  var o = e.body,
                    a = t + 3,
                    c = a,
                    u = 0,
                    l = '';
                  for (; a < o.length && !isNaN((u = o.charCodeAt(a))); ) {
                    if (
                      34 === u &&
                      34 === o.charCodeAt(a + 1) &&
                      34 === o.charCodeAt(a + 2)
                    )
                      return (
                        (l += o.slice(c, a)),
                        new D.b(I.BLOCK_STRING, t, a + 3, r, i, n, Object(A.a)(l))
                      );
                    if (u < 32 && 9 !== u && 10 !== u && 13 !== u)
                      throw x(
                        e,
                        a,
                        'Invalid character within String: '.concat(S(u), '.')
                      );
                    10 === u
                      ? (++a, ++s.line, (s.lineStart = a))
                      : 13 === u
                      ? (10 === o.charCodeAt(a + 1) ? (a += 2) : ++a,
                        ++s.line,
                        (s.lineStart = a))
                      : 92 === u &&
                        34 === o.charCodeAt(a + 1) &&
                        34 === o.charCodeAt(a + 2) &&
                        34 === o.charCodeAt(a + 3)
                      ? ((l += o.slice(c, a) + '"""'), (c = a += 4))
                      : ++a;
                  }
                  throw x(e, a, 'Unterminated string.');
                })(r, s, o, a, t, e)
              : (function(e, t, r, i, n) {
                  var s = e.body,
                    o = t + 1,
                    a = o,
                    c = 0,
                    u = '';
                  for (
                    ;
                    o < s.length && !isNaN((c = s.charCodeAt(o))) && 10 !== c && 13 !== c;

                  ) {
                    if (34 === c)
                      return (
                        (u += s.slice(a, o)), new D.b(I.STRING, t, o + 1, r, i, n, u)
                      );
                    if (c < 32 && 9 !== c)
                      throw x(
                        e,
                        o,
                        'Invalid character within String: '.concat(S(c), '.')
                      );
                    if ((++o, 92 === c)) {
                      switch (((u += s.slice(a, o - 1)), (c = s.charCodeAt(o)))) {
                        case 34:
                          u += '"';
                          break;
                        case 47:
                          u += '/';
                          break;
                        case 92:
                          u += '\\';
                          break;
                        case 98:
                          u += '\b';
                          break;
                        case 102:
                          u += '\f';
                          break;
                        case 110:
                          u += '\n';
                          break;
                        case 114:
                          u += '\r';
                          break;
                        case 116:
                          u += '\t';
                          break;
                        case 117:
                          var l =
                            ((h = s.charCodeAt(o + 1)),
                            (f = s.charCodeAt(o + 2)),
                            (d = s.charCodeAt(o + 3)),
                            (v = s.charCodeAt(o + 4)),
                            (L(h) << 12) | (L(f) << 8) | (L(d) << 4) | L(v));
                          if (l < 0) {
                            var p = s.slice(o + 1, o + 5);
                            throw x(
                              e,
                              o,
                              'Invalid character escape sequence: \\u'.concat(p, '.')
                            );
                          }
                          (u += String.fromCharCode(l)), (o += 4);
                          break;
                        default:
                          throw x(
                            e,
                            o,
                            'Invalid character escape sequence: \\'.concat(
                              String.fromCharCode(c),
                              '.'
                            )
                          );
                      }
                      ++o, (a = o);
                    }
                  }
                  var h, f, d, v;
                  throw x(e, o, 'Unterminated string.');
                })(r, s, o, a, t);
        }
        throw x(
          r,
          s,
          (function(e) {
            if (e < 32 && 9 !== e && 10 !== e && 13 !== e)
              return 'Cannot contain the invalid character '.concat(S(e), '.');
            if (39 === e)
              return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
            return 'Cannot parse the unexpected character '.concat(S(e), '.');
          })(c)
        );
      }
      function C(e, t, r) {
        var i = e.body,
          n = t,
          s = r;
        if (s >= 48 && s <= 57) {
          do {
            s = i.charCodeAt(++n);
          } while (s >= 48 && s <= 57);
          return n;
        }
        throw x(e, n, 'Invalid number, expected digit but got: '.concat(S(s), '.'));
      }
      function L(e) {
        return e >= 48 && e <= 57
          ? e - 48
          : e >= 65 && e <= 70
          ? e - 55
          : e >= 97 && e <= 102
          ? e - 87
          : -1;
      }
      function j(e, t) {
        return new F(e, t).parseDocument();
      }
      function M(e, t) {
        var r = new F(e, t);
        r.expectToken(I.SOF);
        var i = r.parseValueLiteral(!1);
        return r.expectToken(I.EOF), i;
      }
      function P(e, t) {
        var r = new F(e, t);
        r.expectToken(I.SOF);
        var i = r.parseTypeReference();
        return r.expectToken(I.EOF), i;
      }
      var F = (function() {
        function e(e, t) {
          var r = 'string' == typeof e ? new k(e) : e;
          r instanceof k ||
            n(0, 'Must provide Source. Received: '.concat(Object(i.a)(r), '.')),
            (this._lexer = new R(r)),
            (this._options = t);
        }
        var t = e.prototype;
        return (
          (t.parseName = function() {
            var e = this.expectToken(I.NAME);
            return { kind: T.a.NAME, value: e.value, loc: this.loc(e) };
          }),
          (t.parseDocument = function() {
            var e = this._lexer.token;
            return {
              kind: T.a.DOCUMENT,
              definitions: this.many(I.SOF, this.parseDefinition, I.EOF),
              loc: this.loc(e)
            };
          }),
          (t.parseDefinition = function() {
            if (this.peek(I.NAME))
              switch (this._lexer.token.value) {
                case 'query':
                case 'mutation':
                case 'subscription':
                  return this.parseOperationDefinition();
                case 'fragment':
                  return this.parseFragmentDefinition();
                case 'schema':
                case 'scalar':
                case 'type':
                case 'interface':
                case 'union':
                case 'enum':
                case 'input':
                case 'directive':
                  return this.parseTypeSystemDefinition();
                case 'extend':
                  return this.parseTypeSystemExtension();
              }
            else {
              if (this.peek(I.BRACE_L)) return this.parseOperationDefinition();
              if (this.peekDescription()) return this.parseTypeSystemDefinition();
            }
            throw this.unexpected();
          }),
          (t.parseOperationDefinition = function() {
            var e = this._lexer.token;
            if (this.peek(I.BRACE_L))
              return {
                kind: T.a.OPERATION_DEFINITION,
                operation: 'query',
                name: void 0,
                variableDefinitions: [],
                directives: [],
                selectionSet: this.parseSelectionSet(),
                loc: this.loc(e)
              };
            var t,
              r = this.parseOperationType();
            return (
              this.peek(I.NAME) && (t = this.parseName()),
              {
                kind: T.a.OPERATION_DEFINITION,
                operation: r,
                name: t,
                variableDefinitions: this.parseVariableDefinitions(),
                directives: this.parseDirectives(!1),
                selectionSet: this.parseSelectionSet(),
                loc: this.loc(e)
              }
            );
          }),
          (t.parseOperationType = function() {
            var e = this.expectToken(I.NAME);
            switch (e.value) {
              case 'query':
                return 'query';
              case 'mutation':
                return 'mutation';
              case 'subscription':
                return 'subscription';
            }
            throw this.unexpected(e);
          }),
          (t.parseVariableDefinitions = function() {
            return this.optionalMany(I.PAREN_L, this.parseVariableDefinition, I.PAREN_R);
          }),
          (t.parseVariableDefinition = function() {
            var e = this._lexer.token;
            return {
              kind: T.a.VARIABLE_DEFINITION,
              variable: this.parseVariable(),
              type: (this.expectToken(I.COLON), this.parseTypeReference()),
              defaultValue: this.expectOptionalToken(I.EQUALS)
                ? this.parseValueLiteral(!0)
                : void 0,
              directives: this.parseDirectives(!0),
              loc: this.loc(e)
            };
          }),
          (t.parseVariable = function() {
            var e = this._lexer.token;
            return (
              this.expectToken(I.DOLLAR),
              { kind: T.a.VARIABLE, name: this.parseName(), loc: this.loc(e) }
            );
          }),
          (t.parseSelectionSet = function() {
            var e = this._lexer.token;
            return {
              kind: T.a.SELECTION_SET,
              selections: this.many(I.BRACE_L, this.parseSelection, I.BRACE_R),
              loc: this.loc(e)
            };
          }),
          (t.parseSelection = function() {
            return this.peek(I.SPREAD) ? this.parseFragment() : this.parseField();
          }),
          (t.parseField = function() {
            var e,
              t,
              r = this._lexer.token,
              i = this.parseName();
            return (
              this.expectOptionalToken(I.COLON)
                ? ((e = i), (t = this.parseName()))
                : (t = i),
              {
                kind: T.a.FIELD,
                alias: e,
                name: t,
                arguments: this.parseArguments(!1),
                directives: this.parseDirectives(!1),
                selectionSet: this.peek(I.BRACE_L) ? this.parseSelectionSet() : void 0,
                loc: this.loc(r)
              }
            );
          }),
          (t.parseArguments = function(e) {
            var t = e ? this.parseConstArgument : this.parseArgument;
            return this.optionalMany(I.PAREN_L, t, I.PAREN_R);
          }),
          (t.parseArgument = function() {
            var e = this._lexer.token,
              t = this.parseName();
            return (
              this.expectToken(I.COLON),
              {
                kind: T.a.ARGUMENT,
                name: t,
                value: this.parseValueLiteral(!1),
                loc: this.loc(e)
              }
            );
          }),
          (t.parseConstArgument = function() {
            var e = this._lexer.token;
            return {
              kind: T.a.ARGUMENT,
              name: this.parseName(),
              value: (this.expectToken(I.COLON), this.parseValueLiteral(!0)),
              loc: this.loc(e)
            };
          }),
          (t.parseFragment = function() {
            var e = this._lexer.token;
            this.expectToken(I.SPREAD);
            var t = this.expectOptionalKeyword('on');
            return !t && this.peek(I.NAME)
              ? {
                  kind: T.a.FRAGMENT_SPREAD,
                  name: this.parseFragmentName(),
                  directives: this.parseDirectives(!1),
                  loc: this.loc(e)
                }
              : {
                  kind: T.a.INLINE_FRAGMENT,
                  typeCondition: t ? this.parseNamedType() : void 0,
                  directives: this.parseDirectives(!1),
                  selectionSet: this.parseSelectionSet(),
                  loc: this.loc(e)
                };
          }),
          (t.parseFragmentDefinition = function() {
            var e,
              t = this._lexer.token;
            return (
              this.expectKeyword('fragment'),
              !0 ===
              (null === (e = this._options) || void 0 === e
                ? void 0
                : e.experimentalFragmentVariables)
                ? {
                    kind: T.a.FRAGMENT_DEFINITION,
                    name: this.parseFragmentName(),
                    variableDefinitions: this.parseVariableDefinitions(),
                    typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet(),
                    loc: this.loc(t)
                  }
                : {
                    kind: T.a.FRAGMENT_DEFINITION,
                    name: this.parseFragmentName(),
                    typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet(),
                    loc: this.loc(t)
                  }
            );
          }),
          (t.parseFragmentName = function() {
            if ('on' === this._lexer.token.value) throw this.unexpected();
            return this.parseName();
          }),
          (t.parseValueLiteral = function(e) {
            var t = this._lexer.token;
            switch (t.kind) {
              case I.BRACKET_L:
                return this.parseList(e);
              case I.BRACE_L:
                return this.parseObject(e);
              case I.INT:
                return (
                  this._lexer.advance(),
                  { kind: T.a.INT, value: t.value, loc: this.loc(t) }
                );
              case I.FLOAT:
                return (
                  this._lexer.advance(),
                  { kind: T.a.FLOAT, value: t.value, loc: this.loc(t) }
                );
              case I.STRING:
              case I.BLOCK_STRING:
                return this.parseStringLiteral();
              case I.NAME:
                switch ((this._lexer.advance(), t.value)) {
                  case 'true':
                    return { kind: T.a.BOOLEAN, value: !0, loc: this.loc(t) };
                  case 'false':
                    return { kind: T.a.BOOLEAN, value: !1, loc: this.loc(t) };
                  case 'null':
                    return { kind: T.a.NULL, loc: this.loc(t) };
                  default:
                    return { kind: T.a.ENUM, value: t.value, loc: this.loc(t) };
                }
              case I.DOLLAR:
                if (!e) return this.parseVariable();
            }
            throw this.unexpected();
          }),
          (t.parseStringLiteral = function() {
            var e = this._lexer.token;
            return (
              this._lexer.advance(),
              {
                kind: T.a.STRING,
                value: e.value,
                block: e.kind === I.BLOCK_STRING,
                loc: this.loc(e)
              }
            );
          }),
          (t.parseList = function(e) {
            var t = this,
              r = this._lexer.token;
            return {
              kind: T.a.LIST,
              values: this.any(
                I.BRACKET_L,
                function() {
                  return t.parseValueLiteral(e);
                },
                I.BRACKET_R
              ),
              loc: this.loc(r)
            };
          }),
          (t.parseObject = function(e) {
            var t = this,
              r = this._lexer.token;
            return {
              kind: T.a.OBJECT,
              fields: this.any(
                I.BRACE_L,
                function() {
                  return t.parseObjectField(e);
                },
                I.BRACE_R
              ),
              loc: this.loc(r)
            };
          }),
          (t.parseObjectField = function(e) {
            var t = this._lexer.token,
              r = this.parseName();
            return (
              this.expectToken(I.COLON),
              {
                kind: T.a.OBJECT_FIELD,
                name: r,
                value: this.parseValueLiteral(e),
                loc: this.loc(t)
              }
            );
          }),
          (t.parseDirectives = function(e) {
            for (var t = []; this.peek(I.AT); ) t.push(this.parseDirective(e));
            return t;
          }),
          (t.parseDirective = function(e) {
            var t = this._lexer.token;
            return (
              this.expectToken(I.AT),
              {
                kind: T.a.DIRECTIVE,
                name: this.parseName(),
                arguments: this.parseArguments(e),
                loc: this.loc(t)
              }
            );
          }),
          (t.parseTypeReference = function() {
            var e,
              t = this._lexer.token;
            return (
              this.expectOptionalToken(I.BRACKET_L)
                ? ((e = this.parseTypeReference()),
                  this.expectToken(I.BRACKET_R),
                  (e = { kind: T.a.LIST_TYPE, type: e, loc: this.loc(t) }))
                : (e = this.parseNamedType()),
              this.expectOptionalToken(I.BANG)
                ? { kind: T.a.NON_NULL_TYPE, type: e, loc: this.loc(t) }
                : e
            );
          }),
          (t.parseNamedType = function() {
            var e = this._lexer.token;
            return { kind: T.a.NAMED_TYPE, name: this.parseName(), loc: this.loc(e) };
          }),
          (t.parseTypeSystemDefinition = function() {
            var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
            if (e.kind === I.NAME)
              switch (e.value) {
                case 'schema':
                  return this.parseSchemaDefinition();
                case 'scalar':
                  return this.parseScalarTypeDefinition();
                case 'type':
                  return this.parseObjectTypeDefinition();
                case 'interface':
                  return this.parseInterfaceTypeDefinition();
                case 'union':
                  return this.parseUnionTypeDefinition();
                case 'enum':
                  return this.parseEnumTypeDefinition();
                case 'input':
                  return this.parseInputObjectTypeDefinition();
                case 'directive':
                  return this.parseDirectiveDefinition();
              }
            throw this.unexpected(e);
          }),
          (t.peekDescription = function() {
            return this.peek(I.STRING) || this.peek(I.BLOCK_STRING);
          }),
          (t.parseDescription = function() {
            if (this.peekDescription()) return this.parseStringLiteral();
          }),
          (t.parseSchemaDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('schema');
            var r = this.parseDirectives(!0),
              i = this.many(I.BRACE_L, this.parseOperationTypeDefinition, I.BRACE_R);
            return {
              kind: T.a.SCHEMA_DEFINITION,
              description: t,
              directives: r,
              operationTypes: i,
              loc: this.loc(e)
            };
          }),
          (t.parseOperationTypeDefinition = function() {
            var e = this._lexer.token,
              t = this.parseOperationType();
            this.expectToken(I.COLON);
            var r = this.parseNamedType();
            return {
              kind: T.a.OPERATION_TYPE_DEFINITION,
              operation: t,
              type: r,
              loc: this.loc(e)
            };
          }),
          (t.parseScalarTypeDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('scalar');
            var r = this.parseName(),
              i = this.parseDirectives(!0);
            return {
              kind: T.a.SCALAR_TYPE_DEFINITION,
              description: t,
              name: r,
              directives: i,
              loc: this.loc(e)
            };
          }),
          (t.parseObjectTypeDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('type');
            var r = this.parseName(),
              i = this.parseImplementsInterfaces(),
              n = this.parseDirectives(!0),
              s = this.parseFieldsDefinition();
            return {
              kind: T.a.OBJECT_TYPE_DEFINITION,
              description: t,
              name: r,
              interfaces: i,
              directives: n,
              fields: s,
              loc: this.loc(e)
            };
          }),
          (t.parseImplementsInterfaces = function() {
            var e = [];
            if (this.expectOptionalKeyword('implements')) {
              this.expectOptionalToken(I.AMP);
              do {
                var t;
                e.push(this.parseNamedType());
              } while (
                this.expectOptionalToken(I.AMP) ||
                (!0 ===
                  (null === (t = this._options) || void 0 === t
                    ? void 0
                    : t.allowLegacySDLImplementsInterfaces) &&
                  this.peek(I.NAME))
              );
            }
            return e;
          }),
          (t.parseFieldsDefinition = function() {
            var e;
            return !0 ===
              (null === (e = this._options) || void 0 === e
                ? void 0
                : e.allowLegacySDLEmptyFields) &&
              this.peek(I.BRACE_L) &&
              this._lexer.lookahead().kind === I.BRACE_R
              ? (this._lexer.advance(), this._lexer.advance(), [])
              : this.optionalMany(I.BRACE_L, this.parseFieldDefinition, I.BRACE_R);
          }),
          (t.parseFieldDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription(),
              r = this.parseName(),
              i = this.parseArgumentDefs();
            this.expectToken(I.COLON);
            var n = this.parseTypeReference(),
              s = this.parseDirectives(!0);
            return {
              kind: T.a.FIELD_DEFINITION,
              description: t,
              name: r,
              arguments: i,
              type: n,
              directives: s,
              loc: this.loc(e)
            };
          }),
          (t.parseArgumentDefs = function() {
            return this.optionalMany(I.PAREN_L, this.parseInputValueDef, I.PAREN_R);
          }),
          (t.parseInputValueDef = function() {
            var e = this._lexer.token,
              t = this.parseDescription(),
              r = this.parseName();
            this.expectToken(I.COLON);
            var i,
              n = this.parseTypeReference();
            this.expectOptionalToken(I.EQUALS) && (i = this.parseValueLiteral(!0));
            var s = this.parseDirectives(!0);
            return {
              kind: T.a.INPUT_VALUE_DEFINITION,
              description: t,
              name: r,
              type: n,
              defaultValue: i,
              directives: s,
              loc: this.loc(e)
            };
          }),
          (t.parseInterfaceTypeDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('interface');
            var r = this.parseName(),
              i = this.parseImplementsInterfaces(),
              n = this.parseDirectives(!0),
              s = this.parseFieldsDefinition();
            return {
              kind: T.a.INTERFACE_TYPE_DEFINITION,
              description: t,
              name: r,
              interfaces: i,
              directives: n,
              fields: s,
              loc: this.loc(e)
            };
          }),
          (t.parseUnionTypeDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('union');
            var r = this.parseName(),
              i = this.parseDirectives(!0),
              n = this.parseUnionMemberTypes();
            return {
              kind: T.a.UNION_TYPE_DEFINITION,
              description: t,
              name: r,
              directives: i,
              types: n,
              loc: this.loc(e)
            };
          }),
          (t.parseUnionMemberTypes = function() {
            var e = [];
            if (this.expectOptionalToken(I.EQUALS)) {
              this.expectOptionalToken(I.PIPE);
              do {
                e.push(this.parseNamedType());
              } while (this.expectOptionalToken(I.PIPE));
            }
            return e;
          }),
          (t.parseEnumTypeDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('enum');
            var r = this.parseName(),
              i = this.parseDirectives(!0),
              n = this.parseEnumValuesDefinition();
            return {
              kind: T.a.ENUM_TYPE_DEFINITION,
              description: t,
              name: r,
              directives: i,
              values: n,
              loc: this.loc(e)
            };
          }),
          (t.parseEnumValuesDefinition = function() {
            return this.optionalMany(I.BRACE_L, this.parseEnumValueDefinition, I.BRACE_R);
          }),
          (t.parseEnumValueDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription(),
              r = this.parseName(),
              i = this.parseDirectives(!0);
            return {
              kind: T.a.ENUM_VALUE_DEFINITION,
              description: t,
              name: r,
              directives: i,
              loc: this.loc(e)
            };
          }),
          (t.parseInputObjectTypeDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('input');
            var r = this.parseName(),
              i = this.parseDirectives(!0),
              n = this.parseInputFieldsDefinition();
            return {
              kind: T.a.INPUT_OBJECT_TYPE_DEFINITION,
              description: t,
              name: r,
              directives: i,
              fields: n,
              loc: this.loc(e)
            };
          }),
          (t.parseInputFieldsDefinition = function() {
            return this.optionalMany(I.BRACE_L, this.parseInputValueDef, I.BRACE_R);
          }),
          (t.parseTypeSystemExtension = function() {
            var e = this._lexer.lookahead();
            if (e.kind === I.NAME)
              switch (e.value) {
                case 'schema':
                  return this.parseSchemaExtension();
                case 'scalar':
                  return this.parseScalarTypeExtension();
                case 'type':
                  return this.parseObjectTypeExtension();
                case 'interface':
                  return this.parseInterfaceTypeExtension();
                case 'union':
                  return this.parseUnionTypeExtension();
                case 'enum':
                  return this.parseEnumTypeExtension();
                case 'input':
                  return this.parseInputObjectTypeExtension();
              }
            throw this.unexpected(e);
          }),
          (t.parseSchemaExtension = function() {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('schema');
            var t = this.parseDirectives(!0),
              r = this.optionalMany(
                I.BRACE_L,
                this.parseOperationTypeDefinition,
                I.BRACE_R
              );
            if (0 === t.length && 0 === r.length) throw this.unexpected();
            return {
              kind: T.a.SCHEMA_EXTENSION,
              directives: t,
              operationTypes: r,
              loc: this.loc(e)
            };
          }),
          (t.parseScalarTypeExtension = function() {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('scalar');
            var t = this.parseName(),
              r = this.parseDirectives(!0);
            if (0 === r.length) throw this.unexpected();
            return {
              kind: T.a.SCALAR_TYPE_EXTENSION,
              name: t,
              directives: r,
              loc: this.loc(e)
            };
          }),
          (t.parseObjectTypeExtension = function() {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('type');
            var t = this.parseName(),
              r = this.parseImplementsInterfaces(),
              i = this.parseDirectives(!0),
              n = this.parseFieldsDefinition();
            if (0 === r.length && 0 === i.length && 0 === n.length)
              throw this.unexpected();
            return {
              kind: T.a.OBJECT_TYPE_EXTENSION,
              name: t,
              interfaces: r,
              directives: i,
              fields: n,
              loc: this.loc(e)
            };
          }),
          (t.parseInterfaceTypeExtension = function() {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('interface');
            var t = this.parseName(),
              r = this.parseImplementsInterfaces(),
              i = this.parseDirectives(!0),
              n = this.parseFieldsDefinition();
            if (0 === r.length && 0 === i.length && 0 === n.length)
              throw this.unexpected();
            return {
              kind: T.a.INTERFACE_TYPE_EXTENSION,
              name: t,
              interfaces: r,
              directives: i,
              fields: n,
              loc: this.loc(e)
            };
          }),
          (t.parseUnionTypeExtension = function() {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('union');
            var t = this.parseName(),
              r = this.parseDirectives(!0),
              i = this.parseUnionMemberTypes();
            if (0 === r.length && 0 === i.length) throw this.unexpected();
            return {
              kind: T.a.UNION_TYPE_EXTENSION,
              name: t,
              directives: r,
              types: i,
              loc: this.loc(e)
            };
          }),
          (t.parseEnumTypeExtension = function() {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('enum');
            var t = this.parseName(),
              r = this.parseDirectives(!0),
              i = this.parseEnumValuesDefinition();
            if (0 === r.length && 0 === i.length) throw this.unexpected();
            return {
              kind: T.a.ENUM_TYPE_EXTENSION,
              name: t,
              directives: r,
              values: i,
              loc: this.loc(e)
            };
          }),
          (t.parseInputObjectTypeExtension = function() {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('input');
            var t = this.parseName(),
              r = this.parseDirectives(!0),
              i = this.parseInputFieldsDefinition();
            if (0 === r.length && 0 === i.length) throw this.unexpected();
            return {
              kind: T.a.INPUT_OBJECT_TYPE_EXTENSION,
              name: t,
              directives: r,
              fields: i,
              loc: this.loc(e)
            };
          }),
          (t.parseDirectiveDefinition = function() {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('directive'), this.expectToken(I.AT);
            var r = this.parseName(),
              i = this.parseArgumentDefs(),
              n = this.expectOptionalKeyword('repeatable');
            this.expectKeyword('on');
            var s = this.parseDirectiveLocations();
            return {
              kind: T.a.DIRECTIVE_DEFINITION,
              description: t,
              name: r,
              arguments: i,
              repeatable: n,
              locations: s,
              loc: this.loc(e)
            };
          }),
          (t.parseDirectiveLocations = function() {
            this.expectOptionalToken(I.PIPE);
            var e = [];
            do {
              e.push(this.parseDirectiveLocation());
            } while (this.expectOptionalToken(I.PIPE));
            return e;
          }),
          (t.parseDirectiveLocation = function() {
            var e = this._lexer.token,
              t = this.parseName();
            if (void 0 !== _[t.value]) return t;
            throw this.unexpected(e);
          }),
          (t.loc = function(e) {
            var t;
            if (
              !0 !==
              (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation)
            )
              return new D.a(e, this._lexer.lastToken, this._lexer.source);
          }),
          (t.peek = function(e) {
            return this._lexer.token.kind === e;
          }),
          (t.expectToken = function(e) {
            var t = this._lexer.token;
            if (t.kind === e) return this._lexer.advance(), t;
            throw x(
              this._lexer.source,
              t.start,
              'Expected '.concat(B(e), ', found ').concat(q(t), '.')
            );
          }),
          (t.expectOptionalToken = function(e) {
            var t = this._lexer.token;
            if (t.kind === e) return this._lexer.advance(), t;
          }),
          (t.expectKeyword = function(e) {
            var t = this._lexer.token;
            if (t.kind !== I.NAME || t.value !== e)
              throw x(
                this._lexer.source,
                t.start,
                'Expected "'.concat(e, '", found ').concat(q(t), '.')
              );
            this._lexer.advance();
          }),
          (t.expectOptionalKeyword = function(e) {
            var t = this._lexer.token;
            return t.kind === I.NAME && t.value === e && (this._lexer.advance(), !0);
          }),
          (t.unexpected = function(e) {
            var t = null != e ? e : this._lexer.token;
            return x(this._lexer.source, t.start, 'Unexpected '.concat(q(t), '.'));
          }),
          (t.any = function(e, t, r) {
            this.expectToken(e);
            for (var i = []; !this.expectOptionalToken(r); ) i.push(t.call(this));
            return i;
          }),
          (t.optionalMany = function(e, t, r) {
            if (this.expectOptionalToken(e)) {
              var i = [];
              do {
                i.push(t.call(this));
              } while (!this.expectOptionalToken(r));
              return i;
            }
            return [];
          }),
          (t.many = function(e, t, r) {
            this.expectToken(e);
            var i = [];
            do {
              i.push(t.call(this));
            } while (!this.expectOptionalToken(r));
            return i;
          }),
          e
        );
      })();
      function q(e) {
        var t = e.value;
        return B(e.kind) + (null != t ? ' "'.concat(t, '"') : '');
      }
      function B(e) {
        return (function(e) {
          return (
            e === I.BANG ||
            e === I.DOLLAR ||
            e === I.AMP ||
            e === I.PAREN_L ||
            e === I.PAREN_R ||
            e === I.SPREAD ||
            e === I.COLON ||
            e === I.EQUALS ||
            e === I.AT ||
            e === I.BRACKET_L ||
            e === I.BRACKET_R ||
            e === I.BRACE_L ||
            e === I.PIPE ||
            e === I.BRACE_R
          );
        })(e)
          ? '"'.concat(e, '"')
          : e;
      }
    }
  }
]);
//# sourceMappingURL=vendors~admin-web-contractParams-container~navigation-web-withSideNav-component.bundle.js.map
