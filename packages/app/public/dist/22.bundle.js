(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [22, 61],
  {
    '../../node_modules/eve/eve.js': function(e, t, n) {
      var r;
      !(function(n) {
        var a,
          i,
          o = 'hasOwnProperty',
          s = /[\.\/]/,
          l = /\s*,\s*/,
          u = function(e, t) {
            return e - t;
          },
          c = { n: {} },
          d = function() {
            for (var e = 0, t = this.length; e < t; e++)
              if (void 0 !== this[e]) return this[e];
          },
          f = function() {
            for (var e = this.length; --e; ) if (void 0 !== this[e]) return this[e];
          },
          p = Object.prototype.toString,
          m = String,
          h =
            Array.isArray ||
            function(e) {
              return e instanceof Array || '[object Array]' == p.call(e);
            },
          g = function(e, t) {
            var n,
              r = i,
              o = Array.prototype.slice.call(arguments, 2),
              s = g.listeners(e),
              l = 0,
              c = [],
              p = {},
              m = [],
              h = a;
            (m.firstDefined = d), (m.lastDefined = f), (a = e), (i = 0);
            for (var b = 0, v = s.length; b < v; b++)
              'zIndex' in s[b] &&
                (c.push(s[b].zIndex), s[b].zIndex < 0 && (p[s[b].zIndex] = s[b]));
            for (c.sort(u); c[l] < 0; )
              if (((n = p[c[l++]]), m.push(n.apply(t, o)), i)) return (i = r), m;
            for (b = 0; b < v; b++)
              if ('zIndex' in (n = s[b]))
                if (n.zIndex == c[l]) {
                  if ((m.push(n.apply(t, o)), i)) break;
                  do {
                    if (((n = p[c[++l]]) && m.push(n.apply(t, o)), i)) break;
                  } while (n);
                } else p[n.zIndex] = n;
              else if ((m.push(n.apply(t, o)), i)) break;
            return (i = r), (a = h), m;
          };
        (g._events = c),
          (g.listeners = function(e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              l,
              u,
              d = h(e) ? e : e.split(s),
              f = c,
              p = [f],
              m = [];
            for (a = 0, i = d.length; a < i; a++) {
              for (u = [], o = 0, l = p.length; o < l; o++)
                for (n = [(f = p[o].n)[d[a]], f['*']], r = 2; r--; )
                  (t = n[r]) && (u.push(t), (m = m.concat(t.f || [])));
              p = u;
            }
            return m;
          }),
          (g.separator = function(e) {
            e
              ? ((e = '[' + (e = m(e).replace(/(?=[\.\^\]\[\-])/g, '\\')) + ']'),
                (s = new RegExp(e)))
              : (s = /[\.\/]/);
          }),
          (g.on = function(e, t) {
            if ('function' != typeof t) return function() {};
            for (
              var n = h(e) ? (h(e[0]) ? e : [e]) : m(e).split(l), r = 0, a = n.length;
              r < a;
              r++
            )
              !(function(e) {
                for (
                  var n, r = h(e) ? e : m(e).split(s), a = c, i = 0, o = r.length;
                  i < o;
                  i++
                )
                  a =
                    ((a = a.n).hasOwnProperty(r[i]) && a[r[i]]) || (a[r[i]] = { n: {} });
                for (a.f = a.f || [], i = 0, o = a.f.length; i < o; i++)
                  if (a.f[i] == t) {
                    n = !0;
                    break;
                  }
                !n && a.f.push(t);
              })(n[r]);
            return function(e) {
              +e == +e && (t.zIndex = +e);
            };
          }),
          (g.f = function(e) {
            var t = [].slice.call(arguments, 1);
            return function() {
              g.apply(null, [e, null].concat(t).concat([].slice.call(arguments, 0)));
            };
          }),
          (g.stop = function() {
            i = 1;
          }),
          (g.nt = function(e) {
            var t = h(a) ? a.join('.') : a;
            return e ? new RegExp('(?:\\.|\\/|^)' + e + '(?:\\.|\\/|$)').test(t) : t;
          }),
          (g.nts = function() {
            return h(a) ? a : a.split(s);
          }),
          (g.off = g.unbind = function(e, t) {
            if (e) {
              var n = h(e) ? (h(e[0]) ? e : [e]) : m(e).split(l);
              if (n.length > 1) for (var r = 0, a = n.length; r < a; r++) g.off(n[r], t);
              else {
                n = h(e) ? e : m(e).split(s);
                var i,
                  u,
                  d,
                  f,
                  p,
                  b = [c],
                  v = [];
                for (r = 0, a = n.length; r < a; r++)
                  for (f = 0; f < b.length; f += d.length - 2) {
                    if (((d = [f, 1]), (i = b[f].n), '*' != n[r]))
                      i[n[r]] && (d.push(i[n[r]]), v.unshift({ n: i, name: n[r] }));
                    else
                      for (u in i)
                        i[o](u) && (d.push(i[u]), v.unshift({ n: i, name: u }));
                    b.splice.apply(b, d);
                  }
                for (r = 0, a = b.length; r < a; r++)
                  for (i = b[r]; i.n; ) {
                    if (t) {
                      if (i.f) {
                        for (f = 0, p = i.f.length; f < p; f++)
                          if (i.f[f] == t) {
                            i.f.splice(f, 1);
                            break;
                          }
                        !i.f.length && delete i.f;
                      }
                      for (u in i.n)
                        if (i.n[o](u) && i.n[u].f) {
                          var y = i.n[u].f;
                          for (f = 0, p = y.length; f < p; f++)
                            if (y[f] == t) {
                              y.splice(f, 1);
                              break;
                            }
                          !y.length && delete i.n[u].f;
                        }
                    } else
                      for (u in (delete i.f, i.n))
                        i.n[o](u) && i.n[u].f && delete i.n[u].f;
                    i = i.n;
                  }
                e: for (r = 0, a = v.length; r < a; r++) {
                  for (u in (i = v[r]).n[i.name].f) continue e;
                  for (u in i.n[i.name].n) continue e;
                  delete i.n[i.name];
                }
              }
            } else g._events = c = { n: {} };
          }),
          (g.once = function(e, t) {
            var n = function() {
              return g.off(e, n), t.apply(this, arguments);
            };
            return g.on(e, n);
          }),
          (g.version = '0.5.4'),
          (g.toString = function() {
            return 'You are running Eve 0.5.4';
          }),
          (n.eve = g),
          e.exports
            ? (e.exports = g)
            : void 0 ===
                (r = function() {
                  return g;
                }.apply(t, [])) || (e.exports = r);
      })('undefined' != typeof window ? window : this);
    },
    '../../node_modules/react-burger-menu/lib/BurgerIcon.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var o = n('../../node_modules/react/index.js'),
        s = i(o),
        l = i(n('../../node_modules/prop-types/index.js')),
        u = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (function(e, t, n) {
                for (var r = !0; r; ) {
                  var a = e,
                    i = t,
                    o = n;
                  (r = !1), null === a && (a = Function.prototype);
                  var s = Object.getOwnPropertyDescriptor(a, i);
                  if (void 0 !== s) {
                    if ('value' in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(o);
                  }
                  var u = Object.getPrototypeOf(a);
                  if (null === u) return;
                  (e = u), (t = i), (n = o), (r = !0), (s = u = void 0);
                }
              })(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this, e),
              (this.state = { hover: !1 });
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(t, [
              {
                key: 'getLineStyle',
                value: function(e) {
                  return r(
                    {
                      position: 'absolute',
                      height: '20%',
                      left: 0,
                      right: 0,
                      top: 2 * e * 20 + '%',
                      opacity: this.state.hover ? 0.6 : 1
                    },
                    this.state.hover && this.props.styles.bmBurgerBarsHover
                  );
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = void 0;
                  if (this.props.customIcon) {
                    var n = {
                      className: (
                        'bm-icon ' + (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: r(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmIcon
                      )
                    };
                    t = s.default.cloneElement(this.props.customIcon, n);
                  } else
                    t = s.default.createElement(
                      'span',
                      null,
                      [0, 1, 2].map(function(t) {
                        return s.default.createElement('span', {
                          key: t,
                          className: (
                            'bm-burger-bars ' +
                            e.props.barClassName +
                            ' ' +
                            (e.state.hover ? 'bm-burger-bars-hover' : '')
                          ).trim(),
                          style: r({}, e.getLineStyle(t), e.props.styles.bmBurgerBars)
                        });
                      })
                    );
                  return s.default.createElement(
                    'div',
                    {
                      className: ('bm-burger-button ' + this.props.className).trim(),
                      style: r({ zIndex: 1e3 }, this.props.styles.bmBurgerButton)
                    },
                    t,
                    s.default.createElement(
                      'button',
                      {
                        onClick: this.props.onClick,
                        onMouseOver: function() {
                          e.setState({ hover: !0 }),
                            e.props.onIconHoverChange &&
                              e.props.onIconHoverChange({ isMouseIn: !0 });
                        },
                        onMouseOut: function() {
                          e.setState({ hover: !1 }),
                            e.props.onIconHoverChange &&
                              e.props.onIconHoverChange({ isMouseIn: !1 });
                        },
                        style: {
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          margin: 0,
                          padding: 0,
                          border: 'none',
                          fontSize: 0,
                          background: 'transparent',
                          cursor: 'pointer'
                        }
                      },
                      'Open Menu'
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.Component);
      (t.default = u),
        (u.propTypes = {
          barClassName: l.default.string,
          customIcon: l.default.element,
          styles: l.default.object
        }),
        (u.defaultProps = { barClassName: '', className: '', styles: {} }),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/BurgerMenu.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          slide: n('../../node_modules/react-burger-menu/lib/menus/slide.js'),
          stack: n('../../node_modules/react-burger-menu/lib/menus/stack.js'),
          elastic: n('../../node_modules/react-burger-menu/lib/menus/elastic.js'),
          bubble: n('../../node_modules/react-burger-menu/lib/menus/bubble.js'),
          push: n('../../node_modules/react-burger-menu/lib/menus/push.js'),
          pushRotate: n('../../node_modules/react-burger-menu/lib/menus/pushRotate.js'),
          scaleDown: n('../../node_modules/react-burger-menu/lib/menus/scaleDown.js'),
          scaleRotate: n('../../node_modules/react-burger-menu/lib/menus/scaleRotate.js'),
          fallDown: n('../../node_modules/react-burger-menu/lib/menus/fallDown.js'),
          reveal: n('../../node_modules/react-burger-menu/lib/menus/reveal.js')
        }),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/CrossIcon.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = function(e, t, n) {
          for (var r = !0; r; ) {
            var a = e,
              i = t,
              o = n;
            (r = !1), null === a && (a = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(a, i);
            if (void 0 !== s) {
              if ('value' in s) return s.value;
              var l = s.get;
              if (void 0 === l) return;
              return l.call(o);
            }
            var u = Object.getPrototypeOf(a);
            if (null === u) return;
            (e = u), (t = i), (n = o), (r = !0), (s = u = void 0);
          }
        };
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      var l = n('../../node_modules/react/index.js'),
        u = o(l),
        c = o(n('../../node_modules/prop-types/index.js')),
        d = (function(e) {
          function t() {
            s(this, t),
              i(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
                this,
                arguments
              );
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(t, [
              {
                key: 'getCrossStyle',
                value: function(e) {
                  return {
                    position: 'absolute',
                    width: 3,
                    height: 14,
                    transform: 'before' === e ? 'rotate(45deg)' : 'rotate(-45deg)'
                  };
                }
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this;
                  if (this.props.customIcon) {
                    var n = {
                      className: (
                        'bm-cross ' + (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: r(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmCross
                      )
                    };
                    e = u.default.cloneElement(this.props.customIcon, n);
                  } else
                    e = u.default.createElement(
                      'span',
                      { style: { position: 'absolute', top: '6px', right: '14px' } },
                      ['before', 'after'].map(function(e, n) {
                        return u.default.createElement('span', {
                          key: n,
                          className: ('bm-cross ' + t.props.crossClassName).trim(),
                          style: r({}, t.getCrossStyle(e), t.props.styles.bmCross)
                        });
                      })
                    );
                  return u.default.createElement(
                    'div',
                    {
                      className: ('bm-cross-button ' + this.props.className).trim(),
                      style: r(
                        {},
                        { position: 'absolute', width: 24, height: 24, right: 8, top: 8 },
                        this.props.styles.bmCrossButton
                      )
                    },
                    e,
                    u.default.createElement(
                      'button',
                      {
                        onClick: this.props.onClick,
                        style: {
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          margin: 0,
                          padding: 0,
                          border: 'none',
                          fontSize: 0,
                          background: 'transparent',
                          cursor: 'pointer'
                        },
                        tabIndex: this.props.tabIndex
                      },
                      'Close Menu'
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.Component);
      (t.default = d),
        (d.propTypes = {
          crossClassName: c.default.string,
          customIcon: c.default.element,
          styles: c.default.object,
          tabIndex: c.default.number
        }),
        (d.defaultProps = { crossClassName: '', className: '', styles: {}, tabIndex: 0 }),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/baseStyles.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.default = {
        overlay: function(e) {
          return {
            position: 'fixed',
            zIndex: 1e3,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.3)',
            opacity: e ? 1 : 0,
            MozTransform: e ? '' : 'translate3d(100%, 0, 0)',
            MsTransform: e ? '' : 'translate3d(100%, 0, 0)',
            OTransform: e ? '' : 'translate3d(100%, 0, 0)',
            WebkitTransform: e ? '' : 'translate3d(100%, 0, 0)',
            transform: e ? '' : 'translate3d(100%, 0, 0)',
            transition: e ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
          };
        },
        menuWrap: function(e, t, n) {
          return {
            position: 'fixed',
            right: n ? 0 : 'inherit',
            zIndex: 1100,
            width: t,
            height: '100%',
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            transform: e
              ? ''
              : n
              ? 'translate3d(100%, 0, 0)'
              : 'translate3d(-100%, 0, 0)',
            transition: 'all 0.5s'
          };
        },
        menu: function() {
          return { height: '100%', boxSizing: 'border-box', overflow: 'auto' };
        },
        itemList: function() {
          return { height: '100%' };
        },
        item: function() {
          return { display: 'block' };
        }
      }),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menuFactory.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var o = n('../../node_modules/react/index.js'),
        s = i(o),
        l = i(n('../../node_modules/@hot-loader/react-dom/index.js')),
        u = i(n('../../node_modules/prop-types/index.js')),
        c = i(n('../../node_modules/react-burger-menu/lib/baseStyles.js')),
        d = i(n('../../node_modules/react-burger-menu/lib/BurgerIcon.js')),
        f = i(n('../../node_modules/react-burger-menu/lib/CrossIcon.js'));
      (t.default = function(e) {
        var t = (function(t) {
          function n(t) {
            if (
              ((function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
              (function(e, t, n) {
                for (var r = !0; r; ) {
                  var a = e,
                    i = t,
                    o = n;
                  (r = !1), null === a && (a = Function.prototype);
                  var s = Object.getOwnPropertyDescriptor(a, i);
                  if (void 0 !== s) {
                    if ('value' in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(o);
                  }
                  var u = Object.getPrototypeOf(a);
                  if (null === u) return;
                  (e = u), (t = i), (n = o), (r = !0), (s = u = void 0);
                }
              })(Object.getPrototypeOf(n.prototype), 'constructor', this).call(this, t),
              (this.state = { isOpen: !1 }),
              !e)
            )
              throw new Error('No styles supplied');
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(n, t),
            a(n, [
              {
                key: 'toggleMenu',
                value: function() {
                  var e = this,
                    t =
                      arguments.length <= 0 || void 0 === arguments[0]
                        ? {}
                        : arguments[0],
                    n = t.isOpen,
                    r = t.noStateChange,
                    a = { isOpen: void 0 !== n ? n : !this.state.isOpen };
                  this.applyWrapperStyles(),
                    this.setState(a, function() {
                      if ((!r && e.props.onStateChange(a), !e.props.disableAutoFocus))
                        if (a.isOpen) {
                          var t = document.querySelector('.bm-item');
                          t && t.focus();
                        } else
                          document.activeElement
                            ? document.activeElement.blur()
                            : document.body.blur();
                      e.timeoutId && clearTimeout(e.timeoutId),
                        (e.timeoutId = setTimeout(function() {
                          (e.timeoutId = null), a.isOpen || e.applyWrapperStyles(!1);
                        }, 500));
                    });
                }
              },
              {
                key: 'applyWrapperStyles',
                value: function() {
                  var t =
                      arguments.length <= 0 || void 0 === arguments[0] || arguments[0],
                    n = function(e, n) {
                      return e.classList[t ? 'add' : 'remove'](n);
                    };
                  this.props.htmlClassName &&
                    n(document.querySelector('html'), this.props.htmlClassName),
                    this.props.bodyClassName &&
                      n(document.querySelector('body'), this.props.bodyClassName),
                    e.pageWrap &&
                      this.props.pageWrapId &&
                      this.handleExternalWrapper(this.props.pageWrapId, e.pageWrap, t),
                    e.outerContainer &&
                      this.props.outerContainerId &&
                      this.handleExternalWrapper(
                        this.props.outerContainerId,
                        e.outerContainer,
                        t
                      );
                }
              },
              {
                key: 'handleExternalWrapper',
                value: function(e, t, n) {
                  var r = document.getElementById(e);
                  if (r) {
                    var a = this.getStyle(t);
                    for (var i in a) a.hasOwnProperty(i) && (r.style[i] = n ? a[i] : '');
                    var o = function(e) {
                      return (e.style['overflow-x'] = n ? 'hidden' : '');
                    };
                    this.props.htmlClassName || o(document.querySelector('html')),
                      this.props.bodyClassName || o(document.querySelector('body'));
                  } else console.error("Element with ID '" + e + "' not found");
                }
              },
              {
                key: 'getStyles',
                value: function(t, n, a) {
                  var i = 'bm' + t.replace(t.charAt(0), t.charAt(0).toUpperCase()),
                    o = c.default[t] ? this.getStyle(c.default[t]) : {};
                  return (
                    e[t] && (o = r({}, o, this.getStyle(e[t], n + 1))),
                    this.props.styles[i] && (o = r({}, o, this.props.styles[i])),
                    a && (o = r({}, o, a)),
                    this.props.noTransition && delete o.transition,
                    o
                  );
                }
              },
              {
                key: 'getStyle',
                value: function(e, t) {
                  var n = this.props.width,
                    r = 'string' != typeof n ? n + 'px' : n;
                  return e(this.state.isOpen, r, this.props.right, t);
                }
              },
              {
                key: 'listenForClose',
                value: function(e) {
                  (e = e || window.event),
                    this.props.disableCloseOnEsc ||
                      !this.state.isOpen ||
                      ('Escape' !== e.key && 27 !== e.keyCode) ||
                      this.toggleMenu();
                }
              },
              {
                key: 'shouldDisableOverlayClick',
                value: function() {
                  return 'function' == typeof this.props.disableOverlayClick
                    ? this.props.disableOverlayClick()
                    : this.props.disableOverlayClick;
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.customOnKeyDown
                    ? (window.onkeydown = this.props.customOnKeyDown)
                    : (window.onkeydown = this.listenForClose.bind(this)),
                    this.props.isOpen &&
                      this.toggleMenu({ isOpen: !0, noStateChange: !0 });
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  (window.onkeydown = null), this.applyWrapperStyles(!1);
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(t) {
                  var n,
                    r,
                    a = this;
                  void 0 !== this.props.isOpen &&
                  this.props.isOpen !== this.state.isOpen &&
                  this.props.isOpen !== t.isOpen
                    ? this.toggleMenu()
                    : e.svg &&
                      ((n = l.default.findDOMNode(a, 'bm-morph-shape')),
                      (r = e.svg.lib(n).select('path')),
                      a.state.isOpen
                        ? e.svg.animate(r)
                        : setTimeout(function() {
                            r.attr('d', e.svg.pathInitial);
                          }, 300));
                }
              },
              {
                key: 'render',
                value: function() {
                  var t = this;
                  return s.default.createElement(
                    'div',
                    null,
                    !this.props.noOverlay &&
                      s.default.createElement('div', {
                        className: ('bm-overlay ' + this.props.overlayClassName).trim(),
                        onClick: function() {
                          return !t.shouldDisableOverlayClick() && t.toggleMenu();
                        },
                        style: this.getStyles('overlay')
                      }),
                    s.default.createElement(
                      'div',
                      {
                        id: this.props.id,
                        className: ('bm-menu-wrap ' + this.props.className).trim(),
                        style: this.getStyles('menuWrap')
                      },
                      e.svg &&
                        s.default.createElement(
                          'div',
                          {
                            className: (
                              'bm-morph-shape ' + this.props.morphShapeClassName
                            ).trim(),
                            style: this.getStyles('morphShape')
                          },
                          s.default.createElement(
                            'svg',
                            {
                              width: '100%',
                              height: '100%',
                              viewBox: '0 0 100 800',
                              preserveAspectRatio: 'none'
                            },
                            s.default.createElement('path', { d: e.svg.pathInitial })
                          )
                        ),
                      s.default.createElement(
                        'div',
                        {
                          className: ('bm-menu ' + this.props.menuClassName).trim(),
                          style: this.getStyles('menu')
                        },
                        s.default.createElement(
                          'nav',
                          {
                            className: (
                              'bm-item-list ' + this.props.itemListClassName
                            ).trim(),
                            style: this.getStyles('itemList')
                          },
                          s.default.Children.map(this.props.children, function(e, n) {
                            if (e) {
                              var r = {
                                key: n,
                                className: [
                                  'bm-item',
                                  t.props.itemClassName,
                                  e.props.className
                                ]
                                  .filter(function(e) {
                                    return !!e;
                                  })
                                  .join(' '),
                                style: t.getStyles('item', n, e.props.style),
                                tabIndex: t.state.isOpen ? 0 : -1
                              };
                              return s.default.cloneElement(e, r);
                            }
                          })
                        )
                      ),
                      !1 !== this.props.customCrossIcon &&
                        s.default.createElement(
                          'div',
                          { style: this.getStyles('closeButton') },
                          s.default.createElement(f.default, {
                            onClick: function() {
                              return t.toggleMenu();
                            },
                            styles: this.props.styles,
                            customIcon: this.props.customCrossIcon,
                            className: this.props.crossButtonClassName,
                            crossClassName: this.props.crossClassName,
                            tabIndex: this.state.isOpen ? 0 : -1
                          })
                        )
                    ),
                    !1 !== this.props.customBurgerIcon &&
                      s.default.createElement(
                        'div',
                        { style: this.getStyles('burgerIcon') },
                        s.default.createElement(d.default, {
                          onClick: function() {
                            return t.toggleMenu();
                          },
                          styles: this.props.styles,
                          customIcon: this.props.customBurgerIcon,
                          className: this.props.burgerButtonClassName,
                          barClassName: this.props.burgerBarClassName,
                          onIconStateChange: this.props.onIconStateChange
                        })
                      )
                  );
                }
              }
            ]),
            n
          );
        })(o.Component);
        return (
          (t.propTypes = {
            bodyClassName: u.default.string,
            burgerBarClassName: u.default.string,
            burgerButtonClassName: u.default.string,
            className: u.default.string,
            crossButtonClassName: u.default.string,
            crossClassName: u.default.string,
            customBurgerIcon: u.default.oneOfType([
              u.default.element,
              u.default.oneOf([!1])
            ]),
            customCrossIcon: u.default.oneOfType([
              u.default.element,
              u.default.oneOf([!1])
            ]),
            customOnKeyDown: u.default.func,
            disableAutoFocus: u.default.bool,
            disableCloseOnEsc: u.default.bool,
            disableOverlayClick: u.default.oneOfType([u.default.bool, u.default.func]),
            htmlClassName: u.default.string,
            id: u.default.string,
            isOpen: u.default.bool,
            itemClassName: u.default.string,
            itemListClassName: u.default.string,
            menuClassName: u.default.string,
            morphShapeClassName: u.default.string,
            noOverlay: u.default.bool,
            noTransition: u.default.bool,
            onStateChange: u.default.func,
            outerContainerId:
              e && e.outerContainer ? u.default.string.isRequired : u.default.string,
            overlayClassName: u.default.string,
            pageWrapId: e && e.pageWrap ? u.default.string.isRequired : u.default.string,
            right: u.default.bool,
            styles: u.default.object,
            width: u.default.oneOfType([u.default.number, u.default.string]),
            onIconHoverChange: u.default.func
          }),
          (t.defaultProps = {
            bodyClassName: '',
            burgerBarClassName: '',
            burgerButtonClassName: '',
            className: '',
            crossButtonClassName: '',
            crossClassName: '',
            disableAutoFocus: !1,
            disableCloseOnEsc: !1,
            htmlClassName: '',
            id: '',
            itemClassName: '',
            itemListClassName: '',
            menuClassName: '',
            morphShapeClassName: '',
            noOverlay: !1,
            noTransition: !1,
            onStateChange: function() {},
            outerContainerId: '',
            overlayClassName: '',
            pageWrapId: '',
            styles: {},
            width: 300,
            onIconHoverChange: function() {}
          }),
          t
        );
      }),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/bubble.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(n('../../node_modules/react-burger-menu/lib/snapsvgImporter.js')),
        i = r(n('../../node_modules/react-burger-menu/lib/menuFactory.js')),
        o = {
          svg: {
            lib: a.default,
            pathInitial:
              'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
            pathOpen:
              'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
            animate: function(e) {
              var t = 0,
                n = this.pathOpen.split(';'),
                r = n.length,
                a = window.mina;
              !(function i() {
                t > r - 1 ||
                  (e.animate(
                    { path: n[t] },
                    0 === t ? 400 : 500,
                    0 === t ? a.easein : a.elastic,
                    function() {
                      i();
                    }
                  ),
                  t++);
              })();
            }
          },
          morphShape: function(e, t, n) {
            return {
              position: 'absolute',
              width: '100%',
              height: '100%',
              right: n ? 'inherit' : 0,
              left: n ? 0 : 'inherit',
              MozTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
              MsTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
              OTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
              WebkitTransform: n ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transform: n ? 'rotateY(180deg)' : 'rotateY(0deg)'
            };
          },
          menuWrap: function(e, t, n) {
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: e ? 'transform 0.4s 0s' : 'transform 0.4s'
            };
          },
          menu: function(e, t, n) {
            return (
              (t -= 140),
              {
                position: 'fixed',
                MozTransform: e
                  ? ''
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                MsTransform: e
                  ? ''
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                OTransform: e
                  ? ''
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                WebkitTransform: e
                  ? ''
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                transform: e
                  ? ''
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                transition: e
                  ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                  : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
                opacity: e ? 1 : 0
              }
            );
          },
          item: function(e, t, n, r) {
            return (
              (t -= 140),
              {
                MozTransform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                MsTransform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                OTransform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                WebkitTransform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                transform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                transition: e
                  ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s'
                  : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
                opacity: e ? 1 : 0
              }
            );
          },
          closeButton: function(e, t, n) {
            return (
              (t -= 140),
              {
                MozTransform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                MsTransform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                OTransform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                WebkitTransform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                transform: e
                  ? 'translate3d(0, 0, 0)'
                  : n
                  ? 'translate3d(' + t + ', 0, 0)'
                  : 'translate3d(-' + t + ', 0, 0)',
                transition: e
                  ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                  : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
                opacity: e ? 1 : 0
              }
            );
          }
        };
      (t.default = (0, i.default)(o)), (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/elastic.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(n('../../node_modules/react-burger-menu/lib/snapsvgImporter.js')),
        i = r(n('../../node_modules/react-burger-menu/lib/menuFactory.js')),
        o = {
          svg: {
            lib: a.default,
            pathInitial:
              'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
            pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
            animate: function(e) {
              e.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
            }
          },
          morphShape: function(e, t, n) {
            return {
              position: 'absolute',
              width: 120,
              height: '100%',
              right: n ? 'inherit' : 0,
              left: n ? 0 : 'inherit',
              MozTransform: n ? 'rotateY(180deg)' : '',
              MsTransform: n ? 'rotateY(180deg)' : '',
              OTransform: n ? 'rotateY(180deg)' : '',
              WebkitTransform: n ? 'rotateY(180deg)' : '',
              transform: n ? 'rotateY(180deg)' : ''
            };
          },
          menuWrap: function(e, t, n) {
            return {
              MozTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: e
                ? 'translate3d(0, 0, 0)'
                : n
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: 'all 0.3s'
            };
          },
          menu: function(e, t, n) {
            return {
              position: 'fixed',
              right: n ? 0 : 'inherit',
              width: 180,
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
              overflow: 'visible'
            };
          },
          itemList: function(e, t, n) {
            if (n)
              return {
                position: 'relative',
                left: '-110px',
                width: '170%',
                overflow: 'auto'
              };
          },
          pageWrap: function(e, t, n) {
            return {
              MozTransform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              MsTransform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              OTransform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              WebkitTransform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transform: e
                ? ''
                : n
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transition: e ? 'all 0.3s' : 'all 0.3s 0.1s'
            };
          },
          outerContainer: function(e) {
            return { overflow: e ? '' : 'hidden' };
          }
        };
      (t.default = (0, i.default)(o)), (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/fallDown.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        a = n('../../node_modules/react-burger-menu/lib/menuFactory.js'),
        i = (r = a) && r.__esModule ? r : { default: r };
      (t.default = (0, i.default)({
        menuWrap: function(e) {
          return {
            MozTransform: e ? '' : 'translate3d(0, -100%, 0)',
            MsTransform: e ? '' : 'translate3d(0, -100%, 0)',
            OTransform: e ? '' : 'translate3d(0, -100%, 0)',
            WebkitTransform: e ? '' : 'translate3d(0, -100%, 0)',
            transform: e ? '' : 'translate3d(0, -100%, 0)',
            transition: 'all 0.5s ease-in-out'
          };
        },
        pageWrap: function(e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transition: 'all 0.5s'
          };
        },
        outerContainer: function(e) {
          return {
            perspective: '1500px',
            perspectiveOrigin: '0% 50%',
            overflow: e ? '' : 'hidden'
          };
        }
      })),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/push.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        a = n('../../node_modules/react-burger-menu/lib/menuFactory.js'),
        i = (r = a) && r.__esModule ? r : { default: r };
      (t.default = (0, i.default)({
        pageWrap: function(e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transition: 'all 0.5s'
          };
        },
        outerContainer: function(e) {
          return { overflow: e ? '' : 'hidden' };
        }
      })),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/pushRotate.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        a = n('../../node_modules/react-burger-menu/lib/menuFactory.js'),
        i = (r = a) && r.__esModule ? r : { default: r };
      (t.default = (0, i.default)({
        pageWrap: function(e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            transform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + t + ', 0, 0) rotateY(-15deg)',
            transformOrigin: n ? '100% 50%' : '0% 50%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s'
          };
        },
        outerContainer: function(e) {
          return { perspective: '1500px', overflow: e ? '' : 'hidden' };
        }
      })),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/reveal.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        a = n('../../node_modules/react-burger-menu/lib/menuFactory.js'),
        i = (r = a) && r.__esModule ? r : { default: r };
      (t.default = (0, i.default)({
        menuWrap: function(e, t, n) {
          return {
            visibility: e ? 'visible' : 'hidden',
            MozTransform: 'translate3d(0, 0, 0)',
            MsTransform: 'translate3d(0, 0, 0)',
            OTransform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            zIndex: 1e3
          };
        },
        overlay: function(e, t, n) {
          return {
            zIndex: 1400,
            MozTransform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: e
              ? n
                ? 'translate3d(-' + t + ', 0, 0)'
                : 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.5s',
            visibility: e ? 'visible' : 'hidden'
          };
        },
        pageWrap: function(e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transform: e
              ? ''
              : n
              ? 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(' + t + ', 0, 0)',
            transition: 'all 0.5s',
            zIndex: 1200,
            position: 'relative'
          };
        },
        burgerIcon: function(e, t, n) {
          return {
            MozTransform: e
              ? n
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: e
              ? n
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: e
              ? n
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: e
              ? n
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: e
              ? n
                ? 'translate3d(' + t + ', 0, 0)'
                : 'translate3d(-' + t + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.1s',
            position: 'relative',
            zIndex: 1300
          };
        },
        outerContainer: function(e) {
          return { overflow: e ? '' : 'hidden' };
        }
      })),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/scaleDown.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        a = n('../../node_modules/react-burger-menu/lib/menuFactory.js'),
        i = (r = a) && r.__esModule ? r : { default: r };
      (t.default = (0, i.default)({
        pageWrap: function(e, t) {
          return {
            MozTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            MsTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            OTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            WebkitTransform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            transform: e ? '' : 'translate3d(0, 0, -' + t + ')',
            transformOrigin: '100%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s'
          };
        },
        outerContainer: function() {
          return { perspective: '1500px' };
        }
      })),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/scaleRotate.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        a = n('../../node_modules/react-burger-menu/lib/menuFactory.js'),
        i = (r = a) && r.__esModule ? r : { default: r };
      (t.default = (0, i.default)({
        pageWrap: function(e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transform: e
              ? ''
              : n
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
            overflow: e ? '' : 'hidden'
          };
        },
        outerContainer: function(e) {
          return { perspective: '1500px', overflow: e ? '' : 'hidden' };
        }
      })),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/slide.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        a = n('../../node_modules/react-burger-menu/lib/menuFactory.js'),
        i = (r = a) && r.__esModule ? r : { default: r };
      (t.default = (0, i.default)({})), (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/menus/stack.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        a = n('../../node_modules/react-burger-menu/lib/menuFactory.js'),
        i = (r = a) && r.__esModule ? r : { default: r };
      (t.default = (0, i.default)({
        menuWrap: function(e, t, n) {
          return {
            MozTransform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            MsTransform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            OTransform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            WebkitTransform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            transform: e
              ? ''
              : n
              ? 'translate3d(' + t + ', 0, 0)'
              : 'translate3d(-' + t + ', 0, 0)',
            transition: e
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
          };
        },
        item: function(e, t, n, r) {
          return {
            MozTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            MsTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            OTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            WebkitTransform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            transform: e ? '' : 'translate3d(0, ' + 500 * r + 'px, 0)',
            transition: e
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)'
          };
        }
      })),
        (e.exports = t.default);
    },
    '../../node_modules/react-burger-menu/lib/snapsvgImporter.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function() {
          var e = void 0;
          try {
            e = n('../../node_modules/snapsvg-cjs/dist/snap.svg-cjs.js');
          } finally {
            return e;
          }
        }),
        (e.exports = t.default);
    },
    '../../node_modules/snapsvg-cjs/dist/snap.svg-cjs.js': function(e, t, n) {
      window.eve = n('../../node_modules/eve/eve.js');
      var r = (function(e) {
          var t,
            n = {},
            r =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function(e) {
                return setTimeout(e, 16, new Date().getTime()), !0;
              },
            a =
              Array.isArray ||
              function(e) {
                return (
                  e instanceof Array ||
                  '[object Array]' == Object.prototype.toString.call(e)
                );
              },
            i = 0,
            o = 'M' + (+new Date()).toString(36),
            s =
              Date.now ||
              function() {
                return +new Date();
              },
            l = function(e) {
              var t = this;
              if (null == e) return t.s;
              var n = t.s - e;
              (t.b += t.dur * n), (t.B += t.dur * n), (t.s = e);
            },
            u = function(e) {
              if (null == e) return this.spd;
              this.spd = e;
            },
            c = function(e) {
              var t = this;
              if (null == e) return t.dur;
              (t.s = (t.s * e) / t.dur), (t.dur = e);
            },
            d = function() {
              var t = this;
              delete n[t.id], t.update(), e('mina.stop.' + t.id, t);
            },
            f = function() {
              var e = this;
              e.pdif || (delete n[e.id], e.update(), (e.pdif = e.get() - e.b));
            },
            p = function() {
              var e = this;
              e.pdif && ((e.b = e.get() - e.pdif), delete e.pdif, (n[e.id] = e), h());
            },
            m = function() {
              var e,
                t = this;
              if (a(t.start)) {
                e = [];
                for (var n = 0, r = t.start.length; n < r; n++)
                  e[n] = +t.start[n] + (t.end[n] - t.start[n]) * t.easing(t.s);
              } else e = +t.start + (t.end - t.start) * t.easing(t.s);
              t.set(e);
            },
            h = function(a) {
              if (a) {
                var i = 0;
                for (var o in n)
                  if (n.hasOwnProperty(o)) {
                    var s = n[o],
                      l = s.get();
                    i++,
                      (s.s = (l - s.b) / (s.dur / s.spd)),
                      s.s >= 1 &&
                        (delete n[o],
                        (s.s = 1),
                        i--,
                        (function(t) {
                          setTimeout(function() {
                            e('mina.finish.' + t.id, t);
                          });
                        })(s)),
                      s.update();
                  }
                t = !!i && r(h);
              } else t || (t = r(h));
            },
            g = function(e, t, r, a, s, b, v) {
              var y = {
                id: o + (i++).toString(36),
                start: e,
                end: t,
                b: r,
                s: 0,
                dur: a - r,
                spd: 1,
                get: s,
                set: b,
                easing: v || g.linear,
                status: l,
                speed: u,
                duration: c,
                stop: d,
                pause: f,
                resume: p,
                update: m
              };
              n[y.id] = y;
              var x,
                w = 0;
              for (x in n) if (n.hasOwnProperty(x) && 2 == ++w) break;
              return 1 == w && h(), y;
            };
          return (
            (g.time = s),
            (g.getById = function(e) {
              return n[e] || null;
            }),
            (g.linear = function(e) {
              return e;
            }),
            (g.easeout = function(e) {
              return Math.pow(e, 1.7);
            }),
            (g.easein = function(e) {
              return Math.pow(e, 0.48);
            }),
            (g.easeinout = function(e) {
              if (1 == e) return 1;
              if (0 == e) return 0;
              var t = 0.48 - e / 1.04,
                n = Math.sqrt(0.1734 + t * t),
                r = n - t,
                a = -n - t,
                i =
                  Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1) +
                  Math.pow(Math.abs(a), 1 / 3) * (a < 0 ? -1 : 1) +
                  0.5;
              return 3 * (1 - i) * i * i + i * i * i;
            }),
            (g.backin = function(e) {
              if (1 == e) return 1;
              var t = 1.70158;
              return e * e * ((t + 1) * e - t);
            }),
            (g.backout = function(e) {
              if (0 == e) return 0;
              var t = 1.70158;
              return (e -= 1) * e * ((t + 1) * e + t) + 1;
            }),
            (g.elastic = function(e) {
              return e == !!e
                ? e
                : Math.pow(2, -10 * e) * Math.sin(((e - 0.075) * (2 * Math.PI)) / 0.3) +
                    1;
            }),
            (g.bounce = function(e) {
              var t = 7.5625,
                n = 2.75;
              return e < 1 / n
                ? t * e * e
                : e < 2 / n
                ? t * (e -= 1.5 / n) * e + 0.75
                : e < 2.5 / n
                ? t * (e -= 2.25 / n) * e + 0.9375
                : t * (e -= 2.625 / n) * e + 0.984375;
            }),
            (window.mina = g),
            g
          );
        })('undefined' == typeof eve ? function() {} : eve),
        a = (function(e) {
          function t(e, r) {
            if (e) {
              if (e.nodeType) return Y(e);
              if (S(e, 'array') && t.set) return t.set.apply(t, e);
              if (e instanceof V) return e;
              if (null == r)
                try {
                  return Y((e = n.doc.querySelector(String(e))));
                } catch (e) {
                  return null;
                }
            }
            return new U((e = null == e ? '100%' : e), (r = null == r ? '100%' : r));
          }
          (t.version = '0.5.1'),
            (t.toString = function() {
              return 'Snap v' + this.version;
            }),
            (t._ = {});
          var n = { win: e.window, doc: e.window.document };
          t._.glob = n;
          var r,
            a,
            i = 'hasOwnProperty',
            o = String,
            s = parseFloat,
            l = parseInt,
            u = Math,
            c = u.max,
            d = u.min,
            f = u.abs,
            p = (u.pow, u.PI),
            m = (u.round, Object.prototype.toString),
            h = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
            b = ((t._.separator = /[,\s]+/), /[\s]*,[\s]*/),
            v = { hs: 1, rg: 1 },
            y = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            x = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            w = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
            E = 0,
            j = 'S' + (+new Date()).toString(36),
            C = function(e) {
              return (e && e.type ? e.type : '') + j + (E++).toString(36);
            },
            O = 'http://www.w3.org/1999/xlink',
            _ = 'http://www.w3.org/2000/svg',
            F = {};
          t.url = function(e) {
            return "url('#" + e + "')";
          };
          function T(e, t) {
            if (t) {
              if (
                ('#text' == e && (e = n.doc.createTextNode(t.text || t['#text'] || '')),
                '#comment' == e && (e = n.doc.createComment(t.text || t['#text'] || '')),
                'string' == typeof e && (e = T(e)),
                'string' == typeof t)
              )
                return 1 == e.nodeType
                  ? 'xlink:' == t.substring(0, 6)
                    ? e.getAttributeNS(O, t.substring(6))
                    : 'xml:' == t.substring(0, 4)
                    ? e.getAttributeNS(_, t.substring(4))
                    : e.getAttribute(t)
                  : 'text' == t
                  ? e.nodeValue
                  : null;
              if (1 == e.nodeType) {
                for (var r in t)
                  if (t[i](r)) {
                    var a = o(t[r]);
                    a
                      ? 'xlink:' == r.substring(0, 6)
                        ? e.setAttributeNS(O, r.substring(6), a)
                        : 'xml:' == r.substring(0, 4)
                        ? e.setAttributeNS(_, r.substring(4), a)
                        : e.setAttribute(r, a)
                      : e.removeAttribute(r);
                  }
              } else 'text' in t && (e.nodeValue = t.text);
            } else e = n.doc.createElementNS(_, e);
            return e;
          }
          function S(e, t) {
            return 'finite' == (t = o.prototype.toLowerCase.call(t))
              ? isFinite(e)
              : !(
                  'array' != t ||
                  !(e instanceof Array || (Array.isArray && Array.isArray(e)))
                ) ||
                  ('null' == t && null === e) ||
                    (t == typeof e && null !== e) ||
                    ('object' == t && e === Object(e)) ||
                    m
                      .call(e)
                      .slice(8, -1)
                      .toLowerCase() == t;
          }
          function k(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              if (e[n] === t) return e.push(e.splice(n, 1)[0]);
          }
          function N(e, t, n) {
            return function r() {
              var a = Array.prototype.slice.call(arguments, 0),
                o = a.join('␀'),
                s = (r.cache = r.cache || {}),
                l = (r.count = r.count || []);
              return s[i](o)
                ? (k(l, o), n ? n(s[o]) : s[o])
                : (l.length >= 1e3 && delete s[l.shift()],
                  l.push(o),
                  (s[o] = e.apply(t, a)),
                  n ? n(s[o]) : s[o]);
            };
          }
          function B(e) {
            return ((e % 360) * p) / 180;
          }
          (t._.$ = T),
            (t._.id = C),
            (t.format =
              ((r = /\{([^\}]+)\}/g),
              (a = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g),
              function(e, t) {
                return o(e).replace(r, function(e, n) {
                  return (function(e, t, n) {
                    var r = n;
                    return (
                      t.replace(a, function(e, t, n, a, i) {
                        (t = t || a),
                          r &&
                            (t in r && (r = r[t]),
                            'function' == typeof r && i && (r = r()));
                      }),
                      (r = (null == r || r == n ? e : r) + '')
                    );
                  })(e, n, t);
                });
              })),
            (t._.clone = function e(t) {
              if ('function' == typeof t || Object(t) !== t) return t;
              var n = new t.constructor();
              for (var r in t) t[i](r) && (n[r] = e(t[r]));
              return n;
            }),
            (t._.cacher = N),
            (t.rad = B),
            (t.deg = function(e) {
              return ((180 * e) / p) % 360;
            }),
            (t.sin = function(e) {
              return u.sin(t.rad(e));
            }),
            (t.tan = function(e) {
              return u.tan(t.rad(e));
            }),
            (t.cos = function(e) {
              return u.cos(t.rad(e));
            }),
            (t.asin = function(e) {
              return t.deg(u.asin(e));
            }),
            (t.acos = function(e) {
              return t.deg(u.acos(e));
            }),
            (t.atan = function(e) {
              return t.deg(u.atan(e));
            }),
            (t.atan2 = function(e) {
              return t.deg(u.atan2(e));
            }),
            (t.angle = function e(t, n, r, a, i, o) {
              if (null == i) {
                var s = t - r,
                  l = n - a;
                return s || l ? (180 + (180 * u.atan2(-l, -s)) / p + 360) % 360 : 0;
              }
              return e(t, n, i, o) - e(r, a, i, o);
            }),
            (t.len = function(e, n, r, a) {
              return Math.sqrt(t.len2(e, n, r, a));
            }),
            (t.len2 = function(e, t, n, r) {
              return (e - n) * (e - n) + (t - r) * (t - r);
            }),
            (t.closestPoint = function(e, t, n) {
              function r(e) {
                var r = e.x - t,
                  a = e.y - n;
                return r * r + a * a;
              }
              for (
                var a,
                  i,
                  o,
                  s,
                  l = e.node,
                  u = l.getTotalLength(),
                  c = (u / l.pathSegList.numberOfItems) * 0.125,
                  d = 1 / 0,
                  f = 0;
                f <= u;
                f += c
              )
                (s = r((o = l.getPointAtLength(f)))) < d && ((a = o), (i = f), (d = s));
              for (c *= 0.5; c > 0.5; ) {
                var p, m, h, g, b, v;
                (h = i - c) >= 0 && (b = r((p = l.getPointAtLength(h)))) < d
                  ? ((a = p), (i = h), (d = b))
                  : (g = i + c) <= u && (v = r((m = l.getPointAtLength(g)))) < d
                  ? ((a = m), (i = g), (d = v))
                  : (c *= 0.5);
              }
              return (a = { x: a.x, y: a.y, length: i, distance: Math.sqrt(d) });
            }),
            (t.is = S),
            (t.snapTo = function(e, t, n) {
              if (((n = S(n, 'finite') ? n : 10), S(e, 'array'))) {
                for (var r = e.length; r--; ) if (f(e[r] - t) <= n) return e[r];
              } else {
                var a = t % (e = +e);
                if (a < n) return t - a;
                if (a > e - n) return t - a + e;
              }
              return t;
            }),
            (t.getRGB = N(function(e) {
              if (!e || (e = o(e)).indexOf('-') + 1)
                return { r: -1, g: -1, b: -1, hex: 'none', error: 1, toString: P };
              if ('none' == e) return { r: -1, g: -1, b: -1, hex: 'none', toString: P };
              if (
                (!v[i](e.toLowerCase().substring(0, 2)) &&
                  '#' != e.charAt() &&
                  (e = A(e)),
                !e)
              )
                return { r: -1, g: -1, b: -1, hex: 'none', error: 1, toString: P };
              var n,
                r,
                a,
                f,
                p,
                m,
                g = e.match(h);
              return g
                ? (g[2] &&
                    ((a = l(g[2].substring(5), 16)),
                    (r = l(g[2].substring(3, 5), 16)),
                    (n = l(g[2].substring(1, 3), 16))),
                  g[3] &&
                    ((a = l((p = g[3].charAt(3)) + p, 16)),
                    (r = l((p = g[3].charAt(2)) + p, 16)),
                    (n = l((p = g[3].charAt(1)) + p, 16))),
                  g[4] &&
                    ((m = g[4].split(b)),
                    (n = s(m[0])),
                    '%' == m[0].slice(-1) && (n *= 2.55),
                    (r = s(m[1])),
                    '%' == m[1].slice(-1) && (r *= 2.55),
                    (a = s(m[2])),
                    '%' == m[2].slice(-1) && (a *= 2.55),
                    'rgba' == g[1].toLowerCase().slice(0, 4) && (f = s(m[3])),
                    m[3] && '%' == m[3].slice(-1) && (f /= 100)),
                  g[5]
                    ? ((m = g[5].split(b)),
                      (n = s(m[0])),
                      '%' == m[0].slice(-1) && (n /= 100),
                      (r = s(m[1])),
                      '%' == m[1].slice(-1) && (r /= 100),
                      (a = s(m[2])),
                      '%' == m[2].slice(-1) && (a /= 100),
                      ('deg' == m[0].slice(-3) || '°' == m[0].slice(-1)) && (n /= 360),
                      'hsba' == g[1].toLowerCase().slice(0, 4) && (f = s(m[3])),
                      m[3] && '%' == m[3].slice(-1) && (f /= 100),
                      t.hsb2rgb(n, r, a, f))
                    : g[6]
                    ? ((m = g[6].split(b)),
                      (n = s(m[0])),
                      '%' == m[0].slice(-1) && (n /= 100),
                      (r = s(m[1])),
                      '%' == m[1].slice(-1) && (r /= 100),
                      (a = s(m[2])),
                      '%' == m[2].slice(-1) && (a /= 100),
                      ('deg' == m[0].slice(-3) || '°' == m[0].slice(-1)) && (n /= 360),
                      'hsla' == g[1].toLowerCase().slice(0, 4) && (f = s(m[3])),
                      m[3] && '%' == m[3].slice(-1) && (f /= 100),
                      t.hsl2rgb(n, r, a, f))
                    : ((n = d(u.round(n), 255)),
                      (r = d(u.round(r), 255)),
                      (a = d(u.round(a), 255)),
                      (f = d(c(f, 0), 1)),
                      ((g = { r: n, g: r, b: a, toString: P }).hex =
                        '#' +
                        (16777216 | a | (r << 8) | (n << 16)).toString(16).slice(1)),
                      (g.opacity = S(f, 'finite') ? f : 1),
                      g))
                : { r: -1, g: -1, b: -1, hex: 'none', error: 1, toString: P };
            }, t)),
            (t.hsb = N(function(e, n, r) {
              return t.hsb2rgb(e, n, r).hex;
            })),
            (t.hsl = N(function(e, n, r) {
              return t.hsl2rgb(e, n, r).hex;
            })),
            (t.rgb = N(function(e, t, n, r) {
              if (S(r, 'finite')) {
                var a = u.round;
                return 'rgba(' + [a(e), a(t), a(n), +r.toFixed(2)] + ')';
              }
              return '#' + (16777216 | n | (t << 8) | (e << 16)).toString(16).slice(1);
            }));
          var A = function(e) {
              var t =
                  n.doc.getElementsByTagName('head')[0] ||
                  n.doc.getElementsByTagName('svg')[0],
                r = 'rgb(255, 0, 0)';
              return (A = N(function(e) {
                if ('red' == e.toLowerCase()) return r;
                (t.style.color = r), (t.style.color = e);
                var a = n.doc.defaultView
                  .getComputedStyle(t, '')
                  .getPropertyValue('color');
                return a == r ? null : a;
              }))(e);
            },
            M = function() {
              return 'hsb(' + [this.h, this.s, this.b] + ')';
            },
            D = function() {
              return 'hsl(' + [this.h, this.s, this.l] + ')';
            },
            P = function() {
              return 1 == this.opacity || null == this.opacity
                ? this.hex
                : 'rgba(' + [this.r, this.g, this.b, this.opacity] + ')';
            },
            I = function(e, n, r) {
              if (
                (null == n &&
                  S(e, 'object') &&
                  'r' in e &&
                  'g' in e &&
                  'b' in e &&
                  ((r = e.b), (n = e.g), (e = e.r)),
                null == n && S(e, string))
              ) {
                var a = t.getRGB(e);
                (e = a.r), (n = a.g), (r = a.b);
              }
              return (
                (e > 1 || n > 1 || r > 1) && ((e /= 255), (n /= 255), (r /= 255)),
                [e, n, r]
              );
            },
            z = function(e, n, r, a) {
              var i = {
                r: (e = u.round(255 * e)),
                g: (n = u.round(255 * n)),
                b: (r = u.round(255 * r)),
                opacity: S(a, 'finite') ? a : 1,
                hex: t.rgb(e, n, r),
                toString: P
              };
              return S(a, 'finite') && (i.opacity = a), i;
            };
          (t.color = function(e) {
            var n;
            return (
              S(e, 'object') && 'h' in e && 's' in e && 'b' in e
                ? ((n = t.hsb2rgb(e)),
                  (e.r = n.r),
                  (e.g = n.g),
                  (e.b = n.b),
                  (e.opacity = 1),
                  (e.hex = n.hex))
                : S(e, 'object') && 'h' in e && 's' in e && 'l' in e
                ? ((n = t.hsl2rgb(e)),
                  (e.r = n.r),
                  (e.g = n.g),
                  (e.b = n.b),
                  (e.opacity = 1),
                  (e.hex = n.hex))
                : (S(e, 'string') && (e = t.getRGB(e)),
                  S(e, 'object') && 'r' in e && 'g' in e && 'b' in e && !('error' in e)
                    ? ((n = t.rgb2hsl(e)),
                      (e.h = n.h),
                      (e.s = n.s),
                      (e.l = n.l),
                      (n = t.rgb2hsb(e)),
                      (e.v = n.b))
                    : (((e = { hex: 'none' }).r = e.g = e.b = e.h = e.s = e.v = e.l = -1),
                      (e.error = 1))),
              (e.toString = P),
              e
            );
          }),
            (t.hsb2rgb = function(e, t, n, r) {
              var a, i, o, s, l;
              return (
                S(e, 'object') &&
                  'h' in e &&
                  's' in e &&
                  'b' in e &&
                  ((n = e.b), (t = e.s), (r = e.o), (e = e.h)),
                (s = (l = n * t) * (1 - f(((e = ((e *= 360) % 360) / 60) % 2) - 1))),
                (a = i = o = n - l),
                z(
                  (a += [l, s, 0, 0, s, l][(e = ~~e)]),
                  (i += [s, l, l, s, 0, 0][e]),
                  (o += [0, 0, s, l, l, s][e]),
                  r
                )
              );
            }),
            (t.hsl2rgb = function(e, t, n, r) {
              var a, i, o, s, l;
              return (
                S(e, 'object') &&
                  'h' in e &&
                  's' in e &&
                  'l' in e &&
                  ((n = e.l), (t = e.s), (e = e.h)),
                (e > 1 || t > 1 || n > 1) && ((e /= 360), (t /= 100), (n /= 100)),
                (s =
                  (l = 2 * t * (n < 0.5 ? n : 1 - n)) *
                  (1 - f(((e = ((e *= 360) % 360) / 60) % 2) - 1))),
                (a = i = o = n - l / 2),
                z(
                  (a += [l, s, 0, 0, s, l][(e = ~~e)]),
                  (i += [s, l, l, s, 0, 0][e]),
                  (o += [0, 0, s, l, l, s][e]),
                  r
                )
              );
            }),
            (t.rgb2hsb = function(e, t, n) {
              var r, a;
              return (
                (e = (n = I(e, t, n))[0]),
                (t = n[1]),
                (n = n[2]),
                {
                  h:
                    ((((0 == (a = (r = c(e, t, n)) - d(e, t, n))
                      ? null
                      : r == e
                      ? (t - n) / a
                      : r == t
                      ? (n - e) / a + 2
                      : (e - t) / a + 4) +
                      360) %
                      6) *
                      60) /
                    360,
                  s: 0 == a ? 0 : a / r,
                  b: r,
                  toString: M
                }
              );
            }),
            (t.rgb2hsl = function(e, t, n) {
              var r, a, i, o;
              return (
                (e = (n = I(e, t, n))[0]),
                (t = n[1]),
                (n = n[2]),
                (r = ((a = c(e, t, n)) + (i = d(e, t, n))) / 2),
                {
                  h:
                    ((((0 == (o = a - i)
                      ? null
                      : a == e
                      ? (t - n) / o
                      : a == t
                      ? (n - e) / o + 2
                      : (e - t) / o + 4) +
                      360) %
                      6) *
                      60) /
                    360,
                  s: 0 == o ? 0 : r < 0.5 ? o / (2 * r) : o / (2 - 2 * r),
                  l: r,
                  toString: D
                }
              );
            }),
            (t.parsePathString = function(e) {
              if (!e) return null;
              var n = t.path(e);
              if (n.arr) return t.path.clone(n.arr);
              var r = {
                  a: 7,
                  c: 6,
                  o: 2,
                  h: 1,
                  l: 2,
                  m: 2,
                  r: 4,
                  q: 4,
                  s: 4,
                  t: 2,
                  v: 1,
                  u: 3,
                  z: 0
                },
                a = [];
              return (
                S(e, 'array') && S(e[0], 'array') && (a = t.path.clone(e)),
                a.length ||
                  o(e).replace(y, function(e, t, n) {
                    var i = [],
                      o = t.toLowerCase();
                    if (
                      (n.replace(w, function(e, t) {
                        t && i.push(+t);
                      }),
                      'm' == o &&
                        i.length > 2 &&
                        (a.push([t].concat(i.splice(0, 2))),
                        (o = 'l'),
                        (t = 'm' == t ? 'l' : 'L')),
                      'o' == o && 1 == i.length && a.push([t, i[0]]),
                      'r' == o)
                    )
                      a.push([t].concat(i));
                    else
                      for (
                        ;
                        i.length >= r[o] && (a.push([t].concat(i.splice(0, r[o]))), r[o]);

                      );
                  }),
                (a.toString = t.path.toString),
                (n.arr = t.path.clone(a)),
                a
              );
            });
          var R = (t.parseTransformString = function(e) {
            if (!e) return null;
            var n = [];
            return (
              S(e, 'array') && S(e[0], 'array') && (n = t.path.clone(e)),
              n.length ||
                o(e).replace(x, function(e, t, r) {
                  var a = [];
                  t.toLowerCase();
                  r.replace(w, function(e, t) {
                    t && a.push(+t);
                  }),
                    n.push([t].concat(a));
                }),
              (n.toString = t.path.toString),
              n
            );
          });
          (t._.svgTransform2string = function(e) {
            var t = [];
            return (
              (e = e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(e, n, r) {
                return (
                  (r = r.split(/\s*,\s*|\s+/)),
                  'rotate' == n && 1 == r.length && r.push(0, 0),
                  'scale' == n &&
                    (r.length > 2 ? (r = r.slice(0, 2)) : 2 == r.length && r.push(0, 0),
                    1 == r.length && r.push(r[0], 0, 0)),
                  'skewX' == n
                    ? t.push(['m', 1, 0, u.tan(B(r[0])), 1, 0, 0])
                    : 'skewY' == n
                    ? t.push(['m', 1, u.tan(B(r[0])), 0, 1, 0, 0])
                    : t.push([n.charAt(0)].concat(r)),
                  e
                );
              })),
              t
            );
          }),
            (t._.rgTransform = /^[a-z][\s]*-?\.?\d/i),
            (t._.transform2matrix = function(e, n) {
              var r = R(e),
                a = new t.Matrix();
              if (r)
                for (var i = 0, s = r.length; i < s; i++) {
                  var l,
                    u,
                    c,
                    d,
                    f,
                    p = r[i],
                    m = p.length,
                    h = o(p[0]).toLowerCase(),
                    g = p[0] != h,
                    b = g ? a.invert() : 0;
                  't' == h && 2 == m
                    ? a.translate(p[1], 0)
                    : 't' == h && 3 == m
                    ? g
                      ? ((l = b.x(0, 0)),
                        (u = b.y(0, 0)),
                        (c = b.x(p[1], p[2])),
                        (d = b.y(p[1], p[2])),
                        a.translate(c - l, d - u))
                      : a.translate(p[1], p[2])
                    : 'r' == h
                    ? 2 == m
                      ? ((f = f || n),
                        a.rotate(p[1], f.x + f.width / 2, f.y + f.height / 2))
                      : 4 == m &&
                        (g
                          ? ((c = b.x(p[2], p[3])),
                            (d = b.y(p[2], p[3])),
                            a.rotate(p[1], c, d))
                          : a.rotate(p[1], p[2], p[3]))
                    : 's' == h
                    ? 2 == m || 3 == m
                      ? ((f = f || n),
                        a.scale(p[1], p[m - 1], f.x + f.width / 2, f.y + f.height / 2))
                      : 4 == m
                      ? g
                        ? ((c = b.x(p[2], p[3])),
                          (d = b.y(p[2], p[3])),
                          a.scale(p[1], p[1], c, d))
                        : a.scale(p[1], p[1], p[2], p[3])
                      : 5 == m &&
                        (g
                          ? ((c = b.x(p[3], p[4])),
                            (d = b.y(p[3], p[4])),
                            a.scale(p[1], p[2], c, d))
                          : a.scale(p[1], p[2], p[3], p[4]))
                    : 'm' == h && 7 == m && a.add(p[1], p[2], p[3], p[4], p[5], p[6]);
                }
              return a;
            }),
            (t._unit2px = function(e, t, n) {
              var r = L(e).node,
                a = {},
                i = r.querySelector('.svg---mgr');
              i ||
                ((i = T('rect')),
                T(i, {
                  x: -9e9,
                  y: -9e9,
                  width: 10,
                  height: 10,
                  class: 'svg---mgr',
                  fill: 'none'
                }),
                r.appendChild(i));
              function o(e) {
                if (null == e) return '';
                if (e == +e) return e;
                T(i, { width: e });
                try {
                  return i.getBBox().width;
                } catch (e) {
                  return 0;
                }
              }
              function s(e) {
                if (null == e) return '';
                if (e == +e) return e;
                T(i, { height: e });
                try {
                  return i.getBBox().height;
                } catch (e) {
                  return 0;
                }
              }
              function l(r, i) {
                null == t
                  ? (a[r] = i(e.attr(r) || 0))
                  : r == t && (a = i(null == n ? e.attr(r) || 0 : n));
              }
              switch (e.type) {
                case 'rect':
                  l('rx', o), l('ry', s);
                case 'image':
                  l('width', o), l('height', s);
                case 'text':
                  l('x', o), l('y', s);
                  break;
                case 'circle':
                  l('cx', o), l('cy', s), l('r', o);
                  break;
                case 'ellipse':
                  l('cx', o), l('cy', s), l('rx', o), l('ry', s);
                  break;
                case 'line':
                  l('x1', o), l('x2', o), l('y1', s), l('y2', s);
                  break;
                case 'marker':
                  l('refX', o), l('markerWidth', o), l('refY', s), l('markerHeight', s);
                  break;
                case 'radialGradient':
                  l('fx', o), l('fy', s);
                  break;
                case 'tspan':
                  l('dx', o), l('dy', s);
                  break;
                default:
                  l(t, o);
              }
              return r.removeChild(i), a;
            });
          n.doc.contains || n.doc.compareDocumentPosition;
          function L(e) {
            return (
              (e.node.ownerSVGElement && Y(e.node.ownerSVGElement)) || t.select('svg')
            );
          }
          function W(e) {
            S(e, 'array') || (e = Array.prototype.slice.call(arguments, 0));
            for (var t = 0, n = 0, r = this.node; this[t]; ) delete this[t++];
            for (t = 0; t < e.length; t++)
              'set' == e[t].type
                ? e[t].forEach(function(e) {
                    r.appendChild(e.node);
                  })
                : r.appendChild(e[t].node);
            var a = r.childNodes;
            for (t = 0; t < a.length; t++) this[n++] = Y(a[t]);
            return this;
          }
          function V(e) {
            if (e.snap in F) return F[e.snap];
            var t;
            try {
              t = e.ownerSVGElement;
            } catch (e) {}
            (this.node = e),
              t && (this.paper = new U(t)),
              (this.type = e.tagName || e.nodeName);
            var n = (this.id = C(this));
            if (
              ((this.anims = {}),
              (this._ = { transform: [] }),
              (e.snap = n),
              (F[n] = this),
              'g' == this.type && (this.add = W),
              this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 })
            )
              for (var r in U.prototype) U.prototype[i](r) && (this[r] = U.prototype[r]);
          }
          function q(e) {
            this.node = e;
          }
          function G(e, t) {
            var n = T(e);
            return t.appendChild(n), Y(n);
          }
          function U(e, t) {
            var r,
              a,
              o,
              s = U.prototype;
            if (e && e.tagName && 'svg' == e.tagName.toLowerCase()) {
              if (e.snap in F) return F[e.snap];
              var l = e.ownerDocument;
              for (var u in ((r = new V(e)),
              (a = e.getElementsByTagName('desc')[0]),
              (o = e.getElementsByTagName('defs')[0]),
              a ||
                ((a = T('desc')).appendChild(l.createTextNode('Created with Snap')),
                r.node.appendChild(a)),
              o || ((o = T('defs')), r.node.appendChild(o)),
              (r.defs = o),
              s))
                s[i](u) && (r[u] = s[u]);
              r.paper = r.root = r;
            } else
              T((r = G('svg', n.doc.body)).node, {
                height: t,
                version: 1.1,
                width: e,
                xmlns: _
              });
            return r;
          }
          function Y(e) {
            return e
              ? e instanceof V || e instanceof q
                ? e
                : e.tagName && 'svg' == e.tagName.toLowerCase()
                ? new U(e)
                : e.tagName &&
                  'object' == e.tagName.toLowerCase() &&
                  'image/svg+xml' == e.type
                ? new U(e.contentDocument.getElementsByTagName('svg')[0])
                : new V(e)
              : e;
          }
          (t._.getSomeDefs = function(e) {
            var n =
                (e.node.ownerSVGElement && Y(e.node.ownerSVGElement)) ||
                (e.node.parentNode && Y(e.node.parentNode)) ||
                t.select('svg') ||
                t(0, 0),
              r = n.select('defs'),
              a = null != r && r.node;
            return a || (a = G('defs', n.node).node), a;
          }),
            (t._.getSomeSVG = L),
            (t.select = function(e) {
              return (e = o(e).replace(/([^\\]):/g, '$1\\:')), Y(n.doc.querySelector(e));
            }),
            (t.selectAll = function(e) {
              for (
                var r = n.doc.querySelectorAll(e), a = (t.set || Array)(), i = 0;
                i < r.length;
                i++
              )
                a.push(Y(r[i]));
              return a;
            }),
            setInterval(function() {
              for (var e in F)
                if (F[i](e)) {
                  var t = F[e],
                    n = t.node;
                  (('svg' != t.type && !n.ownerSVGElement) ||
                    ('svg' == t.type &&
                      (!n.parentNode ||
                        ('ownerSVGElement' in n.parentNode && !n.ownerSVGElement)))) &&
                    delete F[e];
                }
            }, 1e4),
            (V.prototype.attr = function(e, t) {
              var n = this,
                r = n.node;
              if (!e) {
                if (1 != r.nodeType) return { text: r.nodeValue };
                for (var a = r.attributes, o = {}, s = 0, l = a.length; s < l; s++)
                  o[a[s].nodeName] = a[s].nodeValue;
                return o;
              }
              if (S(e, 'string')) {
                if (!(arguments.length > 1))
                  return eve('snap.util.getattr.' + e, n).firstDefined();
                var u = {};
                (u[e] = t), (e = u);
              }
              for (var c in e) e[i](c) && eve('snap.util.attr.' + c, n, e[c]);
              return n;
            }),
            (t.parse = function(e) {
              var t = n.doc.createDocumentFragment(),
                r = !0,
                a = n.doc.createElement('div');
              if (
                ((e = o(e)).match(/^\s*<\s*svg(?:\s|>)/) ||
                  ((e = '<svg>' + e + '</svg>'), (r = !1)),
                (a.innerHTML = e),
                (e = a.getElementsByTagName('svg')[0]))
              )
                if (r) t = e;
                else for (; e.firstChild; ) t.appendChild(e.firstChild);
              return new q(t);
            }),
            (t.fragment = function() {
              for (
                var e = Array.prototype.slice.call(arguments, 0),
                  r = n.doc.createDocumentFragment(),
                  a = 0,
                  i = e.length;
                a < i;
                a++
              ) {
                var o = e[a];
                o.node && o.node.nodeType && r.appendChild(o.node),
                  o.nodeType && r.appendChild(o),
                  'string' == typeof o && r.appendChild(t.parse(o).node);
              }
              return new q(r);
            }),
            (t._.make = G),
            (t._.wrap = Y),
            (U.prototype.el = function(e, t) {
              var n = G(e, this.node);
              return t && n.attr(t), n;
            }),
            (V.prototype.children = function() {
              for (var e = [], n = this.node.childNodes, r = 0, a = n.length; r < a; r++)
                e[r] = t(n[r]);
              return e;
            }),
            (V.prototype.toJSON = function() {
              var e = [];
              return (
                (function e(t, n) {
                  for (var r = 0, a = t.length; r < a; r++) {
                    var i = { type: t[r].type, attr: t[r].attr() },
                      o = t[r].children();
                    n.push(i), o.length && e(o, (i.childNodes = []));
                  }
                })([this], e),
                e[0]
              );
            }),
            eve.on('snap.util.getattr', function() {
              var e = eve.nt(),
                t = (e = e.substring(e.lastIndexOf('.') + 1)).replace(/[A-Z]/g, function(
                  e
                ) {
                  return '-' + e.toLowerCase();
                });
              return H[i](t)
                ? this.node.ownerDocument.defaultView
                    .getComputedStyle(this.node, null)
                    .getPropertyValue(t)
                : T(this.node, e);
            });
          var H = {
            'alignment-baseline': 0,
            'baseline-shift': 0,
            clip: 0,
            'clip-path': 0,
            'clip-rule': 0,
            color: 0,
            'color-interpolation': 0,
            'color-interpolation-filters': 0,
            'color-profile': 0,
            'color-rendering': 0,
            cursor: 0,
            direction: 0,
            display: 0,
            'dominant-baseline': 0,
            'enable-background': 0,
            fill: 0,
            'fill-opacity': 0,
            'fill-rule': 0,
            filter: 0,
            'flood-color': 0,
            'flood-opacity': 0,
            font: 0,
            'font-family': 0,
            'font-size': 0,
            'font-size-adjust': 0,
            'font-stretch': 0,
            'font-style': 0,
            'font-variant': 0,
            'font-weight': 0,
            'glyph-orientation-horizontal': 0,
            'glyph-orientation-vertical': 0,
            'image-rendering': 0,
            kerning: 0,
            'letter-spacing': 0,
            'lighting-color': 0,
            marker: 0,
            'marker-end': 0,
            'marker-mid': 0,
            'marker-start': 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            'pointer-events': 0,
            'shape-rendering': 0,
            'stop-color': 0,
            'stop-opacity': 0,
            stroke: 0,
            'stroke-dasharray': 0,
            'stroke-dashoffset': 0,
            'stroke-linecap': 0,
            'stroke-linejoin': 0,
            'stroke-miterlimit': 0,
            'stroke-opacity': 0,
            'stroke-width': 0,
            'text-anchor': 0,
            'text-decoration': 0,
            'text-rendering': 0,
            'unicode-bidi': 0,
            visibility: 0,
            'word-spacing': 0,
            'writing-mode': 0
          };
          eve.on('snap.util.attr', function(e) {
            var t = eve.nt(),
              n = {};
            n[(t = t.substring(t.lastIndexOf('.') + 1))] = e;
            var r = t.replace(/-(\w)/gi, function(e, t) {
                return t.toUpperCase();
              }),
              a = t.replace(/[A-Z]/g, function(e) {
                return '-' + e.toLowerCase();
              });
            H[i](a) ? (this.node.style[r] = null == e ? '' : e) : T(this.node, n);
          }),
            U.prototype,
            (t.ajax = function(e, t, n, r) {
              var a = new XMLHttpRequest(),
                i = C();
              if (a) {
                if (S(t, 'function')) (r = n), (n = t), (t = null);
                else if (S(t, 'object')) {
                  var o = [];
                  for (var s in t)
                    t.hasOwnProperty(s) &&
                      o.push(encodeURIComponent(s) + '=' + encodeURIComponent(t[s]));
                  t = o.join('&');
                }
                return (
                  a.open(t ? 'POST' : 'GET', e, !0),
                  t &&
                    (a.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
                    a.setRequestHeader(
                      'Content-type',
                      'application/x-www-form-urlencoded'
                    )),
                  n &&
                    (eve.once('snap.ajax.' + i + '.0', n),
                    eve.once('snap.ajax.' + i + '.200', n),
                    eve.once('snap.ajax.' + i + '.304', n)),
                  (a.onreadystatechange = function() {
                    4 == a.readyState && eve('snap.ajax.' + i + '.' + a.status, r, a);
                  }),
                  4 == a.readyState ? a : (a.send(t), a)
                );
              }
            }),
            (t.load = function(e, n, r) {
              t.ajax(e, function(e) {
                var a = t.parse(e.responseText);
                r ? n.call(r, a) : n(a);
              });
            });
          return (
            (t.getElementByPoint = function(e, t) {
              this.canvas;
              var r,
                a,
                i,
                o,
                s,
                l,
                u,
                c = n.doc.elementFromPoint(e, t);
              if (n.win.opera && 'svg' == c.tagName) {
                var d =
                    ((a = (r = c).getBoundingClientRect()),
                    (i = r.ownerDocument),
                    (o = i.body),
                    (s = i.documentElement),
                    (l = s.clientTop || o.clientTop || 0),
                    (u = s.clientLeft || o.clientLeft || 0),
                    {
                      y: a.top + (g.win.pageYOffset || s.scrollTop || o.scrollTop) - l,
                      x: a.left + (g.win.pageXOffset || s.scrollLeft || o.scrollLeft) - u
                    }),
                  f = c.createSVGRect();
                (f.x = e - d.x), (f.y = t - d.y), (f.width = f.height = 1);
                var p = c.getIntersectionList(f, null);
                p.length && (c = p[p.length - 1]);
              }
              return c ? Y(c) : null;
            }),
            (t.plugin = function(e) {
              e(t, V, U, n, q);
            }),
            (n.win.Snap = t),
            t
          );
        })(window || this);
      a.plugin(function(e, t, n, r, a) {
        var i = t.prototype,
          o = e.is,
          s = String,
          l = e._unit2px,
          u = e._.$,
          c = e._.make,
          d = e._.getSomeDefs,
          f = 'hasOwnProperty',
          p = e._.wrap;
        i.getBBox = function(t) {
          if ('tspan' == this.type) return e._.box(this.node.getClientRects().item(0));
          if (!e.Matrix || !e.path) return this.node.getBBox();
          var n = this,
            r = new e.Matrix();
          if (n.removed) return e._.box();
          for (; 'use' == n.type; )
            if (
              (t ||
                (r = r.add(
                  n.transform().localMatrix.translate(n.attr('x') || 0, n.attr('y') || 0)
                )),
              n.original)
            )
              n = n.original;
            else {
              var a = n.attr('xlink:href');
              n = n.original = n.node.ownerDocument.getElementById(
                a.substring(a.indexOf('#') + 1)
              );
            }
          var i = n._,
            o = e.path.get[n.type] || e.path.get.deflt;
          try {
            return t
              ? ((i.bboxwt = o
                  ? e.path.getBBox((n.realPath = o(n)))
                  : e._.box(n.node.getBBox())),
                e._.box(i.bboxwt))
              : ((n.realPath = o(n)),
                (n.matrix = n.transform().localMatrix),
                (i.bbox = e.path.getBBox(e.path.map(n.realPath, r.add(n.matrix)))),
                e._.box(i.bbox));
          } catch (t) {
            return e._.box();
          }
        };
        var m = function() {
          return this.string;
        };
        function h(t, n) {
          if (null == n) {
            var r = !0;
            if (
              !(n =
                'linearGradient' == t.type || 'radialGradient' == t.type
                  ? t.node.getAttribute('gradientTransform')
                  : 'pattern' == t.type
                  ? t.node.getAttribute('patternTransform')
                  : t.node.getAttribute('transform'))
            )
              return new e.Matrix();
            n = e._.svgTransform2string(n);
          } else (n = e._.rgTransform.test(n) ? s(n).replace(/\.{3}|\u2026/g, t._.transform || '') : e._.svgTransform2string(n)), o(n, 'array') && (n = e.path ? e.path.toString.call(n) : s(n)), (t._.transform = n);
          var a = e._.transform2matrix(n, t.getBBox(1));
          if (r) return a;
          t.matrix = a;
        }
        (i.transform = function(t) {
          var n = this._;
          if (null == t) {
            for (
              var r,
                a = this,
                i = new e.Matrix(this.node.getCTM()),
                o = h(this),
                l = [o],
                c = new e.Matrix(),
                d = o.toTransformString(),
                f = s(o) == s(this.matrix) ? s(n.transform) : d;
              'svg' != a.type && (a = a.parent());

            )
              l.push(h(a));
            for (r = l.length; r--; ) c.add(l[r]);
            return {
              string: f,
              globalMatrix: i,
              totalMatrix: c,
              localMatrix: o,
              diffMatrix: i.clone().add(o.invert()),
              global: i.toTransformString(),
              total: c.toTransformString(),
              local: d,
              toString: m
            };
          }
          return (
            t instanceof e.Matrix
              ? ((this.matrix = t), (this._.transform = t.toTransformString()))
              : h(this, t),
            this.node &&
              ('linearGradient' == this.type || 'radialGradient' == this.type
                ? u(this.node, { gradientTransform: this.matrix })
                : 'pattern' == this.type
                ? u(this.node, { patternTransform: this.matrix })
                : u(this.node, { transform: this.matrix })),
            this
          );
        }),
          (i.parent = function() {
            return p(this.node.parentNode);
          }),
          (i.append = i.add = function(e) {
            if (e) {
              if ('set' == e.type) {
                var t = this;
                return (
                  e.forEach(function(e) {
                    t.add(e);
                  }),
                  this
                );
              }
              (e = p(e)), this.node.appendChild(e.node), (e.paper = this.paper);
            }
            return this;
          }),
          (i.appendTo = function(e) {
            return e && (e = p(e)).append(this), this;
          }),
          (i.prepend = function(e) {
            if (e) {
              if ('set' == e.type) {
                var t,
                  n = this;
                return (
                  e.forEach(function(e) {
                    t ? t.after(e) : n.prepend(e), (t = e);
                  }),
                  this
                );
              }
              var r = (e = p(e)).parent();
              this.node.insertBefore(e.node, this.node.firstChild),
                this.add && this.add(),
                (e.paper = this.paper),
                this.parent() && this.parent().add(),
                r && r.add();
            }
            return this;
          }),
          (i.prependTo = function(e) {
            return (e = p(e)).prepend(this), this;
          }),
          (i.before = function(e) {
            if ('set' == e.type) {
              var t = this;
              return (
                e.forEach(function(e) {
                  var n = e.parent();
                  t.node.parentNode.insertBefore(e.node, t.node), n && n.add();
                }),
                this.parent().add(),
                this
              );
            }
            var n = (e = p(e)).parent();
            return (
              this.node.parentNode.insertBefore(e.node, this.node),
              this.parent() && this.parent().add(),
              n && n.add(),
              (e.paper = this.paper),
              this
            );
          }),
          (i.after = function(e) {
            var t = (e = p(e)).parent();
            return (
              this.node.nextSibling
                ? this.node.parentNode.insertBefore(e.node, this.node.nextSibling)
                : this.node.parentNode.appendChild(e.node),
              this.parent() && this.parent().add(),
              t && t.add(),
              (e.paper = this.paper),
              this
            );
          }),
          (i.insertBefore = function(e) {
            e = p(e);
            var t = this.parent();
            return (
              e.node.parentNode.insertBefore(this.node, e.node),
              (this.paper = e.paper),
              t && t.add(),
              e.parent() && e.parent().add(),
              this
            );
          }),
          (i.insertAfter = function(e) {
            e = p(e);
            var t = this.parent();
            return (
              e.node.parentNode.insertBefore(this.node, e.node.nextSibling),
              (this.paper = e.paper),
              t && t.add(),
              e.parent() && e.parent().add(),
              this
            );
          }),
          (i.remove = function() {
            var e = this.parent();
            return (
              this.node.parentNode && this.node.parentNode.removeChild(this.node),
              delete this.paper,
              (this.removed = !0),
              e && e.add(),
              this
            );
          }),
          (i.select = function(e) {
            return p(this.node.querySelector(e));
          }),
          (i.selectAll = function(t) {
            for (
              var n = this.node.querySelectorAll(t), r = (e.set || Array)(), a = 0;
              a < n.length;
              a++
            )
              r.push(p(n[a]));
            return r;
          }),
          (i.asPX = function(e, t) {
            return null == t && (t = this.attr(e)), +l(this, e, t);
          }),
          (i.use = function() {
            var e,
              t = this.node.id;
            return (
              t || ((t = this.id), u(this.node, { id: t })),
              (e =
                'linearGradient' == this.type ||
                'radialGradient' == this.type ||
                'pattern' == this.type
                  ? c(this.type, this.node.parentNode)
                  : c('use', this.node.parentNode)),
              u(e.node, { 'xlink:href': '#' + t }),
              (e.original = this),
              e
            );
          }),
          (i.clone = function() {
            var t = p(this.node.cloneNode(!0));
            return (
              u(t.node, 'id') && u(t.node, { id: t.id }),
              (function(t) {
                var n,
                  r = t.selectAll('*'),
                  a = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                  i = [],
                  o = {};
                function s(t, n) {
                  var r = u(t.node, n);
                  (r = (r = r && r.match(a)) && r[2]) &&
                    '#' == r.charAt() &&
                    (r = r.substring(1)) &&
                    (o[r] = (o[r] || []).concat(function(r) {
                      var a = {};
                      (a[n] = e.url(r)), u(t.node, a);
                    }));
                }
                function l(e) {
                  var t = u(e.node, 'xlink:href');
                  t &&
                    '#' == t.charAt() &&
                    (t = t.substring(1)) &&
                    (o[t] = (o[t] || []).concat(function(t) {
                      e.attr('xlink:href', '#' + t);
                    }));
                }
                for (var c = 0, d = r.length; c < d; c++) {
                  s((n = r[c]), 'fill'),
                    s(n, 'stroke'),
                    s(n, 'filter'),
                    s(n, 'mask'),
                    s(n, 'clip-path'),
                    l(n);
                  var f = u(n.node, 'id');
                  f && (u(n.node, { id: n.id }), i.push({ old: f, id: n.id }));
                }
                for (c = 0, d = i.length; c < d; c++) {
                  var p = o[i[c].old];
                  if (p) for (var m = 0, h = p.length; m < h; m++) p[m](i[c].id);
                }
              })(t),
              t.insertAfter(this),
              t
            );
          }),
          (i.toDefs = function() {
            return d(this).appendChild(this.node), this;
          }),
          (i.pattern = i.toPattern = function(e, t, n, r) {
            var a = c('pattern', d(this));
            return (
              null == e && (e = this.getBBox()),
              o(e, 'object') &&
                'x' in e &&
                ((t = e.y), (n = e.width), (r = e.height), (e = e.x)),
              u(a.node, {
                x: e,
                y: t,
                width: n,
                height: r,
                patternUnits: 'userSpaceOnUse',
                id: a.id,
                viewBox: [e, t, n, r].join(' ')
              }),
              a.node.appendChild(this.node),
              a
            );
          }),
          (i.marker = function(e, t, n, r, a, i) {
            var s = c('marker', d(this));
            return (
              null == e && (e = this.getBBox()),
              o(e, 'object') &&
                'x' in e &&
                ((t = e.y),
                (n = e.width),
                (r = e.height),
                (a = e.refX || e.cx),
                (i = e.refY || e.cy),
                (e = e.x)),
              u(s.node, {
                viewBox: [e, t, n, r].join(' '),
                markerWidth: n,
                markerHeight: r,
                orient: 'auto',
                refX: a || 0,
                refY: i || 0,
                id: s.id
              }),
              s.node.appendChild(this.node),
              s
            );
          });
        var g = {};
        function b(e) {
          return function() {
            var t = e ? '<' + this.type : '',
              n = this.node.attributes,
              r = this.node.childNodes;
            if (e)
              for (var a = 0, i = n.length; a < i; a++)
                t += ' ' + n[a].name + '="' + n[a].value.replace(/"/g, '\\"') + '"';
            if (r.length) {
              for (e && (t += '>'), a = 0, i = r.length; a < i; a++)
                3 == r[a].nodeType
                  ? (t += r[a].nodeValue)
                  : 1 == r[a].nodeType && (t += p(r[a]).toString());
              e && (t += '</' + this.type + '>');
            } else e && (t += '/>');
            return t;
          };
        }
        (i.data = function(t, n) {
          var r = (g[this.id] = g[this.id] || {});
          if (0 == arguments.length)
            return eve('snap.data.get.' + this.id, this, r, null), r;
          if (1 == arguments.length) {
            if (e.is(t, 'object')) {
              for (var a in t) t[f](a) && this.data(a, t[a]);
              return this;
            }
            return eve('snap.data.get.' + this.id, this, r[t], t), r[t];
          }
          return (r[t] = n), eve('snap.data.set.' + this.id, this, n, t), this;
        }),
          (i.removeData = function(e) {
            return (
              null == e ? (g[this.id] = {}) : g[this.id] && delete g[this.id][e], this
            );
          }),
          (i.outerSVG = i.toString = b(1)),
          (i.innerSVG = b()),
          (i.toDataURL = function() {
            if (window && window.btoa) {
              var t = this.getBBox(),
                n = e.format(
                  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',
                  {
                    x: +t.x.toFixed(3),
                    y: +t.y.toFixed(3),
                    width: +t.width.toFixed(3),
                    height: +t.height.toFixed(3),
                    contents: this.outerSVG()
                  }
                );
              return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(n)));
            }
          }),
          (a.prototype.select = i.select),
          (a.prototype.selectAll = i.selectAll);
      }),
        a.plugin(function(e, t, n, r, a) {
          var i = Object.prototype.toString,
            o = String,
            s = Math;
          function l(e, t, n, r, a, o) {
            if (null == t && '[object SVGMatrix]' == i.call(e))
              return (
                (this.a = e.a),
                (this.b = e.b),
                (this.c = e.c),
                (this.d = e.d),
                (this.e = e.e),
                void (this.f = e.f)
              );
            null != e
              ? ((this.a = +e),
                (this.b = +t),
                (this.c = +n),
                (this.d = +r),
                (this.e = +a),
                (this.f = +o))
              : ((this.a = 1),
                (this.b = 0),
                (this.c = 0),
                (this.d = 1),
                (this.e = 0),
                (this.f = 0));
          }
          !(function(t) {
            function n(e) {
              return e[0] * e[0] + e[1] * e[1];
            }
            function r(e) {
              var t = s.sqrt(n(e));
              e[0] && (e[0] /= t), e[1] && (e[1] /= t);
            }
            (t.add = function(e, t, n, r, a, i) {
              if (e && e instanceof l) return this.add(e.a, e.b, e.c, e.d, e.e, e.f);
              var o = e * this.a + t * this.c,
                s = e * this.b + t * this.d;
              return (
                (this.e += a * this.a + i * this.c),
                (this.f += a * this.b + i * this.d),
                (this.c = n * this.a + r * this.c),
                (this.d = n * this.b + r * this.d),
                (this.a = o),
                (this.b = s),
                this
              );
            }),
              (l.prototype.multLeft = function(e, t, n, r, a, i) {
                if (e && e instanceof l)
                  return this.multLeft(e.a, e.b, e.c, e.d, e.e, e.f);
                var o = e * this.a + n * this.b,
                  s = e * this.c + n * this.d,
                  u = e * this.e + n * this.f + a;
                return (
                  (this.b = t * this.a + r * this.b),
                  (this.d = t * this.c + r * this.d),
                  (this.f = t * this.e + r * this.f + i),
                  (this.a = o),
                  (this.c = s),
                  (this.e = u),
                  this
                );
              }),
              (t.invert = function() {
                var e = this,
                  t = e.a * e.d - e.b * e.c;
                return new l(
                  e.d / t,
                  -e.b / t,
                  -e.c / t,
                  e.a / t,
                  (e.c * e.f - e.d * e.e) / t,
                  (e.b * e.e - e.a * e.f) / t
                );
              }),
              (t.clone = function() {
                return new l(this.a, this.b, this.c, this.d, this.e, this.f);
              }),
              (t.translate = function(e, t) {
                return (
                  (this.e += e * this.a + t * this.c),
                  (this.f += e * this.b + t * this.d),
                  this
                );
              }),
              (t.scale = function(e, t, n, r) {
                return (
                  null == t && (t = e),
                  (n || r) && this.translate(n, r),
                  (this.a *= e),
                  (this.b *= e),
                  (this.c *= t),
                  (this.d *= t),
                  (n || r) && this.translate(-n, -r),
                  this
                );
              }),
              (t.rotate = function(t, n, r) {
                (t = e.rad(t)), (n = n || 0), (r = r || 0);
                var a = +s.cos(t).toFixed(9),
                  i = +s.sin(t).toFixed(9);
                return this.add(a, i, -i, a, n, r), this.add(1, 0, 0, 1, -n, -r);
              }),
              (t.skewX = function(e) {
                return this.skew(e, 0);
              }),
              (t.skewY = function(e) {
                return this.skew(0, e);
              }),
              (t.skew = function(t, n) {
                (t = t || 0), (n = n || 0), (t = e.rad(t)), (n = e.rad(n));
                var r = s.tan(t).toFixed(9),
                  a = s.tan(n).toFixed(9);
                return this.add(1, a, r, 1, 0, 0);
              }),
              (t.x = function(e, t) {
                return e * this.a + t * this.c + this.e;
              }),
              (t.y = function(e, t) {
                return e * this.b + t * this.d + this.f;
              }),
              (t.get = function(e) {
                return +this[o.fromCharCode(97 + e)].toFixed(4);
              }),
              (t.toString = function() {
                return (
                  'matrix(' +
                  [
                    this.get(0),
                    this.get(1),
                    this.get(2),
                    this.get(3),
                    this.get(4),
                    this.get(5)
                  ].join() +
                  ')'
                );
              }),
              (t.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)];
              }),
              (t.determinant = function() {
                return this.a * this.d - this.b * this.c;
              }),
              (t.split = function() {
                var t = {};
                (t.dx = this.e), (t.dy = this.f);
                var a = [
                  [this.a, this.b],
                  [this.c, this.d]
                ];
                (t.scalex = s.sqrt(n(a[0]))),
                  r(a[0]),
                  (t.shear = a[0][0] * a[1][0] + a[0][1] * a[1][1]),
                  (a[1] = [a[1][0] - a[0][0] * t.shear, a[1][1] - a[0][1] * t.shear]),
                  (t.scaley = s.sqrt(n(a[1]))),
                  r(a[1]),
                  (t.shear /= t.scaley),
                  this.determinant() < 0 && (t.scalex = -t.scalex);
                var i = a[0][1],
                  o = a[1][1];
                return (
                  o < 0
                    ? ((t.rotate = e.deg(s.acos(o))),
                      i < 0 && (t.rotate = 360 - t.rotate))
                    : (t.rotate = e.deg(s.asin(i))),
                  (t.isSimple = !(
                    +t.shear.toFixed(9) ||
                    (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                  )),
                  (t.isSuperSimple =
                    !+t.shear.toFixed(9) &&
                    t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                    !t.rotate),
                  (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                  t
                );
              }),
              (t.toTransformString = function(e) {
                var t = e || this.split();
                return +t.shear.toFixed(9)
                  ? 'm' +
                      [
                        this.get(0),
                        this.get(1),
                        this.get(2),
                        this.get(3),
                        this.get(4),
                        this.get(5)
                      ]
                  : ((t.scalex = +t.scalex.toFixed(4)),
                    (t.scaley = +t.scaley.toFixed(4)),
                    (t.rotate = +t.rotate.toFixed(4)),
                    (t.dx || t.dy ? 't' + [+t.dx.toFixed(4), +t.dy.toFixed(4)] : '') +
                      (t.rotate ? 'r' + [+t.rotate.toFixed(4), 0, 0] : '') +
                      (1 != t.scalex || 1 != t.scaley
                        ? 's' + [t.scalex, t.scaley, 0, 0]
                        : ''));
              });
          })(l.prototype),
            (e.Matrix = l),
            (e.matrix = function(e, t, n, r, a, i) {
              return new l(e, t, n, r, a, i);
            });
        }),
        a.plugin(function(e, t, n, r, a) {
          var i,
            o = e._.make,
            s = e._.wrap,
            l = e.is,
            u = e._.getSomeDefs,
            c = /^url\((['"]?)([^)]+)\1\)$/,
            d = e._.$,
            f = e.url,
            p = String,
            m = e._.separator;
          function h(n) {
            return function(r) {
              if (
                (eve.stop(),
                r instanceof a &&
                  1 == r.node.childNodes.length &&
                  ('radialGradient' == r.node.firstChild.tagName ||
                    'linearGradient' == r.node.firstChild.tagName ||
                    'pattern' == r.node.firstChild.tagName) &&
                  ((r = r.node.firstChild), u(this).appendChild(r), (r = s(r))),
                r instanceof t)
              )
                if (
                  'radialGradient' == r.type ||
                  'linearGradient' == r.type ||
                  'pattern' == r.type
                ) {
                  r.node.id || d(r.node, { id: r.id });
                  var i = f(r.node.id);
                } else i = r.attr(n);
              else if ((i = e.color(r)).error) {
                var o = e(u(this).ownerSVGElement).gradient(r);
                o ? (o.node.id || d(o.node, { id: o.id }), (i = f(o.node.id))) : (i = r);
              } else i = p(i);
              var l = {};
              (l[n] = i), d(this.node, l), (this.node.style[n] = '');
            };
          }
          (e.deurl = function(e) {
            var t = String(e).match(c);
            return t ? t[2] : e;
          }),
            eve.on('snap.util.attr.mask', function(e) {
              if (e instanceof t || e instanceof a) {
                if (
                  (eve.stop(),
                  e instanceof a &&
                    1 == e.node.childNodes.length &&
                    ((e = e.node.firstChild), u(this).appendChild(e), (e = s(e))),
                  'mask' == e.type)
                )
                  var n = e;
                else (n = o('mask', u(this))).node.appendChild(e.node);
                !n.node.id && d(n.node, { id: n.id }), d(this.node, { mask: f(n.id) });
              }
            }),
            (i = function(e) {
              if (e instanceof t || e instanceof a) {
                eve.stop();
                for (var n, r = e.node; r; ) {
                  if ('clipPath' === r.nodeName) {
                    n = new t(r);
                    break;
                  }
                  if ('svg' === r.nodeName) {
                    n = void 0;
                    break;
                  }
                  r = r.parentNode;
                }
                n ||
                  ((n = o('clipPath', u(this))).node.appendChild(e.node),
                  !n.node.id && d(n.node, { id: n.id })),
                  d(this.node, { 'clip-path': f(n.node.id || n.id) });
              }
            }),
            eve.on('snap.util.attr.clip', i),
            eve.on('snap.util.attr.clip-path', i),
            eve.on('snap.util.attr.clipPath', i),
            eve.on('snap.util.attr.fill', h('fill')),
            eve.on('snap.util.attr.stroke', h('stroke'));
          var g = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
          function b(e) {
            eve.stop(), e == +e && (e += 'px'), (this.node.style.fontSize = e);
          }
          function v() {
            return eve.stop(), this.node.style.fontSize;
          }
          eve.on('snap.util.grad.parse', function(e) {
            var t = (e = p(e)).match(g);
            if (!t) return null;
            var n = t[1],
              r = t[2],
              a = t[3];
            1 ==
              (r = r.split(/\s*,\s*/).map(function(e) {
                return +e == e ? +e : e;
              })).length &&
              0 == r[0] &&
              (r = []);
            var i = (a = (a = a.split('-')).map(function(e) {
                var t = { color: (e = e.split(':'))[0] };
                return e[1] && (t.offset = parseFloat(e[1])), t;
              })).length,
              o = 0,
              s = 0;
            function l(e, t) {
              for (var n = (t - o) / (e - s), r = s; r < e; r++)
                a[r].offset = +(+o + n * (r - s)).toFixed(2);
              (s = e), (o = t);
            }
            i--;
            for (var u = 0; u < i; u++) 'offset' in a[u] && l(u, a[u].offset);
            return (
              (a[i].offset = a[i].offset || 100),
              l(i, a[i].offset),
              { type: n, params: r, stops: a }
            );
          }),
            eve.on('snap.util.attr.d', function(t) {
              eve.stop(),
                l(t, 'array') && l(t[0], 'array') && (t = e.path.toString.call(t)),
                (t = p(t)).match(/[ruo]/i) && (t = e.path.toAbsolute(t)),
                d(this.node, { d: t });
            })(-1),
            eve.on('snap.util.attr.#text', function(e) {
              eve.stop(), (e = p(e));
              for (var t = r.doc.createTextNode(e); this.node.firstChild; )
                this.node.removeChild(this.node.firstChild);
              this.node.appendChild(t);
            })(-1),
            eve.on('snap.util.attr.path', function(e) {
              eve.stop(), this.attr({ d: e });
            })(-1),
            eve.on('snap.util.attr.class', function(e) {
              eve.stop(), (this.node.className.baseVal = e);
            })(-1),
            eve.on('snap.util.attr.viewBox', function(e) {
              var t;
              (t =
                l(e, 'object') && 'x' in e
                  ? [e.x, e.y, e.width, e.height].join(' ')
                  : l(e, 'array')
                  ? e.join(' ')
                  : e),
                d(this.node, { viewBox: t }),
                eve.stop();
            })(-1),
            eve.on('snap.util.attr.transform', function(e) {
              this.transform(e), eve.stop();
            })(-1),
            eve.on('snap.util.attr.r', function(e) {
              'rect' == this.type && (eve.stop(), d(this.node, { rx: e, ry: e }));
            })(-1),
            eve.on('snap.util.attr.textpath', function(e) {
              if ((eve.stop(), 'text' == this.type)) {
                var n, r, a;
                if (!e && this.textPath) {
                  for (r = this.textPath; r.node.firstChild; )
                    this.node.appendChild(r.node.firstChild);
                  return r.remove(), void delete this.textPath;
                }
                if (l(e, 'string')) {
                  var i = u(this),
                    o = s(i.parentNode).path(e);
                  i.appendChild(o.node), (n = o.id), o.attr({ id: n });
                } else
                  (e = s(e)) instanceof t &&
                    ((n = e.attr('id')) || ((n = e.id), e.attr({ id: n })));
                if (n)
                  if (((r = this.textPath), (a = this.node), r))
                    r.attr({ 'xlink:href': '#' + n });
                  else {
                    for (r = d('textPath', { 'xlink:href': '#' + n }); a.firstChild; )
                      r.appendChild(a.firstChild);
                    a.appendChild(r), (this.textPath = s(r));
                  }
              }
            })(-1),
            eve.on('snap.util.attr.text', function(e) {
              if ('text' == this.type) {
                for (
                  var t = this.node,
                    n = function(e) {
                      var t = d('tspan');
                      if (l(e, 'array'))
                        for (var a = 0; a < e.length; a++) t.appendChild(n(e[a]));
                      else t.appendChild(r.doc.createTextNode(e));
                      return t.normalize && t.normalize(), t;
                    };
                  t.firstChild;

                )
                  t.removeChild(t.firstChild);
                for (var a = n(e); a.firstChild; ) t.appendChild(a.firstChild);
              }
              eve.stop();
            })(-1),
            eve.on('snap.util.attr.fontSize', b)(-1),
            eve.on('snap.util.attr.font-size', b)(-1),
            eve.on('snap.util.getattr.transform', function() {
              return eve.stop(), this.transform();
            })(-1),
            eve.on('snap.util.getattr.textpath', function() {
              return eve.stop(), this.textPath;
            })(-1),
            (function() {
              function t(t) {
                return function() {
                  eve.stop();
                  var n = r.doc.defaultView
                    .getComputedStyle(this.node, null)
                    .getPropertyValue('marker-' + t);
                  return 'none' == n ? n : e(r.doc.getElementById(n.match(c)[1]));
                };
              }
              function n(e) {
                return function(t) {
                  eve.stop();
                  var n = 'marker' + e.charAt(0).toUpperCase() + e.substring(1);
                  if ('' != t && t) {
                    if ('marker' == t.type) {
                      var r = t.node.id;
                      return (
                        r || d(t.node, { id: t.id }), void (this.node.style[n] = f(r))
                      );
                    }
                  } else this.node.style[n] = 'none';
                };
              }
              eve.on('snap.util.getattr.marker-end', t('end'))(-1),
                eve.on('snap.util.getattr.markerEnd', t('end'))(-1),
                eve.on('snap.util.getattr.marker-start', t('start'))(-1),
                eve.on('snap.util.getattr.markerStart', t('start'))(-1),
                eve.on('snap.util.getattr.marker-mid', t('mid'))(-1),
                eve.on('snap.util.getattr.markerMid', t('mid'))(-1),
                eve.on('snap.util.attr.marker-end', n('end'))(-1),
                eve.on('snap.util.attr.markerEnd', n('end'))(-1),
                eve.on('snap.util.attr.marker-start', n('start'))(-1),
                eve.on('snap.util.attr.markerStart', n('start'))(-1),
                eve.on('snap.util.attr.marker-mid', n('mid'))(-1),
                eve.on('snap.util.attr.markerMid', n('mid'))(-1);
            })(),
            eve.on('snap.util.getattr.r', function() {
              if ('rect' == this.type && d(this.node, 'rx') == d(this.node, 'ry'))
                return eve.stop(), d(this.node, 'rx');
            })(-1),
            eve.on('snap.util.getattr.text', function() {
              if ('text' == this.type || 'tspan' == this.type) {
                eve.stop();
                var e = (function e(t) {
                  for (var n = [], r = t.childNodes, a = 0, i = r.length; a < i; a++) {
                    var o = r[a];
                    3 == o.nodeType && n.push(o.nodeValue),
                      'tspan' == o.tagName &&
                        (1 == o.childNodes.length && 3 == o.firstChild.nodeType
                          ? n.push(o.firstChild.nodeValue)
                          : n.push(e(o)));
                  }
                  return n;
                })(this.node);
                return 1 == e.length ? e[0] : e;
              }
            })(-1),
            eve.on('snap.util.getattr.#text', function() {
              return this.node.textContent;
            })(-1),
            eve.on('snap.util.getattr.fill', function(t) {
              if (!t) {
                eve.stop();
                var n = eve('snap.util.getattr.fill', this, !0).firstDefined();
                return e(e.deurl(n)) || n;
              }
            })(-1),
            eve.on('snap.util.getattr.stroke', function(t) {
              if (!t) {
                eve.stop();
                var n = eve('snap.util.getattr.stroke', this, !0).firstDefined();
                return e(e.deurl(n)) || n;
              }
            })(-1),
            eve.on('snap.util.getattr.viewBox', function() {
              eve.stop();
              var t = d(this.node, 'viewBox');
              return t ? ((t = t.split(m)), e._.box(+t[0], +t[1], +t[2], +t[3])) : void 0;
            })(-1),
            eve.on('snap.util.getattr.points', function() {
              var e = d(this.node, 'points');
              return eve.stop(), e ? e.split(m) : void 0;
            })(-1),
            eve.on('snap.util.getattr.path', function() {
              var e = d(this.node, 'd');
              return eve.stop(), e;
            })(-1),
            eve.on('snap.util.getattr.class', function() {
              return this.node.className.baseVal;
            })(-1),
            eve.on('snap.util.getattr.fontSize', v)(-1),
            eve.on('snap.util.getattr.font-size', v)(-1);
        }),
        a.plugin(function(e, t, n, r, a) {
          var i = /\S+/g,
            o = String,
            s = t.prototype;
          (s.addClass = function(e) {
            var t,
              n,
              r,
              a = o(e || '').match(i) || [],
              s = this.node,
              l = s.className.baseVal,
              u = l.match(i) || [];
            if (a.length) {
              for (t = 0; (n = a[t++]); ) ~u.indexOf(n) || u.push(n);
              l != (r = u.join(' ')) && (s.className.baseVal = r);
            }
            return this;
          }),
            (s.removeClass = function(e) {
              var t,
                n,
                r,
                a,
                s = o(e || '').match(i) || [],
                l = this.node,
                u = l.className.baseVal,
                c = u.match(i) || [];
              if (c.length) {
                for (t = 0; (r = s[t++]); ) ~(n = c.indexOf(r)) && c.splice(n, 1);
                u != (a = c.join(' ')) && (l.className.baseVal = a);
              }
              return this;
            }),
            (s.hasClass = function(e) {
              return !!~(this.node.className.baseVal.match(i) || []).indexOf(e);
            }),
            (s.toggleClass = function(e, t) {
              if (null != t) return t ? this.addClass(e) : this.removeClass(e);
              var n,
                r,
                a,
                o,
                s = (e || '').match(i) || [],
                l = this.node,
                u = l.className.baseVal,
                c = u.match(i) || [];
              for (n = 0; (a = s[n++]); )
                ~(r = c.indexOf(a)) ? c.splice(r, 1) : c.push(a);
              return u != (o = c.join(' ')) && (l.className.baseVal = o), this;
            });
        }),
        a.plugin(function(e, t, n, r, a) {
          var i = {
              '+': function(e, t) {
                return e + t;
              },
              '-': function(e, t) {
                return e - t;
              },
              '/': function(e, t) {
                return e / t;
              },
              '*': function(e, t) {
                return e * t;
              }
            },
            o = String,
            s = /[a-z]+$/i,
            l = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
          function u(e) {
            return e;
          }
          function c(e) {
            return function(t) {
              return +t.toFixed(3) + e;
            };
          }
          eve.on('snap.util.attr', function(e) {
            var t = o(e).match(l);
            if (t) {
              var n = eve.nt(),
                r = n.substring(n.lastIndexOf('.') + 1),
                a = this.attr(r),
                u = {};
              eve.stop();
              var c = t[3] || '',
                d = a.match(s),
                f = i[t[1]];
              if (
                (d && d == c
                  ? (e = f(parseFloat(a), +t[2]))
                  : ((a = this.asPX(r)), (e = f(this.asPX(r), this.asPX(r, t[2] + c)))),
                isNaN(a) || isNaN(e))
              )
                return;
              (u[r] = e), this.attr(u);
            }
          })(-10),
            eve.on('snap.util.equal', function(e, t) {
              var n = o(this.attr(e) || ''),
                r = o(t).match(l);
              if (r) {
                eve.stop();
                var a = r[3] || '',
                  d = n.match(s),
                  f = i[r[1]];
                return d && d == a
                  ? { from: parseFloat(n), to: f(parseFloat(n), +r[2]), f: c(d) }
                  : { from: (n = this.asPX(e)), to: f(n, this.asPX(e, r[2] + a)), f: u };
              }
            })(-10);
        }),
        a.plugin(function(e, t, n, r, a) {
          var i = n.prototype,
            o = e.is;
          (i.rect = function(e, t, n, r, a, i) {
            var s;
            return (
              null == i && (i = a),
              o(e, 'object') && '[object Object]' == e
                ? (s = e)
                : null != e &&
                  ((s = { x: e, y: t, width: n, height: r }),
                  null != a && ((s.rx = a), (s.ry = i))),
              this.el('rect', s)
            );
          }),
            (i.circle = function(e, t, n) {
              var r;
              return (
                o(e, 'object') && '[object Object]' == e
                  ? (r = e)
                  : null != e && (r = { cx: e, cy: t, r: n }),
                this.el('circle', r)
              );
            });
          var s = (function() {
            function e() {
              this.parentNode.removeChild(this);
            }
            return function(t, n) {
              var a = r.doc.createElement('img'),
                i = r.doc.body;
              (a.style.cssText = 'position:absolute;left:-9999em;top:-9999em'),
                (a.onload = function() {
                  n.call(a), (a.onload = a.onerror = null), i.removeChild(a);
                }),
                (a.onerror = e),
                i.appendChild(a),
                (a.src = t);
            };
          })();
          (i.image = function(t, n, r, a, i) {
            var l = this.el('image');
            if (o(t, 'object') && 'src' in t) l.attr(t);
            else if (null != t) {
              var u = { 'xlink:href': t, preserveAspectRatio: 'none' };
              null != n && null != r && ((u.x = n), (u.y = r)),
                null != a && null != i
                  ? ((u.width = a), (u.height = i))
                  : s(t, function() {
                      e._.$(l.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                      });
                    }),
                e._.$(l.node, u);
            }
            return l;
          }),
            (i.ellipse = function(e, t, n, r) {
              var a;
              return (
                o(e, 'object') && '[object Object]' == e
                  ? (a = e)
                  : null != e && (a = { cx: e, cy: t, rx: n, ry: r }),
                this.el('ellipse', a)
              );
            }),
            (i.path = function(e) {
              var t;
              return (
                o(e, 'object') && !o(e, 'array') ? (t = e) : e && (t = { d: e }),
                this.el('path', t)
              );
            }),
            (i.group = i.g = function(e) {
              var t = this.el('g');
              return (
                1 == arguments.length && e && !e.type
                  ? t.attr(e)
                  : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)),
                t
              );
            }),
            (i.svg = function(e, t, n, r, a, i, s, l) {
              var u = {};
              return (
                o(e, 'object') && null == t
                  ? (u = e)
                  : (null != e && (u.x = e),
                    null != t && (u.y = t),
                    null != n && (u.width = n),
                    null != r && (u.height = r),
                    null != a &&
                      null != i &&
                      null != s &&
                      null != l &&
                      (u.viewBox = [a, i, s, l])),
                this.el('svg', u)
              );
            }),
            (i.mask = function(e) {
              var t = this.el('mask');
              return (
                1 == arguments.length && e && !e.type
                  ? t.attr(e)
                  : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)),
                t
              );
            }),
            (i.ptrn = function(e, t, n, r, a, i, s, l) {
              if (o(e, 'object')) var u = e;
              else
                (u = { patternUnits: 'userSpaceOnUse' }),
                  e && (u.x = e),
                  t && (u.y = t),
                  null != n && (u.width = n),
                  null != r && (u.height = r),
                  (u.viewBox =
                    null != a && null != i && null != s && null != l
                      ? [a, i, s, l]
                      : [e || 0, t || 0, n || 0, r || 0]);
              return this.el('pattern', u);
            }),
            (i.use = function(n) {
              return null != n
                ? (n instanceof t &&
                    (n.attr('id') || n.attr({ id: e._.id(n) }), (n = n.attr('id'))),
                  '#' == String(n).charAt() && (n = n.substring(1)),
                  this.el('use', { 'xlink:href': '#' + n }))
                : t.prototype.use.call(this);
            }),
            (i.symbol = function(e, t, n, r) {
              var a = {};
              return (
                null != e &&
                  null != t &&
                  null != n &&
                  null != r &&
                  (a.viewBox = [e, t, n, r]),
                this.el('symbol', a)
              );
            }),
            (i.text = function(e, t, n) {
              var r = {};
              return (
                o(e, 'object')
                  ? (r = e)
                  : null != e && (r = { x: e, y: t, text: n || '' }),
                this.el('text', r)
              );
            }),
            (i.line = function(e, t, n, r) {
              var a = {};
              return (
                o(e, 'object')
                  ? (a = e)
                  : null != e && (a = { x1: e, x2: n, y1: t, y2: r }),
                this.el('line', a)
              );
            }),
            (i.polyline = function(e) {
              arguments.length > 1 && (e = Array.prototype.slice.call(arguments, 0));
              var t = {};
              return (
                o(e, 'object') && !o(e, 'array')
                  ? (t = e)
                  : null != e && (t = { points: e }),
                this.el('polyline', t)
              );
            }),
            (i.polygon = function(e) {
              arguments.length > 1 && (e = Array.prototype.slice.call(arguments, 0));
              var t = {};
              return (
                o(e, 'object') && !o(e, 'array')
                  ? (t = e)
                  : null != e && (t = { points: e }),
                this.el('polygon', t)
              );
            }),
            (function() {
              var t = e._.$;
              function n() {
                return this.selectAll('stop');
              }
              function r(n, r) {
                var a = t('stop'),
                  i = { offset: +r + '%' };
                (n = e.color(n)),
                  (i['stop-color'] = n.hex),
                  n.opacity < 1 && (i['stop-opacity'] = n.opacity),
                  t(a, i);
                for (var o, s = this.stops(), l = 0; l < s.length; l++) {
                  if (parseFloat(s[l].attr('offset')) > r) {
                    this.node.insertBefore(a, s[l].node), (o = !0);
                    break;
                  }
                }
                return o || this.node.appendChild(a), this;
              }
              function a() {
                if ('linearGradient' == this.type) {
                  var n = t(this.node, 'x1') || 0,
                    r = t(this.node, 'x2') || 1,
                    a = t(this.node, 'y1') || 0,
                    i = t(this.node, 'y2') || 0;
                  return e._.box(n, a, math.abs(r - n), math.abs(i - a));
                }
                var o = this.node.cx || 0.5,
                  s = this.node.cy || 0.5,
                  l = this.node.r || 0;
                return e._.box(o - l, s - l, 2 * l, 2 * l);
              }
              function o(t) {
                var n = t,
                  r = this.stops();
                if (
                  ('string' == typeof t &&
                    (n = eve(
                      'snap.util.grad.parse',
                      null,
                      'l(0,0,0,1)' + t
                    ).firstDefined().stops),
                  e.is(n, 'array'))
                ) {
                  for (var a = 0; a < r.length; a++)
                    if (n[a]) {
                      var i = e.color(n[a].color),
                        o = { offset: n[a].offset + '%' };
                      (o['stop-color'] = i.hex),
                        i.opacity < 1 && (o['stop-opacity'] = i.opacity),
                        r[a].attr(o);
                    } else r[a].remove();
                  for (a = r.length; a < n.length; a++)
                    this.addStop(n[a].color, n[a].offset);
                  return this;
                }
              }
              function s(i, s, l, u, c) {
                var d = e._.make('linearGradient', i);
                return (
                  (d.stops = n),
                  (d.addStop = r),
                  (d.getBBox = a),
                  (d.setStops = o),
                  null != s && t(d.node, { x1: s, y1: l, x2: u, y2: c }),
                  d
                );
              }
              function l(i, o, s, l, u, c) {
                var d = e._.make('radialGradient', i);
                return (
                  (d.stops = n),
                  (d.addStop = r),
                  (d.getBBox = a),
                  null != o && t(d.node, { cx: o, cy: s, r: l }),
                  null != u && null != c && t(d.node, { fx: u, fy: c }),
                  d
                );
              }
              (i.gradient = function(e) {
                return (function(e, n) {
                  var r,
                    a = eve('snap.util.grad.parse', null, n).firstDefined();
                  if (!a) return null;
                  a.params.unshift(e),
                    (r =
                      'l' == a.type.toLowerCase()
                        ? s.apply(0, a.params)
                        : l.apply(0, a.params)),
                    a.type != a.type.toLowerCase() &&
                      t(r.node, { gradientUnits: 'userSpaceOnUse' });
                  for (var i = a.stops, o = i.length, u = 0; u < o; u++) {
                    var c = i[u];
                    r.addStop(c.color, c.offset);
                  }
                  return r;
                })(this.defs, e);
              }),
                (i.gradientLinear = function(e, t, n, r) {
                  return s(this.defs, e, t, n, r);
                }),
                (i.gradientRadial = function(e, t, n, r, a) {
                  return l(this.defs, e, t, n, r, a);
                }),
                (i.toString = function() {
                  var t,
                    n = this.node.ownerDocument,
                    r = n.createDocumentFragment(),
                    a = n.createElement('div'),
                    i = this.node.cloneNode(!0);
                  return (
                    r.appendChild(a),
                    a.appendChild(i),
                    e._.$(i, { xmlns: 'http://www.w3.org/2000/svg' }),
                    (t = a.innerHTML),
                    r.removeChild(r.firstChild),
                    t
                  );
                }),
                (i.toDataURL = function() {
                  if (window && window.btoa)
                    return (
                      'data:image/svg+xml;base64,' +
                      btoa(unescape(encodeURIComponent(this)))
                    );
                }),
                (i.clear = function() {
                  for (var e, t = this.node.firstChild; t; )
                    (e = t.nextSibling),
                      'defs' != t.tagName
                        ? t.parentNode.removeChild(t)
                        : i.clear.call({ node: t }),
                      (t = e);
                });
            })();
        }),
        a.plugin(function(e, t, n, r) {
          var a = t.prototype,
            i = e.is,
            o = e._.clone,
            s = /,?([a-z]),?/gi,
            l = parseFloat,
            u = Math,
            c = u.PI,
            d = u.min,
            f = u.max,
            p = u.pow,
            m = u.abs;
          function h(e) {
            var t = (h.ps = h.ps || {});
            return (
              t[e] ? (t[e].sleep = 100) : (t[e] = { sleep: 100 }),
              setTimeout(function() {
                for (var n in t)
                  t.hasOwnProperty(n) &&
                    n != e &&
                    (t[n].sleep--, !t[n].sleep && delete t[n]);
              }),
              t[e]
            );
          }
          function g(e, t, n, r) {
            return (
              null == e && (e = t = n = r = 0),
              null == t && ((t = e.y), (n = e.width), (r = e.height), (e = e.x)),
              {
                x: e,
                y: t,
                width: n,
                w: n,
                height: r,
                h: r,
                x2: e + n,
                y2: t + r,
                cx: e + n / 2,
                cy: t + r / 2,
                r1: u.min(n, r) / 2,
                r2: u.max(n, r) / 2,
                r0: u.sqrt(n * n + r * r) / 2,
                path: M(e, t, n, r),
                vb: [e, t, n, r].join(' ')
              }
            );
          }
          function b() {
            return this.join(',').replace(s, '$1');
          }
          function v(e) {
            var t = o(e);
            return (t.toString = b), t;
          }
          function y(e, t, n, r, a, i, o, s, l) {
            return null == l
              ? S(e, t, n, r, a, i, o, s)
              : C(
                  e,
                  t,
                  n,
                  r,
                  a,
                  i,
                  o,
                  s,
                  (function(e, t, n, r, a, i, o, s, l) {
                    if (l < 0 || S(e, t, n, r, a, i, o, s) < l) return;
                    var u,
                      c = 0.5,
                      d = 1 - c;
                    u = S(e, t, n, r, a, i, o, s, d);
                    for (; m(u - l) > 0.01; )
                      u = S(e, t, n, r, a, i, o, s, (d += (u < l ? 1 : -1) * (c /= 2)));
                    return d;
                  })(e, t, n, r, a, i, o, s, l)
                );
          }
          function x(n, r) {
            function a(e) {
              return +(+e).toFixed(3);
            }
            return e._.cacher(
              function(e, i, o) {
                e instanceof t && (e = e.attr('d'));
                for (
                  var s, l, u, c, d, f = '', p = {}, m = 0, h = 0, g = (e = q(e)).length;
                  h < g;
                  h++
                ) {
                  if ('M' == (u = e[h])[0]) (s = +u[1]), (l = +u[2]);
                  else {
                    if (m + (c = y(s, l, u[1], u[2], u[3], u[4], u[5], u[6])) > i) {
                      if (r && !p.start) {
                        if (
                          ((f += [
                            'C' +
                              a(
                                (d = y(s, l, u[1], u[2], u[3], u[4], u[5], u[6], i - m))
                                  .start.x
                              ),
                            a(d.start.y),
                            a(d.m.x),
                            a(d.m.y),
                            a(d.x),
                            a(d.y)
                          ]),
                          o)
                        )
                          return f;
                        (p.start = f),
                          (f = [
                            'M' + a(d.x),
                            a(d.y) + 'C' + a(d.n.x),
                            a(d.n.y),
                            a(d.end.x),
                            a(d.end.y),
                            a(u[5]),
                            a(u[6])
                          ].join()),
                          (m += c),
                          (s = +u[5]),
                          (l = +u[6]);
                        continue;
                      }
                      if (!n && !r)
                        return (d = y(s, l, u[1], u[2], u[3], u[4], u[5], u[6], i - m));
                    }
                    (m += c), (s = +u[5]), (l = +u[6]);
                  }
                  f += u.shift() + u;
                }
                return (
                  (p.end = f),
                  (d = n ? m : r ? p : C(s, l, u[0], u[1], u[2], u[3], u[4], u[5], 1))
                );
              },
              null,
              e._.clone
            );
          }
          var w = x(1),
            E = x(),
            j = x(0, 1);
          function C(e, t, n, r, a, i, o, s, l) {
            var d = 1 - l,
              f = p(d, 3),
              m = p(d, 2),
              h = l * l,
              g = h * l,
              b = e + 2 * l * (n - e) + h * (a - 2 * n + e),
              v = t + 2 * l * (r - t) + h * (i - 2 * r + t),
              y = n + 2 * l * (a - n) + h * (o - 2 * a + n),
              x = r + 2 * l * (i - r) + h * (s - 2 * i + r);
            return {
              x: f * e + 3 * m * l * n + 3 * d * l * l * a + g * o,
              y: f * t + 3 * m * l * r + 3 * d * l * l * i + g * s,
              m: { x: b, y: v },
              n: { x: y, y: x },
              start: { x: d * e + l * n, y: d * t + l * r },
              end: { x: d * a + l * o, y: d * i + l * s },
              alpha: 90 - (180 * u.atan2(b - y, v - x)) / c
            };
          }
          function O(t, n, r, a, i, o, s, l) {
            e.is(t, 'array') || (t = [t, n, r, a, i, o, s, l]);
            var u = V.apply(null, t);
            return g(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y);
          }
          function _(e, t, n) {
            return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height;
          }
          function F(e, t) {
            return (
              (e = g(e)),
              _((t = g(t)), e.x, e.y) ||
                _(t, e.x2, e.y) ||
                _(t, e.x, e.y2) ||
                _(t, e.x2, e.y2) ||
                _(e, t.x, t.y) ||
                _(e, t.x2, t.y) ||
                _(e, t.x, t.y2) ||
                _(e, t.x2, t.y2) ||
                (((e.x < t.x2 && e.x > t.x) || (t.x < e.x2 && t.x > e.x)) &&
                  ((e.y < t.y2 && e.y > t.y) || (t.y < e.y2 && t.y > e.y)))
            );
          }
          function T(e, t, n, r, a) {
            return (
              e * (e * (-3 * t + 9 * n - 9 * r + 3 * a) + 6 * t - 12 * n + 6 * r) -
              3 * t +
              3 * n
            );
          }
          function S(e, t, n, r, a, i, o, s, l) {
            null == l && (l = 1);
            for (
              var c = (l = l > 1 ? 1 : l < 0 ? 0 : l) / 2,
                d = [
                  -0.1252,
                  0.1252,
                  -0.3678,
                  0.3678,
                  -0.5873,
                  0.5873,
                  -0.7699,
                  0.7699,
                  -0.9041,
                  0.9041,
                  -0.9816,
                  0.9816
                ],
                f = [
                  0.2491,
                  0.2491,
                  0.2335,
                  0.2335,
                  0.2032,
                  0.2032,
                  0.1601,
                  0.1601,
                  0.1069,
                  0.1069,
                  0.0472,
                  0.0472
                ],
                p = 0,
                m = 0;
              m < 12;
              m++
            ) {
              var h = c * d[m] + c,
                g = T(h, e, n, a, o),
                b = T(h, t, r, i, s),
                v = g * g + b * b;
              p += f[m] * u.sqrt(v);
            }
            return c * p;
          }
          function k(e, t, n, r, a, i, o, s) {
            if (
              !(
                f(e, n) < d(a, o) ||
                d(e, n) > f(a, o) ||
                f(t, r) < d(i, s) ||
                d(t, r) > f(i, s)
              )
            ) {
              var l = (e - n) * (i - s) - (t - r) * (a - o);
              if (l) {
                var u = ((e * r - t * n) * (a - o) - (e - n) * (a * s - i * o)) / l,
                  c = ((e * r - t * n) * (i - s) - (t - r) * (a * s - i * o)) / l,
                  p = +u.toFixed(2),
                  m = +c.toFixed(2);
                if (
                  !(
                    p < +d(e, n).toFixed(2) ||
                    p > +f(e, n).toFixed(2) ||
                    p < +d(a, o).toFixed(2) ||
                    p > +f(a, o).toFixed(2) ||
                    m < +d(t, r).toFixed(2) ||
                    m > +f(t, r).toFixed(2) ||
                    m < +d(i, s).toFixed(2) ||
                    m > +f(i, s).toFixed(2)
                  )
                )
                  return { x: u, y: c };
              }
            }
          }
          function N(e, t, n) {
            if (!F(O(e), O(t))) return n ? 0 : [];
            for (
              var r = ~~(S.apply(0, e) / 8),
                a = ~~(S.apply(0, t) / 8),
                i = [],
                o = [],
                s = {},
                l = n ? 0 : [],
                u = 0;
              u < r + 1;
              u++
            ) {
              var c = C.apply(0, e.concat(u / r));
              i.push({ x: c.x, y: c.y, t: u / r });
            }
            for (u = 0; u < a + 1; u++)
              (c = C.apply(0, t.concat(u / a))), o.push({ x: c.x, y: c.y, t: u / a });
            for (u = 0; u < r; u++)
              for (var d = 0; d < a; d++) {
                var f = i[u],
                  p = i[u + 1],
                  h = o[d],
                  g = o[d + 1],
                  b = m(p.x - f.x) < 0.001 ? 'y' : 'x',
                  v = m(g.x - h.x) < 0.001 ? 'y' : 'x',
                  y = k(f.x, f.y, p.x, p.y, h.x, h.y, g.x, g.y);
                if (y) {
                  if (s[y.x.toFixed(4)] == y.y.toFixed(4)) continue;
                  s[y.x.toFixed(4)] = y.y.toFixed(4);
                  var x = f.t + m((y[b] - f[b]) / (p[b] - f[b])) * (p.t - f.t),
                    w = h.t + m((y[v] - h[v]) / (g[v] - h[v])) * (g.t - h.t);
                  x >= 0 &&
                    x <= 1 &&
                    w >= 0 &&
                    w <= 1 &&
                    (n ? l++ : l.push({ x: y.x, y: y.y, t1: x, t2: w }));
                }
              }
            return l;
          }
          function B(e, t, n) {
            (e = q(e)), (t = q(t));
            for (
              var r, a, i, o, s, l, u, c, d, f, p = n ? 0 : [], m = 0, h = e.length;
              m < h;
              m++
            ) {
              var g = e[m];
              if ('M' == g[0]) (r = s = g[1]), (a = l = g[2]);
              else {
                'C' == g[0]
                  ? ((d = [r, a].concat(g.slice(1))), (r = d[6]), (a = d[7]))
                  : ((d = [r, a, r, a, s, l, s, l]), (r = s), (a = l));
                for (var b = 0, v = t.length; b < v; b++) {
                  var y = t[b];
                  if ('M' == y[0]) (i = u = y[1]), (o = c = y[2]);
                  else {
                    'C' == y[0]
                      ? ((f = [i, o].concat(y.slice(1))), (i = f[6]), (o = f[7]))
                      : ((f = [i, o, i, o, u, c, u, c]), (i = u), (o = c));
                    var x = N(d, f, n);
                    if (n) p += x;
                    else {
                      for (var w = 0, E = x.length; w < E; w++)
                        (x[w].segment1 = m),
                          (x[w].segment2 = b),
                          (x[w].bez1 = d),
                          (x[w].bez2 = f);
                      p = p.concat(x);
                    }
                  }
                }
              }
            }
            return p;
          }
          function A(e) {
            var t = h(e);
            if (t.bbox) return o(t.bbox);
            if (!e) return g();
            for (
              var n, r = 0, a = 0, i = [], s = [], l = 0, u = (e = q(e)).length;
              l < u;
              l++
            )
              if ('M' == (n = e[l])[0]) (r = n[1]), (a = n[2]), i.push(r), s.push(a);
              else {
                var c = V(r, a, n[1], n[2], n[3], n[4], n[5], n[6]);
                (i = i.concat(c.min.x, c.max.x)),
                  (s = s.concat(c.min.y, c.max.y)),
                  (r = n[5]),
                  (a = n[6]);
              }
            var p = d.apply(0, i),
              m = d.apply(0, s),
              b = g(p, m, f.apply(0, i) - p, f.apply(0, s) - m);
            return (t.bbox = o(b)), b;
          }
          function M(e, t, n, r, a) {
            if (a)
              return [
                ['M', +e + +a, t],
                ['l', n - 2 * a, 0],
                ['a', a, a, 0, 0, 1, a, a],
                ['l', 0, r - 2 * a],
                ['a', a, a, 0, 0, 1, -a, a],
                ['l', 2 * a - n, 0],
                ['a', a, a, 0, 0, 1, -a, -a],
                ['l', 0, 2 * a - r],
                ['a', a, a, 0, 0, 1, a, -a],
                ['z']
              ];
            var i = [['M', e, t], ['l', n, 0], ['l', 0, r], ['l', -n, 0], ['z']];
            return (i.toString = b), i;
          }
          function D(e, t, n, r, a) {
            if (
              (null == a && null == r && (r = n),
              (e = +e),
              (t = +t),
              (n = +n),
              (r = +r),
              null != a)
            )
              var i = Math.PI / 180,
                o = e + n * Math.cos(-r * i),
                s = e + n * Math.cos(-a * i),
                l = [
                  ['M', o, t + n * Math.sin(-r * i)],
                  ['A', n, n, 0, +(a - r > 180), 0, s, t + n * Math.sin(-a * i)]
                ];
            else
              l = [
                ['M', e, t],
                ['m', 0, -r],
                ['a', n, r, 0, 1, 1, 0, 2 * r],
                ['a', n, r, 0, 1, 1, 0, -2 * r],
                ['z']
              ];
            return (l.toString = b), l;
          }
          var P = e._unit2px,
            I = {
              path: function(e) {
                return e.attr('path');
              },
              circle: function(e) {
                var t = P(e);
                return D(t.cx, t.cy, t.r);
              },
              ellipse: function(e) {
                var t = P(e);
                return D(t.cx || 0, t.cy || 0, t.rx, t.ry);
              },
              rect: function(e) {
                var t = P(e);
                return M(t.x || 0, t.y || 0, t.width, t.height, t.rx, t.ry);
              },
              image: function(e) {
                var t = P(e);
                return M(t.x || 0, t.y || 0, t.width, t.height);
              },
              line: function(e) {
                return (
                  'M' + [e.attr('x1') || 0, e.attr('y1') || 0, e.attr('x2'), e.attr('y2')]
                );
              },
              polyline: function(e) {
                return 'M' + e.attr('points');
              },
              polygon: function(e) {
                return 'M' + e.attr('points') + 'z';
              },
              deflt: function(e) {
                var t = e.node.getBBox();
                return M(t.x, t.y, t.width, t.height);
              }
            };
          function z(t) {
            var n = h(t);
            if (n.abs) return v(n.abs);
            if (
              ((i(t, 'array') && i(t && t[0], 'array')) || (t = e.parsePathString(t)),
              !t || !t.length)
            )
              return [['M', 0, 0]];
            var r,
              a = [],
              o = 0,
              s = 0,
              l = 0,
              u = 0,
              c = 0;
            'M' == t[0][0] &&
              ((l = o = +t[0][1]), (u = s = +t[0][2]), c++, (a[0] = ['M', o, s]));
            for (
              var d,
                f,
                p =
                  3 == t.length &&
                  'M' == t[0][0] &&
                  'R' == t[1][0].toUpperCase() &&
                  'Z' == t[2][0].toUpperCase(),
                m = c,
                g = t.length;
              m < g;
              m++
            ) {
              if ((a.push((d = [])), (r = (f = t[m])[0]) != r.toUpperCase()))
                switch (((d[0] = r.toUpperCase()), d[0])) {
                  case 'A':
                    (d[1] = f[1]),
                      (d[2] = f[2]),
                      (d[3] = f[3]),
                      (d[4] = f[4]),
                      (d[5] = f[5]),
                      (d[6] = +f[6] + o),
                      (d[7] = +f[7] + s);
                    break;
                  case 'V':
                    d[1] = +f[1] + s;
                    break;
                  case 'H':
                    d[1] = +f[1] + o;
                    break;
                  case 'R':
                    for (
                      var y = [o, s].concat(f.slice(1)), x = 2, w = y.length;
                      x < w;
                      x++
                    )
                      (y[x] = +y[x] + o), (y[++x] = +y[x] + s);
                    a.pop(), (a = a.concat(G(y, p)));
                    break;
                  case 'O':
                    a.pop(), (y = D(o, s, f[1], f[2])).push(y[0]), (a = a.concat(y));
                    break;
                  case 'U':
                    a.pop(),
                      (a = a.concat(D(o, s, f[1], f[2], f[3]))),
                      (d = ['U'].concat(a[a.length - 1].slice(-2)));
                    break;
                  case 'M':
                    (l = +f[1] + o), (u = +f[2] + s);
                  default:
                    for (x = 1, w = f.length; x < w; x++) d[x] = +f[x] + (x % 2 ? o : s);
                }
              else if ('R' == r)
                (y = [o, s].concat(f.slice(1))),
                  a.pop(),
                  (a = a.concat(G(y, p))),
                  (d = ['R'].concat(f.slice(-2)));
              else if ('O' == r)
                a.pop(), (y = D(o, s, f[1], f[2])).push(y[0]), (a = a.concat(y));
              else if ('U' == r)
                a.pop(),
                  (a = a.concat(D(o, s, f[1], f[2], f[3]))),
                  (d = ['U'].concat(a[a.length - 1].slice(-2)));
              else for (var E = 0, j = f.length; E < j; E++) d[E] = f[E];
              if ('O' != (r = r.toUpperCase()))
                switch (d[0]) {
                  case 'Z':
                    (o = +l), (s = +u);
                    break;
                  case 'H':
                    o = d[1];
                    break;
                  case 'V':
                    s = d[1];
                    break;
                  case 'M':
                    (l = d[d.length - 2]), (u = d[d.length - 1]);
                  default:
                    (o = d[d.length - 2]), (s = d[d.length - 1]);
                }
            }
            return (a.toString = b), (n.abs = v(a)), a;
          }
          function R(e, t, n, r) {
            return [e, t, n, r, n, r];
          }
          function L(e, t, n, r, a, i) {
            return [
              (1 / 3) * e + (2 / 3) * n,
              (1 / 3) * t + (2 / 3) * r,
              (1 / 3) * a + (2 / 3) * n,
              (1 / 3) * i + (2 / 3) * r,
              a,
              i
            ];
          }
          function W(t, n, r, a, i, o, s, l, d, f) {
            var p,
              h = (120 * c) / 180,
              g = (c / 180) * (+i || 0),
              b = [],
              v = e._.cacher(function(e, t, n) {
                return { x: e * u.cos(n) - t * u.sin(n), y: e * u.sin(n) + t * u.cos(n) };
              });
            if (!r || !a) return [t, n, l, d, l, d];
            if (f) (F = f[0]), (T = f[1]), (O = f[2]), (_ = f[3]);
            else {
              (t = (p = v(t, n, -g)).x), (n = p.y), (l = (p = v(l, d, -g)).x), (d = p.y);
              u.cos((c / 180) * i), u.sin((c / 180) * i);
              var y = (t - l) / 2,
                x = (n - d) / 2,
                w = (y * y) / (r * r) + (x * x) / (a * a);
              w > 1 && ((r *= w = u.sqrt(w)), (a *= w));
              var E = r * r,
                j = a * a,
                C =
                  (o == s ? -1 : 1) *
                  u.sqrt(m((E * j - E * x * x - j * y * y) / (E * x * x + j * y * y))),
                O = (C * r * x) / a + (t + l) / 2,
                _ = (C * -a * y) / r + (n + d) / 2,
                F = u.asin(((n - _) / a).toFixed(9)),
                T = u.asin(((d - _) / a).toFixed(9));
              (F = t < O ? c - F : F) < 0 && (F = 2 * c + F),
                (T = l < O ? c - T : T) < 0 && (T = 2 * c + T),
                s && F > T && (F -= 2 * c),
                !s && T > F && (T -= 2 * c);
            }
            var S = T - F;
            if (m(S) > h) {
              var k = T,
                N = l,
                B = d;
              (T = F + h * (s && T > F ? 1 : -1)),
                (b = W(
                  (l = O + r * u.cos(T)),
                  (d = _ + a * u.sin(T)),
                  r,
                  a,
                  i,
                  0,
                  s,
                  N,
                  B,
                  [T, k, O, _]
                ));
            }
            S = T - F;
            var A = u.cos(F),
              M = u.sin(F),
              D = u.cos(T),
              P = u.sin(T),
              I = u.tan(S / 4),
              z = (4 / 3) * r * I,
              R = (4 / 3) * a * I,
              L = [t, n],
              V = [t + z * M, n - R * A],
              q = [l + z * P, d - R * D],
              G = [l, d];
            if (((V[0] = 2 * L[0] - V[0]), (V[1] = 2 * L[1] - V[1]), f))
              return [V, q, G].concat(b);
            for (
              var U = [],
                Y = 0,
                H = (b = [V, q, G]
                  .concat(b)
                  .join()
                  .split(',')).length;
              Y < H;
              Y++
            )
              U[Y] = Y % 2 ? v(b[Y - 1], b[Y], g).y : v(b[Y], b[Y + 1], g).x;
            return U;
          }
          function V(e, t, n, r, a, i, o, s) {
            for (var l, c, p, h, g, b, v, y, x = [], w = [[], []], E = 0; E < 2; ++E)
              if (
                (0 == E
                  ? ((c = 6 * e - 12 * n + 6 * a),
                    (l = -3 * e + 9 * n - 9 * a + 3 * o),
                    (p = 3 * n - 3 * e))
                  : ((c = 6 * t - 12 * r + 6 * i),
                    (l = -3 * t + 9 * r - 9 * i + 3 * s),
                    (p = 3 * r - 3 * t)),
                m(l) < 1e-12)
              ) {
                if (m(c) < 1e-12) continue;
                0 < (h = -p / c) && h < 1 && x.push(h);
              } else
                (v = c * c - 4 * p * l),
                  (y = u.sqrt(v)),
                  v < 0 ||
                    (0 < (g = (-c + y) / (2 * l)) && g < 1 && x.push(g),
                    0 < (b = (-c - y) / (2 * l)) && b < 1 && x.push(b));
            for (var j, C = x.length, O = C; C--; )
              (j = 1 - (h = x[C])),
                (w[0][C] =
                  j * j * j * e + 3 * j * j * h * n + 3 * j * h * h * a + h * h * h * o),
                (w[1][C] =
                  j * j * j * t + 3 * j * j * h * r + 3 * j * h * h * i + h * h * h * s);
            return (
              (w[0][O] = e),
              (w[1][O] = t),
              (w[0][O + 1] = o),
              (w[1][O + 1] = s),
              (w[0].length = w[1].length = O + 2),
              {
                min: { x: d.apply(0, w[0]), y: d.apply(0, w[1]) },
                max: { x: f.apply(0, w[0]), y: f.apply(0, w[1]) }
              }
            );
          }
          function q(e, t) {
            var n = !t && h(e);
            if (!t && n.curve) return v(n.curve);
            for (
              var r = z(e),
                a = t && z(t),
                i = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                s = function(e, t, n) {
                  var r, a;
                  if (!e) return ['C', t.x, t.y, t.x, t.y, t.x, t.y];
                  switch ((!(e[0] in { T: 1, Q: 1 }) && (t.qx = t.qy = null), e[0])) {
                    case 'M':
                      (t.X = e[1]), (t.Y = e[2]);
                      break;
                    case 'A':
                      e = ['C'].concat(W.apply(0, [t.x, t.y].concat(e.slice(1))));
                      break;
                    case 'S':
                      'C' == n || 'S' == n
                        ? ((r = 2 * t.x - t.bx), (a = 2 * t.y - t.by))
                        : ((r = t.x), (a = t.y)),
                        (e = ['C', r, a].concat(e.slice(1)));
                      break;
                    case 'T':
                      'Q' == n || 'T' == n
                        ? ((t.qx = 2 * t.x - t.qx), (t.qy = 2 * t.y - t.qy))
                        : ((t.qx = t.x), (t.qy = t.y)),
                        (e = ['C'].concat(L(t.x, t.y, t.qx, t.qy, e[1], e[2])));
                      break;
                    case 'Q':
                      (t.qx = e[1]),
                        (t.qy = e[2]),
                        (e = ['C'].concat(L(t.x, t.y, e[1], e[2], e[3], e[4])));
                      break;
                    case 'L':
                      e = ['C'].concat(R(t.x, t.y, e[1], e[2]));
                      break;
                    case 'H':
                      e = ['C'].concat(R(t.x, t.y, e[1], t.y));
                      break;
                    case 'V':
                      e = ['C'].concat(R(t.x, t.y, t.x, e[1]));
                      break;
                    case 'Z':
                      e = ['C'].concat(R(t.x, t.y, t.X, t.Y));
                  }
                  return e;
                },
                u = function(e, t) {
                  if (e[t].length > 7) {
                    e[t].shift();
                    for (var n = e[t]; n.length; )
                      (d[t] = 'A'),
                        a && (p[t] = 'A'),
                        e.splice(t++, 0, ['C'].concat(n.splice(0, 6)));
                    e.splice(t, 1), (y = f(r.length, (a && a.length) || 0));
                  }
                },
                c = function(e, t, n, i, o) {
                  e &&
                    t &&
                    'M' == e[o][0] &&
                    'M' != t[o][0] &&
                    (t.splice(o, 0, ['M', i.x, i.y]),
                    (n.bx = 0),
                    (n.by = 0),
                    (n.x = e[o][1]),
                    (n.y = e[o][2]),
                    (y = f(r.length, (a && a.length) || 0)));
                },
                d = [],
                p = [],
                m = '',
                g = '',
                b = 0,
                y = f(r.length, (a && a.length) || 0);
              b < y;
              b++
            ) {
              r[b] && (m = r[b][0]),
                'C' != m && ((d[b] = m), b && (g = d[b - 1])),
                (r[b] = s(r[b], i, g)),
                'A' != d[b] && 'C' == m && (d[b] = 'C'),
                u(r, b),
                a &&
                  (a[b] && (m = a[b][0]),
                  'C' != m && ((p[b] = m), b && (g = p[b - 1])),
                  (a[b] = s(a[b], o, g)),
                  'A' != p[b] && 'C' == m && (p[b] = 'C'),
                  u(a, b)),
                c(r, a, i, o, b),
                c(a, r, o, i, b);
              var x = r[b],
                w = a && a[b],
                E = x.length,
                j = a && w.length;
              (i.x = x[E - 2]),
                (i.y = x[E - 1]),
                (i.bx = l(x[E - 4]) || i.x),
                (i.by = l(x[E - 3]) || i.y),
                (o.bx = a && (l(w[j - 4]) || o.x)),
                (o.by = a && (l(w[j - 3]) || o.y)),
                (o.x = a && w[j - 2]),
                (o.y = a && w[j - 1]);
            }
            return a || (n.curve = v(r)), a ? [r, a] : r;
          }
          function G(e, t) {
            for (var n = [], r = 0, a = e.length; a - 2 * !t > r; r += 2) {
              var i = [
                { x: +e[r - 2], y: +e[r - 1] },
                { x: +e[r], y: +e[r + 1] },
                { x: +e[r + 2], y: +e[r + 3] },
                { x: +e[r + 4], y: +e[r + 5] }
              ];
              t
                ? r
                  ? a - 4 == r
                    ? (i[3] = { x: +e[0], y: +e[1] })
                    : a - 2 == r &&
                      ((i[2] = { x: +e[0], y: +e[1] }), (i[3] = { x: +e[2], y: +e[3] }))
                  : (i[0] = { x: +e[a - 2], y: +e[a - 1] })
                : a - 4 == r
                ? (i[3] = i[2])
                : r || (i[0] = { x: +e[r], y: +e[r + 1] }),
                n.push([
                  'C',
                  (-i[0].x + 6 * i[1].x + i[2].x) / 6,
                  (-i[0].y + 6 * i[1].y + i[2].y) / 6,
                  (i[1].x + 6 * i[2].x - i[3].x) / 6,
                  (i[1].y + 6 * i[2].y - i[3].y) / 6,
                  i[2].x,
                  i[2].y
                ]);
            }
            return n;
          }
          (e.path = h),
            (e.path.getTotalLength = w),
            (e.path.getPointAtLength = E),
            (e.path.getSubpath = function(e, t, n) {
              if (this.getTotalLength(e) - n < 1e-6) return j(e, t).end;
              var r = j(e, n, 1);
              return t ? j(r, t).end : r;
            }),
            (a.getTotalLength = function() {
              if (this.node.getTotalLength) return this.node.getTotalLength();
            }),
            (a.getPointAtLength = function(e) {
              return E(this.attr('d'), e);
            }),
            (a.getSubpath = function(t, n) {
              return e.path.getSubpath(this.attr('d'), t, n);
            }),
            (e._.box = g),
            (e.path.findDotsAtSegment = C),
            (e.path.bezierBBox = O),
            (e.path.isPointInsideBBox = _),
            (e.closest = function(t, n, r, a) {
              for (
                var i = 100,
                  o = g(t - i / 2, n - i / 2, i, i),
                  s = [],
                  l = r[0].hasOwnProperty('x')
                    ? function(e) {
                        return { x: r[e].x, y: r[e].y };
                      }
                    : function(e) {
                        return { x: r[e], y: a[e] };
                      },
                  u = 0;
                i <= 1e6 && !u;

              ) {
                for (var c = 0, d = r.length; c < d; c++) {
                  var f = l(c);
                  if (_(o, f.x, f.y)) {
                    u++, s.push(f);
                    break;
                  }
                }
                u || (o = g(t - (i *= 2) / 2, n - i / 2, i, i));
              }
              if (1e6 != i) {
                var p,
                  m = 1 / 0;
                for (c = 0, d = s.length; c < d; c++) {
                  var h = e.len(t, n, s[c].x, s[c].y);
                  m > h && ((m = h), (s[c].len = h), (p = s[c]));
                }
                return p;
              }
            }),
            (e.path.isBBoxIntersect = F),
            (e.path.intersection = function(e, t) {
              return B(e, t);
            }),
            (e.path.intersectionNumber = function(e, t) {
              return B(e, t, 1);
            }),
            (e.path.isPointInside = function(e, t, n) {
              var r = A(e);
              return (
                _(r, t, n) &&
                B(
                  e,
                  [
                    ['M', t, n],
                    ['H', r.x2 + 10]
                  ],
                  1
                ) %
                  2 ==
                  1
              );
            }),
            (e.path.getBBox = A),
            (e.path.get = I),
            (e.path.toRelative = function(t) {
              var n = h(t),
                r = String.prototype.toLowerCase;
              if (n.rel) return v(n.rel);
              (e.is(t, 'array') && e.is(t && t[0], 'array')) ||
                (t = e.parsePathString(t));
              var a = [],
                i = 0,
                o = 0,
                s = 0,
                l = 0,
                u = 0;
              'M' == t[0][0] &&
                ((s = i = t[0][1]), (l = o = t[0][2]), u++, a.push(['M', i, o]));
              for (var c = u, d = t.length; c < d; c++) {
                var f = (a[c] = []),
                  p = t[c];
                if (p[0] != r.call(p[0]))
                  switch (((f[0] = r.call(p[0])), f[0])) {
                    case 'a':
                      (f[1] = p[1]),
                        (f[2] = p[2]),
                        (f[3] = p[3]),
                        (f[4] = p[4]),
                        (f[5] = p[5]),
                        (f[6] = +(p[6] - i).toFixed(3)),
                        (f[7] = +(p[7] - o).toFixed(3));
                      break;
                    case 'v':
                      f[1] = +(p[1] - o).toFixed(3);
                      break;
                    case 'm':
                      (s = p[1]), (l = p[2]);
                    default:
                      for (var m = 1, g = p.length; m < g; m++)
                        f[m] = +(p[m] - (m % 2 ? i : o)).toFixed(3);
                  }
                else {
                  (f = a[c] = []), 'm' == p[0] && ((s = p[1] + i), (l = p[2] + o));
                  for (var y = 0, x = p.length; y < x; y++) a[c][y] = p[y];
                }
                var w = a[c].length;
                switch (a[c][0]) {
                  case 'z':
                    (i = s), (o = l);
                    break;
                  case 'h':
                    i += +a[c][w - 1];
                    break;
                  case 'v':
                    o += +a[c][w - 1];
                    break;
                  default:
                    (i += +a[c][w - 2]), (o += +a[c][w - 1]);
                }
              }
              return (a.toString = b), (n.rel = v(a)), a;
            }),
            (e.path.toAbsolute = z),
            (e.path.toCubic = q),
            (e.path.map = function(e, t) {
              if (!t) return e;
              var n, r, a, i, o, s, l;
              for (a = 0, o = (e = q(e)).length; a < o; a++)
                for (i = 1, s = (l = e[a]).length; i < s; i += 2)
                  (n = t.x(l[i], l[i + 1])),
                    (r = t.y(l[i], l[i + 1])),
                    (l[i] = n),
                    (l[i + 1] = r);
              return e;
            }),
            (e.path.toString = b),
            (e.path.clone = v);
        }),
        a.plugin(function(e, t, n, a) {
          var i = Math.max,
            o = Math.min,
            s = function(e) {
              if (
                ((this.items = []),
                (this.bindings = {}),
                (this.length = 0),
                (this.type = 'set'),
                e)
              )
                for (var t = 0, n = e.length; t < n; t++)
                  e[t] &&
                    ((this[this.items.length] = this.items[this.items.length] = e[t]),
                    this.length++);
            },
            l = s.prototype;
          (l.push = function() {
            for (var e, t, n = 0, r = arguments.length; n < r; n++)
              (e = arguments[n]) &&
                ((this[(t = this.items.length)] = this.items[t] = e), this.length++);
            return this;
          }),
            (l.pop = function() {
              return this.length && delete this[this.length--], this.items.pop();
            }),
            (l.forEach = function(e, t) {
              for (var n = 0, r = this.items.length; n < r; n++)
                if (!1 === e.call(t, this.items[n], n)) return this;
              return this;
            }),
            (l.animate = function(t, n, a, i) {
              'function' != typeof a || a.length || ((i = a), (a = r.linear)),
                t instanceof e._.Animation &&
                  ((i = t.callback), (a = t.easing), (n = a.dur), (t = t.attr));
              var o = arguments;
              if (e.is(t, 'array') && e.is(o[o.length - 1], 'array')) var s = !0;
              var l,
                u = function() {
                  l ? (this.b = l) : (l = this.b);
                },
                c = 0,
                d = this,
                f =
                  i &&
                  function() {
                    ++c == d.length && i.call(this);
                  };
              return this.forEach(function(e, r) {
                eve.once('snap.animcreated.' + e.id, u),
                  s ? o[r] && e.animate.apply(e, o[r]) : e.animate(t, n, a, f);
              });
            }),
            (l.remove = function() {
              for (; this.length; ) this.pop().remove();
              return this;
            }),
            (l.bind = function(e, t, n) {
              var r = {};
              if ('function' == typeof t) this.bindings[e] = t;
              else {
                var a = n || e;
                this.bindings[e] = function(e) {
                  (r[a] = e), t.attr(r);
                };
              }
              return this;
            }),
            (l.attr = function(e) {
              var t = {};
              for (var n in e) this.bindings[n] ? this.bindings[n](e[n]) : (t[n] = e[n]);
              for (var r = 0, a = this.items.length; r < a; r++) this.items[r].attr(t);
              return this;
            }),
            (l.clear = function() {
              for (; this.length; ) this.pop();
            }),
            (l.splice = function(e, t, n) {
              (e = e < 0 ? i(this.length + e, 0) : e), (t = i(0, o(this.length - e, t)));
              var r,
                a = [],
                l = [],
                u = [];
              for (r = 2; r < arguments.length; r++) u.push(arguments[r]);
              for (r = 0; r < t; r++) l.push(this[e + r]);
              for (; r < this.length - e; r++) a.push(this[e + r]);
              var c = u.length;
              for (r = 0; r < c + a.length; r++)
                this.items[e + r] = this[e + r] = r < c ? u[r] : a[r - c];
              for (r = this.items.length = this.length -= t - c; this[r]; )
                delete this[r++];
              return new s(l);
            }),
            (l.exclude = function(e) {
              for (var t = 0, n = this.length; t < n; t++)
                if (this[t] == e) return this.splice(t, 1), !0;
              return !1;
            }),
            (l.insertAfter = function(e) {
              for (var t = this.items.length; t--; ) this.items[t].insertAfter(e);
              return this;
            }),
            (l.getBBox = function() {
              for (var e = [], t = [], n = [], r = [], a = this.items.length; a--; )
                if (!this.items[a].removed) {
                  var s = this.items[a].getBBox();
                  e.push(s.x), t.push(s.y), n.push(s.x + s.width), r.push(s.y + s.height);
                }
              return {
                x: (e = o.apply(0, e)),
                y: (t = o.apply(0, t)),
                x2: (n = i.apply(0, n)),
                y2: (r = i.apply(0, r)),
                width: n - e,
                height: r - t,
                cx: e + (n - e) / 2,
                cy: t + (r - t) / 2
              };
            }),
            (l.clone = function(e) {
              e = new s();
              for (var t = 0, n = this.items.length; t < n; t++)
                e.push(this.items[t].clone());
              return e;
            }),
            (l.toString = function() {
              return 'Snap‘s set';
            }),
            (l.type = 'set'),
            (e.Set = s),
            (e.set = function() {
              var e = new s();
              return (
                arguments.length &&
                  e.push.apply(e, Array.prototype.slice.call(arguments, 0)),
                e
              );
            });
        }),
        a.plugin(function(e, t, n, r) {
          var a = {},
            i = /[%a-z]+$/i,
            o = String;
          function s(e) {
            var t = e[0];
            switch (t.toLowerCase()) {
              case 't':
                return [t, 0, 0];
              case 'm':
                return [t, 1, 0, 0, 1, 0, 0];
              case 'r':
                return 4 == e.length ? [t, 0, e[2], e[3]] : [t, 0];
              case 's':
                return 5 == e.length
                  ? [t, 1, 1, e[3], e[4]]
                  : 3 == e.length
                  ? [t, 1, 1]
                  : [t, 1];
            }
          }
          function l(e) {
            return e;
          }
          function u(e) {
            return e.join(' ');
          }
          function c(t) {
            return e.rgb(t[0], t[1], t[2], t[3]);
          }
          function d(e) {
            var t,
              n,
              r,
              a,
              i,
              o,
              s = 0,
              l = [];
            for (t = 0, n = e.length; t < n; t++) {
              for (i = '[', o = ['"' + e[t][0] + '"'], r = 1, a = e[t].length; r < a; r++)
                o[r] = 'val[' + s++ + ']';
              (i += o + ']'), (l[t] = i);
            }
            return Function('val', 'return Snap.path.toString.call([' + l + '])');
          }
          function f(e) {
            for (var t = [], n = 0, r = e.length; n < r; n++)
              for (var a = 1, i = e[n].length; a < i; a++) t.push(e[n][a]);
            return t;
          }
          function p(e) {
            return isFinite(e);
          }
          (a.stroke = a.fill = 'colour'),
            (t.prototype.equal = function(e, t) {
              return eve('snap.util.equal', this, e, t).firstDefined();
            }),
            eve.on('snap.util.equal', function(t, n) {
              var r,
                m,
                h = o(this.attr(t) || ''),
                g = this;
              if ('colour' == a[t])
                return (
                  (r = e.color(h)),
                  (m = e.color(n)),
                  {
                    from: [r.r, r.g, r.b, r.opacity],
                    to: [m.r, m.g, m.b, m.opacity],
                    f: c
                  }
                );
              if ('viewBox' == t)
                return {
                  from: (r = this.attr(t)
                    .vb.split(' ')
                    .map(Number)),
                  to: (m = n.split(' ').map(Number)),
                  f: u
                };
              if ('transform' == t || 'gradientTransform' == t || 'patternTransform' == t)
                return (
                  'string' == typeof n && (n = o(n).replace(/\.{3}|\u2026/g, h)),
                  (function(t, n, r) {
                    (t = t || new e.Matrix()),
                      (n = n || new e.Matrix()),
                      (t = e.parseTransformString(t.toTransformString()) || []),
                      (n = e.parseTransformString(n.toTransformString()) || []);
                    for (
                      var a,
                        i,
                        o,
                        l,
                        u = Math.max(t.length, n.length),
                        c = [],
                        p = [],
                        m = 0;
                      m < u;
                      m++
                    ) {
                      if (
                        ((o = t[m] || s(n[m])),
                        (l = n[m] || s(o)),
                        o[0] != l[0] ||
                          ('r' == o[0].toLowerCase() && (o[2] != l[2] || o[3] != l[3])) ||
                          ('s' == o[0].toLowerCase() && (o[3] != l[3] || o[4] != l[4])))
                      ) {
                        (t = e._.transform2matrix(t, r())),
                          (n = e._.transform2matrix(n, r())),
                          (c = [['m', t.a, t.b, t.c, t.d, t.e, t.f]]),
                          (p = [['m', n.a, n.b, n.c, n.d, n.e, n.f]]);
                        break;
                      }
                      for (
                        c[m] = [], p[m] = [], a = 0, i = Math.max(o.length, l.length);
                        a < i;
                        a++
                      )
                        a in o && (c[m][a] = o[a]), a in l && (p[m][a] = l[a]);
                    }
                    return { from: f(c), to: f(p), f: d(c) };
                  })(
                    (h = this.matrix),
                    (n = e._.rgTransform.test(n)
                      ? e._.transform2matrix(n, this.getBBox())
                      : e._.transform2matrix(e._.svgTransform2string(n), this.getBBox())),
                    function() {
                      return g.getBBox(1);
                    }
                  )
                );
              if ('d' == t || 'path' == t)
                return {
                  from: f((r = e.path.toCubic(h, n))[0]),
                  to: f(r[1]),
                  f: d(r[0])
                };
              if ('points' == t)
                return {
                  from: (r = o(h).split(e._.separator)),
                  to: (m = o(n).split(e._.separator)),
                  f: function(e) {
                    return e;
                  }
                };
              if (p(h) && p(n)) return { from: parseFloat(h), to: parseFloat(n), f: l };
              var b,
                v,
                y,
                x = h.match(i),
                w = o(n).match(i);
              return x &&
                ((v = x),
                (y = w),
                e.is(v, 'array') && e.is(y, 'array') && v.toString() == y.toString())
                ? {
                    from: parseFloat(h),
                    to: parseFloat(n),
                    f:
                      ((b = x),
                      function(e) {
                        return +e.toFixed(3) + b;
                      })
                  }
                : { from: this.asPX(t), to: this.asPX(t, n), f: l };
            });
        }),
        a.plugin(function(e, t, n, r) {
          for (
            var a = t.prototype,
              i = ('createTouch' in r.doc),
              o = [
                'click',
                'dblclick',
                'mousedown',
                'mousemove',
                'mouseout',
                'mouseover',
                'mouseup',
                'touchstart',
                'touchmove',
                'touchend',
                'touchcancel'
              ],
              s = {
                mousedown: 'touchstart',
                mousemove: 'touchmove',
                mouseup: 'touchend'
              },
              l = function(e, t) {
                var n = 'y' == e ? 'scrollTop' : 'scrollLeft',
                  a = t && t.node ? t.node.ownerDocument : r.doc;
                return a[(n in a.documentElement) ? 'documentElement' : 'body'][n];
              },
              u = function() {
                return this.originalEvent.preventDefault();
              },
              c = function() {
                return this.originalEvent.stopPropagation();
              },
              d = function(e, t, n, r) {
                var a = i && s[t] ? s[t] : t,
                  o = function(a) {
                    var o = l('y', r),
                      d = l('x', r);
                    if (i && s.hasOwnProperty(t))
                      for (
                        var f = 0, p = a.targetTouches && a.targetTouches.length;
                        f < p;
                        f++
                      )
                        if (
                          a.targetTouches[f].target == e ||
                          e.contains(a.targetTouches[f].target)
                        ) {
                          var m = a;
                          ((a = a.targetTouches[f]).originalEvent = m),
                            (a.preventDefault = u),
                            (a.stopPropagation = c);
                          break;
                        }
                    var h = a.clientX + d,
                      g = a.clientY + o;
                    return n.call(r, a, h, g);
                  };
                return (
                  t !== a && e.addEventListener(t, o, !1),
                  e.addEventListener(a, o, !1),
                  function() {
                    return (
                      t !== a && e.removeEventListener(t, o, !1),
                      e.removeEventListener(a, o, !1),
                      !0
                    );
                  }
                );
              },
              f = [],
              p = function(e) {
                for (
                  var t,
                    n = e.clientX,
                    r = e.clientY,
                    a = l('y'),
                    o = l('x'),
                    s = f.length;
                  s--;

                ) {
                  if (((t = f[s]), i)) {
                    for (var u, c = e.touches && e.touches.length; c--; )
                      if (
                        (u = e.touches[c]).identifier == t.el._drag.id ||
                        t.el.node.contains(u.target)
                      ) {
                        (n = u.clientX),
                          (r = u.clientY),
                          (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                      }
                  } else e.preventDefault();
                  var d = t.el.node;
                  d.nextSibling, d.parentNode, d.style.display;
                  (n += o),
                    (r += a),
                    eve(
                      'snap.drag.move.' + t.el.id,
                      t.move_scope || t.el,
                      n - t.el._drag.x,
                      r - t.el._drag.y,
                      n,
                      r,
                      e
                    );
                }
              },
              m = function(t) {
                e.unmousemove(p).unmouseup(m);
                for (var n, r = f.length; r--; )
                  ((n = f[r]).el._drag = {}),
                    eve(
                      'snap.drag.end.' + n.el.id,
                      n.end_scope || n.start_scope || n.move_scope || n.el,
                      t
                    ),
                    eve.off('snap.drag.*.' + n.el.id);
                f = [];
              },
              h = o.length;
            h--;

          )
            !(function(t) {
              (e[t] = a[t] = function(n, r) {
                if (e.is(n, 'function'))
                  (this.events = this.events || []),
                    this.events.push({
                      name: t,
                      f: n,
                      unbind: d(this.node || document, t, n, r || this)
                    });
                else
                  for (var a = 0, i = this.events.length; a < i; a++)
                    if (this.events[a].name == t)
                      try {
                        this.events[a].f.call(this);
                      } catch (e) {}
                return this;
              }),
                (e['un' + t] = a['un' + t] = function(e) {
                  for (var n = this.events || [], r = n.length; r--; )
                    if (n[r].name == t && (n[r].f == e || !e))
                      return (
                        n[r].unbind(),
                        n.splice(r, 1),
                        !n.length && delete this.events,
                        this
                      );
                  return this;
                });
            })(o[h]);
          (a.hover = function(e, t, n, r) {
            return this.mouseover(e, n).mouseout(t, r || n);
          }),
            (a.unhover = function(e, t) {
              return this.unmouseover(e).unmouseout(t);
            });
          var g = [];
          (a.drag = function(t, n, r, a, i, o) {
            var s,
              l = this;
            if (!arguments.length)
              return l.drag(
                function(e, t) {
                  this.attr({ transform: s + (s ? 'T' : 't') + [e, t] });
                },
                function() {
                  s = this.transform().local;
                }
              );
            function u(s, u, c) {
              (s.originalEvent || s).preventDefault(),
                (l._drag.x = u),
                (l._drag.y = c),
                (l._drag.id = s.identifier),
                !f.length && e.mousemove(p).mouseup(m),
                f.push({ el: l, move_scope: a, start_scope: i, end_scope: o }),
                n && eve.on('snap.drag.start.' + l.id, n),
                t && eve.on('snap.drag.move.' + l.id, t),
                r && eve.on('snap.drag.end.' + l.id, r),
                eve('snap.drag.start.' + l.id, i || a || l, u, c, s);
            }
            function c(e, t, n) {
              eve('snap.draginit.' + l.id, l, e, t, n);
            }
            return (
              eve.on('snap.draginit.' + l.id, u),
              (l._drag = {}),
              g.push({ el: l, start: u, init: c }),
              l.mousedown(c),
              l
            );
          }),
            (a.undrag = function() {
              for (var t = g.length; t--; )
                g[t].el == this &&
                  (this.unmousedown(g[t].init),
                  g.splice(t, 1),
                  eve.unbind('snap.drag.*.' + this.id),
                  eve.unbind('snap.draginit.' + this.id));
              return !g.length && e.unmousemove(p).unmouseup(m), this;
            });
        }),
        a.plugin(function(e, t, n, r) {
          t.prototype;
          var a = n.prototype,
            i = /^\s*url\((.+)\)/,
            o = String,
            s = e._.$;
          (e.filter = {}),
            (a.filter = function(n) {
              var r = this;
              'svg' != r.type && (r = r.paper);
              var a = e.parse(o(n)),
                i = e._.id(),
                l = (r.node.offsetWidth, r.node.offsetHeight, s('filter'));
              return (
                s(l, { id: i, filterUnits: 'userSpaceOnUse' }),
                l.appendChild(a.node),
                r.defs.appendChild(l),
                new t(l)
              );
            }),
            eve.on('snap.util.getattr.filter', function() {
              eve.stop();
              var t = s(this.node, 'filter');
              if (t) {
                var n = o(t).match(i);
                return n && e.select(n[1]);
              }
            }),
            eve.on('snap.util.attr.filter', function(n) {
              if (n instanceof t && 'filter' == n.type) {
                eve.stop();
                var r = n.node.id;
                r || (s(n.node, { id: n.id }), (r = n.id)),
                  s(this.node, { filter: e.url(r) });
              }
              (n && 'none' != n) || (eve.stop(), this.node.removeAttribute('filter'));
            }),
            (e.filter.blur = function(t, n) {
              null == t && (t = 2);
              var r = null == n ? t : [t, n];
              return e.format('<feGaussianBlur stdDeviation="{def}"/>', { def: r });
            }),
            (e.filter.blur.toString = function() {
              return this();
            }),
            (e.filter.shadow = function(t, n, r, a, i) {
              return (
                null == i &&
                  (null == a
                    ? ((i = r), (r = 4), (a = '#000'))
                    : ((i = a), (a = r), (r = 4))),
                null == r && (r = 4),
                null == i && (i = 1),
                null == t && ((t = 0), (n = 2)),
                null == n && (n = t),
                (a = e.color(a)),
                e.format(
                  '<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
                  { color: a, dx: t, dy: n, blur: r, opacity: i }
                )
              );
            }),
            (e.filter.shadow.toString = function() {
              return this();
            }),
            (e.filter.grayscale = function(t) {
              return (
                null == t && (t = 1),
                e.format(
                  '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',
                  {
                    a: 0.2126 + 0.7874 * (1 - t),
                    b: 0.7152 - 0.7152 * (1 - t),
                    c: 0.0722 - 0.0722 * (1 - t),
                    d: 0.2126 - 0.2126 * (1 - t),
                    e: 0.7152 + 0.2848 * (1 - t),
                    f: 0.0722 - 0.0722 * (1 - t),
                    g: 0.2126 - 0.2126 * (1 - t),
                    h: 0.0722 + 0.9278 * (1 - t)
                  }
                )
              );
            }),
            (e.filter.grayscale.toString = function() {
              return this();
            }),
            (e.filter.sepia = function(t) {
              return (
                null == t && (t = 1),
                e.format(
                  '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',
                  {
                    a: 0.393 + 0.607 * (1 - t),
                    b: 0.769 - 0.769 * (1 - t),
                    c: 0.189 - 0.189 * (1 - t),
                    d: 0.349 - 0.349 * (1 - t),
                    e: 0.686 + 0.314 * (1 - t),
                    f: 0.168 - 0.168 * (1 - t),
                    g: 0.272 - 0.272 * (1 - t),
                    h: 0.534 - 0.534 * (1 - t),
                    i: 0.131 + 0.869 * (1 - t)
                  }
                )
              );
            }),
            (e.filter.sepia.toString = function() {
              return this();
            }),
            (e.filter.saturate = function(t) {
              return (
                null == t && (t = 1),
                e.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                  amount: 1 - t
                })
              );
            }),
            (e.filter.saturate.toString = function() {
              return this();
            }),
            (e.filter.hueRotate = function(t) {
              return (
                (t = t || 0),
                e.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                  angle: t
                })
              );
            }),
            (e.filter.hueRotate.toString = function() {
              return this();
            }),
            (e.filter.invert = function(t) {
              return (
                null == t && (t = 1),
                e.format(
                  '<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
                  { amount: t, amount2: 1 - t }
                )
              );
            }),
            (e.filter.invert.toString = function() {
              return this();
            }),
            (e.filter.brightness = function(t) {
              return (
                null == t && (t = 1),
                e.format(
                  '<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',
                  { amount: t }
                )
              );
            }),
            (e.filter.brightness.toString = function() {
              return this();
            }),
            (e.filter.contrast = function(t) {
              return (
                null == t && (t = 1),
                e.format(
                  '<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
                  { amount: t, amount2: 0.5 - t / 2 }
                )
              );
            }),
            (e.filter.contrast.toString = function() {
              return this();
            });
        }),
        a.plugin(function(e, t, n, r, a) {
          var i = e._.box,
            o = e.is,
            s = /^[^a-z]*([tbmlrc])/i,
            l = function() {
              return 'T' + this.dx + ',' + this.dy;
            };
          (t.prototype.getAlign = function(e, t) {
            null == t && o(e, 'string') && ((t = e), (e = null));
            var n = (e = e || this.paper).getBBox ? e.getBBox() : i(e),
              r = this.getBBox(),
              a = {};
            switch ((t = (t = t && t.match(s)) ? t[1].toLowerCase() : 'c')) {
              case 't':
                (a.dx = 0), (a.dy = n.y - r.y);
                break;
              case 'b':
                (a.dx = 0), (a.dy = n.y2 - r.y2);
                break;
              case 'm':
                (a.dx = 0), (a.dy = n.cy - r.cy);
                break;
              case 'l':
                (a.dx = n.x - r.x), (a.dy = 0);
                break;
              case 'r':
                (a.dx = n.x2 - r.x2), (a.dy = 0);
                break;
              default:
                (a.dx = n.cx - r.cx), (a.dy = 0);
            }
            return (a.toString = l), a;
          }),
            (t.prototype.align = function(e, t) {
              return this.transform('...' + this.getAlign(e, t));
            });
        }),
        a.plugin(function(e, t, n, a, i) {
          var o = t.prototype,
            s = e.is,
            l = String,
            u = 'hasOwnProperty';
          function c(e, t, n) {
            return function(r) {
              var a = r.slice(e, t);
              return 1 == a.length && (a = a[0]), n ? n(a) : a;
            };
          }
          var d = function(e, t, n, a) {
            'function' != typeof n || n.length || ((a = n), (n = r.linear)),
              (this.attr = e),
              (this.dur = t),
              n && (this.easing = n),
              a && (this.callback = a);
          };
          (e._.Animation = d),
            (e.animation = function(e, t, n, r) {
              return new d(e, t, n, r);
            }),
            (o.inAnim = function() {
              var e = [];
              for (var t in this.anims)
                this.anims[u](t) &&
                  (function(t) {
                    e.push({
                      anim: new d(t._attrs, t.dur, t.easing, t._callback),
                      mina: t,
                      curStatus: t.status(),
                      status: function(e) {
                        return t.status(e);
                      },
                      stop: function() {
                        t.stop();
                      }
                    });
                  })(this.anims[t]);
              return e;
            }),
            (e.animate = function(e, t, n, a, i, o) {
              'function' != typeof i || i.length || ((o = i), (i = r.linear));
              var s = r.time(),
                l = r(e, t, s, s + a, r.time, n, i);
              return o && eve.once('mina.finish.' + l.id, o), l;
            }),
            (o.stop = function() {
              for (var e = this.inAnim(), t = 0, n = e.length; t < n; t++) e[t].stop();
              return this;
            }),
            (o.animate = function(e, t, n, a) {
              'function' != typeof n || n.length || ((a = n), (n = r.linear)),
                e instanceof d &&
                  ((a = e.callback), (n = e.easing), (t = e.dur), (e = e.attr));
              var i,
                o,
                f,
                p,
                m = [],
                h = [],
                g = {},
                b = this;
              for (var v in e)
                if (e[u](v)) {
                  b.equal
                    ? ((i = (p = b.equal(v, l(e[v]))).from), (o = p.to), (f = p.f))
                    : ((i = +b.attr(v)), (o = +e[v]));
                  var y = s(i, 'array') ? i.length : 1;
                  (g[v] = c(m.length, m.length + y, f)),
                    (m = m.concat(i)),
                    (h = h.concat(o));
                }
              var x = r.time(),
                w = r(
                  m,
                  h,
                  x,
                  x + t,
                  r.time,
                  function(e) {
                    var t = {};
                    for (var n in g) g[u](n) && (t[n] = g[n](e));
                    b.attr(t);
                  },
                  n
                );
              return (
                (b.anims[w.id] = w),
                (w._attrs = e),
                (w._callback = a),
                eve('snap.animcreated.' + b.id, w),
                eve.once('mina.finish.' + w.id, function() {
                  eve.off('mina.*.' + w.id), delete b.anims[w.id], a && a.call(b);
                }),
                eve.once('mina.stop.' + w.id, function() {
                  eve.off('mina.*.' + w.id), delete b.anims[w.id];
                }),
                b
              );
            });
        }),
        a.plugin(function(e, t, n, r) {
          function a(e) {
            e = e.split(/(?=#)/);
            var t = new String(e[5]);
            return (
              (t[50] = e[0]),
              (t[100] = e[1]),
              (t[200] = e[2]),
              (t[300] = e[3]),
              (t[400] = e[4]),
              (t[500] = e[5]),
              (t[600] = e[6]),
              (t[700] = e[7]),
              (t[800] = e[8]),
              (t[900] = e[9]),
              e[10] &&
                ((t.A100 = e[10]), (t.A200 = e[11]), (t.A400 = e[12]), (t.A700 = e[13])),
              t
            );
          }
          (e.mui = {}),
            (e.flat = {}),
            (e.mui.red = a(
              '#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000'
            )),
            (e.mui.pink = a(
              '#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162'
            )),
            (e.mui.purple = a(
              '#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF'
            )),
            (e.mui.deeppurple = a(
              '#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA'
            )),
            (e.mui.indigo = a(
              '#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE'
            )),
            (e.mui.blue = a(
              '#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF'
            )),
            (e.mui.lightblue = a(
              '#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA'
            )),
            (e.mui.cyan = a(
              '#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4'
            )),
            (e.mui.teal = a(
              '#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5'
            )),
            (e.mui.green = a(
              '#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853'
            )),
            (e.mui.lightgreen = a(
              '#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17'
            )),
            (e.mui.lime = a(
              '#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00'
            )),
            (e.mui.yellow = a(
              '#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600'
            )),
            (e.mui.amber = a(
              '#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00'
            )),
            (e.mui.orange = a(
              '#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00'
            )),
            (e.mui.deeporange = a(
              '#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00'
            )),
            (e.mui.brown = a(
              '#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723'
            )),
            (e.mui.grey = a(
              '#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121'
            )),
            (e.mui.bluegrey = a(
              '#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238'
            )),
            (e.flat.turquoise = '#1abc9c'),
            (e.flat.greensea = '#16a085'),
            (e.flat.sunflower = '#f1c40f'),
            (e.flat.orange = '#f39c12'),
            (e.flat.emerland = '#2ecc71'),
            (e.flat.nephritis = '#27ae60'),
            (e.flat.carrot = '#e67e22'),
            (e.flat.pumpkin = '#d35400'),
            (e.flat.peterriver = '#3498db'),
            (e.flat.belizehole = '#2980b9'),
            (e.flat.alizarin = '#e74c3c'),
            (e.flat.pomegranate = '#c0392b'),
            (e.flat.amethyst = '#9b59b6'),
            (e.flat.wisteria = '#8e44ad'),
            (e.flat.clouds = '#ecf0f1'),
            (e.flat.silver = '#bdc3c7'),
            (e.flat.wetasphalt = '#34495e'),
            (e.flat.midnightblue = '#2c3e50'),
            (e.flat.concrete = '#95a5a6'),
            (e.flat.asbestos = '#7f8c8d'),
            (e.importMUIColors = function() {
              for (var t in e.mui) e.mui.hasOwnProperty(t) && (window[t] = e.mui[t]);
            });
        }),
        (e.exports = a);
    },
    './public/img/default_community.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/default_community.png');
    },
    './public/img/default_user.jpg': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/default_user.jpg');
    },
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
    './src/modules/activity/activity.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'setActivity', function() {
          return b;
        }),
        n.d(t, 'resetActivity', function() {
          return v;
        }),
        n.d(t, 'clearCount', function() {
          return y;
        }),
        n.d(t, 'setCount', function() {
          return x;
        }),
        n.d(t, 'getActivity', function() {
          return w;
        }),
        n.d(t, 'markRead', function() {
          return E;
        }),
        n.d(t, 'createNotification', function() {
          return j;
        }),
        n.d(t, 'getNotificationCount', function() {
          return C;
        }),
        n.d(t, 'showBannerPrompt', function() {
          return O;
        }),
        n.d(t, 'hideBannerPrompt', function() {
          return _;
        }),
        n.d(t, 'enableDesktopNotifications', function() {
          return F;
        }),
        n.d(t, 'showBetPrompt', function() {
          return T;
        }),
        n.d(t, 'showPushNotificationPrompt', function() {
          return S;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(i),
        s = n('./src/core/actionTypes.js'),
        l = n('./src/modules/ui/error.actions.js'),
        u = n('./src/utils/index.js');
      function c() {
        return (c = o()(function*() {
          try {
            var e = yield navigator.serviceWorker.ready,
              t = yield e.pushManager.getSubscription();
            if (t) return t;
            var n = d(
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4'
            );
            return e.pushManager.subscribe({
              userVisibleOnly: !0,
              applicationServerKey: n
            });
          } catch (e) {
            return console.log(e), null;
          }
        })).apply(this, arguments);
      }
      function d(e) {
        for (
          var t = (e + '='.repeat((4 - (e.length % 4)) % 4))
              .replace(/-/g, '+')
              .replace(/_/g, '/'),
            n = window.atob(t),
            r = new Uint8Array(n.length),
            a = 0;
          a < n.length;
          ++a
        )
          r[a] = n.charCodeAt(a);
        return r;
      }
      (function() {
        try {
          navigator.serviceWorker.register('/service-worker.js');
        } catch (e) {
          console.log(e);
        }
      })();
      var f = n('./src/modules/auth/auth.actions.js');
      function p(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function(t) {
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var h = ''.concat('http://localhost:3000', '/api/notification'),
        g = e => ({
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer '.concat(e)
          }
        });
      function b(e, t, n) {
        return { type: s.G, payload: { data: e, type: t, index: n } };
      }
      function v(e) {
        return { type: 'RESET_ACTIVITY', payload: e };
      }
      function y() {
        return { type: 'CLEAR_COUNT' };
      }
      function x(e) {
        return { type: s.O, payload: e };
      }
      function w(e) {
        return (function() {
          var t = o()(function*(t) {
            try {
              var n = yield t(
                u.b.request({
                  method: 'GET',
                  endpoint: 'notification',
                  path: '/',
                  auth: !0,
                  query: { skip: e }
                })
              );
              t(b(n, 'personal', e)), t(l.a('activity', !1));
            } catch (e) {
              l.a('activity', !0, e.message);
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function E() {
        return e =>
          u.f
            .getToken()
            .then(e =>
              fetch(''.concat(h, '/markread'), m(m({}, g(e)), {}, { method: 'PUT' }))
            )
            .then(() => {
              e({ type: 'CLEAR_COUNT' });
            })
            .catch(null);
      }
      function j(e) {
        return () =>
          u.f
            .getToken()
            .then(t =>
              fetch(
                ''.concat(h),
                m(m({}, g(t)), {}, { method: 'POST', body: JSON.stringify(e) })
              )
            )
            .catch(null);
      }
      function C() {
        return (function() {
          var e = o()(function*(e) {
            try {
              var t = yield e(
                u.b.request({
                  method: 'GET',
                  endpoint: 'notification',
                  path: '/unread',
                  auth: !0
                })
              );
              e(x(t.unread));
            } catch (e) {}
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function O(e, t) {
        return { type: s.yb, payload: { promptType: e, promptProps: t } };
      }
      function _(e) {
        return { type: s.l, payload: e };
      }
      function F() {
        return (function() {
          var e = o()(function*(e) {
            try {
              var t = yield (function() {
                return c.apply(this, arguments);
              })();
              e(
                Object(f.updateNotificationSettings)({ desktop: { all: !0 } }, t.toJSON())
              ),
                e(_());
            } catch (e) {
              console.log(e);
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      var T = (function() {
          var e = o()(function*(e) {
            return !(yield u.f.isDismissed('betDismissed', 14)) && e(O('bet'));
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        S = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (function() {
            var t = o()(function*(t) {
              return k({ dispatch: t, promptProps: e });
            });
            return function(e) {
              return t.apply(this, arguments);
            };
          })();
        };
      function k(e) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = o()(function*(e) {
          var { dispatch: t, promptProps: n } = e;
          return (
            (!Notification ||
              ('granted' !== Notification.permission &&
                'denied' !== Notification.permission)) &&
            !(yield u.f.isDismissed('pushDismissed', 30)) && t(O('push', n))
          );
        })).apply(this, arguments);
      }
    },
    './src/modules/navigation/social.icons.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return g;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        i = n('../../node_modules/react/index.js'),
        o = n.n(i),
        s = n('../../node_modules/prop-types/index.js'),
        l = n.n(s),
        u = n('./src/modules/styled/uni.js'),
        c = n('./src/modules/navigation/ULink.component.js'),
        d = n('./public/img/twitter-black.png'),
        f = n('./public/img/email.png'),
        p = n('./public/img/slack.png'),
        m = [
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
          { href: 'https://twitter.com/relevantfeed', source: d, target: '_blank' },
          {
            href:
              'https://join.slack.com/t/relevantcommunity/shared_invite/enQtMjIwMjEwNzUzMjUzLWVjODViM2ZkZDE5ZWMyYzcxMzI3ZTQ3Njc4YTBmYmVmMTQxZGJiNDcxYzljODZlM2U0NGU1YTE3MDlhM2I1NmI',
            source: p,
            target: '_blank'
          },
          { href: 'mailto:info@relevant.community', source: f, target: '_blank' }
        ],
        h = e => {
          var { href: t, source: n, target: r, actions: a } = e;
          return n
            ? o.a.createElement(
                c.a,
                {
                  external: !0,
                  to: t,
                  onPress: () => a.goToUrl(t),
                  target: r || '_self',
                  inline: 1
                },
                o.a.createElement(u.s, {
                  w: 2.8,
                  h: 2.4,
                  mr: 2,
                  resizeMode: 'contain',
                  source: n
                })
              )
            : null;
        };
      function g(e) {
        var { actions: t } = e;
        return o.a.createElement(
          u.E,
          { flex: 1, fdirection: 'row', mt: 2, mb: [2, 0] },
          m.map(e => o.a.createElement(h, a()({ actions: t, key: e.href }, e)))
        );
      }
      (h.propTypes = {
        href: l.a.string,
        source: l.a.oneOfType([l.a.number, l.a.string, l.a.object]),
        target: l.a.string,
        actions: l.a.object
      }),
        (g.propTypes = { actions: l.a.object });
    },
    './src/modules/navigation/web/withSideNav.component.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(r),
        i = n('../../node_modules/react/index.js'),
        o = n.n(i),
        s = n('../../node_modules/prop-types/index.js'),
        l = n.n(s),
        u = n('../../node_modules/react-router-config/esm/react-router-config.js'),
        c = n('../../node_modules/react-redux/es/index.js'),
        d = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        f = n.n(d),
        p = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        m = n.n(p),
        h = n('../../node_modules/redux/es/redux.js'),
        g = n('./src/modules/navigation/navigation.actions.js'),
        b = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        v = n('./src/modules/user/UAvatar.component.js'),
        y = n('./src/modules/stats/coinStat.component.js'),
        x = n('./src/modules/stats/rStat.component.js'),
        w = n('./src/modules/navigation/ULink.component.js'),
        E = n('./src/modules/auth/auth.actions.js'),
        j = n('../../node_modules/react-tooltip/dist/index.es.js'),
        C = n('./src/styles/index.js'),
        O = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        _ = n('./src/modules/styled/uni.js'),
        F = n('./src/utils/rewards.js'),
        T = n('./src/styles/layout.js');
      function S(e, t) {
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function(t) {
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function N() {
        var e = m()([
          '\n  display: flex;\n  flex-direction: column;\n  padding-left: ',
          ';\n  flex-shrink: 1;\n'
        ]);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      var B = O.b.View(N(), Object(C.i)(2));
      class A extends i.Component {
        componentDidMount() {
          j.a.rebuild && j.a.rebuild();
        }
        componentDidUpdate(e) {
          var { auth: t, actions: n, user: r } = this.props;
          t.community === e.auth.community ||
            !r ||
            (r.relevance && r.relevance.community === t.community) ||
            n.getUser(),
            r && t.community !== e.auth.community && n.cacheCommunity(t.community);
        }
        render() {
          var { user: e, earnings: t, actions: n, auth: r } = this.props,
            { community: a } = r;
          if (!e) return null;
          var i = 0;
          t.pending.forEach(e => {
            var n = t.entities[e];
            i += Object(F.b)(n);
          });
          var s = (e.twitterId && e.confirmed) || !a;
          return o.a.createElement(
            _.E,
            { bb: !0, flex: 1 },
            o.a.createElement(
              _.E,
              { p: [T.SIDE_NAV_PADDING, 2], pb: [4, 3] },
              o.a.createElement(
                _.E,
                { fdirection: 'row', justify: 'space-between', align: 'center' },
                o.a.createElement(_.q, null, e.name),
                o.a.createElement(
                  w.a,
                  {
                    inline: 1,
                    hu: !0,
                    to: '/user/wallet',
                    onPress: () => n.goToTab('wallet')
                  },
                  o.a.createElement(_.i, { c: C.b.blue }, 'My Wallet')
                )
              ),
              o.a.createElement(
                _.E,
                { fdirection: 'row', align: 'center', mt: [3, 2] },
                o.a.createElement(v.a, {
                  user: e,
                  size: 8,
                  noName: !0,
                  goToProfile: () => n.goToTab('myProfile')
                }),
                o.a.createElement(
                  B,
                  null,
                  o.a.createElement(
                    _.E,
                    { fdirection: 'row' },
                    o.a.createElement(
                      w.a,
                      {
                        to: '/user/wallet',
                        inline: 1,
                        onPress: () => n.push('statsView')
                      },
                      o.a.createElement(x.a, {
                        user: e,
                        align: 'center',
                        'data-for': 'mainTooltip',
                        'data-tip': JSON.stringify({
                          type: 'TEXT',
                          props: {
                            text:
                              'Earn Reputation by posting comments.\nThe higher your score, the more weight your votes have.'
                          }
                        })
                      })
                    ),
                    o.a.createElement(
                      w.a,
                      {
                        to: '/user/wallet',
                        inline: 1,
                        onPress: () => n.goToTab('wallet')
                      },
                      o.a.createElement(y.a, {
                        user: e,
                        isOwner: !0,
                        align: 'center',
                        'data-for': 'mainTooltip',
                        'data-tip': JSON.stringify({
                          type: 'TEXT',
                          props: {
                            text:
                              'Get coins by upvoting quality links.\nThe higher your Reputation the more coins you earn.'
                          }
                        })
                      })
                    )
                  ),
                  o.a.createElement(
                    _.E,
                    { fdirection: 'row', align: 'center', color: C.b.grey, mt: 2 },
                    o.a.createElement(_.x, { fs: 1.5 }, 'Pending Rewards: '),
                    o.a.createElement(y.a, {
                      size: 1.5,
                      mr: 1.5,
                      fs: 1.5,
                      secondary: !0,
                      c: C.b.black,
                      amount: i,
                      align: 'baseline',
                      'data-for': 'mainTooltip',
                      'data-tip': JSON.stringify({
                        type: 'TEXT',
                        props: {
                          text:
                            'These are your projected earnings for upvoting quality posts.\nRewards are paid out 3 days after a link is posted.'
                        }
                      })
                    })
                  )
                )
              ),
              o.a.createElement(
                _.E,
                { fdirection: 'row', align: 'baseline', mt: 3 },
                s
                  ? null
                  : o.a.createElement(
                      w.a,
                      {
                        to: '/user/wallet',
                        c: C.b.blue,
                        hu: !0,
                        onPress: () => {
                          n.push('getTokens');
                        },
                        onClick: e => {
                          e.preventDefault(), n.showModal('getTokens');
                        }
                      },
                      o.a.createElement(_.i, { c: C.b.blue }, 'Get Tokens')
                    ),
                s ? null : o.a.createElement(_.B, null, '    '),
                a &&
                  o.a.createElement(
                    w.a,
                    {
                      to: '/user/wallet',
                      ml: 1,
                      c: C.b.blue,
                      hu: !0,
                      onPress: () => {
                        n.push('invites');
                      },
                      onClick: e => {
                        e.preventDefault(), n.showModal('invite');
                      }
                    },
                    o.a.createElement(_.i, { c: C.b.blue }, 'Invite Friends')
                  )
              )
            )
          );
        }
      }
      a()(A, 'propTypes', {
        user: l.a.object,
        earnings: l.a.object,
        actions: l.a.object,
        auth: l.a.object
      });
      var M = Object(c.c)(
          e => {
            var t;
            return {
              auth: e.auth,
              user: null == e || null === (t = e.auth) || void 0 === t ? void 0 : t.user,
              earnings: e.earnings
            };
          },
          e => ({
            actions: Object(h.bindActionCreators)(
              k(k({}, g), {}, { cacheCommunity: E.cacheCommunity, getUser: E.getUser }),
              e
            )
          })
        )(A),
        D = n('../../node_modules/lodash/get.js'),
        P = n.n(D),
        I = n('./src/utils/text.js'),
        z = n('./src/modules/community/community.actions.js');
      L.propTypes = {
        community: l.a.object,
        children: l.a.node,
        members: l.a.array,
        view: l.a.object,
        auth: l.a.object,
        screenSize: l.a.number,
        viewCommunityMembers: l.a.func,
        showSettings: l.a.func,
        userCommunities: l.a.array,
        userMemberships: l.a.array
      };
      var R = Object(i.memo)(L);
      function L(e) {
        var {
            community: t,
            children: n,
            members: r,
            view: a,
            screenSize: s,
            auth: l,
            viewCommunityMembers: u,
            userCommunities: d,
            showSettings: f,
            userMemberships: p
          } = e,
          m = Object(c.d)();
        Object(i.useEffect)(() => {
          r.length || m(Object(z.getCommunityMembers)({ slug: t.slug }));
        }, []);
        var h = P()(t, 'topics', []),
          b = P()(t, 'memberCount', 0),
          y = P()(l, 'user._id', null),
          x = r.filter(e => e.embeddedUser._id !== y);
        l.user && d.find(e => e === t._id) && x.unshift({ _id: y, embeddedUser: l.user });
        var E = p.find(e => e.communityId === t._id),
          j = (E && E.superAdmin) || 'admin' === P()(l, 'user.role'),
          O = x.slice(0, s ? 14 : 12),
          F = P()(a, 'sort') || 'new';
        return o.a.createElement(
          _.E,
          { bg: C.b.white, mr: '1px' },
          o.a.createElement(_.E, { mt: [T.SIDE_NAV_PADDING, 2] }),
          n,
          o.a.createElement(
            _.E,
            {
              bb: !0,
              p: [
                '0 '.concat(T.SIDE_NAV_PADDING, ' 4 ').concat(T.SIDE_NAV_PADDING),
                '0 2 4 2'
              ]
            },
            o.a.createElement(
              _.E,
              { m: '0.5 0 0 5.5' },
              h.map(e =>
                o.a.createElement(
                  w.a,
                  {
                    key: e,
                    color: C.b.grey,
                    hc: C.b.black,
                    ac: C.b.black,
                    navLink: !0,
                    onPress: () => m(Object(g.goToTopic)(e)),
                    to: '/'
                      .concat(t.slug, '/')
                      .concat(F, '/')
                      .concat(e)
                  },
                  o.a.createElement(
                    _.e,
                    { mt: 0.5, mb: 0.5 },
                    o.a.createElement(_.l, { key: e }, '#', e)
                  )
                )
              )
            ),
            o.a.createElement(
              _.E,
              { mt: [T.SIDE_NAV_PADDING, 2] },
              o.a.createElement(
                _.d,
                null,
                o.a.createElement(I.Linkify, null, t.description)
              )
            ),
            o.a.createElement(
              _.E,
              {
                mt: T.SIDE_NAV_PADDING,
                mb: 2,
                fdirection: 'row',
                justify: 'space-between'
              },
              o.a.createElement(_.l, { c: C.b.black }, ''.concat(b, ' Members')),
              o.a.createElement(
                w.a,
                { inline: 1, to: '#', onPress: u, onClick: u },
                o.a.createElement(_.l, { c: C.b.blue }, 'See All')
              )
            ),
            o.a.createElement(
              _.E,
              { fdirection: 'row', wrap: !0 },
              O.map(e =>
                o.a.createElement(v.a, { key: e._id, user: e.embeddedUser, m: '0 1 1 0' })
              )
            ),
            j &&
              o.a.createElement(
                _.x,
                { mt: 2, c: C.b.blue, onPress: f, key: 'settings_', p: '0.5 0' },
                'Settings'
              )
          )
        );
      }
      var W = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        V = n.n(W);
      function q() {
        var e = m()(['\n  background-color: ', ';\n']);
        return (
          (q = function() {
            return e;
          }),
          e
        );
      }
      var G = Object(O.b)(_.s)(q(), e => (e.image ? 'transparent' : C.b.grey));
      function U(e) {
        var { community: t, c: r } = e,
          a = V()(e, ['community', 'c']),
          i = t.image ? { uri: t.image } : n('./public/img/default_community.png');
        return o.a.createElement(
          _.E,
          f()({ align: 'center', fdirection: 'row' }, a),
          o.a.createElement(G, { w: 4, h: 4, mr: 1.5, source: i, resizeMode: 'cover' }),
          o.a.createElement(_.l, { lh: 1.75, c: r || C.b.black }, t.name)
        );
      }
      U.propTypes = { community: l.a.object, c: l.a.string };
      var Y = U,
        H = n('../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js'),
        $ = n('../../node_modules/graphql-tag/src/index.js'),
        X = n.n($);
      function K() {
        var e = m()([
          '\n  subscription IncrementUread($communities: [ID!]!) {\n    updateUnread(communities: $communities) {\n      communityId\n      community\n    }\n  }\n'
        ]);
        return (
          (K = function() {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = m()([
          '\n  mutation UpdateUnread($_id: ID!) {\n    updateUnread(record: { _id: $_id, unread: 0 }) {\n      record {\n        _id\n        unread\n        pagerank\n        embeddedUser {\n          handle\n        }\n      }\n    }\n  }\n'
        ]);
        return (
          (J = function() {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = m()([
          '\n  query MemberById($_id: MongoID!) {\n    memberById(_id: $_id) {\n      _id\n      unread\n      user\n      community\n      communityId\n      pagerank\n    }\n  }\n'
        ]);
        return (
          (Z = function() {
            return e;
          }),
          e
        );
      }
      function Q() {
        var e = m()([
          '\n  query myMemberships($communityId: MongoID) {\n    myMemberships(filter: { communityId: $communityId }) {\n      _id\n      unread\n      user\n      community\n      communityId\n      pagerank\n    }\n  }\n'
        ]);
        return (
          (Q = function() {
            return e;
          }),
          e
        );
      }
      var ee = X()(Q()),
        te = (X()(Z()), X()(J())),
        ne = X()(K());
      function re(e, t) {
        var n = ae(),
          r = n && n.find(t => t.communityId === e._id),
          a = r && r.unread;
        return (
          (function(e) {
            var t = ae(),
              n = Object(H.a)(),
              { communityId: r } = e || {};
            Object(H.d)(ne, {
              ssr: !1,
              variables: { communities: [r] },
              onSubscriptionData: () => {
                e.unread++, n.writeQuery({ query: ee, data: { myMemberships: t } });
              }
            });
          })(r),
          (function(e, t, n) {
            var r = Object(H.a)(),
              [a] = Object(H.b)(te),
              i = ae();
            e &&
              n &&
              ((t.unread = 0),
              r.writeQuery({ query: ee, data: { myMemberships: i } }),
              a({ variables: { _id: t._id } }));
          })(a, r, t),
          a
        );
      }
      function ae() {
        var e = Object(c.e)(e => e.auth.user),
          { data: t = { myMemberships: [] } } = Object(H.c)(ee, { skip: !e, ssr: !1 }),
          { myMemberships: n } = t;
        return n;
      }
      function ie() {
        var e = m()([
          '\n  display: flex;\n  align-items: center;\n  color: ',
          ';\n  &:hover > div > div:first-child {\n    text-decoration: underline;\n    text-decoration-color: ',
          ';\n  }\n  &:hover {\n    background: ',
          ';\n  }\n'
        ]);
        return (
          (ie = function() {
            return e;
          }),
          e
        );
      }
      var oe = Object(O.a)(ie(), C.b.black, C.b.black, C.b.white);
      function se(e) {
        var { viewCommunityMembers: t, showSettings: n } = e,
          r = Object(c.e)(e => e.community),
          a = Object(c.e)(e => e.auth),
          i = Object(c.e)(e => e.navigation.discover),
          s = Object(c.e)(e => e.navigation.screenSize),
          {
            communityMembers: l,
            members: u,
            communities: d,
            userCommunities: f,
            userMemberships: p
          } = r,
          m = d[r.active],
          h = P()(l, r.active, []).map(e => u[e]);
        return o.a.createElement(
          _.E,
          { flex: 1 },
          o.a.createElement(
            _.E,
            { bb: !0 },
            m &&
              o.a.createElement(
                R,
                {
                  key: m._id,
                  community: m,
                  userCommunities: f,
                  userMemberships: p,
                  members: h,
                  screenSize: s,
                  viewCommunityMembers: t,
                  showSettings: n,
                  view: i,
                  auth: a
                },
                o.a.createElement(ue, { community: m, active: !0 })
              ),
            o.a.createElement(_.E, { m: '2 0' }, o.a.createElement(le, null))
          ),
          o.a.createElement(
            _.d,
            { m: [T.SIDE_NAV_PADDING, 2] },
            "We'll be adding more communities soon!",
            '\n\n'
          )
        );
      }
      se.propTypes = { viewCommunityMembers: l.a.func, showSettings: l.a.func };
      var le = Object(i.memo)(() => {
        var { communities: e, list: t, active: n } = Object(c.e)(e => e.community);
        return t
          .map(t => e[t])
          .filter(e => e && n !== e.slug)
          .map(e => o.a.createElement(ue, { key: e._id, community: e }));
      });
      ce.propTypes = { community: l.a.object, active: l.a.bool };
      var ue = Object(i.memo)(ce);
      function ce(e) {
        var { community: t, active: n } = e,
          r = Object(c.d)(),
          a = re(t, n);
        return o.a.createElement(
          w.a,
          {
            flex: 1,
            styles: oe,
            key: t._id,
            to: '/' + t.slug + '/new',
            onPress: () => {
              r(Object(g.closeDrawer)()),
                requestAnimationFrame(() => {
                  r(Object(E.setCommunity)(t.slug)), r(Object(g.resetTabs)());
                });
            }
          },
          o.a.createElement(
            _.E,
            { flex: 1, fdirection: 'row', align: 'center', justify: 'space-between' },
            o.a.createElement(Y, {
              community: t,
              p: ['1 '.concat(T.SIDE_NAV_PADDING), '1 2']
            }),
            o.a.createElement(_.c, { mr: [T.SIDE_NAV_PADDING, 2], number: a })
          )
        );
      }
      var de = Object(i.memo)(se),
        fe = n('./src/modules/navigation/social.icons.js'),
        pe = e => {
          var { actions: t } = e;
          return o.a.createElement(
            _.E,
            { m: [T.SIDE_NAV_PADDING, 2], mb: 8 },
            o.a.createElement(fe.a, { actions: t }),
            o.a.createElement(
              _.E,
              { fdirection: 'row', mt: 3 },
              o.a.createElement(
                w.a,
                { inline: 1, to: '/info/faq' },
                o.a.createElement(_.d, { c: C.b.blue }, 'FAQ')
              ),
              o.a.createElement(_.u, null, ' | '),
              o.a.createElement(
                w.a,
                { inline: 1, to: '/eula.html', external: !0, target: '_blank' },
                o.a.createElement(_.d, { c: C.b.blue }, 'Content Policy')
              ),
              o.a.createElement(_.u, null, ' | '),
              o.a.createElement(
                w.a,
                { inline: 1, external: !0, to: '/privacy.html', target: '_blank' },
                o.a.createElement(_.d, { c: C.b.blue }, 'Privacy Policy')
              )
            ),
            o.a.createElement(_.d, { mt: 2 }, '© 2019 Relevant Protocols Inc.')
          );
        };
      pe.propTypes = { actions: l.a.object };
      var me = Object(i.memo)(pe),
        he = n('./src/modules/styled/web.js'),
        ge = n('./src/modules/ui/web/menuIcon.component.js'),
        be = n('./src/modules/navigation/history.js');
      function ve() {
        var e = m()([
          '\n  position: ',
          ';\n  background: ',
          ';\n  height: ',
          ';\n  top: 0;\n  z-index: 10;\n  flex: 1;\n  ',
          '\n'
        ]);
        return (
          (ve = function() {
            return e;
          }),
          e
        );
      }
      function ye() {
        var e = m()([
          '\n  flex-direction: column;\n  display: block;\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch;\n  flex: 1;\n  width: ',
          ';\n'
        ]);
        return (
          (ye = function() {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = m()([
          '\n  background: ',
          ';\n  width: ',
          ';\n  max-width: ',
          ';\n  ',
          '\n  display: flex;\n  z-index: 100;\n  height: calc(100vh - ',
          ');\n  top: 0;\n'
        ]);
        return (
          (xe = function() {
            return e;
          }),
          e
        );
      }
      function we() {
        var e = m()(['\n  position: sticky;\n  z-index: 100;\n  top: ', ';\n']);
        return (
          (we = function() {
            return e;
          }),
          e
        );
      }
      var Ee = b.default.div(we(), e => (e.top ? e.top : 0)),
        je = b.default.div(
          xe(),
          C.b.secondaryBG,
          C.e.sideNavWidth,
          C.e.sideNavWidth,
          C.e.universalBorder('right'),
          e => (e.top ? e.top : '0px')
        ),
        Ce = b.default.div(ye(), C.e.sideNavWidth),
        Oe = Object(b.default)(he.r)(
          ve(),
          e => (e.screenSize ? 'relative' : 'sticky'),
          C.b.secondaryBG,
          C.e.headerHeight,
          C.f.border
        );
      class _e extends i.Component {
        componentDidMount() {
          be.a.listen(() => {
            this.props.actions.closeWebSideNav();
          });
        }
        render() {
          var { community: e, actions: t, notif: n, navigation: r } = this.props,
            a = '/'.concat(e || 'relevant', '/new');
          return o.a.createElement(
            Ee,
            { top: n.promptType ? C.e.BANNER_PROMPT_HEIGHT : null },
            o.a.createElement(
              je,
              { flex: 1, top: n.promptType ? C.e.BANNER_PROMPT_HEIGHT : null },
              o.a.createElement(
                Ce,
                { flex: 1 },
                o.a.createElement(
                  Oe,
                  {
                    bb: !0,
                    h: C.e.headerHeight,
                    align: 'center',
                    fdirection: 'row',
                    justify: 'space-between',
                    p: ['0 '.concat(T.SIDE_NAV_PADDING), '0 2'],
                    screenSize: r.screenSize
                  },
                  o.a.createElement(
                    w.a,
                    { align: 'flex-start', to: a },
                    o.a.createElement(he.e, {
                      h: 4,
                      w: 22,
                      resizeMode: 'contain',
                      src: '/img/logo-opt.png',
                      alt: 'Relevant'
                    })
                  ),
                  o.a.createElement(ge.a, null)
                ),
                o.a.createElement(he.r, { flex: 1 }, o.a.createElement(M, null)),
                o.a.createElement(
                  he.r,
                  { flex: 1 },
                  o.a.createElement(
                    de,
                    f()({}, this.props, {
                      viewCommunityMembers: () => {
                        t.showModal('communityMembers');
                      },
                      showSettings: () => {
                        t.showModal('communitySettings');
                      }
                    })
                  )
                ),
                o.a.createElement(me, null)
              )
            )
          );
        }
      }
      _e.propTypes = {
        actions: l.a.object,
        community: l.a.string,
        navigation: l.a.object,
        notif: l.a.object
      };
      var Fe = Object(c.c)(
          e => ({
            community: e.auth.community,
            isAuthenticated: e.auth.isAuthenticated,
            navigation: e.navigation,
            notif: e.notif
          }),
          e => ({
            actions: Object(h.bindActionCreators)(
              { showModal: g.showModal, closeWebSideNav: g.closeWebSideNav },
              e
            )
          })
        )(_e),
        Te = n(
          '../../node_modules/react-router-dom/node_modules/react-router/esm/react-router.js'
        ),
        Se = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        ke = n.n(Se),
        Ne = n('./src/utils/index.js'),
        Be = n('./src/modules/activity/activity.actions.js'),
        Ae = n('./src/utils/alert.js'),
        { alert: Me } = Object(Ae.Alert)();
      function De(e) {
        var {
          messageText: t,
          actionText: n,
          dismissText: r,
          onDismiss: a,
          onClick: i,
          title: o
        } = e;
        return Me(
          o || t,
          o ? t : null,
          [
            { text: r || 'Not Now', onPress: a },
            { text: n || 'Enable', onPress: i }
          ],
          { cancelable: !1 }
        );
      }
      function Pe(e) {
        var {
          messageText: t,
          actionText: n,
          dismissText: r,
          onClick: a,
          onDismiss: i
        } = e;
        return o.a.createElement(
          _.E,
          { fdirection: 'row', justify: 'space-between', align: 'center' },
          o.a.createElement(
            _.d,
            { c: C.b.black, inline: 1 },
            t,
            o.a.createElement(
              w.a,
              { to: '#' },
              o.a.createElement(_.B, { inline: 1, onClick: a }, n)
            )
          ),
          o.a.createElement(w.a, { onClick: i, to: '#', c: C.b.black }, r)
        );
      }
      (De.propTypes = {
        messageText: l.a.string,
        actionText: l.a.string,
        dismissText: l.a.string,
        title: l.a.string,
        onClick: l.a.func,
        onDismiss: l.a.func
      }),
        (Pe.propTypes = {
          messageText: l.a.string,
          actionText: l.a.string,
          dismissText: l.a.string,
          onClick: l.a.func,
          onDismiss: l.a.func
        });
      var Ie = {
          messageText: 'Enable notifications and get alerted when people respond',
          actionText: 'Enable',
          dismissText: 'Dismiss'
        },
        ze = {
          upvoteComment: 'Get notified when someone comments on this thread',
          upvotePost: 'Get notified when you earn rewards for upvoting posts',
          createComment: 'Get notified when someone replies to your comment',
          createPost: 'Get notified when someone replies to your post'
        };
      function Re(e) {
        var {
            messageText: t = Ie.messageText,
            actionText: n = Ie.actionText,
            dismissText: r = Ie.dismissText,
            type: a
          } = e,
          i = Object(c.e)(e => e.auth.user),
          s = Object(c.d)(),
          l = (function() {
            var e = ke()(function*() {
              return s(Object(Be.enableDesktopNotifications)());
            });
            return function() {
              return e.apply(this, arguments);
            };
          })(),
          u = (function() {
            var e = ke()(function*() {
              return s(Object(E.enableMobileNotifications)(i));
            });
            return function() {
              return e.apply(this, arguments);
            };
          })(),
          d = () => {
            s(Object(Be.hideBannerPrompt)());
            var e = new Date().getTime();
            Ne.f.set('pushDismissed', e);
          },
          f = t || ze[a];
        return C.d
          ? (De({ title: 'Stay up to date', messageText: f, onDismiss: d, onClick: u }),
            s(Object(Be.hideBannerPrompt)()),
            null)
          : o.a.createElement(Pe, {
              onClick: l,
              onDismiss: d,
              messageText: f + ': ',
              dismissText: r,
              actionText: n
            });
      }
      Re.propTypes = {
        messageText: l.a.string,
        actionText: l.a.string,
        dismissText: l.a.string,
        type: l.a.string
      };
      var Le = {
        mobileText:
          'When you upvote a post you are automatically betting some coins on it. You can customize bet amounts if you enable manual betting.',
        messageText:
          'When you upvote a post you are automatically betting some coins on it. To customize bet amounts, ',
        actionText: 'enable manual betting.',
        dismissText: 'Dismiss'
      };
      var We = {
        push: Re,
        bet: function() {
          var { messageText: e, actionText: t, dismissText: n, mobileText: r } = Le,
            a = Object(c.d)(),
            i = () => {
              a(Object(E.updateNotificationSettings)({ bet: { manual: !0 } })),
                a(Object(Be.hideBannerPrompt)());
            },
            s = () => {
              a(Object(Be.hideBannerPrompt)());
              var e = new Date().getTime();
              Ne.f.set('betDismissed', e);
            };
          return C.d
            ? (De({
                title: 'Enable manual betting?',
                messageText: r,
                onDismiss: s,
                onClick: i
              }),
              a(Object(Be.hideBannerPrompt)()),
              null)
            : o.a.createElement(Pe, {
                onClick: i,
                onDismiss: s,
                messageText: e,
                dismissText: n,
                actionText: t
              });
        }
      };
      function Ve() {
        var e = Object(c.e)(e => e.notif);
        if (!e.promptType) return null;
        var t = We[e.promptType];
        if (!t) return null;
        var { promptProps: n } = e;
        return o.a.createElement(
          _.E,
          {
            fdirectio: 'column',
            justify: 'center',
            flex: 1,
            bg: C.b.green,
            p: ['0 4', '0 2']
          },
          o.a.createElement(t, n)
        );
      }
      var qe = n('./src/modules/web_about/appStoreButtons.js');
      function Ge(e) {
        var { location: t, history: n } = e,
          r = Object(c.d)();
        if (Object(c.e)(e => e.navigation.screenSize) > 0)
          return o.a.createElement(qe.a, { mt: [8, 4], mb: [0, 1] });
        var a = () => n.replace({ search: '?redirect='.concat(t.pathname) });
        return o.a.createElement(
          _.E,
          { display: 'flex', fdirection: 'row', justify: ['flex-start'] },
          o.a.createElement(
            _.f,
            {
              onPress: () => {
                a(), r(Object(g.showModal)('login'));
              },
              mr: 4
            },
            'Login'
          ),
          o.a.createElement(
            _.f,
            {
              onPress: () => {
                a(), r(Object(g.showModal)('signupSocial'));
              },
              mr: 0
            },
            'Sign Up'
          )
        );
      }
      function Ue() {
        var e = m()(['\n  font-family: ', ';\n  display: inline;\n']);
        return (
          (Ue = function() {
            return e;
          }),
          e
        );
      }
      function Ye() {
        var e = m()(['\n  font-family: ', ';\n  color: ', ';\n']);
        return (
          (Ye = function() {
            return e;
          }),
          e
        );
      }
      function He() {
        var e = m()([
          '\n  position: relative;\n  overflow: hidden;\n  max-height: 550px;\n'
        ]);
        return (
          (He = function() {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = m()([
          '\n  flex: 0.65;\n  align-self: flex-end;\n  transform-origin: bottom;\n  z-index: -1;\n  max-height: 400px;\n  ',
          '\n'
        ]);
        return (
          ($e = function() {
            return e;
          }),
          e
        );
      }
      Ge.propTypes = { location: l.a.object, history: l.a.object };
      var Xe = Object(O.b)(_.E)($e(), e =>
          e.screenSize
            ? '\n  position: absolute;\n  bottom: 0;\n  width: 80vw;\n  right: -40px;\n  opacity: .3;\n'
            : ''
        ),
        Ke = Object(O.b)(_.E)(He()),
        Je = Object(O.b)(_.u)(Ye(), C.c.HELVETICA_NEUE_MEDIUM, C.b.black),
        Ze = Object(O.b)(_.B)(Ue(), C.c.GEORGIA);
      class Qe extends i.Component {
        constructor(e, t) {
          var n;
          super(e, t),
            (n = this),
            a()(this, 'state', { isDismissed: !0 }),
            a()(
              this,
              'componentDidMount',
              ke()(function*() {
                window.addEventListener('scroll', n.onScroll);
                var e = yield Ne.f.isDismissed('splashDismissed', 5);
                n.setState({ isDismissed: e });
              })
            ),
            a()(this, 'dismiss', () => {
              var e = new Date().getTime();
              Ne.f.set('splashDismissed', e), this.setState({ isDismissed: !0 });
            }),
            (this.onScroll = this.onScroll.bind(this));
        }
        componentDidUpdate(e, t) {
          t.isDismissed !== this.state.isDismissed && this.onScroll();
        }
        onScroll() {
          if (this.phone) {
            this.phone.style.transform = '';
            var e = this.phone.getBoundingClientRect().top - 100,
              t = Math.max(-e / 3, 0);
            this.phone.style.transform = 'translateX(0) translateY('.concat(t, 'px)');
          }
        }
        render() {
          var {
            hideCloseButton: e,
            location: t,
            history: r,
            screenSize: a,
            overRideDismiss: i
          } = this.props;
          if (this.state.isDismissed && !i) return null;
          return o.a.createElement(
            Ke,
            {
              ref: e => (this.container = e),
              display: 'flex',
              justify: 'flex-start',
              align: 'center',
              fdirection: 'row',
              of: 'hidden',
              bb: !0
            },
            e
              ? null
              : o.a.createElement(
                  _.D,
                  { onPress: this.dismiss },
                  o.a.createElement(_.j, {
                    w: 3,
                    h: 3,
                    top: [6, 4],
                    right: [6, 3],
                    resizeMode: 'contain',
                    source: n('./public/img/x.png')
                  })
                ),
            o.a.createElement(
              _.E,
              {
                m: ['6 0 6 12', '3 4 2 2'],
                flex: 1,
                justify: 'center',
                align: ['flex-start', 'stretch'],
                fdirection: 'column'
              },
              o.a.createElement(
                _.E,
                null,
                o.a.createElement(
                  Je,
                  { fs: [6, 3], lh: [9, 4.2] },
                  o.a.createElement(
                    _.B,
                    null,
                    'Information curated by humans, not algorithms.'
                  )
                ),
                o.a.createElement(
                  _.E,
                  { mt: [5, 2], mb: [6, 0] },
                  o.a.createElement(
                    Ze,
                    { fs: [2.5, 1.75], lh: [4, 3] },
                    'Join a ',
                    o.a.createElement(w.a, { to: '/communities' }, 'community'),
                    ', curate content and earn rewards.',
                    ' ',
                    o.a.createElement(
                      w.a,
                      {
                        to:
                          'https://blog.relevant.community/relevant-curated-by-communities-not-clicks-ba8d346c47da',
                        external: !0,
                        target: '_blank',
                        display: 'inline',
                        td: 'underline'
                      },
                      'Learn More'
                    )
                  )
                )
              ),
              o.a.createElement(Ge, { location: t, history: r })
            ),
            o.a.createElement(
              Xe,
              { screenSize: a, flexshrink: [1, 0] },
              o.a.createElement('img', {
                style: { width: '100%' },
                ref: e => (this.phone = e),
                onLoad: this.onScroll,
                src: '/img/hand-transparent.png',
                alt: 'phone'
              })
            )
          );
        }
      }
      a()(Qe, 'propTypes', {
        hideCloseButton: l.a.bool,
        location: l.a.object,
        history: l.a.object,
        screenSize: l.a.number,
        overRideDismiss: l.a.bool
      });
      var et = Object(Te.f)(Qe),
        tt = n('../../node_modules/react-burger-menu/lib/BurgerMenu.js');
      class nt extends i.Component {
        constructor() {
          super(...arguments),
            a()(
              this,
              'isMenuOpen',
              e => (
                e.isOpen
                  ? this.props.actions.openWebSideNav()
                  : this.props.actions.closeWebSideNav(),
                e.isOpen
              )
            );
        }
        static fetchData(e) {
          return e(Object(z.getCommunities)());
        }
        componentDidMount() {
          var { actions: e, communities: t } = this.props;
          t.length || e.getCommunities();
        }
        render() {
          var {
              isAuthenticated: e,
              sideNavIsOpen: t,
              screenSize: n,
              notif: r,
              route: a
            } = this.props,
            { promptType: i } = r,
            s = 0 === n;
          return o.a.createElement(
            _.E,
            { bg: C.b.white, display: 'flex', flex: 1 },
            e
              ? null
              : o.a.createElement(et, { screenSize: n, type: 'app', cta: 'SIGN_UP' }),
            i
              ? o.a.createElement(
                  _.E,
                  {
                    position: 'sticky',
                    zIndex: '200',
                    style: {
                      top: 0,
                      right: 0,
                      left: 0,
                      minHeight: C.e.BANNER_PROMPT_HEIGHT
                    }
                  },
                  o.a.createElement(Ve, null)
                )
              : null,
            o.a.createElement(
              _.E,
              { fdirection: 'row', display: 'flex' },
              s
                ? o.a.createElement(
                    _.E,
                    { fdirection: 'column', display: 'flex' },
                    o.a.createElement(Fe, null)
                  )
                : o.a.createElement(
                    tt.slide,
                    {
                      width: C.e.sideNavWidth,
                      isOpen: t,
                      onStateChange: this.isMenuOpen
                    },
                    o.a.createElement(
                      _.E,
                      {
                        fdirection: 'column',
                        display: 'flex',
                        style: { top: i ? C.e.BANNER_PROMPT_HEIGHT : 0 }
                      },
                      o.a.createElement(Fe, null)
                    )
                  ),
              o.a.createElement(_.E, { display: 'flex', flex: 1 }, Object(u.b)(a.routes))
            )
          );
        }
      }
      a()(nt, 'propTypes', {
        route: l.a.object,
        isAuthenticated: l.a.bool,
        notif: l.a.object,
        actions: l.a.object,
        communities: l.a.array,
        sideNavIsOpen: l.a.bool,
        screenSize: l.a.number
      });
      t.default = Object(Te.f)(
        Object(c.c)(
          e => ({
            communities: e.community.list,
            isAuthenticated: e.auth.isAuthenticated,
            navigation: e.navigation,
            sideNavIsOpen: e.navigation.sideNavIsOpen,
            screenSize: e.navigation.screenSize,
            notif: e.notif
          }),
          e => ({
            actions: Object(h.bindActionCreators)(
              {
                openWebSideNav: g.openWebSideNav,
                closeWebSideNav: g.closeWebSideNav,
                hideModal: g.hideModal,
                getCommunities: z.getCommunities
              },
              e
            )
          })
        )(nt)
      );
    },
    './src/modules/stats/coinStat.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        o = n.n(i),
        s = n('../../node_modules/react/index.js'),
        l = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        c = n.n(u),
        d = l.a.createContext({ wallet: null }),
        f = n('./src/utils/numbers.js'),
        p = n('./src/utils/propValidation.js'),
        m = n('./src/styles/index.js'),
        h = n('./src/modules/styled/uni.js'),
        g = n('./src/modules/wallet/price.context.js'),
        b = n('./public/img/relevantcoin.png');
      function v(e) {
        var t,
          {
            user: n,
            isOwner: r,
            wallet: i,
            size: s,
            amount: u,
            mr: c,
            align: d,
            noNumber: p,
            secondary: v,
            fs: y,
            lh: x,
            inline: w,
            c: E,
            spaceBetween: j,
            showPrice: C
          } = e,
          O = o()(e, [
            'user',
            'isOwner',
            'wallet',
            'size',
            'amount',
            'mr',
            'align',
            'noNumber',
            'secondary',
            'fs',
            'lh',
            'inline',
            'c',
            'spaceBetween',
            'showPrice'
          ]);
        'number' == typeof u
          ? (t = u)
          : n && ((t = n.balance), n.tokenBalance && (t += n.tokenBalance));
        var _ = Object(g.usePrice)(t);
        r &&
          n.ethAddress &&
          n.ethAddress[0] &&
          i.connectedBalance &&
          (t = i.connectedBalance + n.balance);
        var F = 'number' == typeof s ? s : 3,
          T = v ? h.x : h.w,
          S = 'center' === d ? 0 : Object(m.i)(-1, 'px'),
          k = w ? h.B : h.t,
          N = 0;
        return (
          !w && F && (N = F / 4),
          !w && j && (N = j),
          l.a.createElement(
            k,
            a()({}, O, {
              inline: w ? 1 : 0,
              mr: 'number' == typeof c ? c : w ? 0 : 1.5,
              align: d
            }),
            l.a.createElement(h.s, {
              inline: w ? 1 : 0,
              source: b,
              h: 1 * F,
              w: 1.05 * F,
              style: { bottom: S },
              resizeMode: 'contain'
            }),
            p
              ? null
              : l.a.createElement(
                  T,
                  { ml: N, fs: y, lh: x, inline: w ? 1 : 0, c: E },
                  w ? ' ' : '',
                  Object(f.abbreviateNumber)(t),
                  C ? _ : ''
                )
          )
        );
      }
      v.propTypes = {
        lh: c.a.number,
        inline: c.a.oneOfType([c.a.bool, c.a.number]),
        secondary: c.a.bool,
        mr: c.a.number,
        fs: c.a.number,
        amount: c.a.number,
        size: c.a.number,
        user: p.c,
        isOwner: c.a.bool,
        wallet: c.a.object,
        align: c.a.string,
        lineheight: c.a.string,
        c: c.a.string,
        noNumber: c.a.bool,
        spaceBetween: c.a.number,
        showPrice: c.a.bool
      };
      t.a = Object(s.memo)(e =>
        l.a.createElement(d.Consumer, null, t =>
          l.a.createElement(v, a()({ wallet: t }, e))
        )
      );
    },
    './src/modules/stats/rStat.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return g;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        o = n.n(i),
        s = n('../../node_modules/react/index.js'),
        l = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        c = n.n(u),
        d = n('./src/utils/numbers.js'),
        f = n('./src/utils/propValidation.js'),
        p = n('./src/styles/index.js'),
        m = n('./src/modules/styled/uni.js'),
        h = n('./public/img/r-emoji.png');
      function g(e) {
        var { size: t, user: n, color: r, mr: i, align: s, lh: u, inline: c } = e,
          f = o()(e, ['size', 'user', 'color', 'mr', 'align', 'lh', 'inline']);
        if (!n) return null;
        var { relevance: g } = n,
          b = (g && g.pagerank) || 0,
          v = t || 3,
          y = 'center' === s ? 0 : Object(p.i)(-1, 'px');
        return c
          ? l.a.createElement(
              m.B,
              a()({}, f, { inline: c ? 1 : 0, align: s || 'center' }),
              l.a.createElement(m.s, {
                h: 1 * v,
                w: 1 * v,
                source: h,
                style: { bottom: y },
                resizeMode: 'contain',
                inline: 1
              }),
              ' ',
              l.a.createElement(
                m.w,
                { inline: c ? 1 : 0, lh: u, c: r },
                Object(d.abbreviateNumber)(b) || 0
              )
            )
          : l.a.createElement(
              m.t,
              a()({}, f, {
                inline: c ? 1 : 0,
                align: s || 'center',
                mr: 'number' == typeof i ? i : 1.5
              }),
              l.a.createElement(m.s, {
                h: 1 * v,
                w: 1 * v,
                source: h,
                mr: v / 10,
                style: { bottom: y },
                resizeMode: 'contain',
                inline: c ? 1 : 0
              }),
              l.a.createElement(
                m.w,
                { inline: c ? 1 : 0, lh: u, c: r },
                Object(d.abbreviateNumber)(b) || 0
              )
            );
      }
      g.propTypes = {
        inline: c.a.oneOfType([c.a.bool, c.a.number]),
        lh: c.a.number,
        align: c.a.string,
        mr: c.a.number,
        color: c.a.string,
        user: f.c,
        size: c.a.number
      };
    },
    './src/modules/styled/web.js': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return B;
      }),
        n.d(t, 'r', function() {
          return A;
        }),
        n.d(t, 'o', function() {
          return M;
        }),
        n.d(t, 'f', function() {
          return D;
        }),
        n.d(t, 'e', function() {
          return P;
        }),
        n.d(t, 'c', function() {
          return I;
        }),
        n.d(t, 'p', function() {
          return z;
        }),
        n.d(t, 'i', function() {
          return R;
        }),
        n.d(t, 'k', function() {
          return L;
        }),
        n.d(t, 'a', function() {
          return W;
        }),
        n.d(t, 'b', function() {
          return V;
        }),
        n.d(t, 'j', function() {
          return q;
        }),
        n.d(t, 'h', function() {
          return G;
        }),
        n.d(t, 'g', function() {
          return U;
        }),
        n.d(t, 'n', function() {
          return Y;
        }),
        n.d(t, 'm', function() {
          return H;
        }),
        n.d(t, 'd', function() {
          return $;
        }),
        n.d(t, 'q', function() {
          return X;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        a = n.n(r),
        i = n('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        o = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        s = n('./src/styles/index.js'),
        l = n(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        u = n(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        );
      function c() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = a()(['\n  ', '\n  ', '\n']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = a()([
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
          (f = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = a()([
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
          (p = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = a()([
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
          (m = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = a()([
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
            return e;
          }),
          e
        );
      }
      function g() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = a()([
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
          (b = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = a()(['\n  ', '\n  ', '\n']);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = a()([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function F() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (F = function() {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = a()([
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
            return e;
          }),
          e
        );
      }
      function k() {
        var e = a()([
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
          (k = function() {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = a()([
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
          (N = function() {
            return e;
          }),
          e
        );
      }
      var B = Object(o.default)(i.b)(
          N(),
          s.c.header,
          s.b.grey,
          s.b.black,
          s.b.black,
          s.f.font,
          s.f.display,
          s.f.color,
          s.f.margin
        ),
        A = o.default.div(
          k(),
          s.f.margin,
          s.f.padding,
          s.f.flex,
          s.f.font,
          s.f.background,
          s.f.border,
          s.f.width,
          s.f.height,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        M = o.default.span(
          S(),
          s.f.margin,
          s.f.padding,
          s.f.flex,
          s.f.font,
          s.f.background,
          s.f.border,
          s.f.color,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        D = o.default.span(
          T(),
          s.f.margin,
          s.f.padding,
          s.f.font,
          s.f.background,
          s.f.border,
          s.f.color
        ),
        P = o.default.img(
          F(),
          s.f.margin,
          s.f.height,
          s.f.width,
          s.f.padding,
          s.f.background,
          s.f.borderRadius,
          s.f.flex
        ),
        I =
          (o.default.span(_(), s.f.margin, s.f.flex),
          o.default.div(
            O(),
            s.f.margin,
            s.f.padding,
            s.f.width,
            s.e.universalBorder('bottom')
          )),
        z =
          (Object(o.default)(M)(C(), s.c.header, s.f.color),
          Object(o.default)(M)(j(), s.c.title, s.f.color, s.f.font)),
        R = Object(o.default)(M)(E(), s.c.link, s.f.color, s.f.font),
        L = Object(o.default)(M)(w(), s.c.secondaryText, s.f.font, s.f.color),
        W =
          (Object(o.default)(M)(x(), s.c.altLink, s.f.color, s.f.font),
          Object(o.default)(M)(y(), s.c.commentText, s.f.color, s.f.font),
          Object(o.default)(M)(v(), s.c.bodyStyle, s.f.color, s.f.font)),
        V = o.default.button(
          b(),
          s.e.button,
          s.e.buttonFont,
          e =>
            e.disabled
              ? '\n    color: '
                  .concat(s.b.white, ';\n    background: ')
                  .concat(s.b.grey, ';\n    ')
              : '',
          s.f.flex,
          s.f.background,
          s.f.padding,
          s.f.width,
          s.f.margin,
          s.f.color,
          s.f.width,
          s.f.height,
          s.e.activeButtonShadow
        ),
        q = Object(o.default)(M)(
          g(),
          s.c.numericalValue,
          s.f.width,
          s.f.font,
          s.f.inheritfont,
          s.f.color
        ),
        G = o.default.input(
          h(),
          s.f.font,
          s.f.flex,
          s.f.border,
          s.f.padding,
          s.f.margin,
          Object(s.i)(1.75),
          Object(s.i)(1.75),
          s.e.universalBorder('', s.b.blue)
        ),
        U = o.default.input(
          m(),
          Object(s.i)(2),
          Object(s.i)(2),
          Object(s.i)(1),
          s.c.bodyStyle,
          s.f.font,
          s.f.flex,
          s.f.border,
          s.e.universalBorder(),
          s.f.padding,
          s.f.margin,
          Object(s.i)(1.75),
          Object(s.i)(1.75),
          s.e.universalBorder('', s.b.blue)
        ),
        Y = Object(o.default)(u.a)(
          p(),
          s.c.bodyStyle,
          s.f.border,
          s.f.flex,
          s.e.universalBorder(),
          Object(s.i)(2),
          Object(s.i)(2),
          s.b.blue,
          s.f.padding,
          s.f.margin,
          s.f.height
        ),
        H = Object(o.default)(l.a)(
          f(),
          s.c.bodyStyle,
          s.f.border,
          s.f.flex,
          s.e.universalBorder(),
          Object(s.i)(2),
          Object(s.i)(2),
          s.b.blue,
          s.f.padding,
          s.f.margin,
          s.f.height
        ),
        $ = o.default.form(d(), s.f.flex, s.f.margin),
        X = o.default.video(
          c(),
          s.f.margin,
          s.f.height,
          s.f.width,
          s.f.padding,
          s.f.background,
          s.f.borderRadius,
          s.f.flex
        );
    },
    './src/modules/ui/web/menuIcon.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        o = n.n(i),
        s = n('../../node_modules/react/index.js'),
        l = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        c = n.n(u),
        d = n('../../node_modules/react-redux/es/index.js'),
        f = n('../../node_modules/redux/es/redux.js'),
        p = n('./src/modules/styled/web.js'),
        m = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        h = n('./src/modules/navigation/navigation.actions.js'),
        g = n('./src/styles/index.js');
      function b() {
        var e = o()([
          '\n  width: 100%;\n  height: 3px;\n  background-color: ',
          ';\n  margin: 0.2rem 0;\n'
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = o()([
          '\n  display: flex;\n  cursor: pointer;\n  width: ',
          ';\n  :hover * {\n    background-color: ',
          ';\n  }\n'
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      var y = Object(m.default)(p.r)(v(), Object(g.i)(3), g.b.black),
        x = Object(m.default)(p.r)(b(), g.b.grey);
      class w extends s.Component {
        constructor() {
          super(...arguments),
            a()(this, 'toggleMenu', () => {
              var {
                actions: e,
                navigation: { sideNavIsOpen: t }
              } = this.props;
              t && e.closeWebSideNav(), t || e.openWebSideNav();
            });
        }
        render() {
          var {
            mr: e,
            ml: t,
            navigation: { screenSize: n }
          } = this.props;
          return n
            ? l.a.createElement(
                p.r,
                { mr: e, ml: t },
                l.a.createElement(
                  y,
                  {
                    onClick: this.toggleMenu,
                    fdirection: 'column',
                    justify: 'space-between'
                  },
                  l.a.createElement(x, null),
                  l.a.createElement(x, null),
                  l.a.createElement(x, null)
                )
              )
            : null;
        }
      }
      w.propTypes = {
        actions: c.a.object,
        navigation: c.a.object,
        ml: c.a.oneOfType([c.a.string, c.a.number, c.a.array]),
        mr: c.a.oneOfType([c.a.string, c.a.number, c.a.array])
      };
      t.a = Object(d.c)(
        e => ({ navigation: e.navigation }),
        e => ({
          actions: Object(f.bindActionCreators)(
            { openWebSideNav: h.openWebSideNav, closeWebSideNav: h.closeWebSideNav },
            e
          )
        })
      )(w);
    },
    './src/modules/user/UAvatar.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/react/index.js'),
        a = n.n(r),
        i = n('../../node_modules/react-redux/es/index.js'),
        o = n('../../node_modules/prop-types/index.js'),
        s = n.n(o),
        l = n('./src/modules/navigation/ULink.component.js'),
        u = n('./src/modules/styled/uni.js'),
        c = n('./src/styles/layout.js'),
        d = n('./src/modules/navigation/navigation.actions.js');
      function f(e) {
        var { size: t, user: r, m: o, goToProfile: s, style: f, noLink: p } = e,
          m = Object(i.d)();
        if (!r) return null;
        var h = '/user/profile/' + r.handle,
          g = r.image ? { uri: r.image } : n('./public/img/default_user.jpg'),
          b = t || c.AVATAR_SIZE,
          v = a.a.createElement(u.s, { source: g, h: b, w: b, bradius: b / 2 });
        return p
          ? a.a.createElement(u.E, { style: f, m: o }, v)
          : a.a.createElement(
              u.E,
              { style: f, m: o },
              a.a.createElement(
                l.a,
                {
                  onPress: () => (s ? s(r) : m(Object(d.goToProfile)(r))),
                  onClick: e => e.stopPropagation(),
                  to: h
                },
                v
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
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return b;
        }),
        n.d(t, 'exchangeLink', function() {
          return v;
        }),
        n.d(t, 'tokenEnabled', function() {
          return y;
        }),
        n.d(t, 'usePrice', function() {
          return x;
        }),
        n.d(t, 'default', function() {
          return w;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(i),
        s = n('../../node_modules/react/index.js'),
        l = n.n(s),
        u = n('../../node_modules/prop-types/index.js'),
        c = n.n(u),
        d = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        f = n('./src/utils/numbers.js');
      function p(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function(t) {
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var { TOKEN_ADDRESS: h, DISABLE_PRICE: g } = Object({
          BROWSER: !0,
          NODE_ENV: 'production',
          WEB: 'true',
          BABEL_ENV: 'development_web',
          VAPID_PUBLIC_KEY:
            'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
          INFURA_PROTOCOL: 'ws',
          INFURA_NETWORK: 'mainnet',
          INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
          NETWORK_NUMBER: '1',
          TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec',
          API_SERVER: 'http://localhost:3000'
        }),
        b = l.a.createContext(0);
      function v() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(h);
      }
      function y() {
        return !!h;
      }
      function x(e, t) {
        var { price: n } = Object(s.useContext)(b);
        return n
          ? 'number' === t
            ? Object(f.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(f.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function w(e) {
        var { children: t } = e,
          [n, r] = Object(s.useReducer)(E, {
            loading: !1,
            error: !1,
            data: null,
            refresh: 0
          });
        Object(s.useEffect)(() => {
          var e = !1;
          return (
            (function() {
              var t = o()(function*() {
                if ((r({ type: 'FETCH_PRICE_INIT' }), h && !g))
                  try {
                    var t = yield Object(d.getTokenReserves)(h),
                      n = yield fetch('https://api.infura.io/v1/ticker/ethusd'),
                      a = yield n.json();
                    e ||
                      r({
                        type: 'FETCH_PRICE_SUCCESS',
                        payload: m(m({}, t), {}, { ethPrice: a.bid })
                      });
                  } catch (t) {
                    e || r({ type: 'FETCH_PRICE_ERROR', payload: t });
                  }
              });
              return function() {
                return t.apply(this, arguments);
              };
            })()(),
            setTimeout(() => {
              r({ type: 'REFRESH_PRICE' });
            }, 6e4),
            () => {
              e = !0;
            }
          );
        }, [n.refresh]);
        var a = (function(e) {
            if (!e) return null;
            var { ethReserve: t, tokenReserve: n, ethPrice: r } = e;
            if (!t || !n) return null;
            var a = t.amount.div(n.amount).times(r);
            return parseFloat(a.toString());
          })(n.data),
          i = '($'.concat(Object(f.abbreviateNumber)(a, 2), ')');
        return l.a.createElement(b.Provider, { value: { price: a, priceString: i } }, t);
      }
      w.propTypes = { children: c.a.node };
      var E = (e, t) => {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return m(m({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return m(m({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return m(m({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return m(m({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/modules/web_about/appStoreButtons.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        i = n('../../node_modules/react/index.js'),
        o = n.n(i),
        s = n('./src/modules/styled/web.js');
      t.a = e =>
        o.a.createElement(
          s.r,
          a()({}, e, { mt: [8, 4], mb: [0, 1] }),
          o.a.createElement(
            'a',
            {
              href:
                'https://itunes.apple.com/us/app/relevant-communities/id1173025051?mt=8',
              target: '_blank'
            },
            o.a.createElement(s.e, { h: [6, 6, 5], mr: [2, 1], src: '/img/appstore.png' })
          ),
          o.a.createElement(
            'a',
            {
              href:
                'https://play.google.com/store/apps/details?id=com.relevantnative&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
              target: '_blank'
            },
            o.a.createElement(s.e, { h: [6, 6, 5], src: '/img/googleplaystore.png' })
          )
        );
    },
    './src/utils/propValidation.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return o;
      }),
        n.d(t, 'a', function() {
          return s;
        }),
        n.d(t, 'b', function() {
          return l;
        });
      var r = n('../../node_modules/prop-types/index.js'),
        a = n.n(r),
        i = n('../../node_modules/react-is/index.js'),
        o = a.a.shape({
          handle: a.a.string,
          balance: a.a.number,
          image: a.a.string,
          name: a.a.string
        }),
        s =
          (a.a.shape({
            _id: a.a.string.isRequired,
            user: a.a.string.isRequired,
            title: a.a.string,
            embeddedUser: a.a.object,
            tags: a.a.array,
            body: a.a.string,
            postDate: a.a.instanceOf(Date),
            data: a.a.object,
            link: a.a.object,
            parentPost: a.a.number,
            type: a.a.string
          }),
          a.a.shape({ isAuthenticated: a.a.bool, user: o, community: a.a.string }));
      function l(e, t, n) {
        if (e[t] && !Object(i.isValidElementType)(e[t]))
          return new Error(
            "Invalid prop '"
              .concat(t, "' supplied to '")
              .concat(n, "': the prop is not a valid React component")
          );
      }
    },
    './src/utils/rewards.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      }),
        n.d(t, 'b', function() {
          return i;
        });
      var r = n('../common/lib/index.js');
      function a(e, t) {
        return t && e && !e.parentPost
          ? e.pagerank < t.currentShares / (t.postCount || 1)
            ? 0
            : ((e.payoutShare = e.pagerank / (t.topPostShares + e.pagerank || 1)),
              (e.payout = t.rewardFund * e.payoutShare),
              e.payout / r.TOKEN_DECIMALS)
          : null;
      }
      function i(e) {
        if ('pending' === e.status) {
          if (0 === e.totalPostShares) return 0;
          var t = e.estimatedPostPayout;
          return t > 1e8 && (t /= r.TOKEN_DECIMALS), (t * e.shares) / e.totalPostShares;
        }
        return e.earned || 'paidout' === e.status ? e.earned : 0;
      }
    }
  }
]);
//# sourceMappingURL=22.bundle.js.map
