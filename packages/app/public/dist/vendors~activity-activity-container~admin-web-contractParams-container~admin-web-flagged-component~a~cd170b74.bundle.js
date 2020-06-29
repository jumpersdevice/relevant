(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [2],
  {
    '../../node_modules/bn.js/lib/bn.js': function(e, t, r) {
      (function(e) {
        !(function(e, t) {
          'use strict';
          function i(e, t) {
            if (!e) throw new Error(t || 'Assertion failed');
          }
          function n(e, t) {
            e.super_ = t;
            var r = function() {};
            (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          }
          function s(e, t, r) {
            if (s.isBN(e)) return e;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== e &&
                (('le' !== t && 'be' !== t) || ((r = t), (t = 10)),
                this._init(e || 0, t || 10, r || 'be'));
          }
          var o;
          'object' == typeof e ? (e.exports = s) : (t.BN = s),
            (s.BN = s),
            (s.wordSize = 26);
          try {
            o = r(4).Buffer;
          } catch (e) {}
          function a(e, t, r) {
            for (var i = 0, n = Math.min(e.length, r), s = t; s < n; s++) {
              var o = e.charCodeAt(s) - 48;
              (i <<= 4),
                (i |=
                  o >= 49 && o <= 54
                    ? o - 49 + 10
                    : o >= 17 && o <= 22
                    ? o - 17 + 10
                    : 15 & o);
            }
            return i;
          }
          function d(e, t, r, i) {
            for (var n = 0, s = Math.min(e.length, r), o = t; o < s; o++) {
              var a = e.charCodeAt(o) - 48;
              (n *= i), (n += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a);
            }
            return n;
          }
          (s.isBN = function(e) {
            return (
              e instanceof s ||
              (null !== e &&
                'object' == typeof e &&
                e.constructor.wordSize === s.wordSize &&
                Array.isArray(e.words))
            );
          }),
            (s.max = function(e, t) {
              return e.cmp(t) > 0 ? e : t;
            }),
            (s.min = function(e, t) {
              return e.cmp(t) < 0 ? e : t;
            }),
            (s.prototype._init = function(e, t, r) {
              if ('number' == typeof e) return this._initNumber(e, t, r);
              if ('object' == typeof e) return this._initArray(e, t, r);
              'hex' === t && (t = 16), i(t === (0 | t) && t >= 2 && t <= 36);
              var n = 0;
              '-' === (e = e.toString().replace(/\s+/g, ''))[0] && n++,
                16 === t ? this._parseHex(e, n) : this._parseBase(e, t, n),
                '-' === e[0] && (this.negative = 1),
                this.strip(),
                'le' === r && this._initArray(this.toArray(), t, r);
            }),
            (s.prototype._initNumber = function(e, t, r) {
              e < 0 && ((this.negative = 1), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                  ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                    (this.length = 2))
                  : (i(e < 9007199254740992),
                    (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                'le' === r && this._initArray(this.toArray(), t, r);
            }),
            (s.prototype._initArray = function(e, t, r) {
              if ((i('number' == typeof e.length), e.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var s,
                o,
                a = 0;
              if ('be' === r)
                for (n = e.length - 1, s = 0; n >= 0; n -= 3)
                  (o = e[n] | (e[n - 1] << 8) | (e[n - 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), s++);
              else if ('le' === r)
                for (n = 0, s = 0; n < e.length; n += 3)
                  (o = e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), s++);
              return this.strip();
            }),
            (s.prototype._parseHex = function(e, t) {
              (this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var i,
                n,
                s = 0;
              for (r = e.length - 6, i = 0; r >= t; r -= 6)
                (n = a(e, r, r + 6)),
                  (this.words[i] |= (n << s) & 67108863),
                  (this.words[i + 1] |= (n >>> (26 - s)) & 4194303),
                  (s += 24) >= 26 && ((s -= 26), i++);
              r + 6 !== t &&
                ((n = a(e, t, r + 6)),
                (this.words[i] |= (n << s) & 67108863),
                (this.words[i + 1] |= (n >>> (26 - s)) & 4194303)),
                this.strip();
            }),
            (s.prototype._parseBase = function(e, t, r) {
              (this.words = [0]), (this.length = 1);
              for (var i = 0, n = 1; n <= 67108863; n *= t) i++;
              i--, (n = (n / t) | 0);
              for (
                var s = e.length - r, o = s % i, a = Math.min(s, s - o) + r, f = 0, h = r;
                h < a;
                h += i
              )
                (f = d(e, h, h + i, t)),
                  this.imuln(n),
                  this.words[0] + f < 67108864 ? (this.words[0] += f) : this._iaddn(f);
              if (0 !== o) {
                var c = 1;
                for (f = d(e, h, e.length, t), h = 0; h < o; h++) c *= t;
                this.imuln(c),
                  this.words[0] + f < 67108864 ? (this.words[0] += f) : this._iaddn(f);
              }
            }),
            (s.prototype.copy = function(e) {
              e.words = new Array(this.length);
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
              (e.length = this.length), (e.negative = this.negative), (e.red = this.red);
            }),
            (s.prototype.clone = function() {
              var e = new s(null);
              return this.copy(e), e;
            }),
            (s.prototype._expand = function(e) {
              for (; this.length < e; ) this.words[this.length++] = 0;
              return this;
            }),
            (s.prototype.strip = function() {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }),
            (s.prototype._normSign = function() {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0), this
              );
            }),
            (s.prototype.inspect = function() {
              return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
            });
          var f = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000'
            ],
            h = [
              0,
              0,
              25,
              16,
              12,
              11,
              10,
              9,
              8,
              8,
              7,
              7,
              7,
              7,
              6,
              6,
              6,
              6,
              6,
              6,
              6,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5
            ],
            c = [
              0,
              0,
              33554432,
              43046721,
              16777216,
              48828125,
              60466176,
              40353607,
              16777216,
              43046721,
              1e7,
              19487171,
              35831808,
              62748517,
              7529536,
              11390625,
              16777216,
              24137569,
              34012224,
              47045881,
              64e6,
              4084101,
              5153632,
              6436343,
              7962624,
              9765625,
              11881376,
              14348907,
              17210368,
              20511149,
              243e5,
              28629151,
              33554432,
              39135393,
              45435424,
              52521875,
              60466176
            ];
          function u(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var i = (e.length + t.length) | 0;
            (r.length = i), (i = (i - 1) | 0);
            var n = 0 | e.words[0],
              s = 0 | t.words[0],
              o = n * s,
              a = 67108863 & o,
              d = (o / 67108864) | 0;
            r.words[0] = a;
            for (var f = 1; f < i; f++) {
              for (
                var h = d >>> 26,
                  c = 67108863 & d,
                  u = Math.min(f, t.length - 1),
                  l = Math.max(0, f - e.length + 1);
                l <= u;
                l++
              ) {
                var b = (f - l) | 0;
                (h +=
                  ((o = (n = 0 | e.words[b]) * (s = 0 | t.words[l]) + c) / 67108864) | 0),
                  (c = 67108863 & o);
              }
              (r.words[f] = 0 | c), (d = 0 | h);
            }
            return 0 !== d ? (r.words[f] = 0 | d) : r.length--, r.strip();
          }
          (s.prototype.toString = function(e, t) {
            var r;
            if (((t = 0 | t || 1), 16 === (e = e || 10) || 'hex' === e)) {
              r = '';
              for (var n = 0, s = 0, o = 0; o < this.length; o++) {
                var a = this.words[o],
                  d = (16777215 & ((a << n) | s)).toString(16);
                (r =
                  0 !== (s = (a >>> (24 - n)) & 16777215) || o !== this.length - 1
                    ? f[6 - d.length] + d + r
                    : d + r),
                  (n += 2) >= 26 && ((n -= 26), o--);
              }
              for (0 !== s && (r = s.toString(16) + r); r.length % t != 0; ) r = '0' + r;
              return 0 !== this.negative && (r = '-' + r), r;
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
              var u = h[e],
                l = c[e];
              r = '';
              var b = this.clone();
              for (b.negative = 0; !b.isZero(); ) {
                var p = b.modn(l).toString(e);
                r = (b = b.idivn(l)).isZero() ? p + r : f[u - p.length] + p + r;
              }
              for (this.isZero() && (r = '0' + r); r.length % t != 0; ) r = '0' + r;
              return 0 !== this.negative && (r = '-' + r), r;
            }
            i(!1, 'Base should be between 2 and 36');
          }),
            (s.prototype.toNumber = function() {
              var e = this.words[0];
              return (
                2 === this.length
                  ? (e += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (e += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    i(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -e : e
              );
            }),
            (s.prototype.toJSON = function() {
              return this.toString(16);
            }),
            (s.prototype.toBuffer = function(e, t) {
              return i(void 0 !== o), this.toArrayLike(o, e, t);
            }),
            (s.prototype.toArray = function(e, t) {
              return this.toArrayLike(Array, e, t);
            }),
            (s.prototype.toArrayLike = function(e, t, r) {
              var n = this.byteLength(),
                s = r || Math.max(1, n);
              i(n <= s, 'byte array longer than desired length'),
                i(s > 0, 'Requested array length <= 0'),
                this.strip();
              var o,
                a,
                d = 'le' === t,
                f = new e(s),
                h = this.clone();
              if (d) {
                for (a = 0; !h.isZero(); a++) (o = h.andln(255)), h.iushrn(8), (f[a] = o);
                for (; a < s; a++) f[a] = 0;
              } else {
                for (a = 0; a < s - n; a++) f[a] = 0;
                for (a = 0; !h.isZero(); a++)
                  (o = h.andln(255)), h.iushrn(8), (f[s - a - 1] = o);
              }
              return f;
            }),
            Math.clz32
              ? (s.prototype._countBits = function(e) {
                  return 32 - Math.clz32(e);
                })
              : (s.prototype._countBits = function(e) {
                  var t = e,
                    r = 0;
                  return (
                    t >= 4096 && ((r += 13), (t >>>= 13)),
                    t >= 64 && ((r += 7), (t >>>= 7)),
                    t >= 8 && ((r += 4), (t >>>= 4)),
                    t >= 2 && ((r += 2), (t >>>= 2)),
                    r + t
                  );
                }),
            (s.prototype._zeroBits = function(e) {
              if (0 === e) return 26;
              var t = e,
                r = 0;
              return (
                0 == (8191 & t) && ((r += 13), (t >>>= 13)),
                0 == (127 & t) && ((r += 7), (t >>>= 7)),
                0 == (15 & t) && ((r += 4), (t >>>= 4)),
                0 == (3 & t) && ((r += 2), (t >>>= 2)),
                0 == (1 & t) && r++,
                r
              );
            }),
            (s.prototype.bitLength = function() {
              var e = this.words[this.length - 1],
                t = this._countBits(e);
              return 26 * (this.length - 1) + t;
            }),
            (s.prototype.zeroBits = function() {
              if (this.isZero()) return 0;
              for (var e = 0, t = 0; t < this.length; t++) {
                var r = this._zeroBits(this.words[t]);
                if (((e += r), 26 !== r)) break;
              }
              return e;
            }),
            (s.prototype.byteLength = function() {
              return Math.ceil(this.bitLength() / 8);
            }),
            (s.prototype.toTwos = function(e) {
              return 0 !== this.negative
                ? this.abs()
                    .inotn(e)
                    .iaddn(1)
                : this.clone();
            }),
            (s.prototype.fromTwos = function(e) {
              return this.testn(e - 1)
                ? this.notn(e)
                    .iaddn(1)
                    .ineg()
                : this.clone();
            }),
            (s.prototype.isNeg = function() {
              return 0 !== this.negative;
            }),
            (s.prototype.neg = function() {
              return this.clone().ineg();
            }),
            (s.prototype.ineg = function() {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (s.prototype.iuor = function(e) {
              for (; this.length < e.length; ) this.words[this.length++] = 0;
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t];
              return this.strip();
            }),
            (s.prototype.ior = function(e) {
              return i(0 == (this.negative | e.negative)), this.iuor(e);
            }),
            (s.prototype.or = function(e) {
              return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
            }),
            (s.prototype.uor = function(e) {
              return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
            }),
            (s.prototype.iuand = function(e) {
              var t;
              t = this.length > e.length ? e : this;
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] & e.words[r];
              return (this.length = t.length), this.strip();
            }),
            (s.prototype.iand = function(e) {
              return i(0 == (this.negative | e.negative)), this.iuand(e);
            }),
            (s.prototype.and = function(e) {
              return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
            }),
            (s.prototype.uand = function(e) {
              return this.length > e.length
                ? this.clone().iuand(e)
                : e.clone().iuand(this);
            }),
            (s.prototype.iuxor = function(e) {
              var t, r;
              this.length > e.length ? ((t = this), (r = e)) : ((t = e), (r = this));
              for (var i = 0; i < r.length; i++) this.words[i] = t.words[i] ^ r.words[i];
              if (this !== t) for (; i < t.length; i++) this.words[i] = t.words[i];
              return (this.length = t.length), this.strip();
            }),
            (s.prototype.ixor = function(e) {
              return i(0 == (this.negative | e.negative)), this.iuxor(e);
            }),
            (s.prototype.xor = function(e) {
              return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
            }),
            (s.prototype.uxor = function(e) {
              return this.length > e.length
                ? this.clone().iuxor(e)
                : e.clone().iuxor(this);
            }),
            (s.prototype.inotn = function(e) {
              i('number' == typeof e && e >= 0);
              var t = 0 | Math.ceil(e / 26),
                r = e % 26;
              this._expand(t), r > 0 && t--;
              for (var n = 0; n < t; n++) this.words[n] = 67108863 & ~this.words[n];
              return (
                r > 0 && (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
                this.strip()
              );
            }),
            (s.prototype.notn = function(e) {
              return this.clone().inotn(e);
            }),
            (s.prototype.setn = function(e, t) {
              i('number' == typeof e && e >= 0);
              var r = (e / 26) | 0,
                n = e % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = t
                  ? this.words[r] | (1 << n)
                  : this.words[r] & ~(1 << n)),
                this.strip()
              );
            }),
            (s.prototype.iadd = function(e) {
              var t, r, i;
              if (0 !== this.negative && 0 === e.negative)
                return (
                  (this.negative = 0),
                  (t = this.isub(e)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== e.negative)
                return (
                  (e.negative = 0), (t = this.isub(e)), (e.negative = 1), t._normSign()
                );
              this.length > e.length ? ((r = this), (i = e)) : ((r = e), (i = this));
              for (var n = 0, s = 0; s < i.length; s++)
                (t = (0 | r.words[s]) + (0 | i.words[s]) + n),
                  (this.words[s] = 67108863 & t),
                  (n = t >>> 26);
              for (; 0 !== n && s < r.length; s++)
                (t = (0 | r.words[s]) + n),
                  (this.words[s] = 67108863 & t),
                  (n = t >>> 26);
              if (((this.length = r.length), 0 !== n))
                (this.words[this.length] = n), this.length++;
              else if (r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
              return this;
            }),
            (s.prototype.add = function(e) {
              var t;
              return 0 !== e.negative && 0 === this.negative
                ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                : 0 === e.negative && 0 !== this.negative
                ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t)
                : this.length > e.length
                ? this.clone().iadd(e)
                : e.clone().iadd(this);
            }),
            (s.prototype.isub = function(e) {
              if (0 !== e.negative) {
                e.negative = 0;
                var t = this.iadd(e);
                return (e.negative = 1), t._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iadd(e), (this.negative = 1), this._normSign()
                );
              var r,
                i,
                n = this.cmp(e);
              if (0 === n)
                return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
              n > 0 ? ((r = this), (i = e)) : ((r = e), (i = this));
              for (var s = 0, o = 0; o < i.length; o++)
                (s = (t = (0 | r.words[o]) - (0 | i.words[o]) + s) >> 26),
                  (this.words[o] = 67108863 & t);
              for (; 0 !== s && o < r.length; o++)
                (s = (t = (0 | r.words[o]) + s) >> 26), (this.words[o] = 67108863 & t);
              if (0 === s && o < r.length && r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return (
                (this.length = Math.max(this.length, o)),
                r !== this && (this.negative = 1),
                this.strip()
              );
            }),
            (s.prototype.sub = function(e) {
              return this.clone().isub(e);
            });
          var l = function(e, t, r) {
            var i,
              n,
              s,
              o = e.words,
              a = t.words,
              d = r.words,
              f = 0,
              h = 0 | o[0],
              c = 8191 & h,
              u = h >>> 13,
              l = 0 | o[1],
              b = 8191 & l,
              p = l >>> 13,
              m = 0 | o[2],
              _ = 8191 & m,
              y = m >>> 13,
              g = 0 | o[3],
              v = 8191 & g,
              w = g >>> 13,
              j = 0 | o[4],
              S = 8191 & j,
              M = j >>> 13,
              x = 0 | o[5],
              k = 8191 & x,
              E = x >>> 13,
              A = 0 | o[6],
              I = 8191 & A,
              B = A >>> 13,
              R = 0 | o[7],
              C = 8191 & R,
              P = R >>> 13,
              O = 0 | o[8],
              T = 8191 & O,
              L = O >>> 13,
              z = 0 | o[9],
              D = 8191 & z,
              q = z >>> 13,
              N = 0 | a[0],
              U = 8191 & N,
              K = N >>> 13,
              H = 0 | a[1],
              F = 8191 & H,
              W = H >>> 13,
              V = 0 | a[2],
              X = 8191 & V,
              J = V >>> 13,
              G = 0 | a[3],
              Z = 8191 & G,
              Y = G >>> 13,
              $ = 0 | a[4],
              Q = 8191 & $,
              ee = $ >>> 13,
              te = 0 | a[5],
              re = 8191 & te,
              ie = te >>> 13,
              ne = 0 | a[6],
              se = 8191 & ne,
              oe = ne >>> 13,
              ae = 0 | a[7],
              de = 8191 & ae,
              fe = ae >>> 13,
              he = 0 | a[8],
              ce = 8191 & he,
              ue = he >>> 13,
              le = 0 | a[9],
              be = 8191 & le,
              pe = le >>> 13;
            (r.negative = e.negative ^ t.negative), (r.length = 19);
            var me =
              (((f + (i = Math.imul(c, U))) | 0) +
                ((8191 & (n = ((n = Math.imul(c, K)) + Math.imul(u, U)) | 0)) << 13)) |
              0;
            (f = ((((s = Math.imul(u, K)) + (n >>> 13)) | 0) + (me >>> 26)) | 0),
              (me &= 67108863),
              (i = Math.imul(b, U)),
              (n = ((n = Math.imul(b, K)) + Math.imul(p, U)) | 0),
              (s = Math.imul(p, K));
            var _e =
              (((f + (i = (i + Math.imul(c, F)) | 0)) | 0) +
                ((8191 & (n = ((n = (n + Math.imul(c, W)) | 0) + Math.imul(u, F)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(u, W)) | 0) + (n >>> 13)) | 0) + (_e >>> 26)) | 0),
              (_e &= 67108863),
              (i = Math.imul(_, U)),
              (n = ((n = Math.imul(_, K)) + Math.imul(y, U)) | 0),
              (s = Math.imul(y, K)),
              (i = (i + Math.imul(b, F)) | 0),
              (n = ((n = (n + Math.imul(b, W)) | 0) + Math.imul(p, F)) | 0),
              (s = (s + Math.imul(p, W)) | 0);
            var ye =
              (((f + (i = (i + Math.imul(c, X)) | 0)) | 0) +
                ((8191 & (n = ((n = (n + Math.imul(c, J)) | 0) + Math.imul(u, X)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(u, J)) | 0) + (n >>> 13)) | 0) + (ye >>> 26)) | 0),
              (ye &= 67108863),
              (i = Math.imul(v, U)),
              (n = ((n = Math.imul(v, K)) + Math.imul(w, U)) | 0),
              (s = Math.imul(w, K)),
              (i = (i + Math.imul(_, F)) | 0),
              (n = ((n = (n + Math.imul(_, W)) | 0) + Math.imul(y, F)) | 0),
              (s = (s + Math.imul(y, W)) | 0),
              (i = (i + Math.imul(b, X)) | 0),
              (n = ((n = (n + Math.imul(b, J)) | 0) + Math.imul(p, X)) | 0),
              (s = (s + Math.imul(p, J)) | 0);
            var ge =
              (((f + (i = (i + Math.imul(c, Z)) | 0)) | 0) +
                ((8191 & (n = ((n = (n + Math.imul(c, Y)) | 0) + Math.imul(u, Z)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(u, Y)) | 0) + (n >>> 13)) | 0) + (ge >>> 26)) | 0),
              (ge &= 67108863),
              (i = Math.imul(S, U)),
              (n = ((n = Math.imul(S, K)) + Math.imul(M, U)) | 0),
              (s = Math.imul(M, K)),
              (i = (i + Math.imul(v, F)) | 0),
              (n = ((n = (n + Math.imul(v, W)) | 0) + Math.imul(w, F)) | 0),
              (s = (s + Math.imul(w, W)) | 0),
              (i = (i + Math.imul(_, X)) | 0),
              (n = ((n = (n + Math.imul(_, J)) | 0) + Math.imul(y, X)) | 0),
              (s = (s + Math.imul(y, J)) | 0),
              (i = (i + Math.imul(b, Z)) | 0),
              (n = ((n = (n + Math.imul(b, Y)) | 0) + Math.imul(p, Z)) | 0),
              (s = (s + Math.imul(p, Y)) | 0);
            var ve =
              (((f + (i = (i + Math.imul(c, Q)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(c, ee)) | 0) + Math.imul(u, Q)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(u, ee)) | 0) + (n >>> 13)) | 0) + (ve >>> 26)) | 0),
              (ve &= 67108863),
              (i = Math.imul(k, U)),
              (n = ((n = Math.imul(k, K)) + Math.imul(E, U)) | 0),
              (s = Math.imul(E, K)),
              (i = (i + Math.imul(S, F)) | 0),
              (n = ((n = (n + Math.imul(S, W)) | 0) + Math.imul(M, F)) | 0),
              (s = (s + Math.imul(M, W)) | 0),
              (i = (i + Math.imul(v, X)) | 0),
              (n = ((n = (n + Math.imul(v, J)) | 0) + Math.imul(w, X)) | 0),
              (s = (s + Math.imul(w, J)) | 0),
              (i = (i + Math.imul(_, Z)) | 0),
              (n = ((n = (n + Math.imul(_, Y)) | 0) + Math.imul(y, Z)) | 0),
              (s = (s + Math.imul(y, Y)) | 0),
              (i = (i + Math.imul(b, Q)) | 0),
              (n = ((n = (n + Math.imul(b, ee)) | 0) + Math.imul(p, Q)) | 0),
              (s = (s + Math.imul(p, ee)) | 0);
            var we =
              (((f + (i = (i + Math.imul(c, re)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(c, ie)) | 0) + Math.imul(u, re)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(u, ie)) | 0) + (n >>> 13)) | 0) + (we >>> 26)) | 0),
              (we &= 67108863),
              (i = Math.imul(I, U)),
              (n = ((n = Math.imul(I, K)) + Math.imul(B, U)) | 0),
              (s = Math.imul(B, K)),
              (i = (i + Math.imul(k, F)) | 0),
              (n = ((n = (n + Math.imul(k, W)) | 0) + Math.imul(E, F)) | 0),
              (s = (s + Math.imul(E, W)) | 0),
              (i = (i + Math.imul(S, X)) | 0),
              (n = ((n = (n + Math.imul(S, J)) | 0) + Math.imul(M, X)) | 0),
              (s = (s + Math.imul(M, J)) | 0),
              (i = (i + Math.imul(v, Z)) | 0),
              (n = ((n = (n + Math.imul(v, Y)) | 0) + Math.imul(w, Z)) | 0),
              (s = (s + Math.imul(w, Y)) | 0),
              (i = (i + Math.imul(_, Q)) | 0),
              (n = ((n = (n + Math.imul(_, ee)) | 0) + Math.imul(y, Q)) | 0),
              (s = (s + Math.imul(y, ee)) | 0),
              (i = (i + Math.imul(b, re)) | 0),
              (n = ((n = (n + Math.imul(b, ie)) | 0) + Math.imul(p, re)) | 0),
              (s = (s + Math.imul(p, ie)) | 0);
            var je =
              (((f + (i = (i + Math.imul(c, se)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(c, oe)) | 0) + Math.imul(u, se)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(u, oe)) | 0) + (n >>> 13)) | 0) + (je >>> 26)) | 0),
              (je &= 67108863),
              (i = Math.imul(C, U)),
              (n = ((n = Math.imul(C, K)) + Math.imul(P, U)) | 0),
              (s = Math.imul(P, K)),
              (i = (i + Math.imul(I, F)) | 0),
              (n = ((n = (n + Math.imul(I, W)) | 0) + Math.imul(B, F)) | 0),
              (s = (s + Math.imul(B, W)) | 0),
              (i = (i + Math.imul(k, X)) | 0),
              (n = ((n = (n + Math.imul(k, J)) | 0) + Math.imul(E, X)) | 0),
              (s = (s + Math.imul(E, J)) | 0),
              (i = (i + Math.imul(S, Z)) | 0),
              (n = ((n = (n + Math.imul(S, Y)) | 0) + Math.imul(M, Z)) | 0),
              (s = (s + Math.imul(M, Y)) | 0),
              (i = (i + Math.imul(v, Q)) | 0),
              (n = ((n = (n + Math.imul(v, ee)) | 0) + Math.imul(w, Q)) | 0),
              (s = (s + Math.imul(w, ee)) | 0),
              (i = (i + Math.imul(_, re)) | 0),
              (n = ((n = (n + Math.imul(_, ie)) | 0) + Math.imul(y, re)) | 0),
              (s = (s + Math.imul(y, ie)) | 0),
              (i = (i + Math.imul(b, se)) | 0),
              (n = ((n = (n + Math.imul(b, oe)) | 0) + Math.imul(p, se)) | 0),
              (s = (s + Math.imul(p, oe)) | 0);
            var Se =
              (((f + (i = (i + Math.imul(c, de)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(c, fe)) | 0) + Math.imul(u, de)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(u, fe)) | 0) + (n >>> 13)) | 0) + (Se >>> 26)) | 0),
              (Se &= 67108863),
              (i = Math.imul(T, U)),
              (n = ((n = Math.imul(T, K)) + Math.imul(L, U)) | 0),
              (s = Math.imul(L, K)),
              (i = (i + Math.imul(C, F)) | 0),
              (n = ((n = (n + Math.imul(C, W)) | 0) + Math.imul(P, F)) | 0),
              (s = (s + Math.imul(P, W)) | 0),
              (i = (i + Math.imul(I, X)) | 0),
              (n = ((n = (n + Math.imul(I, J)) | 0) + Math.imul(B, X)) | 0),
              (s = (s + Math.imul(B, J)) | 0),
              (i = (i + Math.imul(k, Z)) | 0),
              (n = ((n = (n + Math.imul(k, Y)) | 0) + Math.imul(E, Z)) | 0),
              (s = (s + Math.imul(E, Y)) | 0),
              (i = (i + Math.imul(S, Q)) | 0),
              (n = ((n = (n + Math.imul(S, ee)) | 0) + Math.imul(M, Q)) | 0),
              (s = (s + Math.imul(M, ee)) | 0),
              (i = (i + Math.imul(v, re)) | 0),
              (n = ((n = (n + Math.imul(v, ie)) | 0) + Math.imul(w, re)) | 0),
              (s = (s + Math.imul(w, ie)) | 0),
              (i = (i + Math.imul(_, se)) | 0),
              (n = ((n = (n + Math.imul(_, oe)) | 0) + Math.imul(y, se)) | 0),
              (s = (s + Math.imul(y, oe)) | 0),
              (i = (i + Math.imul(b, de)) | 0),
              (n = ((n = (n + Math.imul(b, fe)) | 0) + Math.imul(p, de)) | 0),
              (s = (s + Math.imul(p, fe)) | 0);
            var Me =
              (((f + (i = (i + Math.imul(c, ce)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(c, ue)) | 0) + Math.imul(u, ce)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(u, ue)) | 0) + (n >>> 13)) | 0) + (Me >>> 26)) | 0),
              (Me &= 67108863),
              (i = Math.imul(D, U)),
              (n = ((n = Math.imul(D, K)) + Math.imul(q, U)) | 0),
              (s = Math.imul(q, K)),
              (i = (i + Math.imul(T, F)) | 0),
              (n = ((n = (n + Math.imul(T, W)) | 0) + Math.imul(L, F)) | 0),
              (s = (s + Math.imul(L, W)) | 0),
              (i = (i + Math.imul(C, X)) | 0),
              (n = ((n = (n + Math.imul(C, J)) | 0) + Math.imul(P, X)) | 0),
              (s = (s + Math.imul(P, J)) | 0),
              (i = (i + Math.imul(I, Z)) | 0),
              (n = ((n = (n + Math.imul(I, Y)) | 0) + Math.imul(B, Z)) | 0),
              (s = (s + Math.imul(B, Y)) | 0),
              (i = (i + Math.imul(k, Q)) | 0),
              (n = ((n = (n + Math.imul(k, ee)) | 0) + Math.imul(E, Q)) | 0),
              (s = (s + Math.imul(E, ee)) | 0),
              (i = (i + Math.imul(S, re)) | 0),
              (n = ((n = (n + Math.imul(S, ie)) | 0) + Math.imul(M, re)) | 0),
              (s = (s + Math.imul(M, ie)) | 0),
              (i = (i + Math.imul(v, se)) | 0),
              (n = ((n = (n + Math.imul(v, oe)) | 0) + Math.imul(w, se)) | 0),
              (s = (s + Math.imul(w, oe)) | 0),
              (i = (i + Math.imul(_, de)) | 0),
              (n = ((n = (n + Math.imul(_, fe)) | 0) + Math.imul(y, de)) | 0),
              (s = (s + Math.imul(y, fe)) | 0),
              (i = (i + Math.imul(b, ce)) | 0),
              (n = ((n = (n + Math.imul(b, ue)) | 0) + Math.imul(p, ce)) | 0),
              (s = (s + Math.imul(p, ue)) | 0);
            var xe =
              (((f + (i = (i + Math.imul(c, be)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(c, pe)) | 0) + Math.imul(u, be)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(u, pe)) | 0) + (n >>> 13)) | 0) + (xe >>> 26)) | 0),
              (xe &= 67108863),
              (i = Math.imul(D, F)),
              (n = ((n = Math.imul(D, W)) + Math.imul(q, F)) | 0),
              (s = Math.imul(q, W)),
              (i = (i + Math.imul(T, X)) | 0),
              (n = ((n = (n + Math.imul(T, J)) | 0) + Math.imul(L, X)) | 0),
              (s = (s + Math.imul(L, J)) | 0),
              (i = (i + Math.imul(C, Z)) | 0),
              (n = ((n = (n + Math.imul(C, Y)) | 0) + Math.imul(P, Z)) | 0),
              (s = (s + Math.imul(P, Y)) | 0),
              (i = (i + Math.imul(I, Q)) | 0),
              (n = ((n = (n + Math.imul(I, ee)) | 0) + Math.imul(B, Q)) | 0),
              (s = (s + Math.imul(B, ee)) | 0),
              (i = (i + Math.imul(k, re)) | 0),
              (n = ((n = (n + Math.imul(k, ie)) | 0) + Math.imul(E, re)) | 0),
              (s = (s + Math.imul(E, ie)) | 0),
              (i = (i + Math.imul(S, se)) | 0),
              (n = ((n = (n + Math.imul(S, oe)) | 0) + Math.imul(M, se)) | 0),
              (s = (s + Math.imul(M, oe)) | 0),
              (i = (i + Math.imul(v, de)) | 0),
              (n = ((n = (n + Math.imul(v, fe)) | 0) + Math.imul(w, de)) | 0),
              (s = (s + Math.imul(w, fe)) | 0),
              (i = (i + Math.imul(_, ce)) | 0),
              (n = ((n = (n + Math.imul(_, ue)) | 0) + Math.imul(y, ce)) | 0),
              (s = (s + Math.imul(y, ue)) | 0);
            var ke =
              (((f + (i = (i + Math.imul(b, be)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(b, pe)) | 0) + Math.imul(p, be)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(p, pe)) | 0) + (n >>> 13)) | 0) + (ke >>> 26)) | 0),
              (ke &= 67108863),
              (i = Math.imul(D, X)),
              (n = ((n = Math.imul(D, J)) + Math.imul(q, X)) | 0),
              (s = Math.imul(q, J)),
              (i = (i + Math.imul(T, Z)) | 0),
              (n = ((n = (n + Math.imul(T, Y)) | 0) + Math.imul(L, Z)) | 0),
              (s = (s + Math.imul(L, Y)) | 0),
              (i = (i + Math.imul(C, Q)) | 0),
              (n = ((n = (n + Math.imul(C, ee)) | 0) + Math.imul(P, Q)) | 0),
              (s = (s + Math.imul(P, ee)) | 0),
              (i = (i + Math.imul(I, re)) | 0),
              (n = ((n = (n + Math.imul(I, ie)) | 0) + Math.imul(B, re)) | 0),
              (s = (s + Math.imul(B, ie)) | 0),
              (i = (i + Math.imul(k, se)) | 0),
              (n = ((n = (n + Math.imul(k, oe)) | 0) + Math.imul(E, se)) | 0),
              (s = (s + Math.imul(E, oe)) | 0),
              (i = (i + Math.imul(S, de)) | 0),
              (n = ((n = (n + Math.imul(S, fe)) | 0) + Math.imul(M, de)) | 0),
              (s = (s + Math.imul(M, fe)) | 0),
              (i = (i + Math.imul(v, ce)) | 0),
              (n = ((n = (n + Math.imul(v, ue)) | 0) + Math.imul(w, ce)) | 0),
              (s = (s + Math.imul(w, ue)) | 0);
            var Ee =
              (((f + (i = (i + Math.imul(_, be)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(_, pe)) | 0) + Math.imul(y, be)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(y, pe)) | 0) + (n >>> 13)) | 0) + (Ee >>> 26)) | 0),
              (Ee &= 67108863),
              (i = Math.imul(D, Z)),
              (n = ((n = Math.imul(D, Y)) + Math.imul(q, Z)) | 0),
              (s = Math.imul(q, Y)),
              (i = (i + Math.imul(T, Q)) | 0),
              (n = ((n = (n + Math.imul(T, ee)) | 0) + Math.imul(L, Q)) | 0),
              (s = (s + Math.imul(L, ee)) | 0),
              (i = (i + Math.imul(C, re)) | 0),
              (n = ((n = (n + Math.imul(C, ie)) | 0) + Math.imul(P, re)) | 0),
              (s = (s + Math.imul(P, ie)) | 0),
              (i = (i + Math.imul(I, se)) | 0),
              (n = ((n = (n + Math.imul(I, oe)) | 0) + Math.imul(B, se)) | 0),
              (s = (s + Math.imul(B, oe)) | 0),
              (i = (i + Math.imul(k, de)) | 0),
              (n = ((n = (n + Math.imul(k, fe)) | 0) + Math.imul(E, de)) | 0),
              (s = (s + Math.imul(E, fe)) | 0),
              (i = (i + Math.imul(S, ce)) | 0),
              (n = ((n = (n + Math.imul(S, ue)) | 0) + Math.imul(M, ce)) | 0),
              (s = (s + Math.imul(M, ue)) | 0);
            var Ae =
              (((f + (i = (i + Math.imul(v, be)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(v, pe)) | 0) + Math.imul(w, be)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(w, pe)) | 0) + (n >>> 13)) | 0) + (Ae >>> 26)) | 0),
              (Ae &= 67108863),
              (i = Math.imul(D, Q)),
              (n = ((n = Math.imul(D, ee)) + Math.imul(q, Q)) | 0),
              (s = Math.imul(q, ee)),
              (i = (i + Math.imul(T, re)) | 0),
              (n = ((n = (n + Math.imul(T, ie)) | 0) + Math.imul(L, re)) | 0),
              (s = (s + Math.imul(L, ie)) | 0),
              (i = (i + Math.imul(C, se)) | 0),
              (n = ((n = (n + Math.imul(C, oe)) | 0) + Math.imul(P, se)) | 0),
              (s = (s + Math.imul(P, oe)) | 0),
              (i = (i + Math.imul(I, de)) | 0),
              (n = ((n = (n + Math.imul(I, fe)) | 0) + Math.imul(B, de)) | 0),
              (s = (s + Math.imul(B, fe)) | 0),
              (i = (i + Math.imul(k, ce)) | 0),
              (n = ((n = (n + Math.imul(k, ue)) | 0) + Math.imul(E, ce)) | 0),
              (s = (s + Math.imul(E, ue)) | 0);
            var Ie =
              (((f + (i = (i + Math.imul(S, be)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(S, pe)) | 0) + Math.imul(M, be)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(M, pe)) | 0) + (n >>> 13)) | 0) + (Ie >>> 26)) | 0),
              (Ie &= 67108863),
              (i = Math.imul(D, re)),
              (n = ((n = Math.imul(D, ie)) + Math.imul(q, re)) | 0),
              (s = Math.imul(q, ie)),
              (i = (i + Math.imul(T, se)) | 0),
              (n = ((n = (n + Math.imul(T, oe)) | 0) + Math.imul(L, se)) | 0),
              (s = (s + Math.imul(L, oe)) | 0),
              (i = (i + Math.imul(C, de)) | 0),
              (n = ((n = (n + Math.imul(C, fe)) | 0) + Math.imul(P, de)) | 0),
              (s = (s + Math.imul(P, fe)) | 0),
              (i = (i + Math.imul(I, ce)) | 0),
              (n = ((n = (n + Math.imul(I, ue)) | 0) + Math.imul(B, ce)) | 0),
              (s = (s + Math.imul(B, ue)) | 0);
            var Be =
              (((f + (i = (i + Math.imul(k, be)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(k, pe)) | 0) + Math.imul(E, be)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(E, pe)) | 0) + (n >>> 13)) | 0) + (Be >>> 26)) | 0),
              (Be &= 67108863),
              (i = Math.imul(D, se)),
              (n = ((n = Math.imul(D, oe)) + Math.imul(q, se)) | 0),
              (s = Math.imul(q, oe)),
              (i = (i + Math.imul(T, de)) | 0),
              (n = ((n = (n + Math.imul(T, fe)) | 0) + Math.imul(L, de)) | 0),
              (s = (s + Math.imul(L, fe)) | 0),
              (i = (i + Math.imul(C, ce)) | 0),
              (n = ((n = (n + Math.imul(C, ue)) | 0) + Math.imul(P, ce)) | 0),
              (s = (s + Math.imul(P, ue)) | 0);
            var Re =
              (((f + (i = (i + Math.imul(I, be)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(I, pe)) | 0) + Math.imul(B, be)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(B, pe)) | 0) + (n >>> 13)) | 0) + (Re >>> 26)) | 0),
              (Re &= 67108863),
              (i = Math.imul(D, de)),
              (n = ((n = Math.imul(D, fe)) + Math.imul(q, de)) | 0),
              (s = Math.imul(q, fe)),
              (i = (i + Math.imul(T, ce)) | 0),
              (n = ((n = (n + Math.imul(T, ue)) | 0) + Math.imul(L, ce)) | 0),
              (s = (s + Math.imul(L, ue)) | 0);
            var Ce =
              (((f + (i = (i + Math.imul(C, be)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(C, pe)) | 0) + Math.imul(P, be)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(P, pe)) | 0) + (n >>> 13)) | 0) + (Ce >>> 26)) | 0),
              (Ce &= 67108863),
              (i = Math.imul(D, ce)),
              (n = ((n = Math.imul(D, ue)) + Math.imul(q, ce)) | 0),
              (s = Math.imul(q, ue));
            var Pe =
              (((f + (i = (i + Math.imul(T, be)) | 0)) | 0) +
                ((8191 &
                  (n = ((n = (n + Math.imul(T, pe)) | 0) + Math.imul(L, be)) | 0)) <<
                  13)) |
              0;
            (f =
              ((((s = (s + Math.imul(L, pe)) | 0) + (n >>> 13)) | 0) + (Pe >>> 26)) | 0),
              (Pe &= 67108863);
            var Oe =
              (((f + (i = Math.imul(D, be))) | 0) +
                ((8191 & (n = ((n = Math.imul(D, pe)) + Math.imul(q, be)) | 0)) << 13)) |
              0;
            return (
              (f = ((((s = Math.imul(q, pe)) + (n >>> 13)) | 0) + (Oe >>> 26)) | 0),
              (Oe &= 67108863),
              (d[0] = me),
              (d[1] = _e),
              (d[2] = ye),
              (d[3] = ge),
              (d[4] = ve),
              (d[5] = we),
              (d[6] = je),
              (d[7] = Se),
              (d[8] = Me),
              (d[9] = xe),
              (d[10] = ke),
              (d[11] = Ee),
              (d[12] = Ae),
              (d[13] = Ie),
              (d[14] = Be),
              (d[15] = Re),
              (d[16] = Ce),
              (d[17] = Pe),
              (d[18] = Oe),
              0 !== f && ((d[19] = f), r.length++),
              r
            );
          };
          function b(e, t, r) {
            return new p().mulp(e, t, r);
          }
          function p(e, t) {
            (this.x = e), (this.y = t);
          }
          Math.imul || (l = u),
            (s.prototype.mulTo = function(e, t) {
              var r = this.length + e.length;
              return 10 === this.length && 10 === e.length
                ? l(this, e, t)
                : r < 63
                ? u(this, e, t)
                : r < 1024
                ? (function(e, t, r) {
                    (r.negative = t.negative ^ e.negative),
                      (r.length = e.length + t.length);
                    for (var i = 0, n = 0, s = 0; s < r.length - 1; s++) {
                      var o = n;
                      n = 0;
                      for (
                        var a = 67108863 & i,
                          d = Math.min(s, t.length - 1),
                          f = Math.max(0, s - e.length + 1);
                        f <= d;
                        f++
                      ) {
                        var h = s - f,
                          c = (0 | e.words[h]) * (0 | t.words[f]),
                          u = 67108863 & c;
                        (a = 67108863 & (u = (u + a) | 0)),
                          (n +=
                            (o =
                              ((o = (o + ((c / 67108864) | 0)) | 0) + (u >>> 26)) | 0) >>>
                            26),
                          (o &= 67108863);
                      }
                      (r.words[s] = a), (i = o), (o = n);
                    }
                    return 0 !== i ? (r.words[s] = i) : r.length--, r.strip();
                  })(this, e, t)
                : b(this, e, t);
            }),
            (p.prototype.makeRBT = function(e) {
              for (
                var t = new Array(e), r = s.prototype._countBits(e) - 1, i = 0;
                i < e;
                i++
              )
                t[i] = this.revBin(i, r, e);
              return t;
            }),
            (p.prototype.revBin = function(e, t, r) {
              if (0 === e || e === r - 1) return e;
              for (var i = 0, n = 0; n < t; n++) (i |= (1 & e) << (t - n - 1)), (e >>= 1);
              return i;
            }),
            (p.prototype.permute = function(e, t, r, i, n, s) {
              for (var o = 0; o < s; o++) (i[o] = t[e[o]]), (n[o] = r[e[o]]);
            }),
            (p.prototype.transform = function(e, t, r, i, n, s) {
              this.permute(s, e, t, r, i, n);
              for (var o = 1; o < n; o <<= 1)
                for (
                  var a = o << 1,
                    d = Math.cos((2 * Math.PI) / a),
                    f = Math.sin((2 * Math.PI) / a),
                    h = 0;
                  h < n;
                  h += a
                )
                  for (var c = d, u = f, l = 0; l < o; l++) {
                    var b = r[h + l],
                      p = i[h + l],
                      m = r[h + l + o],
                      _ = i[h + l + o],
                      y = c * m - u * _;
                    (_ = c * _ + u * m),
                      (m = y),
                      (r[h + l] = b + m),
                      (i[h + l] = p + _),
                      (r[h + l + o] = b - m),
                      (i[h + l + o] = p - _),
                      l !== a && ((y = d * c - f * u), (u = d * u + f * c), (c = y));
                  }
            }),
            (p.prototype.guessLen13b = function(e, t) {
              var r = 1 | Math.max(t, e),
                i = 1 & r,
                n = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (p.prototype.conjugate = function(e, t, r) {
              if (!(r <= 1))
                for (var i = 0; i < r / 2; i++) {
                  var n = e[i];
                  (e[i] = e[r - i - 1]),
                    (e[r - i - 1] = n),
                    (n = t[i]),
                    (t[i] = -t[r - i - 1]),
                    (t[r - i - 1] = -n);
                }
            }),
            (p.prototype.normalize13b = function(e, t) {
              for (var r = 0, i = 0; i < t / 2; i++) {
                var n =
                  8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + r;
                (e[i] = 67108863 & n), (r = n < 67108864 ? 0 : (n / 67108864) | 0);
              }
              return e;
            }),
            (p.prototype.convert13b = function(e, t, r, n) {
              for (var s = 0, o = 0; o < t; o++)
                (s += 0 | e[o]),
                  (r[2 * o] = 8191 & s),
                  (s >>>= 13),
                  (r[2 * o + 1] = 8191 & s),
                  (s >>>= 13);
              for (o = 2 * t; o < n; ++o) r[o] = 0;
              i(0 === s), i(0 == (-8192 & s));
            }),
            (p.prototype.stub = function(e) {
              for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
              return t;
            }),
            (p.prototype.mulp = function(e, t, r) {
              var i = 2 * this.guessLen13b(e.length, t.length),
                n = this.makeRBT(i),
                s = this.stub(i),
                o = new Array(i),
                a = new Array(i),
                d = new Array(i),
                f = new Array(i),
                h = new Array(i),
                c = new Array(i),
                u = r.words;
              (u.length = i),
                this.convert13b(e.words, e.length, o, i),
                this.convert13b(t.words, t.length, f, i),
                this.transform(o, s, a, d, i, n),
                this.transform(f, s, h, c, i, n);
              for (var l = 0; l < i; l++) {
                var b = a[l] * h[l] - d[l] * c[l];
                (d[l] = a[l] * c[l] + d[l] * h[l]), (a[l] = b);
              }
              return (
                this.conjugate(a, d, i),
                this.transform(a, d, u, s, i, n),
                this.conjugate(u, s, i),
                this.normalize13b(u, i),
                (r.negative = e.negative ^ t.negative),
                (r.length = e.length + t.length),
                r.strip()
              );
            }),
            (s.prototype.mul = function(e) {
              var t = new s(null);
              return (t.words = new Array(this.length + e.length)), this.mulTo(e, t);
            }),
            (s.prototype.mulf = function(e) {
              var t = new s(null);
              return (t.words = new Array(this.length + e.length)), b(this, e, t);
            }),
            (s.prototype.imul = function(e) {
              return this.clone().mulTo(e, this);
            }),
            (s.prototype.imuln = function(e) {
              i('number' == typeof e), i(e < 67108864);
              for (var t = 0, r = 0; r < this.length; r++) {
                var n = (0 | this.words[r]) * e,
                  s = (67108863 & n) + (67108863 & t);
                (t >>= 26),
                  (t += (n / 67108864) | 0),
                  (t += s >>> 26),
                  (this.words[r] = 67108863 & s);
              }
              return 0 !== t && ((this.words[r] = t), this.length++), this;
            }),
            (s.prototype.muln = function(e) {
              return this.clone().imuln(e);
            }),
            (s.prototype.sqr = function() {
              return this.mul(this);
            }),
            (s.prototype.isqr = function() {
              return this.imul(this.clone());
            }),
            (s.prototype.pow = function(e) {
              var t = (function(e) {
                for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                  var i = (r / 26) | 0,
                    n = r % 26;
                  t[r] = (e.words[i] & (1 << n)) >>> n;
                }
                return t;
              })(e);
              if (0 === t.length) return new s(1);
              for (var r = this, i = 0; i < t.length && 0 === t[i]; i++, r = r.sqr());
              if (++i < t.length)
                for (var n = r.sqr(); i < t.length; i++, n = n.sqr())
                  0 !== t[i] && (r = r.mul(n));
              return r;
            }),
            (s.prototype.iushln = function(e) {
              i('number' == typeof e && e >= 0);
              var t,
                r = e % 26,
                n = (e - r) / 26,
                s = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var o = 0;
                for (t = 0; t < this.length; t++) {
                  var a = this.words[t] & s,
                    d = ((0 | this.words[t]) - a) << r;
                  (this.words[t] = d | o), (o = a >>> (26 - r));
                }
                o && ((this.words[t] = o), this.length++);
              }
              if (0 !== n) {
                for (t = this.length - 1; t >= 0; t--) this.words[t + n] = this.words[t];
                for (t = 0; t < n; t++) this.words[t] = 0;
                this.length += n;
              }
              return this.strip();
            }),
            (s.prototype.ishln = function(e) {
              return i(0 === this.negative), this.iushln(e);
            }),
            (s.prototype.iushrn = function(e, t, r) {
              var n;
              i('number' == typeof e && e >= 0), (n = t ? (t - (t % 26)) / 26 : 0);
              var s = e % 26,
                o = Math.min((e - s) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> s) << s),
                d = r;
              if (((n -= o), (n = Math.max(0, n)), d)) {
                for (var f = 0; f < o; f++) d.words[f] = this.words[f];
                d.length = o;
              }
              if (0 === o);
              else if (this.length > o)
                for (this.length -= o, f = 0; f < this.length; f++)
                  this.words[f] = this.words[f + o];
              else (this.words[0] = 0), (this.length = 1);
              var h = 0;
              for (f = this.length - 1; f >= 0 && (0 !== h || f >= n); f--) {
                var c = 0 | this.words[f];
                (this.words[f] = (h << (26 - s)) | (c >>> s)), (h = c & a);
              }
              return (
                d && 0 !== h && (d.words[d.length++] = h),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              );
            }),
            (s.prototype.ishrn = function(e, t, r) {
              return i(0 === this.negative), this.iushrn(e, t, r);
            }),
            (s.prototype.shln = function(e) {
              return this.clone().ishln(e);
            }),
            (s.prototype.ushln = function(e) {
              return this.clone().iushln(e);
            }),
            (s.prototype.shrn = function(e) {
              return this.clone().ishrn(e);
            }),
            (s.prototype.ushrn = function(e) {
              return this.clone().iushrn(e);
            }),
            (s.prototype.testn = function(e) {
              i('number' == typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26,
                n = 1 << t;
              return !(this.length <= r) && !!(this.words[r] & n);
            }),
            (s.prototype.imaskn = function(e) {
              i('number' == typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26;
              if (
                (i(0 === this.negative, 'imaskn works only with positive numbers'),
                this.length <= r)
              )
                return this;
              if ((0 !== t && r++, (this.length = Math.min(r, this.length)), 0 !== t)) {
                var n = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= n;
              }
              return this.strip();
            }),
            (s.prototype.maskn = function(e) {
              return this.clone().imaskn(e);
            }),
            (s.prototype.iaddn = function(e) {
              return (
                i('number' == typeof e),
                i(e < 67108864),
                e < 0
                  ? this.isubn(-e)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) < e
                    ? ((this.words[0] = e - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0), this.isubn(e), (this.negative = 1), this)
                  : this._iaddn(e)
              );
            }),
            (s.prototype._iaddn = function(e) {
              this.words[0] += e;
              for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                (this.words[t] -= 67108864),
                  t === this.length - 1 ? (this.words[t + 1] = 1) : this.words[t + 1]++;
              return (this.length = Math.max(this.length, t + 1)), this;
            }),
            (s.prototype.isubn = function(e) {
              if ((i('number' == typeof e), i(e < 67108864), e < 0))
                return this.iaddn(-e);
              if (0 !== this.negative)
                return (this.negative = 0), this.iaddn(e), (this.negative = 1), this;
              if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var t = 0; t < this.length && this.words[t] < 0; t++)
                  (this.words[t] += 67108864), (this.words[t + 1] -= 1);
              return this.strip();
            }),
            (s.prototype.addn = function(e) {
              return this.clone().iaddn(e);
            }),
            (s.prototype.subn = function(e) {
              return this.clone().isubn(e);
            }),
            (s.prototype.iabs = function() {
              return (this.negative = 0), this;
            }),
            (s.prototype.abs = function() {
              return this.clone().iabs();
            }),
            (s.prototype._ishlnsubmul = function(e, t, r) {
              var n,
                s,
                o = e.length + r;
              this._expand(o);
              var a = 0;
              for (n = 0; n < e.length; n++) {
                s = (0 | this.words[n + r]) + a;
                var d = (0 | e.words[n]) * t;
                (a = ((s -= 67108863 & d) >> 26) - ((d / 67108864) | 0)),
                  (this.words[n + r] = 67108863 & s);
              }
              for (; n < this.length - r; n++)
                (a = (s = (0 | this.words[n + r]) + a) >> 26),
                  (this.words[n + r] = 67108863 & s);
              if (0 === a) return this.strip();
              for (i(-1 === a), a = 0, n = 0; n < this.length; n++)
                (a = (s = -(0 | this.words[n]) + a) >> 26),
                  (this.words[n] = 67108863 & s);
              return (this.negative = 1), this.strip();
            }),
            (s.prototype._wordDiv = function(e, t) {
              var r = (this.length, e.length),
                i = this.clone(),
                n = e,
                o = 0 | n.words[n.length - 1];
              0 !== (r = 26 - this._countBits(o)) &&
                ((n = n.ushln(r)), i.iushln(r), (o = 0 | n.words[n.length - 1]));
              var a,
                d = i.length - n.length;
              if ('mod' !== t) {
                ((a = new s(null)).length = d + 1), (a.words = new Array(a.length));
                for (var f = 0; f < a.length; f++) a.words[f] = 0;
              }
              var h = i.clone()._ishlnsubmul(n, 1, d);
              0 === h.negative && ((i = h), a && (a.words[d] = 1));
              for (var c = d - 1; c >= 0; c--) {
                var u =
                  67108864 * (0 | i.words[n.length + c]) +
                  (0 | i.words[n.length + c - 1]);
                for (
                  u = Math.min((u / o) | 0, 67108863), i._ishlnsubmul(n, u, c);
                  0 !== i.negative;

                )
                  u--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, c),
                    i.isZero() || (i.negative ^= 1);
                a && (a.words[c] = u);
              }
              return (
                a && a.strip(),
                i.strip(),
                'div' !== t && 0 !== r && i.iushrn(r),
                { div: a || null, mod: i }
              );
            }),
            (s.prototype.divmod = function(e, t, r) {
              return (
                i(!e.isZero()),
                this.isZero()
                  ? { div: new s(0), mod: new s(0) }
                  : 0 !== this.negative && 0 === e.negative
                  ? ((a = this.neg().divmod(e, t)),
                    'mod' !== t && (n = a.div.neg()),
                    'div' !== t &&
                      ((o = a.mod.neg()), r && 0 !== o.negative && o.iadd(e)),
                    { div: n, mod: o })
                  : 0 === this.negative && 0 !== e.negative
                  ? ((a = this.divmod(e.neg(), t)),
                    'mod' !== t && (n = a.div.neg()),
                    { div: n, mod: a.mod })
                  : 0 != (this.negative & e.negative)
                  ? ((a = this.neg().divmod(e.neg(), t)),
                    'div' !== t &&
                      ((o = a.mod.neg()), r && 0 !== o.negative && o.isub(e)),
                    { div: a.div, mod: o })
                  : e.length > this.length || this.cmp(e) < 0
                  ? { div: new s(0), mod: this }
                  : 1 === e.length
                  ? 'div' === t
                    ? { div: this.divn(e.words[0]), mod: null }
                    : 'mod' === t
                    ? { div: null, mod: new s(this.modn(e.words[0])) }
                    : { div: this.divn(e.words[0]), mod: new s(this.modn(e.words[0])) }
                  : this._wordDiv(e, t)
              );
              var n, o, a;
            }),
            (s.prototype.div = function(e) {
              return this.divmod(e, 'div', !1).div;
            }),
            (s.prototype.mod = function(e) {
              return this.divmod(e, 'mod', !1).mod;
            }),
            (s.prototype.umod = function(e) {
              return this.divmod(e, 'mod', !0).mod;
            }),
            (s.prototype.divRound = function(e) {
              var t = this.divmod(e);
              if (t.mod.isZero()) return t.div;
              var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                i = e.ushrn(1),
                n = e.andln(1),
                s = r.cmp(i);
              return s < 0 || (1 === n && 0 === s)
                ? t.div
                : 0 !== t.div.negative
                ? t.div.isubn(1)
                : t.div.iaddn(1);
            }),
            (s.prototype.modn = function(e) {
              i(e <= 67108863);
              for (var t = (1 << 26) % e, r = 0, n = this.length - 1; n >= 0; n--)
                r = (t * r + (0 | this.words[n])) % e;
              return r;
            }),
            (s.prototype.idivn = function(e) {
              i(e <= 67108863);
              for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var n = (0 | this.words[r]) + 67108864 * t;
                (this.words[r] = (n / e) | 0), (t = n % e);
              }
              return this.strip();
            }),
            (s.prototype.divn = function(e) {
              return this.clone().idivn(e);
            }),
            (s.prototype.egcd = function(e) {
              i(0 === e.negative), i(!e.isZero());
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              for (
                var n = new s(1), o = new s(0), a = new s(0), d = new s(1), f = 0;
                t.isEven() && r.isEven();

              )
                t.iushrn(1), r.iushrn(1), ++f;
              for (var h = r.clone(), c = t.clone(); !t.isZero(); ) {
                for (var u = 0, l = 1; 0 == (t.words[0] & l) && u < 26; ++u, l <<= 1);
                if (u > 0)
                  for (t.iushrn(u); u-- > 0; )
                    (n.isOdd() || o.isOdd()) && (n.iadd(h), o.isub(c)),
                      n.iushrn(1),
                      o.iushrn(1);
                for (var b = 0, p = 1; 0 == (r.words[0] & p) && b < 26; ++b, p <<= 1);
                if (b > 0)
                  for (r.iushrn(b); b-- > 0; )
                    (a.isOdd() || d.isOdd()) && (a.iadd(h), d.isub(c)),
                      a.iushrn(1),
                      d.iushrn(1);
                t.cmp(r) >= 0
                  ? (t.isub(r), n.isub(a), o.isub(d))
                  : (r.isub(t), a.isub(n), d.isub(o));
              }
              return { a: a, b: d, gcd: r.iushln(f) };
            }),
            (s.prototype._invmp = function(e) {
              i(0 === e.negative), i(!e.isZero());
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              for (
                var n, o = new s(1), a = new s(0), d = r.clone();
                t.cmpn(1) > 0 && r.cmpn(1) > 0;

              ) {
                for (var f = 0, h = 1; 0 == (t.words[0] & h) && f < 26; ++f, h <<= 1);
                if (f > 0)
                  for (t.iushrn(f); f-- > 0; ) o.isOdd() && o.iadd(d), o.iushrn(1);
                for (var c = 0, u = 1; 0 == (r.words[0] & u) && c < 26; ++c, u <<= 1);
                if (c > 0)
                  for (r.iushrn(c); c-- > 0; ) a.isOdd() && a.iadd(d), a.iushrn(1);
                t.cmp(r) >= 0 ? (t.isub(r), o.isub(a)) : (r.isub(t), a.isub(o));
              }
              return (n = 0 === t.cmpn(1) ? o : a).cmpn(0) < 0 && n.iadd(e), n;
            }),
            (s.prototype.gcd = function(e) {
              if (this.isZero()) return e.abs();
              if (e.isZero()) return this.abs();
              var t = this.clone(),
                r = e.clone();
              (t.negative = 0), (r.negative = 0);
              for (var i = 0; t.isEven() && r.isEven(); i++) t.iushrn(1), r.iushrn(1);
              for (;;) {
                for (; t.isEven(); ) t.iushrn(1);
                for (; r.isEven(); ) r.iushrn(1);
                var n = t.cmp(r);
                if (n < 0) {
                  var s = t;
                  (t = r), (r = s);
                } else if (0 === n || 0 === r.cmpn(1)) break;
                t.isub(r);
              }
              return r.iushln(i);
            }),
            (s.prototype.invm = function(e) {
              return this.egcd(e).a.umod(e);
            }),
            (s.prototype.isEven = function() {
              return 0 == (1 & this.words[0]);
            }),
            (s.prototype.isOdd = function() {
              return 1 == (1 & this.words[0]);
            }),
            (s.prototype.andln = function(e) {
              return this.words[0] & e;
            }),
            (s.prototype.bincn = function(e) {
              i('number' == typeof e);
              var t = e % 26,
                r = (e - t) / 26,
                n = 1 << t;
              if (this.length <= r)
                return this._expand(r + 1), (this.words[r] |= n), this;
              for (var s = n, o = r; 0 !== s && o < this.length; o++) {
                var a = 0 | this.words[o];
                (s = (a += s) >>> 26), (a &= 67108863), (this.words[o] = a);
              }
              return 0 !== s && ((this.words[o] = s), this.length++), this;
            }),
            (s.prototype.isZero = function() {
              return 1 === this.length && 0 === this.words[0];
            }),
            (s.prototype.cmpn = function(e) {
              var t,
                r = e < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this.strip(), this.length > 1)) t = 1;
              else {
                r && (e = -e), i(e <= 67108863, 'Number is too big');
                var n = 0 | this.words[0];
                t = n === e ? 0 : n < e ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (s.prototype.cmp = function(e) {
              if (0 !== this.negative && 0 === e.negative) return -1;
              if (0 === this.negative && 0 !== e.negative) return 1;
              var t = this.ucmp(e);
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (s.prototype.ucmp = function(e) {
              if (this.length > e.length) return 1;
              if (this.length < e.length) return -1;
              for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var i = 0 | this.words[r],
                  n = 0 | e.words[r];
                if (i !== n) {
                  i < n ? (t = -1) : i > n && (t = 1);
                  break;
                }
              }
              return t;
            }),
            (s.prototype.gtn = function(e) {
              return 1 === this.cmpn(e);
            }),
            (s.prototype.gt = function(e) {
              return 1 === this.cmp(e);
            }),
            (s.prototype.gten = function(e) {
              return this.cmpn(e) >= 0;
            }),
            (s.prototype.gte = function(e) {
              return this.cmp(e) >= 0;
            }),
            (s.prototype.ltn = function(e) {
              return -1 === this.cmpn(e);
            }),
            (s.prototype.lt = function(e) {
              return -1 === this.cmp(e);
            }),
            (s.prototype.lten = function(e) {
              return this.cmpn(e) <= 0;
            }),
            (s.prototype.lte = function(e) {
              return this.cmp(e) <= 0;
            }),
            (s.prototype.eqn = function(e) {
              return 0 === this.cmpn(e);
            }),
            (s.prototype.eq = function(e) {
              return 0 === this.cmp(e);
            }),
            (s.red = function(e) {
              return new j(e);
            }),
            (s.prototype.toRed = function(e) {
              return (
                i(!this.red, 'Already a number in reduction context'),
                i(0 === this.negative, 'red works only with positives'),
                e.convertTo(this)._forceRed(e)
              );
            }),
            (s.prototype.fromRed = function() {
              return (
                i(this.red, 'fromRed works only with numbers in reduction context'),
                this.red.convertFrom(this)
              );
            }),
            (s.prototype._forceRed = function(e) {
              return (this.red = e), this;
            }),
            (s.prototype.forceRed = function(e) {
              return (
                i(!this.red, 'Already a number in reduction context'), this._forceRed(e)
              );
            }),
            (s.prototype.redAdd = function(e) {
              return (
                i(this.red, 'redAdd works only with red numbers'), this.red.add(this, e)
              );
            }),
            (s.prototype.redIAdd = function(e) {
              return (
                i(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, e)
              );
            }),
            (s.prototype.redSub = function(e) {
              return (
                i(this.red, 'redSub works only with red numbers'), this.red.sub(this, e)
              );
            }),
            (s.prototype.redISub = function(e) {
              return (
                i(this.red, 'redISub works only with red numbers'), this.red.isub(this, e)
              );
            }),
            (s.prototype.redShl = function(e) {
              return (
                i(this.red, 'redShl works only with red numbers'), this.red.shl(this, e)
              );
            }),
            (s.prototype.redMul = function(e) {
              return (
                i(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              );
            }),
            (s.prototype.redIMul = function(e) {
              return (
                i(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, e),
                this.red.imul(this, e)
              );
            }),
            (s.prototype.redSqr = function() {
              return (
                i(this.red, 'redSqr works only with red numbers'),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (s.prototype.redISqr = function() {
              return (
                i(this.red, 'redISqr works only with red numbers'),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (s.prototype.redSqrt = function() {
              return (
                i(this.red, 'redSqrt works only with red numbers'),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (s.prototype.redInvm = function() {
              return (
                i(this.red, 'redInvm works only with red numbers'),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (s.prototype.redNeg = function() {
              return (
                i(this.red, 'redNeg works only with red numbers'),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (s.prototype.redPow = function(e) {
              return (
                i(this.red && !e.red, 'redPow(normalNum)'),
                this.red._verify1(this),
                this.red.pow(this, e)
              );
            });
          var m = { k256: null, p224: null, p192: null, p25519: null };
          function _(e, t) {
            (this.name = e),
              (this.p = new s(t, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new s(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function y() {
            _.call(
              this,
              'k256',
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
            );
          }
          function g() {
            _.call(
              this,
              'p224',
              'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
            );
          }
          function v() {
            _.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
          }
          function w() {
            _.call(
              this,
              '25519',
              '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
            );
          }
          function j(e) {
            if ('string' == typeof e) {
              var t = s._prime(e);
              (this.m = t.p), (this.prime = t);
            } else
              i(e.gtn(1), 'modulus must be greater than 1'),
                (this.m = e),
                (this.prime = null);
          }
          function S(e) {
            j.call(this, e),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new s(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv
                .mul(this.r)
                .isubn(1)
                .div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (_.prototype._tmp = function() {
            var e = new s(null);
            return (e.words = new Array(Math.ceil(this.n / 13))), e;
          }),
            (_.prototype.ireduce = function(e) {
              var t,
                r = e;
              do {
                this.split(r, this.tmp),
                  (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
              } while (t > this.n);
              var i = t < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === i
                  ? ((r.words[0] = 0), (r.length = 1))
                  : i > 0
                  ? r.isub(this.p)
                  : r.strip(),
                r
              );
            }),
            (_.prototype.split = function(e, t) {
              e.iushrn(this.n, 0, t);
            }),
            (_.prototype.imulK = function(e) {
              return e.imul(this.k);
            }),
            n(y, _),
            (y.prototype.split = function(e, t) {
              for (var r = Math.min(e.length, 9), i = 0; i < r; i++)
                t.words[i] = e.words[i];
              if (((t.length = r), e.length <= 9))
                return (e.words[0] = 0), void (e.length = 1);
              var n = e.words[9];
              for (t.words[t.length++] = 4194303 & n, i = 10; i < e.length; i++) {
                var s = 0 | e.words[i];
                (e.words[i - 10] = ((4194303 & s) << 4) | (n >>> 22)), (n = s);
              }
              (n >>>= 22),
                (e.words[i - 10] = n),
                0 === n && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
            }),
            (y.prototype.imulK = function(e) {
              (e.words[e.length] = 0), (e.words[e.length + 1] = 0), (e.length += 2);
              for (var t = 0, r = 0; r < e.length; r++) {
                var i = 0 | e.words[r];
                (t += 977 * i),
                  (e.words[r] = 67108863 & t),
                  (t = 64 * i + ((t / 67108864) | 0));
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              );
            }),
            n(g, _),
            n(v, _),
            n(w, _),
            (w.prototype.imulK = function(e) {
              for (var t = 0, r = 0; r < e.length; r++) {
                var i = 19 * (0 | e.words[r]) + t,
                  n = 67108863 & i;
                (i >>>= 26), (e.words[r] = n), (t = i);
              }
              return 0 !== t && (e.words[e.length++] = t), e;
            }),
            (s._prime = function(e) {
              if (m[e]) return m[e];
              var t;
              if ('k256' === e) t = new y();
              else if ('p224' === e) t = new g();
              else if ('p192' === e) t = new v();
              else {
                if ('p25519' !== e) throw new Error('Unknown prime ' + e);
                t = new w();
              }
              return (m[e] = t), t;
            }),
            (j.prototype._verify1 = function(e) {
              i(0 === e.negative, 'red works only with positives'),
                i(e.red, 'red works only with red numbers');
            }),
            (j.prototype._verify2 = function(e, t) {
              i(0 == (e.negative | t.negative), 'red works only with positives'),
                i(e.red && e.red === t.red, 'red works only with red numbers');
            }),
            (j.prototype.imod = function(e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : e.umod(this.m)._forceRed(this);
            }),
            (j.prototype.neg = function(e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
            }),
            (j.prototype.add = function(e, t) {
              this._verify2(e, t);
              var r = e.add(t);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
            }),
            (j.prototype.iadd = function(e, t) {
              this._verify2(e, t);
              var r = e.iadd(t);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r;
            }),
            (j.prototype.sub = function(e, t) {
              this._verify2(e, t);
              var r = e.sub(t);
              return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
            }),
            (j.prototype.isub = function(e, t) {
              this._verify2(e, t);
              var r = e.isub(t);
              return r.cmpn(0) < 0 && r.iadd(this.m), r;
            }),
            (j.prototype.shl = function(e, t) {
              return this._verify1(e), this.imod(e.ushln(t));
            }),
            (j.prototype.imul = function(e, t) {
              return this._verify2(e, t), this.imod(e.imul(t));
            }),
            (j.prototype.mul = function(e, t) {
              return this._verify2(e, t), this.imod(e.mul(t));
            }),
            (j.prototype.isqr = function(e) {
              return this.imul(e, e.clone());
            }),
            (j.prototype.sqr = function(e) {
              return this.mul(e, e);
            }),
            (j.prototype.sqrt = function(e) {
              if (e.isZero()) return e.clone();
              var t = this.m.andln(3);
              if ((i(t % 2 == 1), 3 === t)) {
                var r = this.m.add(new s(1)).iushrn(2);
                return this.pow(e, r);
              }
              for (var n = this.m.subn(1), o = 0; !n.isZero() && 0 === n.andln(1); )
                o++, n.iushrn(1);
              i(!n.isZero());
              var a = new s(1).toRed(this),
                d = a.redNeg(),
                f = this.m.subn(1).iushrn(1),
                h = this.m.bitLength();
              for (h = new s(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(d); )
                h.redIAdd(d);
              for (
                var c = this.pow(h, n),
                  u = this.pow(e, n.addn(1).iushrn(1)),
                  l = this.pow(e, n),
                  b = o;
                0 !== l.cmp(a);

              ) {
                for (var p = l, m = 0; 0 !== p.cmp(a); m++) p = p.redSqr();
                i(m < b);
                var _ = this.pow(c, new s(1).iushln(b - m - 1));
                (u = u.redMul(_)), (c = _.redSqr()), (l = l.redMul(c)), (b = m);
              }
              return u;
            }),
            (j.prototype.invm = function(e) {
              var t = e._invmp(this.m);
              return 0 !== t.negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (j.prototype.pow = function(e, t) {
              if (t.isZero()) return new s(1).toRed(this);
              if (0 === t.cmpn(1)) return e.clone();
              var r = new Array(16);
              (r[0] = new s(1).toRed(this)), (r[1] = e);
              for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], e);
              var n = r[0],
                o = 0,
                a = 0,
                d = t.bitLength() % 26;
              for (0 === d && (d = 26), i = t.length - 1; i >= 0; i--) {
                for (var f = t.words[i], h = d - 1; h >= 0; h--) {
                  var c = (f >> h) & 1;
                  n !== r[0] && (n = this.sqr(n)),
                    0 !== c || 0 !== o
                      ? ((o <<= 1),
                        (o |= c),
                        (4 === ++a || (0 === i && 0 === h)) &&
                          ((n = this.mul(n, r[o])), (a = 0), (o = 0)))
                      : (a = 0);
                }
                d = 26;
              }
              return n;
            }),
            (j.prototype.convertTo = function(e) {
              var t = e.umod(this.m);
              return t === e ? t.clone() : t;
            }),
            (j.prototype.convertFrom = function(e) {
              var t = e.clone();
              return (t.red = null), t;
            }),
            (s.mont = function(e) {
              return new S(e);
            }),
            n(S, j),
            (S.prototype.convertTo = function(e) {
              return this.imod(e.ushln(this.shift));
            }),
            (S.prototype.convertFrom = function(e) {
              var t = this.imod(e.mul(this.rinv));
              return (t.red = null), t;
            }),
            (S.prototype.imul = function(e, t) {
              if (e.isZero() || t.isZero()) return (e.words[0] = 0), (e.length = 1), e;
              var r = e.imul(t),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (S.prototype.mul = function(e, t) {
              if (e.isZero() || t.isZero()) return new s(0)._forceRed(this);
              var r = e.mul(t),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (S.prototype.invm = function(e) {
              return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })(e, this);
      }.call(this, r('../../node_modules/webpack/buildin/module.js')(e)));
    },
    '../../node_modules/brorand/index.js': function(e, t, r) {
      var i;
      function n(e) {
        this.rand = e;
      }
      if (
        ((e.exports = function(e) {
          return i || (i = new n(null)), i.generate(e);
        }),
        (e.exports.Rand = n),
        (n.prototype.generate = function(e) {
          return this._rand(e);
        }),
        (n.prototype._rand = function(e) {
          if (this.rand.getBytes) return this.rand.getBytes(e);
          for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
            t[r] = this.rand.getByte();
          return t;
        }),
        'object' == typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (n.prototype._rand = function(e) {
              var t = new Uint8Array(e);
              return self.crypto.getRandomValues(t), t;
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (n.prototype._rand = function(e) {
              var t = new Uint8Array(e);
              return self.msCrypto.getRandomValues(t), t;
            })
          : 'object' == typeof window &&
            (n.prototype._rand = function() {
              throw new Error('Not implemented yet');
            });
      else
        try {
          var s = r(5);
          if ('function' != typeof s.randomBytes) throw new Error('Not supported');
          n.prototype._rand = function(e) {
            return s.randomBytes(e);
          };
        } catch (e) {}
    },
    '../../node_modules/browserify-aes/aes.js': function(e, t, r) {
      var i = r('../../node_modules/safe-buffer/index.js').Buffer;
      function n(e) {
        i.isBuffer(e) || (e = i.from(e));
        for (var t = (e.length / 4) | 0, r = new Array(t), n = 0; n < t; n++)
          r[n] = e.readUInt32BE(4 * n);
        return r;
      }
      function s(e) {
        for (; 0 < e.length; e++) e[0] = 0;
      }
      function o(e, t, r, i, n) {
        for (
          var s,
            o,
            a,
            d,
            f = r[0],
            h = r[1],
            c = r[2],
            u = r[3],
            l = e[0] ^ t[0],
            b = e[1] ^ t[1],
            p = e[2] ^ t[2],
            m = e[3] ^ t[3],
            _ = 4,
            y = 1;
          y < n;
          y++
        )
          (s =
            f[l >>> 24] ^ h[(b >>> 16) & 255] ^ c[(p >>> 8) & 255] ^ u[255 & m] ^ t[_++]),
            (o =
              f[b >>> 24] ^
              h[(p >>> 16) & 255] ^
              c[(m >>> 8) & 255] ^
              u[255 & l] ^
              t[_++]),
            (a =
              f[p >>> 24] ^
              h[(m >>> 16) & 255] ^
              c[(l >>> 8) & 255] ^
              u[255 & b] ^
              t[_++]),
            (d =
              f[m >>> 24] ^
              h[(l >>> 16) & 255] ^
              c[(b >>> 8) & 255] ^
              u[255 & p] ^
              t[_++]),
            (l = s),
            (b = o),
            (p = a),
            (m = d);
        return (
          (s =
            ((i[l >>> 24] << 24) |
              (i[(b >>> 16) & 255] << 16) |
              (i[(p >>> 8) & 255] << 8) |
              i[255 & m]) ^
            t[_++]),
          (o =
            ((i[b >>> 24] << 24) |
              (i[(p >>> 16) & 255] << 16) |
              (i[(m >>> 8) & 255] << 8) |
              i[255 & l]) ^
            t[_++]),
          (a =
            ((i[p >>> 24] << 24) |
              (i[(m >>> 16) & 255] << 16) |
              (i[(l >>> 8) & 255] << 8) |
              i[255 & b]) ^
            t[_++]),
          (d =
            ((i[m >>> 24] << 24) |
              (i[(l >>> 16) & 255] << 16) |
              (i[(b >>> 8) & 255] << 8) |
              i[255 & p]) ^
            t[_++]),
          [(s >>>= 0), (o >>>= 0), (a >>>= 0), (d >>>= 0)]
        );
      }
      var a = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = (function() {
          for (var e = new Array(256), t = 0; t < 256; t++)
            e[t] = t < 128 ? t << 1 : (t << 1) ^ 283;
          for (
            var r = [],
              i = [],
              n = [[], [], [], []],
              s = [[], [], [], []],
              o = 0,
              a = 0,
              d = 0;
            d < 256;
            ++d
          ) {
            var f = a ^ (a << 1) ^ (a << 2) ^ (a << 3) ^ (a << 4);
            (f = (f >>> 8) ^ (255 & f) ^ 99), (r[o] = f), (i[f] = o);
            var h = e[o],
              c = e[h],
              u = e[c],
              l = (257 * e[f]) ^ (16843008 * f);
            (n[0][o] = (l << 24) | (l >>> 8)),
              (n[1][o] = (l << 16) | (l >>> 16)),
              (n[2][o] = (l << 8) | (l >>> 24)),
              (n[3][o] = l),
              (l = (16843009 * u) ^ (65537 * c) ^ (257 * h) ^ (16843008 * o)),
              (s[0][f] = (l << 24) | (l >>> 8)),
              (s[1][f] = (l << 16) | (l >>> 16)),
              (s[2][f] = (l << 8) | (l >>> 24)),
              (s[3][f] = l),
              0 === o ? (o = a = 1) : ((o = h ^ e[e[e[u ^ h]]]), (a ^= e[e[a]]));
          }
          return { SBOX: r, INV_SBOX: i, SUB_MIX: n, INV_SUB_MIX: s };
        })();
      function f(e) {
        (this._key = n(e)), this._reset();
      }
      (f.blockSize = 16),
        (f.keySize = 32),
        (f.prototype.blockSize = f.blockSize),
        (f.prototype.keySize = f.keySize),
        (f.prototype._reset = function() {
          for (
            var e = this._key, t = e.length, r = t + 6, i = 4 * (r + 1), n = [], s = 0;
            s < t;
            s++
          )
            n[s] = e[s];
          for (s = t; s < i; s++) {
            var o = n[s - 1];
            s % t == 0
              ? ((o = (o << 8) | (o >>> 24)),
                (o =
                  (d.SBOX[o >>> 24] << 24) |
                  (d.SBOX[(o >>> 16) & 255] << 16) |
                  (d.SBOX[(o >>> 8) & 255] << 8) |
                  d.SBOX[255 & o]),
                (o ^= a[(s / t) | 0] << 24))
              : t > 6 &&
                s % t == 4 &&
                (o =
                  (d.SBOX[o >>> 24] << 24) |
                  (d.SBOX[(o >>> 16) & 255] << 16) |
                  (d.SBOX[(o >>> 8) & 255] << 8) |
                  d.SBOX[255 & o]),
              (n[s] = n[s - t] ^ o);
          }
          for (var f = [], h = 0; h < i; h++) {
            var c = i - h,
              u = n[c - (h % 4 ? 0 : 4)];
            f[h] =
              h < 4 || c <= 4
                ? u
                : d.INV_SUB_MIX[0][d.SBOX[u >>> 24]] ^
                  d.INV_SUB_MIX[1][d.SBOX[(u >>> 16) & 255]] ^
                  d.INV_SUB_MIX[2][d.SBOX[(u >>> 8) & 255]] ^
                  d.INV_SUB_MIX[3][d.SBOX[255 & u]];
          }
          (this._nRounds = r), (this._keySchedule = n), (this._invKeySchedule = f);
        }),
        (f.prototype.encryptBlockRaw = function(e) {
          return o((e = n(e)), this._keySchedule, d.SUB_MIX, d.SBOX, this._nRounds);
        }),
        (f.prototype.encryptBlock = function(e) {
          var t = this.encryptBlockRaw(e),
            r = i.allocUnsafe(16);
          return (
            r.writeUInt32BE(t[0], 0),
            r.writeUInt32BE(t[1], 4),
            r.writeUInt32BE(t[2], 8),
            r.writeUInt32BE(t[3], 12),
            r
          );
        }),
        (f.prototype.decryptBlock = function(e) {
          var t = (e = n(e))[1];
          (e[1] = e[3]), (e[3] = t);
          var r = o(e, this._invKeySchedule, d.INV_SUB_MIX, d.INV_SBOX, this._nRounds),
            s = i.allocUnsafe(16);
          return (
            s.writeUInt32BE(r[0], 0),
            s.writeUInt32BE(r[3], 4),
            s.writeUInt32BE(r[2], 8),
            s.writeUInt32BE(r[1], 12),
            s
          );
        }),
        (f.prototype.scrub = function() {
          s(this._keySchedule), s(this._invKeySchedule), s(this._key);
        }),
        (e.exports.AES = f);
    },
    '../../node_modules/browserify-aes/authCipher.js': function(e, t, r) {
      var i = r('../../node_modules/browserify-aes/aes.js'),
        n = r('../../node_modules/safe-buffer/index.js').Buffer,
        s = r('../../node_modules/cipher-base/index.js'),
        o = r('../../node_modules/inherits/inherits_browser.js'),
        a = r('../../node_modules/browserify-aes/ghash.js'),
        d = r('../../node_modules/buffer-xor/index.js'),
        f = r('../../node_modules/browserify-aes/incr32.js');
      function h(e, t, r, o) {
        s.call(this);
        var d = n.alloc(4, 0);
        this._cipher = new i.AES(t);
        var h = this._cipher.encryptBlock(d);
        (this._ghash = new a(h)),
          (r = (function(e, t, r) {
            if (12 === t.length)
              return (
                (e._finID = n.concat([t, n.from([0, 0, 0, 1])])),
                n.concat([t, n.from([0, 0, 0, 2])])
              );
            var i = new a(r),
              s = t.length,
              o = s % 16;
            i.update(t),
              o && ((o = 16 - o), i.update(n.alloc(o, 0))),
              i.update(n.alloc(8, 0));
            var d = 8 * s,
              h = n.alloc(8);
            h.writeUIntBE(d, 0, 8), i.update(h), (e._finID = i.state);
            var c = n.from(e._finID);
            return f(c), c;
          })(this, r, h)),
          (this._prev = n.from(r)),
          (this._cache = n.allocUnsafe(0)),
          (this._secCache = n.allocUnsafe(0)),
          (this._decrypt = o),
          (this._alen = 0),
          (this._len = 0),
          (this._mode = e),
          (this._authTag = null),
          (this._called = !1);
      }
      o(h, s),
        (h.prototype._update = function(e) {
          if (!this._called && this._alen) {
            var t = 16 - (this._alen % 16);
            t < 16 && ((t = n.alloc(t, 0)), this._ghash.update(t));
          }
          this._called = !0;
          var r = this._mode.encrypt(this, e);
          return (
            this._decrypt ? this._ghash.update(e) : this._ghash.update(r),
            (this._len += e.length),
            r
          );
        }),
        (h.prototype._final = function() {
          if (this._decrypt && !this._authTag)
            throw new Error('Unsupported state or unable to authenticate data');
          var e = d(
            this._ghash.final(8 * this._alen, 8 * this._len),
            this._cipher.encryptBlock(this._finID)
          );
          if (
            this._decrypt &&
            (function(e, t) {
              var r = 0;
              e.length !== t.length && r++;
              for (var i = Math.min(e.length, t.length), n = 0; n < i; ++n)
                r += e[n] ^ t[n];
              return r;
            })(e, this._authTag)
          )
            throw new Error('Unsupported state or unable to authenticate data');
          (this._authTag = e), this._cipher.scrub();
        }),
        (h.prototype.getAuthTag = function() {
          if (this._decrypt || !n.isBuffer(this._authTag))
            throw new Error('Attempting to get auth tag in unsupported state');
          return this._authTag;
        }),
        (h.prototype.setAuthTag = function(e) {
          if (!this._decrypt)
            throw new Error('Attempting to set auth tag in unsupported state');
          this._authTag = e;
        }),
        (h.prototype.setAAD = function(e) {
          if (this._called) throw new Error('Attempting to set AAD in unsupported state');
          this._ghash.update(e), (this._alen += e.length);
        }),
        (e.exports = h);
    },
    '../../node_modules/browserify-aes/browser.js': function(e, t, r) {
      var i = r('../../node_modules/browserify-aes/encrypter.js'),
        n = r('../../node_modules/browserify-aes/decrypter.js'),
        s = r('../../node_modules/browserify-aes/modes/list.json');
      (t.createCipher = t.Cipher = i.createCipher),
        (t.createCipheriv = t.Cipheriv = i.createCipheriv),
        (t.createDecipher = t.Decipher = n.createDecipher),
        (t.createDecipheriv = t.Decipheriv = n.createDecipheriv),
        (t.listCiphers = t.getCiphers = function() {
          return Object.keys(s);
        });
    },
    '../../node_modules/browserify-aes/decrypter.js': function(e, t, r) {
      var i = r('../../node_modules/browserify-aes/authCipher.js'),
        n = r('../../node_modules/safe-buffer/index.js').Buffer,
        s = r('../../node_modules/browserify-aes/modes/index.js'),
        o = r('../../node_modules/browserify-aes/streamCipher.js'),
        a = r('../../node_modules/cipher-base/index.js'),
        d = r('../../node_modules/browserify-aes/aes.js'),
        f = r('../../node_modules/evp_bytestokey/index.js');
      function h(e, t, r) {
        a.call(this),
          (this._cache = new c()),
          (this._last = void 0),
          (this._cipher = new d.AES(t)),
          (this._prev = n.from(r)),
          (this._mode = e),
          (this._autopadding = !0);
      }
      function c() {
        this.cache = n.allocUnsafe(0);
      }
      function u(e, t, r) {
        var a = s[e.toLowerCase()];
        if (!a) throw new TypeError('invalid suite type');
        if (
          ('string' == typeof r && (r = n.from(r)), 'GCM' !== a.mode && r.length !== a.iv)
        )
          throw new TypeError('invalid iv length ' + r.length);
        if (('string' == typeof t && (t = n.from(t)), t.length !== a.key / 8))
          throw new TypeError('invalid key length ' + t.length);
        return 'stream' === a.type
          ? new o(a.module, t, r, !0)
          : 'auth' === a.type
          ? new i(a.module, t, r, !0)
          : new h(a.module, t, r);
      }
      r('../../node_modules/inherits/inherits_browser.js')(h, a),
        (h.prototype._update = function(e) {
          var t, r;
          this._cache.add(e);
          for (var i = []; (t = this._cache.get(this._autopadding)); )
            (r = this._mode.decrypt(this, t)), i.push(r);
          return n.concat(i);
        }),
        (h.prototype._final = function() {
          var e = this._cache.flush();
          if (this._autopadding)
            return (function(e) {
              var t = e[15];
              if (t < 1 || t > 16) throw new Error('unable to decrypt data');
              var r = -1;
              for (; ++r < t; )
                if (e[r + (16 - t)] !== t) throw new Error('unable to decrypt data');
              if (16 === t) return;
              return e.slice(0, 16 - t);
            })(this._mode.decrypt(this, e));
          if (e) throw new Error('data not multiple of block length');
        }),
        (h.prototype.setAutoPadding = function(e) {
          return (this._autopadding = !!e), this;
        }),
        (c.prototype.add = function(e) {
          this.cache = n.concat([this.cache, e]);
        }),
        (c.prototype.get = function(e) {
          var t;
          if (e) {
            if (this.cache.length > 16)
              return (
                (t = this.cache.slice(0, 16)), (this.cache = this.cache.slice(16)), t
              );
          } else if (this.cache.length >= 16)
            return (t = this.cache.slice(0, 16)), (this.cache = this.cache.slice(16)), t;
          return null;
        }),
        (c.prototype.flush = function() {
          if (this.cache.length) return this.cache;
        }),
        (t.createDecipher = function(e, t) {
          var r = s[e.toLowerCase()];
          if (!r) throw new TypeError('invalid suite type');
          var i = f(t, !1, r.key, r.iv);
          return u(e, i.key, i.iv);
        }),
        (t.createDecipheriv = u);
    },
    '../../node_modules/browserify-aes/encrypter.js': function(e, t, r) {
      var i = r('../../node_modules/browserify-aes/modes/index.js'),
        n = r('../../node_modules/browserify-aes/authCipher.js'),
        s = r('../../node_modules/safe-buffer/index.js').Buffer,
        o = r('../../node_modules/browserify-aes/streamCipher.js'),
        a = r('../../node_modules/cipher-base/index.js'),
        d = r('../../node_modules/browserify-aes/aes.js'),
        f = r('../../node_modules/evp_bytestokey/index.js');
      function h(e, t, r) {
        a.call(this),
          (this._cache = new u()),
          (this._cipher = new d.AES(t)),
          (this._prev = s.from(r)),
          (this._mode = e),
          (this._autopadding = !0);
      }
      r('../../node_modules/inherits/inherits_browser.js')(h, a),
        (h.prototype._update = function(e) {
          var t, r;
          this._cache.add(e);
          for (var i = []; (t = this._cache.get()); )
            (r = this._mode.encrypt(this, t)), i.push(r);
          return s.concat(i);
        });
      var c = s.alloc(16, 16);
      function u() {
        this.cache = s.allocUnsafe(0);
      }
      function l(e, t, r) {
        var a = i[e.toLowerCase()];
        if (!a) throw new TypeError('invalid suite type');
        if (('string' == typeof t && (t = s.from(t)), t.length !== a.key / 8))
          throw new TypeError('invalid key length ' + t.length);
        if (
          ('string' == typeof r && (r = s.from(r)), 'GCM' !== a.mode && r.length !== a.iv)
        )
          throw new TypeError('invalid iv length ' + r.length);
        return 'stream' === a.type
          ? new o(a.module, t, r)
          : 'auth' === a.type
          ? new n(a.module, t, r)
          : new h(a.module, t, r);
      }
      (h.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding)
          return (e = this._mode.encrypt(this, e)), this._cipher.scrub(), e;
        if (!e.equals(c))
          throw (this._cipher.scrub(), new Error('data not multiple of block length'));
      }),
        (h.prototype.setAutoPadding = function(e) {
          return (this._autopadding = !!e), this;
        }),
        (u.prototype.add = function(e) {
          this.cache = s.concat([this.cache, e]);
        }),
        (u.prototype.get = function() {
          if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);
            return (this.cache = this.cache.slice(16)), e;
          }
          return null;
        }),
        (u.prototype.flush = function() {
          for (var e = 16 - this.cache.length, t = s.allocUnsafe(e), r = -1; ++r < e; )
            t.writeUInt8(e, r);
          return s.concat([this.cache, t]);
        }),
        (t.createCipheriv = l),
        (t.createCipher = function(e, t) {
          var r = i[e.toLowerCase()];
          if (!r) throw new TypeError('invalid suite type');
          var n = f(t, !1, r.key, r.iv);
          return l(e, n.key, n.iv);
        });
    },
    '../../node_modules/browserify-aes/ghash.js': function(e, t, r) {
      var i = r('../../node_modules/safe-buffer/index.js').Buffer,
        n = i.alloc(16, 0);
      function s(e) {
        var t = i.allocUnsafe(16);
        return (
          t.writeUInt32BE(e[0] >>> 0, 0),
          t.writeUInt32BE(e[1] >>> 0, 4),
          t.writeUInt32BE(e[2] >>> 0, 8),
          t.writeUInt32BE(e[3] >>> 0, 12),
          t
        );
      }
      function o(e) {
        (this.h = e), (this.state = i.alloc(16, 0)), (this.cache = i.allocUnsafe(0));
      }
      (o.prototype.ghash = function(e) {
        for (var t = -1; ++t < e.length; ) this.state[t] ^= e[t];
        this._multiply();
      }),
        (o.prototype._multiply = function() {
          for (
            var e,
              t,
              r,
              i = [
                (e = this.h).readUInt32BE(0),
                e.readUInt32BE(4),
                e.readUInt32BE(8),
                e.readUInt32BE(12)
              ],
              n = [0, 0, 0, 0],
              o = -1;
            ++o < 128;

          ) {
            for (
              0 != (this.state[~~(o / 8)] & (1 << (7 - (o % 8)))) &&
                ((n[0] ^= i[0]), (n[1] ^= i[1]), (n[2] ^= i[2]), (n[3] ^= i[3])),
                r = 0 != (1 & i[3]),
                t = 3;
              t > 0;
              t--
            )
              i[t] = (i[t] >>> 1) | ((1 & i[t - 1]) << 31);
            (i[0] = i[0] >>> 1), r && (i[0] = i[0] ^ (225 << 24));
          }
          this.state = s(n);
        }),
        (o.prototype.update = function(e) {
          var t;
          for (this.cache = i.concat([this.cache, e]); this.cache.length >= 16; )
            (t = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              this.ghash(t);
        }),
        (o.prototype.final = function(e, t) {
          return (
            this.cache.length && this.ghash(i.concat([this.cache, n], 16)),
            this.ghash(s([0, e, 0, t])),
            this.state
          );
        }),
        (e.exports = o);
    },
    '../../node_modules/browserify-aes/incr32.js': function(e, t) {
      e.exports = function(e) {
        for (var t, r = e.length; r--; ) {
          if (255 !== (t = e.readUInt8(r))) {
            t++, e.writeUInt8(t, r);
            break;
          }
          e.writeUInt8(0, r);
        }
      };
    },
    '../../node_modules/browserify-aes/modes/cbc.js': function(e, t, r) {
      var i = r('../../node_modules/buffer-xor/index.js');
      (t.encrypt = function(e, t) {
        var r = i(t, e._prev);
        return (e._prev = e._cipher.encryptBlock(r)), e._prev;
      }),
        (t.decrypt = function(e, t) {
          var r = e._prev;
          e._prev = t;
          var n = e._cipher.decryptBlock(t);
          return i(n, r);
        });
    },
    '../../node_modules/browserify-aes/modes/cfb.js': function(e, t, r) {
      var i = r('../../node_modules/safe-buffer/index.js').Buffer,
        n = r('../../node_modules/buffer-xor/index.js');
      function s(e, t, r) {
        var s = t.length,
          o = n(t, e._cache);
        return (
          (e._cache = e._cache.slice(s)), (e._prev = i.concat([e._prev, r ? t : o])), o
        );
      }
      t.encrypt = function(e, t, r) {
        for (var n, o = i.allocUnsafe(0); t.length; ) {
          if (
            (0 === e._cache.length &&
              ((e._cache = e._cipher.encryptBlock(e._prev)),
              (e._prev = i.allocUnsafe(0))),
            !(e._cache.length <= t.length))
          ) {
            o = i.concat([o, s(e, t, r)]);
            break;
          }
          (n = e._cache.length),
            (o = i.concat([o, s(e, t.slice(0, n), r)])),
            (t = t.slice(n));
        }
        return o;
      };
    },
    '../../node_modules/browserify-aes/modes/cfb1.js': function(e, t, r) {
      var i = r('../../node_modules/safe-buffer/index.js').Buffer;
      function n(e, t, r) {
        for (var i, n, o = -1, a = 0; ++o < 8; )
          (i = t & (1 << (7 - o)) ? 128 : 0),
            (a += (128 & (n = e._cipher.encryptBlock(e._prev)[0] ^ i)) >> o % 8),
            (e._prev = s(e._prev, r ? i : n));
        return a;
      }
      function s(e, t) {
        var r = e.length,
          n = -1,
          s = i.allocUnsafe(e.length);
        for (e = i.concat([e, i.from([t])]); ++n < r; )
          s[n] = (e[n] << 1) | (e[n + 1] >> 7);
        return s;
      }
      t.encrypt = function(e, t, r) {
        for (var s = t.length, o = i.allocUnsafe(s), a = -1; ++a < s; )
          o[a] = n(e, t[a], r);
        return o;
      };
    },
    '../../node_modules/browserify-aes/modes/cfb8.js': function(e, t, r) {
      var i = r('../../node_modules/safe-buffer/index.js').Buffer;
      function n(e, t, r) {
        var n = e._cipher.encryptBlock(e._prev)[0] ^ t;
        return (e._prev = i.concat([e._prev.slice(1), i.from([r ? t : n])])), n;
      }
      t.encrypt = function(e, t, r) {
        for (var s = t.length, o = i.allocUnsafe(s), a = -1; ++a < s; )
          o[a] = n(e, t[a], r);
        return o;
      };
    },
    '../../node_modules/browserify-aes/modes/ctr.js': function(e, t, r) {
      var i = r('../../node_modules/buffer-xor/index.js'),
        n = r('../../node_modules/safe-buffer/index.js').Buffer,
        s = r('../../node_modules/browserify-aes/incr32.js');
      function o(e) {
        var t = e._cipher.encryptBlockRaw(e._prev);
        return s(e._prev), t;
      }
      t.encrypt = function(e, t) {
        var r = Math.ceil(t.length / 16),
          s = e._cache.length;
        e._cache = n.concat([e._cache, n.allocUnsafe(16 * r)]);
        for (var a = 0; a < r; a++) {
          var d = o(e),
            f = s + 16 * a;
          e._cache.writeUInt32BE(d[0], f + 0),
            e._cache.writeUInt32BE(d[1], f + 4),
            e._cache.writeUInt32BE(d[2], f + 8),
            e._cache.writeUInt32BE(d[3], f + 12);
        }
        var h = e._cache.slice(0, t.length);
        return (e._cache = e._cache.slice(t.length)), i(t, h);
      };
    },
    '../../node_modules/browserify-aes/modes/ecb.js': function(e, t) {
      (t.encrypt = function(e, t) {
        return e._cipher.encryptBlock(t);
      }),
        (t.decrypt = function(e, t) {
          return e._cipher.decryptBlock(t);
        });
    },
    '../../node_modules/browserify-aes/modes/index.js': function(e, t, r) {
      var i = {
          ECB: r('../../node_modules/browserify-aes/modes/ecb.js'),
          CBC: r('../../node_modules/browserify-aes/modes/cbc.js'),
          CFB: r('../../node_modules/browserify-aes/modes/cfb.js'),
          CFB8: r('../../node_modules/browserify-aes/modes/cfb8.js'),
          CFB1: r('../../node_modules/browserify-aes/modes/cfb1.js'),
          OFB: r('../../node_modules/browserify-aes/modes/ofb.js'),
          CTR: r('../../node_modules/browserify-aes/modes/ctr.js'),
          GCM: r('../../node_modules/browserify-aes/modes/ctr.js')
        },
        n = r('../../node_modules/browserify-aes/modes/list.json');
      for (var s in n) n[s].module = i[n[s].mode];
      e.exports = n;
    },
    '../../node_modules/browserify-aes/modes/list.json': function(e) {
      e.exports = JSON.parse(
        '{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}'
      );
    },
    '../../node_modules/browserify-aes/modes/ofb.js': function(e, t, r) {
      (function(e) {
        var i = r('../../node_modules/buffer-xor/index.js');
        function n(e) {
          return (e._prev = e._cipher.encryptBlock(e._prev)), e._prev;
        }
        t.encrypt = function(t, r) {
          for (; t._cache.length < r.length; ) t._cache = e.concat([t._cache, n(t)]);
          var s = t._cache.slice(0, r.length);
          return (t._cache = t._cache.slice(r.length)), i(r, s);
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/browserify-aes/streamCipher.js': function(e, t, r) {
      var i = r('../../node_modules/browserify-aes/aes.js'),
        n = r('../../node_modules/safe-buffer/index.js').Buffer,
        s = r('../../node_modules/cipher-base/index.js');
      function o(e, t, r, o) {
        s.call(this),
          (this._cipher = new i.AES(t)),
          (this._prev = n.from(r)),
          (this._cache = n.allocUnsafe(0)),
          (this._secCache = n.allocUnsafe(0)),
          (this._decrypt = o),
          (this._mode = e);
      }
      r('../../node_modules/inherits/inherits_browser.js')(o, s),
        (o.prototype._update = function(e) {
          return this._mode.encrypt(this, e, this._decrypt);
        }),
        (o.prototype._final = function() {
          this._cipher.scrub();
        }),
        (e.exports = o);
    },
    '../../node_modules/browserify-cipher/browser.js': function(e, t, r) {
      var i = r('../../node_modules/browserify-des/index.js'),
        n = r('../../node_modules/browserify-aes/browser.js'),
        s = r('../../node_modules/browserify-aes/modes/index.js'),
        o = r('../../node_modules/browserify-des/modes.js'),
        a = r('../../node_modules/evp_bytestokey/index.js');
      function d(e, t, r) {
        if (((e = e.toLowerCase()), s[e])) return n.createCipheriv(e, t, r);
        if (o[e]) return new i({ key: t, iv: r, mode: e });
        throw new TypeError('invalid suite type');
      }
      function f(e, t, r) {
        if (((e = e.toLowerCase()), s[e])) return n.createDecipheriv(e, t, r);
        if (o[e]) return new i({ key: t, iv: r, mode: e, decrypt: !0 });
        throw new TypeError('invalid suite type');
      }
      (t.createCipher = t.Cipher = function(e, t) {
        var r, i;
        if (((e = e.toLowerCase()), s[e])) (r = s[e].key), (i = s[e].iv);
        else {
          if (!o[e]) throw new TypeError('invalid suite type');
          (r = 8 * o[e].key), (i = o[e].iv);
        }
        var n = a(t, !1, r, i);
        return d(e, n.key, n.iv);
      }),
        (t.createCipheriv = t.Cipheriv = d),
        (t.createDecipher = t.Decipher = function(e, t) {
          var r, i;
          if (((e = e.toLowerCase()), s[e])) (r = s[e].key), (i = s[e].iv);
          else {
            if (!o[e]) throw new TypeError('invalid suite type');
            (r = 8 * o[e].key), (i = o[e].iv);
          }
          var n = a(t, !1, r, i);
          return f(e, n.key, n.iv);
        }),
        (t.createDecipheriv = t.Decipheriv = f),
        (t.listCiphers = t.getCiphers = function() {
          return Object.keys(o).concat(n.getCiphers());
        });
    },
    '../../node_modules/browserify-des/index.js': function(e, t, r) {
      var i = r('../../node_modules/cipher-base/index.js'),
        n = r('../../node_modules/des.js/lib/des.js'),
        s = r('../../node_modules/inherits/inherits_browser.js'),
        o = r('../../node_modules/safe-buffer/index.js').Buffer,
        a = {
          'des-ede3-cbc': n.CBC.instantiate(n.EDE),
          'des-ede3': n.EDE,
          'des-ede-cbc': n.CBC.instantiate(n.EDE),
          'des-ede': n.EDE,
          'des-cbc': n.CBC.instantiate(n.DES),
          'des-ecb': n.DES
        };
      function d(e) {
        i.call(this);
        var t,
          r = e.mode.toLowerCase(),
          n = a[r];
        t = e.decrypt ? 'decrypt' : 'encrypt';
        var s = e.key;
        o.isBuffer(s) || (s = o.from(s)),
          ('des-ede' !== r && 'des-ede-cbc' !== r) || (s = o.concat([s, s.slice(0, 8)]));
        var d = e.iv;
        o.isBuffer(d) || (d = o.from(d)),
          (this._des = n.create({ key: s, iv: d, type: t }));
      }
      (a.des = a['des-cbc']),
        (a.des3 = a['des-ede3-cbc']),
        (e.exports = d),
        s(d, i),
        (d.prototype._update = function(e) {
          return o.from(this._des.update(e));
        }),
        (d.prototype._final = function() {
          return o.from(this._des.final());
        });
    },
    '../../node_modules/browserify-des/modes.js': function(e, t) {
      (t['des-ecb'] = { key: 8, iv: 0 }),
        (t['des-cbc'] = t.des = { key: 8, iv: 8 }),
        (t['des-ede3-cbc'] = t.des3 = { key: 24, iv: 8 }),
        (t['des-ede3'] = { key: 24, iv: 0 }),
        (t['des-ede-cbc'] = { key: 16, iv: 8 }),
        (t['des-ede'] = { key: 16, iv: 0 });
    },
    '../../node_modules/browserify-rsa/index.js': function(e, t, r) {
      (function(t) {
        var i = r('../../node_modules/bn.js/lib/bn.js'),
          n = r('../../node_modules/randombytes/browser.js');
        function s(e, r) {
          var n = (function(e) {
              var t = o(e);
              return {
                blinder: t
                  .toRed(i.mont(e.modulus))
                  .redPow(new i(e.publicExponent))
                  .fromRed(),
                unblinder: t.invm(e.modulus)
              };
            })(r),
            s = r.modulus.byteLength(),
            a = (i.mont(r.modulus), new i(e).mul(n.blinder).umod(r.modulus)),
            d = a.toRed(i.mont(r.prime1)),
            f = a.toRed(i.mont(r.prime2)),
            h = r.coefficient,
            c = r.prime1,
            u = r.prime2,
            l = d.redPow(r.exponent1),
            b = f.redPow(r.exponent2);
          (l = l.fromRed()), (b = b.fromRed());
          var p = l
            .isub(b)
            .imul(h)
            .umod(c);
          return (
            p.imul(u),
            b.iadd(p),
            new t(
              b
                .imul(n.unblinder)
                .umod(r.modulus)
                .toArray(!1, s)
            )
          );
        }
        function o(e) {
          for (
            var t = e.modulus.byteLength(), r = new i(n(t));
            r.cmp(e.modulus) >= 0 || !r.umod(e.prime1) || !r.umod(e.prime2);

          )
            r = new i(n(t));
          return r;
        }
        (e.exports = s), (s.getr = o);
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/browserify-sign/algos.js': function(e, t, r) {
      e.exports = r('../../node_modules/browserify-sign/browser/algorithms.json');
    },
    '../../node_modules/browserify-sign/browser/algorithms.json': function(e) {
      e.exports = JSON.parse(
        '{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}'
      );
    },
    '../../node_modules/browserify-sign/browser/curves.json': function(e) {
      e.exports = JSON.parse(
        '{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}'
      );
    },
    '../../node_modules/browserify-sign/browser/index.js': function(e, t, r) {
      (function(t) {
        var i = r('../../node_modules/create-hash/browser.js'),
          n = r('../../node_modules/stream-browserify/index.js'),
          s = r('../../node_modules/inherits/inherits_browser.js'),
          o = r('../../node_modules/browserify-sign/browser/sign.js'),
          a = r('../../node_modules/browserify-sign/browser/verify.js'),
          d = r('../../node_modules/browserify-sign/browser/algorithms.json');
        function f(e) {
          n.Writable.call(this);
          var t = d[e];
          if (!t) throw new Error('Unknown message digest');
          (this._hashType = t.hash),
            (this._hash = i(t.hash)),
            (this._tag = t.id),
            (this._signType = t.sign);
        }
        function h(e) {
          n.Writable.call(this);
          var t = d[e];
          if (!t) throw new Error('Unknown message digest');
          (this._hash = i(t.hash)), (this._tag = t.id), (this._signType = t.sign);
        }
        function c(e) {
          return new f(e);
        }
        function u(e) {
          return new h(e);
        }
        Object.keys(d).forEach(function(e) {
          (d[e].id = new t(d[e].id, 'hex')), (d[e.toLowerCase()] = d[e]);
        }),
          s(f, n.Writable),
          (f.prototype._write = function(e, t, r) {
            this._hash.update(e), r();
          }),
          (f.prototype.update = function(e, r) {
            return 'string' == typeof e && (e = new t(e, r)), this._hash.update(e), this;
          }),
          (f.prototype.sign = function(e, t) {
            this.end();
            var r = this._hash.digest(),
              i = o(r, e, this._hashType, this._signType, this._tag);
            return t ? i.toString(t) : i;
          }),
          s(h, n.Writable),
          (h.prototype._write = function(e, t, r) {
            this._hash.update(e), r();
          }),
          (h.prototype.update = function(e, r) {
            return 'string' == typeof e && (e = new t(e, r)), this._hash.update(e), this;
          }),
          (h.prototype.verify = function(e, r, i) {
            'string' == typeof r && (r = new t(r, i)), this.end();
            var n = this._hash.digest();
            return a(r, n, e, this._signType, this._tag);
          }),
          (e.exports = { Sign: c, Verify: u, createSign: c, createVerify: u });
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/browserify-sign/browser/sign.js': function(e, t, r) {
      (function(t) {
        var i = r('../../node_modules/create-hmac/browser.js'),
          n = r('../../node_modules/browserify-rsa/index.js'),
          s = r('../../node_modules/elliptic/lib/elliptic.js').ec,
          o = r('../../node_modules/bn.js/lib/bn.js'),
          a = r('../../node_modules/parse-asn1/index.js'),
          d = r('../../node_modules/browserify-sign/browser/curves.json');
        function f(e, r, n, s) {
          if ((e = new t(e.toArray())).length < r.byteLength()) {
            var o = new t(r.byteLength() - e.length);
            o.fill(0), (e = t.concat([o, e]));
          }
          var a = n.length,
            d = (function(e, r) {
              e = (e = h(e, r)).mod(r);
              var i = new t(e.toArray());
              if (i.length < r.byteLength()) {
                var n = new t(r.byteLength() - i.length);
                n.fill(0), (i = t.concat([n, i]));
              }
              return i;
            })(n, r),
            f = new t(a);
          f.fill(1);
          var c = new t(a);
          return (
            c.fill(0),
            (c = i(s, c)
              .update(f)
              .update(new t([0]))
              .update(e)
              .update(d)
              .digest()),
            (f = i(s, c)
              .update(f)
              .digest()),
            {
              k: (c = i(s, c)
                .update(f)
                .update(new t([1]))
                .update(e)
                .update(d)
                .digest()),
              v: (f = i(s, c)
                .update(f)
                .digest())
            }
          );
        }
        function h(e, t) {
          var r = new o(e),
            i = (e.length << 3) - t.bitLength();
          return i > 0 && r.ishrn(i), r;
        }
        function c(e, r, n) {
          var s, o;
          do {
            for (s = new t(0); 8 * s.length < e.bitLength(); )
              (r.v = i(n, r.k)
                .update(r.v)
                .digest()),
                (s = t.concat([s, r.v]));
            (o = h(s, e)),
              (r.k = i(n, r.k)
                .update(r.v)
                .update(new t([0]))
                .digest()),
              (r.v = i(n, r.k)
                .update(r.v)
                .digest());
          } while (-1 !== o.cmp(e));
          return o;
        }
        function u(e, t, r, i) {
          return e
            .toRed(o.mont(r))
            .redPow(t)
            .fromRed()
            .mod(i);
        }
        (e.exports = function(e, r, i, l, b) {
          var p = a(r);
          if (p.curve) {
            if ('ecdsa' !== l && 'ecdsa/rsa' !== l)
              throw new Error('wrong private key type');
            return (function(e, r) {
              var i = d[r.curve.join('.')];
              if (!i) throw new Error('unknown curve ' + r.curve.join('.'));
              var n = new s(i).keyFromPrivate(r.privateKey).sign(e);
              return new t(n.toDER());
            })(e, p);
          }
          if ('dsa' === p.type) {
            if ('dsa' !== l) throw new Error('wrong private key type');
            return (function(e, r, i) {
              var n,
                s = r.params.priv_key,
                a = r.params.p,
                d = r.params.q,
                l = r.params.g,
                b = new o(0),
                p = h(e, d).mod(d),
                m = !1,
                _ = f(s, d, e, i);
              for (; !1 === m; )
                (n = c(d, _, i)),
                  (b = u(l, n, a, d)),
                  0 ===
                    (m = n
                      .invm(d)
                      .imul(p.add(s.mul(b)))
                      .mod(d)).cmpn(0) && ((m = !1), (b = new o(0)));
              return (function(e, r) {
                (e = e.toArray()), (r = r.toArray()), 128 & e[0] && (e = [0].concat(e));
                128 & r[0] && (r = [0].concat(r));
                var i = [48, e.length + r.length + 4, 2, e.length];
                return (i = i.concat(e, [2, r.length], r)), new t(i);
              })(b, m);
            })(e, p, i);
          }
          if ('rsa' !== l && 'ecdsa/rsa' !== l) throw new Error('wrong private key type');
          e = t.concat([b, e]);
          for (var m = p.modulus.byteLength(), _ = [0, 1]; e.length + _.length + 1 < m; )
            _.push(255);
          _.push(0);
          for (var y = -1; ++y < e.length; ) _.push(e[y]);
          return n(_, p);
        }),
          (e.exports.getKey = f),
          (e.exports.makeKey = c);
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/browserify-sign/browser/verify.js': function(e, t, r) {
      (function(t) {
        var i = r('../../node_modules/bn.js/lib/bn.js'),
          n = r('../../node_modules/elliptic/lib/elliptic.js').ec,
          s = r('../../node_modules/parse-asn1/index.js'),
          o = r('../../node_modules/browserify-sign/browser/curves.json');
        function a(e, t) {
          if (e.cmpn(0) <= 0) throw new Error('invalid sig');
          if (e.cmp(t) >= t) throw new Error('invalid sig');
        }
        e.exports = function(e, r, d, f, h) {
          var c = s(d);
          if ('ec' === c.type) {
            if ('ecdsa' !== f && 'ecdsa/rsa' !== f)
              throw new Error('wrong public key type');
            return (function(e, t, r) {
              var i = o[r.data.algorithm.curve.join('.')];
              if (!i)
                throw new Error('unknown curve ' + r.data.algorithm.curve.join('.'));
              var s = new n(i),
                a = r.data.subjectPrivateKey.data;
              return s.verify(t, e, a);
            })(e, r, c);
          }
          if ('dsa' === c.type) {
            if ('dsa' !== f) throw new Error('wrong public key type');
            return (function(e, t, r) {
              var n = r.data.p,
                o = r.data.q,
                d = r.data.g,
                f = r.data.pub_key,
                h = s.signature.decode(e, 'der'),
                c = h.s,
                u = h.r;
              a(c, o), a(u, o);
              var l = i.mont(n),
                b = c.invm(o);
              return (
                0 ===
                d
                  .toRed(l)
                  .redPow(new i(t).mul(b).mod(o))
                  .fromRed()
                  .mul(
                    f
                      .toRed(l)
                      .redPow(u.mul(b).mod(o))
                      .fromRed()
                  )
                  .mod(n)
                  .mod(o)
                  .cmp(u)
              );
            })(e, r, c);
          }
          if ('rsa' !== f && 'ecdsa/rsa' !== f) throw new Error('wrong public key type');
          r = t.concat([h, r]);
          for (
            var u = c.modulus.byteLength(), l = [1], b = 0;
            r.length + l.length + 2 < u;

          )
            l.push(255), b++;
          l.push(0);
          for (var p = -1; ++p < r.length; ) l.push(r[p]);
          l = new t(l);
          var m = i.mont(c.modulus);
          (e = (e = new i(e).toRed(m)).redPow(new i(c.publicExponent))),
            (e = new t(e.fromRed().toArray()));
          var _ = b < 8 ? 1 : 0;
          for (
            u = Math.min(e.length, l.length), e.length !== l.length && (_ = 1), p = -1;
            ++p < u;

          )
            _ |= e[p] ^ l[p];
          return 0 === _;
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/buffer-xor/index.js': function(e, t, r) {
      (function(t) {
        e.exports = function(e, r) {
          for (var i = Math.min(e.length, r.length), n = new t(i), s = 0; s < i; ++s)
            n[s] = e[s] ^ r[s];
          return n;
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/cipher-base/index.js': function(e, t, r) {
      var i = r('../../node_modules/safe-buffer/index.js').Buffer,
        n = r('../../node_modules/stream-browserify/index.js').Transform,
        s = r('../../node_modules/string_decoder/lib/string_decoder.js').StringDecoder;
      function o(e) {
        n.call(this),
          (this.hashMode = 'string' == typeof e),
          this.hashMode
            ? (this[e] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null);
      }
      r('../../node_modules/inherits/inherits_browser.js')(o, n),
        (o.prototype.update = function(e, t, r) {
          'string' == typeof e && (e = i.from(e, t));
          var n = this._update(e);
          return this.hashMode ? this : (r && (n = this._toString(n, r)), n);
        }),
        (o.prototype.setAutoPadding = function() {}),
        (o.prototype.getAuthTag = function() {
          throw new Error('trying to get auth tag in unsupported state');
        }),
        (o.prototype.setAuthTag = function() {
          throw new Error('trying to set auth tag in unsupported state');
        }),
        (o.prototype.setAAD = function() {
          throw new Error('trying to set aad in unsupported state');
        }),
        (o.prototype._transform = function(e, t, r) {
          var i;
          try {
            this.hashMode ? this._update(e) : this.push(this._update(e));
          } catch (e) {
            i = e;
          } finally {
            r(i);
          }
        }),
        (o.prototype._flush = function(e) {
          var t;
          try {
            this.push(this.__final());
          } catch (e) {
            t = e;
          }
          e(t);
        }),
        (o.prototype._finalOrDigest = function(e) {
          var t = this.__final() || i.alloc(0);
          return e && (t = this._toString(t, e, !0)), t;
        }),
        (o.prototype._toString = function(e, t, r) {
          if (
            (this._decoder || ((this._decoder = new s(t)), (this._encoding = t)),
            this._encoding !== t)
          )
            throw new Error("can't switch encodings");
          var i = this._decoder.write(e);
          return r && (i += this._decoder.end()), i;
        }),
        (e.exports = o);
    },
    '../../node_modules/core-util-is/lib/util.js': function(e, t, r) {
      (function(e) {
        function r(e) {
          return Object.prototype.toString.call(e);
        }
        (t.isArray = function(e) {
          return Array.isArray ? Array.isArray(e) : '[object Array]' === r(e);
        }),
          (t.isBoolean = function(e) {
            return 'boolean' == typeof e;
          }),
          (t.isNull = function(e) {
            return null === e;
          }),
          (t.isNullOrUndefined = function(e) {
            return null == e;
          }),
          (t.isNumber = function(e) {
            return 'number' == typeof e;
          }),
          (t.isString = function(e) {
            return 'string' == typeof e;
          }),
          (t.isSymbol = function(e) {
            return 'symbol' == typeof e;
          }),
          (t.isUndefined = function(e) {
            return void 0 === e;
          }),
          (t.isRegExp = function(e) {
            return '[object RegExp]' === r(e);
          }),
          (t.isObject = function(e) {
            return 'object' == typeof e && null !== e;
          }),
          (t.isDate = function(e) {
            return '[object Date]' === r(e);
          }),
          (t.isError = function(e) {
            return '[object Error]' === r(e) || e instanceof Error;
          }),
          (t.isFunction = function(e) {
            return 'function' == typeof e;
          }),
          (t.isPrimitive = function(e) {
            return (
              null === e ||
              'boolean' == typeof e ||
              'number' == typeof e ||
              'string' == typeof e ||
              'symbol' == typeof e ||
              void 0 === e
            );
          }),
          (t.isBuffer = e.isBuffer);
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/create-ecdh/browser.js': function(e, t, r) {
      (function(t) {
        var i = r('../../node_modules/elliptic/lib/elliptic.js'),
          n = r('../../node_modules/bn.js/lib/bn.js');
        e.exports = function(e) {
          return new o(e);
        };
        var s = {
          secp256k1: { name: 'secp256k1', byteLength: 32 },
          secp224r1: { name: 'p224', byteLength: 28 },
          prime256v1: { name: 'p256', byteLength: 32 },
          prime192v1: { name: 'p192', byteLength: 24 },
          ed25519: { name: 'ed25519', byteLength: 32 },
          secp384r1: { name: 'p384', byteLength: 48 },
          secp521r1: { name: 'p521', byteLength: 66 }
        };
        function o(e) {
          (this.curveType = s[e]),
            this.curveType || (this.curveType = { name: e }),
            (this.curve = new i.ec(this.curveType.name)),
            (this.keys = void 0);
        }
        function a(e, r, i) {
          Array.isArray(e) || (e = e.toArray());
          var n = new t(e);
          if (i && n.length < i) {
            var s = new t(i - n.length);
            s.fill(0), (n = t.concat([s, n]));
          }
          return r ? n.toString(r) : n;
        }
        (s.p224 = s.secp224r1),
          (s.p256 = s.secp256r1 = s.prime256v1),
          (s.p192 = s.secp192r1 = s.prime192v1),
          (s.p384 = s.secp384r1),
          (s.p521 = s.secp521r1),
          (o.prototype.generateKeys = function(e, t) {
            return (this.keys = this.curve.genKeyPair()), this.getPublicKey(e, t);
          }),
          (o.prototype.computeSecret = function(e, r, i) {
            return (
              (r = r || 'utf8'),
              t.isBuffer(e) || (e = new t(e, r)),
              a(
                this.curve
                  .keyFromPublic(e)
                  .getPublic()
                  .mul(this.keys.getPrivate())
                  .getX(),
                i,
                this.curveType.byteLength
              )
            );
          }),
          (o.prototype.getPublicKey = function(e, t) {
            var r = this.keys.getPublic('compressed' === t, !0);
            return (
              'hybrid' === t && (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)), a(r, e)
            );
          }),
          (o.prototype.getPrivateKey = function(e) {
            return a(this.keys.getPrivate(), e);
          }),
          (o.prototype.setPublicKey = function(e, r) {
            return (
              (r = r || 'utf8'),
              t.isBuffer(e) || (e = new t(e, r)),
              this.keys._importPublic(e),
              this
            );
          }),
          (o.prototype.setPrivateKey = function(e, r) {
            (r = r || 'utf8'), t.isBuffer(e) || (e = new t(e, r));
            var i = new n(e);
            return (
              (i = i.toString(16)),
              (this.keys = this.curve.genKeyPair()),
              this.keys._importPrivate(i),
              this
            );
          });
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/create-hash/browser.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/md5.js/index.js'),
        s = r('../../node_modules/ripemd160/index.js'),
        o = r('../../node_modules/sha.js/index.js'),
        a = r('../../node_modules/cipher-base/index.js');
      function d(e) {
        a.call(this, 'digest'), (this._hash = e);
      }
      i(d, a),
        (d.prototype._update = function(e) {
          this._hash.update(e);
        }),
        (d.prototype._final = function() {
          return this._hash.digest();
        }),
        (e.exports = function(e) {
          return 'md5' === (e = e.toLowerCase())
            ? new n()
            : 'rmd160' === e || 'ripemd160' === e
            ? new s()
            : new d(o(e));
        });
    },
    '../../node_modules/create-hash/md5.js': function(e, t, r) {
      var i = r('../../node_modules/md5.js/index.js');
      e.exports = function(e) {
        return new i().update(e).digest();
      };
    },
    '../../node_modules/create-hmac/browser.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/create-hmac/legacy.js'),
        s = r('../../node_modules/cipher-base/index.js'),
        o = r('../../node_modules/safe-buffer/index.js').Buffer,
        a = r('../../node_modules/create-hash/md5.js'),
        d = r('../../node_modules/ripemd160/index.js'),
        f = r('../../node_modules/sha.js/index.js'),
        h = o.alloc(128);
      function c(e, t) {
        s.call(this, 'digest'), 'string' == typeof t && (t = o.from(t));
        var r = 'sha512' === e || 'sha384' === e ? 128 : 64;
        ((this._alg = e), (this._key = t), t.length > r)
          ? (t = ('rmd160' === e ? new d() : f(e)).update(t).digest())
          : t.length < r && (t = o.concat([t, h], r));
        for (
          var i = (this._ipad = o.allocUnsafe(r)),
            n = (this._opad = o.allocUnsafe(r)),
            a = 0;
          a < r;
          a++
        )
          (i[a] = 54 ^ t[a]), (n[a] = 92 ^ t[a]);
        (this._hash = 'rmd160' === e ? new d() : f(e)), this._hash.update(i);
      }
      i(c, s),
        (c.prototype._update = function(e) {
          this._hash.update(e);
        }),
        (c.prototype._final = function() {
          var e = this._hash.digest();
          return ('rmd160' === this._alg ? new d() : f(this._alg))
            .update(this._opad)
            .update(e)
            .digest();
        }),
        (e.exports = function(e, t) {
          return 'rmd160' === (e = e.toLowerCase()) || 'ripemd160' === e
            ? new c('rmd160', t)
            : 'md5' === e
            ? new n(a, t)
            : new c(e, t);
        });
    },
    '../../node_modules/create-hmac/legacy.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/safe-buffer/index.js').Buffer,
        s = r('../../node_modules/cipher-base/index.js'),
        o = n.alloc(128);
      function a(e, t) {
        s.call(this, 'digest'),
          'string' == typeof t && (t = n.from(t)),
          (this._alg = e),
          (this._key = t),
          t.length > 64 ? (t = e(t)) : t.length < 64 && (t = n.concat([t, o], 64));
        for (
          var r = (this._ipad = n.allocUnsafe(64)),
            i = (this._opad = n.allocUnsafe(64)),
            a = 0;
          a < 64;
          a++
        )
          (r[a] = 54 ^ t[a]), (i[a] = 92 ^ t[a]);
        this._hash = [r];
      }
      i(a, s),
        (a.prototype._update = function(e) {
          this._hash.push(e);
        }),
        (a.prototype._final = function() {
          var e = this._alg(n.concat(this._hash));
          return this._alg(n.concat([this._opad, e]));
        }),
        (e.exports = a);
    },
    '../../node_modules/crypto-browserify/index.js': function(e, t, r) {
      'use strict';
      (t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = r(
        '../../node_modules/randombytes/browser.js'
      )),
        (t.createHash = t.Hash = r('../../node_modules/create-hash/browser.js')),
        (t.createHmac = t.Hmac = r('../../node_modules/create-hmac/browser.js'));
      var i = r('../../node_modules/browserify-sign/algos.js'),
        n = Object.keys(i),
        s = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(n);
      t.getHashes = function() {
        return s;
      };
      var o = r('../../node_modules/pbkdf2/browser.js');
      (t.pbkdf2 = o.pbkdf2), (t.pbkdf2Sync = o.pbkdf2Sync);
      var a = r('../../node_modules/browserify-cipher/browser.js');
      (t.Cipher = a.Cipher),
        (t.createCipher = a.createCipher),
        (t.Cipheriv = a.Cipheriv),
        (t.createCipheriv = a.createCipheriv),
        (t.Decipher = a.Decipher),
        (t.createDecipher = a.createDecipher),
        (t.Decipheriv = a.Decipheriv),
        (t.createDecipheriv = a.createDecipheriv),
        (t.getCiphers = a.getCiphers),
        (t.listCiphers = a.listCiphers);
      var d = r('../../node_modules/diffie-hellman/browser.js');
      (t.DiffieHellmanGroup = d.DiffieHellmanGroup),
        (t.createDiffieHellmanGroup = d.createDiffieHellmanGroup),
        (t.getDiffieHellman = d.getDiffieHellman),
        (t.createDiffieHellman = d.createDiffieHellman),
        (t.DiffieHellman = d.DiffieHellman);
      var f = r('../../node_modules/browserify-sign/browser/index.js');
      (t.createSign = f.createSign),
        (t.Sign = f.Sign),
        (t.createVerify = f.createVerify),
        (t.Verify = f.Verify),
        (t.createECDH = r('../../node_modules/create-ecdh/browser.js'));
      var h = r('../../node_modules/public-encrypt/browser.js');
      (t.publicEncrypt = h.publicEncrypt),
        (t.privateEncrypt = h.privateEncrypt),
        (t.publicDecrypt = h.publicDecrypt),
        (t.privateDecrypt = h.privateDecrypt);
      var c = r('../../node_modules/randomfill/browser.js');
      (t.randomFill = c.randomFill),
        (t.randomFillSync = c.randomFillSync),
        (t.createCredentials = function() {
          throw new Error(
            [
              'sorry, createCredentials is not implemented yet',
              'we accept pull requests',
              'https://github.com/crypto-browserify/crypto-browserify'
            ].join('\n')
          );
        }),
        (t.constants = {
          DH_CHECK_P_NOT_SAFE_PRIME: 2,
          DH_CHECK_P_NOT_PRIME: 1,
          DH_UNABLE_TO_CHECK_GENERATOR: 4,
          DH_NOT_SUITABLE_GENERATOR: 8,
          NPN_ENABLED: 1,
          ALPN_ENABLED: 1,
          RSA_PKCS1_PADDING: 1,
          RSA_SSLV23_PADDING: 2,
          RSA_NO_PADDING: 3,
          RSA_PKCS1_OAEP_PADDING: 4,
          RSA_X931_PADDING: 5,
          RSA_PKCS1_PSS_PADDING: 6,
          POINT_CONVERSION_COMPRESSED: 2,
          POINT_CONVERSION_UNCOMPRESSED: 4,
          POINT_CONVERSION_HYBRID: 6
        });
    },
    '../../node_modules/des.js/lib/des.js': function(e, t, r) {
      'use strict';
      (t.utils = r('../../node_modules/des.js/lib/des/utils.js')),
        (t.Cipher = r('../../node_modules/des.js/lib/des/cipher.js')),
        (t.DES = r('../../node_modules/des.js/lib/des/des.js')),
        (t.CBC = r('../../node_modules/des.js/lib/des/cbc.js')),
        (t.EDE = r('../../node_modules/des.js/lib/des/ede.js'));
    },
    '../../node_modules/des.js/lib/des/cbc.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/minimalistic-assert/index.js'),
        n = r('../../node_modules/inherits/inherits_browser.js'),
        s = {};
      function o(e) {
        i.equal(e.length, 8, 'Invalid IV length'), (this.iv = new Array(8));
        for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t];
      }
      (t.instantiate = function(e) {
        function t(t) {
          e.call(this, t), this._cbcInit();
        }
        n(t, e);
        for (var r = Object.keys(s), i = 0; i < r.length; i++) {
          var o = r[i];
          t.prototype[o] = s[o];
        }
        return (
          (t.create = function(e) {
            return new t(e);
          }),
          t
        );
      }),
        (s._cbcInit = function() {
          var e = new o(this.options.iv);
          this._cbcState = e;
        }),
        (s._update = function(e, t, r, i) {
          var n = this._cbcState,
            s = this.constructor.super_.prototype,
            o = n.iv;
          if ('encrypt' === this.type) {
            for (var a = 0; a < this.blockSize; a++) o[a] ^= e[t + a];
            s._update.call(this, o, 0, r, i);
            for (a = 0; a < this.blockSize; a++) o[a] = r[i + a];
          } else {
            s._update.call(this, e, t, r, i);
            for (a = 0; a < this.blockSize; a++) r[i + a] ^= o[a];
            for (a = 0; a < this.blockSize; a++) o[a] = e[t + a];
          }
        });
    },
    '../../node_modules/des.js/lib/des/cipher.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/minimalistic-assert/index.js');
      function n(e) {
        (this.options = e),
          (this.type = this.options.type),
          (this.blockSize = 8),
          this._init(),
          (this.buffer = new Array(this.blockSize)),
          (this.bufferOff = 0);
      }
      (e.exports = n),
        (n.prototype._init = function() {}),
        (n.prototype.update = function(e) {
          return 0 === e.length
            ? []
            : 'decrypt' === this.type
            ? this._updateDecrypt(e)
            : this._updateEncrypt(e);
        }),
        (n.prototype._buffer = function(e, t) {
          for (
            var r = Math.min(this.buffer.length - this.bufferOff, e.length - t), i = 0;
            i < r;
            i++
          )
            this.buffer[this.bufferOff + i] = e[t + i];
          return (this.bufferOff += r), r;
        }),
        (n.prototype._flushBuffer = function(e, t) {
          return this._update(this.buffer, 0, e, t), (this.bufferOff = 0), this.blockSize;
        }),
        (n.prototype._updateEncrypt = function(e) {
          var t = 0,
            r = 0,
            i = ((this.bufferOff + e.length) / this.blockSize) | 0,
            n = new Array(i * this.blockSize);
          0 !== this.bufferOff &&
            ((t += this._buffer(e, t)),
            this.bufferOff === this.buffer.length && (r += this._flushBuffer(n, r)));
          for (
            var s = e.length - ((e.length - t) % this.blockSize);
            t < s;
            t += this.blockSize
          )
            this._update(e, t, n, r), (r += this.blockSize);
          for (; t < e.length; t++, this.bufferOff++) this.buffer[this.bufferOff] = e[t];
          return n;
        }),
        (n.prototype._updateDecrypt = function(e) {
          for (
            var t = 0,
              r = 0,
              i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1,
              n = new Array(i * this.blockSize);
            i > 0;
            i--
          )
            (t += this._buffer(e, t)), (r += this._flushBuffer(n, r));
          return (t += this._buffer(e, t)), n;
        }),
        (n.prototype.final = function(e) {
          var t, r;
          return (
            e && (t = this.update(e)),
            (r = 'encrypt' === this.type ? this._finalEncrypt() : this._finalDecrypt()),
            t ? t.concat(r) : r
          );
        }),
        (n.prototype._pad = function(e, t) {
          if (0 === t) return !1;
          for (; t < e.length; ) e[t++] = 0;
          return !0;
        }),
        (n.prototype._finalEncrypt = function() {
          if (!this._pad(this.buffer, this.bufferOff)) return [];
          var e = new Array(this.blockSize);
          return this._update(this.buffer, 0, e, 0), e;
        }),
        (n.prototype._unpad = function(e) {
          return e;
        }),
        (n.prototype._finalDecrypt = function() {
          i.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt');
          var e = new Array(this.blockSize);
          return this._flushBuffer(e, 0), this._unpad(e);
        });
    },
    '../../node_modules/des.js/lib/des/des.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/minimalistic-assert/index.js'),
        n = r('../../node_modules/inherits/inherits_browser.js'),
        s = r('../../node_modules/des.js/lib/des/utils.js'),
        o = r('../../node_modules/des.js/lib/des/cipher.js');
      function a() {
        (this.tmp = new Array(2)), (this.keys = null);
      }
      function d(e) {
        o.call(this, e);
        var t = new a();
        (this._desState = t), this.deriveKeys(t, e.key);
      }
      n(d, o),
        (e.exports = d),
        (d.create = function(e) {
          return new d(e);
        });
      var f = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
      (d.prototype.deriveKeys = function(e, t) {
        (e.keys = new Array(32)), i.equal(t.length, this.blockSize, 'Invalid key length');
        var r = s.readUInt32BE(t, 0),
          n = s.readUInt32BE(t, 4);
        s.pc1(r, n, e.tmp, 0), (r = e.tmp[0]), (n = e.tmp[1]);
        for (var o = 0; o < e.keys.length; o += 2) {
          var a = f[o >>> 1];
          (r = s.r28shl(r, a)), (n = s.r28shl(n, a)), s.pc2(r, n, e.keys, o);
        }
      }),
        (d.prototype._update = function(e, t, r, i) {
          var n = this._desState,
            o = s.readUInt32BE(e, t),
            a = s.readUInt32BE(e, t + 4);
          s.ip(o, a, n.tmp, 0),
            (o = n.tmp[0]),
            (a = n.tmp[1]),
            'encrypt' === this.type
              ? this._encrypt(n, o, a, n.tmp, 0)
              : this._decrypt(n, o, a, n.tmp, 0),
            (o = n.tmp[0]),
            (a = n.tmp[1]),
            s.writeUInt32BE(r, o, i),
            s.writeUInt32BE(r, a, i + 4);
        }),
        (d.prototype._pad = function(e, t) {
          for (var r = e.length - t, i = t; i < e.length; i++) e[i] = r;
          return !0;
        }),
        (d.prototype._unpad = function(e) {
          for (var t = e[e.length - 1], r = e.length - t; r < e.length; r++)
            i.equal(e[r], t);
          return e.slice(0, e.length - t);
        }),
        (d.prototype._encrypt = function(e, t, r, i, n) {
          for (var o = t, a = r, d = 0; d < e.keys.length; d += 2) {
            var f = e.keys[d],
              h = e.keys[d + 1];
            s.expand(a, e.tmp, 0), (f ^= e.tmp[0]), (h ^= e.tmp[1]);
            var c = s.substitute(f, h),
              u = a;
            (a = (o ^ s.permute(c)) >>> 0), (o = u);
          }
          s.rip(a, o, i, n);
        }),
        (d.prototype._decrypt = function(e, t, r, i, n) {
          for (var o = r, a = t, d = e.keys.length - 2; d >= 0; d -= 2) {
            var f = e.keys[d],
              h = e.keys[d + 1];
            s.expand(o, e.tmp, 0), (f ^= e.tmp[0]), (h ^= e.tmp[1]);
            var c = s.substitute(f, h),
              u = o;
            (o = (a ^ s.permute(c)) >>> 0), (a = u);
          }
          s.rip(o, a, i, n);
        });
    },
    '../../node_modules/des.js/lib/des/ede.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/minimalistic-assert/index.js'),
        n = r('../../node_modules/inherits/inherits_browser.js'),
        s = r('../../node_modules/des.js/lib/des/cipher.js'),
        o = r('../../node_modules/des.js/lib/des/des.js');
      function a(e, t) {
        i.equal(t.length, 24, 'Invalid key length');
        var r = t.slice(0, 8),
          n = t.slice(8, 16),
          s = t.slice(16, 24);
        this.ciphers =
          'encrypt' === e
            ? [
                o.create({ type: 'encrypt', key: r }),
                o.create({ type: 'decrypt', key: n }),
                o.create({ type: 'encrypt', key: s })
              ]
            : [
                o.create({ type: 'decrypt', key: s }),
                o.create({ type: 'encrypt', key: n }),
                o.create({ type: 'decrypt', key: r })
              ];
      }
      function d(e) {
        s.call(this, e);
        var t = new a(this.type, this.options.key);
        this._edeState = t;
      }
      n(d, s),
        (e.exports = d),
        (d.create = function(e) {
          return new d(e);
        }),
        (d.prototype._update = function(e, t, r, i) {
          var n = this._edeState;
          n.ciphers[0]._update(e, t, r, i),
            n.ciphers[1]._update(r, i, r, i),
            n.ciphers[2]._update(r, i, r, i);
        }),
        (d.prototype._pad = o.prototype._pad),
        (d.prototype._unpad = o.prototype._unpad);
    },
    '../../node_modules/des.js/lib/des/utils.js': function(e, t, r) {
      'use strict';
      (t.readUInt32BE = function(e, t) {
        return ((e[0 + t] << 24) | (e[1 + t] << 16) | (e[2 + t] << 8) | e[3 + t]) >>> 0;
      }),
        (t.writeUInt32BE = function(e, t, r) {
          (e[0 + r] = t >>> 24),
            (e[1 + r] = (t >>> 16) & 255),
            (e[2 + r] = (t >>> 8) & 255),
            (e[3 + r] = 255 & t);
        }),
        (t.ip = function(e, t, r, i) {
          for (var n = 0, s = 0, o = 6; o >= 0; o -= 2) {
            for (var a = 0; a <= 24; a += 8) (n <<= 1), (n |= (t >>> (a + o)) & 1);
            for (a = 0; a <= 24; a += 8) (n <<= 1), (n |= (e >>> (a + o)) & 1);
          }
          for (o = 6; o >= 0; o -= 2) {
            for (a = 1; a <= 25; a += 8) (s <<= 1), (s |= (t >>> (a + o)) & 1);
            for (a = 1; a <= 25; a += 8) (s <<= 1), (s |= (e >>> (a + o)) & 1);
          }
          (r[i + 0] = n >>> 0), (r[i + 1] = s >>> 0);
        }),
        (t.rip = function(e, t, r, i) {
          for (var n = 0, s = 0, o = 0; o < 4; o++)
            for (var a = 24; a >= 0; a -= 8)
              (n <<= 1),
                (n |= (t >>> (a + o)) & 1),
                (n <<= 1),
                (n |= (e >>> (a + o)) & 1);
          for (o = 4; o < 8; o++)
            for (a = 24; a >= 0; a -= 8)
              (s <<= 1),
                (s |= (t >>> (a + o)) & 1),
                (s <<= 1),
                (s |= (e >>> (a + o)) & 1);
          (r[i + 0] = n >>> 0), (r[i + 1] = s >>> 0);
        }),
        (t.pc1 = function(e, t, r, i) {
          for (var n = 0, s = 0, o = 7; o >= 5; o--) {
            for (var a = 0; a <= 24; a += 8) (n <<= 1), (n |= (t >> (a + o)) & 1);
            for (a = 0; a <= 24; a += 8) (n <<= 1), (n |= (e >> (a + o)) & 1);
          }
          for (a = 0; a <= 24; a += 8) (n <<= 1), (n |= (t >> (a + o)) & 1);
          for (o = 1; o <= 3; o++) {
            for (a = 0; a <= 24; a += 8) (s <<= 1), (s |= (t >> (a + o)) & 1);
            for (a = 0; a <= 24; a += 8) (s <<= 1), (s |= (e >> (a + o)) & 1);
          }
          for (a = 0; a <= 24; a += 8) (s <<= 1), (s |= (e >> (a + o)) & 1);
          (r[i + 0] = n >>> 0), (r[i + 1] = s >>> 0);
        }),
        (t.r28shl = function(e, t) {
          return ((e << t) & 268435455) | (e >>> (28 - t));
        });
      var i = [
        14,
        11,
        17,
        4,
        27,
        23,
        25,
        0,
        13,
        22,
        7,
        18,
        5,
        9,
        16,
        24,
        2,
        20,
        12,
        21,
        1,
        8,
        15,
        26,
        15,
        4,
        25,
        19,
        9,
        1,
        26,
        16,
        5,
        11,
        23,
        8,
        12,
        7,
        17,
        0,
        22,
        3,
        10,
        14,
        6,
        20,
        27,
        24
      ];
      (t.pc2 = function(e, t, r, n) {
        for (var s = 0, o = 0, a = i.length >>> 1, d = 0; d < a; d++)
          (s <<= 1), (s |= (e >>> i[d]) & 1);
        for (d = a; d < i.length; d++) (o <<= 1), (o |= (t >>> i[d]) & 1);
        (r[n + 0] = s >>> 0), (r[n + 1] = o >>> 0);
      }),
        (t.expand = function(e, t, r) {
          var i = 0,
            n = 0;
          i = ((1 & e) << 5) | (e >>> 27);
          for (var s = 23; s >= 15; s -= 4) (i <<= 6), (i |= (e >>> s) & 63);
          for (s = 11; s >= 3; s -= 4) (n |= (e >>> s) & 63), (n <<= 6);
          (n |= ((31 & e) << 1) | (e >>> 31)), (t[r + 0] = i >>> 0), (t[r + 1] = n >>> 0);
        });
      var n = [
        14,
        0,
        4,
        15,
        13,
        7,
        1,
        4,
        2,
        14,
        15,
        2,
        11,
        13,
        8,
        1,
        3,
        10,
        10,
        6,
        6,
        12,
        12,
        11,
        5,
        9,
        9,
        5,
        0,
        3,
        7,
        8,
        4,
        15,
        1,
        12,
        14,
        8,
        8,
        2,
        13,
        4,
        6,
        9,
        2,
        1,
        11,
        7,
        15,
        5,
        12,
        11,
        9,
        3,
        7,
        14,
        3,
        10,
        10,
        0,
        5,
        6,
        0,
        13,
        15,
        3,
        1,
        13,
        8,
        4,
        14,
        7,
        6,
        15,
        11,
        2,
        3,
        8,
        4,
        14,
        9,
        12,
        7,
        0,
        2,
        1,
        13,
        10,
        12,
        6,
        0,
        9,
        5,
        11,
        10,
        5,
        0,
        13,
        14,
        8,
        7,
        10,
        11,
        1,
        10,
        3,
        4,
        15,
        13,
        4,
        1,
        2,
        5,
        11,
        8,
        6,
        12,
        7,
        6,
        12,
        9,
        0,
        3,
        5,
        2,
        14,
        15,
        9,
        10,
        13,
        0,
        7,
        9,
        0,
        14,
        9,
        6,
        3,
        3,
        4,
        15,
        6,
        5,
        10,
        1,
        2,
        13,
        8,
        12,
        5,
        7,
        14,
        11,
        12,
        4,
        11,
        2,
        15,
        8,
        1,
        13,
        1,
        6,
        10,
        4,
        13,
        9,
        0,
        8,
        6,
        15,
        9,
        3,
        8,
        0,
        7,
        11,
        4,
        1,
        15,
        2,
        14,
        12,
        3,
        5,
        11,
        10,
        5,
        14,
        2,
        7,
        12,
        7,
        13,
        13,
        8,
        14,
        11,
        3,
        5,
        0,
        6,
        6,
        15,
        9,
        0,
        10,
        3,
        1,
        4,
        2,
        7,
        8,
        2,
        5,
        12,
        11,
        1,
        12,
        10,
        4,
        14,
        15,
        9,
        10,
        3,
        6,
        15,
        9,
        0,
        0,
        6,
        12,
        10,
        11,
        1,
        7,
        13,
        13,
        8,
        15,
        9,
        1,
        4,
        3,
        5,
        14,
        11,
        5,
        12,
        2,
        7,
        8,
        2,
        4,
        14,
        2,
        14,
        12,
        11,
        4,
        2,
        1,
        12,
        7,
        4,
        10,
        7,
        11,
        13,
        6,
        1,
        8,
        5,
        5,
        0,
        3,
        15,
        15,
        10,
        13,
        3,
        0,
        9,
        14,
        8,
        9,
        6,
        4,
        11,
        2,
        8,
        1,
        12,
        11,
        7,
        10,
        1,
        13,
        14,
        7,
        2,
        8,
        13,
        15,
        6,
        9,
        15,
        12,
        0,
        5,
        9,
        6,
        10,
        3,
        4,
        0,
        5,
        14,
        3,
        12,
        10,
        1,
        15,
        10,
        4,
        15,
        2,
        9,
        7,
        2,
        12,
        6,
        9,
        8,
        5,
        0,
        6,
        13,
        1,
        3,
        13,
        4,
        14,
        14,
        0,
        7,
        11,
        5,
        3,
        11,
        8,
        9,
        4,
        14,
        3,
        15,
        2,
        5,
        12,
        2,
        9,
        8,
        5,
        12,
        15,
        3,
        10,
        7,
        11,
        0,
        14,
        4,
        1,
        10,
        7,
        1,
        6,
        13,
        0,
        11,
        8,
        6,
        13,
        4,
        13,
        11,
        0,
        2,
        11,
        14,
        7,
        15,
        4,
        0,
        9,
        8,
        1,
        13,
        10,
        3,
        14,
        12,
        3,
        9,
        5,
        7,
        12,
        5,
        2,
        10,
        15,
        6,
        8,
        1,
        6,
        1,
        6,
        4,
        11,
        11,
        13,
        13,
        8,
        12,
        1,
        3,
        4,
        7,
        10,
        14,
        7,
        10,
        9,
        15,
        5,
        6,
        0,
        8,
        15,
        0,
        14,
        5,
        2,
        9,
        3,
        2,
        12,
        13,
        1,
        2,
        15,
        8,
        13,
        4,
        8,
        6,
        10,
        15,
        3,
        11,
        7,
        1,
        4,
        10,
        12,
        9,
        5,
        3,
        6,
        14,
        11,
        5,
        0,
        0,
        14,
        12,
        9,
        7,
        2,
        7,
        2,
        11,
        1,
        4,
        14,
        1,
        7,
        9,
        4,
        12,
        10,
        14,
        8,
        2,
        13,
        0,
        15,
        6,
        12,
        10,
        9,
        13,
        0,
        15,
        3,
        3,
        5,
        5,
        6,
        8,
        11
      ];
      t.substitute = function(e, t) {
        for (var r = 0, i = 0; i < 4; i++) {
          (r <<= 4), (r |= n[64 * i + ((e >>> (18 - 6 * i)) & 63)]);
        }
        for (i = 0; i < 4; i++) {
          (r <<= 4), (r |= n[256 + 64 * i + ((t >>> (18 - 6 * i)) & 63)]);
        }
        return r >>> 0;
      };
      var s = [
        16,
        25,
        12,
        11,
        3,
        20,
        4,
        15,
        31,
        17,
        9,
        6,
        27,
        14,
        1,
        22,
        30,
        24,
        8,
        18,
        0,
        5,
        29,
        23,
        13,
        19,
        2,
        26,
        10,
        21,
        28,
        7
      ];
      (t.permute = function(e) {
        for (var t = 0, r = 0; r < s.length; r++) (t <<= 1), (t |= (e >>> s[r]) & 1);
        return t >>> 0;
      }),
        (t.padSplit = function(e, t, r) {
          for (var i = e.toString(2); i.length < t; ) i = '0' + i;
          for (var n = [], s = 0; s < t; s += r) n.push(i.slice(s, s + r));
          return n.join(' ');
        });
    },
    '../../node_modules/diffie-hellman/browser.js': function(e, t, r) {
      (function(e) {
        var i = r('../../node_modules/diffie-hellman/lib/generatePrime.js'),
          n = r('../../node_modules/diffie-hellman/lib/primes.json'),
          s = r('../../node_modules/diffie-hellman/lib/dh.js');
        var o = { binary: !0, hex: !0, base64: !0 };
        (t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function(
          t
        ) {
          var r = new e(n[t].prime, 'hex'),
            i = new e(n[t].gen, 'hex');
          return new s(r, i);
        }),
          (t.createDiffieHellman = t.DiffieHellman = function t(r, n, a, d) {
            return e.isBuffer(n) || void 0 === o[n]
              ? t(r, 'binary', n, a)
              : ((n = n || 'binary'),
                (d = d || 'binary'),
                (a = a || new e([2])),
                e.isBuffer(a) || (a = new e(a, d)),
                'number' == typeof r
                  ? new s(i(r, a), a, !0)
                  : (e.isBuffer(r) || (r = new e(r, n)), new s(r, a, !0)));
          });
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/diffie-hellman/lib/dh.js': function(e, t, r) {
      (function(t) {
        var i = r('../../node_modules/bn.js/lib/bn.js'),
          n = new (r('../../node_modules/miller-rabin/lib/mr.js'))(),
          s = new i(24),
          o = new i(11),
          a = new i(10),
          d = new i(3),
          f = new i(7),
          h = r('../../node_modules/diffie-hellman/lib/generatePrime.js'),
          c = r('../../node_modules/randombytes/browser.js');
        function u(e, r) {
          return (
            (r = r || 'utf8'),
            t.isBuffer(e) || (e = new t(e, r)),
            (this._pub = new i(e)),
            this
          );
        }
        function l(e, r) {
          return (
            (r = r || 'utf8'),
            t.isBuffer(e) || (e = new t(e, r)),
            (this._priv = new i(e)),
            this
          );
        }
        e.exports = p;
        var b = {};
        function p(e, t, r) {
          this.setGenerator(t),
            (this.__prime = new i(e)),
            (this._prime = i.mont(this.__prime)),
            (this._primeLen = e.length),
            (this._pub = void 0),
            (this._priv = void 0),
            (this._primeCode = void 0),
            r
              ? ((this.setPublicKey = u), (this.setPrivateKey = l))
              : (this._primeCode = 8);
        }
        function m(e, r) {
          var i = new t(e.toArray());
          return r ? i.toString(r) : i;
        }
        Object.defineProperty(p.prototype, 'verifyError', {
          enumerable: !0,
          get: function() {
            return (
              'number' != typeof this._primeCode &&
                (this._primeCode = (function(e, t) {
                  var r = t.toString('hex'),
                    i = [r, e.toString(16)].join('_');
                  if (i in b) return b[i];
                  var c,
                    u = 0;
                  if (e.isEven() || !h.simpleSieve || !h.fermatTest(e) || !n.test(e))
                    return (
                      (u += 1), (u += '02' === r || '05' === r ? 8 : 4), (b[i] = u), u
                    );
                  switch ((n.test(e.shrn(1)) || (u += 2), r)) {
                    case '02':
                      e.mod(s).cmp(o) && (u += 8);
                      break;
                    case '05':
                      (c = e.mod(a)).cmp(d) && c.cmp(f) && (u += 8);
                      break;
                    default:
                      u += 4;
                  }
                  return (b[i] = u), u;
                })(this.__prime, this.__gen)),
              this._primeCode
            );
          }
        }),
          (p.prototype.generateKeys = function() {
            return (
              this._priv || (this._priv = new i(c(this._primeLen))),
              (this._pub = this._gen
                .toRed(this._prime)
                .redPow(this._priv)
                .fromRed()),
              this.getPublicKey()
            );
          }),
          (p.prototype.computeSecret = function(e) {
            var r = (e = (e = new i(e)).toRed(this._prime)).redPow(this._priv).fromRed(),
              n = new t(r.toArray()),
              s = this.getPrime();
            if (n.length < s.length) {
              var o = new t(s.length - n.length);
              o.fill(0), (n = t.concat([o, n]));
            }
            return n;
          }),
          (p.prototype.getPublicKey = function(e) {
            return m(this._pub, e);
          }),
          (p.prototype.getPrivateKey = function(e) {
            return m(this._priv, e);
          }),
          (p.prototype.getPrime = function(e) {
            return m(this.__prime, e);
          }),
          (p.prototype.getGenerator = function(e) {
            return m(this._gen, e);
          }),
          (p.prototype.setGenerator = function(e, r) {
            return (
              (r = r || 'utf8'),
              t.isBuffer(e) || (e = new t(e, r)),
              (this.__gen = e),
              (this._gen = new i(e)),
              this
            );
          });
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/diffie-hellman/lib/generatePrime.js': function(e, t, r) {
      var i = r('../../node_modules/randombytes/browser.js');
      (e.exports = y), (y.simpleSieve = m), (y.fermatTest = _);
      var n = r('../../node_modules/bn.js/lib/bn.js'),
        s = new n(24),
        o = new (r('../../node_modules/miller-rabin/lib/mr.js'))(),
        a = new n(1),
        d = new n(2),
        f = new n(5),
        h = (new n(16), new n(8), new n(10)),
        c = new n(3),
        u = (new n(7), new n(11)),
        l = new n(4),
        b = (new n(12), null);
      function p() {
        if (null !== b) return b;
        var e = [];
        e[0] = 2;
        for (var t = 1, r = 3; r < 1048576; r += 2) {
          for (
            var i = Math.ceil(Math.sqrt(r)), n = 0;
            n < t && e[n] <= i && r % e[n] != 0;
            n++
          );
          (t !== n && e[n] <= i) || (e[t++] = r);
        }
        return (b = e), e;
      }
      function m(e) {
        for (var t = p(), r = 0; r < t.length; r++)
          if (0 === e.modn(t[r])) return 0 === e.cmpn(t[r]);
        return !0;
      }
      function _(e) {
        var t = n.mont(e);
        return (
          0 ===
          d
            .toRed(t)
            .redPow(e.subn(1))
            .fromRed()
            .cmpn(1)
        );
      }
      function y(e, t) {
        if (e < 16) return new n(2 === t || 5 === t ? [140, 123] : [140, 39]);
        var r, b;
        for (t = new n(t); ; ) {
          for (r = new n(i(Math.ceil(e / 8))); r.bitLength() > e; ) r.ishrn(1);
          if ((r.isEven() && r.iadd(a), r.testn(1) || r.iadd(d), t.cmp(d))) {
            if (!t.cmp(f)) for (; r.mod(h).cmp(c); ) r.iadd(l);
          } else for (; r.mod(s).cmp(u); ) r.iadd(l);
          if (m((b = r.shrn(1))) && m(r) && _(b) && _(r) && o.test(b) && o.test(r))
            return r;
        }
      }
    },
    '../../node_modules/diffie-hellman/lib/primes.json': function(e) {
      e.exports = JSON.parse(
        '{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}'
      );
    },
    '../../node_modules/elliptic/lib/elliptic.js': function(e, t, r) {
      'use strict';
      var i = t;
      (i.version = r('../../node_modules/elliptic/package.json').version),
        (i.utils = r('../../node_modules/elliptic/lib/elliptic/utils.js')),
        (i.rand = r('../../node_modules/brorand/index.js')),
        (i.curve = r('../../node_modules/elliptic/lib/elliptic/curve/index.js')),
        (i.curves = r('../../node_modules/elliptic/lib/elliptic/curves.js')),
        (i.ec = r('../../node_modules/elliptic/lib/elliptic/ec/index.js')),
        (i.eddsa = r('../../node_modules/elliptic/lib/elliptic/eddsa/index.js'));
    },
    '../../node_modules/elliptic/lib/elliptic/curve/base.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/bn.js/lib/bn.js'),
        n = r('../../node_modules/elliptic/lib/elliptic/utils.js'),
        s = n.getNAF,
        o = n.getJSF,
        a = n.assert;
      function d(e, t) {
        (this.type = e),
          (this.p = new i(t.p, 16)),
          (this.red = t.prime ? i.red(t.prime) : i.mont(this.p)),
          (this.zero = new i(0).toRed(this.red)),
          (this.one = new i(1).toRed(this.red)),
          (this.two = new i(2).toRed(this.red)),
          (this.n = t.n && new i(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function f(e, t) {
        (this.curve = e), (this.type = t), (this.precomputed = null);
      }
      (e.exports = d),
        (d.prototype.point = function() {
          throw new Error('Not implemented');
        }),
        (d.prototype.validate = function() {
          throw new Error('Not implemented');
        }),
        (d.prototype._fixedNafMul = function(e, t) {
          a(e.precomputed);
          var r = e._getDoubles(),
            i = s(t, 1, this._bitLength),
            n = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
          n /= 3;
          for (var o = [], d = 0; d < i.length; d += r.step) {
            var f = 0;
            for (t = d + r.step - 1; t >= d; t--) f = (f << 1) + i[t];
            o.push(f);
          }
          for (
            var h = this.jpoint(null, null, null),
              c = this.jpoint(null, null, null),
              u = n;
            u > 0;
            u--
          ) {
            for (d = 0; d < o.length; d++) {
              (f = o[d]) === u
                ? (c = c.mixedAdd(r.points[d]))
                : f === -u && (c = c.mixedAdd(r.points[d].neg()));
            }
            h = h.add(c);
          }
          return h.toP();
        }),
        (d.prototype._wnafMul = function(e, t) {
          var r = 4,
            i = e._getNAFPoints(r);
          r = i.wnd;
          for (
            var n = i.points,
              o = s(t, r, this._bitLength),
              d = this.jpoint(null, null, null),
              f = o.length - 1;
            f >= 0;
            f--
          ) {
            for (t = 0; f >= 0 && 0 === o[f]; f--) t++;
            if ((f >= 0 && t++, (d = d.dblp(t)), f < 0)) break;
            var h = o[f];
            a(0 !== h),
              (d =
                'affine' === e.type
                  ? h > 0
                    ? d.mixedAdd(n[(h - 1) >> 1])
                    : d.mixedAdd(n[(-h - 1) >> 1].neg())
                  : h > 0
                  ? d.add(n[(h - 1) >> 1])
                  : d.add(n[(-h - 1) >> 1].neg()));
          }
          return 'affine' === e.type ? d.toP() : d;
        }),
        (d.prototype._wnafMulAdd = function(e, t, r, i, n) {
          for (
            var a = this._wnafT1, d = this._wnafT2, f = this._wnafT3, h = 0, c = 0;
            c < i;
            c++
          ) {
            var u = (x = t[c])._getNAFPoints(e);
            (a[c] = u.wnd), (d[c] = u.points);
          }
          for (c = i - 1; c >= 1; c -= 2) {
            var l = c - 1,
              b = c;
            if (1 === a[l] && 1 === a[b]) {
              var p = [t[l], null, null, t[b]];
              0 === t[l].y.cmp(t[b].y)
                ? ((p[1] = t[l].add(t[b])), (p[2] = t[l].toJ().mixedAdd(t[b].neg())))
                : 0 === t[l].y.cmp(t[b].y.redNeg())
                ? ((p[1] = t[l].toJ().mixedAdd(t[b])), (p[2] = t[l].add(t[b].neg())))
                : ((p[1] = t[l].toJ().mixedAdd(t[b])),
                  (p[2] = t[l].toJ().mixedAdd(t[b].neg())));
              var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                _ = o(r[l], r[b]);
              (h = Math.max(_[0].length, h)),
                (f[l] = new Array(h)),
                (f[b] = new Array(h));
              for (var y = 0; y < h; y++) {
                var g = 0 | _[0][y],
                  v = 0 | _[1][y];
                (f[l][y] = m[3 * (g + 1) + (v + 1)]), (f[b][y] = 0), (d[l] = p);
              }
            } else
              (f[l] = s(r[l], a[l], this._bitLength)),
                (f[b] = s(r[b], a[b], this._bitLength)),
                (h = Math.max(f[l].length, h)),
                (h = Math.max(f[b].length, h));
          }
          var w = this.jpoint(null, null, null),
            j = this._wnafT4;
          for (c = h; c >= 0; c--) {
            for (var S = 0; c >= 0; ) {
              var M = !0;
              for (y = 0; y < i; y++) (j[y] = 0 | f[y][c]), 0 !== j[y] && (M = !1);
              if (!M) break;
              S++, c--;
            }
            if ((c >= 0 && S++, (w = w.dblp(S)), c < 0)) break;
            for (y = 0; y < i; y++) {
              var x,
                k = j[y];
              0 !== k &&
                (k > 0
                  ? (x = d[y][(k - 1) >> 1])
                  : k < 0 && (x = d[y][(-k - 1) >> 1].neg()),
                (w = 'affine' === x.type ? w.mixedAdd(x) : w.add(x)));
            }
          }
          for (c = 0; c < i; c++) d[c] = null;
          return n ? w : w.toP();
        }),
        (d.BasePoint = f),
        (f.prototype.eq = function() {
          throw new Error('Not implemented');
        }),
        (f.prototype.validate = function() {
          return this.curve.validate(this);
        }),
        (d.prototype.decodePoint = function(e, t) {
          e = n.toArray(e, t);
          var r = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return (
              6 === e[0]
                ? a(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && a(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw new Error('Unknown point format');
        }),
        (f.prototype.encodeCompressed = function(e) {
          return this.encode(e, !0);
        }),
        (f.prototype._encode = function(e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray('be', t);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray('be', t));
        }),
        (f.prototype.encode = function(e, t) {
          return n.encode(this._encode(t), e);
        }),
        (f.prototype.precompute = function(e) {
          if (this.precomputed) return this;
          var t = { doubles: null, naf: null, beta: null };
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          );
        }),
        (f.prototype._hasDoubles = function(e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
        }),
        (f.prototype._getDoubles = function(e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], i = this, n = 0; n < t; n += e) {
            for (var s = 0; s < e; s++) i = i.dbl();
            r.push(i);
          }
          return { step: e, points: r };
        }),
        (f.prototype._getNAFPoints = function(e) {
          if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
          for (
            var t = [this], r = (1 << e) - 1, i = 1 === r ? null : this.dbl(), n = 1;
            n < r;
            n++
          )
            t[n] = t[n - 1].add(i);
          return { wnd: e, points: t };
        }),
        (f.prototype._getBeta = function() {
          return null;
        }),
        (f.prototype.dblp = function(e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        });
    },
    '../../node_modules/elliptic/lib/elliptic/curve/edwards.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/elliptic/lib/elliptic/utils.js'),
        n = r('../../node_modules/bn.js/lib/bn.js'),
        s = r('../../node_modules/inherits/inherits_browser.js'),
        o = r('../../node_modules/elliptic/lib/elliptic/curve/base.js'),
        a = i.assert;
      function d(e) {
        (this.twisted = 1 != (0 | e.a)),
          (this.mOneA = this.twisted && -1 == (0 | e.a)),
          (this.extended = this.mOneA),
          o.call(this, 'edwards', e),
          (this.a = new n(e.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new n(e.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new n(e.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          a(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 == (0 | e.c));
      }
      function f(e, t, r, i, s) {
        o.BasePoint.call(this, e, 'projective'),
          null === t && null === r && null === i
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new n(t, 16)),
              (this.y = new n(r, 16)),
              (this.z = i ? new n(i, 16) : this.curve.one),
              (this.t = s && new n(s, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }
      s(d, o),
        (e.exports = d),
        (d.prototype._mulA = function(e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e);
        }),
        (d.prototype._mulC = function(e) {
          return this.oneC ? e : this.c.redMul(e);
        }),
        (d.prototype.jpoint = function(e, t, r, i) {
          return this.point(e, t, r, i);
        }),
        (d.prototype.pointFromX = function(e, t) {
          (e = new n(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
            i = this.c2.redSub(this.a.redMul(r)),
            s = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            o = i.redMul(s.redInvm()),
            a = o.redSqrt();
          if (
            0 !==
            a
              .redSqr()
              .redSub(o)
              .cmp(this.zero)
          )
            throw new Error('invalid point');
          var d = a.fromRed().isOdd();
          return ((t && !d) || (!t && d)) && (a = a.redNeg()), this.point(e, a);
        }),
        (d.prototype.pointFromY = function(e, t) {
          (e = new n(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
            i = r.redSub(this.c2),
            s = r
              .redMul(this.d)
              .redMul(this.c2)
              .redSub(this.a),
            o = i.redMul(s.redInvm());
          if (0 === o.cmp(this.zero)) {
            if (t) throw new Error('invalid point');
            return this.point(this.zero, e);
          }
          var a = o.redSqrt();
          if (
            0 !==
            a
              .redSqr()
              .redSub(o)
              .cmp(this.zero)
          )
            throw new Error('invalid point');
          return a.fromRed().isOdd() !== t && (a = a.redNeg()), this.point(a, e);
        }),
        (d.prototype.validate = function(e) {
          if (e.isInfinity()) return !0;
          e.normalize();
          var t = e.x.redSqr(),
            r = e.y.redSqr(),
            i = t.redMul(this.a).redAdd(r),
            n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
          return 0 === i.cmp(n);
        }),
        s(f, o.BasePoint),
        (d.prototype.pointFromJSON = function(e) {
          return f.fromJSON(this, e);
        }),
        (d.prototype.point = function(e, t, r, i) {
          return new f(this, e, t, r, i);
        }),
        (f.fromJSON = function(e, t) {
          return new f(e, t[0], t[1], t[2]);
        }),
        (f.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>';
        }),
        (f.prototype.isInfinity = function() {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) || (this.zOne && 0 === this.y.cmp(this.curve.c)))
          );
        }),
        (f.prototype._extDbl = function() {
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr();
          r = r.redIAdd(r);
          var i = this.curve._mulA(e),
            n = this.x
              .redAdd(this.y)
              .redSqr()
              .redISub(e)
              .redISub(t),
            s = i.redAdd(t),
            o = s.redSub(r),
            a = i.redSub(t),
            d = n.redMul(o),
            f = s.redMul(a),
            h = n.redMul(a),
            c = o.redMul(s);
          return this.curve.point(d, f, c, h);
        }),
        (f.prototype._projDbl = function() {
          var e,
            t,
            r,
            i = this.x.redAdd(this.y).redSqr(),
            n = this.x.redSqr(),
            s = this.y.redSqr();
          if (this.curve.twisted) {
            var o = (f = this.curve._mulA(n)).redAdd(s);
            if (this.zOne)
              (e = i
                .redSub(n)
                .redSub(s)
                .redMul(o.redSub(this.curve.two))),
                (t = o.redMul(f.redSub(s))),
                (r = o
                  .redSqr()
                  .redSub(o)
                  .redSub(o));
            else {
              var a = this.z.redSqr(),
                d = o.redSub(a).redISub(a);
              (e = i
                .redSub(n)
                .redISub(s)
                .redMul(d)),
                (t = o.redMul(f.redSub(s))),
                (r = o.redMul(d));
            }
          } else {
            var f = n.redAdd(s);
            (a = this.curve._mulC(this.z).redSqr()), (d = f.redSub(a).redSub(a));
            (e = this.curve._mulC(i.redISub(f)).redMul(d)),
              (t = this.curve._mulC(f).redMul(n.redISub(s))),
              (r = f.redMul(d));
          }
          return this.curve.point(e, t, r);
        }),
        (f.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl();
        }),
        (f.prototype._extAdd = function(e) {
          var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            i = this.t.redMul(this.curve.dd).redMul(e.t),
            n = this.z.redMul(e.z.redAdd(e.z)),
            s = r.redSub(t),
            o = n.redSub(i),
            a = n.redAdd(i),
            d = r.redAdd(t),
            f = s.redMul(o),
            h = a.redMul(d),
            c = s.redMul(d),
            u = o.redMul(a);
          return this.curve.point(f, h, u, c);
        }),
        (f.prototype._projAdd = function(e) {
          var t,
            r,
            i = this.z.redMul(e.z),
            n = i.redSqr(),
            s = this.x.redMul(e.x),
            o = this.y.redMul(e.y),
            a = this.curve.d.redMul(s).redMul(o),
            d = n.redSub(a),
            f = n.redAdd(a),
            h = this.x
              .redAdd(this.y)
              .redMul(e.x.redAdd(e.y))
              .redISub(s)
              .redISub(o),
            c = i.redMul(d).redMul(h);
          return (
            this.curve.twisted
              ? ((t = i.redMul(f).redMul(o.redSub(this.curve._mulA(s)))),
                (r = d.redMul(f)))
              : ((t = i.redMul(f).redMul(o.redSub(s))),
                (r = this.curve._mulC(d).redMul(f))),
            this.curve.point(c, t, r)
          );
        }),
        (f.prototype.add = function(e) {
          return this.isInfinity()
            ? e
            : e.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(e)
            : this._projAdd(e);
        }),
        (f.prototype.mul = function(e) {
          return this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve._wnafMul(this, e);
        }),
        (f.prototype.mulAdd = function(e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
        }),
        (f.prototype.jmulAdd = function(e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
        }),
        (f.prototype.normalize = function() {
          if (this.zOne) return this;
          var e = this.z.redInvm();
          return (
            (this.x = this.x.redMul(e)),
            (this.y = this.y.redMul(e)),
            this.t && (this.t = this.t.redMul(e)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (f.prototype.neg = function() {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          );
        }),
        (f.prototype.getX = function() {
          return this.normalize(), this.x.fromRed();
        }),
        (f.prototype.getY = function() {
          return this.normalize(), this.y.fromRed();
        }),
        (f.prototype.eq = function(e) {
          return (
            this === e ||
            (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()))
          );
        }),
        (f.prototype.eqXToP = function(e) {
          var t = e.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(t)) return !0;
          for (var r = e.clone(), i = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(i), 0 === this.x.cmp(t))) return !0;
          }
        }),
        (f.prototype.toP = f.prototype.normalize),
        (f.prototype.mixedAdd = f.prototype.add);
    },
    '../../node_modules/elliptic/lib/elliptic/curve/index.js': function(e, t, r) {
      'use strict';
      var i = t;
      (i.base = r('../../node_modules/elliptic/lib/elliptic/curve/base.js')),
        (i.short = r('../../node_modules/elliptic/lib/elliptic/curve/short.js')),
        (i.mont = r('../../node_modules/elliptic/lib/elliptic/curve/mont.js')),
        (i.edwards = r('../../node_modules/elliptic/lib/elliptic/curve/edwards.js'));
    },
    '../../node_modules/elliptic/lib/elliptic/curve/mont.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/bn.js/lib/bn.js'),
        n = r('../../node_modules/inherits/inherits_browser.js'),
        s = r('../../node_modules/elliptic/lib/elliptic/curve/base.js'),
        o = r('../../node_modules/elliptic/lib/elliptic/utils.js');
      function a(e) {
        s.call(this, 'mont', e),
          (this.a = new i(e.a, 16).toRed(this.red)),
          (this.b = new i(e.b, 16).toRed(this.red)),
          (this.i4 = new i(4).toRed(this.red).redInvm()),
          (this.two = new i(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
      }
      function d(e, t, r) {
        s.BasePoint.call(this, e, 'projective'),
          null === t && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new i(t, 16)),
              (this.z = new i(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }
      n(a, s),
        (e.exports = a),
        (a.prototype.validate = function(e) {
          var t = e.normalize().x,
            r = t.redSqr(),
            i = r
              .redMul(t)
              .redAdd(r.redMul(this.a))
              .redAdd(t);
          return (
            0 ===
            i
              .redSqrt()
              .redSqr()
              .cmp(i)
          );
        }),
        n(d, s.BasePoint),
        (a.prototype.decodePoint = function(e, t) {
          return this.point(o.toArray(e, t), 1);
        }),
        (a.prototype.point = function(e, t) {
          return new d(this, e, t);
        }),
        (a.prototype.pointFromJSON = function(e) {
          return d.fromJSON(this, e);
        }),
        (d.prototype.precompute = function() {}),
        (d.prototype._encode = function() {
          return this.getX().toArray('be', this.curve.p.byteLength());
        }),
        (d.fromJSON = function(e, t) {
          return new d(e, t[0], t[1] || e.one);
        }),
        (d.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>';
        }),
        (d.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0);
        }),
        (d.prototype.dbl = function() {
          var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            r = e.redSub(t),
            i = e.redMul(t),
            n = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
          return this.curve.point(i, n);
        }),
        (d.prototype.add = function() {
          throw new Error('Not supported on Montgomery curve');
        }),
        (d.prototype.diffAdd = function(e, t) {
          var r = this.x.redAdd(this.z),
            i = this.x.redSub(this.z),
            n = e.x.redAdd(e.z),
            s = e.x.redSub(e.z).redMul(r),
            o = n.redMul(i),
            a = t.z.redMul(s.redAdd(o).redSqr()),
            d = t.x.redMul(s.redISub(o).redSqr());
          return this.curve.point(a, d);
        }),
        (d.prototype.mul = function(e) {
          for (
            var t = e.clone(), r = this, i = this.curve.point(null, null), n = [];
            0 !== t.cmpn(0);
            t.iushrn(1)
          )
            n.push(t.andln(1));
          for (var s = n.length - 1; s >= 0; s--)
            0 === n[s]
              ? ((r = r.diffAdd(i, this)), (i = i.dbl()))
              : ((i = r.diffAdd(i, this)), (r = r.dbl()));
          return i;
        }),
        (d.prototype.mulAdd = function() {
          throw new Error('Not supported on Montgomery curve');
        }),
        (d.prototype.jumlAdd = function() {
          throw new Error('Not supported on Montgomery curve');
        }),
        (d.prototype.eq = function(e) {
          return 0 === this.getX().cmp(e.getX());
        }),
        (d.prototype.normalize = function() {
          return (
            (this.x = this.x.redMul(this.z.redInvm())), (this.z = this.curve.one), this
          );
        }),
        (d.prototype.getX = function() {
          return this.normalize(), this.x.fromRed();
        });
    },
    '../../node_modules/elliptic/lib/elliptic/curve/short.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/elliptic/lib/elliptic/utils.js'),
        n = r('../../node_modules/bn.js/lib/bn.js'),
        s = r('../../node_modules/inherits/inherits_browser.js'),
        o = r('../../node_modules/elliptic/lib/elliptic/curve/base.js'),
        a = i.assert;
      function d(e) {
        o.call(this, 'short', e),
          (this.a = new n(e.a, 16).toRed(this.red)),
          (this.b = new n(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA =
            0 ===
            this.a
              .fromRed()
              .sub(this.p)
              .cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      function f(e, t, r, i) {
        o.BasePoint.call(this, e, 'affine'),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new n(t, 16)),
              (this.y = new n(r, 16)),
              i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function h(e, t, r, i) {
        o.BasePoint.call(this, e, 'jacobian'),
          null === t && null === r && null === i
            ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new n(0)))
            : ((this.x = new n(t, 16)), (this.y = new n(r, 16)), (this.z = new n(i, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      s(d, o),
        (e.exports = d),
        (d.prototype._getEndomorphism = function(e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r;
            if (e.beta) t = new n(e.beta, 16).toRed(this.red);
            else {
              var i = this._getEndoRoots(this.p);
              t = (t = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red);
            }
            if (e.lambda) r = new n(e.lambda, 16);
            else {
              var s = this._getEndoRoots(this.n);
              0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(t))
                ? (r = s[0])
                : ((r = s[1]), a(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return {
              beta: t,
              lambda: r,
              basis: e.basis
                ? e.basis.map(function(e) {
                    return { a: new n(e.a, 16), b: new n(e.b, 16) };
                  })
                : this._getEndoBasis(r)
            };
          }
        }),
        (d.prototype._getEndoRoots = function(e) {
          var t = e === this.p ? this.red : n.mont(e),
            r = new n(2).toRed(t).redInvm(),
            i = r.redNeg(),
            s = new n(3)
              .toRed(t)
              .redNeg()
              .redSqrt()
              .redMul(r);
          return [i.redAdd(s).fromRed(), i.redSub(s).fromRed()];
        }),
        (d.prototype._getEndoBasis = function(e) {
          for (
            var t,
              r,
              i,
              s,
              o,
              a,
              d,
              f,
              h,
              c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              u = e,
              l = this.n.clone(),
              b = new n(1),
              p = new n(0),
              m = new n(0),
              _ = new n(1),
              y = 0;
            0 !== u.cmpn(0);

          ) {
            var g = l.div(u);
            (f = l.sub(g.mul(u))), (h = m.sub(g.mul(b)));
            var v = _.sub(g.mul(p));
            if (!i && f.cmp(c) < 0) (t = d.neg()), (r = b), (i = f.neg()), (s = h);
            else if (i && 2 == ++y) break;
            (d = f), (l = u), (u = f), (m = b), (b = h), (_ = p), (p = v);
          }
          (o = f.neg()), (a = h);
          var w = i.sqr().add(s.sqr());
          return (
            o
              .sqr()
              .add(a.sqr())
              .cmp(w) >= 0 && ((o = t), (a = r)),
            i.negative && ((i = i.neg()), (s = s.neg())),
            o.negative && ((o = o.neg()), (a = a.neg())),
            [
              { a: i, b: s },
              { a: o, b: a }
            ]
          );
        }),
        (d.prototype._endoSplit = function(e) {
          var t = this.endo.basis,
            r = t[0],
            i = t[1],
            n = i.b.mul(e).divRound(this.n),
            s = r.b
              .neg()
              .mul(e)
              .divRound(this.n),
            o = n.mul(r.a),
            a = s.mul(i.a),
            d = n.mul(r.b),
            f = s.mul(i.b);
          return { k1: e.sub(o).sub(a), k2: d.add(f).neg() };
        }),
        (d.prototype.pointFromX = function(e, t) {
          (e = new n(e, 16)).red || (e = e.toRed(this.red));
          var r = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            i = r.redSqrt();
          if (
            0 !==
            i
              .redSqr()
              .redSub(r)
              .cmp(this.zero)
          )
            throw new Error('invalid point');
          var s = i.fromRed().isOdd();
          return ((t && !s) || (!t && s)) && (i = i.redNeg()), this.point(e, i);
        }),
        (d.prototype.validate = function(e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            i = this.a.redMul(t),
            n = t
              .redSqr()
              .redMul(t)
              .redIAdd(i)
              .redIAdd(this.b);
          return (
            0 ===
            r
              .redSqr()
              .redISub(n)
              .cmpn(0)
          );
        }),
        (d.prototype._endoWnafMulAdd = function(e, t, r) {
          for (var i = this._endoWnafT1, n = this._endoWnafT2, s = 0; s < e.length; s++) {
            var o = this._endoSplit(t[s]),
              a = e[s],
              d = a._getBeta();
            o.k1.negative && (o.k1.ineg(), (a = a.neg(!0))),
              o.k2.negative && (o.k2.ineg(), (d = d.neg(!0))),
              (i[2 * s] = a),
              (i[2 * s + 1] = d),
              (n[2 * s] = o.k1),
              (n[2 * s + 1] = o.k2);
          }
          for (var f = this._wnafMulAdd(1, i, n, 2 * s, r), h = 0; h < 2 * s; h++)
            (i[h] = null), (n[h] = null);
          return f;
        }),
        s(f, o.BasePoint),
        (d.prototype.point = function(e, t, r) {
          return new f(this, e, t, r);
        }),
        (d.prototype.pointFromJSON = function(e, t) {
          return f.fromJSON(this, e, t);
        }),
        (f.prototype._getBeta = function() {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
              var r = this.curve,
                i = function(e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y);
                };
              (e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(i) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(i)
                  }
                });
            }
            return t;
          }
        }),
        (f.prototype.toJSON = function() {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                  }
                }
              ]
            : [this.x, this.y];
        }),
        (f.fromJSON = function(e, t, r) {
          'string' == typeof t && (t = JSON.parse(t));
          var i = e.point(t[0], t[1], r);
          if (!t[2]) return i;
          function n(t) {
            return e.point(t[0], t[1], r);
          }
          var s = t[2];
          return (
            (i.precomputed = {
              beta: null,
              doubles: s.doubles && {
                step: s.doubles.step,
                points: [i].concat(s.doubles.points.map(n))
              },
              naf: s.naf && { wnd: s.naf.wnd, points: [i].concat(s.naf.points.map(n)) }
            }),
            i
          );
        }),
        (f.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                '>';
        }),
        (f.prototype.isInfinity = function() {
          return this.inf;
        }),
        (f.prototype.add = function(e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e)) return this.curve.point(null, null);
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t
              .redSqr()
              .redISub(this.x)
              .redISub(e.x),
            i = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, i);
        }),
        (f.prototype.dbl = function() {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
            r = this.x.redSqr(),
            i = e.redInvm(),
            n = r
              .redAdd(r)
              .redIAdd(r)
              .redIAdd(t)
              .redMul(i),
            s = n.redSqr().redISub(this.x.redAdd(this.x)),
            o = n.redMul(this.x.redSub(s)).redISub(this.y);
          return this.curve.point(s, o);
        }),
        (f.prototype.getX = function() {
          return this.x.fromRed();
        }),
        (f.prototype.getY = function() {
          return this.y.fromRed();
        }),
        (f.prototype.mul = function(e) {
          return (
            (e = new n(e, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [e])
              : this.curve._wnafMul(this, e)
          );
        }),
        (f.prototype.mulAdd = function(e, t, r) {
          var i = [this, t],
            n = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n)
            : this.curve._wnafMulAdd(1, i, n, 2);
        }),
        (f.prototype.jmulAdd = function(e, t, r) {
          var i = [this, t],
            n = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n, !0)
            : this.curve._wnafMulAdd(1, i, n, 2, !0);
        }),
        (f.prototype.eq = function(e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (f.prototype.neg = function(e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var r = this.precomputed,
              i = function(e) {
                return e.neg();
              };
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(i)
              }
            };
          }
          return t;
        }),
        (f.prototype.toJ = function() {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        s(h, o.BasePoint),
        (d.prototype.jpoint = function(e, t, r) {
          return new h(this, e, t, r);
        }),
        (h.prototype.toP = function() {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            i = this.y.redMul(t).redMul(e);
          return this.curve.point(r, i);
        }),
        (h.prototype.neg = function() {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (h.prototype.add = function(e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(t),
            n = e.x.redMul(r),
            s = this.y.redMul(t.redMul(e.z)),
            o = e.y.redMul(r.redMul(this.z)),
            a = i.redSub(n),
            d = s.redSub(o);
          if (0 === a.cmpn(0))
            return 0 !== d.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var f = a.redSqr(),
            h = f.redMul(a),
            c = i.redMul(f),
            u = d
              .redSqr()
              .redIAdd(h)
              .redISub(c)
              .redISub(c),
            l = d.redMul(c.redISub(u)).redISub(s.redMul(h)),
            b = this.z.redMul(e.z).redMul(a);
          return this.curve.jpoint(u, l, b);
        }),
        (h.prototype.mixedAdd = function(e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
            r = this.x,
            i = e.x.redMul(t),
            n = this.y,
            s = e.y.redMul(t).redMul(this.z),
            o = r.redSub(i),
            a = n.redSub(s);
          if (0 === o.cmpn(0))
            return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var d = o.redSqr(),
            f = d.redMul(o),
            h = r.redMul(d),
            c = a
              .redSqr()
              .redIAdd(f)
              .redISub(h)
              .redISub(h),
            u = a.redMul(h.redISub(c)).redISub(n.redMul(f)),
            l = this.z.redMul(o);
          return this.curve.jpoint(c, u, l);
        }),
        (h.prototype.dblp = function(e) {
          if (0 === e) return this;
          if (this.isInfinity()) return this;
          if (!e) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            for (var t = this, r = 0; r < e; r++) t = t.dbl();
            return t;
          }
          var i = this.curve.a,
            n = this.curve.tinv,
            s = this.x,
            o = this.y,
            a = this.z,
            d = a.redSqr().redSqr(),
            f = o.redAdd(o);
          for (r = 0; r < e; r++) {
            var h = s.redSqr(),
              c = f.redSqr(),
              u = c.redSqr(),
              l = h
                .redAdd(h)
                .redIAdd(h)
                .redIAdd(i.redMul(d)),
              b = s.redMul(c),
              p = l.redSqr().redISub(b.redAdd(b)),
              m = b.redISub(p),
              _ = l.redMul(m);
            _ = _.redIAdd(_).redISub(u);
            var y = f.redMul(a);
            r + 1 < e && (d = d.redMul(u)), (s = p), (a = y), (f = _);
          }
          return this.curve.jpoint(s, f.redMul(n), a);
        }),
        (h.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (h.prototype._zeroDbl = function() {
          var e, t, r;
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              s = n.redSqr(),
              o = this.x
                .redAdd(n)
                .redSqr()
                .redISub(i)
                .redISub(s);
            o = o.redIAdd(o);
            var a = i.redAdd(i).redIAdd(i),
              d = a
                .redSqr()
                .redISub(o)
                .redISub(o),
              f = s.redIAdd(s);
            (f = (f = f.redIAdd(f)).redIAdd(f)),
              (e = d),
              (t = a.redMul(o.redISub(d)).redISub(f)),
              (r = this.y.redAdd(this.y));
          } else {
            var h = this.x.redSqr(),
              c = this.y.redSqr(),
              u = c.redSqr(),
              l = this.x
                .redAdd(c)
                .redSqr()
                .redISub(h)
                .redISub(u);
            l = l.redIAdd(l);
            var b = h.redAdd(h).redIAdd(h),
              p = b.redSqr(),
              m = u.redIAdd(u);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = p.redISub(l).redISub(l)),
              (t = b.redMul(l.redISub(e)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (h.prototype._threeDbl = function() {
          var e, t, r;
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              s = n.redSqr(),
              o = this.x
                .redAdd(n)
                .redSqr()
                .redISub(i)
                .redISub(s);
            o = o.redIAdd(o);
            var a = i
                .redAdd(i)
                .redIAdd(i)
                .redIAdd(this.curve.a),
              d = a
                .redSqr()
                .redISub(o)
                .redISub(o);
            e = d;
            var f = s.redIAdd(s);
            (f = (f = f.redIAdd(f)).redIAdd(f)),
              (t = a.redMul(o.redISub(d)).redISub(f)),
              (r = this.y.redAdd(this.y));
          } else {
            var h = this.z.redSqr(),
              c = this.y.redSqr(),
              u = this.x.redMul(c),
              l = this.x.redSub(h).redMul(this.x.redAdd(h));
            l = l.redAdd(l).redIAdd(l);
            var b = u.redIAdd(u),
              p = (b = b.redIAdd(b)).redAdd(b);
            (e = l.redSqr().redISub(p)),
              (r = this.y
                .redAdd(this.z)
                .redSqr()
                .redISub(c)
                .redISub(h));
            var m = c.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (t = l.redMul(b.redISub(e)).redISub(m));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (h.prototype._dbl = function() {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            i = this.z,
            n = i.redSqr().redSqr(),
            s = t.redSqr(),
            o = r.redSqr(),
            a = s
              .redAdd(s)
              .redIAdd(s)
              .redIAdd(e.redMul(n)),
            d = t.redAdd(t),
            f = (d = d.redIAdd(d)).redMul(o),
            h = a.redSqr().redISub(f.redAdd(f)),
            c = f.redISub(h),
            u = o.redSqr();
          u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
          var l = a.redMul(c).redISub(u),
            b = r.redAdd(r).redMul(i);
          return this.curve.jpoint(h, l, b);
        }),
        (h.prototype.trpl = function() {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            i = t.redSqr(),
            n = e.redAdd(e).redIAdd(e),
            s = n.redSqr(),
            o = this.x
              .redAdd(t)
              .redSqr()
              .redISub(e)
              .redISub(i),
            a = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(s)).redSqr(),
            d = i.redIAdd(i);
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var f = n
              .redIAdd(o)
              .redSqr()
              .redISub(s)
              .redISub(a)
              .redISub(d),
            h = t.redMul(f);
          h = (h = h.redIAdd(h)).redIAdd(h);
          var c = this.x.redMul(a).redISub(h);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var u = this.y.redMul(f.redMul(d.redISub(f)).redISub(o.redMul(a)));
          u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
          var l = this.z
            .redAdd(o)
            .redSqr()
            .redISub(r)
            .redISub(a);
          return this.curve.jpoint(c, u, l);
        }),
        (h.prototype.mul = function(e, t) {
          return (e = new n(e, t)), this.curve._wnafMul(this, e);
        }),
        (h.prototype.eq = function(e) {
          if ('affine' === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (
            0 !==
            this.x
              .redMul(r)
              .redISub(e.x.redMul(t))
              .cmpn(0)
          )
            return !1;
          var i = t.redMul(this.z),
            n = r.redMul(e.z);
          return (
            0 ===
            this.y
              .redMul(n)
              .redISub(e.y.redMul(i))
              .cmpn(0)
          );
        }),
        (h.prototype.eqXToP = function(e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;
          for (var i = e.clone(), n = this.curve.redN.redMul(t); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (h.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC JPoint Infinity>'
            : '<EC JPoint x: ' +
                this.x.toString(16, 2) +
                ' y: ' +
                this.y.toString(16, 2) +
                ' z: ' +
                this.z.toString(16, 2) +
                '>';
        }),
        (h.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0);
        });
    },
    '../../node_modules/elliptic/lib/elliptic/curves.js': function(e, t, r) {
      'use strict';
      var i,
        n = t,
        s = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash.js'),
        o = r('../../node_modules/elliptic/lib/elliptic/curve/index.js'),
        a = r('../../node_modules/elliptic/lib/elliptic/utils.js').assert;
      function d(e) {
        'short' === e.type
          ? (this.curve = new o.short(e))
          : 'edwards' === e.type
          ? (this.curve = new o.edwards(e))
          : (this.curve = new o.mont(e)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = e.hash),
          a(this.g.validate(), 'Invalid curve'),
          a(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
      }
      function f(e, t) {
        Object.defineProperty(n, e, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            var r = new d(t);
            return (
              Object.defineProperty(n, e, { configurable: !0, enumerable: !0, value: r }),
              r
            );
          }
        });
      }
      (n.PresetCurve = d),
        f('p192', {
          type: 'short',
          prime: 'p192',
          p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
          b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
          n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
          hash: s.sha256,
          gRed: !1,
          g: [
            '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
            '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811'
          ]
        }),
        f('p224', {
          type: 'short',
          prime: 'p224',
          p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
          b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
          n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
          hash: s.sha256,
          gRed: !1,
          g: [
            'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
            'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34'
          ]
        }),
        f('p256', {
          type: 'short',
          prime: null,
          p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
          a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
          b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
          n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
          hash: s.sha256,
          gRed: !1,
          g: [
            '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
            '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5'
          ]
        }),
        f('p384', {
          type: 'short',
          prime: null,
          p:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
          a:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
          b:
            'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
          n:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
          hash: s.sha384,
          gRed: !1,
          g: [
            'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
            '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f'
          ]
        }),
        f('p521', {
          type: 'short',
          prime: null,
          p:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
          a:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
          b:
            '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
          n:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
          hash: s.sha512,
          gRed: !1,
          g: [
            '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
            '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650'
          ]
        }),
        f('curve25519', {
          type: 'mont',
          prime: 'p25519',
          p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '76d06',
          b: '1',
          n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: s.sha256,
          gRed: !1,
          g: ['9']
        }),
        f('ed25519', {
          type: 'edwards',
          prime: 'p25519',
          p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '-1',
          c: '1',
          d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
          n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: s.sha256,
          gRed: !1,
          g: [
            '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
            '6666666666666666666666666666666666666666666666666666666666666658'
          ]
        });
      try {
        i = r('../../node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js');
      } catch (e) {
        i = void 0;
      }
      f('secp256k1', {
        type: 'short',
        prime: 'k256',
        p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
        a: '0',
        b: '7',
        n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
        h: '1',
        hash: s.sha256,
        beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
        lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
        basis: [
          {
            a: '3086d221a7d46bcde86c90e49284eb15',
            b: '-e4437ed6010e88286f547fa90abfe4c3'
          },
          {
            a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
            b: '3086d221a7d46bcde86c90e49284eb15'
          }
        ],
        gRed: !1,
        g: [
          '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
          '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
          i
        ]
      });
    },
    '../../node_modules/elliptic/lib/elliptic/ec/index.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/bn.js/lib/bn.js'),
        n = r('../../node_modules/hmac-drbg/lib/hmac-drbg.js'),
        s = r('../../node_modules/elliptic/lib/elliptic/utils.js'),
        o = r('../../node_modules/elliptic/lib/elliptic/curves.js'),
        a = r('../../node_modules/brorand/index.js'),
        d = s.assert,
        f = r('../../node_modules/elliptic/lib/elliptic/ec/key.js'),
        h = r('../../node_modules/elliptic/lib/elliptic/ec/signature.js');
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        'string' == typeof e &&
          (d(o.hasOwnProperty(e), 'Unknown curve ' + e), (e = o[e])),
          e instanceof o.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (e.exports = c),
        (c.prototype.keyPair = function(e) {
          return new f(this, e);
        }),
        (c.prototype.keyFromPrivate = function(e, t) {
          return f.fromPrivate(this, e, t);
        }),
        (c.prototype.keyFromPublic = function(e, t) {
          return f.fromPublic(this, e, t);
        }),
        (c.prototype.genKeyPair = function(e) {
          e || (e = {});
          for (
            var t = new n({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || 'utf8',
                entropy: e.entropy || a(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                nonce: this.n.toArray()
              }),
              r = this.n.byteLength(),
              s = this.n.sub(new i(2));
            ;

          ) {
            var o = new i(t.generate(r));
            if (!(o.cmp(s) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
          }
        }),
        (c.prototype._truncateToN = function(e, t) {
          var r = 8 * e.byteLength() - this.n.bitLength();
          return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
        }),
        (c.prototype.sign = function(e, t, r, s) {
          'object' == typeof r && ((s = r), (r = null)),
            s || (s = {}),
            (t = this.keyFromPrivate(t, r)),
            (e = this._truncateToN(new i(e, 16)));
          for (
            var o = this.n.byteLength(),
              a = t.getPrivate().toArray('be', o),
              d = e.toArray('be', o),
              f = new n({
                hash: this.hash,
                entropy: a,
                nonce: d,
                pers: s.pers,
                persEnc: s.persEnc || 'utf8'
              }),
              c = this.n.sub(new i(1)),
              u = 0;
            ;
            u++
          ) {
            var l = s.k ? s.k(u) : new i(f.generate(this.n.byteLength()));
            if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(c) >= 0)) {
              var b = this.g.mul(l);
              if (!b.isInfinity()) {
                var p = b.getX(),
                  m = p.umod(this.n);
                if (0 !== m.cmpn(0)) {
                  var _ = l.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                  if (0 !== (_ = _.umod(this.n)).cmpn(0)) {
                    var y = (b.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0);
                    return (
                      s.canonical &&
                        _.cmp(this.nh) > 0 &&
                        ((_ = this.n.sub(_)), (y ^= 1)),
                      new h({ r: m, s: _, recoveryParam: y })
                    );
                  }
                }
              }
            }
          }
        }),
        (c.prototype.verify = function(e, t, r, n) {
          (e = this._truncateToN(new i(e, 16))), (r = this.keyFromPublic(r, n));
          var s = (t = new h(t, 'hex')).r,
            o = t.s;
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
          var a,
            d = o.invm(this.n),
            f = d.mul(e).umod(this.n),
            c = d.mul(s).umod(this.n);
          return this.curve._maxwellTrick
            ? !(a = this.g.jmulAdd(f, r.getPublic(), c)).isInfinity() && a.eqXToP(s)
            : !(a = this.g.mulAdd(f, r.getPublic(), c)).isInfinity() &&
                0 ===
                  a
                    .getX()
                    .umod(this.n)
                    .cmp(s);
        }),
        (c.prototype.recoverPubKey = function(e, t, r, n) {
          d((3 & r) === r, 'The recovery param is more than two bits'), (t = new h(t, n));
          var s = this.n,
            o = new i(e),
            a = t.r,
            f = t.s,
            c = 1 & r,
            u = r >> 1;
          if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw new Error('Unable to find sencond key candinate');
          a = u
            ? this.curve.pointFromX(a.add(this.curve.n), c)
            : this.curve.pointFromX(a, c);
          var l = t.r.invm(s),
            b = s
              .sub(o)
              .mul(l)
              .umod(s),
            p = f.mul(l).umod(s);
          return this.g.mulAdd(b, a, p);
        }),
        (c.prototype.getKeyRecoveryParam = function(e, t, r, i) {
          if (null !== (t = new h(t, i)).recoveryParam) return t.recoveryParam;
          for (var n = 0; n < 4; n++) {
            var s;
            try {
              s = this.recoverPubKey(e, t, n);
            } catch (e) {
              continue;
            }
            if (s.eq(r)) return n;
          }
          throw new Error('Unable to find valid recovery factor');
        });
    },
    '../../node_modules/elliptic/lib/elliptic/ec/key.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/bn.js/lib/bn.js'),
        n = r('../../node_modules/elliptic/lib/elliptic/utils.js').assert;
      function s(e, t) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc);
      }
      (e.exports = s),
        (s.fromPublic = function(e, t, r) {
          return t instanceof s ? t : new s(e, { pub: t, pubEnc: r });
        }),
        (s.fromPrivate = function(e, t, r) {
          return t instanceof s ? t : new s(e, { priv: t, privEnc: r });
        }),
        (s.prototype.validate = function() {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: 'Public key * N != O' }
            : { result: !1, reason: 'Public key is not a point' };
        }),
        (s.prototype.getPublic = function(e, t) {
          return (
            'string' == typeof e && ((t = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            t ? this.pub.encode(t, e) : this.pub
          );
        }),
        (s.prototype.getPrivate = function(e) {
          return 'hex' === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (s.prototype._importPrivate = function(e, t) {
          (this.priv = new i(e, t || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (s.prototype._importPublic = function(e, t) {
          if (e.x || e.y)
            return (
              'mont' === this.ec.curve.type
                ? n(e.x, 'Need x coordinate')
                : ('short' !== this.ec.curve.type && 'edwards' !== this.ec.curve.type) ||
                  n(e.x && e.y, 'Need both x and y coordinate'),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            );
          this.pub = this.ec.curve.decodePoint(e, t);
        }),
        (s.prototype.derive = function(e) {
          return e.mul(this.priv).getX();
        }),
        (s.prototype.sign = function(e, t, r) {
          return this.ec.sign(e, this, t, r);
        }),
        (s.prototype.verify = function(e, t) {
          return this.ec.verify(e, t, this);
        }),
        (s.prototype.inspect = function() {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          );
        });
    },
    '../../node_modules/elliptic/lib/elliptic/ec/signature.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/bn.js/lib/bn.js'),
        n = r('../../node_modules/elliptic/lib/elliptic/utils.js'),
        s = n.assert;
      function o(e, t) {
        if (e instanceof o) return e;
        this._importDER(e, t) ||
          (s(e.r && e.s, 'Signature without r or s'),
          (this.r = new i(e.r, 16)),
          (this.s = new i(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function a() {
        this.place = 0;
      }
      function d(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        for (var i = 15 & r, n = 0, s = 0, o = t.place; s < i; s++, o++)
          (n <<= 8), (n |= e[o]);
        return (t.place = o), n;
      }
      function f(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; ) t++;
        return 0 === t ? e : e.slice(t);
      }
      function h(e, t) {
        if (t < 128) e.push(t);
        else {
          var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
          for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
          e.push(t);
        }
      }
      (e.exports = o),
        (o.prototype._importDER = function(e, t) {
          e = n.toArray(e, t);
          var r = new a();
          if (48 !== e[r.place++]) return !1;
          if (d(e, r) + r.place !== e.length) return !1;
          if (2 !== e[r.place++]) return !1;
          var s = d(e, r),
            o = e.slice(r.place, s + r.place);
          if (((r.place += s), 2 !== e[r.place++])) return !1;
          var f = d(e, r);
          if (e.length !== f + r.place) return !1;
          var h = e.slice(r.place, f + r.place);
          return (
            0 === o[0] && 128 & o[1] && (o = o.slice(1)),
            0 === h[0] && 128 & h[1] && (h = h.slice(1)),
            (this.r = new i(o)),
            (this.s = new i(h)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (o.prototype.toDER = function(e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = f(t),
              r = f(r);
            !(r[0] || 128 & r[1]);

          )
            r = r.slice(1);
          var i = [2];
          h(i, t.length), (i = i.concat(t)).push(2), h(i, r.length);
          var s = i.concat(r),
            o = [48];
          return h(o, s.length), (o = o.concat(s)), n.encode(o, e);
        });
    },
    '../../node_modules/elliptic/lib/elliptic/eddsa/index.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash.js'),
        n = r('../../node_modules/elliptic/lib/elliptic/curves.js'),
        s = r('../../node_modules/elliptic/lib/elliptic/utils.js'),
        o = s.assert,
        a = s.parseBytes,
        d = r('../../node_modules/elliptic/lib/elliptic/eddsa/key.js'),
        f = r('../../node_modules/elliptic/lib/elliptic/eddsa/signature.js');
      function h(e) {
        if ((o('ed25519' === e, 'only tested with ed25519 so far'), !(this instanceof h)))
          return new h(e);
        e = n[e].curve;
        (this.curve = e),
          (this.g = e.g),
          this.g.precompute(e.n.bitLength() + 1),
          (this.pointClass = e.point().constructor),
          (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
          (this.hash = i.sha512);
      }
      (e.exports = h),
        (h.prototype.sign = function(e, t) {
          e = a(e);
          var r = this.keyFromSecret(t),
            i = this.hashInt(r.messagePrefix(), e),
            n = this.g.mul(i),
            s = this.encodePoint(n),
            o = this.hashInt(s, r.pubBytes(), e).mul(r.priv()),
            d = i.add(o).umod(this.curve.n);
          return this.makeSignature({ R: n, S: d, Rencoded: s });
        }),
        (h.prototype.verify = function(e, t, r) {
          (e = a(e)), (t = this.makeSignature(t));
          var i = this.keyFromPublic(r),
            n = this.hashInt(t.Rencoded(), i.pubBytes(), e),
            s = this.g.mul(t.S());
          return t
            .R()
            .add(i.pub().mul(n))
            .eq(s);
        }),
        (h.prototype.hashInt = function() {
          for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t]);
          return s.intFromLE(e.digest()).umod(this.curve.n);
        }),
        (h.prototype.keyFromPublic = function(e) {
          return d.fromPublic(this, e);
        }),
        (h.prototype.keyFromSecret = function(e) {
          return d.fromSecret(this, e);
        }),
        (h.prototype.makeSignature = function(e) {
          return e instanceof f ? e : new f(this, e);
        }),
        (h.prototype.encodePoint = function(e) {
          var t = e.getY().toArray('le', this.encodingLength);
          return (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t;
        }),
        (h.prototype.decodePoint = function(e) {
          var t = (e = s.parseBytes(e)).length - 1,
            r = e.slice(0, t).concat(-129 & e[t]),
            i = 0 != (128 & e[t]),
            n = s.intFromLE(r);
          return this.curve.pointFromY(n, i);
        }),
        (h.prototype.encodeInt = function(e) {
          return e.toArray('le', this.encodingLength);
        }),
        (h.prototype.decodeInt = function(e) {
          return s.intFromLE(e);
        }),
        (h.prototype.isPoint = function(e) {
          return e instanceof this.pointClass;
        });
    },
    '../../node_modules/elliptic/lib/elliptic/eddsa/key.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/elliptic/lib/elliptic/utils.js'),
        n = i.assert,
        s = i.parseBytes,
        o = i.cachedProperty;
      function a(e, t) {
        (this.eddsa = e),
          (this._secret = s(t.secret)),
          e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = s(t.pub));
      }
      (a.fromPublic = function(e, t) {
        return t instanceof a ? t : new a(e, { pub: t });
      }),
        (a.fromSecret = function(e, t) {
          return t instanceof a ? t : new a(e, { secret: t });
        }),
        (a.prototype.secret = function() {
          return this._secret;
        }),
        o(a, 'pubBytes', function() {
          return this.eddsa.encodePoint(this.pub());
        }),
        o(a, 'pub', function() {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        o(a, 'privBytes', function() {
          var e = this.eddsa,
            t = this.hash(),
            r = e.encodingLength - 1,
            i = t.slice(0, e.encodingLength);
          return (i[0] &= 248), (i[r] &= 127), (i[r] |= 64), i;
        }),
        o(a, 'priv', function() {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        o(a, 'hash', function() {
          return this.eddsa
            .hash()
            .update(this.secret())
            .digest();
        }),
        o(a, 'messagePrefix', function() {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (a.prototype.sign = function(e) {
          return n(this._secret, 'KeyPair can only verify'), this.eddsa.sign(e, this);
        }),
        (a.prototype.verify = function(e, t) {
          return this.eddsa.verify(e, t, this);
        }),
        (a.prototype.getSecret = function(e) {
          return n(this._secret, 'KeyPair is public only'), i.encode(this.secret(), e);
        }),
        (a.prototype.getPublic = function(e) {
          return i.encode(this.pubBytes(), e);
        }),
        (e.exports = a);
    },
    '../../node_modules/elliptic/lib/elliptic/eddsa/signature.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/bn.js/lib/bn.js'),
        n = r('../../node_modules/elliptic/lib/elliptic/utils.js'),
        s = n.assert,
        o = n.cachedProperty,
        a = n.parseBytes;
      function d(e, t) {
        (this.eddsa = e),
          'object' != typeof t && (t = a(t)),
          Array.isArray(t) &&
            (t = { R: t.slice(0, e.encodingLength), S: t.slice(e.encodingLength) }),
          s(t.R && t.S, 'Signature without R or S'),
          e.isPoint(t.R) && (this._R = t.R),
          t.S instanceof i && (this._S = t.S),
          (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
          (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
      }
      o(d, 'S', function() {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        o(d, 'R', function() {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        o(d, 'Rencoded', function() {
          return this.eddsa.encodePoint(this.R());
        }),
        o(d, 'Sencoded', function() {
          return this.eddsa.encodeInt(this.S());
        }),
        (d.prototype.toBytes = function() {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (d.prototype.toHex = function() {
          return n.encode(this.toBytes(), 'hex').toUpperCase();
        }),
        (e.exports = d);
    },
    '../../node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js': function(e, t) {
      e.exports = {
        doubles: {
          step: 4,
          points: [
            [
              'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
              'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'
            ],
            [
              '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
              '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'
            ],
            [
              '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
              'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'
            ],
            [
              '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
              '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'
            ],
            [
              '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
              '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'
            ],
            [
              '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
              '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'
            ],
            [
              'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
              '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'
            ],
            [
              '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
              'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'
            ],
            [
              'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
              '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'
            ],
            [
              'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
              'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'
            ],
            [
              'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
              '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'
            ],
            [
              '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
              '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'
            ],
            [
              '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
              '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'
            ],
            [
              '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
              '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'
            ],
            [
              '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
              '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'
            ],
            [
              '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
              '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'
            ],
            [
              '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
              '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'
            ],
            [
              '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
              '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'
            ],
            [
              '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
              'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'
            ],
            [
              'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
              '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'
            ],
            [
              'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
              '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'
            ],
            [
              '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
              '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'
            ],
            [
              '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
              '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'
            ],
            [
              'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
              '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'
            ],
            [
              '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
              'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'
            ],
            [
              'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
              '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'
            ],
            [
              'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
              'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'
            ],
            [
              'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
              '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'
            ],
            [
              'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
              'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'
            ],
            [
              'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
              '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'
            ],
            [
              '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
              'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'
            ],
            [
              '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
              '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'
            ],
            [
              'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
              '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'
            ],
            [
              '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
              'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'
            ],
            [
              'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
              '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'
            ],
            [
              'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
              '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'
            ],
            [
              'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
              'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'
            ],
            [
              '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
              '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'
            ],
            [
              '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
              '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'
            ],
            [
              '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
              'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'
            ],
            [
              '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
              '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'
            ],
            [
              'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
              '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'
            ],
            [
              '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
              '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'
            ],
            [
              '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
              'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'
            ],
            [
              '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
              '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'
            ],
            [
              'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
              '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'
            ],
            [
              '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
              'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'
            ],
            [
              'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
              'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'
            ],
            [
              'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
              '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'
            ],
            [
              '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
              'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'
            ],
            [
              '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
              'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'
            ],
            [
              'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
              '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'
            ],
            [
              'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
              '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'
            ],
            [
              'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
              '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'
            ],
            [
              '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
              'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'
            ],
            [
              '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
              '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'
            ],
            [
              'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
              'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'
            ],
            [
              '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
              'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'
            ],
            [
              '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
              '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'
            ],
            [
              '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
              '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'
            ],
            [
              'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
              'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'
            ],
            [
              '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
              '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'
            ],
            [
              '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
              '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'
            ],
            [
              'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
              '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'
            ],
            [
              'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
              'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82'
            ]
          ]
        },
        naf: {
          wnd: 7,
          points: [
            [
              'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
              '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'
            ],
            [
              '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
              'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'
            ],
            [
              '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
              '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'
            ],
            [
              'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
              'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'
            ],
            [
              '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
              'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'
            ],
            [
              'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
              'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'
            ],
            [
              'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
              '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'
            ],
            [
              'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
              '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'
            ],
            [
              '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
              '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'
            ],
            [
              '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
              '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'
            ],
            [
              '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
              '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'
            ],
            [
              '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
              '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'
            ],
            [
              'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
              'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'
            ],
            [
              'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
              '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'
            ],
            [
              '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
              'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'
            ],
            [
              '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
              'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'
            ],
            [
              '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
              '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'
            ],
            [
              '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
              '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'
            ],
            [
              '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
              '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'
            ],
            [
              '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
              'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'
            ],
            [
              'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
              'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'
            ],
            [
              '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
              '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'
            ],
            [
              '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
              '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'
            ],
            [
              'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
              'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'
            ],
            [
              '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
              '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'
            ],
            [
              'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
              'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'
            ],
            [
              'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
              'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'
            ],
            [
              '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
              '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'
            ],
            [
              '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
              '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'
            ],
            [
              '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
              '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'
            ],
            [
              'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
              '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'
            ],
            [
              '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
              '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'
            ],
            [
              'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
              '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'
            ],
            [
              '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
              'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'
            ],
            [
              '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
              'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'
            ],
            [
              'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
              'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'
            ],
            [
              '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
              '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'
            ],
            [
              '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
              'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'
            ],
            [
              'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
              'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'
            ],
            [
              '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
              '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'
            ],
            [
              '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
              'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'
            ],
            [
              '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
              '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'
            ],
            [
              '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
              'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'
            ],
            [
              'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
              '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'
            ],
            [
              '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
              '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'
            ],
            [
              '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
              'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'
            ],
            [
              '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
              'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'
            ],
            [
              'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
              'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'
            ],
            [
              'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
              'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'
            ],
            [
              '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
              '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'
            ],
            [
              '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
              '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'
            ],
            [
              'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
              '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'
            ],
            [
              'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
              'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'
            ],
            [
              '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
              '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'
            ],
            [
              '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
              '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'
            ],
            [
              'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
              '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'
            ],
            [
              '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
              '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'
            ],
            [
              'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
              'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'
            ],
            [
              '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
              'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'
            ],
            [
              '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
              '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'
            ],
            [
              'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
              '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'
            ],
            [
              'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
              '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'
            ],
            [
              '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
              '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'
            ],
            [
              '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
              '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'
            ],
            [
              '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
              'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'
            ],
            [
              '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
              'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'
            ],
            [
              '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
              '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'
            ],
            [
              '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
              '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'
            ],
            [
              '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
              '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'
            ],
            [
              '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
              'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'
            ],
            [
              'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
              'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'
            ],
            [
              '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
              'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'
            ],
            [
              'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
              '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'
            ],
            [
              'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
              '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'
            ],
            [
              'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
              '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'
            ],
            [
              'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
              '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'
            ],
            [
              '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
              'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'
            ],
            [
              '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
              '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'
            ],
            [
              '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
              'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'
            ],
            [
              'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
              'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'
            ],
            [
              'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
              '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'
            ],
            [
              'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
              'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'
            ],
            [
              'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
              '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'
            ],
            [
              '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
              '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'
            ],
            [
              'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
              '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'
            ],
            [
              'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
              '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'
            ],
            [
              '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
              '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'
            ],
            [
              '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
              'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'
            ],
            [
              'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
              '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'
            ],
            [
              'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
              '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'
            ],
            [
              'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
              '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'
            ],
            [
              '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
              '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'
            ],
            [
              'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
              'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'
            ],
            [
              '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
              'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'
            ],
            [
              'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
              'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'
            ],
            [
              'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
              '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'
            ],
            [
              '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
              'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'
            ],
            [
              'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
              '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'
            ],
            [
              'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
              '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'
            ],
            [
              'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
              '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'
            ],
            [
              '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
              'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'
            ],
            [
              '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
              'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'
            ],
            [
              'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
              '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'
            ],
            [
              '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
              'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'
            ],
            [
              '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
              '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'
            ],
            [
              '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
              'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'
            ],
            [
              'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
              'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'
            ],
            [
              '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
              'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'
            ],
            [
              '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
              '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'
            ],
            [
              '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
              'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'
            ],
            [
              '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
              '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'
            ],
            [
              'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
              'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'
            ],
            [
              '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
              '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'
            ],
            [
              'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
              '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'
            ],
            [
              '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
              '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'
            ],
            [
              'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
              'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'
            ],
            [
              'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
              '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'
            ],
            [
              'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
              'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'
            ],
            [
              '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
              'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'
            ],
            [
              '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
              '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'
            ],
            [
              '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
              'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'
            ],
            [
              '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
              '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'
            ],
            [
              '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
              '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'
            ],
            [
              '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
              'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'
            ],
            [
              '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
              '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'
            ],
            [
              '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
              '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'
            ],
            [
              '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
              '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9'
            ]
          ]
        }
      };
    },
    '../../node_modules/elliptic/lib/elliptic/utils.js': function(e, t, r) {
      'use strict';
      var i = t,
        n = r('../../node_modules/bn.js/lib/bn.js'),
        s = r('../../node_modules/minimalistic-assert/index.js'),
        o = r('../../node_modules/minimalistic-crypto-utils/lib/utils.js');
      (i.assert = s),
        (i.toArray = o.toArray),
        (i.zero2 = o.zero2),
        (i.toHex = o.toHex),
        (i.encode = o.encode),
        (i.getNAF = function(e, t, r) {
          var i = new Array(Math.max(e.bitLength(), r) + 1);
          i.fill(0);
          for (var n = 1 << (t + 1), s = e.clone(), o = 0; o < i.length; o++) {
            var a,
              d = s.andln(n - 1);
            s.isOdd() ? ((a = d > (n >> 1) - 1 ? (n >> 1) - d : d), s.isubn(a)) : (a = 0),
              (i[o] = a),
              s.iushrn(1);
          }
          return i;
        }),
        (i.getJSF = function(e, t) {
          var r = [[], []];
          (e = e.clone()), (t = t.clone());
          for (var i = 0, n = 0; e.cmpn(-i) > 0 || t.cmpn(-n) > 0; ) {
            var s,
              o,
              a,
              d = (e.andln(3) + i) & 3,
              f = (t.andln(3) + n) & 3;
            if ((3 === d && (d = -1), 3 === f && (f = -1), 0 == (1 & d))) s = 0;
            else s = (3 !== (a = (e.andln(7) + i) & 7) && 5 !== a) || 2 !== f ? d : -d;
            if ((r[0].push(s), 0 == (1 & f))) o = 0;
            else o = (3 !== (a = (t.andln(7) + n) & 7) && 5 !== a) || 2 !== d ? f : -f;
            r[1].push(o),
              2 * i === s + 1 && (i = 1 - i),
              2 * n === o + 1 && (n = 1 - n),
              e.iushrn(1),
              t.iushrn(1);
          }
          return r;
        }),
        (i.cachedProperty = function(e, t, r) {
          var i = '_' + t;
          e.prototype[t] = function() {
            return void 0 !== this[i] ? this[i] : (this[i] = r.call(this));
          };
        }),
        (i.parseBytes = function(e) {
          return 'string' == typeof e ? i.toArray(e, 'hex') : e;
        }),
        (i.intFromLE = function(e) {
          return new n(e, 'hex', 'le');
        });
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash.js': function(e, t, r) {
      var i = t;
      (i.utils = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js')),
        (i.common = r(
          '../../node_modules/elliptic/node_modules/hash.js/lib/hash/common.js'
        )),
        (i.sha = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha.js')),
        (i.ripemd = r(
          '../../node_modules/elliptic/node_modules/hash.js/lib/hash/ripemd.js'
        )),
        (i.hmac = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/hmac.js')),
        (i.sha1 = i.sha.sha1),
        (i.sha256 = i.sha.sha256),
        (i.sha224 = i.sha.sha224),
        (i.sha384 = i.sha.sha384),
        (i.sha512 = i.sha.sha512),
        (i.ripemd160 = i.ripemd.ripemd160);
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/common.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/minimalistic-assert/index.js');
      function s() {
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
      (t.BlockHash = s),
        (s.prototype.update = function(e, t) {
          if (
            ((e = i.toArray(e, t)),
            this.pending ? (this.pending = this.pending.concat(e)) : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - r, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = i.join32(e, 0, e.length - r, this.endian));
            for (var n = 0; n < e.length; n += this._delta32)
              this._update(e, n, n + this._delta32);
          }
          return this;
        }),
        (s.prototype.digest = function(e) {
          return this.update(this._pad()), n(null === this.pending), this._digest(e);
        }),
        (s.prototype._pad = function() {
          var e = this.pendingTotal,
            t = this._delta8,
            r = t - ((e + this.padLength) % t),
            i = new Array(r + this.padLength);
          i[0] = 128;
          for (var n = 1; n < r; n++) i[n] = 0;
          if (((e <<= 3), 'big' === this.endian)) {
            for (var s = 8; s < this.padLength; s++) i[n++] = 0;
            (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = (e >>> 24) & 255),
              (i[n++] = (e >>> 16) & 255),
              (i[n++] = (e >>> 8) & 255),
              (i[n++] = 255 & e);
          } else
            for (
              i[n++] = 255 & e,
                i[n++] = (e >>> 8) & 255,
                i[n++] = (e >>> 16) & 255,
                i[n++] = (e >>> 24) & 255,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                s = 8;
              s < this.padLength;
              s++
            )
              i[n++] = 0;
          return i;
        });
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/hmac.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/minimalistic-assert/index.js');
      function s(e, t, r) {
        if (!(this instanceof s)) return new s(e, t, r);
        (this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(i.toArray(t, r));
      }
      (e.exports = s),
        (s.prototype._init = function(e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            n(e.length <= this.blockSize);
          for (var t = e.length; t < this.blockSize; t++) e.push(0);
          for (t = 0; t < e.length; t++) e[t] ^= 54;
          for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
            e[t] ^= 106;
          this.outer = new this.Hash().update(e);
        }),
        (s.prototype.update = function(e, t) {
          return this.inner.update(e, t), this;
        }),
        (s.prototype.digest = function(e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e);
        });
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/ripemd.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/common.js'),
        s = i.rotl32,
        o = i.sum32,
        a = i.sum32_3,
        d = i.sum32_4,
        f = n.BlockHash;
      function h() {
        if (!(this instanceof h)) return new h();
        f.call(this),
          (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
          (this.endian = 'little');
      }
      function c(e, t, r, i) {
        return e <= 15
          ? t ^ r ^ i
          : e <= 31
          ? (t & r) | (~t & i)
          : e <= 47
          ? (t | ~r) ^ i
          : e <= 63
          ? (t & i) | (r & ~i)
          : t ^ (r | ~i);
      }
      function u(e) {
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
      function l(e) {
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
      i.inherits(h, f),
        (t.ripemd160 = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 192),
        (h.padLength = 64),
        (h.prototype._update = function(e, t) {
          for (
            var r = this.h[0],
              i = this.h[1],
              n = this.h[2],
              f = this.h[3],
              h = this.h[4],
              y = r,
              g = i,
              v = n,
              w = f,
              j = h,
              S = 0;
            S < 80;
            S++
          ) {
            var M = o(s(d(r, c(S, i, n, f), e[b[S] + t], u(S)), m[S]), h);
            (r = h),
              (h = f),
              (f = s(n, 10)),
              (n = i),
              (i = M),
              (M = o(s(d(y, c(79 - S, g, v, w), e[p[S] + t], l(S)), _[S]), j)),
              (y = j),
              (j = w),
              (w = s(v, 10)),
              (v = g),
              (g = M);
          }
          (M = a(this.h[1], n, w)),
            (this.h[1] = a(this.h[2], f, j)),
            (this.h[2] = a(this.h[3], h, y)),
            (this.h[3] = a(this.h[4], r, g)),
            (this.h[4] = a(this.h[0], i, v)),
            (this.h[0] = M);
        }),
        (h.prototype._digest = function(e) {
          return 'hex' === e ? i.toHex32(this.h, 'little') : i.split32(this.h, 'little');
        });
      var b = [
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
        p = [
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
        _ = [
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
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      (t.sha1 = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/1.js')),
        (t.sha224 = r(
          '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/224.js'
        )),
        (t.sha256 = r(
          '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/256.js'
        )),
        (t.sha384 = r(
          '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/384.js'
        )),
        (t.sha512 = r(
          '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/512.js'
        ));
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/1.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/common.js'),
        s = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/common.js'),
        o = i.rotl32,
        a = i.sum32,
        d = i.sum32_5,
        f = s.ft_1,
        h = n.BlockHash,
        c = [1518500249, 1859775393, 2400959708, 3395469782];
      function u() {
        if (!(this instanceof u)) return new u();
        h.call(this),
          (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
          (this.W = new Array(80));
      }
      i.inherits(u, h),
        (e.exports = u),
        (u.blockSize = 512),
        (u.outSize = 160),
        (u.hmacStrength = 80),
        (u.padLength = 64),
        (u.prototype._update = function(e, t) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
          for (; i < r.length; i++)
            r[i] = o(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
          var n = this.h[0],
            s = this.h[1],
            h = this.h[2],
            u = this.h[3],
            l = this.h[4];
          for (i = 0; i < r.length; i++) {
            var b = ~~(i / 20),
              p = d(o(n, 5), f(b, s, h, u), l, r[i], c[b]);
            (l = u), (u = h), (h = o(s, 30)), (s = n), (n = p);
          }
          (this.h[0] = a(this.h[0], n)),
            (this.h[1] = a(this.h[1], s)),
            (this.h[2] = a(this.h[2], h)),
            (this.h[3] = a(this.h[3], u)),
            (this.h[4] = a(this.h[4], l));
        }),
        (u.prototype._digest = function(e) {
          return 'hex' === e ? i.toHex32(this.h, 'big') : i.split32(this.h, 'big');
        });
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/224.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/256.js');
      function s() {
        if (!(this instanceof s)) return new s();
        n.call(this),
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
      i.inherits(s, n),
        (e.exports = s),
        (s.blockSize = 512),
        (s.outSize = 224),
        (s.hmacStrength = 192),
        (s.padLength = 64),
        (s.prototype._digest = function(e) {
          return 'hex' === e
            ? i.toHex32(this.h.slice(0, 7), 'big')
            : i.split32(this.h.slice(0, 7), 'big');
        });
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/256.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/common.js'),
        s = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/common.js'),
        o = r('../../node_modules/minimalistic-assert/index.js'),
        a = i.sum32,
        d = i.sum32_4,
        f = i.sum32_5,
        h = s.ch32,
        c = s.maj32,
        u = s.s0_256,
        l = s.s1_256,
        b = s.g0_256,
        p = s.g1_256,
        m = n.BlockHash,
        _ = [
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
          (this.k = _),
          (this.W = new Array(64));
      }
      i.inherits(y, m),
        (e.exports = y),
        (y.blockSize = 512),
        (y.outSize = 256),
        (y.hmacStrength = 192),
        (y.padLength = 64),
        (y.prototype._update = function(e, t) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
          for (; i < r.length; i++)
            r[i] = d(p(r[i - 2]), r[i - 7], b(r[i - 15]), r[i - 16]);
          var n = this.h[0],
            s = this.h[1],
            m = this.h[2],
            _ = this.h[3],
            y = this.h[4],
            g = this.h[5],
            v = this.h[6],
            w = this.h[7];
          for (o(this.k.length === r.length), i = 0; i < r.length; i++) {
            var j = f(w, l(y), h(y, g, v), this.k[i], r[i]),
              S = a(u(n), c(n, s, m));
            (w = v),
              (v = g),
              (g = y),
              (y = a(_, j)),
              (_ = m),
              (m = s),
              (s = n),
              (n = a(j, S));
          }
          (this.h[0] = a(this.h[0], n)),
            (this.h[1] = a(this.h[1], s)),
            (this.h[2] = a(this.h[2], m)),
            (this.h[3] = a(this.h[3], _)),
            (this.h[4] = a(this.h[4], y)),
            (this.h[5] = a(this.h[5], g)),
            (this.h[6] = a(this.h[6], v)),
            (this.h[7] = a(this.h[7], w));
        }),
        (y.prototype._digest = function(e) {
          return 'hex' === e ? i.toHex32(this.h, 'big') : i.split32(this.h, 'big');
        });
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/384.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/512.js');
      function s() {
        if (!(this instanceof s)) return new s();
        n.call(this),
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
      i.inherits(s, n),
        (e.exports = s),
        (s.blockSize = 1024),
        (s.outSize = 384),
        (s.hmacStrength = 192),
        (s.padLength = 128),
        (s.prototype._digest = function(e) {
          return 'hex' === e
            ? i.toHex32(this.h.slice(0, 12), 'big')
            : i.split32(this.h.slice(0, 12), 'big');
        });
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/512.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/common.js'),
        s = r('../../node_modules/minimalistic-assert/index.js'),
        o = i.rotr64_hi,
        a = i.rotr64_lo,
        d = i.shr64_hi,
        f = i.shr64_lo,
        h = i.sum64,
        c = i.sum64_hi,
        u = i.sum64_lo,
        l = i.sum64_4_hi,
        b = i.sum64_4_lo,
        p = i.sum64_5_hi,
        m = i.sum64_5_lo,
        _ = n.BlockHash,
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
      function g() {
        if (!(this instanceof g)) return new g();
        _.call(this),
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
      function v(e, t, r, i, n) {
        var s = (e & r) ^ (~e & n);
        return s < 0 && (s += 4294967296), s;
      }
      function w(e, t, r, i, n, s) {
        var o = (t & i) ^ (~t & s);
        return o < 0 && (o += 4294967296), o;
      }
      function j(e, t, r, i, n) {
        var s = (e & r) ^ (e & n) ^ (r & n);
        return s < 0 && (s += 4294967296), s;
      }
      function S(e, t, r, i, n, s) {
        var o = (t & i) ^ (t & s) ^ (i & s);
        return o < 0 && (o += 4294967296), o;
      }
      function M(e, t) {
        var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function x(e, t) {
        var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function k(e, t) {
        var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function E(e, t) {
        var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function A(e, t) {
        var r = o(e, t, 1) ^ o(e, t, 8) ^ d(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function I(e, t) {
        var r = a(e, t, 1) ^ a(e, t, 8) ^ f(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function B(e, t) {
        var r = o(e, t, 19) ^ o(t, e, 29) ^ d(e, t, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function R(e, t) {
        var r = a(e, t, 19) ^ a(t, e, 29) ^ f(e, t, 6);
        return r < 0 && (r += 4294967296), r;
      }
      i.inherits(g, _),
        (e.exports = g),
        (g.blockSize = 1024),
        (g.outSize = 512),
        (g.hmacStrength = 192),
        (g.padLength = 128),
        (g.prototype._prepareBlock = function(e, t) {
          for (var r = this.W, i = 0; i < 32; i++) r[i] = e[t + i];
          for (; i < r.length; i += 2) {
            var n = B(r[i - 4], r[i - 3]),
              s = R(r[i - 4], r[i - 3]),
              o = r[i - 14],
              a = r[i - 13],
              d = A(r[i - 30], r[i - 29]),
              f = I(r[i - 30], r[i - 29]),
              h = r[i - 32],
              c = r[i - 31];
            (r[i] = l(n, s, o, a, d, f, h, c)), (r[i + 1] = b(n, s, o, a, d, f, h, c));
          }
        }),
        (g.prototype._update = function(e, t) {
          this._prepareBlock(e, t);
          var r = this.W,
            i = this.h[0],
            n = this.h[1],
            o = this.h[2],
            a = this.h[3],
            d = this.h[4],
            f = this.h[5],
            l = this.h[6],
            b = this.h[7],
            _ = this.h[8],
            y = this.h[9],
            g = this.h[10],
            A = this.h[11],
            I = this.h[12],
            B = this.h[13],
            R = this.h[14],
            C = this.h[15];
          s(this.k.length === r.length);
          for (var P = 0; P < r.length; P += 2) {
            var O = R,
              T = C,
              L = k(_, y),
              z = E(_, y),
              D = v(_, y, g, A, I),
              q = w(_, y, g, A, I, B),
              N = this.k[P],
              U = this.k[P + 1],
              K = r[P],
              H = r[P + 1],
              F = p(O, T, L, z, D, q, N, U, K, H),
              W = m(O, T, L, z, D, q, N, U, K, H);
            (O = M(i, n)),
              (T = x(i, n)),
              (L = j(i, n, o, a, d)),
              (z = S(i, n, o, a, d, f));
            var V = c(O, T, L, z),
              X = u(O, T, L, z);
            (R = I),
              (C = B),
              (I = g),
              (B = A),
              (g = _),
              (A = y),
              (_ = c(l, b, F, W)),
              (y = u(b, b, F, W)),
              (l = d),
              (b = f),
              (d = o),
              (f = a),
              (o = i),
              (a = n),
              (i = c(F, W, V, X)),
              (n = u(F, W, V, X));
          }
          h(this.h, 0, i, n),
            h(this.h, 2, o, a),
            h(this.h, 4, d, f),
            h(this.h, 6, l, b),
            h(this.h, 8, _, y),
            h(this.h, 10, g, A),
            h(this.h, 12, I, B),
            h(this.h, 14, R, C);
        }),
        (g.prototype._digest = function(e) {
          return 'hex' === e ? i.toHex32(this.h, 'big') : i.split32(this.h, 'big');
        });
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/sha/common.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js')
        .rotr32;
      function n(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function s(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      function o(e, t, r) {
        return e ^ t ^ r;
      }
      (t.ft_1 = function(e, t, r, i) {
        return 0 === e
          ? n(t, r, i)
          : 1 === e || 3 === e
          ? o(t, r, i)
          : 2 === e
          ? s(t, r, i)
          : void 0;
      }),
        (t.ch32 = n),
        (t.maj32 = s),
        (t.p32 = o),
        (t.s0_256 = function(e) {
          return i(e, 2) ^ i(e, 13) ^ i(e, 22);
        }),
        (t.s1_256 = function(e) {
          return i(e, 6) ^ i(e, 11) ^ i(e, 25);
        }),
        (t.g0_256 = function(e) {
          return i(e, 7) ^ i(e, 18) ^ (e >>> 3);
        }),
        (t.g1_256 = function(e) {
          return i(e, 17) ^ i(e, 19) ^ (e >>> 10);
        });
    },
    '../../node_modules/elliptic/node_modules/hash.js/lib/hash/utils.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/minimalistic-assert/index.js'),
        n = r('../../node_modules/inherits/inherits_browser.js');
      function s(e, t) {
        return (
          55296 == (64512 & e.charCodeAt(t)) &&
          !(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1))
        );
      }
      function o(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 16711680) |
            ((255 & e) << 24)) >>>
          0
        );
      }
      function a(e) {
        return 1 === e.length ? '0' + e : e;
      }
      function d(e) {
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
      (t.inherits = n),
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
              for (var i = 0, n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n);
                o < 128
                  ? (r[i++] = o)
                  : o < 2048
                  ? ((r[i++] = (o >> 6) | 192), (r[i++] = (63 & o) | 128))
                  : s(e, n)
                  ? ((o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n))),
                    (r[i++] = (o >> 18) | 240),
                    (r[i++] = ((o >> 12) & 63) | 128),
                    (r[i++] = ((o >> 6) & 63) | 128),
                    (r[i++] = (63 & o) | 128))
                  : ((r[i++] = (o >> 12) | 224),
                    (r[i++] = ((o >> 6) & 63) | 128),
                    (r[i++] = (63 & o) | 128));
              }
          else for (n = 0; n < e.length; n++) r[n] = 0 | e[n];
          return r;
        }),
        (t.toHex = function(e) {
          for (var t = '', r = 0; r < e.length; r++) t += a(e[r].toString(16));
          return t;
        }),
        (t.htonl = o),
        (t.toHex32 = function(e, t) {
          for (var r = '', i = 0; i < e.length; i++) {
            var n = e[i];
            'little' === t && (n = o(n)), (r += d(n.toString(16)));
          }
          return r;
        }),
        (t.zero2 = a),
        (t.zero8 = d),
        (t.join32 = function(e, t, r, n) {
          var s = r - t;
          i(s % 4 == 0);
          for (var o = new Array(s / 4), a = 0, d = t; a < o.length; a++, d += 4) {
            var f;
            (f =
              'big' === n
                ? (e[d] << 24) | (e[d + 1] << 16) | (e[d + 2] << 8) | e[d + 3]
                : (e[d + 3] << 24) | (e[d + 2] << 16) | (e[d + 1] << 8) | e[d]),
              (o[a] = f >>> 0);
          }
          return o;
        }),
        (t.split32 = function(e, t) {
          for (var r = new Array(4 * e.length), i = 0, n = 0; i < e.length; i++, n += 4) {
            var s = e[i];
            'big' === t
              ? ((r[n] = s >>> 24),
                (r[n + 1] = (s >>> 16) & 255),
                (r[n + 2] = (s >>> 8) & 255),
                (r[n + 3] = 255 & s))
              : ((r[n + 3] = s >>> 24),
                (r[n + 2] = (s >>> 16) & 255),
                (r[n + 1] = (s >>> 8) & 255),
                (r[n] = 255 & s));
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
        (t.sum32_4 = function(e, t, r, i) {
          return (e + t + r + i) >>> 0;
        }),
        (t.sum32_5 = function(e, t, r, i, n) {
          return (e + t + r + i + n) >>> 0;
        }),
        (t.sum64 = function(e, t, r, i) {
          var n = e[t],
            s = (i + e[t + 1]) >>> 0,
            o = (s < i ? 1 : 0) + r + n;
          (e[t] = o >>> 0), (e[t + 1] = s);
        }),
        (t.sum64_hi = function(e, t, r, i) {
          return (((t + i) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
        }),
        (t.sum64_lo = function(e, t, r, i) {
          return (t + i) >>> 0;
        }),
        (t.sum64_4_hi = function(e, t, r, i, n, s, o, a) {
          var d = 0,
            f = t;
          return (
            (d += (f = (f + i) >>> 0) < t ? 1 : 0),
            (d += (f = (f + s) >>> 0) < s ? 1 : 0),
            (e + r + n + o + (d += (f = (f + a) >>> 0) < a ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_4_lo = function(e, t, r, i, n, s, o, a) {
          return (t + i + s + a) >>> 0;
        }),
        (t.sum64_5_hi = function(e, t, r, i, n, s, o, a, d, f) {
          var h = 0,
            c = t;
          return (
            (h += (c = (c + i) >>> 0) < t ? 1 : 0),
            (h += (c = (c + s) >>> 0) < s ? 1 : 0),
            (h += (c = (c + a) >>> 0) < a ? 1 : 0),
            (e + r + n + o + d + (h += (c = (c + f) >>> 0) < f ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_5_lo = function(e, t, r, i, n, s, o, a, d, f) {
          return (t + i + s + a + f) >>> 0;
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
    '../../node_modules/elliptic/package.json': function(e) {
      e.exports = JSON.parse(
        '{"name":"elliptic","version":"6.5.2","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^1.4.3","coveralls":"^3.0.8","grunt":"^1.0.4","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.2","jscs":"^3.0.7","jshint":"^2.10.3","mocha":"^6.2.2"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"}}'
      );
    },
    '../../node_modules/events/events.js': function(e, t, r) {
      'use strict';
      var i,
        n = 'object' == typeof Reflect ? Reflect : null,
        s =
          n && 'function' == typeof n.apply
            ? n.apply
            : function(e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      i =
        n && 'function' == typeof n.ownKeys
          ? n.ownKeys
          : Object.getOwnPropertySymbols
          ? function(e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function(e) {
              return Object.getOwnPropertyNames(e);
            };
      var o =
        Number.isNaN ||
        function(e) {
          return e != e;
        };
      function a() {
        a.init.call(this);
      }
      (e.exports = a),
        (a.EventEmitter = a),
        (a.prototype._events = void 0),
        (a.prototype._eventsCount = 0),
        (a.prototype._maxListeners = void 0);
      var d = 10;
      function f(e) {
        if ('function' != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' + typeof e
          );
      }
      function h(e) {
        return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners;
      }
      function c(e, t, r, i) {
        var n, s, o, a;
        if (
          (f(r),
          void 0 === (s = e._events)
            ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== s.newListener &&
                (e.emit('newListener', t, r.listener ? r.listener : r), (s = e._events)),
              (o = s[t])),
          void 0 === o)
        )
          (o = s[t] = r), ++e._eventsCount;
        else if (
          ('function' == typeof o
            ? (o = s[t] = i ? [r, o] : [o, r])
            : i
            ? o.unshift(r)
            : o.push(r),
          (n = h(e)) > 0 && o.length > n && !o.warned)
        ) {
          o.warned = !0;
          var d = new Error(
            'Possible EventEmitter memory leak detected. ' +
              o.length +
              ' ' +
              String(t) +
              ' listeners added. Use emitter.setMaxListeners() to increase limit'
          );
          (d.name = 'MaxListenersExceededWarning'),
            (d.emitter = e),
            (d.type = t),
            (d.count = o.length),
            (a = d),
            console && console.warn && console.warn(a);
        }
        return e;
      }
      function u() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function l(e, t, r) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          n = u.bind(i);
        return (n.listener = r), (i.wrapFn = n), n;
      }
      function b(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var n = i[t];
        return void 0 === n
          ? []
          : 'function' == typeof n
          ? r
            ? [n.listener || n]
            : [n]
          : r
          ? (function(e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(n)
          : m(n, n.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ('function' == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function m(e, t) {
        for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r;
      }
      Object.defineProperty(a, 'defaultMaxListeners', {
        enumerable: !0,
        get: function() {
          return d;
        },
        set: function(e) {
          if ('number' != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          d = e;
        }
      }),
        (a.init = function() {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (a.prototype.setMaxListeners = function(e) {
          if ('number' != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          return (this._maxListeners = e), this;
        }),
        (a.prototype.getMaxListeners = function() {
          return h(this);
        }),
        (a.prototype.emit = function(e) {
          for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
          var i = 'error' === e,
            n = this._events;
          if (void 0 !== n) i = i && void 0 === n.error;
          else if (!i) return !1;
          if (i) {
            var o;
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var a = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
            throw ((a.context = o), a);
          }
          var d = n[e];
          if (void 0 === d) return !1;
          if ('function' == typeof d) s(d, this, t);
          else {
            var f = d.length,
              h = m(d, f);
            for (r = 0; r < f; ++r) s(h[r], this, t);
          }
          return !0;
        }),
        (a.prototype.addListener = function(e, t) {
          return c(this, e, t, !1);
        }),
        (a.prototype.on = a.prototype.addListener),
        (a.prototype.prependListener = function(e, t) {
          return c(this, e, t, !0);
        }),
        (a.prototype.once = function(e, t) {
          return f(t), this.on(e, l(this, e, t)), this;
        }),
        (a.prototype.prependOnceListener = function(e, t) {
          return f(t), this.prependListener(e, l(this, e, t)), this;
        }),
        (a.prototype.removeListener = function(e, t) {
          var r, i, n, s, o;
          if ((f(t), void 0 === (i = this._events))) return this;
          if (void 0 === (r = i[e])) return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[e],
                i.removeListener && this.emit('removeListener', e, r.listener || t));
          else if ('function' != typeof r) {
            for (n = -1, s = r.length - 1; s >= 0; s--)
              if (r[s] === t || r[s].listener === t) {
                (o = r[s].listener), (n = s);
                break;
              }
            if (n < 0) return this;
            0 === n
              ? r.shift()
              : (function(e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, n),
              1 === r.length && (i[e] = r[0]),
              void 0 !== i.removeListener && this.emit('removeListener', e, o || t);
          }
          return this;
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.removeAllListeners = function(e) {
          var t, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 === arguments.length) {
            var n,
              s = Object.keys(r);
            for (i = 0; i < s.length; ++i)
              'removeListener' !== (n = s[i]) && this.removeAllListeners(n);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ('function' == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (a.prototype.listeners = function(e) {
          return b(this, e, !0);
        }),
        (a.prototype.rawListeners = function(e) {
          return b(this, e, !1);
        }),
        (a.listenerCount = function(e, t) {
          return 'function' == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t);
        }),
        (a.prototype.listenerCount = p),
        (a.prototype.eventNames = function() {
          return this._eventsCount > 0 ? i(this._events) : [];
        });
    },
    '../../node_modules/evp_bytestokey/index.js': function(e, t, r) {
      var i = r('../../node_modules/safe-buffer/index.js').Buffer,
        n = r('../../node_modules/md5.js/index.js');
      e.exports = function(e, t, r, s) {
        if (
          (i.isBuffer(e) || (e = i.from(e, 'binary')),
          t && (i.isBuffer(t) || (t = i.from(t, 'binary')), 8 !== t.length))
        )
          throw new RangeError('salt should be Buffer with 8 byte length');
        for (
          var o = r / 8, a = i.alloc(o), d = i.alloc(s || 0), f = i.alloc(0);
          o > 0 || s > 0;

        ) {
          var h = new n();
          h.update(f), h.update(e), t && h.update(t), (f = h.digest());
          var c = 0;
          if (o > 0) {
            var u = a.length - o;
            (c = Math.min(o, f.length)), f.copy(a, u, 0, c), (o -= c);
          }
          if (c < f.length && s > 0) {
            var l = d.length - s,
              b = Math.min(s, f.length - c);
            f.copy(d, l, c, c + b), (s -= b);
          }
        }
        return f.fill(0), { key: a, iv: d };
      };
    },
    '../../node_modules/hash-base/index.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/safe-buffer/index.js').Buffer,
        n = r('../../node_modules/stream-browserify/index.js').Transform;
      function s(e) {
        n.call(this),
          (this._block = i.allocUnsafe(e)),
          (this._blockSize = e),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1);
      }
      r('../../node_modules/inherits/inherits_browser.js')(s, n),
        (s.prototype._transform = function(e, t, r) {
          var i = null;
          try {
            this.update(e, t);
          } catch (e) {
            i = e;
          }
          r(i);
        }),
        (s.prototype._flush = function(e) {
          var t = null;
          try {
            this.push(this.digest());
          } catch (e) {
            t = e;
          }
          e(t);
        }),
        (s.prototype.update = function(e, t) {
          if (
            ((function(e, t) {
              if (!i.isBuffer(e) && 'string' != typeof e)
                throw new TypeError(t + ' must be a string or a buffer');
            })(e, 'Data'),
            this._finalized)
          )
            throw new Error('Digest already called');
          i.isBuffer(e) || (e = i.from(e, t));
          for (
            var r = this._block, n = 0;
            this._blockOffset + e.length - n >= this._blockSize;

          ) {
            for (var s = this._blockOffset; s < this._blockSize; ) r[s++] = e[n++];
            this._update(), (this._blockOffset = 0);
          }
          for (; n < e.length; ) r[this._blockOffset++] = e[n++];
          for (var o = 0, a = 8 * e.length; a > 0; ++o)
            (this._length[o] += a),
              (a = (this._length[o] / 4294967296) | 0) > 0 &&
                (this._length[o] -= 4294967296 * a);
          return this;
        }),
        (s.prototype._update = function() {
          throw new Error('_update is not implemented');
        }),
        (s.prototype.digest = function(e) {
          if (this._finalized) throw new Error('Digest already called');
          this._finalized = !0;
          var t = this._digest();
          void 0 !== e && (t = t.toString(e)),
            this._block.fill(0),
            (this._blockOffset = 0);
          for (var r = 0; r < 4; ++r) this._length[r] = 0;
          return t;
        }),
        (s.prototype._digest = function() {
          throw new Error('_digest is not implemented');
        }),
        (e.exports = s);
    },
    '../../node_modules/hmac-drbg/lib/hmac-drbg.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash.js'),
        n = r('../../node_modules/minimalistic-crypto-utils/lib/utils.js'),
        s = r('../../node_modules/minimalistic-assert/index.js');
      function o(e) {
        if (!(this instanceof o)) return new o(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var t = n.toArray(e.entropy, e.entropyEnc || 'hex'),
          r = n.toArray(e.nonce, e.nonceEnc || 'hex'),
          i = n.toArray(e.pers, e.persEnc || 'hex');
        s(
          t.length >= this.minEntropy / 8,
          'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
        ),
          this._init(t, r, i);
      }
      (e.exports = o),
        (o.prototype._init = function(e, t, r) {
          var i = e.concat(t).concat(r);
          (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
          for (var n = 0; n < this.V.length; n++) (this.K[n] = 0), (this.V[n] = 1);
          this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656);
        }),
        (o.prototype._hmac = function() {
          return new i.hmac(this.hash, this.K);
        }),
        (o.prototype._update = function(e) {
          var t = this._hmac()
            .update(this.V)
            .update([0]);
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac()
                .update(this.V)
                .digest()));
        }),
        (o.prototype.reseed = function(e, t, r, i) {
          'string' != typeof t && ((i = r), (r = t), (t = null)),
            (e = n.toArray(e, t)),
            (r = n.toArray(r, i)),
            s(
              e.length >= this.minEntropy / 8,
              'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1);
        }),
        (o.prototype.generate = function(e, t, r, i) {
          if (this._reseed > this.reseedInterval) throw new Error('Reseed is required');
          'string' != typeof t && ((i = r), (r = t), (t = null)),
            r && ((r = n.toArray(r, i || 'hex')), this._update(r));
          for (var s = []; s.length < e; )
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
              (s = s.concat(this.V));
          var o = s.slice(0, e);
          return this._update(r), this._reseed++, n.encode(o, t);
        });
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash.js': function(e, t, r) {
      var i = t;
      (i.utils = r(
        '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js'
      )),
        (i.common = r(
          '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/common.js'
        )),
        (i.sha = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha.js')),
        (i.ripemd = r(
          '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/ripemd.js'
        )),
        (i.hmac = r(
          '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/hmac.js'
        )),
        (i.sha1 = i.sha.sha1),
        (i.sha256 = i.sha.sha256),
        (i.sha224 = i.sha.sha224),
        (i.sha384 = i.sha.sha384),
        (i.sha512 = i.sha.sha512),
        (i.ripemd160 = i.ripemd.ripemd160);
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/common.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/minimalistic-assert/index.js');
      function s() {
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
      (t.BlockHash = s),
        (s.prototype.update = function(e, t) {
          if (
            ((e = i.toArray(e, t)),
            this.pending ? (this.pending = this.pending.concat(e)) : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - r, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = i.join32(e, 0, e.length - r, this.endian));
            for (var n = 0; n < e.length; n += this._delta32)
              this._update(e, n, n + this._delta32);
          }
          return this;
        }),
        (s.prototype.digest = function(e) {
          return this.update(this._pad()), n(null === this.pending), this._digest(e);
        }),
        (s.prototype._pad = function() {
          var e = this.pendingTotal,
            t = this._delta8,
            r = t - ((e + this.padLength) % t),
            i = new Array(r + this.padLength);
          i[0] = 128;
          for (var n = 1; n < r; n++) i[n] = 0;
          if (((e <<= 3), 'big' === this.endian)) {
            for (var s = 8; s < this.padLength; s++) i[n++] = 0;
            (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = (e >>> 24) & 255),
              (i[n++] = (e >>> 16) & 255),
              (i[n++] = (e >>> 8) & 255),
              (i[n++] = 255 & e);
          } else
            for (
              i[n++] = 255 & e,
                i[n++] = (e >>> 8) & 255,
                i[n++] = (e >>> 16) & 255,
                i[n++] = (e >>> 24) & 255,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                s = 8;
              s < this.padLength;
              s++
            )
              i[n++] = 0;
          return i;
        });
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/hmac.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/minimalistic-assert/index.js');
      function s(e, t, r) {
        if (!(this instanceof s)) return new s(e, t, r);
        (this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(i.toArray(t, r));
      }
      (e.exports = s),
        (s.prototype._init = function(e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            n(e.length <= this.blockSize);
          for (var t = e.length; t < this.blockSize; t++) e.push(0);
          for (t = 0; t < e.length; t++) e[t] ^= 54;
          for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
            e[t] ^= 106;
          this.outer = new this.Hash().update(e);
        }),
        (s.prototype.update = function(e, t) {
          return this.inner.update(e, t), this;
        }),
        (s.prototype.digest = function(e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e);
        });
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/ripemd.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/common.js'),
        s = i.rotl32,
        o = i.sum32,
        a = i.sum32_3,
        d = i.sum32_4,
        f = n.BlockHash;
      function h() {
        if (!(this instanceof h)) return new h();
        f.call(this),
          (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
          (this.endian = 'little');
      }
      function c(e, t, r, i) {
        return e <= 15
          ? t ^ r ^ i
          : e <= 31
          ? (t & r) | (~t & i)
          : e <= 47
          ? (t | ~r) ^ i
          : e <= 63
          ? (t & i) | (r & ~i)
          : t ^ (r | ~i);
      }
      function u(e) {
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
      function l(e) {
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
      i.inherits(h, f),
        (t.ripemd160 = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 192),
        (h.padLength = 64),
        (h.prototype._update = function(e, t) {
          for (
            var r = this.h[0],
              i = this.h[1],
              n = this.h[2],
              f = this.h[3],
              h = this.h[4],
              y = r,
              g = i,
              v = n,
              w = f,
              j = h,
              S = 0;
            S < 80;
            S++
          ) {
            var M = o(s(d(r, c(S, i, n, f), e[b[S] + t], u(S)), m[S]), h);
            (r = h),
              (h = f),
              (f = s(n, 10)),
              (n = i),
              (i = M),
              (M = o(s(d(y, c(79 - S, g, v, w), e[p[S] + t], l(S)), _[S]), j)),
              (y = j),
              (j = w),
              (w = s(v, 10)),
              (v = g),
              (g = M);
          }
          (M = a(this.h[1], n, w)),
            (this.h[1] = a(this.h[2], f, j)),
            (this.h[2] = a(this.h[3], h, y)),
            (this.h[3] = a(this.h[4], r, g)),
            (this.h[4] = a(this.h[0], i, v)),
            (this.h[0] = M);
        }),
        (h.prototype._digest = function(e) {
          return 'hex' === e ? i.toHex32(this.h, 'little') : i.split32(this.h, 'little');
        });
      var b = [
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
        p = [
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
        _ = [
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
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      (t.sha1 = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/1.js')),
        (t.sha224 = r(
          '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/224.js'
        )),
        (t.sha256 = r(
          '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/256.js'
        )),
        (t.sha384 = r(
          '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/384.js'
        )),
        (t.sha512 = r(
          '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/512.js'
        ));
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/1.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/common.js'),
        s = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/common.js'),
        o = i.rotl32,
        a = i.sum32,
        d = i.sum32_5,
        f = s.ft_1,
        h = n.BlockHash,
        c = [1518500249, 1859775393, 2400959708, 3395469782];
      function u() {
        if (!(this instanceof u)) return new u();
        h.call(this),
          (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
          (this.W = new Array(80));
      }
      i.inherits(u, h),
        (e.exports = u),
        (u.blockSize = 512),
        (u.outSize = 160),
        (u.hmacStrength = 80),
        (u.padLength = 64),
        (u.prototype._update = function(e, t) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
          for (; i < r.length; i++)
            r[i] = o(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
          var n = this.h[0],
            s = this.h[1],
            h = this.h[2],
            u = this.h[3],
            l = this.h[4];
          for (i = 0; i < r.length; i++) {
            var b = ~~(i / 20),
              p = d(o(n, 5), f(b, s, h, u), l, r[i], c[b]);
            (l = u), (u = h), (h = o(s, 30)), (s = n), (n = p);
          }
          (this.h[0] = a(this.h[0], n)),
            (this.h[1] = a(this.h[1], s)),
            (this.h[2] = a(this.h[2], h)),
            (this.h[3] = a(this.h[3], u)),
            (this.h[4] = a(this.h[4], l));
        }),
        (u.prototype._digest = function(e) {
          return 'hex' === e ? i.toHex32(this.h, 'big') : i.split32(this.h, 'big');
        });
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/224.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/256.js');
      function s() {
        if (!(this instanceof s)) return new s();
        n.call(this),
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
      i.inherits(s, n),
        (e.exports = s),
        (s.blockSize = 512),
        (s.outSize = 224),
        (s.hmacStrength = 192),
        (s.padLength = 64),
        (s.prototype._digest = function(e) {
          return 'hex' === e
            ? i.toHex32(this.h.slice(0, 7), 'big')
            : i.split32(this.h.slice(0, 7), 'big');
        });
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/256.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/common.js'),
        s = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/common.js'),
        o = r('../../node_modules/minimalistic-assert/index.js'),
        a = i.sum32,
        d = i.sum32_4,
        f = i.sum32_5,
        h = s.ch32,
        c = s.maj32,
        u = s.s0_256,
        l = s.s1_256,
        b = s.g0_256,
        p = s.g1_256,
        m = n.BlockHash,
        _ = [
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
          (this.k = _),
          (this.W = new Array(64));
      }
      i.inherits(y, m),
        (e.exports = y),
        (y.blockSize = 512),
        (y.outSize = 256),
        (y.hmacStrength = 192),
        (y.padLength = 64),
        (y.prototype._update = function(e, t) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
          for (; i < r.length; i++)
            r[i] = d(p(r[i - 2]), r[i - 7], b(r[i - 15]), r[i - 16]);
          var n = this.h[0],
            s = this.h[1],
            m = this.h[2],
            _ = this.h[3],
            y = this.h[4],
            g = this.h[5],
            v = this.h[6],
            w = this.h[7];
          for (o(this.k.length === r.length), i = 0; i < r.length; i++) {
            var j = f(w, l(y), h(y, g, v), this.k[i], r[i]),
              S = a(u(n), c(n, s, m));
            (w = v),
              (v = g),
              (g = y),
              (y = a(_, j)),
              (_ = m),
              (m = s),
              (s = n),
              (n = a(j, S));
          }
          (this.h[0] = a(this.h[0], n)),
            (this.h[1] = a(this.h[1], s)),
            (this.h[2] = a(this.h[2], m)),
            (this.h[3] = a(this.h[3], _)),
            (this.h[4] = a(this.h[4], y)),
            (this.h[5] = a(this.h[5], g)),
            (this.h[6] = a(this.h[6], v)),
            (this.h[7] = a(this.h[7], w));
        }),
        (y.prototype._digest = function(e) {
          return 'hex' === e ? i.toHex32(this.h, 'big') : i.split32(this.h, 'big');
        });
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/384.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/512.js');
      function s() {
        if (!(this instanceof s)) return new s();
        n.call(this),
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
      i.inherits(s, n),
        (e.exports = s),
        (s.blockSize = 1024),
        (s.outSize = 384),
        (s.hmacStrength = 192),
        (s.padLength = 128),
        (s.prototype._digest = function(e) {
          return 'hex' === e
            ? i.toHex32(this.h.slice(0, 12), 'big')
            : i.split32(this.h.slice(0, 12), 'big');
        });
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/512.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js'),
        n = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/common.js'),
        s = r('../../node_modules/minimalistic-assert/index.js'),
        o = i.rotr64_hi,
        a = i.rotr64_lo,
        d = i.shr64_hi,
        f = i.shr64_lo,
        h = i.sum64,
        c = i.sum64_hi,
        u = i.sum64_lo,
        l = i.sum64_4_hi,
        b = i.sum64_4_lo,
        p = i.sum64_5_hi,
        m = i.sum64_5_lo,
        _ = n.BlockHash,
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
      function g() {
        if (!(this instanceof g)) return new g();
        _.call(this),
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
      function v(e, t, r, i, n) {
        var s = (e & r) ^ (~e & n);
        return s < 0 && (s += 4294967296), s;
      }
      function w(e, t, r, i, n, s) {
        var o = (t & i) ^ (~t & s);
        return o < 0 && (o += 4294967296), o;
      }
      function j(e, t, r, i, n) {
        var s = (e & r) ^ (e & n) ^ (r & n);
        return s < 0 && (s += 4294967296), s;
      }
      function S(e, t, r, i, n, s) {
        var o = (t & i) ^ (t & s) ^ (i & s);
        return o < 0 && (o += 4294967296), o;
      }
      function M(e, t) {
        var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function x(e, t) {
        var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function k(e, t) {
        var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function E(e, t) {
        var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function A(e, t) {
        var r = o(e, t, 1) ^ o(e, t, 8) ^ d(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function I(e, t) {
        var r = a(e, t, 1) ^ a(e, t, 8) ^ f(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function B(e, t) {
        var r = o(e, t, 19) ^ o(t, e, 29) ^ d(e, t, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function R(e, t) {
        var r = a(e, t, 19) ^ a(t, e, 29) ^ f(e, t, 6);
        return r < 0 && (r += 4294967296), r;
      }
      i.inherits(g, _),
        (e.exports = g),
        (g.blockSize = 1024),
        (g.outSize = 512),
        (g.hmacStrength = 192),
        (g.padLength = 128),
        (g.prototype._prepareBlock = function(e, t) {
          for (var r = this.W, i = 0; i < 32; i++) r[i] = e[t + i];
          for (; i < r.length; i += 2) {
            var n = B(r[i - 4], r[i - 3]),
              s = R(r[i - 4], r[i - 3]),
              o = r[i - 14],
              a = r[i - 13],
              d = A(r[i - 30], r[i - 29]),
              f = I(r[i - 30], r[i - 29]),
              h = r[i - 32],
              c = r[i - 31];
            (r[i] = l(n, s, o, a, d, f, h, c)), (r[i + 1] = b(n, s, o, a, d, f, h, c));
          }
        }),
        (g.prototype._update = function(e, t) {
          this._prepareBlock(e, t);
          var r = this.W,
            i = this.h[0],
            n = this.h[1],
            o = this.h[2],
            a = this.h[3],
            d = this.h[4],
            f = this.h[5],
            l = this.h[6],
            b = this.h[7],
            _ = this.h[8],
            y = this.h[9],
            g = this.h[10],
            A = this.h[11],
            I = this.h[12],
            B = this.h[13],
            R = this.h[14],
            C = this.h[15];
          s(this.k.length === r.length);
          for (var P = 0; P < r.length; P += 2) {
            var O = R,
              T = C,
              L = k(_, y),
              z = E(_, y),
              D = v(_, y, g, A, I),
              q = w(_, y, g, A, I, B),
              N = this.k[P],
              U = this.k[P + 1],
              K = r[P],
              H = r[P + 1],
              F = p(O, T, L, z, D, q, N, U, K, H),
              W = m(O, T, L, z, D, q, N, U, K, H);
            (O = M(i, n)),
              (T = x(i, n)),
              (L = j(i, n, o, a, d)),
              (z = S(i, n, o, a, d, f));
            var V = c(O, T, L, z),
              X = u(O, T, L, z);
            (R = I),
              (C = B),
              (I = g),
              (B = A),
              (g = _),
              (A = y),
              (_ = c(l, b, F, W)),
              (y = u(b, b, F, W)),
              (l = d),
              (b = f),
              (d = o),
              (f = a),
              (o = i),
              (a = n),
              (i = c(F, W, V, X)),
              (n = u(F, W, V, X));
          }
          h(this.h, 0, i, n),
            h(this.h, 2, o, a),
            h(this.h, 4, d, f),
            h(this.h, 6, l, b),
            h(this.h, 8, _, y),
            h(this.h, 10, g, A),
            h(this.h, 12, I, B),
            h(this.h, 14, R, C);
        }),
        (g.prototype._digest = function(e) {
          return 'hex' === e ? i.toHex32(this.h, 'big') : i.split32(this.h, 'big');
        });
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/sha/common.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js')
        .rotr32;
      function n(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function s(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      function o(e, t, r) {
        return e ^ t ^ r;
      }
      (t.ft_1 = function(e, t, r, i) {
        return 0 === e
          ? n(t, r, i)
          : 1 === e || 3 === e
          ? o(t, r, i)
          : 2 === e
          ? s(t, r, i)
          : void 0;
      }),
        (t.ch32 = n),
        (t.maj32 = s),
        (t.p32 = o),
        (t.s0_256 = function(e) {
          return i(e, 2) ^ i(e, 13) ^ i(e, 22);
        }),
        (t.s1_256 = function(e) {
          return i(e, 6) ^ i(e, 11) ^ i(e, 25);
        }),
        (t.g0_256 = function(e) {
          return i(e, 7) ^ i(e, 18) ^ (e >>> 3);
        }),
        (t.g1_256 = function(e) {
          return i(e, 17) ^ i(e, 19) ^ (e >>> 10);
        });
    },
    '../../node_modules/hmac-drbg/node_modules/hash.js/lib/hash/utils.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/minimalistic-assert/index.js'),
        n = r('../../node_modules/inherits/inherits_browser.js');
      function s(e, t) {
        return (
          55296 == (64512 & e.charCodeAt(t)) &&
          !(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1))
        );
      }
      function o(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 16711680) |
            ((255 & e) << 24)) >>>
          0
        );
      }
      function a(e) {
        return 1 === e.length ? '0' + e : e;
      }
      function d(e) {
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
      (t.inherits = n),
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
              for (var i = 0, n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n);
                o < 128
                  ? (r[i++] = o)
                  : o < 2048
                  ? ((r[i++] = (o >> 6) | 192), (r[i++] = (63 & o) | 128))
                  : s(e, n)
                  ? ((o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n))),
                    (r[i++] = (o >> 18) | 240),
                    (r[i++] = ((o >> 12) & 63) | 128),
                    (r[i++] = ((o >> 6) & 63) | 128),
                    (r[i++] = (63 & o) | 128))
                  : ((r[i++] = (o >> 12) | 224),
                    (r[i++] = ((o >> 6) & 63) | 128),
                    (r[i++] = (63 & o) | 128));
              }
          else for (n = 0; n < e.length; n++) r[n] = 0 | e[n];
          return r;
        }),
        (t.toHex = function(e) {
          for (var t = '', r = 0; r < e.length; r++) t += a(e[r].toString(16));
          return t;
        }),
        (t.htonl = o),
        (t.toHex32 = function(e, t) {
          for (var r = '', i = 0; i < e.length; i++) {
            var n = e[i];
            'little' === t && (n = o(n)), (r += d(n.toString(16)));
          }
          return r;
        }),
        (t.zero2 = a),
        (t.zero8 = d),
        (t.join32 = function(e, t, r, n) {
          var s = r - t;
          i(s % 4 == 0);
          for (var o = new Array(s / 4), a = 0, d = t; a < o.length; a++, d += 4) {
            var f;
            (f =
              'big' === n
                ? (e[d] << 24) | (e[d + 1] << 16) | (e[d + 2] << 8) | e[d + 3]
                : (e[d + 3] << 24) | (e[d + 2] << 16) | (e[d + 1] << 8) | e[d]),
              (o[a] = f >>> 0);
          }
          return o;
        }),
        (t.split32 = function(e, t) {
          for (var r = new Array(4 * e.length), i = 0, n = 0; i < e.length; i++, n += 4) {
            var s = e[i];
            'big' === t
              ? ((r[n] = s >>> 24),
                (r[n + 1] = (s >>> 16) & 255),
                (r[n + 2] = (s >>> 8) & 255),
                (r[n + 3] = 255 & s))
              : ((r[n + 3] = s >>> 24),
                (r[n + 2] = (s >>> 16) & 255),
                (r[n + 1] = (s >>> 8) & 255),
                (r[n] = 255 & s));
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
        (t.sum32_4 = function(e, t, r, i) {
          return (e + t + r + i) >>> 0;
        }),
        (t.sum32_5 = function(e, t, r, i, n) {
          return (e + t + r + i + n) >>> 0;
        }),
        (t.sum64 = function(e, t, r, i) {
          var n = e[t],
            s = (i + e[t + 1]) >>> 0,
            o = (s < i ? 1 : 0) + r + n;
          (e[t] = o >>> 0), (e[t + 1] = s);
        }),
        (t.sum64_hi = function(e, t, r, i) {
          return (((t + i) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
        }),
        (t.sum64_lo = function(e, t, r, i) {
          return (t + i) >>> 0;
        }),
        (t.sum64_4_hi = function(e, t, r, i, n, s, o, a) {
          var d = 0,
            f = t;
          return (
            (d += (f = (f + i) >>> 0) < t ? 1 : 0),
            (d += (f = (f + s) >>> 0) < s ? 1 : 0),
            (e + r + n + o + (d += (f = (f + a) >>> 0) < a ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_4_lo = function(e, t, r, i, n, s, o, a) {
          return (t + i + s + a) >>> 0;
        }),
        (t.sum64_5_hi = function(e, t, r, i, n, s, o, a, d, f) {
          var h = 0,
            c = t;
          return (
            (h += (c = (c + i) >>> 0) < t ? 1 : 0),
            (h += (c = (c + s) >>> 0) < s ? 1 : 0),
            (h += (c = (c + a) >>> 0) < a ? 1 : 0),
            (e + r + n + o + d + (h += (c = (c + f) >>> 0) < f ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_5_lo = function(e, t, r, i, n, s, o, a, d, f) {
          return (t + i + s + a + f) >>> 0;
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
    '../../node_modules/inherits/inherits_browser.js': function(e, t) {
      'function' == typeof Object.create
        ? (e.exports = function(e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
              })));
          })
        : (e.exports = function(e, t) {
            if (t) {
              e.super_ = t;
              var r = function() {};
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            }
          });
    },
    '../../node_modules/md5.js/index.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/hash-base/index.js'),
        s = r('../../node_modules/safe-buffer/index.js').Buffer,
        o = new Array(16);
      function a() {
        n.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878);
      }
      function d(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function f(e, t, r, i, n, s, o) {
        return (d((e + ((t & r) | (~t & i)) + n + s) | 0, o) + t) | 0;
      }
      function h(e, t, r, i, n, s, o) {
        return (d((e + ((t & i) | (r & ~i)) + n + s) | 0, o) + t) | 0;
      }
      function c(e, t, r, i, n, s, o) {
        return (d((e + (t ^ r ^ i) + n + s) | 0, o) + t) | 0;
      }
      function u(e, t, r, i, n, s, o) {
        return (d((e + (r ^ (t | ~i)) + n + s) | 0, o) + t) | 0;
      }
      i(a, n),
        (a.prototype._update = function() {
          for (var e = o, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
          var r = this._a,
            i = this._b,
            n = this._c,
            s = this._d;
          (r = f(r, i, n, s, e[0], 3614090360, 7)),
            (s = f(s, r, i, n, e[1], 3905402710, 12)),
            (n = f(n, s, r, i, e[2], 606105819, 17)),
            (i = f(i, n, s, r, e[3], 3250441966, 22)),
            (r = f(r, i, n, s, e[4], 4118548399, 7)),
            (s = f(s, r, i, n, e[5], 1200080426, 12)),
            (n = f(n, s, r, i, e[6], 2821735955, 17)),
            (i = f(i, n, s, r, e[7], 4249261313, 22)),
            (r = f(r, i, n, s, e[8], 1770035416, 7)),
            (s = f(s, r, i, n, e[9], 2336552879, 12)),
            (n = f(n, s, r, i, e[10], 4294925233, 17)),
            (i = f(i, n, s, r, e[11], 2304563134, 22)),
            (r = f(r, i, n, s, e[12], 1804603682, 7)),
            (s = f(s, r, i, n, e[13], 4254626195, 12)),
            (n = f(n, s, r, i, e[14], 2792965006, 17)),
            (r = h(
              r,
              (i = f(i, n, s, r, e[15], 1236535329, 22)),
              n,
              s,
              e[1],
              4129170786,
              5
            )),
            (s = h(s, r, i, n, e[6], 3225465664, 9)),
            (n = h(n, s, r, i, e[11], 643717713, 14)),
            (i = h(i, n, s, r, e[0], 3921069994, 20)),
            (r = h(r, i, n, s, e[5], 3593408605, 5)),
            (s = h(s, r, i, n, e[10], 38016083, 9)),
            (n = h(n, s, r, i, e[15], 3634488961, 14)),
            (i = h(i, n, s, r, e[4], 3889429448, 20)),
            (r = h(r, i, n, s, e[9], 568446438, 5)),
            (s = h(s, r, i, n, e[14], 3275163606, 9)),
            (n = h(n, s, r, i, e[3], 4107603335, 14)),
            (i = h(i, n, s, r, e[8], 1163531501, 20)),
            (r = h(r, i, n, s, e[13], 2850285829, 5)),
            (s = h(s, r, i, n, e[2], 4243563512, 9)),
            (n = h(n, s, r, i, e[7], 1735328473, 14)),
            (r = c(
              r,
              (i = h(i, n, s, r, e[12], 2368359562, 20)),
              n,
              s,
              e[5],
              4294588738,
              4
            )),
            (s = c(s, r, i, n, e[8], 2272392833, 11)),
            (n = c(n, s, r, i, e[11], 1839030562, 16)),
            (i = c(i, n, s, r, e[14], 4259657740, 23)),
            (r = c(r, i, n, s, e[1], 2763975236, 4)),
            (s = c(s, r, i, n, e[4], 1272893353, 11)),
            (n = c(n, s, r, i, e[7], 4139469664, 16)),
            (i = c(i, n, s, r, e[10], 3200236656, 23)),
            (r = c(r, i, n, s, e[13], 681279174, 4)),
            (s = c(s, r, i, n, e[0], 3936430074, 11)),
            (n = c(n, s, r, i, e[3], 3572445317, 16)),
            (i = c(i, n, s, r, e[6], 76029189, 23)),
            (r = c(r, i, n, s, e[9], 3654602809, 4)),
            (s = c(s, r, i, n, e[12], 3873151461, 11)),
            (n = c(n, s, r, i, e[15], 530742520, 16)),
            (r = u(
              r,
              (i = c(i, n, s, r, e[2], 3299628645, 23)),
              n,
              s,
              e[0],
              4096336452,
              6
            )),
            (s = u(s, r, i, n, e[7], 1126891415, 10)),
            (n = u(n, s, r, i, e[14], 2878612391, 15)),
            (i = u(i, n, s, r, e[5], 4237533241, 21)),
            (r = u(r, i, n, s, e[12], 1700485571, 6)),
            (s = u(s, r, i, n, e[3], 2399980690, 10)),
            (n = u(n, s, r, i, e[10], 4293915773, 15)),
            (i = u(i, n, s, r, e[1], 2240044497, 21)),
            (r = u(r, i, n, s, e[8], 1873313359, 6)),
            (s = u(s, r, i, n, e[15], 4264355552, 10)),
            (n = u(n, s, r, i, e[6], 2734768916, 15)),
            (i = u(i, n, s, r, e[13], 1309151649, 21)),
            (r = u(r, i, n, s, e[4], 4149444226, 6)),
            (s = u(s, r, i, n, e[11], 3174756917, 10)),
            (n = u(n, s, r, i, e[2], 718787259, 15)),
            (i = u(i, n, s, r, e[9], 3951481745, 21)),
            (this._a = (this._a + r) | 0),
            (this._b = (this._b + i) | 0),
            (this._c = (this._c + n) | 0),
            (this._d = (this._d + s) | 0);
        }),
        (a.prototype._digest = function() {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var e = s.allocUnsafe(16);
          return (
            e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e
          );
        }),
        (e.exports = a);
    },
    '../../node_modules/miller-rabin/lib/mr.js': function(e, t, r) {
      var i = r('../../node_modules/bn.js/lib/bn.js'),
        n = r('../../node_modules/brorand/index.js');
      function s(e) {
        this.rand = e || new n.Rand();
      }
      (e.exports = s),
        (s.create = function(e) {
          return new s(e);
        }),
        (s.prototype._randbelow = function(e) {
          var t = e.bitLength(),
            r = Math.ceil(t / 8);
          do {
            var n = new i(this.rand.generate(r));
          } while (n.cmp(e) >= 0);
          return n;
        }),
        (s.prototype._randrange = function(e, t) {
          var r = t.sub(e);
          return e.add(this._randbelow(r));
        }),
        (s.prototype.test = function(e, t, r) {
          var n = e.bitLength(),
            s = i.mont(e),
            o = new i(1).toRed(s);
          t || (t = Math.max(1, (n / 48) | 0));
          for (var a = e.subn(1), d = 0; !a.testn(d); d++);
          for (var f = e.shrn(d), h = a.toRed(s); t > 0; t--) {
            var c = this._randrange(new i(2), a);
            r && r(c);
            var u = c.toRed(s).redPow(f);
            if (0 !== u.cmp(o) && 0 !== u.cmp(h)) {
              for (var l = 1; l < d; l++) {
                if (0 === (u = u.redSqr()).cmp(o)) return !1;
                if (0 === u.cmp(h)) break;
              }
              if (l === d) return !1;
            }
          }
          return !0;
        }),
        (s.prototype.getDivisor = function(e, t) {
          var r = e.bitLength(),
            n = i.mont(e),
            s = new i(1).toRed(n);
          t || (t = Math.max(1, (r / 48) | 0));
          for (var o = e.subn(1), a = 0; !o.testn(a); a++);
          for (var d = e.shrn(a), f = o.toRed(n); t > 0; t--) {
            var h = this._randrange(new i(2), o),
              c = e.gcd(h);
            if (0 !== c.cmpn(1)) return c;
            var u = h.toRed(n).redPow(d);
            if (0 !== u.cmp(s) && 0 !== u.cmp(f)) {
              for (var l = 1; l < a; l++) {
                if (0 === (u = u.redSqr()).cmp(s))
                  return u
                    .fromRed()
                    .subn(1)
                    .gcd(e);
                if (0 === u.cmp(f)) break;
              }
              if (l === a)
                return (u = u.redSqr())
                  .fromRed()
                  .subn(1)
                  .gcd(e);
            }
          }
          return !1;
        });
    },
    '../../node_modules/minimalistic-assert/index.js': function(e, t) {
      function r(e, t) {
        if (!e) throw new Error(t || 'Assertion failed');
      }
      (e.exports = r),
        (r.equal = function(e, t, r) {
          if (e != t) throw new Error(r || 'Assertion failed: ' + e + ' != ' + t);
        });
    },
    '../../node_modules/minimalistic-crypto-utils/lib/utils.js': function(e, t, r) {
      'use strict';
      var i = t;
      function n(e) {
        return 1 === e.length ? '0' + e : e;
      }
      function s(e) {
        for (var t = '', r = 0; r < e.length; r++) t += n(e[r].toString(16));
        return t;
      }
      (i.toArray = function(e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var r = [];
        if ('string' != typeof e) {
          for (var i = 0; i < e.length; i++) r[i] = 0 | e[i];
          return r;
        }
        if ('hex' === t) {
          (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e);
          for (i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16));
        } else
          for (i = 0; i < e.length; i++) {
            var n = e.charCodeAt(i),
              s = n >> 8,
              o = 255 & n;
            s ? r.push(s, o) : r.push(o);
          }
        return r;
      }),
        (i.zero2 = n),
        (i.toHex = s),
        (i.encode = function(e, t) {
          return 'hex' === t ? s(e) : e;
        });
    },
    '../../node_modules/parse-asn1/aesid.json': function(e) {
      e.exports = JSON.parse(
        '{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}'
      );
    },
    '../../node_modules/parse-asn1/asn1.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js');
      t.certificate = r('../../node_modules/parse-asn1/certificate.js');
      var n = i.define('RSAPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('modulus').int(),
          this.key('publicExponent').int(),
          this.key('privateExponent').int(),
          this.key('prime1').int(),
          this.key('prime2').int(),
          this.key('exponent1').int(),
          this.key('exponent2').int(),
          this.key('coefficient').int()
        );
      });
      t.RSAPrivateKey = n;
      var s = i.define('RSAPublicKey', function() {
        this.seq().obj(this.key('modulus').int(), this.key('publicExponent').int());
      });
      t.RSAPublicKey = s;
      var o = i.define('SubjectPublicKeyInfo', function() {
        this.seq().obj(
          this.key('algorithm').use(a),
          this.key('subjectPublicKey').bitstr()
        );
      });
      t.PublicKey = o;
      var a = i.define('AlgorithmIdentifier', function() {
          this.seq().obj(
            this.key('algorithm').objid(),
            this.key('none')
              .null_()
              .optional(),
            this.key('curve')
              .objid()
              .optional(),
            this.key('params')
              .seq()
              .obj(this.key('p').int(), this.key('q').int(), this.key('g').int())
              .optional()
          );
        }),
        d = i.define('PrivateKeyInfo', function() {
          this.seq().obj(
            this.key('version').int(),
            this.key('algorithm').use(a),
            this.key('subjectPrivateKey').octstr()
          );
        });
      t.PrivateKey = d;
      var f = i.define('EncryptedPrivateKeyInfo', function() {
        this.seq().obj(
          this.key('algorithm')
            .seq()
            .obj(
              this.key('id').objid(),
              this.key('decrypt')
                .seq()
                .obj(
                  this.key('kde')
                    .seq()
                    .obj(
                      this.key('id').objid(),
                      this.key('kdeparams')
                        .seq()
                        .obj(this.key('salt').octstr(), this.key('iters').int())
                    ),
                  this.key('cipher')
                    .seq()
                    .obj(this.key('algo').objid(), this.key('iv').octstr())
                )
            ),
          this.key('subjectPrivateKey').octstr()
        );
      });
      t.EncryptedPrivateKey = f;
      var h = i.define('DSAPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('p').int(),
          this.key('q').int(),
          this.key('g').int(),
          this.key('pub_key').int(),
          this.key('priv_key').int()
        );
      });
      (t.DSAPrivateKey = h),
        (t.DSAparam = i.define('DSAparam', function() {
          this.int();
        }));
      var c = i.define('ECPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('privateKey').octstr(),
          this.key('parameters')
            .optional()
            .explicit(0)
            .use(u),
          this.key('publicKey')
            .optional()
            .explicit(1)
            .bitstr()
        );
      });
      t.ECPrivateKey = c;
      var u = i.define('ECParameters', function() {
        this.choice({ namedCurve: this.objid() });
      });
      t.signature = i.define('signature', function() {
        this.seq().obj(this.key('r').int(), this.key('s').int());
      });
    },
    '../../node_modules/parse-asn1/certificate.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js'),
        n = i.define('Time', function() {
          this.choice({ utcTime: this.utctime(), generalTime: this.gentime() });
        }),
        s = i.define('AttributeTypeValue', function() {
          this.seq().obj(this.key('type').objid(), this.key('value').any());
        }),
        o = i.define('AlgorithmIdentifier', function() {
          this.seq().obj(
            this.key('algorithm').objid(),
            this.key('parameters').optional(),
            this.key('curve')
              .objid()
              .optional()
          );
        }),
        a = i.define('SubjectPublicKeyInfo', function() {
          this.seq().obj(
            this.key('algorithm').use(o),
            this.key('subjectPublicKey').bitstr()
          );
        }),
        d = i.define('RelativeDistinguishedName', function() {
          this.setof(s);
        }),
        f = i.define('RDNSequence', function() {
          this.seqof(d);
        }),
        h = i.define('Name', function() {
          this.choice({ rdnSequence: this.use(f) });
        }),
        c = i.define('Validity', function() {
          this.seq().obj(this.key('notBefore').use(n), this.key('notAfter').use(n));
        }),
        u = i.define('Extension', function() {
          this.seq().obj(
            this.key('extnID').objid(),
            this.key('critical')
              .bool()
              .def(!1),
            this.key('extnValue').octstr()
          );
        }),
        l = i.define('TBSCertificate', function() {
          this.seq().obj(
            this.key('version')
              .explicit(0)
              .int()
              .optional(),
            this.key('serialNumber').int(),
            this.key('signature').use(o),
            this.key('issuer').use(h),
            this.key('validity').use(c),
            this.key('subject').use(h),
            this.key('subjectPublicKeyInfo').use(a),
            this.key('issuerUniqueID')
              .implicit(1)
              .bitstr()
              .optional(),
            this.key('subjectUniqueID')
              .implicit(2)
              .bitstr()
              .optional(),
            this.key('extensions')
              .explicit(3)
              .seqof(u)
              .optional()
          );
        }),
        b = i.define('X509Certificate', function() {
          this.seq().obj(
            this.key('tbsCertificate').use(l),
            this.key('signatureAlgorithm').use(o),
            this.key('signatureValue').bitstr()
          );
        });
      e.exports = b;
    },
    '../../node_modules/parse-asn1/fixProc.js': function(e, t, r) {
      var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,
        n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
        s = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,
        o = r('../../node_modules/evp_bytestokey/index.js'),
        a = r('../../node_modules/browserify-aes/browser.js'),
        d = r('../../node_modules/safe-buffer/index.js').Buffer;
      e.exports = function(e, t) {
        var r,
          f = e.toString(),
          h = f.match(i);
        if (h) {
          var c = 'aes' + h[1],
            u = d.from(h[2], 'hex'),
            l = d.from(h[3].replace(/[\r\n]/g, ''), 'base64'),
            b = o(t, u.slice(0, 8), parseInt(h[1], 10)).key,
            p = [],
            m = a.createDecipheriv(c, b, u);
          p.push(m.update(l)), p.push(m.final()), (r = d.concat(p));
        } else {
          var _ = f.match(s);
          r = new d(_[2].replace(/[\r\n]/g, ''), 'base64');
        }
        return { tag: f.match(n)[1], data: r };
      };
    },
    '../../node_modules/parse-asn1/index.js': function(e, t, r) {
      var i = r('../../node_modules/parse-asn1/asn1.js'),
        n = r('../../node_modules/parse-asn1/aesid.json'),
        s = r('../../node_modules/parse-asn1/fixProc.js'),
        o = r('../../node_modules/browserify-aes/browser.js'),
        a = r('../../node_modules/pbkdf2/browser.js'),
        d = r('../../node_modules/safe-buffer/index.js').Buffer;
      function f(e) {
        var t;
        'object' != typeof e || d.isBuffer(e) || ((t = e.passphrase), (e = e.key)),
          'string' == typeof e && (e = d.from(e));
        var r,
          f,
          h = s(e, t),
          c = h.tag,
          u = h.data;
        switch (c) {
          case 'CERTIFICATE':
            f = i.certificate.decode(u, 'der').tbsCertificate.subjectPublicKeyInfo;
          case 'PUBLIC KEY':
            switch (
              (f || (f = i.PublicKey.decode(u, 'der')),
              (r = f.algorithm.algorithm.join('.')))
            ) {
              case '1.2.840.113549.1.1.1':
                return i.RSAPublicKey.decode(f.subjectPublicKey.data, 'der');
              case '1.2.840.10045.2.1':
                return (
                  (f.subjectPrivateKey = f.subjectPublicKey), { type: 'ec', data: f }
                );
              case '1.2.840.10040.4.1':
                return (
                  (f.algorithm.params.pub_key = i.DSAparam.decode(
                    f.subjectPublicKey.data,
                    'der'
                  )),
                  { type: 'dsa', data: f.algorithm.params }
                );
              default:
                throw new Error('unknown key id ' + r);
            }
            throw new Error('unknown key type ' + c);
          case 'ENCRYPTED PRIVATE KEY':
            u = (function(e, t) {
              var r = e.algorithm.decrypt.kde.kdeparams.salt,
                i = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                s = n[e.algorithm.decrypt.cipher.algo.join('.')],
                f = e.algorithm.decrypt.cipher.iv,
                h = e.subjectPrivateKey,
                c = parseInt(s.split('-')[1], 10) / 8,
                u = a.pbkdf2Sync(t, r, i, c, 'sha1'),
                l = o.createDecipheriv(s, u, f),
                b = [];
              return b.push(l.update(h)), b.push(l.final()), d.concat(b);
            })((u = i.EncryptedPrivateKey.decode(u, 'der')), t);
          case 'PRIVATE KEY':
            switch (
              (r = (f = i.PrivateKey.decode(u, 'der')).algorithm.algorithm.join('.'))
            ) {
              case '1.2.840.113549.1.1.1':
                return i.RSAPrivateKey.decode(f.subjectPrivateKey, 'der');
              case '1.2.840.10045.2.1':
                return {
                  curve: f.algorithm.curve,
                  privateKey: i.ECPrivateKey.decode(f.subjectPrivateKey, 'der').privateKey
                };
              case '1.2.840.10040.4.1':
                return (
                  (f.algorithm.params.priv_key = i.DSAparam.decode(
                    f.subjectPrivateKey,
                    'der'
                  )),
                  { type: 'dsa', params: f.algorithm.params }
                );
              default:
                throw new Error('unknown key id ' + r);
            }
            throw new Error('unknown key type ' + c);
          case 'RSA PUBLIC KEY':
            return i.RSAPublicKey.decode(u, 'der');
          case 'RSA PRIVATE KEY':
            return i.RSAPrivateKey.decode(u, 'der');
          case 'DSA PRIVATE KEY':
            return { type: 'dsa', params: i.DSAPrivateKey.decode(u, 'der') };
          case 'EC PRIVATE KEY':
            return {
              curve: (u = i.ECPrivateKey.decode(u, 'der')).parameters.value,
              privateKey: u.privateKey
            };
          default:
            throw new Error('unknown key type ' + c);
        }
      }
      (e.exports = f), (f.signature = i.signature);
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js': function(e, t, r) {
      var i = t;
      (i.bignum = r('../../node_modules/bn.js/lib/bn.js')),
        (i.define = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/api.js'
        ).define),
        (i.base = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js'
        )),
        (i.constants = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/index.js'
        )),
        (i.decoders = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/index.js'
        )),
        (i.encoders = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/index.js'
        ));
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/api.js': function(
      e,
      t,
      r
    ) {
      var i = r('../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js'),
        n = r('../../node_modules/inherits/inherits_browser.js');
      function s(e, t) {
        (this.name = e), (this.body = t), (this.decoders = {}), (this.encoders = {});
      }
      (t.define = function(e, t) {
        return new s(e, t);
      }),
        (s.prototype._createNamed = function(e) {
          var t;
          try {
            t = r('../../node_modules/vm-browserify/index.js').runInThisContext(
              '(function ' + this.name + '(entity) {\n  this._initNamed(entity);\n})'
            );
          } catch (e) {
            t = function(e) {
              this._initNamed(e);
            };
          }
          return (
            n(t, e),
            (t.prototype._initNamed = function(t) {
              e.call(this, t);
            }),
            new t(this)
          );
        }),
        (s.prototype._getDecoder = function(e) {
          return (
            (e = e || 'der'),
            this.decoders.hasOwnProperty(e) ||
              (this.decoders[e] = this._createNamed(i.decoders[e])),
            this.decoders[e]
          );
        }),
        (s.prototype.decode = function(e, t, r) {
          return this._getDecoder(t).decode(e, r);
        }),
        (s.prototype._getEncoder = function(e) {
          return (
            (e = e || 'der'),
            this.encoders.hasOwnProperty(e) ||
              (this.encoders[e] = this._createNamed(i.encoders[e])),
            this.encoders[e]
          );
        }),
        (s.prototype.encode = function(e, t, r) {
          return this._getEncoder(t).encode(e, r);
        });
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/buffer.js': function(
      e,
      t,
      r
    ) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js')
          .Reporter,
        s = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer;
      function o(e, t) {
        n.call(this, t),
          s.isBuffer(e)
            ? ((this.base = e), (this.offset = 0), (this.length = e.length))
            : this.error('Input not Buffer');
      }
      function a(e, t) {
        if (Array.isArray(e))
          (this.length = 0),
            (this.value = e.map(function(e) {
              return e instanceof a || (e = new a(e, t)), (this.length += e.length), e;
            }, this));
        else if ('number' == typeof e) {
          if (!(0 <= e && e <= 255)) return t.error('non-byte EncoderBuffer value');
          (this.value = e), (this.length = 1);
        } else if ('string' == typeof e)
          (this.value = e), (this.length = s.byteLength(e));
        else {
          if (!s.isBuffer(e)) return t.error('Unsupported type: ' + typeof e);
          (this.value = e), (this.length = e.length);
        }
      }
      i(o, n),
        (t.DecoderBuffer = o),
        (o.prototype.save = function() {
          return { offset: this.offset, reporter: n.prototype.save.call(this) };
        }),
        (o.prototype.restore = function(e) {
          var t = new o(this.base);
          return (
            (t.offset = e.offset),
            (t.length = this.offset),
            (this.offset = e.offset),
            n.prototype.restore.call(this, e.reporter),
            t
          );
        }),
        (o.prototype.isEmpty = function() {
          return this.offset === this.length;
        }),
        (o.prototype.readUInt8 = function(e) {
          return this.offset + 1 <= this.length
            ? this.base.readUInt8(this.offset++, !0)
            : this.error(e || 'DecoderBuffer overrun');
        }),
        (o.prototype.skip = function(e, t) {
          if (!(this.offset + e <= this.length))
            return this.error(t || 'DecoderBuffer overrun');
          var r = new o(this.base);
          return (
            (r._reporterState = this._reporterState),
            (r.offset = this.offset),
            (r.length = this.offset + e),
            (this.offset += e),
            r
          );
        }),
        (o.prototype.raw = function(e) {
          return this.base.slice(e ? e.offset : this.offset, this.length);
        }),
        (t.EncoderBuffer = a),
        (a.prototype.join = function(e, t) {
          return (
            e || (e = new s(this.length)),
            t || (t = 0),
            0 === this.length ||
              (Array.isArray(this.value)
                ? this.value.forEach(function(r) {
                    r.join(e, t), (t += r.length);
                  })
                : ('number' == typeof this.value
                    ? (e[t] = this.value)
                    : 'string' == typeof this.value
                    ? e.write(this.value, t)
                    : s.isBuffer(this.value) && this.value.copy(e, t),
                  (t += this.length))),
            e
          );
        });
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js': function(
      e,
      t,
      r
    ) {
      var i = t;
      (i.Reporter = r(
        '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/reporter.js'
      ).Reporter),
        (i.DecoderBuffer = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/buffer.js'
        ).DecoderBuffer),
        (i.EncoderBuffer = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/buffer.js'
        ).EncoderBuffer),
        (i.Node = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/node.js'
        ));
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/node.js': function(
      e,
      t,
      r
    ) {
      var i = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js'
        ).Reporter,
        n = r('../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js')
          .EncoderBuffer,
        s = r('../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/index.js')
          .DecoderBuffer,
        o = r('../../node_modules/minimalistic-assert/index.js'),
        a = [
          'seq',
          'seqof',
          'set',
          'setof',
          'objid',
          'bool',
          'gentime',
          'utctime',
          'null_',
          'enum',
          'int',
          'objDesc',
          'bitstr',
          'bmpstr',
          'charstr',
          'genstr',
          'graphstr',
          'ia5str',
          'iso646str',
          'numstr',
          'octstr',
          'printstr',
          't61str',
          'unistr',
          'utf8str',
          'videostr'
        ],
        d = [
          'key',
          'obj',
          'use',
          'optional',
          'explicit',
          'implicit',
          'def',
          'choice',
          'any',
          'contains'
        ].concat(a);
      function f(e, t) {
        var r = {};
        (this._baseState = r),
          (r.enc = e),
          (r.parent = t || null),
          (r.children = null),
          (r.tag = null),
          (r.args = null),
          (r.reverseArgs = null),
          (r.choice = null),
          (r.optional = !1),
          (r.any = !1),
          (r.obj = !1),
          (r.use = null),
          (r.useDecoder = null),
          (r.key = null),
          (r.default = null),
          (r.explicit = null),
          (r.implicit = null),
          (r.contains = null),
          r.parent || ((r.children = []), this._wrap());
      }
      e.exports = f;
      var h = [
        'enc',
        'parent',
        'children',
        'tag',
        'args',
        'reverseArgs',
        'choice',
        'optional',
        'any',
        'obj',
        'use',
        'alteredUse',
        'key',
        'default',
        'explicit',
        'implicit',
        'contains'
      ];
      (f.prototype.clone = function() {
        var e = this._baseState,
          t = {};
        h.forEach(function(r) {
          t[r] = e[r];
        });
        var r = new this.constructor(t.parent);
        return (r._baseState = t), r;
      }),
        (f.prototype._wrap = function() {
          var e = this._baseState;
          d.forEach(function(t) {
            this[t] = function() {
              var r = new this.constructor(this);
              return e.children.push(r), r[t].apply(r, arguments);
            };
          }, this);
        }),
        (f.prototype._init = function(e) {
          var t = this._baseState;
          o(null === t.parent),
            e.call(this),
            (t.children = t.children.filter(function(e) {
              return e._baseState.parent === this;
            }, this)),
            o.equal(t.children.length, 1, 'Root node can have only one child');
        }),
        (f.prototype._useArgs = function(e) {
          var t = this._baseState,
            r = e.filter(function(e) {
              return e instanceof this.constructor;
            }, this);
          (e = e.filter(function(e) {
            return !(e instanceof this.constructor);
          }, this)),
            0 !== r.length &&
              (o(null === t.children),
              (t.children = r),
              r.forEach(function(e) {
                e._baseState.parent = this;
              }, this)),
            0 !== e.length &&
              (o(null === t.args),
              (t.args = e),
              (t.reverseArgs = e.map(function(e) {
                if ('object' != typeof e || e.constructor !== Object) return e;
                var t = {};
                return (
                  Object.keys(e).forEach(function(r) {
                    r == (0 | r) && (r |= 0);
                    var i = e[r];
                    t[i] = r;
                  }),
                  t
                );
              })));
        }),
        [
          '_peekTag',
          '_decodeTag',
          '_use',
          '_decodeStr',
          '_decodeObjid',
          '_decodeTime',
          '_decodeNull',
          '_decodeInt',
          '_decodeBool',
          '_decodeList',
          '_encodeComposite',
          '_encodeStr',
          '_encodeObjid',
          '_encodeTime',
          '_encodeNull',
          '_encodeInt',
          '_encodeBool'
        ].forEach(function(e) {
          f.prototype[e] = function() {
            var t = this._baseState;
            throw new Error(e + ' not implemented for encoding: ' + t.enc);
          };
        }),
        a.forEach(function(e) {
          f.prototype[e] = function() {
            var t = this._baseState,
              r = Array.prototype.slice.call(arguments);
            return o(null === t.tag), (t.tag = e), this._useArgs(r), this;
          };
        }),
        (f.prototype.use = function(e) {
          o(e);
          var t = this._baseState;
          return o(null === t.use), (t.use = e), this;
        }),
        (f.prototype.optional = function() {
          return (this._baseState.optional = !0), this;
        }),
        (f.prototype.def = function(e) {
          var t = this._baseState;
          return o(null === t.default), (t.default = e), (t.optional = !0), this;
        }),
        (f.prototype.explicit = function(e) {
          var t = this._baseState;
          return o(null === t.explicit && null === t.implicit), (t.explicit = e), this;
        }),
        (f.prototype.implicit = function(e) {
          var t = this._baseState;
          return o(null === t.explicit && null === t.implicit), (t.implicit = e), this;
        }),
        (f.prototype.obj = function() {
          var e = this._baseState,
            t = Array.prototype.slice.call(arguments);
          return (e.obj = !0), 0 !== t.length && this._useArgs(t), this;
        }),
        (f.prototype.key = function(e) {
          var t = this._baseState;
          return o(null === t.key), (t.key = e), this;
        }),
        (f.prototype.any = function() {
          return (this._baseState.any = !0), this;
        }),
        (f.prototype.choice = function(e) {
          var t = this._baseState;
          return (
            o(null === t.choice),
            (t.choice = e),
            this._useArgs(
              Object.keys(e).map(function(t) {
                return e[t];
              })
            ),
            this
          );
        }),
        (f.prototype.contains = function(e) {
          var t = this._baseState;
          return o(null === t.use), (t.contains = e), this;
        }),
        (f.prototype._decode = function(e, t) {
          var r = this._baseState;
          if (null === r.parent) return e.wrapResult(r.children[0]._decode(e, t));
          var i,
            n = r.default,
            o = !0,
            a = null;
          if ((null !== r.key && (a = e.enterKey(r.key)), r.optional)) {
            var d = null;
            if (
              (null !== r.explicit
                ? (d = r.explicit)
                : null !== r.implicit
                ? (d = r.implicit)
                : null !== r.tag && (d = r.tag),
              null !== d || r.any)
            ) {
              if (((o = this._peekTag(e, d, r.any)), e.isError(o))) return o;
            } else {
              var f = e.save();
              try {
                null === r.choice
                  ? this._decodeGeneric(r.tag, e, t)
                  : this._decodeChoice(e, t),
                  (o = !0);
              } catch (e) {
                o = !1;
              }
              e.restore(f);
            }
          }
          if ((r.obj && o && (i = e.enterObject()), o)) {
            if (null !== r.explicit) {
              var h = this._decodeTag(e, r.explicit);
              if (e.isError(h)) return h;
              e = h;
            }
            var c = e.offset;
            if (null === r.use && null === r.choice) {
              if (r.any) f = e.save();
              var u = this._decodeTag(e, null !== r.implicit ? r.implicit : r.tag, r.any);
              if (e.isError(u)) return u;
              r.any ? (n = e.raw(f)) : (e = u);
            }
            if (
              (t && t.track && null !== r.tag && t.track(e.path(), c, e.length, 'tagged'),
              t &&
                t.track &&
                null !== r.tag &&
                t.track(e.path(), e.offset, e.length, 'content'),
              (n = r.any
                ? n
                : null === r.choice
                ? this._decodeGeneric(r.tag, e, t)
                : this._decodeChoice(e, t)),
              e.isError(n))
            )
              return n;
            if (
              (r.any ||
                null !== r.choice ||
                null === r.children ||
                r.children.forEach(function(r) {
                  r._decode(e, t);
                }),
              r.contains && ('octstr' === r.tag || 'bitstr' === r.tag))
            ) {
              var l = new s(n);
              n = this._getUse(r.contains, e._reporterState.obj)._decode(l, t);
            }
          }
          return (
            r.obj && o && (n = e.leaveObject(i)),
            null === r.key || (null === n && !0 !== o)
              ? null !== a && e.exitKey(a)
              : e.leaveKey(a, r.key, n),
            n
          );
        }),
        (f.prototype._decodeGeneric = function(e, t, r) {
          var i = this._baseState;
          return 'seq' === e || 'set' === e
            ? null
            : 'seqof' === e || 'setof' === e
            ? this._decodeList(t, e, i.args[0], r)
            : /str$/.test(e)
            ? this._decodeStr(t, e, r)
            : 'objid' === e && i.args
            ? this._decodeObjid(t, i.args[0], i.args[1], r)
            : 'objid' === e
            ? this._decodeObjid(t, null, null, r)
            : 'gentime' === e || 'utctime' === e
            ? this._decodeTime(t, e, r)
            : 'null_' === e
            ? this._decodeNull(t, r)
            : 'bool' === e
            ? this._decodeBool(t, r)
            : 'objDesc' === e
            ? this._decodeStr(t, e, r)
            : 'int' === e || 'enum' === e
            ? this._decodeInt(t, i.args && i.args[0], r)
            : null !== i.use
            ? this._getUse(i.use, t._reporterState.obj)._decode(t, r)
            : t.error('unknown tag: ' + e);
        }),
        (f.prototype._getUse = function(e, t) {
          var r = this._baseState;
          return (
            (r.useDecoder = this._use(e, t)),
            o(null === r.useDecoder._baseState.parent),
            (r.useDecoder = r.useDecoder._baseState.children[0]),
            r.implicit !== r.useDecoder._baseState.implicit &&
              ((r.useDecoder = r.useDecoder.clone()),
              (r.useDecoder._baseState.implicit = r.implicit)),
            r.useDecoder
          );
        }),
        (f.prototype._decodeChoice = function(e, t) {
          var r = this._baseState,
            i = null,
            n = !1;
          return (
            Object.keys(r.choice).some(function(s) {
              var o = e.save(),
                a = r.choice[s];
              try {
                var d = a._decode(e, t);
                if (e.isError(d)) return !1;
                (i = { type: s, value: d }), (n = !0);
              } catch (t) {
                return e.restore(o), !1;
              }
              return !0;
            }, this),
            n ? i : e.error('Choice not matched')
          );
        }),
        (f.prototype._createEncoderBuffer = function(e) {
          return new n(e, this.reporter);
        }),
        (f.prototype._encode = function(e, t, r) {
          var i = this._baseState;
          if (null === i.default || i.default !== e) {
            var n = this._encodeValue(e, t, r);
            if (void 0 !== n && !this._skipDefault(n, t, r)) return n;
          }
        }),
        (f.prototype._encodeValue = function(e, t, r) {
          var n = this._baseState;
          if (null === n.parent) return n.children[0]._encode(e, t || new i());
          var s = null;
          if (((this.reporter = t), n.optional && void 0 === e)) {
            if (null === n.default) return;
            e = n.default;
          }
          var o = null,
            a = !1;
          if (n.any) s = this._createEncoderBuffer(e);
          else if (n.choice) s = this._encodeChoice(e, t);
          else if (n.contains) (o = this._getUse(n.contains, r)._encode(e, t)), (a = !0);
          else if (n.children)
            (o = n.children
              .map(function(r) {
                if ('null_' === r._baseState.tag) return r._encode(null, t, e);
                if (null === r._baseState.key) return t.error('Child should have a key');
                var i = t.enterKey(r._baseState.key);
                if ('object' != typeof e)
                  return t.error('Child expected, but input is not object');
                var n = r._encode(e[r._baseState.key], t, e);
                return t.leaveKey(i), n;
              }, this)
              .filter(function(e) {
                return e;
              })),
              (o = this._createEncoderBuffer(o));
          else if ('seqof' === n.tag || 'setof' === n.tag) {
            if (!n.args || 1 !== n.args.length)
              return t.error('Too many args for : ' + n.tag);
            if (!Array.isArray(e)) return t.error('seqof/setof, but data is not Array');
            var d = this.clone();
            (d._baseState.implicit = null),
              (o = this._createEncoderBuffer(
                e.map(function(r) {
                  var i = this._baseState;
                  return this._getUse(i.args[0], e)._encode(r, t);
                }, d)
              ));
          } else
            null !== n.use
              ? (s = this._getUse(n.use, r)._encode(e, t))
              : ((o = this._encodePrimitive(n.tag, e)), (a = !0));
          if (!n.any && null === n.choice) {
            var f = null !== n.implicit ? n.implicit : n.tag,
              h = null === n.implicit ? 'universal' : 'context';
            null === f
              ? null === n.use && t.error('Tag could be omitted only for .use()')
              : null === n.use && (s = this._encodeComposite(f, a, h, o));
          }
          return (
            null !== n.explicit &&
              (s = this._encodeComposite(n.explicit, !1, 'context', s)),
            s
          );
        }),
        (f.prototype._encodeChoice = function(e, t) {
          var r = this._baseState,
            i = r.choice[e.type];
          return (
            i || o(!1, e.type + ' not found in ' + JSON.stringify(Object.keys(r.choice))),
            i._encode(e.value, t)
          );
        }),
        (f.prototype._encodePrimitive = function(e, t) {
          var r = this._baseState;
          if (/str$/.test(e)) return this._encodeStr(t, e);
          if ('objid' === e && r.args)
            return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
          if ('objid' === e) return this._encodeObjid(t, null, null);
          if ('gentime' === e || 'utctime' === e) return this._encodeTime(t, e);
          if ('null_' === e) return this._encodeNull();
          if ('int' === e || 'enum' === e)
            return this._encodeInt(t, r.args && r.reverseArgs[0]);
          if ('bool' === e) return this._encodeBool(t);
          if ('objDesc' === e) return this._encodeStr(t, e);
          throw new Error('Unsupported tag: ' + e);
        }),
        (f.prototype._isNumstr = function(e) {
          return /^[0-9 ]*$/.test(e);
        }),
        (f.prototype._isPrintstr = function(e) {
          return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e);
        });
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/base/reporter.js': function(
      e,
      t,
      r
    ) {
      var i = r('../../node_modules/inherits/inherits_browser.js');
      function n(e) {
        this._reporterState = { obj: null, path: [], options: e || {}, errors: [] };
      }
      function s(e, t) {
        (this.path = e), this.rethrow(t);
      }
      (t.Reporter = n),
        (n.prototype.isError = function(e) {
          return e instanceof s;
        }),
        (n.prototype.save = function() {
          var e = this._reporterState;
          return { obj: e.obj, pathLen: e.path.length };
        }),
        (n.prototype.restore = function(e) {
          var t = this._reporterState;
          (t.obj = e.obj), (t.path = t.path.slice(0, e.pathLen));
        }),
        (n.prototype.enterKey = function(e) {
          return this._reporterState.path.push(e);
        }),
        (n.prototype.exitKey = function(e) {
          var t = this._reporterState;
          t.path = t.path.slice(0, e - 1);
        }),
        (n.prototype.leaveKey = function(e, t, r) {
          var i = this._reporterState;
          this.exitKey(e), null !== i.obj && (i.obj[t] = r);
        }),
        (n.prototype.path = function() {
          return this._reporterState.path.join('/');
        }),
        (n.prototype.enterObject = function() {
          var e = this._reporterState,
            t = e.obj;
          return (e.obj = {}), t;
        }),
        (n.prototype.leaveObject = function(e) {
          var t = this._reporterState,
            r = t.obj;
          return (t.obj = e), r;
        }),
        (n.prototype.error = function(e) {
          var t,
            r = this._reporterState,
            i = e instanceof s;
          if (
            ((t = i
              ? e
              : new s(
                  r.path
                    .map(function(e) {
                      return '[' + JSON.stringify(e) + ']';
                    })
                    .join(''),
                  e.message || e,
                  e.stack
                )),
            !r.options.partial)
          )
            throw t;
          return i || r.errors.push(t), t;
        }),
        (n.prototype.wrapResult = function(e) {
          var t = this._reporterState;
          return t.options.partial
            ? { result: this.isError(e) ? null : e, errors: t.errors }
            : e;
        }),
        i(s, Error),
        (s.prototype.rethrow = function(e) {
          if (
            ((this.message = e + ' at: ' + (this.path || '(shallow)')),
            Error.captureStackTrace && Error.captureStackTrace(this, s),
            !this.stack)
          )
            try {
              throw new Error(this.message);
            } catch (e) {
              this.stack = e.stack;
            }
          return this;
        });
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/der.js': function(
      e,
      t,
      r
    ) {
      var i = r(
        '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/index.js'
      );
      (t.tagClass = { 0: 'universal', 1: 'application', 2: 'context', 3: 'private' }),
        (t.tagClassByName = i._reverse(t.tagClass)),
        (t.tag = {
          0: 'end',
          1: 'bool',
          2: 'int',
          3: 'bitstr',
          4: 'octstr',
          5: 'null_',
          6: 'objid',
          7: 'objDesc',
          8: 'external',
          9: 'real',
          10: 'enum',
          11: 'embed',
          12: 'utf8str',
          13: 'relativeOid',
          16: 'seq',
          17: 'set',
          18: 'numstr',
          19: 'printstr',
          20: 't61str',
          21: 'videostr',
          22: 'ia5str',
          23: 'utctime',
          24: 'gentime',
          25: 'graphstr',
          26: 'iso646str',
          27: 'genstr',
          28: 'unistr',
          29: 'charstr',
          30: 'bmpstr'
        }),
        (t.tagByName = i._reverse(t.tag));
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/index.js': function(
      e,
      t,
      r
    ) {
      var i = t;
      (i._reverse = function(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function(r) {
            (0 | r) == r && (r |= 0);
            var i = e[r];
            t[i] = r;
          }),
          t
        );
      }),
        (i.der = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/constants/der.js'
        ));
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/der.js': function(
      e,
      t,
      r
    ) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js'),
        s = n.base,
        o = n.bignum,
        a = n.constants.der;
      function d(e) {
        (this.enc = 'der'),
          (this.name = e.name),
          (this.entity = e),
          (this.tree = new f()),
          this.tree._init(e.body);
      }
      function f(e) {
        s.Node.call(this, 'der', e);
      }
      function h(e, t) {
        var r = e.readUInt8(t);
        if (e.isError(r)) return r;
        var i = a.tagClass[r >> 6],
          n = 0 == (32 & r);
        if (31 == (31 & r)) {
          var s = r;
          for (r = 0; 128 == (128 & s); ) {
            if (((s = e.readUInt8(t)), e.isError(s))) return s;
            (r <<= 7), (r |= 127 & s);
          }
        } else r &= 31;
        return { cls: i, primitive: n, tag: r, tagStr: a.tag[r] };
      }
      function c(e, t, r) {
        var i = e.readUInt8(r);
        if (e.isError(i)) return i;
        if (!t && 128 === i) return null;
        if (0 == (128 & i)) return i;
        var n = 127 & i;
        if (n > 4) return e.error('length octect is too long');
        i = 0;
        for (var s = 0; s < n; s++) {
          i <<= 8;
          var o = e.readUInt8(r);
          if (e.isError(o)) return o;
          i |= o;
        }
        return i;
      }
      (e.exports = d),
        (d.prototype.decode = function(e, t) {
          return (
            e instanceof s.DecoderBuffer || (e = new s.DecoderBuffer(e, t)),
            this.tree._decode(e, t)
          );
        }),
        i(f, s.Node),
        (f.prototype._peekTag = function(e, t, r) {
          if (e.isEmpty()) return !1;
          var i = e.save(),
            n = h(e, 'Failed to peek tag: "' + t + '"');
          return e.isError(n)
            ? n
            : (e.restore(i), n.tag === t || n.tagStr === t || n.tagStr + 'of' === t || r);
        }),
        (f.prototype._decodeTag = function(e, t, r) {
          var i = h(e, 'Failed to decode tag of "' + t + '"');
          if (e.isError(i)) return i;
          var n = c(e, i.primitive, 'Failed to get length of "' + t + '"');
          if (e.isError(n)) return n;
          if (!r && i.tag !== t && i.tagStr !== t && i.tagStr + 'of' !== t)
            return e.error('Failed to match tag: "' + t + '"');
          if (i.primitive || null !== n)
            return e.skip(n, 'Failed to match body of: "' + t + '"');
          var s = e.save(),
            o = this._skipUntilEnd(
              e,
              'Failed to skip indefinite length body: "' + this.tag + '"'
            );
          return e.isError(o)
            ? o
            : ((n = e.offset - s.offset),
              e.restore(s),
              e.skip(n, 'Failed to match body of: "' + t + '"'));
        }),
        (f.prototype._skipUntilEnd = function(e, t) {
          for (;;) {
            var r = h(e, t);
            if (e.isError(r)) return r;
            var i,
              n = c(e, r.primitive, t);
            if (e.isError(n)) return n;
            if (
              ((i = r.primitive || null !== n ? e.skip(n) : this._skipUntilEnd(e, t)),
              e.isError(i))
            )
              return i;
            if ('end' === r.tagStr) break;
          }
        }),
        (f.prototype._decodeList = function(e, t, r, i) {
          for (var n = []; !e.isEmpty(); ) {
            var s = this._peekTag(e, 'end');
            if (e.isError(s)) return s;
            var o = r.decode(e, 'der', i);
            if (e.isError(o) && s) break;
            n.push(o);
          }
          return n;
        }),
        (f.prototype._decodeStr = function(e, t) {
          if ('bitstr' === t) {
            var r = e.readUInt8();
            return e.isError(r) ? r : { unused: r, data: e.raw() };
          }
          if ('bmpstr' === t) {
            var i = e.raw();
            if (i.length % 2 == 1)
              return e.error('Decoding of string type: bmpstr length mismatch');
            for (var n = '', s = 0; s < i.length / 2; s++)
              n += String.fromCharCode(i.readUInt16BE(2 * s));
            return n;
          }
          if ('numstr' === t) {
            var o = e.raw().toString('ascii');
            return this._isNumstr(o)
              ? o
              : e.error('Decoding of string type: numstr unsupported characters');
          }
          if ('octstr' === t) return e.raw();
          if ('objDesc' === t) return e.raw();
          if ('printstr' === t) {
            var a = e.raw().toString('ascii');
            return this._isPrintstr(a)
              ? a
              : e.error('Decoding of string type: printstr unsupported characters');
          }
          return /str$/.test(t)
            ? e.raw().toString()
            : e.error('Decoding of string type: ' + t + ' unsupported');
        }),
        (f.prototype._decodeObjid = function(e, t, r) {
          for (var i, n = [], s = 0; !e.isEmpty(); ) {
            var o = e.readUInt8();
            (s <<= 7), (s |= 127 & o), 0 == (128 & o) && (n.push(s), (s = 0));
          }
          128 & o && n.push(s);
          var a = (n[0] / 40) | 0,
            d = n[0] % 40;
          if (((i = r ? n : [a, d].concat(n.slice(1))), t)) {
            var f = t[i.join(' ')];
            void 0 === f && (f = t[i.join('.')]), void 0 !== f && (i = f);
          }
          return i;
        }),
        (f.prototype._decodeTime = function(e, t) {
          var r = e.raw().toString();
          if ('gentime' === t)
            var i = 0 | r.slice(0, 4),
              n = 0 | r.slice(4, 6),
              s = 0 | r.slice(6, 8),
              o = 0 | r.slice(8, 10),
              a = 0 | r.slice(10, 12),
              d = 0 | r.slice(12, 14);
          else {
            if ('utctime' !== t)
              return e.error('Decoding ' + t + ' time is not supported yet');
            (i = 0 | r.slice(0, 2)),
              (n = 0 | r.slice(2, 4)),
              (s = 0 | r.slice(4, 6)),
              (o = 0 | r.slice(6, 8)),
              (a = 0 | r.slice(8, 10)),
              (d = 0 | r.slice(10, 12));
            i = i < 70 ? 2e3 + i : 1900 + i;
          }
          return Date.UTC(i, n - 1, s, o, a, d, 0);
        }),
        (f.prototype._decodeNull = function(e) {
          return null;
        }),
        (f.prototype._decodeBool = function(e) {
          var t = e.readUInt8();
          return e.isError(t) ? t : 0 !== t;
        }),
        (f.prototype._decodeInt = function(e, t) {
          var r = e.raw(),
            i = new o(r);
          return t && (i = t[i.toString(10)] || i), i;
        }),
        (f.prototype._use = function(e, t) {
          return 'function' == typeof e && (e = e(t)), e._getDecoder('der').tree;
        });
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/index.js': function(
      e,
      t,
      r
    ) {
      var i = t;
      (i.der = r(
        '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/der.js'
      )),
        (i.pem = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/pem.js'
        ));
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/pem.js': function(
      e,
      t,
      r
    ) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer,
        s = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/decoders/der.js'
        );
      function o(e) {
        s.call(this, e), (this.enc = 'pem');
      }
      i(o, s),
        (e.exports = o),
        (o.prototype.decode = function(e, t) {
          for (
            var r = e.toString().split(/[\r\n]+/g),
              i = t.label.toUpperCase(),
              o = /^-----(BEGIN|END) ([^-]+)-----$/,
              a = -1,
              d = -1,
              f = 0;
            f < r.length;
            f++
          ) {
            var h = r[f].match(o);
            if (null !== h && h[2] === i) {
              if (-1 !== a) {
                if ('END' !== h[1]) break;
                d = f;
                break;
              }
              if ('BEGIN' !== h[1]) break;
              a = f;
            }
          }
          if (-1 === a || -1 === d) throw new Error('PEM section not found for: ' + i);
          var c = r.slice(a + 1, d).join('');
          c.replace(/[^a-z0-9\+\/=]+/gi, '');
          var u = new n(c, 'base64');
          return s.prototype.decode.call(this, u, t);
        });
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/der.js': function(
      e,
      t,
      r
    ) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer,
        s = r('../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1.js'),
        o = s.base,
        a = s.constants.der;
      function d(e) {
        (this.enc = 'der'),
          (this.name = e.name),
          (this.entity = e),
          (this.tree = new f()),
          this.tree._init(e.body);
      }
      function f(e) {
        o.Node.call(this, 'der', e);
      }
      function h(e) {
        return e < 10 ? '0' + e : e;
      }
      (e.exports = d),
        (d.prototype.encode = function(e, t) {
          return this.tree._encode(e, t).join();
        }),
        i(f, o.Node),
        (f.prototype._encodeComposite = function(e, t, r, i) {
          var s,
            o = (function(e, t, r, i) {
              var n;
              'seqof' === e ? (e = 'seq') : 'setof' === e && (e = 'set');
              if (a.tagByName.hasOwnProperty(e)) n = a.tagByName[e];
              else {
                if ('number' != typeof e || (0 | e) !== e)
                  return i.error('Unknown tag: ' + e);
                n = e;
              }
              if (n >= 31) return i.error('Multi-octet tag encoding unsupported');
              t || (n |= 32);
              return (n |= a.tagClassByName[r || 'universal'] << 6);
            })(e, t, r, this.reporter);
          if (i.length < 128)
            return (
              ((s = new n(2))[0] = o),
              (s[1] = i.length),
              this._createEncoderBuffer([s, i])
            );
          for (var d = 1, f = i.length; f >= 256; f >>= 8) d++;
          ((s = new n(2 + d))[0] = o), (s[1] = 128 | d);
          f = 1 + d;
          for (var h = i.length; h > 0; f--, h >>= 8) s[f] = 255 & h;
          return this._createEncoderBuffer([s, i]);
        }),
        (f.prototype._encodeStr = function(e, t) {
          if ('bitstr' === t) return this._createEncoderBuffer([0 | e.unused, e.data]);
          if ('bmpstr' === t) {
            for (var r = new n(2 * e.length), i = 0; i < e.length; i++)
              r.writeUInt16BE(e.charCodeAt(i), 2 * i);
            return this._createEncoderBuffer(r);
          }
          return 'numstr' === t
            ? this._isNumstr(e)
              ? this._createEncoderBuffer(e)
              : this.reporter.error(
                  'Encoding of string type: numstr supports only digits and space'
                )
            : 'printstr' === t
            ? this._isPrintstr(e)
              ? this._createEncoderBuffer(e)
              : this.reporter.error(
                  'Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark'
                )
            : /str$/.test(t) || 'objDesc' === t
            ? this._createEncoderBuffer(e)
            : this.reporter.error('Encoding of string type: ' + t + ' unsupported');
        }),
        (f.prototype._encodeObjid = function(e, t, r) {
          if ('string' == typeof e) {
            if (!t)
              return this.reporter.error('string objid given, but no values map found');
            if (!t.hasOwnProperty(e))
              return this.reporter.error('objid not found in values map');
            e = t[e].split(/[\s\.]+/g);
            for (var i = 0; i < e.length; i++) e[i] |= 0;
          } else if (Array.isArray(e)) {
            e = e.slice();
            for (i = 0; i < e.length; i++) e[i] |= 0;
          }
          if (!Array.isArray(e))
            return this.reporter.error(
              'objid() should be either array or string, got: ' + JSON.stringify(e)
            );
          if (!r) {
            if (e[1] >= 40) return this.reporter.error('Second objid identifier OOB');
            e.splice(0, 2, 40 * e[0] + e[1]);
          }
          var s = 0;
          for (i = 0; i < e.length; i++) {
            var o = e[i];
            for (s++; o >= 128; o >>= 7) s++;
          }
          var a = new n(s),
            d = a.length - 1;
          for (i = e.length - 1; i >= 0; i--) {
            o = e[i];
            for (a[d--] = 127 & o; (o >>= 7) > 0; ) a[d--] = 128 | (127 & o);
          }
          return this._createEncoderBuffer(a);
        }),
        (f.prototype._encodeTime = function(e, t) {
          var r,
            i = new Date(e);
          return (
            'gentime' === t
              ? (r = [
                  h(i.getFullYear()),
                  h(i.getUTCMonth() + 1),
                  h(i.getUTCDate()),
                  h(i.getUTCHours()),
                  h(i.getUTCMinutes()),
                  h(i.getUTCSeconds()),
                  'Z'
                ].join(''))
              : 'utctime' === t
              ? (r = [
                  h(i.getFullYear() % 100),
                  h(i.getUTCMonth() + 1),
                  h(i.getUTCDate()),
                  h(i.getUTCHours()),
                  h(i.getUTCMinutes()),
                  h(i.getUTCSeconds()),
                  'Z'
                ].join(''))
              : this.reporter.error('Encoding ' + t + ' time is not supported yet'),
            this._encodeStr(r, 'octstr')
          );
        }),
        (f.prototype._encodeNull = function() {
          return this._createEncoderBuffer('');
        }),
        (f.prototype._encodeInt = function(e, t) {
          if ('string' == typeof e) {
            if (!t)
              return this.reporter.error('String int or enum given, but no values map');
            if (!t.hasOwnProperty(e))
              return this.reporter.error(
                "Values map doesn't contain: " + JSON.stringify(e)
              );
            e = t[e];
          }
          if ('number' != typeof e && !n.isBuffer(e)) {
            var r = e.toArray();
            !e.sign && 128 & r[0] && r.unshift(0), (e = new n(r));
          }
          if (n.isBuffer(e)) {
            var i = e.length;
            0 === e.length && i++;
            var s = new n(i);
            return e.copy(s), 0 === e.length && (s[0] = 0), this._createEncoderBuffer(s);
          }
          if (e < 128) return this._createEncoderBuffer(e);
          if (e < 256) return this._createEncoderBuffer([0, e]);
          i = 1;
          for (var o = e; o >= 256; o >>= 8) i++;
          for (o = (s = new Array(i)).length - 1; o >= 0; o--)
            (s[o] = 255 & e), (e >>= 8);
          return 128 & s[0] && s.unshift(0), this._createEncoderBuffer(new n(s));
        }),
        (f.prototype._encodeBool = function(e) {
          return this._createEncoderBuffer(e ? 255 : 0);
        }),
        (f.prototype._use = function(e, t) {
          return 'function' == typeof e && (e = e(t)), e._getEncoder('der').tree;
        }),
        (f.prototype._skipDefault = function(e, t, r) {
          var i,
            n = this._baseState;
          if (null === n.default) return !1;
          var s = e.join();
          if (
            (void 0 === n.defaultBuffer &&
              (n.defaultBuffer = this._encodeValue(n.default, t, r).join()),
            s.length !== n.defaultBuffer.length)
          )
            return !1;
          for (i = 0; i < s.length; i++) if (s[i] !== n.defaultBuffer[i]) return !1;
          return !0;
        });
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/index.js': function(
      e,
      t,
      r
    ) {
      var i = t;
      (i.der = r(
        '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/der.js'
      )),
        (i.pem = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/pem.js'
        ));
    },
    '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/pem.js': function(
      e,
      t,
      r
    ) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r(
          '../../node_modules/parse-asn1/node_modules/asn1.js/lib/asn1/encoders/der.js'
        );
      function s(e) {
        n.call(this, e), (this.enc = 'pem');
      }
      i(s, n),
        (e.exports = s),
        (s.prototype.encode = function(e, t) {
          for (
            var r = n.prototype.encode.call(this, e).toString('base64'),
              i = ['-----BEGIN ' + t.label + '-----'],
              s = 0;
            s < r.length;
            s += 64
          )
            i.push(r.slice(s, s + 64));
          return i.push('-----END ' + t.label + '-----'), i.join('\n');
        });
    },
    '../../node_modules/pbkdf2/browser.js': function(e, t, r) {
      (t.pbkdf2 = r('../../node_modules/pbkdf2/lib/async.js')),
        (t.pbkdf2Sync = r('../../node_modules/pbkdf2/lib/sync-browser.js'));
    },
    '../../node_modules/pbkdf2/lib/async.js': function(e, t, r) {
      (function(t, i) {
        var n,
          s = r('../../node_modules/pbkdf2/lib/precondition.js'),
          o = r('../../node_modules/pbkdf2/lib/default-encoding.js'),
          a = r('../../node_modules/pbkdf2/lib/sync-browser.js'),
          d = r('../../node_modules/safe-buffer/index.js').Buffer,
          f = t.crypto && t.crypto.subtle,
          h = {
            sha: 'SHA-1',
            'sha-1': 'SHA-1',
            sha1: 'SHA-1',
            sha256: 'SHA-256',
            'sha-256': 'SHA-256',
            sha384: 'SHA-384',
            'sha-384': 'SHA-384',
            'sha-512': 'SHA-512',
            sha512: 'SHA-512'
          },
          c = [];
        function u(e, t, r, i, n) {
          return f
            .importKey('raw', e, { name: 'PBKDF2' }, !1, ['deriveBits'])
            .then(function(e) {
              return f.deriveBits(
                { name: 'PBKDF2', salt: t, iterations: r, hash: { name: n } },
                e,
                i << 3
              );
            })
            .then(function(e) {
              return d.from(e);
            });
        }
        e.exports = function(e, r, l, b, p, m) {
          'function' == typeof p && ((m = p), (p = void 0));
          var _ = h[(p = p || 'sha1').toLowerCase()];
          if (!_ || 'function' != typeof t.Promise)
            return i.nextTick(function() {
              var t;
              try {
                t = a(e, r, l, b, p);
              } catch (e) {
                return m(e);
              }
              m(null, t);
            });
          if ((s(e, r, l, b), 'function' != typeof m))
            throw new Error('No callback provided to pbkdf2');
          d.isBuffer(e) || (e = d.from(e, o)),
            d.isBuffer(r) || (r = d.from(r, o)),
            (function(e, t) {
              e.then(
                function(e) {
                  i.nextTick(function() {
                    t(null, e);
                  });
                },
                function(e) {
                  i.nextTick(function() {
                    t(e);
                  });
                }
              );
            })(
              (function(e) {
                if (t.process && !t.process.browser) return Promise.resolve(!1);
                if (!f || !f.importKey || !f.deriveBits) return Promise.resolve(!1);
                if (void 0 !== c[e]) return c[e];
                var r = u((n = n || d.alloc(8)), n, 10, 128, e)
                  .then(function() {
                    return !0;
                  })
                  .catch(function() {
                    return !1;
                  });
                return (c[e] = r), r;
              })(_).then(function(t) {
                return t ? u(e, r, l, b, _) : a(e, r, l, b, p);
              }),
              m
            );
        };
      }.call(
        this,
        r('../../node_modules/webpack/buildin/global.js'),
        r('../../node_modules/process/browser.js')
      ));
    },
    '../../node_modules/pbkdf2/lib/default-encoding.js': function(e, t, r) {
      (function(t) {
        var r;
        t.browser
          ? (r = 'utf-8')
          : (r =
              parseInt(t.version.split('.')[0].slice(1), 10) >= 6 ? 'utf-8' : 'binary');
        e.exports = r;
      }.call(this, r('../../node_modules/process/browser.js')));
    },
    '../../node_modules/pbkdf2/lib/precondition.js': function(e, t, r) {
      (function(t) {
        var r = Math.pow(2, 30) - 1;
        function i(e, r) {
          if ('string' != typeof e && !t.isBuffer(e))
            throw new TypeError(r + ' must be a buffer or string');
        }
        e.exports = function(e, t, n, s) {
          if ((i(e, 'Password'), i(t, 'Salt'), 'number' != typeof n))
            throw new TypeError('Iterations not a number');
          if (n < 0) throw new TypeError('Bad iterations');
          if ('number' != typeof s) throw new TypeError('Key length not a number');
          if (s < 0 || s > r || s != s) throw new TypeError('Bad key length');
        };
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer
      ));
    },
    '../../node_modules/pbkdf2/lib/sync-browser.js': function(e, t, r) {
      var i = r('../../node_modules/create-hash/md5.js'),
        n = r('../../node_modules/ripemd160/index.js'),
        s = r('../../node_modules/sha.js/index.js'),
        o = r('../../node_modules/pbkdf2/lib/precondition.js'),
        a = r('../../node_modules/pbkdf2/lib/default-encoding.js'),
        d = r('../../node_modules/safe-buffer/index.js').Buffer,
        f = d.alloc(128),
        h = {
          md5: 16,
          sha1: 20,
          sha224: 28,
          sha256: 32,
          sha384: 48,
          sha512: 64,
          rmd160: 20,
          ripemd160: 20
        };
      function c(e, t, r) {
        var o = (function(e) {
            function t(t) {
              return s(e)
                .update(t)
                .digest();
            }
            return 'rmd160' === e || 'ripemd160' === e
              ? function(e) {
                  return new n().update(e).digest();
                }
              : 'md5' === e
              ? i
              : t;
          })(e),
          a = 'sha512' === e || 'sha384' === e ? 128 : 64;
        t.length > a ? (t = o(t)) : t.length < a && (t = d.concat([t, f], a));
        for (
          var c = d.allocUnsafe(a + h[e]), u = d.allocUnsafe(a + h[e]), l = 0;
          l < a;
          l++
        )
          (c[l] = 54 ^ t[l]), (u[l] = 92 ^ t[l]);
        var b = d.allocUnsafe(a + r + 4);
        c.copy(b, 0, 0, a),
          (this.ipad1 = b),
          (this.ipad2 = c),
          (this.opad = u),
          (this.alg = e),
          (this.blocksize = a),
          (this.hash = o),
          (this.size = h[e]);
      }
      (c.prototype.run = function(e, t) {
        return (
          e.copy(t, this.blocksize),
          this.hash(t).copy(this.opad, this.blocksize),
          this.hash(this.opad)
        );
      }),
        (e.exports = function(e, t, r, i, n) {
          o(e, t, r, i),
            d.isBuffer(e) || (e = d.from(e, a)),
            d.isBuffer(t) || (t = d.from(t, a));
          var s = new c((n = n || 'sha1'), e, t.length),
            f = d.allocUnsafe(i),
            u = d.allocUnsafe(t.length + 4);
          t.copy(u, 0, 0, t.length);
          for (var l = 0, b = h[n], p = Math.ceil(i / b), m = 1; m <= p; m++) {
            u.writeUInt32BE(m, t.length);
            for (var _ = s.run(u, s.ipad1), y = _, g = 1; g < r; g++) {
              y = s.run(y, s.ipad2);
              for (var v = 0; v < b; v++) _[v] ^= y[v];
            }
            _.copy(f, l), (l += b);
          }
          return f;
        });
    },
    '../../node_modules/process-nextick-args/index.js': function(e, t, r) {
      'use strict';
      (function(t) {
        void 0 === t ||
        !t.version ||
        0 === t.version.indexOf('v0.') ||
        (0 === t.version.indexOf('v1.') && 0 !== t.version.indexOf('v1.8.'))
          ? (e.exports = {
              nextTick: function(e, r, i, n) {
                if ('function' != typeof e)
                  throw new TypeError('"callback" argument must be a function');
                var s,
                  o,
                  a = arguments.length;
                switch (a) {
                  case 0:
                  case 1:
                    return t.nextTick(e);
                  case 2:
                    return t.nextTick(function() {
                      e.call(null, r);
                    });
                  case 3:
                    return t.nextTick(function() {
                      e.call(null, r, i);
                    });
                  case 4:
                    return t.nextTick(function() {
                      e.call(null, r, i, n);
                    });
                  default:
                    for (s = new Array(a - 1), o = 0; o < s.length; )
                      s[o++] = arguments[o];
                    return t.nextTick(function() {
                      e.apply(null, s);
                    });
                }
              }
            })
          : (e.exports = t);
      }.call(this, r('../../node_modules/process/browser.js')));
    },
    '../../node_modules/public-encrypt/browser.js': function(e, t, r) {
      (t.publicEncrypt = r('../../node_modules/public-encrypt/publicEncrypt.js')),
        (t.privateDecrypt = r('../../node_modules/public-encrypt/privateDecrypt.js')),
        (t.privateEncrypt = function(e, r) {
          return t.publicEncrypt(e, r, !0);
        }),
        (t.publicDecrypt = function(e, r) {
          return t.privateDecrypt(e, r, !0);
        });
    },
    '../../node_modules/public-encrypt/mgf.js': function(e, t, r) {
      var i = r('../../node_modules/create-hash/browser.js'),
        n = r('../../node_modules/safe-buffer/index.js').Buffer;
      function s(e) {
        var t = n.allocUnsafe(4);
        return t.writeUInt32BE(e, 0), t;
      }
      e.exports = function(e, t) {
        for (var r, o = n.alloc(0), a = 0; o.length < t; )
          (r = s(a++)),
            (o = n.concat([
              o,
              i('sha1')
                .update(e)
                .update(r)
                .digest()
            ]));
        return o.slice(0, t);
      };
    },
    '../../node_modules/public-encrypt/privateDecrypt.js': function(e, t, r) {
      var i = r('../../node_modules/parse-asn1/index.js'),
        n = r('../../node_modules/public-encrypt/mgf.js'),
        s = r('../../node_modules/public-encrypt/xor.js'),
        o = r('../../node_modules/bn.js/lib/bn.js'),
        a = r('../../node_modules/browserify-rsa/index.js'),
        d = r('../../node_modules/create-hash/browser.js'),
        f = r('../../node_modules/public-encrypt/withPublic.js'),
        h = r('../../node_modules/safe-buffer/index.js').Buffer;
      e.exports = function(e, t, r) {
        var c;
        c = e.padding ? e.padding : r ? 1 : 4;
        var u,
          l = i(e),
          b = l.modulus.byteLength();
        if (t.length > b || new o(t).cmp(l.modulus) >= 0)
          throw new Error('decryption error');
        u = r ? f(new o(t), l) : a(t, l);
        var p = h.alloc(b - u.length);
        if (((u = h.concat([p, u], b)), 4 === c))
          return (function(e, t) {
            var r = e.modulus.byteLength(),
              i = d('sha1')
                .update(h.alloc(0))
                .digest(),
              o = i.length;
            if (0 !== t[0]) throw new Error('decryption error');
            var a = t.slice(1, o + 1),
              f = t.slice(o + 1),
              c = s(a, n(f, o)),
              u = s(f, n(c, r - o - 1));
            if (
              (function(e, t) {
                (e = h.from(e)), (t = h.from(t));
                var r = 0,
                  i = e.length;
                e.length !== t.length && (r++, (i = Math.min(e.length, t.length)));
                var n = -1;
                for (; ++n < i; ) r += e[n] ^ t[n];
                return r;
              })(i, u.slice(0, o))
            )
              throw new Error('decryption error');
            var l = o;
            for (; 0 === u[l]; ) l++;
            if (1 !== u[l++]) throw new Error('decryption error');
            return u.slice(l);
          })(l, u);
        if (1 === c)
          return (function(e, t, r) {
            var i = t.slice(0, 2),
              n = 2,
              s = 0;
            for (; 0 !== t[n++]; )
              if (n >= t.length) {
                s++;
                break;
              }
            var o = t.slice(2, n - 1);
            (('0002' !== i.toString('hex') && !r) ||
              ('0001' !== i.toString('hex') && r)) &&
              s++;
            o.length < 8 && s++;
            if (s) throw new Error('decryption error');
            return t.slice(n);
          })(0, u, r);
        if (3 === c) return u;
        throw new Error('unknown padding');
      };
    },
    '../../node_modules/public-encrypt/publicEncrypt.js': function(e, t, r) {
      var i = r('../../node_modules/parse-asn1/index.js'),
        n = r('../../node_modules/randombytes/browser.js'),
        s = r('../../node_modules/create-hash/browser.js'),
        o = r('../../node_modules/public-encrypt/mgf.js'),
        a = r('../../node_modules/public-encrypt/xor.js'),
        d = r('../../node_modules/bn.js/lib/bn.js'),
        f = r('../../node_modules/public-encrypt/withPublic.js'),
        h = r('../../node_modules/browserify-rsa/index.js'),
        c = r('../../node_modules/safe-buffer/index.js').Buffer;
      e.exports = function(e, t, r) {
        var u;
        u = e.padding ? e.padding : r ? 1 : 4;
        var l,
          b = i(e);
        if (4 === u)
          l = (function(e, t) {
            var r = e.modulus.byteLength(),
              i = t.length,
              f = s('sha1')
                .update(c.alloc(0))
                .digest(),
              h = f.length,
              u = 2 * h;
            if (i > r - u - 2) throw new Error('message too long');
            var l = c.alloc(r - i - u - 2),
              b = r - h - 1,
              p = n(h),
              m = a(c.concat([f, l, c.alloc(1, 1), t], b), o(p, b)),
              _ = a(p, o(m, h));
            return new d(c.concat([c.alloc(1), _, m], r));
          })(b, t);
        else if (1 === u)
          l = (function(e, t, r) {
            var i,
              s = t.length,
              o = e.modulus.byteLength();
            if (s > o - 11) throw new Error('message too long');
            i = r
              ? c.alloc(o - s - 3, 255)
              : (function(e) {
                  var t,
                    r = c.allocUnsafe(e),
                    i = 0,
                    s = n(2 * e),
                    o = 0;
                  for (; i < e; )
                    o === s.length && ((s = n(2 * e)), (o = 0)),
                      (t = s[o++]) && (r[i++] = t);
                  return r;
                })(o - s - 3);
            return new d(c.concat([c.from([0, r ? 1 : 2]), i, c.alloc(1), t], o));
          })(b, t, r);
        else {
          if (3 !== u) throw new Error('unknown padding');
          if ((l = new d(t)).cmp(b.modulus) >= 0)
            throw new Error('data too long for modulus');
        }
        return r ? h(l, b) : f(l, b);
      };
    },
    '../../node_modules/public-encrypt/withPublic.js': function(e, t, r) {
      var i = r('../../node_modules/bn.js/lib/bn.js'),
        n = r('../../node_modules/safe-buffer/index.js').Buffer;
      e.exports = function(e, t) {
        return n.from(
          e
            .toRed(i.mont(t.modulus))
            .redPow(new i(t.publicExponent))
            .fromRed()
            .toArray()
        );
      };
    },
    '../../node_modules/public-encrypt/xor.js': function(e, t) {
      e.exports = function(e, t) {
        for (var r = e.length, i = -1; ++i < r; ) e[i] ^= t[i];
        return e;
      };
    },
    '../../node_modules/randombytes/browser.js': function(e, t, r) {
      'use strict';
      (function(t, i) {
        var n = r('../../node_modules/safe-buffer/index.js').Buffer,
          s = t.crypto || t.msCrypto;
        s && s.getRandomValues
          ? (e.exports = function(e, t) {
              if (e > 4294967295) throw new RangeError('requested too many random bytes');
              var r = n.allocUnsafe(e);
              if (e > 0)
                if (e > 65536)
                  for (var o = 0; o < e; o += 65536)
                    s.getRandomValues(r.slice(o, o + 65536));
                else s.getRandomValues(r);
              if ('function' == typeof t)
                return i.nextTick(function() {
                  t(null, r);
                });
              return r;
            })
          : (e.exports = function() {
              throw new Error(
                'Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11'
              );
            });
      }.call(
        this,
        r('../../node_modules/webpack/buildin/global.js'),
        r('../../node_modules/process/browser.js')
      ));
    },
    '../../node_modules/randomfill/browser.js': function(e, t, r) {
      'use strict';
      (function(e, i) {
        function n() {
          throw new Error(
            'secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11'
          );
        }
        var s = r('../../node_modules/safe-buffer/index.js'),
          o = r('../../node_modules/randombytes/browser.js'),
          a = s.Buffer,
          d = s.kMaxLength,
          f = e.crypto || e.msCrypto,
          h = Math.pow(2, 32) - 1;
        function c(e, t) {
          if ('number' != typeof e || e != e)
            throw new TypeError('offset must be a number');
          if (e > h || e < 0) throw new TypeError('offset must be a uint32');
          if (e > d || e > t) throw new RangeError('offset out of range');
        }
        function u(e, t, r) {
          if ('number' != typeof e || e != e)
            throw new TypeError('size must be a number');
          if (e > h || e < 0) throw new TypeError('size must be a uint32');
          if (e + t > r || e > d) throw new RangeError('buffer too small');
        }
        function l(e, t, r, n) {
          if (i.browser) {
            var s = e.buffer,
              a = new Uint8Array(s, t, r);
            return (
              f.getRandomValues(a),
              n
                ? void i.nextTick(function() {
                    n(null, e);
                  })
                : e
            );
          }
          if (!n) return o(r).copy(e, t), e;
          o(r, function(r, i) {
            if (r) return n(r);
            i.copy(e, t), n(null, e);
          });
        }
        (f && f.getRandomValues) || !i.browser
          ? ((t.randomFill = function(t, r, i, n) {
              if (!(a.isBuffer(t) || t instanceof e.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
              if ('function' == typeof r) (n = r), (r = 0), (i = t.length);
              else if ('function' == typeof i) (n = i), (i = t.length - r);
              else if ('function' != typeof n)
                throw new TypeError('"cb" argument must be a function');
              return c(r, t.length), u(i, r, t.length), l(t, r, i, n);
            }),
            (t.randomFillSync = function(t, r, i) {
              void 0 === r && (r = 0);
              if (!(a.isBuffer(t) || t instanceof e.Uint8Array))
                throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
              c(r, t.length), void 0 === i && (i = t.length - r);
              return u(i, r, t.length), l(t, r, i);
            }))
          : ((t.randomFill = n), (t.randomFillSync = n));
      }.call(
        this,
        r('../../node_modules/webpack/buildin/global.js'),
        r('../../node_modules/process/browser.js')
      ));
    },
    '../../node_modules/ripemd160/index.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js')
          .Buffer,
        n = r('../../node_modules/inherits/inherits_browser.js'),
        s = r('../../node_modules/hash-base/index.js'),
        o = new Array(16),
        a = [
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
        d = [
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
        f = [
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
        h = [
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
        ],
        c = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        u = [1352829926, 1548603684, 1836072691, 2053994217, 0];
      function l() {
        s.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520);
      }
      function b(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function p(e, t, r, i, n, s, o, a) {
        return (b((e + (t ^ r ^ i) + s + o) | 0, a) + n) | 0;
      }
      function m(e, t, r, i, n, s, o, a) {
        return (b((e + ((t & r) | (~t & i)) + s + o) | 0, a) + n) | 0;
      }
      function _(e, t, r, i, n, s, o, a) {
        return (b((e + ((t | ~r) ^ i) + s + o) | 0, a) + n) | 0;
      }
      function y(e, t, r, i, n, s, o, a) {
        return (b((e + ((t & i) | (r & ~i)) + s + o) | 0, a) + n) | 0;
      }
      function g(e, t, r, i, n, s, o, a) {
        return (b((e + (t ^ (r | ~i)) + s + o) | 0, a) + n) | 0;
      }
      n(l, s),
        (l.prototype._update = function() {
          for (var e = o, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
          for (
            var r = 0 | this._a,
              i = 0 | this._b,
              n = 0 | this._c,
              s = 0 | this._d,
              l = 0 | this._e,
              v = 0 | this._a,
              w = 0 | this._b,
              j = 0 | this._c,
              S = 0 | this._d,
              M = 0 | this._e,
              x = 0;
            x < 80;
            x += 1
          ) {
            var k, E;
            x < 16
              ? ((k = p(r, i, n, s, l, e[a[x]], c[0], f[x])),
                (E = g(v, w, j, S, M, e[d[x]], u[0], h[x])))
              : x < 32
              ? ((k = m(r, i, n, s, l, e[a[x]], c[1], f[x])),
                (E = y(v, w, j, S, M, e[d[x]], u[1], h[x])))
              : x < 48
              ? ((k = _(r, i, n, s, l, e[a[x]], c[2], f[x])),
                (E = _(v, w, j, S, M, e[d[x]], u[2], h[x])))
              : x < 64
              ? ((k = y(r, i, n, s, l, e[a[x]], c[3], f[x])),
                (E = m(v, w, j, S, M, e[d[x]], u[3], h[x])))
              : ((k = g(r, i, n, s, l, e[a[x]], c[4], f[x])),
                (E = p(v, w, j, S, M, e[d[x]], u[4], h[x]))),
              (r = l),
              (l = s),
              (s = b(n, 10)),
              (n = i),
              (i = k),
              (v = M),
              (M = S),
              (S = b(j, 10)),
              (j = w),
              (w = E);
          }
          var A = (this._b + n + S) | 0;
          (this._b = (this._c + s + M) | 0),
            (this._c = (this._d + l + v) | 0),
            (this._d = (this._e + r + w) | 0),
            (this._e = (this._a + i + j) | 0),
            (this._a = A);
        }),
        (l.prototype._digest = function() {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var e = i.alloc ? i.alloc(20) : new i(20);
          return (
            e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e.writeInt32LE(this._e, 16),
            e
          );
        }),
        (e.exports = l);
    },
    '../../node_modules/safe-buffer/index.js': function(e, t, r) {
      var i = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js'),
        n = i.Buffer;
      function s(e, t) {
        for (var r in e) t[r] = e[r];
      }
      function o(e, t, r) {
        return n(e, t, r);
      }
      n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
        ? (e.exports = i)
        : (s(i, t), (t.Buffer = o)),
        (o.prototype = Object.create(n.prototype)),
        s(n, o),
        (o.from = function(e, t, r) {
          if ('number' == typeof e) throw new TypeError('Argument must not be a number');
          return n(e, t, r);
        }),
        (o.alloc = function(e, t, r) {
          if ('number' != typeof e) throw new TypeError('Argument must be a number');
          var i = n(e);
          return (
            void 0 !== t ? ('string' == typeof r ? i.fill(t, r) : i.fill(t)) : i.fill(0),
            i
          );
        }),
        (o.allocUnsafe = function(e) {
          if ('number' != typeof e) throw new TypeError('Argument must be a number');
          return n(e);
        }),
        (o.allocUnsafeSlow = function(e) {
          if ('number' != typeof e) throw new TypeError('Argument must be a number');
          return i.SlowBuffer(e);
        });
    },
    '../../node_modules/sha.js/hash.js': function(e, t, r) {
      var i = r('../../node_modules/safe-buffer/index.js').Buffer;
      function n(e, t) {
        (this._block = i.alloc(e)),
          (this._finalSize = t),
          (this._blockSize = e),
          (this._len = 0);
      }
      (n.prototype.update = function(e, t) {
        'string' == typeof e && ((t = t || 'utf8'), (e = i.from(e, t)));
        for (
          var r = this._block, n = this._blockSize, s = e.length, o = this._len, a = 0;
          a < s;

        ) {
          for (var d = o % n, f = Math.min(s - a, n - d), h = 0; h < f; h++)
            r[d + h] = e[a + h];
          (a += f), (o += f) % n == 0 && this._update(r);
        }
        return (this._len += s), this;
      }),
        (n.prototype.digest = function(e) {
          var t = this._len % this._blockSize;
          (this._block[t] = 128),
            this._block.fill(0, t + 1),
            t >= this._finalSize && (this._update(this._block), this._block.fill(0));
          var r = 8 * this._len;
          if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
          else {
            var i = (4294967295 & r) >>> 0,
              n = (r - i) / 4294967296;
            this._block.writeUInt32BE(n, this._blockSize - 8),
              this._block.writeUInt32BE(i, this._blockSize - 4);
          }
          this._update(this._block);
          var s = this._hash();
          return e ? s.toString(e) : s;
        }),
        (n.prototype._update = function() {
          throw new Error('_update must be implemented by subclass');
        }),
        (e.exports = n);
    },
    '../../node_modules/sha.js/index.js': function(e, t, r) {
      ((t = e.exports = function(e) {
        e = e.toLowerCase();
        var r = t[e];
        if (!r) throw new Error(e + ' is not supported (we accept pull requests)');
        return new r();
      }).sha = r('../../node_modules/sha.js/sha.js')),
        (t.sha1 = r('../../node_modules/sha.js/sha1.js')),
        (t.sha224 = r('../../node_modules/sha.js/sha224.js')),
        (t.sha256 = r('../../node_modules/sha.js/sha256.js')),
        (t.sha384 = r('../../node_modules/sha.js/sha384.js')),
        (t.sha512 = r('../../node_modules/sha.js/sha512.js'));
    },
    '../../node_modules/sha.js/sha.js': function(e, t, r) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/sha.js/hash.js'),
        s = r('../../node_modules/safe-buffer/index.js').Buffer,
        o = [1518500249, 1859775393, -1894007588, -899497514],
        a = new Array(80);
      function d() {
        this.init(), (this._w = a), n.call(this, 64, 56);
      }
      function f(e) {
        return (e << 30) | (e >>> 2);
      }
      function h(e, t, r, i) {
        return 0 === e
          ? (t & r) | (~t & i)
          : 2 === e
          ? (t & r) | (t & i) | (r & i)
          : t ^ r ^ i;
      }
      i(d, n),
        (d.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (d.prototype._update = function(e) {
          for (
            var t,
              r = this._w,
              i = 0 | this._a,
              n = 0 | this._b,
              s = 0 | this._c,
              a = 0 | this._d,
              d = 0 | this._e,
              c = 0;
            c < 16;
            ++c
          )
            r[c] = e.readInt32BE(4 * c);
          for (; c < 80; ++c) r[c] = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16];
          for (var u = 0; u < 80; ++u) {
            var l = ~~(u / 20),
              b = 0 | ((((t = i) << 5) | (t >>> 27)) + h(l, n, s, a) + d + r[u] + o[l]);
            (d = a), (a = s), (s = f(n)), (n = i), (i = b);
          }
          (this._a = (i + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (s + this._c) | 0),
            (this._d = (a + this._d) | 0),
            (this._e = (d + this._e) | 0);
        }),
        (d.prototype._hash = function() {
          var e = s.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = d);
    },
    '../../node_modules/sha.js/sha1.js': function(e, t, r) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/sha.js/hash.js'),
        s = r('../../node_modules/safe-buffer/index.js').Buffer,
        o = [1518500249, 1859775393, -1894007588, -899497514],
        a = new Array(80);
      function d() {
        this.init(), (this._w = a), n.call(this, 64, 56);
      }
      function f(e) {
        return (e << 5) | (e >>> 27);
      }
      function h(e) {
        return (e << 30) | (e >>> 2);
      }
      function c(e, t, r, i) {
        return 0 === e
          ? (t & r) | (~t & i)
          : 2 === e
          ? (t & r) | (t & i) | (r & i)
          : t ^ r ^ i;
      }
      i(d, n),
        (d.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (d.prototype._update = function(e) {
          for (
            var t,
              r = this._w,
              i = 0 | this._a,
              n = 0 | this._b,
              s = 0 | this._c,
              a = 0 | this._d,
              d = 0 | this._e,
              u = 0;
            u < 16;
            ++u
          )
            r[u] = e.readInt32BE(4 * u);
          for (; u < 80; ++u)
            r[u] = ((t = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16]) << 1) | (t >>> 31);
          for (var l = 0; l < 80; ++l) {
            var b = ~~(l / 20),
              p = (f(i) + c(b, n, s, a) + d + r[l] + o[b]) | 0;
            (d = a), (a = s), (s = h(n)), (n = i), (i = p);
          }
          (this._a = (i + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (s + this._c) | 0),
            (this._d = (a + this._d) | 0),
            (this._e = (d + this._e) | 0);
        }),
        (d.prototype._hash = function() {
          var e = s.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = d);
    },
    '../../node_modules/sha.js/sha224.js': function(e, t, r) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/sha.js/sha256.js'),
        s = r('../../node_modules/sha.js/hash.js'),
        o = r('../../node_modules/safe-buffer/index.js').Buffer,
        a = new Array(64);
      function d() {
        this.init(), (this._w = a), s.call(this, 64, 56);
      }
      i(d, n),
        (d.prototype.init = function() {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (d.prototype._hash = function() {
          var e = o.allocUnsafe(28);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e
          );
        }),
        (e.exports = d);
    },
    '../../node_modules/sha.js/sha256.js': function(e, t, r) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/sha.js/hash.js'),
        s = r('../../node_modules/safe-buffer/index.js').Buffer,
        o = [
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
        a = new Array(64);
      function d() {
        this.init(), (this._w = a), n.call(this, 64, 56);
      }
      function f(e, t, r) {
        return r ^ (e & (t ^ r));
      }
      function h(e, t, r) {
        return (e & t) | (r & (e | t));
      }
      function c(e) {
        return (
          ((e >>> 2) | (e << 30)) ^ ((e >>> 13) | (e << 19)) ^ ((e >>> 22) | (e << 10))
        );
      }
      function u(e) {
        return (
          ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7))
        );
      }
      function l(e) {
        return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
      }
      i(d, n),
        (d.prototype.init = function() {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (d.prototype._update = function(e) {
          for (
            var t,
              r = this._w,
              i = 0 | this._a,
              n = 0 | this._b,
              s = 0 | this._c,
              a = 0 | this._d,
              d = 0 | this._e,
              b = 0 | this._f,
              p = 0 | this._g,
              m = 0 | this._h,
              _ = 0;
            _ < 16;
            ++_
          )
            r[_] = e.readInt32BE(4 * _);
          for (; _ < 64; ++_)
            r[_] =
              0 |
              (((((t = r[_ - 2]) >>> 17) | (t << 15)) ^
                ((t >>> 19) | (t << 13)) ^
                (t >>> 10)) +
                r[_ - 7] +
                l(r[_ - 15]) +
                r[_ - 16]);
          for (var y = 0; y < 64; ++y) {
            var g = (m + u(d) + f(d, b, p) + o[y] + r[y]) | 0,
              v = (c(i) + h(i, n, s)) | 0;
            (m = p),
              (p = b),
              (b = d),
              (d = (a + g) | 0),
              (a = s),
              (s = n),
              (n = i),
              (i = (g + v) | 0);
          }
          (this._a = (i + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (s + this._c) | 0),
            (this._d = (a + this._d) | 0),
            (this._e = (d + this._e) | 0),
            (this._f = (b + this._f) | 0),
            (this._g = (p + this._g) | 0),
            (this._h = (m + this._h) | 0);
        }),
        (d.prototype._hash = function() {
          var e = s.allocUnsafe(32);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e.writeInt32BE(this._h, 28),
            e
          );
        }),
        (e.exports = d);
    },
    '../../node_modules/sha.js/sha384.js': function(e, t, r) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/sha.js/sha512.js'),
        s = r('../../node_modules/sha.js/hash.js'),
        o = r('../../node_modules/safe-buffer/index.js').Buffer,
        a = new Array(160);
      function d() {
        this.init(), (this._w = a), s.call(this, 128, 112);
      }
      i(d, n),
        (d.prototype.init = function() {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (d.prototype._hash = function() {
          var e = o.allocUnsafe(48);
          function t(t, r, i) {
            e.writeInt32BE(t, i), e.writeInt32BE(r, i + 4);
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            e
          );
        }),
        (e.exports = d);
    },
    '../../node_modules/sha.js/sha512.js': function(e, t, r) {
      var i = r('../../node_modules/inherits/inherits_browser.js'),
        n = r('../../node_modules/sha.js/hash.js'),
        s = r('../../node_modules/safe-buffer/index.js').Buffer,
        o = [
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
        ],
        a = new Array(160);
      function d() {
        this.init(), (this._w = a), n.call(this, 128, 112);
      }
      function f(e, t, r) {
        return r ^ (e & (t ^ r));
      }
      function h(e, t, r) {
        return (e & t) | (r & (e | t));
      }
      function c(e, t) {
        return (
          ((e >>> 28) | (t << 4)) ^ ((t >>> 2) | (e << 30)) ^ ((t >>> 7) | (e << 25))
        );
      }
      function u(e, t) {
        return (
          ((e >>> 14) | (t << 18)) ^ ((e >>> 18) | (t << 14)) ^ ((t >>> 9) | (e << 23))
        );
      }
      function l(e, t) {
        return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
      }
      function b(e, t) {
        return (
          ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ ((e >>> 7) | (t << 25))
        );
      }
      function p(e, t) {
        return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
      }
      function m(e, t) {
        return (
          ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ ((e >>> 6) | (t << 26))
        );
      }
      function _(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0;
      }
      i(d, n),
        (d.prototype.init = function() {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (d.prototype._update = function(e) {
          for (
            var t = this._w,
              r = 0 | this._ah,
              i = 0 | this._bh,
              n = 0 | this._ch,
              s = 0 | this._dh,
              a = 0 | this._eh,
              d = 0 | this._fh,
              y = 0 | this._gh,
              g = 0 | this._hh,
              v = 0 | this._al,
              w = 0 | this._bl,
              j = 0 | this._cl,
              S = 0 | this._dl,
              M = 0 | this._el,
              x = 0 | this._fl,
              k = 0 | this._gl,
              E = 0 | this._hl,
              A = 0;
            A < 32;
            A += 2
          )
            (t[A] = e.readInt32BE(4 * A)), (t[A + 1] = e.readInt32BE(4 * A + 4));
          for (; A < 160; A += 2) {
            var I = t[A - 30],
              B = t[A - 30 + 1],
              R = l(I, B),
              C = b(B, I),
              P = p((I = t[A - 4]), (B = t[A - 4 + 1])),
              O = m(B, I),
              T = t[A - 14],
              L = t[A - 14 + 1],
              z = t[A - 32],
              D = t[A - 32 + 1],
              q = (C + L) | 0,
              N = (R + T + _(q, C)) | 0;
            (N =
              ((N = (N + P + _((q = (q + O) | 0), O)) | 0) +
                z +
                _((q = (q + D) | 0), D)) |
              0),
              (t[A] = N),
              (t[A + 1] = q);
          }
          for (var U = 0; U < 160; U += 2) {
            (N = t[U]), (q = t[U + 1]);
            var K = h(r, i, n),
              H = h(v, w, j),
              F = c(r, v),
              W = c(v, r),
              V = u(a, M),
              X = u(M, a),
              J = o[U],
              G = o[U + 1],
              Z = f(a, d, y),
              Y = f(M, x, k),
              $ = (E + X) | 0,
              Q = (g + V + _($, E)) | 0;
            Q =
              ((Q =
                ((Q = (Q + Z + _(($ = ($ + Y) | 0), Y)) | 0) +
                  J +
                  _(($ = ($ + G) | 0), G)) |
                0) +
                N +
                _(($ = ($ + q) | 0), q)) |
              0;
            var ee = (W + H) | 0,
              te = (F + K + _(ee, W)) | 0;
            (g = y),
              (E = k),
              (y = d),
              (k = x),
              (d = a),
              (x = M),
              (a = (s + Q + _((M = (S + $) | 0), S)) | 0),
              (s = n),
              (S = j),
              (n = i),
              (j = w),
              (i = r),
              (w = v),
              (r = (Q + te + _((v = ($ + ee) | 0), $)) | 0);
          }
          (this._al = (this._al + v) | 0),
            (this._bl = (this._bl + w) | 0),
            (this._cl = (this._cl + j) | 0),
            (this._dl = (this._dl + S) | 0),
            (this._el = (this._el + M) | 0),
            (this._fl = (this._fl + x) | 0),
            (this._gl = (this._gl + k) | 0),
            (this._hl = (this._hl + E) | 0),
            (this._ah = (this._ah + r + _(this._al, v)) | 0),
            (this._bh = (this._bh + i + _(this._bl, w)) | 0),
            (this._ch = (this._ch + n + _(this._cl, j)) | 0),
            (this._dh = (this._dh + s + _(this._dl, S)) | 0),
            (this._eh = (this._eh + a + _(this._el, M)) | 0),
            (this._fh = (this._fh + d + _(this._fl, x)) | 0),
            (this._gh = (this._gh + y + _(this._gl, k)) | 0),
            (this._hh = (this._hh + g + _(this._hl, E)) | 0);
        }),
        (d.prototype._hash = function() {
          var e = s.allocUnsafe(64);
          function t(t, r, i) {
            e.writeInt32BE(t, i), e.writeInt32BE(r, i + 4);
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            t(this._gh, this._gl, 48),
            t(this._hh, this._hl, 56),
            e
          );
        }),
        (e.exports = d);
    },
    '../../node_modules/stream-browserify/index.js': function(e, t, r) {
      e.exports = n;
      var i = r('../../node_modules/events/events.js').EventEmitter;
      function n() {
        i.call(this);
      }
      r('../../node_modules/inherits/inherits_browser.js')(n, i),
        (n.Readable = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/readable-browser.js'
        )),
        (n.Writable = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/writable-browser.js'
        )),
        (n.Duplex = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/duplex-browser.js'
        )),
        (n.Transform = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/transform.js'
        )),
        (n.PassThrough = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/passthrough.js'
        )),
        (n.Stream = n),
        (n.prototype.pipe = function(e, t) {
          var r = this;
          function n(t) {
            e.writable && !1 === e.write(t) && r.pause && r.pause();
          }
          function s() {
            r.readable && r.resume && r.resume();
          }
          r.on('data', n),
            e.on('drain', s),
            e._isStdio || (t && !1 === t.end) || (r.on('end', a), r.on('close', d));
          var o = !1;
          function a() {
            o || ((o = !0), e.end());
          }
          function d() {
            o || ((o = !0), 'function' == typeof e.destroy && e.destroy());
          }
          function f(e) {
            if ((h(), 0 === i.listenerCount(this, 'error'))) throw e;
          }
          function h() {
            r.removeListener('data', n),
              e.removeListener('drain', s),
              r.removeListener('end', a),
              r.removeListener('close', d),
              r.removeListener('error', f),
              e.removeListener('error', f),
              r.removeListener('end', h),
              r.removeListener('close', h),
              e.removeListener('close', h);
          }
          return (
            r.on('error', f),
            e.on('error', f),
            r.on('end', h),
            r.on('close', h),
            e.on('close', h),
            e.emit('pipe', r),
            e
          );
        });
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/duplex-browser.js': function(
      e,
      t,
      r
    ) {
      e.exports = r(
        '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
      );
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/process-nextick-args/index.js'),
        n =
          Object.keys ||
          function(e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
      e.exports = c;
      var s = Object.create(r('../../node_modules/core-util-is/lib/util.js'));
      s.inherits = r('../../node_modules/inherits/inherits_browser.js');
      var o = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js'
        ),
        a = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js'
        );
      s.inherits(c, o);
      for (var d = n(a.prototype), f = 0; f < d.length; f++) {
        var h = d[f];
        c.prototype[h] || (c.prototype[h] = a.prototype[h]);
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        o.call(this, e),
          a.call(this, e),
          e && !1 === e.readable && (this.readable = !1),
          e && !1 === e.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once('end', u);
      }
      function u() {
        this.allowHalfOpen || this._writableState.ended || i.nextTick(l, this);
      }
      function l(e) {
        e.end();
      }
      Object.defineProperty(c.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function() {
          return this._writableState.highWaterMark;
        }
      }),
        Object.defineProperty(c.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed && this._writableState.destroyed
            );
          },
          set: function(e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e), (this._writableState.destroyed = e));
          }
        }),
        (c.prototype._destroy = function(e, t) {
          this.push(null), this.end(), i.nextTick(t, e);
        });
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_passthrough.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      e.exports = s;
      var i = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js'
        ),
        n = Object.create(r('../../node_modules/core-util-is/lib/util.js'));
      function s(e) {
        if (!(this instanceof s)) return new s(e);
        i.call(this, e);
      }
      (n.inherits = r('../../node_modules/inherits/inherits_browser.js')),
        n.inherits(s, i),
        (s.prototype._transform = function(e, t, r) {
          r(null, e);
        });
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      (function(t, i) {
        var n = r('../../node_modules/process-nextick-args/index.js');
        e.exports = g;
        var s,
          o = r('../../node_modules/isarray/index.js');
        g.ReadableState = y;
        r('../../node_modules/events/events.js').EventEmitter;
        var a = function(e, t) {
            return e.listeners(t).length;
          },
          d = r(
            '../../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/stream-browser.js'
          ),
          f = r('../../node_modules/stream-browserify/node_modules/safe-buffer/index.js')
            .Buffer,
          h = t.Uint8Array || function() {};
        var c = Object.create(r('../../node_modules/core-util-is/lib/util.js'));
        c.inherits = r('../../node_modules/inherits/inherits_browser.js');
        var u = r(6),
          l = void 0;
        l = u && u.debuglog ? u.debuglog('stream') : function() {};
        var b,
          p = r(
            '../../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/BufferList.js'
          ),
          m = r(
            '../../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/destroy.js'
          );
        c.inherits(g, d);
        var _ = ['error', 'close', 'destroy', 'pause', 'resume'];
        function y(e, t) {
          e = e || {};
          var i =
            t instanceof
            (s =
              s ||
              r(
                '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
              ));
          (this.objectMode = !!e.objectMode),
            i && (this.objectMode = this.objectMode || !!e.readableObjectMode);
          var n = e.highWaterMark,
            o = e.readableHighWaterMark,
            a = this.objectMode ? 16 : 16384;
          (this.highWaterMark = n || 0 === n ? n : i && (o || 0 === o) ? o : a),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.buffer = new p()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (b ||
                (b = r('../../node_modules/string_decoder/lib/string_decoder.js')
                  .StringDecoder),
              (this.decoder = new b(e.encoding)),
              (this.encoding = e.encoding));
        }
        function g(e) {
          if (
            ((s =
              s ||
              r(
                '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
              )),
            !(this instanceof g))
          )
            return new g(e);
          (this._readableState = new y(e, this)),
            (this.readable = !0),
            e &&
              ('function' == typeof e.read && (this._read = e.read),
              'function' == typeof e.destroy && (this._destroy = e.destroy)),
            d.call(this);
        }
        function v(e, t, r, i, n) {
          var s,
            o = e._readableState;
          null === t
            ? ((o.reading = !1),
              (function(e, t) {
                if (t.ended) return;
                if (t.decoder) {
                  var r = t.decoder.end();
                  r &&
                    r.length &&
                    (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length));
                }
                (t.ended = !0), S(e);
              })(e, o))
            : (n ||
                (s = (function(e, t) {
                  var r;
                  (i = t),
                    f.isBuffer(i) ||
                      i instanceof h ||
                      'string' == typeof t ||
                      void 0 === t ||
                      e.objectMode ||
                      (r = new TypeError('Invalid non-string/buffer chunk'));
                  var i;
                  return r;
                })(o, t)),
              s
                ? e.emit('error', s)
                : o.objectMode || (t && t.length > 0)
                ? ('string' == typeof t ||
                    o.objectMode ||
                    Object.getPrototypeOf(t) === f.prototype ||
                    (t = (function(e) {
                      return f.from(e);
                    })(t)),
                  i
                    ? o.endEmitted
                      ? e.emit('error', new Error('stream.unshift() after end event'))
                      : w(e, o, t, !0)
                    : o.ended
                    ? e.emit('error', new Error('stream.push() after EOF'))
                    : ((o.reading = !1),
                      o.decoder && !r
                        ? ((t = o.decoder.write(t)),
                          o.objectMode || 0 !== t.length ? w(e, o, t, !1) : x(e, o))
                        : w(e, o, t, !1)))
                : i || (o.reading = !1));
          return (function(e) {
            return (
              !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            );
          })(o);
        }
        function w(e, t, r, i) {
          t.flowing && 0 === t.length && !t.sync
            ? (e.emit('data', r), e.read(0))
            : ((t.length += t.objectMode ? 1 : r.length),
              i ? t.buffer.unshift(r) : t.buffer.push(r),
              t.needReadable && S(e)),
            x(e, t);
        }
        Object.defineProperty(g.prototype, 'destroyed', {
          get: function() {
            return void 0 !== this._readableState && this._readableState.destroyed;
          },
          set: function(e) {
            this._readableState && (this._readableState.destroyed = e);
          }
        }),
          (g.prototype.destroy = m.destroy),
          (g.prototype._undestroy = m.undestroy),
          (g.prototype._destroy = function(e, t) {
            this.push(null), t(e);
          }),
          (g.prototype.push = function(e, t) {
            var r,
              i = this._readableState;
            return (
              i.objectMode
                ? (r = !0)
                : 'string' == typeof e &&
                  ((t = t || i.defaultEncoding) !== i.encoding &&
                    ((e = f.from(e, t)), (t = '')),
                  (r = !0)),
              v(this, e, t, !1, r)
            );
          }),
          (g.prototype.unshift = function(e) {
            return v(this, e, null, !0, !1);
          }),
          (g.prototype.isPaused = function() {
            return !1 === this._readableState.flowing;
          }),
          (g.prototype.setEncoding = function(e) {
            return (
              b ||
                (b = r('../../node_modules/string_decoder/lib/string_decoder.js')
                  .StringDecoder),
              (this._readableState.decoder = new b(e)),
              (this._readableState.encoding = e),
              this
            );
          });
        function j(e, t) {
          return e <= 0 || (0 === t.length && t.ended)
            ? 0
            : t.objectMode
            ? 1
            : e != e
            ? t.flowing && t.length
              ? t.buffer.head.data.length
              : t.length
            : (e > t.highWaterMark &&
                (t.highWaterMark = (function(e) {
                  return (
                    e >= 8388608
                      ? (e = 8388608)
                      : (e--,
                        (e |= e >>> 1),
                        (e |= e >>> 2),
                        (e |= e >>> 4),
                        (e |= e >>> 8),
                        (e |= e >>> 16),
                        e++),
                    e
                  );
                })(e)),
              e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0));
        }
        function S(e) {
          var t = e._readableState;
          (t.needReadable = !1),
            t.emittedReadable ||
              (l('emitReadable', t.flowing),
              (t.emittedReadable = !0),
              t.sync ? n.nextTick(M, e) : M(e));
        }
        function M(e) {
          l('emit readable'), e.emit('readable'), I(e);
        }
        function x(e, t) {
          t.readingMore || ((t.readingMore = !0), n.nextTick(k, e, t));
        }
        function k(e, t) {
          for (
            var r = t.length;
            !t.reading &&
            !t.flowing &&
            !t.ended &&
            t.length < t.highWaterMark &&
            (l('maybeReadMore read 0'), e.read(0), r !== t.length);

          )
            r = t.length;
          t.readingMore = !1;
        }
        function E(e) {
          l('readable nexttick read 0'), e.read(0);
        }
        function A(e, t) {
          t.reading || (l('resume read 0'), e.read(0)),
            (t.resumeScheduled = !1),
            (t.awaitDrain = 0),
            e.emit('resume'),
            I(e),
            t.flowing && !t.reading && e.read(0);
        }
        function I(e) {
          var t = e._readableState;
          for (l('flow', t.flowing); t.flowing && null !== e.read(); );
        }
        function B(e, t) {
          return 0 === t.length
            ? null
            : (t.objectMode
                ? (r = t.buffer.shift())
                : !e || e >= t.length
                ? ((r = t.decoder
                    ? t.buffer.join('')
                    : 1 === t.buffer.length
                    ? t.buffer.head.data
                    : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (r = (function(e, t, r) {
                    var i;
                    e < t.head.data.length
                      ? ((i = t.head.data.slice(0, e)),
                        (t.head.data = t.head.data.slice(e)))
                      : (i =
                          e === t.head.data.length
                            ? t.shift()
                            : r
                            ? (function(e, t) {
                                var r = t.head,
                                  i = 1,
                                  n = r.data;
                                e -= n.length;
                                for (; (r = r.next); ) {
                                  var s = r.data,
                                    o = e > s.length ? s.length : e;
                                  if (
                                    (o === s.length ? (n += s) : (n += s.slice(0, e)),
                                    0 === (e -= o))
                                  ) {
                                    o === s.length
                                      ? (++i,
                                        r.next
                                          ? (t.head = r.next)
                                          : (t.head = t.tail = null))
                                      : ((t.head = r), (r.data = s.slice(o)));
                                    break;
                                  }
                                  ++i;
                                }
                                return (t.length -= i), n;
                              })(e, t)
                            : (function(e, t) {
                                var r = f.allocUnsafe(e),
                                  i = t.head,
                                  n = 1;
                                i.data.copy(r), (e -= i.data.length);
                                for (; (i = i.next); ) {
                                  var s = i.data,
                                    o = e > s.length ? s.length : e;
                                  if ((s.copy(r, r.length - e, 0, o), 0 === (e -= o))) {
                                    o === s.length
                                      ? (++n,
                                        i.next
                                          ? (t.head = i.next)
                                          : (t.head = t.tail = null))
                                      : ((t.head = i), (i.data = s.slice(o)));
                                    break;
                                  }
                                  ++n;
                                }
                                return (t.length -= n), r;
                              })(e, t));
                    return i;
                  })(e, t.buffer, t.decoder)),
              r);
          var r;
        }
        function R(e) {
          var t = e._readableState;
          if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
          t.endEmitted || ((t.ended = !0), n.nextTick(C, t, e));
        }
        function C(e, t) {
          e.endEmitted ||
            0 !== e.length ||
            ((e.endEmitted = !0), (t.readable = !1), t.emit('end'));
        }
        function P(e, t) {
          for (var r = 0, i = e.length; r < i; r++) if (e[r] === t) return r;
          return -1;
        }
        (g.prototype.read = function(e) {
          l('read', e), (e = parseInt(e, 10));
          var t = this._readableState,
            r = e;
          if (
            (0 !== e && (t.emittedReadable = !1),
            0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
          )
            return (
              l('read: emitReadable', t.length, t.ended),
              0 === t.length && t.ended ? R(this) : S(this),
              null
            );
          if (0 === (e = j(e, t)) && t.ended) return 0 === t.length && R(this), null;
          var i,
            n = t.needReadable;
          return (
            l('need readable', n),
            (0 === t.length || t.length - e < t.highWaterMark) &&
              l('length less than watermark', (n = !0)),
            t.ended || t.reading
              ? l('reading or ended', (n = !1))
              : n &&
                (l('do read'),
                (t.reading = !0),
                (t.sync = !0),
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = j(r, t))),
            null === (i = e > 0 ? B(e, t) : null)
              ? ((t.needReadable = !0), (e = 0))
              : (t.length -= e),
            0 === t.length &&
              (t.ended || (t.needReadable = !0), r !== e && t.ended && R(this)),
            null !== i && this.emit('data', i),
            i
          );
        }),
          (g.prototype._read = function(e) {
            this.emit('error', new Error('_read() is not implemented'));
          }),
          (g.prototype.pipe = function(e, t) {
            var r = this,
              s = this._readableState;
            switch (s.pipesCount) {
              case 0:
                s.pipes = e;
                break;
              case 1:
                s.pipes = [s.pipes, e];
                break;
              default:
                s.pipes.push(e);
            }
            (s.pipesCount += 1), l('pipe count=%d opts=%j', s.pipesCount, t);
            var d = (!t || !1 !== t.end) && e !== i.stdout && e !== i.stderr ? h : g;
            function f(t, i) {
              l('onunpipe'),
                t === r &&
                  i &&
                  !1 === i.hasUnpiped &&
                  ((i.hasUnpiped = !0),
                  l('cleanup'),
                  e.removeListener('close', _),
                  e.removeListener('finish', y),
                  e.removeListener('drain', c),
                  e.removeListener('error', m),
                  e.removeListener('unpipe', f),
                  r.removeListener('end', h),
                  r.removeListener('end', g),
                  r.removeListener('data', p),
                  (u = !0),
                  !s.awaitDrain ||
                    (e._writableState && !e._writableState.needDrain) ||
                    c());
            }
            function h() {
              l('onend'), e.end();
            }
            s.endEmitted ? n.nextTick(d) : r.once('end', d), e.on('unpipe', f);
            var c = (function(e) {
              return function() {
                var t = e._readableState;
                l('pipeOnDrain', t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain && a(e, 'data') && ((t.flowing = !0), I(e));
              };
            })(r);
            e.on('drain', c);
            var u = !1;
            var b = !1;
            function p(t) {
              l('ondata'),
                (b = !1),
                !1 !== e.write(t) ||
                  b ||
                  (((1 === s.pipesCount && s.pipes === e) ||
                    (s.pipesCount > 1 && -1 !== P(s.pipes, e))) &&
                    !u &&
                    (l('false write response, pause', r._readableState.awaitDrain),
                    r._readableState.awaitDrain++,
                    (b = !0)),
                  r.pause());
            }
            function m(t) {
              l('onerror', t),
                g(),
                e.removeListener('error', m),
                0 === a(e, 'error') && e.emit('error', t);
            }
            function _() {
              e.removeListener('finish', y), g();
            }
            function y() {
              l('onfinish'), e.removeListener('close', _), g();
            }
            function g() {
              l('unpipe'), r.unpipe(e);
            }
            return (
              r.on('data', p),
              (function(e, t, r) {
                if ('function' == typeof e.prependListener)
                  return e.prependListener(t, r);
                e._events && e._events[t]
                  ? o(e._events[t])
                    ? e._events[t].unshift(r)
                    : (e._events[t] = [r, e._events[t]])
                  : e.on(t, r);
              })(e, 'error', m),
              e.once('close', _),
              e.once('finish', y),
              e.emit('pipe', r),
              s.flowing || (l('pipe resume'), r.resume()),
              e
            );
          }),
          (g.prototype.unpipe = function(e) {
            var t = this._readableState,
              r = { hasUnpiped: !1 };
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount)
              return (
                (e && e !== t.pipes) ||
                  (e || (e = t.pipes),
                  (t.pipes = null),
                  (t.pipesCount = 0),
                  (t.flowing = !1),
                  e && e.emit('unpipe', this, r)),
                this
              );
            if (!e) {
              var i = t.pipes,
                n = t.pipesCount;
              (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
              for (var s = 0; s < n; s++) i[s].emit('unpipe', this, r);
              return this;
            }
            var o = P(t.pipes, e);
            return (
              -1 === o ||
                (t.pipes.splice(o, 1),
                (t.pipesCount -= 1),
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit('unpipe', this, r)),
              this
            );
          }),
          (g.prototype.on = function(e, t) {
            var r = d.prototype.on.call(this, e, t);
            if ('data' === e) !1 !== this._readableState.flowing && this.resume();
            else if ('readable' === e) {
              var i = this._readableState;
              i.endEmitted ||
                i.readableListening ||
                ((i.readableListening = i.needReadable = !0),
                (i.emittedReadable = !1),
                i.reading ? i.length && S(this) : n.nextTick(E, this));
            }
            return r;
          }),
          (g.prototype.addListener = g.prototype.on),
          (g.prototype.resume = function() {
            var e = this._readableState;
            return (
              e.flowing ||
                (l('resume'),
                (e.flowing = !0),
                (function(e, t) {
                  t.resumeScheduled || ((t.resumeScheduled = !0), n.nextTick(A, e, t));
                })(this, e)),
              this
            );
          }),
          (g.prototype.pause = function() {
            return (
              l('call pause flowing=%j', this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (l('pause'), (this._readableState.flowing = !1), this.emit('pause')),
              this
            );
          }),
          (g.prototype.wrap = function(e) {
            var t = this,
              r = this._readableState,
              i = !1;
            for (var n in (e.on('end', function() {
              if ((l('wrapped end'), r.decoder && !r.ended)) {
                var e = r.decoder.end();
                e && e.length && t.push(e);
              }
              t.push(null);
            }),
            e.on('data', function(n) {
              (l('wrapped data'),
              r.decoder && (n = r.decoder.write(n)),
              r.objectMode && null == n) ||
                ((r.objectMode || (n && n.length)) &&
                  (t.push(n) || ((i = !0), e.pause())));
            }),
            e))
              void 0 === this[n] &&
                'function' == typeof e[n] &&
                (this[n] = (function(t) {
                  return function() {
                    return e[t].apply(e, arguments);
                  };
                })(n));
            for (var s = 0; s < _.length; s++) e.on(_[s], this.emit.bind(this, _[s]));
            return (
              (this._read = function(t) {
                l('wrapped _read', t), i && ((i = !1), e.resume());
              }),
              this
            );
          }),
          Object.defineProperty(g.prototype, 'readableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._readableState.highWaterMark;
            }
          }),
          (g._fromList = B);
      }.call(
        this,
        r('../../node_modules/webpack/buildin/global.js'),
        r('../../node_modules/process/browser.js')
      ));
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      e.exports = o;
      var i = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
        ),
        n = Object.create(r('../../node_modules/core-util-is/lib/util.js'));
      function s(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var i = r.writecb;
        if (!i)
          return this.emit('error', new Error('write callback called multiple times'));
        (r.writechunk = null), (r.writecb = null), null != t && this.push(t), i(e);
        var n = this._readableState;
        (n.reading = !1),
          (n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark);
      }
      function o(e) {
        if (!(this instanceof o)) return new o(e);
        i.call(this, e),
          (this._transformState = {
            afterTransform: s.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ('function' == typeof e.transform && (this._transform = e.transform),
            'function' == typeof e.flush && (this._flush = e.flush)),
          this.on('prefinish', a);
      }
      function a() {
        var e = this;
        'function' == typeof this._flush
          ? this._flush(function(t, r) {
              d(e, t, r);
            })
          : d(this, null, null);
      }
      function d(e, t, r) {
        if (t) return e.emit('error', t);
        if ((null != r && e.push(r), e._writableState.length))
          throw new Error('Calling transform done when ws.length != 0');
        if (e._transformState.transforming)
          throw new Error('Calling transform done when still transforming');
        return e.push(null);
      }
      (n.inherits = r('../../node_modules/inherits/inherits_browser.js')),
        n.inherits(o, i),
        (o.prototype.push = function(e, t) {
          return (
            (this._transformState.needTransform = !1), i.prototype.push.call(this, e, t)
          );
        }),
        (o.prototype._transform = function(e, t, r) {
          throw new Error('_transform() is not implemented');
        }),
        (o.prototype._write = function(e, t, r) {
          var i = this._transformState;
          if (
            ((i.writecb = r), (i.writechunk = e), (i.writeencoding = t), !i.transforming)
          ) {
            var n = this._readableState;
            (i.needTransform || n.needReadable || n.length < n.highWaterMark) &&
              this._read(n.highWaterMark);
          }
        }),
        (o.prototype._read = function(e) {
          var t = this._transformState;
          null !== t.writechunk && t.writecb && !t.transforming
            ? ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            : (t.needTransform = !0);
        }),
        (o.prototype._destroy = function(e, t) {
          var r = this;
          i.prototype._destroy.call(this, e, function(e) {
            t(e), r.emit('close');
          });
        });
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      (function(t, i, n) {
        var s = r('../../node_modules/process-nextick-args/index.js');
        function o(e) {
          var t = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function() {
              !(function(e, t, r) {
                var i = e.entry;
                e.entry = null;
                for (; i; ) {
                  var n = i.callback;
                  t.pendingcb--, n(r), (i = i.next);
                }
                t.corkedRequestsFree
                  ? (t.corkedRequestsFree.next = e)
                  : (t.corkedRequestsFree = e);
              })(t, e);
            });
        }
        e.exports = y;
        var a,
          d =
            !t.browser && ['v0.10', 'v0.9.'].indexOf(t.version.slice(0, 5)) > -1
              ? i
              : s.nextTick;
        y.WritableState = _;
        var f = Object.create(r('../../node_modules/core-util-is/lib/util.js'));
        f.inherits = r('../../node_modules/inherits/inherits_browser.js');
        var h = { deprecate: r('../../node_modules/util-deprecate/browser.js') },
          c = r(
            '../../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/stream-browser.js'
          ),
          u = r('../../node_modules/stream-browserify/node_modules/safe-buffer/index.js')
            .Buffer,
          l = n.Uint8Array || function() {};
        var b,
          p = r(
            '../../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/destroy.js'
          );
        function m() {}
        function _(e, t) {
          (a =
            a ||
            r(
              '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
            )),
            (e = e || {});
          var i = t instanceof a;
          (this.objectMode = !!e.objectMode),
            i && (this.objectMode = this.objectMode || !!e.writableObjectMode);
          var n = e.highWaterMark,
            f = e.writableHighWaterMark,
            h = this.objectMode ? 16 : 16384;
          (this.highWaterMark = n || 0 === n ? n : i && (f || 0 === f) ? f : h),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var c = !1 === e.decodeStrings;
          (this.decodeStrings = !c),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function(e) {
              !(function(e, t) {
                var r = e._writableState,
                  i = r.sync,
                  n = r.writecb;
                if (
                  ((function(e) {
                    (e.writing = !1),
                      (e.writecb = null),
                      (e.length -= e.writelen),
                      (e.writelen = 0);
                  })(r),
                  t)
                )
                  !(function(e, t, r, i, n) {
                    --t.pendingcb,
                      r
                        ? (s.nextTick(n, i),
                          s.nextTick(M, e, t),
                          (e._writableState.errorEmitted = !0),
                          e.emit('error', i))
                        : (n(i),
                          (e._writableState.errorEmitted = !0),
                          e.emit('error', i),
                          M(e, t));
                  })(e, r, i, t, n);
                else {
                  var o = j(r);
                  o || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r),
                    i ? d(v, e, r, o, n) : v(e, r, o, n);
                }
              })(t, e);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new o(this));
        }
        function y(e) {
          if (
            ((a =
              a ||
              r(
                '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
              )),
            !(b.call(y, this) || this instanceof a))
          )
            return new y(e);
          (this._writableState = new _(e, this)),
            (this.writable = !0),
            e &&
              ('function' == typeof e.write && (this._write = e.write),
              'function' == typeof e.writev && (this._writev = e.writev),
              'function' == typeof e.destroy && (this._destroy = e.destroy),
              'function' == typeof e.final && (this._final = e.final)),
            c.call(this);
        }
        function g(e, t, r, i, n, s, o) {
          (t.writelen = i),
            (t.writecb = o),
            (t.writing = !0),
            (t.sync = !0),
            r ? e._writev(n, t.onwrite) : e._write(n, s, t.onwrite),
            (t.sync = !1);
        }
        function v(e, t, r, i) {
          r ||
            (function(e, t) {
              0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'));
            })(e, t),
            t.pendingcb--,
            i(),
            M(e, t);
        }
        function w(e, t) {
          t.bufferProcessing = !0;
          var r = t.bufferedRequest;
          if (e._writev && r && r.next) {
            var i = t.bufferedRequestCount,
              n = new Array(i),
              s = t.corkedRequestsFree;
            s.entry = r;
            for (var a = 0, d = !0; r; )
              (n[a] = r), r.isBuf || (d = !1), (r = r.next), (a += 1);
            (n.allBuffers = d),
              g(e, t, !0, t.length, n, '', s.finish),
              t.pendingcb++,
              (t.lastBufferedRequest = null),
              s.next
                ? ((t.corkedRequestsFree = s.next), (s.next = null))
                : (t.corkedRequestsFree = new o(t)),
              (t.bufferedRequestCount = 0);
          } else {
            for (; r; ) {
              var f = r.chunk,
                h = r.encoding,
                c = r.callback;
              if (
                (g(e, t, !1, t.objectMode ? 1 : f.length, f, h, c),
                (r = r.next),
                t.bufferedRequestCount--,
                t.writing)
              )
                break;
            }
            null === r && (t.lastBufferedRequest = null);
          }
          (t.bufferedRequest = r), (t.bufferProcessing = !1);
        }
        function j(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          );
        }
        function S(e, t) {
          e._final(function(r) {
            t.pendingcb--,
              r && e.emit('error', r),
              (t.prefinished = !0),
              e.emit('prefinish'),
              M(e, t);
          });
        }
        function M(e, t) {
          var r = j(t);
          return (
            r &&
              (!(function(e, t) {
                t.prefinished ||
                  t.finalCalled ||
                  ('function' == typeof e._final
                    ? (t.pendingcb++, (t.finalCalled = !0), s.nextTick(S, e, t))
                    : ((t.prefinished = !0), e.emit('prefinish')));
              })(e, t),
              0 === t.pendingcb && ((t.finished = !0), e.emit('finish'))),
            r
          );
        }
        f.inherits(y, c),
          (_.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
            return t;
          }),
          (function() {
            try {
              Object.defineProperty(_.prototype, 'buffer', {
                get: h.deprecate(
                  function() {
                    return this.getBuffer();
                  },
                  '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                  'DEP0003'
                )
              });
            } catch (e) {}
          })(),
          'function' == typeof Symbol &&
          Symbol.hasInstance &&
          'function' == typeof Function.prototype[Symbol.hasInstance]
            ? ((b = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(y, Symbol.hasInstance, {
                value: function(e) {
                  return (
                    !!b.call(this, e) ||
                    (this === y && e && e._writableState instanceof _)
                  );
                }
              }))
            : (b = function(e) {
                return e instanceof this;
              }),
          (y.prototype.pipe = function() {
            this.emit('error', new Error('Cannot pipe, not readable'));
          }),
          (y.prototype.write = function(e, t, r) {
            var i,
              n = this._writableState,
              o = !1,
              a = !n.objectMode && ((i = e), u.isBuffer(i) || i instanceof l);
            return (
              a &&
                !u.isBuffer(e) &&
                (e = (function(e) {
                  return u.from(e);
                })(e)),
              'function' == typeof t && ((r = t), (t = null)),
              a ? (t = 'buffer') : t || (t = n.defaultEncoding),
              'function' != typeof r && (r = m),
              n.ended
                ? (function(e, t) {
                    var r = new Error('write after end');
                    e.emit('error', r), s.nextTick(t, r);
                  })(this, r)
                : (a ||
                    (function(e, t, r, i) {
                      var n = !0,
                        o = !1;
                      return (
                        null === r
                          ? (o = new TypeError('May not write null values to stream'))
                          : 'string' == typeof r ||
                            void 0 === r ||
                            t.objectMode ||
                            (o = new TypeError('Invalid non-string/buffer chunk')),
                        o && (e.emit('error', o), s.nextTick(i, o), (n = !1)),
                        n
                      );
                    })(this, n, e, r)) &&
                  (n.pendingcb++,
                  (o = (function(e, t, r, i, n, s) {
                    if (!r) {
                      var o = (function(e, t, r) {
                        e.objectMode ||
                          !1 === e.decodeStrings ||
                          'string' != typeof t ||
                          (t = u.from(t, r));
                        return t;
                      })(t, i, n);
                      i !== o && ((r = !0), (n = 'buffer'), (i = o));
                    }
                    var a = t.objectMode ? 1 : i.length;
                    t.length += a;
                    var d = t.length < t.highWaterMark;
                    d || (t.needDrain = !0);
                    if (t.writing || t.corked) {
                      var f = t.lastBufferedRequest;
                      (t.lastBufferedRequest = {
                        chunk: i,
                        encoding: n,
                        isBuf: r,
                        callback: s,
                        next: null
                      }),
                        f
                          ? (f.next = t.lastBufferedRequest)
                          : (t.bufferedRequest = t.lastBufferedRequest),
                        (t.bufferedRequestCount += 1);
                    } else g(e, t, !1, a, i, n, s);
                    return d;
                  })(this, n, a, e, t, r))),
              o
            );
          }),
          (y.prototype.cork = function() {
            this._writableState.corked++;
          }),
          (y.prototype.uncork = function() {
            var e = this._writableState;
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.finished ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                w(this, e));
          }),
          (y.prototype.setDefaultEncoding = function(e) {
            if (
              ('string' == typeof e && (e = e.toLowerCase()),
              !(
                [
                  'hex',
                  'utf8',
                  'utf-8',
                  'ascii',
                  'binary',
                  'base64',
                  'ucs2',
                  'ucs-2',
                  'utf16le',
                  'utf-16le',
                  'raw'
                ].indexOf((e + '').toLowerCase()) > -1
              ))
            )
              throw new TypeError('Unknown encoding: ' + e);
            return (this._writableState.defaultEncoding = e), this;
          }),
          Object.defineProperty(y.prototype, 'writableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._writableState.highWaterMark;
            }
          }),
          (y.prototype._write = function(e, t, r) {
            r(new Error('_write() is not implemented'));
          }),
          (y.prototype._writev = null),
          (y.prototype.end = function(e, t, r) {
            var i = this._writableState;
            'function' == typeof e
              ? ((r = e), (e = null), (t = null))
              : 'function' == typeof t && ((r = t), (t = null)),
              null != e && this.write(e, t),
              i.corked && ((i.corked = 1), this.uncork()),
              i.ending ||
                i.finished ||
                (function(e, t, r) {
                  (t.ending = !0),
                    M(e, t),
                    r && (t.finished ? s.nextTick(r) : e.once('finish', r));
                  (t.ended = !0), (e.writable = !1);
                })(this, i, r);
          }),
          Object.defineProperty(y.prototype, 'destroyed', {
            get: function() {
              return void 0 !== this._writableState && this._writableState.destroyed;
            },
            set: function(e) {
              this._writableState && (this._writableState.destroyed = e);
            }
          }),
          (y.prototype.destroy = p.destroy),
          (y.prototype._undestroy = p.undestroy),
          (y.prototype._destroy = function(e, t) {
            this.end(), t(e);
          });
      }.call(
        this,
        r('../../node_modules/process/browser.js'),
        r('../../node_modules/timers-browserify/main.js').setImmediate,
        r('../../node_modules/webpack/buildin/global.js')
      ));
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/BufferList.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/stream-browserify/node_modules/safe-buffer/index.js')
          .Buffer,
        n = r(7);
      (e.exports = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (e.prototype.push = function(e) {
            var t = { data: e, next: null };
            this.length > 0 ? (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              ++this.length;
          }),
          (e.prototype.unshift = function(e) {
            var t = { data: e, next: this.head };
            0 === this.length && (this.tail = t), (this.head = t), ++this.length;
          }),
          (e.prototype.shift = function() {
            if (0 !== this.length) {
              var e = this.head.data;
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                e
              );
            }
          }),
          (e.prototype.clear = function() {
            (this.head = this.tail = null), (this.length = 0);
          }),
          (e.prototype.join = function(e) {
            if (0 === this.length) return '';
            for (var t = this.head, r = '' + t.data; (t = t.next); ) r += e + t.data;
            return r;
          }),
          (e.prototype.concat = function(e) {
            if (0 === this.length) return i.alloc(0);
            if (1 === this.length) return this.head.data;
            for (var t, r, n, s = i.allocUnsafe(e >>> 0), o = this.head, a = 0; o; )
              (t = o.data),
                (r = s),
                (n = a),
                t.copy(r, n),
                (a += o.data.length),
                (o = o.next);
            return s;
          }),
          e
        );
      })()),
        n &&
          n.inspect &&
          n.inspect.custom &&
          (e.exports.prototype[n.inspect.custom] = function() {
            var e = n.inspect({ length: this.length });
            return this.constructor.name + ' ' + e;
          });
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/destroy.js': function(
      e,
      t,
      r
    ) {
      'use strict';
      var i = r('../../node_modules/process-nextick-args/index.js');
      function n(e, t) {
        e.emit('error', t);
      }
      e.exports = {
        destroy: function(e, t) {
          var r = this,
            s = this._readableState && this._readableState.destroyed,
            o = this._writableState && this._writableState.destroyed;
          return s || o
            ? (t
                ? t(e)
                : !e ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  i.nextTick(n, this, e),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function(e) {
                !t && e
                  ? (i.nextTick(n, r, e),
                    r._writableState && (r._writableState.errorEmitted = !0))
                  : t && t(e);
              }),
              this);
        },
        undestroy: function() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        }
      };
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/lib/internal/streams/stream-browser.js': function(
      e,
      t,
      r
    ) {
      e.exports = r('../../node_modules/events/events.js').EventEmitter;
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/passthrough.js': function(
      e,
      t,
      r
    ) {
      e.exports = r(
        '../../node_modules/stream-browserify/node_modules/readable-stream/readable-browser.js'
      ).PassThrough;
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/readable-browser.js': function(
      e,
      t,
      r
    ) {
      ((t = e.exports = r(
        '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_readable.js'
      )).Stream = t),
        (t.Readable = t),
        (t.Writable = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js'
        )),
        (t.Duplex = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_duplex.js'
        )),
        (t.Transform = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_transform.js'
        )),
        (t.PassThrough = r(
          '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_passthrough.js'
        ));
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/transform.js': function(
      e,
      t,
      r
    ) {
      e.exports = r(
        '../../node_modules/stream-browserify/node_modules/readable-stream/readable-browser.js'
      ).Transform;
    },
    '../../node_modules/stream-browserify/node_modules/readable-stream/writable-browser.js': function(
      e,
      t,
      r
    ) {
      e.exports = r(
        '../../node_modules/stream-browserify/node_modules/readable-stream/lib/_stream_writable.js'
      );
    },
    '../../node_modules/stream-browserify/node_modules/safe-buffer/index.js': function(
      e,
      t,
      r
    ) {
      var i = r('../../node_modules/node-libs-browser/node_modules/buffer/index.js'),
        n = i.Buffer;
      function s(e, t) {
        for (var r in e) t[r] = e[r];
      }
      function o(e, t, r) {
        return n(e, t, r);
      }
      n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
        ? (e.exports = i)
        : (s(i, t), (t.Buffer = o)),
        s(n, o),
        (o.from = function(e, t, r) {
          if ('number' == typeof e) throw new TypeError('Argument must not be a number');
          return n(e, t, r);
        }),
        (o.alloc = function(e, t, r) {
          if ('number' != typeof e) throw new TypeError('Argument must be a number');
          var i = n(e);
          return (
            void 0 !== t ? ('string' == typeof r ? i.fill(t, r) : i.fill(t)) : i.fill(0),
            i
          );
        }),
        (o.allocUnsafe = function(e) {
          if ('number' != typeof e) throw new TypeError('Argument must be a number');
          return n(e);
        }),
        (o.allocUnsafeSlow = function(e) {
          if ('number' != typeof e) throw new TypeError('Argument must be a number');
          return i.SlowBuffer(e);
        });
    },
    '../../node_modules/string_decoder/lib/string_decoder.js': function(e, t, r) {
      'use strict';
      var i = r('../../node_modules/safe-buffer/index.js').Buffer,
        n =
          i.isEncoding ||
          function(e) {
            switch ((e = '' + e) && e.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0;
              default:
                return !1;
            }
          };
      function s(e) {
        var t;
        switch (
          ((this.encoding = (function(e) {
            var t = (function(e) {
              if (!e) return 'utf8';
              for (var t; ; )
                switch (e) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8';
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le';
                  case 'latin1':
                  case 'binary':
                    return 'latin1';
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return e;
                  default:
                    if (t) return;
                    (e = ('' + e).toLowerCase()), (t = !0);
                }
            })(e);
            if ('string' != typeof t && (i.isEncoding === n || !n(e)))
              throw new Error('Unknown encoding: ' + e);
            return t || e;
          })(e)),
          this.encoding)
        ) {
          case 'utf16le':
            (this.text = d), (this.end = f), (t = 4);
            break;
          case 'utf8':
            (this.fillLast = a), (t = 4);
            break;
          case 'base64':
            (this.text = h), (this.end = c), (t = 3);
            break;
          default:
            return (this.write = u), void (this.end = l);
        }
        (this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = i.allocUnsafe(t));
      }
      function o(e) {
        return e <= 127
          ? 0
          : e >> 5 == 6
          ? 2
          : e >> 4 == 14
          ? 3
          : e >> 3 == 30
          ? 4
          : e >> 6 == 2
          ? -1
          : -2;
      }
      function a(e) {
        var t = this.lastTotal - this.lastNeed,
          r = (function(e, t, r) {
            if (128 != (192 & t[0])) return (e.lastNeed = 0), '�';
            if (e.lastNeed > 1 && t.length > 1) {
              if (128 != (192 & t[1])) return (e.lastNeed = 1), '�';
              if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                return (e.lastNeed = 2), '�';
            }
          })(this, e);
        return void 0 !== r
          ? r
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length));
      }
      function d(e, t) {
        if ((e.length - t) % 2 == 0) {
          var r = e.toString('utf16le', t);
          if (r) {
            var i = r.charCodeAt(r.length - 1);
            if (i >= 55296 && i <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString('utf16le', t, e.length - 1)
        );
      }
      function f(e) {
        var t = e && e.length ? this.write(e) : '';
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return t + this.lastChar.toString('utf16le', 0, r);
        }
        return t;
      }
      function h(e, t) {
        var r = (e.length - t) % 3;
        return 0 === r
          ? e.toString('base64', t)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString('base64', t, e.length - r));
      }
      function c(e) {
        var t = e && e.length ? this.write(e) : '';
        return this.lastNeed
          ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : t;
      }
      function u(e) {
        return e.toString(this.encoding);
      }
      function l(e) {
        return e && e.length ? this.write(e) : '';
      }
      (t.StringDecoder = s),
        (s.prototype.write = function(e) {
          if (0 === e.length) return '';
          var t, r;
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return '';
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < e.length ? (t ? t + this.text(e, r) : this.text(e, r)) : t || '';
        }),
        (s.prototype.end = function(e) {
          var t = e && e.length ? this.write(e) : '';
          return this.lastNeed ? t + '�' : t;
        }),
        (s.prototype.text = function(e, t) {
          var r = (function(e, t, r) {
            var i = t.length - 1;
            if (i < r) return 0;
            var n = o(t[i]);
            if (n >= 0) return n > 0 && (e.lastNeed = n - 1), n;
            if (--i < r || -2 === n) return 0;
            if ((n = o(t[i])) >= 0) return n > 0 && (e.lastNeed = n - 2), n;
            if (--i < r || -2 === n) return 0;
            if ((n = o(t[i])) >= 0)
              return n > 0 && (2 === n ? (n = 0) : (e.lastNeed = n - 3)), n;
            return 0;
          })(this, e, t);
          if (!this.lastNeed) return e.toString('utf8', t);
          this.lastTotal = r;
          var i = e.length - (r - this.lastNeed);
          return e.copy(this.lastChar, 0, i), e.toString('utf8', t, i);
        }),
        (s.prototype.fillLast = function(e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            (this.lastNeed -= e.length);
        });
    },
    '../../node_modules/util-deprecate/browser.js': function(e, t, r) {
      (function(t) {
        function r(e) {
          try {
            if (!t.localStorage) return !1;
          } catch (e) {
            return !1;
          }
          var r = t.localStorage[e];
          return null != r && 'true' === String(r).toLowerCase();
        }
        e.exports = function(e, t) {
          if (r('noDeprecation')) return e;
          var i = !1;
          return function() {
            if (!i) {
              if (r('throwDeprecation')) throw new Error(t);
              r('traceDeprecation') ? console.trace(t) : console.warn(t), (i = !0);
            }
            return e.apply(this, arguments);
          };
        };
      }.call(this, r('../../node_modules/webpack/buildin/global.js')));
    },
    '../../node_modules/vm-browserify/index.js': function(module, exports) {
      var indexOf = function(e, t) {
          if (e.indexOf) return e.indexOf(t);
          for (var r = 0; r < e.length; r++) if (e[r] === t) return r;
          return -1;
        },
        Object_keys = function(e) {
          if (Object.keys) return Object.keys(e);
          var t = [];
          for (var r in e) t.push(r);
          return t;
        },
        forEach = function(e, t) {
          if (e.forEach) return e.forEach(t);
          for (var r = 0; r < e.length; r++) t(e[r], r, e);
        },
        defineProp = (function() {
          try {
            return (
              Object.defineProperty({}, '_', {}),
              function(e, t, r) {
                Object.defineProperty(e, t, {
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                  value: r
                });
              }
            );
          } catch (e) {
            return function(e, t, r) {
              e[t] = r;
            };
          }
        })(),
        globals = [
          'Array',
          'Boolean',
          'Date',
          'Error',
          'EvalError',
          'Function',
          'Infinity',
          'JSON',
          'Math',
          'NaN',
          'Number',
          'Object',
          'RangeError',
          'ReferenceError',
          'RegExp',
          'String',
          'SyntaxError',
          'TypeError',
          'URIError',
          'decodeURI',
          'decodeURIComponent',
          'encodeURI',
          'encodeURIComponent',
          'escape',
          'eval',
          'isFinite',
          'isNaN',
          'parseFloat',
          'parseInt',
          'undefined',
          'unescape'
        ];
      function Context() {}
      Context.prototype = {};
      var Script = (exports.Script = function(e) {
        if (!(this instanceof Script)) return new Script(e);
        this.code = e;
      });
      (Script.prototype.runInContext = function(e) {
        if (!(e instanceof Context)) throw new TypeError("needs a 'context' argument.");
        var t = document.createElement('iframe');
        t.style || (t.style = {}),
          (t.style.display = 'none'),
          document.body.appendChild(t);
        var r = t.contentWindow,
          i = r.eval,
          n = r.execScript;
        !i && n && (n.call(r, 'null'), (i = r.eval)),
          forEach(Object_keys(e), function(t) {
            r[t] = e[t];
          }),
          forEach(globals, function(t) {
            e[t] && (r[t] = e[t]);
          });
        var s = Object_keys(r),
          o = i.call(r, this.code);
        return (
          forEach(Object_keys(r), function(t) {
            (t in e || -1 === indexOf(s, t)) && (e[t] = r[t]);
          }),
          forEach(globals, function(t) {
            t in e || defineProp(e, t, r[t]);
          }),
          document.body.removeChild(t),
          o
        );
      }),
        (Script.prototype.runInThisContext = function() {
          return eval(this.code);
        }),
        (Script.prototype.runInNewContext = function(e) {
          var t = Script.createContext(e),
            r = this.runInContext(t);
          return (
            e &&
              forEach(Object_keys(t), function(r) {
                e[r] = t[r];
              }),
            r
          );
        }),
        forEach(Object_keys(Script.prototype), function(e) {
          exports[e] = Script[e] = function(t) {
            var r = Script(t);
            return r[e].apply(r, [].slice.call(arguments, 1));
          };
        }),
        (exports.isContext = function(e) {
          return e instanceof Context;
        }),
        (exports.createScript = function(e) {
          return exports.Script(e);
        }),
        (exports.createContext = Script.createContext = function(e) {
          var t = new Context();
          return (
            'object' == typeof e &&
              forEach(Object_keys(e), function(r) {
                t[r] = e[r];
              }),
            t
          );
        });
    }
  }
]);
//# sourceMappingURL=vendors~activity-activity-container~admin-web-contractParams-container~admin-web-flagged-component~a~cd170b74.bundle.js.map
