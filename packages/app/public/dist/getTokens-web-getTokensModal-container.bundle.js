(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [40, 59],
  {
    './public/img/icons/reddit.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/icons/reddit.png');
    },
    './public/img/icons/twitter_white.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/icons/twitter_white.png');
    },
    './public/img/uniswap.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/uniswap.png');
    },
    './src/modules/getTokens/web/getTokensModal.container.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        i = n.n(o),
        c = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        s = n.n(c),
        u = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        l = n.n(u),
        d = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        m = n.n(d),
        p = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        b = n.n(p),
        f = n('../../node_modules/react/index.js'),
        E = n.n(f),
        h = n('../../node_modules/prop-types/index.js'),
        w = n.n(h),
        j = n('../../node_modules/lodash/get.js'),
        _ = n.n(j),
        g = n('./src/modules/auth/auth.actions.js'),
        y = n('./src/modules/navigation/navigation.actions.js'),
        R = n('../../node_modules/redux/es/redux.js'),
        v = n('../../node_modules/react-redux/es/index.js'),
        O = n('./src/modules/styled/uni.js'),
        x = n('./src/modules/stats/coinStat.component.js'),
        C = n('../common/lib/index.js'),
        T = n('./src/modules/navigation/ULink.component.js'),
        P = n('./src/styles/index.js'),
        I = n('./src/modules/wallet/price.context.js');
      function A(e) {
        var t = e.auth.user,
          n = e.actions,
          r = n.sendConfirmation,
          a = n.showModal,
          o = n.push,
          i = e.mobile,
          c = e.twitterButton;
        return E.a.createElement(
          O.e,
          null,
          Object(I.tokenEnabled)() &&
            E.a.createElement(
              f.Fragment,
              null,
              E.a.createElement(D, null),
              E.a.createElement(O.m, { mt: 4 })
            ),
          !t.confirmed &&
            E.a.createElement(
              O.E,
              { fdirection: 'column', justify: 'space-between' },
              E.a.createElement(
                O.E,
                { fdirection: 'row', align: 'center', mt: 4 },
                E.a.createElement(
                  O.d,
                  { c: P.b.secondaryText, inline: 1 },
                  'Confirm your e-mail to earn',
                  ' ',
                  E.a.createElement(x.a, { inline: 1, size: 2, amount: C.EMAIL_REWARD }),
                  ' ',
                  C.EMAIL_REWARD > 1 ? 'coins' : 'coin',
                  E.a.createElement(
                    O.x,
                    null,
                    "*if you don't see a confirmation email in your inbox, please check your spam folder"
                  )
                )
              ),
              E.a.createElement(
                T.a,
                {
                  to: '#',
                  onClick: r,
                  onPress: r,
                  external: !0,
                  mr: ['auto', 0],
                  mobile: i,
                  fel: !0
                },
                E.a.createElement(
                  O.F,
                  { w: [22, 'auto'], mt: 3, mobile: i },
                  E.a.createElement(O.v, { c: P.b.white }, 'Confirm E-mail')
                )
              ),
              E.a.createElement(O.m, { mt: 4 })
            ),
          !t.twitterId &&
            E.a.createElement(
              O.e,
              null,
              E.a.createElement(
                O.E,
                { fdirection: 'row', align: 'center', mt: 4 },
                E.a.createElement(
                  O.d,
                  { c: P.b.secondaryText, inline: 1 },
                  'Connect your Relevant account with your Twitter account to earn',
                  ' ',
                  E.a.createElement(x.a, {
                    inline: 1,
                    size: 2,
                    amount: t.confirmed
                      ? C.TWITTER_REWARD
                      : C.TWITTER_REWARD + C.EMAIL_REWARD
                  }),
                  ' ',
                  C.TWITTER_REWARD > 1 ? 'coins' : 'coin'
                )
              ),
              c,
              E.a.createElement(O.m, { mt: 4 })
            ),
          E.a.createElement(
            O.E,
            { mt: 4 },
            E.a.createElement(
              T.a,
              {
                to: '#',
                onClick: function() {
                  return a('invite');
                },
                onPress: function() {
                  return o('invites');
                },
                external: !0,
                mr: 'auto',
                mobile: i
              },
              E.a.createElement(O.v, { c: P.b.blue }, 'Invite Friends')
            )
          )
        );
      }
      function D() {
        var e = Object(v.d)(),
          t = n('./public/img/uniswap.png'),
          r = Object(I.exchangeLink)();
        return E.a.createElement(
          T.a,
          { inline: 1, to: r, external: !0, mr: ['auto', 0], mt: 3, target: '_blank' },
          E.a.createElement(
            O.r,
            {
              w: [22, 'auto'],
              bg: P.b.uniswap,
              m: 0,
              c: P.b.white,
              onPress: function() {
                return e(Object(y.goToUrl)(r));
              }
            },
            E.a.createElement(
              O.E,
              { fdirection: 'row', justify: 'center', align: 'center' },
              E.a.createElement(O.s, {
                resizeMode: 'contain',
                source: t,
                w: 3,
                h: 3,
                mr: 1.5
              }),
              E.a.createElement(O.v, { c: P.b.white }, 'Uniswap Exchange')
            )
          )
        );
      }
      A.propTypes = {
        actions: w.a.object,
        auth: w.a.object,
        mobile: w.a.bool,
        twitterButton: w.a.node
      };
      var S = A;
      function B(e) {
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
          return m()(this, n);
        };
      }
      var k = n('./public/img/icons/twitter_white.png'),
        N = n('./public/img/icons/reddit.png'),
        F = function() {
          return E.a.createElement(
            T.a,
            { to: '/auth/twitter', external: !0, mr: ['auto', 0], mt: 3 },
            E.a.createElement(
              O.r,
              {
                w: [22, 'auto'],
                bg: P.b.twitterBlue,
                m: 0,
                c: P.b.white,
                fdirection: 'row'
              },
              E.a.createElement(O.s, {
                resizeMode: 'contain',
                source: k,
                w: 3,
                h: 3,
                mr: 1.5
              }),
              E.a.createElement(O.v, { c: P.b.white }, 'Connect Twitter')
            )
          );
        },
        L = function() {
          return E.a.createElement(
            T.a,
            { to: '/auth/reddit', external: !0, mr: ['auto', 0], mt: 3 },
            E.a.createElement(
              O.r,
              {
                w: [22, 'auto'],
                bg: P.b.redditColor,
                m: 0,
                c: P.b.white,
                fdirection: 'row'
              },
              E.a.createElement(O.s, {
                resizeMode: 'contain',
                source: N,
                w: 3,
                h: 3,
                mr: 1.5
              }),
              E.a.createElement(O.v, { c: P.b.white }, 'Connect Reddit')
            )
          );
        },
        W = (function(e) {
          l()(n, e);
          var t = B(n);
          function n() {
            return i()(this, n), t.apply(this, arguments);
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function() {
                  return E.a.createElement(
                    S,
                    a()({}, this.props, {
                      twitterButton: E.a.createElement(F, null),
                      redditButton: E.a.createElement(L, null)
                    })
                  );
                }
              }
            ]),
            n
          );
        })(f.Component);
      W.propTypes = { actions: w.a.object, close: w.a.func, auth: w.a.object };
      t.default = Object(v.c)(
        function(e) {
          return { auth: _()(e, 'auth', {}) || {} };
        },
        function(e) {
          return {
            actions: Object(R.bindActionCreators)(
              { sendConfirmation: g.sendConfirmation, showModal: y.showModal },
              e
            )
          };
        }
      )(W);
    },
    './src/modules/stats/coinStat.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        i = n.n(o),
        c = n('../../node_modules/react/index.js'),
        s = n.n(c),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = s.a.createContext({ wallet: null }),
        m = n('./src/utils/numbers.js'),
        p = n('./src/utils/propValidation.js'),
        b = n('./src/styles/index.js'),
        f = n('./src/modules/styled/uni.js'),
        E = n('./src/modules/wallet/price.context.js'),
        h = n('./public/img/relevantcoin.png');
      function w(e) {
        var t,
          n = e.user,
          r = e.isOwner,
          o = e.wallet,
          c = e.size,
          u = e.amount,
          l = e.mr,
          d = e.align,
          p = e.noNumber,
          w = e.secondary,
          j = e.fs,
          _ = e.lh,
          g = e.inline,
          y = e.c,
          R = e.spaceBetween,
          v = e.showPrice,
          O = i()(e, [
            'user',
            'isOwner',
            'wallet',
            'size',
            'amount',
            'mr',
            'align',
            'noNumber',
            'secondary',
            'fs',
            'lh',
            'inline',
            'c',
            'spaceBetween',
            'showPrice'
          ]);
        'number' == typeof u
          ? (t = u)
          : n && ((t = n.balance), n.tokenBalance && (t += n.tokenBalance));
        var x = Object(E.usePrice)(t);
        r &&
          n.ethAddress &&
          n.ethAddress[0] &&
          o.connectedBalance &&
          (t = o.connectedBalance + n.balance);
        var C = 'number' == typeof c ? c : 3,
          T = w ? f.x : f.w,
          P = 'center' === d ? 0 : Object(b.i)(-1, 'px'),
          I = g ? f.B : f.t,
          A = 0;
        return (
          !g && C && (A = C / 4),
          !g && R && (A = R),
          s.a.createElement(
            I,
            a()({}, O, {
              inline: g ? 1 : 0,
              mr: 'number' == typeof l ? l : g ? 0 : 1.5,
              align: d
            }),
            s.a.createElement(f.s, {
              inline: g ? 1 : 0,
              source: h,
              h: 1 * C,
              w: 1.05 * C,
              style: { bottom: P },
              resizeMode: 'contain'
            }),
            p
              ? null
              : s.a.createElement(
                  T,
                  { ml: A, fs: j, lh: _, inline: g ? 1 : 0, c: y },
                  g ? ' ' : '',
                  Object(m.abbreviateNumber)(t),
                  v ? x : ''
                )
          )
        );
      }
      w.propTypes = {
        lh: l.a.number,
        inline: l.a.oneOfType([l.a.bool, l.a.number]),
        secondary: l.a.bool,
        mr: l.a.number,
        fs: l.a.number,
        amount: l.a.number,
        size: l.a.number,
        user: p.c,
        isOwner: l.a.bool,
        wallet: l.a.object,
        align: l.a.string,
        lineheight: l.a.string,
        c: l.a.string,
        noNumber: l.a.bool,
        spaceBetween: l.a.number,
        showPrice: l.a.bool
      };
      t.a = Object(c.memo)(function(e) {
        return s.a.createElement(d.Consumer, null, function(t) {
          return s.a.createElement(w, a()({ wallet: t }, e));
        });
      });
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return y;
        }),
        n.d(t, 'exchangeLink', function() {
          return R;
        }),
        n.d(t, 'tokenEnabled', function() {
          return v;
        }),
        n.d(t, 'usePrice', function() {
          return O;
        }),
        n.d(t, 'default', function() {
          return x;
        });
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = n.n(o),
        c = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = n.n(c),
        u = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        l = n.n(u),
        d = n('../../node_modules/react/index.js'),
        m = n.n(d),
        p = n('../../node_modules/prop-types/index.js'),
        b = n.n(p),
        f = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        E = n('./src/utils/numbers.js');
      function h(e, t) {
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
            ? h(Object(n), !0).forEach(function(t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var j = Object({
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
        _ = j.TOKEN_ADDRESS,
        g = j.DISABLE_PRICE,
        y = m.a.createContext(0);
      function R() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(_);
      }
      function v() {
        return !!_;
      }
      function O(e, t) {
        var n = Object(d.useContext)(y).price;
        return n
          ? 'number' === t
            ? Object(E.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(E.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function x(e) {
        var t = e.children,
          n = Object(d.useReducer)(C, { loading: !1, error: !1, data: null, refresh: 0 }),
          r = l()(n, 2),
          o = r[0],
          i = r[1];
        Object(d.useEffect)(
          function() {
            var e = !1;
            return (
              (function() {
                var t = s()(
                  a.a.mark(function t() {
                    var n, r, o;
                    return a.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((i({ type: 'FETCH_PRICE_INIT' }), _ && !g)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt('return');
                            case 3:
                              return (
                                (t.prev = 3), (t.next = 6), Object(f.getTokenReserves)(_)
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
                                  i({
                                    type: 'FETCH_PRICE_SUCCESS',
                                    payload: w(w({}, n), {}, { ethPrice: o.bid })
                                  }),
                                (t.next = 19);
                              break;
                            case 16:
                              (t.prev = 16),
                                (t.t0 = t.catch(3)),
                                e || i({ type: 'FETCH_PRICE_ERROR', payload: t.t0 });
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
                i({ type: 'REFRESH_PRICE' });
              }, 6e4),
              function() {
                e = !0;
              }
            );
          },
          [o.refresh]
        );
        var c = (function(e) {
            if (!e) return null;
            var t = e.ethReserve,
              n = e.tokenReserve,
              r = e.ethPrice;
            if (!t || !n) return null;
            var a = t.amount.div(n.amount).times(r);
            return parseFloat(a.toString());
          })(o.data),
          u = '($'.concat(Object(E.abbreviateNumber)(c, 2), ')');
        return m.a.createElement(y.Provider, { value: { price: c, priceString: u } }, t);
      }
      x.propTypes = { children: b.a.node };
      var C = function(e, t) {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return w(w({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return w(w({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return w(w({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return w(w({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/utils/propValidation.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return i;
      }),
        n.d(t, 'a', function() {
          return c;
        }),
        n.d(t, 'b', function() {
          return s;
        });
      var r = n('../../node_modules/prop-types/index.js'),
        a = n.n(r),
        o = n('../../node_modules/react-is/index.js'),
        i = a.a.shape({
          handle: a.a.string,
          balance: a.a.number,
          image: a.a.string,
          name: a.a.string
        }),
        c =
          (a.a.shape({
            _id: a.a.string.isRequired,
            user: a.a.string.isRequired,
            title: a.a.string,
            embeddedUser: a.a.object,
            tags: a.a.array,
            body: a.a.string,
            postDate: a.a.instanceOf(Date),
            data: a.a.object,
            link: a.a.object,
            parentPost: a.a.number,
            type: a.a.string
          }),
          a.a.shape({ isAuthenticated: a.a.bool, user: i, community: a.a.string }));
      function s(e, t, n) {
        if (e[t] && !Object(o.isValidElementType)(e[t]))
          return new Error(
            "Invalid prop '"
              .concat(t, "' supplied to '")
              .concat(n, "': the prop is not a valid React component")
          );
      }
    }
  }
]);
//# sourceMappingURL=getTokens-web-getTokensModal-container.bundle.js.map