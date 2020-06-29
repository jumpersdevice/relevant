(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [47],
  {
    './src/modules/admin/web/communityAdminList.component.js': function(n, e, t) {
      'use strict';
      t.r(e);
      var r = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = t.n(r),
        u = t('../../node_modules/react/index.js'),
        i = t.n(u),
        f = t('../../node_modules/prop-types/index.js'),
        c = t.n(f),
        a = t('../../node_modules/react-router/esm/react-router.js'),
        d = t('../../node_modules/redux/es/redux.js'),
        l = t('../../node_modules/react-redux/es/index.js'),
        s = t('./src/modules/community/community.actions.js'),
        m = t('./src/modules/navigation/ULink.component.js'),
        b = t('./src/modules/styled/web.js');
      function p(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function g(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(t), !0).forEach(function(e) {
                o()(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
              });
        }
        return n;
      }
      class j extends u.Component {
        render() {
          var {
            community: { communities: n }
          } = this.props;
          return i.a.createElement(
            b.r,
            { m: 4, fdirection: 'column' },
            Object.values(n).map(n =>
              i.a.createElement(
                b.r,
                { mt: 2, key: n.slug },
                i.a.createElement(m.a, { to: '/admin/community/'.concat(n.slug) }, n.name)
              )
            ),
            i.a.createElement(
              b.r,
              { mt: 2 },
              i.a.createElement(
                m.a,
                { to: '/admin/community/new', m: 0 },
                i.a.createElement(
                  b.b,
                  { to: '/admin/community/new', ml: 0 },
                  'Create New'
                )
              )
            )
          );
        }
      }
      o()(j, 'propTypes', { community: c.a.object });
      e.default = Object(a.f)(
        Object(l.c)(
          n => ({ routing: n.routing, community: n.community }),
          n => ({ actions: Object(d.bindActionCreators)(g({}, s), n) })
        )(j)
      );
    },
    './src/modules/styled/web.js': function(n, e, t) {
      'use strict';
      t.d(e, 'l', function() {
        return A;
      }),
        t.d(e, 'r', function() {
          return C;
        }),
        t.d(e, 'o', function() {
          return z;
        }),
        t.d(e, 'f', function() {
          return T;
        }),
        t.d(e, 'e', function() {
          return N;
        }),
        t.d(e, 'c', function() {
          return U;
        }),
        t.d(e, 'p', function() {
          return H;
        }),
        t.d(e, 'i', function() {
          return K;
        }),
        t.d(e, 'k', function() {
          return R;
        }),
        t.d(e, 'a', function() {
          return q;
        }),
        t.d(e, 'b', function() {
          return F;
        }),
        t.d(e, 'j', function() {
          return V;
        }),
        t.d(e, 'h', function() {
          return G;
        }),
        t.d(e, 'g', function() {
          return I;
        }),
        t.d(e, 'n', function() {
          return J;
        }),
        t.d(e, 'm', function() {
          return M;
        }),
        t.d(e, 'd', function() {
          return Q;
        }),
        t.d(e, 'q', function() {
          return W;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        o = t.n(r),
        u = t('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        i = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        f = t('./src/styles/index.js'),
        c = t(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        a = t(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        );
      function d() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = o()(['\n  ', '\n  ', '\n']);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  padding: ',
          ' ',
          ';\n  min-width: 0;\n  &: focus {\n    outline: 1px solid ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  padding: ',
          ' ',
          ';\n  min-width: 0;\n  &: focus {\n    outline: 1px solid ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = o()([
          '\n  padding: ',
          ' ',
          ';\n  margin-top: ',
          ';  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ::placeholder: {\n    font-size: ',
          ';\n    line-height: ',
          ';\n  };\n  :focus {\n    outline: none !important;\n    ',
          '\n  }\n'
        ]);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ::placeholder: {\n    font-size: ',
          ';\n    line-height: ',
          ';\n  };\n  :focus {\n    outline: none !important;\n    ',
          '\n  }\n'
        ]);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function j() {
        var n = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          ';\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  &:hover {\n    ',
          '\n  };\n  user-select: none; cursor: pointer;\n'
        ]);
        return (
          (j = function() {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (w = function() {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = o()(['\n  ', '\n  ', '\n']);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = o()([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      function D() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (D = function() {
            return n;
          }),
          n
        );
      }
      function L() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (L = function() {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (B = function() {
            return n;
          }),
          n
        );
      }
      function P() {
        var n = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (P = function() {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = o()([
          '\n  ',
          ';\n  color: ',
          ';\n  &.active {\n    color: ',
          ';\n  }\n  :hover {\n    color: ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (S = function() {
            return n;
          }),
          n
        );
      }
      var A = Object(i.default)(u.b)(
          S(),
          f.c.header,
          f.b.grey,
          f.b.black,
          f.b.black,
          f.f.font,
          f.f.display,
          f.f.color,
          f.f.margin
        ),
        C = i.default.div(
          P(),
          f.f.margin,
          f.f.padding,
          f.f.flex,
          f.f.font,
          f.f.background,
          f.f.border,
          f.f.width,
          f.f.height,
          n => (n.onClick ? 'cursor: pointer;' : '')
        ),
        z = i.default.span(
          B(),
          f.f.margin,
          f.f.padding,
          f.f.flex,
          f.f.font,
          f.f.background,
          f.f.border,
          f.f.color,
          n => (n.onClick ? 'cursor: pointer;' : '')
        ),
        T = i.default.span(
          L(),
          f.f.margin,
          f.f.padding,
          f.f.font,
          f.f.background,
          f.f.border,
          f.f.color
        ),
        N = i.default.img(
          D(),
          f.f.margin,
          f.f.height,
          f.f.width,
          f.f.padding,
          f.f.background,
          f.f.borderRadius,
          f.f.flex
        ),
        U =
          (i.default.span(E(), f.f.margin, f.f.flex),
          i.default.div(
            k(),
            f.f.margin,
            f.f.padding,
            f.f.width,
            f.e.universalBorder('bottom')
          )),
        H =
          (Object(i.default)(z)(_(), f.c.header, f.f.color),
          Object(i.default)(z)(x(), f.c.title, f.f.color, f.f.font)),
        K = Object(i.default)(z)(w(), f.c.link, f.f.color, f.f.font),
        R = Object(i.default)(z)(y(), f.c.secondaryText, f.f.font, f.f.color),
        q =
          (Object(i.default)(z)(h(), f.c.altLink, f.f.color, f.f.font),
          Object(i.default)(z)(v(), f.c.commentText, f.f.color, f.f.font),
          Object(i.default)(z)(O(), f.c.bodyStyle, f.f.color, f.f.font)),
        F = i.default.button(
          j(),
          f.e.button,
          f.e.buttonFont,
          n =>
            n.disabled
              ? '\n    color: '
                  .concat(f.b.white, ';\n    background: ')
                  .concat(f.b.grey, ';\n    ')
              : '',
          f.f.flex,
          f.f.background,
          f.f.padding,
          f.f.width,
          f.f.margin,
          f.f.color,
          f.f.width,
          f.f.height,
          f.e.activeButtonShadow
        ),
        V = Object(i.default)(z)(
          g(),
          f.c.numericalValue,
          f.f.width,
          f.f.font,
          f.f.inheritfont,
          f.f.color
        ),
        G = i.default.input(
          p(),
          f.f.font,
          f.f.flex,
          f.f.border,
          f.f.padding,
          f.f.margin,
          Object(f.i)(1.75),
          Object(f.i)(1.75),
          f.e.universalBorder('', f.b.blue)
        ),
        I = i.default.input(
          b(),
          Object(f.i)(2),
          Object(f.i)(2),
          Object(f.i)(1),
          f.c.bodyStyle,
          f.f.font,
          f.f.flex,
          f.f.border,
          f.e.universalBorder(),
          f.f.padding,
          f.f.margin,
          Object(f.i)(1.75),
          Object(f.i)(1.75),
          f.e.universalBorder('', f.b.blue)
        ),
        J = Object(i.default)(a.a)(
          m(),
          f.c.bodyStyle,
          f.f.border,
          f.f.flex,
          f.e.universalBorder(),
          Object(f.i)(2),
          Object(f.i)(2),
          f.b.blue,
          f.f.padding,
          f.f.margin,
          f.f.height
        ),
        M = Object(i.default)(c.a)(
          s(),
          f.c.bodyStyle,
          f.f.border,
          f.f.flex,
          f.e.universalBorder(),
          Object(f.i)(2),
          Object(f.i)(2),
          f.b.blue,
          f.f.padding,
          f.f.margin,
          f.f.height
        ),
        Q = i.default.form(l(), f.f.flex, f.f.margin),
        W = i.default.video(
          d(),
          f.f.margin,
          f.f.height,
          f.f.width,
          f.f.padding,
          f.f.background,
          f.f.borderRadius,
          f.f.flex
        );
    }
  }
]);
//# sourceMappingURL=47.bundle.js.map
