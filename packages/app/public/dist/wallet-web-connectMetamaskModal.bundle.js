(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [61, 59],
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
      var r = 'ws',
        c = 'mainnet',
        o = '7d2819de98bb46108cae44811facb5e0',
        a = '1';
    },
    './src/modules/contract/contract.hooks.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return v;
      }),
        n.d(t, 'f', function() {
          return O;
        }),
        n.d(t, 'b', function() {
          return y;
        }),
        n.d(t, 'a', function() {
          return E;
        }),
        n.d(t, 'd', function() {
          return k;
        }),
        n.d(t, 'e', function() {
          return _;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/toConsumableArray.js'),
        c = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(o),
        s = n('../../node_modules/react/index.js'),
        u = n('../../node_modules/react-redux/es/index.js'),
        i = n('./src/utils/eth.js'),
        l = n('./src/utils/web3.provider.js'),
        d = n('../../node_modules/redux/es/redux.js'),
        b = n('../../node_modules/redux-saga-web3/lib/index.js'),
        f = n('./src/utils/index.js'),
        m = n('./src/modules/contract/contract.selectors.js'),
        p = n('./src/modules/contract/contract.context.js');
      function j(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function(t) {
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var h = f.a.Alert(),
        g = Object(l.c)(),
        v = function() {
          var e = Object(p.b)(),
            t = e.actions,
            n = e.tokenAddress,
            r = Object(u.d)(),
            c = {
              getEvent: Object(s.useCallback)(
                function(e) {
                  r(t.events[e].get({ at: n }));
                },
                [r, t, n]
              ),
              subscribeToEvent: Object(s.useCallback)(
                function(e) {
                  return (
                    r(t.events[e].get({ at: n })), r(t.events[e].subscribe({ at: n }))
                  );
                },
                [r, t, n]
              ),
              call: Object(s.useCallback)(
                function(e, c) {
                  return r(
                    c ? t.methods[e]({ at: n }).call(c) : t.methods[e]({ at: n }).call()
                  );
                },
                [r, t, n]
              ),
              send: Object(s.useCallback)(
                function(e, c) {
                  for (
                    var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), s = 2;
                    s < o;
                    s++
                  )
                    a[s - 2] = arguments[s];
                  var u;
                  return r(
                    a
                      ? (u = t.methods[e](w({ at: n }, c))).send.apply(u, a)
                      : t.methods[e](w({ at: n }, c)).send()
                  );
                },
                [r, t, n]
              )
            };
          return t ? c : {};
        },
        O = function() {
          Object(p.b)(), y();
          var e,
            t = Object(m.b)(),
            n = ((e = Object(u.d)()),
            {
              init: Object(s.useCallback)(
                function(t) {
                  return e(b.actions.init.init(t));
                },
                [e]
              ),
              network: Object(d.bindActionCreators)(w({}, b.actions.network), e),
              accounts: Object(d.bindActionCreators)(w({}, b.actions.accounts), e)
            }).init;
          return (
            Object(s.useEffect)(
              function() {
                t.isInitialized || n(g);
              },
              [t.status, t.isInitialized, n]
            ),
            [t.accounts, t.isInitialized, t.networkId]
          );
        },
        y = function() {
          var e = Object(u.d)(),
            t = Object(l.a)();
          return (
            t && (t.autoRefreshOnNetworkChange = !1),
            Object(s.useEffect)(
              function() {
                if (!t) return function() {};
                try {
                  t.enable();
                } catch (e) {
                  return function() {};
                }
                var n = function(t) {
                    return e(b.actions.accounts.getSuccess(t));
                  },
                  r = function() {
                    return e(b.actions.network.getId());
                  };
                return (
                  t.on('accountsChanged', n),
                  t.on('networkChanged', r),
                  function() {
                    t.off('accountsChanged', n), t.off('networkChanged', r);
                  }
                );
              },
              [e, t]
            ),
            t
          );
        },
        E = function() {
          var e = Object(m.b)().accounts,
            t = Object(m.a)().userBalance,
            n = v(),
            r = n.call,
            c = n.subscribeToEvent,
            o = !!t;
          return (
            Object(s.useEffect)(
              function() {
                c && c('Transfer'), e && e.length && !o && r && r('balanceOf', e[0]);
              },
              [e, o, r, c]
            ),
            t && 'SUCCESS' === t.phase ? Object(i.a)(t.value, 18) : null
          );
        },
        k = function() {
          Object(p.b)();
          var e = Object(m.a)().getState,
            t = Object(m.b)(),
            n = v(),
            r = n.call,
            c = n.send;
          return O(), E(), { accounts: t.accounts, getState: e, call: r, send: c };
        },
        _ = function(e) {
          var t = e.tx,
            n = e.method,
            r = e.callback,
            o = Object(m.a)().getState;
          if (!t || !o) return null;
          var a = o.apply(void 0, [n].concat(c()(t.payload.args)));
          return a && 'RECEIPT' === a.phase
            ? (h.alert('Transaction Completed!', 'success'), r(), 'success')
            : a && 'ERROR' === a.phase
            ? (h.alert(a.value.get('message')), r(), 'error')
            : 'pending';
        };
    },
    './src/modules/contract/contract.selectors.js': function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return f;
      }),
        n.d(t, 'a', function() {
          return m;
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
      var l = function(e, t, n) {
          return e.methods.balanceOf({ at: n })(
            t,
            t.web3 && t.web3.accounts.items && t.web3.accounts.items[0]
          );
        },
        d = function(e, t, n) {
          return e.methods.nonceOf({ at: n })(
            t,
            t.web3 && t.web3.accounts.items && t.web3.accounts.items[0]
          );
        },
        b = function(e) {
          if (!e) return {};
          var t =
            'number' != typeof Object(a.e)(e.value) ? Object(a.e)(e.value) : e.value;
          return i(i({}, e), {}, { value: t });
        },
        f = function() {
          return (
            Object(s.b)(),
            Object(o.e)(function(e) {
              return {
                web3: e.web3,
                status: e.web3 && e.web3.init.status,
                isInitialized: e.web3 && e.web3.init.isInitialized,
                networkId: e.web3 && e.web3.network.id && e.web3.network.id,
                accounts: e.web3 && e.web3.accounts.items && e.web3.accounts.items,
                address: e.web3 && e.web3.accounts.items && e.web3.accounts.items[0]
              };
            })
          );
        },
        m = function() {
          var e = Object(s.b)(),
            t = e.selectors,
            n = e.tokenAddress,
            r = e.initialized;
          return Object(o.e)(function(e) {
            return r
              ? {
                  userNonce: d(t, e, n),
                  userBalance: l(t, e, n),
                  RelevantToken: e.RelevantToken,
                  getState: function(r) {
                    for (
                      var c = arguments.length, o = new Array(c > 1 ? c - 1 : 0), a = 1;
                      a < c;
                      a++
                    )
                      o[a - 1] = arguments[a];
                    return t.methods[r]
                      ? b(t.methods[r]({ at: n }).apply(void 0, [e].concat(o)))
                      : {};
                  },
                  eventCache: function(e) {
                    return t.events[e];
                  }
                }
              : {
                  getState: function() {
                    return {};
                  }
                };
          });
        };
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return y;
        }),
        n.d(t, 'exchangeLink', function() {
          return E;
        }),
        n.d(t, 'tokenEnabled', function() {
          return k;
        }),
        n.d(t, 'usePrice', function() {
          return _;
        }),
        n.d(t, 'default', function() {
          return x;
        });
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        c = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(o),
        s = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = n.n(s),
        i = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        l = n.n(i),
        d = n('../../node_modules/react/index.js'),
        b = n.n(d),
        f = n('../../node_modules/prop-types/index.js'),
        m = n.n(f),
        p = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        j = n('./src/utils/numbers.js');
      function w(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function(t) {
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var g = Object({
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
        v = g.TOKEN_ADDRESS,
        O = g.DISABLE_PRICE,
        y = b.a.createContext(0);
      function E() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(v);
      }
      function k() {
        return !!v;
      }
      function _(e, t) {
        var n = Object(d.useContext)(y).price;
        return n
          ? 'number' === t
            ? Object(j.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(j.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function x(e) {
        var t = e.children,
          n = Object(d.useReducer)(C, { loading: !1, error: !1, data: null, refresh: 0 }),
          r = l()(n, 2),
          o = r[0],
          a = r[1];
        Object(d.useEffect)(
          function() {
            var e = !1;
            return (
              (function() {
                var t = u()(
                  c.a.mark(function t() {
                    var n, r, o;
                    return c.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((a({ type: 'FETCH_PRICE_INIT' }), v && !O)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt('return');
                            case 3:
                              return (
                                (t.prev = 3), (t.next = 6), Object(p.getTokenReserves)(v)
                              );
                            case 6:
                              return (
                                (n = t.sent),
                                (t.next = 9),
                                fetch('https://api.infura.io/v1/ticker/ethusd')
                              );
                            case 9:
                              return (r = t.sent), (t.next = 12), r.json();
                            case 12:
                              (o = t.sent),
                                e ||
                                  a({
                                    type: 'FETCH_PRICE_SUCCESS',
                                    payload: h(h({}, n), {}, { ethPrice: o.bid })
                                  }),
                                (t.next = 19);
                              break;
                            case 16:
                              (t.prev = 16),
                                (t.t0 = t.catch(3)),
                                e || a({ type: 'FETCH_PRICE_ERROR', payload: t.t0 });
                            case 19:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[3, 16]]
                    );
                  })
                );
                return function() {
                  return t.apply(this, arguments);
                };
              })()(),
              setTimeout(function() {
                a({ type: 'REFRESH_PRICE' });
              }, 6e4),
              function() {
                e = !0;
              }
            );
          },
          [o.refresh]
        );
        var s = (function(e) {
            if (!e) return null;
            var t = e.ethReserve,
              n = e.tokenReserve,
              r = e.ethPrice;
            if (!t || !n) return null;
            var c = t.amount.div(n.amount).times(r);
            return parseFloat(c.toString());
          })(o.data),
          i = '($'.concat(Object(j.abbreviateNumber)(s, 2), ')');
        return b.a.createElement(y.Provider, { value: { price: s, priceString: i } }, t);
      }
      x.propTypes = { children: m.a.node };
      var C = function(e, t) {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return h(h({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return h(h({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return h(h({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return h(h({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/modules/wallet/wallet.actions.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return f;
      }),
        n.d(t, 'b', function() {
          return m;
        });
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        c = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = n.n(o),
        s = n('./src/utils/eth.js'),
        u = n('./src/utils/web3.provider.js'),
        i = n('./src/utils/index.js'),
        l = n('./src/modules/auth/auth.actions.js'),
        d = n('./src/modules/wallet/earnings.actions.js'),
        b = i.a.Alert();
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return (function() {
          var n = a()(
            c.a.mark(function n(r) {
              var o, a, u, f, m, p, j;
              return c.a.wrap(
                function(n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (n.next = 3),
                          r(
                            i.b.request({
                              method: 'POST',
                              endpoint: 'user',
                              path: '/cashOut',
                              body: JSON.stringify({ customAmount: e })
                            })
                          )
                        );
                      case 3:
                        return (
                          (o = n.sent),
                          (a = o.user),
                          (u = o.earning),
                          r(Object(l.updateAuthUser)(a)),
                          u && r(Object(d.addEarning)(u)),
                          (f = a.cashOut),
                          (m = f.amount),
                          (p = f.sig),
                          (j = t(m, p)),
                          b.alert(
                            'Claiming '.concat(parseFloat(Object(s.b)(m)), ' tokens 😄'),
                            'success'
                          ),
                          n.abrupt('return', j)
                        );
                      case 14:
                        return (
                          (n.prev = 14),
                          (n.t0 = n.catch(0)),
                          console.log(n.t0),
                          n.abrupt('return', b.alert(n.t0.message, 'error'))
                        );
                      case 18:
                      case 'end':
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 14]]
              );
            })
          );
          return function(e) {
            return n.apply(this, arguments);
          };
        })();
      }
      function m(e) {
        return (function() {
          var t = a()(
            c.a.mark(function t(n) {
              var r, o, a;
              return c.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (r = Object(s.d)()),
                          (o = [
                            {
                              type: 'string',
                              name: 'Message',
                              value:
                                'Connect Ethereum address to the Relevant account ' + r
                            }
                          ]),
                          (a = Object(u.c)()),
                          (t.next = 6),
                          a.currentProvider.sendAsync(
                            { method: 'eth_signTypedData', params: [o, e], from: e },
                            function(t, r) {
                              if (t || r.error) {
                                var c = t || r.error;
                                b.alert(c, 'error');
                              } else n(p(o, r.result, e));
                            }
                          )
                        );
                      case 6:
                        t.next = 11;
                        break;
                      case 8:
                        (t.prev = 8),
                          (t.t0 = t.catch(0)),
                          b.alert('Failed signing message: ' + t.t0.messate, 'error');
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 8]]
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function p(e, t, n) {
        return (function() {
          var r = a()(
            c.a.mark(function r(o) {
              var a;
              return c.a.wrap(
                function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          o(
                            i.b.request({
                              method: 'PUT',
                              endpoint: 'user',
                              path: '/ethAddress',
                              body: JSON.stringify({ msg: e, sig: t, acc: n })
                            })
                          )
                        );
                      case 3:
                        return (
                          (a = r.sent),
                          o(Object(l.updateAuthUser)(a)),
                          r.abrupt('return', !0)
                        );
                      case 8:
                        return (
                          (r.prev = 8),
                          (r.t0 = r.catch(0)),
                          b.alert(r.t0.message, 'error'),
                          r.abrupt('return', !1)
                        );
                      case 12:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 8]]
              );
            })
          );
          return function(e) {
            return r.apply(this, arguments);
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
        var t = e.customButton,
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
          return w;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        c = n.n(r),
        o = n('../../node_modules/react/index.js'),
        a = n.n(o),
        s = n('../../node_modules/react-redux/es/index.js'),
        u = n('../../node_modules/prop-types/index.js'),
        i = n.n(u),
        l = n('./src/modules/styled/uni.js'),
        d = n('./src/modules/wallet/web/web3Warning/web3Warning.component.js'),
        b = n('./src/modules/contract/contract.hooks.js'),
        f = n('./src/modules/wallet/web/web3Warning/web3Warning.hooks.js'),
        m = n('./src/modules/wallet/wallet.actions.js'),
        p =
          (n('./src/modules/navigation/navigation.actions.js'),
          n('./src/modules/wallet/price.context.js')),
        j = n('./src/modules/wallet/web/cashoutFooter.js');
      function w(e) {
        var t = e.close,
          n = Object(b.f)(),
          r = c()(n, 3),
          o = r[0],
          u = r[2],
          i = Object(s.d)(),
          p = Object(s.e)(function(e) {
            return e.auth.user;
          }),
          j = p.balance - (p.airdropTokens || 0),
          w = o && o[0];
        Object(b.b)();
        var g = Object(f.a)({ accounts: o, user: p, networkId: u, canClaim: j }),
          v = g ? 'Connect Your Ethereum Wallet' : 'Ethereum Address is Connected';
        return a.a.createElement(
          l.E,
          null,
          a.a.createElement(l.C, null, v),
          g
            ? a.a.createElement(d.a, {
                connectAddress: function() {
                  return i(Object(m.b)(w));
                },
                warning: g
              })
            : a.a.createElement(h, { close: t, account: w })
        );
      }
      function h(e) {
        var t = e.account,
          n = Object(b.a)(),
          r = Object(p.usePrice)(n, 'number');
        return a.a.createElement(
          o.Fragment,
          null,
          a.a.createElement(l.d, { mt: 4 }, 'Connected account: ', t),
          a.a.createElement(
            l.d,
            { mt: 2 },
            'Balance in Ethereum wallet: ',
            n,
            ' REL ($',
            r,
            ')'
          ),
          a.a.createElement(j.a, null)
        );
      }
      (w.propTypes = { close: i.a.func }), (h.propTypes = { account: i.a.string });
    },
    './src/modules/wallet/web/web3Warning/web3Warning.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return l;
      });
      var r = n('../../node_modules/react/index.js'),
        c = n.n(r),
        o = n('../../node_modules/prop-types/index.js'),
        a = n.n(o),
        s = n('./src/modules/styled/uni.js'),
        u = n('./src/modules/contract/contract.hooks.js'),
        i = n('./src/modules/wallet/web/cashoutFooter.js');
      function l(e) {
        var t = e.connectAddress,
          n = e.warning,
          o = n.bg,
          a = void 0 === o ? 'rgba(0, 0, 0, 0.05)' : o,
          l = n.bc,
          d = void 0 === l ? '#000000' : l,
          b = Object(u.b)();
        if (!n) return null;
        var f = (function() {
            switch (n.buttonAction) {
              case 'connectMetamask':
                return function() {
                  return b.enable();
                };
              case 'getMetamask':
                return function() {
                  return window.open('https://metamask.io/', '_blank');
                };
              case 'connectAddress':
                return function() {
                  return t();
                };
              default:
                return null;
            }
          })(),
          m =
            f &&
            c.a.createElement(
              s.f,
              { disabled: n.disabled, mr: 'auto', onClick: f },
              n.buttonText
            );
        return c.a.createElement(
          r.Fragment,
          null,
          c.a.createElement(
            s.E,
            { mt: 2, p: 2, id: n.id, bg: a, border: !0, bc: d },
            c.a.createElement(s.C, null, n.title),
            c.a.createElement(s.d, { mt: 1 }, n.message)
          ),
          c.a.createElement(i.a, { customButton: m })
        );
      }
      l.propTypes = {
        connectAddress: a.a.func,
        warning: a.a.oneOfType([a.a.object, a.a.func])
      };
    },
    './src/modules/wallet/web/web3Warning/web3Warning.hooks.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return h;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        c = n.n(r),
        o = n('../../node_modules/react/index.js'),
        a = n.n(o),
        s = n('./src/modules/contract/contract.hooks.js'),
        u = n('../common/lib/index.js'),
        i = n('./src/modules/styled/uni.js'),
        l = n('./src/modules/navigation/ULink.component.js'),
        d = n('./src/utils/eth.js'),
        b = n('./src/styles/index.js'),
        f = {
          id: 1,
          title: 'No Ethereum wallet found',
          message: a.a.createElement(
            i.B,
            { inline: 1 },
            'You will need to install an Ethereum wallet, like',
            ' ',
            a.a.createElement(
              l.a,
              { to: 'https://metamask.io/', external: !0, target: '_blank' },
              'Metamask'
            ),
            ' ',
            'in order to claim your coins.',
            '\n\n',
            '*Note: you will also need to purchace a small amount of Ethereum in order to pay for the transaction.'
          ),
          bc: b.b.error,
          bg: b.b.errorA,
          buttonText: 'Get Metamask',
          buttonAction: 'getMetamask'
        },
        m = {
          id: 2,
          title: 'Connect Relevant to Metamask',
          message:
            "We'll need to connect your Metamask account before you can transfer coins. Connecting your Metamask to Relevant is not a transaction and totally free.",
          buttonText: 'Connect Account',
          buttonAction: 'connectAddress',
          bc: b.b.warning,
          bg: b.b.warningA
        },
        p = {
          id: 3,
          title: 'Use Metamask to switch Ethereum networks',
          message: 'Please connect to Ethereum Mainnet.',
          buttonText: 'Switch Networks',
          disabled: !0,
          bc: b.b.error,
          bg: b.b.errorA
        },
        j =
          ('Your current balance is too low, you need to earn more than '.concat(
            u.CASHOUT_LIMIT,
            ' coins in order to be able to cash out.'
          ),
          b.b.warning,
          b.b.warningA,
          {
            id: 1,
            title: 'Log into Metamask and Connect it to Relevant',
            message:
              'Make sure you are logged into Metamask and have connected it to Relevant',
            bc: b.b.warning,
            bg: b.b.warningA,
            buttonText: 'Connect Metamask',
            buttonAction: 'connectMetamask'
          }),
        w = n('./src/core/config.js'),
        h = function(e) {
          var t = e.accounts,
            n = e.user,
            r = e.networkId,
            a = e.canClaim,
            u = Object(o.useState)(),
            i = c()(u, 2),
            l = i[0],
            h = i[1],
            g = Object(s.b)();
          return (
            Object(o.useEffect)(
              function() {
                h(
                  g
                    ? g &&
                      !(function(e) {
                        return e && e[0];
                      })(t)
                      ? j
                      : (function(e) {
                          return e && e === w.d;
                        })(r)
                      ? (function(e) {
                          return e.ethAddress && e.ethAddress[0];
                        })(n)
                        ? (function(e, t) {
                            return e.ethAddress[0].toLowerCase() === t[0].toLowerCase();
                          })(n, t)
                          ? null
                          : (function() {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : '0x..';
                              return {
                                id: 4,
                                title: 'Account mismatch (wanted: '.concat(
                                  Object(d.g)(e),
                                  ')'
                                ),
                                message: 'Your connected wallet address is different from the address linked to your Relevant account. Please select account '.concat(
                                  Object(d.g)(e),
                                  ' in Metamask. Alternately you can connect a new account address to Relevant.'
                                ),
                                buttonText: 'Connect Current Account to Relevant',
                                buttonAction: 'connectAddress',
                                bc: b.b.warning,
                                bg: b.b.warningA
                              };
                            })(n.ethAddress[0])
                        : m
                      : p
                    : f
                );
              },
              [t, n.ethAddress, r, n, a, g]
            ),
            l
          );
        };
    },
    './src/utils/eth.js': function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return i;
      }),
        n.d(t, 'g', function() {
          return d;
        }),
        n.d(t, 'e', function() {
          return b;
        }),
        n.d(t, 'a', function() {
          return f;
        }),
        n.d(t, 'd', function() {
          return m;
        }),
        n.d(t, 'b', function() {
          return p;
        }),
        n.d(t, 'c', function() {
          return j;
        });
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        c = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = n.n(o),
        s = n('../../node_modules/crypto-browserify/index.js'),
        u = n.n(s);
      function i(e, t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = a()(
          c.a.mark(function e(t, n) {
            var r, o, a, s, u;
            return c.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.getSigner()),
                      (o = new Date()),
                      (a = Math.floor(o.setMinutes(o.getMinutes() + 5) / 1e3)),
                      (s = { address: n, exp: a }),
                      (e.next = 6),
                      r.signMessage(JSON.stringify(s))
                    );
                  case 6:
                    return (u = e.sent), e.abrupt('return', { msg: s, signature: u });
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function d(e) {
        return e ? e.slice(0, 6) + '...' + e.slice(e.length - 4, e.length) : null;
      }
      function b(e) {
        return e && e.get
          ? (function(e) {
              var t = e.get('_hex');
              if ('0x00' === t) return 0;
              return f(t, 18);
            })(e)
          : e;
      }
      function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
          n = Number(e).toString();
        if ('+' === n[n.length - 3]) {
          var r = h(n, t),
            c = Number(w(n) + r);
          return Number.parseFloat(c).toFixed(0);
        }
        return n.length > 18
          ? Number(n.slice(0, -18))
          : 18 === n.length
          ? Number('0.'.concat(n))
          : Number(n);
      }
      function m() {
        return u.a.randomBytes(16).toString('hex');
      }
      function p(e) {
        return ''.concat(e.slice(0, -18), '.').concat(e.slice(-18));
      }
      function j(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return (e * Math.pow(10, t)).toString();
      }
      function w(e) {
        return e.slice(0, -2).toString();
      }
      function h(e, t) {
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
          return m;
        });
      var r,
        c,
        o,
        a = n('../../node_modules/web3/dist/web3.min.js'),
        s = n.n(a),
        u = n('./src/core/config.js'),
        i = { rpcUrl: m(), metamask: null };
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
        return e.metamask || e.rpcUrl !== i.rpcUrl ? f(e) : r || f();
      }
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
          t = p(e);
        return (r = new s.a(t));
      }
      function m() {
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
      function p() {
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
//# sourceMappingURL=wallet-web-connectMetamaskModal.bundle.js.map