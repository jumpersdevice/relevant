(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [48],
  {
    './src/modules/profile/web/linkMobile.js': function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function() {
          return d;
        });
      var r = t('../../node_modules/react/index.js'),
        l = t.n(r),
        a = t('../../node_modules/react-redux/es/index.js'),
        o = t('../../node_modules/qrcode.react/lib/index.js'),
        s = t.n(o),
        u = t('./src/modules/styled/uni.js'),
        c = t('./src/styles/index.js');
      function d() {
        var e = Object(a.e)(function(e) {
          return e.auth.token;
        });
        return l.a.createElement(
          r.Fragment,
          null,
          l.a.createElement(u.q, null, 'Mobile Login'),
          l.a.createElement(
            u.E,
            {
              p: 2,
              mt: 4,
              mb: 4,
              ml: 'auto',
              mr: 'auto',
              alignSelf: 'center',
              border: !0,
              bc: c.b.gray
            },
            l.a.createElement(s.a, { value: e })
          ),
          l.a.createElement(
            u.d,
            null,
            'Open the Relevant Mobile App, press "Link Desktop Account" and scan the QR code'
          )
        );
      }
    }
  }
]);
//# sourceMappingURL=profile-web-linkMobile.bundle.js.map
