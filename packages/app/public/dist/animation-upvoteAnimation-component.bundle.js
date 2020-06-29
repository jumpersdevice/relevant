(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [23],
  {
    './public/img/icons/upvoteActive.png': function(t, e, n) {
      'use strict';
      n.r(e), (e.default = n.p + 'public/img/icons/upvoteActive.png');
    },
    './src/modules/animation/upvoteAnimation.component.js': function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function() {
          return U;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/toConsumableArray.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        a = n.n(i),
        s = n('../../node_modules/react/index.js'),
        u = n.n(s),
        c = n('../../node_modules/react-redux/es/index.js'),
        p = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        l = n('./src/styles/index.js'),
        f = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        d = n.n(f),
        y = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        m = n.n(y),
        h = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        b = n.n(h),
        g = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        v = n.n(g),
        j = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        O = n.n(j),
        R = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        _ = n.n(R),
        w = n('../../node_modules/react-native-web/dist/exports/Animated/index.js'),
        x = n('../../node_modules/react-native-web/dist/exports/Image/index.js'),
        D = n('../../node_modules/prop-types/index.js'),
        P = n.n(D),
        A = n('./src/styles/layout.js');
      function E(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(n), !0).forEach(function(e) {
                _()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function z(t) {
        var e = (function() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function() {
          var n,
            r = O()(t);
          if (e) {
            var o = O()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return v()(this, n);
        };
      }
      var C = {
          upvote: { size: 28, icon: n('./public/img/icons/upvoteActive.png') },
          bet: { size: 18, icon: n('./public/img/relevantcoin.png') }
        },
        K = (function(t) {
          b()(n, t);
          var e = z(n);
          function n(t, r) {
            var o;
            return (
              d()(this, n),
              ((o = e.call(this, t, r)).state = { position: new w.a.Value(0) }),
              o
            );
          }
          return (
            m()(n, [
              {
                key: 'componentWillMount',
                value: function() {
                  var t = this.props.parent,
                    e = t.x,
                    n = t.y,
                    r = 50 * Math.random();
                  (this.y = this.state.position.interpolate({
                    inputRange: [0, 1],
                    outputRange: [n, n - 300]
                  })),
                    (this.x = this.state.position.interpolate({
                      inputRange: [0, 0.5 * Math.random(), 1],
                      outputRange: [e, e + r / 2, e + r]
                    })),
                    (this.opacity = this.state.position.interpolate({
                      inputRange: [0.7, 1],
                      outputRange: [1, 0],
                      extrapolate: 'clamp'
                    })),
                    (this.rotateAnimation = this.state.position.interpolate({
                      inputRange: [0, 1 / 4, 1 / 3, 0.5, 1],
                      outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg']
                    })),
                    (this.scale = this.state.position.interpolate({
                      inputRange: [0, 0.2, 0.3, 1],
                      outputRange: [0, 1.2, 1, 1.5],
                      extrapolate: 'clamp'
                    }));
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  var t = this,
                    e = this.props.specialKey,
                    n = Math.random();
                  w.a
                    .timing(this.state.position, {
                      toValue: 1,
                      delay: e * (75 + 50 * n),
                      duration: 1e3,
                      useNativeDriver: !0
                    })
                    .start(function() {
                      return t.props.destroy(e);
                    });
                }
              },
              {
                key: 'render',
                value: function() {
                  var t = this.props,
                    e = t.specialKey,
                    n = t.horizontal,
                    r = t.parent,
                    o = t.type,
                    i = C[o],
                    a = i.icon,
                    s = i.size,
                    c = u.a.createElement(x.a, {
                      resizeMode: 'contain',
                      style: { width: s, height: s },
                      source: a
                    });
                  return u.a.createElement(
                    w.a.View,
                    {
                      key: e,
                      style: [
                        k({}, A.animatedElement),
                        {
                          left: n ? 0 : r.w / 2,
                          transform: [
                            { translateX: this.x },
                            { translateY: this.y },
                            { scale: this.scale },
                            { rotate: this.rotateAnimation }
                          ],
                          opacity: this.opacity
                        }
                      ]
                    },
                    c
                  );
                }
              }
            ]),
            n
          );
        })(s.Component);
      _()(K, 'propTypes', {
        horizontal: P.a.bool,
        parent: P.a.object,
        specialKey: P.a.number,
        destroy: P.a.func,
        type: P.a.string
      });
      var M = K,
        S = n('./src/modules/styled/uni.js');
      function V(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? V(Object(n), !0).forEach(function(e) {
                _()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function N(t) {
        var e = (function() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function() {
          var n,
            r = O()(t);
          if (e) {
            var o = O()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return v()(this, n);
        };
      }
      var T = (function(t) {
        b()(n, t);
        var e = N(n);
        function n(t, r) {
          var o;
          return (
            d()(this, n),
            ((o = e.call(this, t, r)).state = { position: new w.a.Value(0) }),
            o
          );
        }
        return (
          m()(n, [
            {
              key: 'componentWillMount',
              value: function() {
                var t = this.props.parent,
                  e = t.x,
                  n = t.y,
                  r = 20 * (Math.random() - 0.5);
                (this.y = this.state.position.interpolate({
                  inputRange: [0, 1],
                  outputRange: [n + 10, n - 100]
                })),
                  (this.x = this.state.position.interpolate({
                    inputRange: [0, 0.05, 0.5, 1],
                    outputRange: [e - 15, e, e + r / 2, e + r]
                  })),
                  (this.opacity = this.state.position.interpolate({
                    inputRange: [0.7, 1],
                    outputRange: [1, 0],
                    extrapolate: 'clamp'
                  })),
                  (this.rotateAnimation = this.state.position.interpolate({
                    inputRange: [0, 1 / 4, 1 / 3, 0.5, 1],
                    outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg']
                  })),
                  (this.scale = this.state.position.interpolate({
                    inputRange: [0, 0.05, 0.1, 0.9, 0.95, 1],
                    outputRange: [0, 1.4, 1, 1, 1.2, 0]
                  }));
              }
            },
            {
              key: 'componentDidMount',
              value: function() {
                var t = this,
                  e = this.props.amount,
                  n = this.props.specialKey,
                  r = Math.random();
                w.a
                  .timing(this.state.position, {
                    toValue: 1,
                    delay: 30 * r + (100 * n * 10) / e,
                    duration: 2e3,
                    useNativeDriver: !0
                  })
                  .start(function() {
                    return t.props.destroy(null, n);
                  });
              }
            },
            {
              key: 'render',
              value: function() {
                var t = this.props,
                  e = t.amount,
                  n = t.parent,
                  r = t.horizontal,
                  o = n.w,
                  i = this.props.specialKey,
                  a = u.a.createElement(S.C, { c: l.b.green }, '+', e);
                return u.a.createElement(
                  w.a.View,
                  {
                    key: i,
                    style: [
                      L({}, A.animatedElement),
                      {
                        left: r ? 20 : (2 * o) / 3,
                        transform: [
                          { translateX: this.x },
                          { translateY: this.y },
                          { scale: this.scale }
                        ],
                        opacity: this.opacity
                      }
                    ]
                  },
                  a
                );
              }
            }
          ]),
          n
        );
      })(s.Component);
      _()(T, 'propTypes', {
        parent: P.a.object,
        specialKey: P.a.number,
        amount: P.a.number,
        destroy: P.a.func,
        horizontal: P.a.bool
      });
      var B = T,
        H = ['upvote', 'bet'],
        I = p.b.View.withConfig({
          displayName: 'upvoteAnimationcomponent__Container',
          componentId: 'qlc741-0'
        })(
          ['position:', ';z-index:10000;left:0;top:0;right:0;bottom:0;'],
          l.d ? 'absolute' : 'fixed'
        );
      function U() {
        var t = Object(c.e)(function(t) {
            return t.animation.currentType;
          }),
          e = Object(c.e)(function(e) {
            return H.includes(t) ? e.animation[t] : {};
          }),
          n = e.index,
          r = e.parent,
          i = e.horizontal,
          p = e.amount,
          l = Object(s.useState)([]),
          f = a()(l, 2),
          d = f[0],
          y = f[1],
          m = Object(s.useState)([]),
          h = a()(m, 2),
          b = h[0],
          g = h[1];
        if (
          (Object(s.useEffect)(
            function() {
              return (
                r && (y(o()(Array(10).keys())), p && g(o()(Array(1).keys()))),
                function() {
                  y([]), g([]);
                }
              );
            },
            [n, r, p]
          ),
          !H.includes(t))
        )
          return null;
        function v(t, e) {
          'number' == typeof t &&
            y(function(e) {
              return [].concat(o()(e.slice(0, t)), o()(e.slice(t + 1)));
            }),
            'number' == typeof e &&
              g(function(t) {
                return [].concat(o()(t.slice(0, e)), o()(t.slice(e + 1)));
              });
        }
        return u.a.createElement(
          I,
          { pointerEvents: 'none' },
          d.map(function(e) {
            return u.a.createElement(M, {
              type: t,
              horizontal: i,
              destroy: v,
              parent: r,
              key: e,
              specialKey: e
            });
          }),
          b.map(function(t) {
            return u.a.createElement(B, {
              destroy: v,
              parent: r,
              amount: p,
              key: t,
              specialKey: t,
              horizontal: i
            });
          })
        );
      }
    }
  }
]);
//# sourceMappingURL=animation-upvoteAnimation-component.bundle.js.map
