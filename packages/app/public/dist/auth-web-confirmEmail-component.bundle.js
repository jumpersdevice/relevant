(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [26],
  {
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
          for (var i = -1, a = Object(n), r = o(n), f = r.length; f--; ) {
            var d = r[e ? f : ++i];
            if (!1 === t(a[d], d, a)) break;
          }
          return n;
        };
      };
    },
    './src/modules/auth/web/confirmEmail.component.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var o = t('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        i = t.n(o),
        a = t('../../node_modules/@babel/runtime/helpers/createClass.js'),
        r = t.n(a),
        f = t('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        d = t.n(f),
        u = t('../../node_modules/@babel/runtime/helpers/inherits.js'),
        l = t.n(u),
        c = t('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        s = t.n(c),
        m = t('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        p = t.n(m),
        b = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
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
          r()(
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
        a = t('./src/styles/index.js'),
        r = t(
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
          a.c.header,
          a.b.grey,
          a.b.black,
          a.b.black,
          a.f.font,
          a.f.display,
          a.f.color,
          a.f.margin
        ),
        u = i.default.div.withConfig({
          displayName: 'web__View',
          componentId: 'kfa5fa-1'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          a.f.margin,
          a.f.padding,
          a.f.flex,
          a.f.font,
          a.f.background,
          a.f.border,
          a.f.width,
          a.f.height,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        l = i.default.span.withConfig({
          displayName: 'web__Text',
          componentId: 'kfa5fa-2'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          a.f.margin,
          a.f.padding,
          a.f.flex,
          a.f.font,
          a.f.background,
          a.f.border,
          a.f.color,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        c = i.default.span.withConfig({
          displayName: 'web__InlineText',
          componentId: 'kfa5fa-3'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ''],
          a.f.margin,
          a.f.padding,
          a.f.font,
          a.f.background,
          a.f.border,
          a.f.color
        ),
        s = i.default.img.withConfig({
          displayName: 'web__Image',
          componentId: 'kfa5fa-4'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          a.f.margin,
          a.f.height,
          a.f.width,
          a.f.padding,
          a.f.background,
          a.f.borderRadius,
          a.f.flex
        ),
        m =
          (i.default.span.withConfig({
            displayName: 'web__ImageWrapper',
            componentId: 'kfa5fa-5'
          })(
            ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
            a.f.margin,
            a.f.flex
          ),
          i.default.div.withConfig({
            displayName: 'web__Divider',
            componentId: 'kfa5fa-6'
          })(
            ['', ' ', ' ', ' ', ''],
            a.f.margin,
            a.f.padding,
            a.f.width,
            a.e.universalBorder('bottom')
          )),
        p =
          (Object(i.default)(l).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], a.c.header, a.f.color),
          Object(i.default)(l).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], a.c.title, a.f.color, a.f.font)),
        b = Object(i.default)(l).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], a.c.link, a.f.color, a.f.font),
        h = Object(i.default)(l).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], a.c.secondaryText, a.f.font, a.f.color),
        _ =
          (Object(i.default)(l).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], a.c.altLink, a.f.color, a.f.font),
          Object(i.default)(l).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], a.c.commentText, a.f.color, a.f.font),
          Object(i.default)(l).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], a.c.bodyStyle, a.f.color, a.f.font)),
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
          a.e.button,
          a.e.buttonFont,
          function(e) {
            return e.disabled
              ? '\n    color: '
                  .concat(a.b.white, ';\n    background: ')
                  .concat(a.b.grey, ';\n    ')
              : '';
          },
          a.f.flex,
          a.f.background,
          a.f.padding,
          a.f.width,
          a.f.margin,
          a.f.color,
          a.f.width,
          a.f.height,
          a.e.activeButtonShadow
        ),
        w = Object(i.default)(l).withConfig({
          displayName: 'web__NumericalValue',
          componentId: 'kfa5fa-15'
        })(
          ['', ' ', ' ', ' ', ' ', ''],
          a.c.numericalValue,
          a.f.width,
          a.f.font,
          a.f.inheritfont,
          a.f.color
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
          a.f.font,
          a.f.flex,
          a.f.border,
          a.f.padding,
          a.f.margin,
          Object(a.i)(1.75),
          Object(a.i)(1.75),
          a.e.universalBorder('', a.b.blue)
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
          Object(a.i)(2),
          Object(a.i)(2),
          Object(a.i)(1),
          a.c.bodyStyle,
          a.f.font,
          a.f.flex,
          a.f.border,
          a.e.universalBorder(),
          a.f.padding,
          a.f.margin,
          Object(a.i)(1.75),
          Object(a.i)(1.75),
          a.e.universalBorder('', a.b.blue)
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
          a.c.bodyStyle,
          a.f.border,
          a.f.flex,
          a.e.universalBorder(),
          Object(a.i)(2),
          Object(a.i)(2),
          a.b.blue,
          a.f.padding,
          a.f.margin,
          a.f.height
        ),
        x = Object(i.default)(r.a).withConfig({
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
          a.c.bodyStyle,
          a.f.border,
          a.f.flex,
          a.e.universalBorder(),
          Object(a.i)(2),
          Object(a.i)(2),
          a.b.blue,
          a.f.padding,
          a.f.margin,
          a.f.height
        ),
        C = i.default.form.withConfig({
          displayName: 'web__Form',
          componentId: 'kfa5fa-20'
        })(['', ' ', ''], a.f.flex, a.f.margin),
        v = i.default.video.withConfig({
          displayName: 'web__Video',
          componentId: 'kfa5fa-21'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          a.f.margin,
          a.f.height,
          a.f.width,
          a.f.padding,
          a.f.background,
          a.f.borderRadius,
          a.f.flex
        );
    }
  }
]);
//# sourceMappingURL=auth-web-confirmEmail-component.bundle.js.map
