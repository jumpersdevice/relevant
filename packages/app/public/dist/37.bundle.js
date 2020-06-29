(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [37, 61],
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
        o = n('../../node_modules/react/index.js'),
        i = n.n(o),
        c = n('../../node_modules/prop-types/index.js'),
        s = n.n(c),
        l = n('../../node_modules/lodash/get.js'),
        u = n.n(l),
        d = n('./src/modules/auth/auth.actions.js'),
        m = n('./src/modules/navigation/navigation.actions.js'),
        b = n('../../node_modules/redux/es/redux.js'),
        p = n('../../node_modules/react-redux/es/index.js'),
        E = n('./src/modules/styled/uni.js'),
        f = n('./src/modules/stats/coinStat.component.js'),
        h = n('../common/lib/index.js'),
        w = n('./src/modules/navigation/ULink.component.js'),
        j = n('./src/styles/index.js'),
        g = n('./src/modules/wallet/price.context.js');
      function _(e) {
        var {
          auth: { user: t },
          actions: { sendConfirmation: n, showModal: r, push: a },
          mobile: c,
          twitterButton: s
        } = e;
        return i.a.createElement(
          E.e,
          null,
          Object(g.tokenEnabled)() &&
            i.a.createElement(
              o.Fragment,
              null,
              i.a.createElement(y, null),
              i.a.createElement(E.m, { mt: 4 })
            ),
          !t.confirmed &&
            i.a.createElement(
              E.E,
              { fdirection: 'column', justify: 'space-between' },
              i.a.createElement(
                E.E,
                { fdirection: 'row', align: 'center', mt: 4 },
                i.a.createElement(
                  E.d,
                  { c: j.b.secondaryText, inline: 1 },
                  'Confirm your e-mail to earn',
                  ' ',
                  i.a.createElement(f.a, { inline: 1, size: 2, amount: h.EMAIL_REWARD }),
                  ' ',
                  h.EMAIL_REWARD > 1 ? 'coins' : 'coin',
                  i.a.createElement(
                    E.x,
                    null,
                    "*if you don't see a confirmation email in your inbox, please check your spam folder"
                  )
                )
              ),
              i.a.createElement(
                w.a,
                {
                  to: '#',
                  onClick: n,
                  onPress: n,
                  external: !0,
                  mr: ['auto', 0],
                  mobile: c,
                  fel: !0
                },
                i.a.createElement(
                  E.F,
                  { w: [22, 'auto'], mt: 3, mobile: c },
                  i.a.createElement(E.v, { c: j.b.white }, 'Confirm E-mail')
                )
              ),
              i.a.createElement(E.m, { mt: 4 })
            ),
          !t.twitterId &&
            i.a.createElement(
              E.e,
              null,
              i.a.createElement(
                E.E,
                { fdirection: 'row', align: 'center', mt: 4 },
                i.a.createElement(
                  E.d,
                  { c: j.b.secondaryText, inline: 1 },
                  'Connect your Relevant account with your Twitter account to earn',
                  ' ',
                  i.a.createElement(f.a, {
                    inline: 1,
                    size: 2,
                    amount: t.confirmed
                      ? h.TWITTER_REWARD
                      : h.TWITTER_REWARD + h.EMAIL_REWARD
                  }),
                  ' ',
                  h.TWITTER_REWARD > 1 ? 'coins' : 'coin'
                )
              ),
              s,
              i.a.createElement(E.m, { mt: 4 })
            ),
          i.a.createElement(
            E.E,
            { mt: 4 },
            i.a.createElement(
              w.a,
              {
                to: '#',
                onClick: () => r('invite'),
                onPress: () => a('invites'),
                external: !0,
                mr: 'auto',
                mobile: c
              },
              i.a.createElement(E.v, { c: j.b.blue }, 'Invite Friends')
            )
          )
        );
      }
      function y() {
        var e = Object(p.d)(),
          t = n('./public/img/uniswap.png'),
          r = Object(g.exchangeLink)();
        return i.a.createElement(
          w.a,
          { inline: 1, to: r, external: !0, mr: ['auto', 0], mt: 3, target: '_blank' },
          i.a.createElement(
            E.r,
            {
              w: [22, 'auto'],
              bg: j.b.uniswap,
              m: 0,
              c: j.b.white,
              onPress: () => e(Object(m.goToUrl)(r))
            },
            i.a.createElement(
              E.E,
              { fdirection: 'row', justify: 'center', align: 'center' },
              i.a.createElement(E.s, {
                resizeMode: 'contain',
                source: t,
                w: 3,
                h: 3,
                mr: 1.5
              }),
              i.a.createElement(E.v, { c: j.b.white }, 'Uniswap Exchange')
            )
          )
        );
      }
      _.propTypes = {
        actions: s.a.object,
        auth: s.a.object,
        mobile: s.a.bool,
        twitterButton: s.a.node
      };
      var O = _,
        R = n('./public/img/icons/twitter_white.png'),
        v = n('./public/img/icons/reddit.png'),
        C = () =>
          i.a.createElement(
            w.a,
            { to: '/auth/twitter', external: !0, mr: ['auto', 0], mt: 3 },
            i.a.createElement(
              E.r,
              {
                w: [22, 'auto'],
                bg: j.b.twitterBlue,
                m: 0,
                c: j.b.white,
                fdirection: 'row'
              },
              i.a.createElement(E.s, {
                resizeMode: 'contain',
                source: R,
                w: 3,
                h: 3,
                mr: 1.5
              }),
              i.a.createElement(E.v, { c: j.b.white }, 'Connect Twitter')
            )
          ),
        x = () =>
          i.a.createElement(
            w.a,
            { to: '/auth/reddit', external: !0, mr: ['auto', 0], mt: 3 },
            i.a.createElement(
              E.r,
              {
                w: [22, 'auto'],
                bg: j.b.redditColor,
                m: 0,
                c: j.b.white,
                fdirection: 'row'
              },
              i.a.createElement(E.s, {
                resizeMode: 'contain',
                source: v,
                w: 3,
                h: 3,
                mr: 1.5
              }),
              i.a.createElement(E.v, { c: j.b.white }, 'Connect Reddit')
            )
          );
      class T extends o.Component {
        render() {
          return i.a.createElement(
            O,
            a()({}, this.props, {
              twitterButton: i.a.createElement(C, null),
              redditButton: i.a.createElement(x, null)
            })
          );
        }
      }
      T.propTypes = { actions: s.a.object, close: s.a.func, auth: s.a.object };
      t.default = Object(p.c)(
        e => ({ auth: u()(e, 'auth', {}) || {} }),
        e => ({
          actions: Object(b.bindActionCreators)(
            { sendConfirmation: d.sendConfirmation, showModal: m.showModal },
            e
          )
        })
      )(T);
    },
    './src/modules/stats/coinStat.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        i = n.n(o),
        c = n('../../node_modules/react/index.js'),
        s = n.n(c),
        l = n('../../node_modules/prop-types/index.js'),
        u = n.n(l),
        d = s.a.createContext({ wallet: null }),
        m = n('./src/utils/numbers.js'),
        b = n('./src/utils/propValidation.js'),
        p = n('./src/styles/index.js'),
        E = n('./src/modules/styled/uni.js'),
        f = n('./src/modules/wallet/price.context.js'),
        h = n('./public/img/relevantcoin.png');
      function w(e) {
        var t,
          {
            user: n,
            isOwner: r,
            wallet: o,
            size: c,
            amount: l,
            mr: u,
            align: d,
            noNumber: b,
            secondary: w,
            fs: j,
            lh: g,
            inline: _,
            c: y,
            spaceBetween: O,
            showPrice: R
          } = e,
          v = i()(e, [
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
        'number' == typeof l
          ? (t = l)
          : n && ((t = n.balance), n.tokenBalance && (t += n.tokenBalance));
        var C = Object(f.usePrice)(t);
        r &&
          n.ethAddress &&
          n.ethAddress[0] &&
          o.connectedBalance &&
          (t = o.connectedBalance + n.balance);
        var x = 'number' == typeof c ? c : 3,
          T = w ? E.x : E.w,
          P = 'center' === d ? 0 : Object(p.i)(-1, 'px'),
          I = _ ? E.B : E.t,
          A = 0;
        return (
          !_ && x && (A = x / 4),
          !_ && O && (A = O),
          s.a.createElement(
            I,
            a()({}, v, {
              inline: _ ? 1 : 0,
              mr: 'number' == typeof u ? u : _ ? 0 : 1.5,
              align: d
            }),
            s.a.createElement(E.s, {
              inline: _ ? 1 : 0,
              source: h,
              h: 1 * x,
              w: 1.05 * x,
              style: { bottom: P },
              resizeMode: 'contain'
            }),
            b
              ? null
              : s.a.createElement(
                  T,
                  { ml: A, fs: j, lh: g, inline: _ ? 1 : 0, c: y },
                  _ ? ' ' : '',
                  Object(m.abbreviateNumber)(t),
                  R ? C : ''
                )
          )
        );
      }
      w.propTypes = {
        lh: u.a.number,
        inline: u.a.oneOfType([u.a.bool, u.a.number]),
        secondary: u.a.bool,
        mr: u.a.number,
        fs: u.a.number,
        amount: u.a.number,
        size: u.a.number,
        user: b.c,
        isOwner: u.a.bool,
        wallet: u.a.object,
        align: u.a.string,
        lineheight: u.a.string,
        c: u.a.string,
        noNumber: u.a.bool,
        spaceBetween: u.a.number,
        showPrice: u.a.bool
      };
      t.a = Object(c.memo)(e =>
        s.a.createElement(d.Consumer, null, t =>
          s.a.createElement(w, a()({ wallet: t }, e))
        )
      );
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return h;
        }),
        n.d(t, 'exchangeLink', function() {
          return w;
        }),
        n.d(t, 'tokenEnabled', function() {
          return j;
        }),
        n.d(t, 'usePrice', function() {
          return g;
        }),
        n.d(t, 'default', function() {
          return _;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = n.n(o),
        c = n('../../node_modules/react/index.js'),
        s = n.n(c),
        l = n('../../node_modules/prop-types/index.js'),
        u = n.n(l),
        d = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        m = n('./src/utils/numbers.js');
      function b(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function(t) {
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var { TOKEN_ADDRESS: E, DISABLE_PRICE: f } = Object({
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
        h = s.a.createContext(0);
      function w() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(E);
      }
      function j() {
        return !!E;
      }
      function g(e, t) {
        var { price: n } = Object(c.useContext)(h);
        return n
          ? 'number' === t
            ? Object(m.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(m.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function _(e) {
        var { children: t } = e,
          [n, r] = Object(c.useReducer)(y, {
            loading: !1,
            error: !1,
            data: null,
            refresh: 0
          });
        Object(c.useEffect)(() => {
          var e = !1;
          return (
            (function() {
              var t = i()(function*() {
                if ((r({ type: 'FETCH_PRICE_INIT' }), E && !f))
                  try {
                    var t = yield Object(d.getTokenReserves)(E),
                      n = yield fetch('https://api.infura.io/v1/ticker/ethusd'),
                      a = yield n.json();
                    e ||
                      r({
                        type: 'FETCH_PRICE_SUCCESS',
                        payload: p(p({}, t), {}, { ethPrice: a.bid })
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
        var a = (function(e) {
            if (!e) return null;
            var { ethReserve: t, tokenReserve: n, ethPrice: r } = e;
            if (!t || !n) return null;
            var a = t.amount.div(n.amount).times(r);
            return parseFloat(a.toString());
          })(n.data),
          o = '($'.concat(Object(m.abbreviateNumber)(a, 2), ')');
        return s.a.createElement(h.Provider, { value: { price: a, priceString: o } }, t);
      }
      _.propTypes = { children: u.a.node };
      var y = (e, t) => {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return p(p({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return p(p({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return p(p({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return p(p({}, e), {}, { loading: !1, error: t.payload });
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
//# sourceMappingURL=37.bundle.js.map
