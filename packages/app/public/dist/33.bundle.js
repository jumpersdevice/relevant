(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [33],
  {
    '../../node_modules/@babel/runtime/helpers/createClass.js': function(n, e) {
      function r(n, e) {
        for (var r = 0; r < e.length; r++) {
          var t = e[r];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            'value' in t && (t.writable = !0),
            Object.defineProperty(n, t.key, t);
        }
      }
      n.exports = function(n, e, t) {
        return e && r(n.prototype, e), t && r(n, t), n;
      };
    },
    '../../node_modules/lodash/_baseFor.js': function(n, e, r) {
      var t = r('../../node_modules/lodash/_createBaseFor.js')();
      n.exports = t;
    },
    '../../node_modules/lodash/_baseForOwn.js': function(n, e, r) {
      var t = r('../../node_modules/lodash/_baseFor.js'),
        o = r('../../node_modules/lodash/keys.js');
      n.exports = function(n, e) {
        return n && t(n, e, o);
      };
    },
    '../../node_modules/lodash/_createBaseFor.js': function(n, e) {
      n.exports = function(n) {
        return function(e, r, t) {
          for (var o = -1, a = Object(e), i = t(e), u = i.length; u--; ) {
            var s = i[n ? u : ++o];
            if (!1 === r(a[s], s, a)) break;
          }
          return e;
        };
      };
    },
    '../../node_modules/redux-form/es/Field.js': function(n, e, r) {
      'use strict';
      var t = r('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = r.n(t),
        a = r('../../node_modules/@babel/runtime/helpers/createClass.js'),
        i = r.n(a),
        u = r('../../node_modules/@babel/runtime/helpers/inheritsLoose.js'),
        s = r.n(u),
        d = r('../../node_modules/react/index.js'),
        c = r.n(d),
        l = r('../../node_modules/prop-types/index.js'),
        f = r.n(l),
        m = r('../../node_modules/invariant/browser.js'),
        p = r.n(m),
        h = r(
          '../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js'
        ),
        b = r.n(h),
        v = r('../../node_modules/react-redux/es/index.js'),
        g = function(n, e, r, t) {
          var a = e.value;
          return 'checkbox' === n
            ? o()({}, e, { checked: !!a })
            : 'radio' === n
            ? o()({}, e, { checked: t(a, r), value: r })
            : 'select-multiple' === n
            ? o()({}, e, { value: a || [] })
            : 'file' === n
            ? o()({}, e, { value: a || void 0 })
            : e;
        },
        y = function(n, e, r) {
          var t = n.getIn,
            a = n.toJS,
            i = n.deepEqual,
            u = r.asyncError,
            s = r.asyncValidating,
            d = r.onBlur,
            c = r.onChange,
            l = r.onDrop,
            f = r.onDragStart,
            m = r.dirty,
            p = r.dispatch,
            h = r.onFocus,
            v = r.form,
            y = r.format,
            j = r.initial,
            x = (r.parse, r.pristine),
            _ = r.props,
            w = r.state,
            F = r.submitError,
            O = r.submitFailed,
            E = r.submitting,
            D = r.syncError,
            k = r.syncWarning,
            C = (r.validate, r.value),
            S = r._value,
            T =
              (r.warn,
              b()(r, [
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
            R = D || u || F,
            B = k,
            P = (function(n, r) {
              if (null === r) return n;
              var t = null == n ? '' : n;
              return r ? r(n, e) : t;
            })(C, y);
          return {
            input: g(
              T.type,
              {
                name: e,
                onBlur: d,
                onChange: c,
                onDragStart: f,
                onDrop: l,
                onFocus: h,
                value: P
              },
              S,
              i
            ),
            meta: o()({}, a(w), {
              active: !(!w || !t(w, 'active')),
              asyncValidating: s,
              autofilled: !(!w || !t(w, 'autofilled')),
              dirty: m,
              dispatch: p,
              error: R,
              form: v,
              initial: j,
              warning: B,
              invalid: !!R,
              pristine: x,
              submitting: !!E,
              submitFailed: !!O,
              touched: !(!w || !t(w, 'touched')),
              valid: !R,
              visited: !(!w || !t(w, 'visited'))
            }),
            custom: o()({}, T, {}, _)
          };
        },
        j = r('../../node_modules/redux-form/es/events/isEvent.js'),
        x = function(n, e) {
          if (Object(j.a)(n)) {
            if (!e && n.nativeEvent && void 0 !== n.nativeEvent.text)
              return n.nativeEvent.text;
            if (e && void 0 !== n.nativeEvent) return n.nativeEvent.text;
            var r = n,
              t = r.target,
              o = t.type,
              a = t.value,
              i = t.checked,
              u = t.files,
              s = r.dataTransfer;
            return 'checkbox' === o
              ? !!i
              : 'file' === o
              ? u || (s && s.files)
              : 'select-multiple' === o
              ? (function(n) {
                  var e = [];
                  if (n)
                    for (var r = 0; r < n.length; r++) {
                      var t = n[r];
                      t.selected && e.push(t.value);
                    }
                  return e;
                })(n.target.options)
              : a;
          }
          return n;
        },
        _ =
          'undefined' != typeof window &&
          window.navigator &&
          window.navigator.product &&
          'ReactNative' === window.navigator.product,
        w = function(n, e) {
          var r = e.name,
            t = e.parse,
            o = e.normalize,
            a = x(n, _);
          return t && (a = t(a, r)), o && (a = o(r, a)), a;
        },
        F = r('../../node_modules/redux-form/es/structure/plain/index.js'),
        O = r('../../node_modules/react-is/index.js'),
        E = function(n, e, r) {
          return Object(O.isValidElementType)(n[e])
            ? null
            : new Error('Invalid prop `' + e + '` supplied to `' + r + '`.');
        },
        D = ['_reduxForm'],
        k = function(n) {
          return n && 'object' == typeof n;
        },
        C = function(n) {
          return n && 'function' == typeof n;
        },
        S = function(n) {
          k(n) && C(n.preventDefault) && n.preventDefault();
        },
        T = function(n, e) {
          if (k(n) && k(n.dataTransfer) && C(n.dataTransfer.getData))
            return n.dataTransfer.getData(e);
        },
        R = function(n, e, r) {
          k(n) &&
            k(n.dataTransfer) &&
            C(n.dataTransfer.setData) &&
            n.dataTransfer.setData(e, r);
        },
        B = function(n) {
          var e = n.deepEqual,
            r = n.getIn,
            t = (function(r) {
              function t() {
                for (var n, e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                  t[a] = arguments[a];
                return (
                  ((n = r.call.apply(r, [this].concat(t)) || this).ref = c.a.createRef()),
                  (n.isPristine = function() {
                    return n.props.pristine;
                  }),
                  (n.getValue = function() {
                    return n.props.value;
                  }),
                  (n.handleChange = function(e) {
                    var r = n.props,
                      t = r.name,
                      a = r.dispatch,
                      i = r.parse,
                      u = r.normalize,
                      s = r.onChange,
                      d = r._reduxForm,
                      c = r.value,
                      l = w(e, { name: t, parse: i, normalize: u }),
                      f = !1;
                    if (s)
                      if (!_ && Object(j.a)(e))
                        s(
                          o()({}, e, {
                            preventDefault: function() {
                              return (f = !0), S(e);
                            }
                          }),
                          l,
                          c,
                          t
                        );
                      else {
                        var m = s(e, l, c, t);
                        _ && (f = m);
                      }
                    f ||
                      (a(d.change(t, l)),
                      d.asyncValidate && d.asyncValidate(t, l, 'change'));
                  }),
                  (n.handleFocus = function(e) {
                    var r = n.props,
                      t = r.name,
                      a = r.dispatch,
                      i = r.onFocus,
                      u = r._reduxForm,
                      s = !1;
                    i &&
                      (_
                        ? (s = i(e, t))
                        : i(
                            o()({}, e, {
                              preventDefault: function() {
                                return (s = !0), S(e);
                              }
                            }),
                            t
                          )),
                      s || a(u.focus(t));
                  }),
                  (n.handleBlur = function(e) {
                    var r = n.props,
                      t = r.name,
                      a = r.dispatch,
                      i = r.parse,
                      u = r.normalize,
                      s = r.onBlur,
                      d = r._reduxForm,
                      c = r._value,
                      l = r.value,
                      f = w(e, { name: t, parse: i, normalize: u });
                    f === c && void 0 !== c && (f = l);
                    var m = !1;
                    s &&
                      (_
                        ? (m = s(e, f, l, t))
                        : s(
                            o()({}, e, {
                              preventDefault: function() {
                                return (m = !0), S(e);
                              }
                            }),
                            f,
                            l,
                            t
                          )),
                      m ||
                        (a(d.blur(t, f)),
                        d.asyncValidate && d.asyncValidate(t, f, 'blur'));
                  }),
                  (n.handleDragStart = function(e) {
                    var r = n.props,
                      t = r.name,
                      o = r.onDragStart,
                      a = r.value;
                    R(e, 'text', null == a ? '' : a), o && o(e, t);
                  }),
                  (n.handleDrop = function(e) {
                    var r = n.props,
                      t = r.name,
                      a = r.dispatch,
                      i = r.onDrop,
                      u = r._reduxForm,
                      s = r.value,
                      d = T(e, 'text'),
                      c = !1;
                    i &&
                      i(
                        o()({}, e, {
                          preventDefault: function() {
                            return (c = !0), S(e);
                          }
                        }),
                        d,
                        s,
                        t
                      ),
                      c || (a(u.change(t, d)), S(e));
                  }),
                  n
                );
              }
              s()(t, r);
              var a = t.prototype;
              return (
                (a.shouldComponentUpdate = function(n) {
                  var r = this,
                    t = Object.keys(n),
                    o = Object.keys(this.props);
                  return !!(
                    this.props.children ||
                    n.children ||
                    t.length !== o.length ||
                    t.some(function(t) {
                      return ~(n.immutableProps || []).indexOf(t)
                        ? r.props[t] !== n[t]
                        : !~D.indexOf(t) && !e(r.props[t], n[t]);
                    })
                  );
                }),
                (a.getRenderedComponent = function() {
                  return this.ref.current;
                }),
                (a.render = function() {
                  var e = this.props,
                    r = e.component,
                    t = e.forwardRef,
                    a = e.name,
                    i = e._reduxForm,
                    u =
                      (e.normalize,
                      e.onBlur,
                      e.onChange,
                      e.onFocus,
                      e.onDragStart,
                      e.onDrop,
                      e.immutableProps,
                      b()(e, [
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
                      n,
                      a,
                      o()({}, u, {
                        form: i.form,
                        onBlur: this.handleBlur,
                        onChange: this.handleChange,
                        onDrop: this.handleDrop,
                        onDragStart: this.handleDragStart,
                        onFocus: this.handleFocus
                      })
                    ),
                    c = s.custom,
                    l = b()(s, ['custom']);
                  if ((t && (c.ref = this.ref), 'string' == typeof r)) {
                    var f = l.input;
                    l.meta;
                    return Object(d.createElement)(r, o()({}, f, {}, c));
                  }
                  return Object(d.createElement)(r, o()({}, l, {}, c));
                }),
                t
              );
            })(d.Component);
          return (
            (t.propTypes = { component: E, props: f.a.object }),
            Object(v.c)(
              function(n, t) {
                var o = t.name,
                  a = t._reduxForm,
                  i = a.initialValues,
                  u = (0, a.getFormState)(n),
                  s = r(u, 'initial.' + o),
                  d = void 0 !== s ? s : i && r(i, o),
                  c = r(u, 'values.' + o),
                  l = r(u, 'submitting'),
                  f = (function(n, e) {
                    var r = F.a.getIn(n, e);
                    return r && r._error ? r._error : r;
                  })(r(u, 'syncErrors'), o),
                  m = (function(n, e) {
                    var t = r(n, e);
                    return t && t._warning ? t._warning : t;
                  })(r(u, 'syncWarnings'), o),
                  p = e(c, d);
                return {
                  asyncError: r(u, 'asyncErrors.' + o),
                  asyncValidating: r(u, 'asyncValidating') === o,
                  dirty: !p,
                  pristine: p,
                  state: r(u, 'fields.' + o),
                  submitError: r(u, 'submitErrors.' + o),
                  submitFailed: r(u, 'submitFailed'),
                  submitting: l,
                  syncError: f,
                  syncWarning: m,
                  initial: d,
                  value: c,
                  _value: t.value
                };
              },
              void 0,
              void 0,
              { forwardRef: !0 }
            )(t)
          );
        },
        P = r('../../node_modules/lodash/isEqualWith.js'),
        V = r.n(P),
        z = function(n, e, r, t, o, a) {
          if (a) return n === e;
        },
        U = function(n, e, r) {
          var t = V()(n.props, e, z),
            o = V()(n.state, r, z);
          return !t || !o;
        },
        A = function(n, e) {
          var r = n._reduxForm.sectionPrefix;
          return r ? r + '.' + e : e;
        },
        L = r('../../node_modules/redux-form/es/ReduxFormContext.js'),
        H = function(n) {
          var e = B(n),
            r = n.setIn,
            t = (function(n) {
              function t(e) {
                var t;
                if (
                  (((t = n.call(this, e) || this).ref = c.a.createRef()),
                  (t.normalize = function(n, e) {
                    var o = t.props.normalize;
                    if (!o) return e;
                    var a = t.props._reduxForm.getValues();
                    return o(e, t.value, r(a, n, e), a, n);
                  }),
                  !e._reduxForm)
                )
                  throw new Error(
                    'Field must be inside a component decorated with reduxForm()'
                  );
                return t;
              }
              s()(t, n);
              var a = t.prototype;
              return (
                (a.componentDidMount = function() {
                  var n = this;
                  this.props._reduxForm.register(
                    this.name,
                    'Field',
                    function() {
                      return n.props.validate;
                    },
                    function() {
                      return n.props.warn;
                    }
                  );
                }),
                (a.shouldComponentUpdate = function(n, e) {
                  return U(this, n, e);
                }),
                (a.UNSAFE_componentWillReceiveProps = function(n) {
                  var e = A(this.props, this.props.name),
                    r = A(n, n.name);
                  (e === r &&
                    F.a.deepEqual(this.props.validate, n.validate) &&
                    F.a.deepEqual(this.props.warn, n.warn)) ||
                    (this.props._reduxForm.unregister(e),
                    this.props._reduxForm.register(
                      r,
                      'Field',
                      function() {
                        return n.validate;
                      },
                      function() {
                        return n.warn;
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
                    e,
                    o()({}, this.props, {
                      name: this.name,
                      normalize: this.normalize,
                      ref: this.ref
                    })
                  );
                }),
                i()(t, [
                  {
                    key: 'name',
                    get: function() {
                      return A(this.props, this.props.name);
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
                t
              );
            })(d.Component);
          return (
            (t.propTypes = {
              name: f.a.string.isRequired,
              component: E,
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
            Object(L.b)(t)
          );
        };
      e.a = H(F.a);
    },
    './src/modules/auth/web/handle.component.js': function(n, e, r) {
      'use strict';
      r.r(e);
      var t = r('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = r.n(t),
        a = r('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = r.n(a),
        u = r('../../node_modules/react/index.js'),
        s = r.n(u),
        d = r('../../node_modules/prop-types/index.js'),
        c = r.n(d),
        l = r('../../node_modules/redux/es/redux.js'),
        f = r('../../node_modules/react-redux/es/index.js'),
        m = r('./src/modules/auth/auth.actions.js'),
        p = r(
          '../../node_modules/react-router-dom/node_modules/react-router/esm/react-router.js'
        ),
        h = r('./src/modules/navigation/navigation.actions.js'),
        b = r('./src/modules/styled/form/reduxformfield.component.js'),
        v = r('./src/modules/form/validators.js'),
        g = r('../../node_modules/redux-form/es/Field.js'),
        y = r('../../node_modules/redux-form/es/reduxForm.js'),
        j = r('./src/modules/styled/web.js');
      class x extends u.Component {
        constructor(n) {
          super(n),
            i()(this, 'updateFormFields', () => {
              var { user: n } = this.props;
              this.FORM_FIELDS = [
                {
                  name: 'handle',
                  component: b.a,
                  type: 'text',
                  label: 'Handle',
                  placeholder: 'Choose your handle:',
                  validate: [v.f, v.h]
                },
                {
                  name: 'email',
                  component: b.a,
                  type: 'email',
                  label: 'Email',
                  placeholder: 'Email (optional for email reset and notifications)',
                  validate: [v.d],
                  isHidden: n && n.email
                }
              ];
            }),
            i()(this, 'submit', n => {
              var { actions: e } = this.props;
              e.updateHandle(n);
            }),
            this.updateFormFields();
        }
        componentDidUpdate(n) {
          n.user !== this.props.user && this.updateFormFields();
        }
        render() {
          var { handleSubmit: n, user: e } = this.props;
          return e
            ? s.a.createElement(
                j.d,
                { fdirection: 'column', onSubmit: n(this.submit) },
                this.FORM_FIELDS.map(n =>
                  n.isHidden ? null : s.a.createElement(g.a, o()({}, n, { key: n.name }))
                ),
                s.a.createElement(
                  j.r,
                  { justify: 'flex-start' },
                  s.a.createElement(j.b, { type: 'submit', ml: 'auto', mt: 4 }, 'Finish')
                )
              )
            : s.a.createElement(
                j.r,
                null,
                s.a.createElement(
                  j.a,
                  null,
                  ' You must be logged in to change your handle.'
                )
              );
        }
      }
      i()(x, 'propTypes', {
        user: c.a.object,
        actions: c.a.object,
        checkUser: c.a.func,
        nameError: c.a.string,
        handleSubmit: c.a.func
      });
      e.default = Object(p.f)(
        Object(f.c)(
          n => {
            var e = {},
              { user: r } = n.auth;
            return (
              r && r.handle && (e.handle = r.handle),
              { user: r, auth: n.auth, initialValues: e }
            );
          },
          n => ({
            actions: Object(l.bindActionCreators)(
              {
                loginUser: m.loginUser,
                showModal: h.showModal,
                checkUser: m.checkUser,
                createUser: m.createUser,
                updateHandle: m.updateHandle
              },
              n
            )
          })
        )(
          Object(y.a)({
            form: 'setHandle',
            validate: () => {},
            asyncValidate: v.g,
            asyncChangeFields: ['handle', 'email']
          })(x)
        )
      );
    },
    './src/modules/form/validators.js': function(n, e, r) {
      'use strict';
      r.d(e, 'f', function() {
        return u;
      }),
        r.d(e, 'd', function() {
          return s;
        }),
        r.d(e, 'h', function() {
          return d;
        }),
        r.d(e, 'a', function() {
          return c;
        }),
        r.d(e, 'b', function() {
          return l;
        }),
        r.d(e, 'g', function() {
          return f;
        }),
        r.d(e, 'e', function() {
          return m;
        }),
        r.d(e, 'c', function() {
          return p;
        });
      var t = r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = r.n(t),
        a = r('./src/utils/text.js'),
        i = r('./src/modules/auth/auth.actions.js'),
        u = n => (n || 'number' == typeof n ? void 0 : 'Required'),
        s = n => {
          if (n && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(n))
            return 'Not a valid e-mail';
        },
        d = n => {
          if (!a.NAME_PATTERN.test(n))
            return 'Can only contain letters, \nnumbers, dashes and underscores';
        },
        c = (function() {
          var n = o()(function*(n) {
            if (yield Object(i.checkUser)(n, 'email', !0)())
              return 'This email has already been used';
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })(),
        l = (function() {
          var n = o()(function*(n) {
            if (n && (yield Object(i.checkUser)(n, 'name', !0)()))
              return 'This username is already taken';
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })(),
        f = (function() {
          var n = o()(function*(n) {
            var e = {};
            if (n.username) {
              var r = yield l(n.username);
              r && (e.username = r);
            }
            if (n.email) {
              var t = yield c(n.email);
              t && (e.email = t);
            }
            if (n.handle) {
              var o = yield l(n.handle);
              o && (e.handle = o);
            }
            if (Object.keys(e).length) throw e;
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })(),
        m = n => {
          var e = {};
          return n.password && n.confirmPassword
            ? (n.password !== n.confirmPassword &&
                (e.confirmPassword = 'Passwords must match'),
              e)
            : null;
        },
        p = function() {
          for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
            e[r] = arguments[r];
          return n => e.reduce((e, r) => e || r(n), void 0);
        };
    },
    './src/modules/styled/form/reduxformfield.component.js': function(n, e, r) {
      'use strict';
      var t = r('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = r.n(t),
        a = r('../../node_modules/react/index.js'),
        i = r.n(a),
        u = r('../../node_modules/prop-types/index.js'),
        s = r.n(u),
        d = r('./src/modules/styled/web.js'),
        c = r('./src/styles/index.js'),
        l = n => {
          var {
              label: e,
              input: r,
              type: t,
              meta: a,
              name: u,
              placeholder: s,
              autocomplete: l
            } = n,
            { dirty: f, touched: m, error: p, warning: h } = a;
          return i.a.createElement(
            d.r,
            { display: 'flex', fdirection: 'column', mt: 3 },
            e
              ? i.a.createElement(
                  'label',
                  { 'html-for': u },
                  i.a.createElement(d.i, { c: c.b.black }, e)
                )
              : null,
            i.a.createElement(
              d.g,
              o()({}, r, {
                placeholder: s || e,
                autoComplete: l,
                name: u,
                type: t,
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
        error: s.a.string,
        type: s.a.string,
        name: s.a.string,
        label: s.a.oneOfType([s.a.string, s.a.node]),
        placeholder: s.a.string,
        meta: s.a.object,
        input: s.a.object,
        autocomplete: s.a.string
      }),
        (l.defaultProps = { autocomplete: null }),
        (e.a = l);
    },
    './src/modules/styled/web.js': function(n, e, r) {
      'use strict';
      r.d(e, 'l', function() {
        return R;
      }),
        r.d(e, 'r', function() {
          return B;
        }),
        r.d(e, 'o', function() {
          return P;
        }),
        r.d(e, 'f', function() {
          return V;
        }),
        r.d(e, 'e', function() {
          return z;
        }),
        r.d(e, 'c', function() {
          return U;
        }),
        r.d(e, 'p', function() {
          return A;
        }),
        r.d(e, 'i', function() {
          return L;
        }),
        r.d(e, 'k', function() {
          return H;
        }),
        r.d(e, 'a', function() {
          return q;
        }),
        r.d(e, 'b', function() {
          return I;
        }),
        r.d(e, 'j', function() {
          return W;
        }),
        r.d(e, 'h', function() {
          return N;
        }),
        r.d(e, 'g', function() {
          return M;
        }),
        r.d(e, 'n', function() {
          return Z;
        }),
        r.d(e, 'm', function() {
          return K;
        }),
        r.d(e, 'd', function() {
          return G;
        }),
        r.d(e, 'q', function() {
          return J;
        });
      var t = r('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        o = r.n(t),
        a = r('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        i = r(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        u = r('./src/styles/index.js'),
        s = r(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        d = r(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        );
      function c() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (c = function() {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = o()(['\n  ', '\n  ', '\n']);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = o()([
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
            return n;
          }),
          n
        );
      }
      function m() {
        var n = o()([
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
          (m = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = o()([
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
          (p = function() {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = o()([
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
            return n;
          }),
          n
        );
      }
      function b() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = o()([
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
          (v = function() {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function j() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (j = function() {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (w = function() {
            return n;
          }),
          n
        );
      }
      function F() {
        var n = o()(['\n  ', '\n  ', '\n']);
        return (
          (F = function() {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = o()([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      function D() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (D = function() {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = o()([
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
          (C = function() {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = o()([
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
          (S = function() {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = o()([
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
          (T = function() {
            return n;
          }),
          n
        );
      }
      var R = Object(i.default)(a.b)(
          T(),
          u.c.header,
          u.b.grey,
          u.b.black,
          u.b.black,
          u.f.font,
          u.f.display,
          u.f.color,
          u.f.margin
        ),
        B = i.default.div(
          S(),
          u.f.margin,
          u.f.padding,
          u.f.flex,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.width,
          u.f.height,
          n => (n.onClick ? 'cursor: pointer;' : '')
        ),
        P = i.default.span(
          C(),
          u.f.margin,
          u.f.padding,
          u.f.flex,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.color,
          n => (n.onClick ? 'cursor: pointer;' : '')
        ),
        V = i.default.span(
          k(),
          u.f.margin,
          u.f.padding,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.color
        ),
        z = i.default.img(
          D(),
          u.f.margin,
          u.f.height,
          u.f.width,
          u.f.padding,
          u.f.background,
          u.f.borderRadius,
          u.f.flex
        ),
        U =
          (i.default.span(E(), u.f.margin, u.f.flex),
          i.default.div(
            O(),
            u.f.margin,
            u.f.padding,
            u.f.width,
            u.e.universalBorder('bottom')
          )),
        A =
          (Object(i.default)(P)(F(), u.c.header, u.f.color),
          Object(i.default)(P)(w(), u.c.title, u.f.color, u.f.font)),
        L = Object(i.default)(P)(_(), u.c.link, u.f.color, u.f.font),
        H = Object(i.default)(P)(x(), u.c.secondaryText, u.f.font, u.f.color),
        q =
          (Object(i.default)(P)(j(), u.c.altLink, u.f.color, u.f.font),
          Object(i.default)(P)(y(), u.c.commentText, u.f.color, u.f.font),
          Object(i.default)(P)(g(), u.c.bodyStyle, u.f.color, u.f.font)),
        I = i.default.button(
          v(),
          u.e.button,
          u.e.buttonFont,
          n =>
            n.disabled
              ? '\n    color: '
                  .concat(u.b.white, ';\n    background: ')
                  .concat(u.b.grey, ';\n    ')
              : '',
          u.f.flex,
          u.f.background,
          u.f.padding,
          u.f.width,
          u.f.margin,
          u.f.color,
          u.f.width,
          u.f.height,
          u.e.activeButtonShadow
        ),
        W = Object(i.default)(P)(
          b(),
          u.c.numericalValue,
          u.f.width,
          u.f.font,
          u.f.inheritfont,
          u.f.color
        ),
        N = i.default.input(
          h(),
          u.f.font,
          u.f.flex,
          u.f.border,
          u.f.padding,
          u.f.margin,
          Object(u.i)(1.75),
          Object(u.i)(1.75),
          u.e.universalBorder('', u.b.blue)
        ),
        M = i.default.input(
          p(),
          Object(u.i)(2),
          Object(u.i)(2),
          Object(u.i)(1),
          u.c.bodyStyle,
          u.f.font,
          u.f.flex,
          u.f.border,
          u.e.universalBorder(),
          u.f.padding,
          u.f.margin,
          Object(u.i)(1.75),
          Object(u.i)(1.75),
          u.e.universalBorder('', u.b.blue)
        ),
        Z = Object(i.default)(d.a)(
          m(),
          u.c.bodyStyle,
          u.f.border,
          u.f.flex,
          u.e.universalBorder(),
          Object(u.i)(2),
          Object(u.i)(2),
          u.b.blue,
          u.f.padding,
          u.f.margin,
          u.f.height
        ),
        K = Object(i.default)(s.a)(
          f(),
          u.c.bodyStyle,
          u.f.border,
          u.f.flex,
          u.e.universalBorder(),
          Object(u.i)(2),
          Object(u.i)(2),
          u.b.blue,
          u.f.padding,
          u.f.margin,
          u.f.height
        ),
        G = i.default.form(l(), u.f.flex, u.f.margin),
        J = i.default.video(
          c(),
          u.f.margin,
          u.f.height,
          u.f.width,
          u.f.padding,
          u.f.background,
          u.f.borderRadius,
          u.f.flex
        );
    }
  }
]);
//# sourceMappingURL=33.bundle.js.map