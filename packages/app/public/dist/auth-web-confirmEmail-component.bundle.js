(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [26],
  {
    '../../node_modules/@babel/runtime/helpers/createClass.js': function(e, n) {
      function t(e, n) {
        for (var t = 0; t < n.length; t++) {
          var o = n[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      e.exports = function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
      };
    },
    '../../node_modules/lodash/_baseFor.js': function(e, n, t) {
      var o = t('../../node_modules/lodash/_createBaseFor.js')();
      e.exports = o;
    },
    '../../node_modules/lodash/_baseForOwn.js': function(e, n, t) {
      var o = t('../../node_modules/lodash/_baseFor.js'),
        i = t('../../node_modules/lodash/keys.js');
      e.exports = function(e, n) {
        return e && o(e, n, i);
      };
    },
    '../../node_modules/lodash/_createBaseFor.js': function(e, n) {
      e.exports = function(e) {
        return function(n, t, o) {
          for (var i = -1, r = Object(n), a = o(n), f = a.length; f--; ) {
            var d = a[e ? f : ++i];
            if (!1 === t(r[d], d, r)) break;
          }
          return n;
        };
      };
    },
    './src/modules/auth/web/confirmEmail.component.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var o = t('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        i = t.n(o),
        r = t('./node_modules/@babel/runtime/helpers/createClass.js'),
        a = t.n(r),
        f = t('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        d = t.n(f),
        u = t('./node_modules/@babel/runtime/helpers/inherits.js'),
        l = t.n(u),
        c = t('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        s = t.n(c),
        m = t('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        p = t.n(m),
        b = t('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        h = t.n(b),
        _ = t('../../node_modules/react/index.js'),
        g = t.n(_),
        w = t('../../node_modules/prop-types/index.js'),
        y = t.n(w),
        j = t('./src/modules/styled/uni.js'),
        k = t('../../node_modules/redux-form/es/reduxForm.js'),
        x = t('./src/modules/styled/web.js'),
        C = t('../../node_modules/redux/es/redux.js'),
        v = t('../../node_modules/react-redux/es/index.js'),
        O = t('./src/modules/auth/auth.actions.js');
      function I(e) {
        var n = (function() {
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
          var t,
            o = p()(e);
          if (n) {
            var i = p()(this).constructor;
            t = Reflect.construct(o, arguments, i);
          } else t = o.apply(this, arguments);
          return s()(this, t);
        };
      }
      var N = (function(e) {
        l()(t, e);
        var n = I(t);
        function t(e) {
          var o;
          return (
            i()(this, t),
            (o = n.call(this, e)),
            h()(d()(o), 'sendConfirmation', function() {
              o.setState({ sending: !0 }),
                o.props.actions.sendConfirmation().then(function() {
                  o.setState({ sending: !1 });
                });
            }),
            (o.state = { sending: !1, email: null }),
            o
          );
        }
        return (
          a()(
            t,
            [
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.props.initialize(this.state);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    n = this.props.auth,
                    t = 'Your email has been confirmed';
                  return (
                    n.confirmed ||
                      ((t = 'Your email is not confirmed'),
                      n.user &&
                        (e = g.a.createElement(
                          j.E,
                          { justify: ['flex-end', 'stretch'], fdirection: 'column' },
                          g.a.createElement(
                            x.b,
                            {
                              mr: ['auto', 0],
                              mt: 4,
                              onClick: this.sendConfirmation,
                              p: 0,
                              disabled: this.state.sending
                            },
                            'Resend email confirmation code'
                          ),
                          g.a.createElement(
                            j.x,
                            { mt: 2 },
                            "If you don't see an email in your inbox, please check your spam folder"
                          )
                        ))),
                    g.a.createElement(
                      j.E,
                      { fdirection: 'column' },
                      g.a.createElement(j.d, null, t),
                      e
                    )
                  );
                }
              }
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function(e) {
                  return {
                    email: e.auth.user ? e.auth.user.email : null,
                    confirmed: e.auth.user ? e.auth.user.confirmed : null
                  };
                }
              }
            ]
          ),
          t
        );
      })(_.Component);
      h()(N, 'propTypes', {
        actions: y.a.object,
        auth: y.a.object,
        initialize: y.a.func
      });
      n.default = Object(k.a)({ form: 'emailConfirm', enableReinitialize: !0 })(
        Object(v.c)(
          function(e) {
            return { auth: e.auth };
          },
          function(e) {
            return {
              actions: Object(C.bindActionCreators)(
                { sendConfirmation: O.sendConfirmation },
                e
              )
            };
          }
        )(N)
      );
    },
    './src/modules/styled/web.js': function(e, n, t) {
      'use strict';
      t.d(n, 'l', function() {
        return d;
      }),
        t.d(n, 'r', function() {
          return u;
        }),
        t.d(n, 'o', function() {
          return l;
        }),
        t.d(n, 'f', function() {
          return c;
        }),
        t.d(n, 'e', function() {
          return s;
        }),
        t.d(n, 'c', function() {
          return m;
        }),
        t.d(n, 'p', function() {
          return p;
        }),
        t.d(n, 'i', function() {
          return b;
        }),
        t.d(n, 'k', function() {
          return h;
        }),
        t.d(n, 'a', function() {
          return _;
        }),
        t.d(n, 'b', function() {
          return g;
        }),
        t.d(n, 'j', function() {
          return w;
        }),
        t.d(n, 'h', function() {
          return y;
        }),
        t.d(n, 'g', function() {
          return j;
        }),
        t.d(n, 'n', function() {
          return k;
        }),
        t.d(n, 'm', function() {
          return x;
        }),
        t.d(n, 'd', function() {
          return C;
        }),
        t.d(n, 'q', function() {
          return v;
        });
      var o = t('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        i = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        r = t('./src/styles/index.js'),
        a = t(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        f = t(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        d = Object(i.default)(o.b).withConfig({
          displayName: 'web__StyledNavLink',
          componentId: 'kfa5fa-0'
        })(
          ['', ';color:', ';&.active{color:', ';}:hover{color:', ';}', ' ', ' ', ' ', ''],
          r.c.header,
          r.b.grey,
          r.b.black,
          r.b.black,
          r.f.font,
          r.f.display,
          r.f.color,
          r.f.margin
        ),
        u = i.default.div.withConfig({
          displayName: 'web__View',
          componentId: 'kfa5fa-1'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          r.f.margin,
          r.f.padding,
          r.f.flex,
          r.f.font,
          r.f.background,
          r.f.border,
          r.f.width,
          r.f.height,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        l = i.default.span.withConfig({
          displayName: 'web__Text',
          componentId: 'kfa5fa-2'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          r.f.margin,
          r.f.padding,
          r.f.flex,
          r.f.font,
          r.f.background,
          r.f.border,
          r.f.color,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        c = i.default.span.withConfig({
          displayName: 'web__InlineText',
          componentId: 'kfa5fa-3'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ''],
          r.f.margin,
          r.f.padding,
          r.f.font,
          r.f.background,
          r.f.border,
          r.f.color
        ),
        s = i.default.img.withConfig({
          displayName: 'web__Image',
          componentId: 'kfa5fa-4'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          r.f.margin,
          r.f.height,
          r.f.width,
          r.f.padding,
          r.f.background,
          r.f.borderRadius,
          r.f.flex
        ),
        m =
          (i.default.span.withConfig({
            displayName: 'web__ImageWrapper',
            componentId: 'kfa5fa-5'
          })(
            ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
            r.f.margin,
            r.f.flex
          ),
          i.default.div.withConfig({
            displayName: 'web__Divider',
            componentId: 'kfa5fa-6'
          })(
            ['', ' ', ' ', ' ', ''],
            r.f.margin,
            r.f.padding,
            r.f.width,
            r.e.universalBorder('bottom')
          )),
        p =
          (Object(i.default)(l).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], r.c.header, r.f.color),
          Object(i.default)(l).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], r.c.title, r.f.color, r.f.font)),
        b = Object(i.default)(l).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], r.c.link, r.f.color, r.f.font),
        h = Object(i.default)(l).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], r.c.secondaryText, r.f.font, r.f.color),
        _ =
          (Object(i.default)(l).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], r.c.altLink, r.f.color, r.f.font),
          Object(i.default)(l).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], r.c.commentText, r.f.color, r.f.font),
          Object(i.default)(l).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], r.c.bodyStyle, r.f.color, r.f.font)),
        g = i.default.button.withConfig({
          displayName: 'web__Button',
          componentId: 'kfa5fa-14'
        })(
          [
            '',
            ' ',
            ' ',
            ';',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' &:hover{',
            '};user-select:none;cursor:pointer;'
          ],
          r.e.button,
          r.e.buttonFont,
          function(e) {
            return e.disabled
              ? '\n    color: '
                  .concat(r.b.white, ';\n    background: ')
                  .concat(r.b.grey, ';\n    ')
              : '';
          },
          r.f.flex,
          r.f.background,
          r.f.padding,
          r.f.width,
          r.f.margin,
          r.f.color,
          r.f.width,
          r.f.height,
          r.e.activeButtonShadow
        ),
        w = Object(i.default)(l).withConfig({
          displayName: 'web__NumericalValue',
          componentId: 'kfa5fa-15'
        })(
          ['', ' ', ' ', ' ', ' ', ''],
          r.c.numericalValue,
          r.f.width,
          r.f.font,
          r.f.inheritfont,
          r.f.color
        ),
        y = i.default.input.withConfig({
          displayName: 'web__InputPlain',
          componentId: 'kfa5fa-16'
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' ',
            '::placeholder:{font-size:',
            ';line-height:',
            ';};:focus{outline:none !important;',
            '}'
          ],
          r.f.font,
          r.f.flex,
          r.f.border,
          r.f.padding,
          r.f.margin,
          Object(r.i)(1.75),
          Object(r.i)(1.75),
          r.e.universalBorder('', r.b.blue)
        ),
        j = i.default.input.withConfig({
          displayName: 'web__Input',
          componentId: 'kfa5fa-17'
        })(
          [
            'padding:',
            ' ',
            ';margin-top:',
            ';',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '::placeholder:{font-size:',
            ';line-height:',
            ';};:focus{outline:none !important;',
            '}'
          ],
          Object(r.i)(2),
          Object(r.i)(2),
          Object(r.i)(1),
          r.c.bodyStyle,
          r.f.font,
          r.f.flex,
          r.f.border,
          r.e.universalBorder(),
          r.f.padding,
          r.f.margin,
          Object(r.i)(1.75),
          Object(r.i)(1.75),
          r.e.universalBorder('', r.b.blue)
        ),
        k = Object(i.default)(f.a).withConfig({
          displayName: 'web__StyledTextareaAutocomplete',
          componentId: 'kfa5fa-18'
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' padding:',
            ' ',
            ';min-width:0;&:focus{outline:1px solid ',
            ';}',
            ' ',
            ' ',
            ''
          ],
          r.c.bodyStyle,
          r.f.border,
          r.f.flex,
          r.e.universalBorder(),
          Object(r.i)(2),
          Object(r.i)(2),
          r.b.blue,
          r.f.padding,
          r.f.margin,
          r.f.height
        ),
        x = Object(i.default)(a.a).withConfig({
          displayName: 'web__StyledTextarea',
          componentId: 'kfa5fa-19'
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' padding:',
            ' ',
            ';min-width:0;&:focus{outline:1px solid ',
            ';}',
            ' ',
            ' ',
            ''
          ],
          r.c.bodyStyle,
          r.f.border,
          r.f.flex,
          r.e.universalBorder(),
          Object(r.i)(2),
          Object(r.i)(2),
          r.b.blue,
          r.f.padding,
          r.f.margin,
          r.f.height
        ),
        C = i.default.form.withConfig({
          displayName: 'web__Form',
          componentId: 'kfa5fa-20'
        })(['', ' ', ''], r.f.flex, r.f.margin),
        v = i.default.video.withConfig({
          displayName: 'web__Video',
          componentId: 'kfa5fa-21'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          r.f.margin,
          r.f.height,
          r.f.width,
          r.f.padding,
          r.f.background,
          r.f.borderRadius,
          r.f.flex
        );
    }
  }
]);
//# sourceMappingURL=auth-web-confirmEmail-component.bundle.js.map
