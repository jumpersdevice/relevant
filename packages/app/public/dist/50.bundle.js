(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [50],
  {
    './public/img/default_community.png': function(e, t, r) {
      'use strict';
      r.r(t), (t.default = r.p + 'public/img/default_community.png');
    },
    './src/modules/createPost/web/createPostModal.header.js': function(e, t, r) {
      'use strict';
      r.r(t);
      var o = r('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        n = r.n(o),
        i = r('../../node_modules/react/index.js'),
        a = r.n(i),
        s = r('./src/modules/navigation/navigation.actions.js'),
        c = r('../../node_modules/prop-types/index.js'),
        l = r.n(c),
        d = r('../../node_modules/react-redux/es/index.js'),
        u = r(
          '../../node_modules/react-router-dom/node_modules/react-router/esm/react-router.js'
        ),
        p = r('./src/modules/styled/uni.js'),
        m = r('./src/styles/index.js'),
        b = r('../../node_modules/@loadable/component/dist/loadable.esm.js'),
        j = r('./src/utils/alert.js');
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function(t) {
                n()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var f = Object(b.a)(() =>
        r
          .e(6)
          .then(
            r.bind(
              null,
              '../../node_modules/react-select/dist/react-select.browser.esm.js'
            )
          )
      );
      function O(e) {
        var { history: t } = e,
          o = Object(d.d)(),
          { communities: n, list: i, active: c } = Object(d.e)(e => e.community),
          l = i.map(e => n[e]),
          u = l.map(e => ({ label: e.name, value: e.slug })),
          m = l.find(e => e.slug === c);
        if (!m)
          return (
            o(Object(s.hideModal)()),
            j.browserAlerts.alert('Please select a community first', 'error'),
            null
          );
        var b = { label: m.name, value: c },
          g = m.image ? { uri: m.image } : r('./public/img/default_community.png');
        return a.a.createElement(
          p.E,
          { style: { zIndex: 1 }, fdirection: 'row', align: 'baseline' },
          a.a.createElement(p.C, { mr: 1.5 }, 'Post to:'),
          a.a.createElement(p.s, {
            w: 2,
            h: 2,
            mr: 1,
            mt: 0.25,
            style: { bottom: '-1px' },
            source: g,
            resizeMode: 'cover'
          }),
          a.a.createElement(f, {
            isSearchable: !1,
            styles: _,
            value: b,
            onChange: e =>
              t.push({
                pathname: '/'.concat(e.value, '/new'),
                search: t.location.search
              }),
            options: u
          })
        );
      }
      O.propTypes = { history: l.a.object };
      var _ = {
        menu: e => y(y({}, e), {}, { borderRadius: 0, padding: 0, maxWidth: 300 }),
        container: () => ({ padding: '0px' }),
        option: (e, t) =>
          y(
            y({ borderBottom: '1px solid '.concat(m.b.lightBorder) }, m.c.body),
            {},
            {
              color: t.isSelected ? m.b.blue : m.b.black,
              padding: Object(m.i)(2),
              cursor: 'pointer'
            }
          ),
        indicatorSeparator: () => {},
        dropdownIndicator: e => y(y({}, e), {}, { padding: 0, cursor: 'pointer' }),
        valueContainer: e =>
          y(
            y({}, e),
            {},
            { padding: 0, overflow: 'visible', paddingRight: 10, cursor: 'pointer' }
          ),
        control: () => ({ border: 'none', display: 'flex', padding: 0 }),
        menuList: () => ({ fontSize: Object(m.i)(2) }),
        singleValue: (e, t) => {
          var r = t.isDisabled ? 0.5 : 1;
          return y(
            y({}, m.c.body),
            {},
            {
              cursor: 'pointer',
              fontSize: Object(m.i)(2.5),
              lineHeight: Object(m.i)(2.5),
              opacity: r,
              transition: 'opacity 300ms'
            }
          );
        }
      };
      t.default = Object(u.f)(O);
    }
  }
]);
//# sourceMappingURL=50.bundle.js.map
