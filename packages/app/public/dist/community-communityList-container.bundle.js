(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [34],
  {
    './src/modules/community/communityList.component.js': function(e, n, t) {
      'use strict';
      var o = t('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        r = t.n(o),
        i = t('./node_modules/@babel/runtime/helpers/createClass.js'),
        s = t.n(i),
        c = t('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        u = t.n(c),
        a = t('./node_modules/@babel/runtime/helpers/inherits.js'),
        m = t.n(a),
        l = t('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        d = t.n(l),
        y = t('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        f = t.n(y),
        p = t('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        b = t.n(p),
        h = t('../../node_modules/react/index.js'),
        j = t.n(h),
        E = t('../../node_modules/prop-types/index.js'),
        _ = t.n(E),
        C = t('../../node_modules/react-redux/es/index.js'),
        v = t('../../node_modules/redux/es/redux.js'),
        x = t('./src/modules/community/community.actions.js'),
        g = t('./src/modules/auth/auth.actions.js'),
        w = t(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        k = t('./src/modules/navigation/ULink.component.js'),
        L = t('./src/modules/styled/uni.js'),
        A = t('./src/styles/index.js');
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
            o = f()(e);
          if (n) {
            var r = f()(this).constructor;
            t = Reflect.construct(o, arguments, r);
          } else t = o.apply(this, arguments);
          return d()(this, t);
        };
      }
      var D = Object(w.css)([':hover{background:', ';}'], A.b.secondaryBG),
        R = (function(e) {
          m()(t, e);
          var n = O(t);
          function t() {
            var e;
            r()(this, t);
            for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
              i[s] = arguments[s];
            return (
              (e = n.call.apply(n, [this].concat(i))),
              b()(u()(e), 'handleJoinCommunity', function(n, t) {
                e.props.auth.isAuthenticated && e.props.actions.joinCommunity(t);
              }),
              b()(u()(e), 'renderJoinLink', function(n) {
                return j.a.createElement(
                  L.v,
                  {
                    inline: 1,
                    c: A.b.blue,
                    onPress: function(t) {
                      return e.handleJoinCommunity(t, n);
                    },
                    onClick: function(t) {
                      return e.handleJoinCommunity(t, n);
                    }
                  },
                  'Join Community'
                );
              }),
              b()(u()(e), 'renderInnerText', function(n) {
                return e.props.hashtags
                  ? j.a.createElement(
                      L.d,
                      { c: A.b.black, mt: 0.5 },
                      n.topics
                        .map(function(e) {
                          return '#' + e;
                        })
                        .join(', ')
                    )
                  : j.a.createElement(
                      L.e,
                      null,
                      j.a.createElement(
                        L.d,
                        { inline: 1, c: A.b.black, mt: 0.5 },
                        n.description
                      ),
                      j.a.createElement(
                        L.v,
                        { inline: 1, c: A.b.black, mt: 0.5 },
                        n.memberCount,
                        ' member',
                        n.memberCount > 1 ? 's' : ''
                      )
                    );
              }),
              e
            );
          }
          return (
            s()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    n = this.props,
                    t = n.community.communities,
                    o = n.actions,
                    r = n.p,
                    i = void 0 !== r ? r : 4;
                  return j.a.createElement(
                    L.E,
                    { fdirection: 'column' },
                    Object.values(t).map(function(n) {
                      var t = '/'.concat(n.slug, '/new');
                      return j.a.createElement(
                        k.a,
                        {
                          to: t,
                          onPress: function() {
                            return o.setCommunity(n.slug);
                          },
                          onClick: function() {
                            return o.setCommunity(n.slug);
                          },
                          key: n._id,
                          styles: D,
                          fdirection: 'column',
                          flex: 1
                        },
                        j.a.createElement(
                          L.E,
                          { fdirection: 'row', align: 'flex-start', p: '2 '.concat(i) },
                          j.a.createElement(L.s, {
                            source: { uri: n.image },
                            h: 8,
                            w: 8,
                            mr: 2,
                            bg: A.b.secondaryBG
                          }),
                          j.a.createElement(
                            L.E,
                            { fdirection: 'column', flex: 1 },
                            j.a.createElement(L.C, { inline: 1 }, n.name, ' '),
                            j.a.createElement(L.E, { wrap: !0 }, e.renderInnerText(n))
                          ),
                          j.a.createElement(L.e, { mt: 6 })
                        )
                      );
                    })
                  );
                }
              }
            ]),
            t
          );
        })(h.Component);
      b()(R, 'propTypes', {
        community: _.a.object,
        actions: _.a.object,
        auth: _.a.object,
        hashtags: _.a.bool,
        p: _.a.number
      });
      n.a = Object(C.c)(
        function(e) {
          return { routing: e.routing, community: e.community, auth: e.auth };
        },
        function(e) {
          return {
            actions: Object(v.bindActionCreators)(
              { joinCommunity: x.joinCommunity, setCommunity: g.setCommunity },
              e
            )
          };
        }
      )(R);
    },
    './src/modules/community/communityList.container.js': function(e, n, t) {
      'use strict';
      t.r(n);
      var o = t('../../node_modules/react/index.js'),
        r = t.n(o),
        i = t('./src/modules/navigation/ULink.component.js'),
        s = t('./src/modules/styled/uni.js'),
        c = t('./src/modules/community/communityList.component.js'),
        u = t('./src/styles/index.js'),
        a = t('../../node_modules/react-native-web/dist/exports/ScrollView/index.js');
      n.default = function() {
        return r.a.createElement(
          a.a,
          { flex: 1, fdirection: 'column', style: { backgroundColor: u.b.white } },
          r.a.createElement(c.a, null),
          r.a.createElement(
            s.E,
            { m: '6 4 12 4', fdirection: 'row' },
            r.a.createElement(
              i.a,
              { inline: 1, external: !0, to: 'mailto:info@relevant.community' },
              r.a.createElement(s.d, { c: u.b.blue }, 'Get in touch ')
            ),
            r.a.createElement(s.d, null, "if you'd like to start your own community")
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=community-communityList-container.bundle.js.map
