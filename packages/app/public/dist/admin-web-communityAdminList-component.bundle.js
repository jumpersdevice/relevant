(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [10],
  {
    './src/modules/admin/web/communityAdminList.component.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        r = n.n(o),
        i = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        a = n.n(i),
        f = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        c = n.n(f),
        d = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        u = n.n(d),
        l = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        s = n.n(l),
        m = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        p = n.n(m),
        b = n('../../node_modules/react/index.js'),
        g = n.n(b),
        y = n('../../node_modules/prop-types/index.js'),
        h = n.n(y),
        w = n('../../node_modules/react-router/esm/react-router.js'),
        _ = n('../../node_modules/redux/es/redux.js'),
        j = n('../../node_modules/react-redux/es/index.js'),
        O = n('./src/modules/community/community.actions.js'),
        k = n('./src/modules/navigation/ULink.component.js'),
        x = n('./src/modules/styled/web.js');
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function(t) {
                p()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function I(e) {
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
            o = s()(e);
          if (t) {
            var r = s()(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return u()(this, n);
        };
      }
      var N = (function(e) {
        c()(n, e);
        var t = I(n);
        function n() {
          return r()(this, n), t.apply(this, arguments);
        }
        return (
          a()(n, [
            {
              key: 'render',
              value: function() {
                var e = this.props.community.communities;
                return g.a.createElement(
                  x.r,
                  { m: 4, fdirection: 'column' },
                  Object.values(e).map(function(e) {
                    return g.a.createElement(
                      x.r,
                      { mt: 2, key: e.slug },
                      g.a.createElement(
                        k.a,
                        { to: '/admin/community/'.concat(e.slug) },
                        e.name
                      )
                    );
                  }),
                  g.a.createElement(
                    x.r,
                    { mt: 2 },
                    g.a.createElement(
                      k.a,
                      { to: '/admin/community/new', m: 0 },
                      g.a.createElement(
                        x.b,
                        { to: '/admin/community/new', ml: 0 },
                        'Create New'
                      )
                    )
                  )
                );
              }
            }
          ]),
          n
        );
      })(b.Component);
      p()(N, 'propTypes', { community: h.a.object });
      t.default = Object(w.g)(
        Object(j.c)(
          function(e) {
            return { routing: e.routing, community: e.community };
          },
          function(e) {
            return { actions: Object(_.bindActionCreators)(v({}, O), e) };
          }
        )(N)
      );
    },
    './src/modules/styled/web.js': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return c;
      }),
        n.d(t, 'r', function() {
          return d;
        }),
        n.d(t, 'o', function() {
          return u;
        }),
        n.d(t, 'f', function() {
          return l;
        }),
        n.d(t, 'e', function() {
          return s;
        }),
        n.d(t, 'c', function() {
          return m;
        }),
        n.d(t, 'p', function() {
          return p;
        }),
        n.d(t, 'i', function() {
          return b;
        }),
        n.d(t, 'k', function() {
          return g;
        }),
        n.d(t, 'a', function() {
          return y;
        }),
        n.d(t, 'b', function() {
          return h;
        }),
        n.d(t, 'j', function() {
          return w;
        }),
        n.d(t, 'h', function() {
          return _;
        }),
        n.d(t, 'g', function() {
          return j;
        }),
        n.d(t, 'n', function() {
          return O;
        }),
        n.d(t, 'm', function() {
          return k;
        }),
        n.d(t, 'd', function() {
          return x;
        }),
        n.d(t, 'q', function() {
          return C;
        });
      var o = n('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        r = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        i = n('./src/styles/index.js'),
        a = n(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        f = n(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        c = Object(r.default)(o.b).withConfig({
          displayName: 'web__StyledNavLink',
          componentId: 'kfa5fa-0'
        })(
          ['', ';color:', ';&.active{color:', ';}:hover{color:', ';}', ' ', ' ', ' ', ''],
          i.c.header,
          i.b.grey,
          i.b.black,
          i.b.black,
          i.f.font,
          i.f.display,
          i.f.color,
          i.f.margin
        ),
        d = r.default.div.withConfig({
          displayName: 'web__View',
          componentId: 'kfa5fa-1'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.padding,
          i.f.flex,
          i.f.font,
          i.f.background,
          i.f.border,
          i.f.width,
          i.f.height,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        u = r.default.span.withConfig({
          displayName: 'web__Text',
          componentId: 'kfa5fa-2'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.padding,
          i.f.flex,
          i.f.font,
          i.f.background,
          i.f.border,
          i.f.color,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        l = r.default.span.withConfig({
          displayName: 'web__InlineText',
          componentId: 'kfa5fa-3'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.padding,
          i.f.font,
          i.f.background,
          i.f.border,
          i.f.color
        ),
        s = r.default.img.withConfig({
          displayName: 'web__Image',
          componentId: 'kfa5fa-4'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.height,
          i.f.width,
          i.f.padding,
          i.f.background,
          i.f.borderRadius,
          i.f.flex
        ),
        m =
          (r.default.span.withConfig({
            displayName: 'web__ImageWrapper',
            componentId: 'kfa5fa-5'
          })(
            ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
            i.f.margin,
            i.f.flex
          ),
          r.default.div.withConfig({
            displayName: 'web__Divider',
            componentId: 'kfa5fa-6'
          })(
            ['', ' ', ' ', ' ', ''],
            i.f.margin,
            i.f.padding,
            i.f.width,
            i.e.universalBorder('bottom')
          )),
        p =
          (Object(r.default)(u).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], i.c.header, i.f.color),
          Object(r.default)(u).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], i.c.title, i.f.color, i.f.font)),
        b = Object(r.default)(u).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], i.c.link, i.f.color, i.f.font),
        g = Object(r.default)(u).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], i.c.secondaryText, i.f.font, i.f.color),
        y =
          (Object(r.default)(u).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], i.c.altLink, i.f.color, i.f.font),
          Object(r.default)(u).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], i.c.commentText, i.f.color, i.f.font),
          Object(r.default)(u).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], i.c.bodyStyle, i.f.color, i.f.font)),
        h = r.default.button.withConfig({
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
          i.e.button,
          i.e.buttonFont,
          function(e) {
            return e.disabled
              ? '\n    color: '
                  .concat(i.b.white, ';\n    background: ')
                  .concat(i.b.grey, ';\n    ')
              : '';
          },
          i.f.flex,
          i.f.background,
          i.f.padding,
          i.f.width,
          i.f.margin,
          i.f.color,
          i.f.width,
          i.f.height,
          i.e.activeButtonShadow
        ),
        w = Object(r.default)(u).withConfig({
          displayName: 'web__NumericalValue',
          componentId: 'kfa5fa-15'
        })(
          ['', ' ', ' ', ' ', ' ', ''],
          i.c.numericalValue,
          i.f.width,
          i.f.font,
          i.f.inheritfont,
          i.f.color
        ),
        _ = r.default.input.withConfig({
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
          i.f.font,
          i.f.flex,
          i.f.border,
          i.f.padding,
          i.f.margin,
          Object(i.i)(1.75),
          Object(i.i)(1.75),
          i.e.universalBorder('', i.b.blue)
        ),
        j = r.default.input.withConfig({
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
          Object(i.i)(2),
          Object(i.i)(2),
          Object(i.i)(1),
          i.c.bodyStyle,
          i.f.font,
          i.f.flex,
          i.f.border,
          i.e.universalBorder(),
          i.f.padding,
          i.f.margin,
          Object(i.i)(1.75),
          Object(i.i)(1.75),
          i.e.universalBorder('', i.b.blue)
        ),
        O = Object(r.default)(f.a).withConfig({
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
          i.c.bodyStyle,
          i.f.border,
          i.f.flex,
          i.e.universalBorder(),
          Object(i.i)(2),
          Object(i.i)(2),
          i.b.blue,
          i.f.padding,
          i.f.margin,
          i.f.height
        ),
        k = Object(r.default)(a.a).withConfig({
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
          i.c.bodyStyle,
          i.f.border,
          i.f.flex,
          i.e.universalBorder(),
          Object(i.i)(2),
          Object(i.i)(2),
          i.b.blue,
          i.f.padding,
          i.f.margin,
          i.f.height
        ),
        x = r.default.form.withConfig({
          displayName: 'web__Form',
          componentId: 'kfa5fa-20'
        })(['', ' ', ''], i.f.flex, i.f.margin),
        C = r.default.video.withConfig({
          displayName: 'web__Video',
          componentId: 'kfa5fa-21'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          i.f.margin,
          i.f.height,
          i.f.width,
          i.f.padding,
          i.f.background,
          i.f.borderRadius,
          i.f.flex
        );
    }
  }
]);
//# sourceMappingURL=admin-web-communityAdminList-component.bundle.js.map
