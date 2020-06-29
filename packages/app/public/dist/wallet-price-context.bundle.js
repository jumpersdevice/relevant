(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [59],
  {
    './src/modules/wallet/price.context.js': function(e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, 'PriceContext', function() {
          return j;
        }),
        t.d(r, 'exchangeLink', function() {
          return m;
        }),
        t.d(r, 'tokenEnabled', function() {
          return P;
        }),
        t.d(r, 'usePrice', function() {
          return y;
        }),
        t.d(r, 'default', function() {
          return S;
        });
      var n = t('../../node_modules/@babel/runtime/regenerator/index.js'),
        c = t.n(n),
        o = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = t.n(o),
        u = t('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = t.n(u),
        i = t('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        d = t.n(i),
        p = t('../../node_modules/react/index.js'),
        l = t.n(p),
        b = t('../../node_modules/prop-types/index.js'),
        E = t.n(b),
        f = t('../../node_modules/@uniswap/sdk/dist/index.js'),
        _ = t('./src/utils/numbers.js');
      function O(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function(r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function R(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? O(Object(t), !0).forEach(function(r) {
                a()(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      var h = Object({
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
        v = h.TOKEN_ADDRESS,
        C = h.DISABLE_PRICE,
        j = l.a.createContext(0);
      function m() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(v);
      }
      function P() {
        return !!v;
      }
      function y(e, r) {
        var t = Object(p.useContext)(j).price;
        return t
          ? 'number' === r
            ? Object(_.abbreviateNumber)(t * e)
            : ' ($'.concat(Object(_.abbreviateNumber)(t * e, 2), ')')
          : '';
      }
      function S(e) {
        var r = e.children,
          t = Object(p.useReducer)(w, { loading: !1, error: !1, data: null, refresh: 0 }),
          n = d()(t, 2),
          o = n[0],
          a = n[1];
        Object(p.useEffect)(
          function() {
            var e = !1;
            return (
              (function() {
                var r = s()(
                  c.a.mark(function r() {
                    var t, n, o;
                    return c.a.wrap(
                      function(r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if ((a({ type: 'FETCH_PRICE_INIT' }), v && !C)) {
                                r.next = 3;
                                break;
                              }
                              return r.abrupt('return');
                            case 3:
                              return (
                                (r.prev = 3), (r.next = 6), Object(f.getTokenReserves)(v)
                              );
                            case 6:
                              return (
                                (t = r.sent),
                                (r.next = 9),
                                fetch('https://api.infura.io/v1/ticker/ethusd')
                              );
                            case 9:
                              return (n = r.sent), (r.next = 12), n.json();
                            case 12:
                              (o = r.sent),
                                e ||
                                  a({
                                    type: 'FETCH_PRICE_SUCCESS',
                                    payload: R(R({}, t), {}, { ethPrice: o.bid })
                                  }),
                                (r.next = 19);
                              break;
                            case 16:
                              (r.prev = 16),
                                (r.t0 = r.catch(3)),
                                e || a({ type: 'FETCH_PRICE_ERROR', payload: r.t0 });
                            case 19:
                            case 'end':
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[3, 16]]
                    );
                  })
                );
                return function() {
                  return r.apply(this, arguments);
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
        var u = (function(e) {
            if (!e) return null;
            var r = e.ethReserve,
              t = e.tokenReserve,
              n = e.ethPrice;
            if (!r || !t) return null;
            var c = r.amount.div(t.amount).times(n);
            return parseFloat(c.toString());
          })(o.data),
          i = '($'.concat(Object(_.abbreviateNumber)(u, 2), ')');
        return l.a.createElement(j.Provider, { value: { price: u, priceString: i } }, r);
      }
      S.propTypes = { children: E.a.node };
      var w = function(e, r) {
        switch (r.type) {
          case 'REFRESH_PRICE':
            return R(R({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return R(R({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return R(R({}, e), {}, { loading: !1, error: !1, data: r.payload });
          case 'FETCH_PRICE_ERROR':
            return R(R({}, e), {}, { loading: !1, error: r.payload });
          default:
            throw new Error();
        }
      };
    }
  }
]);
//# sourceMappingURL=wallet-price-context.bundle.js.map