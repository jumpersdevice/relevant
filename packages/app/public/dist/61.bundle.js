(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [61],
  {
    './src/modules/wallet/price.context.js': function(e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, 'PriceContext', function() {
          return O;
        }),
        t.d(r, 'exchangeLink', function() {
          return R;
        }),
        t.d(r, 'tokenEnabled', function() {
          return y;
        }),
        t.d(r, 'usePrice', function() {
          return h;
        }),
        t.d(r, 'default', function() {
          return C;
        });
      var n = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = t.n(n),
        c = t('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = t.n(c),
        u = t('../../node_modules/react/index.js'),
        i = t.n(u),
        s = t('../../node_modules/prop-types/index.js'),
        d = t.n(s),
        p = t('../../node_modules/@uniswap/sdk/dist/index.js'),
        E = t('./src/utils/numbers.js');
      function l(e, r) {
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
      function b(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(t), !0).forEach(function(r) {
                o()(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      var { TOKEN_ADDRESS: _, DISABLE_PRICE: f } = Object({
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
        O = i.a.createContext(0);
      function R() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(_);
      }
      function y() {
        return !!_;
      }
      function h(e, r) {
        var { price: t } = Object(u.useContext)(O);
        return t
          ? 'number' === r
            ? Object(E.abbreviateNumber)(t * e)
            : ' ($'.concat(Object(E.abbreviateNumber)(t * e, 2), ')')
          : '';
      }
      function C(e) {
        var { children: r } = e,
          [t, n] = Object(u.useReducer)(P, {
            loading: !1,
            error: !1,
            data: null,
            refresh: 0
          });
        Object(u.useEffect)(() => {
          var e = !1;
          return (
            (function() {
              var r = a()(function*() {
                if ((n({ type: 'FETCH_PRICE_INIT' }), _ && !f))
                  try {
                    var r = yield Object(p.getTokenReserves)(_),
                      t = yield fetch('https://api.infura.io/v1/ticker/ethusd'),
                      o = yield t.json();
                    e ||
                      n({
                        type: 'FETCH_PRICE_SUCCESS',
                        payload: b(b({}, r), {}, { ethPrice: o.bid })
                      });
                  } catch (r) {
                    e || n({ type: 'FETCH_PRICE_ERROR', payload: r });
                  }
              });
              return function() {
                return r.apply(this, arguments);
              };
            })()(),
            setTimeout(() => {
              n({ type: 'REFRESH_PRICE' });
            }, 6e4),
            () => {
              e = !0;
            }
          );
        }, [t.refresh]);
        var o = (function(e) {
            if (!e) return null;
            var { ethReserve: r, tokenReserve: t, ethPrice: n } = e;
            if (!r || !t) return null;
            var o = r.amount.div(t.amount).times(n);
            return parseFloat(o.toString());
          })(t.data),
          c = '($'.concat(Object(E.abbreviateNumber)(o, 2), ')');
        return i.a.createElement(O.Provider, { value: { price: o, priceString: c } }, r);
      }
      C.propTypes = { children: d.a.node };
      var P = (e, r) => {
        switch (r.type) {
          case 'REFRESH_PRICE':
            return b(b({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return b(b({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return b(b({}, e), {}, { loading: !1, error: !1, data: r.payload });
          case 'FETCH_PRICE_ERROR':
            return b(b({}, e), {}, { loading: !1, error: r.payload });
          default:
            throw new Error();
        }
      };
    }
  }
]);
//# sourceMappingURL=61.bundle.js.map
