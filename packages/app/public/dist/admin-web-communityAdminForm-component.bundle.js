(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [9],
  {
    './src/modules/admin/web/communityAdminForm.component.js': function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        i = n.n(o),
        c = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = n.n(c),
        s = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        l = n.n(s),
        f = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        d = n.n(f),
        p = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        m = n.n(p),
        b = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        h = n.n(b),
        y = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        g = n.n(y),
        v = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        j = n.n(v),
        w = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        x = n.n(w),
        O = n('../../node_modules/react/index.js'),
        k = n.n(O),
        _ = n('../../node_modules/prop-types/index.js'),
        E = n.n(_),
        C = n('../../node_modules/lodash/get.js'),
        P = n.n(C),
        S = n('../../node_modules/react-router/esm/react-router.js'),
        I = n('../../node_modules/redux/es/redux.js'),
        T = n('./src/utils/index.js'),
        D = n('../../node_modules/react-redux/es/index.js'),
        R = n('./src/modules/community/community.actions.js'),
        N = n('./src/modules/styled/uni.js'),
        A = n('./src/styles/index.js'),
        U = n('../../node_modules/react-select/dist/react-select.browser.esm.js');
      function L(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function(t) {
                x()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function B(e) {
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
            r = j()(e);
          if (t) {
            var a = j()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return g()(this, n);
        };
      }
      var G = (function(e) {
        h()(n, e);
        var t = B(n);
        function n() {
          var e;
          l()(this, n);
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
            a[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(a))),
            x()(m()(e), 'state', { inputValue: '' }),
            x()(m()(e), 'handleChange', function(t) {
              e.props.input.onChange(t.value);
            }),
            e
          );
        }
        return (
          d()(n, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.label,
                  n = e.error,
                  r = e.options,
                  a = e.input,
                  o = { value: a.value, label: a.value },
                  i = r.map(function(e) {
                    return { label: e, value: e };
                  });
                return k.a.createElement(
                  N.E,
                  { mt: 2, zIndex: 0 },
                  t ? k.a.createElement(N.v, { c: A.b.black, mb: 1 }, t) : null,
                  k.a.createElement(U.default, {
                    styles: {
                      menu: function(e) {
                        return V(
                          V({}, e),
                          {},
                          { position: 'relative', top: 0, zIndex: 10 }
                        );
                      }
                    },
                    defaultValue: o,
                    onChange: this.handleChange,
                    options: i
                  }),
                  n ? k.a.createElement(N.x, { c: A.b.red, mt: 1 }, n) : null
                );
              }
            }
          ]),
          n
        );
      })(O.Component);
      x()(G, 'propTypes', {
        input: E.a.object,
        options: E.a.array,
        label: E.a.oneOfType([E.a.string, E.a.node]),
        error: E.a.string
      });
      var z = n('../../node_modules/@babel/runtime/helpers/toConsumableArray.js'),
        F = n.n(z),
        q = n(
          '../../node_modules/react-select/creatable/dist/react-select.browser.esm.js'
        );
      function M(e) {
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
            r = j()(e);
          if (t) {
            var a = j()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return g()(this, n);
        };
      }
      var K = { DropdownIndicator: null },
        H = function(e) {
          return { label: e, value: e };
        },
        W = (function(e) {
          h()(n, e);
          var t = M(n);
          function n() {
            var e;
            l()(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              (e = t.call.apply(t, [this].concat(a))),
              x()(m()(e), 'state', {
                inputValue: '',
                value: e.props.input.value
                  ? e.props.input.value.map(function(e) {
                      return { value: e, label: e };
                    })
                  : []
              }),
              x()(m()(e), 'handleChange', function(t) {
                e.setState({ value: t });
              }),
              x()(m()(e), 'handleInputChange', function(t) {
                e.setState({ inputValue: t });
              }),
              x()(m()(e), 'handleKeyDown', function(t) {
                var n = e.state,
                  r = n.inputValue,
                  a = n.value;
                if (r)
                  switch (t.key) {
                    case 'Enter':
                    case 'Tab':
                      e.setState({ inputValue: '', value: [].concat(F()(a), [H(r)]) }),
                        t.preventDefault();
                  }
              }),
              e
            );
          }
          return (
            d()(n, [
              {
                key: 'componentDidUpdate',
                value: function() {
                  var e = this.state.value.map(function(e) {
                    return e.label;
                  });
                  this.props.input.onChange(e);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.placeholder,
                    n = e.label,
                    r = e.error,
                    a = e.input,
                    o = this.state.inputValue,
                    i = a.value
                      ? a.value.map(function(e) {
                          return { label: e, value: e };
                        })
                      : [];
                  return k.a.createElement(
                    N.E,
                    { key: 'tags-input', mt: 2 },
                    n ? k.a.createElement(N.v, { c: A.b.black, mb: 1 }, n) : null,
                    k.a.createElement(q.a, {
                      key: 'tags-input-select',
                      components: K,
                      inputValue: o,
                      isClearable: !0,
                      isMulti: !0,
                      menuIsOpen: !1,
                      onChange: this.handleChange,
                      onInputChange: this.handleInputChange,
                      onKeyDown: this.handleKeyDown,
                      placeholder: t,
                      value: i
                    }),
                    r ? k.a.createElement(N.x, { c: A.b.red, mt: 1 }, r) : null
                  );
                }
              }
            ]),
            n
          );
        })(O.Component);
      x()(W, 'propTypes', {
        input: E.a.object,
        placeholder: E.a.string,
        label: E.a.string,
        error: E.a.string
      });
      var Z = n('../../node_modules/react-select/async/dist/react-select.browser.esm.js'),
        Q = n('./src/modules/user/user.actions.js');
      function J(e, t) {
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
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(n), !0).forEach(function(t) {
                x()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function X(e) {
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
            r = j()(e);
          if (t) {
            var a = j()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return g()(this, n);
        };
      }
      var Y = (function(e) {
        h()(n, e);
        var t = X(n);
        function n() {
          var e;
          l()(this, n);
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
            a[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(a))),
            x()(m()(e), 'state', { inputValue: '' }),
            x()(m()(e), 'handleInputChange', function(t) {
              var n = t.replace(/\W/g, '');
              return e.setState({ inputValue: n }), n;
            }),
            x()(
              m()(e),
              'loadOptions',
              (function() {
                var t = u()(
                  i.a.mark(function t(n) {
                    var r;
                    return i.a.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (n.length) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt('return', null);
                          case 2:
                            return (t.next = 4), e.props.actions.searchUser(n);
                          case 4:
                            return (
                              (r = t.sent),
                              t.abrupt(
                                'return',
                                r.map(function(e) {
                                  return { label: e.handle, value: e.handle };
                                })
                              )
                            );
                          case 6:
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
            x()(m()(e), 'handleChange', function(t) {
              var n = t.map(function(e) {
                return e.value;
              });
              e.props.input.onChange(n);
            }),
            e
          );
        }
        return (
          d()(n, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.label,
                  n = e.error,
                  r = e.input,
                  a = P()(r, 'value', []).map(function(e) {
                    return { label: e, value: e };
                  });
                return k.a.createElement(
                  N.E,
                  { mt: 2, zIndex: 0 },
                  t ? k.a.createElement(N.v, { c: A.b.black, mb: 1 }, t) : null,
                  k.a.createElement(Z.a, {
                    styles: {
                      menu: function(e) {
                        return $($({}, e), {}, { position: 'relative', top: 0 });
                      }
                    },
                    isMulti: !0,
                    cacheOptions: !0,
                    defaultOptions: !0,
                    value: a,
                    loadOptions: this.loadOptions,
                    onChange: this.handleChange
                  }),
                  n ? k.a.createElement(N.x, { c: A.b.red, mt: 1 }, n) : null
                );
              }
            }
          ]),
          n
        );
      })(O.Component);
      x()(Y, 'propTypes', {
        input: E.a.object,
        label: E.a.oneOfType([E.a.string, E.a.node]),
        error: E.a.string,
        actions: E.a.object
      });
      var ee = Object(D.c)(
          function(e) {
            return { userSearch: e.user.search };
          },
          function(e) {
            return {
              actions: Object(I.bindActionCreators)({ searchUser: Q.searchUser }, e)
            };
          }
        )(Y),
        te = n('./src/modules/styled/form/reduxformimageupload.component.js'),
        ne = n('./src/modules/styled/form/reduxformfield.component.js'),
        re = n('./src/modules/styled/web.js'),
        ae = function(e) {
          var t = e.label,
            n = e.input,
            r = e.type,
            o = e.meta,
            i = e.name,
            c = e.placeholder,
            u = e.autocomplete,
            s = o.dirty,
            l = o.touched,
            f = o.error,
            d = o.warning;
          return k.a.createElement(
            re.r,
            { fdirection: 'column', mt: 3 },
            k.a.createElement(
              re.r,
              { fdirection: 'row' },
              k.a.createElement(
                re.h,
                a()({}, n, {
                  placeholder: c || t,
                  autoComplete: u,
                  name: i,
                  type: r,
                  mr: 1
                })
              ),
              ' ',
              t
                ? k.a.createElement(
                    'label',
                    { 'html-for': i },
                    k.a.createElement(re.i, { c: A.b.black }, t)
                  )
                : null,
              (s || l) &&
                ((f && k.a.createElement(re.k, { c: A.b.red, mt: 1 }, f)) ||
                  (d && k.a.createElement(re.k, { c: A.b.red }, d)))
            )
          );
        };
      (ae.propTypes = {
        error: E.a.string,
        type: E.a.string,
        name: E.a.string,
        label: E.a.string,
        placeholder: E.a.string,
        meta: E.a.object,
        input: E.a.object,
        autocomplete: E.a.string
      }),
        (ae.defaultProps = { autocomplete: null });
      var oe = ae,
        ie = n('../../node_modules/redux-form/es/Field.js'),
        ce = n('../../node_modules/redux-form/es/reduxForm.js'),
        ue = n('./src/modules/form/validators.js');
      function se(e, t) {
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
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? se(Object(n), !0).forEach(function(t) {
                x()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : se(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function fe(e) {
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
            r = j()(e);
          if (t) {
            var a = j()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return g()(this, n);
        };
      }
      var de = (function(e) {
        h()(n, e);
        var t = fe(n);
        function n() {
          var e;
          l()(this, n);
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
            a[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(a))),
            x()(
              m()(e),
              'deleteCommunity',
              (function() {
                var t = u()(
                  i.a.mark(function t(n) {
                    var r, a, o;
                    return i.a.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (n.preventDefault(),
                              (r = e.props),
                              (a = r.initialValues),
                              (o = r.close),
                              !window.confirm(
                                'Are you sure you want to delete this community: '.concat(
                                  a.name,
                                  '?'
                                )
                              ))
                            ) {
                              t.next = 7;
                              break;
                            }
                            return (t.next = 5), e.props.actions.deleteCommunity(a);
                          case 5:
                            t.sent && o && o();
                          case 7:
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
            x()(
              m()(e),
              'submit',
              (function() {
                var t = u()(
                  i.a.mark(function t(n) {
                    var r, a, o;
                    return i.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((r = e.props.history),
                                (t.prev = 1),
                                !(
                                  (a = le({}, n)).image &&
                                  a.image.preview &&
                                  a.image.fileName
                                ))
                              ) {
                                t.next = 8;
                                break;
                              }
                              return (
                                (t.next = 6),
                                T.e.toS3Advanced(a.image.preview, a.image.fileName)
                              );
                            case 6:
                              (o = t.sent), (a.image = o.url);
                            case 8:
                              if (!e.props.isUpdate) {
                                t.next = 13;
                                break;
                              }
                              e.props.actions.updateCommunity(a), (t.next = 16);
                              break;
                            case 13:
                              return (t.next = 15), e.props.actions.createCommunity(a);
                            case 15:
                              r.push('/'.concat(a.slug, '/new'));
                            case 16:
                              t.next = 20;
                              break;
                            case 18:
                              (t.prev = 18), (t.t0 = t.catch(1));
                            case 20:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 18]]
                    );
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
          d()(n, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.handleSubmit,
                  n = e.initialValues,
                  r = { p: 2, w: 9, h: 9, bg: A.b.blue, bradius: '50%' },
                  o = n.customParams
                    ? [
                        {
                          name: 'customParams.auth.points',
                          label: 'REQUIRED FOR POSTING: Added Points of Interest',
                          component: ne.a,
                          type: 'number'
                        },
                        {
                          name: 'customParams.auth.tokens',
                          label: 'REQUIRED FOR POSTING: FOAM token balance',
                          component: ne.a,
                          type: 'number'
                        }
                      ]
                    : [],
                  i = [
                    {
                      name: 'image',
                      component: te.a,
                      placeholder: '/img/blueR.png',
                      imageComponent: k.a.createElement(
                        N.s,
                        a()({ mt: 1, bg: A.b.blue }, r)
                      ),
                      type: 'file-upload',
                      label: 'Community Image',
                      validate: []
                    },
                    {
                      name: 'name',
                      label: 'Name',
                      component: ne.a,
                      type: 'text',
                      validate: [ue.f]
                    },
                    {
                      name: 'slug',
                      label: k.a.createElement(
                        re.r,
                        { fdirection: 'column' },
                        k.a.createElement(
                          N.v,
                          { c: A.b.black },
                          'Slug (cannot be changed in the future)'
                        ),
                        k.a.createElement(
                          N.x,
                          null,
                          'Determines the url of the community, ex: relevant.community/',
                          '<slug>'
                        )
                      ),
                      placeholder: 'slug',
                      component: ne.a,
                      type: 'text',
                      validate: [ue.f]
                    },
                    {
                      name: 'description',
                      component: ne.a,
                      type: 'text',
                      label: 'Description',
                      validate: [ue.f]
                    },
                    {
                      name: 'topics',
                      component: W,
                      type: 'text',
                      label: 'Tags',
                      validate: []
                    },
                    { name: 'sectionTitle', text: 'Admins & Moderators' },
                    {
                      name: 'superAdmins',
                      component: ee,
                      type: 'text',
                      label: k.a.createElement(
                        re.r,
                        { fdirection: 'column' },
                        k.a.createElement(N.v, { c: A.b.black }, 'Admins'),
                        k.a.createElement(
                          N.x,
                          null,
                          'Users with admin priveleges (ability to edit community parameters and add or remove moderators)'
                        )
                      ),
                      validate: []
                    },
                    {
                      name: 'admins',
                      component: ee,
                      type: 'text',
                      label: k.a.createElement(
                        re.r,
                        { fdirection: 'column' },
                        k.a.createElement(N.v, { c: A.b.black }, 'Moderators'),
                        k.a.createElement(
                          N.x,
                          null,
                          "Users that will have high reputation by default (but not necessarily admin priveleges)',"
                        )
                      ),
                      validate: []
                    },
                    { name: 'sectionTitle', text: 'Community Settings' },
                    {
                      name: 'defaultPost',
                      label: 'Default Post Type',
                      component: G,
                      options: ['link', 'text']
                    }
                  ].concat(o, [
                    {
                      name: 'betEnabled',
                      label: 'Enable Betting',
                      component: oe,
                      type: 'checkbox'
                    },
                    {
                      name: 'hidden',
                      label:
                        'Unlisted (anyone with link can still see and join the community)',
                      component: oe,
                      type: 'checkbox'
                    }
                  ]);
                return k.a.createElement(
                  re.r,
                  { display: 'flex', fdirection: 'column', m: '0 4', mb: 16 },
                  k.a.createElement(
                    re.d,
                    {
                      onSubmit: t(this.submit),
                      fdirection: 'column',
                      key: 'community-admin-form'
                    },
                    i.map(function(e, t) {
                      return 'sectionTitle' === e.name
                        ? k.a.createElement(
                            O.Fragment,
                            { key: e.text + t },
                            k.a.createElement(re.p, { mt: 4 }, e.text)
                          )
                        : k.a.createElement(ie.a, a()({}, e, { key: t }));
                    }),
                    k.a.createElement(
                      re.r,
                      { justify: 'flex-end', mt: 3, fdirection: 'row' },
                      n._id
                        ? k.a.createElement(
                            re.b,
                            {
                              ml: 2,
                              c: A.b.white,
                              bg: A.b.red,
                              onClick: this.deleteCommunity
                            },
                            'Delete'
                          )
                        : null,
                      k.a.createElement(
                        re.b,
                        { ml: 2, c: A.b.white, type: 'submit' },
                        'Submit'
                      )
                    )
                  )
                );
              }
            }
          ]),
          n
        );
      })(O.Component);
      x()(de, 'propTypes', {
        actions: E.a.object,
        handleSubmit: E.a.func,
        isUpdate: E.a.bool,
        initialValues: E.a.object,
        close: E.a.func,
        history: E.a.object
      });
      t.default = Object(S.g)(
        Object(D.c)(
          function(e, t) {
            var n = t.close,
              r = t.history,
              a = P()(t, 'match.params.slug') || e.auth.community;
            '/admin/community/new' === P()(t, 'match.path') && (a = null),
              '/communities/new' === P()(t, 'match.path') && (a = null);
            var o = P()(e.community, 'communities.'.concat(a), {}),
              i = !!Object.keys(o).length,
              c = P()(o, 'admins', []).map(function(e) {
                return e.embeddedUser.handle;
              }),
              u = P()(o, 'superAdmins', []).map(function(e) {
                return e.embeddedUser.handle;
              }),
              s = le(le({}, o), {}, { admins: c, superAdmins: u });
            return {
              routing: e.routing,
              community: e.community,
              isUpdate: i,
              initialValues: s,
              enableReinitialize: !0,
              close: n,
              history: r
            };
          },
          function(e) {
            return {
              actions: Object(I.bindActionCreators)(
                {
                  updateCommunity: R.updateCommunity,
                  createCommunity: R.createCommunity,
                  deleteCommunity: R.deleteCommunity
                },
                e
              )
            };
          }
        )(Object(ce.a)({ form: 'communityAdmin' })(de))
      );
    },
    './src/modules/form/validators.js': function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return s;
      }),
        n.d(t, 'd', function() {
          return l;
        }),
        n.d(t, 'h', function() {
          return f;
        }),
        n.d(t, 'a', function() {
          return d;
        }),
        n.d(t, 'b', function() {
          return p;
        }),
        n.d(t, 'g', function() {
          return m;
        }),
        n.d(t, 'e', function() {
          return b;
        }),
        n.d(t, 'c', function() {
          return h;
        });
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = n.n(o),
        c = n('./src/utils/text.js'),
        u = n('./src/modules/auth/auth.actions.js'),
        s = function(e) {
          return e || 'number' == typeof e ? void 0 : 'Required';
        },
        l = function(e) {
          if (e && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(e))
            return 'Not a valid e-mail';
        },
        f = function(e) {
          if (!c.NAME_PATTERN.test(e))
            return 'Can only contain letters, \nnumbers, dashes and underscores';
        },
        d = (function() {
          var e = i()(
            a.a.mark(function e(t) {
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(u.checkUser)(t, 'email', !0)();
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
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        p = (function() {
          var e = i()(
            a.a.mark(function e(t) {
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 3), Object(u.checkUser)(t, 'name', !0)();
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
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        m = (function() {
          var e = i()(
            a.a.mark(function e(t) {
              var n, r, o, i;
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((n = {}), !t.username)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 4), p(t.username);
                    case 4:
                      (r = e.sent) && (n.username = r);
                    case 6:
                      if (!t.email) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 9), d(t.email);
                    case 9:
                      (o = e.sent) && (n.email = o);
                    case 11:
                      if (!t.handle) {
                        e.next = 16;
                        break;
                      }
                      return (e.next = 14), p(t.handle);
                    case 14:
                      (i = e.sent) && (n.handle = i);
                    case 16:
                      if (!Object.keys(n).length) {
                        e.next = 18;
                        break;
                      }
                      throw n;
                    case 18:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        b = function(e) {
          var t = {};
          return e.password && e.confirmPassword
            ? (e.password !== e.confirmPassword &&
                (t.confirmPassword = 'Passwords must match'),
              t)
            : null;
        },
        h = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function(e) {
            return t.reduce(function(t, n) {
              return t || n(e);
            }, void 0);
          };
        };
    },
    './src/modules/styled/form/reduxformfield.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = n.n(r),
        o = n('../../node_modules/react/index.js'),
        i = n.n(o),
        c = n('../../node_modules/prop-types/index.js'),
        u = n.n(c),
        s = n('./src/modules/styled/web.js'),
        l = n('./src/styles/index.js'),
        f = function(e) {
          var t = e.label,
            n = e.input,
            r = e.type,
            o = e.meta,
            c = e.name,
            u = e.placeholder,
            f = e.autocomplete,
            d = o.dirty,
            p = o.touched,
            m = o.error,
            b = o.warning;
          return i.a.createElement(
            s.r,
            { display: 'flex', fdirection: 'column', mt: 3 },
            t
              ? i.a.createElement(
                  'label',
                  { 'html-for': c },
                  i.a.createElement(s.i, { c: l.b.black }, t)
                )
              : null,
            i.a.createElement(
              s.g,
              a()({}, n, {
                placeholder: u || t,
                autoComplete: f,
                name: c,
                type: r,
                border: 1,
                p: '2 2',
                mt: 1
              })
            ),
            (d || p) &&
              ((m && i.a.createElement(s.k, { c: l.b.red, mt: 1 }, m)) ||
                (b && i.a.createElement(s.k, { c: l.b.red }, b)))
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
        (t.a = f);
    },
    './src/modules/styled/form/reduxformimageupload.component.js': function(e, t, n) {
      'use strict';
      var r = n('../../node_modules/react/index.js'),
        a = n.n(r),
        o = n('../../node_modules/prop-types/index.js'),
        i = n.n(o),
        c = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        u = n.n(c),
        s = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        l = n.n(s),
        f = n('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        d = n.n(f),
        p = n('../../node_modules/@babel/runtime/helpers/createClass.js'),
        m = n.n(p),
        b = n('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        h = n.n(b),
        y = n('../../node_modules/@babel/runtime/helpers/inherits.js'),
        g = n.n(y),
        v = n('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        j = n.n(v),
        w = n('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        x = n.n(w),
        O = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        k = n.n(O),
        _ = n('./src/utils/index.js'),
        E = n('./src/modules/styled/uni.js');
      function C(e) {
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
            r = x()(e);
          if (t) {
            var a = x()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return j()(this, n);
        };
      }
      var P = _.a.Alert(),
        S = (function(e) {
          g()(r, e);
          var t,
            n = C(r);
          function r() {
            var e;
            d()(this, r);
            for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
              a[o] = arguments[o];
            return (
              (e = n.call.apply(n, [this].concat(a))),
              k()(h()(e), 'state', { preview: null, fileName: null }),
              e
            );
          }
          return (
            m()(r, [
              {
                key: 'processImage',
                value: function() {
                  var e = this,
                    t = this.fileInput.files[0];
                  _.c
                    .loadImage(t)
                    .then(function(n) {
                      var r = n
                          .split(',')[0]
                          .split('/')[1]
                          .split(';')[0],
                        a = t.name.substr(0, r.lastIndexOf('.')) + '.' + r;
                      e.setState({ preview: n, fileName: a }),
                        e.props.onChange({ preview: n, fileName: a });
                    })
                    .catch(function(e) {
                      P.alert('Error uploading image ' + e);
                    });
                }
              },
              {
                key: 'uploadImage',
                value:
                  ((t = l()(
                    u.a.mark(function e() {
                      var t;
                      return u.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.state.fileName && this.state.preview) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  P('Please select an image'), e.abrupt('return', null)
                                );
                              case 3:
                                return (
                                  (e.next = 5),
                                  _.e.toS3Advanced(
                                    this.state.preview,
                                    this.state.fileName
                                  )
                                );
                              case 5:
                                return (
                                  (t = e.sent),
                                  this.setState({ preview: null, fileName: null }),
                                  this.props.onChange(t),
                                  e.abrupt('return', t)
                                );
                              case 9:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function() {
                    return t.apply(this, arguments);
                  })
              },
              {
                key: 'renderPreview',
                value: function() {
                  var e = this.props,
                    t = e.placeholder,
                    n = e.imageComponent,
                    r = this.state.preview;
                  return !r && t
                    ? a.a.cloneElement(n, { source: { uri: t } })
                    : r && n
                    ? a.a.cloneElement(n, { source: { uri: r } })
                    : r
                    ? a.a.createElement('img', { src: r, style: { maxWidth: '300px' } })
                    : null;
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.renderPreview();
                  return a.a.createElement(
                    E.E,
                    { display: 'flex', fdirection: 'row', align: 'center' },
                    a.a.createElement(E.E, { mr: 2 }, t),
                    a.a.createElement('input', {
                      ref: function(t) {
                        return (e.fileInput = t);
                      },
                      onChange: this.processImage.bind(this),
                      accept: 'image/*',
                      name: 'img',
                      type: 'file'
                    })
                  );
                }
              }
            ]),
            r
          );
        })(r.Component);
      k()(S, 'propTypes', {
        placeholder: i.a.string,
        imageComponent: i.a.node,
        onChange: i.a.func
      });
      var I = n('./src/modules/styled/web.js'),
        T = n('./src/styles/index.js'),
        D = function(e) {
          var t = e.label,
            n = e.meta,
            r = e.name,
            o = e.placeholder,
            i = e.imageComponent,
            c = e.input,
            u = c.onChange,
            s = c.value,
            l = n.touched,
            f = n.error,
            d = n.warning;
          return a.a.createElement(
            I.r,
            { display: 'flex', fdirection: 'column', mt: 3 },
            t
              ? a.a.createElement(
                  'label',
                  { 'html-for': r },
                  a.a.createElement(I.i, { c: T.b.black }, t)
                )
              : null,
            a.a.createElement(S, {
              placeholder: s || o,
              imageComponent: i,
              onChange: function(e) {
                u(e);
              }
            }),
            l &&
              ((f && a.a.createElement(I.k, { c: T.b.red, mt: 1 }, f)) ||
                (d && a.a.createElement(I.k, { c: T.b.red }, d)))
          );
        };
      D.propTypes = {
        name: i.a.string,
        label: i.a.string,
        meta: i.a.object,
        input: i.a.object,
        placeholder: i.a.node,
        imageComponent: i.a.node
      };
      t.a = D;
    },
    './src/modules/styled/web.js': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return u;
      }),
        n.d(t, 'r', function() {
          return s;
        }),
        n.d(t, 'o', function() {
          return l;
        }),
        n.d(t, 'f', function() {
          return f;
        }),
        n.d(t, 'e', function() {
          return d;
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
          return y;
        }),
        n.d(t, 'b', function() {
          return g;
        }),
        n.d(t, 'j', function() {
          return v;
        }),
        n.d(t, 'h', function() {
          return j;
        }),
        n.d(t, 'g', function() {
          return w;
        }),
        n.d(t, 'n', function() {
          return x;
        }),
        n.d(t, 'm', function() {
          return O;
        }),
        n.d(t, 'd', function() {
          return k;
        }),
        n.d(t, 'q', function() {
          return _;
        });
      var r = n('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        a = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        o = n('./src/styles/index.js'),
        i = n(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        c = n(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        u = Object(a.default)(r.b).withConfig({
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
        s = a.default.div.withConfig({
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
        f = a.default.span.withConfig({
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
        d = a.default.img.withConfig({
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
        p =
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
        m =
          (Object(a.default)(l).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], o.c.header, o.f.color),
          Object(a.default)(l).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], o.c.title, o.f.color, o.f.font)),
        b = Object(a.default)(l).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], o.c.link, o.f.color, o.f.font),
        h = Object(a.default)(l).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], o.c.secondaryText, o.f.font, o.f.color),
        y =
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
        g = a.default.button.withConfig({
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
        v = Object(a.default)(l).withConfig({
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
        j = a.default.input.withConfig({
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
        x = Object(a.default)(c.a).withConfig({
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
        O = Object(a.default)(i.a).withConfig({
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
        _ = a.default.video.withConfig({
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
    },
    './src/modules/user/user.actions.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'updateLocalUser', function() {
          return b;
        }),
        n.d(t, 'getUsersLoading', function() {
          return h;
        }),
        n.d(t, 'getUserLoading', function() {
          return y;
        }),
        n.d(t, 'setUserList', function() {
          return g;
        }),
        n.d(t, 'clearUserList', function() {
          return v;
        }),
        n.d(t, 'clearSelectedUser', function() {
          return j;
        }),
        n.d(t, 'setSelectedUserData', function() {
          return w;
        }),
        n.d(t, 'setUserSearch', function() {
          return x;
        }),
        n.d(t, 'searchUser', function() {
          return O;
        }),
        n.d(t, 'getSelectedUser', function() {
          return k;
        }),
        n.d(t, 'updateBlock', function() {
          return _;
        }),
        n.d(t, 'getBlocked', function() {
          return E;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = n.n(r),
        o = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        i = n.n(o),
        c = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = n.n(c),
        s = n('./src/utils/index.js'),
        l = n('./src/modules/ui/error.actions.js'),
        f = n('./src/core/actionTypes.js');
      function d(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function(t) {
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var m = s.a.Alert();
      function b(e) {
        return { type: f.Mb, payload: e };
      }
      function h() {
        return { type: 'GET_USER_LIST' };
      }
      function y() {
        return { type: 'GET_USER_LOADING' };
      }
      function g(e, t, n) {
        return { type: 'SET_USER_LIST', payload: { users: e, index: t, topic: n } };
      }
      function v() {
        return { type: 'CLEAR_USER_LIST' };
      }
      function j() {
        return { type: 'CLEAR_SELECTED_USER' };
      }
      function w(e) {
        return { type: f.jb, payload: e };
      }
      function x(e) {
        return { type: 'SET_USER_SEARCH', payload: e };
      }
      function O(e) {
        return (function() {
          var t = u()(
            i.a.mark(function t(n) {
              var r;
              return i.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          n(
                            s.b.request({
                              method: 'GET',
                              endpoint: 'user',
                              path: '/search',
                              query: { limit: 50, search: e }
                            })
                          )
                        );
                      case 3:
                        return (r = t.sent), n(x(r)), t.abrupt('return', r);
                      case 8:
                        return (
                          (t.prev = 8),
                          (t.t0 = t.catch(0)),
                          n(l.a('activity', !0, t.t0.message)),
                          t.abrupt('return', !1)
                        );
                      case 12:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 8]]
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function k(e) {
        return (function() {
          var t = u()(
            i.a.mark(function t(n) {
              var r;
              return i.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          n({ type: 'GET_USER_LOADING' }),
                          (t.next = 4),
                          n(
                            s.b.request({
                              method: 'GET',
                              endpoint: 'user',
                              path: '/user/' + e
                            })
                          )
                        );
                      case 4:
                        return (
                          (r = t.sent),
                          n(w(r)),
                          n(l.a('profile', !1)),
                          t.abrupt('return', !0)
                        );
                      case 10:
                        return (
                          (t.prev = 10),
                          (t.t0 = t.catch(0)),
                          n(l.a('profile', !0, t.t0.message)),
                          t.abrupt('return', !1)
                        );
                      case 14:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 10]]
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function _(e, t) {
        var n = 'http://localhost:3000/api/user/block';
        return (
          t && (n = 'http://localhost:3000/api/user/unblock'),
          (function() {
            var r = u()(
              i.a.mark(function r(a) {
                return i.a.wrap(function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.t0 = fetch),
                          (r.t1 = n),
                          (r.t2 = p),
                          (r.t3 = { method: 'PUT', body: JSON.stringify({ block: e }) }),
                          (r.next = 6),
                          s.b.reqOptions()
                        );
                      case 6:
                        return (
                          (r.t4 = r.sent),
                          (r.t5 = (0, r.t2)(r.t3, r.t4)),
                          r.abrupt(
                            'return',
                            (0, r.t0)(r.t1, r.t5)
                              .then(s.b.handleErrors)
                              .then(function(e) {
                                return e.json();
                              })
                              .then(function(n) {
                                var r = 'blocked';
                                t && (r = 'unblocked'),
                                  m.alert('user ' + e + ' has been ' + r),
                                  a(b(n));
                              })
                              .catch(null)
                          )
                        );
                      case 9:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            );
            return function(e) {
              return r.apply(this, arguments);
            };
          })()
        );
      }
      function E() {
        return (function() {
          var e = u()(
            i.a.mark(function e(t) {
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = fetch),
                        (e.t1 = 'http://localhost:3000/api/user/blocked'),
                        (e.t2 = p),
                        (e.t3 = { method: 'GET' }),
                        (e.next = 6),
                        s.b.reqOptions()
                      );
                    case 6:
                      return (
                        (e.t4 = e.sent),
                        (e.t5 = (0, e.t2)(e.t3, e.t4)),
                        e.abrupt(
                          'return',
                          (0, e.t0)(e.t1, e.t5)
                            .then(s.b.handleErrors)
                            .then(function(e) {
                              return e.json();
                            })
                            .then(function(e) {
                              t(b(e));
                            })
                            .catch(null)
                        )
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
    }
  }
]);
//# sourceMappingURL=admin-web-communityAdminForm-component.bundle.js.map
