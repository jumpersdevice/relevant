(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [36],
  {
    './public/img/default_user.jpg': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/default_user.jpg');
    },
    './public/img/icons/twitter_blue.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/icons/twitter_blue.png');
    },
    './public/img/reposted.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/reposted.png');
    },
    './src/modules/community/web/communityMembers.component.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = n.n(a),
        s = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        l = n.n(s),
        c = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        u = n.n(c),
        d = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        f = n.n(d),
        p = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        m = n.n(p),
        b = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        h = n.n(b),
        g = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        y = n.n(g),
        j = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        w = n.n(j),
        v = n('../../node_modules/react/index.js'),
        _ = n.n(v),
        O = n('../../node_modules/prop-types/index.js'),
        k = n.n(O),
        x = n('../../node_modules/react-router/esm/react-router.js'),
        C = n('../../node_modules/redux/es/redux.js'),
        E = n('../../node_modules/react-redux/es/index.js'),
        L = n('./src/modules/community/community.actions.js'),
        S = n('./src/modules/user/avatarbox.component.js'),
        T = n('../../node_modules/awesome-debounce-promise/dist/index.es.js'),
        P = n('./src/modules/listview/web/infScroll.component.js'),
        N = n('./src/modules/styled/web.js'),
        R = n('./src/modules/styled/uni.js'),
        M = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        );
      function I(e, t) {
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function(t) {
                w()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function D(e) {
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
            r = y()(e);
          if (t) {
            var o = y()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return h()(this, n);
        };
      }
      var A = Object(M.b)(R.E).withConfig({
          displayName: 'communityMemberscomponent__ScrollContainer',
          componentId: 'sc-1eu5tia-0'
        })(['overflow:auto;']),
        B = (function(e) {
          m()(n, e);
          var t = D(n);
          function n(e, r) {
            var a;
            return (
              l()(this, n),
              (a = t.call(this, e, r)),
              w()(f()(a), 'state', { searchResults: [], searchValue: '' }),
              w()(
                f()(a),
                'searchMembers',
                (function() {
                  var e = i()(
                    o.a.mark(function e(t) {
                      var n;
                      return o.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = a.props.community),
                                e.abrupt(
                                  'return',
                                  a.props.actions.searchMembers(t, n.active)
                                )
                              );
                            case 2:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              w()(f()(a), 'debouncedSearchMembers', Object(T.a)(a.searchMembers, 100)),
              w()(
                f()(a),
                'handleChange',
                (function() {
                  var e = i()(
                    o.a.mark(function e(t) {
                      var n;
                      return o.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                a.setState({ searchValue: t.target.value }),
                                (e.next = 3),
                                a.debouncedSearchMembers(t.target.value)
                              );
                            case 3:
                              (n = e.sent), a.setState({ searchResults: n });
                            case 5:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              w()(f()(a), 'load', function(e, t) {
                if (((a.hasMore = e * a.pageSize <= t), a.hasMore)) {
                  var n = a.props.community;
                  a.props.actions.getCommunityMembers({
                    slug: n.active,
                    skip: t,
                    limit: a.pageSize
                  });
                }
              }),
              w()(f()(a), 'renderRow', function(e) {
                var t = a.role === e.role ? null : a.getTitle(e.role);
                a.role = e.role;
                var n = a.props.close;
                return _.a.createElement(
                  _.a.Fragment,
                  { key: e._id },
                  t ? _.a.createElement(R.x, { m: '2 0' }, t) : null,
                  _.a.createElement(
                    R.E,
                    { fdirection: 'row', m: ['2 0'] },
                    _.a.createElement(S.b, {
                      user: z(
                        z({}, e.embeddedUser),
                        {},
                        { relevance: { pagerank: e.pagerank } }
                      ),
                      navigationCallback: n,
                      showRelevance: !0,
                      condensedView: !1
                    })
                  )
                );
              }),
              (a.pageSize = 20),
              (a.hasMore = !0),
              (a.ready = !1),
              (a.role = null),
              a
            );
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.load(0, 0);
                }
              },
              {
                key: 'getTitle',
                value: function(e) {
                  return { admin: 'Admins', user: 'Members' }[e];
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.community,
                    n = this.state,
                    r = n.searchResults,
                    o = n.searchValue,
                    a = t.active,
                    i = t.members,
                    s = t.communityMembers[a] || [];
                  return _.a.createElement(
                    R.E,
                    { fdirection: 'column' },
                    _.a.createElement(N.g, {
                      placeholder: 'Search',
                      onChange: this.handleChange,
                      value: o,
                      type: 'search'
                    }),
                    _.a.createElement(
                      A,
                      { h: 40, mt: 2 },
                      o
                        ? r.map(function(t) {
                            return e.renderRow(t);
                          })
                        : _.a.createElement(
                            P.a,
                            {
                              data: s,
                              loadMore: function(t) {
                                return e.load(t, s.length);
                              },
                              hasMore: this.hasMore,
                              useWindow: !1
                            },
                            s.map(function(t) {
                              var n = i[t];
                              return e.renderRow(n);
                            })
                          )
                    )
                  );
                }
              }
            ]),
            n
          );
        })(v.Component);
      w()(B, 'propTypes', {
        community: k.a.object,
        actions: k.a.object,
        close: k.a.func
      });
      t.default = Object(x.g)(
        Object(E.c)(
          function(e) {
            return { routing: e.routing, community: e.community };
          },
          function(e) {
            return {
              actions: Object(C.bindActionCreators)(
                {
                  joinCommunity: L.joinCommunity,
                  searchMembers: L.searchMembers,
                  getCommunityMembers: L.getCommunityMembers
                },
                e
              )
            };
          }
        )(B)
      );
    },
    './src/modules/listview/web/infScroll.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return k;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        i = n.n(a),
        s = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        l = n.n(s),
        c = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        u = n.n(c),
        d = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        f = n.n(d),
        p = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        m = n.n(p),
        b = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        h = n.n(b),
        g = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        y = n.n(g),
        j = n('../../node_modules/react/index.js'),
        w = n.n(j),
        v = n('../../node_modules/prop-types/index.js'),
        _ = n.n(v);
      function O(e) {
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
            r = h()(e);
          if (t) {
            var o = h()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return m()(this, n);
        };
      }
      var k = (function(e) {
        f()(n, e);
        var t = O(n);
        function n(e) {
          var r;
          return (
            i()(this, n),
            ((r = t.call(this, e)).scrollListener = r.scrollListener.bind(u()(r))),
            (r.attachScrollListener = r.attachScrollListener.bind(u()(r))),
            r
          );
        }
        return (
          l()(n, [
            {
              key: 'componentDidMount',
              value: function() {
                (this.pageLoaded = this.props.pageStart),
                  this.attachScrollListener(),
                  (this.data = this.props.data),
                  (this.data && this.data.length) || this.props.loadMore(this.pageLoaded);
              }
            },
            {
              key: 'componentDidUpdate',
              value: function() {
                this.data.length !== this.props.data.length &&
                  (this.attachScrollListener(), (this.data = this.props.data)),
                  !this.props.data.length < this.data.length &&
                    (this.pageLoaded = this.props.pageStart);
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.detachScrollListener();
              }
            },
            {
              key: 'setDefaultLoader',
              value: function(e) {
                this.defaultLoader = e;
              }
            },
            {
              key: 'detachScrollListener',
              value: function() {
                var e = window;
                !1 === this.props.useWindow && (e = this.scrollComponent.parentNode),
                  e.removeEventListener(
                    'scroll',
                    this.scrollListener,
                    this.props.useCapture
                  ),
                  e.removeEventListener(
                    'resize',
                    this.scrollListener,
                    this.props.useCapture
                  );
              }
            },
            {
              key: 'attachScrollListener',
              value: function() {
                if (this.props.hasMore) {
                  var e = window;
                  !1 === this.props.useWindow && (e = this.scrollComponent.parentNode),
                    e.addEventListener(
                      'scroll',
                      this.scrollListener,
                      this.props.useCapture
                    ),
                    e.addEventListener(
                      'resize',
                      this.scrollListener,
                      this.props.useCapture
                    ),
                    this.props.initialLoad && this.scrollListener();
                }
              }
            },
            {
              key: 'scrollListener',
              value: function() {
                if (this.props.data && this.props.data.length) {
                  var e,
                    t = this.scrollComponent,
                    n = window;
                  if (this.props.useWindow) {
                    var r =
                      void 0 !== n.pageYOffset
                        ? n.pageYOffset
                        : (
                            document.documentElement ||
                            document.body.parentNode ||
                            document.body
                          ).scrollTop;
                    e = this.props.isReverse
                      ? r
                      : this.calculateTopPosition(t) +
                        (t.offsetHeight - r - window.innerHeight);
                  } else
                    e = this.props.isReverse
                      ? t.parentNode.scrollTop
                      : t.scrollHeight -
                        t.parentNode.scrollTop -
                        t.parentNode.clientHeight;
                  e < Number(this.props.threshold) &&
                    (this.detachScrollListener(),
                    'function' == typeof this.props.loadMore &&
                      this.props.loadMore((this.pageLoaded += 1)));
                }
              }
            },
            {
              key: 'calculateTopPosition',
              value: function(e) {
                return e ? e.offsetTop + this.calculateTopPosition(e.offsetParent) : 0;
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.children,
                  r = t.element,
                  a = t.hasMore,
                  i = (t.initialLoad, t.isReverse, t.loader),
                  s =
                    (t.loadMore,
                    t.pageStart,
                    t.threshold,
                    t.useCapture,
                    t.useWindow,
                    t.data,
                    o()(t, [
                      'children',
                      'element',
                      'hasMore',
                      'initialLoad',
                      'isReverse',
                      'loader',
                      'loadMore',
                      'pageStart',
                      'threshold',
                      'useCapture',
                      'useWindow',
                      'data'
                    ]));
                return (
                  (s.ref = function(t) {
                    e.scrollComponent = t;
                  }),
                  w.a.createElement(r, s, n, a && (i || this.defaultLoader))
                );
              }
            }
          ]),
          n
        );
      })(j.Component);
      y()(k, 'propTypes', { data: _.a.array }),
        (k.propTypes = {
          element: _.a.string,
          hasMore: _.a.bool,
          initialLoad: _.a.bool,
          isReverse: _.a.bool,
          loadMore: _.a.func.isRequired,
          pageStart: _.a.number,
          threshold: _.a.number,
          useCapture: _.a.bool,
          useWindow: _.a.bool,
          children: _.a.oneOfType([_.a.object, _.a.array]).isRequired,
          loader: _.a.object
        }),
        (k.defaultProps = {
          element: 'div',
          hasMore: !1,
          initialLoad: !0,
          pageStart: 0,
          threshold: 250,
          useWindow: !0,
          isReverse: !1,
          useCapture: !1,
          loader: null
        });
    },
    './src/modules/stats/rStat.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return h;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        i = n.n(a),
        s = n('../../node_modules/react/index.js'),
        l = n.n(s),
        c = n('../../node_modules/prop-types/index.js'),
        u = n.n(c),
        d = n('./src/utils/numbers.js'),
        f = n('./src/utils/propValidation.js'),
        p = n('./src/styles/index.js'),
        m = n('./src/modules/styled/uni.js'),
        b = n('./public/img/r-emoji.png');
      function h(e) {
        var t = e.size,
          n = e.user,
          r = e.color,
          a = e.mr,
          s = e.align,
          c = e.lh,
          u = e.inline,
          f = i()(e, ['size', 'user', 'color', 'mr', 'align', 'lh', 'inline']);
        if (!n) return null;
        var h = n.relevance,
          g = (h && h.pagerank) || 0,
          y = t || 3,
          j = 'center' === s ? 0 : Object(p.i)(-1, 'px');
        return u
          ? l.a.createElement(
              m.B,
              o()({}, f, { inline: u ? 1 : 0, align: s || 'center' }),
              l.a.createElement(m.s, {
                h: 1 * y,
                w: 1 * y,
                source: b,
                style: { bottom: j },
                resizeMode: 'contain',
                inline: 1
              }),
              ' ',
              l.a.createElement(
                m.w,
                { inline: u ? 1 : 0, lh: c, c: r },
                Object(d.abbreviateNumber)(g) || 0
              )
            )
          : l.a.createElement(
              m.t,
              o()({}, f, {
                inline: u ? 1 : 0,
                align: s || 'center',
                mr: 'number' == typeof a ? a : 1.5
              }),
              l.a.createElement(m.s, {
                h: 1 * y,
                w: 1 * y,
                source: b,
                mr: y / 10,
                style: { bottom: j },
                resizeMode: 'contain',
                inline: u ? 1 : 0
              }),
              l.a.createElement(
                m.w,
                { inline: u ? 1 : 0, lh: c, c: r },
                Object(d.abbreviateNumber)(g) || 0
              )
            );
      }
      h.propTypes = {
        inline: u.a.oneOfType([u.a.bool, u.a.number]),
        lh: u.a.number,
        align: u.a.string,
        mr: u.a.number,
        color: u.a.string,
        user: f.c,
        size: u.a.number
      };
    },
    './src/modules/styled/web.js': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return l;
      }),
        n.d(t, 'r', function() {
          return c;
        }),
        n.d(t, 'o', function() {
          return u;
        }),
        n.d(t, 'f', function() {
          return d;
        }),
        n.d(t, 'e', function() {
          return f;
        }),
        n.d(t, 'c', function() {
          return p;
        }),
        n.d(t, 'p', function() {
          return m;
        }),
        n.d(t, 'i', function() {
          return b;
        }),
        n.d(t, 'k', function() {
          return h;
        }),
        n.d(t, 'a', function() {
          return g;
        }),
        n.d(t, 'b', function() {
          return y;
        }),
        n.d(t, 'j', function() {
          return j;
        }),
        n.d(t, 'h', function() {
          return w;
        }),
        n.d(t, 'g', function() {
          return v;
        }),
        n.d(t, 'n', function() {
          return _;
        }),
        n.d(t, 'm', function() {
          return O;
        }),
        n.d(t, 'd', function() {
          return k;
        }),
        n.d(t, 'q', function() {
          return x;
        });
      var r = n('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        o = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        a = n('./src/styles/index.js'),
        i = n(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        s = n(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        l = Object(o.default)(r.b).withConfig({
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
        c = o.default.div.withConfig({
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
        u = o.default.span.withConfig({
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
        d = o.default.span.withConfig({
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
        f = o.default.img.withConfig({
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
        p =
          (o.default.span.withConfig({
            displayName: 'web__ImageWrapper',
            componentId: 'kfa5fa-5'
          })(
            ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
            a.f.margin,
            a.f.flex
          ),
          o.default.div.withConfig({
            displayName: 'web__Divider',
            componentId: 'kfa5fa-6'
          })(
            ['', ' ', ' ', ' ', ''],
            a.f.margin,
            a.f.padding,
            a.f.width,
            a.e.universalBorder('bottom')
          )),
        m =
          (Object(o.default)(u).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], a.c.header, a.f.color),
          Object(o.default)(u).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], a.c.title, a.f.color, a.f.font)),
        b = Object(o.default)(u).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], a.c.link, a.f.color, a.f.font),
        h = Object(o.default)(u).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], a.c.secondaryText, a.f.font, a.f.color),
        g =
          (Object(o.default)(u).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], a.c.altLink, a.f.color, a.f.font),
          Object(o.default)(u).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], a.c.commentText, a.f.color, a.f.font),
          Object(o.default)(u).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], a.c.bodyStyle, a.f.color, a.f.font)),
        y = o.default.button.withConfig({
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
        j = Object(o.default)(u).withConfig({
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
        w = o.default.input.withConfig({
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
        v = o.default.input.withConfig({
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
        _ = Object(o.default)(s.a).withConfig({
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
        O = Object(o.default)(i.a).withConfig({
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
        k = o.default.form.withConfig({
          displayName: 'web__Form',
          componentId: 'kfa5fa-20'
        })(['', ' ', ''], a.f.flex, a.f.margin),
        x = o.default.video.withConfig({
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
    },
    './src/modules/user/UAvatar.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/react/index.js'),
        o = n.n(r),
        a = n('../../node_modules/react-redux/es/index.js'),
        i = n('../../node_modules/prop-types/index.js'),
        s = n.n(i),
        l = n('./src/modules/navigation/ULink.component.js'),
        c = n('./src/modules/styled/uni.js'),
        u = n('./src/styles/layout.js'),
        d = n('./src/modules/navigation/navigation.actions.js');
      function f(e) {
        var t = e.size,
          r = e.user,
          i = e.m,
          s = e.goToProfile,
          f = e.style,
          p = e.noLink,
          m = Object(a.d)();
        if (!r) return null;
        var b = '/user/profile/' + r.handle,
          h = r.image ? { uri: r.image } : n('./public/img/default_user.jpg'),
          g = t || u.AVATAR_SIZE,
          y = o.a.createElement(c.s, { source: h, h: g, w: g, bradius: g / 2 });
        return p
          ? o.a.createElement(c.E, { style: f, m: i }, y)
          : o.a.createElement(
              c.E,
              { style: f, m: i },
              o.a.createElement(
                l.a,
                {
                  onPress: function() {
                    return s ? s(r) : m(Object(d.goToProfile)(r));
                  },
                  onClick: function(e) {
                    return e.stopPropagation();
                  },
                  to: b
                },
                y
              )
            );
      }
      (f.propTypes = {
        user: s.a.object,
        size: s.a.number,
        noLink: s.a.bool,
        m: s.a.string,
        goToProfile: s.a.func,
        style: s.a.oneOfType([s.a.string, s.a.array])
      }),
        (t.a = Object(r.memo)(f));
    },
    './src/modules/user/avatarbox.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return O;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        a = n('../../node_modules/react/index.js'),
        i = n.n(a),
        s = n('../../node_modules/prop-types/index.js'),
        l = n.n(s),
        c = n('../../node_modules/react-redux/es/index.js'),
        u = n('./src/styles/index.js'),
        d = n('./src/modules/stats/rStat.component.js'),
        f = n('./src/modules/navigation/ULink.component.js'),
        p = n('./src/modules/user/UAvatar.component.js'),
        m = n('./src/utils/numbers.js'),
        b = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        h = n('./src/modules/styled/uni.js'),
        g = n('./src/styles/sizing.js'),
        y = n('./src/modules/navigation/navigation.actions.js');
      function j(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var v = Object(b.b)(h.d).withConfig({
        displayName: 'avatarboxcomponent__Name',
        componentId: 'sc-116xds-0'
      })(['']);
      function _(e) {
        var t = e.user,
          r = e.showRelevance,
          o = e.type,
          a = e.setSelected,
          s = e.size,
          l = e.postTime,
          d = e.repost,
          b = e.twitter,
          g = e.avatarText,
          j = e.noLink,
          w = e.navigationCallback,
          v = e.vertical,
          _ = Object(c.d)();
        if (!t) return null;
        var k,
          x = t.handle;
        'invite' !== o && x && (x = '@'.concat(x)),
          l && (k = ' • ' + Object(m.getTimestamp)(l));
        var C = x && !v && i.a.createElement(h.x, { mt: 0.25 }, x, ' ', k),
          E =
            d &&
            i.a.createElement(h.s, {
              resizeMode: 'contain',
              source: n('./public/img/reposted.png'),
              w: 2,
              h: 2,
              mr: 0.2,
              mb: 2
            }),
          L =
            b &&
            i.a.createElement(h.s, {
              inline: !0,
              resizeMode: 'contain',
              w: 2.5,
              h: 1.5,
              ml: 0.5,
              mb: -0.1,
              source: n('./public/img/icons/twitter_blue.png')
            }),
          S = t.relevance && !!t.relevance.pagerank && r && !g;
        return i.a.createElement(
          h.e,
          null,
          i.a.createElement(
            f.a,
            {
              noLink: j,
              to: '/user/profile/'.concat(t.handle),
              onPress: function() {
                a ? a(t) : _(Object(y.goToProfile)(t)), w && w();
              },
              onClick: function() {
                return w && w();
              }
            },
            i.a.createElement(
              h.E,
              { fdirection: v ? 'column' : 'row' },
              i.a.createElement(p.a, { size: s, user: t, noLink: !0 }),
              E,
              i.a.createElement(
                h.E,
                { ml: v ? 0 : g ? 1.5 : 1, align: v ? 'center' : 'flex-start' },
                i.a.createElement(
                  h.B,
                  { inline: 1 },
                  i.a.createElement(O, { user: t, showRel: S, twitterIcon: L }),
                  g ? i.a.createElement(h.B, { c: u.b.black, inline: 1 }, g()) : null
                ),
                C
              )
            )
          )
        );
      }
      function O(e) {
        var t = e.user,
          n = e.showRel,
          r = e.twitterIcon,
          o = u.d ? {} : { maxWidth: Object(g.a)(12), whiteSpace: 'nowrap' };
        return i.a.createElement(
          a.Fragment,
          null,
          i.a.createElement(
            v,
            {
              numberOfLines: 1,
              style: w({ overflow: 'hidden' }, o),
              inline: 1,
              c: u.b.black
            },
            t.name,
            r
          ),
          n &&
            i.a.createElement(
              h.B,
              { inline: 1 },
              ' ',
              i.a.createElement(d.a, {
                inline: 1,
                align: 'baseline',
                lh: 1.75,
                size: 1.75,
                user: t
              })
            )
        );
      }
      (t.b = Object(a.memo)(_)),
        (_.propTypes = {
          noLink: l.a.bool,
          avatarText: l.a.func,
          twitter: l.a.bool,
          type: l.a.string,
          user: l.a.object,
          size: l.a.number,
          showRelevance: l.a.bool,
          repost: l.a.bool,
          postTime: l.a.oneOfType([l.a.string, l.a.object]),
          setSelected: l.a.func,
          navigationCallback: l.a.func,
          vertical: l.a.bool
        }),
        (O.propTypes = { user: l.a.object, twitterIcon: l.a.node, showRel: l.a.bool });
    },
    './src/utils/propValidation.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return i;
      }),
        n.d(t, 'a', function() {
          return s;
        }),
        n.d(t, 'b', function() {
          return l;
        });
      var r = n('../../node_modules/prop-types/index.js'),
        o = n.n(r),
        a = n('../../node_modules/react-is/index.js'),
        i = o.a.shape({
          handle: o.a.string,
          balance: o.a.number,
          image: o.a.string,
          name: o.a.string
        }),
        s =
          (o.a.shape({
            _id: o.a.string.isRequired,
            user: o.a.string.isRequired,
            title: o.a.string,
            embeddedUser: o.a.object,
            tags: o.a.array,
            body: o.a.string,
            postDate: o.a.instanceOf(Date),
            data: o.a.object,
            link: o.a.object,
            parentPost: o.a.number,
            type: o.a.string
          }),
          o.a.shape({ isAuthenticated: o.a.bool, user: i, community: o.a.string }));
      function l(e, t, n) {
        if (e[t] && !Object(a.isValidElementType)(e[t]))
          return new Error(
            "Invalid prop '"
              .concat(t, "' supplied to '")
              .concat(n, "': the prop is not a valid React component")
          );
      }
    }
  }
]);
//# sourceMappingURL=community-web-communityMembers-component.bundle.js.map