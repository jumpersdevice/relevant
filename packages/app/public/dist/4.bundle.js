(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [4],
  {
    '../../node_modules/@uniswap/sdk/dist/_utils/index.js': function(e, t, n) {
      'use strict';
      var r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = o(n('../../node_modules/bignumber.js/bignumber.js')),
        u = n('../../node_modules/ethers/dist/ethers.min.js'),
        s = n('../../node_modules/@uniswap/sdk/dist/constants/index.js');
      function i(e) {
        if (!Number.isInteger(e) || e < 0 || e > s._MAX_UINT8)
          throw Error("Passed number '" + e + "' is not a valid uint8.");
      }
      function c(e) {
        if (!e.isInteger() || e.isLessThan(s._0) || e.isGreaterThan(s._MAX_UINT256))
          throw Error("Passed bigNumber '" + e + "' is not a valid uint256.");
      }
      (t.ensureAllUInt8 = function(e) {
        e.forEach(i);
      }),
        (t.ensureAllUInt256 = function(e) {
          e.forEach(c);
        }),
        (t.ensureBoundedInteger = function(e, t) {
          var n = 'number' == typeof t ? [0, t] : [t[0], t[1]],
            r = n[0],
            o = n[1];
          if (!Number.isInteger(e) || e < r || e > o)
            throw Error(
              "Passed number '" +
                e +
                "' is not an integer between '" +
                r +
                "' and '" +
                o +
                "' (inclusive)."
            );
        }),
        (t.normalizeBigNumberish = function(e) {
          var t = a.default.isBigNumber(e) ? e : new a.default(e.toString());
          if (!t.isFinite())
            throw Error(
              "Passed bigNumberish '" + e + "' of type '" + typeof e + "' is not valid."
            );
          return t;
        }),
        (t.normalizeAddress = function(e) {
          return u.ethers.utils.getAddress(e.toLowerCase());
        }),
        (t.getEthToken = function(e) {
          return r({}, e ? { chainId: e } : {}, { address: s.ETH, decimals: 18 });
        });
    },
    '../../node_modules/@uniswap/sdk/dist/computation/_utils.js': function(e, t, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = r(n('../../node_modules/bignumber.js/bignumber.js')),
        a = n('../../node_modules/@uniswap/sdk/dist/constants/index.js');
      t.calculateDecimalRate = function(e, t, n) {
        void 0 === n && (n = !1);
        var r = a._10.exponentiatedBy(
            new o.default(Math.abs(e.token.decimals - t.token.decimals))
          ),
          u = r.isEqualTo(a._1)
            ? a._1
            : new o.default('0.' + '0'.repeat(r.toFixed().length - 2) + '1'),
          s = e.token.decimals - t.token.decimals > 0,
          i = {
            numerator: e.amount,
            denominator: t.amount,
            decimalScalar: s ? u : r,
            decimalScalarInverted: s ? r : u
          };
        return n
          ? i
          : {
              rate: i.numerator.multipliedBy(i.decimalScalar).dividedBy(i.denominator),
              rateInverted: i.denominator
                .multipliedBy(i.decimalScalarInverted)
                .dividedBy(i.numerator)
            };
      };
    },
    '../../node_modules/@uniswap/sdk/dist/computation/index.js': function(e, t, n) {
      'use strict';
      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        r(n('../../node_modules/@uniswap/sdk/dist/computation/market.js')),
        r(n('../../node_modules/@uniswap/sdk/dist/computation/trade.js'));
    },
    '../../node_modules/@uniswap/sdk/dist/computation/market.js': function(e, t, n) {
      'use strict';
      var r =
        (this && this.__assign) ||
        function() {
          return (r =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('../../node_modules/@uniswap/sdk/dist/types.js'),
        a = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/_utils/index.js'),
        s = n('../../node_modules/@uniswap/sdk/dist/computation/_utils.js');
      function i(e) {
        u.ensureAllUInt8([e.token.decimals]);
        var t = u.normalizeBigNumberish(e.amount);
        return u.ensureAllUInt256([t]), { token: r({}, e.token), amount: t };
      }
      function c(e) {
        return (
          u.ensureAllUInt8([e.token.decimals]),
          r(
            { token: r({}, e.token) },
            e.exchange ? { exchange: r({}, e.exchange) } : {},
            { ethReserve: i(e.ethReserve), tokenReserve: i(e.tokenReserve) }
          )
        );
      }
      function l(e, t, n) {
        if (!o.areTokenReservesNormalized(t)) throw Error;
        var r = e === a.TRADE_TYPE.ETH_TO_TOKEN ? t.tokenReserve : t.ethReserve,
          u = e === a.TRADE_TYPE.ETH_TO_TOKEN ? t.ethReserve : t.tokenReserve;
        return s.calculateDecimalRate(r, u, n);
      }
      t.getMarketDetails = function(e, t) {
        var n = (function(e, t) {
            if (o.areTokenReserves(e) && o.areTokenReserves(t))
              return {
                tradeType: a.TRADE_TYPE.TOKEN_TO_TOKEN,
                inputReserves: c(e),
                outputReserves: c(t)
              };
            if (o.areTokenReserves(e) && !o.areTokenReserves(t))
              return {
                tradeType: a.TRADE_TYPE.TOKEN_TO_ETH,
                inputReserves: c(e),
                outputReserves: o.areETHReserves(t)
                  ? t
                  : { token: u.getEthToken(e.token.chainId) }
              };
            if (!o.areTokenReserves(e) && o.areTokenReserves(t))
              return {
                tradeType: a.TRADE_TYPE.ETH_TO_TOKEN,
                inputReserves: o.areETHReserves(e)
                  ? e
                  : { token: u.getEthToken(t.token.chainId) },
                outputReserves: c(t)
              };
            throw Error(
              'optionalReservesInput, optionalReservesOutput, or both must be defined.'
            );
          })(e, t),
          r = n.tradeType,
          s = n.inputReserves,
          i = n.outputReserves;
        if (r === a.TRADE_TYPE.TOKEN_TO_TOKEN) {
          var d = l(a.TRADE_TYPE.TOKEN_TO_ETH, s, !0),
            f = d.numerator,
            p = d.denominator,
            m = d.decimalScalar,
            _ = d.decimalScalarInverted,
            T = l(a.TRADE_TYPE.ETH_TO_TOKEN, i, !0),
            h = T.numerator,
            y = T.denominator,
            E = T.decimalScalar,
            v = T.decimalScalarInverted;
          return {
            tradeType: r,
            inputReserves: s,
            outputReserves: i,
            marketRate: {
              rate: f
                .multipliedBy(m)
                .multipliedBy(h)
                .multipliedBy(E)
                .dividedBy(p.multipliedBy(y)),
              rateInverted: p
                .multipliedBy(_)
                .multipliedBy(y)
                .multipliedBy(v)
                .dividedBy(f.multipliedBy(h))
            }
          };
        }
        return {
          tradeType: r,
          inputReserves: s,
          outputReserves: i,
          marketRate: l(r, r === a.TRADE_TYPE.ETH_TO_TOKEN ? i : s)
        };
      };
    },
    '../../node_modules/@uniswap/sdk/dist/computation/trade.js': function(e, t, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = r(n('../../node_modules/bignumber.js/bignumber.js')),
        a = r(n('../../node_modules/lodash.clonedeepwith/index.js')),
        u = n('../../node_modules/@uniswap/sdk/dist/types.js'),
        s = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
        i = n('../../node_modules/@uniswap/sdk/dist/_utils/index.js'),
        c = n('../../node_modules/@uniswap/sdk/dist/computation/_utils.js'),
        l = n('../../node_modules/@uniswap/sdk/dist/computation/market.js');
      function d(e, t, n, r) {
        if (!u.areTokenReservesNormalized(r)) throw Error;
        var o =
            e === s.TRADE_TYPE.ETH_TO_TOKEN ? r.ethReserve.amount : r.tokenReserve.amount,
          a =
            e === s.TRADE_TYPE.ETH_TO_TOKEN ? r.tokenReserve.amount : r.ethReserve.amount;
        return t === s.TRADE_EXACT.INPUT
          ? (function(e, t, n) {
              if (
                (i.ensureAllUInt256([e, t, n]),
                t.isLessThanOrEqualTo(s._0) || n.isLessThanOrEqualTo(s._0))
              )
                throw Error(
                  "Both inputReserve '" +
                    t +
                    "' and outputReserve '" +
                    n +
                    "' must be non-zero."
                );
              var r = e.multipliedBy(s._997),
                o = r.multipliedBy(n),
                a = t.multipliedBy(s._1000).plus(r),
                u = o.dividedToIntegerBy(a);
              return i.ensureAllUInt256([r, o, a, u]), u;
            })(n, o, a)
          : (function(e, t, n) {
              if (
                (i.ensureAllUInt256([e, t, n]),
                t.isLessThanOrEqualTo(s._0) || n.isLessThanOrEqualTo(s._0))
              )
                throw Error(
                  "Both inputReserve '" +
                    t +
                    "' and outputReserve '" +
                    n +
                    "' must be non-zero."
                );
              var r = t.multipliedBy(e).multipliedBy(s._1000),
                o = n.minus(e).multipliedBy(s._997),
                a = r.dividedToIntegerBy(o).plus(s._1);
              return i.ensureAllUInt256([r, o, a]), a;
            })(n, o, a);
      }
      function f(e) {
        if (o.default.isBigNumber(e)) return new o.default(e);
      }
      function p(e, t) {
        return e
          .minus(t)
          .absoluteValue()
          .multipliedBy(s._10000)
          .dividedBy(e);
      }
      t.getTradeDetails = function(e, t, n) {
        var r = i.normalizeBigNumberish(t),
          o = (function(e, t, n, r, o) {
            var i = a.default(r, f),
              c = a.default(o, f);
            if (e === s.TRADE_TYPE.TOKEN_TO_TOKEN) {
              if (!u.areTokenReservesNormalized(i) || !u.areTokenReservesNormalized(c))
                throw Error;
              if (t === s.TRADE_EXACT.INPUT) {
                var l = d(s.TRADE_TYPE.TOKEN_TO_ETH, s.TRADE_EXACT.INPUT, n, r),
                  p = d(s.TRADE_TYPE.ETH_TO_TOKEN, s.TRADE_EXACT.INPUT, l, o);
                return (
                  (i.ethReserve.amount = i.ethReserve.amount.minus(l)),
                  (i.tokenReserve.amount = i.tokenReserve.amount.plus(n)),
                  (c.ethReserve.amount = c.ethReserve.amount.plus(l)),
                  (c.tokenReserve.amount = c.tokenReserve.amount.minus(p)),
                  { transput: p, inputReservesPost: i, outputReservesPost: c }
                );
              }
              (l = d(s.TRADE_TYPE.ETH_TO_TOKEN, s.TRADE_EXACT.OUTPUT, n, o)),
                (p = d(s.TRADE_TYPE.TOKEN_TO_ETH, s.TRADE_EXACT.OUTPUT, l, r));
              return (
                (i.ethReserve.amount = i.ethReserve.amount.minus(l)),
                (i.tokenReserve.amount = i.tokenReserve.amount.plus(p)),
                (c.ethReserve.amount = c.ethReserve.amount.plus(l)),
                (c.tokenReserve.amount = c.tokenReserve.amount.minus(n)),
                { transput: p, inputReservesPost: i, outputReservesPost: c }
              );
            }
            if (
              ((p = d(e, t, n, e === s.TRADE_TYPE.ETH_TO_TOKEN ? o : r)),
              e === s.TRADE_TYPE.ETH_TO_TOKEN)
            ) {
              if (!u.areTokenReservesNormalized(c)) throw Error;
              (c.ethReserve.amount = c.ethReserve.amount.plus(
                t === s.TRADE_EXACT.INPUT ? n : p
              )),
                (c.tokenReserve.amount = c.tokenReserve.amount.minus(
                  t === s.TRADE_EXACT.INPUT ? p : n
                ));
            } else {
              if (!u.areTokenReservesNormalized(i)) throw Error;
              (i.ethReserve.amount = i.ethReserve.amount.minus(
                t === s.TRADE_EXACT.INPUT ? p : n
              )),
                (i.tokenReserve.amount = i.tokenReserve.amount.plus(
                  t === s.TRADE_EXACT.INPUT ? n : p
                ));
            }
            return { transput: p, inputReservesPost: i, outputReservesPost: c };
          })(n.tradeType, e, r, n.inputReserves, n.outputReserves),
          m = o.transput,
          _ = o.inputReservesPost,
          T = o.outputReservesPost,
          h = { token: n.inputReserves.token, amount: e === s.TRADE_EXACT.INPUT ? r : m },
          y = {
            token: n.outputReserves.token,
            amount: e === s.TRADE_EXACT.INPUT ? m : r
          },
          E = l.getMarketDetails(_, T),
          v = c.calculateDecimalRate(y, h),
          g = p(n.marketRate.rate, E.marketRate.rate),
          b = p(n.marketRate.rate, v.rate);
        return {
          marketDetailsPre: n,
          marketDetailsPost: E,
          tradeType: n.tradeType,
          tradeExact: e,
          inputAmount: h,
          outputAmount: y,
          executionRate: v,
          marketRateSlippage: g,
          executionRateSlippage: b
        };
      };
    },
    '../../node_modules/@uniswap/sdk/dist/constants/abis/ERC20.json': function(e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    '../../node_modules/@uniswap/sdk/dist/constants/abis/EXCHANGE.json': function(e) {
      e.exports = JSON.parse(
        '[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":175875},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function","gas":82616},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"out"},{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function","gas":116814},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function","gas":12757},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function","gas":12965},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function","gas":50463},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function","gas":50671},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function","gas":47503},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function","gas":47712},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function","gas":50175},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function","gas":50384},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":51007},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":51098},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":54928},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function","gas":55019},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function","gas":49342},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function","gas":49532},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function","gas":53233},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function","gas":53423},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function","gas":5542},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function","gas":6872},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function","gas":5637},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function","gas":6897},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1413},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1443},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function","gas":1645},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function","gas":75034},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function","gas":110907},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function","gas":38769},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function","gas":1925},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1623},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1653},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1683},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":1713}]'
      );
    },
    '../../node_modules/@uniswap/sdk/dist/constants/abis/FACTORY.json': function(e) {
      e.exports = JSON.parse(
        '[{"name":"NewExchange","inputs":[{"type":"address","name":"token","indexed":true},{"type":"address","name":"exchange","indexed":true}],"anonymous":false,"type":"event"},{"name":"initializeFactory","outputs":[],"inputs":[{"type":"address","name":"template"}],"constant":false,"payable":false,"type":"function","gas":35725},{"name":"createExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":false,"payable":false,"type":"function","gas":187911},{"name":"getExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":true,"payable":false,"type":"function","gas":715},{"name":"getToken","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"exchange"}],"constant":true,"payable":false,"type":"function","gas":745},{"name":"getTokenWithId","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"token_id"}],"constant":true,"payable":false,"type":"function","gas":736},{"name":"exchangeTemplate","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":633},{"name":"tokenCount","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":663}]'
      );
    },
    '../../node_modules/@uniswap/sdk/dist/constants/index.js': function(e, t, n) {
      'use strict';
      var r,
        o,
        a,
        u =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s,
        i,
        c = u(n('../../node_modules/bignumber.js/bignumber.js')),
        l = u(n('../../node_modules/@uniswap/sdk/dist/constants/abis/ERC20.json')),
        d = u(n('../../node_modules/@uniswap/sdk/dist/constants/abis/FACTORY.json')),
        f = u(n('../../node_modules/@uniswap/sdk/dist/constants/abis/EXCHANGE.json'));
      (t.ETH = 'ETH'),
        (function(e) {
          (e[(e.Mainnet = 1)] = 'Mainnet'),
            (e[(e.Ropsten = 3)] = 'Ropsten'),
            (e[(e.Rinkeby = 4)] = 'Rinkeby'),
            (e[(e.Kovan = 42)] = 'Kovan');
        })((s = t.SUPPORTED_CHAIN_ID || (t.SUPPORTED_CHAIN_ID = {}))),
        (t.FACTORY_ADDRESS =
          (((r = {})[s.Mainnet] = '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95'),
          (r[s.Ropsten] = '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351'),
          (r[s.Rinkeby] = '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36'),
          (r[s.Kovan] = '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30'),
          r)),
        (t.FACTORY_ABI = JSON.stringify(d.default)),
        (t.EXCHANGE_ABI = JSON.stringify(f.default)),
        (function(e) {
          (e.ETH_TO_TOKEN = 'ETH_TO_TOKEN'),
            (e.TOKEN_TO_ETH = 'TOKEN_TO_ETH'),
            (e.TOKEN_TO_TOKEN = 'TOKEN_TO_TOKEN');
        })(t.TRADE_TYPE || (t.TRADE_TYPE = {})),
        (function(e) {
          (e.INPUT = 'INPUT'), (e.OUTPUT = 'OUTPUT');
        })(t.TRADE_EXACT || (t.TRADE_EXACT = {})),
        (function(e) {
          (e.ethToTokenSwapInput = 'ethToTokenSwapInput'),
            (e.ethToTokenTransferInput = 'ethToTokenTransferInput'),
            (e.ethToTokenSwapOutput = 'ethToTokenSwapOutput'),
            (e.ethToTokenTransferOutput = 'ethToTokenTransferOutput'),
            (e.tokenToEthSwapInput = 'tokenToEthSwapInput'),
            (e.tokenToEthTransferInput = 'tokenToEthTransferInput'),
            (e.tokenToEthSwapOutput = 'tokenToEthSwapOutput'),
            (e.tokenToEthTransferOutput = 'tokenToEthTransferOutput'),
            (e.tokenToTokenSwapInput = 'tokenToTokenSwapInput'),
            (e.tokenToTokenTransferInput = 'tokenToTokenTransferInput'),
            (e.tokenToTokenSwapOutput = 'tokenToTokenSwapOutput'),
            (e.tokenToTokenTransferOutput = 'tokenToTokenTransferOutput');
        })((i = t.TRADE_METHODS || (t.TRADE_METHODS = {}))),
        (t.TRADE_METHOD_IDS =
          (((o = {})[i.ethToTokenSwapInput] = '0xf39b5b9b'),
          (o[i.ethToTokenTransferInput] = '0xad65d76d'),
          (o[i.ethToTokenSwapOutput] = '0x6b1d4db7'),
          (o[i.ethToTokenTransferOutput] = '0x0b573638'),
          (o[i.tokenToEthSwapInput] = '0x95e3c50b'),
          (o[i.tokenToEthTransferInput] = '0x7237e031'),
          (o[i.tokenToEthSwapOutput] = '0x013efd8b'),
          (o[i.tokenToEthTransferOutput] = '0xd4e4841d'),
          (o[i.tokenToTokenSwapInput] = '0xddf7e1a7'),
          (o[i.tokenToTokenTransferInput] = '0xf552d91b'),
          (o[i.tokenToTokenSwapOutput] = '0xb040d545'),
          (o[i.tokenToTokenTransferOutput] = '0xf3c0efe9'),
          o)),
        (function(e) {
          (e.ZERO = 'ZERO'), (e.LESS_THAN = 'LESS_THAN'), (e.ONE_DIGIT = 'ONE_DIGIT');
        })(t.FIXED_UNDERFLOW_BEHAVIOR || (t.FIXED_UNDERFLOW_BEHAVIOR = {})),
        (t._MAX_DECIMAL_PLACES = 18),
        (t._ROUNDING_MODE = c.default.ROUND_HALF_UP),
        c.default.set({
          DECIMAL_PLACES: t._MAX_DECIMAL_PLACES,
          ROUNDING_MODE: t._ROUNDING_MODE
        }),
        (t._0 = new c.default('0')),
        (t._1 = new c.default('1')),
        (t._10 = new c.default('10')),
        (t._997 = new c.default('997')),
        (t._1000 = new c.default('1000')),
        (t._10000 = new c.default('10000')),
        (t._MAX_UINT8 = 255),
        (t._MAX_UINT256 = new c.default(
          '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        )),
        (t._CHAIN_ID_NAME =
          (((a = {})[s.Mainnet] = 'homestead'),
          (a[s.Ropsten] = 'ropsten'),
          (a[s.Rinkeby] = 'rinkeby'),
          (a[s.Kovan] = 'kovan'),
          a)),
        (t._ERC20_ABI = JSON.stringify(l.default));
    },
    '../../node_modules/@uniswap/sdk/dist/data/index.js': function(e, t, n) {
      'use strict';
      var r =
          (this && this.__awaiter) ||
          function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, a) {
              function u(e) {
                try {
                  i(r.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function s(e) {
                try {
                  i(r.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function i(e) {
                e.done
                  ? o(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(u, s);
              }
              i((r = r.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function(e, t) {
            var n,
              r,
              o,
              a,
              u = {
                label: 0,
                sent: function() {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: []
              };
            return (
              (a = { next: s(0), throw: s(1), return: s(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this;
                }),
              a
            );
            function s(a) {
              return function(s) {
                return (function(a) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; u; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & a[0]
                              ? r.return
                              : a[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, a[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                        case 0:
                        case 1:
                          o = a;
                          break;
                        case 4:
                          return u.label++, { value: a[1], done: !1 };
                        case 5:
                          u.label++, (r = a[1]), (a = [0]);
                          continue;
                        case 7:
                          (a = u.ops.pop()), u.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = u.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== a[0] && 2 !== a[0]))
                          ) {
                            u = 0;
                            continue;
                          }
                          if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                            u.label = a[1];
                            break;
                          }
                          if (6 === a[0] && u.label < o[1]) {
                            (u.label = o[1]), (o = a);
                            break;
                          }
                          if (o && u.label < o[2]) {
                            (u.label = o[2]), u.ops.push(a);
                            break;
                          }
                          o[2] && u.ops.pop(), u.trys.pop();
                          continue;
                      }
                      a = t.call(e, u);
                    } catch (e) {
                      (a = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & a[0]) throw a[1];
                  return { value: a[0] ? a[1] : void 0, done: !0 };
                })([a, s]);
              };
            }
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n('../../node_modules/ethers/dist/ethers.min.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/types.js'),
        s = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
        i = n('../../node_modules/@uniswap/sdk/dist/_utils/index.js');
      function c(e, t, n) {
        return new a.ethers.Contract(e, t, n);
      }
      function l(e) {
        return r(this, void 0, void 0, function() {
          var t, n;
          return o(this, function(r) {
            switch (r.label) {
              case 0:
                return u.isChainId(e)
                  ? [
                      2,
                      {
                        chainId: e,
                        provider: a.ethers.getDefaultProvider(s._CHAIN_ID_NAME[e])
                      }
                    ]
                  : [3, 1];
              case 1:
                return [
                  4,
                  (t = u.isLowLevelProvider(e)
                    ? new a.ethers.providers.Web3Provider(e)
                    : e).getNetwork()
                ];
              case 2:
                if (!((n = r.sent().chainId) in s.SUPPORTED_CHAIN_ID))
                  throw Error('chainId ' + n + ' is not valid.');
                return [2, { chainId: n, provider: t }];
            }
          });
        });
      }
      function d(e, t) {
        return r(this, void 0, void 0, function() {
          var n, r;
          return o(this, function(o) {
            switch (o.label) {
              case 0:
                return e !== s.ETH ? [3, 1] : [2, i.getEthToken(t.chainId)];
              case 1:
                return [4, (n = c(e, s._ERC20_ABI, t.provider)).decimals()];
              case 2:
                return (
                  (r = o.sent()),
                  [2, { chainId: t.chainId, address: n.address, decimals: r }]
                );
            }
          });
        });
      }
      t.getTokenReserves = function(e, t) {
        return (
          void 0 === t && (t = 1),
          r(this, void 0, void 0, function() {
            var n, r, a, u, f, p, m, _, T, h, y, E, v, g, b, k, A, O;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return (n = i.normalizeAddress(e)), [4, l(t)];
                case 1:
                  return (
                    (r = o.sent()),
                    (a = d(s.ETH, r)),
                    (u = d(n, r)),
                    (f = c(s.FACTORY_ADDRESS[r.chainId], s.FACTORY_ABI, r.provider)),
                    (p = c(n, s._ERC20_ABI, r.provider)),
                    [4, f.getExchange(n)]
                  );
                case 2:
                  return (
                    (m = o.sent()),
                    (_ = d(m, r)),
                    (T = r.provider.getBalance(m)),
                    (h = p.balanceOf(m)),
                    [4, Promise.all([a, u, _, T, h])]
                  );
                case 3:
                  return (
                    (y = o.sent()),
                    (E = y[0]),
                    (v = y[1]),
                    (g = y[2]),
                    (b = y[3]),
                    (k = y[4]),
                    (A = { token: E, amount: i.normalizeBigNumberish(b) }),
                    (O = { token: v, amount: i.normalizeBigNumberish(k) }),
                    [2, { token: v, exchange: g, ethReserve: A, tokenReserve: O }]
                  );
              }
            });
          })
        );
      };
    },
    '../../node_modules/@uniswap/sdk/dist/format/index.js': function(e, t, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = r(n('../../node_modules/bignumber.js/bignumber.js')),
        a = n('../../node_modules/@uniswap/sdk/dist/types.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
        s = n('../../node_modules/@uniswap/sdk/dist/_utils/index.js');
      function i(e, t, n, r) {
        return (
          void 0 === n && (n = u._ROUNDING_MODE),
          a.isFormat(r) || r
            ? e.toFormat(t, n, a.isFormat(r) ? r : void 0)
            : e.toFixed(t, n)
        );
      }
      function c(e, t) {
        var n = t || {},
          r = n.significantDigits,
          a = void 0 === r ? 6 : r,
          c = n.roundingMode,
          l = void 0 === c ? u._ROUNDING_MODE : c,
          d = n.forceIntegerSignificance,
          f = void 0 === d || d,
          p = n.format,
          m = void 0 !== p && p,
          _ = s.normalizeBigNumberish(e);
        s.ensureBoundedInteger(a, [1, u._MAX_DECIMAL_PLACES]);
        var T = f ? _.integerValue().toFixed().length : 0,
          h = new o.default(_.toPrecision(Math.max(T, a)));
        return i(h, h.decimalPlaces(), l, m);
      }
      function l(e, t) {
        var n = t || {},
          r = n.decimalPlaces,
          a = void 0 === r ? 4 : r,
          c = n.roundingMode,
          l = void 0 === c ? u._ROUNDING_MODE : c,
          d = n.dropTrailingZeros,
          f = void 0 === d || d,
          p = n.underflowBehavior,
          m = void 0 === p ? u.FIXED_UNDERFLOW_BEHAVIOR.ONE_DIGIT : p,
          _ = n.format,
          T = void 0 !== _ && _,
          h = s.normalizeBigNumberish(e);
        s.ensureBoundedInteger(a, u._MAX_DECIMAL_PLACES);
        var y = new o.default(0 === a ? '0.5' : '0.' + '0'.repeat(a) + '5');
        if (!h.isLessThan(y)) {
          var E = f ? new o.default(h.toFixed(a, l)).decimalPlaces() : a;
          return i(h, E, l, T);
        }
        switch (m) {
          case u.FIXED_UNDERFLOW_BEHAVIOR.ZERO:
            return i(u._0, f ? 0 : a, void 0, T);
          case u.FIXED_UNDERFLOW_BEHAVIOR.LESS_THAN:
            return '<' + i(y, y.decimalPlaces(), void 0, T);
          case u.FIXED_UNDERFLOW_BEHAVIOR.ONE_DIGIT:
            var v = new o.default(h.toPrecision(1));
            return i(v, v.decimalPlaces(), void 0, T);
          default:
            throw Error('Passed FIXED_UNDERFLOW_BEHAVIOR ' + m + ' is not valid.');
        }
      }
      function d(e, t) {
        var n = s.normalizeBigNumberish(e);
        if ((s.ensureAllUInt256([n]), s.ensureAllUInt8([t]), t > u._MAX_DECIMAL_PLACES))
          throw Error(
            'This function does not support decimals greater than ' +
              u._MAX_DECIMAL_PLACES +
              '.'
          );
        return n.dividedBy(u._10.exponentiatedBy(t));
      }
      (t.formatSignificant = c),
        (t.formatFixed = l),
        (t.formatSignificantDecimals = function(e, t, n) {
          return c(d(e, t), n);
        }),
        (t.formatFixedDecimals = function(e, t, n) {
          return l(d(e, t), n);
        });
    },
    '../../node_modules/@uniswap/sdk/dist/index.js': function(e, t, n) {
      'use strict';
      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      var o =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = o(n('../../node_modules/bignumber.js/bignumber.js'));
      t.BigNumber = a.default;
      var u = n('../../node_modules/@uniswap/sdk/dist/constants/index.js');
      (t.ETH = u.ETH),
        (t.SUPPORTED_CHAIN_ID = u.SUPPORTED_CHAIN_ID),
        (t.FACTORY_ADDRESS = u.FACTORY_ADDRESS),
        (t.FACTORY_ABI = u.FACTORY_ABI),
        (t.EXCHANGE_ABI = u.EXCHANGE_ABI),
        (t.TRADE_TYPE = u.TRADE_TYPE),
        (t.TRADE_EXACT = u.TRADE_EXACT),
        (t.TRADE_METHODS = u.TRADE_METHODS),
        (t.TRADE_METHOD_IDS = u.TRADE_METHOD_IDS),
        (t.FIXED_UNDERFLOW_BEHAVIOR = u.FIXED_UNDERFLOW_BEHAVIOR),
        r(n('../../node_modules/@uniswap/sdk/dist/data/index.js')),
        r(n('../../node_modules/@uniswap/sdk/dist/computation/index.js')),
        r(n('../../node_modules/@uniswap/sdk/dist/format/index.js')),
        r(n('../../node_modules/@uniswap/sdk/dist/orchestration/index.js')),
        r(n('../../node_modules/@uniswap/sdk/dist/transact/index.js'));
    },
    '../../node_modules/@uniswap/sdk/dist/orchestration/index.js': function(e, t, n) {
      'use strict';
      var r =
          (this && this.__awaiter) ||
          function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, a) {
              function u(e) {
                try {
                  i(r.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function s(e) {
                try {
                  i(r.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function i(e) {
                e.done
                  ? o(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(u, s);
              }
              i((r = r.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function(e, t) {
            var n,
              r,
              o,
              a,
              u = {
                label: 0,
                sent: function() {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: []
              };
            return (
              (a = { next: s(0), throw: s(1), return: s(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this;
                }),
              a
            );
            function s(a) {
              return function(s) {
                return (function(a) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; u; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & a[0]
                              ? r.return
                              : a[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, a[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                        case 0:
                        case 1:
                          o = a;
                          break;
                        case 4:
                          return u.label++, { value: a[1], done: !1 };
                        case 5:
                          u.label++, (r = a[1]), (a = [0]);
                          continue;
                        case 7:
                          (a = u.ops.pop()), u.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = u.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== a[0] && 2 !== a[0]))
                          ) {
                            u = 0;
                            continue;
                          }
                          if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                            u.label = a[1];
                            break;
                          }
                          if (6 === a[0] && u.label < o[1]) {
                            (u.label = o[1]), (o = a);
                            break;
                          }
                          if (o && u.label < o[2]) {
                            (u.label = o[2]), u.ops.push(a);
                            break;
                          }
                          o[2] && u.ops.pop(), u.trys.pop();
                          continue;
                      }
                      a = t.call(e, u);
                    } catch (e) {
                      (a = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & a[0]) throw a[1];
                  return { value: a[0] ? a[1] : void 0, done: !0 };
                })([a, s]);
              };
            }
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/data/index.js'),
        s = n('../../node_modules/@uniswap/sdk/dist/computation/index.js');
      function i(e, t) {
        var n = s.getMarketDetails(void 0, e);
        return s.getTradeDetails(a.TRADE_EXACT.INPUT, t, n);
      }
      function c(e, t) {
        var n = s.getMarketDetails(void 0, e);
        return s.getTradeDetails(a.TRADE_EXACT.OUTPUT, t, n);
      }
      function l(e, t) {
        var n = s.getMarketDetails(e, void 0);
        return s.getTradeDetails(a.TRADE_EXACT.INPUT, t, n);
      }
      function d(e, t) {
        var n = s.getMarketDetails(e, void 0);
        return s.getTradeDetails(a.TRADE_EXACT.OUTPUT, t, n);
      }
      function f(e, t, n) {
        var r = s.getMarketDetails(e, t);
        return s.getTradeDetails(a.TRADE_EXACT.INPUT, n, r);
      }
      function p(e, t, n) {
        var r = s.getMarketDetails(e, t);
        return s.getTradeDetails(a.TRADE_EXACT.OUTPUT, n, r);
      }
      (t.tradeExactEthForTokensWithData = i),
        (t.tradeExactEthForTokens = function(e, t, n) {
          return r(this, void 0, void 0, function() {
            return o(this, function(r) {
              switch (r.label) {
                case 0:
                  return [4, u.getTokenReserves(e, n)];
                case 1:
                  return [2, i(r.sent(), t)];
              }
            });
          });
        }),
        (t.tradeEthForExactTokensWithData = c),
        (t.tradeEthForExactTokens = function(e, t, n) {
          return r(this, void 0, void 0, function() {
            return o(this, function(r) {
              switch (r.label) {
                case 0:
                  return [4, u.getTokenReserves(e, n)];
                case 1:
                  return [2, c(r.sent(), t)];
              }
            });
          });
        }),
        (t.tradeExactTokensForEthWithData = l),
        (t.tradeExactTokensForEth = function(e, t, n) {
          return r(this, void 0, void 0, function() {
            return o(this, function(r) {
              switch (r.label) {
                case 0:
                  return [4, u.getTokenReserves(e, n)];
                case 1:
                  return [2, l(r.sent(), t)];
              }
            });
          });
        }),
        (t.tradeTokensForExactEthWithData = d),
        (t.tradeTokensForExactEth = function(e, t, n) {
          return r(this, void 0, void 0, function() {
            return o(this, function(r) {
              switch (r.label) {
                case 0:
                  return [4, u.getTokenReserves(e, n)];
                case 1:
                  return [2, d(r.sent(), t)];
              }
            });
          });
        }),
        (t.tradeExactTokensForTokensWithData = f),
        (t.tradeExactTokensForTokens = function(e, t, n, a) {
          return r(this, void 0, void 0, function() {
            var r, s;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return [4, u.getTokenReserves(e, a)];
                case 1:
                  return (r = o.sent()), [4, u.getTokenReserves(t, a)];
                case 2:
                  return (s = o.sent()), [2, f(r, s, n)];
              }
            });
          });
        }),
        (t.tradeTokensForExactTokensWithData = p),
        (t.tradeTokensForExactTokens = function(e, t, n, a) {
          return r(this, void 0, void 0, function() {
            var r, s;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return [4, u.getTokenReserves(e, a)];
                case 1:
                  return (r = o.sent()), [4, u.getTokenReserves(t, a)];
                case 2:
                  return (s = o.sent()), [2, p(r, s, n)];
              }
            });
          });
        });
    },
    '../../node_modules/@uniswap/sdk/dist/transact/index.js': function(e, t, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = r(n('../../node_modules/bignumber.js/bignumber.js')),
        a = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/_utils/index.js');
      function s(e) {
        return e.filter(function(e) {
          return void 0 !== e;
        });
      }
      function i(e, t) {
        var n = e.multipliedBy(t).dividedBy(a._10000),
          r = e.minus(n).integerValue(o.default.ROUND_FLOOR),
          u = e.plus(n).integerValue(o.default.ROUND_CEIL);
        return {
          minimum: r.isLessThan(a._0) ? a._0 : r,
          maximum: u.isGreaterThan(a._MAX_UINT256) ? a._MAX_UINT256 : u
        };
      }
      t.getExecutionDetails = function(e, t, n, r) {
        var o = (function(e) {
          switch (e.tradeType) {
            case a.TRADE_TYPE.ETH_TO_TOKEN:
              return e.marketDetailsPre.outputReserves;
            case a.TRADE_TYPE.TOKEN_TO_ETH:
            case a.TRADE_TYPE.TOKEN_TO_TOKEN:
              return e.marketDetailsPre.inputReserves;
            default:
              throw Error('tradeType ' + e.tradeType + ' is invalid.');
          }
        })(e);
        if (!o.exchange || !o.exchange.address)
          throw Error('trade does not include exchange address.');
        var c = (function(e, t) {
            switch ((void 0 === t && (t = !1), e.tradeType)) {
              case a.TRADE_TYPE.ETH_TO_TOKEN:
                return e.tradeExact !== a.TRADE_EXACT.INPUT || t
                  ? e.tradeExact === a.TRADE_EXACT.INPUT && t
                    ? a.TRADE_METHODS.ethToTokenTransferInput
                    : e.tradeExact !== a.TRADE_EXACT.OUTPUT || t
                    ? a.TRADE_METHODS.ethToTokenTransferOutput
                    : a.TRADE_METHODS.ethToTokenSwapOutput
                  : a.TRADE_METHODS.ethToTokenSwapInput;
              case a.TRADE_TYPE.TOKEN_TO_ETH:
                return e.tradeExact !== a.TRADE_EXACT.INPUT || t
                  ? e.tradeExact === a.TRADE_EXACT.INPUT && t
                    ? a.TRADE_METHODS.tokenToEthTransferInput
                    : e.tradeExact !== a.TRADE_EXACT.OUTPUT || t
                    ? a.TRADE_METHODS.tokenToEthTransferOutput
                    : a.TRADE_METHODS.tokenToEthSwapOutput
                  : a.TRADE_METHODS.tokenToEthSwapInput;
              case a.TRADE_TYPE.TOKEN_TO_TOKEN:
                return e.tradeExact !== a.TRADE_EXACT.INPUT || t
                  ? e.tradeExact === a.TRADE_EXACT.INPUT && t
                    ? a.TRADE_METHODS.tokenToTokenTransferInput
                    : e.tradeExact !== a.TRADE_EXACT.OUTPUT || t
                    ? a.TRADE_METHODS.tokenToTokenTransferOutput
                    : a.TRADE_METHODS.tokenToTokenSwapOutput
                  : a.TRADE_METHODS.tokenToTokenSwapInput;
              default:
                throw Error('tradeType ' + e.tradeType + ' is invalid.');
            }
          })(e, !!r),
          l = a.TRADE_METHOD_IDS[c],
          d = (function(e, t, n, r, o) {
            switch (t) {
              case a.TRADE_METHODS.ethToTokenSwapInput:
              case a.TRADE_METHODS.ethToTokenTransferInput:
                return {
                  value: e.inputAmount.amount,
                  methodArguments: s([i(e.outputAmount.amount, n).minimum, r, o])
                };
              case a.TRADE_METHODS.ethToTokenSwapOutput:
              case a.TRADE_METHODS.ethToTokenTransferOutput:
                return {
                  value: i(e.inputAmount.amount, n).maximum,
                  methodArguments: s([e.outputAmount.amount, r, o])
                };
              case a.TRADE_METHODS.tokenToEthSwapInput:
              case a.TRADE_METHODS.tokenToEthTransferInput:
                return {
                  value: a._0,
                  methodArguments: s([
                    e.inputAmount.amount,
                    i(e.outputAmount.amount, n).minimum,
                    r,
                    o
                  ])
                };
              case a.TRADE_METHODS.tokenToEthSwapOutput:
              case a.TRADE_METHODS.tokenToEthTransferOutput:
                return {
                  value: a._0,
                  methodArguments: s([
                    e.outputAmount.amount,
                    i(e.inputAmount.amount, n).maximum,
                    r,
                    o
                  ])
                };
              case a.TRADE_METHODS.tokenToTokenSwapInput:
              case a.TRADE_METHODS.tokenToTokenTransferInput:
                if (!e.outputAmount.token.address)
                  throw Error('trade does not include output token address.');
                return {
                  value: a._0,
                  methodArguments: s([
                    e.inputAmount.amount,
                    i(e.outputAmount.amount, n).minimum,
                    a._1,
                    r,
                    o,
                    e.outputAmount.token.address
                  ])
                };
              case a.TRADE_METHODS.tokenToTokenSwapOutput:
              case a.TRADE_METHODS.tokenToTokenTransferOutput:
                if (!e.outputAmount.token.address)
                  throw Error('trade does not include output token address.');
                return {
                  value: a._0,
                  methodArguments: s([
                    e.outputAmount.amount,
                    i(e.inputAmount.amount, n).maximum,
                    a._MAX_UINT256,
                    r,
                    o,
                    e.outputAmount.token.address
                  ])
                };
              default:
                throw Error('methodName ' + t + ' is invalid.');
            }
          })(
            e,
            c,
            t || 200,
            n || Math.round(Date.now() / 1e3 + 600),
            r && u.normalizeAddress(r)
          ),
          f = d.value,
          p = d.methodArguments;
        return {
          exchangeAddress: o.exchange.address,
          methodName: c,
          methodId: l,
          value: f,
          methodArguments: p
        };
      };
    },
    '../../node_modules/@uniswap/sdk/dist/types.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('../../node_modules/ethers/dist/ethers.min.js');
      function o(e) {
        return 'number' == typeof e;
      }
      (t.isChainId = o),
        (t.isLowLevelProvider = function(e) {
          if (o(e)) return !1;
          var t = e;
          return !r.ethers.providers.Provider.isProvider(t);
        }),
        (t.areTokenReserves = function(e) {
          var t = e;
          return void 0 !== t && void 0 !== t.ethReserve && void 0 !== t.tokenReserve;
        }),
        (t.areETHReserves = function(e) {
          var t = e;
          return void 0 !== t && void 0 === t.ethReserve && void 0 === t.tokenReserve;
        }),
        (t.areTokenReservesNormalized = function(e) {
          var t = e;
          return void 0 !== t.ethReserve && void 0 !== t.tokenReserve;
        }),
        (t.isFormat = function(e) {
          return 'boolean' != typeof e;
        });
    },
    '../../node_modules/bignumber.js/bignumber.js': function(e, t, n) {
      var r;
      !(function(o) {
        'use strict';
        var a,
          u = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          s = Math.ceil,
          i = Math.floor,
          c = '[BigNumber Error] ',
          l = c + 'Number primitive has more than 15 significant digits: ',
          d = 1e14,
          f = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
          p = 1e9;
        function m(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function _(e) {
          for (var t, n, r = 1, o = e.length, a = e[0] + ''; r < o; ) {
            for (n = 14 - (t = e[r++] + '').length; n--; t = '0' + t);
            a += t;
          }
          for (o = a.length; 48 === a.charCodeAt(--o); );
          return a.slice(0, o + 1 || 1);
        }
        function T(e, t) {
          var n,
            r,
            o = e.c,
            a = t.c,
            u = e.s,
            s = t.s,
            i = e.e,
            c = t.e;
          if (!u || !s) return null;
          if (((n = o && !o[0]), (r = a && !a[0]), n || r)) return n ? (r ? 0 : -s) : u;
          if (u != s) return u;
          if (((n = u < 0), (r = i == c), !o || !a)) return r ? 0 : !o ^ n ? 1 : -1;
          if (!r) return (i > c) ^ n ? 1 : -1;
          for (s = (i = o.length) < (c = a.length) ? i : c, u = 0; u < s; u++)
            if (o[u] != a[u]) return (o[u] > a[u]) ^ n ? 1 : -1;
          return i == c ? 0 : (i > c) ^ n ? 1 : -1;
        }
        function h(e, t, n, r) {
          if (e < t || e > n || e !== i(e))
            throw Error(
              c +
                (r || 'Argument') +
                ('number' == typeof e
                  ? e < t || e > n
                    ? ' out of range: '
                    : ' not an integer: '
                  : ' not a primitive number: ') +
                String(e)
            );
        }
        function y(e) {
          var t = e.c.length - 1;
          return m(e.e / 14) == t && e.c[t] % 2 != 0;
        }
        function E(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + '.' + e.slice(1) : e) + (t < 0 ? 'e' : 'e+') + t
          );
        }
        function v(e, t, n) {
          var r, o;
          if (t < 0) {
            for (o = n + '.'; ++t; o += n);
            e = o + e;
          } else if (++t > (r = e.length)) {
            for (o = n, t -= r; --t; o += n);
            e += o;
          } else t < r && (e = e.slice(0, t) + '.' + e.slice(t));
          return e;
        }
        ((a = (function e(t) {
          var n,
            r,
            o,
            a,
            g,
            b,
            k,
            A,
            O,
            w = (H.prototype = { constructor: H, toString: null, valueOf: null }),
            R = new H(1),
            D = 20,
            I = 4,
            N = -7,
            x = 21,
            j = -1e7,
            P = 1e7,
            S = !1,
            M = 1,
            U = 0,
            C = {
              prefix: '',
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ',',
              decimalSeparator: '.',
              fractionGroupSize: 0,
              fractionGroupSeparator: ' ',
              suffix: ''
            },
            B = '0123456789abcdefghijklmnopqrstuvwxyz';
          function H(e, t) {
            var n,
              a,
              s,
              c,
              d,
              f,
              p,
              m,
              _ = this;
            if (!(_ instanceof H)) return new H(e, t);
            if (null == t) {
              if (e && !0 === e._isBigNumber)
                return (
                  (_.s = e.s),
                  void (!e.c || e.e > P
                    ? (_.c = _.e = null)
                    : e.e < j
                    ? (_.c = [(_.e = 0)])
                    : ((_.e = e.e), (_.c = e.c.slice())))
                );
              if ((f = 'number' == typeof e) && 0 * e == 0) {
                if (((_.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (c = 0, d = e; d >= 10; d /= 10, c++);
                  return void (c > P ? (_.c = _.e = null) : ((_.e = c), (_.c = [e])));
                }
                m = String(e);
              } else {
                if (!u.test((m = String(e)))) return o(_, m, f);
                _.s = 45 == m.charCodeAt(0) ? ((m = m.slice(1)), -1) : 1;
              }
              (c = m.indexOf('.')) > -1 && (m = m.replace('.', '')),
                (d = m.search(/e/i)) > 0
                  ? (c < 0 && (c = d), (c += +m.slice(d + 1)), (m = m.substring(0, d)))
                  : c < 0 && (c = m.length);
            } else {
              if ((h(t, 2, B.length, 'Base'), 10 == t))
                return K((_ = new H(e)), D + _.e + 1, I);
              if (((m = String(e)), (f = 'number' == typeof e))) {
                if (0 * e != 0) return o(_, m, f, t);
                if (
                  ((_.s = 1 / e < 0 ? ((m = m.slice(1)), -1) : 1),
                  H.DEBUG && m.replace(/^0\.0*|\./, '').length > 15)
                )
                  throw Error(l + e);
              } else _.s = 45 === m.charCodeAt(0) ? ((m = m.slice(1)), -1) : 1;
              for (n = B.slice(0, t), c = d = 0, p = m.length; d < p; d++)
                if (n.indexOf((a = m.charAt(d))) < 0) {
                  if ('.' == a) {
                    if (d > c) {
                      c = p;
                      continue;
                    }
                  } else if (
                    !s &&
                    ((m == m.toUpperCase() && (m = m.toLowerCase())) ||
                      (m == m.toLowerCase() && (m = m.toUpperCase())))
                  ) {
                    (s = !0), (d = -1), (c = 0);
                    continue;
                  }
                  return o(_, String(e), f, t);
                }
              (f = !1),
                (c = (m = r(m, t, 10, _.s)).indexOf('.')) > -1
                  ? (m = m.replace('.', ''))
                  : (c = m.length);
            }
            for (d = 0; 48 === m.charCodeAt(d); d++);
            for (p = m.length; 48 === m.charCodeAt(--p); );
            if ((m = m.slice(d, ++p))) {
              if (
                ((p -= d), f && H.DEBUG && p > 15 && (e > 9007199254740991 || e !== i(e)))
              )
                throw Error(l + _.s * e);
              if ((c = c - d - 1) > P) _.c = _.e = null;
              else if (c < j) _.c = [(_.e = 0)];
              else {
                if (
                  ((_.e = c), (_.c = []), (d = (c + 1) % 14), c < 0 && (d += 14), d < p)
                ) {
                  for (d && _.c.push(+m.slice(0, d)), p -= 14; d < p; )
                    _.c.push(+m.slice(d, (d += 14)));
                  d = 14 - (m = m.slice(d)).length;
                } else d -= p;
                for (; d--; m += '0');
                _.c.push(+m);
              }
            } else _.c = [(_.e = 0)];
          }
          function F(e, t, n, r) {
            var o, a, u, s, i;
            if ((null == n ? (n = I) : h(n, 0, 8), !e.c)) return e.toString();
            if (((o = e.c[0]), (u = e.e), null == t))
              (i = _(e.c)),
                (i = 1 == r || (2 == r && (u <= N || u >= x)) ? E(i, u) : v(i, u, '0'));
            else if (
              ((a = (e = K(new H(e), t, n)).e),
              (s = (i = _(e.c)).length),
              1 == r || (2 == r && (t <= a || a <= N)))
            ) {
              for (; s < t; i += '0', s++);
              i = E(i, a);
            } else if (((t -= u), (i = v(i, a, '0')), a + 1 > s)) {
              if (--t > 0) for (i += '.'; t--; i += '0');
            } else if ((t += a - s) > 0) for (a + 1 == s && (i += '.'); t--; i += '0');
            return e.s < 0 && o ? '-' + i : i;
          }
          function L(e, t) {
            for (var n, r = 1, o = new H(e[0]); r < e.length; r++) {
              if (!(n = new H(e[r])).s) {
                o = n;
                break;
              }
              t.call(o, n) && (o = n);
            }
            return o;
          }
          function X(e, t, n) {
            for (var r = 1, o = t.length; !t[--o]; t.pop());
            for (o = t[0]; o >= 10; o /= 10, r++);
            return (
              (n = r + 14 * n - 1) > P
                ? (e.c = e.e = null)
                : n < j
                ? (e.c = [(e.e = 0)])
                : ((e.e = n), (e.c = t)),
              e
            );
          }
          function K(e, t, n, r) {
            var o,
              a,
              u,
              c,
              l,
              p,
              m,
              _ = e.c,
              T = f;
            if (_) {
              e: {
                for (o = 1, c = _[0]; c >= 10; c /= 10, o++);
                if ((a = t - o) < 0)
                  (a += 14), (u = t), (m = ((l = _[(p = 0)]) / T[o - u - 1]) % 10 | 0);
                else if ((p = s((a + 1) / 14)) >= _.length) {
                  if (!r) break e;
                  for (; _.length <= p; _.push(0));
                  (l = m = 0), (o = 1), (u = (a %= 14) - 14 + 1);
                } else {
                  for (l = c = _[p], o = 1; c >= 10; c /= 10, o++);
                  m = (u = (a %= 14) - 14 + o) < 0 ? 0 : (l / T[o - u - 1]) % 10 | 0;
                }
                if (
                  ((r = r || t < 0 || null != _[p + 1] || (u < 0 ? l : l % T[o - u - 1])),
                  (r =
                    n < 4
                      ? (m || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                      : m > 5 ||
                        (5 == m &&
                          (4 == n ||
                            r ||
                            (6 == n &&
                              (a > 0 ? (u > 0 ? l / T[o - u] : 0) : _[p - 1]) % 10 & 1) ||
                            n == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !_[0])
                )
                  return (
                    (_.length = 0),
                    r
                      ? ((t -= e.e + 1),
                        (_[0] = T[(14 - (t % 14)) % 14]),
                        (e.e = -t || 0))
                      : (_[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == a
                    ? ((_.length = p), (c = 1), p--)
                    : ((_.length = p + 1),
                      (c = T[14 - a]),
                      (_[p] = u > 0 ? i((l / T[o - u]) % T[u]) * c : 0)),
                  r)
                )
                  for (;;) {
                    if (0 == p) {
                      for (a = 1, u = _[0]; u >= 10; u /= 10, a++);
                      for (u = _[0] += c, c = 1; u >= 10; u /= 10, c++);
                      a != c && (e.e++, _[0] == d && (_[0] = 1));
                      break;
                    }
                    if (((_[p] += c), _[p] != d)) break;
                    (_[p--] = 0), (c = 1);
                  }
                for (a = _.length; 0 === _[--a]; _.pop());
              }
              e.e > P ? (e.c = e.e = null) : e.e < j && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          function Y(e) {
            var t,
              n = e.e;
            return null === n
              ? e.toString()
              : ((t = _(e.c)),
                (t = n <= N || n >= x ? E(t, n) : v(t, n, '0')),
                e.s < 0 ? '-' + t : t);
          }
          return (
            (H.clone = e),
            (H.ROUND_UP = 0),
            (H.ROUND_DOWN = 1),
            (H.ROUND_CEIL = 2),
            (H.ROUND_FLOOR = 3),
            (H.ROUND_HALF_UP = 4),
            (H.ROUND_HALF_DOWN = 5),
            (H.ROUND_HALF_EVEN = 6),
            (H.ROUND_HALF_CEIL = 7),
            (H.ROUND_HALF_FLOOR = 8),
            (H.EUCLID = 9),
            (H.config = H.set = function(e) {
              var t, n;
              if (null != e) {
                if ('object' != typeof e) throw Error(c + 'Object expected: ' + e);
                if (
                  (e.hasOwnProperty((t = 'DECIMAL_PLACES')) &&
                    (h((n = e[t]), 0, p, t), (D = n)),
                  e.hasOwnProperty((t = 'ROUNDING_MODE')) &&
                    (h((n = e[t]), 0, 8, t), (I = n)),
                  e.hasOwnProperty((t = 'EXPONENTIAL_AT')) &&
                    ((n = e[t]) && n.pop
                      ? (h(n[0], -p, 0, t), h(n[1], 0, p, t), (N = n[0]), (x = n[1]))
                      : (h(n, -p, p, t), (N = -(x = n < 0 ? -n : n)))),
                  e.hasOwnProperty((t = 'RANGE')))
                )
                  if ((n = e[t]) && n.pop)
                    h(n[0], -p, -1, t), h(n[1], 1, p, t), (j = n[0]), (P = n[1]);
                  else {
                    if ((h(n, -p, p, t), !n))
                      throw Error(c + t + ' cannot be zero: ' + n);
                    j = -(P = n < 0 ? -n : n);
                  }
                if (e.hasOwnProperty((t = 'CRYPTO'))) {
                  if ((n = e[t]) !== !!n) throw Error(c + t + ' not true or false: ' + n);
                  if (n) {
                    if (
                      'undefined' == typeof crypto ||
                      !crypto ||
                      (!crypto.getRandomValues && !crypto.randomBytes)
                    )
                      throw ((S = !n), Error(c + 'crypto unavailable'));
                    S = n;
                  } else S = n;
                }
                if (
                  (e.hasOwnProperty((t = 'MODULO_MODE')) &&
                    (h((n = e[t]), 0, 9, t), (M = n)),
                  e.hasOwnProperty((t = 'POW_PRECISION')) &&
                    (h((n = e[t]), 0, p, t), (U = n)),
                  e.hasOwnProperty((t = 'FORMAT')))
                ) {
                  if ('object' != typeof (n = e[t]))
                    throw Error(c + t + ' not an object: ' + n);
                  C = n;
                }
                if (e.hasOwnProperty((t = 'ALPHABET'))) {
                  if ('string' != typeof (n = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(n))
                    throw Error(c + t + ' invalid: ' + n);
                  B = n;
                }
              }
              return {
                DECIMAL_PLACES: D,
                ROUNDING_MODE: I,
                EXPONENTIAL_AT: [N, x],
                RANGE: [j, P],
                CRYPTO: S,
                MODULO_MODE: M,
                POW_PRECISION: U,
                FORMAT: C,
                ALPHABET: B
              };
            }),
            (H.isBigNumber = function(e) {
              if (!e || !0 !== e._isBigNumber) return !1;
              if (!H.DEBUG) return !0;
              var t,
                n,
                r = e.c,
                o = e.e,
                a = e.s;
              e: if ('[object Array]' == {}.toString.call(r)) {
                if ((1 === a || -1 === a) && o >= -p && o <= p && o === i(o)) {
                  if (0 === r[0]) {
                    if (0 === o && 1 === r.length) return !0;
                    break e;
                  }
                  if (((t = (o + 1) % 14) < 1 && (t += 14), String(r[0]).length == t)) {
                    for (t = 0; t < r.length; t++)
                      if ((n = r[t]) < 0 || n >= d || n !== i(n)) break e;
                    if (0 !== n) return !0;
                  }
                }
              } else if (null === r && null === o && (null === a || 1 === a || -1 === a))
                return !0;
              throw Error(c + 'Invalid BigNumber: ' + e);
            }),
            (H.maximum = H.max = function() {
              return L(arguments, w.lt);
            }),
            (H.minimum = H.min = function() {
              return L(arguments, w.gt);
            }),
            (H.random =
              ((a =
                (9007199254740992 * Math.random()) & 2097151
                  ? function() {
                      return i(9007199254740992 * Math.random());
                    }
                  : function() {
                      return (
                        8388608 * ((1073741824 * Math.random()) | 0) +
                        ((8388608 * Math.random()) | 0)
                      );
                    }),
              function(e) {
                var t,
                  n,
                  r,
                  o,
                  u,
                  l = 0,
                  d = [],
                  m = new H(R);
                if ((null == e ? (e = D) : h(e, 0, p), (o = s(e / 14)), S))
                  if (crypto.getRandomValues) {
                    for (t = crypto.getRandomValues(new Uint32Array((o *= 2))); l < o; )
                      (u = 131072 * t[l] + (t[l + 1] >>> 11)) >= 9e15
                        ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                          (t[l] = n[0]),
                          (t[l + 1] = n[1]))
                        : (d.push(u % 1e14), (l += 2));
                    l = o / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((S = !1), Error(c + 'crypto unavailable'));
                    for (t = crypto.randomBytes((o *= 7)); l < o; )
                      (u =
                        281474976710656 * (31 & t[l]) +
                        1099511627776 * t[l + 1] +
                        4294967296 * t[l + 2] +
                        16777216 * t[l + 3] +
                        (t[l + 4] << 16) +
                        (t[l + 5] << 8) +
                        t[l + 6]) >= 9e15
                        ? crypto.randomBytes(7).copy(t, l)
                        : (d.push(u % 1e14), (l += 7));
                    l = o / 7;
                  }
                if (!S) for (; l < o; ) (u = a()) < 9e15 && (d[l++] = u % 1e14);
                for (
                  e %= 14, (o = d[--l]) && e && ((u = f[14 - e]), (d[l] = i(o / u) * u));
                  0 === d[l];
                  d.pop(), l--
                );
                if (l < 0) d = [(r = 0)];
                else {
                  for (r = -1; 0 === d[0]; d.splice(0, 1), r -= 14);
                  for (l = 1, u = d[0]; u >= 10; u /= 10, l++);
                  l < 14 && (r -= 14 - l);
                }
                return (m.e = r), (m.c = d), m;
              })),
            (H.sum = function() {
              for (var e = 1, t = arguments, n = new H(t[0]); e < t.length; )
                n = n.plus(t[e++]);
              return n;
            }),
            (r = (function() {
              function e(e, t, n, r) {
                for (var o, a, u = [0], s = 0, i = e.length; s < i; ) {
                  for (a = u.length; a--; u[a] *= t);
                  for (u[0] += r.indexOf(e.charAt(s++)), o = 0; o < u.length; o++)
                    u[o] > n - 1 &&
                      (null == u[o + 1] && (u[o + 1] = 0),
                      (u[o + 1] += (u[o] / n) | 0),
                      (u[o] %= n));
                }
                return u.reverse();
              }
              return function(t, r, o, a, u) {
                var s,
                  i,
                  c,
                  l,
                  d,
                  f,
                  p,
                  m,
                  T = t.indexOf('.'),
                  h = D,
                  y = I;
                for (
                  T >= 0 &&
                    ((l = U),
                    (U = 0),
                    (t = t.replace('.', '')),
                    (f = (m = new H(r)).pow(t.length - T)),
                    (U = l),
                    (m.c = e(v(_(f.c), f.e, '0'), 10, o, '0123456789')),
                    (m.e = m.c.length)),
                    c = l = (p = e(
                      t,
                      r,
                      o,
                      u ? ((s = B), '0123456789') : ((s = '0123456789'), B)
                    )).length;
                  0 == p[--l];
                  p.pop()
                );
                if (!p[0]) return s.charAt(0);
                if (
                  (T < 0
                    ? --c
                    : ((f.c = p),
                      (f.e = c),
                      (f.s = a),
                      (p = (f = n(f, m, h, y, o)).c),
                      (d = f.r),
                      (c = f.e)),
                  (T = p[(i = c + h + 1)]),
                  (l = o / 2),
                  (d = d || i < 0 || null != p[i + 1]),
                  (d =
                    y < 4
                      ? (null != T || d) && (0 == y || y == (f.s < 0 ? 3 : 2))
                      : T > l ||
                        (T == l &&
                          (4 == y ||
                            d ||
                            (6 == y && 1 & p[i - 1]) ||
                            y == (f.s < 0 ? 8 : 7)))),
                  i < 1 || !p[0])
                )
                  t = d ? v(s.charAt(1), -h, s.charAt(0)) : s.charAt(0);
                else {
                  if (((p.length = i), d))
                    for (--o; ++p[--i] > o; ) (p[i] = 0), i || (++c, (p = [1].concat(p)));
                  for (l = p.length; !p[--l]; );
                  for (T = 0, t = ''; T <= l; t += s.charAt(p[T++]));
                  t = v(t, c, s.charAt(0));
                }
                return t;
              };
            })()),
            (n = (function() {
              function e(e, t, n) {
                var r,
                  o,
                  a,
                  u,
                  s = 0,
                  i = e.length,
                  c = t % 1e7,
                  l = (t / 1e7) | 0;
                for (e = e.slice(); i--; )
                  (s =
                    (((o =
                      c * (a = e[i] % 1e7) +
                      ((r = l * a + (u = (e[i] / 1e7) | 0) * c) % 1e7) * 1e7 +
                      s) /
                      n) |
                      0) +
                    ((r / 1e7) | 0) +
                    l * u),
                    (e[i] = o % n);
                return s && (e = [s].concat(e)), e;
              }
              function t(e, t, n, r) {
                var o, a;
                if (n != r) a = n > r ? 1 : -1;
                else
                  for (o = a = 0; o < n; o++)
                    if (e[o] != t[o]) {
                      a = e[o] > t[o] ? 1 : -1;
                      break;
                    }
                return a;
              }
              function n(e, t, n, r) {
                for (var o = 0; n--; )
                  (e[n] -= o), (o = e[n] < t[n] ? 1 : 0), (e[n] = o * r + e[n] - t[n]);
                for (; !e[0] && e.length > 1; e.splice(0, 1));
              }
              return function(r, o, a, u, s) {
                var c,
                  l,
                  f,
                  p,
                  _,
                  T,
                  h,
                  y,
                  E,
                  v,
                  g,
                  b,
                  k,
                  A,
                  O,
                  w,
                  R,
                  D = r.s == o.s ? 1 : -1,
                  I = r.c,
                  N = o.c;
                if (!(I && I[0] && N && N[0]))
                  return new H(
                    r.s && o.s && (I ? !N || I[0] != N[0] : N)
                      ? (I && 0 == I[0]) || !N
                        ? 0 * D
                        : D / 0
                      : NaN
                  );
                for (
                  E = (y = new H(D)).c = [],
                    D = a + (l = r.e - o.e) + 1,
                    s || ((s = d), (l = m(r.e / 14) - m(o.e / 14)), (D = (D / 14) | 0)),
                    f = 0;
                  N[f] == (I[f] || 0);
                  f++
                );
                if ((N[f] > (I[f] || 0) && l--, D < 0)) E.push(1), (p = !0);
                else {
                  for (
                    A = I.length,
                      w = N.length,
                      f = 0,
                      D += 2,
                      (_ = i(s / (N[0] + 1))) > 1 &&
                        ((N = e(N, _, s)),
                        (I = e(I, _, s)),
                        (w = N.length),
                        (A = I.length)),
                      k = w,
                      g = (v = I.slice(0, w)).length;
                    g < w;
                    v[g++] = 0
                  );
                  (R = N.slice()), (R = [0].concat(R)), (O = N[0]), N[1] >= s / 2 && O++;
                  do {
                    if (((_ = 0), (c = t(N, v, w, g)) < 0)) {
                      if (
                        ((b = v[0]),
                        w != g && (b = b * s + (v[1] || 0)),
                        (_ = i(b / O)) > 1)
                      )
                        for (
                          _ >= s && (_ = s - 1),
                            h = (T = e(N, _, s)).length,
                            g = v.length;
                          1 == t(T, v, h, g);

                        )
                          _--, n(T, w < h ? R : N, h, s), (h = T.length), (c = 1);
                      else 0 == _ && (c = _ = 1), (h = (T = N.slice()).length);
                      if (
                        (h < g && (T = [0].concat(T)),
                        n(v, T, g, s),
                        (g = v.length),
                        -1 == c)
                      )
                        for (; t(N, v, w, g) < 1; )
                          _++, n(v, w < g ? R : N, g, s), (g = v.length);
                    } else 0 === c && (_++, (v = [0]));
                    (E[f++] = _), v[0] ? (v[g++] = I[k] || 0) : ((v = [I[k]]), (g = 1));
                  } while ((k++ < A || null != v[0]) && D--);
                  (p = null != v[0]), E[0] || E.splice(0, 1);
                }
                if (s == d) {
                  for (f = 1, D = E[0]; D >= 10; D /= 10, f++);
                  K(y, a + (y.e = f + 14 * l - 1) + 1, u, p);
                } else (y.e = l), (y.r = +p);
                return y;
              };
            })()),
            (g = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
            (b = /^([^.]+)\.$/),
            (k = /^\.([^.]+)$/),
            (A = /^-?(Infinity|NaN)$/),
            (O = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
            (o = function(e, t, n, r) {
              var o,
                a = n ? t : t.replace(O, '');
              if (A.test(a)) e.s = isNaN(a) ? null : a < 0 ? -1 : 1;
              else {
                if (
                  !n &&
                  ((a = a.replace(g, function(e, t, n) {
                    return (
                      (o = 'x' == (n = n.toLowerCase()) ? 16 : 'b' == n ? 2 : 8),
                      r && r != o ? e : t
                    );
                  })),
                  r && ((o = r), (a = a.replace(b, '$1').replace(k, '0.$1'))),
                  t != a)
                )
                  return new H(a, o);
                if (H.DEBUG)
                  throw Error(c + 'Not a' + (r ? ' base ' + r : '') + ' number: ' + t);
                e.s = null;
              }
              e.c = e.e = null;
            }),
            (w.absoluteValue = w.abs = function() {
              var e = new H(this);
              return e.s < 0 && (e.s = 1), e;
            }),
            (w.comparedTo = function(e, t) {
              return T(this, new H(e, t));
            }),
            (w.decimalPlaces = w.dp = function(e, t) {
              var n,
                r,
                o,
                a = this;
              if (null != e)
                return (
                  h(e, 0, p),
                  null == t ? (t = I) : h(t, 0, 8),
                  K(new H(a), e + a.e + 1, t)
                );
              if (!(n = a.c)) return null;
              if (((r = 14 * ((o = n.length - 1) - m(this.e / 14))), (o = n[o])))
                for (; o % 10 == 0; o /= 10, r--);
              return r < 0 && (r = 0), r;
            }),
            (w.dividedBy = w.div = function(e, t) {
              return n(this, new H(e, t), D, I);
            }),
            (w.dividedToIntegerBy = w.idiv = function(e, t) {
              return n(this, new H(e, t), 0, 1);
            }),
            (w.exponentiatedBy = w.pow = function(e, t) {
              var n,
                r,
                o,
                a,
                u,
                l,
                d,
                f,
                p = this;
              if ((e = new H(e)).c && !e.isInteger())
                throw Error(c + 'Exponent not an integer: ' + Y(e));
              if (
                (null != t && (t = new H(t)),
                (u = e.e > 14),
                !p.c ||
                  !p.c[0] ||
                  (1 == p.c[0] && !p.e && 1 == p.c.length) ||
                  !e.c ||
                  !e.c[0])
              )
                return (
                  (f = new H(Math.pow(+Y(p), u ? 2 - y(e) : +Y(e)))), t ? f.mod(t) : f
                );
              if (((l = e.s < 0), t)) {
                if (t.c ? !t.c[0] : !t.s) return new H(NaN);
                (r = !l && p.isInteger() && t.isInteger()) && (p = p.mod(t));
              } else {
                if (
                  e.e > 9 &&
                  (p.e > 0 ||
                    p.e < -1 ||
                    (0 == p.e
                      ? p.c[0] > 1 || (u && p.c[1] >= 24e7)
                      : p.c[0] < 8e13 || (u && p.c[0] <= 9999975e7)))
                )
                  return (
                    (a = p.s < 0 && y(e) ? -0 : 0),
                    p.e > -1 && (a = 1 / a),
                    new H(l ? 1 / a : a)
                  );
                U && (a = s(U / 14 + 2));
              }
              for (
                u
                  ? ((n = new H(0.5)), l && (e.s = 1), (d = y(e)))
                  : (d = (o = Math.abs(+Y(e))) % 2),
                  f = new H(R);
                ;

              ) {
                if (d) {
                  if (!(f = f.times(p)).c) break;
                  a ? f.c.length > a && (f.c.length = a) : r && (f = f.mod(t));
                }
                if (o) {
                  if (0 === (o = i(o / 2))) break;
                  d = o % 2;
                } else if ((K((e = e.times(n)), e.e + 1, 1), e.e > 14)) d = y(e);
                else {
                  if (0 === (o = +Y(e))) break;
                  d = o % 2;
                }
                (p = p.times(p)),
                  a ? p.c && p.c.length > a && (p.c.length = a) : r && (p = p.mod(t));
              }
              return r
                ? f
                : (l && (f = R.div(f)), t ? f.mod(t) : a ? K(f, U, I, void 0) : f);
            }),
            (w.integerValue = function(e) {
              var t = new H(this);
              return null == e ? (e = I) : h(e, 0, 8), K(t, t.e + 1, e);
            }),
            (w.isEqualTo = w.eq = function(e, t) {
              return 0 === T(this, new H(e, t));
            }),
            (w.isFinite = function() {
              return !!this.c;
            }),
            (w.isGreaterThan = w.gt = function(e, t) {
              return T(this, new H(e, t)) > 0;
            }),
            (w.isGreaterThanOrEqualTo = w.gte = function(e, t) {
              return 1 === (t = T(this, new H(e, t))) || 0 === t;
            }),
            (w.isInteger = function() {
              return !!this.c && m(this.e / 14) > this.c.length - 2;
            }),
            (w.isLessThan = w.lt = function(e, t) {
              return T(this, new H(e, t)) < 0;
            }),
            (w.isLessThanOrEqualTo = w.lte = function(e, t) {
              return -1 === (t = T(this, new H(e, t))) || 0 === t;
            }),
            (w.isNaN = function() {
              return !this.s;
            }),
            (w.isNegative = function() {
              return this.s < 0;
            }),
            (w.isPositive = function() {
              return this.s > 0;
            }),
            (w.isZero = function() {
              return !!this.c && 0 == this.c[0];
            }),
            (w.minus = function(e, t) {
              var n,
                r,
                o,
                a,
                u = this,
                s = u.s;
              if (((t = (e = new H(e, t)).s), !s || !t)) return new H(NaN);
              if (s != t) return (e.s = -t), u.plus(e);
              var i = u.e / 14,
                c = e.e / 14,
                l = u.c,
                f = e.c;
              if (!i || !c) {
                if (!l || !f) return l ? ((e.s = -t), e) : new H(f ? u : NaN);
                if (!l[0] || !f[0])
                  return f[0] ? ((e.s = -t), e) : new H(l[0] ? u : 3 == I ? -0 : 0);
              }
              if (((i = m(i)), (c = m(c)), (l = l.slice()), (s = i - c))) {
                for (
                  (a = s < 0) ? ((s = -s), (o = l)) : ((c = i), (o = f)),
                    o.reverse(),
                    t = s;
                  t--;
                  o.push(0)
                );
                o.reverse();
              } else
                for (
                  r = (a = (s = l.length) < (t = f.length)) ? s : t, s = t = 0;
                  t < r;
                  t++
                )
                  if (l[t] != f[t]) {
                    a = l[t] < f[t];
                    break;
                  }
              if (
                (a && ((o = l), (l = f), (f = o), (e.s = -e.s)),
                (t = (r = f.length) - (n = l.length)) > 0)
              )
                for (; t--; l[n++] = 0);
              for (t = d - 1; r > s; ) {
                if (l[--r] < f[r]) {
                  for (n = r; n && !l[--n]; l[n] = t);
                  --l[n], (l[r] += d);
                }
                l[r] -= f[r];
              }
              for (; 0 == l[0]; l.splice(0, 1), --c);
              return l[0]
                ? X(e, l, c)
                : ((e.s = 3 == I ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (w.modulo = w.mod = function(e, t) {
              var r,
                o,
                a = this;
              return (
                (e = new H(e, t)),
                !a.c || !e.s || (e.c && !e.c[0])
                  ? new H(NaN)
                  : !e.c || (a.c && !a.c[0])
                  ? new H(a)
                  : (9 == M
                      ? ((o = e.s), (e.s = 1), (r = n(a, e, 0, 3)), (e.s = o), (r.s *= o))
                      : (r = n(a, e, 0, M)),
                    (e = a.minus(r.times(e))).c[0] || 1 != M || (e.s = a.s),
                    e)
              );
            }),
            (w.multipliedBy = w.times = function(e, t) {
              var n,
                r,
                o,
                a,
                u,
                s,
                i,
                c,
                l,
                f,
                p,
                _,
                T,
                h,
                y = this,
                E = y.c,
                v = (e = new H(e, t)).c;
              if (!(E && v && E[0] && v[0]))
                return (
                  !y.s || !e.s || (E && !E[0] && !v) || (v && !v[0] && !E)
                    ? (e.c = e.e = e.s = null)
                    : ((e.s *= y.s),
                      E && v ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                  e
                );
              for (
                r = m(y.e / 14) + m(e.e / 14),
                  e.s *= y.s,
                  (i = E.length) < (f = v.length) &&
                    ((T = E), (E = v), (v = T), (o = i), (i = f), (f = o)),
                  o = i + f,
                  T = [];
                o--;
                T.push(0)
              );
              for (h = d, 1e7, o = f; --o >= 0; ) {
                for (
                  n = 0, p = v[o] % 1e7, _ = (v[o] / 1e7) | 0, a = o + (u = i);
                  a > o;

                )
                  (n =
                    (((c =
                      p * (c = E[--u] % 1e7) +
                      ((s = _ * c + (l = (E[u] / 1e7) | 0) * p) % 1e7) * 1e7 +
                      T[a] +
                      n) /
                      h) |
                      0) +
                    ((s / 1e7) | 0) +
                    _ * l),
                    (T[a--] = c % h);
                T[a] = n;
              }
              return n ? ++r : T.splice(0, 1), X(e, T, r);
            }),
            (w.negated = function() {
              var e = new H(this);
              return (e.s = -e.s || null), e;
            }),
            (w.plus = function(e, t) {
              var n,
                r = this,
                o = r.s;
              if (((t = (e = new H(e, t)).s), !o || !t)) return new H(NaN);
              if (o != t) return (e.s = -t), r.minus(e);
              var a = r.e / 14,
                u = e.e / 14,
                s = r.c,
                i = e.c;
              if (!a || !u) {
                if (!s || !i) return new H(o / 0);
                if (!s[0] || !i[0]) return i[0] ? e : new H(s[0] ? r : 0 * o);
              }
              if (((a = m(a)), (u = m(u)), (s = s.slice()), (o = a - u))) {
                for (
                  o > 0 ? ((u = a), (n = i)) : ((o = -o), (n = s)), n.reverse();
                  o--;
                  n.push(0)
                );
                n.reverse();
              }
              for (
                (o = s.length) - (t = i.length) < 0 &&
                  ((n = i), (i = s), (s = n), (t = o)),
                  o = 0;
                t;

              )
                (o = ((s[--t] = s[t] + i[t] + o) / d) | 0),
                  (s[t] = d === s[t] ? 0 : s[t] % d);
              return o && ((s = [o].concat(s)), ++u), X(e, s, u);
            }),
            (w.precision = w.sd = function(e, t) {
              var n,
                r,
                o,
                a = this;
              if (null != e && e !== !!e)
                return h(e, 1, p), null == t ? (t = I) : h(t, 0, 8), K(new H(a), e, t);
              if (!(n = a.c)) return null;
              if (((r = 14 * (o = n.length - 1) + 1), (o = n[o]))) {
                for (; o % 10 == 0; o /= 10, r--);
                for (o = n[0]; o >= 10; o /= 10, r++);
              }
              return e && a.e + 1 > r && (r = a.e + 1), r;
            }),
            (w.shiftedBy = function(e) {
              return h(e, -9007199254740991, 9007199254740991), this.times('1e' + e);
            }),
            (w.squareRoot = w.sqrt = function() {
              var e,
                t,
                r,
                o,
                a,
                u = this,
                s = u.c,
                i = u.s,
                c = u.e,
                l = D + 4,
                d = new H('0.5');
              if (1 !== i || !s || !s[0])
                return new H(!i || (i < 0 && (!s || s[0])) ? NaN : s ? u : 1 / 0);
              if (
                (0 == (i = Math.sqrt(+Y(u))) || i == 1 / 0
                  ? (((t = _(s)).length + c) % 2 == 0 && (t += '0'),
                    (i = Math.sqrt(+t)),
                    (c = m((c + 1) / 2) - (c < 0 || c % 2)),
                    (r = new H(
                      (t =
                        i == 1 / 0
                          ? '1e' + c
                          : (t = i.toExponential()).slice(0, t.indexOf('e') + 1) + c)
                    )))
                  : (r = new H(i + '')),
                r.c[0])
              )
                for ((i = (c = r.e) + l) < 3 && (i = 0); ; )
                  if (
                    ((a = r),
                    (r = d.times(a.plus(n(u, a, l, 1)))),
                    _(a.c).slice(0, i) === (t = _(r.c)).slice(0, i))
                  ) {
                    if (
                      (r.e < c && --i,
                      '9999' != (t = t.slice(i - 3, i + 1)) && (o || '4999' != t))
                    ) {
                      (+t && (+t.slice(1) || '5' != t.charAt(0))) ||
                        (K(r, r.e + D + 2, 1), (e = !r.times(r).eq(u)));
                      break;
                    }
                    if (!o && (K(a, a.e + D + 2, 0), a.times(a).eq(u))) {
                      r = a;
                      break;
                    }
                    (l += 4), (i += 4), (o = 1);
                  }
              return K(r, r.e + D + 1, I, e);
            }),
            (w.toExponential = function(e, t) {
              return null != e && (h(e, 0, p), e++), F(this, e, t, 1);
            }),
            (w.toFixed = function(e, t) {
              return null != e && (h(e, 0, p), (e = e + this.e + 1)), F(this, e, t);
            }),
            (w.toFormat = function(e, t, n) {
              var r,
                o = this;
              if (null == n)
                null != e && t && 'object' == typeof t
                  ? ((n = t), (t = null))
                  : e && 'object' == typeof e
                  ? ((n = e), (e = t = null))
                  : (n = C);
              else if ('object' != typeof n)
                throw Error(c + 'Argument not an object: ' + n);
              if (((r = o.toFixed(e, t)), o.c)) {
                var a,
                  u = r.split('.'),
                  s = +n.groupSize,
                  i = +n.secondaryGroupSize,
                  l = n.groupSeparator || '',
                  d = u[0],
                  f = u[1],
                  p = o.s < 0,
                  m = p ? d.slice(1) : d,
                  _ = m.length;
                if ((i && ((a = s), (s = i), (i = a), (_ -= a)), s > 0 && _ > 0)) {
                  for (a = _ % s || s, d = m.substr(0, a); a < _; a += s)
                    d += l + m.substr(a, s);
                  i > 0 && (d += l + m.slice(a)), p && (d = '-' + d);
                }
                r = f
                  ? d +
                    (n.decimalSeparator || '') +
                    ((i = +n.fractionGroupSize)
                      ? f.replace(
                          new RegExp('\\d{' + i + '}\\B', 'g'),
                          '$&' + (n.fractionGroupSeparator || '')
                        )
                      : f)
                  : d;
              }
              return (n.prefix || '') + r + (n.suffix || '');
            }),
            (w.toFraction = function(e) {
              var t,
                r,
                o,
                a,
                u,
                s,
                i,
                l,
                d,
                p,
                m,
                T,
                h = this,
                y = h.c;
              if (
                null != e &&
                ((!(i = new H(e)).isInteger() && (i.c || 1 !== i.s)) || i.lt(R))
              )
                throw Error(
                  c +
                    'Argument ' +
                    (i.isInteger() ? 'out of range: ' : 'not an integer: ') +
                    Y(i)
                );
              if (!y) return new H(h);
              for (
                t = new H(R),
                  d = r = new H(R),
                  o = l = new H(R),
                  T = _(y),
                  u = t.e = T.length - h.e - 1,
                  t.c[0] = f[(s = u % 14) < 0 ? 14 + s : s],
                  e = !e || i.comparedTo(t) > 0 ? (u > 0 ? t : d) : i,
                  s = P,
                  P = 1 / 0,
                  i = new H(T),
                  l.c[0] = 0;
                (p = n(i, t, 0, 1)), 1 != (a = r.plus(p.times(o))).comparedTo(e);

              )
                (r = o),
                  (o = a),
                  (d = l.plus(p.times((a = d)))),
                  (l = a),
                  (t = i.minus(p.times((a = t)))),
                  (i = a);
              return (
                (a = n(e.minus(r), o, 0, 1)),
                (l = l.plus(a.times(d))),
                (r = r.plus(a.times(o))),
                (l.s = d.s = h.s),
                (m =
                  n(d, o, (u *= 2), I)
                    .minus(h)
                    .abs()
                    .comparedTo(
                      n(l, r, u, I)
                        .minus(h)
                        .abs()
                    ) < 1
                    ? [d, o]
                    : [l, r]),
                (P = s),
                m
              );
            }),
            (w.toNumber = function() {
              return +Y(this);
            }),
            (w.toPrecision = function(e, t) {
              return null != e && h(e, 1, p), F(this, e, t, 2);
            }),
            (w.toString = function(e) {
              var t,
                n = this,
                o = n.s,
                a = n.e;
              return (
                null === a
                  ? o
                    ? ((t = 'Infinity'), o < 0 && (t = '-' + t))
                    : (t = 'NaN')
                  : (null == e
                      ? (t = a <= N || a >= x ? E(_(n.c), a) : v(_(n.c), a, '0'))
                      : 10 === e
                      ? (t = v(_((n = K(new H(n), D + a + 1, I)).c), n.e, '0'))
                      : (h(e, 2, B.length, 'Base'),
                        (t = r(v(_(n.c), a, '0'), 10, e, o, !0))),
                    o < 0 && n.c[0] && (t = '-' + t)),
                t
              );
            }),
            (w.valueOf = w.toJSON = function() {
              return Y(this);
            }),
            (w._isBigNumber = !0),
            null != t && H.set(t),
            H
          );
        })()).default = a.BigNumber = a),
          void 0 ===
            (r = function() {
              return a;
            }.call(t, n, t, e)) || (e.exports = r);
      })();
    },
    '../../node_modules/lodash.clonedeepwith/index.js': function(e, t, n) {
      (function(e, n) {
        var r = '[object Arguments]',
          o = '[object Function]',
          a = '[object GeneratorFunction]',
          u = '[object Map]',
          s = '[object Set]',
          i = /\w*$/,
          c = /^\[object .+?Constructor\]$/,
          l = /^(?:0|[1-9]\d*)$/,
          d = {};
        (d[r] = d['[object Array]'] = d['[object ArrayBuffer]'] = d[
          '[object DataView]'
        ] = d['[object Boolean]'] = d['[object Date]'] = d['[object Float32Array]'] = d[
          '[object Float64Array]'
        ] = d['[object Int8Array]'] = d['[object Int16Array]'] = d[
          '[object Int32Array]'
        ] = d[u] = d['[object Number]'] = d['[object Object]'] = d['[object RegExp]'] = d[
          s
        ] = d['[object String]'] = d['[object Symbol]'] = d['[object Uint8Array]'] = d[
          '[object Uint8ClampedArray]'
        ] = d['[object Uint16Array]'] = d['[object Uint32Array]'] = !0),
          (d['[object Error]'] = d[o] = d['[object WeakMap]'] = !1);
        var f = 'object' == typeof e && e && e.Object === Object && e,
          p = 'object' == typeof self && self && self.Object === Object && self,
          m = f || p || Function('return this')(),
          _ = t && !t.nodeType && t,
          T = _ && 'object' == typeof n && n && !n.nodeType && n,
          h = T && T.exports === _;
        function y(e, t) {
          return e.set(t[0], t[1]), e;
        }
        function E(e, t) {
          return e.add(t), e;
        }
        function v(e, t, n, r) {
          var o = -1,
            a = e ? e.length : 0;
          for (r && a && (n = e[++o]); ++o < a; ) n = t(n, e[o], o, e);
          return n;
        }
        function g(e) {
          var t = !1;
          if (null != e && 'function' != typeof e.toString)
            try {
              t = !!(e + '');
            } catch (e) {}
          return t;
        }
        function b(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function k(e, t) {
          return function(n) {
            return e(t(n));
          };
        }
        function A(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e) {
              n[++t] = e;
            }),
            n
          );
        }
        var O,
          w = Array.prototype,
          R = Function.prototype,
          D = Object.prototype,
          I = m['__core-js_shared__'],
          N = (O = /[^.]+$/.exec((I && I.keys && I.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + O
            : '',
          x = R.toString,
          j = D.hasOwnProperty,
          P = D.toString,
          S = RegExp(
            '^' +
              x
                .call(j)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          M = h ? m.Buffer : void 0,
          U = m.Symbol,
          C = m.Uint8Array,
          B = k(Object.getPrototypeOf, Object),
          H = Object.create,
          F = D.propertyIsEnumerable,
          L = w.splice,
          X = Object.getOwnPropertySymbols,
          K = M ? M.isBuffer : void 0,
          Y = k(Object.keys, Object),
          G = Te(m, 'DataView'),
          z = Te(m, 'Map'),
          V = Te(m, 'Promise'),
          W = Te(m, 'Set'),
          q = Te(m, 'WeakMap'),
          $ = Te(Object, 'create'),
          J = ge(G),
          Z = ge(z),
          Q = ge(V),
          ee = ge(W),
          te = ge(q),
          ne = U ? U.prototype : void 0,
          re = ne ? ne.valueOf : void 0;
        function oe(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function ae(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function ue(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function se(e) {
          this.__data__ = new ae(e);
        }
        function ie(e, t) {
          var n =
              ke(e) ||
              (function(e) {
                return (
                  (function(e) {
                    return (
                      (function(e) {
                        return !!e && 'object' == typeof e;
                      })(e) && Ae(e)
                    );
                  })(e) &&
                  j.call(e, 'callee') &&
                  (!F.call(e, 'callee') || P.call(e) == r)
                );
              })(e)
                ? (function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                    return r;
                  })(e.length, String)
                : [],
            o = n.length,
            a = !!o;
          for (var u in e)
            (!t && !j.call(e, u)) || (a && ('length' == u || Ee(u, o))) || n.push(u);
          return n;
        }
        function ce(e, t, n) {
          var r = e[t];
          (j.call(e, t) && be(r, n) && (void 0 !== n || t in e)) || (e[t] = n);
        }
        function le(e, t) {
          for (var n = e.length; n--; ) if (be(e[n][0], t)) return n;
          return -1;
        }
        function de(e, t, n, c, l, f, p) {
          var m;
          if ((c && (m = f ? c(e, l, f, p) : c(e)), void 0 !== m)) return m;
          if (!Re(e)) return e;
          var _ = ke(e);
          if (_) {
            if (
              ((m = (function(e) {
                var t = e.length,
                  n = e.constructor(t);
                t &&
                  'string' == typeof e[0] &&
                  j.call(e, 'index') &&
                  ((n.index = e.index), (n.input = e.input));
                return n;
              })(e)),
              !t)
            )
              return (function(e, t) {
                var n = -1,
                  r = e.length;
                t || (t = Array(r));
                for (; ++n < r; ) t[n] = e[n];
                return t;
              })(e, m);
          } else {
            var T = ye(e),
              h = T == o || T == a;
            if (Oe(e))
              return (function(e, t) {
                if (t) return e.slice();
                var n = new e.constructor(e.length);
                return e.copy(n), n;
              })(e, t);
            if ('[object Object]' == T || T == r || (h && !f)) {
              if (g(e)) return f ? e : {};
              if (
                ((m = (function(e) {
                  return 'function' != typeof e.constructor || ve(e)
                    ? {}
                    : ((t = B(e)), Re(t) ? H(t) : {});
                  var t;
                })(h ? {} : e)),
                !t)
              )
                return (function(e, t) {
                  return me(e, he(e), t);
                })(
                  e,
                  (function(e, t) {
                    return e && me(t, De(t), e);
                  })(m, e)
                );
            } else {
              if (!d[T]) return f ? e : {};
              m = (function(e, t, n, r) {
                var o = e.constructor;
                switch (t) {
                  case '[object ArrayBuffer]':
                    return pe(e);
                  case '[object Boolean]':
                  case '[object Date]':
                    return new o(+e);
                  case '[object DataView]':
                    return (function(e, t) {
                      var n = t ? pe(e.buffer) : e.buffer;
                      return new e.constructor(n, e.byteOffset, e.byteLength);
                    })(e, r);
                  case '[object Float32Array]':
                  case '[object Float64Array]':
                  case '[object Int8Array]':
                  case '[object Int16Array]':
                  case '[object Int32Array]':
                  case '[object Uint8Array]':
                  case '[object Uint8ClampedArray]':
                  case '[object Uint16Array]':
                  case '[object Uint32Array]':
                    return (function(e, t) {
                      var n = t ? pe(e.buffer) : e.buffer;
                      return new e.constructor(n, e.byteOffset, e.length);
                    })(e, r);
                  case u:
                    return (function(e, t, n) {
                      return v(t ? n(b(e), !0) : b(e), y, new e.constructor());
                    })(e, r, n);
                  case '[object Number]':
                  case '[object String]':
                    return new o(e);
                  case '[object RegExp]':
                    return (function(e) {
                      var t = new e.constructor(e.source, i.exec(e));
                      return (t.lastIndex = e.lastIndex), t;
                    })(e);
                  case s:
                    return (function(e, t, n) {
                      return v(t ? n(A(e), !0) : A(e), E, new e.constructor());
                    })(e, r, n);
                  case '[object Symbol]':
                    return (a = e), re ? Object(re.call(a)) : {};
                }
                var a;
              })(e, T, de, t);
            }
          }
          p || (p = new se());
          var k = p.get(e);
          if (k) return k;
          if ((p.set(e, m), !_))
            var O = n
              ? (function(e) {
                  return (function(e, t, n) {
                    var r = t(e);
                    return ke(e)
                      ? r
                      : (function(e, t) {
                          for (var n = -1, r = t.length, o = e.length; ++n < r; )
                            e[o + n] = t[n];
                          return e;
                        })(r, n(e));
                  })(e, De, he);
                })(e)
              : De(e);
          return (
            (function(e, t) {
              for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n, e); );
            })(O || e, function(r, o) {
              O && (r = e[(o = r)]), ce(m, o, de(r, t, n, c, o, e, p));
            }),
            m
          );
        }
        function fe(e) {
          return (
            !(!Re(e) || ((t = e), N && N in t)) && (we(e) || g(e) ? S : c).test(ge(e))
          );
          var t;
        }
        function pe(e) {
          var t = new e.constructor(e.byteLength);
          return new C(t).set(new C(e)), t;
        }
        function me(e, t, n, r) {
          n || (n = {});
          for (var o = -1, a = t.length; ++o < a; ) {
            var u = t[o],
              s = r ? r(n[u], e[u], u, n, e) : void 0;
            ce(n, u, void 0 === s ? e[u] : s);
          }
          return n;
        }
        function _e(e, t) {
          var n,
            r,
            o = e.__data__;
          return ('string' == (r = typeof (n = t)) ||
          'number' == r ||
          'symbol' == r ||
          'boolean' == r
          ? '__proto__' !== n
          : null === n)
            ? o['string' == typeof t ? 'string' : 'hash']
            : o.map;
        }
        function Te(e, t) {
          var n = (function(e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return fe(n) ? n : void 0;
        }
        (oe.prototype.clear = function() {
          this.__data__ = $ ? $(null) : {};
        }),
          (oe.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (oe.prototype.get = function(e) {
            var t = this.__data__;
            if ($) {
              var n = t[e];
              return '__lodash_hash_undefined__' === n ? void 0 : n;
            }
            return j.call(t, e) ? t[e] : void 0;
          }),
          (oe.prototype.has = function(e) {
            var t = this.__data__;
            return $ ? void 0 !== t[e] : j.call(t, e);
          }),
          (oe.prototype.set = function(e, t) {
            return (
              (this.__data__[e] = $ && void 0 === t ? '__lodash_hash_undefined__' : t),
              this
            );
          }),
          (ae.prototype.clear = function() {
            this.__data__ = [];
          }),
          (ae.prototype.delete = function(e) {
            var t = this.__data__,
              n = le(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : L.call(t, n, 1), !0);
          }),
          (ae.prototype.get = function(e) {
            var t = this.__data__,
              n = le(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (ae.prototype.has = function(e) {
            return le(this.__data__, e) > -1;
          }),
          (ae.prototype.set = function(e, t) {
            var n = this.__data__,
              r = le(n, e);
            return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
          }),
          (ue.prototype.clear = function() {
            this.__data__ = { hash: new oe(), map: new (z || ae)(), string: new oe() };
          }),
          (ue.prototype.delete = function(e) {
            return _e(this, e).delete(e);
          }),
          (ue.prototype.get = function(e) {
            return _e(this, e).get(e);
          }),
          (ue.prototype.has = function(e) {
            return _e(this, e).has(e);
          }),
          (ue.prototype.set = function(e, t) {
            return _e(this, e).set(e, t), this;
          }),
          (se.prototype.clear = function() {
            this.__data__ = new ae();
          }),
          (se.prototype.delete = function(e) {
            return this.__data__.delete(e);
          }),
          (se.prototype.get = function(e) {
            return this.__data__.get(e);
          }),
          (se.prototype.has = function(e) {
            return this.__data__.has(e);
          }),
          (se.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof ae) {
              var r = n.__data__;
              if (!z || r.length < 199) return r.push([e, t]), this;
              n = this.__data__ = new ue(r);
            }
            return n.set(e, t), this;
          });
        var he = X
            ? k(X, Object)
            : function() {
                return [];
              },
          ye = function(e) {
            return P.call(e);
          };
        function Ee(e, t) {
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ('number' == typeof e || l.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        function ve(e) {
          var t = e && e.constructor;
          return e === (('function' == typeof t && t.prototype) || D);
        }
        function ge(e) {
          if (null != e) {
            try {
              return x.call(e);
            } catch (e) {}
            try {
              return e + '';
            } catch (e) {}
          }
          return '';
        }
        function be(e, t) {
          return e === t || (e != e && t != t);
        }
        ((G && '[object DataView]' != ye(new G(new ArrayBuffer(1)))) ||
          (z && ye(new z()) != u) ||
          (V && '[object Promise]' != ye(V.resolve())) ||
          (W && ye(new W()) != s) ||
          (q && '[object WeakMap]' != ye(new q()))) &&
          (ye = function(e) {
            var t = P.call(e),
              n = '[object Object]' == t ? e.constructor : void 0,
              r = n ? ge(n) : void 0;
            if (r)
              switch (r) {
                case J:
                  return '[object DataView]';
                case Z:
                  return u;
                case Q:
                  return '[object Promise]';
                case ee:
                  return s;
                case te:
                  return '[object WeakMap]';
              }
            return t;
          });
        var ke = Array.isArray;
        function Ae(e) {
          return (
            null != e &&
            (function(e) {
              return (
                'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
              );
            })(e.length) &&
            !we(e)
          );
        }
        var Oe =
          K ||
          function() {
            return !1;
          };
        function we(e) {
          var t = Re(e) ? P.call(e) : '';
          return t == o || t == a;
        }
        function Re(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function De(e) {
          return Ae(e)
            ? ie(e)
            : (function(e) {
                if (!ve(e)) return Y(e);
                var t = [];
                for (var n in Object(e)) j.call(e, n) && 'constructor' != n && t.push(n);
                return t;
              })(e);
        }
        n.exports = function(e, t) {
          return de(e, !0, !0, t);
        };
      }.call(
        this,
        n('../../node_modules/webpack/buildin/global.js'),
        n('../../node_modules/webpack/buildin/module.js')(e)
      ));
    }
  }
]);
//# sourceMappingURL=4.bundle.js.map
