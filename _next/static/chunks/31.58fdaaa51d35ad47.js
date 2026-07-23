"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [31],
  {
    9031: (e, t, r) => {
      r.r(t), r.d(t, { BenefitsAgentChat: () => h });
      var i = r(8095),
        a = r(8967),
        n = r(6985),
        s = r(8378),
        l = r(1506),
        o = r(6720),
        d = r(373),
        c = r(292),
        u = r(3776);
      function f(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function h(e) {
        let { thread: t, reducedMotion: r, className: h } = e,
          m = (0, o.c)("landing"),
          x = (0, a.useRef)(null),
          p = (0, a.useRef)(null),
          b = (0, n.W)(x, { amount: 0.18, margin: "0px 0px -10% 0px" }),
          [g, v] = (0, a.useState)(0),
          [y, w] = (0, a.useState)(0),
          [j, N] = (0, a.useState)(!1);
        if (
          ((0, a.useLayoutEffect)(() => {
            let e = p.current;
            if (e) {
              if (0 === g) return void e.scrollTo({ top: 0, behavior: "auto" });
              e.scrollTo({
                top: e.scrollHeight,
                behavior: r ? "auto" : "smooth",
              });
            }
          }, [g, t.length, r]),
          (0, a.useEffect)(() => {
            if (r) return void v(t.length);
            if (0 === t.length) return;
            let e = !1;
            return (
              (async () => {
                for (; !e; ) {
                  if (!b) {
                    await f(220);
                    continue;
                  }
                  let r = !1;
                  for (let i = 0; i <= t.length; i++) {
                    if (e) return;
                    if (!b) break;
                    v(i),
                      i < t.length ? await f(1150) : await f(4800),
                      i === t.length && (r = !0);
                  }
                  if (e) return;
                  if (r) {
                    if ((N(!0), await f(520), e)) return;
                    w((e) => e + 1), v(0), N(!1), await f(380);
                  }
                }
              })(),
              () => {
                e = !0;
              }
            );
          }, [b, r, t.length]),
          0 === t.length)
        )
          return null;
        let _ = t.slice(0, g);
        return (0, i.jsxs)("div", {
          ref: x,
          className: (0, d.cn)(
            "liquid-glass-card relative flex h-[22.5rem] flex-col overflow-hidden rounded-[2rem] border border-white/[0.10] sm:h-[25.5rem] md:h-[26.5rem]",
            "ring-1 ring-white/[0.05]",
            h
          ),
          role: "region",
          "aria-label": m("a11y.benefitsChatDemo"),
          children: [
            (0, i.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-400/[0.06] via-transparent to-success/[0.05] opacity-90",
            }),
            (0, i.jsxs)("div", {
              className: "relative z-10 flex min-h-0 flex-1 flex-col",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3 sm:px-4 sm:py-3.5",
                  children: [
                    (0, i.jsx)("p", {
                      className: "text-caption text-text-tertiary",
                      children: m("features.benefitsChat.heading"),
                    }),
                    (0, i.jsx)(u.m, {
                      label: m("features.commandCenter.live"),
                      reducedMotion: r,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "relative min-h-0 flex-1",
                  children: [
                    (0, i.jsx)(s.P.div, {
                      ref: p,
                      animate: { opacity: +!j },
                      transition: { duration: 0.52 * !r, ease: c.Nd },
                      className:
                        "h-full overflow-y-auto overflow-x-hidden overscroll-contain px-3 py-3 [scrollbar-width:thin] sm:px-4 sm:py-3.5 sm:[scrollbar-color:rgba(148,163,184,0.35)_transparent]",
                      children: (0, i.jsx)("div", {
                        className: "space-y-2.5 pb-2",
                        children: (0, i.jsx)(l.N, {
                          initial: !1,
                          children: _.map((e, t) =>
                            (0, i.jsx)(
                              s.P.div,
                              {
                                initial: !r && {
                                  opacity: 0,
                                  y: 10,
                                  filter: "blur(4px)",
                                },
                                animate: {
                                  opacity: 1,
                                  y: 0,
                                  filter: "blur(0px)",
                                },
                                exit: r
                                  ? void 0
                                  : {
                                      opacity: 0,
                                      y: -6,
                                      transition: { duration: 0.2 },
                                    },
                                transition: { duration: 0.42, ease: c.Nd },
                                className: (0, d.cn)(
                                  "flex w-full",
                                  "user" === e.role
                                    ? "justify-end"
                                    : "justify-start"
                                ),
                                children: (0, i.jsx)("div", {
                                  className: (0, d.cn)(
                                    "max-w-[min(100%,20rem)] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                                    "user" === e.role
                                      ? "rounded-br-md border border-white/[0.10] bg-white/[0.06] text-text-primary"
                                      : "rounded-bl-md border border-accent-400/25 bg-accent-500/[0.07] text-text-primary shadow-[0_0_28px_rgba(6,182,212,0.07)]"
                                  ),
                                  children: e.text,
                                }),
                              },
                              "".concat(y, "-").concat(t, "-").concat(e.role)
                            )
                          ),
                        }),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-bg-deepest/95 to-transparent",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
