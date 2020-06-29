(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [27],
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
        l = t('../../node_modules/prop-types/index.js'),
        f = t.n(l),
        m = t('../../node_modules/invariant/browser.js'),
        p = t.n(m),
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
            l = t.onDrop,
            f = t.onDragStart,
            m = t.dirty,
            p = t.dispatch,
            h = t.onFocus,
            g = t.form,
            y = t.format,
            _ = t.initial,
            w = (t.parse, t.pristine),
            j = t.props,
            x = t.state,
            k = t.submitError,
            E = t.submitFailed,
            C = t.submitting,
            O = t.syncError,
            F = t.syncWarning,
            D = (t.validate, t.value),
            I = t._value,
            T =
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
            S = O || s || k,
            N = F,
            R = (function(e, t) {
              if (null === t) return e;
              var r = null == e ? '' : e;
              return t ? t(e, n) : r;
            })(D, y);
          return {
            input: v(
              T.type,
              {
                name: n,
                onBlur: d,
                onChange: c,
                onDragStart: f,
                onDrop: l,
                onFocus: h,
                value: R
              },
              I,
              i
            ),
            meta: o()({}, a(x), {
              active: !(!x || !r(x, 'active')),
              asyncValidating: u,
              autofilled: !(!x || !r(x, 'autofilled')),
              dirty: m,
              dispatch: p,
              error: S,
              form: g,
              initial: _,
              warning: N,
              invalid: !!S,
              pristine: w,
              submitting: !!C,
              submitFailed: !!E,
              touched: !(!x || !r(x, 'touched')),
              valid: !S,
              visited: !(!x || !r(x, 'visited'))
            }),
            custom: o()({}, T, {}, j)
          };
        },
        _ = t('../../node_modules/redux-form/es/events/isEvent.js'),
        w = function(e, n) {
          if (Object(_.a)(e)) {
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
            a = w(e, j);
          return r && (a = r(a, t)), o && (a = o(t, a)), a;
        },
        k = t('../../node_modules/redux-form/es/structure/plain/index.js'),
        E = t('../../node_modules/react-is/index.js'),
        C = function(e, n, t) {
          return Object(E.isValidElementType)(e[n])
            ? null
            : new Error('Invalid prop `' + n + '` supplied to `' + t + '`.');
        },
        O = ['_reduxForm'],
        F = function(e) {
          return e && 'object' == typeof e;
        },
        D = function(e) {
          return e && 'function' == typeof e;
        },
        I = function(e) {
          F(e) && D(e.preventDefault) && e.preventDefault();
        },
        T = function(e, n) {
          if (F(e) && F(e.dataTransfer) && D(e.dataTransfer.getData))
            return e.dataTransfer.getData(n);
        },
        S = function(e, n, t) {
          F(e) &&
            F(e.dataTransfer) &&
            D(e.dataTransfer.setData) &&
            e.dataTransfer.setData(n, t);
        },
        N = function(e) {
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
                      l = x(n, { name: r, parse: i, normalize: s }),
                      f = !1;
                    if (u)
                      if (!j && Object(_.a)(n))
                        u(
                          o()({}, n, {
                            preventDefault: function() {
                              return (f = !0), I(n);
                            }
                          }),
                          l,
                          c,
                          r
                        );
                      else {
                        var m = u(n, l, c, r);
                        j && (f = m);
                      }
                    f ||
                      (a(d.change(r, l)),
                      d.asyncValidate && d.asyncValidate(r, l, 'change'));
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
                      l = t.value,
                      f = x(n, { name: r, parse: i, normalize: s });
                    f === c && void 0 !== c && (f = l);
                    var m = !1;
                    u &&
                      (j
                        ? (m = u(n, f, l, r))
                        : u(
                            o()({}, n, {
                              preventDefault: function() {
                                return (m = !0), I(n);
                              }
                            }),
                            f,
                            l,
                            r
                          )),
                      m ||
                        (a(d.blur(r, f)),
                        d.asyncValidate && d.asyncValidate(r, f, 'blur'));
                  }),
                  (e.handleDragStart = function(n) {
                    var t = e.props,
                      r = t.name,
                      o = t.onDragStart,
                      a = t.value;
                    S(n, 'text', null == a ? '' : a), o && o(n, r);
                  }),
                  (e.handleDrop = function(n) {
                    var t = e.props,
                      r = t.name,
                      a = t.dispatch,
                      i = t.onDrop,
                      s = t._reduxForm,
                      u = t.value,
                      d = T(n, 'text'),
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
                        : !~O.indexOf(r) && !n(t.props[r], e[r]);
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
                    l = b()(u, ['custom']);
                  if ((r && (c.ref = this.ref), 'string' == typeof t)) {
                    var f = l.input;
                    l.meta;
                    return Object(d.createElement)(t, o()({}, f, {}, c));
                  }
                  return Object(d.createElement)(t, o()({}, l, {}, c));
                }),
                r
              );
            })(d.Component);
          return (
            (r.propTypes = { component: C, props: f.a.object }),
            Object(g.c)(
              function(e, r) {
                var o = r.name,
                  a = r._reduxForm,
                  i = a.initialValues,
                  s = (0, a.getFormState)(e),
                  u = t(s, 'initial.' + o),
                  d = void 0 !== u ? u : i && t(i, o),
                  c = t(s, 'values.' + o),
                  l = t(s, 'submitting'),
                  f = (function(e, n) {
                    var t = k.a.getIn(e, n);
                    return t && t._error ? t._error : t;
                  })(t(s, 'syncErrors'), o),
                  m = (function(e, n) {
                    var r = t(e, n);
                    return r && r._warning ? r._warning : r;
                  })(t(s, 'syncWarnings'), o),
                  p = n(c, d);
                return {
                  asyncError: t(s, 'asyncErrors.' + o),
                  asyncValidating: t(s, 'asyncValidating') === o,
                  dirty: !p,
                  pristine: p,
                  state: t(s, 'fields.' + o),
                  submitError: t(s, 'submitErrors.' + o),
                  submitFailed: t(s, 'submitFailed'),
                  submitting: l,
                  syncError: f,
                  syncWarning: m,
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
        R = t('../../node_modules/lodash/isEqualWith.js'),
        B = t.n(R),
        P = function(e, n, t, r, o, a) {
          if (a) return e === n;
        },
        V = function(e, n, t) {
          var r = B()(e.props, n, P),
            o = B()(e.state, t, P);
          return !r || !o;
        },
        z = function(e, n) {
          var t = e._reduxForm.sectionPrefix;
          return t ? t + '.' + n : n;
        },
        A = t('../../node_modules/redux-form/es/ReduxFormContext.js'),
        L = function(e) {
          var n = N(e),
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
                    p()(
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
              name: f.a.string.isRequired,
              component: C,
              format: f.a.func,
              normalize: f.a.func,
              onBlur: f.a.func,
              onChange: f.a.func,
              onFocus: f.a.func,
              onDragStart: f.a.func,
              onDrop: f.a.func,
              parse: f.a.func,
              props: f.a.object,
              validate: f.a.oneOfType([f.a.func, f.a.arrayOf(f.a.func)]),
              warn: f.a.oneOfType([f.a.func, f.a.arrayOf(f.a.func)]),
              forwardRef: f.a.bool,
              immutableProps: f.a.arrayOf(f.a.string),
              _reduxForm: f.a.object
            }),
            Object(A.b)(r)
          );
        };
      n.a = L(k.a);
    },
    './src/modules/auth/web/forgot.component.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t('./node_modules/@babel/runtime/helpers/extends.js'),
        o = t.n(r),
        a = t('./node_modules/@babel/runtime/regenerator/index.js'),
        i = t.n(a),
        s = t('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = t.n(s),
        d = t('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        c = t.n(d),
        l = t('./node_modules/@babel/runtime/helpers/createClass.js'),
        f = t.n(l),
        m = t('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        p = t.n(m),
        h = t('./node_modules/@babel/runtime/helpers/inherits.js'),
        b = t.n(h),
        g = t('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        v = t.n(g),
        y = t('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        _ = t.n(y),
        w = t('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        j = t.n(w),
        x = t('../../node_modules/react/index.js'),
        k = t.n(x),
        E = t('../../node_modules/prop-types/index.js'),
        C = t.n(E),
        O = t('./src/modules/styled/uni.js'),
        F = t('./src/styles/index.js'),
        D = t('../../node_modules/react-redux/es/index.js'),
        I = t('../../node_modules/redux/es/redux.js'),
        T = t('../../node_modules/react-router/esm/react-router.js'),
        S = t('./src/modules/navigation/navigation.actions.js'),
        N = t('./src/modules/auth/auth.actions.js'),
        R = t('./src/modules/styled/form/reduxformfield.component.js'),
        B = t('./src/modules/form/validators.js'),
        P = t('../../node_modules/redux-form/es/Field.js'),
        V = t('../../node_modules/redux-form/es/reduxForm.js'),
        z = t('./src/modules/styled/web.js'),
        A = t('../../node_modules/query-string/index.js'),
        L = t.n(A);
      function W(e) {
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
            r = _()(e);
          if (n) {
            var o = _()(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return v()(this, t);
        };
      }
      var q = (function(e) {
        b()(t, e);
        var n = W(t);
        function t(e) {
          var r;
          return (
            c()(this, t),
            (r = n.call(this, e)),
            j()(
              p()(r),
              'sendEmail',
              (function() {
                var e = u()(
                  i.a.mark(function e(n) {
                    var t, o, a, s, u, d;
                    return i.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = r.props),
                              (o = t.actions),
                              (a = t.location),
                              delete (s = L.a.parse(a.search)).modal,
                              (u = '?' + L.a.stringify(s)),
                              (e.next = 6),
                              o.forgotPassword(n.username, u)
                            );
                          case 6:
                            (d = e.sent) &&
                              d.email &&
                              r.setState({ sentEmailTo: d.email });
                          case 8:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function(n) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            (r.state = { sentEmailTo: null }),
            (r.FORM_FIELDS = [
              {
                name: 'username',
                component: R.a,
                type: 'text',
                placeholder: 'Username or Email',
                validate: [B.f]
              }
            ]),
            r
          );
        }
        return (
          f()(t, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  n = this.props.handleSubmit;
                return this.state.sentEmailTo
                  ? k.a.createElement(
                      O.d,
                      { c: F.b.black },
                      'We have set an email to ',
                      this.state.sentEmailTo,
                      ' with a link to reset your password.',
                      '\n',
                      "If you don't see a password reset email in your inbox, please check your spam folder."
                    )
                  : k.a.createElement(
                      z.r,
                      { fdirection: 'column' },
                      k.a.createElement(
                        z.d,
                        { fdirection: 'column', onSubmit: n(this.sendEmail) },
                        this.FORM_FIELDS.map(function(e, n) {
                          return k.a.createElement(P.a, o()({}, e, { key: n }));
                        }),
                        k.a.createElement(
                          z.r,
                          {
                            display: 'flex',
                            fdirection: 'row',
                            align: 'center',
                            mt: 7,
                            justify: 'flex-end'
                          },
                          k.a.createElement(
                            O.v,
                            { shrink: 1 },
                            'Back to ',
                            k.a.createElement(
                              'a',
                              {
                                onClick: function() {
                                  return e.props.actions.showModal('login');
                                }
                              },
                              'Sign in'
                            )
                          ),
                          k.a.createElement(
                            z.b,
                            { type: 'submit', m: 0, ml: 2 },
                            'Send Recovery Email'
                          )
                        )
                      )
                    );
              }
            }
          ]),
          t
        );
      })(x.Component);
      j()(q, 'propTypes', {
        actions: C.a.object,
        location: C.a.object,
        handleSubmit: C.a.func,
        initialValues: C.a.object
      });
      n.default = Object(T.g)(
        Object(D.c)(
          function(e) {
            return {
              user: e.auth.user,
              auth: e.auth,
              initialValues: {},
              enableReinitialize: !0
            };
          },
          function(e) {
            return {
              actions: Object(I.bindActionCreators)(
                { showModal: S.showModal, forgotPassword: N.forgotPassword },
                e
              )
            };
          }
        )(Object(V.a)({ form: 'forgotPassword' })(q))
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
          return l;
        }),
        t.d(n, 'a', function() {
          return f;
        }),
        t.d(n, 'b', function() {
          return m;
        }),
        t.d(n, 'g', function() {
          return p;
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
        l = function(e) {
          if (!s.NAME_PATTERN.test(e))
            return 'Can only contain letters, \nnumbers, dashes and underscores';
        },
        f = (function() {
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
        m = (function() {
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
        p = (function() {
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
                      return (e.next = 4), m(n.username);
                    case 4:
                      (r = e.sent) && (t.username = r);
                    case 6:
                      if (!n.email) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 9), f(n.email);
                    case 9:
                      (a = e.sent) && (t.email = a);
                    case 11:
                      if (!n.handle) {
                        e.next = 16;
                        break;
                      }
                      return (e.next = 14), m(n.handle);
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
        l = function(e) {
          var n = e.label,
            t = e.input,
            r = e.type,
            a = e.meta,
            s = e.name,
            u = e.placeholder,
            l = e.autocomplete,
            f = a.dirty,
            m = a.touched,
            p = a.error,
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
                autoComplete: l,
                name: s,
                type: r,
                border: 1,
                p: '2 2',
                mt: 1
              })
            ),
            (f || m) &&
              ((p && i.a.createElement(d.k, { c: c.b.red, mt: 1 }, p)) ||
                (h && i.a.createElement(d.k, { c: c.b.red }, h)))
          );
        };
      (l.propTypes = {
        error: u.a.string,
        type: u.a.string,
        name: u.a.string,
        label: u.a.oneOfType([u.a.string, u.a.node]),
        placeholder: u.a.string,
        meta: u.a.object,
        input: u.a.object,
        autocomplete: u.a.string
      }),
        (l.defaultProps = { autocomplete: null }),
        (n.a = l);
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
          return l;
        }),
        t.d(n, 'e', function() {
          return f;
        }),
        t.d(n, 'c', function() {
          return m;
        }),
        t.d(n, 'p', function() {
          return p;
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
          return _;
        }),
        t.d(n, 'g', function() {
          return w;
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
          return E;
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
        l = o.default.span.withConfig({
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
        m =
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
        p =
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
        _ = o.default.input.withConfig({
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
        w = o.default.input.withConfig({
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
        E = o.default.video.withConfig({
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
//# sourceMappingURL=auth-web-forgot-component.bundle.js.map
