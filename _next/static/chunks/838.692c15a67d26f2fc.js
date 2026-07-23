"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [838],
  {
    7838: (e, t, a) => {
      a.r(t), a.d(t, { SecuritySection: () => w });
      var s = a(8095),
        r = a(6720),
        i = a(809);
      let l = (0, i.A)("Wallet", [
          [
            "path",
            {
              d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
              key: "18etb6",
            },
          ],
          [
            "path",
            { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
          ],
        ]),
        c = (0, i.A)("Cpu", [
          [
            "rect",
            {
              width: "16",
              height: "16",
              x: "4",
              y: "4",
              rx: "2",
              key: "14l7u7",
            },
          ],
          [
            "rect",
            { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" },
          ],
          ["path", { d: "M15 2v2", key: "13l42r" }],
          ["path", { d: "M15 20v2", key: "15mkzm" }],
          ["path", { d: "M2 15h2", key: "1gxd5l" }],
          ["path", { d: "M2 9h2", key: "1bbxkp" }],
          ["path", { d: "M20 15h2", key: "19e6y8" }],
          ["path", { d: "M20 9h2", key: "19tzq7" }],
          ["path", { d: "M9 2v2", key: "165o2o" }],
          ["path", { d: "M9 20v2", key: "i2bqo8" }],
        ]),
        d = (0, i.A)("Waypoints", [
          ["circle", { cx: "12", cy: "4.5", r: "2.5", key: "r5ysbb" }],
          ["path", { d: "m10.2 6.3-3.9 3.9", key: "1nzqf6" }],
          ["circle", { cx: "4.5", cy: "12", r: "2.5", key: "jydg6v" }],
          ["path", { d: "M7 12h10", key: "b7w52i" }],
          ["circle", { cx: "19.5", cy: "12", r: "2.5", key: "1piiel" }],
          ["path", { d: "m13.8 17.7 3.9-3.9", key: "1wyg1y" }],
          ["circle", { cx: "12", cy: "19.5", r: "2.5", key: "13o1pw" }],
        ]),
        n = (0, i.A)("BadgeCheck", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ]),
        x = (0, i.A)("Lock", [
          [
            "rect",
            {
              width: "18",
              height: "11",
              x: "3",
              y: "11",
              rx: "2",
              ry: "2",
              key: "1w4ew1",
            },
          ],
          ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
        ]);
      var h = a(9569);
      let m = (0, i.A)("DoorOpen", [
        ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
        ["path", { d: "M2 20h3", key: "1gaodv" }],
        ["path", { d: "M13 20h9", key: "s90cdi" }],
        ["path", { d: "M10 12v.01", key: "vx6srw" }],
        [
          "path",
          {
            d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
            key: "199qr4",
          },
        ],
      ]);
      var o = a(1289),
        p = a(292),
        y = a(2907);
      let g = [l, c, d],
        b = [0, 1, 2],
        v = [
          { key: "audited", icon: n },
          { key: "ownerOnly", icon: x },
          { key: "onChain", icon: h.A },
          { key: "emergency", icon: m },
          { key: "agentSafety", icon: c },
        ];
      function w() {
        let e = (0, r.c)("landing.security");
        return (0, s.jsxs)("section", {
          id: "security",
          className: "relative py-12 sm:py-16 lg:py-24 overflow-hidden",
          children: [
            (0, s.jsx)("div", { "aria-hidden": !0, className: "section-glow" }),
            (0, s.jsxs)("div", {
              className: "relative max-w-7xl mx-auto px-4 sm:px-6",
              children: [
                (0, s.jsx)(y.X, {
                  eyebrow: e("eyebrow"),
                  title: e("title"),
                  subtitle: e("subtitle"),
                  align: "center",
                  variant: "stagger",
                  className: "mb-6 lg:mb-8",
                  titleClassName:
                    "r3d-statement-src lg:text-5xl max-w-3xl mx-auto text-balance",
                  subtitleClassName: "mt-4 max-w-2xl",
                  viewport: { amount: 0.2 },
                }),
                (0, s.jsx)(p.fv, {
                  viewport: { amount: 0.16 },
                  children: (0, s.jsx)(p.Tc, {
                    noFade: !0,
                    children: (0, s.jsxs)(o.j, {
                      radius: "rounded-[2rem]",
                      padded: !1,
                      className: "relative overflow-hidden p-5 sm:p-6 lg:p-7",
                      children: [
                        (0, s.jsx)("div", {
                          "aria-hidden": !0,
                          className:
                            "absolute inset-0 bg-[radial-gradient(circle_at_28%_12%,rgba(34,211,238,0.10),transparent_34%),radial-gradient(circle_at_78%_92%,rgba(16,185,129,0.08),transparent_34%)]",
                        }),
                        (0, s.jsx)("div", {
                          "aria-hidden": !0,
                          className:
                            "absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/35 to-transparent",
                        }),
                        (0, s.jsxs)("div", {
                          className: "relative z-10",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "mb-5 flex flex-wrap items-center justify-between gap-x-5 gap-y-3 border-b border-white/[0.08] pb-5 lg:mb-6",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "min-w-0 max-w-2xl flex-1 basis-[min(100%,18rem)]",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-caption text-accent-400 mb-2",
                                      children: e("flowEyebrow"),
                                    }),
                                    (0, s.jsx)("h3", {
                                      className:
                                        "text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary leading-tight sm:whitespace-nowrap",
                                      children: e("auditedContracts"),
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "mt-2 max-w-xl text-sm sm:text-base leading-relaxed text-text-secondary",
                                      children: e("flowSubtitle"),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "inline-flex shrink-0 items-center gap-2 self-center rounded-full border border-success/20 bg-success/[0.07] px-3.5 py-2 text-sm font-medium text-success shadow-[0_0_28px_rgba(16,185,129,0.10)] lg:ml-6",
                                  children: [
                                    (0, s.jsx)(n, {
                                      className: "h-4 w-4",
                                      "aria-hidden": !0,
                                    }),
                                    e("enforced"),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)(p.fv, {
                              className: "grid gap-3 md:grid-cols-3",
                              staggerDelay: 0.08,
                              viewport: { amount: 0.16 },
                              children: b.map((t, a) => {
                                let r = g[t];
                                return (0, s.jsx)(
                                  p.Tc,
                                  {
                                    noFade: !0,
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "liquid-glass-inner h-full rounded-2xl p-4 sm:p-5",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "mb-5 flex items-center justify-between",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500/[0.08] text-accent-300",
                                              children: (0, s.jsx)(r, {
                                                className: "h-5 w-5",
                                                "aria-hidden": !0,
                                              }),
                                            }),
                                            (0, s.jsx)("span", {
                                              className:
                                                "font-mono text-xs text-text-tertiary tabular-nums",
                                              children: String(a + 1).padStart(
                                                2,
                                                "0"
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("h4", {
                                          className:
                                            "text-lg font-semibold text-text-primary",
                                          children: e(
                                            "flowSteps.".concat(t, ".title")
                                          ),
                                        }),
                                        (0, s.jsx)("p", {
                                          className:
                                            "mt-2 text-sm leading-relaxed text-text-secondary",
                                          children: e(
                                            "flowSteps.".concat(t, ".body")
                                          ),
                                        }),
                                      ],
                                    }),
                                  },
                                  t
                                );
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "mt-5 flex flex-wrap gap-2",
                              children: v.map((t) => {
                                let { key: a, icon: r } = t;
                                return (0, s.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-sm text-text-secondary",
                                    children: [
                                      (0, s.jsx)(r, {
                                        className:
                                          "h-3.5 w-3.5 text-accent-300",
                                        "aria-hidden": !0,
                                      }),
                                      (0, s.jsx)("span", {
                                        children: e("".concat(a, ".title")),
                                      }),
                                    ],
                                  },
                                  a
                                );
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
