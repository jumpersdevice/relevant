(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [28],
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
        a = t('../../node_modules/lodash/keys.js');
      e.exports = function(e, n) {
        return e && r(e, n, a);
      };
    },
    '../../node_modules/lodash/_createBaseFor.js': function(e, n) {
      e.exports = function(e) {
        return function(n, t, r) {
          for (var a = -1, o = Object(n), i = r(n), u = i.length; u--; ) {
            var s = i[e ? u : ++a];
            if (!1 === t(o[s], s, o)) break;
          }
          return n;
        };
      };
    },
    '../../node_modules/redux-form/es/Field.js': function(e, n, t) {
      'use strict';
      var r = t('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = t.n(r),
        o = t('../../node_modules/@babel/runtime/helpers/createClass.js'),
        i = t.n(o),
        u = t('../../node_modules/@babel/runtime/helpers/inheritsLoose.js'),
        s = t.n(u),
        d = t('../../node_modules/react/index.js'),
        l = t.n(d),
        c = t('../../node_modules/prop-types/index.js'),
        f = t.n(c),
        m = t('../../node_modules/invariant/browser.js'),
        p = t.n(m),
        h = t(
          '../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js'
        ),
        b = t.n(h),
        g = t('../../node_modules/react-redux/es/index.js'),
        v = function(e, n, t, r) {
          var o = n.value;
          return 'checkbox' === e
            ? a()({}, n, { checked: !!o })
            : 'radio' === e
            ? a()({}, n, { checked: r(o, t), value: t })
            : 'select-multiple' === e
            ? a()({}, n, { value: o || [] })
            : 'file' === e
            ? a()({}, n, { value: o || void 0 })
            : n;
        },
        y = function(e, n, t) {
          var r = e.getIn,
            o = e.toJS,
            i = e.deepEqual,
            u = t.asyncError,
            s = t.asyncValidating,
            d = t.onBlur,
            l = t.onChange,
            c = t.onDrop,
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
            F = t.submitFailed,
            C = t.submitting,
            O = t.syncError,
            E = t.syncWarning,
            D = (t.validate, t.value),
            I = t._value,
            N =
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
            T = O || u || k,
            S = E,
            R = (function(e, t) {
              if (null === t) return e;
              var r = null == e ? '' : e;
              return t ? t(e, n) : r;
            })(D, y);
          return {
            input: v(
              N.type,
              {
                name: n,
                onBlur: d,
                onChange: l,
                onDragStart: f,
                onDrop: c,
                onFocus: h,
                value: R
              },
              I,
              i
            ),
            meta: a()({}, o(x), {
              active: !(!x || !r(x, 'active')),
              asyncValidating: s,
              autofilled: !(!x || !r(x, 'autofilled')),
              dirty: m,
              dispatch: p,
              error: T,
              form: g,
              initial: _,
              warning: S,
              invalid: !!T,
              pristine: w,
              submitting: !!C,
              submitFailed: !!F,
              touched: !(!x || !r(x, 'touched')),
              valid: !T,
              visited: !(!x || !r(x, 'visited'))
            }),
            custom: a()({}, N, {}, j)
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
              a = r.type,
              o = r.value,
              i = r.checked,
              u = r.files,
              s = t.dataTransfer;
            return 'checkbox' === a
              ? !!i
              : 'file' === a
              ? u || (s && s.files)
              : 'select-multiple' === a
              ? (function(e) {
                  var n = [];
                  if (e)
                    for (var t = 0; t < e.length; t++) {
                      var r = e[t];
                      r.selected && n.push(r.value);
                    }
                  return n;
                })(e.target.options)
              : o;
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
            a = n.normalize,
            o = w(e, j);
          return r && (o = r(o, t)), a && (o = a(t, o)), o;
        },
        k = t('../../node_modules/redux-form/es/structure/plain/index.js'),
        F = t('../../node_modules/react-is/index.js'),
        C = function(e, n, t) {
          return Object(F.isValidElementType)(e[n])
            ? null
            : new Error('Invalid prop `' + n + '` supplied to `' + t + '`.');
        },
        O = ['_reduxForm'],
        E = function(e) {
          return e && 'object' == typeof e;
        },
        D = function(e) {
          return e && 'function' == typeof e;
        },
        I = function(e) {
          E(e) && D(e.preventDefault) && e.preventDefault();
        },
        N = function(e, n) {
          if (E(e) && E(e.dataTransfer) && D(e.dataTransfer.getData))
            return e.dataTransfer.getData(n);
        },
        T = function(e, n, t) {
          E(e) &&
            E(e.dataTransfer) &&
            D(e.dataTransfer.setData) &&
            e.dataTransfer.setData(n, t);
        },
        S = function(e) {
          var n = e.deepEqual,
            t = e.getIn,
            r = (function(t) {
              function r() {
                for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                  r[o] = arguments[o];
                return (
                  ((e = t.call.apply(t, [this].concat(r)) || this).ref = l.a.createRef()),
                  (e.isPristine = function() {
                    return e.props.pristine;
                  }),
                  (e.getValue = function() {
                    return e.props.value;
                  }),
                  (e.handleChange = function(n) {
                    var t = e.props,
                      r = t.name,
                      o = t.dispatch,
                      i = t.parse,
                      u = t.normalize,
                      s = t.onChange,
                      d = t._reduxForm,
                      l = t.value,
                      c = x(n, { name: r, parse: i, normalize: u }),
                      f = !1;
                    if (s)
                      if (!j && Object(_.a)(n))
                        s(
                          a()({}, n, {
                            preventDefault: function() {
                              return (f = !0), I(n);
                            }
                          }),
                          c,
                          l,
                          r
                        );
                      else {
                        var m = s(n, c, l, r);
                        j && (f = m);
                      }
                    f ||
                      (o(d.change(r, c)),
                      d.asyncValidate && d.asyncValidate(r, c, 'change'));
                  }),
                  (e.handleFocus = function(n) {
                    var t = e.props,
                      r = t.name,
                      o = t.dispatch,
                      i = t.onFocus,
                      u = t._reduxForm,
                      s = !1;
                    i &&
                      (j
                        ? (s = i(n, r))
                        : i(
                            a()({}, n, {
                              preventDefault: function() {
                                return (s = !0), I(n);
                              }
                            }),
                            r
                          )),
                      s || o(u.focus(r));
                  }),
                  (e.handleBlur = function(n) {
                    var t = e.props,
                      r = t.name,
                      o = t.dispatch,
                      i = t.parse,
                      u = t.normalize,
                      s = t.onBlur,
                      d = t._reduxForm,
                      l = t._value,
                      c = t.value,
                      f = x(n, { name: r, parse: i, normalize: u });
                    f === l && void 0 !== l && (f = c);
                    var m = !1;
                    s &&
                      (j
                        ? (m = s(n, f, c, r))
                        : s(
                            a()({}, n, {
                              preventDefault: function() {
                                return (m = !0), I(n);
                              }
                            }),
                            f,
                            c,
                            r
                          )),
                      m ||
                        (o(d.blur(r, f)),
                        d.asyncValidate && d.asyncValidate(r, f, 'blur'));
                  }),
                  (e.handleDragStart = function(n) {
                    var t = e.props,
                      r = t.name,
                      a = t.onDragStart,
                      o = t.value;
                    T(n, 'text', null == o ? '' : o), a && a(n, r);
                  }),
                  (e.handleDrop = function(n) {
                    var t = e.props,
                      r = t.name,
                      o = t.dispatch,
                      i = t.onDrop,
                      u = t._reduxForm,
                      s = t.value,
                      d = N(n, 'text'),
                      l = !1;
                    i &&
                      i(
                        a()({}, n, {
                          preventDefault: function() {
                            return (l = !0), I(n);
                          }
                        }),
                        d,
                        s,
                        r
                      ),
                      l || (o(u.change(r, d)), I(n));
                  }),
                  e
                );
              }
              s()(r, t);
              var o = r.prototype;
              return (
                (o.shouldComponentUpdate = function(e) {
                  var t = this,
                    r = Object.keys(e),
                    a = Object.keys(this.props);
                  return !!(
                    this.props.children ||
                    e.children ||
                    r.length !== a.length ||
                    r.some(function(r) {
                      return ~(e.immutableProps || []).indexOf(r)
                        ? t.props[r] !== e[r]
                        : !~O.indexOf(r) && !n(t.props[r], e[r]);
                    })
                  );
                }),
                (o.getRenderedComponent = function() {
                  return this.ref.current;
                }),
                (o.render = function() {
                  var n = this.props,
                    t = n.component,
                    r = n.forwardRef,
                    o = n.name,
                    i = n._reduxForm,
                    u =
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
                    s = y(
                      e,
                      o,
                      a()({}, u, {
                        form: i.form,
                        onBlur: this.handleBlur,
                        onChange: this.handleChange,
                        onDrop: this.handleDrop,
                        onDragStart: this.handleDragStart,
                        onFocus: this.handleFocus
                      })
                    ),
                    l = s.custom,
                    c = b()(s, ['custom']);
                  if ((r && (l.ref = this.ref), 'string' == typeof t)) {
                    var f = c.input;
                    c.meta;
                    return Object(d.createElement)(t, a()({}, f, {}, l));
                  }
                  return Object(d.createElement)(t, a()({}, c, {}, l));
                }),
                r
              );
            })(d.Component);
          return (
            (r.propTypes = { component: C, props: f.a.object }),
            Object(g.c)(
              function(e, r) {
                var a = r.name,
                  o = r._reduxForm,
                  i = o.initialValues,
                  u = (0, o.getFormState)(e),
                  s = t(u, 'initial.' + a),
                  d = void 0 !== s ? s : i && t(i, a),
                  l = t(u, 'values.' + a),
                  c = t(u, 'submitting'),
                  f = (function(e, n) {
                    var t = k.a.getIn(e, n);
                    return t && t._error ? t._error : t;
                  })(t(u, 'syncErrors'), a),
                  m = (function(e, n) {
                    var r = t(e, n);
                    return r && r._warning ? r._warning : r;
                  })(t(u, 'syncWarnings'), a),
                  p = n(l, d);
                return {
                  asyncError: t(u, 'asyncErrors.' + a),
                  asyncValidating: t(u, 'asyncValidating') === a,
                  dirty: !p,
                  pristine: p,
                  state: t(u, 'fields.' + a),
                  submitError: t(u, 'submitErrors.' + a),
                  submitFailed: t(u, 'submitFailed'),
                  submitting: c,
                  syncError: f,
                  syncWarning: m,
                  initial: d,
                  value: l,
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
        P = function(e, n, t, r, a, o) {
          if (o) return e === n;
        },
        V = function(e, n, t) {
          var r = B()(e.props, n, P),
            a = B()(e.state, t, P);
          return !r || !a;
        },
        z = function(e, n) {
          var t = e._reduxForm.sectionPrefix;
          return t ? t + '.' + n : n;
        },
        A = t('../../node_modules/redux-form/es/ReduxFormContext.js'),
        U = function(e) {
          var n = S(e),
            t = e.setIn,
            r = (function(e) {
              function r(n) {
                var r;
                if (
                  (((r = e.call(this, n) || this).ref = l.a.createRef()),
                  (r.normalize = function(e, n) {
                    var a = r.props.normalize;
                    if (!a) return n;
                    var o = r.props._reduxForm.getValues();
                    return a(n, r.value, t(o, e, n), o, e);
                  }),
                  !n._reduxForm)
                )
                  throw new Error(
                    'Field must be inside a component decorated with reduxForm()'
                  );
                return r;
              }
              s()(r, e);
              var o = r.prototype;
              return (
                (o.componentDidMount = function() {
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
                (o.shouldComponentUpdate = function(e, n) {
                  return V(this, e, n);
                }),
                (o.UNSAFE_componentWillReceiveProps = function(e) {
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
                (o.componentWillUnmount = function() {
                  this.props._reduxForm.unregister(this.name);
                }),
                (o.getRenderedComponent = function() {
                  return (
                    p()(
                      this.props.forwardRef,
                      'If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field'
                    ),
                    this.ref.current ? this.ref.current.getRenderedComponent() : void 0
                  );
                }),
                (o.render = function() {
                  return Object(d.createElement)(
                    n,
                    a()({}, this.props, {
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
      n.a = U(k.a);
    },
    './src/modules/auth/web/handle.component.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t('./node_modules/@babel/runtime/helpers/extends.js'),
        a = t.n(r),
        o = t('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        i = t.n(o),
        u = t('./node_modules/@babel/runtime/helpers/createClass.js'),
        s = t.n(u),
        d = t('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        l = t.n(d),
        c = t('./node_modules/@babel/runtime/helpers/inherits.js'),
        f = t.n(c),
        m = t('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        p = t.n(m),
        h = t('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        b = t.n(h),
        g = t('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        v = t.n(g),
        y = t('../../node_modules/react/index.js'),
        _ = t.n(y),
        w = t('../../node_modules/prop-types/index.js'),
        j = t.n(w),
        x = t('../../node_modules/redux/es/redux.js'),
        k = t('../../node_modules/react-redux/es/index.js'),
        F = t('./src/modules/auth/auth.actions.js'),
        C = t('../../node_modules/react-router/esm/react-router.js'),
        O = t('./src/modules/navigation/navigation.actions.js'),
        E = t('./src/modules/styled/form/reduxformfield.component.js'),
        D = t('./src/modules/form/validators.js'),
        I = t('../../node_modules/redux-form/es/Field.js'),
        N = t('../../node_modules/redux-form/es/reduxForm.js'),
        T = t('./src/modules/styled/web.js');
      function S(e) {
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
            var a = b()(this).constructor;
            t = Reflect.construct(r, arguments, a);
          } else t = r.apply(this, arguments);
          return p()(this, t);
        };
      }
      var R = (function(e) {
        f()(t, e);
        var n = S(t);
        function t(e) {
          var r;
          return (
            i()(this, t),
            (r = n.call(this, e)),
            v()(l()(r), 'updateFormFields', function() {
              var e = r.props.user;
              r.FORM_FIELDS = [
                {
                  name: 'handle',
                  component: E.a,
                  type: 'text',
                  label: 'Handle',
                  placeholder: 'Choose your handle:',
                  validate: [D.f, D.h]
                },
                {
                  name: 'email',
                  component: E.a,
                  type: 'email',
                  label: 'Email',
                  placeholder: 'Email (optional for email reset and notifications)',
                  validate: [D.d],
                  isHidden: e && e.email
                }
              ];
            }),
            v()(l()(r), 'submit', function(e) {
              r.props.actions.updateHandle(e);
            }),
            r.updateFormFields(),
            r
          );
        }
        return (
          s()(t, [
            {
              key: 'componentDidUpdate',
              value: function(e) {
                e.user !== this.props.user && this.updateFormFields();
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  n = e.handleSubmit;
                return e.user
                  ? _.a.createElement(
                      T.d,
                      { fdirection: 'column', onSubmit: n(this.submit) },
                      this.FORM_FIELDS.map(function(e) {
                        return e.isHidden
                          ? null
                          : _.a.createElement(I.a, a()({}, e, { key: e.name }));
                      }),
                      _.a.createElement(
                        T.r,
                        { justify: 'flex-start' },
                        _.a.createElement(
                          T.b,
                          { type: 'submit', ml: 'auto', mt: 4 },
                          'Finish'
                        )
                      )
                    )
                  : _.a.createElement(
                      T.r,
                      null,
                      _.a.createElement(
                        T.a,
                        null,
                        ' You must be logged in to change your handle.'
                      )
                    );
              }
            }
          ]),
          t
        );
      })(y.Component);
      v()(R, 'propTypes', {
        user: j.a.object,
        actions: j.a.object,
        checkUser: j.a.func,
        nameError: j.a.string,
        handleSubmit: j.a.func
      });
      n.default = Object(C.g)(
        Object(k.c)(
          function(e) {
            var n = {},
              t = e.auth.user;
            return (
              t && t.handle && (n.handle = t.handle),
              { user: t, auth: e.auth, initialValues: n }
            );
          },
          function(e) {
            return {
              actions: Object(x.bindActionCreators)(
                {
                  loginUser: F.loginUser,
                  showModal: O.showModal,
                  checkUser: F.checkUser,
                  createUser: F.createUser,
                  updateHandle: F.updateHandle
                },
                e
              )
            };
          }
        )(
          Object(N.a)({
            form: 'setHandle',
            validate: function() {},
            asyncValidate: D.g,
            asyncChangeFields: ['handle', 'email']
          })(R)
        )
      );
    },
    './src/modules/form/validators.js': function(e, n, t) {
      'use strict';
      t.d(n, 'f', function() {
        return d;
      }),
        t.d(n, 'd', function() {
          return l;
        }),
        t.d(n, 'h', function() {
          return c;
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
        a = t.n(r),
        o = t('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = t.n(o),
        u = t('./src/utils/text.js'),
        s = t('./src/modules/auth/auth.actions.js'),
        d = function(e) {
          return e || 'number' == typeof e ? void 0 : 'Required';
        },
        l = function(e) {
          if (e && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(e))
            return 'Not a valid e-mail';
        },
        c = function(e) {
          if (!u.NAME_PATTERN.test(e))
            return 'Can only contain letters, \nnumbers, dashes and underscores';
        },
        f = (function() {
          var e = i()(
            a.a.mark(function e(n) {
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.checkUser)(n, 'email', !0)();
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
            a.a.mark(function e(n) {
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!n) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 3), Object(s.checkUser)(n, 'name', !0)();
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
            a.a.mark(function e(n) {
              var t, r, o, i;
              return a.a.wrap(function(e) {
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
                      (o = e.sent) && (t.email = o);
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
        a = t.n(r),
        o = t('../../node_modules/react/index.js'),
        i = t.n(o),
        u = t('../../node_modules/prop-types/index.js'),
        s = t.n(u),
        d = t('./src/modules/styled/web.js'),
        l = t('./src/styles/index.js'),
        c = function(e) {
          var n = e.label,
            t = e.input,
            r = e.type,
            o = e.meta,
            u = e.name,
            s = e.placeholder,
            c = e.autocomplete,
            f = o.dirty,
            m = o.touched,
            p = o.error,
            h = o.warning;
          return i.a.createElement(
            d.r,
            { display: 'flex', fdirection: 'column', mt: 3 },
            n
              ? i.a.createElement(
                  'label',
                  { 'html-for': u },
                  i.a.createElement(d.i, { c: l.b.black }, n)
                )
              : null,
            i.a.createElement(
              d.g,
              a()({}, t, {
                placeholder: s || n,
                autoComplete: c,
                name: u,
                type: r,
                border: 1,
                p: '2 2',
                mt: 1
              })
            ),
            (f || m) &&
              ((p && i.a.createElement(d.k, { c: l.b.red, mt: 1 }, p)) ||
                (h && i.a.createElement(d.k, { c: l.b.red }, h)))
          );
        };
      (c.propTypes = {
        error: s.a.string,
        type: s.a.string,
        name: s.a.string,
        label: s.a.oneOfType([s.a.string, s.a.node]),
        placeholder: s.a.string,
        meta: s.a.object,
        input: s.a.object,
        autocomplete: s.a.string
      }),
        (c.defaultProps = { autocomplete: null }),
        (n.a = c);
    },
    './src/modules/styled/web.js': function(e, n, t) {
      'use strict';
      t.d(n, 'l', function() {
        return s;
      }),
        t.d(n, 'r', function() {
          return d;
        }),
        t.d(n, 'o', function() {
          return l;
        }),
        t.d(n, 'f', function() {
          return c;
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
          return F;
        });
      var r = t('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        a = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        o = t('./src/styles/index.js'),
        i = t(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        u = t(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        s = Object(a.default)(r.b).withConfig({
          displayName: 'web__StyledNavLink',
          componentId: 'kfa5fa-0'
        })(
          ['', ';color:', ';&.active{color:', ';}:hover{color:', ';}', ' ', ' ', ' ', ''],
          o.c.header,
          o.b.grey,
          o.b.black,
          o.b.black,
          o.f.font,
          o.f.display,
          o.f.color,
          o.f.margin
        ),
        d = a.default.div.withConfig({
          displayName: 'web__View',
          componentId: 'kfa5fa-1'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.padding,
          o.f.flex,
          o.f.font,
          o.f.background,
          o.f.border,
          o.f.width,
          o.f.height,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        l = a.default.span.withConfig({
          displayName: 'web__Text',
          componentId: 'kfa5fa-2'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.padding,
          o.f.flex,
          o.f.font,
          o.f.background,
          o.f.border,
          o.f.color,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        c = a.default.span.withConfig({
          displayName: 'web__InlineText',
          componentId: 'kfa5fa-3'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.padding,
          o.f.font,
          o.f.background,
          o.f.border,
          o.f.color
        ),
        f = a.default.img.withConfig({
          displayName: 'web__Image',
          componentId: 'kfa5fa-4'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.height,
          o.f.width,
          o.f.padding,
          o.f.background,
          o.f.borderRadius,
          o.f.flex
        ),
        m =
          (a.default.span.withConfig({
            displayName: 'web__ImageWrapper',
            componentId: 'kfa5fa-5'
          })(
            ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
            o.f.margin,
            o.f.flex
          ),
          a.default.div.withConfig({
            displayName: 'web__Divider',
            componentId: 'kfa5fa-6'
          })(
            ['', ' ', ' ', ' ', ''],
            o.f.margin,
            o.f.padding,
            o.f.width,
            o.e.universalBorder('bottom')
          )),
        p =
          (Object(a.default)(l).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], o.c.header, o.f.color),
          Object(a.default)(l).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], o.c.title, o.f.color, o.f.font)),
        h = Object(a.default)(l).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], o.c.link, o.f.color, o.f.font),
        b = Object(a.default)(l).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], o.c.secondaryText, o.f.font, o.f.color),
        g =
          (Object(a.default)(l).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], o.c.altLink, o.f.color, o.f.font),
          Object(a.default)(l).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], o.c.commentText, o.f.color, o.f.font),
          Object(a.default)(l).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], o.c.bodyStyle, o.f.color, o.f.font)),
        v = a.default.button.withConfig({
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
          o.e.button,
          o.e.buttonFont,
          function(e) {
            return e.disabled
              ? '\n    color: '
                  .concat(o.b.white, ';\n    background: ')
                  .concat(o.b.grey, ';\n    ')
              : '';
          },
          o.f.flex,
          o.f.background,
          o.f.padding,
          o.f.width,
          o.f.margin,
          o.f.color,
          o.f.width,
          o.f.height,
          o.e.activeButtonShadow
        ),
        y = Object(a.default)(l).withConfig({
          displayName: 'web__NumericalValue',
          componentId: 'kfa5fa-15'
        })(
          ['', ' ', ' ', ' ', ' ', ''],
          o.c.numericalValue,
          o.f.width,
          o.f.font,
          o.f.inheritfont,
          o.f.color
        ),
        _ = a.default.input.withConfig({
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
          o.f.font,
          o.f.flex,
          o.f.border,
          o.f.padding,
          o.f.margin,
          Object(o.i)(1.75),
          Object(o.i)(1.75),
          o.e.universalBorder('', o.b.blue)
        ),
        w = a.default.input.withConfig({
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
          Object(o.i)(2),
          Object(o.i)(2),
          Object(o.i)(1),
          o.c.bodyStyle,
          o.f.font,
          o.f.flex,
          o.f.border,
          o.e.universalBorder(),
          o.f.padding,
          o.f.margin,
          Object(o.i)(1.75),
          Object(o.i)(1.75),
          o.e.universalBorder('', o.b.blue)
        ),
        j = Object(a.default)(u.a).withConfig({
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
          o.c.bodyStyle,
          o.f.border,
          o.f.flex,
          o.e.universalBorder(),
          Object(o.i)(2),
          Object(o.i)(2),
          o.b.blue,
          o.f.padding,
          o.f.margin,
          o.f.height
        ),
        x = Object(a.default)(i.a).withConfig({
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
          o.c.bodyStyle,
          o.f.border,
          o.f.flex,
          o.e.universalBorder(),
          Object(o.i)(2),
          Object(o.i)(2),
          o.b.blue,
          o.f.padding,
          o.f.margin,
          o.f.height
        ),
        k = a.default.form.withConfig({
          displayName: 'web__Form',
          componentId: 'kfa5fa-20'
        })(['', ' ', ''], o.f.flex, o.f.margin),
        F = a.default.video.withConfig({
          displayName: 'web__Video',
          componentId: 'kfa5fa-21'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.height,
          o.f.width,
          o.f.padding,
          o.f.background,
          o.f.borderRadius,
          o.f.flex
        );
    }
  }
]);
//# sourceMappingURL=auth-web-handle-component.bundle.js.map
