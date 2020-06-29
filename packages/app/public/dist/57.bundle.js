(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [57],
  {
    './src/modules/community/communityMembersTitle.component.js': function(e, n, o) {
      'use strict';
      o.r(n);
      var t = o('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        m = o.n(t),
        i = o('../../node_modules/react/index.js'),
        s = o.n(i),
        r = o('../../node_modules/prop-types/index.js'),
        u = o.n(r),
        c = o('../../node_modules/react-redux/es/index.js'),
        d = o('../../node_modules/redux/es/redux.js'),
        l = o('./src/modules/community/community.actions.js'),
        a = o('./src/modules/styled/uni.js');
      class _ extends i.Component {
        render() {
          var { community: e } = this.props,
            { communities: n, active: o } = e,
            t = n[o];
          return t
            ? s.a.createElement(
                a.E,
                { fdirection: 'row', align: 'baseline' },
                s.a.createElement(a.q, { inline: 1 }, 'Community Members'),
                s.a.createElement(a.d, { ml: 2, inline: 1 }, t.memberCount, ' Total')
              )
            : null;
        }
      }
      m()(_, 'propTypes', { community: u.a.object });
      n.default = Object(c.c)(
        e => ({ community: e.community }),
        e => ({
          actions: Object(d.bindActionCreators)({ joinCommunity: l.joinCommunity }, e)
        })
      )(_);
    }
  }
]);
//# sourceMappingURL=57.bundle.js.map
