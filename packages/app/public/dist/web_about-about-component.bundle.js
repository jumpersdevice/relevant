(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [63],
  {
    './public/img/email.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/email.png');
    },
    './public/img/instagram.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/instagram.png');
    },
    './public/img/medium.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/medium.png');
    },
    './public/img/slack.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/slack.png');
    },
    './public/img/twitter-black.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/twitter-black.png');
    },
    './src/modules/community/communityList.component.js': function(e, t, n) {
      'use strict';
      var o = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        r = n.n(o),
        i = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        a = n.n(i),
        c = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        s = n.n(c),
        u = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        l = n.n(u),
        m = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        d = n.n(m),
        f = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        p = n.n(f),
        h = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        b = n.n(h),
        g = n('../../node_modules/react/index.js'),
        y = n.n(g),
        w = n('../../node_modules/prop-types/index.js'),
        j = n.n(w),
        v = n('../../node_modules/react-redux/es/index.js'),
        _ = n('../../node_modules/redux/es/redux.js'),
        x = n('./src/modules/community/community.actions.js'),
        O = n('./src/modules/auth/auth.actions.js'),
        E = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        k = n('./src/modules/navigation/ULink.component.js'),
        C = n('./src/modules/styled/uni.js'),
        R = n('./src/styles/index.js');
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
            o = p()(e);
          if (t) {
            var r = p()(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return d()(this, n);
        };
      }
      var T = Object(E.css)([':hover{background:', ';}'], R.b.secondaryBG),
        U = (function(e) {
          l()(n, e);
          var t = I(n);
          function n() {
            var e;
            r()(this, n);
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(s()(e), 'handleJoinCommunity', function(t, n) {
                e.props.auth.isAuthenticated && e.props.actions.joinCommunity(n);
              }),
              b()(s()(e), 'renderJoinLink', function(t) {
                return y.a.createElement(
                  C.v,
                  {
                    inline: 1,
                    c: R.b.blue,
                    onPress: function(n) {
                      return e.handleJoinCommunity(n, t);
                    },
                    onClick: function(n) {
                      return e.handleJoinCommunity(n, t);
                    }
                  },
                  'Join Community'
                );
              }),
              b()(s()(e), 'renderInnerText', function(t) {
                return e.props.hashtags
                  ? y.a.createElement(
                      C.d,
                      { c: R.b.black, mt: 0.5 },
                      t.topics
                        .map(function(e) {
                          return '#' + e;
                        })
                        .join(', ')
                    )
                  : y.a.createElement(
                      C.e,
                      null,
                      y.a.createElement(
                        C.d,
                        { inline: 1, c: R.b.black, mt: 0.5 },
                        t.description
                      ),
                      y.a.createElement(
                        C.v,
                        { inline: 1, c: R.b.black, mt: 0.5 },
                        t.memberCount,
                        ' member',
                        t.memberCount > 1 ? 's' : ''
                      )
                    );
              }),
              e
            );
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.community.communities,
                    o = t.actions,
                    r = t.p,
                    i = void 0 !== r ? r : 4;
                  return y.a.createElement(
                    C.E,
                    { fdirection: 'column' },
                    Object.values(n).map(function(t) {
                      var n = '/'.concat(t.slug, '/new');
                      return y.a.createElement(
                        k.a,
                        {
                          to: n,
                          onPress: function() {
                            return o.setCommunity(t.slug);
                          },
                          onClick: function() {
                            return o.setCommunity(t.slug);
                          },
                          key: t._id,
                          styles: T,
                          fdirection: 'column',
                          flex: 1
                        },
                        y.a.createElement(
                          C.E,
                          { fdirection: 'row', align: 'flex-start', p: '2 '.concat(i) },
                          y.a.createElement(C.s, {
                            source: { uri: t.image },
                            h: 8,
                            w: 8,
                            mr: 2,
                            bg: R.b.secondaryBG
                          }),
                          y.a.createElement(
                            C.E,
                            { fdirection: 'column', flex: 1 },
                            y.a.createElement(C.C, { inline: 1 }, t.name, ' '),
                            y.a.createElement(C.E, { wrap: !0 }, e.renderInnerText(t))
                          ),
                          y.a.createElement(C.e, { mt: 6 })
                        )
                      );
                    })
                  );
                }
              }
            ]),
            n
          );
        })(g.Component);
      b()(U, 'propTypes', {
        community: j.a.object,
        actions: j.a.object,
        auth: j.a.object,
        hashtags: j.a.bool,
        p: j.a.number
      });
      t.a = Object(v.c)(
        function(e) {
          return { routing: e.routing, community: e.community, auth: e.auth };
        },
        function(e) {
          return {
            actions: Object(_.bindActionCreators)(
              { joinCommunity: x.joinCommunity, setCommunity: O.setCommunity },
              e
            )
          };
        }
      )(U);
    },
    './src/modules/navigation/social.icons.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return b;
      });
      var o = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        r = n.n(o),
        i = n('../../node_modules/react/index.js'),
        a = n.n(i),
        c = n('../../node_modules/prop-types/index.js'),
        s = n.n(c),
        u = n('./src/modules/styled/uni.js'),
        l = n('./src/modules/navigation/ULink.component.js'),
        m = n('./public/img/twitter-black.png'),
        d = n('./public/img/email.png'),
        f = n('./public/img/slack.png'),
        p = [
          {
            href: 'https://blog.relevant.community',
            source: n('./public/img/medium.png'),
            target: '_blank'
          },
          {
            href: 'https://instagram.com/relevant_community',
            source: n('./public/img/instagram.png'),
            target: '_blank'
          },
          { href: 'https://twitter.com/relevantfeed', source: m, target: '_blank' },
          {
            href:
              'https://join.slack.com/t/relevantcommunity/shared_invite/enQtMjIwMjEwNzUzMjUzLWVjODViM2ZkZDE5ZWMyYzcxMzI3ZTQ3Njc4YTBmYmVmMTQxZGJiNDcxYzljODZlM2U0NGU1YTE3MDlhM2I1NmI',
            source: f,
            target: '_blank'
          },
          { href: 'mailto:info@relevant.community', source: d, target: '_blank' }
        ],
        h = function(e) {
          var t = e.href,
            n = e.source,
            o = e.target,
            r = e.actions;
          return n
            ? a.a.createElement(
                l.a,
                {
                  external: !0,
                  to: t,
                  onPress: function() {
                    return r.goToUrl(t);
                  },
                  target: o || '_self',
                  inline: 1
                },
                a.a.createElement(u.s, {
                  w: 2.8,
                  h: 2.4,
                  mr: 2,
                  resizeMode: 'contain',
                  source: n
                })
              )
            : null;
        };
      function b(e) {
        var t = e.actions;
        return a.a.createElement(
          u.E,
          { flex: 1, fdirection: 'row', mt: 2, mb: [2, 0] },
          p.map(function(e) {
            return a.a.createElement(h, r()({ actions: t, key: e.href }, e));
          })
        );
      }
      (h.propTypes = {
        href: s.a.string,
        source: s.a.oneOfType([s.a.number, s.a.string, s.a.object]),
        target: s.a.string,
        actions: s.a.object
      }),
        (b.propTypes = { actions: s.a.object });
    },
    './src/modules/styled/web.js': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return s;
      }),
        n.d(t, 'r', function() {
          return u;
        }),
        n.d(t, 'o', function() {
          return l;
        }),
        n.d(t, 'f', function() {
          return m;
        }),
        n.d(t, 'e', function() {
          return d;
        }),
        n.d(t, 'c', function() {
          return f;
        }),
        n.d(t, 'p', function() {
          return p;
        }),
        n.d(t, 'i', function() {
          return h;
        }),
        n.d(t, 'k', function() {
          return b;
        }),
        n.d(t, 'a', function() {
          return g;
        }),
        n.d(t, 'b', function() {
          return y;
        }),
        n.d(t, 'j', function() {
          return w;
        }),
        n.d(t, 'h', function() {
          return j;
        }),
        n.d(t, 'g', function() {
          return v;
        }),
        n.d(t, 'n', function() {
          return _;
        }),
        n.d(t, 'm', function() {
          return x;
        }),
        n.d(t, 'd', function() {
          return O;
        }),
        n.d(t, 'q', function() {
          return E;
        });
      var o = n('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        r = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        i = n('./src/styles/index.js'),
        a = n(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        c = n(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        s = Object(r.default)(o.b).withConfig({
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
        u = r.default.div.withConfig({
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
        l = r.default.span.withConfig({
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
        m = r.default.span.withConfig({
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
        d = r.default.img.withConfig({
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
        f =
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
          (Object(r.default)(l).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], i.c.header, i.f.color),
          Object(r.default)(l).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], i.c.title, i.f.color, i.f.font)),
        h = Object(r.default)(l).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], i.c.link, i.f.color, i.f.font),
        b = Object(r.default)(l).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], i.c.secondaryText, i.f.font, i.f.color),
        g =
          (Object(r.default)(l).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], i.c.altLink, i.f.color, i.f.font),
          Object(r.default)(l).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], i.c.commentText, i.f.color, i.f.font),
          Object(r.default)(l).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], i.c.bodyStyle, i.f.color, i.f.font)),
        y = r.default.button.withConfig({
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
        w = Object(r.default)(l).withConfig({
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
        j = r.default.input.withConfig({
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
        v = r.default.input.withConfig({
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
        _ = Object(r.default)(c.a).withConfig({
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
        x = Object(r.default)(a.a).withConfig({
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
        O = r.default.form.withConfig({
          displayName: 'web__Form',
          componentId: 'kfa5fa-20'
        })(['', ' ', ''], i.f.flex, i.f.margin),
        E = r.default.video.withConfig({
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
    },
    './src/modules/web_about/about.component.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        r = n.n(o),
        i = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = n.n(i),
        c = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        s = n.n(c),
        u = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        l = n.n(u),
        m = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        d = n.n(m),
        f = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        p = n.n(f),
        h = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        b = n.n(h),
        g = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        y = n.n(g),
        w = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        j = n.n(w),
        v = n('../../node_modules/react/index.js'),
        _ = n.n(v),
        x = n('../../node_modules/prop-types/index.js'),
        O = n.n(x),
        E = n('../../node_modules/redux/es/redux.js'),
        k = n('../../node_modules/react-redux/es/index.js'),
        C = n('./src/modules/styled/web.js'),
        R = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        I = n('./src/styles/index.js'),
        T = n('./src/utils/index.js'),
        U = n('./src/modules/navigation/navigation.actions.js'),
        S = n('./src/modules/navigation/ULink.component.js'),
        P = n('./src/modules/community/communityList.component.js'),
        N = n('./src/modules/navigation/social.icons.js'),
        D = n('./src/modules/community/community.actions.js'),
        M = n('./src/modules/post/post.actions.js'),
        L = n('./src/utils/post.js'),
        z = n('./src/utils/numbers.js');
      function A(e) {
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
            o = y()(e);
          if (t) {
            var r = y()(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return b()(this, n);
        };
      }
      var F = Object(R.default)(C.r).withConfig({
          displayName: 'postmarquee__MarqueeContainer',
          componentId: 'sc-16w7j93-0'
        })([
          'white-space:nowrap;width:100vw;overflow:hidden;z-index:10;position:fixed;top:0;'
        ]),
        B = [I.b.black, I.b.white],
        q = (function(e) {
          p()(n, e);
          var t = A(n);
          function n() {
            var e;
            s()(this, n);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
              r[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              j()(d()(e), 'x', []),
              j()(d()(e), 'rows', []),
              j()(d()(e), 'pause', function() {
                cancelAnimationFrame(e.lastFrame),
                  window.removeEventListener('focus', e.animate),
                  window.addEventListener('focus', e.animate);
              }),
              j()(d()(e), 'rowSpeed', function(e) {
                switch (e % 3) {
                  case 0:
                    return 0.6;
                  case 1:
                    return 0.85;
                  case 2:
                    return 0.75;
                  default:
                    return 0.6;
                }
              }),
              j()(d()(e), 'animate', function() {
                var t = new Date(),
                  n = e.lastTime ? (t - e.lastTime) / 10 : 0;
                (e.x = e.rows.map(function(t, o) {
                  var r = t.offsetWidth / 2,
                    i = (e.x[o] || o) - n * e.rowSpeed(o);
                  i <= -r && (i += r);
                  var a = Math.round(1e3 * i) / 1e3;
                  return (t.style.transform = 'translate3d('.concat(a, 'px, 0, 0)')), a;
                })),
                  (e.lastTime = t),
                  (e.lastFrame = requestAnimationFrame(e.animate));
              }),
              j()(d()(e), 'renderTicker', function(t, n) {
                var o = e.props,
                  r = o.posts,
                  i = o.rows,
                  a = o.communityState;
                return r.topPosts
                  .filter(function(e) {
                    return e.title;
                  })
                  .map(function(e, o) {
                    if (o % i !== t) return null;
                    var r = B[(t + 1) % 2],
                      c = a.communities[e.data.community];
                    if (!c) return null;
                    var s = c.currentShares / c.postCount,
                      u = e.data.pagerank - s,
                      l = Object(L.e)({ post: e, maxLength: 60 }).toUpperCase(),
                      m = Object(L.b)(e.metaPost.domain),
                      d = _.a.createElement(
                        _.a.Fragment,
                        null,
                        _.a.createElement(C.e, {
                          bg: I.b.white,
                          w: 2,
                          h: 2,
                          mr: 1,
                          src: m,
                          resizeMode: 'contain'
                        }),
                        _.a.createElement(C.o, { mr: 0.5, c: r }, l),
                        _.a.createElement(
                          C.o,
                          { mr: 0.5, c: u < 0 ? I.b.red : I.b.green },
                          u >= 0 ? '▲' : '▼'
                        ),
                        _.a.createElement(
                          C.o,
                          { c: r },
                          Object(z.abbreviateNumber)(u),
                          '%'
                        )
                      );
                    return _.a.createElement(
                      S.a,
                      {
                        m: '1 4',
                        key: ''.concat(e._id).concat(n),
                        to: Object(L.d)(e.data.community, e)
                      },
                      _.a.createElement(C.j, null, d)
                    );
                  });
              }),
              j()(d()(e), 'renderRow', function(t) {
                var n = B[t % 2],
                  o = e.renderTicker(t, 1),
                  r = e.renderTicker(t, 2);
                return _.a.createElement(
                  C.r,
                  { fdirection: 'row', flex: 1, bg: n, key: 'row'.concat(t) },
                  _.a.createElement(
                    C.o,
                    {
                      ref: function(n) {
                        return (e.rows[t] = n);
                      }
                    },
                    o,
                    r
                  )
                );
              }),
              e
            );
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.actions.getTopPosts(),
                    this.animate(),
                    window.addEventListener('blur', this.pause);
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  window.removeEventListener('blur', this.pause),
                    window.removeEventListener('focus', this.animate),
                    cancelAnimationFrame(this.lastFrame);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.rows,
                    t = Array.from(Array(e).keys());
                  return _.a.createElement(
                    F,
                    { fdirection: 'column' },
                    t.map(this.renderRow)
                  );
                }
              }
            ]),
            n
          );
        })(v.Component);
      j()(q, 'propTypes', {
        rows: O.a.number,
        actions: O.a.object,
        posts: O.a.object,
        communityState: O.a.object
      }),
        j()(q, 'defaultProps', { rows: 1 });
      var H = Object(k.c)(
          function(e) {
            return { posts: e.posts, communityState: e.community };
          },
          function(e) {
            return {
              actions: Object(E.bindActionCreators)({ getTopPosts: M.getTopPosts }, e)
            };
          }
        )(q),
        W = n('./src/modules/web_about/countUp/countUp.component.js'),
        J = n('./src/modules/web_about/countUp/countUp.coin.component.js'),
        V = n('./src/modules/web_about/appStoreButtons.js');
      function Y(e, t) {
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
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Y(Object(n), !0).forEach(function(t) {
                j()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Z(e) {
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
            o = y()(e);
          if (t) {
            var r = y()(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return b()(this, n);
        };
      }
      var K = Object(R.default)(C.a).withConfig({
          displayName: 'aboutcomponent__ImageLabel',
          componentId: 'u2ioqj-0'
        })(
          ['margin:', ' auto;text-align:center;padding:0 ', ';'],
          Object(I.i)(1),
          Object(I.i)(2)
        ),
        Q = Object(R.default)(C.q).withConfig({
          displayName: 'aboutcomponent__PhoneVideo',
          componentId: 'u2ioqj-1'
        })(['position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);']),
        X = Object(R.default)(C.r).withConfig({
          displayName: 'aboutcomponent__Phone',
          componentId: 'u2ioqj-2'
        })(
          [
            'position:',
            ';bottom:',
            ';right:',
            ';opacity:',
            ';transform:rotate(-2.82deg);'
          ],
          function() {
            return Object(I.g)(['relative', 'absolute']);
          },
          function() {
            return Object(I.g)(['auto', 0]);
          },
          function() {
            return Object(I.g)(['auto', '-20vw']);
          },
          function() {
            return Object(I.g)([1, 0.5]);
          }
        ),
        $ = Object(R.default)(C.r).withConfig({
          displayName: 'aboutcomponent__Join',
          componentId: 'u2ioqj-3'
        })(
          [
            'position:fixed;left:50%;transform:translate3d(-50%,',
            ',0);transition:transform 0.3s ease-in;bottom:',
            ';z-index:1000;'
          ],
          function(e) {
            return e.visible ? '0px' : '200px';
          },
          Object(I.i)(4)
        ),
        ee = Object(R.default)(C.r).withConfig({
          displayName: 'aboutcomponent__Social',
          componentId: 'u2ioqj-4'
        })(
          [
            'top:',
            ';right:',
            ";align-self:'center';position:",
            ';justify-content:center;'
          ],
          function() {
            return Object(I.h)([4, 'auto']);
          },
          function() {
            return Object(I.h)([1, 'auto']);
          },
          function() {
            return Object(I.g)(['fixed', 'relative']);
          }
        ),
        te = Object(R.default)(C.r).withConfig({
          displayName: 'aboutcomponent__FixedLogo',
          componentId: 'u2ioqj-5'
        })(
          [
            'position:fixed;left:',
            ';top:',
            ';opacity:',
            ';transition:opacity 0.1s linear;'
          ],
          Object(I.i)(2),
          Object(I.i)(4),
          function(e) {
            return e.visible ? 1 : 0;
          }
        ),
        ne = Object(R.default)(C.r).withConfig({
          displayName: 'aboutcomponent__Section',
          componentId: 'u2ioqj-6'
        })(
          [
            'flex:1;flex-direction:column;justify-content:center;margin-left:auto;margin-right:auto;padding:',
            ';padding-left:',
            ';padding-right:',
            ';max-width:',
            ';'
          ],
          Object(I.i)(6),
          Object(I.i)(2),
          Object(I.i)(2),
          Object(I.i)(75)
        ),
        oe = Object(R.default)(C.o).withConfig({
          displayName: 'aboutcomponent__SplashText',
          componentId: 'u2ioqj-7'
        })(
          [
            'font-family:',
            ';color:',
            ';font-size:',
            ';line-height:',
            ';margin-top:',
            ' 0;'
          ],
          I.c.HELVETICA_NEUE,
          I.b.black,
          function() {
            return Object(I.h)([4.5, 3]);
          },
          function() {
            return Object(I.h)([6, 4.8]);
          },
          function() {
            return Object(I.h)(2);
          }
        ),
        re = Object(R.default)(C.o).withConfig({
          displayName: 'aboutcomponent__SectionText',
          componentId: 'u2ioqj-8'
        })(
          ['font-family:', ';flex-direction:column;font-size:', ';line-height:', ';'],
          I.c.HELVETICA_NEUE,
          function() {
            return Object(I.h)([2.5, 2]);
          },
          function() {
            return Object(I.h)([3, 2.5]);
          }
        ),
        ie = (function(e) {
          p()(n, e);
          var t = Z(n);
          function n() {
            var e;
            s()(this, n);
            for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++)
              i[c] = arguments[c];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              j()(d()(e), 'state', { showJoinButton: !1 }),
              j()(d()(e), 'onScroll', function() {
                var t =
                  document.body.scrollHeight - window.innerHeight - window.scrollY < 250;
                e.state.showJoinButton !== t && e.setState({ showJoinButton: t });
                var n = window.scrollY > 500;
                e.state.showFixedLogo !== n && e.setState({ showFixedLogo: n });
              }),
              j()(
                d()(e),
                'signUp',
                (function() {
                  var t = a()(
                    r.a.mark(function t(n) {
                      var o, i;
                      return r.a.wrap(function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (o = e.props),
                                (i = o.actions),
                                o.history.push('/communities'),
                                i.showModal(n);
                            case 3:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function(e) {
                    return t.apply(this, arguments);
                  };
                })()
              ),
              e
            );
          }
          return (
            l()(
              n,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this.props,
                      t = e.communities,
                      n = e.actions;
                    window.addEventListener('scroll', this.onScroll),
                      T.h.start(),
                      t.length || n.getCommunities();
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    window.removeEventListener('scroll', this.onScroll), T.h.stop();
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props.screenSize,
                      n = this.state,
                      o = n.showFixedLogo,
                      r = n.showJoinButton,
                      i = t ? 4 : 16;
                    return _.a.createElement(
                      C.r,
                      {
                        bg: I.b.white,
                        flex: 1,
                        fdirection: 'column',
                        style: { overflow: 'hidden' }
                      },
                      _.a.createElement(H, null),
                      _.a.createElement(
                        ne,
                        { minheight: '100vh' },
                        _.a.createElement(
                          S.a,
                          { to: '/relevant/top' },
                          _.a.createElement(C.e, {
                            mt: [0, 6],
                            h: [8, 7, 6],
                            mb: [6, 4],
                            mr: 'auto',
                            ml: [0, 'auto'],
                            src: '/img//logo.png',
                            alt: 'Relevant'
                          })
                        ),
                        _.a.createElement(
                          oe,
                          null,
                          'Tired of the social media',
                          _.a.createElement('br', null),
                          'popularity game?'
                        ),
                        _.a.createElement(
                          oe,
                          { inline: 1, mt: 6 },
                          'Join a ',
                          _.a.createElement(
                            S.a,
                            { to: '/communities' },
                            'Relevant Community'
                          ),
                          ' and get rewarded for your expertise.'
                        ),
                        _.a.createElement(
                          C.r,
                          { mt: 6, fdirection: ['row', 'column'], align: 'center' },
                          _.a.createElement(
                            C.b,
                            {
                              h: 8,
                              p: '2 6',
                              mr: [3, 0],
                              onClick: function() {
                                return e.signUp('signupSocial');
                              },
                              alignself: ['flex-start', 'stretch']
                            },
                            _.a.createElement(re, null, 'Join Relevant')
                          ),
                          _.a.createElement(
                            re,
                            { mt: [0, 2], inline: 1 },
                            'or',
                            ' ',
                            _.a.createElement(
                              C.o,
                              {
                                style: { textDecoration: 'underline' },
                                inline: 1,
                                onClick: function() {
                                  return e.signUp('login');
                                },
                                c: I.b.blue
                              },
                              'Log In'
                            )
                          )
                        )
                      ),
                      _.a.createElement(
                        ne,
                        { mt: i },
                        _.a.createElement(
                          oe,
                          null,
                          "Most social networks make it easy to find popular content, but they don't help us determine what’s important, or who we can trust."
                        )
                      ),
                      _.a.createElement(W.a, {
                        high: ['clickbait', 'cat videos'],
                        highScore: [700, 1e3],
                        low: ['climate change study', 'a nuanced opinion'],
                        lowScore: [10, 30],
                        type: 'thumb',
                        color: I.b.lightGrey
                      }),
                      _.a.createElement(
                        K,
                        null,
                        'Web 2.0 metrics measure value according to engagement.'
                      ),
                      _.a.createElement(
                        ne,
                        { mt: i },
                        _.a.createElement(
                          oe,
                          null,
                          'That’s why we created Relevant, a manipulation-resistant social network that filters content according to quality, not clicks.'
                        )
                      ),
                      _.a.createElement(W.a, {
                        high: ['climate change study', 'a nuanced opinion'],
                        highScore: [300, 500],
                        low: ['clickbait', 'cat videos'],
                        lowScore: [-40, -10],
                        type: 'relevant',
                        color: I.b.blue
                      }),
                      _.a.createElement(
                        K,
                        null,
                        'Votes from users with high Reputation count for more'
                      ),
                      _.a.createElement(
                        ne,
                        { mt: 2 },
                        _.a.createElement(
                          oe,
                          null,
                          'The Relevant Reputation System puts curation power in the hands of trusted community members instead of passive consumers.'
                        )
                      ),
                      _.a.createElement(
                        ne,
                        { mt: i },
                        _.a.createElement(
                          oe,
                          null,
                          'Relevant rewards users for curating content.'
                        )
                      ),
                      _.a.createElement(J.a, {
                        high: ['climate change study', 'a nuanced opinion'],
                        low: ['clickbait', 'cat videos'],
                        type: 'coin',
                        color: I.b.gold
                      }),
                      _.a.createElement(
                        K,
                        null,
                        'Users earn coins for betting on quality content.'
                      ),
                      _.a.createElement(
                        ne,
                        null,
                        _.a.createElement(
                          oe,
                          null,
                          'Users can earn coins by betting on the relevance of content. Bets don’t impact content rankings but provide a way to reward users for their expertise.'
                        )
                      ),
                      _.a.createElement(
                        ne,
                        { mt: i },
                        _.a.createElement(
                          oe,
                          null,
                          'Each Relevant Community has its own unique Reputation System. Communities decide what kind of information is valuable to them and how that value is measured.'
                        ),
                        _.a.createElement(
                          oe,
                          null,
                          'Here are a few communities you can join right now:'
                        ),
                        _.a.createElement(C.r, { mt: 6 }),
                        _.a.createElement(P.a, { p: 0, hashtags: !0 })
                      ),
                      _.a.createElement(
                        C.r,
                        {
                          margin: 'auto',
                          flex: [1, null],
                          mt: i,
                          fdirection: ['row', 'column'],
                          justify: ['center', 'center'],
                          align: 'center',
                          h: ['auto', '100vh'],
                          mb: [0, 0]
                        },
                        _.a.createElement(
                          C.r,
                          {
                            fdirection: 'column',
                            align: ['flex-start', 'center'],
                            justify: 'center',
                            style: { zIndex: 1 },
                            flex: [0, 1]
                          },
                          _.a.createElement(
                            C.r,
                            { align: 'center' },
                            _.a.createElement(C.e, {
                              h: [8, 0],
                              src: '/img/logo.png',
                              alt: 'Relevant',
                              zIndex: 1,
                              mt: 'auto'
                            })
                          ),
                          _.a.createElement(V.a, { mt: [8, 4], mb: [0, 1] }),
                          _.a.createElement(ee, null, _.a.createElement(N.a, null))
                        ),
                        _.a.createElement(
                          X,
                          { ml: 3, justify: 'center', align: 'center' },
                          _.a.createElement(
                            Q,
                            {
                              w: [42.5, 'auto'],
                              h: [92.09932279909705, ''.concat(85, 'vh')],
                              autoPlay: !0,
                              loop: !0,
                              muted: !0,
                              playsInline: !0
                            },
                            _.a.createElement('source', {
                              src: '/img/vid.webm',
                              type: 'video/webm'
                            }),
                            _.a.createElement('source', {
                              src: '/img/vid.mp4',
                              type: 'video/mp4'
                            })
                          ),
                          _.a.createElement(C.e, {
                            w: [50, 'auto'],
                            h: ['auto', '100vh'],
                            src: '/img/phone-blank.png',
                            alt: 'Relevant Phone'
                          })
                        )
                      ),
                      _.a.createElement(
                        te,
                        { mt: [2, 1], visible: o && !t },
                        _.a.createElement(
                          S.a,
                          { to: '/relevant/top' },
                          _.a.createElement(C.e, {
                            h: [6, 4, 3],
                            src: '/img/r-big.png',
                            alt: 'Relevant'
                          })
                        )
                      ),
                      _.a.createElement(
                        $,
                        { w: ['auto', '100%'], mb: [0, 0], p: [0, '0 2'], visible: r },
                        _.a.createElement(
                          C.b,
                          {
                            flex: 1,
                            h: 8,
                            p: '2 6',
                            onClick: function() {
                              return e.signUp('signupSocial');
                            }
                          },
                          _.a.createElement(re, null, 'Join Relevant')
                        )
                      )
                    );
                  }
                }
              ],
              [
                {
                  key: 'fetchData',
                  value: function(e) {
                    return e(Object(D.getCommunities)());
                  }
                }
              ]
            ),
            n
          );
        })(v.Component);
      j()(ie, 'propTypes', {
        history: O.a.object,
        actions: O.a.object,
        communities: O.a.object,
        screenSize: O.a.number
      });
      t.default = Object(k.c)(
        function(e) {
          return {
            screenSize: e.navigation.screenSize,
            communities: e.community.communities
          };
        },
        function(e) {
          return {
            actions: Object(E.bindActionCreators)(
              G(G({}, U), {}, { getCommunities: D.getCommunities }),
              e
            )
          };
        }
      )(ie);
    },
    './src/modules/web_about/appStoreButtons.js': function(e, t, n) {
      'use strict';
      var o = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        r = n.n(o),
        i = n('../../node_modules/react/index.js'),
        a = n.n(i),
        c = n('./src/modules/styled/web.js');
      t.a = function(e) {
        return a.a.createElement(
          c.r,
          r()({}, e, { mt: [8, 4], mb: [0, 1] }),
          a.a.createElement(
            'a',
            {
              href:
                'https://itunes.apple.com/us/app/relevant-communities/id1173025051?mt=8',
              target: '_blank'
            },
            a.a.createElement(c.e, { h: [6, 6, 5], mr: [2, 1], src: '/img/appstore.png' })
          ),
          a.a.createElement(
            'a',
            {
              href:
                'https://play.google.com/store/apps/details?id=com.relevantnative&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
              target: '_blank'
            },
            a.a.createElement(c.e, { h: [6, 6, 5], src: '/img/googleplaystore.png' })
          )
        );
      };
    },
    './src/modules/web_about/countUp/countUp.animatedEl.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return S;
      });
      var o = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        r = n.n(o),
        i = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        a = n.n(i),
        c = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        s = n.n(c),
        u = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        l = n.n(u),
        m = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        d = n.n(m),
        f = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        p = n.n(f),
        h = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        b = n.n(h),
        g = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        y = n.n(g),
        w = n('../../node_modules/react/index.js'),
        j = n.n(w),
        v = n('../../node_modules/prop-types/index.js'),
        _ = n.n(v),
        x = n('./src/modules/styled/web.js'),
        O = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        E = n('./src/styles/index.js'),
        k = n('./src/utils/index.js'),
        C = n('./src/modules/web_about/countUp/countUp.images.js');
      function R(e) {
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
            o = b()(e);
          if (t) {
            var r = b()(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return p()(this, n);
        };
      }
      var I = function(e) {
          return Math.random() * e;
        },
        T = function(e) {
          return Math.floor(Math.random() * e);
        },
        U = Object(O.default)(x.r).withConfig({
          displayName: 'countUpanimatedEl__CountUpMarqueeContainer',
          componentId: 'sc-6gwii-0'
        })(['flex:1;overflow:hidden;max-width:', ';'], Object(E.i)(30)),
        S = (function(e) {
          d()(n, e);
          var t = R(n);
          function n() {
            var e;
            a()(this, n);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
              r[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(l()(e), 'state', { index: 0 }),
              y()(l()(e), 'container', j.a.createRef()),
              y()(l()(e), 'index', 0),
              y()(l()(e), 'thumbs', Array.from({ length: 20 }, j.a.createRef)),
              y()(
                l()(e),
                'arrowTypes',
                Array.from({ length: 20 }, function() {
                  return { up: Math.random() > 0.5, big: Math.random() > 0.2 };
                })
              ),
              y()(l()(e), 'pause', function() {
                clearTimeout(e.timeout),
                  window.removeEventListener('focus', e.animate),
                  window.addEventListener('focus', e.animate);
              }),
              y()(l()(e), 'animate', function(t) {
                var n = t.index,
                  o = void 0 === n ? 0 : n,
                  r = e.props,
                  i = r.active,
                  a = r.firingRate;
                i
                  ? ((e.timeout = setTimeout(function() {
                      return e.animate({ index: o + 1 });
                    }, a)),
                    e.add(o),
                    e.setState({ index: o }))
                  : (e.timeout = setTimeout(function() {
                      return e.animate({ index: o });
                    }, 100));
              }),
              y()(l()(e), 'add', function(t) {
                var n,
                  o = e.props,
                  r = o.parallax,
                  i = o.speed,
                  a = o.mode,
                  c = o.type,
                  s = o.onFinished,
                  u = e.container.current.offsetWidth,
                  l = e.container.current.offsetHeight,
                  m = u * i,
                  d = 1,
                  f = t % e.thumbs.length,
                  p = e.thumbs[f],
                  h = p.current.offsetHeight;
                e.arrowTypes[f] = {};
                var b,
                  g = e.arrowTypes[f],
                  y = 0;
                switch (c) {
                  case 'relevant':
                    a
                      ? ((g.big = Math.random() < 0.7),
                        (g.up = g.big ? Math.random() < 0.9 : Math.random() < 0.2))
                      : ((g.big = Math.random() < 0.3),
                        (g.up = g.big ? Math.random() < 0.1 : Math.random() < 0.8)),
                      (d = g.big ? T(10) + 10 : 1),
                      g.up || (d *= -1),
                      (h = g.big ? 70 : 25),
                      (y = I(20)),
                      (n = T(l - h)),
                      (b = g.up ? 0 : l - h);
                    break;
                  case 'thumb':
                    (b = (l - h) / 2), (n = T(l - h));
                    break;
                  default:
                    b = n = (l - h) / 2;
                }
                if (p && p.current && n) {
                  var w = function() {
                    return k.h.add({
                      from: { x: -u + y, y: n },
                      to: { x: 0, y: b },
                      duration: m + I(r),
                      easing: k.h.easing.circ_in,
                      update: function(e) {
                        var t = e.x,
                          o = e.y;
                        p.current.style.transform = 'translate3D('
                          .concat(t.toFixed(1), 'px, ')
                          .concat(o || n, 'px, 0)');
                      },
                      finished: function() {
                        (p.current.style.transform = 'translate3D('.concat(
                          50,
                          'px, ',
                          n,
                          'px, 0)'
                        )),
                          s && s(d);
                      }
                    });
                  };
                  k.h.add({
                    from: { scale: 0 },
                    to: { scale: 1 },
                    duration: 200,
                    update: function(e) {
                      var t = e.scale;
                      p.current.style.transform = 'translate3D('
                        .concat(-u + y, 'px, ')
                        .concat(n, 'px, 0) scale(')
                        .concat(t, ') ');
                    },
                    easing: k.h.easing.cubic_bezier(0.83, 0.42, 0, 1.24),
                    finished: function() {
                      return w();
                    }
                  });
                }
              }),
              e
            );
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.animate(0),
                    this.thumbs.forEach(function(e) {
                      e.current.style.transform =
                        'translate3D(' + [10, 0, 0].join('px,') + 'px)';
                    }),
                    this.props.onMeasure(
                      this.container.current.offsetWidth,
                      this.container.current.offsetHeight
                    ),
                    window.addEventListener('blur', this.pause);
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  window.removeEventListener('blur', this.pause),
                    window.removeEventListener('focus', this.animate),
                    clearTimeout(this.timeout);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this,
                    n = this.props,
                    o = n.type,
                    i = n.height;
                  switch (o) {
                    case 'thumb':
                      e = this.thumbs.map(function(e, t) {
                        return j.a.createElement(C.f, { ref: e, key: t });
                      });
                      break;
                    case 'coin':
                      e = this.thumbs.map(function(e, t) {
                        return j.a.createElement(C.e, { ref: e, key: t });
                      });
                      break;
                    default:
                      e = this.thumbs.map(function(e, n) {
                        return j.a.createElement(
                          C.a,
                          r()({ ref: e, key: n }, t.arrowTypes[n])
                        );
                      });
                  }
                  return j.a.createElement(U, { h: i, ref: this.container }, e);
                }
              }
            ]),
            n
          );
        })(w.PureComponent);
      y()(S, 'propTypes', {
        type: _.a.string,
        active: _.a.bool,
        firingRate: _.a.number,
        parallax: _.a.number,
        speed: _.a.number,
        onMeasure: _.a.func,
        onFinished: _.a.func,
        score: _.a.number,
        mode: _.a.bool,
        height: _.a.number
      });
    },
    './src/modules/web_about/countUp/countUp.box.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return C;
      });
      var o = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        r = n.n(o),
        i = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        a = n.n(i),
        c = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        s = n.n(c),
        u = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        l = n.n(u),
        m = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        d = n.n(m),
        f = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        p = n.n(f),
        h = n('../../node_modules/react/index.js'),
        b = n.n(h),
        g = n('../../node_modules/prop-types/index.js'),
        y = n.n(g),
        w = n('./src/modules/styled/web.js'),
        j = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        v = n('./src/styles/index.js'),
        _ = n('./src/utils/index.js');
      function x(e) {
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
            o = d()(e);
          if (t) {
            var r = d()(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return l()(this, n);
        };
      }
      var O = Object(j.default)(w.r).withConfig({
          displayName: 'countUpbox__CountUpBoxContainer',
          componentId: 'sc-19uyszk-0'
        })(
          [
            'justify-content:flex-start;flex-direction:row;align-items:center;transition:background-color 0.5s ease;',
            ';'
          ],
          function(e) {
            return e.c ? 'color: '.concat(e.c, ';') : '';
          }
        ),
        E = Object(j.default)(w.r).withConfig({
          displayName: 'countUpbox__CountUpBoxShadow',
          componentId: 'sc-19uyszk-1'
        })(['position:absolute;top:0;box-shadow:-4px 0px 5px -1px #dddddd;z-index:-1;']),
        k = Object(j.default)(w.o).withConfig({
          displayName: 'countUpbox__Headline',
          componentId: 'sc-19uyszk-2'
        })(
          ['text-transform:uppercase;font-size:', ';line-height:', ';', ''],
          function() {
            return Object(v.h)([5, 3]);
          },
          function() {
            return Object(v.h)([5, 3]);
          },
          function(e) {
            return e.hide ? 'visibility: hidden;' : '';
          }
        ),
        C = (function(e) {
          s()(n, e);
          var t = x(n);
          function n() {
            return r()(this, n), t.apply(this, arguments);
          }
          return (
            a()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.animate();
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  e.headline !== this.props.headline && this.animate();
                }
              },
              {
                key: 'animate',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.headline,
                    o = t.onHeadlineFinished,
                    r = n.length,
                    i = 0;
                  _.h.remove(this.t),
                    (this.t = _.h.add({
                      duration: 500,
                      easing: _.h.easing.circOut,
                      update: function(t, o) {
                        var a = Math.round(o * r);
                        i !== a &&
                          ((i = a),
                          (e.label.innerHTML = n.substr(0, a)),
                          (e.labelRest.innerHTML = n.substr(a, n.length - 1)));
                      },
                      finished: function() {
                        o && o();
                      }
                    }));
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.type,
                    o = t.color,
                    r = t.children,
                    i = t.height,
                    a = [Object(v.i)(75), '65%'];
                  return b.a.createElement(
                    O,
                    { h: i, w: a, bg: o, c: 'relevant' === n ? 'white' : 'black', pr: 1 },
                    r,
                    b.a.createElement(
                      w.f,
                      null,
                      b.a.createElement(k, {
                        inline: 1,
                        ref: function(t) {
                          return (e.label = t);
                        }
                      }),
                      b.a.createElement(k, {
                        inline: 1,
                        hide: !0,
                        ref: function(t) {
                          return (e.labelRest = t);
                        }
                      })
                    ),
                    b.a.createElement(E, { h: i, w: a })
                  );
                }
              }
            ]),
            n
          );
        })(h.PureComponent);
      p()(C, 'propTypes', {
        height: y.a.number,
        type: y.a.string,
        headline: y.a.string,
        color: y.a.string,
        onHeadlineFinished: y.a.func,
        children: y.a.oneOfType([y.a.array, y.a.object])
      });
    },
    './src/modules/web_about/countUp/countUp.coin.component.js': function(e, t, n) {
      'use strict';
      (function(e) {
        n.d(t, 'a', function() {
          return F;
        });
        var o = n('../../node_modules/@babel/runtime/helpers/extends.js'),
          r = n.n(o),
          i = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
          a = n.n(i),
          c = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
          s = n.n(c),
          u = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
          l = n.n(u),
          m = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
          d = n.n(m),
          f = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
          p = n.n(f),
          h = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
          b = n.n(h),
          g = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
          y = n.n(g),
          w = n('../../node_modules/react/index.js'),
          j = n.n(w),
          v = n('../../node_modules/prop-types/index.js'),
          _ = n.n(v),
          x = n('./src/utils/index.js'),
          O = n(
            '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
          ),
          E = n('./src/modules/styled/web.js'),
          k = n('./src/styles/index.js'),
          C = n('./src/modules/web_about/countUp/countUp.styles.js'),
          R = n('./src/modules/web_about/countUp/countUp.box.js'),
          I = n('./src/modules/web_about/countUp/countUp.animatedEl.js'),
          T = n('./src/modules/web_about/countUp/countUp.images.js');
        function U(e, t) {
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
        function S(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? U(Object(n), !0).forEach(function(t) {
                  y()(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : U(Object(n)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        function P(e) {
          var t = (function() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function() {
            var n,
              o = b()(e);
            if (t) {
              var r = b()(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return p()(this, n);
          };
        }
        var N = function(e) {
            return Math.floor(Math.random() * (e[1] - e[0]) + e[0]);
          },
          D = { active: !0, firingRate: 2e3, parallax: 1, speed: 4.5 },
          M = { active: !1, firingRate: 0, parallax: 0, speed: 0 },
          L = Object(O.default)(E.o).withConfig({
            displayName: 'countUpcoincomponent__BetResult',
            componentId: 'sc-6mb0bd-0'
          })(
            [
              'position:absolute;width:',
              ';height:',
              ';background-size:contain;display:flex;justify-content:center;align-items:center;text-align:center;z-index:1;opacity:1;'
            ],
            function() {
              return Object(k.h)([25, 20]);
            },
            function() {
              return Object(k.h)([25, 20]);
            }
          ),
          z = Object(O.default)(L).withConfig({
            displayName: 'countUpcoincomponent__BetWin',
            componentId: 'sc-6mb0bd-1'
          })(
            [
              'top:',
              ';right:',
              ';background-image:url(/img/betWin.png);transform:rotate(0deg) scale(0);',
              ''
            ],
            function() {
              return Object(k.h)([-7.5, -8]);
            },
            function() {
              return Object(k.h)([-12, -3]);
            },
            function(e) {
              return e.show
                ? '\n    transition: all .3s cubic-bezier(.83,.42,0,1.24);\n    transform:  rotate(23deg) scale(1);\n    '
                : '';
            }
          ),
          A = Object(O.default)(L).withConfig({
            displayName: 'countUpcoincomponent__BetLoose',
            componentId: 'sc-6mb0bd-2'
          })(
            [
              'bottom:-60px;right:-20px;background-image:url(/img/betLoose.png);transform:rotate(0deg) scale(0);',
              ''
            ],
            function(e) {
              return e.show
                ? '\n    transition: all .5s cubic-bezier(.83,.42,0,1.24);\n    transform: rotate(-15deg) scale(1);\n    '
                : '';
            }
          ),
          F = (function(t) {
            d()(o, t);
            var n = P(o);
            function o() {
              var t;
              a()(this, o);
              for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
                i[c] = arguments[c];
              return (
                (t = n.call.apply(n, [this].concat(i))),
                y()(l()(t), 'state', {
                  mode: !1,
                  animationState: 0,
                  headline: '',
                  score: 0,
                  highIndex: -1,
                  lowIndex: -1,
                  marquee: S({}, M),
                  thumbTiming: { delay: 10, duration: 3e3 },
                  width: e.window ? window.innerWidth / 3 : 0,
                  height: 212,
                  postRank: 0
                }),
                y()(l()(t), 'pause', function() {
                  clearTimeout(t.timeout),
                    window.removeEventListener('focus', t.advance),
                    window.addEventListener('focus', t.advance);
                }),
                y()(l()(t), 'advance', function() {
                  var e,
                    n = t.props,
                    o = n.high,
                    r = n.low,
                    i = t.state,
                    a = i.mode,
                    c = i.highIndex,
                    s = i.lowIndex,
                    u = i.postRank;
                  (a = !a)
                    ? ((e = o[(c += 1) % o.length]), (u = N([50, 100])))
                    : ((e = r[(s += 1) % r.length]), (u = N([-100, -50]))),
                    t.setState({
                      mode: a,
                      headline: e,
                      highIndex: c,
                      lowIndex: s,
                      animationState: 0,
                      postRank: u
                    });
                }),
                y()(l()(t), 'handleMeasurement', function(e, n) {
                  t.setState({ width: e, height: n }, function() {
                    return t.advance();
                  });
                }),
                y()(l()(t), 'handleHeadlineFinished', function() {
                  0 === t.state.animationState &&
                    (clearTimeout(t.timeout),
                    t.setState({ marquee: D, score: t.state.score + 1 }));
                }),
                y()(l()(t), 'handleCoinFinished', function() {
                  t.setState({ marquee: M });
                }),
                y()(l()(t), 'handleTimerFinished', function() {
                  t.setState({ animationState: 1 }),
                    (t.timeout = setTimeout(function() {
                      t.advance();
                    }, 3e3));
                }),
                t
              );
            }
            return (
              s()(o, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    window.addEventListener('blur', this.pause);
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    window.removeEventListener('blur', this.pause),
                      window.removeEventListener('focus', this.advance),
                      clearTimeout(this.timeout),
                      x.h.reset();
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.color,
                      t = this.state,
                      n = t.mode,
                      o = t.headline,
                      i = t.score,
                      a = t.marquee,
                      c = t.thumbTiming,
                      s = t.animationState,
                      u = t.postRank,
                      l = 1 === s && (n ? 'win' : 'loose');
                    return j.a.createElement(
                      C.a,
                      null,
                      j.a.createElement(
                        I.a,
                        r()(
                          {
                            height: 26,
                            type: 'coin',
                            score: i,
                            onMeasure: this.handleMeasurement,
                            onFinished: this.handleCoinFinished
                          },
                          a
                        )
                      ),
                      j.a.createElement(
                        R.a,
                        {
                          height: 26,
                          type: 'coin',
                          color: e,
                          headline: o,
                          onHeadlineFinished: this.handleHeadlineFinished
                        },
                        j.a.createElement(
                          T.b,
                          r()({ showRank: 1 === s, score: i, postRank: u }, c, {
                            onTimerFinished: this.handleTimerFinished
                          })
                        ),
                        j.a.createElement(
                          z,
                          { show: 'win' === l },
                          j.a.createElement(
                            E.a,
                            { p: 4, fs: [3, 2.5], lh: [4, 3] },
                            'YOU WIN!'
                          )
                        ),
                        j.a.createElement(
                          A,
                          { show: 'loose' === l },
                          j.a.createElement(
                            E.a,
                            { p: 7, fs: [3, 2.5], lh: [4, 3] },
                            'NOT A GREAT BET :('
                          )
                        )
                      ),
                      j.a.createElement(C.b, { flex: [1, null], w: ['auto', 2] })
                    );
                  }
                }
              ]),
              o
            );
          })(w.Component);
        y()(F, 'propTypes', { high: _.a.array, low: _.a.array, color: _.a.string });
      }.call(this, n('../../node_modules/webpack/buildin/global.js')));
    },
    './src/modules/web_about/countUp/countUp.component.js': function(e, t, n) {
      'use strict';
      (function(e) {
        n.d(t, 'a', function() {
          return S;
        });
        var o = n('../../node_modules/@babel/runtime/helpers/extends.js'),
          r = n.n(o),
          i = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
          a = n.n(i),
          c = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
          s = n.n(c),
          u = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
          l = n.n(u),
          m = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
          d = n.n(m),
          f = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
          p = n.n(f),
          h = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
          b = n.n(h),
          g = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
          y = n.n(g),
          w = n('../../node_modules/react/index.js'),
          j = n.n(w),
          v = n('../../node_modules/prop-types/index.js'),
          _ = n.n(v),
          x = n('./src/utils/index.js'),
          O = n('./src/modules/web_about/countUp/countUp.styles.js'),
          E = n('./src/modules/web_about/countUp/countUp.box.js'),
          k = n('./src/modules/web_about/countUp/countUp.animatedEl.js'),
          C = n('./src/modules/web_about/countUp/countUp.images.js');
        function R(e, t) {
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
        function I(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? R(Object(n), !0).forEach(function(t) {
                  y()(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : R(Object(n)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        function T(e) {
          var t = (function() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function() {
            var n,
              o = b()(e);
            if (t) {
              var r = b()(this).constructor;
              n = Reflect.construct(o, arguments, r);
            } else n = o.apply(this, arguments);
            return p()(this, n);
          };
        }
        var U = {
            good: {
              relevant: { active: !0, firingRate: 100, parallax: 1.3, speed: 5 },
              thumb: { active: !0, firingRate: 340, parallax: 1.1, speed: 3.69 }
            },
            bad: {
              relevant: { active: !0, firingRate: 300, parallax: 1.3, speed: 5 },
              thumb: { active: !0, firingRate: 20, parallax: 1.3, speed: 0.8 }
            },
            off: { active: !1, firingRate: 0, parallax: 0, speed: 0 }
          },
          S = (function(t) {
            d()(o, t);
            var n = T(o);
            function o() {
              var t;
              a()(this, o);
              for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
                i[c] = arguments[c];
              return (
                (t = n.call.apply(n, [this].concat(i))),
                y()(l()(t), 'state', {
                  mode: !1,
                  headline: '',
                  score: 0,
                  highIndex: -1,
                  lowIndex: -1,
                  marquee: U.off,
                  thumbTiming: { delay: 0, duration: 2800 },
                  width: e.window ? window.innerWidth / 3 : 0
                }),
                y()(l()(t), 'pause', function() {
                  clearTimeout(t.timeout),
                    window.removeEventListener('focus', t.advance),
                    window.addEventListener('focus', t.advance);
                }),
                y()(l()(t), 'advance', function() {
                  var e,
                    n,
                    o,
                    r = t.props,
                    i = r.high,
                    a = r.low,
                    c = r.type,
                    s = t.state,
                    u = s.mode,
                    l = s.highIndex,
                    m = s.lowIndex;
                  (u = !u)
                    ? ((e = i[(l += 1) % i.length]), (o = 100), (n = I({}, U.bad[c])))
                    : ((e = a[(m += 1) % a.length]), (o = -100), (n = I({}, U.good[c])));
                  t.setState({
                    mode: u,
                    headline: e,
                    score: o,
                    currentScore: 0,
                    highIndex: l,
                    lowIndex: m,
                    marquee: n,
                    thumbTiming: { delay: n.speed * t.state.width, duration: 1950 }
                  }),
                    (t.timeout = setTimeout(function() {
                      (n.active = !1),
                        t.setState({ marquee: U.off }),
                        (t.timeout = setTimeout(function() {
                          t.advance();
                        }, 2e3));
                    }, 2e3));
                }),
                t
              );
            }
            return (
              s()(o, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    window.addEventListener('blur', this.pause);
                  }
                },
                {
                  key: 'handleMeasurement',
                  value: function(e) {
                    var t = this;
                    this.setState({ width: e }, function() {
                      return t.advance();
                    });
                  }
                },
                {
                  key: 'handleFinished',
                  value: function(e) {
                    this.setState({ currentScore: this.state.currentScore + e });
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    x.h.reset(),
                      clearTimeout(this.timeout),
                      window.removeEventListener('blur', this.pause),
                      window.removeEventListener('focus', this.advance);
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.color,
                      n = e.type,
                      o = this.state,
                      i = o.headline,
                      a = o.mode,
                      c = o.currentScore,
                      s = o.marquee,
                      u = o.thumbTiming;
                    return j.a.createElement(
                      O.a,
                      null,
                      j.a.createElement(
                        k.a,
                        r()(
                          {
                            height: 26,
                            type: n,
                            mode: a,
                            onMeasure: this.handleMeasurement.bind(this),
                            onFinished: this.handleFinished.bind(this)
                          },
                          s
                        )
                      ),
                      j.a.createElement(
                        E.a,
                        {
                          height: 26,
                          type: n,
                          color: t,
                          score: c,
                          headline: i,
                          thumbTiming: u
                        },
                        'thumb' === n
                          ? j.a.createElement(C.d, r()({ score: c }, u))
                          : j.a.createElement(C.c, r()({ score: c }, u))
                      ),
                      j.a.createElement(O.b, { flex: [1, null], w: ['auto', 2] })
                    );
                  }
                }
              ]),
              o
            );
          })(w.Component);
        y()(S, 'propTypes', {
          high: _.a.array,
          highScore: _.a.array,
          low: _.a.array,
          lowScore: _.a.array,
          color: _.a.string,
          type: _.a.string
        });
      }.call(this, n('../../node_modules/webpack/buildin/global.js')));
    },
    './src/modules/web_about/countUp/countUp.images.js': function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return I;
      }),
        n.d(t, 'a', function() {
          return S;
        }),
        n.d(t, 'd', function() {
          return D;
        }),
        n.d(t, 'c', function() {
          return A;
        }),
        n.d(t, 'e', function() {
          return B;
        }),
        n.d(t, 'b', function() {
          return H;
        });
      var o = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        r = n.n(o),
        i = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        a = n.n(i),
        c = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        s = n.n(c),
        u = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        l = n.n(u),
        m = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        d = n.n(m),
        f = n('../../node_modules/@babel/runtime/helpers/slicedToArray.js'),
        p = n.n(f),
        h = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        b = n.n(h),
        g = n('../../node_modules/react/index.js'),
        y = n.n(g),
        w = n('../../node_modules/prop-types/index.js'),
        j = n.n(w),
        v = n('./src/modules/styled/web.js'),
        _ = n('./src/styles/index.js'),
        x = n('./src/utils/index.js'),
        O = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
      function E(e) {
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
            o = d()(e);
          if (t) {
            var r = d()(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return l()(this, n);
        };
      }
      var k = Object(O.default)(v.r).withConfig({
          displayName: 'countUpimages__ThumbContainer',
          componentId: 'sc-1nmo0vo-0'
        })(['position:absolute;top:0;left:100%;']),
        C = Object(O.default)(v.e).withConfig({
          displayName: 'countUpimages__ThumbImage',
          componentId: 'sc-1nmo0vo-1'
        })(['height:', ';'], function() {
          return Object(_.h)([8, 6]);
        }),
        R = Object(O.default)(v.o).withConfig({
          displayName: 'countUpimages__ThumbContents',
          componentId: 'sc-1nmo0vo-2'
        })(['position:absolute;top:50%;left:45%;font-size:14px;font-weight:bold;']),
        I = y.a.forwardRef(function(e, t) {
          return y.a.createElement(
            k,
            b()({ ref: t }, e),
            y.a.createElement(C, { src: '/img/thumb-bg.svg' }),
            y.a.createElement(R, null, '+1')
          );
        }),
        T = Object(O.default)(v.r).withConfig({
          displayName: 'countUpimages__ArrowContainer',
          componentId: 'sc-1nmo0vo-3'
        })([
          'position:absolute;top:0;left:100%;justify-content:center;align-items:center;border-radius:50%;'
        ]),
        U = Object(O.default)(v.e).withConfig({
          displayName: 'countUpimages__ArrowImage',
          componentId: 'sc-1nmo0vo-4'
        })(['width:50%;']),
        S = y.a.forwardRef(function(e, t) {
          return y.a.createElement(
            T,
            b()(
              {
                ref: t,
                bounce: !0,
                w: e.big ? Object(_.i)(9) : Object(_.i)(3),
                h: e.big ? Object(_.i)(9) : Object(_.i)(3)
              },
              e,
              { bg: e.up ? _.b.green : _.b.red }
            ),
            y.a.createElement(U, {
              src: e.up
                ? '/img/countUp-big-arrow-up.svg'
                : '/img/countUp-big-arrow-down.svg'
            })
          );
        });
      S.propTypes = { big: j.a.bool, up: j.a.bool };
      var P = Object(O.default)(v.r).withConfig({
          displayName: 'countUpimages__BigThumbContainer',
          componentId: 'sc-1nmo0vo-5'
        })(
          [
            'position:relative;margin-left:',
            ';margin-right:',
            ';padding-bottom:',
            ';color:',
            ';'
          ],
          function() {
            return Object(_.h)([4, 2]);
          },
          function() {
            return Object(_.h)([4, 2]);
          },
          Object(_.i)(2),
          _.b.black
        ),
        N = Object(O.default)(v.r).withConfig({
          displayName: 'countUpimages__BigThumbImage',
          componentId: 'sc-1nmo0vo-6'
        })(
          [
            'width:',
            ';height:',
            ';background-size:contain;background-repeat:no-repeat;background-position:50% 50%;background-image:url(/img/thumb.svg);align-items:center;justify-content:center;'
          ],
          function() {
            return Object(_.h)([8, 6]);
          },
          function() {
            return Object(_.h)([8, 6]);
          }
        );
      function D(e) {
        var t = e.score;
        return y.a.createElement(
          P,
          null,
          y.a.createElement(
            N,
            { src: '/img/thumb.svg' },
            y.a.createElement(v.j, { mt: 2.2, ml: 1.2, fs: [2.4, 1.8] }, t)
          )
        );
      }
      D.propTypes = { score: j.a.number };
      var M = Object(O.default)(v.r).withConfig({
          displayName: 'countUpimages__ArrowsContainer',
          componentId: 'sc-1nmo0vo-7'
        })(
          [
            'flex-direction:column;justify-content:center;align-items:center;margin-left:',
            ';margin-right:',
            ';'
          ],
          function() {
            return Object(_.h)([2, 1]);
          },
          function() {
            return Object(_.h)([2, 1]);
          }
        ),
        L = Object(O.default)(v.e).withConfig({
          displayName: 'countUpimages__ArrowsImage',
          componentId: 'sc-1nmo0vo-8'
        })(
          ['width:', ';height:', ';transition:', ';transform:', ';'],
          function() {
            return Object(_.h)([12, 7]);
          },
          function() {
            return Object(_.h)([7, 5]);
          },
          function(e) {
            return e.bounce ? 'transform .2 ease-out' : 'transform .7s ease-out';
          },
          function(e) {
            return e.bounce ? 'scale(1.2)' : 'scale(1)';
          }
        ),
        z = Object(O.default)(v.r).withConfig({
          displayName: 'countUpimages__ArrowsContents',
          componentId: 'sc-1nmo0vo-9'
        })(
          [
            'justify-content:center;font-size:',
            ';line-height:',
            ';height:',
            ';margin:',
            ' 0;'
          ],
          function() {
            return Object(_.h)([5, 3.5]);
          },
          Object(_.i)(5),
          Object(_.i)(5),
          Object(_.i)(1.5)
        );
      function A(e) {
        var t = e.score,
          n = Object(g.useState)(0),
          o = p()(n, 2),
          r = o[0],
          i = o[1],
          a = r !== t && 0 !== t;
        return (
          a &&
            requestAnimationFrame(function() {
              return i(t);
            }),
          y.a.createElement(
            M,
            null,
            y.a.createElement(L, {
              bounce: a && r < t,
              src: '/img/countUp-big-arrow-up.svg'
            }),
            y.a.createElement(z, { bounce: a }, t),
            y.a.createElement(L, {
              bounce: a && r > t,
              src: '/img/countUp-big-arrow-down.svg'
            })
          )
        );
      }
      A.propTypes = { score: j.a.number };
      var F = Object(O.default)(v.r).withConfig({
          displayName: 'countUpimages__CoinContainer',
          componentId: 'sc-1nmo0vo-10'
        })(
          [
            'position:absolute;top:0;right:-100px;width:100px;height:100px;justify-content:center;align-items:center;background:',
            ';color:black;border-radius:50%;text-transform:uppercase;font-size:',
            ';'
          ],
          _.b.gold,
          function() {
            return Object(_.h)([5, 3.5]);
          }
        ),
        B = y.a.forwardRef(function(e, t) {
          return y.a.createElement(F, b()({ ref: t }, e), 'BET');
        }),
        q = O.default.canvas.withConfig({
          displayName: 'countUpimages__TimerCanvas',
          componentId: 'sc-1nmo0vo-11'
        })(
          ['width:', 'px;height:', 'px};margin-top:', ';margin-bottom:', ';'],
          45,
          45,
          Object(_.i)(1),
          Object(_.i)(1)
        ),
        H = (function(e) {
          s()(n, e);
          var t = E(n);
          function n() {
            return r()(this, n), t.apply(this, arguments);
          }
          return (
            a()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.resize(), this.reset();
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.props.score !== e.score && this.animate(),
                    !this.props.showRank && e.showRank && this.resize();
                }
              },
              {
                key: 'resize',
                value: function() {
                  var e = window.devicePixelRatio,
                    t = 45 * e,
                    n = 45 * e;
                  (this.canvas.width = t),
                    (this.canvas.height = n),
                    (this.canvas.style.width = '45px'),
                    (this.canvas.style.height = '45px');
                }
              },
              {
                key: 'reset',
                value: function(e) {
                  e = e || this.canvas.getContext('2d');
                  var t = this.canvas.width,
                    n = this.canvas.height,
                    o = 3.5 * devicePixelRatio;
                  (e.strokeStyle = '#000'),
                    (e.lineWidth = o),
                    (e.lineJoin = 'round'),
                    e.clearRect(0, 0, t, n),
                    e.beginPath(),
                    e.arc(t / 2, n / 2, t / 2 - o, 0, 2 * Math.PI),
                    e.stroke();
                }
              },
              {
                key: 'animate',
                value: function() {
                  var e = this;
                  if (this.canvas) {
                    var t = this.props,
                      n = t.delay,
                      o = t.duration,
                      r = t.score,
                      i = t.onTimerFinished,
                      a = this.canvas.getContext('2d'),
                      c = this.canvas.width,
                      s = this.canvas.height,
                      u = 3.5 * devicePixelRatio;
                    (a.fillStyle = '#fff'),
                      (a.strokeStyle = '#000'),
                      (a.lineWidth = u),
                      (a.lineJoin = 'round'),
                      x.h.remove(this.t),
                      (this.t = x.h.add({
                        from: { angle: 1.5 * Math.PI },
                        to: { angle: 3.5 * Math.PI },
                        delay: n,
                        duration: o,
                        update: function(e) {
                          var t = e.angle;
                          a.clearRect(0, 0, c, s),
                            a.beginPath(),
                            a.moveTo(c / 2, s / 2),
                            a.lineTo(c / 2, u),
                            a.arc(c / 2, s / 2, c / 2 - u, 1.5 * Math.PI, t),
                            a.closePath(),
                            a.stroke();
                        },
                        finished: function() {
                          e.reset(a), i && i(r);
                        }
                      }));
                  }
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.showRank,
                    o = t.postRank;
                  return y.a.createElement(
                    M,
                    null,
                    y.a.createElement(L, { src: '/img/countUp-black-arrow-up.svg' }),
                    y.a.createElement(
                      v.r,
                      { h: 9, align: 'center' },
                      n
                        ? y.a.createElement(z, null, o)
                        : y.a.createElement(q, {
                            ref: function(t) {
                              return (e.canvas = t);
                            }
                          })
                    ),
                    y.a.createElement(L, { src: '/img/countUp-black-arrow-down.svg' })
                  );
                }
              }
            ]),
            n
          );
        })(g.PureComponent);
      H.propTypes = {
        showRank: j.a.bool,
        postRank: j.a.number,
        score: j.a.number,
        delay: j.a.number,
        duration: j.a.number,
        onTimerFinished: j.a.func
      };
    },
    './src/modules/web_about/countUp/countUp.styles.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      }),
        n.d(t, 'b', function() {
          return c;
        });
      var o = n('./src/modules/styled/web.js'),
        r = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        i = n('./src/styles/index.js'),
        a = Object(r.default)(o.r).withConfig({
          displayName: 'countUpstyles__CountUpContainer',
          componentId: 'sc-1l55yda-0'
        })(['flex:1;justify-content:center;flex-direction:row;align-items:center;']),
        c = Object(r.default)(o.r).withConfig({
          displayName: 'countUpstyles__CountUpSpacer',
          componentId: 'sc-1l55yda-1'
        })(['max-width:', ';'], Object(i.i)(30));
    }
  }
]);
//# sourceMappingURL=web_about-about-component.bundle.js.map