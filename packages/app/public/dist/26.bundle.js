(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [26],
  {
    '../../node_modules/lodash/_basePickBy.js': function(e, n, t) {
      var r = t('../../node_modules/lodash/_baseGet.js'),
        a = t('../../node_modules/lodash/_baseSet.js'),
        c = t('../../node_modules/lodash/_castPath.js');
      e.exports = function(e, n, t) {
        for (var o = -1, u = n.length, l = {}; ++o < u; ) {
          var i = n[o],
            s = r(e, i);
          t(s, i) && a(l, c(i, e), s);
        }
        return l;
      };
    },
    '../../node_modules/lodash/pickBy.js': function(e, n, t) {
      var r = t('../../node_modules/lodash/_arrayMap.js'),
        a = t('../../node_modules/lodash/_baseIteratee.js'),
        c = t('../../node_modules/lodash/_basePickBy.js'),
        o = t('../../node_modules/lodash/_getAllKeysIn.js');
      e.exports = function(e, n) {
        if (null == e) return {};
        var t = r(o(e), function(e) {
          return [e];
        });
        return (
          (n = a(n)),
          c(e, t, function(e, t) {
            return n(e, t[0]);
          })
        );
      };
    },
    './src/core/config.js': function(e, n, t) {
      'use strict';
      t.d(n, 'c', function() {
        return r;
      }),
        t.d(n, 'b', function() {
          return a;
        }),
        t.d(n, 'a', function() {
          return c;
        }),
        t.d(n, 'd', function() {
          return o;
        });
      var { INFURA_PROTOCOL: r } = Object({
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
        { INFURA_NETWORK: a } = Object({
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
        { INFURA_API_KEY: c } = Object({
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
        { NETWORK_NUMBER: o } = Object({
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
        });
    },
    './src/modules/admin/web/contractParams.container.js': function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function() {
          return F;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        a = t.n(r),
        c = t('../../node_modules/react/index.js'),
        o = t.n(c),
        u = t('../../node_modules/prop-types/index.js'),
        l = t.n(u),
        i = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        s = t('../../node_modules/lodash/pickBy.js'),
        d = t.n(s),
        f = t('./src/utils/numbers.js'),
        b = t('./src/modules/styled/uni.js'),
        m = t('./src/modules/contract/contract.hooks.js'),
        p = t('./src/utils/eth.js'),
        O = t('./src/modules/styled/web.js'),
        g = t('../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js'),
        h = t('../../node_modules/graphql-tag/src/index.js'),
        E = t.n(h);
      function j() {
        var e = a()([
          '\n  query {\n    me(filter: { handle: "slava" }) {\n      _id\n      handle\n      balance\n      name\n      email\n    }\n  }\n'
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = a()([
          '\n  subscription {\n    userUpdated {\n      _id\n      balance\n      handle\n      name\n      email\n    }\n  }\n'
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      var w = E()(v()),
        _ = E()(j());
      function R() {
        var { data: e, loading: n, error: t, subscribeToMore: r } = Object(g.c)(_);
        return (
          Object(c.useEffect)(() => {
            var e = r({ document: w });
            return () => e();
          }, [r]),
          n
            ? o.a.createElement(b.d, null, 'Loading...')
            : t
            ? o.a.createElement(b.d, null, 'ERROR: ', t.message)
            : o.a.createElement(
                b.E,
                null,
                o.a.createElement(
                  b.d,
                  null,
                  'handle: ',
                  e.me.handle,
                  ', email: ',
                  e.me.email,
                  ', balance=',
                  e.me.balance
                )
              )
        );
      }
      var y = t('./src/modules/contract/contract.context.js'),
        x = t('./src/styles/index.js');
      function S() {
        var e = a()([
          '\n  query {\n    distributedTokens {\n      balance\n      legacyTokens\n      airdropTokens\n      cashedOut\n      curationRewards\n      airdrop\n      earned\n      rewardFund\n    }\n  }\n'
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      var N = [
          'totalReleased',
          'allocatedRewards',
          'rewardFund',
          'airdropFund',
          'allocatedAirdrops'
        ],
        k = [
          { label: 'Total Released Tokens', contract: 'totalReleased' },
          { label: 'Curation Reward Fund', contract: 'rewardFund', db: 'rewardFund' },
          {
            label: 'Allocated Curation Rewards',
            contract: 'allocatedRewards',
            db: 'curationRewards'
          },
          { label: 'Earnings', db: 'earned' },
          { label: 'Airdrop Fund', contract: 'airdropFund' },
          { label: 'Allocated Airdrops', contract: 'allocatedAirdrops', db: 'airdrop' }
        ],
        B = E()(S());
      function A() {
        var { data: e, loading: n, error: t } = Object(g.c)(B),
          { getState: r, call: a } = Object(m.d)();
        return (
          Object(c.useEffect)(() => {
            a && N.forEach(e => a(e));
          }, [a]),
          n
            ? o.a.createElement(b.d, null, 'Loading...')
            : t
            ? o.a.createElement(b.d, null, 'ERROR: ', t.message)
            : o.a.createElement(
                b.E,
                { m: [4, 2], maxWidth: 75, border: x.b.lightGrey },
                o.a.createElement(
                  b.E,
                  { p: 1, fdirection: 'row' },
                  o.a.createElement(
                    b.w,
                    { br: x.b.lightGrey, mr: 1, flex: 1 },
                    'contract'
                  ),
                  o.a.createElement(b.w, { br: x.b.lightGrey, mr: 1, flex: 1 }, 'db'),
                  o.a.createElement(b.w, { flex: 1, pl: 1 }, 'difference')
                ),
                k.map((n, t) =>
                  o.a.createElement(
                    b.E,
                    { key: t },
                    o.a.createElement(b.d, { p: 1, bg: x.b.lightGrey }, n.label),
                    o.a.createElement(
                      b.E,
                      { p: 1, fdirection: 'row' },
                      o.a.createElement(
                        b.d,
                        { br: x.b.lightGrey, mr: 1, flex: 1 },
                        r(n.contract).value && r(n.contract).value / 1e18
                      ),
                      o.a.createElement(
                        b.d,
                        { br: x.b.lightGrey, mr: 1, flex: 1 },
                        e.distributedTokens[n.db]
                      ),
                      o.a.createElement(
                        b.d,
                        { flex: 1 },
                        n.contract && n.db
                          ? (
                              r(n.contract).value / 1e18 -
                              e.distributedTokens[n.db]
                            ).toString()
                          : ''
                      )
                    )
                  )
                )
              )
        );
      }
      function T() {
        var e = a()(['\n  max-width: 280px;\n  margin-top: 10px;\n']);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = a()([
          '\n  margin-top: 10px;\n  margin-left: 20px;\n  th,\n  td {\n    padding: 15px;\n    text-align: left;\n  }\n  tr:nth-child(even) {\n    background-color: #f8f8f8;\n  }\n'
        ]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      var C = i.default.table(P()),
        I = i.default.div(T());
      function F() {
        return o.a.createElement(
          c.Fragment,
          null,
          o.a.createElement(A, null),
          o.a.createElement(R, null),
          o.a.createElement(D, null)
        );
      }
      function D() {
        var { userBalance: e, accounts: n, send: t, call: r, getState: a } = Object(
            m.d
          )(),
          { types: u, initialized: l } = Object(y.b)(),
          i = u
            ? (function(e) {
                return ['allocatedRewards', 'totalReleased'].concat(
                  Object.keys(
                    d()(
                      e.methods,
                      (n, t) =>
                        !e.methods[t].send &&
                        'balanceOf' !== t &&
                        'isMinter' !== t &&
                        'allowance' !== t &&
                        'partialSum' !== t &&
                        'nonceOf' !== t &&
                        'isOwner' !== t &&
                        'allocatedRewards' !== t &&
                        'totalReleased' !== t &&
                        'currentRound' !== t &&
                        'initializeRewardSplit' !== t &&
                        'airdropSwitchRound' !== t
                    )
                  )
                );
              })(u)
            : [],
          [s, f] = Object(c.useState)();
        Object(c.useEffect)(() => {
          l && r && i.forEach(e => r(e));
        }, [r, l]);
        var g;
        return o.a.createElement(
          b.E,
          { m: 4 },
          o.a.createElement(b.C, null, 'Contract Params'),
          o.a.createElement(
            b.E,
            null,
            o.a.createElement(
              b.E,
              null,
              o.a.createElement(
                b.x,
                null,
                'User address: ',
                n && n[0] ? n[0] : 'Loading...'
              ),
              o.a.createElement(
                b.x,
                null,
                'User balance:',
                ' ',
                e && e.value ? Object(p.e)(e.value).toString() : 'Loading...'
              ),
              n &&
                n[0] &&
                o.a.createElement(
                  I,
                  null,
                  o.a.createElement(
                    b.f,
                    {
                      mr: 'auto',
                      mt: 4,
                      onClick: () => t('releaseTokens', { from: n[0] })
                    },
                    'Release Tokens'
                  ),
                  o.a.createElement(
                    b.E,
                    { mt: 4, fdirection: 'row', align: 'flex-start' },
                    o.a.createElement(O.g, {
                      mt: '0',
                      p: 1.7,
                      type: 'text',
                      value: s,
                      onChange: e => f(e.target.value)
                    }),
                    o.a.createElement(
                      b.f,
                      {
                        mr: 'auto',
                        onClick: () =>
                          t('allocateRewards', { from: n[0] }, Object(p.c)(s, 18))
                      },
                      'Allocate Rewards'
                    )
                  )
                ),
              o.a.createElement(
                b.d,
                null,
                o.a.createElement(
                  C,
                  null,
                  o.a.createElement(
                    'tbody',
                    null,
                    o.a.createElement(
                      'tr',
                      null,
                      o.a.createElement('th', null, 'Method'),
                      o.a.createElement('th', null, 'Value')
                    )
                  ),
                  o.a.createElement(
                    'tbody',
                    null,
                    (g = a) &&
                      g('name') &&
                      g('name').value &&
                      i.map(e =>
                        o.a.createElement(K, { key: e, method: e, getState: a, call: r })
                      )
                  )
                )
              )
            )
          )
        );
      }
      function K(e) {
        var { method: n, call: t, getState: r } = e;
        return o.a.createElement(
          'tr',
          null,
          o.a.createElement('td', null, n),
          o.a.createElement(
            'td',
            null,
            o.a.createElement(b.w, null, Object(f.abbreviateNumber)(r(n).value))
          ),
          o.a.createElement(
            'td',
            null,
            o.a.createElement(b.f, { onClick: () => t(n) }, 'Call')
          ),
          o.a.createElement('td', null, o.a.createElement(O.g, null))
        );
      }
      K.propTypes = { method: l.a.string, getState: l.a.func, call: l.a.func };
    },
    './src/modules/contract/contract.hooks.js': function(e, n, t) {
      'use strict';
      t.d(n, 'c', function() {
        return h;
      }),
        t.d(n, 'f', function() {
          return E;
        }),
        t.d(n, 'b', function() {
          return j;
        }),
        t.d(n, 'a', function() {
          return v;
        }),
        t.d(n, 'd', function() {
          return w;
        }),
        t.d(n, 'e', function() {
          return _;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = t.n(r),
        c = t('../../node_modules/react/index.js'),
        o = t('../../node_modules/react-redux/es/index.js'),
        u = t('./src/utils/eth.js'),
        l = t('./src/utils/web3.provider.js'),
        i = t('../../node_modules/redux/es/redux.js'),
        s = t('../../node_modules/redux-saga-web3/lib/index.js'),
        d = t('./src/utils/index.js'),
        f = t('./src/modules/contract/contract.selectors.js'),
        b = t('./src/modules/contract/contract.context.js');
      function m(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function p(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? m(Object(t), !0).forEach(function(n) {
                a()(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      var O = d.a.Alert(),
        g = Object(l.c)(),
        h = () => {
          var { actions: e, tokenAddress: n } = Object(b.b)(),
            t = Object(o.d)(),
            r = {
              getEvent: Object(c.useCallback)(
                r => {
                  t(e.events[r].get({ at: n }));
                },
                [t, e, n]
              ),
              subscribeToEvent: Object(c.useCallback)(
                r => (t(e.events[r].get({ at: n })), t(e.events[r].subscribe({ at: n }))),
                [t, e, n]
              ),
              call: Object(c.useCallback)(
                (r, a) =>
                  t(a ? e.methods[r]({ at: n }).call(a) : e.methods[r]({ at: n }).call()),
                [t, e, n]
              ),
              send: Object(c.useCallback)(
                function(r, a) {
                  for (
                    var c = arguments.length, o = new Array(c > 2 ? c - 2 : 0), u = 2;
                    u < c;
                    u++
                  )
                    o[u - 2] = arguments[u];
                  return t(
                    o
                      ? e.methods[r](p({ at: n }, a)).send(...o)
                      : e.methods[r](p({ at: n }, a)).send()
                  );
                },
                [t, e, n]
              )
            };
          return e ? r : {};
        },
        E = () => {
          Object(b.b)(), j();
          var e,
            n = Object(f.b)(),
            { init: t } =
              ((e = Object(o.d)()),
              {
                init: Object(c.useCallback)(n => e(s.actions.init.init(n)), [e]),
                network: Object(i.bindActionCreators)(p({}, s.actions.network), e),
                accounts: Object(i.bindActionCreators)(p({}, s.actions.accounts), e)
              });
          return (
            Object(c.useEffect)(() => {
              n.isInitialized || t(g);
            }, [n.status, n.isInitialized, t]),
            [n.accounts, n.isInitialized, n.networkId]
          );
        },
        j = () => {
          var e = Object(o.d)(),
            n = Object(l.a)();
          return (
            n && (n.autoRefreshOnNetworkChange = !1),
            Object(c.useEffect)(() => {
              if (!n) return () => {};
              try {
                n.enable();
              } catch (e) {
                return () => {};
              }
              var t = n => e(s.actions.accounts.getSuccess(n)),
                r = () => e(s.actions.network.getId());
              return (
                n.on('accountsChanged', t),
                n.on('networkChanged', r),
                () => {
                  n.off('accountsChanged', t), n.off('networkChanged', r);
                }
              );
            }, [e, n]),
            n
          );
        },
        v = () => {
          var { accounts: e } = Object(f.b)(),
            { userBalance: n } = Object(f.a)(),
            { call: t, subscribeToEvent: r } = h(),
            a = !!n;
          return (
            Object(c.useEffect)(() => {
              r && r('Transfer'), e && e.length && !a && t && t('balanceOf', e[0]);
            }, [e, a, t, r]),
            n && 'SUCCESS' === n.phase ? Object(u.a)(n.value, 18) : null
          );
        },
        w = () => {
          Object(b.b)();
          var { getState: e } = Object(f.a)(),
            n = Object(f.b)(),
            { call: t, send: r } = h();
          return E(), v(), { accounts: n.accounts, getState: e, call: t, send: r };
        },
        _ = e => {
          var { tx: n, method: t, callback: r } = e,
            { getState: a } = Object(f.a)();
          if (!n || !a) return null;
          var c = a(t, ...n.payload.args);
          return c && 'RECEIPT' === c.phase
            ? (O.alert('Transaction Completed!', 'success'), r(), 'success')
            : c && 'ERROR' === c.phase
            ? (O.alert(c.value.get('message')), r(), 'error')
            : 'pending';
        };
    },
    './src/modules/contract/contract.selectors.js': function(e, n, t) {
      'use strict';
      t.d(n, 'b', function() {
        return b;
      }),
        t.d(n, 'a', function() {
          return m;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = t.n(r),
        c = t('../../node_modules/react-redux/es/index.js'),
        o = t('./src/utils/eth.js'),
        u = t('./src/modules/contract/contract.context.js');
      function l(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function i(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? l(Object(t), !0).forEach(function(n) {
                a()(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      var s = (e, n, t) =>
          e.methods.balanceOf({ at: t })(
            n,
            n.web3 && n.web3.accounts.items && n.web3.accounts.items[0]
          ),
        d = (e, n, t) =>
          e.methods.nonceOf({ at: t })(
            n,
            n.web3 && n.web3.accounts.items && n.web3.accounts.items[0]
          ),
        f = e => {
          if (!e) return {};
          var n =
            'number' != typeof Object(o.e)(e.value) ? Object(o.e)(e.value) : e.value;
          return i(i({}, e), {}, { value: n });
        },
        b = () => (
          Object(u.b)(),
          Object(c.e)(e => ({
            web3: e.web3,
            status: e.web3 && e.web3.init.status,
            isInitialized: e.web3 && e.web3.init.isInitialized,
            networkId: e.web3 && e.web3.network.id && e.web3.network.id,
            accounts: e.web3 && e.web3.accounts.items && e.web3.accounts.items,
            address: e.web3 && e.web3.accounts.items && e.web3.accounts.items[0]
          }))
        ),
        m = () => {
          var { selectors: e, tokenAddress: n, initialized: t } = Object(u.b)();
          return Object(c.e)(r =>
            t
              ? {
                  userNonce: d(e, r, n),
                  userBalance: s(e, r, n),
                  RelevantToken: r.RelevantToken,
                  getState: function(t) {
                    for (
                      var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), o = 1;
                      o < a;
                      o++
                    )
                      c[o - 1] = arguments[o];
                    return e.methods[t] ? f(e.methods[t]({ at: n })(r, ...c)) : {};
                  },
                  eventCache: n => e.events[n]
                }
              : { getState: () => ({}) }
          );
        };
    },
    './src/modules/styled/web.js': function(e, n, t) {
      'use strict';
      t.d(n, 'l', function() {
        return T;
      }),
        t.d(n, 'r', function() {
          return P;
        }),
        t.d(n, 'o', function() {
          return C;
        }),
        t.d(n, 'f', function() {
          return I;
        }),
        t.d(n, 'e', function() {
          return F;
        }),
        t.d(n, 'c', function() {
          return D;
        }),
        t.d(n, 'p', function() {
          return K;
        }),
        t.d(n, 'i', function() {
          return U;
        }),
        t.d(n, 'k', function() {
          return L;
        }),
        t.d(n, 'a', function() {
          return W;
        }),
        t.d(n, 'b', function() {
          return V;
        }),
        t.d(n, 'j', function() {
          return Y;
        }),
        t.d(n, 'h', function() {
          return M;
        }),
        t.d(n, 'g', function() {
          return G;
        }),
        t.d(n, 'n', function() {
          return J;
        }),
        t.d(n, 'm', function() {
          return q;
        }),
        t.d(n, 'd', function() {
          return z;
        }),
        t.d(n, 'q', function() {
          return Z;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        a = t.n(r),
        c = t('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        o = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        u = t('./src/styles/index.js'),
        l = t(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        i = t(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        );
      function s() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = a()(['\n  ', '\n  ', '\n']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = a()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  padding: ',
          ' ',
          ';\n  min-width: 0;\n  &: focus {\n    outline: 1px solid ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = a()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  padding: ',
          ' ',
          ';\n  min-width: 0;\n  &: focus {\n    outline: 1px solid ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = a()([
          '\n  padding: ',
          ' ',
          ';\n  margin-top: ',
          ';  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ::placeholder: {\n    font-size: ',
          ';\n    line-height: ',
          ';\n  };\n  :focus {\n    outline: none !important;\n    ',
          '\n  }\n'
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = a()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ::placeholder: {\n    font-size: ',
          ';\n    line-height: ',
          ';\n  };\n  :focus {\n    outline: none !important;\n    ',
          '\n  }\n'
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = a()([
          '\n  ',
          '\n  ',
          '\n  ',
          ';\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  &:hover {\n    ',
          '\n  };\n  user-select: none; cursor: pointer;\n'
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = a()(['\n  ', '\n  ', '\n']);
        return (
          (R = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = a()([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = a()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function B() {
        var e = a()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (B = function() {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = a()([
          '\n  ',
          ';\n  color: ',
          ';\n  &.active {\n    color: ',
          ';\n  }\n  :hover {\n    color: ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (A = function() {
            return e;
          }),
          e
        );
      }
      var T = Object(o.default)(c.b)(
          A(),
          u.c.header,
          u.b.grey,
          u.b.black,
          u.b.black,
          u.f.font,
          u.f.display,
          u.f.color,
          u.f.margin
        ),
        P = o.default.div(
          B(),
          u.f.margin,
          u.f.padding,
          u.f.flex,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.width,
          u.f.height,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        C = o.default.span(
          k(),
          u.f.margin,
          u.f.padding,
          u.f.flex,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.color,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        I = o.default.span(
          N(),
          u.f.margin,
          u.f.padding,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.color
        ),
        F = o.default.img(
          S(),
          u.f.margin,
          u.f.height,
          u.f.width,
          u.f.padding,
          u.f.background,
          u.f.borderRadius,
          u.f.flex
        ),
        D =
          (o.default.span(x(), u.f.margin, u.f.flex),
          o.default.div(
            y(),
            u.f.margin,
            u.f.padding,
            u.f.width,
            u.e.universalBorder('bottom')
          )),
        K =
          (Object(o.default)(C)(R(), u.c.header, u.f.color),
          Object(o.default)(C)(_(), u.c.title, u.f.color, u.f.font)),
        U = Object(o.default)(C)(w(), u.c.link, u.f.color, u.f.font),
        L = Object(o.default)(C)(v(), u.c.secondaryText, u.f.font, u.f.color),
        W =
          (Object(o.default)(C)(j(), u.c.altLink, u.f.color, u.f.font),
          Object(o.default)(C)(E(), u.c.commentText, u.f.color, u.f.font),
          Object(o.default)(C)(h(), u.c.bodyStyle, u.f.color, u.f.font)),
        V = o.default.button(
          g(),
          u.e.button,
          u.e.buttonFont,
          e =>
            e.disabled
              ? '\n    color: '
                  .concat(u.b.white, ';\n    background: ')
                  .concat(u.b.grey, ';\n    ')
              : '',
          u.f.flex,
          u.f.background,
          u.f.padding,
          u.f.width,
          u.f.margin,
          u.f.color,
          u.f.width,
          u.f.height,
          u.e.activeButtonShadow
        ),
        Y = Object(o.default)(C)(
          O(),
          u.c.numericalValue,
          u.f.width,
          u.f.font,
          u.f.inheritfont,
          u.f.color
        ),
        M = o.default.input(
          p(),
          u.f.font,
          u.f.flex,
          u.f.border,
          u.f.padding,
          u.f.margin,
          Object(u.i)(1.75),
          Object(u.i)(1.75),
          u.e.universalBorder('', u.b.blue)
        ),
        G = o.default.input(
          m(),
          Object(u.i)(2),
          Object(u.i)(2),
          Object(u.i)(1),
          u.c.bodyStyle,
          u.f.font,
          u.f.flex,
          u.f.border,
          u.e.universalBorder(),
          u.f.padding,
          u.f.margin,
          Object(u.i)(1.75),
          Object(u.i)(1.75),
          u.e.universalBorder('', u.b.blue)
        ),
        J = Object(o.default)(i.a)(
          b(),
          u.c.bodyStyle,
          u.f.border,
          u.f.flex,
          u.e.universalBorder(),
          Object(u.i)(2),
          Object(u.i)(2),
          u.b.blue,
          u.f.padding,
          u.f.margin,
          u.f.height
        ),
        q = Object(o.default)(l.a)(
          f(),
          u.c.bodyStyle,
          u.f.border,
          u.f.flex,
          u.e.universalBorder(),
          Object(u.i)(2),
          Object(u.i)(2),
          u.b.blue,
          u.f.padding,
          u.f.margin,
          u.f.height
        ),
        z = o.default.form(d(), u.f.flex, u.f.margin),
        Z = o.default.video(
          s(),
          u.f.margin,
          u.f.height,
          u.f.width,
          u.f.padding,
          u.f.background,
          u.f.borderRadius,
          u.f.flex
        );
    },
    './src/utils/eth.js': function(e, n, t) {
      'use strict';
      t.d(n, 'f', function() {
        return u;
      }),
        t.d(n, 'g', function() {
          return i;
        }),
        t.d(n, 'e', function() {
          return s;
        }),
        t.d(n, 'a', function() {
          return d;
        }),
        t.d(n, 'd', function() {
          return f;
        }),
        t.d(n, 'b', function() {
          return b;
        }),
        t.d(n, 'c', function() {
          return m;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = t.n(r),
        c = t('../../node_modules/crypto-browserify/index.js'),
        o = t.n(c);
      function u(e, n) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = a()(function*(e, n) {
          var t = e.getSigner(),
            r = new Date(),
            a = { address: n, exp: Math.floor(r.setMinutes(r.getMinutes() + 5) / 1e3) };
          return { msg: a, signature: yield t.signMessage(JSON.stringify(a)) };
        })).apply(this, arguments);
      }
      function i(e) {
        return e ? e.slice(0, 6) + '...' + e.slice(e.length - 4, e.length) : null;
      }
      function s(e) {
        return e && e.get
          ? (function(e) {
              var n = e.get('_hex');
              if ('0x00' === n) return 0;
              return d(n, 18);
            })(e)
          : e;
      }
      function d(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
          t = Number(e).toString();
        if ('+' === t[t.length - 3]) {
          var r = O(t, n),
            a = Number(p(t) + r);
          return Number.parseFloat(a).toFixed(0);
        }
        return t.length > 18
          ? Number(t.slice(0, -18))
          : 18 === t.length
          ? Number('0.'.concat(t))
          : Number(t);
      }
      function f() {
        return o.a.randomBytes(16).toString('hex');
      }
      function b(e) {
        return ''.concat(e.slice(0, -18), '.').concat(e.slice(-18));
      }
      function m(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return (e * 10 ** n).toString();
      }
      function p(e) {
        return e.slice(0, -2).toString();
      }
      function O(e, n) {
        return Number(Number(e.slice(-2)) - n).toString();
      }
    },
    './src/utils/web3.provider.js': function(e, n, t) {
      'use strict';
      t.d(n, 'b', function() {
        return s;
      }),
        t.d(n, 'a', function() {
          return d;
        }),
        t.d(n, 'c', function() {
          return f;
        }),
        t.d(n, 'd', function() {
          return m;
        });
      var r,
        a,
        c,
        o = t('../../node_modules/web3/dist/web3.min.js'),
        u = t.n(o),
        l = t('./src/core/config.js'),
        i = { rpcUrl: m(), metamask: null };
      function s(e) {
        switch (parseInt(e, 10)) {
          case 1:
            return 'Mainnet';
          case 4:
            return 'Rinkeby';
          case 3:
            return 'Ropsten';
          case 5:
            return 'Goerli';
          case 42:
            return 'Kovan';
          default:
            return 'Unknown';
        }
      }
      function d() {
        return (
          c ||
          (c = 'undefined' != typeof window && window.ethereum ? window.ethereum : null)
        );
      }
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
        return e.metamask || e.rpcUrl !== i.rpcUrl ? b(e) : r || b();
      }
      function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
          n = p(e);
        return (r = new u.a(n));
      }
      function m() {
        return (
          a ||
          (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.c,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.b,
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.a;
            return (a = ''
              .concat(e, 's://')
              .concat(n, '.infura.io/')
              .concat('ws' === e ? 'ws/' : '', 'v3/')
              .concat(t));
          })()
        );
      }
      function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
        return e.metamask
          ? e.metamask
          : 'ws' === e.rpcUrl.slice(0, 2)
          ? new u.a.providers.WebsocketProvider(e.rpcUrl)
          : new u.a.providers.HttpProvider(e.rpcUrl);
      }
    },
    4: function(e, n) {},
    5: function(e, n) {},
    6: function(e, n) {},
    7: function(e, n) {}
  }
]);
//# sourceMappingURL=26.bundle.js.map
