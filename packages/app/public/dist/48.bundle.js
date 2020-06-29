(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [48],
  {
    './public/img/icons/upvoteActive.png': function(t, e, n) {
      'use strict';
      n.r(e), (e.default = n.p + 'public/img/icons/upvoteActive.png');
    },
    './src/modules/animation/upvoteAnimation.component.js': function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function() {
          return z;
        });
      var o = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        i = n.n(o),
        r = n('../../node_modules/react/index.js'),
        a = n.n(r),
        s = n('../../node_modules/react-redux/es/index.js'),
        p = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        c = n('./src/styles/index.js'),
        u = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        l = n.n(u),
        d = n('../../node_modules/react-native-web/dist/exports/Animated/index.js'),
        m = n('../../node_modules/react-native-web/dist/exports/Image/index.js'),
        y = n('../../node_modules/prop-types/index.js'),
        h = n.n(y),
        g = n('./src/styles/layout.js');
      function b(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(n), !0).forEach(function(e) {
                l()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var O = {
        upvote: { size: 28, icon: n('./public/img/icons/upvoteActive.png') },
        bet: { size: 18, icon: n('./public/img/relevantcoin.png') }
      };
      class j extends r.Component {
        constructor(t, e) {
          super(t, e), (this.state = { position: new d.a.Value(0) });
        }
        componentWillMount() {
          var { x: t, y: e } = this.props.parent,
            n = 50 * Math.random();
          (this.y = this.state.position.interpolate({
            inputRange: [0, 1],
            outputRange: [e, e - 300]
          })),
            (this.x = this.state.position.interpolate({
              inputRange: [0, 0.5 * Math.random(), 1],
              outputRange: [t, t + n / 2, t + n]
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
        componentDidMount() {
          var t = this.props.specialKey,
            e = Math.random();
          d.a
            .timing(this.state.position, {
              toValue: 1,
              delay: t * (75 + 50 * e),
              duration: 1e3,
              useNativeDriver: !0
            })
            .start(() => this.props.destroy(t));
        }
        render() {
          var { specialKey: t, horizontal: e, parent: n, type: o } = this.props,
            { icon: i, size: r } = O[o],
            s = a.a.createElement(m.a, {
              resizeMode: 'contain',
              style: { width: r, height: r },
              source: i
            });
          return a.a.createElement(
            d.a.View,
            {
              key: t,
              style: [
                f({}, g.animatedElement),
                {
                  left: e ? 0 : n.w / 2,
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
            s
          );
        }
      }
      l()(j, 'propTypes', {
        horizontal: h.a.bool,
        parent: h.a.object,
        specialKey: h.a.number,
        destroy: h.a.func,
        type: h.a.string
      });
      var v = j,
        w = n('./src/modules/styled/uni.js');
      function x(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(n), !0).forEach(function(e) {
                l()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      class _ extends r.Component {
        constructor(t, e) {
          super(t, e), (this.state = { position: new d.a.Value(0) });
        }
        componentWillMount() {
          var { x: t, y: e } = this.props.parent,
            n = 20 * (Math.random() - 0.5);
          (this.y = this.state.position.interpolate({
            inputRange: [0, 1],
            outputRange: [e + 10, e - 100]
          })),
            (this.x = this.state.position.interpolate({
              inputRange: [0, 0.05, 0.5, 1],
              outputRange: [t - 15, t, t + n / 2, t + n]
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
        componentDidMount() {
          var { amount: t } = this.props,
            e = this.props.specialKey,
            n = Math.random();
          d.a
            .timing(this.state.position, {
              toValue: 1,
              delay: 30 * n + (100 * e * 10) / t,
              duration: 2e3,
              useNativeDriver: !0
            })
            .start(() => this.props.destroy(null, e));
        }
        render() {
          var { amount: t, parent: e, horizontal: n } = this.props,
            { w: o } = e,
            { specialKey: i } = this.props,
            r = a.a.createElement(w.C, { c: c.b.green }, '+', t);
          return a.a.createElement(
            d.a.View,
            {
              key: i,
              style: [
                R({}, g.animatedElement),
                {
                  left: n ? 20 : (2 * o) / 3,
                  transform: [
                    { translateX: this.x },
                    { translateY: this.y },
                    { scale: this.scale }
                  ],
                  opacity: this.opacity
                }
              ]
            },
            r
          );
        }
      }
      l()(_, 'propTypes', {
        parent: h.a.object,
        specialKey: h.a.number,
        amount: h.a.number,
        destroy: h.a.func,
        horizontal: h.a.bool
      });
      var E = _;
      function D() {
        var t = i()([
          '\n  position: ',
          ';\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n'
        ]);
        return (
          (D = function() {
            return t;
          }),
          t
        );
      }
      var P = ['upvote', 'bet'],
        A = p.b.View(D(), c.d ? 'absolute' : 'fixed');
      function z() {
        var t = Object(s.e)(t => t.animation.currentType),
          { index: e, parent: n, horizontal: o, amount: i } = Object(s.e)(e =>
            P.includes(t) ? e.animation[t] : {}
          ),
          [p, c] = Object(r.useState)([]),
          [u, l] = Object(r.useState)([]);
        if (
          (Object(r.useEffect)(
            () => (
              n && (c([...Array(10).keys()]), i && l([...Array(1).keys()])),
              () => {
                c([]), l([]);
              }
            ),
            [e, n, i]
          ),
          !P.includes(t))
        )
          return null;
        function d(t, e) {
          'number' == typeof t && c(e => [...e.slice(0, t), ...e.slice(t + 1)]),
            'number' == typeof e && l(t => [...t.slice(0, e), ...t.slice(e + 1)]);
        }
        return a.a.createElement(
          A,
          { pointerEvents: 'none' },
          p.map(e =>
            a.a.createElement(v, {
              type: t,
              horizontal: o,
              destroy: d,
              parent: n,
              key: e,
              specialKey: e
            })
          ),
          u.map(t =>
            a.a.createElement(E, {
              destroy: d,
              parent: n,
              amount: i,
              key: t,
              specialKey: t,
              horizontal: o
            })
          )
        );
      }
    }
  }
]);
//# sourceMappingURL=48.bundle.js.map
