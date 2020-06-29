(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [17],
  {
    './src/modules/admin/web/admin.css': function(e, n, t) {},
    './src/modules/admin/web/invite.component.js': function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function() {
          return b;
        });
      var r,
        o = t('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        s = t.n(o),
        i = t('./node_modules/@babel/runtime/helpers/createClass.js'),
        u = t.n(i),
        c = t('./node_modules/@babel/runtime/helpers/inherits.js'),
        l = t.n(c),
        a = t('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        d = t.n(a),
        f = t('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        m = t.n(f),
        p = t('../../node_modules/react/index.js'),
        h = t.n(p);
      function _(e) {
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
            r = m()(e);
          if (n) {
            var o = m()(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return d()(this, t);
        };
      }
      t('./src/modules/admin/web/admin.css');
      var b = (function(e) {
        l()(t, e);
        var n = _(t);
        function t() {
          return s()(this, t), n.apply(this, arguments);
        }
        return (
          u()(t, [
            {
              key: 'render',
              value: function() {
                return h.a.createElement(
                  'div',
                  { style: r.confirm },
                  'Please open this link on our phone AFTER you have downloaded Relevant app from the App Store'
                );
              }
            }
          ]),
          t
        );
      })(p.Component);
      r = {
        confirm: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '100px',
          fontSize: '20px'
        }
      };
    }
  }
]);
//# sourceMappingURL=admin-web-invite-component.bundle.js.map
