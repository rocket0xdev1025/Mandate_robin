"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [742],
  {
    2742: (e, a, i) => {
      i.r(a), i.d(a, { MarketsWidgetSection: () => j });
      var t = i(8095),
        s = i(8378),
        n = i(5955),
        r = i(6720),
        l = i(8967),
        c = i(809);
      let o = (0, c.A)("CircleDollarSign", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "path",
            { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" },
          ],
          ["path", { d: "M12 18V6", key: "zqpxq5" }],
        ]),
        d = (0, c.A)("TrendingUp", [
          [
            "polyline",
            { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" },
          ],
          ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
        ]),
        u = (0, c.A)("Bitcoin", [
          [
            "path",
            {
              d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
              key: "yr8idg",
            },
          ],
        ]),
        y = (0, c.A)("ChartColumn", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "M18 17V9", key: "2bz60n" }],
          ["path", { d: "M13 17V5", key: "1frdt8" }],
          ["path", { d: "M8 17v-3", key: "17ska0" }],
        ]),
        m = (0, c.A)("Landmark", [
          ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
          ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
          ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
          ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
          ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
          ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }],
        ]);
      var v = i(292),
        p = i(2907);
      let h = [
          { key: "stablecoins", Icon: o },
          { key: "stocks", Icon: d },
          { key: "digitalAssets", Icon: u },
        ],
        k = [
          {
            key: "commodities",
            Icon: function (e) {
              let { className: a, ...i } = e;
              return (0, t.jsxs)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.75,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: a,
                ...i,
                children: [
                  (0, t.jsx)("path", { d: "M6.6 14.5h5.8l1.1 4H5.5l1.1-4Z" }),
                  (0, t.jsx)("path", { d: "M13.6 14.5h5.8l1.1 4h-8l1.1-4Z" }),
                  (0, t.jsx)("path", { d: "M10.1 7h5.8l1.1 4H9l1.1-4Z" }),
                ],
              });
            },
          },
          { key: "indices", Icon: y },
          { key: "moneyMarkets", Icon: m },
        ],
        x = [...h, ...k];
      function _(e) {
        let {
            markets: a,
            radiusPct: i,
            durationSec: n,
            direction: r,
            startAngleDeg: l,
            t: c,
            reduceMotion: o,
            activeKey: d,
            onActiveChange: u,
          } = e,
          y = "cw" === r ? 1 : -1,
          m = 2 * i;
        return (0, t.jsxs)(s.P.div, {
          className: "universe__orbit",
          animate: o ? void 0 : { rotate: 360 * y },
          transition: o
            ? void 0
            : { duration: n, repeat: 1 / 0, ease: "linear" },
          children: [
            (0, t.jsx)("div", {
              className: "universe__ring",
              style: { width: "".concat(m, "%"), height: "".concat(m, "%") },
              "aria-hidden": !0,
            }),
            a.map((e, r) => {
              let m = (function (e, a, i) {
                  let t =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : -90,
                    s = ((t + (360 / a) * e) * Math.PI) / 180;
                  return {
                    left: "".concat(50 + Math.cos(s) * i, "%"),
                    top: "".concat(50 + Math.sin(s) * i, "%"),
                  };
                })(r, a.length, i, l),
                v = d === e.key;
              return (0, t.jsx)(
                "div",
                {
                  className: "universe__anchor",
                  style: m,
                  children: (0, t.jsxs)(s.P.div, {
                    className: [
                      "universe__node",
                      v ? "universe__node--active" : "",
                    ]
                      .filter(Boolean)
                      .join(" "),
                    tabIndex: 0,
                    "aria-label": c("capabilities.markets.".concat(e.key)),
                    onMouseEnter: () => u(e.key),
                    onFocus: () => u(e.key),
                    animate: o ? void 0 : { rotate: -(360 * y) },
                    transition: o
                      ? void 0
                      : { duration: n, repeat: 1 / 0, ease: "linear" },
                    children: [
                      (0, t.jsx)("span", {
                        className: "universe__planet",
                        children: (0, t.jsx)(e.Icon, {
                          className: "universe__planet-icon",
                          "aria-hidden": !0,
                        }),
                      }),
                      (0, t.jsx)("span", {
                        className: "universe__label",
                        children: c("capabilities.markets.".concat(e.key)),
                      }),
                    ],
                  }),
                },
                e.key
              );
            }),
          ],
        });
      }
      function j() {
        var e;
        let a = (0, r.c)("landing"),
          i = null != (e = (0, n.I)()) && e,
          [c, o] = (0, l.useState)("commodities");
        return (
          (0, l.useEffect)(() => {
            if (i) return;
            let e = window.setInterval(() => {
              o((e) => {
                let a = x.findIndex((a) => a.key === e);
                return x[(a + 1) % x.length].key;
              });
            }, 2600);
            return () => window.clearInterval(e);
          }, [i]),
          (0, t.jsxs)("section", {
            id: "capabilities",
            className: "universe-section relative py-12 sm:py-16 lg:py-24",
            "aria-labelledby": "capabilities-heading",
            children: [
              (0, t.jsx)("div", {
                className: "universe-section__aurora",
                "aria-hidden": !0,
              }),
              (0, t.jsxs)("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6",
                children: [
                  (0, t.jsx)(p.X, {
                    eyebrow: a("capabilities.eyebrow"),
                    title: a("capabilities.title"),
                    subtitle: a("capabilities.subtitle"),
                    align: "center",
                    variant: "fade",
                    className: "mb-10 sm:mb-14 max-w-3xl mx-auto text-balance",
                    titleClassName: "lg:text-5xl max-w-none",
                    subtitleClassName: "mt-4",
                    titleId: "capabilities-heading",
                    softZoom: !0,
                    viewport: { amount: 0.3 },
                  }),
                  (0, t.jsx)(v.nD, {
                    delay: 0.08,
                    softZoom: !0,
                    viewport: { amount: 0.12 },
                    children: (0, t.jsxs)("div", {
                      "data-robot-anchor": "markets",
                      className: "universe robot-projected",
                      children: [
                        (0, t.jsx)("div", {
                          className: "universe__atmosphere",
                          "aria-hidden": !0,
                          children: (0, t.jsx)("div", {
                            className: "universe__sweep",
                            "aria-hidden": !0,
                          }),
                        }),
                        (0, t.jsx)(_, {
                          markets: k,
                          radiusPct: 42,
                          durationSec: 96,
                          direction: "cw",
                          startAngleDeg: -90,
                          t: a,
                          reduceMotion: i,
                          activeKey: c,
                          onActiveChange: o,
                        }),
                        (0, t.jsx)(_, {
                          markets: h,
                          radiusPct: 26,
                          durationSec: 64,
                          direction: "ccw",
                          startAngleDeg: -30,
                          t: a,
                          reduceMotion: i,
                          activeKey: c,
                          onActiveChange: o,
                        }),
                        (0, t.jsxs)("div", {
                          className: "universe__core",
                          "aria-hidden": !0,
                          children: [
                            (0, t.jsx)(s.P.span, {
                              className: "universe__pulse",
                              animate: i
                                ? void 0
                                : {
                                    scale: [1, 1.55, 1],
                                    opacity: [0.55, 0, 0.55],
                                  },
                              transition: i
                                ? void 0
                                : {
                                    duration: 3.4,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                  },
                            }),
                            (0, t.jsx)(s.P.span, {
                              className:
                                "universe__pulse universe__pulse--delayed",
                              animate: i
                                ? void 0
                                : {
                                    scale: [1, 1.45, 1],
                                    opacity: [0.4, 0, 0.4],
                                  },
                              transition: i
                                ? void 0
                                : {
                                    duration: 3.4,
                                    delay: 1.7,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                  },
                            }),
                            (0, t.jsx)("div", {
                              className: "universe__star",
                              children: (0, t.jsx)("span", {
                                className: "universe__star-label",
                                children: a("capabilities.agent"),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
]);
