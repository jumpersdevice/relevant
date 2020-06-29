(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [62, 59],
  {
    './public/img/info.png': function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAcNJREFUSA21lr8uREEUxu/qkVAREqGRKDUaBS2h0aolNlF5AZ1KoxIPoKXQKWi8gmyxnQgNYSMSrPH7xs7eybj3zqw/J/l2zr1zznfOmZkzd2tZpZgxplfBEpgCo0ByA5rgFJxkWe2asRcxEJlD8A5MBLKRrQseC2RWMH6KkBYFlQ++lWK2MGr/gNwFlC8chWIz/0ggv8RmEayD+wJ7BQkrsWueuizjeX5muyCAqhGX3ZO+jvEOY3/uWKm9ebOvnu6r4hKnREcx6bS4dT7DfhawDOYOuPfhqNMFd2bqFUahU6/PdS2RmihFXjA6BgfgOcUBG3GbRkIFOjmTOanZTPBRtXBnphUx1pqPgA0vwEzExy1ly52i3Pe7dsQr3TmD3tS8p8fUpCV6IOOBLyZTQ79KrKChCpqxFJjf58akeaws8zvd0WODuKPHVHs0lDOZi8TstQ+0QLzR9jxybS5ZmTlAF5c2mchdo8nd3udu58NxwQswjO0EOAehXfjMN6IrlZfdLmTslcUaI1+vKHn3suuGwEl3S7vE+Zb3jyVzYebigKtQ/vWD4yLaSlRimFnsWT5lmTtyN9o9+ZOPPl1ZJb//2/IJ6VCyT0IIcT0AAAAASUVORK5CYII=';
    },
    './src/modules/listview/web/infScroll.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return P;
      });
      var r = n('./node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        o = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        s = n.n(a),
        i = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        c = n.n(i),
        u = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        l = n.n(u),
        d = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        p = n.n(d),
        m = n('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        f = n.n(m),
        b = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        h = n.n(b),
        y = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        g = n.n(y),
        j = n('../../node_modules/react/index.js'),
        v = n.n(j),
        E = n('../../node_modules/prop-types/index.js'),
        O = n.n(E);
      function w(e) {
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
            r = h()(e);
          if (t) {
            var o = h()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return f()(this, n);
        };
      }
      var P = (function(e) {
        p()(n, e);
        var t = w(n);
        function n(e) {
          var r;
          return (
            s()(this, n),
            ((r = t.call(this, e)).scrollListener = r.scrollListener.bind(l()(r))),
            (r.attachScrollListener = r.attachScrollListener.bind(l()(r))),
            r
          );
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function() {
                (this.pageLoaded = this.props.pageStart),
                  this.attachScrollListener(),
                  (this.data = this.props.data),
                  (this.data && this.data.length) || this.props.loadMore(this.pageLoaded);
              }
            },
            {
              key: 'componentDidUpdate',
              value: function() {
                this.data.length !== this.props.data.length &&
                  (this.attachScrollListener(), (this.data = this.props.data)),
                  !this.props.data.length < this.data.length &&
                    (this.pageLoaded = this.props.pageStart);
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.detachScrollListener();
              }
            },
            {
              key: 'setDefaultLoader',
              value: function(e) {
                this.defaultLoader = e;
              }
            },
            {
              key: 'detachScrollListener',
              value: function() {
                var e = window;
                !1 === this.props.useWindow && (e = this.scrollComponent.parentNode),
                  e.removeEventListener(
                    'scroll',
                    this.scrollListener,
                    this.props.useCapture
                  ),
                  e.removeEventListener(
                    'resize',
                    this.scrollListener,
                    this.props.useCapture
                  );
              }
            },
            {
              key: 'attachScrollListener',
              value: function() {
                if (this.props.hasMore) {
                  var e = window;
                  !1 === this.props.useWindow && (e = this.scrollComponent.parentNode),
                    e.addEventListener(
                      'scroll',
                      this.scrollListener,
                      this.props.useCapture
                    ),
                    e.addEventListener(
                      'resize',
                      this.scrollListener,
                      this.props.useCapture
                    ),
                    this.props.initialLoad && this.scrollListener();
                }
              }
            },
            {
              key: 'scrollListener',
              value: function() {
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
                      : t.scrollHeight -
                        t.parentNode.scrollTop -
                        t.parentNode.clientHeight;
                  e < Number(this.props.threshold) &&
                    (this.detachScrollListener(),
                    'function' == typeof this.props.loadMore &&
                      this.props.loadMore((this.pageLoaded += 1)));
                }
              }
            },
            {
              key: 'calculateTopPosition',
              value: function(e) {
                return e ? e.offsetTop + this.calculateTopPosition(e.offsetParent) : 0;
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.children,
                  r = t.element,
                  a = t.hasMore,
                  s = (t.initialLoad, t.isReverse, t.loader),
                  i =
                    (t.loadMore,
                    t.pageStart,
                    t.threshold,
                    t.useCapture,
                    t.useWindow,
                    t.data,
                    o()(t, [
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
                    ]));
                return (
                  (i.ref = function(t) {
                    e.scrollComponent = t;
                  }),
                  v.a.createElement(r, i, n, a && (s || this.defaultLoader))
                );
              }
            }
          ]),
          n
        );
      })(j.Component);
      g()(P, 'propTypes', { data: O.a.array }),
        (P.propTypes = {
          element: O.a.string,
          hasMore: O.a.bool,
          initialLoad: O.a.bool,
          isReverse: O.a.bool,
          loadMore: O.a.func.isRequired,
          pageStart: O.a.number,
          threshold: O.a.number,
          useCapture: O.a.bool,
          useWindow: O.a.bool,
          children: O.a.oneOfType([O.a.object, O.a.array]).isRequired,
          loader: O.a.object
        }),
        (P.defaultProps = {
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
      var r = n('./node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        s = n.n(a),
        i = n('../../node_modules/react/index.js'),
        c = n.n(i),
        u = n('../../node_modules/prop-types/index.js'),
        l = n.n(u),
        d = c.a.createContext({ wallet: null }),
        p = n('./src/utils/numbers.js'),
        m = n('./src/utils/propValidation.js'),
        f = n('./src/styles/index.js'),
        b = n('./src/modules/styled/uni.js'),
        h = n('./src/modules/wallet/price.context.js'),
        y = n('./public/img/relevantcoin.png');
      function g(e) {
        var t,
          n = e.user,
          r = e.isOwner,
          a = e.wallet,
          i = e.size,
          u = e.amount,
          l = e.mr,
          d = e.align,
          m = e.noNumber,
          g = e.secondary,
          j = e.fs,
          v = e.lh,
          E = e.inline,
          O = e.c,
          w = e.spaceBetween,
          P = e.showPrice,
          x = s()(e, [
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
        var _ = Object(h.usePrice)(t);
        r &&
          n.ethAddress &&
          n.ethAddress[0] &&
          a.connectedBalance &&
          (t = a.connectedBalance + n.balance);
        var S = 'number' == typeof i ? i : 3,
          T = g ? b.x : b.w,
          k = 'center' === d ? 0 : Object(f.i)(-1, 'px'),
          R = E ? b.B : b.t,
          C = 0;
        return (
          !E && S && (C = S / 4),
          !E && w && (C = w),
          c.a.createElement(
            R,
            o()({}, x, {
              inline: E ? 1 : 0,
              mr: 'number' == typeof l ? l : E ? 0 : 1.5,
              align: d
            }),
            c.a.createElement(b.s, {
              inline: E ? 1 : 0,
              source: y,
              h: 1 * S,
              w: 1.05 * S,
              style: { bottom: k },
              resizeMode: 'contain'
            }),
            m
              ? null
              : c.a.createElement(
                  T,
                  { ml: C, fs: j, lh: v, inline: E ? 1 : 0, c: O },
                  E ? ' ' : '',
                  Object(p.abbreviateNumber)(t),
                  P ? _ : ''
                )
          )
        );
      }
      g.propTypes = {
        lh: l.a.number,
        inline: l.a.oneOfType([l.a.bool, l.a.number]),
        secondary: l.a.bool,
        mr: l.a.number,
        fs: l.a.number,
        amount: l.a.number,
        size: l.a.number,
        user: m.c,
        isOwner: l.a.bool,
        wallet: l.a.object,
        align: l.a.string,
        lineheight: l.a.string,
        c: l.a.string,
        noNumber: l.a.bool,
        spaceBetween: l.a.number,
        showPrice: l.a.bool
      };
      t.a = Object(i.memo)(function(e) {
        return c.a.createElement(d.Consumer, null, function(t) {
          return c.a.createElement(g, o()({ wallet: t }, e));
        });
      });
    },
    './src/modules/tooltip/tooltip.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return P;
      });
      var r = n('./node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        s = n.n(a),
        i = n('../../node_modules/react/index.js'),
        c = n.n(i),
        u = n('../../node_modules/react-redux/es/index.js'),
        l = n('../../node_modules/prop-types/index.js'),
        d = n.n(l),
        p = n('./src/modules/styled/uni.js'),
        m = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        f = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        b = n.n(f),
        h = n('../../node_modules/react-native-web/dist/exports/Dimensions/index.js'),
        y = n('./src/modules/tooltip/tooltip.actions.js');
      function g(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function(t) {
                b()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var v = {
        vertical: 'top',
        horizontal: 'right',
        horizontalOffset: 0,
        verticalOffset: 10
      };
      var E = n('../../node_modules/react-tooltip/dist/index.es.js'),
        O = n('./public/img/info.png'),
        w = m.b.Text.withConfig({
          displayName: 'tooltipcomponent__AbsoluteWrapper',
          componentId: 'sc-17j84b5-0'
        })([
          'position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden;z-index:1;'
        ]);
      function P(e) {
        var t = e.children,
          n = e.name,
          r = e.data,
          a = e.info,
          l = e.inline,
          d = s()(e, ['children', 'name', 'data', 'info', 'inline']);
        Object(i.useEffect)(
          function() {
            E.a.rebuild && E.a.rebuild();
          },
          [r, n, t]
        ),
          Object(i.useEffect)(
            function() {
              return r.shouldRegister && P();
            },
            [r.shouldRegister, P]
          );
        var m = Object(u.d)(),
          f = Object(i.useRef)(),
          b = (function(e) {
            var t = e.tooltips,
              n = e.dispatch,
              r = function(e) {
                t.forEach(function(t) {
                  t.data.desktopOnly ||
                    (t.el.current &&
                      t.el.current.measureInWindow(function(r, o, a, s) {
                        var i = { x: r, y: o, w: a, h: s };
                        r + o + a + s !== 0 &&
                          (o > h.a.get('window').height - 50 ||
                            (n(
                              Object(y.b)(
                                j(j({ name: t.name, parent: i }, v), {}, { data: t.data })
                              )
                            ),
                            n(Object(y.c)(e))));
                      }));
                });
              };
            return {
              initTooltips: function() {
                t.forEach(function(e) {
                  return e.data.desktopOnly
                    ? null
                    : n(
                        Object(y.b)({
                          name: e.name,
                          toggle: function() {
                            return r(e.name);
                          }
                        })
                      );
                });
              },
              toggleTooltip: r
            };
          })({ tooltips: [{ name: n, el: f, data: r }], dispatch: m }),
          g = b.toggleTooltip,
          P = b.initTooltip,
          x = (t && p.E) || w;
        return a
          ? c.a.createElement(
              p.B,
              { ref: f, onPress: (r.desktopOnly, null), inline: l },
              c.a.createElement(
                p.s,
                o()(
                  {
                    'data-event-off': 'click',
                    'data-place': r.position,
                    'data-for': 'mainTooltip',
                    'data-tip': JSON.stringify({ type: 'TEXT', props: r })
                  },
                  d,
                  { source: O, resizeMode: 'contain', h: 1.7, w: 1.7, inline: l },
                  d
                )
              )
            )
          : c.a.createElement(
              x,
              {
                ref: f,
                'data-event-off': 'click',
                'data-place': r.position,
                'data-for': 'mainTooltip',
                'data-tip': JSON.stringify({ type: 'TEXT', props: r }),
                onLongPress: function() {
                  return g(n);
                },
                onPress: (r.desktopOnly, null)
              },
              t
            );
      }
      P.propTypes = {
        name: d.a.string,
        data: d.a.object,
        children: d.a.object,
        info: d.a.bool,
        inline: d.a.oneOfType([d.a.bool, d.a.number])
      };
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return O;
        }),
        n.d(t, 'exchangeLink', function() {
          return w;
        }),
        n.d(t, 'tokenEnabled', function() {
          return P;
        }),
        n.d(t, 'usePrice', function() {
          return x;
        }),
        n.d(t, 'default', function() {
          return _;
        });
      var r = n('./node_modules/@babel/runtime/regenerator/index.js'),
        o = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        s = n.n(a),
        i = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        c = n.n(i),
        u = n('./node_modules/@babel/runtime/helpers/slicedToArray.js'),
        l = n.n(u),
        d = n('../../node_modules/react/index.js'),
        p = n.n(d),
        m = n('../../node_modules/prop-types/index.js'),
        f = n.n(m),
        b = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        h = n('./src/utils/numbers.js');
      function y(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function(t) {
                s()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function(t) {
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
          TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
        }),
        v = j.TOKEN_ADDRESS,
        E = j.DISABLE_PRICE,
        O = p.a.createContext(0);
      function w() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(v);
      }
      function P() {
        return !!v;
      }
      function x(e, t) {
        var n = Object(d.useContext)(O).price;
        return n
          ? 'number' === t
            ? Object(h.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(h.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function _(e) {
        var t = e.children,
          n = Object(d.useReducer)(S, { loading: !1, error: !1, data: null, refresh: 0 }),
          r = l()(n, 2),
          a = r[0],
          s = r[1];
        Object(d.useEffect)(
          function() {
            var e = !1;
            return (
              (function() {
                var t = c()(
                  o.a.mark(function t() {
                    var n, r, a;
                    return o.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((s({ type: 'FETCH_PRICE_INIT' }), v && !E)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt('return');
                            case 3:
                              return (
                                (t.prev = 3), (t.next = 6), Object(b.getTokenReserves)(v)
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
                              (a = t.sent),
                                e ||
                                  s({
                                    type: 'FETCH_PRICE_SUCCESS',
                                    payload: g(g({}, n), {}, { ethPrice: a.bid })
                                  }),
                                (t.next = 19);
                              break;
                            case 16:
                              (t.prev = 16),
                                (t.t0 = t.catch(3)),
                                e || s({ type: 'FETCH_PRICE_ERROR', payload: t.t0 });
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
                s({ type: 'REFRESH_PRICE' });
              }, 6e4),
              function() {
                e = !0;
              }
            );
          },
          [a.refresh]
        );
        var i = (function(e) {
            if (!e) return null;
            var t = e.ethReserve,
              n = e.tokenReserve,
              r = e.ethPrice;
            if (!t || !n) return null;
            var o = t.amount.div(n.amount).times(r);
            return parseFloat(o.toString());
          })(a.data),
          u = '($'.concat(Object(h.abbreviateNumber)(i, 2), ')');
        return p.a.createElement(O.Provider, { value: { price: i, priceString: u } }, t);
      }
      _.propTypes = { children: f.a.node };
      var S = function(e, t) {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return g(g({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return g(g({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return g(g({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return g(g({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/modules/wallet/web/wallet.container.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        o = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/createClass.js'),
        s = n.n(a),
        i = n('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        c = n.n(i),
        u = n('./node_modules/@babel/runtime/helpers/inherits.js'),
        l = n.n(u),
        d = n('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        p = n.n(d),
        m = n('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        f = n.n(m),
        b = n('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        h = n.n(b),
        y = n('../../node_modules/react/index.js'),
        g = n.n(y),
        j = n('../../node_modules/react-redux/es/index.js'),
        v = n('../../node_modules/redux/es/redux.js'),
        E = n('../../node_modules/prop-types/index.js'),
        O = n.n(E),
        w = n('./src/modules/auth/auth.actions.js'),
        P = n('./src/modules/wallet/earnings.actions.js'),
        x = n('./src/utils/index.js'),
        _ = n('./src/styles/index.js'),
        S = n('./src/modules/styled/uni.js'),
        T = n('./src/utils/propValidation.js'),
        k = n('./src/utils/numbers.js');
      function R(e) {
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
            r = f()(e);
          if (t) {
            var o = f()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p()(this, n);
        };
      }
      var C = (function(e) {
        l()(n, e);
        var t = R(n);
        function n() {
          return o()(this, n), t.apply(this, arguments);
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.earning,
                  n = e.month,
                  r = e.payout,
                  o = e.screenSize,
                  a = e.PostPreview,
                  s = t.community,
                  i = t.post;
                if (!t) return null;
                var c = t.status,
                  u = void 0 === c ? '' : c,
                  l = 'pending' === u && Object(k.getTimestamp)(t.payoutTime),
                  d = t.cashOutAttempt
                    ? 'Transfer tokens to Ethereum wallet: '.concat(u)
                    : ''.concat(u).concat(l ? ' ' + l.toLowerCase() : ''),
                  p =
                    n &&
                    g.a.createElement(
                      S.E,
                      { mt: 4 },
                      g.a.createElement(S.d, null, n.toUpperCase())
                    );
                return g.a.createElement(
                  S.E,
                  { m: ['0 4', '0 2'], key: t._id },
                  p,
                  g.a.createElement(A, {
                    date: t.createdAt,
                    amount: r || -t.cashOutAmt,
                    text: d,
                    bb: !i
                  }),
                  i
                    ? g.a.createElement(
                        S.E,
                        { border: o ? null : 1 },
                        g.a.createElement(a, { screenSize: o, community: s, postId: i })
                      )
                    : null
                );
              }
            }
          ]),
          n
        );
      })(y.PureComponent);
      function A(e) {
        var t = e.date,
          n = e.amount,
          r = e.text,
          o = e.bb;
        return g.a.createElement(
          S.E,
          {
            bt: !0,
            bl: !0,
            br: !0,
            bb: o,
            p: '1.5 1',
            fdirection: 'row',
            mt: 2,
            bg: _.b.secondaryBG,
            grow: 1,
            justify: 'space-between'
          },
          g.a.createElement(
            S.E,
            { display: 'flex', fdirection: 'row', wrap: !0, flex: 1 },
            g.a.createElement(S.d, { mr: [4, 2] }, t && x.d.getDayMonthYearTimestamp(t)),
            g.a.createElement(S.d, { c: _.b.secondaryText }, r)
          ),
          n < 0
            ? g.a.createElement(S.d, { c: _.b.red }, x.d.abbreviateNumber(n), ' REL')
            : g.a.createElement(
                S.d,
                { c: _.b.green },
                '+ ',
                x.d.abbreviateNumber(n),
                ' REL'
              )
        );
      }
      h()(C, 'propTypes', {
        earning: O.a.object,
        month: O.a.string,
        payout: O.a.number,
        screenSize: O.a.number,
        PostPreview: T.b
      }),
        (A.propTypes = {
          text: O.a.string,
          amount: O.a.number,
          date: O.a.string,
          bb: O.a.bool
        });
      var D = n('./src/utils/eth.js'),
        L = n('./src/modules/wallet/price.context.js'),
        N = n('./src/modules/stats/coinStat.component.js'),
        M = n('../common/lib/index.js'),
        I = n('./src/modules/tooltip/tooltip.component.js'),
        B = n('./src/modules/navigation/navigation.actions.js'),
        z = n('./src/modules/navigation/ULink.component.js'),
        U = n('./src/utils/alert.js');
      function F() {
        var e = Object(j.d)(),
          t = Object(L.exchangeLink)(),
          n = Object(j.e)(function(e) {
            return e.auth.user;
          }).notificationSettings.bet.manual;
        return g.a.createElement(
          S.E,
          { mt: 2, fdirection: 'row', wrap: 'wrap' },
          _.d &&
            g.a.createElement(
              S.E,
              { mr: [2, 1], mt: 1, fdirection: 'row', align: 'center' },
              g.a.createElement(I.a, {
                name: 'coinInfo',
                data: {
                  text: 'You can get more coins or transfer up to '.concat(
                    M.CASHOUT_MAX,
                    ' coins to your your Metamask wallet via the browser app on https://relevant.community.'
                  )
                }
              }),
              g.a.createElement(S.v, { c: _.b.blue, mr: 0.5 }, 'Manage Coins')
            ),
          !_.d &&
            g.a.createElement(
              S.E,
              { mr: [2, 1], mt: 1, fdirection: 'row', align: 'center' },
              g.a.createElement(
                S.D,
                {
                  onPress: function() {
                    return _.d
                      ? Object(U.Alert)().alert(
                          'you can claim tokens via the Relevant browser app on https://relevant.community'
                        )
                      : e(Object(B.showModal)('cashOut'));
                  },
                  td: 'underline'
                },
                g.a.createElement(S.v, { c: _.b.blue, mr: 0.5 }, 'Claim Tokens')
              ),
              g.a.createElement(I.a, {
                info: !0,
                data: {
                  text: 'You can transfer up to '.concat(
                    M.CASHOUT_MAX,
                    ' coins to your your Metamask wallet.\n(You cannot transfer coins you got for refferrals and verifying social accounts.)'
                  )
                }
              })
            ),
          !_.d &&
            g.a.createElement(
              S.E,
              { mr: [2, 1], mt: 1, fdirection: 'row', align: 'center' },
              g.a.createElement(
                I.a,
                {
                  data: {
                    text:
                      'If you have Relevant tokens in your Metamask wallet, you need to connect your account to be able to use them.'
                  }
                },
                g.a.createElement(
                  S.D,
                  {
                    style: { zIndex: 1 },
                    onClick: function() {
                      return e(Object(B.showModal)('connectMetamask'));
                    },
                    td: 'underline'
                  },
                  g.a.createElement(S.v, { c: _.b.blue }, 'Connect Your Wallet')
                )
              )
            ),
          Object(L.tokenEnabled)() &&
            !_.d &&
            g.a.createElement(
              S.E,
              { mt: 1, fdirection: 'row', mr: [2, 1], align: 'center' },
              g.a.createElement(
                z.a,
                { to: t, external: !0, target: '_blank' },
                g.a.createElement(
                  S.v,
                  {
                    c: _.b.blue,
                    onPress: function() {
                      e(Object(B.goToUrl)(t));
                    }
                  },
                  'Get more coins'
                )
              )
            ),
          g.a.createElement(
            S.E,
            { mt: 1, fdirection: 'row', align: 'center' },
            g.a.createElement(
              I.a,
              {
                data: {
                  text:
                    'When you upvote posts you also bet coins on them. How much you bet can be decided automatically or manualy.'
                }
              },
              g.a.createElement(
                S.D,
                {
                  style: { zIndex: 1 },
                  onPress: function() {
                    e(Object(w.updateNotificationSettings)({ bet: { manual: !n } }));
                  },
                  td: 'underline'
                },
                g.a.createElement(
                  S.v,
                  { c: _.b.blue },
                  n ? 'Disable' : 'Enable',
                  ' Betting Mode'
                )
              )
            )
          )
        );
      }
      function W() {
        var e = Object(j.e)(function(e) {
            return e.auth.user;
          }),
          t = Object(j.e)(function(e) {
            return e.navigation.screenSize;
          }),
          n = Object(L.usePrice)(M.CASHOUT_MAX);
        if (!e) return null;
        var r = e.tokenBalance,
          o = e.airdropTokens,
          a = e.lockedTokens,
          s = e.balance ? Math.round(100 * (1 - a / e.balance)) : 0,
          i = (function(e) {
            var t = e.unclaimed,
              n = e.metaMaskTokens,
              r = e.airdropTokens,
              o = e.lockedTokens,
              a = e.stakingPower;
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
            stakingPower: s
          });
        return g.a.createElement(
          S.E,
          { m: ['0 4 2 4', '2 2 0 2'] },
          t
            ? null
            : g.a.createElement(
                S.E,
                null,
                g.a.createElement(
                  S.d,
                  { mt: 2 },
                  'These are coins you earned as rewards. You can transfer up to ',
                  M.CASHOUT_MAX,
                  n,
                  ' coins to your Ethereum wallet (this limit will be increased as the network grows).'
                )
              ),
          g.a.createElement(
            S.E,
            { br: !0, bl: !0, bt: !0, p: '2', mt: 2 },
            g.a.createElement(
              S.E,
              { fdirection: 'row', justify: 'space-between', wrap: !0 },
              g.a.createElement(S.d, { mb: 0.5 }, 'Account Balance'),
              g.a.createElement(S.x, null, Object(D.g)(e.ethAddress[0]))
            ),
            g.a.createElement(
              S.E,
              { fdirection: 'row', align: 'center', display: 'flex', mt: 2 },
              g.a.createElement(N.a, {
                fs: 4.5,
                lh: 5,
                size: 5,
                user: e,
                align: 'center',
                showPrice: !0
              })
            )
          ),
          g.a.createElement(
            S.E,
            { fdirection: 'row', wrap: !0, border: 1, p: '2' },
            i.map(function(e) {
              return (
                (!!e.value || !e.alwayShow) &&
                g.a.createElement(
                  S.E,
                  { key: e.text },
                  e.tip &&
                    g.a.createElement(I.a, {
                      name: e.text.replace(' ', ''),
                      data: { text: e.tip }
                    }),
                  g.a.createElement(
                    S.x,
                    { mr: 2 },
                    e.text,
                    ': ',
                    Object(k.abbreviateNumber)(e.value)
                  )
                )
              );
            })
          ),
          g.a.createElement(F, null),
          g.a.createElement(S.q, { mt: [9, 4] }, 'Recent Activity'),
          t
            ? null
            : g.a.createElement(
                S.d,
                { mt: 2 },
                'Your rewards for upvoting links and discussion threads that are relevant to the community.'
              )
        );
      }
      var K = Object(y.memo)(W),
        H = n('./src/modules/listview/web/infScroll.component.js'),
        Y = n('./src/utils/rewards.js'),
        V = n('./src/modules/post/postinfo.component.js'),
        q = n('./src/modules/post/postinfo.mobile.component.js');
      function G(e, t) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(n), !0).forEach(function(t) {
                h()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var Z = function(e) {
        var t = e.posts,
          n = e.postId,
          r = e.community,
          o = e.actions,
          a = e.auth,
          s = e.screenSize,
          i = t.posts[n];
        if (!i) return null;
        var c = i && i.metaPost && t.links[i.metaPost],
          u = i.parentPost ? i.parentPost._id || i.parentPost : i._id;
        return g.a.createElement(
          S.E,
          null,
          g.a.createElement(
            z.a,
            {
              onPress: function() {
                return o.goToPost({ _id: u, community: r });
              },
              to: '/'.concat(r, '/post/').concat(u)
            },
            g.a.createElement(
              S.E,
              null,
              s
                ? g.a.createElement(q.a, { preview: !0, link: c, post: i, noLink: !0 })
                : g.a.createElement(V.a, {
                    preview: !0,
                    link: c,
                    post: i,
                    noLink: !0,
                    auth: a
                  })
            )
          )
        );
      };
      Z.propTypes = {
        posts: O.a.object,
        screenSize: O.a.number,
        postId: O.a.string,
        community: O.a.string,
        actions: O.a.object,
        auth: O.a.object
      };
      var Q = Object(j.c)(
        function(e) {
          return { posts: e.posts, auth: e.auth };
        },
        function(e) {
          return { actions: Object(v.bindActionCreators)(J({}, B), e) };
        }
      )(Z);
      function X(e, t) {
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
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(n), !0).forEach(function(t) {
                h()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function ee(e) {
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
            r = f()(e);
          if (t) {
            var o = f()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p()(this, n);
        };
      }
      var te = (function(e) {
        l()(n, e);
        var t = ee(n);
        function n() {
          var e;
          o()(this, n);
          for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
            a[s] = arguments[s];
          return (
            (e = t.call.apply(t, [this].concat(a))),
            h()(c()(e), 'state', { reloading: !1 }),
            h()(c()(e), 'hasMore', !0),
            h()(c()(e), 'load', function(t, n) {
              (e.hasMore = 50 * t <= n),
                e.hasMore && e.props.actions.getEarnings(null, 50, n);
            }),
            h()(c()(e), 'reload', function() {
              return e.load(0, 0);
            }),
            h()(c()(e), 'renderHeader', function() {
              return g.a.createElement(S.E, null, g.a.createElement(K, { isWeb: !0 }));
            }),
            h()(c()(e), 'renderRow', function(t) {
              var n = t.item,
                r = e.props.screenSize;
              if (!n) return null;
              var o = n,
                a = Object(Y.b)(o),
                s = Object(k.getMonth)(o.createdAt),
                i = e.previousMonth !== s;
              return (
                (e.previousMonth = s),
                g.a.createElement(C, {
                  key: o._id,
                  earning: o,
                  payout: a,
                  month: i ? s : null,
                  PostPreview: Q,
                  screenSize: r
                })
              );
            }),
            e
          );
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props.earnings,
                  n = t.list,
                  r = n.map(function(e) {
                    return t.entities[e];
                  });
                return (
                  (this.previousMonth = null),
                  g.a.createElement(
                    S.E,
                    { mb: 8 },
                    this.renderHeader(),
                    g.a.createElement(
                      S.E,
                      null,
                      g.a.createElement(
                        H.a,
                        {
                          data: n,
                          loadMore: function(t) {
                            return e.load(t, n.length);
                          },
                          hasMore: this.hasMore,
                          key: 'recent-activity',
                          className: 'parent',
                          style: { position: 'relative', marginBottom: 20 }
                        },
                        r.map(function(t) {
                          return e.renderRow({ item: t });
                        })
                      )
                    )
                  )
                );
              }
            }
          ]),
          n
        );
      })(y.Component);
      h()(te, 'propTypes', {
        actions: O.a.object,
        earnings: O.a.object,
        screenSize: O.a.number
      });
      t.default = Object(j.c)(
        function(e) {
          return { earnings: e.earnings, screenSize: e.navigation.screenSize };
        },
        function(e) {
          return { actions: Object(v.bindActionCreators)($($({}, w), P), e) };
        }
      )(te);
    },
    './src/utils/eth.js': function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return u;
      }),
        n.d(t, 'g', function() {
          return d;
        }),
        n.d(t, 'e', function() {
          return p;
        }),
        n.d(t, 'a', function() {
          return m;
        }),
        n.d(t, 'd', function() {
          return f;
        }),
        n.d(t, 'b', function() {
          return b;
        }),
        n.d(t, 'c', function() {
          return h;
        });
      var r = n('./node_modules/@babel/runtime/regenerator/index.js'),
        o = n.n(r),
        a = n('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = n.n(a),
        i = n('../../node_modules/crypto-browserify/index.js'),
        c = n.n(i);
      function u(e, t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = s()(
          o.a.mark(function e(t, n) {
            var r, a, s, i, c;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.getSigner()),
                      (a = new Date()),
                      (s = Math.floor(a.setMinutes(a.getMinutes() + 5) / 1e3)),
                      (i = { address: n, exp: s }),
                      (e.next = 6),
                      r.signMessage(JSON.stringify(i))
                    );
                  case 6:
                    return (c = e.sent), e.abrupt('return', { msg: i, signature: c });
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
      function p(e) {
        return e && e.get
          ? (function(e) {
              var t = e.get('_hex');
              if ('0x00' === t) return 0;
              return m(t, 18);
            })(e)
          : e;
      }
      function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
          n = Number(e).toString();
        if ('+' === n[n.length - 3]) {
          var r = g(n, t),
            o = Number(y(n) + r);
          return Number.parseFloat(o).toFixed(0);
        }
        return n.length > 18
          ? Number(n.slice(0, -18))
          : 18 === n.length
          ? Number('0.'.concat(n))
          : Number(n);
      }
      function f() {
        return c.a.randomBytes(16).toString('hex');
      }
      function b(e) {
        return ''.concat(e.slice(0, -18), '.').concat(e.slice(-18));
      }
      function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return (e * Math.pow(10, t)).toString();
      }
      function y(e) {
        return e.slice(0, -2).toString();
      }
      function g(e, t) {
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
//# sourceMappingURL=wallet-web-wallet-container.bundle.js.map
