(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [38],
  {
    './public/img/default_community.png': function(e, t, r) {
      'use strict';
      r.r(t), (t.default = r.p + 'public/img/default_community.png');
    },
    './src/modules/createPost/web/createPostModal.header.js': function(e, t, r) {
      'use strict';
      r.r(t);
      var n = r('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = r.n(n),
        i = r('../../node_modules/react/index.js'),
        s = r.n(i),
        c = r('./src/modules/navigation/navigation.actions.js'),
        u = r('../../node_modules/prop-types/index.js'),
        a = r.n(u),
        l = r('../../node_modules/react-redux/es/index.js'),
        d = r('../../node_modules/react-router/esm/react-router.js'),
        m = r('./src/modules/styled/uni.js'),
        p = r('./src/styles/index.js'),
        b = r('../../node_modules/@loadable/component/dist/loadable.esm.js'),
        f = r('./src/utils/alert.js');
      function y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(r), !0).forEach(function(t) {
                o()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var g = Object(b.a)({
        resolved: {},
        chunkName: function() {
          return 'react-select';
        },
        isReady: function(e) {
          var t = this.resolve(e);
          return !1 !== this.resolved[t] && !!r.m[t];
        },
        importAsync: function() {
          return Promise.all([r.e(6), r.e(51)]).then(
            r.bind(
              null,
              '../../node_modules/react-select/dist/react-select.browser.esm.js'
            )
          );
        },
        requireAsync: function(e) {
          var t = this,
            r = this.resolve(e);
          return (
            (this.resolved[r] = !1),
            this.importAsync(e).then(function(e) {
              return (t.resolved[r] = !0), e;
            })
          );
        },
        requireSync: function e(t) {
          var n = this.resolve(t);
          return r(n);
        },
        resolve: function e() {
          return '../../node_modules/react-select/dist/react-select.browser.esm.js';
        }
      });
      function v(e) {
        var t = e.history,
          n = Object(l.d)(),
          o = Object(l.e)(function(e) {
            return e.community;
          }),
          i = o.communities,
          u = o.list,
          a = o.active,
          d = u.map(function(e) {
            return i[e];
          }),
          p = d.map(function(e) {
            return { label: e.name, value: e.slug };
          }),
          b = d.find(function(e) {
            return e.slug === a;
          });
        if (!b)
          return (
            n(Object(c.hideModal)()),
            f.browserAlerts.alert('Please select a community first', 'error'),
            null
          );
        var y = { label: b.name, value: a },
          j = b.image ? { uri: b.image } : r('./public/img/default_community.png');
        return s.a.createElement(
          m.E,
          { style: { zIndex: 1 }, fdirection: 'row', align: 'baseline' },
          s.a.createElement(m.C, { mr: 1.5 }, 'Post to:'),
          s.a.createElement(m.s, {
            w: 2,
            h: 2,
            mr: 1,
            mt: 0.25,
            style: { bottom: '-1px' },
            source: j,
            resizeMode: 'cover'
          }),
          s.a.createElement(g, {
            isSearchable: !1,
            styles: h,
            value: y,
            onChange: function(e) {
              return t.push({
                pathname: '/'.concat(e.value, '/new'),
                search: t.location.search
              });
            },
            options: p
          })
        );
      }
      v.propTypes = { history: a.a.object };
      var h = {
        menu: function(e) {
          return j(j({}, e), {}, { borderRadius: 0, padding: 0, maxWidth: 300 });
        },
        container: function() {
          return { padding: '0px' };
        },
        option: function(e, t) {
          return j(
            j({ borderBottom: '1px solid '.concat(p.b.lightBorder) }, p.c.body),
            {},
            {
              color: t.isSelected ? p.b.blue : p.b.black,
              padding: Object(p.i)(2),
              cursor: 'pointer'
            }
          );
        },
        indicatorSeparator: function() {},
        dropdownIndicator: function(e) {
          return j(j({}, e), {}, { padding: 0, cursor: 'pointer' });
        },
        valueContainer: function(e) {
          return j(
            j({}, e),
            {},
            { padding: 0, overflow: 'visible', paddingRight: 10, cursor: 'pointer' }
          );
        },
        control: function() {
          return { border: 'none', display: 'flex', padding: 0 };
        },
        menuList: function() {
          return { fontSize: Object(p.i)(2) };
        },
        singleValue: function(e, t) {
          var r = t.isDisabled ? 0.5 : 1;
          return j(
            j({}, p.c.body),
            {},
            {
              cursor: 'pointer',
              fontSize: Object(p.i)(2.5),
              lineHeight: Object(p.i)(2.5),
              opacity: r,
              transition: 'opacity 300ms'
            }
          );
        }
      };
      t.default = Object(d.g)(v);
    }
  }
]);
//# sourceMappingURL=createPost-web-createPostModal-header.bundle.js.map