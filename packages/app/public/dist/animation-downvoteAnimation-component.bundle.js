(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [22],
  {
    './src/modules/animation/downvoteAnimation.component.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return A;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/typeof.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        s = n.n(i),
        a = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        c = n.n(a),
        u = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        l = n.n(u),
        p = n('../../node_modules/react/index.js'),
        d = n.n(p),
        f = n('../../node_modules/react-redux/es/index.js'),
        b = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        m = n('./src/styles/index.js'),
        j = n('./src/utils/index.js'),
        y = n('../../node_modules/react-native-web/dist/exports/Animated/index.js'),
        O = n('../../node_modules/react-native-web/dist/exports/Easing/index.js'),
        v = n('../../node_modules/prop-types/index.js'),
        g = n.n(v);
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function(t) {
                s()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var P = {
        position: 'absolute',
        top: 0,
        padding: 10,
        fontSize: 100,
        backgroundColor: 'transparent'
      };
      function h(e) {
        var t = e.parent,
          n = e.id,
          r = e.destroy,
          o = Object(p.useState)(new y.a.Value(1)),
          i = l()(o, 1)[0],
          s = Object(p.useState)(new y.a.Value(0)),
          a = l()(s, 1)[0];
        return (
          Object(p.useEffect)(
            function() {
              y.a
                .parallel([
                  y.a.timing(i, {
                    toValue: 0,
                    delay: 500,
                    duration: 300,
                    easing: O.a.in(O.a.ease),
                    useNativeDriver: !0
                  }),
                  y.a
                    .timing(a, {
                      toValue: 1,
                      delay: 0,
                      duration: 500,
                      easing: O.a.elastic(2),
                      useNativeDriver: !0
                    })
                    .start()
                ])
                .start();
              var e = setTimeout(function() {
                return r(n);
              }, 2e3);
              return function() {
                clearTimeout(e), r(n);
              };
            },
            [r, n, i, a]
          ),
          d.a.createElement(
            y.a.Text,
            {
              pointerEvents: 'none',
              key: n,
              style: [_({}, P), { top: t.y, transform: [{ scale: a }], opacity: i }]
            },
            '👎'
          )
        );
      }
      function E(e, t) {
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function(t) {
                s()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function x(e) {
        var t = (function(e, t) {
          if ('object' !== o()(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== o()(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === o()(t) ? t : String(t);
      }
      h.propTypes = { parent: g.a.object, id: g.a.string, destroy: g.a.func };
      var S = b.b.View.withConfig({
        displayName: 'downvoteAnimationcomponent__Container',
        componentId: 'nlmhqb-0'
      })(
        [
          'position:',
          ';z-index:10000;left:0;top:0;right:0;display:flex;align-items:center;justify-content:center;'
        ],
        m.d ? 'absolute' : 'fixed'
      );
      function A() {
        var e = Object(p.useState)({}),
          t = l()(e, 2),
          n = t[0],
          r = t[1],
          o = Object(f.e)(function(e) {
            return e.animation.downvote || {};
          }),
          i = o.index,
          a = o.parent;
        function u(e) {
          r(function(t) {
            t[e];
            return c()(t, [e].map(x));
          });
        }
        return (
          Object(p.useEffect)(
            function() {
              !(function() {
                if (a) {
                  var e = j.d.guid(),
                    t = s()(
                      {},
                      e,
                      d.a.createElement(h, { destroy: u, parent: a, key: e, id: e })
                    );
                  r(function(e) {
                    return D(D({}, e), t);
                  });
                }
              })();
            },
            [i, a]
          ),
          d.a.createElement(S, { pointerEvents: 'none' }, Object.values(n))
        );
      }
    }
  }
]);
//# sourceMappingURL=animation-downvoteAnimation-component.bundle.js.map
