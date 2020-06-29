(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [53],
  {
    './src/modules/styled/web.js': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return r;
      }),
        n.d(t, 'r', function() {
          return c;
        }),
        n.d(t, 'o', function() {
          return l;
        }),
        n.d(t, 'f', function() {
          return u;
        }),
        n.d(t, 'e', function() {
          return m;
        }),
        n.d(t, 'c', function() {
          return s;
        }),
        n.d(t, 'p', function() {
          return b;
        }),
        n.d(t, 'i', function() {
          return p;
        }),
        n.d(t, 'k', function() {
          return g;
        }),
        n.d(t, 'a', function() {
          return w;
        }),
        n.d(t, 'b', function() {
          return _;
        }),
        n.d(t, 'j', function() {
          return h;
        }),
        n.d(t, 'h', function() {
          return y;
        }),
        n.d(t, 'g', function() {
          return k;
        }),
        n.d(t, 'n', function() {
          return x;
        }),
        n.d(t, 'm', function() {
          return j;
        }),
        n.d(t, 'd', function() {
          return C;
        }),
        n.d(t, 'q', function() {
          return I;
        });
      var o = n('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        a = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        f = n('./src/styles/index.js'),
        i = n(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        d = n(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        r = Object(a.default)(o.b).withConfig({
          displayName: 'web__StyledNavLink',
          componentId: 'kfa5fa-0'
        })(
          ['', ';color:', ';&.active{color:', ';}:hover{color:', ';}', ' ', ' ', ' ', ''],
          f.c.header,
          f.b.grey,
          f.b.black,
          f.b.black,
          f.f.font,
          f.f.display,
          f.f.color,
          f.f.margin
        ),
        c = a.default.div.withConfig({
          displayName: 'web__View',
          componentId: 'kfa5fa-1'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          f.f.margin,
          f.f.padding,
          f.f.flex,
          f.f.font,
          f.f.background,
          f.f.border,
          f.f.width,
          f.f.height,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        l = a.default.span.withConfig({
          displayName: 'web__Text',
          componentId: 'kfa5fa-2'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          f.f.margin,
          f.f.padding,
          f.f.flex,
          f.f.font,
          f.f.background,
          f.f.border,
          f.f.color,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        u = a.default.span.withConfig({
          displayName: 'web__InlineText',
          componentId: 'kfa5fa-3'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ''],
          f.f.margin,
          f.f.padding,
          f.f.font,
          f.f.background,
          f.f.border,
          f.f.color
        ),
        m = a.default.img.withConfig({
          displayName: 'web__Image',
          componentId: 'kfa5fa-4'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          f.f.margin,
          f.f.height,
          f.f.width,
          f.f.padding,
          f.f.background,
          f.f.borderRadius,
          f.f.flex
        ),
        s =
          (a.default.span.withConfig({
            displayName: 'web__ImageWrapper',
            componentId: 'kfa5fa-5'
          })(
            ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
            f.f.margin,
            f.f.flex
          ),
          a.default.div.withConfig({
            displayName: 'web__Divider',
            componentId: 'kfa5fa-6'
          })(
            ['', ' ', ' ', ' ', ''],
            f.f.margin,
            f.f.padding,
            f.f.width,
            f.e.universalBorder('bottom')
          )),
        b =
          (Object(a.default)(l).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], f.c.header, f.f.color),
          Object(a.default)(l).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], f.c.title, f.f.color, f.f.font)),
        p = Object(a.default)(l).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], f.c.link, f.f.color, f.f.font),
        g = Object(a.default)(l).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], f.c.secondaryText, f.f.font, f.f.color),
        w =
          (Object(a.default)(l).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], f.c.altLink, f.f.color, f.f.font),
          Object(a.default)(l).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], f.c.commentText, f.f.color, f.f.font),
          Object(a.default)(l).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], f.c.bodyStyle, f.f.color, f.f.font)),
        _ = a.default.button.withConfig({
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
          f.e.button,
          f.e.buttonFont,
          function(e) {
            return e.disabled
              ? '\n    color: '
                  .concat(f.b.white, ';\n    background: ')
                  .concat(f.b.grey, ';\n    ')
              : '';
          },
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
        h = Object(a.default)(l).withConfig({
          displayName: 'web__NumericalValue',
          componentId: 'kfa5fa-15'
        })(
          ['', ' ', ' ', ' ', ' ', ''],
          f.c.numericalValue,
          f.f.width,
          f.f.font,
          f.f.inheritfont,
          f.f.color
        ),
        y = a.default.input.withConfig({
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
          f.f.font,
          f.f.flex,
          f.f.border,
          f.f.padding,
          f.f.margin,
          Object(f.i)(1.75),
          Object(f.i)(1.75),
          f.e.universalBorder('', f.b.blue)
        ),
        k = a.default.input.withConfig({
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
        x = Object(a.default)(d.a).withConfig({
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
        j = Object(a.default)(i.a).withConfig({
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
        C = a.default.form.withConfig({
          displayName: 'web__Form',
          componentId: 'kfa5fa-20'
        })(['', ' ', ''], f.f.flex, f.f.margin),
        I = a.default.video.withConfig({
          displayName: 'web__Video',
          componentId: 'kfa5fa-21'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          f.f.margin,
          f.f.height,
          f.f.width,
          f.f.padding,
          f.f.background,
          f.f.borderRadius,
          f.f.flex
        );
    },
    './src/modules/ui/styles.component.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('../../node_modules/react/index.js'),
        a = n.n(o),
        f = n('./src/modules/styled/uni.js'),
        i = n('./src/modules/styled/web.js');
      t.default = function() {
        return a.a.createElement(
          f.E,
          { p: 4 },
          a.a.createElement(f.q, { mt: 2 }, 'Header'),
          a.a.createElement(f.C, { mt: 2 }, 'Title'),
          a.a.createElement(f.d, { mt: 2 }, 'BodyText'),
          a.a.createElement(f.x, { mt: 2 }, 'SecondaryText'),
          a.a.createElement(f.w, { mt: 2 }, 'NumericalValue'),
          a.a.createElement(f.f, { mt: 2, mr: 'auto' }, 'Button'),
          a.a.createElement(f.f, { disabled: !0, mt: 2, mr: 'auto' }, 'Disabled Button'),
          a.a.createElement(i.g, { type: 'text', value: 'Input', mr: 'auto', mt: 2 }),
          a.a.createElement(f.k, { mr: 'auto', mt: 2 }, 'CommentText'),
          a.a.createElement(i.m, { value: 'StyledTextarea', mt: 2 })
        );
      };
    }
  }
]);
//# sourceMappingURL=ui-styles-component.bundle.js.map
