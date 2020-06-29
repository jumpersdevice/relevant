(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [0],
  {
    '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js': function(
      e,
      t,
      n
    ) {
      'use strict';
      var o = n('../../node_modules/@hot-loader/react-dom/index.js'),
        r = n.n(o),
        i = n('../../node_modules/textarea-caret/index.js'),
        a = n.n(i),
        s = n('../../node_modules/custom-event/index.js'),
        l = n.n(s),
        c = n('../../node_modules/react/index.js'),
        u = n.n(c);
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function p(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function h(e, t, n) {
        return t && f(e.prototype, t), n && f(e, n), e;
      }
      function m(e) {
        return (m =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function g(e) {
        return (g =
          'function' == typeof Symbol && 'symbol' === m(Symbol.iterator)
            ? function(e) {
                return m(e);
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : m(e);
              })(e);
      }
      function v(e, t) {
        return !t || ('object' !== g(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function b(e, t) {
        return (b =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function x(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && b(e, t);
      }
      function w(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      var _ = { ESC: 27, UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, ENTER: 13, TAB: 9 },
        C = new (function e() {
          var t = this;
          p(this, e),
            (this.startListen = function(e) {
              e && e.addEventListener('keydown', t.f);
            }),
            (this.stopListen = function(e) {
              e && e.removeEventListener('keydown', t.f);
            }),
            (this.add = function(e, n) {
              var o = e;
              return (
                'object' != typeof o && (o = [o]),
                (t.listeners[t.index] = { keyCode: o, fn: n }),
                t.index++
              );
            }),
            (this.remove = function(e) {
              delete t.listeners[e];
            }),
            (this.removeAll = function() {
              (t.listeners = {}), (t.index = 1);
            }),
            (this.index = 1),
            (this.listeners = {}),
            (this.f = function(e) {
              if (e) {
                var n = e.keyCode || e.which;
                Object.values(t.listeners).forEach(function(t) {
                  var o = t.keyCode,
                    r = t.fn;
                  o.includes(n) && (e.stopPropagation(), e.preventDefault(), r(e));
                });
              }
            });
        })(),
        E = (function(e) {
          function t() {
            var e, n;
            p(this, t);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
              r[i] = arguments[i];
            return (
              ((n = v(
                this,
                (e = y(t)).call.apply(e, [this].concat(r))
              )).selectItem = function() {
                var e = n.props,
                  t = e.item;
                (0, e.onSelectHandler)(t);
              }),
              n
            );
          }
          return (
            x(t, e),
            h(t, [
              {
                key: 'shouldComponentUpdate',
                value: function(e) {
                  return (
                    this.props.item !== e.item ||
                    this.props.selected !== e.selected ||
                    this.props.style !== e.style ||
                    this.props.className !== e.className
                  );
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.component,
                    o = t.style,
                    r = t.onClickHandler,
                    i = t.item,
                    a = t.selected,
                    s = t.className,
                    l = t.innerRef;
                  return u.a.createElement(
                    'li',
                    {
                      className: 'rta__item  '
                        .concat(!0 === a ? 'rta__item--selected' : '', ' ')
                        .concat(s || ''),
                      style: o
                    },
                    u.a.createElement(
                      'div',
                      {
                        className: 'rta__entity '.concat(
                          !0 === a ? 'rta__entity--selected' : ''
                        ),
                        role: 'button',
                        tabIndex: 0,
                        onClick: r,
                        onFocus: this.selectItem,
                        onMouseEnter: this.selectItem,
                        onTouchStart: function() {
                          (e.clicked = !0), e.selectItem();
                        },
                        onTouchEnd: function(t) {
                          t.preventDefault(), e.clicked && r(t);
                        },
                        onTouchMove: function() {
                          e.clicked = !1;
                        },
                        onTouchCancel: function() {
                          e.clicked = !1;
                        },
                        ref: l
                      },
                      u.a.createElement(n, { selected: a, entity: i })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.a.Component),
        T = (function(e) {
          function t() {
            var e, n;
            p(this, t);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
              r[i] = arguments[i];
            return (
              ((n = v(this, (e = y(t)).call.apply(e, [this].concat(r)))).state = {
                selectedItem: null
              }),
              (n.cachedIdOfItems = new Map()),
              (n.onPressEnter = function(e) {
                void 0 !== e && e.preventDefault();
                var t = n.props.values;
                n.modifyText(t[n.getPositionInList()]);
              }),
              (n.getPositionInList = function() {
                var e = n.props.values,
                  t = n.state.selectedItem;
                return t
                  ? e.findIndex(function(e) {
                      return n.getId(e) === n.getId(t);
                    })
                  : 0;
              }),
              (n.getId = function(e) {
                if (n.cachedIdOfItems.has(e)) return n.cachedIdOfItems.get(e);
                var t = n.props.getTextToReplace(e),
                  o = (function() {
                    if (t) {
                      if (t.key) return t.key;
                      if ('string' == typeof e || !e.key) return t.text;
                    }
                    if (!e.key)
                      throw new Error(
                        'Item '.concat(
                          JSON.stringify(e),
                          ' has to have defined "key" property'
                        )
                      );
                    return e.key;
                  })();
                return n.cachedIdOfItems.set(e, o), o;
              }),
              (n.listeners = []),
              (n.itemsRef = {}),
              (n.modifyText = function(e) {
                e && (0, n.props.onSelect)(e);
              }),
              (n.selectItem = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                n.state.selectedItem !== e &&
                  n.setState({ selectedItem: e }, function() {
                    t && n.props.dropdownScroll(n.itemsRef[n.getId(e)]);
                  });
              }),
              (n.scroll = function(e) {
                e.preventDefault();
                var t,
                  o = n.props.values,
                  r = e.keyCode || e.which,
                  i = n.getPositionInList();
                switch (r) {
                  case _.DOWN:
                    t = i + 1;
                    break;
                  case _.UP:
                    t = i - 1;
                    break;
                  default:
                    t = i;
                }
                (t = ((t % o.length) + o.length) % o.length),
                  n.selectItem(o[t], [_.DOWN, _.UP].includes(r));
              }),
              (n.isSelected = function(e) {
                var t = n.state.selectedItem;
                return !!t && n.getId(t) === n.getId(e);
              }),
              n
            );
          }
          return (
            x(t, e),
            h(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.listeners.push(
                    C.add([_.DOWN, _.UP], this.scroll),
                    C.add([_.ENTER, _.TAB], this.onPressEnter)
                  );
                  var e = this.props.values;
                  e && e[0] && this.selectItem(e[0]);
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = this,
                    n = e.values,
                    o = this.props.values;
                  n
                    .map(function(e) {
                      return t.getId(e);
                    })
                    .join('') !==
                    o
                      .map(function(e) {
                        return t.getId(e);
                      })
                      .join('') &&
                    o &&
                    o[0] &&
                    this.selectItem(o[0]);
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  for (var e; this.listeners.length; )
                    (e = this.listeners.pop()), C.remove(e);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.values,
                    o = t.component,
                    r = t.style,
                    i = t.itemClassName,
                    a = t.className,
                    s = t.itemStyle;
                  return u.a.createElement(
                    'ul',
                    { className: 'rta__list '.concat(a || ''), style: r },
                    n.map(function(t) {
                      return u.a.createElement(E, {
                        key: e.getId(t),
                        innerRef: function(n) {
                          e.itemsRef[e.getId(t)] = n;
                        },
                        selected: e.isSelected(t),
                        item: t,
                        className: i,
                        style: s,
                        onClickHandler: e.onPressEnter,
                        onSelectHandler: e.selectItem,
                        component: o
                      });
                    })
                  );
                }
              }
            ]),
            t
          );
        })(u.a.Component);
      var R = { LEFT: 'rta__autocomplete--left', RIGHT: 'rta__autocomplete--right' },
        S = { TOP: 'rta__autocomplete--top', BOTTOM: 'rta__autocomplete--bottom' },
        k = function(e) {
          return console.error(
            'RTA: dataProvider fails: '.concat(
              e,
              "\n    \nCheck the documentation or create issue if you think it's bug. https://github.com/webscopeio/react-textarea-autocomplete/issues"
            )
          );
        },
        O = ['.', '^', '$', '*', '+', '-', '?', '(', ')', '[', ']', '{', '}', '\\', '|'],
        P = function(e) {
          return w(e)
            .map(function(e) {
              return O.includes(e) ? '\\'.concat(e) : e;
            })
            .join('');
        },
        I = (function(e) {
          function t() {
            return p(this, t), v(this, y(t).apply(this, arguments));
          }
          return (
            x(t, e),
            h(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.boundariesElement;
                  if ('string' == typeof e) {
                    var t = document.querySelector(e);
                    if (!t)
                      throw new Error(
                        'RTA: Invalid prop boundariesElement: it has to be string or HTMLElement.'
                      );
                    this.containerElem = t;
                  } else {
                    if (!(e instanceof HTMLElement))
                      throw new Error(
                        'RTA: Invalid prop boundariesElement: it has to be string or HTMLElement.'
                      );
                    this.containerElem = e;
                  }
                  if (!this.containerElem || !this.containerElem.contains(this.ref))
                    throw new Error(
                      'RTA: Invalid prop boundariesElement: it has to be one of the parents of the RTA.'
                    );
                }
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  var e,
                    t,
                    n = this.props.top || 0,
                    o = this.props.left || 0,
                    r = [],
                    i = [],
                    a = 0,
                    s = 0,
                    l = this.containerElem.getBoundingClientRect(),
                    c = this.ref.getBoundingClientRect(),
                    u = this.props.textareaRef.getBoundingClientRect(),
                    d = window.getComputedStyle(this.ref),
                    p = parseInt(d.getPropertyValue('margin-top'), 10),
                    f = parseInt(d.getPropertyValue('margin-bottom'), 10),
                    h = parseInt(d.getPropertyValue('margin-left'), 10),
                    m = parseInt(d.getPropertyValue('margin-right'), 10),
                    g = p + f + u.top + n + c.height;
                  h + m + u.left + o + c.width > l.right
                    ? ((s = o - c.width), r.push(R.LEFT), i.push(R.RIGHT))
                    : ((s = o), r.push(R.RIGHT), i.push(R.LEFT)),
                    g > l.bottom
                      ? ((a = n - c.height), r.push(S.TOP), i.push(S.BOTTOM))
                      : ((a = n), r.push(S.BOTTOM), i.push(S.TOP)),
                    this.props.renderToBody && ((a += u.top), (s += u.left)),
                    (this.ref.style.top = ''.concat(a, 'px')),
                    (this.ref.style.left = ''.concat(s, 'px')),
                    (e = this.ref.classList).remove.apply(e, i),
                    (t = this.ref.classList).add.apply(t, r);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.style,
                    o = t.className,
                    i = t.innerRef,
                    a = t.children,
                    s = t.renderToBody,
                    l = document.body,
                    c = u.a.createElement(
                      'div',
                      {
                        ref: function(t) {
                          (e.ref = t), i(t);
                        },
                        className: 'rta__autocomplete '.concat(o || ''),
                        style: n
                      },
                      a
                    );
                  return s && null !== l ? r.a.createPortal(c, l) : c;
                }
              }
            ]),
            t
          );
        })(u.a.Component),
        L = (function(e) {
          function t(e) {
            var n;
            p(this, t),
              ((n = v(this, y(t).call(this, e))).state = {
                top: null,
                left: null,
                currentTrigger: null,
                actualToken: '',
                data: null,
                value: '',
                dataLoading: !1,
                selectionEnd: 0,
                component: null,
                textToReplace: null
              }),
              (n.escListenerInit = function() {
                n.escListener || (n.escListener = C.add(_.ESC, n._closeAutocomplete));
              }),
              (n.escListenerDestroy = function() {
                n.escListener && (C.remove(n.escListener), (n.escListener = null));
              }),
              (n.getSelectionPosition = function() {
                return n.textareaRef
                  ? {
                      selectionStart: n.textareaRef.selectionStart,
                      selectionEnd: n.textareaRef.selectionEnd
                    }
                  : null;
              }),
              (n.getSelectedText = function() {
                if (!n.textareaRef) return null;
                var e = n.textareaRef,
                  t = e.selectionStart,
                  o = e.selectionEnd;
                return t === o ? null : n.state.value.substr(t, o - t);
              }),
              (n.setCaretPosition = function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                n.textareaRef &&
                  (n.textareaRef.focus(), n.textareaRef.setSelectionRange(e, e));
              }),
              (n.getCaretPosition = function() {
                return n.textareaRef ? n.textareaRef.selectionEnd : 0;
              }),
              (n._handleCaretChange = function(e) {
                var t = function() {
                  var e = n.getCaretPosition() - 1;
                  n.lastTrigger = n.lastTrigger ? e : 0;
                };
                if ('keydown' !== e.type) t();
                else
                  switch (e.keyCode || e.which) {
                    case _.UP:
                    case _.DOWN:
                      n._isAutocompleteOpen() || t();
                      break;
                    case _.LEFT:
                    case _.RIGHT:
                      t();
                  }
              }),
              (n._onSelect = function(e) {
                var t = n.state,
                  o = t.selectionEnd,
                  r = t.currentTrigger,
                  i = t.value,
                  a = n.props,
                  s = a.trigger,
                  l = a.onItemSelected;
                if (r) {
                  var c = n._getTextToReplace(r);
                  if (c) {
                    var u = c(e);
                    if (u) {
                      l && l({ currentTrigger: r, item: e });
                      var d = i.slice(0, o),
                        p = d.search(
                          new RegExp(
                            ''.concat(
                              P(r),
                              '[^'
                                .concat(P(r))
                                .concat(s[r].allowWhitespace ? '' : '\\s', ']'),
                              '*$'
                            )
                          )
                        ),
                        f = 'next' === u.caretPosition ? ''.concat(u.text, ' ') : u.text,
                        h = (function(e, t, n) {
                          switch (e) {
                            case 'start':
                              return n;
                            case 'next':
                            case 'end':
                              return n + t.length;
                            default:
                              if (!Number.isInteger(e))
                                throw new Error(
                                  'RTA: caretPosition should be "start", "next", "end" or number.'
                                );
                              return e;
                          }
                        })(u.caretPosition, f, p),
                        m = d.substring(0, p) + f,
                        g = i.replace(d, m);
                      n.setState({ value: g, dataLoading: !1 }, function() {
                        var e = n.tokenRegExpEnding.exec(f),
                          t = e ? e[0].length : 1;
                        (n.lastTrigger = h ? h - t : h),
                          (n.textareaRef.value = g),
                          (n.textareaRef.selectionEnd = h),
                          n._changeHandler();
                        var o = n.textareaRef.scrollTop;
                        n.setCaretPosition(h),
                          window.chrome && (n.textareaRef.scrollTop = o);
                      });
                    } else n._closeAutocomplete();
                  } else n._closeAutocomplete();
                }
              }),
              (n._getTextToReplace = function(e) {
                var t = n.props.trigger[e];
                if (!e || !t) return null;
                var o = t.output;
                return function(t) {
                  if ('object' == typeof t && (!o || 'function' != typeof o))
                    throw new Error(
                      'Output functor is not defined! If you are using items as object you have to define "output" function. https://github.com/webscopeio/react-textarea-autocomplete#trigger-type'
                    );
                  if (o) {
                    var n = o(t, e);
                    if (void 0 === n || 'number' == typeof n)
                      throw new Error(
                        'Output functor should return string or object in shape {text: string, caretPosition: string | number}.\nGot "'
                          .concat(String(n), '". Check the implementation for trigger "')
                          .concat(
                            e,
                            '"\n\nSee https://github.com/webscopeio/react-textarea-autocomplete#trigger-type for more information.\n'
                          )
                      );
                    if (null === n) return null;
                    if ('string' == typeof n) return { text: n, caretPosition: 'next' };
                    if (!n.text)
                      throw new Error(
                        'Output "text" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger "'.concat(
                          e,
                          '"\n'
                        )
                      );
                    if (!n.caretPosition)
                      throw new Error(
                        'Output "caretPosition" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger "'.concat(
                          e,
                          '"\n'
                        )
                      );
                    return n;
                  }
                  if ('string' != typeof t)
                    throw new Error('Output item should be string\n');
                  return {
                    text: ''
                      .concat(e)
                      .concat(t)
                      .concat(e),
                    caretPosition: 'next'
                  };
                };
              }),
              (n._getCurrentTriggerSettings = function() {
                var e = n.state.currentTrigger;
                return e ? n.props.trigger[e] : null;
              }),
              (n._getValuesFromProvider = function() {
                var e = n.state,
                  t = e.currentTrigger,
                  o = e.actualToken,
                  r = n._getCurrentTriggerSettings();
                if (t && r) {
                  var i = r.dataProvider,
                    a = r.component;
                  if ('function' != typeof i)
                    throw new Error('Trigger provider has to be a function!');
                  n.setState({ dataLoading: !0 });
                  var s = i(o);
                  s instanceof Promise || (s = Promise.resolve(s)),
                    s
                      .then(function(e) {
                        if (!Array.isArray(e))
                          throw new Error('Trigger provider has to provide an array!');
                        if ('function' != typeof a)
                          throw new Error('Component should be defined!');
                        t === n.state.currentTrigger &&
                          (e.length
                            ? n.setState({ dataLoading: !1, data: e, component: a })
                            : n._closeAutocomplete());
                      })
                      .catch(function(e) {
                        return k(e.message);
                      });
                }
              }),
              (n._getSuggestions = function() {
                var e = n.state,
                  t = e.currentTrigger,
                  o = e.data;
                return !t || !o || (o && !o.length) ? null : o;
              }),
              (n._createRegExp = function() {
                var e = n.props.trigger;
                (n.tokenRegExp = new RegExp(
                  '('.concat(
                    Object.keys(e)
                      .sort(function(e, t) {
                        return e < t ? 1 : e > t ? -1 : 0;
                      })
                      .map(function(e) {
                        return P(e);
                      })
                      .join('|'),
                    ')((?:(?!\\1)[^\\s])*$)'
                  )
                )),
                  (n.tokenRegExpEnding = new RegExp(
                    '('.concat(
                      Object.keys(e)
                        .sort(function(e, t) {
                          return e < t ? 1 : e > t ? -1 : 0;
                        })
                        .map(function(e) {
                          return P(e);
                        })
                        .join('|'),
                      ')$'
                    )
                  ));
              }),
              (n._closeAutocomplete = function() {
                n.escListenerDestroy(),
                  n.setState({ data: null, dataLoading: !1, currentTrigger: null });
              }),
              (n._cleanUpProps = function() {
                var e = (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                      'function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                          Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                          })
                        )),
                        o.forEach(function(t) {
                          d(e, t, n[t]);
                        });
                    }
                    return e;
                  })({}, n.props),
                  t = [
                    'loadingComponent',
                    'boundariesElement',
                    'containerStyle',
                    'minChar',
                    'scrollToItem',
                    'ref',
                    'innerRef',
                    'onChange',
                    'onCaretPositionChange',
                    'className',
                    'value',
                    'trigger',
                    'listStyle',
                    'itemStyle',
                    'containerStyle',
                    'loaderStyle',
                    'className',
                    'containerClassName',
                    'listClassName',
                    'itemClassName',
                    'loaderClassName',
                    'dropdownStyle',
                    'dropdownClassName',
                    'movePopupAsYouType',
                    'textAreaComponent',
                    'renderToBody',
                    'onItemSelected'
                  ];
                for (var o in e) t.includes(o) && delete e[o];
                return e;
              }),
              (n._changeHandler = function(e) {
                var t = n.props,
                  o = t.trigger,
                  r = t.onChange,
                  i = t.minChar,
                  s = t.onCaretPositionChange,
                  c = t.movePopupAsYouType,
                  u = n.state,
                  d = u.top,
                  p = u.left,
                  f = e;
                f ||
                  ((f = new l.a('change', { bubbles: !0 })),
                  n.textareaRef.dispatchEvent(f));
                var h = f.target,
                  m = h.selectionEnd,
                  g = h.value;
                ((n.lastValueBubbledEvent = g),
                r && f && (f.persist && f.persist(), r(f)),
                s) && s(n.getCaretPosition());
                n.setState({ value: g });
                var v = function() {
                    var e = a()(h, m),
                      t = e.top,
                      o = e.left;
                    n.setState({ top: t - n.textareaRef.scrollTop || 0, left: o });
                  },
                  y = function(e) {
                    (n.lastTrigger = m - e), n._closeAutocomplete(), v();
                  };
                if (m <= n.lastTrigger) {
                  var b = g.slice(0, m),
                    x = n.tokenRegExp.exec(b);
                  y(x ? x[0].length : 0);
                }
                var w = g.slice(n.lastTrigger, m),
                  _ = n.tokenRegExp.exec(w),
                  C = _ && _[0],
                  E = (_ && _[1]) || null,
                  T = E ? E.length - 1 : 0,
                  R = n.tokenRegExpEnding.exec(w);
                if (
                  (R ? y(R[0].length) : n._isAutocompleteOpen() || n._closeAutocomplete(),
                  (C && !(C.length <= i + T)) ||
                    ((!n.state.currentTrigger ||
                      o[n.state.currentTrigger].allowWhitespace) &&
                      n.state.currentTrigger))
                )
                  if (
                    E &&
                    o[E].afterWhitespace &&
                    !/\s/.test(g[m - C.length - 1]) &&
                    void 0 !== g[m - C.length - 1]
                  )
                    n._closeAutocomplete();
                  else {
                    if (
                      n.state.currentTrigger &&
                      o[n.state.currentTrigger].allowWhitespace
                    ) {
                      if (
                        ((_ = new RegExp(
                          ''.concat(P(n.state.currentTrigger), '.*$')
                        ).exec(g.slice(0, m))),
                        !(C = _ && _[0]))
                      )
                        return void n._closeAutocomplete();
                      E =
                        Object.keys(o).find(function(e) {
                          return e === C[0];
                        }) || null;
                    }
                    var S = C.slice(1);
                    if (E) {
                      (c || (null === d && null === p) || n.state.currentTrigger !== E) &&
                        v(),
                        n.escListenerInit();
                      var O = n._getTextToReplace(E);
                      n.setState(
                        {
                          selectionEnd: m,
                          currentTrigger: E,
                          textToReplace: O,
                          actualToken: S
                        },
                        function() {
                          try {
                            n._getValuesFromProvider();
                          } catch (e) {
                            k(e.message);
                          }
                        }
                      );
                    }
                  }
                else n._closeAutocomplete();
              }),
              (n._selectHandler = function(e) {
                var t = n.props,
                  o = t.onCaretPositionChange,
                  r = t.onSelect;
                o && o(n.getCaretPosition());
                r && (e.persist(), r(e));
              }),
              (n._shouldStayOpen = function(e) {
                var t = e.relatedTarget;
                return (
                  null === t && (t = document.activeElement),
                  !!(n.dropdownRef && t instanceof Node && n.dropdownRef.contains(t))
                );
              }),
              (n._onClick = function(e) {
                var t = n.props.onClick;
                t && (e.persist(), t(e)), n._shouldStayOpen(e) || n._closeAutocomplete();
              }),
              (n._onBlur = function(e) {
                var t = n.props.onBlur;
                t && (e.persist(), t(e)), n._shouldStayOpen(e) || n._closeAutocomplete();
              }),
              (n._onScrollHandler = function() {
                n._closeAutocomplete();
              }),
              (n._dropdownScroll = function(e) {
                var t = n.props.scrollToItem;
                if (t)
                  if (!0 !== t) {
                    if ('function' != typeof t || 2 !== t.length)
                      throw new Error(
                        '`scrollToItem` has to be boolean (true for default implementation) or function with two parameters: container, item.'
                      );
                    t(n.dropdownRef, e);
                  } else
                    !(function(e, t) {
                      var n = parseInt(
                          getComputedStyle(t).getPropertyValue('height'),
                          10
                        ),
                        o =
                          parseInt(getComputedStyle(e).getPropertyValue('height'), 10) -
                          n,
                        r = t.offsetTop,
                        i = e.scrollTop;
                      (r < i + o && i < r) || (e.scrollTop = r);
                    })(n.dropdownRef, e);
              }),
              (n._isAutocompleteOpen = function() {
                var e = n.state,
                  t = e.dataLoading,
                  o = e.currentTrigger,
                  r = n._getSuggestions();
                return !((!t && !r) || !o);
              }),
              (n._textareaRef = function(e) {
                n.props.innerRef && n.props.innerRef(e), (n.textareaRef = e);
              }),
              (n.lastTrigger = 0),
              (n.escListener = null);
            var o = n.props,
              r = o.loadingComponent,
              i = o.trigger,
              s = o.value;
            if ((s && (n.state.value = s), n._createRegExp(), !r))
              throw new Error('RTA: loadingComponent is not defined');
            if (!i) throw new Error('RTA: trigger is not defined');
            return n;
          }
          return (
            x(t, e),
            h(
              t,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    C.startListen(this.textareaRef),
                      this.textareaRef &&
                        this.textareaRef.addEventListener(
                          'focus',
                          this._handleCaretChange
                        ),
                      this.textareaRef &&
                        this.textareaRef.addEventListener(
                          'click',
                          this._handleCaretChange
                        ),
                      this.textareaRef &&
                        this.textareaRef.addEventListener(
                          'keydown',
                          this._handleCaretChange
                        );
                  }
                },
                {
                  key: 'componentDidUpdate',
                  value: function(e) {
                    var t = e.trigger,
                      n = e.value,
                      o = this.props,
                      r = o.trigger,
                      i = o.value;
                    Object.keys(r).join('') !== Object.keys(t).join('') &&
                      this._createRegExp(),
                      n !== i &&
                        this.lastValueBubbledEvent !== i &&
                        ((this.lastTrigger = 0), this._changeHandler());
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this.escListenerDestroy(),
                      C.stopListen(this.textareaRef),
                      this.textareaRef &&
                        this.textareaRef.removeEventListener(
                          'focus',
                          this._handleCaretChange
                        ),
                      this.textareaRef &&
                        this.textareaRef.removeEventListener(
                          'click',
                          this._handleCaretChange
                        ),
                      this.textareaRef &&
                        this.textareaRef.removeEventListener(
                          'keydown',
                          this._handleCaretChange
                        );
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e,
                      t = this,
                      n = this.props,
                      o = n.loadingComponent,
                      r = n.style,
                      i = n.className,
                      a = n.listStyle,
                      s = n.itemStyle,
                      l = n.boundariesElement,
                      c = n.movePopupAsYouType,
                      d = n.listClassName,
                      p = n.itemClassName,
                      f = n.dropdownClassName,
                      h = n.dropdownStyle,
                      m = n.containerStyle,
                      g = n.containerClassName,
                      v = n.loaderStyle,
                      y = n.loaderClassName,
                      b = n.textAreaComponent,
                      x = n.renderToBody,
                      w = this.state,
                      _ = w.left,
                      C = w.top,
                      E = w.dataLoading,
                      R = w.component,
                      S = w.value,
                      k = w.textToReplace,
                      O = this._isAutocompleteOpen(),
                      P = this._getSuggestions(),
                      L = {};
                    return (
                      b.component
                        ? ((e = b.component), (L[b.ref] = this._textareaRef))
                        : ((e = b), (L.ref = this._textareaRef)),
                      u.a.createElement(
                        'div',
                        {
                          className: 'rta '
                            .concat(!0 === E ? 'rta--loading' : '', ' ')
                            .concat(g || ''),
                          style: m
                        },
                        u.a.createElement(
                          e,
                          Object.assign(
                            {},
                            this._cleanUpProps(),
                            {
                              className: 'rta__textarea '.concat(i || ''),
                              onChange: this._changeHandler,
                              onSelect: this._selectHandler,
                              onScroll: this._onScrollHandler,
                              onClick: this._onClick,
                              onBlur: this._onBlur,
                              value: S,
                              style: r
                            },
                            L
                          )
                        ),
                        O &&
                          u.a.createElement(
                            I,
                            {
                              innerRef: function(e) {
                                t.dropdownRef = e;
                              },
                              top: C,
                              left: _,
                              style: h,
                              className: f,
                              movePopupAsYouType: c,
                              boundariesElement: l,
                              textareaRef: this.textareaRef,
                              renderToBody: x
                            },
                            P &&
                              R &&
                              k &&
                              u.a.createElement(T, {
                                values: P,
                                component: R,
                                style: a,
                                className: d,
                                itemClassName: p,
                                itemStyle: s,
                                getTextToReplace: k,
                                onSelect: this._onSelect,
                                dropdownScroll: this._dropdownScroll
                              }),
                            E &&
                              u.a.createElement(
                                'div',
                                {
                                  className: 'rta__loader '
                                    .concat(
                                      null !== P
                                        ? 'rta__loader--suggestion-data'
                                        : 'rta__loader--empty-suggestion-data',
                                      ' '
                                    )
                                    .concat(y || ''),
                                  style: v
                                },
                                u.a.createElement(o, { data: P })
                              )
                          )
                      )
                    );
                  }
                }
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e) {
                    var t = e.value;
                    return null == t ? null : { value: t };
                  }
                }
              ]
            ),
            t
          );
        })(u.a.Component);
      (L.defaultProps = {
        movePopupAsYouType: !1,
        value: null,
        minChar: 1,
        boundariesElement: 'body',
        scrollToItem: !0,
        textAreaComponent: 'textarea',
        renderToBody: !1
      }),
        (t.a = L);
    },
    '../../node_modules/custom-event/index.js': function(e, t, n) {
      (function(t) {
        var n = t.CustomEvent;
        e.exports = (function() {
          try {
            var e = new n('cat', { detail: { foo: 'bar' } });
            return 'cat' === e.type && 'bar' === e.detail.foo;
          } catch (e) {}
          return !1;
        })()
          ? n
          : 'undefined' != typeof document && 'function' == typeof document.createEvent
          ? function(e, t) {
              var n = document.createEvent('CustomEvent');
              return (
                t
                  ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
                  : n.initCustomEvent(e, !1, !1, void 0),
                n
              );
            }
          : function(e, t) {
              var n = document.createEventObject();
              return (
                (n.type = e),
                t
                  ? ((n.bubbles = Boolean(t.bubbles)),
                    (n.cancelable = Boolean(t.cancelable)),
                    (n.detail = t.detail))
                  : ((n.bubbles = !1), (n.cancelable = !1), (n.detail = void 0)),
                n
              );
            };
      }.call(this, n('../../node_modules/webpack/buildin/global.js')));
    },
    '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js': function(
      e,
      t,
      n
    ) {
      'use strict';
      var o = n('../../node_modules/@babel/runtime/helpers/esm/extends.js'),
        r = n(
          '../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
        ),
        i = n('../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js'),
        a = n('../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js'),
        s = n('../../node_modules/react/index.js'),
        l =
          (n('../../node_modules/prop-types/index.js'),
          !!document.documentElement.currentStyle),
        c = {
          'min-height': '0',
          'max-height': 'none',
          height: '0',
          visibility: 'hidden',
          overflow: 'hidden',
          position: 'absolute',
          'z-index': '-1000',
          top: '0',
          right: '0'
        },
        u = [
          'letter-spacing',
          'line-height',
          'font-family',
          'font-weight',
          'font-size',
          'font-style',
          'tab-size',
          'text-rendering',
          'text-transform',
          'width',
          'text-indent',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width',
          'box-sizing'
        ],
        d = {},
        p = document.createElement('textarea'),
        f = function(e) {
          Object.keys(c).forEach(function(t) {
            e.style.setProperty(t, c[t], 'important');
          });
        };
      function h(e, t, n, o, r) {
        void 0 === n && (n = !1),
          void 0 === o && (o = null),
          void 0 === r && (r = null),
          null === p.parentNode && document.body.appendChild(p);
        var i = (function(e, t, n) {
          void 0 === n && (n = !1);
          if (n && d[t]) return d[t];
          var o = window.getComputedStyle(e);
          if (null === o) return null;
          var r = u.reduce(function(e, t) {
              return (e[t] = o.getPropertyValue(t)), e;
            }, {}),
            i = r['box-sizing'];
          if ('' === i) return null;
          l &&
            'border-box' === i &&
            (r.width =
              parseFloat(r.width) +
              parseFloat(o['border-right-width']) +
              parseFloat(o['border-left-width']) +
              parseFloat(o['padding-right']) +
              parseFloat(o['padding-left']) +
              'px');
          var a = parseFloat(r['padding-bottom']) + parseFloat(r['padding-top']),
            s = parseFloat(r['border-bottom-width']) + parseFloat(r['border-top-width']),
            c = { sizingStyle: r, paddingSize: a, borderSize: s, boxSizing: i };
          n && (d[t] = c);
          return c;
        })(e, t, n);
        if (null === i) return null;
        var a = i.paddingSize,
          s = i.borderSize,
          c = i.boxSizing,
          h = i.sizingStyle;
        Object.keys(h).forEach(function(e) {
          p.style[e] = h[e];
        }),
          f(p),
          (p.value = e.value || e.placeholder || 'x');
        var m = -1 / 0,
          g = 1 / 0,
          v = p.scrollHeight;
        'border-box' === c ? (v += s) : 'content-box' === c && (v -= a), (p.value = 'x');
        var y = p.scrollHeight - a,
          b = Math.floor(v / y);
        return (
          null !== o &&
            ((m = y * o), 'border-box' === c && (m = m + a + s), (v = Math.max(m, v))),
          null !== r &&
            ((g = y * r), 'border-box' === c && (g = g + a + s), (v = Math.min(g, v))),
          {
            height: v,
            minHeight: m,
            maxHeight: g,
            rowCount: Math.floor(v / y),
            valueRowCount: b
          }
        );
      }
      p.setAttribute('tab-index', '-1'), p.setAttribute('aria-hidden', 'true'), f(p);
      var m = function() {},
        g = 0,
        v = (function(e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this)._onRef = function(e) {
                n._ref = e;
                var t = n.props.inputRef;
                'function' != typeof t ? (t.current = e) : t(e);
              }),
              (n._onChange = function(e) {
                n._controlled || n._resizeComponent(),
                  n.props.onChange(e, Object(i.a)(n));
              }),
              (n._resizeComponent = function(e) {
                void 0 === e && (e = m);
                var t = h(
                  n._ref,
                  n._uid,
                  n.props.useCacheForDOMMeasurements,
                  n.props.minRows,
                  n.props.maxRows
                );
                if (null !== t) {
                  var o = t.height,
                    r = t.minHeight,
                    i = t.maxHeight,
                    a = t.rowCount,
                    s = t.valueRowCount;
                  (n.rowCount = a),
                    (n.valueRowCount = s),
                    n.state.height === o &&
                    n.state.minHeight === r &&
                    n.state.maxHeight === i
                      ? e()
                      : n.setState({ height: o, minHeight: r, maxHeight: i }, e);
                } else e();
              }),
              (n.state = {
                height: (t.style && t.style.height) || 0,
                minHeight: -1 / 0,
                maxHeight: 1 / 0
              }),
              (n._uid = g++),
              (n._controlled = void 0 !== t.value),
              (n._resizeLock = !1),
              n
            );
          }
          Object(a.a)(t, e);
          var n = t.prototype;
          return (
            (n.render = function() {
              var e = this.props,
                t =
                  (e.inputRef,
                  e.maxRows,
                  e.minRows,
                  e.onHeightChange,
                  e.useCacheForDOMMeasurements,
                  Object(r.a)(e, [
                    'inputRef',
                    'maxRows',
                    'minRows',
                    'onHeightChange',
                    'useCacheForDOMMeasurements'
                  ]));
              return (
                (t.style = Object(o.a)({}, t.style, { height: this.state.height })),
                Math.max(t.style.maxHeight || 1 / 0, this.state.maxHeight) <
                  this.state.height && (t.style.overflow = 'hidden'),
                Object(s.createElement)(
                  'textarea',
                  Object(o.a)({}, t, { onChange: this._onChange, ref: this._onRef })
                )
              );
            }),
            (n.componentDidMount = function() {
              var e = this;
              this._resizeComponent(),
                (this._resizeListener = function() {
                  e._resizeLock ||
                    ((e._resizeLock = !0),
                    e._resizeComponent(function() {
                      e._resizeLock = !1;
                    }));
                }),
                window.addEventListener('resize', this._resizeListener);
            }),
            (n.componentDidUpdate = function(e, t) {
              e !== this.props && this._resizeComponent(),
                this.state.height !== t.height &&
                  this.props.onHeightChange(this.state.height, this);
            }),
            (n.componentWillUnmount = function() {
              window.removeEventListener('resize', this._resizeListener),
                (function(e) {
                  delete d[e];
                })(this._uid);
            }),
            t
          );
        })(s.Component);
      (v.defaultProps = {
        inputRef: m,
        onChange: m,
        onHeightChange: m,
        useCacheForDOMMeasurements: !1
      }),
        (t.a = v);
    },
    '../../node_modules/textarea-caret/index.js': function(e, t, n) {
      !(function() {
        var t = [
            'direction',
            'boxSizing',
            'width',
            'height',
            'overflowX',
            'overflowY',
            'borderTopWidth',
            'borderRightWidth',
            'borderBottomWidth',
            'borderLeftWidth',
            'borderStyle',
            'paddingTop',
            'paddingRight',
            'paddingBottom',
            'paddingLeft',
            'fontStyle',
            'fontVariant',
            'fontWeight',
            'fontStretch',
            'fontSize',
            'fontSizeAdjust',
            'lineHeight',
            'fontFamily',
            'textAlign',
            'textTransform',
            'textIndent',
            'textDecoration',
            'letterSpacing',
            'wordSpacing',
            'tabSize',
            'MozTabSize'
          ],
          n = 'undefined' != typeof window,
          o = n && null != window.mozInnerScreenX;
        function r(e, r, i) {
          if (!n)
            throw new Error(
              'textarea-caret-position#getCaretCoordinates should only be called in a browser'
            );
          var a = (i && i.debug) || !1;
          if (a) {
            var s = document.querySelector('#input-textarea-caret-position-mirror-div');
            s && s.parentNode.removeChild(s);
          }
          var l = document.createElement('div');
          (l.id = 'input-textarea-caret-position-mirror-div'),
            document.body.appendChild(l);
          var c = l.style,
            u = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle;
          (c.whiteSpace = 'pre-wrap'),
            'INPUT' !== e.nodeName && (c.wordWrap = 'break-word'),
            (c.position = 'absolute'),
            a || (c.visibility = 'hidden'),
            t.forEach(function(e) {
              c[e] = u[e];
            }),
            o
              ? e.scrollHeight > parseInt(u.height) && (c.overflowY = 'scroll')
              : (c.overflow = 'hidden'),
            (l.textContent = e.value.substring(0, r)),
            'INPUT' === e.nodeName && (l.textContent = l.textContent.replace(/\s/g, ' '));
          var d = document.createElement('span');
          (d.textContent = e.value.substring(r) || '.'), l.appendChild(d);
          var p = {
            top: d.offsetTop + parseInt(u.borderTopWidth),
            left: d.offsetLeft + parseInt(u.borderLeftWidth)
          };
          return a ? (d.style.backgroundColor = '#aaa') : document.body.removeChild(l), p;
        }
        void 0 !== e.exports ? (e.exports = r) : n && (window.getCaretCoordinates = r);
      })();
    }
  }
]);
//# sourceMappingURL=vendors~activity-activity-container~admin-web-communityAdminForm-component~admin-web-communityAdminL~253ae49b.bundle.js.map
