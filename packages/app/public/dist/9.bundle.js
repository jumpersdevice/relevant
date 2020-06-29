(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [9],
  {
    './src/modules/admin/web/communityAdminForm.component.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = t.n(r),
        o = t('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = t.n(o),
        u = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        l = t.n(u),
        c = t('../../node_modules/react/index.js'),
        s = t.n(c),
        d = t('../../node_modules/prop-types/index.js'),
        m = t.n(d),
        p = t('../../node_modules/lodash/get.js'),
        f = t.n(p),
        b = t('../../node_modules/react-router/esm/react-router.js'),
        h = t('../../node_modules/redux/es/redux.js'),
        y = t('./src/utils/index.js'),
        g = t('../../node_modules/react-redux/es/index.js'),
        v = t('./src/modules/community/community.actions.js'),
        j = t('./src/modules/styled/uni.js'),
        O = t('./src/styles/index.js'),
        E = t('../../node_modules/react-select/dist/react-select.browser.esm.js');
      function w(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function x(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? w(Object(t), !0).forEach(function(n) {
                l()(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      class C extends c.Component {
        constructor() {
          super(...arguments),
            l()(this, 'state', { inputValue: '' }),
            l()(this, 'handleChange', e => {
              this.props.input.onChange(e.value);
            });
        }
        render() {
          var { label: e, error: n, options: t, input: r } = this.props,
            a = { value: r.value, label: r.value },
            o = t.map(e => ({ label: e, value: e }));
          return s.a.createElement(
            j.E,
            { mt: 2, zIndex: 0 },
            e ? s.a.createElement(j.v, { c: O.b.black, mb: 1 }, e) : null,
            s.a.createElement(E.default, {
              styles: {
                menu: e => x(x({}, e), {}, { position: 'relative', top: 0, zIndex: 10 })
              },
              defaultValue: a,
              onChange: this.handleChange,
              options: o
            }),
            n ? s.a.createElement(j.x, { c: O.b.red, mt: 1 }, n) : null
          );
        }
      }
      l()(C, 'propTypes', {
        input: m.a.object,
        options: m.a.array,
        label: m.a.oneOfType([m.a.string, m.a.node]),
        error: m.a.string
      });
      var k = t(
          '../../node_modules/react-select/creatable/dist/react-select.browser.esm.js'
        ),
        _ = { DropdownIndicator: null };
      class P extends c.Component {
        constructor() {
          super(...arguments),
            l()(this, 'state', {
              inputValue: '',
              value: this.props.input.value
                ? this.props.input.value.map(e => ({ value: e, label: e }))
                : []
            }),
            l()(this, 'handleChange', e => {
              this.setState({ value: e });
            }),
            l()(this, 'handleInputChange', e => {
              this.setState({ inputValue: e });
            }),
            l()(this, 'handleKeyDown', e => {
              var n,
                { inputValue: t, value: r } = this.state;
              if (t)
                switch (e.key) {
                  case 'Enter':
                  case 'Tab':
                    this.setState({
                      inputValue: '',
                      value: [...r, ((n = t), { label: n, value: n })]
                    }),
                      e.preventDefault();
                }
            });
        }
        componentDidUpdate() {
          var e = this.state.value.map(e => e.label);
          this.props.input.onChange(e);
        }
        render() {
          var { placeholder: e, label: n, error: t, input: r } = this.props,
            { inputValue: a } = this.state,
            o = r.value ? r.value.map(e => ({ label: e, value: e })) : [];
          return s.a.createElement(
            j.E,
            { key: 'tags-input', mt: 2 },
            n ? s.a.createElement(j.v, { c: O.b.black, mb: 1 }, n) : null,
            s.a.createElement(k.a, {
              key: 'tags-input-select',
              components: _,
              inputValue: a,
              isClearable: !0,
              isMulti: !0,
              menuIsOpen: !1,
              onChange: this.handleChange,
              onInputChange: this.handleInputChange,
              onKeyDown: this.handleKeyDown,
              placeholder: e,
              value: o
            }),
            t ? s.a.createElement(j.x, { c: O.b.red, mt: 1 }, t) : null
          );
        }
      }
      l()(P, 'propTypes', {
        input: m.a.object,
        placeholder: m.a.string,
        label: m.a.string,
        error: m.a.string
      });
      var S = t('../../node_modules/react-select/async/dist/react-select.browser.esm.js'),
        T = t('./src/modules/user/user.actions.js');
      function D(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function U(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? D(Object(t), !0).forEach(function(n) {
                l()(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      class A extends c.Component {
        constructor() {
          var e;
          super(...arguments),
            (e = this),
            l()(this, 'state', { inputValue: '' }),
            l()(this, 'handleInputChange', e => {
              var n = e.replace(/\W/g, '');
              return this.setState({ inputValue: n }), n;
            }),
            l()(
              this,
              'loadOptions',
              (function() {
                var n = i()(function*(n) {
                  return n.length
                    ? (yield e.props.actions.searchUser(n)).map(e => ({
                        label: e.handle,
                        value: e.handle
                      }))
                    : null;
                });
                return function(e) {
                  return n.apply(this, arguments);
                };
              })()
            ),
            l()(this, 'handleChange', e => {
              var n = e.map(e => e.value);
              this.props.input.onChange(n);
            });
        }
        render() {
          var { label: e, error: n, input: t } = this.props,
            r = f()(t, 'value', []).map(e => ({ label: e, value: e }));
          return s.a.createElement(
            j.E,
            { mt: 2, zIndex: 0 },
            e ? s.a.createElement(j.v, { c: O.b.black, mb: 1 }, e) : null,
            s.a.createElement(S.a, {
              styles: { menu: e => U(U({}, e), {}, { position: 'relative', top: 0 }) },
              isMulti: !0,
              cacheOptions: !0,
              defaultOptions: !0,
              value: r,
              loadOptions: this.loadOptions,
              onChange: this.handleChange
            }),
            n ? s.a.createElement(j.x, { c: O.b.red, mt: 1 }, n) : null
          );
        }
      }
      l()(A, 'propTypes', {
        input: m.a.object,
        label: m.a.oneOfType([m.a.string, m.a.node]),
        error: m.a.string,
        actions: m.a.object
      });
      var I = Object(g.c)(
          function(e) {
            return { userSearch: e.user.search };
          },
          function(e) {
            return {
              actions: Object(h.bindActionCreators)({ searchUser: T.searchUser }, e)
            };
          }
        )(A),
        R = t('./src/modules/styled/form/reduxformimageupload.component.js'),
        L = t('./src/modules/styled/form/reduxformfield.component.js'),
        N = t('./src/modules/styled/web.js'),
        V = e => {
          var {
              label: n,
              input: t,
              type: r,
              meta: o,
              name: i,
              placeholder: u,
              autocomplete: l
            } = e,
            { dirty: c, touched: d, error: m, warning: p } = o;
          return s.a.createElement(
            N.r,
            { fdirection: 'column', mt: 3 },
            s.a.createElement(
              N.r,
              { fdirection: 'row' },
              s.a.createElement(
                N.h,
                a()({}, t, {
                  placeholder: u || n,
                  autoComplete: l,
                  name: i,
                  type: r,
                  mr: 1
                })
              ),
              ' ',
              n
                ? s.a.createElement(
                    'label',
                    { 'html-for': i },
                    s.a.createElement(N.i, { c: O.b.black }, n)
                  )
                : null,
              (c || d) &&
                ((m && s.a.createElement(N.k, { c: O.b.red, mt: 1 }, m)) ||
                  (p && s.a.createElement(N.k, { c: O.b.red }, p)))
            )
          );
        };
      (V.propTypes = {
        error: m.a.string,
        type: m.a.string,
        name: m.a.string,
        label: m.a.string,
        placeholder: m.a.string,
        meta: m.a.object,
        input: m.a.object,
        autocomplete: m.a.string
      }),
        (V.defaultProps = { autocomplete: null });
      var G = V,
        B = t('../../node_modules/redux-form/es/Field.js'),
        z = t('../../node_modules/redux-form/es/reduxForm.js'),
        F = t('./src/modules/form/validators.js');
      function q(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function M(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? q(Object(t), !0).forEach(function(n) {
                l()(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      class K extends c.Component {
        constructor() {
          var e;
          super(...arguments),
            (e = this),
            l()(
              this,
              'deleteCommunity',
              (function() {
                var n = i()(function*(n) {
                  n.preventDefault();
                  var { initialValues: t, close: r } = e.props;
                  window.confirm(
                    'Are you sure you want to delete this community: '.concat(t.name, '?')
                  ) &&
                    (yield e.props.actions.deleteCommunity(t)) && r && r();
                });
                return function(e) {
                  return n.apply(this, arguments);
                };
              })()
            ),
            l()(
              this,
              'submit',
              (function() {
                var n = i()(function*(n) {
                  var { history: t } = e.props;
                  try {
                    var r = M({}, n);
                    if (r.image && r.image.preview && r.image.fileName) {
                      var a = yield y.e.toS3Advanced(r.image.preview, r.image.fileName);
                      r.image = a.url;
                    }
                    var { isUpdate: o } = e.props;
                    o
                      ? e.props.actions.updateCommunity(r)
                      : (yield e.props.actions.createCommunity(r),
                        t.push('/'.concat(r.slug, '/new')));
                  } catch (e) {}
                });
                return function(e) {
                  return n.apply(this, arguments);
                };
              })()
            );
        }
        render() {
          var { handleSubmit: e, initialValues: n } = this.props,
            t = { p: 2, w: 9, h: 9, bg: O.b.blue, bradius: '50%' },
            r = n.customParams
              ? [
                  {
                    name: 'customParams.auth.points',
                    label: 'REQUIRED FOR POSTING: Added Points of Interest',
                    component: L.a,
                    type: 'number'
                  },
                  {
                    name: 'customParams.auth.tokens',
                    label: 'REQUIRED FOR POSTING: FOAM token balance',
                    component: L.a,
                    type: 'number'
                  }
                ]
              : [],
            o = [
              {
                name: 'image',
                component: R.a,
                placeholder: '/img/blueR.png',
                imageComponent: s.a.createElement(j.s, a()({ mt: 1, bg: O.b.blue }, t)),
                type: 'file-upload',
                label: 'Community Image',
                validate: []
              },
              {
                name: 'name',
                label: 'Name',
                component: L.a,
                type: 'text',
                validate: [F.f]
              },
              {
                name: 'slug',
                label: s.a.createElement(
                  N.r,
                  { fdirection: 'column' },
                  s.a.createElement(
                    j.v,
                    { c: O.b.black },
                    'Slug (cannot be changed in the future)'
                  ),
                  s.a.createElement(
                    j.x,
                    null,
                    'Determines the url of the community, ex: relevant.community/',
                    '<slug>'
                  )
                ),
                placeholder: 'slug',
                component: L.a,
                type: 'text',
                validate: [F.f]
              },
              {
                name: 'description',
                component: L.a,
                type: 'text',
                label: 'Description',
                validate: [F.f]
              },
              { name: 'topics', component: P, type: 'text', label: 'Tags', validate: [] },
              { name: 'sectionTitle', text: 'Admins & Moderators' },
              {
                name: 'superAdmins',
                component: I,
                type: 'text',
                label: s.a.createElement(
                  N.r,
                  { fdirection: 'column' },
                  s.a.createElement(j.v, { c: O.b.black }, 'Admins'),
                  s.a.createElement(
                    j.x,
                    null,
                    'Users with admin priveleges (ability to edit community parameters and add or remove moderators)'
                  )
                ),
                validate: []
              },
              {
                name: 'admins',
                component: I,
                type: 'text',
                label: s.a.createElement(
                  N.r,
                  { fdirection: 'column' },
                  s.a.createElement(j.v, { c: O.b.black }, 'Moderators'),
                  s.a.createElement(
                    j.x,
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
                component: C,
                options: ['link', 'text']
              },
              ...r,
              {
                name: 'betEnabled',
                label: 'Enable Betting',
                component: G,
                type: 'checkbox'
              },
              {
                name: 'hidden',
                label: 'Unlisted (anyone with link can still see and join the community)',
                component: G,
                type: 'checkbox'
              }
            ];
          return s.a.createElement(
            N.r,
            { display: 'flex', fdirection: 'column', m: '0 4', mb: 16 },
            s.a.createElement(
              N.d,
              {
                onSubmit: e(this.submit),
                fdirection: 'column',
                key: 'community-admin-form'
              },
              o.map((e, n) =>
                'sectionTitle' === e.name
                  ? s.a.createElement(
                      c.Fragment,
                      { key: e.text + n },
                      s.a.createElement(N.p, { mt: 4 }, e.text)
                    )
                  : s.a.createElement(B.a, a()({}, e, { key: n }))
              ),
              s.a.createElement(
                N.r,
                { justify: 'flex-end', mt: 3, fdirection: 'row' },
                n._id
                  ? s.a.createElement(
                      N.b,
                      { ml: 2, c: O.b.white, bg: O.b.red, onClick: this.deleteCommunity },
                      'Delete'
                    )
                  : null,
                s.a.createElement(N.b, { ml: 2, c: O.b.white, type: 'submit' }, 'Submit')
              )
            )
          );
        }
      }
      l()(K, 'propTypes', {
        actions: m.a.object,
        handleSubmit: m.a.func,
        isUpdate: m.a.bool,
        initialValues: m.a.object,
        close: m.a.func,
        history: m.a.object
      });
      n.default = Object(b.f)(
        Object(g.c)(
          (e, n) => {
            var { close: t, history: r } = n,
              a = f()(n, 'match.params.slug') || e.auth.community;
            '/admin/community/new' === f()(n, 'match.path') && (a = null),
              '/communities/new' === f()(n, 'match.path') && (a = null);
            var o = f()(e.community, 'communities.'.concat(a), {}),
              i = !!Object.keys(o).length,
              u = f()(o, 'admins', []).map(e => e.embeddedUser.handle),
              l = f()(o, 'superAdmins', []).map(e => e.embeddedUser.handle),
              c = M(M({}, o), {}, { admins: u, superAdmins: l });
            return {
              routing: e.routing,
              community: e.community,
              isUpdate: i,
              initialValues: c,
              enableReinitialize: !0,
              close: t,
              history: r
            };
          },
          e => ({
            actions: Object(h.bindActionCreators)(
              {
                updateCommunity: v.updateCommunity,
                createCommunity: v.createCommunity,
                deleteCommunity: v.deleteCommunity
              },
              e
            )
          })
        )(Object(z.a)({ form: 'communityAdmin' })(K))
      );
    },
    './src/modules/form/validators.js': function(e, n, t) {
      'use strict';
      t.d(n, 'f', function() {
        return u;
      }),
        t.d(n, 'd', function() {
          return l;
        }),
        t.d(n, 'h', function() {
          return c;
        }),
        t.d(n, 'a', function() {
          return s;
        }),
        t.d(n, 'b', function() {
          return d;
        }),
        t.d(n, 'g', function() {
          return m;
        }),
        t.d(n, 'e', function() {
          return p;
        }),
        t.d(n, 'c', function() {
          return f;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = t.n(r),
        o = t('./src/utils/text.js'),
        i = t('./src/modules/auth/auth.actions.js'),
        u = e => (e || 'number' == typeof e ? void 0 : 'Required'),
        l = e => {
          if (e && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(e))
            return 'Not a valid e-mail';
        },
        c = e => {
          if (!o.NAME_PATTERN.test(e))
            return 'Can only contain letters, \nnumbers, dashes and underscores';
        },
        s = (function() {
          var e = a()(function*(e) {
            if (yield Object(i.checkUser)(e, 'email', !0)())
              return 'This email has already been used';
          });
          return function(n) {
            return e.apply(this, arguments);
          };
        })(),
        d = (function() {
          var e = a()(function*(e) {
            if (e && (yield Object(i.checkUser)(e, 'name', !0)()))
              return 'This username is already taken';
          });
          return function(n) {
            return e.apply(this, arguments);
          };
        })(),
        m = (function() {
          var e = a()(function*(e) {
            var n = {};
            if (e.username) {
              var t = yield d(e.username);
              t && (n.username = t);
            }
            if (e.email) {
              var r = yield s(e.email);
              r && (n.email = r);
            }
            if (e.handle) {
              var a = yield d(e.handle);
              a && (n.handle = a);
            }
            if (Object.keys(n).length) throw n;
          });
          return function(n) {
            return e.apply(this, arguments);
          };
        })(),
        p = e => {
          var n = {};
          return e.password && e.confirmPassword
            ? (e.password !== e.confirmPassword &&
                (n.confirmPassword = 'Passwords must match'),
              n)
            : null;
        },
        f = function() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          return e => n.reduce((n, t) => n || t(e), void 0);
        };
    },
    './src/modules/styled/form/reduxformfield.component.js': function(e, n, t) {
      'use strict';
      var r = t('../../node_modules/@babel/runtime/helpers/extends.js'),
        a = t.n(r),
        o = t('../../node_modules/react/index.js'),
        i = t.n(o),
        u = t('../../node_modules/prop-types/index.js'),
        l = t.n(u),
        c = t('./src/modules/styled/web.js'),
        s = t('./src/styles/index.js'),
        d = e => {
          var {
              label: n,
              input: t,
              type: r,
              meta: o,
              name: u,
              placeholder: l,
              autocomplete: d
            } = e,
            { dirty: m, touched: p, error: f, warning: b } = o;
          return i.a.createElement(
            c.r,
            { display: 'flex', fdirection: 'column', mt: 3 },
            n
              ? i.a.createElement(
                  'label',
                  { 'html-for': u },
                  i.a.createElement(c.i, { c: s.b.black }, n)
                )
              : null,
            i.a.createElement(
              c.g,
              a()({}, t, {
                placeholder: l || n,
                autoComplete: d,
                name: u,
                type: r,
                border: 1,
                p: '2 2',
                mt: 1
              })
            ),
            (m || p) &&
              ((f && i.a.createElement(c.k, { c: s.b.red, mt: 1 }, f)) ||
                (b && i.a.createElement(c.k, { c: s.b.red }, b)))
          );
        };
      (d.propTypes = {
        error: l.a.string,
        type: l.a.string,
        name: l.a.string,
        label: l.a.oneOfType([l.a.string, l.a.node]),
        placeholder: l.a.string,
        meta: l.a.object,
        input: l.a.object,
        autocomplete: l.a.string
      }),
        (d.defaultProps = { autocomplete: null }),
        (n.a = d);
    },
    './src/modules/styled/form/reduxformimageupload.component.js': function(e, n, t) {
      'use strict';
      var r = t('../../node_modules/react/index.js'),
        a = t.n(r),
        o = t('../../node_modules/prop-types/index.js'),
        i = t.n(o),
        u = t('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        l = t.n(u),
        c = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        s = t.n(c),
        d = t('./src/utils/index.js'),
        m = t('./src/modules/styled/uni.js'),
        p = d.a.Alert();
      class f extends r.Component {
        constructor() {
          super(...arguments), s()(this, 'state', { preview: null, fileName: null });
        }
        processImage() {
          var e = this.fileInput.files[0];
          d.c
            .loadImage(e)
            .then(n => {
              var t = n
                  .split(',')[0]
                  .split('/')[1]
                  .split(';')[0],
                r = e.name.substr(0, t.lastIndexOf('.')) + '.' + t;
              this.setState({ preview: n, fileName: r }),
                this.props.onChange({ preview: n, fileName: r });
            })
            .catch(e => {
              p.alert('Error uploading image ' + e);
            });
        }
        uploadImage() {
          var e = this;
          return l()(function*() {
            if (!e.state.fileName || !e.state.preview)
              return p('Please select an image'), null;
            var n = yield d.e.toS3Advanced(e.state.preview, e.state.fileName);
            return e.setState({ preview: null, fileName: null }), e.props.onChange(n), n;
          })();
        }
        renderPreview() {
          var { placeholder: e, imageComponent: n } = this.props,
            { preview: t } = this.state;
          return !t && e
            ? a.a.cloneElement(n, { source: { uri: e } })
            : t && n
            ? a.a.cloneElement(n, { source: { uri: t } })
            : t
            ? a.a.createElement('img', { src: t, style: { maxWidth: '300px' } })
            : null;
        }
        render() {
          var e = this.renderPreview();
          return a.a.createElement(
            m.E,
            { display: 'flex', fdirection: 'row', align: 'center' },
            a.a.createElement(m.E, { mr: 2 }, e),
            a.a.createElement('input', {
              ref: e => (this.fileInput = e),
              onChange: this.processImage.bind(this),
              accept: 'image/*',
              name: 'img',
              type: 'file'
            })
          );
        }
      }
      s()(f, 'propTypes', {
        placeholder: i.a.string,
        imageComponent: i.a.node,
        onChange: i.a.func
      });
      var b = t('./src/modules/styled/web.js'),
        h = t('./src/styles/index.js'),
        y = e => {
          var { label: n, meta: t, name: r, placeholder: o, imageComponent: i } = e,
            {
              input: { onChange: u, value: l }
            } = e,
            { touched: c, error: s, warning: d } = t;
          return a.a.createElement(
            b.r,
            { display: 'flex', fdirection: 'column', mt: 3 },
            n
              ? a.a.createElement(
                  'label',
                  { 'html-for': r },
                  a.a.createElement(b.i, { c: h.b.black }, n)
                )
              : null,
            a.a.createElement(f, {
              placeholder: l || o,
              imageComponent: i,
              onChange: e => {
                u(e);
              }
            }),
            c &&
              ((s && a.a.createElement(b.k, { c: h.b.red, mt: 1 }, s)) ||
                (d && a.a.createElement(b.k, { c: h.b.red }, d)))
          );
        };
      y.propTypes = {
        name: i.a.string,
        label: i.a.string,
        meta: i.a.object,
        input: i.a.object,
        placeholder: i.a.node,
        imageComponent: i.a.node
      };
      n.a = y;
    },
    './src/modules/styled/web.js': function(e, n, t) {
      'use strict';
      t.d(n, 'l', function() {
        return U;
      }),
        t.d(n, 'r', function() {
          return A;
        }),
        t.d(n, 'o', function() {
          return I;
        }),
        t.d(n, 'f', function() {
          return R;
        }),
        t.d(n, 'e', function() {
          return L;
        }),
        t.d(n, 'c', function() {
          return N;
        }),
        t.d(n, 'p', function() {
          return V;
        }),
        t.d(n, 'i', function() {
          return G;
        }),
        t.d(n, 'k', function() {
          return B;
        }),
        t.d(n, 'a', function() {
          return z;
        }),
        t.d(n, 'b', function() {
          return F;
        }),
        t.d(n, 'j', function() {
          return q;
        }),
        t.d(n, 'h', function() {
          return M;
        }),
        t.d(n, 'g', function() {
          return K;
        }),
        t.d(n, 'n', function() {
          return H;
        }),
        t.d(n, 'm', function() {
          return Z;
        }),
        t.d(n, 'd', function() {
          return Q;
        }),
        t.d(n, 'q', function() {
          return W;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        a = t.n(r),
        o = t('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        i = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        u = t('./src/styles/index.js'),
        l = t(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        c = t(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        );
      function s() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (s = function() {
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
      function m() {
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
          (m = function() {
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
      function f() {
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
          (f = function() {
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
          '\n  ',
          '\n  ',
          '\n  ::placeholder: {\n    font-size: ',
          ';\n    line-height: ',
          ';\n  };\n  :focus {\n    outline: none !important;\n    ',
          '\n  }\n'
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function y() {
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
          (y = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (g = function() {
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
      function j() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (O = function() {
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
      function w() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = a()(['\n  ', '\n  ', '\n']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = a()([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ',
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
      function _() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = a()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (P = function() {
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
      function T() {
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
          (T = function() {
            return e;
          }),
          e
        );
      }
      function D() {
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
          (D = function() {
            return e;
          }),
          e
        );
      }
      var U = Object(i.default)(o.b)(
          D(),
          u.c.header,
          u.b.grey,
          u.b.black,
          u.b.black,
          u.f.font,
          u.f.display,
          u.f.color,
          u.f.margin
        ),
        A = i.default.div(
          T(),
          u.f.margin,
          u.f.padding,
          u.f.flex,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.width,
          u.f.height,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        I = i.default.span(
          S(),
          u.f.margin,
          u.f.padding,
          u.f.flex,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.color,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        R = i.default.span(
          P(),
          u.f.margin,
          u.f.padding,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.color
        ),
        L = i.default.img(
          _(),
          u.f.margin,
          u.f.height,
          u.f.width,
          u.f.padding,
          u.f.background,
          u.f.borderRadius,
          u.f.flex
        ),
        N =
          (i.default.span(k(), u.f.margin, u.f.flex),
          i.default.div(
            C(),
            u.f.margin,
            u.f.padding,
            u.f.width,
            u.e.universalBorder('bottom')
          )),
        V =
          (Object(i.default)(I)(x(), u.c.header, u.f.color),
          Object(i.default)(I)(w(), u.c.title, u.f.color, u.f.font)),
        G = Object(i.default)(I)(E(), u.c.link, u.f.color, u.f.font),
        B = Object(i.default)(I)(O(), u.c.secondaryText, u.f.font, u.f.color),
        z =
          (Object(i.default)(I)(j(), u.c.altLink, u.f.color, u.f.font),
          Object(i.default)(I)(v(), u.c.commentText, u.f.color, u.f.font),
          Object(i.default)(I)(g(), u.c.bodyStyle, u.f.color, u.f.font)),
        F = i.default.button(
          y(),
          u.e.button,
          u.e.buttonFont,
          e =>
            e.disabled
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
        q = Object(i.default)(I)(
          h(),
          u.c.numericalValue,
          u.f.width,
          u.f.font,
          u.f.inheritfont,
          u.f.color
        ),
        M = i.default.input(
          b(),
          u.f.font,
          u.f.flex,
          u.f.border,
          u.f.padding,
          u.f.margin,
          Object(u.i)(1.75),
          Object(u.i)(1.75),
          u.e.universalBorder('', u.b.blue)
        ),
        K = i.default.input(
          f(),
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
        H = Object(i.default)(c.a)(
          p(),
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
        Z = Object(i.default)(l.a)(
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
        Q = i.default.form(d(), u.f.flex, u.f.margin),
        W = i.default.video(
          s(),
          u.f.margin,
          u.f.height,
          u.f.width,
          u.f.padding,
          u.f.background,
          u.f.borderRadius,
          u.f.flex
        );
    },
    './src/modules/user/user.actions.js': function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'updateLocalUser', function() {
          return p;
        }),
        t.d(n, 'getUsersLoading', function() {
          return f;
        }),
        t.d(n, 'getUserLoading', function() {
          return b;
        }),
        t.d(n, 'setUserList', function() {
          return h;
        }),
        t.d(n, 'clearUserList', function() {
          return y;
        }),
        t.d(n, 'clearSelectedUser', function() {
          return g;
        }),
        t.d(n, 'setSelectedUserData', function() {
          return v;
        }),
        t.d(n, 'setUserSearch', function() {
          return j;
        }),
        t.d(n, 'searchUser', function() {
          return O;
        }),
        t.d(n, 'getSelectedUser', function() {
          return E;
        }),
        t.d(n, 'updateBlock', function() {
          return w;
        }),
        t.d(n, 'getBlocked', function() {
          return x;
        });
      var r = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        a = t.n(r),
        o = t('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = t.n(o),
        u = t('./src/utils/index.js'),
        l = t('./src/modules/ui/error.actions.js'),
        c = t('./src/core/actionTypes.js');
      function s(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function d(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? s(Object(t), !0).forEach(function(n) {
                a()(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      var m = u.a.Alert();
      function p(e) {
        return { type: c.Mb, payload: e };
      }
      function f() {
        return { type: 'GET_USER_LIST' };
      }
      function b() {
        return { type: 'GET_USER_LOADING' };
      }
      function h(e, n, t) {
        return { type: 'SET_USER_LIST', payload: { users: e, index: n, topic: t } };
      }
      function y() {
        return { type: 'CLEAR_USER_LIST' };
      }
      function g() {
        return { type: 'CLEAR_SELECTED_USER' };
      }
      function v(e) {
        return { type: c.jb, payload: e };
      }
      function j(e) {
        return { type: 'SET_USER_SEARCH', payload: e };
      }
      function O(e) {
        return (function() {
          var n = i()(function*(n) {
            try {
              var t = yield n(
                u.b.request({
                  method: 'GET',
                  endpoint: 'user',
                  path: '/search',
                  query: { limit: 50, search: e }
                })
              );
              return n(j(t)), t;
            } catch (e) {
              return n(l.a('activity', !0, e.message)), !1;
            }
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })();
      }
      function E(e) {
        return (function() {
          var n = i()(function*(n) {
            try {
              n({ type: 'GET_USER_LOADING' });
              var t = yield n(
                u.b.request({ method: 'GET', endpoint: 'user', path: '/user/' + e })
              );
              return n(v(t)), n(l.a('profile', !1)), !0;
            } catch (e) {
              return n(l.a('profile', !0, e.message)), !1;
            }
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })();
      }
      function w(e, n) {
        var t = 'http://localhost:3000/api/user/block';
        return (
          n && (t = 'http://localhost:3000/api/user/unblock'),
          (function() {
            var r = i()(function*(r) {
              return fetch(
                t,
                d(
                  { method: 'PUT', body: JSON.stringify({ block: e }) },
                  yield u.b.reqOptions()
                )
              )
                .then(u.b.handleErrors)
                .then(e => e.json())
                .then(t => {
                  var a = 'blocked';
                  n && (a = 'unblocked'),
                    m.alert('user ' + e + ' has been ' + a),
                    r(p(t));
                })
                .catch(null);
            });
            return function(e) {
              return r.apply(this, arguments);
            };
          })()
        );
      }
      function x() {
        return (function() {
          var e = i()(function*(e) {
            return fetch(
              'http://localhost:3000/api/user/blocked',
              d({ method: 'GET' }, yield u.b.reqOptions())
            )
              .then(u.b.handleErrors)
              .then(e => e.json())
              .then(n => {
                e(p(n));
              })
              .catch(null);
          });
          return function(n) {
            return e.apply(this, arguments);
          };
        })();
      }
    }
  }
]);
//# sourceMappingURL=9.bundle.js.map
