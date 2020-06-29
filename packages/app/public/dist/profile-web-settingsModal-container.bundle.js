(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [50, 5, 51],
  {
    '../../node_modules/3box/lib/api.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
        i = n(r('../../node_modules/@babel/runtime/regenerator/index.js')),
        o = n(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
        s = n(r('../../node_modules/@babel/runtime/helpers/classCallCheck.js')),
        a = n(r('../../node_modules/@babel/runtime/helpers/createClass.js')),
        u = r('../../node_modules/graphql-request/dist/src/index.js').request,
        c = r('../../node_modules/3box/lib/utils/index.js'),
        l = r('../../node_modules/3box/lib/utils/verifier.js'),
        d = r('../../node_modules/3box/lib/utils/id.js').isSupportedDID,
        f = r('../../node_modules/3box/lib/config.js'),
        h = f.graphql_server_url,
        p = f.profile_server_url,
        b = f.address_server_url,
        m = (function() {
          function e() {
            (0, s.default)(this, e);
          }
          var t, r, n, f, m, g, y, v, w, k, _;
          return (
            (0, a.default)(e, null, [
              {
                key: 'getRootStoreAddress',
                value:
                  ((_ = (0, o.default)(
                    i.default.mark(function e(t) {
                      var r,
                        n,
                        o = arguments;
                      return i.default.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = o.length > 1 && void 0 !== o[1] ? o[1] : b),
                                (e.next = 3),
                                c.fetchJson(r + '/odbAddress/' + t)
                              );
                            case 3:
                              return (
                                (n = e.sent), e.abrupt('return', n.data.rootStoreAddress)
                              );
                            case 5:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function(e) {
                    return _.apply(this, arguments);
                  })
              },
              {
                key: 'listSpaces',
                value:
                  ((k = (0, o.default)(
                    i.default.mark(function e(t) {
                      var r,
                        n,
                        o,
                        s = arguments;
                      return i.default.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                                  (n = r.profileServer),
                                  (o = n || p),
                                  (e.prev = 2),
                                  !d(t))
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 6), c.fetchJson(o + '/list-spaces?did=' + t)
                                );
                              case 6:
                                return e.abrupt('return', e.sent);
                              case 9:
                                return (
                                  (e.next = 11),
                                  c.fetchJson(
                                    o + '/list-spaces?address=' + encodeURIComponent(t)
                                  )
                                );
                              case 11:
                                return e.abrupt('return', e.sent);
                              case 12:
                                e.next = 17;
                                break;
                              case 14:
                                return (
                                  (e.prev = 14),
                                  (e.t0 = e.catch(2)),
                                  e.abrupt('return', [])
                                );
                              case 17:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 14]]
                      );
                    })
                  )),
                  function(e) {
                    return k.apply(this, arguments);
                  })
              },
              {
                key: 'getSpace',
                value:
                  ((w = (0, o.default)(
                    i.default.mark(function e(t, r) {
                      var n,
                        o,
                        s,
                        a,
                        u,
                        l = arguments;
                      return i.default.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = l.length > 2 && void 0 !== l[2] ? l[2] : {}),
                                  (o = n.profileServer),
                                  (s = n.metadata),
                                  !(a = n.blocklist) || !a(t))
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error('user with '.concat(t, ' is blocked'));
                              case 3:
                                return (
                                  (u = ''.concat(o || p, '/space')),
                                  (e.prev = 5),
                                  (u = d(t)
                                    ? ''.concat(u, '?did=').concat(t)
                                    : ''
                                        .concat(u, '?address=')
                                        .concat(encodeURIComponent(t.toLowerCase()))),
                                  (u = ''
                                    .concat(u, '&name=')
                                    .concat(encodeURIComponent(r))),
                                  s &&
                                    (u = ''
                                      .concat(u, '&metadata=')
                                      .concat(encodeURIComponent(s))),
                                  (e.next = 11),
                                  c.fetchJson(u)
                                );
                              case 11:
                                return e.abrupt('return', e.sent);
                              case 14:
                                return (
                                  (e.prev = 14),
                                  (e.t0 = e.catch(5)),
                                  e.abrupt('return', {})
                                );
                              case 17:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[5, 14]]
                      );
                    })
                  )),
                  function(e, t) {
                    return w.apply(this, arguments);
                  })
              },
              {
                key: 'getSpaceDID',
                value:
                  ((v = (0, o.default)(
                    i.default.mark(function t(r, n) {
                      var o,
                        s,
                        a = arguments;
                      return i.default.wrap(function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (o = a.length > 2 && void 0 !== a[2] ? a[2] : {}),
                                (t.next = 3),
                                e.getConfig(r, o)
                              );
                            case 3:
                              if ((s = t.sent).spaces[n] && s.spaces[n].DID) {
                                t.next = 6;
                                break;
                              }
                              throw new Error(
                                'Could not find appropriate DID for address '.concat(r)
                              );
                            case 6:
                              return t.abrupt('return', s.spaces[n].DID);
                            case 7:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  )),
                  function(e, t) {
                    return v.apply(this, arguments);
                  })
              },
              {
                key: 'getThread',
                value:
                  ((y = (0, o.default)(
                    i.default.mark(function t(r, n, o, s) {
                      var a,
                        u,
                        l,
                        d = arguments;
                      return i.default.wrap(
                        function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((a = d.length > 4 && void 0 !== d[4] ? d[4] : {}),
                                  (u = a.profileServer || p),
                                  !o.startsWith('0x'))
                                ) {
                                  t.next = 6;
                                  break;
                                }
                                return (t.next = 5), e.getSpaceDID(o, r, a);
                              case 5:
                                o = t.sent;
                              case 6:
                                return (
                                  (t.prev = 6),
                                  (l = ''
                                    .concat(u, '/thread?space=')
                                    .concat(encodeURIComponent(r), '&name=')
                                    .concat(encodeURIComponent(n))),
                                  (l += '&mod='
                                    .concat(encodeURIComponent(o), '&members=')
                                    .concat(encodeURIComponent(s))),
                                  (t.next = 11),
                                  c.fetchJson(l)
                                );
                              case 11:
                                return t.abrupt('return', t.sent);
                              case 14:
                                throw ((t.prev = 14),
                                (t.t0 = t.catch(6)),
                                new Error(t.t0));
                              case 17:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[6, 14]]
                      );
                    })
                  )),
                  function(e, t, r, n) {
                    return y.apply(this, arguments);
                  })
              },
              {
                key: 'getThreadByAddress',
                value:
                  ((g = (0, o.default)(
                    i.default.mark(function e(t) {
                      var r,
                        n,
                        o = arguments;
                      return i.default.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = o.length > 1 && void 0 !== o[1] ? o[1] : {}),
                                  (n = r.profileServer || p),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  c.fetchJson(
                                    ''
                                      .concat(n, '/thread?address=')
                                      .concat(encodeURIComponent(t))
                                  )
                                );
                              case 5:
                                return e.abrupt('return', e.sent);
                              case 8:
                                throw ((e.prev = 8),
                                (e.t0 = e.catch(2)),
                                new Error(e.t0));
                              case 11:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 8]]
                      );
                    })
                  )),
                  function(e) {
                    return g.apply(this, arguments);
                  })
              },
              {
                key: 'getConfig',
                value:
                  ((m = (0, o.default)(
                    i.default.mark(function e(t) {
                      var r,
                        n,
                        o,
                        s = arguments;
                      return i.default.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                                  (n = r.profileServer || p),
                                  (o = t.startsWith('0x')),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  c.fetchJson(
                                    ''
                                      .concat(n, '/config?')
                                      .concat(o ? 'address' : 'did', '=')
                                      .concat(encodeURIComponent(t))
                                  )
                                );
                              case 6:
                                return e.abrupt('return', e.sent);
                              case 9:
                                throw ((e.prev = 9),
                                (e.t0 = e.catch(3)),
                                new Error(e.t0));
                              case 12:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[3, 9]]
                      );
                    })
                  )),
                  function(e) {
                    return m.apply(this, arguments);
                  })
              },
              {
                key: 'getProfile',
                value:
                  ((f = (0, o.default)(
                    i.default.mark(function e(t) {
                      var r,
                        n,
                        o,
                        s,
                        a,
                        u = arguments;
                      return i.default.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                                  (n = r.profileServer),
                                  (o = r.metadata),
                                  !(s = r.blocklist) || !s(t))
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error('user with '.concat(t, ' is blocked'));
                              case 3:
                                return (
                                  (a = ''.concat(n || p, '/profile')),
                                  (e.prev = 5),
                                  (a = d(t)
                                    ? ''.concat(a, '?did=').concat(t)
                                    : ''
                                        .concat(a, '?address=')
                                        .concat(encodeURIComponent(t.toLowerCase()))),
                                  o &&
                                    (a = ''
                                      .concat(a, '&metadata=')
                                      .concat(encodeURIComponent(o))),
                                  (e.next = 10),
                                  c.fetchJson(a)
                                );
                              case 10:
                                return e.abrupt('return', e.sent);
                              case 13:
                                return (
                                  (e.prev = 13),
                                  (e.t0 = e.catch(5)),
                                  e.abrupt('return', {})
                                );
                              case 16:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[5, 13]]
                      );
                    })
                  )),
                  function(e) {
                    return f.apply(this, arguments);
                  })
              },
              {
                key: 'getProfiles',
                value:
                  ((n = (0, o.default)(
                    i.default.mark(function e(t) {
                      var r,
                        n,
                        o,
                        s = arguments;
                      return i.default.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                                (r = Object.assign({ profileServer: p }, r)),
                                (n = { addressList: [], didList: [] }),
                                t.forEach(function(e) {
                                  d(e) ? n.didList.push(e) : n.addressList.push(e);
                                }),
                                (o = ''.concat(r.profileServer, '/profileList')),
                                e.abrupt('return', c.fetchJson(o, n))
                              );
                            case 6:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function(e) {
                    return n.apply(this, arguments);
                  })
              },
              {
                key: 'profileGraphQL',
                value:
                  ((r = (0, o.default)(
                    i.default.mark(function e(t) {
                      var r,
                        n = arguments;
                      return i.default.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                                (r = Object.assign({ graphqlServer: h }, r)),
                                e.abrupt('return', u(r.graphqlServer, t))
                              );
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function(e) {
                    return r.apply(this, arguments);
                  })
              },
              {
                key: 'getVerifiedAccounts',
                value:
                  ((t = (0, o.default)(
                    i.default.mark(function e(t) {
                      var r, n, o;
                      return i.default.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = {}),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  l.verifyDID(t.proof_did)
                                );
                              case 4:
                                if (
                                  ((n = e.sent),
                                  (o = [n.did]),
                                  (r.did = n.did),
                                  n.muport && ((r.muport = n.muport), o.push(n.muport)),
                                  !t.proof_github)
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (e.prev = 9),
                                  (e.next = 12),
                                  l.verifyGithub(o, t.proof_github)
                                );
                              case 12:
                                (r.github = e.sent), (e.next = 17);
                                break;
                              case 15:
                                (e.prev = 15), (e.t0 = e.catch(9));
                              case 17:
                                if (!t.proof_twitter) {
                                  e.next = 26;
                                  break;
                                }
                                return (
                                  (e.prev = 18),
                                  (e.next = 21),
                                  l.verifyTwitter(o, t.proof_twitter)
                                );
                              case 21:
                                (r.twitter = e.sent), (e.next = 26);
                                break;
                              case 24:
                                (e.prev = 24), (e.t1 = e.catch(18));
                              case 26:
                                if (!t.ethereum_proof) {
                                  e.next = 35;
                                  break;
                                }
                                return (
                                  (e.prev = 27),
                                  (e.next = 30),
                                  l.verifyEthereum(t.ethereum_proof, r.did)
                                );
                              case 30:
                                (r.ethereum = e.sent), (e.next = 35);
                                break;
                              case 33:
                                (e.prev = 33), (e.t2 = e.catch(27));
                              case 35:
                                e.next = 39;
                                break;
                              case 37:
                                (e.prev = 37), (e.t3 = e.catch(1));
                              case 39:
                                return e.abrupt('return', r);
                              case 40:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [1, 37],
                          [9, 15],
                          [18, 24],
                          [27, 33]
                        ]
                      );
                    })
                  )),
                  function(e) {
                    return t.apply(this, arguments);
                  })
              }
            ]),
            e
          );
        })();
      e.exports = m;
    },
    '../../node_modules/3box/lib/config.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/ipfs-log/src/log.js'),
        i = !(
          !Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).RENDEZVOUS_DISABLE ||
          ['0', 'f', 'false', 'no', 'off'].includes(
            Object({
              BROWSER: !0,
              NODE_ENV: 'production',
              WEB: 'true',
              BABEL_ENV: 'development_web',
              VAPID_PUBLIC_KEY:
                'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
              INFURA_PROTOCOL: 'ws',
              INFURA_NETWORK: 'mainnet',
              INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
              NETWORK_NUMBER: '1',
              TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
            }).RENDEZVOUS_DISABLE.toLowerCase()
          )
        );
      e.exports = {
        address_server_url:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).ADDRESS_SERVER_URL || 'https://beta.3box.io/address-server',
        pinning_node:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).PINNING_NODE ||
          '/dnsaddr/ipfs.3box.io/tcp/443/wss/ipfs/QmZvxEpiVNjmNbEKyQGvFzAY1BwmGuuvdUTmcTstQPhyVC',
        pinning_room:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).PINNING_ROOM || '3box-pinning',
        iframe_store_version:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).IFRAME_STORE_VERSION || '0.0.3',
        iframe_store_url:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).IFRAME_STORE_URL ||
          'https://iframe.3box.io/'.concat('0.0.3', '/iframe.html'),
        ipfs_options: {
          preload: { enabled: !1 },
          config: {
            Bootstrap: [],
            Addresses: {
              Swarm: i
                ? []
                : [
                    Object({
                      BROWSER: !0,
                      NODE_ENV: 'production',
                      WEB: 'true',
                      BABEL_ENV: 'development_web',
                      VAPID_PUBLIC_KEY:
                        'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
                      INFURA_PROTOCOL: 'ws',
                      INFURA_NETWORK: 'mainnet',
                      INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
                      NETWORK_NUMBER: '1',
                      TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
                    }).RENDEZVOUS_ADDRESS ||
                      '/dns4/p2p.3box.io/tcp/9090/wss/p2p-websocket-star/'
                  ]
            }
          }
        },
        orbitdb_options: { syncLocal: !0, sortFn: n.Sorting.SortByEntryHash },
        graphql_server_url:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).GRAPHQL_SERVER_URL || 'https://api.3box.io/graph/',
        profile_server_url:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).PROFILE_SERVER_URL || 'https://ipfs.3box.io',
        muport_ipfs_host:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).MUPORT_IPFS_HOST || 'ipfs.infura.io',
        muport_ipfs_port:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).MUPORT_IPFS_PORT || 5001,
        muport_ipfs_protocol:
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).MUPORT_IPFS_PROTOCOL || 'https'
      };
    },
    '../../node_modules/3box/lib/utils/id.js': function(e, t, r) {
      'use strict';
      var n,
        i = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
        o = i(r('../../node_modules/@babel/runtime/regenerator/index.js')),
        s = i(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
        a = r('../../node_modules/3box/node_modules/did-jwt/lib/index.js');
      e.exports = {
        isSupportedDID: function(e) {
          return e.startsWith('did:muport:') || e.startsWith('did:3:');
        },
        isMuportDID: function(e) {
          return e.startsWith('did:muport:');
        },
        isClaim:
          ((n = (0, s.default)(
            o.default.mark(function e(t) {
              var r,
                n = arguments;
              return o.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                          (e.prev = 1),
                          (e.next = 4),
                          a.decodeJWT(t, r)
                        );
                      case 4:
                        return e.abrupt('return', !0);
                      case 7:
                        return (e.prev = 7), (e.t0 = e.catch(1)), e.abrupt('return', !1);
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          )),
          function(e) {
            return n.apply(this, arguments);
          }),
        verifyClaim: a.verifyJWT
      };
    },
    '../../node_modules/3box/lib/utils/index.js': function(e, t, r) {
      'use strict';
      (function(t) {
        var n,
          i,
          o = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
          s = o(r('../../node_modules/@babel/runtime/regenerator/index.js')),
          a = o(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
          u =
            'undefined' != typeof window
              ? window.fetch
              : r('../../node_modules/node-fetch/browser.js'),
          c = r('../../node_modules/multihashes/src/index.js'),
          l = r('../../node_modules/js-sha256/src/sha256.js').sha256,
          d = function(e, t) {
            var r = new Error(t);
            return (r.statusCode = e), r;
          },
          f = function(e, t) {
            var r = (Boolean(e.sendAsync) ? e.sendAsync : e.send).bind(e);
            return new Promise(function(e, n) {
              r(t, function(t, r) {
                t ? n(t) : r.error ? n(r.error) : e(r.result);
              });
            });
          },
          h = function(e, t, r) {
            return { jsonrpc: '2.0', id: 1, method: e, params: t, fromAddress: r };
          },
          p = (function() {
            var e = (0, a.default)(
              s.default.mark(function e(t, r, n, i) {
                return s.default.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt('return', f(t, h(r, n, i)));
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function(t, r, n, i) {
              return e.apply(this, arguments);
            };
          })();
        e.exports = {
          getMessageConsent: function(e, t) {
            var r = 'Create a new 3Box profile\n\n- \nYour unique profile ID is ' + e;
            return t && (r += ' \nTimestamp: ' + t), r;
          },
          callRpc: p,
          openBoxConsent: function(e, r) {
            var n = 'This app wants to view and update your 3Box profile.';
            if (r.isAuthereum) return r.signMessageWithSigningKey(n);
            var i = '0x' + t.from(n, 'utf8').toString('hex');
            return p(r, 'personal_sign', [i, e], e);
          },
          openSpaceConsent: function(e, r, n) {
            var i = 'Allow this app to open your '.concat(n, ' space.');
            if (r.isAuthereum) return r.signMessageWithSigningKey(i);
            var o = '0x' + t.from(i, 'utf8').toString('hex');
            return p(r, 'personal_sign', [o, e], e);
          },
          fetchJson:
            ((i = (0, a.default)(
              s.default.mark(function e(t, r) {
                var n, i, o;
                return s.default.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r &&
                            (n = {
                              body: JSON.stringify(r),
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' }
                            }),
                          (e.next = 3),
                          u(t, n)
                        );
                      case 3:
                        if (!(i = e.sent).ok) {
                          e.next = 11;
                          break;
                        }
                        return (e.next = 7), i.json();
                      case 7:
                        return (o = e.sent), e.abrupt('return', o);
                      case 11:
                        return (e.t0 = d), (e.t1 = i.status), (e.next = 15), i.json();
                      case 15:
                        throw ((e.t2 = e.sent.message), (0, e.t0)(e.t1, e.t2));
                      case 17:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function(e, t) {
              return i.apply(this, arguments);
            }),
          fetchText:
            ((n = (0, a.default)(
              s.default.mark(function e(t, r) {
                var n;
                return s.default.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), u(t, r);
                      case 2:
                        if (!(n = e.sent).ok) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt('return', n.text());
                      case 7:
                        throw d(
                          n.status,
                          'Invalid response ('
                            .concat(n.status, ') for query at ')
                            .concat(t)
                        );
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function(e, t) {
              return n.apply(this, arguments);
            }),
          throwIfUndefined: function(e, t) {
            if (null == e) throw new Error(''.concat(t, ' is a required argument'));
          },
          throwIfNotEqualLenArrays: function(e, t) {
            if (!Array.isArray(e) || !Array.isArray(t))
              throw new Error('One or more arguments are not an array');
            if (e.length !== t.length)
              throw new Error('Arrays must be of the same length');
          },
          sha256Multihash: function(e) {
            var r = t.from(l.digest(e));
            return c.encode(r, 'sha2-256').toString('hex');
          },
          randInt: function(e) {
            return Math.floor(Math.random() * e);
          },
          sha256: l,
          pad: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24,
              r = (t - (e.length % t)) % t;
            return ''.concat(e).concat('\0'.repeat(r));
          },
          unpad: function(e) {
            return e.replace(/\0+$/, '');
          }
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/3box/lib/utils/verifier.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
        i = n(r('../../node_modules/@babel/runtime/regenerator/index.js')),
        o = n(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
        s = r('../../node_modules/3box/lib/utils/index.js'),
        a = s.fetchText,
        u = s.getMessageConsent,
        c = r('../../node_modules/3box/node_modules/did-jwt/lib/index.js'),
        l = r('../../node_modules/@ethersproject/wallet/lib.esm/index.js').verifyMessage,
        d = r('../../node_modules/3box/lib/config.js'),
        f = r('../../node_modules/3box/lib/utils/index.js'),
        h = r('../../node_modules/3id-resolver/lib/register.js');
      r('../../node_modules/https-did-resolver/lib/register.js').default(),
        r('../../node_modules/muport-did-resolver/lib/register.js')();
      var p,
        b,
        m,
        g,
        y,
        v,
        w,
        k = d.profile_server_url;
      h(
        ((p = k),
        {
          dag: {
            get:
              ((b = (0, o.default)(
                i.default.mark(function e(t) {
                  var r;
                  return i.default.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = ''
                              .concat(p, '/did-doc?cid=')
                              .concat(encodeURIComponent(t))),
                            e.abrupt('return', f.fetchJson(r))
                          );
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function(e) {
                return b.apply(this, arguments);
              })
          }
        }),
        { pin: !1 }
      ),
        (e.exports = {
          verifyGithub:
            ((w = (0, o.default)(
              i.default.mark(function e(t, r) {
                var n, o, s;
                return i.default.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = 'string' == typeof t ? [t] : t), r && '' !== r.trim())
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return', null);
                      case 3:
                        return (e.next = 5), a(r);
                      case 5:
                        if (
                          ((o = e.sent),
                          n.reduce(function(e, t) {
                            return e || -1 !== o.indexOf(t);
                          }, !1))
                        ) {
                          e.next = 9;
                          break;
                        }
                        throw new Error(
                          'Gist File provided does not contain the correct DID of the user'
                        );
                      case 9:
                        return (
                          (s = r.split('/')[3]),
                          e.abrupt('return', { username: s, proof: r })
                        );
                      case 11:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function(e, t) {
              return w.apply(this, arguments);
            }),
          verifyTwitter:
            ((v = (0, o.default)(
              i.default.mark(function e(t, r) {
                var n, o, s;
                return i.default.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((n = 'string' == typeof t ? [t] : t), r)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return', null);
                      case 3:
                        return (e.next = 5), c.verifyJWT(r);
                      case 5:
                        if (((o = e.sent), n.includes(o.payload.sub))) {
                          e.next = 8;
                          break;
                        }
                        throw new Error('Verification not valid for given user');
                      case 8:
                        if ((s = o.payload.claim).twitter_handle && s.twitter_proof) {
                          e.next = 11;
                          break;
                        }
                        throw new Error('The claim for your twitter is not correct');
                      case 11:
                        return e.abrupt('return', {
                          username: s.twitter_handle,
                          proof: s.twitter_proof,
                          verifiedBy: o.payload.iss
                        });
                      case 12:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function(e, t) {
              return v.apply(this, arguments);
            }),
          verifyEmail:
            ((y = (0, o.default)(
              i.default.mark(function e(t, r) {
                var n, o, s;
                return i.default.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((n = 'string' == typeof t ? [t] : t), r)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return', null);
                      case 3:
                        return (e.next = 5), c.verifyJWT(r);
                      case 5:
                        if (((o = e.sent), n.includes(o.payload.sub))) {
                          e.next = 8;
                          break;
                        }
                        throw new Error('Verification not valid for given user');
                      case 8:
                        if ((s = o.payload.claim).email_address) {
                          e.next = 11;
                          break;
                        }
                        throw new Error(
                          'The claim for your email address is not correct'
                        );
                      case 11:
                        return e.abrupt('return', {
                          email_address: s.email_address,
                          verifiedBy: o.payload.iss
                        });
                      case 12:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function(e, t) {
              return y.apply(this, arguments);
            }),
          verifyDID:
            ((g = (0, o.default)(
              i.default.mark(function e(t) {
                var r, n, o, s;
                return i.default.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), c.verifyJWT(t);
                      case 2:
                        if (((r = e.sent), (n = r.payload.muport), (o = {}), !n)) {
                          e.next = 10;
                          break;
                        }
                        return (e.next = 8), c.verifyJWT(n);
                      case 8:
                        (s = e.sent.payload.iss), (o.muport = s);
                      case 10:
                        return (o.did = r.payload.iss), e.abrupt('return', o);
                      case 12:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function(e) {
              return g.apply(this, arguments);
            }),
          verifyEthereum:
            ((m = (0, o.default)(
              i.default.mark(function e(t, r) {
                var n, o, s;
                return i.default.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = t.version ? t.message : t.consent_msg),
                          (o = t.version ? t.signature : t.consent_signature),
                          (s = u(r)),
                          n === s)
                        ) {
                          e.next = 6;
                          break;
                        }
                        throw new Error(
                          'Invalid consent message, got: "'
                            .concat(n, '", expected: "')
                            .concat(s, '"')
                        );
                      case 6:
                        return e.abrupt('return', l(n, o));
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function(e, t) {
              return m.apply(this, arguments);
            })
        });
    },
    '../../node_modules/3box/node_modules/did-jwt/lib/index.js': function(e, t, r) {
      (function(e) {
        function n(e) {
          return e && 'object' == typeof e && 'default' in e ? e.default : e;
        }
        var i = r('../../node_modules/js-sha256/src/sha256.js'),
          o = r('../../node_modules/js-sha3/src/sha3.js'),
          s = r('../../node_modules/elliptic/lib/elliptic.js'),
          a = n(r('../../node_modules/tweetnacl/nacl-fast.js')),
          u = r('../../node_modules/@stablelib/utf8/lib/utf8.js'),
          c = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js'),
          l = n(r('../../node_modules/uport-base64url/index.js')),
          d = n(r('../../node_modules/did-resolver/lib/resolver.js'));
        function f(e) {
          return c.Buffer.from(i.sha256.arrayBuffer(e));
        }
        function h(e) {
          return (
            '0x' +
            ((t = c.Buffer.from(e.slice(2), 'hex')),
            c.Buffer.from(o.keccak_256.arrayBuffer(t)))
              .slice(-20)
              .toString('hex')
          );
          var t;
        }
        var p = new s.ec('secp256k1');
        function b(e, t) {
          return (
            void 0 === t && (t = 64), e.length === t ? e : '0'.repeat(t - e.length) + e
          );
        }
        function m(t) {
          return new Uint8Array(Array.prototype.slice.call(e.from(t, 'base64'), 0));
        }
        var g = new s.ec('secp256k1');
        function y(e, t) {
          void 0 === t && (t = !1);
          var r = l.toBuffer(e);
          if (r.length !== (t ? 65 : 64)) throw new Error('wrong signature length');
          var n = {
            r: r.slice(0, 32).toString('hex'),
            s: r.slice(32, 64).toString('hex')
          };
          return t && (n.recoveryParam = r[64]), n;
        }
        var v = {
          ES256K: function(e, t, r) {
            var n = f(e),
              i = y(t),
              o = r.find(function(e) {
                return g.keyFromPublic(e.publicKeyHex, 'hex').verify(n, i);
              });
            if (!o) throw new Error('Signature invalid for JWT');
            return o;
          },
          'ES256K-R': function(e, t, r) {
            var n = y(t, !0),
              i = f(e),
              o = g.recoverPubKey(i, n, n.recoveryParam),
              s = o.encode('hex'),
              a = o.encode('hex', !0),
              u = h(s),
              c = r.find(function(e) {
                var t = e.publicKeyHex;
                return t === s || t === a || e.ethereumAddress === u;
              });
            if (!c) throw new Error('Signature invalid for JWT');
            return c;
          },
          Ed25519: function(e, t, r) {
            var n = u.encode(e),
              i = m(l.toBase64(t)),
              o = r.find(function(e) {
                return a.sign.detached.verify(n, i, m(e.publicKeyBase64));
              });
            if (!o) throw new Error('Signature invalid for JWT');
            return o;
          }
        };
        function w(e) {
          var t = v[e];
          if (!t) throw new Error('Unsupported algorithm ' + e);
          return t;
        }
        function k(e) {
          return 'object' == typeof e && 'r' in e && 's' in e;
        }
        function _(e) {
          return function(t, r) {
            try {
              return Promise.resolve(r(t)).then(function(t) {
                if (k(t))
                  return (function(r) {
                    var n = t.r,
                      i = t.s,
                      o = t.recoveryParam,
                      s = c.Buffer.alloc(e ? 65 : 64);
                    if (
                      (c.Buffer.from(n, 'hex').copy(s, 0),
                      c.Buffer.from(i, 'hex').copy(s, 32),
                      e)
                    ) {
                      if (void 0 === o)
                        throw new Error('Signer did not return a recoveryParam');
                      s[64] = o;
                    }
                    return l.encode(s);
                  })();
                throw new Error(
                  'expected a signer function that returns a signature object instead of string'
                );
              });
            } catch (e) {
              return Promise.reject(e);
            }
          };
        }
        w.toSignatureObject = y;
        var S = {
            ES256K: _(),
            'ES256K-R': _(!0),
            Ed25519: function(e, t) {
              try {
                return Promise.resolve(t(e)).then(function(e) {
                  if (k(e))
                    throw new Error(
                      'expected a signer function that returns a string instead of signature object'
                    );
                  return e;
                });
              } catch (e) {
                return Promise.reject(e);
              }
            }
          },
          j = {
            ES256K: [
              'Secp256k1VerificationKey2018',
              'Secp256k1SignatureVerificationKey2018',
              'EcdsaPublicKeySecp256k1'
            ],
            'ES256K-R': [
              'Secp256k1VerificationKey2018',
              'Secp256k1SignatureVerificationKey2018',
              'EcdsaPublicKeySecp256k1'
            ],
            Ed25519: ['ED25519SignatureVerification']
          };
        function E(e) {
          return l.encode(JSON.stringify(e));
        }
        function x(e) {
          return e.match(
            /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/
          );
        }
        function O(e) {
          if (e.match(/^did:/)) return e;
          if (x(e)) return 'did:uport:' + e;
          throw new Error("Not a valid DID '" + e + "'");
        }
        function A(e) {
          if (!e) throw new Error('no JWT passed into decodeJWT');
          var t = e.match(/^([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)$/);
          if (t)
            return {
              header: JSON.parse(l.decode(t[1])),
              payload: JSON.parse(l.decode(t[2])),
              signature: t[3],
              data: t[1] + '.' + t[2]
            };
          throw new Error('Incorrect format JWT');
        }
        (t.SimpleSigner = function(e) {
          var t = p.keyFromPrivate(e);
          return function(e) {
            try {
              var r = t.sign(f(e)),
                n = r.s,
                i = r.recoveryParam;
              return Promise.resolve({
                r: b(r.r.toString('hex')),
                s: b(n.toString('hex')),
                recoveryParam: i
              });
            } catch (e) {
              return Promise.reject(e);
            }
          };
        }),
          (t.NaclSigner = function(e) {
            var t = m(e);
            return function(e) {
              try {
                var r = u.encode(e),
                  n = a.sign.detached(r, t),
                  i = l.encode(c.Buffer.from(n));
                return Promise.resolve(i);
              } catch (e) {
                return Promise.reject(e);
              }
            };
          }),
          (t.verifyJWT = function(e, t) {
            void 0 === t && (t = { auth: null, audience: null, callbackUrl: null });
            try {
              var r = t.audience ? O(t.audience) : void 0,
                n = A(e),
                i = n.payload,
                o = n.header,
                s = n.signature,
                a = n.data;
              return Promise.resolve(
                (function(e, t, r) {
                  try {
                    var n = j[e];
                    if (!n || 0 === n.length)
                      throw new Error('No supported signature types for algorithm ' + e);
                    var i = O(t);
                    return Promise.resolve(d(i)).then(function(t) {
                      if (!t) throw new Error('Unable to resolve DID document for ' + i);
                      var o =
                          !r ||
                          (t.authentication || []).map(function(e) {
                            return e.publicKey;
                          }),
                        s = (t.publicKey || []).filter(function(e) {
                          var t = e.type,
                            i = e.id;
                          return n.find(function(e) {
                            return (
                              e === t && (!r || (Array.isArray(o) && o.indexOf(i) >= 0))
                            );
                          });
                        });
                      if (r && (!s || 0 === s.length))
                        throw new Error(
                          'DID document for ' +
                            i +
                            ' does not have public keys suitable for authenticationg user'
                        );
                      if (!s || 0 === s.length)
                        throw new Error(
                          'DID document for ' + i + ' does not have public keys for ' + e
                        );
                      return { authenticators: s, issuer: i, doc: t };
                    });
                  } catch (e) {
                    return Promise.reject(e);
                  }
                })(o.alg, i.iss, t.auth)
              ).then(function(n) {
                var u,
                  c = n.doc,
                  l = n.authenticators,
                  d = n.issuer,
                  f = w(o.alg)(a, s, l),
                  h = Math.floor(Date.now() / 1e3);
                if (f) {
                  if (i.iat && i.iat > h + 300)
                    throw new Error(
                      'JWT not valid yet (issued in the future): iat: ' +
                        i.iat +
                        ' > now: ' +
                        h
                    );
                  if (i.exp && i.exp <= h - 300)
                    throw new Error('JWT has expired: exp: ' + i.exp + ' < now: ' + h);
                  if (i.aud)
                    if ((u = i.aud) && (u.match(/^did:/) || x(u))) {
                      if (!r)
                        throw new Error(
                          'JWT audience is required but your app address has not been configured'
                        );
                      if (r !== O(i.aud))
                        throw new Error(
                          'JWT audience does not match your DID: aud: ' +
                            i.aud +
                            ' !== yours: ' +
                            r
                        );
                    } else {
                      if (!t.callbackUrl)
                        throw new Error(
                          "JWT audience matching your callback url is required but one wasn't passed in"
                        );
                      if (i.aud !== t.callbackUrl)
                        throw new Error(
                          'JWT audience does not match the callback url: aud: ' +
                            i.aud +
                            ' !== url: ' +
                            t.callbackUrl
                        );
                    }
                  return { payload: i, doc: c, issuer: d, signer: f, jwt: e };
                }
              });
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (t.createJWT = function(e, t) {
            var r = t.issuer,
              n = t.signer,
              i = t.alg,
              o = t.expiresIn;
            try {
              if (!n) throw new Error('No Signer functionality has been configured');
              if (!r) throw new Error('No issuing DID has been configured');
              var s = { typ: 'JWT', alg: i || 'ES256K' },
                a = { iat: Math.floor(Date.now() / 1e3), exp: void 0 };
              if (o) {
                if ('number' != typeof o)
                  throw new Error('JWT expiresIn is not a number');
                a.exp = a.iat + Math.floor(o);
              }
              var u = [E(s), E(Object.assign({}, a, e, { iss: r }))].join('.'),
                c = (function(e) {
                  var t = S[e];
                  if (!t) throw new Error('Unsupported algorithm ' + e);
                  return t;
                })(s.alg);
              return Promise.resolve(c(u, n)).then(function(e) {
                return [u, e].join('.');
              });
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (t.decodeJWT = A),
          (t.toEthereumAddress = h);
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/3id-resolver/lib/register.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
        i = n(r('../../node_modules/@babel/runtime/regenerator/index.js')),
        o = n(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
        s = r('../../node_modules/did-jwt/lib/index.js'),
        a = n(r('../../node_modules/ipfs-did-document/index.js')),
        u = n(r('../../node_modules/base64url/index.js')),
        c = r('../../node_modules/did-resolver/lib/resolver.js'),
        l = ['signingKey', 'managementKey', 'encryptionKey'],
        d = ['subSigningKey', 'subEncryptionKey'];
      function f(e, t, r) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, o.default)(
          i.default.mark(function e(t, r, n) {
            var o, s;
            return i.default.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), a.default.cidToDocument(t, r);
                    case 3:
                      if ((p((o = e.sent)), !o.root)) {
                        e.next = 14;
                        break;
                      }
                      if (!n) {
                        e.next = 8;
                        break;
                      }
                      throw new Error('Only one layer subDoc allowed');
                    case 8:
                      return (e.next = 10), f(t, o.root.split(':')[2], !0);
                    case 10:
                      return (s = e.sent), (e.next = 13), m(o);
                    case 13:
                      o = y(s, o);
                    case 14:
                      e.next = 26;
                      break;
                    case 16:
                      return (
                        (e.prev = 16),
                        (e.t0 = e.catch(0)),
                        (e.prev = 18),
                        (e.next = 21),
                        t.pin.rm(r)
                      );
                    case 21:
                      e.next = 25;
                      break;
                    case 23:
                      (e.prev = 23), (e.t1 = e.catch(18));
                    case 25:
                      throw new Error('Invalid 3ID');
                    case 26:
                      return e.abrupt('return', o);
                    case 27:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [0, 16],
                [18, 23]
              ]
            );
          })
        )).apply(this, arguments);
      }
      function p(e) {
        var t = l;
        if (!e || !e.publicKey || !e.authentication) throw new Error('Not a valid 3ID');
        if (e.root && ((t = d), !e.space)) throw new Error('Not a valid 3ID');
        e.publicKey.map(function(e) {
          var r = e.id.split('#')[1];
          if (!t.includes(r)) throw new Error('Not a valid 3ID');
        });
      }
      function b(e) {
        return u.default.encode(JSON.stringify(e));
      }
      function m(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, o.default)(
          i.default.mark(function e(t) {
            var r, n, o, a, u;
            return i.default.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.publicKey.find(function(e) {
                        return e.id.includes(d[0]);
                      }).publicKeyHex),
                      (n = t.publicKey.find(function(e) {
                        return e.id.includes(d[1]);
                      }).publicKeyBase64),
                      (o = b({
                        iat: null,
                        subSigningKey: r,
                        subEncryptionKey: n,
                        space: t.space,
                        iss: t.root
                      })),
                      (a = b({ typ: 'JWT', alg: t.proof.alg })),
                      (u = ''
                        .concat(a, '.')
                        .concat(o, '.')
                        .concat(t.proof.signature)),
                      (e.next = 7),
                      (0, s.verifyJWT)(u)
                    );
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function y(e, t) {
        return (t.publicKey = e.publicKey.concat(t.publicKey)), t;
      }
      e.exports = function(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          (0, c.registerMethod)('3', function(t, r) {
            var n = r.id;
            return f(e, n);
          });
      };
    },
    '../../node_modules/@babel/runtime/helpers/inheritsLoose.js': function(e, t) {
      e.exports = function(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      };
    },
    '../../node_modules/@babel/runtime/helpers/objectSpread.js': function(e, t, r) {
      var n = r('../../node_modules/@babel/runtime/helpers/defineProperty.js');
      e.exports = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? Object(arguments[t]) : {},
            i = Object.keys(r);
          'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            i.forEach(function(t) {
              n(e, t, r[t]);
            });
        }
        return e;
      };
    },
    '../../node_modules/@ethersproject/bignumber/lib.esm/index.js': function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return c;
      });
      var n = r('../../node_modules/bn.js/lib/bn.js'),
        i = r('../../node_modules/@ethersproject/bytes/lib.esm/index.js'),
        o = r('../../node_modules/@ethersproject/logger/lib.esm/index.js');
      const s = 'bignumber/5.0.0-beta.136',
        a = new o.Logger(s),
        u = {};
      class c {
        constructor(e, t) {
          a.checkNew(new.target, c),
            e !== u &&
              a.throwError(
                'cannot call consturtor directly; use BigNumber.from',
                o.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: 'new (BigNumber)' }
              ),
            (this._hex = t),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(e) {
          return d(f(this).fromTwos(e));
        }
        toTwos(e) {
          return d(f(this).toTwos(e));
        }
        abs() {
          return '-' === this._hex[0] ? c.from(this._hex.substring(1)) : this;
        }
        add(e) {
          return d(f(this).add(f(e)));
        }
        sub(e) {
          return d(f(this).sub(f(e)));
        }
        div(e) {
          return c.from(e).isZero() && h('division by zero', 'div'), d(f(this).div(f(e)));
        }
        mul(e) {
          return d(f(this).mul(f(e)));
        }
        mod(e) {
          return d(f(this).mod(f(e)));
        }
        pow(e) {
          return d(f(this).pow(f(e)));
        }
        maskn(e) {
          return d(f(this).maskn(e));
        }
        eq(e) {
          return f(this).eq(f(e));
        }
        lt(e) {
          return f(this).lt(f(e));
        }
        lte(e) {
          return f(this).lte(f(e));
        }
        gt(e) {
          return f(this).gt(f(e));
        }
        gte(e) {
          return f(this).gte(f(e));
        }
        isZero() {
          return f(this).isZero();
        }
        toNumber() {
          try {
            return f(this).toNumber();
          } catch (e) {
            h('overflow', 'toNumber', this.toString());
          }
          return null;
        }
        toString() {
          return (
            0 !== arguments.length &&
              a.throwError(
                'bigNumber.toString does not accept parameters',
                o.Logger.errors.UNEXPECTED_ARGUMENT,
                {}
              ),
            f(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        static from(e) {
          return e instanceof c
            ? e
            : 'string' == typeof e
            ? e.match(/-?0x[0-9a-f]+/i)
              ? new c(u, l(e))
              : e.match(/^-?[0-9]+$/)
              ? new c(u, l(new n.BN(e)))
              : a.throwArgumentError('invalid BigNumber string', 'value', e)
            : 'number' == typeof e
            ? (e % 1 && h('underflow', 'BigNumber.from', e),
              (e >= 9007199254740991 || e <= -9007199254740991) &&
                h('overflow', 'BigNumber.from', e),
              c.from(String(e)))
            : 'bigint' == typeof e
            ? c.from(e.toString())
            : Object(i.isBytes)(e)
            ? c.from(Object(i.hexlify)(e))
            : e._hex && Object(i.isHexString)(e._hex)
            ? c.from(e._hex)
            : e.toHexString && 'string' == typeof (e = e.toHexString())
            ? c.from(e)
            : a.throwArgumentError('invalid BigNumber value', 'value', e);
        }
        static isBigNumber(e) {
          return !(!e || !e._isBigNumber);
        }
      }
      function l(e) {
        if ('string' != typeof e) return l(e.toString(16));
        if ('-' === e[0])
          return (
            '-' === (e = e.substring(1))[0] &&
              a.throwArgumentError('invalid hex', 'value', e),
            '0x00' === (e = l(e)) ? e : '-' + e
          );
        if (('0x' !== e.substring(0, 2) && (e = '0x' + e), '0x' === e)) return '0x00';
        for (
          e.length % 2 && (e = '0x0' + e.substring(2));
          e.length > 4 && '0x00' === e.substring(0, 4);

        )
          e = '0x' + e.substring(4);
        return e;
      }
      function d(e) {
        return c.from(l(e));
      }
      function f(e) {
        const t = c.from(e).toHexString();
        return '-' === t[0]
          ? new n.BN('-' + t.substring(3), 16)
          : new n.BN(t.substring(2), 16);
      }
      function h(e, t, r) {
        const n = { fault: e, operation: t };
        return (
          null != r && (n.value = r), a.throwError(e, o.Logger.errors.NUMERIC_FAULT, n)
        );
      }
      new o.Logger(s), c.from(0), c.from(-1);
      let p = '0';
      for (; p.length < 256; ) p += p;
    },
    '../../node_modules/@ethersproject/bytes/lib.esm/index.js': function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'isBytesLike', function() {
          return s;
        }),
        r.d(t, 'isBytes', function() {
          return a;
        }),
        r.d(t, 'arrayify', function() {
          return u;
        }),
        r.d(t, 'concat', function() {
          return c;
        }),
        r.d(t, 'stripZeros', function() {
          return l;
        }),
        r.d(t, 'zeroPad', function() {
          return d;
        }),
        r.d(t, 'isHexString', function() {
          return f;
        }),
        r.d(t, 'hexlify', function() {
          return h;
        }),
        r.d(t, 'hexDataLength', function() {
          return p;
        }),
        r.d(t, 'hexDataSlice', function() {
          return b;
        }),
        r.d(t, 'hexConcat', function() {
          return m;
        }),
        r.d(t, 'hexValue', function() {
          return g;
        }),
        r.d(t, 'hexStripZeros', function() {
          return y;
        }),
        r.d(t, 'hexZeroPad', function() {
          return v;
        }),
        r.d(t, 'splitSignature', function() {
          return w;
        }),
        r.d(t, 'joinSignature', function() {
          return k;
        });
      const n = new (r(
        '../../node_modules/@ethersproject/logger/lib.esm/index.js'
      ).Logger)('bytes/5.0.0-beta.137');
      function i(e) {
        return !!e.toHexString;
      }
      function o(e) {
        return (
          e.slice ||
            (e.slice = function() {
              const t = Array.prototype.slice.call(arguments);
              return o(new Uint8Array(Array.prototype.slice.apply(e, t)));
            }),
          e
        );
      }
      function s(e) {
        return (f(e) && !(e.length % 2)) || a(e);
      }
      function a(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ('string' == typeof e) return !1;
        if (null == e.length) return !1;
        for (let t = 0; t < e.length; t++) {
          const r = e[t];
          if (r < 0 || r >= 256 || r % 1) return !1;
        }
        return !0;
      }
      function u(e, t) {
        if ((t || (t = {}), 'number' == typeof e)) {
          n.checkSafeUint53(e, 'invalid arrayify value');
          const t = [];
          for (; e; ) t.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === t.length && t.push(0), o(new Uint8Array(t));
        }
        if (
          (t.allowMissingPrefix &&
            'string' == typeof e &&
            '0x' !== e.substring(0, 2) &&
            (e = '0x' + e),
          i(e) && (e = e.toHexString()),
          f(e))
        ) {
          let r = e.substring(2);
          r.length % 2 &&
            ('left' === t.hexPad
              ? (r = '0x0' + r.substring(2))
              : 'right' === t.hexPad
              ? (r += '0')
              : n.throwArgumentError('hex data is odd-length', 'value', e));
          const i = [];
          for (let e = 0; e < r.length; e += 2)
            i.push(parseInt(r.substring(e, e + 2), 16));
          return o(new Uint8Array(i));
        }
        return a(e)
          ? o(new Uint8Array(e))
          : n.throwArgumentError('invalid arrayify value', 'value', e);
      }
      function c(e) {
        const t = e.map(e => u(e)),
          r = t.reduce((e, t) => e + t.length, 0),
          n = new Uint8Array(r);
        return t.reduce((e, t) => (n.set(t, e), e + t.length), 0), o(n);
      }
      function l(e) {
        let t = u(e);
        if (0 === t.length) return t;
        let r = 0;
        for (; r < t.length && 0 === t[r]; ) r++;
        return r && (t = t.slice(r)), t;
      }
      function d(e, t) {
        (e = u(e)).length > t &&
          n.throwArgumentError('value out of range', 'value', arguments[0]);
        const r = new Uint8Array(t);
        return r.set(e, t - e.length), o(r);
      }
      function f(e, t) {
        return (
          !('string' != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!t || e.length === 2 + 2 * t)
        );
      }
      function h(e, t) {
        if ((t || (t = {}), 'number' == typeof e)) {
          n.checkSafeUint53(e, 'invalid hexlify value');
          let t = '';
          for (; e; ) (t = '0123456789abcdef'[15 & e] + t), (e = Math.floor(e / 16));
          return t.length ? (t.length % 2 && (t = '0' + t), '0x' + t) : '0x00';
        }
        if (
          (t.allowMissingPrefix &&
            'string' == typeof e &&
            '0x' !== e.substring(0, 2) &&
            (e = '0x' + e),
          i(e))
        )
          return e.toHexString();
        if (f(e))
          return (
            e.length % 2 &&
              ('left' === t.hexPad
                ? (e = '0x0' + e.substring(2))
                : 'right' === t.hexPad
                ? (e += '0')
                : n.throwArgumentError('hex data is odd-length', 'value', e)),
            e.toLowerCase()
          );
        if (a(e)) {
          let t = '0x';
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            t += '0123456789abcdef'[(240 & n) >> 4] + '0123456789abcdef'[15 & n];
          }
          return t;
        }
        return n.throwArgumentError('invalid hexlify value', 'value', e);
      }
      function p(e) {
        if ('string' != typeof e) e = h(e);
        else if (!f(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function b(e, t, r) {
        return (
          'string' != typeof e
            ? (e = h(e))
            : (!f(e) || e.length % 2) &&
              n.throwArgumentError('invalid hexData', 'value', e),
          (t = 2 + 2 * t),
          null != r ? '0x' + e.substring(t, 2 + 2 * r) : '0x' + e.substring(t)
        );
      }
      function m(e) {
        let t = '0x';
        return (
          e.forEach(e => {
            t += h(e).substring(2);
          }),
          t
        );
      }
      function g(e) {
        const t = y(h(e, { hexPad: 'left' }));
        return '0x' === t ? '0x0' : t;
      }
      function y(e) {
        'string' != typeof e && (e = h(e)),
          f(e) || n.throwArgumentError('invalid hex string', 'value', e),
          (e = e.substring(2));
        let t = 0;
        for (; t < e.length && '0' === e[t]; ) t++;
        return '0x' + e.substring(t);
      }
      function v(e, t) {
        for (
          'string' != typeof e
            ? (e = h(e))
            : f(e) || n.throwArgumentError('invalid hex string', 'value', e),
            e.length > 2 * t + 2 &&
              n.throwArgumentError('value out of range', 'value', arguments[1]);
          e.length < 2 * t + 2;

        )
          e = '0x0' + e.substring(2);
        return e;
      }
      function w(e) {
        const t = { r: '0x', s: '0x', _vs: '0x', recoveryParam: 0, v: 0 };
        if (s(e)) {
          const r = u(e);
          65 !== r.length &&
            n.throwArgumentError(
              'invalid signature string; must be 65 bytes',
              'signature',
              e
            ),
            (t.r = h(r.slice(0, 32))),
            (t.s = h(r.slice(32, 64))),
            (t.v = r[64]),
            (t.recoveryParam = 1 - (t.v % 2)),
            t.v < 27 &&
              (0 === t.v || 1 === t.v
                ? (t.v += 27)
                : n.throwArgumentError('signature invalid v byte', 'signature', e)),
            t.recoveryParam && (r[32] |= 128),
            (t._vs = h(r.slice(32, 64)));
        } else {
          if (
            ((t.r = e.r),
            (t.s = e.s),
            (t.v = e.v),
            (t.recoveryParam = e.recoveryParam),
            (t._vs = e._vs),
            null != t._vs)
          ) {
            const r = d(u(t._vs), 32);
            t._vs = h(r);
            const i = r[0] >= 128 ? 1 : 0;
            null == t.recoveryParam
              ? (t.recoveryParam = i)
              : t.recoveryParam !== i &&
                n.throwArgumentError(
                  'signature recoveryParam mismatch _vs',
                  'signature',
                  e
                ),
              (r[0] &= 127);
            const o = h(r);
            null == t.s
              ? (t.s = o)
              : t.s !== o &&
                n.throwArgumentError('signature v mismatch _vs', 'signature', e);
          }
          null == t.recoveryParam
            ? null == t.v
              ? n.throwArgumentError(
                  'signature missing v and recoveryParam',
                  'signature',
                  e
                )
              : (t.recoveryParam = 1 - (t.v % 2))
            : null == t.v
            ? (t.v = 27 + t.recoveryParam)
            : t.recoveryParam !== 1 - (t.v % 2) &&
              n.throwArgumentError('signature recoveryParam mismatch v', 'signature', e),
            null != t.r && f(t.r)
              ? (t.r = v(t.r, 32))
              : n.throwArgumentError('signature missing or invalid r', 'signature', e),
            null != t.s && f(t.s)
              ? (t.s = v(t.s, 32))
              : n.throwArgumentError('signature missing or invalid s', 'signature', e);
          const r = u(t.s);
          r[0] >= 128 && n.throwArgumentError('signature s out of range', 'signature', e),
            t.recoveryParam && (r[0] |= 128);
          const i = h(r);
          t._vs &&
            (f(t._vs) || n.throwArgumentError('signature invalid _vs', 'signature', e),
            (t._vs = v(t._vs, 32))),
            null == t._vs
              ? (t._vs = i)
              : t._vs !== i &&
                n.throwArgumentError('signature _vs mismatch v and s', 'signature', e);
        }
        return t;
      }
      function k(e) {
        return h(c([(e = w(e)).r, e.s, e.recoveryParam ? '0x1c' : '0x1b']));
      }
    },
    '../../node_modules/@ethersproject/constants/lib.esm/index.js': function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return i;
      }),
        r.d(t, 'b', function() {
          return o;
        });
      var n = r('../../node_modules/@ethersproject/bignumber/lib.esm/index.js');
      const i = '0x0000000000000000000000000000000000000000000000000000000000000000',
        o = (n.a.from(-1), n.a.from(0));
      n.a.from(1),
        n.a.from(2),
        n.a.from('1000000000000000000'),
        n.a.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
    },
    '../../node_modules/@ethersproject/hash/lib.esm/index.js': function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'isValidName', function() {
          return c;
        }),
        r.d(t, 'namehash', function() {
          return l;
        }),
        r.d(t, 'id', function() {
          return d;
        }),
        r.d(t, 'messagePrefix', function() {
          return f;
        }),
        r.d(t, 'hashMessage', function() {
          return h;
        });
      var n = r('../../node_modules/@ethersproject/bytes/lib.esm/index.js'),
        i = r('../../node_modules/@ethersproject/strings/lib.esm/index.js'),
        o = r('../../node_modules/@ethersproject/keccak256/lib.esm/index.js');
      const s = new (r(
          '../../node_modules/@ethersproject/logger/lib.esm/index.js'
        ).Logger)('hash/5.0.0-beta.133'),
        a = new Uint8Array([
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]),
        u = new RegExp('^((.*)\\.)?([^.]+)$');
      function c(e) {
        try {
          const t = e.split('.');
          for (let e = 0; e < t.length; e++)
            if (0 === Object(i.b)(t[e]).length) throw new Error('empty');
          return !0;
        } catch (e) {}
        return !1;
      }
      function l(e) {
        'string' != typeof e &&
          s.throwArgumentError('invalid address - ' + String(e), 'name', e);
        let t = a;
        for (; e.length; ) {
          const r = e.match(u),
            s = Object(i.c)(Object(i.b)(r[3]));
          (t = Object(o.a)(Object(n.concat)([t, Object(o.a)(s)]))), (e = r[2] || '');
        }
        return Object(n.hexlify)(t);
      }
      function d(e) {
        return Object(o.a)(Object(i.c)(e));
      }
      const f = 'Ethereum Signed Message:\n';
      function h(e) {
        return (
          'string' == typeof e && (e = Object(i.c)(e)),
          Object(o.a)(
            Object(n.concat)([Object(i.c)(f), Object(i.c)(String(e.length)), e])
          )
        );
      }
    },
    '../../node_modules/@ethersproject/json-wallets/node_modules/scrypt-js/scrypt.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      (function(t) {
        !(function(r) {
          function n(e) {
            const t = new Uint32Array([
              1116352408,
              1899447441,
              3049323471,
              3921009573,
              961987163,
              1508970993,
              2453635748,
              2870763221,
              3624381080,
              310598401,
              607225278,
              1426881987,
              1925078388,
              2162078206,
              2614888103,
              3248222580,
              3835390401,
              4022224774,
              264347078,
              604807628,
              770255983,
              1249150122,
              1555081692,
              1996064986,
              2554220882,
              2821834349,
              2952996808,
              3210313671,
              3336571891,
              3584528711,
              113926993,
              338241895,
              666307205,
              773529912,
              1294757372,
              1396182291,
              1695183700,
              1986661051,
              2177026350,
              2456956037,
              2730485921,
              2820302411,
              3259730800,
              3345764771,
              3516065817,
              3600352804,
              4094571909,
              275423344,
              430227734,
              506948616,
              659060556,
              883997877,
              958139571,
              1322822218,
              1537002063,
              1747873779,
              1955562222,
              2024104815,
              2227730452,
              2361852424,
              2428436474,
              2756734187,
              3204031479,
              3329325298
            ]);
            let r = 1779033703,
              n = 3144134277,
              i = 1013904242,
              o = 2773480762,
              s = 1359893119,
              a = 2600822924,
              u = 528734635,
              c = 1541459225;
            const l = new Uint32Array(64);
            function d(e) {
              let d = 0,
                f = e.length;
              for (; f >= 64; ) {
                let h,
                  p,
                  b,
                  m,
                  g,
                  y = r,
                  v = n,
                  w = i,
                  k = o,
                  _ = s,
                  S = a,
                  j = u,
                  E = c;
                for (p = 0; p < 16; p++)
                  (b = d + 4 * p),
                    (l[p] =
                      ((255 & e[b]) << 24) |
                      ((255 & e[b + 1]) << 16) |
                      ((255 & e[b + 2]) << 8) |
                      (255 & e[b + 3]));
                for (p = 16; p < 64; p++)
                  (h = l[p - 2]),
                    (m =
                      ((h >>> 17) | (h << 15)) ^ ((h >>> 19) | (h << 13)) ^ (h >>> 10)),
                    (h = l[p - 15]),
                    (g = ((h >>> 7) | (h << 25)) ^ ((h >>> 18) | (h << 14)) ^ (h >>> 3)),
                    (l[p] = (((m + l[p - 7]) | 0) + ((g + l[p - 16]) | 0)) | 0);
                for (p = 0; p < 64; p++)
                  (m =
                    ((((((_ >>> 6) | (_ << 26)) ^
                      ((_ >>> 11) | (_ << 21)) ^
                      ((_ >>> 25) | (_ << 7))) +
                      ((_ & S) ^ (~_ & j))) |
                      0) +
                      ((E + ((t[p] + l[p]) | 0)) | 0)) |
                    0),
                    (g =
                      ((((y >>> 2) | (y << 30)) ^
                        ((y >>> 13) | (y << 19)) ^
                        ((y >>> 22) | (y << 10))) +
                        ((y & v) ^ (y & w) ^ (v & w))) |
                      0),
                    (E = j),
                    (j = S),
                    (S = _),
                    (_ = (k + m) | 0),
                    (k = w),
                    (w = v),
                    (v = y),
                    (y = (m + g) | 0);
                (r = (r + y) | 0),
                  (n = (n + v) | 0),
                  (i = (i + w) | 0),
                  (o = (o + k) | 0),
                  (s = (s + _) | 0),
                  (a = (a + S) | 0),
                  (u = (u + j) | 0),
                  (c = (c + E) | 0),
                  (d += 64),
                  (f -= 64);
              }
            }
            d(e);
            let f,
              h = e.length % 64,
              p = (e.length / 536870912) | 0,
              b = e.length << 3,
              m = h < 56 ? 56 : 120,
              g = e.slice(e.length - h, e.length);
            for (g.push(128), f = h + 1; f < m; f++) g.push(0);
            return (
              g.push((p >>> 24) & 255),
              g.push((p >>> 16) & 255),
              g.push((p >>> 8) & 255),
              g.push((p >>> 0) & 255),
              g.push((b >>> 24) & 255),
              g.push((b >>> 16) & 255),
              g.push((b >>> 8) & 255),
              g.push((b >>> 0) & 255),
              d(g),
              [
                (r >>> 24) & 255,
                (r >>> 16) & 255,
                (r >>> 8) & 255,
                (r >>> 0) & 255,
                (n >>> 24) & 255,
                (n >>> 16) & 255,
                (n >>> 8) & 255,
                (n >>> 0) & 255,
                (i >>> 24) & 255,
                (i >>> 16) & 255,
                (i >>> 8) & 255,
                (i >>> 0) & 255,
                (o >>> 24) & 255,
                (o >>> 16) & 255,
                (o >>> 8) & 255,
                (o >>> 0) & 255,
                (s >>> 24) & 255,
                (s >>> 16) & 255,
                (s >>> 8) & 255,
                (s >>> 0) & 255,
                (a >>> 24) & 255,
                (a >>> 16) & 255,
                (a >>> 8) & 255,
                (a >>> 0) & 255,
                (u >>> 24) & 255,
                (u >>> 16) & 255,
                (u >>> 8) & 255,
                (u >>> 0) & 255,
                (c >>> 24) & 255,
                (c >>> 16) & 255,
                (c >>> 8) & 255,
                (c >>> 0) & 255
              ]
            );
          }
          function i(e, t, r) {
            e = e.length <= 64 ? e : n(e);
            const i = 64 + t.length + 4,
              o = new Array(i),
              s = new Array(64);
            let a,
              u = [];
            for (a = 0; a < 64; a++) o[a] = 54;
            for (a = 0; a < e.length; a++) o[a] ^= e[a];
            for (a = 0; a < t.length; a++) o[64 + a] = t[a];
            for (a = i - 4; a < i; a++) o[a] = 0;
            for (a = 0; a < 64; a++) s[a] = 92;
            for (a = 0; a < e.length; a++) s[a] ^= e[a];
            function c() {
              for (let e = i - 1; e >= i - 4; e--) {
                if ((o[e]++, o[e] <= 255)) return;
                o[e] = 0;
              }
            }
            for (; r >= 32; ) c(), (u = u.concat(n(s.concat(n(o))))), (r -= 32);
            return r > 0 && (c(), (u = u.concat(n(s.concat(n(o))).slice(0, r)))), u;
          }
          function o(e, t, r, n, i) {
            let o;
            for (c(e, 16 * (2 * r - 1), i, 0, 16), o = 0; o < 2 * r; o++)
              u(e, 16 * o, i, 16), a(i, n), c(i, 0, e, t + 16 * o, 16);
            for (o = 0; o < r; o++) c(e, t + 2 * o * 16, e, 16 * o, 16);
            for (o = 0; o < r; o++) c(e, t + 16 * (2 * o + 1), e, 16 * (o + r), 16);
          }
          function s(e, t) {
            return (e << t) | (e >>> (32 - t));
          }
          function a(e, t) {
            c(e, 0, t, 0, 16);
            for (let e = 8; e > 0; e -= 2)
              (t[4] ^= s(t[0] + t[12], 7)),
                (t[8] ^= s(t[4] + t[0], 9)),
                (t[12] ^= s(t[8] + t[4], 13)),
                (t[0] ^= s(t[12] + t[8], 18)),
                (t[9] ^= s(t[5] + t[1], 7)),
                (t[13] ^= s(t[9] + t[5], 9)),
                (t[1] ^= s(t[13] + t[9], 13)),
                (t[5] ^= s(t[1] + t[13], 18)),
                (t[14] ^= s(t[10] + t[6], 7)),
                (t[2] ^= s(t[14] + t[10], 9)),
                (t[6] ^= s(t[2] + t[14], 13)),
                (t[10] ^= s(t[6] + t[2], 18)),
                (t[3] ^= s(t[15] + t[11], 7)),
                (t[7] ^= s(t[3] + t[15], 9)),
                (t[11] ^= s(t[7] + t[3], 13)),
                (t[15] ^= s(t[11] + t[7], 18)),
                (t[1] ^= s(t[0] + t[3], 7)),
                (t[2] ^= s(t[1] + t[0], 9)),
                (t[3] ^= s(t[2] + t[1], 13)),
                (t[0] ^= s(t[3] + t[2], 18)),
                (t[6] ^= s(t[5] + t[4], 7)),
                (t[7] ^= s(t[6] + t[5], 9)),
                (t[4] ^= s(t[7] + t[6], 13)),
                (t[5] ^= s(t[4] + t[7], 18)),
                (t[11] ^= s(t[10] + t[9], 7)),
                (t[8] ^= s(t[11] + t[10], 9)),
                (t[9] ^= s(t[8] + t[11], 13)),
                (t[10] ^= s(t[9] + t[8], 18)),
                (t[12] ^= s(t[15] + t[14], 7)),
                (t[13] ^= s(t[12] + t[15], 9)),
                (t[14] ^= s(t[13] + t[12], 13)),
                (t[15] ^= s(t[14] + t[13], 18));
            for (let r = 0; r < 16; ++r) e[r] += t[r];
          }
          function u(e, t, r, n) {
            for (let i = 0; i < n; i++) r[i] ^= e[t + i];
          }
          function c(e, t, r, n, i) {
            for (; i--; ) r[n++] = e[t++];
          }
          function l(e) {
            if (!e || 'number' != typeof e.length) return !1;
            for (let t = 0; t < e.length; t++) {
              const r = e[t];
              if ('number' != typeof r || r % 1 || r < 0 || r >= 256) return !1;
            }
            return !0;
          }
          function d(e, t) {
            if ('number' != typeof e || e % 1) throw new Error('invalid ' + t);
            return e;
          }
          function f(e, r, n, s, a, f, h) {
            if (
              ((n = d(n, 'N')),
              (s = d(s, 'r')),
              (a = d(a, 'p')),
              (f = d(f, 'dkLen')),
              0 === n || 0 != (n & (n - 1)))
            )
              throw new Error('N must be power of 2');
            if (n > 2147483647 / 128 / s) throw new Error('N too large');
            if (s > 2147483647 / 128 / a) throw new Error('r too large');
            if (!l(e)) throw new Error('password must be an array or buffer');
            if (((e = Array.prototype.slice.call(e)), !l(r)))
              throw new Error('salt must be an array or buffer');
            r = Array.prototype.slice.call(r);
            let p = i(e, r, 128 * a * s);
            const b = new Uint32Array(32 * a * s);
            for (let e = 0; e < b.length; e++) {
              const t = 4 * e;
              b[e] =
                ((255 & p[t + 3]) << 24) |
                ((255 & p[t + 2]) << 16) |
                ((255 & p[t + 1]) << 8) |
                ((255 & p[t + 0]) << 0);
            }
            const m = new Uint32Array(64 * s),
              g = new Uint32Array(32 * s * n),
              y = 32 * s,
              v = new Uint32Array(16),
              w = new Uint32Array(16),
              k = a * n * 2;
            let _,
              S,
              j = 0,
              E = null,
              x = !1,
              O = 0,
              A = 0;
            const C = h ? parseInt(1e3 / s) : 4294967295,
              R = void 0 !== t ? t : setTimeout,
              B = function() {
                if (x) return h(new Error('cancelled'), j / k);
                let t;
                switch (O) {
                  case 0:
                    (S = 32 * A * s), c(b, S, m, 0, y), (O = 1), (_ = 0);
                  case 1:
                    (t = n - _), t > C && (t = C);
                    for (let e = 0; e < t; e++)
                      c(m, 0, g, (_ + e) * y, y), o(m, y, s, v, w);
                    if (((_ += t), (j += t), h)) {
                      const e = parseInt((1e3 * j) / k);
                      if (e !== E) {
                        if (((x = h(null, j / k)), x)) break;
                        E = e;
                      }
                    }
                    if (_ < n) break;
                    (_ = 0), (O = 2);
                  case 2:
                    (t = n - _), t > C && (t = C);
                    for (let e = 0; e < t; e++) {
                      const e = m[16 * (2 * s - 1)] & (n - 1);
                      u(g, e * y, m, y), o(m, y, s, v, w);
                    }
                    if (((_ += t), (j += t), h)) {
                      const e = parseInt((1e3 * j) / k);
                      if (e !== E) {
                        if (((x = h(null, j / k)), x)) break;
                        E = e;
                      }
                    }
                    if (_ < n) break;
                    if ((c(m, 0, b, S, y), A++, A < a)) {
                      O = 0;
                      break;
                    }
                    p = [];
                    for (let e = 0; e < b.length; e++)
                      p.push((b[e] >> 0) & 255),
                        p.push((b[e] >> 8) & 255),
                        p.push((b[e] >> 16) & 255),
                        p.push((b[e] >> 24) & 255);
                    const r = i(e, p, f);
                    return h && h(null, 1, r), r;
                }
                h && R(B);
              };
            if (!h)
              for (;;) {
                const e = B();
                if (null != e) return e;
              }
            B();
          }
          const h = {
            scrypt: function(e, t, r, n, i, o, s) {
              return new Promise(function(a, u) {
                let c = 0;
                s && s(0),
                  f(e, t, r, n, i, o, function(e, t, r) {
                    if (e) u(e);
                    else if (r) s && 1 !== c && s(1), a(new Uint8Array(r));
                    else if (s && t !== c) return (c = t), s(t);
                  });
              });
            },
            syncScrypt: function(e, t, r, n, i, o) {
              return new Uint8Array(f(e, t, r, n, i, o));
            }
          };
          e.exports = h;
        })();
      }.call(this, r('../../node_modules/timers-browserify/main.js').setImmediate));
    },
    '../../node_modules/@ethersproject/json-wallets/node_modules/uuid/rng-browser.js': function(
      e,
      t,
      r
    ) {
      (function(t) {
        var r;
        if (t.crypto && crypto.getRandomValues) {
          var n = new Uint8Array(16);
          r = function() {
            return crypto.getRandomValues(n), n;
          };
        }
        if (!r) {
          var i = new Array(16);
          r = function() {
            for (var e, t = 0; t < 16; t++)
              0 == (3 & t) && (e = 4294967296 * Math.random()),
                (i[t] = (e >>> ((3 & t) << 3)) & 255);
            return i;
          };
        }
        e.exports = r;
      }.call(this, r('../../node_modules/webpack/buildin/global.js')));
    },
    '../../node_modules/@ethersproject/json-wallets/node_modules/uuid/uuid.js': function(
      e,
      t,
      r
    ) {
      for (
        var n = r(
            '../../node_modules/@ethersproject/json-wallets/node_modules/uuid/rng-browser.js'
          ),
          i = [],
          o = {},
          s = 0;
        s < 256;
        s++
      )
        (i[s] = (s + 256).toString(16).substr(1)), (o[i[s]] = s);
      function a(e, t) {
        var r = t || 0,
          n = i;
        return (
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          '-' +
          n[e[r++]] +
          n[e[r++]] +
          '-' +
          n[e[r++]] +
          n[e[r++]] +
          '-' +
          n[e[r++]] +
          n[e[r++]] +
          '-' +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]]
        );
      }
      var u = n(),
        c = [1 | u[0], u[1], u[2], u[3], u[4], u[5]],
        l = 16383 & ((u[6] << 8) | u[7]),
        d = 0,
        f = 0;
      function h(e, t, r) {
        var i = (t && r) || 0;
        'string' == typeof e && ((t = 'binary' == e ? new Array(16) : null), (e = null));
        var o = (e = e || {}).random || (e.rng || n)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t))
          for (var s = 0; s < 16; s++) t[i + s] = o[s];
        return t || a(o);
      }
      var p = h;
      (p.v1 = function(e, t, r) {
        var n = (t && r) || 0,
          i = t || [],
          o = void 0 !== (e = e || {}).clockseq ? e.clockseq : l,
          s = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          u = void 0 !== e.nsecs ? e.nsecs : f + 1,
          h = s - d + (u - f) / 1e4;
        if (
          (h < 0 && void 0 === e.clockseq && (o = (o + 1) & 16383),
          (h < 0 || s > d) && void 0 === e.nsecs && (u = 0),
          u >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (d = s), (f = u), (l = o);
        var p = (1e4 * (268435455 & (s += 122192928e5)) + u) % 4294967296;
        (i[n++] = (p >>> 24) & 255),
          (i[n++] = (p >>> 16) & 255),
          (i[n++] = (p >>> 8) & 255),
          (i[n++] = 255 & p);
        var b = ((s / 4294967296) * 1e4) & 268435455;
        (i[n++] = (b >>> 8) & 255),
          (i[n++] = 255 & b),
          (i[n++] = ((b >>> 24) & 15) | 16),
          (i[n++] = (b >>> 16) & 255),
          (i[n++] = (o >>> 8) | 128),
          (i[n++] = 255 & o);
        for (var m = e.node || c, g = 0; g < 6; g++) i[n + g] = m[g];
        return t || a(i);
      }),
        (p.v4 = h),
        (p.parse = function(e, t, r) {
          var n = (t && r) || 0,
            i = 0;
          for (
            t = t || [],
              e.toLowerCase().replace(/[0-9a-f]{2}/g, function(e) {
                i < 16 && (t[n + i++] = o[e]);
              });
            i < 16;

          )
            t[n + i++] = 0;
          return t;
        }),
        (p.unparse = a),
        (e.exports = p);
    },
    '../../node_modules/@ethersproject/keccak256/lib.esm/index.js': function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return s;
      });
      var n = r(
          '../../node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js'
        ),
        i = r.n(n),
        o = r('../../node_modules/@ethersproject/bytes/lib.esm/index.js');
      function s(e) {
        return '0x' + i.a.keccak_256(Object(o.arrayify)(e));
      }
    },
    '../../node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js': function(
      e,
      t,
      r
    ) {
      (function(t, r) {
        /**
         * [js-sha3]{@link https://github.com/emn178/js-sha3}
         *
         * @version 0.5.7
         * @author Chen, Yi-Cyuan [emn178@gmail.com]
         * @copyright Chen, Yi-Cyuan 2015-2016
         * @license MIT
         */
        !(function() {
          'use strict';
          var n = 'object' == typeof window ? window : {};
          !n.JS_SHA3_NO_NODE_JS &&
            'object' == typeof t &&
            t.versions &&
            t.versions.node &&
            (n = r);
          for (
            var i = !n.JS_SHA3_NO_COMMON_JS && 'object' == typeof e && e.exports,
              o = '0123456789abcdef'.split(''),
              s = [0, 8, 16, 24],
              a = [
                1,
                0,
                32898,
                0,
                32906,
                2147483648,
                2147516416,
                2147483648,
                32907,
                0,
                2147483649,
                0,
                2147516545,
                2147483648,
                32777,
                2147483648,
                138,
                0,
                136,
                0,
                2147516425,
                0,
                2147483658,
                0,
                2147516555,
                0,
                139,
                2147483648,
                32905,
                2147483648,
                32771,
                2147483648,
                32770,
                2147483648,
                128,
                2147483648,
                32778,
                0,
                2147483658,
                2147483648,
                2147516545,
                2147483648,
                32896,
                2147483648,
                2147483649,
                0,
                2147516424,
                2147483648
              ],
              u = [224, 256, 384, 512],
              c = ['hex', 'buffer', 'arrayBuffer', 'array'],
              l = function(e, t, r) {
                return function(n) {
                  return new k(e, t, e).update(n)[r]();
                };
              },
              d = function(e, t, r) {
                return function(n, i) {
                  return new k(e, t, i).update(n)[r]();
                };
              },
              f = function(e, t) {
                var r = l(e, t, 'hex');
                (r.create = function() {
                  return new k(e, t, e);
                }),
                  (r.update = function(e) {
                    return r.create().update(e);
                  });
                for (var n = 0; n < c.length; ++n) {
                  var i = c[n];
                  r[i] = l(e, t, i);
                }
                return r;
              },
              h = [
                {
                  name: 'keccak',
                  padding: [1, 256, 65536, 16777216],
                  bits: u,
                  createMethod: f
                },
                {
                  name: 'sha3',
                  padding: [6, 1536, 393216, 100663296],
                  bits: u,
                  createMethod: f
                },
                {
                  name: 'shake',
                  padding: [31, 7936, 2031616, 520093696],
                  bits: [128, 256],
                  createMethod: function(e, t) {
                    var r = d(e, t, 'hex');
                    (r.create = function(r) {
                      return new k(e, t, r);
                    }),
                      (r.update = function(e, t) {
                        return r.create(t).update(e);
                      });
                    for (var n = 0; n < c.length; ++n) {
                      var i = c[n];
                      r[i] = d(e, t, i);
                    }
                    return r;
                  }
                }
              ],
              p = {},
              b = [],
              m = 0;
            m < h.length;
            ++m
          )
            for (var g = h[m], y = g.bits, v = 0; v < y.length; ++v) {
              var w = g.name + '_' + y[v];
              b.push(w), (p[w] = g.createMethod(y[v], g.padding));
            }
          function k(e, t, r) {
            (this.blocks = []),
              (this.s = []),
              (this.padding = t),
              (this.outputBits = r),
              (this.reset = !0),
              (this.block = 0),
              (this.start = 0),
              (this.blockCount = (1600 - (e << 1)) >> 5),
              (this.byteCount = this.blockCount << 2),
              (this.outputBlocks = r >> 5),
              (this.extraBytes = (31 & r) >> 3);
            for (var n = 0; n < 50; ++n) this.s[n] = 0;
          }
          (k.prototype.update = function(e) {
            var t = 'string' != typeof e;
            t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
            for (
              var r,
                n,
                i = e.length,
                o = this.blocks,
                a = this.byteCount,
                u = this.blockCount,
                c = 0,
                l = this.s;
              c < i;

            ) {
              if (this.reset)
                for (this.reset = !1, o[0] = this.block, r = 1; r < u + 1; ++r) o[r] = 0;
              if (t)
                for (r = this.start; c < i && r < a; ++c) o[r >> 2] |= e[c] << s[3 & r++];
              else
                for (r = this.start; c < i && r < a; ++c)
                  (n = e.charCodeAt(c)) < 128
                    ? (o[r >> 2] |= n << s[3 & r++])
                    : n < 2048
                    ? ((o[r >> 2] |= (192 | (n >> 6)) << s[3 & r++]),
                      (o[r >> 2] |= (128 | (63 & n)) << s[3 & r++]))
                    : n < 55296 || n >= 57344
                    ? ((o[r >> 2] |= (224 | (n >> 12)) << s[3 & r++]),
                      (o[r >> 2] |= (128 | ((n >> 6) & 63)) << s[3 & r++]),
                      (o[r >> 2] |= (128 | (63 & n)) << s[3 & r++]))
                    : ((n = 65536 + (((1023 & n) << 10) | (1023 & e.charCodeAt(++c)))),
                      (o[r >> 2] |= (240 | (n >> 18)) << s[3 & r++]),
                      (o[r >> 2] |= (128 | ((n >> 12) & 63)) << s[3 & r++]),
                      (o[r >> 2] |= (128 | ((n >> 6) & 63)) << s[3 & r++]),
                      (o[r >> 2] |= (128 | (63 & n)) << s[3 & r++]));
              if (((this.lastByteIndex = r), r >= a)) {
                for (this.start = r - a, this.block = o[u], r = 0; r < u; ++r)
                  l[r] ^= o[r];
                _(l), (this.reset = !0);
              } else this.start = r;
            }
            return this;
          }),
            (k.prototype.finalize = function() {
              var e = this.blocks,
                t = this.lastByteIndex,
                r = this.blockCount,
                n = this.s;
              if (
                ((e[t >> 2] |= this.padding[3 & t]),
                this.lastByteIndex === this.byteCount)
              )
                for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
              for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
              _(n);
            }),
            (k.prototype.toString = k.prototype.hex = function() {
              this.finalize();
              for (
                var e,
                  t = this.blockCount,
                  r = this.s,
                  n = this.outputBlocks,
                  i = this.extraBytes,
                  s = 0,
                  a = 0,
                  u = '';
                a < n;

              ) {
                for (s = 0; s < t && a < n; ++s, ++a)
                  (e = r[s]),
                    (u +=
                      o[(e >> 4) & 15] +
                      o[15 & e] +
                      o[(e >> 12) & 15] +
                      o[(e >> 8) & 15] +
                      o[(e >> 20) & 15] +
                      o[(e >> 16) & 15] +
                      o[(e >> 28) & 15] +
                      o[(e >> 24) & 15]);
                a % t == 0 && (_(r), (s = 0));
              }
              return (
                i &&
                  ((e = r[s]),
                  i > 0 && (u += o[(e >> 4) & 15] + o[15 & e]),
                  i > 1 && (u += o[(e >> 12) & 15] + o[(e >> 8) & 15]),
                  i > 2 && (u += o[(e >> 20) & 15] + o[(e >> 16) & 15])),
                u
              );
            }),
            (k.prototype.arrayBuffer = function() {
              this.finalize();
              var e,
                t = this.blockCount,
                r = this.s,
                n = this.outputBlocks,
                i = this.extraBytes,
                o = 0,
                s = 0,
                a = this.outputBits >> 3;
              e = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a);
              for (var u = new Uint32Array(e); s < n; ) {
                for (o = 0; o < t && s < n; ++o, ++s) u[s] = r[o];
                s % t == 0 && _(r);
              }
              return i && ((u[o] = r[o]), (e = e.slice(0, a))), e;
            }),
            (k.prototype.buffer = k.prototype.arrayBuffer),
            (k.prototype.digest = k.prototype.array = function() {
              this.finalize();
              for (
                var e,
                  t,
                  r = this.blockCount,
                  n = this.s,
                  i = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  a = 0,
                  u = [];
                a < i;

              ) {
                for (s = 0; s < r && a < i; ++s, ++a)
                  (e = a << 2),
                    (t = n[s]),
                    (u[e] = 255 & t),
                    (u[e + 1] = (t >> 8) & 255),
                    (u[e + 2] = (t >> 16) & 255),
                    (u[e + 3] = (t >> 24) & 255);
                a % r == 0 && _(n);
              }
              return (
                o &&
                  ((e = a << 2),
                  (t = n[s]),
                  o > 0 && (u[e] = 255 & t),
                  o > 1 && (u[e + 1] = (t >> 8) & 255),
                  o > 2 && (u[e + 2] = (t >> 16) & 255)),
                u
              );
            });
          var _ = function(e) {
            var t,
              r,
              n,
              i,
              o,
              s,
              u,
              c,
              l,
              d,
              f,
              h,
              p,
              b,
              m,
              g,
              y,
              v,
              w,
              k,
              _,
              S,
              j,
              E,
              x,
              O,
              A,
              C,
              R,
              B,
              P,
              N,
              I,
              T,
              D,
              F,
              U,
              L,
              M,
              K,
              H,
              W,
              V,
              z,
              G,
              J,
              q,
              Y,
              X,
              Z,
              Q,
              $,
              ee,
              te,
              re,
              ne,
              ie,
              oe,
              se,
              ae,
              ue,
              ce,
              le;
            for (n = 0; n < 48; n += 2)
              (i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
                (o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
                (s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
                (u = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
                (c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
                (l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
                (d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
                (f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
                (t =
                  (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ ((s << 1) | (u >>> 31))),
                (r =
                  (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ ((u << 1) | (s >>> 31))),
                (e[0] ^= t),
                (e[1] ^= r),
                (e[10] ^= t),
                (e[11] ^= r),
                (e[20] ^= t),
                (e[21] ^= r),
                (e[30] ^= t),
                (e[31] ^= r),
                (e[40] ^= t),
                (e[41] ^= r),
                (t = i ^ ((c << 1) | (l >>> 31))),
                (r = o ^ ((l << 1) | (c >>> 31))),
                (e[2] ^= t),
                (e[3] ^= r),
                (e[12] ^= t),
                (e[13] ^= r),
                (e[22] ^= t),
                (e[23] ^= r),
                (e[32] ^= t),
                (e[33] ^= r),
                (e[42] ^= t),
                (e[43] ^= r),
                (t = s ^ ((d << 1) | (f >>> 31))),
                (r = u ^ ((f << 1) | (d >>> 31))),
                (e[4] ^= t),
                (e[5] ^= r),
                (e[14] ^= t),
                (e[15] ^= r),
                (e[24] ^= t),
                (e[25] ^= r),
                (e[34] ^= t),
                (e[35] ^= r),
                (e[44] ^= t),
                (e[45] ^= r),
                (t = c ^ ((h << 1) | (p >>> 31))),
                (r = l ^ ((p << 1) | (h >>> 31))),
                (e[6] ^= t),
                (e[7] ^= r),
                (e[16] ^= t),
                (e[17] ^= r),
                (e[26] ^= t),
                (e[27] ^= r),
                (e[36] ^= t),
                (e[37] ^= r),
                (e[46] ^= t),
                (e[47] ^= r),
                (t = d ^ ((i << 1) | (o >>> 31))),
                (r = f ^ ((o << 1) | (i >>> 31))),
                (e[8] ^= t),
                (e[9] ^= r),
                (e[18] ^= t),
                (e[19] ^= r),
                (e[28] ^= t),
                (e[29] ^= r),
                (e[38] ^= t),
                (e[39] ^= r),
                (e[48] ^= t),
                (e[49] ^= r),
                (b = e[0]),
                (m = e[1]),
                (J = (e[11] << 4) | (e[10] >>> 28)),
                (q = (e[10] << 4) | (e[11] >>> 28)),
                (C = (e[20] << 3) | (e[21] >>> 29)),
                (R = (e[21] << 3) | (e[20] >>> 29)),
                (ae = (e[31] << 9) | (e[30] >>> 23)),
                (ue = (e[30] << 9) | (e[31] >>> 23)),
                (W = (e[40] << 18) | (e[41] >>> 14)),
                (V = (e[41] << 18) | (e[40] >>> 14)),
                (T = (e[2] << 1) | (e[3] >>> 31)),
                (D = (e[3] << 1) | (e[2] >>> 31)),
                (g = (e[13] << 12) | (e[12] >>> 20)),
                (y = (e[12] << 12) | (e[13] >>> 20)),
                (Y = (e[22] << 10) | (e[23] >>> 22)),
                (X = (e[23] << 10) | (e[22] >>> 22)),
                (B = (e[33] << 13) | (e[32] >>> 19)),
                (P = (e[32] << 13) | (e[33] >>> 19)),
                (ce = (e[42] << 2) | (e[43] >>> 30)),
                (le = (e[43] << 2) | (e[42] >>> 30)),
                (te = (e[5] << 30) | (e[4] >>> 2)),
                (re = (e[4] << 30) | (e[5] >>> 2)),
                (F = (e[14] << 6) | (e[15] >>> 26)),
                (U = (e[15] << 6) | (e[14] >>> 26)),
                (v = (e[25] << 11) | (e[24] >>> 21)),
                (w = (e[24] << 11) | (e[25] >>> 21)),
                (Z = (e[34] << 15) | (e[35] >>> 17)),
                (Q = (e[35] << 15) | (e[34] >>> 17)),
                (N = (e[45] << 29) | (e[44] >>> 3)),
                (I = (e[44] << 29) | (e[45] >>> 3)),
                (E = (e[6] << 28) | (e[7] >>> 4)),
                (x = (e[7] << 28) | (e[6] >>> 4)),
                (ne = (e[17] << 23) | (e[16] >>> 9)),
                (ie = (e[16] << 23) | (e[17] >>> 9)),
                (L = (e[26] << 25) | (e[27] >>> 7)),
                (M = (e[27] << 25) | (e[26] >>> 7)),
                (k = (e[36] << 21) | (e[37] >>> 11)),
                (_ = (e[37] << 21) | (e[36] >>> 11)),
                ($ = (e[47] << 24) | (e[46] >>> 8)),
                (ee = (e[46] << 24) | (e[47] >>> 8)),
                (z = (e[8] << 27) | (e[9] >>> 5)),
                (G = (e[9] << 27) | (e[8] >>> 5)),
                (O = (e[18] << 20) | (e[19] >>> 12)),
                (A = (e[19] << 20) | (e[18] >>> 12)),
                (oe = (e[29] << 7) | (e[28] >>> 25)),
                (se = (e[28] << 7) | (e[29] >>> 25)),
                (K = (e[38] << 8) | (e[39] >>> 24)),
                (H = (e[39] << 8) | (e[38] >>> 24)),
                (S = (e[48] << 14) | (e[49] >>> 18)),
                (j = (e[49] << 14) | (e[48] >>> 18)),
                (e[0] = b ^ (~g & v)),
                (e[1] = m ^ (~y & w)),
                (e[10] = E ^ (~O & C)),
                (e[11] = x ^ (~A & R)),
                (e[20] = T ^ (~F & L)),
                (e[21] = D ^ (~U & M)),
                (e[30] = z ^ (~J & Y)),
                (e[31] = G ^ (~q & X)),
                (e[40] = te ^ (~ne & oe)),
                (e[41] = re ^ (~ie & se)),
                (e[2] = g ^ (~v & k)),
                (e[3] = y ^ (~w & _)),
                (e[12] = O ^ (~C & B)),
                (e[13] = A ^ (~R & P)),
                (e[22] = F ^ (~L & K)),
                (e[23] = U ^ (~M & H)),
                (e[32] = J ^ (~Y & Z)),
                (e[33] = q ^ (~X & Q)),
                (e[42] = ne ^ (~oe & ae)),
                (e[43] = ie ^ (~se & ue)),
                (e[4] = v ^ (~k & S)),
                (e[5] = w ^ (~_ & j)),
                (e[14] = C ^ (~B & N)),
                (e[15] = R ^ (~P & I)),
                (e[24] = L ^ (~K & W)),
                (e[25] = M ^ (~H & V)),
                (e[34] = Y ^ (~Z & $)),
                (e[35] = X ^ (~Q & ee)),
                (e[44] = oe ^ (~ae & ce)),
                (e[45] = se ^ (~ue & le)),
                (e[6] = k ^ (~S & b)),
                (e[7] = _ ^ (~j & m)),
                (e[16] = B ^ (~N & E)),
                (e[17] = P ^ (~I & x)),
                (e[26] = K ^ (~W & T)),
                (e[27] = H ^ (~V & D)),
                (e[36] = Z ^ (~$ & z)),
                (e[37] = Q ^ (~ee & G)),
                (e[46] = ae ^ (~ce & te)),
                (e[47] = ue ^ (~le & re)),
                (e[8] = S ^ (~b & g)),
                (e[9] = j ^ (~m & y)),
                (e[18] = N ^ (~E & O)),
                (e[19] = I ^ (~x & A)),
                (e[28] = W ^ (~T & F)),
                (e[29] = V ^ (~D & U)),
                (e[38] = $ ^ (~z & J)),
                (e[39] = ee ^ (~G & q)),
                (e[48] = ce ^ (~te & ne)),
                (e[49] = le ^ (~re & ie)),
                (e[0] ^= a[n]),
                (e[1] ^= a[n + 1]);
          };
          if (i) e.exports = p;
          else for (m = 0; m < b.length; ++m) n[b[m]] = p[b[m]];
        })();
      }.call(
        this,
        r('../../node_modules/process/browser.js'),
        r('../../node_modules/webpack/buildin/global.js')
      ));
    },
    '../../node_modules/@ethersproject/logger/lib.esm/index.js': function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'Logger', function() {
          return c;
        });
      let n = !1,
        i = !1;
      const o = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = o.default,
        a = null;
      const u = (function() {
        try {
          const e = [];
          if (
            (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach(t => {
              try {
                if ('test' !== 'test'.normalize(t)) throw new Error('bad normalize');
              } catch (r) {
                e.push(t);
              }
            }),
            e.length)
          )
            throw new Error('missing ' + e.join(', '));
          if (String.fromCharCode(233).normalize('NFD') !== String.fromCharCode(101, 769))
            throw new Error('broken implementation');
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      class c {
        constructor(e) {
          Object.defineProperty(this, 'version', {
            enumerable: !0,
            value: e,
            writable: !1
          });
        }
        _log(e, t) {
          const r = e.toLowerCase();
          null == o[r] &&
            this.throwArgumentError('invalid log level name', 'logLevel', e),
            s > o[r] || console.log.apply(console, t);
        }
        debug(...e) {
          this._log(c.levels.DEBUG, e);
        }
        info(...e) {
          this._log(c.levels.INFO, e);
        }
        warn(...e) {
          this._log(c.levels.WARNING, e);
        }
        makeError(e, t, r) {
          if (i) return this.makeError('censored error', t, {});
          t || (t = c.errors.UNKNOWN_ERROR), r || (r = {});
          const n = [];
          Object.keys(r).forEach(e => {
            try {
              n.push(e + '=' + JSON.stringify(r[e]));
            } catch (t) {
              n.push(e + '=' + JSON.stringify(r[e].toString()));
            }
          }),
            n.push(`code=${t}`),
            n.push(`version=${this.version}`);
          const o = e;
          n.length && (e += ' (' + n.join(', ') + ')');
          const s = new Error(e);
          return (
            (s.reason = o),
            (s.code = t),
            Object.keys(r).forEach(function(e) {
              s[e] = r[e];
            }),
            s
          );
        }
        throwError(e, t, r) {
          throw this.makeError(e, t, r);
        }
        throwArgumentError(e, t, r) {
          return this.throwError(e, c.errors.INVALID_ARGUMENT, { argument: t, value: r });
        }
        checkNormalize(e) {
          null == e && (e = 'platform missing String.prototype.normalize'),
            u &&
              this.throwError(
                'platform missing String.prototype.normalize',
                c.errors.UNSUPPORTED_OPERATION,
                { operation: 'String.prototype.normalize', form: u }
              );
        }
        checkSafeUint53(e, t) {
          'number' == typeof e &&
            (null == t && (t = 'value not safe'),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(t, c.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'out-of-safe-range',
                value: e
              }),
            e % 1 &&
              this.throwError(t, c.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'non-integer',
                value: e
              }));
        }
        checkArgumentCount(e, t, r) {
          (r = r ? ': ' + r : ''),
            e < t &&
              this.throwError('missing argument' + r, c.errors.MISSING_ARGUMENT, {
                count: e,
                expectedCount: t
              }),
            e > t &&
              this.throwError('too many arguments' + r, c.errors.UNEXPECTED_ARGUMENT, {
                count: e,
                expectedCount: t
              });
        }
        checkNew(e, t) {
          (e !== Object && null != e) ||
            this.throwError('missing new', c.errors.MISSING_NEW, { name: t.name });
        }
        checkAbstract(e, t) {
          e === t
            ? this.throwError(
                'cannot instantiate abstract class ' +
                  JSON.stringify(t.name) +
                  ' directly; use a sub-class',
                c.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: 'new' }
              )
            : (e !== Object && null != e) ||
              this.throwError('missing new', c.errors.MISSING_NEW, { name: t.name });
        }
        static globalLogger() {
          return a || (a = new c('logger/5.0.0-beta.136')), a;
        }
        static setCensorship(e, t) {
          if (
            (!e &&
              t &&
              this.globalLogger().throwError(
                'cannot permanently disable censorship',
                c.errors.UNSUPPORTED_OPERATION,
                { operation: 'setCensorship' }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              'error censorship permanent',
              c.errors.UNSUPPORTED_OPERATION,
              { operation: 'setCensorship' }
            );
          }
          (i = !!e), (n = !!t);
        }
        static setLogLevel(e) {
          const t = o[e];
          null != t ? (s = t) : c.globalLogger().warn('invalid log level - ' + e);
        }
      }
      (c.errors = {
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        NOT_IMPLEMENTED: 'NOT_IMPLEMENTED',
        UNSUPPORTED_OPERATION: 'UNSUPPORTED_OPERATION',
        NETWORK_ERROR: 'NETWORK_ERROR',
        SERVER_ERROR: 'SERVER_ERROR',
        TIMEOUT: 'TIMEOUT',
        BUFFER_OVERRUN: 'BUFFER_OVERRUN',
        NUMERIC_FAULT: 'NUMERIC_FAULT',
        MISSING_NEW: 'MISSING_NEW',
        INVALID_ARGUMENT: 'INVALID_ARGUMENT',
        MISSING_ARGUMENT: 'MISSING_ARGUMENT',
        UNEXPECTED_ARGUMENT: 'UNEXPECTED_ARGUMENT',
        CALL_EXCEPTION: 'CALL_EXCEPTION',
        INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
        NONCE_EXPIRED: 'NONCE_EXPIRED',
        REPLACEMENT_UNDERPRICED: 'REPLACEMENT_UNDERPRICED',
        UNPREDICTABLE_GAS_LIMIT: 'UNPREDICTABLE_GAS_LIMIT'
      }),
        (c.levels = {
          DEBUG: 'DEBUG',
          INFO: 'INFO',
          WARNING: 'WARNING',
          ERROR: 'ERROR',
          OFF: 'OFF'
        });
    },
    '../../node_modules/@ethersproject/pbkdf2/lib/browser.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = r('../../node_modules/@ethersproject/bytes/lib.esm/index.js'),
        i = r('../../node_modules/@ethersproject/sha2/lib/browser.js');
      t.pbkdf2 = function(e, t, r, o, s) {
        var a;
        (e = n.arrayify(e)), (t = n.arrayify(t));
        var u,
          c,
          l = 1,
          d = new Uint8Array(o),
          f = new Uint8Array(t.length + 4);
        f.set(t);
        for (var h = 1; h <= l; h++) {
          (f[t.length] = (h >> 24) & 255),
            (f[t.length + 1] = (h >> 16) & 255),
            (f[t.length + 2] = (h >> 8) & 255),
            (f[t.length + 3] = 255 & h);
          var p = n.arrayify(i.computeHmac(s, e, f));
          a ||
            ((a = p.length),
            (c = new Uint8Array(a)),
            (u = o - ((l = Math.ceil(o / a)) - 1) * a)),
            c.set(p);
          for (var b = 1; b < r; b++) {
            p = n.arrayify(i.computeHmac(s, e, p));
            for (var m = 0; m < a; m++) c[m] ^= p[m];
          }
          var g = (h - 1) * a,
            y = h === l ? u : a;
          d.set(n.arrayify(c).slice(0, y), g);
        }
        return n.hexlify(d);
      };
    },
    '../../node_modules/@ethersproject/properties/lib.esm/index.js': function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'defineReadOnly', function() {
          return i;
        }),
        r.d(t, 'getStatic', function() {
          return o;
        }),
        r.d(t, 'resolveProperties', function() {
          return s;
        }),
        r.d(t, 'checkProperties', function() {
          return a;
        }),
        r.d(t, 'shallowCopy', function() {
          return u;
        }),
        r.d(t, 'deepCopy', function() {
          return d;
        }),
        r.d(t, 'Description', function() {
          return f;
        });
      const n = new (r(
        '../../node_modules/@ethersproject/logger/lib.esm/index.js'
      ).Logger)('properties/5.0.0-beta.138');
      function i(e, t, r) {
        Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
      }
      function o(e, t) {
        for (let r = 0; r < 32; r++) {
          if (e[t]) return e[t];
          if (!e.prototype || 'object' != typeof e.prototype) break;
          e = Object.getPrototypeOf(e.prototype).constructor;
        }
        return null;
      }
      function s(e) {
        const t = Object.keys(e).map(t => {
          const r = e[t];
          return r instanceof Promise
            ? r.then(e => ({ key: t, value: e }))
            : Promise.resolve({ key: t, value: r });
        });
        return Promise.all(t).then(e =>
          e.reduce((e, t) => ((e[t.key] = t.value), e), {})
        );
      }
      function a(e, t) {
        (e && 'object' == typeof e) ||
          n.throwArgumentError('invalid object', 'object', e),
          Object.keys(e).forEach(r => {
            t[r] ||
              n.throwArgumentError('invalid object key - ' + r, 'transaction:' + r, e);
          });
      }
      function u(e) {
        const t = {};
        for (const r in e) t[r] = e[r];
        return t;
      }
      const c = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
      function l(e) {
        if (
          (function e(t) {
            if (null == t || c[typeof t]) return !0;
            if (Array.isArray(t) || 'object' == typeof t) {
              if (!Object.isFrozen(t)) return !1;
              const r = Object.keys(t);
              for (let n = 0; n < r.length; n++) if (!e(t[r[n]])) return !1;
              return !0;
            }
            return n.throwArgumentError(`Cannot deepCopy ${typeof t}`, 'object', t);
          })(e)
        )
          return e;
        if (Array.isArray(e)) return Object.freeze(e.map(e => d(e)));
        if ('object' == typeof e) {
          const t = {};
          for (const r in e) {
            const n = e[r];
            void 0 !== n && i(t, r, d(n));
          }
          return t;
        }
        return n.throwArgumentError(`Cannot deepCopy ${typeof e}`, 'object', e);
      }
      function d(e) {
        return l(e);
      }
      class f {
        constructor(e) {
          for (const t in e) this[t] = d(e[t]);
        }
      }
    },
    '../../node_modules/@ethersproject/random/lib/_version.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.version = 'random/5.0.0-beta.134');
    },
    '../../node_modules/@ethersproject/random/lib/browser.js': function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r('../../node_modules/@ethersproject/bytes/lib.esm/index.js'),
          i = r('../../node_modules/@ethersproject/logger/lib.esm/index.js'),
          o = r('../../node_modules/@ethersproject/random/lib/_version.js'),
          s = new i.Logger(o.version),
          a = r('../../node_modules/@ethersproject/random/lib/shuffle.js');
        t.shuffled = a.shuffled;
        var u = e.crypto || e.msCrypto;
        (u && u.getRandomValues) ||
          (s.warn('WARNING: Missing strong random number source'),
          (u = {
            getRandomValues: function(e) {
              return s.throwError(
                'no secure random source avaialble',
                i.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: 'crypto.getRandomValues' }
              );
            }
          })),
          (t.randomBytes = function(e) {
            (e <= 0 || e > 1024 || parseInt(String(e)) != e) &&
              s.throwArgumentError('invalid length', 'length', e);
            var t = new Uint8Array(e);
            return u.getRandomValues(t), n.arrayify(t);
          });
      }.call(this, r('../../node_modules/webpack/buildin/global.js')));
    },
    '../../node_modules/@ethersproject/random/lib/shuffle.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.shuffled = function(e) {
          for (var t = (e = e.slice()).length - 1; t > 0; t--) {
            var r = Math.floor(Math.random() * (t + 1)),
              n = e[t];
            (e[t] = e[r]), (e[r] = n);
          }
          return e;
        });
    },
    '../../node_modules/@ethersproject/sha2/lib/_version.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.version = 'sha2/5.0.0-beta.135');
    },
    '../../node_modules/@ethersproject/sha2/lib/browser.js': function(e, t, r) {
      'use strict';
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i,
        o = n(r('../../node_modules/hash.js/lib/hash.js')),
        s = r('../../node_modules/@ethersproject/bytes/lib.esm/index.js'),
        a = r('../../node_modules/@ethersproject/logger/lib.esm/index.js'),
        u = r('../../node_modules/@ethersproject/sha2/lib/_version.js'),
        c = new a.Logger(u.version);
      !(function(e) {
        (e.sha256 = 'sha256'), (e.sha512 = 'sha512');
      })((i = t.SupportedAlgorithm || (t.SupportedAlgorithm = {}))),
        (t.ripemd160 = function(e) {
          return (
            '0x' +
            o
              .ripemd160()
              .update(s.arrayify(e))
              .digest('hex')
          );
        }),
        (t.sha256 = function(e) {
          return (
            '0x' +
            o
              .sha256()
              .update(s.arrayify(e))
              .digest('hex')
          );
        }),
        (t.sha512 = function(e) {
          return (
            '0x' +
            o
              .sha512()
              .update(s.arrayify(e))
              .digest('hex')
          );
        }),
        (t.computeHmac = function(e, t, r) {
          return (
            i[e] ||
              c.throwError(
                'unsupported algorithm ' + e,
                a.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: 'hmac', algorithm: e }
              ),
            '0x' +
              o
                .hmac(o[e], s.arrayify(t))
                .update(s.arrayify(r))
                .digest('hex')
          );
        });
    },
    '../../node_modules/@ethersproject/strings/lib.esm/index.js': function(e, t, r) {
      'use strict';
      r.d(t, 'c', function() {
        return l;
      }),
        r.d(t, 'a', function() {
          return o;
        }),
        r.d(t, 'b', function() {
          return S;
        });
      r('../../node_modules/@ethersproject/constants/lib.esm/index.js');
      var n = r('../../node_modules/@ethersproject/bytes/lib.esm/index.js');
      const i = new (r(
        '../../node_modules/@ethersproject/logger/lib.esm/index.js'
      ).Logger)('strings/5.0.0-beta.136');
      var o, s;
      function a(e, t, r, n, i) {
        if (e === s.BAD_PREFIX || e === s.UNEXPECTED_CONTINUE) {
          let e = 0;
          for (let n = t + 1; n < r.length && r[n] >> 6 == 2; n++) e++;
          return e;
        }
        return e === s.OVERRUN ? r.length - t - 1 : 0;
      }
      !(function(e) {
        (e.current = ''),
          (e.NFC = 'NFC'),
          (e.NFD = 'NFD'),
          (e.NFKC = 'NFKC'),
          (e.NFKD = 'NFKD');
      })(o || (o = {})),
        (function(e) {
          (e.UNEXPECTED_CONTINUE = 'unexpected continuation byte'),
            (e.BAD_PREFIX = 'bad codepoint prefix'),
            (e.OVERRUN = 'string overrun'),
            (e.MISSING_CONTINUE = 'missing continuation byte'),
            (e.OUT_OF_RANGE = 'out of UTF-8 range'),
            (e.UTF16_SURROGATE = 'UTF-16 surrogate'),
            (e.OVERLONG = 'overlong representation');
        })(s || (s = {}));
      const u = Object.freeze({
        error: function(e, t, r, n, o) {
          return i.throwArgumentError(
            `invalid codepoint at offset ${t}; ${e}`,
            'bytes',
            r
          );
        },
        ignore: a,
        replace: function(e, t, r, n, i) {
          return e === s.OVERLONG ? (n.push(i), 0) : (n.push(65533), a(e, t, r));
        }
      });
      function c(e, t) {
        null == t && (t = u.error), (e = Object(n.arrayify)(e));
        const r = [];
        let i = 0;
        for (; i < e.length; ) {
          const n = e[i++];
          if (n >> 7 == 0) {
            r.push(n);
            continue;
          }
          let o = null,
            a = null;
          if (192 == (224 & n)) (o = 1), (a = 127);
          else if (224 == (240 & n)) (o = 2), (a = 2047);
          else {
            if (240 != (248 & n)) {
              i += t(
                128 == (192 & n) ? s.UNEXPECTED_CONTINUE : s.BAD_PREFIX,
                i - 1,
                e,
                r
              );
              continue;
            }
            (o = 3), (a = 65535);
          }
          if (i - 1 + o >= e.length) {
            i += t(s.OVERRUN, i - 1, e, r);
            continue;
          }
          let u = n & ((1 << (8 - o - 1)) - 1);
          for (let n = 0; n < o; n++) {
            let n = e[i];
            if (128 != (192 & n)) {
              (i += t(s.MISSING_CONTINUE, i, e, r)), (u = null);
              break;
            }
            (u = (u << 6) | (63 & n)), i++;
          }
          null !== u &&
            (u > 1114111
              ? (i += t(s.OUT_OF_RANGE, i - 1 - o, e, r, u))
              : u >= 55296 && u <= 57343
              ? (i += t(s.UTF16_SURROGATE, i - 1 - o, e, r, u))
              : u <= a
              ? (i += t(s.OVERLONG, i - 1 - o, e, r, u))
              : r.push(u));
        }
        return r;
      }
      function l(e, t = o.current) {
        t != o.current && (i.checkNormalize(), (e = e.normalize(t)));
        let r = [];
        for (let t = 0; t < e.length; t++) {
          const n = e.charCodeAt(t);
          if (n < 128) r.push(n);
          else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128);
          else if (55296 == (64512 & n)) {
            t++;
            const i = e.charCodeAt(t);
            if (t >= e.length || 56320 != (64512 & i))
              throw new Error('invalid utf-8 string');
            const o = 65536 + ((1023 & n) << 10) + (1023 & i);
            r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128);
          } else
            r.push((n >> 12) | 224),
              r.push(((n >> 6) & 63) | 128),
              r.push((63 & n) | 128);
        }
        return Object(n.arrayify)(r);
      }
      function d(e) {
        return e
          .map(e =>
            e <= 65535
              ? String.fromCharCode(e)
              : ((e -= 65536),
                String.fromCharCode(55296 + ((e >> 10) & 1023), 56320 + (1023 & e)))
          )
          .join('');
      }
      function f(e, t = o.current) {
        return c(l(e, t));
      }
      function h(e, t) {
        t ||
          (t = function(e) {
            return [parseInt(e, 16)];
          });
        let r = 0,
          n = {};
        return (
          e.split(',').forEach(e => {
            let i = e.split(':');
            (r += parseInt(i[0], 16)), (n[r] = t(i[1]));
          }),
          n
        );
      }
      function p(e) {
        let t = 0;
        return e.split(',').map(e => {
          let r = e.split('-');
          1 === r.length ? (r[1] = '0') : '' === r[1] && (r[1] = '1');
          let n = t + parseInt(r[0], 16);
          return (t = parseInt(r[1], 16)), { l: n, h: t };
        });
      }
      function b(e, t) {
        let r = 0;
        for (let n = 0; n < t.length; n++) {
          let i = t[n];
          if (((r += i.l), e >= r && e <= r + i.h && (e - r) % (i.d || 1) == 0)) {
            if (i.e && -1 !== i.e.indexOf(e - r)) continue;
            return i;
          }
        }
        return null;
      }
      const m = p(
          '221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d'
        ),
        g = 'ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff'
          .split(',')
          .map(e => parseInt(e, 16)),
        y = [
          { h: 25, s: 32, l: 65 },
          { h: 30, s: 32, e: [23], l: 127 },
          { h: 54, s: 1, e: [48], l: 64, d: 2 },
          { h: 14, s: 1, l: 57, d: 2 },
          { h: 44, s: 1, l: 17, d: 2 },
          { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
          { h: 16, s: 1, l: 68, d: 2 },
          { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
          { h: 26, s: 32, e: [17], l: 435 },
          { h: 22, s: 1, l: 71, d: 2 },
          { h: 15, s: 80, l: 40 },
          { h: 31, s: 32, l: 16 },
          { h: 32, s: 1, l: 80, d: 2 },
          { h: 52, s: 1, l: 42, d: 2 },
          { h: 12, s: 1, l: 55, d: 2 },
          { h: 40, s: 1, e: [38], l: 15, d: 2 },
          { h: 14, s: 1, l: 48, d: 2 },
          { h: 37, s: 48, l: 49 },
          { h: 148, s: 1, l: 6351, d: 2 },
          { h: 88, s: 1, l: 160, d: 2 },
          { h: 15, s: 16, l: 704 },
          { h: 25, s: 26, l: 854 },
          { h: 25, s: 32, l: 55915 },
          { h: 37, s: 40, l: 1247 },
          { h: 25, s: -119711, l: 53248 },
          { h: 25, s: -119763, l: 52 },
          { h: 25, s: -119815, l: 52 },
          { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
          { h: 25, s: -119919, l: 52 },
          { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
          { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
          { h: 25, s: -120075, l: 52 },
          { h: 25, s: -120127, l: 52 },
          { h: 25, s: -120179, l: 52 },
          { h: 25, s: -120231, l: 52 },
          { h: 25, s: -120283, l: 52 },
          { h: 25, s: -120335, l: 52 },
          { h: 24, s: -119543, e: [17], l: 56 },
          { h: 24, s: -119601, e: [17], l: 58 },
          { h: 24, s: -119659, e: [17], l: 58 },
          { h: 24, s: -119717, e: [17], l: 58 },
          { h: 24, s: -119775, e: [17], l: 58 }
        ],
        v = h(
          'b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3'
        ),
        w = h(
          '179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7'
        ),
        k = h(
          'df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D',
          function(e) {
            if (e.length % 4 != 0) throw new Error('bad data');
            let t = [];
            for (let r = 0; r < e.length; r += 4)
              t.push(parseInt(e.substring(r, r + 4), 16));
            return t;
          }
        ),
        _ = p(
          '80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001'
        );
      function S(e) {
        if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
        let t = f(e);
        var r;
        (r = t.map(e => {
          if (g.indexOf(e) >= 0) return [];
          if (e >= 65024 && e <= 65039) return [];
          let t = (function(e) {
            let t = b(e, y);
            if (t) return [e + t.s];
            let r = v[e];
            if (r) return r;
            let n = w[e];
            if (n) return [e + n[0]];
            let i = k[e];
            return i || null;
          })(e);
          return t || [e];
        })),
          (t = r.reduce(
            (e, t) => (
              t.forEach(t => {
                e.push(t);
              }),
              e
            ),
            []
          )),
          (t = f(d(t), o.NFKC)),
          t.forEach(e => {
            if (b(e, _)) throw new Error('STRINGPREP_CONTAINS_PROHIBITED');
          }),
          t.forEach(e => {
            if (b(e, m)) throw new Error('STRINGPREP_CONTAINS_UNASSIGNED');
          });
        let n = d(t);
        if (
          '-' === n.substring(0, 1) ||
          '--' === n.substring(2, 4) ||
          '-' === n.substring(n.length - 1)
        )
          throw new Error('invalid hyphen');
        if (n.length > 63) throw new Error('too long');
        return n;
      }
    },
    '../../node_modules/@ethersproject/wallet/lib.esm/index.js': function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'Wallet', function() {
          return Ae;
        }),
        r.d(t, 'verifyMessage', function() {
          return Ce;
        });
      var n = r('../../node_modules/bn.js/lib/bn.js'),
        i = r('../../node_modules/@ethersproject/bytes/lib.esm/index.js'),
        o = r('../../node_modules/@ethersproject/bignumber/lib.esm/index.js'),
        s = r('../../node_modules/@ethersproject/keccak256/lib.esm/index.js'),
        a = r('../../node_modules/@ethersproject/logger/lib.esm/index.js');
      const u = new a.Logger('rlp/5.0.0-beta.132');
      function c(e) {
        const t = [];
        for (; e; ) t.unshift(255 & e), (e >>= 8);
        return t;
      }
      function l(e) {
        return Object(i.hexlify)(
          (function e(t) {
            if (Array.isArray(t)) {
              let r = [];
              if (
                (t.forEach(function(t) {
                  r = r.concat(e(t));
                }),
                r.length <= 55)
              )
                return r.unshift(192 + r.length), r;
              const n = c(r.length);
              return n.unshift(247 + n.length), n.concat(r);
            }
            Object(i.isBytesLike)(t) ||
              u.throwArgumentError('RLP object must be BytesLike', 'object', t);
            const r = Array.prototype.slice.call(Object(i.arrayify)(t));
            if (1 === r.length && r[0] <= 127) return r;
            if (r.length <= 55) return r.unshift(128 + r.length), r;
            const n = c(r.length);
            return n.unshift(183 + n.length), n.concat(r);
          })(e)
        );
      }
      const d = new a.Logger('address/5.0.0-beta.134');
      function f(e) {
        Object(i.isHexString)(e, 20) ||
          d.throwArgumentError('invalid address', 'address', e);
        const t = (e = e.toLowerCase()).substring(2).split(''),
          r = new Uint8Array(40);
        for (let e = 0; e < 40; e++) r[e] = t[e].charCodeAt(0);
        const n = Object(i.arrayify)(Object(s.a)(r));
        for (let e = 0; e < 40; e += 2)
          n[e >> 1] >> 4 >= 8 && (t[e] = t[e].toUpperCase()),
            (15 & n[e >> 1]) >= 8 && (t[e + 1] = t[e + 1].toUpperCase());
        return '0x' + t.join('');
      }
      const h = {};
      for (let e = 0; e < 10; e++) h[String(e)] = String(e);
      for (let e = 0; e < 26; e++) h[String.fromCharCode(65 + e)] = String(10 + e);
      const p = Math.floor(
        ((b = 9007199254740991), Math.log10 ? Math.log10(b) : Math.log(b) / Math.LN10)
      );
      var b;
      function m(e) {
        let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + '00')
          .split('')
          .map(e => h[e])
          .join('');
        for (; t.length >= p; ) {
          let e = t.substring(0, p);
          t = (parseInt(e, 10) % 97) + t.substring(e.length);
        }
        let r = String(98 - (parseInt(t, 10) % 97));
        for (; r.length < 2; ) r = '0' + r;
        return r;
      }
      function g(e) {
        let t = null;
        if (
          ('string' != typeof e && d.throwArgumentError('invalid address', 'address', e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          '0x' !== e.substring(0, 2) && (e = '0x' + e),
            (t = f(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              t !== e &&
              d.throwArgumentError('bad address checksum', 'address', e);
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            e.substring(2, 4) !== m(e) &&
              d.throwArgumentError('bad icap checksum', 'address', e),
              t = new n.BN(e.substring(4), 36).toString(16);
            t.length < 40;

          )
            t = '0' + t;
          t = f('0x' + t);
        } else d.throwArgumentError('invalid address', 'address', e);
        return t;
      }
      var y = r('../../node_modules/@ethersproject/properties/lib.esm/index.js');
      const v = new a.Logger('abstract-provider/5.0.0-beta.139');
      y.Description;
      class w {
        constructor() {
          v.checkAbstract(new.target, w),
            Object(y.defineReadOnly)(this, '_isProvider', !0);
        }
        addListener(e, t) {
          return this.on(e, t);
        }
        removeListener(e, t) {
          return this.off(e, t);
        }
        static isProvider(e) {
          return !(!e || !e._isProvider);
        }
      }
      var k = function(e, t, r, n) {
        return new (r || (r = Promise))(function(i, o) {
          function s(e) {
            try {
              u(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function(e) {
                      e(t);
                    })).then(s, a);
          }
          u((n = n.apply(e, t || [])).next());
        });
      };
      const _ = new a.Logger('abstract-signer/5.0.0-beta.141'),
        S = ['chainId', 'data', 'from', 'gasLimit', 'gasPrice', 'nonce', 'to', 'value'];
      class j {
        constructor() {
          _.checkAbstract(new.target, j), Object(y.defineReadOnly)(this, '_isSigner', !0);
        }
        getBalance(e) {
          return (
            this._checkProvider('getBalance'),
            this.provider.getBalance(this.getAddress(), e)
          );
        }
        getTransactionCount(e) {
          return (
            this._checkProvider('getTransactionCount'),
            this.provider.getTransactionCount(this.getAddress(), e)
          );
        }
        estimateGas(e) {
          return (
            this._checkProvider('estimateGas'),
            Object(y.resolveProperties)(this.checkTransaction(e)).then(e =>
              this.provider.estimateGas(e)
            )
          );
        }
        call(e, t) {
          return (
            this._checkProvider('call'),
            Object(y.resolveProperties)(this.checkTransaction(e)).then(e =>
              this.provider.call(e, t)
            )
          );
        }
        sendTransaction(e) {
          return (
            this._checkProvider('sendTransaction'),
            this.populateTransaction(e).then(e =>
              this.signTransaction(e).then(e => this.provider.sendTransaction(e))
            )
          );
        }
        getChainId() {
          return (
            this._checkProvider('getChainId'),
            this.provider.getNetwork().then(e => e.chainId)
          );
        }
        getGasPrice() {
          return this._checkProvider('getGasPrice'), this.provider.getGasPrice();
        }
        resolveName(e) {
          return this._checkProvider('resolveName'), this.provider.resolveName(e);
        }
        checkTransaction(e) {
          for (const t in e)
            -1 === S.indexOf(t) &&
              _.throwArgumentError('invalid transaction key: ' + t, 'transaction', e);
          const t = Object(y.shallowCopy)(e);
          return (
            null == t.from
              ? (t.from = this.getAddress())
              : (t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then(
                  t => (
                    t[0] !== t[1] &&
                      _.throwArgumentError('from address mismatch', 'transaction', e),
                    t[0]
                  )
                )),
            t
          );
        }
        populateTransaction(e) {
          return k(this, void 0, void 0, function*() {
            const t = yield Object(y.resolveProperties)(this.checkTransaction(e));
            return (
              null != t.to &&
                (t.to = Promise.resolve(t.to).then(e => this.resolveName(e))),
              null == t.gasPrice && (t.gasPrice = this.getGasPrice()),
              null == t.nonce && (t.nonce = this.getTransactionCount('pending')),
              null == t.gasLimit &&
                (t.gasLimit = this.estimateGas(t).catch(e =>
                  _.throwError(
                    'cannot estimate gas; transaction may fail or may require manual gas limit',
                    a.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                    { tx: t }
                  )
                )),
              null == t.chainId
                ? (t.chainId = this.getChainId())
                : (t.chainId = Promise.all([
                    Promise.resolve(t.chainId),
                    this.getChainId()
                  ]).then(
                    t => (
                      0 !== t[1] &&
                        t[0] !== t[1] &&
                        _.throwArgumentError(
                          'chainId address mismatch',
                          'transaction',
                          e
                        ),
                      t[0]
                    )
                  )),
              yield Object(y.resolveProperties)(t)
            );
          });
        }
        _checkProvider(e) {
          this.provider ||
            _.throwError('missing provider', a.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: e || '_checkProvider'
            });
        }
        static isSigner(e) {
          return !(!e || !e._isSigner);
        }
      }
      var E = r('../../node_modules/@ethersproject/hash/lib.esm/index.js');
      class x {
        constructor(e) {
          Object(y.defineReadOnly)(this, 'alphabet', e),
            Object(y.defineReadOnly)(this, 'base', e.length),
            Object(y.defineReadOnly)(this, '_alphabetMap', {}),
            Object(y.defineReadOnly)(this, '_leader', e.charAt(0));
          for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t;
        }
        encode(e) {
          let t = Object(i.arrayify)(e);
          if (0 === t.length) return '';
          let r = [0];
          for (let e = 0; e < t.length; ++e) {
            let n = t[e];
            for (let e = 0; e < r.length; ++e)
              (n += r[e] << 8), (r[e] = n % this.base), (n = (n / this.base) | 0);
            for (; n > 0; ) r.push(n % this.base), (n = (n / this.base) | 0);
          }
          let n = '';
          for (let e = 0; 0 === t[e] && e < t.length - 1; ++e) n += this._leader;
          for (let e = r.length - 1; e >= 0; --e) n += this.alphabet[r[e]];
          return n;
        }
        decode(e) {
          if ('string' != typeof e) throw new TypeError('Expected String');
          let t = [];
          if (0 === e.length) return new Uint8Array(t);
          t.push(0);
          for (let r = 0; r < e.length; r++) {
            let n = this._alphabetMap[e[r]];
            if (void 0 === n) throw new Error('Non-base' + this.base + ' character');
            let i = n;
            for (let e = 0; e < t.length; ++e)
              (i += t[e] * this.base), (t[e] = 255 & i), (i >>= 8);
            for (; i > 0; ) t.push(255 & i), (i >>= 8);
          }
          for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r) t.push(0);
          return Object(i.arrayify)(new Uint8Array(t.reverse()));
        }
      }
      new x('abcdefghijklmnopqrstuvwxyz234567');
      const O = new x('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
      var A = r('../../node_modules/@ethersproject/strings/lib.esm/index.js'),
        C = r('../../node_modules/@ethersproject/pbkdf2/lib/browser.js'),
        R = r('../../node_modules/elliptic/lib/elliptic.js');
      const B = new a.Logger('signing-key/5.0.0-beta.135');
      let P = null;
      function N() {
        return P || (P = new R.ec('secp256k1')), P;
      }
      class I {
        constructor(e) {
          Object(y.defineReadOnly)(this, 'curve', 'secp256k1'),
            Object(y.defineReadOnly)(this, 'privateKey', Object(i.hexlify)(e));
          const t = N().keyFromPrivate(Object(i.arrayify)(this.privateKey));
          Object(y.defineReadOnly)(this, 'publicKey', '0x' + t.getPublic(!1, 'hex')),
            Object(y.defineReadOnly)(
              this,
              'compressedPublicKey',
              '0x' + t.getPublic(!0, 'hex')
            ),
            Object(y.defineReadOnly)(this, '_isSigningKey', !0);
        }
        _addPoint(e) {
          const t = N().keyFromPublic(Object(i.arrayify)(this.publicKey)),
            r = N().keyFromPublic(Object(i.arrayify)(e));
          return '0x' + t.pub.add(r.pub).encodeCompressed('hex');
        }
        signDigest(e) {
          const t = N()
            .keyFromPrivate(Object(i.arrayify)(this.privateKey))
            .sign(Object(i.arrayify)(e), { canonical: !0 });
          return Object(i.splitSignature)({
            recoveryParam: t.recoveryParam,
            r: Object(i.hexZeroPad)('0x' + t.r.toString(16), 32),
            s: Object(i.hexZeroPad)('0x' + t.s.toString(16), 32)
          });
        }
        computeSharedSecret(e) {
          const t = N().keyFromPrivate(Object(i.arrayify)(this.privateKey)),
            r = N().keyFromPublic(Object(i.arrayify)(T(e)));
          return Object(i.hexZeroPad)('0x' + t.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(e) {
          return !(!e || !e._isSigningKey);
        }
      }
      function T(e, t) {
        const r = Object(i.arrayify)(e);
        if (32 === r.length) {
          const e = new I(r);
          return t
            ? '0x' +
                N()
                  .keyFromPrivate(r)
                  .getPublic(!0, 'hex')
            : e.publicKey;
        }
        return 33 === r.length
          ? t
            ? Object(i.hexlify)(r)
            : '0x' +
              N()
                .keyFromPublic(r)
                .getPublic(!1, 'hex')
          : 65 === r.length
          ? t
            ? '0x' +
              N()
                .keyFromPublic(r)
                .getPublic(!0, 'hex')
            : Object(i.hexlify)(r)
          : B.throwArgumentError('invalid public or private key', 'key', '[REDACTED]');
      }
      var D = r('../../node_modules/@ethersproject/sha2/lib/browser.js');
      r('../../node_modules/@ethersproject/constants/lib.esm/index.js');
      const F = new a.Logger('transactions/5.0.0-beta.134');
      const U = [
          { name: 'nonce', maxLength: 32, numeric: !0 },
          { name: 'gasPrice', maxLength: 32, numeric: !0 },
          { name: 'gasLimit', maxLength: 32, numeric: !0 },
          { name: 'to', length: 20 },
          { name: 'value', maxLength: 32, numeric: !0 },
          { name: 'data' }
        ],
        L = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          value: !0
        };
      function M(e) {
        const t = T(e);
        return g(Object(i.hexDataSlice)(Object(s.a)(Object(i.hexDataSlice)(t, 1)), 12));
      }
      function K(e, t) {
        return M(
          (function(e, t) {
            const r = Object(i.splitSignature)(t),
              n = { r: Object(i.arrayify)(r.r), s: Object(i.arrayify)(r.s) };
            return (
              '0x' +
              N()
                .recoverPubKey(Object(i.arrayify)(e), n, r.recoveryParam)
                .encode('hex', !1)
            );
          })(Object(i.arrayify)(e), t)
        );
      }
      function H(e, t) {
        Object(y.checkProperties)(e, L);
        const r = [];
        U.forEach(function(t) {
          let n = e[t.name] || [];
          const o = {};
          t.numeric && (o.hexPad = 'left'),
            (n = Object(i.arrayify)(Object(i.hexlify)(n, o))),
            t.length &&
              n.length !== t.length &&
              n.length > 0 &&
              F.throwArgumentError(
                'invalid length for ' + t.name,
                'transaction:' + t.name,
                n
              ),
            t.maxLength &&
              ((n = Object(i.stripZeros)(n)),
              n.length > t.maxLength &&
                F.throwArgumentError(
                  'invalid length for ' + t.name,
                  'transaction:' + t.name,
                  n
                )),
            r.push(Object(i.hexlify)(n));
        });
        let n = 0;
        if (
          (null != e.chainId
            ? ((n = e.chainId),
              'number' != typeof n &&
                F.throwArgumentError('invalid transaction.chainId', 'transaction', e))
            : t &&
              !Object(i.isBytesLike)(t) &&
              t.v > 28 &&
              (n = Math.floor((t.v - 35) / 2)),
          0 !== n && (r.push(Object(i.hexlify)(n)), r.push('0x'), r.push('0x')),
          !t)
        )
          return l(r);
        const o = Object(i.splitSignature)(t);
        let s = 27 + o.recoveryParam;
        return (
          0 !== n
            ? (r.pop(),
              r.pop(),
              r.pop(),
              (s += 2 * n + 8),
              o.v > 28 &&
                o.v !== s &&
                F.throwArgumentError(
                  'transaction.chainId/signature.v mismatch',
                  'signature',
                  t
                ))
            : o.v !== s &&
              F.throwArgumentError(
                'transaction.chainId/signature.v mismatch',
                'signature',
                t
              ),
          r.push(Object(i.hexlify)(s)),
          r.push(Object(i.stripZeros)(Object(i.arrayify)(o.r))),
          r.push(Object(i.stripZeros)(Object(i.arrayify)(o.s))),
          l(r)
        );
      }
      var W = r('../../node_modules/@ethersproject/wordlists/lib/browser.js');
      const V = new a.Logger('hdnode/5.0.0-beta.138'),
        z = o.a.from(
          '0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'
        ),
        G = Object(A.c)('Bitcoin seed');
      function J(e) {
        return ((1 << e) - 1) << (8 - e);
      }
      function q(e) {
        return Object(i.hexZeroPad)(Object(i.hexlify)(e), 32);
      }
      function Y(e) {
        return O.encode(
          Object(i.concat)([
            e,
            Object(i.hexDataSlice)(Object(D.sha256)(Object(D.sha256)(e)), 0, 4)
          ])
        );
      }
      function X(e) {
        if (null == e) return W.wordlists.en;
        if ('string' == typeof e) {
          const t = W.wordlists[e];
          return null == t && V.throwArgumentError('unknown locale', 'wordlist', e), t;
        }
        return e;
      }
      const Z = {},
        Q = "m/44'/60'/0'/0/0";
      class $ {
        constructor(e, t, r, n, o, s, a, u) {
          if ((V.checkNew(new.target, $), e !== Z))
            throw new Error('HDNode constructor cannot be called directly');
          if (t) {
            const e = new I(t);
            Object(y.defineReadOnly)(this, 'privateKey', e.privateKey),
              Object(y.defineReadOnly)(this, 'publicKey', e.compressedPublicKey);
          } else
            Object(y.defineReadOnly)(this, 'privateKey', null),
              Object(y.defineReadOnly)(this, 'publicKey', Object(i.hexlify)(r));
          Object(y.defineReadOnly)(this, 'parentFingerprint', n),
            Object(y.defineReadOnly)(
              this,
              'fingerprint',
              Object(i.hexDataSlice)(
                Object(D.ripemd160)(Object(D.sha256)(this.publicKey)),
                0,
                4
              )
            ),
            Object(y.defineReadOnly)(this, 'address', M(this.publicKey)),
            Object(y.defineReadOnly)(this, 'chainCode', o),
            Object(y.defineReadOnly)(this, 'index', s),
            Object(y.defineReadOnly)(this, 'depth', a),
            null == u
              ? (Object(y.defineReadOnly)(this, 'mnemonic', null),
                Object(y.defineReadOnly)(this, 'path', null))
              : 'string' == typeof u
              ? (Object(y.defineReadOnly)(this, 'mnemonic', null),
                Object(y.defineReadOnly)(this, 'path', u))
              : (Object(y.defineReadOnly)(this, 'mnemonic', u),
                Object(y.defineReadOnly)(this, 'path', u.path));
        }
        get extendedKey() {
          if (this.depth >= 256) throw new Error('Depth too large!');
          return Y(
            Object(i.concat)([
              null != this.privateKey ? '0x0488ADE4' : '0x0488B21E',
              Object(i.hexlify)(this.depth),
              this.parentFingerprint,
              Object(i.hexZeroPad)(Object(i.hexlify)(this.index), 4),
              this.chainCode,
              null != this.privateKey
                ? Object(i.concat)(['0x00', this.privateKey])
                : this.publicKey
            ])
          );
        }
        neuter() {
          return new $(
            Z,
            null,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.index,
            this.depth,
            this.path
          );
        }
        _derive(e) {
          if (e > 4294967295) throw new Error('invalid index - ' + String(e));
          let t = this.path;
          t && (t += '/' + (2147483647 & e));
          const r = new Uint8Array(37);
          if (2147483648 & e) {
            if (!this.privateKey) throw new Error('cannot derive child of neutered node');
            r.set(Object(i.arrayify)(this.privateKey), 1), t && (t += "'");
          } else r.set(Object(i.arrayify)(this.publicKey));
          for (let t = 24; t >= 0; t -= 8) r[33 + (t >> 3)] = (e >> (24 - t)) & 255;
          const n = Object(i.arrayify)(
              Object(D.computeHmac)(D.SupportedAlgorithm.sha512, this.chainCode, r)
            ),
            s = n.slice(0, 32),
            a = n.slice(32);
          let u = null,
            c = null;
          if (this.privateKey)
            u = q(
              o.a
                .from(s)
                .add(this.privateKey)
                .mod(z)
            );
          else {
            c = new I(Object(i.hexlify)(s))._addPoint(this.publicKey);
          }
          let l = t;
          const d = this.mnemonic;
          return (
            d &&
              (l = Object.freeze({
                phrase: d.phrase,
                path: t,
                locale: d.locale || 'en'
              })),
            new $(Z, u, c, this.fingerprint, q(a), e, this.depth + 1, l)
          );
        }
        derivePath(e) {
          const t = e.split('/');
          if (0 === t.length || ('m' === t[0] && 0 !== this.depth))
            throw new Error('invalid path - ' + e);
          'm' === t[0] && t.shift();
          let r = this;
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (n.match(/^[0-9]+'$/)) {
              const e = parseInt(n.substring(0, n.length - 1));
              if (e >= 2147483648) throw new Error('invalid path index - ' + n);
              r = r._derive(2147483648 + e);
            } else {
              if (!n.match(/^[0-9]+$/)) throw new Error('invalid path component - ' + n);
              {
                const e = parseInt(n);
                if (e >= 2147483648) throw new Error('invalid path index - ' + n);
                r = r._derive(e);
              }
            }
          }
          return r;
        }
        static _fromSeed(e, t) {
          const r = Object(i.arrayify)(e);
          if (r.length < 16 || r.length > 64) throw new Error('invalid seed');
          const n = Object(i.arrayify)(
            Object(D.computeHmac)(D.SupportedAlgorithm.sha512, G, r)
          );
          return new $(Z, q(n.slice(0, 32)), null, '0x00000000', q(n.slice(32)), 0, 0, t);
        }
        static fromMnemonic(e, t, r) {
          return (
            (e = te(ee(e, (r = X(r))), r)),
            $._fromSeed(
              (function(e, t) {
                t || (t = '');
                const r = Object(A.c)('mnemonic' + t, A.a.NFKD);
                return Object(C.pbkdf2)(Object(A.c)(e, A.a.NFKD), r, 2048, 64, 'sha512');
              })(e, t),
              { phrase: e, path: 'm', locale: r.locale }
            )
          );
        }
        static fromSeed(e) {
          return $._fromSeed(e, null);
        }
        static fromExtendedKey(e) {
          const t = O.decode(e);
          (82 === t.length && Y(t.slice(0, 78)) === e) ||
            V.throwArgumentError('invalid extended key', 'extendedKey', '[REDACTED]');
          const r = t[4],
            n = Object(i.hexlify)(t.slice(5, 9)),
            o = parseInt(Object(i.hexlify)(t.slice(9, 13)).substring(2), 16),
            s = Object(i.hexlify)(t.slice(13, 45)),
            a = t.slice(45, 78);
          switch (Object(i.hexlify)(t.slice(0, 4))) {
            case '0x0488b21e':
            case '0x043587cf':
              return new $(Z, null, Object(i.hexlify)(a), n, s, o, r, null);
            case '0x0488ade4':
            case '0x04358394 ':
              if (0 !== a[0]) break;
              return new $(Z, Object(i.hexlify)(a.slice(1)), null, n, s, o, r, null);
          }
          return V.throwError('invalid extended key', 'extendedKey', '[REDACTED]');
        }
      }
      function ee(e, t) {
        (t = X(t)), V.checkNormalize();
        const r = t.split(e);
        if (r.length % 3 != 0) throw new Error('invalid mnemonic');
        const n = Object(i.arrayify)(new Uint8Array(Math.ceil((11 * r.length) / 8)));
        let o = 0;
        for (let e = 0; e < r.length; e++) {
          let i = t.getWordIndex(r[e].normalize('NFKD'));
          if (-1 === i) throw new Error('invalid mnemonic');
          for (let e = 0; e < 11; e++)
            i & (1 << (10 - e)) && (n[o >> 3] |= 1 << (7 - (o % 8))), o++;
        }
        const s = (32 * r.length) / 3,
          a = J(r.length / 3);
        if (
          (Object(i.arrayify)(Object(D.sha256)(n.slice(0, s / 8)))[0] & a) !==
          (n[n.length - 1] & a)
        )
          throw new Error('invalid checksum');
        return Object(i.hexlify)(n.slice(0, s / 8));
      }
      function te(e, t) {
        if (
          ((t = X(t)),
          (e = Object(i.arrayify)(e)).length % 4 != 0 || e.length < 16 || e.length > 32)
        )
          throw new Error('invalid entropy');
        const r = [0];
        let n = 11;
        for (let t = 0; t < e.length; t++)
          n > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= e[t]), (n -= 8))
            : ((r[r.length - 1] <<= n),
              (r[r.length - 1] |= e[t] >> (8 - n)),
              r.push(e[t] & ((1 << (8 - n)) - 1)),
              (n += 3));
        const o = e.length / 4,
          s = Object(i.arrayify)(Object(D.sha256)(e))[0] & J(o);
        return (
          (r[r.length - 1] <<= o),
          (r[r.length - 1] |= s >> (8 - o)),
          t.join(r.map(e => t.getWord(e)))
        );
      }
      var re = r('../../node_modules/@ethersproject/random/lib/browser.js'),
        ne = r('../../node_modules/aes-js/index.js'),
        ie = r.n(ne);
      function oe(e) {
        return (
          'string' == typeof e && '0x' !== e.substring(0, 2) && (e = '0x' + e),
          Object(i.arrayify)(e)
        );
      }
      function se(e, t) {
        for (e = String(e); e.length < t; ) e = '0' + e;
        return e;
      }
      function ae(e) {
        return 'string' == typeof e ? Object(A.c)(e, A.a.NFKC) : Object(i.arrayify)(e);
      }
      function ue(e, t) {
        let r = e;
        const n = t.toLowerCase().split('/');
        for (let e = 0; e < n.length; e++) {
          let t = null;
          for (const i in r)
            if (i.toLowerCase() === n[e]) {
              t = r[i];
              break;
            }
          if (null === t) return null;
          r = t;
        }
        return r;
      }
      const ce = new a.Logger('json-wallets/5.0.0-beta.137');
      class le extends y.Description {
        isCrowdsaleAccount(e) {
          return !(!e || !e._isCrowdsaleAccount);
        }
      }
      function de(e, t) {
        const r = JSON.parse(e);
        t = ae(t);
        const n = g(ue(r, 'ethaddr')),
          o = oe(ue(r, 'encseed'));
        (o && o.length % 16 == 0) || ce.throwArgumentError('invalid encseed', 'json', e);
        const a = Object(i.arrayify)(Object(C.pbkdf2)(t, t, 2e3, 32, 'sha256')).slice(
            0,
            16
          ),
          u = o.slice(0, 16),
          c = o.slice(16),
          l = new ie.a.ModeOfOperation.cbc(a, u),
          d = ie.a.padding.pkcs7.strip(Object(i.arrayify)(l.decrypt(c)));
        let f = '';
        for (let e = 0; e < d.length; e++) f += String.fromCharCode(d[e]);
        const h = Object(A.c)(f),
          p = Object(s.a)(h);
        return new le({ _isCrowdsaleAccount: !0, address: n, privateKey: p });
      }
      function fe(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return t.encseed && t.ethaddr;
      }
      function he(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return !(
          !t.version ||
          parseInt(t.version) !== t.version ||
          3 !== parseInt(t.version)
        );
      }
      var pe = r(
          '../../node_modules/@ethersproject/json-wallets/node_modules/scrypt-js/scrypt.js'
        ),
        be = r(
          '../../node_modules/@ethersproject/json-wallets/node_modules/uuid/uuid.js'
        ),
        me = r.n(be),
        ge = function(e, t, r, n) {
          return new (r || (r = Promise))(function(i, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function(e) {
                        e(t);
                      })).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      const ye = new a.Logger('json-wallets/5.0.0-beta.137');
      function ve(e) {
        return null != e && e.mnemonic && e.mnemonic.phrase;
      }
      class we extends y.Description {
        isKeystoreAccount(e) {
          return !(!e || !e._isKeystoreAccount);
        }
      }
      function ke(e, t) {
        const r = oe(ue(e, 'crypto/ciphertext'));
        if (
          Object(i.hexlify)(
            Object(s.a)(Object(i.concat)([t.slice(16, 32), r]))
          ).substring(2) !== ue(e, 'crypto/mac').toLowerCase()
        )
          throw new Error('invalid password');
        const n = (function(e, t, r) {
          if ('aes-128-ctr' === ue(e, 'crypto/cipher')) {
            const n = oe(ue(e, 'crypto/cipherparams/iv')),
              o = new ie.a.Counter(n),
              s = new ie.a.ModeOfOperation.ctr(t, o);
            return Object(i.arrayify)(s.decrypt(r));
          }
          return null;
        })(e, t.slice(0, 16), r);
        n ||
          ye.throwError('unsupported cipher', a.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: 'decrypt'
          });
        const o = t.slice(32, 64),
          u = M(n);
        if (e.address) {
          let t = e.address.toLowerCase();
          if (('0x' !== t.substring(0, 2) && (t = '0x' + t), g(t) !== u))
            throw new Error('address mismatch');
        }
        const c = {
          _isKeystoreAccount: !0,
          address: u,
          privateKey: Object(i.hexlify)(n)
        };
        if ('0.1' === ue(e, 'x-ethers/version')) {
          const t = oe(ue(e, 'x-ethers/mnemonicCiphertext')),
            r = oe(ue(e, 'x-ethers/mnemonicCounter')),
            n = new ie.a.Counter(r),
            s = new ie.a.ModeOfOperation.ctr(o, n),
            u = ue(e, 'x-ethers/path') || Q,
            l = ue(e, 'x-ethers/locale') || 'en',
            d = Object(i.arrayify)(s.decrypt(t));
          try {
            const e = te(d, l),
              t = $.fromMnemonic(e, null, l).derivePath(u);
            if (t.privateKey != c.privateKey) throw new Error('mnemonic mismatch');
            c.mnemonic = t.mnemonic;
          } catch (e) {
            if (e.code !== a.Logger.errors.INVALID_ARGUMENT || 'wordlist' !== e.argument)
              throw e;
          }
        }
        return new we(c);
      }
      function _e(e, t, r, n, o) {
        return Object(i.arrayify)(Object(C.pbkdf2)(e, t, r, n, o));
      }
      function Se(e, t, r, n, i) {
        return Promise.resolve(_e(e, t, r, n, i));
      }
      function je(e, t, r, n, i) {
        const o = ae(t),
          s = ue(e, 'crypto/kdf');
        if (s && 'string' == typeof s) {
          const t = function(e, t) {
            return ye.throwArgumentError(
              'invalid key-derivation function parameters',
              e,
              t
            );
          };
          if ('scrypt' === s.toLowerCase()) {
            const r = oe(ue(e, 'crypto/kdfparams/salt')),
              a = parseInt(ue(e, 'crypto/kdfparams/n')),
              u = parseInt(ue(e, 'crypto/kdfparams/r')),
              c = parseInt(ue(e, 'crypto/kdfparams/p'));
            (a && u && c) || t('kdf', s), 0 != (a & (a - 1)) && t('N', a);
            const l = parseInt(ue(e, 'crypto/kdfparams/dklen'));
            return 32 !== l && t('dklen', l), n(o, r, a, u, c, 64, i);
          }
          if ('pbkdf2' === s.toLowerCase()) {
            const n = oe(ue(e, 'crypto/kdfparams/salt'));
            let i = null;
            const s = ue(e, 'crypto/kdfparams/prf');
            'hmac-sha256' === s
              ? (i = 'sha256')
              : 'hmac-sha512' === s
              ? (i = 'sha512')
              : t('prf', s);
            const a = parseInt(ue(e, 'crypto/kdfparams/c')),
              u = parseInt(ue(e, 'crypto/kdfparams/dklen'));
            return 32 !== u && t('dklen', u), r(o, n, a, u, i);
          }
        }
        return ye.throwArgumentError('unsupported key-derivation function', 'kdf', s);
      }
      function Ee(e, t, r) {
        if (fe(e)) {
          r && r(0);
          const n = de(e, t);
          return r && r(1), Promise.resolve(n);
        }
        return he(e)
          ? (function(e, t, r) {
              return ge(this, void 0, void 0, function*() {
                const n = JSON.parse(e);
                return ke(n, yield je(n, t, Se, pe.scrypt, r));
              });
            })(e, t, r)
          : Promise.reject(new Error('invalid JSON wallet'));
      }
      function xe(e, t) {
        if (fe(e)) return de(e, t);
        if (he(e))
          return (function(e, t) {
            const r = JSON.parse(e);
            return ke(r, je(r, t, _e, pe.syncScrypt));
          })(e, t);
        throw new Error('invalid JSON wallet');
      }
      const Oe = new a.Logger('wallet/5.0.0-beta.139');
      class Ae extends j {
        constructor(e, t) {
          if (
            (Oe.checkNew(new.target, Ae),
            super(),
            null != (r = e) &&
              Object(i.isHexString)(r.privateKey, 32) &&
              null != r.address)
          ) {
            const t = new I(e.privateKey);
            if (
              (Object(y.defineReadOnly)(this, '_signingKey', () => t),
              Object(y.defineReadOnly)(this, 'address', M(this.publicKey)),
              this.address !== g(e.address) &&
                Oe.throwArgumentError(
                  'privateKey/address mismatch',
                  'privateKey',
                  '[REDCACTED]'
                ),
              (function(e) {
                const t = e.mnemonic;
                return t && t.phrase;
              })(e))
            ) {
              const t = e.mnemonic;
              Object(y.defineReadOnly)(this, '_mnemonic', () => ({
                phrase: t.phrase,
                path: t.path || Q,
                locale: t.locale || 'en'
              }));
              const r = this.mnemonic;
              M(
                $.fromMnemonic(r.phrase, null, r.locale).derivePath(r.path).privateKey
              ) !== this.address &&
                Oe.throwArgumentError(
                  'mnemonic/address mismatch',
                  'privateKey',
                  '[REDCACTED]'
                );
            } else Object(y.defineReadOnly)(this, '_mnemonic', () => null);
          } else {
            if (I.isSigningKey(e))
              'secp256k1' !== e.curve &&
                Oe.throwArgumentError(
                  'unsupported curve; must be secp256k1',
                  'privateKey',
                  '[REDACTED]'
                ),
                Object(y.defineReadOnly)(this, '_signingKey', () => e);
            else {
              const t = new I(e);
              Object(y.defineReadOnly)(this, '_signingKey', () => t);
            }
            Object(y.defineReadOnly)(this, '_mnemonic', () => null),
              Object(y.defineReadOnly)(this, 'address', M(this.publicKey));
          }
          var r;
          t &&
            !w.isProvider(t) &&
            Oe.throwArgumentError('invalid provider', 'provider', t),
            Object(y.defineReadOnly)(this, 'provider', t || null);
        }
        get mnemonic() {
          return this._mnemonic();
        }
        get privateKey() {
          return this._signingKey().privateKey;
        }
        get publicKey() {
          return this._signingKey().publicKey;
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        connect(e) {
          return new Ae(this, e);
        }
        signTransaction(e) {
          return Object(y.resolveProperties)(e).then(e => {
            if (null != e.from) {
              if (g(e.from) !== this.address)
                throw new Error('transaction from address mismatch');
              delete e.from;
            }
            const t = this._signingKey().signDigest(Object(s.a)(H(e)));
            return H(e, t);
          });
        }
        signMessage(e) {
          return Promise.resolve(
            Object(i.joinSignature)(
              this._signingKey().signDigest(Object(E.hashMessage)(e))
            )
          );
        }
        encrypt(e, t, r) {
          if (
            ('function' != typeof t || r || ((r = t), (t = {})),
            r && 'function' != typeof r)
          )
            throw new Error('invalid callback');
          return (
            t || (t = {}),
            (function(e, t, r, n) {
              try {
                if (g(e.address) !== M(e.privateKey))
                  throw new Error('address/privateKey mismatch');
                if (ve(e)) {
                  const t = e.mnemonic;
                  if (
                    $.fromMnemonic(t.phrase, null, t.locale).derivePath(t.path || Q)
                      .privateKey != e.privateKey
                  )
                    throw new Error('mnemonic mismatch');
                }
              } catch (e) {
                return Promise.reject(e);
              }
              'function' != typeof r || n || ((n = r), (r = {})), r || (r = {});
              const o = Object(i.arrayify)(e.privateKey),
                a = ae(t);
              let u = null,
                c = null,
                l = null;
              if (ve(e)) {
                const t = e.mnemonic;
                (u = Object(i.arrayify)(ee(t.phrase, t.locale || 'en'))),
                  (c = t.path || Q),
                  (l = t.locale || 'en');
              }
              let d = r.client;
              d || (d = 'ethers.js');
              let f = null;
              f = r.salt ? Object(i.arrayify)(r.salt) : Object(re.randomBytes)(32);
              let h = null;
              if (r.iv) {
                if (((h = Object(i.arrayify)(r.iv)), 16 !== h.length))
                  throw new Error('invalid iv');
              } else h = Object(re.randomBytes)(16);
              let p = null;
              if (r.uuid) {
                if (((p = Object(i.arrayify)(r.uuid)), 16 !== p.length))
                  throw new Error('invalid uuid');
              } else p = Object(re.randomBytes)(16);
              let b = 1 << 17,
                m = 8,
                y = 1;
              return (
                r.scrypt &&
                  (r.scrypt.N && (b = r.scrypt.N),
                  r.scrypt.r && (m = r.scrypt.r),
                  r.scrypt.p && (y = r.scrypt.p)),
                pe.scrypt(a, f, b, m, y, 64, n).then(t => {
                  const r = (t = Object(i.arrayify)(t)).slice(0, 16),
                    n = t.slice(16, 32),
                    a = t.slice(32, 64),
                    g = new ie.a.Counter(h),
                    v = new ie.a.ModeOfOperation.ctr(r, g),
                    w = Object(i.arrayify)(v.encrypt(o)),
                    k = Object(s.a)(Object(i.concat)([n, w])),
                    _ = {
                      address: e.address.substring(2).toLowerCase(),
                      id: me.a.v4({ random: p }),
                      version: 3,
                      Crypto: {
                        cipher: 'aes-128-ctr',
                        cipherparams: { iv: Object(i.hexlify)(h).substring(2) },
                        ciphertext: Object(i.hexlify)(w).substring(2),
                        kdf: 'scrypt',
                        kdfparams: {
                          salt: Object(i.hexlify)(f).substring(2),
                          n: b,
                          dklen: 32,
                          p: y,
                          r: m
                        },
                        mac: k.substring(2)
                      }
                    };
                  if (u) {
                    const e = Object(re.randomBytes)(16),
                      t = new ie.a.Counter(e),
                      r = new ie.a.ModeOfOperation.ctr(a, t),
                      n = Object(i.arrayify)(r.encrypt(u)),
                      o = new Date(),
                      s =
                        o.getUTCFullYear() +
                        '-' +
                        se(o.getUTCMonth() + 1, 2) +
                        '-' +
                        se(o.getUTCDate(), 2) +
                        'T' +
                        se(o.getUTCHours(), 2) +
                        '-' +
                        se(o.getUTCMinutes(), 2) +
                        '-' +
                        se(o.getUTCSeconds(), 2) +
                        '.0Z';
                    _['x-ethers'] = {
                      client: d,
                      gethFilename: 'UTC--' + s + '--' + _.address,
                      mnemonicCounter: Object(i.hexlify)(e).substring(2),
                      mnemonicCiphertext: Object(i.hexlify)(n).substring(2),
                      path: c,
                      locale: l,
                      version: '0.1'
                    };
                  }
                  return JSON.stringify(_);
                })
              );
            })(this, e, t, r)
          );
        }
        static createRandom(e) {
          let t = Object(re.randomBytes)(16);
          e || (e = {}),
            e.extraEntropy &&
              (t = Object(i.arrayify)(
                Object(i.hexDataSlice)(
                  Object(s.a)(Object(i.concat)([t, e.extraEntropy])),
                  0,
                  16
                )
              ));
          const r = te(t, e.locale);
          return Ae.fromMnemonic(r, e.path, e.locale);
        }
        static fromEncryptedJson(e, t, r) {
          return Ee(e, t, r).then(e => new Ae(e));
        }
        static fromEncryptedJsonSync(e, t) {
          return new Ae(xe(e, t));
        }
        static fromMnemonic(e, t, r) {
          return t || (t = Q), new Ae($.fromMnemonic(e, null, r).derivePath(t));
        }
      }
      function Ce(e, t) {
        return K(Object(E.hashMessage)(e), t);
      }
    },
    '../../node_modules/@ethersproject/wordlists/lib/_version.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.version = 'wordlists/5.0.0-beta.135');
    },
    '../../node_modules/@ethersproject/wordlists/lib/browser.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = r('../../node_modules/@ethersproject/wordlists/lib/wordlist.js');
      t.Wordlist = n.Wordlist;
      var i = {
        en: r('../../node_modules/@ethersproject/wordlists/lib/lang-en.js').langEn
      };
      t.wordlists = i;
    },
    '../../node_modules/@ethersproject/wordlists/lib/lang-en.js': function(e, t, r) {
      'use strict';
      var n,
        i =
          (this && this.__extends) ||
          ((n = function(e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              })(e, t);
          }),
          function(e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = r('../../node_modules/@ethersproject/wordlists/lib/wordlist.js'),
        s = null;
      function a(e) {
        if (
          null == s &&
          ((s = 'AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo'
            .replace(/([A-Z])/g, ' $1')
            .toLowerCase()
            .substring(1)
            .split(' ')),
          '0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60' !==
            o.Wordlist.check(e))
        )
          throw ((s = null), new Error('BIP39 Wordlist for en (English) FAILED'));
      }
      var u = new ((function(e) {
        function t() {
          return e.call(this, 'en') || this;
        }
        return (
          i(t, e),
          (t.prototype.getWord = function(e) {
            return a(this), s[e];
          }),
          (t.prototype.getWordIndex = function(e) {
            return a(this), s.indexOf(e);
          }),
          t
        );
      })(o.Wordlist))();
      (t.langEn = u), o.Wordlist.register(u);
    },
    '../../node_modules/@ethersproject/wordlists/lib/wordlist.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = r('../../node_modules/@ethersproject/hash/lib.esm/index.js'),
        i = r('../../node_modules/@ethersproject/properties/lib.esm/index.js'),
        o = r('../../node_modules/@ethersproject/logger/lib.esm/index.js'),
        s = r('../../node_modules/@ethersproject/wordlists/lib/_version.js');
      t.logger = new o.Logger(s.version);
      var a = (function() {
        function e(r) {
          var n = this.constructor;
          t.logger.checkAbstract(n, e), i.defineReadOnly(this, 'locale', r);
        }
        return (
          (e.prototype.split = function(e) {
            return e.toLowerCase().split(/ +/g);
          }),
          (e.prototype.join = function(e) {
            return e.join(' ');
          }),
          (e.check = function(e) {
            for (var t = [], r = 0; r < 2048; r++) {
              var i = e.getWord(r);
              if (r !== e.getWordIndex(i)) return '0x';
              t.push(i);
            }
            return n.id(t.join('\n') + '\n');
          }),
          (e.register = function(e, t) {
            t || (t = e.locale);
          }),
          e
        );
      })();
      t.Wordlist = a;
    },
    '../../node_modules/@stablelib/utf8/lib/utf8.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = 'utf8: invalid source encoding';
      function i(e) {
        for (var t = 0, r = 0; r < e.length; r++) {
          var n = e.charCodeAt(r);
          if (n < 128) t += 1;
          else if (n < 2048) t += 2;
          else if (n < 55296) t += 3;
          else {
            if (!(n <= 57343)) throw new Error('utf8: invalid string');
            if (r >= e.length - 1) throw new Error('utf8: invalid string');
            r++, (t += 4);
          }
        }
        return t;
      }
      (t.encode = function(e) {
        for (var t = new Uint8Array(i(e)), r = 0, n = 0; n < e.length; n++) {
          var o = e.charCodeAt(n);
          o < 128
            ? (t[r++] = o)
            : o < 2048
            ? ((t[r++] = 192 | (o >> 6)), (t[r++] = 128 | (63 & o)))
            : o < 55296
            ? ((t[r++] = 224 | (o >> 12)),
              (t[r++] = 128 | ((o >> 6) & 63)),
              (t[r++] = 128 | (63 & o)))
            : (n++,
              (o = (1023 & o) << 10),
              (o |= 1023 & e.charCodeAt(n)),
              (o += 65536),
              (t[r++] = 240 | (o >> 18)),
              (t[r++] = 128 | ((o >> 12) & 63)),
              (t[r++] = 128 | ((o >> 6) & 63)),
              (t[r++] = 128 | (63 & o)));
        }
        return t;
      }),
        (t.encodedLength = i),
        (t.decode = function(e) {
          for (var t = [], r = 0; r < e.length; r++) {
            var i = e[r];
            if (128 & i) {
              var o = void 0;
              if (i < 224) {
                if (r >= e.length) throw new Error(n);
                if (128 != (192 & (s = e[++r]))) throw new Error(n);
                (i = ((31 & i) << 6) | (63 & s)), (o = 128);
              } else if (i < 240) {
                if (r >= e.length - 1) throw new Error(n);
                var s = e[++r],
                  a = e[++r];
                if (128 != (192 & s) || 128 != (192 & a)) throw new Error(n);
                (i = ((15 & i) << 12) | ((63 & s) << 6) | (63 & a)), (o = 2048);
              } else {
                if (!(i < 248)) throw new Error(n);
                if (r >= e.length - 2) throw new Error(n);
                (s = e[++r]), (a = e[++r]);
                var u = e[++r];
                if (128 != (192 & s) || 128 != (192 & a) || 128 != (192 & u))
                  throw new Error(n);
                (i = ((15 & i) << 18) | ((63 & s) << 12) | ((63 & a) << 6) | (63 & u)),
                  (o = 65536);
              }
              if (i < o || (i >= 55296 && i <= 57343)) throw new Error(n);
              if (i >= 65536) {
                if (i > 1114111) throw new Error(n);
                (i -= 65536),
                  t.push(String.fromCharCode(55296 | (i >> 10))),
                  (i = 56320 | (1023 & i));
              }
            }
            t.push(String.fromCharCode(i));
          }
          return t.join('');
        });
    },
    '../../node_modules/aes-js/index.js': function(e, t, r) {
      'use strict';
      !(function(t) {
        function r(e) {
          return parseInt(e) === e;
        }
        function n(e) {
          if (!r(e.length)) return !1;
          for (var t = 0; t < e.length; t++)
            if (!r(e[t]) || e[t] < 0 || e[t] > 255) return !1;
          return !0;
        }
        function i(e, t) {
          if (e.buffer && ArrayBuffer.isView(e) && 'Uint8Array' === e.name)
            return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
          if (Array.isArray(e)) {
            if (!n(e)) throw new Error('Array contains invalid value: ' + e);
            return new Uint8Array(e);
          }
          if (r(e.length) && n(e)) return new Uint8Array(e);
          throw new Error('unsupported array-like object');
        }
        function o(e) {
          return new Uint8Array(e);
        }
        function s(e, t, r, n, i) {
          (null == n && null == i) ||
            (e = e.slice ? e.slice(n, i) : Array.prototype.slice.call(e, n, i)),
            t.set(e, r);
        }
        var a,
          u = {
            toBytes: function(e) {
              var t = [],
                r = 0;
              for (e = encodeURI(e); r < e.length; ) {
                var n = e.charCodeAt(r++);
                37 === n ? (t.push(parseInt(e.substr(r, 2), 16)), (r += 2)) : t.push(n);
              }
              return i(t);
            },
            fromBytes: function(e) {
              for (var t = [], r = 0; r < e.length; ) {
                var n = e[r];
                n < 128
                  ? (t.push(String.fromCharCode(n)), r++)
                  : n > 191 && n < 224
                  ? (t.push(String.fromCharCode(((31 & n) << 6) | (63 & e[r + 1]))),
                    (r += 2))
                  : (t.push(
                      String.fromCharCode(
                        ((15 & n) << 12) | ((63 & e[r + 1]) << 6) | (63 & e[r + 2])
                      )
                    ),
                    (r += 3));
              }
              return t.join('');
            }
          },
          c =
            ((a = '0123456789abcdef'),
            {
              toBytes: function(e) {
                for (var t = [], r = 0; r < e.length; r += 2)
                  t.push(parseInt(e.substr(r, 2), 16));
                return t;
              },
              fromBytes: function(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                  var n = e[r];
                  t.push(a[(240 & n) >> 4] + a[15 & n]);
                }
                return t.join('');
              }
            }),
          l = { 16: 10, 24: 12, 32: 14 },
          d = [
            1,
            2,
            4,
            8,
            16,
            32,
            64,
            128,
            27,
            54,
            108,
            216,
            171,
            77,
            154,
            47,
            94,
            188,
            99,
            198,
            151,
            53,
            106,
            212,
            179,
            125,
            250,
            239,
            197,
            145
          ],
          f = [
            99,
            124,
            119,
            123,
            242,
            107,
            111,
            197,
            48,
            1,
            103,
            43,
            254,
            215,
            171,
            118,
            202,
            130,
            201,
            125,
            250,
            89,
            71,
            240,
            173,
            212,
            162,
            175,
            156,
            164,
            114,
            192,
            183,
            253,
            147,
            38,
            54,
            63,
            247,
            204,
            52,
            165,
            229,
            241,
            113,
            216,
            49,
            21,
            4,
            199,
            35,
            195,
            24,
            150,
            5,
            154,
            7,
            18,
            128,
            226,
            235,
            39,
            178,
            117,
            9,
            131,
            44,
            26,
            27,
            110,
            90,
            160,
            82,
            59,
            214,
            179,
            41,
            227,
            47,
            132,
            83,
            209,
            0,
            237,
            32,
            252,
            177,
            91,
            106,
            203,
            190,
            57,
            74,
            76,
            88,
            207,
            208,
            239,
            170,
            251,
            67,
            77,
            51,
            133,
            69,
            249,
            2,
            127,
            80,
            60,
            159,
            168,
            81,
            163,
            64,
            143,
            146,
            157,
            56,
            245,
            188,
            182,
            218,
            33,
            16,
            255,
            243,
            210,
            205,
            12,
            19,
            236,
            95,
            151,
            68,
            23,
            196,
            167,
            126,
            61,
            100,
            93,
            25,
            115,
            96,
            129,
            79,
            220,
            34,
            42,
            144,
            136,
            70,
            238,
            184,
            20,
            222,
            94,
            11,
            219,
            224,
            50,
            58,
            10,
            73,
            6,
            36,
            92,
            194,
            211,
            172,
            98,
            145,
            149,
            228,
            121,
            231,
            200,
            55,
            109,
            141,
            213,
            78,
            169,
            108,
            86,
            244,
            234,
            101,
            122,
            174,
            8,
            186,
            120,
            37,
            46,
            28,
            166,
            180,
            198,
            232,
            221,
            116,
            31,
            75,
            189,
            139,
            138,
            112,
            62,
            181,
            102,
            72,
            3,
            246,
            14,
            97,
            53,
            87,
            185,
            134,
            193,
            29,
            158,
            225,
            248,
            152,
            17,
            105,
            217,
            142,
            148,
            155,
            30,
            135,
            233,
            206,
            85,
            40,
            223,
            140,
            161,
            137,
            13,
            191,
            230,
            66,
            104,
            65,
            153,
            45,
            15,
            176,
            84,
            187,
            22
          ],
          h = [
            82,
            9,
            106,
            213,
            48,
            54,
            165,
            56,
            191,
            64,
            163,
            158,
            129,
            243,
            215,
            251,
            124,
            227,
            57,
            130,
            155,
            47,
            255,
            135,
            52,
            142,
            67,
            68,
            196,
            222,
            233,
            203,
            84,
            123,
            148,
            50,
            166,
            194,
            35,
            61,
            238,
            76,
            149,
            11,
            66,
            250,
            195,
            78,
            8,
            46,
            161,
            102,
            40,
            217,
            36,
            178,
            118,
            91,
            162,
            73,
            109,
            139,
            209,
            37,
            114,
            248,
            246,
            100,
            134,
            104,
            152,
            22,
            212,
            164,
            92,
            204,
            93,
            101,
            182,
            146,
            108,
            112,
            72,
            80,
            253,
            237,
            185,
            218,
            94,
            21,
            70,
            87,
            167,
            141,
            157,
            132,
            144,
            216,
            171,
            0,
            140,
            188,
            211,
            10,
            247,
            228,
            88,
            5,
            184,
            179,
            69,
            6,
            208,
            44,
            30,
            143,
            202,
            63,
            15,
            2,
            193,
            175,
            189,
            3,
            1,
            19,
            138,
            107,
            58,
            145,
            17,
            65,
            79,
            103,
            220,
            234,
            151,
            242,
            207,
            206,
            240,
            180,
            230,
            115,
            150,
            172,
            116,
            34,
            231,
            173,
            53,
            133,
            226,
            249,
            55,
            232,
            28,
            117,
            223,
            110,
            71,
            241,
            26,
            113,
            29,
            41,
            197,
            137,
            111,
            183,
            98,
            14,
            170,
            24,
            190,
            27,
            252,
            86,
            62,
            75,
            198,
            210,
            121,
            32,
            154,
            219,
            192,
            254,
            120,
            205,
            90,
            244,
            31,
            221,
            168,
            51,
            136,
            7,
            199,
            49,
            177,
            18,
            16,
            89,
            39,
            128,
            236,
            95,
            96,
            81,
            127,
            169,
            25,
            181,
            74,
            13,
            45,
            229,
            122,
            159,
            147,
            201,
            156,
            239,
            160,
            224,
            59,
            77,
            174,
            42,
            245,
            176,
            200,
            235,
            187,
            60,
            131,
            83,
            153,
            97,
            23,
            43,
            4,
            126,
            186,
            119,
            214,
            38,
            225,
            105,
            20,
            99,
            85,
            33,
            12,
            125
          ],
          p = [
            3328402341,
            4168907908,
            4000806809,
            4135287693,
            4294111757,
            3597364157,
            3731845041,
            2445657428,
            1613770832,
            33620227,
            3462883241,
            1445669757,
            3892248089,
            3050821474,
            1303096294,
            3967186586,
            2412431941,
            528646813,
            2311702848,
            4202528135,
            4026202645,
            2992200171,
            2387036105,
            4226871307,
            1101901292,
            3017069671,
            1604494077,
            1169141738,
            597466303,
            1403299063,
            3832705686,
            2613100635,
            1974974402,
            3791519004,
            1033081774,
            1277568618,
            1815492186,
            2118074177,
            4126668546,
            2211236943,
            1748251740,
            1369810420,
            3521504564,
            4193382664,
            3799085459,
            2883115123,
            1647391059,
            706024767,
            134480908,
            2512897874,
            1176707941,
            2646852446,
            806885416,
            932615841,
            168101135,
            798661301,
            235341577,
            605164086,
            461406363,
            3756188221,
            3454790438,
            1311188841,
            2142417613,
            3933566367,
            302582043,
            495158174,
            1479289972,
            874125870,
            907746093,
            3698224818,
            3025820398,
            1537253627,
            2756858614,
            1983593293,
            3084310113,
            2108928974,
            1378429307,
            3722699582,
            1580150641,
            327451799,
            2790478837,
            3117535592,
            0,
            3253595436,
            1075847264,
            3825007647,
            2041688520,
            3059440621,
            3563743934,
            2378943302,
            1740553945,
            1916352843,
            2487896798,
            2555137236,
            2958579944,
            2244988746,
            3151024235,
            3320835882,
            1336584933,
            3992714006,
            2252555205,
            2588757463,
            1714631509,
            293963156,
            2319795663,
            3925473552,
            67240454,
            4269768577,
            2689618160,
            2017213508,
            631218106,
            1269344483,
            2723238387,
            1571005438,
            2151694528,
            93294474,
            1066570413,
            563977660,
            1882732616,
            4059428100,
            1673313503,
            2008463041,
            2950355573,
            1109467491,
            537923632,
            3858759450,
            4260623118,
            3218264685,
            2177748300,
            403442708,
            638784309,
            3287084079,
            3193921505,
            899127202,
            2286175436,
            773265209,
            2479146071,
            1437050866,
            4236148354,
            2050833735,
            3362022572,
            3126681063,
            840505643,
            3866325909,
            3227541664,
            427917720,
            2655997905,
            2749160575,
            1143087718,
            1412049534,
            999329963,
            193497219,
            2353415882,
            3354324521,
            1807268051,
            672404540,
            2816401017,
            3160301282,
            369822493,
            2916866934,
            3688947771,
            1681011286,
            1949973070,
            336202270,
            2454276571,
            201721354,
            1210328172,
            3093060836,
            2680341085,
            3184776046,
            1135389935,
            3294782118,
            965841320,
            831886756,
            3554993207,
            4068047243,
            3588745010,
            2345191491,
            1849112409,
            3664604599,
            26054028,
            2983581028,
            2622377682,
            1235855840,
            3630984372,
            2891339514,
            4092916743,
            3488279077,
            3395642799,
            4101667470,
            1202630377,
            268961816,
            1874508501,
            4034427016,
            1243948399,
            1546530418,
            941366308,
            1470539505,
            1941222599,
            2546386513,
            3421038627,
            2715671932,
            3899946140,
            1042226977,
            2521517021,
            1639824860,
            227249030,
            260737669,
            3765465232,
            2084453954,
            1907733956,
            3429263018,
            2420656344,
            100860677,
            4160157185,
            470683154,
            3261161891,
            1781871967,
            2924959737,
            1773779408,
            394692241,
            2579611992,
            974986535,
            664706745,
            3655459128,
            3958962195,
            731420851,
            571543859,
            3530123707,
            2849626480,
            126783113,
            865375399,
            765172662,
            1008606754,
            361203602,
            3387549984,
            2278477385,
            2857719295,
            1344809080,
            2782912378,
            59542671,
            1503764984,
            160008576,
            437062935,
            1707065306,
            3622233649,
            2218934982,
            3496503480,
            2185314755,
            697932208,
            1512910199,
            504303377,
            2075177163,
            2824099068,
            1841019862,
            739644986
          ],
          b = [
            2781242211,
            2230877308,
            2582542199,
            2381740923,
            234877682,
            3184946027,
            2984144751,
            1418839493,
            1348481072,
            50462977,
            2848876391,
            2102799147,
            434634494,
            1656084439,
            3863849899,
            2599188086,
            1167051466,
            2636087938,
            1082771913,
            2281340285,
            368048890,
            3954334041,
            3381544775,
            201060592,
            3963727277,
            1739838676,
            4250903202,
            3930435503,
            3206782108,
            4149453988,
            2531553906,
            1536934080,
            3262494647,
            484572669,
            2923271059,
            1783375398,
            1517041206,
            1098792767,
            49674231,
            1334037708,
            1550332980,
            4098991525,
            886171109,
            150598129,
            2481090929,
            1940642008,
            1398944049,
            1059722517,
            201851908,
            1385547719,
            1699095331,
            1587397571,
            674240536,
            2704774806,
            252314885,
            3039795866,
            151914247,
            908333586,
            2602270848,
            1038082786,
            651029483,
            1766729511,
            3447698098,
            2682942837,
            454166793,
            2652734339,
            1951935532,
            775166490,
            758520603,
            3000790638,
            4004797018,
            4217086112,
            4137964114,
            1299594043,
            1639438038,
            3464344499,
            2068982057,
            1054729187,
            1901997871,
            2534638724,
            4121318227,
            1757008337,
            0,
            750906861,
            1614815264,
            535035132,
            3363418545,
            3988151131,
            3201591914,
            1183697867,
            3647454910,
            1265776953,
            3734260298,
            3566750796,
            3903871064,
            1250283471,
            1807470800,
            717615087,
            3847203498,
            384695291,
            3313910595,
            3617213773,
            1432761139,
            2484176261,
            3481945413,
            283769337,
            100925954,
            2180939647,
            4037038160,
            1148730428,
            3123027871,
            3813386408,
            4087501137,
            4267549603,
            3229630528,
            2315620239,
            2906624658,
            3156319645,
            1215313976,
            82966005,
            3747855548,
            3245848246,
            1974459098,
            1665278241,
            807407632,
            451280895,
            251524083,
            1841287890,
            1283575245,
            337120268,
            891687699,
            801369324,
            3787349855,
            2721421207,
            3431482436,
            959321879,
            1469301956,
            4065699751,
            2197585534,
            1199193405,
            2898814052,
            3887750493,
            724703513,
            2514908019,
            2696962144,
            2551808385,
            3516813135,
            2141445340,
            1715741218,
            2119445034,
            2872807568,
            2198571144,
            3398190662,
            700968686,
            3547052216,
            1009259540,
            2041044702,
            3803995742,
            487983883,
            1991105499,
            1004265696,
            1449407026,
            1316239930,
            504629770,
            3683797321,
            168560134,
            1816667172,
            3837287516,
            1570751170,
            1857934291,
            4014189740,
            2797888098,
            2822345105,
            2754712981,
            936633572,
            2347923833,
            852879335,
            1133234376,
            1500395319,
            3084545389,
            2348912013,
            1689376213,
            3533459022,
            3762923945,
            3034082412,
            4205598294,
            133428468,
            634383082,
            2949277029,
            2398386810,
            3913789102,
            403703816,
            3580869306,
            2297460856,
            1867130149,
            1918643758,
            607656988,
            4049053350,
            3346248884,
            1368901318,
            600565992,
            2090982877,
            2632479860,
            557719327,
            3717614411,
            3697393085,
            2249034635,
            2232388234,
            2430627952,
            1115438654,
            3295786421,
            2865522278,
            3633334344,
            84280067,
            33027830,
            303828494,
            2747425121,
            1600795957,
            4188952407,
            3496589753,
            2434238086,
            1486471617,
            658119965,
            3106381470,
            953803233,
            334231800,
            3005978776,
            857870609,
            3151128937,
            1890179545,
            2298973838,
            2805175444,
            3056442267,
            574365214,
            2450884487,
            550103529,
            1233637070,
            4289353045,
            2018519080,
            2057691103,
            2399374476,
            4166623649,
            2148108681,
            387583245,
            3664101311,
            836232934,
            3330556482,
            3100665960,
            3280093505,
            2955516313,
            2002398509,
            287182607,
            3413881008,
            4238890068,
            3597515707,
            975967766
          ],
          m = [
            1671808611,
            2089089148,
            2006576759,
            2072901243,
            4061003762,
            1807603307,
            1873927791,
            3310653893,
            810573872,
            16974337,
            1739181671,
            729634347,
            4263110654,
            3613570519,
            2883997099,
            1989864566,
            3393556426,
            2191335298,
            3376449993,
            2106063485,
            4195741690,
            1508618841,
            1204391495,
            4027317232,
            2917941677,
            3563566036,
            2734514082,
            2951366063,
            2629772188,
            2767672228,
            1922491506,
            3227229120,
            3082974647,
            4246528509,
            2477669779,
            644500518,
            911895606,
            1061256767,
            4144166391,
            3427763148,
            878471220,
            2784252325,
            3845444069,
            4043897329,
            1905517169,
            3631459288,
            827548209,
            356461077,
            67897348,
            3344078279,
            593839651,
            3277757891,
            405286936,
            2527147926,
            84871685,
            2595565466,
            118033927,
            305538066,
            2157648768,
            3795705826,
            3945188843,
            661212711,
            2999812018,
            1973414517,
            152769033,
            2208177539,
            745822252,
            439235610,
            455947803,
            1857215598,
            1525593178,
            2700827552,
            1391895634,
            994932283,
            3596728278,
            3016654259,
            695947817,
            3812548067,
            795958831,
            2224493444,
            1408607827,
            3513301457,
            0,
            3979133421,
            543178784,
            4229948412,
            2982705585,
            1542305371,
            1790891114,
            3410398667,
            3201918910,
            961245753,
            1256100938,
            1289001036,
            1491644504,
            3477767631,
            3496721360,
            4012557807,
            2867154858,
            4212583931,
            1137018435,
            1305975373,
            861234739,
            2241073541,
            1171229253,
            4178635257,
            33948674,
            2139225727,
            1357946960,
            1011120188,
            2679776671,
            2833468328,
            1374921297,
            2751356323,
            1086357568,
            2408187279,
            2460827538,
            2646352285,
            944271416,
            4110742005,
            3168756668,
            3066132406,
            3665145818,
            560153121,
            271589392,
            4279952895,
            4077846003,
            3530407890,
            3444343245,
            202643468,
            322250259,
            3962553324,
            1608629855,
            2543990167,
            1154254916,
            389623319,
            3294073796,
            2817676711,
            2122513534,
            1028094525,
            1689045092,
            1575467613,
            422261273,
            1939203699,
            1621147744,
            2174228865,
            1339137615,
            3699352540,
            577127458,
            712922154,
            2427141008,
            2290289544,
            1187679302,
            3995715566,
            3100863416,
            339486740,
            3732514782,
            1591917662,
            186455563,
            3681988059,
            3762019296,
            844522546,
            978220090,
            169743370,
            1239126601,
            101321734,
            611076132,
            1558493276,
            3260915650,
            3547250131,
            2901361580,
            1655096418,
            2443721105,
            2510565781,
            3828863972,
            2039214713,
            3878868455,
            3359869896,
            928607799,
            1840765549,
            2374762893,
            3580146133,
            1322425422,
            2850048425,
            1823791212,
            1459268694,
            4094161908,
            3928346602,
            1706019429,
            2056189050,
            2934523822,
            135794696,
            3134549946,
            2022240376,
            628050469,
            779246638,
            472135708,
            2800834470,
            3032970164,
            3327236038,
            3894660072,
            3715932637,
            1956440180,
            522272287,
            1272813131,
            3185336765,
            2340818315,
            2323976074,
            1888542832,
            1044544574,
            3049550261,
            1722469478,
            1222152264,
            50660867,
            4127324150,
            236067854,
            1638122081,
            895445557,
            1475980887,
            3117443513,
            2257655686,
            3243809217,
            489110045,
            2662934430,
            3778599393,
            4162055160,
            2561878936,
            288563729,
            1773916777,
            3648039385,
            2391345038,
            2493985684,
            2612407707,
            505560094,
            2274497927,
            3911240169,
            3460925390,
            1442818645,
            678973480,
            3749357023,
            2358182796,
            2717407649,
            2306869641,
            219617805,
            3218761151,
            3862026214,
            1120306242,
            1756942440,
            1103331905,
            2578459033,
            762796589,
            252780047,
            2966125488,
            1425844308,
            3151392187,
            372911126
          ],
          g = [
            1667474886,
            2088535288,
            2004326894,
            2071694838,
            4075949567,
            1802223062,
            1869591006,
            3318043793,
            808472672,
            16843522,
            1734846926,
            724270422,
            4278065639,
            3621216949,
            2880169549,
            1987484396,
            3402253711,
            2189597983,
            3385409673,
            2105378810,
            4210693615,
            1499065266,
            1195886990,
            4042263547,
            2913856577,
            3570689971,
            2728590687,
            2947541573,
            2627518243,
            2762274643,
            1920112356,
            3233831835,
            3082273397,
            4261223649,
            2475929149,
            640051788,
            909531756,
            1061110142,
            4160160501,
            3435941763,
            875846760,
            2779116625,
            3857003729,
            4059105529,
            1903268834,
            3638064043,
            825316194,
            353713962,
            67374088,
            3351728789,
            589522246,
            3284360861,
            404236336,
            2526454071,
            84217610,
            2593830191,
            117901582,
            303183396,
            2155911963,
            3806477791,
            3958056653,
            656894286,
            2998062463,
            1970642922,
            151591698,
            2206440989,
            741110872,
            437923380,
            454765878,
            1852748508,
            1515908788,
            2694904667,
            1381168804,
            993742198,
            3604373943,
            3014905469,
            690584402,
            3823320797,
            791638366,
            2223281939,
            1398011302,
            3520161977,
            0,
            3991743681,
            538992704,
            4244381667,
            2981218425,
            1532751286,
            1785380564,
            3419096717,
            3200178535,
            960056178,
            1246420628,
            1280103576,
            1482221744,
            3486468741,
            3503319995,
            4025428677,
            2863326543,
            4227536621,
            1128514950,
            1296947098,
            859002214,
            2240123921,
            1162203018,
            4193849577,
            33687044,
            2139062782,
            1347481760,
            1010582648,
            2678045221,
            2829640523,
            1364325282,
            2745433693,
            1077985408,
            2408548869,
            2459086143,
            2644360225,
            943212656,
            4126475505,
            3166494563,
            3065430391,
            3671750063,
            555836226,
            269496352,
            4294908645,
            4092792573,
            3537006015,
            3452783745,
            202118168,
            320025894,
            3974901699,
            1600119230,
            2543297077,
            1145359496,
            387397934,
            3301201811,
            2812801621,
            2122220284,
            1027426170,
            1684319432,
            1566435258,
            421079858,
            1936954854,
            1616945344,
            2172753945,
            1330631070,
            3705438115,
            572679748,
            707427924,
            2425400123,
            2290647819,
            1179044492,
            4008585671,
            3099120491,
            336870440,
            3739122087,
            1583276732,
            185277718,
            3688593069,
            3772791771,
            842159716,
            976899700,
            168435220,
            1229577106,
            101059084,
            606366792,
            1549591736,
            3267517855,
            3553849021,
            2897014595,
            1650632388,
            2442242105,
            2509612081,
            3840161747,
            2038008818,
            3890688725,
            3368567691,
            926374254,
            1835907034,
            2374863873,
            3587531953,
            1313788572,
            2846482505,
            1819063512,
            1448540844,
            4109633523,
            3941213647,
            1701162954,
            2054852340,
            2930698567,
            134748176,
            3132806511,
            2021165296,
            623210314,
            774795868,
            471606328,
            2795958615,
            3031746419,
            3334885783,
            3907527627,
            3722280097,
            1953799400,
            522133822,
            1263263126,
            3183336545,
            2341176845,
            2324333839,
            1886425312,
            1044267644,
            3048588401,
            1718004428,
            1212733584,
            50529542,
            4143317495,
            235803164,
            1633788866,
            892690282,
            1465383342,
            3115962473,
            2256965911,
            3250673817,
            488449850,
            2661202215,
            3789633753,
            4177007595,
            2560144171,
            286339874,
            1768537042,
            3654906025,
            2391705863,
            2492770099,
            2610673197,
            505291324,
            2273808917,
            3924369609,
            3469625735,
            1431699370,
            673740880,
            3755965093,
            2358021891,
            2711746649,
            2307489801,
            218961690,
            3217021541,
            3873845719,
            1111672452,
            1751693520,
            1094828930,
            2576986153,
            757954394,
            252645662,
            2964376443,
            1414855848,
            3149649517,
            370555436
          ],
          y = [
            1374988112,
            2118214995,
            437757123,
            975658646,
            1001089995,
            530400753,
            2902087851,
            1273168787,
            540080725,
            2910219766,
            2295101073,
            4110568485,
            1340463100,
            3307916247,
            641025152,
            3043140495,
            3736164937,
            632953703,
            1172967064,
            1576976609,
            3274667266,
            2169303058,
            2370213795,
            1809054150,
            59727847,
            361929877,
            3211623147,
            2505202138,
            3569255213,
            1484005843,
            1239443753,
            2395588676,
            1975683434,
            4102977912,
            2572697195,
            666464733,
            3202437046,
            4035489047,
            3374361702,
            2110667444,
            1675577880,
            3843699074,
            2538681184,
            1649639237,
            2976151520,
            3144396420,
            4269907996,
            4178062228,
            1883793496,
            2403728665,
            2497604743,
            1383856311,
            2876494627,
            1917518562,
            3810496343,
            1716890410,
            3001755655,
            800440835,
            2261089178,
            3543599269,
            807962610,
            599762354,
            33778362,
            3977675356,
            2328828971,
            2809771154,
            4077384432,
            1315562145,
            1708848333,
            101039829,
            3509871135,
            3299278474,
            875451293,
            2733856160,
            92987698,
            2767645557,
            193195065,
            1080094634,
            1584504582,
            3178106961,
            1042385657,
            2531067453,
            3711829422,
            1306967366,
            2438237621,
            1908694277,
            67556463,
            1615861247,
            429456164,
            3602770327,
            2302690252,
            1742315127,
            2968011453,
            126454664,
            3877198648,
            2043211483,
            2709260871,
            2084704233,
            4169408201,
            0,
            159417987,
            841739592,
            504459436,
            1817866830,
            4245618683,
            260388950,
            1034867998,
            908933415,
            168810852,
            1750902305,
            2606453969,
            607530554,
            202008497,
            2472011535,
            3035535058,
            463180190,
            2160117071,
            1641816226,
            1517767529,
            470948374,
            3801332234,
            3231722213,
            1008918595,
            303765277,
            235474187,
            4069246893,
            766945465,
            337553864,
            1475418501,
            2943682380,
            4003061179,
            2743034109,
            4144047775,
            1551037884,
            1147550661,
            1543208500,
            2336434550,
            3408119516,
            3069049960,
            3102011747,
            3610369226,
            1113818384,
            328671808,
            2227573024,
            2236228733,
            3535486456,
            2935566865,
            3341394285,
            496906059,
            3702665459,
            226906860,
            2009195472,
            733156972,
            2842737049,
            294930682,
            1206477858,
            2835123396,
            2700099354,
            1451044056,
            573804783,
            2269728455,
            3644379585,
            2362090238,
            2564033334,
            2801107407,
            2776292904,
            3669462566,
            1068351396,
            742039012,
            1350078989,
            1784663195,
            1417561698,
            4136440770,
            2430122216,
            775550814,
            2193862645,
            2673705150,
            1775276924,
            1876241833,
            3475313331,
            3366754619,
            270040487,
            3902563182,
            3678124923,
            3441850377,
            1851332852,
            3969562369,
            2203032232,
            3868552805,
            2868897406,
            566021896,
            4011190502,
            3135740889,
            1248802510,
            3936291284,
            699432150,
            832877231,
            708780849,
            3332740144,
            899835584,
            1951317047,
            4236429990,
            3767586992,
            866637845,
            4043610186,
            1106041591,
            2144161806,
            395441711,
            1984812685,
            1139781709,
            3433712980,
            3835036895,
            2664543715,
            1282050075,
            3240894392,
            1181045119,
            2640243204,
            25965917,
            4203181171,
            4211818798,
            3009879386,
            2463879762,
            3910161971,
            1842759443,
            2597806476,
            933301370,
            1509430414,
            3943906441,
            3467192302,
            3076639029,
            3776767469,
            2051518780,
            2631065433,
            1441952575,
            404016761,
            1942435775,
            1408749034,
            1610459739,
            3745345300,
            2017778566,
            3400528769,
            3110650942,
            941896748,
            3265478751,
            371049330,
            3168937228,
            675039627,
            4279080257,
            967311729,
            135050206,
            3635733660,
            1683407248,
            2076935265,
            3576870512,
            1215061108,
            3501741890
          ],
          v = [
            1347548327,
            1400783205,
            3273267108,
            2520393566,
            3409685355,
            4045380933,
            2880240216,
            2471224067,
            1428173050,
            4138563181,
            2441661558,
            636813900,
            4233094615,
            3620022987,
            2149987652,
            2411029155,
            1239331162,
            1730525723,
            2554718734,
            3781033664,
            46346101,
            310463728,
            2743944855,
            3328955385,
            3875770207,
            2501218972,
            3955191162,
            3667219033,
            768917123,
            3545789473,
            692707433,
            1150208456,
            1786102409,
            2029293177,
            1805211710,
            3710368113,
            3065962831,
            401639597,
            1724457132,
            3028143674,
            409198410,
            2196052529,
            1620529459,
            1164071807,
            3769721975,
            2226875310,
            486441376,
            2499348523,
            1483753576,
            428819965,
            2274680428,
            3075636216,
            598438867,
            3799141122,
            1474502543,
            711349675,
            129166120,
            53458370,
            2592523643,
            2782082824,
            4063242375,
            2988687269,
            3120694122,
            1559041666,
            730517276,
            2460449204,
            4042459122,
            2706270690,
            3446004468,
            3573941694,
            533804130,
            2328143614,
            2637442643,
            2695033685,
            839224033,
            1973745387,
            957055980,
            2856345839,
            106852767,
            1371368976,
            4181598602,
            1033297158,
            2933734917,
            1179510461,
            3046200461,
            91341917,
            1862534868,
            4284502037,
            605657339,
            2547432937,
            3431546947,
            2003294622,
            3182487618,
            2282195339,
            954669403,
            3682191598,
            1201765386,
            3917234703,
            3388507166,
            0,
            2198438022,
            1211247597,
            2887651696,
            1315723890,
            4227665663,
            1443857720,
            507358933,
            657861945,
            1678381017,
            560487590,
            3516619604,
            975451694,
            2970356327,
            261314535,
            3535072918,
            2652609425,
            1333838021,
            2724322336,
            1767536459,
            370938394,
            182621114,
            3854606378,
            1128014560,
            487725847,
            185469197,
            2918353863,
            3106780840,
            3356761769,
            2237133081,
            1286567175,
            3152976349,
            4255350624,
            2683765030,
            3160175349,
            3309594171,
            878443390,
            1988838185,
            3704300486,
            1756818940,
            1673061617,
            3403100636,
            272786309,
            1075025698,
            545572369,
            2105887268,
            4174560061,
            296679730,
            1841768865,
            1260232239,
            4091327024,
            3960309330,
            3497509347,
            1814803222,
            2578018489,
            4195456072,
            575138148,
            3299409036,
            446754879,
            3629546796,
            4011996048,
            3347532110,
            3252238545,
            4270639778,
            915985419,
            3483825537,
            681933534,
            651868046,
            2755636671,
            3828103837,
            223377554,
            2607439820,
            1649704518,
            3270937875,
            3901806776,
            1580087799,
            4118987695,
            3198115200,
            2087309459,
            2842678573,
            3016697106,
            1003007129,
            2802849917,
            1860738147,
            2077965243,
            164439672,
            4100872472,
            32283319,
            2827177882,
            1709610350,
            2125135846,
            136428751,
            3874428392,
            3652904859,
            3460984630,
            3572145929,
            3593056380,
            2939266226,
            824852259,
            818324884,
            3224740454,
            930369212,
            2801566410,
            2967507152,
            355706840,
            1257309336,
            4148292826,
            243256656,
            790073846,
            2373340630,
            1296297904,
            1422699085,
            3756299780,
            3818836405,
            457992840,
            3099667487,
            2135319889,
            77422314,
            1560382517,
            1945798516,
            788204353,
            1521706781,
            1385356242,
            870912086,
            325965383,
            2358957921,
            2050466060,
            2388260884,
            2313884476,
            4006521127,
            901210569,
            3990953189,
            1014646705,
            1503449823,
            1062597235,
            2031621326,
            3212035895,
            3931371469,
            1533017514,
            350174575,
            2256028891,
            2177544179,
            1052338372,
            741876788,
            1606591296,
            1914052035,
            213705253,
            2334669897,
            1107234197,
            1899603969,
            3725069491,
            2631447780,
            2422494913,
            1635502980,
            1893020342,
            1950903388,
            1120974935
          ],
          w = [
            2807058932,
            1699970625,
            2764249623,
            1586903591,
            1808481195,
            1173430173,
            1487645946,
            59984867,
            4199882800,
            1844882806,
            1989249228,
            1277555970,
            3623636965,
            3419915562,
            1149249077,
            2744104290,
            1514790577,
            459744698,
            244860394,
            3235995134,
            1963115311,
            4027744588,
            2544078150,
            4190530515,
            1608975247,
            2627016082,
            2062270317,
            1507497298,
            2200818878,
            567498868,
            1764313568,
            3359936201,
            2305455554,
            2037970062,
            1047239e3,
            1910319033,
            1337376481,
            2904027272,
            2892417312,
            984907214,
            1243112415,
            830661914,
            861968209,
            2135253587,
            2011214180,
            2927934315,
            2686254721,
            731183368,
            1750626376,
            4246310725,
            1820824798,
            4172763771,
            3542330227,
            48394827,
            2404901663,
            2871682645,
            671593195,
            3254988725,
            2073724613,
            145085239,
            2280796200,
            2779915199,
            1790575107,
            2187128086,
            472615631,
            3029510009,
            4075877127,
            3802222185,
            4107101658,
            3201631749,
            1646252340,
            4270507174,
            1402811438,
            1436590835,
            3778151818,
            3950355702,
            3963161475,
            4020912224,
            2667994737,
            273792366,
            2331590177,
            104699613,
            95345982,
            3175501286,
            2377486676,
            1560637892,
            3564045318,
            369057872,
            4213447064,
            3919042237,
            1137477952,
            2658625497,
            1119727848,
            2340947849,
            1530455833,
            4007360968,
            172466556,
            266959938,
            516552836,
            0,
            2256734592,
            3980931627,
            1890328081,
            1917742170,
            4294704398,
            945164165,
            3575528878,
            958871085,
            3647212047,
            2787207260,
            1423022939,
            775562294,
            1739656202,
            3876557655,
            2530391278,
            2443058075,
            3310321856,
            547512796,
            1265195639,
            437656594,
            3121275539,
            719700128,
            3762502690,
            387781147,
            218828297,
            3350065803,
            2830708150,
            2848461854,
            428169201,
            122466165,
            3720081049,
            1627235199,
            648017665,
            4122762354,
            1002783846,
            2117360635,
            695634755,
            3336358691,
            4234721005,
            4049844452,
            3704280881,
            2232435299,
            574624663,
            287343814,
            612205898,
            1039717051,
            840019705,
            2708326185,
            793451934,
            821288114,
            1391201670,
            3822090177,
            376187827,
            3113855344,
            1224348052,
            1679968233,
            2361698556,
            1058709744,
            752375421,
            2431590963,
            1321699145,
            3519142200,
            2734591178,
            188127444,
            2177869557,
            3727205754,
            2384911031,
            3215212461,
            2648976442,
            2450346104,
            3432737375,
            1180849278,
            331544205,
            3102249176,
            4150144569,
            2952102595,
            2159976285,
            2474404304,
            766078933,
            313773861,
            2570832044,
            2108100632,
            1668212892,
            3145456443,
            2013908262,
            418672217,
            3070356634,
            2594734927,
            1852171925,
            3867060991,
            3473416636,
            3907448597,
            2614737639,
            919489135,
            164948639,
            2094410160,
            2997825956,
            590424639,
            2486224549,
            1723872674,
            3157750862,
            3399941250,
            3501252752,
            3625268135,
            2555048196,
            3673637356,
            1343127501,
            4130281361,
            3599595085,
            2957853679,
            1297403050,
            81781910,
            3051593425,
            2283490410,
            532201772,
            1367295589,
            3926170974,
            895287692,
            1953757831,
            1093597963,
            492483431,
            3528626907,
            1446242576,
            1192455638,
            1636604631,
            209336225,
            344873464,
            1015671571,
            669961897,
            3375740769,
            3857572124,
            2973530695,
            3747192018,
            1933530610,
            3464042516,
            935293895,
            3454686199,
            2858115069,
            1863638845,
            3683022916,
            4085369519,
            3292445032,
            875313188,
            1080017571,
            3279033885,
            621591778,
            1233856572,
            2504130317,
            24197544,
            3017672716,
            3835484340,
            3247465558,
            2220981195,
            3060847922,
            1551124588,
            1463996600
          ],
          k = [
            4104605777,
            1097159550,
            396673818,
            660510266,
            2875968315,
            2638606623,
            4200115116,
            3808662347,
            821712160,
            1986918061,
            3430322568,
            38544885,
            3856137295,
            718002117,
            893681702,
            1654886325,
            2975484382,
            3122358053,
            3926825029,
            4274053469,
            796197571,
            1290801793,
            1184342925,
            3556361835,
            2405426947,
            2459735317,
            1836772287,
            1381620373,
            3196267988,
            1948373848,
            3764988233,
            3385345166,
            3263785589,
            2390325492,
            1480485785,
            3111247143,
            3780097726,
            2293045232,
            548169417,
            3459953789,
            3746175075,
            439452389,
            1362321559,
            1400849762,
            1685577905,
            1806599355,
            2174754046,
            137073913,
            1214797936,
            1174215055,
            3731654548,
            2079897426,
            1943217067,
            1258480242,
            529487843,
            1437280870,
            3945269170,
            3049390895,
            3313212038,
            923313619,
            679998e3,
            3215307299,
            57326082,
            377642221,
            3474729866,
            2041877159,
            133361907,
            1776460110,
            3673476453,
            96392454,
            878845905,
            2801699524,
            777231668,
            4082475170,
            2330014213,
            4142626212,
            2213296395,
            1626319424,
            1906247262,
            1846563261,
            562755902,
            3708173718,
            1040559837,
            3871163981,
            1418573201,
            3294430577,
            114585348,
            1343618912,
            2566595609,
            3186202582,
            1078185097,
            3651041127,
            3896688048,
            2307622919,
            425408743,
            3371096953,
            2081048481,
            1108339068,
            2216610296,
            0,
            2156299017,
            736970802,
            292596766,
            1517440620,
            251657213,
            2235061775,
            2933202493,
            758720310,
            265905162,
            1554391400,
            1532285339,
            908999204,
            174567692,
            1474760595,
            4002861748,
            2610011675,
            3234156416,
            3693126241,
            2001430874,
            303699484,
            2478443234,
            2687165888,
            585122620,
            454499602,
            151849742,
            2345119218,
            3064510765,
            514443284,
            4044981591,
            1963412655,
            2581445614,
            2137062819,
            19308535,
            1928707164,
            1715193156,
            4219352155,
            1126790795,
            600235211,
            3992742070,
            3841024952,
            836553431,
            1669664834,
            2535604243,
            3323011204,
            1243905413,
            3141400786,
            4180808110,
            698445255,
            2653899549,
            2989552604,
            2253581325,
            3252932727,
            3004591147,
            1891211689,
            2487810577,
            3915653703,
            4237083816,
            4030667424,
            2100090966,
            865136418,
            1229899655,
            953270745,
            3399679628,
            3557504664,
            4118925222,
            2061379749,
            3079546586,
            2915017791,
            983426092,
            2022837584,
            1607244650,
            2118541908,
            2366882550,
            3635996816,
            972512814,
            3283088770,
            1568718495,
            3499326569,
            3576539503,
            621982671,
            2895723464,
            410887952,
            2623762152,
            1002142683,
            645401037,
            1494807662,
            2595684844,
            1335535747,
            2507040230,
            4293295786,
            3167684641,
            367585007,
            3885750714,
            1865862730,
            2668221674,
            2960971305,
            2763173681,
            1059270954,
            2777952454,
            2724642869,
            1320957812,
            2194319100,
            2429595872,
            2815956275,
            77089521,
            3973773121,
            3444575871,
            2448830231,
            1305906550,
            4021308739,
            2857194700,
            2516901860,
            3518358430,
            1787304780,
            740276417,
            1699839814,
            1592394909,
            2352307457,
            2272556026,
            188821243,
            1729977011,
            3687994002,
            274084841,
            3594982253,
            3613494426,
            2701949495,
            4162096729,
            322734571,
            2837966542,
            1640576439,
            484830689,
            1202797690,
            3537852828,
            4067639125,
            349075736,
            3342319475,
            4157467219,
            4255800159,
            1030690015,
            1155237496,
            2951971274,
            1757691577,
            607398968,
            2738905026,
            499347990,
            3794078908,
            1011452712,
            227885567,
            2818666809,
            213114376,
            3034881240,
            1455525988,
            3414450555,
            850817237,
            1817998408,
            3092726480
          ],
          _ = [
            0,
            235474187,
            470948374,
            303765277,
            941896748,
            908933415,
            607530554,
            708780849,
            1883793496,
            2118214995,
            1817866830,
            1649639237,
            1215061108,
            1181045119,
            1417561698,
            1517767529,
            3767586992,
            4003061179,
            4236429990,
            4069246893,
            3635733660,
            3602770327,
            3299278474,
            3400528769,
            2430122216,
            2664543715,
            2362090238,
            2193862645,
            2835123396,
            2801107407,
            3035535058,
            3135740889,
            3678124923,
            3576870512,
            3341394285,
            3374361702,
            3810496343,
            3977675356,
            4279080257,
            4043610186,
            2876494627,
            2776292904,
            3076639029,
            3110650942,
            2472011535,
            2640243204,
            2403728665,
            2169303058,
            1001089995,
            899835584,
            666464733,
            699432150,
            59727847,
            226906860,
            530400753,
            294930682,
            1273168787,
            1172967064,
            1475418501,
            1509430414,
            1942435775,
            2110667444,
            1876241833,
            1641816226,
            2910219766,
            2743034109,
            2976151520,
            3211623147,
            2505202138,
            2606453969,
            2302690252,
            2269728455,
            3711829422,
            3543599269,
            3240894392,
            3475313331,
            3843699074,
            3943906441,
            4178062228,
            4144047775,
            1306967366,
            1139781709,
            1374988112,
            1610459739,
            1975683434,
            2076935265,
            1775276924,
            1742315127,
            1034867998,
            866637845,
            566021896,
            800440835,
            92987698,
            193195065,
            429456164,
            395441711,
            1984812685,
            2017778566,
            1784663195,
            1683407248,
            1315562145,
            1080094634,
            1383856311,
            1551037884,
            101039829,
            135050206,
            437757123,
            337553864,
            1042385657,
            807962610,
            573804783,
            742039012,
            2531067453,
            2564033334,
            2328828971,
            2227573024,
            2935566865,
            2700099354,
            3001755655,
            3168937228,
            3868552805,
            3902563182,
            4203181171,
            4102977912,
            3736164937,
            3501741890,
            3265478751,
            3433712980,
            1106041591,
            1340463100,
            1576976609,
            1408749034,
            2043211483,
            2009195472,
            1708848333,
            1809054150,
            832877231,
            1068351396,
            766945465,
            599762354,
            159417987,
            126454664,
            361929877,
            463180190,
            2709260871,
            2943682380,
            3178106961,
            3009879386,
            2572697195,
            2538681184,
            2236228733,
            2336434550,
            3509871135,
            3745345300,
            3441850377,
            3274667266,
            3910161971,
            3877198648,
            4110568485,
            4211818798,
            2597806476,
            2497604743,
            2261089178,
            2295101073,
            2733856160,
            2902087851,
            3202437046,
            2968011453,
            3936291284,
            3835036895,
            4136440770,
            4169408201,
            3535486456,
            3702665459,
            3467192302,
            3231722213,
            2051518780,
            1951317047,
            1716890410,
            1750902305,
            1113818384,
            1282050075,
            1584504582,
            1350078989,
            168810852,
            67556463,
            371049330,
            404016761,
            841739592,
            1008918595,
            775550814,
            540080725,
            3969562369,
            3801332234,
            4035489047,
            4269907996,
            3569255213,
            3669462566,
            3366754619,
            3332740144,
            2631065433,
            2463879762,
            2160117071,
            2395588676,
            2767645557,
            2868897406,
            3102011747,
            3069049960,
            202008497,
            33778362,
            270040487,
            504459436,
            875451293,
            975658646,
            675039627,
            641025152,
            2084704233,
            1917518562,
            1615861247,
            1851332852,
            1147550661,
            1248802510,
            1484005843,
            1451044056,
            933301370,
            967311729,
            733156972,
            632953703,
            260388950,
            25965917,
            328671808,
            496906059,
            1206477858,
            1239443753,
            1543208500,
            1441952575,
            2144161806,
            1908694277,
            1675577880,
            1842759443,
            3610369226,
            3644379585,
            3408119516,
            3307916247,
            4011190502,
            3776767469,
            4077384432,
            4245618683,
            2809771154,
            2842737049,
            3144396420,
            3043140495,
            2673705150,
            2438237621,
            2203032232,
            2370213795
          ],
          S = [
            0,
            185469197,
            370938394,
            487725847,
            741876788,
            657861945,
            975451694,
            824852259,
            1483753576,
            1400783205,
            1315723890,
            1164071807,
            1950903388,
            2135319889,
            1649704518,
            1767536459,
            2967507152,
            3152976349,
            2801566410,
            2918353863,
            2631447780,
            2547432937,
            2328143614,
            2177544179,
            3901806776,
            3818836405,
            4270639778,
            4118987695,
            3299409036,
            3483825537,
            3535072918,
            3652904859,
            2077965243,
            1893020342,
            1841768865,
            1724457132,
            1474502543,
            1559041666,
            1107234197,
            1257309336,
            598438867,
            681933534,
            901210569,
            1052338372,
            261314535,
            77422314,
            428819965,
            310463728,
            3409685355,
            3224740454,
            3710368113,
            3593056380,
            3875770207,
            3960309330,
            4045380933,
            4195456072,
            2471224067,
            2554718734,
            2237133081,
            2388260884,
            3212035895,
            3028143674,
            2842678573,
            2724322336,
            4138563181,
            4255350624,
            3769721975,
            3955191162,
            3667219033,
            3516619604,
            3431546947,
            3347532110,
            2933734917,
            2782082824,
            3099667487,
            3016697106,
            2196052529,
            2313884476,
            2499348523,
            2683765030,
            1179510461,
            1296297904,
            1347548327,
            1533017514,
            1786102409,
            1635502980,
            2087309459,
            2003294622,
            507358933,
            355706840,
            136428751,
            53458370,
            839224033,
            957055980,
            605657339,
            790073846,
            2373340630,
            2256028891,
            2607439820,
            2422494913,
            2706270690,
            2856345839,
            3075636216,
            3160175349,
            3573941694,
            3725069491,
            3273267108,
            3356761769,
            4181598602,
            4063242375,
            4011996048,
            3828103837,
            1033297158,
            915985419,
            730517276,
            545572369,
            296679730,
            446754879,
            129166120,
            213705253,
            1709610350,
            1860738147,
            1945798516,
            2029293177,
            1239331162,
            1120974935,
            1606591296,
            1422699085,
            4148292826,
            4233094615,
            3781033664,
            3931371469,
            3682191598,
            3497509347,
            3446004468,
            3328955385,
            2939266226,
            2755636671,
            3106780840,
            2988687269,
            2198438022,
            2282195339,
            2501218972,
            2652609425,
            1201765386,
            1286567175,
            1371368976,
            1521706781,
            1805211710,
            1620529459,
            2105887268,
            1988838185,
            533804130,
            350174575,
            164439672,
            46346101,
            870912086,
            954669403,
            636813900,
            788204353,
            2358957921,
            2274680428,
            2592523643,
            2441661558,
            2695033685,
            2880240216,
            3065962831,
            3182487618,
            3572145929,
            3756299780,
            3270937875,
            3388507166,
            4174560061,
            4091327024,
            4006521127,
            3854606378,
            1014646705,
            930369212,
            711349675,
            560487590,
            272786309,
            457992840,
            106852767,
            223377554,
            1678381017,
            1862534868,
            1914052035,
            2031621326,
            1211247597,
            1128014560,
            1580087799,
            1428173050,
            32283319,
            182621114,
            401639597,
            486441376,
            768917123,
            651868046,
            1003007129,
            818324884,
            1503449823,
            1385356242,
            1333838021,
            1150208456,
            1973745387,
            2125135846,
            1673061617,
            1756818940,
            2970356327,
            3120694122,
            2802849917,
            2887651696,
            2637442643,
            2520393566,
            2334669897,
            2149987652,
            3917234703,
            3799141122,
            4284502037,
            4100872472,
            3309594171,
            3460984630,
            3545789473,
            3629546796,
            2050466060,
            1899603969,
            1814803222,
            1730525723,
            1443857720,
            1560382517,
            1075025698,
            1260232239,
            575138148,
            692707433,
            878443390,
            1062597235,
            243256656,
            91341917,
            409198410,
            325965383,
            3403100636,
            3252238545,
            3704300486,
            3620022987,
            3874428392,
            3990953189,
            4042459122,
            4227665663,
            2460449204,
            2578018489,
            2226875310,
            2411029155,
            3198115200,
            3046200461,
            2827177882,
            2743944855
          ],
          j = [
            0,
            218828297,
            437656594,
            387781147,
            875313188,
            958871085,
            775562294,
            590424639,
            1750626376,
            1699970625,
            1917742170,
            2135253587,
            1551124588,
            1367295589,
            1180849278,
            1265195639,
            3501252752,
            3720081049,
            3399941250,
            3350065803,
            3835484340,
            3919042237,
            4270507174,
            4085369519,
            3102249176,
            3051593425,
            2734591178,
            2952102595,
            2361698556,
            2177869557,
            2530391278,
            2614737639,
            3145456443,
            3060847922,
            2708326185,
            2892417312,
            2404901663,
            2187128086,
            2504130317,
            2555048196,
            3542330227,
            3727205754,
            3375740769,
            3292445032,
            3876557655,
            3926170974,
            4246310725,
            4027744588,
            1808481195,
            1723872674,
            1910319033,
            2094410160,
            1608975247,
            1391201670,
            1173430173,
            1224348052,
            59984867,
            244860394,
            428169201,
            344873464,
            935293895,
            984907214,
            766078933,
            547512796,
            1844882806,
            1627235199,
            2011214180,
            2062270317,
            1507497298,
            1423022939,
            1137477952,
            1321699145,
            95345982,
            145085239,
            532201772,
            313773861,
            830661914,
            1015671571,
            731183368,
            648017665,
            3175501286,
            2957853679,
            2807058932,
            2858115069,
            2305455554,
            2220981195,
            2474404304,
            2658625497,
            3575528878,
            3625268135,
            3473416636,
            3254988725,
            3778151818,
            3963161475,
            4213447064,
            4130281361,
            3599595085,
            3683022916,
            3432737375,
            3247465558,
            3802222185,
            4020912224,
            4172763771,
            4122762354,
            3201631749,
            3017672716,
            2764249623,
            2848461854,
            2331590177,
            2280796200,
            2431590963,
            2648976442,
            104699613,
            188127444,
            472615631,
            287343814,
            840019705,
            1058709744,
            671593195,
            621591778,
            1852171925,
            1668212892,
            1953757831,
            2037970062,
            1514790577,
            1463996600,
            1080017571,
            1297403050,
            3673637356,
            3623636965,
            3235995134,
            3454686199,
            4007360968,
            3822090177,
            4107101658,
            4190530515,
            2997825956,
            3215212461,
            2830708150,
            2779915199,
            2256734592,
            2340947849,
            2627016082,
            2443058075,
            172466556,
            122466165,
            273792366,
            492483431,
            1047239e3,
            861968209,
            612205898,
            695634755,
            1646252340,
            1863638845,
            2013908262,
            1963115311,
            1446242576,
            1530455833,
            1277555970,
            1093597963,
            1636604631,
            1820824798,
            2073724613,
            1989249228,
            1436590835,
            1487645946,
            1337376481,
            1119727848,
            164948639,
            81781910,
            331544205,
            516552836,
            1039717051,
            821288114,
            669961897,
            719700128,
            2973530695,
            3157750862,
            2871682645,
            2787207260,
            2232435299,
            2283490410,
            2667994737,
            2450346104,
            3647212047,
            3564045318,
            3279033885,
            3464042516,
            3980931627,
            3762502690,
            4150144569,
            4199882800,
            3070356634,
            3121275539,
            2904027272,
            2686254721,
            2200818878,
            2384911031,
            2570832044,
            2486224549,
            3747192018,
            3528626907,
            3310321856,
            3359936201,
            3950355702,
            3867060991,
            4049844452,
            4234721005,
            1739656202,
            1790575107,
            2108100632,
            1890328081,
            1402811438,
            1586903591,
            1233856572,
            1149249077,
            266959938,
            48394827,
            369057872,
            418672217,
            1002783846,
            919489135,
            567498868,
            752375421,
            209336225,
            24197544,
            376187827,
            459744698,
            945164165,
            895287692,
            574624663,
            793451934,
            1679968233,
            1764313568,
            2117360635,
            1933530610,
            1343127501,
            1560637892,
            1243112415,
            1192455638,
            3704280881,
            3519142200,
            3336358691,
            3419915562,
            3907448597,
            3857572124,
            4075877127,
            4294704398,
            3029510009,
            3113855344,
            2927934315,
            2744104290,
            2159976285,
            2377486676,
            2594734927,
            2544078150
          ],
          E = [
            0,
            151849742,
            303699484,
            454499602,
            607398968,
            758720310,
            908999204,
            1059270954,
            1214797936,
            1097159550,
            1517440620,
            1400849762,
            1817998408,
            1699839814,
            2118541908,
            2001430874,
            2429595872,
            2581445614,
            2194319100,
            2345119218,
            3034881240,
            3186202582,
            2801699524,
            2951971274,
            3635996816,
            3518358430,
            3399679628,
            3283088770,
            4237083816,
            4118925222,
            4002861748,
            3885750714,
            1002142683,
            850817237,
            698445255,
            548169417,
            529487843,
            377642221,
            227885567,
            77089521,
            1943217067,
            2061379749,
            1640576439,
            1757691577,
            1474760595,
            1592394909,
            1174215055,
            1290801793,
            2875968315,
            2724642869,
            3111247143,
            2960971305,
            2405426947,
            2253581325,
            2638606623,
            2487810577,
            3808662347,
            3926825029,
            4044981591,
            4162096729,
            3342319475,
            3459953789,
            3576539503,
            3693126241,
            1986918061,
            2137062819,
            1685577905,
            1836772287,
            1381620373,
            1532285339,
            1078185097,
            1229899655,
            1040559837,
            923313619,
            740276417,
            621982671,
            439452389,
            322734571,
            137073913,
            19308535,
            3871163981,
            4021308739,
            4104605777,
            4255800159,
            3263785589,
            3414450555,
            3499326569,
            3651041127,
            2933202493,
            2815956275,
            3167684641,
            3049390895,
            2330014213,
            2213296395,
            2566595609,
            2448830231,
            1305906550,
            1155237496,
            1607244650,
            1455525988,
            1776460110,
            1626319424,
            2079897426,
            1928707164,
            96392454,
            213114376,
            396673818,
            514443284,
            562755902,
            679998e3,
            865136418,
            983426092,
            3708173718,
            3557504664,
            3474729866,
            3323011204,
            4180808110,
            4030667424,
            3945269170,
            3794078908,
            2507040230,
            2623762152,
            2272556026,
            2390325492,
            2975484382,
            3092726480,
            2738905026,
            2857194700,
            3973773121,
            3856137295,
            4274053469,
            4157467219,
            3371096953,
            3252932727,
            3673476453,
            3556361835,
            2763173681,
            2915017791,
            3064510765,
            3215307299,
            2156299017,
            2307622919,
            2459735317,
            2610011675,
            2081048481,
            1963412655,
            1846563261,
            1729977011,
            1480485785,
            1362321559,
            1243905413,
            1126790795,
            878845905,
            1030690015,
            645401037,
            796197571,
            274084841,
            425408743,
            38544885,
            188821243,
            3613494426,
            3731654548,
            3313212038,
            3430322568,
            4082475170,
            4200115116,
            3780097726,
            3896688048,
            2668221674,
            2516901860,
            2366882550,
            2216610296,
            3141400786,
            2989552604,
            2837966542,
            2687165888,
            1202797690,
            1320957812,
            1437280870,
            1554391400,
            1669664834,
            1787304780,
            1906247262,
            2022837584,
            265905162,
            114585348,
            499347990,
            349075736,
            736970802,
            585122620,
            972512814,
            821712160,
            2595684844,
            2478443234,
            2293045232,
            2174754046,
            3196267988,
            3079546586,
            2895723464,
            2777952454,
            3537852828,
            3687994002,
            3234156416,
            3385345166,
            4142626212,
            4293295786,
            3841024952,
            3992742070,
            174567692,
            57326082,
            410887952,
            292596766,
            777231668,
            660510266,
            1011452712,
            893681702,
            1108339068,
            1258480242,
            1343618912,
            1494807662,
            1715193156,
            1865862730,
            1948373848,
            2100090966,
            2701949495,
            2818666809,
            3004591147,
            3122358053,
            2235061775,
            2352307457,
            2535604243,
            2653899549,
            3915653703,
            3764988233,
            4219352155,
            4067639125,
            3444575871,
            3294430577,
            3746175075,
            3594982253,
            836553431,
            953270745,
            600235211,
            718002117,
            367585007,
            484830689,
            133361907,
            251657213,
            2041877159,
            1891211689,
            1806599355,
            1654886325,
            1568718495,
            1418573201,
            1335535747,
            1184342925
          ];
        function x(e) {
          for (var t = [], r = 0; r < e.length; r += 4)
            t.push((e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]);
          return t;
        }
        var O = function(e) {
          if (!(this instanceof O)) throw Error('AES must be instanitated with `new`');
          Object.defineProperty(this, 'key', { value: i(e, !0) }), this._prepare();
        };
        (O.prototype._prepare = function() {
          var e = l[this.key.length];
          if (null == e) throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
          (this._Ke = []), (this._Kd = []);
          for (var t = 0; t <= e; t++)
            this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
          var r,
            n = 4 * (e + 1),
            i = this.key.length / 4,
            o = x(this.key);
          for (t = 0; t < i; t++)
            (r = t >> 2), (this._Ke[r][t % 4] = o[t]), (this._Kd[e - r][t % 4] = o[t]);
          for (var s, a = 0, u = i; u < n; ) {
            if (
              ((s = o[i - 1]),
              (o[0] ^=
                (f[(s >> 16) & 255] << 24) ^
                (f[(s >> 8) & 255] << 16) ^
                (f[255 & s] << 8) ^
                f[(s >> 24) & 255] ^
                (d[a] << 24)),
              (a += 1),
              8 != i)
            )
              for (t = 1; t < i; t++) o[t] ^= o[t - 1];
            else {
              for (t = 1; t < i / 2; t++) o[t] ^= o[t - 1];
              (s = o[i / 2 - 1]),
                (o[i / 2] ^=
                  f[255 & s] ^
                  (f[(s >> 8) & 255] << 8) ^
                  (f[(s >> 16) & 255] << 16) ^
                  (f[(s >> 24) & 255] << 24));
              for (t = i / 2 + 1; t < i; t++) o[t] ^= o[t - 1];
            }
            for (t = 0; t < i && u < n; )
              (c = u >> 2),
                (h = u % 4),
                (this._Ke[c][h] = o[t]),
                (this._Kd[e - c][h] = o[t++]),
                u++;
          }
          for (var c = 1; c < e; c++)
            for (var h = 0; h < 4; h++)
              (s = this._Kd[c][h]),
                (this._Kd[c][h] =
                  _[(s >> 24) & 255] ^
                  S[(s >> 16) & 255] ^
                  j[(s >> 8) & 255] ^
                  E[255 & s]);
        }),
          (O.prototype.encrypt = function(e) {
            if (16 != e.length)
              throw new Error('invalid plaintext size (must be 16 bytes)');
            for (
              var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = x(e), i = 0;
              i < 4;
              i++
            )
              n[i] ^= this._Ke[0][i];
            for (var s = 1; s < t; s++) {
              for (i = 0; i < 4; i++)
                r[i] =
                  p[(n[i] >> 24) & 255] ^
                  b[(n[(i + 1) % 4] >> 16) & 255] ^
                  m[(n[(i + 2) % 4] >> 8) & 255] ^
                  g[255 & n[(i + 3) % 4]] ^
                  this._Ke[s][i];
              n = r.slice();
            }
            var a,
              u = o(16);
            for (i = 0; i < 4; i++)
              (a = this._Ke[t][i]),
                (u[4 * i] = 255 & (f[(n[i] >> 24) & 255] ^ (a >> 24))),
                (u[4 * i + 1] = 255 & (f[(n[(i + 1) % 4] >> 16) & 255] ^ (a >> 16))),
                (u[4 * i + 2] = 255 & (f[(n[(i + 2) % 4] >> 8) & 255] ^ (a >> 8))),
                (u[4 * i + 3] = 255 & (f[255 & n[(i + 3) % 4]] ^ a));
            return u;
          }),
          (O.prototype.decrypt = function(e) {
            if (16 != e.length)
              throw new Error('invalid ciphertext size (must be 16 bytes)');
            for (
              var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = x(e), i = 0;
              i < 4;
              i++
            )
              n[i] ^= this._Kd[0][i];
            for (var s = 1; s < t; s++) {
              for (i = 0; i < 4; i++)
                r[i] =
                  y[(n[i] >> 24) & 255] ^
                  v[(n[(i + 3) % 4] >> 16) & 255] ^
                  w[(n[(i + 2) % 4] >> 8) & 255] ^
                  k[255 & n[(i + 1) % 4]] ^
                  this._Kd[s][i];
              n = r.slice();
            }
            var a,
              u = o(16);
            for (i = 0; i < 4; i++)
              (a = this._Kd[t][i]),
                (u[4 * i] = 255 & (h[(n[i] >> 24) & 255] ^ (a >> 24))),
                (u[4 * i + 1] = 255 & (h[(n[(i + 3) % 4] >> 16) & 255] ^ (a >> 16))),
                (u[4 * i + 2] = 255 & (h[(n[(i + 2) % 4] >> 8) & 255] ^ (a >> 8))),
                (u[4 * i + 3] = 255 & (h[255 & n[(i + 1) % 4]] ^ a));
            return u;
          });
        var A = function(e) {
          if (!(this instanceof A)) throw Error('AES must be instanitated with `new`');
          (this.description = 'Electronic Code Block'),
            (this.name = 'ecb'),
            (this._aes = new O(e));
        };
        (A.prototype.encrypt = function(e) {
          if ((e = i(e)).length % 16 != 0)
            throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
          for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16)
            s(e, r, 0, n, n + 16), s((r = this._aes.encrypt(r)), t, n);
          return t;
        }),
          (A.prototype.decrypt = function(e) {
            if ((e = i(e)).length % 16 != 0)
              throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
            for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16)
              s(e, r, 0, n, n + 16), s((r = this._aes.decrypt(r)), t, n);
            return t;
          });
        var C = function(e, t) {
          if (!(this instanceof C)) throw Error('AES must be instanitated with `new`');
          if (((this.description = 'Cipher Block Chaining'), (this.name = 'cbc'), t)) {
            if (16 != t.length)
              throw new Error('invalid initialation vector size (must be 16 bytes)');
          } else t = o(16);
          (this._lastCipherblock = i(t, !0)), (this._aes = new O(e));
        };
        (C.prototype.encrypt = function(e) {
          if ((e = i(e)).length % 16 != 0)
            throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
          for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
            s(e, r, 0, n, n + 16);
            for (var a = 0; a < 16; a++) r[a] ^= this._lastCipherblock[a];
            (this._lastCipherblock = this._aes.encrypt(r)),
              s(this._lastCipherblock, t, n);
          }
          return t;
        }),
          (C.prototype.decrypt = function(e) {
            if ((e = i(e)).length % 16 != 0)
              throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
            for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
              s(e, r, 0, n, n + 16), (r = this._aes.decrypt(r));
              for (var a = 0; a < 16; a++) t[n + a] = r[a] ^ this._lastCipherblock[a];
              s(e, this._lastCipherblock, 0, n, n + 16);
            }
            return t;
          });
        var R = function(e, t, r) {
          if (!(this instanceof R)) throw Error('AES must be instanitated with `new`');
          if (((this.description = 'Cipher Feedback'), (this.name = 'cfb'), t)) {
            if (16 != t.length)
              throw new Error('invalid initialation vector size (must be 16 size)');
          } else t = o(16);
          r || (r = 1),
            (this.segmentSize = r),
            (this._shiftRegister = i(t, !0)),
            (this._aes = new O(e));
        };
        (R.prototype.encrypt = function(e) {
          if (e.length % this.segmentSize != 0)
            throw new Error('invalid plaintext size (must be segmentSize bytes)');
          for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
            t = this._aes.encrypt(this._shiftRegister);
            for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
            s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
              s(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize);
          }
          return r;
        }),
          (R.prototype.decrypt = function(e) {
            if (e.length % this.segmentSize != 0)
              throw new Error('invalid ciphertext size (must be segmentSize bytes)');
            for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
              t = this._aes.encrypt(this._shiftRegister);
              for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
              s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
                s(e, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize);
            }
            return r;
          });
        var B = function(e, t) {
          if (!(this instanceof B)) throw Error('AES must be instanitated with `new`');
          if (((this.description = 'Output Feedback'), (this.name = 'ofb'), t)) {
            if (16 != t.length)
              throw new Error('invalid initialation vector size (must be 16 bytes)');
          } else t = o(16);
          (this._lastPrecipher = i(t, !0)),
            (this._lastPrecipherIndex = 16),
            (this._aes = new O(e));
        };
        (B.prototype.encrypt = function(e) {
          for (var t = i(e, !0), r = 0; r < t.length; r++)
            16 === this._lastPrecipherIndex &&
              ((this._lastPrecipher = this._aes.encrypt(this._lastPrecipher)),
              (this._lastPrecipherIndex = 0)),
              (t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++]);
          return t;
        }),
          (B.prototype.decrypt = B.prototype.encrypt);
        var P = function(e) {
          if (!(this instanceof P))
            throw Error('Counter must be instanitated with `new`');
          0 === e || e || (e = 1),
            'number' == typeof e
              ? ((this._counter = o(16)), this.setValue(e))
              : this.setBytes(e);
        };
        (P.prototype.setValue = function(e) {
          if ('number' != typeof e || parseInt(e) != e)
            throw new Error('invalid counter value (must be an integer)');
          for (var t = 15; t >= 0; --t) (this._counter[t] = e % 256), (e >>= 8);
        }),
          (P.prototype.setBytes = function(e) {
            if (16 != (e = i(e, !0)).length)
              throw new Error('invalid counter bytes size (must be 16 bytes)');
            this._counter = e;
          }),
          (P.prototype.increment = function() {
            for (var e = 15; e >= 0; e--) {
              if (255 !== this._counter[e]) {
                this._counter[e]++;
                break;
              }
              this._counter[e] = 0;
            }
          });
        var N = function(e, t) {
          if (!(this instanceof N)) throw Error('AES must be instanitated with `new`');
          (this.description = 'Counter'),
            (this.name = 'ctr'),
            t instanceof P || (t = new P(t)),
            (this._counter = t),
            (this._remainingCounter = null),
            (this._remainingCounterIndex = 16),
            (this._aes = new O(e));
        };
        (N.prototype.encrypt = function(e) {
          for (var t = i(e, !0), r = 0; r < t.length; r++)
            16 === this._remainingCounterIndex &&
              ((this._remainingCounter = this._aes.encrypt(this._counter._counter)),
              (this._remainingCounterIndex = 0),
              this._counter.increment()),
              (t[r] ^= this._remainingCounter[this._remainingCounterIndex++]);
          return t;
        }),
          (N.prototype.decrypt = N.prototype.encrypt);
        var I = {
          AES: O,
          Counter: P,
          ModeOfOperation: { ecb: A, cbc: C, cfb: R, ofb: B, ctr: N },
          utils: { hex: c, utf8: u },
          padding: {
            pkcs7: {
              pad: function(e) {
                var t = 16 - ((e = i(e, !0)).length % 16),
                  r = o(e.length + t);
                s(e, r);
                for (var n = e.length; n < r.length; n++) r[n] = t;
                return r;
              },
              strip: function(e) {
                if ((e = i(e, !0)).length < 16) throw new Error('PKCS#7 invalid length');
                var t = e[e.length - 1];
                if (t > 16) throw new Error('PKCS#7 padding byte out of range');
                for (var r = e.length - t, n = 0; n < t; n++)
                  if (e[r + n] !== t) throw new Error('PKCS#7 invalid padding byte');
                var a = o(r);
                return s(e, a, 0, 0, r), a;
              }
            }
          },
          _arrayTest: { coerceArray: i, createArray: o, copyArray: s }
        };
        e.exports = I;
      })();
    },
    '../../node_modules/base-x/src/index.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/safe-buffer/index.js').Buffer;
      e.exports = function(e) {
        if (e.length >= 255) throw new TypeError('Alphabet too long');
        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
        for (var i = 0; i < e.length; i++) {
          var o = e.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== t[s]) throw new TypeError(o + ' is ambiguous');
          t[s] = i;
        }
        var a = e.length,
          u = e.charAt(0),
          c = Math.log(a) / Math.log(256),
          l = Math.log(256) / Math.log(a);
        function d(e) {
          if ('string' != typeof e) throw new TypeError('Expected String');
          if (0 === e.length) return n.alloc(0);
          var r = 0;
          if (' ' !== e[r]) {
            for (var i = 0, o = 0; e[r] === u; ) i++, r++;
            for (var s = ((e.length - r) * c + 1) >>> 0, l = new Uint8Array(s); e[r]; ) {
              var d = t[e.charCodeAt(r)];
              if (255 === d) return;
              for (var f = 0, h = s - 1; (0 !== d || f < o) && -1 !== h; h--, f++)
                (d += (a * l[h]) >>> 0), (l[h] = d % 256 >>> 0), (d = (d / 256) >>> 0);
              if (0 !== d) throw new Error('Non-zero carry');
              (o = f), r++;
            }
            if (' ' !== e[r]) {
              for (var p = s - o; p !== s && 0 === l[p]; ) p++;
              var b = n.allocUnsafe(i + (s - p));
              b.fill(0, 0, i);
              for (var m = i; p !== s; ) b[m++] = l[p++];
              return b;
            }
          }
        }
        return {
          encode: function(t) {
            if (
              ((Array.isArray(t) || t instanceof Uint8Array) && (t = n.from(t)),
              !n.isBuffer(t))
            )
              throw new TypeError('Expected Buffer');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, o = 0, s = t.length; o !== s && 0 === t[o]; ) o++, r++;
            for (var c = ((s - o) * l + 1) >>> 0, d = new Uint8Array(c); o !== s; ) {
              for (
                var f = t[o], h = 0, p = c - 1;
                (0 !== f || h < i) && -1 !== p;
                p--, h++
              )
                (f += (256 * d[p]) >>> 0), (d[p] = f % a >>> 0), (f = (f / a) >>> 0);
              if (0 !== f) throw new Error('Non-zero carry');
              (i = h), o++;
            }
            for (var b = c - i; b !== c && 0 === d[b]; ) b++;
            for (var m = u.repeat(r); b < c; ++b) m += e.charAt(d[b]);
            return m;
          },
          decodeUnsafe: d,
          decode: function(e) {
            var t = d(e);
            if (t) return t;
            throw new Error('Non-base' + a + ' character');
          }
        };
      };
    },
    '../../node_modules/base64url/dist/base64url.js': function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r('../../node_modules/base64url/dist/pad-string.js');
        function i(t, r) {
          return (
            void 0 === r && (r = 'utf8'),
            e.isBuffer(t) ? s(t.toString('base64')) : s(e.from(t, r).toString('base64'))
          );
        }
        function o(e) {
          return (
            (e = e.toString()),
            n
              .default(e)
              .replace(/\-/g, '+')
              .replace(/_/g, '/')
          );
        }
        function s(e) {
          return e
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
        }
        var a = i;
        (a.encode = i),
          (a.decode = function(t, r) {
            return void 0 === r && (r = 'utf8'), e.from(o(t), 'base64').toString(r);
          }),
          (a.toBase64 = o),
          (a.fromBase64 = s),
          (a.toBuffer = function(t) {
            return e.from(o(t), 'base64');
          }),
          (t.default = a);
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/base64url/dist/pad-string.js': function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function(t) {
            var r = t.length,
              n = r % 4;
            if (!n) return t;
            var i = r,
              o = 4 - n,
              s = r + o,
              a = e.alloc(s);
            for (a.write(t); o--; ) a.write('=', i++);
            return a.toString();
          });
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/base64url/index.js': function(e, t, r) {
      (e.exports = r('../../node_modules/base64url/dist/base64url.js').default),
        (e.exports.default = e.exports);
    },
    '../../node_modules/blakejs/blake2b.js': function(e, t, r) {
      var n = r('../../node_modules/blakejs/util.js');
      function i(e, t, r) {
        var n = e[t] + e[r],
          i = e[t + 1] + e[r + 1];
        n >= 4294967296 && i++, (e[t] = n), (e[t + 1] = i);
      }
      function o(e, t, r, n) {
        var i = e[t] + r;
        r < 0 && (i += 4294967296);
        var o = e[t + 1] + n;
        i >= 4294967296 && o++, (e[t] = i), (e[t + 1] = o);
      }
      function s(e, t) {
        return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
      }
      function a(e, t, r, n, s, a) {
        var u = d[s],
          c = d[s + 1],
          f = d[a],
          h = d[a + 1];
        i(l, e, t), o(l, e, u, c);
        var p = l[n] ^ l[e],
          b = l[n + 1] ^ l[e + 1];
        (l[n] = b),
          (l[n + 1] = p),
          i(l, r, n),
          (p = l[t] ^ l[r]),
          (b = l[t + 1] ^ l[r + 1]),
          (l[t] = (p >>> 24) ^ (b << 8)),
          (l[t + 1] = (b >>> 24) ^ (p << 8)),
          i(l, e, t),
          o(l, e, f, h),
          (p = l[n] ^ l[e]),
          (b = l[n + 1] ^ l[e + 1]),
          (l[n] = (p >>> 16) ^ (b << 16)),
          (l[n + 1] = (b >>> 16) ^ (p << 16)),
          i(l, r, n),
          (p = l[t] ^ l[r]),
          (b = l[t + 1] ^ l[r + 1]),
          (l[t] = (b >>> 31) ^ (p << 1)),
          (l[t + 1] = (p >>> 31) ^ (b << 1));
      }
      var u = new Uint32Array([
          4089235720,
          1779033703,
          2227873595,
          3144134277,
          4271175723,
          1013904242,
          1595750129,
          2773480762,
          2917565137,
          1359893119,
          725511199,
          2600822924,
          4215389547,
          528734635,
          327033209,
          1541459225
        ]),
        c = new Uint8Array(
          [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            14,
            10,
            4,
            8,
            9,
            15,
            13,
            6,
            1,
            12,
            0,
            2,
            11,
            7,
            5,
            3,
            11,
            8,
            12,
            0,
            5,
            2,
            15,
            13,
            10,
            14,
            3,
            6,
            7,
            1,
            9,
            4,
            7,
            9,
            3,
            1,
            13,
            12,
            11,
            14,
            2,
            6,
            5,
            10,
            4,
            0,
            15,
            8,
            9,
            0,
            5,
            7,
            2,
            4,
            10,
            15,
            14,
            1,
            11,
            12,
            6,
            8,
            3,
            13,
            2,
            12,
            6,
            10,
            0,
            11,
            8,
            3,
            4,
            13,
            7,
            5,
            15,
            14,
            1,
            9,
            12,
            5,
            1,
            15,
            14,
            13,
            4,
            10,
            0,
            7,
            6,
            3,
            9,
            2,
            8,
            11,
            13,
            11,
            7,
            14,
            12,
            1,
            3,
            9,
            5,
            0,
            15,
            4,
            8,
            6,
            2,
            10,
            6,
            15,
            14,
            9,
            11,
            3,
            0,
            8,
            12,
            2,
            13,
            7,
            1,
            4,
            10,
            5,
            10,
            2,
            8,
            4,
            7,
            6,
            1,
            5,
            15,
            11,
            9,
            14,
            3,
            12,
            13,
            0,
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            14,
            10,
            4,
            8,
            9,
            15,
            13,
            6,
            1,
            12,
            0,
            2,
            11,
            7,
            5,
            3
          ].map(function(e) {
            return 2 * e;
          })
        ),
        l = new Uint32Array(32),
        d = new Uint32Array(32);
      function f(e, t) {
        var r = 0;
        for (r = 0; r < 16; r++) (l[r] = e.h[r]), (l[r + 16] = u[r]);
        for (
          l[24] = l[24] ^ e.t,
            l[25] = l[25] ^ (e.t / 4294967296),
            t && ((l[28] = ~l[28]), (l[29] = ~l[29])),
            r = 0;
          r < 32;
          r++
        )
          d[r] = s(e.b, 4 * r);
        for (r = 0; r < 12; r++)
          a(0, 8, 16, 24, c[16 * r + 0], c[16 * r + 1]),
            a(2, 10, 18, 26, c[16 * r + 2], c[16 * r + 3]),
            a(4, 12, 20, 28, c[16 * r + 4], c[16 * r + 5]),
            a(6, 14, 22, 30, c[16 * r + 6], c[16 * r + 7]),
            a(0, 10, 20, 30, c[16 * r + 8], c[16 * r + 9]),
            a(2, 12, 22, 24, c[16 * r + 10], c[16 * r + 11]),
            a(4, 14, 16, 26, c[16 * r + 12], c[16 * r + 13]),
            a(6, 8, 18, 28, c[16 * r + 14], c[16 * r + 15]);
        for (r = 0; r < 16; r++) e.h[r] = e.h[r] ^ l[r] ^ l[r + 16];
      }
      function h(e, t) {
        if (0 === e || e > 64)
          throw new Error('Illegal output length, expected 0 < length <= 64');
        if (t && t.length > 64)
          throw new Error('Illegal key, expected Uint8Array with 0 < length <= 64');
        for (
          var r = {
              b: new Uint8Array(128),
              h: new Uint32Array(16),
              t: 0,
              c: 0,
              outlen: e
            },
            n = 0;
          n < 16;
          n++
        )
          r.h[n] = u[n];
        var i = t ? t.length : 0;
        return (r.h[0] ^= 16842752 ^ (i << 8) ^ e), t && (p(r, t), (r.c = 128)), r;
      }
      function p(e, t) {
        for (var r = 0; r < t.length; r++)
          128 === e.c && ((e.t += e.c), f(e, !1), (e.c = 0)), (e.b[e.c++] = t[r]);
      }
      function b(e) {
        for (e.t += e.c; e.c < 128; ) e.b[e.c++] = 0;
        f(e, !0);
        for (var t = new Uint8Array(e.outlen), r = 0; r < e.outlen; r++)
          t[r] = e.h[r >> 2] >> (8 * (3 & r));
        return t;
      }
      function m(e, t, r) {
        (r = r || 64), (e = n.normalizeInput(e));
        var i = h(r, t);
        return p(i, e), b(i);
      }
      e.exports = {
        blake2b: m,
        blake2bHex: function(e, t, r) {
          var i = m(e, t, r);
          return n.toHex(i);
        },
        blake2bInit: h,
        blake2bUpdate: p,
        blake2bFinal: b
      };
    },
    '../../node_modules/blakejs/blake2s.js': function(e, t, r) {
      var n = r('../../node_modules/blakejs/util.js');
      function i(e, t) {
        return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
      }
      function o(e, t, r, n, i, o) {
        (c[e] = c[e] + c[t] + i),
          (c[n] = s(c[n] ^ c[e], 16)),
          (c[r] = c[r] + c[n]),
          (c[t] = s(c[t] ^ c[r], 12)),
          (c[e] = c[e] + c[t] + o),
          (c[n] = s(c[n] ^ c[e], 8)),
          (c[r] = c[r] + c[n]),
          (c[t] = s(c[t] ^ c[r], 7));
      }
      function s(e, t) {
        return (e >>> t) ^ (e << (32 - t));
      }
      var a = new Uint32Array([
          1779033703,
          3144134277,
          1013904242,
          2773480762,
          1359893119,
          2600822924,
          528734635,
          1541459225
        ]),
        u = new Uint8Array([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          14,
          10,
          4,
          8,
          9,
          15,
          13,
          6,
          1,
          12,
          0,
          2,
          11,
          7,
          5,
          3,
          11,
          8,
          12,
          0,
          5,
          2,
          15,
          13,
          10,
          14,
          3,
          6,
          7,
          1,
          9,
          4,
          7,
          9,
          3,
          1,
          13,
          12,
          11,
          14,
          2,
          6,
          5,
          10,
          4,
          0,
          15,
          8,
          9,
          0,
          5,
          7,
          2,
          4,
          10,
          15,
          14,
          1,
          11,
          12,
          6,
          8,
          3,
          13,
          2,
          12,
          6,
          10,
          0,
          11,
          8,
          3,
          4,
          13,
          7,
          5,
          15,
          14,
          1,
          9,
          12,
          5,
          1,
          15,
          14,
          13,
          4,
          10,
          0,
          7,
          6,
          3,
          9,
          2,
          8,
          11,
          13,
          11,
          7,
          14,
          12,
          1,
          3,
          9,
          5,
          0,
          15,
          4,
          8,
          6,
          2,
          10,
          6,
          15,
          14,
          9,
          11,
          3,
          0,
          8,
          12,
          2,
          13,
          7,
          1,
          4,
          10,
          5,
          10,
          2,
          8,
          4,
          7,
          6,
          1,
          5,
          15,
          11,
          9,
          14,
          3,
          12,
          13,
          0
        ]),
        c = new Uint32Array(16),
        l = new Uint32Array(16);
      function d(e, t) {
        var r = 0;
        for (r = 0; r < 8; r++) (c[r] = e.h[r]), (c[r + 8] = a[r]);
        for (
          c[12] ^= e.t, c[13] ^= e.t / 4294967296, t && (c[14] = ~c[14]), r = 0;
          r < 16;
          r++
        )
          l[r] = i(e.b, 4 * r);
        for (r = 0; r < 10; r++)
          o(0, 4, 8, 12, l[u[16 * r + 0]], l[u[16 * r + 1]]),
            o(1, 5, 9, 13, l[u[16 * r + 2]], l[u[16 * r + 3]]),
            o(2, 6, 10, 14, l[u[16 * r + 4]], l[u[16 * r + 5]]),
            o(3, 7, 11, 15, l[u[16 * r + 6]], l[u[16 * r + 7]]),
            o(0, 5, 10, 15, l[u[16 * r + 8]], l[u[16 * r + 9]]),
            o(1, 6, 11, 12, l[u[16 * r + 10]], l[u[16 * r + 11]]),
            o(2, 7, 8, 13, l[u[16 * r + 12]], l[u[16 * r + 13]]),
            o(3, 4, 9, 14, l[u[16 * r + 14]], l[u[16 * r + 15]]);
        for (r = 0; r < 8; r++) e.h[r] ^= c[r] ^ c[r + 8];
      }
      function f(e, t) {
        if (!(e > 0 && e <= 32))
          throw new Error('Incorrect output length, should be in [1, 32]');
        var r = t ? t.length : 0;
        if (t && !(r > 0 && r <= 32))
          throw new Error('Incorrect key length, should be in [1, 32]');
        var n = { h: new Uint32Array(a), b: new Uint32Array(64), c: 0, t: 0, outlen: e };
        return (n.h[0] ^= 16842752 ^ (r << 8) ^ e), r > 0 && (h(n, t), (n.c = 64)), n;
      }
      function h(e, t) {
        for (var r = 0; r < t.length; r++)
          64 === e.c && ((e.t += e.c), d(e, !1), (e.c = 0)), (e.b[e.c++] = t[r]);
      }
      function p(e) {
        for (e.t += e.c; e.c < 64; ) e.b[e.c++] = 0;
        d(e, !0);
        for (var t = new Uint8Array(e.outlen), r = 0; r < e.outlen; r++)
          t[r] = (e.h[r >> 2] >> (8 * (3 & r))) & 255;
        return t;
      }
      function b(e, t, r) {
        (r = r || 32), (e = n.normalizeInput(e));
        var i = f(r, t);
        return h(i, e), p(i);
      }
      e.exports = {
        blake2s: b,
        blake2sHex: function(e, t, r) {
          var i = b(e, t, r);
          return n.toHex(i);
        },
        blake2sInit: f,
        blake2sUpdate: h,
        blake2sFinal: p
      };
    },
    '../../node_modules/blakejs/index.js': function(e, t, r) {
      var n = r('../../node_modules/blakejs/blake2b.js'),
        i = r('../../node_modules/blakejs/blake2s.js');
      e.exports = {
        blake2b: n.blake2b,
        blake2bHex: n.blake2bHex,
        blake2bInit: n.blake2bInit,
        blake2bUpdate: n.blake2bUpdate,
        blake2bFinal: n.blake2bFinal,
        blake2s: i.blake2s,
        blake2sHex: i.blake2sHex,
        blake2sInit: i.blake2sInit,
        blake2sUpdate: i.blake2sUpdate,
        blake2sFinal: i.blake2sFinal
      };
    },
    '../../node_modules/blakejs/util.js': function(e, t, r) {
      (function(t) {
        function r(e) {
          return (4294967296 + e).toString(16).substring(1);
        }
        e.exports = {
          normalizeInput: function(e) {
            var r;
            if (e instanceof Uint8Array) r = e;
            else if (e instanceof t) r = new Uint8Array(e);
            else {
              if ('string' != typeof e)
                throw new Error('Input must be an string, Buffer or Uint8Array');
              r = new Uint8Array(t.from(e, 'utf8'));
            }
            return r;
          },
          toHex: function(e) {
            return Array.prototype.map
              .call(e, function(e) {
                return (e < 16 ? '0' : '') + e.toString(16);
              })
              .join('');
          },
          debugPrint: function(e, t, n) {
            for (var i = '\n' + e + ' = ', o = 0; o < t.length; o += 2) {
              if (32 === n)
                (i += r(t[o]).toUpperCase()),
                  (i += ' '),
                  (i += r(t[o + 1]).toUpperCase());
              else {
                if (64 !== n) throw new Error('Invalid size ' + n);
                (i += r(t[o + 1]).toUpperCase()), (i += r(t[o]).toUpperCase());
              }
              o % 6 == 4
                ? (i += '\n' + new Array(e.length + 4).join(' '))
                : o < t.length - 2 && (i += ' ');
            }
            console.log(i);
          },
          testSpeed: function(e, t, r) {
            for (var n = new Date().getTime(), i = new Uint8Array(t), o = 0; o < t; o++)
              i[o] = o % 256;
            var s = new Date().getTime();
            for (
              console.log('Generated random input in ' + (s - n) + 'ms'), n = s, o = 0;
              o < r;
              o++
            ) {
              var a = e(i),
                u = new Date().getTime(),
                c = u - n;
              (n = u),
                console.log('Hashed in ' + c + 'ms: ' + a.substring(0, 20) + '...'),
                console.log(
                  Math.round((t / (1 << 20) / (c / 1e3)) * 100) / 100 + ' MB PER SECOND'
                );
            }
          }
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/cids/src/cid-util.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/multihashes/src/index.js'),
        { Buffer: i } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        );
      var o = {
        checkCIDComponents: function(e) {
          if (null == e) return 'null values are not valid CIDs';
          if (0 !== e.version && 1 !== e.version)
            return 'Invalid version, must be a number equal to 1 or 0';
          if ('string' != typeof e.codec) return 'codec must be string';
          if (0 === e.version) {
            if ('dag-pb' !== e.codec) return "codec must be 'dag-pb' for CIDv0";
            if ('base58btc' !== e.multibaseName)
              return "multibaseName must be 'base58btc' for CIDv0";
          }
          if (!i.isBuffer(e.multihash)) return 'multihash must be a Buffer';
          try {
            n.validate(e.multihash);
          } catch (e) {
            let t = e.message;
            return t || (t = 'Multihash validation failed'), t;
          }
        }
      };
      e.exports = o;
    },
    '../../node_modules/cids/src/index.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        ),
        i = r('../../node_modules/multihashes/src/index.js'),
        o = r('../../node_modules/multibase/src/index.js'),
        s = r('../../node_modules/multicodec/src/index.js'),
        a = r('../../node_modules/multicodec/src/base-table.json'),
        u = r('../../node_modules/cids/src/cid-util.js'),
        c = r('../../node_modules/class-is/index.js');
      class l {
        constructor(e, t, r, a) {
          if (d.isCID(e)) {
            const t = e;
            return (
              (this.version = t.version),
              (this.codec = t.codec),
              (this.multihash = n.from(t.multihash)),
              void (this.multibaseName =
                t.multibaseName || (0 === t.version ? 'base58btc' : 'base32'))
            );
          }
          if ('string' == typeof e) {
            const t = o.isEncoded(e);
            if (t) {
              const r = o.decode(e);
              (this.version = parseInt(r.slice(0, 1).toString('hex'), 16)),
                (this.codec = s.getCodec(r.slice(1))),
                (this.multihash = s.rmPrefix(r.slice(1))),
                (this.multibaseName = t);
            } else
              (this.version = 0),
                (this.codec = 'dag-pb'),
                (this.multihash = i.fromB58String(e)),
                (this.multibaseName = 'base58btc');
            return (
              l.validateCID(this),
              void Object.defineProperty(this, 'string', { value: e })
            );
          }
          if (n.isBuffer(e)) {
            const t = e.slice(0, 1),
              r = parseInt(t.toString('hex'), 16);
            if (1 === r) {
              const t = e;
              (this.version = r),
                (this.codec = s.getCodec(t.slice(1))),
                (this.multihash = s.rmPrefix(t.slice(1))),
                (this.multibaseName = 'base32');
            } else
              (this.version = 0),
                (this.codec = 'dag-pb'),
                (this.multihash = e),
                (this.multibaseName = 'base58btc');
            l.validateCID(this);
          } else
            (this.version = e),
              (this.codec = t),
              (this.multihash = r),
              (this.multibaseName = a || (0 === e ? 'base58btc' : 'base32')),
              l.validateCID(this);
        }
        get buffer() {
          let e = this._buffer;
          if (!e) {
            if (0 === this.version) e = this.multihash;
            else {
              if (1 !== this.version) throw new Error('unsupported version');
              e = n.concat([
                n.from('01', 'hex'),
                s.getCodeVarint(this.codec),
                this.multihash
              ]);
            }
            Object.defineProperty(this, '_buffer', { value: e });
          }
          return e;
        }
        get prefix() {
          return n.concat([
            n.from(`0${this.version}`, 'hex'),
            s.getCodeVarint(this.codec),
            i.prefix(this.multihash)
          ]);
        }
        toV0() {
          if ('dag-pb' !== this.codec)
            throw new Error('Cannot convert a non dag-pb CID to CIDv0');
          const { name: e, length: t } = i.decode(this.multihash);
          if ('sha2-256' !== e)
            throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0');
          if (32 !== t)
            throw new Error('Cannot convert non 32 byte multihash CID to CIDv0');
          return new d(0, this.codec, this.multihash);
        }
        toV1() {
          return new d(1, this.codec, this.multihash);
        }
        toBaseEncodedString(e = this.multibaseName) {
          if (this.string && e === this.multibaseName) return this.string;
          let t = null;
          if (0 === this.version) {
            if ('base58btc' !== e)
              throw new Error(
                'not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()'
              );
            t = i.toB58String(this.multihash);
          } else {
            if (1 !== this.version) throw new Error('unsupported version');
            t = o.encode(e, this.buffer).toString();
          }
          return (
            e === this.multibaseName &&
              Object.defineProperty(this, 'string', { value: t }),
            t
          );
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
          return 'CID(' + this.toString() + ')';
        }
        toString(e) {
          return this.toBaseEncodedString(e);
        }
        toJSON() {
          return { codec: this.codec, version: this.version, hash: this.multihash };
        }
        equals(e) {
          return (
            this.codec === e.codec &&
            this.version === e.version &&
            this.multihash.equals(e.multihash)
          );
        }
        static validateCID(e) {
          const t = u.checkCIDComponents(e);
          if (t) throw new Error(t);
        }
      }
      const d = c(l, { className: 'CID', symbolName: '@ipld/js-cid/CID' });
      (d.codecs = a), (e.exports = d);
    },
    '../../node_modules/class-is/index.js': function(e, t, r) {
      'use strict';
      (e.exports = function(e, { className: t, symbolName: r }) {
        const n = Symbol.for(r),
          i = {
            [t]: class extends e {
              constructor(...e) {
                super(...e), Object.defineProperty(this, n, { value: !0 });
              }
              get [Symbol.toStringTag]() {
                return t;
              }
            }
          }[t];
        return (i[`is${t}`] = e => !(!e || !e[n])), i;
      }),
        (e.exports.proto = function(e, { className: t, symbolName: r, withoutNew: n }) {
          const i = Symbol.for(r),
            o = {
              [t]: function(...t) {
                if (n && !(this instanceof o)) return new o(...t);
                const r = e.call(this, ...t) || this;
                return r && !r[i] && Object.defineProperty(r, i, { value: !0 }), r;
              }
            }[t];
          return (
            (o.prototype = Object.create(e.prototype)),
            (o.prototype.constructor = o),
            Object.defineProperty(o.prototype, Symbol.toStringTag, { get: () => t }),
            (o[`is${t}`] = e => !(!e || !e[i])),
            o
          );
        });
    },
    '../../node_modules/did-jwt/lib/Digest.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.sha256 = function(e) {
          return o.Buffer.from(n.sha256.arrayBuffer(e));
        }),
        (t.keccak = s),
        (t.toEthereumAddress = function(e) {
          return '0x'.concat(
            s(o.Buffer.from(e.slice(2), 'hex'))
              .slice(-20)
              .toString('hex')
          );
        });
      var n = r('../../node_modules/js-sha256/src/sha256.js'),
        i = r('../../node_modules/js-sha3/src/sha3.js'),
        o = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js');
      function s(e) {
        return o.Buffer.from(i.keccak_256.buffer(e));
      }
    },
    '../../node_modules/did-jwt/lib/JWT.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.normalizeDID = m),
        (t.decodeJWT = g),
        (t.createJWT = y),
        (t.verifyJWT = w),
        (t.resolveAuthenticator = _),
        (t.default = t.IAT_SKEW = void 0);
      var i = n(r('../../node_modules/@babel/runtime/regenerator/index.js')),
        o = n(r('../../node_modules/@babel/runtime/helpers/objectSpread.js')),
        s = n(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
        a = n(r('../../node_modules/did-jwt/lib/VerifierAlgorithm.js')),
        u = n(r('../../node_modules/did-jwt/lib/SignerAlgorithm.js')),
        c = n(r('../../node_modules/base64url/index.js')),
        l = n(r('../../node_modules/did-resolver/lib/resolver.js')),
        d = {
          ES256K: [
            'Secp256k1VerificationKey2018',
            'Secp256k1SignatureVerificationKey2018',
            'EcdsaPublicKeySecp256k1'
          ],
          'ES256K-R': [
            'Secp256k1VerificationKey2018',
            'Secp256k1SignatureVerificationKey2018',
            'EcdsaPublicKeySecp256k1'
          ],
          Ed25519: ['ED25519SignatureVerification']
        },
        f = { typ: 'JWT' };
      function h(e) {
        return c.default.encode(JSON.stringify(e));
      }
      function p(e) {
        return e.match(/^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/);
      }
      function b(e) {
        return e && (e.match(/^did:/) || p(e));
      }
      function m(e) {
        if (e.match(/^did:/)) return e;
        if (p(e)) return 'did:uport:'.concat(e);
        throw new Error("Not a valid DID '".concat(e, "'"));
      }
      function g(e) {
        if (!e) throw new Error('no JWT passed into decodeJWT');
        var t = e.match(/^([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)$/);
        if (t)
          return {
            header: JSON.parse(c.default.decode(t[1])),
            payload: JSON.parse(c.default.decode(t[2])),
            signature: t[3],
            data: ''.concat(t[1], '.').concat(t[2])
          };
        throw new Error('Incorrect format JWT');
      }
      function y(e, t) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, s.default)(
          i.default.mark(function e(t, r) {
            var n, s, a, c, l, d, p, b, m;
            return i.default.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = r.issuer),
                        (s = r.signer),
                        (a = r.alg),
                        (c = r.expiresIn),
                        s)
                      ) {
                        e.next = 3;
                        break;
                      }
                      throw new Error('No Signer functionality has been configured');
                    case 3:
                      if (n) {
                        e.next = 5;
                        break;
                      }
                      throw new Error('No issuing DID has been configured');
                    case 5:
                      if (
                        ((l = (0, o.default)({}, f, { alg: a || 'ES256K' })),
                        (d = { iat: Math.floor(Date.now() / 1e3) }),
                        !c)
                      ) {
                        e.next = 13;
                        break;
                      }
                      if ('number' != typeof c) {
                        e.next = 12;
                        break;
                      }
                      (d.exp = d.iat + Math.floor(c)), (e.next = 13);
                      break;
                    case 12:
                      throw new Error('JWT expiresIn is not a number');
                    case 13:
                      return (
                        (p = [h(l), h((0, o.default)({}, d, t, { iss: n }))].join('.')),
                        (b = (0, u.default)(l.alg)),
                        (e.next = 17),
                        b(p, s)
                      );
                    case 17:
                      return (m = e.sent), e.abrupt('return', [p, m].join('.'));
                    case 19:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )).apply(this, arguments);
      }
      function w(e) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = (0, s.default)(
          i.default.mark(function e(t) {
            var r,
              n,
              o,
              s,
              u,
              c,
              l,
              d,
              f,
              h,
              p,
              y,
              v,
              w = arguments;
            return i.default.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = w.length > 1 && void 0 !== w[1] ? w[1] : {}),
                        (n = r.audience ? m(r.audience) : void 0),
                        (o = g(t)),
                        (s = o.payload),
                        (u = o.header),
                        (c = o.signature),
                        (l = o.data),
                        (e.next = 5),
                        _(u.alg, s.iss, r.auth)
                      );
                    case 5:
                      if (
                        ((d = e.sent),
                        (f = d.doc),
                        (h = d.authenticators),
                        (p = d.issuer),
                        (y = (0, a.default)(u.alg)(l, c, h)),
                        (v = Math.floor(Date.now() / 1e3)),
                        !y)
                      ) {
                        e.next = 31;
                        break;
                      }
                      if (!(s.iat && s.iat > v + 300)) {
                        e.next = 14;
                        break;
                      }
                      throw new Error(
                        'JWT not valid yet (issued in the future): iat: '
                          .concat(s.iat, ' > now: ')
                          .concat(v)
                      );
                    case 14:
                      if (!(s.exp && s.exp <= v - 300)) {
                        e.next = 16;
                        break;
                      }
                      throw new Error(
                        'JWT has expired: exp: '.concat(s.exp, ' < now: ').concat(v)
                      );
                    case 16:
                      if (!s.aud) {
                        e.next = 28;
                        break;
                      }
                      if (!b(s.aud)) {
                        e.next = 24;
                        break;
                      }
                      if (n) {
                        e.next = 20;
                        break;
                      }
                      throw new Error(
                        'JWT audience is required but your app address has not been configured'
                      );
                    case 20:
                      if (n === m(s.aud)) {
                        e.next = 22;
                        break;
                      }
                      throw new Error(
                        'JWT audience does not match your DID: aud: '
                          .concat(s.aud, ' !== yours: ')
                          .concat(n)
                      );
                    case 22:
                      e.next = 28;
                      break;
                    case 24:
                      if (r.callbackUrl) {
                        e.next = 26;
                        break;
                      }
                      throw new Error(
                        "JWT audience matching your callback url is required but one wasn't passed in"
                      );
                    case 26:
                      if (s.aud === r.callbackUrl) {
                        e.next = 28;
                        break;
                      }
                      throw new Error(
                        'JWT audience does not match the callback url: aud: '
                          .concat(s.aud, ' !== url: ')
                          .concat(r.callbackUrl)
                      );
                    case 28:
                      return e.abrupt('return', {
                        payload: s,
                        doc: f,
                        issuer: p,
                        signer: y,
                        jwt: t
                      });
                    case 31:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )).apply(this, arguments);
      }
      function _(e, t, r) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = (0, s.default)(
          i.default.mark(function e(t, r, n) {
            var o, s, a, u, c;
            return i.default.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((o = d[t]) && 0 !== o.length) {
                        e.next = 3;
                        break;
                      }
                      throw new Error(
                        'No supported signature types for algorithm '.concat(t)
                      );
                    case 3:
                      return (s = m(r)), (e.next = 6), (0, l.default)(s);
                    case 6:
                      if ((a = e.sent)) {
                        e.next = 9;
                        break;
                      }
                      throw new Error('Unable to resolve DID document for '.concat(s));
                    case 9:
                      if (
                        ((u =
                          !n ||
                          (a.authentication || []).map(function(e) {
                            return e.publicKey;
                          })),
                        (c = (a.publicKey || []).filter(function(e) {
                          var t = e.type,
                            r = e.id;
                          return o.find(function(e) {
                            return e === t && (!n || u.indexOf(r) >= 0);
                          });
                        })),
                        !n || (c && 0 !== c.length))
                      ) {
                        e.next = 13;
                        break;
                      }
                      throw new Error(
                        'DID document for '.concat(
                          s,
                          ' does not have public keys suitable for authenticationg user'
                        )
                      );
                    case 13:
                      if (c && 0 !== c.length) {
                        e.next = 15;
                        break;
                      }
                      throw new Error(
                        'DID document for '
                          .concat(s, ' does not have public keys for ')
                          .concat(t)
                      );
                    case 15:
                      return e.abrupt('return', { authenticators: c, issuer: s, doc: a });
                    case 16:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )).apply(this, arguments);
      }
      t.IAT_SKEW = 300;
      var j = { decodeJWT: g, createJWT: y, verifyJWT: w, resolveAuthenticator: _ };
      t.default = j;
    },
    '../../node_modules/did-jwt/lib/NaclSigner.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
        i = n(r('../../node_modules/@babel/runtime/regenerator/index.js')),
        o = n(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
        s = n(r('../../node_modules/tweetnacl/nacl-fast.js')),
        a = n(r('../../node_modules/tweetnacl-util/nacl-util.js'));
      function u(e) {
        return a.default
          .encodeBase64(e)
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '');
      }
      e.exports = function(e) {
        var t = a.default.decodeBase64(e);
        return (function() {
          var e = (0, o.default)(
            i.default.mark(function e(r) {
              return i.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          'return',
                          u(s.default.sign.detached(a.default.decodeUTF8(r), t))
                        );
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      };
    },
    '../../node_modules/did-jwt/lib/SignerAlgorithm.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ES256KSigner = u),
        (t.Ed25519Signer = c);
      var i = n(r('../../node_modules/@babel/runtime/regenerator/index.js')),
        o = n(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
        s = n(r('../../node_modules/base64url/index.js')),
        a = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js');
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        function t(t) {
          var r = t.r,
            n = t.s,
            i = t.recoveryParam,
            o = a.Buffer.alloc(e ? 65 : 64);
          if (
            (a.Buffer.from(r, 'hex').copy(o, 0), a.Buffer.from(n, 'hex').copy(o, 32), e)
          ) {
            if (void 0 === i) throw new Error('Signer did not return a recoveryParam');
            o[64] = i;
          }
          return s.default.encode(o);
        }
        return (function() {
          var e = (0, o.default)(
            i.default.mark(function e(r, n) {
              var o;
              return i.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), n(r);
                      case 2:
                        return (o = e.sent), e.abrupt('return', t(o));
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })();
      }
      function c() {
        return (function() {
          var e = (0, o.default)(
            i.default.mark(function e(t, r) {
              return i.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt('return', r(t));
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function(t, r) {
            return e.apply(this, arguments);
          };
        })();
      }
      var l = { ES256K: u(), 'ES256K-R': u(!0), Ed25519: c() };
      e.exports = function(e) {
        var t = l[e];
        if (!t) throw new Error('Unsupported algorithm '.concat(e));
        return t;
      };
    },
    '../../node_modules/did-jwt/lib/SimpleSigner.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
        i = n(r('../../node_modules/@babel/runtime/regenerator/index.js')),
        o = n(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
        s = r('../../node_modules/elliptic/lib/elliptic.js'),
        a = r('../../node_modules/did-jwt/lib/Digest.js'),
        u = new s.ec('secp256k1');
      function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 64;
        return e.length === t ? e : '0'.repeat(t - e.length) + e;
      }
      e.exports = function(e) {
        var t = u.keyFromPrivate(e);
        return (function() {
          var e = (0, o.default)(
            i.default.mark(function e(r) {
              var n, o, s, u;
              return i.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.sign((0, a.sha256)(r))),
                          (o = n.r),
                          (s = n.s),
                          (u = n.recoveryParam),
                          e.abrupt('return', {
                            r: c(o.toString('hex')),
                            s: c(s.toString('hex')),
                            recoveryParam: u
                          })
                        );
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      };
    },
    '../../node_modules/did-jwt/lib/VerifierAlgorithm.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.toSignatureObject = l),
        (t.verifyES256K = d),
        (t.verifyRecoverableES256K = f),
        (t.verifyEd25519 = h);
      var i = r('../../node_modules/elliptic/lib/elliptic.js'),
        o = r('../../node_modules/did-jwt/lib/Digest.js'),
        s = n(r('../../node_modules/base64url/index.js')),
        a = n(r('../../node_modules/tweetnacl/nacl-fast.js')),
        u = n(r('../../node_modules/tweetnacl-util/nacl-util.js')),
        c = new i.ec('secp256k1');
      function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = s.default.toBuffer(e);
        if (r.length !== (t ? 65 : 64)) throw new Error('wrong signature length');
        var n = r.slice(0, 32).toString('hex'),
          i = r.slice(32, 64).toString('hex'),
          o = { r: n, s: i };
        return t && (o.recoveryParam = r[64]), o;
      }
      function d(e, t, r) {
        var n = (0, o.sha256)(e),
          i = l(t),
          s = r.find(function(e) {
            var t = e.publicKeyHex;
            return c.keyFromPublic(t, 'hex').verify(n, i);
          });
        if (!s) throw new Error('Signature invalid for JWT');
        return s;
      }
      function f(e, t, r) {
        var n = l(t, !0),
          i = (0, o.sha256)(e),
          s = c.recoverPubKey(i, n, n.recoveryParam),
          a = s.encode('hex'),
          u = s.encode('hex', !0),
          d = (0, o.toEthereumAddress)(a),
          f = r.find(function(e) {
            var t = e.publicKeyHex,
              r = e.ethereumAddress;
            return t === a || t === u || r === d;
          });
        if (!f) throw new Error('Signature invalid for JWT');
        return f;
      }
      function h(e, t, r) {
        var n = u.default.decodeUTF8(e),
          i = u.default.decodeBase64(s.default.toBase64(t)),
          o = r.find(function(e) {
            var t = e.publicKeyBase64;
            return a.default.sign.detached.verify(n, i, u.default.decodeBase64(t));
          });
        if (!o) throw new Error('Signature invalid for JWT');
        return o;
      }
      var p = { ES256K: d, 'ES256K-R': f, Ed25519: h };
      function b(e) {
        var t = p[e];
        if (!t) throw new Error('Unsupported algorithm '.concat(e));
        return t;
      }
      (b.toSignatureObject = l), (e.exports = b);
    },
    '../../node_modules/did-jwt/lib/index.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
        i = n(r('../../node_modules/did-jwt/lib/SimpleSigner.js')),
        o = n(r('../../node_modules/did-jwt/lib/NaclSigner.js')),
        s = r('../../node_modules/did-jwt/lib/JWT.js');
      e.exports = {
        SimpleSigner: i.default,
        NaclSigner: o.default,
        verifyJWT: s.verifyJWT,
        createJWT: s.createJWT,
        decodeJWT: s.decodeJWT
      };
    },
    '../../node_modules/did-resolver/lib/resolver.js': function(e, t, r) {
      'use strict';
      (function(e) {
        var r,
          n,
          i =
            (this && this.__awaiter) ||
            function(e, t, r, n) {
              return new (r || (r = Promise))(function(i, o) {
                function s(e) {
                  try {
                    u(n.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  try {
                    u(n.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  e.done
                    ? i(e.value)
                    : new r(function(t) {
                        t(e.value);
                      }).then(s, a);
                }
                u((n = n.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function(e, t) {
              var r,
                n,
                i,
                o,
                s = {
                  label: 0,
                  sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: []
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                'function' == typeof Symbol &&
                  (o[Symbol.iterator] = function() {
                    return this;
                  }),
                o
              );
              function a(o) {
                return function(a) {
                  return (function(o) {
                    if (r) throw new TypeError('Generator is already executing.');
                    for (; s; )
                      try {
                        if (
                          ((r = 1),
                          n &&
                            (i =
                              2 & o[0]
                                ? n.return
                                : o[0]
                                ? n.throw || ((i = n.return) && i.call(n), 0)
                                : n.next) &&
                            !(i = i.call(n, o[1])).done)
                        )
                          return i;
                        switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return s.label++, { value: o[1], done: !1 };
                          case 5:
                            s.label++, (n = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = s.ops.pop()), s.trys.pop();
                            continue;
                          default:
                            if (
                              !((i = s.trys),
                              (i = i.length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0]))
                            ) {
                              s = 0;
                              continue;
                            }
                            if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                              s.label = o[1];
                              break;
                            }
                            if (6 === o[0] && s.label < i[1]) {
                              (s.label = i[1]), (i = o);
                              break;
                            }
                            if (i && s.label < i[2]) {
                              (s.label = i[2]), s.ops.push(o);
                              break;
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue;
                        }
                        o = t.call(e, s);
                      } catch (e) {
                        (o = [6, e]), (n = 0);
                      } finally {
                        r = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, a]);
                };
              }
            };
        function s(e) {
          if ('' === e) throw new Error('Missing DID');
          var t = e.match(/^did:([a-zA-Z0-9_]+):([[a-zA-Z0-9_.-]+)(\/[^#]*)?(#.*)?$/);
          if (t) {
            var r = { did: t[0], method: t[1], id: t[2] };
            return t[3] && (r.path = t[3]), t[4] && (r.fragment = t[4].slice(1)), r;
          }
          throw new Error('Invalid DID ' + e);
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (r =
            'object' == typeof window
              ? window
              : 'object' == typeof e
              ? e
              : { DID_REGISTRY: {} }),
          (n = r.DID_REGISTRY ? r.DID_REGISTRY : (r.DID_REGISTRY = {})),
          (t.registerMethod = function(e, t) {
            n[e] = t;
          }),
          (t.parse = s),
          (t.default = function(e) {
            return i(this, void 0, void 0, function() {
              var t, r;
              return o(this, function(i) {
                switch (i.label) {
                  case 0:
                    return (t = s(e)), (r = n[t.method]) ? [4, r(e, t)] : [3, 2];
                  case 1:
                    return [2, i.sent()];
                  case 2:
                    throw new Error("Unsupported DID method: '" + t.method + "'");
                }
              });
            });
          });
      }.call(this, r('../../node_modules/webpack/buildin/global.js')));
    },
    '../../node_modules/err-code/index.js': function(e, t, r) {
      'use strict';
      e.exports = function(e, t, r) {
        var n;
        if (!(e instanceof Error))
          throw new TypeError('Please pass an Error to err-code');
        if (('object' == typeof t ? (r = t) : null != t && (e.code = t), r))
          for (n in r) e[n] = r[n];
        return e;
      };
    },
    '../../node_modules/graphql-request/dist/src/index.js': function(e, t, r) {
      'use strict';
      var n =
          (this && this.__assign) ||
          Object.assign ||
          function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          },
        i =
          (this && this.__awaiter) ||
          function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
              function s(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                e.done
                  ? i(e.value)
                  : new r(function(t) {
                      t(e.value);
                    }).then(s, a);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function(e, t) {
            var r,
              n,
              i,
              o,
              s = {
                label: 0,
                sent: function() {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              'function' == typeof Symbol &&
                (o[Symbol.iterator] = function() {
                  return this;
                }),
              o
            );
            function a(o) {
              return function(a) {
                return (function(o) {
                  if (r) throw new TypeError('Generator is already executing.');
                  for (; s; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i = n[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) &&
                          !(i = i.call(n, o[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (o = [0, i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (n = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          },
        s =
          (this && this.__rest) ||
          function(e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (r[n] = e[n]);
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
              var i = 0;
              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                t.indexOf(n[i]) < 0 && (r[n[i]] = e[n[i]]);
            }
            return r;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r('../../node_modules/graphql-request/dist/src/types.js'),
        u = r('../../node_modules/graphql-request/dist/src/types.js');
      (t.ClientError = u.ClientError),
        r(
          '../../node_modules/graphql-request/node_modules/cross-fetch/dist/browser-polyfill.js'
        );
      var c = (function() {
        function e(e, t) {
          (this.url = e), (this.options = t || {});
        }
        return (
          (e.prototype.rawRequest = function(e, t) {
            return i(this, void 0, void 0, function() {
              var r, i, u, c, l, f, h, p, b;
              return o(this, function(o) {
                switch (o.label) {
                  case 0:
                    return (
                      (r = this.options),
                      (i = r.headers),
                      (u = s(r, ['headers'])),
                      (c = JSON.stringify({ query: e, variables: t || void 0 })),
                      [
                        4,
                        fetch(
                          this.url,
                          n(
                            {
                              method: 'POST',
                              headers: Object.assign(
                                { 'Content-Type': 'application/json' },
                                i
                              ),
                              body: c
                            },
                            u
                          )
                        )
                      ]
                    );
                  case 1:
                    return [4, d((l = o.sent()))];
                  case 2:
                    if (((f = o.sent()), l.ok && !f.errors && f.data))
                      return (
                        (h = l.headers),
                        (p = l.status),
                        [2, n({}, f, { headers: h, status: p })]
                      );
                    throw ((b = 'string' == typeof f ? { error: f } : f),
                    new a.ClientError(
                      n({}, b, { status: l.status, headers: l.headers }),
                      { query: e, variables: t }
                    ));
                }
              });
            });
          }),
          (e.prototype.request = function(e, t) {
            return i(this, void 0, void 0, function() {
              var r, i, u, c, l, f, h;
              return o(this, function(o) {
                switch (o.label) {
                  case 0:
                    return (
                      (r = this.options),
                      (i = r.headers),
                      (u = s(r, ['headers'])),
                      (c = JSON.stringify({ query: e, variables: t || void 0 })),
                      [
                        4,
                        fetch(
                          this.url,
                          n(
                            {
                              method: 'POST',
                              headers: Object.assign(
                                { 'Content-Type': 'application/json' },
                                i
                              ),
                              body: c
                            },
                            u
                          )
                        )
                      ]
                    );
                  case 1:
                    return [4, d((l = o.sent()))];
                  case 2:
                    if (((f = o.sent()), l.ok && !f.errors && f.data)) return [2, f.data];
                    throw ((h = 'string' == typeof f ? { error: f } : f),
                    new a.ClientError(n({}, h, { status: l.status }), {
                      query: e,
                      variables: t
                    }));
                }
              });
            });
          }),
          (e.prototype.setHeaders = function(e) {
            return (this.options.headers = e), this;
          }),
          (e.prototype.setHeader = function(e, t) {
            var r,
              n = this.options.headers;
            return n ? (n[e] = t) : (this.options.headers = (((r = {})[e] = t), r)), this;
          }),
          e
        );
      })();
      function l(e, t, r) {
        return i(this, void 0, void 0, function() {
          return o(this, function(n) {
            return [2, new c(e).request(t, r)];
          });
        });
      }
      function d(e) {
        return i(this, void 0, void 0, function() {
          var t;
          return o(this, function(r) {
            return (t = e.headers.get('Content-Type')) && t.startsWith('application/json')
              ? [2, e.json()]
              : [2, e.text()];
          });
        });
      }
      (t.GraphQLClient = c),
        (t.rawRequest = function(e, t, r) {
          return i(this, void 0, void 0, function() {
            return o(this, function(n) {
              return [2, new c(e).rawRequest(t, r)];
            });
          });
        }),
        (t.request = l),
        (t.default = l);
    },
    '../../node_modules/graphql-request/dist/src/types.js': function(e, t, r) {
      'use strict';
      var n,
        i =
          (this && this.__extends) ||
          ((n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          function(e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = (function(e) {
        function t(r, n) {
          var i = this,
            o = t.extractMessage(r) + ': ' + JSON.stringify({ response: r, request: n });
          return (
            ((i = e.call(this, o) || this).response = r),
            (i.request = n),
            'function' == typeof Error.captureStackTrace && Error.captureStackTrace(i, t),
            i
          );
        }
        return (
          i(t, e),
          (t.extractMessage = function(e) {
            try {
              return e.errors[0].message;
            } catch (t) {
              return 'GraphQL Error (Code: ' + e.status + ')';
            }
          }),
          t
        );
      })(Error);
      t.ClientError = o;
    },
    '../../node_modules/graphql-request/node_modules/cross-fetch/dist/browser-polyfill.js': function(
      e,
      t
    ) {
      !(function(e) {
        if (!e.fetch) {
          var t = 'URLSearchParams' in e,
            r = 'Symbol' in e && 'iterator' in Symbol,
            n =
              'FileReader' in e &&
              'Blob' in e &&
              (function() {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            i = 'FormData' in e,
            o = 'ArrayBuffer' in e;
          if (o)
            var s = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]'
              ],
              a = function(e) {
                return e && DataView.prototype.isPrototypeOf(e);
              },
              u =
                ArrayBuffer.isView ||
                function(e) {
                  return e && s.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          (p.prototype.append = function(e, t) {
            (e = d(e)), (t = f(t));
            var r = this.map[e];
            this.map[e] = r ? r + ',' + t : t;
          }),
            (p.prototype.delete = function(e) {
              delete this.map[d(e)];
            }),
            (p.prototype.get = function(e) {
              return (e = d(e)), this.has(e) ? this.map[e] : null;
            }),
            (p.prototype.has = function(e) {
              return this.map.hasOwnProperty(d(e));
            }),
            (p.prototype.set = function(e, t) {
              this.map[d(e)] = f(t);
            }),
            (p.prototype.forEach = function(e, t) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }),
            (p.prototype.keys = function() {
              var e = [];
              return (
                this.forEach(function(t, r) {
                  e.push(r);
                }),
                h(e)
              );
            }),
            (p.prototype.values = function() {
              var e = [];
              return (
                this.forEach(function(t) {
                  e.push(t);
                }),
                h(e)
              );
            }),
            (p.prototype.entries = function() {
              var e = [];
              return (
                this.forEach(function(t, r) {
                  e.push([r, t]);
                }),
                h(e)
              );
            }),
            r && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var c = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
          (w.prototype.clone = function() {
            return new w(this, { body: this._bodyInit });
          }),
            v.call(w.prototype),
            v.call(_.prototype),
            (_.prototype.clone = function() {
              return new _(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new p(this.headers),
                url: this.url
              });
            }),
            (_.error = function() {
              var e = new _(null, { status: 0, statusText: '' });
              return (e.type = 'error'), e;
            });
          var l = [301, 302, 303, 307, 308];
          (_.redirect = function(e, t) {
            if (-1 === l.indexOf(t)) throw new RangeError('Invalid status code');
            return new _(null, { status: t, headers: { location: e } });
          }),
            (e.Headers = p),
            (e.Request = w),
            (e.Response = _),
            (e.fetch = function(e, t) {
              return new Promise(function(r, i) {
                var o = new w(e, t),
                  s = new XMLHttpRequest();
                (s.onload = function() {
                  var e,
                    t,
                    n = {
                      status: s.status,
                      statusText: s.statusText,
                      headers:
                        ((e = s.getAllResponseHeaders() || ''),
                        (t = new p()),
                        e
                          .replace(/\r?\n[\t ]+/g, ' ')
                          .split(/\r?\n/)
                          .forEach(function(e) {
                            var r = e.split(':'),
                              n = r.shift().trim();
                            if (n) {
                              var i = r.join(':').trim();
                              t.append(n, i);
                            }
                          }),
                        t)
                    };
                  n.url =
                    'responseURL' in s ? s.responseURL : n.headers.get('X-Request-URL');
                  var i = 'response' in s ? s.response : s.responseText;
                  r(new _(i, n));
                }),
                  (s.onerror = function() {
                    i(new TypeError('Network request failed'));
                  }),
                  (s.ontimeout = function() {
                    i(new TypeError('Network request failed'));
                  }),
                  s.open(o.method, o.url, !0),
                  'include' === o.credentials
                    ? (s.withCredentials = !0)
                    : 'omit' === o.credentials && (s.withCredentials = !1),
                  'responseType' in s && n && (s.responseType = 'blob'),
                  o.headers.forEach(function(e, t) {
                    s.setRequestHeader(t, e);
                  }),
                  s.send(void 0 === o._bodyInit ? null : o._bodyInit);
              });
            }),
            (e.fetch.polyfill = !0);
        }
        function d(e) {
          if (
            ('string' != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
          )
            throw new TypeError('Invalid character in header field name');
          return e.toLowerCase();
        }
        function f(e) {
          return 'string' != typeof e && (e = String(e)), e;
        }
        function h(e) {
          var t = {
            next: function() {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            }
          };
          return (
            r &&
              (t[Symbol.iterator] = function() {
                return t;
              }),
            t
          );
        }
        function p(e) {
          (this.map = {}),
            e instanceof p
              ? e.forEach(function(e, t) {
                  this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function(e) {
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function(t) {
                  this.append(t, e[t]);
                }, this);
        }
        function b(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
          e.bodyUsed = !0;
        }
        function m(e) {
          return new Promise(function(t, r) {
            (e.onload = function() {
              t(e.result);
            }),
              (e.onerror = function() {
                r(e.error);
              });
          });
        }
        function g(e) {
          var t = new FileReader(),
            r = m(t);
          return t.readAsArrayBuffer(e), r;
        }
        function y(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function v() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function(e) {
              if (((this._bodyInit = e), e))
                if ('string' == typeof e) this._bodyText = e;
                else if (n && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (i && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (t && URLSearchParams.prototype.isPrototypeOf(e))
                  this._bodyText = e.toString();
                else if (o && n && a(e))
                  (this._bodyArrayBuffer = y(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer]));
                else {
                  if (!o || (!ArrayBuffer.prototype.isPrototypeOf(e) && !u(e)))
                    throw new Error('unsupported BodyInit type');
                  this._bodyArrayBuffer = y(e);
                }
              else this._bodyText = '';
              this.headers.get('content-type') ||
                ('string' == typeof e
                  ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set('content-type', this._bodyBlob.type)
                  : t &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      'content-type',
                      'application/x-www-form-urlencoded;charset=UTF-8'
                    ));
            }),
            n &&
              ((this.blob = function() {
                var e = b(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error('could not read FormData body as blob');
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function() {
                return this._bodyArrayBuffer
                  ? b(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(g);
              })),
            (this.text = function() {
              var e,
                t,
                r,
                n = b(this);
              if (n) return n;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (t = new FileReader()),
                  (r = m(t)),
                  t.readAsText(e),
                  r
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function(e) {
                    for (
                      var t = new Uint8Array(e), r = new Array(t.length), n = 0;
                      n < t.length;
                      n++
                    )
                      r[n] = String.fromCharCode(t[n]);
                    return r.join('');
                  })(this._bodyArrayBuffer)
                );
              if (this._bodyFormData)
                throw new Error('could not read FormData body as text');
              return Promise.resolve(this._bodyText);
            }),
            i &&
              (this.formData = function() {
                return this.text().then(k);
              }),
            (this.json = function() {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        function w(e, t) {
          var r,
            n,
            i = (t = t || {}).body;
          if (e instanceof w) {
            if (e.bodyUsed) throw new TypeError('Already read');
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new p(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              i || null == e._bodyInit || ((i = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials = t.credentials || this.credentials || 'omit'),
            (!t.headers && this.headers) || (this.headers = new p(t.headers)),
            (this.method =
              ((r = t.method || this.method || 'GET'),
              (n = r.toUpperCase()),
              c.indexOf(n) > -1 ? n : r)),
            (this.mode = t.mode || this.mode || null),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && i)
          )
            throw new TypeError('Body not allowed for GET or HEAD requests');
          this._initBody(i);
        }
        function k(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split('&')
              .forEach(function(e) {
                if (e) {
                  var r = e.split('='),
                    n = r.shift().replace(/\+/g, ' '),
                    i = r.join('=').replace(/\+/g, ' ');
                  t.append(decodeURIComponent(n), decodeURIComponent(i));
                }
              }),
            t
          );
        }
        function _(e, t) {
          t || (t = {}),
            (this.type = 'default'),
            (this.status = void 0 === t.status ? 200 : t.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
            (this.headers = new p(t.headers)),
            (this.url = t.url || ''),
            this._initBody(e);
        }
      })('undefined' != typeof self ? self : this);
    },
    '../../node_modules/hash.js/lib/hash.js': function(e, t, r) {
      var n = t;
      (n.utils = r('../../node_modules/hash.js/lib/hash/utils.js')),
        (n.common = r('../../node_modules/hash.js/lib/hash/common.js')),
        (n.sha = r('../../node_modules/hash.js/lib/hash/sha.js')),
        (n.ripemd = r('../../node_modules/hash.js/lib/hash/ripemd.js')),
        (n.hmac = r('../../node_modules/hash.js/lib/hash/hmac.js')),
        (n.sha1 = n.sha.sha1),
        (n.sha256 = n.sha.sha256),
        (n.sha224 = n.sha.sha224),
        (n.sha384 = n.sha.sha384),
        (n.sha512 = n.sha.sha512),
        (n.ripemd160 = n.ripemd.ripemd160);
    },
    '../../node_modules/hash.js/lib/hash/common.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/hash.js/lib/hash/utils.js'),
        i = r('../../node_modules/minimalistic-assert/index.js');
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = 'big'),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (t.BlockHash = o),
        (o.prototype.update = function(e, t) {
          if (
            ((e = n.toArray(e, t)),
            this.pending ? (this.pending = this.pending.concat(e)) : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - r, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = n.join32(e, 0, e.length - r, this.endian));
            for (var i = 0; i < e.length; i += this._delta32)
              this._update(e, i, i + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function(e) {
          return this.update(this._pad()), i(null === this.pending), this._digest(e);
        }),
        (o.prototype._pad = function() {
          var e = this.pendingTotal,
            t = this._delta8,
            r = t - ((e + this.padLength) % t),
            n = new Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((e <<= 3), 'big' === this.endian)) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (e >>> 24) & 255),
              (n[i++] = (e >>> 16) & 255),
              (n[i++] = (e >>> 8) & 255),
              (n[i++] = 255 & e);
          } else
            for (
              n[i++] = 255 & e,
                n[i++] = (e >>> 8) & 255,
                n[i++] = (e >>> 16) & 255,
                n[i++] = (e >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              n[i++] = 0;
          return n;
        });
    },
    '../../node_modules/hash.js/lib/hash/hmac.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/hash.js/lib/hash/utils.js'),
        i = r('../../node_modules/minimalistic-assert/index.js');
      function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        (this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(t, r));
      }
      (e.exports = o),
        (o.prototype._init = function(e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            i(e.length <= this.blockSize);
          for (var t = e.length; t < this.blockSize; t++) e.push(0);
          for (t = 0; t < e.length; t++) e[t] ^= 54;
          for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
            e[t] ^= 106;
          this.outer = new this.Hash().update(e);
        }),
        (o.prototype.update = function(e, t) {
          return this.inner.update(e, t), this;
        }),
        (o.prototype.digest = function(e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e);
        });
    },
    '../../node_modules/hash.js/lib/hash/ripemd.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/hash.js/lib/hash/utils.js'),
        i = r('../../node_modules/hash.js/lib/hash/common.js'),
        o = n.rotl32,
        s = n.sum32,
        a = n.sum32_3,
        u = n.sum32_4,
        c = i.BlockHash;
      function l() {
        if (!(this instanceof l)) return new l();
        c.call(this),
          (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
          (this.endian = 'little');
      }
      function d(e, t, r, n) {
        return e <= 15
          ? t ^ r ^ n
          : e <= 31
          ? (t & r) | (~t & n)
          : e <= 47
          ? (t | ~r) ^ n
          : e <= 63
          ? (t & n) | (r & ~n)
          : t ^ (r | ~n);
      }
      function f(e) {
        return e <= 15
          ? 0
          : e <= 31
          ? 1518500249
          : e <= 47
          ? 1859775393
          : e <= 63
          ? 2400959708
          : 2840853838;
      }
      function h(e) {
        return e <= 15
          ? 1352829926
          : e <= 31
          ? 1548603684
          : e <= 47
          ? 1836072691
          : e <= 63
          ? 2053994217
          : 0;
      }
      n.inherits(l, c),
        (t.ripemd160 = l),
        (l.blockSize = 512),
        (l.outSize = 160),
        (l.hmacStrength = 192),
        (l.padLength = 64),
        (l.prototype._update = function(e, t) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              c = this.h[3],
              l = this.h[4],
              y = r,
              v = n,
              w = i,
              k = c,
              _ = l,
              S = 0;
            S < 80;
            S++
          ) {
            var j = s(o(u(r, d(S, n, i, c), e[p[S] + t], f(S)), m[S]), l);
            (r = l),
              (l = c),
              (c = o(i, 10)),
              (i = n),
              (n = j),
              (j = s(o(u(y, d(79 - S, v, w, k), e[b[S] + t], h(S)), g[S]), _)),
              (y = _),
              (_ = k),
              (k = o(w, 10)),
              (w = v),
              (v = j);
          }
          (j = a(this.h[1], i, k)),
            (this.h[1] = a(this.h[2], c, _)),
            (this.h[2] = a(this.h[3], l, y)),
            (this.h[3] = a(this.h[4], r, v)),
            (this.h[4] = a(this.h[0], n, w)),
            (this.h[0] = j);
        }),
        (l.prototype._digest = function(e) {
          return 'hex' === e ? n.toHex32(this.h, 'little') : n.split32(this.h, 'little');
        });
      var p = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ],
        b = [
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ],
        m = [
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ],
        g = [
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ];
    },
    '../../node_modules/hash.js/lib/hash/sha.js': function(e, t, r) {
      'use strict';
      (t.sha1 = r('../../node_modules/hash.js/lib/hash/sha/1.js')),
        (t.sha224 = r('../../node_modules/hash.js/lib/hash/sha/224.js')),
        (t.sha256 = r('../../node_modules/hash.js/lib/hash/sha/256.js')),
        (t.sha384 = r('../../node_modules/hash.js/lib/hash/sha/384.js')),
        (t.sha512 = r('../../node_modules/hash.js/lib/hash/sha/512.js'));
    },
    '../../node_modules/hash.js/lib/hash/sha/1.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/hash.js/lib/hash/utils.js'),
        i = r('../../node_modules/hash.js/lib/hash/common.js'),
        o = r('../../node_modules/hash.js/lib/hash/sha/common.js'),
        s = n.rotl32,
        a = n.sum32,
        u = n.sum32_5,
        c = o.ft_1,
        l = i.BlockHash,
        d = [1518500249, 1859775393, 2400959708, 3395469782];
      function f() {
        if (!(this instanceof f)) return new f();
        l.call(this),
          (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
          (this.W = new Array(80));
      }
      n.inherits(f, l),
        (e.exports = f),
        (f.blockSize = 512),
        (f.outSize = 160),
        (f.hmacStrength = 80),
        (f.padLength = 64),
        (f.prototype._update = function(e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            o = this.h[1],
            l = this.h[2],
            f = this.h[3],
            h = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              b = u(s(i, 5), c(p, o, l, f), h, r[n], d[p]);
            (h = f), (f = l), (l = s(o, 30)), (o = i), (i = b);
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], l)),
            (this.h[3] = a(this.h[3], f)),
            (this.h[4] = a(this.h[4], h));
        }),
        (f.prototype._digest = function(e) {
          return 'hex' === e ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big');
        });
    },
    '../../node_modules/hash.js/lib/hash/sha/224.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/hash.js/lib/hash/utils.js'),
        i = r('../../node_modules/hash.js/lib/hash/sha/256.js');
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
          ]);
      }
      n.inherits(o, i),
        (e.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function(e) {
          return 'hex' === e
            ? n.toHex32(this.h.slice(0, 7), 'big')
            : n.split32(this.h.slice(0, 7), 'big');
        });
    },
    '../../node_modules/hash.js/lib/hash/sha/256.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/hash.js/lib/hash/utils.js'),
        i = r('../../node_modules/hash.js/lib/hash/common.js'),
        o = r('../../node_modules/hash.js/lib/hash/sha/common.js'),
        s = r('../../node_modules/minimalistic-assert/index.js'),
        a = n.sum32,
        u = n.sum32_4,
        c = n.sum32_5,
        l = o.ch32,
        d = o.maj32,
        f = o.s0_256,
        h = o.s1_256,
        p = o.g0_256,
        b = o.g1_256,
        m = i.BlockHash,
        g = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ];
      function y() {
        if (!(this instanceof y)) return new y();
        m.call(this),
          (this.h = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225
          ]),
          (this.k = g),
          (this.W = new Array(64));
      }
      n.inherits(y, m),
        (e.exports = y),
        (y.blockSize = 512),
        (y.outSize = 256),
        (y.hmacStrength = 192),
        (y.padLength = 64),
        (y.prototype._update = function(e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = u(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            o = this.h[1],
            m = this.h[2],
            g = this.h[3],
            y = this.h[4],
            v = this.h[5],
            w = this.h[6],
            k = this.h[7];
          for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
            var _ = c(k, h(y), l(y, v, w), this.k[n], r[n]),
              S = a(f(i), d(i, o, m));
            (k = w),
              (w = v),
              (v = y),
              (y = a(g, _)),
              (g = m),
              (m = o),
              (o = i),
              (i = a(_, S));
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], m)),
            (this.h[3] = a(this.h[3], g)),
            (this.h[4] = a(this.h[4], y)),
            (this.h[5] = a(this.h[5], v)),
            (this.h[6] = a(this.h[6], w)),
            (this.h[7] = a(this.h[7], k));
        }),
        (y.prototype._digest = function(e) {
          return 'hex' === e ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big');
        });
    },
    '../../node_modules/hash.js/lib/hash/sha/384.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/hash.js/lib/hash/utils.js'),
        i = r('../../node_modules/hash.js/lib/hash/sha/512.js');
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3418070365,
            3238371032,
            1654270250,
            914150663,
            2438529370,
            812702999,
            355462360,
            4144912697,
            1731405415,
            4290775857,
            2394180231,
            1750603025,
            3675008525,
            1694076839,
            1203062813,
            3204075428
          ]);
      }
      n.inherits(o, i),
        (e.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function(e) {
          return 'hex' === e
            ? n.toHex32(this.h.slice(0, 12), 'big')
            : n.split32(this.h.slice(0, 12), 'big');
        });
    },
    '../../node_modules/hash.js/lib/hash/sha/512.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/hash.js/lib/hash/utils.js'),
        i = r('../../node_modules/hash.js/lib/hash/common.js'),
        o = r('../../node_modules/minimalistic-assert/index.js'),
        s = n.rotr64_hi,
        a = n.rotr64_lo,
        u = n.shr64_hi,
        c = n.shr64_lo,
        l = n.sum64,
        d = n.sum64_hi,
        f = n.sum64_lo,
        h = n.sum64_4_hi,
        p = n.sum64_4_lo,
        b = n.sum64_5_hi,
        m = n.sum64_5_lo,
        g = i.BlockHash,
        y = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
      function v() {
        if (!(this instanceof v)) return new v();
        g.call(this),
          (this.h = [
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209
          ]),
          (this.k = y),
          (this.W = new Array(160));
      }
      function w(e, t, r, n, i) {
        var o = (e & r) ^ (~e & i);
        return o < 0 && (o += 4294967296), o;
      }
      function k(e, t, r, n, i, o) {
        var s = (t & n) ^ (~t & o);
        return s < 0 && (s += 4294967296), s;
      }
      function _(e, t, r, n, i) {
        var o = (e & r) ^ (e & i) ^ (r & i);
        return o < 0 && (o += 4294967296), o;
      }
      function S(e, t, r, n, i, o) {
        var s = (t & n) ^ (t & o) ^ (n & o);
        return s < 0 && (s += 4294967296), s;
      }
      function j(e, t) {
        var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function E(e, t) {
        var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function x(e, t) {
        var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function O(e, t) {
        var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function A(e, t) {
        var r = s(e, t, 1) ^ s(e, t, 8) ^ u(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function C(e, t) {
        var r = a(e, t, 1) ^ a(e, t, 8) ^ c(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function R(e, t) {
        var r = s(e, t, 19) ^ s(t, e, 29) ^ u(e, t, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function B(e, t) {
        var r = a(e, t, 19) ^ a(t, e, 29) ^ c(e, t, 6);
        return r < 0 && (r += 4294967296), r;
      }
      n.inherits(v, g),
        (e.exports = v),
        (v.blockSize = 1024),
        (v.outSize = 512),
        (v.hmacStrength = 192),
        (v.padLength = 128),
        (v.prototype._prepareBlock = function(e, t) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
          for (; n < r.length; n += 2) {
            var i = R(r[n - 4], r[n - 3]),
              o = B(r[n - 4], r[n - 3]),
              s = r[n - 14],
              a = r[n - 13],
              u = A(r[n - 30], r[n - 29]),
              c = C(r[n - 30], r[n - 29]),
              l = r[n - 32],
              d = r[n - 31];
            (r[n] = h(i, o, s, a, u, c, l, d)), (r[n + 1] = p(i, o, s, a, u, c, l, d));
          }
        }),
        (v.prototype._update = function(e, t) {
          this._prepareBlock(e, t);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            s = this.h[2],
            a = this.h[3],
            u = this.h[4],
            c = this.h[5],
            h = this.h[6],
            p = this.h[7],
            g = this.h[8],
            y = this.h[9],
            v = this.h[10],
            A = this.h[11],
            C = this.h[12],
            R = this.h[13],
            B = this.h[14],
            P = this.h[15];
          o(this.k.length === r.length);
          for (var N = 0; N < r.length; N += 2) {
            var I = B,
              T = P,
              D = x(g, y),
              F = O(g, y),
              U = w(g, y, v, A, C),
              L = k(g, y, v, A, C, R),
              M = this.k[N],
              K = this.k[N + 1],
              H = r[N],
              W = r[N + 1],
              V = b(I, T, D, F, U, L, M, K, H, W),
              z = m(I, T, D, F, U, L, M, K, H, W);
            (I = j(n, i)),
              (T = E(n, i)),
              (D = _(n, i, s, a, u)),
              (F = S(n, i, s, a, u, c));
            var G = d(I, T, D, F),
              J = f(I, T, D, F);
            (B = C),
              (P = R),
              (C = v),
              (R = A),
              (v = g),
              (A = y),
              (g = d(h, p, V, z)),
              (y = f(p, p, V, z)),
              (h = u),
              (p = c),
              (u = s),
              (c = a),
              (s = n),
              (a = i),
              (n = d(V, z, G, J)),
              (i = f(V, z, G, J));
          }
          l(this.h, 0, n, i),
            l(this.h, 2, s, a),
            l(this.h, 4, u, c),
            l(this.h, 6, h, p),
            l(this.h, 8, g, y),
            l(this.h, 10, v, A),
            l(this.h, 12, C, R),
            l(this.h, 14, B, P);
        }),
        (v.prototype._digest = function(e) {
          return 'hex' === e ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big');
        });
    },
    '../../node_modules/hash.js/lib/hash/sha/common.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/hash.js/lib/hash/utils.js').rotr32;
      function i(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function o(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      function s(e, t, r) {
        return e ^ t ^ r;
      }
      (t.ft_1 = function(e, t, r, n) {
        return 0 === e
          ? i(t, r, n)
          : 1 === e || 3 === e
          ? s(t, r, n)
          : 2 === e
          ? o(t, r, n)
          : void 0;
      }),
        (t.ch32 = i),
        (t.maj32 = o),
        (t.p32 = s),
        (t.s0_256 = function(e) {
          return n(e, 2) ^ n(e, 13) ^ n(e, 22);
        }),
        (t.s1_256 = function(e) {
          return n(e, 6) ^ n(e, 11) ^ n(e, 25);
        }),
        (t.g0_256 = function(e) {
          return n(e, 7) ^ n(e, 18) ^ (e >>> 3);
        }),
        (t.g1_256 = function(e) {
          return n(e, 17) ^ n(e, 19) ^ (e >>> 10);
        });
    },
    '../../node_modules/hash.js/lib/hash/utils.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/minimalistic-assert/index.js'),
        i = r('../../node_modules/inherits/inherits_browser.js');
      function o(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 16711680) |
            ((255 & e) << 24)) >>>
          0
        );
      }
      function s(e) {
        return 1 === e.length ? '0' + e : e;
      }
      function a(e) {
        return 7 === e.length
          ? '0' + e
          : 6 === e.length
          ? '00' + e
          : 5 === e.length
          ? '000' + e
          : 4 === e.length
          ? '0000' + e
          : 3 === e.length
          ? '00000' + e
          : 2 === e.length
          ? '000000' + e
          : 1 === e.length
          ? '0000000' + e
          : e;
      }
      (t.inherits = i),
        (t.toArray = function(e, t) {
          if (Array.isArray(e)) return e.slice();
          if (!e) return [];
          var r = [];
          if ('string' == typeof e)
            if (t) {
              if ('hex' === t)
                for (
                  (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e),
                    n = 0;
                  n < e.length;
                  n += 2
                )
                  r.push(parseInt(e[n] + e[n + 1], 16));
            } else
              for (var n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i;
                o ? r.push(o, s) : r.push(s);
              }
          else for (n = 0; n < e.length; n++) r[n] = 0 | e[n];
          return r;
        }),
        (t.toHex = function(e) {
          for (var t = '', r = 0; r < e.length; r++) t += s(e[r].toString(16));
          return t;
        }),
        (t.htonl = o),
        (t.toHex32 = function(e, t) {
          for (var r = '', n = 0; n < e.length; n++) {
            var i = e[n];
            'little' === t && (i = o(i)), (r += a(i.toString(16)));
          }
          return r;
        }),
        (t.zero2 = s),
        (t.zero8 = a),
        (t.join32 = function(e, t, r, i) {
          var o = r - t;
          n(o % 4 == 0);
          for (var s = new Array(o / 4), a = 0, u = t; a < s.length; a++, u += 4) {
            var c;
            (c =
              'big' === i
                ? (e[u] << 24) | (e[u + 1] << 16) | (e[u + 2] << 8) | e[u + 3]
                : (e[u + 3] << 24) | (e[u + 2] << 16) | (e[u + 1] << 8) | e[u]),
              (s[a] = c >>> 0);
          }
          return s;
        }),
        (t.split32 = function(e, t) {
          for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
            var o = e[n];
            'big' === t
              ? ((r[i] = o >>> 24),
                (r[i + 1] = (o >>> 16) & 255),
                (r[i + 2] = (o >>> 8) & 255),
                (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24),
                (r[i + 2] = (o >>> 16) & 255),
                (r[i + 1] = (o >>> 8) & 255),
                (r[i] = 255 & o));
          }
          return r;
        }),
        (t.rotr32 = function(e, t) {
          return (e >>> t) | (e << (32 - t));
        }),
        (t.rotl32 = function(e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.sum32 = function(e, t) {
          return (e + t) >>> 0;
        }),
        (t.sum32_3 = function(e, t, r) {
          return (e + t + r) >>> 0;
        }),
        (t.sum32_4 = function(e, t, r, n) {
          return (e + t + r + n) >>> 0;
        }),
        (t.sum32_5 = function(e, t, r, n, i) {
          return (e + t + r + n + i) >>> 0;
        }),
        (t.sum64 = function(e, t, r, n) {
          var i = e[t],
            o = (n + e[t + 1]) >>> 0,
            s = (o < n ? 1 : 0) + r + i;
          (e[t] = s >>> 0), (e[t + 1] = o);
        }),
        (t.sum64_hi = function(e, t, r, n) {
          return (((t + n) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
        }),
        (t.sum64_lo = function(e, t, r, n) {
          return (t + n) >>> 0;
        }),
        (t.sum64_4_hi = function(e, t, r, n, i, o, s, a) {
          var u = 0,
            c = t;
          return (
            (u += (c = (c + n) >>> 0) < t ? 1 : 0),
            (u += (c = (c + o) >>> 0) < o ? 1 : 0),
            (e + r + i + s + (u += (c = (c + a) >>> 0) < a ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_4_lo = function(e, t, r, n, i, o, s, a) {
          return (t + n + o + a) >>> 0;
        }),
        (t.sum64_5_hi = function(e, t, r, n, i, o, s, a, u, c) {
          var l = 0,
            d = t;
          return (
            (l += (d = (d + n) >>> 0) < t ? 1 : 0),
            (l += (d = (d + o) >>> 0) < o ? 1 : 0),
            (l += (d = (d + a) >>> 0) < a ? 1 : 0),
            (e + r + i + s + u + (l += (d = (d + c) >>> 0) < c ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_5_lo = function(e, t, r, n, i, o, s, a, u, c) {
          return (t + n + o + a + c) >>> 0;
        }),
        (t.rotr64_hi = function(e, t, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (t.rotr64_lo = function(e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (t.shr64_hi = function(e, t, r) {
          return e >>> r;
        }),
        (t.shr64_lo = function(e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        });
    },
    '../../node_modules/https-did-resolver/lib/register.js': function(e, t, r) {
      'use strict';
      var n =
          (this && this.__awaiter) ||
          function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
              function s(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                e.done
                  ? i(e.value)
                  : new r(function(t) {
                      t(e.value);
                    }).then(s, a);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function(e, t) {
            var r,
              n,
              i,
              o,
              s = {
                label: 0,
                sent: function() {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              'function' == typeof Symbol &&
                (o[Symbol.iterator] = function() {
                  return this;
                }),
              o
            );
            function a(o) {
              return function(a) {
                return (function(o) {
                  if (r) throw new TypeError('Generator is already executing.');
                  for (; s; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i =
                            2 & o[0]
                              ? n.return
                              : o[0]
                              ? n.throw || ((i = n.return) && i.call(n), 0)
                              : n.next) &&
                          !(i = i.call(n, o[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (n = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (e) {
                      (o = [6, e]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = r('../../node_modules/did-resolver/lib/resolver.js');
      function s(e) {
        return new Promise(function(t, n) {
          var i = new ('undefined' != typeof window
            ? window.XMLHttpRequest
            : r(3).XMLHttpRequest)();
          i.open('GET', e),
            (i.onreadystatechange = function() {
              i &&
                4 === i.readyState &&
                (200 === i.status
                  ? t(i.responseText)
                  : n(
                      new Error(
                        (
                          'Invalid http response status ' +
                          i.status +
                          ' ' +
                          i.responseText
                        ).trim()
                      )
                    ));
            }),
            i.setRequestHeader('accept', 'application/json'),
            i.send();
        });
      }
      t.default = function() {
        o.registerMethod('https', function(e, t) {
          return n(this, void 0, void 0, function() {
            var r, n, o, a;
            return i(this, function(i) {
              switch (i.label) {
                case 0:
                  (r = 'https://' + t.id + '/.well-known/did.json'),
                    (n = null),
                    (i.label = 1);
                case 1:
                  return i.trys.push([1, 3, , 4]), [4, s(r)];
                case 2:
                  return (n = i.sent()), [3, 4];
                case 3:
                  throw ((o = i.sent()),
                  new Error('DID must resolve to a valid https URL: ' + o.message));
                case 4:
                  a = null;
                  try {
                    a = JSON.parse(n);
                  } catch (e) {
                    throw new Error('DID must resolve to a JSON document');
                  }
                  if (!('https://w3id.org/did/v1' === a['@context']))
                    throw new Error('DID document missing context');
                  if (!(a.id === e))
                    throw new Error('DID document id does not match requested did');
                  if (!(Array.isArray(a.publicKey) && a.publicKey.length > 0))
                    throw new Error('DID document has no public keys');
                  return [2, a];
              }
            });
          });
        });
      };
    },
    '../../node_modules/invariant/browser.js': function(e, t, r) {
      'use strict';
      e.exports = function(e, t, r, n, i, o, s, a) {
        if (!e) {
          var u;
          if (void 0 === t)
            u = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var c = [r, n, i, o, s, a],
              l = 0;
            (u = new Error(
              t.replace(/%s/g, function() {
                return c[l++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((u.framesToPop = 1), u);
        }
      };
    },
    '../../node_modules/ipfs-did-document/index.js': function(e, t) {
      class r {
        constructor(e, t) {
          (this._ipfs = e), (this._content = { id: `did:${t}:GENESIS` });
        }
        get DID() {
          if (this._content.id.includes('GENESIS'))
            throw new Error('DID is not available before commit');
          return this._content.id;
        }
        static async load(e, t) {
          const n = new r(e);
          return (
            (n._content = await r.cidToDocument(e, t)),
            (n._content.previousDocument = { '/': t.toString() }),
            n
          );
        }
        addPublicKey(e, t, r, n, i) {
          this._content.publicKey || (this._content.publicKey = []);
          let o = { id: `${this._content.id}#${e}`, type: t };
          (o[r] = n), i && (o.owner = i), this._content.publicKey.push(o);
        }
        removePublicKey(e) {
          const t = this._content.publicKey.findIndex(t => t.id.endsWith(e));
          this._content.publicKey.splice(t, 1),
            this._content.publicKey.length || delete this._content.publicKey;
        }
        addAuthentication(e, t) {
          this._content.authentication || (this._content.authentication = []),
            this._content.authentication.push({
              type: e,
              publicKey: `${this._content.id}#${t}`
            });
        }
        removeAuthentication(e) {
          const t = this._content.authentication.findIndex(t => t.publicKey.endsWith(e));
          this._content.authentication.splice(t, 1),
            this._content.authentication.length || delete this._content.authentication;
        }
        addService(e, t, r, n) {
          this._content.service || (this._content.service = []),
            this._content.service.push(
              Object.assign(
                { id: `${this._content.id};${e}`, type: t, serviceEndpoint: r },
                n
              )
            );
        }
        removeService(e) {
          const t = this._content.service.findIndex(t => t.id.endsWith(e));
          this._content.service.splice(t, 1),
            this._content.service.length || delete this._content.service;
        }
        setRevocationMethod(e) {
          this._content.revocationMethod = e;
        }
        addCustomProperty(e, t) {
          this._content[e] = t;
        }
        removeCustomProperty(e) {
          delete this._content[e];
        }
        async commit(e = {}) {
          this._content.created
            ? e.noTimestamp ||
              (this._content.updated = new Date(Date.now()).toISOString())
            : ((this._content['@context'] = 'https://w3id.org/did/v1'),
              e.noTimestamp ||
                (this._content.created = new Date(Date.now()).toISOString()));
          const t = await this._ipfs.dag.put(this._content, {
            format: 'dag-cbor',
            hashAlg: 'sha2-256'
          });
          return (
            (this._content = await r.cidToDocument(this._ipfs, t)),
            (this._content.previousDocument = { '/': t.toString() }),
            t
          );
        }
        static async cidToDocument(e, t) {
          let r = (await e.dag.get(t)).value;
          if (r.id.includes('GENESIS')) {
            const e = new RegExp('GENESIS', 'gi');
            (r.id = r.id.replace(e, t)),
              r.publicKey &&
                (r.publicKey = JSON.parse(JSON.stringify(r.publicKey).replace(e, t))),
              r.authentication &&
                (r.authentication = JSON.parse(
                  JSON.stringify(r.authentication).replace(e, t)
                )),
              r.service &&
                (r.service = JSON.parse(JSON.stringify(r.service).replace(e, t)));
          }
          return (
            r.previousDocument &&
              (r.previousDocument = { '/': r.previousDocument.toString() }),
            r
          );
        }
      }
      e.exports = r;
    },
    '../../node_modules/ipfs-log/node_modules/p-map/index.js': function(e, t, r) {
      'use strict';
      e.exports = (e, t, r) =>
        new Promise((n, i) => {
          if (((r = Object.assign({ concurrency: 1 / 0 }, r)), 'function' != typeof t))
            throw new TypeError('Mapper function is required');
          const o = r.concurrency;
          if (!('number' == typeof o && o >= 1))
            throw new TypeError(
              `Expected \`concurrency\` to be a number from 1 and up, got \`${o}\` (${typeof o})`
            );
          const s = [],
            a = e[Symbol.iterator]();
          let u = !1,
            c = !1,
            l = 0,
            d = 0;
          const f = () => {
            if (u) return;
            const e = a.next(),
              r = d;
            if ((d++, e.done)) return (c = !0), void (0 === l && n(s));
            l++,
              Promise.resolve(e.value)
                .then(e => t(e, r))
                .then(
                  e => {
                    (s[r] = e), l--, f();
                  },
                  e => {
                    (u = !0), i(e);
                  }
                );
          };
          for (let e = 0; e < o && (f(), !c); e++);
        });
    },
    '../../node_modules/ipfs-log/src/default-access-controller.js': function(e, t, r) {
      'use strict';
      e.exports = class {
        async canAppend(e, t) {
          return !0;
        }
      };
    },
    '../../node_modules/ipfs-log/src/entry-index.js': function(e, t, r) {
      'use strict';
      e.exports = class {
        constructor(e = {}) {
          this._cache = e;
        }
        set(e, t) {
          this._cache[e] = t;
        }
        get(e) {
          return this._cache[e];
        }
        delete(e) {
          return delete this._cache[e];
        }
        add(e) {
          this._cache = Object.assign(this._cache, e);
        }
        get length() {
          return Object.values(this._cache).length;
        }
      };
    },
    '../../node_modules/ipfs-log/src/entry-io.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/ipfs-log/node_modules/p-map/index.js'),
        i = r('../../node_modules/p-do-whilst/index.js'),
        o = r('../../node_modules/ipfs-log/src/entry.js'),
        s = e => e && e.length > 0;
      class a {
        static async fetchParallel(
          e,
          t,
          {
            length: r,
            exclude: i = [],
            timeout: o,
            concurrency: s,
            onProgressCallback: u
          }
        ) {
          const c = (e, t) => e.concat(t),
            l = await n(
              t,
              async t =>
                a.fetchAll(e, t, {
                  length: r,
                  exclude: i,
                  timeout: o,
                  onProgressCallback: u,
                  concurrency: s
                }),
              { concurrency: Math.max(s || t.length, 1) }
            );
          return l.reduce(c, []);
        }
        static async fetchAll(
          e,
          t,
          {
            length: r = -1,
            exclude: a = [],
            timeout: u,
            onProgressCallback: c,
            onStartProgressCallback: l,
            concurrency: d = 32,
            delay: f = 0
          } = {}
        ) {
          let h = [],
            p = {},
            b = {},
            m = Array.isArray(t) ? { 0: t.slice() } : { 0: [t] },
            g = 0,
            y = 0,
            v = 0;
          const w = (e, t) => {
              b[e] ||
                (m[t] || (m[t] = []), m[t].includes(e) || m[t].push(e), (b[e] = !0));
            },
            k = async t => {
              if (t && !p[t])
                return new Promise(async (n, i) => {
                  const s =
                    u && u > 0
                      ? setTimeout(() => {
                          console.warn(
                            `Warning: Couldn't fetch entry '${t}', request timed out (${u}ms)`
                          ),
                            n();
                        }, u)
                      : null;
                  l && l(t, null, 0, h.length);
                  try {
                    if (
                      ((e => {
                        if (o.isEntry(e)) {
                          const n = e.clock.time;
                          (y = Math.max(y, n)),
                            (v =
                              h.length > 0 ? Math.min(h[h.length - 1].clock.time, v) : y);
                          const i = h.length >= r && n >= v,
                            o = e => y - n + (e + 1) * e;
                          (r < 0 || h.length < r || i) &&
                            (h.push(e), (p[t] = !0), c && c(t, e, h.length, h.length)),
                            r < 0
                              ? (e.next.forEach(w), e.refs && e.refs.forEach(w))
                              : ((h.length < r || n > v || (n === v && !p[e.hash])) &&
                                  e.next.forEach(e => w(e, o(0))),
                                e.refs &&
                                  h.length + e.refs.length <= r &&
                                  e.refs.forEach((e, t) => w(e, o(t))));
                        }
                      })(await o.fromMultihash(e, t)),
                      f > 0)
                    ) {
                      const e = (e = 0) => new Promise(t => setTimeout(t, e));
                      await e(f);
                    }
                    n();
                  } catch (e) {
                    i(e);
                  } finally {
                    clearTimeout(s);
                  }
                });
            };
          return (
            a.forEach(e => {
              p[e.hash] = !0;
            }),
            await i(
              async () => {
                if (g < d) {
                  const e = ((e = 1) =>
                    Object.keys(m).reduce((t, r, n) => {
                      const i = m[r];
                      for (; i.length > 0 && t.length < e; ) {
                        const e = i.shift();
                        t.push(e);
                      }
                      return 0 === i.length && delete m[r], t;
                    }, []))(d);
                  (g += e.length), await n(e, k), (g -= e.length);
                }
              },
              () => void 0 !== Object.values(m).find(s)
            ),
            h
          );
        }
      }
      e.exports = a;
    },
    '../../node_modules/ipfs-log/src/entry.js': function(e, t, r) {
      'use strict';
      (function(t) {
        const n = r('../../node_modules/ipfs-log/src/lamport-clock.js'),
          { isDefined: i, io: o } = r('../../node_modules/ipfs-log/src/utils/index.js'),
          s = r('../../node_modules/json-stringify-deterministic/lib/index.js'),
          a = () => new Error('Ipfs instance not defined'),
          u = ['next', 'refs'],
          c = e => (0 === e ? 'dag-pb' : 'dag-cbor'),
          l = e => (d.isEntry(e) ? c(e.v) : c(e));
        class d {
          static async create(e, t, r, o, s = [], u, c = [], l) {
            if (!i(e)) throw a();
            if (!i(t)) throw new Error('Identity is required, cannot create entry');
            if (!i(r)) throw new Error('Entry requires an id');
            if (!i(o)) throw new Error('Entry requires data');
            if (!i(s) || !Array.isArray(s))
              throw new Error("'next' argument is not an array");
            const f = {
                hash: null,
                id: r,
                payload: o,
                next: s.filter(i).map(e => (e.hash ? e.hash : e)),
                refs: c,
                v: 2,
                clock: u || new n(t.publicKey)
              },
              h = await t.provider.sign(t, d.toBuffer(f));
            return (
              (f.key = t.publicKey),
              (f.identity = t.toJSON()),
              (f.sig = h),
              (f.hash = await d.toMultihash(e, f, l)),
              f
            );
          }
          static async verify(e, t) {
            if (!e) throw new Error('Identity-provider is required, cannot verify entry');
            if (!d.isEntry(t)) throw new Error('Invalid Log entry');
            if (!t.key) throw new Error("Entry doesn't have a key");
            if (!t.sig) throw new Error("Entry doesn't have a signature");
            const r = d.toEntry(t, { presigned: !0 }),
              n = t.v < 1 ? 'v0' : 'v1';
            return e.verify(t.sig, t.key, d.toBuffer(r), n);
          }
          static toBuffer(e) {
            const r = 0 === e.v ? JSON.stringify(e) : s(e);
            return t.from(r);
          }
          static async toMultihash(e, t, r = !1) {
            if (!e) throw a();
            if (!d.isEntry(t))
              throw new Error('Invalid object format, cannot generate entry hash');
            const n = d.toEntry(t);
            return o.write(e, l(n.v), n, { links: u, pin: r });
          }
          static toEntry(e, { presigned: t = !1, includeHash: r = !1 } = {}) {
            const i = {
                hash: r ? e.hash : null,
                id: e.id,
                payload: e.payload,
                next: e.next
              },
              o = e.v;
            return (
              o > 1 && (i.refs = e.refs),
              (i.v = e.v),
              (i.clock = new n(e.clock.id, e.clock.time)),
              t || ((i.key = e.key), o > 0 && (i.identity = e.identity), (i.sig = e.sig)),
              i
            );
          }
          static async fromMultihash(e, t) {
            if (!e) throw a();
            if (!t) throw new Error(`Invalid hash: ${t}`);
            const r = await o.read(e, t, { links: u }),
              n = d.toEntry(r);
            return (n.hash = t), n;
          }
          static isEntry(e) {
            return (
              e &&
              void 0 !== e.id &&
              void 0 !== e.next &&
              void 0 !== e.payload &&
              void 0 !== e.v &&
              void 0 !== e.hash &&
              void 0 !== e.clock &&
              (void 0 !== e.refs || e.v < 2)
            );
          }
          static compare(e, t) {
            var r = n.compare(e.clock, t.clock);
            return 0 === r ? (e.clock.id < t.clock.id ? -1 : 1) : r;
          }
          static isEqual(e, t) {
            return e.hash === t.hash;
          }
          static isParent(e, t) {
            return t.next.indexOf(e.hash) > -1;
          }
          static findChildren(e, t) {
            for (var r = [], n = t.find(t => d.isParent(e, t)), i = e; n; )
              r.push(n), (i = n), (n = t.find(e => d.isParent(i, e)));
            return (r = r.sort((e, t) => e.clock.time > t.clock.time));
          }
        }
        (e.exports = d), (e.exports.IPLD_LINKS = u), (e.exports.getWriteFormat = l);
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/ipfs-log/src/g-set.js': function(e, t, r) {
      'use strict';
      e.exports = class {
        constructor(e) {}
        append(e) {}
        merge(e) {}
        get(e) {}
        has(e) {}
        get values() {}
        get length() {}
      };
    },
    '../../node_modules/ipfs-log/src/lamport-clock.js': function(e, t, r) {
      'use strict';
      class n {
        constructor(e, t) {
          (this.id = e), (this.time = t || 0);
        }
        tick() {
          return new n(this.id, ++this.time);
        }
        merge(e) {
          return (this.time = Math.max(this.time, e.time)), new n(this.id, this.time);
        }
        clone() {
          return new n(this.id, this.time);
        }
        static compare(e, t) {
          var r = e.time - t.time;
          return 0 === r && e.id !== t.id ? (e.id < t.id ? -1 : 1) : r;
        }
      }
      e.exports = n;
    },
    '../../node_modules/ipfs-log/src/log-errors.js': function(e, t, r) {
      'use strict';
      e.exports = {
        IPFSNotDefinedError: () => new Error('IPFS instance not defined'),
        LogNotDefinedError: () => new Error('Log instance not defined'),
        NotALogError: () => new Error('Given argument is not an instance of Log'),
        CannotJoinWithDifferentId: () => new Error("Can't join logs with different IDs"),
        LtOrLteMustBeStringOrArray: () =>
          new Error('lt or lte must be a string or array of Entries')
      };
    },
    '../../node_modules/ipfs-log/src/log-io.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/ipfs-log/src/entry.js'),
        i = r('../../node_modules/ipfs-log/src/entry-io.js'),
        o = r('../../node_modules/ipfs-log/src/log-sorting.js'),
        { LastWriteWins: s, NoZeroes: a } = o,
        u = r('../../node_modules/ipfs-log/src/log-errors.js'),
        { isDefined: c, findUniques: l, difference: d, io: f } = r(
          '../../node_modules/ipfs-log/src/utils/index.js'
        ),
        h = ['heads'],
        p = (e, t) => e.slice(e.length - Math.min(e.length, t), e.length);
      e.exports = class {
        static async toMultihash(e, t, { format: r } = {}) {
          if (!c(e)) throw u.IPFSNotDefinedError();
          if (!c(t)) throw u.LogNotDefinedError();
          if ((c(r) || (r = 'dag-cbor'), t.values.length < 1))
            throw new Error("Can't serialize an empty log");
          return f.write(e, r, t.toJSON(), { links: h });
        }
        static async fromMultihash(
          e,
          t,
          {
            length: r = -1,
            exclude: n = [],
            timeout: o,
            concurrency: l,
            sortFn: d,
            onProgressCallback: b
          }
        ) {
          if (!c(e)) throw u.IPFSNotDefinedError();
          if (!c(t)) throw new Error(`Invalid hash: ${t}`);
          const m = await f.read(e, t, { links: h });
          if (!m.heads || !m.id) throw u.NotALogError();
          d = d || a(s);
          const g = await i.fetchAll(e, m.heads, {
              length: r,
              exclude: n,
              timeout: o,
              concurrency: l,
              onProgressCallback: b
            }),
            y = m.id,
            v = r > -1 ? p(g.sort(d), r) : g,
            w = v.filter(e => m.heads.includes(e.hash));
          return { logId: y, entries: v, heads: w };
        }
        static async fromEntryHash(
          e,
          t,
          {
            length: r = -1,
            exclude: n = [],
            timeout: o,
            concurrency: l,
            sortFn: d,
            onProgressCallback: f
          }
        ) {
          if (!c(e)) throw u.IpfsNotDefinedError();
          if (!c(t)) throw new Error("'hash' must be defined");
          const h = Array.isArray(t) ? t : [t];
          r = r > -1 ? Math.max(r, 1) : r;
          const b = await i.fetchParallel(e, h, {
            length: r,
            exclude: n,
            timeout: o,
            concurrency: l,
            onProgressCallback: f
          });
          return (d = d || a(s)), { entries: r > -1 ? p(b.sort(d), r) : b };
        }
        static async fromJSON(
          e,
          t,
          { length: r = -1, timeout: o, concurrency: s, onProgressCallback: a }
        ) {
          if (!c(e)) throw u.IPFSNotDefinedError();
          const { id: l, heads: d } = t,
            f = d.map(e => e.hash);
          return {
            logId: l,
            entries: (
              await i.fetchParallel(e, f, {
                length: r,
                timeout: o,
                concurrency: s,
                onProgressCallback: a
              })
            ).sort(n.compare),
            heads: d
          };
        }
        static async fromEntry(
          e,
          t,
          {
            length: r = -1,
            exclude: o = [],
            timeout: s,
            concurrency: a,
            onProgressCallback: f
          }
        ) {
          if (!c(e)) throw u.IPFSNotDefinedError();
          if (!c(t)) throw new Error("'sourceEntries' must be defined");
          if (!Array.isArray(t) && !n.isEntry(t))
            throw new Error(
              "'sourceEntries' argument must be an array of Entry instances or a single Entry"
            );
          Array.isArray(t) || (t = [t]), (r = r > -1 ? Math.max(r, t.length) : r);
          const h = t.map(e => e.hash),
            p = await i.fetchParallel(e, h, {
              length: r,
              exclude: o,
              timeout: s,
              concurrency: a,
              onProgressCallback: f
            }),
            b = t.concat(p).concat(o),
            m = l(b, 'hash').sort(n.compare),
            g = m.slice(r > -1 ? -r : -m.length),
            y = ((e, t) => {
              var r = e.slice(t.length, e.length);
              return t.concat(r);
            })(g, d(g, t, 'hash'));
          return { logId: y[y.length - 1].id, entries: y };
        }
      };
    },
    '../../node_modules/ipfs-log/src/log-sorting.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/ipfs-log/src/lamport-clock.js');
      function i(e, t, r) {
        const i = n.compare(e.clock, t.clock);
        return 0 === i ? r(e, t) : i;
      }
      function o(e, t, r) {
        return e.clock.id === t.clock.id ? r(e, t) : e.clock.id < t.clock.id ? -1 : 1;
      }
      (t.SortByClocks = i),
        (t.SortByClockId = o),
        (t.LastWriteWins = function(e, t) {
          const r = (e, t) => e,
            n = (e, t) => o(e, t, r);
          return ((e, t) => i(e, t, n))(e, t);
        }),
        (t.SortByEntryHash = function(e, t) {
          const r = (e, t) => (e.hash < t.hash ? -1 : 1),
            n = (e, t) => o(e, t, r);
          return ((e, t) => i(e, t, n))(e, t);
        }),
        (t.NoZeroes = function(e) {
          const t = `Your log's tiebreaker function, ${e.name}, has returned zero and therefore cannot be`;
          return (r, n) => {
            const i = e(r, n);
            if (0 === i) throw Error(t);
            return i;
          };
        });
    },
    '../../node_modules/ipfs-log/src/log.js': function(e, t, r) {
      'use strict';
      (function(t) {
        const n = r('../../node_modules/ipfs-log/node_modules/p-map/index.js'),
          i = r('../../node_modules/ipfs-log/src/g-set.js'),
          o = r('../../node_modules/ipfs-log/src/entry.js'),
          s = r('../../node_modules/ipfs-log/src/log-io.js'),
          a = r('../../node_modules/ipfs-log/src/log-errors.js'),
          u = r('../../node_modules/ipfs-log/src/lamport-clock.js'),
          c = r('../../node_modules/ipfs-log/src/log-sorting.js'),
          { LastWriteWins: l, NoZeroes: d } = c,
          f = r('../../node_modules/ipfs-log/src/default-access-controller.js'),
          { isDefined: h, findUniques: p } = r(
            '../../node_modules/ipfs-log/src/utils/index.js'
          ),
          b = r('../../node_modules/ipfs-log/src/entry-index.js'),
          m = e => e.hash,
          g = (e, t) => e.concat(t),
          y = e => e.next,
          v = (e, t) => Math.max(e, t.clock.time),
          w = (e, t) => ((e[t.hash] = t), e);
        class k extends i {
          constructor(
            e,
            t,
            {
              logId: r,
              access: n,
              entries: i,
              heads: o,
              clock: s,
              sortFn: c,
              concurrency: p
            } = {}
          ) {
            if (!h(e)) throw a.IPFSNotDefinedError();
            if (!h(t)) throw new Error('Identity is required');
            if ((h(n) || (n = new f()), h(i) && !Array.isArray(i)))
              throw new Error("'entries' argument must be an array of Entry instances");
            if (h(o) && !Array.isArray(o))
              throw new Error("'heads' argument must be an array");
            h(c) || (c = l),
              super(),
              (this._sortFn = d(c)),
              (this._storage = e),
              (this._id = r || new Date().getTime().toString()),
              (this._access = n),
              (this._identity = t);
            const m = (i || []).reduce(w, {});
            (this._entryIndex = new b(m)),
              (i = Object.values(m) || []),
              (o = o || k.findHeads(i)),
              (this._headsIndex = o.reduce(w, {})),
              (this._nextsIndex = {});
            i.forEach(e => e.next.forEach(t => (this._nextsIndex[t] = e.hash))),
              (this._length = i.length);
            const g = Math.max(s ? s.time : 0, this.heads.reduce(v, 0));
            (this._clock = new u(this._identity.publicKey, g)),
              (this.joinConcurrency = p || 16);
          }
          get id() {
            return this._id;
          }
          get clock() {
            return this._clock;
          }
          get length() {
            return this._length;
          }
          get values() {
            return Object.values(this.traverse(this.heads)).reverse();
          }
          get heads() {
            return Object.values(this._headsIndex)
              .sort(this._sortFn)
              .reverse();
          }
          get tails() {
            return k.findTails(this.values);
          }
          get tailHashes() {
            return k.findTailHashes(this.values);
          }
          setIdentity(e) {
            this._identity = e;
            const t = Math.max(this.clock.time, this.heads.reduce(v, 0));
            this._clock = new u(this._identity.publicKey, t);
          }
          get(e) {
            return this._entryIndex.get(e);
          }
          has(e) {
            return void 0 !== this._entryIndex.get(e.hash || e);
          }
          traverse(e, t = -1, r) {
            let n = e.sort(this._sortFn).reverse(),
              i = {},
              o = {},
              s = 0;
            const a = e => this.get(e),
              u = e => {
                e &&
                  !i[e.hash] &&
                  ((n = [e, ...n].sort(this._sortFn).reverse()), (i[e.hash] = !0));
              };
            for (; n.length > 0 && (s < t || t < 0); ) {
              const e = n.shift();
              if (((o[(c = e).hash] = c), (i[c.hash] = !0), s++, r && r === e.hash))
                break;
              e.next
                .map(a)
                .filter(h)
                .forEach(u);
            }
            var c;
            return (n = []), (i = {}), o;
          }
          async append(e, t = 1, r = !1) {
            const n = Math.max(this.clock.time, this.heads.reduce(v, 0)) + 1;
            this._clock = new u(this.clock.id, n);
            const i = Object.values(
                this.traverse(this.heads, Math.max(t, this.heads.length))
              ),
              s = (e => {
                let t = new Set();
                for (let r = 1; r <= e; r *= 2) {
                  const e = Math.min(r - 1, i.length - 1);
                  t.add(i[e]);
                }
                return t;
              })(Math.min(t, i.length));
            i.length < t && i[i.length - 1] && s.add(i[i.length - 1]);
            const a = Object.keys(this.heads.reverse().reduce(w, {})),
              c = Array.from(s)
                .map(m)
                .filter(e => !a.includes(e)),
              l = await o.create(
                this._storage,
                this._identity,
                this.id,
                e,
                a,
                this.clock,
                c,
                r
              );
            if (!(await this._access.canAppend(l, this._identity.provider)))
              throw new Error(
                `Could not append entry, key "${this._identity.id}" is not allowed to write to the log`
              );
            return (
              this._entryIndex.set(l.hash, l),
              a.forEach(e => (this._nextsIndex[e] = l.hash)),
              (this._headsIndex = {}),
              (this._headsIndex[l.hash] = l),
              this._length++,
              l
            );
          }
          iterator({ gt: e, gte: t, lt: r, lte: n, amount: i = -1 } = {}) {
            if (0 === i) return (function*() {})();
            if (
              ('string' == typeof n && (n = [this.get(n)]),
              'string' == typeof r && (r = [this.get(this.get(r).next)]),
              n && !Array.isArray(n))
            )
              throw a.LtOrLteMustBeStringOrArray();
            if (r && !Array.isArray(r)) throw a.LtOrLteMustBeStringOrArray();
            let o = (n || r || this.heads).filter(h),
              s = t ? this.get(t).hash : e ? this.get(e).hash : null,
              u = s ? -1 : i || -1,
              c = this.traverse(o, u, s),
              l = Object.values(c);
            return (
              e && l.pop(),
              (e || t) && i > -1 && (l = l.slice(l.length - i, l.length)),
              (function*() {
                for (let e in l) yield l[e];
              })()
            );
          }
          async join(e, t = -1) {
            if (!h(e)) throw a.LogNotDefinedError();
            if (!k.isLog(e)) throw a.NotALogError();
            if (this.id !== e.id) return;
            const r = k.difference(e, this),
              i = this._identity.provider,
              s = async e => {
                if (!(await this._access.canAppend(e, i)))
                  throw new Error(
                    `Could not append entry, key "${e.identity.id}" is not allowed to write to the log`
                  );
              },
              c = Object.values(r);
            await n(
              c,
              async e => {
                await s(e),
                  await (async e => {
                    const t = await o.verify(i, e),
                      r = e.identity ? e.identity.publicKey : e.key;
                    if (!t)
                      throw new Error(
                        `Could not validate signature "${e.sig}" for entry "${e.hash}" and key "${r}"`
                      );
                  })(e);
              },
              { concurrency: this.joinConcurrency }
            );
            Object.values(r).forEach(e => {
              this.get(e.hash) || this._length++,
                e.next.forEach(t => (this._nextsIndex[t] = e.hash));
            }),
              this._entryIndex.add(r);
            const l = Object.values(r)
                .map(y)
                .reduce(g, []),
              d = k
                .findHeads(
                  Object.values(Object.assign({}, this._headsIndex, e._headsIndex))
                )
                .filter(e => !l.find(t => t === e.hash))
                .filter(e => !this._nextsIndex[e.hash])
                .reduce(w, {});
            if (((this._headsIndex = d), t > -1)) {
              let e = this.values;
              (e = e.slice(-t)),
                (this._entryIndex = null),
                (this._entryIndex = new b(e.reduce(w, {}))),
                (this._headsIndex = k.findHeads(e).reduce(w, {})),
                (this._length = this._entryIndex.length);
            }
            const f = Object.values(this._headsIndex).reduce(v, 0);
            return (
              (this._clock = new u(this.clock.id, Math.max(this.clock.time, f))), this
            );
          }
          toJSON() {
            return {
              id: this.id,
              heads: this.heads
                .sort(this._sortFn)
                .reverse()
                .map(m)
            };
          }
          toSnapshot() {
            return { id: this.id, heads: this.heads, values: this.values };
          }
          toBuffer() {
            return t.from(JSON.stringify(this.toJSON()));
          }
          toString(e) {
            return this.values
              .slice()
              .reverse()
              .map((t, r) => {
                const n = o.findChildren(t, this.values).length;
                let i = new Array(Math.max(n - 1, 0));
                return (
                  (i = n > 1 ? i.fill('  ') : i),
                  (i = n > 0 ? i.concat(['└─']) : i),
                  i.join('') + (e ? e(t.payload) : t.payload)
                );
              })
              .join('\n');
          }
          static isLog(e) {
            return void 0 !== e.id && void 0 !== e.heads && void 0 !== e._entryIndex;
          }
          toMultihash({ format: e } = {}) {
            return s.toMultihash(this._storage, this, { format: e });
          }
          static async fromMultihash(
            e,
            t,
            r,
            {
              access: n,
              length: i = -1,
              exclude: o = [],
              timeout: a,
              concurrency: u,
              sortFn: c,
              onProgressCallback: l
            } = {}
          ) {
            const { logId: d, entries: f, heads: h } = await s.fromMultihash(e, r, {
              length: i,
              exclude: o,
              timeout: a,
              onProgressCallback: l,
              concurrency: u,
              sortFn: c
            });
            return new k(e, t, { logId: d, access: n, entries: f, heads: h, sortFn: c });
          }
          static async fromEntryHash(
            e,
            t,
            r,
            {
              logId: n,
              access: i,
              length: o = -1,
              exclude: a = [],
              timeout: u,
              concurrency: c,
              sortFn: l,
              onProgressCallback: d
            } = {}
          ) {
            const { entries: f } = await s.fromEntryHash(e, r, {
              length: o,
              exclude: a,
              timeout: u,
              concurrency: c,
              onProgressCallback: d
            });
            return new k(e, t, { logId: n, access: i, entries: f, sortFn: l });
          }
          static async fromJSON(
            e,
            t,
            r,
            {
              access: n,
              length: i = -1,
              timeout: o,
              sortFn: a,
              onProgressCallback: u
            } = {}
          ) {
            const { logId: c, entries: l } = await s.fromJSON(e, r, {
              length: i,
              timeout: o,
              onProgressCallback: u
            });
            return new k(e, t, { logId: c, access: n, entries: l, sortFn: a });
          }
          static async fromEntry(
            e,
            t,
            r,
            {
              access: n,
              length: i = -1,
              exclude: o = [],
              timeout: a,
              concurrency: u,
              sortFn: c,
              onProgressCallback: l
            } = {}
          ) {
            const { logId: d, entries: f } = await s.fromEntry(e, r, {
              length: i,
              exclude: o,
              timeout: a,
              concurrency: u,
              onProgressCallback: l
            });
            return new k(e, t, { logId: d, access: n, entries: f, sortFn: c });
          }
          static findHeads(e) {
            var t = e.reduce(
              (e, t, r, n) => (t.next.forEach(r => (e[r] = t.hash)), e),
              {}
            );
            return e
              .filter(e => void 0 === t[e.hash])
              .sort((e, t) => e.clock.id > t.clock.id);
          }
          static findTails(e) {
            var t = {},
              r = [],
              n = {},
              i = [];
            e.forEach(e => {
              0 === e.next.length && r.push(e);
              e.next.forEach(r => {
                t[r] || (t[r] = []), t[r].push(e);
              }),
                (i = i.concat(e.next)),
                (n[e.hash] = !0);
            });
            const s = i
              .filter(e => void 0 === n[e])
              .map(e => t[e])
              .reduce((e, t, r, n) => e.concat(p(t, 'hash')), [])
              .concat(r);
            return p(s, 'hash').sort(o.compare);
          }
          static findTailHashes(e) {
            var t = {};
            return (
              e.forEach(e => (t[e.hash] = !0)),
              e.reduce(
                (e, r, n, i) => (
                  r.next.reverse().forEach(r => {
                    void 0 === t[r] && e.splice(0, 0, r);
                  }),
                  e
                ),
                []
              )
            );
          }
          static difference(e, t) {
            let r = Object.keys(e._headsIndex),
              n = {},
              i = {};
            const o = e => {
              n[e] || t.get(e) || (r.push(e), (n[e] = !0));
            };
            for (; r.length > 0; ) {
              const s = r.shift(),
                a = e.get(s);
              a &&
                !t.get(s) &&
                a.id === t.id &&
                ((i[a.hash] = a), (n[a.hash] = !0), a.next.forEach(o));
            }
            return i;
          }
        }
        (e.exports = k),
          (e.exports.Sorting = c),
          (e.exports.Entry = o),
          (e.exports.AccessController = f);
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/ipfs-log/src/utils/difference.js': function(e, t, r) {
      'use strict';
      e.exports = function(e, t, r) {
        var n = {},
          i = {};
        return (
          e.forEach(e => (i[r ? e[r] : e] = !0)),
          t.reduce((e, t) => {
            var o = void 0 !== i[r ? t[r] : t],
              s = void 0 !== n[r ? t[r] : t];
            return o || s || (e.push(t), (n[r ? t[r] : t] = !0)), e;
          }, [])
        );
      };
    },
    '../../node_modules/ipfs-log/src/utils/find-uniques.js': function(e, t, r) {
      'use strict';
      e.exports = function(e, t) {
        let r = {};
        return e.forEach(e => (r[t ? e[t] : e] = e)), Object.keys(r).map(e => r[e]);
      };
    },
    '../../node_modules/ipfs-log/src/utils/index.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/ipfs-log/src/utils/difference.js'),
        i = r('../../node_modules/ipfs-log/src/utils/find-uniques.js'),
        o = r('../../node_modules/ipfs-log/src/utils/is-defined.js'),
        s = r('../../node_modules/orbit-db-io/index.js');
      e.exports = { difference: n, findUniques: i, isDefined: o, io: s };
    },
    '../../node_modules/ipfs-log/src/utils/is-defined.js': function(e, t, r) {
      'use strict';
      e.exports = e => null != e;
    },
    '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/decode.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var n = r('../../node_modules/varint/index.js'),
        i = r('../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/utils.js')
          .defined;
      function o(e) {
        return `${e.substring(0, 1).toUpperCase()}${e.substring(1)}`;
      }
      function s(e, t, r, n) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return;
        const i = o(t);
        Object.defineProperties(e, {
          [t]: {
            enumerable: !0,
            configurable: !0,
            set: e => {
              r = e;
            },
            get: () => (void 0 === r ? n : r)
          },
          [`has${i}`]: { configurable: !0, value: () => void 0 !== r },
          [`set${i}`]: {
            configurable: !0,
            value: e => {
              r = e;
            }
          },
          [`get${i}`]: { configurable: !0, value: () => r },
          [`clear${i}`]: {
            configurable: !0,
            value: () => {
              (r = void 0), (e[t] = void 0);
            }
          }
        });
      }
      var a = function(e, t, r) {
          switch (e) {
            case 0:
              return n.decode(t, r), r + n.decode.bytes;
            case 1:
              return r + 8;
            case 2:
              var i = n.decode(t, r);
              return r + n.decode.bytes + i;
            case 3:
            case 4:
              throw new Error('Groups are not supported');
            case 5:
              return r + 4;
            default:
              throw new Error('Unknown wire type: ' + e);
          }
        },
        u = function(e) {
          if (e.map) return {};
          if (e.repeated) return [];
          switch (e.type) {
            case 'string':
              return '';
            case 'bool':
              return !1;
            case 'float':
            case 'double':
            case 'sfixed32':
            case 'fixed32':
            case 'varint':
            case 'enum':
            case 'uint64':
            case 'uint32':
            case 'int64':
            case 'int32':
            case 'sint64':
            case 'sint32':
              return 0;
            default:
              return null;
          }
        },
        c = function(e, t) {
          if (void 0 === t) return t;
          switch (e.type) {
            case 'bool':
              return 'true' === t;
            case 'float':
            case 'double':
            case 'sfixed32':
            case 'fixed32':
            case 'varint':
            case 'enum':
            case 'uint64':
            case 'uint32':
            case 'int64':
            case 'int32':
            case 'sint64':
            case 'sint32':
              return parseInt(t, 10);
            default:
              return t;
          }
        };
      e.exports = function(e, t, r) {
        for (var l = [], d = {}, f = [], h = [], p = 0; p < r.length; p++) {
          var b = e.fields[p];
          d[b.tag] = p;
          var m = b.options && b.options.default,
            g = t(b.type, e.id, !1);
          (h[p] = [m, g && g.values]),
            (e.fields[p].packed =
              b.repeated &&
              b.options &&
              b.options.packed &&
              'false' !== b.options.packed),
            b.required && l.push(b.name),
            b.oneof && f.push(b.name);
        }
        function y(e, t, r, i, a, u) {
          var c = t.name;
          if (t.oneof)
            for (var l = Object.keys(r), d = 0; d < l.length; d++)
              if (f.indexOf(l[d]) > -1) {
                const e = o(l[d]);
                delete r[`has${e}`],
                  delete r[`get${e}`],
                  delete r[`set${e}`],
                  delete r[`clear${e}`],
                  delete r[l[d]];
              }
          let h;
          if (e.message) {
            var p = n.decode(i, a);
            a += n.decode.bytes;
            var b = e.decode(i, a, a + p);
            t.map
              ? ((h = r[c] || {}), (h[b.key] = b.value))
              : t.repeated
              ? ((h = r[c] || []), h.push(b))
              : (h = b);
          } else
            t.repeated
              ? ((h = r[c] || []), h.push(e.decode(i, a)))
              : (h = e.decode(i, a));
          return s(r, c, h), (a += e.decode.bytes);
        }
        return function t(o, p, b) {
          if (
            (null == p && (p = 0),
            null == b && (b = o.length),
            !(b <= o.length && p <= o.length))
          )
            throw new Error('Decoded message is not valid');
          for (var m, g = p, v = {}; ; ) {
            if (b <= p) {
              var w,
                k,
                _ = '',
                S = 0;
              for (S = 0; S < l.length; S++)
                if (((_ = l[S]), !i(v[_])))
                  throw new Error(
                    'Decoded message is not valid, missing required field: ' + _
                  );
              for (S = 0; S < r.length; S++) {
                let t;
                if (
                  ((m = e.fields[S]),
                  (k = h[S][0]),
                  (w = h[S][1]),
                  (_ = m.name),
                  !Object.prototype.hasOwnProperty.call(v, _))
                ) {
                  var j = !1;
                  if (m.oneof)
                    for (var E = Object.keys(v), x = 0; x < E.length; x++)
                      if (f.indexOf(E[x]) > -1) {
                        j = !0;
                        break;
                      }
                  j ||
                    (w
                      ? m.repeated
                        ? (k = [])
                        : ((k = k && w[k] ? w[k].value : w[Object.keys(w)[0]].value),
                          (k = parseInt(k || 0, 10)))
                      : ((t = u(m)), (k = c(m, k))),
                    s(v, _, k, t));
                }
              }
              return (t.bytes = p - g), v;
            }
            var O = n.decode(o, p);
            p += n.decode.bytes;
            var A = d[O >> 3];
            if (null != A) {
              var C = r[A];
              if ((m = e.fields[A]).packed) {
                var R = n.decode(o, p);
                for (R += p += n.decode.bytes; p < R; ) p = y(C, m, v, o, p);
              } else p = y(C, m, v, o, p);
            } else p = a(7 & O, o, p);
          }
        };
      };
    },
    '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/encode.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      (function(t) {
        var n = r(
            '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/utils.js'
          ).defined,
          i = r('../../node_modules/varint/index.js');
        e.exports = function(e, r, o, s, a) {
          for (var u = Object.keys(s), c = o.length, l = {}, d = 0; d < c; d++) {
            l[d] = {
              p: i.encode((e.fields[d].tag << 3) | 2),
              h: i.encode((e.fields[d].tag << 3) | o[d].type)
            };
            var f = e.fields[d];
            e.fields[d].packed =
              f.repeated && f.options && f.options.packed && 'false' !== f.options.packed;
          }
          function h(e, t, r, n, o, s) {
            var a = 0;
            if (!o) for (a = 0; a < r.length; a++) e[t++] = r[a];
            return (
              n.message && (i.encode(n.encodingLength(s), e, t), (t += i.encode.bytes)),
              n.encode(s, e, t),
              t + n.encode.bytes
            );
          }
          return function r(d, f, p) {
            null == p && (p = 0), null == f && (f = t.allocUnsafe(a(d)));
            var b = p,
              m = Object.keys(d),
              g = 0,
              y = !1;
            for (g = 0; g < u.length; g++) {
              var v = u[g],
                w = s[g];
              if (m.indexOf(w) > -1) {
                if (y)
                  throw new Error(
                    'only one of the properties defined in oneof ' + v + ' can be set'
                  );
                y = !0;
              }
            }
            for (g = 0; g < c; g++) {
              var k = o[g],
                _ = e.fields[g],
                S = d[_.name],
                j = 0;
              if (n(S)) {
                var E,
                  x = l[g].p,
                  O = l[g].h,
                  A = _.packed;
                if (_.map) {
                  var C = Object.keys(S);
                  for (j = 0; j < C.length; j++) C[j] = { key: C[j], value: S[C[j]] };
                  S = C;
                }
                if (A) {
                  var R = 0;
                  for (j = 0; j < S.length; j++)
                    Object.prototype.hasOwnProperty.call(S, j) &&
                      (R += k.encodingLength(S[j]));
                  if (R) {
                    for (j = 0; j < O.length; j++) f[p++] = x[j];
                    i.encode(R, f, p), (p += i.encode.bytes);
                  }
                }
                if (_.repeated)
                  for (j = 0; j < S.length; j++)
                    (E = S[j]), n(E) && (p = h(f, p, O, k, A, E));
                else p = h(f, p, O, k, A, S);
              } else if (_.required) throw new Error(_.name + ' is required');
            }
            return (r.bytes = p - b), f;
          };
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/encoding-length.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var n = r(
          '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/utils.js'
        ).defined,
        i = r('../../node_modules/varint/index.js');
      e.exports = function(e, t, r) {
        for (
          var o = Object.keys(r), s = t.length, a = new Array(s), u = 0;
          u < e.fields.length;
          u++
        ) {
          a[u] = i.encodingLength((e.fields[u].tag << 3) | t[u].type);
          var c = e.fields[u];
          e.fields[u].packed =
            c.repeated && c.options && c.options.packed && 'false' !== c.options.packed;
        }
        return function(u) {
          var c = 0,
            l = 0,
            d = 0;
          for (l = 0; l < o.length; l++) {
            var f = o[l],
              h = r[f],
              p = !1;
            for (d = 0; d < h.length; d++)
              if (n(u[h[d]])) {
                if (p)
                  throw new Error(
                    'only one of the properties defined in oneof ' + f + ' can be set'
                  );
                p = !0;
              }
          }
          for (l = 0; l < s; l++) {
            var b,
              m = t[l],
              g = e.fields[l],
              y = u[g.name],
              v = a[l];
            if (n(y)) {
              if (g.map) {
                var w = Object.keys(y);
                for (d = 0; d < w.length; d++) w[d] = { key: w[d], value: y[w[d]] };
                y = w;
              }
              if (g.packed) {
                var k = 0;
                for (d = 0; d < y.length; d++)
                  n(y[d]) &&
                    ((k += b = m.encodingLength(y[d])),
                    m.message && (k += i.encodingLength(b)));
                k && (c += v + k + i.encodingLength(k));
              } else if (g.repeated)
                for (d = 0; d < y.length; d++)
                  n(y[d]) &&
                    (c +=
                      v +
                      (b = m.encodingLength(y[d])) +
                      (m.message ? i.encodingLength(b) : 0));
              else
                c +=
                  v + (b = m.encodingLength(y)) + (m.message ? i.encodingLength(b) : 0);
            } else if (g.required) throw new Error(g.name + ' is required');
          }
          return c;
        };
      };
    },
    '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/encodings.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var n,
        i,
        o,
        s = r('../../node_modules/varint/index.js'),
        a = r('../../node_modules/signed-varint/index.js'),
        u = r('../../node_modules/safe-buffer/index.js').Buffer,
        c = function(e, t, r, n) {
          return (
            (t.bytes = r.bytes = 0), { type: e, encode: t, decode: r, encodingLength: n }
          );
        };
      (t.make = c),
        (t.bytes =
          ((n = function(e) {
            return u.isBuffer(e) ? e.length : u.byteLength(e);
          }),
          c(
            2,
            (i = function(e, t, r) {
              var o = r,
                a = n(e);
              return (
                s.encode(a, t, r),
                (r += s.encode.bytes),
                u.isBuffer(e) ? e.copy(t, r) : t.write(e, r, a),
                (r += a),
                (i.bytes = r - o),
                t
              );
            }),
            (o = function(e, t) {
              var r = t,
                n = s.decode(e, t);
              t += s.decode.bytes;
              var i = e.slice(t, t + n);
              return (t += i.length), (o.bytes = t - r), i;
            }),
            function(e) {
              var t = n(e);
              return s.encodingLength(t) + t;
            }
          ))),
        (t.string = (function() {
          var e = function(t, r, n) {
              var i = n,
                o = u.byteLength(t);
              return (
                s.encode(o, r, n, 'utf-8'),
                (n += s.encode.bytes),
                r.write(t, n, o),
                (n += o),
                (e.bytes = n - i),
                r
              );
            },
            t = function(e, r) {
              var n = r,
                i = s.decode(e, r);
              r += s.decode.bytes;
              var o = e.toString('utf-8', r, r + i);
              return (r += i), (t.bytes = r - n), o;
            };
          return c(2, e, t, function(e) {
            var t = u.byteLength(e);
            return s.encodingLength(t) + t;
          });
        })()),
        (t.bool = (function() {
          var e = function(t, r, n) {
              return (r[n] = t ? 1 : 0), (e.bytes = 1), r;
            },
            t = function(e, r) {
              var n = e[r] > 0;
              return (t.bytes = 1), n;
            };
          return c(0, e, t, function(e) {
            return 1;
          });
        })()),
        (t.int32 = (function() {
          var e = function(t, r) {
              var n = s.decode(t, r);
              return (e.bytes = s.decode.bytes), n > 2147483647 ? n - 4294967296 : n;
            },
            t = function(e, r, n) {
              return (
                s.encode(e < 0 ? e + 4294967296 : e, r, n), (t.bytes = s.encode.bytes), r
              );
            };
          return c(0, t, e, function(e) {
            return s.encodingLength(e < 0 ? e + 4294967296 : e);
          });
        })()),
        (t.int64 = (function() {
          var e = function(t, r) {
              var n = s.decode(t, r);
              if (n >= Math.pow(2, 63)) {
                for (var i = 9; 255 === t[r + i - 1]; ) i--;
                i = i || 9;
                var o = u.allocUnsafe(i);
                t.copy(o, 0, r, r + i),
                  (o[i - 1] = 127 & o[i - 1]),
                  (n = -1 * s.decode(o, 0)),
                  (e.bytes = 10);
              } else e.bytes = s.decode.bytes;
              return n;
            },
            t = function(e, r, n) {
              if (e < 0) {
                var i = n + 9;
                for (
                  s.encode(-1 * e, r, n), r[(n += s.encode.bytes - 1)] = 128 | r[n];
                  n < i - 1;

                )
                  r[++n] = 255;
                (r[i] = 1), (t.bytes = 10);
              } else s.encode(e, r, n), (t.bytes = s.encode.bytes);
              return r;
            };
          return c(0, t, e, function(e) {
            return e < 0 ? 10 : s.encodingLength(e);
          });
        })()),
        (t.sint32 = t.sint64 = c(0, a.encode, a.decode, a.encodingLength)),
        (t.uint32 = t.uint64 = t.enum = t.varint = c(
          0,
          s.encode,
          s.decode,
          s.encodingLength
        )),
        (t.fixed64 = t.sfixed64 = (function() {
          var e = function(t, r, n) {
              return t.copy(r, n), (e.bytes = 8), r;
            },
            t = function(e, r) {
              var n = e.slice(r, r + 8);
              return (t.bytes = 8), n;
            };
          return c(1, e, t, function(e) {
            return 8;
          });
        })()),
        (t.double = (function() {
          var e = function(t, r, n) {
              return r.writeDoubleLE(t, n), (e.bytes = 8), r;
            },
            t = function(e, r) {
              var n = e.readDoubleLE(r);
              return (t.bytes = 8), n;
            };
          return c(1, e, t, function(e) {
            return 8;
          });
        })()),
        (t.fixed32 = (function() {
          var e = function(t, r, n) {
              return r.writeUInt32LE(t, n), (e.bytes = 4), r;
            },
            t = function(e, r) {
              var n = e.readUInt32LE(r);
              return (t.bytes = 4), n;
            };
          return c(5, e, t, function(e) {
            return 4;
          });
        })()),
        (t.sfixed32 = (function() {
          var e = function(t, r, n) {
              return r.writeInt32LE(t, n), (e.bytes = 4), r;
            },
            t = function(e, r) {
              var n = e.readInt32LE(r);
              return (t.bytes = 4), n;
            };
          return c(5, e, t, function(e) {
            return 4;
          });
        })()),
        (t.float = (function() {
          var e = function(t, r, n) {
              return r.writeFloatLE(t, n), (e.bytes = 4), r;
            },
            t = function(e, r) {
              var n = e.readFloatLE(r);
              return (t.bytes = 4), n;
            };
          return c(5, e, t, function(e) {
            return 4;
          });
        })());
    },
    '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/index.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var n = r(
          '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/encodings.js'
        ),
        i = r(
          '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/decode.js'
        ),
        o = r(
          '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/encode.js'
        ),
        s = r(
          '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/encoding-length.js'
        ),
        a = r('../../node_modules/varint/index.js');
      e.exports = function(e, t) {
        var r = {},
          u = {},
          c = {},
          l = function(e, t) {
            e.enums &&
              e.enums.forEach(function(e) {
                (e.id = t + (t ? '.' : '') + e.name), (u[e.id] = e), l(e, e.id);
              }),
              e.messages &&
                e.messages.forEach(function(n) {
                  (n.id = t + (t ? '.' : '') + n.name),
                    (r[n.id] = n),
                    n.fields.forEach(function(n) {
                      if (n.map) {
                        var i = 'Map_' + n.map.from + '_' + n.map.to,
                          o = {
                            name: i,
                            enums: [],
                            messages: [],
                            fields: [
                              {
                                name: 'key',
                                type: n.map.from,
                                tag: 1,
                                repeated: !1,
                                required: !0
                              },
                              {
                                name: 'value',
                                type: n.map.to,
                                tag: 2,
                                repeated: !1,
                                required: !1
                              }
                            ],
                            extensions: null,
                            id: t + (t ? '.' : '') + i
                          };
                        r[o.id] || ((r[o.id] = o), e.messages.push(o)),
                          (n.type = i),
                          (n.repeated = !0);
                      }
                    }),
                    l(n, n.id);
                });
          };
        l(e, '');
        var d = function(e, t) {
            e.messages.forEach(function(r) {
              t[r.name] = f(r.name, e.id);
            }),
              e.enums.forEach(function(e) {
                t[e.name] = (function(e) {
                  if (!e) return null;
                  var t = {};
                  return (
                    Object.keys(e).forEach(function(r) {
                      t[r] = e[r].value;
                    }),
                    t
                  );
                })(e.values);
              }),
              (t.type = 2),
              (t.message = !0),
              (t.name = e.name);
            var r = {};
            e.fields.forEach(function(e) {
              e.oneof && (r[e.oneof] || (r[e.oneof] = []), r[e.oneof].push(e.name));
            });
            var n = e.fields.map(function(t) {
                return f(t.type, e.id);
              }),
              a = s(e, n, r),
              u = o(e, f, n, r, a),
              c = i(e, f, n);
            return (
              (u.bytes = c.bytes = 0),
              (t.buffer = !0),
              (t.encode = u),
              (t.decode = c),
              (t.encodingLength = a),
              t
            );
          },
          f = function(e, i, o) {
            if (t && t[e]) return t[e];
            if (n[e]) return n[e];
            var s,
              l,
              f = (i ? i + '.' + e : e)
                .split('.')
                .map(function(t, r, n) {
                  return n
                    .slice(0, r)
                    .concat(e)
                    .join('.');
                })
                .reverse()
                .reduce(function(e, t) {
                  return e || r[t] || u[t];
                }, null);
            if (!1 === o) return f;
            if (!f) throw new Error('Could not resolve ' + e);
            return f.values
              ? ((s = f),
                (l = Object.keys(s.values || []).map(function(e) {
                  return parseInt(s.values[e].value, 10);
                })),
                n.make(
                  0,
                  function e(t, r, n) {
                    if (!l.length || -1 === l.indexOf(t))
                      throw new Error('Invalid enum value: ' + t);
                    return a.encode(t, r, n), (e.bytes = a.encode.bytes), r;
                  },
                  function e(t, r) {
                    var n = a.decode(t, r);
                    if (!l.length || -1 === l.indexOf(n))
                      throw new Error('Invalid enum value: ' + n);
                    return (e.bytes = a.decode.bytes), n;
                  },
                  a.encodingLength
                ))
              : c[f.id] || d(f, (c[f.id] = {}));
          };
        return (e.enums || []).concat(
          (e.messages || []).map(function(e) {
            return f(e.id);
          })
        );
      };
    },
    '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/utils.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      t.defined = function(e) {
        return null != e && ('number' != typeof e || !isNaN(e));
      };
    },
    '../../node_modules/ipld-dag-pb/node_modules/protons/src/index.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      (function(t) {
        var n = r('../../node_modules/protocol-buffers-schema/index.js'),
          i = r(
            '../../node_modules/ipld-dag-pb/node_modules/protons/src/compile/index.js'
          );
        e.exports = function(e, r) {
          if ((r || (r = {}), !e))
            throw new Error('Pass in a .proto string or a protobuf-schema parsed object');
          var o = 'object' != typeof e || t.isBuffer(e) ? n.parse(e) : e,
            s = function() {
              var e = this;
              i(o, r.encodings || {}).forEach(function(t) {
                e[t.name] =
                  (function(e) {
                    if (!e) return null;
                    var t = {};
                    return (
                      Object.keys(e).forEach(function(r) {
                        t[r] = e[r].value;
                      }),
                      t
                    );
                  })(t.values) || t;
              });
            };
          return (
            (s.prototype.toString = function() {
              return n.stringify(o);
            }),
            (s.prototype.toJSON = function() {
              return o;
            }),
            new s()
          );
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/ipld-dag-pb/src/dag-link/dagLink.js': function(e, t, r) {
      'use strict';
      (function(t) {
        const n = r('../../node_modules/cids/src/index.js'),
          i = r('../../node_modules/class-is/index.js');
        e.exports = i(
          class {
            constructor(e, t, r) {
              if (!r) throw new Error('A link requires a cid to point to');
              (this._name = e || ''),
                (this._nameBuf = null),
                (this._size = t),
                (this._cid = new n(r));
            }
            toString() {
              return `DAGLink <${this._cid.toBaseEncodedString()} - name: "${
                this.Name
              }", size: ${this.Tsize}>`;
            }
            toJSON() {
              return (
                this._json ||
                  (this._json = Object.freeze({
                    name: this.Name,
                    size: this.Tsize,
                    cid: this.Hash.toBaseEncodedString()
                  })),
                Object.assign({}, this._json)
              );
            }
            get Name() {
              return this._name;
            }
            get nameAsBuffer() {
              return (
                null !== this._nameBuf || (this._nameBuf = t.from(this._name)),
                this._nameBuf
              );
            }
            set Name(e) {
              throw new Error("Can't set property: 'name' is immutable");
            }
            get Tsize() {
              return this._size;
            }
            set Tsize(e) {
              throw new Error("Can't set property: 'size' is immutable");
            }
            get Hash() {
              return this._cid;
            }
            set Hash(e) {
              throw new Error("Can't set property: 'cid' is immutable");
            }
          },
          { className: 'DAGLink', symbolName: '@ipld/js-ipld-dag-pb/daglink' }
        );
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/ipld-dag-pb/src/dag-link/index.js': function(e, t, r) {
      'use strict';
      (e.exports = r('../../node_modules/ipld-dag-pb/src/dag-link/dagLink.js')).util = r(
        '../../node_modules/ipld-dag-pb/src/dag-link/util.js'
      );
    },
    '../../node_modules/ipld-dag-pb/src/dag-link/util.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/ipld-dag-pb/src/dag-link/dagLink.js');
      e.exports.createDagLinkFromB58EncodedHash = function(e) {
        return new n(
          e.Name || e.name || '',
          e.Tsize || e.Size || e.size || 0,
          e.Hash || e.hash || e.multihash || e.cid
        );
      };
    },
    '../../node_modules/ipld-dag-pb/src/dag-node/addLink.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/ipld-dag-pb/src/dag-node/sortLinks.js'),
        i = r('../../node_modules/ipld-dag-pb/src/dag-link/index.js');
      e.exports = (e, t) => {
        const r = (e => {
          if (i.isDAGLink(e)) return e;
          if (!('cid' in e || 'hash' in e || 'Hash' in e || 'multihash' in e))
            throw new Error(
              'Link must be a DAGLink or DAGLink-like. Convert the DAGNode into a DAGLink via `node.toDAGLink()`.'
            );
          return new i(
            e.Name || e.name,
            e.Tsize || e.size,
            e.Hash || e.multihash || e.hash || e.cid
          );
        })(t);
        e._links.push(r), (e._links = n(e._links));
      };
    },
    '../../node_modules/ipld-dag-pb/src/dag-node/dagNode.js': function(e, t, r) {
      'use strict';
      (function(t) {
        const n = r('../../node_modules/class-is/index.js'),
          i = r('../../node_modules/ipld-dag-pb/src/dag-node/sortLinks.js'),
          o = r('../../node_modules/ipld-dag-pb/src/dag-link/dagLink.js'),
          { serializeDAGNode: s } = r('../../node_modules/ipld-dag-pb/src/serialize.js'),
          a = r('../../node_modules/ipld-dag-pb/src/dag-node/toDagLink.js'),
          u = r('../../node_modules/ipld-dag-pb/src/dag-node/addLink.js'),
          c = r('../../node_modules/ipld-dag-pb/src/dag-node/rmLink.js');
        e.exports = n(
          class {
            constructor(e, r = [], n = null) {
              if (
                (e || (e = t.alloc(0)),
                'string' == typeof e && (e = t.from(e)),
                !t.isBuffer(e))
              )
                throw new Error("Passed 'data' is not a buffer or a string!");
              if (null !== n && 'number' != typeof n)
                throw new Error("Passed 'serializedSize' must be a number!");
              (r = r.map(e =>
                o.isDAGLink(e) ? e : o.util.createDagLinkFromB58EncodedHash(e)
              )),
                (r = i(r)),
                (this._data = e),
                (this._links = r),
                (this._serializedSize = n),
                (this._size = null);
            }
            toJSON() {
              return (
                this._json ||
                  (this._json = Object.freeze({
                    data: this.Data,
                    links: this._links.map(e => e.toJSON()),
                    size: this.size
                  })),
                Object.assign({}, this._json)
              );
            }
            toString() {
              return `DAGNode <data: "${this.Data.toString('base64')}", links: ${
                this.Links.length
              }, size: ${this.size}>`;
            }
            _invalidateCached() {
              (this._serializedSize = null), (this._size = null);
            }
            addLink(e) {
              return this._invalidateCached(), u(this, e);
            }
            rmLink(e) {
              return this._invalidateCached(), c(this, e);
            }
            toDAGLink(e) {
              return a(this, e);
            }
            serialize() {
              return s({ Data: this._data, Links: this._links });
            }
            get size() {
              return (
                null === this._size &&
                  (null === this._serializedSize &&
                    (this._serializedSize = this.serialize().length),
                  (this._size = this._links.reduce(
                    (e, t) => e + t.Tsize,
                    this._serializedSize
                  ))),
                this._size
              );
            }
            set size(e) {
              throw new Error("Can't set property: 'size' is immutable");
            }
            get Data() {
              return this._data;
            }
            set Data(e) {
              throw new Error("Can't set property: 'Data' is immutable");
            }
            get Links() {
              return this._links.map(e => ({
                Name: e.Name,
                Tsize: e.Tsize,
                Hash: e.Hash
              }));
            }
            set Links(e) {
              throw new Error("Can't set property: 'Links' is immutable");
            }
          },
          { className: 'DAGNode', symbolName: '@ipld/js-ipld-dag-pb/dagnode' }
        );
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/ipld-dag-pb/src/dag-node/index.js': function(e, t, r) {
      'use strict';
      e.exports = r('../../node_modules/ipld-dag-pb/src/dag-node/dagNode.js');
    },
    '../../node_modules/ipld-dag-pb/src/dag-node/rmLink.js': function(e, t, r) {
      'use strict';
      (function(t) {
        const n = r('../../node_modules/cids/src/index.js');
        e.exports = (e, r) => {
          if ('string' == typeof r) e._links = e._links.filter(e => e.Name !== r);
          else {
            if (!t.isBuffer(r) && !n.isCID(r))
              throw new Error('second arg needs to be a name or CID');
            e._links = e._links.filter(e => !e.Hash.equals(r));
          }
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/ipld-dag-pb/src/dag-node/sortLinks.js': function(e, t, r) {
      'use strict';
      (function(t) {
        const n = r('../../node_modules/stable/stable.js'),
          i = (e, r) => t.compare(e.nameAsBuffer, r.nameAsBuffer);
        e.exports = e => n(e, i);
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/ipld-dag-pb/src/dag-node/toDagLink.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/ipld-dag-pb/src/dag-link/dagLink.js'),
        i = r('../../node_modules/ipld-dag-pb/src/genCid.js');
      e.exports = async (e, t = {}) => {
        const r = await i.cid(e.serialize(), t);
        return new n(t.name || '', e.size, r);
      };
    },
    '../../node_modules/ipld-dag-pb/src/dag.proto.js': function(e, t, r) {
      'use strict';
      e.exports =
        '// An IPFS MerkleDAG Link\nmessage PBLink {\n\n  // multihash of the target object\n  optional bytes Hash = 1;\n\n  // utf string name. should be unique per object\n  optional string Name = 2;\n\n  // cumulative size of target object\n  optional uint64 Tsize = 3;\n}\n\n// An IPFS MerkleDAG Node\nmessage PBNode {\n\n  // refs to other objects\n  repeated PBLink Links = 2;\n\n  // opaque user data\n  optional bytes Data = 1;\n}';
    },
    '../../node_modules/ipld-dag-pb/src/genCid.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/cids/src/index.js'),
        i = r('../../node_modules/multicodec/src/index.js'),
        o = r('../../node_modules/multihashing-async/src/index.js');
      ((t = e.exports).codec = i.DAG_PB), (t.defaultHashAlg = i.SHA2_256);
      t.cid = async (e, r) => {
        const s = { cidVersion: 1, hashAlg: t.defaultHashAlg },
          a = Object.assign(s, r),
          u = await o(e, a.hashAlg),
          c = i.print[t.codec];
        return new n(a.cidVersion, c, u);
      };
    },
    '../../node_modules/ipld-dag-pb/src/index.js': function(e, t, r) {
      'use strict';
      (t.DAGNode = r('../../node_modules/ipld-dag-pb/src/dag-node/index.js')),
        (t.DAGLink = r('../../node_modules/ipld-dag-pb/src/dag-link/index.js')),
        (t.resolver = r('../../node_modules/ipld-dag-pb/src/resolver.js')),
        (t.util = r('../../node_modules/ipld-dag-pb/src/util.js')),
        (t.codec = t.util.codec),
        (t.defaultHashAlg = t.util.defaultHashAlg);
    },
    '../../node_modules/ipld-dag-pb/src/resolver.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/cids/src/index.js'),
        i = r('../../node_modules/ipld-dag-pb/src/util.js');
      (t.resolve = (e, t) => {
        let r = i.deserialize(e);
        const o = t.split('/').filter(Boolean);
        for (; o.length; ) {
          const e = o.shift();
          if (void 0 === r[e]) {
            for (const t of r.Links)
              if (t.Name === e) return { value: t.Hash, remainderPath: o.join('/') };
            throw new Error(`Object has no property '${e}'`);
          }
          if (((r = r[e]), n.isCID(r))) return { value: r, remainderPath: o.join('/') };
        }
        return { value: r, remainderPath: '' };
      }),
        (t.tree = function*(e) {
          const t = i.deserialize(e);
          yield 'Data', yield 'Links';
          for (let e = 0; e < t.Links.length; e++)
            yield `Links/${e}`,
              yield `Links/${e}/Name`,
              yield `Links/${e}/Tsize`,
              yield `Links/${e}/Hash`;
        });
    },
    '../../node_modules/ipld-dag-pb/src/serialize.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/ipld-dag-pb/node_modules/protons/src/index.js')(
          r('../../node_modules/ipld-dag-pb/src/dag.proto.js')
        ),
        i = r('../../node_modules/ipld-dag-pb/src/dag-link/dagLink.js');
      t = e.exports;
      const o = e => {
        const t = e.Data,
          r = e.Links || [];
        return n.PBNode.encode(
          (e => {
            const t = {};
            return (
              e.Data && e.Data.length > 0 ? (t.Data = e.Data) : (t.Data = null),
              e.Links && e.Links.length > 0
                ? (t.Links = e.Links.map(e => ({
                    Hash: e.Hash.buffer,
                    Name: e.Name,
                    Tsize: e.Tsize
                  })))
                : (t.Links = null),
              t
            );
          })({ Data: t, Links: r })
        );
      };
      (t.serializeDAGNode = o),
        (t.serializeDAGNodeLike = (e, t = []) => {
          const r = { Data: e };
          return (
            (r.Links = t.map(e =>
              i.isDAGLink(e) ? e : i.util.createDagLinkFromB58EncodedHash(e)
            )),
            o(r)
          );
        });
    },
    '../../node_modules/ipld-dag-pb/src/util.js': function(e, t, r) {
      'use strict';
      (function(n) {
        const i = r('../../node_modules/ipld-dag-pb/node_modules/protons/src/index.js')(
            r('../../node_modules/ipld-dag-pb/src/dag.proto.js')
          ),
          o = r('../../node_modules/ipld-dag-pb/src/dag-link/dagLink.js'),
          s = r('../../node_modules/ipld-dag-pb/src/dag-node/dagNode.js'),
          { serializeDAGNodeLike: a } = r(
            '../../node_modules/ipld-dag-pb/src/serialize.js'
          ),
          u = r('../../node_modules/ipld-dag-pb/src/genCid.js');
        ((t = e.exports).codec = u.codec), (t.defaultHashAlg = u.defaultHashAlg);
        (t.serialize = e => (s.isDAGNode(e) ? e.serialize() : a(e.Data, e.Links))),
          (t.deserialize = e => {
            const t = i.PBNode.decode(e),
              r = t.Links.map(e => new o(e.Name, e.Tsize, e.Hash)),
              a = null == t.Data ? n.alloc(0) : t.Data;
            return new s(a, r, e.length);
          }),
          (t.cid = (e, t) => u.cid(e, t));
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/js-sha256/src/sha256.js': function(
      module,
      exports,
      __webpack_require__
    ) {
      (function(process, global) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * [js-sha256]{@link https://github.com/emn178/js-sha256}
         *
         * @version 0.9.0
         * @author Chen, Yi-Cyuan [emn178@gmail.com]
         * @copyright Chen, Yi-Cyuan 2014-2017
         * @license MIT
         */ !(function() {
          'use strict';
          var ERROR = 'input is invalid type',
            WINDOW = 'object' == typeof window,
            root = WINDOW ? window : {};
          root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
          var WEB_WORKER = !WINDOW && 'object' == typeof self,
            NODE_JS =
              !root.JS_SHA256_NO_NODE_JS &&
              'object' == typeof process &&
              process.versions &&
              process.versions.node;
          NODE_JS ? (root = global) : WEB_WORKER && (root = self);
          var COMMON_JS =
              !root.JS_SHA256_NO_COMMON_JS && 'object' == typeof module && module.exports,
            AMD = __webpack_require__(
              '../../node_modules/webpack/buildin/amd-options.js'
            ),
            ARRAY_BUFFER =
              !root.JS_SHA256_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
            HEX_CHARS = '0123456789abcdef'.split(''),
            EXTRA = [-2147483648, 8388608, 32768, 128],
            SHIFT = [24, 16, 8, 0],
            K = [
              1116352408,
              1899447441,
              3049323471,
              3921009573,
              961987163,
              1508970993,
              2453635748,
              2870763221,
              3624381080,
              310598401,
              607225278,
              1426881987,
              1925078388,
              2162078206,
              2614888103,
              3248222580,
              3835390401,
              4022224774,
              264347078,
              604807628,
              770255983,
              1249150122,
              1555081692,
              1996064986,
              2554220882,
              2821834349,
              2952996808,
              3210313671,
              3336571891,
              3584528711,
              113926993,
              338241895,
              666307205,
              773529912,
              1294757372,
              1396182291,
              1695183700,
              1986661051,
              2177026350,
              2456956037,
              2730485921,
              2820302411,
              3259730800,
              3345764771,
              3516065817,
              3600352804,
              4094571909,
              275423344,
              430227734,
              506948616,
              659060556,
              883997877,
              958139571,
              1322822218,
              1537002063,
              1747873779,
              1955562222,
              2024104815,
              2227730452,
              2361852424,
              2428436474,
              2756734187,
              3204031479,
              3329325298
            ],
            OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'],
            blocks = [];
          (!root.JS_SHA256_NO_NODE_JS && Array.isArray) ||
            (Array.isArray = function(e) {
              return '[object Array]' === Object.prototype.toString.call(e);
            }),
            !ARRAY_BUFFER ||
              (!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
              (ArrayBuffer.isView = function(e) {
                return (
                  'object' == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                );
              });
          var createOutputMethod = function(e, t) {
              return function(r) {
                return new Sha256(t, !0).update(r)[e]();
              };
            },
            createMethod = function(e) {
              var t = createOutputMethod('hex', e);
              NODE_JS && (t = nodeWrap(t, e)),
                (t.create = function() {
                  return new Sha256(e);
                }),
                (t.update = function(e) {
                  return t.create().update(e);
                });
              for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
                var n = OUTPUT_TYPES[r];
                t[n] = createOutputMethod(n, e);
              }
              return t;
            },
            nodeWrap = function(method, is224) {
              var crypto = eval("require('crypto')"),
                Buffer = eval("require('buffer').Buffer"),
                algorithm = is224 ? 'sha224' : 'sha256',
                nodeMethod = function(e) {
                  if ('string' == typeof e)
                    return crypto
                      .createHash(algorithm)
                      .update(e, 'utf8')
                      .digest('hex');
                  if (null == e) throw new Error(ERROR);
                  return (
                    e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
                    Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer
                      ? crypto
                          .createHash(algorithm)
                          .update(new Buffer(e))
                          .digest('hex')
                      : method(e)
                  );
                };
              return nodeMethod;
            },
            createHmacOutputMethod = function(e, t) {
              return function(r, n) {
                return new HmacSha256(r, t, !0).update(n)[e]();
              };
            },
            createHmacMethod = function(e) {
              var t = createHmacOutputMethod('hex', e);
              (t.create = function(t) {
                return new HmacSha256(t, e);
              }),
                (t.update = function(e, r) {
                  return t.create(e).update(r);
                });
              for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
                var n = OUTPUT_TYPES[r];
                t[n] = createHmacOutputMethod(n, e);
              }
              return t;
            };
          function Sha256(e, t) {
            t
              ? ((blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0),
                (this.blocks = blocks))
              : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              e
                ? ((this.h0 = 3238371032),
                  (this.h1 = 914150663),
                  (this.h2 = 812702999),
                  (this.h3 = 4144912697),
                  (this.h4 = 4290775857),
                  (this.h5 = 1750603025),
                  (this.h6 = 1694076839),
                  (this.h7 = 3204075428))
                : ((this.h0 = 1779033703),
                  (this.h1 = 3144134277),
                  (this.h2 = 1013904242),
                  (this.h3 = 2773480762),
                  (this.h4 = 1359893119),
                  (this.h5 = 2600822924),
                  (this.h6 = 528734635),
                  (this.h7 = 1541459225)),
              (this.block = this.start = this.bytes = this.hBytes = 0),
              (this.finalized = this.hashed = !1),
              (this.first = !0),
              (this.is224 = e);
          }
          function HmacSha256(e, t, r) {
            var n,
              i = typeof e;
            if ('string' === i) {
              var o,
                s = [],
                a = e.length,
                u = 0;
              for (n = 0; n < a; ++n)
                (o = e.charCodeAt(n)) < 128
                  ? (s[u++] = o)
                  : o < 2048
                  ? ((s[u++] = 192 | (o >> 6)), (s[u++] = 128 | (63 & o)))
                  : o < 55296 || o >= 57344
                  ? ((s[u++] = 224 | (o >> 12)),
                    (s[u++] = 128 | ((o >> 6) & 63)),
                    (s[u++] = 128 | (63 & o)))
                  : ((o = 65536 + (((1023 & o) << 10) | (1023 & e.charCodeAt(++n)))),
                    (s[u++] = 240 | (o >> 18)),
                    (s[u++] = 128 | ((o >> 12) & 63)),
                    (s[u++] = 128 | ((o >> 6) & 63)),
                    (s[u++] = 128 | (63 & o)));
              e = s;
            } else {
              if ('object' !== i) throw new Error(ERROR);
              if (null === e) throw new Error(ERROR);
              if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!(Array.isArray(e) || (ARRAY_BUFFER && ArrayBuffer.isView(e))))
                throw new Error(ERROR);
            }
            e.length > 64 && (e = new Sha256(t, !0).update(e).array());
            var c = [],
              l = [];
            for (n = 0; n < 64; ++n) {
              var d = e[n] || 0;
              (c[n] = 92 ^ d), (l[n] = 54 ^ d);
            }
            Sha256.call(this, t, r),
              this.update(l),
              (this.oKeyPad = c),
              (this.inner = !0),
              (this.sharedMemory = r);
          }
          (Sha256.prototype.update = function(e) {
            if (!this.finalized) {
              var t,
                r = typeof e;
              if ('string' !== r) {
                if ('object' !== r) throw new Error(ERROR);
                if (null === e) throw new Error(ERROR);
                if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!(Array.isArray(e) || (ARRAY_BUFFER && ArrayBuffer.isView(e))))
                  throw new Error(ERROR);
                t = !0;
              }
              for (var n, i, o = 0, s = e.length, a = this.blocks; o < s; ) {
                if (
                  (this.hashed &&
                    ((this.hashed = !1),
                    (a[0] = this.block),
                    (a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0)),
                  t)
                )
                  for (i = this.start; o < s && i < 64; ++o)
                    a[i >> 2] |= e[o] << SHIFT[3 & i++];
                else
                  for (i = this.start; o < s && i < 64; ++o)
                    (n = e.charCodeAt(o)) < 128
                      ? (a[i >> 2] |= n << SHIFT[3 & i++])
                      : n < 2048
                      ? ((a[i >> 2] |= (192 | (n >> 6)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | (63 & n)) << SHIFT[3 & i++]))
                      : n < 55296 || n >= 57344
                      ? ((a[i >> 2] |= (224 | (n >> 12)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | (63 & n)) << SHIFT[3 & i++]))
                      : ((n = 65536 + (((1023 & n) << 10) | (1023 & e.charCodeAt(++o)))),
                        (a[i >> 2] |= (240 | (n >> 18)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | ((n >> 12) & 63)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | (63 & n)) << SHIFT[3 & i++]));
                (this.lastByteIndex = i),
                  (this.bytes += i - this.start),
                  i >= 64
                    ? ((this.block = a[16]),
                      (this.start = i - 64),
                      this.hash(),
                      (this.hashed = !0))
                    : (this.start = i);
              }
              return (
                this.bytes > 4294967295 &&
                  ((this.hBytes += (this.bytes / 4294967296) << 0),
                  (this.bytes = this.bytes % 4294967296)),
                this
              );
            }
          }),
            (Sha256.prototype.finalize = function() {
              if (!this.finalized) {
                this.finalized = !0;
                var e = this.blocks,
                  t = this.lastByteIndex;
                (e[16] = this.block),
                  (e[t >> 2] |= EXTRA[3 & t]),
                  (this.block = e[16]),
                  t >= 56 &&
                    (this.hashed || this.hash(),
                    (e[0] = this.block),
                    (e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0)),
                  (e[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                  (e[15] = this.bytes << 3),
                  this.hash();
              }
            }),
            (Sha256.prototype.hash = function() {
              var e,
                t,
                r,
                n,
                i,
                o,
                s,
                a,
                u,
                c = this.h0,
                l = this.h1,
                d = this.h2,
                f = this.h3,
                h = this.h4,
                p = this.h5,
                b = this.h6,
                m = this.h7,
                g = this.blocks;
              for (e = 16; e < 64; ++e)
                (t =
                  (((i = g[e - 15]) >>> 7) | (i << 25)) ^
                  ((i >>> 18) | (i << 14)) ^
                  (i >>> 3)),
                  (r =
                    (((i = g[e - 2]) >>> 17) | (i << 15)) ^
                    ((i >>> 19) | (i << 13)) ^
                    (i >>> 10)),
                  (g[e] = (g[e - 16] + t + g[e - 7] + r) << 0);
              for (u = l & d, e = 0; e < 64; e += 4)
                this.first
                  ? (this.is224
                      ? ((o = 300032),
                        (m = ((i = g[0] - 1413257819) - 150054599) << 0),
                        (f = (i + 24177077) << 0))
                      : ((o = 704751109),
                        (m = ((i = g[0] - 210244248) - 1521486534) << 0),
                        (f = (i + 143694565) << 0)),
                    (this.first = !1))
                  : ((t =
                      ((c >>> 2) | (c << 30)) ^
                      ((c >>> 13) | (c << 19)) ^
                      ((c >>> 22) | (c << 10))),
                    (n = (o = c & l) ^ (c & d) ^ u),
                    (m =
                      (f +
                        (i =
                          m +
                          (r =
                            ((h >>> 6) | (h << 26)) ^
                            ((h >>> 11) | (h << 21)) ^
                            ((h >>> 25) | (h << 7))) +
                          ((h & p) ^ (~h & b)) +
                          K[e] +
                          g[e])) <<
                      0),
                    (f = (i + (t + n)) << 0)),
                  (t =
                    ((f >>> 2) | (f << 30)) ^
                    ((f >>> 13) | (f << 19)) ^
                    ((f >>> 22) | (f << 10))),
                  (n = (s = f & c) ^ (f & l) ^ o),
                  (b =
                    (d +
                      (i =
                        b +
                        (r =
                          ((m >>> 6) | (m << 26)) ^
                          ((m >>> 11) | (m << 21)) ^
                          ((m >>> 25) | (m << 7))) +
                        ((m & h) ^ (~m & p)) +
                        K[e + 1] +
                        g[e + 1])) <<
                    0),
                  (t =
                    (((d = (i + (t + n)) << 0) >>> 2) | (d << 30)) ^
                    ((d >>> 13) | (d << 19)) ^
                    ((d >>> 22) | (d << 10))),
                  (n = (a = d & f) ^ (d & c) ^ s),
                  (p =
                    (l +
                      (i =
                        p +
                        (r =
                          ((b >>> 6) | (b << 26)) ^
                          ((b >>> 11) | (b << 21)) ^
                          ((b >>> 25) | (b << 7))) +
                        ((b & m) ^ (~b & h)) +
                        K[e + 2] +
                        g[e + 2])) <<
                    0),
                  (t =
                    (((l = (i + (t + n)) << 0) >>> 2) | (l << 30)) ^
                    ((l >>> 13) | (l << 19)) ^
                    ((l >>> 22) | (l << 10))),
                  (n = (u = l & d) ^ (l & f) ^ a),
                  (h =
                    (c +
                      (i =
                        h +
                        (r =
                          ((p >>> 6) | (p << 26)) ^
                          ((p >>> 11) | (p << 21)) ^
                          ((p >>> 25) | (p << 7))) +
                        ((p & b) ^ (~p & m)) +
                        K[e + 3] +
                        g[e + 3])) <<
                    0),
                  (c = (i + (t + n)) << 0);
              (this.h0 = (this.h0 + c) << 0),
                (this.h1 = (this.h1 + l) << 0),
                (this.h2 = (this.h2 + d) << 0),
                (this.h3 = (this.h3 + f) << 0),
                (this.h4 = (this.h4 + h) << 0),
                (this.h5 = (this.h5 + p) << 0),
                (this.h6 = (this.h6 + b) << 0),
                (this.h7 = (this.h7 + m) << 0);
            }),
            (Sha256.prototype.hex = function() {
              this.finalize();
              var e = this.h0,
                t = this.h1,
                r = this.h2,
                n = this.h3,
                i = this.h4,
                o = this.h5,
                s = this.h6,
                a = this.h7,
                u =
                  HEX_CHARS[(e >> 28) & 15] +
                  HEX_CHARS[(e >> 24) & 15] +
                  HEX_CHARS[(e >> 20) & 15] +
                  HEX_CHARS[(e >> 16) & 15] +
                  HEX_CHARS[(e >> 12) & 15] +
                  HEX_CHARS[(e >> 8) & 15] +
                  HEX_CHARS[(e >> 4) & 15] +
                  HEX_CHARS[15 & e] +
                  HEX_CHARS[(t >> 28) & 15] +
                  HEX_CHARS[(t >> 24) & 15] +
                  HEX_CHARS[(t >> 20) & 15] +
                  HEX_CHARS[(t >> 16) & 15] +
                  HEX_CHARS[(t >> 12) & 15] +
                  HEX_CHARS[(t >> 8) & 15] +
                  HEX_CHARS[(t >> 4) & 15] +
                  HEX_CHARS[15 & t] +
                  HEX_CHARS[(r >> 28) & 15] +
                  HEX_CHARS[(r >> 24) & 15] +
                  HEX_CHARS[(r >> 20) & 15] +
                  HEX_CHARS[(r >> 16) & 15] +
                  HEX_CHARS[(r >> 12) & 15] +
                  HEX_CHARS[(r >> 8) & 15] +
                  HEX_CHARS[(r >> 4) & 15] +
                  HEX_CHARS[15 & r] +
                  HEX_CHARS[(n >> 28) & 15] +
                  HEX_CHARS[(n >> 24) & 15] +
                  HEX_CHARS[(n >> 20) & 15] +
                  HEX_CHARS[(n >> 16) & 15] +
                  HEX_CHARS[(n >> 12) & 15] +
                  HEX_CHARS[(n >> 8) & 15] +
                  HEX_CHARS[(n >> 4) & 15] +
                  HEX_CHARS[15 & n] +
                  HEX_CHARS[(i >> 28) & 15] +
                  HEX_CHARS[(i >> 24) & 15] +
                  HEX_CHARS[(i >> 20) & 15] +
                  HEX_CHARS[(i >> 16) & 15] +
                  HEX_CHARS[(i >> 12) & 15] +
                  HEX_CHARS[(i >> 8) & 15] +
                  HEX_CHARS[(i >> 4) & 15] +
                  HEX_CHARS[15 & i] +
                  HEX_CHARS[(o >> 28) & 15] +
                  HEX_CHARS[(o >> 24) & 15] +
                  HEX_CHARS[(o >> 20) & 15] +
                  HEX_CHARS[(o >> 16) & 15] +
                  HEX_CHARS[(o >> 12) & 15] +
                  HEX_CHARS[(o >> 8) & 15] +
                  HEX_CHARS[(o >> 4) & 15] +
                  HEX_CHARS[15 & o] +
                  HEX_CHARS[(s >> 28) & 15] +
                  HEX_CHARS[(s >> 24) & 15] +
                  HEX_CHARS[(s >> 20) & 15] +
                  HEX_CHARS[(s >> 16) & 15] +
                  HEX_CHARS[(s >> 12) & 15] +
                  HEX_CHARS[(s >> 8) & 15] +
                  HEX_CHARS[(s >> 4) & 15] +
                  HEX_CHARS[15 & s];
              return (
                this.is224 ||
                  (u +=
                    HEX_CHARS[(a >> 28) & 15] +
                    HEX_CHARS[(a >> 24) & 15] +
                    HEX_CHARS[(a >> 20) & 15] +
                    HEX_CHARS[(a >> 16) & 15] +
                    HEX_CHARS[(a >> 12) & 15] +
                    HEX_CHARS[(a >> 8) & 15] +
                    HEX_CHARS[(a >> 4) & 15] +
                    HEX_CHARS[15 & a]),
                u
              );
            }),
            (Sha256.prototype.toString = Sha256.prototype.hex),
            (Sha256.prototype.digest = function() {
              this.finalize();
              var e = this.h0,
                t = this.h1,
                r = this.h2,
                n = this.h3,
                i = this.h4,
                o = this.h5,
                s = this.h6,
                a = this.h7,
                u = [
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  255 & e,
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  255 & t,
                  (r >> 24) & 255,
                  (r >> 16) & 255,
                  (r >> 8) & 255,
                  255 & r,
                  (n >> 24) & 255,
                  (n >> 16) & 255,
                  (n >> 8) & 255,
                  255 & n,
                  (i >> 24) & 255,
                  (i >> 16) & 255,
                  (i >> 8) & 255,
                  255 & i,
                  (o >> 24) & 255,
                  (o >> 16) & 255,
                  (o >> 8) & 255,
                  255 & o,
                  (s >> 24) & 255,
                  (s >> 16) & 255,
                  (s >> 8) & 255,
                  255 & s
                ];
              return (
                this.is224 ||
                  u.push((a >> 24) & 255, (a >> 16) & 255, (a >> 8) & 255, 255 & a),
                u
              );
            }),
            (Sha256.prototype.array = Sha256.prototype.digest),
            (Sha256.prototype.arrayBuffer = function() {
              this.finalize();
              var e = new ArrayBuffer(this.is224 ? 28 : 32),
                t = new DataView(e);
              return (
                t.setUint32(0, this.h0),
                t.setUint32(4, this.h1),
                t.setUint32(8, this.h2),
                t.setUint32(12, this.h3),
                t.setUint32(16, this.h4),
                t.setUint32(20, this.h5),
                t.setUint32(24, this.h6),
                this.is224 || t.setUint32(28, this.h7),
                e
              );
            }),
            (HmacSha256.prototype = new Sha256()),
            (HmacSha256.prototype.finalize = function() {
              if ((Sha256.prototype.finalize.call(this), this.inner)) {
                this.inner = !1;
                var e = this.array();
                Sha256.call(this, this.is224, this.sharedMemory),
                  this.update(this.oKeyPad),
                  this.update(e),
                  Sha256.prototype.finalize.call(this);
              }
            });
          var exports = createMethod();
          (exports.sha256 = exports),
            (exports.sha224 = createMethod(!0)),
            (exports.sha256.hmac = createHmacMethod()),
            (exports.sha224.hmac = createHmacMethod(!0)),
            COMMON_JS
              ? (module.exports = exports)
              : ((root.sha256 = exports.sha256),
                (root.sha224 = exports.sha224),
                AMD &&
                  ((__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return exports;
                  }.call(exports, __webpack_require__, exports, module)),
                  void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
                    (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
        })();
      }.call(
        this,
        __webpack_require__('../../node_modules/process/browser.js'),
        __webpack_require__('../../node_modules/webpack/buildin/global.js')
      ));
    },
    '../../node_modules/js-sha3/src/sha3.js': function(e, t, r) {
      (function(n, i) {
        var o;
        /**
         * [js-sha3]{@link https://github.com/emn178/js-sha3}
         *
         * @version 0.8.0
         * @author Chen, Yi-Cyuan [emn178@gmail.com]
         * @copyright Chen, Yi-Cyuan 2015-2018
         * @license MIT
         */ !(function() {
          'use strict';
          var s = 'input is invalid type',
            a = 'object' == typeof window,
            u = a ? window : {};
          u.JS_SHA3_NO_WINDOW && (a = !1);
          var c = !a && 'object' == typeof self;
          !u.JS_SHA3_NO_NODE_JS && 'object' == typeof n && n.versions && n.versions.node
            ? (u = i)
            : c && (u = self);
          var l = !u.JS_SHA3_NO_COMMON_JS && 'object' == typeof e && e.exports,
            d = r('../../node_modules/webpack/buildin/amd-options.js'),
            f = !u.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
            h = '0123456789abcdef'.split(''),
            p = [4, 1024, 262144, 67108864],
            b = [0, 8, 16, 24],
            m = [
              1,
              0,
              32898,
              0,
              32906,
              2147483648,
              2147516416,
              2147483648,
              32907,
              0,
              2147483649,
              0,
              2147516545,
              2147483648,
              32777,
              2147483648,
              138,
              0,
              136,
              0,
              2147516425,
              0,
              2147483658,
              0,
              2147516555,
              0,
              139,
              2147483648,
              32905,
              2147483648,
              32771,
              2147483648,
              32770,
              2147483648,
              128,
              2147483648,
              32778,
              0,
              2147483658,
              2147483648,
              2147516545,
              2147483648,
              32896,
              2147483648,
              2147483649,
              0,
              2147516424,
              2147483648
            ],
            g = [224, 256, 384, 512],
            y = [128, 256],
            v = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
            w = { 128: 168, 256: 136 };
          (!u.JS_SHA3_NO_NODE_JS && Array.isArray) ||
            (Array.isArray = function(e) {
              return '[object Array]' === Object.prototype.toString.call(e);
            }),
            !f ||
              (!u.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
              (ArrayBuffer.isView = function(e) {
                return (
                  'object' == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                );
              });
          for (
            var k = function(e, t, r) {
                return function(n) {
                  return new D(e, t, e).update(n)[r]();
                };
              },
              _ = function(e, t, r) {
                return function(n, i) {
                  return new D(e, t, i).update(n)[r]();
                };
              },
              S = function(e, t, r) {
                return function(t, n, i, o) {
                  return A['cshake' + e].update(t, n, i, o)[r]();
                };
              },
              j = function(e, t, r) {
                return function(t, n, i, o) {
                  return A['kmac' + e].update(t, n, i, o)[r]();
                };
              },
              E = function(e, t, r, n) {
                for (var i = 0; i < v.length; ++i) {
                  var o = v[i];
                  e[o] = t(r, n, o);
                }
                return e;
              },
              x = function(e, t) {
                var r = k(e, t, 'hex');
                return (
                  (r.create = function() {
                    return new D(e, t, e);
                  }),
                  (r.update = function(e) {
                    return r.create().update(e);
                  }),
                  E(r, k, e, t)
                );
              },
              O = [
                {
                  name: 'keccak',
                  padding: [1, 256, 65536, 16777216],
                  bits: g,
                  createMethod: x
                },
                {
                  name: 'sha3',
                  padding: [6, 1536, 393216, 100663296],
                  bits: g,
                  createMethod: x
                },
                {
                  name: 'shake',
                  padding: [31, 7936, 2031616, 520093696],
                  bits: y,
                  createMethod: function(e, t) {
                    var r = _(e, t, 'hex');
                    return (
                      (r.create = function(r) {
                        return new D(e, t, r);
                      }),
                      (r.update = function(e, t) {
                        return r.create(t).update(e);
                      }),
                      E(r, _, e, t)
                    );
                  }
                },
                {
                  name: 'cshake',
                  padding: p,
                  bits: y,
                  createMethod: function(e, t) {
                    var r = w[e],
                      n = S(e, 0, 'hex');
                    return (
                      (n.create = function(n, i, o) {
                        return i || o
                          ? new D(e, t, n).bytepad([i, o], r)
                          : A['shake' + e].create(n);
                      }),
                      (n.update = function(e, t, r, i) {
                        return n.create(t, r, i).update(e);
                      }),
                      E(n, S, e, t)
                    );
                  }
                },
                {
                  name: 'kmac',
                  padding: p,
                  bits: y,
                  createMethod: function(e, t) {
                    var r = w[e],
                      n = j(e, 0, 'hex');
                    return (
                      (n.create = function(n, i, o) {
                        return new F(e, t, i).bytepad(['KMAC', o], r).bytepad([n], r);
                      }),
                      (n.update = function(e, t, r, i) {
                        return n.create(e, r, i).update(t);
                      }),
                      E(n, j, e, t)
                    );
                  }
                }
              ],
              A = {},
              C = [],
              R = 0;
            R < O.length;
            ++R
          )
            for (var B = O[R], P = B.bits, N = 0; N < P.length; ++N) {
              var I = B.name + '_' + P[N];
              if (
                (C.push(I), (A[I] = B.createMethod(P[N], B.padding)), 'sha3' !== B.name)
              ) {
                var T = B.name + P[N];
                C.push(T), (A[T] = A[I]);
              }
            }
          function D(e, t, r) {
            (this.blocks = []),
              (this.s = []),
              (this.padding = t),
              (this.outputBits = r),
              (this.reset = !0),
              (this.finalized = !1),
              (this.block = 0),
              (this.start = 0),
              (this.blockCount = (1600 - (e << 1)) >> 5),
              (this.byteCount = this.blockCount << 2),
              (this.outputBlocks = r >> 5),
              (this.extraBytes = (31 & r) >> 3);
            for (var n = 0; n < 50; ++n) this.s[n] = 0;
          }
          function F(e, t, r) {
            D.call(this, e, t, r);
          }
          (D.prototype.update = function(e) {
            if (this.finalized) throw new Error('finalize already called');
            var t,
              r = typeof e;
            if ('string' !== r) {
              if ('object' !== r) throw new Error(s);
              if (null === e) throw new Error(s);
              if (f && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!(Array.isArray(e) || (f && ArrayBuffer.isView(e))))
                throw new Error(s);
              t = !0;
            }
            for (
              var n,
                i,
                o = this.blocks,
                a = this.byteCount,
                u = e.length,
                c = this.blockCount,
                l = 0,
                d = this.s;
              l < u;

            ) {
              if (this.reset)
                for (this.reset = !1, o[0] = this.block, n = 1; n < c + 1; ++n) o[n] = 0;
              if (t)
                for (n = this.start; l < u && n < a; ++l) o[n >> 2] |= e[l] << b[3 & n++];
              else
                for (n = this.start; l < u && n < a; ++l)
                  (i = e.charCodeAt(l)) < 128
                    ? (o[n >> 2] |= i << b[3 & n++])
                    : i < 2048
                    ? ((o[n >> 2] |= (192 | (i >> 6)) << b[3 & n++]),
                      (o[n >> 2] |= (128 | (63 & i)) << b[3 & n++]))
                    : i < 55296 || i >= 57344
                    ? ((o[n >> 2] |= (224 | (i >> 12)) << b[3 & n++]),
                      (o[n >> 2] |= (128 | ((i >> 6) & 63)) << b[3 & n++]),
                      (o[n >> 2] |= (128 | (63 & i)) << b[3 & n++]))
                    : ((i = 65536 + (((1023 & i) << 10) | (1023 & e.charCodeAt(++l)))),
                      (o[n >> 2] |= (240 | (i >> 18)) << b[3 & n++]),
                      (o[n >> 2] |= (128 | ((i >> 12) & 63)) << b[3 & n++]),
                      (o[n >> 2] |= (128 | ((i >> 6) & 63)) << b[3 & n++]),
                      (o[n >> 2] |= (128 | (63 & i)) << b[3 & n++]));
              if (((this.lastByteIndex = n), n >= a)) {
                for (this.start = n - a, this.block = o[c], n = 0; n < c; ++n)
                  d[n] ^= o[n];
                U(d), (this.reset = !0);
              } else this.start = n;
            }
            return this;
          }),
            (D.prototype.encode = function(e, t) {
              var r = 255 & e,
                n = 1,
                i = [r];
              for (r = 255 & (e >>= 8); r > 0; ) i.unshift(r), (r = 255 & (e >>= 8)), ++n;
              return t ? i.push(n) : i.unshift(n), this.update(i), i.length;
            }),
            (D.prototype.encodeString = function(e) {
              var t,
                r = typeof e;
              if ('string' !== r) {
                if ('object' !== r) throw new Error(s);
                if (null === e) throw new Error(s);
                if (f && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!(Array.isArray(e) || (f && ArrayBuffer.isView(e))))
                  throw new Error(s);
                t = !0;
              }
              var n = 0,
                i = e.length;
              if (t) n = i;
              else
                for (var o = 0; o < e.length; ++o) {
                  var a = e.charCodeAt(o);
                  a < 128
                    ? (n += 1)
                    : a < 2048
                    ? (n += 2)
                    : a < 55296 || a >= 57344
                    ? (n += 3)
                    : ((a = 65536 + (((1023 & a) << 10) | (1023 & e.charCodeAt(++o)))),
                      (n += 4));
                }
              return (n += this.encode(8 * n)), this.update(e), n;
            }),
            (D.prototype.bytepad = function(e, t) {
              for (var r = this.encode(t), n = 0; n < e.length; ++n)
                r += this.encodeString(e[n]);
              var i = t - (r % t),
                o = [];
              return (o.length = i), this.update(o), this;
            }),
            (D.prototype.finalize = function() {
              if (!this.finalized) {
                this.finalized = !0;
                var e = this.blocks,
                  t = this.lastByteIndex,
                  r = this.blockCount,
                  n = this.s;
                if (
                  ((e[t >> 2] |= this.padding[3 & t]),
                  this.lastByteIndex === this.byteCount)
                )
                  for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
                for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                U(n);
              }
            }),
            (D.prototype.toString = D.prototype.hex = function() {
              this.finalize();
              for (
                var e,
                  t = this.blockCount,
                  r = this.s,
                  n = this.outputBlocks,
                  i = this.extraBytes,
                  o = 0,
                  s = 0,
                  a = '';
                s < n;

              ) {
                for (o = 0; o < t && s < n; ++o, ++s)
                  (e = r[o]),
                    (a +=
                      h[(e >> 4) & 15] +
                      h[15 & e] +
                      h[(e >> 12) & 15] +
                      h[(e >> 8) & 15] +
                      h[(e >> 20) & 15] +
                      h[(e >> 16) & 15] +
                      h[(e >> 28) & 15] +
                      h[(e >> 24) & 15]);
                s % t == 0 && (U(r), (o = 0));
              }
              return (
                i &&
                  ((e = r[o]),
                  (a += h[(e >> 4) & 15] + h[15 & e]),
                  i > 1 && (a += h[(e >> 12) & 15] + h[(e >> 8) & 15]),
                  i > 2 && (a += h[(e >> 20) & 15] + h[(e >> 16) & 15])),
                a
              );
            }),
            (D.prototype.arrayBuffer = function() {
              this.finalize();
              var e,
                t = this.blockCount,
                r = this.s,
                n = this.outputBlocks,
                i = this.extraBytes,
                o = 0,
                s = 0,
                a = this.outputBits >> 3;
              e = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a);
              for (var u = new Uint32Array(e); s < n; ) {
                for (o = 0; o < t && s < n; ++o, ++s) u[s] = r[o];
                s % t == 0 && U(r);
              }
              return i && ((u[o] = r[o]), (e = e.slice(0, a))), e;
            }),
            (D.prototype.buffer = D.prototype.arrayBuffer),
            (D.prototype.digest = D.prototype.array = function() {
              this.finalize();
              for (
                var e,
                  t,
                  r = this.blockCount,
                  n = this.s,
                  i = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  a = 0,
                  u = [];
                a < i;

              ) {
                for (s = 0; s < r && a < i; ++s, ++a)
                  (e = a << 2),
                    (t = n[s]),
                    (u[e] = 255 & t),
                    (u[e + 1] = (t >> 8) & 255),
                    (u[e + 2] = (t >> 16) & 255),
                    (u[e + 3] = (t >> 24) & 255);
                a % r == 0 && U(n);
              }
              return (
                o &&
                  ((e = a << 2),
                  (t = n[s]),
                  (u[e] = 255 & t),
                  o > 1 && (u[e + 1] = (t >> 8) & 255),
                  o > 2 && (u[e + 2] = (t >> 16) & 255)),
                u
              );
            }),
            (F.prototype = new D()),
            (F.prototype.finalize = function() {
              return this.encode(this.outputBits, !0), D.prototype.finalize.call(this);
            });
          var U = function(e) {
            var t,
              r,
              n,
              i,
              o,
              s,
              a,
              u,
              c,
              l,
              d,
              f,
              h,
              p,
              b,
              g,
              y,
              v,
              w,
              k,
              _,
              S,
              j,
              E,
              x,
              O,
              A,
              C,
              R,
              B,
              P,
              N,
              I,
              T,
              D,
              F,
              U,
              L,
              M,
              K,
              H,
              W,
              V,
              z,
              G,
              J,
              q,
              Y,
              X,
              Z,
              Q,
              $,
              ee,
              te,
              re,
              ne,
              ie,
              oe,
              se,
              ae,
              ue,
              ce,
              le;
            for (n = 0; n < 48; n += 2)
              (i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
                (o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
                (s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
                (a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
                (u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
                (c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
                (l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
                (d = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
                (t =
                  (f = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ ((s << 1) | (a >>> 31))),
                (r =
                  (h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ ((a << 1) | (s >>> 31))),
                (e[0] ^= t),
                (e[1] ^= r),
                (e[10] ^= t),
                (e[11] ^= r),
                (e[20] ^= t),
                (e[21] ^= r),
                (e[30] ^= t),
                (e[31] ^= r),
                (e[40] ^= t),
                (e[41] ^= r),
                (t = i ^ ((u << 1) | (c >>> 31))),
                (r = o ^ ((c << 1) | (u >>> 31))),
                (e[2] ^= t),
                (e[3] ^= r),
                (e[12] ^= t),
                (e[13] ^= r),
                (e[22] ^= t),
                (e[23] ^= r),
                (e[32] ^= t),
                (e[33] ^= r),
                (e[42] ^= t),
                (e[43] ^= r),
                (t = s ^ ((l << 1) | (d >>> 31))),
                (r = a ^ ((d << 1) | (l >>> 31))),
                (e[4] ^= t),
                (e[5] ^= r),
                (e[14] ^= t),
                (e[15] ^= r),
                (e[24] ^= t),
                (e[25] ^= r),
                (e[34] ^= t),
                (e[35] ^= r),
                (e[44] ^= t),
                (e[45] ^= r),
                (t = u ^ ((f << 1) | (h >>> 31))),
                (r = c ^ ((h << 1) | (f >>> 31))),
                (e[6] ^= t),
                (e[7] ^= r),
                (e[16] ^= t),
                (e[17] ^= r),
                (e[26] ^= t),
                (e[27] ^= r),
                (e[36] ^= t),
                (e[37] ^= r),
                (e[46] ^= t),
                (e[47] ^= r),
                (t = l ^ ((i << 1) | (o >>> 31))),
                (r = d ^ ((o << 1) | (i >>> 31))),
                (e[8] ^= t),
                (e[9] ^= r),
                (e[18] ^= t),
                (e[19] ^= r),
                (e[28] ^= t),
                (e[29] ^= r),
                (e[38] ^= t),
                (e[39] ^= r),
                (e[48] ^= t),
                (e[49] ^= r),
                (p = e[0]),
                (b = e[1]),
                (J = (e[11] << 4) | (e[10] >>> 28)),
                (q = (e[10] << 4) | (e[11] >>> 28)),
                (C = (e[20] << 3) | (e[21] >>> 29)),
                (R = (e[21] << 3) | (e[20] >>> 29)),
                (ae = (e[31] << 9) | (e[30] >>> 23)),
                (ue = (e[30] << 9) | (e[31] >>> 23)),
                (W = (e[40] << 18) | (e[41] >>> 14)),
                (V = (e[41] << 18) | (e[40] >>> 14)),
                (T = (e[2] << 1) | (e[3] >>> 31)),
                (D = (e[3] << 1) | (e[2] >>> 31)),
                (g = (e[13] << 12) | (e[12] >>> 20)),
                (y = (e[12] << 12) | (e[13] >>> 20)),
                (Y = (e[22] << 10) | (e[23] >>> 22)),
                (X = (e[23] << 10) | (e[22] >>> 22)),
                (B = (e[33] << 13) | (e[32] >>> 19)),
                (P = (e[32] << 13) | (e[33] >>> 19)),
                (ce = (e[42] << 2) | (e[43] >>> 30)),
                (le = (e[43] << 2) | (e[42] >>> 30)),
                (te = (e[5] << 30) | (e[4] >>> 2)),
                (re = (e[4] << 30) | (e[5] >>> 2)),
                (F = (e[14] << 6) | (e[15] >>> 26)),
                (U = (e[15] << 6) | (e[14] >>> 26)),
                (v = (e[25] << 11) | (e[24] >>> 21)),
                (w = (e[24] << 11) | (e[25] >>> 21)),
                (Z = (e[34] << 15) | (e[35] >>> 17)),
                (Q = (e[35] << 15) | (e[34] >>> 17)),
                (N = (e[45] << 29) | (e[44] >>> 3)),
                (I = (e[44] << 29) | (e[45] >>> 3)),
                (E = (e[6] << 28) | (e[7] >>> 4)),
                (x = (e[7] << 28) | (e[6] >>> 4)),
                (ne = (e[17] << 23) | (e[16] >>> 9)),
                (ie = (e[16] << 23) | (e[17] >>> 9)),
                (L = (e[26] << 25) | (e[27] >>> 7)),
                (M = (e[27] << 25) | (e[26] >>> 7)),
                (k = (e[36] << 21) | (e[37] >>> 11)),
                (_ = (e[37] << 21) | (e[36] >>> 11)),
                ($ = (e[47] << 24) | (e[46] >>> 8)),
                (ee = (e[46] << 24) | (e[47] >>> 8)),
                (z = (e[8] << 27) | (e[9] >>> 5)),
                (G = (e[9] << 27) | (e[8] >>> 5)),
                (O = (e[18] << 20) | (e[19] >>> 12)),
                (A = (e[19] << 20) | (e[18] >>> 12)),
                (oe = (e[29] << 7) | (e[28] >>> 25)),
                (se = (e[28] << 7) | (e[29] >>> 25)),
                (K = (e[38] << 8) | (e[39] >>> 24)),
                (H = (e[39] << 8) | (e[38] >>> 24)),
                (S = (e[48] << 14) | (e[49] >>> 18)),
                (j = (e[49] << 14) | (e[48] >>> 18)),
                (e[0] = p ^ (~g & v)),
                (e[1] = b ^ (~y & w)),
                (e[10] = E ^ (~O & C)),
                (e[11] = x ^ (~A & R)),
                (e[20] = T ^ (~F & L)),
                (e[21] = D ^ (~U & M)),
                (e[30] = z ^ (~J & Y)),
                (e[31] = G ^ (~q & X)),
                (e[40] = te ^ (~ne & oe)),
                (e[41] = re ^ (~ie & se)),
                (e[2] = g ^ (~v & k)),
                (e[3] = y ^ (~w & _)),
                (e[12] = O ^ (~C & B)),
                (e[13] = A ^ (~R & P)),
                (e[22] = F ^ (~L & K)),
                (e[23] = U ^ (~M & H)),
                (e[32] = J ^ (~Y & Z)),
                (e[33] = q ^ (~X & Q)),
                (e[42] = ne ^ (~oe & ae)),
                (e[43] = ie ^ (~se & ue)),
                (e[4] = v ^ (~k & S)),
                (e[5] = w ^ (~_ & j)),
                (e[14] = C ^ (~B & N)),
                (e[15] = R ^ (~P & I)),
                (e[24] = L ^ (~K & W)),
                (e[25] = M ^ (~H & V)),
                (e[34] = Y ^ (~Z & $)),
                (e[35] = X ^ (~Q & ee)),
                (e[44] = oe ^ (~ae & ce)),
                (e[45] = se ^ (~ue & le)),
                (e[6] = k ^ (~S & p)),
                (e[7] = _ ^ (~j & b)),
                (e[16] = B ^ (~N & E)),
                (e[17] = P ^ (~I & x)),
                (e[26] = K ^ (~W & T)),
                (e[27] = H ^ (~V & D)),
                (e[36] = Z ^ (~$ & z)),
                (e[37] = Q ^ (~ee & G)),
                (e[46] = ae ^ (~ce & te)),
                (e[47] = ue ^ (~le & re)),
                (e[8] = S ^ (~p & g)),
                (e[9] = j ^ (~b & y)),
                (e[18] = N ^ (~E & O)),
                (e[19] = I ^ (~x & A)),
                (e[28] = W ^ (~T & F)),
                (e[29] = V ^ (~D & U)),
                (e[38] = $ ^ (~z & J)),
                (e[39] = ee ^ (~G & q)),
                (e[48] = ce ^ (~te & ne)),
                (e[49] = le ^ (~re & ie)),
                (e[0] ^= m[n]),
                (e[1] ^= m[n + 1]);
          };
          if (l) e.exports = A;
          else {
            for (R = 0; R < C.length; ++R) u[C[R]] = A[C[R]];
            d &&
              (void 0 ===
                (o = function() {
                  return A;
                }.call(t, r, t, e)) ||
                (e.exports = o));
          }
        })();
      }.call(
        this,
        r('../../node_modules/process/browser.js'),
        r('../../node_modules/webpack/buildin/global.js')
      ));
    },
    '../../node_modules/json-stringify-deterministic/lib/defaults.js': function(e, t) {
      e.exports = {
        space: '',
        cycles: !1,
        replacer: (e, t) => t,
        stringify: JSON.stringify
      };
    },
    '../../node_modules/json-stringify-deterministic/lib/index.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/json-stringify-deterministic/lib/defaults.js'),
        i = r('../../node_modules/json-stringify-deterministic/lib/util.js').isFunction,
        o = r('../../node_modules/json-stringify-deterministic/lib/util.js').isBoolean,
        s = r('../../node_modules/json-stringify-deterministic/lib/util.js').isObject,
        a = r('../../node_modules/json-stringify-deterministic/lib/util.js').isArray,
        u = r('../../node_modules/json-stringify-deterministic/lib/util.js').isRegex,
        c = r('../../node_modules/json-stringify-deterministic/lib/util.js').assign,
        l = r('../../node_modules/json-stringify-deterministic/lib/util.js').keys;
      e.exports = function(e, t) {
        (t = t || c({}, n)), i(t) && (t = { compare: t });
        const r = t.space || n.space,
          d = o(t.cycles) ? t.cycles : n.cycles,
          f = t.replacer || n.replacer,
          h = t.stringify || n.stringify,
          p =
            t.compare &&
            ((b = t.compare),
            function(e) {
              return function(t, r) {
                const n = { key: t, value: e[t] },
                  i = { key: r, value: e[r] };
                return b(n, i);
              };
            });
        var b;
        d || h(e);
        const m = [];
        return (function e(t, n, i, o) {
          const c = r ? '\n' + new Array(o + 1).join(r) : '',
            b = r ? ': ' : ':';
          if (
            ((i = (function(e) {
              return null == e ? e : u(e) ? e.toString() : e.toJSON ? e.toJSON() : e;
            })(i)),
            void 0 !== (i = f.call(t, n, i)))
          ) {
            if (!s(i) || null === i) return h(i);
            if (a(i)) {
              const t = [];
              for (let n = 0; n < i.length; n++) {
                const s = e(i, n, i[n], o + 1) || h(null);
                t.push(c + r + s);
              }
              return '[' + t.join(',') + c + ']';
            }
            {
              if (d) {
                if (-1 !== m.indexOf(i)) return h('[Circular]');
                m.push(i);
              }
              const t = l(i).sort(p && p(i)),
                n = [];
              for (let s = 0; s < t.length; s++) {
                const a = t[s],
                  u = e(i, a, i[a], o + 1);
                if (!u) continue;
                const l = h(a) + b + u;
                n.push(c + r + l);
              }
              return m.splice(m.indexOf(i), 1), '{' + n.join(',') + c + '}';
            }
          }
        })({ '': e }, '', e, 0);
      };
    },
    '../../node_modules/json-stringify-deterministic/lib/util.js': function(e, t, r) {
      'use strict';
      e.exports = {
        isArray: Array.isArray,
        assign: Object.assign,
        isObject: e => 'object' == typeof e,
        isFunction: e => 'function' == typeof e,
        isBoolean: e => 'boolean' == typeof e,
        isRegex: e => e instanceof RegExp,
        keys: Object.keys
      };
    },
    '../../node_modules/lodash/_assignMergeValue.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/_baseAssignValue.js'),
        i = r('../../node_modules/lodash/eq.js');
      e.exports = function(e, t, r) {
        ((void 0 !== r && !i(e[t], r)) || (void 0 === r && !(t in e))) && n(e, t, r);
      };
    },
    '../../node_modules/lodash/_baseMerge.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/_Stack.js'),
        i = r('../../node_modules/lodash/_assignMergeValue.js'),
        o = r('../../node_modules/lodash/_baseFor.js'),
        s = r('../../node_modules/lodash/_baseMergeDeep.js'),
        a = r('../../node_modules/lodash/isObject.js'),
        u = r('../../node_modules/lodash/keysIn.js'),
        c = r('../../node_modules/lodash/_safeGet.js');
      e.exports = function e(t, r, l, d, f) {
        t !== r &&
          o(
            r,
            function(o, u) {
              if ((f || (f = new n()), a(o))) s(t, r, u, l, e, d, f);
              else {
                var h = d ? d(c(t, u), o, u + '', t, r, f) : void 0;
                void 0 === h && (h = o), i(t, u, h);
              }
            },
            u
          );
      };
    },
    '../../node_modules/lodash/_baseMergeDeep.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/_assignMergeValue.js'),
        i = r('../../node_modules/lodash/_cloneBuffer.js'),
        o = r('../../node_modules/lodash/_cloneTypedArray.js'),
        s = r('../../node_modules/lodash/_copyArray.js'),
        a = r('../../node_modules/lodash/_initCloneObject.js'),
        u = r('../../node_modules/lodash/isArguments.js'),
        c = r('../../node_modules/lodash/isArray.js'),
        l = r('../../node_modules/lodash/isArrayLikeObject.js'),
        d = r('../../node_modules/lodash/isBuffer.js'),
        f = r('../../node_modules/lodash/isFunction.js'),
        h = r('../../node_modules/lodash/isObject.js'),
        p = r('../../node_modules/lodash/isPlainObject.js'),
        b = r('../../node_modules/lodash/isTypedArray.js'),
        m = r('../../node_modules/lodash/_safeGet.js'),
        g = r('../../node_modules/lodash/toPlainObject.js');
      e.exports = function(e, t, r, y, v, w, k) {
        var _ = m(e, r),
          S = m(t, r),
          j = k.get(S);
        if (j) n(e, r, j);
        else {
          var E = w ? w(_, S, r + '', e, t, k) : void 0,
            x = void 0 === E;
          if (x) {
            var O = c(S),
              A = !O && d(S),
              C = !O && !A && b(S);
            (E = S),
              O || A || C
                ? c(_)
                  ? (E = _)
                  : l(_)
                  ? (E = s(_))
                  : A
                  ? ((x = !1), (E = i(S, !0)))
                  : C
                  ? ((x = !1), (E = o(S, !0)))
                  : (E = [])
                : p(S) || u(S)
                ? ((E = _), u(_) ? (E = g(_)) : (h(_) && !f(_)) || (E = a(S)))
                : (x = !1);
          }
          x && (k.set(S, E), v(E, S, y, w, k), k.delete(S)), n(e, r, E);
        }
      };
    },
    '../../node_modules/lodash/_baseRest.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/identity.js'),
        i = r('../../node_modules/lodash/_overRest.js'),
        o = r('../../node_modules/lodash/_setToString.js');
      e.exports = function(e, t) {
        return o(i(e, t, n), e + '');
      };
    },
    '../../node_modules/lodash/_createAssigner.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/_baseRest.js'),
        i = r('../../node_modules/lodash/_isIterateeCall.js');
      e.exports = function(e) {
        return n(function(t, r) {
          var n = -1,
            o = r.length,
            s = o > 1 ? r[o - 1] : void 0,
            a = o > 2 ? r[2] : void 0;
          for (
            s = e.length > 3 && 'function' == typeof s ? (o--, s) : void 0,
              a && i(r[0], r[1], a) && ((s = o < 3 ? void 0 : s), (o = 1)),
              t = Object(t);
            ++n < o;

          ) {
            var u = r[n];
            u && e(t, u, n, s);
          }
          return t;
        });
      };
    },
    '../../node_modules/lodash/_isIterateeCall.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/eq.js'),
        i = r('../../node_modules/lodash/isArrayLike.js'),
        o = r('../../node_modules/lodash/_isIndex.js'),
        s = r('../../node_modules/lodash/isObject.js');
      e.exports = function(e, t, r) {
        if (!s(r)) return !1;
        var a = typeof t;
        return (
          !!('number' == a ? i(r) && o(t, r.length) : 'string' == a && t in r) &&
          n(r[t], e)
        );
      };
    },
    '../../node_modules/lodash/_safeGet.js': function(e, t) {
      e.exports = function(e, t) {
        if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t)
          return e[t];
      };
    },
    '../../node_modules/lodash/isArrayLikeObject.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/isArrayLike.js'),
        i = r('../../node_modules/lodash/isObjectLike.js');
      e.exports = function(e) {
        return i(e) && n(e);
      };
    },
    '../../node_modules/lodash/mapValues.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/_baseAssignValue.js'),
        i = r('../../node_modules/lodash/_baseForOwn.js'),
        o = r('../../node_modules/lodash/_baseIteratee.js');
      e.exports = function(e, t) {
        var r = {};
        return (
          (t = o(t, 3)),
          i(e, function(e, i, o) {
            n(r, i, t(e, i, o));
          }),
          r
        );
      };
    },
    '../../node_modules/lodash/merge.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/_baseMerge.js'),
        i = r('../../node_modules/lodash/_createAssigner.js')(function(e, t, r) {
          n(e, t, r);
        });
      e.exports = i;
    },
    '../../node_modules/lodash/toPlainObject.js': function(e, t, r) {
      var n = r('../../node_modules/lodash/_copyObject.js'),
        i = r('../../node_modules/lodash/keysIn.js');
      e.exports = function(e) {
        return n(e, i(e));
      };
    },
    '../../node_modules/multibase/src/base.js': function(e, t, r) {
      'use strict';
      e.exports = class {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.code = t),
            (this.alphabet = n),
            r && n && (this.engine = r(n));
        }
        encode(e) {
          return this.engine.encode(e);
        }
        decode(e) {
          return this.engine.decode(e);
        }
        isImplemented() {
          return this.engine;
        }
      };
    },
    '../../node_modules/multibase/src/base16.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
        '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
      );
      e.exports = function(e) {
        return {
          encode: e =>
            'string' == typeof e ? n.from(e).toString('hex') : e.toString('hex'),
          decode(t) {
            for (const r of t)
              if (e.indexOf(r) < 0) throw new Error('invalid base16 character');
            return n.from(t, 'hex');
          }
        };
      };
    },
    '../../node_modules/multibase/src/base32.js': function(e, t, r) {
      'use strict';
      function n(e, t) {
        const r = e.byteLength,
          n = new Uint8Array(e),
          i = t.indexOf('=') === t.length - 1;
        i && (t = t.substring(0, t.length - 1));
        let o = 0,
          s = 0,
          a = '';
        for (let e = 0; e < r; e++)
          for (s = (s << 8) | n[e], o += 8; o >= 5; )
            (a += t[(s >>> (o - 5)) & 31]), (o -= 5);
        if ((o > 0 && (a += t[(s << (5 - o)) & 31]), i))
          for (; a.length % 8 != 0; ) a += '=';
        return a;
      }
      e.exports = function(e) {
        return {
          encode: t => n('string' == typeof t ? Uint8Array.from(t) : t, e),
          decode(t) {
            for (const r of t)
              if (e.indexOf(r) < 0) throw new Error('invalid base32 character');
            return (function(e, t) {
              const r = (e = e.replace(new RegExp('=', 'g'), '')).length;
              let n = 0,
                i = 0,
                o = 0;
              const s = new Uint8Array(((5 * r) / 8) | 0);
              for (let a = 0; a < r; a++)
                (i = (i << 5) | t.indexOf(e[a])),
                  (n += 5),
                  n >= 8 && ((s[o++] = (i >>> (n - 8)) & 255), (n -= 8));
              return s.buffer;
            })(t, e);
          }
        };
      };
    },
    '../../node_modules/multibase/src/base64.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
        '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
      );
      e.exports = function(e) {
        const t = e.indexOf('=') > -1,
          r = e.indexOf('-') > -1 && e.indexOf('_') > -1;
        return {
          encode(e) {
            let i = '';
            (i =
              'string' == typeof e ? n.from(e).toString('base64') : e.toString('base64')),
              r && (i = i.replace(/\+/g, '-').replace(/\//g, '_'));
            const o = i.indexOf('=');
            return o > 0 && !t && (i = i.substring(0, o)), i;
          },
          decode(t) {
            for (const r of t)
              if (e.indexOf(r) < 0) throw new Error('invalid base64 character');
            return n.from(t, 'base64');
          }
        };
      };
    },
    '../../node_modules/multibase/src/constants.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/multibase/src/base.js'),
        i = r('../../node_modules/base-x/src/index.js'),
        o = r('../../node_modules/multibase/src/base16.js'),
        s = r('../../node_modules/multibase/src/base32.js'),
        a = r('../../node_modules/multibase/src/base64.js'),
        u = [
          ['base1', '1', '', '1'],
          ['base2', '0', i, '01'],
          ['base8', '7', i, '01234567'],
          ['base10', '9', i, '0123456789'],
          ['base16', 'f', o, '0123456789abcdef'],
          ['base32', 'b', s, 'abcdefghijklmnopqrstuvwxyz234567'],
          ['base32pad', 'c', s, 'abcdefghijklmnopqrstuvwxyz234567='],
          ['base32hex', 'v', s, '0123456789abcdefghijklmnopqrstuv'],
          ['base32hexpad', 't', s, '0123456789abcdefghijklmnopqrstuv='],
          ['base32z', 'h', s, 'ybndrfg8ejkmcpqxot1uwisza345h769'],
          [
            'base58flickr',
            'Z',
            i,
            '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
          ],
          [
            'base58btc',
            'z',
            i,
            '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
          ],
          [
            'base64',
            'm',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
          ],
          [
            'base64pad',
            'M',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
          ],
          [
            'base64url',
            'u',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
          ],
          [
            'base64urlpad',
            'U',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_='
          ]
        ],
        c = u.reduce((e, t) => ((e[t[0]] = new n(t[0], t[1], t[2], t[3])), e), {}),
        l = u.reduce((e, t) => ((e[t[1]] = c[t[0]]), e), {});
      e.exports = { names: c, codes: l };
    },
    '../../node_modules/multibase/src/index.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        ),
        i = r('../../node_modules/multibase/src/constants.js');
      ((t = e.exports = s).encode = function(e, t) {
        const r = a(e);
        return s(r.name, n.from(r.encode(t)));
      }),
        (t.decode = function(e) {
          n.isBuffer(e) && (e = e.toString());
          const t = e.substring(0, 1);
          'string' == typeof (e = e.substring(1, e.length)) && (e = n.from(e));
          const r = a(t);
          return n.from(r.decode(e.toString()));
        }),
        (t.isEncoded = function(e) {
          n.isBuffer(e) && (e = e.toString());
          if ('[object String]' !== Object.prototype.toString.call(e)) return !1;
          const t = e.substring(0, 1);
          try {
            return a(t).name;
          } catch (e) {
            return !1;
          }
        }),
        (t.names = Object.freeze(Object.keys(i.names))),
        (t.codes = Object.freeze(Object.keys(i.codes)));
      const o = new Error('Unsupported encoding');
      function s(e, t) {
        if (!t) throw new Error('requires an encoded buffer');
        const r = a(e),
          i = n.from(r.code);
        return (
          (function(e, t) {
            a(e).decode(t.toString());
          })(r.name, t),
          n.concat([i, t])
        );
      }
      function a(e) {
        let t;
        if (i.names[e]) t = i.names[e];
        else {
          if (!i.codes[e]) throw o;
          t = i.codes[e];
        }
        if (!t.isImplemented()) throw new Error('Base ' + e + ' is not implemented yet');
        return t;
      }
    },
    '../../node_modules/multicodec/src/base-table.json': function(e) {
      e.exports = JSON.parse(
        '{"identity":0,"ip4":4,"tcp":6,"sha1":17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,"dccp":33,"murmur3-128":34,"murmur3-32":35,"ip6":41,"ip6zone":42,"path":47,"multicodec":48,"multihash":49,"multiaddr":50,"multibase":51,"dns":53,"dns4":54,"dns6":55,"dnsaddr":56,"protobuf":80,"cbor":81,"raw":85,"dbl-sha2-256":86,"rlp":96,"bencode":99,"dag-pb":112,"dag-cbor":113,"libp2p-key":114,"git-raw":120,"torrent-info":123,"torrent-file":124,"leofcoin-block":129,"leofcoin-tx":130,"leofcoin-pr":131,"sctp":132,"eth-block":144,"eth-block-list":145,"eth-tx-trie":146,"eth-tx":147,"eth-tx-receipt-trie":148,"eth-tx-receipt":149,"eth-state-trie":150,"eth-account-snapshot":151,"eth-storage-trie":152,"bitcoin-block":176,"bitcoin-tx":177,"zcash-block":192,"zcash-tx":193,"stellar-block":208,"stellar-tx":209,"md4":212,"md5":213,"bmt":214,"decred-block":224,"decred-tx":225,"ipld-ns":226,"ipfs-ns":227,"swarm-ns":228,"ipns-ns":229,"zeronet":230,"ed25519-pub":237,"dash-block":240,"dash-tx":241,"swarm-manifest":250,"swarm-feed":251,"udp":273,"p2p-webrtc-star":275,"p2p-webrtc-direct":276,"p2p-stardust":277,"p2p-circuit":290,"dag-json":297,"udt":301,"utp":302,"unix":400,"p2p":421,"ipfs":421,"https":443,"onion":444,"onion3":445,"garlic64":446,"garlic32":447,"tls":448,"quic":460,"ws":477,"wss":478,"p2p-websocket-star":479,"http":480,"json":512,"messagepack":513,"x11":4352,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46000,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"holochain-adr-v0":8417572,"holochain-adr-v1":8483108,"holochain-key-v0":9728292,"holochain-key-v1":9793828,"holochain-sig-v0":10645796,"holochain-sig-v1":10711332}'
      );
    },
    '../../node_modules/multicodec/src/constants.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/multicodec/src/base-table.json'),
        i = {};
      for (const [e, t] of Object.entries(n)) i[e.toUpperCase().replace(/-/g, '_')] = t;
      e.exports = Object.freeze(i);
    },
    '../../node_modules/multicodec/src/index.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        ),
        i = r('../../node_modules/varint/index.js'),
        o = r('../../node_modules/multicodec/src/int-table.js'),
        s = r('../../node_modules/multicodec/src/varint-table.js'),
        a = r('../../node_modules/multicodec/src/util.js');
      ((t = e.exports).addPrefix = (e, t) => {
        let r;
        if (n.isBuffer(e)) r = a.varintBufferEncode(e);
        else {
          if (!s[e]) throw new Error('multicodec not recognized');
          r = s[e];
        }
        return n.concat([r, t]);
      }),
        (t.rmPrefix = e => (i.decode(e), e.slice(i.decode.bytes))),
        (t.getCodec = e => {
          const t = i.decode(e),
            r = o.get(t);
          if (void 0 === r) throw new Error(`Code ${t} not found`);
          return r;
        }),
        (t.getName = e => o.get(e)),
        (t.getNumber = e => {
          const t = s[e];
          if (void 0 === t) throw new Error('Codec `' + e + '` not found');
          return a.varintBufferDecode(t)[0];
        }),
        (t.getCode = e => i.decode(e)),
        (t.getCodeVarint = e => {
          const t = s[e];
          if (void 0 === t) throw new Error('Codec `' + e + '` not found');
          return t;
        }),
        (t.getVarint = e => i.encode(e));
      const u = r('../../node_modules/multicodec/src/constants.js');
      Object.assign(t, u), (t.print = r('../../node_modules/multicodec/src/print.js'));
    },
    '../../node_modules/multicodec/src/int-table.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/multicodec/src/base-table.json'),
        i = new Map();
      for (const e in n) {
        const t = n[e];
        i.set(t, e);
      }
      e.exports = Object.freeze(i);
    },
    '../../node_modules/multicodec/src/print.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/multicodec/src/base-table.json'),
        i = {};
      for (const [e, t] of Object.entries(n)) void 0 === i[t] && (i[t] = e);
      e.exports = Object.freeze(i);
    },
    '../../node_modules/multicodec/src/util.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/varint/index.js'),
        { Buffer: i } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        );
      function o(e) {
        return parseInt(e.toString('hex'), 16);
      }
      function s(e) {
        let t = e.toString(16);
        return t.length % 2 == 1 && (t = '0' + t), i.from(t, 'hex');
      }
      e.exports = {
        numberToBuffer: s,
        bufferToNumber: o,
        varintBufferEncode: function(e) {
          return i.from(n.encode(o(e)));
        },
        varintBufferDecode: function(e) {
          return s(n.decode(e));
        },
        varintEncode: function(e) {
          return i.from(n.encode(e));
        }
      };
    },
    '../../node_modules/multicodec/src/varint-table.js': function(e, t, r) {
      'use strict';
      const n = r('../../node_modules/multicodec/src/base-table.json'),
        i = r('../../node_modules/multicodec/src/util.js').varintEncode,
        o = {};
      for (const e in n) {
        const t = n[e];
        o[e] = i(t);
      }
      e.exports = Object.freeze(o);
    },
    '../../node_modules/multihashes/node_modules/multibase/src/base.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      e.exports = class {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.code = t),
            (this.alphabet = n),
            r && n && (this.engine = r(n));
        }
        encode(e) {
          return this.engine.encode(e);
        }
        decode(e) {
          return this.engine.decode(e);
        }
        isImplemented() {
          return this.engine;
        }
      };
    },
    '../../node_modules/multihashes/node_modules/multibase/src/base16.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      const { Buffer: n } = r(
        '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
      );
      e.exports = function(e) {
        return {
          encode: e =>
            'string' == typeof e ? n.from(e).toString('hex') : e.toString('hex'),
          decode(t) {
            for (const r of t)
              if (e.indexOf(r) < 0) throw new Error('invalid base16 character');
            return n.from(t, 'hex');
          }
        };
      };
    },
    '../../node_modules/multihashes/node_modules/multibase/src/base32.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      function n(e, t) {
        const r = e.byteLength,
          n = new Uint8Array(e),
          i = t.indexOf('=') === t.length - 1;
        i && (t = t.substring(0, t.length - 1));
        let o = 0,
          s = 0,
          a = '';
        for (let e = 0; e < r; e++)
          for (s = (s << 8) | n[e], o += 8; o >= 5; )
            (a += t[(s >>> (o - 5)) & 31]), (o -= 5);
        if ((o > 0 && (a += t[(s << (5 - o)) & 31]), i))
          for (; a.length % 8 != 0; ) a += '=';
        return a;
      }
      e.exports = function(e) {
        return {
          encode: t => n('string' == typeof t ? Uint8Array.from(t) : t, e),
          decode(t) {
            for (const r of t)
              if (e.indexOf(r) < 0) throw new Error('invalid base32 character');
            return (function(e, t) {
              const r = (e = e.replace(new RegExp('=', 'g'), '')).length;
              let n = 0,
                i = 0,
                o = 0;
              const s = new Uint8Array(((5 * r) / 8) | 0);
              for (let a = 0; a < r; a++)
                (i = (i << 5) | t.indexOf(e[a])),
                  (n += 5),
                  n >= 8 && ((s[o++] = (i >>> (n - 8)) & 255), (n -= 8));
              return s.buffer;
            })(t, e);
          }
        };
      };
    },
    '../../node_modules/multihashes/node_modules/multibase/src/base64.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      const { Buffer: n } = r(
        '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
      );
      e.exports = function(e) {
        const t = e.indexOf('=') > -1,
          r = e.indexOf('-') > -1 && e.indexOf('_') > -1;
        return {
          encode(e) {
            let i = '';
            (i =
              'string' == typeof e ? n.from(e).toString('base64') : e.toString('base64')),
              r && (i = i.replace(/\+/g, '-').replace(/\//g, '_'));
            const o = i.indexOf('=');
            return o > 0 && !t && (i = i.substring(0, o)), i;
          },
          decode(t) {
            for (const r of t)
              if (e.indexOf(r) < 0) throw new Error('invalid base64 character');
            return n.from(t, 'base64');
          }
        };
      };
    },
    '../../node_modules/multihashes/node_modules/multibase/src/constants.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      const n = r('../../node_modules/multihashes/node_modules/multibase/src/base.js'),
        i = r('../../node_modules/base-x/src/index.js'),
        o = r('../../node_modules/multihashes/node_modules/multibase/src/base16.js'),
        s = r('../../node_modules/multihashes/node_modules/multibase/src/base32.js'),
        a = r('../../node_modules/multihashes/node_modules/multibase/src/base64.js'),
        u = [
          ['base1', '1', '', '1'],
          ['base2', '0', i, '01'],
          ['base8', '7', i, '01234567'],
          ['base10', '9', i, '0123456789'],
          ['base16', 'f', o, '0123456789abcdef'],
          ['base32', 'b', s, 'abcdefghijklmnopqrstuvwxyz234567'],
          ['base32pad', 'c', s, 'abcdefghijklmnopqrstuvwxyz234567='],
          ['base32hex', 'v', s, '0123456789abcdefghijklmnopqrstuv'],
          ['base32hexpad', 't', s, '0123456789abcdefghijklmnopqrstuv='],
          ['base32z', 'h', s, 'ybndrfg8ejkmcpqxot1uwisza345h769'],
          [
            'base58flickr',
            'Z',
            i,
            '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
          ],
          [
            'base58btc',
            'z',
            i,
            '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
          ],
          [
            'base64',
            'm',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
          ],
          [
            'base64pad',
            'M',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
          ],
          [
            'base64url',
            'u',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
          ],
          [
            'base64urlpad',
            'U',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_='
          ]
        ],
        c = u.reduce((e, t) => ((e[t[0]] = new n(t[0], t[1], t[2], t[3])), e), {}),
        l = u.reduce((e, t) => ((e[t[1]] = c[t[0]]), e), {});
      e.exports = { names: c, codes: l };
    },
    '../../node_modules/multihashes/node_modules/multibase/src/index.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      const { Buffer: n } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        ),
        i = r('../../node_modules/multihashes/node_modules/multibase/src/constants.js');
      function o(e, t) {
        if (!t) throw new Error('requires an encoded buffer');
        const r = s(e),
          i = n.from(r.code);
        return (
          (function(e, t) {
            s(e).decode(t.toString());
          })(r.name, t),
          n.concat([i, t])
        );
      }
      function s(e) {
        let t;
        if (i.names[e]) t = i.names[e];
        else {
          if (!i.codes[e]) throw new Error('Unsupported encoding');
          t = i.codes[e];
        }
        if (!t.isImplemented()) throw new Error('Base ' + e + ' is not implemented yet');
        return t;
      }
      ((t = e.exports = o).encode = function(e, t) {
        const r = s(e);
        return o(r.name, n.from(r.encode(t)));
      }),
        (t.decode = function(e) {
          n.isBuffer(e) && (e = e.toString());
          const t = e.substring(0, 1);
          'string' == typeof (e = e.substring(1, e.length)) && (e = n.from(e));
          const r = s(t);
          return n.from(r.decode(e.toString()));
        }),
        (t.isEncoded = function(e) {
          n.isBuffer(e) && (e = e.toString());
          if ('[object String]' !== Object.prototype.toString.call(e)) return !1;
          const t = e.substring(0, 1);
          try {
            return s(t).name;
          } catch (e) {
            return !1;
          }
        }),
        (t.names = Object.freeze(Object.keys(i.names))),
        (t.codes = Object.freeze(Object.keys(i.codes)));
    },
    '../../node_modules/multihashes/src/constants.js': function(e, t, r) {
      'use strict';
      (t.names = Object.freeze({
        identity: 0,
        sha1: 17,
        'sha2-256': 18,
        'sha2-512': 19,
        'dbl-sha2-256': 86,
        'sha3-224': 23,
        'sha3-256': 22,
        'sha3-384': 21,
        'sha3-512': 20,
        'shake-128': 24,
        'shake-256': 25,
        'keccak-224': 26,
        'keccak-256': 27,
        'keccak-384': 28,
        'keccak-512': 29,
        'murmur3-128': 34,
        'murmur3-32': 35,
        md4: 212,
        md5: 213,
        'blake2b-8': 45569,
        'blake2b-16': 45570,
        'blake2b-24': 45571,
        'blake2b-32': 45572,
        'blake2b-40': 45573,
        'blake2b-48': 45574,
        'blake2b-56': 45575,
        'blake2b-64': 45576,
        'blake2b-72': 45577,
        'blake2b-80': 45578,
        'blake2b-88': 45579,
        'blake2b-96': 45580,
        'blake2b-104': 45581,
        'blake2b-112': 45582,
        'blake2b-120': 45583,
        'blake2b-128': 45584,
        'blake2b-136': 45585,
        'blake2b-144': 45586,
        'blake2b-152': 45587,
        'blake2b-160': 45588,
        'blake2b-168': 45589,
        'blake2b-176': 45590,
        'blake2b-184': 45591,
        'blake2b-192': 45592,
        'blake2b-200': 45593,
        'blake2b-208': 45594,
        'blake2b-216': 45595,
        'blake2b-224': 45596,
        'blake2b-232': 45597,
        'blake2b-240': 45598,
        'blake2b-248': 45599,
        'blake2b-256': 45600,
        'blake2b-264': 45601,
        'blake2b-272': 45602,
        'blake2b-280': 45603,
        'blake2b-288': 45604,
        'blake2b-296': 45605,
        'blake2b-304': 45606,
        'blake2b-312': 45607,
        'blake2b-320': 45608,
        'blake2b-328': 45609,
        'blake2b-336': 45610,
        'blake2b-344': 45611,
        'blake2b-352': 45612,
        'blake2b-360': 45613,
        'blake2b-368': 45614,
        'blake2b-376': 45615,
        'blake2b-384': 45616,
        'blake2b-392': 45617,
        'blake2b-400': 45618,
        'blake2b-408': 45619,
        'blake2b-416': 45620,
        'blake2b-424': 45621,
        'blake2b-432': 45622,
        'blake2b-440': 45623,
        'blake2b-448': 45624,
        'blake2b-456': 45625,
        'blake2b-464': 45626,
        'blake2b-472': 45627,
        'blake2b-480': 45628,
        'blake2b-488': 45629,
        'blake2b-496': 45630,
        'blake2b-504': 45631,
        'blake2b-512': 45632,
        'blake2s-8': 45633,
        'blake2s-16': 45634,
        'blake2s-24': 45635,
        'blake2s-32': 45636,
        'blake2s-40': 45637,
        'blake2s-48': 45638,
        'blake2s-56': 45639,
        'blake2s-64': 45640,
        'blake2s-72': 45641,
        'blake2s-80': 45642,
        'blake2s-88': 45643,
        'blake2s-96': 45644,
        'blake2s-104': 45645,
        'blake2s-112': 45646,
        'blake2s-120': 45647,
        'blake2s-128': 45648,
        'blake2s-136': 45649,
        'blake2s-144': 45650,
        'blake2s-152': 45651,
        'blake2s-160': 45652,
        'blake2s-168': 45653,
        'blake2s-176': 45654,
        'blake2s-184': 45655,
        'blake2s-192': 45656,
        'blake2s-200': 45657,
        'blake2s-208': 45658,
        'blake2s-216': 45659,
        'blake2s-224': 45660,
        'blake2s-232': 45661,
        'blake2s-240': 45662,
        'blake2s-248': 45663,
        'blake2s-256': 45664,
        'Skein256-8': 45825,
        'Skein256-16': 45826,
        'Skein256-24': 45827,
        'Skein256-32': 45828,
        'Skein256-40': 45829,
        'Skein256-48': 45830,
        'Skein256-56': 45831,
        'Skein256-64': 45832,
        'Skein256-72': 45833,
        'Skein256-80': 45834,
        'Skein256-88': 45835,
        'Skein256-96': 45836,
        'Skein256-104': 45837,
        'Skein256-112': 45838,
        'Skein256-120': 45839,
        'Skein256-128': 45840,
        'Skein256-136': 45841,
        'Skein256-144': 45842,
        'Skein256-152': 45843,
        'Skein256-160': 45844,
        'Skein256-168': 45845,
        'Skein256-176': 45846,
        'Skein256-184': 45847,
        'Skein256-192': 45848,
        'Skein256-200': 45849,
        'Skein256-208': 45850,
        'Skein256-216': 45851,
        'Skein256-224': 45852,
        'Skein256-232': 45853,
        'Skein256-240': 45854,
        'Skein256-248': 45855,
        'Skein256-256': 45856,
        'Skein512-8': 45857,
        'Skein512-16': 45858,
        'Skein512-24': 45859,
        'Skein512-32': 45860,
        'Skein512-40': 45861,
        'Skein512-48': 45862,
        'Skein512-56': 45863,
        'Skein512-64': 45864,
        'Skein512-72': 45865,
        'Skein512-80': 45866,
        'Skein512-88': 45867,
        'Skein512-96': 45868,
        'Skein512-104': 45869,
        'Skein512-112': 45870,
        'Skein512-120': 45871,
        'Skein512-128': 45872,
        'Skein512-136': 45873,
        'Skein512-144': 45874,
        'Skein512-152': 45875,
        'Skein512-160': 45876,
        'Skein512-168': 45877,
        'Skein512-176': 45878,
        'Skein512-184': 45879,
        'Skein512-192': 45880,
        'Skein512-200': 45881,
        'Skein512-208': 45882,
        'Skein512-216': 45883,
        'Skein512-224': 45884,
        'Skein512-232': 45885,
        'Skein512-240': 45886,
        'Skein512-248': 45887,
        'Skein512-256': 45888,
        'Skein512-264': 45889,
        'Skein512-272': 45890,
        'Skein512-280': 45891,
        'Skein512-288': 45892,
        'Skein512-296': 45893,
        'Skein512-304': 45894,
        'Skein512-312': 45895,
        'Skein512-320': 45896,
        'Skein512-328': 45897,
        'Skein512-336': 45898,
        'Skein512-344': 45899,
        'Skein512-352': 45900,
        'Skein512-360': 45901,
        'Skein512-368': 45902,
        'Skein512-376': 45903,
        'Skein512-384': 45904,
        'Skein512-392': 45905,
        'Skein512-400': 45906,
        'Skein512-408': 45907,
        'Skein512-416': 45908,
        'Skein512-424': 45909,
        'Skein512-432': 45910,
        'Skein512-440': 45911,
        'Skein512-448': 45912,
        'Skein512-456': 45913,
        'Skein512-464': 45914,
        'Skein512-472': 45915,
        'Skein512-480': 45916,
        'Skein512-488': 45917,
        'Skein512-496': 45918,
        'Skein512-504': 45919,
        'Skein512-512': 45920,
        'Skein1024-8': 45921,
        'Skein1024-16': 45922,
        'Skein1024-24': 45923,
        'Skein1024-32': 45924,
        'Skein1024-40': 45925,
        'Skein1024-48': 45926,
        'Skein1024-56': 45927,
        'Skein1024-64': 45928,
        'Skein1024-72': 45929,
        'Skein1024-80': 45930,
        'Skein1024-88': 45931,
        'Skein1024-96': 45932,
        'Skein1024-104': 45933,
        'Skein1024-112': 45934,
        'Skein1024-120': 45935,
        'Skein1024-128': 45936,
        'Skein1024-136': 45937,
        'Skein1024-144': 45938,
        'Skein1024-152': 45939,
        'Skein1024-160': 45940,
        'Skein1024-168': 45941,
        'Skein1024-176': 45942,
        'Skein1024-184': 45943,
        'Skein1024-192': 45944,
        'Skein1024-200': 45945,
        'Skein1024-208': 45946,
        'Skein1024-216': 45947,
        'Skein1024-224': 45948,
        'Skein1024-232': 45949,
        'Skein1024-240': 45950,
        'Skein1024-248': 45951,
        'Skein1024-256': 45952,
        'Skein1024-264': 45953,
        'Skein1024-272': 45954,
        'Skein1024-280': 45955,
        'Skein1024-288': 45956,
        'Skein1024-296': 45957,
        'Skein1024-304': 45958,
        'Skein1024-312': 45959,
        'Skein1024-320': 45960,
        'Skein1024-328': 45961,
        'Skein1024-336': 45962,
        'Skein1024-344': 45963,
        'Skein1024-352': 45964,
        'Skein1024-360': 45965,
        'Skein1024-368': 45966,
        'Skein1024-376': 45967,
        'Skein1024-384': 45968,
        'Skein1024-392': 45969,
        'Skein1024-400': 45970,
        'Skein1024-408': 45971,
        'Skein1024-416': 45972,
        'Skein1024-424': 45973,
        'Skein1024-432': 45974,
        'Skein1024-440': 45975,
        'Skein1024-448': 45976,
        'Skein1024-456': 45977,
        'Skein1024-464': 45978,
        'Skein1024-472': 45979,
        'Skein1024-480': 45980,
        'Skein1024-488': 45981,
        'Skein1024-496': 45982,
        'Skein1024-504': 45983,
        'Skein1024-512': 45984,
        'Skein1024-520': 45985,
        'Skein1024-528': 45986,
        'Skein1024-536': 45987,
        'Skein1024-544': 45988,
        'Skein1024-552': 45989,
        'Skein1024-560': 45990,
        'Skein1024-568': 45991,
        'Skein1024-576': 45992,
        'Skein1024-584': 45993,
        'Skein1024-592': 45994,
        'Skein1024-600': 45995,
        'Skein1024-608': 45996,
        'Skein1024-616': 45997,
        'Skein1024-624': 45998,
        'Skein1024-632': 45999,
        'Skein1024-640': 46e3,
        'Skein1024-648': 46001,
        'Skein1024-656': 46002,
        'Skein1024-664': 46003,
        'Skein1024-672': 46004,
        'Skein1024-680': 46005,
        'Skein1024-688': 46006,
        'Skein1024-696': 46007,
        'Skein1024-704': 46008,
        'Skein1024-712': 46009,
        'Skein1024-720': 46010,
        'Skein1024-728': 46011,
        'Skein1024-736': 46012,
        'Skein1024-744': 46013,
        'Skein1024-752': 46014,
        'Skein1024-760': 46015,
        'Skein1024-768': 46016,
        'Skein1024-776': 46017,
        'Skein1024-784': 46018,
        'Skein1024-792': 46019,
        'Skein1024-800': 46020,
        'Skein1024-808': 46021,
        'Skein1024-816': 46022,
        'Skein1024-824': 46023,
        'Skein1024-832': 46024,
        'Skein1024-840': 46025,
        'Skein1024-848': 46026,
        'Skein1024-856': 46027,
        'Skein1024-864': 46028,
        'Skein1024-872': 46029,
        'Skein1024-880': 46030,
        'Skein1024-888': 46031,
        'Skein1024-896': 46032,
        'Skein1024-904': 46033,
        'Skein1024-912': 46034,
        'Skein1024-920': 46035,
        'Skein1024-928': 46036,
        'Skein1024-936': 46037,
        'Skein1024-944': 46038,
        'Skein1024-952': 46039,
        'Skein1024-960': 46040,
        'Skein1024-968': 46041,
        'Skein1024-976': 46042,
        'Skein1024-984': 46043,
        'Skein1024-992': 46044,
        'Skein1024-1000': 46045,
        'Skein1024-1008': 46046,
        'Skein1024-1016': 46047,
        'Skein1024-1024': 46048
      })),
        (t.codes = Object.freeze({
          0: 'identity',
          17: 'sha1',
          18: 'sha2-256',
          19: 'sha2-512',
          86: 'dbl-sha2-256',
          23: 'sha3-224',
          22: 'sha3-256',
          21: 'sha3-384',
          20: 'sha3-512',
          24: 'shake-128',
          25: 'shake-256',
          26: 'keccak-224',
          27: 'keccak-256',
          28: 'keccak-384',
          29: 'keccak-512',
          34: 'murmur3-128',
          35: 'murmur3-32',
          212: 'md4',
          213: 'md5',
          45569: 'blake2b-8',
          45570: 'blake2b-16',
          45571: 'blake2b-24',
          45572: 'blake2b-32',
          45573: 'blake2b-40',
          45574: 'blake2b-48',
          45575: 'blake2b-56',
          45576: 'blake2b-64',
          45577: 'blake2b-72',
          45578: 'blake2b-80',
          45579: 'blake2b-88',
          45580: 'blake2b-96',
          45581: 'blake2b-104',
          45582: 'blake2b-112',
          45583: 'blake2b-120',
          45584: 'blake2b-128',
          45585: 'blake2b-136',
          45586: 'blake2b-144',
          45587: 'blake2b-152',
          45588: 'blake2b-160',
          45589: 'blake2b-168',
          45590: 'blake2b-176',
          45591: 'blake2b-184',
          45592: 'blake2b-192',
          45593: 'blake2b-200',
          45594: 'blake2b-208',
          45595: 'blake2b-216',
          45596: 'blake2b-224',
          45597: 'blake2b-232',
          45598: 'blake2b-240',
          45599: 'blake2b-248',
          45600: 'blake2b-256',
          45601: 'blake2b-264',
          45602: 'blake2b-272',
          45603: 'blake2b-280',
          45604: 'blake2b-288',
          45605: 'blake2b-296',
          45606: 'blake2b-304',
          45607: 'blake2b-312',
          45608: 'blake2b-320',
          45609: 'blake2b-328',
          45610: 'blake2b-336',
          45611: 'blake2b-344',
          45612: 'blake2b-352',
          45613: 'blake2b-360',
          45614: 'blake2b-368',
          45615: 'blake2b-376',
          45616: 'blake2b-384',
          45617: 'blake2b-392',
          45618: 'blake2b-400',
          45619: 'blake2b-408',
          45620: 'blake2b-416',
          45621: 'blake2b-424',
          45622: 'blake2b-432',
          45623: 'blake2b-440',
          45624: 'blake2b-448',
          45625: 'blake2b-456',
          45626: 'blake2b-464',
          45627: 'blake2b-472',
          45628: 'blake2b-480',
          45629: 'blake2b-488',
          45630: 'blake2b-496',
          45631: 'blake2b-504',
          45632: 'blake2b-512',
          45633: 'blake2s-8',
          45634: 'blake2s-16',
          45635: 'blake2s-24',
          45636: 'blake2s-32',
          45637: 'blake2s-40',
          45638: 'blake2s-48',
          45639: 'blake2s-56',
          45640: 'blake2s-64',
          45641: 'blake2s-72',
          45642: 'blake2s-80',
          45643: 'blake2s-88',
          45644: 'blake2s-96',
          45645: 'blake2s-104',
          45646: 'blake2s-112',
          45647: 'blake2s-120',
          45648: 'blake2s-128',
          45649: 'blake2s-136',
          45650: 'blake2s-144',
          45651: 'blake2s-152',
          45652: 'blake2s-160',
          45653: 'blake2s-168',
          45654: 'blake2s-176',
          45655: 'blake2s-184',
          45656: 'blake2s-192',
          45657: 'blake2s-200',
          45658: 'blake2s-208',
          45659: 'blake2s-216',
          45660: 'blake2s-224',
          45661: 'blake2s-232',
          45662: 'blake2s-240',
          45663: 'blake2s-248',
          45664: 'blake2s-256',
          45825: 'Skein256-8',
          45826: 'Skein256-16',
          45827: 'Skein256-24',
          45828: 'Skein256-32',
          45829: 'Skein256-40',
          45830: 'Skein256-48',
          45831: 'Skein256-56',
          45832: 'Skein256-64',
          45833: 'Skein256-72',
          45834: 'Skein256-80',
          45835: 'Skein256-88',
          45836: 'Skein256-96',
          45837: 'Skein256-104',
          45838: 'Skein256-112',
          45839: 'Skein256-120',
          45840: 'Skein256-128',
          45841: 'Skein256-136',
          45842: 'Skein256-144',
          45843: 'Skein256-152',
          45844: 'Skein256-160',
          45845: 'Skein256-168',
          45846: 'Skein256-176',
          45847: 'Skein256-184',
          45848: 'Skein256-192',
          45849: 'Skein256-200',
          45850: 'Skein256-208',
          45851: 'Skein256-216',
          45852: 'Skein256-224',
          45853: 'Skein256-232',
          45854: 'Skein256-240',
          45855: 'Skein256-248',
          45856: 'Skein256-256',
          45857: 'Skein512-8',
          45858: 'Skein512-16',
          45859: 'Skein512-24',
          45860: 'Skein512-32',
          45861: 'Skein512-40',
          45862: 'Skein512-48',
          45863: 'Skein512-56',
          45864: 'Skein512-64',
          45865: 'Skein512-72',
          45866: 'Skein512-80',
          45867: 'Skein512-88',
          45868: 'Skein512-96',
          45869: 'Skein512-104',
          45870: 'Skein512-112',
          45871: 'Skein512-120',
          45872: 'Skein512-128',
          45873: 'Skein512-136',
          45874: 'Skein512-144',
          45875: 'Skein512-152',
          45876: 'Skein512-160',
          45877: 'Skein512-168',
          45878: 'Skein512-176',
          45879: 'Skein512-184',
          45880: 'Skein512-192',
          45881: 'Skein512-200',
          45882: 'Skein512-208',
          45883: 'Skein512-216',
          45884: 'Skein512-224',
          45885: 'Skein512-232',
          45886: 'Skein512-240',
          45887: 'Skein512-248',
          45888: 'Skein512-256',
          45889: 'Skein512-264',
          45890: 'Skein512-272',
          45891: 'Skein512-280',
          45892: 'Skein512-288',
          45893: 'Skein512-296',
          45894: 'Skein512-304',
          45895: 'Skein512-312',
          45896: 'Skein512-320',
          45897: 'Skein512-328',
          45898: 'Skein512-336',
          45899: 'Skein512-344',
          45900: 'Skein512-352',
          45901: 'Skein512-360',
          45902: 'Skein512-368',
          45903: 'Skein512-376',
          45904: 'Skein512-384',
          45905: 'Skein512-392',
          45906: 'Skein512-400',
          45907: 'Skein512-408',
          45908: 'Skein512-416',
          45909: 'Skein512-424',
          45910: 'Skein512-432',
          45911: 'Skein512-440',
          45912: 'Skein512-448',
          45913: 'Skein512-456',
          45914: 'Skein512-464',
          45915: 'Skein512-472',
          45916: 'Skein512-480',
          45917: 'Skein512-488',
          45918: 'Skein512-496',
          45919: 'Skein512-504',
          45920: 'Skein512-512',
          45921: 'Skein1024-8',
          45922: 'Skein1024-16',
          45923: 'Skein1024-24',
          45924: 'Skein1024-32',
          45925: 'Skein1024-40',
          45926: 'Skein1024-48',
          45927: 'Skein1024-56',
          45928: 'Skein1024-64',
          45929: 'Skein1024-72',
          45930: 'Skein1024-80',
          45931: 'Skein1024-88',
          45932: 'Skein1024-96',
          45933: 'Skein1024-104',
          45934: 'Skein1024-112',
          45935: 'Skein1024-120',
          45936: 'Skein1024-128',
          45937: 'Skein1024-136',
          45938: 'Skein1024-144',
          45939: 'Skein1024-152',
          45940: 'Skein1024-160',
          45941: 'Skein1024-168',
          45942: 'Skein1024-176',
          45943: 'Skein1024-184',
          45944: 'Skein1024-192',
          45945: 'Skein1024-200',
          45946: 'Skein1024-208',
          45947: 'Skein1024-216',
          45948: 'Skein1024-224',
          45949: 'Skein1024-232',
          45950: 'Skein1024-240',
          45951: 'Skein1024-248',
          45952: 'Skein1024-256',
          45953: 'Skein1024-264',
          45954: 'Skein1024-272',
          45955: 'Skein1024-280',
          45956: 'Skein1024-288',
          45957: 'Skein1024-296',
          45958: 'Skein1024-304',
          45959: 'Skein1024-312',
          45960: 'Skein1024-320',
          45961: 'Skein1024-328',
          45962: 'Skein1024-336',
          45963: 'Skein1024-344',
          45964: 'Skein1024-352',
          45965: 'Skein1024-360',
          45966: 'Skein1024-368',
          45967: 'Skein1024-376',
          45968: 'Skein1024-384',
          45969: 'Skein1024-392',
          45970: 'Skein1024-400',
          45971: 'Skein1024-408',
          45972: 'Skein1024-416',
          45973: 'Skein1024-424',
          45974: 'Skein1024-432',
          45975: 'Skein1024-440',
          45976: 'Skein1024-448',
          45977: 'Skein1024-456',
          45978: 'Skein1024-464',
          45979: 'Skein1024-472',
          45980: 'Skein1024-480',
          45981: 'Skein1024-488',
          45982: 'Skein1024-496',
          45983: 'Skein1024-504',
          45984: 'Skein1024-512',
          45985: 'Skein1024-520',
          45986: 'Skein1024-528',
          45987: 'Skein1024-536',
          45988: 'Skein1024-544',
          45989: 'Skein1024-552',
          45990: 'Skein1024-560',
          45991: 'Skein1024-568',
          45992: 'Skein1024-576',
          45993: 'Skein1024-584',
          45994: 'Skein1024-592',
          45995: 'Skein1024-600',
          45996: 'Skein1024-608',
          45997: 'Skein1024-616',
          45998: 'Skein1024-624',
          45999: 'Skein1024-632',
          46e3: 'Skein1024-640',
          46001: 'Skein1024-648',
          46002: 'Skein1024-656',
          46003: 'Skein1024-664',
          46004: 'Skein1024-672',
          46005: 'Skein1024-680',
          46006: 'Skein1024-688',
          46007: 'Skein1024-696',
          46008: 'Skein1024-704',
          46009: 'Skein1024-712',
          46010: 'Skein1024-720',
          46011: 'Skein1024-728',
          46012: 'Skein1024-736',
          46013: 'Skein1024-744',
          46014: 'Skein1024-752',
          46015: 'Skein1024-760',
          46016: 'Skein1024-768',
          46017: 'Skein1024-776',
          46018: 'Skein1024-784',
          46019: 'Skein1024-792',
          46020: 'Skein1024-800',
          46021: 'Skein1024-808',
          46022: 'Skein1024-816',
          46023: 'Skein1024-824',
          46024: 'Skein1024-832',
          46025: 'Skein1024-840',
          46026: 'Skein1024-848',
          46027: 'Skein1024-856',
          46028: 'Skein1024-864',
          46029: 'Skein1024-872',
          46030: 'Skein1024-880',
          46031: 'Skein1024-888',
          46032: 'Skein1024-896',
          46033: 'Skein1024-904',
          46034: 'Skein1024-912',
          46035: 'Skein1024-920',
          46036: 'Skein1024-928',
          46037: 'Skein1024-936',
          46038: 'Skein1024-944',
          46039: 'Skein1024-952',
          46040: 'Skein1024-960',
          46041: 'Skein1024-968',
          46042: 'Skein1024-976',
          46043: 'Skein1024-984',
          46044: 'Skein1024-992',
          46045: 'Skein1024-1000',
          46046: 'Skein1024-1008',
          46047: 'Skein1024-1016',
          46048: 'Skein1024-1024'
        })),
        (t.defaultLengths = Object.freeze({
          17: 20,
          18: 32,
          19: 64,
          86: 32,
          23: 28,
          22: 32,
          21: 48,
          20: 64,
          24: 32,
          25: 64,
          26: 28,
          27: 32,
          28: 48,
          29: 64,
          34: 32,
          45569: 1,
          45570: 2,
          45571: 3,
          45572: 4,
          45573: 5,
          45574: 6,
          45575: 7,
          45576: 8,
          45577: 9,
          45578: 10,
          45579: 11,
          45580: 12,
          45581: 13,
          45582: 14,
          45583: 15,
          45584: 16,
          45585: 17,
          45586: 18,
          45587: 19,
          45588: 20,
          45589: 21,
          45590: 22,
          45591: 23,
          45592: 24,
          45593: 25,
          45594: 26,
          45595: 27,
          45596: 28,
          45597: 29,
          45598: 30,
          45599: 31,
          45600: 32,
          45601: 33,
          45602: 34,
          45603: 35,
          45604: 36,
          45605: 37,
          45606: 38,
          45607: 39,
          45608: 40,
          45609: 41,
          45610: 42,
          45611: 43,
          45612: 44,
          45613: 45,
          45614: 46,
          45615: 47,
          45616: 48,
          45617: 49,
          45618: 50,
          45619: 51,
          45620: 52,
          45621: 53,
          45622: 54,
          45623: 55,
          45624: 56,
          45625: 57,
          45626: 58,
          45627: 59,
          45628: 60,
          45629: 61,
          45630: 62,
          45631: 63,
          45632: 64,
          45633: 1,
          45634: 2,
          45635: 3,
          45636: 4,
          45637: 5,
          45638: 6,
          45639: 7,
          45640: 8,
          45641: 9,
          45642: 10,
          45643: 11,
          45644: 12,
          45645: 13,
          45646: 14,
          45647: 15,
          45648: 16,
          45649: 17,
          45650: 18,
          45651: 19,
          45652: 20,
          45653: 21,
          45654: 22,
          45655: 23,
          45656: 24,
          45657: 25,
          45658: 26,
          45659: 27,
          45660: 28,
          45661: 29,
          45662: 30,
          45663: 31,
          45664: 32,
          45825: 1,
          45826: 2,
          45827: 3,
          45828: 4,
          45829: 5,
          45830: 6,
          45831: 7,
          45832: 8,
          45833: 9,
          45834: 10,
          45835: 11,
          45836: 12,
          45837: 13,
          45838: 14,
          45839: 15,
          45840: 16,
          45841: 17,
          45842: 18,
          45843: 19,
          45844: 20,
          45845: 21,
          45846: 22,
          45847: 23,
          45848: 24,
          45849: 25,
          45850: 26,
          45851: 27,
          45852: 28,
          45853: 29,
          45854: 30,
          45855: 31,
          45856: 32,
          45857: 1,
          45858: 2,
          45859: 3,
          45860: 4,
          45861: 5,
          45862: 6,
          45863: 7,
          45864: 8,
          45865: 9,
          45866: 10,
          45867: 11,
          45868: 12,
          45869: 13,
          45870: 14,
          45871: 15,
          45872: 16,
          45873: 17,
          45874: 18,
          45875: 19,
          45876: 20,
          45877: 21,
          45878: 22,
          45879: 23,
          45880: 24,
          45881: 25,
          45882: 26,
          45883: 27,
          45884: 28,
          45885: 29,
          45886: 30,
          45887: 31,
          45888: 32,
          45889: 33,
          45890: 34,
          45891: 35,
          45892: 36,
          45893: 37,
          45894: 38,
          45895: 39,
          45896: 40,
          45897: 41,
          45898: 42,
          45899: 43,
          45900: 44,
          45901: 45,
          45902: 46,
          45903: 47,
          45904: 48,
          45905: 49,
          45906: 50,
          45907: 51,
          45908: 52,
          45909: 53,
          45910: 54,
          45911: 55,
          45912: 56,
          45913: 57,
          45914: 58,
          45915: 59,
          45916: 60,
          45917: 61,
          45918: 62,
          45919: 63,
          45920: 64,
          45921: 1,
          45922: 2,
          45923: 3,
          45924: 4,
          45925: 5,
          45926: 6,
          45927: 7,
          45928: 8,
          45929: 9,
          45930: 10,
          45931: 11,
          45932: 12,
          45933: 13,
          45934: 14,
          45935: 15,
          45936: 16,
          45937: 17,
          45938: 18,
          45939: 19,
          45940: 20,
          45941: 21,
          45942: 22,
          45943: 23,
          45944: 24,
          45945: 25,
          45946: 26,
          45947: 27,
          45948: 28,
          45949: 29,
          45950: 30,
          45951: 31,
          45952: 32,
          45953: 33,
          45954: 34,
          45955: 35,
          45956: 36,
          45957: 37,
          45958: 38,
          45959: 39,
          45960: 40,
          45961: 41,
          45962: 42,
          45963: 43,
          45964: 44,
          45965: 45,
          45966: 46,
          45967: 47,
          45968: 48,
          45969: 49,
          45970: 50,
          45971: 51,
          45972: 52,
          45973: 53,
          45974: 54,
          45975: 55,
          45976: 56,
          45977: 57,
          45978: 58,
          45979: 59,
          45980: 60,
          45981: 61,
          45982: 62,
          45983: 63,
          45984: 64,
          45985: 65,
          45986: 66,
          45987: 67,
          45988: 68,
          45989: 69,
          45990: 70,
          45991: 71,
          45992: 72,
          45993: 73,
          45994: 74,
          45995: 75,
          45996: 76,
          45997: 77,
          45998: 78,
          45999: 79,
          46e3: 80,
          46001: 81,
          46002: 82,
          46003: 83,
          46004: 84,
          46005: 85,
          46006: 86,
          46007: 87,
          46008: 88,
          46009: 89,
          46010: 90,
          46011: 91,
          46012: 92,
          46013: 93,
          46014: 94,
          46015: 95,
          46016: 96,
          46017: 97,
          46018: 98,
          46019: 99,
          46020: 100,
          46021: 101,
          46022: 102,
          46023: 103,
          46024: 104,
          46025: 105,
          46026: 106,
          46027: 107,
          46028: 108,
          46029: 109,
          46030: 110,
          46031: 111,
          46032: 112,
          46033: 113,
          46034: 114,
          46035: 115,
          46036: 116,
          46037: 117,
          46038: 118,
          46039: 119,
          46040: 120,
          46041: 121,
          46042: 122,
          46043: 123,
          46044: 124,
          46045: 125,
          46046: 126,
          46047: 127,
          46048: 128
        }));
    },
    '../../node_modules/multihashes/src/index.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        ),
        i = r('../../node_modules/multihashes/node_modules/multibase/src/index.js'),
        o = r('../../node_modules/varint/index.js'),
        s = r('../../node_modules/multihashes/src/constants.js');
      function a(e) {
        t.decode(e);
      }
      (t.names = s.names),
        (t.codes = s.codes),
        (t.defaultLengths = s.defaultLengths),
        (t.toHexString = function(e) {
          if (!n.isBuffer(e)) throw new Error('must be passed a buffer');
          return e.toString('hex');
        }),
        (t.fromHexString = function(e) {
          return n.from(e, 'hex');
        }),
        (t.toB58String = function(e) {
          if (!n.isBuffer(e)) throw new Error('must be passed a buffer');
          return i
            .encode('base58btc', e)
            .toString()
            .slice(1);
        }),
        (t.fromB58String = function(e) {
          let t = e;
          return n.isBuffer(e) && (t = e.toString()), i.decode('z' + t);
        }),
        (t.decode = function(e) {
          if (!n.isBuffer(e)) throw new Error('multihash must be a Buffer');
          if (e.length < 2) throw new Error('multihash too short. must be > 2 bytes.');
          const r = o.decode(e);
          if (!t.isValidCode(r))
            throw new Error(`multihash unknown function code: 0x${r.toString(16)}`);
          e = e.slice(o.decode.bytes);
          const i = o.decode(e);
          if (i < 0) throw new Error(`multihash invalid length: ${i}`);
          if ((e = e.slice(o.decode.bytes)).length !== i)
            throw new Error(`multihash length inconsistent: 0x${e.toString('hex')}`);
          return { code: r, name: s.codes[r], length: i, digest: e };
        }),
        (t.encode = function(e, r, i) {
          if (!e || void 0 === r)
            throw new Error('multihash encode requires at least two args: digest, code');
          const s = t.coerceCode(r);
          if (!n.isBuffer(e)) throw new Error('digest should be a Buffer');
          if ((null == i && (i = e.length), i && e.length !== i))
            throw new Error('digest length should be equal to specified length.');
          return n.concat([n.from(o.encode(s)), n.from(o.encode(i)), e]);
        }),
        (t.coerceCode = function(e) {
          let r = e;
          if ('string' == typeof e) {
            if (void 0 === s.names[e])
              throw new Error(`Unrecognized hash function named: ${e}`);
            r = s.names[e];
          }
          if ('number' != typeof r)
            throw new Error(`Hash function code should be a number. Got: ${r}`);
          if (void 0 === s.codes[r] && !t.isAppCode(r))
            throw new Error(`Unrecognized function code: ${r}`);
          return r;
        }),
        (t.isAppCode = function(e) {
          return e > 0 && e < 16;
        }),
        (t.isValidCode = function(e) {
          return !!t.isAppCode(e) || !!s.codes[e];
        }),
        (t.validate = a),
        (t.prefix = function(e) {
          return a(e), e.slice(0, 2);
        });
    },
    '../../node_modules/multihashing-async/src/blake.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        ),
        i = r('../../node_modules/blakejs/index.js'),
        o = { init: i.blake2bInit, update: i.blake2bUpdate, digest: i.blake2bFinal },
        s = { init: i.blake2sInit, update: i.blake2sUpdate, digest: i.blake2sFinal },
        a = (e, t) => async r => {
          const i = t.init(e, null);
          return t.update(i, r), n.from(t.digest(i));
        };
      e.exports = e => {
        for (let t = 0; t < 64; t++) e[45569 + t] = a(t + 1, o);
        for (let t = 0; t < 32; t++) e[45633 + t] = a(t + 1, s);
      };
    },
    '../../node_modules/multihashing-async/src/crypto.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        ),
        i = r('../../node_modules/js-sha3/src/sha3.js'),
        o = r('../../node_modules/murmurhash3js-revisited/index.js'),
        { factory: s } = r('../../node_modules/multihashing-async/src/sha.browser.js'),
        { fromNumberTo32BitBuf: a } = r(
          '../../node_modules/multihashing-async/src/utils.js'
        ),
        u = e => async t => {
          switch (e) {
            case 'sha3-224':
              return n.from(i.sha3_224.arrayBuffer(t));
            case 'sha3-256':
              return n.from(i.sha3_256.arrayBuffer(t));
            case 'sha3-384':
              return n.from(i.sha3_384.arrayBuffer(t));
            case 'sha3-512':
              return n.from(i.sha3_512.arrayBuffer(t));
            case 'shake-128':
              return n.from(
                i.shake128
                  .create(128)
                  .update(t)
                  .arrayBuffer()
              );
            case 'shake-256':
              return n.from(
                i.shake256
                  .create(256)
                  .update(t)
                  .arrayBuffer()
              );
            case 'keccak-224':
              return n.from(i.keccak224.arrayBuffer(t));
            case 'keccak-256':
              return n.from(i.keccak256.arrayBuffer(t));
            case 'keccak-384':
              return n.from(i.keccak384.arrayBuffer(t));
            case 'keccak-512':
              return n.from(i.keccak512.arrayBuffer(t));
            case 'murmur3-128':
              return n.from(o.x64.hash128(t), 'hex');
            case 'murmur3-32':
              return a(o.x86.hash32(t));
            default:
              throw new TypeError(`${e} is not a supported algorithm`);
          }
        };
      e.exports = {
        identity: e => n.from(e),
        sha1: s('sha1'),
        sha2256: s('sha2-256'),
        sha2512: s('sha2-512'),
        dblSha2256: s('dbl-sha2-256'),
        sha3224: u('sha3-224'),
        sha3256: u('sha3-256'),
        sha3384: u('sha3-384'),
        sha3512: u('sha3-512'),
        shake128: u('shake-128'),
        shake256: u('shake-256'),
        keccak224: u('keccak-224'),
        keccak256: u('keccak-256'),
        keccak384: u('keccak-384'),
        keccak512: u('keccak-512'),
        murmur3128: u('murmur3-128'),
        murmur332: u('murmur3-32'),
        addBlake: r('../../node_modules/multihashing-async/src/blake.js')
      };
    },
    '../../node_modules/multihashing-async/src/index.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        ),
        i = r('../../node_modules/err-code/index.js'),
        o = r('../../node_modules/multihashes/src/index.js'),
        s = r('../../node_modules/multihashing-async/src/crypto.js');
      async function a(e, t, r) {
        const n = await a.digest(e, t, r);
        return o.encode(n, t, r);
      }
      (a.Buffer = n),
        (a.multihash = o),
        (a.digest = async (e, t, r) => {
          const n = a.createHash(t),
            i = await n(e);
          return r ? i.slice(0, r) : i;
        }),
        (a.createHash = function(e) {
          if (!e)
            throw i(
              new Error('hash algorithm must be specified'),
              'ERR_HASH_ALGORITHM_NOT_SPECIFIED'
            );
          if (((e = o.coerceCode(e)), !a.functions[e]))
            throw i(
              new Error(`multihash function '${e}' not yet supported`),
              'ERR_HASH_ALGORITHM_NOT_SUPPORTED'
            );
          return a.functions[e];
        }),
        (a.functions = {
          0: s.identity,
          17: s.sha1,
          18: s.sha2256,
          19: s.sha2512,
          20: s.sha3512,
          21: s.sha3384,
          22: s.sha3256,
          23: s.sha3224,
          24: s.shake128,
          25: s.shake256,
          26: s.keccak224,
          27: s.keccak256,
          28: s.keccak384,
          29: s.keccak512,
          34: s.murmur3128,
          35: s.murmur332,
          86: s.dblSha2256
        }),
        s.addBlake(a.functions),
        (a.validate = async (e, t) => {
          const r = await a(e, o.decode(t).name);
          return 0 === n.compare(t, r);
        }),
        (e.exports = a);
    },
    '../../node_modules/multihashing-async/src/sha.browser.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
          '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
        ),
        i = r('../../node_modules/multihashes/src/index.js'),
        o = self.crypto || self.msCrypto,
        s = async (e, t) => {
          if ('undefined' == typeof self || (!self.crypto && !self.msCrypto))
            throw new Error(
              'Please use a browser with webcrypto support and ensure the code has been delivered securely via HTTPS/TLS and run within a Secure Context'
            );
          switch (t) {
            case 'sha1':
              return n.from(await o.subtle.digest({ name: 'SHA-1' }, e));
            case 'sha2-256':
              return n.from(await o.subtle.digest({ name: 'SHA-256' }, e));
            case 'sha2-512':
              return n.from(await o.subtle.digest({ name: 'SHA-512' }, e));
            case 'dbl-sha2-256': {
              const t = await o.subtle.digest({ name: 'SHA-256' }, e);
              return n.from(await o.subtle.digest({ name: 'SHA-256' }, t));
            }
            default:
              throw new Error(`${t} is not a supported algorithm`);
          }
        };
      e.exports = {
        factory: e => async t => s(t, e),
        digest: s,
        multihashing: async (e, t, r) => {
          const n = await s(e, t);
          return i.encode(n, t, r);
        }
      };
    },
    '../../node_modules/multihashing-async/src/utils.js': function(e, t, r) {
      'use strict';
      const { Buffer: n } = r(
        '../../node_modules/node-libs-browser/node_modules/buffer/index.js'
      );
      e.exports = {
        fromNumberTo32BitBuf: e => {
          const t = new Array(4);
          for (let r = 0; r < 4; r++) (t[r] = 255 & e), (e >>= 8);
          return n.from(t);
        }
      };
    },
    '../../node_modules/muport-did-resolver/lib/register.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/interopRequireDefault.js'),
        i = n(r('../../node_modules/@babel/runtime/regenerator/index.js')),
        o = n(r('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js')),
        s = r('../../node_modules/did-resolver/lib/resolver.js'),
        a = n(r('../../node_modules/node-fetch/browser.js')),
        u = 'https://ipfs.infura.io/ipfs/';
      function c(e, t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = (0, o.default)(
          i.default.mark(function e(t, r) {
            var n;
            return i.default.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), !t)) {
                        e.next = 9;
                        break;
                      }
                      return (e.t1 = JSON), (e.next = 5), t.cat(r);
                    case 5:
                      (e.t2 = e.sent),
                        (e.t0 = e.t1.parse.call(e.t1, e.t2)),
                        (e.next = 12);
                      break;
                    case 9:
                      return (e.next = 11), d(r);
                    case 11:
                      e.t0 = e.sent;
                    case 12:
                      (n = e.t0), (e.next = 17);
                      break;
                    case 15:
                      (e.prev = 15), (e.t3 = e.catch(0));
                    case 17:
                      if (
                        n &&
                        1 === n.version &&
                        n.signingKey &&
                        n.managementKey &&
                        n.asymEncryptionKey
                      ) {
                        e.next = 27;
                        break;
                      }
                      if (((e.prev = 18), !t)) {
                        e.next = 22;
                        break;
                      }
                      return (e.next = 22), t.pin.rm(r);
                    case 22:
                      e.next = 26;
                      break;
                    case 24:
                      (e.prev = 24), (e.t4 = e.catch(18));
                    case 26:
                      throw new Error('Invalid muport did');
                    case 27:
                      return e.abrupt('return', n);
                    case 28:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [0, 15],
                [18, 24]
              ]
            );
          })
        )).apply(this, arguments);
      }
      function d(e) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = (0, o.default)(
          i.default.mark(function e(t) {
            return i.default.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), (0, a.default)(u + t);
                  case 2:
                    return e.abrupt('return', e.sent.json());
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function h(e, t) {
        var r = {
          '@context': 'https://w3id.org/did/v1',
          id: e,
          publicKey: [
            {
              id: e + '#signingKey',
              type: 'Secp256k1VerificationKey2018',
              owner: e,
              publicKeyHex: t.signingKey
            },
            { id: e + '#managementKey', type: 'Secp256k1VerificationKey2018', owner: e },
            {
              id: e + '#encryptionKey',
              type: 'Curve25519EncryptionPublicKey',
              owner: e,
              publicKeyBase64: t.asymEncryptionKey
            }
          ],
          authentication: [
            { type: 'Secp256k1SignatureAuthentication2018', publicKey: e + '#signingKey' }
          ],
          muportData: {}
        };
        return (
          42 === t.managementKey.length
            ? (r.publicKey[1].ethereumAddress = t.managementKey)
            : (r.publicKey[1].publicKeyHex = t.managementKey),
          t.publicProfile && (r.uportProfile = t.publicProfile),
          t.symEncryptedData && (r.muportData.symEncryptedData = t.symEncryptedData),
          t.recoveryNetwork && (r.muportData.recoveryNetwork = t.recoveryNetwork),
          r
        );
      }
      e.exports = function(e) {
        function t(e, t) {
          return r.apply(this, arguments);
        }
        function r() {
          return (r = (0, o.default)(
            i.default.mark(function t(r, n) {
              var o;
              return i.default.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), c(e, n.id);
                    case 2:
                      return (o = t.sent), t.abrupt('return', h(r, o));
                    case 4:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          (0, s.registerMethod)('muport', t);
      };
    },
    '../../node_modules/murmurhash3js-revisited/index.js': function(e, t, r) {
      e.exports = r('../../node_modules/murmurhash3js-revisited/lib/murmurHash3js.js');
    },
    '../../node_modules/murmurhash3js-revisited/lib/murmurHash3js.js': function(e, t, r) {
      !(function(r, n) {
        'use strict';
        var i = { version: '3.0.0', x86: {}, x64: {}, inputValidation: !0 };
        function o(e) {
          if (!Array.isArray(e) && !ArrayBuffer.isView(e)) return !1;
          for (var t = 0; t < e.length; t++)
            if (!Number.isInteger(e[t]) || e[t] < 0 || e[t] > 255) return !1;
          return !0;
        }
        function s(e, t) {
          return (65535 & e) * t + ((((e >>> 16) * t) & 65535) << 16);
        }
        function a(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function u(e) {
          return (
            (e = s((e ^= e >>> 16), 2246822507)),
            (e = s((e ^= e >>> 13), 3266489909)),
            (e ^= e >>> 16)
          );
        }
        function c(e, t) {
          (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
          var r = [0, 0, 0, 0];
          return (
            (r[3] += e[3] + t[3]),
            (r[2] += r[3] >>> 16),
            (r[3] &= 65535),
            (r[2] += e[2] + t[2]),
            (r[1] += r[2] >>> 16),
            (r[2] &= 65535),
            (r[1] += e[1] + t[1]),
            (r[0] += r[1] >>> 16),
            (r[1] &= 65535),
            (r[0] += e[0] + t[0]),
            (r[0] &= 65535),
            [(r[0] << 16) | r[1], (r[2] << 16) | r[3]]
          );
        }
        function l(e, t) {
          (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
          var r = [0, 0, 0, 0];
          return (
            (r[3] += e[3] * t[3]),
            (r[2] += r[3] >>> 16),
            (r[3] &= 65535),
            (r[2] += e[2] * t[3]),
            (r[1] += r[2] >>> 16),
            (r[2] &= 65535),
            (r[2] += e[3] * t[2]),
            (r[1] += r[2] >>> 16),
            (r[2] &= 65535),
            (r[1] += e[1] * t[3]),
            (r[0] += r[1] >>> 16),
            (r[1] &= 65535),
            (r[1] += e[2] * t[2]),
            (r[0] += r[1] >>> 16),
            (r[1] &= 65535),
            (r[1] += e[3] * t[1]),
            (r[0] += r[1] >>> 16),
            (r[1] &= 65535),
            (r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
            (r[0] &= 65535),
            [(r[0] << 16) | r[1], (r[2] << 16) | r[3]]
          );
        }
        function d(e, t) {
          return 32 === (t %= 64)
            ? [e[1], e[0]]
            : t < 32
            ? [(e[0] << t) | (e[1] >>> (32 - t)), (e[1] << t) | (e[0] >>> (32 - t))]
            : ((t -= 32),
              [(e[1] << t) | (e[0] >>> (32 - t)), (e[0] << t) | (e[1] >>> (32 - t))]);
        }
        function f(e, t) {
          return 0 === (t %= 64)
            ? e
            : t < 32
            ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
            : [e[1] << (t - 32), 0];
        }
        function h(e, t) {
          return [e[0] ^ t[0], e[1] ^ t[1]];
        }
        function p(e) {
          return (
            (e = h(e, [0, e[0] >>> 1])),
            (e = h((e = l(e, [4283543511, 3981806797])), [0, e[0] >>> 1])),
            (e = h((e = l(e, [3301882366, 444984403])), [0, e[0] >>> 1]))
          );
        }
        (i.x86.hash32 = function(e, t) {
          if (!i.inputValidation || o(e)) {
            t = t || 0;
            for (
              var r = e.length % 4,
                n = e.length - r,
                c = t,
                l = 0,
                d = 3432918353,
                f = 461845907,
                h = 0;
              h < n;
              h += 4
            )
              (l = s(
                (l = e[h] | (e[h + 1] << 8) | (e[h + 2] << 16) | (e[h + 3] << 24)),
                d
              )),
                (l = s((l = a(l, 15)), f)),
                (c = s((c = a((c ^= l), 13)), 5) + 3864292196);
            switch (((l = 0), r)) {
              case 3:
                l ^= e[h + 2] << 16;
              case 2:
                l ^= e[h + 1] << 8;
              case 1:
                (l = s((l ^= e[h]), d)), (c ^= l = s((l = a(l, 15)), f));
            }
            return (c = u((c ^= e.length))) >>> 0;
          }
        }),
          (i.x86.hash128 = function(e, t) {
            if (!i.inputValidation || o(e)) {
              t = t || 0;
              for (
                var r = e.length % 16,
                  n = e.length - r,
                  c = t,
                  l = t,
                  d = t,
                  f = t,
                  h = 0,
                  p = 0,
                  b = 0,
                  m = 0,
                  g = 597399067,
                  y = 2869860233,
                  v = 951274213,
                  w = 2716044179,
                  k = 0;
                k < n;
                k += 16
              )
                (h = e[k] | (e[k + 1] << 8) | (e[k + 2] << 16) | (e[k + 3] << 24)),
                  (p = e[k + 4] | (e[k + 5] << 8) | (e[k + 6] << 16) | (e[k + 7] << 24)),
                  (b =
                    e[k + 8] | (e[k + 9] << 8) | (e[k + 10] << 16) | (e[k + 11] << 24)),
                  (m =
                    e[k + 12] | (e[k + 13] << 8) | (e[k + 14] << 16) | (e[k + 15] << 24)),
                  (h = a((h = s(h, g)), 15)),
                  (c = a((c ^= h = s(h, y)), 19)),
                  (c = s((c += l), 5) + 1444728091),
                  (p = a((p = s(p, y)), 16)),
                  (l = a((l ^= p = s(p, v)), 17)),
                  (l = s((l += d), 5) + 197830471),
                  (b = a((b = s(b, v)), 17)),
                  (d = a((d ^= b = s(b, w)), 15)),
                  (d = s((d += f), 5) + 2530024501),
                  (m = a((m = s(m, w)), 18)),
                  (f = a((f ^= m = s(m, g)), 13)),
                  (f = s((f += c), 5) + 850148119);
              switch (((h = 0), (p = 0), (b = 0), (m = 0), r)) {
                case 15:
                  m ^= e[k + 14] << 16;
                case 14:
                  m ^= e[k + 13] << 8;
                case 13:
                  (m = s((m ^= e[k + 12]), w)), (f ^= m = s((m = a(m, 18)), g));
                case 12:
                  b ^= e[k + 11] << 24;
                case 11:
                  b ^= e[k + 10] << 16;
                case 10:
                  b ^= e[k + 9] << 8;
                case 9:
                  (b = s((b ^= e[k + 8]), v)), (d ^= b = s((b = a(b, 17)), w));
                case 8:
                  p ^= e[k + 7] << 24;
                case 7:
                  p ^= e[k + 6] << 16;
                case 6:
                  p ^= e[k + 5] << 8;
                case 5:
                  (p = s((p ^= e[k + 4]), y)), (l ^= p = s((p = a(p, 16)), v));
                case 4:
                  h ^= e[k + 3] << 24;
                case 3:
                  h ^= e[k + 2] << 16;
                case 2:
                  h ^= e[k + 1] << 8;
                case 1:
                  (h = s((h ^= e[k]), g)), (c ^= h = s((h = a(h, 15)), y));
              }
              return (
                (c ^= e.length),
                (c += l ^= e.length),
                (c += d ^= e.length),
                (l += c += f ^= e.length),
                (d += c),
                (f += c),
                (c = u(c)),
                (c += l = u(l)),
                (c += d = u(d)),
                (l += c += f = u(f)),
                (d += c),
                (f += c),
                ('00000000' + (c >>> 0).toString(16)).slice(-8) +
                  ('00000000' + (l >>> 0).toString(16)).slice(-8) +
                  ('00000000' + (d >>> 0).toString(16)).slice(-8) +
                  ('00000000' + (f >>> 0).toString(16)).slice(-8)
              );
            }
          }),
          (i.x64.hash128 = function(e, t) {
            if (!i.inputValidation || o(e)) {
              t = t || 0;
              for (
                var r = e.length % 16,
                  n = e.length - r,
                  s = [0, t],
                  a = [0, t],
                  u = [0, 0],
                  b = [0, 0],
                  m = [2277735313, 289559509],
                  g = [1291169091, 658871167],
                  y = 0;
                y < n;
                y += 16
              )
                (u = [
                  e[y + 4] | (e[y + 5] << 8) | (e[y + 6] << 16) | (e[y + 7] << 24),
                  e[y] | (e[y + 1] << 8) | (e[y + 2] << 16) | (e[y + 3] << 24)
                ]),
                  (b = [
                    e[y + 12] | (e[y + 13] << 8) | (e[y + 14] << 16) | (e[y + 15] << 24),
                    e[y + 8] | (e[y + 9] << 8) | (e[y + 10] << 16) | (e[y + 11] << 24)
                  ]),
                  (u = d((u = l(u, m)), 31)),
                  (s = c((s = d((s = h(s, (u = l(u, g)))), 27)), a)),
                  (s = c(l(s, [0, 5]), [0, 1390208809])),
                  (b = d((b = l(b, g)), 33)),
                  (a = c((a = d((a = h(a, (b = l(b, m)))), 31)), s)),
                  (a = c(l(a, [0, 5]), [0, 944331445]));
              switch (((u = [0, 0]), (b = [0, 0]), r)) {
                case 15:
                  b = h(b, f([0, e[y + 14]], 48));
                case 14:
                  b = h(b, f([0, e[y + 13]], 40));
                case 13:
                  b = h(b, f([0, e[y + 12]], 32));
                case 12:
                  b = h(b, f([0, e[y + 11]], 24));
                case 11:
                  b = h(b, f([0, e[y + 10]], 16));
                case 10:
                  b = h(b, f([0, e[y + 9]], 8));
                case 9:
                  (b = l((b = h(b, [0, e[y + 8]])), g)),
                    (a = h(a, (b = l((b = d(b, 33)), m))));
                case 8:
                  u = h(u, f([0, e[y + 7]], 56));
                case 7:
                  u = h(u, f([0, e[y + 6]], 48));
                case 6:
                  u = h(u, f([0, e[y + 5]], 40));
                case 5:
                  u = h(u, f([0, e[y + 4]], 32));
                case 4:
                  u = h(u, f([0, e[y + 3]], 24));
                case 3:
                  u = h(u, f([0, e[y + 2]], 16));
                case 2:
                  u = h(u, f([0, e[y + 1]], 8));
                case 1:
                  (u = l((u = h(u, [0, e[y]])), m)),
                    (s = h(s, (u = l((u = d(u, 31)), g))));
              }
              return (
                (s = c((s = h(s, [0, e.length])), (a = h(a, [0, e.length])))),
                (a = c(a, s)),
                (s = c((s = p(s)), (a = p(a)))),
                (a = c(a, s)),
                ('00000000' + (s[0] >>> 0).toString(16)).slice(-8) +
                  ('00000000' + (s[1] >>> 0).toString(16)).slice(-8) +
                  ('00000000' + (a[0] >>> 0).toString(16)).slice(-8) +
                  ('00000000' + (a[1] >>> 0).toString(16)).slice(-8)
              );
            }
          }),
          e.exports && (t = e.exports = i),
          (t.murmurHash3 = i);
      })();
    },
    '../../node_modules/node-fetch/browser.js': function(e, t, r) {
      'use strict';
      var n = (function() {
        if ('undefined' != typeof self) return self;
        if ('undefined' != typeof window) return window;
        if (void 0 !== n) return n;
        throw new Error('unable to locate global object');
      })();
      (e.exports = t = n.fetch),
        (t.default = n.fetch.bind(n)),
        (t.Headers = n.Headers),
        (t.Request = n.Request),
        (t.Response = n.Response);
    },
    '../../node_modules/orbit-db-io/index.js': function(e, t, r) {
      (function(t) {
        const n = r('../../node_modules/cids/src/index.js'),
          i = r('../../node_modules/ipld-dag-pb/src/index.js'),
          o = e => (e ? (Array.isArray(e) ? e.map(o) : new n(e)) : e),
          s = (e, t) => {
            if (!e || 'string' == typeof e) return e;
            if (Array.isArray(e)) return e.map(s);
            if (e['/']) return e['/'];
            const r = t.base || 'base58btc';
            return e.toBaseEncodedString(r);
          },
          a = {
            'dag-pb': {
              read: async (e, t) => {
                const r = (await e.dag.get(t)).value;
                return JSON.parse(r.toJSON().data);
              },
              write: async (e, r, n) => {
                const o = t.from(JSON.stringify(r)),
                  s = new i.DAGNode(o),
                  a = (await e.dag.put(s, { format: 'dag-pb', hashAlg: 'sha2-256' }))
                    .toV0()
                    .toBaseEncodedString();
                return (n.pin || !1) && (await e.pin.add(a)), a;
              }
            },
            'dag-cbor': {
              write: async (e, t, r) => {
                const n = Object.assign({}, t);
                (r.links || []).forEach(e => {
                  n[e] && (n[e] = o(n[e]));
                });
                const i = r.base || 'base58btc',
                  s = r.onlyHash || !1,
                  a = (await e.dag.put(n, { onlyHash: s })).toBaseEncodedString(i);
                return (r.pin || !1) && (await e.pin.add(a)), a;
              },
              read: async (e, t, r) => {
                const n = (await e.dag.get(t)).value;
                return (
                  (r.links || []).forEach(e => {
                    n[e] && (n[e] = s(n[e], r));
                  }),
                  n
                );
              }
            },
            raw: {
              write: async (e, t, r) => {
                const n = r.onlyHash || !1,
                  o = r.base || 'base58btc',
                  s = Object.assign(
                    {},
                    { onlyHash: n },
                    r.format ? { format: r.format, hashAlg: 'sha2-256' } : {}
                  );
                'dag-pb' === s.format && (t = new i.DAGNode(t));
                const a = (await e.dag.put(t, s)).toBaseEncodedString(o);
                return (r.pin || !1) && (await e.pin.add(a)), a;
              }
            }
          };
        e.exports = {
          read: (e, t, r = {}) => {
            t = new n(t);
            const i = a[t.codec];
            if (!i) throw new Error('Unsupported codec');
            return i.read(e, t, r);
          },
          write: (e, t, r, n = {}) => {
            const i = a[t];
            if (!i) throw new Error('Unsupported codec');
            return i.write(e, r, n);
          }
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/p-do-whilst/index.js': function(e, t, r) {
      'use strict';
      const n = async (e, t) => {
        if (t(await e())) return n(e, t);
      };
      (e.exports = n), (e.exports.default = n);
    },
    '../../node_modules/protocol-buffers-schema/index.js': function(e, t, r) {
      var n = r('../../node_modules/protocol-buffers-schema/parse.js'),
        i = r('../../node_modules/protocol-buffers-schema/stringify.js');
      (e.exports = n), (e.exports.parse = n), (e.exports.stringify = i);
    },
    '../../node_modules/protocol-buffers-schema/parse.js': function(e, t, r) {
      var n = r('../../node_modules/protocol-buffers-schema/tokenize.js'),
        i = [
          'int32',
          'int64',
          'uint32',
          'uint64',
          'sint32',
          'sint64',
          'bool',
          'fixed64',
          'sfixed64',
          'double',
          'fixed32',
          'sfixed32',
          'float'
        ],
        o = function(e) {
          for (var t = {}; e.length; )
            switch (e[0]) {
              case '[':
              case ',':
                e.shift();
                var r = e.shift();
                if (('(' === r && ((r = e.shift()), e.shift()), '=' !== e[0]))
                  throw new Error('Unexpected token in field options: ' + e[0]);
                if ((e.shift(), ']' === e[0]))
                  throw new Error('Unexpected ] in field option');
                t[r] = e.shift();
                break;
              case ']':
                return e.shift(), t;
              default:
                throw new Error('Unexpected token in field options: ' + e[0]);
            }
          throw new Error('No closing tag for field options');
        },
        s = function(e) {
          for (
            var t = {
              name: null,
              type: null,
              tag: -1,
              map: null,
              oneof: null,
              required: !1,
              repeated: !1,
              options: {}
            };
            e.length;

          )
            switch (e[0]) {
              case '=':
                e.shift(), (t.tag = Number(e.shift()));
                break;
              case 'map':
                if (
                  ((t.type = 'map'),
                  (t.map = { from: null, to: null }),
                  e.shift(),
                  '<' !== e[0])
                )
                  throw new Error('Unexpected token in map type: ' + e[0]);
                if ((e.shift(), (t.map.from = e.shift()), ',' !== e[0]))
                  throw new Error('Unexpected token in map type: ' + e[0]);
                if ((e.shift(), (t.map.to = e.shift()), '>' !== e[0]))
                  throw new Error('Unexpected token in map type: ' + e[0]);
                e.shift(), (t.name = e.shift());
                break;
              case 'repeated':
              case 'required':
              case 'optional':
                var r = e.shift();
                (t.required = 'required' === r),
                  (t.repeated = 'repeated' === r),
                  (t.type = e.shift()),
                  (t.name = e.shift());
                break;
              case '[':
                t.options = o(e);
                break;
              case ';':
                if (null === t.name) throw new Error('Missing field name');
                if (null === t.type)
                  throw new Error('Missing type in message field: ' + t.name);
                if (-1 === t.tag)
                  throw new Error('Missing tag number in message field: ' + t.name);
                return e.shift(), t;
              default:
                throw new Error('Unexpected token in message field: ' + e[0]);
            }
          throw new Error('No ; found for message field');
        },
        a = function(e) {
          for (
            var t = {
              enums: [],
              options: {},
              messages: [],
              fields: [],
              extends: [],
              extensions: null
            };
            e.length;

          )
            switch (e[0]) {
              case 'map':
              case 'repeated':
              case 'optional':
              case 'required':
                t.fields.push(s(e));
                break;
              case 'enum':
                t.enums.push(p(e));
                break;
              case 'message':
                t.messages.push(l(e));
                break;
              case 'extensions':
                t.extensions = c(e);
                break;
              case 'oneof':
                e.shift();
                var r = e.shift();
                if ('{' !== e[0]) throw new Error('Unexpected token in oneof: ' + e[0]);
                for (e.shift(); '}' !== e[0]; ) {
                  e.unshift('optional');
                  var n = s(e);
                  (n.oneof = r), t.fields.push(n);
                }
                e.shift();
                break;
              case 'extend':
                t.extends.push(u(e));
                break;
              case ';':
                e.shift();
                break;
              case 'reserved':
                for (e.shift(); ';' !== e[0]; ) e.shift();
                break;
              case 'option':
                var i = b(e);
                if (void 0 !== t.options[i.name])
                  throw new Error('Duplicate option ' + i.name);
                t.options[i.name] = i.value;
                break;
              default:
                e.unshift('optional'), t.fields.push(s(e));
            }
          return t;
        },
        u = function(e) {
          return { name: e[1], message: l(e) };
        },
        c = function(e) {
          e.shift();
          var t = Number(e.shift());
          if (isNaN(t)) throw new Error('Invalid from in extensions definition');
          if ('to' !== e.shift())
            throw new Error("Expected keyword 'to' in extensions definition");
          var r = e.shift();
          if (('max' === r && (r = 536870911), (r = Number(r)), isNaN(r)))
            throw new Error('Invalid to in extensions definition');
          if (';' !== e.shift()) throw new Error('Missing ; in extensions definition');
          return { from: t, to: r };
        },
        l = function(e) {
          e.shift();
          var t = 1,
            r = [],
            n = {
              name: e.shift(),
              options: {},
              enums: [],
              extends: [],
              messages: [],
              fields: []
            };
          if ('{' !== e[0]) throw new Error('Expected { but found ' + e[0]);
          for (e.shift(); e.length; ) {
            if (('{' === e[0] ? t++ : '}' === e[0] && t--, !t))
              return (
                e.shift(),
                (r = a(r)),
                (n.enums = r.enums),
                (n.messages = r.messages),
                (n.fields = r.fields),
                (n.extends = r.extends),
                (n.extensions = r.extensions),
                (n.options = r.options),
                n
              );
            r.push(e.shift());
          }
          if (t) throw new Error('No closing tag for message');
        },
        d = function(e) {
          e.shift();
          var t = e.shift();
          if (';' !== e[0]) throw new Error('Expected ; but found ' + e[0]);
          return e.shift(), t;
        },
        f = function(e) {
          if ((e.shift(), '=' !== e[0])) throw new Error('Expected = but found ' + e[0]);
          e.shift();
          var t = e.shift();
          switch (t) {
            case '"proto2"':
              t = 2;
              break;
            case '"proto3"':
              t = 3;
              break;
            default:
              throw new Error('Expected protobuf syntax version but found ' + t);
          }
          if (';' !== e[0]) throw new Error('Expected ; but found ' + e[0]);
          return e.shift(), t;
        },
        h = function(e) {
          if (e.length < 4)
            throw new Error('Invalid enum value: ' + e.slice(0, 3).join(' '));
          if ('=' !== e[1]) throw new Error('Expected = but found ' + e[1]);
          if (';' !== e[3] && '[' !== e[3])
            throw new Error('Expected ; or [ but found ' + e[1]);
          var t = e.shift();
          e.shift();
          var r = { value: null, options: {} };
          return (
            (r.value = Number(e.shift())),
            '[' === e[0] && (r.options = o(e)),
            e.shift(),
            { name: t, val: r }
          );
        },
        p = function(e) {
          e.shift();
          var t = {},
            r = { name: e.shift(), values: {}, options: {} };
          if ('{' !== e[0]) throw new Error('Expected { but found ' + e[0]);
          for (e.shift(); e.length; ) {
            if ('}' === e[0]) return e.shift(), ';' === e[0] && e.shift(), r;
            if ('option' !== e[0]) {
              var n = h(e);
              r.values[n.name] = n.val;
            } else (t = b(e)), (r.options[t.name] = t.value);
          }
          throw new Error('No closing tag for enum');
        },
        b = function(e) {
          for (
            var t = null,
              r = null,
              n = function(e) {
                return 'true' === e || ('false' !== e && e.replace(/^"+|"+$/gm, ''));
              };
            e.length;

          ) {
            if (';' === e[0]) return e.shift(), { name: t, value: r };
            switch (e[0]) {
              case 'option':
                e.shift();
                var i = '(' === e[0];
                if ((i && e.shift(), (t = e.shift()), i)) {
                  if (')' !== e[0]) throw new Error('Expected ) but found ' + e[0]);
                  e.shift();
                }
                '.' === e[0][0] && (t += e.shift());
                break;
              case '=':
                if ((e.shift(), null === t))
                  throw new Error('Expected key for option with value: ' + e[0]);
                if (
                  ((r = n(e.shift())),
                  'optimize_for' === t && !/^(SPEED|CODE_SIZE|LITE_RUNTIME)$/.test(r))
                )
                  throw new Error('Unexpected value for option optimize_for: ' + r);
                '{' === r && (r = m(e));
                break;
              default:
                throw new Error('Unexpected token in option: ' + e[0]);
            }
          }
        },
        m = function(e) {
          for (
            var t = function(e) {
                return 'true' === e || ('false' !== e && e.replace(/^"+|"+$/gm, ''));
              },
              r = {};
            e.length;

          ) {
            if ('}' === e[0]) return e.shift(), r;
            var n = '(' === e[0];
            n && e.shift();
            var i = e.shift();
            if (n) {
              if (')' !== e[0]) throw new Error('Expected ) but found ' + e[0]);
              e.shift();
            }
            var o = null;
            switch (e[0]) {
              case ':':
                if (void 0 !== r[i]) throw new Error('Duplicate option map key ' + i);
                e.shift(),
                  '{' === (o = t(e.shift())) && (o = m(e)),
                  (r[i] = o),
                  ';' === e[0] && e.shift();
                break;
              case '{':
                if (
                  (e.shift(),
                  (o = m(e)),
                  void 0 === r[i] && (r[i] = []),
                  !Array.isArray(r[i]))
                )
                  throw new Error('Duplicate option map key ' + i);
                r[i].push(o);
                break;
              default:
                throw new Error('Unexpected token in option map: ' + e[0]);
            }
          }
          throw new Error('No closing tag for option map');
        },
        g = function(e) {
          e.shift();
          var t = e.shift().replace(/^"+|"+$/gm, '');
          if (';' !== e[0])
            throw new Error('Unexpected token: ' + e[0] + '. Expected ";"');
          return e.shift(), t;
        },
        y = function(e) {
          e.shift();
          var t = { name: e.shift(), methods: [], options: {} };
          if ('{' !== e[0]) throw new Error('Expected { but found ' + e[0]);
          for (e.shift(); e.length; ) {
            if ('}' === e[0]) return e.shift(), ';' === e[0] && e.shift(), t;
            switch (e[0]) {
              case 'option':
                var r = b(e);
                if (void 0 !== t.options[r.name])
                  throw new Error('Duplicate option ' + r.name);
                t.options[r.name] = r.value;
                break;
              case 'rpc':
                t.methods.push(v(e));
                break;
              default:
                throw new Error('Unexpected token in service: ' + e[0]);
            }
          }
          throw new Error('No closing tag for service');
        },
        v = function(e) {
          e.shift();
          var t = {
            name: e.shift(),
            input_type: null,
            output_type: null,
            client_streaming: !1,
            server_streaming: !1,
            options: {}
          };
          if ('(' !== e[0]) throw new Error('Expected ( but found ' + e[0]);
          if (
            (e.shift(),
            'stream' === e[0] && (e.shift(), (t.client_streaming = !0)),
            (t.input_type = e.shift()),
            ')' !== e[0])
          )
            throw new Error('Expected ) but found ' + e[0]);
          if ((e.shift(), 'returns' !== e[0]))
            throw new Error('Expected returns but found ' + e[0]);
          if ((e.shift(), '(' !== e[0])) throw new Error('Expected ( but found ' + e[0]);
          if (
            (e.shift(),
            'stream' === e[0] && (e.shift(), (t.server_streaming = !0)),
            (t.output_type = e.shift()),
            ')' !== e[0])
          )
            throw new Error('Expected ) but found ' + e[0]);
          if ((e.shift(), ';' === e[0])) return e.shift(), t;
          if ('{' !== e[0]) throw new Error('Expected { but found ' + e[0]);
          for (e.shift(); e.length; ) {
            if ('}' === e[0]) return e.shift(), ';' === e[0] && e.shift(), t;
            if ('option' !== e[0])
              throw new Error('Unexpected token in rpc options: ' + e[0]);
            var r = b(e);
            if (void 0 !== t.options[r.name])
              throw new Error('Duplicate option ' + r.name);
            t.options[r.name] = r.value;
          }
          throw new Error('No closing tag for rpc');
        };
      e.exports = function(e) {
        for (var t = n(e.toString()), r = 0; r < t.length; r++) {
          var o;
          if (/^("|')([^'"]*)$/.test(t[r]))
            for (o = 1 === t[r].length ? r + 1 : r; o < t.length; o++)
              if (/^[^'"\\]*(?:\\.[^'"\\]*)*("|')$/.test(t[o])) {
                t = t
                  .slice(0, r)
                  .concat(t.slice(r, o + 1).join(''))
                  .concat(t.slice(o + 1));
                break;
              }
        }
        for (
          var s = {
              syntax: 3,
              package: null,
              imports: [],
              enums: [],
              messages: [],
              options: {},
              extends: []
            },
            a = !0;
          t.length;

        ) {
          switch (t[0]) {
            case 'package':
              s.package = d(t);
              break;
            case 'syntax':
              if (!a)
                throw new Error('Protobuf syntax version should be first thing in file');
              s.syntax = f(t);
              break;
            case 'message':
              s.messages.push(l(t));
              break;
            case 'enum':
              s.enums.push(p(t));
              break;
            case 'option':
              var c = b(t);
              if (s.options[c.name]) throw new Error('Duplicate option ' + c.name);
              s.options[c.name] = c.value;
              break;
            case 'import':
              s.imports.push(g(t));
              break;
            case 'extend':
              s.extends.push(u(t));
              break;
            case 'service':
              s.services || (s.services = []), s.services.push(y(t));
              break;
            default:
              throw new Error('Unexpected token: ' + t[0]);
          }
          a = !1;
        }
        return (
          s.extends.forEach(function(e) {
            s.messages.forEach(function(t) {
              t.name === e.name &&
                e.message.fields.forEach(function(e) {
                  if (
                    !t.extensions ||
                    e.tag < t.extensions.from ||
                    e.tag > t.extensions.to
                  )
                    throw new Error(
                      t.name + ' does not declare ' + e.tag + ' as an extension number'
                    );
                  t.fields.push(e);
                });
            });
          }),
          s.messages.forEach(function(e) {
            e.fields.forEach(function(t) {
              var r, n, o, a;
              if (t.options && 'true' === t.options.packed && -1 === i.indexOf(t.type)) {
                if (-1 === t.type.indexOf('.')) {
                  if (
                    e.enums &&
                    e.enums.some(function(e) {
                      return e.name === t.type;
                    })
                  )
                    return;
                } else {
                  if ((r = t.type.split('.')).length > 2)
                    throw new Error('what is this?');
                  if (
                    ((n = r[0]),
                    (o = r[1]),
                    s.messages.some(function(e) {
                      if (e.name === n) return (a = e), e;
                    }),
                    a &&
                      a.enums &&
                      a.enums.some(function(e) {
                        return e.name === o;
                      }))
                  )
                    return;
                }
                throw new Error(
                  'Fields of type ' +
                    t.type +
                    ' cannot be declared [packed=true]. Only repeated fields of primitive numeric types (types which use the varint, 32-bit, or 64-bit wire types) can be declared "packed". See https://developers.google.com/protocol-buffers/docs/encoding#optional'
                );
              }
            });
          }),
          s
        );
      };
    },
    '../../node_modules/protocol-buffers-schema/stringify.js': function(e, t) {
      var r = function(e, t) {
          var r = e.repeated ? 'repeated' : e.required ? 'required' : 'optional';
          'map' === e.type && (r = 'map<' + e.map.from + ',' + e.map.to + '>'),
            e.oneof && (r = '');
          var n = Object.keys(e.options || {})
            .map(function(t) {
              return t + ' = ' + e.options[t];
            })
            .join(',');
          return (
            n && (n = ' [' + n + ']'),
            t.push(
              (r ? r + ' ' : '') +
                ('map' === e.map ? '' : e.type + ' ') +
                e.name +
                ' = ' +
                e.tag +
                n +
                ';'
            ),
            t
          );
        },
        n = function(e, t) {
          t.push('message ' + e.name + ' {'),
            e.options || (e.options = {}),
            s(e.options, t),
            e.enums || (e.enums = []),
            e.enums.forEach(function(e) {
              t.push(i(e, []));
            }),
            e.messages || (e.messages = []),
            e.messages.forEach(function(e) {
              t.push(n(e, []));
            });
          var o = {};
          return (
            e.fields || (e.fields = []),
            e.fields.forEach(function(e) {
              e.oneof
                ? (o[e.oneof] || (o[e.oneof] = []), o[e.oneof].push(r(e, [])))
                : t.push(r(e, []));
            }),
            Object.keys(o).forEach(function(e) {
              o[e].unshift('oneof ' + e + ' {'), o[e].push('}'), t.push(o[e]);
            }),
            t.push('}', ''),
            t
          );
        },
        i = function(e, t) {
          t.push('enum ' + e.name + ' {'), e.options || (e.options = {});
          var r = s(e.options, []);
          return (
            r.length > 1 && t.push(r.slice(0, -1)),
            Object.keys(e.values).map(function(r) {
              var n = o(e.values[r]);
              t.push([r + ' = ' + n + ';']);
            }),
            t.push('}', ''),
            t
          );
        },
        o = function(e, t) {
          var r = Object.keys(e.options || {})
            .map(function(t) {
              return t + ' = ' + e.options[t];
            })
            .join(',');
          return r && (r = ' [' + r + ']'), e.value + r;
        },
        s = function(e, t) {
          var r = Object.keys(e);
          return (
            r.forEach(function(r) {
              var n = e[r];
              ~r.indexOf('.') && (r = '(' + r + ')');
              var i = typeof n;
              'object' === i
                ? (n = a(n, [])).length && t.push('option ' + r + ' = {', n, '};')
                : ('string' === i && 'optimize_for' !== r && (n = '"' + n + '"'),
                  t.push('option ' + r + ' = ' + n + ';'));
            }),
            r.length > 0 && t.push(''),
            t
          );
        },
        a = function(e, t) {
          return (
            Object.keys(e).forEach(function(r) {
              var n = e[r],
                i = typeof n;
              'object' === i
                ? Array.isArray(n)
                  ? n.forEach(function(e) {
                      (e = a(e, [])).length && t.push(r + ' {', e, '}');
                    })
                  : (n = a(n, [])).length && t.push(r + ' {', n, '}')
                : ('string' === i && (n = '"' + n + '"'), t.push(r + ': ' + n));
            }),
            t
          );
        },
        u = function(e, t) {
          var r = 'rpc ' + e.name + '(';
          e.client_streaming && (r += 'stream '),
            (r += e.input_type + ') returns ('),
            e.server_streaming && (r += 'stream '),
            (r += e.output_type + ')'),
            e.options || (e.options = {});
          var n = s(e.options, []);
          return (
            n.length > 1 ? t.push(r + ' {', n.slice(0, -1), '}') : t.push(r + ';'), t
          );
        },
        c = function(e) {
          return function(t) {
            return Array.isArray(t) ? t.map(c(e + '  ')).join('\n') : e + t;
          };
        };
      e.exports = function(e) {
        var t = [];
        return (
          t.push('syntax = "proto' + e.syntax + '";', ''),
          e.package && t.push('package ' + e.package + ';', ''),
          e.options || (e.options = {}),
          s(e.options, t),
          e.enums || (e.enums = []),
          e.enums.forEach(function(e) {
            i(e, t);
          }),
          e.messages || (e.messages = []),
          e.messages.forEach(function(e) {
            n(e, t);
          }),
          e.services &&
            e.services.forEach(function(e) {
              !(function(e, t) {
                t.push('service ' + e.name + ' {'),
                  e.options || (e.options = {}),
                  s(e.options, t),
                  e.methods || (e.methods = []),
                  e.methods.forEach(function(e) {
                    t.push(u(e, []));
                  }),
                  t.push('}', '');
              })(e, t);
            }),
          t.map(c('')).join('\n')
        );
      };
    },
    '../../node_modules/protocol-buffers-schema/tokenize.js': function(e, t) {
      e.exports = function(e) {
        var t,
          r = function(e) {
            return e.trim();
          };
        return e
          .replace(/([;,{}()=:[\]<>]|\/\*|\*\/)/g, ' $1 ')
          .split(/\n/)
          .map(r)
          .filter(Boolean)
          .map(function(e) {
            var t = e.indexOf('//');
            return t > -1 ? e.slice(0, t) : e;
          })
          .map(r)
          .filter(Boolean)
          .join('\n')
          .split(/\s+|\n+/gm)
          .filter(
            ((t = !1),
            function(e) {
              return '/*' === e ? ((t = !0), !1) : '*/' === e ? ((t = !1), !1) : !t;
            })
          );
      };
    },
    '../../node_modules/redux-form/es/Field.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/extends.js'),
        i = r.n(n),
        o = r('../../node_modules/@babel/runtime/helpers/createClass.js'),
        s = r.n(o),
        a = r('../../node_modules/@babel/runtime/helpers/inheritsLoose.js'),
        u = r.n(a),
        c = r('../../node_modules/react/index.js'),
        l = r.n(c),
        d = r('../../node_modules/prop-types/index.js'),
        f = r.n(d),
        h = r('../../node_modules/invariant/browser.js'),
        p = r.n(h),
        b = r(
          '../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js'
        ),
        m = r.n(b),
        g = r('../../node_modules/react-redux/es/index.js'),
        y = function(e, t, r, n) {
          var o = t.value;
          return 'checkbox' === e
            ? i()({}, t, { checked: !!o })
            : 'radio' === e
            ? i()({}, t, { checked: n(o, r), value: r })
            : 'select-multiple' === e
            ? i()({}, t, { value: o || [] })
            : 'file' === e
            ? i()({}, t, { value: o || void 0 })
            : t;
        },
        v = function(e, t, r) {
          var n = e.getIn,
            o = e.toJS,
            s = e.deepEqual,
            a = r.asyncError,
            u = r.asyncValidating,
            c = r.onBlur,
            l = r.onChange,
            d = r.onDrop,
            f = r.onDragStart,
            h = r.dirty,
            p = r.dispatch,
            b = r.onFocus,
            g = r.form,
            v = r.format,
            w = r.initial,
            k = (r.parse, r.pristine),
            _ = r.props,
            S = r.state,
            j = r.submitError,
            E = r.submitFailed,
            x = r.submitting,
            O = r.syncError,
            A = r.syncWarning,
            C = (r.validate, r.value),
            R = r._value,
            B =
              (r.warn,
              m()(r, [
                'asyncError',
                'asyncValidating',
                'onBlur',
                'onChange',
                'onDrop',
                'onDragStart',
                'dirty',
                'dispatch',
                'onFocus',
                'form',
                'format',
                'initial',
                'parse',
                'pristine',
                'props',
                'state',
                'submitError',
                'submitFailed',
                'submitting',
                'syncError',
                'syncWarning',
                'validate',
                'value',
                '_value',
                'warn'
              ])),
            P = O || a || j,
            N = A,
            I = (function(e, r) {
              if (null === r) return e;
              var n = null == e ? '' : e;
              return r ? r(e, t) : n;
            })(C, v);
          return {
            input: y(
              B.type,
              {
                name: t,
                onBlur: c,
                onChange: l,
                onDragStart: f,
                onDrop: d,
                onFocus: b,
                value: I
              },
              R,
              s
            ),
            meta: i()({}, o(S), {
              active: !(!S || !n(S, 'active')),
              asyncValidating: u,
              autofilled: !(!S || !n(S, 'autofilled')),
              dirty: h,
              dispatch: p,
              error: P,
              form: g,
              initial: w,
              warning: N,
              invalid: !!P,
              pristine: k,
              submitting: !!x,
              submitFailed: !!E,
              touched: !(!S || !n(S, 'touched')),
              valid: !P,
              visited: !(!S || !n(S, 'visited'))
            }),
            custom: i()({}, B, {}, _)
          };
        },
        w = r('../../node_modules/redux-form/es/events/isEvent.js'),
        k = function(e, t) {
          if (Object(w.a)(e)) {
            if (!t && e.nativeEvent && void 0 !== e.nativeEvent.text)
              return e.nativeEvent.text;
            if (t && void 0 !== e.nativeEvent) return e.nativeEvent.text;
            var r = e,
              n = r.target,
              i = n.type,
              o = n.value,
              s = n.checked,
              a = n.files,
              u = r.dataTransfer;
            return 'checkbox' === i
              ? !!s
              : 'file' === i
              ? a || (u && u.files)
              : 'select-multiple' === i
              ? (function(e) {
                  var t = [];
                  if (e)
                    for (var r = 0; r < e.length; r++) {
                      var n = e[r];
                      n.selected && t.push(n.value);
                    }
                  return t;
                })(e.target.options)
              : o;
          }
          return e;
        },
        _ =
          'undefined' != typeof window &&
          window.navigator &&
          window.navigator.product &&
          'ReactNative' === window.navigator.product,
        S = function(e, t) {
          var r = t.name,
            n = t.parse,
            i = t.normalize,
            o = k(e, _);
          return n && (o = n(o, r)), i && (o = i(r, o)), o;
        },
        j = r('../../node_modules/redux-form/es/structure/plain/index.js'),
        E = r('../../node_modules/react-is/index.js'),
        x = function(e, t, r) {
          return Object(E.isValidElementType)(e[t])
            ? null
            : new Error('Invalid prop `' + t + '` supplied to `' + r + '`.');
        },
        O = ['_reduxForm'],
        A = function(e) {
          return e && 'object' == typeof e;
        },
        C = function(e) {
          return e && 'function' == typeof e;
        },
        R = function(e) {
          A(e) && C(e.preventDefault) && e.preventDefault();
        },
        B = function(e, t) {
          if (A(e) && A(e.dataTransfer) && C(e.dataTransfer.getData))
            return e.dataTransfer.getData(t);
        },
        P = function(e, t, r) {
          A(e) &&
            A(e.dataTransfer) &&
            C(e.dataTransfer.setData) &&
            e.dataTransfer.setData(t, r);
        },
        N = function(e) {
          var t = e.deepEqual,
            r = e.getIn,
            n = (function(r) {
              function n() {
                for (var e, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                  n[o] = arguments[o];
                return (
                  ((e = r.call.apply(r, [this].concat(n)) || this).ref = l.a.createRef()),
                  (e.isPristine = function() {
                    return e.props.pristine;
                  }),
                  (e.getValue = function() {
                    return e.props.value;
                  }),
                  (e.handleChange = function(t) {
                    var r = e.props,
                      n = r.name,
                      o = r.dispatch,
                      s = r.parse,
                      a = r.normalize,
                      u = r.onChange,
                      c = r._reduxForm,
                      l = r.value,
                      d = S(t, { name: n, parse: s, normalize: a }),
                      f = !1;
                    if (u)
                      if (!_ && Object(w.a)(t))
                        u(
                          i()({}, t, {
                            preventDefault: function() {
                              return (f = !0), R(t);
                            }
                          }),
                          d,
                          l,
                          n
                        );
                      else {
                        var h = u(t, d, l, n);
                        _ && (f = h);
                      }
                    f ||
                      (o(c.change(n, d)),
                      c.asyncValidate && c.asyncValidate(n, d, 'change'));
                  }),
                  (e.handleFocus = function(t) {
                    var r = e.props,
                      n = r.name,
                      o = r.dispatch,
                      s = r.onFocus,
                      a = r._reduxForm,
                      u = !1;
                    s &&
                      (_
                        ? (u = s(t, n))
                        : s(
                            i()({}, t, {
                              preventDefault: function() {
                                return (u = !0), R(t);
                              }
                            }),
                            n
                          )),
                      u || o(a.focus(n));
                  }),
                  (e.handleBlur = function(t) {
                    var r = e.props,
                      n = r.name,
                      o = r.dispatch,
                      s = r.parse,
                      a = r.normalize,
                      u = r.onBlur,
                      c = r._reduxForm,
                      l = r._value,
                      d = r.value,
                      f = S(t, { name: n, parse: s, normalize: a });
                    f === l && void 0 !== l && (f = d);
                    var h = !1;
                    u &&
                      (_
                        ? (h = u(t, f, d, n))
                        : u(
                            i()({}, t, {
                              preventDefault: function() {
                                return (h = !0), R(t);
                              }
                            }),
                            f,
                            d,
                            n
                          )),
                      h ||
                        (o(c.blur(n, f)),
                        c.asyncValidate && c.asyncValidate(n, f, 'blur'));
                  }),
                  (e.handleDragStart = function(t) {
                    var r = e.props,
                      n = r.name,
                      i = r.onDragStart,
                      o = r.value;
                    P(t, 'text', null == o ? '' : o), i && i(t, n);
                  }),
                  (e.handleDrop = function(t) {
                    var r = e.props,
                      n = r.name,
                      o = r.dispatch,
                      s = r.onDrop,
                      a = r._reduxForm,
                      u = r.value,
                      c = B(t, 'text'),
                      l = !1;
                    s &&
                      s(
                        i()({}, t, {
                          preventDefault: function() {
                            return (l = !0), R(t);
                          }
                        }),
                        c,
                        u,
                        n
                      ),
                      l || (o(a.change(n, c)), R(t));
                  }),
                  e
                );
              }
              u()(n, r);
              var o = n.prototype;
              return (
                (o.shouldComponentUpdate = function(e) {
                  var r = this,
                    n = Object.keys(e),
                    i = Object.keys(this.props);
                  return !!(
                    this.props.children ||
                    e.children ||
                    n.length !== i.length ||
                    n.some(function(n) {
                      return ~(e.immutableProps || []).indexOf(n)
                        ? r.props[n] !== e[n]
                        : !~O.indexOf(n) && !t(r.props[n], e[n]);
                    })
                  );
                }),
                (o.getRenderedComponent = function() {
                  return this.ref.current;
                }),
                (o.render = function() {
                  var t = this.props,
                    r = t.component,
                    n = t.forwardRef,
                    o = t.name,
                    s = t._reduxForm,
                    a =
                      (t.normalize,
                      t.onBlur,
                      t.onChange,
                      t.onFocus,
                      t.onDragStart,
                      t.onDrop,
                      t.immutableProps,
                      m()(t, [
                        'component',
                        'forwardRef',
                        'name',
                        '_reduxForm',
                        'normalize',
                        'onBlur',
                        'onChange',
                        'onFocus',
                        'onDragStart',
                        'onDrop',
                        'immutableProps'
                      ])),
                    u = v(
                      e,
                      o,
                      i()({}, a, {
                        form: s.form,
                        onBlur: this.handleBlur,
                        onChange: this.handleChange,
                        onDrop: this.handleDrop,
                        onDragStart: this.handleDragStart,
                        onFocus: this.handleFocus
                      })
                    ),
                    l = u.custom,
                    d = m()(u, ['custom']);
                  if ((n && (l.ref = this.ref), 'string' == typeof r)) {
                    var f = d.input;
                    d.meta;
                    return Object(c.createElement)(r, i()({}, f, {}, l));
                  }
                  return Object(c.createElement)(r, i()({}, d, {}, l));
                }),
                n
              );
            })(c.Component);
          return (
            (n.propTypes = { component: x, props: f.a.object }),
            Object(g.c)(
              function(e, n) {
                var i = n.name,
                  o = n._reduxForm,
                  s = o.initialValues,
                  a = (0, o.getFormState)(e),
                  u = r(a, 'initial.' + i),
                  c = void 0 !== u ? u : s && r(s, i),
                  l = r(a, 'values.' + i),
                  d = r(a, 'submitting'),
                  f = (function(e, t) {
                    var r = j.a.getIn(e, t);
                    return r && r._error ? r._error : r;
                  })(r(a, 'syncErrors'), i),
                  h = (function(e, t) {
                    var n = r(e, t);
                    return n && n._warning ? n._warning : n;
                  })(r(a, 'syncWarnings'), i),
                  p = t(l, c);
                return {
                  asyncError: r(a, 'asyncErrors.' + i),
                  asyncValidating: r(a, 'asyncValidating') === i,
                  dirty: !p,
                  pristine: p,
                  state: r(a, 'fields.' + i),
                  submitError: r(a, 'submitErrors.' + i),
                  submitFailed: r(a, 'submitFailed'),
                  submitting: d,
                  syncError: f,
                  syncWarning: h,
                  initial: c,
                  value: l,
                  _value: n.value
                };
              },
              void 0,
              void 0,
              { forwardRef: !0 }
            )(n)
          );
        },
        I = r('../../node_modules/lodash/isEqualWith.js'),
        T = r.n(I),
        D = function(e, t, r, n, i, o) {
          if (o) return e === t;
        },
        F = function(e, t, r) {
          var n = T()(e.props, t, D),
            i = T()(e.state, r, D);
          return !n || !i;
        },
        U = function(e, t) {
          var r = e._reduxForm.sectionPrefix;
          return r ? r + '.' + t : t;
        },
        L = r('../../node_modules/redux-form/es/ReduxFormContext.js'),
        M = function(e) {
          var t = N(e),
            r = e.setIn,
            n = (function(e) {
              function n(t) {
                var n;
                if (
                  (((n = e.call(this, t) || this).ref = l.a.createRef()),
                  (n.normalize = function(e, t) {
                    var i = n.props.normalize;
                    if (!i) return t;
                    var o = n.props._reduxForm.getValues();
                    return i(t, n.value, r(o, e, t), o, e);
                  }),
                  !t._reduxForm)
                )
                  throw new Error(
                    'Field must be inside a component decorated with reduxForm()'
                  );
                return n;
              }
              u()(n, e);
              var o = n.prototype;
              return (
                (o.componentDidMount = function() {
                  var e = this;
                  this.props._reduxForm.register(
                    this.name,
                    'Field',
                    function() {
                      return e.props.validate;
                    },
                    function() {
                      return e.props.warn;
                    }
                  );
                }),
                (o.shouldComponentUpdate = function(e, t) {
                  return F(this, e, t);
                }),
                (o.UNSAFE_componentWillReceiveProps = function(e) {
                  var t = U(this.props, this.props.name),
                    r = U(e, e.name);
                  (t === r &&
                    j.a.deepEqual(this.props.validate, e.validate) &&
                    j.a.deepEqual(this.props.warn, e.warn)) ||
                    (this.props._reduxForm.unregister(t),
                    this.props._reduxForm.register(
                      r,
                      'Field',
                      function() {
                        return e.validate;
                      },
                      function() {
                        return e.warn;
                      }
                    ));
                }),
                (o.componentWillUnmount = function() {
                  this.props._reduxForm.unregister(this.name);
                }),
                (o.getRenderedComponent = function() {
                  return (
                    p()(
                      this.props.forwardRef,
                      'If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field'
                    ),
                    this.ref.current ? this.ref.current.getRenderedComponent() : void 0
                  );
                }),
                (o.render = function() {
                  return Object(c.createElement)(
                    t,
                    i()({}, this.props, {
                      name: this.name,
                      normalize: this.normalize,
                      ref: this.ref
                    })
                  );
                }),
                s()(n, [
                  {
                    key: 'name',
                    get: function() {
                      return U(this.props, this.props.name);
                    }
                  },
                  {
                    key: 'dirty',
                    get: function() {
                      return !this.pristine;
                    }
                  },
                  {
                    key: 'pristine',
                    get: function() {
                      return !(!this.ref.current || !this.ref.current.isPristine());
                    }
                  },
                  {
                    key: 'value',
                    get: function() {
                      return this.ref.current && this.ref.current.getValue();
                    }
                  }
                ]),
                n
              );
            })(c.Component);
          return (
            (n.propTypes = {
              name: f.a.string.isRequired,
              component: x,
              format: f.a.func,
              normalize: f.a.func,
              onBlur: f.a.func,
              onChange: f.a.func,
              onFocus: f.a.func,
              onDragStart: f.a.func,
              onDrop: f.a.func,
              parse: f.a.func,
              props: f.a.object,
              validate: f.a.oneOfType([f.a.func, f.a.arrayOf(f.a.func)]),
              warn: f.a.oneOfType([f.a.func, f.a.arrayOf(f.a.func)]),
              forwardRef: f.a.bool,
              immutableProps: f.a.arrayOf(f.a.string),
              _reduxForm: f.a.object
            }),
            Object(L.b)(n)
          );
        };
      t.a = M(j.a);
    },
    '../../node_modules/redux-form/es/ReduxFormContext.js': function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return l;
      }),
        r.d(t, 'b', function() {
          return f;
        });
      var n = r('../../node_modules/@babel/runtime/helpers/inheritsLoose.js'),
        i = r.n(n),
        o = r('../../node_modules/@babel/runtime/helpers/extends.js'),
        s = r.n(o),
        a = r(
          '../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js'
        ),
        u = r.n(a),
        c = r('../../node_modules/react/index.js'),
        l = c.createContext(null),
        d = function(e, t) {
          var r = t.forwardedRef,
            n = u()(t, ['forwardedRef']);
          return function(t) {
            return c.createElement(e, s()({}, n, { _reduxForm: t, ref: r }));
          };
        },
        f = function(e) {
          var t = (function(t) {
              function r() {
                return t.apply(this, arguments) || this;
              }
              return (
                i()(r, t),
                (r.prototype.render = function() {
                  return c.createElement(l.Consumer, { children: d(e, this.props) });
                }),
                r
              );
            })(c.Component),
            r = c.forwardRef(function(e, r) {
              return c.createElement(t, s()({}, e, { forwardedRef: r }));
            });
          return (r.displayName = e.displayName || e.name || 'Component'), r;
        };
    },
    '../../node_modules/redux-form/es/events/isEvent.js': function(e, t, r) {
      'use strict';
      t.a = function(e) {
        return !!(e && e.stopPropagation && e.preventDefault);
      };
    },
    '../../node_modules/redux-form/es/reduxForm.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/@babel/runtime/helpers/createClass.js'),
        i = r.n(n),
        o = r('../../node_modules/@babel/runtime/helpers/inheritsLoose.js'),
        s = r.n(o),
        a = r('../../node_modules/@babel/runtime/helpers/extends.js'),
        u = r.n(a),
        c = r(
          '../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js'
        ),
        l = r.n(c),
        d = r('../../node_modules/lodash/merge.js'),
        f = r.n(d),
        h = r('../../node_modules/lodash/mapValues.js'),
        p = r.n(h),
        b = r(
          '../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'
        ),
        m = r.n(b),
        g = r('../../node_modules/invariant/browser.js'),
        y = r.n(g),
        v = r('../../node_modules/is-promise/index.js'),
        w = r.n(v),
        k = r('../../node_modules/prop-types/index.js'),
        _ = r.n(k),
        S = r('../../node_modules/react/index.js'),
        j = r.n(S),
        E = r('../../node_modules/react-redux/es/index.js'),
        x = r('../../node_modules/redux/es/redux.js'),
        O = r('../../node_modules/redux-form/es/actionTypes.js'),
        A = {
          arrayInsert: function(e, t, r, n) {
            return { type: O.a, meta: { form: e, field: t, index: r }, payload: n };
          },
          arrayMove: function(e, t, r, n) {
            return { type: O.b, meta: { form: e, field: t, from: r, to: n } };
          },
          arrayPop: function(e, t) {
            return { type: O.c, meta: { form: e, field: t } };
          },
          arrayPush: function(e, t, r) {
            return { type: O.d, meta: { form: e, field: t }, payload: r };
          },
          arrayRemove: function(e, t, r) {
            return { type: O.e, meta: { form: e, field: t, index: r } };
          },
          arrayRemoveAll: function(e, t) {
            return { type: O.f, meta: { form: e, field: t } };
          },
          arrayShift: function(e, t) {
            return { type: O.g, meta: { form: e, field: t } };
          },
          arraySplice: function(e, t, r, n, i) {
            var o = { type: O.h, meta: { form: e, field: t, index: r, removeNum: n } };
            return void 0 !== i && (o.payload = i), o;
          },
          arraySwap: function(e, t, r, n) {
            if (r === n) throw new Error('Swap indices cannot be equal');
            if (r < 0 || n < 0) throw new Error('Swap indices cannot be negative');
            return { type: O.i, meta: { form: e, field: t, indexA: r, indexB: n } };
          },
          arrayUnshift: function(e, t, r) {
            return { type: O.j, meta: { form: e, field: t }, payload: r };
          },
          autofill: function(e, t, r) {
            return { type: O.k, meta: { form: e, field: t }, payload: r };
          },
          blur: function(e, t, r, n) {
            return { type: O.l, meta: { form: e, field: t, touch: n }, payload: r };
          },
          change: function(e, t, r, n, i) {
            return {
              type: O.m,
              meta: { form: e, field: t, touch: n, persistentSubmitErrors: i },
              payload: r
            };
          },
          clearFields: function(e, t, r) {
            for (
              var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), o = 3;
              o < n;
              o++
            )
              i[o - 3] = arguments[o];
            return {
              type: O.o,
              meta: { form: e, keepTouched: t, persistentSubmitErrors: r, fields: i }
            };
          },
          clearSubmit: function(e) {
            return { type: O.p, meta: { form: e } };
          },
          clearSubmitErrors: function(e) {
            return { type: O.q, meta: { form: e } };
          },
          clearAsyncError: function(e, t) {
            return { type: O.n, meta: { form: e, field: t } };
          },
          destroy: function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return { type: O.r, meta: { form: t } };
          },
          focus: function(e, t) {
            return { type: O.s, meta: { form: e, field: t } };
          },
          initialize: function(e, t, r, n) {
            return (
              void 0 === n && (n = {}),
              r instanceof Object && ((n = r), (r = !1)),
              { type: O.t, meta: u()({ form: e, keepDirty: r }, n), payload: t }
            );
          },
          registerField: function(e, t, r) {
            return { type: O.u, meta: { form: e }, payload: { name: t, type: r } };
          },
          reset: function(e) {
            return { type: O.v, meta: { form: e } };
          },
          resetSection: function(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            return { type: O.w, meta: { form: e, sections: r } };
          },
          startAsyncValidation: function(e, t) {
            return { type: O.z, meta: { form: e, field: t } };
          },
          startSubmit: function(e) {
            return { type: O.A, meta: { form: e } };
          },
          stopAsyncValidation: function(e, t) {
            return {
              type: O.B,
              meta: { form: e },
              payload: t,
              error: !(!t || !Object.keys(t).length)
            };
          },
          stopSubmit: function(e, t) {
            return {
              type: O.C,
              meta: { form: e },
              payload: t,
              error: !(!t || !Object.keys(t).length)
            };
          },
          submit: function(e) {
            return { type: O.D, meta: { form: e } };
          },
          setSubmitFailed: function(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            return { type: O.x, meta: { form: e, fields: r }, error: !0 };
          },
          setSubmitSucceeded: function(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            return { type: O.y, meta: { form: e, fields: r }, error: !1 };
          },
          touch: function(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            return { type: O.E, meta: { form: e, fields: r } };
          },
          unregisterField: function(e, t, r) {
            return (
              void 0 === r && (r = !0),
              { type: O.F, meta: { form: e }, payload: { name: t, destroyOnUnmount: r } }
            );
          },
          untouch: function(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            return { type: O.G, meta: { form: e, fields: r } };
          },
          updateSyncErrors: function(e, t, r) {
            return (
              void 0 === t && (t = {}),
              { type: O.H, meta: { form: e }, payload: { syncErrors: t, error: r } }
            );
          },
          updateSyncWarnings: function(e, t, r) {
            return (
              void 0 === t && (t = {}),
              { type: O.I, meta: { form: e }, payload: { syncWarnings: t, warning: r } }
            );
          }
        },
        C = function(e, t, r, n) {
          t(n);
          var i = e();
          if (!w()(i))
            throw new Error(
              'asyncValidate function passed to reduxForm must return a promise'
            );
          var o = function(e) {
            return function(t) {
              if (e) {
                if (t && Object.keys(t).length) return r(t), t;
                throw (r(),
                new Error(
                  'Asynchronous validation promise was rejected without errors.'
                ));
              }
              return r(), Promise.resolve();
            };
          };
          return i.then(o(!1), o(!0));
        },
        R = function(e) {
          var t = e.initialized,
            r = e.trigger,
            n = e.pristine;
          if (!e.syncValidationPasses) return !1;
          switch (r) {
            case 'blur':
            case 'change':
              return !0;
            case 'submit':
              return !n || !t;
            default:
              return !1;
          }
        },
        B = function(e) {
          var t = e.values,
            r = e.nextProps,
            n = e.initialRender,
            i = e.lastFieldValidatorKeys,
            o = e.fieldValidatorKeys,
            s = e.structure;
          return !!n || !s.deepEqual(t, r && r.values) || !s.deepEqual(i, o);
        },
        P = function(e) {
          var t = e.values,
            r = e.nextProps,
            n = e.initialRender,
            i = e.lastFieldValidatorKeys,
            o = e.fieldValidatorKeys,
            s = e.structure;
          return !!n || !s.deepEqual(t, r && r.values) || !s.deepEqual(i, o);
        },
        N = function(e) {
          var t = e.values,
            r = e.nextProps,
            n = e.initialRender,
            i = e.lastFieldValidatorKeys,
            o = e.fieldValidatorKeys,
            s = e.structure;
          return !!n || !s.deepEqual(t, r && r.values) || !s.deepEqual(i, o);
        },
        I = r('../../node_modules/redux-form/es/events/isEvent.js'),
        T = function(e) {
          var t = Object(I.a)(e);
          return t && e.preventDefault(), t;
        },
        D = function(e) {
          return function(t) {
            for (
              var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
              i < r;
              i++
            )
              n[i - 1] = arguments[i];
            return T(t) ? e.apply(void 0, n) : e.apply(void 0, [t].concat(n));
          };
        },
        F = r('../../node_modules/redux-form/es/structure/plain/index.js'),
        U = function(e, t, r, n, i) {
          for (
            var o = (function(e) {
                return Array.isArray(e) ? e : [e];
              })(n),
              s = 0;
            s < o.length;
            s++
          ) {
            var a = o[s](e, t, r, i);
            if (a) return a;
          }
        },
        L = function(e, t) {
          var r = t.getIn;
          return function(t, n) {
            var i = {};
            return (
              Object.keys(e).forEach(function(o) {
                var s = r(t, o),
                  a = U(s, t, n, e[o], o);
                a && (i = F.a.setIn(i, o, a));
              }),
              i
            );
          };
        };
      function M(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function K(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var H = (function(e) {
          function t(t) {
            var r;
            return ((r = e.call(this, 'Submit Validation Failed') || this).errors = t), r;
          }
          return s()(t, e), t;
        })(
          (function(e) {
            function t() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
              M(this, t);
              var r = K(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
              return (
                Object.defineProperty(r, 'message', {
                  configurable: !0,
                  enumerable: !1,
                  value: e,
                  writable: !0
                }),
                Object.defineProperty(r, 'name', {
                  configurable: !0,
                  enumerable: !1,
                  value: r.constructor.name,
                  writable: !0
                }),
                Error.hasOwnProperty('captureStackTrace')
                  ? (Error.captureStackTrace(r, r.constructor), K(r))
                  : (Object.defineProperty(r, 'stack', {
                      configurable: !0,
                      enumerable: !1,
                      value: new Error(e).stack,
                      writable: !0
                    }),
                    r)
              );
            }
            return (
              (function(e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function, not ' + typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              t
            );
          })(
            (function(e) {
              function t() {
                e.apply(this, arguments);
              }
              return (
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e),
                t
              );
            })(Error)
          )
        ),
        W = function(e) {
          return e && e.name === H.name;
        },
        V = function(e, t, r) {
          var n,
            i = r.dispatch,
            o = r.submitAsSideEffect,
            s = r.onSubmitFail,
            a = r.onSubmitSuccess,
            u = r.startSubmit,
            c = r.stopSubmit,
            l = r.setSubmitFailed,
            d = r.setSubmitSucceeded,
            f = r.values;
          try {
            n = e(f, i, r);
          } catch (e) {
            var h = W(e) ? e.errors : void 0;
            if ((c(h), l.apply(void 0, t), s && s(h, i, e, r), h || s)) return h;
            throw e;
          }
          if (o) n && i(n);
          else {
            if (w()(n))
              return (
                u(),
                n.then(
                  function(e) {
                    return c(), d(), a && a(e, i, r), e;
                  },
                  function(e) {
                    var n = W(e) ? e.errors : void 0;
                    if ((c(n), l.apply(void 0, t), s && s(n, i, e, r), n || s)) return n;
                    throw e;
                  }
                )
              );
            d(), a && a(n, i, r);
          }
          return n;
        },
        z = function(e, t, r, n, i) {
          var o = t.dispatch,
            s = t.onSubmitFail,
            a = t.setSubmitFailed,
            c = t.syncErrors,
            l = t.asyncErrors,
            d = t.touch,
            f = t.persistentSubmitErrors;
          if ((d.apply(void 0, i), r || f)) {
            var h = n && n();
            return h
              ? h
                  .then(function(r) {
                    if (r) throw r;
                    return V(e, i, t);
                  })
                  .catch(function(e) {
                    return a.apply(void 0, i), s && s(e, o, null, t), Promise.reject(e);
                  })
              : V(e, i, t);
          }
          a.apply(void 0, i);
          var p = (function(e) {
            var t = e.asyncErrors,
              r = e.syncErrors;
            return t && 'function' == typeof t.merge
              ? t.merge(r).toJS()
              : u()({}, t, {}, r);
          })({ asyncErrors: l, syncErrors: c });
          return s && s(p, o, null, t), p;
        },
        G = function(e) {
          var t = e.getIn;
          return function(e, r, n, i) {
            return (
              !!(r || n || i) &&
              (function(e, t) {
                switch (t) {
                  case 'Field':
                    return [e, e + '._error'];
                  case 'FieldArray':
                    return [e + '._error'];
                  default:
                    throw new Error('Unknown field type');
                }
              })(t(e, 'name'), t(e, 'type')).some(function(e) {
                return t(r, e) || t(n, e) || t(i, e);
              })
            );
          };
        },
        J = function(e) {
          var t = e.getIn,
            r = e.keys,
            n = G(e);
          return function(e, i, o) {
            return (
              void 0 === o && (o = !1),
              function(s) {
                var a = (
                  i ||
                  function(e) {
                    return t(e, 'form');
                  }
                )(s);
                if (t(a, e + '.syncError')) return !1;
                if (!o && t(a, e + '.error')) return !1;
                var u = t(a, e + '.syncErrors'),
                  c = t(a, e + '.asyncErrors'),
                  l = o ? void 0 : t(a, e + '.submitErrors');
                if (!u && !c && !l) return !0;
                var d = t(a, e + '.registeredFields');
                return (
                  !d ||
                  !r(d)
                    .filter(function(e) {
                      return t(d, "['" + e + "'].count") > 0;
                    })
                    .some(function(e) {
                      return n(t(d, "['" + e + "']"), u, c, l);
                    })
                );
              }
            );
          };
        },
        q = function(e) {
          return e.displayName || e.name || 'Component';
        },
        Y = r('../../node_modules/redux-form/es/util/isHotReloading.js'),
        X = r('../../node_modules/redux-form/es/ReduxFormContext.js'),
        Z = A.arrayInsert,
        Q = A.arrayMove,
        $ = A.arrayPop,
        ee = A.arrayPush,
        te = A.arrayRemove,
        re = A.arrayRemoveAll,
        ne = A.arrayShift,
        ie = A.arraySplice,
        oe = A.arraySwap,
        se = A.arrayUnshift,
        ae = A.blur,
        ue = A.change,
        ce = A.focus,
        le = l()(A, [
          'arrayInsert',
          'arrayMove',
          'arrayPop',
          'arrayPush',
          'arrayRemove',
          'arrayRemoveAll',
          'arrayShift',
          'arraySplice',
          'arraySwap',
          'arrayUnshift',
          'blur',
          'change',
          'focus'
        ]),
        de = {
          arrayInsert: Z,
          arrayMove: Q,
          arrayPop: $,
          arrayPush: ee,
          arrayRemove: te,
          arrayRemoveAll: re,
          arrayShift: ne,
          arraySplice: ie,
          arraySwap: oe,
          arrayUnshift: se
        },
        fe = [].concat(Object.keys(A), [
          'array',
          'asyncErrors',
          'initialValues',
          'syncErrors',
          'syncWarnings',
          'values',
          'registeredFields'
        ]),
        he = function(e) {
          if (!e || 'function' != typeof e)
            throw new Error(
              'You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop'
            );
          return e;
        },
        pe = function(e) {
          var t = e.deepEqual,
            r = e.empty,
            n = e.getIn,
            o = e.setIn,
            a = e.keys,
            c = e.fromJS,
            d = e.toJS,
            h = J(e);
          return function(b) {
            var g = u()(
              {
                touchOnBlur: !0,
                touchOnChange: !1,
                persistentSubmitErrors: !1,
                destroyOnUnmount: !0,
                shouldAsyncValidate: R,
                shouldValidate: B,
                shouldError: P,
                shouldWarn: N,
                enableReinitialize: !1,
                keepDirtyOnReinitialize: !1,
                updateUnregisteredFields: !1,
                getFormState: function(e) {
                  return n(e, 'form');
                },
                pure: !0,
                forceUnregisterOnUnmount: !1,
                submitAsSideEffect: !1
              },
              b
            );
            return function(b) {
              var v = (function(r) {
                function i() {
                  for (var t, i = arguments.length, s = new Array(i), c = 0; c < i; c++)
                    s[c] = arguments[c];
                  return (
                    ((t =
                      r.call.apply(r, [this].concat(s)) ||
                      this).wrapped = j.a.createRef()),
                    (t.destroyed = !1),
                    (t.fieldCounts = {}),
                    (t.fieldValidators = {}),
                    (t.lastFieldValidatorKeys = []),
                    (t.fieldWarners = {}),
                    (t.lastFieldWarnerKeys = []),
                    (t.innerOnSubmit = void 0),
                    (t.submitPromise = void 0),
                    (t.getValues = function() {
                      return t.props.values;
                    }),
                    (t.isValid = function() {
                      return t.props.valid;
                    }),
                    (t.isPristine = function() {
                      return t.props.pristine;
                    }),
                    (t.register = function(e, r, n, i) {
                      var o = (t.fieldCounts[e] || 0) + 1;
                      (t.fieldCounts[e] = o),
                        t.props.registerField(e, r),
                        n && (t.fieldValidators[e] = n),
                        i && (t.fieldWarners[e] = i);
                    }),
                    (t.unregister = function(e) {
                      var r = t.fieldCounts[e];
                      if (
                        (1 === r
                          ? delete t.fieldCounts[e]
                          : null != r && (t.fieldCounts[e] = r - 1),
                        !t.destroyed)
                      ) {
                        var n = t.props,
                          i = n.destroyOnUnmount,
                          o = n.forceUnregisterOnUnmount,
                          s = n.unregisterField;
                        i || o
                          ? (s(e, i),
                            t.fieldCounts[e] ||
                              (delete t.fieldValidators[e],
                              delete t.fieldWarners[e],
                              (t.lastFieldValidatorKeys = t.lastFieldValidatorKeys.filter(
                                function(t) {
                                  return t !== e;
                                }
                              ))))
                          : s(e, !1);
                      }
                    }),
                    (t.getFieldList = function(e) {
                      var r = t.props.registeredFields;
                      if (!r) return [];
                      var i = a(r);
                      return (
                        e &&
                          (e.excludeFieldArray &&
                            (i = i.filter(function(e) {
                              return 'FieldArray' !== n(r, "['" + e + "'].type");
                            })),
                          e.excludeUnregistered &&
                            (i = i.filter(function(e) {
                              return 0 !== n(r, "['" + e + "'].count");
                            }))),
                        d(i)
                      );
                    }),
                    (t.getValidators = function() {
                      var e = {};
                      return (
                        Object.keys(t.fieldValidators).forEach(function(r) {
                          var n = t.fieldValidators[r]();
                          n && (e[r] = n);
                        }),
                        e
                      );
                    }),
                    (t.generateValidator = function() {
                      var r = t.getValidators();
                      return Object.keys(r).length ? L(r, e) : void 0;
                    }),
                    (t.getWarners = function() {
                      var e = {};
                      return (
                        Object.keys(t.fieldWarners).forEach(function(r) {
                          var n = t.fieldWarners[r]();
                          n && (e[r] = n);
                        }),
                        e
                      );
                    }),
                    (t.generateWarner = function() {
                      var r = t.getWarners();
                      return Object.keys(r).length ? L(r, e) : void 0;
                    }),
                    (t.asyncValidate = function(e, r, i) {
                      var s,
                        a,
                        u = t.props,
                        c = u.asyncBlurFields,
                        l = u.asyncChangeFields,
                        d = u.asyncErrors,
                        f = u.asyncValidate,
                        h = u.dispatch,
                        p = u.initialized,
                        b = u.pristine,
                        m = u.shouldAsyncValidate,
                        g = u.startAsyncValidation,
                        y = u.stopAsyncValidation,
                        v = u.syncErrors,
                        w = u.values,
                        k = !e;
                      if (f) {
                        var _ = k ? w : o(w, e, r),
                          S = k || !n(v, e);
                        if (
                          ((s = c && e && ~c.indexOf(e.replace(/\[[0-9]+\]/g, '[]'))),
                          (a = l && e && ~l.indexOf(e.replace(/\[[0-9]+\]/g, '[]'))),
                          (k || (!c && !l) || ('blur' === i ? s : a)) &&
                            m({
                              asyncErrors: d,
                              initialized: p,
                              trigger: k ? 'submit' : i,
                              blurredField: e,
                              pristine: b,
                              syncValidationPasses: S
                            }))
                        )
                          return C(
                            function() {
                              return f(_, h, t.props, e);
                            },
                            g,
                            y,
                            e
                          );
                      }
                    }),
                    (t.submitCompleted = function(e) {
                      return delete t.submitPromise, e;
                    }),
                    (t.submitFailed = function(e) {
                      throw (delete t.submitPromise, e);
                    }),
                    (t.listenToSubmit = function(e) {
                      return w()(e)
                        ? ((t.submitPromise = e),
                          e.then(t.submitCompleted, t.submitFailed))
                        : e;
                    }),
                    (t.submit = function(e) {
                      var r = t.props,
                        n = r.onSubmit,
                        i = r.blur,
                        o = r.change,
                        s = r.dispatch;
                      return e && !T(e)
                        ? D(function() {
                            return (
                              !t.submitPromise &&
                              t.listenToSubmit(
                                z(
                                  he(e),
                                  u()(
                                    {},
                                    t.props,
                                    {},
                                    Object(x.bindActionCreators)(
                                      { blur: i, change: o },
                                      s
                                    )
                                  ),
                                  t.props.validExceptSubmit,
                                  t.asyncValidate,
                                  t.getFieldList({
                                    excludeFieldArray: !0,
                                    excludeUnregistered: !0
                                  })
                                )
                              )
                            );
                          })
                        : t.submitPromise
                        ? void 0
                        : t.innerOnSubmit && t.innerOnSubmit !== t.submit
                        ? t.innerOnSubmit()
                        : t.listenToSubmit(
                            z(
                              he(n),
                              u()(
                                {},
                                t.props,
                                {},
                                Object(x.bindActionCreators)({ blur: i, change: o }, s)
                              ),
                              t.props.validExceptSubmit,
                              t.asyncValidate,
                              t.getFieldList({
                                excludeFieldArray: !0,
                                excludeUnregistered: !0
                              })
                            )
                          );
                    }),
                    (t.reset = function() {
                      return t.props.reset();
                    }),
                    t
                  );
                }
                s()(i, r);
                var c = i.prototype;
                return (
                  (c.initIfNeeded = function(e) {
                    var r = this.props.enableReinitialize;
                    if (e) {
                      if (
                        (r || !e.initialized) &&
                        !t(this.props.initialValues, e.initialValues)
                      ) {
                        var n = e.initialized && this.props.keepDirtyOnReinitialize;
                        this.props.initialize(e.initialValues, n, {
                          keepValues: e.keepValues,
                          lastInitialValues: this.props.initialValues,
                          updateUnregisteredFields: e.updateUnregisteredFields
                        });
                      }
                    } else
                      !this.props.initialValues ||
                        (this.props.initialized && !r) ||
                        this.props.initialize(
                          this.props.initialValues,
                          this.props.keepDirtyOnReinitialize,
                          {
                            keepValues: this.props.keepValues,
                            updateUnregisteredFields: this.props.updateUnregisteredFields
                          }
                        );
                  }),
                  (c.updateSyncErrorsIfNeeded = function(e, t, r) {
                    var n = this.props,
                      i = n.error,
                      o = n.updateSyncErrors,
                      s = !((r && Object.keys(r).length) || i),
                      a = !((e && Object.keys(e).length) || t);
                    (s && a) || (F.a.deepEqual(r, e) && F.a.deepEqual(i, t)) || o(e, t);
                  }),
                  (c.clearSubmitPromiseIfNeeded = function(e) {
                    var t = this.props.submitting;
                    this.submitPromise && t && !e.submitting && delete this.submitPromise;
                  }),
                  (c.submitIfNeeded = function(e) {
                    var t = this.props,
                      r = t.clearSubmit;
                    !t.triggerSubmit && e.triggerSubmit && (r(), this.submit());
                  }),
                  (c.shouldErrorFunction = function() {
                    var e = this.props,
                      t = e.shouldValidate,
                      r = e.shouldError;
                    return t !== B && !(r !== P) ? t : r;
                  }),
                  (c.validateIfNeeded = function(t) {
                    var r = this.props,
                      n = r.validate,
                      i = r.values,
                      o = this.shouldErrorFunction(),
                      s = this.generateValidator();
                    if (n || s) {
                      var a = void 0 === t,
                        u = Object.keys(this.getValidators());
                      if (
                        o({
                          values: i,
                          nextProps: t,
                          props: this.props,
                          initialRender: a,
                          lastFieldValidatorKeys: this.lastFieldValidatorKeys,
                          fieldValidatorKeys: u,
                          structure: e
                        })
                      ) {
                        var c = a || !t ? this.props : t,
                          d = f()(
                            (n && n(c.values, c)) || {},
                            (s && s(c.values, c)) || {}
                          ),
                          h = d._error,
                          p = l()(d, ['_error']);
                        (this.lastFieldValidatorKeys = u),
                          this.updateSyncErrorsIfNeeded(p, h, c.syncErrors);
                      }
                    } else this.lastFieldValidatorKeys = [];
                  }),
                  (c.updateSyncWarningsIfNeeded = function(e, t, r) {
                    var n = this.props,
                      i = n.warning,
                      o = n.updateSyncWarnings,
                      s = !((r && Object.keys(r).length) || i),
                      a = !((e && Object.keys(e).length) || t);
                    (s && a) || (F.a.deepEqual(r, e) && F.a.deepEqual(i, t)) || o(e, t);
                  }),
                  (c.shouldWarnFunction = function() {
                    var e = this.props,
                      t = e.shouldValidate,
                      r = e.shouldWarn;
                    return t !== B && !(r !== N) ? t : r;
                  }),
                  (c.warnIfNeeded = function(t) {
                    var r = this.props,
                      n = r.warn,
                      i = r.values,
                      o = this.shouldWarnFunction(),
                      s = this.generateWarner();
                    if (n || s) {
                      var a = void 0 === t,
                        u = Object.keys(this.getWarners());
                      if (
                        o({
                          values: i,
                          nextProps: t,
                          props: this.props,
                          initialRender: a,
                          lastFieldValidatorKeys: this.lastFieldWarnerKeys,
                          fieldValidatorKeys: u,
                          structure: e
                        })
                      ) {
                        var c = a || !t ? this.props : t,
                          d = f()(n ? n(c.values, c) : {}, s ? s(c.values, c) : {}),
                          h = d._warning,
                          p = l()(d, ['_warning']);
                        (this.lastFieldWarnerKeys = u),
                          this.updateSyncWarningsIfNeeded(p, h, c.syncWarnings);
                      }
                    }
                  }),
                  (c.UNSAFE_componentWillMount = function() {
                    Object(Y.a)() ||
                      (this.initIfNeeded(), this.validateIfNeeded(), this.warnIfNeeded()),
                      y()(
                        this.props.shouldValidate,
                        'shouldValidate() is deprecated and will be removed in v9.0.0. Use shouldWarn() or shouldError() instead.'
                      );
                  }),
                  (c.UNSAFE_componentWillReceiveProps = function(e) {
                    this.initIfNeeded(e),
                      this.validateIfNeeded(e),
                      this.warnIfNeeded(e),
                      this.clearSubmitPromiseIfNeeded(e),
                      this.submitIfNeeded(e);
                    var r = e.onChange,
                      n = e.values,
                      i = e.dispatch;
                    r && !t(n, this.props.values) && r(n, i, e, this.props.values);
                  }),
                  (c.shouldComponentUpdate = function(e) {
                    var r = this;
                    if (!this.props.pure) return !0;
                    var n = g.immutableProps,
                      i = void 0 === n ? [] : n;
                    return !!(
                      this.props.children ||
                      e.children ||
                      Object.keys(e).some(function(n) {
                        return ~i.indexOf(n)
                          ? r.props[n] !== e[n]
                          : !~fe.indexOf(n) && !t(r.props[n], e[n]);
                      })
                    );
                  }),
                  (c.componentDidMount = function() {
                    Object(Y.a)() ||
                      (this.initIfNeeded(this.props),
                      this.validateIfNeeded(),
                      this.warnIfNeeded()),
                      y()(
                        this.props.shouldValidate,
                        'shouldValidate() is deprecated and will be removed in v9.0.0. Use shouldWarn() or shouldError() instead.'
                      );
                  }),
                  (c.componentWillUnmount = function() {
                    var e = this.props,
                      t = e.destroyOnUnmount,
                      r = e.destroy;
                    t && !Object(Y.a)() && ((this.destroyed = !0), r());
                  }),
                  (c.render = function() {
                    var e,
                      t,
                      r = this,
                      i = this.props,
                      o = i.anyTouched,
                      s = i.array,
                      a =
                        (i.arrayInsert,
                        i.arrayMove,
                        i.arrayPop,
                        i.arrayPush,
                        i.arrayRemove,
                        i.arrayRemoveAll,
                        i.arrayShift,
                        i.arraySplice,
                        i.arraySwap,
                        i.arrayUnshift,
                        i.asyncErrors,
                        i.asyncValidate,
                        i.asyncValidating),
                      c = i.blur,
                      d = i.change,
                      f = i.clearSubmit,
                      h = i.destroy,
                      p = (i.destroyOnUnmount, i.forceUnregisterOnUnmount, i.dirty),
                      m = i.dispatch,
                      g = (i.enableReinitialize, i.error),
                      y = (i.focus, i.form),
                      v = (i.getFormState, i.immutableProps, i.initialize),
                      w = i.initialized,
                      k = i.initialValues,
                      _ = i.invalid,
                      j =
                        (i.keepDirtyOnReinitialize,
                        i.keepValues,
                        i.updateUnregisteredFields,
                        i.pristine),
                      E = i.propNamespace,
                      O = (i.registeredFields, i.registerField, i.reset),
                      A = i.resetSection,
                      C =
                        (i.setSubmitFailed,
                        i.setSubmitSucceeded,
                        i.shouldAsyncValidate,
                        i.shouldValidate,
                        i.shouldError,
                        i.shouldWarn,
                        i.startAsyncValidation,
                        i.startSubmit,
                        i.stopAsyncValidation,
                        i.stopSubmit,
                        i.submitAsSideEffect),
                      R = i.submitting,
                      B = i.submitFailed,
                      P = i.submitSucceeded,
                      N = i.touch,
                      I =
                        (i.touchOnBlur,
                        i.touchOnChange,
                        i.persistentSubmitErrors,
                        i.syncErrors,
                        i.syncWarnings,
                        i.unregisterField,
                        i.untouch),
                      T = (i.updateSyncErrors, i.updateSyncWarnings, i.valid),
                      D = (i.validExceptSubmit, i.values, i.warning),
                      F = l()(i, [
                        'anyTouched',
                        'array',
                        'arrayInsert',
                        'arrayMove',
                        'arrayPop',
                        'arrayPush',
                        'arrayRemove',
                        'arrayRemoveAll',
                        'arrayShift',
                        'arraySplice',
                        'arraySwap',
                        'arrayUnshift',
                        'asyncErrors',
                        'asyncValidate',
                        'asyncValidating',
                        'blur',
                        'change',
                        'clearSubmit',
                        'destroy',
                        'destroyOnUnmount',
                        'forceUnregisterOnUnmount',
                        'dirty',
                        'dispatch',
                        'enableReinitialize',
                        'error',
                        'focus',
                        'form',
                        'getFormState',
                        'immutableProps',
                        'initialize',
                        'initialized',
                        'initialValues',
                        'invalid',
                        'keepDirtyOnReinitialize',
                        'keepValues',
                        'updateUnregisteredFields',
                        'pristine',
                        'propNamespace',
                        'registeredFields',
                        'registerField',
                        'reset',
                        'resetSection',
                        'setSubmitFailed',
                        'setSubmitSucceeded',
                        'shouldAsyncValidate',
                        'shouldValidate',
                        'shouldError',
                        'shouldWarn',
                        'startAsyncValidation',
                        'startSubmit',
                        'stopAsyncValidation',
                        'stopSubmit',
                        'submitAsSideEffect',
                        'submitting',
                        'submitFailed',
                        'submitSucceeded',
                        'touch',
                        'touchOnBlur',
                        'touchOnChange',
                        'persistentSubmitErrors',
                        'syncErrors',
                        'syncWarnings',
                        'unregisterField',
                        'untouch',
                        'updateSyncErrors',
                        'updateSyncWarnings',
                        'valid',
                        'validExceptSubmit',
                        'values',
                        'warning'
                      ]),
                      U = u()(
                        {
                          array: s,
                          anyTouched: o,
                          asyncValidate: this.asyncValidate,
                          asyncValidating: a
                        },
                        Object(x.bindActionCreators)({ blur: c, change: d }, m),
                        {
                          clearSubmit: f,
                          destroy: h,
                          dirty: p,
                          dispatch: m,
                          error: g,
                          form: y,
                          handleSubmit: this.submit,
                          initialize: v,
                          initialized: w,
                          initialValues: k,
                          invalid: _,
                          pristine: j,
                          reset: O,
                          resetSection: A,
                          submitting: R,
                          submitAsSideEffect: C,
                          submitFailed: B,
                          submitSucceeded: P,
                          touch: N,
                          untouch: I,
                          valid: T,
                          warning: D
                        }
                      ),
                      L = u()({}, E ? (((e = {})[E] = U), e) : U, {}, F);
                    (t = b),
                      Boolean(
                        t &&
                          t.prototype &&
                          'object' == typeof t.prototype.isReactComponent
                      ) && (L.ref = this.wrapped);
                    var M = u()({}, this.props, {
                      getFormState: function(e) {
                        return n(r.props.getFormState(e), r.props.form);
                      },
                      asyncValidate: this.asyncValidate,
                      getValues: this.getValues,
                      sectionPrefix: void 0,
                      register: this.register,
                      unregister: this.unregister,
                      registerInnerOnSubmit: function(e) {
                        return (r.innerOnSubmit = e);
                      }
                    });
                    return Object(S.createElement)(X.a.Provider, {
                      value: M,
                      children: Object(S.createElement)(b, L)
                    });
                  }),
                  i
                );
              })(j.a.Component);
              (v.displayName = 'Form(' + q(b) + ')'),
                (v.WrappedComponent = b),
                (v.propTypes = {
                  destroyOnUnmount: _.a.bool,
                  forceUnregisterOnUnmount: _.a.bool,
                  form: _.a.string.isRequired,
                  immutableProps: _.a.arrayOf(_.a.string),
                  initialValues: _.a.oneOfType([_.a.array, _.a.object]),
                  getFormState: _.a.func,
                  onSubmitFail: _.a.func,
                  onSubmitSuccess: _.a.func,
                  propNamespace: _.a.string,
                  validate: _.a.func,
                  warn: _.a.func,
                  touchOnBlur: _.a.bool,
                  touchOnChange: _.a.bool,
                  triggerSubmit: _.a.bool,
                  persistentSubmitErrors: _.a.bool,
                  registeredFields: _.a.any
                });
              var k = Object(E.c)(
                  function(e, i) {
                    var o = i.form,
                      s = i.getFormState,
                      a = i.initialValues,
                      u = i.enableReinitialize,
                      c = i.keepDirtyOnReinitialize,
                      l = n(s(e) || r, o) || r,
                      d = n(l, 'initial'),
                      f = !!d,
                      p = u && f && !t(a, d),
                      b = p && !c,
                      m = a || d || r;
                    p || (m = d || r);
                    var g = n(l, 'values') || m;
                    b && (g = m);
                    var y = b || t(m, g),
                      v = n(l, 'asyncErrors'),
                      w = n(l, 'syncErrors') || F.a.empty,
                      k = n(l, 'syncWarnings') || F.a.empty,
                      _ = n(l, 'registeredFields'),
                      S = h(o, s, !1)(e),
                      j = h(o, s, !0)(e),
                      E = !!n(l, 'anyTouched'),
                      x = !!n(l, 'submitting'),
                      O = !!n(l, 'submitFailed'),
                      A = !!n(l, 'submitSucceeded'),
                      C = n(l, 'error'),
                      R = n(l, 'warning'),
                      B = n(l, 'triggerSubmit');
                    return {
                      anyTouched: E,
                      asyncErrors: v,
                      asyncValidating: n(l, 'asyncValidating') || !1,
                      dirty: !y,
                      error: C,
                      initialized: f,
                      invalid: !S,
                      pristine: y,
                      registeredFields: _,
                      submitting: x,
                      submitFailed: O,
                      submitSucceeded: A,
                      syncErrors: w,
                      syncWarnings: k,
                      triggerSubmit: B,
                      values: g,
                      valid: S,
                      validExceptSubmit: j,
                      warning: R
                    };
                  },
                  function(e, t) {
                    var r = function(e) {
                        return e.bind(null, t.form);
                      },
                      n = p()(le, r),
                      i = p()(de, r),
                      o = r(ce),
                      s = Object(x.bindActionCreators)(n, e),
                      a = {
                        insert: Object(x.bindActionCreators)(i.arrayInsert, e),
                        move: Object(x.bindActionCreators)(i.arrayMove, e),
                        pop: Object(x.bindActionCreators)(i.arrayPop, e),
                        push: Object(x.bindActionCreators)(i.arrayPush, e),
                        remove: Object(x.bindActionCreators)(i.arrayRemove, e),
                        removeAll: Object(x.bindActionCreators)(i.arrayRemoveAll, e),
                        shift: Object(x.bindActionCreators)(i.arrayShift, e),
                        splice: Object(x.bindActionCreators)(i.arraySplice, e),
                        swap: Object(x.bindActionCreators)(i.arraySwap, e),
                        unshift: Object(x.bindActionCreators)(i.arrayUnshift, e)
                      };
                    return u()({}, s, {}, i, {
                      blur: function(e, r) {
                        return ae(t.form, e, r, !!t.touchOnBlur);
                      },
                      change: function(e, r) {
                        return ue(
                          t.form,
                          e,
                          r,
                          !!t.touchOnChange,
                          !!t.persistentSubmitErrors
                        );
                      },
                      array: a,
                      focus: o,
                      dispatch: e
                    });
                  },
                  void 0,
                  { forwardRef: !0 }
                ),
                O = m()(k(v), b);
              O.defaultProps = g;
              var A = (function(e) {
                  function t() {
                    for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                      n[i] = arguments[i];
                    return (
                      ((t =
                        e.call.apply(e, [this].concat(n)) || this).ref = j.a.createRef()),
                      t
                    );
                  }
                  s()(t, e);
                  var n = t.prototype;
                  return (
                    (n.submit = function() {
                      return this.ref.current && this.ref.current.submit();
                    }),
                    (n.reset = function() {
                      this.ref && this.ref.current.reset();
                    }),
                    (n.render = function() {
                      var e = this.props,
                        t = e.initialValues,
                        r = l()(e, ['initialValues']);
                      return Object(S.createElement)(
                        O,
                        u()({}, r, { ref: this.ref, initialValues: c(t) })
                      );
                    }),
                    i()(t, [
                      {
                        key: 'valid',
                        get: function() {
                          return !(!this.ref.current || !this.ref.current.isValid());
                        }
                      },
                      {
                        key: 'invalid',
                        get: function() {
                          return !this.valid;
                        }
                      },
                      {
                        key: 'pristine',
                        get: function() {
                          return !(!this.ref.current || !this.ref.current.isPristine());
                        }
                      },
                      {
                        key: 'dirty',
                        get: function() {
                          return !this.pristine;
                        }
                      },
                      {
                        key: 'values',
                        get: function() {
                          return this.ref.current ? this.ref.current.getValues() : r;
                        }
                      },
                      {
                        key: 'fieldList',
                        get: function() {
                          return this.ref.current ? this.ref.current.getFieldList() : [];
                        }
                      },
                      {
                        key: 'wrappedInstance',
                        get: function() {
                          return this.ref.current && this.ref.current.wrapped.current;
                        }
                      }
                    ]),
                    t
                  );
                })(j.a.Component),
                R = m()(Object(X.b)(A), b);
              return (R.defaultProps = g), R;
            };
          };
        };
      t.a = pe(F.a);
    },
    '../../node_modules/redux-form/es/util/isHotReloading.js': function(e, t, r) {
      'use strict';
      (function(e) {
        t.a = function() {
          var t = e;
          return !(
            void 0 === t ||
            !t.hot ||
            'function' != typeof t.hot.status ||
            'apply' !== t.hot.status()
          );
        };
      }.call(this, r('../../node_modules/webpack/buildin/harmony-module.js')(e)));
    },
    '../../node_modules/signed-varint/index.js': function(e, t, r) {
      var n = r('../../node_modules/varint/index.js');
      (t.encode = function e(t, r, i) {
        t = t >= 0 ? 2 * t : -2 * t - 1;
        var o = n.encode(t, r, i);
        return (e.bytes = n.encode.bytes), o;
      }),
        (t.decode = function e(t, r) {
          var i = n.decode(t, r);
          return (e.bytes = n.decode.bytes), 1 & i ? (i + 1) / -2 : i / 2;
        }),
        (t.encodingLength = function(e) {
          return n.encodingLength(e >= 0 ? 2 * e : -2 * e - 1);
        });
    },
    '../../node_modules/stable/stable.js': function(e, t, r) {
      //! stable.js 0.1.8, https://github.com/Two-Screen/stable
      //! © 2018 Angry Bytes and contributors. MIT licensed.
      e.exports = (function() {
        'use strict';
        var e = function(e, r) {
          return t(e.slice(), r);
        };
        function t(e, t) {
          'function' != typeof t &&
            (t = function(e, t) {
              return String(e).localeCompare(t);
            });
          var n = e.length;
          if (n <= 1) return e;
          for (var i = new Array(n), o = 1; o < n; o *= 2) {
            r(e, t, o, i);
            var s = e;
            (e = i), (i = s);
          }
          return e;
        }
        e.inplace = function(e, n) {
          var i = t(e, n);
          return i !== e && r(i, null, e.length, e), e;
        };
        var r = function(e, t, r, n) {
          var i,
            o,
            s,
            a,
            u,
            c = e.length,
            l = 0,
            d = 2 * r;
          for (i = 0; i < c; i += d)
            for (
              s = (o = i + r) + r, o > c && (o = c), s > c && (s = c), a = i, u = o;
              ;

            )
              if (a < o && u < s)
                t(e[a], e[u]) <= 0 ? (n[l++] = e[a++]) : (n[l++] = e[u++]);
              else if (a < o) n[l++] = e[a++];
              else {
                if (!(u < s)) break;
                n[l++] = e[u++];
              }
        };
        return e;
      })();
    },
    '../../node_modules/tweetnacl-util/nacl-util.js': function(e, t, r) {
      (function(t) {
        !(function(t, r) {
          'use strict';
          e.exports ? (e.exports = r()) : (t.nacl || (t.nacl = {}), (t.nacl.util = r()));
        })(this, function() {
          'use strict';
          var e = {};
          function r(e) {
            if (
              !/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(
                e
              )
            )
              throw new TypeError('invalid encoding');
          }
          return (
            (e.decodeUTF8 = function(e) {
              if ('string' != typeof e) throw new TypeError('expected string');
              var t,
                r = unescape(encodeURIComponent(e)),
                n = new Uint8Array(r.length);
              for (t = 0; t < r.length; t++) n[t] = r.charCodeAt(t);
              return n;
            }),
            (e.encodeUTF8 = function(e) {
              var t,
                r = [];
              for (t = 0; t < e.length; t++) r.push(String.fromCharCode(e[t]));
              return decodeURIComponent(escape(r.join('')));
            }),
            'undefined' == typeof atob
              ? void 0 !== t.from
                ? ((e.encodeBase64 = function(e) {
                    return t.from(e).toString('base64');
                  }),
                  (e.decodeBase64 = function(e) {
                    return (
                      r(e),
                      new Uint8Array(Array.prototype.slice.call(t.from(e, 'base64'), 0))
                    );
                  }))
                : ((e.encodeBase64 = function(e) {
                    return new t(e).toString('base64');
                  }),
                  (e.decodeBase64 = function(e) {
                    return (
                      r(e),
                      new Uint8Array(Array.prototype.slice.call(new t(e, 'base64'), 0))
                    );
                  }))
              : ((e.encodeBase64 = function(e) {
                  var t,
                    r = [],
                    n = e.length;
                  for (t = 0; t < n; t++) r.push(String.fromCharCode(e[t]));
                  return btoa(r.join(''));
                }),
                (e.decodeBase64 = function(e) {
                  r(e);
                  var t,
                    n = atob(e),
                    i = new Uint8Array(n.length);
                  for (t = 0; t < n.length; t++) i[t] = n.charCodeAt(t);
                  return i;
                })),
            e
          );
        });
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/tweetnacl/nacl-fast.js': function(e, t, r) {
      !(function(e) {
        'use strict';
        var t = function(e) {
            var t,
              r = new Float64Array(16);
            if (e) for (t = 0; t < e.length; t++) r[t] = e[t];
            return r;
          },
          n = function() {
            throw new Error('no PRNG');
          },
          i = new Uint8Array(16),
          o = new Uint8Array(32);
        o[0] = 9;
        var s = t(),
          a = t([1]),
          u = t([56129, 1]),
          c = t([
            30883,
            4953,
            19914,
            30187,
            55467,
            16705,
            2637,
            112,
            59544,
            30585,
            16505,
            36039,
            65139,
            11119,
            27886,
            20995
          ]),
          l = t([
            61785,
            9906,
            39828,
            60374,
            45398,
            33411,
            5274,
            224,
            53552,
            61171,
            33010,
            6542,
            64743,
            22239,
            55772,
            9222
          ]),
          d = t([
            54554,
            36645,
            11616,
            51542,
            42930,
            38181,
            51040,
            26924,
            56412,
            64982,
            57905,
            49316,
            21502,
            52590,
            14035,
            8553
          ]),
          f = t([
            26200,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214
          ]),
          h = t([
            41136,
            18958,
            6951,
            50414,
            58488,
            44335,
            6150,
            12099,
            55207,
            15867,
            153,
            11085,
            57099,
            20417,
            9344,
            11139
          ]);
        function p(e, t, r, n) {
          (e[t] = (r >> 24) & 255),
            (e[t + 1] = (r >> 16) & 255),
            (e[t + 2] = (r >> 8) & 255),
            (e[t + 3] = 255 & r),
            (e[t + 4] = (n >> 24) & 255),
            (e[t + 5] = (n >> 16) & 255),
            (e[t + 6] = (n >> 8) & 255),
            (e[t + 7] = 255 & n);
        }
        function b(e, t, r, n, i) {
          var o,
            s = 0;
          for (o = 0; o < i; o++) s |= e[t + o] ^ r[n + o];
          return (1 & ((s - 1) >>> 8)) - 1;
        }
        function m(e, t, r, n) {
          return b(e, t, r, n, 16);
        }
        function g(e, t, r, n) {
          return b(e, t, r, n, 32);
        }
        function y(e, t, r, n) {
          !(function(e, t, r, n) {
            for (
              var i,
                o =
                  (255 & n[0]) |
                  ((255 & n[1]) << 8) |
                  ((255 & n[2]) << 16) |
                  ((255 & n[3]) << 24),
                s =
                  (255 & r[0]) |
                  ((255 & r[1]) << 8) |
                  ((255 & r[2]) << 16) |
                  ((255 & r[3]) << 24),
                a =
                  (255 & r[4]) |
                  ((255 & r[5]) << 8) |
                  ((255 & r[6]) << 16) |
                  ((255 & r[7]) << 24),
                u =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                c =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                l =
                  (255 & n[4]) |
                  ((255 & n[5]) << 8) |
                  ((255 & n[6]) << 16) |
                  ((255 & n[7]) << 24),
                d =
                  (255 & t[0]) |
                  ((255 & t[1]) << 8) |
                  ((255 & t[2]) << 16) |
                  ((255 & t[3]) << 24),
                f =
                  (255 & t[4]) |
                  ((255 & t[5]) << 8) |
                  ((255 & t[6]) << 16) |
                  ((255 & t[7]) << 24),
                h =
                  (255 & t[8]) |
                  ((255 & t[9]) << 8) |
                  ((255 & t[10]) << 16) |
                  ((255 & t[11]) << 24),
                p =
                  (255 & t[12]) |
                  ((255 & t[13]) << 8) |
                  ((255 & t[14]) << 16) |
                  ((255 & t[15]) << 24),
                b =
                  (255 & n[8]) |
                  ((255 & n[9]) << 8) |
                  ((255 & n[10]) << 16) |
                  ((255 & n[11]) << 24),
                m =
                  (255 & r[16]) |
                  ((255 & r[17]) << 8) |
                  ((255 & r[18]) << 16) |
                  ((255 & r[19]) << 24),
                g =
                  (255 & r[20]) |
                  ((255 & r[21]) << 8) |
                  ((255 & r[22]) << 16) |
                  ((255 & r[23]) << 24),
                y =
                  (255 & r[24]) |
                  ((255 & r[25]) << 8) |
                  ((255 & r[26]) << 16) |
                  ((255 & r[27]) << 24),
                v =
                  (255 & r[28]) |
                  ((255 & r[29]) << 8) |
                  ((255 & r[30]) << 16) |
                  ((255 & r[31]) << 24),
                w =
                  (255 & n[12]) |
                  ((255 & n[13]) << 8) |
                  ((255 & n[14]) << 16) |
                  ((255 & n[15]) << 24),
                k = o,
                _ = s,
                S = a,
                j = u,
                E = c,
                x = l,
                O = d,
                A = f,
                C = h,
                R = p,
                B = b,
                P = m,
                N = g,
                I = y,
                T = v,
                D = w,
                F = 0;
              F < 20;
              F += 2
            )
              (k ^=
                ((i =
                  ((N ^=
                    ((i =
                      ((C ^=
                        ((i = ((E ^= ((i = (k + N) | 0) << 7) | (i >>> 25)) + k) | 0) <<
                          9) |
                        (i >>> 23)) +
                        E) |
                      0) <<
                      13) |
                    (i >>> 19)) +
                    C) |
                  0) <<
                  18) |
                (i >>> 14)),
                (x ^=
                  ((i =
                    ((_ ^=
                      ((i =
                        ((I ^=
                          ((i = ((R ^= ((i = (x + _) | 0) << 7) | (i >>> 25)) + x) | 0) <<
                            9) |
                          (i >>> 23)) +
                          R) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      I) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (B ^=
                  ((i =
                    ((O ^=
                      ((i =
                        ((S ^=
                          ((i = ((T ^= ((i = (B + O) | 0) << 7) | (i >>> 25)) + B) | 0) <<
                            9) |
                          (i >>> 23)) +
                          T) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      S) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (D ^=
                  ((i =
                    ((P ^=
                      ((i =
                        ((A ^=
                          ((i = ((j ^= ((i = (D + P) | 0) << 7) | (i >>> 25)) + D) | 0) <<
                            9) |
                          (i >>> 23)) +
                          j) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      A) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (k ^=
                  ((i =
                    ((j ^=
                      ((i =
                        ((S ^=
                          ((i = ((_ ^= ((i = (k + j) | 0) << 7) | (i >>> 25)) + k) | 0) <<
                            9) |
                          (i >>> 23)) +
                          _) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      S) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (x ^=
                  ((i =
                    ((E ^=
                      ((i =
                        ((A ^=
                          ((i = ((O ^= ((i = (x + E) | 0) << 7) | (i >>> 25)) + x) | 0) <<
                            9) |
                          (i >>> 23)) +
                          O) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      A) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (B ^=
                  ((i =
                    ((R ^=
                      ((i =
                        ((C ^=
                          ((i = ((P ^= ((i = (B + R) | 0) << 7) | (i >>> 25)) + B) | 0) <<
                            9) |
                          (i >>> 23)) +
                          P) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      C) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (D ^=
                  ((i =
                    ((T ^=
                      ((i =
                        ((I ^=
                          ((i = ((N ^= ((i = (D + T) | 0) << 7) | (i >>> 25)) + D) | 0) <<
                            9) |
                          (i >>> 23)) +
                          N) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      I) |
                    0) <<
                    18) |
                  (i >>> 14));
            (k = (k + o) | 0),
              (_ = (_ + s) | 0),
              (S = (S + a) | 0),
              (j = (j + u) | 0),
              (E = (E + c) | 0),
              (x = (x + l) | 0),
              (O = (O + d) | 0),
              (A = (A + f) | 0),
              (C = (C + h) | 0),
              (R = (R + p) | 0),
              (B = (B + b) | 0),
              (P = (P + m) | 0),
              (N = (N + g) | 0),
              (I = (I + y) | 0),
              (T = (T + v) | 0),
              (D = (D + w) | 0),
              (e[0] = (k >>> 0) & 255),
              (e[1] = (k >>> 8) & 255),
              (e[2] = (k >>> 16) & 255),
              (e[3] = (k >>> 24) & 255),
              (e[4] = (_ >>> 0) & 255),
              (e[5] = (_ >>> 8) & 255),
              (e[6] = (_ >>> 16) & 255),
              (e[7] = (_ >>> 24) & 255),
              (e[8] = (S >>> 0) & 255),
              (e[9] = (S >>> 8) & 255),
              (e[10] = (S >>> 16) & 255),
              (e[11] = (S >>> 24) & 255),
              (e[12] = (j >>> 0) & 255),
              (e[13] = (j >>> 8) & 255),
              (e[14] = (j >>> 16) & 255),
              (e[15] = (j >>> 24) & 255),
              (e[16] = (E >>> 0) & 255),
              (e[17] = (E >>> 8) & 255),
              (e[18] = (E >>> 16) & 255),
              (e[19] = (E >>> 24) & 255),
              (e[20] = (x >>> 0) & 255),
              (e[21] = (x >>> 8) & 255),
              (e[22] = (x >>> 16) & 255),
              (e[23] = (x >>> 24) & 255),
              (e[24] = (O >>> 0) & 255),
              (e[25] = (O >>> 8) & 255),
              (e[26] = (O >>> 16) & 255),
              (e[27] = (O >>> 24) & 255),
              (e[28] = (A >>> 0) & 255),
              (e[29] = (A >>> 8) & 255),
              (e[30] = (A >>> 16) & 255),
              (e[31] = (A >>> 24) & 255),
              (e[32] = (C >>> 0) & 255),
              (e[33] = (C >>> 8) & 255),
              (e[34] = (C >>> 16) & 255),
              (e[35] = (C >>> 24) & 255),
              (e[36] = (R >>> 0) & 255),
              (e[37] = (R >>> 8) & 255),
              (e[38] = (R >>> 16) & 255),
              (e[39] = (R >>> 24) & 255),
              (e[40] = (B >>> 0) & 255),
              (e[41] = (B >>> 8) & 255),
              (e[42] = (B >>> 16) & 255),
              (e[43] = (B >>> 24) & 255),
              (e[44] = (P >>> 0) & 255),
              (e[45] = (P >>> 8) & 255),
              (e[46] = (P >>> 16) & 255),
              (e[47] = (P >>> 24) & 255),
              (e[48] = (N >>> 0) & 255),
              (e[49] = (N >>> 8) & 255),
              (e[50] = (N >>> 16) & 255),
              (e[51] = (N >>> 24) & 255),
              (e[52] = (I >>> 0) & 255),
              (e[53] = (I >>> 8) & 255),
              (e[54] = (I >>> 16) & 255),
              (e[55] = (I >>> 24) & 255),
              (e[56] = (T >>> 0) & 255),
              (e[57] = (T >>> 8) & 255),
              (e[58] = (T >>> 16) & 255),
              (e[59] = (T >>> 24) & 255),
              (e[60] = (D >>> 0) & 255),
              (e[61] = (D >>> 8) & 255),
              (e[62] = (D >>> 16) & 255),
              (e[63] = (D >>> 24) & 255);
          })(e, t, r, n);
        }
        function v(e, t, r, n) {
          !(function(e, t, r, n) {
            for (
              var i,
                o =
                  (255 & n[0]) |
                  ((255 & n[1]) << 8) |
                  ((255 & n[2]) << 16) |
                  ((255 & n[3]) << 24),
                s =
                  (255 & r[0]) |
                  ((255 & r[1]) << 8) |
                  ((255 & r[2]) << 16) |
                  ((255 & r[3]) << 24),
                a =
                  (255 & r[4]) |
                  ((255 & r[5]) << 8) |
                  ((255 & r[6]) << 16) |
                  ((255 & r[7]) << 24),
                u =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                c =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                l =
                  (255 & n[4]) |
                  ((255 & n[5]) << 8) |
                  ((255 & n[6]) << 16) |
                  ((255 & n[7]) << 24),
                d =
                  (255 & t[0]) |
                  ((255 & t[1]) << 8) |
                  ((255 & t[2]) << 16) |
                  ((255 & t[3]) << 24),
                f =
                  (255 & t[4]) |
                  ((255 & t[5]) << 8) |
                  ((255 & t[6]) << 16) |
                  ((255 & t[7]) << 24),
                h =
                  (255 & t[8]) |
                  ((255 & t[9]) << 8) |
                  ((255 & t[10]) << 16) |
                  ((255 & t[11]) << 24),
                p =
                  (255 & t[12]) |
                  ((255 & t[13]) << 8) |
                  ((255 & t[14]) << 16) |
                  ((255 & t[15]) << 24),
                b =
                  (255 & n[8]) |
                  ((255 & n[9]) << 8) |
                  ((255 & n[10]) << 16) |
                  ((255 & n[11]) << 24),
                m =
                  (255 & r[16]) |
                  ((255 & r[17]) << 8) |
                  ((255 & r[18]) << 16) |
                  ((255 & r[19]) << 24),
                g =
                  (255 & r[20]) |
                  ((255 & r[21]) << 8) |
                  ((255 & r[22]) << 16) |
                  ((255 & r[23]) << 24),
                y =
                  (255 & r[24]) |
                  ((255 & r[25]) << 8) |
                  ((255 & r[26]) << 16) |
                  ((255 & r[27]) << 24),
                v =
                  (255 & r[28]) |
                  ((255 & r[29]) << 8) |
                  ((255 & r[30]) << 16) |
                  ((255 & r[31]) << 24),
                w =
                  (255 & n[12]) |
                  ((255 & n[13]) << 8) |
                  ((255 & n[14]) << 16) |
                  ((255 & n[15]) << 24),
                k = 0;
              k < 20;
              k += 2
            )
              (o ^=
                ((i =
                  ((g ^=
                    ((i =
                      ((h ^=
                        ((i = ((c ^= ((i = (o + g) | 0) << 7) | (i >>> 25)) + o) | 0) <<
                          9) |
                        (i >>> 23)) +
                        c) |
                      0) <<
                      13) |
                    (i >>> 19)) +
                    h) |
                  0) <<
                  18) |
                (i >>> 14)),
                (l ^=
                  ((i =
                    ((s ^=
                      ((i =
                        ((y ^=
                          ((i = ((p ^= ((i = (l + s) | 0) << 7) | (i >>> 25)) + l) | 0) <<
                            9) |
                          (i >>> 23)) +
                          p) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      y) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (b ^=
                  ((i =
                    ((d ^=
                      ((i =
                        ((a ^=
                          ((i = ((v ^= ((i = (b + d) | 0) << 7) | (i >>> 25)) + b) | 0) <<
                            9) |
                          (i >>> 23)) +
                          v) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      a) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (w ^=
                  ((i =
                    ((m ^=
                      ((i =
                        ((f ^=
                          ((i = ((u ^= ((i = (w + m) | 0) << 7) | (i >>> 25)) + w) | 0) <<
                            9) |
                          (i >>> 23)) +
                          u) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      f) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (o ^=
                  ((i =
                    ((u ^=
                      ((i =
                        ((a ^=
                          ((i = ((s ^= ((i = (o + u) | 0) << 7) | (i >>> 25)) + o) | 0) <<
                            9) |
                          (i >>> 23)) +
                          s) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      a) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (l ^=
                  ((i =
                    ((c ^=
                      ((i =
                        ((f ^=
                          ((i = ((d ^= ((i = (l + c) | 0) << 7) | (i >>> 25)) + l) | 0) <<
                            9) |
                          (i >>> 23)) +
                          d) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      f) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (b ^=
                  ((i =
                    ((p ^=
                      ((i =
                        ((h ^=
                          ((i = ((m ^= ((i = (b + p) | 0) << 7) | (i >>> 25)) + b) | 0) <<
                            9) |
                          (i >>> 23)) +
                          m) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      h) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (w ^=
                  ((i =
                    ((v ^=
                      ((i =
                        ((y ^=
                          ((i = ((g ^= ((i = (w + v) | 0) << 7) | (i >>> 25)) + w) | 0) <<
                            9) |
                          (i >>> 23)) +
                          g) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      y) |
                    0) <<
                    18) |
                  (i >>> 14));
            (e[0] = (o >>> 0) & 255),
              (e[1] = (o >>> 8) & 255),
              (e[2] = (o >>> 16) & 255),
              (e[3] = (o >>> 24) & 255),
              (e[4] = (l >>> 0) & 255),
              (e[5] = (l >>> 8) & 255),
              (e[6] = (l >>> 16) & 255),
              (e[7] = (l >>> 24) & 255),
              (e[8] = (b >>> 0) & 255),
              (e[9] = (b >>> 8) & 255),
              (e[10] = (b >>> 16) & 255),
              (e[11] = (b >>> 24) & 255),
              (e[12] = (w >>> 0) & 255),
              (e[13] = (w >>> 8) & 255),
              (e[14] = (w >>> 16) & 255),
              (e[15] = (w >>> 24) & 255),
              (e[16] = (d >>> 0) & 255),
              (e[17] = (d >>> 8) & 255),
              (e[18] = (d >>> 16) & 255),
              (e[19] = (d >>> 24) & 255),
              (e[20] = (f >>> 0) & 255),
              (e[21] = (f >>> 8) & 255),
              (e[22] = (f >>> 16) & 255),
              (e[23] = (f >>> 24) & 255),
              (e[24] = (h >>> 0) & 255),
              (e[25] = (h >>> 8) & 255),
              (e[26] = (h >>> 16) & 255),
              (e[27] = (h >>> 24) & 255),
              (e[28] = (p >>> 0) & 255),
              (e[29] = (p >>> 8) & 255),
              (e[30] = (p >>> 16) & 255),
              (e[31] = (p >>> 24) & 255);
          })(e, t, r, n);
        }
        var w = new Uint8Array([
          101,
          120,
          112,
          97,
          110,
          100,
          32,
          51,
          50,
          45,
          98,
          121,
          116,
          101,
          32,
          107
        ]);
        function k(e, t, r, n, i, o, s) {
          var a,
            u,
            c = new Uint8Array(16),
            l = new Uint8Array(64);
          for (u = 0; u < 16; u++) c[u] = 0;
          for (u = 0; u < 8; u++) c[u] = o[u];
          for (; i >= 64; ) {
            for (y(l, c, s, w), u = 0; u < 64; u++) e[t + u] = r[n + u] ^ l[u];
            for (a = 1, u = 8; u < 16; u++)
              (a = (a + (255 & c[u])) | 0), (c[u] = 255 & a), (a >>>= 8);
            (i -= 64), (t += 64), (n += 64);
          }
          if (i > 0) for (y(l, c, s, w), u = 0; u < i; u++) e[t + u] = r[n + u] ^ l[u];
          return 0;
        }
        function _(e, t, r, n, i) {
          var o,
            s,
            a = new Uint8Array(16),
            u = new Uint8Array(64);
          for (s = 0; s < 16; s++) a[s] = 0;
          for (s = 0; s < 8; s++) a[s] = n[s];
          for (; r >= 64; ) {
            for (y(u, a, i, w), s = 0; s < 64; s++) e[t + s] = u[s];
            for (o = 1, s = 8; s < 16; s++)
              (o = (o + (255 & a[s])) | 0), (a[s] = 255 & o), (o >>>= 8);
            (r -= 64), (t += 64);
          }
          if (r > 0) for (y(u, a, i, w), s = 0; s < r; s++) e[t + s] = u[s];
          return 0;
        }
        function S(e, t, r, n, i) {
          var o = new Uint8Array(32);
          v(o, n, i, w);
          for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = n[a + 16];
          return _(e, t, r, s, o);
        }
        function j(e, t, r, n, i, o, s) {
          var a = new Uint8Array(32);
          v(a, o, s, w);
          for (var u = new Uint8Array(8), c = 0; c < 8; c++) u[c] = o[c + 16];
          return k(e, t, r, n, i, u, a);
        }
        var E = function(e) {
          var t, r, n, i, o, s, a, u;
          (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (t = (255 & e[0]) | ((255 & e[1]) << 8)),
            (this.r[0] = 8191 & t),
            (r = (255 & e[2]) | ((255 & e[3]) << 8)),
            (this.r[1] = 8191 & ((t >>> 13) | (r << 3))),
            (n = (255 & e[4]) | ((255 & e[5]) << 8)),
            (this.r[2] = 7939 & ((r >>> 10) | (n << 6))),
            (i = (255 & e[6]) | ((255 & e[7]) << 8)),
            (this.r[3] = 8191 & ((n >>> 7) | (i << 9))),
            (o = (255 & e[8]) | ((255 & e[9]) << 8)),
            (this.r[4] = 255 & ((i >>> 4) | (o << 12))),
            (this.r[5] = (o >>> 1) & 8190),
            (s = (255 & e[10]) | ((255 & e[11]) << 8)),
            (this.r[6] = 8191 & ((o >>> 14) | (s << 2))),
            (a = (255 & e[12]) | ((255 & e[13]) << 8)),
            (this.r[7] = 8065 & ((s >>> 11) | (a << 5))),
            (u = (255 & e[14]) | ((255 & e[15]) << 8)),
            (this.r[8] = 8191 & ((a >>> 8) | (u << 8))),
            (this.r[9] = (u >>> 5) & 127),
            (this.pad[0] = (255 & e[16]) | ((255 & e[17]) << 8)),
            (this.pad[1] = (255 & e[18]) | ((255 & e[19]) << 8)),
            (this.pad[2] = (255 & e[20]) | ((255 & e[21]) << 8)),
            (this.pad[3] = (255 & e[22]) | ((255 & e[23]) << 8)),
            (this.pad[4] = (255 & e[24]) | ((255 & e[25]) << 8)),
            (this.pad[5] = (255 & e[26]) | ((255 & e[27]) << 8)),
            (this.pad[6] = (255 & e[28]) | ((255 & e[29]) << 8)),
            (this.pad[7] = (255 & e[30]) | ((255 & e[31]) << 8));
        };
        function x(e, t, r, n, i, o) {
          var s = new E(o);
          return s.update(r, n, i), s.finish(e, t), 0;
        }
        function O(e, t, r, n, i, o) {
          var s = new Uint8Array(16);
          return x(s, 0, r, n, i, o), m(e, t, s, 0);
        }
        function A(e, t, r, n, i) {
          var o;
          if (r < 32) return -1;
          for (j(e, 0, t, 0, r, n, i), x(e, 16, e, 32, r - 32, e), o = 0; o < 16; o++)
            e[o] = 0;
          return 0;
        }
        function C(e, t, r, n, i) {
          var o,
            s = new Uint8Array(32);
          if (r < 32) return -1;
          if ((S(s, 0, 32, n, i), 0 !== O(t, 16, t, 32, r - 32, s))) return -1;
          for (j(e, 0, t, 0, r, n, i), o = 0; o < 32; o++) e[o] = 0;
          return 0;
        }
        function R(e, t) {
          var r;
          for (r = 0; r < 16; r++) e[r] = 0 | t[r];
        }
        function B(e) {
          var t,
            r,
            n = 1;
          for (t = 0; t < 16; t++)
            (r = e[t] + n + 65535), (n = Math.floor(r / 65536)), (e[t] = r - 65536 * n);
          e[0] += n - 1 + 37 * (n - 1);
        }
        function P(e, t, r) {
          for (var n, i = ~(r - 1), o = 0; o < 16; o++)
            (n = i & (e[o] ^ t[o])), (e[o] ^= n), (t[o] ^= n);
        }
        function N(e, r) {
          var n,
            i,
            o,
            s = t(),
            a = t();
          for (n = 0; n < 16; n++) a[n] = r[n];
          for (B(a), B(a), B(a), i = 0; i < 2; i++) {
            for (s[0] = a[0] - 65517, n = 1; n < 15; n++)
              (s[n] = a[n] - 65535 - ((s[n - 1] >> 16) & 1)), (s[n - 1] &= 65535);
            (s[15] = a[15] - 32767 - ((s[14] >> 16) & 1)),
              (o = (s[15] >> 16) & 1),
              (s[14] &= 65535),
              P(a, s, 1 - o);
          }
          for (n = 0; n < 16; n++) (e[2 * n] = 255 & a[n]), (e[2 * n + 1] = a[n] >> 8);
        }
        function I(e, t) {
          var r = new Uint8Array(32),
            n = new Uint8Array(32);
          return N(r, e), N(n, t), g(r, 0, n, 0);
        }
        function T(e) {
          var t = new Uint8Array(32);
          return N(t, e), 1 & t[0];
        }
        function D(e, t) {
          var r;
          for (r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
          e[15] &= 32767;
        }
        function F(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] + r[n];
        }
        function U(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] - r[n];
        }
        function L(e, t, r) {
          var n,
            i,
            o = 0,
            s = 0,
            a = 0,
            u = 0,
            c = 0,
            l = 0,
            d = 0,
            f = 0,
            h = 0,
            p = 0,
            b = 0,
            m = 0,
            g = 0,
            y = 0,
            v = 0,
            w = 0,
            k = 0,
            _ = 0,
            S = 0,
            j = 0,
            E = 0,
            x = 0,
            O = 0,
            A = 0,
            C = 0,
            R = 0,
            B = 0,
            P = 0,
            N = 0,
            I = 0,
            T = 0,
            D = r[0],
            F = r[1],
            U = r[2],
            L = r[3],
            M = r[4],
            K = r[5],
            H = r[6],
            W = r[7],
            V = r[8],
            z = r[9],
            G = r[10],
            J = r[11],
            q = r[12],
            Y = r[13],
            X = r[14],
            Z = r[15];
          (o += (n = t[0]) * D),
            (s += n * F),
            (a += n * U),
            (u += n * L),
            (c += n * M),
            (l += n * K),
            (d += n * H),
            (f += n * W),
            (h += n * V),
            (p += n * z),
            (b += n * G),
            (m += n * J),
            (g += n * q),
            (y += n * Y),
            (v += n * X),
            (w += n * Z),
            (s += (n = t[1]) * D),
            (a += n * F),
            (u += n * U),
            (c += n * L),
            (l += n * M),
            (d += n * K),
            (f += n * H),
            (h += n * W),
            (p += n * V),
            (b += n * z),
            (m += n * G),
            (g += n * J),
            (y += n * q),
            (v += n * Y),
            (w += n * X),
            (k += n * Z),
            (a += (n = t[2]) * D),
            (u += n * F),
            (c += n * U),
            (l += n * L),
            (d += n * M),
            (f += n * K),
            (h += n * H),
            (p += n * W),
            (b += n * V),
            (m += n * z),
            (g += n * G),
            (y += n * J),
            (v += n * q),
            (w += n * Y),
            (k += n * X),
            (_ += n * Z),
            (u += (n = t[3]) * D),
            (c += n * F),
            (l += n * U),
            (d += n * L),
            (f += n * M),
            (h += n * K),
            (p += n * H),
            (b += n * W),
            (m += n * V),
            (g += n * z),
            (y += n * G),
            (v += n * J),
            (w += n * q),
            (k += n * Y),
            (_ += n * X),
            (S += n * Z),
            (c += (n = t[4]) * D),
            (l += n * F),
            (d += n * U),
            (f += n * L),
            (h += n * M),
            (p += n * K),
            (b += n * H),
            (m += n * W),
            (g += n * V),
            (y += n * z),
            (v += n * G),
            (w += n * J),
            (k += n * q),
            (_ += n * Y),
            (S += n * X),
            (j += n * Z),
            (l += (n = t[5]) * D),
            (d += n * F),
            (f += n * U),
            (h += n * L),
            (p += n * M),
            (b += n * K),
            (m += n * H),
            (g += n * W),
            (y += n * V),
            (v += n * z),
            (w += n * G),
            (k += n * J),
            (_ += n * q),
            (S += n * Y),
            (j += n * X),
            (E += n * Z),
            (d += (n = t[6]) * D),
            (f += n * F),
            (h += n * U),
            (p += n * L),
            (b += n * M),
            (m += n * K),
            (g += n * H),
            (y += n * W),
            (v += n * V),
            (w += n * z),
            (k += n * G),
            (_ += n * J),
            (S += n * q),
            (j += n * Y),
            (E += n * X),
            (x += n * Z),
            (f += (n = t[7]) * D),
            (h += n * F),
            (p += n * U),
            (b += n * L),
            (m += n * M),
            (g += n * K),
            (y += n * H),
            (v += n * W),
            (w += n * V),
            (k += n * z),
            (_ += n * G),
            (S += n * J),
            (j += n * q),
            (E += n * Y),
            (x += n * X),
            (O += n * Z),
            (h += (n = t[8]) * D),
            (p += n * F),
            (b += n * U),
            (m += n * L),
            (g += n * M),
            (y += n * K),
            (v += n * H),
            (w += n * W),
            (k += n * V),
            (_ += n * z),
            (S += n * G),
            (j += n * J),
            (E += n * q),
            (x += n * Y),
            (O += n * X),
            (A += n * Z),
            (p += (n = t[9]) * D),
            (b += n * F),
            (m += n * U),
            (g += n * L),
            (y += n * M),
            (v += n * K),
            (w += n * H),
            (k += n * W),
            (_ += n * V),
            (S += n * z),
            (j += n * G),
            (E += n * J),
            (x += n * q),
            (O += n * Y),
            (A += n * X),
            (C += n * Z),
            (b += (n = t[10]) * D),
            (m += n * F),
            (g += n * U),
            (y += n * L),
            (v += n * M),
            (w += n * K),
            (k += n * H),
            (_ += n * W),
            (S += n * V),
            (j += n * z),
            (E += n * G),
            (x += n * J),
            (O += n * q),
            (A += n * Y),
            (C += n * X),
            (R += n * Z),
            (m += (n = t[11]) * D),
            (g += n * F),
            (y += n * U),
            (v += n * L),
            (w += n * M),
            (k += n * K),
            (_ += n * H),
            (S += n * W),
            (j += n * V),
            (E += n * z),
            (x += n * G),
            (O += n * J),
            (A += n * q),
            (C += n * Y),
            (R += n * X),
            (B += n * Z),
            (g += (n = t[12]) * D),
            (y += n * F),
            (v += n * U),
            (w += n * L),
            (k += n * M),
            (_ += n * K),
            (S += n * H),
            (j += n * W),
            (E += n * V),
            (x += n * z),
            (O += n * G),
            (A += n * J),
            (C += n * q),
            (R += n * Y),
            (B += n * X),
            (P += n * Z),
            (y += (n = t[13]) * D),
            (v += n * F),
            (w += n * U),
            (k += n * L),
            (_ += n * M),
            (S += n * K),
            (j += n * H),
            (E += n * W),
            (x += n * V),
            (O += n * z),
            (A += n * G),
            (C += n * J),
            (R += n * q),
            (B += n * Y),
            (P += n * X),
            (N += n * Z),
            (v += (n = t[14]) * D),
            (w += n * F),
            (k += n * U),
            (_ += n * L),
            (S += n * M),
            (j += n * K),
            (E += n * H),
            (x += n * W),
            (O += n * V),
            (A += n * z),
            (C += n * G),
            (R += n * J),
            (B += n * q),
            (P += n * Y),
            (N += n * X),
            (I += n * Z),
            (w += (n = t[15]) * D),
            (s += 38 * (_ += n * U)),
            (a += 38 * (S += n * L)),
            (u += 38 * (j += n * M)),
            (c += 38 * (E += n * K)),
            (l += 38 * (x += n * H)),
            (d += 38 * (O += n * W)),
            (f += 38 * (A += n * V)),
            (h += 38 * (C += n * z)),
            (p += 38 * (R += n * G)),
            (b += 38 * (B += n * J)),
            (m += 38 * (P += n * q)),
            (g += 38 * (N += n * Y)),
            (y += 38 * (I += n * X)),
            (v += 38 * (T += n * Z)),
            (o =
              (n = (o += 38 * (k += n * F)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
            (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (o =
              (n = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
            (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (o += i - 1 + 37 * (i - 1)),
            (e[0] = o),
            (e[1] = s),
            (e[2] = a),
            (e[3] = u),
            (e[4] = c),
            (e[5] = l),
            (e[6] = d),
            (e[7] = f),
            (e[8] = h),
            (e[9] = p),
            (e[10] = b),
            (e[11] = m),
            (e[12] = g),
            (e[13] = y),
            (e[14] = v),
            (e[15] = w);
        }
        function M(e, t) {
          L(e, t, t);
        }
        function K(e, r) {
          var n,
            i = t();
          for (n = 0; n < 16; n++) i[n] = r[n];
          for (n = 253; n >= 0; n--) M(i, i), 2 !== n && 4 !== n && L(i, i, r);
          for (n = 0; n < 16; n++) e[n] = i[n];
        }
        function H(e, r) {
          var n,
            i = t();
          for (n = 0; n < 16; n++) i[n] = r[n];
          for (n = 250; n >= 0; n--) M(i, i), 1 !== n && L(i, i, r);
          for (n = 0; n < 16; n++) e[n] = i[n];
        }
        function W(e, r, n) {
          var i,
            o,
            s = new Uint8Array(32),
            a = new Float64Array(80),
            c = t(),
            l = t(),
            d = t(),
            f = t(),
            h = t(),
            p = t();
          for (o = 0; o < 31; o++) s[o] = r[o];
          for (s[31] = (127 & r[31]) | 64, s[0] &= 248, D(a, n), o = 0; o < 16; o++)
            (l[o] = a[o]), (f[o] = c[o] = d[o] = 0);
          for (c[0] = f[0] = 1, o = 254; o >= 0; --o)
            P(c, l, (i = (s[o >>> 3] >>> (7 & o)) & 1)),
              P(d, f, i),
              F(h, c, d),
              U(c, c, d),
              F(d, l, f),
              U(l, l, f),
              M(f, h),
              M(p, c),
              L(c, d, c),
              L(d, l, h),
              F(h, c, d),
              U(c, c, d),
              M(l, c),
              U(d, f, p),
              L(c, d, u),
              F(c, c, f),
              L(d, d, c),
              L(c, f, p),
              L(f, l, a),
              M(l, h),
              P(c, l, i),
              P(d, f, i);
          for (o = 0; o < 16; o++)
            (a[o + 16] = c[o]),
              (a[o + 32] = d[o]),
              (a[o + 48] = l[o]),
              (a[o + 64] = f[o]);
          var b = a.subarray(32),
            m = a.subarray(16);
          return K(b, b), L(m, m, b), N(e, m), 0;
        }
        function V(e, t) {
          return W(e, t, o);
        }
        function z(e, t) {
          return n(t, 32), V(e, t);
        }
        function G(e, t, r) {
          var n = new Uint8Array(32);
          return W(n, r, t), v(e, i, n, w);
        }
        (E.prototype.blocks = function(e, t, r) {
          for (
            var n,
              i,
              o,
              s,
              a,
              u,
              c,
              l,
              d,
              f,
              h,
              p,
              b,
              m,
              g,
              y,
              v,
              w,
              k,
              _ = this.fin ? 0 : 2048,
              S = this.h[0],
              j = this.h[1],
              E = this.h[2],
              x = this.h[3],
              O = this.h[4],
              A = this.h[5],
              C = this.h[6],
              R = this.h[7],
              B = this.h[8],
              P = this.h[9],
              N = this.r[0],
              I = this.r[1],
              T = this.r[2],
              D = this.r[3],
              F = this.r[4],
              U = this.r[5],
              L = this.r[6],
              M = this.r[7],
              K = this.r[8],
              H = this.r[9];
            r >= 16;

          )
            (f = d = 0),
              (f += (S += 8191 & (n = (255 & e[t + 0]) | ((255 & e[t + 1]) << 8))) * N),
              (f +=
                (j +=
                  8191 &
                  ((n >>> 13) |
                    ((i = (255 & e[t + 2]) | ((255 & e[t + 3]) << 8)) << 3))) *
                (5 * H)),
              (f +=
                (E +=
                  8191 &
                  ((i >>> 10) |
                    ((o = (255 & e[t + 4]) | ((255 & e[t + 5]) << 8)) << 6))) *
                (5 * K)),
              (f +=
                (x +=
                  8191 &
                  ((o >>> 7) | ((s = (255 & e[t + 6]) | ((255 & e[t + 7]) << 8)) << 9))) *
                (5 * M)),
              (d =
                (f +=
                  (O +=
                    8191 &
                    ((s >>> 4) |
                      ((a = (255 & e[t + 8]) | ((255 & e[t + 9]) << 8)) << 12))) *
                  (5 * L)) >>> 13),
              (f &= 8191),
              (f += (A += (a >>> 1) & 8191) * (5 * U)),
              (f +=
                (C +=
                  8191 &
                  ((a >>> 14) |
                    ((u = (255 & e[t + 10]) | ((255 & e[t + 11]) << 8)) << 2))) *
                (5 * F)),
              (f +=
                (R +=
                  8191 &
                  ((u >>> 11) |
                    ((c = (255 & e[t + 12]) | ((255 & e[t + 13]) << 8)) << 5))) *
                (5 * D)),
              (f +=
                (B +=
                  8191 &
                  ((c >>> 8) |
                    ((l = (255 & e[t + 14]) | ((255 & e[t + 15]) << 8)) << 8))) *
                (5 * T)),
              (h = d += (f += (P += (l >>> 5) | _) * (5 * I)) >>> 13),
              (h += S * I),
              (h += j * N),
              (h += E * (5 * H)),
              (h += x * (5 * K)),
              (d = (h += O * (5 * M)) >>> 13),
              (h &= 8191),
              (h += A * (5 * L)),
              (h += C * (5 * U)),
              (h += R * (5 * F)),
              (h += B * (5 * D)),
              (d += (h += P * (5 * T)) >>> 13),
              (h &= 8191),
              (p = d),
              (p += S * T),
              (p += j * I),
              (p += E * N),
              (p += x * (5 * H)),
              (d = (p += O * (5 * K)) >>> 13),
              (p &= 8191),
              (p += A * (5 * M)),
              (p += C * (5 * L)),
              (p += R * (5 * U)),
              (p += B * (5 * F)),
              (b = d += (p += P * (5 * D)) >>> 13),
              (b += S * D),
              (b += j * T),
              (b += E * I),
              (b += x * N),
              (d = (b += O * (5 * H)) >>> 13),
              (b &= 8191),
              (b += A * (5 * K)),
              (b += C * (5 * M)),
              (b += R * (5 * L)),
              (b += B * (5 * U)),
              (m = d += (b += P * (5 * F)) >>> 13),
              (m += S * F),
              (m += j * D),
              (m += E * T),
              (m += x * I),
              (d = (m += O * N) >>> 13),
              (m &= 8191),
              (m += A * (5 * H)),
              (m += C * (5 * K)),
              (m += R * (5 * M)),
              (m += B * (5 * L)),
              (g = d += (m += P * (5 * U)) >>> 13),
              (g += S * U),
              (g += j * F),
              (g += E * D),
              (g += x * T),
              (d = (g += O * I) >>> 13),
              (g &= 8191),
              (g += A * N),
              (g += C * (5 * H)),
              (g += R * (5 * K)),
              (g += B * (5 * M)),
              (y = d += (g += P * (5 * L)) >>> 13),
              (y += S * L),
              (y += j * U),
              (y += E * F),
              (y += x * D),
              (d = (y += O * T) >>> 13),
              (y &= 8191),
              (y += A * I),
              (y += C * N),
              (y += R * (5 * H)),
              (y += B * (5 * K)),
              (v = d += (y += P * (5 * M)) >>> 13),
              (v += S * M),
              (v += j * L),
              (v += E * U),
              (v += x * F),
              (d = (v += O * D) >>> 13),
              (v &= 8191),
              (v += A * T),
              (v += C * I),
              (v += R * N),
              (v += B * (5 * H)),
              (w = d += (v += P * (5 * K)) >>> 13),
              (w += S * K),
              (w += j * M),
              (w += E * L),
              (w += x * U),
              (d = (w += O * F) >>> 13),
              (w &= 8191),
              (w += A * D),
              (w += C * T),
              (w += R * I),
              (w += B * N),
              (k = d += (w += P * (5 * H)) >>> 13),
              (k += S * H),
              (k += j * K),
              (k += E * M),
              (k += x * L),
              (d = (k += O * U) >>> 13),
              (k &= 8191),
              (k += A * F),
              (k += C * D),
              (k += R * T),
              (k += B * I),
              (S = f =
                8191 &
                (d =
                  ((d = (((d += (k += P * N) >>> 13) << 2) + d) | 0) + (f &= 8191)) | 0)),
              (j = h += d >>>= 13),
              (E = p &= 8191),
              (x = b &= 8191),
              (O = m &= 8191),
              (A = g &= 8191),
              (C = y &= 8191),
              (R = v &= 8191),
              (B = w &= 8191),
              (P = k &= 8191),
              (t += 16),
              (r -= 16);
          (this.h[0] = S),
            (this.h[1] = j),
            (this.h[2] = E),
            (this.h[3] = x),
            (this.h[4] = O),
            (this.h[5] = A),
            (this.h[6] = C),
            (this.h[7] = R),
            (this.h[8] = B),
            (this.h[9] = P);
        }),
          (E.prototype.finish = function(e, t) {
            var r,
              n,
              i,
              o,
              s = new Uint16Array(10);
            if (this.leftover) {
              for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++)
                this.buffer[o] = 0;
              (this.fin = 1), this.blocks(this.buffer, 0, 16);
            }
            for (r = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++)
              (this.h[o] += r), (r = this.h[o] >>> 13), (this.h[o] &= 8191);
            for (
              this.h[0] += 5 * r,
                r = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += r,
                r = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += r,
                s[0] = this.h[0] + 5,
                r = s[0] >>> 13,
                s[0] &= 8191,
                o = 1;
              o < 10;
              o++
            )
              (s[o] = this.h[o] + r), (r = s[o] >>> 13), (s[o] &= 8191);
            for (s[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++) s[o] &= n;
            for (n = ~n, o = 0; o < 10; o++) this.h[o] = (this.h[o] & n) | s[o];
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] =
                  65535 & ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                i = this.h[0] + this.pad[0],
                this.h[0] = 65535 & i,
                o = 1;
              o < 8;
              o++
            )
              (i = (((this.h[o] + this.pad[o]) | 0) + (i >>> 16)) | 0),
                (this.h[o] = 65535 & i);
            (e[t + 0] = (this.h[0] >>> 0) & 255),
              (e[t + 1] = (this.h[0] >>> 8) & 255),
              (e[t + 2] = (this.h[1] >>> 0) & 255),
              (e[t + 3] = (this.h[1] >>> 8) & 255),
              (e[t + 4] = (this.h[2] >>> 0) & 255),
              (e[t + 5] = (this.h[2] >>> 8) & 255),
              (e[t + 6] = (this.h[3] >>> 0) & 255),
              (e[t + 7] = (this.h[3] >>> 8) & 255),
              (e[t + 8] = (this.h[4] >>> 0) & 255),
              (e[t + 9] = (this.h[4] >>> 8) & 255),
              (e[t + 10] = (this.h[5] >>> 0) & 255),
              (e[t + 11] = (this.h[5] >>> 8) & 255),
              (e[t + 12] = (this.h[6] >>> 0) & 255),
              (e[t + 13] = (this.h[6] >>> 8) & 255),
              (e[t + 14] = (this.h[7] >>> 0) & 255),
              (e[t + 15] = (this.h[7] >>> 8) & 255);
          }),
          (E.prototype.update = function(e, t, r) {
            var n, i;
            if (this.leftover) {
              for ((i = 16 - this.leftover) > r && (i = r), n = 0; n < i; n++)
                this.buffer[this.leftover + n] = e[t + n];
              if (((r -= i), (t += i), (this.leftover += i), this.leftover < 16)) return;
              this.blocks(this.buffer, 0, 16), (this.leftover = 0);
            }
            if (
              (r >= 16 && ((i = r - (r % 16)), this.blocks(e, t, i), (t += i), (r -= i)),
              r)
            ) {
              for (n = 0; n < r; n++) this.buffer[this.leftover + n] = e[t + n];
              this.leftover += r;
            }
          });
        var J = A,
          q = C;
        var Y = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
        function X(e, t, r, n) {
          for (
            var i,
              o,
              s,
              a,
              u,
              c,
              l,
              d,
              f,
              h,
              p,
              b,
              m,
              g,
              y,
              v,
              w,
              k,
              _,
              S,
              j,
              E,
              x,
              O,
              A,
              C,
              R = new Int32Array(16),
              B = new Int32Array(16),
              P = e[0],
              N = e[1],
              I = e[2],
              T = e[3],
              D = e[4],
              F = e[5],
              U = e[6],
              L = e[7],
              M = t[0],
              K = t[1],
              H = t[2],
              W = t[3],
              V = t[4],
              z = t[5],
              G = t[6],
              J = t[7],
              q = 0;
            n >= 128;

          ) {
            for (_ = 0; _ < 16; _++)
              (S = 8 * _ + q),
                (R[_] = (r[S + 0] << 24) | (r[S + 1] << 16) | (r[S + 2] << 8) | r[S + 3]),
                (B[_] = (r[S + 4] << 24) | (r[S + 5] << 16) | (r[S + 6] << 8) | r[S + 7]);
            for (_ = 0; _ < 80; _++)
              if (
                ((i = P),
                (o = N),
                (s = I),
                (a = T),
                (u = D),
                (c = F),
                (l = U),
                L,
                (f = M),
                (h = K),
                (p = H),
                (b = W),
                (m = V),
                (g = z),
                (y = G),
                J,
                (x = 65535 & (E = J)),
                (O = E >>> 16),
                (A = 65535 & (j = L)),
                (C = j >>> 16),
                (x +=
                  65535 &
                  (E =
                    ((V >>> 14) | (D << 18)) ^
                    ((V >>> 18) | (D << 14)) ^
                    ((D >>> 9) | (V << 23)))),
                (O += E >>> 16),
                (A +=
                  65535 &
                  (j =
                    ((D >>> 14) | (V << 18)) ^
                    ((D >>> 18) | (V << 14)) ^
                    ((V >>> 9) | (D << 23)))),
                (C += j >>> 16),
                (x += 65535 & (E = (V & z) ^ (~V & G))),
                (O += E >>> 16),
                (A += 65535 & (j = (D & F) ^ (~D & U))),
                (C += j >>> 16),
                (x += 65535 & (E = Y[2 * _ + 1])),
                (O += E >>> 16),
                (A += 65535 & (j = Y[2 * _])),
                (C += j >>> 16),
                (j = R[_ % 16]),
                (O += (E = B[_ % 16]) >>> 16),
                (A += 65535 & j),
                (C += j >>> 16),
                (A += (O += (x += 65535 & E) >>> 16) >>> 16),
                (x = 65535 & (E = k = (65535 & x) | (O << 16))),
                (O = E >>> 16),
                (A = 65535 & (j = w = (65535 & A) | ((C += A >>> 16) << 16))),
                (C = j >>> 16),
                (x +=
                  65535 &
                  (E =
                    ((M >>> 28) | (P << 4)) ^
                    ((P >>> 2) | (M << 30)) ^
                    ((P >>> 7) | (M << 25)))),
                (O += E >>> 16),
                (A +=
                  65535 &
                  (j =
                    ((P >>> 28) | (M << 4)) ^
                    ((M >>> 2) | (P << 30)) ^
                    ((M >>> 7) | (P << 25)))),
                (C += j >>> 16),
                (O += (E = (M & K) ^ (M & H) ^ (K & H)) >>> 16),
                (A += 65535 & (j = (P & N) ^ (P & I) ^ (N & I))),
                (C += j >>> 16),
                (d =
                  (65535 & (A += (O += (x += 65535 & E) >>> 16) >>> 16)) |
                  ((C += A >>> 16) << 16)),
                (v = (65535 & x) | (O << 16)),
                (x = 65535 & (E = b)),
                (O = E >>> 16),
                (A = 65535 & (j = a)),
                (C = j >>> 16),
                (O += (E = k) >>> 16),
                (A += 65535 & (j = w)),
                (C += j >>> 16),
                (N = i),
                (I = o),
                (T = s),
                (D = a =
                  (65535 & (A += (O += (x += 65535 & E) >>> 16) >>> 16)) |
                  ((C += A >>> 16) << 16)),
                (F = u),
                (U = c),
                (L = l),
                (P = d),
                (K = f),
                (H = h),
                (W = p),
                (V = b = (65535 & x) | (O << 16)),
                (z = m),
                (G = g),
                (J = y),
                (M = v),
                _ % 16 == 15)
              )
                for (S = 0; S < 16; S++)
                  (j = R[S]),
                    (x = 65535 & (E = B[S])),
                    (O = E >>> 16),
                    (A = 65535 & j),
                    (C = j >>> 16),
                    (j = R[(S + 9) % 16]),
                    (x += 65535 & (E = B[(S + 9) % 16])),
                    (O += E >>> 16),
                    (A += 65535 & j),
                    (C += j >>> 16),
                    (w = R[(S + 1) % 16]),
                    (x +=
                      65535 &
                      (E =
                        (((k = B[(S + 1) % 16]) >>> 1) | (w << 31)) ^
                        ((k >>> 8) | (w << 24)) ^
                        ((k >>> 7) | (w << 25)))),
                    (O += E >>> 16),
                    (A +=
                      65535 &
                      (j =
                        ((w >>> 1) | (k << 31)) ^ ((w >>> 8) | (k << 24)) ^ (w >>> 7))),
                    (C += j >>> 16),
                    (w = R[(S + 14) % 16]),
                    (O +=
                      (E =
                        (((k = B[(S + 14) % 16]) >>> 19) | (w << 13)) ^
                        ((w >>> 29) | (k << 3)) ^
                        ((k >>> 6) | (w << 26))) >>> 16),
                    (A +=
                      65535 &
                      (j =
                        ((w >>> 19) | (k << 13)) ^ ((k >>> 29) | (w << 3)) ^ (w >>> 6))),
                    (C += j >>> 16),
                    (C += (A += (O += (x += 65535 & E) >>> 16) >>> 16) >>> 16),
                    (R[S] = (65535 & A) | (C << 16)),
                    (B[S] = (65535 & x) | (O << 16));
            (x = 65535 & (E = M)),
              (O = E >>> 16),
              (A = 65535 & (j = P)),
              (C = j >>> 16),
              (j = e[0]),
              (O += (E = t[0]) >>> 16),
              (A += 65535 & j),
              (C += j >>> 16),
              (C += (A += (O += (x += 65535 & E) >>> 16) >>> 16) >>> 16),
              (e[0] = P = (65535 & A) | (C << 16)),
              (t[0] = M = (65535 & x) | (O << 16)),
              (x = 65535 & (E = K)),
              (O = E >>> 16),
              (A = 65535 & (j = N)),
              (C = j >>> 16),
              (j = e[1]),
              (O += (E = t[1]) >>> 16),
              (A += 65535 & j),
              (C += j >>> 16),
              (C += (A += (O += (x += 65535 & E) >>> 16) >>> 16) >>> 16),
              (e[1] = N = (65535 & A) | (C << 16)),
              (t[1] = K = (65535 & x) | (O << 16)),
              (x = 65535 & (E = H)),
              (O = E >>> 16),
              (A = 65535 & (j = I)),
              (C = j >>> 16),
              (j = e[2]),
              (O += (E = t[2]) >>> 16),
              (A += 65535 & j),
              (C += j >>> 16),
              (C += (A += (O += (x += 65535 & E) >>> 16) >>> 16) >>> 16),
              (e[2] = I = (65535 & A) | (C << 16)),
              (t[2] = H = (65535 & x) | (O << 16)),
              (x = 65535 & (E = W)),
              (O = E >>> 16),
              (A = 65535 & (j = T)),
              (C = j >>> 16),
              (j = e[3]),
              (O += (E = t[3]) >>> 16),
              (A += 65535 & j),
              (C += j >>> 16),
              (C += (A += (O += (x += 65535 & E) >>> 16) >>> 16) >>> 16),
              (e[3] = T = (65535 & A) | (C << 16)),
              (t[3] = W = (65535 & x) | (O << 16)),
              (x = 65535 & (E = V)),
              (O = E >>> 16),
              (A = 65535 & (j = D)),
              (C = j >>> 16),
              (j = e[4]),
              (O += (E = t[4]) >>> 16),
              (A += 65535 & j),
              (C += j >>> 16),
              (C += (A += (O += (x += 65535 & E) >>> 16) >>> 16) >>> 16),
              (e[4] = D = (65535 & A) | (C << 16)),
              (t[4] = V = (65535 & x) | (O << 16)),
              (x = 65535 & (E = z)),
              (O = E >>> 16),
              (A = 65535 & (j = F)),
              (C = j >>> 16),
              (j = e[5]),
              (O += (E = t[5]) >>> 16),
              (A += 65535 & j),
              (C += j >>> 16),
              (C += (A += (O += (x += 65535 & E) >>> 16) >>> 16) >>> 16),
              (e[5] = F = (65535 & A) | (C << 16)),
              (t[5] = z = (65535 & x) | (O << 16)),
              (x = 65535 & (E = G)),
              (O = E >>> 16),
              (A = 65535 & (j = U)),
              (C = j >>> 16),
              (j = e[6]),
              (O += (E = t[6]) >>> 16),
              (A += 65535 & j),
              (C += j >>> 16),
              (C += (A += (O += (x += 65535 & E) >>> 16) >>> 16) >>> 16),
              (e[6] = U = (65535 & A) | (C << 16)),
              (t[6] = G = (65535 & x) | (O << 16)),
              (x = 65535 & (E = J)),
              (O = E >>> 16),
              (A = 65535 & (j = L)),
              (C = j >>> 16),
              (j = e[7]),
              (O += (E = t[7]) >>> 16),
              (A += 65535 & j),
              (C += j >>> 16),
              (C += (A += (O += (x += 65535 & E) >>> 16) >>> 16) >>> 16),
              (e[7] = L = (65535 & A) | (C << 16)),
              (t[7] = J = (65535 & x) | (O << 16)),
              (q += 128),
              (n -= 128);
          }
          return n;
        }
        function Z(e, t, r) {
          var n,
            i = new Int32Array(8),
            o = new Int32Array(8),
            s = new Uint8Array(256),
            a = r;
          for (
            i[0] = 1779033703,
              i[1] = 3144134277,
              i[2] = 1013904242,
              i[3] = 2773480762,
              i[4] = 1359893119,
              i[5] = 2600822924,
              i[6] = 528734635,
              i[7] = 1541459225,
              o[0] = 4089235720,
              o[1] = 2227873595,
              o[2] = 4271175723,
              o[3] = 1595750129,
              o[4] = 2917565137,
              o[5] = 725511199,
              o[6] = 4215389547,
              o[7] = 327033209,
              X(i, o, t, r),
              r %= 128,
              n = 0;
            n < r;
            n++
          )
            s[n] = t[a - r + n];
          for (
            s[r] = 128,
              s[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0,
              p(s, r - 8, (a / 536870912) | 0, a << 3),
              X(i, o, s, r),
              n = 0;
            n < 8;
            n++
          )
            p(e, 8 * n, i[n], o[n]);
          return 0;
        }
        function Q(e, r) {
          var n = t(),
            i = t(),
            o = t(),
            s = t(),
            a = t(),
            u = t(),
            c = t(),
            d = t(),
            f = t();
          U(n, e[1], e[0]),
            U(f, r[1], r[0]),
            L(n, n, f),
            F(i, e[0], e[1]),
            F(f, r[0], r[1]),
            L(i, i, f),
            L(o, e[3], r[3]),
            L(o, o, l),
            L(s, e[2], r[2]),
            F(s, s, s),
            U(a, i, n),
            U(u, s, o),
            F(c, s, o),
            F(d, i, n),
            L(e[0], a, u),
            L(e[1], d, c),
            L(e[2], c, u),
            L(e[3], a, d);
        }
        function $(e, t, r) {
          var n;
          for (n = 0; n < 4; n++) P(e[n], t[n], r);
        }
        function ee(e, r) {
          var n = t(),
            i = t(),
            o = t();
          K(o, r[2]), L(n, r[0], o), L(i, r[1], o), N(e, i), (e[31] ^= T(n) << 7);
        }
        function te(e, t, r) {
          var n, i;
          for (R(e[0], s), R(e[1], a), R(e[2], a), R(e[3], s), i = 255; i >= 0; --i)
            $(e, t, (n = (r[(i / 8) | 0] >> (7 & i)) & 1)), Q(t, e), Q(e, e), $(e, t, n);
        }
        function re(e, r) {
          var n = [t(), t(), t(), t()];
          R(n[0], d), R(n[1], f), R(n[2], a), L(n[3], d, f), te(e, n, r);
        }
        function ne(e, r, i) {
          var o,
            s = new Uint8Array(64),
            a = [t(), t(), t(), t()];
          for (
            i || n(r, 32),
              Z(s, r, 32),
              s[0] &= 248,
              s[31] &= 127,
              s[31] |= 64,
              re(a, s),
              ee(e, a),
              o = 0;
            o < 32;
            o++
          )
            r[o + 32] = e[o];
          return 0;
        }
        var ie = new Float64Array([
          237,
          211,
          245,
          92,
          26,
          99,
          18,
          88,
          214,
          156,
          247,
          162,
          222,
          249,
          222,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          16
        ]);
        function oe(e, t) {
          var r, n, i, o;
          for (n = 63; n >= 32; --n) {
            for (r = 0, i = n - 32, o = n - 12; i < o; ++i)
              (t[i] += r - 16 * t[n] * ie[i - (n - 32)]),
                (r = Math.floor((t[i] + 128) / 256)),
                (t[i] -= 256 * r);
            (t[i] += r), (t[n] = 0);
          }
          for (r = 0, i = 0; i < 32; i++)
            (t[i] += r - (t[31] >> 4) * ie[i]), (r = t[i] >> 8), (t[i] &= 255);
          for (i = 0; i < 32; i++) t[i] -= r * ie[i];
          for (n = 0; n < 32; n++) (t[n + 1] += t[n] >> 8), (e[n] = 255 & t[n]);
        }
        function se(e) {
          var t,
            r = new Float64Array(64);
          for (t = 0; t < 64; t++) r[t] = e[t];
          for (t = 0; t < 64; t++) e[t] = 0;
          oe(e, r);
        }
        function ae(e, r, n, i) {
          var o,
            s,
            a = new Uint8Array(64),
            u = new Uint8Array(64),
            c = new Uint8Array(64),
            l = new Float64Array(64),
            d = [t(), t(), t(), t()];
          Z(a, i, 32), (a[0] &= 248), (a[31] &= 127), (a[31] |= 64);
          var f = n + 64;
          for (o = 0; o < n; o++) e[64 + o] = r[o];
          for (o = 0; o < 32; o++) e[32 + o] = a[32 + o];
          for (
            Z(c, e.subarray(32), n + 32), se(c), re(d, c), ee(e, d), o = 32;
            o < 64;
            o++
          )
            e[o] = i[o];
          for (Z(u, e, n + 64), se(u), o = 0; o < 64; o++) l[o] = 0;
          for (o = 0; o < 32; o++) l[o] = c[o];
          for (o = 0; o < 32; o++) for (s = 0; s < 32; s++) l[o + s] += u[o] * a[s];
          return oe(e.subarray(32), l), f;
        }
        function ue(e, r, n, i) {
          var o,
            u = new Uint8Array(32),
            l = new Uint8Array(64),
            d = [t(), t(), t(), t()],
            f = [t(), t(), t(), t()];
          if (n < 64) return -1;
          if (
            (function(e, r) {
              var n = t(),
                i = t(),
                o = t(),
                u = t(),
                l = t(),
                d = t(),
                f = t();
              return (
                R(e[2], a),
                D(e[1], r),
                M(o, e[1]),
                L(u, o, c),
                U(o, o, e[2]),
                F(u, e[2], u),
                M(l, u),
                M(d, l),
                L(f, d, l),
                L(n, f, o),
                L(n, n, u),
                H(n, n),
                L(n, n, o),
                L(n, n, u),
                L(n, n, u),
                L(e[0], n, u),
                M(i, e[0]),
                L(i, i, u),
                I(i, o) && L(e[0], e[0], h),
                M(i, e[0]),
                L(i, i, u),
                I(i, o)
                  ? -1
                  : (T(e[0]) === r[31] >> 7 && U(e[0], s, e[0]), L(e[3], e[0], e[1]), 0)
              );
            })(f, i)
          )
            return -1;
          for (o = 0; o < n; o++) e[o] = r[o];
          for (o = 0; o < 32; o++) e[o + 32] = i[o];
          if (
            (Z(l, e, n),
            se(l),
            te(d, f, l),
            re(f, r.subarray(32)),
            Q(d, f),
            ee(u, d),
            (n -= 64),
            g(r, 0, u, 0))
          ) {
            for (o = 0; o < n; o++) e[o] = 0;
            return -1;
          }
          for (o = 0; o < n; o++) e[o] = r[o + 64];
          return n;
        }
        function ce(e, t) {
          if (32 !== e.length) throw new Error('bad key size');
          if (24 !== t.length) throw new Error('bad nonce size');
        }
        function le() {
          for (var e = 0; e < arguments.length; e++)
            if (!(arguments[e] instanceof Uint8Array))
              throw new TypeError('unexpected type, use Uint8Array');
        }
        function de(e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
        }
        (e.lowlevel = {
          crypto_core_hsalsa20: v,
          crypto_stream_xor: j,
          crypto_stream: S,
          crypto_stream_salsa20_xor: k,
          crypto_stream_salsa20: _,
          crypto_onetimeauth: x,
          crypto_onetimeauth_verify: O,
          crypto_verify_16: m,
          crypto_verify_32: g,
          crypto_secretbox: A,
          crypto_secretbox_open: C,
          crypto_scalarmult: W,
          crypto_scalarmult_base: V,
          crypto_box_beforenm: G,
          crypto_box_afternm: J,
          crypto_box: function(e, t, r, n, i, o) {
            var s = new Uint8Array(32);
            return G(s, i, o), J(e, t, r, n, s);
          },
          crypto_box_open: function(e, t, r, n, i, o) {
            var s = new Uint8Array(32);
            return G(s, i, o), q(e, t, r, n, s);
          },
          crypto_box_keypair: z,
          crypto_hash: Z,
          crypto_sign: ae,
          crypto_sign_keypair: ne,
          crypto_sign_open: ue,
          crypto_secretbox_KEYBYTES: 32,
          crypto_secretbox_NONCEBYTES: 24,
          crypto_secretbox_ZEROBYTES: 32,
          crypto_secretbox_BOXZEROBYTES: 16,
          crypto_scalarmult_BYTES: 32,
          crypto_scalarmult_SCALARBYTES: 32,
          crypto_box_PUBLICKEYBYTES: 32,
          crypto_box_SECRETKEYBYTES: 32,
          crypto_box_BEFORENMBYTES: 32,
          crypto_box_NONCEBYTES: 24,
          crypto_box_ZEROBYTES: 32,
          crypto_box_BOXZEROBYTES: 16,
          crypto_sign_BYTES: 64,
          crypto_sign_PUBLICKEYBYTES: 32,
          crypto_sign_SECRETKEYBYTES: 64,
          crypto_sign_SEEDBYTES: 32,
          crypto_hash_BYTES: 64,
          gf: t,
          D: c,
          L: ie,
          pack25519: N,
          unpack25519: D,
          M: L,
          A: F,
          S: M,
          Z: U,
          pow2523: H,
          add: Q,
          set25519: R,
          modL: oe,
          scalarmult: te,
          scalarbase: re
        }),
          (e.randomBytes = function(e) {
            var t = new Uint8Array(e);
            return n(t, e), t;
          }),
          (e.secretbox = function(e, t, r) {
            le(e, t, r), ce(r, t);
            for (
              var n = new Uint8Array(32 + e.length), i = new Uint8Array(n.length), o = 0;
              o < e.length;
              o++
            )
              n[o + 32] = e[o];
            return A(i, n, n.length, t, r), i.subarray(16);
          }),
          (e.secretbox.open = function(e, t, r) {
            le(e, t, r), ce(r, t);
            for (
              var n = new Uint8Array(16 + e.length), i = new Uint8Array(n.length), o = 0;
              o < e.length;
              o++
            )
              n[o + 16] = e[o];
            return n.length < 32 || 0 !== C(i, n, n.length, t, r) ? null : i.subarray(32);
          }),
          (e.secretbox.keyLength = 32),
          (e.secretbox.nonceLength = 24),
          (e.secretbox.overheadLength = 16),
          (e.scalarMult = function(e, t) {
            if ((le(e, t), 32 !== e.length)) throw new Error('bad n size');
            if (32 !== t.length) throw new Error('bad p size');
            var r = new Uint8Array(32);
            return W(r, e, t), r;
          }),
          (e.scalarMult.base = function(e) {
            if ((le(e), 32 !== e.length)) throw new Error('bad n size');
            var t = new Uint8Array(32);
            return V(t, e), t;
          }),
          (e.scalarMult.scalarLength = 32),
          (e.scalarMult.groupElementLength = 32),
          (e.box = function(t, r, n, i) {
            var o = e.box.before(n, i);
            return e.secretbox(t, r, o);
          }),
          (e.box.before = function(e, t) {
            le(e, t),
              (function(e, t) {
                if (32 !== e.length) throw new Error('bad public key size');
                if (32 !== t.length) throw new Error('bad secret key size');
              })(e, t);
            var r = new Uint8Array(32);
            return G(r, e, t), r;
          }),
          (e.box.after = e.secretbox),
          (e.box.open = function(t, r, n, i) {
            var o = e.box.before(n, i);
            return e.secretbox.open(t, r, o);
          }),
          (e.box.open.after = e.secretbox.open),
          (e.box.keyPair = function() {
            var e = new Uint8Array(32),
              t = new Uint8Array(32);
            return z(e, t), { publicKey: e, secretKey: t };
          }),
          (e.box.keyPair.fromSecretKey = function(e) {
            if ((le(e), 32 !== e.length)) throw new Error('bad secret key size');
            var t = new Uint8Array(32);
            return V(t, e), { publicKey: t, secretKey: new Uint8Array(e) };
          }),
          (e.box.publicKeyLength = 32),
          (e.box.secretKeyLength = 32),
          (e.box.sharedKeyLength = 32),
          (e.box.nonceLength = 24),
          (e.box.overheadLength = e.secretbox.overheadLength),
          (e.sign = function(e, t) {
            if ((le(e, t), 64 !== t.length)) throw new Error('bad secret key size');
            var r = new Uint8Array(64 + e.length);
            return ae(r, e, e.length, t), r;
          }),
          (e.sign.open = function(e, t) {
            if ((le(e, t), 32 !== t.length)) throw new Error('bad public key size');
            var r = new Uint8Array(e.length),
              n = ue(r, e, e.length, t);
            if (n < 0) return null;
            for (var i = new Uint8Array(n), o = 0; o < i.length; o++) i[o] = r[o];
            return i;
          }),
          (e.sign.detached = function(t, r) {
            for (var n = e.sign(t, r), i = new Uint8Array(64), o = 0; o < i.length; o++)
              i[o] = n[o];
            return i;
          }),
          (e.sign.detached.verify = function(e, t, r) {
            if ((le(e, t, r), 64 !== t.length)) throw new Error('bad signature size');
            if (32 !== r.length) throw new Error('bad public key size');
            var n,
              i = new Uint8Array(64 + e.length),
              o = new Uint8Array(64 + e.length);
            for (n = 0; n < 64; n++) i[n] = t[n];
            for (n = 0; n < e.length; n++) i[n + 64] = e[n];
            return ue(o, i, i.length, r) >= 0;
          }),
          (e.sign.keyPair = function() {
            var e = new Uint8Array(32),
              t = new Uint8Array(64);
            return ne(e, t), { publicKey: e, secretKey: t };
          }),
          (e.sign.keyPair.fromSecretKey = function(e) {
            if ((le(e), 64 !== e.length)) throw new Error('bad secret key size');
            for (var t = new Uint8Array(32), r = 0; r < t.length; r++) t[r] = e[32 + r];
            return { publicKey: t, secretKey: new Uint8Array(e) };
          }),
          (e.sign.keyPair.fromSeed = function(e) {
            if ((le(e), 32 !== e.length)) throw new Error('bad seed size');
            for (var t = new Uint8Array(32), r = new Uint8Array(64), n = 0; n < 32; n++)
              r[n] = e[n];
            return ne(t, r, !0), { publicKey: t, secretKey: r };
          }),
          (e.sign.publicKeyLength = 32),
          (e.sign.secretKeyLength = 64),
          (e.sign.seedLength = 32),
          (e.sign.signatureLength = 64),
          (e.hash = function(e) {
            le(e);
            var t = new Uint8Array(64);
            return Z(t, e, e.length), t;
          }),
          (e.hash.hashLength = 64),
          (e.verify = function(e, t) {
            return (
              le(e, t),
              0 !== e.length &&
                0 !== t.length &&
                e.length === t.length && 0 === b(e, 0, t, 0, e.length)
            );
          }),
          (e.setPRNG = function(e) {
            n = e;
          }),
          (function() {
            var t = 'undefined' != typeof self ? self.crypto || self.msCrypto : null;
            if (t && t.getRandomValues) {
              e.setPRNG(function(e, r) {
                var n,
                  i = new Uint8Array(r);
                for (n = 0; n < r; n += 65536)
                  t.getRandomValues(i.subarray(n, n + Math.min(r - n, 65536)));
                for (n = 0; n < r; n++) e[n] = i[n];
                de(i);
              });
            } else
              (t = r(2)) &&
                t.randomBytes &&
                e.setPRNG(function(e, r) {
                  var n,
                    i = t.randomBytes(r);
                  for (n = 0; n < r; n++) e[n] = i[n];
                  de(i);
                });
          })();
      })(e.exports ? e.exports : (self.nacl = self.nacl || {}));
    },
    '../../node_modules/uport-base64url/dist/base64url.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js'),
        i = r('../../node_modules/uport-base64url/dist/pad-string.js');
      function o(e, t) {
        return (
          void 0 === t && (t = 'utf8'),
          n.Buffer.isBuffer(e)
            ? a(e.toString('base64'))
            : a(n.Buffer.from(e, t).toString('base64'))
        );
      }
      function s(e) {
        return (
          (e = e.toString()),
          i
            .default(e)
            .replace(/\-/g, '+')
            .replace(/_/g, '/')
        );
      }
      function a(e) {
        return e
          .replace(/=/g, '')
          .replace(/\+/g, '-')
          .replace(/\//g, '_');
      }
      var u = o;
      (u.encode = o),
        (u.decode = function(e, t) {
          return void 0 === t && (t = 'utf8'), n.Buffer.from(s(e), 'base64').toString(t);
        }),
        (u.toBase64 = s),
        (u.fromBase64 = a),
        (u.toBuffer = function(e) {
          return n.Buffer.from(s(e), 'base64');
        }),
        (t.default = u);
    },
    '../../node_modules/uport-base64url/dist/pad-string.js': function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js');
      t.default = function(e) {
        var t = e.length,
          r = t % 4;
        if (!r) return e;
        var i = t,
          o = 4 - r,
          s = t + o,
          a = n.Buffer.alloc(s);
        for (a.write(e); o--; ) a.write('=', i++);
        return a.toString();
      };
    },
    '../../node_modules/uport-base64url/index.js': function(e, t, r) {
      (e.exports = r('../../node_modules/uport-base64url/dist/base64url.js').default),
        (e.exports.default = e.exports);
    },
    '../../node_modules/varint/decode.js': function(e, t) {
      e.exports = function e(t, r) {
        var n,
          i = 0,
          o = 0,
          s = (r = r || 0),
          a = t.length;
        do {
          if (s >= a) throw ((e.bytes = 0), new RangeError('Could not decode varint'));
          (n = t[s++]),
            (i += o < 28 ? (127 & n) << o : (127 & n) * Math.pow(2, o)),
            (o += 7);
        } while (n >= 128);
        return (e.bytes = s - r), i;
      };
    },
    '../../node_modules/varint/encode.js': function(e, t) {
      e.exports = function e(t, n, i) {
        n = n || [];
        var o = (i = i || 0);
        for (; t >= r; ) (n[i++] = (255 & t) | 128), (t /= 128);
        for (; -128 & t; ) (n[i++] = (255 & t) | 128), (t >>>= 7);
        return (n[i] = 0 | t), (e.bytes = i - o + 1), n;
      };
      var r = Math.pow(2, 31);
    },
    '../../node_modules/varint/index.js': function(e, t, r) {
      e.exports = {
        encode: r('../../node_modules/varint/encode.js'),
        decode: r('../../node_modules/varint/decode.js'),
        encodingLength: r('../../node_modules/varint/length.js')
      };
    },
    '../../node_modules/varint/length.js': function(e, t) {
      var r = Math.pow(2, 7),
        n = Math.pow(2, 14),
        i = Math.pow(2, 21),
        o = Math.pow(2, 28),
        s = Math.pow(2, 35),
        a = Math.pow(2, 42),
        u = Math.pow(2, 49),
        c = Math.pow(2, 56),
        l = Math.pow(2, 63);
      e.exports = function(e) {
        return e < r
          ? 1
          : e < n
          ? 2
          : e < i
          ? 3
          : e < o
          ? 4
          : e < s
          ? 5
          : e < a
          ? 6
          : e < u
          ? 7
          : e < c
          ? 8
          : e < l
          ? 9
          : 10;
      };
    },
    '../../node_modules/webpack/buildin/amd-options.js': function(e, t) {
      (function(t) {
        e.exports = t;
      }.call(this, {}));
    },
    './public/img/desktop.png': function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAACeBJREFUeAHtnUuIHUUUhucRM74VdaNk4cJgFEUw2wRU3Lg2uDESEJcuREQFXSnig4QEshUhkFnpTsGNBEG3AR8gEY2IwY1RiY+YjEnm+n91+0xq7ty+032TnO4az4EzVV2Prjr/X6ce3TPTMzMhgUAgEAgEAoFAIBAIBAKBQCAQCAQCgcD/B4HZOlMHgwF5tfl19SK9EwQGs7Ozg3EtryFQxC6o4Jz0nPSClDJjKys9pFsEjJt5deMq6bKIXhrbJRE7L908NjMSi0EADuHSOpw8WAmbxPx5EhW/X8EuKeFN0jVerrSQfiBgM+uf6s5X0g/E49d0zTidVWROicsKYf2g9Bkp7h5SHgI46bvSZ8XphcQtNijCuvuJdAfXEtZe1uHwXtDov+DJy1Kbmj9X/FGRvGRT9GElPCk9K4VsI/b3LK5oSA8RgNxbqn4RZ5N1tXRRBO9min5YF0ek7Jptan5P8XekJ6WIzfXDq/jZFwTMEW9Th16SPl11zLh8hOl5UYosDYPB3r70PvrRDgHxt7fi0LhchOCfqkQC4jdzW4XXt7t9lO4KAeMK7qQnpCYnNqlTd0iZgnH345q3Tyl3XuHfCu9U2lYpLo/YlDC8ip9dIWBLJkvqd+Lqx4ozuPteaVukbLpuh2B2y0awVTQin1HeK9KQ/iLwhrr2qtQ4Mw7p8RwET5J/q0w82AZCfoNJdSPvyiAAkSgeigcbR4qulfUIzmtAbJvyed2IX14Ezje9HYQxGuq80tyekLKHpMeknLNC/BHgOcU26R6pkWwcjevNLKTVkZtXsDIHtaAfzTMi7ouANlHb1SIEGyeTOjBoO+XaEarpwJjUeOS1Q0C+lV4IJQ6aVoUoXLzJaOCeVo7QlPSQK4tAPg0bB01aTFN0k4JWxm7Oi2WLW16EVw4BzczpN2xooRXuHH2mkXxETVM/6rRHYCrMpyW4ffeiRicIBMGdwO7XqD2d8msxWvJEYADBU83tnr2MtqZGYDam6KmxK6NiEFwGT1P3MgieGroyKgbBZfA0dS8huNWTkalbiopdIBC76C5Qd2wz7aLDgx0Rd24qPNgZcO/m4hzsjbh3e7GL9kbcub0g2Blw7+aCYG/EndsLgp0B924uCPZG3Lm9INgZcO/mIDgedHij7tdePOjww7qTluJBRyewOzYaU7Qj2B00FVN0B6B7NhlTtCfaXbQVU3QXqPu1GVO0H9adtBRTdCewOzYaT7Icwe6iqViDu0Ddr81Yg/2w7qSltAbHs+hOsHdpNHmwS0vRSDcIxCarG9zdWoXg+PNRN7jdG4pzsDvkzg3GMckZcOfm4pjkDLh3c3FM8kbcub3wYGfAvZuLTZY34t7txTnYG3Hn9oJgZ8C9m5uW4Hh+7c3UlL+/3vb/PttTrzn+/alsDKJ9iAZ31D7327TV1v8QPH1eR/9KmIZC/BDIHck+cdSo9db/8V2OywcQ+exseHAjiC9LIfPgP3S31v/xvUkP7JHmogozgmyqblI3ylw+BHAqPqVD2Gj/tJ4H29TAN3qQG4ZB/OwYAZZIOGE2NY7Gdmm9bzbY53MYNSH9QQBi7VvBxtG43q37WZ1vVYvP6JyS2jow7kaR5osAXouyHsNRnQz4yiifd+dz4MgRSirku8I2QuoqR3pPEIArOKM7Co9IEThdnjRFp7ldhWyD1RNzWnUDo7GDwcoyY18Lw242i3auTLbqujThW0qsxXX9n/xZHZFru2ULSwMAwyHzgoA4k3X+XDVwyYP0Uu1Ls21m15ooBtaKQAGgutFRW68vGZAoG9KDAcV3ql8o8pnSP1PI8kQZOyWkzNJ+yIb6AapMZNwa3Oic1VcwZBP7iGSDwtelkGmCva/Rd4U8dq0HqK8GZv3KbVA8X4PTJktpG5LgdHyQbbswsBKmZtTk8YrkSUeNDMp+RmXMyiBVfBXBJW+gatGWkXgkGyhk9zCYWVKIvShx5KlhMINHF+3FlR2jQXrZgGHFrrOjFlXX2GQ7Znv6tpCVtbjl2UZrw+GwIT242jQZiV9WxNqxCM9OGy+FlrdQ+kYrG7x5dLgJyVM2UNym6Ldk0wkp52DOw3Ym/knxN6WIlR1ebaCfeHC+9tgUlacVaa48ks3UJoW/yIAd0velv1ZKfKfyTlZlzKOVXKwYZ8YhhqQHHRhn5+HNmXlWIUsqKyoCz4vAeYV46xOKpzVX139hSZVna3VZxq3uLVzZWd6WJtLOQewP0rulyH0y+i4B8L3Ca3R9RiFeXrJw/mVallkrxGI3I528ou2TTRC7WSFcbVX8PikCwccZxQekyOlhMPhQYfHem0z8H/2AM+lHFYfG5X4S7xEO31RYcD7ExXlFeED6sxSy83ldlyE9QcC42aL+PCd9UGoc0sV7kqeK5Jd1YTvKvxW/ntyQ4hDIuXtZ0/bbK1OxSN4nc56vTMJjGQm2VlXJRQSjJwPWqLoZCPvzNTity0VYOeyk8cdGkZnXrveJ3Bcokh7IVws16/FupUHyA9LccF0WJZxrMRbC2GBNkjZlJ92n6zwG8hfS/eLzMJ0Rn3OJcUUAYVkZig6uU3yH9F7pjVITGx123beQ/p2WPiZ9SIrBDNJD0mPS0RcKZ5W2TbpHamU/VfxjKRjUeb2yeiF5//5Uj9hH8Rr0H3EIFrwGvfgAR4m8kcDNixbZ8KIU+XcYDLbXGaT87VUZK/tiXdlS0mXPgnRl9mWNTSK2GcVLyuSRHgVgPx8luuytMGJlQnq5j/flwi+mMV3l+wnKsm6lvKxwqlthgO0l2W+zsL0pS2atEGxGViABCKCVImlKqjo7SopdjyPM8sxOuyZkwNu15fc2rAbsmv6tIdhKqEIxxmkw0m0IQUb7bddpj5EKXBy8lpcqZnUTuSVhYAaMhrUEjxb0vK5mD7xylIC6brCkUB5iRmceu7a/iOQepNnumWuTlbJKUDcGNmgsvy6k3qCPA6KXBFdANSUX0C/uFlfHyUtvinTPvAzpyOhbpFRGZVmf20ibvra57yWX7SXB8hyONNdKm3pQ8mAR85vqrNlk6X5sQOwvIhVNHjzuL/Vsk3WrykBam/b/UfscvXolNiV13imRQF/S2U3xlxTnRT3vb236VXRdgRTegqHEuSevBvHUUVvJ58TAK0Qry+9Oo6NllTRWqMcguE2aHg1Wg2llvR9byzGxlx4s+/FeBOCmEfM8CIDASZKXtcExqXxdnvW5Lr+T9L4SjGddiuD1TaVN2Un3vNQ+T7r31Hl9IxiPQ76VHpWekjJdNp0yVdRV6C/KAxP6jJgNw6v4uRqBai1enVjIVR/73kvPqICib6V4Q+qrdtG962/fpuhRX+3lABztZFwHAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAPxD4D8ULtYintv9SAAAAAElFTkSuQmCC';
    },
    './public/img/icons/3box.png': function(e, t, r) {
      e.exports = r.p + 'images/3box-f11f16f8.png';
    },
    './public/img/metamask.png': function(e, t, r) {
      e.exports = r.p + 'images/metamask-03f7a514.png';
    },
    './src/core/config.js': function(e, t, r) {
      'use strict';
      r.d(t, 'c', function() {
        return n;
      }),
        r.d(t, 'b', function() {
          return i;
        }),
        r.d(t, 'a', function() {
          return o;
        }),
        r.d(t, 'd', function() {
          return s;
        });
      var n = 'ws',
        i = 'mainnet',
        o = '7d2819de98bb46108cae44811facb5e0',
        s = '1';
    },
    './src/modules/activity/activity.actions.js': function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'setActivity', function() {
          return w;
        }),
        r.d(t, 'resetActivity', function() {
          return k;
        }),
        r.d(t, 'clearCount', function() {
          return _;
        }),
        r.d(t, 'setCount', function() {
          return S;
        }),
        r.d(t, 'getActivity', function() {
          return j;
        }),
        r.d(t, 'markRead', function() {
          return E;
        }),
        r.d(t, 'createNotification', function() {
          return x;
        }),
        r.d(t, 'getNotificationCount', function() {
          return O;
        }),
        r.d(t, 'showBannerPrompt', function() {
          return A;
        }),
        r.d(t, 'hideBannerPrompt', function() {
          return C;
        }),
        r.d(t, 'enableDesktopNotifications', function() {
          return R;
        }),
        r.d(t, 'showBetPrompt', function() {
          return B;
        }),
        r.d(t, 'showPushNotificationPrompt', function() {
          return P;
        });
      var n = r('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = r.n(n),
        o = r('./node_modules/@babel/runtime/regenerator/index.js'),
        s = r.n(o),
        a = r('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = r.n(a),
        c = r('./src/core/actionTypes.js'),
        l = r('./src/modules/ui/error.actions.js'),
        d = r('./src/utils/index.js');
      function f() {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = u()(
          s.a.mark(function e() {
            var t, r, n;
            return s.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), navigator.serviceWorker.ready;
                    case 3:
                      return (t = e.sent), (e.next = 6), t.pushManager.getSubscription();
                    case 6:
                      if (!(r = e.sent)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt('return', r);
                    case 9:
                      return (
                        'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
                        (n = p(
                          'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4'
                        )),
                        e.abrupt(
                          'return',
                          t.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: n
                          })
                        )
                      );
                    case 14:
                      return (
                        (e.prev = 14),
                        (e.t0 = e.catch(0)),
                        console.log(e.t0),
                        e.abrupt('return', null)
                      );
                    case 18:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 14]]
            );
          })
        )).apply(this, arguments);
      }
      function p(e) {
        for (
          var t = (e + '='.repeat((4 - (e.length % 4)) % 4))
              .replace(/-/g, '+')
              .replace(/_/g, '/'),
            r = window.atob(t),
            n = new Uint8Array(r.length),
            i = 0;
          i < r.length;
          ++i
        )
          n[i] = r.charCodeAt(i);
        return n;
      }
      (function() {
        try {
          navigator.serviceWorker.register('/service-worker.js');
        } catch (e) {
          console.log(e);
        }
      })();
      var b = r('./src/modules/auth/auth.actions.js');
      function m(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function(t) {
                i()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var y = ''.concat(
          Object({
            BROWSER: !0,
            NODE_ENV: 'production',
            WEB: 'true',
            BABEL_ENV: 'development_web',
            VAPID_PUBLIC_KEY:
              'BJp16DSJF-SdwZ3yxE2cK502FKKI7hxTON6YDoCaTctcq9sr3scJS1iTsa3YSlvOV-p2_P51cNWF5-os4Gc0rq4',
            INFURA_PROTOCOL: 'ws',
            INFURA_NETWORK: 'mainnet',
            INFURA_API_KEY: '7d2819de98bb46108cae44811facb5e0',
            NETWORK_NUMBER: '1',
            TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec'
          }).API_SERVER,
          '/api/notification'
        ),
        v = function(e) {
          return {
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer '.concat(e)
            }
          };
        };
      function w(e, t, r) {
        return { type: c.G, payload: { data: e, type: t, index: r } };
      }
      function k(e) {
        return { type: 'RESET_ACTIVITY', payload: e };
      }
      function _() {
        return { type: 'CLEAR_COUNT' };
      }
      function S(e) {
        return { type: c.O, payload: e };
      }
      function j(e) {
        return (function() {
          var t = u()(
            s.a.mark(function t(r) {
              var n, i;
              return s.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (n = 'personal'),
                          (t.next = 4),
                          r(
                            d.b.request({
                              method: 'GET',
                              endpoint: 'notification',
                              path: '/',
                              auth: !0,
                              query: { skip: e }
                            })
                          )
                        );
                      case 4:
                        (i = t.sent),
                          r(w(i, n, e)),
                          r(l.a('activity', !1)),
                          (t.next = 12);
                        break;
                      case 9:
                        (t.prev = 9),
                          (t.t0 = t.catch(0)),
                          l.a('activity', !0, t.t0.message);
                      case 12:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 9]]
              );
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function E() {
        return function(e) {
          return d.f
            .getToken()
            .then(function(e) {
              return fetch(
                ''.concat(y, '/markread'),
                g(g({}, v(e)), {}, { method: 'PUT' })
              );
            })
            .then(function() {
              e({ type: 'CLEAR_COUNT' });
            })
            .catch(null);
        };
      }
      function x(e) {
        return function() {
          return d.f
            .getToken()
            .then(function(t) {
              return fetch(
                ''.concat(y),
                g(g({}, v(t)), {}, { method: 'POST', body: JSON.stringify(e) })
              );
            })
            .catch(null);
        };
      }
      function O() {
        return (function() {
          var e = u()(
            s.a.mark(function e(t) {
              var r;
              return s.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          t(
                            d.b.request({
                              method: 'GET',
                              endpoint: 'notification',
                              path: '/unread',
                              auth: !0
                            })
                          )
                        );
                      case 3:
                        (r = e.sent), t(S(r.unread)), (e.next = 9);
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0));
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function A(e, t) {
        return { type: c.yb, payload: { promptType: e, promptProps: t } };
      }
      function C(e) {
        return { type: c.l, payload: e };
      }
      function R() {
        return (function() {
          var e = u()(
            s.a.mark(function e(t) {
              var r;
              return s.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), f();
                      case 3:
                        (r = e.sent),
                          t(
                            Object(b.updateNotificationSettings)(
                              { desktop: { all: !0 } },
                              r.toJSON()
                            )
                          ),
                          t(C()),
                          (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(0)), console.log(e.t0);
                      case 11:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      var B = (function() {
          var e = u()(
            s.a.mark(function e(t) {
              return s.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), d.f.isDismissed('betDismissed', 14);
                    case 2:
                      if (e.sent) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt('return', t(A('bet')));
                    case 5:
                      return e.abrupt('return', !1);
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        P = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (function() {
            var t = u()(
              s.a.mark(function t(r) {
                return s.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt('return', N({ dispatch: r, promptProps: e }));
                      case 2:
                        return t.abrupt('return', T({ dispatch: r, promptProps: e }));
                      case 3:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e) {
              return t.apply(this, arguments);
            };
          })();
        };
      function N(e) {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = u()(
          s.a.mark(function e(t) {
            var r, n;
            return s.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = t.dispatch),
                      (n = t.promptProps),
                      !Notification ||
                        ('granted' !== Notification.permission &&
                          'denied' !== Notification.permission))
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 3:
                    return (e.next = 5), d.f.isDismissed('pushDismissed', 30);
                  case 5:
                    if (!e.sent) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 8:
                    return e.abrupt('return', r(A('push', n)));
                  case 9:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function T(e) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = u()(
          s.a.mark(function e(t) {
            var r, n;
            return s.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = t.dispatch), (n = t.promptProps), e.abrupt('return', !1);
                  case 3:
                    return (
                      (e.next = 5),
                      new Promise(function(e, t) {
                        (void 0).checkPermissions(function(r) {
                          return r ? e(r) : t();
                        });
                      })
                    );
                  case 5:
                    if (!e.sent.alert) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 8:
                    return (e.next = 10), d.f.isDismissed('pushDismissed', 21);
                  case 10:
                    if (!e.sent) {
                      e.next = 13;
                      break;
                    }
                    return e.abrupt('return', !1);
                  case 13:
                    return e.abrupt(
                      'return',
                      r(A('push', g(g({}, n), {}, { isMobile: !0 })))
                    );
                  case 14:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    './src/modules/auth/3box.hooks.js': function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return _;
      }),
        r.d(t, 'b', function() {
          return S;
        });
      var n = r('./node_modules/@babel/runtime/helpers/slicedToArray.js'),
        i = r.n(n),
        o = r('./node_modules/@babel/runtime/regenerator/index.js'),
        s = r.n(o),
        a = r('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        u = r.n(a),
        c = r('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        l = r.n(c),
        d = r('../../node_modules/react/index.js'),
        f = r('./src/utils/index.js'),
        h = r('../../node_modules/ethers/dist/ethers.min.js'),
        p = r('../../node_modules/3box/lib/api.js'),
        b = r('./src/utils/eth.js'),
        m = r('./src/modules/contract/contract.hooks.js'),
        g = r('../../node_modules/react-redux/es/index.js'),
        y = r('./src/modules/auth/auth.actions.js');
      function v(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function(t) {
                u()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var k = f.a.Alert();
      function _(e) {
        var t = e.address,
          r = e.metamask,
          n = e.setProfile;
        return Object(d.useEffect)(
          function() {
            t &&
              r &&
              (function() {
                var e = l()(
                  s.a.mark(function e() {
                    var i, o, a, u, c;
                    return s.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), Object(p.getProfile)(t);
                            case 3:
                              return (
                                (i = e.sent),
                                n([null, w({}, i)]),
                                (o = new h.providers.Web3Provider(r)),
                                (e.next = 8),
                                Object(b.f)(o, t)
                              );
                            case 8:
                              return (
                                (a = e.sent),
                                (u = a.msg),
                                (c = a.signature),
                                e.abrupt(
                                  'return',
                                  n([null, w(w({}, i), {}, { signature: c, msg: u })])
                                )
                              );
                            case 14:
                              return (
                                (e.prev = 14),
                                (e.t0 = e.catch(0)),
                                k.alert(e.t0.message),
                                e.abrupt('return', n([e.t0.message]))
                              );
                            case 18:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 14]]
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()();
          },
          [t]
        );
      }
      function S(e) {
        var t = Object(m.f)(),
          r = i()(t, 1)[0],
          n = Object(m.b)(),
          o = r && r[0] && h.utils.getAddress(r[0]),
          a = Object(g.d)();
        return Object(d.useCallback)(
          l()(
            s.a.mark(function t() {
              var r, i, u, c, l;
              return s.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (n && o) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        'return',
                        k.alert('Pleas enable Metamask to log in.')
                      );
                    case 2:
                      return (
                        (r = new h.providers.Web3Provider(n)),
                        (t.next = 5),
                        Object(b.f)(r, o)
                      );
                    case 5:
                      return (
                        (i = t.sent),
                        (u = i.signature),
                        (c = i.msg),
                        (t.next = 10),
                        a(Object(y.loginWithBox)({ signature: u, address: o, msg: c }))
                      );
                    case 10:
                      return (l = t.sent) && e && e(), t.abrupt('return', l);
                    case 13:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          ),
          [o, n, a, e]
        );
      }
    },
    './src/modules/auth/web/login.3box.js': function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return x;
      });
      var n = r('./node_modules/@babel/runtime/helpers/slicedToArray.js'),
        i = r.n(n),
        o = r('../../node_modules/react/index.js'),
        s = r.n(o),
        a = r('../../node_modules/prop-types/index.js'),
        u = r.n(a),
        c = r('./src/modules/auth/3box.hooks.js'),
        l = r('./src/modules/contract/contract.hooks.js'),
        d = r('../../node_modules/ethers/dist/ethers.min.js'),
        f = r('./node_modules/@babel/runtime/helpers/extends.js'),
        h = r.n(f),
        p = r('./node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        b = r.n(p),
        m = r('./src/modules/styled/uni.js'),
        g = r('./src/modules/navigation/ULink.component.js'),
        y = r('./src/styles/index.js'),
        v = r('./public/img/icons/3box.png'),
        w = s.a.createElement(m.s, {
          resizeMode: 'contain',
          source: v,
          w: 3,
          h: 3,
          mr: 1.5
        }),
        k = r('./public/img/metamask.png'),
        _ = s.a.createElement(m.s, {
          resizeMode: 'contain',
          source: k,
          w: 3,
          h: 3,
          mr: 1.5
        }),
        S = r('./public/img/desktop.png');
      m.s;
      function j(e) {
        var t = e.text,
          r = e.onPress,
          n = b()(e, ['text', 'onPress']);
        return s.a.createElement(
          g.a,
          { to: '#', onClick: r },
          s.a.createElement(
            m.v,
            { c: y.b.blue },
            s.a.createElement(
              m.h,
              h()({}, n, { fdirection: 'row', bg: 'rgb(248,49,255)', image: w, text: t })
            )
          )
        );
      }
      function E(e) {
        var t = e.text,
          r = e.onPress,
          n = b()(e, ['text', 'onPress']);
        return s.a.createElement(
          g.a,
          { to: '#', onClick: r },
          s.a.createElement(
            m.v,
            { c: y.b.blue },
            s.a.createElement(
              m.h,
              h()({}, n, { fdirection: 'row', bg: '#161616', image: _, text: t })
            )
          )
        );
      }
      function x(e) {
        var t = e.close,
          r = e.text,
          n = e.type,
          a = Object(o.useState)(!1),
          u = i()(a, 2),
          c = u[0],
          l = u[1],
          d = 'metamask' === n ? E : j;
        return s.a.createElement(
          o.Fragment,
          null,
          c &&
            s.a.createElement(O, {
              close: t,
              resetLogin: function() {
                return l(!1);
              }
            }),
          s.a.createElement(d, {
            mr: [4, 0],
            mt: [0, 2],
            flex: 1,
            onPress: function(e) {
              e.preventDefault(),
                l(!1),
                setTimeout(function() {
                  return l(!0);
                });
            },
            text: r || 'Sign In with 3Box'
          })
        );
      }
      function O(e) {
        var t = e.close,
          r = Object(l.f)(),
          n = i()(r, 1)[0],
          s = Object(l.b)(),
          a = n && n[0] && d.utils.getAddress(n[0]),
          u = Object(c.b)(t);
        return (
          Object(o.useEffect)(
            function() {
              s && a && u();
            },
            [s, a]
          ),
          null
        );
      }
      (j.propTypes = { onPress: u.a.func, text: u.a.string }),
        (E.propTypes = { onPress: u.a.func, text: u.a.string }),
        (E.propTypes = { onPress: u.a.func, text: u.a.string }),
        u.a.func,
        u.a.string,
        (x.propTypes = { close: u.a.func, text: u.a.string, type: u.a.string }),
        (O.propTypes = { close: u.a.func });
    },
    './src/modules/contract/contract.hooks.js': function(e, t, r) {
      'use strict';
      r.d(t, 'c', function() {
        return w;
      }),
        r.d(t, 'f', function() {
          return k;
        }),
        r.d(t, 'b', function() {
          return _;
        }),
        r.d(t, 'a', function() {
          return S;
        }),
        r.d(t, 'd', function() {
          return j;
        }),
        r.d(t, 'e', function() {
          return E;
        });
      var n = r('./node_modules/@babel/runtime/helpers/toConsumableArray.js'),
        i = r.n(n),
        o = r('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        s = r.n(o),
        a = r('../../node_modules/react/index.js'),
        u = r('../../node_modules/react-redux/es/index.js'),
        c = r('./src/utils/eth.js'),
        l = r('./src/utils/web3.provider.js'),
        d = r('../../node_modules/redux/es/redux.js'),
        f = r('../../node_modules/redux-saga-web3/lib/index.js'),
        h = r('./src/utils/index.js'),
        p = r('./src/modules/contract/contract.selectors.js'),
        b = r('./src/modules/contract/contract.context.js');
      function m(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function(t) {
                s()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var y = h.a.Alert(),
        v = Object(l.c)(),
        w = function() {
          var e = Object(b.b)(),
            t = e.actions,
            r = e.tokenAddress,
            n = Object(u.d)(),
            i = {
              getEvent: Object(a.useCallback)(
                function(e) {
                  n(t.events[e].get({ at: r }));
                },
                [n, t, r]
              ),
              subscribeToEvent: Object(a.useCallback)(
                function(e) {
                  return (
                    n(t.events[e].get({ at: r })), n(t.events[e].subscribe({ at: r }))
                  );
                },
                [n, t, r]
              ),
              call: Object(a.useCallback)(
                function(e, i) {
                  return n(
                    i ? t.methods[e]({ at: r }).call(i) : t.methods[e]({ at: r }).call()
                  );
                },
                [n, t, r]
              ),
              send: Object(a.useCallback)(
                function(e, i) {
                  for (
                    var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2;
                    a < o;
                    a++
                  )
                    s[a - 2] = arguments[a];
                  var u;
                  return n(
                    s
                      ? (u = t.methods[e](g({ at: r }, i))).send.apply(u, s)
                      : t.methods[e](g({ at: r }, i)).send()
                  );
                },
                [n, t, r]
              )
            };
          return t ? i : {};
        },
        k = function() {
          Object(b.b)(), _();
          var e,
            t = Object(p.b)(),
            r = ((e = Object(u.d)()),
            {
              init: Object(a.useCallback)(
                function(t) {
                  return e(f.actions.init.init(t));
                },
                [e]
              ),
              network: Object(d.bindActionCreators)(g({}, f.actions.network), e),
              accounts: Object(d.bindActionCreators)(g({}, f.actions.accounts), e)
            }).init;
          return (
            Object(a.useEffect)(
              function() {
                t.isInitialized || r(v);
              },
              [t.status, t.isInitialized, r]
            ),
            [t.accounts, t.isInitialized, t.networkId]
          );
        },
        _ = function() {
          var e = Object(u.d)(),
            t = Object(l.a)();
          return (
            t && (t.autoRefreshOnNetworkChange = !1),
            Object(a.useEffect)(
              function() {
                if (!t) return function() {};
                try {
                  t.enable();
                } catch (e) {
                  return function() {};
                }
                var r = function(t) {
                    return e(f.actions.accounts.getSuccess(t));
                  },
                  n = function() {
                    return e(f.actions.network.getId());
                  };
                return (
                  t.on('accountsChanged', r),
                  t.on('networkChanged', n),
                  function() {
                    t.off('accountsChanged', r), t.off('networkChanged', n);
                  }
                );
              },
              [e, t]
            ),
            t
          );
        },
        S = function() {
          var e = Object(p.b)().accounts,
            t = Object(p.a)().userBalance,
            r = w(),
            n = r.call,
            i = r.subscribeToEvent,
            o = !!t;
          return (
            Object(a.useEffect)(
              function() {
                i && i('Transfer'), e && e.length && !o && n && n('balanceOf', e[0]);
              },
              [e, o, n, i]
            ),
            t && 'SUCCESS' === t.phase ? Object(c.a)(t.value, 18) : null
          );
        },
        j = function() {
          Object(b.b)();
          var e = Object(p.a)().getState,
            t = Object(p.b)(),
            r = w(),
            n = r.call,
            i = r.send;
          return k(), S(), { accounts: t.accounts, getState: e, call: n, send: i };
        },
        E = function(e) {
          var t = e.tx,
            r = e.method,
            n = e.callback,
            o = Object(p.a)().getState;
          if (!t || !o) return null;
          var s = o.apply(void 0, [r].concat(i()(t.payload.args)));
          return s && 'RECEIPT' === s.phase
            ? (y.alert('Transaction Completed!', 'success'), n(), 'success')
            : s && 'ERROR' === s.phase
            ? (y.alert(s.value.get('message')), n(), 'error')
            : 'pending';
        };
    },
    './src/modules/contract/contract.selectors.js': function(e, t, r) {
      'use strict';
      r.d(t, 'b', function() {
        return h;
      }),
        r.d(t, 'a', function() {
          return p;
        });
      var n = r('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        i = r.n(n),
        o = r('../../node_modules/react-redux/es/index.js'),
        s = r('./src/utils/eth.js'),
        a = r('./src/modules/contract/contract.context.js');
      function u(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function(t) {
                i()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var l = function(e, t, r) {
          return e.methods.balanceOf({ at: r })(
            t,
            t.web3 && t.web3.accounts.items && t.web3.accounts.items[0]
          );
        },
        d = function(e, t, r) {
          return e.methods.nonceOf({ at: r })(
            t,
            t.web3 && t.web3.accounts.items && t.web3.accounts.items[0]
          );
        },
        f = function(e) {
          if (!e) return {};
          var t =
            'number' != typeof Object(s.e)(e.value) ? Object(s.e)(e.value) : e.value;
          return c(c({}, e), {}, { value: t });
        },
        h = function() {
          return (
            Object(a.b)(),
            Object(o.e)(function(e) {
              return {
                web3: e.web3,
                status: e.web3 && e.web3.init.status,
                isInitialized: e.web3 && e.web3.init.isInitialized,
                networkId: e.web3 && e.web3.network.id && e.web3.network.id,
                accounts: e.web3 && e.web3.accounts.items && e.web3.accounts.items,
                address: e.web3 && e.web3.accounts.items && e.web3.accounts.items[0]
              };
            })
          );
        },
        p = function() {
          var e = Object(a.b)(),
            t = e.selectors,
            r = e.tokenAddress,
            n = e.initialized;
          return Object(o.e)(function(e) {
            return n
              ? {
                  userNonce: d(t, e, r),
                  userBalance: l(t, e, r),
                  RelevantToken: e.RelevantToken,
                  getState: function(n) {
                    for (
                      var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
                      s < i;
                      s++
                    )
                      o[s - 1] = arguments[s];
                    return t.methods[n]
                      ? f(t.methods[n]({ at: r }).apply(void 0, [e].concat(o)))
                      : {};
                  },
                  eventCache: function(e) {
                    return t.events[e];
                  }
                }
              : {
                  getState: function() {
                    return {};
                  }
                };
          });
        };
    },
    './src/modules/form/validators.js': function(e, t, r) {
      'use strict';
      r.d(t, 'f', function() {
        return c;
      }),
        r.d(t, 'd', function() {
          return l;
        }),
        r.d(t, 'h', function() {
          return d;
        }),
        r.d(t, 'a', function() {
          return f;
        }),
        r.d(t, 'b', function() {
          return h;
        }),
        r.d(t, 'g', function() {
          return p;
        }),
        r.d(t, 'e', function() {
          return b;
        }),
        r.d(t, 'c', function() {
          return m;
        });
      var n = r('./node_modules/@babel/runtime/regenerator/index.js'),
        i = r.n(n),
        o = r('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = r.n(o),
        a = r('./src/utils/text.js'),
        u = r('./src/modules/auth/auth.actions.js'),
        c = function(e) {
          return e || 'number' == typeof e ? void 0 : 'Required';
        },
        l = function(e) {
          if (e && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(e))
            return 'Not a valid e-mail';
        },
        d = function(e) {
          if (!a.NAME_PATTERN.test(e))
            return 'Can only contain letters, \nnumbers, dashes and underscores';
        },
        f = (function() {
          var e = s()(
            i.a.mark(function e(t) {
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(u.checkUser)(t, 'email', !0)();
                    case 2:
                      if (!e.sent) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt('return', 'This email has already been used');
                    case 5:
                      return e.abrupt('return', void 0);
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        h = (function() {
          var e = s()(
            i.a.mark(function e(t) {
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 3), Object(u.checkUser)(t, 'name', !0)();
                    case 3:
                      if (!e.sent) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt('return', 'This username is already taken');
                    case 6:
                      return e.abrupt('return', void 0);
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        p = (function() {
          var e = s()(
            i.a.mark(function e(t) {
              var r, n, o, s;
              return i.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((r = {}), !t.username)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 4), h(t.username);
                    case 4:
                      (n = e.sent) && (r.username = n);
                    case 6:
                      if (!t.email) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 9), f(t.email);
                    case 9:
                      (o = e.sent) && (r.email = o);
                    case 11:
                      if (!t.handle) {
                        e.next = 16;
                        break;
                      }
                      return (e.next = 14), h(t.handle);
                    case 14:
                      (s = e.sent) && (r.handle = s);
                    case 16:
                      if (!Object.keys(r).length) {
                        e.next = 18;
                        break;
                      }
                      throw r;
                    case 18:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        b = function(e) {
          var t = {};
          return e.password && e.confirmPassword
            ? (e.password !== e.confirmPassword &&
                (t.confirmPassword = 'Passwords must match'),
              t)
            : null;
        },
        m = function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return function(e) {
            return t.reduce(function(t, r) {
              return t || r(e);
            }, void 0);
          };
        };
    },
    './src/modules/profile/web/settingsModal.container.js': function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'default', function() {
          return ce;
        });
      var n = r('./node_modules/@babel/runtime/regenerator/index.js'),
        i = r.n(n),
        o = r('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        s = r.n(o),
        a = r('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        u = r.n(a),
        c = r('../../node_modules/react/index.js'),
        l = r.n(c),
        d = r('../../node_modules/prop-types/index.js'),
        f = r.n(d),
        h = r('./src/utils/index.js'),
        p = r('../../node_modules/react-redux/es/index.js'),
        b = r('./src/modules/auth/auth.actions.js'),
        m = r('./node_modules/@babel/runtime/helpers/extends.js'),
        g = r.n(m),
        y = r('./src/modules/styled/form/reduxformimageupload.component.js'),
        v = r('./src/modules/styled/uni.js'),
        w = r('./src/modules/styled/form/reduxformfield.component.js'),
        k = r('./src/modules/styled/web.js'),
        _ = r('./src/styles/index.js'),
        S = r('../../node_modules/redux-form/es/Field.js'),
        j = r('../../node_modules/redux-form/es/reduxForm.js'),
        E = r(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        x = r('./src/modules/form/validators.js'),
        O = r('./src/modules/navigation/ULink.component.js'),
        A = r('../../node_modules/react-router/esm/react-router.js'),
        C = E.default.form.withConfig({
          displayName: 'settingsModalcomponent__Form',
          componentId: 'sc-18jdkmm-0'
        })(['display:flex;flex-direction:column;']);
      function R(e) {
        var t = this,
          r = e.handleSubmit,
          n = e.location,
          i = [
            {
              name: 'image',
              component: y.a,
              placeholder: '/img/blueR.png',
              imageComponent: l.a.createElement(v.p, null),
              type: 'file-upload',
              label: 'User Image',
              validate: []
            },
            {
              name: 'name',
              component: w.a,
              type: 'text',
              label: 'Display Name',
              validate: [x.f]
            },
            { name: 'bio', component: w.a, type: 'text', label: 'Bio' }
          ];
        return l.a.createElement(
          k.r,
          { display: 'flex', fdirection: 'column' },
          l.a.createElement(
            C,
            { onSubmit: r },
            i.map(function(e, t) {
              return l.a.createElement(S.a, g()({}, e, { key: t }));
            }),
            l.a.createElement(
              O.a,
              { mt: 2, to: '/user/resetPassword'.concat(n.search) },
              'Reset Password'
            ),
            l.a.createElement(
              k.r,
              { justify: 'flex-end', mt: 3, fdirection: 'row' },
              l.a.createElement(
                k.b,
                {
                  bg: _.b.white,
                  c: _.b.black,
                  onClick: function() {
                    return t.props.close();
                  }
                },
                'Cancel'
              ),
              l.a.createElement(k.b, { ml: 2, c: _.b.white, type: 'submit' }, 'Submit')
            )
          )
        );
      }
      R.propTypes = {
        close: f.a.func,
        handleSubmit: f.a.func,
        initialValues: f.a.object,
        history: f.a.object,
        location: f.a.object
      };
      var B = Object(A.g)(Object(j.a)({ form: 'settings' })(R)),
        P = r('./src/utils/alert.js'),
        N = r('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        I = r.n(N),
        T = r('./node_modules/@babel/runtime/helpers/createClass.js'),
        D = r.n(T),
        F = r('./node_modules/@babel/runtime/helpers/inherits.js'),
        U = r.n(F),
        L = r('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        M = r.n(L),
        K = r('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        H = r.n(K),
        W = r('../../node_modules/lodash/get.js'),
        V = r.n(W),
        z = r('./src/modules/activity/activity.actions.js'),
        G = r('../../node_modules/redux/es/redux.js'),
        J = [
          { label: 'Betting', settings: [{ field: 'bet' }] },
          {
            label: 'Notifications',
            settings: [
              { field: 'email', label: 'Email Notifications' },
              { field: 'desktop', label: 'Desktop Notifications' },
              { field: 'mobile', label: 'Mobile Notifications' }
            ]
          }
        ],
        q = {
          email: {
            personal: {
              label: 'Replies, mentions and earnings',
              description:
                'Get notified when you earn rewards, someone replies to your comments or mentions you in a post.'
            },
            general: {
              label: 'General notifications',
              description:
                'Get notified about new posts and comments on posts you have interacted with.'
            },
            digest: {
              label: 'Email digest',
              description:
                'Receive periodic emails with the top posts from your favorite communities.'
            }
          },
          mobile: {
            all: {
              label: 'Mobile notifications',
              description: 'Receive mobile app notifications for any community activity.'
            }
          },
          desktop: {
            all: {
              label: 'Desktop notifications',
              description:
                'Receive notifications in a browser for any community activity.'
            }
          },
          bet: {
            manual: {
              label: 'Betting Mode',
              description:
                'Betting mode allows you to choose a custom amount for each bet.'
            }
          }
        },
        Y = r('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        X = r.n(Y),
        Z = r('../../node_modules/react-native-web/dist/exports/Animated/index.js'),
        Q = r(
          '../../node_modules/react-native-web/dist/exports/TouchableOpacity/index.js'
        );
      function $(e) {
        var t = (function() {
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
          var r,
            n = H()(e);
          if (t) {
            var i = H()(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return M()(this, r);
        };
      }
      var ee = (function(e) {
        U()(r, e);
        var t = $(r);
        function r() {
          var e;
          I()(this, r);
          for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(i))),
            s()(X()(e), 'offsetX', new Z.a.Value(0)),
            s()(X()(e), 'dimensions', r.calculateDimensions(e.props.size)),
            s()(X()(e), 'createToggleSwitchStyle', function() {
              return {
                justifyContent: 'center',
                width: e.dimensions.width,
                borderRadius: 20,
                padding: e.dimensions.padding,
                backgroundColor: e.props.isOn ? e.props.onColor : e.props.offColor
              };
            }),
            s()(X()(e), 'createInsideCircleStyle', function() {
              return {
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 4,
                marginLeft: 4,
                left: 0,
                position: 'absolute',
                backgroundColor: 'white',
                transform: [{ translateX: e.offsetX }],
                width: e.dimensions.circleWidth,
                height: e.dimensions.circleHeight,
                borderRadius: e.dimensions.circleWidth / 2
              };
            }),
            e
          );
        }
        return (
          D()(
            r,
            [
              {
                key: 'render',
                value: function() {
                  var e = this.props.isOn
                    ? this.dimensions.width - this.dimensions.translateX
                    : 0;
                  Z.a
                    .timing(this.offsetX, { toValue: e, delay: 0, duration: 300 })
                    .start();
                  var t = this.props,
                    r = t.isOn,
                    n = t.onToggle;
                  return l.a.createElement(
                    Q.a,
                    {
                      style: this.createToggleSwitchStyle(),
                      activeOpacity: 0.8,
                      onPress: function() {
                        n(!r);
                      }
                    },
                    l.a.createElement(Z.a.View, { style: this.createInsideCircleStyle() })
                  );
                }
              }
            ],
            [
              {
                key: 'calculateDimensions',
                value: function(e) {
                  switch (e) {
                    case 'custom':
                      return {
                        width: 32,
                        padding: 10,
                        circleWidth: 14,
                        circleHeight: 14,
                        translateX: 22
                      };
                    case 'custom2':
                      return {
                        width: 32,
                        padding: 10,
                        circleWidth: 14,
                        circleHeight: 14,
                        translateX: 18
                      };
                    case 'small':
                      return {
                        width: 50,
                        padding: 10,
                        circleWidth: 15,
                        circleHeight: 15,
                        translateX: 22
                      };
                    case 'large':
                      return {
                        width: 100,
                        padding: 20,
                        circleWidth: 30,
                        circleHeight: 30,
                        translateX: 38
                      };
                    default:
                      return {
                        width: 60,
                        padding: 12,
                        circleWidth: 18,
                        circleHeight: 18,
                        translateX: 26
                      };
                  }
                }
              }
            ]
          ),
          r
        );
      })(l.a.Component);
      function te(e) {
        var t = e.parent,
          r = e.label,
          n = e.notification,
          i = e.text,
          o = e.togglePosition,
          a = e.DescriptionComponent,
          u = Object(p.d)(),
          c = i || q[t][r],
          d = 'right' === o;
        if (!c) return null;
        var f = a || v.d;
        return l.a.createElement(
          v.E,
          { mt: 3, fdirection: 'row'.concat(d ? '-reverse' : ''), align: 'center' },
          l.a.createElement(ee, {
            isOn: !!n,
            onColor: _.b.green,
            offColor: _.b.grey,
            size: 'custom',
            onToggle: function(e) {
              return u(Object(b.updateNotificationSettings)(s()({}, t, s()({}, r, e))));
            }
          }),
          l.a.createElement(
            v.E,
            { fdirection: 'column', ml: d ? 0 : 2, mr: d ? 1.5 : 0, flex: 1 },
            c.label ? l.a.createElement(v.C, null, c.label) : null,
            c.description ? l.a.createElement(f, null, c.description) : null
          )
        );
      }
      function re(e) {
        var t = (function() {
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
          var r,
            n = H()(e);
          if (t) {
            var i = H()(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return M()(this, r);
        };
      }
      s()(ee, 'propTypes', {
        isOn: f.a.bool.isRequired,
        onColor: f.a.string.isRequired,
        offColor: f.a.string.isRequired,
        size: f.a.string,
        onToggle: f.a.func.isRequired
      }),
        s()(ee, 'defaultProps', {
          isOn: !1,
          onColor: '#634fc9',
          offColor: '#ecf0f1',
          size: 'medium',
          labelStyle: {},
          icon: null
        }),
        (te.propTypes = {
          parent: f.a.string,
          label: f.a.string,
          notification: f.a.bool,
          togglePosition: f.a.string,
          text: f.a.shape({ label: f.a.string, description: f.a.description }),
          DescriptionComponent: f.a.object
        });
      var ne = (function(e) {
        U()(n, e);
        var t,
          r = re(n);
        function n() {
          return I()(this, n), r.apply(this, arguments);
        }
        return (
          D()(n, [
            {
              key: 'componentDidUpdate',
              value:
                ((t = u()(
                  i.a.mark(function e(t) {
                    var r, n, o, s;
                    return i.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = this.props),
                                (n = r.actions),
                                (o = r.user),
                                (s = o.notificationSettings),
                                !V()(t, 'user.notificationSettings.desktop.all') &&
                                  V()(s, 'desktop.all') &&
                                  n.enableDesktopNotifications(),
                                !V()(t, 'user.notificationSettings.mobile.all') &&
                                  V()(s, 'mobile.all') &&
                                  n.enableMobileNotifications(o),
                                e.abrupt('return', null)
                              );
                            case 5:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function(e) {
                  return t.apply(this, arguments);
                })
            },
            {
              key: 'render',
              value: function() {
                var e = this.props.user;
                if (!e) return null;
                var t = e.notificationSettings;
                return t
                  ? l.a.createElement(
                      c.Fragment,
                      null,
                      J.map(function(e) {
                        return l.a.createElement(
                          v.E,
                          { key: e.label, mb: 4, display: 'flex', fdirection: 'column' },
                          l.a.createElement(v.q, null, e.label),
                          e.settings.map(function(e) {
                            return l.a.createElement(ie, {
                              key: e.field,
                              field: e.field,
                              label: e.label,
                              notifications: t[e.field]
                            });
                          })
                        );
                      })
                    )
                  : null;
              }
            }
          ]),
          n
        );
      })(c.Component);
      function ie(e) {
        var t = e.label,
          r = e.notifications,
          n = e.field;
        if (!r) return null;
        var i = Object.keys(r).sort();
        return l.a.createElement(
          v.E,
          null,
          t && l.a.createElement(v.x, { mt: 4 }, t),
          r &&
            i.map(function(e) {
              return l.a.createElement(te, {
                key: e,
                label: e,
                parent: n,
                notification: r && r[e]
              });
            })
        );
      }
      s()(ne, 'propTypes', { user: f.a.object, actions: f.a.object }),
        (ie.propTypes = {
          label: f.a.string,
          notifications: f.a.object,
          field: f.a.string
        });
      var oe = Object(p.c)(
          function(e) {
            return { user: e.auth.user, enableReinitialize: !0 };
          },
          function(e) {
            return {
              actions: Object(G.bindActionCreators)(
                {
                  enableDesktopNotifications: z.enableDesktopNotifications,
                  enableMobileNotifications: b.enableMobileNotifications
                },
                e
              )
            };
          }
        )(ne),
        se = r('./src/modules/auth/web/login.3box.js');
      function ae(e, t) {
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
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ae(Object(r), !0).forEach(function(t) {
                s()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ae(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function ce(e) {
        var t = e.close,
          r = Object(p.d)(),
          n = Object(p.e)(function(e) {
            return e.auth.user;
          }),
          o = (function() {
            var e = u()(
              i.a.mark(function e(n) {
                var o, s;
                return i.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            !(
                              (o = ue({}, n)).image &&
                              o.image.preview &&
                              o.image.fileName
                            ))
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 5),
                            h.e.toS3Advanced(o.image.preview, o.image.fileName)
                          );
                        case 5:
                          (s = e.sent), (o.image = s.url);
                        case 7:
                          return (e.next = 9), r(Object(b.updateUser)(o));
                        case 9:
                          e.sent && t(), (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13), (e.t0 = e.catch(0)), P.browserAlerts.alert(e.t0);
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 13]]
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })();
        return l.a.createElement(
          v.E,
          null,
          l.a.createElement(B, { initialValues: n, enableReinitialize: !0, onSubmit: o }),
          l.a.createElement(v.q, null, 'Connect Accounts'),
          l.a.createElement(
            v.E,
            { m: '3 0', fdirection: 'row', align: 'center' },
            l.a.createElement(se.a, {
              type: 'metamask',
              text: 'Connect Ethereum Address'
            }),
            n.ethLogin
              ? l.a.createElement(
                  v.B,
                  null,
                  'Connected address: ',
                  l.a.createElement(v.o, { address: n.ethLogin })
                )
              : l.a.createElement(v.B, null, 'Not connected')
          ),
          l.a.createElement(oe, null)
        );
      }
      ce.propTypes = { close: f.a.func };
    },
    './src/modules/styled/form/reduxformfield.component.js': function(e, t, r) {
      'use strict';
      var n = r('./node_modules/@babel/runtime/helpers/extends.js'),
        i = r.n(n),
        o = r('../../node_modules/react/index.js'),
        s = r.n(o),
        a = r('../../node_modules/prop-types/index.js'),
        u = r.n(a),
        c = r('./src/modules/styled/web.js'),
        l = r('./src/styles/index.js'),
        d = function(e) {
          var t = e.label,
            r = e.input,
            n = e.type,
            o = e.meta,
            a = e.name,
            u = e.placeholder,
            d = e.autocomplete,
            f = o.dirty,
            h = o.touched,
            p = o.error,
            b = o.warning;
          return s.a.createElement(
            c.r,
            { display: 'flex', fdirection: 'column', mt: 3 },
            t
              ? s.a.createElement(
                  'label',
                  { 'html-for': a },
                  s.a.createElement(c.i, { c: l.b.black }, t)
                )
              : null,
            s.a.createElement(
              c.g,
              i()({}, r, {
                placeholder: u || t,
                autoComplete: d,
                name: a,
                type: n,
                border: 1,
                p: '2 2',
                mt: 1
              })
            ),
            (f || h) &&
              ((p && s.a.createElement(c.k, { c: l.b.red, mt: 1 }, p)) ||
                (b && s.a.createElement(c.k, { c: l.b.red }, b)))
          );
        };
      (d.propTypes = {
        error: u.a.string,
        type: u.a.string,
        name: u.a.string,
        label: u.a.oneOfType([u.a.string, u.a.node]),
        placeholder: u.a.string,
        meta: u.a.object,
        input: u.a.object,
        autocomplete: u.a.string
      }),
        (d.defaultProps = { autocomplete: null }),
        (t.a = d);
    },
    './src/modules/styled/form/reduxformimageupload.component.js': function(e, t, r) {
      'use strict';
      var n = r('../../node_modules/react/index.js'),
        i = r.n(n),
        o = r('../../node_modules/prop-types/index.js'),
        s = r.n(o),
        a = r('./node_modules/@babel/runtime/regenerator/index.js'),
        u = r.n(a),
        c = r('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        l = r.n(c),
        d = r('./node_modules/@babel/runtime/helpers/classCallCheck.js'),
        f = r.n(d),
        h = r('./node_modules/@babel/runtime/helpers/createClass.js'),
        p = r.n(h),
        b = r('./node_modules/@babel/runtime/helpers/assertThisInitialized.js'),
        m = r.n(b),
        g = r('./node_modules/@babel/runtime/helpers/inherits.js'),
        y = r.n(g),
        v = r('./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'),
        w = r.n(v),
        k = r('./node_modules/@babel/runtime/helpers/getPrototypeOf.js'),
        _ = r.n(k),
        S = r('./node_modules/@babel/runtime/helpers/defineProperty.js'),
        j = r.n(S),
        E = r('./src/utils/index.js'),
        x = r('./src/modules/styled/uni.js');
      function O(e) {
        var t = (function() {
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
          var r,
            n = _()(e);
          if (t) {
            var i = _()(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return w()(this, r);
        };
      }
      var A = E.a.Alert(),
        C = (function(e) {
          y()(n, e);
          var t,
            r = O(n);
          function n() {
            var e;
            f()(this, n);
            for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++)
              i[o] = arguments[o];
            return (
              (e = r.call.apply(r, [this].concat(i))),
              j()(m()(e), 'state', { preview: null, fileName: null }),
              e
            );
          }
          return (
            p()(n, [
              {
                key: 'processImage',
                value: function() {
                  var e = this,
                    t = this.fileInput.files[0];
                  E.c
                    .loadImage(t)
                    .then(function(r) {
                      var n = r
                          .split(',')[0]
                          .split('/')[1]
                          .split(';')[0],
                        i = t.name.substr(0, n.lastIndexOf('.')) + '.' + n;
                      e.setState({ preview: r, fileName: i }),
                        e.props.onChange({ preview: r, fileName: i });
                    })
                    .catch(function(e) {
                      A.alert('Error uploading image ' + e);
                    });
                }
              },
              {
                key: 'uploadImage',
                value:
                  ((t = l()(
                    u.a.mark(function e() {
                      var t;
                      return u.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.state.fileName && this.state.preview) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  A('Please select an image'), e.abrupt('return', null)
                                );
                              case 3:
                                return (
                                  (e.next = 5),
                                  E.e.toS3Advanced(
                                    this.state.preview,
                                    this.state.fileName
                                  )
                                );
                              case 5:
                                return (
                                  (t = e.sent),
                                  this.setState({ preview: null, fileName: null }),
                                  this.props.onChange(t),
                                  e.abrupt('return', t)
                                );
                              case 9:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function() {
                    return t.apply(this, arguments);
                  })
              },
              {
                key: 'renderPreview',
                value: function() {
                  var e = this.props,
                    t = e.placeholder,
                    r = e.imageComponent,
                    n = this.state.preview;
                  return !n && t
                    ? i.a.cloneElement(r, { source: { uri: t } })
                    : n && r
                    ? i.a.cloneElement(r, { source: { uri: n } })
                    : n
                    ? i.a.createElement('img', { src: n, style: { maxWidth: '300px' } })
                    : null;
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.renderPreview();
                  return i.a.createElement(
                    x.E,
                    { display: 'flex', fdirection: 'row', align: 'center' },
                    i.a.createElement(x.E, { mr: 2 }, t),
                    i.a.createElement('input', {
                      ref: function(t) {
                        return (e.fileInput = t);
                      },
                      onChange: this.processImage.bind(this),
                      accept: 'image/*',
                      name: 'img',
                      type: 'file'
                    })
                  );
                }
              }
            ]),
            n
          );
        })(n.Component);
      j()(C, 'propTypes', {
        placeholder: s.a.string,
        imageComponent: s.a.node,
        onChange: s.a.func
      });
      var R = r('./src/modules/styled/web.js'),
        B = r('./src/styles/index.js'),
        P = function(e) {
          var t = e.label,
            r = e.meta,
            n = e.name,
            o = e.placeholder,
            s = e.imageComponent,
            a = e.input,
            u = a.onChange,
            c = a.value,
            l = r.touched,
            d = r.error,
            f = r.warning;
          return i.a.createElement(
            R.r,
            { display: 'flex', fdirection: 'column', mt: 3 },
            t
              ? i.a.createElement(
                  'label',
                  { 'html-for': n },
                  i.a.createElement(R.i, { c: B.b.black }, t)
                )
              : null,
            i.a.createElement(C, {
              placeholder: c || o,
              imageComponent: s,
              onChange: function(e) {
                u(e);
              }
            }),
            l &&
              ((d && i.a.createElement(R.k, { c: B.b.red, mt: 1 }, d)) ||
                (f && i.a.createElement(R.k, { c: B.b.red }, f)))
          );
        };
      P.propTypes = {
        name: s.a.string,
        label: s.a.string,
        meta: s.a.object,
        input: s.a.object,
        placeholder: s.a.node,
        imageComponent: s.a.node
      };
      t.a = P;
    },
    './src/modules/styled/web.js': function(e, t, r) {
      'use strict';
      r.d(t, 'l', function() {
        return u;
      }),
        r.d(t, 'r', function() {
          return c;
        }),
        r.d(t, 'o', function() {
          return l;
        }),
        r.d(t, 'f', function() {
          return d;
        }),
        r.d(t, 'e', function() {
          return f;
        }),
        r.d(t, 'c', function() {
          return h;
        }),
        r.d(t, 'p', function() {
          return p;
        }),
        r.d(t, 'i', function() {
          return b;
        }),
        r.d(t, 'k', function() {
          return m;
        }),
        r.d(t, 'a', function() {
          return g;
        }),
        r.d(t, 'b', function() {
          return y;
        }),
        r.d(t, 'j', function() {
          return v;
        }),
        r.d(t, 'h', function() {
          return w;
        }),
        r.d(t, 'g', function() {
          return k;
        }),
        r.d(t, 'n', function() {
          return _;
        }),
        r.d(t, 'm', function() {
          return S;
        }),
        r.d(t, 'd', function() {
          return j;
        }),
        r.d(t, 'q', function() {
          return E;
        });
      var n = r('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        i = r(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        o = r('./src/styles/index.js'),
        s = r(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        a = r(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        ),
        u = Object(i.default)(n.b).withConfig({
          displayName: 'web__StyledNavLink',
          componentId: 'kfa5fa-0'
        })(
          ['', ';color:', ';&.active{color:', ';}:hover{color:', ';}', ' ', ' ', ' ', ''],
          o.c.header,
          o.b.grey,
          o.b.black,
          o.b.black,
          o.f.font,
          o.f.display,
          o.f.color,
          o.f.margin
        ),
        c = i.default.div.withConfig({
          displayName: 'web__View',
          componentId: 'kfa5fa-1'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.padding,
          o.f.flex,
          o.f.font,
          o.f.background,
          o.f.border,
          o.f.width,
          o.f.height,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        l = i.default.span.withConfig({
          displayName: 'web__Text',
          componentId: 'kfa5fa-2'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.padding,
          o.f.flex,
          o.f.font,
          o.f.background,
          o.f.border,
          o.f.color,
          function(e) {
            return e.onClick ? 'cursor: pointer;' : '';
          }
        ),
        d = i.default.span.withConfig({
          displayName: 'web__InlineText',
          componentId: 'kfa5fa-3'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.padding,
          o.f.font,
          o.f.background,
          o.f.border,
          o.f.color
        ),
        f = i.default.img.withConfig({
          displayName: 'web__Image',
          componentId: 'kfa5fa-4'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.height,
          o.f.width,
          o.f.padding,
          o.f.background,
          o.f.borderRadius,
          o.f.flex
        ),
        h =
          (i.default.span.withConfig({
            displayName: 'web__ImageWrapper',
            componentId: 'kfa5fa-5'
          })(
            ['display:flex;flex-direction:row;align-items:center;', ' ', ''],
            o.f.margin,
            o.f.flex
          ),
          i.default.div.withConfig({
            displayName: 'web__Divider',
            componentId: 'kfa5fa-6'
          })(
            ['', ' ', ' ', ' ', ''],
            o.f.margin,
            o.f.padding,
            o.f.width,
            o.e.universalBorder('bottom')
          )),
        p =
          (Object(i.default)(l).withConfig({
            displayName: 'web__Header',
            componentId: 'kfa5fa-7'
          })(['', ' ', ''], o.c.header, o.f.color),
          Object(i.default)(l).withConfig({
            displayName: 'web__Title',
            componentId: 'kfa5fa-8'
          })(['', ' ', ' ', ''], o.c.title, o.f.color, o.f.font)),
        b = Object(i.default)(l).withConfig({
          displayName: 'web__LinkFont',
          componentId: 'kfa5fa-9'
        })(['', ' ', ' ', ''], o.c.link, o.f.color, o.f.font),
        m = Object(i.default)(l).withConfig({
          displayName: 'web__SecondaryText',
          componentId: 'kfa5fa-10'
        })(['', ' ', ' ', ''], o.c.secondaryText, o.f.font, o.f.color),
        g =
          (Object(i.default)(l).withConfig({
            displayName: 'web__AltLink',
            componentId: 'kfa5fa-11'
          })(['', ' ', ' ', ''], o.c.altLink, o.f.color, o.f.font),
          Object(i.default)(l).withConfig({
            displayName: 'web__CommentText',
            componentId: 'kfa5fa-12'
          })(['', ' ', ' ', ''], o.c.commentText, o.f.color, o.f.font),
          Object(i.default)(l).withConfig({
            displayName: 'web__BodyText',
            componentId: 'kfa5fa-13'
          })(['', ' ', ' ', ''], o.c.bodyStyle, o.f.color, o.f.font)),
        y = i.default.button.withConfig({
          displayName: 'web__Button',
          componentId: 'kfa5fa-14'
        })(
          [
            '',
            ' ',
            ' ',
            ';',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' &:hover{',
            '};user-select:none;cursor:pointer;'
          ],
          o.e.button,
          o.e.buttonFont,
          function(e) {
            return e.disabled
              ? '\n    color: '
                  .concat(o.b.white, ';\n    background: ')
                  .concat(o.b.grey, ';\n    ')
              : '';
          },
          o.f.flex,
          o.f.background,
          o.f.padding,
          o.f.width,
          o.f.margin,
          o.f.color,
          o.f.width,
          o.f.height,
          o.e.activeButtonShadow
        ),
        v = Object(i.default)(l).withConfig({
          displayName: 'web__NumericalValue',
          componentId: 'kfa5fa-15'
        })(
          ['', ' ', ' ', ' ', ' ', ''],
          o.c.numericalValue,
          o.f.width,
          o.f.font,
          o.f.inheritfont,
          o.f.color
        ),
        w = i.default.input.withConfig({
          displayName: 'web__InputPlain',
          componentId: 'kfa5fa-16'
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' ',
            '::placeholder:{font-size:',
            ';line-height:',
            ';};:focus{outline:none !important;',
            '}'
          ],
          o.f.font,
          o.f.flex,
          o.f.border,
          o.f.padding,
          o.f.margin,
          Object(o.i)(1.75),
          Object(o.i)(1.75),
          o.e.universalBorder('', o.b.blue)
        ),
        k = i.default.input.withConfig({
          displayName: 'web__Input',
          componentId: 'kfa5fa-17'
        })(
          [
            'padding:',
            ' ',
            ';margin-top:',
            ';',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '::placeholder:{font-size:',
            ';line-height:',
            ';};:focus{outline:none !important;',
            '}'
          ],
          Object(o.i)(2),
          Object(o.i)(2),
          Object(o.i)(1),
          o.c.bodyStyle,
          o.f.font,
          o.f.flex,
          o.f.border,
          o.e.universalBorder(),
          o.f.padding,
          o.f.margin,
          Object(o.i)(1.75),
          Object(o.i)(1.75),
          o.e.universalBorder('', o.b.blue)
        ),
        _ = Object(i.default)(a.a).withConfig({
          displayName: 'web__StyledTextareaAutocomplete',
          componentId: 'kfa5fa-18'
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' padding:',
            ' ',
            ';min-width:0;&:focus{outline:1px solid ',
            ';}',
            ' ',
            ' ',
            ''
          ],
          o.c.bodyStyle,
          o.f.border,
          o.f.flex,
          o.e.universalBorder(),
          Object(o.i)(2),
          Object(o.i)(2),
          o.b.blue,
          o.f.padding,
          o.f.margin,
          o.f.height
        ),
        S = Object(i.default)(s.a).withConfig({
          displayName: 'web__StyledTextarea',
          componentId: 'kfa5fa-19'
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' padding:',
            ' ',
            ';min-width:0;&:focus{outline:1px solid ',
            ';}',
            ' ',
            ' ',
            ''
          ],
          o.c.bodyStyle,
          o.f.border,
          o.f.flex,
          o.e.universalBorder(),
          Object(o.i)(2),
          Object(o.i)(2),
          o.b.blue,
          o.f.padding,
          o.f.margin,
          o.f.height
        ),
        j = i.default.form.withConfig({
          displayName: 'web__Form',
          componentId: 'kfa5fa-20'
        })(['', ' ', ''], o.f.flex, o.f.margin),
        E = i.default.video.withConfig({
          displayName: 'web__Video',
          componentId: 'kfa5fa-21'
        })(
          ['', ' ', ' ', ' ', ' ', ' ', ' ', ''],
          o.f.margin,
          o.f.height,
          o.f.width,
          o.f.padding,
          o.f.background,
          o.f.borderRadius,
          o.f.flex
        );
    },
    './src/utils/eth.js': function(e, t, r) {
      'use strict';
      r.d(t, 'f', function() {
        return c;
      }),
        r.d(t, 'g', function() {
          return d;
        }),
        r.d(t, 'e', function() {
          return f;
        }),
        r.d(t, 'a', function() {
          return h;
        }),
        r.d(t, 'd', function() {
          return p;
        }),
        r.d(t, 'b', function() {
          return b;
        }),
        r.d(t, 'c', function() {
          return m;
        });
      var n = r('./node_modules/@babel/runtime/regenerator/index.js'),
        i = r.n(n),
        o = r('./node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = r.n(o),
        a = r('../../node_modules/crypto-browserify/index.js'),
        u = r.n(a);
      function c(e, t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = s()(
          i.a.mark(function e(t, r) {
            var n, o, s, a, u;
            return i.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.getSigner()),
                      (o = new Date()),
                      (s = Math.floor(o.setMinutes(o.getMinutes() + 5) / 1e3)),
                      (a = { address: r, exp: s }),
                      (e.next = 6),
                      n.signMessage(JSON.stringify(a))
                    );
                  case 6:
                    return (u = e.sent), e.abrupt('return', { msg: a, signature: u });
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function d(e) {
        return e ? e.slice(0, 6) + '...' + e.slice(e.length - 4, e.length) : null;
      }
      function f(e) {
        return e && e.get
          ? (function(e) {
              var t = e.get('_hex');
              if ('0x00' === t) return 0;
              return h(t, 18);
            })(e)
          : e;
      }
      function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
          r = Number(e).toString();
        if ('+' === r[r.length - 3]) {
          var n = y(r, t),
            i = Number(g(r) + n);
          return Number.parseFloat(i).toFixed(0);
        }
        return r.length > 18
          ? Number(r.slice(0, -18))
          : 18 === r.length
          ? Number('0.'.concat(r))
          : Number(r);
      }
      function p() {
        return u.a.randomBytes(16).toString('hex');
      }
      function b(e) {
        return ''.concat(e.slice(0, -18), '.').concat(e.slice(-18));
      }
      function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return (e * Math.pow(10, t)).toString();
      }
      function g(e) {
        return e.slice(0, -2).toString();
      }
      function y(e, t) {
        return Number(Number(e.slice(-2)) - t).toString();
      }
    },
    './src/utils/web3.provider.js': function(e, t, r) {
      'use strict';
      r.d(t, 'b', function() {
        return l;
      }),
        r.d(t, 'a', function() {
          return d;
        }),
        r.d(t, 'c', function() {
          return f;
        }),
        r.d(t, 'd', function() {
          return p;
        });
      var n,
        i,
        o,
        s = r('./node_modules/web3/dist/web3.min.js'),
        a = r.n(s),
        u = r('./src/core/config.js'),
        c = { rpcUrl: p(), metamask: null };
      function l(e) {
        switch (parseInt(e, 10)) {
          case 1:
            return 'Mainnet';
          case 4:
            return 'Rinkeby';
          case 3:
            return 'Ropsten';
          case 5:
            return 'Goerli';
          case 42:
            return 'Kovan';
          default:
            return 'Unknown';
        }
      }
      function d() {
        return (
          o ||
          (o = 'undefined' != typeof window && window.ethereum ? window.ethereum : null)
        );
      }
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        return e.metamask || e.rpcUrl !== c.rpcUrl ? h(e) : n || h();
      }
      function h() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
          t = b(e);
        return (n = new a.a(t));
      }
      function p() {
        return (
          i ||
          (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.c,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.b,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.a;
            return (i = ''
              .concat(e, 's://')
              .concat(t, '.infura.io/')
              .concat('ws' === e ? 'ws/' : '', 'v3/')
              .concat(r));
          })()
        );
      }
      function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        return e.metamask
          ? e.metamask
          : 'ws' === e.rpcUrl.slice(0, 2)
          ? new a.a.providers.WebsocketProvider(e.rpcUrl)
          : new a.a.providers.HttpProvider(e.rpcUrl);
      }
    },
    2: function(e, t) {},
    3: function(e, t) {},
    4: function(e, t) {},
    5: function(e, t) {},
    6: function(e, t) {},
    7: function(e, t) {},
    8: function(e, t) {},
    9: function(e, t) {}
  }
]);
//# sourceMappingURL=profile-web-settingsModal-container.bundle.js.map
