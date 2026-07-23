"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [67],
  {
    1448: (e, t, n) => {
      n.r(t), n.d(t, { VaultLiveChatSection: () => et });
      var l = n(8095),
        a = n(8967),
        r = n(6720),
        s = n(292),
        i = n(9275),
        c = n(5513),
        o = n(6599),
        d = n(373);
      function u(e) {
        let { className: t } = e;
        return (0, l.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: t,
          "aria-hidden": !0,
          fill: "currentColor",
          children: (0, l.jsx)("path", {
            d: "M16.7 12.7c-.03-2.4 1.96-3.55 2.05-3.6-1.11-1.62-2.84-1.84-3.46-1.87-1.47-.15-2.88.87-3.62.87-.75 0-1.91-.85-3.14-.83-1.62.02-3.11.94-3.94 2.4-1.68 2.92-.43 7.24 1.21 9.61.8 1.16 1.75 2.46 3 2.42 1.21-.05 1.67-.78 3.14-.78 1.46 0 1.88.78 3.16.76 1.31-.02 2.13-1.18 2.92-2.36.91-1.33 1.29-2.62 1.31-2.69-.03-.01-2.51-.96-2.54-3.83zm-2.28-7c.66-.81 1.11-1.94.99-3.06-.95.04-2.11.64-2.79 1.44-.61.71-1.15 1.87-1.01 2.97 1.07.08 2.16-.54 2.81-1.35z",
          }),
        });
      }
      function m(e) {
        let { className: t } = e;
        return (0, l.jsx)(i.default, {
          src: "/brand/google-play.svg",
          alt: "",
          width: 36,
          height: 40,
          className: (0, d.cn)("h-8 w-auto sm:h-9", t),
          unoptimized: !0,
          "aria-hidden": !0,
        });
      }
      function x(e) {
        let { className: t } = e;
        return (0, l.jsxs)("svg", {
          viewBox: "0 0 24 24",
          className: t,
          "aria-hidden": !0,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.75",
          children: [
            (0, l.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
            (0, l.jsx)("ellipse", { cx: "12", cy: "12", rx: "4", ry: "9" }),
            (0, l.jsx)("path", {
              d: "M3 12h18M4.5 8c3.5-1.6 11.5-1.6 15 0M4.5 16c3.5 1.6 11.5 1.6 15 0",
              strokeLinecap: "round",
            }),
          ],
        });
      }
      function h(e) {
        let {
            href: t,
            logo: n,
            eyebrow: a,
            name: r,
            ariaLabel: s,
            featured: i,
            disabled: c,
            external: o,
          } = e,
          u = (0, d.cn)(
            "inline-flex h-14 min-w-[11.5rem] items-center gap-3.5 rounded-2xl border border-black/5 px-4 py-2.5 text-left transition-all sm:h-16 sm:min-w-[13rem] sm:gap-4 sm:px-5",
            "bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.25)]",
            i &&
              "ring-2 ring-accent-400/55 ring-offset-2 ring-offset-bg-deepest",
            c
              ? "cursor-not-allowed opacity-55"
              : "hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.32)]"
          ),
          m = (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("span", {
                className:
                  "flex h-9 w-9 shrink-0 items-center justify-center text-black sm:h-10 sm:w-10",
                children: n,
              }),
              (0, l.jsxs)("span", {
                className: "min-w-0 leading-tight",
                children: [
                  (0, l.jsx)("span", {
                    className:
                      "block text-[10px] font-medium uppercase tracking-[0.08em] text-black/65",
                    children: a,
                  }),
                  (0, l.jsx)("span", {
                    className:
                      "mt-1 block truncate text-base font-semibold tracking-tight text-black sm:text-[17px]",
                    children: r,
                  }),
                ],
              }),
            ],
          });
        return c || !t
          ? (0, l.jsx)("span", {
              className: u,
              role: "img",
              "aria-label": s,
              children: m,
            })
          : (0, l.jsx)("a", {
              href: t,
              target: o ? "_blank" : void 0,
              rel: o ? "noopener noreferrer" : void 0,
              className: (0, d.cn)(u, "no-underline"),
              "aria-label": s,
              children: m,
            });
      }
      function p() {
        let e = (0, r.c)("landing.hero.availability");
        return (0, l.jsxs)("div", {
          className:
            "mb-12 flex w-full flex-col items-center gap-5 sm:mb-16 sm:gap-6",
          children: [
            (0, l.jsx)("p", {
              className: "text-caption text-accent-400",
              children: e("label"),
            }),
            (0, l.jsxs)("div", {
              className:
                "flex flex-wrap items-center justify-center gap-4 sm:gap-5",
              children: [
                (0, l.jsx)(h, {
                  href: c.nx,
                  logo: (0, l.jsx)(u, { className: "h-8 w-8 sm:h-9 sm:w-9" }),
                  eyebrow: e("iosStatus"),
                  name: e("iosTitle"),
                  ariaLabel: e("iosAria"),
                  external: !0,
                }),
                (0, l.jsx)(h, {
                  logo: (0, l.jsx)(m, {}),
                  eyebrow: e("androidStatus"),
                  name: e("androidTitle"),
                  ariaLabel: e("androidAria"),
                  disabled: !0,
                }),
              ],
            }),
            (0, l.jsx)("p", {
              className:
                "max-w-xl text-center text-sm leading-relaxed text-text-secondary sm:text-base",
              children: e("note"),
            }),
          ],
        });
      }
      var g = n(5681),
        b = n(3776),
        f = n(1012);
      let v = new Map();
      function y(e) {
        let t = v.get(e);
        return t || ((t = new f.J1(e)), v.set(e, t)), t;
      }
      function j(e) {
        let {
            address: t,
            symbol: n,
            chainId: r,
            size: s = 14,
            className: i,
          } = e,
          c = (0, a.useMemo)(() => {
            if (t) {
              let e = (function (e, t) {
                try {
                  var n, l;
                  let a = y(t);
                  try {
                    let t = a.getToken(e);
                    if (t)
                      return {
                        symbol: t.symbol || "???",
                        name: t.name || t.symbol || "Unknown",
                        address: e,
                        decimals: null != (n = t.decimals) ? n : 18,
                        logoUrl: t.logoUrl || "",
                      };
                  } catch (e) {}
                  try {
                    let t = a.getAllGeneralTokens(),
                      n = e.toLowerCase(),
                      r = t.find((e) => e.address.toLowerCase() === n);
                    if (r)
                      return {
                        symbol: r.symbol || "???",
                        name: r.name || r.symbol || "Unknown",
                        address: e,
                        decimals: null != (l = r.decimals) ? l : 18,
                        logoUrl: r.logoUrl || "",
                      };
                  } catch (e) {}
                  return null;
                } catch (e) {
                  return null;
                }
              })(t, r);
              if (null == e ? void 0 : e.logoUrl) return e.logoUrl;
            }
            if (n) {
              let e = (function (e, t) {
                try {
                  var n;
                  let l = y(t).getTokenFromSymbol(e);
                  if (!l) return null;
                  return {
                    symbol: l.symbol || e,
                    name: l.name || l.symbol || "Unknown",
                    address: l.address,
                    decimals: null != (n = l.decimals) ? n : 18,
                    logoUrl: l.logoUrl || "",
                  };
                } catch (e) {
                  return null;
                }
              })(n, r);
              if (null == e ? void 0 : e.logoUrl) return e.logoUrl;
            }
            return null;
          }, [t, n, r]),
          [o, u] = (0, a.useState)(!1);
        return !c || o
          ? (0, l.jsx)("span", {
              "aria-hidden": "true",
              style: { width: s, height: s },
              className: (0, d.cn)(
                "shrink-0 rounded-full border border-white/15 bg-[var(--glass-content)]",
                i
              ),
            })
          : (0, l.jsx)("img", {
              src: c,
              alt: null != n ? n : "token",
              width: s,
              height: s,
              loading: "lazy",
              decoding: "async",
              onError: () => u(!0),
              className: (0, d.cn)(
                "shrink-0 rounded-full bg-[var(--glass-content)]",
                i
              ),
            });
      }
      function w(e) {
        let {
            deposits: t,
            loading: n,
            className: s,
            defaultChainId: i = 8453,
          } = e,
          c = (0, r.c)("landing.chat.vaultPreview"),
          o = (0, a.useMemo)(
            () =>
              (function (e) {
                let t = e.reduce((e, t) => e + (t.value_usd || 0), 0);
                return e.slice(0, 3).map((e, n) => {
                  var l, a, r, s, i, c, o;
                  let d = (e.type || "").toLowerCase(),
                    u =
                      "debt" === d ? "debt" : "idle" === d ? "idle" : "credit",
                    m = Number(e.apy),
                    x =
                      "idle" !== u && Number.isFinite(m) && Math.abs(m) > 0.001;
                  return {
                    key: ""
                      .concat(
                        null !=
                          (i = null == (l = e.metadata) ? void 0 : l.address)
                          ? i
                          : n,
                        ":"
                      )
                      .concat(e.protocol, ":")
                      .concat(e.type, ":")
                      .concat(n),
                    symbol:
                      (null == (a = e.metadata) ? void 0 : a.symbol) || "?",
                    address:
                      (null == (r = e.metadata) ? void 0 : r.underlying) ||
                      (null == (s = e.metadata) ? void 0 : s.address) ||
                      "",
                    chainId: e.chainId || 8453,
                    protocolLabel: (function (e, t) {
                      let n = (e || "").toLowerCase();
                      if (!n || "unknown" === n)
                        return "idle" === t ? "Idle" : "";
                      switch (n) {
                        case "aave":
                          return "Aave";
                        case "morpho":
                        case "morpho-blue":
                          return "Morpho";
                        case "compound":
                        case "compound-v3":
                          return "Compound";
                        case "pendle":
                          return "Pendle";
                        case "wallet":
                        case "idle":
                          return "Idle";
                        default:
                          return n.charAt(0).toUpperCase() + n.slice(1);
                      }
                    })(e.protocol, d),
                    amount: Number.isFinite((c = e.balance_fmt))
                      ? c >= 1e6
                        ? "".concat((c / 1e6).toFixed(1), "M")
                        : c >= 1e3
                        ? "".concat((c / 1e3).toFixed(1), "k")
                        : c < 1
                        ? c.toFixed(4)
                        : c.toFixed(2)
                      : "—",
                    percentage:
                      t > 0
                        ? "".concat(((e.value_usd / t) * 100).toFixed(1), "%")
                        : "—",
                    valueUsd: Number.isFinite((o = e.value_usd))
                      ? o >= 1e6
                        ? "$".concat((o / 1e6).toFixed(1), "M")
                        : o >= 1e3
                        ? "$".concat((o / 1e3).toFixed(1), "k")
                        : "$".concat(
                            o.toLocaleString(void 0, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          )
                      : "—",
                    apyPct: x ? m : null,
                    tone: u,
                  };
                });
              })(t).map((e) => ({ ...e, chainId: e.chainId || i })),
            [t, i]
          );
        return n
          ? (0, l.jsx)("div", {
              className: (0, d.cn)("flex flex-wrap gap-1", s),
              "aria-hidden": !0,
              children: (0, l.jsx)("div", {
                className:
                  "h-7 w-32 animate-pulse rounded-full bg-[var(--glass-content)]",
              }),
            })
          : 0 === o.length
          ? null
          : (0, l.jsxs)("div", {
              className: (0, d.cn)("space-y-1", s),
              children: [
                (0, l.jsx)("div", {
                  className:
                    "text-[10px] uppercase tracking-wider text-text-tertiary",
                  children: c("compositionLabel"),
                }),
                (0, l.jsx)("div", {
                  className: "flex flex-wrap gap-1",
                  children: o.map((e) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        className: (0, d.cn)(
                          "flex min-w-fit items-center gap-1.5 rounded-full border px-2 py-1",
                          "credit" === e.tone &&
                            "border-success/25 bg-success/10",
                          "debt" === e.tone && "border-error/25 bg-error/10",
                          "idle" === e.tone &&
                            "border-white/[0.08] bg-[var(--glass-content)]"
                        ),
                        children: [
                          (0, l.jsxs)("div", {
                            className: "flex min-w-0 items-center gap-1",
                            children: [
                              (0, l.jsx)(j, {
                                address: e.address || void 0,
                                symbol: e.symbol,
                                chainId: e.chainId,
                                size: 12,
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "flex min-w-0 flex-col leading-tight",
                                children: [
                                  (0, l.jsx)("span", {
                                    className:
                                      "truncate text-[11px] font-medium text-text-primary",
                                    children: e.symbol,
                                  }),
                                  e.protocolLabel &&
                                    (0, l.jsx)("span", {
                                      className:
                                        "truncate text-[9px] capitalize text-text-tertiary",
                                      children: e.protocolLabel,
                                    }),
                                ],
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "text-[11px] font-semibold tabular-nums text-text-secondary",
                                children: e.amount,
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "h-3 w-px shrink-0 bg-white/10",
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "flex shrink-0 flex-col items-end text-[9px] leading-tight",
                            children: [
                              (0, l.jsx)("span", {
                                className:
                                  "font-medium tabular-nums text-text-secondary",
                                children: e.percentage,
                              }),
                              null != e.apyPct
                                ? (0, l.jsxs)("span", {
                                    className: (0, d.cn)(
                                      "font-semibold tabular-nums",
                                      "debt" === e.tone
                                        ? "text-error"
                                        : "text-success"
                                    ),
                                    children: [e.apyPct.toFixed(2), "%"],
                                  })
                                : (0, l.jsx)("span", {
                                    className:
                                      "tabular-nums text-text-tertiary",
                                    children: e.valueUsd,
                                  }),
                            ],
                          }),
                        ],
                      },
                      e.key
                    )
                  ),
                }),
              ],
            });
      }
      let N = "https://stats-api-hditjnhhna-de.a.run.app",
        k =
          "min-w-0 rounded-xl border border-white/[0.06] bg-[var(--glass-content)] px-3 py-2",
        L =
          "text-[10px] uppercase tracking-wider text-text-tertiary leading-tight",
        A =
          "mt-1.5 text-xl font-semibold tabular-nums leading-none text-text-primary";
      function E(e) {
        var t, n, s;
        let { vault: i, className: c } = e,
          o = (0, r.c)("landing.chat.vaultPreview"),
          u = (0, r.c)("landing.chat"),
          m = (0, g.Ym)(),
          x = (function (e, t) {
            if (!e) return null;
            let n = new Date(e);
            return Number.isNaN(n.getTime())
              ? null
              : new Intl.DateTimeFormat(t, {
                  month: "short",
                  year: "numeric",
                }).format(n);
          })(i.createdAt, m),
          h = null != (t = i.apy) ? t : null,
          { deposits: p, loading: v } = (function (e) {
            let [t, n] = (0, a.useState)([]),
              [l, r] = (0, a.useState)(!!e);
            return (
              (0, a.useEffect)(() => {
                if (!e) {
                  n([]), r(!1);
                  return;
                }
                let t = !1;
                return (
                  r(!0),
                  (async () => {
                    try {
                      let s = ""
                          .concat(N, "/utils/pro-vaults?vaultAddress=")
                          .concat(encodeURIComponent(e)),
                        i = await fetch(s, { method: "GET" });
                      if (!i.ok) {
                        t || (n([]), r(!1));
                        return;
                      }
                      let c = await i.json(),
                        o = Array.isArray(c) ? c[0] : c;
                      if (!t) {
                        var l, a;
                        n(
                          (a =
                            null == o || null == (l = o.vaultAnalytics)
                              ? void 0
                              : l.deposits)
                            ? Object.values(a)
                                .filter(
                                  (e) =>
                                    Number.isFinite(e.value_usd) &&
                                    e.value_usd >= 0.01
                                )
                                .sort((e, t) => t.value_usd - e.value_usd)
                            : []
                        ),
                          r(!1);
                      }
                    } catch (e) {
                      t || (n([]), r(!1));
                    }
                  })(),
                  () => {
                    t = !0;
                  }
                );
              }, [e]),
              { deposits: t, loading: l }
            );
          })(i.vaultAddress);
        return (0, l.jsxs)("div", {
          className: (0, d.cn)(
            "flex h-full min-h-0 flex-col overflow-hidden",
            c
          ),
          children: [
            (0, l.jsxs)("header", {
              className: "shrink-0 space-y-1",
              children: [
                (0, l.jsxs)("div", {
                  className: "flex items-center gap-1.5 overflow-hidden",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "flex shrink-0 items-center gap-1.5",
                      children: [
                        (0, l.jsx)(b.m, { label: u("live"), animated: !0 }),
                        (0, l.jsx)("span", {
                          className: "text-[10px] text-text-tertiary",
                          children: (n = i.chain)
                            ? n.charAt(0).toUpperCase() +
                              n.slice(1).toLowerCase()
                            : "—",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "ml-auto flex min-w-0 flex-wrap items-center justify-end gap-1",
                      children: [
                        (0, l.jsx)("span", {
                          className:
                            "shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-[var(--glass-content)] px-1.5 py-0 text-[9px] font-medium text-text-secondary",
                          children: o("autoManaged"),
                        }),
                        x &&
                          (0, l.jsxs)("span", {
                            className:
                              "shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-[var(--glass-content)] px-1.5 py-0 text-[9px] font-medium text-text-secondary",
                            children: [o("sinceLabel"), " ", x],
                          }),
                        (0, l.jsx)("span", {
                          className:
                            "shrink-0 whitespace-nowrap rounded-full border border-accent-400/30 bg-accent-500/10 px-1.5 py-0 text-[9px] font-medium text-accent-300",
                          children: o("sharedVault"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("h3", {
                  className:
                    "truncate text-xl font-semibold leading-tight text-text-primary",
                  children: i.name,
                }),
                i.agentName &&
                  (0, l.jsxs)("p", {
                    className: "truncate text-xs text-text-secondary",
                    children: [
                      o("managedBy"),
                      " ",
                      (0, l.jsx)("span", {
                        className: "font-medium text-text-primary",
                        children: i.agentName,
                      }),
                    ],
                  }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "mt-3 flex shrink-0 flex-col gap-2",
              children: [
                (0, l.jsxs)("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [
                    (0, l.jsxs)("div", {
                      className: k,
                      children: [
                        (0, l.jsx)("div", {
                          className: L,
                          children: o("tvlLabel"),
                        }),
                        (0, l.jsx)("div", {
                          className: A,
                          children:
                            null == (s = i.tvl) || Number.isNaN(s)
                              ? "—"
                              : new Intl.NumberFormat(void 0, {
                                  style: "currency",
                                  currency: "USD",
                                  maximumFractionDigits: 2 * (s < 1e3),
                                }).format(s),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        null != h && 0 !== h
                          ? "min-w-0 rounded-xl border border-success/25 bg-success/10 px-3 py-2"
                          : k,
                      children: [
                        (0, l.jsx)("div", {
                          className: L,
                          children: o("apyLabel"),
                        }),
                        (0, l.jsx)("div", {
                          className: (0, d.cn)(
                            A,
                            null != h && h >= 0 ? "text-success" : void 0
                          ),
                          children:
                            null == h || Number.isNaN(h)
                              ? "—"
                              : "".concat(h.toFixed(2), "%"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(w, {
                  deposits: p,
                  loading: v && 0 === p.length,
                  defaultChainId: (function (e) {
                    switch ((e || "").toLowerCase()) {
                      case "arbitrum":
                      case "arbitrum-one":
                        return f.nU.ARBITRUM_ONE;
                      case "ethereum":
                      case "mainnet":
                        return f.nU.ETHEREUM;
                      case "optimism":
                        return f.nU.OPTIMISM;
                      case "sonic":
                        return f.nU.SONIC;
                      default:
                        return f.nU.BASE;
                    }
                  })(i.chain),
                }),
                i.description &&
                  (0, l.jsx)("p", {
                    className:
                      "hidden text-xs leading-relaxed text-text-secondary line-clamp-2 lg:block",
                    children: i.description,
                  }),
              ],
            }),
            (0, l.jsx)("p", {
              className:
                "mt-auto hidden pt-3 text-[10px] text-text-tertiary lg:block",
              children: u("poweredBy"),
            }),
          ],
        });
      }
      var S = n(8654),
        I = n(8901),
        T = n(2233),
        C = n(1506),
        _ = n(8378),
        D = n(4079),
        F = n(2521),
        U = n(5384),
        R = n(3700),
        M = n(6504);
      let O = { remaining: null, limit: null, resetAt: null, exhausted: !1 };
      var P = n(7616),
        z = n(9428);
      let H = {
        h1: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("h1", {
            className:
              "text-sm font-semibold text-text-primary mt-2 first:mt-0 mb-1.5",
            children: t,
          });
        },
        h2: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("h2", {
            className:
              "text-xs font-semibold text-text-primary mt-2 first:mt-0 mb-1",
            children: t,
          });
        },
        h3: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("h3", {
            className: "text-xs font-semibold text-text-primary mt-1.5 mb-1",
            children: t,
          });
        },
        p: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("p", {
            className: "mb-1.5 last:mb-0 text-text-primary leading-relaxed",
            children: t,
          });
        },
        ul: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("ul", {
            className: "list-disc pl-4 mb-1.5 space-y-0.5 text-text-primary",
            children: t,
          });
        },
        ol: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("ol", {
            className: "list-decimal pl-4 mb-1.5 space-y-0.5 text-text-primary",
            children: t,
          });
        },
        li: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("li", {
            className: "leading-relaxed [&>p]:mb-0 [&>p]:inline",
            children: t,
          });
        },
        strong: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("strong", {
            className: "font-semibold text-text-primary",
            children: t,
          });
        },
        em: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("em", {
            className: "italic text-text-secondary",
            children: t,
          });
        },
        a: (e) => {
          let { href: t, children: n } = e;
          return (0, l.jsx)("a", {
            href: t,
            className:
              "text-accent-400 underline underline-offset-2 hover:text-accent-300",
            target: "_blank",
            rel: "noopener noreferrer",
            children: n,
          });
        },
        hr: () =>
          (0, l.jsx)("hr", { className: "my-3 border-[var(--border-subtle)]" }),
        blockquote: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("blockquote", {
            className:
              "border-l-2 border-accent-500/40 pl-3 my-2 text-text-secondary italic",
            children: t,
          });
        },
        pre: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("pre", {
            className:
              "overflow-x-auto rounded-lg bg-black/35 p-3 text-xs my-2 border border-[var(--border-subtle)]",
            children: t,
          });
        },
        code: (e) => {
          let { className: t, children: n, ...a } = e;
          return t
            ? (0, l.jsx)("code", { className: t, ...a, children: n })
            : (0, l.jsx)("code", {
                className:
                  "rounded bg-black/35 px-1.5 py-0.5 text-[0.85em] font-mono text-text-primary",
                ...a,
                children: n,
              });
        },
        table: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("div", {
            className: "overflow-x-auto my-2",
            children: (0, l.jsx)("table", {
              className:
                "w-full text-xs border-collapse border border-[var(--border-subtle)] rounded-md",
              children: t,
            }),
          });
        },
        thead: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("thead", {
            className: "bg-[var(--glass-plate)]",
            children: t,
          });
        },
        th: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("th", {
            className:
              "border border-[var(--border-subtle)] px-2 py-1.5 text-left font-medium",
            children: t,
          });
        },
        td: (e) => {
          let { children: t } = e;
          return (0, l.jsx)("td", {
            className: "border border-[var(--border-subtle)] px-2 py-1.5",
            children: t,
          });
        },
      };
      function B(e) {
        let { children: t } = e;
        return (0, l.jsx)("div", {
          className: "chat-markdown text-xs [&_ul]:marker:text-text-tertiary",
          children: (0, l.jsx)(P.oz, {
            remarkPlugins: [z.A],
            components: H,
            children: t,
          }),
        });
      }
      function Y(e) {
        var t, n, s, i;
        let { vaultId: c, className: u } = e,
          m = (0, r.c)("landing.chat"),
          [x, h] = (0, a.useState)(""),
          {
            turns: p,
            isStreaming: g,
            quota: b,
            send: f,
          } = (function (e) {
            let [t, n] = (0, a.useState)([]),
              [l, r] = (0, a.useState)(!1),
              [s, i] = (0, a.useState)(O),
              c = (0, a.useRef)(null),
              d = (0, a.useCallback)((e) => {
                n((t) => {
                  let n = t[t.length - 1];
                  return n && "agent" === n.role
                    ? [...t.slice(0, -1), e(n)]
                    : t;
                });
              }, []),
              u = (0, a.useCallback)(
                async (a) => {
                  let s = a.trim();
                  if (l || !s) return;
                  let u = t
                    .filter(
                      (e) =>
                        "user" === e.role ||
                        ("agent" === e.role &&
                          e.done &&
                          e.text.trim().length > 0)
                    )
                    .slice(-10)
                    .map((e) => ({
                      role: "user" === e.role ? "user" : "assistant",
                      content: e.text,
                    }));
                  n((e) => [
                    ...e,
                    { role: "user", text: s },
                    {
                      role: "agent",
                      text: "",
                      phases: [],
                      isStreaming: !0,
                      done: !1,
                    },
                  ]),
                    r(!0),
                    (c.current = new AbortController());
                  try {
                    let t = await fetch(
                        "".concat(o.H$, "/vault/").concat(e, "/chat"),
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "text/event-stream",
                          },
                          body: JSON.stringify({ message: s, history: u }),
                          signal: c.current.signal,
                        }
                      ),
                      n = t.headers.get("X-RateLimit-Limit"),
                      l = t.headers.get("X-RateLimit-Remaining"),
                      a = t.headers.get("X-RateLimit-Reset"),
                      r = null !== n ? Number(n) : null,
                      g = null !== l ? Number(l) : null,
                      b = null !== a ? Number(a) : null;
                    if (
                      (i({
                        limit: Number.isFinite(r) ? r : null,
                        remaining: Number.isFinite(g) ? g : null,
                        resetAt:
                          b && Number.isFinite(b) ? new Date(1e3 * b) : null,
                        exhausted: 429 === t.status || 0 === g,
                      }),
                      429 === t.status)
                    )
                      return void d((e) => ({
                        ...e,
                        text: "Daily message limit reached. Sign in to continue.",
                        isStreaming: !1,
                        done: !0,
                      }));
                    if (!t.ok || !t.body)
                      throw Error("Bad response: ".concat(t.status));
                    let f = t.body.getReader(),
                      v = new TextDecoder(),
                      y = "";
                    for (;;) {
                      let e,
                        { done: t, value: n } = await f.read();
                      if (t) break;
                      for (
                        y += v.decode(n, { stream: !0 });
                        -1 !== (e = y.indexOf("\n\n"));

                      ) {
                        var m, x, h, p;
                        let t,
                          n = y.slice(0, e);
                        if (((y = y.slice(e + 2)), !n.trim())) continue;
                        let l = n.split("\n"),
                          a = "message",
                          r = "";
                        for (let e of l)
                          e.startsWith("event:")
                            ? (a = e.slice(6).trim())
                            : e.startsWith("data:") && (r += e.slice(5).trim());
                        if (!r) continue;
                        if ("[DONE]" === r) {
                          d((e) => ({ ...e, isStreaming: !1, done: !0 }));
                          continue;
                        }
                        try {
                          t = JSON.parse(r);
                        } catch (e) {
                          continue;
                        }
                        let s = t,
                          i = null != (m = null == s ? void 0 : s.type) ? m : a;
                        if (
                          new Set([
                            "retrieve_started",
                            "retrieve_completed",
                            "reasoning_started",
                            "tool_call",
                            "safety_check",
                          ]).has(i)
                        ) {
                          let e = t;
                          d((t) => ({ ...t, phases: [...t.phases, e] }));
                        } else if ("text-delta" === i || "token" === i) {
                          let e =
                            null !=
                            (p =
                              null != (h = null != (x = s.text) ? x : s.delta)
                                ? h
                                : s.content)
                              ? p
                              : "";
                          if (!e) continue;
                          d((t) => ({ ...t, text: t.text + e }));
                        } else
                          "message_stop" === i || "done" === i || "[DONE]" === i
                            ? d((e) => ({ ...e, isStreaming: !1, done: !0 }))
                            : "[DONE]" === r &&
                              d((e) => ({ ...e, isStreaming: !1, done: !0 }));
                      }
                    }
                    d((e) =>
                      e.done ? e : { ...e, isStreaming: !1, done: !0 }
                    );
                  } catch (e) {
                    (null == e ? void 0 : e.name) === "AbortError"
                      ? d((e) => ({ ...e, isStreaming: !1, done: !0 }))
                      : d((e) => ({
                          ...e,
                          text:
                            e.text || "Sorry, something went wrong. Try again.",
                          isStreaming: !1,
                          done: !0,
                        }));
                  } finally {
                    r(!1), (c.current = null);
                  }
                },
                [e, l, d]
              );
            return {
              turns: t,
              isStreaming: l,
              quota: s,
              send: u,
              reset: (0, a.useCallback)(() => {
                var e;
                null == (e = c.current) || e.abort(),
                  (c.current = null),
                  n([]),
                  i(O),
                  r(!1);
              }, []),
            };
          })(c),
          v = (0, a.useRef)(null),
          y = (0, a.useCallback)(() => {
            let e = v.current;
            e && (e.scrollTop = e.scrollHeight);
          }, []),
          j = (0, a.useCallback)((e) => {
            let t = e.currentTarget;
            if (t.scrollHeight <= t.clientHeight + 1) return;
            let n = t.scrollHeight - t.clientHeight,
              l = e.deltaY < 0,
              a = e.deltaY > 0;
            ((l && t.scrollTop > 0) || (a && t.scrollTop < n - 1)) &&
              e.stopPropagation();
          }, []);
        (0, a.useEffect)(() => {
          y();
        }, [p, g]);
        let w = (e) => {
            let t = (null != e ? e : x).trim();
            t && !g && (h(""), f(t));
          },
          N = [
            {
              label: m("seedYield"),
              tone: "from-emerald-400/30 to-cyan-400/20",
            },
            { label: m("seedRisk"), tone: "from-amber-400/30 to-rose-400/20" },
            {
              label: m("seedStrategy"),
              tone: "from-violet-400/30 to-fuchsia-400/20",
            },
          ],
          k = null !== b.remaining && null !== b.limit,
          L = p.reduce((e, t, n) => ("agent" === t.role ? n : e), -1);
        return (0, l.jsxs)("div", {
          className: (0, d.cn)("flex h-full min-h-0 flex-col", u),
          children: [
            (0, l.jsx)("div", {
              ref: v,
              onWheel: j,
              className:
                "vault-chat-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 [scrollbar-width:thin] [scrollbar-color:rgba(148,163,184,0.45)_transparent]",
              children:
                0 === p.length
                  ? (0, l.jsx)(X, {
                      hint: m("emptyHint"),
                      prompts: N,
                      disabled: g,
                      onPick: (e) => w(e),
                    })
                  : (0, l.jsx)("div", {
                      className: "space-y-3 py-1",
                      children: (0, l.jsx)(C.N, {
                        initial: !1,
                        children: p.map((e, t) =>
                          (0, l.jsx)(
                            W,
                            {
                              role: e.role,
                              text: e.text,
                              streaming:
                                "agent" === e.role &&
                                "isStreaming" in e &&
                                !!e.isStreaming,
                              isLatestAgent: t === L,
                              youLabel: m("youLabel"),
                              agentLabel: m("agentLabel"),
                              thinkingLabel: m("thinking"),
                              onReveal: y,
                            },
                            t
                          )
                        ),
                      }),
                    }),
            }),
            (0, l.jsxs)("div", {
              className: (0, d.cn)(
                "mt-2 shrink-0 flex items-end gap-2 rounded-2xl bg-[var(--glass-content)] sm:mt-3",
                "border border-white/10 pl-2 pr-1.5 py-1.5",
                "focus-within:border-accent-400/50 focus-within:ring-2 focus-within:ring-accent-400/20",
                "transition-colors"
              ),
              children: [
                (0, l.jsx)("textarea", {
                  value: x,
                  onChange: (e) => h(e.target.value),
                  onKeyDown: (e) => {
                    "Enter" !== e.key ||
                      e.shiftKey ||
                      (e.preventDefault(), w());
                  },
                  placeholder: m("inputPlaceholder"),
                  rows: 1,
                  disabled: g,
                  className: (0, d.cn)(
                    "flex-1 resize-none bg-transparent border-none outline-none",
                    "px-2 py-1 text-sm text-text-primary placeholder:text-text-tertiary",
                    "disabled:opacity-50",
                    "min-h-[28px] max-h-[120px]"
                  ),
                }),
                k &&
                  (0, l.jsx)("span", {
                    className:
                      "text-[10px] text-text-tertiary tabular-nums whitespace-nowrap self-center mr-0.5 pointer-events-none",
                    "aria-label": m("quotaCounter", {
                      remaining: null != (t = b.remaining) ? t : 0,
                      limit: null != (n = b.limit) ? n : 0,
                    }),
                    children: ""
                      .concat(null != (s = b.remaining) ? s : 0, "/")
                      .concat(null != (i = b.limit) ? i : 0),
                  }),
                (0, l.jsx)("button", {
                  type: "button",
                  onClick: () => w(),
                  disabled: !x.trim() || g,
                  "aria-label": m("sendLabel"),
                  className: (0, d.cn)(
                    "h-7 w-7 inline-flex items-center justify-center rounded-full shrink-0",
                    "bg-accent-500 text-text-inverse hover:bg-accent-400",
                    "disabled:opacity-40 disabled:cursor-not-allowed",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60",
                    "transition-all active:scale-95"
                  ),
                  children: g
                    ? (0, l.jsx)(D.A, { size: 13, className: "animate-spin" })
                    : (0, l.jsx)(F.A, { size: 12 }),
                }),
              ],
            }),
          ],
        });
      }
      function W(e) {
        let {
            role: t,
            text: n,
            streaming: r,
            isLatestAgent: s,
            thinkingLabel: i,
            onReveal: c,
          } = e,
          o = "user" === t,
          u = (0, a.useRef)(!1);
        r && (u.current = !0);
        let { displayText: m, isRevealing: x } = (function (e, t) {
            let [n, l] = (0, a.useState)(() => (t ? 0 : e.length));
            (0, a.useEffect)(() => {
              if (!t) return void l(e.length);
              e || l(0);
            }, [t, e]);
            let r = t && n < e.length;
            return (
              (0, a.useEffect)(() => {
                if (!t || n >= e.length) return;
                let a = window.setInterval(() => {
                  l((t) => {
                    if (t >= e.length) return t;
                    let n = e.length - t;
                    return Math.min(e.length, t + (n > 120 ? 2 : 1));
                  });
                }, 32);
                return () => clearInterval(a);
              }, [t, e, n, e.length]),
              { displayText: t ? e.slice(0, n) : e, isRevealing: r }
            );
          })(n, !o && s && u.current),
          h = !o && r && !m;
        return (
          (0, a.useEffect)(() => {
            !o && (r || x || m.length > 0) && c();
          }, [m, r, x, o, c]),
          (0, l.jsxs)(_.P.div, {
            initial: { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0 },
            transition: { duration: 0.18, ease: "easeOut" },
            className: (0, d.cn)(
              "flex items-end gap-1.5 max-w-full",
              o ? "flex-row-reverse" : "flex-row"
            ),
            children: [
              (0, l.jsx)("div", {
                className: (0, d.cn)(
                  "shrink-0 h-6 w-6 rounded-full inline-flex items-center justify-center",
                  o
                    ? "bg-accent-500/15 text-accent-300"
                    : "bg-[var(--glass-shell)] text-text-secondary border border-white/10"
                ),
                "aria-hidden": "true",
                children: o
                  ? (0, l.jsx)(U.A, { size: 11 })
                  : (0, l.jsx)(R.A, { size: 11 }),
              }),
              (0, l.jsx)("div", {
                className: (0, d.cn)(
                  "max-w-[85%] px-3 py-2 text-[13px] leading-snug",
                  o
                    ? "bg-accent-500/15 text-text-primary rounded-2xl rounded-br-sm"
                    : "bg-[var(--glass-content)] text-text-secondary rounded-2xl rounded-bl-sm border border-white/[0.06]"
                ),
                children: m
                  ? o
                    ? (0, l.jsx)("span", {
                        className: "whitespace-pre-wrap break-words",
                        children: m,
                      })
                    : (0, l.jsxs)("div", {
                        className:
                          "flex flex-wrap items-end gap-x-1 w-full min-w-0 break-words",
                        children: [
                          (0, l.jsx)("div", {
                            className: "min-w-0 flex-1",
                            children: (0, l.jsx)(B, { children: m }),
                          }),
                          r || x
                            ? (0, l.jsx)("span", {
                                className:
                                  "typing-caret inline-block w-[2px] h-[1em] shrink-0 align-[-0.12em] ml-0.5 rounded-sm bg-accent-400/70 animate-pulse",
                                "aria-hidden": !0,
                              })
                            : null,
                        ],
                      })
                  : h
                  ? (0, l.jsx)(K, { label: i })
                  : (0, l.jsx)("span", {
                      className: "text-text-tertiary",
                      children: "—",
                    }),
              }),
            ],
          })
        );
      }
      function K(e) {
        let { label: t } = e;
        return (0, l.jsxs)("span", {
          className: "inline-flex items-center gap-1.5",
          role: "status",
          "aria-label": t,
          children: [
            (0, l.jsx)("span", {
              className: "inline-flex gap-0.5",
              children: [0, 1, 2].map((e) =>
                (0, l.jsx)(
                  "span",
                  {
                    className:
                      "block h-1.5 w-1.5 rounded-full bg-text-tertiary",
                    style: {
                      animation: "chatDot 1.2s ease-in-out ".concat(
                        0.15 * e,
                        "s infinite"
                      ),
                    },
                  },
                  e
                )
              ),
            }),
            (0, l.jsx)("style", {
              children:
                "\n        @keyframes chatDot {\n          0%, 80%, 100% { transform: translateY(0); opacity: 0.35; }\n          40%           { transform: translateY(-3px); opacity: 1; }\n        }\n      ",
            }),
          ],
        });
      }
      function X(e) {
        let { hint: t, prompts: n, disabled: a, onPick: r } = e;
        return (0, l.jsxs)("div", {
          className:
            "flex flex-col items-center gap-2 px-1 pt-2 pb-1 sm:gap-3 sm:pt-4 sm:pb-2",
          children: [
            (0, l.jsxs)("div", {
              className:
                "inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[var(--glass-shell)] text-accent-300 sm:h-10 sm:w-10",
              children: [
                (0, l.jsx)(M.A, { size: 14, className: "sm:hidden" }),
                (0, l.jsx)(M.A, { size: 16, className: "hidden sm:block" }),
              ],
            }),
            (0, l.jsx)("p", {
              className:
                "max-w-[240px] text-center text-[11px] text-text-tertiary sm:text-xs",
              children: t,
            }),
            (0, l.jsx)("div", {
              className: "flex w-full max-w-xs flex-col gap-1 sm:gap-1.5",
              children: n.map((e, t) =>
                (0, l.jsxs)(
                  "button",
                  {
                    type: "button",
                    onClick: () => r(e.label),
                    disabled: a,
                    className: (0, d.cn)(
                      "group relative text-left text-[11.5px] text-text-secondary sm:text-[12.5px]",
                      "rounded-xl border border-white/[0.07] bg-[var(--glass-content)]",
                      "px-2.5 py-1.5 transition-all duration-150 sm:px-3 sm:py-2",
                      2 === t && "hidden sm:block",
                      "hover:text-text-primary hover:border-white/15 hover:-translate-y-px",
                      "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60",
                      "overflow-hidden"
                    ),
                    children: [
                      (0, l.jsx)("span", {
                        className: (0, d.cn)(
                          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br pointer-events-none",
                          e.tone
                        ),
                      }),
                      (0, l.jsx)("span", {
                        className: "relative",
                        children: e.label,
                      }),
                    ],
                  },
                  e.label
                )
              ),
            }),
          ],
        });
      }
      let $ = {
        1: "tvlFloor",
        2: "apyCeiling",
        3: "unexpectedBorrow",
        4: "lltvBreach",
        5: "noEligibleMarket",
      };
      function q(e) {
        let { vaultId: t, className: n } = e,
          s = (0, r.c)("landing.chat.thinkingL1"),
          { decisions: i, loading: c } = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 8,
              [n, l] = (0, a.useState)([]),
              [r, s] = (0, a.useState)(!0);
            return (
              (0, a.useEffect)(() => {
                let n = !1;
                async function a() {
                  try {
                    let a = await fetch(
                      ""
                        .concat(o.H$, "/vault/")
                        .concat(e, "/decisions?limit=")
                        .concat(t),
                      { headers: { Accept: "application/json" } }
                    );
                    if (!a.ok) return;
                    let r = await a.json();
                    n || l(Array.isArray(r.decisions) ? r.decisions : []);
                  } catch (e) {
                  } finally {
                    n || s(!1);
                  }
                }
                a();
                let r = window.setInterval(() => void a(), 15e3);
                return () => {
                  (n = !0), window.clearInterval(r);
                };
              }, [e, t]),
              { decisions: n, loading: r }
            );
          })(t),
          u = (function () {
            let e = (0, r.c)("landing.chat.time");
            return (t) => {
              let n = (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Date.now(),
                  n = t - new Date(e).getTime();
                return !Number.isFinite(n) || n < 6e4
                  ? { kind: "just-now", n: 0 }
                  : n < 36e5
                  ? { kind: "minutes", n: Math.floor(n / 6e4) }
                  : n < 864e5
                  ? { kind: "hours", n: Math.floor(n / 36e5) }
                  : { kind: "days", n: Math.floor(n / 864e5) };
              })(t);
              switch (n.kind) {
                case "just-now":
                  return e("justNow");
                case "minutes":
                  return e("minutesAgo", { count: n.n });
                case "hours":
                  return e("hoursAgo", { count: n.n });
                case "days":
                  return e("daysAgo", { count: n.n });
              }
            };
          })(),
          m = i
            ? (function (e) {
                let t = [...e.filter((e) => "deploy" !== e.jobType)].reverse(),
                  n = !1;
                return t
                  .map((e) => {
                    let t = e.executeOutput,
                      l = (function (e, t, n) {
                        var l;
                        let a = { id: e.id, timestamp: e.timestamp, raw: e };
                        if (!t)
                          return {
                            ...a,
                            key: "needsAttention",
                            values: {},
                            guideLocked: !1,
                          };
                        switch (t.status) {
                          case "SAFETY_HALT":
                            return {
                              ...a,
                              key: "safetyHalt",
                              values: {},
                              guideLocked: !0,
                            };
                          case "PENDING_VERIFICATION":
                            return {
                              ...a,
                              key: "pending",
                              values: {},
                              guideLocked: !1,
                            };
                          case "ERROR":
                          case "PARTIAL":
                          case "PARTIAL_EXIT":
                            return {
                              ...a,
                              key: "needsAttention",
                              values: {},
                              guideLocked: !1,
                            };
                        }
                        let r =
                          null != (l = t.post_apy_bps) && Number.isFinite(l)
                            ? (l / 100).toFixed(2)
                            : null;
                        switch (t.decision) {
                          case "HOLD":
                            return {
                              ...a,
                              key: "hold",
                              values: {},
                              guideLocked: !0,
                            };
                          case "HOLD-IDLE":
                            return {
                              ...a,
                              key: "holdIdle",
                              values: {},
                              guideLocked: !0,
                            };
                          case "HOLD-IDLE-FLAG":
                            return {
                              ...a,
                              key: "holdIdle",
                              values: {},
                              guideLocked: !1,
                            };
                          case "HOLD-TOPUP":
                            return {
                              ...a,
                              key: "holdTopup",
                              values: { apy: null != r ? r : "—" },
                              guideLocked: !1,
                            };
                          case "REBALANCE-YIELD":
                            return {
                              ...a,
                              key: n ? "rebalanceSubsequent" : "rebalanceFirst",
                              values: { apy: null != r ? r : "—" },
                              guideLocked: !0,
                            };
                          case "RISK-EXIT": {
                            let e = t.risk_exit_condition;
                            return {
                              ...a,
                              key: "riskExit",
                              values: {},
                              riskExitConditionKey: null != e ? $[e] : void 0,
                              guideLocked: !0,
                            };
                          }
                          default:
                            return {
                              ...a,
                              key: "fallback",
                              values: {},
                              guideLocked: !0,
                            };
                        }
                      })(e, t, n);
                    return (
                      (null == t ? void 0 : t.decision) === "REBALANCE-YIELD" &&
                        (null == t ? void 0 : t.status) === "SUCCESS" &&
                        (n = !0),
                      l
                    );
                  })
                  .reverse();
              })(i)
            : [],
          x = (0, a.useRef)(new Set());
        return c
          ? (0, l.jsx)("div", {
              className: (0, d.cn)("flex flex-col gap-2 p-2", n),
              children: [0, 1, 2].map((e) =>
                (0, l.jsx)(
                  "div",
                  {
                    className:
                      "h-10 rounded-lg bg-[var(--glass-content)] animate-pulse",
                  },
                  e
                )
              ),
            })
          : 0 === m.length
          ? (0, l.jsx)("div", {
              className: (0, d.cn)(
                "flex items-center justify-center h-full text-xs text-text-tertiary px-4 text-center",
                n
              ),
              children: s("empty"),
            })
          : (0, l.jsx)("div", {
              className: (0, d.cn)(
                "flex flex-col gap-1.5 overflow-y-auto p-1 overscroll-contain",
                n
              ),
              children: m.map((e, t) => {
                var n, a;
                let r = (function (e) {
                    if ("riskExit" === e.key) {
                      let t = e.riskExitConditionKey
                        ? s(
                            "riskExitConditions.".concat(e.riskExitConditionKey)
                          )
                        : "";
                      return s("riskExit", { condition: t });
                    }
                    return s(e.key, e.values);
                  })(e),
                  i =
                    null !=
                    (a = null == (n = e.raw.summary) ? void 0 : n.trim())
                      ? a
                      : "",
                  c = x.current.has(e.id),
                  o = 0 === t && i.length > 0 && !c;
                return (0, l.jsx)(
                  G,
                  {
                    title: r,
                    body: i,
                    timestampLabel: u(e.timestamp),
                    animateBody: o,
                    isLive: o,
                    onTyped: () => {
                      x.current.add(e.id);
                    },
                  },
                  e.id
                );
              }),
            });
      }
      function G(e) {
        let {
            title: t,
            body: n,
            timestampLabel: r,
            animateBody: s,
            isLive: i,
            onTyped: c,
          } = e,
          { displayText: o, isRevealing: u } = (function (e, t) {
            let [n, l] = (0, a.useState)(() => (t ? 0 : e.length));
            (0, a.useEffect)(() => {
              if (!t) return void l(e.length);
              e || l(0);
            }, [t, e]);
            let r = t && n < e.length;
            return (
              (0, a.useEffect)(() => {
                if (!t || n >= e.length) return;
                let a = window.setInterval(() => {
                  l((t) => {
                    if (t >= e.length) return t;
                    let n = e.length - t;
                    return Math.min(e.length, t + (n > 120 ? 2 : 1));
                  });
                }, 32);
                return () => window.clearInterval(a);
              }, [t, e, n, e.length]),
              { displayText: t ? e.slice(0, n) : e, isRevealing: r }
            );
          })(n, s),
          m = i && u;
        return (
          (0, a.useEffect)(() => {
            s && !u && n.length > 0 && o.length >= n.length && c();
          }, [s, u, n.length, o.length, c]),
          (0, l.jsxs)("div", {
            className:
              "rounded-lg bg-[var(--glass-content)] border border-white/5 px-3 py-2.5",
            children: [
              (0, l.jsxs)("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                  (0, l.jsxs)("div", {
                    className: "min-w-0 flex-1 flex items-start gap-2",
                    children: [
                      (0, l.jsx)("span", {
                        className: (0, d.cn)(
                          "h-1.5 w-1.5 rounded-full shrink-0 mt-[5px]",
                          i
                            ? "bg-accent-400 animate-pulse"
                            : "bg-text-tertiary/50"
                        ),
                        "aria-hidden": !0,
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-xs font-medium text-text-primary leading-relaxed",
                        children: t,
                      }),
                    ],
                  }),
                  (0, l.jsx)("span", {
                    className:
                      "text-[10px] text-text-tertiary whitespace-nowrap shrink-0 mt-0.5",
                    children: r,
                  }),
                ],
              }),
              n
                ? (0, l.jsxs)("p", {
                    className:
                      "mt-1.5 pl-3.5 text-[11px] text-text-secondary leading-relaxed whitespace-pre-wrap break-words",
                    children: [
                      o,
                      m &&
                        (0, l.jsx)("span", {
                          className:
                            "inline-block w-[1px] h-3 ml-0.5 bg-accent-400 animate-pulse align-middle",
                        }),
                    ],
                  })
                : null,
            ],
          })
        );
      }
      let V = ["thinking", "chat"],
        J = { thinking: S.A, chat: I.A };
      function Q(e) {
        let { vaultId: t, agentId: n, className: s } = e,
          i = (0, r.c)("landing.chat.rightPane"),
          [c, o] = (0, a.useState)("chat"),
          [u, m] = (0, a.useState)(!1),
          x = (e) => {
            let t = V.indexOf(c);
            "ArrowRight" === e.key
              ? (e.preventDefault(), o(V[(t + 1) % V.length]))
              : "ArrowLeft" === e.key &&
                (e.preventDefault(), o(V[(t - 1 + V.length) % V.length]));
          };
        return (0, l.jsxs)("div", {
          className: (0, d.cn)("flex flex-col gap-2 min-h-0 h-full", s),
          children: [
            (0, l.jsx)("div", {
              role: "tablist",
              "aria-label": i("ariaLabel"),
              className:
                "flex items-center gap-1 rounded-lg bg-[var(--glass-content)] border border-white/5 p-0.5 shrink-0",
              children: V.map((e) => {
                let t = J[e],
                  n = c === e;
                return (0, l.jsxs)(
                  "button",
                  {
                    role: "tab",
                    type: "button",
                    "aria-selected": n,
                    tabIndex: n ? 0 : -1,
                    onClick: () => o(e),
                    onKeyDown: x,
                    className: (0, d.cn)(
                      "flex-1 inline-flex items-center justify-center gap-1.5",
                      "rounded-md px-2 py-1.5 text-[11px] font-medium transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60",
                      n
                        ? "bg-accent-500/15 text-accent-300"
                        : "text-text-secondary hover:text-text-primary hover:bg-[var(--glass-hover)]"
                    ),
                    children: [
                      (0, l.jsx)(t, { size: 12, strokeWidth: 2.2 }),
                      i("tabs.".concat(e)),
                    ],
                  },
                  e
                );
              }),
            }),
            (0, l.jsxs)("div", {
              className: "relative min-h-[12rem] flex-1 sm:min-h-0",
              children: [
                (0, l.jsx)("div", {
                  className: (0, d.cn)(
                    "absolute inset-0",
                    "chat" !== c && "hidden"
                  ),
                  children: (0, l.jsx)(Y, { vaultId: t, className: "h-full" }),
                }),
                (0, l.jsx)("div", {
                  className: (0, d.cn)(
                    "absolute inset-0",
                    "thinking" !== c && "hidden"
                  ),
                  onMouseEnter: () => m(!0),
                  onMouseLeave: () => m(!1),
                  children: n
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(q, { vaultId: t, className: "h-full" }),
                          (0, l.jsxs)("button", {
                            type: "button",
                            onClick: () => o("chat"),
                            "aria-label": i("chatWithAgent"),
                            className: (0, d.cn)(
                              "absolute bottom-2 left-1/2 -translate-x-1/2 z-10",
                              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                              "text-[11px] font-medium text-text-inverse bg-accent-500/95",
                              "shadow-lg shadow-black/30 border border-white/15 backdrop-blur-sm",
                              "transition-all duration-200 ease-out",
                              "hover:bg-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60",
                              u
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 translate-y-2 pointer-events-none"
                            ),
                            children: [
                              (0, l.jsx)(T.A, { size: 12, strokeWidth: 2.2 }),
                              i("chatWithAgent"),
                            ],
                          }),
                        ],
                      })
                    : (0, l.jsx)("div", {
                        className:
                          "flex items-center justify-center h-full text-xs text-text-tertiary",
                        children: "—",
                      }),
                }),
              ],
            }),
          ],
        });
      }
      function Z(e) {
        let { vault: t, className: n } = e;
        return (0, l.jsxs)("div", {
          className: (0, d.cn)(
            "liquid-glass-card relative flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.10] ring-1 ring-white/[0.05] sm:rounded-[2rem]",
            "min-h-[38rem] sm:min-h-[40rem] lg:h-[28rem] lg:min-h-0",
            n
          ),
          "data-lenis-prevent": !0,
          role: "region",
          children: [
            (0, l.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-accent-400/[0.06] via-transparent to-success/[0.05] opacity-90",
            }),
            (0, l.jsxs)("div", {
              className: (0, d.cn)(
                "relative z-10 flex min-h-0 flex-1 flex-col",
                "lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:min-h-0"
              ),
              children: [
                (0, l.jsx)("div", {
                  className:
                    "shrink-0 border-b border-white/[0.08] p-3 sm:p-4 lg:min-h-0 lg:overflow-hidden lg:border-b-0 lg:border-r lg:p-5",
                  children: (0, l.jsx)(E, { vault: t, className: "h-full" }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "flex min-h-[22rem] flex-1 flex-col p-3 sm:min-h-[24rem] sm:p-4 lg:min-h-0 lg:pl-5",
                  children: (0, l.jsx)(Q, {
                    vaultId: t.id,
                    agentId: t.agentId,
                    className: "min-h-[20rem] flex-1 lg:min-h-0",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var ee = n(4188);
      function et() {
        var e, t, n, i, c;
        let d = (0, r.c)("landing.chat"),
          u = ee.env.NEXT_PUBLIC_MEARN_VAULT_ID,
          { vaults: m, loaded: x } = (function () {
            let [e, t] = (0, a.useState)({
              vaults: [],
              loading: !0,
              loaded: !1,
              error: null,
            });
            return (
              (0, a.useEffect)(() => {
                let e = !1;
                return (
                  (async () => {
                    try {
                      let n = await fetch("".concat(o.H$, "/vault/shared"), {
                        method: "GET",
                        headers: { Accept: "application/json" },
                      });
                      if (!n.ok) {
                        e ||
                          t({
                            vaults: [],
                            loading: !1,
                            loaded: !0,
                            error: "HTTP ".concat(n.status),
                          });
                        return;
                      }
                      let l = await n.json();
                      e ||
                        t({
                          vaults: Array.isArray(l.vaults) ? l.vaults : [],
                          loading: !1,
                          loaded: !0,
                          error: null,
                        });
                    } catch (n) {
                      e ||
                        t({
                          vaults: [],
                          loading: !1,
                          loaded: !0,
                          error: n instanceof Error ? n.message : String(n),
                        });
                    }
                  })(),
                  () => {
                    e = !0;
                  }
                );
              }, []),
              e
            );
          })(),
          [h, g] = (0, a.useState)(null),
          b =
            null !=
            (n =
              null != (t = null != h ? h : null == (e = m[0]) ? void 0 : e.id)
                ? t
                : u)
              ? n
              : "f7e5e75e-454e-4be4-b12f-73676b760a93",
          f =
            null != (c = null != (i = m.find((e) => e.id === b)) ? i : m[0])
              ? c
              : {
                  id: b,
                  name: "Mandate Earn",
                  vaultAddress: null,
                  chain: "base",
                  agentId: null,
                  agentName: null,
                  tvl: null,
                };
        return (0, l.jsx)("section", {
          className: "relative py-16 sm:py-24 lg:py-28",
          children: (0, l.jsx)(s.fx, {
            className: "relative z-10 mx-auto max-w-5xl px-4 sm:px-6",
            children: (0, l.jsxs)(s.fv, {
              className: "flex flex-col items-center",
              staggerDelay: 0.12,
              delay: 0.04,
              children: [
                (0, l.jsx)(s.Tc, {
                  className: "w-full flex justify-center",
                  children: (0, l.jsx)(p, {}),
                }),
                (0, l.jsx)(s.Tc, {
                  className: "w-full text-center pt-2 sm:pt-4",
                  children: (0, l.jsx)("h2", {
                    className:
                      "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
                    children: d("title"),
                  }),
                }),
                (0, l.jsx)(s.Tc, {
                  className: "w-full text-center",
                  children: (0, l.jsx)("p", {
                    className:
                      "mt-4 mb-10 text-base text-text-secondary sm:mt-5 sm:mb-12 sm:text-lg",
                    children: d("subtitle"),
                  }),
                }),
                x &&
                  m.length >= 2 &&
                  (0, l.jsx)(s.Tc, {
                    className: "w-full",
                    children: (0, l.jsx)("div", {
                      className: "mb-4 flex flex-wrap justify-center gap-2",
                      children: m.map((e) =>
                        (0, l.jsx)(
                          "button",
                          {
                            type: "button",
                            onClick: () => g(e.id),
                            className:
                              "rounded-full border px-4 py-2 text-sm transition ".concat(
                                b === e.id
                                  ? "border-accent bg-accent/10 text-accent"
                                  : "border-text-tertiary/40 text-text-secondary hover:border-text-secondary/60"
                              ),
                            children: e.name,
                          },
                          e.id
                        )
                      ),
                    }),
                  }),
                (0, l.jsx)(s.Tc, {
                  className: "w-full",
                  children: (0, l.jsx)(Z, { vault: f }),
                }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
