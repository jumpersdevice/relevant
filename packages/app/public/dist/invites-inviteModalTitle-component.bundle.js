(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [41],
  {
    './src/modules/invites/inviteModalTitle.component.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t('../../node_modules/@babel/runtime/regenerator/index.js'),
        s = t.n(r),
        o = t('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        i = t.n(o),
        u = t('../../node_modules/@babel/runtime/helpers/classCallCheck.js'),
        c = t.n(u),
        l = t('../../node_modules/@babel/runtime/helpers/createClass.js'),
        a = t.n(l),
        d = t('../../node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        m = t.n(d),
        p = t('../../node_modules/@babel/runtime/helpers/inherits.js'),
        f = t.n(p),
        h = t('../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        _ = t.n(h),
        b = t('../../node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        y = t.n(b),
        j = t('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        v = t.n(j),
        w = t('../../node_modules/react/index.js'),
        x = t.n(w),
        D = t('../../node_modules/prop-types/index.js'),
        L = t.n(D),
        A = t('../../node_modules/lodash/get.js'),
        C = t.n(A),
        E = t('./src/modules/styled/uni.js'),
        g = t('../../node_modules/react-redux/es/index.js');
      function O(e) {
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
            r = y()(e);
          if (n) {
            var s = y()(this).constructor;
            t = Reflect.construct(r, arguments, s);
          } else t = r.apply(this, arguments);
          return _()(this, t);
        };
      }
      var R = (function(e) {
        f()(t, e);
        var n = O(t);
        function t() {
          var e;
          c()(this, t);
          for (var r = arguments.length, o = new Array(r), u = 0; u < r; u++)
            o[u] = arguments[u];
          return (
            (e = n.call.apply(n, [this].concat(o))),
            v()(
              m()(e),
              'submit',
              i()(
                s.a.mark(function e() {
                  return s.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )
            ),
            e
          );
        }
        return (
          a()(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.community,
                  n = C()(e, 'communities.'.concat(e.active, '.name'));
                return x.a.createElement(
                  E.E,
                  {
                    display: 'flex',
                    fdirection: 'row',
                    justify: 'space-between',
                    align: 'center',
                    flex: 1
                  },
                  x.a.createElement(E.q, { shrink: 1 }, 'Invite Friends To ', n)
                );
              }
            }
          ]),
          t
        );
      })(w.Component);
      v()(R, 'propTypes', { community: L.a.object });
      n.default = Object(g.c)(
        function(e) {
          return {
            user: e.auth.user,
            community: e.community,
            inviteList: C()(e, 'admin.inviteList', {}) || {}
          };
        },
        function() {
          return {};
        }
      )(R);
    }
  }
]);
//# sourceMappingURL=invites-inviteModalTitle-component.bundle.js.map
