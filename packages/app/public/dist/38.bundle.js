(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [38],
  {
    '../../node_modules/@babel/runtime/helpers/createClass.js': function(n, e) {
      function t(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      n.exports = function(n, e, r) {
        return e && t(n.prototype, e), r && t(n, r), n;
      };
    },
    '../../node_modules/lodash/_baseFor.js': function(n, e, t) {
      var r = t('../../node_modules/lodash/_createBaseFor.js')();
      n.exports = r;
    },
    '../../node_modules/lodash/_baseForOwn.js': function(n, e, t) {
      var r = t('../../node_modules/lodash/_baseFor.js'),
        o = t('../../node_modules/lodash/keys.js');
      n.exports = function(n, e) {
        return n && r(n, e, o);
      };
    },
    '../../node_modules/lodash/_createBaseFor.js': function(n, e) {
      n.exports = function(n) {
        return function(e, t, r) {
          for (var o = -1, u = Object(e), i = r(e), f = i.length; f--; ) {
            var a = i[n ? f : ++o];
            if (!1 === t(u[a], a, u)) break;
          }
          return e;
        };
      };
    },
    './src/modules/auth/web/confirmEmail.component.js': function(n, e, t) {
      'use strict';
      t.r(e);
      var r = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = t.n(r),
        u = t('../../node_modules/react/index.js'),
        i = t.n(u),
        f = t('../../node_modules/prop-types/index.js'),
        a = t.n(f),
        d = t('./src/modules/styled/uni.js'),
        c = t('../../node_modules/redux-form/es/reduxForm.js'),
        s = t('./src/modules/styled/web.js'),
        l = t('../../node_modules/redux/es/redux.js'),
        m = t('../../node_modules/react-redux/es/index.js'),
        b = t('./src/modules/auth/auth.actions.js');
      class h extends u.Component {
        constructor(n) {
          super(n),
            o()(this, 'sendConfirmation', () => {
              this.setState({ sending: !0 }),
                this.props.actions.sendConfirmation().then(() => {
                  this.setState({ sending: !1 });
                });
            }),
            (this.state = { sending: !1, email: null });
        }
        static getDerivedStateFromProps(n) {
          return {
            email: n.auth.user ? n.auth.user.email : null,
            confirmed: n.auth.user ? n.auth.user.confirmed : null
          };
        }
        componentDidUpdate() {
          this.props.initialize(this.state);
        }
        render() {
          var n,
            { auth: e } = this.props,
            t = 'Your email has been confirmed';
          return (
            e.confirmed ||
              ((t = 'Your email is not confirmed'),
              e.user &&
                (n = i.a.createElement(
                  d.E,
                  { justify: ['flex-end', 'stretch'], fdirection: 'column' },
                  i.a.createElement(
                    s.b,
                    {
                      mr: ['auto', 0],
                      mt: 4,
                      onClick: this.sendConfirmation,
                      p: 0,
                      disabled: this.state.sending
                    },
                    'Resend email confirmation code'
                  ),
                  i.a.createElement(
                    d.x,
                    { mt: 2 },
                    "If you don't see an email in your inbox, please check your spam folder"
                  )
                ))),
            i.a.createElement(
              d.E,
              { fdirection: 'column' },
              i.a.createElement(d.d, null, t),
              n
            )
          );
        }
      }
      o()(h, 'propTypes', {
        actions: a.a.object,
        auth: a.a.object,
        initialize: a.a.func
      });
      e.default = Object(c.a)({ form: 'emailConfirm', enableReinitialize: !0 })(
        Object(m.c)(
          n => ({ auth: n.auth }),
          n => ({
            actions: Object(l.bindActionCreators)(
              { sendConfirmation: b.sendConfirmation },
              n
            )
          })
        )(h)
      );
    },
    './src/modules/styled/web.js': function(n, e, t) {
      'use strict';
      t.d(e, 'l', function() {
        return L;
      }),
        t.d(e, 'r', function() {
          return z;
        }),
        t.d(e, 'o', function() {
          return A;
        }),
        t.d(e, 'f', function() {
          return R;
        }),
        t.d(e, 'e', function() {
          return T;
        }),
        t.d(e, 'c', function() {
          return P;
        }),
        t.d(e, 'p', function() {
          return U;
        }),
        t.d(e, 'i', function() {
          return H;
        }),
        t.d(e, 'k', function() {
          return K;
        }),
        t.d(e, 'a', function() {
          return N;
        }),
        t.d(e, 'b', function() {
          return Y;
        }),
        t.d(e, 'j', function() {
          return q;
        }),
        t.d(e, 'h', function() {
          return I;
        }),
        t.d(e, 'g', function() {
          return V;
        }),
        t.d(e, 'n', function() {
          return G;
        }),
        t.d(e, 'm', function() {
          return J;
        }),
        t.d(e, 'd', function() {
          return M;
        }),
        t.d(e, 'q', function() {
          return Q;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        o = t.n(r),
        u = t('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        i = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        f = t('./src/styles/index.js'),
        a = t(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        d = t(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        );
      function c() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (c = function() {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = o()(['\n  ', '\n  ', '\n']);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      function l() {
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
          (l = function() {
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
      function h() {
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
          (h = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function g() {
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
          (g = function() {
            return n;
          }),
          n
        );
      }
      function j() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (j = function() {
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
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (_ = function() {
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
        var n = o()(['\n  ', '\n  ', '\n']);
        return (
          (w = function() {
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
      function C() {
        var n = o()([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (C = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (B = function() {
            return n;
          }),
          n
        );
      }
      function S() {
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
          (S = function() {
            return n;
          }),
          n
        );
      }
      function D() {
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
          (D = function() {
            return n;
          }),
          n
        );
      }
      function F() {
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
          (F = function() {
            return n;
          }),
          n
        );
      }
      var L = Object(i.default)(u.b)(
          F(),
          f.c.header,
          f.b.grey,
          f.b.black,
          f.b.black,
          f.f.font,
          f.f.display,
          f.f.color,
          f.f.margin
        ),
        z = i.default.div(
          D(),
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
        A = i.default.span(
          S(),
          f.f.margin,
          f.f.padding,
          f.f.flex,
          f.f.font,
          f.f.background,
          f.f.border,
          f.f.color,
          n => (n.onClick ? 'cursor: pointer;' : '')
        ),
        R = i.default.span(
          B(),
          f.f.margin,
          f.f.padding,
          f.f.font,
          f.f.background,
          f.f.border,
          f.f.color
        ),
        T = i.default.img(
          E(),
          f.f.margin,
          f.f.height,
          f.f.width,
          f.f.padding,
          f.f.background,
          f.f.borderRadius,
          f.f.flex
        ),
        P =
          (i.default.span(C(), f.f.margin, f.f.flex),
          i.default.div(
            k(),
            f.f.margin,
            f.f.padding,
            f.f.width,
            f.e.universalBorder('bottom')
          )),
        U =
          (Object(i.default)(A)(w(), f.c.header, f.f.color),
          Object(i.default)(A)(y(), f.c.title, f.f.color, f.f.font)),
        H = Object(i.default)(A)(O(), f.c.link, f.f.color, f.f.font),
        K = Object(i.default)(A)(_(), f.c.secondaryText, f.f.font, f.f.color),
        N =
          (Object(i.default)(A)(x(), f.c.altLink, f.f.color, f.f.font),
          Object(i.default)(A)(v(), f.c.commentText, f.f.color, f.f.font),
          Object(i.default)(A)(j(), f.c.bodyStyle, f.f.color, f.f.font)),
        Y = i.default.button(
          g(),
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
        q = Object(i.default)(A)(
          p(),
          f.c.numericalValue,
          f.f.width,
          f.f.font,
          f.f.inheritfont,
          f.f.color
        ),
        I = i.default.input(
          h(),
          f.f.font,
          f.f.flex,
          f.f.border,
          f.f.padding,
          f.f.margin,
          Object(f.i)(1.75),
          Object(f.i)(1.75),
          f.e.universalBorder('', f.b.blue)
        ),
        V = i.default.input(
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
        G = Object(i.default)(d.a)(
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
        J = Object(i.default)(a.a)(
          l(),
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
        M = i.default.form(s(), f.f.flex, f.f.margin),
        Q = i.default.video(
          c(),
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
//# sourceMappingURL=38.bundle.js.map
