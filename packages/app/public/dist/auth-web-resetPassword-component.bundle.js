(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [31],
  {
    '../../node_modules/@babel/runtime/helpers/createClass.js': function(e, n) {
      function t(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      e.exports = function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    },
    '../../node_modules/lodash/_baseFor.js': function(e, n, t) {
      var r = t('../../node_modules/lodash/_createBaseFor.js')();
      e.exports = r;
    },
    '../../node_modules/lodash/_baseForOwn.js': function(e, n, t) {
      var r = t('../../node_modules/lodash/_baseFor.js'),
        o = t('../../node_modules/lodash/keys.js');
      e.exports = function(e, n) {
        return e && r(e, n, o);
      };
    },
    '../../node_modules/lodash/_createBaseFor.js': function(e, n) {
      e.exports = function(e) {
        return function(n, t, r) {
          for (var o = -1, a = Object(n), i = r(n), s = i.length; s--; ) {
            var u = i[e ? s : ++o];
            if (!1 === t(a[u], u, a)) break;
          }
          return n;
        };
      };
    },
    '../../node_modules/redux-form/es/Field.js': function(e, n, t) {
      'use strict';
      var r = t('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = t.n(r),
        a = t('../../node_modules/@babel/runtime/helpers/createClass.js'),
        i = t.n(a),
        s = t('../../node_modules/@babel/runtime/helpers/inheritsLoose.js'),
        u = t.n(s),
        d = t('../../node_modules/react/index.js'),
        c = t.n(d),
        f = t('../../node_modules/prop-types/index.js'),
        l = t.n(f),
        p = t('../../node_modules/invariant/browser.js'),
        m = t.n(p),
        h = t(
          '../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js'
        ),
        b = t.n(h),
        g = t('../../node_modules/react-redux/es/index.js'),
        v = function(e, n, t, r) {
          var a = n.value;
          return 'checkbox' === e
            ? o()({}, n, { checked: !!a })
            : 'radio' === e
            ? o()({}, n, { checked: r(a, t), value: t })
            : 'select-multiple' === e
            ? o()({}, n, { value: a || [] })
            : 'file' === e
            ? o()({}, n, { value: a || void 0 })
            : n;
        },
        y = function(e, n, t) {
          var r = e.getIn,
            a = e.toJS,
            i = e.deepEqual,
            s = t.asyncError,
            u = t.asyncValidating,
            d = t.onBlur,
            c = t.onChange,
            f = t.onDrop,
            l = t.onDragStart,
            p = t.dirty,
            m = t.dispatch,
            h = t.onFocus,
            g = t.form,
            y = t.format,
            w = t.initial,
            _ = (t.parse, t.pristine),
            j = t.props,
            x = t.state,
            k = t.submitError,
            C = t.submitFailed,
            O = t.submitting,
            F = t.syncError,
            E = t.syncWarning,
            D = (t.validate, t.value),
            I = t._value,
            P =
              (t.warn,
              b()(t, [
                'asyncError',
                'asyncValidating',
                'onBlur',
                'onChange',
                'onDrop',
                'onDragStart',
                'dirty',
                'dispatch',
                'onFocus',
                'form',
                'format',
                'initial',
                'parse',
                'pristine',
                'props',
                'state',
                'submitError',
                'submitFailed',
                'submitting',
                'syncError',
                'syncWarning',
                'validate',
                'value',
                '_value',
                'warn'
              ])),
            N = F || s || k,
            T = E,
            S = (function(e, t) {
              if (null === t) return e;
              var r = null == e ? '' : e;
              return t ? t(e, n) : r;
            })(D, y);
          return {
            input: v(
              P.type,
              {
                name: n,
                onBlur: d,
                onChange: c,
                onDragStart: l,
                onDrop: f,
                onFocus: h,
                value: S
              },
              I,
              i
            ),
            meta: o()({}, a(x), {
              active: !(!x || !r(x, 'active')),
              asyncValidating: u,
              autofilled: !(!x || !r(x, 'autofilled')),
              dirty: p,
              dispatch: m,
              error: N,
              form: g,
              initial: w,
              warning: T,
              invalid: !!N,
              pristine: _,
              submitting: !!O,
              submitFailed: !!C,
              touched: !(!x || !r(x, 'touched')),
              valid: !N,
              visited: !(!x || !r(x, 'visited'))
            }),
            custom: o()({}, P, {}, j)
          };
        },
        w = t('../../node_modules/redux-form/es/events/isEvent.js'),
        _ = function(e, n) {
          if (Object(w.a)(e)) {
            if (!n && e.nativeEvent && void 0 !== e.nativeEvent.text)
              return e.nativeEvent.text;
            if (n && void 0 !== e.nativeEvent) return e.nativeEvent.text;
            var t = e,
              r = t.target,
              o = r.type,
              a = r.value,
              i = r.checked,
              s = r.files,
              u = t.dataTransfer;
            return 'checkbox' === o
              ? !!i
              : 'file' === o
              ? s || (u && u.files)
              : 'select-multiple' === o
              ? (function(e) {
                  var n = [];
                  if (e)
                    for (var t = 0; t < e.length; t++) {
                      var r = e[t];
                      r.selected && n.push(r.value);
                    }
                  return n;
                })(e.target.options)
              : a;
          }
          return e;
        },
        j =
          'undefined' != typeof window &&
          window.navigator &&
          window.navigator.product &&
          'ReactNative' === window.navigator.product,
        x = function(e, n) {
          var t = n.name,
            r = n.parse,
            o = n.normalize,
            a = _(e, j);
          return r && (a = r(a, t)), o && (a = o(t, a)), a;
        },
        k = t('../../node_modules/redux-form/es/structure/plain/index.js'),
        C = t('../../node_modules/react-is/index.js'),
        O = function(e, n, t) {
          return Object(C.isValidElementType)(e[n])
            ? null
            : new Error('Invalid prop `' + n + '` supplied to `' + t + '`.');
        },
        F = ['_reduxForm'],
        E = function(e) {
          return e && 'object' == typeof e;
        },
        D = function(e) {
          return e && 'function' == typeof e;
        },
        I = function(e) {
          E(e) && D(e.preventDefault) && e.preventDefault();
        },
        P = function(e, n) {
          if (E(e) && E(e.dataTransfer) && D(e.dataTransfer.getData))
            return e.dataTransfer.getData(n);
        },
        N = function(e, n, t) {
          E(e) &&
            E(e.dataTransfer) &&
            D(e.dataTransfer.setData) &&
            e.dataTransfer.setData(n, t);
        },
        T = function(e) {
          var n = e.deepEqual,
            t = e.getIn,
            r = (function(t) {
              function r() {
                for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                  r[a] = arguments[a];
                return (
                  ((e = t.call.apply(t, [this].concat(r)) || this).ref = c.a.createRef()),
                  (e.isPristine = function() {
                    return e.props.pristine;
                  }),
                  (e.getValue = function() {
                    return e.props.value;
                  }),
                  (e.handleChange = function(n) {
                    var t = e.props,
                      r = t.name,
                      a = t.dispatch,
                      i = t.parse,
                      s = t.normalize,
                      u = t.onChange,
                      d = t._reduxForm,
                      c = t.value,
                      f = x(n, { name: r, parse: i, normalize: s }),
                      l = !1;
                    if (u)
                      if (!j && Object(w.a)(n))
                        u(
                          o()({}, n, {
                            preventDefault: function() {
                              return (l = !0), I(n);
                            }
                          }),
                          f,
                          c,
                          r
                        );
                      else {
                        var p = u(n, f, c, r);
                        j && (l = p);
                      }
                    l ||
                      (a(d.change(r, f)),
                      d.asyncValidate && d.asyncValidate(r, f, 'change'));
                  }),
                  (e.handleFocus = function(n) {
                    var t = e.props,
                      r = t.name,
                      a = t.dispatch,
                      i = t.onFocus,
                      s = t._reduxForm,
                      u = !1;
                    i &&
                      (j
                        ? (u = i(n, r))
                        : i(
                            o()({}, n, {
                              preventDefault: function() {
                                return (u = !0), I(n);
                              }
                            }),
                            r
                          )),
                      u || a(s.focus(r));
                  }),
                  (e.handleBlur = function(n) {
                    var t = e.props,
                      r = t.name,
                      a = t.dispatch,
                      i = t.parse,
                      s = t.normalize,
                      u = t.onBlur,
                      d = t._reduxForm,
                      c = t._value,
                      f = t.value,
                      l = x(n, { name: r, parse: i, normalize: s });
                    l === c && void 0 !== c && (l = f);
                    var p = !1;
                    u &&
                      (j
                        ? (p = u(n, l, f, r))
                        : u(
                            o()({}, n, {
                              preventDefault: function() {
                                return (p = !0), I(n);
                              }
                            }),
                            l,
                            f,
                            r
                          )),
                      p ||
                        (a(d.blur(r, l)),
                        d.asyncValidate && d.asyncValidate(r, l, 'blur'));
                  }),
                  (e.handleDragStart = function(n) {
                    var t = e.props,
                      r = t.name,
                      o = t.onDragStart,
                      a = t.value;
                    N(n, 'text', null == a ? '' : a), o && o(n, r);
                  }),
                  (e.handleDrop = function(n) {
                    var t = e.props,
                      r = t.name,
                      a = t.dispatch,
                      i = t.onDrop,
                      s = t._reduxForm,
                      u = t.value,
                      d = P(n, 'text'),
                      c = !1;
                    i &&
                      i(
                        o()({}, n, {
                          preventDefault: function() {
                            return (c = !0), I(n);
                          }
                        }),
                        d,
                        u,
                        r
                      ),
                      c || (a(s.change(r, d)), I(n));
                  }),
                  e
                );
              }
              u()(r, t);
              var a = r.prototype;
              return (
                (a.shouldComponentUpdate = function(e) {
                  var t = this,
                    r = Object.keys(e),
                    o = Object.keys(this.props);
                  return !!(
                    this.props.children ||
                    e.children ||
                    r.length !== o.length ||
                    r.some(function(r) {
                      return ~(e.immutableProps || []).indexOf(r)
                        ? t.props[r] !== e[r]
                        : !~F.indexOf(r) && !n(t.props[r], e[r]);
                    })
                  );
                }),
                (a.getRenderedComponent = function() {
                  return this.ref.current;
                }),
                (a.render = function() {
                  var n = this.props,
                    t = n.component,
                    r = n.forwardRef,
                    a = n.name,
                    i = n._reduxForm,
                    s =
                      (n.normalize,
                      n.onBlur,
                      n.onChange,
                      n.onFocus,
                      n.onDragStart,
                      n.onDrop,
                      n.immutableProps,
                      b()(n, [
                        'component',
                        'forwardRef',
                        'name',
                        '_reduxForm',
                        'normalize',
                        'onBlur',
                        'onChange',
                        'onFocus',
                        'onDragStart',
                        'onDrop',
                        'immutableProps'
                      ])),
                    u = y(
                      e,
                      a,
                      o()({}, s, {
                        form: i.form,
                        onBlur: this.handleBlur,
                        onChange: this.handleChange,
                        onDrop: this.handleDrop,
                        onDragStart: this.handleDragStart,
                        onFocus: this.handleFocus
                      })
                    ),
                    c = u.custom,
                    f = b()(u, ['custom']);
                  if ((r && (c.ref = this.ref), 'string' == typeof t)) {
                    var l = f.input;
                    f.meta;
                    return Object(d.createElement)(t, o()({}, l, {}, c));
                  }
                  return Object(d.createElement)(t, o()({}, f, {}, c));
                }),
                r
              );
            })(d.Component);
          return (
            (r.propTypes = { component: O, props: l.a.object }),
            Object(g.c)(
              function(e, r) {
                var o = r.name,
                  a = r._reduxForm,
                  i = a.initialValues,
                  s = (0, a.getFormState)(e),
                  u = t(s, 'initial.' + o),
                  d = void 0 !== u ? u : i && t(i, o),
                  c = t(s, 'values.' + o),
                  f = t(s, 'submitting'),
                  l = (function(e, n) {
                    var t = k.a.getIn(e, n);
                    return t && t._error ? t._error : t;
                  })(t(s, 'syncErrors'), o),
                  p = (function(e, n) {
                    var r = t(e, n);
                    return r && r._warning ? r._warning : r;
                  })(t(s, 'syncWarnings'), o),
                  m = n(c, d);
                return {
                  asyncError: t(s, 'asyncErrors.' + o),
                  asyncValidating: t(s, 'asyncValidating') === o,
                  dirty: !m,
                  pristine: m,
                  state: t(s, 'fields.' + o),
                  submitError: t(s, 'submitErrors.' + o),
                  submitFailed: t(s, 'submitFailed'),
                  submitting: f,
                  syncError: l,
                  syncWarning: p,
                  initial: d,
                  value: c,
                  _value: r.value
                };
              },
              void 0,
              void 0,
              { forwardRef: !0 }
            )(r)
          );
        },
        S = t('../../node_modules/lodash/isEqualWith.js'),
        R = t.n(S),
        B = function(e, n, t, r, o, a) {
          if (a) return e === n;
        },
        V = function(e, n, t) {
          var r = R()(e.props, n, B),
            o = R()(e.state, t, B);
          return !r || !o;
        },
        z = function(e, n) {
          var t = e._reduxForm.sectionPrefix;
          return t ? t + '.' + n : n;
        },
        A = t('../../node_modules/redux-form/es/ReduxFormContext.js'),
        L = function(e) {
          var n = T(e),
            t = e.setIn,
            r = (function(e) {
              function r(n) {
                var r;
                if (
                  (((r = e.call(this, n) || this).ref = c.a.createRef()),
                  (r.normalize = function(e, n) {
                    var o = r.props.normalize;
                    if (!o) return n;
                    var a = r.props._reduxForm.getValues();
                    return o(n, r.value, t(a, e, n), a, e);
                  }),
                  !n._reduxForm)
                )
                  throw new Error(
                    'Field must be inside a component decorated with reduxForm()'
                  );
                return r;
              }
              u()(r, e);
              var a = r.prototype;
              return (
                (a.componentDidMount = function() {
                  var e = this;
                  this.props._reduxForm.register(
                    this.name,
                    'Field',
                    function() {
                      return e.props.validate;
                    },
                    function() {
                      return e.props.warn;
                    }
                  );
                }),
                (a.shouldComponentUpdate = function(e, n) {
                  return V(this, e, n);
                }),
                (a.UNSAFE_componentWillReceiveProps = function(e) {
                  var n = z(this.props, this.props.name),
                    t = z(e, e.name);
                  (n === t &&
                    k.a.deepEqual(this.props.validate, e.validate) &&
                    k.a.deepEqual(this.props.warn, e.warn)) ||
                    (this.props._reduxForm.unregister(n),
                    this.props._reduxForm.register(
                      t,
                      'Field',
                      function() {
                        return e.validate;
                      },
                      function() {
                        return e.warn;
                      }
                    ));
                }),
                (a.componentWillUnmount = function() {
                  this.props._reduxForm.unregister(this.name);
                }),
                (a.getRenderedComponent = function() {
                  return (
                    m()(
                      this.props.forwardRef,
                      'If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field'
                    ),
                    this.ref.current ? this.ref.current.getRenderedComponent() : void 0
                  );
                }),
                (a.render = function() {
                  return Object(d.createElement)(
                    n,
                    o()({}, this.props, {
                      name: this.name,
                      normalize: this.normalize,
                      ref: this.ref
                    })
                  );
                }),
                i()(r, [
                  {
                    key: 'name',
                    get: function() {
                      return z(this.props, this.props.name);
                    }
                  },
                  {
                    key: 'dirty',
                    get: function() {
                      return !this.pristine;
                    }
                  },
                  {
                    key: 'pristine',
                    get: function() {
                      return !(!this.ref.current || !this.ref.current.isPristine());
                    }
                  },
                  {
                    key: 'value',
                    get: function() {
                      return this.ref.current && this.ref.current.getValue();
                    }
                  }
                ]),
                r
              );
            })(d.Component);
          return (
            (r.propTypes = {
              name: l.a.string.isRequired,
              component: O,
              format: l.a.func,
              normalize: l.a.func,
              onBlur: l.a.func,
              onChange: l.a.func,
              onFocus: l.a.func,
              onDragStart: l.a.func,
              onDrop: l.a.func,
              parse: l.a.func,
              props: l.a.object,
              validate: l.a.oneOfType([l.a.func, l.a.arrayOf(l.a.func)]),
              warn: l.a.oneOfType([l.a.func, l.a.arrayOf(l.a.func)]),
              forwardRef: l.a.bool,
              immutableProps: l.a.arrayOf(l.a.string),
              _reduxForm: l.a.object
            }),
            Object(A.b)(r)
          );
        };
      n.a = L(k.a);
    },
    './src/modules/auth/web/resetPassword.component.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t('./node_modules/@babel/runtime/helpers/extends.js'),
        o = t.n(r),
        a = t('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        i = t.n(a),
        s = t('./node_modules/@babel/runtime/helpers/createClass.js'),
        u = t.n(s),
        d = t('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        c = t.n(d),
        f = t('./node_modules/@babel/runtime/helpers/inherits.js'),
        l = t.n(f),
        p = t('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        m = t.n(p),
        h = t('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        b = t.n(h),
        g = t('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        v = t.n(g),
        y = t('../../node_modules/react/index.js'),
        w = t.n(y),
        _ = t('../../node_modules/prop-types/index.js'),
        j = t.n(_),
        x = t('../../node_modules/react-router/esm/react-router.js'),
        k = t('./src/modules/styled/form/reduxformfield.component.js'),
        C = t('../../node_modules/redux-form/es/Field.js'),
        O = t('../../node_modules/redux-form/es/reduxForm.js'),
        F = t('./src/modules/styled/web.js'),
        E = t('./src/modules/form/validators.js'),
        D = t('../../node_modules/redux/es/redux.js'),
        I = t('../../node_modules/react-redux/es/index.js'),
        P = t('./src/modules/auth/auth.actions.js'),
        N = t('./src/modules/navigation/navigation.actions.js');
      function T(e) {
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
            r = b()(e);
          if (n) {
            var o = b()(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return m()(this, t);
        };
      }
      var S = (function(e) {
        l()(t, e);
        var n = T(t);
        function t(e) {
          var r;
          return (
            i()(this, t),
            (r = n.call(this, e)),
            v()(c()(r), 'submit', function(e) {
              var n = r.props.auth.user;
              r.props.actions.resetPassword(e.password, r.token).then(function(e) {
                e && !n ? r.props.actions.showModal('login') : r.props.close();
              });
            }),
            (r.submit = r.submit.bind(c()(r))),
            r
          );
        }
        return (
          u()(t, [
            {
              key: 'componentWillMount',
              value: function() {
                var e = this.props.location,
                  n = Object(x.f)(e.pathname, {
                    path: '/user/resetPassword/:token',
                    exact: !0
                  });
                this.token = n && n.params && n.params.token;
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props.handleSubmit,
                  n = [
                    {
                      name: 'password',
                      component: k.a,
                      type: 'password',
                      label: 'Password',
                      validate: [E.f]
                    },
                    {
                      name: 'confirmPassword',
                      component: k.a,
                      type: 'password',
                      label: 'Confirm Password',
                      validate: [E.f]
                    }
                  ];
                return w.a.createElement(
                  F.r,
                  { display: 'flex', fdirection: 'column', m: '4 0' },
                  w.a.createElement(
                    F.d,
                    { fdirection: 'column', onSubmit: e(this.submit.bind(this)) },
                    n.map(function(e, n) {
                      return w.a.createElement(C.a, o()({}, e, { key: n }));
                    }),
                    w.a.createElement(
                      F.r,
                      { mt: 4, ml: 0, justify: 'flex-end' },
                      w.a.createElement(F.b, { type: 'submit', p: 0 }, 'Update Password')
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(y.Component);
      v()(S, 'propTypes', {
        match: j.a.object,
        actions: j.a.object,
        history: j.a.object,
        handleSubmit: j.a.func,
        auth: j.a.object,
        close: j.a.func,
        showModal: j.a.func,
        location: j.a.object
      });
      n.default = Object(O.a)({
        form: 'settings',
        validate: function(e) {
          var n = {};
          if (e.password !== e.confirmPassword) {
            var t = 'Passwords must be identical';
            (n.password = t), (n.confirmPassword = t);
          }
          return n;
        }
      })(
        Object(I.c)(
          function(e) {
            return { user: e.auth.user, auth: e.auth };
          },
          function(e) {
            return {
              actions: Object(D.bindActionCreators)(
                {
                  resetPassword: P.resetPassword,
                  hideModal: N.hideModal,
                  showModal: N.showModal
                },
                e
              )
            };
          }
        )(Object(x.g)(S))
      );
    },
    './src/modules/form/validators.js': function(e, n, t) {
      'use strict';
      t.d(n, 'f', function() {
        return d;
      }),
        t.d(n, 'd', function() {
          return c;
        }),
        t.d(n, 'h', function() {
          return f;
        }),
        t.d(n, 'a', function() {
          return l;
        }),
        t.d(n, 'b', function() {
          return p;
        }),
        t.d(n, 'g', function() {
          return m;
        }),
        t.d(n, 'e', function() {
          return h;
        }),
        t.d(n, 'c', function() {
          return b;
        });
      var r = t('./node_modules/@babel/runtime/regenerator/index.js'),
        o = t.n(r),
        a = t('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = t.n(a),
        s = t('./src/utils/text.js'),
        u = t('./src/modules/auth/auth.actions.js'),
        d = function(e) {
          return e || 'number' == typeof e ? void 0 : 'Required';
        },
        c = function(e) {
          if (e && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(e))
            return 'Not a valid e-mail';
        },
        f = function(e) {
          if (!s.NAME_PATTERN.test(e))
            return 'Can only contain letters, \nnumbers, dashes and underscores';
        },
        l = (function() {
          var e = i()(
            o.a.mark(function e(n) {
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(u.checkUser)(n, 'email', !0)();
                    case 2:
                      if (!e.sent) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt('return', 'This email has already been used');
                    case 5:
                      return e.abrupt('return', void 0);
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(n) {
            return e.apply(this, arguments);
          };
        })(),
        p = (function() {
          var e = i()(
            o.a.mark(function e(n) {
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!n) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 3), Object(u.checkUser)(n, 'name', !0)();
                    case 3:
                      if (!e.sent) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt('return', 'This username is already taken');
                    case 6:
                      return e.abrupt('return', void 0);
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(n) {
            return e.apply(this, arguments);
          };
        })(),
        m = (function() {
          var e = i()(
            o.a.mark(function e(n) {
              var t, r, a, i;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((t = {}), !n.username)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 4), p(n.username);
                    case 4:
                      (r = e.sent) && (t.username = r);
                    case 6:
                      if (!n.email) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 9), l(n.email);
                    case 9:
                      (a = e.sent) && (t.email = a);
                    case 11:
                      if (!n.handle) {
                        e.next = 16;
                        break;
                      }
                      return (e.next = 14), p(n.handle);
                    case 14:
                      (i = e.sent) && (t.handle = i);
                    case 16:
                      if (!Object.keys(t).length) {
                        e.next = 18;
                        break;
                      }
                      throw t;
                    case 18:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(n) {
            return e.apply(this, arguments);
          };
        })(),
        h = function(e) {
          var n = {};
          return e.password && e.confirmPassword
            ? (e.password !== e.confirmPassword &&
                (n.confirmPassword = 'Passwords must match'),
              n)
            : null;
        },
        b = function() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          return function(e) {
            return n.reduce(function(n, t) {
              return n || t(e);
            }, void 0);
          };
        };
    },
    './src/modules/styled/form/reduxformfield.component.js': function(e, n, t) {
      'use strict';
      var r = t('./node_modules/@babel/runtime/helpers/extends.js'),
        o = t.n(r),
        a = t('../../node_modules/react/index.js'),
        i = t.n(a),
        s = t('../../node_modules/prop-types/index.js'),
        u = t.n(s),
        d = t('./src/modules/styled/web.js'),
        c = t('./src/styles/index.js'),
        f = function(e) {
          var n = e.label,
            t = e.input,
            r = e.type,
            a = e.meta,
            s = e.name,
            u = e.placeholder,
            f = e.autocomplete,
            l = a.dirty,
            p = a.touched,
            m = a.error,
            h = a.warning;
          return i.a.createElement(
            d.r,
            { display: 'flex', fdirection: 'column', mt: 3 },
            n
              ? i.a.createElement(
                  'label',
                  { 'html-for': s },
                  i.a.createElement(d.i, { c: c.b.black }, n)
                )
              : null,
            i.a.createElement(
              d.g,
              o()({}, t, {
                placeholder: u || n,
                autoComplete: f,
                name: s,
                type: r,
                border: 1,
                p: '2 2',
                mt: 1
              })
            ),
            (l || p) &&
              ((m && i.a.createElement(d.k, { c: c.b.red, mt: 1 }, m)) ||
                (h && i.a.createElement(d.k, { c: c.b.red }, h)))
          );
        };
      (f.propTypes = {
        error: u.a.string,
        type: u.a.string,
        name: u.a.string,
        label: u.a.oneOfType([u.a.string, u.a.node]),
        placeholder: u.a.string,
        meta: u.a.object,
        input: u.a.object,
        autocomplete: u.a.string
      }),
        (f.defaultProps = { autocomplete: null }),
        (n.a = f);
    },
    './src/modules/styled/web.js': function(e, n, t) {
      'use strict';
      t.d(n, 'l', function() {
        return u;
      }),
        t.d(n, 'r', function() {
          return d;
        }),
        t.d(n, 'o', function() {
          return c;
        }),
        t.d(n, 'f', function() {
          return f;
        }),
        t.d(n, 'e', function() {
          return l;
        }),
        t.d(n, 'c', function() {
          return p;
        }),
        t.d(n, 'p', function() {
          return m;
        }),
        t.d(n, 'i', function() {
          return h;
        }),
        t.d(n, 'k', function() {
          return b;
        }),
        t.d(n, 'a', function() {
          return g;
        }),
        t.d(n, 'b', function() {
          return v;
        }),
        t.d(n, 'j', function() {
          return y;
        }),
        t.d(n, 'h', function() {
          return w;
        }),
        t.d(n, 'g', function() {
          return _;
        }),
        t.d(n, 'n', function() {
          return j;
        }),
        t.d(n, 'm', function() {
          return x;
        }),
        t.d(n, 'd', function() {
          return k;
        }),
        t.d(n, 'q', function() {
          return C;
        });
      var r = t('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        o = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        a = t('./src/styles/index.js'),
        i = t(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        s = t(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        u = Object(o.default)(r.b).withConfig({
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
        d = o.default.div.withConfig({
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
        c = o.default.span.withConfig({
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
        f = o.default.span.withConfig({
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
        l = o.default.img.withConfig({
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
          (Object(o.default)(c).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], a.c.header, a.f.color),
          Object(o.default)(c).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], a.c.title, a.f.color, a.f.font)),
        h = Object(o.default)(c).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], a.c.link, a.f.color, a.f.font),
        b = Object(o.default)(c).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], a.c.secondaryText, a.f.font, a.f.color),
        g =
          (Object(o.default)(c).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], a.c.altLink, a.f.color, a.f.font),
          Object(o.default)(c).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], a.c.commentText, a.f.color, a.f.font),
          Object(o.default)(c).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], a.c.bodyStyle, a.f.color, a.f.font)),
        v = o.default.button.withConfig({
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
        y = Object(o.default)(c).withConfig({
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
        _ = o.default.input.withConfig({
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
        j = Object(o.default)(s.a).withConfig({
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
        x = Object(o.default)(i.a).withConfig({
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
        C = o.default.video.withConfig({
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
//# sourceMappingURL=auth-web-resetPassword-component.bundle.js.map
