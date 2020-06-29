(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [36],
  {
    '../../node_modules/pell/dist/pell.min.css': function(t, e, n) {},
    '../../node_modules/pell/dist/pell.min.js': function(t, e, n) {
      !(function(t) {
        'use strict';
        var e =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }
              return t;
            },
          n = 'defaultParagraphSeparator',
          i = 'formatBlock',
          r = function(t, e, n) {
            return t.addEventListener(e, n);
          },
          o = function(t, e) {
            return t.appendChild(e);
          },
          a = function(t) {
            return document.createElement(t);
          },
          u = function(t) {
            return document.queryCommandState(t);
          },
          s = function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            return document.execCommand(t, !1, e);
          },
          l = {
            bold: {
              icon: '<b>B</b>',
              title: 'Bold',
              state: function() {
                return u('bold');
              },
              result: function() {
                return s('bold');
              }
            },
            italic: {
              icon: '<i>I</i>',
              title: 'Italic',
              state: function() {
                return u('italic');
              },
              result: function() {
                return s('italic');
              }
            },
            underline: {
              icon: '<u>U</u>',
              title: 'Underline',
              state: function() {
                return u('underline');
              },
              result: function() {
                return s('underline');
              }
            },
            strikethrough: {
              icon: '<strike>S</strike>',
              title: 'Strike-through',
              state: function() {
                return u('strikeThrough');
              },
              result: function() {
                return s('strikeThrough');
              }
            },
            heading1: {
              icon: '<b>H<sub>1</sub></b>',
              title: 'Heading 1',
              result: function() {
                return s(i, '<h1>');
              }
            },
            heading2: {
              icon: '<b>H<sub>2</sub></b>',
              title: 'Heading 2',
              result: function() {
                return s(i, '<h2>');
              }
            },
            paragraph: {
              icon: '&#182;',
              title: 'Paragraph',
              result: function() {
                return s(i, '<p>');
              }
            },
            quote: {
              icon: '&#8220; &#8221;',
              title: 'Quote',
              result: function() {
                return s(i, '<blockquote>');
              }
            },
            olist: {
              icon: '&#35;',
              title: 'Ordered List',
              result: function() {
                return s('insertOrderedList');
              }
            },
            ulist: {
              icon: '&#8226;',
              title: 'Unordered List',
              result: function() {
                return s('insertUnorderedList');
              }
            },
            code: {
              icon: '&lt;/&gt;',
              title: 'Code',
              result: function() {
                return s(i, '<pre>');
              }
            },
            line: {
              icon: '&#8213;',
              title: 'Horizontal Line',
              result: function() {
                return s('insertHorizontalRule');
              }
            },
            link: {
              icon: '&#128279;',
              title: 'Link',
              result: function() {
                var t = window.prompt('Enter the link URL');
                t && s('createLink', t);
              }
            },
            image: {
              icon: '&#128247;',
              title: 'Image',
              result: function() {
                var t = window.prompt('Enter the image URL');
                t && s('insertImage', t);
              }
            }
          },
          c = {
            actionbar: 'pell-actionbar',
            button: 'pell-button',
            content: 'pell-content',
            selected: 'pell-button-selected'
          },
          d = function(t) {
            var u = t.actions
                ? t.actions.map(function(t) {
                    return 'string' == typeof t
                      ? l[t]
                      : l[t.name]
                      ? e({}, l[t.name], t)
                      : t;
                  })
                : Object.keys(l).map(function(t) {
                    return l[t];
                  }),
              d = e({}, c, t.classes),
              m = t[n] || 'div',
              h = a('div');
            (h.className = d.actionbar), o(t.element, h);
            var f = (t.element.content = a('div'));
            return (
              (f.contentEditable = !0),
              (f.className = d.content),
              (f.oninput = function(e) {
                var n = e.target.firstChild;
                n && 3 === n.nodeType
                  ? s(i, '<' + m + '>')
                  : '<br>' === f.innerHTML && (f.innerHTML = ''),
                  t.onChange(f.innerHTML);
              }),
              (f.onkeydown = function(t) {
                'Enter' === t.key &&
                  'blockquote' === document.queryCommandValue('formatBlock') &&
                  setTimeout(function() {
                    return s(i, '<' + m + '>');
                  }, 0);
              }),
              o(t.element, f),
              u.forEach(function(t) {
                var e = a('button');
                if (
                  ((e.className = d.button),
                  (e.innerHTML = t.icon),
                  (e.title = t.title),
                  e.setAttribute('type', 'button'),
                  (e.onclick = function() {
                    return t.result() && f.focus();
                  }),
                  t.state)
                ) {
                  var n = function() {
                    return e.classList[t.state() ? 'add' : 'remove'](d.selected);
                  };
                  r(f, 'keyup', n), r(f, 'mouseup', n), r(e, 'click', n);
                }
                o(h, e);
              }),
              t.styleWithCSS && s('styleWithCSS'),
              s(n, m),
              t.element
            );
          },
          m = { exec: s, init: d };
        (t.exec = s),
          (t.init = d),
          (t.default = m),
          Object.defineProperty(t, '__esModule', { value: !0 });
      })(e);
    },
    './src/modules/admin/admin.actions.js': function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'setInvites', function() {
          return b;
        }),
        n.d(e, 'setWaitlist', function() {
          return y;
        }),
        n.d(e, 'deleteWaitlistUsers', function() {
          return g;
        }),
        n.d(e, 'updateInvite', function() {
          return v;
        }),
        n.d(e, 'destroyInvite', function() {
          return E;
        }),
        n.d(e, 'setInviteCount', function() {
          return j;
        }),
        n.d(e, 'getInviteCount', function() {
          return O;
        }),
        n.d(e, 'getInvites', function() {
          return w;
        }),
        n.d(e, 'createInvite', function() {
          return C;
        }),
        n.d(e, 'destroy', function() {
          return k;
        }),
        n.d(e, 'getWaitlist', function() {
          return S;
        }),
        n.d(e, 'inviteFromWaitlist', function() {
          return x;
        }),
        n.d(e, 'signupForMailingList', function() {
          return _;
        }),
        n.d(e, 'setDownvotes', function() {
          return P;
        }),
        n.d(e, 'getDownvotes', function() {
          return L;
        }),
        n.d(e, 'sendEmail', function() {
          return T;
        }),
        n.d(e, 'saveEmail', function() {
          return D;
        }),
        n.d(e, 'loadEmail', function() {
          return q;
        }),
        n.d(e, 'deleteWaitlistUser', function() {
          return H;
        }),
        n.d(e, 'sendPostNotification', function() {
          return N;
        });
      var i = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        r = n.n(i),
        o = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = n.n(o),
        u = n('../../node_modules/normalizr/dist/normalizr.es.js'),
        s = n('./src/core/actionTypes.js'),
        l = n('./src/utils/index.js');
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function(e) {
                r()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var m = l.a.Alert(),
        h = 'http://localhost:3000/api',
        f = new u.b.Entity('invites', {}, { idAttribute: '_id' }),
        p = new u.b.Entity('wait', {}, { idAttribute: '_id' });
      function b(t) {
        var { data: e, community: n, skip: i } = t;
        return { type: s.W, payload: { data: e, community: n, skip: i } };
      }
      function y(t) {
        return { type: s.wb, payload: t };
      }
      function g(t) {
        return { type: s.h, payload: t };
      }
      function v(t) {
        return { type: s.Ib, payload: t };
      }
      function E(t) {
        return { type: s.j, payload: t };
      }
      function j(t) {
        return { type: s.Y, payload: t };
      }
      function O() {
        return (function() {
          var t = a()(function*(t) {
            try {
              var e = yield t(
                l.b.request({ method: 'GET', endpoint: 'invites', path: '/count' })
              );
              t(j(e));
            } catch (t) {
              m.alert(t.message);
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function w(t, e, n) {
        return (function() {
          var i = a()(function*(i) {
            try {
              var r = yield i(
                l.b.request({
                  method: 'GET',
                  query: { skip: t, limit: e },
                  endpoint: 'invites',
                  path: ''
                })
              );
              return (
                i(
                  b({
                    data: Object(u.a)({ invites: r }, { invites: [f] }),
                    community: n,
                    skip: t
                  })
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          });
          return function(t) {
            return i.apply(this, arguments);
          };
        })();
      }
      function C(t) {
        return (function() {
          var e = a()(function*(e) {
            try {
              var n = yield e(
                l.b.request({
                  method: 'POST',
                  endpoint: 'invites',
                  path: '/',
                  body: JSON.stringify(t)
                })
              );
              return e(v(n.invite[0])), e(j(n.count)), n;
            } catch (t) {
              return m.alert(t.message), !1;
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function k(t) {
        return (function() {
          var e = a()(function*(e) {
            return fetch(
              h + '/invites/' + t._id,
              d({ method: 'DELETE' }, yield l.b.reqOptions())
            )
              .then(l.b.handleErrors)
              .then(() => {
                m.alert('removed item'), e(E(t));
              })
              .catch(t => {
                m.alert(t.message), console.log('invites error', t);
              });
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function S() {
        return (function() {
          var t = a()(function*(t) {
            return fetch(h + '/list', d({ method: 'GET' }, yield l.b.reqOptions()))
              .then(l.b.handleErrors)
              .then(t => t.json())
              .then(e => {
                var n = Object(u.a)({ wait: e }, { wait: [p] });
                t(y(n));
              })
              .catch(t => {
                console.log('invites error', t);
              });
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function x(t) {
        return (function() {
          var e = a()(function*(e) {
            return fetch(
              'http://localhost:3000/api/list/',
              d(
                d({ method: 'PUT' }, yield l.b.reqOptions()),
                {},
                { body: JSON.stringify(t) }
              )
            )
              .then(l.b.handleErrors)
              .then(() => (m.alert('users have been invited!'), e(g(t)), !0))
              .catch(t => (m.alert(t.message), console.log(t), !1));
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function _(t) {
        return a()(function*() {
          return fetch(
            'http://localhost:3000/api/list/',
            d(
              d({ method: 'POST' }, yield l.b.reqOptions()),
              {},
              { body: JSON.stringify(t) }
            )
          )
            .then(l.b.handleErrors)
            .then(() => (m.alert("You've been added to the waitlist.", 'success'), !0))
            .catch(t => (m.alert(t.message), console.log(t), !1));
        });
      }
      function P(t) {
        return { type: s.R, payload: t };
      }
      function L(t, e) {
        return n =>
          n(
            l.b.request({
              method: 'GET',
              query: { skip: t, limit: e },
              endpoint: 'invest',
              path: '/downvotes'
            })
          )
            .then(t => n(P(t)))
            .catch(t => m.alert(t.message));
      }
      function T(t) {
        return (function() {
          var e = a()(function*(e) {
            try {
              return (
                yield e(
                  l.b.request({
                    method: 'PUT',
                    endpoint: 'email',
                    path: '/',
                    body: JSON.stringify(t)
                  })
                ),
                m.alert('Email has been sent'),
                !0
              );
            } catch (t) {
              return !1;
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function D(t) {
        return (function() {
          var e = a()(function*(e) {
            try {
              return (
                yield e(
                  l.b.request({
                    method: 'PUT',
                    endpoint: 'email',
                    path: '/save',
                    body: JSON.stringify(t)
                  })
                ),
                m.alert('Email has been saved'),
                !0
              );
            } catch (t) {
              return !1;
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function q() {
        return (function() {
          var t = a()(function*(t) {
            try {
              return yield t(
                l.b.request({ method: 'GET', endpoint: 'email', path: '/load' })
              );
            } catch (t) {
              return !1;
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function H(t) {
        return (function() {
          var e = a()(function*(e) {
            try {
              (yield fetch(
                h + '/list/' + t._id,
                d({ method: 'DELETE' }, yield l.b.reqOptions())
              )) && e(g([t]));
            } catch (t) {
              m.alert(t.message);
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function N(t) {
        return (function() {
          var e = a()(function*(e) {
            try {
              return (
                yield e(
                  l.b.request({
                    method: 'POST',
                    endpoint: 'post',
                    path: '/sendPostNotification',
                    body: JSON.stringify(t)
                  })
                ),
                m.alert('Notification sent!')
              );
            } catch (t) {
              return !1;
            }
          });
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      }
    },
    './src/modules/admin/web/admin.css': function(t, e, n) {},
    './src/modules/admin/web/email.component.js': function(t, e, n) {
      'use strict';
      n.r(e);
      var i,
        r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        a = n('../../node_modules/react/index.js'),
        u = n.n(a),
        s = n('../../node_modules/prop-types/index.js'),
        l = n.n(s),
        c = n('../../node_modules/redux/es/redux.js'),
        d = n('../../node_modules/react-redux/es/index.js'),
        m = n('./src/modules/admin/admin.actions.js'),
        h = n('./src/modules/ui/web/ShadowButton.js');
      (i = n('../../node_modules/pell/dist/pell.min.js')),
        n('../../node_modules/pell/dist/pell.min.css'),
        n('./src/modules/admin/web/admin.css');
      class f extends a.Component {
        constructor(t) {
          super(t),
            (this.state = { html: '', email: '', subject: '', campaign: '' }),
            (this.handleChange = this.handleChange.bind(this)),
            (this.submit = this.submit.bind(this)),
            (this.saveEmail = this.saveEmail.bind(this)),
            (this.loadEmail = this.loadEmail.bind(this));
        }
        componentDidMount() {
          this.loadEmail(),
            (this.editor = i.init({
              element: document.getElementById('email-editor'),
              onChange: t => {
                this.setState({ html: t });
              },
              styleWithCSS: !0,
              actions: [
                'bold',
                'underline',
                'italic',
                {
                  icon: '<b>Sml</b>',
                  title: 'small',
                  result: () => i.exec('fontSize', 2)
                },
                {
                  icon: '<b>reg</b>',
                  title: 'small',
                  result: () => i.exec('fontSize', 3)
                },
                'paragraph',
                'heading1',
                'heading2',
                {
                  icon: '<b>H<sub>3</sub></b>',
                  title: 'H3',
                  result: () => i.exec('formatBlock', '<H3>')
                },
                {
                  icon: '<b>H<sub>4</sub></b>',
                  title: 'H4',
                  result: () => i.exec('formatBlock', '<H4>')
                },
                {
                  icon: '<b>Center</b>',
                  title: 'center',
                  result: () => i.exec('justifyCenter')
                },
                {
                  icon: '<b>Left</b>',
                  title: 'left',
                  result: () => i.exec('justifyLeft')
                },
                'image',
                'link',
                {
                  name: 'resize',
                  icon: '<b>Resize</b>',
                  result: () => i.exec('enableObjectResizing')
                },
                {
                  icon: '<b><u><i>Clear</i></u></b>',
                  name: 'clear',
                  result: () => i.exec('removeFormat')
                }
              ]
            }));
        }
        saveEmail() {
          var { email: t, subject: e, campaign: n, html: i } = this.state;
          this.props.actions.saveEmail({ email: t, subject: e, campaign: n, html: i });
        }
        loadEmail() {
          this.props.actions.loadEmail().then(t => {
            this.setState(t), (this.editor.content.innerHTML = t.html);
          });
        }
        submit() {
          var { email: t, subject: e, campaign: n, html: i } = this.state;
          this.props.actions.sendEmail({ email: t, subject: e, campaign: n, html: i }),
            this.saveEmail();
        }
        handleChange(t) {
          this.setState({ [t.target.name]: t.target.value }),
            'html' === t.target.name && (this.editor.content.innerHTML = t.target.value);
        }
        render() {
          return u.a.createElement(
            'div',
            { className: 'adminContainer' },
            u.a.createElement(
              'div',
              {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'flex-start',
                  marginLeft: 20
                }
              },
              u.a.createElement('input', {
                className: 'blueInput',
                type: 'email',
                name: 'email',
                placeholder: 'user email',
                value: this.state.email,
                onChange: this.handleChange
              }),
              u.a.createElement('input', {
                className: 'blueInput',
                type: 'subject',
                name: 'subject',
                placeholder: 'subject',
                value: this.state.subject,
                onChange: this.handleChange
              }),
              u.a.createElement('input', {
                className: 'blueInput',
                type: 'campaign',
                name: 'campaign',
                placeholder: 'campaign',
                value: this.state.campaign,
                onChange: this.handleChange
              })
            ),
            u.a.createElement(
              'div',
              {
                style: { display: 'flex', flex: 1, flexDirection: 'row', width: '100%' }
              },
              u.a.createElement(
                'div',
                { style: { flex: 1, margin: 20 } },
                u.a.createElement('div', { id: 'email-editor' })
              ),
              u.a.createElement('textarea', {
                style: { flex: 1, margin: 20 },
                value: this.state.html,
                name: 'html',
                onChange: this.handleChange
              })
            ),
            u.a.createElement(
              'div',
              {
                style: {
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignSelf: 'flex-start',
                  margin: 20,
                  marginBottom: 60
                }
              },
              u.a.createElement(
                h.a,
                { backgroundColor: 'white', color: '#3E3EFF', onClick: this.submit },
                'Send email'
              ),
              u.a.createElement(
                h.a,
                { backgroundColor: 'white', color: '#3E3EFF', onClick: this.saveEmail },
                'Save draft'
              ),
              u.a.createElement(
                h.a,
                { backgroundColor: 'white', color: '#3E3EFF', onClick: this.loadEmail },
                'Load'
              )
            )
          );
        }
      }
      o()(f, 'propTypes', { actions: l.a.object }),
        (e.default = Object(d.c)(
          t => ({ auth: t.auth, admin: t.admin }),
          t => ({ actions: Object(c.bindActionCreators)(m, t) })
        )(f));
    },
    './src/modules/ui/web/ShadowButton.js': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return d;
      });
      var i = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        r = n.n(i),
        o = n('../../node_modules/react/index.js'),
        a = n.n(o),
        u = n('../../node_modules/prop-types/index.js'),
        s = n.n(u);
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function(e) {
                r()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function d(t) {
        return a.a.createElement(
          'button',
          {
            className: 'shadowButton',
            onClick: () => (t.onClick ? t.onClick() : null),
            style: c({}, t.style)
          },
          a.a.createElement('span', null, t.children)
        );
      }
      d.propTypes = { onClick: s.a.func, style: s.a.object, children: s.a.node };
    }
  }
]);
//# sourceMappingURL=36.bundle.js.map
