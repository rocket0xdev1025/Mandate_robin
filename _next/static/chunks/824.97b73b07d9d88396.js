"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [824],
  {
    525: (e) => {
      var a = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        s = /\n/g,
        l = /^\s*/,
        n = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        d = /^:\s*/,
        t = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        o = /^[;\s]*/,
        c = /^\s+|\s+$/g;
      function i(e) {
        return e ? e.replace(c, "") : "";
      }
      e.exports = function (e, c) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        c = c || {};
        var r = 1,
          b = 1;
        function f(e) {
          var a = e.match(s);
          a && (r += a.length);
          var l = e.lastIndexOf("\n");
          b = ~l ? e.length - l : b + e.length;
        }
        function m() {
          var e = { line: r, column: b };
          return function (a) {
            return (a.position = new E(e)), D(l), a;
          };
        }
        function E(e) {
          (this.start = e),
            (this.end = { line: r, column: b }),
            (this.source = c.source);
        }
        function u(a) {
          var s = Error(c.source + ":" + r + ":" + b + ": " + a);
          if (
            ((s.reason = a),
            (s.filename = c.source),
            (s.line = r),
            (s.column = b),
            (s.source = e),
            c.silent)
          );
          else throw s;
        }
        function D(a) {
          var s = a.exec(e);
          if (s) {
            var l = s[0];
            return f(l), (e = e.slice(l.length)), s;
          }
        }
        function A(e) {
          var a;
          for (e = e || []; (a = I()); ) !1 !== a && e.push(a);
          return e;
        }
        function I() {
          var a = m();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var s = 2;
              "" != e.charAt(s) &&
              ("*" != e.charAt(s) || "/" != e.charAt(s + 1));

            )
              ++s;
            if (((s += 2), "" === e.charAt(s - 1)))
              return u("End of comment missing");
            var l = e.slice(2, s - 2);
            return (
              (b += 2),
              f(l),
              (e = e.slice(s)),
              (b += 2),
              a({ type: "comment", comment: l })
            );
          }
        }
        (E.prototype.content = e), D(l);
        var T,
          p = [];
        for (
          A(p);
          (T = (function () {
            var e = m(),
              s = D(n);
            if (s) {
              if ((I(), !D(d))) return u("property missing ':'");
              var l = D(t),
                c = e({
                  type: "declaration",
                  property: i(s[0].replace(a, "")),
                  value: l ? i(l[0].replace(a, "")) : "",
                });
              return D(o), c;
            }
          })());

        )
          !1 !== T && (p.push(T), A(p));
        return p;
      };
    },
    784: (e, a, s) => {
      s.d(a, { S: () => n });
      var l = s(6299);
      function n(e) {
        return null === e || (0, l.Ee)(e) || (0, l.Ny)(e)
          ? 1
          : (0, l.es)(e)
          ? 2
          : void 0;
      }
    },
    1012: (e, a, s) => {
      s.d(a, { nU: () => n.nU, J1: () => F });
      var l = s(9594),
        n = s(6318);
      let d = [
          {
            chainId: 42161,
            expiry: "2025-11-20T00:00:00.000Z",
            address: "0x43023675c804a759cbf900da83dbcc97ee2afbe7",
            symbol: "PT-sUSDai-20NOV2025",
            pt: {
              address: "0x936f210d277bf489a3211cef9ab4bc47a7b69c96",
              symbol: "PT-sUSDai-20NOV2025",
              name: "PT-sUSDai-20NOV2025",
              decimals: 18,
            },
            yt: {
              address: "0x8dc95c58a25a0e0e041d5fa715a2bdcb3d74ac1a",
              symbol: "YT-sUSDai-20NOV2025",
              name: "YT-sUSDai-20NOV2025",
              decimals: 18,
            },
            lp: {
              address: "0x43023675c804a759cbf900da83dbcc97ee2afbe7",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x0b2b2b2076d95dda7817e785989fe353fe955ef9",
              symbol: "sUSDai",
              name: "sUSDai",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-11-27T00:00:00.000Z",
            address: "0x4ed09847377c30aa4e74ad071e719c5814ad9ead",
            symbol: "PT-thBILL-27NOV2025",
            pt: {
              address: "0x5a791652f3b140d357df072d355a98ab754877d1",
              symbol: "PT-thBILL-27NOV2025",
              name: "PT-thBILL-27NOV2025",
              decimals: 6,
            },
            yt: {
              address: "0x2133a087017870ec20f82d097603d6cd29d160c7",
              symbol: "YT-thBILL-27NOV2025",
              name: "YT-thBILL-27NOV2025",
              decimals: 6,
            },
            lp: {
              address: "0x4ed09847377c30aa4e74ad071e719c5814ad9ead",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a",
              symbol: "thBILL",
              name: "thBILL",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-11-20T00:00:00.000Z",
            address: "0x8e101c690390de722163d4dc3f76043bebbbcadd",
            symbol: "PT-USDai-20NOV2025",
            pt: {
              address: "0x8b4ca42bb3b1d789859f106222cf7dc5eed48ccb",
              symbol: "PT-USDai-20NOV2025",
              name: "PT-USDai-20NOV2025",
              decimals: 18,
            },
            yt: {
              address: "0xa55e2f0a15295f4f4290d7dfcc3f6ebd2e4edcb8",
              symbol: "YT-USDai-20NOV2025",
              name: "YT-USDai-20NOV2025",
              decimals: 18,
            },
            lp: {
              address: "0x8e101c690390de722163d4dc3f76043bebbbcadd",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x0a1a1a107e45b7ced86833863f482bc5f4ed82ef",
              symbol: "USDai",
              name: "USDai",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-03-26T00:00:00.000Z",
            address: "0x44688047c0a8bab55bf0b19f9d47d567b2c3319f",
            symbol: "PT-stk-EPendle-26MAR2026",
            pt: {
              address: "0x93de1a69319972412b956de5fc18128cf82c6bd7",
              symbol: "PT-stk-EPendle-26MAR2026",
              name: "PT-stk-EPendle-26MAR2026",
              decimals: 18,
            },
            yt: {
              address: "0xc2e67813e097eae987b837f6fea8cfbfc6834fa8",
              symbol: "YT-stk-EPendle-26MAR2026",
              name: "YT-stk-EPendle-26MAR2026",
              decimals: 18,
            },
            lp: {
              address: "0x44688047c0a8bab55bf0b19f9d47d567b2c3319f",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x37227785a1f4545ed914690e395e4cfe96b8319f",
              symbol: "stk-ePendle",
              name: "stk-ePendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-06-25T00:00:00.000Z",
            address: "0x46d62a8dede1bf2d0de04f2ed863245cbba5e538",
            symbol: "PT-weETH-25JUN2026",
            pt: {
              address: "0xab7f3837e6e721abbc826927b655180af6a04388",
              symbol: "PT-weETH-25JUN2026",
              name: "PT-weETH-25JUN2026",
              decimals: 18,
            },
            yt: {
              address: "0xff9826c358a822d00187b487c349bc5e7f30788a",
              symbol: "YT-weETH-25JUN2026",
              name: "YT-weETH-25JUN2026",
              decimals: 18,
            },
            lp: {
              address: "0x46d62a8dede1bf2d0de04f2ed863245cbba5e538",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
              symbol: "weETH",
              name: "weETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-03-26T00:00:00.000Z",
            address: "0xc24ffebd4fdba787df94f5089f0fabc252116ab7",
            symbol: "PT-mPendle-26MAR2026",
            pt: {
              address: "0x2dbe53408613bef23597be94c1fd453ac0147575",
              symbol: "PT-mPendle-26MAR2026",
              name: "PT-mPendle-26MAR2026",
              decimals: 18,
            },
            yt: {
              address: "0xa71edfc2554b93c8f2303440be37248b6b909d3a",
              symbol: "YT-mPendle-26MAR2026",
              name: "YT-mPendle-26MAR2026",
              decimals: 18,
            },
            lp: {
              address: "0xc24ffebd4fdba787df94f5089f0fabc252116ab7",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xb688ba096b7bb75d7841e47163cd12d18b36a5bf",
              symbol: "mPendle",
              name: "mPendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-12-18T00:00:00.000Z",
            address: "0x18ffb61c6d223bd91ec15acc248bb7e670abcc48",
            symbol: "PT-gUSDC-18DEC2025",
            pt: {
              address: "0x247f150c90c9eeb7d733219bfa36d189c76d5ec5",
              symbol: "PT-gUSDC-18DEC2025",
              name: "PT-gUSDC-18DEC2025",
              decimals: 6,
            },
            yt: {
              address: "0x59e4e0fe7981e31eb1283ff9adc5f851fe9a216d",
              symbol: "YT-gUSDC-18DEC2025",
              name: "YT-gUSDC-18DEC2025",
              decimals: 6,
            },
            lp: {
              address: "0x18ffb61c6d223bd91ec15acc248bb7e670abcc48",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xd3443ee1e91af28e5fb858fbd0d72a63ba8046e0",
              symbol: "gUSDC",
              name: "gUSDC",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-06-25T00:00:00.000Z",
            address: "0x7b8aec3d1986b4becbf1c651ff6a953cc0117b05",
            symbol: "PT-uniETH-25JUN2026",
            pt: {
              address: "0xd8d5fbbaad1e80aa0352b2029a594caeff6cf1ec",
              symbol: "PT-uniETH-25JUN2026",
              name: "PT-uniETH-25JUN2026",
              decimals: 18,
            },
            yt: {
              address: "0x0fb95ec4086b3007c894ad78703bc634150a1d50",
              symbol: "YT-uniETH-25JUN2026",
              name: "YT-uniETH-25JUN2026",
              decimals: 18,
            },
            lp: {
              address: "0x7b8aec3d1986b4becbf1c651ff6a953cc0117b05",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x3d15fd46ce9e551498328b1c83071d9509e2c3a0",
              symbol: "uniETH",
              name: "uniETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-06-25T00:00:00.000Z",
            address: "0xf78452e0f5c0b95fc5dc8353b8cd1e06e53fa25b",
            symbol: "PT-wstETH-25JUN2026",
            pt: {
              address: "0x71fbf40651e9d4278a74586afc99f307f369ce9a",
              symbol: "PT-wstETH-25JUN2026",
              name: "PT-wstETH-25JUN2026",
              decimals: 18,
            },
            yt: {
              address: "0x25bda1edd6af17c61399aa0eb84b93daa3069764",
              symbol: "YT-wstETH-25JUN2026",
              name: "YT-wstETH-25JUN2026",
              decimals: 18,
            },
            lp: {
              address: "0xf78452e0f5c0b95fc5dc8353b8cd1e06e53fa25b",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5979d7b546e38e414f7e9822514be443a4800529",
              symbol: "wstETH",
              name: "wstETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-12-11T00:00:00.000Z",
            address: "0xf1700fc22beff50dedc9f18925aabf55a2d2db2b",
            symbol: "PT-USDe-11DEC2025",
            pt: {
              address: "0xf9921bc1837a97b8f853c83521122c3fbf3f365f",
              symbol: "PT-USDe-11DEC2025",
              name: "PT-USDe-11DEC2025",
              decimals: 18,
            },
            yt: {
              address: "0xa4810b1d4b2513f59939b0ee32b7681fe230ef5f",
              symbol: "YT-USDe-11DEC2025",
              name: "YT-USDe-11DEC2025",
              decimals: 18,
            },
            lp: {
              address: "0xf1700fc22beff50dedc9f18925aabf55a2d2db2b",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
              symbol: "USDe",
              name: "USDe",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-06-25T00:00:00.000Z",
            address: "0x4137709907f3319134438fd9c1539a307ec0a1a5",
            symbol: "PT-rsETH-25JUN2026",
            pt: {
              address: "0xc9bfc3afd592cc5a3305aec09aaaa6b9bb4c12d0",
              symbol: "PT-rsETH-25JUN2026",
              name: "PT-rsETH-25JUN2026",
              decimals: 18,
            },
            yt: {
              address: "0x213a3822378a92bfb65b3bbfdf0197113647df69",
              symbol: "YT-rsETH-25JUN2026",
              name: "YT-rsETH-25JUN2026",
              decimals: 18,
            },
            lp: {
              address: "0x4137709907f3319134438fd9c1539a307ec0a1a5",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
              symbol: "rsETH",
              name: "rsETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-01-29T00:00:00.000Z",
            address: "0x358925d171380e05b12036a2bf7051704cb85fab",
            symbol: "PT-GM-ETHUSD-29JAN2026",
            pt: {
              address: "0xc3869d889fdf0d6e0a2df0992e46027405701890",
              symbol: "PT-GM-ETHUSD-29JAN2026",
              name: "PT-GM-ETHUSD-29JAN2026",
              decimals: 18,
            },
            yt: {
              address: "0x950a0875b67c716c64a4ff13fb5ef818e02286ec",
              symbol: "YT-GM-ETHUSD-29JAN2026",
              name: "YT-GM-ETHUSD-29JAN2026",
              decimals: 18,
            },
            lp: {
              address: "0x358925d171380e05b12036a2bf7051704cb85fab",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x450bb6774dd8a756274e0ab4107953259d2ac541",
              symbol: "GM",
              name: "GM",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-12-18T00:00:00.000Z",
            address: "0xd6d4648a192c5179b4175e0e431822b64aedf6fc",
            symbol: "PT-dUSDC-18DEC2025",
            pt: {
              address: "0x8d2860d69f95a529baec8ceec8be2c6e62b9874b",
              symbol: "PT-dUSDC-18DEC2025",
              name: "PT-dUSDC-18DEC2025",
              decimals: 6,
            },
            yt: {
              address: "0x24f49a62bcb867639a058120afe4053267991e08",
              symbol: "YT-dUSDC-18DEC2025",
              name: "YT-dUSDC-18DEC2025",
              decimals: 6,
            },
            lp: {
              address: "0xd6d4648a192c5179b4175e0e431822b64aedf6fc",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x6dbd962b4f62d18f756b5de57425574c4b8228d6",
              symbol: "dUSDC",
              name: "dUSDC",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-01-29T00:00:00.000Z",
            address: "0xae4116499f20f27f82524363c5d5529fa24fdf10",
            symbol: "PT-syrupUSDC-29JAN2026",
            pt: {
              address: "0x1ef58a7af39883cc95c59a2c106b726c64c2ecc6",
              symbol: "PT-syrupUSDC-29JAN2026",
              name: "PT-syrupUSDC-29JAN2026",
              decimals: 6,
            },
            yt: {
              address: "0x3746743b546e7d2caf2c59cb44159414d2faa42d",
              symbol: "YT-syrupUSDC-29JAN2026",
              name: "YT-syrupUSDC-29JAN2026",
              decimals: 6,
            },
            lp: {
              address: "0xae4116499f20f27f82524363c5d5529fa24fdf10",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x41ca7586cc1311807b4605fbb748a3b8862b42b5",
              symbol: "syrupUSDC",
              name: "syrupUSDC",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-06-25T00:00:00.000Z",
            address: "0xd7eac6c9109d8c3977ebce4e7dbf0a5a9532e240",
            symbol: "PT-rETH-25JUN2026",
            pt: {
              address: "0x3362c1265a0522f321253708c9fb176f2274fa8d",
              symbol: "PT-rETH-25JUN2026",
              name: "PT-rETH-25JUN2026",
              decimals: 18,
            },
            yt: {
              address: "0xe03c236ca6f07755ad631a42dd5d60e293b1bf71",
              symbol: "YT-rETH-25JUN2026",
              name: "YT-rETH-25JUN2026",
              decimals: 18,
            },
            lp: {
              address: "0xd7eac6c9109d8c3977ebce4e7dbf0a5a9532e240",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8",
              symbol: "rETH",
              name: "rETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-01-29T00:00:00.000Z",
            address: "0x573813d3f0bfaf847a04ef12739be4e38675b3c7",
            symbol: "PT-RLP-29JAN2026",
            pt: {
              address: "0x6a7f876141b776c9df43697af16c916c1ca26bf1",
              symbol: "PT-RLP-29JAN2026",
              name: "PT-RLP-29JAN2026",
              decimals: 6,
            },
            yt: {
              address: "0x2b1fd950f3362b3b79f16770c0c38b9d2bc6276e",
              symbol: "YT-RLP-29JAN2026",
              name: "YT-RLP-29JAN2026",
              decimals: 6,
            },
            lp: {
              address: "0x573813d3f0bfaf847a04ef12739be4e38675b3c7",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x35e5db674d8e93a03d814fa0ada70731efe8a4b9",
              symbol: "RLP",
              name: "RLP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-09-25T00:00:00.000Z",
            address: "0x4e77520688601ceb5d4bbd217763640a689956cd",
            symbol: "PT-mPendle-25SEP2025",
            pt: {
              address: "0x34471c8c618f520dd21fe6bccfe58f0650c09fda",
              symbol: "PT-mPendle-25SEP2025",
              name: "PT-mPendle-25SEP2025",
              decimals: 18,
            },
            yt: {
              address: "0x2eb3c394e7985ba29af2ad4cbde38c06088e3d47",
              symbol: "YT-mPendle-25SEP2025",
              name: "YT-mPendle-25SEP2025",
              decimals: 18,
            },
            lp: {
              address: "0x4e77520688601ceb5d4bbd217763640a689956cd",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xb688ba096b7bb75d7841e47163cd12d18b36a5bf",
              symbol: "mPendle",
              name: "mPendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x08a152834de126d2ef83d612ff36e4523fd0017f",
            symbol: "PT-wstETH-26JUN2025",
            pt: {
              address: "0x1255638efeca62e12e344e0b6b22ea853ec6e2c7",
              symbol: "PT-wstETH-26JUN2025",
              name: "PT-wstETH-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0xc8d9369809e48d03ff7b69d7979b174e2d34874c",
              symbol: "YT-wstETH-26JUN2025",
              name: "YT-wstETH-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0x08a152834de126d2ef83d612ff36e4523fd0017f",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5979d7b546e38e414f7e9822514be443a4800529",
              symbol: "wstETH",
              name: "wstETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-12-18T00:00:00.000Z",
            address: "0x0ec0abdd2245cd94a054483ccce50a38ac93eb1b",
            symbol: "PT-dWBTC-18DEC2025",
            pt: {
              address: "0x21647c54fec3f0a7c549a4b1d1b16c6cc6fc066a",
              symbol: "PT-dWBTC-18DEC2025",
              name: "PT-dWBTC-18DEC2025",
              decimals: 18,
            },
            yt: {
              address: "0xb178ddf95eb08933583908f17bc522bb9a694bfd",
              symbol: "YT-dWBTC-18DEC2025",
              name: "YT-dWBTC-18DEC2025",
              decimals: 18,
            },
            lp: {
              address: "0x0ec0abdd2245cd94a054483ccce50a38ac93eb1b",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x29cf6e8ecefb8d3c9dd2b727c1b7d1df1a754f6f",
              symbol: "dWBTC",
              name: "dWBTC",
              decimals: 8,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-09-25T00:00:00.000Z",
            address: "0x4bc4de56f1a0fe6980c9b03a56a8a28c4bf1fdc2",
            symbol: "PT-stk-EPendle-25SEP2025",
            pt: {
              address: "0x026965f328c238dc3f47d5cb479a0d3ed8bc6b04",
              symbol: "PT-stk-EPendle-25SEP2025",
              name: "PT-stk-EPendle-25SEP2025",
              decimals: 18,
            },
            yt: {
              address: "0xb78cabaec194ee67236fb3aeb919de0fb82e826d",
              symbol: "YT-stk-EPendle-25SEP2025",
              name: "YT-stk-EPendle-25SEP2025",
              decimals: 18,
            },
            lp: {
              address: "0x4bc4de56f1a0fe6980c9b03a56a8a28c4bf1fdc2",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x37227785a1f4545ed914690e395e4cfe96b8319f",
              symbol: "stk-ePendle",
              name: "stk-ePendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0xbf5e60ddf654085f80dae9dd33ec0e345773e1f8",
            symbol: "PT-weETH-26JUN2025",
            pt: {
              address: "0xb33808ea0e883138680ba29311a220a7377cdb92",
              symbol: "PT-weETH-26JUN2025",
              name: "PT-weETH-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0xcf1699a84f9eac75e049ca8134c602ce24509db6",
              symbol: "YT-weETH-26JUN2025",
              name: "YT-weETH-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0xbf5e60ddf654085f80dae9dd33ec0e345773e1f8",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
              symbol: "weETH",
              name: "weETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0x35f3db08a6e9cb4391348b0b404f493e7ae264c0",
            symbol: "PT-ezETH-26SEP2024",
            pt: {
              address: "0x2ccfce9be49465cc6f947b5f6ac9383673733da9",
              symbol: "PT-ezETH-26SEP2024",
              name: "PT-ezETH-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0xe58afaa6e2abf9a9f243d5a55bd5447628c4d811",
              symbol: "YT-ezETH-26SEP2024",
              name: "YT-ezETH-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0x35f3db08a6e9cb4391348b0b404f493e7ae264c0",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x2416092f143378750bb29b79ed961ab195cceea5",
              symbol: "ezETH",
              name: "ezETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-04-25T00:00:00.000Z",
            address: "0xe11f9786b06438456b044b3e21712228adcaa0d1",
            symbol: "PT-weETH-25APR2024",
            pt: {
              address: "0x9becd6b4fb076348a455518aea23d3799361fe95",
              symbol: "PT-weETH-25APR2024",
              name: "PT-weETH-25APR2024",
              decimals: 18,
            },
            yt: {
              address: "0xf28db483773e3616da91fdfa7b5d4090ac40cc59",
              symbol: "YT-weETH-25APR2024",
              name: "YT-weETH-25APR2024",
              decimals: 18,
            },
            lp: {
              address: "0xe11f9786b06438456b044b3e21712228adcaa0d1",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
              symbol: "weETH",
              name: "weETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-08-29T00:00:00.000Z",
            address: "0x2dfaf9a5e4f293bceede49f2dba29aacdd88e0c4",
            symbol: "PT-USDe-29AUG2024",
            pt: {
              address: "0xad853eb4fb3fe4a66cdfcd7b75922a0494955292",
              symbol: "PT-USDe-29AUG2024",
              name: "PT-USDe-29AUG2024",
              decimals: 18,
            },
            yt: {
              address: "0xf478f7feaeab0dfdc91e02cdd6c63c66e30a7335",
              symbol: "YT-USDe-29AUG2024",
              name: "YT-USDe-29AUG2024",
              decimals: 18,
            },
            lp: {
              address: "0x2dfaf9a5e4f293bceede49f2dba29aacdd88e0c4",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
              symbol: "USDe",
              name: "USDe",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0xf1de71573ee482f13ae4dcf980e83bfaba8b233d",
            symbol: "PT-MUXLP-26JUN2025",
            pt: {
              address: "0x9d8eadeb4e7311e340a5ee39dbf62d7694f1aa85",
              symbol: "PT-MUXLP-26JUN2025",
              name: "PT-MUXLP-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0xa661223676633a701b3d1e51bd8c47e2da07c1f6",
              symbol: "YT-MUXLP-26JUN2025",
              name: "YT-MUXLP-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0xf1de71573ee482f13ae4dcf980e83bfaba8b233d",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x7cbaf5a14d953ff896e5b3312031515c858737c8",
              symbol: "MUXLP",
              name: "MUXLP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2023-12-28T00:00:00.000Z",
            address: "0xc8fd1f1e059d97ec71ae566dd6ca788dc92f36af",
            symbol: "PT-wstETH-28DEC2023",
            pt: {
              address: "0xbb33e51bdc598d710ff59fdf523e80ab7c882c83",
              symbol: "PT-wstETH-28DEC2023",
              name: "PT-wstETH-28DEC2023",
              decimals: 18,
            },
            yt: {
              address: "0x722a6031d5976fc61fa952a02160406960969927",
              symbol: "YT-wstETH-28DEC2023",
              name: "YT-wstETH-28DEC2023",
              decimals: 18,
            },
            lp: {
              address: "0xc8fd1f1e059d97ec71ae566dd6ca788dc92f36af",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5979d7b546e38e414f7e9822514be443a4800529",
              symbol: "wstETH",
              name: "wstETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x5e03c94fc5fb2e21882000a96df0b63d2c4312e2",
            symbol: "PT-ezETH-27JUN2024",
            pt: {
              address: "0x8ea5040d423410f1fdc363379af88e1db5ea1c34",
              symbol: "PT-ezETH-27JUN2024",
              name: "PT-ezETH-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0x05735b65686635f5c87aa9d2dae494fb2e838f38",
              symbol: "YT-ezETH-27JUN2024",
              name: "YT-ezETH-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0x5e03c94fc5fb2e21882000a96df0b63d2c4312e2",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x2416092f143378750bb29b79ed961ab195cceea5",
              symbol: "ezETH",
              name: "ezETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x14fbc760efaf36781cb0eb3cb255ad976117b9bd",
            symbol: "PT-rETH-26JUN2025",
            pt: {
              address: "0x685155d3bd593508fe32be39729810a591ed9c87",
              symbol: "PT-rETH-26JUN2025",
              name: "PT-rETH-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0xe822ae44eb2466b4e263b1cbc94b4833ddef9700",
              symbol: "YT-rETH-26JUN2025",
              name: "YT-rETH-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0x14fbc760efaf36781cb0eb3cb255ad976117b9bd",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8",
              symbol: "rETH",
              name: "rETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x0a21291a184cf36ad3b0a0def4a17c12cbd66a14",
            symbol: "PT-Stargate USDT-27JUN2024",
            pt: {
              address: "0x7d180a4f451fc15b543b5d1ba7dda6b3014a4c49",
              symbol: "PT-Stargate USDT-27JUN2024",
              name: "PT-Stargate USDT-27JUN2024",
              decimals: 6,
            },
            yt: {
              address: "0x0aded315d2e51f676a2aa8d2bc6a79c88e0f1c1a",
              symbol: "YT-Stargate USDT-27JUN2024",
              name: "YT-Stargate USDT-27JUN2024",
              decimals: 6,
            },
            lp: {
              address: "0x0a21291a184cf36ad3b0a0def4a17c12cbd66a14",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xb6cfcf89a7b22988bfc96632ac2a9d6dab60d641",
              symbol: "S*USDT",
              name: "S*USDT",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-01-29T00:00:00.000Z",
            address: "0x6dd74def62c5877d7b3e1748f3bfa7d2646e41dc",
            symbol: "PT-wstUSR-29JAN2026",
            pt: {
              address: "0xd34f5c82490d1aab7a6f66d338c06d791a36b6e9",
              symbol: "PT-wstUSR-29JAN2026",
              name: "PT-wstUSR-29JAN2026",
              decimals: 18,
            },
            yt: {
              address: "0x1a4e2416aecbaff968797228d9aa6109fa1b814a",
              symbol: "YT-wstUSR-29JAN2026",
              name: "YT-wstUSR-29JAN2026",
              decimals: 18,
            },
            lp: {
              address: "0x6dd74def62c5877d7b3e1748f3bfa7d2646e41dc",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x66cfbd79257dc5217903a36293120282548e2254",
              symbol: "wstUSR",
              name: "wstUSR",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0xfd8aee8fcc10aac1897f8d5271d112810c79e022",
            symbol: "PT-wstETH-27JUN2024",
            pt: {
              address: "0x9741cac1a22ff3615fa074fd0b439975a5e137e9",
              symbol: "PT-wstETH-27JUN2024",
              name: "PT-wstETH-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0x0052b6096f8c1dcbefb9ba381eb6b67479b5c56b",
              symbol: "YT-wstETH-27JUN2024",
              name: "YT-wstETH-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0xfd8aee8fcc10aac1897f8d5271d112810c79e022",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5979d7b546e38e414f7e9822514be443a4800529",
              symbol: "wstETH",
              name: "wstETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-04-25T00:00:00.000Z",
            address: "0x6f02c88650837c8dfe89f66723c4743e9cf833cd",
            symbol: "PT-rsETH-25APR2024",
            pt: {
              address: "0x8d164e0c662c9e199baac9e97b6a8664c75700ea",
              symbol: "PT-rsETH-25APR2024",
              name: "PT-rsETH-25APR2024",
              decimals: 18,
            },
            yt: {
              address: "0x28df0f193d8e45073bc1db6f2347812c031ba818",
              symbol: "YT-rsETH-25APR2024",
              name: "YT-rsETH-25APR2024",
              decimals: 18,
            },
            lp: {
              address: "0x6f02c88650837c8dfe89f66723c4743e9cf833cd",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
              symbol: "rsETH",
              name: "rsETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0xf617792ea9dceb2208f4c440258b21d2f3fdb9a3",
            symbol: "PT-mPendle-26SEP2024",
            pt: {
              address: "0xad22fca714559da1eb25fb24443b0446b54246fc",
              symbol: "PT-mPendle-26SEP2024",
              name: "PT-mPendle-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0x9dbd1fc6d2731ebd42a5e5b8e268bfa7c68980ae",
              symbol: "YT-mPendle-26SEP2024",
              name: "YT-mPendle-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0xf617792ea9dceb2208f4c440258b21d2f3fdb9a3",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xb688ba096b7bb75d7841e47163cd12d18b36a5bf",
              symbol: "mPendle",
              name: "mPendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x952083cde7aaa11ab8449057f7de23a970aa8472",
            symbol: "PT-weETH-27JUN2024",
            pt: {
              address: "0x1c27ad8a19ba026adabd615f6bc77158130cfbe4",
              symbol: "PT-weETH-27JUN2024",
              name: "PT-weETH-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0xdcdc1004d5c271adc048982d7eb900cc4f472333",
              symbol: "YT-weETH-27JUN2024",
              name: "YT-weETH-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0x952083cde7aaa11ab8449057f7de23a970aa8472",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
              symbol: "weETH",
              name: "weETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-09-11T00:00:00.000Z",
            address: "0xc76311b199eb5a84d17a906a0409e560c43d12e3",
            symbol: "PT-eATH-11SEP2025",
            pt: {
              address: "0xa520b3cc6431a7937eaf96e75ccde57c2a7aa6d1",
              symbol: "PT-eATH-11SEP2025",
              name: "PT-eATH-11SEP2025",
              decimals: 18,
            },
            yt: {
              address: "0x43864094f3e6e5d5cc3bdc7414611248d4d56ed5",
              symbol: "YT-eATH-11SEP2025",
              name: "YT-eATH-11SEP2025",
              decimals: 18,
            },
            lp: {
              address: "0xc76311b199eb5a84d17a906a0409e560c43d12e3",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x1903aa5b603819b9debd2f4b202b686e9e393aff",
              symbol: "eATH",
              name: "eATH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0xf9f9779d8ff604732eba9ad345e6a27ef5c2a9d6",
            symbol: "PT-weETH-26SEP2024",
            pt: {
              address: "0xb8b0a120f6a68dd06209619f62429fb1a8e92fec",
              symbol: "PT-weETH-26SEP2024",
              name: "PT-weETH-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0xfb2a7ac0372c2425c273932f8d438518402a873e",
              symbol: "YT-weETH-26SEP2024",
              name: "YT-weETH-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0xf9f9779d8ff604732eba9ad345e6a27ef5c2a9d6",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
              symbol: "weETH",
              name: "weETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0xaccd9a7cb5518326bed715f90bd32cdf2fec2d14",
            symbol: "PT-sETH-wstEthSilo-26DEC2024",
            pt: {
              address: "0xd5aabeda88c31858e5f60905185f8697be185e55",
              symbol: "PT-sETH-wstEthSilo-26DEC2024",
              name: "PT-sETH-wstEthSilo-26DEC2024",
              decimals: 18,
            },
            yt: {
              address: "0xae602e0560fd3ade52d4e94d1cdbe63e61019693",
              symbol: "YT-sETH-wstEthSilo-26DEC2024",
              name: "YT-sETH-wstEthSilo-26DEC2024",
              decimals: 18,
            },
            lp: {
              address: "0xaccd9a7cb5518326bed715f90bd32cdf2fec2d14",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xc46c5de6eca1ca6dc3f8c5d3ce863ae326f4b2cf",
              symbol: "sWETH-wstETH",
              name: "sWETH-wstETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x816f59ffa2239fd7106f94eabdc0a9547a892f2f",
            symbol: "PT-rsETH-26JUN2025",
            pt: {
              address: "0x8db96f2fccf7cdd74a60e8eff5801df043cd11de",
              symbol: "PT-rsETH-26JUN2025",
              name: "PT-rsETH-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0x8fedca9de6c792275335b41d0ef74d3a03361733",
              symbol: "YT-rsETH-26JUN2025",
              name: "YT-rsETH-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0x816f59ffa2239fd7106f94eabdc0a9547a892f2f",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
              symbol: "rsETH",
              name: "rsETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0xba4a858d664ddb052158168db04afa3cff5cfcc8",
            symbol: "PT-aUSDC-27JUN2024",
            pt: {
              address: "0xb72b988caf33f3d8a6d816974fe8caa199e5e86c",
              symbol: "PT-aUSDC-27JUN2024",
              name: "PT-aUSDC-27JUN2024",
              decimals: 6,
            },
            yt: {
              address: "0xa1c32ef8d3c4c30cb596bab8647e11daf0fa5c94",
              symbol: "YT-aUSDC-27JUN2024",
              name: "YT-aUSDC-27JUN2024",
              decimals: 6,
            },
            lp: {
              address: "0xba4a858d664ddb052158168db04afa3cff5cfcc8",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x724dc807b04555b71ed48a6896b6f41593b8c637",
              symbol: "aArbUSDCn",
              name: "aArbUSDCn",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x6ea328bf810ef0f0bd1291eb52f1529aa073cefa",
            symbol: "PT-ARB-GRAIL_Camelot-27JUN2024",
            pt: {
              address: "0x1102fe0a9ae3b82e41b60f42201dbff466a9792c",
              symbol: "PT-ARB-GRAIL_Camelot-27JUN2024",
              name: "PT-ARB-GRAIL_Camelot-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0x60f83082fc2aa538d684310365da08314322f3d3",
              symbol: "YT-ARB-GRAIL_Camelot-27JUN2024",
              name: "YT-ARB-GRAIL_Camelot-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0x6ea328bf810ef0f0bd1291eb52f1529aa073cefa",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xc9da32c3b444f15412f7feac6104d1e258d23b1b",
              symbol: "CMLT-LP",
              name: "CMLT-LP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x6ae79089b2cf4be441480801bb741a531d94312b",
            symbol: "PT-rsETH-27JUN2024",
            pt: {
              address: "0xafd22f824d51fb7eed4778d303d4388ac644b026",
              symbol: "PT-rsETH-27JUN2024",
              name: "PT-rsETH-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0xda53c73a28dff704fe757b8b4f6f6359707533da",
              symbol: "YT-rsETH-27JUN2024",
              name: "YT-rsETH-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0x6ae79089b2cf4be441480801bb741a531d94312b",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
              symbol: "rsETH",
              name: "rsETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-03-27T00:00:00.000Z",
            address: "0xd0fdb5ee558b3bcd9e5bc1344b28b2249de6559c",
            symbol: "PT-stk-EPendle-27MAR2025",
            pt: {
              address: "0x2a18a490ec18b019837f6153269d21a772167292",
              symbol: "PT-stk-EPendle-27MAR2025",
              name: "PT-stk-EPendle-27MAR2025",
              decimals: 18,
            },
            yt: {
              address: "0xb5209cdbf58947b1189ab467f18365b0300570d0",
              symbol: "YT-stk-EPendle-27MAR2025",
              name: "YT-stk-EPendle-27MAR2025",
              decimals: 18,
            },
            lp: {
              address: "0xd0fdb5ee558b3bcd9e5bc1344b28b2249de6559c",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x37227785a1f4545ed914690e395e4cfe96b8319f",
              symbol: "stk-ePendle",
              name: "stk-ePendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0xed99fc8bdb8e9e7b8240f62f69609a125a0fbf14",
            symbol: "PT-rsETH-26SEP2024",
            pt: {
              address: "0x30c98c0139b62290e26ac2a2158ac341dcaf1333",
              symbol: "PT-rsETH-26SEP2024",
              name: "PT-rsETH-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0x2fdc424946aa72d42e2f897447d7c335e64845f0",
              symbol: "YT-rsETH-26SEP2024",
              name: "YT-rsETH-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0xed99fc8bdb8e9e7b8240f62f69609a125a0fbf14",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
              symbol: "rsETH",
              name: "rsETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0xcb471665bf23b2ac6196d84d947490fd5571215f",
            symbol: "PT-rsETH-26DEC2024",
            pt: {
              address: "0x355ec27c9d4530de01a103fa27f884a2f3da65ef",
              symbol: "PT-rsETH-26DEC2024",
              name: "PT-rsETH-26DEC2024",
              decimals: 18,
            },
            yt: {
              address: "0x4b755c030b455b959246fc0f940de3a95f8e81ec",
              symbol: "YT-rsETH-26DEC2024",
              name: "YT-rsETH-26DEC2024",
              decimals: 18,
            },
            lp: {
              address: "0xcb471665bf23b2ac6196d84d947490fd5571215f",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
              symbol: "rsETH",
              name: "rsETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-03-28T00:00:00.000Z",
            address: "0x58f50de493b6be3585558f95f208de489c296e24",
            symbol: "PT-wstETH-28MAR2024",
            pt: {
              address: "0x5a4e68e1f82dd4eafbda13e47e0ec3cc452ed521",
              symbol: "PT-wstETH-28MAR2024",
              name: "PT-wstETH-28MAR2024",
              decimals: 18,
            },
            yt: {
              address: "0xca71e00e364bb033371a7f61f3f6b803b06e9fc4",
              symbol: "YT-wstETH-28MAR2024",
              name: "YT-wstETH-28MAR2024",
              decimals: 18,
            },
            lp: {
              address: "0x58f50de493b6be3585558f95f208de489c296e24",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5979d7b546e38e414f7e9822514be443a4800529",
              symbol: "wstETH",
              name: "wstETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x24e4df37ea00c4954d668e3ce19ffdcffdec2cf6",
            symbol: "PT-PENDLE-ETH_Camelot-27JUN2024",
            pt: {
              address: "0xba1f509c6e5f1f6a529ecc0913b27658a678b4b9",
              symbol: "PT-PENDLE-ETH_Camelot-27JUN2024",
              name: "PT-PENDLE-ETH_Camelot-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0x7588c74473a84d7fa87bec375b408e3402f7fdb9",
              symbol: "YT-PENDLE-ETH_Camelot-27JUN2024",
              name: "YT-PENDLE-ETH_Camelot-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0x24e4df37ea00c4954d668e3ce19ffdcffdec2cf6",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xbfca4230115de8341f3a3d5e8845ffb3337b2be3",
              symbol: "CMLT-LP",
              name: "CMLT-LP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0xaceee1ae91bc2f9244d699aa11b8a591f88b3778",
            symbol: "PT-mPendle-SY-26DEC2024",
            pt: {
              address: "0x733c9399bb4c550ccff63fcccc645bbc22f73c40",
              symbol: "PT-mPendle-SY-26DEC2024",
              name: "PT-mPendle-SY-26DEC2024",
              decimals: 18,
            },
            yt: {
              address: "0x4902f38bb8dd0d3eaf77c4212f1fdb7e2d34d39a",
              symbol: "YT-mPendle-SY-26DEC2024",
              name: "YT-mPendle-SY-26DEC2024",
              decimals: 18,
            },
            lp: {
              address: "0xaceee1ae91bc2f9244d699aa11b8a591f88b3778",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xb688ba096b7bb75d7841e47163cd12d18b36a5bf",
              symbol: "mPendle",
              name: "mPendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0x279b44e48226d40ec389129061cb0b56c5c09e46",
            symbol: "PT-uniETH-26DEC2024",
            pt: {
              address: "0x22e9ad26ea0e65a7073571d5d7172ff6336084ad",
              symbol: "PT-uniETH-26DEC2024",
              name: "PT-uniETH-26DEC2024",
              decimals: 18,
            },
            yt: {
              address: "0xa810ba21e65d54de0283002db8fb6ea504c83234",
              symbol: "YT-uniETH-26DEC2024",
              name: "YT-uniETH-26DEC2024",
              decimals: 18,
            },
            lp: {
              address: "0x279b44e48226d40ec389129061cb0b56c5c09e46",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x3d15fd46ce9e551498328b1c83071d9509e2c3a0",
              symbol: "uniETH",
              name: "uniETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x22e0f26320ace985e3cb2434095f18bfe114e28e",
            symbol: "PT-gUSDC-26JUN2025",
            pt: {
              address: "0x0b6121b4c00ca4fbbb6516c11eb4bf61722e0f8d",
              symbol: "PT-gUSDC-26JUN2025",
              name: "PT-gUSDC-26JUN2025",
              decimals: 6,
            },
            yt: {
              address: "0xeb044f64ae0dfd5433726fc5418d6643897cbb6b",
              symbol: "YT-gUSDC-26JUN2025",
              name: "YT-gUSDC-26JUN2025",
              decimals: 6,
            },
            lp: {
              address: "0x22e0f26320ace985e3cb2434095f18bfe114e28e",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xd3443ee1e91af28e5fb858fbd0d72a63ba8046e0",
              symbol: "gUSDC",
              name: "gUSDC",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x4505ec38982bb796b34d050ca8d765acff1abdee",
            symbol: "PT-aArbUSDCn-26JUN2025",
            pt: {
              address: "0x0fc042b32a9a6191834ea12ffa04f2044d0eb302",
              symbol: "PT-aArbUSDCn-26JUN2025",
              name: "PT-aArbUSDCn-26JUN2025",
              decimals: 6,
            },
            yt: {
              address: "0x8dc75acdc362e22febf0a9e358e501a6414aafa7",
              symbol: "YT-aArbUSDCn-26JUN2025",
              name: "YT-aArbUSDCn-26JUN2025",
              decimals: 6,
            },
            lp: {
              address: "0x4505ec38982bb796b34d050ca8d765acff1abdee",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x724dc807b04555b71ed48a6896b6f41593b8c637",
              symbol: "aArbUSDCn",
              name: "aArbUSDCn",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0x6b92feb89ed16aa971b096e247fe234db4aaa262",
            symbol: "PT-weETH-26DEC2024",
            pt: {
              address: "0xe2b2d203577c7cb3d043e89ccf90b5e24d19b66f",
              symbol: "PT-weETH-26DEC2024",
              name: "PT-weETH-26DEC2024",
              decimals: 18,
            },
            yt: {
              address: "0x7f37674e5c6dc16b30829b7ae1e0b7fe08144b7d",
              symbol: "YT-weETH-26DEC2024",
              name: "YT-weETH-26DEC2024",
              decimals: 18,
            },
            lp: {
              address: "0x6b92feb89ed16aa971b096e247fe234db4aaa262",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
              symbol: "weETH",
              name: "weETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x0bd6890b3bb15f16430546147734b254d0b03059",
            symbol: "PT-dUSDC-26JUN2025",
            pt: {
              address: "0x137f793505e7884cb70ee5933c83447e85b1bd17",
              symbol: "PT-dUSDC-26JUN2025",
              name: "PT-dUSDC-26JUN2025",
              decimals: 6,
            },
            yt: {
              address: "0xc617daee26f67edbed5bd978f4f8e02a1f8c9a6c",
              symbol: "YT-dUSDC-26JUN2025",
              name: "YT-dUSDC-26JUN2025",
              decimals: 6,
            },
            lp: {
              address: "0x0bd6890b3bb15f16430546147734b254d0b03059",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x6dbd962b4f62d18f756b5de57425574c4b8228d6",
              symbol: "dUSDC",
              name: "dUSDC",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0xa877a0e177b54a37066c1786f91a1dab68f094af",
            symbol: "PT-gUSDC-26DEC2024",
            pt: {
              address: "0x2be6fab4d1408e7ad6ad91ce7b77fa2a7670782f",
              symbol: "PT-gUSDC-26DEC2024",
              name: "PT-gUSDC-26DEC2024",
              decimals: 6,
            },
            yt: {
              address: "0x03577ffa91edb93ac3aee081efbe6f323da949e1",
              symbol: "YT-gUSDC-26DEC2024",
              name: "YT-gUSDC-26DEC2024",
              decimals: 6,
            },
            lp: {
              address: "0xa877a0e177b54a37066c1786f91a1dab68f094af",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xd3443ee1e91af28e5fb858fbd0d72a63ba8046e0",
              symbol: "gUSDC",
              name: "gUSDC",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0x766ffd36125ce45bdfca913517ecf25a828996b4",
            symbol: "PT-HLP-26DEC2024",
            pt: {
              address: "0x04867479568e20e5e6b739b2858c642b9450cfe0",
              symbol: "PT-HLP-26DEC2024",
              name: "PT-HLP-26DEC2024",
              decimals: 18,
            },
            yt: {
              address: "0x93f94f1adfa5f39e7f4c92f0e35c60d66eb5c3f6",
              symbol: "YT-HLP-26DEC2024",
              name: "YT-HLP-26DEC2024",
              decimals: 18,
            },
            lp: {
              address: "0x766ffd36125ce45bdfca913517ecf25a828996b4",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x4307fbdcd9ec7aea5a1c2958decaa6f316952bab",
              symbol: "HLP",
              name: "HLP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x86aacbed3e7b3d33149d5dcfd2def3c6d8498b8b",
            symbol: "PT-mPendle-26JUN2025",
            pt: {
              address: "0xd6be2dc6767da105b73e1e78f9a61fe4eb9b03e0",
              symbol: "PT-mPendle-26JUN2025",
              name: "PT-mPendle-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0x4173dd58ee78764bfd274e2bd79fc684cdd40397",
              symbol: "YT-mPendle-26JUN2025",
              name: "YT-mPendle-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0x86aacbed3e7b3d33149d5dcfd2def3c6d8498b8b",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xb688ba096b7bb75d7841e47163cd12d18b36a5bf",
              symbol: "mPendle",
              name: "mPendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0x2fb73d98b1d60b35fd12508933578098f352ce7e",
            symbol: "PT-dUSDC-26SEP2024",
            pt: {
              address: "0x9d17d67dda1256c5df78035ce6c8795ea3136e89",
              symbol: "PT-dUSDC-26SEP2024",
              name: "PT-dUSDC-26SEP2024",
              decimals: 6,
            },
            yt: {
              address: "0x916758e7605d0a4da4d9144e4e6ffc46e401ee67",
              symbol: "YT-dUSDC-26SEP2024",
              name: "YT-dUSDC-26SEP2024",
              decimals: 6,
            },
            lp: {
              address: "0x2fb73d98b1d60b35fd12508933578098f352ce7e",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x6dbd962b4f62d18f756b5de57425574c4b8228d6",
              symbol: "dUSDC",
              name: "dUSDC",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-03-28T00:00:00.000Z",
            address: "0xa0192f6567f8f5dc38c53323235fd08b318d2dca",
            symbol: "PT-gDAI-28MAR2024",
            pt: {
              address: "0x1684b747cd46858ae6312a7074353d2101154ef7",
              symbol: "PT-gDAI-28MAR2024",
              name: "PT-gDAI-28MAR2024",
              decimals: 18,
            },
            yt: {
              address: "0x4a8e64c3a66ce0830e3bf2ea7863b013aa592114",
              symbol: "YT-gDAI-28MAR2024",
              name: "YT-gDAI-28MAR2024",
              decimals: 18,
            },
            lp: {
              address: "0xa0192f6567f8f5dc38c53323235fd08b318d2dca",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xd85e038593d7a098614721eae955ec2022b9b91b",
              symbol: "gDAI",
              name: "gDAI",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x0f249f735647992572eea231fc24b35f7b6b34e1",
            symbol: "PT-HLP-27JUN2024",
            pt: {
              address: "0xc595c9c28d78bb347c8177dfbb820484e2d99a66",
              symbol: "PT-HLP-27JUN2024",
              name: "PT-HLP-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0x9d090ef4aafd0acb821113a7689d5794e50bd047",
              symbol: "YT-HLP-27JUN2024",
              name: "YT-HLP-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0x0f249f735647992572eea231fc24b35f7b6b34e1",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x4307fbdcd9ec7aea5a1c2958decaa6f316952bab",
              symbol: "HLP",
              name: "HLP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-03-27T00:00:00.000Z",
            address: "0xa9104b8b6698979568852c30231871e28a482b3c",
            symbol: "PT-gDAI-27MAR2025",
            pt: {
              address: "0x4d5d8375c39dc91a8aca33ff4a4564de92dcd04c",
              symbol: "PT-gDAI-27MAR2025",
              name: "PT-gDAI-27MAR2025",
              decimals: 18,
            },
            yt: {
              address: "0x4ac1cc1f45b07bb317883ecb7a2a1d95bf617d02",
              symbol: "YT-gDAI-27MAR2025",
              name: "YT-gDAI-27MAR2025",
              decimals: 18,
            },
            lp: {
              address: "0xa9104b8b6698979568852c30231871e28a482b3c",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xd85e038593d7a098614721eae955ec2022b9b91b",
              symbol: "gDAI",
              name: "gDAI",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0xcaf560681233b54c996ba06c71566fd30f32c973",
            symbol: "PT-stk-EPendle-26JUN2025",
            pt: {
              address: "0x1942ee88b2ed1a848251f071fb658922ec8fd4d9",
              symbol: "PT-stk-EPendle-26JUN2025",
              name: "PT-stk-EPendle-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0x4c5342a6107824a77e133136df2b79029546410d",
              symbol: "YT-stk-EPendle-26JUN2025",
              name: "YT-stk-EPendle-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0xcaf560681233b54c996ba06c71566fd30f32c973",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x37227785a1f4545ed914690e395e4cfe96b8319f",
              symbol: "stk-ePendle",
              name: "stk-ePendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x3e4e3291ed667fb4dee680d19e5702ef8275493d",
            symbol: "PT-uniETH-26JUN2025",
            pt: {
              address: "0xb3ebcc844f1eda040a3620267cdaaea6e14518a9",
              symbol: "PT-uniETH-26JUN2025",
              name: "PT-uniETH-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0x1ca1124a19e6d47a5aef64bebe8477642591aa65",
              symbol: "YT-uniETH-26JUN2025",
              name: "YT-uniETH-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0x3e4e3291ed667fb4dee680d19e5702ef8275493d",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x3d15fd46ce9e551498328b1c83071d9509e2c3a0",
              symbol: "uniETH",
              name: "uniETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-03-27T00:00:00.000Z",
            address: "0x9ff912568eb011d719b5f4e940f8135633f4bcdc",
            symbol: "PT-mPendle-27MAR2025",
            pt: {
              address: "0x4a94091cadd74bdf313b74d58eac908c5fc53704",
              symbol: "PT-mPendle-27MAR2025",
              name: "PT-mPendle-27MAR2025",
              decimals: 18,
            },
            yt: {
              address: "0xf602eecd270eb87be1bfcc716d27083223b35f04",
              symbol: "YT-mPendle-27MAR2025",
              name: "YT-mPendle-27MAR2025",
              decimals: 18,
            },
            lp: {
              address: "0x9ff912568eb011d719b5f4e940f8135633f4bcdc",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xb688ba096b7bb75d7841e47163cd12d18b36a5bf",
              symbol: "mPendle",
              name: "mPendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-03-27T00:00:00.000Z",
            address: "0x3be83cc235455ae1b624cf6e326505769ad8f9ea",
            symbol: "PT-spSILO-27MAR2025",
            pt: {
              address: "0x0ab24ecb207602983a20cfcf0e3045c08c651778",
              symbol: "PT-spSILO-27MAR2025",
              name: "PT-spSILO-27MAR2025",
              decimals: 18,
            },
            yt: {
              address: "0xd29151de7fbf87c068e715fad113bdd5ee556318",
              symbol: "YT-spSILO-27MAR2025",
              name: "YT-spSILO-27MAR2025",
              decimals: 18,
            },
            lp: {
              address: "0x3be83cc235455ae1b624cf6e326505769ad8f9ea",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x7d353420b3eb3cd9e7c819b4fea369686fd26b32",
              symbol: "spSilo",
              name: "spSilo",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0xcf602767e9c82194daf58eb67a3169d60dbaac62",
            symbol: "PT-sETH-ptezETHSilo-27JUN2024",
            pt: {
              address: "0xd7e810aed2988b8a7ea0187d55c939110b178521",
              symbol: "PT-sETH-ptezETHSilo-27JUN2024",
              name: "PT-sETH-ptezETHSilo-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0x8138e8cac470dc963437b055834b54d56d6d6a29",
              symbol: "YT-sETH-ptezETHSilo-27JUN2024",
              name: "YT-sETH-ptezETHSilo-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0xcf602767e9c82194daf58eb67a3169d60dbaac62",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xede3d8d3213d8defc37e4edea86448d4c692baa6",
              symbol: "sWETH-PT-ezETH-27JUN2024",
              name: "sWETH-PT-ezETH-27JUN2024",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-11-28T00:00:00.000Z",
            address: "0x281fe15fd3e08a282f52d5cf09a4d13c3709e66d",
            symbol: "PT-USDe-28NOV2024",
            pt: {
              address: "0x1fa42e6730df74ff2742704761da41111bb7f019",
              symbol: "PT-USDe-28NOV2024",
              name: "PT-USDe-28NOV2024",
              decimals: 18,
            },
            yt: {
              address: "0x8d0ac6c608fd4bf52fcc31dcef30d0ae2aed2e81",
              symbol: "YT-USDe-28NOV2024",
              name: "YT-USDe-28NOV2024",
              decimals: 18,
            },
            lp: {
              address: "0x281fe15fd3e08a282f52d5cf09a4d13c3709e66d",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
              symbol: "USDe",
              name: "USDe",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0x99ed4f0ab6524d26b31d0aea087ebe20d5949e0f",
            symbol: "PT-gDAI-26SEP2024",
            pt: {
              address: "0x4439fe47139be8b9b13635c142569c3e60d71259",
              symbol: "PT-gDAI-26SEP2024",
              name: "PT-gDAI-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0x5a4956d9d4c362c6df3ae442f87ac0afcba468da",
              symbol: "YT-gDAI-26SEP2024",
              name: "YT-gDAI-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0x99ed4f0ab6524d26b31d0aea087ebe20d5949e0f",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xd85e038593d7a098614721eae955ec2022b9b91b",
              symbol: "gDAI",
              name: "gDAI",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0x875f154f4ec93255beaea9367c3adf71cdcb4cc0",
            symbol: "PT-aUSDC-26DEC2024",
            pt: {
              address: "0xbb47ad7f407cbd385c9269ebd0d1eb1cb634cdfa",
              symbol: "PT-aUSDC-26DEC2024",
              name: "PT-aUSDC-26DEC2024",
              decimals: 6,
            },
            yt: {
              address: "0xf065e0f7afa89df5f2a8a109239c809f115129ae",
              symbol: "YT-aUSDC-26DEC2024",
              name: "YT-aUSDC-26DEC2024",
              decimals: 6,
            },
            lp: {
              address: "0x875f154f4ec93255beaea9367c3adf71cdcb4cc0",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x724dc807b04555b71ed48a6896b6f41593b8c637",
              symbol: "aArbUSDCn",
              name: "aArbUSDCn",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0xc0cda2d5d4d75544cdf01ef69b1e5e56ea366d17",
            symbol: "PT-stk-EPendle-26DEC2024",
            pt: {
              address: "0xf93e88b07dfc860abf72d13a088a7092ce213190",
              symbol: "PT-stk-EPendle-26DEC2024",
              name: "PT-stk-EPendle-26DEC2024",
              decimals: 18,
            },
            yt: {
              address: "0x836997ae68e92f59da33e8f4a0ad9f3943193820",
              symbol: "YT-stk-EPendle-26DEC2024",
              name: "YT-stk-EPendle-26DEC2024",
              decimals: 18,
            },
            lp: {
              address: "0xc0cda2d5d4d75544cdf01ef69b1e5e56ea366d17",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x37227785a1f4545ed914690e395e4cfe96b8319f",
              symbol: "stk-ePendle",
              name: "stk-ePendle",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0x551c423c441db0b691b5630f04d2080caee25963",
            symbol: "PT-GLP-26SEP2024",
            pt: {
              address: "0x89cd713a6607787f93d6743e67777be9ad73c54b",
              symbol: "PT-GLP-26SEP2024",
              name: "PT-GLP-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0xf875f32648be14d04e0df4a977afd4290dd92713",
              symbol: "YT-GLP-26SEP2024",
              name: "YT-GLP-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0x551c423c441db0b691b5630f04d2080caee25963",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x1addd80e6039594ee970e5872d247bf0414c8903",
              symbol: "fsGLP",
              name: "fsGLP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x0d29182b7b663a967c5c41f03fc478c075fd4a1e",
            symbol: "PT-MUXLP-27JUN2024",
            pt: {
              address: "0x54a2c0dcf15d70fe0f3d02addc4be0bc93625a65",
              symbol: "PT-MUXLP-27JUN2024",
              name: "PT-MUXLP-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0xd101df41943ec333f64df316a3093cee1bf16572",
              symbol: "YT-MUXLP-27JUN2024",
              name: "YT-MUXLP-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0x0d29182b7b663a967c5c41f03fc478c075fd4a1e",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x7cbaf5a14d953ff896e5b3312031515c858737c8",
              symbol: "MUXLP",
              name: "MUXLP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-03-28T00:00:00.000Z",
            address: "0x65819e4ee91923499934c86e93357f633033cb0b",
            symbol: "PT-MUXLP-28MAR2024",
            pt: {
              address: "0xf0a219e14d4c058022a828b16af9888b143ab5ad",
              symbol: "PT-MUXLP-28MAR2024",
              name: "PT-MUXLP-28MAR2024",
              decimals: 18,
            },
            yt: {
              address: "0xf31b528d724354575c0c65ab17d6decde29d2900",
              symbol: "YT-MUXLP-28MAR2024",
              name: "YT-MUXLP-28MAR2024",
              decimals: 18,
            },
            lp: {
              address: "0x65819e4ee91923499934c86e93357f633033cb0b",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x7cbaf5a14d953ff896e5b3312031515c858737c8",
              symbol: "MUXLP",
              name: "MUXLP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-03-28T00:00:00.000Z",
            address: "0x1c3330f1886d8b7eec8af75c66fb6fd6ccbe28b5",
            symbol: "PT-GM-ARB-USDC-28MAR2024",
            pt: {
              address: "0x81f2c7b56f34290d2261f15883f2f80d78981b68",
              symbol: "PT-GM-ARB-USDC-28MAR2024",
              name: "PT-GM-ARB-USDC-28MAR2024",
              decimals: 18,
            },
            yt: {
              address: "0x1b33c8d479ce5596ff9756a3010e70a7412938e2",
              symbol: "YT-GM-ARB-USDC-28MAR2024",
              name: "YT-GM-ARB-USDC-28MAR2024",
              decimals: 18,
            },
            lp: {
              address: "0x1c3330f1886d8b7eec8af75c66fb6fd6ccbe28b5",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xc25cef6061cf5de5eb761b50e4743c1f5d7e5407",
              symbol: "GM",
              name: "GM",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0x5f3c781b3a20299db27c8fc5f4415d895677c885",
            symbol: "PT-sETH-pteETHSilo-26SEP2024",
            pt: {
              address: "0x617cf00c50e0cbb9fdf54516e9e9540d61acfca8",
              symbol: "PT-sETH-pteETHSilo-26SEP2024",
              name: "PT-sETH-pteETHSilo-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0x30f030cf922878b0b0fa07120f9cec0c8278a293",
              symbol: "YT-sETH-pteETHSilo-26SEP2024",
              name: "YT-sETH-pteETHSilo-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0x5f3c781b3a20299db27c8fc5f4415d895677c885",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x9d0c7dafe3b34b51010db522b9f17455fa9cea7c",
              symbol: "sWETH-PT-weETH-26SEP2024",
              name: "sWETH-PT-weETH-26SEP2024",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-04-25T00:00:00.000Z",
            address: "0x99e9028e274feafa2e1d8787e1ee6de39c6f7724",
            symbol: "PT-sETH-pteETHSilo-25APR2024",
            pt: {
              address: "0xaa2c552279a394c9b0f4b668c288691c5b296182",
              symbol: "PT-sETH-pteETHSilo-25APR2024",
              name: "PT-sETH-pteETHSilo-25APR2024",
              decimals: 18,
            },
            yt: {
              address: "0x11c603edbf3ba83d81b91069978dd5ac57334c65",
              symbol: "YT-sETH-pteETHSilo-25APR2024",
              name: "YT-sETH-pteETHSilo-25APR2024",
              decimals: 18,
            },
            lp: {
              address: "0x99e9028e274feafa2e1d8787e1ee6de39c6f7724",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x8be4715f1db9e8551fea5ef8b30a2eb99398e5d2",
              symbol: "sWETH-PT-weETH-25APR2024",
              name: "sWETH-PT-weETH-25APR2024",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-02-01T00:00:00.000Z",
            address: "0x9bc62257ffe7d0f7c52a019e6fc0af3102f8f44e",
            symbol: "PT-sUSDC-ARBSilo-1FEB2024",
            pt: {
              address: "0xbfd3a44f673f4d4df9b1ec126c4a5f602f0380ad",
              symbol: "PT-sUSDC-ARBSilo-1FEB2024",
              name: "PT-sUSDC-ARBSilo-1FEB2024",
              decimals: 6,
            },
            yt: {
              address: "0x2591bc78d50d777cac68aedda0e8bc928a89a538",
              symbol: "YT-sUSDC-ARBSilo-1FEB2024",
              name: "YT-sUSDC-ARBSilo-1FEB2024",
              decimals: 6,
            },
            lp: {
              address: "0x9bc62257ffe7d0f7c52a019e6fc0af3102f8f44e",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x55ade3b74abef55bf379ff6ae61cb77a405eb4a8",
              symbol: "sUSDC-ARB",
              name: "sUSDC-ARB",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x8cab5fd029ae2fbf28c53e965e4194c7260adf0c",
            symbol: "PT-dWBTC-26JUN2025",
            pt: {
              address: "0x98510fbe752a97f97abd7d971a1b3290dd62ec4a",
              symbol: "PT-dWBTC-26JUN2025",
              name: "PT-dWBTC-26JUN2025",
              decimals: 8,
            },
            yt: {
              address: "0x458db433b74b1094c8282152500f6d5bdf062eb0",
              symbol: "YT-dWBTC-26JUN2025",
              name: "YT-dWBTC-26JUN2025",
              decimals: 8,
            },
            lp: {
              address: "0x8cab5fd029ae2fbf28c53e965e4194c7260adf0c",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x0a52bcb532f59f6a37a9d3b5bc9ffd47e461d995",
              symbol: "dWBTC",
              name: "dWBTC",
              decimals: 8,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2025-08-28T00:00:00.000Z",
            address: "0xff4d6991658c5844856faef5da9232c252896fca",
            symbol: "PT-sUSDS-28AUG2025",
            pt: {
              address: "0xbdcf887b8c8ac9fb27876c5376695008b13dbc63",
              symbol: "PT-sUSDS-28AUG2025",
              name: "PT-sUSDS-28AUG2025",
              decimals: 18,
            },
            yt: {
              address: "0x3b72b0171f5f37a4027b33bd902b088481cd70cd",
              symbol: "YT-sUSDS-28AUG2025",
              name: "YT-sUSDS-28AUG2025",
              decimals: 18,
            },
            lp: {
              address: "0xff4d6991658c5844856faef5da9232c252896fca",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xddb46999f8891663a8f2828d25298f70416d7610",
              symbol: "sUSDS",
              name: "sUSDS",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0x2ad746fa3faa0ad586021a633d10f4e2785a0349",
            symbol: "PT-sETH-ptrsETHSilo-26SEP2024",
            pt: {
              address: "0x421ef93fdc38ee10804c405cd28c9dba100f717b",
              symbol: "PT-sETH-ptrsETHSilo-26SEP2024",
              name: "PT-sETH-ptrsETHSilo-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0x55561255b5e95d2bdcbe40cb964e65fdee1f72cd",
              symbol: "YT-sETH-ptrsETHSilo-26SEP2024",
              name: "YT-sETH-ptrsETHSilo-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0x2ad746fa3faa0ad586021a633d10f4e2785a0349",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x1e6fd3251c949e1708a5277faa773cc88e799b99",
              symbol: "sWETH-PT-rsETH-26SEP2024",
              name: "sWETH-PT-rsETH-26SEP2024",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-12-26T00:00:00.000Z",
            address: "0x07fa8f8d7f7969520955ee3e8a45fbed451b43fa",
            symbol: "PT-MUXLP-26DEC2024",
            pt: {
              address: "0xfe49069d05d0d65559735fd74219460a11425bf0",
              symbol: "PT-MUXLP-26DEC2024",
              name: "PT-MUXLP-26DEC2024",
              decimals: 18,
            },
            yt: {
              address: "0xf61267c3b79d6fdeb659174e0171e86ce7dc84b8",
              symbol: "YT-MUXLP-26DEC2024",
              name: "YT-MUXLP-26DEC2024",
              decimals: 18,
            },
            lp: {
              address: "0x07fa8f8d7f7969520955ee3e8a45fbed451b43fa",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x7cbaf5a14d953ff896e5b3312031515c858737c8",
              symbol: "MUXLP",
              name: "MUXLP",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0xb4781463a1261f60fca37732efa510c22dec5ada",
            symbol: "PT-sETH-ptezETHSilo-26SEP2024",
            pt: {
              address: "0xe281e58e99291e1cabbc04277c1681f7d995660e",
              symbol: "PT-sETH-ptezETHSilo-26SEP2024",
              name: "PT-sETH-ptezETHSilo-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0xe7c4e31538a6610e8a452804628baa1025bb787d",
              symbol: "YT-sETH-ptezETHSilo-26SEP2024",
              name: "YT-sETH-ptezETHSilo-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0xb4781463a1261f60fca37732efa510c22dec5ada",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x71453d859918a1d59354324c2a70d32e53b97f67",
              symbol: "sWETH-PT-ezETH-26SEP2024",
              name: "sWETH-PT-ezETH-26SEP2024",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x6abe9ac2df48490693bdb9d66fa898fc9cd7cc36",
            symbol: "PT-sETH-pteETHSilo-27JUN2024",
            pt: {
              address: "0x2d5405688f253d741a9f1090dd90d8a285cf5c79",
              symbol: "PT-sETH-pteETHSilo-27JUN2024",
              name: "PT-sETH-pteETHSilo-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0x7cfb81e9c9402d48c6f3161204a21800b210baea",
              symbol: "YT-sETH-pteETHSilo-27JUN2024",
              name: "YT-sETH-pteETHSilo-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0x6abe9ac2df48490693bdb9d66fa898fc9cd7cc36",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x22bed3e6e56266c347769189b44646d91b3150c4",
              symbol: "sWETH-PT-weETH-27JUN2024",
              name: "sWETH-PT-weETH-27JUN2024",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-02-19T00:00:00.000Z",
            address: "0x2092fa5d02276b3136a50f3c2c3a6ed45413183e",
            symbol: "PT-sUSDai-19FEB2026",
            pt: {
              address: "0x1bf1311fcf914a69dd5805c9b06b72f80539cb3f",
              symbol: "PT-sUSDai-19FEB2026",
              name: "PT-sUSDai-19FEB2026",
              decimals: 18,
            },
            yt: {
              address: "0x214d1950027863f5e1ec6369797d9a51ef1bb66f",
              symbol: "YT-sUSDai-19FEB2026",
              name: "YT-sUSDai-19FEB2026",
              decimals: 18,
            },
            lp: {
              address: "0x2092fa5d02276b3136a50f3c2c3a6ed45413183e",
              symbol: "PLP-sUSDai-19FEB2026",
              name: "PLP-sUSDai-19FEB2026",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x0b2b2b2076d95dda7817e785989fe353fe955ef9",
              symbol: "sUSDai",
              name: "sUSDai",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-02-19T00:00:00.000Z",
            address: "0x3308574370f19ea639f4671838e01cfb77d8db70",
            symbol: "PT-USDai-19FEB2026",
            pt: {
              address: "0x5b2c615e22272234aacf187632a0531ca1243279",
              symbol: "PT-USDai-19FEB2026",
              name: "PT-USDai-19FEB2026",
              decimals: 18,
            },
            yt: {
              address: "0xdb795dc5e359f3c53b83f603e10fd9901f851190",
              symbol: "YT-USDai-19FEB2026",
              name: "YT-USDai-19FEB2026",
              decimals: 18,
            },
            lp: {
              address: "0x3308574370f19ea639f4671838e01cfb77d8db70",
              symbol: "PLP-USDai-19FEB2026",
              name: "PLP-USDai-19FEB2026",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x0a1a1a107e45b7ced86833863f482bc5f4ed82ef",
              symbol: "USDai",
              name: "USDai",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 42161,
            expiry: "2026-02-19T00:00:00.000Z",
            address: "0xfad63f0a2ff618edde23561dff212edfeddbe89d",
            symbol: "PT-thBILL-19FEB2026",
            pt: {
              address: "0x9b3924f9652cabf3db48b7b4c92e474c571b3ab4",
              symbol: "PT-thBILL-19FEB2026",
              name: "PT-thBILL-19FEB2026",
              decimals: 6,
            },
            yt: {
              address: "0x12da049222953b558008789d1b54a0630d6ef51e",
              symbol: "YT-thBILL-19FEB2026",
              name: "YT-thBILL-19FEB2026",
              decimals: 6,
            },
            lp: {
              address: "0xfad63f0a2ff618edde23561dff212edfeddbe89d",
              symbol: "PLP-thBILL-19FEB2026",
              name: "PLP-thBILL-19FEB2026",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xfdd22ce6d1f66bc0ec89b20bf16ccb6670f55a5a",
              symbol: "thBILL",
              name: "thBILL",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
        ],
        t = [
          {
            aToken: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
            variableDebtToken: "0xe80761ea617f66f96274ea5e8c37f03960ecc679",
            symbol: "aArbAAVE",
            decimals: 18,
            underlyingAddress: "0xba5ddd1f9d7f570dc94a51479a000e3bce967196",
            underlyingSymbol: "AAVE",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x625e7708f30ca75bfd92586e17077590c60eb4cd",
            variableDebtToken: "0xfccf3cabbe80101232d343252614b6a3ee81c989",
            symbol: "aArbUSDC",
            decimals: 6,
            underlyingAddress: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
            underlyingSymbol: "USDC.e",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
            variableDebtToken: "0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351",
            symbol: "aArbWETH",
            decimals: 18,
            underlyingAddress: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
            underlyingSymbol: "WETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x8437d7c167dfb82ed4cb79cd44b7a32a1dd95c77",
            variableDebtToken: "0x3ca5fa07689f266e907439afd1fbb59c44fe12f6",
            symbol: "aArbweETH",
            decimals: 18,
            underlyingAddress: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
            underlyingSymbol: "weETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x078f358208685046a11c85e8ad32895ded33a249",
            variableDebtToken: "0x92b42c66840c7ad907b4bf74879ff3ef7c529473",
            symbol: "aArbWBTC",
            decimals: 8,
            underlyingAddress: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
            underlyingSymbol: "WBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x724dc807b04555b71ed48a6896b6F41593b8C637",
            variableDebtToken: "0xf611aeb5013fd2c0511c9cd55c7dc5c1140741a6",
            symbol: "aArbUSDCn",
            decimals: 6,
            underlyingAddress: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            underlyingSymbol: "USDC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x513c7e3a9c69ca3e22550ef58ac1c0088e918fff",
            variableDebtToken: "0x77ca01483f379e58174739308945f044e1a764dc",
            symbol: "aArbwstETH",
            decimals: 18,
            underlyingAddress: "0x5979d7b546e38e414f7e9822514be443a4800529",
            underlyingSymbol: "wstETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x6ab707aca953edaefbc4fd23ba73294241490620",
            variableDebtToken: "0xfb00ac187a8eb5afae4eace434f493eb62672df7",
            symbol: "aArbUSDT",
            decimals: 6,
            underlyingAddress: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
            underlyingSymbol: "USDT",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x6533afac2E7BCCB20dca161449A13A32D391fb00",
            variableDebtToken: "0x44705f578135cc5d703b4c9c122528c73eb87145",
            symbol: "aArbARB",
            decimals: 18,
            underlyingAddress: "0x912ce59144191c1204e64559fe8253a0e49e6548",
            underlyingSymbol: "ARB",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x191c10aa4af7c30e871e70c95db0e4eb77237530",
            variableDebtToken: "0x953a573793604af8d41f306feb8274190db4ae0e",
            symbol: "aArbLINK",
            decimals: 18,
            underlyingAddress: "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
            underlyingSymbol: "LINK",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x82e64f49ed5ec1bc6e43dad4fc8af9bb3a2312ee",
            variableDebtToken: "0x8619d80fb0141ba7f184cbf22fd724116d9f7ffc",
            symbol: "aArbDAI",
            decimals: 18,
            underlyingAddress: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
            underlyingSymbol: "DAI",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x8eb270e296023e9d92081fdf967ddd7878724424",
            variableDebtToken: "0xce186f6cccb0c955445bb9d10c59cae488fea559",
            symbol: "aArbrETH",
            decimals: 18,
            underlyingAddress: "0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8",
            underlyingSymbol: "rETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0xea1132120ddcdda2f119e99fa7a27a0d036f7ac9",
            variableDebtToken: "0x1ffd28689da7d0148ff0fcb669e9f9f0fc13a219",
            symbol: "aArbezETH",
            decimals: 18,
            underlyingAddress: "0x2416092f143378750bb29b79ed961ab195cceea5",
            underlyingSymbol: "ezETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x6b030ff3fb9956b1b69f475b77ae0d3cf2cc5afa",
            variableDebtToken: "0x80ca0d8c38d2e2bcbab66aa1648bd1c7160500fe",
            symbol: "aArbrsETH",
            decimals: 18,
            underlyingAddress: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
            underlyingSymbol: "rsETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0xebe517846d0f36eced99c735cbf6131e1feb775d",
            variableDebtToken: "0x18248226c16bf76c032817854e7c83a2113b4f06",
            symbol: "aArbGHO",
            decimals: 18,
            underlyingAddress: "0x7dff72693f6a4149b17e7c6314655f6a9f7c8b33",
            underlyingSymbol: "GHO",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x8ffdf2de812095b1d19cb146e4c004587c0a0692",
            variableDebtToken: "0xa8669021776bc142dfca87c21b4a52595bcbb40a",
            symbol: "aArbLUSD",
            decimals: 18,
            underlyingAddress: "0x93b346b6bc2548da6a1e7d98e9a421b42541425b",
            underlyingSymbol: "LUSD",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x38d693ce1df5aadf7bc62595a37d667ad57922e5",
            variableDebtToken: "0x5d557b07776d12967914379c71a1310e917c7555",
            symbol: "aArbFRAX",
            decimals: 18,
            underlyingAddress: "0x17fc002b466eec40dae837fc4be5c67993ddbd6f",
            underlyingSymbol: "FRAX",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
        ],
        o = [
          {
            baseAssetAddress: "0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf",
            symbol: "cUSDCv3",
            decimals: 6,
            underlyingAddress: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            underlyingSymbol: "USDC",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
                name: "Wrapped BTC",
                symbol: "WBTC",
                decimals: 8,
              },
              {
                address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
              {
                address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
                name: "Arbitrum",
                symbol: "ARB",
                decimals: 18,
              },
              {
                address: "0x5979d7b546e38e414f7e9822514be443a4800529",
                name: "Wrapped stETH",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                symbol: "ezETH",
                name: "Renzo Restaked ETH",
                decimals: 18,
              },
              {
                address: "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
                name: "GMX",
                symbol: "GMX",
                decimals: 18,
              },
              {
                address: "0x57f5e098cad7a3d1eed53991d4d66c45c9af7812",
                symbol: "wUSDM",
                name: "Wrapped Mountain Protocol USD",
                decimals: 18,
              },
            ],
          },
          {
            baseAssetAddress: "0xa5edbdd9646f8dff606d7448e414884c7d905dca",
            symbol: "cUSDCv3",
            decimals: 6,
            underlyingAddress: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
            underlyingSymbol: "USDC.e",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
                name: "Wrapped BTC",
                symbol: "WBTC",
                decimals: 8,
              },
              {
                address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
              {
                address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
                name: "Arbitrum",
                symbol: "ARB",
                decimals: 18,
              },
              {
                address: "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
                name: "GMX",
                symbol: "GMX",
                decimals: 18,
              },
            ],
          },
          {
            baseAssetAddress: "0x6f7d514bbd4aff3bcd1140b7344b32f063dee486",
            symbol: "cWETHv3",
            decimals: 18,
            underlyingAddress: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
            underlyingSymbol: "wETH",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
                name: "Wrapped BTC",
                symbol: "WBTC",
                decimals: 8,
              },
              {
                address: "0x5979d7b546e38e414f7e9822514be443a4800529",
                name: "Wrapped stETH",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0x2416092f143378750bb29b79ed961ab195cceea5",
                symbol: "ezETH",
                name: "Renzo Restaked ETH",
                decimals: 18,
              },
              {
                address: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
                symbol: "rsETH",
                name: "KelpDao Restaked ETH",
                decimals: 18,
              },
              {
                address: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
                name: "Wrapped eETH",
                symbol: "WEETH",
                decimals: 18,
              },
              {
                address: "0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8",
                name: "Rocket Pool ETH",
                symbol: "rETH",
                decimals: 18,
              },
              {
                address: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
                name: "USD Coin",
                symbol: "USDC",
                decimals: 6,
              },
              {
                address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
                name: "Tether USD",
                symbol: "USDT",
                decimals: 6,
              },
            ],
          },
          {
            baseAssetAddress: "0xd98be00b5d27fc98112bde293e487f8d4ca57d07",
            symbol: "cUSDTv3",
            decimals: 6,
            underlyingAddress: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
            underlyingSymbol: "USDT",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
                name: "Wrapped BTC",
                symbol: "WBTC",
                decimals: 8,
              },
              {
                address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
              {
                address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
                name: "Arbitrum",
                symbol: "ARB",
                decimals: 18,
              },
              {
                address: "0x5979d7b546e38e414f7e9822514be443a4800529",
                name: "Wrapped stETH",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
                name: "GMX",
                symbol: "GMX",
                decimals: 18,
              },
            ],
          },
        ];
      var c = s(1423);
      let i = (async () => {
          let e = `
  query ProVaults {
    vaults  {
      id
      name
      symbol
    }
  }
    `,
            a = await fetch(
              "https://api.goldsky.com/api/public/project_cmgzitcts001c5np28moc9lyy/subgraphs/studio-pro-arbitrum_production/v0.1.11/gn",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: e }),
              }
            );
          return (await a.json()).data.vaults.map((e) => ({
            chainId: n.nU.ARBITRUM_ONE,
            address: e.id,
            symbol: e.symbol,
            name: e.name,
            decimals: 18,
            buildingBlocks: [
              n.IM.SWAP,
              n.IM.DEPOSIT,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.WITHDRAW,
            ],
            protocols: [n.GP.OPENOCEAN, n.GP.UNISWAP],
          }));
        })(),
        r = [
          {
            address: "0x0a1ecc5fe8c9be3c809844fcbe615b46a869b899",
            dToken: "0x5967a4628c4e6f62e5a14c3c1f0806dd80c39b09",
            oracle: "0x94b6924796ccc98e5237615f8710ef5732190f66",
            asset: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eUSDC-1",
            name: "EVK Vault eUSDC-1",
            decimals: 6,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0x0ee8d628411f446bfbbe08bdef53e42414c8fbc4",
            dToken: "0x565c776fb1e16bb1a5bed9bbe1db1f6333b87211",
            oracle: "0x94b6924796ccc98e5237615f8710ef5732190f66",
            asset: "0xddb46999f8891663a8f2828d25298f70416d7610",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault esUSDS-1",
            name: "EVK Vault esUSDS-1",
            decimals: 18,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0x21d129e058f4bda2cd017daf1af2672366712d9c",
            dToken: "0x99d420a474c1cfe6ee6de7706367a9c7847d571b",
            oracle: "0x272621a4348a38a1b62b6a426be4f2686b7ca72a",
            asset: "0x078f358208685046a11c85e8ad32895ded33a249",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eaArbWBTC-1",
            name: "EVK Vault eaArbWBTC-1",
            decimals: 8,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0x37512f45b4ba8808910632323b73783ca938cd51",
            dToken: "0x095e397574b62dfb2e61fbebfe229c1cd5cb8398",
            oracle: "0x94b6924796ccc98e5237615f8710ef5732190f66",
            asset: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eUSD₮0-1",
            name: "EVK Vault eUSD₮0-1",
            decimals: 6,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0x4b88cafced132e017b768d34be8342d2edc3b112",
            dToken: "0xc6fb255a488645d62e1dc11c0705750c429fa8b2",
            oracle: "0x0000000000000000000000000000000000000000",
            asset: "0x050c24dbf1eec17babe5fc585f06116a259cc77a",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eIBTC-1",
            name: "EVK Vault eIBTC-1",
            decimals: 8,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0x5a8294ce02908b1da68c6c39695c9b0fbaf7675d",
            dToken: "0xbd41bbee74079607fa7e365a0f4327f202db20a5",
            oracle: "0x94b6924796ccc98e5237615f8710ef5732190f66",
            asset: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eweETH-1",
            name: "EVK Vault eweETH-1",
            decimals: 18,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0x78e3e051d32157aacd550fbb78458762d8f7edff",
            dToken: "0x19728d0fc714db0b5a622de29aa427fdff0cc866",
            oracle: "0x94b6924796ccc98e5237615f8710ef5732190f66",
            asset: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eWETH-1",
            name: "EVK Vault eWETH-1",
            decimals: 18,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0x7ed866d2d66c3149fafe854c30c68a8ba7cee8b9",
            dToken: "0x26def68e8ef9161f2dd5ab029a467a049968a656",
            oracle: "0x94b6924796ccc98e5237615f8710ef5732190f66",
            asset: "0x912ce59144191c1204e64559fe8253a0e49e6548",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eARB-1",
            name: "EVK Vault eARB-1",
            decimals: 18,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0x889e1c458b2469b70accdfb5b59726dc1668896c",
            dToken: "0x84f169dd61a86d66b68174211afd121459924a23",
            oracle: "0x94b6924796ccc98e5237615f8710ef5732190f66",
            asset: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eWBTC-1",
            name: "EVK Vault eWBTC-1",
            decimals: 8,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0xa7a9b773f139010f284e825a74060648d91de37a",
            dToken: "0xabb6569857a9001052019b596eaf2e6da0d4fa5c",
            oracle: "0x94b6924796ccc98e5237615f8710ef5732190f66",
            asset: "0x940098b108fb7d0a7e374f6eded7760787464609",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault esUSDC-1",
            name: "EVK Vault esUSDC-1",
            decimals: 18,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0xa8616e4d9f3f0aa01aff1d7c3b66249f8a5f1a58",
            dToken: "0x856088b008f85df9483d25fbe1a021219c49e485",
            oracle: "0x94b6924796ccc98e5237615f8710ef5732190f66",
            asset: "0x5979d7b546e38e414f7e9822514be443a4800529",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault ewstETH-1",
            name: "EVK Vault ewstETH-1",
            decimals: 18,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0xc2e9402e4bb2306e8e2015de8f0a7356f455d86c",
            dToken: "0xf422b91920c83f92d6da4f117c48304be31c4a50",
            oracle: "0x272621a4348a38a1b62b6a426be4f2686b7ca72a",
            asset: "0x004626a008b1acdc4c74ab51644093b155e59a23",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault estEUR-1",
            name: "EVK Vault estEUR-1",
            decimals: 18,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0xd02c0821d1a41f6f801878e851799c3ce5540c57",
            dToken: "0x79419a026ccfe23aa52ccf5b11f5f0ba15c1de71",
            oracle: "0x0000000000000000000000000000000000000000",
            asset: "0x00cbcf7b3d37844e44b888bc747bdd75fcf4e555",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eXPET-1",
            name: "EVK Vault eXPET-1",
            decimals: 18,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            address: "0xdf82e61efcb6c3451ce0f26dd507c835ce4764e3",
            dToken: "0x56b39c7e1f6220dda3e8289db718a97a354b09ce",
            oracle: "0x0000000000000000000000000000000000000000",
            asset: "0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8",
            evc: "0x6302ef0f34100cddfb5489fbcb6ee1aa95cd1066",
            symbol: "EVK Vault eBAL-1",
            name: "EVK Vault eBAL-1",
            decimals: 18,
            protocols: [n.GP.EULER],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
        ];
      var b = s(7550);
      let f = [
          {
            aToken: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE",
            variableDebtToken: "0x8619d80FB0141ba7F184CbF22fd724116D9f7ffC",
            symbol: "aOptDAI",
            decimals: 18,
            underlyingAddress: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            underlyingSymbol: "DAI",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530",
            variableDebtToken: "0x953A573793604aF8d41F306FEb8274190dB4aE0e",
            symbol: "aOptLINK",
            decimals: 18,
            underlyingAddress: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
            underlyingSymbol: "LINK",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
            variableDebtToken: "0xFCCf3cAbbe80101232d343252614b6A3eE81C989",
            symbol: "aOptUSDC",
            decimals: 6,
            underlyingAddress: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
            underlyingSymbol: "USDC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x078f358208685046a11C85e8ad32895DED33A249",
            variableDebtToken: "0x92b42c66840C7AD907b4BF74879FF3eF7c529473",
            symbol: "aOptWBTC",
            decimals: 8,
            underlyingAddress: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
            underlyingSymbol: "WBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
            variableDebtToken: "0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351",
            symbol: "aOptWETH",
            decimals: 18,
            underlyingAddress: "0x4200000000000000000000000000000000000006",
            underlyingSymbol: "WETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
            variableDebtToken: "0xfb00AC187a8Eb5AFAE4eACE434F493Eb62672df7",
            symbol: "aOptUSDT",
            decimals: 6,
            underlyingAddress: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
            underlyingSymbol: "USDT",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
            variableDebtToken: "0xE80761Ea617F66F96274eA5e8c37f03960ecC679",
            symbol: "aOptAAVE",
            decimals: 18,
            underlyingAddress: "0x76FB31fb4af56892A25e32cFC43De717950c9278",
            underlyingSymbol: "AAVE",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97",
            variableDebtToken: "0x4a1c3aD6Ed28a636ee1751C69071f6be75DEb8B8",
            symbol: "aOptSUSD",
            decimals: 18,
            underlyingAddress: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
            underlyingSymbol: "sUSD",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf",
            variableDebtToken: "0x77CA01483f379E58174739308945f044e1a764dc",
            symbol: "aOptOP",
            decimals: 18,
            underlyingAddress: "0x4200000000000000000000000000000000000042",
            underlyingSymbol: "OP",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA",
            variableDebtToken: "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907",
            symbol: "aOptwstETH",
            decimals: 18,
            underlyingAddress: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
            underlyingSymbol: "wstETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x8Eb270e296023E9D92081fdF967dDd7878724424",
            variableDebtToken: "0xCE186F6Cccb0c955445bb9d10C59caE488Fea559",
            symbol: "aOptLUSD",
            decimals: 18,
            underlyingAddress: "0xc40F949F8a4e094D1b49a23ea9241D289B7b2819",
            underlyingSymbol: "LUSD",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692",
            variableDebtToken: "0xA8669021776Bc142DfcA87c21b4A52595bCbB40a",
            symbol: "aOptMAI",
            decimals: 18,
            underlyingAddress: "0xdFA46478F9e5EA86d57387849598dbFB2e964b02",
            underlyingSymbol: "MAI",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x724dc807b04555b71ed48a6896b6F41593b8C637",
            variableDebtToken: "0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6",
            symbol: "aOptrETH",
            decimals: 18,
            underlyingAddress: "0x9Bcef72be871e61ED4fBbc7630889beE758eb81D",
            underlyingSymbol: "rETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5",
            variableDebtToken: "0x5D557B07776D12967914379C71a1310e917C7555",
            symbol: "aOptUSDCn",
            decimals: 6,
            underlyingAddress: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
            underlyingSymbol: "USDC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.BORROW, n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
        ],
        m = [
          {
            baseAssetAddress: "0x2e44e174f7D53F0212823acC11C01A11d58c5bCB",
            symbol: "cUSDCv3",
            decimals: 6,
            underlyingAddress: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
            underlyingSymbol: "USDC",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [],
          },
        ],
        E = [
          {
            chainId: 10,
            expiry: "2024-09-26T00:00:00.000Z",
            address: "0x24fb77c8c776c75f869bc65e6856af56f57d919f",
            symbol: "PT-wstETH-26SEP2024",
            pt: {
              address: "0xf4225f061e5e01aa59de5e615729a9180301eb07",
              symbol: "PT-wstETH-26SEP2024",
              name: "PT-wstETH-26SEP2024",
              decimals: 18,
            },
            yt: {
              address: "0x1dfe41cc7f7860ba7f1076ca6d0fedd707c87a00",
              symbol: "YT-wstETH-26SEP2024",
              name: "YT-wstETH-26SEP2024",
              decimals: 18,
            },
            lp: {
              address: "0x24fb77c8c776c75f869bc65e6856af56f57d919f",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
              symbol: "wstETH",
              name: "wstETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [n.IM.PROVIDE_LIQUIDITY, n.IM.REMOVE_LIQUIDITY],
          },
          {
            chainId: 10,
            expiry: "2024-06-27T00:00:00.000Z",
            address: "0x0c485feb9e6fee816652ea8f3bed2a8f59296e40",
            symbol: "PT-rETH-27JUN2024",
            pt: {
              address: "0xaa92ea52612fa5ee5aba5510682485c19750cb82",
              symbol: "PT-rETH-27JUN2024",
              name: "PT-rETH-27JUN2024",
              decimals: 18,
            },
            yt: {
              address: "0xe8f0cf61598e0d7d20f99b978bdeff4d4222feb8",
              symbol: "YT-rETH-27JUN2024",
              name: "YT-rETH-27JUN2024",
              decimals: 18,
            },
            lp: {
              address: "0x0c485feb9e6fee816652ea8f3bed2a8f59296e40",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
              symbol: "rETH",
              name: "rETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [n.IM.PROVIDE_LIQUIDITY, n.IM.REMOVE_LIQUIDITY],
          },
        ],
        u = [];
      var D = s(9741);
      let A = [
          {
            aToken: "0xD4a0e0b9149BCee3C920d2E00b5dE09138fd8bb7",
            variableDebtToken: "0x24e6e0795b3c7c71D965fCc4f371803d1c1DcA1E",
            symbol: "aBasWETH",
            decimals: 18,
            underlyingAddress: "0x4200000000000000000000000000000000000006",
            underlyingSymbol: "WETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0xcf3D55c10DB69f28fD1A75Bd73f3D8A2d9c595ad",
            variableDebtToken: "0x1DabC36f19909425f654777249815c073E8Fd79F",
            symbol: "aBascbETH",
            decimals: 18,
            underlyingAddress: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
            underlyingSymbol: "cbETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x0a1d576f3eFeF75b330424287a95A366e8281D54",
            variableDebtToken: "0x7376b2F323dC56fCd4C191B34163ac8a84702DAB",
            symbol: "aBasUSDbC",
            decimals: 6,
            underlyingAddress: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
            underlyingSymbol: "USDbC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x99CBC45ea5bb7eF3a5BC08FB1B7E56bB2442Ef0D",
            variableDebtToken: "0x41A7C3f5904ad176dACbb1D99101F59ef0811DC1",
            symbol: "aBaswstETH",
            decimals: 18,
            underlyingAddress: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
            underlyingSymbol: "wstETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x4e65fE4DbA92790696d040ac24Aa414708F5c0AB",
            variableDebtToken: "0x59dca05b6c26dbd64b5381374aAaC5CD05644C28",
            symbol: "aBasUSDC",
            decimals: 6,
            underlyingAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            underlyingSymbol: "USDC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x7C307e128efA31F540F2E2d976C995E0B65F51F6",
            variableDebtToken: "0x8D2e3F1f4b38AA9f1ceD22ac06019c7561B03901",
            symbol: "aBasweETH",
            decimals: 18,
            underlyingAddress: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
            underlyingSymbol: "weETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0xBdb9300b7CDE636d9cD4AFF00f6F009fFBBc8EE6",
            variableDebtToken: "0x05e08702028de6AaD395DC6478b554a56920b9AD",
            symbol: "aBascbBTC",
            decimals: 8,
            underlyingAddress: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
            underlyingSymbol: "cbBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x067ae75628177FD257c2B1e500993e1a0baBcBd1",
            variableDebtToken: "0x38e59ADE183BbEb94583d44213c8f3297e9933e9",
            symbol: "aBasGHO",
            decimals: 18,
            underlyingAddress: "0x6Bb7a212910682DCFdbd5BCBb3e28FB4E8da10Ee",
            underlyingSymbol: "GHO",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.REPAY, n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x90DA57E0A6C0d166Bf15764E03b83745Dc90025B",
            variableDebtToken: "0x03D01595769333174036832e18fA2f17C74f8161",
            symbol: "aBasEURC",
            decimals: 6,
            underlyingAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
            underlyingSymbol: "EURC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.FLASHLOAN,
            ],
          },
          {
            aToken: "0x90072A4aA69B5Eb74984Ab823EFC5f91e90b3a72",
            variableDebtToken: "",
            symbol: "aBasLBTC",
            decimals: 8,
            underlyingAddress: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
            underlyingSymbol: "LBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0xDD5745756C2de109183c6B5bB886F9207bEF114D",
            variableDebtToken: "",
            symbol: "aBasezETH",
            decimals: 18,
            underlyingAddress: "0x2416092f143378750bb29b79eD961ab195CcEea5",
            underlyingSymbol: "ezETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x80a94C36747CF51b2FbabDfF045f6D22c1930eD1",
            variableDebtToken: "",
            symbol: "aBaswrsETH",
            decimals: 18,
            underlyingAddress: "0xEDfa23602D0EC14714057867A78d01e94176BEA0",
            underlyingSymbol: "wrsETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
          {
            aToken: "0x67EAF2BeE4384a2f84Da9Eb8105C661C123736BA",
            variableDebtToken: "",
            symbol: "aBasAAVE",
            decimals: 18,
            underlyingAddress: "0x63706e401c06ac8513145b7687A14804d17f814b",
            underlyingSymbol: "AAVE",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
        ],
        I = [
          {
            baseAssetAddress: "0xb125E6687d4313864e53df431d5425969c15Eb2F",
            symbol: "cUSDCv3",
            decimals: 6,
            underlyingAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            underlyingSymbol: "USDC",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
                name: "Coinbase Wrapped Staked ETH",
                symbol: "cbETH",
                decimals: 18,
              },
              {
                address: "0x4200000000000000000000000000000000000006",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
              {
                address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
                name: "Wrapped Liquid Staked Ether 2.0",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
                name: "Coinbase Wrapped BTC",
                symbol: "cbBTC",
                decimals: 8,
              },
            ],
          },
          {
            baseAssetAddress: "0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf",
            symbol: "cUSDbCv3",
            decimals: 6,
            underlyingAddress: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
            underlyingSymbol: "USDbC",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
                name: "Coinbase Wrapped Staked ETH",
                symbol: "cbETH",
                decimals: 18,
              },
              {
                address: "0x4200000000000000000000000000000000000006",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
            ],
          },
          {
            baseAssetAddress: "0x784efeB622244d2348d4F2522f8860B96fbEcE89",
            symbol: "cAEROv3",
            decimals: 18,
            underlyingAddress: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
            underlyingSymbol: "AERO",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0x4200000000000000000000000000000000000006",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
              {
                address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
                name: "Wrapped Liquid Staked Ether 2.0",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
                name: "Coinbase Wrapped BTC",
                symbol: "cbBTC",
                decimals: 8,
              },
              {
                address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                name: "USDC",
                symbol: "USDC",
                decimals: 6,
              },
            ],
          },
          {
            baseAssetAddress: "0x46e6b214b524310239732D51387075E0e70970bf",
            symbol: "cWETHv3",
            decimals: 18,
            underlyingAddress: "0x4200000000000000000000000000000000000006",
            underlyingSymbol: "WETH",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
                name: "Wrapped Liquid Staked Ether 2.0",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
                name: "Coinbase Wrapped BTC",
                symbol: "cbBTC",
                decimals: 8,
              },
              {
                address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                name: "USDC",
                symbol: "USDC",
                decimals: 6,
              },
              {
                address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
                name: "Coinbase Wrapped Staked Ether",
                symbol: "cbETH",
                decimals: 18,
              },
              {
                address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
                name: "Renzo Restaked ETH",
                symbol: "ezETH",
                decimals: 18,
              },
              {
                address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
                name: "Wrapped eETH",
                symbol: "weETH.base",
                decimals: 18,
              },
              {
                address: "0xEDfa23602D0EC14714057867A78d01e94176BEA0",
                name: "rsETHWrapper",
                symbol: "wrsETH",
                decimals: 18,
              },
              {
                address: "0x7FcD174E80f264448ebeE8c88a7C4476AAF58Ea6",
                name: "Wrapped Super OETH",
                symbol: "wsuperOETHb",
                decimals: 18,
              },
            ],
          },
          {
            baseAssetAddress: "0x2c776041CCFe903071AF44aa147368a9c8EEA518",
            symbol: "cUSDSv3",
            decimals: 18,
            underlyingAddress: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
            underlyingSymbol: "USDS",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0x5875eEE11Cf8398102FdAd704C9E96607675467a",
                name: "Savings USDS",
                symbol: "sUSDS",
                decimals: 18,
              },
              {
                address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
                name: "Coinbase Wrapped BTC",
                symbol: "cbBTC",
                decimals: 8,
              },
            ],
          },
        ],
        T = [
          {
            chainId: 8453,
            expiry: "2025-05-29T00:00:00.000Z",
            address: "0x727cebacfb10ffd353fc221d06a862b437ec1735",
            symbol: "PT-LBTC-29MAY2025",
            pt: {
              address: "0x5d746848005507da0b1717c137a10c30ad9ee307",
              symbol: "PT-LBTC-29MAY2025",
              name: "PT-LBTC-29MAY2025",
              decimals: 8,
            },
            yt: {
              address: "0x5fd84c3dd5c00ab9e04bd94685b55e8dd0c1e3fd",
              symbol: "YT-LBTC-29MAY2025",
              name: "YT-LBTC-29MAY2025",
              decimals: 8,
            },
            lp: {
              address: "0x727cebacfb10ffd353fc221d06a862b437ec1735",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xecac9c5f704e954931349da37f60e39f515c11c1",
              symbol: "LBTC",
              name: "LBTC",
              decimals: 8,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x621d4d92e9bed484e6d2cb8a37d342c804a0908c",
            symbol: "PT-Aerodrome VIR/CBBTC-26JUN2025",
            pt: {
              address: "0x603e2d1af3d0673f4af756b6e12a2044bfebb714",
              symbol: "PT-Aerodrome VIR/CBBTC-26JUN2025",
              name: "PT-Aerodrome VIR/CBBTC-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0xce714a2ce5ecec1ba7efdc6456f12c4e7b46fa69",
              symbol: "YT-Aerodrome VIR/CBBTC-26JUN2025",
              name: "YT-Aerodrome VIR/CBBTC-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0x621d4d92e9bed484e6d2cb8a37d342c804a0908c",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xb909f567c5c2bb1a4271349708cc4637d7318b4a",
              symbol: "vAMM-VIRTUAL/cbBTC",
              name: "vAMM-VIRTUAL/cbBTC",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-03-27T00:00:00.000Z",
            address: "0x14936c9b8eb798ca6291c2d6ce5de2c6cb5f1f9c",
            symbol: "PT-sUSDz-27MAR2025",
            pt: {
              address: "0xc1e4d7ca05045dfbc654b67e11124901148b1266",
              symbol: "PT-sUSDz-27MAR2025",
              name: "PT-sUSDz-27MAR2025",
              decimals: 18,
            },
            yt: {
              address: "0xb80b9f31064be8a97e4ced4e1368f45826c59868",
              symbol: "YT-sUSDz-27MAR2025",
              name: "YT-sUSDz-27MAR2025",
              decimals: 18,
            },
            lp: {
              address: "0x14936c9b8eb798ca6291c2d6ce5de2c6cb5f1f9c",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xe31ee12bdfdd0573d634124611e85338e2cbf0cf",
              symbol: "sUSDz",
              name: "sUSDz",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0x3124d41708edbdc7995a55183e802e3d9d0d5ef1",
            symbol: "PT-mUSDC-26JUN2025",
            pt: {
              address: "0x2a9e9256e0d1ad0f7f9d7c7248cb7e2f06072deb",
              symbol: "PT-mUSDC-26JUN2025",
              name: "PT-mUSDC-26JUN2025",
              decimals: 6,
            },
            yt: {
              address: "0xe84009923221bb401c811643c5a5efaf56eed4ca",
              symbol: "YT-mUSDC-26JUN2025",
              name: "YT-mUSDC-26JUN2025",
              decimals: 6,
            },
            lp: {
              address: "0x3124d41708edbdc7995a55183e802e3d9d0d5ef1",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xedc817a28e8b93b03976fbd4a3ddbc9f7d176c22",
              symbol: "mUSDC",
              name: "mUSDC",
              decimals: 8,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0xecc2c994aa0c599a7f69a7cfb9106fe4dffb4341",
            symbol: "PT-wsuperOETHb-26JUN2025",
            pt: {
              address: "0x25d2b7e3b71f4edcc366e79134570704a079923a",
              symbol: "PT-wsuperOETHb-26JUN2025",
              name: "PT-wsuperOETHb-26JUN2025",
              decimals: 18,
            },
            yt: {
              address: "0x1188331820daa0a8af69c0779334d53cb4a9cef1",
              symbol: "YT-wsuperOETHb-26JUN2025",
              name: "YT-wsuperOETHb-26JUN2025",
              decimals: 18,
            },
            lp: {
              address: "0xecc2c994aa0c599a7f69a7cfb9106fe4dffb4341",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x7fcd174e80f264448ebee8c88a7c4476aaf58ea6",
              symbol: "wsuperOETHb",
              name: "wsuperOETHb",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0xd94fd7bceb29159405ae1e06ce80e51ef1a484b0",
            symbol: "PT-mcbBTC-26JUN2025",
            pt: {
              address: "0x5c6593f57ee95519ff6a8cd16a5e41ff50af239a",
              symbol: "PT-mcbBTC-26JUN2025",
              name: "PT-mcbBTC-26JUN2025",
              decimals: 8,
            },
            yt: {
              address: "0xdc2ffc7b4bd5a38d5842e5fdbb407e731dd30796",
              symbol: "YT-mcbBTC-26JUN2025",
              name: "YT-mcbBTC-26JUN2025",
              decimals: 8,
            },
            lp: {
              address: "0xd94fd7bceb29159405ae1e06ce80e51ef1a484b0",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xf877acafa28c19b96727966690b2f44d35ad5976",
              symbol: "mcbBTC",
              name: "mcbBTC",
              decimals: 8,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-12-25T00:00:00.000Z",
            address: "0x483f2e223c58a5ef19c4b32fbc6de57709749cb3",
            symbol: "PT-cbETH-25DEC2025",
            pt: {
              address: "0xe46c8ba948f8071b425a1f7ba45c0a65cbacea2e",
              symbol: "PT-cbETH-25DEC2025",
              name: "PT-cbETH-25DEC2025",
              decimals: 18,
            },
            yt: {
              address: "0xf9da8f69d518d7f6488179014f475e843ee2defd",
              symbol: "YT-cbETH-25DEC2025",
              name: "YT-cbETH-25DEC2025",
              decimals: 18,
            },
            lp: {
              address: "0x483f2e223c58a5ef19c4b32fbc6de57709749cb3",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22",
              symbol: "cbETH",
              name: "cbETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-07-31T00:00:00.000Z",
            address: "0x6144511e1bd935c258b7b9075f120474df1b1e5f",
            symbol: "PT-aBasGHO-31JUL2025",
            pt: {
              address: "0xb1847b85da0595c6f72b0757ee292bd472dca45e",
              symbol: "PT-aBasGHO-31JUL2025",
              name: "PT-aBasGHO-31JUL2025",
              decimals: 18,
            },
            yt: {
              address: "0x5cd855d8dbe1e94065622d83d2e112a3a168d1cf",
              symbol: "YT-aBasGHO-31JUL2025",
              name: "YT-aBasGHO-31JUL2025",
              decimals: 18,
            },
            lp: {
              address: "0x6144511e1bd935c258b7b9075f120474df1b1e5f",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x067ae75628177fd257c2b1e500993e1a0babcbd1",
              symbol: "aBasGHO",
              name: "aBasGHO",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-09-25T00:00:00.000Z",
            address: "0xa6b8cfe75ca5e1b2a527aa255d10521faaf24b61",
            symbol: "PT-yvBal-GHO-USR-25SEP2025",
            pt: {
              address: "0xe4862da6e20c3a2a4e437a0ecdb823a2aebbf140",
              symbol: "PT-yvBal-GHO-USR-25SEP2025",
              name: "PT-yvBal-GHO-USR-25SEP2025",
              decimals: 18,
            },
            yt: {
              address: "0xd7bc85f4aa2315c5fe7f256b314ed9c083027c23",
              symbol: "YT-yvBal-GHO-USR-25SEP2025",
              name: "YT-yvBal-GHO-USR-25SEP2025",
              decimals: 18,
            },
            lp: {
              address: "0xa6b8cfe75ca5e1b2a527aa255d10521faaf24b61",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x69efa3cd7fc773fe227b9cc4f41132dcde020a29",
              symbol: "yvBal-GHO-USR",
              name: "yvBal-GHO-USR",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-09-25T00:00:00.000Z",
            address: "0x715509bde846104cf2ccebf6fdf7ef1bb874bc45",
            symbol: "PT-USR-25SEP2025",
            pt: {
              address: "0xa6f0a4d18b6f6ddd408936e81b7b3a8befa18e77",
              symbol: "PT-USR-25SEP2025",
              name: "PT-USR-25SEP2025",
              decimals: 18,
            },
            yt: {
              address: "0x61468ea4d55c02744041f16daf8ed0262891661f",
              symbol: "YT-USR-25SEP2025",
              name: "YT-USR-25SEP2025",
              decimals: 18,
            },
            lp: {
              address: "0x715509bde846104cf2ccebf6fdf7ef1bb874bc45",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x35e5db674d8e93a03d814fa0ada70731efe8a4b9",
              symbol: "USR",
              name: "USR",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-07-31T00:00:00.000Z",
            address: "0xa46cac2243ecd83a6a9ad58232c1967ebd14d41b",
            symbol: "PT-sKAITO-31JUL2025",
            pt: {
              address: "0xa28a34f1e16d845a0a709bafaac3831ca7a417a7",
              symbol: "PT-sKAITO-31JUL2025",
              name: "PT-sKAITO-31JUL2025",
              decimals: 18,
            },
            yt: {
              address: "0x5f42d7365ed7b51a77c275e9f36a8d8f9cc56750",
              symbol: "YT-sKAITO-31JUL2025",
              name: "YT-sKAITO-31JUL2025",
              decimals: 18,
            },
            lp: {
              address: "0xa46cac2243ecd83a6a9ad58232c1967ebd14d41b",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x548d3b444da39686d1a6f1544781d154e7cd1ef7",
              symbol: "sKAITO",
              name: "sKAITO",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-04-24T00:00:00.000Z",
            address: "0xe15578523937ed7f08e8f7a1fa8a021e07025a08",
            symbol: "PT-USR-24APR2025",
            pt: {
              address: "0xec443e7e0e745348e500084892c89218b3ba4683",
              symbol: "PT-USR-24APR2025",
              name: "PT-USR-24APR2025",
              decimals: 18,
            },
            yt: {
              address: "0x22cf19b7d8de1b53bbd9792e12ea86191985731f",
              symbol: "YT-USR-24APR2025",
              name: "YT-USR-24APR2025",
              decimals: 18,
            },
            lp: {
              address: "0xe15578523937ed7f08e8f7a1fa8a021e07025a08",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x35e5db674d8e93a03d814fa0ada70731efe8a4b9",
              symbol: "USR",
              name: "USR",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-09-25T00:00:00.000Z",
            address: "0xd7c3cece4bd8ff41ade50d59ece7bc91dc2545c1",
            symbol: "PT-sUSDz-25SEP2025",
            pt: {
              address: "0x2c14e596c51fb6c0dbad96858b1829835257b93b",
              symbol: "PT-sUSDz-25SEP2025",
              name: "PT-sUSDz-25SEP2025",
              decimals: 18,
            },
            yt: {
              address: "0x18839da000e86b3a55fe3f0e32cfe6ef23e84096",
              symbol: "YT-sUSDz-25SEP2025",
              name: "YT-sUSDz-25SEP2025",
              decimals: 18,
            },
            lp: {
              address: "0xd7c3cece4bd8ff41ade50d59ece7bc91dc2545c1",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xe31ee12bdfdd0573d634124611e85338e2cbf0cf",
              symbol: "sUSDz",
              name: "sUSDz",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-09-25T00:00:00.000Z",
            address: "0xee2058f408a43f6d952ebd55812b4bf0d1ca8854",
            symbol: "PT-yoETH-25SEP2025",
            pt: {
              address: "0xde4f5adc052aed60000f3171785b168a3d27dcd7",
              symbol: "PT-yoETH-25SEP2025",
              name: "PT-yoETH-25SEP2025",
              decimals: 18,
            },
            yt: {
              address: "0x621bede1ca0043e96735bf7d1bede903d55cd62a",
              symbol: "YT-yoETH-25SEP2025",
              name: "YT-yoETH-25SEP2025",
              decimals: 18,
            },
            lp: {
              address: "0xee2058f408a43f6d952ebd55812b4bf0d1ca8854",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x3a43aec53490cb9fa922847385d82fe25d0e9de7",
              symbol: "yoETH",
              name: "yoETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-09-25T00:00:00.000Z",
            address: "0x4eae2e40c6612005214ea919cc7653da853ed409",
            symbol: "PT-LBTC-scaled18-25SEP2025",
            pt: {
              address: "0x7c3039d2385000cf366e3ac6ab9d7642e8440dd2",
              symbol: "PT-LBTC-scaled18-25SEP2025",
              name: "PT-LBTC-scaled18-25SEP2025",
              decimals: 18,
            },
            yt: {
              address: "0x86725be2f3b01a2b18617f77542800ed4f4cfdca",
              symbol: "YT-LBTC-scaled18-25SEP2025",
              name: "YT-LBTC-scaled18-25SEP2025",
              decimals: 18,
            },
            lp: {
              address: "0x4eae2e40c6612005214ea919cc7653da853ed409",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x53176cadd446700fa6b89f840357ac586d7e33db",
              symbol: "LBTC-scaled18",
              name: "LBTC-scaled18",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-12-18T00:00:00.000Z",
            address: "0x0a3ff49732b13e11b91f1c8d61c6c9c10bf5a36c",
            symbol: "PT-wcgUSD-18DEC2025",
            pt: {
              address: "0x6ab33a86b72e1d343730c6030ffda992cd43035e",
              symbol: "PT-wcgUSD-18DEC2025",
              name: "PT-wcgUSD-18DEC2025",
              decimals: 6,
            },
            yt: {
              address: "0x3d2e091fbf85ff7f3b20f2d96488dd9c92441a69",
              symbol: "YT-wcgUSD-18DEC2025",
              name: "YT-wcgUSD-18DEC2025",
              decimals: 6,
            },
            lp: {
              address: "0x0a3ff49732b13e11b91f1c8d61c6c9c10bf5a36c",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5ae84075f0e34946821a8015dab5299a00992721",
              symbol: "wcgUSD",
              name: "wcgUSD",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2026-06-25T00:00:00.000Z",
            address: "0x9621342d8fb87359abe8ab2270f402f202f87b67",
            symbol: "PT-wsuperOETHb-25JUN2026",
            pt: {
              address: "0x5fab08f1ec79ca9c21c4516aa38a12ef2c42c0cc",
              symbol: "PT-wsuperOETHb-25JUN2026",
              name: "PT-wsuperOETHb-25JUN2026",
              decimals: 18,
            },
            yt: {
              address: "0x0000fcec03d0b1fa261985175b3f0e2d98e3ca24",
              symbol: "YT-wsuperOETHb-25JUN2026",
              name: "YT-wsuperOETHb-25JUN2026",
              decimals: 18,
            },
            lp: {
              address: "0x9621342d8fb87359abe8ab2270f402f202f87b67",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x7fcd174e80f264448ebee8c88a7c4476aaf58ea6",
              symbol: "wsuperOETHb",
              name: "wsuperOETHb",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-06-26T00:00:00.000Z",
            address: "0xad4e0efc7b641591dc1a94efc5d352d098516d2e",
            symbol: "PT-wcgUSD-26JUN2025",
            pt: {
              address: "0x43fe057b02ce301a2b09c9873676032892566de7",
              symbol: "PT-wcgUSD-26JUN2025",
              name: "PT-wcgUSD-26JUN2025",
              decimals: 6,
            },
            yt: {
              address: "0x24d852316bc60502982cc0177e90433997c5e6af",
              symbol: "YT-wcgUSD-26JUN2025",
              name: "YT-wcgUSD-26JUN2025",
              decimals: 6,
            },
            lp: {
              address: "0xad4e0efc7b641591dc1a94efc5d352d098516d2e",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5ae84075f0e34946821a8015dab5299a00992721",
              symbol: "wcgUSD",
              name: "wcgUSD",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2026-01-29T00:00:00.000Z",
            address: "0x53fb20ff03ef94ef224557cc6262e0f11c20f718",
            symbol: "PT-sKAITO-29JAN2026",
            pt: {
              address: "0xc7eb21815b9698d627410f7b1dffd9e65c980ebd",
              symbol: "PT-sKAITO-29JAN2026",
              name: "PT-sKAITO-29JAN2026",
              decimals: 18,
            },
            yt: {
              address: "0xbf0741d9ec96d2e94b6982247c1cd6c23d5ead08",
              symbol: "YT-sKAITO-29JAN2026",
              name: "YT-sKAITO-29JAN2026",
              decimals: 18,
            },
            lp: {
              address: "0x53fb20ff03ef94ef224557cc6262e0f11c20f718",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x548d3b444da39686d1a6f1544781d154e7cd1ef7",
              symbol: "sKAITO",
              name: "sKAITO",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2026-03-26T00:00:00.000Z",
            address: "0xa679ce6d07cbe579252f0f9742fc73884b1c611c",
            symbol: "PT-yoUSD-26MAR2026",
            pt: {
              address: "0x0177055f7429d3bd6b19f2dd591127db871a510e",
              symbol: "PT-yoUSD-26MAR2026",
              name: "PT-yoUSD-26MAR2026",
              decimals: 6,
            },
            yt: {
              address: "0x1658a0a2e5d06b0260cee8339bc08f07e374a5e2",
              symbol: "YT-yoUSD-26MAR2026",
              name: "YT-yoUSD-26MAR2026",
              decimals: 6,
            },
            lp: {
              address: "0xa679ce6d07cbe579252f0f9742fc73884b1c611c",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x0000000f2eb9f69274678c76222b35eec7588a65",
              symbol: "yoUSD",
              name: "yoUSD",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2026-03-26T00:00:00.000Z",
            address: "0x5d6e67fce4ad099363d062815b784d281460c49b",
            symbol: "PT-yoETH-26MAR2026",
            pt: {
              address: "0x1a5c5ea50717a2ea0e4f7036fb289349deaab58b",
              symbol: "PT-yoETH-26MAR2026",
              name: "PT-yoETH-26MAR2026",
              decimals: 18,
            },
            yt: {
              address: "0x0ec1292d5ce7220be4c8e3a16eff7ddd165c9111",
              symbol: "YT-yoETH-26MAR2026",
              name: "YT-yoETH-26MAR2026",
              decimals: 18,
            },
            lp: {
              address: "0x5d6e67fce4ad099363d062815b784d281460c49b",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x3a43aec53490cb9fa922847385d82fe25d0e9de7",
              symbol: "yoETH",
              name: "yoETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-12-11T00:00:00.000Z",
            address: "0x8991847176b1d187e403dd92a4e55fc8d7684538",
            symbol: "PT-USDe-11DEC2025",
            pt: {
              address: "0x194b8fed256c02ef1036ed812cae0c659ee6f7fd",
              symbol: "PT-USDe-11DEC2025",
              name: "PT-USDe-11DEC2025",
              decimals: 18,
            },
            yt: {
              address: "0x1490516d8391e4d0bcbd13b7a56b4fe4996478be",
              symbol: "YT-USDe-11DEC2025",
              name: "YT-USDe-11DEC2025",
              decimals: 18,
            },
            lp: {
              address: "0x8991847176b1d187e403dd92a4e55fc8d7684538",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
              symbol: "USDe",
              name: "USDe",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-12-18T00:00:00.000Z",
            address: "0x496f251487f6fdc8355df5eb5940c6285ef7314a",
            symbol: "PT-gtUSDa-18DEC2025",
            pt: {
              address: "0xbc4df9839d7a14dab0e1a5b44abed8a69324a74f",
              symbol: "PT-gtUSDa-18DEC2025",
              name: "PT-gtUSDa-18DEC2025",
              decimals: 6,
            },
            yt: {
              address: "0x888f73c4030baa5361d0389fa082d4eb8883c4b7",
              symbol: "YT-gtUSDa-18DEC2025",
              name: "YT-gtUSDa-18DEC2025",
              decimals: 6,
            },
            lp: {
              address: "0x496f251487f6fdc8355df5eb5940c6285ef7314a",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x000000000001cdb57e58fa75fe420a0f4d6640d5",
              symbol: "gtUSDa",
              name: "gtUSDa",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2026-03-26T00:00:00.000Z",
            address: "0xc25b8b6e56f403b690c0eac8a64c26af7689b49f",
            symbol: "PT-yoEUR-26MAR2026",
            pt: {
              address: "0x3d94e67179d6d87b79b6d600ed83ee0fe15034c8",
              symbol: "PT-yoEUR-26MAR2026",
              name: "PT-yoEUR-26MAR2026",
              decimals: 6,
            },
            yt: {
              address: "0x625f92ec1fa7ea5b437c5c7bf9268800de0503a0",
              symbol: "YT-yoEUR-26MAR2026",
              name: "YT-yoEUR-26MAR2026",
              decimals: 6,
            },
            lp: {
              address: "0xc25b8b6e56f403b690c0eac8a64c26af7689b49f",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x50c749ae210d3977adc824ae11f3c7fd10c871e9",
              symbol: "yoEUR",
              name: "yoEUR",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-12-04T00:00:00.000Z",
            address: "0x10c2b26cb728b672f78c5badda8c5376d08cbfd0",
            symbol: "PT-YU-4DEC2025",
            pt: {
              address: "0x945c047af002588f17efd1cba951a5a447284d3c",
              symbol: "PT-YU-4DEC2025",
              name: "PT-YU-4DEC2025",
              decimals: 18,
            },
            yt: {
              address: "0x6df7e4c782a19cbfd3c6d9020b4ce5eb5272fa6b",
              symbol: "YT-YU-4DEC2025",
              name: "YT-YU-4DEC2025",
              decimals: 18,
            },
            lp: {
              address: "0x10c2b26cb728b672f78c5badda8c5376d08cbfd0",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xe868084cf08f3c3db11f4b73a95473762d9463f7",
              symbol: "YU",
              name: "YU",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-12-18T00:00:00.000Z",
            address: "0xd5dd84c7b8919dceb09536a0fef6db9046805127",
            symbol: "PT-rETH-18DEC2025",
            pt: {
              address: "0xdd3574d0b6e58050b85091f01d62a4435b49287a",
              symbol: "PT-rETH-18DEC2025",
              name: "PT-rETH-18DEC2025",
              decimals: 18,
            },
            yt: {
              address: "0xbef1cc67f26a517c7d742a5c77f25c4285a07985",
              symbol: "YT-rETH-18DEC2025",
              name: "YT-rETH-18DEC2025",
              decimals: 18,
            },
            lp: {
              address: "0xd5dd84c7b8919dceb09536a0fef6db9046805127",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0xb6fe221fe9eef5aba221c348ba20a1bf5e73624c",
              symbol: "rETH",
              name: "rETH",
              decimals: 18,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2025-09-25T00:00:00.000Z",
            address: "0x44e2b05b2c17a12b37f11de18000922e64e23faa",
            symbol: "PT-yoUSD-25SEP2025",
            pt: {
              address: "0xb04cee9901c0a8d783fe280ded66e60c13a4e296",
              symbol: "PT-yoUSD-25SEP2025",
              name: "PT-yoUSD-25SEP2025",
              decimals: 6,
            },
            yt: {
              address: "0xe8652183d21bd5de4c8168c1d6c085db5333df11",
              symbol: "YT-yoUSD-25SEP2025",
              name: "YT-yoUSD-25SEP2025",
              decimals: 6,
            },
            lp: {
              address: "0x44e2b05b2c17a12b37f11de18000922e64e23faa",
              symbol: "PENDLE-LPT",
              name: "PENDLE-LPT",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x0000000f2eb9f69274678c76222b35eec7588a65",
              symbol: "yoUSD",
              name: "yoUSD",
              decimals: 6,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
          {
            chainId: 8453,
            expiry: "2026-02-19T00:00:00.000Z",
            address: "0x4ac60d0f9f98287764681df14298c1a11006aefd",
            symbol: "PT-uniBTC-scaled18-19FEB2026",
            pt: {
              address: "0xf2a69e0191aad3a7a124397972d0ca0405c1d8d1",
              symbol: "PT-uniBTC-scaled18-19FEB2026",
              name: "PT-uniBTC-scaled18-19FEB2026",
              decimals: 18,
            },
            yt: {
              address: "0x28888f74ca99924d5a2d48e82bf3d32cc7ec0355",
              symbol: "YT-uniBTC-scaled18-19FEB2026",
              name: "YT-uniBTC-scaled18-19FEB2026",
              decimals: 18,
            },
            lp: {
              address: "0x4ac60d0f9f98287764681df14298c1a11006aefd",
              symbol: "PLP-uniBTC-scaled18-19FEB2026",
              name: "PLP-uniBTC-scaled18-19FEB2026",
              decimals: 18,
            },
            underlyingAsset: {
              address: "0x93919784c523f39cacaa98ee0a9d96c3f32b593e",
              symbol: "uniBTC",
              name: "uniBTC",
              decimals: 8,
            },
            protocols: [n.GP.PENDLE],
            buildingBlocks: [
              n.IM.PROVIDE_LIQUIDITY,
              n.IM.REMOVE_LIQUIDITY,
              n.IM.YIELD_TRADING,
            ],
          },
        ],
        p = [],
        y = [
          {
            name: "USR / USDC",
            id: "0xff0f2bd52ca786a4f8149f96622885e880222d8bed12bbbf5950296be8d03f89",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "weETH / WETH",
            id: "0xfd0895ba253889c243bf59bc4b96fd1e06d68631241383947b04d1c293a0cfea",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
              symbol: "weETH",
              decimals: 18,
              name: "Wrapped eETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "bsdETH / eUSD",
            id: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
            loanAsset: {
              address: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
              symbol: "eUSD",
              decimals: 18,
              name: "Electronic Dollar",
            },
            collateralAsset: {
              address: "0xCb327b99fF831bF8223cCEd12B1338FF3aA322Ff",
              symbol: "bsdETH",
              decimals: 18,
              name: "Based ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbBTC / USR",
            id: "0xf8b9786f2f2163e7d618cd8eaf5c0380a1af22424184356dfdd1912f18cb069a",
            loanAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            collateralAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / EURC",
            id: "0xf7e40290f8ca1d5848b3c129502599aa0f0602eb5f5235218797a34242719561",
            loanAsset: {
              address: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
              symbol: "EURC",
              decimals: 6,
              name: "EURC",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / MAI",
            id: "0xf761e909ee2f87f118e36b7efb42c5915752a6d39263eec0c000c15d0ab7f489",
            loanAsset: {
              address: "0xbf1aeA8670D2528E08334083616dD9C5F3B087aE",
              symbol: "MAI",
              decimals: 18,
              name: "Mai Stablecoin",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "aprUSR / USDC",
            id: "0xf4d219ed36d38634f89c992a1bc50e73324f9c5c663d29d089d3f8aa74c700f3",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xC484D83F667b779cc9907248101214235642258B",
              symbol: "aprUSR",
              decimals: 18,
              name: "Apostro Resolv USR",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "ezETH / USDC",
            id: "0xf24417ee06adc0b0836cf0dbec3ba56c1059f62f53a55990a38356d42fa75fa2",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
              symbol: "ezETH",
              decimals: 18,
              name: "Renzo Restaked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / EURA",
            id: "0xefb576606581c5ac9f731d80cb453519d06776fdc1de51d6230d180d74890c3b",
            loanAsset: {
              address: "0xA61BeB4A3d02decb01039e378237032B351125B4",
              symbol: "EURA",
              decimals: 18,
              name: "EURA (previously agEUR)",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / USDC",
            id: "0xe73d71cacb1a11ce1033966787e21b85573b8b8a3936bbd7d83b2546a1077c26",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "AERO / USDC",
            id: "0xe63d3f30d872e49e86cf06b2ffab5aa016f26095e560cb8d6486f9a5f774631e",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
              symbol: "AERO",
              decimals: 18,
              name: "Aerodrome Finance",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / WETH",
            id: "0xe3c4d4d0e214fdc52635d7f9b2f7b3b0081771ae2efeb3cb5aae26009f34f7a7",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "uAPT / USDC",
            id: "0xe0a6ea61ee79c0ea05268064525538b8290139b60b972fc83c5d5d26cec7cc89",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x9c0e042d65a2e1fF31aC83f404E5Cb79F452c337",
              symbol: "uAPT",
              decimals: 18,
              name: "Aptos (Universal)",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / USDA",
            id: "0xdfd701f0e53c7281432a11743408cc52a6cf27761e7c70829318a0213a61b1b2",
            loanAsset: {
              address: "0x0000206329b97DB379d5E1Bf586BbDB969C63274",
              symbol: "USDA",
              decimals: 18,
              name: "USDA",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "bsdETH / WETH",
            id: "0xdf6aa0df4eb647966018f324db97aea09d2a7dde0d3c0a72115e8b20d58ea81f",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xCb327b99fF831bF8223cCEd12B1338FF3aA322Ff",
              symbol: "bsdETH",
              decimals: 18,
              name: "Based ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "ezETH / WETH",
            id: "0xdf13c46bf7bd41597f27e32ae9c306eb63859c134073cb81c796ff20b520c7cf",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
              symbol: "ezETH",
              decimals: 18,
              name: "Renzo Restaked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / USDA",
            id: "0xde1979b67c815863afd1105cae097ecb71b05b0978bc1605d0a58a25231d924f",
            loanAsset: {
              address: "0x0000206329b97DB379d5E1Bf586BbDB969C63274",
              symbol: "USDA",
              decimals: 18,
              name: "USDA",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "rETH / WETH",
            id: "0xdc69cf2caae7b7d1783fb5a9576dc875888afad17ab3d1a3fc102f741441c165",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c",
              symbol: "rETH",
              decimals: 18,
              name: "Rocket Pool ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / USDC",
            id: "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "rETH / USDC",
            id: "0xdb0bc9f10a174f29a345c5f30a719933f71ccea7a2a75a632a281929bba1b535",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c",
              symbol: "rETH",
              decimals: 18,
              name: "Rocket Pool ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "AERO / USDC",
            id: "0xdaa04f6819210b11fe4e3b65300c725c32e55755e3598671559b9ae3bac453d7",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
              symbol: "AERO",
              decimals: 18,
              name: "Aerodrome Finance",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / WETH",
            id: "0xd75387f30c983be0aec58b03b51cca52337b496e38cf4effbe995531bf34901c",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LP-USR-25SEP2025 / USDC",
            id: "0xd381cbd66435415598d9db96e7c28e871099014e400a716e5838c1d25a6ca5ab",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x715509Bde846104cF2cCeBF6fdF7eF1BB874Bc45",
              symbol: "LP-USR-25SEP2025",
              decimals: 18,
              name: "Pendle LP USR 25SEP2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wBLT / USDC",
            id: "0xd1892032c68f94d2650238b363195c6c3c142ba80c0c71269d14f8ea42c0abdf",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x4E74D4Db6c0726ccded4656d0BCE448876BB4C7A",
              symbol: "wBLT",
              decimals: 18,
              name: "Wrapped BMX Liquidity Token",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USR-24APR2025 / USDC",
            id: "0xcf21c3ca9434959fbf882f7d977f90fe22b7a79e6f39cada5702b56b25e58613",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xec443e7E0e745348E500084892C89218B3ba4683",
              symbol: "PT-USR-24APR2025",
              decimals: 18,
              name: "PT Resolv USD 24APR2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / eUSD",
            id: "0xce89aeb081d719cd35cb1aafb31239c4dfd9c017b2fec26fc2e9a443461e9aea",
            loanAsset: {
              address: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
              symbol: "eUSD",
              decimals: 18,
              name: "Electronic Dollar",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "mTBILL / verUSDC",
            id: "0xca2e6f878e273f6587276b44470467f94175e92840ad0d7231e9deb64c190591",
            loanAsset: {
              address: "0x59aaF835D34b1E3dF2170e4872B785f11E2a964b",
              symbol: "verUSDC",
              decimals: 6,
              name: "Verified USDC",
            },
            collateralAsset: {
              address: "0xDD629E5241CbC5919847783e6C96B2De4754e438",
              symbol: "mTBILL",
              decimals: 18,
              name: "Midas US Treasury Bill Token",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbBTC / eUSD",
            id: "0xc9658cac13a9b9b5c1ebaa8ce19c735283cc761ff528d149a7221047bb7fab45",
            loanAsset: {
              address: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
              symbol: "eUSD",
              decimals: 18,
              name: "Electronic Dollar",
            },
            collateralAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "ezETH / WETH",
            id: "0xc338cc2dc3f6a25bace40a920eea39ff27f184899def6bda478e27e591e5cef2",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
              symbol: "ezETH",
              decimals: 18,
              name: "Renzo Restaked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / USR",
            id: "0xc2be602059f1218751ec6f137a8405166419ce408d191fc70f9714eeb301c32b",
            loanAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / wUSDM",
            id: "0xb95dd880d553f5d874534d66eb337a4811608331768c2b208440dfe0e6d901fa",
            loanAsset: {
              address: "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812",
              symbol: "wUSDM",
              decimals: 18,
              name: "Wrapped Mountain Protocol USD",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / eUSD",
            id: "0xb5d424e4af49244b074790f1f2dc9c20df948ce291fc6bcc6b59149ecf91196d",
            loanAsset: {
              address: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
              symbol: "eUSD",
              decimals: 18,
              name: "Electronic Dollar",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "hyUSD / USDC",
            id: "0xb5b3fc38249c9a0aadf7ff0fcc48ef2eec49ef746b9b74a95597132c7a614116",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xCc7FF230365bD730eE4B352cC2492CEdAC49383e",
              symbol: "hyUSD",
              decimals: 18,
              name: "High Yield USD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / sUSDS",
            id: "0xb003f1eddcaece702f8b34d684840ef913e00d6c9b0e209f67f8524bfc095733",
            loanAsset: {
              address: "0x5875eEE11Cf8398102FdAd704C9E96607675467a",
              symbol: "sUSDS",
              decimals: 18,
              name: "Savings USDS",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / WETH",
            id: "0xade6749e981ae94420956cc22c299054e05ac3564cc196bf62f4c0924c03bfdf",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LP-USR-25SEP2025 / USR",
            id: "0xad9a1896d6d8b07981f78601b2c91056658dc104c5f0b799dd52717704bd5221",
            loanAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            collateralAsset: {
              address: "0x715509Bde846104cF2cCeBF6fdF7eF1BB874Bc45",
              symbol: "LP-USR-25SEP2025",
              decimals: 18,
              name: "Pendle LP USR 25SEP2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / wUSDM",
            id: "0xabba004839c8ed6bd6f9b7ba61c7e6c4ae970530a6c4852d8f1f3aeed50888cb",
            loanAsset: {
              address: "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812",
              symbol: "wUSDM",
              decimals: 18,
              name: "Wrapped Mountain Protocol USD",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "bsdETH / USDC",
            id: "0xab3f5662f8308f7f425a4b6f7c968556b6ca9adc3e64a8d3a30c02c93f33ef0b",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xCb327b99fF831bF8223cCEd12B1338FF3aA322Ff",
              symbol: "bsdETH",
              decimals: 18,
              name: "Based ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / EURC",
            id: "0xa9b5142fa687a24c275faf731f13b52faa9873252bb4e1cb6077aa1f412edb0b",
            loanAsset: {
              address: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
              symbol: "EURC",
              decimals: 6,
              name: "EURC",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / cbBTC",
            id: "0xa7813c754ddd6a24e1a1a29ff3ea877803ac63d09efc2f121b1cf3f0bf3af2f6",
            loanAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "uSOL / USDC",
            id: "0xa60e9b888f343351dece4df8251abe5858fc5db96e8624d614a6500c3a3085ea",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
              symbol: "uSOL",
              decimals: 18,
              name: "Solana (Universal)",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "weETH / USDC",
            id: "0xa4e2843486610e6851f4e0a8fcdee819958598c71c7e99b0315904ccf162ddc3",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
              symbol: "weETH",
              decimals: 18,
              name: "Wrapped eETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "uXRP / USDC",
            id: "0xa426ca680bd5a7dc0f95942ba876a7df399cdf8149f798bcc4e94f03e35d08fa",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x2615a94df961278DcbC41Fb0a54fEc5f10a693aE",
              symbol: "uXRP",
              decimals: 18,
              name: "XRP (Universal)",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / DEGEN",
            id: "0xa15c6f1884276e208199ea5392bf8cce7ed02dceaef21a9bad35fbecc4de99e9",
            loanAsset: {
              address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
              symbol: "DEGEN",
              decimals: 18,
              name: "Degen",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / USDC",
            id: "0xa066f3893b780833699043f824e5bb88b8df039886f524f62b9a1ac83cb7f1f0",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "USYC / verUSDC",
            id: "0x9cc8439780168e725db427fa130606f2c8ad0b78c7dbda316a80ad1f32685062",
            loanAsset: {
              address: "0x59aaF835D34b1E3dF2170e4872B785f11E2a964b",
              symbol: "verUSDC",
              decimals: 6,
              name: "Verified USDC",
            },
            collateralAsset: {
              address: "0xeeE7aF832440884d2b693B4193FA2ec26A48C7d3",
              symbol: "USYC",
              decimals: 6,
              name: "US Yield Coin",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-LBTC-29MAY2025 / cbBTC",
            id: "0x9a697eb760dd12aaea23699c96ea2ebbfe48b7af64138d92c4d232b9ed380024",
            loanAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            collateralAsset: {
              address: "0x5d746848005507DA0b1717C137A10C30AD9ee307",
              symbol: "PT-LBTC-29MAY2025",
              decimals: 8,
              name: "PT Lombard LBTC 29MAY2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cUSDO / USDC",
            id: "0x99f294c452edc091c988688d501dca78a06ba559065c242b19653452e6affc7a",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x83dB73EF5192de4B6a4c92bD0141Ba1a0Dc87c65",
              symbol: "cUSDO",
              decimals: 18,
              name: "Compounding Open Dollar",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / WETH",
            id: "0x96d3ac6b4cf992e8bc3dd0855e0c84c18c34a6880f7e005e74c40096a82e0072",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbBTC / USDC",
            id: "0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "DEGEN / USDC",
            id: "0x8e1a07763061c6b9fe883ec888833674819614f5cab86af7558660e49c1942d7",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
              symbol: "DEGEN",
              decimals: 18,
              name: "Degen",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / USDC",
            id: "0x87ff0aad672898c24411f98555f958e232c048f41e6d3f2059d26c13fad07563",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / USDC",
            id: "0x8793cf302b8ffd655ab97bd1c695dbd967807e8367a65cb2f4edaf1380ba1bda",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "ezETH / WETH",
            id: "0x86021ffe2f778ed8aacecdf3dae2cdef77dbfa5e133b018cca16c52ceab58996",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
              symbol: "ezETH",
              decimals: 18,
              name: "Renzo Restaked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / WETH",
            id: "0x84662b4f95b85d6b082b68d32cf71bb565b3f22f216a65509cc2ede7dccdfe8c",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "JTRSY / verUSDC",
            id: "0x83262d91702f90d9edf6c737ceb46e59a2bcfc7ba856e1e8448b7824f83a07e3",
            loanAsset: {
              address: "0x59aaF835D34b1E3dF2170e4872B785f11E2a964b",
              symbol: "verUSDC",
              decimals: 6,
              name: "Verified USDC",
            },
            collateralAsset: {
              address: "0x8c213ee79581Ff4984583C6a801e5263418C4b86",
              symbol: "JTRSY",
              decimals: 6,
              name: "Janus Henderson Anemoy Treasury Fund",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / EURC",
            id: "0x7fc498ddcb7707d6f85f6dc81f61edb6dc8d7f1b47a83b55808904790564929a",
            loanAsset: {
              address: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
              symbol: "EURC",
              decimals: 6,
              name: "EURC",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "bsdETH / WETH",
            id: "0x7f90d72667171d72d10d62b5828d6a5ef7254b1e33718fe0c1f7dcf56dd1edc7",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xCb327b99fF831bF8223cCEd12B1338FF3aA322Ff",
              symbol: "bsdETH",
              decimals: 18,
              name: "Based ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "hyUSD / USDC",
            id: "0x7a4c2b2a0fbc16826013d41f7ca7910e4f5dcdca918a6e120be9531fc90841a3",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xCc7FF230365bD730eE4B352cC2492CEdAC49383e",
              symbol: "hyUSD",
              decimals: 18,
              name: "High Yield USD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "weETH / WETH",
            id: "0x78d11c03944e0dc298398f0545dc8195ad201a18b0388cb8058b1bcb89440971",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
              symbol: "weETH",
              decimals: 18,
              name: "Wrapped eETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / EURA",
            id: "0x738a72906ee7a6034458409dc185d4e40a5c64e93731eca818c386ba5e7d474d",
            loanAsset: {
              address: "0xA61BeB4A3d02decb01039e378237032B351125B4",
              symbol: "EURA",
              decimals: 18,
              name: "EURA (previously agEUR)",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / DEGEN",
            id: "0x718930c5327b0bece97a293c1f8e91c1505bea97e483a7a9dbc9bca4d559a848",
            loanAsset: {
              address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
              symbol: "DEGEN",
              decimals: 18,
              name: "Degen",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "USDC / DEGEN",
            id: "0x6bac0f6c8b598a04e839a3fc048212291909c40181ee7a0da942ca5c5203a4b1",
            loanAsset: {
              address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
              symbol: "DEGEN",
              decimals: 18,
              name: "Degen",
            },
            collateralAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / WETH",
            id: "0x6aa81f51dfc955df598e18006deae56ce907ac02b0b5358705f1a28fcea23cc0",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "weETH / USDC",
            id: "0x6a331b22b56c9c0ee32a1a7d6f852d2c682ea8b27a1b0f99a9c484a37a951eb7",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
              symbol: "weETH",
              decimals: 18,
              name: "Wrapped eETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / cbBTC",
            id: "0x68c9aa4a34df7133b8a72e20e453195f28b0bddb2f55d4b24008951033a20793",
            loanAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbBTC / sUSDS",
            id: "0x680f4dfd7af2baa95465a72773e1865612ee0222808a7f8acca6becd70d1be45",
            loanAsset: {
              address: "0x5875eEE11Cf8398102FdAd704C9E96607675467a",
              symbol: "sUSDS",
              decimals: 18,
              name: "Savings USDS",
            },
            collateralAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbBTC / EURC",
            id: "0x67ebd84b2fb39e3bc5a13d97e4c07abe1ea617e40654826e9abce252e95f049e",
            loanAsset: {
              address: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
              symbol: "EURC",
              decimals: 6,
              name: "EURC",
            },
            collateralAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USR-25SEP2025 / USDC",
            id: "0x669b68ae003954dde5b2be025fa373bfc6b6134fc3180ea746c31e892243ae81",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xa6F0A4D18B6f6DdD408936e81b7b3A8BEFA18e77",
              symbol: "PT-USR-25SEP2025",
              decimals: 18,
              name: "PT Resolv USD 25SEP2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "smcbBTC / USDC",
            id: "0x663d1c574cc5ec256c4256c8ed12f3cd7696f180a8f142a86a698f5989caa5d5",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x5a47C803488FE2BB0A0EAaf346b420e4dF22F3C7",
              symbol: "smcbBTC",
              decimals: 18,
              name: "Seamless cbBTC Vault",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / WETH",
            id: "0x6600aae6c56d242fa6ba68bd527aff1a146e77813074413186828fd3f1cdca91",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wsuperOETHb / msETH",
            id: "0x5fda67e2274d50fb63955db09382daf24270ae32f2924d31039fec3c50cbfbe4",
            loanAsset: {
              address: "0x7Ba6F01772924a82D9626c126347A28299E98c98",
              symbol: "msETH",
              decimals: 18,
              name: "Metronome Synth ETH",
            },
            collateralAsset: {
              address: "0x7FcD174E80f264448ebeE8c88a7C4476AAF58Ea6",
              symbol: "wsuperOETHb",
              decimals: 18,
              name: "Wrapped Super OETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbBTC / WETH",
            id: "0x5dffffc7d75dc5abfa8dbe6fad9cbdadf6680cbe1428bafe661497520c84a94c",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "uSUI / USDC",
            id: "0x5d96564285fc3830f51fe495f88c29cc1232fbca61ca8b6edc25bff921efdef2",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4",
              symbol: "uSUI",
              decimals: 18,
              name: "Sui (Universal)",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "sAMM-USDC/cUSDO / USDC",
            id: "0x5b347b3dcfed096f09040cd30a174ae354ecc0a35c996493b8fa490d6d3e79d7",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x5feDe9d65714907381A76AA9bF949219dD1c5023",
              symbol: "sAMM-USDC/cUSDO",
              decimals: 18,
              name: "Stable AMM - USDC/cUSDO",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "stEUR / USDA",
            id: "0x592517a07d8bad6e0467661583d3c15a1fee06b7b7506ac14dba250568f67b4c",
            loanAsset: {
              address: "0x0000206329b97DB379d5E1Bf586BbDB969C63274",
              symbol: "USDA",
              decimals: 18,
              name: "USDA",
            },
            collateralAsset: {
              address: "0x004626A008B1aCdC4c74ab51644093b155e59A23",
              symbol: "stEUR",
              decimals: 18,
              name: "Staked EURA",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LBTC / USR",
            id: "0x5892b4715dcd668f7a8276c5d28ddbc04860b9caf474d1806585321a99aaca2b",
            loanAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            collateralAsset: {
              address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
              symbol: "LBTC",
              decimals: 8,
              name: "Lombard Staked Bitcoin",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USR-25SEP2025 / USR",
            id: "0x580b0cfee735c839af1d15f09c8885ee6305a8bbd4fe14ace0b01454e57f48da",
            loanAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            collateralAsset: {
              address: "0xa6F0A4D18B6f6DdD408936e81b7b3A8BEFA18e77",
              symbol: "PT-USR-25SEP2025",
              decimals: 18,
              name: "PT Resolv USD 25SEP2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LBTC / USDC",
            id: "0x52a2a376586d0775e3e80621facc464f6e96d81c8cb70fd461527dde195a079f",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
              symbol: "LBTC",
              decimals: 8,
              name: "Lombard Staked Bitcoin",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "steakSUSDS / USDC",
            id: "0x5189c48e1d333d250642a96b90dc926c53f897d8b8f9e8fea71a4b14e9053fde",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xB17B070A56043e1a5a1AB7443AfAFDEbcc1168D7",
              symbol: "steakSUSDS",
              decimals: 18,
              name: "Steakhouse sUSDS",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / DEGEN",
            id: "0x4ef78b768698d176833bb61682e01a0752a8b0b8da6718dc4b7059e80ddab13d",
            loanAsset: {
              address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
              symbol: "DEGEN",
              decimals: 18,
              name: "Degen",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LsETH / WETH",
            id: "0x4dda3d40225ff86207164809ecd336f9908da885470c0526794f2064795794f3",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xB29749498954A3A821ec37BdE86e386dF3cE30B6",
              symbol: "LsETH",
              decimals: 18,
              name: "Liquid Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LBTC / cbBTC",
            id: "0x4944a1169bc07b441473b830308ffe5bb535c10a9f824e33988b60738120c48e",
            loanAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            collateralAsset: {
              address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
              symbol: "LBTC",
              decimals: 8,
              name: "Lombard Staked Bitcoin",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "mBASIS / USDC",
            id: "0x45f3b5688e7ba25071f78d1ce51d1b893faa3c86897b12204cdff3af6b3611f8",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x1C2757c1FeF1038428b5bEF062495ce94BBe92b2",
              symbol: "mBASIS",
              decimals: 18,
              name: "Midas Basis Trading Token",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / EURA",
            id: "0x4021eef32a72cd1c2bbf9203526bf17d10785de636b00cb1aaa6ca22ce1d1575",
            loanAsset: {
              address: "0xA61BeB4A3d02decb01039e378237032B351125B4",
              symbol: "EURA",
              decimals: 18,
              name: "EURA (previously agEUR)",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "weETH / WETH",
            id: "0x3fa37d9cc9922c120972c89ae0da86843e7e51c0dd04668e6fac3e7cd1ada1d3",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
              symbol: "weETH",
              decimals: 18,
              name: "Wrapped eETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "USDC / WETH",
            id: "0x3b3769cfca57be2eaed03fcc5299c25691b77781a1e124e7a8d520eb9a7eabb5",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "hyUSD / eUSD",
            id: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
            loanAsset: {
              address: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
              symbol: "eUSD",
              decimals: 18,
              name: "Electronic Dollar",
            },
            collateralAsset: {
              address: "0xCc7FF230365bD730eE4B352cC2492CEdAC49383e",
              symbol: "hyUSD",
              decimals: 18,
              name: "High Yield USD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / WETH",
            id: "0x3a4048c64ba1b375330d376b1ce40e4047d03b47ab4d48af484edec9fec801ba",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / USDA",
            id: "0x395ec7a4fbbc91bb94c313d50cc95ee7e572ba5b85065a7168022cd4de464e1b",
            loanAsset: {
              address: "0x0000206329b97DB379d5E1Bf586BbDB969C63274",
              symbol: "USDA",
              decimals: 18,
              name: "USDA",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / USR",
            id: "0x3858f17282016df1e08c920da8f55a16dbe98bd86ebc6871fbb507d877fb56c3",
            loanAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wbCOIN / USDC",
            id: "0x34f676bd8db106d6cdc90d0fb44145cea2f393310a794812cb1c5a8726b60913",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xDEc933e2392AD908263e70A386fbF34e703Ffe8F",
              symbol: "wbCOIN",
              decimals: 18,
              name: "Wrapped Backed Coinbase Global",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LBTC / cbBTC",
            id: "0x30767836635facec1282e6ef4a5981406ed4e72727b3a63a3a72c74e8279a8d7",
            loanAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            collateralAsset: {
              address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
              symbol: "LBTC",
              decimals: 8,
              name: "Lombard Staked Bitcoin",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-cUSDO-15JUL2025 / USDC",
            id: "0x2c10e050eb191f3e6ab9475a442d8d8b6a13e82dad7a9110475f4d22392a1a0c",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x1155d1731B495BF22f016e13cAfb6aFA53BD8a28",
              symbol: "PT-cUSDO-15JUL2025",
              decimals: 18,
              name: "Principal Token: cUSDO-15JUL2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "USR / USDC",
            id: "0x2a366fd267a5fd882c791781e3956e38b68108b4c17a9bb8090b90b37d47e0fb",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "bsdETH / USDC",
            id: "0x261854c4c2c460f601d4a60208953af746b4d058980e19f54ab40396ff8a912f",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xCb327b99fF831bF8223cCEd12B1338FF3aA322Ff",
              symbol: "bsdETH",
              decimals: 18,
              name: "Based ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wrsETH / WETH",
            id: "0x214c2bf3c899c913efda9c4a49adff23f77bbc2dc525af7c05be7ec93f32d561",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0xEDfa23602D0EC14714057867A78d01e94176BEA0",
              symbol: "wrsETH",
              decimals: 18,
              name: "rsETHWrapper",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / USDC",
            id: "0x1c21c59df9db44bf6f645d854ee710a8ca17b479451447e9f56758aee10a2fad",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "mBASIS / cdxUSD",
            id: "0x1c0b7ef209fb81f0dc49e84de46b988aa23c083449f6abc932f712439cf1fe26",
            loanAsset: {
              address: "0xC0D3700000987C99b3C9009069E4f8413fD22330",
              symbol: "cdxUSD",
              decimals: 18,
              name: "Cod3x USD",
            },
            collateralAsset: {
              address: "0x1C2757c1FeF1038428b5bEF062495ce94BBe92b2",
              symbol: "mBASIS",
              decimals: 18,
              name: "Midas Basis Trading Token",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / wUSDM",
            id: "0x1791920d6bab15c5f529d278b72aecb79c52ceed412ded44526d7198227e652e",
            loanAsset: {
              address: "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812",
              symbol: "wUSDM",
              decimals: 18,
              name: "Wrapped Mountain Protocol USD",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "RLP / USDC",
            id: "0x1478d70d1fde3fd5b8eb5766e82b03aa56a1df72a54fc8cd33aad666b0bd5008",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xC31389794Ffac23331E0D9F611b7953f90AA5fDC",
              symbol: "RLP",
              decimals: 18,
              name: "Resolv Liquidity Provider Token",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wsuperOETHb / WETH",
            id: "0x144bf18d6bf4c59602548a825034f73bf1d20177fc5f975fc69d5a5eba929b45",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x7FcD174E80f264448ebeE8c88a7C4476AAF58Ea6",
              symbol: "wsuperOETHb",
              decimals: 18,
              name: "Wrapped Super OETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / USDC",
            id: "0x13c42741a359ac4a8aa8287d2be109dcf28344484f91185f9a79bd5a805a55ae",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-LBTC-29MAY2025 / LBTC",
            id: "0x12c37bd01e0050e15e85e37b6bfd9a9bc357e7881a4589b6873f94512af1ce66",
            loanAsset: {
              address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
              symbol: "LBTC",
              decimals: 8,
              name: "Lombard Staked Bitcoin",
            },
            collateralAsset: {
              address: "0x5d746848005507DA0b1717C137A10C30AD9ee307",
              symbol: "PT-LBTC-29MAY2025",
              decimals: 8,
              name: "PT Lombard LBTC 29MAY2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USR-24APR2025 / USR",
            id: "0x10b0ce8c2db5e51338caa54effa56c4dd450527a31b12d60e8a33e8fdaa4ebb1",
            loanAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            collateralAsset: {
              address: "0xec443e7E0e745348E500084892C89218B3ba4683",
              symbol: "PT-USR-24APR2025",
              decimals: 18,
              name: "PT Resolv USD 24APR2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LP-USR-24APR2025 / USR",
            id: "0x0df0f6ca33322cff4111c2b7ff9b267a71f9b63701c3cbdbbc61d054662b1d3f",
            loanAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            collateralAsset: {
              address: "0xE15578523937ed7F08E8F7a1Fa8a021E07025a08",
              symbol: "LP-USR-24APR2025",
              decimals: 18,
              name: "Pendle LP USR 24APR2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / MAI",
            id: "0x0b3bdf8627442f43607716b9e20475500fd62cb91bbb2c16c711e7c31038beb8",
            loanAsset: {
              address: "0xbf1aeA8670D2528E08334083616dD9C5F3B087aE",
              symbol: "MAI",
              decimals: 18,
              name: "Mai Stablecoin",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "RLP / USR",
            id: "0x091e8908d5dc2916bc03c85ac72d6f9434c176b497532a94097101b0bec41cb7",
            loanAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "USR",
              decimals: 18,
              name: "Resolv USD",
            },
            collateralAsset: {
              address: "0xC31389794Ffac23331E0D9F611b7953f90AA5fDC",
              symbol: "RLP",
              decimals: 18,
              name: "Resolv Liquidity Provider Token",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USR-24APR2025 / USDC",
            id: "0x04f7605a25699d0eff9f92908d25da8702ff59596d159e8bb66eca24b021d99f",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xec443e7E0e745348E500084892C89218B3ba4683",
              symbol: "PT-USR-24APR2025",
              decimals: 18,
              name: "PT Resolv USD 24APR2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "ezETH / USDC",
            id: "0x026ecee9b3a8d0ce979837333349cfc2075a2af6cd9b41c1c1d9fa16c44e54c5",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
              symbol: "ezETH",
              decimals: 18,
              name: "Renzo Restaked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "rETH / EURC",
            id: "0x0103cbcd14c690f68a91ec7c84607153311e9954c94ac6eac06c9462db3fabb6",
            loanAsset: {
              address: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
              symbol: "EURC",
              decimals: 6,
              name: "EURC",
            },
            collateralAsset: {
              address: "0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c",
              symbol: "rETH",
              decimals: 18,
              name: "Rocket Pool ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "stUSD / EURA",
            id: "0x00f00245cf0061f5a75b0ed737dce5a90e67e69f7a4649e7c2badd4e641958e4",
            loanAsset: {
              address: "0xA61BeB4A3d02decb01039e378237032B351125B4",
              symbol: "EURA",
              decimals: 18,
              name: "EURA (previously agEUR)",
            },
            collateralAsset: {
              address: "0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776",
              symbol: "stUSD",
              decimals: 18,
              name: "Staked USDA",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / msETH",
            id: "0xffd35206a772174c04f599e4034a2f132fc3f7a462ca732affcea92136716573",
            loanAsset: {
              address: "0x7Ba6F01772924a82D9626c126347A28299E98c98",
              symbol: "msETH",
              decimals: 18,
              name: "Metronome Synth ETH",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbXRP / USDC",
            id: "0xfdfecf85a4dd90a7637ae2aaf28b35061166f0e62bfc714c565eed9f7e959783",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xcb585250f852C6c6bf90434AB21A00f02833a4af",
              symbol: "cbXRP",
              decimals: 6,
              name: "Coinbase Wrapped XRP",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbADA / USDC",
            id: "0xf2a59ad1aec67664c564cb33c33538ab41372363204ce2bdcf00900b7d28c6ab",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xcbADA732173e39521CDBE8bf59a6Dc85A9fc7b8c",
              symbol: "cbADA",
              decimals: 6,
              name: "Coinbase Wrapped ADA",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbBTC / XSGD",
            id: "0xd5d7156a4dabe0e49ea638f4daa2fecfe90204c99099d417744134c8488d3b27",
            loanAsset: {
              address: "0x0A4C9cb2778aB3302996A34BeFCF9a8Bc288C33b",
              symbol: "XSGD",
              decimals: 6,
              name: "XSGD",
            },
            collateralAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbBTC / VCHF",
            id: "0xcf5643451910c09d638088ab4e3ac84a932113fd15571eee615e2d93955116c1",
            loanAsset: {
              address: "0x1fcA74D9ef54a6AC80ffE7D3b14e76c4330Fd5D8",
              symbol: "VCHF",
              decimals: 18,
              name: "VNX Franc",
            },
            collateralAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LCAP / USDC",
            id: "0xb9e11c3ed6872653a7e203fc45bf33f4cda348e87613185f67e06794dcdef335",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x4dA9A0f397dB1397902070f93a4D6ddBC0E0E6e8",
              symbol: "LCAP",
              decimals: 18,
              name: "CF Large Cap Index",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / XSGD",
            id: "0xb4a08db3b6a3acd884c853a4dabbc71659c9af1065afd2a9a8f201f29a4ad31c",
            loanAsset: {
              address: "0x0A4C9cb2778aB3302996A34BeFCF9a8Bc288C33b",
              symbol: "XSGD",
              decimals: 6,
              name: "XSGD",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "stkWELL / USDC",
            id: "0xb3920b96dec75b6a1144b71f963f30236fb200f3e33e93c2e9c0d222c1fa53c2",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xe66E3A37C3274Ac24FE8590f7D84A2427194DC17",
              symbol: "stkWELL",
              decimals: 18,
              name: "Staked WELL",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USDe-11DEC2025 / USDC",
            id: "0xafa2d80fcc3aa58419dd8c62b57087384bc35de27d70de9c91525276f2b2fd6e",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x194b8FeD256C02eF1036Ed812Cae0c659ee6F7FD",
              symbol: "PT-USDe-11DEC2025",
              decimals: 18,
              name: "PT Ethena USDe 11DEC2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "MAMO / USDC",
            id: "0xace0ea2ff0a6c4b7edc51fbce422be4cdbba45471e395d974c46d619aa2a393d",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x7300B37DfdfAb110d83290A29DfB31B1740219fE",
              symbol: "MAMO",
              decimals: 18,
              name: "Mamo",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / USDC",
            id: "0x9ac54a2a4e04d411982f100a4363af80545b3e5a59a7244589928085e600195c",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "satUSD / USDC",
            id: "0x9a6703389df0f8e9106c9f9c840bd0812a083bd9689f5e1cfe985780b54fac17",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x70654AaD8B7734dc319d0C3608ec7B32e03FA162",
              symbol: "satUSD",
              decimals: 18,
              name: "Satoshi Stablecoin V2",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "yoETH / WETH",
            id: "0x94f344f8db8c950faa45206c269dd0c2787a86ae3a7b988423e1e6e8173ae269",
            loanAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x3A43AEC53490CB9Fa922847385D82fe25d0E9De7",
              symbol: "yoETH",
              decimals: 18,
              name: "yoVaultETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbLTC / USDC",
            id: "0x9125d0fa03c3137166df68bcc72283477830de2a4a5536512374c573ad4583c3",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xcb17C9Db87B595717C857a08468793f5bAb6445F",
              symbol: "cbLTC",
              decimals: 8,
              name: "Coinbase Wrapped LTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbDOGE / USDC",
            id: "0x73527ddd796e6d4f48387adaae36f6f3d49d606d7f2a15eb0c931416a58875d8",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xcbD06E5A2B0C65597161de254AA074E489dEb510",
              symbol: "cbDOGE",
              decimals: 8,
              name: "Coinbase Wrapped DOGE",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / VCHF",
            id: "0x6ade8e4797a3e8fdf1faa832e8e524a3fbf4518465b96e08db0368ab95dfddb0",
            loanAsset: {
              address: "0x1fcA74D9ef54a6AC80ffE7D3b14e76c4330Fd5D8",
              symbol: "VCHF",
              decimals: 18,
              name: "VNX Franc",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "superOETHb / USDC",
            id: "0x67a66cbacb2fe48ec4326932d4528215ad11656a86135f2795f5b90e501eb538",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xDBFeFD2e8460a6Ee4955A68582F85708BAEA60A3",
              symbol: "superOETHb",
              decimals: 18,
              name: "Super OETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wsrUSD / USDC",
            id: "0x5f42e9a47335fc15507f0ab6ac362e9d0fcd2f6fd881852198824c5b01045cb7",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x62344be8CA1c339B46274a4017dd87AF436900B1",
              symbol: "wsrUSD",
              decimals: 18,
              name: "Wrapped Savings rUSD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstUSR / USDC",
            id: "0x5a24250884b607439e8eb2a5bf7e4f6647af665936f47d0a8509ff783b3916ec",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xB67675158B412D53fe6B68946483ba920b135bA1",
              symbol: "wstUSR",
              decimals: 18,
              name: "Wrapped Staked USR",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / VCHF",
            id: "0x576db1fa04a04b81eaeb36d14c16730bcfe34c8089abe1a204032e160b459157",
            loanAsset: {
              address: "0x1fcA74D9ef54a6AC80ffE7D3b14e76c4330Fd5D8",
              symbol: "VCHF",
              decimals: 18,
              name: "VNX Franc",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / LCAP",
            id: "0x563a3e1ad768c9963a1778f78919482cec60a1603aded3dc228b70e7abf424b0",
            loanAsset: {
              address: "0x4dA9A0f397dB1397902070f93a4D6ddBC0E0E6e8",
              symbol: "LCAP",
              decimals: 18,
              name: "CF Large Cap Index",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / LCAP",
            id: "0x54d6a77297d8c5dce4efb07cab60b1014b117675a648673c0c9aa6e5cebc7f01",
            loanAsset: {
              address: "0x4dA9A0f397dB1397902070f93a4D6ddBC0E0E6e8",
              symbol: "LCAP",
              decimals: 18,
              name: "CF Large Cap Index",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / XSGD",
            id: "0x4e0b2fd87ce0e662f3c39f520684074cc5c1e6122c65df247123e6066ad3e805",
            loanAsset: {
              address: "0x0A4C9cb2778aB3302996A34BeFCF9a8Bc288C33b",
              symbol: "XSGD",
              decimals: 6,
              name: "XSGD",
            },
            collateralAsset: {
              address: "0x4200000000000000000000000000000000000006",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "LBTC / LCAP",
            id: "0x4d999edc7205d8f628e892538349ca9749b73eaf715b2325c4e288a2c64cd291",
            loanAsset: {
              address: "0x4dA9A0f397dB1397902070f93a4D6ddBC0E0E6e8",
              symbol: "LCAP",
              decimals: 18,
              name: "CF Large Cap Index",
            },
            collateralAsset: {
              address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
              symbol: "LBTC",
              decimals: 8,
              name: "Lombard Staked Bitcoin",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "steakUSDC / XSGD",
            id: "0x41640803a24fb0ac8a3c6a5602f78ff8291a6c6ecd87f23c8bc08e46f52033f5",
            loanAsset: {
              address: "0x0A4C9cb2778aB3302996A34BeFCF9a8Bc288C33b",
              symbol: "XSGD",
              decimals: 6,
              name: "XSGD",
            },
            collateralAsset: {
              address: "0xBEEFE94c8aD530842bfE7d8B397938fFc1cb83b2",
              symbol: "steakUSDC",
              decimals: 18,
              name: "Steakhouse Prime USDC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / USDC",
            id: "0x33ca69644bf4a700dc312b2f79e795dbeaf5e3ada1ad71307d92935e42fa636a",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "VNXAU / USDC",
            id: "0x1c1c0818a23c61bcd55bd234b1f8ceeed8d1d614874f054585701cb978c601bb",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xAc3FE22294beaED9d1FD752323a6d06D12Ff3098",
              symbol: "VNXAU",
              decimals: 18,
              name: "VNX Gold",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "yoUSD / USDC",
            id: "0x1a3e69d0109bb1be42b80e11034bb6ee98fc466721f26845dc83b2aa8d979137",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x0000000f2eB9f69274678c76222B35eEc7588a65",
              symbol: "yoUSD",
              decimals: 6,
              name: "yoVaultUSD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-LBTC-scaled18-25SEP2025 / LBTC",
            id: "0x197d79f84d229049a780af9b3d418dbe2a05c2dd541268ae576483f14bd6b41a",
            loanAsset: {
              address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
              symbol: "LBTC",
              decimals: 8,
              name: "Lombard Staked Bitcoin",
            },
            collateralAsset: {
              address: "0x7C3039d2385000cf366E3AC6AB9d7642E8440dd2",
              symbol: "PT-LBTC-scaled18-25SEP2025",
              decimals: 18,
              name: "PT Lombard LBTC scaled18 25SEP2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "USDC / LCAP",
            id: "0x151f3d9deb49702cb6fac5f066674c5ed64e782b842d3c2b3c13bfd8db17d1f2",
            loanAsset: {
              address: "0x4dA9A0f397dB1397902070f93a4D6ddBC0E0E6e8",
              symbol: "LCAP",
              decimals: 18,
              name: "CF Large Cap Index",
            },
            collateralAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / XSGD",
            id: "0x10951a9bbb1016b926005c8234da7b2469f6886efaf0576d8cf0688ab5d6826b",
            loanAsset: {
              address: "0x0A4C9cb2778aB3302996A34BeFCF9a8Bc288C33b",
              symbol: "XSGD",
              decimals: 6,
              name: "XSGD",
            },
            collateralAsset: {
              address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbBTC / LCAP",
            id: "0x0eff8d33fd5ce5d7028825b4e75bc6a3971d8802188f841c138342eab51152be",
            loanAsset: {
              address: "0x4dA9A0f397dB1397902070f93a4D6ddBC0E0E6e8",
              symbol: "LCAP",
              decimals: 18,
              name: "CF Large Cap Index",
            },
            collateralAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "cbETH / USDC",
            id: "0x0ca10126f6c94cbd9cf0a48cc9516ae5e3dec5aa68303e6d988ee37c5149bf0d",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
              symbol: "cbETH",
              decimals: 18,
              name: "Coinbase Wrapped Staked ETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WELL / USDC",
            id: "0x018ac6ef4385a1b13886c9170a6f3e0e968268ff2bf988f66512f45607aa38f7",
            loanAsset: {
              address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
              symbol: "USDC",
              decimals: 6,
              name: "USD Coin",
            },
            collateralAsset: {
              address: "0xA88594D404727625A9437C3f886C7643872296AE",
              symbol: "WELL",
              decimals: 18,
              name: "WELL",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-LBTC-scaled18-25SEP2025 / cbBTC",
            id: "0x0138c47c8f7e0a785ec20a46edc6dc7747c8cd6e318d02f6506a5b6a5f5be7b0",
            loanAsset: {
              address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
              symbol: "cbBTC",
              decimals: 8,
              name: "Coinbase Wrapped BTC",
            },
            collateralAsset: {
              address: "0x7C3039d2385000cf366E3AC6AB9d7642E8440dd2",
              symbol: "PT-LBTC-scaled18-25SEP2025",
              decimals: 18,
              name: "PT Lombard LBTC scaled18 25SEP2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
        ],
        P = [
          {
            name: "PT-syrupUSDC-29JAN2026 / USDT0",
            id: "0xff608e5881ccba3859006b3c01e377314384c3d661d684c3e8b6354146e62155",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x1Ef58a7aF39883CC95c59a2c106b726C64c2ECC6",
              symbol: "PT-syrupUSDC-29JAN2026",
              decimals: 6,
              name: "PT Syrup USDC 29JAN2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "syrupUSDC / USDC",
            id: "0xf86f3edd6f16cd8211f4d206866dc4ecd41be6211063ac11f8508e1b7112ef40",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x41CA7586cC1311807B4605fBB748a3B8862b42b5",
              symbol: "syrupUSDC",
              decimals: 6,
              name: "Syrup USDC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USDai-20NOV2025 / USDC",
            id: "0xf4ab212f6fcc943e2669cb6307fa4b608b0418ac5255c100e58394822157785c",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x8b4Ca42bB3B1d789859f106222CF7DC5EEd48CCb",
              symbol: "PT-USDai-20NOV2025",
              decimals: 18,
              name: "PT USDai 20NOV2025",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wsrUSD / USDT0",
            id: "0xef62d07c7e29c3864feb6de8945edd82688a2ea558de5a44dc795ad1eb1d9853",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x4809010926aec940b550D34a46A52739f996D75D",
              symbol: "wsrUSD",
              decimals: 18,
              name: "Wrapped Savings rUSD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "XAUt0 / USDC",
            id: "0xed3f9a960d927791a354cc4549b1b44af9dd06c11566ea9d0bff66b8e4969610",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x40461291347e1eCbb09499F3371D3f17f10d7159",
              symbol: "XAUt0",
              decimals: 6,
              name: "XAUt0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WBTC / USDT0",
            id: "0xed06d9e82d7c35ca80d3983194e15462a96202bd875800af18183321f4611868",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
              symbol: "WBTC",
              decimals: 8,
              name: "Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WBTC / USDC",
            id: "0xe6392ff19d10454b099d692b58c361ef93e31af34ed1ef78232e07c78fe99169",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
              symbol: "WBTC",
              decimals: 8,
              name: "Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "siUSD / USDC",
            id: "0xe23e15ddd552eb148045e3f4b74e71f4923bc6bea6e5bda0a4cf89a0cecd1a3b",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x51B0f6AED4a421f09D28A5eDe1DCF460BCB54d30",
              symbol: "siUSD",
              decimals: 18,
              name: "Staked infiniFi USD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "weETH / USDT0",
            id: "0xe0432ceb599fbe41defbd62fe8e914824af9d891a0a92c39de7063176c8e480b",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe",
              symbol: "weETH",
              decimals: 18,
              name: "Wrapped eETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WBTC / WETH",
            id: "0xdfa832f89c5c090398b4a7ca1b4f1d3146bd9ef6c68c9b8abe2e3e45fab1acb3",
            loanAsset: {
              address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
              symbol: "WBTC",
              decimals: 8,
              name: "Wrapped BTC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "sUSDS / USDT0",
            id: "0xde895fd4a9d1ca693485fcfc2ee47d8c3b47f810bbce3c965c60d97b855d4ed2",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0xdDb46999F8891663a8F2828d25298f70416d7610",
              symbol: "sUSDS",
              decimals: 18,
              name: "Savings USDS",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "siUSD / USDT0",
            id: "0xd91052003758145cc53615895c0ce2081c7080b661dbab5652c2b8433b248c2d",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x51B0f6AED4a421f09D28A5eDe1DCF460BCB54d30",
              symbol: "siUSD",
              decimals: 18,
              name: "Staked infiniFi USD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "weETH / USDC",
            id: "0xd09404e9512e1341321c8ae3bd663fab7087582142ac61486635a6c072c2af12",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe",
              symbol: "weETH",
              decimals: 18,
              name: "Wrapped eETH",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / USDC",
            id: "0xca83d02be579485cc10945c9597a6141e772f1cf0e0aa28d09a327b6cbd8642c",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-thBILL-18JUN2026 / USDC",
            id: "0xc8455ed78482f7ef016caf0127c7ffd5e643b3b83d08d43e242a63c12358f754",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0xE46271ecb1d5c7c5134868760F10c18B03021eF1",
              symbol: "PT-thBILL-18JUN2026",
              decimals: 6,
              name: "PT thBILL 18JUN2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "RLP / USDC",
            id: "0xc7670063349ac19dfa324ead7bd7da2985ae931e1b09fb0e31b62c6486b730bd",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x35E5dB674D8e93a03d814FA0ADa70731efe8a4b9",
              symbol: "RLP",
              decimals: 18,
              name: "Resolv Liquidity Provider Token",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstUSR / USDT0",
            id: "0xadc6897d644a005149d1aa42de72bcb1ff1c9f7c4a8b00db3e2356752995f80e",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x66CFbD79257dC5217903A36293120282548E2254",
              symbol: "wstUSR",
              decimals: 18,
              name: "Wrapped Staked USR",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "WETH / USDT0",
            id: "0xac6a118134cc4208a22534b041a83f4ac5ca42e2ab9ea732ee53c44b7deebc62",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "GLV [WBTC-USDC] / USDC",
            id: "0xa35d91efb3e284a0ab7098e8c5a65caf58ea0451073e36a544a821fd8f350953",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0xdF03EEd325b82bC1d4Db8b49c30ecc9E05104b96",
              symbol: "GLV [WBTC-USDC]",
              decimals: 18,
              name: "GMX Liquidity Vault [WBTC-USDC]",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / WETH",
            id: "0x98a937249ffe404bd46215ed94fba4a8be508a02fbf5a0a710e6e649795f7851",
            loanAsset: {
              address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
              symbol: "WETH",
              decimals: 18,
              name: "Wrapped Ether",
            },
            collateralAsset: {
              address: "0x5979D7b546E38E414F7E9822514be443A4800529",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USDai-18JUN2026 / USDT0",
            id: "0x98225f86d3c0673d9b652b12f021f9bc6a09c9ca960680bea23c4de7e2a90f64",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x1cdDE40e29dA213f42A7fA109CcADCA372d9Ee1B",
              symbol: "PT-USDai-18JUN2026",
              decimals: 18,
              name: "PT USDai 18JUN2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USDai-18JUN2026 / USDC",
            id: "0x958b40fcd0df023c156ec4a7eb8ffd47985b19d8bb02a36fb0af1bfc837fd605",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x1cdDE40e29dA213f42A7fA109CcADCA372d9Ee1B",
              symbol: "PT-USDai-18JUN2026",
              decimals: 18,
              name: "PT USDai 18JUN2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "bbqUSDC / USDT0",
            id: "0x941f407149a7365a76829bdc1e47c88b528efdc06d34e8a4cb363462e51167d8",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0xbeeff1D5dE8F79ff37a151681100B039661da518",
              symbol: "bbqUSDC",
              decimals: 18,
              name: "Steakhouse High Yield",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "sUSDe / USDT0",
            id: "0x8e58f0dea27f877db258ecbbe16e57c9bb3541448ac0d578ef08c5b93ea9b84b",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
              symbol: "sUSDe",
              decimals: 18,
              name: "Staked USDe",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-syrupUSDC-29JAN2026 / USDC",
            id: "0x84367e5bc5df26437618f749d5beb793746e620560721fec15518d684191ebc6",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x1Ef58a7aF39883CC95c59a2c106b726C64c2ECC6",
              symbol: "PT-syrupUSDC-29JAN2026",
              decimals: 6,
              name: "PT Syrup USDC 29JAN2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USDai-19FEB2026 / USDC",
            id: "0x8147c63f3f6f5a0825c84bf2cb11443c72b609fa39cf9a362e3d4dc2c5ca76c4",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x5B2C615E22272234AACF187632a0531cA1243279",
              symbol: "PT-USDai-19FEB2026",
              decimals: 18,
              name: "PT USDai 19FEB2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USDai-19FEB2026 / USDC",
            id: "0x7d4799e15dcaad9da49ab8edf46d647db2da2ff419db52e8ec0984d0c49e8b9b",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x5B2C615E22272234AACF187632a0531cA1243279",
              symbol: "PT-USDai-19FEB2026",
              decimals: 18,
              name: "PT USDai 19FEB2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "sUSDS / USDC",
            id: "0x77fe2f7c2dd6f4da6bc5f445b06052ff8df55cb70cfce9afc16ec3c69a5fd3a3",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0xdDb46999F8891663a8F2828d25298f70416d7610",
              symbol: "sUSDS",
              decimals: 18,
              name: "Savings USDS",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-sUSDai-19FEB2026 / USDC",
            id: "0x7717f1e04510390518811b3133ea47c298094ddd1d806ed8f8867d88c727bad7",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x1BF1311FCF914A69Dd5805C9B06b72F80539cB3f",
              symbol: "PT-sUSDai-19FEB2026",
              decimals: 18,
              name: "PT Staked USDai 19FEB2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "sUSDai / USDC",
            id: "0x71c2954e00c8f72864600c9d1d1cd70fa15202c4294cd938d80add3be2eced26",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x0B2b2B2076d95dda7817e785989fE353fe955ef9",
              symbol: "sUSDai",
              decimals: 18,
              name: "Staked USDai",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-thBILL-19FEB2026 / USDC",
            id: "0x6c831dcc45a7c0af00b751da651bd874b96653c587615d11aafade7b357c4b43",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x9b3924f9652cabf3Db48B7B4C92E474c571B3Ab4",
              symbol: "PT-thBILL-19FEB2026",
              decimals: 6,
              name: "PT thBILL 19FEB2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstUSR / USDC",
            id: "0x582c92d5ea0ab48eba3a1ee88c8884e34f7fc61c57fb821f3f6d9e474574c6e3",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x66CFbD79257dC5217903A36293120282548E2254",
              symbol: "wstUSR",
              decimals: 18,
              name: "Wrapped Staked USR",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "syrupUSDC / USDT0",
            id: "0x571cb3ac535d61d92026c071ef1df4794d0bbbe1755f916ff640746f81b52af4",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x41CA7586cC1311807B4605fBB748a3B8862b42b5",
              symbol: "syrupUSDC",
              decimals: 6,
              name: "Syrup USDC",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "thBILL / USDC",
            id: "0x551dbcdcceaf9322986e0cddde993d49840522a9532dc441359acd98af8badff",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0xfDD22Ce6D1F66bc0Ec89b20BF16CcB6670F55A5a",
              symbol: "thBILL",
              decimals: 6,
              name: "thBILL",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-sUSDai-18JUN2026 / USDC",
            id: "0x50d1b741a63204ce27bdf17e5a9300800c350ecb9278d92d2292a5713ea227e6",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x07bc5bD6cE9A17f0e7aa91E0Adbc9070dcB1d1dE",
              symbol: "PT-sUSDai-18JUN2026",
              decimals: 18,
              name: "PT Staked USDai 18JUN2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / USDC",
            id: "0x33e0c8ab132390822b07e5dc95033cf250c963153320b7ffca73220664da2ea0",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x5979D7b546E38E414F7E9822514be443A4800529",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wstETH / USDT0",
            id: "0x209fa1520640f664f59f7c1f955d52e8b81ead826edf439b48254d21d24b97a9",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x5979D7b546E38E414F7E9822514be443A4800529",
              symbol: "wstETH",
              decimals: 18,
              name: "Wrapped liquid staked Ether 2.0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "XAUt0 / USDT0",
            id: "0x1d094624063756fc61aaf061c7da056aebe3b3ad0ae0395b22e00db6c074de7c",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x40461291347e1eCbb09499F3371D3f17f10d7159",
              symbol: "XAUt0",
              decimals: 6,
              name: "XAUt0",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "GM:ETH/USD[WETH-USDC] / USDC",
            id: "0x1a926ab8add08dca634f8d6cecd8c866e166a4affc65801beda9f239d21b622a",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x70d95587d40A2caf56bd97485aB3Eec10Bee6336",
              symbol: "GM:ETH/USD[WETH-USDC]",
              decimals: 18,
              name: "GMX Market: ETH/USD [WETH-USDC]",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "GLV [WETH-USDC] / USDC",
            id: "0x14982da64b67967ef3a70c2f3b7d05518f7dd4ba98d850c40c46618c75059a64",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x528A5bac7E746C9A509A1f4F6dF58A03d44279F9",
              symbol: "GLV [WETH-USDC]",
              decimals: 18,
              name: "GMX Liquidity Vault [WETH-USDC]",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "wsrUSD / USDC",
            id: "0x11d3bca0d1a9af8bf2982ef802f2971cf86043df1b31a044cacb35a8048156c6",
            loanAsset: {
              address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              symbol: "USDC",
              decimals: 6,
              name: "USDCoin",
            },
            collateralAsset: {
              address: "0x4809010926aec940b550D34a46A52739f996D75D",
              symbol: "wsrUSD",
              decimals: 18,
              name: "Wrapped Savings rUSD",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            name: "PT-USDai-19FEB2026 / USDT0",
            id: "0x090ff0cd57a258b342c870691a180bb79691e97b31ddda2b7cdd4b5a362c3cca",
            loanAsset: {
              address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
              symbol: "USDT0",
              decimals: 6,
              name: "USDT0",
            },
            collateralAsset: {
              address: "0x5B2C615E22272234AACF187632a0531cA1243279",
              symbol: "PT-USDai-19FEB2026",
              decimals: 18,
              name: "PT USDai 19FEB2026",
            },
            protocols: [n.GP.MORPHO],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
        ],
        C = [],
        S = [
          {
            address: "0x0000000000000000000000000000000000000000",
            symbol: "S",
            name: "S",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/S.png",
          },
          {
            address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
            symbol: "wS",
            name: "Wrapped Sonic",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/WS.png",
          },
          {
            address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
            symbol: "USDC",
            name: "USDC",
            decimals: 6,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/USDC.E.png",
          },
          {
            address: "0x6047828dc181963ba44974801FF68e538dA5eaF9",
            symbol: "USDT",
            name: "USDT",
            decimals: 6,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/USDT.png",
          },
          {
            address: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
            symbol: "WETH",
            name: "WETH",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/WETH.png",
          },
          {
            address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
            symbol: "WBTC",
            name: "WBTC",
            decimals: 8,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/WBTC.png",
          },
          {
            address: "0xddF26B42C1d903De8962d3F79a74a501420d5F19",
            symbol: "EQUAL",
            name: "Equalizer on Sonic",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/EQUAL.png",
          },
          {
            address: "0x3333b97138D4b086720b5aE8A7844b1345a33333",
            symbol: "SHADOW",
            name: "Shadow",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/SHADOW.png",
          },
          {
            address: "0x2D0E0814E62D80056181F5cd932274405966e4f0",
            symbol: "BEETS",
            name: "Beets",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/BEETS.png",
          },
          {
            address: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
            symbol: "scUSD",
            name: "Sonic USD",
            decimals: 6,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/SCUSD.png",
          },
          {
            address: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
            symbol: "stS",
            name: "Beets Staked Sonic",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/STS.png",
          },
          {
            address: "0x43eDD7f3831b08FE70B7555ddD373C8bF65a9050",
            symbol: "frxETH",
            name: "Frax Ether",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/FRXETH.png",
          },
          {
            address: "0xb1e25689D55734FD3ffFc939c4C3Eb52DFf8A794",
            symbol: "OS",
            name: "Origin Sonic",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/OS.png",
          },
          {
            address: "0x005851f943ee2957B1748957F26319e4f9EdeBC1",
            symbol: "$AG",
            name: "Silver",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/$AG.png",
          },
          {
            address: "0x05e31a691405d06708A355C029599c12d5da8b28",
            symbol: "fSONIC",
            name: "FantomSonicInu",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/FSONIC.png",
          },
          {
            address: "0x0e0Ce4D450c705F8a0B6Dd9d5123e3df2787D16B",
            symbol: "WAGMI",
            name: "Wagmi",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/WAGMI.png",
          },
          {
            address: "0x131F5AE1CBfEFe8EFbDf93dA23fa4d39F14a817c",
            symbol: "FROQ",
            name: "Froq",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/FROQ.png",
          },
          {
            address: "0x17Af1Df44444AB9091622e4Aa66dB5BB34E51aD5",
            symbol: "THC",
            name: "Tin Hat Cat",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/THC.png",
          },
          {
            address: "0x3333111A391cC08fa51353E9195526A70b333333",
            symbol: "x33",
            name: "Shadow Liquid Staking Token",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/X33.png",
          },
          {
            address: "0x3a516e01f82c1e18916ED69a81Dd498eF64bB157",
            symbol: "SNAKE",
            name: "SNAKE",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/SNAKE.png",
          },
          {
            address: "0x3bcE5CB273F0F148010BbEa2470e7b5df84C7812",
            symbol: "scETH",
            name: "Sonic ETH",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/SCETH.png",
          },
          {
            address: "0x4EEC869d847A6d13b0F6D1733C5DEC0d1E741B4f",
            symbol: "INDI",
            name: "Indi",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/INDI.png",
          },
          {
            address: "0x53e24706D6642CA495498557415b1af7A025D8Da",
            symbol: "USD+",
            name: "USD+",
            decimals: 6,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
          {
            address: "0x6BA47940f738175d3F8C22Aa8EE8606eaAe45eb2",
            symbol: "sS",
            name: "SupraFi Staked Sonic",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/SS.png",
          },
          {
            address: "0x6fB9897896Fe5D05025Eb43306675727887D0B7c",
            symbol: "HEDGY",
            name: "HEDGY the hedgehog",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/HEDGY.png",
          },
          {
            address: "0x71E99522EaD5E21CF57F1f542Dc4ad2E841F7321",
            symbol: "METRO",
            name: "Metropolis Token",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/METRO.png",
          },
          {
            address: "0x777CF5ba9C291A1A8f57FF14836F6F9dC5c0F9Dd",
            symbol: "SOLID",
            name: "Solidly",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/SOLID.png",
          },
          {
            address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C",
            symbol: "Anon",
            name: "HeyAnon",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/ANON.png",
          },
          {
            address: "0x7A08Bf5304094CA4C7b4132Ef62b5EDc4a3478B7",
            symbol: "ECO",
            name: "SonicEco",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/ECO.png",
          },
          {
            address: "0x7A0C53F7eb34C5BC8B01691723669adA9D6CB384",
            symbol: "BOO",
            name: "SpookyToken V2",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/BOO.png",
          },
          {
            address: "0x7B0a41f0c17474e41a0c36c0Bf33b9AED06eE9f5",
            symbol: "SNS",
            name: "Sonic Name Service",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/SNS.png",
          },
          {
            address: "0x80Eede496655FB9047dd39d9f418d5483ED600df",
            symbol: "frxUSD",
            name: "Frax USD",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/FRXUSD.png",
          },
          {
            address: "0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1",
            symbol: "wOS",
            name: "Wrapped Origin Sonic",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/WOS.png",
          },
          {
            address: "0x9fDbC3f8Abc05Fa8f3Ad3C17D2F806c1230c4564",
            symbol: "GOGLZ",
            name: "GOGGLES",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/GOGLZ.png",
          },
          {
            address: "0xA04BC7140c26fc9BB1F36B1A604C7A5a88fb0E70",
            symbol: "SWPx",
            name: "SwapX",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/SWPX.png",
          },
          {
            address: "0xb0695ce12c56AAe40894235e2d1888D0b62Dd110",
            symbol: "FIVE",
            name: "DeFive",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/FIVE.png",
          },
          {
            address: "0xC96dE26018A54D51c097160568752c4E3BD6C364",
            symbol: "FBTC",
            name: "Fire Bitcoin",
            decimals: 8,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/FBTC.png",
          },
          {
            address: "0xE51EE9868C1f0d6cd968A8B8C8376Dc2991BFE44",
            symbol: "BRUSH",
            name: "PaintSwap",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/BRUSH.png",
          },
          {
            address: "0xe6cc4D855B4fD4A9D02F46B9adae4C5EfB1764B5",
            symbol: "LUDWIG",
            name: "LUDWIG",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/LUDWIG.png",
          },
          {
            address: "0xe715cbA7B5cCb33790ceBFF1436809d36cb17E57",
            symbol: "EURC.e",
            name: "Bridged EURC (Sonic Labs)",
            decimals: 6,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/EURC.E.png",
          },
          {
            address: "0xBb30e76d9Bb2CC9631F7fC5Eb8e87B5Aff32bFbd",
            symbol: "scBTC",
            name: "Sonic BTC",
            decimals: 8,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
          {
            address: "0x578Ee1ca3a8E1b54554Da1Bf7C583506C4CD11c6",
            symbol: "aSonUSDC",
            name: "Aave Sonic USDC",
            decimals: 6,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
          {
            address: "0x6C5E14A212c1C3e4Baf6f871ac9B1a969918c131",
            symbol: "aSonwS",
            name: "Aave Sonic wS",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
          {
            address: "0xe18Ab82c81E7Eecff32B8A82B1b7d2d23F1EcE96",
            symbol: "aSonWETH",
            name: "Aave Sonic WETH",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
          {
            address: "0x18B7B8695165290f2767BC63c36D3dFEa4C0F9bB",
            symbol: "waSonwS",
            name: "Wrapped Aave Sonic wS",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
          {
            address: "0x6646248971427B80ce531bdD793e2Eb859347E55",
            symbol: "waSonUSDC",
            name: "Wrapped Aave Sonic USDC",
            decimals: 6,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
          {
            address: "0xeB5e9B0ae5bb60274786C747A1A2A798c11271E0",
            symbol: "waSonWETH",
            name: "Wrapped Aave Sonic WETH",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
          {
            address: "0xC5cB0B67D24d72b9D86059344c88Fb3cE93BF37C",
            symbol: "9MM",
            name: "9MM",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/9MM.png",
          },
          {
            address: "0x871A101Dcf22fE4fE37be7B654098c801CBA1c88",
            symbol: "beS",
            name: "Beefy Sonic",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
          {
            address: "0x2dDCF85D3Cf27DEA338e0371D38409Ba80058630",
            symbol: "wSLT",
            name: "BMX: Wrapped Sonic Liquidity Token",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
            logoUrl:
              "https://raw.githubusercontent.com/FactorDAO/factor-tokenlist/main/assets/sonic/WSLT.png",
          },
          {
            address: "0x9E462d5603Bb983b74e941Ebd5CE9Ea76f3a9e1e",
            symbol: "SLT",
            name: "BMX: Sonic Liquidity Token",
            decimals: 18,
            protocols: [n.GP.UNISWAP, n.GP.OPENOCEAN],
            buildingBlocks: [
              n.IM.DEPOSIT,
              n.IM.WITHDRAW,
              n.IM.SWAP,
              n.IM.CREATE_LP,
              n.IM.PROVIDE_LIQUIDITY,
            ],
          },
        ],
        x = [
          {
            aToken: "0xe18Ab82c81E7Eecff32B8A82B1b7d2d23F1EcE96",
            variableDebtToken: "0x07B1adFB7d5795Cf21baE8a77Eceb222F2FafBCE",
            symbol: "aSonWETH",
            decimals: 18,
            underlyingAddress: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
            underlyingSymbol: "WETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x578Ee1ca3a8E1b54554Da1Bf7C583506C4CD11c6",
            variableDebtToken: "0x2273caBAd63b7D247A6b107E723c803fc49953A0",
            symbol: "aSonUSDC",
            decimals: 6,
            underlyingAddress: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
            underlyingSymbol: "USDC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x6C5E14A212c1C3e4Baf6f871ac9B1a969918c131",
            variableDebtToken: "0xF6089B790Fbf8F4812a79a31CFAbeB00B06BA7BD",
            symbol: "aSonwS",
            decimals: 18,
            underlyingAddress: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
            underlyingSymbol: "wS",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xeAa74D7F42267eB907092AF4Bc700f667EeD0B8B",
            variableDebtToken: "",
            symbol: "aSonwstS",
            decimals: 18,
            underlyingAddress: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
            underlyingSymbol: "stS",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.WITHDRAW],
          },
        ],
        B = [
          {
            marketName: "stS/S",
            marketAddress: "0x78C246f67c8A6cE03a1d894d4Cf68004Bd55Deea",
            silo0: {
              underlyingAsset: {
                address: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
                symbol: "stS",
                name: "Beets Staked Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0x396922EF30Cf012973343f7174db850c7D265278",
                symbol: "bstS-3",
                name: "Silo Finance Borrowable stS Deposit, SiloId: 3",
                decimals: 21,
              },
              collateralOnlyToken: {
                address: "0x01593F83B6fEF5Bd4bEc73BA1dE2536FD31F541a",
                symbol: "nbstS-3",
                name: "Silo Finance Non-borrowable stS Deposit, SiloId: 3",
                decimals: 21,
              },
              debtToken: {
                address: "0xf47Be4aaa1a5DcE379a801f712Ac21a7BDF63D40",
                symbol: "dstS-3",
                name: "Silo Finance stS Debt, SiloId: 3",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0x47d8490Be37ADC7Af053322d6d779153689E13C1",
                symbol: "bwS-3",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 3",
                decimals: 21,
              },
              collateralOnlyToken: {
                address: "0xB2fCA0e72DF1B7f844E439668dc3A58646C7D65a",
                symbol: "nbwS-3",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 3",
                decimals: 21,
              },
              debtToken: {
                address: "0xc5eb7E39637f1d894c0F710F6b9F35168E9fa331",
                symbol: "dwS-3",
                name: "Silo Finance wS Debt, SiloId: 3",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "S/USDC",
            marketAddress: "0x062A36Bbe0306c2Fd7aecdf25843291fBAB96AD2",
            silo0: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0xf55902DE87Bd80c6a35614b48d7f8B612a083C12",
                symbol: "bwS-20",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 20",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0xAecD6cBf567AE7dE05f7E32eB051525e9fcd9bc6",
                symbol: "nbwS-20",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 20",
                decimals: 18,
              },
              debtToken: {
                address: "0xE5c066B23c7A97899646b0bbe69f3E8bc4b61C1C",
                symbol: "dwS-20",
                name: "Silo Finance wS Debt, SiloId: 20",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
                symbol: "USDC",
                name: "USDC",
                decimals: 6,
              },
              collateralToken: {
                address: "0x322e1d5384aa4ED66AeCa770B95686271de61dc3",
                symbol: "bUSDC.e-20",
                name: "Silo Finance Borrowable USDC.e Deposit, SiloId: 20",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x0B960e953649269B4c895C593108fBc7F8b61a24",
                symbol: "nbUSDC.e-20",
                name: "Silo Finance Non-borrowable USDC.e Deposit, SiloId: 20",
                decimals: 6,
              },
              debtToken: {
                address: "0xbc4eF1B5453672a98073fbFF216966F5039ad256",
                symbol: "dUSDC.e-20",
                name: "Silo Finance USDC.e Debt, SiloId: 20",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "PT-aUSDC (14 Aug)/scUSD",
            marketAddress: "0xDa6787a3543a01Bf770DDF3953bE5B9C99c1cBD0",
            silo0: {
              underlyingAsset: {
                address: "0x930441Aa7Ab17654dF5663781CA0C02CC17e6643",
                symbol: "PT-aUSDC (14 Aug)",
                name: "Aave • Pendle",
                decimals: 6,
              },
              collateralToken: {
                address: "0x558d6D6D53270ae8ba622daF123983D9F3c21792",
                symbol: "bPT-aSonUSDC-14AUG2025-46",
                name: "Silo Finance Borrowable PT-aSonUSDC-14AUG2025 Deposit, SiloId: 46",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0xc3dE17F93Fe4067E83379bB3ee96a5608230e5d9",
                symbol: "nbPT-aSonUSDC-14AUG2025-46",
                name: "Silo Finance Non-borrowable PT-aSonUSDC-14AUG2025 Deposit, SiloId: 46",
                decimals: 6,
              },
              debtToken: {
                address: "0xaaFb2471c048571AF3Bdd7879e6473e4fd81941f",
                symbol: "dPT-aSonUSDC-14AUG2025-46",
                name: "Silo Finance PT-aSonUSDC-14AUG2025 Debt, SiloId: 46",
                decimals: 6,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
                symbol: "scUSD",
                name: "Sonic USD",
                decimals: 6,
              },
              collateralToken: {
                address: "0xe6605932e4a686534D19005BB9dB0FBA1F101272",
                symbol: "bscUSD-46",
                name: "Silo Finance Borrowable scUSD Deposit, SiloId: 46",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x490D3333Ea771A16357379D2eF0da2B16C130a4A",
                symbol: "nbscUSD-46",
                name: "Silo Finance Non-borrowable scUSD Deposit, SiloId: 46",
                decimals: 6,
              },
              debtToken: {
                address: "0xE34841964003d4957936A4c94d3B0aC378153164",
                symbol: "dscUSD-46",
                name: "Silo Finance scUSD Debt, SiloId: 46",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "LBTC/scBTC",
            marketAddress: "0xe67cce118e9CcEaE51996E4d290f9B77D960E3d7",
            silo0: {
              underlyingAsset: {
                address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
                symbol: "LBTC",
                name: "Lombard Staked Bitcoin",
                decimals: 8,
              },
              collateralToken: {
                address: "0x0DFA6b53c05b07e29B49a878Fc96153cc03c3E72",
                symbol: "bLBTC-32",
                name: "Silo Finance Borrowable LBTC Deposit, SiloId: 32",
                decimals: 8,
              },
              collateralOnlyToken: {
                address: "0x50e6Aa6d4a6d8C67F423175c428f66D32e685c92",
                symbol: "nbLBTC-32",
                name: "Silo Finance Non-borrowable LBTC Deposit, SiloId: 32",
                decimals: 8,
              },
              debtToken: {
                address: "0xFBf8f82DE501aE38e5712ba691095987608A8dfb",
                symbol: "dLBTC-32",
                name: "Silo Finance LBTC Debt, SiloId: 32",
                decimals: 8,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0xBb30e76d9Bb2CC9631F7fC5Eb8e87B5Aff32bFbd",
                symbol: "scBTC",
                name: "Sonic BTC",
                decimals: 8,
              },
              collateralToken: {
                address: "0x0A94e18bdbCcD048198806d7FF28A1B1D2590724",
                symbol: "bscBTC-32",
                name: "Silo Finance Borrowable scBTC Deposit, SiloId: 32",
                decimals: 8,
              },
              collateralOnlyToken: {
                address: "0xFb118699e0454cC96661e2e01FC3d5C28f91c297",
                symbol: "nbscBTC-32",
                name: "Silo Finance Non-borrowable scBTC Deposit, SiloId: 32",
                decimals: 8,
              },
              debtToken: {
                address: "0x77e8EFc4b7BdE38EdCa6b513Ab019CbB6966ee3C",
                symbol: "dscBTC-32",
                name: "Silo Finance scBTC Debt, SiloId: 32",
                decimals: 8,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "wanS/S",
            marketAddress: "0x6BdF0D12d4B534d5F46c53a90ddDFBe6C0e85dC7",
            silo0: {
              underlyingAsset: {
                address: "0xfA85Fe5A8F5560e9039C04f2b0a90dE1415aBD70",
                symbol: "wanS",
                name: "Wrapped anS",
                decimals: 18,
              },
              collateralToken: {
                address: "0x21580de05C4F3d6D6a5345b03a898C33B872Ab51",
                symbol: "bwanS-25",
                name: "Silo Finance Borrowable wanS Deposit, SiloId: 25",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x42526feDD57706d73eBD3ffb0A7a299d6b36dEB7",
                symbol: "nbwanS-25",
                name: "Silo Finance Non-borrowable wanS Deposit, SiloId: 25",
                decimals: 18,
              },
              debtToken: {
                address: "0x71EDF73739d5E1Eed396E38096baA972449aC50f",
                symbol: "dwanS-25",
                name: "Silo Finance wanS Debt, SiloId: 25",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0x016C306e103FbF48EC24810D078C65aD13c5f11B",
                symbol: "bwS-25",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 25",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x7F11b35102A74BA6b5597fa5495f6B93627E7D86",
                symbol: "nbwS-25",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 25",
                decimals: 18,
              },
              debtToken: {
                address: "0x3F5Fa5642AfeA358d65F818102008F6F88BF5cae",
                symbol: "dwS-25",
                name: "Silo Finance wS Debt, SiloId: 25",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "S/USDC",
            marketAddress: "0x4915F6d3C9a7B20CedFc5d3854f2802f30311d13",
            silo0: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0xE223C8e92AA91e966CA31d5C6590fF7167E25801",
                symbol: "bwS-8",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 8",
                decimals: 21,
              },
              collateralOnlyToken: {
                address: "0xD385fFd74588D01464C8A55e8031a8eCDeE2567D",
                symbol: "nbwS-8",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 8",
                decimals: 21,
              },
              debtToken: {
                address: "0x75875d9405DF9bD80f6a7a1B2b7e40dD848427A4",
                symbol: "dwS-8",
                name: "Silo Finance wS Debt, SiloId: 8",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
                symbol: "USDC",
                name: "USDC",
                decimals: 6,
              },
              collateralToken: {
                address: "0x4E216C15697C1392fE59e1014B009505E05810Df",
                symbol: "bUSDC.e-8",
                name: "Silo Finance Borrowable USDC.e Deposit, SiloId: 8",
                decimals: 9,
              },
              collateralOnlyToken: {
                address: "0x4B65F19cCc4c387f7D649ea42fA70feEaF613925",
                symbol: "nbUSDC.e-8",
                name: "Silo Finance Non-borrowable USDC.e Deposit, SiloId: 8",
                decimals: 9,
              },
              debtToken: {
                address: "0xB1d70D54eC3caAfeCE8812111681d93A3C524875",
                symbol: "dUSDC.e-8",
                name: "Silo Finance USDC.e Debt, SiloId: 8",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "PT-wstkscUSD (29 May)/frxUSD",
            marketAddress: "0xe7579D515BD1676b6Da703786189a457B9bB3Fc3",
            silo0: {
              underlyingAsset: {
                address: "0xBe27993204Ec64238F71A527B4c4D5F4949034C3",
                symbol: "PT-wstkscUSD (29 May)",
                name: "Rings • Pendle",
                decimals: 6,
              },
              collateralToken: {
                address: "0x854475b78880767e246163031b5bE44f14426c26",
                symbol: "bPT-wstkscUSD-29MAY2025-37",
                name: "Silo Finance Borrowable PT-wstkscUSD-29MAY2025 Deposit, SiloId: 37",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x14360D1B2b94d3057d514c186A52378ad6a794aF",
                symbol: "nbPT-wstkscUSD-29MAY2025-37",
                name: "Silo Finance Non-borrowable PT-wstkscUSD-29MAY2025 Deposit, SiloId: 37",
                decimals: 6,
              },
              debtToken: {
                address: "0x32e2F214d2A8526dafeCE989A03C85F79C83E2ad",
                symbol: "dPT-wstkscUSD-29MAY2025-37",
                name: "Silo Finance PT-wstkscUSD-29MAY2025 Debt, SiloId: 37",
                decimals: 6,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x80Eede496655FB9047dd39d9f418d5483ED600df",
                symbol: "frxUSD",
                name: "Frax USD",
                decimals: 18,
              },
              collateralToken: {
                address: "0xdA14A41DbdA731F03A94cb722191639DD22b35b2",
                symbol: "bfrxUSD-37",
                name: "Silo Finance Borrowable frxUSD Deposit, SiloId: 37",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0xEa27319F52E0106FEF49Bc87ab27CFEDbedd8657",
                symbol: "nbfrxUSD-37",
                name: "Silo Finance Non-borrowable frxUSD Deposit, SiloId: 37",
                decimals: 18,
              },
              debtToken: {
                address: "0x5Ba062f76DF31485B2a5CA3E5F33617E82e285d2",
                symbol: "dfrxUSD-37",
                name: "Silo Finance frxUSD Debt, SiloId: 37",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "S/scUSD",
            marketAddress: "0xFe514E71F0933F63B374056557AED3dBB381C646",
            silo0: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0x34BB967d21bfED31F2A2Eb4478A520c254b16d2e",
                symbol: "bwS-15",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 15",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x6d7E383eA3A982Df7ff3acBF8EBF44fdae0A7Ac1",
                symbol: "nbwS-15",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 15",
                decimals: 18,
              },
              debtToken: {
                address: "0xE3AC644A039A3A1d8Ca27934731DB29CBd5b8F07",
                symbol: "dwS-15",
                name: "Silo Finance wS Debt, SiloId: 15",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
                symbol: "scUSD",
                name: "Sonic USD",
                decimals: 6,
              },
              collateralToken: {
                address: "0x2f5Dc399B1E31f9808D1EF1256917ABD2447c74f",
                symbol: "bscUSD-15",
                name: "Silo Finance Borrowable scUSD Deposit, SiloId: 15",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x29f3c3c6C9bB90F734bb2064A9B812134FC6F3E7",
                symbol: "nbscUSD-15",
                name: "Silo Finance Non-borrowable scUSD Deposit, SiloId: 15",
                decimals: 6,
              },
              debtToken: {
                address: "0x735f203Cf45bFf06cc19798f8e966Ec91FA04015",
                symbol: "dscUSD-15",
                name: "Silo Finance scUSD Debt, SiloId: 15",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "wstkscUSD/USDC",
            marketAddress: "0xbC24c0F594ECA381956895957c771437D61400D3",
            silo0: {
              underlyingAsset: {
                address: "0x9fb76f7ce5FCeAA2C42887ff441D46095E494206",
                symbol: "wstkscUSD",
                name: "Wrapped stkscUSD",
                decimals: 6,
              },
              collateralToken: {
                address: "0x4E09FF794D255a123b00efa30162667A8054a845",
                symbol: "bwstkscUSD-23",
                name: "Silo Finance Borrowable wstkscUSD Deposit, SiloId: 23",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0xD135d6e61bb5773C19117d68715dF04c5790567d",
                symbol: "nbwstkscUSD-23",
                name: "Silo Finance Non-borrowable wstkscUSD Deposit, SiloId: 23",
                decimals: 6,
              },
              debtToken: {
                address: "0x1EC220746c08034Ea119c27B987Faa1fC9Dd36b6",
                symbol: "dwstkscUSD-23",
                name: "Silo Finance wstkscUSD Debt, SiloId: 23",
                decimals: 6,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
                symbol: "USDC",
                name: "USDC",
                decimals: 6,
              },
              collateralToken: {
                address: "0x5954ce6671d97D24B782920ddCdBB4b1E63aB2De",
                symbol: "bUSDC.e-23",
                name: "Silo Finance Borrowable USDC.e Deposit, SiloId: 23",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x910927944B87011383BA378260077bb23Ad46518",
                symbol: "nbUSDC.e-23",
                name: "Silo Finance Non-borrowable USDC.e Deposit, SiloId: 23",
                decimals: 6,
              },
              debtToken: {
                address: "0x70E9bc275E6AFc7222eC011CE182208648ACa0d9",
                symbol: "dUSDC.e-23",
                name: "Silo Finance USDC.e Debt, SiloId: 23",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "PT-stS (29 May)/S",
            marketAddress: "0xC38a36CC0f1D616351d901A75BF3D58FCA4De71F",
            silo0: {
              underlyingAsset: {
                address: "0x420df605D062F8611EFb3F203BF258159b8FfFdE",
                symbol: "PT-stS (29 May)",
                name: "Beets • Pendle",
                decimals: 18,
              },
              collateralToken: {
                address: "0x058766008d237faF3B05eeEebABc73C64d677bAE",
                symbol: "bPT-stS-29MAY2025-40",
                name: "Silo Finance Borrowable PT-stS-29MAY2025 Deposit, SiloId: 40",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x2a2F196CEA02931923E50764AeabeC96534BD2f1",
                symbol: "nbPT-stS-29MAY2025-40",
                name: "Silo Finance Non-borrowable PT-stS-29MAY2025 Deposit, SiloId: 40",
                decimals: 18,
              },
              debtToken: {
                address: "0x2D5bC0c993fE9E50554Da00d64680c03fcFb2525",
                symbol: "dPT-stS-29MAY2025-40",
                name: "Silo Finance PT-stS-29MAY2025 Debt, SiloId: 40",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0x24F7692af5231d559219d07c65276Ad8C8ceE9A3",
                symbol: "bwS-40",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 40",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x1a335afa9E2620A76b1EAd558f5175C3CDa9e406",
                symbol: "nbwS-40",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 40",
                decimals: 18,
              },
              debtToken: {
                address: "0x954c713AB98735a2829d1f4Fc9eD7E55437BeDf7",
                symbol: "dwS-40",
                name: "Silo Finance wS Debt, SiloId: 40",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "wOS/S",
            marketAddress: "0x1A030F39a8cf9f0b2649e97cF6d0C7853AeaCf78",
            silo0: {
              underlyingAsset: {
                address: "0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1",
                symbol: "wOS",
                name: "Wrapped OS",
                decimals: 18,
              },
              collateralToken: {
                address: "0x1d7E3726aFEc5088e11438258193A199F9D5Ba93",
                symbol: "bwOS-22",
                name: "Silo Finance Borrowable wOS Deposit, SiloId: 22",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x8738a58D6d9C1A7dA39647fA57c00C024Bf6e38b",
                symbol: "nbwOS-22",
                name: "Silo Finance Non-borrowable wOS Deposit, SiloId: 22",
                decimals: 18,
              },
              debtToken: {
                address: "0xb5DbaA43e54F1b04A11f310A93e9834533B8fE63",
                symbol: "dwOS-22",
                name: "Silo Finance wOS Debt, SiloId: 22",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0x112380065A2cb73A5A429d9Ba7368cc5e8434595",
                symbol: "bwS-22",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 22",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0xD8756c6F0C9D830e5958a64cbB2F5752B069dfcD",
                symbol: "nbwS-22",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 22",
                decimals: 18,
              },
              debtToken: {
                address: "0xb8abA7c4e192De20e67D4229326C92ADC5f664ea",
                symbol: "dwS-22",
                name: "Silo Finance wS Debt, SiloId: 22",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "x33/USDC",
            marketAddress: "0x18555e17A97974A07841F652E45263b9CE8AD369",
            silo0: {
              underlyingAsset: {
                address: "0x3333111A391cC08fa51353E9195526A70b333333",
                symbol: "x33",
                name: "Shadow Liquid Staking Token",
                decimals: 18,
              },
              collateralToken: {
                address: "0x21b7def97680992B1f1A8B8E5966EaE32e6Ab8F3",
                symbol: "bx33-49",
                name: "Silo Finance Borrowable x33 Deposit, SiloId: 49",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x51F5DC1c581e309D73E1c6Ea74176077b3c44e60",
                symbol: "nbx33-49",
                name: "Silo Finance Non-borrowable x33 Deposit, SiloId: 49",
                decimals: 18,
              },
              debtToken: {
                address: "0x663FdEBC3940b7a0B36842e8b6D6A695675b0A0f",
                symbol: "dx33-49",
                name: "Silo Finance x33 Debt, SiloId: 49",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
                symbol: "USDC",
                name: "USDC",
                decimals: 6,
              },
              collateralToken: {
                address: "0xa18a8f100f2c976044f2f84fae1eE9f807Ae7893",
                symbol: "bUSDC.e-49",
                name: "Silo Finance Borrowable USDC.e Deposit, SiloId: 49",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0xF1b5b4630ce1106415236f684AF560E3112bDcE6",
                symbol: "nbUSDC.e-49",
                name: "Silo Finance Non-borrowable USDC.e Deposit, SiloId: 49",
                decimals: 6,
              },
              debtToken: {
                address: "0x14cc2Edb64479083CCe9669E3299f32429a47B96",
                symbol: "dUSDC.e-49",
                name: "Silo Finance USDC.e Debt, SiloId: 49",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "Anon/USDC",
            marketAddress: "0xaaF2F78f5eA77bF4EA150E869C54eEb73185a3BF",
            silo0: {
              underlyingAsset: {
                address: "0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C",
                symbol: "Anon",
                name: "HeyAnon",
                decimals: 18,
              },
              collateralToken: {
                address: "0xE453c128f9Fa860960913f40eF975B1Fe5621E9e",
                symbol: "bAnon-27",
                name: "Silo Finance Borrowable Anon Deposit, SiloId: 27",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x24061FF357dA16B7885d5310739278af7A8564DA",
                symbol: "nbAnon-27",
                name: "Silo Finance Non-borrowable Anon Deposit, SiloId: 27",
                decimals: 18,
              },
              debtToken: {
                address: "0xcA11DB92ba12dB7D5D82Cc2c4e1b3Ed043f225E0",
                symbol: "dAnon-27",
                name: "Silo Finance Anon Debt, SiloId: 27",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
                symbol: "USDC",
                name: "USDC",
                decimals: 6,
              },
              collateralToken: {
                address: "0x7e88AE5E50474A48deA4c42a634aA7485e7CaA62",
                symbol: "bUSDC.e-27",
                name: "Silo Finance Borrowable USDC.e Deposit, SiloId: 27",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x94A306D8DEd78e0443cDf1CC752143b46C49eD76",
                symbol: "nbUSDC.e-27",
                name: "Silo Finance Non-borrowable USDC.e Deposit, SiloId: 27",
                decimals: 6,
              },
              debtToken: {
                address: "0xdEf18A0a4b6c8E2E77547755c0d15b2448D6B710",
                symbol: "dUSDC.e-27",
                name: "Silo Finance USDC.e Debt, SiloId: 27",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "PT-wstkscETH (29 May)/ETH",
            marketAddress: "0x4BB15418ef55367c638CA376b50276FACB4A30Ca",
            silo0: {
              underlyingAsset: {
                address: "0xa2161E75EDf50d70544e6588788A5732A3105c00",
                symbol: "PT-wstkscETH (29 May)",
                name: "Rings • Pendle",
                decimals: 18,
              },
              collateralToken: {
                address: "0x356FCc93b96C8590E02fD6077f8886e1B31E2122",
                symbol: "bPT-wstkscETH-29MAY2025-35",
                name: "Silo Finance Borrowable PT-wstkscETH-29MAY2025 Deposit, SiloId: 35",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x45bEabdA03964657F3AC27c67024ee7ea8d643C5",
                symbol: "nbPT-wstkscETH-29MAY2025-35",
                name: "Silo Finance Non-borrowable PT-wstkscETH-29MAY2025 Deposit, SiloId: 35",
                decimals: 18,
              },
              debtToken: {
                address: "0x4124775C5a3B85EcB2ED4C74339bFca38cF97399",
                symbol: "dPT-wstkscETH-29MAY2025-35",
                name: "Silo Finance PT-wstkscETH-29MAY2025 Debt, SiloId: 35",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
                symbol: "ETH",
                name: "Ether",
                decimals: 18,
              },
              collateralToken: {
                address: "0x08C320A84a59c6f533e0DcA655cf497594BCa1F9",
                symbol: "bWETH-35",
                name: "Silo Finance Borrowable WETH Deposit, SiloId: 35",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0xA38E1dd4C79EA35C97b71f87E7a2E9f918F9B1b8",
                symbol: "nbWETH-35",
                name: "Silo Finance Non-borrowable WETH Deposit, SiloId: 35",
                decimals: 18,
              },
              debtToken: {
                address: "0x71aBBee7a0B1729Eb60A6883726a58bCa051Fd8b",
                symbol: "dWETH-35",
                name: "Silo Finance WETH Debt, SiloId: 35",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "sfrxUSD/scUSD",
            marketAddress: "0x6452b9aE8011800457b42C4fBBDf4579afB96228",
            silo0: {
              underlyingAsset: {
                address: "0x5Bff88cA1442c2496f7E475E9e7786383Bc070c0",
                symbol: "sfrxUSD",
                name: "Staked Frax USD",
                decimals: 18,
              },
              collateralToken: {
                address: "0x0df2B7c7E2023a3EEfcD24486C47aBaC9dF80AC3",
                symbol: "bsfrxUSD-48",
                name: "Silo Finance Borrowable sfrxUSD Deposit, SiloId: 48",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0xEb93F4CbdF76bd556d237d1B6B05A47827483E0C",
                symbol: "nbsfrxUSD-48",
                name: "Silo Finance Non-borrowable sfrxUSD Deposit, SiloId: 48",
                decimals: 18,
              },
              debtToken: {
                address: "0x330Ceed2Ce7484FDBd07E481ec6A050B2B7938C2",
                symbol: "dsfrxUSD-48",
                name: "Silo Finance sfrxUSD Debt, SiloId: 48",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
                symbol: "scUSD",
                name: "Sonic USD",
                decimals: 6,
              },
              collateralToken: {
                address: "0x5863A7B7e087e6576DE1B6ACb38C6C72caC20Ac4",
                symbol: "bscUSD-48",
                name: "Silo Finance Borrowable scUSD Deposit, SiloId: 48",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0xb1EdC20fB60b855856c8F3Bb65505c2a6A1303e7",
                symbol: "nbscUSD-48",
                name: "Silo Finance Non-borrowable scUSD Deposit, SiloId: 48",
                decimals: 6,
              },
              debtToken: {
                address: "0x3850420b2a7eAA3dCFcb2505E477144a3c210B26",
                symbol: "dscUSD-48",
                name: "Silo Finance scUSD Debt, SiloId: 48",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "wstkscETH/ETH",
            marketAddress: "0xefA367570B11f8745B403c0D458b9D2EAf424686",
            silo0: {
              underlyingAsset: {
                address: "0xE8a41c62BB4d5863C6eadC96792cFE90A1f37C47",
                symbol: "wstkscETH",
                name: "Wrapped stkscETH",
                decimals: 18,
              },
              collateralToken: {
                address: "0xE8e1A980a7fc8D47D337d704FA73FBb81eE55C25",
                symbol: "bwstkscETH-26",
                name: "Silo Finance Borrowable wstkscETH Deposit, SiloId: 26",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0xcD39a55Dc7D26ad760D7FEb09fca80b0F1adB873",
                symbol: "nbwstkscETH-26",
                name: "Silo Finance Non-borrowable wstkscETH Deposit, SiloId: 26",
                decimals: 18,
              },
              debtToken: {
                address: "0x56eA3E615D904fB26511db0Db6A6AA00f035Cff8",
                symbol: "dwstkscETH-26",
                name: "Silo Finance wstkscETH Debt, SiloId: 26",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
                symbol: "ETH",
                name: "Ether",
                decimals: 18,
              },
              collateralToken: {
                address: "0x219656F33c58488D09d518BaDF50AA8CdCAcA2Aa",
                symbol: "bWETH-26",
                name: "Silo Finance Borrowable WETH Deposit, SiloId: 26",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x071844094e15d4C7122243A4b1a4486a15f00b29",
                symbol: "nbWETH-26",
                name: "Silo Finance Non-borrowable WETH Deposit, SiloId: 26",
                decimals: 18,
              },
              debtToken: {
                address: "0xeA5A72c77124E282a6DF3567e9c4a064bF6B7d6b",
                symbol: "dWETH-26",
                name: "Silo Finance WETH Debt, SiloId: 26",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "xSolvBTC/SolvBTC",
            marketAddress: "0xC1F3d4F5f734d6Dc9E7D4f639EbE489Acd4542ab",
            silo0: {
              underlyingAsset: {
                address: "0xCC0966D8418d412c599A6421b760a847eB169A8c",
                symbol: "xSolvBTC",
                name: "xSolvBTC",
                decimals: 18,
              },
              collateralToken: {
                address: "0x52Fc9E0a68b6a4C9b57b9D1d99fB71449A99DCd8",
                symbol: "bxSolvBTC-13",
                name: "Silo Finance Borrowable xSolvBTC Deposit, SiloId: 13",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x96B6Bda63BB652dF309E2499457dbF5cf316B5aF",
                symbol: "nbxSolvBTC-13",
                name: "Silo Finance Non-borrowable xSolvBTC Deposit, SiloId: 13",
                decimals: 18,
              },
              debtToken: {
                address: "0x80E2Ebc2eD157A16B2d5dF829faF3e9791E3382d",
                symbol: "dxSolvBTC-13",
                name: "Silo Finance xSolvBTC Debt, SiloId: 13",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x541FD749419CA806a8bc7da8ac23D346f2dF8B77",
                symbol: "SolvBTC",
                name: "Solv BTC",
                decimals: 18,
              },
              collateralToken: {
                address: "0x87178fe8698C7eDa8aA207083C3d66aEa569aB98",
                symbol: "bSolvBTC-13",
                name: "Silo Finance Borrowable SolvBTC Deposit, SiloId: 13",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x9Fc1bf6dC659E43465BB22d7037633024d09551e",
                symbol: "nbSolvBTC-13",
                name: "Silo Finance Non-borrowable SolvBTC Deposit, SiloId: 13",
                decimals: 18,
              },
              debtToken: {
                address: "0xA63114cd12EB9048Bd572E2a64971bC3E7477e87",
                symbol: "dSolvBTC-13",
                name: "Silo Finance SolvBTC Debt, SiloId: 13",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "S/ETH",
            marketAddress: "0x9603Af53dC37F4BB6386f358A51a04fA8f599101",
            silo0: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0x4bFead9975A64545C3594090327ef6666C2f6164",
                symbol: "bwS-9",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 9",
                decimals: 21,
              },
              collateralOnlyToken: {
                address: "0x703E6109B8dc31f14AF6D038ee02d4F4348EE6Ad",
                symbol: "nbwS-9",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 9",
                decimals: 21,
              },
              debtToken: {
                address: "0x18Db077a375881BaeF95c8BF1d9eE7Cf43943737",
                symbol: "dwS-9",
                name: "Silo Finance wS Debt, SiloId: 9",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
                symbol: "ETH",
                name: "Ether",
                decimals: 18,
              },
              collateralToken: {
                address: "0x427514a905fa6bEaed9A36E308Fcfa06cE54e95b",
                symbol: "bWETH-9",
                name: "Silo Finance Borrowable WETH Deposit, SiloId: 9",
                decimals: 21,
              },
              collateralOnlyToken: {
                address: "0xad86c09DB6751be5CeC2f6FDBab3c3f2D7Ba5E94",
                symbol: "nbWETH-9",
                name: "Silo Finance Non-borrowable WETH Deposit, SiloId: 9",
                decimals: 21,
              },
              debtToken: {
                address: "0x55522ef8eB7CC1fb692703fa7e1e8d3Ddc826e22",
                symbol: "dWETH-9",
                name: "Silo Finance WETH Debt, SiloId: 9",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "PT-wstkscUSD (29 May)/USDC",
            marketAddress: "0x3605509B2C8Bff9808da5dd5c81547d9EDC4Ffa2",
            silo0: {
              underlyingAsset: {
                address: "0xBe27993204Ec64238F71A527B4c4D5F4949034C3",
                symbol: "PT-wstkscUSD (29 May)",
                name: "Rings • Pendle",
                decimals: 6,
              },
              collateralToken: {
                address: "0x8CBFF16C01154669b4DDA5B2cf8724d8ccBD3516",
                symbol: "bPT-wstkscUSD-29MAY2025-34",
                name: "Silo Finance Borrowable PT-wstkscUSD-29MAY2025 Deposit, SiloId: 34",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x0D40A290Af2Fc03496A9974b2bD92e14e888666d",
                symbol: "nbPT-wstkscUSD-29MAY2025-34",
                name: "Silo Finance Non-borrowable PT-wstkscUSD-29MAY2025 Deposit, SiloId: 34",
                decimals: 6,
              },
              debtToken: {
                address: "0xfB89E923F0E0DEC53De38C8Cdad06Fc9DDcC7F3F",
                symbol: "dPT-wstkscUSD-29MAY2025-34",
                name: "Silo Finance PT-wstkscUSD-29MAY2025 Debt, SiloId: 34",
                decimals: 6,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
                symbol: "USDC",
                name: "USDC",
                decimals: 6,
              },
              collateralToken: {
                address: "0x6030aD53d90ec2fB67F3805794dBB3Fa5FD6Eb64",
                symbol: "bUSDC.e-34",
                name: "Silo Finance Borrowable USDC.e Deposit, SiloId: 34",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x476297AD870D8Dc82354d560f89EB1dd568Fb57A",
                symbol: "nbUSDC.e-34",
                name: "Silo Finance Non-borrowable USDC.e Deposit, SiloId: 34",
                decimals: 6,
              },
              debtToken: {
                address: "0x199af916af23240561E04f61E75ac1a519b76052",
                symbol: "dUSDC.e-34",
                name: "Silo Finance USDC.e Debt, SiloId: 34",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "PT-wstkscETH (29 May)/scETH",
            marketAddress: "0x6478362fbefd083F71705bD2BbBf3465170CDf4f",
            silo0: {
              underlyingAsset: {
                address: "0xa2161E75EDf50d70544e6588788A5732A3105c00",
                symbol: "PT-wstkscETH (29 May)",
                name: "Rings • Pendle",
                decimals: 18,
              },
              collateralToken: {
                address: "0x83e23bEBeDDf0B4a9C56305D142b70cf5d8187eF",
                symbol: "bPT-wstkscETH-29MAY2025-47",
                name: "Silo Finance Borrowable PT-wstkscETH-29MAY2025 Deposit, SiloId: 47",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x04BDa7c92D46753C7192D1ABd3c9D2bdf40f0692",
                symbol: "nbPT-wstkscETH-29MAY2025-47",
                name: "Silo Finance Non-borrowable PT-wstkscETH-29MAY2025 Deposit, SiloId: 47",
                decimals: 18,
              },
              debtToken: {
                address: "0x9204aB4aDAe5B9F17DFee6f8264E30C5d7e5E4A8",
                symbol: "dPT-wstkscETH-29MAY2025-47",
                name: "Silo Finance PT-wstkscETH-29MAY2025 Debt, SiloId: 47",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x3bcE5CB273F0F148010BbEa2470e7b5df84C7812",
                symbol: "scETH",
                name: "Sonic ETH",
                decimals: 18,
              },
              collateralToken: {
                address: "0x24c74B30d1a4261608E84Bf5a618693032681DAc",
                symbol: "bscETH-47",
                name: "Silo Finance Borrowable scETH Deposit, SiloId: 47",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x656D046e11be5954266B1154CA0524DbC340e838",
                symbol: "nbscETH-47",
                name: "Silo Finance Non-borrowable scETH Deposit, SiloId: 47",
                decimals: 18,
              },
              debtToken: {
                address: "0x3486bfa577f07BBEAb12185a11E54fe204C95331",
                symbol: "dscETH-47",
                name: "Silo Finance scETH Debt, SiloId: 47",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "beS/S",
            marketAddress: "0xEd7f8C077711B86b574ed94bB84895fbf147Cd8e",
            silo0: {
              underlyingAsset: {
                address: "0x871A101Dcf22fE4fE37be7B654098c801CBA1c88",
                symbol: "beS",
                name: "Beefy Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0x19926d2163Fde0d77f7D50bb88701a6f51F45FAB",
                symbol: "bbeS-52",
                name: "Silo Finance Borrowable beS Deposit, SiloId: 52",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x90aB736C529D9b980ED33206A066F23BDDbcA9b9",
                symbol: "nbbeS-52",
                name: "Silo Finance Non-borrowable beS Deposit, SiloId: 52",
                decimals: 18,
              },
              debtToken: {
                address: "0x4f06D8F15B928D94Cf6a9BeC5bcb32387f1cB52f",
                symbol: "dbeS-52",
                name: "Silo Finance beS Debt, SiloId: 52",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0xfbD3CCCb196Ce900BE5E2D008A6C2fDE90760408",
                symbol: "bwS-52",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 52",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x542f05fb915f201258955478496730F3FbB6141b",
                symbol: "nbwS-52",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 52",
                decimals: 18,
              },
              debtToken: {
                address: "0x69C986fB2a86B5b5371e51DBeb1261E686c96dcE",
                symbol: "dwS-52",
                name: "Silo Finance wS Debt, SiloId: 52",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "PT-wOS (29 May)/S",
            marketAddress: "0x115d53d01df03293A5c5A1df569f450869613BDD",
            silo0: {
              underlyingAsset: {
                address: "0x46eb02b9F47634c4fab3110CC7ADc1C6311DfAC1",
                symbol: "PT-wOS (29 May)",
                name: "Origin • Pendle",
                decimals: 18,
              },
              collateralToken: {
                address: "0x7dB82f430f333Ac5D93963e0a93FAfEF7061F998",
                symbol: "bPT-wOS-29MAY2025-41",
                name: "Silo Finance Borrowable PT-wOS-29MAY2025 Deposit, SiloId: 41",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x3A57034303b2a5939AD54c3355E828217b135821",
                symbol: "nbPT-wOS-29MAY2025-41",
                name: "Silo Finance Non-borrowable PT-wOS-29MAY2025 Deposit, SiloId: 41",
                decimals: 18,
              },
              debtToken: {
                address: "0x51E69Fa6b54CC48fA6aEF67463feb833620921C9",
                symbol: "dPT-wOS-29MAY2025-41",
                name: "Silo Finance PT-wOS-29MAY2025 Debt, SiloId: 41",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0xE75B0B3d24B988Ada7136F6b8D491b727c36c27F",
                symbol: "bwS-41",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 41",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x184d13a871E8cdc41e27e63b0457a59c6188261F",
                symbol: "nbwS-41",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 41",
                decimals: 18,
              },
              debtToken: {
                address: "0xC9d073568f905f3ca957Cc5560F022D4d6802799",
                symbol: "dwS-41",
                name: "Silo Finance wS Debt, SiloId: 41",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "stS/S",
            marketAddress: "0xA3BF8b1eE377bBe6152A6885eaeE8747dcBEa35D",
            silo0: {
              underlyingAsset: {
                address: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
                symbol: "stS",
                name: "Beets Staked Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0xF03c5b0CCbC4840AA2A0c896DC56ca79E75D1879",
                symbol: "bstS-28",
                name: "Silo Finance Borrowable stS Deposit, SiloId: 28",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x3Acf410436F9FAac700459b6bde2Cc8BfD9BA699",
                symbol: "nbstS-28",
                name: "Silo Finance Non-borrowable stS Deposit, SiloId: 28",
                decimals: 18,
              },
              debtToken: {
                address: "0x933a1ac3D4Ac09487EcAE2eC0B3F301b39123B64",
                symbol: "dstS-28",
                name: "Silo Finance stS Debt, SiloId: 28",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0x6c49B18333A1135e9A376560c07E6D1Fd0350EaF",
                symbol: "bwS-28",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 28",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0xBE00a77373804213f12678F47E9565e541368136",
                symbol: "nbwS-28",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 28",
                decimals: 18,
              },
              debtToken: {
                address: "0xc908e972afD709218e83c3644E68b14851198165",
                symbol: "dwS-28",
                name: "Silo Finance wS Debt, SiloId: 28",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "LBTC/WBTC",
            marketAddress: "0x91D87099fA714a201297856D29380195adB62962",
            silo0: {
              underlyingAsset: {
                address: "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
                symbol: "LBTC",
                name: "Lombard Staked Bitcoin",
                decimals: 8,
              },
              collateralToken: {
                address: "0xf2f6609C0D9A8E6bd9be51359E67b58c9D33e771",
                symbol: "bLBTC-31",
                name: "Silo Finance Borrowable LBTC Deposit, SiloId: 31",
                decimals: 8,
              },
              collateralOnlyToken: {
                address: "0xCcE0dEA2b0bAf3151eF7E11571A7F908517E849a",
                symbol: "nbLBTC-31",
                name: "Silo Finance Non-borrowable LBTC Deposit, SiloId: 31",
                decimals: 8,
              },
              debtToken: {
                address: "0x4514048ac3d072091298551c9fE73Db379117e0b",
                symbol: "dLBTC-31",
                name: "Silo Finance LBTC Debt, SiloId: 31",
                decimals: 8,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
                symbol: "WBTC",
                name: "Wrapped BTC",
                decimals: 8,
              },
              collateralToken: {
                address: "0x0588651eE0B84b3CA8035a69d60fF18c0263DF71",
                symbol: "bWBTC-31",
                name: "Silo Finance Borrowable WBTC Deposit, SiloId: 31",
                decimals: 8,
              },
              collateralOnlyToken: {
                address: "0x60CA8d165ca0179ABE677A8e85c123e8Ec919629",
                symbol: "nbWBTC-31",
                name: "Silo Finance Non-borrowable WBTC Deposit, SiloId: 31",
                decimals: 8,
              },
              debtToken: {
                address: "0xB8FCC46EfcE5e3341d8ABe9A1DD70265d8841301",
                symbol: "dWBTC-31",
                name: "Silo Finance WBTC Debt, SiloId: 31",
                decimals: 8,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "stS/USDC",
            marketAddress: "0xDace786ceF546C258C67B3EF68AeD91B887BE0f0",
            silo0: {
              underlyingAsset: {
                address: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
                symbol: "stS",
                name: "Beets Staked Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0xd90545B06e7a6f9D2194d8f26E72c9B0D4e00D60",
                symbol: "bstS-36",
                name: "Silo Finance Borrowable stS Deposit, SiloId: 36",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x360fD93023467c095C509Ec365D278d1ac8410b1",
                symbol: "nbstS-36",
                name: "Silo Finance Non-borrowable stS Deposit, SiloId: 36",
                decimals: 18,
              },
              debtToken: {
                address: "0x274F83Ccf8952E77e49D2c4eD2bB1f4B8e77AA60",
                symbol: "dstS-36",
                name: "Silo Finance stS Debt, SiloId: 36",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
                symbol: "USDC",
                name: "USDC",
                decimals: 6,
              },
              collateralToken: {
                address: "0x11Ba70c0EBAB7946Ac84F0E6d79162b0cBb2693f",
                symbol: "bUSDC.e-36",
                name: "Silo Finance Borrowable USDC.e Deposit, SiloId: 36",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0xaD3ecc9Bdd88757F8bFE41AC96E9A33C28A40FE5",
                symbol: "nbUSDC.e-36",
                name: "Silo Finance Non-borrowable USDC.e Deposit, SiloId: 36",
                decimals: 6,
              },
              debtToken: {
                address: "0x469Aa25e89CA4378E5E99e775F34D3073628d047",
                symbol: "dUSDC.e-36",
                name: "Silo Finance USDC.e Debt, SiloId: 36",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "EGGS/USDC",
            marketAddress: "0x11BBa83002915bB204B348C2174626612260DDaa",
            silo0: {
              underlyingAsset: {
                address: "0xf26Ff70573ddc8a90Bd7865AF8d7d70B8Ff019bC",
                symbol: "EGGS",
                name: "Eggs",
                decimals: 18,
              },
              collateralToken: {
                address: "0x38207373C2cF5FF809da0D72F9965eeC1c87420F",
                symbol: "bEGGS-33",
                name: "Silo Finance Borrowable EGGS Deposit, SiloId: 33",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x7F5953a469529E4E3A1E2118d17803FA5C2bDa11",
                symbol: "nbEGGS-33",
                name: "Silo Finance Non-borrowable EGGS Deposit, SiloId: 33",
                decimals: 18,
              },
              debtToken: {
                address: "0x74948bF63c979a96B29feD9E2A3b7f8C03F68a25",
                symbol: "dEGGS-33",
                name: "Silo Finance EGGS Debt, SiloId: 33",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
                symbol: "USDC",
                name: "USDC",
                decimals: 6,
              },
              collateralToken: {
                address: "0x42CE2234fd5a26bF161477a996961c4d01F466a3",
                symbol: "bUSDC.e-33",
                name: "Silo Finance Borrowable USDC.e Deposit, SiloId: 33",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0xDf041461650Cfce922A052FC0BbA9a8311839A3c",
                symbol: "nbUSDC.e-33",
                name: "Silo Finance Non-borrowable USDC.e Deposit, SiloId: 33",
                decimals: 6,
              },
              debtToken: {
                address: "0xDd6D048f80cC64a53949A1Bb8E0FCc38f3388056",
                symbol: "dUSDC.e-33",
                name: "Silo Finance USDC.e Debt, SiloId: 33",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "PT-wanS (28 Aug)/S",
            marketAddress: "0x12e082a98C2292382f9e2Bd03CAD7Fb41242831A",
            silo0: {
              underlyingAsset: {
                address: "0x789cA09b0B4bcc83062d817C43206f96bd464015",
                symbol: "PT-wanS (28 Aug)",
                name: "Angles • Pendle",
                decimals: 18,
              },
              collateralToken: {
                address: "0x36798869d32FA5a617085044d84E0636a7830Abb",
                symbol: "bPT-wanS-28AUG2025-51",
                name: "Silo Finance Borrowable PT-wanS-28AUG2025 Deposit, SiloId: 51",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0x266a6ba6fa2feB7a571bD05EA855159EBe6f9ADf",
                symbol: "nbPT-wanS-28AUG2025-51",
                name: "Silo Finance Non-borrowable PT-wanS-28AUG2025 Deposit, SiloId: 51",
                decimals: 18,
              },
              debtToken: {
                address: "0xc4C2151fB8BCBD54D2fb2B521F5a26b9ad21ff0c",
                symbol: "dPT-wanS-28AUG2025-51",
                name: "Silo Finance PT-wanS-28AUG2025 Debt, SiloId: 51",
                decimals: 18,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
                symbol: "S",
                name: "Sonic",
                decimals: 18,
              },
              collateralToken: {
                address: "0xC92E96acb616476Ed117f263Fa68Ce21F6D554D3",
                symbol: "bwS-51",
                name: "Silo Finance Borrowable wS Deposit, SiloId: 51",
                decimals: 18,
              },
              collateralOnlyToken: {
                address: "0xE54e7C58C3AE97b617257086B7a5D44FB64A9815",
                symbol: "nbwS-51",
                name: "Silo Finance Non-borrowable wS Deposit, SiloId: 51",
                decimals: 18,
              },
              debtToken: {
                address: "0x57863e9127135E756A5954D05ea72b9d9cd08da7",
                symbol: "dwS-51",
                name: "Silo Finance wS Debt, SiloId: 51",
                decimals: 18,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "WBTC/USDC",
            marketAddress: "0x2F33cCbB08743d51E086BDC1bA20fB8CEB9bAD40",
            silo0: {
              underlyingAsset: {
                address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
                symbol: "WBTC",
                name: "Wrapped BTC",
                decimals: 8,
              },
              collateralToken: {
                address: "0xB0f7931C300097C462f2C8568750D1C496F62205",
                symbol: "bWBTC-50",
                name: "Silo Finance Borrowable WBTC Deposit, SiloId: 50",
                decimals: 8,
              },
              collateralOnlyToken: {
                address: "0x95482Caf605B488EA6F5792dc4b5E5cC8FcFa690",
                symbol: "nbWBTC-50",
                name: "Silo Finance Non-borrowable WBTC Deposit, SiloId: 50",
                decimals: 8,
              },
              debtToken: {
                address: "0x4e5B294f6D97a43CD96Baf920742b01dB5A08661",
                symbol: "dWBTC-50",
                name: "Silo Finance WBTC Debt, SiloId: 50",
                decimals: 8,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
                symbol: "USDC",
                name: "USDC",
                decimals: 6,
              },
              collateralToken: {
                address: "0xb488af9A423eE9012db3b90B213dcca2CD9C4070",
                symbol: "bUSDC.e-50",
                name: "Silo Finance Borrowable USDC.e Deposit, SiloId: 50",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0xED0bDDdf202D5376B4E0F45e1D99da7dd088a13e",
                symbol: "nbUSDC.e-50",
                name: "Silo Finance Non-borrowable USDC.e Deposit, SiloId: 50",
                decimals: 6,
              },
              debtToken: {
                address: "0xFB892860c26Dd514E8158B0310c4B03BD3D08f9A",
                symbol: "dUSDC.e-50",
                name: "Silo Finance USDC.e Debt, SiloId: 50",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
          {
            marketName: "PT-wstkscUSD (29 May)/scUSD",
            marketAddress: "0xAD108d6c7Bcfc529B889598d96653Bbb3D00e2fc",
            silo0: {
              underlyingAsset: {
                address: "0xBe27993204Ec64238F71A527B4c4D5F4949034C3",
                symbol: "PT-wstkscUSD (29 May)",
                name: "Rings • Pendle",
                decimals: 6,
              },
              collateralToken: {
                address: "0xc5584e00349158dc04E9E5a857aB6C6F34b00C03",
                symbol: "bPT-wstkscUSD-29MAY2025-44",
                name: "Silo Finance Borrowable PT-wstkscUSD-29MAY2025 Deposit, SiloId: 44",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x06E9DCF8110382F3F9319B8fF7B4980AA6083848",
                symbol: "nbPT-wstkscUSD-29MAY2025-44",
                name: "Silo Finance Non-borrowable PT-wstkscUSD-29MAY2025 Deposit, SiloId: 44",
                decimals: 6,
              },
              debtToken: {
                address: "0x9134F31832B9821FCcA2784E7Ef6A6B872EE23c9",
                symbol: "dPT-wstkscUSD-29MAY2025-44",
                name: "Silo Finance PT-wstkscUSD-29MAY2025 Debt, SiloId: 44",
                decimals: 6,
              },
            },
            silo1: {
              underlyingAsset: {
                address: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
                symbol: "scUSD",
                name: "Sonic USD",
                decimals: 6,
              },
              collateralToken: {
                address: "0xC3A18f1Efa66234e7D233C8ad00D597F6e585f2b",
                symbol: "bscUSD-44",
                name: "Silo Finance Borrowable scUSD Deposit, SiloId: 44",
                decimals: 6,
              },
              collateralOnlyToken: {
                address: "0x50618995C36fC1EE4727050d9e78E8b992FC2b10",
                symbol: "nbscUSD-44",
                name: "Silo Finance Non-borrowable scUSD Deposit, SiloId: 44",
                decimals: 6,
              },
              debtToken: {
                address: "0x8bc1DCAeeE4f2D5a730d58D53Ca016731147e1cd",
                symbol: "dscUSD-44",
                name: "Silo Finance scUSD Debt, SiloId: 44",
                decimals: 6,
              },
            },
            protocols: [n.GP.SILO_V2],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW],
          },
        ],
        M = [
          {
            address: "0x32eb7902d4134bf98a28b963d26de779af92a212",
            symbol: "RDPX",
            name: "Dopex Rebate Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55",
            symbol: "DPX",
            name: "Dopex Governance Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
            symbol: "WETH",
            name: "Wrapped Ether",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x8d9ba570d6cb60c7e3e0f31343efe75ab8e65fb1",
            symbol: "gOHM",
            name: "Governance OHM",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
            symbol: "GMX",
            name: "GMX",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
            symbol: "USDC",
            name: "USD Coin (Arb1)",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x6261d197a98e9ae678688713629f25e44ca529fb",
            symbol: "NOVA",
            name: "Nova",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x9b570fb4f1b4ad1138b4613f98a4928833437a9b",
            symbol: "WETH",
            name: "Wrapped Ether",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x5979d7b546e38e414f7e9822514be443a4800529",
            symbol: "wstETH",
            name: "Wrapped liquid staked Ether 2.0",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x64343594ab9b56e99087bfa6f2335db24c2d1f17",
            symbol: "VST",
            name: "Vesta Stable",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
            symbol: "ARB",
            name: "Arbitrum",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
            symbol: "DAI",
            name: "Dai Stablecoin",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
            symbol: "USDT",
            name: "Tether USD",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x00877b8fc17b6e65675653bd85c7696bdb767ff7",
            symbol: "HIGH",
            name: "High Risk ",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x079504b86d38119f859c4194765029f692b7b7aa",
            symbol: "LYRA",
            name: "Lyra Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x088cd8f5ef3652623c22d48b1605dcfe860cd704",
            symbol: "VELA",
            name: "VelaToken",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x13ad51ed4f1b7e9dc168d8a00cb3f4ddd85efa60",
            symbol: "LDO",
            name: "Lido DAO Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x3d9907f9a368ad0a51be60f7da3b97cf940982d8",
            symbol: "GRAIL",
            name: "Camelot token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x431402e8b9de9aa016c743880e04e517074d8cec",
            symbol: "HEGIC",
            name: "Hegic",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xb766039cc6db368759c1e56b79affe831d0cc507",
            symbol: "RPL",
            name: "Rocket Pool Protocol",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8",
            symbol: "rETH",
            name: "Rocket Pool ETH",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x6694340fc020c5e6b96567843da2df01b2ce1eb6",
            symbol: "STG",
            name: "StargateToken",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xc6eee8cb7643ec2f05f46d569e9ec8ef8b41b389",
            symbol: "bb-a-USD",
            name: "Balancer Aave v3 Boosted StablePool",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x45026e94feef4ebaeafa9bbb7f5050bbbf6150da",
            symbol: "KEKS",
            name: "Keks",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xa684cd057951541187f288294a1e1c2646aa2d24",
            symbol: "VSTA",
            name: "Vesta",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
            symbol: "LINK",
            name: "ChainLink Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x01990f1e6f7f32296f125ee9469705c1c070054d",
            symbol: "Stafi rETH/WETH",
            name: "Balancer Stafi rETH/WETH ",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x6cda1d3d092811b2d48f7476adb59a6239ca9b95",
            symbol: "rETH",
            name: "StaFi",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8",
            symbol: "BAL",
            name: "Balancer",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xea70b39d79b22932aa92a096bf41e5330e1ba907",
            symbol: "VCT",
            name: "VisionaryCraft",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x027e2eb1c79bd1921a29fd377a8c978b3193401c",
            symbol: "ABAS",
            name: "Arbitrum Bitcoin and Staking Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x11f38b2aff86ff9f253f6fd91378e4c7dadf5667",
            symbol: "bForge",
            name: "Bridged Forge Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x7cb16cb78ea464ad35c8a50abf95dff3c9e09d5d",
            symbol: "0xBTC",
            name: "0xBitcoin Token",
            decimals: 8,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
            symbol: "weETH",
            name: "Wrapped eETH",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x02a1e9f29e9a04dbb64114e78cb6cba20c22d73f",
            symbol: "sUSDe/USDe",
            name: "Balancer sUSDe/USDe",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
            symbol: "sUSDe",
            name: "Staked USDe",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
            symbol: "USDe",
            name: "USDe",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x539bde0d7dbd336b79148aa742883198bbf60342",
            symbol: "MAGIC",
            name: "MAGIC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xc74fe4c715510ec2f8c61d70d397b32043f55abe",
            symbol: "MYC",
            name: "Mycelium",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x64541216bafffeec8ea535bb71fbc927831d0595",
            symbol: "B-33WETH-33WBTC-33USDC",
            name: "Balancer 33 WETH 33 WBTC 33 USDC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xa72159fc390f0e3c6d415e658264c7c4051e9b87",
            symbol: "TCR",
            name: "Tracer",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x989132f596ff5f79fe3e52bbddadacde6438bf06",
            symbol: "3L-ETH/USD+USDC",
            name: "3L-ETH/USD+USDC",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xe0258e0b32cd3840ef29789bcda9c2bf996e2a40",
            symbol: "3S-ETH/USD+USDC",
            name: "3S-ETH/USD+USDC",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x6e5f70e345b4afd271491290e026dd3d34cbb9f2",
            symbol: "3S-BTC/USD+USDC",
            name: "3S-BTC/USD+USDC",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xac278be0b5ad810ee3dcf79dd2933c33cc234258",
            symbol: "3L-BTC/USD+USDC",
            name: "3L-BTC/USD+USDC",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xd4d42f0b6def4ce0383636770ef773390d85c61a",
            symbol: "SUSHI",
            name: "SushiToken",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
            symbol: "UNI",
            name: "Uniswap",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978",
            symbol: "CRV",
            name: "Curve DAO Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x7cfadfd5645b50be87d546f42699d863648251ad",
            symbol: "stataArbUSDCn",
            name: "Static Aave Arbitrum USDCn",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xfa5ed56a203466cbbc2430a43c66b9d8723528e7",
            symbol: "EURA",
            name: "EURA (previously agEUR)",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x3f56e0c36d275367b8c502090edf38289b3dea0d",
            symbol: "MAI",
            name: "Mai Stablecoin",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            symbol: "USDC",
            name: "USD Coin",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
        ],
        R = [
          {
            address: "0x004700ba0a4f5f22e1e78a277fca55e36f47e09c",
            symbol: "bpt-ankrgalaharm",
            name: "Ankr's Galactic Harmony",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
            symbol: "rETH",
            name: "Rocket Pool ETH",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xe05a08226c49b636acf99c40da8dc6af83ce5bb3",
            symbol: "ankrETH",
            name: "Ankr Staked ETH",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x3b08fcd15280e7b5a6e404c4abb87f7c774d1b2e",
            symbol: "OVN",
            name: "OVN",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xa348700745d249c3b49d2c2acac9a5ae8155f826",
            symbol: "wUSD+",
            name: "Wrapped USD+",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x4200000000000000000000000000000000000042",
            symbol: "OP",
            name: "Optimism",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xd3594e879b358f430e20f82bea61e83562d49d48",
            symbol: "PSP",
            name: "ParaSwap",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xb4bc46bc6cb217b59ea8f4530bae26bf69f677f0",
            symbol: "BEETS",
            name: "BeethovenxToken",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xfe8b128ba8c78aabc59d4c64cee7ff28e9379921",
            symbol: "BAL",
            name: "Balancer",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x0c5b4c92c948691eebf185c17eeb9c230dc019e9",
            symbol: "PICKLE",
            name: "PickleToken",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x4200000000000000000000000000000000000006",
            symbol: "WETH",
            name: "Wrapped Ether",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
            symbol: "wstETH",
            name: "Wrapped liquid staked Ether 2.0",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x9e1028f5f1d5ede59748ffcee5532509976840e0",
            symbol: "PERP",
            name: "Perpetual",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
            symbol: "USDC",
            name: "USD Coin",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x97513e975a7fa9072c72c92d8000b0db90b163c5",
            symbol: "BEETS",
            name: "BeethovenxToken",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x3f56e0c36d275367b8c502090edf38289b3dea0d",
            symbol: "QI",
            name: "QiDao",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x055a4cfa8cd9ced1d7bc9ae5eb46c404c130e46d",
            symbol: "bb-rf-soWBTC",
            name: "Beets Reaper Sonne Boosted WBTC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x68f180fcce6836688e9084f035309e29bf0a2095",
            symbol: "WBTC",
            name: "Wrapped BTC",
            decimals: 8,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x73e51b0368ef8bd0070b12dd992c54aa53bcb5f4",
            symbol: "rf-so-WBTC",
            name: "Reaper.Farm Supply-Only WBTC Sonne Crypt",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
            symbol: "sUSD",
            name: "Synth sUSD",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
            symbol: "USDT",
            name: "Tether USD",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x296f55f8fb28e498b858d0bcda06d955b2cb3f97",
            symbol: "STG",
            name: "StargateToken",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xba7834bb3cd2db888e6a06fb45e82b4225cd0c71",
            symbol: "bb-rf-aUSDC",
            name: "Beets Reaper Aave Boosted USDC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x39fde572a18448f8139b7788099f0a0740f51205",
            symbol: "OATH",
            name: "Oath Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xc5b001dc33727f8f26880b184090d3e252470d45",
            symbol: "ERN",
            name: "Ethos Reserve Note",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x326aec8d7d99d1d6022c57c5f6194d2a7867227d",
            symbol: "TST",
            name: "TST",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
            symbol: "USDC",
            name: "USD Coin",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x6af3737f6d58ae8bcb9f2b597125d37244596e59",
            symbol: "bb-rf-soWBTC",
            name: "Beets Reaper Sonne Boosted WBTC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x7e9250cc13559eb50536859e8c076ef53e275fb3",
            symbol: "bb-rf-soWSTETH",
            name: "Beets Reaper Sonne Boosted WSTETH",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xedcfaf390906a8f91fb35b7bac23f3111dbaee1c",
            symbol: "bb-rf-soUSDC",
            name: "Beets Reaper Sonne Boosted USDC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xd6909e9e702024eb93312b989ee46794c0fb1c9d",
            symbol: "BICO",
            name: "Biconomy Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x0ccb0c34d4898dfa8de3ece9d814074e60adefd0",
            symbol: "bpt-ineth-wsteth",
            name: "(Re)stake On Me, Natively",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x5a7a183b6b44dc4ec2e3d2ef43f98c5152b1d76d",
            symbol: "inETH",
            name: "InceptionLRT restaked ETH",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x298b9b95708152ff6968aafd889c6586e9169f1d",
            symbol: "sBTC",
            name: "Synth sBTC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x455ba8e4c6dff2453e78cef92625b38c93f4f3dd",
            symbol: "BTC2S",
            name: "BTC 2x Short",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x6d80113e533a2c0fe82eabd35f1875dcea89ea97",
            symbol: "aOptSUSD",
            name: "Aave Optimism SUSD",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xfd389dc9533717239856190f42475d3f263a270d",
            symbol: "GRAIN",
            name: "Granary Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x10d89732c7e3c5b548e766805b40bc0ecdca4499",
            symbol: "rsETH/wETH",
            name: "Balancer rsETH/wETH",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
            symbol: "rsETH",
            name: "KelpDao Restaked ETH",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x11884da90fb4221b3aa288a7741c51ec4fc43b2f",
            symbol: "TEST",
            name: "DO NOT USE - Mock Linear Pool",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xb9f8ab3ed3f3acba64bc6cd2dca74b7f38fd7b88",
            symbol: "TEST",
            name: "DO NOT USE - Mock Static AToken",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x11a4cf51bb0bb4d925cadfda61fcda952d64889c",
            symbol: "TEST",
            name: "DO NOT USE - Mock Composable Stable Pool",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
            symbol: "CRV",
            name: "Curve DAO Token",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x15873081c0aa67ad5c5dba362169d352e2a128a2",
            symbol: "bb-rf-aUSDC",
            name: "Beets Reaper Aave Boosted USDC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x4f086a048c33f3bf9011dd2265861ce812624f2c",
            symbol: "rf-aUSDC",
            name: "USDC Aave Crypt",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x035c93db04e5aaea54e6cd0261c492a3e0638b37",
            symbol: "stataOptUSDT",
            name: "Static Aave Optimism USDT",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x4dd03dfd36548c840b563745e3fbec320f37ba7e",
            symbol: "stataOptUSDCn",
            name: "Static Aave Optimism USDCn",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
        ],
        g = [
          {
            address: "0x25ea98ac87a38142561ea70143fd44c4772a16b6",
            symbol: "MORE",
            name: "MORE",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
            symbol: "USDC",
            name: "USD Coin",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x4200000000000000000000000000000000000006",
            symbol: "WETH",
            name: "Wrapped Ether",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca",
            symbol: "USDbC",
            name: "USD Base Coin",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x5a7a2bf9ffae199f088b25837dcd7e115cf8e1bb",
            symbol: "IMO",
            name: "IMO",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x236aa50979d5f3de3bd1eeb40e81137f22ab794b",
            symbol: "tBTC",
            name: "Base tBTC v2",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xa48c87061f4081ca8b4e2bc01711edefb0dab2fc",
            symbol: "LINU",
            name: "Lord Inu",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x4158734d47fc9692176b5085e0f52ee0da5d47f1",
            symbol: "BAL",
            name: "Balancer",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xfde4c96c8593536e31f229ea8f37b2ada2699bb2",
            symbol: "USDT",
            name: "Tether USD",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xeb466342c4d449bc9f53a865d5cb90586f405215",
            symbol: "axlUSDC",
            name: "Axelar Wrapped USDC",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x7905ea12cc81a215a5f1d0f46df73a53e19e9264",
            symbol: "TAG",
            name: "TagTech",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xffcbf84650ce02dafe96926b37a0ac5e34932fa5",
            symbol: "cbXEN",
            name: "XEN Crypto",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x54330d28ca3357f294334bdc454a032e7f353416",
            symbol: "OLAS",
            name: "Autonolas",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
            symbol: "cbBTC",
            name: "Coinbase Wrapped BTC",
            decimals: 8,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x0868d3aecd29fe4e4f4490b4d3d0e937c6ef07ec",
            symbol: "SIS",
            name: "Sisyphus",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x09a2898054ed0bb8ceb4d010e54e0bc8014050e7",
            symbol: "LBTC/cbBTC",
            name: "Balancer LBTC/cbBTC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xecac9c5f704e954931349da37f60e39f515c11c1",
            symbol: "LBTC",
            name: "Lombard Staked Bitcoin",
            decimals: 8,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xab8a1c03b8e4e1d21c8ddd6edf9e07f26e843492",
            symbol: "OGRE",
            name: "SHREKT",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x0c316e55f987ef2d467f18852301492bca7e8a69",
            symbol: "USDbC/tUSDbC",
            name: "Balancer USDbC/tUSDbC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x68f0a05fdc8773d9a5fd1304ca411acc234ce22c",
            symbol: "tUSDbC",
            name: "Tetu V2 tUSDbC",
            decimals: 6,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xca5d8f8a8d49439357d3cf46ca2e720702f132b8",
            symbol: "GYD",
            name: "Gyro Dollar",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x0c659734f1eef9c63b7ebdf78a164cdd745586db",
            symbol: "USDC/USDbC/axlUSDC",
            name: "Balancer USDC/USDbC/axlUSDC",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x9e949461f9ec22c6032ce26ea509824fd2f6d98f",
            symbol: "KABOSUCHAN",
            name: "KABOSU",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xafb89a09d82fbde58f18ac6437b3fc81724e4df6",
            symbol: "DOG",
            name: "The Doge NFT",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xc63529297de076eb15fcbe873ae9136e446cfbb9",
            symbol: "GYFI",
            name: "Gyroscope",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0x15d9d108437b17d1fa70392f9ed086306229ec91",
            symbol: "SWEEP-USDC-BPT",
            name: "Balancer SWEEP-USDC StablePool",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
          {
            address: "0xb88a5ac00917a02d82c7cd6cebd73e2852d43574",
            symbol: "SWEEP",
            name: "SweepCoin",
            decimals: 18,
            protocols: [n.GP.BALANCER],
            buildingBlocks: [n.IM.FLASHLOAN],
          },
        ],
        L = [];
      var h = s(7837);
      let k = [
          {
            aToken: "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8",
            variableDebtToken: "0xeA51d7853EEFb32b6ee06b1C12E6dcCA88Be0fFE",
            symbol: "aEthWETH",
            decimals: 18,
            underlyingAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            underlyingSymbol: "WETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x0B925eD163218f6662a35e0f0371Ac234f9E9371",
            variableDebtToken: "0xC96113eED8cAB59cD8A66813bCB0cEb29F06D2e4",
            symbol: "aEthwstETH",
            decimals: 18,
            underlyingAddress: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
            underlyingSymbol: "wstETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8",
            variableDebtToken: "0x40aAbEf1aa8f0eEc637E0E7d92fbfFB2F26A8b7B",
            symbol: "aEthWBTC",
            decimals: 8,
            underlyingAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            underlyingSymbol: "WBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c",
            variableDebtToken: "0x72E95b8931767C79bA4EeE721354d6E99a61D004",
            symbol: "aEthUSDC",
            decimals: 6,
            underlyingAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            underlyingSymbol: "USDC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x018008bfb33d285247A21d44E50697654f754e63",
            variableDebtToken: "0xcF8d0c70c850859266f5C338b38F9D663181C314",
            symbol: "aEthDAI",
            decimals: 18,
            underlyingAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            underlyingSymbol: "DAI",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x5E8C8A7243651DB1384C0dDfDbE39761E8e7E51a",
            variableDebtToken: "0x4228F8895C7dDA20227F6a5c6751b8Ebf19a6ba8",
            symbol: "aEthLINK",
            decimals: 18,
            underlyingAddress: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
            underlyingSymbol: "LINK",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xA700b4eB416Be35b2911fd5Dee80678ff64fF6C9",
            variableDebtToken: "0xBae535520Abd9f8C85E58929e0006A2c8B372F74",
            symbol: "aEthAAVE",
            decimals: 18,
            underlyingAddress: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            underlyingSymbol: "AAVE",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x977b6fc5dE62598B08C85AC8Cf2b745874E8b78c",
            variableDebtToken: "0x0c91bcA95b5FE69164cE583A2ec9429A569798Ed",
            symbol: "aEthcbETH",
            decimals: 18,
            underlyingAddress: "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
            underlyingSymbol: "cbETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x23878914EFE38d27C4D67Ab83ed1b93A74D4086a",
            variableDebtToken: "0x6df1C1E379bC5a00a7b4C6e67A203333772f45A8",
            symbol: "aEthUSDT",
            decimals: 6,
            underlyingAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            underlyingSymbol: "USDT",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xCc9EE9483f662091a1de4795249E24aC0aC2630f",
            variableDebtToken: "0xae8593DD575FE29A9745056aA91C4b746eee62C8",
            symbol: "aEthrETH",
            decimals: 18,
            underlyingAddress: "0xae78736Cd615f374D3085123A210448E74Fc6393",
            underlyingSymbol: "rETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x3Fe6a295459FAe07DF8A0ceCC36F37160FE86AA9",
            variableDebtToken: "0x33652e48e4B74D18520f11BfE58Edd2ED2cEc5A2",
            symbol: "aEthLUSD",
            decimals: 18,
            underlyingAddress: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
            underlyingSymbol: "LUSD",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x7B95Ec873268a6BFC6427e7a28e396Db9D0ebc65",
            variableDebtToken: "0x1b7D3F4b3c032a5AE656e30eeA4e8E1Ba376068F",
            symbol: "aEthCRV",
            decimals: 18,
            underlyingAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
            underlyingSymbol: "CRV",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x8A458A9dc9048e005d22849F470891b840296619",
            variableDebtToken: "0x6Efc73E54E41b27d2134fF9f98F15550f30DF9B1",
            symbol: "aEthMKR",
            decimals: 18,
            underlyingAddress: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
            underlyingSymbol: "MKR",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xC7B4c17861357B8ABB91F25581E7263E08DCB59c",
            variableDebtToken: "0x8d0de040e8aAd872eC3c33A3776dE9152D3c34ca",
            symbol: "aEthSNX",
            decimals: 18,
            underlyingAddress: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
            underlyingSymbol: "SNX",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x2516E7B3F76294e03C42AA4c5b5b4DCE9C436fB8",
            variableDebtToken: "0x3D3efceb4Ff0966D34d9545D3A2fa2dcdBf451f2",
            symbol: "aEthBAL",
            decimals: 18,
            underlyingAddress: "0xba100000625a3754423978a60c9317c58a424e3D",
            underlyingSymbol: "BAL",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xF6D2224916DDFbbab6e6bd0D1B7034f4Ae0CaB18",
            variableDebtToken: "0xF64178Ebd2E2719F2B1233bCb5Ef6DB4bCc4d09a",
            symbol: "aEthUNI",
            decimals: 18,
            underlyingAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            underlyingSymbol: "UNI",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x9A44fd41566876A39655f74971a3A6eA0a17a454",
            variableDebtToken: "0xc30808705C01289A3D306ca9CAB081Ba9114eC82",
            symbol: "aEthLDO",
            decimals: 18,
            underlyingAddress: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
            underlyingSymbol: "LDO",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x545bD6c032eFdde65A377A6719DEF2796C8E0f2e",
            variableDebtToken: "0xd180D7fdD4092f07428eFE801E17BC03576b3192",
            symbol: "aEthENS",
            decimals: 18,
            underlyingAddress: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
            underlyingSymbol: "ENS",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x71Aef7b30728b9BB371578f36c5A1f1502a5723e",
            variableDebtToken: "0xA38fCa8c6Bf9BdA52E76EB78f08CaA3BE7c5A970",
            symbol: "aEth1INCH",
            decimals: 18,
            underlyingAddress: "0x111111111117dC0aa78b770fA6A738034120C302",
            underlyingSymbol: "1INCH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xd4e245848d6E1220DBE62e155d89fa327E43CB06",
            variableDebtToken: "0x88B8358F5BC87c2D7E116cCA5b65A9eEb2c5EA3F",
            symbol: "aEthFRAX",
            decimals: 18,
            underlyingAddress: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
            underlyingSymbol: "FRAX",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x00907f9921424583e7ffBfEdf84F92B7B2Be4977",
            variableDebtToken: "0x786dBff3f1292ae8F92ea68Cf93c30b34B1ed04B",
            symbol: "aEthGHO",
            decimals: 18,
            underlyingAddress: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
            underlyingSymbol: "GHO",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xB76CF92076adBF1D9C39294FA8e7A67579FDe357",
            variableDebtToken: "0x8988ECA19D502fd8b9CCd03fA3bD20a6f599bc2A",
            symbol: "aEthRPL",
            decimals: 18,
            underlyingAddress: "0xD33526068D116cE69F19A9ee46F0bd304F21A51f",
            underlyingSymbol: "RPL",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x4C612E3B15b96Ff9A6faED838F8d07d479a8dD4c",
            variableDebtToken: "0x8Db9D35e117d8b93C6Ca9b644b25BaD5d9908141",
            symbol: "aEthsDAI",
            decimals: 18,
            underlyingAddress: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
            underlyingSymbol: "sDAI",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x1bA9843bD4327c6c77011406dE5fA8749F7E3479",
            variableDebtToken: "0x655568bDd6168325EC7e58Bf39b21A856F906Dc2",
            symbol: "aEthSTG",
            decimals: 18,
            underlyingAddress: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
            underlyingSymbol: "STG",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x5b502e3796385E1e9755d7043B9C945C3aCCeC9C",
            variableDebtToken: "0x253127Ffc04981cEA8932F406710661c2f2c3fD2",
            symbol: "aEthKNC",
            decimals: 18,
            underlyingAddress: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
            underlyingSymbol: "KNC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x82F9c5ad306BBa1AD0De49bB5FA6F01bf61085ef",
            variableDebtToken: "0x68e9f0aD4e6f8F5DB70F6923d4d6d5b225B83b16",
            symbol: "aEthFXS",
            decimals: 18,
            underlyingAddress: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
            underlyingSymbol: "FXS",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xb82fa9f31612989525992FCfBB09AB22Eff5c85A",
            variableDebtToken: "0x028f7886F3e937f8479efaD64f31B3fE1119857a",
            symbol: "aEthcrvUSD",
            decimals: 18,
            underlyingAddress: "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
            underlyingSymbol: "crvUSD",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x0C0d01AbF3e6aDfcA0989eBbA9d6e85dD58EaB1E",
            variableDebtToken: "0x57B67e4DE077085Fd0AF2174e9c14871BE664546",
            symbol: "aEthPYUSD",
            decimals: 6,
            underlyingAddress: "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8",
            underlyingSymbol: "PYUSD",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xBdfa7b7893081B35Fb54027489e2Bc7A38275129",
            variableDebtToken: "0x77ad9BF13a52517AD698D65913e8D381300c8Bf3",
            symbol: "aEthweETH",
            decimals: 18,
            underlyingAddress: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
            underlyingSymbol: "weETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x927709711794F3De5DdBF1D176bEE2D55Ba13c21",
            variableDebtToken: "0x8838eefF2af391863E1Bb8b1dF563F86743a8470",
            symbol: "aEthosETH",
            decimals: 18,
            underlyingAddress: "0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38",
            underlyingSymbol: "osETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x4F5923Fc5FD4a93352581b38B7cD26943012DECF",
            variableDebtToken: "0x015396E1F286289aE23a762088E863b3ec465145",
            symbol: "aEthUSDe",
            decimals: 18,
            underlyingAddress: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
            underlyingSymbol: "USDe",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x1c0E06a0b1A4c160c17545FF2A951bfcA57C0002",
            variableDebtToken: "0x08a8Dc81AeA67F84745623aC6c72CDA3967aab8b",
            symbol: "aEthETHx",
            decimals: 18,
            underlyingAddress: "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
            underlyingSymbol: "ETHx",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x4579a27aF00A62C0EB156349f31B345c08386419",
            variableDebtToken: "0xeFFDE9BFA8EC77c14C364055a200746d6e12BeD6",
            symbol: "aEthsUSDe",
            decimals: 18,
            underlyingAddress: "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
            underlyingSymbol: "sUSDe",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x10Ac93971cdb1F5c778144084242374473c350Da",
            variableDebtToken: "0xAC50890a80A2731eb1eA2e9B4F29569CeB06D960",
            symbol: "aEthtBTC",
            decimals: 18,
            underlyingAddress: "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
            underlyingSymbol: "tBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x5c647cE0Ae10658ec44FA4E11A51c96e94efd1Dd",
            variableDebtToken: "0xeB284A70557EFe3591b9e6D9D720040E02c54a4d",
            symbol: "aEthcbBTC",
            decimals: 8,
            underlyingAddress: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
            underlyingSymbol: "cbBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x32a6268f9Ba3642Dda7892aDd74f1D34469A4259",
            variableDebtToken: "0x490E0E6255bF65b43E2e02F7acB783c5e04572Ff",
            symbol: "aEthUSDS",
            decimals: 18,
            underlyingAddress: "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
            underlyingSymbol: "USDS",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x2D62109243b87C4bA3EE7bA1D91B0dD0A074d7b1",
            variableDebtToken: "0x6De3E52A1B7294A34e271a508082b1Ff4a37E30e",
            symbol: "aEthrsETH",
            decimals: 18,
            underlyingAddress: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
            underlyingSymbol: "rsETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x65906988ADEe75306021C417a1A3458040239602",
            variableDebtToken: "0x68aeB290C7727D899B47c56d1c96AEAC475cD0dD",
            symbol: "aEthLBTC",
            decimals: 8,
            underlyingAddress: "0x8236a87084f8B84306f72007F36F2618A5634494",
            underlyingSymbol: "LBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x5fefd7069a7D91d01f269DADE14526CCF3487810",
            variableDebtToken: "0x47eD0509e64615c0d5C6d39AF1B38D02Bc9fE58f",
            symbol: "aEtheBTC",
            decimals: 8,
            underlyingAddress: "0x657e8C867D8B37dCC18fA4Caead9C45EB088C642",
            underlyingSymbol: "eBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xFa82580c16A31D0c1bC632A36F82e83EfEF3Eec0",
            variableDebtToken: "0xBdFe7aD7976d5d7E0965ea83a81Ca1bCfF7e84a9",
            symbol: "aEthRLUSD",
            decimals: 18,
            underlyingAddress: "0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD",
            underlyingSymbol: "RLUSD",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x4B0821e768Ed9039a70eD1E80E15E76a5bE5Df5F",
            variableDebtToken: "0x3c20fbFD32243Dd9899301C84bCe17413EeE0A0C",
            symbol: "aEthPT_eUSDE_29MAY2025",
            decimals: 18,
            underlyingAddress: "0x50D2C7992b802Eef16c04FeADAB310f31866a545",
            underlyingSymbol: "PT-eUSDE-29MAY2025",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xDE6eF6CB4aBd3A473ffC2942eEf5D84536F8E864",
            variableDebtToken: "0x8C6FeaF5d58BA1A6541F9c4aF685f62bFCBaC3b1",
            symbol: "aEthPT_sUSDE_31JUL2025",
            decimals: 18,
            underlyingAddress: "0x3b3fB9C57858EF816833dC91565EFcd85D96f634",
            underlyingSymbol: "PT-sUSDE-31JUL2025",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xEc4ef66D4fCeEba34aBB4dE69dB391Bc5476ccc8",
            variableDebtToken: "0xeA85a065F87FE28Aa8Fbf0D6C7deC472b106252C",
            symbol: "aEthUSDtb",
            decimals: 18,
            underlyingAddress: "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
            underlyingSymbol: "USDtb",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x312ffC57778CEfa11989733e6E08143E7E229c1c",
            variableDebtToken: "0xd90DA2Df915B87fE1621A7F2201FbF4ff2cCA031",
            symbol: "aEthPT_USDe_31JUL2025",
            decimals: 18,
            underlyingAddress: "0x917459337CaAC939D41d7493B3999f571D20D667",
            underlyingSymbol: "PT-USDe-31JUL2025",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x2eDff5AF94334fBd7C38ae318edf1c40e072b73B",
            variableDebtToken: "0x22517fE16DEd08e52E7EA3423A2EA4995b1f1731",
            symbol: "aEthPT_eUSDe_14AUG2025",
            decimals: 18,
            underlyingAddress: "0x14Bdc3A3AE09f5518b923b69489CBcAfB238e617",
            underlyingSymbol: "PT-eUSDE-14AUG2025",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x5F9190496e0DFC831C3bd307978de4a245E2F5cD",
            variableDebtToken: "0x48351fCc9536dA440AE9471220F6dC921b0eB703",
            symbol: "aEtheUSDe",
            decimals: 18,
            underlyingAddress: "0x90D2af7d622ca3141efA4d8f1F24d86E5974Cc8F",
            underlyingSymbol: "eUSDe",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xcCA43ceF272c30415866914351fdfc3E881bb7c2",
            variableDebtToken: "0x4A35FD7F93324Cc48bc12190D3F37493437b1Eff",
            symbol: "aEthFBTC",
            decimals: 8,
            underlyingAddress: "0xC96dE26018A54D51c097160568752c4E3BD6C364",
            underlyingSymbol: "FBTC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xAA6e91C82942aeAE040303Bf96c15a6dBcB82CA0",
            variableDebtToken: "0x6c82c66622Eb360FC973D3F492f9D8E9eA538b08",
            symbol: "aEthEURC",
            decimals: 6,
            underlyingAddress: "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
            underlyingSymbol: "EURC",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x5f4a0873a3A02f7C0CB0e13a1d4362a1AD90e751",
            variableDebtToken: "0xc9AD8Dd111e6384128146467aAf92B81EC422848",
            symbol: "aEthPT_sUSDE_25SEP2025",
            decimals: 18,
            underlyingAddress: "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77",
            underlyingSymbol: "PT-sUSDE-25SEP2025",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x38A5357Ce55c81add62aBc84Fb32981e2626ADEf",
            variableDebtToken: "0x0D8486E1CAbf3C9407B3DdA0cfc4d9C3101fB683",
            symbol: "aEthPT_USDe_25SEP2025",
            decimals: 18,
            underlyingAddress: "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a",
            underlyingSymbol: "PT-USDe-25SEP2025",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x481a2acf3A72ffDc602A9541896Ca1DB87f86cf7",
            variableDebtToken: "0x7EC9Afe70f8FD603282eBAcbc9058A83623E2899",
            symbol: "aEthtETH",
            decimals: 18,
            underlyingAddress: "0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8",
            underlyingSymbol: "tETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x4E2a4d9B3DF7Aae73b418Bd39F3af9e148E3F479",
            variableDebtToken: "0x730318dB7b830d324fC3fEDDB1d212Ec64bD3141",
            symbol: "aEthezETH",
            decimals: 18,
            underlyingAddress: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
            underlyingSymbol: "ezETH",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x8A2b6f94Ff3A89a03E8c02Ee92b55aF90c9454A2",
            variableDebtToken: "0xa665bB258D2a732C170dFD505924214c0b1AC74F",
            symbol: "aEthXAUt",
            decimals: 6,
            underlyingAddress: "0x68749665FF8D2d112Fa859AA293F07A622782F38",
            underlyingSymbol: "XAUt",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x285866acB0d60105B4Ed350a463361c2d9afA0E2",
            variableDebtToken: "0x690Df181701C11C53EA33bBF303C25834b66bD14",
            symbol: "aEthPT_sUSDe_27NOV2025",
            decimals: 18,
            underlyingAddress: "0xe6A934089BBEe34F832060CE98848359883749B3",
            underlyingSymbol: "PT-sUSDE-27NOV2025",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x38C503a438185cDE29b5cF4dC1442FD6F074F1cc",
            variableDebtToken: "0x2CE7e7b238985A8aD3863De03F200B245B0c1216",
            symbol: "aEthPT_USDe_27NOV2025",
            decimals: 18,
            underlyingAddress: "0x62C6E813b9589C3631Ba0Cdb013acdB8544038B7",
            underlyingSymbol: "PT-USDe-27NOV2025",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xE728577e9a1Fe7032bc309B4541F58f45443866e",
            variableDebtToken: "0x9D244A99801dc05cbC04183769c17056B8A1Ad53",
            symbol: "aEthPT_USDE_5FEB_2026",
            decimals: 18,
            underlyingAddress: "0x1F84a51296691320478c98b8d77f2Bbd17D34350",
            underlyingSymbol: "PT-USDe-5FEB2026",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xbe54767735fB7Acca2aa7E2d209a6f705073536D",
            variableDebtToken: "0xA803414f84fCEF00e745bE7CC2A315908927f15D",
            symbol: "aEthPT_sUSDe_5FEB_2026",
            decimals: 18,
            underlyingAddress: "0xE8483517077afa11A9B07f849cee2552f040d7b2",
            underlyingSymbol: "PT-sUSDE-5FEB2026",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xAa0200d169fF3ba9385c12E073c5d1d30434AE7b",
            variableDebtToken: "0xE35e6A0D3AbC28289f5d4C2d262a133Df936b98D",
            symbol: "aEthmUSD",
            decimals: 6,
            underlyingAddress: "0xacA92E438df0B2401fF60dA7E4337B687a2435DA",
            underlyingSymbol: "mUSD",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x24Ab03a9a5Bc2C49E5523e8d915A3536ac38B91D",
            variableDebtToken: "0xAEf73b04654931B94920a3D7AE62032b79fB6d0c",
            symbol: "aEthsyrupUSDT",
            decimals: 6,
            underlyingAddress: "0x356B8d89c1e1239Cbbb9dE4815c39A1474d5BA7D",
            underlyingSymbol: "syrupUSDT",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x7c0477d085ECb607CF8429f3eC91Ae5E1e460F4F",
            variableDebtToken: "0x4f97B950a30321c181E974971E156E19fAD184A3",
            symbol: "aEthUSDG",
            decimals: 6,
            underlyingAddress: "0xe343167631d89B6Ffc58B88d6b7fB0228795491D",
            underlyingSymbol: "USDG",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0xE036478Da9A7ed89b56FE39A06e1FC1a4b38D4Ea",
            variableDebtToken: "0x04142fc546D59838852873bba5C8827601A13FC8",
            symbol: "aEthPT_USDe_7MAY2026",
            decimals: 18,
            underlyingAddress: "0xAeBf0Bb9f57E89260d57f31AF34eB58657d96Ce0",
            underlyingSymbol: "PT-USDe-7MAY2026",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x81b76ff3FeD28BA0B4a5D4c76Bd5C13Bd0641d86",
            variableDebtToken: "0x762Edb8D79b97487F82093f85059e42EeEf61E9e",
            symbol: "aEthPT_sUSDe_7MAY2026",
            decimals: 18,
            underlyingAddress: "0x3de0ff76E8b528C092d47b9DaC775931cef80F49",
            underlyingSymbol: "PT-sUSDE-7MAY2026",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
          {
            aToken: "0x1241ec22C9BdF16BA1Eb636F2a8de7e28A4343Cf",
            variableDebtToken: "0xacD3d3FaCeA0424984F662827B988f4581a3cE31",
            symbol: "aEthPT_srUSDe_2APR2026",
            decimals: 18,
            underlyingAddress: "0x9Bf45ab47747F4B4dD09B3C2c73953484b4eB375",
            underlyingSymbol: "PT-srUSDe-2APR2026",
            protocols: [n.GP.AAVE],
            buildingBlocks: [n.IM.LEND, n.IM.BORROW, n.IM.WITHDRAW, n.IM.REPAY],
          },
        ],
        O = [
          {
            baseAssetAddress: "0xc3d688B66703497DAA19211EEdff47f25384cdc3",
            symbol: "cUSDCv3",
            decimals: 6,
            underlyingAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            underlyingSymbol: "USDC",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
                name: "Compound",
                symbol: "COMP",
                decimals: 18,
              },
              {
                address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                name: "Wrapped BTC",
                symbol: "WBTC",
                decimals: 8,
              },
              {
                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
              {
                address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
                name: "Uniswap",
                symbol: "UNI",
                decimals: 18,
              },
              {
                address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
                name: "ChainLink Token",
                symbol: "LINK",
                decimals: 18,
              },
              {
                address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
                name: "Wrapped liquid staked Ether 2.0",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
                name: "Coinbase Wrapped BTC",
                symbol: "cbBTC",
                decimals: 8,
              },
              {
                address: "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
                name: "tBTC v2",
                symbol: "tBTC",
                decimals: 18,
              },
              {
                address: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
                name: "Wrapped eETH",
                symbol: "weETH",
                decimals: 18,
              },
              {
                address: "0x15700B564Ca08D9439C58cA5053166E8317aa138",
                name: "deUSD",
                symbol: "deUSD",
                decimals: 18,
              },
              {
                address: "0x5C5b196aBE0d54485975D1Ec29617D42D9198326",
                name: "Staked deUSD",
                symbol: "sdeUSD",
                decimals: 18,
              },
              {
                address: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
                name: "rsETH",
                symbol: "rsETH",
                decimals: 18,
              },
              {
                address: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
                name: "USDe",
                symbol: "USDe",
                decimals: 18,
              },
            ],
          },
          {
            baseAssetAddress: "0xA17581A9E3356d9A858b789D68B4d866e593aE94",
            symbol: "cWETHv3",
            decimals: 18,
            underlyingAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            underlyingSymbol: "WETH",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
                name: "Coinbase Wrapped Staked ETH",
                symbol: "cbETH",
                decimals: 18,
              },
              {
                address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
                name: "Wrapped liquid staked Ether 2.0",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
                name: "Rocket Pool ETH",
                symbol: "rETH",
                decimals: 18,
              },
              {
                address: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
                name: "rsETH",
                symbol: "rsETH",
                decimals: 18,
              },
              {
                address: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
                name: "Wrapped eETH",
                symbol: "weETH",
                decimals: 18,
              },
              {
                address: "0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38",
                name: "Staked ETH",
                symbol: "osETH",
                decimals: 18,
              },
              {
                address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                name: "Wrapped BTC",
                symbol: "WBTC",
                decimals: 8,
              },
              {
                address: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                name: "Renzo Restaked ETH",
                symbol: "ezETH",
                decimals: 18,
              },
              {
                address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
                name: "Coinbase Wrapped BTC",
                symbol: "cbBTC",
                decimals: 8,
              },
              {
                address: "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
                name: "rswETH",
                symbol: "rswETH",
                decimals: 18,
              },
              {
                address: "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
                name: "tBTC v2",
                symbol: "tBTC",
                decimals: 18,
              },
              {
                address: "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
                name: "ETHx",
                symbol: "ETHx",
                decimals: 18,
              },
              {
                address: "0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8",
                name: "Treehouse ETH",
                symbol: "tETH",
                decimals: 18,
              },
              {
                address: "0xD9A442856C234a39a81a089C06451EBAa4306a72",
                name: "pufETH",
                symbol: "pufETH",
                decimals: 18,
              },
              {
                address: "0xDcEe70654261AF21C44c093C300eD3Bb97b78192",
                name: "Wrapped OETH",
                symbol: "wOETH",
                decimals: 18,
              },
              {
                address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                name: "USD Coin",
                symbol: "USDC",
                decimals: 6,
              },
              {
                address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                name: "Tether USD",
                symbol: "USDT",
                decimals: 6,
              },
            ],
          },
          {
            baseAssetAddress: "0x3Afdc9BCA9213A35503b077a6072F3D0d5AB0840",
            symbol: "cUSDTv3",
            decimals: 6,
            underlyingAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            underlyingSymbol: "USDT",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
                name: "Compound",
                symbol: "COMP",
                decimals: 18,
              },
              {
                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
              {
                address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                name: "Wrapped BTC",
                symbol: "WBTC",
                decimals: 8,
              },
              {
                address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
                name: "Uniswap",
                symbol: "UNI",
                decimals: 18,
              },
              {
                address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
                name: "ChainLink Token",
                symbol: "LINK",
                decimals: 18,
              },
              {
                address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
                name: "Wrapped liquid staked Ether 2.0",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
                name: "Coinbase Wrapped BTC",
                symbol: "cbBTC",
                decimals: 8,
              },
              {
                address: "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
                name: "tBTC v2",
                symbol: "tBTC",
                decimals: 18,
              },
              {
                address: "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812",
                name: "Wrapped Mountain Protocol USD",
                symbol: "wUSDM",
                decimals: 18,
              },
              {
                address: "0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32",
                name: "Staked FRAX",
                symbol: "sFRAX",
                decimals: 18,
              },
              {
                address: "0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa",
                name: "mETH",
                symbol: "mETH",
                decimals: 18,
              },
              {
                address: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
                name: "Wrapped eETH",
                symbol: "weETH",
                decimals: 18,
              },
              {
                address: "0x5C5b196aBE0d54485975D1Ec29617D42D9198326",
                name: "Staked deUSD",
                symbol: "sdeUSD",
                decimals: 18,
              },
              {
                address: "0x15700B564Ca08D9439C58cA5053166E8317aa138",
                name: "deUSD",
                symbol: "deUSD",
                decimals: 18,
              },
              {
                address: "0x68749665FF8D2d112Fa859AA293F07A622782F38",
                name: "Tether Gold",
                symbol: "XAUt",
                decimals: 6,
              },
              {
                address: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
                name: "USDe",
                symbol: "USDe",
                decimals: 18,
              },
            ],
          },
          {
            baseAssetAddress: "0x3D0bb1ccaB520A66e607822fC55BC921738fAFE3",
            symbol: "cwstETHv3",
            decimals: 18,
            underlyingAddress: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
            underlyingSymbol: "wstETH",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
                name: "rsETH",
                symbol: "rsETH",
                decimals: 18,
              },
              {
                address: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
                name: "Renzo Restaked ETH",
                symbol: "ezETH",
                decimals: 18,
              },
              {
                address: "0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8",
                name: "Treehouse ETH",
                symbol: "tETH",
                decimals: 18,
              },
              {
                address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                name: "USD Coin",
                symbol: "USDC",
                decimals: 6,
              },
              {
                address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                name: "Tether USD",
                symbol: "USDT",
                decimals: 6,
              },
              {
                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
              {
                address: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
                name: "Wrapped eETH",
                symbol: "weETH",
                decimals: 18,
              },
            ],
          },
          {
            baseAssetAddress: "0x5D409e56D886231aDAf00c8775665AD0f9897b56",
            symbol: "cUSDSv3",
            decimals: 18,
            underlyingAddress: "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
            underlyingSymbol: "USDS",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                name: "Wrapped Ether",
                symbol: "WETH",
                decimals: 18,
              },
              {
                address: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
                name: "USDe",
                symbol: "USDe",
                decimals: 18,
              },
              {
                address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
                name: "Coinbase Wrapped BTC",
                symbol: "cbBTC",
                decimals: 8,
              },
              {
                address: "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
                name: "tBTC v2",
                symbol: "tBTC",
                decimals: 18,
              },
              {
                address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
                name: "Wrapped liquid staked Ether 2.0",
                symbol: "wstETH",
                decimals: 18,
              },
              {
                address: "0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD",
                name: "Savings USDS",
                symbol: "sUSDS",
                decimals: 18,
              },
              {
                address: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
                name: "Wrapped eETH",
                symbol: "weETH",
                decimals: 18,
              },
              {
                address: "0x56072C95FAA701256059aa122697B133aDEd9279",
                name: "SKY Governance Token",
                symbol: "SKY",
                decimals: 18,
              },
              {
                address: "0x15700B564Ca08D9439C58cA5053166E8317aa138",
                name: "deUSD",
                symbol: "deUSD",
                decimals: 18,
              },
              {
                address: "0x5C5b196aBE0d54485975D1Ec29617D42D9198326",
                name: "Staked deUSD",
                symbol: "sdeUSD",
                decimals: 18,
              },
            ],
          },
          {
            baseAssetAddress: "0xe85Dc543813B8c2CFEaAc371517b925a166a9293",
            symbol: "cWBTCv3",
            decimals: 8,
            underlyingAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            underlyingSymbol: "WBTC",
            protocols: [n.GP.COMPOUND],
            buildingBlocks: [
              n.IM.BORROW,
              n.IM.REPAY,
              n.IM.LEND,
              n.IM.WITHDRAW,
              n.IM.CLAIM_REWARDS,
            ],
            collateralTokens: [
              {
                address: "0x8236a87084f8B84306f72007F36F2618A5634494",
                name: "Lombard Staked Bitcoin",
                symbol: "LBTC",
                decimals: 8,
              },
              {
                address: "0xF469fBD2abcd6B9de8E169d128226C0Fc90a012e",
                name: "pumpBTC",
                symbol: "pumpBTC",
                decimals: 8,
              },
              {
                address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                name: "USD Coin",
                symbol: "USDC",
                decimals: 6,
              },
              {
                address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                name: "Tether USD",
                symbol: "USDT",
                decimals: 6,
              },
            ],
          },
        ];
      var U = s(5564);
      class F {
        chainId;
        generalTokens;
        proVaultsTokens;
        protocols;
        buildingBlocks;
        availableProVaultsTokens;
        availableGeneralTokens;
        availablePendleTokens;
        availableAaveTokens;
        availableCompoundTokens;
        availableSiloTokens;
        availableMorphoTokens;
        availableSiloV2Tokens;
        availableBalancerTokens;
        availableEulerTokens;
        Aave;
        PendleTokens;
        SiloTokens;
        BalancerTokens;
        CompoundTokens;
        MorphoTokens;
        SiloV2Tokens;
        EulerTokens;
        constructor(e) {
          (this.chainId = e),
            (this.generalTokens = new Map()),
            (this.availableGeneralTokens = {
              arbitrum: l.L,
              optimism: b.L,
              base: D.L,
              sonic: S,
              ethereum: h.L,
            }),
            (this.availablePendleTokens = {
              arbitrum: d,
              optimism: E,
              base: T,
            }),
            (this.availableAaveTokens = {
              arbitrum: t,
              optimism: f,
              base: A,
              sonic: x,
              ethereum: k,
            }),
            (this.availableCompoundTokens = {
              arbitrum: o,
              optimism: m,
              base: I,
              ethereum: O,
            }),
            (this.availableSiloTokens = {
              arbitrum: c.L,
              optimism: u,
              base: p,
            }),
            (this.availableMorphoTokens = {
              arbitrum: P,
              optimism: C,
              base: y,
              ethereum: U.L,
            }),
            (this.availableSiloV2Tokens = { sonic: B }),
            (this.availableBalancerTokens = {
              arbitrum: M,
              optimism: R,
              base: g,
              sonic: L,
            }),
            (this.availableEulerTokens = { arbitrum: r }),
            (this.protocols = []),
            (this.buildingBlocks = []),
            this.initializeTokens(e);
        }
        initializeTokens(e) {
          let a = n.gr[e];
          if (!(a in this.availableGeneralTokens))
            throw Error(`No tokens available for network ${a}`);
          for (let e of this.availableGeneralTokens[a])
            if (!this.generalTokens.has(e.address.toLowerCase())) {
              for (let a of (this.generalTokens.set(e.address.toLowerCase(), e),
              e.protocols))
                this.protocols.includes(a) || this.protocols.push(a);
              for (let a of e.buildingBlocks)
                this.buildingBlocks.includes(a) || this.buildingBlocks.push(a);
            }
          (this.PendleTokens = this.availablePendleTokens[a] ?? []),
            this.PendleTokens.length > 0 && this.protocols.push(n.GP.PENDLE),
            (this.Aave = this.availableAaveTokens[a] ?? []),
            this.Aave.length > 0 && this.protocols.push(n.GP.AAVE),
            (this.CompoundTokens = this.availableCompoundTokens[a] ?? []),
            this.CompoundTokens.length > 0 &&
              this.protocols.push(n.GP.COMPOUND),
            (this.SiloTokens = this.availableSiloTokens[a] ?? []),
            this.SiloTokens.length > 0 && this.protocols.push(n.GP.SILO),
            (this.SiloV2Tokens = this.availableSiloV2Tokens[a] ?? []),
            this.SiloV2Tokens.length > 0 && this.protocols.push(n.GP.SILO_V2),
            (this.MorphoTokens = this.availableMorphoTokens[a] ?? []),
            this.MorphoTokens.length > 0 && this.protocols.push(n.GP.MORPHO),
            (this.BalancerTokens = this.availableBalancerTokens[a] ?? []),
            this.BalancerTokens.length > 0 &&
              this.protocols.push(n.GP.BALANCER),
            (this.EulerTokens = this.availableEulerTokens[a] ?? []),
            this.EulerTokens.length > 0 && this.protocols.push(n.GP.EULER);
        }
        async initializeProVaultsTokens() {
          let e = n.gr[this.chainId],
            a = await i;
          if (
            ((this.availableProVaultsTokens = { arbitrum: a }),
            (this.proVaultsTokens = this.availableProVaultsTokens[e] ?? []),
            this.proVaultsTokens.length > 0)
          )
            for (let e of this.proVaultsTokens) {
              for (let a of (this.generalTokens.set(e.address.toLowerCase(), e),
              e.protocols))
                this.protocols.includes(a) || this.protocols.push(a);
              for (let a of e.buildingBlocks)
                this.buildingBlocks.includes(a) || this.buildingBlocks.push(a);
            }
        }
        getAllGeneralTokens() {
          return Array.from(this.generalTokens.values());
        }
        getAllPendleTokens() {
          return this.PendleTokens;
        }
        getAllAaveTokens() {
          return this.Aave;
        }
        getAllCompoundTokens() {
          return this.CompoundTokens;
        }
        getAllSiloTokens() {
          return this.SiloTokens;
        }
        getSiloToken(e) {
          let a = this.SiloTokens.find(
            (a) => a.marketAddress.toLowerCase() === e.toLowerCase()
          );
          if (!a) throw Error(`Silo market with address ${e} not found`);
          return a;
        }
        getAllSiloV2Tokens() {
          return this.SiloV2Tokens;
        }
        getSiloV2Token(e) {
          let a = this.SiloV2Tokens.find(
            (a) => a.marketAddress.toLowerCase() === e.toLowerCase()
          );
          if (!a)
            throw Error(`Silo v2 token with market address ${e} not found`);
          return a;
        }
        getAllEulerTokens() {
          return this.EulerTokens;
        }
        getAllMorphoTokens() {
          return this.MorphoTokens;
        }
        getMorphoToken(e) {
          let a = this.MorphoTokens.find(
            (a) => a.id.toLowerCase() === e.toLowerCase()
          );
          if (!a) throw Error(`Morpho token with id ${e} not found`);
          return a;
        }
        getBalancerToken(e) {
          let a = this.BalancerTokens.find(
            (a) => a.address.toLowerCase() === e.toLowerCase()
          );
          if (!a) throw Error(`Balancer token with address ${e} not found`);
          return a;
        }
        getAllBalancerTokens() {
          return this.BalancerTokens;
        }
        getEulerToken(e) {
          let a = this.EulerTokens.find(
            (a) => a.address.toLowerCase() === e.toLowerCase()
          );
          if (!a) throw Error(`Euler token with address ${e} not found`);
          return a;
        }
        getCompoundToken(e) {
          let a = this.CompoundTokens.find(
            (a) => a.baseAssetAddress.toLowerCase() === e.toLowerCase()
          );
          if (!a)
            throw Error(
              `Compound token with base asset address ${e} not found`
            );
          return a;
        }
        getPendleToken(e) {
          let a = this.PendleTokens.find(
            (a) => a.address.toLowerCase() === e.toLowerCase()
          );
          if (!a)
            throw Error(`Pendle token with market address ${e} not found`);
          return a;
        }
        getAllProVaultsTokens() {
          return this.proVaultsTokens;
        }
        getTokensByProtocol(e) {
          return e === n.GP.PENDLE
            ? this.PendleTokens
            : e === n.GP.SILO
            ? this.SiloTokens
            : e === n.GP.AAVE
            ? this.Aave
            : e === n.GP.COMPOUND
            ? this.CompoundTokens
            : e === n.GP.MORPHO
            ? this.MorphoTokens
            : e === n.GP.BALANCER
            ? this.BalancerTokens
            : e === n.GP.EULER
            ? this.EulerTokens
            : Array.from(this.generalTokens.values())
                .filter((a) => a.protocols.includes(e))
                .map((a) => ({
                  ...a,
                  protocols: [e],
                  buildingBlocks: a.buildingBlocks.filter((a) =>
                    n.a[a]?.includes(e)
                  ),
                }));
        }
        getTokensByBuildingBlock(e) {
          let a = Array.from(this.generalTokens.values()).filter((a) =>
              a.buildingBlocks.includes(e)
            ),
            s = this.Aave.filter((a) => a.buildingBlocks.includes(e)),
            l = this.PendleTokens.filter((a) => a.buildingBlocks.includes(e)),
            d = this.SiloTokens.filter((a) => a.buildingBlocks.includes(e)),
            t = this.CompoundTokens.filter((a) => a.buildingBlocks.includes(e)),
            o = this.MorphoTokens.filter((a) => a.buildingBlocks.includes(e));
          return [
            ...a,
            ...s,
            ...l,
            ...d,
            ...t,
            ...this.BalancerTokens.filter((a) => a.buildingBlocks.includes(e)),
            ...o,
            ...this.EulerTokens.filter((a) => a.buildingBlocks.includes(e)),
          ].map((a) => ({
            ...a,
            buildingBlocks: [e],
            protocols: a.protocols.filter((a) => n.a[e]?.includes(a)),
          }));
        }
        getTokenFromSymbol(e) {
          let a = Array.from(this.generalTokens.values()).find(
            (a) => a.symbol === e
          );
          if (!a) throw Error(`Token with symbol ${e} not found`);
          return a;
        }
        getToken(e) {
          let a = this.generalTokens.get(e.toLowerCase()),
            s = this.PendleTokens.find(
              (a) => a.address.toLowerCase() === e.toLowerCase()
            ),
            l = this.SiloTokens.find(
              (a) => a.marketAddress.toLowerCase() === e.toLowerCase()
            ),
            n = this.MorphoTokens.find(
              (a) => a.collateralAsset.address.toLowerCase() === e.toLowerCase()
            ),
            d = this.BalancerTokens.find(
              (a) => a.address.toLowerCase() === e.toLowerCase()
            ),
            t = this.SiloV2Tokens.find(
              (a) => a.marketAddress.toLowerCase() === e.toLowerCase()
            ),
            o = this.CompoundTokens.find(
              (a) => a.baseAssetAddress.toLowerCase() === e.toLowerCase()
            ),
            c = this.Aave.find(
              (a) => a.aToken.toLowerCase() === e.toLowerCase()
            ),
            i = this.EulerTokens.find(
              (a) => a.address.toLowerCase() === e.toLowerCase()
            );
          if (a) return a;
          if (s) return s;
          if (l) return l;
          if (n) return n;
          if (d) return d;
          else if (t) return t;
          else if (o) return o;
          else if (c) return c;
          else if (i) return i;
          throw Error(`Token with address ${e} not found`);
        }
        getTokens(e) {
          let a = [];
          for (let s of e) {
            let e = this.generalTokens.get(s);
            e && a.push(e);
          }
          return a;
        }
        getDebtToken(e, a) {
          let s;
          if (
            a !== n.GP.AAVE &&
            a !== n.GP.SILO &&
            a !== n.GP.COMPOUND &&
            a !== n.GP.MORPHO &&
            a !== n.GP.EULER
          )
            throw Error(`Protocol ${a} is not supported`);
          if (
            (a === n.GP.AAVE
              ? (s = this.Aave.find(
                  (a) => a.underlyingAddress.toLowerCase() === e.toLowerCase()
                ))
              : a === n.GP.COMPOUND
              ? (s = this.CompoundTokens.find(
                  (a) => a.underlyingAddress.toLowerCase() === e.toLowerCase()
                ))
              : a === n.GP.MORPHO
              ? (s = this.MorphoTokens.find(
                  (a) =>
                    a.collateralAsset.address.toLowerCase() === e.toLowerCase()
                ))
              : a === n.GP.EULER &&
                (s = this.EulerTokens.find(
                  (a) => a.asset.toLowerCase() === e.toLowerCase()
                )),
            !s)
          )
            throw Error(`Debt token with address ${e} not found`);
          return s;
        }
        getUnderlyingAsset(e) {
          let a, s;
          if (
            ((a = this.Aave.find(
              (a) => a.aToken.toLowerCase() === e.toLowerCase()
            )?.underlyingAddress) && (s = n.GP.AAVE),
            !a &&
              (a = this.CompoundTokens.find(
                (a) => a.baseAssetAddress.toLowerCase() === e.toLowerCase()
              )?.underlyingAddress) &&
              (s = n.GP.COMPOUND),
            !a &&
              (a = this.PendleTokens.find(
                (a) => a.address.toLowerCase() === e.toLowerCase()
              )?.underlyingAsset.address) &&
              (s = n.GP.PENDLE),
            !a &&
              (a = this.MorphoTokens.find(
                (a) =>
                  a.collateralAsset.address.toLowerCase() === e.toLowerCase()
              )?.loanAsset.address) &&
              (s = n.GP.MORPHO),
            !a &&
              (a = this.EulerTokens.find(
                (a) =>
                  a.address.toLowerCase() === e.toLowerCase() ||
                  a.dToken.toLowerCase() === e.toLowerCase()
              )?.asset) &&
              (s = n.GP.EULER),
            !a)
          )
            throw Error(`Underlying asset with address ${e} not found`);
          return { underlyingAsset: a, protocol: s };
        }
        getMainAsset(e) {
          let a = [
            ...this.availableAaveTokens[n.gr[this.chainId]],
            ...this.availablePendleTokens[n.gr[this.chainId]],
            ...this.availableSiloTokens[n.gr[this.chainId]],
            ...this.availableMorphoTokens[n.gr[this.chainId]],
            ...this.availableEulerTokens[n.gr[this.chainId]],
          ].find((a) =>
            "variableDebtToken" in a
              ? a.variableDebtToken.toLowerCase() === e.toLowerCase()
              : "pt" in a
              ? a.pt.address.toLowerCase() === e.toLowerCase() ||
                a.yt.address.toLowerCase() === e.toLowerCase()
              : "marketAddress" in a
              ? a.asset.find(
                  (a) =>
                    a.debtToken.address.toLowerCase() === e.toLowerCase() ||
                    a.collateralToken.address.toLowerCase() ===
                      e.toLowerCase() ||
                    a.collateralOnlyToken.address.toLowerCase() ===
                      e.toLowerCase() ||
                    a.collateralToken.address.toLowerCase() === e.toLowerCase()
                )
              : "loanAsset" in a
              ? a.loanAsset.address.toLowerCase() === e.toLowerCase()
              : "asset" in a
              ? a.asset.toLowerCase() === e.toLowerCase()
              : void 0
          );
          if (!a) throw Error(`Token with address ${e} not found`);
          return a;
        }
      }
    },
    1147: (e, a, s) => {
      s.d(a, { B: () => d });
      var l = s(4964),
        n = s(6299);
      let d = {
        partial: !0,
        tokenize: function (e, a, s) {
          return function (a) {
            return (0, n.On)(a) ? (0, l.N)(e, d, "linePrefix")(a) : d(a);
          };
          function d(e) {
            return null === e || (0, n.HP)(e) ? a(e) : s(e);
          }
        },
      };
    },
    1158: function (e, a, s) {
      var l =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function (e, a) {
          let s = null;
          if (!e || "string" != typeof e) return s;
          let l = (0, n.default)(e),
            d = "function" == typeof a;
          return (
            l.forEach((e) => {
              if ("declaration" !== e.type) return;
              let { property: l, value: n } = e;
              d ? a(l, n, e) : n && ((s = s || {})[l] = n);
            }),
            s
          );
        });
      let n = l(s(525));
    },
    2233: (e, a, s) => {
      s.d(a, { A: () => l });
      let l = (0, s(809).A)("MessagesSquare", [
        [
          "path",
          {
            d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",
            key: "p1xzt8",
          },
        ],
        [
          "path",
          {
            d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",
            key: "1cx29u",
          },
        ],
      ]);
    },
    2257: (e, a) => {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.camelCase = void 0);
      var s = /^--[a-zA-Z0-9_-]+$/,
        l = /-([a-z])/g,
        n = /^[^-]+$/,
        d = /^-(webkit|moz|ms|o|khtml)-/,
        t = /^-(ms)-/,
        o = function (e, a) {
          return a.toUpperCase();
        },
        c = function (e, a) {
          return "".concat(a, "-");
        };
      a.camelCase = function (e, a) {
        var i;
        return (void 0 === a && (a = {}), !(i = e) || n.test(i) || s.test(i))
          ? e
          : ((e = e.toLowerCase()),
            (e = a.reactCompat ? e.replace(t, c) : e.replace(d, c)).replace(
              l,
              o
            ));
      };
    },
    2521: (e, a, s) => {
      s.d(a, { A: () => l });
      let l = (0, s(809).A)("Send", [
        [
          "path",
          {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3",
          },
        ],
        ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
      ]);
    },
    3389: (e, a, s) => {
      s.d(a, { d: () => n });
      let l = {};
      function n(e, a) {
        let s = a || l;
        return d(
          e,
          "boolean" != typeof s.includeImageAlt || s.includeImageAlt,
          "boolean" != typeof s.includeHtml || s.includeHtml
        );
      }
      function d(e, a, s) {
        var l;
        if ((l = e) && "object" == typeof l) {
          if ("value" in e) return "html" !== e.type || s ? e.value : "";
          if (a && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return t(e.children, a, s);
        }
        return Array.isArray(e) ? t(e, a, s) : "";
      }
      function t(e, a, s) {
        let l = [],
          n = -1;
        for (; ++n < e.length; ) l[n] = d(e[n], a, s);
        return l.join("");
      }
    },
    3700: (e, a, s) => {
      s.d(a, { A: () => l });
      let l = (0, s(809).A)("Bot", [
        ["path", { d: "M12 8V4H8", key: "hb8ula" }],
        [
          "rect",
          { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
        ],
        ["path", { d: "M2 14h2", key: "vft8re" }],
        ["path", { d: "M20 14h2", key: "4cs60a" }],
        ["path", { d: "M15 13v2", key: "1xurst" }],
        ["path", { d: "M9 13v2", key: "rq6x2g" }],
      ]);
    },
    4079: (e, a, s) => {
      s.d(a, { A: () => l });
      let l = (0, s(809).A)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    4361: (e, a, s) => {
      s.d(a, { dc: () => d, VG: () => t });
      var l = s(5260);
      let n = [],
        d = !1;
      function t(e, a, s, t) {
        let o;
        "function" == typeof a && "function" != typeof s
          ? ((t = s), (s = a))
          : (o = a);
        let c = (0, l.C)(o),
          i = t ? -1 : 1;
        (function e(l, o, r) {
          let b = l && "object" == typeof l ? l : {};
          if ("string" == typeof b.type) {
            let e =
              "string" == typeof b.tagName
                ? b.tagName
                : "string" == typeof b.name
                ? b.name
                : void 0;
            Object.defineProperty(f, "name", {
              value: "node (" + l.type + (e ? "<" + e + ">" : "") + ")",
            });
          }
          return f;
          function f() {
            var b;
            let f,
              m,
              E,
              u = n;
            if (
              (!a || c(l, o, r[r.length - 1] || void 0)) &&
              (u = Array.isArray((b = s(l, r)))
                ? b
                : "number" == typeof b
                ? [!0, b]
                : null == b
                ? n
                : [b])[0] === d
            )
              return u;
            if ("children" in l && l.children && l.children && "skip" !== u[0])
              for (
                m = (t ? l.children.length : -1) + i, E = r.concat(l);
                m > -1 && m < l.children.length;

              ) {
                if ((f = e(l.children[m], m, E)())[0] === d) return f;
                m = "number" == typeof f[1] ? f[1] : m + i;
              }
            return u;
          }
        })(e, void 0, [])();
      }
    },
    4788: (e, a, s) => {
      function l() {}
      function n() {}
      s.d(a, { HB: () => n, ok: () => l });
    },
    4964: (e, a, s) => {
      s.d(a, { N: () => n });
      var l = s(6299);
      function n(e, a, s, n) {
        let d = n ? n - 1 : 1 / 0,
          t = 0;
        return function (n) {
          return (0, l.On)(n)
            ? (e.enter(s),
              (function n(o) {
                return (0, l.On)(o) && t++ < d
                  ? (e.consume(o), n)
                  : (e.exit(s), a(o));
              })(n))
            : a(n);
        };
      }
    },
    5220: (e, a, s) => {
      s.d(a, { y: () => d });
      var l = s(6148);
      let n = {}.hasOwnProperty;
      function d(e) {
        let a = {},
          s = -1;
        for (; ++s < e.length; )
          !(function (e, a) {
            let s;
            for (s in a) {
              let d,
                t = (n.call(e, s) ? e[s] : void 0) || (e[s] = {}),
                o = a[s];
              if (o)
                for (d in o) {
                  n.call(t, d) || (t[d] = []);
                  let e = o[d];
                  !(function (e, a) {
                    let s = -1,
                      n = [];
                    for (; ++s < a.length; )
                      ("after" === a[s].add ? e : n).push(a[s]);
                    (0, l.m)(e, 0, 0, n);
                  })(t[d], Array.isArray(e) ? e : e ? [e] : []);
                }
            }
          })(a, e[s]);
        return a;
      }
    },
    5260: (e, a, s) => {
      s.d(a, { C: () => l });
      let l = function (e) {
        var a, s;
        if (null == e) return d;
        if ("function" == typeof e) return n(e);
        if ("object" == typeof e) {
          return Array.isArray(e)
            ? (function (e) {
                let a = [],
                  s = -1;
                for (; ++s < e.length; ) a[s] = l(e[s]);
                return n(function (...e) {
                  let s = -1;
                  for (; ++s < a.length; ) if (a[s].apply(this, e)) return !0;
                  return !1;
                });
              })(e)
            : ((a = e),
              n(function (e) {
                let s;
                for (s in a) if (e[s] !== a[s]) return !1;
                return !0;
              }));
        }
        if ("string" == typeof e) {
          return (
            (s = e),
            n(function (e) {
              return e && e.type === s;
            })
          );
        }
        throw Error("Expected function, string, or object as test");
      };
      function n(e) {
        return function (a, s, l) {
          return !!(
            (function (e) {
              return null !== e && "object" == typeof e && "type" in e;
            })(a) &&
            e.call(this, a, "number" == typeof s ? s : void 0, l || void 0)
          );
        };
      }
      function d() {
        return !0;
      }
    },
    5384: (e, a, s) => {
      s.d(a, { A: () => l });
      let l = (0, s(809).A)("User", [
        [
          "path",
          { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
        ],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
      ]);
    },
    5846: (e, a, s) => {
      s.d(a, { B: () => l });
      function l(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
    },
    5937: (e, a, s) => {
      s.d(a, { YR: () => n });
      var l = s(4361);
      function n(e, a, s, n) {
        let d, t, o;
        "function" == typeof a && "function" != typeof s
          ? ((t = void 0), (o = a), (d = s))
          : ((t = a), (o = s), (d = n)),
          (0, l.VG)(
            e,
            t,
            function (e, a) {
              let s = a[a.length - 1],
                l = s ? s.children.indexOf(e) : void 0;
              return o(e, l, s);
            },
            d
          );
      }
    },
    6148: (e, a, s) => {
      function l(e, a, s, l) {
        let n,
          d = e.length,
          t = 0;
        if (
          ((a = a < 0 ? (-a > d ? 0 : d + a) : a > d ? d : a),
          (s = s > 0 ? s : 0),
          l.length < 1e4)
        )
          (n = Array.from(l)).unshift(a, s), e.splice(...n);
        else
          for (s && e.splice(a, s); t < l.length; )
            (n = l.slice(t, t + 1e4)).unshift(a, 0),
              e.splice(...n),
              (t += 1e4),
              (a += 1e4);
      }
      function n(e, a) {
        return e.length > 0 ? (l(e, e.length, 0, a), e) : a;
      }
      s.d(a, { V: () => n, m: () => l });
    },
    6299: (e, a, s) => {
      s.d(a, {
        BM: () => o,
        CW: () => l,
        Ee: () => b,
        HP: () => r,
        JQ: () => t,
        Ny: () => E,
        On: () => f,
        cx: () => d,
        es: () => m,
        lV: () => n,
        ok: () => c,
        ol: () => i,
      });
      let l = u(/[A-Za-z]/),
        n = u(/[\dA-Za-z]/),
        d = u(/[#-'*+\--9=?A-Z^-~]/);
      function t(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let o = u(/\d/),
        c = u(/[\dA-Fa-f]/),
        i = u(/[!-/:-@[-`{-~]/);
      function r(e) {
        return null !== e && e < -2;
      }
      function b(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function f(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let m = u(/\p{P}|\p{S}/u),
        E = u(/\s/);
      function u(e) {
        return function (a) {
          return null !== a && a > -1 && e.test(String.fromCharCode(a));
        };
      }
    },
    6318: (e, a, s) => {
      var l, n, d;
      s.d(a, {
        GP: () => d,
        IM: () => n,
        a: () => o,
        gr: () => t,
        nU: () => l,
      });
      let t = {
        42161: "arbitrum",
        10: "optimism",
        8453: "base",
        146: "sonic",
        1: "ethereum",
      };
      !(function (e) {
        (e[(e.ARBITRUM_ONE = 42161)] = "ARBITRUM_ONE"),
          (e[(e.OPTIMISM = 10)] = "OPTIMISM"),
          (e[(e.BASE = 8453)] = "BASE"),
          (e[(e.SONIC = 146)] = "SONIC"),
          (e[(e.ETHEREUM = 1)] = "ETHEREUM");
      })(l || (l = {})),
        (function (e) {
          (e.UNKNOWN = "UNKNOWN"),
            (e.FUND = "FUND"),
            (e.DEPOSIT = "DEPOSIT"),
            (e.FLASHLOAN = "FLASHLOAN"),
            (e.LEND = "LEND"),
            (e.BORROW = "BORROW"),
            (e.SWAP = "SWAP"),
            (e.REPAY = "REPAY"),
            (e.STAKE = "STAKE"),
            (e.UNSTAKE = "UNSTAKE"),
            (e.WITHDRAW = "WITHDRAW"),
            (e.REFUND = "REFUND"),
            (e.CONDITIONAL = "CONDITIONAL"),
            (e.AUTOMATION = "AUTOMATION"),
            (e.YIELD = "YIELD"),
            (e.PROVIDE_LIQUIDITY = "PROVIDE_LIQUIDITY"),
            (e.REMOVE_LIQUIDITY = "REMOVE_LIQUIDITY"),
            (e.COLLECT_FEE = "COLLECT_FEE"),
            (e.CREATE_LP = "CREATE_LP"),
            (e.CLAIM_REWARDS = "CLAIM_REWARDS"),
            (e.ERC721 = "ERC721"),
            (e.YIELD_TRADING = "YIELD_TRADING");
        })(n || (n = {})),
        (function (e) {
          (e.AAVE = "AAVE"),
            (e.BALANCER = "BALANCER"),
            (e.CAMELOT = "CAMELOT"),
            (e.COMPOUND = "COMPOUND"),
            (e.GLP = "GLP"),
            (e.GMX = "GMX"),
            (e.GNS = "GNS"),
            (e.MUX = "MUX"),
            (e.OPENOCEAN = "OPENOCEAN"),
            (e.PENDLE = "PENDLE"),
            (e.PENPIE = "PENPIE"),
            (e.PIREX = "PIREX"),
            (e.SILO = "SILO"),
            (e.UMAMI = "UMAMI"),
            (e.UNISWAP = "UNISWAP"),
            (e.VLP = "VLP"),
            (e.MORPHO = "MORPHO"),
            (e.SILO_V2 = "SILO_V2"),
            (e.EULER = "EULER");
        })(d || (d = {}));
      let o = {
        [n.SWAP]: [d.OPENOCEAN, d.UNISWAP, d.CAMELOT],
        [n.LEND]: [d.AAVE, d.COMPOUND],
        [n.BORROW]: [d.AAVE, d.COMPOUND],
        [n.FLASHLOAN]: [d.BALANCER, d.AAVE, d.MORPHO],
        [n.PROVIDE_LIQUIDITY]: [d.UNISWAP, d.CAMELOT],
        [n.REMOVE_LIQUIDITY]: [d.UNISWAP, d.CAMELOT],
        [n.CREATE_LP]: [d.UNISWAP, d.CAMELOT],
        [n.CLAIM_REWARDS]: [d.AAVE, d.COMPOUND],
        [n.YIELD]: [d.AAVE, d.COMPOUND],
      };
    },
    6900: (e, a, s) => {
      s.d(a, { W: () => l });
      function l(e, a, s) {
        let l = [],
          n = -1;
        for (; ++n < e.length; ) {
          let d = e[n].resolveAll;
          d && !l.includes(d) && ((a = d(a, s)), l.push(d));
        }
        return a;
      }
    },
    7240: (e) => {
      var a = Object.prototype.hasOwnProperty,
        s = Object.prototype.toString,
        l = Object.defineProperty,
        n = Object.getOwnPropertyDescriptor,
        d = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === s.call(e);
        },
        t = function (e) {
          if (!e || "[object Object]" !== s.call(e)) return !1;
          var l,
            n = a.call(e, "constructor"),
            d =
              e.constructor &&
              e.constructor.prototype &&
              a.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !n && !d) return !1;
          for (l in e);
          return void 0 === l || a.call(e, l);
        },
        o = function (e, a) {
          l && "__proto__" === a.name
            ? l(e, a.name, {
                enumerable: !0,
                configurable: !0,
                value: a.newValue,
                writable: !0,
              })
            : (e[a.name] = a.newValue);
        },
        c = function (e, s) {
          if ("__proto__" === s) {
            if (!a.call(e, s)) return;
            else if (n) return n(e, s).value;
          }
          return e[s];
        };
      e.exports = function e() {
        var a,
          s,
          l,
          n,
          i,
          r,
          b = arguments[0],
          f = 1,
          m = arguments.length,
          E = !1;
        for (
          "boolean" == typeof b && ((E = b), (b = arguments[1] || {}), (f = 2)),
            (null == b || ("object" != typeof b && "function" != typeof b)) &&
              (b = {});
          f < m;
          ++f
        )
          if (((a = arguments[f]), null != a))
            for (s in a)
              (l = c(b, s)),
                b !== (n = c(a, s)) &&
                  (E && n && (t(n) || (i = d(n)))
                    ? (i
                        ? ((i = !1), (r = l && d(l) ? l : []))
                        : (r = l && t(l) ? l : {}),
                      o(b, { name: s, newValue: e(E, r, n) }))
                    : void 0 !== n && o(b, { name: s, newValue: n }));
        return b;
      };
    },
    7581: function (e, a, s) {
      var l = (
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          }
        )(s(1158)),
        n = s(2257);
      function d(e, a) {
        var s = {};
        return (
          e &&
            "string" == typeof e &&
            (0, l.default)(e, function (e, l) {
              e && l && (s[(0, n.camelCase)(e, a)] = l);
            }),
          s
        );
      }
      (d.default = d), (e.exports = d);
    },
    7616: (e, a, s) => {
      s.d(a, { oz: () => sb });
      var l = {};
      s.r(l),
        s.d(l, {
          boolean: () => A,
          booleanish: () => I,
          commaOrSpaceSeparated: () => C,
          commaSeparated: () => P,
          number: () => p,
          overloadedBoolean: () => T,
          spaceSeparated: () => y,
        });
      var n = {};
      s.r(n),
        s.d(n, {
          attentionMarkers: () => am,
          contentInitial: () => ao,
          disable: () => aE,
          document: () => at,
          flow: () => ai,
          flowInitial: () => ac,
          insideSpan: () => af,
          string: () => ar,
          text: () => ab,
        });
      var d = s(4788);
      let t = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        o = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        c = {};
      function i(e, a) {
        return ((a || c).jsx ? o : t).test(e);
      }
      let r = /[ \t\n\f\r]/g;
      function b(e) {
        return "" === e.replace(r, "");
      }
      class f {
        constructor(e, a, s) {
          (this.normal = a), (this.property = e), s && (this.space = s);
        }
      }
      function m(e, a) {
        let s = {},
          l = {};
        for (let a of e)
          Object.assign(s, a.property), Object.assign(l, a.normal);
        return new f(s, l, a);
      }
      function E(e) {
        return e.toLowerCase();
      }
      (f.prototype.normal = {}),
        (f.prototype.property = {}),
        (f.prototype.space = void 0);
      class u {
        constructor(e, a) {
          (this.attribute = a), (this.property = e);
        }
      }
      (u.prototype.attribute = ""),
        (u.prototype.booleanish = !1),
        (u.prototype.boolean = !1),
        (u.prototype.commaOrSpaceSeparated = !1),
        (u.prototype.commaSeparated = !1),
        (u.prototype.defined = !1),
        (u.prototype.mustUseProperty = !1),
        (u.prototype.number = !1),
        (u.prototype.overloadedBoolean = !1),
        (u.prototype.property = ""),
        (u.prototype.spaceSeparated = !1),
        (u.prototype.space = void 0);
      let D = 0,
        A = S(),
        I = S(),
        T = S(),
        p = S(),
        y = S(),
        P = S(),
        C = S();
      function S() {
        return 2 ** ++D;
      }
      let x = Object.keys(l);
      class B extends u {
        constructor(e, a, s, n) {
          let d = -1;
          if (
            (super(e, a),
            (function (e, a, s) {
              s && (e[a] = s);
            })(this, "space", n),
            "number" == typeof s)
          )
            for (; ++d < x.length; ) {
              let e = x[d];
              !(function (e, a, s) {
                s && (e[a] = s);
              })(this, x[d], (s & l[e]) === l[e]);
            }
        }
      }
      function M(e) {
        let a = {},
          s = {};
        for (let [l, n] of Object.entries(e.properties)) {
          let d = new B(l, e.transform(e.attributes || {}, l), n, e.space);
          e.mustUseProperty &&
            e.mustUseProperty.includes(l) &&
            (d.mustUseProperty = !0),
            (a[l] = d),
            (s[E(l)] = l),
            (s[E(d.attribute)] = l);
        }
        return new f(a, s, e.space);
      }
      B.prototype.defined = !0;
      let R = M({
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: I,
          ariaAutoComplete: null,
          ariaBusy: I,
          ariaChecked: I,
          ariaColCount: p,
          ariaColIndex: p,
          ariaColSpan: p,
          ariaControls: y,
          ariaCurrent: null,
          ariaDescribedBy: y,
          ariaDetails: null,
          ariaDisabled: I,
          ariaDropEffect: y,
          ariaErrorMessage: null,
          ariaExpanded: I,
          ariaFlowTo: y,
          ariaGrabbed: I,
          ariaHasPopup: null,
          ariaHidden: I,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: y,
          ariaLevel: p,
          ariaLive: null,
          ariaModal: I,
          ariaMultiLine: I,
          ariaMultiSelectable: I,
          ariaOrientation: null,
          ariaOwns: y,
          ariaPlaceholder: null,
          ariaPosInSet: p,
          ariaPressed: I,
          ariaReadOnly: I,
          ariaRelevant: null,
          ariaRequired: I,
          ariaRoleDescription: y,
          ariaRowCount: p,
          ariaRowIndex: p,
          ariaRowSpan: p,
          ariaSelected: I,
          ariaSetSize: p,
          ariaSort: null,
          ariaValueMax: p,
          ariaValueMin: p,
          ariaValueNow: p,
          ariaValueText: null,
          role: null,
        },
        transform: (e, a) =>
          "role" === a ? a : "aria-" + a.slice(4).toLowerCase(),
      });
      function g(e, a) {
        return a in e ? e[a] : a;
      }
      function L(e, a) {
        return g(e, a.toLowerCase());
      }
      let h = M({
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: P,
            acceptCharset: y,
            accessKey: y,
            action: null,
            allow: null,
            allowFullScreen: A,
            allowPaymentRequest: A,
            allowUserMedia: A,
            alpha: A,
            alt: null,
            as: null,
            async: A,
            autoCapitalize: null,
            autoComplete: y,
            autoFocus: A,
            autoPlay: A,
            blocking: y,
            capture: null,
            charSet: null,
            checked: A,
            cite: null,
            className: y,
            closedBy: null,
            colorSpace: null,
            cols: p,
            colSpan: p,
            command: null,
            commandFor: null,
            content: null,
            contentEditable: I,
            controls: A,
            controlsList: y,
            coords: p | P,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: A,
            defer: A,
            dir: null,
            dirName: null,
            disabled: A,
            download: T,
            draggable: I,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: A,
            formTarget: null,
            headers: y,
            height: p,
            hidden: T,
            high: p,
            href: null,
            hrefLang: null,
            htmlFor: y,
            httpEquiv: y,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: A,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: A,
            itemId: null,
            itemProp: y,
            itemRef: y,
            itemScope: A,
            itemType: y,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: A,
            low: p,
            manifest: null,
            max: null,
            maxLength: p,
            media: null,
            method: null,
            min: null,
            minLength: p,
            multiple: A,
            muted: A,
            name: null,
            nonce: null,
            noModule: A,
            noValidate: A,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: A,
            optimum: p,
            pattern: null,
            ping: y,
            placeholder: null,
            playsInline: A,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: A,
            referrerPolicy: null,
            rel: y,
            required: A,
            reversed: A,
            rows: p,
            rowSpan: p,
            sandbox: y,
            scope: null,
            scoped: A,
            seamless: A,
            selected: A,
            shadowRootClonable: A,
            shadowRootCustomElementRegistry: A,
            shadowRootDelegatesFocus: A,
            shadowRootMode: null,
            shadowRootSerializable: A,
            shape: null,
            size: p,
            sizes: null,
            slot: null,
            span: p,
            spellCheck: I,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: p,
            step: null,
            style: null,
            tabIndex: p,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: A,
            useMap: null,
            value: I,
            width: p,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: y,
            axis: null,
            background: null,
            bgColor: null,
            border: p,
            borderColor: null,
            bottomMargin: p,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: A,
            declare: A,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: p,
            leftMargin: p,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: p,
            marginWidth: p,
            noResize: A,
            noHref: A,
            noShade: A,
            noWrap: A,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: p,
            rules: null,
            scheme: null,
            scrolling: I,
            standby: null,
            summary: null,
            text: null,
            topMargin: p,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: p,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            credentialless: A,
            disablePictureInPicture: A,
            disableRemotePlayback: A,
            exportParts: P,
            part: y,
            prefix: null,
            property: null,
            results: p,
            security: null,
            unselectable: null,
          },
          space: "html",
          transform: L,
        }),
        k = M({
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            maskType: "mask-type",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          properties: {
            about: C,
            accentHeight: p,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: p,
            amplitude: p,
            arabicForm: null,
            ascent: p,
            attributeName: null,
            attributeType: null,
            azimuth: p,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: p,
            by: null,
            calcMode: null,
            capHeight: p,
            className: y,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: p,
            diffuseConstant: p,
            direction: null,
            display: null,
            dur: null,
            divisor: p,
            dominantBaseline: null,
            download: A,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: p,
            enableBackground: null,
            end: null,
            event: null,
            exponent: p,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: p,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: P,
            g2: P,
            glyphName: P,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: p,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: p,
            horizOriginX: p,
            horizOriginY: p,
            id: null,
            ideographic: p,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: p,
            k: p,
            k1: p,
            k2: p,
            k3: p,
            k4: p,
            kernelMatrix: C,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: p,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskType: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: p,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: p,
            overlineThickness: p,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: p,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: y,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: p,
            pointsAtY: p,
            pointsAtZ: p,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: C,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: C,
            rev: C,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: C,
            requiredFeatures: C,
            requiredFonts: C,
            requiredFormats: C,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: p,
            specularExponent: p,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: p,
            strikethroughThickness: p,
            string: null,
            stroke: null,
            strokeDashArray: C,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: p,
            strokeOpacity: p,
            strokeWidth: null,
            style: null,
            surfaceScale: p,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: C,
            tabIndex: p,
            tableValues: null,
            target: null,
            targetX: p,
            targetY: p,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: C,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: p,
            underlineThickness: p,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: p,
            values: null,
            vAlphabetic: p,
            vMathematical: p,
            vectorEffect: null,
            vHanging: p,
            vIdeographic: p,
            version: null,
            vertAdvY: p,
            vertOriginX: p,
            vertOriginY: p,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: p,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
          space: "svg",
          transform: g,
        }),
        O = M({
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
          space: "xlink",
          transform: (e, a) => "xlink:" + a.slice(5).toLowerCase(),
        }),
        U = M({
          attributes: { xmlnsxlink: "xmlns:xlink" },
          properties: { xmlnsXLink: null, xmlns: null },
          space: "xmlns",
          transform: L,
        }),
        F = M({
          properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
          space: "xml",
          transform: (e, a) => "xml:" + a.slice(3).toLowerCase(),
        }),
        N = m([R, h, O, U, F], "html"),
        H = m([R, k, O, U, F], "svg"),
        W = /[A-Z]/g,
        w = /-[a-z]/g,
        Y = /^data[-\w.:]+$/i;
      function G(e) {
        return "-" + e.toLowerCase();
      }
      function v(e) {
        return e.charAt(1).toUpperCase();
      }
      let V = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var _ = s(7581);
      let Q = J("end"),
        z = J("start");
      function J(e) {
        return function (a) {
          let s = (a && a.position && a.position[e]) || {};
          if (
            "number" == typeof s.line &&
            s.line > 0 &&
            "number" == typeof s.column &&
            s.column > 0
          )
            return {
              line: s.line,
              column: s.column,
              offset:
                "number" == typeof s.offset && s.offset > -1
                  ? s.offset
                  : void 0,
            };
        };
      }
      function j(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? X(e.position)
            : "start" in e || "end" in e
            ? X(e)
            : "line" in e || "column" in e
            ? Z(e)
            : ""
          : "";
      }
      function Z(e) {
        return q(e && e.line) + ":" + q(e && e.column);
      }
      function X(e) {
        return Z(e && e.start) + "-" + Z(e && e.end);
      }
      function q(e) {
        return e && "number" == typeof e ? e : 1;
      }
      class K extends Error {
        constructor(e, a, s) {
          super(), "string" == typeof a && ((s = a), (a = void 0));
          let l = "",
            n = {},
            d = !1;
          if (
            (a &&
              (n =
                ("line" in a && "column" in a) || ("start" in a && "end" in a)
                  ? { place: a }
                  : "type" in a
                  ? { ancestors: [a], place: a.position }
                  : { ...a }),
            "string" == typeof e
              ? (l = e)
              : !n.cause && e && ((d = !0), (l = e.message), (n.cause = e)),
            !n.ruleId && !n.source && "string" == typeof s)
          ) {
            let e = s.indexOf(":");
            -1 === e
              ? (n.ruleId = s)
              : ((n.source = s.slice(0, e)), (n.ruleId = s.slice(e + 1)));
          }
          if (!n.place && n.ancestors && n.ancestors) {
            let e = n.ancestors[n.ancestors.length - 1];
            e && (n.place = e.position);
          }
          let t = n.place && "start" in n.place ? n.place.start : n.place;
          (this.ancestors = n.ancestors || void 0),
            (this.cause = n.cause || void 0),
            (this.column = t ? t.column : void 0),
            (this.fatal = void 0),
            (this.file = ""),
            (this.message = l),
            (this.line = t ? t.line : void 0),
            (this.name = j(n.place) || "1:1"),
            (this.place = n.place || void 0),
            (this.reason = this.message),
            (this.ruleId = n.ruleId || void 0),
            (this.source = n.source || void 0),
            (this.stack =
              d && n.cause && "string" == typeof n.cause.stack
                ? n.cause.stack
                : ""),
            (this.actual = void 0),
            (this.expected = void 0),
            (this.note = void 0),
            (this.url = void 0);
        }
      }
      (K.prototype.file = ""),
        (K.prototype.name = ""),
        (K.prototype.reason = ""),
        (K.prototype.message = ""),
        (K.prototype.stack = ""),
        (K.prototype.column = void 0),
        (K.prototype.line = void 0),
        (K.prototype.ancestors = void 0),
        (K.prototype.cause = void 0),
        (K.prototype.fatal = void 0),
        (K.prototype.place = void 0),
        (K.prototype.ruleId = void 0),
        (K.prototype.source = void 0);
      let $ = {}.hasOwnProperty,
        ee = new Map(),
        ea = /[A-Z]/g,
        es = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
        el = new Set(["td", "th"]),
        en = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function ed(e, a, s) {
        return "element" === a.type
          ? (function (e, a, s) {
              let l = e.schema;
              "svg" === a.tagName.toLowerCase() &&
                "html" === l.space &&
                (e.schema = H),
                e.ancestors.push(a);
              let n = ei(e, a.tagName, !1),
                d = (function (e, a) {
                  let s,
                    l,
                    n = {};
                  for (l in a.properties)
                    if ("children" !== l && $.call(a.properties, l)) {
                      let d = (function (e, a, s) {
                        let l = (function (e, a) {
                          let s = E(a),
                            l = a,
                            n = u;
                          if (s in e.normal) return e.property[e.normal[s]];
                          if (
                            s.length > 4 &&
                            "data" === s.slice(0, 4) &&
                            Y.test(a)
                          ) {
                            if ("-" === a.charAt(4)) {
                              let e = a.slice(5).replace(w, v);
                              l =
                                "data" + e.charAt(0).toUpperCase() + e.slice(1);
                            } else {
                              let e = a.slice(4);
                              if (!w.test(e)) {
                                let s = e.replace(W, G);
                                "-" !== s.charAt(0) && (s = "-" + s),
                                  (a = "data" + s);
                              }
                            }
                            n = B;
                          }
                          return new n(l, a);
                        })(e.schema, a);
                        if (
                          !(
                            null == s ||
                            ("number" == typeof s && Number.isNaN(s))
                          )
                        ) {
                          if (
                            (Array.isArray(s) &&
                              (s = l.commaSeparated
                                ? (function (e, a) {
                                    let s = {};
                                    return (
                                      "" === e[e.length - 1] ? [...e, ""] : e
                                    )
                                      .join(
                                        (s.padRight ? " " : "") +
                                          "," +
                                          (!1 === s.padLeft ? "" : " ")
                                      )
                                      .trim();
                                  })(s)
                                : s.join(" ").trim()),
                            "style" === l.property)
                          ) {
                            let a =
                              "object" == typeof s
                                ? s
                                : (function (e, a) {
                                    try {
                                      return _(a, { reactCompat: !0 });
                                    } catch (s) {
                                      if (e.ignoreInvalidStyle) return {};
                                      let a = new K(
                                        "Cannot parse `style` attribute",
                                        {
                                          ancestors: e.ancestors,
                                          cause: s,
                                          ruleId: "style",
                                          source: "hast-util-to-jsx-runtime",
                                        }
                                      );
                                      throw (
                                        ((a.file = e.filePath || void 0),
                                        (a.url =
                                          en + "#cannot-parse-style-attribute"),
                                        a)
                                      );
                                    }
                                  })(e, String(s));
                            return (
                              "css" === e.stylePropertyNameCase &&
                                (a = (function (e) {
                                  let a,
                                    s = {};
                                  for (a in e)
                                    $.call(e, a) &&
                                      (s[
                                        (function (e) {
                                          let a = e.replace(ea, eb);
                                          return (
                                            "ms-" === a.slice(0, 3) &&
                                              (a = "-" + a),
                                            a
                                          );
                                        })(a)
                                      ] = e[a]);
                                  return s;
                                })(a)),
                              ["style", a]
                            );
                          }
                          return [
                            "react" === e.elementAttributeNameCase && l.space
                              ? V[l.property] || l.property
                              : l.attribute,
                            s,
                          ];
                        }
                      })(e, l, a.properties[l]);
                      if (d) {
                        let [l, t] = d;
                        e.tableCellAlignToStyle &&
                        "align" === l &&
                        "string" == typeof t &&
                        el.has(a.tagName)
                          ? (s = t)
                          : (n[l] = t);
                      }
                    }
                  return (
                    s &&
                      ((n.style || (n.style = {}))[
                        "css" === e.stylePropertyNameCase
                          ? "text-align"
                          : "textAlign"
                      ] = s),
                    n
                  );
                })(e, a),
                t = ec(e, a);
              return (
                es.has(a.tagName) &&
                  (t = t.filter(function (e) {
                    return (
                      "string" != typeof e ||
                      !("object" == typeof e
                        ? "text" === e.type && b(e.value)
                        : b(e))
                    );
                  })),
                et(e, d, n, a),
                eo(d, t),
                e.ancestors.pop(),
                (e.schema = l),
                e.create(a, n, d, s)
              );
            })(e, a, s)
          : "mdxFlowExpression" === a.type || "mdxTextExpression" === a.type
          ? (function (e, a) {
              if (a.data && a.data.estree && e.evaluater) {
                let s = a.data.estree.body[0];
                return (
                  (0, d.ok)("ExpressionStatement" === s.type),
                  e.evaluater.evaluateExpression(s.expression)
                );
              }
              er(e, a.position);
            })(e, a)
          : "mdxJsxFlowElement" === a.type || "mdxJsxTextElement" === a.type
          ? (function (e, a, s) {
              let l = e.schema;
              "svg" === a.name && "html" === l.space && (e.schema = H),
                e.ancestors.push(a);
              let n = null === a.name ? e.Fragment : ei(e, a.name, !0),
                t = (function (e, a) {
                  let s = {};
                  for (let l of a.attributes)
                    if ("mdxJsxExpressionAttribute" === l.type)
                      if (l.data && l.data.estree && e.evaluater) {
                        let a = l.data.estree.body[0];
                        (0, d.ok)("ExpressionStatement" === a.type);
                        let n = a.expression;
                        (0, d.ok)("ObjectExpression" === n.type);
                        let t = n.properties[0];
                        (0, d.ok)("SpreadElement" === t.type),
                          Object.assign(
                            s,
                            e.evaluater.evaluateExpression(t.argument)
                          );
                      } else er(e, a.position);
                    else {
                      let n,
                        t = l.name;
                      if (l.value && "object" == typeof l.value)
                        if (
                          l.value.data &&
                          l.value.data.estree &&
                          e.evaluater
                        ) {
                          let a = l.value.data.estree.body[0];
                          (0, d.ok)("ExpressionStatement" === a.type),
                            (n = e.evaluater.evaluateExpression(a.expression));
                        } else er(e, a.position);
                      else n = null === l.value || l.value;
                      s[t] = n;
                    }
                  return s;
                })(e, a),
                o = ec(e, a);
              return (
                et(e, t, n, a),
                eo(t, o),
                e.ancestors.pop(),
                (e.schema = l),
                e.create(a, n, t, s)
              );
            })(e, a, s)
          : "mdxjsEsm" === a.type
          ? (function (e, a) {
              if (a.data && a.data.estree && e.evaluater)
                return e.evaluater.evaluateProgram(a.data.estree);
              er(e, a.position);
            })(e, a)
          : "root" === a.type
          ? (function (e, a, s) {
              let l = {};
              return eo(l, ec(e, a)), e.create(a, e.Fragment, l, s);
            })(e, a, s)
          : "text" === a.type
          ? a.value
          : void 0;
      }
      function et(e, a, s, l) {
        "string" != typeof s && s !== e.Fragment && e.passNode && (a.node = l);
      }
      function eo(e, a) {
        if (a.length > 0) {
          let s = a.length > 1 ? a : a[0];
          s && (e.children = s);
        }
      }
      function ec(e, a) {
        let s = [],
          l = -1,
          n = e.passKeys ? new Map() : ee;
        for (; ++l < a.children.length; ) {
          let d,
            t = a.children[l];
          if (e.passKeys) {
            let e =
              "element" === t.type
                ? t.tagName
                : "mdxJsxFlowElement" === t.type ||
                  "mdxJsxTextElement" === t.type
                ? t.name
                : void 0;
            if (e) {
              let a = n.get(e) || 0;
              (d = e + "-" + a), n.set(e, a + 1);
            }
          }
          let o = ed(e, t, d);
          void 0 !== o && s.push(o);
        }
        return s;
      }
      function ei(e, a, s) {
        let l;
        if (s)
          if (a.includes(".")) {
            let e,
              s = a.split("."),
              n = -1;
            for (; ++n < s.length; ) {
              let a = i(s[n])
                ? { type: "Identifier", name: s[n] }
                : { type: "Literal", value: s[n] };
              e = e
                ? {
                    type: "MemberExpression",
                    object: e,
                    property: a,
                    computed: !!(n && "Literal" === a.type),
                    optional: !1,
                  }
                : a;
            }
            (0, d.ok)(e, "always a result"), (l = e);
          } else
            l =
              i(a) && !/^[a-z]/.test(a)
                ? { type: "Identifier", name: a }
                : { type: "Literal", value: a };
        else l = { type: "Literal", value: a };
        if ("Literal" === l.type) {
          let a = l.value;
          return $.call(e.components, a) ? e.components[a] : a;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(l);
        er(e);
      }
      function er(e, a) {
        let s = new K("Cannot handle MDX estrees without `createEvaluater`", {
          ancestors: e.ancestors,
          place: a,
          ruleId: "mdx-estree",
          source: "hast-util-to-jsx-runtime",
        });
        throw (
          ((s.file = e.filePath || void 0),
          (s.url = en + "#cannot-handle-mdx-estrees-without-createevaluater"),
          s)
        );
      }
      function eb(e) {
        return "-" + e.toLowerCase();
      }
      let ef = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: [
          "audio",
          "embed",
          "iframe",
          "img",
          "input",
          "script",
          "source",
          "track",
          "video",
        ],
      };
      var em = s(8095);
      s(8967);
      var eE = s(3389),
        eu = s(6148);
      class eD {
        constructor(e) {
          (this.left = e ? [...e] : []), (this.right = []);
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError(
              "Cannot access index `" +
                e +
                "` in a splice buffer of size `" +
                (this.left.length + this.right.length) +
                "`"
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return this.setCursor(0), this.right.pop();
        }
        slice(e, a) {
          let s = null == a ? 1 / 0 : a;
          return s < this.left.length
            ? this.left.slice(e, s)
            : e > this.left.length
            ? this.right
                .slice(
                  this.right.length - s + this.left.length,
                  this.right.length - e + this.left.length
                )
                .reverse()
            : this.left
                .slice(e)
                .concat(
                  this.right
                    .slice(this.right.length - s + this.left.length)
                    .reverse()
                );
        }
        splice(e, a, s) {
          this.setCursor(Math.trunc(e));
          let l = this.right.splice(this.right.length - (a || 0), 1 / 0);
          return s && eA(this.left, s), l.reverse();
        }
        pop() {
          return this.setCursor(1 / 0), this.left.pop();
        }
        push(e) {
          this.setCursor(1 / 0), this.left.push(e);
        }
        pushMany(e) {
          this.setCursor(1 / 0), eA(this.left, e);
        }
        unshift(e) {
          this.setCursor(0), this.right.push(e);
        }
        unshiftMany(e) {
          this.setCursor(0), eA(this.right, e.reverse());
        }
        setCursor(e) {
          if (
            e !== this.left.length &&
            (!(e > this.left.length) || 0 !== this.right.length) &&
            (!(e < 0) || 0 !== this.left.length)
          )
            if (e < this.left.length) {
              let a = this.left.splice(e, 1 / 0);
              eA(this.right, a.reverse());
            } else {
              let a = this.right.splice(
                this.left.length + this.right.length - e,
                1 / 0
              );
              eA(this.left, a.reverse());
            }
        }
      }
      function eA(e, a) {
        let s = 0;
        if (a.length < 1e4) e.push(...a);
        else for (; s < a.length; ) e.push(...a.slice(s, s + 1e4)), (s += 1e4);
      }
      function eI(e) {
        let a,
          s,
          l,
          n,
          d,
          t,
          o,
          c = {},
          i = -1,
          r = new eD(e);
        for (; ++i < r.length; ) {
          for (; i in c; ) i = c[i];
          if (
            ((a = r.get(i)),
            i &&
              "chunkFlow" === a[1].type &&
              "listItemPrefix" === r.get(i - 1)[1].type &&
              ((l = 0) < (t = a[1]._tokenizer.events).length &&
                "lineEndingBlank" === t[l][1].type &&
                (l += 2),
              l < t.length && "content" === t[l][1].type))
          )
            for (; ++l < t.length && "content" !== t[l][1].type; )
              "chunkText" === t[l][1].type &&
                ((t[l][1]._isInFirstContentOfListItem = !0), l++);
          if ("enter" === a[0])
            a[1].contentType &&
              (Object.assign(
                c,
                (function (e, a) {
                  let s,
                    l,
                    n = e.get(a)[1],
                    d = e.get(a)[2],
                    t = a - 1,
                    o = [],
                    c = n._tokenizer;
                  !c &&
                    ((c = d.parser[n.contentType](n.start)),
                    n._contentTypeTextTrailing &&
                      (c._contentTypeTextTrailing = !0));
                  let i = c.events,
                    r = [],
                    b = {},
                    f = -1,
                    m = n,
                    E = 0,
                    u = 0,
                    D = [0];
                  for (; m; ) {
                    for (; e.get(++t)[1] !== m; );
                    o.push(t),
                      !m._tokenizer &&
                        ((s = d.sliceStream(m)),
                        m.next || s.push(null),
                        l && c.defineSkip(m.start),
                        m._isInFirstContentOfListItem &&
                          (c._gfmTasklistFirstContentOfListItem = !0),
                        c.write(s),
                        m._isInFirstContentOfListItem &&
                          (c._gfmTasklistFirstContentOfListItem = void 0)),
                      (l = m),
                      (m = m.next);
                  }
                  for (m = n; ++f < i.length; )
                    "exit" === i[f][0] &&
                      "enter" === i[f - 1][0] &&
                      i[f][1].type === i[f - 1][1].type &&
                      i[f][1].start.line !== i[f][1].end.line &&
                      ((u = f + 1),
                      D.push(u),
                      (m._tokenizer = void 0),
                      (m.previous = void 0),
                      (m = m.next));
                  for (
                    c.events = [],
                      m
                        ? ((m._tokenizer = void 0), (m.previous = void 0))
                        : D.pop(),
                      f = D.length;
                    f--;

                  ) {
                    let a = i.slice(D[f], D[f + 1]),
                      s = o.pop();
                    r.push([s, s + a.length - 1]), e.splice(s, 2, a);
                  }
                  for (r.reverse(), f = -1; ++f < r.length; )
                    (b[E + r[f][0]] = E + r[f][1]),
                      (E += r[f][1] - r[f][0] - 1);
                  return b;
                })(r, i)
              ),
              (i = c[i]),
              (o = !0));
          else if (a[1]._container) {
            for (l = i, s = void 0; l--; )
              if (
                "lineEnding" === (n = r.get(l))[1].type ||
                "lineEndingBlank" === n[1].type
              )
                "enter" === n[0] &&
                  (s && (r.get(s)[1].type = "lineEndingBlank"),
                  (n[1].type = "lineEnding"),
                  (s = l));
              else if (
                "linePrefix" === n[1].type ||
                "listItemIndent" === n[1].type
              );
              else break;
            s &&
              ((a[1].end = { ...r.get(s)[1].start }),
              (d = r.slice(s, i)).unshift(a),
              r.splice(s, i - s + 1, d));
          }
        }
        return (0, eu.m)(e, 0, 1 / 0, r.slice(0)), !o;
      }
      var eT = s(5220),
        ep = s(4964),
        ey = s(6299);
      let eP = {
          tokenize: function (e) {
            let a,
              s = e.attempt(
                this.parser.constructs.contentInitial,
                function (a) {
                  return null === a
                    ? void e.consume(a)
                    : (e.enter("lineEnding"),
                      e.consume(a),
                      e.exit("lineEnding"),
                      (0, ep.N)(e, s, "linePrefix"));
                },
                function (s) {
                  return (
                    e.enter("paragraph"),
                    (function s(l) {
                      let n = e.enter("chunkText", {
                        contentType: "text",
                        previous: a,
                      });
                      return (
                        a && (a.next = n),
                        (a = n),
                        (function a(l) {
                          if (null === l) {
                            e.exit("chunkText"),
                              e.exit("paragraph"),
                              e.consume(l);
                            return;
                          }
                          return (0, ey.HP)(l)
                            ? (e.consume(l), e.exit("chunkText"), s)
                            : (e.consume(l), a);
                        })(l)
                      );
                    })(s)
                  );
                }
              );
            return s;
          },
        },
        eC = {
          tokenize: function (e) {
            let a,
              s,
              l,
              n = this,
              d = [],
              t = 0;
            return o;
            function o(a) {
              if (t < d.length) {
                let s = d[t];
                return (
                  (n.containerState = s[1]),
                  e.attempt(s[0].continuation, c, i)(a)
                );
              }
              return i(a);
            }
            function c(e) {
              if ((t++, n.containerState._closeFlow)) {
                let s;
                (n.containerState._closeFlow = void 0), a && A();
                let l = n.events.length,
                  d = l;
                for (; d--; )
                  if (
                    "exit" === n.events[d][0] &&
                    "chunkFlow" === n.events[d][1].type
                  ) {
                    s = n.events[d][1].end;
                    break;
                  }
                D(t);
                let o = l;
                for (; o < n.events.length; )
                  (n.events[o][1].end = { ...s }), o++;
                return (
                  (0, eu.m)(n.events, d + 1, 0, n.events.slice(l)),
                  (n.events.length = o),
                  i(e)
                );
              }
              return o(e);
            }
            function i(s) {
              if (t === d.length) {
                if (!a) return f(s);
                if (a.currentConstruct && a.currentConstruct.concrete)
                  return E(s);
                n.interrupt = !!(
                  a.currentConstruct && !a._gfmTableDynamicInterruptHack
                );
              }
              return (n.containerState = {}), e.check(eS, r, b)(s);
            }
            function r(e) {
              return a && A(), D(t), f(e);
            }
            function b(e) {
              return (
                (n.parser.lazy[n.now().line] = t !== d.length),
                (l = n.now().offset),
                E(e)
              );
            }
            function f(a) {
              return (n.containerState = {}), e.attempt(eS, m, E)(a);
            }
            function m(e) {
              return t++, d.push([n.currentConstruct, n.containerState]), f(e);
            }
            function E(l) {
              if (null === l) {
                a && A(), D(0), e.consume(l);
                return;
              }
              return (
                (a = a || n.parser.flow(n.now())),
                e.enter("chunkFlow", {
                  _tokenizer: a,
                  contentType: "flow",
                  previous: s,
                }),
                (function a(s) {
                  if (null === s) {
                    u(e.exit("chunkFlow"), !0), D(0), e.consume(s);
                    return;
                  }
                  return (0, ey.HP)(s)
                    ? (e.consume(s),
                      u(e.exit("chunkFlow")),
                      (t = 0),
                      (n.interrupt = void 0),
                      o)
                    : (e.consume(s), a);
                })(l)
              );
            }
            function u(e, d) {
              let o = n.sliceStream(e);
              if (
                (d && o.push(null),
                (e.previous = s),
                s && (s.next = e),
                (s = e),
                a.defineSkip(e.start),
                a.write(o),
                n.parser.lazy[e.start.line])
              ) {
                let e,
                  s,
                  d = a.events.length;
                for (; d--; )
                  if (
                    a.events[d][1].start.offset < l &&
                    (!a.events[d][1].end || a.events[d][1].end.offset > l)
                  )
                    return;
                let o = n.events.length,
                  c = o;
                for (; c--; )
                  if (
                    "exit" === n.events[c][0] &&
                    "chunkFlow" === n.events[c][1].type
                  ) {
                    if (e) {
                      s = n.events[c][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (D(t), d = o; d < n.events.length; )
                  (n.events[d][1].end = { ...s }), d++;
                (0, eu.m)(n.events, c + 1, 0, n.events.slice(o)),
                  (n.events.length = d);
              }
            }
            function D(a) {
              let s = d.length;
              for (; s-- > a; ) {
                let a = d[s];
                (n.containerState = a[1]), a[0].exit.call(n, e);
              }
              d.length = a;
            }
            function A() {
              a.write([null]),
                (s = void 0),
                (a = void 0),
                (n.containerState._closeFlow = void 0);
            }
          },
        },
        eS = {
          tokenize: function (e, a, s) {
            return (0, ep.N)(
              e,
              e.attempt(this.parser.constructs.document, a, s),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        };
      var ex = s(1147);
      let eB = {
          resolve: function (e) {
            return eI(e), e;
          },
          tokenize: function (e, a) {
            let s;
            return function (a) {
              return (
                e.enter("content"),
                (s = e.enter("chunkContent", { contentType: "content" })),
                l(a)
              );
            };
            function l(a) {
              return null === a
                ? n(a)
                : (0, ey.HP)(a)
                ? e.check(eM, d, n)(a)
                : (e.consume(a), l);
            }
            function n(s) {
              return e.exit("chunkContent"), e.exit("content"), a(s);
            }
            function d(a) {
              return (
                e.consume(a),
                e.exit("chunkContent"),
                (s.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: s,
                })),
                (s = s.next),
                l
              );
            }
          },
        },
        eM = {
          partial: !0,
          tokenize: function (e, a, s) {
            let l = this;
            return function (a) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(a),
                e.exit("lineEnding"),
                (0, ep.N)(e, n, "linePrefix")
              );
            };
            function n(n) {
              if (null === n || (0, ey.HP)(n)) return s(n);
              let d = l.events[l.events.length - 1];
              return !l.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                d &&
                "linePrefix" === d[1].type &&
                d[2].sliceSerialize(d[1], !0).length >= 4
                ? a(n)
                : e.interrupt(l.parser.constructs.flow, s, a)(n);
            }
          },
        },
        eR = {
          tokenize: function (e) {
            let a = this,
              s = e.attempt(
                ex.B,
                function (l) {
                  return null === l
                    ? void e.consume(l)
                    : (e.enter("lineEndingBlank"),
                      e.consume(l),
                      e.exit("lineEndingBlank"),
                      (a.currentConstruct = void 0),
                      s);
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  l,
                  (0, ep.N)(
                    e,
                    e.attempt(this.parser.constructs.flow, l, e.attempt(eB, l)),
                    "linePrefix"
                  )
                )
              );
            return s;
            function l(l) {
              return null === l
                ? void e.consume(l)
                : (e.enter("lineEnding"),
                  e.consume(l),
                  e.exit("lineEnding"),
                  (a.currentConstruct = void 0),
                  s);
            }
          },
        },
        eg = { resolveAll: eO() },
        eL = ek("string"),
        eh = ek("text");
      function ek(e) {
        return {
          resolveAll: eO("text" === e ? eU : void 0),
          tokenize: function (a) {
            let s = this,
              l = this.parser.constructs[e],
              n = a.attempt(l, d, t);
            return d;
            function d(e) {
              return c(e) ? n(e) : t(e);
            }
            function t(e) {
              return null === e
                ? void a.consume(e)
                : (a.enter("data"), a.consume(e), o);
            }
            function o(e) {
              return c(e) ? (a.exit("data"), n(e)) : (a.consume(e), o);
            }
            function c(e) {
              if (null === e) return !0;
              let a = l[e],
                n = -1;
              if (a)
                for (; ++n < a.length; ) {
                  let e = a[n];
                  if (!e.previous || e.previous.call(s, s.previous)) return !0;
                }
              return !1;
            }
          },
        };
      }
      function eO(e) {
        return function (a, s) {
          let l,
            n = -1;
          for (; ++n <= a.length; )
            void 0 === l
              ? a[n] && "data" === a[n][1].type && ((l = n), n++)
              : (a[n] && "data" === a[n][1].type) ||
                (n !== l + 2 &&
                  ((a[l][1].end = a[n - 1][1].end),
                  a.splice(l + 2, n - l - 2),
                  (n = l + 2)),
                (l = void 0));
          return e ? e(a, s) : a;
        };
      }
      function eU(e, a) {
        let s = 0;
        for (; ++s <= e.length; )
          if (
            (s === e.length || "lineEnding" === e[s][1].type) &&
            "data" === e[s - 1][1].type
          ) {
            let l,
              n = e[s - 1][1],
              d = a.sliceStream(n),
              t = d.length,
              o = -1,
              c = 0;
            for (; t--; ) {
              let e = d[t];
              if ("string" == typeof e) {
                for (o = e.length; 32 === e.charCodeAt(o - 1); ) c++, o--;
                if (o) break;
                o = -1;
              } else if (-2 === e) (l = !0), c++;
              else if (-1 === e);
              else {
                t++;
                break;
              }
            }
            if ((a._contentTypeTextTrailing && s === e.length && (c = 0), c)) {
              let d = {
                type:
                  s === e.length || l || c < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  _bufferIndex: t ? o : n.start._bufferIndex + o,
                  _index: n.start._index + t,
                  line: n.end.line,
                  column: n.end.column - c,
                  offset: n.end.offset - c,
                },
                end: { ...n.end },
              };
              (n.end = { ...d.start }),
                n.start.offset === n.end.offset
                  ? Object.assign(n, d)
                  : (e.splice(s, 0, ["enter", d, a], ["exit", d, a]), (s += 2));
            }
            s++;
          }
        return e;
      }
      let eF = {
          name: "thematicBreak",
          tokenize: function (e, a, s) {
            let l,
              n = 0;
            return function (d) {
              var t;
              return (
                e.enter("thematicBreak"),
                (l = t = d),
                (function d(t) {
                  return t === l
                    ? (e.enter("thematicBreakSequence"),
                      (function a(s) {
                        return s === l
                          ? (e.consume(s), n++, a)
                          : (e.exit("thematicBreakSequence"),
                            (0, ey.On)(s)
                              ? (0, ep.N)(e, d, "whitespace")(s)
                              : d(s));
                      })(t))
                    : n >= 3 && (null === t || (0, ey.HP)(t))
                    ? (e.exit("thematicBreak"), a(t))
                    : s(t);
                })(t)
              );
            };
          },
        },
        eN = {
          continuation: {
            tokenize: function (e, a, s) {
              let l = this;
              return (
                (l.containerState._closeFlow = void 0),
                e.check(
                  ex.B,
                  function (s) {
                    return (
                      (l.containerState.furtherBlankLines =
                        l.containerState.furtherBlankLines ||
                        l.containerState.initialBlankLine),
                      (0, ep.N)(
                        e,
                        a,
                        "listItemIndent",
                        l.containerState.size + 1
                      )(s)
                    );
                  },
                  function (s) {
                    return l.containerState.furtherBlankLines || !(0, ey.On)(s)
                      ? ((l.containerState.furtherBlankLines = void 0),
                        (l.containerState.initialBlankLine = void 0),
                        n(s))
                      : ((l.containerState.furtherBlankLines = void 0),
                        (l.containerState.initialBlankLine = void 0),
                        e.attempt(eW, a, n)(s));
                  }
                )
              );
              function n(n) {
                return (
                  (l.containerState._closeFlow = !0),
                  (l.interrupt = void 0),
                  (0, ep.N)(
                    e,
                    e.attempt(eN, a, s),
                    "linePrefix",
                    l.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(n)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
          name: "list",
          tokenize: function (e, a, s) {
            let l = this,
              n = l.events[l.events.length - 1],
              d =
                n && "linePrefix" === n[1].type
                  ? n[2].sliceSerialize(n[1], !0).length
                  : 0,
              t = 0;
            return function (a) {
              let n =
                l.containerState.type ||
                (42 === a || 43 === a || 45 === a
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === n
                  ? !l.containerState.marker || a === l.containerState.marker
                  : (0, ey.BM)(a)
              ) {
                if (
                  (l.containerState.type ||
                    ((l.containerState.type = n),
                    e.enter(n, { _container: !0 })),
                  "listUnordered" === n)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === a || 45 === a ? e.check(eF, s, o)(a) : o(a)
                  );
                if (!l.interrupt || 49 === a)
                  return (
                    e.enter("listItemPrefix"),
                    e.enter("listItemValue"),
                    (function a(n) {
                      return (0, ey.BM)(n) && ++t < 10
                        ? (e.consume(n), a)
                        : (!l.interrupt || t < 2) &&
                          (l.containerState.marker
                            ? n === l.containerState.marker
                            : 41 === n || 46 === n)
                        ? (e.exit("listItemValue"), o(n))
                        : s(n);
                    })(a)
                  );
              }
              return s(a);
            };
            function o(a) {
              return (
                e.enter("listItemMarker"),
                e.consume(a),
                e.exit("listItemMarker"),
                (l.containerState.marker = l.containerState.marker || a),
                e.check(ex.B, l.interrupt ? s : c, e.attempt(eH, r, i))
              );
            }
            function c(e) {
              return (l.containerState.initialBlankLine = !0), d++, r(e);
            }
            function i(a) {
              return (0, ey.On)(a)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(a),
                  e.exit("listItemPrefixWhitespace"),
                  r)
                : s(a);
            }
            function r(s) {
              return (
                (l.containerState.size =
                  d + l.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                a(s)
              );
            }
          },
        },
        eH = {
          partial: !0,
          tokenize: function (e, a, s) {
            let l = this;
            return (0, ep.N)(
              e,
              function (e) {
                let n = l.events[l.events.length - 1];
                return !(0, ey.On)(e) &&
                  n &&
                  "listItemPrefixWhitespace" === n[1].type
                  ? a(e)
                  : s(e);
              },
              "listItemPrefixWhitespace",
              l.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
        },
        eW = {
          partial: !0,
          tokenize: function (e, a, s) {
            let l = this;
            return (0, ep.N)(
              e,
              function (e) {
                let n = l.events[l.events.length - 1];
                return n &&
                  "listItemIndent" === n[1].type &&
                  n[2].sliceSerialize(n[1], !0).length === l.containerState.size
                  ? a(e)
                  : s(e);
              },
              "listItemIndent",
              l.containerState.size + 1
            );
          },
        },
        ew = {
          continuation: {
            tokenize: function (e, a, s) {
              let l = this;
              return function (a) {
                return (0, ey.On)(a)
                  ? (0, ep.N)(
                      e,
                      n,
                      "linePrefix",
                      l.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(a)
                  : n(a);
              };
              function n(l) {
                return e.attempt(ew, a, s)(l);
              }
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
          name: "blockQuote",
          tokenize: function (e, a, s) {
            let l = this;
            return function (a) {
              if (62 === a) {
                let s = l.containerState;
                return (
                  s.open ||
                    (e.enter("blockQuote", { _container: !0 }), (s.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(a),
                  e.exit("blockQuoteMarker"),
                  n
                );
              }
              return s(a);
            };
            function n(s) {
              return (0, ey.On)(s)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(s),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  a)
                : (e.exit("blockQuotePrefix"), a(s));
            }
          },
        };
      function eY(e, a, s, l, n, d, t, o, c) {
        let i = c || 1 / 0,
          r = 0;
        return function (a) {
          return 60 === a
            ? (e.enter(l), e.enter(n), e.enter(d), e.consume(a), e.exit(d), b)
            : null === a || 32 === a || 41 === a || (0, ey.JQ)(a)
            ? s(a)
            : (e.enter(l),
              e.enter(t),
              e.enter(o),
              e.enter("chunkString", { contentType: "string" }),
              E(a));
        };
        function b(s) {
          return 62 === s
            ? (e.enter(d), e.consume(s), e.exit(d), e.exit(n), e.exit(l), a)
            : (e.enter(o),
              e.enter("chunkString", { contentType: "string" }),
              f(s));
        }
        function f(a) {
          return 62 === a
            ? (e.exit("chunkString"), e.exit(o), b(a))
            : null === a || 60 === a || (0, ey.HP)(a)
            ? s(a)
            : (e.consume(a), 92 === a ? m : f);
        }
        function m(a) {
          return 60 === a || 62 === a || 92 === a ? (e.consume(a), f) : f(a);
        }
        function E(n) {
          return !r && (null === n || 41 === n || (0, ey.Ee)(n))
            ? (e.exit("chunkString"), e.exit(o), e.exit(t), e.exit(l), a(n))
            : r < i && 40 === n
            ? (e.consume(n), r++, E)
            : 41 === n
            ? (e.consume(n), r--, E)
            : null === n || 32 === n || 40 === n || (0, ey.JQ)(n)
            ? s(n)
            : (e.consume(n), 92 === n ? u : E);
        }
        function u(a) {
          return 40 === a || 41 === a || 92 === a ? (e.consume(a), E) : E(a);
        }
      }
      function eG(e, a, s, l, n, d) {
        let t,
          o = this,
          c = 0;
        return function (a) {
          return e.enter(l), e.enter(n), e.consume(a), e.exit(n), e.enter(d), i;
        };
        function i(b) {
          return c > 999 ||
            null === b ||
            91 === b ||
            (93 === b && !t) ||
            (94 === b && !c && "_hiddenFootnoteSupport" in o.parser.constructs)
            ? s(b)
            : 93 === b
            ? (e.exit(d), e.enter(n), e.consume(b), e.exit(n), e.exit(l), a)
            : (0, ey.HP)(b)
            ? (e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), i)
            : (e.enter("chunkString", { contentType: "string" }), r(b));
        }
        function r(a) {
          return null === a ||
            91 === a ||
            93 === a ||
            (0, ey.HP)(a) ||
            c++ > 999
            ? (e.exit("chunkString"), i(a))
            : (e.consume(a), t || (t = !(0, ey.On)(a)), 92 === a ? b : r);
        }
        function b(a) {
          return 91 === a || 92 === a || 93 === a
            ? (e.consume(a), c++, r)
            : r(a);
        }
      }
      function ev(e, a, s, l, n, d) {
        let t;
        return function (a) {
          return 34 === a || 39 === a || 40 === a
            ? (e.enter(l),
              e.enter(n),
              e.consume(a),
              e.exit(n),
              (t = 40 === a ? 41 : a),
              o)
            : s(a);
        };
        function o(s) {
          return s === t
            ? (e.enter(n), e.consume(s), e.exit(n), e.exit(l), a)
            : (e.enter(d), c(s));
        }
        function c(a) {
          return a === t
            ? (e.exit(d), o(t))
            : null === a
            ? s(a)
            : (0, ey.HP)(a)
            ? (e.enter("lineEnding"),
              e.consume(a),
              e.exit("lineEnding"),
              (0, ep.N)(e, c, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), i(a));
        }
        function i(a) {
          return a === t || null === a || (0, ey.HP)(a)
            ? (e.exit("chunkString"), c(a))
            : (e.consume(a), 92 === a ? r : i);
        }
        function r(a) {
          return a === t || 92 === a ? (e.consume(a), i) : i(a);
        }
      }
      function eV(e, a) {
        let s;
        return function l(n) {
          return (0, ey.HP)(n)
            ? (e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              (s = !0),
              l)
            : (0, ey.On)(n)
            ? (0, ep.N)(e, l, s ? "linePrefix" : "lineSuffix")(n)
            : a(n);
        };
      }
      var e_ = s(5846);
      let eQ = {
          partial: !0,
          tokenize: function (e, a, s) {
            return function (a) {
              return (0, ey.Ee)(a) ? eV(e, l)(a) : s(a);
            };
            function l(a) {
              return ev(
                e,
                n,
                s,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString"
              )(a);
            }
            function n(a) {
              return (0, ey.On)(a) ? (0, ep.N)(e, d, "whitespace")(a) : d(a);
            }
            function d(e) {
              return null === e || (0, ey.HP)(e) ? a(e) : s(e);
            }
          },
        },
        ez = {
          name: "codeIndented",
          tokenize: function (e, a, s) {
            let l = this;
            return function (a) {
              return (
                e.enter("codeIndented"), (0, ep.N)(e, n, "linePrefix", 5)(a)
              );
            };
            function n(a) {
              let n = l.events[l.events.length - 1];
              return n &&
                "linePrefix" === n[1].type &&
                n[2].sliceSerialize(n[1], !0).length >= 4
                ? (function a(s) {
                    return null === s
                      ? d(s)
                      : (0, ey.HP)(s)
                      ? e.attempt(eJ, a, d)(s)
                      : (e.enter("codeFlowValue"),
                        (function s(l) {
                          return null === l || (0, ey.HP)(l)
                            ? (e.exit("codeFlowValue"), a(l))
                            : (e.consume(l), s);
                        })(s));
                  })(a)
                : s(a);
            }
            function d(s) {
              return e.exit("codeIndented"), a(s);
            }
          },
        },
        eJ = {
          partial: !0,
          tokenize: function (e, a, s) {
            let l = this;
            return n;
            function n(a) {
              return l.parser.lazy[l.now().line]
                ? s(a)
                : (0, ey.HP)(a)
                ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), n)
                : (0, ep.N)(e, d, "linePrefix", 5)(a);
            }
            function d(e) {
              let d = l.events[l.events.length - 1];
              return d &&
                "linePrefix" === d[1].type &&
                d[2].sliceSerialize(d[1], !0).length >= 4
                ? a(e)
                : (0, ey.HP)(e)
                ? n(e)
                : s(e);
            }
          },
        },
        ej = {
          name: "setextUnderline",
          resolveTo: function (e, a) {
            let s,
              l,
              n,
              d = e.length;
            for (; d--; )
              if ("enter" === e[d][0]) {
                if ("content" === e[d][1].type) {
                  s = d;
                  break;
                }
                "paragraph" === e[d][1].type && (l = d);
              } else
                "content" === e[d][1].type && e.splice(d, 1),
                  n || "definition" !== e[d][1].type || (n = d);
            let t = {
              type: "setextHeading",
              start: { ...e[s][1].start },
              end: { ...e[e.length - 1][1].end },
            };
            return (
              (e[l][1].type = "setextHeadingText"),
              n
                ? (e.splice(l, 0, ["enter", t, a]),
                  e.splice(n + 1, 0, ["exit", e[s][1], a]),
                  (e[s][1].end = { ...e[n][1].end }))
                : (e[s][1] = t),
              e.push(["exit", t, a]),
              e
            );
          },
          tokenize: function (e, a, s) {
            let l,
              n = this;
            return function (a) {
              var t;
              let o,
                c = n.events.length;
              for (; c--; )
                if (
                  "lineEnding" !== n.events[c][1].type &&
                  "linePrefix" !== n.events[c][1].type &&
                  "content" !== n.events[c][1].type
                ) {
                  o = "paragraph" === n.events[c][1].type;
                  break;
                }
              return !n.parser.lazy[n.now().line] && (n.interrupt || o)
                ? (e.enter("setextHeadingLine"),
                  (l = a),
                  (t = a),
                  e.enter("setextHeadingLineSequence"),
                  (function a(s) {
                    return s === l
                      ? (e.consume(s), a)
                      : (e.exit("setextHeadingLineSequence"),
                        (0, ey.On)(s)
                          ? (0, ep.N)(e, d, "lineSuffix")(s)
                          : d(s));
                  })(t))
                : s(a);
            };
            function d(l) {
              return null === l || (0, ey.HP)(l)
                ? (e.exit("setextHeadingLine"), a(l))
                : s(l);
            }
          },
        },
        eZ = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        eX = ["pre", "script", "style", "textarea"],
        eq = {
          partial: !0,
          tokenize: function (e, a, s) {
            return function (l) {
              return (
                e.enter("lineEnding"),
                e.consume(l),
                e.exit("lineEnding"),
                e.attempt(ex.B, a, s)
              );
            };
          },
        },
        eK = {
          partial: !0,
          tokenize: function (e, a, s) {
            let l = this;
            return function (a) {
              return (0, ey.HP)(a)
                ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), n)
                : s(a);
            };
            function n(e) {
              return l.parser.lazy[l.now().line] ? s(e) : a(e);
            }
          },
        },
        e$ = {
          partial: !0,
          tokenize: function (e, a, s) {
            let l = this;
            return function (a) {
              return null === a
                ? s(a)
                : (e.enter("lineEnding"),
                  e.consume(a),
                  e.exit("lineEnding"),
                  n);
            };
            function n(e) {
              return l.parser.lazy[l.now().line] ? s(e) : a(e);
            }
          },
        },
        e0 = {
          concrete: !0,
          name: "codeFenced",
          tokenize: function (e, a, s) {
            let l,
              n = this,
              d = {
                partial: !0,
                tokenize: function (e, a, s) {
                  let d = 0;
                  return function (a) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(a),
                      e.exit("lineEnding"),
                      t
                    );
                  };
                  function t(a) {
                    return (
                      e.enter("codeFencedFence"),
                      (0, ey.On)(a)
                        ? (0, ep.N)(
                            e,
                            c,
                            "linePrefix",
                            n.parser.constructs.disable.null.includes(
                              "codeIndented"
                            )
                              ? void 0
                              : 4
                          )(a)
                        : c(a)
                    );
                  }
                  function c(a) {
                    return a === l
                      ? (e.enter("codeFencedFenceSequence"),
                        (function a(n) {
                          return n === l
                            ? (d++, e.consume(n), a)
                            : d >= o
                            ? (e.exit("codeFencedFenceSequence"),
                              (0, ey.On)(n)
                                ? (0, ep.N)(e, i, "whitespace")(n)
                                : i(n))
                            : s(n);
                        })(a))
                      : s(a);
                  }
                  function i(l) {
                    return null === l || (0, ey.HP)(l)
                      ? (e.exit("codeFencedFence"), a(l))
                      : s(l);
                  }
                },
              },
              t = 0,
              o = 0;
            return function (a) {
              var d = a;
              let i = n.events[n.events.length - 1];
              return (
                (t =
                  i && "linePrefix" === i[1].type
                    ? i[2].sliceSerialize(i[1], !0).length
                    : 0),
                (l = d),
                e.enter("codeFenced"),
                e.enter("codeFencedFence"),
                e.enter("codeFencedFenceSequence"),
                (function a(n) {
                  return n === l
                    ? (o++, e.consume(n), a)
                    : o < 3
                    ? s(n)
                    : (e.exit("codeFencedFenceSequence"),
                      (0, ey.On)(n) ? (0, ep.N)(e, c, "whitespace")(n) : c(n));
                })(d)
              );
            };
            function c(d) {
              return null === d || (0, ey.HP)(d)
                ? (e.exit("codeFencedFence"),
                  n.interrupt ? a(d) : e.check(e$, r, E)(d))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function a(n) {
                    return null === n || (0, ey.HP)(n)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        c(n))
                      : (0, ey.On)(n)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        (0, ep.N)(e, i, "whitespace")(n))
                      : 96 === n && n === l
                      ? s(n)
                      : (e.consume(n), a);
                  })(d));
            }
            function i(a) {
              return null === a || (0, ey.HP)(a)
                ? c(a)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function a(n) {
                    return null === n || (0, ey.HP)(n)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        c(n))
                      : 96 === n && n === l
                      ? s(n)
                      : (e.consume(n), a);
                  })(a));
            }
            function r(a) {
              return e.attempt(d, E, b)(a);
            }
            function b(a) {
              return (
                e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), f
              );
            }
            function f(a) {
              return t > 0 && (0, ey.On)(a)
                ? (0, ep.N)(e, m, "linePrefix", t + 1)(a)
                : m(a);
            }
            function m(a) {
              return null === a || (0, ey.HP)(a)
                ? e.check(e$, r, E)(a)
                : (e.enter("codeFlowValue"),
                  (function a(s) {
                    return null === s || (0, ey.HP)(s)
                      ? (e.exit("codeFlowValue"), m(s))
                      : (e.consume(s), a);
                  })(a));
            }
            function E(s) {
              return e.exit("codeFenced"), a(s);
            }
          },
        },
        e2 = document.createElement("i");
      function e1(e) {
        let a = "&" + e + ";";
        e2.innerHTML = a;
        let s = e2.textContent;
        return (
          (59 !== s.charCodeAt(s.length - 1) || "semi" === e) && s !== a && s
        );
      }
      let e8 = {
          name: "characterReference",
          tokenize: function (e, a, s) {
            let l,
              n,
              d = this,
              t = 0;
            return function (a) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(a),
                e.exit("characterReferenceMarker"),
                o
              );
            };
            function o(a) {
              return 35 === a
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(a),
                  e.exit("characterReferenceMarkerNumeric"),
                  c)
                : (e.enter("characterReferenceValue"),
                  (l = 31),
                  (n = ey.lV),
                  i(a));
            }
            function c(a) {
              return 88 === a || 120 === a
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(a),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (l = 6),
                  (n = ey.ok),
                  i)
                : (e.enter("characterReferenceValue"),
                  (l = 7),
                  (n = ey.BM),
                  i(a));
            }
            function i(o) {
              if (59 === o && t) {
                let l = e.exit("characterReferenceValue");
                return n !== ey.lV || e1(d.sliceSerialize(l))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(o),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    a)
                  : s(o);
              }
              return n(o) && t++ < l ? (e.consume(o), i) : s(o);
            }
          },
        },
        e4 = {
          name: "characterEscape",
          tokenize: function (e, a, s) {
            return function (a) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(a),
                e.exit("escapeMarker"),
                l
              );
            };
            function l(l) {
              return (0, ey.ol)(l)
                ? (e.enter("characterEscapeValue"),
                  e.consume(l),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  a)
                : s(l);
            }
          },
        },
        e5 = {
          name: "lineEnding",
          tokenize: function (e, a) {
            return function (s) {
              return (
                e.enter("lineEnding"),
                e.consume(s),
                e.exit("lineEnding"),
                (0, ep.N)(e, a, "linePrefix")
              );
            };
          },
        };
      var e6 = s(6900);
      let e3 = {
          name: "labelEnd",
          resolveAll: function (e) {
            let a = -1,
              s = [];
            for (; ++a < e.length; ) {
              let l = e[a][1];
              if (
                (s.push(e[a]),
                "labelImage" === l.type ||
                  "labelLink" === l.type ||
                  "labelEnd" === l.type)
              ) {
                let e = "labelImage" === l.type ? 4 : 2;
                (l.type = "data"), (a += e);
              }
            }
            return e.length !== s.length && (0, eu.m)(e, 0, e.length, s), e;
          },
          resolveTo: function (e, a) {
            let s,
              l,
              n,
              d,
              t = e.length,
              o = 0;
            for (; t--; )
              if (((s = e[t][1]), l)) {
                if (
                  "link" === s.type ||
                  ("labelLink" === s.type && s._inactive)
                )
                  break;
                "enter" === e[t][0] &&
                  "labelLink" === s.type &&
                  (s._inactive = !0);
              } else if (n) {
                if (
                  "enter" === e[t][0] &&
                  ("labelImage" === s.type || "labelLink" === s.type) &&
                  !s._balanced &&
                  ((l = t), "labelLink" !== s.type)
                ) {
                  o = 2;
                  break;
                }
              } else "labelEnd" === s.type && (n = t);
            let c = {
                type: "labelLink" === e[l][1].type ? "link" : "image",
                start: { ...e[l][1].start },
                end: { ...e[e.length - 1][1].end },
              },
              i = {
                type: "label",
                start: { ...e[l][1].start },
                end: { ...e[n][1].end },
              },
              r = {
                type: "labelText",
                start: { ...e[l + o + 2][1].end },
                end: { ...e[n - 2][1].start },
              };
            return (
              (d = [
                ["enter", c, a],
                ["enter", i, a],
              ]),
              (d = (0, eu.V)(d, e.slice(l + 1, l + o + 3))),
              (d = (0, eu.V)(d, [["enter", r, a]])),
              (d = (0, eu.V)(
                d,
                (0, e6.W)(
                  a.parser.constructs.insideSpan.null,
                  e.slice(l + o + 4, n - 3),
                  a
                )
              )),
              (d = (0, eu.V)(d, [
                ["exit", r, a],
                e[n - 2],
                e[n - 1],
                ["exit", i, a],
              ])),
              (d = (0, eu.V)(d, e.slice(n + 1))),
              (d = (0, eu.V)(d, [["exit", c, a]])),
              (0, eu.m)(e, l, e.length, d),
              e
            );
          },
          tokenize: function (e, a, s) {
            let l,
              n,
              d = this,
              t = d.events.length;
            for (; t--; )
              if (
                ("labelImage" === d.events[t][1].type ||
                  "labelLink" === d.events[t][1].type) &&
                !d.events[t][1]._balanced
              ) {
                l = d.events[t][1];
                break;
              }
            return function (a) {
              return l
                ? l._inactive
                  ? r(a)
                  : ((n = d.parser.defined.includes(
                      (0, e_.B)(
                        d.sliceSerialize({ start: l.end, end: d.now() })
                      )
                    )),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(a),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    o)
                : s(a);
            };
            function o(a) {
              return 40 === a
                ? e.attempt(e9, i, n ? i : r)(a)
                : 91 === a
                ? e.attempt(e7, i, n ? c : r)(a)
                : n
                ? i(a)
                : r(a);
            }
            function c(a) {
              return e.attempt(ae, i, r)(a);
            }
            function i(e) {
              return a(e);
            }
            function r(e) {
              return (l._balanced = !0), s(e);
            }
          },
        },
        e9 = {
          tokenize: function (e, a, s) {
            return function (a) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(a),
                e.exit("resourceMarker"),
                l
              );
            };
            function l(a) {
              return (0, ey.Ee)(a) ? eV(e, n)(a) : n(a);
            }
            function n(a) {
              return 41 === a
                ? i(a)
                : eY(
                    e,
                    d,
                    t,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(a);
            }
            function d(a) {
              return (0, ey.Ee)(a) ? eV(e, o)(a) : i(a);
            }
            function t(e) {
              return s(e);
            }
            function o(a) {
              return 34 === a || 39 === a || 40 === a
                ? ev(
                    e,
                    c,
                    s,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(a)
                : i(a);
            }
            function c(a) {
              return (0, ey.Ee)(a) ? eV(e, i)(a) : i(a);
            }
            function i(l) {
              return 41 === l
                ? (e.enter("resourceMarker"),
                  e.consume(l),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  a)
                : s(l);
            }
          },
        },
        e7 = {
          tokenize: function (e, a, s) {
            let l = this;
            return function (a) {
              return eG.call(
                l,
                e,
                n,
                d,
                "reference",
                "referenceMarker",
                "referenceString"
              )(a);
            };
            function n(e) {
              return l.parser.defined.includes(
                (0, e_.B)(
                  l
                    .sliceSerialize(l.events[l.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? a(e)
                : s(e);
            }
            function d(e) {
              return s(e);
            }
          },
        },
        ae = {
          tokenize: function (e, a, s) {
            return function (a) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(a),
                e.exit("referenceMarker"),
                l
              );
            };
            function l(l) {
              return 93 === l
                ? (e.enter("referenceMarker"),
                  e.consume(l),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  a)
                : s(l);
            }
          },
        },
        aa = {
          name: "labelStartImage",
          resolveAll: e3.resolveAll,
          tokenize: function (e, a, s) {
            let l = this;
            return function (a) {
              return (
                e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(a),
                e.exit("labelImageMarker"),
                n
              );
            };
            function n(a) {
              return 91 === a
                ? (e.enter("labelMarker"),
                  e.consume(a),
                  e.exit("labelMarker"),
                  e.exit("labelImage"),
                  d)
                : s(a);
            }
            function d(e) {
              return 94 === e && "_hiddenFootnoteSupport" in l.parser.constructs
                ? s(e)
                : a(e);
            }
          },
        };
      var as = s(784);
      let al = {
        name: "attention",
        resolveAll: function (e, a) {
          let s,
            l,
            n,
            d,
            t,
            o,
            c,
            i,
            r = -1;
          for (; ++r < e.length; )
            if (
              "enter" === e[r][0] &&
              "attentionSequence" === e[r][1].type &&
              e[r][1]._close
            ) {
              for (s = r; s--; )
                if (
                  "exit" === e[s][0] &&
                  "attentionSequence" === e[s][1].type &&
                  e[s][1]._open &&
                  a.sliceSerialize(e[s][1]).charCodeAt(0) ===
                    a.sliceSerialize(e[r][1]).charCodeAt(0)
                ) {
                  if (
                    (e[s][1]._close || e[r][1]._open) &&
                    (e[r][1].end.offset - e[r][1].start.offset) % 3 &&
                    !(
                      (e[s][1].end.offset -
                        e[s][1].start.offset +
                        e[r][1].end.offset -
                        e[r][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  o =
                    e[s][1].end.offset - e[s][1].start.offset > 1 &&
                    e[r][1].end.offset - e[r][1].start.offset > 1
                      ? 2
                      : 1;
                  let b = { ...e[s][1].end },
                    f = { ...e[r][1].start };
                  an(b, -o),
                    an(f, o),
                    (d = {
                      type: o > 1 ? "strongSequence" : "emphasisSequence",
                      start: b,
                      end: { ...e[s][1].end },
                    }),
                    (t = {
                      type: o > 1 ? "strongSequence" : "emphasisSequence",
                      start: { ...e[r][1].start },
                      end: f,
                    }),
                    (n = {
                      type: o > 1 ? "strongText" : "emphasisText",
                      start: { ...e[s][1].end },
                      end: { ...e[r][1].start },
                    }),
                    (l = {
                      type: o > 1 ? "strong" : "emphasis",
                      start: { ...d.start },
                      end: { ...t.end },
                    }),
                    (e[s][1].end = { ...d.start }),
                    (e[r][1].start = { ...t.end }),
                    (c = []),
                    e[s][1].end.offset - e[s][1].start.offset &&
                      (c = (0, eu.V)(c, [
                        ["enter", e[s][1], a],
                        ["exit", e[s][1], a],
                      ])),
                    (c = (0, eu.V)(c, [
                      ["enter", l, a],
                      ["enter", d, a],
                      ["exit", d, a],
                      ["enter", n, a],
                    ])),
                    (c = (0, eu.V)(
                      c,
                      (0, e6.W)(
                        a.parser.constructs.insideSpan.null,
                        e.slice(s + 1, r),
                        a
                      )
                    )),
                    (c = (0, eu.V)(c, [
                      ["exit", n, a],
                      ["enter", t, a],
                      ["exit", t, a],
                      ["exit", l, a],
                    ])),
                    e[r][1].end.offset - e[r][1].start.offset
                      ? ((i = 2),
                        (c = (0, eu.V)(c, [
                          ["enter", e[r][1], a],
                          ["exit", e[r][1], a],
                        ])))
                      : (i = 0),
                    (0, eu.m)(e, s - 1, r - s + 3, c),
                    (r = s + c.length - i - 2);
                  break;
                }
            }
          for (r = -1; ++r < e.length; )
            "attentionSequence" === e[r][1].type && (e[r][1].type = "data");
          return e;
        },
        tokenize: function (e, a) {
          let s,
            l = this.parser.constructs.attentionMarkers.null,
            n = this.previous,
            d = (0, as.S)(n);
          return function (t) {
            return (
              (s = t),
              e.enter("attentionSequence"),
              (function t(o) {
                if (o === s) return e.consume(o), t;
                let c = e.exit("attentionSequence"),
                  i = (0, as.S)(o),
                  r = !i || (2 === i && d) || l.includes(o),
                  b = !d || (2 === d && i) || l.includes(n);
                return (
                  (c._open = !!(42 === s ? r : r && (d || !b))),
                  (c._close = !!(42 === s ? b : b && (i || !r))),
                  a(o)
                );
              })(t)
            );
          };
        },
      };
      function an(e, a) {
        (e.column += a), (e.offset += a), (e._bufferIndex += a);
      }
      let ad = {
          name: "labelStartLink",
          resolveAll: e3.resolveAll,
          tokenize: function (e, a, s) {
            let l = this;
            return function (a) {
              return (
                e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(a),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                n
              );
            };
            function n(e) {
              return 94 === e && "_hiddenFootnoteSupport" in l.parser.constructs
                ? s(e)
                : a(e);
            }
          },
        },
        at = {
          42: eN,
          43: eN,
          45: eN,
          48: eN,
          49: eN,
          50: eN,
          51: eN,
          52: eN,
          53: eN,
          54: eN,
          55: eN,
          56: eN,
          57: eN,
          62: ew,
        },
        ao = {
          91: {
            name: "definition",
            tokenize: function (e, a, s) {
              let l,
                n = this;
              return function (a) {
                var l;
                return (
                  e.enter("definition"),
                  (l = a),
                  eG.call(
                    n,
                    e,
                    d,
                    s,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString"
                  )(l)
                );
              };
              function d(a) {
                return ((l = (0, e_.B)(
                  n
                    .sliceSerialize(n.events[n.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === a)
                  ? (e.enter("definitionMarker"),
                    e.consume(a),
                    e.exit("definitionMarker"),
                    t)
                  : s(a);
              }
              function t(a) {
                return (0, ey.Ee)(a) ? eV(e, o)(a) : o(a);
              }
              function o(a) {
                return eY(
                  e,
                  c,
                  s,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString"
                )(a);
              }
              function c(a) {
                return e.attempt(eQ, i, i)(a);
              }
              function i(a) {
                return (0, ey.On)(a) ? (0, ep.N)(e, r, "whitespace")(a) : r(a);
              }
              function r(d) {
                return null === d || (0, ey.HP)(d)
                  ? (e.exit("definition"), n.parser.defined.push(l), a(d))
                  : s(d);
              }
            },
          },
        },
        ac = { [-2]: ez, [-1]: ez, 32: ez },
        ai = {
          35: {
            name: "headingAtx",
            resolve: function (e, a) {
              let s,
                l,
                n = e.length - 2,
                d = 3;
              return (
                "whitespace" === e[3][1].type && (d += 2),
                n - 2 > d && "whitespace" === e[n][1].type && (n -= 2),
                "atxHeadingSequence" === e[n][1].type &&
                  (d === n - 1 ||
                    (n - 4 > d && "whitespace" === e[n - 2][1].type)) &&
                  (n -= d + 1 === n ? 2 : 4),
                n > d &&
                  ((s = {
                    type: "atxHeadingText",
                    start: e[d][1].start,
                    end: e[n][1].end,
                  }),
                  (l = {
                    type: "chunkText",
                    start: e[d][1].start,
                    end: e[n][1].end,
                    contentType: "text",
                  }),
                  (0, eu.m)(e, d, n - d + 1, [
                    ["enter", s, a],
                    ["enter", l, a],
                    ["exit", l, a],
                    ["exit", s, a],
                  ])),
                e
              );
            },
            tokenize: function (e, a, s) {
              let l = 0;
              return function (n) {
                var d;
                return (
                  e.enter("atxHeading"),
                  (d = n),
                  e.enter("atxHeadingSequence"),
                  (function n(d) {
                    return 35 === d && l++ < 6
                      ? (e.consume(d), n)
                      : null === d || (0, ey.Ee)(d)
                      ? (e.exit("atxHeadingSequence"),
                        (function s(l) {
                          return 35 === l
                            ? (e.enter("atxHeadingSequence"),
                              (function a(l) {
                                return 35 === l
                                  ? (e.consume(l), a)
                                  : (e.exit("atxHeadingSequence"), s(l));
                              })(l))
                            : null === l || (0, ey.HP)(l)
                            ? (e.exit("atxHeading"), a(l))
                            : (0, ey.On)(l)
                            ? (0, ep.N)(e, s, "whitespace")(l)
                            : (e.enter("atxHeadingText"),
                              (function a(l) {
                                return null === l || 35 === l || (0, ey.Ee)(l)
                                  ? (e.exit("atxHeadingText"), s(l))
                                  : (e.consume(l), a);
                              })(l));
                        })(d))
                      : s(d);
                  })(d)
                );
              };
            },
          },
          42: eF,
          45: [ej, eF],
          60: {
            concrete: !0,
            name: "htmlFlow",
            resolveTo: function (e) {
              let a = e.length;
              for (
                ;
                a-- && ("enter" !== e[a][0] || "htmlFlow" !== e[a][1].type);

              );
              return (
                a > 1 &&
                  "linePrefix" === e[a - 2][1].type &&
                  ((e[a][1].start = e[a - 2][1].start),
                  (e[a + 1][1].start = e[a - 2][1].start),
                  e.splice(a - 2, 2)),
                e
              );
            },
            tokenize: function (e, a, s) {
              let l,
                n,
                d,
                t,
                o,
                c = this;
              return function (a) {
                var s;
                return (
                  (s = a),
                  e.enter("htmlFlow"),
                  e.enter("htmlFlowData"),
                  e.consume(s),
                  i
                );
              };
              function i(t) {
                return 33 === t
                  ? (e.consume(t), r)
                  : 47 === t
                  ? (e.consume(t), (n = !0), m)
                  : 63 === t
                  ? (e.consume(t), (l = 3), c.interrupt ? a : k)
                  : (0, ey.CW)(t)
                  ? (e.consume(t), (d = String.fromCharCode(t)), E)
                  : s(t);
              }
              function r(n) {
                return 45 === n
                  ? (e.consume(n), (l = 2), b)
                  : 91 === n
                  ? (e.consume(n), (l = 5), (t = 0), f)
                  : (0, ey.CW)(n)
                  ? (e.consume(n), (l = 4), c.interrupt ? a : k)
                  : s(n);
              }
              function b(l) {
                return 45 === l ? (e.consume(l), c.interrupt ? a : k) : s(l);
              }
              function f(l) {
                let n = "CDATA[";
                return l === n.charCodeAt(t++)
                  ? (e.consume(l), t === n.length)
                    ? c.interrupt
                      ? a
                      : S
                    : f
                  : s(l);
              }
              function m(a) {
                return (0, ey.CW)(a)
                  ? (e.consume(a), (d = String.fromCharCode(a)), E)
                  : s(a);
              }
              function E(t) {
                if (null === t || 47 === t || 62 === t || (0, ey.Ee)(t)) {
                  let o = 47 === t,
                    i = d.toLowerCase();
                  return !o && !n && eX.includes(i)
                    ? ((l = 1), c.interrupt ? a(t) : S(t))
                    : eZ.includes(d.toLowerCase())
                    ? ((l = 6), o)
                      ? (e.consume(t), u)
                      : c.interrupt
                      ? a(t)
                      : S(t)
                    : ((l = 7),
                      c.interrupt && !c.parser.lazy[c.now().line]
                        ? s(t)
                        : n
                        ? (function a(s) {
                            return (0, ey.On)(s) ? (e.consume(s), a) : P(s);
                          })(t)
                        : D(t));
                }
                return 45 === t || (0, ey.lV)(t)
                  ? (e.consume(t), (d += String.fromCharCode(t)), E)
                  : s(t);
              }
              function u(l) {
                return 62 === l ? (e.consume(l), c.interrupt ? a : S) : s(l);
              }
              function D(a) {
                return 47 === a
                  ? (e.consume(a), P)
                  : 58 === a || 95 === a || (0, ey.CW)(a)
                  ? (e.consume(a), A)
                  : (0, ey.On)(a)
                  ? (e.consume(a), D)
                  : P(a);
              }
              function A(a) {
                return 45 === a ||
                  46 === a ||
                  58 === a ||
                  95 === a ||
                  (0, ey.lV)(a)
                  ? (e.consume(a), A)
                  : I(a);
              }
              function I(a) {
                return 61 === a
                  ? (e.consume(a), T)
                  : (0, ey.On)(a)
                  ? (e.consume(a), I)
                  : D(a);
              }
              function T(a) {
                return null === a ||
                  60 === a ||
                  61 === a ||
                  62 === a ||
                  96 === a
                  ? s(a)
                  : 34 === a || 39 === a
                  ? (e.consume(a), (o = a), p)
                  : (0, ey.On)(a)
                  ? (e.consume(a), T)
                  : (function a(s) {
                      return null === s ||
                        34 === s ||
                        39 === s ||
                        47 === s ||
                        60 === s ||
                        61 === s ||
                        62 === s ||
                        96 === s ||
                        (0, ey.Ee)(s)
                        ? I(s)
                        : (e.consume(s), a);
                    })(a);
              }
              function p(a) {
                return a === o
                  ? (e.consume(a), (o = null), y)
                  : null === a || (0, ey.HP)(a)
                  ? s(a)
                  : (e.consume(a), p);
              }
              function y(e) {
                return 47 === e || 62 === e || (0, ey.On)(e) ? D(e) : s(e);
              }
              function P(a) {
                return 62 === a ? (e.consume(a), C) : s(a);
              }
              function C(a) {
                return null === a || (0, ey.HP)(a)
                  ? S(a)
                  : (0, ey.On)(a)
                  ? (e.consume(a), C)
                  : s(a);
              }
              function S(a) {
                return 45 === a && 2 === l
                  ? (e.consume(a), R)
                  : 60 === a && 1 === l
                  ? (e.consume(a), g)
                  : 62 === a && 4 === l
                  ? (e.consume(a), O)
                  : 63 === a && 3 === l
                  ? (e.consume(a), k)
                  : 93 === a && 5 === l
                  ? (e.consume(a), h)
                  : (0, ey.HP)(a) && (6 === l || 7 === l)
                  ? (e.exit("htmlFlowData"), e.check(eq, U, x)(a))
                  : null === a || (0, ey.HP)(a)
                  ? (e.exit("htmlFlowData"), x(a))
                  : (e.consume(a), S);
              }
              function x(a) {
                return e.check(eK, B, U)(a);
              }
              function B(a) {
                return (
                  e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), M
                );
              }
              function M(a) {
                return null === a || (0, ey.HP)(a)
                  ? x(a)
                  : (e.enter("htmlFlowData"), S(a));
              }
              function R(a) {
                return 45 === a ? (e.consume(a), k) : S(a);
              }
              function g(a) {
                return 47 === a ? (e.consume(a), (d = ""), L) : S(a);
              }
              function L(a) {
                if (62 === a) {
                  let s = d.toLowerCase();
                  return eX.includes(s) ? (e.consume(a), O) : S(a);
                }
                return (0, ey.CW)(a) && d.length < 8
                  ? (e.consume(a), (d += String.fromCharCode(a)), L)
                  : S(a);
              }
              function h(a) {
                return 93 === a ? (e.consume(a), k) : S(a);
              }
              function k(a) {
                return 62 === a
                  ? (e.consume(a), O)
                  : 45 === a && 2 === l
                  ? (e.consume(a), k)
                  : S(a);
              }
              function O(a) {
                return null === a || (0, ey.HP)(a)
                  ? (e.exit("htmlFlowData"), U(a))
                  : (e.consume(a), O);
              }
              function U(s) {
                return e.exit("htmlFlow"), a(s);
              }
            },
          },
          61: ej,
          95: eF,
          96: e0,
          126: e0,
        },
        ar = { 38: e8, 92: e4 },
        ab = {
          [-5]: e5,
          [-4]: e5,
          [-3]: e5,
          33: aa,
          38: e8,
          42: al,
          60: [
            {
              name: "autolink",
              tokenize: function (e, a, s) {
                let l = 0;
                return function (a) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(a),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    n
                  );
                };
                function n(a) {
                  return (0, ey.CW)(a)
                    ? (e.consume(a), d)
                    : 64 === a
                    ? s(a)
                    : o(a);
                }
                function d(a) {
                  return 43 === a || 45 === a || 46 === a || (0, ey.lV)(a)
                    ? ((l = 1),
                      (function a(s) {
                        return 58 === s
                          ? (e.consume(s), (l = 0), t)
                          : (43 === s ||
                              45 === s ||
                              46 === s ||
                              (0, ey.lV)(s)) &&
                            l++ < 32
                          ? (e.consume(s), a)
                          : ((l = 0), o(s));
                      })(a))
                    : o(a);
                }
                function t(l) {
                  return 62 === l
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(l),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      a)
                    : null === l || 32 === l || 60 === l || (0, ey.JQ)(l)
                    ? s(l)
                    : (e.consume(l), t);
                }
                function o(a) {
                  return 64 === a
                    ? (e.consume(a), c)
                    : (0, ey.cx)(a)
                    ? (e.consume(a), o)
                    : s(a);
                }
                function c(n) {
                  return (0, ey.lV)(n)
                    ? (function n(d) {
                        return 46 === d
                          ? (e.consume(d), (l = 0), c)
                          : 62 === d
                          ? ((e.exit("autolinkProtocol").type =
                              "autolinkEmail"),
                            e.enter("autolinkMarker"),
                            e.consume(d),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            a)
                          : (function a(d) {
                              if ((45 === d || (0, ey.lV)(d)) && l++ < 63) {
                                let s = 45 === d ? a : n;
                                return e.consume(d), s;
                              }
                              return s(d);
                            })(d);
                      })(n)
                    : s(n);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, a, s) {
                let l,
                  n,
                  d,
                  t = this;
                return function (a) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(a),
                    o
                  );
                };
                function o(a) {
                  return 33 === a
                    ? (e.consume(a), c)
                    : 47 === a
                    ? (e.consume(a), p)
                    : 63 === a
                    ? (e.consume(a), I)
                    : (0, ey.CW)(a)
                    ? (e.consume(a), P)
                    : s(a);
                }
                function c(a) {
                  return 45 === a
                    ? (e.consume(a), i)
                    : 91 === a
                    ? (e.consume(a), (n = 0), m)
                    : (0, ey.CW)(a)
                    ? (e.consume(a), A)
                    : s(a);
                }
                function i(a) {
                  return 45 === a ? (e.consume(a), f) : s(a);
                }
                function r(a) {
                  return null === a
                    ? s(a)
                    : 45 === a
                    ? (e.consume(a), b)
                    : (0, ey.HP)(a)
                    ? ((d = r), L(a))
                    : (e.consume(a), r);
                }
                function b(a) {
                  return 45 === a ? (e.consume(a), f) : r(a);
                }
                function f(e) {
                  return 62 === e ? g(e) : 45 === e ? b(e) : r(e);
                }
                function m(a) {
                  let l = "CDATA[";
                  return a === l.charCodeAt(n++)
                    ? (e.consume(a), n === l.length ? E : m)
                    : s(a);
                }
                function E(a) {
                  return null === a
                    ? s(a)
                    : 93 === a
                    ? (e.consume(a), u)
                    : (0, ey.HP)(a)
                    ? ((d = E), L(a))
                    : (e.consume(a), E);
                }
                function u(a) {
                  return 93 === a ? (e.consume(a), D) : E(a);
                }
                function D(a) {
                  return 62 === a ? g(a) : 93 === a ? (e.consume(a), D) : E(a);
                }
                function A(a) {
                  return null === a || 62 === a
                    ? g(a)
                    : (0, ey.HP)(a)
                    ? ((d = A), L(a))
                    : (e.consume(a), A);
                }
                function I(a) {
                  return null === a
                    ? s(a)
                    : 63 === a
                    ? (e.consume(a), T)
                    : (0, ey.HP)(a)
                    ? ((d = I), L(a))
                    : (e.consume(a), I);
                }
                function T(e) {
                  return 62 === e ? g(e) : I(e);
                }
                function p(a) {
                  return (0, ey.CW)(a) ? (e.consume(a), y) : s(a);
                }
                function y(a) {
                  return 45 === a || (0, ey.lV)(a)
                    ? (e.consume(a), y)
                    : (function a(s) {
                        return (0, ey.HP)(s)
                          ? ((d = a), L(s))
                          : (0, ey.On)(s)
                          ? (e.consume(s), a)
                          : g(s);
                      })(a);
                }
                function P(a) {
                  return 45 === a || (0, ey.lV)(a)
                    ? (e.consume(a), P)
                    : 47 === a || 62 === a || (0, ey.Ee)(a)
                    ? C(a)
                    : s(a);
                }
                function C(a) {
                  return 47 === a
                    ? (e.consume(a), g)
                    : 58 === a || 95 === a || (0, ey.CW)(a)
                    ? (e.consume(a), S)
                    : (0, ey.HP)(a)
                    ? ((d = C), L(a))
                    : (0, ey.On)(a)
                    ? (e.consume(a), C)
                    : g(a);
                }
                function S(a) {
                  return 45 === a ||
                    46 === a ||
                    58 === a ||
                    95 === a ||
                    (0, ey.lV)(a)
                    ? (e.consume(a), S)
                    : (function a(s) {
                        return 61 === s
                          ? (e.consume(s), x)
                          : (0, ey.HP)(s)
                          ? ((d = a), L(s))
                          : (0, ey.On)(s)
                          ? (e.consume(s), a)
                          : C(s);
                      })(a);
                }
                function x(a) {
                  return null === a ||
                    60 === a ||
                    61 === a ||
                    62 === a ||
                    96 === a
                    ? s(a)
                    : 34 === a || 39 === a
                    ? (e.consume(a), (l = a), B)
                    : (0, ey.HP)(a)
                    ? ((d = x), L(a))
                    : (0, ey.On)(a)
                    ? (e.consume(a), x)
                    : (e.consume(a), M);
                }
                function B(a) {
                  return a === l
                    ? (e.consume(a), (l = void 0), R)
                    : null === a
                    ? s(a)
                    : (0, ey.HP)(a)
                    ? ((d = B), L(a))
                    : (e.consume(a), B);
                }
                function M(a) {
                  return null === a ||
                    34 === a ||
                    39 === a ||
                    60 === a ||
                    61 === a ||
                    96 === a
                    ? s(a)
                    : 47 === a || 62 === a || (0, ey.Ee)(a)
                    ? C(a)
                    : (e.consume(a), M);
                }
                function R(e) {
                  return 47 === e || 62 === e || (0, ey.Ee)(e) ? C(e) : s(e);
                }
                function g(l) {
                  return 62 === l
                    ? (e.consume(l),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      a)
                    : s(l);
                }
                function L(a) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(a),
                    e.exit("lineEnding"),
                    h
                  );
                }
                function h(a) {
                  return (0, ey.On)(a)
                    ? (0, ep.N)(
                        e,
                        k,
                        "linePrefix",
                        t.parser.constructs.disable.null.includes(
                          "codeIndented"
                        )
                          ? void 0
                          : 4
                      )(a)
                    : k(a);
                }
                function k(a) {
                  return e.enter("htmlTextData"), d(a);
                }
              },
            },
          ],
          91: ad,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, a, s) {
                return function (a) {
                  return e.enter("hardBreakEscape"), e.consume(a), l;
                };
                function l(l) {
                  return (0, ey.HP)(l)
                    ? (e.exit("hardBreakEscape"), a(l))
                    : s(l);
                }
              },
            },
            e4,
          ],
          93: e3,
          95: al,
          96: {
            name: "codeText",
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
            resolve: function (e) {
              let a,
                s,
                l = e.length - 4,
                n = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[n][1].type) &&
                ("lineEnding" === e[l][1].type || "space" === e[l][1].type)
              ) {
                for (a = n; ++a < l; )
                  if ("codeTextData" === e[a][1].type) {
                    (e[n][1].type = "codeTextPadding"),
                      (e[l][1].type = "codeTextPadding"),
                      (n += 2),
                      (l -= 2);
                    break;
                  }
              }
              for (a = n - 1, l++; ++a <= l; )
                void 0 === s
                  ? a !== l && "lineEnding" !== e[a][1].type && (s = a)
                  : (a === l || "lineEnding" === e[a][1].type) &&
                    ((e[s][1].type = "codeTextData"),
                    a !== s + 2 &&
                      ((e[s][1].end = e[a - 1][1].end),
                      e.splice(s + 2, a - s - 2),
                      (l -= a - s - 2),
                      (a = s + 2)),
                    (s = void 0));
              return e;
            },
            tokenize: function (e, a, s) {
              let l,
                n,
                d = 0;
              return function (a) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function a(s) {
                    return 96 === s
                      ? (e.consume(s), d++, a)
                      : (e.exit("codeTextSequence"), t(s));
                  })(a)
                );
              };
              function t(c) {
                return null === c
                  ? s(c)
                  : 32 === c
                  ? (e.enter("space"), e.consume(c), e.exit("space"), t)
                  : 96 === c
                  ? ((n = e.enter("codeTextSequence")),
                    (l = 0),
                    (function s(t) {
                      return 96 === t
                        ? (e.consume(t), l++, s)
                        : l === d
                        ? (e.exit("codeTextSequence"), e.exit("codeText"), a(t))
                        : ((n.type = "codeTextData"), o(t));
                    })(c))
                  : (0, ey.HP)(c)
                  ? (e.enter("lineEnding"),
                    e.consume(c),
                    e.exit("lineEnding"),
                    t)
                  : (e.enter("codeTextData"), o(c));
              }
              function o(a) {
                return null === a || 32 === a || 96 === a || (0, ey.HP)(a)
                  ? (e.exit("codeTextData"), t(a))
                  : (e.consume(a), o);
              }
            },
          },
        },
        af = { null: [al, eg] },
        am = { null: [42, 95] },
        aE = { null: [] },
        au = /[\0\t\n\r]/g;
      function aD(e, a) {
        let s = Number.parseInt(e, a);
        return s < 9 ||
          11 === s ||
          (s > 13 && s < 32) ||
          (s > 126 && s < 160) ||
          (s > 55295 && s < 57344) ||
          (s > 64975 && s < 65008) ||
          (65535 & s) == 65535 ||
          (65535 & s) == 65534 ||
          s > 1114111
          ? "�"
          : String.fromCodePoint(s);
      }
      let aA =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function aI(e, a, s) {
        if (a) return a;
        if (35 === s.charCodeAt(0)) {
          let e = s.charCodeAt(1),
            a = 120 === e || 88 === e;
          return aD(s.slice(a ? 2 : 1), a ? 16 : 10);
        }
        return e1(s) || e;
      }
      let aT = {}.hasOwnProperty;
      function ap(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function ay(e, a) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              j({ start: e.start, end: e.end }) +
              "): a different token (`" +
              a.type +
              "`, " +
              j({ start: a.start, end: a.end }) +
              ") is open"
          );
        throw Error(
          "Cannot close document, a token (`" +
            a.type +
            "`, " +
            j({ start: a.start, end: a.end }) +
            ") is still open"
        );
      }
      function aP(e) {
        let a = this;
        a.parser = function (s) {
          var l, d;
          let t, o, c, i;
          return (
            "object" ==
              typeof (l = {
                ...a.data("settings"),
                ...e,
                extensions: a.data("micromarkExtensions") || [],
                mdastExtensions: a.data("fromMarkdownExtensions") || [],
              }) && ((d = l), (l = void 0)),
            (function (e) {
              let a = {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: l(A),
                  autolinkProtocol: i,
                  autolinkEmail: i,
                  atxHeading: l(E),
                  blockQuote: l(function () {
                    return { type: "blockquote", children: [] };
                  }),
                  characterEscape: i,
                  characterReference: i,
                  codeFenced: l(m),
                  codeFencedFenceInfo: n,
                  codeFencedFenceMeta: n,
                  codeIndented: l(m, n),
                  codeText: l(function () {
                    return { type: "inlineCode", value: "" };
                  }, n),
                  codeTextData: i,
                  data: i,
                  codeFlowValue: i,
                  definition: l(function () {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: "",
                    };
                  }),
                  definitionDestinationString: n,
                  definitionLabelString: n,
                  definitionTitleString: n,
                  emphasis: l(function () {
                    return { type: "emphasis", children: [] };
                  }),
                  hardBreakEscape: l(u),
                  hardBreakTrailing: l(u),
                  htmlFlow: l(D, n),
                  htmlFlowData: i,
                  htmlText: l(D, n),
                  htmlTextData: i,
                  image: l(function () {
                    return { type: "image", title: null, url: "", alt: null };
                  }),
                  label: n,
                  link: l(A),
                  listItem: l(function (e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    this.data.expectingFirstListItemValue &&
                      ((this.stack[this.stack.length - 2].start =
                        Number.parseInt(this.sliceSerialize(e), 10)),
                      (this.data.expectingFirstListItemValue = void 0));
                  },
                  listOrdered: l(I, function () {
                    this.data.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: l(I),
                  paragraph: l(function () {
                    return { type: "paragraph", children: [] };
                  }),
                  reference: function () {
                    this.data.referenceType = "collapsed";
                  },
                  referenceString: n,
                  resourceDestinationString: n,
                  resourceTitleString: n,
                  setextHeading: l(E),
                  strong: l(function () {
                    return { type: "strong", children: [] };
                  }),
                  thematicBreak: l(function () {
                    return { type: "thematicBreak" };
                  }),
                },
                exit: {
                  atxHeading: t(),
                  atxHeadingSequence: function (e) {
                    let a = this.stack[this.stack.length - 1];
                    a.depth || (a.depth = this.sliceSerialize(e).length);
                  },
                  autolink: t(),
                  autolinkEmail: function (e) {
                    r.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        "mailto:" + this.sliceSerialize(e));
                  },
                  autolinkProtocol: function (e) {
                    r.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        this.sliceSerialize(e));
                  },
                  blockQuote: t(),
                  characterEscapeValue: r,
                  characterReferenceMarkerHexadecimal: f,
                  characterReferenceMarkerNumeric: f,
                  characterReferenceValue: function (e) {
                    let a,
                      s = this.sliceSerialize(e),
                      l = this.data.characterReferenceType;
                    l
                      ? ((a = aD(
                          s,
                          "characterReferenceMarkerNumeric" === l ? 10 : 16
                        )),
                        (this.data.characterReferenceType = void 0))
                      : (a = e1(s));
                    let n = this.stack[this.stack.length - 1];
                    n.value += a;
                  },
                  characterReference: function (e) {
                    this.stack.pop().position.end = ap(e.end);
                  },
                  codeFenced: t(function () {
                    let e = this.resume();
                    (this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      ""
                    )),
                      (this.data.flowCodeInside = void 0);
                  }),
                  codeFencedFence: function () {
                    this.data.flowCodeInside ||
                      (this.buffer(), (this.data.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: r,
                  codeIndented: t(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                      /(\r?\n|\r)$/g,
                      ""
                    );
                  }),
                  codeText: t(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: r,
                  data: r,
                  definition: t(),
                  definitionDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    let a = this.resume(),
                      s = this.stack[this.stack.length - 1];
                    (s.label = a),
                      (s.identifier = (0, e_.B)(
                        this.sliceSerialize(e)
                      ).toLowerCase());
                  },
                  definitionTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: t(),
                  hardBreakEscape: t(b),
                  hardBreakTrailing: t(b),
                  htmlFlow: t(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: r,
                  htmlText: t(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: r,
                  image: t(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let a = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = a),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      a = this.resume(),
                      s = this.stack[this.stack.length - 1];
                    (this.data.inReference = !0),
                      "link" === s.type
                        ? (s.children = e.children)
                        : (s.alt = a);
                  },
                  labelText: function (e) {
                    let a = this.sliceSerialize(e),
                      s = this.stack[this.stack.length - 2];
                    (s.label = a.replace(aA, aI)),
                      (s.identifier = (0, e_.B)(a).toLowerCase());
                  },
                  lineEnding: function (e) {
                    let s = this.stack[this.stack.length - 1];
                    if (this.data.atHardBreak) {
                      (s.children[s.children.length - 1].position.end = ap(
                        e.end
                      )),
                        (this.data.atHardBreak = void 0);
                      return;
                    }
                    !this.data.setextHeadingSlurpLineEnding &&
                      a.canContainEols.includes(s.type) &&
                      (i.call(this, e), r.call(this, e));
                  },
                  link: t(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let a = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = a),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  listItem: t(),
                  listOrdered: t(),
                  listUnordered: t(),
                  paragraph: t(),
                  referenceString: function (e) {
                    let a = this.resume(),
                      s = this.stack[this.stack.length - 1];
                    (s.label = a),
                      (s.identifier = (0, e_.B)(
                        this.sliceSerialize(e)
                      ).toLowerCase()),
                      (this.data.referenceType = "full");
                  },
                  resourceDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    this.data.inReference = void 0;
                  },
                  setextHeading: t(function () {
                    this.data.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    this.data.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: t(),
                  thematicBreak: t(),
                },
              };
              !(function e(a, s) {
                let l = -1;
                for (; ++l < s.length; ) {
                  let n = s[l];
                  Array.isArray(n)
                    ? e(a, n)
                    : (function (e, a) {
                        let s;
                        for (s in a)
                          if (aT.call(a, s))
                            switch (s) {
                              case "canContainEols": {
                                let l = a[s];
                                l && e[s].push(...l);
                                break;
                              }
                              case "transforms": {
                                let l = a[s];
                                l && e[s].push(...l);
                                break;
                              }
                              case "enter":
                              case "exit": {
                                let l = a[s];
                                l && Object.assign(e[s], l);
                              }
                            }
                      })(a, n);
                }
              })(a, (e || {}).mdastExtensions || []);
              let s = {};
              return function (e) {
                let l = { type: "root", children: [] },
                  t = {
                    stack: [l],
                    tokenStack: [],
                    config: a,
                    enter: d,
                    exit: o,
                    buffer: n,
                    resume: c,
                    data: s,
                  },
                  i = [],
                  r = -1;
                for (; ++r < e.length; )
                  ("listOrdered" === e[r][1].type ||
                    "listUnordered" === e[r][1].type) &&
                    ("enter" === e[r][0]
                      ? i.push(r)
                      : (r = (function (e, a, s) {
                          let l,
                            n,
                            d,
                            t,
                            o = a - 1,
                            c = -1,
                            i = !1;
                          for (; ++o <= s; ) {
                            let a = e[o];
                            switch (a[1].type) {
                              case "listUnordered":
                              case "listOrdered":
                              case "blockQuote":
                                "enter" === a[0] ? c++ : c--, (t = void 0);
                                break;
                              case "lineEndingBlank":
                                "enter" === a[0] &&
                                  (!l || t || c || d || (d = o), (t = void 0));
                                break;
                              case "linePrefix":
                              case "listItemValue":
                              case "listItemMarker":
                              case "listItemPrefix":
                              case "listItemPrefixWhitespace":
                                break;
                              default:
                                t = void 0;
                            }
                            if (
                              (!c &&
                                "enter" === a[0] &&
                                "listItemPrefix" === a[1].type) ||
                              (-1 === c &&
                                "exit" === a[0] &&
                                ("listUnordered" === a[1].type ||
                                  "listOrdered" === a[1].type))
                            ) {
                              if (l) {
                                let t = o;
                                for (n = void 0; t--; ) {
                                  let a = e[t];
                                  if (
                                    "lineEnding" === a[1].type ||
                                    "lineEndingBlank" === a[1].type
                                  ) {
                                    if ("exit" === a[0]) continue;
                                    n &&
                                      ((e[n][1].type = "lineEndingBlank"),
                                      (i = !0)),
                                      (a[1].type = "lineEnding"),
                                      (n = t);
                                  } else if (
                                    "linePrefix" === a[1].type ||
                                    "blockQuotePrefix" === a[1].type ||
                                    "blockQuotePrefixWhitespace" ===
                                      a[1].type ||
                                    "blockQuoteMarker" === a[1].type ||
                                    "listItemIndent" === a[1].type
                                  );
                                  else break;
                                }
                                d && (!n || d < n) && (l._spread = !0),
                                  (l.end = Object.assign(
                                    {},
                                    n ? e[n][1].start : a[1].end
                                  )),
                                  e.splice(n || o, 0, ["exit", l, a[2]]),
                                  o++,
                                  s++;
                              }
                              if ("listItemPrefix" === a[1].type) {
                                let n = {
                                  type: "listItem",
                                  _spread: !1,
                                  start: Object.assign({}, a[1].start),
                                  end: void 0,
                                };
                                (l = n),
                                  e.splice(o, 0, ["enter", n, a[2]]),
                                  o++,
                                  s++,
                                  (d = void 0),
                                  (t = !0);
                              }
                            }
                          }
                          return (e[a][1]._spread = i), s;
                        })(e, i.pop(), r)));
                for (r = -1; ++r < e.length; ) {
                  let s = a[e[r][0]];
                  aT.call(s, e[r][1].type) &&
                    s[e[r][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[r][2].sliceSerialize },
                        t
                      ),
                      e[r][1]
                    );
                }
                if (t.tokenStack.length > 0) {
                  let e = t.tokenStack[t.tokenStack.length - 1];
                  (e[1] || ay).call(t, void 0, e[0]);
                }
                for (
                  l.position = {
                    start: ap(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                    ),
                    end: ap(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                    ),
                  },
                    r = -1;
                  ++r < a.transforms.length;

                )
                  l = a.transforms[r](l) || l;
                return l;
              };
              function l(e, a) {
                return function (s) {
                  d.call(this, e(s), s), a && a.call(this, s);
                };
              }
              function n() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function d(e, a, s) {
                this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([a, s || void 0]),
                  (e.position = { start: ap(a.start), end: void 0 });
              }
              function t(e) {
                return function (a) {
                  e && e.call(this, a), o.call(this, a);
                };
              }
              function o(e, a) {
                let s = this.stack.pop(),
                  l = this.tokenStack.pop();
                if (l)
                  l[0].type !== e.type &&
                    (a
                      ? a.call(this, e, l[0])
                      : (l[1] || ay).call(this, e, l[0]));
                else
                  throw Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      j({ start: e.start, end: e.end }) +
                      "): it’s not open"
                  );
                s.position.end = ap(e.end);
              }
              function c() {
                return (0, eE.d)(this.stack.pop());
              }
              function i(e) {
                let a = this.stack[this.stack.length - 1].children,
                  s = a[a.length - 1];
                (s && "text" === s.type) ||
                  (((s = { type: "text", value: "" }).position = {
                    start: ap(e.start),
                    end: void 0,
                  }),
                  a.push(s)),
                  this.stack.push(s);
              }
              function r(e) {
                let a = this.stack.pop();
                (a.value += this.sliceSerialize(e)),
                  (a.position.end = ap(e.end));
              }
              function b() {
                this.data.atHardBreak = !0;
              }
              function f(e) {
                this.data.characterReferenceType = e.type;
              }
              function m() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function E() {
                return { type: "heading", depth: 0, children: [] };
              }
              function u() {
                return { type: "break" };
              }
              function D() {
                return { type: "html", value: "" };
              }
              function A() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function I(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(d)(
              (function (e) {
                for (; !eI(e); );
                return e;
              })(
                (function (e) {
                  let a = {
                    constructs: (0, eT.y)([n, ...((e || {}).extensions || [])]),
                    content: s(eP),
                    defined: [],
                    document: s(eC),
                    flow: s(eR),
                    lazy: {},
                    string: s(eL),
                    text: s(eh),
                  };
                  return a;
                  function s(e) {
                    return function (s) {
                      return (function (e, a, s) {
                        let l = {
                            _bufferIndex: -1,
                            _index: 0,
                            line: (s && s.line) || 1,
                            column: (s && s.column) || 1,
                            offset: (s && s.offset) || 0,
                          },
                          n = {},
                          d = [],
                          t = [],
                          o = [],
                          c = {
                            attempt: E(function (e, a) {
                              u(e, a.from);
                            }),
                            check: E(m),
                            consume: function (e) {
                              (0, ey.HP)(e)
                                ? (l.line++,
                                  (l.column = 1),
                                  (l.offset += -3 === e ? 2 : 1),
                                  D())
                                : -1 !== e && (l.column++, l.offset++),
                                l._bufferIndex < 0
                                  ? l._index++
                                  : (l._bufferIndex++,
                                    l._bufferIndex === t[l._index].length &&
                                      ((l._bufferIndex = -1), l._index++)),
                                (i.previous = e);
                            },
                            enter: function (e, a) {
                              let s = a || {};
                              return (
                                (s.type = e),
                                (s.start = f()),
                                i.events.push(["enter", s, i]),
                                o.push(s),
                                s
                              );
                            },
                            exit: function (e) {
                              let a = o.pop();
                              return (
                                (a.end = f()), i.events.push(["exit", a, i]), a
                              );
                            },
                            interrupt: E(m, { interrupt: !0 }),
                          },
                          i = {
                            code: null,
                            containerState: {},
                            defineSkip: function (e) {
                              (n[e.line] = e.column), D();
                            },
                            events: [],
                            now: f,
                            parser: e,
                            previous: null,
                            sliceSerialize: function (e, a) {
                              return (function (e, a) {
                                let s,
                                  l = -1,
                                  n = [];
                                for (; ++l < e.length; ) {
                                  let d,
                                    t = e[l];
                                  if ("string" == typeof t) d = t;
                                  else
                                    switch (t) {
                                      case -5:
                                        d = "\r";
                                        break;
                                      case -4:
                                        d = "\n";
                                        break;
                                      case -3:
                                        d = "\r\n";
                                        break;
                                      case -2:
                                        d = a ? " " : "	";
                                        break;
                                      case -1:
                                        if (!a && s) continue;
                                        d = " ";
                                        break;
                                      default:
                                        d = String.fromCharCode(t);
                                    }
                                  (s = -2 === t), n.push(d);
                                }
                                return n.join("");
                              })(b(e), a);
                            },
                            sliceStream: b,
                            write: function (e) {
                              return ((t = (0, eu.V)(t, e)),
                              (function () {
                                let e;
                                for (; l._index < t.length; ) {
                                  let s = t[l._index];
                                  if ("string" == typeof s)
                                    for (
                                      e = l._index,
                                        l._bufferIndex < 0 &&
                                          (l._bufferIndex = 0);
                                      l._index === e &&
                                      l._bufferIndex < s.length;

                                    ) {
                                      var a;
                                      (a = s.charCodeAt(l._bufferIndex)),
                                        (r = r(a));
                                    }
                                  else r = r(s);
                                }
                              })(),
                              null !== t[t.length - 1])
                                ? []
                                : (u(a, 0),
                                  (i.events = (0, e6.W)(d, i.events, i)),
                                  i.events);
                            },
                          },
                          r = a.tokenize.call(i, c);
                        return a.resolveAll && d.push(a), i;
                        function b(e) {
                          return (function (e, a) {
                            let s,
                              l = a.start._index,
                              n = a.start._bufferIndex,
                              d = a.end._index,
                              t = a.end._bufferIndex;
                            if (l === d) s = [e[l].slice(n, t)];
                            else {
                              if (((s = e.slice(l, d)), n > -1)) {
                                let e = s[0];
                                "string" == typeof e
                                  ? (s[0] = e.slice(n))
                                  : s.shift();
                              }
                              t > 0 && s.push(e[d].slice(0, t));
                            }
                            return s;
                          })(t, e);
                        }
                        function f() {
                          let {
                            _bufferIndex: e,
                            _index: a,
                            line: s,
                            column: n,
                            offset: d,
                          } = l;
                          return {
                            _bufferIndex: e,
                            _index: a,
                            line: s,
                            column: n,
                            offset: d,
                          };
                        }
                        function m(e, a) {
                          a.restore();
                        }
                        function E(e, a) {
                          return function (s, n, d) {
                            var t;
                            let r, b, m, E;
                            return Array.isArray(s)
                              ? u(s)
                              : "tokenize" in s
                              ? u([s])
                              : ((t = s),
                                function (e) {
                                  let a = null !== e && t[e],
                                    s = null !== e && t.null;
                                  return u([
                                    ...(Array.isArray(a) ? a : a ? [a] : []),
                                    ...(Array.isArray(s) ? s : s ? [s] : []),
                                  ])(e);
                                });
                            function u(e) {
                              return ((r = e), (b = 0), 0 === e.length)
                                ? d
                                : A(e[b]);
                            }
                            function A(e) {
                              return function (s) {
                                return ((E = (function () {
                                  let e = f(),
                                    a = i.previous,
                                    s = i.currentConstruct,
                                    n = i.events.length,
                                    d = Array.from(o);
                                  return {
                                    from: n,
                                    restore: function () {
                                      (l = e),
                                        (i.previous = a),
                                        (i.currentConstruct = s),
                                        (i.events.length = n),
                                        (o = d),
                                        D();
                                    },
                                  };
                                })()),
                                (m = e),
                                e.partial || (i.currentConstruct = e),
                                e.name &&
                                  i.parser.constructs.disable.null.includes(
                                    e.name
                                  ))
                                  ? T(s)
                                  : e.tokenize.call(
                                      a
                                        ? Object.assign(Object.create(i), a)
                                        : i,
                                      c,
                                      I,
                                      T
                                    )(s);
                              };
                            }
                            function I(a) {
                              return e(m, E), n;
                            }
                            function T(e) {
                              return (E.restore(), ++b < r.length)
                                ? A(r[b])
                                : d;
                            }
                          };
                        }
                        function u(e, a) {
                          e.resolveAll && !d.includes(e) && d.push(e),
                            e.resolve &&
                              (0, eu.m)(
                                i.events,
                                a,
                                i.events.length - a,
                                e.resolve(i.events.slice(a), i)
                              ),
                            e.resolveTo &&
                              (i.events = e.resolveTo(i.events, i));
                        }
                        function D() {
                          l.line in n &&
                            l.column < 2 &&
                            ((l.column = n[l.line]),
                            (l.offset += n[l.line] - 1));
                        }
                      })(a, e, s);
                    };
                  }
                })(d)
                  .document()
                  .write(
                    ((o = 1),
                    (c = ""),
                    (i = !0),
                    function (e, a, s) {
                      let l,
                        n,
                        d,
                        r,
                        b,
                        f = [];
                      for (
                        e =
                          c +
                          ("string" == typeof e
                            ? e.toString()
                            : new TextDecoder(a || void 0).decode(e)),
                          d = 0,
                          c = "",
                          i && (65279 === e.charCodeAt(0) && d++, (i = void 0));
                        d < e.length;

                      ) {
                        if (
                          ((au.lastIndex = d),
                          (r =
                            (l = au.exec(e)) && void 0 !== l.index
                              ? l.index
                              : e.length),
                          (b = e.charCodeAt(r)),
                          !l)
                        ) {
                          c = e.slice(d);
                          break;
                        }
                        if (10 === b && d === r && t) f.push(-3), (t = void 0);
                        else
                          switch (
                            (t && (f.push(-5), (t = void 0)),
                            d < r && (f.push(e.slice(d, r)), (o += r - d)),
                            b)
                          ) {
                            case 0:
                              f.push(65533), o++;
                              break;
                            case 9:
                              for (
                                n = 4 * Math.ceil(o / 4), f.push(-2);
                                o++ < n;

                              )
                                f.push(-1);
                              break;
                            case 10:
                              f.push(-4), (o = 1);
                              break;
                            default:
                              (t = !0), (o = 1);
                          }
                        d = r + 1;
                      }
                      return (
                        s && (t && f.push(-5), c && f.push(c), f.push(null)), f
                      );
                    })(s, l, !0)
                  )
              )
            )
          );
        };
      }
      let aC = "object" == typeof self ? self : globalThis,
        aS = (e, a) => {
          switch (e) {
            case "Function":
            case "SharedWorker":
            case "Worker":
            case "eval":
            case "setInterval":
            case "setTimeout":
              throw TypeError("unable to deserialize " + e);
          }
          return new aC[e](a);
        },
        ax = (e) =>
          ((e, a) => {
            let s = (a, s) => (e.set(s, a), a),
              l = (n) => {
                if (e.has(n)) return e.get(n);
                let [d, t] = a[n];
                switch (d) {
                  case 0:
                  case -1:
                    return s(t, n);
                  case 1: {
                    let e = s([], n);
                    for (let a of t) e.push(l(a));
                    return e;
                  }
                  case 2: {
                    let e = s({}, n);
                    for (let [a, s] of t) e[l(a)] = l(s);
                    return e;
                  }
                  case 3:
                    return s(new Date(t), n);
                  case 4: {
                    let { source: e, flags: a } = t;
                    return s(new RegExp(e, a), n);
                  }
                  case 5: {
                    let e = s(new Map(), n);
                    for (let [a, s] of t) e.set(l(a), l(s));
                    return e;
                  }
                  case 6: {
                    let e = s(new Set(), n);
                    for (let a of t) e.add(l(a));
                    return e;
                  }
                  case 7: {
                    let { name: e, message: a } = t;
                    return s(
                      "function" == typeof aC[e] ? aS(e, a) : Error(a),
                      n
                    );
                  }
                  case 8:
                    return s(BigInt(t), n);
                  case "BigInt":
                    return s(Object(BigInt(t)), n);
                  case "ArrayBuffer":
                    return s(new Uint8Array(t).buffer, t);
                  case "DataView": {
                    let { buffer: e } = new Uint8Array(t);
                    return s(new DataView(e), t);
                  }
                }
                return s(aS(d, t), n);
              };
            return l;
          })(
            new Map(),
            e
          )(0),
        { toString: aB } = {},
        { keys: aM } = Object,
        aR = (e) => {
          let a = typeof e;
          if ("object" !== a || !e) return [0, a];
          let s = aB.call(e).slice(8, -1);
          switch (s) {
            case "Array":
              return [1, ""];
            case "Object":
              return [2, ""];
            case "Date":
              return [3, ""];
            case "RegExp":
              return [4, ""];
            case "Map":
              return [5, ""];
            case "Set":
              return [6, ""];
            case "DataView":
              return [1, s];
          }
          return s.includes("Array")
            ? [1, s]
            : e instanceof Error
            ? [7, e.name || "Error"]
            : [2, s];
        },
        ag = ([e, a]) => 0 === e && ("function" === a || "symbol" === a),
        aL = (e, { json: a, lossy: s } = {}) => {
          let l = [];
          return (
            ((e, a, s, l) => {
              let n = (e, a) => {
                  let n = l.push(e) - 1;
                  return s.set(a, n), n;
                },
                d = (l) => {
                  if (s.has(l)) return s.get(l);
                  let [t, o] = aR(l);
                  switch (t) {
                    case 0: {
                      let a = l;
                      switch (o) {
                        case "bigint":
                          (t = 8), (a = l.toString());
                          break;
                        case "function":
                        case "symbol":
                          if (e) throw TypeError("unable to serialize " + o);
                          a = null;
                          break;
                        case "undefined":
                          return n([-1], l);
                      }
                      return n([t, a], l);
                    }
                    case 1: {
                      if (o) {
                        let e = l;
                        return (
                          "DataView" === o
                            ? (e = new Uint8Array(l.buffer))
                            : "ArrayBuffer" === o && (e = new Uint8Array(l)),
                          n([o, [...e]], l)
                        );
                      }
                      let e = [],
                        a = n([t, e], l);
                      for (let a of l) e.push(d(a));
                      return a;
                    }
                    case 2: {
                      if (o)
                        switch (o) {
                          case "BigInt":
                            return n([o, l.toString()], l);
                          case "Boolean":
                          case "Number":
                          case "String":
                            return n([o, l.valueOf()], l);
                        }
                      if (a && "toJSON" in l) return d(l.toJSON());
                      let s = [],
                        c = n([t, s], l);
                      for (let a of aM(l))
                        (e || !ag(aR(l[a]))) && s.push([d(a), d(l[a])]);
                      return c;
                    }
                    case 3:
                      return n(
                        [t, isNaN(l.getTime()) ? "" : l.toISOString()],
                        l
                      );
                    case 4: {
                      let { source: e, flags: a } = l;
                      return n([t, { source: e, flags: a }], l);
                    }
                    case 5: {
                      let a = [],
                        s = n([t, a], l);
                      for (let [s, n] of l)
                        (e || !(ag(aR(s)) || ag(aR(n)))) &&
                          a.push([d(s), d(n)]);
                      return s;
                    }
                    case 6: {
                      let a = [],
                        s = n([t, a], l);
                      for (let s of l) (e || !ag(aR(s))) && a.push(d(s));
                      return s;
                    }
                  }
                  let { message: c } = l;
                  return n([t, { name: o, message: c }], l);
                };
              return d;
            })(
              !(a || s),
              !!a,
              new Map(),
              l
            )(e),
            l
          );
        },
        ah =
          "function" == typeof structuredClone
            ? (e, a) =>
                a && ("json" in a || "lossy" in a)
                  ? ax(aL(e, a))
                  : structuredClone(e)
            : (e, a) => ax(aL(e, a));
      function ak(e) {
        let a = [],
          s = -1,
          l = 0,
          n = 0;
        for (; ++s < e.length; ) {
          let d = e.charCodeAt(s),
            t = "";
          if (
            37 === d &&
            (0, ey.lV)(e.charCodeAt(s + 1)) &&
            (0, ey.lV)(e.charCodeAt(s + 2))
          )
            n = 2;
          else if (d < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(d)) ||
              (t = String.fromCharCode(d));
          else if (d > 55295 && d < 57344) {
            let a = e.charCodeAt(s + 1);
            d < 56320 && a > 56319 && a < 57344
              ? ((t = String.fromCharCode(d, a)), (n = 1))
              : (t = "�");
          } else t = String.fromCharCode(d);
          t &&
            (a.push(e.slice(l, s), encodeURIComponent(t)),
            (l = s + n + 1),
            (t = "")),
            n && ((s += n), (n = 0));
        }
        return a.join("") + e.slice(l);
      }
      function aO(e, a) {
        let s = [{ type: "text", value: "↩" }];
        return (
          a > 1 &&
            s.push({
              type: "element",
              tagName: "sup",
              properties: {},
              children: [{ type: "text", value: String(a) }],
            }),
          s
        );
      }
      function aU(e, a) {
        return "Back to reference " + (e + 1) + (a > 1 ? "-" + a : "");
      }
      var aF = s(5937);
      function aN(e, a) {
        let s = a.referenceType,
          l = "]";
        if (
          ("collapsed" === s
            ? (l += "[]")
            : "full" === s && (l += "[" + (a.label || a.identifier) + "]"),
          "imageReference" === a.type)
        )
          return [{ type: "text", value: "![" + a.alt + l }];
        let n = e.all(a),
          d = n[0];
        d && "text" === d.type
          ? (d.value = "[" + d.value)
          : n.unshift({ type: "text", value: "[" });
        let t = n[n.length - 1];
        return (
          t && "text" === t.type
            ? (t.value += l)
            : n.push({ type: "text", value: l }),
          n
        );
      }
      function aH(e) {
        let a = e.spread;
        return null == a ? e.children.length > 1 : a;
      }
      function aW(e, a, s) {
        let l = 0,
          n = e.length;
        if (a) {
          let a = e.codePointAt(l);
          for (; 9 === a || 32 === a; ) l++, (a = e.codePointAt(l));
        }
        if (s) {
          let a = e.codePointAt(n - 1);
          for (; 9 === a || 32 === a; ) n--, (a = e.codePointAt(n - 1));
        }
        return n > l ? e.slice(l, n) : "";
      }
      let aw = {
        blockquote: function (e, a) {
          let s = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(a), !0),
          };
          return e.patch(a, s), e.applyData(a, s);
        },
        break: function (e, a) {
          let s = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          return (
            e.patch(a, s), [e.applyData(a, s), { type: "text", value: "\n" }]
          );
        },
        code: function (e, a) {
          let s = a.value ? a.value + "\n" : "",
            l = {},
            n = a.lang ? a.lang.split(/\s+/) : [];
          n.length > 0 && (l.className = ["language-" + n[0]]);
          let d = {
            type: "element",
            tagName: "code",
            properties: l,
            children: [{ type: "text", value: s }],
          };
          return (
            a.meta && (d.data = { meta: a.meta }),
            e.patch(a, d),
            (d = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [(d = e.applyData(a, d))],
            }),
            e.patch(a, d),
            d
          );
        },
        delete: function (e, a) {
          let s = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(a),
          };
          return e.patch(a, s), e.applyData(a, s);
        },
        emphasis: function (e, a) {
          let s = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(a),
          };
          return e.patch(a, s), e.applyData(a, s);
        },
        footnoteReference: function (e, a) {
          let s,
            l =
              "string" == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : "user-content-",
            n = String(a.identifier).toUpperCase(),
            d = ak(n.toLowerCase()),
            t = e.footnoteOrder.indexOf(n),
            o = e.footnoteCounts.get(n);
          void 0 === o
            ? ((o = 0), e.footnoteOrder.push(n), (s = e.footnoteOrder.length))
            : (s = t + 1),
            (o += 1),
            e.footnoteCounts.set(n, o);
          let c = {
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + l + "fn-" + d,
              id: l + "fnref-" + d + (o > 1 ? "-" + o : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(s) }],
          };
          e.patch(a, c);
          let i = {
            type: "element",
            tagName: "sup",
            properties: {},
            children: [c],
          };
          return e.patch(a, i), e.applyData(a, i);
        },
        heading: function (e, a) {
          let s = {
            type: "element",
            tagName: "h" + a.depth,
            properties: {},
            children: e.all(a),
          };
          return e.patch(a, s), e.applyData(a, s);
        },
        html: function (e, a) {
          if (e.options.allowDangerousHtml) {
            let s = { type: "raw", value: a.value };
            return e.patch(a, s), e.applyData(a, s);
          }
        },
        imageReference: function (e, a) {
          let s = String(a.identifier).toUpperCase(),
            l = e.definitionById.get(s);
          if (!l) return aN(e, a);
          let n = { src: ak(l.url || ""), alt: a.alt };
          null !== l.title && void 0 !== l.title && (n.title = l.title);
          let d = {
            type: "element",
            tagName: "img",
            properties: n,
            children: [],
          };
          return e.patch(a, d), e.applyData(a, d);
        },
        image: function (e, a) {
          let s = { src: ak(a.url) };
          null !== a.alt && void 0 !== a.alt && (s.alt = a.alt),
            null !== a.title && void 0 !== a.title && (s.title = a.title);
          let l = {
            type: "element",
            tagName: "img",
            properties: s,
            children: [],
          };
          return e.patch(a, l), e.applyData(a, l);
        },
        inlineCode: function (e, a) {
          let s = { type: "text", value: a.value.replace(/\r?\n|\r/g, " ") };
          e.patch(a, s);
          let l = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [s],
          };
          return e.patch(a, l), e.applyData(a, l);
        },
        linkReference: function (e, a) {
          let s = String(a.identifier).toUpperCase(),
            l = e.definitionById.get(s);
          if (!l) return aN(e, a);
          let n = { href: ak(l.url || "") };
          null !== l.title && void 0 !== l.title && (n.title = l.title);
          let d = {
            type: "element",
            tagName: "a",
            properties: n,
            children: e.all(a),
          };
          return e.patch(a, d), e.applyData(a, d);
        },
        link: function (e, a) {
          let s = { href: ak(a.url) };
          null !== a.title && void 0 !== a.title && (s.title = a.title);
          let l = {
            type: "element",
            tagName: "a",
            properties: s,
            children: e.all(a),
          };
          return e.patch(a, l), e.applyData(a, l);
        },
        listItem: function (e, a, s) {
          let l = e.all(a),
            n = s
              ? (function (e) {
                  let a = !1;
                  if ("list" === e.type) {
                    a = e.spread || !1;
                    let s = e.children,
                      l = -1;
                    for (; !a && ++l < s.length; ) a = aH(s[l]);
                  }
                  return a;
                })(s)
              : aH(a),
            d = {},
            t = [];
          if ("boolean" == typeof a.checked) {
            let e,
              s = l[0];
            s && "element" === s.type && "p" === s.tagName
              ? (e = s)
              : ((e = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
                }),
                l.unshift(e)),
              e.children.length > 0 &&
                e.children.unshift({ type: "text", value: " " }),
              e.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                  type: "checkbox",
                  checked: a.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (d.className = ["task-list-item"]);
          }
          let o = -1;
          for (; ++o < l.length; ) {
            let e = l[o];
            (n || 0 !== o || "element" !== e.type || "p" !== e.tagName) &&
              t.push({ type: "text", value: "\n" }),
              "element" !== e.type || "p" !== e.tagName || n
                ? t.push(e)
                : t.push(...e.children);
          }
          let c = l[l.length - 1];
          c &&
            (n || "element" !== c.type || "p" !== c.tagName) &&
            t.push({ type: "text", value: "\n" });
          let i = {
            type: "element",
            tagName: "li",
            properties: d,
            children: t,
          };
          return e.patch(a, i), e.applyData(a, i);
        },
        list: function (e, a) {
          let s = {},
            l = e.all(a),
            n = -1;
          for (
            "number" == typeof a.start && 1 !== a.start && (s.start = a.start);
            ++n < l.length;

          ) {
            let e = l[n];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              s.className = ["contains-task-list"];
              break;
            }
          }
          let d = {
            type: "element",
            tagName: a.ordered ? "ol" : "ul",
            properties: s,
            children: e.wrap(l, !0),
          };
          return e.patch(a, d), e.applyData(a, d);
        },
        paragraph: function (e, a) {
          let s = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(a),
          };
          return e.patch(a, s), e.applyData(a, s);
        },
        root: function (e, a) {
          let s = { type: "root", children: e.wrap(e.all(a)) };
          return e.patch(a, s), e.applyData(a, s);
        },
        strong: function (e, a) {
          let s = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(a),
          };
          return e.patch(a, s), e.applyData(a, s);
        },
        table: function (e, a) {
          let s = e.all(a),
            l = s.shift(),
            n = [];
          if (l) {
            let s = {
              type: "element",
              tagName: "thead",
              properties: {},
              children: e.wrap([l], !0),
            };
            e.patch(a.children[0], s), n.push(s);
          }
          if (s.length > 0) {
            let l = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(s, !0),
              },
              d = z(a.children[1]),
              t = Q(a.children[a.children.length - 1]);
            d && t && (l.position = { start: d, end: t }), n.push(l);
          }
          let d = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(n, !0),
          };
          return e.patch(a, d), e.applyData(a, d);
        },
        tableCell: function (e, a) {
          let s = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(a),
          };
          return e.patch(a, s), e.applyData(a, s);
        },
        tableRow: function (e, a, s) {
          let l = s ? s.children : void 0,
            n = 0 === (l ? l.indexOf(a) : 1) ? "th" : "td",
            d = s && "table" === s.type ? s.align : void 0,
            t = d ? d.length : a.children.length,
            o = -1,
            c = [];
          for (; ++o < t; ) {
            let s = a.children[o],
              l = {},
              t = d ? d[o] : void 0;
            t && (l.align = t);
            let i = {
              type: "element",
              tagName: n,
              properties: l,
              children: [],
            };
            s &&
              ((i.children = e.all(s)), e.patch(s, i), (i = e.applyData(s, i))),
              c.push(i);
          }
          let i = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(c, !0),
          };
          return e.patch(a, i), e.applyData(a, i);
        },
        text: function (e, a) {
          let s = {
            type: "text",
            value: (function (e) {
              let a = String(e),
                s = /\r?\n|\r/g,
                l = s.exec(a),
                n = 0,
                d = [];
              for (; l; )
                d.push(aW(a.slice(n, l.index), n > 0, !0), l[0]),
                  (n = l.index + l[0].length),
                  (l = s.exec(a));
              return d.push(aW(a.slice(n), n > 0, !1)), d.join("");
            })(String(a.value)),
          };
          return e.patch(a, s), e.applyData(a, s);
        },
        thematicBreak: function (e, a) {
          let s = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
          };
          return e.patch(a, s), e.applyData(a, s);
        },
        toml: aY,
        yaml: aY,
        definition: aY,
        footnoteDefinition: aY,
      };
      function aY() {}
      let aG = {}.hasOwnProperty,
        av = {};
      function aV(e, a) {
        e.position &&
          (a.position = (function (e) {
            let a = z(e),
              s = Q(e);
            if (a && s) return { start: a, end: s };
          })(e));
      }
      function a_(e, a) {
        let s = a;
        if (e && e.data) {
          let a = e.data.hName,
            l = e.data.hChildren,
            n = e.data.hProperties;
          "string" == typeof a &&
            ("element" === s.type
              ? (s.tagName = a)
              : (s = {
                  type: "element",
                  tagName: a,
                  properties: {},
                  children: "children" in s ? s.children : [s],
                })),
            "element" === s.type && n && Object.assign(s.properties, ah(n)),
            "children" in s && s.children && null != l && (s.children = l);
        }
        return s;
      }
      function aQ(e, a) {
        let s = [],
          l = -1;
        for (a && s.push({ type: "text", value: "\n" }); ++l < e.length; )
          l && s.push({ type: "text", value: "\n" }), s.push(e[l]);
        return a && e.length > 0 && s.push({ type: "text", value: "\n" }), s;
      }
      function az(e) {
        let a = 0,
          s = e.charCodeAt(a);
        for (; 9 === s || 32 === s; ) a++, (s = e.charCodeAt(a));
        return e.slice(a);
      }
      function aJ(e, a) {
        let s = (function (e, a) {
            let s = a || av,
              l = new Map(),
              n = new Map(),
              d = {
                all: function (e) {
                  let a = [];
                  if ("children" in e) {
                    let s = e.children,
                      l = -1;
                    for (; ++l < s.length; ) {
                      let n = d.one(s[l], e);
                      if (n) {
                        if (
                          l &&
                          "break" === s[l - 1].type &&
                          (Array.isArray(n) ||
                            "text" !== n.type ||
                            (n.value = az(n.value)),
                          !Array.isArray(n) && "element" === n.type)
                        ) {
                          let e = n.children[0];
                          e && "text" === e.type && (e.value = az(e.value));
                        }
                        Array.isArray(n) ? a.push(...n) : a.push(n);
                      }
                    }
                  }
                  return a;
                },
                applyData: a_,
                definitionById: l,
                footnoteById: n,
                footnoteCounts: new Map(),
                footnoteOrder: [],
                handlers: { ...aw, ...s.handlers },
                one: function (e, a) {
                  let s = e.type,
                    l = d.handlers[s];
                  if (aG.call(d.handlers, s) && l) return l(d, e, a);
                  if (
                    d.options.passThrough &&
                    d.options.passThrough.includes(s)
                  ) {
                    if ("children" in e) {
                      let { children: a, ...s } = e,
                        l = ah(s);
                      return (l.children = d.all(e)), l;
                    }
                    return ah(e);
                  }
                  return (
                    d.options.unknownHandler ||
                    function (e, a) {
                      let s = a.data || {},
                        l =
                          "value" in a &&
                          !(
                            aG.call(s, "hProperties") || aG.call(s, "hChildren")
                          )
                            ? { type: "text", value: a.value }
                            : {
                                type: "element",
                                tagName: "div",
                                properties: {},
                                children: e.all(a),
                              };
                      return e.patch(a, l), e.applyData(a, l);
                    }
                  )(d, e, a);
                },
                options: s,
                patch: aV,
                wrap: aQ,
              };
            return (
              (0, aF.YR)(e, function (e) {
                if (
                  "definition" === e.type ||
                  "footnoteDefinition" === e.type
                ) {
                  let a = "definition" === e.type ? l : n,
                    s = String(e.identifier).toUpperCase();
                  a.has(s) || a.set(s, e);
                }
              }),
              d
            );
          })(e, a),
          l = s.one(e, void 0),
          n = (function (e) {
            let a =
                "string" == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : "user-content-",
              s = e.options.footnoteBackContent || aO,
              l = e.options.footnoteBackLabel || aU,
              n = e.options.footnoteLabel || "Footnotes",
              d = e.options.footnoteLabelTagName || "h2",
              t = e.options.footnoteLabelProperties || {
                className: ["sr-only"],
              },
              o = [],
              c = -1;
            for (; ++c < e.footnoteOrder.length; ) {
              let n = e.footnoteById.get(e.footnoteOrder[c]);
              if (!n) continue;
              let d = e.all(n),
                t = String(n.identifier).toUpperCase(),
                i = ak(t.toLowerCase()),
                r = 0,
                b = [],
                f = e.footnoteCounts.get(t);
              for (; void 0 !== f && ++r <= f; ) {
                b.length > 0 && b.push({ type: "text", value: " " });
                let e = "string" == typeof s ? s : s(c, r);
                "string" == typeof e && (e = { type: "text", value: e }),
                  b.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                      href: "#" + a + "fnref-" + i + (r > 1 ? "-" + r : ""),
                      dataFootnoteBackref: "",
                      ariaLabel: "string" == typeof l ? l : l(c, r),
                      className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(e) ? e : [e],
                  });
              }
              let m = d[d.length - 1];
              if (m && "element" === m.type && "p" === m.tagName) {
                let e = m.children[m.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : m.children.push({ type: "text", value: " " }),
                  m.children.push(...b);
              } else d.push(...b);
              let E = {
                type: "element",
                tagName: "li",
                properties: { id: a + "fn-" + i },
                children: e.wrap(d, !0),
              };
              e.patch(n, E), o.push(E);
            }
            if (0 !== o.length)
              return {
                type: "element",
                tagName: "section",
                properties: { dataFootnotes: !0, className: ["footnotes"] },
                children: [
                  {
                    type: "element",
                    tagName: d,
                    properties: { ...ah(t), id: "footnote-label" },
                    children: [{ type: "text", value: n }],
                  },
                  { type: "text", value: "\n" },
                  {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(o, !0),
                  },
                  { type: "text", value: "\n" },
                ],
              };
          })(s),
          t = Array.isArray(l)
            ? { type: "root", children: l }
            : l || { type: "root", children: [] };
        return (
          n &&
            ((0, d.ok)("children" in t),
            t.children.push({ type: "text", value: "\n" }, n)),
          t
        );
      }
      function aj(e, a) {
        return e && "run" in e
          ? async function (s, l) {
              let n = aJ(s, { file: l, ...a });
              await e.run(n, l);
            }
          : function (s, l) {
              return aJ(s, { file: l, ...(e || a) });
            };
      }
      function aZ(e) {
        if (e) throw e;
      }
      var aX = s(7240);
      function aq(e) {
        if ("object" != typeof e || null === e) return !1;
        let a = Object.getPrototypeOf(e);
        return (
          (null === a ||
            a === Object.prototype ||
            null === Object.getPrototypeOf(a)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      let aK = {
        basename: function (e, a) {
          let s;
          if (void 0 !== a && "string" != typeof a)
            throw TypeError('"ext" argument must be a string');
          a$(e);
          let l = 0,
            n = -1,
            d = e.length;
          if (void 0 === a || 0 === a.length || a.length > e.length) {
            for (; d--; )
              if (47 === e.codePointAt(d)) {
                if (s) {
                  l = d + 1;
                  break;
                }
              } else n < 0 && ((s = !0), (n = d + 1));
            return n < 0 ? "" : e.slice(l, n);
          }
          if (a === e) return "";
          let t = -1,
            o = a.length - 1;
          for (; d--; )
            if (47 === e.codePointAt(d)) {
              if (s) {
                l = d + 1;
                break;
              }
            } else
              t < 0 && ((s = !0), (t = d + 1)),
                o > -1 &&
                  (e.codePointAt(d) === a.codePointAt(o--)
                    ? o < 0 && (n = d)
                    : ((o = -1), (n = t)));
          return l === n ? (n = t) : n < 0 && (n = e.length), e.slice(l, n);
        },
        dirname: function (e) {
          let a;
          if ((a$(e), 0 === e.length)) return ".";
          let s = -1,
            l = e.length;
          for (; --l; )
            if (47 === e.codePointAt(l)) {
              if (a) {
                s = l;
                break;
              }
            } else a || (a = !0);
          return s < 0
            ? 47 === e.codePointAt(0)
              ? "/"
              : "."
            : 1 === s && 47 === e.codePointAt(0)
            ? "//"
            : e.slice(0, s);
        },
        extname: function (e) {
          let a;
          a$(e);
          let s = e.length,
            l = -1,
            n = 0,
            d = -1,
            t = 0;
          for (; s--; ) {
            let o = e.codePointAt(s);
            if (47 === o) {
              if (a) {
                n = s + 1;
                break;
              }
              continue;
            }
            l < 0 && ((a = !0), (l = s + 1)),
              46 === o
                ? d < 0
                  ? (d = s)
                  : 1 !== t && (t = 1)
                : d > -1 && (t = -1);
          }
          return d < 0 ||
            l < 0 ||
            0 === t ||
            (1 === t && d === l - 1 && d === n + 1)
            ? ""
            : e.slice(d, l);
        },
        join: function (...e) {
          let a,
            s = -1;
          for (; ++s < e.length; )
            a$(e[s]), e[s] && (a = void 0 === a ? e[s] : a + "/" + e[s]);
          return void 0 === a
            ? "."
            : (function (e) {
                a$(e);
                let a = 47 === e.codePointAt(0),
                  s = (function (e, a) {
                    let s,
                      l,
                      n = "",
                      d = 0,
                      t = -1,
                      o = 0,
                      c = -1;
                    for (; ++c <= e.length; ) {
                      if (c < e.length) s = e.codePointAt(c);
                      else if (47 === s) break;
                      else s = 47;
                      if (47 === s) {
                        if (t === c - 1 || 1 === o);
                        else if (t !== c - 1 && 2 === o) {
                          if (
                            n.length < 2 ||
                            2 !== d ||
                            46 !== n.codePointAt(n.length - 1) ||
                            46 !== n.codePointAt(n.length - 2)
                          ) {
                            if (n.length > 2) {
                              if ((l = n.lastIndexOf("/")) !== n.length - 1) {
                                l < 0
                                  ? ((n = ""), (d = 0))
                                  : (d =
                                      (n = n.slice(0, l)).length -
                                      1 -
                                      n.lastIndexOf("/")),
                                  (t = c),
                                  (o = 0);
                                continue;
                              }
                            } else if (n.length > 0) {
                              (n = ""), (d = 0), (t = c), (o = 0);
                              continue;
                            }
                          }
                          a && ((n = n.length > 0 ? n + "/.." : ".."), (d = 2));
                        } else
                          n.length > 0
                            ? (n += "/" + e.slice(t + 1, c))
                            : (n = e.slice(t + 1, c)),
                            (d = c - t - 1);
                        (t = c), (o = 0);
                      } else 46 === s && o > -1 ? o++ : (o = -1);
                    }
                    return n;
                  })(e, !a);
                return (
                  0 !== s.length || a || (s = "."),
                  s.length > 0 &&
                    47 === e.codePointAt(e.length - 1) &&
                    (s += "/"),
                  a ? "/" + s : s
                );
              })(a);
        },
        sep: "/",
      };
      function a$(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      let a0 = {
        cwd: function () {
          return "/";
        },
      };
      function a2(e) {
        return !!(
          null !== e &&
          "object" == typeof e &&
          "href" in e &&
          e.href &&
          "protocol" in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      let a1 = ["history", "path", "basename", "stem", "extname", "dirname"];
      class a8 {
        constructor(e) {
          let a, s;
          (a = e
            ? a2(e)
              ? { path: e }
              : "string" == typeof e ||
                (function (e) {
                  return !!(
                    e &&
                    "object" == typeof e &&
                    "byteLength" in e &&
                    "byteOffset" in e
                  );
                })(e)
              ? { value: e }
              : e
            : {}),
            (this.cwd = "cwd" in a ? "" : a0.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let l = -1;
          for (; ++l < a1.length; ) {
            let e = a1[l];
            e in a &&
              void 0 !== a[e] &&
              null !== a[e] &&
              (this[e] = "history" === e ? [...a[e]] : a[e]);
          }
          for (s in a) a1.includes(s) || (this[s] = a[s]);
        }
        get basename() {
          return "string" == typeof this.path ? aK.basename(this.path) : void 0;
        }
        set basename(e) {
          a5(e, "basename"),
            a4(e, "basename"),
            (this.path = aK.join(this.dirname || "", e));
        }
        get dirname() {
          return "string" == typeof this.path ? aK.dirname(this.path) : void 0;
        }
        set dirname(e) {
          a6(this.basename, "dirname"),
            (this.path = aK.join(e || "", this.basename));
        }
        get extname() {
          return "string" == typeof this.path ? aK.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((a4(e, "extname"), a6(this.dirname, "extname"), e)) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = aK.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          a2(e) &&
            (e = (function (e) {
              if ("string" == typeof e) e = new URL(e);
              else if (!a2(e)) {
                let a = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    "`"
                );
                throw ((a.code = "ERR_INVALID_ARG_TYPE"), a);
              }
              if ("file:" !== e.protocol) {
                let e = TypeError("The URL must be of scheme file");
                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
              }
              return (function (e) {
                if ("" !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin'
                  );
                  throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                }
                let a = e.pathname,
                  s = -1;
                for (; ++s < a.length; )
                  if (37 === a.codePointAt(s) && 50 === a.codePointAt(s + 1)) {
                    let e = a.codePointAt(s + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        "File URL path must not include encoded / characters"
                      );
                      throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                    }
                  }
                return decodeURIComponent(a);
              })(e);
            })(e)),
            a5(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return "string" == typeof this.path
            ? aK.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          a5(e, "stem"),
            a4(e, "stem"),
            (this.path = aK.join(this.dirname || "", e + (this.extname || "")));
        }
        fail(e, a, s) {
          let l = this.message(e, a, s);
          throw ((l.fatal = !0), l);
        }
        info(e, a, s) {
          let l = this.message(e, a, s);
          return (l.fatal = void 0), l;
        }
        message(e, a, s) {
          let l = new K(e, a, s);
          return (
            this.path &&
              ((l.name = this.path + ":" + l.name), (l.file = this.path)),
            (l.fatal = !1),
            this.messages.push(l),
            l
          );
        }
        toString(e) {
          return void 0 === this.value
            ? ""
            : "string" == typeof this.value
            ? this.value
            : new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function a4(e, a) {
        if (e && e.includes(aK.sep))
          throw Error(
            "`" + a + "` cannot be a path: did not expect `" + aK.sep + "`"
          );
      }
      function a5(e, a) {
        if (!e) throw Error("`" + a + "` cannot be empty");
      }
      function a6(e, a) {
        if (!e)
          throw Error("Setting `" + a + "` requires `path` to be set too");
      }
      let a3 = function (e) {
          let a = this.constructor.prototype,
            s = a[e],
            l = function () {
              return s.apply(l, arguments);
            };
          return Object.setPrototypeOf(l, a), l;
        },
        a9 = {}.hasOwnProperty;
      class a7 extends a3 {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                a = {
                  run: function (...a) {
                    let s = -1,
                      l = a.pop();
                    if ("function" != typeof l)
                      throw TypeError(
                        "Expected function as last argument, not " + l
                      );
                    !(function n(d, ...t) {
                      let o = e[++s],
                        c = -1;
                      if (d) return void l(d);
                      for (; ++c < a.length; )
                        (null === t[c] || void 0 === t[c]) && (t[c] = a[c]);
                      (a = t),
                        o
                          ? (function (e, a) {
                              let s;
                              return function (...a) {
                                let d,
                                  t = e.length > a.length;
                                t && a.push(l);
                                try {
                                  d = e.apply(this, a);
                                } catch (e) {
                                  if (t && s) throw e;
                                  return l(e);
                                }
                                t ||
                                  (d && d.then && "function" == typeof d.then
                                    ? d.then(n, l)
                                    : d instanceof Error
                                    ? l(d)
                                    : n(d));
                              };
                              function l(e, ...n) {
                                s || ((s = !0), a(e, ...n));
                              }
                              function n(e) {
                                l(null, e);
                              }
                            })(
                              o,
                              n
                            )(...t)
                          : l(null, ...t);
                    })(null, ...a);
                  },
                  use: function (s) {
                    if ("function" != typeof s)
                      throw TypeError(
                        "Expected `middelware` to be a function, not " + s
                      );
                    return e.push(s), a;
                  },
                };
              return a;
            })());
        }
        copy() {
          let e = new a7(),
            a = -1;
          for (; ++a < this.attachers.length; ) {
            let s = this.attachers[a];
            e.use(...s);
          }
          return e.data(aX(!0, {}, this.namespace)), e;
        }
        data(e, a) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (sl("data", this.frozen), (this.namespace[e] = a), this)
              : (a9.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
            ? (sl("data", this.frozen), (this.namespace = e), this)
            : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...a] = this.attachers[this.freezeIndex];
            if (!1 === a[0]) continue;
            !0 === a[0] && (a[0] = void 0);
            let s = e.call(this, ...a);
            "function" == typeof s && this.transformers.use(s);
          }
          return (this.frozen = !0), (this.freezeIndex = 1 / 0), this;
        }
        parse(e) {
          this.freeze();
          let a = st(e),
            s = this.parser || this.Parser;
          return sa("parse", s), s(String(a), a);
        }
        process(e, a) {
          let s = this;
          return (
            this.freeze(),
            sa("process", this.parser || this.Parser),
            ss("process", this.compiler || this.Compiler),
            a ? l(void 0, a) : new Promise(l)
          );
          function l(l, n) {
            let t = st(e),
              o = s.parse(t);
            function c(e, s) {
              e || !s
                ? n(e)
                : l
                ? l(s)
                : ((0, d.ok)(a, "`done` is defined if `resolve` is not"),
                  a(void 0, s));
            }
            s.run(o, t, function (e, a, l) {
              var n, d;
              if (e || !a || !l) return c(e);
              let t = s.stringify(a, l);
              "string" == typeof (n = t) ||
              ((d = n) &&
                "object" == typeof d &&
                "byteLength" in d &&
                "byteOffset" in d)
                ? (l.value = t)
                : (l.result = t),
                c(e, l);
            });
          }
        }
        processSync(e) {
          let a,
            s = !1;
          return (
            this.freeze(),
            sa("processSync", this.parser || this.Parser),
            ss("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, l) {
              (s = !0), aZ(e), (a = l);
            }),
            sd("processSync", "process", s),
            (0, d.ok)(a, "we either bailed on an error or have a tree"),
            a
          );
        }
        run(e, a, s) {
          sn(e), this.freeze();
          let l = this.transformers;
          return (
            s || "function" != typeof a || ((s = a), (a = void 0)),
            s ? n(void 0, s) : new Promise(n)
          );
          function n(n, t) {
            (0, d.ok)(
              "function" != typeof a,
              "`file` can’t be a `done` anymore, we checked"
            );
            let o = st(a);
            l.run(e, o, function (a, l, o) {
              let c = l || e;
              a
                ? t(a)
                : n
                ? n(c)
                : ((0, d.ok)(s, "`done` is defined if `resolve` is not"),
                  s(void 0, c, o));
            });
          }
        }
        runSync(e, a) {
          let s,
            l = !1;
          return (
            this.run(e, a, function (e, a) {
              aZ(e), (s = a), (l = !0);
            }),
            sd("runSync", "run", l),
            (0, d.ok)(s, "we either bailed on an error or have a tree"),
            s
          );
        }
        stringify(e, a) {
          this.freeze();
          let s = st(a),
            l = this.compiler || this.Compiler;
          return ss("stringify", l), sn(e), l(e, s);
        }
        use(e, ...a) {
          let s = this.attachers,
            l = this.namespace;
          if ((sl("use", this.frozen), null == e));
          else if ("function" == typeof e) t(e, a);
          else if ("object" == typeof e) Array.isArray(e) ? d(e) : n(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function n(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
              );
            d(e.plugins),
              e.settings && (l.settings = aX(!0, l.settings, e.settings));
          }
          function d(e) {
            let a = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++a < e.length; ) {
                var s = e[a];
                if ("function" == typeof s) t(s, []);
                else if ("object" == typeof s)
                  if (Array.isArray(s)) {
                    let [e, ...a] = s;
                    t(e, a);
                  } else n(s);
                else throw TypeError("Expected usable value, not `" + s + "`");
              }
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function t(e, a) {
            let l = -1,
              n = -1;
            for (; ++l < s.length; )
              if (s[l][0] === e) {
                n = l;
                break;
              }
            if (-1 === n) s.push([e, ...a]);
            else if (a.length > 0) {
              let [l, ...d] = a,
                t = s[n][1];
              aq(t) && aq(l) && (l = aX(!0, t, l)), (s[n] = [e, l, ...d]);
            }
          }
        }
      }
      let se = new a7().freeze();
      function sa(e, a) {
        if ("function" != typeof a)
          throw TypeError("Cannot `" + e + "` without `parser`");
      }
      function ss(e, a) {
        if ("function" != typeof a)
          throw TypeError("Cannot `" + e + "` without `compiler`");
      }
      function sl(e, a) {
        if (a)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function sn(e) {
        if (!aq(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function sd(e, a, s) {
        if (!s)
          throw Error("`" + e + "` finished async. Use `" + a + "` instead");
      }
      function st(e) {
        var a;
        return (a = e) &&
          "object" == typeof a &&
          "message" in a &&
          "messages" in a
          ? e
          : new a8(e);
      }
      let so = [],
        sc = { allowDangerousHtml: !0 },
        si = /^(https?|ircs?|mailto|xmpp)$/i,
        sr = [
          { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
          {
            from: "allowDangerousHtml",
            id: "remove-buggy-html-in-markdown-parser",
          },
          {
            from: "allowNode",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowElement",
          },
          {
            from: "allowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowedElements",
          },
          { from: "className", id: "remove-classname" },
          {
            from: "disallowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "disallowedElements",
          },
          { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
          { from: "includeElementIndex", id: "#remove-includeelementindex" },
          {
            from: "includeNodeIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
          { from: "linkTarget", id: "remove-linktarget" },
          {
            from: "plugins",
            id: "change-plugins-to-remarkplugins",
            to: "remarkPlugins",
          },
          { from: "rawSourcePos", id: "#remove-rawsourcepos" },
          {
            from: "renderers",
            id: "change-renderers-to-components",
            to: "components",
          },
          { from: "source", id: "change-source-to-children", to: "children" },
          { from: "sourcePos", id: "#remove-sourcepos" },
          {
            from: "transformImageUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
          {
            from: "transformLinkUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
        ];
      function sb(e) {
        let a = (function (e) {
            let a = e.rehypePlugins || so,
              s = e.remarkPlugins || so,
              l = e.remarkRehypeOptions
                ? { ...e.remarkRehypeOptions, ...sc }
                : sc;
            return se().use(aP).use(s).use(aj, l).use(a);
          })(e),
          s = (function (e) {
            let a = e.children || "",
              s = new a8();
            return (
              "string" == typeof a
                ? (s.value = a)
                : (0, d.HB)(
                    "Unexpected value `" +
                      a +
                      "` for `children` prop, expected `string`"
                  ),
              s
            );
          })(e);
        return (function (e, a) {
          let s = a.allowedElements,
            l = a.allowElement,
            n = a.components,
            t = a.disallowedElements,
            o = a.skipHtml,
            c = a.unwrapDisallowed,
            i = a.urlTransform || sf;
          for (let e of sr)
            Object.hasOwn(a, e.from) &&
              (0, d.HB)(
                "Unexpected `" +
                  e.from +
                  "` prop, " +
                  (e.to ? "use `" + e.to + "` instead" : "remove it") +
                  " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" +
                  e.id +
                  "> for more info)"
              );
          return (
            s &&
              t &&
              (0, d.HB)(
                "Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other"
              ),
            (0, aF.YR)(e, function (e, a, n) {
              if ("raw" === e.type && n && "number" == typeof a)
                return (
                  o
                    ? n.children.splice(a, 1)
                    : (n.children[a] = { type: "text", value: e.value }),
                  a
                );
              if ("element" === e.type) {
                let a;
                for (a in ef)
                  if (Object.hasOwn(ef, a) && Object.hasOwn(e.properties, a)) {
                    let s = e.properties[a],
                      l = ef[a];
                    (null === l || l.includes(e.tagName)) &&
                      (e.properties[a] = i(String(s || ""), a, e));
                  }
              }
              if ("element" === e.type) {
                let d = s
                  ? !s.includes(e.tagName)
                  : !!t && t.includes(e.tagName);
                if (
                  (!d && l && "number" == typeof a && (d = !l(e, a, n)),
                  d && n && "number" == typeof a)
                )
                  return (
                    c && e.children
                      ? n.children.splice(a, 1, ...e.children)
                      : n.children.splice(a, 1),
                    a
                  );
              }
            }),
            (function (e, a) {
              var s, l, n, d;
              let t;
              if (!a || void 0 === a.Fragment)
                throw TypeError("Expected `Fragment` in options");
              let o = a.filePath || void 0;
              if (a.development) {
                if ("function" != typeof a.jsxDEV)
                  throw TypeError(
                    "Expected `jsxDEV` in options when `development: true`"
                  );
                (s = o),
                  (l = a.jsxDEV),
                  (t = function (e, a, n, d) {
                    let t = Array.isArray(n.children),
                      o = z(e);
                    return l(
                      a,
                      n,
                      d,
                      t,
                      {
                        columnNumber: o ? o.column - 1 : void 0,
                        fileName: s,
                        lineNumber: o ? o.line : void 0,
                      },
                      void 0
                    );
                  });
              } else {
                if ("function" != typeof a.jsx)
                  throw TypeError("Expected `jsx` in production options");
                if ("function" != typeof a.jsxs)
                  throw TypeError("Expected `jsxs` in production options");
                (n = a.jsx),
                  (d = a.jsxs),
                  (t = function (e, a, s, l) {
                    let t = Array.isArray(s.children) ? d : n;
                    return l ? t(a, s, l) : t(a, s);
                  });
              }
              let c = {
                  Fragment: a.Fragment,
                  ancestors: [],
                  components: a.components || {},
                  create: t,
                  elementAttributeNameCase:
                    a.elementAttributeNameCase || "react",
                  evaluater: a.createEvaluater ? a.createEvaluater() : void 0,
                  filePath: o,
                  ignoreInvalidStyle: a.ignoreInvalidStyle || !1,
                  passKeys: !1 !== a.passKeys,
                  passNode: a.passNode || !1,
                  schema: "svg" === a.space ? H : N,
                  stylePropertyNameCase: a.stylePropertyNameCase || "dom",
                  tableCellAlignToStyle: !1 !== a.tableCellAlignToStyle,
                },
                i = ed(c, e, void 0);
              return i && "string" != typeof i
                ? i
                : c.create(e, c.Fragment, { children: i || void 0 }, void 0);
            })(e, {
              Fragment: em.Fragment,
              components: n,
              ignoreInvalidStyle: !0,
              jsx: em.jsx,
              jsxs: em.jsxs,
              passKeys: !0,
              passNode: !0,
            })
          );
        })(a.runSync(a.parse(s), s), e);
      }
      function sf(e) {
        let a = e.indexOf(":"),
          s = e.indexOf("?"),
          l = e.indexOf("#"),
          n = e.indexOf("/");
        return -1 === a ||
          (-1 !== n && a > n) ||
          (-1 !== s && a > s) ||
          (-1 !== l && a > l) ||
          si.test(e.slice(0, a))
          ? e
          : "";
      }
    },
    8654: (e, a, s) => {
      s.d(a, { A: () => l });
      let l = (0, s(809).A)("Activity", [
        [
          "path",
          {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse",
          },
        ],
      ]);
    },
    8901: (e, a, s) => {
      s.d(a, { A: () => l });
      let l = (0, s(809).A)("MessageCircle", [
        ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
      ]);
    },
    9428: (e, a, s) => {
      function l(e, a) {
        let s = String(e);
        if ("string" != typeof a) throw TypeError("Expected character");
        let l = 0,
          n = s.indexOf(a);
        for (; -1 !== n; ) l++, (n = s.indexOf(a, n + a.length));
        return l;
      }
      s.d(a, { A: () => eO });
      var n = s(4788),
        d = s(6299),
        t = s(4361),
        o = s(5260);
      let c = "phrasing",
        i = ["autolink", "link", "image", "label"];
      function r(e) {
        this.enter({ type: "link", title: null, url: "", children: [] }, e);
      }
      function b(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function f(e) {
        this.config.exit.autolinkProtocol.call(this, e);
      }
      function m(e) {
        this.config.exit.data.call(this, e);
        let a = this.stack[this.stack.length - 1];
        (0, n.ok)("link" === a.type),
          (a.url = "http://" + this.sliceSerialize(e));
      }
      function E(e) {
        this.config.exit.autolinkEmail.call(this, e);
      }
      function u(e) {
        this.exit(e);
      }
      function D(e) {
        !(function (e, a, s) {
          let l = (0, o.C)((s || {}).ignore || []),
            n = (function (e) {
              let a = [];
              if (!Array.isArray(e))
                throw TypeError(
                  "Expected find and replace tuple or list of tuples"
                );
              let s = !e[0] || Array.isArray(e[0]) ? e : [e],
                l = -1;
              for (; ++l < s.length; ) {
                var n;
                let e = s[l];
                a.push([
                  "string" == typeof (n = e[0])
                    ? RegExp(
                        (function (e) {
                          if ("string" != typeof e)
                            throw TypeError("Expected a string");
                          return e
                            .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                            .replace(/-/g, "\\x2d");
                        })(n),
                        "g"
                      )
                    : n,
                  (function (e) {
                    return "function" == typeof e
                      ? e
                      : function () {
                          return e;
                        };
                  })(e[1]),
                ]);
              }
              return a;
            })(a),
            d = -1;
          for (; ++d < n.length; ) (0, t.VG)(e, "text", c);
          function c(e, a) {
            let s,
              t = -1;
            for (; ++t < a.length; ) {
              let e = a[t],
                n = s ? s.children : void 0;
              if (l(e, n ? n.indexOf(e) : void 0, s)) return;
              s = e;
            }
            if (s)
              return (function (e, a) {
                let s = a[a.length - 1],
                  l = n[d][0],
                  t = n[d][1],
                  o = 0,
                  c = s.children.indexOf(e),
                  i = !1,
                  r = [];
                l.lastIndex = 0;
                let b = l.exec(e.value);
                for (; b; ) {
                  let s = b.index,
                    n = { index: b.index, input: b.input, stack: [...a, e] },
                    d = t(...b, n);
                  if (
                    ("string" == typeof d &&
                      (d = d.length > 0 ? { type: "text", value: d } : void 0),
                    !1 === d
                      ? (l.lastIndex = s + 1)
                      : (o !== s &&
                          r.push({ type: "text", value: e.value.slice(o, s) }),
                        Array.isArray(d) ? r.push(...d) : d && r.push(d),
                        (o = s + b[0].length),
                        (i = !0)),
                    !l.global)
                  )
                    break;
                  b = l.exec(e.value);
                }
                return (
                  i
                    ? (o < e.value.length &&
                        r.push({ type: "text", value: e.value.slice(o) }),
                      s.children.splice(c, 1, ...r))
                    : (r = [e]),
                  c + r.length
                );
              })(e, a);
          }
        })(
          e,
          [
            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, A],
            [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, I],
          ],
          { ignore: ["link", "linkReference"] }
        );
      }
      function A(e, a, s, n, d) {
        let t = "";
        if (
          !T(d) ||
          (/^w/i.test(a) && ((s = a + s), (a = ""), (t = "http://")),
          !(function (e) {
            let a = e.split(".");
            return !(
              a.length < 2 ||
              (a[a.length - 1] &&
                (/_/.test(a[a.length - 1]) ||
                  !/[a-zA-Z\d]/.test(a[a.length - 1]))) ||
              (a[a.length - 2] &&
                (/_/.test(a[a.length - 2]) ||
                  !/[a-zA-Z\d]/.test(a[a.length - 2])))
            );
          })(s))
        )
          return !1;
        let o = (function (e) {
          let a = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (!a) return [e, void 0];
          e = e.slice(0, a.index);
          let s = a[0],
            n = s.indexOf(")"),
            d = l(e, "("),
            t = l(e, ")");
          for (; -1 !== n && d > t; )
            (e += s.slice(0, n + 1)),
              (n = (s = s.slice(n + 1)).indexOf(")")),
              t++;
          return [e, s];
        })(s + n);
        if (!o[0]) return !1;
        let c = {
          type: "link",
          title: null,
          url: t + a + o[0],
          children: [{ type: "text", value: a + o[0] }],
        };
        return o[1] ? [c, { type: "text", value: o[1] }] : c;
      }
      function I(e, a, s, l) {
        return (
          !(!T(l, !0) || /[-\d_]$/.test(s)) && {
            type: "link",
            title: null,
            url: "mailto:" + a + "@" + s,
            children: [{ type: "text", value: a + "@" + s }],
          }
        );
      }
      function T(e, a) {
        let s = e.input.charCodeAt(e.index - 1);
        return (
          (0 === e.index || (0, d.Ny)(s) || (0, d.es)(s)) && (!a || 47 !== s)
        );
      }
      var p = s(5846);
      function y() {
        this.buffer();
      }
      function P(e) {
        this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
      }
      function C() {
        this.buffer();
      }
      function S(e) {
        this.enter(
          {
            type: "footnoteDefinition",
            identifier: "",
            label: "",
            children: [],
          },
          e
        );
      }
      function x(e) {
        let a = this.resume(),
          s = this.stack[this.stack.length - 1];
        (0, n.ok)("footnoteReference" === s.type),
          (s.identifier = (0, p.B)(this.sliceSerialize(e)).toLowerCase()),
          (s.label = a);
      }
      function B(e) {
        this.exit(e);
      }
      function M(e) {
        let a = this.resume(),
          s = this.stack[this.stack.length - 1];
        (0, n.ok)("footnoteDefinition" === s.type),
          (s.identifier = (0, p.B)(this.sliceSerialize(e)).toLowerCase()),
          (s.label = a);
      }
      function R(e) {
        this.exit(e);
      }
      function g(e, a, s, l) {
        let n = s.createTracker(l),
          d = n.move("[^"),
          t = s.enter("footnoteReference"),
          o = s.enter("reference");
        return (
          (d += n.move(s.safe(s.associationId(e), { after: "]", before: d }))),
          o(),
          t(),
          (d += n.move("]"))
        );
      }
      function L(e, a, s) {
        return 0 === a ? e : h(e, a, s);
      }
      function h(e, a, s) {
        return (s ? "" : "    ") + e;
      }
      g.peek = function () {
        return "[";
      };
      let k = [
        "autolink",
        "destinationLiteral",
        "destinationRaw",
        "reference",
        "titleQuote",
        "titleApostrophe",
      ];
      function O(e) {
        this.enter({ type: "delete", children: [] }, e);
      }
      function U(e) {
        this.exit(e);
      }
      function F(e, a, s, l) {
        let n = s.createTracker(l),
          d = s.enter("strikethrough"),
          t = n.move("~~");
        return (
          (t += s.containerPhrasing(e, {
            ...n.current(),
            before: t,
            after: "~",
          })),
          (t += n.move("~~")),
          d(),
          t
        );
      }
      function N(e) {
        return e.length;
      }
      function H(e) {
        let a = "string" == typeof e ? e.codePointAt(0) : 0;
        return 67 === a || 99 === a
          ? 99
          : 76 === a || 108 === a
          ? 108
          : 114 * (82 === a || 114 === a);
      }
      F.peek = function () {
        return "~";
      };
      var W = s(784);
      s(5937);
      s(3389);
      function w(e, a, s) {
        let l = e.value || "",
          n = "`",
          d = -1;
        for (; RegExp("(^|[^`])" + n + "([^`]|$)").test(l); ) n += "`";
        for (
          /[^ \r\n]/.test(l) &&
          ((/^[ \r\n]/.test(l) && /[ \r\n]$/.test(l)) || /^`|`$/.test(l)) &&
          (l = " " + l + " ");
          ++d < s.unsafe.length;

        ) {
          let e,
            a = s.unsafe[d],
            n = s.compilePattern(a);
          if (a.atBreak)
            for (; (e = n.exec(l)); ) {
              let a = e.index;
              10 === l.charCodeAt(a) && 13 === l.charCodeAt(a - 1) && a--,
                (l = l.slice(0, a) + " " + l.slice(e.index + 1));
            }
        }
        return n + l + n;
      }
      w.peek = function () {
        return "`";
      };
      (0, o.C)([
        "break",
        "delete",
        "emphasis",
        "footnote",
        "footnoteReference",
        "image",
        "imageReference",
        "inlineCode",
        "inlineMath",
        "link",
        "linkReference",
        "mdxJsxTextElement",
        "mdxTextExpression",
        "strong",
        "text",
        "textDirective",
      ]);
      let Y = {
        inlineCode: w,
        listItem: function (e, a, s, l) {
          let n = (function (e) {
              let a = e.options.listItemIndent || "one";
              if ("tab" !== a && "one" !== a && "mixed" !== a)
                throw Error(
                  "Cannot serialize items with `" +
                    a +
                    "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
                );
              return a;
            })(s),
            d =
              s.bulletCurrent ||
              (function (e) {
                let a = e.options.bullet || "*";
                if ("*" !== a && "+" !== a && "-" !== a)
                  throw Error(
                    "Cannot serialize items with `" +
                      a +
                      "` for `options.bullet`, expected `*`, `+`, or `-`"
                  );
                return a;
              })(s);
          a &&
            "list" === a.type &&
            a.ordered &&
            (d =
              ("number" == typeof a.start && a.start > -1 ? a.start : 1) +
              (!1 === s.options.incrementListMarker
                ? 0
                : a.children.indexOf(e)) +
              d);
          let t = d.length + 1;
          ("tab" === n ||
            ("mixed" === n &&
              ((a && "list" === a.type && a.spread) || e.spread))) &&
            (t = 4 * Math.ceil(t / 4));
          let o = s.createTracker(l);
          o.move(d + " ".repeat(t - d.length)), o.shift(t);
          let c = s.enter("listItem"),
            i = s.indentLines(
              s.containerFlow(e, o.current()),
              function (e, a, s) {
                return a
                  ? (s ? "" : " ".repeat(t)) + e
                  : (s ? d : d + " ".repeat(t - d.length)) + e;
              }
            );
          return c(), i;
        },
      };
      function G(e) {
        let a = e._align;
        (0, n.ok)(a, "expected `_align` on table"),
          this.enter(
            {
              type: "table",
              align: a.map(function (e) {
                return "none" === e ? null : e;
              }),
              children: [],
            },
            e
          ),
          (this.data.inTable = !0);
      }
      function v(e) {
        this.exit(e), (this.data.inTable = void 0);
      }
      function V(e) {
        this.enter({ type: "tableRow", children: [] }, e);
      }
      function _(e) {
        this.exit(e);
      }
      function Q(e) {
        this.enter({ type: "tableCell", children: [] }, e);
      }
      function z(e) {
        let a = this.resume();
        this.data.inTable && (a = a.replace(/\\([\\|])/g, J));
        let s = this.stack[this.stack.length - 1];
        (0, n.ok)("inlineCode" === s.type), (s.value = a), this.exit(e);
      }
      function J(e, a) {
        return "|" === a ? a : e;
      }
      function j(e) {
        let a = this.stack[this.stack.length - 2];
        (0, n.ok)("listItem" === a.type),
          (a.checked = "taskListCheckValueChecked" === e.type);
      }
      function Z(e) {
        let a = this.stack[this.stack.length - 2];
        if (a && "listItem" === a.type && "boolean" == typeof a.checked) {
          let e = this.stack[this.stack.length - 1];
          (0, n.ok)("paragraph" === e.type);
          let s = e.children[0];
          if (s && "text" === s.type) {
            let l,
              n = a.children,
              d = -1;
            for (; ++d < n.length; ) {
              let e = n[d];
              if ("paragraph" === e.type) {
                l = e;
                break;
              }
            }
            l === e &&
              ((s.value = s.value.slice(1)),
              0 === s.value.length
                ? e.children.shift()
                : e.position &&
                  s.position &&
                  "number" == typeof s.position.start.offset &&
                  (s.position.start.column++,
                  s.position.start.offset++,
                  (e.position.start = Object.assign({}, s.position.start))));
          }
        }
        this.exit(e);
      }
      function X(e, a, s, l) {
        let n = e.children[0],
          d = "boolean" == typeof e.checked && n && "paragraph" === n.type,
          t = "[" + (e.checked ? "x" : " ") + "] ",
          o = s.createTracker(l);
        d && o.move(t);
        let c = Y.listItem(e, a, s, { ...l, ...o.current() });
        return (
          d &&
            (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
              return e + t;
            })),
          c
        );
      }
      var q = s(5220);
      let K = {
          tokenize: function (e, a, s) {
            let l = 0;
            return function a(d) {
              return (87 === d || 119 === d) && l < 3
                ? (l++, e.consume(d), a)
                : 46 === d && 3 === l
                ? (e.consume(d), n)
                : s(d);
            };
            function n(e) {
              return null === e ? s(e) : a(e);
            }
          },
          partial: !0,
        },
        $ = {
          tokenize: function (e, a, s) {
            let l, n, t;
            return o;
            function o(a) {
              return 46 === a || 95 === a
                ? e.check(ea, i, c)(a)
                : null === a ||
                  (0, d.Ee)(a) ||
                  (0, d.Ny)(a) ||
                  (45 !== a && (0, d.es)(a))
                ? i(a)
                : ((t = !0), e.consume(a), o);
            }
            function c(a) {
              return (
                95 === a ? (l = !0) : ((n = l), (l = void 0)), e.consume(a), o
              );
            }
            function i(e) {
              return n || l || !t ? s(e) : a(e);
            }
          },
          partial: !0,
        },
        ee = {
          tokenize: function (e, a) {
            let s = 0,
              l = 0;
            return n;
            function n(o) {
              return 40 === o
                ? (s++, e.consume(o), n)
                : 41 === o && l < s
                ? t(o)
                : 33 === o ||
                  34 === o ||
                  38 === o ||
                  39 === o ||
                  41 === o ||
                  42 === o ||
                  44 === o ||
                  46 === o ||
                  58 === o ||
                  59 === o ||
                  60 === o ||
                  63 === o ||
                  93 === o ||
                  95 === o ||
                  126 === o
                ? e.check(ea, a, t)(o)
                : null === o || (0, d.Ee)(o) || (0, d.Ny)(o)
                ? a(o)
                : (e.consume(o), n);
            }
            function t(a) {
              return 41 === a && l++, e.consume(a), n;
            }
          },
          partial: !0,
        },
        ea = {
          tokenize: function (e, a, s) {
            return l;
            function l(o) {
              return 33 === o ||
                34 === o ||
                39 === o ||
                41 === o ||
                42 === o ||
                44 === o ||
                46 === o ||
                58 === o ||
                59 === o ||
                63 === o ||
                95 === o ||
                126 === o
                ? (e.consume(o), l)
                : 38 === o
                ? (e.consume(o), t)
                : 93 === o
                ? (e.consume(o), n)
                : 60 === o || null === o || (0, d.Ee)(o) || (0, d.Ny)(o)
                ? a(o)
                : s(o);
            }
            function n(e) {
              return null === e ||
                40 === e ||
                91 === e ||
                (0, d.Ee)(e) ||
                (0, d.Ny)(e)
                ? a(e)
                : l(e);
            }
            function t(a) {
              return (0, d.CW)(a)
                ? (function a(n) {
                    return 59 === n
                      ? (e.consume(n), l)
                      : (0, d.CW)(n)
                      ? (e.consume(n), a)
                      : s(n);
                  })(a)
                : s(a);
            }
          },
          partial: !0,
        },
        es = {
          tokenize: function (e, a, s) {
            return function (a) {
              return e.consume(a), l;
            };
            function l(e) {
              return (0, d.lV)(e) ? s(e) : a(e);
            }
          },
          partial: !0,
        },
        el = {
          name: "wwwAutolink",
          tokenize: function (e, a, s) {
            let l = this;
            return function (a) {
              return (87 !== a && 119 !== a) ||
                !ec.call(l, l.previous) ||
                ef(l.events)
                ? s(a)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkWww"),
                  e.check(K, e.attempt($, e.attempt(ee, n), s), s)(a));
            };
            function n(s) {
              return (
                e.exit("literalAutolinkWww"), e.exit("literalAutolink"), a(s)
              );
            }
          },
          previous: ec,
        },
        en = {
          name: "protocolAutolink",
          tokenize: function (e, a, s) {
            let l = this,
              n = "",
              t = !1;
            return function (a) {
              return (72 === a || 104 === a) &&
                ei.call(l, l.previous) &&
                !ef(l.events)
                ? (e.enter("literalAutolink"),
                  e.enter("literalAutolinkHttp"),
                  (n += String.fromCodePoint(a)),
                  e.consume(a),
                  o)
                : s(a);
            };
            function o(a) {
              if ((0, d.CW)(a) && n.length < 5)
                return (n += String.fromCodePoint(a)), e.consume(a), o;
              if (58 === a) {
                let s = n.toLowerCase();
                if ("http" === s || "https" === s) return e.consume(a), c;
              }
              return s(a);
            }
            function c(a) {
              return 47 === a ? ((e.consume(a), t) ? i : ((t = !0), c)) : s(a);
            }
            function i(a) {
              return null === a ||
                (0, d.JQ)(a) ||
                (0, d.Ee)(a) ||
                (0, d.Ny)(a) ||
                (0, d.es)(a)
                ? s(a)
                : e.attempt($, e.attempt(ee, r), s)(a);
            }
            function r(s) {
              return (
                e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), a(s)
              );
            }
          },
          previous: ei,
        },
        ed = {
          name: "emailAutolink",
          tokenize: function (e, a, s) {
            let l,
              n,
              t = this;
            return function (a) {
              return !eb(a) || !er.call(t, t.previous) || ef(t.events)
                ? s(a)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkEmail"),
                  (function a(l) {
                    return eb(l)
                      ? (e.consume(l), a)
                      : 64 === l
                      ? (e.consume(l), o)
                      : s(l);
                  })(a));
            };
            function o(a) {
              return 46 === a
                ? e.check(es, i, c)(a)
                : 45 === a || 95 === a || (0, d.lV)(a)
                ? ((n = !0), e.consume(a), o)
                : i(a);
            }
            function c(a) {
              return e.consume(a), (l = !0), o;
            }
            function i(o) {
              return n && l && (0, d.CW)(t.previous)
                ? (e.exit("literalAutolinkEmail"),
                  e.exit("literalAutolink"),
                  a(o))
                : s(o);
            }
          },
          previous: er,
        },
        et = {},
        eo = 48;
      for (; eo < 123; )
        (et[eo] = ed), 58 == ++eo ? (eo = 65) : 91 === eo && (eo = 97);
      function ec(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          91 === e ||
          93 === e ||
          126 === e ||
          (0, d.Ee)(e)
        );
      }
      function ei(e) {
        return !(0, d.CW)(e);
      }
      function er(e) {
        return !(47 === e || eb(e));
      }
      function eb(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || (0, d.lV)(e);
      }
      function ef(e) {
        let a = e.length,
          s = !1;
        for (; a--; ) {
          let l = e[a][1];
          if (
            ("labelLink" === l.type || "labelImage" === l.type) &&
            !l._balanced
          ) {
            s = !0;
            break;
          }
          if (l._gfmAutolinkLiteralWalkedInto) {
            s = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !s &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          s
        );
      }
      (et[43] = ed),
        (et[45] = ed),
        (et[46] = ed),
        (et[95] = ed),
        (et[72] = [ed, en]),
        (et[104] = [ed, en]),
        (et[87] = [ed, el]),
        (et[119] = [ed, el]);
      var em = s(1147),
        eE = s(4964);
      let eu = {
        tokenize: function (e, a, s) {
          let l = this;
          return (0, eE.N)(
            e,
            function (e) {
              let n = l.events[l.events.length - 1];
              return n &&
                "gfmFootnoteDefinitionIndent" === n[1].type &&
                4 === n[2].sliceSerialize(n[1], !0).length
                ? a(e)
                : s(e);
            },
            "gfmFootnoteDefinitionIndent",
            5
          );
        },
        partial: !0,
      };
      function eD(e, a, s) {
        let l,
          n = this,
          d = n.events.length,
          t = n.parser.gfmFootnotes || (n.parser.gfmFootnotes = []);
        for (; d--; ) {
          let e = n.events[d][1];
          if ("labelImage" === e.type) {
            l = e;
            break;
          }
          if (
            "gfmFootnoteCall" === e.type ||
            "labelLink" === e.type ||
            "label" === e.type ||
            "image" === e.type ||
            "link" === e.type
          )
            break;
        }
        return function (d) {
          if (!l || !l._balanced) return s(d);
          let o = (0, p.B)(n.sliceSerialize({ start: l.end, end: n.now() }));
          return 94 === o.codePointAt(0) && t.includes(o.slice(1))
            ? (e.enter("gfmFootnoteCallLabelMarker"),
              e.consume(d),
              e.exit("gfmFootnoteCallLabelMarker"),
              a(d))
            : s(d);
        };
      }
      function eA(e, a) {
        let s = e.length;
        for (; s--; )
          if ("labelImage" === e[s][1].type && "enter" === e[s][0]) {
            e[s][1];
            break;
          }
        (e[s + 1][1].type = "data"),
          (e[s + 3][1].type = "gfmFootnoteCallLabelMarker");
        let l = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[s + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          },
          n = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[s + 3][1].end),
            end: Object.assign({}, e[s + 3][1].end),
          };
        n.end.column++, n.end.offset++, n.end._bufferIndex++;
        let d = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, n.end),
            end: Object.assign({}, e[e.length - 1][1].start),
          },
          t = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, d.start),
            end: Object.assign({}, d.end),
          },
          o = [
            e[s + 1],
            e[s + 2],
            ["enter", l, a],
            e[s + 3],
            e[s + 4],
            ["enter", n, a],
            ["exit", n, a],
            ["enter", d, a],
            ["enter", t, a],
            ["exit", t, a],
            ["exit", d, a],
            e[e.length - 2],
            e[e.length - 1],
            ["exit", l, a],
          ];
        return e.splice(s, e.length - s + 1, ...o), e;
      }
      function eI(e, a, s) {
        let l,
          n = this,
          t = n.parser.gfmFootnotes || (n.parser.gfmFootnotes = []),
          o = 0;
        return function (a) {
          return (
            e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(a),
            e.exit("gfmFootnoteCallLabelMarker"),
            c
          );
        };
        function c(a) {
          return 94 !== a
            ? s(a)
            : (e.enter("gfmFootnoteCallMarker"),
              e.consume(a),
              e.exit("gfmFootnoteCallMarker"),
              e.enter("gfmFootnoteCallString"),
              (e.enter("chunkString").contentType = "string"),
              i);
        }
        function i(c) {
          if (
            o > 999 ||
            (93 === c && !l) ||
            null === c ||
            91 === c ||
            (0, d.Ee)(c)
          )
            return s(c);
          if (93 === c) {
            e.exit("chunkString");
            let l = e.exit("gfmFootnoteCallString");
            return t.includes((0, p.B)(n.sliceSerialize(l)))
              ? (e.enter("gfmFootnoteCallLabelMarker"),
                e.consume(c),
                e.exit("gfmFootnoteCallLabelMarker"),
                e.exit("gfmFootnoteCall"),
                a)
              : s(c);
          }
          return (0, d.Ee)(c) || (l = !0), o++, e.consume(c), 92 === c ? r : i;
        }
        function r(a) {
          return 91 === a || 92 === a || 93 === a
            ? (e.consume(a), o++, i)
            : i(a);
        }
      }
      function eT(e, a, s) {
        let l,
          n,
          t = this,
          o = t.parser.gfmFootnotes || (t.parser.gfmFootnotes = []),
          c = 0;
        return function (a) {
          return (
            (e.enter("gfmFootnoteDefinition")._container = !0),
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(a),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            i
          );
        };
        function i(a) {
          return 94 === a
            ? (e.enter("gfmFootnoteDefinitionMarker"),
              e.consume(a),
              e.exit("gfmFootnoteDefinitionMarker"),
              e.enter("gfmFootnoteDefinitionLabelString"),
              (e.enter("chunkString").contentType = "string"),
              r)
            : s(a);
        }
        function r(a) {
          if (
            c > 999 ||
            (93 === a && !n) ||
            null === a ||
            91 === a ||
            (0, d.Ee)(a)
          )
            return s(a);
          if (93 === a) {
            e.exit("chunkString");
            let s = e.exit("gfmFootnoteDefinitionLabelString");
            return (
              (l = (0, p.B)(t.sliceSerialize(s))),
              e.enter("gfmFootnoteDefinitionLabelMarker"),
              e.consume(a),
              e.exit("gfmFootnoteDefinitionLabelMarker"),
              e.exit("gfmFootnoteDefinitionLabel"),
              f
            );
          }
          return (0, d.Ee)(a) || (n = !0), c++, e.consume(a), 92 === a ? b : r;
        }
        function b(a) {
          return 91 === a || 92 === a || 93 === a
            ? (e.consume(a), c++, r)
            : r(a);
        }
        function f(a) {
          return 58 === a
            ? (e.enter("definitionMarker"),
              e.consume(a),
              e.exit("definitionMarker"),
              o.includes(l) || o.push(l),
              (0, eE.N)(e, m, "gfmFootnoteDefinitionWhitespace"))
            : s(a);
        }
        function m(e) {
          return a(e);
        }
      }
      function ep(e, a, s) {
        return e.check(em.B, a, e.attempt(eu, a, s));
      }
      function ey(e) {
        e.exit("gfmFootnoteDefinition");
      }
      var eP = s(6148),
        eC = s(6900);
      class eS {
        constructor() {
          this.map = [];
        }
        add(e, a, s) {
          !(function (e, a, s, l) {
            let n = 0;
            if (0 !== s || 0 !== l.length) {
              for (; n < e.map.length; ) {
                if (e.map[n][0] === a) {
                  (e.map[n][1] += s), e.map[n][2].push(...l);
                  return;
                }
                n += 1;
              }
              e.map.push([a, s, l]);
            }
          })(this, e, a, s);
        }
        consume(e) {
          if (
            (this.map.sort(function (e, a) {
              return e[0] - a[0];
            }),
            0 === this.map.length)
          )
            return;
          let a = this.map.length,
            s = [];
          for (; a > 0; )
            (a -= 1),
              s.push(e.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]),
              (e.length = this.map[a][0]);
          s.push(e.slice()), (e.length = 0);
          let l = s.pop();
          for (; l; ) {
            for (let a of l) e.push(a);
            l = s.pop();
          }
          this.map.length = 0;
        }
      }
      function ex(e, a, s) {
        let l,
          n = this,
          t = 0,
          o = 0;
        return function (e) {
          let a = n.events.length - 1;
          for (; a > -1; ) {
            let e = n.events[a][1].type;
            if ("lineEnding" === e || "linePrefix" === e) a--;
            else break;
          }
          let l = a > -1 ? n.events[a][1].type : null,
            d = "tableHead" === l || "tableRow" === l ? T : c;
          return d === T && n.parser.lazy[n.now().line] ? s(e) : d(e);
        };
        function c(a) {
          var s;
          return (
            e.enter("tableHead"),
            e.enter("tableRow"),
            124 === (s = a) || ((l = !0), (o += 1)),
            i(s)
          );
        }
        function i(a) {
          return null === a
            ? s(a)
            : (0, d.HP)(a)
            ? o > 1
              ? ((o = 0),
                (n.interrupt = !0),
                e.exit("tableRow"),
                e.enter("lineEnding"),
                e.consume(a),
                e.exit("lineEnding"),
                f)
              : s(a)
            : (0, d.On)(a)
            ? (0, eE.N)(e, i, "whitespace")(a)
            : ((o += 1), l && ((l = !1), (t += 1)), 124 === a)
            ? (e.enter("tableCellDivider"),
              e.consume(a),
              e.exit("tableCellDivider"),
              (l = !0),
              i)
            : (e.enter("data"), r(a));
        }
        function r(a) {
          return null === a || 124 === a || (0, d.Ee)(a)
            ? (e.exit("data"), i(a))
            : (e.consume(a), 92 === a ? b : r);
        }
        function b(a) {
          return 92 === a || 124 === a ? (e.consume(a), r) : r(a);
        }
        function f(a) {
          return ((n.interrupt = !1), n.parser.lazy[n.now().line])
            ? s(a)
            : (e.enter("tableDelimiterRow"), (l = !1), (0, d.On)(a))
            ? (0, eE.N)(
                e,
                m,
                "linePrefix",
                n.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )(a)
            : m(a);
        }
        function m(a) {
          return 45 === a || 58 === a
            ? u(a)
            : 124 === a
            ? ((l = !0),
              e.enter("tableCellDivider"),
              e.consume(a),
              e.exit("tableCellDivider"),
              E)
            : s(a);
        }
        function E(a) {
          return (0, d.On)(a) ? (0, eE.N)(e, u, "whitespace")(a) : u(a);
        }
        function u(a) {
          return 58 === a
            ? ((o += 1),
              (l = !0),
              e.enter("tableDelimiterMarker"),
              e.consume(a),
              e.exit("tableDelimiterMarker"),
              D)
            : 45 === a
            ? ((o += 1), D(a))
            : null === a || (0, d.HP)(a)
            ? I(a)
            : s(a);
        }
        function D(a) {
          return 45 === a
            ? (e.enter("tableDelimiterFiller"),
              (function a(s) {
                return 45 === s
                  ? (e.consume(s), a)
                  : 58 === s
                  ? ((l = !0),
                    e.exit("tableDelimiterFiller"),
                    e.enter("tableDelimiterMarker"),
                    e.consume(s),
                    e.exit("tableDelimiterMarker"),
                    A)
                  : (e.exit("tableDelimiterFiller"), A(s));
              })(a))
            : s(a);
        }
        function A(a) {
          return (0, d.On)(a) ? (0, eE.N)(e, I, "whitespace")(a) : I(a);
        }
        function I(n) {
          if (124 === n) return m(n);
          if (null === n || (0, d.HP)(n))
            return l && t === o
              ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), a(n))
              : s(n);
          return s(n);
        }
        function T(a) {
          return e.enter("tableRow"), p(a);
        }
        function p(s) {
          return 124 === s
            ? (e.enter("tableCellDivider"),
              e.consume(s),
              e.exit("tableCellDivider"),
              p)
            : null === s || (0, d.HP)(s)
            ? (e.exit("tableRow"), a(s))
            : (0, d.On)(s)
            ? (0, eE.N)(e, p, "whitespace")(s)
            : (e.enter("data"), y(s));
        }
        function y(a) {
          return null === a || 124 === a || (0, d.Ee)(a)
            ? (e.exit("data"), p(a))
            : (e.consume(a), 92 === a ? P : y);
        }
        function P(a) {
          return 92 === a || 124 === a ? (e.consume(a), y) : y(a);
        }
      }
      function eB(e, a) {
        let s,
          l,
          n,
          d = -1,
          t = !0,
          o = 0,
          c = [0, 0, 0, 0],
          i = [0, 0, 0, 0],
          r = !1,
          b = 0,
          f = new eS();
        for (; ++d < e.length; ) {
          let m = e[d],
            E = m[1];
          "enter" === m[0]
            ? "tableHead" === E.type
              ? ((r = !1),
                0 !== b && (eR(f, a, b, s, l), (l = void 0), (b = 0)),
                (s = {
                  type: "table",
                  start: Object.assign({}, E.start),
                  end: Object.assign({}, E.end),
                }),
                f.add(d, 0, [["enter", s, a]]))
              : "tableRow" === E.type || "tableDelimiterRow" === E.type
              ? ((t = !0),
                (n = void 0),
                (c = [0, 0, 0, 0]),
                (i = [0, d + 1, 0, 0]),
                r &&
                  ((r = !1),
                  (l = {
                    type: "tableBody",
                    start: Object.assign({}, E.start),
                    end: Object.assign({}, E.end),
                  }),
                  f.add(d, 0, [["enter", l, a]])),
                (o = "tableDelimiterRow" === E.type ? 2 : l ? 3 : 1))
              : o &&
                ("data" === E.type ||
                  "tableDelimiterMarker" === E.type ||
                  "tableDelimiterFiller" === E.type)
              ? ((t = !1),
                0 === i[2] &&
                  (0 !== c[1] &&
                    ((i[0] = i[1]),
                    (n = eM(f, a, c, o, void 0, n)),
                    (c = [0, 0, 0, 0])),
                  (i[2] = d)))
              : "tableCellDivider" === E.type &&
                (t
                  ? (t = !1)
                  : (0 !== c[1] &&
                      ((i[0] = i[1]), (n = eM(f, a, c, o, void 0, n))),
                    (i = [(c = i)[1], d, 0, 0])))
            : "tableHead" === E.type
            ? ((r = !0), (b = d))
            : "tableRow" === E.type || "tableDelimiterRow" === E.type
            ? ((b = d),
              0 !== c[1]
                ? ((i[0] = i[1]), (n = eM(f, a, c, o, d, n)))
                : 0 !== i[1] && (n = eM(f, a, i, o, d, n)),
              (o = 0))
            : o &&
              ("data" === E.type ||
                "tableDelimiterMarker" === E.type ||
                "tableDelimiterFiller" === E.type) &&
              (i[3] = d);
        }
        for (
          0 !== b && eR(f, a, b, s, l), f.consume(a.events), d = -1;
          ++d < a.events.length;

        ) {
          let e = a.events[d];
          "enter" === e[0] &&
            "table" === e[1].type &&
            (e[1]._align = (function (e, a) {
              let s = !1,
                l = [];
              for (; a < e.length; ) {
                let n = e[a];
                if (s) {
                  if ("enter" === n[0])
                    "tableContent" === n[1].type &&
                      l.push(
                        "tableDelimiterMarker" === e[a + 1][1].type
                          ? "left"
                          : "none"
                      );
                  else if ("tableContent" === n[1].type) {
                    if ("tableDelimiterMarker" === e[a - 1][1].type) {
                      let e = l.length - 1;
                      l[e] = "left" === l[e] ? "center" : "right";
                    }
                  } else if ("tableDelimiterRow" === n[1].type) break;
                } else
                  "enter" === n[0] &&
                    "tableDelimiterRow" === n[1].type &&
                    (s = !0);
                a += 1;
              }
              return l;
            })(a.events, d));
        }
        return e;
      }
      function eM(e, a, s, l, n, d) {
        0 !== s[0] &&
          ((d.end = Object.assign({}, eg(a.events, s[0]))),
          e.add(s[0], 0, [["exit", d, a]]));
        let t = eg(a.events, s[1]);
        if (
          ((d = {
            type:
              1 === l
                ? "tableHeader"
                : 2 === l
                ? "tableDelimiter"
                : "tableData",
            start: Object.assign({}, t),
            end: Object.assign({}, t),
          }),
          e.add(s[1], 0, [["enter", d, a]]),
          0 !== s[2])
        ) {
          let n = eg(a.events, s[2]),
            d = eg(a.events, s[3]),
            t = {
              type: "tableContent",
              start: Object.assign({}, n),
              end: Object.assign({}, d),
            };
          if ((e.add(s[2], 0, [["enter", t, a]]), 2 !== l)) {
            let l = a.events[s[2]],
              n = a.events[s[3]];
            if (
              ((l[1].end = Object.assign({}, n[1].end)),
              (l[1].type = "chunkText"),
              (l[1].contentType = "text"),
              s[3] > s[2] + 1)
            ) {
              let a = s[2] + 1,
                l = s[3] - s[2] - 1;
              e.add(a, l, []);
            }
          }
          e.add(s[3] + 1, 0, [["exit", t, a]]);
        }
        return (
          void 0 !== n &&
            ((d.end = Object.assign({}, eg(a.events, n))),
            e.add(n, 0, [["exit", d, a]]),
            (d = void 0)),
          d
        );
      }
      function eR(e, a, s, l, n) {
        let d = [],
          t = eg(a.events, s);
        n && ((n.end = Object.assign({}, t)), d.push(["exit", n, a])),
          (l.end = Object.assign({}, t)),
          d.push(["exit", l, a]),
          e.add(s + 1, 0, d);
      }
      function eg(e, a) {
        let s = e[a],
          l = "enter" === s[0] ? "start" : "end";
        return s[1][l];
      }
      let eL = {
        name: "tasklistCheck",
        tokenize: function (e, a, s) {
          let l = this;
          return function (a) {
            return null === l.previous && l._gfmTasklistFirstContentOfListItem
              ? (e.enter("taskListCheck"),
                e.enter("taskListCheckMarker"),
                e.consume(a),
                e.exit("taskListCheckMarker"),
                n)
              : s(a);
          };
          function n(a) {
            return (0, d.Ee)(a)
              ? (e.enter("taskListCheckValueUnchecked"),
                e.consume(a),
                e.exit("taskListCheckValueUnchecked"),
                t)
              : 88 === a || 120 === a
              ? (e.enter("taskListCheckValueChecked"),
                e.consume(a),
                e.exit("taskListCheckValueChecked"),
                t)
              : s(a);
          }
          function t(a) {
            return 93 === a
              ? (e.enter("taskListCheckMarker"),
                e.consume(a),
                e.exit("taskListCheckMarker"),
                e.exit("taskListCheck"),
                o)
              : s(a);
          }
          function o(l) {
            return (0, d.HP)(l)
              ? a(l)
              : (0, d.On)(l)
              ? e.check({ tokenize: eh }, a, s)(l)
              : s(l);
          }
        },
      };
      function eh(e, a, s) {
        return (0, eE.N)(
          e,
          function (e) {
            return null === e ? s(e) : a(e);
          },
          "whitespace"
        );
      }
      let ek = {};
      function eO(e) {
        let a,
          s = e || ek,
          l = this.data(),
          n = l.micromarkExtensions || (l.micromarkExtensions = []),
          d = l.fromMarkdownExtensions || (l.fromMarkdownExtensions = []),
          t = l.toMarkdownExtensions || (l.toMarkdownExtensions = []);
        n.push(
          (0, q.y)([
            { text: et },
            {
              document: {
                91: {
                  name: "gfmFootnoteDefinition",
                  tokenize: eT,
                  continuation: { tokenize: ep },
                  exit: ey,
                },
              },
              text: {
                91: { name: "gfmFootnoteCall", tokenize: eI },
                93: {
                  name: "gfmPotentialFootnoteCall",
                  add: "after",
                  tokenize: eD,
                  resolveTo: eA,
                },
              },
            },
            (function (e) {
              let a = (e || {}).singleTilde,
                s = {
                  name: "strikethrough",
                  tokenize: function (e, s, l) {
                    let n = this.previous,
                      d = this.events,
                      t = 0;
                    return function (o) {
                      return 126 === n &&
                        "characterEscape" !== d[d.length - 1][1].type
                        ? l(o)
                        : (e.enter("strikethroughSequenceTemporary"),
                          (function d(o) {
                            let c = (0, W.S)(n);
                            if (126 === o)
                              return t > 1 ? l(o) : (e.consume(o), t++, d);
                            if (t < 2 && !a) return l(o);
                            let i = e.exit("strikethroughSequenceTemporary"),
                              r = (0, W.S)(o);
                            return (
                              (i._open = !r || (2 === r && !!c)),
                              (i._close = !c || (2 === c && !!r)),
                              s(o)
                            );
                          })(o));
                    };
                  },
                  resolveAll: function (e, a) {
                    let s = -1;
                    for (; ++s < e.length; )
                      if (
                        "enter" === e[s][0] &&
                        "strikethroughSequenceTemporary" === e[s][1].type &&
                        e[s][1]._close
                      ) {
                        let l = s;
                        for (; l--; )
                          if (
                            "exit" === e[l][0] &&
                            "strikethroughSequenceTemporary" === e[l][1].type &&
                            e[l][1]._open &&
                            e[s][1].end.offset - e[s][1].start.offset ==
                              e[l][1].end.offset - e[l][1].start.offset
                          ) {
                            (e[s][1].type = "strikethroughSequence"),
                              (e[l][1].type = "strikethroughSequence");
                            let n = {
                                type: "strikethrough",
                                start: Object.assign({}, e[l][1].start),
                                end: Object.assign({}, e[s][1].end),
                              },
                              d = {
                                type: "strikethroughText",
                                start: Object.assign({}, e[l][1].end),
                                end: Object.assign({}, e[s][1].start),
                              },
                              t = [
                                ["enter", n, a],
                                ["enter", e[l][1], a],
                                ["exit", e[l][1], a],
                                ["enter", d, a],
                              ],
                              o = a.parser.constructs.insideSpan.null;
                            o &&
                              (0, eP.m)(
                                t,
                                t.length,
                                0,
                                (0, eC.W)(o, e.slice(l + 1, s), a)
                              ),
                              (0, eP.m)(t, t.length, 0, [
                                ["exit", d, a],
                                ["enter", e[s][1], a],
                                ["exit", e[s][1], a],
                                ["exit", n, a],
                              ]),
                              (0, eP.m)(e, l - 1, s - l + 3, t),
                              (s = l + t.length - 2);
                            break;
                          }
                      }
                    for (s = -1; ++s < e.length; )
                      "strikethroughSequenceTemporary" === e[s][1].type &&
                        (e[s][1].type = "data");
                    return e;
                  },
                };
              return (
                null == a && (a = !0),
                {
                  text: { 126: s },
                  insideSpan: { null: [s] },
                  attentionMarkers: { null: [126] },
                }
              );
            })(s),
            { flow: { null: { name: "table", tokenize: ex, resolveAll: eB } } },
            { text: { 91: eL } },
          ])
        ),
          d.push([
            {
              transforms: [D],
              enter: {
                literalAutolink: r,
                literalAutolinkEmail: b,
                literalAutolinkHttp: b,
                literalAutolinkWww: b,
              },
              exit: {
                literalAutolink: u,
                literalAutolinkEmail: E,
                literalAutolinkHttp: f,
                literalAutolinkWww: m,
              },
            },
            {
              enter: {
                gfmFootnoteCallString: y,
                gfmFootnoteCall: P,
                gfmFootnoteDefinitionLabelString: C,
                gfmFootnoteDefinition: S,
              },
              exit: {
                gfmFootnoteCallString: x,
                gfmFootnoteCall: B,
                gfmFootnoteDefinitionLabelString: M,
                gfmFootnoteDefinition: R,
              },
            },
            {
              canContainEols: ["delete"],
              enter: { strikethrough: O },
              exit: { strikethrough: U },
            },
            {
              enter: { table: G, tableData: Q, tableHeader: Q, tableRow: V },
              exit: {
                codeText: z,
                table: v,
                tableData: _,
                tableHeader: _,
                tableRow: _,
              },
            },
            {
              exit: {
                taskListCheckValueChecked: j,
                taskListCheckValueUnchecked: j,
                paragraph: Z,
              },
            },
          ]),
          t.push({
            extensions: [
              {
                unsafe: [
                  {
                    character: "@",
                    before: "[+\\-.\\w]",
                    after: "[\\-.\\w]",
                    inConstruct: c,
                    notInConstruct: i,
                  },
                  {
                    character: ".",
                    before: "[Ww]",
                    after: "[\\-.\\w]",
                    inConstruct: c,
                    notInConstruct: i,
                  },
                  {
                    character: ":",
                    before: "[ps]",
                    after: "\\/",
                    inConstruct: c,
                    notInConstruct: i,
                  },
                ],
              },
              ((a = !1),
              s && s.firstLineBlank && (a = !0),
              {
                handlers: {
                  footnoteDefinition: function (e, s, l, n) {
                    let d = l.createTracker(n),
                      t = d.move("[^"),
                      o = l.enter("footnoteDefinition"),
                      c = l.enter("label");
                    return (
                      (t += d.move(
                        l.safe(l.associationId(e), { before: t, after: "]" })
                      )),
                      c(),
                      (t += d.move("]:")),
                      e.children &&
                        e.children.length > 0 &&
                        (d.shift(4),
                        (t += d.move(
                          (a ? "\n" : " ") +
                            l.indentLines(
                              l.containerFlow(e, d.current()),
                              a ? h : L
                            )
                        ))),
                      o(),
                      t
                    );
                  },
                  footnoteReference: g,
                },
                unsafe: [
                  {
                    character: "[",
                    inConstruct: ["label", "phrasing", "reference"],
                  },
                ],
              }),
              {
                unsafe: [
                  {
                    character: "~",
                    inConstruct: "phrasing",
                    notInConstruct: k,
                  },
                ],
                handlers: { delete: F },
              },
              (function (e) {
                let a = e || {},
                  s = a.tableCellPadding,
                  l = a.tablePipeAlign,
                  n = a.stringLength,
                  d = s ? " " : "|";
                return {
                  unsafe: [
                    { character: "\r", inConstruct: "tableCell" },
                    { character: "\n", inConstruct: "tableCell" },
                    { atBreak: !0, character: "|", after: "[	 :-]" },
                    { character: "|", inConstruct: "tableCell" },
                    { atBreak: !0, character: ":", after: "-" },
                    { atBreak: !0, character: "-", after: "[:|-]" },
                  ],
                  handlers: {
                    inlineCode: function (e, a, s) {
                      let l = Y.inlineCode(e, a, s);
                      return (
                        s.stack.includes("tableCell") &&
                          (l = l.replace(/\|/g, "\\$&")),
                        l
                      );
                    },
                    table: function (e, a, s, l) {
                      return o(
                        (function (e, a, s) {
                          let l = e.children,
                            n = -1,
                            d = [],
                            t = a.enter("table");
                          for (; ++n < l.length; ) d[n] = c(l[n], a, s);
                          return t(), d;
                        })(e, s, l),
                        e.align
                      );
                    },
                    tableCell: t,
                    tableRow: function (e, a, s, l) {
                      let n = o([c(e, s, l)]);
                      return n.slice(0, n.indexOf("\n"));
                    },
                  },
                };
                function t(e, a, s, l) {
                  let n = s.enter("tableCell"),
                    t = s.enter("phrasing"),
                    o = s.containerPhrasing(e, { ...l, before: d, after: d });
                  return t(), n(), o;
                }
                function o(e, a) {
                  return (function (e, a) {
                    let s = a || {},
                      l = (s.align || []).concat(),
                      n = s.stringLength || N,
                      d = [],
                      t = [],
                      o = [],
                      c = [],
                      i = 0,
                      r = -1;
                    for (; ++r < e.length; ) {
                      let a = [],
                        l = [],
                        d = -1;
                      for (
                        e[r].length > i && (i = e[r].length);
                        ++d < e[r].length;

                      ) {
                        var b;
                        let t = null == (b = e[r][d]) ? "" : String(b);
                        if (!1 !== s.alignDelimiters) {
                          let e = n(t);
                          (l[d] = e),
                            (void 0 === c[d] || e > c[d]) && (c[d] = e);
                        }
                        a.push(t);
                      }
                      (t[r] = a), (o[r] = l);
                    }
                    let f = -1;
                    if ("object" == typeof l && "length" in l)
                      for (; ++f < i; ) d[f] = H(l[f]);
                    else {
                      let e = H(l);
                      for (; ++f < i; ) d[f] = e;
                    }
                    f = -1;
                    let m = [],
                      E = [];
                    for (; ++f < i; ) {
                      let e = d[f],
                        a = "",
                        l = "";
                      99 === e
                        ? ((a = ":"), (l = ":"))
                        : 108 === e
                        ? (a = ":")
                        : 114 === e && (l = ":");
                      let n =
                          !1 === s.alignDelimiters
                            ? 1
                            : Math.max(1, c[f] - a.length - l.length),
                        t = a + "-".repeat(n) + l;
                      !1 !== s.alignDelimiters &&
                        ((n = a.length + n + l.length) > c[f] && (c[f] = n),
                        (E[f] = n)),
                        (m[f] = t);
                    }
                    t.splice(1, 0, m), o.splice(1, 0, E), (r = -1);
                    let u = [];
                    for (; ++r < t.length; ) {
                      let e = t[r],
                        a = o[r];
                      f = -1;
                      let l = [];
                      for (; ++f < i; ) {
                        let n = e[f] || "",
                          t = "",
                          o = "";
                        if (!1 !== s.alignDelimiters) {
                          let e = c[f] - (a[f] || 0),
                            s = d[f];
                          114 === s
                            ? (t = " ".repeat(e))
                            : 99 === s
                            ? e % 2
                              ? ((t = " ".repeat(e / 2 + 0.5)),
                                (o = " ".repeat(e / 2 - 0.5)))
                              : (o = t = " ".repeat(e / 2))
                            : (o = " ".repeat(e));
                        }
                        !1 === s.delimiterStart || f || l.push("|"),
                          !1 !== s.padding &&
                            (!1 !== s.alignDelimiters || "" !== n) &&
                            (!1 !== s.delimiterStart || f) &&
                            l.push(" "),
                          !1 !== s.alignDelimiters && l.push(t),
                          l.push(n),
                          !1 !== s.alignDelimiters && l.push(o),
                          !1 !== s.padding && l.push(" "),
                          (!1 !== s.delimiterEnd || f !== i - 1) && l.push("|");
                      }
                      u.push(
                        !1 === s.delimiterEnd
                          ? l.join("").replace(/ +$/, "")
                          : l.join("")
                      );
                    }
                    return u.join("\n");
                  })(e, {
                    align: a,
                    alignDelimiters: l,
                    padding: s,
                    stringLength: n,
                  });
                }
                function c(e, a, s) {
                  let l = e.children,
                    n = -1,
                    d = [],
                    o = a.enter("tableRow");
                  for (; ++n < l.length; ) d[n] = t(l[n], e, a, s);
                  return o(), d;
                }
              })(s),
              {
                unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
                handlers: { listItem: X },
              },
            ],
          });
      }
    },
  },
]);
