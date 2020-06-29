(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [56],
  {
    './src/modules/auth/web/auth.container.js': function(e, o, t) {
      'use strict';
      t.r(o);
      var s = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        r = t.n(s),
        n = t('../../node_modules/react/index.js'),
        a = t.n(n),
        i = t('../../node_modules/prop-types/index.js'),
        c = t.n(i),
        d = t('../../node_modules/redux/es/redux.js'),
        p = t('../../node_modules/react-redux/es/index.js'),
        l = t(
          '../../node_modules/react-router-dom/node_modules/react-router/esm/react-router.js'
        ),
        u = t('./src/modules/navigation/navigation.actions.js'),
        m = t('./src/modules/auth/auth.actions.js');
      function h(e, o) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          o &&
            (s = s.filter(function(o) {
              return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            t.push.apply(t, s);
        }
        return t;
      }
      function j(e) {
        for (var o = 1; o < arguments.length; o++) {
          var t = null != arguments[o] ? arguments[o] : {};
          o % 2
            ? h(Object(t), !0).forEach(function(o) {
                r()(e, o, t[o]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function(o) {
                Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
              });
        }
        return e;
      }
      class b extends n.Component {
        componentDidMount() {
          this.openModal();
        }
        componentDidUpdate(e) {
          e.match.params.modal !== this.props.match.params.modal && this.openModal();
        }
        openModal() {
          var e,
            { user: o, match: t } = this.props;
          t.params.modal && (e = t.params.modal),
            o && 'temp' === o.role && (e = 'setHandle'),
            'confirm' === e || 'confirmEmail' === e
              ? this.props.actions.showModal('confirm')
              : 'forgot' === e
              ? this.props.actions.showModal('forgot')
              : 'login' === e
              ? this.props.actions.showModal('login')
              : 'signup' === e
              ? this.props.actions.showModal('signupSocial')
              : 'setHandle' === e
              ? this.props.actions.showModal('setHandle')
              : 'resetPassword' === e && this.props.actions.showModal('resetPassword');
        }
        render() {
          return a.a.createElement('div', null);
        }
      }
      r()(b, 'propTypes', {
        modal: c.a.bool,
        actions: c.a.object,
        user: c.a.object,
        match: c.a.object
      });
      o.default = Object(l.f)(
        Object(p.c)(
          e => ({ user: e.auth.user, auth: e.auth }),
          e => ({
            actions: Object(d.bindActionCreators)(
              j(j({}, m), {}, { hideModal: u.hideModal, showModal: u.showModal }),
              e
            )
          })
        )(b)
      );
    }
  }
]);
//# sourceMappingURL=56.bundle.js.map
