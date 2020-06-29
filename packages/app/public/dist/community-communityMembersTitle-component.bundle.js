(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [35],
  {
    './src/modules/community/communityMembersTitle.component.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        o = t.n(r),
        s = t('./node_modules/@babel/runtime/helpers/createClass.js'),
        u = t.n(s),
        i = t('./node_modules/@babel/runtime/helpers/inherits.js'),
        c = t.n(i),
        l = t('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        m = t.n(l),
        a = t('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        d = t.n(a),
        p = t('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        f = t.n(p),
        y = t('../../node_modules/react/index.js'),
        _ = t.n(y),
        b = t('../../node_modules/prop-types/index.js'),
        j = t.n(b),
        h = t('../../node_modules/react-redux/es/index.js'),
        C = t('../../node_modules/redux/es/redux.js'),
        v = t('./src/modules/community/community.actions.js'),
        D = t('./src/modules/styled/uni.js');
      function E(e) {
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
            r = d()(e);
          if (n) {
            var o = d()(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return m()(this, t);
        };
      }
      var x = (function(e) {
        c()(t, e);
        var n = E(t);
        function t() {
          return o()(this, t), n.apply(this, arguments);
        }
        return (
          u()(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.community,
                  n = e.communities[e.active];
                return n
                  ? _.a.createElement(
                      D.E,
                      { fdirection: 'row', align: 'baseline' },
                      _.a.createElement(D.q, { inline: 1 }, 'Community Members'),
                      _.a.createElement(
                        D.d,
                        { ml: 2, inline: 1 },
                        n.memberCount,
                        ' Total'
                      )
                    )
                  : null;
              }
            }
          ]),
          t
        );
      })(y.Component);
      f()(x, 'propTypes', { community: j.a.object });
      n.default = Object(h.c)(
        function(e) {
          return { community: e.community };
        },
        function(e) {
          return {
            actions: Object(C.bindActionCreators)({ joinCommunity: v.joinCommunity }, e)
          };
        }
      )(x);
    }
  }
]);
//# sourceMappingURL=community-communityMembersTitle-component.bundle.js.map
