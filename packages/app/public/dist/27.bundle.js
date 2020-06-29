(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [27, 61],
  {
    './public/img/info.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/info.png');
    },
    './src/modules/listview/web/infScroll.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return d;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        s = n.n(a),
        i = n('../../node_modules/react/index.js'),
        c = n.n(i),
        l = n('../../node_modules/prop-types/index.js'),
        u = n.n(l);
      class d extends i.Component {
        constructor(e) {
          super(e),
            (this.scrollListener = this.scrollListener.bind(this)),
            (this.attachScrollListener = this.attachScrollListener.bind(this));
        }
        componentDidMount() {
          (this.pageLoaded = this.props.pageStart),
            this.attachScrollListener(),
            (this.data = this.props.data),
            (this.data && this.data.length) || this.props.loadMore(this.pageLoaded);
        }
        componentDidUpdate() {
          this.data.length !== this.props.data.length &&
            (this.attachScrollListener(), (this.data = this.props.data)),
            !this.props.data.length < this.data.length &&
              (this.pageLoaded = this.props.pageStart);
        }
        componentWillUnmount() {
          this.detachScrollListener();
        }
        setDefaultLoader(e) {
          this.defaultLoader = e;
        }
        detachScrollListener() {
          var e = window;
          !1 === this.props.useWindow && (e = this.scrollComponent.parentNode),
            e.removeEventListener('scroll', this.scrollListener, this.props.useCapture),
            e.removeEventListener('resize', this.scrollListener, this.props.useCapture);
        }
        attachScrollListener() {
          if (this.props.hasMore) {
            var e = window;
            !1 === this.props.useWindow && (e = this.scrollComponent.parentNode),
              e.addEventListener('scroll', this.scrollListener, this.props.useCapture),
              e.addEventListener('resize', this.scrollListener, this.props.useCapture),
              this.props.initialLoad && this.scrollListener();
          }
        }
        scrollListener() {
          if (this.props.data && this.props.data.length) {
            var e,
              t = this.scrollComponent,
              n = window;
            if (this.props.useWindow) {
              var r =
                void 0 !== n.pageYOffset
                  ? n.pageYOffset
                  : (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                    ).scrollTop;
              e = this.props.isReverse
                ? r
                : this.calculateTopPosition(t) +
                  (t.offsetHeight - r - window.innerHeight);
            } else
              e = this.props.isReverse
                ? t.parentNode.scrollTop
                : t.scrollHeight - t.parentNode.scrollTop - t.parentNode.clientHeight;
            e < Number(this.props.threshold) &&
              (this.detachScrollListener(),
              'function' == typeof this.props.loadMore &&
                this.props.loadMore((this.pageLoaded += 1)));
          }
        }
        calculateTopPosition(e) {
          return e ? e.offsetTop + this.calculateTopPosition(e.offsetParent) : 0;
        }
        render() {
          var e = this.props,
            {
              children: t,
              element: n,
              hasMore: r,
              initialLoad: a,
              isReverse: s,
              loader: i,
              loadMore: l,
              pageStart: u,
              threshold: d,
              useCapture: p,
              useWindow: m,
              data: b
            } = e,
            h = o()(e, [
              'children',
              'element',
              'hasMore',
              'initialLoad',
              'isReverse',
              'loader',
              'loadMore',
              'pageStart',
              'threshold',
              'useCapture',
              'useWindow',
              'data'
            ]);
          return (
            (h.ref = e => {
              this.scrollComponent = e;
            }),
            c.a.createElement(n, h, t, r && (i || this.defaultLoader))
          );
        }
      }
      s()(d, 'propTypes', { data: u.a.array }),
        (d.propTypes = {
          element: u.a.string,
          hasMore: u.a.bool,
          initialLoad: u.a.bool,
          isReverse: u.a.bool,
          loadMore: u.a.func.isRequired,
          pageStart: u.a.number,
          threshold: u.a.number,
          useCapture: u.a.bool,
          useWindow: u.a.bool,
          children: u.a.oneOfType([u.a.object, u.a.array]).isRequired,
          loader: u.a.object
        }),
        (d.defaultProps = {
          element: 'div',
          hasMore: !1,
          initialLoad: !0,
          pageStart: 0,
          threshold: 250,
          useWindow: !0,
          isReverse: !1,
          useCapture: !1,
          loader: null
        });
    },
    './src/modules/stats/coinStat.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        s = n.n(a),
        i = n('../../node_modules/react/index.js'),
        c = n.n(i),
        l = n('../../node_modules/prop-types/index.js'),
        u = n.n(l),
        d = c.a.createContext({ wallet: null }),
        p = n('./src/utils/numbers.js'),
        m = n('./src/utils/propValidation.js'),
        b = n('./src/styles/index.js'),
        h = n('./src/modules/styled/uni.js'),
        f = n('./src/modules/wallet/price.context.js'),
        g = n('./public/img/relevantcoin.png');
      function y(e) {
        var t,
          {
            user: n,
            isOwner: r,
            wallet: a,
            size: i,
            amount: l,
            mr: u,
            align: d,
            noNumber: m,
            secondary: y,
            fs: E,
            lh: j,
            inline: v,
            c: O,
            spaceBetween: w,
            showPrice: P
          } = e,
          S = s()(e, [
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
        var _ = Object(f.usePrice)(t);
        r &&
          n.ethAddress &&
          n.ethAddress[0] &&
          a.connectedBalance &&
          (t = a.connectedBalance + n.balance);
        var x = 'number' == typeof i ? i : 3,
          T = y ? h.x : h.w,
          k = 'center' === d ? 0 : Object(b.i)(-1, 'px'),
          C = v ? h.B : h.t,
          R = 0;
        return (
          !v && x && (R = x / 4),
          !v && w && (R = w),
          c.a.createElement(
            C,
            o()({}, S, {
              inline: v ? 1 : 0,
              mr: 'number' == typeof u ? u : v ? 0 : 1.5,
              align: d
            }),
            c.a.createElement(h.s, {
              inline: v ? 1 : 0,
              source: g,
              h: 1 * x,
              w: 1.05 * x,
              style: { bottom: k },
              resizeMode: 'contain'
            }),
            m
              ? null
              : c.a.createElement(
                  T,
                  { ml: R, fs: E, lh: j, inline: v ? 1 : 0, c: O },
                  v ? ' ' : '',
                  Object(p.abbreviateNumber)(t),
                  P ? _ : ''
                )
          )
        );
      }
      y.propTypes = {
        lh: u.a.number,
        inline: u.a.oneOfType([u.a.bool, u.a.number]),
        secondary: u.a.bool,
        mr: u.a.number,
        fs: u.a.number,
        amount: u.a.number,
        size: u.a.number,
        user: m.c,
        isOwner: u.a.bool,
        wallet: u.a.object,
        align: u.a.string,
        lineheight: u.a.string,
        c: u.a.string,
        noNumber: u.a.bool,
        spaceBetween: u.a.number,
        showPrice: u.a.bool
      };
      t.a = Object(i.memo)(e =>
        c.a.createElement(d.Consumer, null, t =>
          c.a.createElement(y, o()({ wallet: t }, e))
        )
      );
    },
    './src/modules/tooltip/tooltip.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return x;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        s = n.n(a),
        i = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        c = n.n(i),
        l = n('../../node_modules/react/index.js'),
        u = n.n(l),
        d = n('../../node_modules/react-redux/es/index.js'),
        p = n('../../node_modules/prop-types/index.js'),
        m = n.n(p),
        b = n('./src/modules/styled/uni.js'),
        h = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        f = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        g = n.n(f),
        y = n('../../node_modules/react-native-web/dist/exports/Dimensions/index.js'),
        E = n('./src/modules/tooltip/tooltip.actions.js');
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function(t) {
                g()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var O = {
        vertical: 'top',
        horizontal: 'right',
        horizontalOffset: 0,
        verticalOffset: 10
      };
      var w = n('../../node_modules/react-tooltip/dist/index.es.js');
      function P() {
        var e = c()([
          '\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  z-index: 1;\n'
        ]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      var S = n('./public/img/info.png'),
        _ = h.b.Text(P());
      function x(e) {
        var { children: t, name: n, data: r, info: a, inline: i } = e,
          c = s()(e, ['children', 'name', 'data', 'info', 'inline']);
        Object(l.useEffect)(() => {
          w.a.rebuild && w.a.rebuild();
        }, [r, n, t]),
          Object(l.useEffect)(() => r.shouldRegister && f(), [r.shouldRegister, f]);
        var p = Object(d.d)(),
          m = Object(l.useRef)(),
          { toggleTooltip: h, initTooltip: f } = (function(e) {
            var { tooltips: t, dispatch: n } = e,
              r = e => {
                t.forEach(t => {
                  t.data.desktopOnly ||
                    (t.el.current &&
                      t.el.current.measureInWindow((r, o, a, s) => {
                        var i = { x: r, y: o, w: a, h: s };
                        r + o + a + s !== 0 &&
                          (o > y.a.get('window').height - 50 ||
                            (n(
                              Object(E.b)(
                                v(v({ name: t.name, parent: i }, O), {}, { data: t.data })
                              )
                            ),
                            n(Object(E.c)(e))));
                      }));
                });
              };
            return {
              initTooltips: () => {
                t.forEach(e =>
                  e.data.desktopOnly
                    ? null
                    : n(Object(E.b)({ name: e.name, toggle: () => r(e.name) }))
                );
              },
              toggleTooltip: r
            };
          })({ tooltips: [{ name: n, el: m, data: r }], dispatch: p }),
          g = (t && b.E) || _;
        return a
          ? u.a.createElement(
              b.B,
              { ref: m, onPress: (r.desktopOnly, null), inline: i },
              u.a.createElement(
                b.s,
                o()(
                  {
                    'data-event-off': 'click',
                    'data-place': r.position,
                    'data-for': 'mainTooltip',
                    'data-tip': JSON.stringify({ type: 'TEXT', props: r })
                  },
                  c,
                  { source: S, resizeMode: 'contain', h: 1.7, w: 1.7, inline: i },
                  c
                )
              )
            )
          : u.a.createElement(
              g,
              {
                ref: m,
                'data-event-off': 'click',
                'data-place': r.position,
                'data-for': 'mainTooltip',
                'data-tip': JSON.stringify({ type: 'TEXT', props: r }),
                onLongPress: () => h(n),
                onPress: (r.desktopOnly, null)
              },
              t
            );
      }
      x.propTypes = {
        name: m.a.string,
        data: m.a.object,
        children: m.a.object,
        info: m.a.bool,
        inline: m.a.oneOfType([m.a.bool, m.a.number])
      };
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return g;
        }),
        n.d(t, 'exchangeLink', function() {
          return y;
        }),
        n.d(t, 'tokenEnabled', function() {
          return E;
        }),
        n.d(t, 'usePrice', function() {
          return j;
        }),
        n.d(t, 'default', function() {
          return v;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = n.n(a),
        i = n('../../node_modules/react/index.js'),
        c = n.n(i),
        l = n('../../node_modules/prop-types/index.js'),
        u = n.n(l),
        d = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        p = n('./src/utils/numbers.js');
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var { TOKEN_ADDRESS: h, DISABLE_PRICE: f } = Object({
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
        g = c.a.createContext(0);
      function y() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(h);
      }
      function E() {
        return !!h;
      }
      function j(e, t) {
        var { price: n } = Object(i.useContext)(g);
        return n
          ? 'number' === t
            ? Object(p.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(p.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function v(e) {
        var { children: t } = e,
          [n, r] = Object(i.useReducer)(O, {
            loading: !1,
            error: !1,
            data: null,
            refresh: 0
          });
        Object(i.useEffect)(() => {
          var e = !1;
          return (
            (function() {
              var t = s()(function*() {
                if ((r({ type: 'FETCH_PRICE_INIT' }), h && !f))
                  try {
                    var t = yield Object(d.getTokenReserves)(h),
                      n = yield fetch('https://api.infura.io/v1/ticker/ethusd'),
                      o = yield n.json();
                    e ||
                      r({
                        type: 'FETCH_PRICE_SUCCESS',
                        payload: b(b({}, t), {}, { ethPrice: o.bid })
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
        var o = (function(e) {
            if (!e) return null;
            var { ethReserve: t, tokenReserve: n, ethPrice: r } = e;
            if (!t || !n) return null;
            var o = t.amount.div(n.amount).times(r);
            return parseFloat(o.toString());
          })(n.data),
          a = '($'.concat(Object(p.abbreviateNumber)(o, 2), ')');
        return c.a.createElement(g.Provider, { value: { price: o, priceString: a } }, t);
      }
      v.propTypes = { children: u.a.node };
      var O = (e, t) => {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return b(b({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return b(b({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return b(b({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return b(b({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/modules/wallet/web/wallet.container.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        a = n('../../node_modules/react/index.js'),
        s = n.n(a),
        i = n('../../node_modules/react-redux/es/index.js'),
        c = n('../../node_modules/redux/es/redux.js'),
        l = n('../../node_modules/prop-types/index.js'),
        u = n.n(l),
        d = n('./src/modules/auth/auth.actions.js'),
        p = n('./src/modules/wallet/earnings.actions.js'),
        m = n('./src/utils/index.js'),
        b = n('./src/styles/index.js'),
        h = n('./src/modules/styled/uni.js'),
        f = n('./src/utils/propValidation.js'),
        g = n('./src/utils/numbers.js');
      class y extends a.PureComponent {
        render() {
          var {
              earning: e,
              month: t,
              payout: n,
              screenSize: r,
              PostPreview: o
            } = this.props,
            { community: a, post: i } = e;
          if (!e) return null;
          var { status: c = '' } = e,
            l = 'pending' === c && Object(g.getTimestamp)(e.payoutTime),
            u = e.cashOutAttempt
              ? 'Transfer tokens to Ethereum wallet: '.concat(c)
              : ''.concat(c).concat(l ? ' ' + l.toLowerCase() : ''),
            d =
              t &&
              s.a.createElement(
                h.E,
                { mt: 4 },
                s.a.createElement(h.d, null, t.toUpperCase())
              );
          return s.a.createElement(
            h.E,
            { m: ['0 4', '0 2'], key: e._id },
            d,
            s.a.createElement(E, {
              date: e.createdAt,
              amount: n || -e.cashOutAmt,
              text: u,
              bb: !i
            }),
            i
              ? s.a.createElement(
                  h.E,
                  { border: r ? null : 1 },
                  s.a.createElement(o, { screenSize: r, community: a, postId: i })
                )
              : null
          );
        }
      }
      function E(e) {
        var { date: t, amount: n, text: r, bb: o } = e;
        return s.a.createElement(
          h.E,
          {
            bt: !0,
            bl: !0,
            br: !0,
            bb: o,
            p: '1.5 1',
            fdirection: 'row',
            mt: 2,
            bg: b.b.secondaryBG,
            grow: 1,
            justify: 'space-between'
          },
          s.a.createElement(
            h.E,
            { display: 'flex', fdirection: 'row', wrap: !0, flex: 1 },
            s.a.createElement(h.d, { mr: [4, 2] }, t && m.d.getDayMonthYearTimestamp(t)),
            s.a.createElement(h.d, { c: b.b.secondaryText }, r)
          ),
          n < 0
            ? s.a.createElement(h.d, { c: b.b.red }, m.d.abbreviateNumber(n), ' REL')
            : s.a.createElement(
                h.d,
                { c: b.b.green },
                '+ ',
                m.d.abbreviateNumber(n),
                ' REL'
              )
        );
      }
      o()(y, 'propTypes', {
        earning: u.a.object,
        month: u.a.string,
        payout: u.a.number,
        screenSize: u.a.number,
        PostPreview: f.b
      }),
        (E.propTypes = {
          text: u.a.string,
          amount: u.a.number,
          date: u.a.string,
          bb: u.a.bool
        });
      var j = n('./src/utils/eth.js'),
        v = n('./src/modules/wallet/price.context.js'),
        O = n('./src/modules/stats/coinStat.component.js'),
        w = n('../common/lib/index.js'),
        P = n('./src/modules/tooltip/tooltip.component.js'),
        S = n('./src/modules/navigation/navigation.actions.js'),
        _ = n('./src/modules/navigation/ULink.component.js'),
        x = n('./src/utils/alert.js');
      function T() {
        var e = Object(i.d)(),
          t = Object(v.exchangeLink)(),
          n = Object(i.e)(e => e.auth.user).notificationSettings.bet.manual;
        return s.a.createElement(
          h.E,
          { mt: 2, fdirection: 'row', wrap: 'wrap' },
          b.d &&
            s.a.createElement(
              h.E,
              { mr: [2, 1], mt: 1, fdirection: 'row', align: 'center' },
              s.a.createElement(P.a, {
                name: 'coinInfo',
                data: {
                  text: 'You can get more coins or transfer up to '.concat(
                    w.CASHOUT_MAX,
                    ' coins to your your Metamask wallet via the browser app on https://relevant.community.'
                  )
                }
              }),
              s.a.createElement(h.v, { c: b.b.blue, mr: 0.5 }, 'Manage Coins')
            ),
          !b.d &&
            s.a.createElement(
              h.E,
              { mr: [2, 1], mt: 1, fdirection: 'row', align: 'center' },
              s.a.createElement(
                h.D,
                {
                  onPress: function() {
                    return b.d
                      ? Object(x.Alert)().alert(
                          'you can claim tokens via the Relevant browser app on https://relevant.community'
                        )
                      : e(Object(S.showModal)('cashOut'));
                  },
                  td: 'underline'
                },
                s.a.createElement(h.v, { c: b.b.blue, mr: 0.5 }, 'Claim Tokens')
              ),
              s.a.createElement(P.a, {
                info: !0,
                data: {
                  text: 'You can transfer up to '.concat(
                    w.CASHOUT_MAX,
                    ' coins to your your Metamask wallet.\n(You cannot transfer coins you got for refferrals and verifying social accounts.)'
                  )
                }
              })
            ),
          !b.d &&
            s.a.createElement(
              h.E,
              { mr: [2, 1], mt: 1, fdirection: 'row', align: 'center' },
              s.a.createElement(
                P.a,
                {
                  data: {
                    text:
                      'If you have Relevant tokens in your Metamask wallet, you need to connect your account to be able to use them.'
                  }
                },
                s.a.createElement(
                  h.D,
                  {
                    style: { zIndex: 1 },
                    onClick: () => e(Object(S.showModal)('connectMetamask')),
                    td: 'underline'
                  },
                  s.a.createElement(h.v, { c: b.b.blue }, 'Connect Your Wallet')
                )
              )
            ),
          Object(v.tokenEnabled)() &&
            !b.d &&
            s.a.createElement(
              h.E,
              { mt: 1, fdirection: 'row', mr: [2, 1], align: 'center' },
              s.a.createElement(
                _.a,
                { to: t, external: !0, target: '_blank' },
                s.a.createElement(
                  h.v,
                  {
                    c: b.b.blue,
                    onPress: () => {
                      e(Object(S.goToUrl)(t));
                    }
                  },
                  'Get more coins'
                )
              )
            ),
          s.a.createElement(
            h.E,
            { mt: 1, fdirection: 'row', align: 'center' },
            s.a.createElement(
              P.a,
              {
                data: {
                  text:
                    'When you upvote posts you also bet coins on them. How much you bet can be decided automatically or manualy.'
                }
              },
              s.a.createElement(
                h.D,
                {
                  style: { zIndex: 1 },
                  onPress: () => {
                    e(Object(d.updateNotificationSettings)({ bet: { manual: !n } }));
                  },
                  td: 'underline'
                },
                s.a.createElement(
                  h.v,
                  { c: b.b.blue },
                  n ? 'Disable' : 'Enable',
                  ' Betting Mode'
                )
              )
            )
          )
        );
      }
      function k() {
        var e = Object(i.e)(e => e.auth.user),
          t = Object(i.e)(e => e.navigation.screenSize),
          n = Object(v.usePrice)(w.CASHOUT_MAX);
        if (!e) return null;
        var r = e.tokenBalance,
          { airdropTokens: o, lockedTokens: a } = e,
          c = e.balance ? Math.round(100 * (1 - a / e.balance)) : 0,
          l = (function(e) {
            var {
              unclaimed: t,
              metaMaskTokens: n,
              airdropTokens: r,
              lockedTokens: o,
              stakingPower: a
            } = e;
            return [
              {
                text: 'Unclaimed Coins',
                value: Math.max(t, 0),
                tip: 'You can transfer these coins to your Ethereum wallet.'
              },
              {
                text: 'Metamask Coins',
                value: n,
                tip: 'These are the coins located in your connected Ethereum wallet.'
              },
              {
                text: 'Airdrop Coins',
                value: r,
                tip:
                  'These are coins you got for referrals and verifying social accounts.\nYou cannot transfer these coins to Metamask.',
                alwaysShow: !0
              },
              {
                text: 'Locked Tokens Coins',
                value: o,
                tip:
                  'These are coins that you are currently betting on posts.\nThey get unlocked once the bets expire.'
              },
              {
                text: 'Staking Power',
                value: a + '%',
                tip: 'This is the ratio between unlocked and locked coins.',
                alwaysShow: !0,
                stringValue: !0
              }
            ];
          })({
            unclaimed: e.balance - e.airdropTokens,
            metaMaskTokens: r,
            airdropTokens: o,
            lockedTokens: a,
            stakingPower: c
          });
        return s.a.createElement(
          h.E,
          { m: ['0 4 2 4', '2 2 0 2'] },
          t
            ? null
            : s.a.createElement(
                h.E,
                null,
                s.a.createElement(
                  h.d,
                  { mt: 2 },
                  'These are coins you earned as rewards. You can transfer up to ',
                  w.CASHOUT_MAX,
                  n,
                  ' coins to your Ethereum wallet (this limit will be increased as the network grows).'
                )
              ),
          s.a.createElement(
            h.E,
            { br: !0, bl: !0, bt: !0, p: '2', mt: 2 },
            s.a.createElement(
              h.E,
              { fdirection: 'row', justify: 'space-between', wrap: !0 },
              s.a.createElement(h.d, { mb: 0.5 }, 'Account Balance'),
              s.a.createElement(h.x, null, Object(j.g)(e.ethAddress[0]))
            ),
            s.a.createElement(
              h.E,
              { fdirection: 'row', align: 'center', display: 'flex', mt: 2 },
              s.a.createElement(O.a, {
                fs: 4.5,
                lh: 5,
                size: 5,
                user: e,
                align: 'center',
                showPrice: !0
              })
            )
          ),
          s.a.createElement(
            h.E,
            { fdirection: 'row', wrap: !0, border: 1, p: '2' },
            l.map(
              e =>
                (!!e.value || !e.alwayShow) &&
                s.a.createElement(
                  h.E,
                  { key: e.text },
                  e.tip &&
                    s.a.createElement(P.a, {
                      name: e.text.replace(' ', ''),
                      data: { text: e.tip }
                    }),
                  s.a.createElement(
                    h.x,
                    { mr: 2 },
                    e.text,
                    ': ',
                    Object(g.abbreviateNumber)(e.value)
                  )
                )
            )
          ),
          s.a.createElement(T, null),
          s.a.createElement(h.q, { mt: [9, 4] }, 'Recent Activity'),
          t
            ? null
            : s.a.createElement(
                h.d,
                { mt: 2 },
                'Your rewards for upvoting links and discussion threads that are relevant to the community.'
              )
        );
      }
      var C = Object(a.memo)(k),
        R = n('./src/modules/listview/web/infScroll.component.js'),
        L = n('./src/utils/rewards.js'),
        M = n('./src/modules/post/postinfo.component.js'),
        N = n('./src/modules/post/postinfo.mobile.component.js');
      function D(e, t) {
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
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var I = e => {
        var { posts: t, postId: n, community: r, actions: o, auth: a, screenSize: i } = e,
          c = t.posts[n];
        if (!c) return null;
        var l = c && c.metaPost && t.links[c.metaPost],
          u = c.parentPost ? c.parentPost._id || c.parentPost : c._id;
        return s.a.createElement(
          h.E,
          null,
          s.a.createElement(
            _.a,
            {
              onPress: () => o.goToPost({ _id: u, community: r }),
              to: '/'.concat(r, '/post/').concat(u)
            },
            s.a.createElement(
              h.E,
              null,
              i
                ? s.a.createElement(N.a, { preview: !0, link: l, post: c, noLink: !0 })
                : s.a.createElement(M.a, {
                    preview: !0,
                    link: l,
                    post: c,
                    noLink: !0,
                    auth: a
                  })
            )
          )
        );
      };
      I.propTypes = {
        posts: u.a.object,
        screenSize: u.a.number,
        postId: u.a.string,
        community: u.a.string,
        actions: u.a.object,
        auth: u.a.object
      };
      var B = Object(i.c)(
        function(e) {
          return { posts: e.posts, auth: e.auth };
        },
        e => ({ actions: Object(c.bindActionCreators)(A({}, S), e) })
      )(I);
      function z(e, t) {
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      class F extends a.Component {
        constructor() {
          super(...arguments),
            o()(this, 'state', { reloading: !1 }),
            o()(this, 'hasMore', !0),
            o()(this, 'load', (e, t) => {
              (this.hasMore = 50 * e <= t),
                this.hasMore && this.props.actions.getEarnings(null, 50, t);
            }),
            o()(this, 'reload', () => this.load(0, 0)),
            o()(this, 'renderHeader', () =>
              s.a.createElement(h.E, null, s.a.createElement(C, { isWeb: !0 }))
            ),
            o()(this, 'renderRow', e => {
              var { item: t } = e,
                { screenSize: n } = this.props;
              if (!t) return null;
              var r = t,
                o = Object(L.b)(r),
                a = Object(g.getMonth)(r.createdAt),
                i = this.previousMonth !== a;
              return (
                (this.previousMonth = a),
                s.a.createElement(y, {
                  key: r._id,
                  earning: r,
                  payout: o,
                  month: i ? a : null,
                  PostPreview: B,
                  screenSize: n
                })
              );
            });
        }
        render() {
          var { earnings: e } = this.props,
            { list: t } = e,
            n = t.map(t => e.entities[t]);
          return (
            (this.previousMonth = null),
            s.a.createElement(
              h.E,
              { mb: 8 },
              this.renderHeader(),
              s.a.createElement(
                h.E,
                null,
                s.a.createElement(
                  R.a,
                  {
                    data: t,
                    loadMore: e => this.load(e, t.length),
                    hasMore: this.hasMore,
                    key: 'recent-activity',
                    className: 'parent',
                    style: { position: 'relative', marginBottom: 20 }
                  },
                  n.map(e => this.renderRow({ item: e }))
                )
              )
            )
          );
        }
      }
      o()(F, 'propTypes', {
        actions: u.a.object,
        earnings: u.a.object,
        screenSize: u.a.number
      });
      t.default = Object(i.c)(
        function(e) {
          return { earnings: e.earnings, screenSize: e.navigation.screenSize };
        },
        e => ({ actions: Object(c.bindActionCreators)(H(H({}, d), p), e) })
      )(F);
    },
    './src/utils/eth.js': function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return i;
      }),
        n.d(t, 'g', function() {
          return l;
        }),
        n.d(t, 'e', function() {
          return u;
        }),
        n.d(t, 'a', function() {
          return d;
        }),
        n.d(t, 'd', function() {
          return p;
        }),
        n.d(t, 'b', function() {
          return m;
        }),
        n.d(t, 'c', function() {
          return b;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(r),
        a = n('../../node_modules/crypto-browserify/index.js'),
        s = n.n(a);
      function i(e, t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = o()(function*(e, t) {
          var n = e.getSigner(),
            r = new Date(),
            o = { address: t, exp: Math.floor(r.setMinutes(r.getMinutes() + 5) / 1e3) };
          return { msg: o, signature: yield n.signMessage(JSON.stringify(o)) };
        })).apply(this, arguments);
      }
      function l(e) {
        return e ? e.slice(0, 6) + '...' + e.slice(e.length - 4, e.length) : null;
      }
      function u(e) {
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
          var r = f(n, t),
            o = Number(h(n) + r);
          return Number.parseFloat(o).toFixed(0);
        }
        return n.length > 18
          ? Number(n.slice(0, -18))
          : 18 === n.length
          ? Number('0.'.concat(n))
          : Number(n);
      }
      function p() {
        return s.a.randomBytes(16).toString('hex');
      }
      function m(e) {
        return ''.concat(e.slice(0, -18), '.').concat(e.slice(-18));
      }
      function b(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return (e * 10 ** t).toString();
      }
      function h(e) {
        return e.slice(0, -2).toString();
      }
      function f(e, t) {
        return Number(Number(e.slice(-2)) - t).toString();
      }
    },
    './src/utils/propValidation.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return s;
      }),
        n.d(t, 'a', function() {
          return i;
        }),
        n.d(t, 'b', function() {
          return c;
        });
      var r = n('../../node_modules/prop-types/index.js'),
        o = n.n(r),
        a = n('../../node_modules/react-is/index.js'),
        s = o.a.shape({
          handle: o.a.string,
          balance: o.a.number,
          image: o.a.string,
          name: o.a.string
        }),
        i =
          (o.a.shape({
            _id: o.a.string.isRequired,
            user: o.a.string.isRequired,
            title: o.a.string,
            embeddedUser: o.a.object,
            tags: o.a.array,
            body: o.a.string,
            postDate: o.a.instanceOf(Date),
            data: o.a.object,
            link: o.a.object,
            parentPost: o.a.number,
            type: o.a.string
          }),
          o.a.shape({ isAuthenticated: o.a.bool, user: s, community: o.a.string }));
      function c(e, t, n) {
        if (e[t] && !Object(a.isValidElementType)(e[t]))
          return new Error(
            "Invalid prop '"
              .concat(t, "' supplied to '")
              .concat(n, "': the prop is not a valid React component")
          );
      }
    },
    './src/utils/rewards.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return o;
      }),
        n.d(t, 'b', function() {
          return a;
        });
      var r = n('../common/lib/index.js');
      function o(e, t) {
        return t && e && !e.parentPost
          ? e.pagerank < t.currentShares / (t.postCount || 1)
            ? 0
            : ((e.payoutShare = e.pagerank / (t.topPostShares + e.pagerank || 1)),
              (e.payout = t.rewardFund * e.payoutShare),
              e.payout / r.TOKEN_DECIMALS)
          : null;
      }
      function a(e) {
        if ('pending' === e.status) {
          if (0 === e.totalPostShares) return 0;
          var t = e.estimatedPostPayout;
          return t > 1e8 && (t /= r.TOKEN_DECIMALS), (t * e.shares) / e.totalPostShares;
        }
        return e.earned || 'paidout' === e.status ? e.earned : 0;
      }
    },
    4: function(e, t) {},
    5: function(e, t) {},
    6: function(e, t) {},
    7: function(e, t) {}
  }
]);
//# sourceMappingURL=27.bundle.js.map
