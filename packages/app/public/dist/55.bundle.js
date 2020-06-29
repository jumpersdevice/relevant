(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [55],
  {
    './src/modules/animation/downvoteAnimation.component.js': function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'default', function() {
          return S;
        });
      var n = r('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = r.n(n),
        i = r('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        a = r.n(i),
        s = r('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        c = r.n(s),
        u = r('../../node_modules/react/index.js'),
        p = r.n(u),
        l = r('../../node_modules/react-redux/es/index.js'),
        d = r(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        f = r('./src/styles/index.js'),
        b = r('./src/utils/index.js'),
        m = r('../../node_modules/react-native-web/dist/exports/Animated/index.js'),
        j = r('../../node_modules/react-native-web/dist/exports/Easing/index.js'),
        y = r('../../node_modules/prop-types/index.js'),
        O = r.n(y);
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function(t) {
                o()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var w = {
        position: 'absolute',
        top: 0,
        padding: 10,
        fontSize: 100,
        backgroundColor: 'transparent'
      };
      function _(e) {
        var { parent: t, id: r, destroy: n } = e,
          [o] = Object(u.useState)(new m.a.Value(1)),
          [i] = Object(u.useState)(new m.a.Value(0));
        return (
          Object(u.useEffect)(() => {
            m.a
              .parallel([
                m.a.timing(o, {
                  toValue: 0,
                  delay: 500,
                  duration: 300,
                  easing: j.a.in(j.a.ease),
                  useNativeDriver: !0
                }),
                m.a
                  .timing(i, {
                    toValue: 1,
                    delay: 0,
                    duration: 500,
                    easing: j.a.elastic(2),
                    useNativeDriver: !0
                  })
                  .start()
              ])
              .start();
            var e = setTimeout(() => n(r), 2e3);
            return () => {
              clearTimeout(e), n(r);
            };
          }, [n, r, o, i]),
          p.a.createElement(
            m.a.Text,
            {
              pointerEvents: 'none',
              key: r,
              style: [g({}, w), { top: t.y, transform: [{ scale: i }], opacity: o }]
            },
            '👎'
          )
        );
      }
      function P(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(r), !0).forEach(function(t) {
                o()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function D(e) {
        var t = (function(e, t) {
          if ('object' != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || 'default');
            if ('object' != typeof n) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' == typeof t ? t : String(t);
      }
      function h() {
        var e = c()([
          '\n  position: ',
          ';\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      _.propTypes = { parent: O.a.object, id: O.a.string, destroy: O.a.func };
      var x = d.b.View(h(), f.d ? 'absolute' : 'fixed');
      function S() {
        var [e, t] = Object(u.useState)({}),
          { index: r, parent: n } = Object(l.e)(e => e.animation.downvote || {});
        function o(e) {
          t(t => {
            var { [e]: r } = t;
            return a()(t, [e].map(D));
          });
        }
        return (
          Object(u.useEffect)(() => {
            !(function() {
              if (n) {
                var e = b.d.guid(),
                  r = {
                    [e]: p.a.createElement(_, { destroy: o, parent: n, key: e, id: e })
                  };
                t(e => E(E({}, e), r));
              }
            })();
          }, [r, n]),
          p.a.createElement(x, { pointerEvents: 'none' }, Object.values(e))
        );
      }
    }
  }
]);
//# sourceMappingURL=55.bundle.js.map
