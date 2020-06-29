(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [25, 61],
  {
    './src/core/config.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return r;
      }),
        n.d(t, 'b', function() {
          return c;
        }),
        n.d(t, 'a', function() {
          return o;
        }),
        n.d(t, 'd', function() {
          return a;
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
        { INFURA_NETWORK: c } = Object({
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
        { INFURA_API_KEY: o } = Object({
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
        { NETWORK_NUMBER: a } = Object({
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
    './src/modules/contract/contract.hooks.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return j;
      }),
        n.d(t, 'f', function() {
          return h;
        }),
        n.d(t, 'b', function() {
          return w;
        }),
        n.d(t, 'a', function() {
          return g;
        }),
        n.d(t, 'd', function() {
          return v;
        }),
        n.d(t, 'e', function() {
          return _;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        c = n.n(r),
        o = n('../../node_modules/react/index.js'),
        a = n('../../node_modules/react-redux/es/index.js'),
        s = n('./src/utils/eth.js'),
        u = n('./src/utils/web3.provider.js'),
        i = n('../../node_modules/redux/es/redux.js'),
        l = n('../../node_modules/redux-saga-web3/lib/index.js'),
        d = n('./src/utils/index.js'),
        b = n('./src/modules/contract/contract.selectors.js'),
        m = n('./src/modules/contract/contract.context.js');
      function f(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function(t) {
                c()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var p = d.a.Alert(),
        E = Object(u.c)(),
        j = () => {
          var { actions: e, tokenAddress: t } = Object(m.b)(),
            n = Object(a.d)(),
            r = {
              getEvent: Object(o.useCallback)(
                r => {
                  n(e.events[r].get({ at: t }));
                },
                [n, e, t]
              ),
              subscribeToEvent: Object(o.useCallback)(
                r => (n(e.events[r].get({ at: t })), n(e.events[r].subscribe({ at: t }))),
                [n, e, t]
              ),
              call: Object(o.useCallback)(
                (r, c) =>
                  n(c ? e.methods[r]({ at: t }).call(c) : e.methods[r]({ at: t }).call()),
                [n, e, t]
              ),
              send: Object(o.useCallback)(
                function(r, c) {
                  for (
                    var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), s = 2;
                    s < o;
                    s++
                  )
                    a[s - 2] = arguments[s];
                  return n(
                    a
                      ? e.methods[r](O({ at: t }, c)).send(...a)
                      : e.methods[r](O({ at: t }, c)).send()
                  );
                },
                [n, e, t]
              )
            };
          return e ? r : {};
        },
        h = () => {
          Object(m.b)(), w();
          var e,
            t = Object(b.b)(),
            { init: n } =
              ((e = Object(a.d)()),
              {
                init: Object(o.useCallback)(t => e(l.actions.init.init(t)), [e]),
                network: Object(i.bindActionCreators)(O({}, l.actions.network), e),
                accounts: Object(i.bindActionCreators)(O({}, l.actions.accounts), e)
              });
          return (
            Object(o.useEffect)(() => {
              t.isInitialized || n(E);
            }, [t.status, t.isInitialized, n]),
            [t.accounts, t.isInitialized, t.networkId]
          );
        },
        w = () => {
          var e = Object(a.d)(),
            t = Object(u.a)();
          return (
            t && (t.autoRefreshOnNetworkChange = !1),
            Object(o.useEffect)(() => {
              if (!t) return () => {};
              try {
                t.enable();
              } catch (e) {
                return () => {};
              }
              var n = t => e(l.actions.accounts.getSuccess(t)),
                r = () => e(l.actions.network.getId());
              return (
                t.on('accountsChanged', n),
                t.on('networkChanged', r),
                () => {
                  t.off('accountsChanged', n), t.off('networkChanged', r);
                }
              );
            }, [e, t]),
            t
          );
        },
        g = () => {
          var { accounts: e } = Object(b.b)(),
            { userBalance: t } = Object(b.a)(),
            { call: n, subscribeToEvent: r } = j(),
            c = !!t;
          return (
            Object(o.useEffect)(() => {
              r && r('Transfer'), e && e.length && !c && n && n('balanceOf', e[0]);
            }, [e, c, n, r]),
            t && 'SUCCESS' === t.phase ? Object(s.a)(t.value, 18) : null
          );
        },
        v = () => {
          Object(m.b)();
          var { getState: e } = Object(b.a)(),
            t = Object(b.b)(),
            { call: n, send: r } = j();
          return h(), g(), { accounts: t.accounts, getState: e, call: n, send: r };
        },
        _ = e => {
          var { tx: t, method: n, callback: r } = e,
            { getState: c } = Object(b.a)();
          if (!t || !c) return null;
          var o = c(n, ...t.payload.args);
          return o && 'RECEIPT' === o.phase
            ? (p.alert('Transaction Completed!', 'success'), r(), 'success')
            : o && 'ERROR' === o.phase
            ? (p.alert(o.value.get('message')), r(), 'error')
            : 'pending';
        };
    },
    './src/modules/contract/contract.selectors.js': function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return m;
      }),
        n.d(t, 'a', function() {
          return f;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        c = n.n(r),
        o = n('../../node_modules/react-redux/es/index.js'),
        a = n('./src/utils/eth.js'),
        s = n('./src/modules/contract/contract.context.js');
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function(t) {
                c()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var l = (e, t, n) =>
          e.methods.balanceOf({ at: n })(
            t,
            t.web3 && t.web3.accounts.items && t.web3.accounts.items[0]
          ),
        d = (e, t, n) =>
          e.methods.nonceOf({ at: n })(
            t,
            t.web3 && t.web3.accounts.items && t.web3.accounts.items[0]
          ),
        b = e => {
          if (!e) return {};
          var t =
            'number' != typeof Object(a.e)(e.value) ? Object(a.e)(e.value) : e.value;
          return i(i({}, e), {}, { value: t });
        },
        m = () => (
          Object(s.b)(),
          Object(o.e)(e => ({
            web3: e.web3,
            status: e.web3 && e.web3.init.status,
            isInitialized: e.web3 && e.web3.init.isInitialized,
            networkId: e.web3 && e.web3.network.id && e.web3.network.id,
            accounts: e.web3 && e.web3.accounts.items && e.web3.accounts.items,
            address: e.web3 && e.web3.accounts.items && e.web3.accounts.items[0]
          }))
        ),
        f = () => {
          var { selectors: e, tokenAddress: t, initialized: n } = Object(s.b)();
          return Object(o.e)(r =>
            n
              ? {
                  userNonce: d(e, r, t),
                  userBalance: l(e, r, t),
                  RelevantToken: r.RelevantToken,
                  getState: function(n) {
                    for (
                      var c = arguments.length, o = new Array(c > 1 ? c - 1 : 0), a = 1;
                      a < c;
                      a++
                    )
                      o[a - 1] = arguments[a];
                    return e.methods[n] ? b(e.methods[n]({ at: t })(r, ...o)) : {};
                  },
                  eventCache: t => e.events[t]
                }
              : { getState: () => ({}) }
          );
        };
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return E;
        }),
        n.d(t, 'exchangeLink', function() {
          return j;
        }),
        n.d(t, 'tokenEnabled', function() {
          return h;
        }),
        n.d(t, 'usePrice', function() {
          return w;
        }),
        n.d(t, 'default', function() {
          return g;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        c = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = n.n(o),
        s = n('../../node_modules/react/index.js'),
        u = n.n(s),
        i = n('../../node_modules/prop-types/index.js'),
        l = n.n(i),
        d = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        b = n('./src/utils/numbers.js');
      function m(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function(t) {
                c()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var { TOKEN_ADDRESS: O, DISABLE_PRICE: p } = Object({
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
        E = u.a.createContext(0);
      function j() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(O);
      }
      function h() {
        return !!O;
      }
      function w(e, t) {
        var { price: n } = Object(s.useContext)(E);
        return n
          ? 'number' === t
            ? Object(b.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(b.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function g(e) {
        var { children: t } = e,
          [n, r] = Object(s.useReducer)(v, {
            loading: !1,
            error: !1,
            data: null,
            refresh: 0
          });
        Object(s.useEffect)(() => {
          var e = !1;
          return (
            (function() {
              var t = a()(function*() {
                if ((r({ type: 'FETCH_PRICE_INIT' }), O && !p))
                  try {
                    var t = yield Object(d.getTokenReserves)(O),
                      n = yield fetch('https://api.infura.io/v1/ticker/ethusd'),
                      c = yield n.json();
                    e ||
                      r({
                        type: 'FETCH_PRICE_SUCCESS',
                        payload: f(f({}, t), {}, { ethPrice: c.bid })
                      });
                  } catch (t) {
                    e || r({ type: 'FETCH_PRICE_ERROR', payload: t });
                  }
              });
              return function() {
                return t.apply(this, arguments);
              };
            })()(),
            setTimeout(() => {
              r({ type: 'REFRESH_PRICE' });
            }, 6e4),
            () => {
              e = !0;
            }
          );
        }, [n.refresh]);
        var c = (function(e) {
            if (!e) return null;
            var { ethReserve: t, tokenReserve: n, ethPrice: r } = e;
            if (!t || !n) return null;
            var c = t.amount.div(n.amount).times(r);
            return parseFloat(c.toString());
          })(n.data),
          o = '($'.concat(Object(b.abbreviateNumber)(c, 2), ')');
        return u.a.createElement(E.Provider, { value: { price: c, priceString: o } }, t);
      }
      g.propTypes = { children: l.a.node };
      var v = (e, t) => {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return f(f({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return f(f({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return f(f({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return f(f({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/modules/wallet/wallet.actions.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return d;
      }),
        n.d(t, 'b', function() {
          return b;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        c = n.n(r),
        o = n('./src/utils/eth.js'),
        a = n('./src/utils/web3.provider.js'),
        s = n('./src/utils/index.js'),
        u = n('./src/modules/auth/auth.actions.js'),
        i = n('./src/modules/wallet/earnings.actions.js'),
        l = s.a.Alert();
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return (function() {
          var n = c()(function*(n) {
            try {
              var { user: r, earning: c } = yield n(
                s.b.request({
                  method: 'POST',
                  endpoint: 'user',
                  path: '/cashOut',
                  body: JSON.stringify({ customAmount: e })
                })
              );
              n(Object(u.updateAuthUser)(r)), c && n(Object(i.addEarning)(c));
              var { amount: a, sig: d } = r.cashOut,
                b = t(a, d);
              return (
                l.alert(
                  'Claiming '.concat(parseFloat(Object(o.b)(a)), ' tokens 😄'),
                  'success'
                ),
                b
              );
            } catch (e) {
              return console.log(e), l.alert(e.message, 'error');
            }
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })();
      }
      function b(e) {
        return (function() {
          var t = c()(function*(t) {
            try {
              var n = [
                  {
                    type: 'string',
                    name: 'Message',
                    value:
                      'Connect Ethereum address to the Relevant account ' + Object(o.d)()
                  }
                ],
                r = Object(a.c)();
              yield r.currentProvider.sendAsync(
                { method: 'eth_signTypedData', params: [n, e], from: e },
                (r, o) => {
                  if (r || o.error) {
                    var a = r || o.error;
                    l.alert(a, 'error');
                  } else
                    t(
                      (function(e, t, n) {
                        return (function() {
                          var r = c()(function*(r) {
                            try {
                              var c = yield r(
                                s.b.request({
                                  method: 'PUT',
                                  endpoint: 'user',
                                  path: '/ethAddress',
                                  body: JSON.stringify({ msg: e, sig: t, acc: n })
                                })
                              );
                              return r(Object(u.updateAuthUser)(c)), !0;
                            } catch (e) {
                              return l.alert(e.message, 'error'), !1;
                            }
                          });
                          return function(e) {
                            return r.apply(this, arguments);
                          };
                        })();
                      })(n, o.result, e)
                    );
                }
              );
            } catch (e) {
              l.alert('Failed signing message: ' + e.messate, 'error');
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
    },
    './src/modules/wallet/web/cashoutFooter.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return d;
      });
      var r = n('../../node_modules/react/index.js'),
        c = n.n(r),
        o = n('../../node_modules/prop-types/index.js'),
        a = n.n(o),
        s = n('./src/utils/eth.js'),
        u = n('./src/utils/web3.provider.js'),
        i = n('./src/modules/contract/contract.selectors.js'),
        l = n('./src/modules/styled/uni.js');
      function d(e) {
        var { customButton: t } = e,
          n = Object(i.b)(),
          o =
            t ||
            c.a.createElement(
              l.d,
              null,
              'Connected to Ethereum ',
              Object(u.b)(n.networkId)
            ),
          a = n.accounts && n.accounts[0],
          d = a
            ? c.a.createElement(l.d, null, Object(s.g)(a))
            : c.a.createElement(l.d, null);
        return c.a.createElement(
          r.Fragment,
          null,
          c.a.createElement(l.m, { mt: 4, mb: 4 }),
          c.a.createElement(
            l.E,
            { fdirection: 'row', justify: 'space-between' },
            c.a.createElement(l.E, null, d),
            c.a.createElement(l.E, null, o)
          )
        );
      }
      d.propTypes = { customButton: a.a.node };
    },
    './src/modules/wallet/web/connectMetamaskModal.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return O;
        });
      var r = n('../../node_modules/react/index.js'),
        c = n.n(r),
        o = n('../../node_modules/react-redux/es/index.js'),
        a = n('../../node_modules/prop-types/index.js'),
        s = n.n(a),
        u = n('./src/modules/styled/uni.js'),
        i = n('./src/modules/wallet/web/web3Warning/web3Warning.component.js'),
        l = n('./src/modules/contract/contract.hooks.js'),
        d = n('./src/modules/wallet/web/web3Warning/web3Warning.hooks.js'),
        b = n('./src/modules/wallet/wallet.actions.js'),
        m =
          (n('./src/modules/navigation/navigation.actions.js'),
          n('./src/modules/wallet/price.context.js')),
        f = n('./src/modules/wallet/web/cashoutFooter.js');
      function O(e) {
        var { close: t } = e,
          [n, , r] = Object(l.f)(),
          a = Object(o.d)(),
          s = Object(o.e)(e => e.auth.user),
          m = s.balance - (s.airdropTokens || 0),
          f = n && n[0];
        Object(l.b)();
        var O = Object(d.a)({ accounts: n, user: s, networkId: r, canClaim: m }),
          E = O ? 'Connect Your Ethereum Wallet' : 'Ethereum Address is Connected';
        return c.a.createElement(
          u.E,
          null,
          c.a.createElement(u.C, null, E),
          O
            ? c.a.createElement(i.a, {
                connectAddress: () => a(Object(b.b)(f)),
                warning: O
              })
            : c.a.createElement(p, { close: t, account: f })
        );
      }
      function p(e) {
        var { account: t } = e,
          n = Object(l.a)(),
          o = Object(m.usePrice)(n, 'number');
        return c.a.createElement(
          r.Fragment,
          null,
          c.a.createElement(u.d, { mt: 4 }, 'Connected account: ', t),
          c.a.createElement(
            u.d,
            { mt: 2 },
            'Balance in Ethereum wallet: ',
            n,
            ' REL ($',
            o,
            ')'
          ),
          c.a.createElement(f.a, null)
        );
      }
      (O.propTypes = { close: s.a.func }), (p.propTypes = { account: s.a.string });
    },
    './src/modules/wallet/web/web3Warning/web3Warning.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return b;
      });
      var r = n('../../node_modules/react/index.js'),
        c = n.n(r),
        o = n('../../node_modules/prop-types/index.js'),
        a = n.n(o),
        s = n('./src/modules/styled/uni.js'),
        u = n('./src/modules/contract/contract.hooks.js'),
        i = n('./src/modules/wallet/web/cashoutFooter.js'),
        l = 'rgba(0, 0, 0, 0.05)',
        d = '#000000';
      function b(e) {
        var { connectAddress: t, warning: n } = e,
          { bg: o = l, bc: a = d } = n,
          b = Object(u.b)();
        if (!n) return null;
        var m = (() => {
            switch (n.buttonAction) {
              case 'connectMetamask':
                return () => b.enable();
              case 'getMetamask':
                return () => window.open('https://metamask.io/', '_blank');
              case 'connectAddress':
                return () => t();
              default:
                return null;
            }
          })(),
          f =
            m &&
            c.a.createElement(
              s.f,
              { disabled: n.disabled, mr: 'auto', onClick: m },
              n.buttonText
            );
        return c.a.createElement(
          r.Fragment,
          null,
          c.a.createElement(
            s.E,
            { mt: 2, p: 2, id: n.id, bg: o, border: !0, bc: a },
            c.a.createElement(s.C, null, n.title),
            c.a.createElement(s.d, { mt: 1 }, n.message)
          ),
          c.a.createElement(i.a, { customButton: f })
        );
      }
      b.propTypes = {
        connectAddress: a.a.func,
        warning: a.a.oneOfType([a.a.object, a.a.func])
      };
    },
    './src/modules/wallet/web/web3Warning/web3Warning.hooks.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return p;
      });
      var r = n('../../node_modules/react/index.js'),
        c = n.n(r),
        o = n('./src/modules/contract/contract.hooks.js'),
        a = n('../common/lib/index.js'),
        s = n('./src/modules/styled/uni.js'),
        u = n('./src/modules/navigation/ULink.component.js'),
        i = n('./src/utils/eth.js'),
        l = n('./src/styles/index.js'),
        d = {
          id: 1,
          title: 'No Ethereum wallet found',
          message: c.a.createElement(
            s.B,
            { inline: 1 },
            'You will need to install an Ethereum wallet, like',
            ' ',
            c.a.createElement(
              u.a,
              { to: 'https://metamask.io/', external: !0, target: '_blank' },
              'Metamask'
            ),
            ' ',
            'in order to claim your coins.',
            '\n\n',
            '*Note: you will also need to purchace a small amount of Ethereum in order to pay for the transaction.'
          ),
          bc: l.b.error,
          bg: l.b.errorA,
          buttonText: 'Get Metamask',
          buttonAction: 'getMetamask'
        },
        b = {
          id: 2,
          title: 'Connect Relevant to Metamask',
          message:
            "We'll need to connect your Metamask account before you can transfer coins. Connecting your Metamask to Relevant is not a transaction and totally free.",
          buttonText: 'Connect Account',
          buttonAction: 'connectAddress',
          bc: l.b.warning,
          bg: l.b.warningA
        },
        m = {
          id: 3,
          title: 'Use Metamask to switch Ethereum networks',
          message: 'Please connect to Ethereum Mainnet.',
          buttonText: 'Switch Networks',
          disabled: !0,
          bc: l.b.error,
          bg: l.b.errorA
        },
        f =
          ('Your current balance is too low, you need to earn more than '.concat(
            a.CASHOUT_LIMIT,
            ' coins in order to be able to cash out.'
          ),
          l.b.warning,
          l.b.warningA,
          {
            id: 1,
            title: 'Log into Metamask and Connect it to Relevant',
            message:
              'Make sure you are logged into Metamask and have connected it to Relevant',
            bc: l.b.warning,
            bg: l.b.warningA,
            buttonText: 'Connect Metamask',
            buttonAction: 'connectMetamask'
          }),
        O = n('./src/core/config.js'),
        p = e => {
          var { accounts: t, user: n, networkId: c, canClaim: a } = e,
            [s, u] = Object(r.useState)(),
            p = Object(o.b)();
          return (
            Object(r.useEffect)(() => {
              u(
                p
                  ? p && !(e => e && e[0])(t)
                    ? f
                    : (e => e && e === O.d)(c)
                    ? (e => e.ethAddress && e.ethAddress[0])(n)
                      ? ((e, t) => e.ethAddress[0].toLowerCase() === t[0].toLowerCase())(
                          n,
                          t
                        )
                        ? null
                        : (function() {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : '0x..';
                            return {
                              id: 4,
                              title: 'Account mismatch (wanted: '.concat(
                                Object(i.g)(e),
                                ')'
                              ),
                              message: 'Your connected wallet address is different from the address linked to your Relevant account. Please select account '.concat(
                                Object(i.g)(e),
                                ' in Metamask. Alternately you can connect a new account address to Relevant.'
                              ),
                              buttonText: 'Connect Current Account to Relevant',
                              buttonAction: 'connectAddress',
                              bc: l.b.warning,
                              bg: l.b.warningA
                            };
                          })(n.ethAddress[0])
                      : b
                    : m
                  : d
              );
            }, [t, n.ethAddress, c, n, a, p]),
            s
          );
        };
    },
    './src/utils/eth.js': function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return s;
      }),
        n.d(t, 'g', function() {
          return i;
        }),
        n.d(t, 'e', function() {
          return l;
        }),
        n.d(t, 'a', function() {
          return d;
        }),
        n.d(t, 'd', function() {
          return b;
        }),
        n.d(t, 'b', function() {
          return m;
        }),
        n.d(t, 'c', function() {
          return f;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        c = n.n(r),
        o = n('../../node_modules/crypto-browserify/index.js'),
        a = n.n(o);
      function s(e, t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = c()(function*(e, t) {
          var n = e.getSigner(),
            r = new Date(),
            c = { address: t, exp: Math.floor(r.setMinutes(r.getMinutes() + 5) / 1e3) };
          return { msg: c, signature: yield n.signMessage(JSON.stringify(c)) };
        })).apply(this, arguments);
      }
      function i(e) {
        return e ? e.slice(0, 6) + '...' + e.slice(e.length - 4, e.length) : null;
      }
      function l(e) {
        return e && e.get
          ? (function(e) {
              var t = e.get('_hex');
              if ('0x00' === t) return 0;
              return d(t, 18);
            })(e)
          : e;
      }
      function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
          n = Number(e).toString();
        if ('+' === n[n.length - 3]) {
          var r = p(n, t),
            c = Number(O(n) + r);
          return Number.parseFloat(c).toFixed(0);
        }
        return n.length > 18
          ? Number(n.slice(0, -18))
          : 18 === n.length
          ? Number('0.'.concat(n))
          : Number(n);
      }
      function b() {
        return a.a.randomBytes(16).toString('hex');
      }
      function m(e) {
        return ''.concat(e.slice(0, -18), '.').concat(e.slice(-18));
      }
      function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return (e * 10 ** t).toString();
      }
      function O(e) {
        return e.slice(0, -2).toString();
      }
      function p(e, t) {
        return Number(Number(e.slice(-2)) - t).toString();
      }
    },
    './src/utils/web3.provider.js': function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return l;
      }),
        n.d(t, 'a', function() {
          return d;
        }),
        n.d(t, 'c', function() {
          return b;
        }),
        n.d(t, 'd', function() {
          return f;
        });
      var r,
        c,
        o,
        a = n('../../node_modules/web3/dist/web3.min.js'),
        s = n.n(a),
        u = n('./src/core/config.js'),
        i = { rpcUrl: f(), metamask: null };
      function l(e) {
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
          o ||
          (o = 'undefined' != typeof window && window.ethereum ? window.ethereum : null)
        );
      }
      function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
        return e.metamask || e.rpcUrl !== i.rpcUrl ? m(e) : r || m();
      }
      function m() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
          t = O(e);
        return (r = new s.a(t));
      }
      function f() {
        return (
          c ||
          (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.c,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.b,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.a;
            return (c = ''
              .concat(e, 's://')
              .concat(t, '.infura.io/')
              .concat('ws' === e ? 'ws/' : '', 'v3/')
              .concat(n));
          })()
        );
      }
      function O() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
        return e.metamask
          ? e.metamask
          : 'ws' === e.rpcUrl.slice(0, 2)
          ? new s.a.providers.WebsocketProvider(e.rpcUrl)
          : new s.a.providers.HttpProvider(e.rpcUrl);
      }
    },
    4: function(e, t) {},
    5: function(e, t) {},
    6: function(e, t) {},
    7: function(e, t) {}
  }
]);
//# sourceMappingURL=25.bundle.js.map
