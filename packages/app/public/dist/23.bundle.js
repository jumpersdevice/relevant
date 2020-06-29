(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [23, 4, 61],
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
        s = n('../../node_modules/ethers/dist/ethers.min.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/constants/index.js');
      function i(e) {
        if (!Number.isInteger(e) || e < 0 || e > u._MAX_UINT8)
          throw Error("Passed number '" + e + "' is not a valid uint8.");
      }
      function c(e) {
        if (!e.isInteger() || e.isLessThan(u._0) || e.isGreaterThan(u._MAX_UINT256))
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
          return s.ethers.utils.getAddress(e.toLowerCase());
        }),
        (t.getEthToken = function(e) {
          return r({}, e ? { chainId: e } : {}, { address: u.ETH, decimals: 18 });
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
          s = r.isEqualTo(a._1)
            ? a._1
            : new o.default('0.' + '0'.repeat(r.toFixed().length - 2) + '1'),
          u = e.token.decimals - t.token.decimals > 0,
          i = {
            numerator: e.amount,
            denominator: t.amount,
            decimalScalar: u ? s : r,
            decimalScalarInverted: u ? r : s
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
        s = n('../../node_modules/@uniswap/sdk/dist/_utils/index.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/computation/_utils.js');
      function i(e) {
        s.ensureAllUInt8([e.token.decimals]);
        var t = s.normalizeBigNumberish(e.amount);
        return s.ensureAllUInt256([t]), { token: r({}, e.token), amount: t };
      }
      function c(e) {
        return (
          s.ensureAllUInt8([e.token.decimals]),
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
          s = e === a.TRADE_TYPE.ETH_TO_TOKEN ? t.ethReserve : t.tokenReserve;
        return u.calculateDecimalRate(r, s, n);
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
                  : { token: s.getEthToken(e.token.chainId) }
              };
            if (!o.areTokenReserves(e) && o.areTokenReserves(t))
              return {
                tradeType: a.TRADE_TYPE.ETH_TO_TOKEN,
                inputReserves: o.areETHReserves(e)
                  ? e
                  : { token: s.getEthToken(t.token.chainId) },
                outputReserves: c(t)
              };
            throw Error(
              'optionalReservesInput, optionalReservesOutput, or both must be defined.'
            );
          })(e, t),
          r = n.tradeType,
          u = n.inputReserves,
          i = n.outputReserves;
        if (r === a.TRADE_TYPE.TOKEN_TO_TOKEN) {
          var d = l(a.TRADE_TYPE.TOKEN_TO_ETH, u, !0),
            f = d.numerator,
            p = d.denominator,
            m = d.decimalScalar,
            h = d.decimalScalarInverted,
            b = l(a.TRADE_TYPE.ETH_TO_TOKEN, i, !0),
            _ = b.numerator,
            T = b.denominator,
            E = b.decimalScalar,
            y = b.decimalScalarInverted;
          return {
            tradeType: r,
            inputReserves: u,
            outputReserves: i,
            marketRate: {
              rate: f
                .multipliedBy(m)
                .multipliedBy(_)
                .multipliedBy(E)
                .dividedBy(p.multipliedBy(T)),
              rateInverted: p
                .multipliedBy(h)
                .multipliedBy(T)
                .multipliedBy(y)
                .dividedBy(f.multipliedBy(_))
            }
          };
        }
        return {
          tradeType: r,
          inputReserves: u,
          outputReserves: i,
          marketRate: l(r, r === a.TRADE_TYPE.ETH_TO_TOKEN ? i : u)
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
        s = n('../../node_modules/@uniswap/sdk/dist/types.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
        i = n('../../node_modules/@uniswap/sdk/dist/_utils/index.js'),
        c = n('../../node_modules/@uniswap/sdk/dist/computation/_utils.js'),
        l = n('../../node_modules/@uniswap/sdk/dist/computation/market.js');
      function d(e, t, n, r) {
        if (!s.areTokenReservesNormalized(r)) throw Error;
        var o =
            e === u.TRADE_TYPE.ETH_TO_TOKEN ? r.ethReserve.amount : r.tokenReserve.amount,
          a =
            e === u.TRADE_TYPE.ETH_TO_TOKEN ? r.tokenReserve.amount : r.ethReserve.amount;
        return t === u.TRADE_EXACT.INPUT
          ? (function(e, t, n) {
              if (
                (i.ensureAllUInt256([e, t, n]),
                t.isLessThanOrEqualTo(u._0) || n.isLessThanOrEqualTo(u._0))
              )
                throw Error(
                  "Both inputReserve '" +
                    t +
                    "' and outputReserve '" +
                    n +
                    "' must be non-zero."
                );
              var r = e.multipliedBy(u._997),
                o = r.multipliedBy(n),
                a = t.multipliedBy(u._1000).plus(r),
                s = o.dividedToIntegerBy(a);
              return i.ensureAllUInt256([r, o, a, s]), s;
            })(n, o, a)
          : (function(e, t, n) {
              if (
                (i.ensureAllUInt256([e, t, n]),
                t.isLessThanOrEqualTo(u._0) || n.isLessThanOrEqualTo(u._0))
              )
                throw Error(
                  "Both inputReserve '" +
                    t +
                    "' and outputReserve '" +
                    n +
                    "' must be non-zero."
                );
              var r = t.multipliedBy(e).multipliedBy(u._1000),
                o = n.minus(e).multipliedBy(u._997),
                a = r.dividedToIntegerBy(o).plus(u._1);
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
          .multipliedBy(u._10000)
          .dividedBy(e);
      }
      t.getTradeDetails = function(e, t, n) {
        var r = i.normalizeBigNumberish(t),
          o = (function(e, t, n, r, o) {
            var i = a.default(r, f),
              c = a.default(o, f);
            if (e === u.TRADE_TYPE.TOKEN_TO_TOKEN) {
              if (!s.areTokenReservesNormalized(i) || !s.areTokenReservesNormalized(c))
                throw Error;
              if (t === u.TRADE_EXACT.INPUT) {
                var l = d(u.TRADE_TYPE.TOKEN_TO_ETH, u.TRADE_EXACT.INPUT, n, r),
                  p = d(u.TRADE_TYPE.ETH_TO_TOKEN, u.TRADE_EXACT.INPUT, l, o);
                return (
                  (i.ethReserve.amount = i.ethReserve.amount.minus(l)),
                  (i.tokenReserve.amount = i.tokenReserve.amount.plus(n)),
                  (c.ethReserve.amount = c.ethReserve.amount.plus(l)),
                  (c.tokenReserve.amount = c.tokenReserve.amount.minus(p)),
                  { transput: p, inputReservesPost: i, outputReservesPost: c }
                );
              }
              (l = d(u.TRADE_TYPE.ETH_TO_TOKEN, u.TRADE_EXACT.OUTPUT, n, o)),
                (p = d(u.TRADE_TYPE.TOKEN_TO_ETH, u.TRADE_EXACT.OUTPUT, l, r));
              return (
                (i.ethReserve.amount = i.ethReserve.amount.minus(l)),
                (i.tokenReserve.amount = i.tokenReserve.amount.plus(p)),
                (c.ethReserve.amount = c.ethReserve.amount.plus(l)),
                (c.tokenReserve.amount = c.tokenReserve.amount.minus(n)),
                { transput: p, inputReservesPost: i, outputReservesPost: c }
              );
            }
            if (
              ((p = d(e, t, n, e === u.TRADE_TYPE.ETH_TO_TOKEN ? o : r)),
              e === u.TRADE_TYPE.ETH_TO_TOKEN)
            ) {
              if (!s.areTokenReservesNormalized(c)) throw Error;
              (c.ethReserve.amount = c.ethReserve.amount.plus(
                t === u.TRADE_EXACT.INPUT ? n : p
              )),
                (c.tokenReserve.amount = c.tokenReserve.amount.minus(
                  t === u.TRADE_EXACT.INPUT ? p : n
                ));
            } else {
              if (!s.areTokenReservesNormalized(i)) throw Error;
              (i.ethReserve.amount = i.ethReserve.amount.minus(
                t === u.TRADE_EXACT.INPUT ? p : n
              )),
                (i.tokenReserve.amount = i.tokenReserve.amount.plus(
                  t === u.TRADE_EXACT.INPUT ? n : p
                ));
            }
            return { transput: p, inputReservesPost: i, outputReservesPost: c };
          })(n.tradeType, e, r, n.inputReserves, n.outputReserves),
          m = o.transput,
          h = o.inputReservesPost,
          b = o.outputReservesPost,
          _ = { token: n.inputReserves.token, amount: e === u.TRADE_EXACT.INPUT ? r : m },
          T = {
            token: n.outputReserves.token,
            amount: e === u.TRADE_EXACT.INPUT ? m : r
          },
          E = l.getMarketDetails(h, b),
          y = c.calculateDecimalRate(T, _),
          v = p(n.marketRate.rate, E.marketRate.rate),
          g = p(n.marketRate.rate, y.rate);
        return {
          marketDetailsPre: n,
          marketDetailsPost: E,
          tradeType: n.tradeType,
          tradeExact: e,
          inputAmount: _,
          outputAmount: T,
          executionRate: y,
          marketRateSlippage: v,
          executionRateSlippage: g
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
        s =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u,
        i,
        c = s(n('../../node_modules/bignumber.js/bignumber.js')),
        l = s(n('../../node_modules/@uniswap/sdk/dist/constants/abis/ERC20.json')),
        d = s(n('../../node_modules/@uniswap/sdk/dist/constants/abis/FACTORY.json')),
        f = s(n('../../node_modules/@uniswap/sdk/dist/constants/abis/EXCHANGE.json'));
      (t.ETH = 'ETH'),
        (function(e) {
          (e[(e.Mainnet = 1)] = 'Mainnet'),
            (e[(e.Ropsten = 3)] = 'Ropsten'),
            (e[(e.Rinkeby = 4)] = 'Rinkeby'),
            (e[(e.Kovan = 42)] = 'Kovan');
        })((u = t.SUPPORTED_CHAIN_ID || (t.SUPPORTED_CHAIN_ID = {}))),
        (t.FACTORY_ADDRESS =
          (((r = {})[u.Mainnet] = '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95'),
          (r[u.Ropsten] = '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351'),
          (r[u.Rinkeby] = '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36'),
          (r[u.Kovan] = '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30'),
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
          (((a = {})[u.Mainnet] = 'homestead'),
          (a[u.Ropsten] = 'ropsten'),
          (a[u.Rinkeby] = 'rinkeby'),
          (a[u.Kovan] = 'kovan'),
          a)),
        (t._ERC20_ABI = JSON.stringify(l.default));
    },
    '../../node_modules/@uniswap/sdk/dist/data/index.js': function(e, t, n) {
      'use strict';
      var r =
          (this && this.__awaiter) ||
          function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, a) {
              function s(e) {
                try {
                  i(r.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function u(e) {
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
                    }).then(s, u);
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
              s = {
                label: 0,
                sent: function() {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: []
              };
            return (
              (a = { next: u(0), throw: u(1), return: u(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this;
                }),
              a
            );
            function u(a) {
              return function(u) {
                return (function(a) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; s; )
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
                          return s.label++, { value: a[1], done: !1 };
                        case 5:
                          s.label++, (r = a[1]), (a = [0]);
                          continue;
                        case 7:
                          (a = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== a[0] && 2 !== a[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                            s.label = a[1];
                            break;
                          }
                          if (6 === a[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = a);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(a);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      a = t.call(e, s);
                    } catch (e) {
                      (a = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & a[0]) throw a[1];
                  return { value: a[0] ? a[1] : void 0, done: !0 };
                })([a, u]);
              };
            }
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n('../../node_modules/ethers/dist/ethers.min.js'),
        s = n('../../node_modules/@uniswap/sdk/dist/types.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
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
                return s.isChainId(e)
                  ? [
                      2,
                      {
                        chainId: e,
                        provider: a.ethers.getDefaultProvider(u._CHAIN_ID_NAME[e])
                      }
                    ]
                  : [3, 1];
              case 1:
                return [
                  4,
                  (t = s.isLowLevelProvider(e)
                    ? new a.ethers.providers.Web3Provider(e)
                    : e).getNetwork()
                ];
              case 2:
                if (!((n = r.sent().chainId) in u.SUPPORTED_CHAIN_ID))
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
                return e !== u.ETH ? [3, 1] : [2, i.getEthToken(t.chainId)];
              case 1:
                return [4, (n = c(e, u._ERC20_ABI, t.provider)).decimals()];
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
            var n, r, a, s, f, p, m, h, b, _, T, E, y, v, g, O, w, k;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return (n = i.normalizeAddress(e)), [4, l(t)];
                case 1:
                  return (
                    (r = o.sent()),
                    (a = d(u.ETH, r)),
                    (s = d(n, r)),
                    (f = c(u.FACTORY_ADDRESS[r.chainId], u.FACTORY_ABI, r.provider)),
                    (p = c(n, u._ERC20_ABI, r.provider)),
                    [4, f.getExchange(n)]
                  );
                case 2:
                  return (
                    (m = o.sent()),
                    (h = d(m, r)),
                    (b = r.provider.getBalance(m)),
                    (_ = p.balanceOf(m)),
                    [4, Promise.all([a, s, h, b, _])]
                  );
                case 3:
                  return (
                    (T = o.sent()),
                    (E = T[0]),
                    (y = T[1]),
                    (v = T[2]),
                    (g = T[3]),
                    (O = T[4]),
                    (w = { token: E, amount: i.normalizeBigNumberish(g) }),
                    (k = { token: y, amount: i.normalizeBigNumberish(O) }),
                    [2, { token: y, exchange: v, ethReserve: w, tokenReserve: k }]
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
        s = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/_utils/index.js');
      function i(e, t, n, r) {
        return (
          void 0 === n && (n = s._ROUNDING_MODE),
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
          l = void 0 === c ? s._ROUNDING_MODE : c,
          d = n.forceIntegerSignificance,
          f = void 0 === d || d,
          p = n.format,
          m = void 0 !== p && p,
          h = u.normalizeBigNumberish(e);
        u.ensureBoundedInteger(a, [1, s._MAX_DECIMAL_PLACES]);
        var b = f ? h.integerValue().toFixed().length : 0,
          _ = new o.default(h.toPrecision(Math.max(b, a)));
        return i(_, _.decimalPlaces(), l, m);
      }
      function l(e, t) {
        var n = t || {},
          r = n.decimalPlaces,
          a = void 0 === r ? 4 : r,
          c = n.roundingMode,
          l = void 0 === c ? s._ROUNDING_MODE : c,
          d = n.dropTrailingZeros,
          f = void 0 === d || d,
          p = n.underflowBehavior,
          m = void 0 === p ? s.FIXED_UNDERFLOW_BEHAVIOR.ONE_DIGIT : p,
          h = n.format,
          b = void 0 !== h && h,
          _ = u.normalizeBigNumberish(e);
        u.ensureBoundedInteger(a, s._MAX_DECIMAL_PLACES);
        var T = new o.default(0 === a ? '0.5' : '0.' + '0'.repeat(a) + '5');
        if (!_.isLessThan(T)) {
          var E = f ? new o.default(_.toFixed(a, l)).decimalPlaces() : a;
          return i(_, E, l, b);
        }
        switch (m) {
          case s.FIXED_UNDERFLOW_BEHAVIOR.ZERO:
            return i(s._0, f ? 0 : a, void 0, b);
          case s.FIXED_UNDERFLOW_BEHAVIOR.LESS_THAN:
            return '<' + i(T, T.decimalPlaces(), void 0, b);
          case s.FIXED_UNDERFLOW_BEHAVIOR.ONE_DIGIT:
            var y = new o.default(_.toPrecision(1));
            return i(y, y.decimalPlaces(), void 0, b);
          default:
            throw Error('Passed FIXED_UNDERFLOW_BEHAVIOR ' + m + ' is not valid.');
        }
      }
      function d(e, t) {
        var n = u.normalizeBigNumberish(e);
        if ((u.ensureAllUInt256([n]), u.ensureAllUInt8([t]), t > s._MAX_DECIMAL_PLACES))
          throw Error(
            'This function does not support decimals greater than ' +
              s._MAX_DECIMAL_PLACES +
              '.'
          );
        return n.dividedBy(s._10.exponentiatedBy(t));
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
      var s = n('../../node_modules/@uniswap/sdk/dist/constants/index.js');
      (t.ETH = s.ETH),
        (t.SUPPORTED_CHAIN_ID = s.SUPPORTED_CHAIN_ID),
        (t.FACTORY_ADDRESS = s.FACTORY_ADDRESS),
        (t.FACTORY_ABI = s.FACTORY_ABI),
        (t.EXCHANGE_ABI = s.EXCHANGE_ABI),
        (t.TRADE_TYPE = s.TRADE_TYPE),
        (t.TRADE_EXACT = s.TRADE_EXACT),
        (t.TRADE_METHODS = s.TRADE_METHODS),
        (t.TRADE_METHOD_IDS = s.TRADE_METHOD_IDS),
        (t.FIXED_UNDERFLOW_BEHAVIOR = s.FIXED_UNDERFLOW_BEHAVIOR),
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
              function s(e) {
                try {
                  i(r.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function u(e) {
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
                    }).then(s, u);
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
              s = {
                label: 0,
                sent: function() {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: []
              };
            return (
              (a = { next: u(0), throw: u(1), return: u(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function() {
                  return this;
                }),
              a
            );
            function u(a) {
              return function(u) {
                return (function(a) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; s; )
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
                          return s.label++, { value: a[1], done: !1 };
                        case 5:
                          s.label++, (r = a[1]), (a = [0]);
                          continue;
                        case 7:
                          (a = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = s.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== a[0] && 2 !== a[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                            s.label = a[1];
                            break;
                          }
                          if (6 === a[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = a);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(a);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      a = t.call(e, s);
                    } catch (e) {
                      (a = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & a[0]) throw a[1];
                  return { value: a[0] ? a[1] : void 0, done: !0 };
                })([a, u]);
              };
            }
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n('../../node_modules/@uniswap/sdk/dist/constants/index.js'),
        s = n('../../node_modules/@uniswap/sdk/dist/data/index.js'),
        u = n('../../node_modules/@uniswap/sdk/dist/computation/index.js');
      function i(e, t) {
        var n = u.getMarketDetails(void 0, e);
        return u.getTradeDetails(a.TRADE_EXACT.INPUT, t, n);
      }
      function c(e, t) {
        var n = u.getMarketDetails(void 0, e);
        return u.getTradeDetails(a.TRADE_EXACT.OUTPUT, t, n);
      }
      function l(e, t) {
        var n = u.getMarketDetails(e, void 0);
        return u.getTradeDetails(a.TRADE_EXACT.INPUT, t, n);
      }
      function d(e, t) {
        var n = u.getMarketDetails(e, void 0);
        return u.getTradeDetails(a.TRADE_EXACT.OUTPUT, t, n);
      }
      function f(e, t, n) {
        var r = u.getMarketDetails(e, t);
        return u.getTradeDetails(a.TRADE_EXACT.INPUT, n, r);
      }
      function p(e, t, n) {
        var r = u.getMarketDetails(e, t);
        return u.getTradeDetails(a.TRADE_EXACT.OUTPUT, n, r);
      }
      (t.tradeExactEthForTokensWithData = i),
        (t.tradeExactEthForTokens = function(e, t, n) {
          return r(this, void 0, void 0, function() {
            return o(this, function(r) {
              switch (r.label) {
                case 0:
                  return [4, s.getTokenReserves(e, n)];
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
                  return [4, s.getTokenReserves(e, n)];
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
                  return [4, s.getTokenReserves(e, n)];
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
                  return [4, s.getTokenReserves(e, n)];
                case 1:
                  return [2, d(r.sent(), t)];
              }
            });
          });
        }),
        (t.tradeExactTokensForTokensWithData = f),
        (t.tradeExactTokensForTokens = function(e, t, n, a) {
          return r(this, void 0, void 0, function() {
            var r, u;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return [4, s.getTokenReserves(e, a)];
                case 1:
                  return (r = o.sent()), [4, s.getTokenReserves(t, a)];
                case 2:
                  return (u = o.sent()), [2, f(r, u, n)];
              }
            });
          });
        }),
        (t.tradeTokensForExactTokensWithData = p),
        (t.tradeTokensForExactTokens = function(e, t, n, a) {
          return r(this, void 0, void 0, function() {
            var r, u;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return [4, s.getTokenReserves(e, a)];
                case 1:
                  return (r = o.sent()), [4, s.getTokenReserves(t, a)];
                case 2:
                  return (u = o.sent()), [2, p(r, u, n)];
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
        s = n('../../node_modules/@uniswap/sdk/dist/_utils/index.js');
      function u(e) {
        return e.filter(function(e) {
          return void 0 !== e;
        });
      }
      function i(e, t) {
        var n = e.multipliedBy(t).dividedBy(a._10000),
          r = e.minus(n).integerValue(o.default.ROUND_FLOOR),
          s = e.plus(n).integerValue(o.default.ROUND_CEIL);
        return {
          minimum: r.isLessThan(a._0) ? a._0 : r,
          maximum: s.isGreaterThan(a._MAX_UINT256) ? a._MAX_UINT256 : s
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
                  methodArguments: u([i(e.outputAmount.amount, n).minimum, r, o])
                };
              case a.TRADE_METHODS.ethToTokenSwapOutput:
              case a.TRADE_METHODS.ethToTokenTransferOutput:
                return {
                  value: i(e.inputAmount.amount, n).maximum,
                  methodArguments: u([e.outputAmount.amount, r, o])
                };
              case a.TRADE_METHODS.tokenToEthSwapInput:
              case a.TRADE_METHODS.tokenToEthTransferInput:
                return {
                  value: a._0,
                  methodArguments: u([
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
                  methodArguments: u([
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
                  methodArguments: u([
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
                  methodArguments: u([
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
            r && s.normalizeAddress(r)
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
          s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          u = Math.ceil,
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
        function h(e) {
          for (var t, n, r = 1, o = e.length, a = e[0] + ''; r < o; ) {
            for (n = 14 - (t = e[r++] + '').length; n--; t = '0' + t);
            a += t;
          }
          for (o = a.length; 48 === a.charCodeAt(--o); );
          return a.slice(0, o + 1 || 1);
        }
        function b(e, t) {
          var n,
            r,
            o = e.c,
            a = t.c,
            s = e.s,
            u = t.s,
            i = e.e,
            c = t.e;
          if (!s || !u) return null;
          if (((n = o && !o[0]), (r = a && !a[0]), n || r)) return n ? (r ? 0 : -u) : s;
          if (s != u) return s;
          if (((n = s < 0), (r = i == c), !o || !a)) return r ? 0 : !o ^ n ? 1 : -1;
          if (!r) return (i > c) ^ n ? 1 : -1;
          for (u = (i = o.length) < (c = a.length) ? i : c, s = 0; s < u; s++)
            if (o[s] != a[s]) return (o[s] > a[s]) ^ n ? 1 : -1;
          return i == c ? 0 : (i > c) ^ n ? 1 : -1;
        }
        function _(e, t, n, r) {
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
        function T(e) {
          var t = e.c.length - 1;
          return m(e.e / 14) == t && e.c[t] % 2 != 0;
        }
        function E(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + '.' + e.slice(1) : e) + (t < 0 ? 'e' : 'e+') + t
          );
        }
        function y(e, t, n) {
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
            v,
            g,
            O,
            w,
            k,
            j = (F.prototype = { constructor: F, toString: null, valueOf: null }),
            A = new F(1),
            R = 20,
            D = 4,
            x = -7,
            N = 21,
            I = -1e7,
            P = 1e7,
            S = !1,
            C = 1,
            B = 0,
            U = {
              prefix: '',
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ',',
              decimalSeparator: '.',
              fractionGroupSize: 0,
              fractionGroupSeparator: ' ',
              suffix: ''
            },
            M = '0123456789abcdefghijklmnopqrstuvwxyz';
          function F(e, t) {
            var n,
              a,
              u,
              c,
              d,
              f,
              p,
              m,
              h = this;
            if (!(h instanceof F)) return new F(e, t);
            if (null == t) {
              if (e && !0 === e._isBigNumber)
                return (
                  (h.s = e.s),
                  void (!e.c || e.e > P
                    ? (h.c = h.e = null)
                    : e.e < I
                    ? (h.c = [(h.e = 0)])
                    : ((h.e = e.e), (h.c = e.c.slice())))
                );
              if ((f = 'number' == typeof e) && 0 * e == 0) {
                if (((h.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (c = 0, d = e; d >= 10; d /= 10, c++);
                  return void (c > P ? (h.c = h.e = null) : ((h.e = c), (h.c = [e])));
                }
                m = String(e);
              } else {
                if (!s.test((m = String(e)))) return o(h, m, f);
                h.s = 45 == m.charCodeAt(0) ? ((m = m.slice(1)), -1) : 1;
              }
              (c = m.indexOf('.')) > -1 && (m = m.replace('.', '')),
                (d = m.search(/e/i)) > 0
                  ? (c < 0 && (c = d), (c += +m.slice(d + 1)), (m = m.substring(0, d)))
                  : c < 0 && (c = m.length);
            } else {
              if ((_(t, 2, M.length, 'Base'), 10 == t))
                return W((h = new F(e)), R + h.e + 1, D);
              if (((m = String(e)), (f = 'number' == typeof e))) {
                if (0 * e != 0) return o(h, m, f, t);
                if (
                  ((h.s = 1 / e < 0 ? ((m = m.slice(1)), -1) : 1),
                  F.DEBUG && m.replace(/^0\.0*|\./, '').length > 15)
                )
                  throw Error(l + e);
              } else h.s = 45 === m.charCodeAt(0) ? ((m = m.slice(1)), -1) : 1;
              for (n = M.slice(0, t), c = d = 0, p = m.length; d < p; d++)
                if (n.indexOf((a = m.charAt(d))) < 0) {
                  if ('.' == a) {
                    if (d > c) {
                      c = p;
                      continue;
                    }
                  } else if (
                    !u &&
                    ((m == m.toUpperCase() && (m = m.toLowerCase())) ||
                      (m == m.toLowerCase() && (m = m.toUpperCase())))
                  ) {
                    (u = !0), (d = -1), (c = 0);
                    continue;
                  }
                  return o(h, String(e), f, t);
                }
              (f = !1),
                (c = (m = r(m, t, 10, h.s)).indexOf('.')) > -1
                  ? (m = m.replace('.', ''))
                  : (c = m.length);
            }
            for (d = 0; 48 === m.charCodeAt(d); d++);
            for (p = m.length; 48 === m.charCodeAt(--p); );
            if ((m = m.slice(d, ++p))) {
              if (
                ((p -= d), f && F.DEBUG && p > 15 && (e > 9007199254740991 || e !== i(e)))
              )
                throw Error(l + h.s * e);
              if ((c = c - d - 1) > P) h.c = h.e = null;
              else if (c < I) h.c = [(h.e = 0)];
              else {
                if (
                  ((h.e = c), (h.c = []), (d = (c + 1) % 14), c < 0 && (d += 14), d < p)
                ) {
                  for (d && h.c.push(+m.slice(0, d)), p -= 14; d < p; )
                    h.c.push(+m.slice(d, (d += 14)));
                  d = 14 - (m = m.slice(d)).length;
                } else d -= p;
                for (; d--; m += '0');
                h.c.push(+m);
              }
            } else h.c = [(h.e = 0)];
          }
          function H(e, t, n, r) {
            var o, a, s, u, i;
            if ((null == n ? (n = D) : _(n, 0, 8), !e.c)) return e.toString();
            if (((o = e.c[0]), (s = e.e), null == t))
              (i = h(e.c)),
                (i = 1 == r || (2 == r && (s <= x || s >= N)) ? E(i, s) : y(i, s, '0'));
            else if (
              ((a = (e = W(new F(e), t, n)).e),
              (u = (i = h(e.c)).length),
              1 == r || (2 == r && (t <= a || a <= x)))
            ) {
              for (; u < t; i += '0', u++);
              i = E(i, a);
            } else if (((t -= s), (i = y(i, a, '0')), a + 1 > u)) {
              if (--t > 0) for (i += '.'; t--; i += '0');
            } else if ((t += a - u) > 0) for (a + 1 == u && (i += '.'); t--; i += '0');
            return e.s < 0 && o ? '-' + i : i;
          }
          function L(e, t) {
            for (var n, r = 1, o = new F(e[0]); r < e.length; r++) {
              if (!(n = new F(e[r])).s) {
                o = n;
                break;
              }
              t.call(o, n) && (o = n);
            }
            return o;
          }
          function K(e, t, n) {
            for (var r = 1, o = t.length; !t[--o]; t.pop());
            for (o = t[0]; o >= 10; o /= 10, r++);
            return (
              (n = r + 14 * n - 1) > P
                ? (e.c = e.e = null)
                : n < I
                ? (e.c = [(e.e = 0)])
                : ((e.e = n), (e.c = t)),
              e
            );
          }
          function W(e, t, n, r) {
            var o,
              a,
              s,
              c,
              l,
              p,
              m,
              h = e.c,
              b = f;
            if (h) {
              e: {
                for (o = 1, c = h[0]; c >= 10; c /= 10, o++);
                if ((a = t - o) < 0)
                  (a += 14), (s = t), (m = ((l = h[(p = 0)]) / b[o - s - 1]) % 10 | 0);
                else if ((p = u((a + 1) / 14)) >= h.length) {
                  if (!r) break e;
                  for (; h.length <= p; h.push(0));
                  (l = m = 0), (o = 1), (s = (a %= 14) - 14 + 1);
                } else {
                  for (l = c = h[p], o = 1; c >= 10; c /= 10, o++);
                  m = (s = (a %= 14) - 14 + o) < 0 ? 0 : (l / b[o - s - 1]) % 10 | 0;
                }
                if (
                  ((r = r || t < 0 || null != h[p + 1] || (s < 0 ? l : l % b[o - s - 1])),
                  (r =
                    n < 4
                      ? (m || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                      : m > 5 ||
                        (5 == m &&
                          (4 == n ||
                            r ||
                            (6 == n &&
                              (a > 0 ? (s > 0 ? l / b[o - s] : 0) : h[p - 1]) % 10 & 1) ||
                            n == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !h[0])
                )
                  return (
                    (h.length = 0),
                    r
                      ? ((t -= e.e + 1),
                        (h[0] = b[(14 - (t % 14)) % 14]),
                        (e.e = -t || 0))
                      : (h[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == a
                    ? ((h.length = p), (c = 1), p--)
                    : ((h.length = p + 1),
                      (c = b[14 - a]),
                      (h[p] = s > 0 ? i((l / b[o - s]) % b[s]) * c : 0)),
                  r)
                )
                  for (;;) {
                    if (0 == p) {
                      for (a = 1, s = h[0]; s >= 10; s /= 10, a++);
                      for (s = h[0] += c, c = 1; s >= 10; s /= 10, c++);
                      a != c && (e.e++, h[0] == d && (h[0] = 1));
                      break;
                    }
                    if (((h[p] += c), h[p] != d)) break;
                    (h[p--] = 0), (c = 1);
                  }
                for (a = h.length; 0 === h[--a]; h.pop());
              }
              e.e > P ? (e.c = e.e = null) : e.e < I && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          function Y(e) {
            var t,
              n = e.e;
            return null === n
              ? e.toString()
              : ((t = h(e.c)),
                (t = n <= x || n >= N ? E(t, n) : y(t, n, '0')),
                e.s < 0 ? '-' + t : t);
          }
          return (
            (F.clone = e),
            (F.ROUND_UP = 0),
            (F.ROUND_DOWN = 1),
            (F.ROUND_CEIL = 2),
            (F.ROUND_FLOOR = 3),
            (F.ROUND_HALF_UP = 4),
            (F.ROUND_HALF_DOWN = 5),
            (F.ROUND_HALF_EVEN = 6),
            (F.ROUND_HALF_CEIL = 7),
            (F.ROUND_HALF_FLOOR = 8),
            (F.EUCLID = 9),
            (F.config = F.set = function(e) {
              var t, n;
              if (null != e) {
                if ('object' != typeof e) throw Error(c + 'Object expected: ' + e);
                if (
                  (e.hasOwnProperty((t = 'DECIMAL_PLACES')) &&
                    (_((n = e[t]), 0, p, t), (R = n)),
                  e.hasOwnProperty((t = 'ROUNDING_MODE')) &&
                    (_((n = e[t]), 0, 8, t), (D = n)),
                  e.hasOwnProperty((t = 'EXPONENTIAL_AT')) &&
                    ((n = e[t]) && n.pop
                      ? (_(n[0], -p, 0, t), _(n[1], 0, p, t), (x = n[0]), (N = n[1]))
                      : (_(n, -p, p, t), (x = -(N = n < 0 ? -n : n)))),
                  e.hasOwnProperty((t = 'RANGE')))
                )
                  if ((n = e[t]) && n.pop)
                    _(n[0], -p, -1, t), _(n[1], 1, p, t), (I = n[0]), (P = n[1]);
                  else {
                    if ((_(n, -p, p, t), !n))
                      throw Error(c + t + ' cannot be zero: ' + n);
                    I = -(P = n < 0 ? -n : n);
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
                    (_((n = e[t]), 0, 9, t), (C = n)),
                  e.hasOwnProperty((t = 'POW_PRECISION')) &&
                    (_((n = e[t]), 0, p, t), (B = n)),
                  e.hasOwnProperty((t = 'FORMAT')))
                ) {
                  if ('object' != typeof (n = e[t]))
                    throw Error(c + t + ' not an object: ' + n);
                  U = n;
                }
                if (e.hasOwnProperty((t = 'ALPHABET'))) {
                  if ('string' != typeof (n = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(n))
                    throw Error(c + t + ' invalid: ' + n);
                  M = n;
                }
              }
              return {
                DECIMAL_PLACES: R,
                ROUNDING_MODE: D,
                EXPONENTIAL_AT: [x, N],
                RANGE: [I, P],
                CRYPTO: S,
                MODULO_MODE: C,
                POW_PRECISION: B,
                FORMAT: U,
                ALPHABET: M
              };
            }),
            (F.isBigNumber = function(e) {
              if (!e || !0 !== e._isBigNumber) return !1;
              if (!F.DEBUG) return !0;
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
            (F.maximum = F.max = function() {
              return L(arguments, j.lt);
            }),
            (F.minimum = F.min = function() {
              return L(arguments, j.gt);
            }),
            (F.random =
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
                  s,
                  l = 0,
                  d = [],
                  m = new F(A);
                if ((null == e ? (e = R) : _(e, 0, p), (o = u(e / 14)), S))
                  if (crypto.getRandomValues) {
                    for (t = crypto.getRandomValues(new Uint32Array((o *= 2))); l < o; )
                      (s = 131072 * t[l] + (t[l + 1] >>> 11)) >= 9e15
                        ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                          (t[l] = n[0]),
                          (t[l + 1] = n[1]))
                        : (d.push(s % 1e14), (l += 2));
                    l = o / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((S = !1), Error(c + 'crypto unavailable'));
                    for (t = crypto.randomBytes((o *= 7)); l < o; )
                      (s =
                        281474976710656 * (31 & t[l]) +
                        1099511627776 * t[l + 1] +
                        4294967296 * t[l + 2] +
                        16777216 * t[l + 3] +
                        (t[l + 4] << 16) +
                        (t[l + 5] << 8) +
                        t[l + 6]) >= 9e15
                        ? crypto.randomBytes(7).copy(t, l)
                        : (d.push(s % 1e14), (l += 7));
                    l = o / 7;
                  }
                if (!S) for (; l < o; ) (s = a()) < 9e15 && (d[l++] = s % 1e14);
                for (
                  e %= 14, (o = d[--l]) && e && ((s = f[14 - e]), (d[l] = i(o / s) * s));
                  0 === d[l];
                  d.pop(), l--
                );
                if (l < 0) d = [(r = 0)];
                else {
                  for (r = -1; 0 === d[0]; d.splice(0, 1), r -= 14);
                  for (l = 1, s = d[0]; s >= 10; s /= 10, l++);
                  l < 14 && (r -= 14 - l);
                }
                return (m.e = r), (m.c = d), m;
              })),
            (F.sum = function() {
              for (var e = 1, t = arguments, n = new F(t[0]); e < t.length; )
                n = n.plus(t[e++]);
              return n;
            }),
            (r = (function() {
              function e(e, t, n, r) {
                for (var o, a, s = [0], u = 0, i = e.length; u < i; ) {
                  for (a = s.length; a--; s[a] *= t);
                  for (s[0] += r.indexOf(e.charAt(u++)), o = 0; o < s.length; o++)
                    s[o] > n - 1 &&
                      (null == s[o + 1] && (s[o + 1] = 0),
                      (s[o + 1] += (s[o] / n) | 0),
                      (s[o] %= n));
                }
                return s.reverse();
              }
              return function(t, r, o, a, s) {
                var u,
                  i,
                  c,
                  l,
                  d,
                  f,
                  p,
                  m,
                  b = t.indexOf('.'),
                  _ = R,
                  T = D;
                for (
                  b >= 0 &&
                    ((l = B),
                    (B = 0),
                    (t = t.replace('.', '')),
                    (f = (m = new F(r)).pow(t.length - b)),
                    (B = l),
                    (m.c = e(y(h(f.c), f.e, '0'), 10, o, '0123456789')),
                    (m.e = m.c.length)),
                    c = l = (p = e(
                      t,
                      r,
                      o,
                      s ? ((u = M), '0123456789') : ((u = '0123456789'), M)
                    )).length;
                  0 == p[--l];
                  p.pop()
                );
                if (!p[0]) return u.charAt(0);
                if (
                  (b < 0
                    ? --c
                    : ((f.c = p),
                      (f.e = c),
                      (f.s = a),
                      (p = (f = n(f, m, _, T, o)).c),
                      (d = f.r),
                      (c = f.e)),
                  (b = p[(i = c + _ + 1)]),
                  (l = o / 2),
                  (d = d || i < 0 || null != p[i + 1]),
                  (d =
                    T < 4
                      ? (null != b || d) && (0 == T || T == (f.s < 0 ? 3 : 2))
                      : b > l ||
                        (b == l &&
                          (4 == T ||
                            d ||
                            (6 == T && 1 & p[i - 1]) ||
                            T == (f.s < 0 ? 8 : 7)))),
                  i < 1 || !p[0])
                )
                  t = d ? y(u.charAt(1), -_, u.charAt(0)) : u.charAt(0);
                else {
                  if (((p.length = i), d))
                    for (--o; ++p[--i] > o; ) (p[i] = 0), i || (++c, (p = [1].concat(p)));
                  for (l = p.length; !p[--l]; );
                  for (b = 0, t = ''; b <= l; t += u.charAt(p[b++]));
                  t = y(t, c, u.charAt(0));
                }
                return t;
              };
            })()),
            (n = (function() {
              function e(e, t, n) {
                var r,
                  o,
                  a,
                  s,
                  u = 0,
                  i = e.length,
                  c = t % 1e7,
                  l = (t / 1e7) | 0;
                for (e = e.slice(); i--; )
                  (u =
                    (((o =
                      c * (a = e[i] % 1e7) +
                      ((r = l * a + (s = (e[i] / 1e7) | 0) * c) % 1e7) * 1e7 +
                      u) /
                      n) |
                      0) +
                    ((r / 1e7) | 0) +
                    l * s),
                    (e[i] = o % n);
                return u && (e = [u].concat(e)), e;
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
              return function(r, o, a, s, u) {
                var c,
                  l,
                  f,
                  p,
                  h,
                  b,
                  _,
                  T,
                  E,
                  y,
                  v,
                  g,
                  O,
                  w,
                  k,
                  j,
                  A,
                  R = r.s == o.s ? 1 : -1,
                  D = r.c,
                  x = o.c;
                if (!(D && D[0] && x && x[0]))
                  return new F(
                    r.s && o.s && (D ? !x || D[0] != x[0] : x)
                      ? (D && 0 == D[0]) || !x
                        ? 0 * R
                        : R / 0
                      : NaN
                  );
                for (
                  E = (T = new F(R)).c = [],
                    R = a + (l = r.e - o.e) + 1,
                    u || ((u = d), (l = m(r.e / 14) - m(o.e / 14)), (R = (R / 14) | 0)),
                    f = 0;
                  x[f] == (D[f] || 0);
                  f++
                );
                if ((x[f] > (D[f] || 0) && l--, R < 0)) E.push(1), (p = !0);
                else {
                  for (
                    w = D.length,
                      j = x.length,
                      f = 0,
                      R += 2,
                      (h = i(u / (x[0] + 1))) > 1 &&
                        ((x = e(x, h, u)),
                        (D = e(D, h, u)),
                        (j = x.length),
                        (w = D.length)),
                      O = j,
                      v = (y = D.slice(0, j)).length;
                    v < j;
                    y[v++] = 0
                  );
                  (A = x.slice()), (A = [0].concat(A)), (k = x[0]), x[1] >= u / 2 && k++;
                  do {
                    if (((h = 0), (c = t(x, y, j, v)) < 0)) {
                      if (
                        ((g = y[0]),
                        j != v && (g = g * u + (y[1] || 0)),
                        (h = i(g / k)) > 1)
                      )
                        for (
                          h >= u && (h = u - 1),
                            _ = (b = e(x, h, u)).length,
                            v = y.length;
                          1 == t(b, y, _, v);

                        )
                          h--, n(b, j < _ ? A : x, _, u), (_ = b.length), (c = 1);
                      else 0 == h && (c = h = 1), (_ = (b = x.slice()).length);
                      if (
                        (_ < v && (b = [0].concat(b)),
                        n(y, b, v, u),
                        (v = y.length),
                        -1 == c)
                      )
                        for (; t(x, y, j, v) < 1; )
                          h++, n(y, j < v ? A : x, v, u), (v = y.length);
                    } else 0 === c && (h++, (y = [0]));
                    (E[f++] = h), y[0] ? (y[v++] = D[O] || 0) : ((y = [D[O]]), (v = 1));
                  } while ((O++ < w || null != y[0]) && R--);
                  (p = null != y[0]), E[0] || E.splice(0, 1);
                }
                if (u == d) {
                  for (f = 1, R = E[0]; R >= 10; R /= 10, f++);
                  W(T, a + (T.e = f + 14 * l - 1) + 1, s, p);
                } else (T.e = l), (T.r = +p);
                return T;
              };
            })()),
            (v = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
            (g = /^([^.]+)\.$/),
            (O = /^\.([^.]+)$/),
            (w = /^-?(Infinity|NaN)$/),
            (k = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
            (o = function(e, t, n, r) {
              var o,
                a = n ? t : t.replace(k, '');
              if (w.test(a)) e.s = isNaN(a) ? null : a < 0 ? -1 : 1;
              else {
                if (
                  !n &&
                  ((a = a.replace(v, function(e, t, n) {
                    return (
                      (o = 'x' == (n = n.toLowerCase()) ? 16 : 'b' == n ? 2 : 8),
                      r && r != o ? e : t
                    );
                  })),
                  r && ((o = r), (a = a.replace(g, '$1').replace(O, '0.$1'))),
                  t != a)
                )
                  return new F(a, o);
                if (F.DEBUG)
                  throw Error(c + 'Not a' + (r ? ' base ' + r : '') + ' number: ' + t);
                e.s = null;
              }
              e.c = e.e = null;
            }),
            (j.absoluteValue = j.abs = function() {
              var e = new F(this);
              return e.s < 0 && (e.s = 1), e;
            }),
            (j.comparedTo = function(e, t) {
              return b(this, new F(e, t));
            }),
            (j.decimalPlaces = j.dp = function(e, t) {
              var n,
                r,
                o,
                a = this;
              if (null != e)
                return (
                  _(e, 0, p),
                  null == t ? (t = D) : _(t, 0, 8),
                  W(new F(a), e + a.e + 1, t)
                );
              if (!(n = a.c)) return null;
              if (((r = 14 * ((o = n.length - 1) - m(this.e / 14))), (o = n[o])))
                for (; o % 10 == 0; o /= 10, r--);
              return r < 0 && (r = 0), r;
            }),
            (j.dividedBy = j.div = function(e, t) {
              return n(this, new F(e, t), R, D);
            }),
            (j.dividedToIntegerBy = j.idiv = function(e, t) {
              return n(this, new F(e, t), 0, 1);
            }),
            (j.exponentiatedBy = j.pow = function(e, t) {
              var n,
                r,
                o,
                a,
                s,
                l,
                d,
                f,
                p = this;
              if ((e = new F(e)).c && !e.isInteger())
                throw Error(c + 'Exponent not an integer: ' + Y(e));
              if (
                (null != t && (t = new F(t)),
                (s = e.e > 14),
                !p.c ||
                  !p.c[0] ||
                  (1 == p.c[0] && !p.e && 1 == p.c.length) ||
                  !e.c ||
                  !e.c[0])
              )
                return (
                  (f = new F(Math.pow(+Y(p), s ? 2 - T(e) : +Y(e)))), t ? f.mod(t) : f
                );
              if (((l = e.s < 0), t)) {
                if (t.c ? !t.c[0] : !t.s) return new F(NaN);
                (r = !l && p.isInteger() && t.isInteger()) && (p = p.mod(t));
              } else {
                if (
                  e.e > 9 &&
                  (p.e > 0 ||
                    p.e < -1 ||
                    (0 == p.e
                      ? p.c[0] > 1 || (s && p.c[1] >= 24e7)
                      : p.c[0] < 8e13 || (s && p.c[0] <= 9999975e7)))
                )
                  return (
                    (a = p.s < 0 && T(e) ? -0 : 0),
                    p.e > -1 && (a = 1 / a),
                    new F(l ? 1 / a : a)
                  );
                B && (a = u(B / 14 + 2));
              }
              for (
                s
                  ? ((n = new F(0.5)), l && (e.s = 1), (d = T(e)))
                  : (d = (o = Math.abs(+Y(e))) % 2),
                  f = new F(A);
                ;

              ) {
                if (d) {
                  if (!(f = f.times(p)).c) break;
                  a ? f.c.length > a && (f.c.length = a) : r && (f = f.mod(t));
                }
                if (o) {
                  if (0 === (o = i(o / 2))) break;
                  d = o % 2;
                } else if ((W((e = e.times(n)), e.e + 1, 1), e.e > 14)) d = T(e);
                else {
                  if (0 === (o = +Y(e))) break;
                  d = o % 2;
                }
                (p = p.times(p)),
                  a ? p.c && p.c.length > a && (p.c.length = a) : r && (p = p.mod(t));
              }
              return r
                ? f
                : (l && (f = A.div(f)), t ? f.mod(t) : a ? W(f, B, D, void 0) : f);
            }),
            (j.integerValue = function(e) {
              var t = new F(this);
              return null == e ? (e = D) : _(e, 0, 8), W(t, t.e + 1, e);
            }),
            (j.isEqualTo = j.eq = function(e, t) {
              return 0 === b(this, new F(e, t));
            }),
            (j.isFinite = function() {
              return !!this.c;
            }),
            (j.isGreaterThan = j.gt = function(e, t) {
              return b(this, new F(e, t)) > 0;
            }),
            (j.isGreaterThanOrEqualTo = j.gte = function(e, t) {
              return 1 === (t = b(this, new F(e, t))) || 0 === t;
            }),
            (j.isInteger = function() {
              return !!this.c && m(this.e / 14) > this.c.length - 2;
            }),
            (j.isLessThan = j.lt = function(e, t) {
              return b(this, new F(e, t)) < 0;
            }),
            (j.isLessThanOrEqualTo = j.lte = function(e, t) {
              return -1 === (t = b(this, new F(e, t))) || 0 === t;
            }),
            (j.isNaN = function() {
              return !this.s;
            }),
            (j.isNegative = function() {
              return this.s < 0;
            }),
            (j.isPositive = function() {
              return this.s > 0;
            }),
            (j.isZero = function() {
              return !!this.c && 0 == this.c[0];
            }),
            (j.minus = function(e, t) {
              var n,
                r,
                o,
                a,
                s = this,
                u = s.s;
              if (((t = (e = new F(e, t)).s), !u || !t)) return new F(NaN);
              if (u != t) return (e.s = -t), s.plus(e);
              var i = s.e / 14,
                c = e.e / 14,
                l = s.c,
                f = e.c;
              if (!i || !c) {
                if (!l || !f) return l ? ((e.s = -t), e) : new F(f ? s : NaN);
                if (!l[0] || !f[0])
                  return f[0] ? ((e.s = -t), e) : new F(l[0] ? s : 3 == D ? -0 : 0);
              }
              if (((i = m(i)), (c = m(c)), (l = l.slice()), (u = i - c))) {
                for (
                  (a = u < 0) ? ((u = -u), (o = l)) : ((c = i), (o = f)),
                    o.reverse(),
                    t = u;
                  t--;
                  o.push(0)
                );
                o.reverse();
              } else
                for (
                  r = (a = (u = l.length) < (t = f.length)) ? u : t, u = t = 0;
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
              for (t = d - 1; r > u; ) {
                if (l[--r] < f[r]) {
                  for (n = r; n && !l[--n]; l[n] = t);
                  --l[n], (l[r] += d);
                }
                l[r] -= f[r];
              }
              for (; 0 == l[0]; l.splice(0, 1), --c);
              return l[0]
                ? K(e, l, c)
                : ((e.s = 3 == D ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (j.modulo = j.mod = function(e, t) {
              var r,
                o,
                a = this;
              return (
                (e = new F(e, t)),
                !a.c || !e.s || (e.c && !e.c[0])
                  ? new F(NaN)
                  : !e.c || (a.c && !a.c[0])
                  ? new F(a)
                  : (9 == C
                      ? ((o = e.s), (e.s = 1), (r = n(a, e, 0, 3)), (e.s = o), (r.s *= o))
                      : (r = n(a, e, 0, C)),
                    (e = a.minus(r.times(e))).c[0] || 1 != C || (e.s = a.s),
                    e)
              );
            }),
            (j.multipliedBy = j.times = function(e, t) {
              var n,
                r,
                o,
                a,
                s,
                u,
                i,
                c,
                l,
                f,
                p,
                h,
                b,
                _,
                T = this,
                E = T.c,
                y = (e = new F(e, t)).c;
              if (!(E && y && E[0] && y[0]))
                return (
                  !T.s || !e.s || (E && !E[0] && !y) || (y && !y[0] && !E)
                    ? (e.c = e.e = e.s = null)
                    : ((e.s *= T.s),
                      E && y ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                  e
                );
              for (
                r = m(T.e / 14) + m(e.e / 14),
                  e.s *= T.s,
                  (i = E.length) < (f = y.length) &&
                    ((b = E), (E = y), (y = b), (o = i), (i = f), (f = o)),
                  o = i + f,
                  b = [];
                o--;
                b.push(0)
              );
              for (_ = d, 1e7, o = f; --o >= 0; ) {
                for (
                  n = 0, p = y[o] % 1e7, h = (y[o] / 1e7) | 0, a = o + (s = i);
                  a > o;

                )
                  (n =
                    (((c =
                      p * (c = E[--s] % 1e7) +
                      ((u = h * c + (l = (E[s] / 1e7) | 0) * p) % 1e7) * 1e7 +
                      b[a] +
                      n) /
                      _) |
                      0) +
                    ((u / 1e7) | 0) +
                    h * l),
                    (b[a--] = c % _);
                b[a] = n;
              }
              return n ? ++r : b.splice(0, 1), K(e, b, r);
            }),
            (j.negated = function() {
              var e = new F(this);
              return (e.s = -e.s || null), e;
            }),
            (j.plus = function(e, t) {
              var n,
                r = this,
                o = r.s;
              if (((t = (e = new F(e, t)).s), !o || !t)) return new F(NaN);
              if (o != t) return (e.s = -t), r.minus(e);
              var a = r.e / 14,
                s = e.e / 14,
                u = r.c,
                i = e.c;
              if (!a || !s) {
                if (!u || !i) return new F(o / 0);
                if (!u[0] || !i[0]) return i[0] ? e : new F(u[0] ? r : 0 * o);
              }
              if (((a = m(a)), (s = m(s)), (u = u.slice()), (o = a - s))) {
                for (
                  o > 0 ? ((s = a), (n = i)) : ((o = -o), (n = u)), n.reverse();
                  o--;
                  n.push(0)
                );
                n.reverse();
              }
              for (
                (o = u.length) - (t = i.length) < 0 &&
                  ((n = i), (i = u), (u = n), (t = o)),
                  o = 0;
                t;

              )
                (o = ((u[--t] = u[t] + i[t] + o) / d) | 0),
                  (u[t] = d === u[t] ? 0 : u[t] % d);
              return o && ((u = [o].concat(u)), ++s), K(e, u, s);
            }),
            (j.precision = j.sd = function(e, t) {
              var n,
                r,
                o,
                a = this;
              if (null != e && e !== !!e)
                return _(e, 1, p), null == t ? (t = D) : _(t, 0, 8), W(new F(a), e, t);
              if (!(n = a.c)) return null;
              if (((r = 14 * (o = n.length - 1) + 1), (o = n[o]))) {
                for (; o % 10 == 0; o /= 10, r--);
                for (o = n[0]; o >= 10; o /= 10, r++);
              }
              return e && a.e + 1 > r && (r = a.e + 1), r;
            }),
            (j.shiftedBy = function(e) {
              return _(e, -9007199254740991, 9007199254740991), this.times('1e' + e);
            }),
            (j.squareRoot = j.sqrt = function() {
              var e,
                t,
                r,
                o,
                a,
                s = this,
                u = s.c,
                i = s.s,
                c = s.e,
                l = R + 4,
                d = new F('0.5');
              if (1 !== i || !u || !u[0])
                return new F(!i || (i < 0 && (!u || u[0])) ? NaN : u ? s : 1 / 0);
              if (
                (0 == (i = Math.sqrt(+Y(s))) || i == 1 / 0
                  ? (((t = h(u)).length + c) % 2 == 0 && (t += '0'),
                    (i = Math.sqrt(+t)),
                    (c = m((c + 1) / 2) - (c < 0 || c % 2)),
                    (r = new F(
                      (t =
                        i == 1 / 0
                          ? '1e' + c
                          : (t = i.toExponential()).slice(0, t.indexOf('e') + 1) + c)
                    )))
                  : (r = new F(i + '')),
                r.c[0])
              )
                for ((i = (c = r.e) + l) < 3 && (i = 0); ; )
                  if (
                    ((a = r),
                    (r = d.times(a.plus(n(s, a, l, 1)))),
                    h(a.c).slice(0, i) === (t = h(r.c)).slice(0, i))
                  ) {
                    if (
                      (r.e < c && --i,
                      '9999' != (t = t.slice(i - 3, i + 1)) && (o || '4999' != t))
                    ) {
                      (+t && (+t.slice(1) || '5' != t.charAt(0))) ||
                        (W(r, r.e + R + 2, 1), (e = !r.times(r).eq(s)));
                      break;
                    }
                    if (!o && (W(a, a.e + R + 2, 0), a.times(a).eq(s))) {
                      r = a;
                      break;
                    }
                    (l += 4), (i += 4), (o = 1);
                  }
              return W(r, r.e + R + 1, D, e);
            }),
            (j.toExponential = function(e, t) {
              return null != e && (_(e, 0, p), e++), H(this, e, t, 1);
            }),
            (j.toFixed = function(e, t) {
              return null != e && (_(e, 0, p), (e = e + this.e + 1)), H(this, e, t);
            }),
            (j.toFormat = function(e, t, n) {
              var r,
                o = this;
              if (null == n)
                null != e && t && 'object' == typeof t
                  ? ((n = t), (t = null))
                  : e && 'object' == typeof e
                  ? ((n = e), (e = t = null))
                  : (n = U);
              else if ('object' != typeof n)
                throw Error(c + 'Argument not an object: ' + n);
              if (((r = o.toFixed(e, t)), o.c)) {
                var a,
                  s = r.split('.'),
                  u = +n.groupSize,
                  i = +n.secondaryGroupSize,
                  l = n.groupSeparator || '',
                  d = s[0],
                  f = s[1],
                  p = o.s < 0,
                  m = p ? d.slice(1) : d,
                  h = m.length;
                if ((i && ((a = u), (u = i), (i = a), (h -= a)), u > 0 && h > 0)) {
                  for (a = h % u || u, d = m.substr(0, a); a < h; a += u)
                    d += l + m.substr(a, u);
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
            (j.toFraction = function(e) {
              var t,
                r,
                o,
                a,
                s,
                u,
                i,
                l,
                d,
                p,
                m,
                b,
                _ = this,
                T = _.c;
              if (
                null != e &&
                ((!(i = new F(e)).isInteger() && (i.c || 1 !== i.s)) || i.lt(A))
              )
                throw Error(
                  c +
                    'Argument ' +
                    (i.isInteger() ? 'out of range: ' : 'not an integer: ') +
                    Y(i)
                );
              if (!T) return new F(_);
              for (
                t = new F(A),
                  d = r = new F(A),
                  o = l = new F(A),
                  b = h(T),
                  s = t.e = b.length - _.e - 1,
                  t.c[0] = f[(u = s % 14) < 0 ? 14 + u : u],
                  e = !e || i.comparedTo(t) > 0 ? (s > 0 ? t : d) : i,
                  u = P,
                  P = 1 / 0,
                  i = new F(b),
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
                (l.s = d.s = _.s),
                (m =
                  n(d, o, (s *= 2), D)
                    .minus(_)
                    .abs()
                    .comparedTo(
                      n(l, r, s, D)
                        .minus(_)
                        .abs()
                    ) < 1
                    ? [d, o]
                    : [l, r]),
                (P = u),
                m
              );
            }),
            (j.toNumber = function() {
              return +Y(this);
            }),
            (j.toPrecision = function(e, t) {
              return null != e && _(e, 1, p), H(this, e, t, 2);
            }),
            (j.toString = function(e) {
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
                      ? (t = a <= x || a >= N ? E(h(n.c), a) : y(h(n.c), a, '0'))
                      : 10 === e
                      ? (t = y(h((n = W(new F(n), R + a + 1, D)).c), n.e, '0'))
                      : (_(e, 2, M.length, 'Base'),
                        (t = r(y(h(n.c), a, '0'), 10, e, o, !0))),
                    o < 0 && n.c[0] && (t = '-' + t)),
                t
              );
            }),
            (j.valueOf = j.toJSON = function() {
              return Y(this);
            }),
            (j._isBigNumber = !0),
            null != t && F.set(t),
            F
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
          s = '[object Map]',
          u = '[object Set]',
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
        ] = d[s] = d['[object Number]'] = d['[object Object]'] = d['[object RegExp]'] = d[
          u
        ] = d['[object String]'] = d['[object Symbol]'] = d['[object Uint8Array]'] = d[
          '[object Uint8ClampedArray]'
        ] = d['[object Uint16Array]'] = d['[object Uint32Array]'] = !0),
          (d['[object Error]'] = d[o] = d['[object WeakMap]'] = !1);
        var f = 'object' == typeof e && e && e.Object === Object && e,
          p = 'object' == typeof self && self && self.Object === Object && self,
          m = f || p || Function('return this')(),
          h = t && !t.nodeType && t,
          b = h && 'object' == typeof n && n && !n.nodeType && n,
          _ = b && b.exports === h;
        function T(e, t) {
          return e.set(t[0], t[1]), e;
        }
        function E(e, t) {
          return e.add(t), e;
        }
        function y(e, t, n, r) {
          var o = -1,
            a = e ? e.length : 0;
          for (r && a && (n = e[++o]); ++o < a; ) n = t(n, e[o], o, e);
          return n;
        }
        function v(e) {
          var t = !1;
          if (null != e && 'function' != typeof e.toString)
            try {
              t = !!(e + '');
            } catch (e) {}
          return t;
        }
        function g(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function O(e, t) {
          return function(n) {
            return e(t(n));
          };
        }
        function w(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e) {
              n[++t] = e;
            }),
            n
          );
        }
        var k,
          j = Array.prototype,
          A = Function.prototype,
          R = Object.prototype,
          D = m['__core-js_shared__'],
          x = (k = /[^.]+$/.exec((D && D.keys && D.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + k
            : '',
          N = A.toString,
          I = R.hasOwnProperty,
          P = R.toString,
          S = RegExp(
            '^' +
              N.call(I)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          C = _ ? m.Buffer : void 0,
          B = m.Symbol,
          U = m.Uint8Array,
          M = O(Object.getPrototypeOf, Object),
          F = Object.create,
          H = R.propertyIsEnumerable,
          L = j.splice,
          K = Object.getOwnPropertySymbols,
          W = C ? C.isBuffer : void 0,
          Y = O(Object.keys, Object),
          X = be(m, 'DataView'),
          V = be(m, 'Map'),
          G = be(m, 'Promise'),
          z = be(m, 'Set'),
          q = be(m, 'WeakMap'),
          J = be(Object, 'create'),
          $ = ve(X),
          Z = ve(V),
          Q = ve(G),
          ee = ve(z),
          te = ve(q),
          ne = B ? B.prototype : void 0,
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
        function se(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function ue(e) {
          this.__data__ = new ae(e);
        }
        function ie(e, t) {
          var n =
              Oe(e) ||
              (function(e) {
                return (
                  (function(e) {
                    return (
                      (function(e) {
                        return !!e && 'object' == typeof e;
                      })(e) && we(e)
                    );
                  })(e) &&
                  I.call(e, 'callee') &&
                  (!H.call(e, 'callee') || P.call(e) == r)
                );
              })(e)
                ? (function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                    return r;
                  })(e.length, String)
                : [],
            o = n.length,
            a = !!o;
          for (var s in e)
            (!t && !I.call(e, s)) || (a && ('length' == s || Ee(s, o))) || n.push(s);
          return n;
        }
        function ce(e, t, n) {
          var r = e[t];
          (I.call(e, t) && ge(r, n) && (void 0 !== n || t in e)) || (e[t] = n);
        }
        function le(e, t) {
          for (var n = e.length; n--; ) if (ge(e[n][0], t)) return n;
          return -1;
        }
        function de(e, t, n, c, l, f, p) {
          var m;
          if ((c && (m = f ? c(e, l, f, p) : c(e)), void 0 !== m)) return m;
          if (!Ae(e)) return e;
          var h = Oe(e);
          if (h) {
            if (
              ((m = (function(e) {
                var t = e.length,
                  n = e.constructor(t);
                t &&
                  'string' == typeof e[0] &&
                  I.call(e, 'index') &&
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
            var b = Te(e),
              _ = b == o || b == a;
            if (ke(e))
              return (function(e, t) {
                if (t) return e.slice();
                var n = new e.constructor(e.length);
                return e.copy(n), n;
              })(e, t);
            if ('[object Object]' == b || b == r || (_ && !f)) {
              if (v(e)) return f ? e : {};
              if (
                ((m = (function(e) {
                  return 'function' != typeof e.constructor || ye(e)
                    ? {}
                    : ((t = M(e)), Ae(t) ? F(t) : {});
                  var t;
                })(_ ? {} : e)),
                !t)
              )
                return (function(e, t) {
                  return me(e, _e(e), t);
                })(
                  e,
                  (function(e, t) {
                    return e && me(t, Re(t), e);
                  })(m, e)
                );
            } else {
              if (!d[b]) return f ? e : {};
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
                  case s:
                    return (function(e, t, n) {
                      return y(t ? n(g(e), !0) : g(e), T, new e.constructor());
                    })(e, r, n);
                  case '[object Number]':
                  case '[object String]':
                    return new o(e);
                  case '[object RegExp]':
                    return (function(e) {
                      var t = new e.constructor(e.source, i.exec(e));
                      return (t.lastIndex = e.lastIndex), t;
                    })(e);
                  case u:
                    return (function(e, t, n) {
                      return y(t ? n(w(e), !0) : w(e), E, new e.constructor());
                    })(e, r, n);
                  case '[object Symbol]':
                    return (a = e), re ? Object(re.call(a)) : {};
                }
                var a;
              })(e, b, de, t);
            }
          }
          p || (p = new ue());
          var O = p.get(e);
          if (O) return O;
          if ((p.set(e, m), !h))
            var k = n
              ? (function(e) {
                  return (function(e, t, n) {
                    var r = t(e);
                    return Oe(e)
                      ? r
                      : (function(e, t) {
                          for (var n = -1, r = t.length, o = e.length; ++n < r; )
                            e[o + n] = t[n];
                          return e;
                        })(r, n(e));
                  })(e, Re, _e);
                })(e)
              : Re(e);
          return (
            (function(e, t) {
              for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n, e); );
            })(k || e, function(r, o) {
              k && (r = e[(o = r)]), ce(m, o, de(r, t, n, c, o, e, p));
            }),
            m
          );
        }
        function fe(e) {
          return (
            !(!Ae(e) || ((t = e), x && x in t)) && (je(e) || v(e) ? S : c).test(ve(e))
          );
          var t;
        }
        function pe(e) {
          var t = new e.constructor(e.byteLength);
          return new U(t).set(new U(e)), t;
        }
        function me(e, t, n, r) {
          n || (n = {});
          for (var o = -1, a = t.length; ++o < a; ) {
            var s = t[o],
              u = r ? r(n[s], e[s], s, n, e) : void 0;
            ce(n, s, void 0 === u ? e[s] : u);
          }
          return n;
        }
        function he(e, t) {
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
        function be(e, t) {
          var n = (function(e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return fe(n) ? n : void 0;
        }
        (oe.prototype.clear = function() {
          this.__data__ = J ? J(null) : {};
        }),
          (oe.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (oe.prototype.get = function(e) {
            var t = this.__data__;
            if (J) {
              var n = t[e];
              return '__lodash_hash_undefined__' === n ? void 0 : n;
            }
            return I.call(t, e) ? t[e] : void 0;
          }),
          (oe.prototype.has = function(e) {
            var t = this.__data__;
            return J ? void 0 !== t[e] : I.call(t, e);
          }),
          (oe.prototype.set = function(e, t) {
            return (
              (this.__data__[e] = J && void 0 === t ? '__lodash_hash_undefined__' : t),
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
          (se.prototype.clear = function() {
            this.__data__ = { hash: new oe(), map: new (V || ae)(), string: new oe() };
          }),
          (se.prototype.delete = function(e) {
            return he(this, e).delete(e);
          }),
          (se.prototype.get = function(e) {
            return he(this, e).get(e);
          }),
          (se.prototype.has = function(e) {
            return he(this, e).has(e);
          }),
          (se.prototype.set = function(e, t) {
            return he(this, e).set(e, t), this;
          }),
          (ue.prototype.clear = function() {
            this.__data__ = new ae();
          }),
          (ue.prototype.delete = function(e) {
            return this.__data__.delete(e);
          }),
          (ue.prototype.get = function(e) {
            return this.__data__.get(e);
          }),
          (ue.prototype.has = function(e) {
            return this.__data__.has(e);
          }),
          (ue.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof ae) {
              var r = n.__data__;
              if (!V || r.length < 199) return r.push([e, t]), this;
              n = this.__data__ = new se(r);
            }
            return n.set(e, t), this;
          });
        var _e = K
            ? O(K, Object)
            : function() {
                return [];
              },
          Te = function(e) {
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
        function ye(e) {
          var t = e && e.constructor;
          return e === (('function' == typeof t && t.prototype) || R);
        }
        function ve(e) {
          if (null != e) {
            try {
              return N.call(e);
            } catch (e) {}
            try {
              return e + '';
            } catch (e) {}
          }
          return '';
        }
        function ge(e, t) {
          return e === t || (e != e && t != t);
        }
        ((X && '[object DataView]' != Te(new X(new ArrayBuffer(1)))) ||
          (V && Te(new V()) != s) ||
          (G && '[object Promise]' != Te(G.resolve())) ||
          (z && Te(new z()) != u) ||
          (q && '[object WeakMap]' != Te(new q()))) &&
          (Te = function(e) {
            var t = P.call(e),
              n = '[object Object]' == t ? e.constructor : void 0,
              r = n ? ve(n) : void 0;
            if (r)
              switch (r) {
                case $:
                  return '[object DataView]';
                case Z:
                  return s;
                case Q:
                  return '[object Promise]';
                case ee:
                  return u;
                case te:
                  return '[object WeakMap]';
              }
            return t;
          });
        var Oe = Array.isArray;
        function we(e) {
          return (
            null != e &&
            (function(e) {
              return (
                'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
              );
            })(e.length) &&
            !je(e)
          );
        }
        var ke =
          W ||
          function() {
            return !1;
          };
        function je(e) {
          var t = Ae(e) ? P.call(e) : '';
          return t == o || t == a;
        }
        function Ae(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function Re(e) {
          return we(e)
            ? ie(e)
            : (function(e) {
                if (!ye(e)) return Y(e);
                var t = [];
                for (var n in Object(e)) I.call(e, n) && 'constructor' != n && t.push(n);
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
    },
    './public/img/info.png': function(e, t, n) {
      'use strict';
      n.r(t), (t.default = n.p + 'public/img/info.png');
    },
    './src/core/config.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return r;
      }),
        n.d(t, 'b', function() {
          return o;
        }),
        n.d(t, 'a', function() {
          return a;
        }),
        n.d(t, 'd', function() {
          return s;
        });
      var { INFURA_PROTOCOL: r } = Object({
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
          TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec',
          API_SERVER: 'http://localhost:3000'
        }),
        { INFURA_NETWORK: o } = Object({
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
          TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec',
          API_SERVER: 'http://localhost:3000'
        }),
        { INFURA_API_KEY: a } = Object({
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
          TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec',
          API_SERVER: 'http://localhost:3000'
        }),
        { NETWORK_NUMBER: s } = Object({
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
          TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec',
          API_SERVER: 'http://localhost:3000'
        });
    },
    './src/modules/contract/contract.hooks.js': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return T;
      }),
        n.d(t, 'f', function() {
          return E;
        }),
        n.d(t, 'b', function() {
          return y;
        }),
        n.d(t, 'a', function() {
          return v;
        }),
        n.d(t, 'd', function() {
          return g;
        }),
        n.d(t, 'e', function() {
          return O;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        a = n('../../node_modules/react/index.js'),
        s = n('../../node_modules/react-redux/es/index.js'),
        u = n('./src/utils/eth.js'),
        i = n('./src/utils/web3.provider.js'),
        c = n('../../node_modules/redux/es/redux.js'),
        l = n('../../node_modules/redux-saga-web3/lib/index.js'),
        d = n('./src/utils/index.js'),
        f = n('./src/modules/contract/contract.selectors.js'),
        p = n('./src/modules/contract/contract.context.js');
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var b = d.a.Alert(),
        _ = Object(i.c)(),
        T = () => {
          var { actions: e, tokenAddress: t } = Object(p.b)(),
            n = Object(s.d)(),
            r = {
              getEvent: Object(a.useCallback)(
                r => {
                  n(e.events[r].get({ at: t }));
                },
                [n, e, t]
              ),
              subscribeToEvent: Object(a.useCallback)(
                r => (n(e.events[r].get({ at: t })), n(e.events[r].subscribe({ at: t }))),
                [n, e, t]
              ),
              call: Object(a.useCallback)(
                (r, o) =>
                  n(o ? e.methods[r]({ at: t }).call(o) : e.methods[r]({ at: t }).call()),
                [n, e, t]
              ),
              send: Object(a.useCallback)(
                function(r, o) {
                  for (
                    var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), u = 2;
                    u < a;
                    u++
                  )
                    s[u - 2] = arguments[u];
                  return n(
                    s
                      ? e.methods[r](h({ at: t }, o)).send(...s)
                      : e.methods[r](h({ at: t }, o)).send()
                  );
                },
                [n, e, t]
              )
            };
          return e ? r : {};
        },
        E = () => {
          Object(p.b)(), y();
          var e,
            t = Object(f.b)(),
            { init: n } =
              ((e = Object(s.d)()),
              {
                init: Object(a.useCallback)(t => e(l.actions.init.init(t)), [e]),
                network: Object(c.bindActionCreators)(h({}, l.actions.network), e),
                accounts: Object(c.bindActionCreators)(h({}, l.actions.accounts), e)
              });
          return (
            Object(a.useEffect)(() => {
              t.isInitialized || n(_);
            }, [t.status, t.isInitialized, n]),
            [t.accounts, t.isInitialized, t.networkId]
          );
        },
        y = () => {
          var e = Object(s.d)(),
            t = Object(i.a)();
          return (
            t && (t.autoRefreshOnNetworkChange = !1),
            Object(a.useEffect)(() => {
              if (!t) return () => {};
              try {
                t.enable();
              } catch (e) {
                return () => {};
              }
              var n = t => e(l.actions.accounts.getSuccess(t)),
                r = () => e(l.actions.network.getId());
              return (
                t.on('accountsChanged', n),
                t.on('networkChanged', r),
                () => {
                  t.off('accountsChanged', n), t.off('networkChanged', r);
                }
              );
            }, [e, t]),
            t
          );
        },
        v = () => {
          var { accounts: e } = Object(f.b)(),
            { userBalance: t } = Object(f.a)(),
            { call: n, subscribeToEvent: r } = T(),
            o = !!t;
          return (
            Object(a.useEffect)(() => {
              r && r('Transfer'), e && e.length && !o && n && n('balanceOf', e[0]);
            }, [e, o, n, r]),
            t && 'SUCCESS' === t.phase ? Object(u.a)(t.value, 18) : null
          );
        },
        g = () => {
          Object(p.b)();
          var { getState: e } = Object(f.a)(),
            t = Object(f.b)(),
            { call: n, send: r } = T();
          return E(), v(), { accounts: t.accounts, getState: e, call: n, send: r };
        },
        O = e => {
          var { tx: t, method: n, callback: r } = e,
            { getState: o } = Object(f.a)();
          if (!t || !o) return null;
          var a = o(n, ...t.payload.args);
          return a && 'RECEIPT' === a.phase
            ? (b.alert('Transaction Completed!', 'success'), r(), 'success')
            : a && 'ERROR' === a.phase
            ? (b.alert(a.value.get('message')), r(), 'error')
            : 'pending';
        };
    },
    './src/modules/contract/contract.selectors.js': function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return p;
      }),
        n.d(t, 'a', function() {
          return m;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        a = n('../../node_modules/react-redux/es/index.js'),
        s = n('./src/utils/eth.js'),
        u = n('./src/modules/contract/contract.context.js');
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var l = (e, t, n) =>
          e.methods.balanceOf({ at: n })(
            t,
            t.web3 && t.web3.accounts.items && t.web3.accounts.items[0]
          ),
        d = (e, t, n) =>
          e.methods.nonceOf({ at: n })(
            t,
            t.web3 && t.web3.accounts.items && t.web3.accounts.items[0]
          ),
        f = e => {
          if (!e) return {};
          var t =
            'number' != typeof Object(s.e)(e.value) ? Object(s.e)(e.value) : e.value;
          return c(c({}, e), {}, { value: t });
        },
        p = () => (
          Object(u.b)(),
          Object(a.e)(e => ({
            web3: e.web3,
            status: e.web3 && e.web3.init.status,
            isInitialized: e.web3 && e.web3.init.isInitialized,
            networkId: e.web3 && e.web3.network.id && e.web3.network.id,
            accounts: e.web3 && e.web3.accounts.items && e.web3.accounts.items,
            address: e.web3 && e.web3.accounts.items && e.web3.accounts.items[0]
          }))
        ),
        m = () => {
          var { selectors: e, tokenAddress: t, initialized: n } = Object(u.b)();
          return Object(a.e)(r =>
            n
              ? {
                  userNonce: d(e, r, t),
                  userBalance: l(e, r, t),
                  RelevantToken: r.RelevantToken,
                  getState: function(n) {
                    for (
                      var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), s = 1;
                      s < o;
                      s++
                    )
                      a[s - 1] = arguments[s];
                    return e.methods[n] ? f(e.methods[n]({ at: t })(r, ...a)) : {};
                  },
                  eventCache: t => e.events[t]
                }
              : { getState: () => ({}) }
          );
        };
    },
    './src/modules/styled/web.js': function(e, t, n) {
      'use strict';
      n.d(t, 'l', function() {
        return I;
      }),
        n.d(t, 'r', function() {
          return P;
        }),
        n.d(t, 'o', function() {
          return S;
        }),
        n.d(t, 'f', function() {
          return C;
        }),
        n.d(t, 'e', function() {
          return B;
        }),
        n.d(t, 'c', function() {
          return U;
        }),
        n.d(t, 'p', function() {
          return M;
        }),
        n.d(t, 'i', function() {
          return F;
        }),
        n.d(t, 'k', function() {
          return H;
        }),
        n.d(t, 'a', function() {
          return L;
        }),
        n.d(t, 'b', function() {
          return K;
        }),
        n.d(t, 'j', function() {
          return W;
        }),
        n.d(t, 'h', function() {
          return Y;
        }),
        n.d(t, 'g', function() {
          return X;
        }),
        n.d(t, 'n', function() {
          return V;
        }),
        n.d(t, 'm', function() {
          return G;
        }),
        n.d(t, 'd', function() {
          return z;
        }),
        n.d(t, 'q', function() {
          return q;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        o = n.n(r),
        a = n('../../node_modules/react-router-dom/esm/react-router-dom.js'),
        s = n(
          '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        u = n('./src/styles/index.js'),
        i = n(
          '../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js'
        ),
        c = n(
          '../../node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js'
        );
      function l() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = o()(['\n  ', '\n  ', '\n']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  padding: ',
          ' ',
          ';\n  min-width: 0;\n  &: focus {\n    outline: 1px solid ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  padding: ',
          ' ',
          ';\n  min-width: 0;\n  &: focus {\n    outline: 1px solid ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = o()([
          '\n  padding: ',
          ' ',
          ';\n  margin-top: ',
          ';  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ::placeholder: {\n    font-size: ',
          ';\n    line-height: ',
          ';\n  };\n  :focus {\n    outline: none !important;\n    ',
          '\n  }\n'
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ::placeholder: {\n    font-size: ',
          ';\n    line-height: ',
          ';\n  };\n  :focus {\n    outline: none !important;\n    ',
          '\n  }\n'
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          ';\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  &:hover {\n    ',
          '\n  };\n  user-select: none; cursor: pointer;\n'
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n']);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = o()(['\n  ', '\n  ', '\n']);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = o()([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (A = function() {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = o()(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
        return (
          (R = function() {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = o()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = o()([
          '\n  ',
          ';\n  color: ',
          ';\n  &.active {\n    color: ',
          ';\n  }\n  :hover {\n    color: ',
          ';\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n'
        ]);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      var I = Object(s.default)(a.b)(
          N(),
          u.c.header,
          u.b.grey,
          u.b.black,
          u.b.black,
          u.f.font,
          u.f.display,
          u.f.color,
          u.f.margin
        ),
        P = s.default.div(
          x(),
          u.f.margin,
          u.f.padding,
          u.f.flex,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.width,
          u.f.height,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        S = s.default.span(
          D(),
          u.f.margin,
          u.f.padding,
          u.f.flex,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.color,
          e => (e.onClick ? 'cursor: pointer;' : '')
        ),
        C = s.default.span(
          R(),
          u.f.margin,
          u.f.padding,
          u.f.font,
          u.f.background,
          u.f.border,
          u.f.color
        ),
        B = s.default.img(
          A(),
          u.f.margin,
          u.f.height,
          u.f.width,
          u.f.padding,
          u.f.background,
          u.f.borderRadius,
          u.f.flex
        ),
        U =
          (s.default.span(j(), u.f.margin, u.f.flex),
          s.default.div(
            k(),
            u.f.margin,
            u.f.padding,
            u.f.width,
            u.e.universalBorder('bottom')
          )),
        M =
          (Object(s.default)(S)(w(), u.c.header, u.f.color),
          Object(s.default)(S)(O(), u.c.title, u.f.color, u.f.font)),
        F = Object(s.default)(S)(g(), u.c.link, u.f.color, u.f.font),
        H = Object(s.default)(S)(v(), u.c.secondaryText, u.f.font, u.f.color),
        L =
          (Object(s.default)(S)(y(), u.c.altLink, u.f.color, u.f.font),
          Object(s.default)(S)(E(), u.c.commentText, u.f.color, u.f.font),
          Object(s.default)(S)(T(), u.c.bodyStyle, u.f.color, u.f.font)),
        K = s.default.button(
          _(),
          u.e.button,
          u.e.buttonFont,
          e =>
            e.disabled
              ? '\n    color: '
                  .concat(u.b.white, ';\n    background: ')
                  .concat(u.b.grey, ';\n    ')
              : '',
          u.f.flex,
          u.f.background,
          u.f.padding,
          u.f.width,
          u.f.margin,
          u.f.color,
          u.f.width,
          u.f.height,
          u.e.activeButtonShadow
        ),
        W = Object(s.default)(S)(
          b(),
          u.c.numericalValue,
          u.f.width,
          u.f.font,
          u.f.inheritfont,
          u.f.color
        ),
        Y = s.default.input(
          h(),
          u.f.font,
          u.f.flex,
          u.f.border,
          u.f.padding,
          u.f.margin,
          Object(u.i)(1.75),
          Object(u.i)(1.75),
          u.e.universalBorder('', u.b.blue)
        ),
        X = s.default.input(
          m(),
          Object(u.i)(2),
          Object(u.i)(2),
          Object(u.i)(1),
          u.c.bodyStyle,
          u.f.font,
          u.f.flex,
          u.f.border,
          u.e.universalBorder(),
          u.f.padding,
          u.f.margin,
          Object(u.i)(1.75),
          Object(u.i)(1.75),
          u.e.universalBorder('', u.b.blue)
        ),
        V = Object(s.default)(c.a)(
          p(),
          u.c.bodyStyle,
          u.f.border,
          u.f.flex,
          u.e.universalBorder(),
          Object(u.i)(2),
          Object(u.i)(2),
          u.b.blue,
          u.f.padding,
          u.f.margin,
          u.f.height
        ),
        G = Object(s.default)(i.a)(
          f(),
          u.c.bodyStyle,
          u.f.border,
          u.f.flex,
          u.e.universalBorder(),
          Object(u.i)(2),
          Object(u.i)(2),
          u.b.blue,
          u.f.padding,
          u.f.margin,
          u.f.height
        ),
        z = s.default.form(d(), u.f.flex, u.f.margin),
        q = s.default.video(
          l(),
          u.f.margin,
          u.f.height,
          u.f.width,
          u.f.padding,
          u.f.background,
          u.f.borderRadius,
          u.f.flex
        );
    },
    './src/modules/tooltip/tooltip.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return A;
      });
      var r = n('../../node_modules/@babel/runtime/helpers/extends.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js'),
        s = n.n(a),
        u = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        i = n.n(u),
        c = n('../../node_modules/react/index.js'),
        l = n.n(c),
        d = n('../../node_modules/react-redux/es/index.js'),
        f = n('../../node_modules/prop-types/index.js'),
        p = n.n(f),
        m = n('./src/modules/styled/uni.js'),
        h = n(
          '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
        ),
        b = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        _ = n.n(b),
        T = n('../../node_modules/react-native-web/dist/exports/Dimensions/index.js'),
        E = n('./src/modules/tooltip/tooltip.actions.js');
      function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function(t) {
                _()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var g = {
        vertical: 'top',
        horizontal: 'right',
        horizontalOffset: 0,
        verticalOffset: 10
      };
      var O = n('../../node_modules/react-tooltip/dist/index.es.js');
      function w() {
        var e = i()([
          '\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  z-index: 1;\n'
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      var k = n('./public/img/info.png'),
        j = h.b.Text(w());
      function A(e) {
        var { children: t, name: n, data: r, info: a, inline: u } = e,
          i = s()(e, ['children', 'name', 'data', 'info', 'inline']);
        Object(c.useEffect)(() => {
          O.a.rebuild && O.a.rebuild();
        }, [r, n, t]),
          Object(c.useEffect)(() => r.shouldRegister && b(), [r.shouldRegister, b]);
        var f = Object(d.d)(),
          p = Object(c.useRef)(),
          { toggleTooltip: h, initTooltip: b } = (function(e) {
            var { tooltips: t, dispatch: n } = e,
              r = e => {
                t.forEach(t => {
                  t.data.desktopOnly ||
                    (t.el.current &&
                      t.el.current.measureInWindow((r, o, a, s) => {
                        var u = { x: r, y: o, w: a, h: s };
                        r + o + a + s !== 0 &&
                          (o > T.a.get('window').height - 50 ||
                            (n(
                              Object(E.b)(
                                v(v({ name: t.name, parent: u }, g), {}, { data: t.data })
                              )
                            ),
                            n(Object(E.c)(e))));
                      }));
                });
              };
            return {
              initTooltips: () => {
                t.forEach(e =>
                  e.data.desktopOnly
                    ? null
                    : n(Object(E.b)({ name: e.name, toggle: () => r(e.name) }))
                );
              },
              toggleTooltip: r
            };
          })({ tooltips: [{ name: n, el: p, data: r }], dispatch: f }),
          _ = (t && m.E) || j;
        return a
          ? l.a.createElement(
              m.B,
              { ref: p, onPress: (r.desktopOnly, null), inline: u },
              l.a.createElement(
                m.s,
                o()(
                  {
                    'data-event-off': 'click',
                    'data-place': r.position,
                    'data-for': 'mainTooltip',
                    'data-tip': JSON.stringify({ type: 'TEXT', props: r })
                  },
                  i,
                  { source: k, resizeMode: 'contain', h: 1.7, w: 1.7, inline: u },
                  i
                )
              )
            )
          : l.a.createElement(
              _,
              {
                ref: p,
                'data-event-off': 'click',
                'data-place': r.position,
                'data-for': 'mainTooltip',
                'data-tip': JSON.stringify({ type: 'TEXT', props: r }),
                onLongPress: () => h(n),
                onPress: (r.desktopOnly, null)
              },
              t
            );
      }
      A.propTypes = {
        name: p.a.string,
        data: p.a.object,
        children: p.a.object,
        info: p.a.bool,
        inline: p.a.oneOfType([p.a.bool, p.a.number])
      };
    },
    './src/modules/wallet/price.context.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PriceContext', function() {
          return _;
        }),
        n.d(t, 'exchangeLink', function() {
          return T;
        }),
        n.d(t, 'tokenEnabled', function() {
          return E;
        }),
        n.d(t, 'usePrice', function() {
          return y;
        }),
        n.d(t, 'default', function() {
          return v;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/defineProperty.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        s = n.n(a),
        u = n('../../node_modules/react/index.js'),
        i = n.n(u),
        c = n('../../node_modules/prop-types/index.js'),
        l = n.n(c),
        d = n('../../node_modules/@uniswap/sdk/dist/index.js'),
        f = n('./src/utils/numbers.js');
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function(t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var { TOKEN_ADDRESS: h, DISABLE_PRICE: b } = Object({
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
          TOKEN_ADDRESS: '0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec',
          API_SERVER: 'http://localhost:3000'
        }),
        _ = i.a.createContext(0);
      function T() {
        return 'https://uniswap.exchange/swap?theme=dark&outputCurrency='.concat(h);
      }
      function E() {
        return !!h;
      }
      function y(e, t) {
        var { price: n } = Object(u.useContext)(_);
        return n
          ? 'number' === t
            ? Object(f.abbreviateNumber)(n * e)
            : ' ($'.concat(Object(f.abbreviateNumber)(n * e, 2), ')')
          : '';
      }
      function v(e) {
        var { children: t } = e,
          [n, r] = Object(u.useReducer)(g, {
            loading: !1,
            error: !1,
            data: null,
            refresh: 0
          });
        Object(u.useEffect)(() => {
          var e = !1;
          return (
            (function() {
              var t = s()(function*() {
                if ((r({ type: 'FETCH_PRICE_INIT' }), h && !b))
                  try {
                    var t = yield Object(d.getTokenReserves)(h),
                      n = yield fetch('https://api.infura.io/v1/ticker/ethusd'),
                      o = yield n.json();
                    e ||
                      r({
                        type: 'FETCH_PRICE_SUCCESS',
                        payload: m(m({}, t), {}, { ethPrice: o.bid })
                      });
                  } catch (t) {
                    e || r({ type: 'FETCH_PRICE_ERROR', payload: t });
                  }
              });
              return function() {
                return t.apply(this, arguments);
              };
            })()(),
            setTimeout(() => {
              r({ type: 'REFRESH_PRICE' });
            }, 6e4),
            () => {
              e = !0;
            }
          );
        }, [n.refresh]);
        var o = (function(e) {
            if (!e) return null;
            var { ethReserve: t, tokenReserve: n, ethPrice: r } = e;
            if (!t || !n) return null;
            var o = t.amount.div(n.amount).times(r);
            return parseFloat(o.toString());
          })(n.data),
          a = '($'.concat(Object(f.abbreviateNumber)(o, 2), ')');
        return i.a.createElement(_.Provider, { value: { price: o, priceString: a } }, t);
      }
      v.propTypes = { children: l.a.node };
      var g = (e, t) => {
        switch (t.type) {
          case 'REFRESH_PRICE':
            return m(m({}, e), {}, { refresh: e.refresh + 1 });
          case 'FETCH_PRICE_INIT':
            return m(m({}, e), {}, { loading: !0, error: !1 });
          case 'FETCH_PRICE_SUCCESS':
            return m(m({}, e), {}, { loading: !1, error: !1, data: t.payload });
          case 'FETCH_PRICE_ERROR':
            return m(m({}, e), {}, { loading: !1, error: t.payload });
          default:
            throw new Error();
        }
      };
    },
    './src/modules/wallet/wallet.actions.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return d;
      }),
        n.d(t, 'b', function() {
          return f;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(r),
        a = n('./src/utils/eth.js'),
        s = n('./src/utils/web3.provider.js'),
        u = n('./src/utils/index.js'),
        i = n('./src/modules/auth/auth.actions.js'),
        c = n('./src/modules/wallet/earnings.actions.js'),
        l = u.a.Alert();
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return (function() {
          var n = o()(function*(n) {
            try {
              var { user: r, earning: o } = yield n(
                u.b.request({
                  method: 'POST',
                  endpoint: 'user',
                  path: '/cashOut',
                  body: JSON.stringify({ customAmount: e })
                })
              );
              n(Object(i.updateAuthUser)(r)), o && n(Object(c.addEarning)(o));
              var { amount: s, sig: d } = r.cashOut,
                f = t(s, d);
              return (
                l.alert(
                  'Claiming '.concat(parseFloat(Object(a.b)(s)), ' tokens 😄'),
                  'success'
                ),
                f
              );
            } catch (e) {
              return console.log(e), l.alert(e.message, 'error');
            }
          });
          return function(e) {
            return n.apply(this, arguments);
          };
        })();
      }
      function f(e) {
        return (function() {
          var t = o()(function*(t) {
            try {
              var n = [
                  {
                    type: 'string',
                    name: 'Message',
                    value:
                      'Connect Ethereum address to the Relevant account ' + Object(a.d)()
                  }
                ],
                r = Object(s.c)();
              yield r.currentProvider.sendAsync(
                { method: 'eth_signTypedData', params: [n, e], from: e },
                (r, a) => {
                  if (r || a.error) {
                    var s = r || a.error;
                    l.alert(s, 'error');
                  } else
                    t(
                      (function(e, t, n) {
                        return (function() {
                          var r = o()(function*(r) {
                            try {
                              var o = yield r(
                                u.b.request({
                                  method: 'PUT',
                                  endpoint: 'user',
                                  path: '/ethAddress',
                                  body: JSON.stringify({ msg: e, sig: t, acc: n })
                                })
                              );
                              return r(Object(i.updateAuthUser)(o)), !0;
                            } catch (e) {
                              return l.alert(e.message, 'error'), !1;
                            }
                          });
                          return function(e) {
                            return r.apply(this, arguments);
                          };
                        })();
                      })(n, a.result, e)
                    );
                }
              );
            } catch (e) {
              l.alert('Failed signing message: ' + e.messate, 'error');
            }
          });
          return function(e) {
            return t.apply(this, arguments);
          };
        })();
      }
    },
    './src/modules/wallet/web/cashOutModal.js': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return x;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(r),
        a = n('../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js'),
        s = n.n(a),
        u = n('../../node_modules/react/index.js'),
        i = n.n(u),
        c = n('../../node_modules/react-redux/es/index.js'),
        l = n('../../node_modules/prop-types/index.js'),
        d = n.n(l),
        f = n('./src/modules/styled/uni.js'),
        p = n('./src/modules/styled/web.js'),
        m = n('./src/modules/wallet/web/web3Warning/web3Warning.component.js'),
        h = n('./src/modules/contract/contract.hooks.js'),
        b = n('./src/modules/contract/contract.selectors.js'),
        _ = n('./src/modules/wallet/web/web3Warning/web3Warning.hooks.js'),
        T = n('./src/utils/eth.js'),
        E = n('./src/modules/wallet/wallet.actions.js'),
        y = n('./src/modules/wallet/earnings.actions.js'),
        v =
          (n('./src/modules/navigation/navigation.actions.js'),
          n(
            '../../node_modules/styled-components/primitives/dist/styled-components-primitives.esm.js'
          )),
        g = n('./src/styles/index.js'),
        O = n(
          '../../node_modules/react-native-web/dist/exports/ActivityIndicator/index.js'
        ),
        w = n('../common/lib/index.js'),
        k = n('./src/modules/tooltip/tooltip.component.js'),
        j = n('./src/modules/wallet/price.context.js'),
        A = n('./src/modules/wallet/web/cashoutFooter.js');
      function R() {
        var e = s()([
          '\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ',
          ';\n'
        ]);
        return (
          (R = function() {
            return e;
          }),
          e
        );
      }
      var D = Object(v.b)(f.E)(R(), g.b.modalBackground);
      function x(e) {
        var { close: t } = e,
          [n, , r] = Object(h.f)(),
          o = Object(c.d)(),
          a = Object(c.e)(e => e.auth.user),
          s = a.balance - (a.airdropTokens || 0),
          l = n && n[0];
        Object(h.b)();
        var d = (function(e, t) {
            var { userNonce: n } = Object(b.a)(),
              r = n && 'SUCCESS' === n.phase && Object(T.e)(n.value),
              o = e && e.cashOut && e.cashOut.nonce === r && e.cashOut,
              { call: a } = Object(h.c)();
            return (
              Object(u.useEffect)(() => {
                t && a && a('nonceOf', t);
              }, [t, a]),
              o
            );
          })(a, l),
          p = Object(_.a)({
            accounts: n,
            user: a,
            networkId: r,
            unclaimedSig: d,
            canClaim: s
          });
        return i.a.createElement(
          f.E,
          null,
          i.a.createElement(f.C, null, 'Claim Your Relevant Coins'),
          i.a.createElement(
            f.d,
            { mt: 1, mb: 4 },
            'Transfer Coins to your Ethereum Wallet'
          ),
          p
            ? i.a.createElement(m.a, {
                connectAddress: () => o(Object(E.b)(l)),
                warning: p
              })
            : i.a.createElement(N, { close: t, canClaim: s, account: l, unclaimedSig: d })
        );
      }
      function N(e) {
        var { canClaim: t, account: n, unclaimedSig: r, close: a } = e,
          [s, l] = Object(u.useState)(),
          { send: d } = Object(h.c)(),
          m = Object(c.e)(e => e.auth.user),
          b =
            'admin' === m.role
              ? Math.min(1e9, t)
              : Math.min(t, Math.max(w.CASHOUT_MAX - m.cashedOut, 0)),
          _ = r && !s ? r.amount / 1e18 : b,
          [T, v] = Object(u.useState)(_),
          R = Object(c.d)(),
          x = Object(j.usePrice)(T, 'number'),
          N = Object(j.usePrice)(b);
        Object(u.useEffect)(() => {
          r && v(r.amount / 1e18);
        }, [r]);
        var I = (function() {
            var e = o()(function*(e) {
              var t = yield R(
                Object(E.a)(e, (e, t) => d('claimTokens', { from: n }, e, t))
              );
              l(t);
            });
            return function(t) {
              return e.apply(this, arguments);
            };
          })(),
          P = Object(h.e)({
            tx: s,
            method: 'claimTokens',
            callback: () => {
              R(Object(y.updateCashoutLog)(m.cashOut.earningId)), l(null);
            }
          });
        'success' === P && a();
        return i.a.createElement(
          u.Fragment,
          null,
          r &&
            !s &&
            i.a.createElement(
              f.G,
              { mb: 2 },
              "Warning: You have not completed a previous transfer attempt, press the 'Transfer' button below to complete."
            ),
          ' ',
          i.a.createElement(
            f.E,
            { fdirection: 'row' },
            i.a.createElement(
              f.E,
              { flex: 1, mr: 1 },
              i.a.createElement(p.g, {
                mt: '0',
                flex: 1,
                type: 'number',
                onChange: e => {
                  var {
                    target: { value: t }
                  } = e;
                  return r ? T : v((e => (e < 0 ? 0 : e > b ? b : e))(t));
                },
                value: T,
                h: 6,
                fs: T ? 4 : 2,
                p: '0 1.5 0 1.5',
                fw: 'bold'
              }),
              i.a.createElement(
                f.B,
                {
                  h: 6,
                  style: { right: Object(g.i)(1), bottom: Object(g.i)(0) },
                  position: 'absolute',
                  fs: 4
                },
                '$' + x
              )
            ),
            i.a.createElement(
              f.f,
              { disabled: !T || '' === T, h: 7, mr: 'auto', onClick: () => I(T) },
              'Transfer coins to wallet'
            )
          ),
          i.a.createElement(
            f.E,
            { fdirection: 'row' },
            i.a.createElement(
              f.x,
              { mr: 2, mt: 1, onPress: () => v(b) },
              i.a.createElement(k.a, {
                data: {
                  text: 'This is the maximum amount of coins you can claim at this time.'
                }
              }),
              'Maximum claim: ',
              b,
              N,
              ' Coins'
            ),
            i.a.createElement(
              f.x,
              { mt: 1 },
              i.a.createElement(k.a, { data: { text: 'Total unclaimed coins.' } }),
              'Unclaimed: ',
              t,
              ' Coins'
            )
          ),
          i.a.createElement(A.a, null),
          'pending' === P &&
            i.a.createElement(
              D,
              { align: 'center', justify: 'center' },
              i.a.createElement(O.a, null),
              i.a.createElement(f.d, { mt: 2 }, 'Processing Transaction')
            )
        );
      }
      (x.propTypes = { close: d.a.func }),
        (N.propTypes = {
          canClaim: d.a.number,
          account: d.a.string,
          unclaimedSig: d.a.oneOfType([d.a.object, d.a.bool]),
          close: d.a.func
        });
    },
    './src/modules/wallet/web/cashoutFooter.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return d;
      });
      var r = n('../../node_modules/react/index.js'),
        o = n.n(r),
        a = n('../../node_modules/prop-types/index.js'),
        s = n.n(a),
        u = n('./src/utils/eth.js'),
        i = n('./src/utils/web3.provider.js'),
        c = n('./src/modules/contract/contract.selectors.js'),
        l = n('./src/modules/styled/uni.js');
      function d(e) {
        var { customButton: t } = e,
          n = Object(c.b)(),
          a =
            t ||
            o.a.createElement(
              l.d,
              null,
              'Connected to Ethereum ',
              Object(i.b)(n.networkId)
            ),
          s = n.accounts && n.accounts[0],
          d = s
            ? o.a.createElement(l.d, null, Object(u.g)(s))
            : o.a.createElement(l.d, null);
        return o.a.createElement(
          r.Fragment,
          null,
          o.a.createElement(l.m, { mt: 4, mb: 4 }),
          o.a.createElement(
            l.E,
            { fdirection: 'row', justify: 'space-between' },
            o.a.createElement(l.E, null, d),
            o.a.createElement(l.E, null, a)
          )
        );
      }
      d.propTypes = { customButton: s.a.node };
    },
    './src/modules/wallet/web/web3Warning/web3Warning.component.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return f;
      });
      var r = n('../../node_modules/react/index.js'),
        o = n.n(r),
        a = n('../../node_modules/prop-types/index.js'),
        s = n.n(a),
        u = n('./src/modules/styled/uni.js'),
        i = n('./src/modules/contract/contract.hooks.js'),
        c = n('./src/modules/wallet/web/cashoutFooter.js'),
        l = 'rgba(0, 0, 0, 0.05)',
        d = '#000000';
      function f(e) {
        var { connectAddress: t, warning: n } = e,
          { bg: a = l, bc: s = d } = n,
          f = Object(i.b)();
        if (!n) return null;
        var p = (() => {
            switch (n.buttonAction) {
              case 'connectMetamask':
                return () => f.enable();
              case 'getMetamask':
                return () => window.open('https://metamask.io/', '_blank');
              case 'connectAddress':
                return () => t();
              default:
                return null;
            }
          })(),
          m =
            p &&
            o.a.createElement(
              u.f,
              { disabled: n.disabled, mr: 'auto', onClick: p },
              n.buttonText
            );
        return o.a.createElement(
          r.Fragment,
          null,
          o.a.createElement(
            u.E,
            { mt: 2, p: 2, id: n.id, bg: a, border: !0, bc: s },
            o.a.createElement(u.C, null, n.title),
            o.a.createElement(u.d, { mt: 1 }, n.message)
          ),
          o.a.createElement(c.a, { customButton: m })
        );
      }
      f.propTypes = {
        connectAddress: s.a.func,
        warning: s.a.oneOfType([s.a.object, s.a.func])
      };
    },
    './src/modules/wallet/web/web3Warning/web3Warning.hooks.js': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return b;
      });
      var r = n('../../node_modules/react/index.js'),
        o = n.n(r),
        a = n('./src/modules/contract/contract.hooks.js'),
        s = n('../common/lib/index.js'),
        u = n('./src/modules/styled/uni.js'),
        i = n('./src/modules/navigation/ULink.component.js'),
        c = n('./src/utils/eth.js'),
        l = n('./src/styles/index.js'),
        d = {
          id: 1,
          title: 'No Ethereum wallet found',
          message: o.a.createElement(
            u.B,
            { inline: 1 },
            'You will need to install an Ethereum wallet, like',
            ' ',
            o.a.createElement(
              i.a,
              { to: 'https://metamask.io/', external: !0, target: '_blank' },
              'Metamask'
            ),
            ' ',
            'in order to claim your coins.',
            '\n\n',
            '*Note: you will also need to purchace a small amount of Ethereum in order to pay for the transaction.'
          ),
          bc: l.b.error,
          bg: l.b.errorA,
          buttonText: 'Get Metamask',
          buttonAction: 'getMetamask'
        },
        f = {
          id: 2,
          title: 'Connect Relevant to Metamask',
          message:
            "We'll need to connect your Metamask account before you can transfer coins. Connecting your Metamask to Relevant is not a transaction and totally free.",
          buttonText: 'Connect Account',
          buttonAction: 'connectAddress',
          bc: l.b.warning,
          bg: l.b.warningA
        },
        p = {
          id: 3,
          title: 'Use Metamask to switch Ethereum networks',
          message: 'Please connect to Ethereum Mainnet.',
          buttonText: 'Switch Networks',
          disabled: !0,
          bc: l.b.error,
          bg: l.b.errorA
        },
        m =
          ('Your current balance is too low, you need to earn more than '.concat(
            s.CASHOUT_LIMIT,
            ' coins in order to be able to cash out.'
          ),
          l.b.warning,
          l.b.warningA,
          {
            id: 1,
            title: 'Log into Metamask and Connect it to Relevant',
            message:
              'Make sure you are logged into Metamask and have connected it to Relevant',
            bc: l.b.warning,
            bg: l.b.warningA,
            buttonText: 'Connect Metamask',
            buttonAction: 'connectMetamask'
          }),
        h = n('./src/core/config.js'),
        b = e => {
          var { accounts: t, user: n, networkId: o, canClaim: s } = e,
            [u, i] = Object(r.useState)(),
            b = Object(a.b)();
          return (
            Object(r.useEffect)(() => {
              i(
                b
                  ? b && !(e => e && e[0])(t)
                    ? m
                    : (e => e && e === h.d)(o)
                    ? (e => e.ethAddress && e.ethAddress[0])(n)
                      ? ((e, t) => e.ethAddress[0].toLowerCase() === t[0].toLowerCase())(
                          n,
                          t
                        )
                        ? null
                        : (function() {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : '0x..';
                            return {
                              id: 4,
                              title: 'Account mismatch (wanted: '.concat(
                                Object(c.g)(e),
                                ')'
                              ),
                              message: 'Your connected wallet address is different from the address linked to your Relevant account. Please select account '.concat(
                                Object(c.g)(e),
                                ' in Metamask. Alternately you can connect a new account address to Relevant.'
                              ),
                              buttonText: 'Connect Current Account to Relevant',
                              buttonAction: 'connectAddress',
                              bc: l.b.warning,
                              bg: l.b.warningA
                            };
                          })(n.ethAddress[0])
                      : f
                    : p
                  : d
              );
            }, [t, n.ethAddress, o, n, s, b]),
            u
          );
        };
    },
    './src/utils/eth.js': function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return u;
      }),
        n.d(t, 'g', function() {
          return c;
        }),
        n.d(t, 'e', function() {
          return l;
        }),
        n.d(t, 'a', function() {
          return d;
        }),
        n.d(t, 'd', function() {
          return f;
        }),
        n.d(t, 'b', function() {
          return p;
        }),
        n.d(t, 'c', function() {
          return m;
        });
      var r = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        o = n.n(r),
        a = n('../../node_modules/crypto-browserify/index.js'),
        s = n.n(a);
      function u(e, t) {
        return i.apply(this, arguments);
      }
      function i() {
        return (i = o()(function*(e, t) {
          var n = e.getSigner(),
            r = new Date(),
            o = { address: t, exp: Math.floor(r.setMinutes(r.getMinutes() + 5) / 1e3) };
          return { msg: o, signature: yield n.signMessage(JSON.stringify(o)) };
        })).apply(this, arguments);
      }
      function c(e) {
        return e ? e.slice(0, 6) + '...' + e.slice(e.length - 4, e.length) : null;
      }
      function l(e) {
        return e && e.get
          ? (function(e) {
              var t = e.get('_hex');
              if ('0x00' === t) return 0;
              return d(t, 18);
            })(e)
          : e;
      }
      function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
          n = Number(e).toString();
        if ('+' === n[n.length - 3]) {
          var r = b(n, t),
            o = Number(h(n) + r);
          return Number.parseFloat(o).toFixed(0);
        }
        return n.length > 18
          ? Number(n.slice(0, -18))
          : 18 === n.length
          ? Number('0.'.concat(n))
          : Number(n);
      }
      function f() {
        return s.a.randomBytes(16).toString('hex');
      }
      function p(e) {
        return ''.concat(e.slice(0, -18), '.').concat(e.slice(-18));
      }
      function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return (e * 10 ** t).toString();
      }
      function h(e) {
        return e.slice(0, -2).toString();
      }
      function b(e, t) {
        return Number(Number(e.slice(-2)) - t).toString();
      }
    },
    './src/utils/web3.provider.js': function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return l;
      }),
        n.d(t, 'a', function() {
          return d;
        }),
        n.d(t, 'c', function() {
          return f;
        }),
        n.d(t, 'd', function() {
          return m;
        });
      var r,
        o,
        a,
        s = n('../../node_modules/web3/dist/web3.min.js'),
        u = n.n(s),
        i = n('./src/core/config.js'),
        c = { rpcUrl: m(), metamask: null };
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
          a ||
          (a = 'undefined' != typeof window && window.ethereum ? window.ethereum : null)
        );
      }
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        return e.metamask || e.rpcUrl !== c.rpcUrl ? p(e) : r || p();
      }
      function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
          t = h(e);
        return (r = new u.a(t));
      }
      function m() {
        return (
          o ||
          (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.c,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.b,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a;
            return (o = ''
              .concat(e, 's://')
              .concat(t, '.infura.io/')
              .concat('ws' === e ? 'ws/' : '', 'v3/')
              .concat(n));
          })()
        );
      }
      function h() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        return e.metamask
          ? e.metamask
          : 'ws' === e.rpcUrl.slice(0, 2)
          ? new u.a.providers.WebsocketProvider(e.rpcUrl)
          : new u.a.providers.HttpProvider(e.rpcUrl);
      }
    },
    4: function(e, t) {},
    5: function(e, t) {},
    6: function(e, t) {},
    7: function(e, t) {}
  }
]);
//# sourceMappingURL=23.bundle.js.map