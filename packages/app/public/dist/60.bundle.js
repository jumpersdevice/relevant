(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [60],
  {
    './src/modules/profile/web/linkMobile.js': function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function() {
          return u;
        });
      var l = t('../../node_modules/react/index.js'),
        r = t.n(l),
        a = t('../../node_modules/react-redux/es/index.js'),
        o = t('../../node_modules/qrcode.react/lib/index.js'),
        s = t.n(o),
        c = t('./src/modules/styled/uni.js'),
        d = t('./src/styles/index.js');
      function u() {
        var e = Object(a.e)(e => e.auth.token);
        return r.a.createElement(
          l.Fragment,
          null,
          r.a.createElement(c.q, null, 'Mobile Login'),
          r.a.createElement(
            c.E,
            {
              p: 2,
              mt: 4,
              mb: 4,
              ml: 'auto',
              mr: 'auto',
              alignSelf: 'center',
              border: !0,
              bc: d.b.gray
            },
            r.a.createElement(s.a, { value: e })
          ),
          r.a.createElement(
            c.d,
            null,
            'Open the Relevant Mobile App, press "Link Desktop Account" and scan the QR code'
          )
        );
      }
    }
  }
]);
//# sourceMappingURL=60.bundle.js.map
