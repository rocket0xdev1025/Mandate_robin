(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    292: (e, t, a) => {
      "use strict";
      a.d(t, {
        nD: () => C,
        O: () => l,
        uT: () => n,
        xi: () => r,
        Nd: () => s,
        Zg: () => i,
        HS: () => k,
        PT: () => v,
        nO: () => N,
        fx: () => j,
        Ig: () => f,
        Tc: () => w,
        fv: () => y,
      });
      let s = [0.22, 1, 0.36, 1],
        r = 0.68,
        l = 0.56,
        n = 0.36,
        i = 0.12,
        c = { once: !0, amount: 0.2 };
      function o(e) {
        return { ...c, ...e };
      }
      var d = a(8095),
        x = a(8967),
        m = a(5955),
        p = a(425),
        h = a(1816),
        u = a(8378),
        g = a(373);
      function f(e) {
        let { text: t, className: a, highlightWords: s } = e,
          r = (0, x.useRef)(null),
          l = (0, m.I)(),
          { scrollYProgress: n } = (0, p.L)({
            target: r,
            offset: ["start 0.9", "end 0.58"],
          }),
          i = (0, h.G)(n, [0, 1], [0.24, 1]),
          c = (0, h.G)(n, [0, 1], [10, 0]),
          o = t.split(" "),
          f = new Set(null == s ? void 0 : s.map((e) => e.toLowerCase()));
        return l
          ? (0, d.jsx)("div", {
              ref: r,
              className: (0, g.cn)(a),
              children: (0, d.jsx)("p", {
                className:
                  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-5xl mx-auto text-center",
                children: o.map((e, t) => {
                  let a = f.has(e.toLowerCase().replace(/[.,!?]/g, ""));
                  return (0, d.jsx)(
                    "span",
                    {
                      className: (0, g.cn)(
                        "inline-block mr-[0.3em]",
                        a && "text-gradient"
                      ),
                      children: e,
                    },
                    "".concat(e, "-").concat(t)
                  );
                }),
              }),
            })
          : (0, d.jsx)(u.P.div, {
              ref: r,
              className: (0, g.cn)(a),
              children: (0, d.jsx)(u.P.p, {
                style: { opacity: i, y: c },
                className:
                  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-5xl mx-auto text-center",
                children: o.map((e, t) => {
                  let a = f.has(e.toLowerCase().replace(/[.,!?]/g, ""));
                  return (0, d.jsx)(
                    "span",
                    {
                      className: (0, g.cn)(
                        "inline-block mr-[0.3em] transition-colors duration-300",
                        a && "text-gradient"
                      ),
                      children: e,
                    },
                    "".concat(e, "-").concat(t)
                  );
                }),
              }),
            });
      }
      var b = a(884);
      function v(e) {
        let { children: t, speed: a = 0.5, className: s } = e,
          r = (0, x.useRef)(null),
          l = (0, m.I)(),
          { scrollYProgress: n } = (0, p.L)({
            target: r,
            offset: ["start end", "end start"],
          }),
          i = (0, h.G)(n, [0, 1], [0, -100 * a]),
          c = (0, b.z)(i, { stiffness: 85, damping: 24, mass: 0.85 });
        return (0, d.jsx)("div", {
          ref: r,
          className: (0, g.cn)("relative overflow-hidden", s),
          children: (0, d.jsx)(u.P.div, {
            style: l ? void 0 : { y: c },
            children: t,
          }),
        });
      }
      function j(e) {
        let { children: t, className: a } = e,
          s = (0, x.useRef)(null),
          r = (0, m.I)(),
          { scrollYProgress: l } = (0, p.L)({
            target: s,
            offset: ["start end", "center center"],
          }),
          n = (0, h.G)(l, [0, 1], [0.96, 1]),
          i = (0, h.G)(l, [0, 0.4], [0.3, 1]),
          c = (0, b.z)(n, { stiffness: 90, damping: 26, mass: 0.9 });
        return (0, d.jsx)(u.P.div, {
          ref: s,
          initial: r ? { opacity: 1, scale: 1 } : void 0,
          style: r ? void 0 : { scale: c, opacity: i },
          className: a,
          children: t,
        });
      }
      function y(e) {
        let {
          children: t,
          className: a,
          delay: s = 0,
          staggerDelay: r = i,
          viewport: l,
          ...n
        } = e;
        return (0, d.jsx)(u.P.div, {
          initial: "hidden",
          whileInView: "visible",
          viewport: o(l),
          variants: {
            hidden: {},
            visible: { transition: { staggerChildren: r, delayChildren: s } },
          },
          className: a,
          ...n,
          children: t,
        });
      }
      function w(e) {
        let { children: t, className: a, noFade: r = !1, ...n } = e,
          i = (0, m.I)();
        return r
          ? (0, d.jsx)("div", { className: a, ...n, children: t })
          : (0, d.jsx)(u.P.div, {
              variants: (function (e) {
                let t = !!e;
                return {
                  hidden: { opacity: +!!t },
                  visible: {
                    opacity: 1,
                    transition: { duration: t ? 0 : l, ease: s },
                  },
                };
              })(i),
              className: a,
              ...n,
              children: t,
            });
      }
      function N(e) {
        let { children: t, className: a, delay: r = 0, viewport: n } = e,
          i = !!(0, m.I)();
        return (0, d.jsx)(u.P.div, {
          initial: i
            ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
            : { opacity: 0, y: 20, filter: "blur(8px)", scale: 0.988 },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
          viewport: o(n),
          transition: { duration: i ? 0 : l, delay: i ? 0 : r, ease: s },
          className: a,
          children: t,
        });
      }
      function k(e) {
        let { children: t, className: a, strength: s = 0.3 } = e,
          r = (0, x.useRef)(null),
          l = (0, m.I)();
        return (0, d.jsx)("div", {
          ref: r,
          onMouseMove: l
            ? void 0
            : (e) => {
                if (l || !r.current) return;
                let t = r.current.getBoundingClientRect(),
                  a = (e.clientX - t.left - t.width / 2) * s,
                  n = (e.clientY - t.top - t.height / 2) * s;
                r.current.style.transform = "translate("
                  .concat(a, "px, ")
                  .concat(n, "px)");
              },
          onMouseLeave: l
            ? void 0
            : () => {
                r.current && (r.current.style.transform = "translate(0, 0)");
              },
          className: (0, g.cn)("transition-transform duration-300 ease-out", a),
          children: t,
        });
      }
      function C(e) {
        let {
            children: t,
            className: a,
            delay: l = 0,
            direction: n = "up",
            viewport: i,
            softZoom: c = !1,
          } = e,
          x = (0, m.I)();
        return (0, d.jsx)(u.P.div, {
          initial: x
            ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1 }
            : {
                opacity: 0,
                filter: "blur(9px)",
                ...{
                  up: { y: 28 },
                  down: { y: -28 },
                  left: { x: 28 },
                  right: { x: -28 },
                }[n],
                ...(c && !x ? { scale: 0.99 } : { scale: 1 }),
              },
          whileInView: {
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
            y: 0,
            scale: 1,
          },
          viewport: o(i),
          transition: { duration: x ? 0 : r, delay: x ? 0 : l, ease: s },
          className: a,
          children: t,
        });
      }
    },
    373: (e, t, a) => {
      "use strict";
      a.d(t, { cn: () => l });
      var s = a(7119),
        r = a(9067);
      function l() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, r.QP)((0, s.$)(t));
      }
    },
    1289: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => l });
      var s = a(8095),
        r = a(373);
      function l(e) {
        let {
          children: t,
          className: a,
          radius: l = "rounded-[1.75rem]",
          padded: n = !0,
        } = e;
        return (0, s.jsx)("div", {
          className: (0, r.cn)(
            "liquid-glass-card relative",
            l,
            n && "p-6 sm:p-7",
            a
          ),
          children: t,
        });
      }
    },
    2005: (e, t, a) => {
      "use strict";
      a.d(t, { KC: () => i, Zx: () => n });
      let s = "mandate:referralCode";
      function r(e) {
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch (e) {
          return null;
        }
      }
      function l() {
        return void 0 !== window.localStorage;
      }
      function n() {
        let e;
        if (!l()) return null;
        try {
          e = window.localStorage.getItem(s);
        } catch (e) {
          return null;
        }
        let t = r(e);
        return t && "string" == typeof t.code && "number" == typeof t.capturedAt
          ? Date.now() - t.capturedAt > 2592e6
            ? ((function () {
                if (l())
                  try {
                    window.localStorage.removeItem(s);
                  } catch (e) {}
              })(),
              null)
            : t
          : null;
      }
      function i(e) {
        if (l())
          try {
            let t = window.localStorage.getItem(s);
            if (t && r(t)) return;
            let a = { code: e.toUpperCase(), capturedAt: Date.now() };
            window.localStorage.setItem(s, JSON.stringify(a));
          } catch (e) {}
      }
    },
    2907: (e, t, a) => {
      "use strict";
      a.d(t, { X: () => n });
      var s = a(8095),
        r = a(373),
        l = a(292);
      function n(e) {
        let {
            eyebrow: t,
            title: a,
            subtitle: n,
            align: i = "center",
            variant: c = "stagger",
            className: o,
            titleClassName: d,
            subtitleClassName: x,
            staggerDelay: m = l.Zg,
            viewport: p,
            softZoom: h,
            titleId: u,
          } = e,
          g = "center" === i ? "text-center" : "text-center lg:text-left",
          f =
            "center" === i
              ? "text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight"
              : "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight";
        return "fade" === c
          ? (0, s.jsxs)(l.nD, {
              className: (0, r.cn)(g, o),
              softZoom: h,
              viewport: p,
              children: [
                (0, s.jsx)("p", {
                  className: "text-caption text-accent-400 mb-3",
                  children: t,
                }),
                (0, s.jsx)("h2", {
                  id: u,
                  className: (0, r.cn)(f, "text-balance", d),
                  children: a,
                }),
                n
                  ? (0, s.jsx)("p", {
                      className: (0, r.cn)(
                        "text-text-secondary mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed",
                        "left" === i && "lg:mx-0",
                        x
                      ),
                      children: n,
                    })
                  : null,
              ],
            })
          : (0, s.jsxs)(l.fv, {
              className: (0, r.cn)(g, o),
              staggerDelay: m,
              viewport: p,
              children: [
                (0, s.jsx)(l.Tc, {
                  children: (0, s.jsx)("p", {
                    className: "text-caption text-accent-400 mb-3",
                    children: t,
                  }),
                }),
                (0, s.jsx)(l.Tc, {
                  children: (0, s.jsx)("h2", {
                    id: u,
                    className: (0, r.cn)(f, d),
                    children: a,
                  }),
                }),
                n
                  ? (0, s.jsx)(l.Tc, {
                      children: (0, s.jsx)("p", {
                        className: (0, r.cn)(
                          "text-text-secondary mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed",
                          "center" === i && "mx-auto",
                          "left" === i && "max-w-md lg:max-w-none",
                          x
                        ),
                        children: n,
                      }),
                    })
                  : null,
              ],
            });
      }
    },
    2940: (e, t, a) => {
      "use strict";
      a.d(t, { Yc: () => i, Rn: () => o, wG: () => c });
      var s = a(8095),
        r = a(9275),
        l = a(6720),
        n = a(373);
      function i(e) {
        let { size: t = 28, className: a } = e;
        return (0, s.jsx)(r.default, {
          src: "/logo/logo.png",
          alt: "Mandate",
          width: t,
          height: t,
          className: (0, n.cn)("object-contain shrink-0", a),
          priority: !0,
        });
      }
      function c(e) {
        let { iconSize: t = 28, textSize: a, className: l, forceDark: i } = e;
        return (0, s.jsx)(r.default, {
          src: "/logo/orizontal_dark.png",
          alt: "Mandate",
          height: t,
          width: 4 * t,
          className: (0, n.cn)("object-contain shrink-0", l),
          priority: !0,
        });
      }
      function o(e) {
        let { className: t } = e,
          a = (0, l.c)("landing");
        return (0, s.jsx)("span", {
          className: (0, n.cn)(
            "text-xs text-text-tertiary italic tracking-wide",
            t
          ),
          children: a("footer.tagline"),
        });
      }
    },
    3776: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => n });
      var s = a(8095),
        r = a(8378),
        l = a(373);
      function n(e) {
        let {
            label: t,
            reducedMotion: a = !1,
            animated: n = !1,
            className: i,
          } = e,
          c = (0, l.cn)(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full border border-success/20 bg-success/[0.06] px-2.5 py-1 text-[0.7rem] font-medium text-success",
            i
          );
        return n && !a
          ? (0, s.jsxs)(r.P.div, {
              animate: { opacity: [0.65, 1, 0.65] },
              transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
              className: c,
              children: [
                (0, s.jsx)("span", {
                  className: "h-1.5 w-1.5 rounded-full bg-success",
                }),
                t,
              ],
            })
          : (0, s.jsxs)("span", {
              className: c,
              children: [
                (0, s.jsx)("span", {
                  className: (0, l.cn)(
                    "h-1.5 w-1.5 rounded-full bg-success",
                    !a && "animate-pulse"
                  ),
                }),
                t,
              ],
            });
      }
    },
    4154: (e, t, a) => {
      "use strict";
      a.d(t, { LandingErrorBoundary: () => l });
      var s = a(8095),
        r = a(8967);
      class l extends r.Component {
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          console.error("Landing page error:", e, t.componentStack);
        }
        render() {
          return this.state.hasError
            ? (0, s.jsxs)("main", {
                id: "main-content",
                className:
                  "flex min-h-dvh flex-col items-center justify-center gap-4 bg-[#05060a] px-6 py-16 text-center text-[#f1f5f9]",
                role: "alert",
                children: [
                  (0, s.jsx)("h1", {
                    className:
                      "text-xl font-semibold tracking-tight sm:text-2xl",
                    children: "Something went wrong",
                  }),
                  (0, s.jsx)("p", {
                    className: "max-w-md text-sm text-[#94a3b8]",
                    children:
                      "The page could not finish loading. Try refreshing.",
                  }),
                ],
              })
            : this.props.children;
        }
        constructor(...e) {
          super(...e), (this.state = { hasError: !1 });
        }
      }
    },
    5513: (e, t, a) => {
      "use strict";
      a.d(t, {
        C_: () => o,
        Du: () => u,
        Oe: () => i,
        Pt: () => c,
        RJ: () => h,
        Y7: () => l,
        aT: () => p,
        ay: () => d,
        c6: () => x,
        nx: () => g,
        om: () => m,
        x7: () => f,
        zp: () => n,
      });
      var s,
        r = a(4188);
      let l = "https://mandate.gitbook.io/",
        n = "https://discord.gg/24X4TtKtZm",
        i = "https://github.com/Mandate-Finance",
        c = "https://x.com/Mandate_AI",
        o = "https://t.me/MandateFinance",
        d = "https://t.me/Mandate_finance_official",
        x = "0x51cbDD4980D60A579A0793dfA28045fE751bdC9f",
        m = "https://app.uniswap.org/swap?chain=robinhood&outputCurrency=TBA",
        p =
          "https://matcha.xyz/tokens/robinhood/0x51cbdd4980d60a579a0793dfa28045fe751bdc9f?buyAddress=0x51cbdd4980d60a579a0793dfa28045fe751bdc9f&buyChain=4663&sellAddress=0x5fc5360d0400a0fd4f2af552add042d716f1d168&sellChain=4663",
        h = "https://robinhoodchain.blockscout.com/address/".concat(x),
        u = "https://robinscan.io/address/".concat(x),
        g = "https://testflight.apple.com/join/zDsEtmat",
        f =
          null != (s = r.env.NEXT_PUBLIC_ANDROID_TEST_URL)
            ? s
            : "https://play.google.com/store/apps/details?id=finance.mandate.app";
    },
    5723: (e, t, a) => {
      "use strict";
      a.d(t, { LandingPage: () => ey });
      var s = a(8095),
        r = a(8967),
        l = a(8241),
        n = a(6599),
        i = a(6383),
        c = a.n(i),
        o = a(6720),
        d = a(8378),
        x = a(1506),
        m = a(1337),
        p = a(9670),
        h = a(9825),
        u = a(5710),
        g = a(848),
        f = a(8430),
        b = a(8865),
        v = a(2940),
        j = a(8533),
        y = a(373);
      function w(e) {
        let {
            label: t,
            icon: a,
            items: l,
            className: n,
            iconOnlyBelowLg: i = !1,
          } = e,
          [c, o] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          x = (0, r.useId)();
        return (
          (0, r.useEffect)(() => {
            if (!c) return;
            let e = (e) => {
                var t;
                (null == (t = d.current) ? void 0 : t.contains(e.target)) ||
                  o(!1);
              },
              t = (e) => {
                "Escape" === e.key && o(!1);
              };
            return (
              document.addEventListener("mousedown", e),
              document.addEventListener("keydown", t),
              () => {
                document.removeEventListener("mousedown", e),
                  document.removeEventListener("keydown", t);
              }
            );
          }, [c]),
          (0, s.jsxs)("div", {
            ref: d,
            className: (0, y.cn)("relative", n),
            children: [
              c &&
                (0, s.jsx)("div", {
                  id: x,
                  role: "menu",
                  className: (0, y.cn)(
                    "absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[15rem]",
                    "rounded-2xl border border-white/15 p-1.5 shadow-[0_20px_48px_rgba(0,0,0,0.65)]",
                    "bg-[rgba(6,10,18,0.97)] backdrop-blur-2xl"
                  ),
                  children: l.map((e) => {
                    let t = (0, s.jsxs)("span", {
                      className: "flex items-start gap-2.5",
                      children: [
                        e.icon
                          ? (0, s.jsx)("span", {
                              className:
                                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-text-secondary",
                              children: e.icon,
                            })
                          : null,
                        (0, s.jsxs)("span", {
                          className: "min-w-0",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "block text-sm font-medium text-text-primary",
                              children: e.label,
                            }),
                            e.description
                              ? (0, s.jsx)("span", {
                                  className:
                                    "mt-0.5 block text-[11px] leading-snug text-text-tertiary",
                                  children: e.description,
                                })
                              : null,
                          ],
                        }),
                      ],
                    });
                    return e.href
                      ? (0, s.jsx)(
                          "a",
                          {
                            role: "menuitem",
                            href: e.href,
                            target: !1 === e.external ? void 0 : "_blank",
                            rel:
                              !1 === e.external
                                ? void 0
                                : "noopener noreferrer",
                            className:
                              "block rounded-xl px-3 py-2.5 hover:bg-[var(--glass-content)] transition-colors",
                            onClick: () => o(!1),
                            children: t,
                          },
                          e.label
                        )
                      : (0, s.jsx)(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            className:
                              "block w-full rounded-xl px-3 py-2.5 text-left hover:bg-[var(--glass-content)] transition-colors",
                            onClick: () => {
                              var t;
                              null == (t = e.onClick) || t.call(e), o(!1);
                            },
                            children: t,
                          },
                          e.label
                        );
                  }),
                }),
            ],
          })
        );
      }
      var N = a(5513),
        k = a(6666),
        C = a(5178),
        I = a(6766),
        _ = a(6504),
        T = a(9569),
        D = a(4581),
        A = a(1901),
        S = a(3966);
      function P(e) {
        let { onJoinWaitlist: t } = e,
          [a, l] = (0, r.useState)(!1),
          [n, i] = (0, r.useState)(!1),
          j = (0, o.c)("landing"),
          k = [
            { label: j("nav.howItWorks"), href: "#how-it-works" },
            { label: j("nav.roadmap"), href: "#roadmap" },
            { label: j("nav.team"), href: "#team" },
            { label: j("nav.pricing"), href: "#pricing" },
          ],
          C =
            "text-sm text-text-secondary hover:text-text-primary transition-colors px-2.5 lg:px-3 py-2 rounded-2xl hover:bg-[var(--glass-plate)]",
          I = async () => {
            try {
              await navigator.clipboard.writeText(N.c6),
                i(!0),
                window.setTimeout(() => i(!1), 1800);
            } catch (e) {}
          },
          _ = [
            {
              label: "X",
              description: j("nav.socials.xDesc"),
              href: N.Pt,
              icon: (0, s.jsx)(f.MR, { className: "w-3.5 h-3.5" }),
            },
            {
              label: j("nav.socials.telegramChannel"),
              description: j("nav.socials.telegramChannelDesc"),
              href: N.ay,
              icon: (0, s.jsx)(f.FV, { className: "w-3.5 h-3.5" }),
            },
            {
              label: j("nav.socials.telegramGroup"),
              description: j("nav.socials.telegramGroupDesc"),
              href: N.C_,
              icon: (0, s.jsx)(f.FV, { className: "w-3.5 h-3.5" }),
            },
          ],
          T = [
            {
              label: j("nav.token.virtuals"),
              description: j("nav.token.virtualsDesc"),
              href: N.om,
              icon: (0, s.jsx)(b.r, {
                src: "/brand/virtuals.png",
                alt: "Virtuals",
              }),
            },
            {
              label: j("nav.token.trade"),
              description: j("nav.token.tradeDesc"),
              href: N.aT,
              icon: (0, s.jsx)(b.r, {
                src: "/brand/matcha.png",
                alt: "Matcha",
              }),
            },
            {
              label: j("nav.token.blockscout"),
              description: j("nav.token.explorersDesc"),
              href: N.RJ,
              icon: (0, s.jsx)(b.r, {
                src: "/brand/blockscout.png",
                alt: "Blockscout",
              }),
            },
            {
              label: j("nav.token.robinscan"),
              description: j("nav.token.explorersDesc"),
              href: N.Du,
              icon: (0, s.jsx)(b.r, {
                src: "/brand/robinscan.png",
                alt: "Robinscan",
              }),
            },
            {
              label: j(n ? "nav.token.caCopied" : "nav.token.ca"),
              description: N.c6,
              onClick: I,
              icon: n
                ? (0, s.jsx)(m.A, {
                    className: "h-3.5 w-3.5 text-success",
                    strokeWidth: 2.5,
                  })
                : (0, s.jsx)(p.A, { className: "h-3.5 w-3.5", strokeWidth: 2 }),
            },
          ];
        return (0, s.jsx)("header", {
          className:
            "fixed top-0 inset-x-0 z-50 pointer-events-none px-4 sm:px-6 pt-4",
          children: (0, s.jsx)("nav", {
            "aria-label": "Primary",
            className: "max-w-7xl mx-auto pointer-events-auto",
            children: (0, s.jsxs)("div", {
              className: (0, y.cn)(
                "liquid-glass-float-nav rounded-[2rem]",
                a && "liquid-glass-float-nav--solid"
              ),
              children: [
                (0, s.jsxs)(d.P.div, {
                  layout: !0,
                  className:
                    "h-14 sm:h-[3.75rem] px-4 sm:px-6 flex items-center justify-between gap-3",
                  children: [
                    (0, s.jsx)(c(), {
                      href: "/",
                      className:
                        "shrink-0 rounded-2xl px-1 py-1 -m-1 hover:bg-[var(--glass-shell)] transition-colors",
                      children: (0, s.jsx)(v.wG, {
                        iconSize: 34,
                        textSize: 23,
                      }),
                    }),
                    (0, s.jsx)(d.P.div, {
                      layout: !0,
                      className:
                        "hidden md:flex items-center gap-0.5 lg:gap-1 flex-1 justify-center max-w-xl mx-2",
                      children: k.map((e) =>
                        e.href.startsWith("#")
                          ? (0, s.jsx)(
                              "a",
                              { href: e.href, className: C, children: e.label },
                              e.label
                            )
                          : e.href.startsWith("/")
                          ? (0, s.jsx)(
                              c(),
                              { href: e.href, className: C, children: e.label },
                              e.label
                            )
                          : (0, s.jsx)(
                              "a",
                              { href: e.href, className: C, children: e.label },
                              e.label
                            )
                      ),
                    }),
                    (0, s.jsxs)(d.P.div, {
                      layout: !0,
                      className: "hidden md:flex items-center gap-2 shrink-0",
                      children: [
                        (0, s.jsx)(w, {
                          label: j("nav.socials.label"),
                          icon: (0, s.jsx)(h.A, {
                            className: "w-4 h-4 shrink-0",
                          }),
                          items: _,
                          iconOnlyBelowLg: !0,
                        }),
                        (0, s.jsx)(w, {
                          label: j("nav.token.label"),
                          icon: (0, s.jsx)(b.r, {
                            src: "/brand/mandate-mark.png",
                            alt: "$MANDATE",
                            className: "rounded-full",
                          }),
                          items: T,
                          iconOnlyBelowLg: !0,
                        }),
                        (0, s.jsxs)("a", {
                          href: N.Y7,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: (0, y.cn)(
                            "inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-150",
                            "bg-[var(--glass-shell)] hover:bg-[var(--glass-content)] active:scale-[0.97]",
                            "h-10 px-3 rounded-2xl text-text-secondary hover:text-text-primary border border-[var(--border-subtle)]"
                          ),
                          children: [
                            (0, s.jsx)(f.Bo, { className: "w-4 h-4 shrink-0" }),
                            (0, s.jsx)("span", {
                              className: "hidden lg:inline",
                              children: j("nav.docs"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("button", {
                      type: "button",
                      className:
                        "md:hidden p-3 rounded-2xl text-text-secondary hover:text-text-primary hover:bg-[var(--glass-plate)] transition-colors",
                      onClick: () => l(!a),
                      "aria-expanded": a,
                      "aria-label": "Toggle menu",
                      children: a
                        ? (0, s.jsx)(u.A, { className: "w-5 h-5" })
                        : (0, s.jsx)(g.A, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                (0, s.jsx)(x.N, {
                  initial: !1,
                  children:
                    a &&
                    (0, s.jsx)(
                      d.P.div,
                      {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        exit: { opacity: 0, height: 0 },
                        transition: { duration: 0.25 },
                        className:
                          "md:hidden overflow-hidden border-t border-[var(--border-subtle)] bg-[rgba(5,8,14,0.92)]",
                        children: (0, s.jsxs)("div", {
                          className: "px-4 pb-4 flex flex-col gap-0.5",
                          children: [
                            k.map((e) =>
                              (0, s.jsx)(
                                "a",
                                {
                                  href: (e.href.startsWith("/"), e.href),
                                  className:
                                    "text-sm text-text-secondary hover:text-text-primary py-3 px-3 rounded-2xl hover:bg-[var(--glass-plate)]",
                                  onClick: () => l(!1),
                                  children: e.label,
                                },
                                e.label
                              )
                            ),
                            (0, s.jsxs)("div", {
                              className:
                                "flex flex-col gap-2 pt-3 mt-2 border-t border-[var(--border-subtle)]",
                              children: [
                                (0, s.jsx)("p", {
                                  className:
                                    "px-1 pt-1 text-[10px] uppercase tracking-[0.16em] text-text-tertiary",
                                  children: j("nav.socials.label"),
                                }),
                                _.map((e) =>
                                  (0, s.jsxs)(
                                    "a",
                                    {
                                      href: e.href,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary py-2.5 px-3 rounded-2xl hover:bg-[var(--glass-plate)]",
                                      onClick: () => l(!1),
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "flex h-5 w-5 items-center justify-center",
                                          children: e.icon,
                                        }),
                                        e.label,
                                      ],
                                    },
                                    e.label
                                  )
                                ),
                                (0, s.jsx)("p", {
                                  className:
                                    "px-1 pt-1 text-[10px] uppercase tracking-[0.16em] text-text-tertiary",
                                  children: j("nav.token.label"),
                                }),
                                T.map((e) =>
                                  e.href
                                    ? (0, s.jsxs)(
                                        "a",
                                        {
                                          href: e.href,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary py-2.5 px-3 rounded-2xl hover:bg-[var(--glass-plate)]",
                                          onClick: () => l(!1),
                                          children: [
                                            (0, s.jsx)("span", {
                                              className:
                                                "flex h-5 w-5 items-center justify-center",
                                              children: e.icon,
                                            }),
                                            e.label,
                                          ],
                                        },
                                        e.label
                                      )
                                    : (0, s.jsxs)(
                                        "button",
                                        {
                                          type: "button",
                                          className:
                                            "flex items-center gap-2.5 text-left text-sm text-text-secondary hover:text-text-primary py-2.5 px-3 rounded-2xl hover:bg-[var(--glass-plate)]",
                                          onClick: () => {
                                            I();
                                          },
                                          children: [
                                            (0, s.jsx)("span", {
                                              className:
                                                "flex h-5 w-5 items-center justify-center",
                                              children: e.icon,
                                            }),
                                            e.label,
                                          ],
                                        },
                                        e.label
                                      )
                                ),
                                (0, s.jsxs)("a", {
                                  href: N.Y7,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: (0, y.cn)(
                                    "inline-flex items-center justify-center gap-2 text-sm font-medium transition-all",
                                    "bg-[var(--glass-plate)] border border-[var(--border-default)]",
                                    "h-11 px-4 rounded-2xl w-full text-text-primary"
                                  ),
                                  onClick: () => l(!1),
                                  children: [
                                    (0, s.jsx)(f.Bo, {
                                      className: "w-4 h-4 shrink-0",
                                    }),
                                    j("nav.docs"),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      "mobile-menu"
                    ),
                }),
              ],
            }),
          }),
        });
      }
      var M = a(5681),
        L = a(6985),
        z = a(5955),
        R = a(519),
        E = a(3776);
      function W(e) {
        let { copy: t, className: a, reducedMotion: l = !1 } = e,
          n = (0, M.Ym)(),
          i = (0, r.useRef)([]);
        i.current = t.activity.map((e) => e.message);
        let c = t.activity.length,
          o =
            t.strategyCycle && t.strategyCycle.length > 0
              ? t.strategyCycle
              : [t.strategyValue],
          [m, p] = (0, r.useState)(0);
        (0, r.useEffect)(() => {
          if (l || o.length <= 1) return;
          let e = window.setInterval(() => {
            p((e) => (e + 1) % o.length);
          }, 4500);
          return () => clearInterval(e);
        }, [l, o.length]);
        let [h, u] = (0, r.useState)(() =>
            t.activity
              .slice(0, 4)
              .reverse()
              .map((e, t) => ({
                id: "seed-".concat(e.time, "-").concat(t),
                time: e.time,
                message: e.message,
              }))
          ),
          g = (0, r.useRef)(Math.min(4, c)),
          f = (0, r.useCallback)(() => {
            u((e) => {
              let t = i.current;
              if (0 === t.length) return e;
              let a = g.current % t.length;
              g.current += 1;
              let s = t[a];
              return [
                {
                  id: "live-"
                    .concat(Date.now(), "-")
                    .concat(Math.random().toString(36).slice(2, 9)),
                  time: (function (e) {
                    try {
                      return new Date().toLocaleTimeString(e, {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: !1,
                      });
                    } catch (e) {
                      return new Date().toLocaleTimeString(void 0, {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: !1,
                      });
                    }
                  })(n),
                  message: s,
                },
                ...e,
              ].slice(0, 4);
            });
          }, [n]);
        (0, r.useEffect)(() => {
          if (l || 0 === c) return;
          let e = window.setInterval(f, 2300);
          return () => clearInterval(e);
        }, [l, c, f]),
          (0, r.useEffect)(() => {
            l &&
              u(
                t.activity
                  .slice(0, 4)
                  .reverse()
                  .map((e, t) => ({
                    id: "seed-".concat(e.time, "-").concat(t),
                    time: e.time,
                    message: e.message,
                  }))
              );
          }, [l, t.activity]);
        let b = t.activity.slice(0, 4).reverse();
        return (0, s.jsxs)("div", {
          className: (0, y.cn)(
            "liquid-glass-card relative rounded-[2rem] p-5 sm:p-6",
            a
          ),
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute -inset-px rounded-[2rem] bg-gradient-to-br from-accent-400/[0.14] via-transparent to-success/[0.08] opacity-90 pointer-events-none",
              "aria-hidden": !0,
            }),
            (0, s.jsxs)("div", {
              className: "relative z-10",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-start justify-between gap-3",
                  children: [
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-caption text-text-tertiary",
                          children: t.vaultTitle,
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-text-primary tabular-nums",
                          children: t.balanceDisplay,
                        }),
                        (0, s.jsx)("p", {
                          className: "mt-1 text-caption text-text-tertiary",
                          children: t.balanceLabel,
                        }),
                      ],
                    }),
                    (0, s.jsx)(E.m, {
                      label: t.live,
                      reducedMotion: l,
                      animated: !0,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 sm:px-3.5 sm:py-3",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-caption text-text-tertiary",
                      children: t.strategyLabel,
                    }),
                    (0, s.jsx)("div", {
                      className: (0, y.cn)(
                        "relative mt-1 overflow-hidden",
                        !l && o.length > 1 && "min-h-[2.625rem]"
                      ),
                      children:
                        l || o.length <= 1
                          ? (0, s.jsx)("p", {
                              className:
                                "text-sm font-medium leading-snug text-text-primary",
                              children: o[0],
                            })
                          : (0, s.jsx)(x.N, {
                              mode: "wait",
                              initial: !1,
                              children: (0, s.jsx)(
                                d.P.p,
                                {
                                  layout: !0,
                                  initial: { opacity: 0, y: 8 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -6 },
                                  transition: {
                                    duration: 0.32,
                                    ease: [0.22, 1, 0.36, 1],
                                  },
                                  className:
                                    "text-sm font-medium leading-snug text-text-primary",
                                  children: o[m],
                                },
                                o[m]
                              ),
                            }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mt-4",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-caption text-text-tertiary mb-2",
                      children: t.activityTitle,
                    }),
                    (0, s.jsx)("ul", {
                      className:
                        "h-[7.5rem] space-y-2 overflow-hidden font-mono text-[0.7rem] leading-relaxed",
                      children: l
                        ? b.map((e, t) =>
                            (0, s.jsxs)(
                              "li",
                              {
                                className:
                                  "flex gap-2 text-text-secondary border-l-2 border-accent-500/25 pl-2.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "shrink-0 text-text-tertiary tabular-nums",
                                    children: e.time,
                                  }),
                                  (0, s.jsx)("span", { children: e.message }),
                                ],
                              },
                              "".concat(e.time, "-static-").concat(t)
                            )
                          )
                        : h.map((e) =>
                            (0, s.jsxs)(
                              d.P.li,
                              {
                                layout: !0,
                                initial: { opacity: 0, y: -10 },
                                animate: { opacity: 1, y: 0 },
                                transition: {
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 28,
                                },
                                className:
                                  "flex gap-2 text-text-secondary border-l-2 border-accent-500/30 pl-2.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "shrink-0 text-accent-400/90 tabular-nums",
                                    children: e.time,
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "min-w-0",
                                    children: e.message,
                                  }),
                                ],
                              },
                              e.id
                            )
                          ),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mt-4 flex flex-wrap gap-1.5",
                  children: [
                    (0, s.jsx)("p", {
                      className: "w-full text-caption text-text-tertiary",
                      children: t.guardrailsTitle,
                    }),
                    t.guardrails.map((e) =>
                      (0, s.jsx)(
                        "span",
                        {
                          className:
                            "rounded-lg border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[0.7rem] text-text-secondary",
                          children: e,
                        },
                        e
                      )
                    ),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var B = a(292);
      let O = ["oney.", "andate."];
      function q(e) {
        let { onJoinWaitlist: t } = e,
          a = (0, r.useRef)(null),
          l = (0, L.W)(a, {
            once: !0,
            amount: 0.24,
            margin: "0px 0px -14% 0px",
          }),
          n = (0, o.c)("landing"),
          i = (0, M.ot)(),
          c = "en" === (0, M.Ym)(),
          x = (0, z.I)(),
          m = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 105,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 55,
              s =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 3300,
              [l, n] = (0, r.useState)(O[0]),
              [i, c] = (0, r.useState)(0);
            return (
              (0, r.useEffect)(() => {
                let r, l, o;
                if (!e) {
                  n(O[0]), c(0);
                  return;
                }
                let d = O[i],
                  x = O[(i + 1) % O.length];
                return (
                  (r = setTimeout(() => {
                    let e = d.length;
                    l = setInterval(() => {
                      if (((e -= 1), n(d.slice(0, Math.max(0, e))), e <= 0)) {
                        if (
                          (l && clearInterval(l),
                          (l = void 0),
                          n(x.slice(0, 1)),
                          x.length <= 1)
                        )
                          return void c((e) => (e + 1) % O.length);
                        let e = 1;
                        o = setInterval(() => {
                          (e += 1),
                            n(x.slice(0, e)),
                            e >= x.length &&
                              (o && clearInterval(o),
                              (o = void 0),
                              c((e) => (e + 1) % O.length));
                        }, t);
                      }
                    }, a);
                  }, s)),
                  () => {
                    clearTimeout(r),
                      l && clearInterval(l),
                      o && clearInterval(o);
                  }
                );
              }, [i, e, t, a, s]),
              l
            );
          })(!x),
          p = O[0],
          h = {
            vaultTitle: n("features.commandCenter.vaultTitle"),
            balanceLabel: n("features.commandCenter.balanceLabel"),
            balanceDisplay: "$24,680",
            live: n("features.commandCenter.live"),
            strategyLabel: n("features.commandCenter.strategyLabel"),
            strategyValue: n("features.commandCenter.strategyValue"),
            strategyCycle: i.landing.features.commandCenter.strategyCycle,
            activityTitle: n("features.commandCenter.activityTitle"),
            activity: i.landing.features.commandCenter.activity,
            guardrailsTitle: n("features.commandCenter.guardrailsTitle"),
            guardrails: i.landing.features.commandCenter.guardrails,
          };
        return (0, s.jsxs)("section", {
          className:
            "relative isolate min-h-[88svh] flex flex-col justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32",
          children: [
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute left-1/2 top-[18%] h-[min(70vw,420px)] w-[min(95vw,520px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.16),rgba(6,182,212,0.04)_45%,transparent_68%)] blur-3xl opacity-90 sm:left-[28%] sm:top-[22%] sm:translate-x-0 lg:left-[12%]",
            }),
            (0, s.jsx)("div", {
              ref: a,
              className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full",
              children: (0, s.jsxs)("div", {
                className:
                  "grid gap-10 lg:gap-12 xl:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "hero-copy relative z-0 min-w-0 text-center lg:text-left",
                    children: [
                      (0, s.jsx)(d.P.h1, {
                        initial: {
                          opacity: 0,
                          y: 30,
                          filter: x ? "blur(0px)" : "blur(10px)",
                        },
                        animate: l
                          ? { opacity: 1, y: 0, filter: "blur(0px)" }
                          : {},
                        transition: { duration: B.xi, delay: 0.06, ease: B.Nd },
                        className:
                          "text-[2rem] min-[360px]:text-[2.35rem] min-[400px]:text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[3.35rem] xl:text-6xl 2xl:text-7xl font-bold tracking-[-0.02em] leading-[1.06] sm:leading-[1.05]",
                        children: c
                          ? (0, s.jsxs)("span", {
                              className:
                                "inline-flex max-w-full flex-wrap items-baseline justify-center gap-x-[0.24em] lg:justify-start",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "inline-block shrink-0",
                                  children: n("hero.titleStatic"),
                                }),
                                (0, s.jsxs)("span", {
                                  className:
                                    "inline-flex min-w-0 max-w-full items-baseline",
                                  children: [
                                    (0, s.jsx)(v.Yc, {
                                      size: 176,
                                      className:
                                        "inline-block h-[1.786cap] w-auto relative top-[0.393cap] -mr-[0.06em] shrink-0 drop-shadow-[0_0_22px_rgba(6,182,212,0.16)]",
                                    }),
                                    (0, s.jsxs)("span", {
                                      className:
                                        "relative inline-grid min-w-0 items-baseline justify-items-start",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "invisible col-start-1 row-start-1 whitespace-pre font-bold pointer-events-none select-none",
                                          "aria-hidden": !0,
                                          children: O[1],
                                        }),
                                        (0, s.jsxs)("span", {
                                          className:
                                            "col-start-1 row-start-1 inline-flex items-baseline font-bold text-text-primary",
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "whitespace-pre",
                                              children: x ? p : m,
                                            }),
                                            !x &&
                                              (0, s.jsx)(d.P.span, {
                                                "aria-hidden": !0,
                                                className:
                                                  "ml-[2px] inline-block w-[0.08em] min-h-[0.85em] translate-y-[0.06em] bg-accent-400/50",
                                                animate: {
                                                  opacity: [1, 0.15, 1],
                                                },
                                                transition: {
                                                  duration: 0.9,
                                                  repeat: 1 / 0,
                                                  ease: "easeInOut",
                                                },
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : n("hero.title"),
                      }),
                      (0, s.jsx)(d.P.p, {
                        initial: { opacity: 0, y: 20 },
                        animate: l ? { opacity: 1, y: 0 } : {},
                        transition: { duration: B.O, delay: 0.2, ease: B.Nd },
                        className:
                          "text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient mt-3 max-sm:leading-snug",
                        children: n(
                          c ? "hero.subtitle" : "hero.titleHighlight"
                        ),
                      }),
                      (0, s.jsx)(d.P.p, {
                        initial: { opacity: 0, y: 24 },
                        animate: l ? { opacity: 1, y: 0 } : {},
                        transition: { duration: B.O, delay: 0.3, ease: B.Nd },
                        className:
                          "text-lg sm:text-xl text-text-secondary mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed",
                        children: n("hero.description"),
                      }),
                      (0, s.jsxs)(d.P.div, {
                        initial: { opacity: 0, y: 24 },
                        animate: l ? { opacity: 1, y: 0 } : {},
                        transition: { duration: B.O, delay: 0.4, ease: B.Nd },
                        className:
                          "flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-9",
                        children: [
                          (0, s.jsx)(B.HS, {
                            children: (0, s.jsxs)("a", {
                              href: N.om,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: (0, y.cn)(
                                "inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-200",
                                "bg-white text-text-inverse hover:bg-accent-100 active:scale-[0.97]",
                                "h-12 px-6 sm:h-14 sm:px-8 text-base rounded-2xl",
                                "ring-1 ring-accent-400/40"
                              ),
                              children: [
                                (0, s.jsx)(b.r, {
                                  src: "/brand/mandate-mark.png",
                                  alt: "",
                                  className: "h-5 w-5 rounded-full",
                                }),
                                n("hero.ctaBuy"),
                              ],
                            }),
                          }),
                          (0, s.jsxs)("a", {
                            href: "#how-it-works",
                            className:
                              "inline-flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-text-tertiary hover:text-text-primary transition-colors w-full sm:w-auto lg:w-auto py-2",
                            children: [
                              n("hero.ctaTertiary"),
                              (0, s.jsx)(j.A, {
                                className: "w-4 h-4 -rotate-90 opacity-70",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(d.P.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.9, duration: B.xi, ease: B.Nd },
                        className: "mt-8 flex justify-center lg:justify-start",
                        children: (0, s.jsx)(d.P.a, {
                          href: "#intro",
                          "aria-label": n("a11y.scrollToIntro"),
                          animate: x ? void 0 : { y: [0, 5, 0] },
                          transition: {
                            duration: 2.1,
                            repeat: x ? 0 : 1 / 0,
                            ease: B.Nd,
                          },
                          className:
                            "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-text-tertiary transition-colors hover:border-accent-400/30 hover:text-accent-300",
                          children: (0, s.jsx)(R.A, {
                            className: "h-4 w-4 rotate-90",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    "data-robot-anchor": "hero",
                    className:
                      "robot-projected relative z-10 max-w-md mx-auto w-full min-w-0 lg:max-w-none",
                    children: (0, s.jsx)(W, { copy: h, reducedMotion: !!x }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function G() {
        let e = (0, o.c)("landing"),
          t = e.raw("scrollReveal.highlights");
        return (0, s.jsx)("section", {
          id: "intro",
          className: "relative py-8 sm:py-12 lg:py-16",
          children: (0, s.jsx)("div", {
            className: "max-w-5xl mx-auto px-4 sm:px-6",
            children: (0, s.jsx)(B.Ig, {
              text: e("scrollReveal.text"),
              highlightWords: t,
              className:
                "py-8 sm:py-10 lg:py-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight tracking-tight",
            }),
          }),
        });
      }
      var V = a(2907);
      function F() {
        let e = (0, o.c)("landing");
        return (0, s.jsxs)("section", {
          id: "overview",
          className: "relative py-12 sm:py-14 lg:py-[4.5rem] overflow-hidden",
          children: [
            (0, s.jsx)(B.PT, {
              speed: 0.1,
              className: "pointer-events-none absolute inset-0 opacity-50",
              children: (0, s.jsx)("div", {
                className:
                  "absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-500/[0.06] blur-3xl",
              }),
            }),
            (0, s.jsx)("div", {
              className: "relative max-w-7xl mx-auto px-4 sm:px-6",
              children: (0, s.jsxs)("div", {
                className:
                  "grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12 items-center",
                children: [
                  (0, s.jsx)(V.X, {
                    eyebrow: e("whyMandate.eyebrow"),
                    title: e("whyMandate.title"),
                    subtitle: e("whyMandate.subtitle"),
                    align: "left",
                    variant: "stagger",
                    className: "min-w-0",
                    titleClassName: "r3d-statement-src lg:text-5xl",
                    subtitleClassName: "max-w-xl",
                    staggerDelay: 0.12,
                    viewport: { amount: 0.18 },
                  }),
                  (0, s.jsx)("div", {
                    children: (0, s.jsxs)("div", {
                      "data-robot-anchor": "overview",
                      className:
                        "liquid-glass-card robot-projected rounded-[2rem] border border-white/[0.10] p-6 sm:p-8 security-grid-bg",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-xs font-mono text-text-tertiary uppercase tracking-wider mb-4",
                          children: "choose → automate → relax",
                        }),
                        (0, s.jsx)(B.fv, {
                          className: "flex flex-col gap-4",
                          staggerDelay: 0.1,
                          children: [
                            "howItWorks.chooseStrategy",
                            "howItWorks.setRiskProfile",
                            "howItWorks.launchRelax",
                          ].map((t, a) =>
                            (0, s.jsx)(
                              B.Tc,
                              {
                                noFade: !0,
                                children: (0, s.jsxs)("div", {
                                  className:
                                    "liquid-glass-inner flex gap-4 items-start rounded-2xl p-4",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "font-mono text-xs text-accent-400 tabular-nums w-6",
                                      children: String(a + 1).padStart(2, "0"),
                                    }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("p", {
                                          className:
                                            "font-semibold text-text-primary text-sm",
                                          children: e("".concat(t, ".title")),
                                        }),
                                        (0, s.jsx)("p", {
                                          className:
                                            "text-text-tertiary text-xs sm:text-sm mt-1 leading-relaxed",
                                          children: e(
                                            "".concat(t, ".description")
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var X = a(4489),
        Z = a(8027),
        H = a(1289);
      function Y() {
        let e = (0, o.c)("landing"),
          t = [0, 1, 2].map((t) => ({
            title: e("problem.cards.".concat(t, ".title")),
            body: e("problem.cards.".concat(t, ".body")),
          })),
          a = [D.A, X.A, Z.A];
        return (0, s.jsx)("section", {
          id: "problem",
          className: "py-10 sm:py-14 lg:py-20",
          children: (0, s.jsxs)("div", {
            className: "relative mx-auto max-w-4xl px-4 text-center sm:px-6",
            children: [
              (0, s.jsx)(V.X, {
                eyebrow: e("problem.eyebrow"),
                title: e("problem.title"),
                subtitle: e("problem.subtitle"),
                align: "center",
                variant: "fade",
                className: "mb-8 sm:mb-10",
                titleClassName:
                  "r3d-statement-src text-3xl sm:text-4xl lg:text-[2.75rem] max-w-2xl mx-auto leading-tight",
                subtitleClassName: "mt-3 text-base sm:text-lg max-w-lg mx-auto",
                softZoom: !0,
                viewport: { amount: 0.24 },
              }),
              (0, s.jsx)(B.fv, {
                className:
                  "grid items-stretch gap-4 text-left md:grid-cols-3 md:gap-5",
                staggerDelay: 0.07,
                viewport: { amount: 0.2 },
                children: t.map((e, t) => {
                  let r = a[t];
                  return (0, s.jsx)(
                    B.Tc,
                    {
                      className: "h-full",
                      noFade: !0,
                      children: (0, s.jsxs)(H.j, {
                        radius: "rounded-2xl",
                        padded: !1,
                        className:
                          "group relative flex h-full flex-col overflow-hidden p-5 sm:p-6",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(34,211,238,0.10),transparent_55%)] opacity-90 transition-opacity duration-300 group-hover:opacity-100",
                            "aria-hidden": !0,
                          }),
                          (0, s.jsx)("div", {
                            "aria-hidden": !0,
                            className:
                              "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/25 to-transparent sm:inset-x-6",
                          }),
                          (0, s.jsxs)("div", {
                            className: "relative flex flex-1 flex-col",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-500/[0.10] text-accent-300 ring-1 ring-inset ring-accent-400/15",
                                children: (0, s.jsx)(r, {
                                  className: "h-[1.125rem] w-[1.125rem]",
                                  "aria-hidden": !0,
                                }),
                              }),
                              (0, s.jsx)("h3", {
                                className:
                                  "text-base font-semibold leading-snug tracking-tight text-text-primary text-balance",
                                children: e.title,
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "mt-2 flex-1 text-sm leading-relaxed text-text-secondary",
                                children: e.body,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.title
                  );
                }),
              }),
              (0, s.jsx)(B.nD, {
                delay: 0.08,
                className: "mt-8 sm:mt-10",
                viewport: { amount: 0.2 },
                children: (0, s.jsx)("p", {
                  className:
                    "mx-auto max-w-xl whitespace-pre-line text-sm sm:text-base font-medium leading-relaxed text-accent-400 text-balance",
                  children: e("problem.resolution"),
                }),
              }),
            ],
          }),
        });
      }
      var J = a(2628);
      let K = {
          shell: "glass-shell",
          plate: "glass-plate",
          content: "glass-content",
        },
        U = {
          accent: "glow-accent",
          success: "glow-success",
          error: "glow-error",
          none: "",
        },
        $ = (0, r.forwardRef)((e, t) => {
          let {
            className: a,
            level: r = "plate",
            glow: l = "none",
            border: n = !0,
            ...i
          } = e;
          return (0, s.jsx)("div", {
            ref: t,
            className: (0, y.cn)(
              "rounded-2xl",
              K[r],
              U[l],
              n && "glass-border",
              a
            ),
            ...i,
          });
        });
      $.displayName = "GlassCard";
      let Q = (0, l.default)(
        () =>
          a
            .e(31)
            .then(a.bind(a, 9031))
            .then((e) => e.BenefitsAgentChat),
        {
          loadableGenerated: { webpack: () => [9031] },
          loading: () =>
            (0, s.jsx)("div", {
              className: "min-h-[360px] rounded-[2rem]",
              "aria-hidden": !0,
            }),
        }
      );
      function ee() {
        let e = (0, o.c)("landing"),
          t = (0, z.I)(),
          a = (0, M.ot)().landing.features.benefitsChat.thread,
          r = [
            {
              title: e("features.commandCenter.pillars.0.title"),
              description: e("features.commandCenter.pillars.0.description"),
              icon: J.A,
            },
            {
              title: e("features.commandCenter.pillars.1.title"),
              description: e("features.commandCenter.pillars.1.description"),
              icon: I.A,
            },
            {
              title: e("features.commandCenter.pillars.2.title"),
              description: e("features.commandCenter.pillars.2.description"),
              icon: C.A,
            },
          ];
        return (0, s.jsxs)("section", {
          id: "features",
          className: "py-12 sm:py-16 lg:py-[5.5rem] relative overflow-hidden",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute inset-x-0 top-1/3 h-[520px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),rgba(16,185,129,0.04)_38%,transparent_70%)] blur-3xl pointer-events-none",
              "aria-hidden": !0,
            }),
            (0, s.jsxs)("div", {
              className: "relative max-w-7xl mx-auto px-4 sm:px-6",
              children: [
                (0, s.jsx)(V.X, {
                  eyebrow: e("features.eyebrow"),
                  title: e("features.title"),
                  subtitle: e("features.subtitle"),
                  align: "center",
                  variant: "fade",
                  className: "mb-9 lg:mb-12",
                  titleClassName: "text-balance",
                  softZoom: !0,
                  viewport: { amount: 0.2 },
                }),
                (0, s.jsx)(B.nD, {
                  delay: 0.06,
                  softZoom: !0,
                  viewport: { amount: 0.15 },
                  children: (0, s.jsxs)($, {
                    level: "content",
                    className:
                      "rounded-[2rem] p-5 sm:p-6 lg:p-10 relative overflow-hidden bg-bg-elevated/70",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "absolute -right-24 -top-28 h-80 w-80 rounded-full bg-accent-500/[0.10] blur-3xl pointer-events-none",
                        "aria-hidden": !0,
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-success/[0.08] blur-3xl pointer-events-none",
                        "aria-hidden": !0,
                      }),
                      (0, s.jsxs)(B.fv, {
                        className:
                          "relative z-10 grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-start lg:gap-8",
                        staggerDelay: 0.1,
                        viewport: { amount: 0.14 },
                        children: [
                          (0, s.jsxs)(B.Tc, {
                            className:
                              "order-1 lg:col-span-5 lg:row-start-1 flex flex-col gap-0 min-w-0",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight text-text-primary",
                                children: e("features.commandCenter.kicker"),
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "mt-4 text-base text-text-secondary leading-relaxed max-w-xl lg:max-w-none",
                                children: e("features.commandCenter.body"),
                              }),
                            ],
                          }),
                          (0, s.jsxs)(B.Tc, {
                            noFade: !0,
                            "data-robot-anchor": "features",
                            className:
                              "robot-projected order-2 lg:col-span-7 lg:row-start-1 lg:row-span-2 relative flex flex-col gap-3 sm:gap-4 min-w-0",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "pointer-events-none absolute inset-x-4 -top-4 h-20 rounded-full bg-accent-400/10 blur-2xl max-lg:hidden",
                                "aria-hidden": !0,
                              }),
                              (0, s.jsx)(Q, { thread: a, reducedMotion: !!t }),
                              (0, s.jsxs)("div", {
                                className:
                                  "liquid-glass-inner rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 flex flex-col gap-3",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-caption text-text-tertiary",
                                    children: e(
                                      "features.benefitsChat.riskCaption"
                                    ),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex gap-2 min-w-0",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "min-w-0 flex-1 rounded-lg border border-success/15 bg-success/[0.05] px-3 py-2",
                                        children: [
                                          (0, s.jsx)("p", {
                                            className:
                                              "text-[0.65rem] text-text-tertiary leading-tight",
                                            children: e(
                                              "features.benefitsChat.tpLabel"
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "mt-0.5 font-mono text-sm font-semibold text-success tabular-nums",
                                            children: e(
                                              "features.benefitsChat.tpValue"
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "min-w-0 flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2",
                                        children: [
                                          (0, s.jsx)("p", {
                                            className:
                                              "text-[0.65rem] text-text-tertiary leading-tight",
                                            children: e(
                                              "features.benefitsChat.slLabel"
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "mt-0.5 font-mono text-sm font-semibold text-text-primary tabular-nums",
                                            children: e(
                                              "features.benefitsChat.slValue"
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)(B.Tc, {
                            className:
                              "order-3 lg:col-span-5 lg:row-start-2 flex flex-col gap-0 min-w-0",
                            children: (0, s.jsx)(B.fv, {
                              className: "mt-1 lg:mt-2 space-y-3 sm:space-y-4",
                              staggerDelay: 0.08,
                              children: r.map((e) => {
                                let { title: t, description: a, icon: r } = e;
                                return (0, s.jsxs)(
                                  B.Tc,
                                  {
                                    noFade: !0,
                                    className:
                                      "liquid-glass-inner flex gap-4 rounded-2xl p-4 sm:p-5",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08]",
                                        children: (0, s.jsx)(r, {
                                          className:
                                            "h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem] text-accent-300",
                                        }),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: "min-w-0",
                                        children: [
                                          (0, s.jsx)("h4", {
                                            className:
                                              "text-base sm:text-[1.05rem] font-semibold text-text-primary leading-snug",
                                            children: t,
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "mt-1.5 text-sm leading-relaxed text-text-tertiary",
                                            children: a,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
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
        });
      }
      function et() {
        let e = (0, o.c)("landing"),
          t = [
            {
              icon: k.A,
              title: e("howItWorks.step1Title"),
              description: e("howItWorks.step1Description"),
            },
            {
              icon: C.A,
              title: e("howItWorks.step2Title"),
              description: e("howItWorks.step2Description"),
            },
            {
              icon: I.A,
              title: e("howItWorks.step3Title"),
              description: e("howItWorks.step3Description"),
            },
          ];
        return (0, s.jsx)("section", {
          id: "how-it-works",
          className: "py-10 sm:py-14 lg:py-20 relative",
          children: (0, s.jsx)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6",
            children: (0, s.jsxs)("div", {
              className:
                "liquid-glass-card rounded-[2rem] p-6 sm:p-8 lg:p-10 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-10 lg:gap-12 items-start",
              children: [
                (0, s.jsx)("div", {
                  className: "lg:sticky lg:top-28 text-center lg:text-left",
                  children: (0, s.jsx)(V.X, {
                    eyebrow: e("nav.howItWorks"),
                    title: e("howItWorks.sectionTitle"),
                    subtitle: e("howItWorks.sectionSubtitle"),
                    align: "left",
                    variant: "stagger",
                    titleClassName: "lg:text-[2.75rem]",
                    subtitleClassName: "mt-4 max-w-md lg:max-w-none",
                    staggerDelay: 0.12,
                    viewport: { amount: 0.18, margin: "0px 0px -8% 0px" },
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "hidden xl:block absolute top-12 left-[8%] right-[8%] h-px",
                      children: (0, s.jsx)("div", {
                        className:
                          "w-full h-full bg-gradient-to-r from-transparent via-accent-500/30 to-transparent",
                      }),
                    }),
                    (0, s.jsx)(B.fv, {
                      className:
                        "grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-5 sm:gap-6 xl:gap-8",
                      staggerDelay: 0.12,
                      viewport: { amount: 0.18, margin: "0px 0px -8% 0px" },
                      children: t.map((e, t) =>
                        (0, s.jsxs)(
                          B.Tc,
                          {
                            className: "text-center xl:text-left",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "relative mx-auto xl:mx-0 w-20 h-20 sm:w-24 sm:h-24 mb-6",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "absolute inset-0 rounded-full border border-accent-500/20 pulse-ring",
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "absolute inset-0 rounded-full border border-accent-500/10 pulse-ring-delayed",
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "absolute inset-0 rounded-full glass-plate flex items-center justify-center glow-accent shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
                                    children: (0, s.jsx)(e.icon, {
                                      className:
                                        "w-8 h-8 sm:w-9 sm:h-9 text-accent-400",
                                    }),
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "absolute -top-1 -right-1 w-8 h-8 rounded-full bg-accent-500 text-text-inverse text-xs font-bold flex items-center justify-center shadow-lg border-2 border-bg-deepest",
                                    children: t + 1,
                                  }),
                                ],
                              }),
                              (0, s.jsx)("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: e.title,
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-sm text-text-secondary max-w-xs mx-auto xl:mx-0 leading-relaxed",
                                children: e.description,
                              }),
                            ],
                          },
                          e.title
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var ea = a(1201);
      let es = {
        live: {
          label: "live",
          pill: "bg-emerald-500/15 text-emerald-300 border-emerald-500/50",
          dot: "bg-emerald-400",
          ring: "ring-emerald-500/40",
          iconColor: "text-emerald-300",
          markerBg: "from-emerald-500/25 to-emerald-500/5",
        },
        next: {
          label: "next",
          pill: "bg-accent-500/15 text-accent-300 border-accent-500/50",
          dot: "bg-accent-400",
          ring: "ring-accent-500/40",
          iconColor: "text-accent-300",
          markerBg: "from-accent-500/25 to-accent-500/5",
        },
        planned: {
          label: "planned",
          pill: "bg-indigo-500/15 text-indigo-300 border-indigo-500/50",
          dot: "bg-indigo-400",
          ring: "ring-indigo-500/40",
          iconColor: "text-indigo-300",
          markerBg: "from-indigo-500/25 to-indigo-500/5",
        },
        vision: {
          label: "vision",
          pill: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/50",
          dot: "bg-fuchsia-400",
          ring: "ring-fuchsia-500/40",
          iconColor: "text-fuchsia-300",
          markerBg: "from-fuchsia-500/25 to-fuchsia-500/5",
        },
        future: {
          label: "future",
          pill: "bg-rose-500/15 text-rose-300 border-rose-500/50",
          dot: "bg-rose-400",
          ring: "ring-rose-500/40",
          iconColor: "text-rose-300",
          markerBg: "from-rose-500/25 to-rose-500/5",
        },
      };
      function er() {
        let e = (0, o.c)("landing"),
          t = [
            {
              key: "phase1",
              icon: _.A,
              status: "live",
              when: e("roadmap.phase1.when"),
              title: e("roadmap.phase1.title"),
              subtitle: e("roadmap.phase1.subtitle"),
              milestones: [
                { text: e("roadmap.phase1.m1") },
                { text: e("roadmap.phase1.m2") },
                { text: e("roadmap.phase1.m3") },
                { text: e("roadmap.phase1.m4") },
                { text: e("roadmap.phase1.m5"), href: N.om },
              ],
            },
            {
              key: "phase2",
              icon: T.A,
              status: "next",
              when: e("roadmap.phase2.when"),
              title: e("roadmap.phase2.title"),
              subtitle: e("roadmap.phase2.subtitle"),
              milestones: [
                { text: e("roadmap.phase2.m1") },
                { text: e("roadmap.phase2.m2"), sub: !0 },
                { text: e("roadmap.phase2.m3"), sub: !0 },
                { text: e("roadmap.phase2.m4"), sub: !0 },
                { text: e("roadmap.phase2.m5"), sub: !0 },
                { text: e("roadmap.phase2.m6") },
                { text: e("roadmap.phase2.m7") },
                { text: e("roadmap.phase2.m8") },
                { text: e("roadmap.phase2.m9") },
              ],
            },
            {
              key: "phase3",
              icon: D.A,
              status: "planned",
              when: e("roadmap.phase3.when"),
              title: e("roadmap.phase3.title"),
              subtitle: e("roadmap.phase3.subtitle"),
              milestones: [
                { text: e("roadmap.phase3.m1") },
                { text: e("roadmap.phase3.m2") },
                { text: e("roadmap.phase3.m3") },
              ],
            },
            {
              key: "phase4",
              icon: A.A,
              status: "vision",
              when: e("roadmap.phase4.when"),
              title: e("roadmap.phase4.title"),
              subtitle: e("roadmap.phase4.subtitle"),
              milestones: [
                { text: e("roadmap.phase4.m1") },
                { text: e("roadmap.phase4.m2") },
                { text: e("roadmap.phase4.m3") },
              ],
            },
            {
              key: "phase5",
              icon: S.A,
              status: "future",
              when: e("roadmap.phase5.when"),
              title: e("roadmap.phase5.title"),
              subtitle: e("roadmap.phase5.subtitle"),
              milestones: [
                { text: e("roadmap.phase5.m1") },
                { text: e("roadmap.phase5.m2") },
                { text: e("roadmap.phase5.m3") },
              ],
            },
          ],
          a = (0, z.I)(),
          r = t.filter((e) => "live" === e.status).length,
          l = t.length,
          n = t.reduce((e, t) => e + t.milestones.length, 0);
        return (0, s.jsx)("section", {
          id: "roadmap",
          className: "py-12 sm:py-16 lg:py-24 relative",
          children: (0, s.jsx)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6",
            children: (0, s.jsxs)("div", {
              className: "liquid-glass-card rounded-[2rem] p-6 sm:p-10 lg:p-14",
              children: [
                (0, s.jsx)(V.X, {
                  eyebrow: e("nav.roadmap"),
                  title: e("roadmap.sectionTitle"),
                  subtitle: e("roadmap.sectionSubtitle"),
                  align: "center",
                  variant: "stagger",
                  titleClassName: "lg:text-[3rem]",
                  subtitleClassName: "mt-4 max-w-2xl mx-auto",
                  staggerDelay: 0.12,
                  viewport: { amount: 0.2, margin: "0px 0px -8% 0px" },
                }),
                (0, s.jsxs)("div", {
                  className: "mt-10 sm:mt-12 max-w-3xl mx-auto",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "grid grid-cols-3 gap-3 sm:gap-4",
                      children: [
                        (0, s.jsx)(el, {
                          value: r,
                          label: e("roadmap.stats.liveNow"),
                          accent: "emerald",
                        }),
                        (0, s.jsx)(el, {
                          value: l - r,
                          label: e("roadmap.stats.upcoming"),
                          accent: "accent",
                        }),
                        (0, s.jsx)(el, {
                          value: n,
                          valueSuffix: "+",
                          label: e("roadmap.stats.totalMilestones"),
                          hint: e("roadmap.stats.andMoreComing"),
                          accent: "fuchsia",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "mt-6 relative h-2 rounded-full bg-white/5 overflow-hidden",
                      children: (0, s.jsx)(d.P.div, {
                        initial: a
                          ? { width: "".concat((r / l) * 100, "%") }
                          : { width: 0 },
                        whileInView: { width: "".concat((r / l) * 100, "%") },
                        viewport: { once: !0, amount: 0.4 },
                        transition: { duration: 1, ease: "easeOut" },
                        className:
                          "absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500/70 to-accent-500/70",
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "mt-2 flex justify-between text-[10px] uppercase tracking-wider text-text-tertiary font-semibold",
                      children: t.map((e) => {
                        let t = es[e.status];
                        return (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "flex flex-col items-center gap-1 flex-1",
                            children: [
                              (0, s.jsx)("span", {
                                className: "w-1.5 h-1.5 rounded-full ".concat(
                                  t.dot
                                ),
                              }),
                              (0, s.jsx)("span", {
                                className: "hidden sm:inline",
                                children: e.when,
                              }),
                            ],
                          },
                          e.key
                        );
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "mt-14 sm:mt-16 relative",
                  children: [
                    (0, s.jsx)("div", {
                      "aria-hidden": !0,
                      className:
                        "hidden md:block absolute left-[9rem] top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500/50 via-accent-500/40 to-rose-500/30",
                    }),
                    (0, s.jsx)("div", {
                      className: "space-y-8 sm:space-y-10",
                      children: t.map((t, r) => {
                        let l = es[t.status];
                        return (0, s.jsxs)(
                          d.P.div,
                          {
                            initial: a ? { opacity: 1 } : { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0, amount: 0.15 },
                            transition: {
                              duration: 0.5,
                              delay: 0.05 * r,
                              ease: "easeOut",
                            },
                            className:
                              "relative md:grid md:grid-cols-[9rem_1fr] md:gap-8",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "flex md:block items-center gap-3 mb-4 md:mb-0",
                                children: (0, s.jsxs)("div", {
                                  className:
                                    "md:sticky md:top-24 flex md:flex-col items-center gap-3 md:gap-2",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className:
                                        "relative w-14 h-14 rounded-2xl bg-gradient-to-br "
                                          .concat(
                                            l.markerBg,
                                            " flex items-center justify-center ring-2 "
                                          )
                                          .concat(l.ring),
                                      children: [
                                        "live" === t.status &&
                                          !a &&
                                          (0, s.jsx)("span", {
                                            className:
                                              "absolute inset-0 rounded-2xl ".concat(
                                                l.dot,
                                                " opacity-20 animate-ping"
                                              ),
                                          }),
                                        (0, s.jsx)(t.icon, {
                                          className: "relative w-6 h-6 ".concat(
                                            l.iconColor
                                          ),
                                          strokeWidth: 2,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("span", {
                                      className:
                                        "inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full border ".concat(
                                          l.pill
                                        ),
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "w-1.5 h-1.5 rounded-full ".concat(
                                              l.dot
                                            ),
                                        }),
                                        e("roadmap.status.".concat(t.status)),
                                      ],
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-[11px] text-text-tertiary tabular-nums font-medium",
                                      children: t.when,
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "liquid-glass-inner rounded-2xl p-5 sm:p-7 border border-white/5 hover:border-white/10 transition-colors",
                                children: [
                                  (0, s.jsx)("h3", {
                                    className:
                                      "text-xl sm:text-2xl font-semibold leading-tight mb-2",
                                    children: t.title,
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-sm sm:text-base text-text-secondary leading-relaxed mb-5",
                                    children: t.subtitle,
                                  }),
                                  (0, s.jsx)("ul", {
                                    className: "grid gap-2 sm:gap-2.5",
                                    children: t.milestones.map((e, t) =>
                                      (0, s.jsxs)(
                                        d.P.li,
                                        {
                                          initial: a
                                            ? { opacity: 1 }
                                            : { opacity: 0, x: -8 },
                                          whileInView: { opacity: 1, x: 0 },
                                          viewport: { once: !0, amount: 0.3 },
                                          transition: {
                                            duration: 0.35,
                                            delay: 0.04 * t,
                                          },
                                          className: (0, y.cn)(
                                            "flex items-start gap-2.5 group",
                                            "sub" in e &&
                                              e.sub &&
                                              "ml-5 sm:ml-6"
                                          ),
                                          children: [
                                            (0, s.jsx)(ea.A, {
                                              className: (0, y.cn)(
                                                "mt-0.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity",
                                                "sub" in e && e.sub
                                                  ? "w-3.5 h-3.5"
                                                  : "w-4 h-4",
                                                l.iconColor
                                              ),
                                              strokeWidth: 2,
                                            }),
                                            (0, s.jsx)("span", {
                                              className: (0, y.cn)(
                                                "leading-snug",
                                                "sub" in e && e.sub
                                                  ? "text-[13px] text-text-secondary"
                                                  : "text-sm text-text-primary"
                                              ),
                                              children:
                                                "href" in e && e.href
                                                  ? (0, s.jsx)("a", {
                                                      href: e.href,
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      className:
                                                        "underline decoration-accent-400/50 underline-offset-2 hover:text-accent-300 hover:decoration-accent-300 transition-colors",
                                                      children: e.text,
                                                    })
                                                  : e.text,
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          },
                          t.key
                        );
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className:
                    "mt-14 text-center text-xs text-text-tertiary max-w-xl mx-auto",
                  children: e("roadmap.disclaimer"),
                }),
              ],
            }),
          }),
        });
      }
      function el(e) {
        let { value: t, valueSuffix: a, label: r, hint: l, accent: n } = e;
        return (0, s.jsxs)("div", {
          className:
            "liquid-glass-inner rounded-2xl px-3 py-4 sm:px-4 sm:py-5 text-center border border-white/5",
          children: [
            (0, s.jsxs)("div", {
              className: "text-3xl sm:text-4xl font-bold tabular-nums ".concat(
                "emerald" === n
                  ? "text-emerald-300"
                  : "accent" === n
                  ? "text-accent-300"
                  : "text-fuchsia-300"
              ),
              children: [
                t,
                a &&
                  (0, s.jsx)("span", {
                    className: "text-2xl sm:text-3xl opacity-80",
                    children: a,
                  }),
              ],
            }),
            (0, s.jsx)("div", {
              className:
                "mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-text-tertiary font-semibold",
              children: r,
            }),
            l &&
              (0, s.jsx)("div", {
                className:
                  "mt-1 text-[10px] sm:text-[11px] text-text-tertiary/70 italic leading-tight",
                children: l,
              }),
          ],
        });
      }
      var en = a(9275);
      function ei() {
        let e = (0, o.c)("landing"),
          t = [
            {
              key: "kura",
              name: "Kura",
              initials: "K",
              role: e("team.kura.role"),
              bio: e("team.kura.bio"),
              photo: "/team/kura.jpg",
              avatarGradient: "from-accent-500 via-cyan-500 to-emerald-500",
              roleColor: "text-accent-300",
            },
            {
              key: "andrea",
              name: "Andrea",
              initials: "A",
              role: e("team.andrea.role"),
              bio: e("team.andrea.bio"),
              photo: "/team/andrea.jpg",
              avatarGradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
              roleColor: "text-violet-300",
            },
            {
              key: "kai",
              name: "Kai",
              initials: "K",
              role: e("team.kai.role"),
              bio: e("team.kai.bio"),
              photo: "/team/kai.jpg",
              avatarGradient: "from-amber-500 via-orange-500 to-rose-500",
              roleColor: "text-amber-300",
            },
          ];
        return (0, s.jsx)("section", {
          id: "team",
          className: "py-12 sm:py-16 lg:py-20 relative",
          children: (0, s.jsx)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6",
            children: (0, s.jsxs)("div", {
              className: "liquid-glass-card rounded-[2rem] p-6 sm:p-8 lg:p-10",
              children: [
                (0, s.jsx)(V.X, {
                  eyebrow: e("nav.team"),
                  title: e("team.sectionTitle"),
                  subtitle: e("team.sectionSubtitle"),
                  align: "center",
                  variant: "stagger",
                  titleClassName: "lg:text-[2.75rem]",
                  subtitleClassName: "mt-4 max-w-2xl mx-auto",
                  staggerDelay: 0.12,
                  viewport: { amount: 0.2, margin: "0px 0px -8% 0px" },
                }),
                (0, s.jsx)(B.fv, {
                  className: "mt-10 grid gap-5 sm:gap-6 md:grid-cols-3",
                  staggerDelay: 0.12,
                  viewport: { amount: 0.2, margin: "0px 0px -8% 0px" },
                  children: t.map((e) => {
                    var t, a;
                    return (0, s.jsx)(
                      B.Tc,
                      {
                        className: "h-full",
                        children: (0, s.jsxs)("article", {
                          className:
                            "liquid-glass-inner rounded-2xl p-6 h-full flex flex-col border border-white/[0.06] hover:border-white/[0.14] transition-colors",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-start gap-4 mb-4",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "relative w-14 h-14 overflow-hidden rounded-2xl bg-gradient-to-br ".concat(
                                      e.avatarGradient,
                                      " flex items-center justify-center shrink-0 shadow-lg"
                                    ),
                                  children: e.photo
                                    ? (0, s.jsx)(en.default, {
                                        src: e.photo,
                                        alt: e.name,
                                        fill: !0,
                                        sizes: "56px",
                                        className: "object-cover",
                                      })
                                    : (0, s.jsx)("span", {
                                        className:
                                          "text-lg font-bold text-white/95 tracking-tight",
                                        children: e.initials,
                                      }),
                                }),
                                (0, s.jsxs)("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    (0, s.jsx)("h3", {
                                      className:
                                        "text-lg font-semibold leading-tight text-text-primary",
                                      children: e.name,
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-[11px] uppercase tracking-widest font-bold mt-1 ".concat(
                                          e.roleColor
                                        ),
                                      children: e.role,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-sm text-text-secondary leading-relaxed flex-1",
                              children: e.bio,
                            }),
                            ((null == (t = e.socials) ? void 0 : t.linkedin) ||
                              (null == (a = e.socials) ? void 0 : a.x)) &&
                              (0, s.jsxs)("div", {
                                className: "mt-5 flex items-center gap-2",
                                children: [
                                  e.socials.linkedin &&
                                    (0, s.jsx)("a", {
                                      href: e.socials.linkedin,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      "aria-label": "".concat(
                                        e.name,
                                        " on LinkedIn"
                                      ),
                                      className:
                                        "inline-flex h-9 w-9 items-center justify-center rounded-xl text-text-tertiary transition-colors hover:bg-[var(--glass-shell)] hover:text-text-primary",
                                      children: (0, s.jsx)(f.US, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                  e.socials.x &&
                                    (0, s.jsx)("a", {
                                      href: e.socials.x,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      "aria-label": "".concat(e.name, " on X"),
                                      className:
                                        "inline-flex h-9 w-9 items-center justify-center rounded-xl text-text-tertiary transition-colors hover:bg-[var(--glass-shell)] hover:text-text-primary",
                                      children: (0, s.jsx)(f.MR, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                ],
                              }),
                          ],
                        }),
                      },
                      e.key
                    );
                  }),
                }),
              ],
            }),
          }),
        });
      }
      let ec = ["free", "standard"];
      function eo(e) {
        let { type: t, value: a } = e;
        return "amount" === t
          ? (0, s.jsx)("span", {
              className:
                "shrink-0 font-mono text-sm font-semibold tabular-nums text-text-primary",
              children: a,
            })
          : "included" === t
          ? (0, s.jsx)("span", {
              className:
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-success/25 bg-success/10",
              children: (0, s.jsx)(m.A, {
                className: "h-3.5 w-3.5 text-success",
                "aria-hidden": !0,
              }),
            })
          : (0, s.jsx)("span", {
              className:
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02]",
              children: (0, s.jsx)(u.A, {
                className: "h-3.5 w-3.5 text-text-tertiary",
                "aria-hidden": !0,
              }),
            });
      }
      function ed() {
        let e = (0, o.c)("landing");
        return (0, s.jsx)("section", {
          id: "pricing",
          className: "py-12 sm:py-16 lg:py-20",
          children: (0, s.jsxs)("div", {
            className: "relative max-w-4xl mx-auto px-4 sm:px-6",
            children: [
              (0, s.jsx)(V.X, {
                eyebrow: e("pricing.eyebrow"),
                title: e("pricing.title"),
                subtitle: e("pricing.subtitle"),
                align: "center",
                variant: "fade",
                className: "mb-8 sm:mb-10",
                softZoom: !0,
                viewport: { amount: 0.22 },
              }),
              (0, s.jsx)(B.fv, {
                "data-robot-anchor": "pricing",
                className: "robot-projected grid gap-4 sm:grid-cols-2 lg:gap-5",
                staggerDelay: 0.1,
                viewport: { amount: 0.18 },
                children: ec.map((t) => {
                  let a = "standard" === t,
                    r = e.raw("pricing.".concat(t, ".features"));
                  return (0, s.jsx)(
                    B.Tc,
                    {
                      className: "h-full",
                      noFade: !0,
                      children: (0, s.jsxs)(H.j, {
                        className: (0, y.cn)(
                          "flex h-full flex-col",
                          a &&
                            "ring-2 ring-accent-400/40 shadow-[0_0_48px_rgba(6,182,212,0.12)]"
                        ),
                        children: [
                          a
                            ? (0, s.jsx)("span", {
                                className:
                                  "absolute right-4 top-4 rounded-full border border-accent-300/30 bg-accent-400/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-accent-200",
                                children: e("pricing.recommended"),
                              })
                            : null,
                          (0, s.jsxs)("div", {
                            className: "shrink-0",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "text-sm font-medium text-text-tertiary",
                                children: e("pricing.".concat(t, ".name")),
                              }),
                              (0, s.jsxs)("div", {
                                className: "mt-3 flex items-end gap-1.5",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-3xl sm:text-4xl font-bold tracking-tight text-text-primary",
                                    children: e("pricing.".concat(t, ".price")),
                                  }),
                                  e("pricing.".concat(t, ".period"))
                                    ? (0, s.jsx)("p", {
                                        className:
                                          "mb-1 text-sm text-text-tertiary",
                                        children: e(
                                          "pricing.".concat(t, ".period")
                                        ),
                                      })
                                    : null,
                                ],
                              }),
                              (0, s.jsx)("p", {
                                className: (0, y.cn)(
                                  "mt-1.5 text-xs",
                                  "standard" === t
                                    ? "text-accent-400"
                                    : "invisible select-none"
                                ),
                                "aria-hidden":
                                  "standard" !== t ? "true" : void 0,
                                children:
                                  "standard" === t
                                    ? e("pricing.standard.quarterlyNote")
                                    : "\xa0",
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "mt-3 text-sm leading-relaxed text-text-secondary",
                                children: e(
                                  "pricing.".concat(t, ".description")
                                ),
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", { className: "flex-1" }),
                          (0, s.jsx)("div", {
                            className: "border-t border-white/[0.08] mt-6 pt-6",
                            children: (0, s.jsx)("ul", {
                              className: "space-y-3",
                              children: r.map((e) =>
                                (0, s.jsxs)(
                                  "li",
                                  {
                                    className:
                                      "flex items-center justify-between gap-3",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-sm text-text-secondary",
                                        children: e.label,
                                      }),
                                      (0, s.jsx)(eo, {
                                        type: e.type,
                                        value: e.value,
                                      }),
                                    ],
                                  },
                                  "".concat(t, "-").concat(e.label)
                                )
                              ),
                            }),
                          }),
                          (0, s.jsx)(c(), {
                            href: "#waitlist",
                            className: (0, y.cn)(
                              "mt-6 inline-flex h-11 w-full items-center justify-center rounded-2xl text-sm font-semibold transition-colors",
                              a
                                ? "bg-accent-500 text-text-inverse hover:bg-accent-400"
                                : "border border-white/[0.12] bg-white/[0.04] text-text-primary hover:bg-white/[0.08]"
                            ),
                            children: e("pricing.".concat(t, ".cta")),
                          }),
                          (0, s.jsx)("p", {
                            className: (0, y.cn)(
                              "mt-3 text-center text-xs",
                              "free" === t
                                ? "text-text-tertiary"
                                : "invisible select-none"
                            ),
                            "aria-hidden": "free" !== t ? "true" : void 0,
                            children:
                              "free" === t ? e("pricing.free.note") : "\xa0",
                          }),
                        ],
                      }),
                    },
                    t
                  );
                }),
              }),
              (0, s.jsx)(B.nD, {
                delay: 0.06,
                viewport: { amount: 0.2 },
                children: (0, s.jsx)("p", {
                  className: "mt-5 text-center text-sm text-text-tertiary",
                  children: e("pricing.enterpriseCta"),
                }),
              }),
              (0, s.jsx)(B.nD, {
                delay: 0.08,
                viewport: { amount: 0.2 },
                children: (0, s.jsx)("p", {
                  className: "mt-3 text-center text-xs text-text-tertiary",
                  children: e("pricing.footnote"),
                }),
              }),
            ],
          }),
        });
      }
      function ex() {
        let e = (0, o.c)("landing"),
          [t, a] = (0, r.useState)(null);
        return (0, s.jsx)("section", {
          id: "faq",
          className: "py-10 sm:py-14 lg:py-20",
          children: (0, s.jsxs)("div", {
            className: "max-w-3xl mx-auto px-4 sm:px-6",
            children: [
              (0, s.jsx)(V.X, {
                eyebrow: e("faq.eyebrow"),
                title: e("faq.title"),
                align: "center",
                variant: "stagger",
                className: "mb-10 lg:mb-14",
                titleClassName: "lg:text-5xl max-w-none",
                viewport: { amount: 0.25 },
              }),
              (0, s.jsx)(B.fv, {
                className: "space-y-3",
                staggerDelay: 0.08,
                viewport: { amount: 0.18, margin: "0px 0px -8% 0px" },
                children: [0, 1, 2, 3, 4, 5].map((r) =>
                  (0, s.jsx)(
                    B.Tc,
                    {
                      children: (0, s.jsxs)($, {
                        level: "plate",
                        className: "rounded-2xl overflow-hidden",
                        children: [
                          (0, s.jsxs)("button", {
                            type: "button",
                            onClick: () => {
                              a((e) => (e === r ? null : r));
                            },
                            "aria-expanded": t === r,
                            "aria-controls": "faq-panel-".concat(r),
                            id: "faq-trigger-".concat(r),
                            className:
                              "w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left",
                            children: [
                              (0, s.jsx)("span", {
                                className:
                                  "font-semibold text-sm sm:text-base text-text-primary",
                                children: e(
                                  "faq.items.".concat(r, ".question")
                                ),
                              }),
                              (0, s.jsx)(d.P.span, {
                                animate: { rotate: 180 * (t === r) },
                                transition: { duration: B.uT, ease: B.Nd },
                                className: "shrink-0",
                                children: (0, s.jsx)(j.A, {
                                  className: "w-5 h-5 text-text-tertiary",
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsx)(x.N, {
                            initial: !1,
                            children:
                              t === r &&
                              (0, s.jsx)(d.P.div, {
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: { duration: B.uT, ease: B.Nd },
                                className: "overflow-hidden",
                                children: (0, s.jsx)("div", {
                                  className: "px-5 sm:px-6 pb-5 sm:pb-6",
                                  id: "faq-panel-".concat(r),
                                  role: "region",
                                  "aria-labelledby": "faq-trigger-".concat(r),
                                  children: (0, s.jsx)("p", {
                                    className:
                                      "text-sm text-text-secondary leading-relaxed",
                                    children: e(
                                      "faq.items.".concat(r, ".answer")
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    },
                    r
                  )
                ),
              }),
            ],
          }),
        });
      }
      function em(e) {
        let { onJoinWaitlist: t } = e,
          a = (0, o.c)("landing");
        return (0, s.jsxs)("section", {
          className: "py-10 sm:py-14 lg:py-20 relative overflow-hidden",
          children: [
            (0, s.jsx)("div", {
              className: "absolute inset-0 pointer-events-none",
              "aria-hidden": !0,
              children: (0, s.jsx)("div", {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent-500/8 blur-[120px]",
              }),
            }),
            (0, s.jsx)(B.fx, {
              className:
                "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center",
              children: (0, s.jsxs)(B.fv, {
                className: "flex flex-col items-center",
                staggerDelay: 0.14,
                delay: 0.04,
                viewport: { amount: 0.35 },
                children: [
                  (0, s.jsx)(B.Tc, {
                    className: "w-full",
                    children: (0, s.jsxs)("h2", {
                      className:
                        "r3d-statement-src text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 tracking-tight",
                      children: [
                        a("cta.title"),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("span", {
                          className: "text-gradient",
                          children: a("cta.titleHighlight"),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(B.Tc, {
                    className: "w-full",
                    children: (0, s.jsx)("p", {
                      className:
                        "text-lg text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed",
                      children: a("cta.subtitle"),
                    }),
                  }),
                  (0, s.jsx)(B.Tc, {
                    className: "w-full",
                    children: (0, s.jsx)("p", {
                      className: "mt-4 text-xs text-text-tertiary",
                      children: a("cta.microCopy"),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var ep = a(992),
        eh = a(9043);
      function eu() {
        let e = (0, o.c)("landing"),
          t = [
            {
              title: e("footer.product.title"),
              links: [
                {
                  label: e("footer.product.pricing"),
                  href: "#pricing",
                  app: !1,
                },
                {
                  label: e("footer.product.documentation"),
                  href: N.Y7,
                  app: !1,
                },
                { label: e("footer.product.links"), href: "/links", app: !1 },
              ],
            },
            {
              title: e("footer.legal.title"),
              links: [
                { label: e("footer.legal.privacy"), href: "/privacy", app: !1 },
                { label: e("footer.legal.terms"), href: "/terms", app: !1 },
              ],
            },
          ],
          a = [
            { Icon: f.MR, href: N.Pt, label: "X" },
            { Icon: f.FV, href: N.ay, label: e("nav.socials.telegramChannel") },
            { Icon: f.FV, href: N.C_, label: e("nav.socials.telegramGroup") },
            { Icon: f.Bo, href: N.Y7, label: "Docs" },
          ];
        return (0, s.jsx)("footer", {
          className: "relative z-10 px-4 sm:px-6 pb-6 pt-8",
          children: (0, s.jsx)("div", {
            className: "max-w-7xl mx-auto",
            children: (0, s.jsx)(B.nD, {
              viewport: { amount: 0.12 },
              softZoom: !0,
              children: (0, s.jsxs)("div", {
                className:
                  "liquid-glass-float--footer rounded-[2rem] sm:rounded-[2.25rem] px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-16",
                    children: [
                      (0, s.jsxs)(B.nO, {
                        className: "lg:max-w-[280px] shrink-0",
                        viewport: { amount: 0.1 },
                        children: [
                          (0, s.jsx)(v.wG, { iconSize: 28, textSize: 19 }),
                          (0, s.jsx)(v.Rn, { className: "block mt-2" }),
                          (0, s.jsx)("p", {
                            className:
                              "text-sm text-text-tertiary mt-3 leading-relaxed",
                            children: e("footer.description"),
                          }),
                        ],
                      }),
                      (0, s.jsx)(B.fv, {
                        className:
                          "flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8",
                        staggerDelay: 0.11,
                        viewport: { amount: 0.12 },
                        children: t.map((e) =>
                          (0, s.jsx)(
                            B.Tc,
                            {
                              children: (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("h4", {
                                    className:
                                      "text-sm font-semibold mb-4 text-text-primary",
                                    children: e.title,
                                  }),
                                  (0, s.jsx)("ul", {
                                    className: "space-y-2.5",
                                    children: e.links.map((e) =>
                                      (0, s.jsx)(
                                        "li",
                                        {
                                          children: e.href.startsWith("/")
                                            ? (0, s.jsx)(c(), {
                                                href: e.href,
                                                className:
                                                  "text-sm text-text-tertiary hover:text-text-secondary transition-colors inline-block rounded-lg hover:bg-[var(--glass-shell)] -mx-1 px-1 py-0.5",
                                                children: e.label,
                                              })
                                            : e.app
                                            ? (0, s.jsx)(eh.d, {
                                                href: e.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className:
                                                  "text-sm text-text-tertiary hover:text-text-secondary transition-colors inline-block rounded-lg hover:bg-[var(--glass-shell)] -mx-1 px-1 py-0.5",
                                                children: e.label,
                                              })
                                            : (0, s.jsx)("a", {
                                                href: e.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className:
                                                  "text-sm text-text-tertiary hover:text-text-secondary transition-colors inline-block rounded-lg hover:bg-[var(--glass-shell)] -mx-1 px-1 py-0.5",
                                                children: e.label,
                                              }),
                                        },
                                        e.label
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            },
                            e.title
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mt-10 pt-6 border-t border-[var(--border-subtle)]",
                    children: [
                      (0, s.jsx)(B.nD, {
                        delay: 0.05,
                        viewport: { amount: 0.08 },
                        children: (0, s.jsx)("div", {
                          className:
                            "flex items-center justify-center gap-3 mb-6",
                          children: a.map((e) => {
                            let { Icon: t, href: a, label: r } = e;
                            return (0, s.jsx)(
                              "a",
                              {
                                href: a,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                title: r,
                                "aria-label": r,
                                className:
                                  "w-10 h-10 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-[var(--glass-shell)] transition-colors",
                                children: (0, s.jsx)(t, {
                                  className: "w-4 h-4",
                                }),
                              },
                              r
                            );
                          }),
                        }),
                      }),
                      (0, s.jsx)(B.nD, {
                        delay: 0.1,
                        viewport: { amount: 0.08 },
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row items-center justify-between gap-3",
                          children: [
                            (0, s.jsxs)("p", {
                              className:
                                "text-xs text-text-tertiary text-center sm:text-left leading-relaxed",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "block opacity-60",
                                  children:
                                    "Mascot “Flying Robot” by MONARCH (CC-BY)",
                                }),
                                (0, s.jsx)("span", {
                                  className: "block",
                                  children: e("footer.copyright", {
                                    year: new Date().getFullYear(),
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, s.jsx)(ep.A, {
                                  className: "w-3.5 h-3.5 text-text-tertiary",
                                }),
                                (0, s.jsxs)("select", {
                                  defaultValue: "",
                                  onChange: (e) => {
                                    if (e.target.value) {
                                      var t;
                                      (t = e.target.value),
                                        (document.cookie = ""
                                          .concat("NEXT_LOCALE", "=")
                                          .concat(
                                            t,
                                            ";path=/;max-age=31536000"
                                          )),
                                        sessionStorage.setItem(
                                          "locale-changed",
                                          "1"
                                        ),
                                        window.location.reload();
                                    }
                                  },
                                  className:
                                    "text-xs bg-transparent text-text-tertiary hover:text-text-primary border border-[var(--border-subtle)] rounded-lg px-2.5 py-1.5 cursor-pointer focus:outline-none focus:border-accent-500/40 transition-colors appearance-none pr-6",
                                  style: {
                                    backgroundImage:
                                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 6px center",
                                  },
                                  children: [
                                    (0, s.jsx)("option", {
                                      value: "",
                                      disabled: !0,
                                      children: e("footer.language"),
                                    }),
                                    (0, s.jsx)("option", {
                                      value: "en",
                                      children: "English",
                                    }),
                                    (0, s.jsx)("option", {
                                      value: "it",
                                      children: "Italiano",
                                    }),
                                    (0, s.jsx)("option", {
                                      value: "de",
                                      children: "Deutsch",
                                    }),
                                    (0, s.jsx)("option", {
                                      value: "fr",
                                      children: "Fran\xe7ais",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: "text-xs text-text-tertiary",
                              children: e("footer.liveOn"),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      let eg = (0, l.default)(
          () =>
            a
              .e(742)
              .then(a.bind(a, 2742))
              .then((e) => e.MarketsWidgetSection),
          {
            loadableGenerated: { webpack: () => [2742] },
            loading: () =>
              (0, s.jsx)("div", {
                className: "min-h-[520px]",
                "aria-hidden": !0,
              }),
          }
        ),
        ef = (0, l.default)(
          () =>
            a
              .e(692)
              .then(a.bind(a, 7692))
              .then((e) => e.TrustStrip),
          {
            loadableGenerated: { webpack: () => [7692] },
            loading: () =>
              (0, s.jsx)("div", {
                className: "min-h-[180px]",
                "aria-hidden": !0,
              }),
          }
        ),
        eb = (0, l.default)(
          () =>
            a
              .e(838)
              .then(a.bind(a, 7838))
              .then((e) => e.SecuritySection),
          {
            loadableGenerated: { webpack: () => [7838] },
            loading: () =>
              (0, s.jsx)("div", {
                className: "min-h-[720px]",
                "aria-hidden": !0,
              }),
          }
        ),
        ev = (0, l.default)(
          () =>
            Promise.all([
              a.e(704),
              a.e(825),
              a.e(560),
              a.e(133),
              a.e(464),
              a.e(964),
              a.e(824),
              a.e(67),
            ])
              .then(a.bind(a, 1448))
              .then((e) => e.VaultLiveChatSection),
          {
            loadableGenerated: { webpack: () => [1448] },
            loading: () =>
              (0, s.jsx)("div", {
                className: "min-h-[520px]",
                "aria-hidden": !0,
              }),
          }
        ),
        ej = (0, l.default)(
          () =>
            Promise.all([
              a.e(747),
              a.e(873),
              a.e(134),
              a.e(9),
              a.e(722),
              a.e(497),
              a.e(130),
              a.e(983),
            ])
              .then(a.bind(a, 3983))
              .then((e) => e.ThreeRoot),
          { loadableGenerated: { webpack: () => [3983] }, ssr: !1 }
        );
      function ey() {
        (0, r.useEffect)(() => {
          sessionStorage.getItem("locale-changed") &&
            (sessionStorage.removeItem("locale-changed"),
            window.scrollTo(0, 0));
        }, []);
        return (0, s.jsxs)("main", {
          id: "main-content",
          className: "relative min-h-dvh overflow-x-hidden pb-24 sm:pb-28",
          children: [
            (0, s.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none fixed inset-0 z-0 bg-bg-deepest overflow-hidden",
              children: (0, s.jsx)("div", {
                className:
                  "absolute inset-0 mesh-gradient mesh-gradient--fullpage opacity-40",
              }),
            }),
            (0, s.jsxs)(ej, {
              children: [
                (0, s.jsx)(P, {}),
                (0, s.jsx)(q, {}),
                (0, s.jsx)(ev, {}),
                (0, s.jsx)(G, {}),
                (0, s.jsx)(F, {}),
                (0, s.jsx)(Y, {}),
                (0, s.jsx)(ee, {}),
                (0, s.jsx)(eg, {}),
                (0, s.jsx)(et, {}),
                (0, s.jsx)(er, {}),
                (0, s.jsx)(ei, {}),
                (0, s.jsx)(ed, {}),
                (0, s.jsx)(em, {}),
                (0, s.jsx)(ef, {}),
                (0, s.jsx)(eb, {}),
                (0, s.jsx)(ex, {}),
                (0, s.jsx)(eu, {}),
              ],
            }),
          ],
        });
      }
    },
    6599: (e, t, a) => {
      "use strict";
      var s;
      a.d(t, { H$: () => l, oO: () => r });
      let r =
          null != (s = a(4188).env.NEXT_PUBLIC_APP_URL)
            ? s
            : "https://app.mandate.finance",
        l = (function (e) {
          let t = (null != e ? e : "").trim().replace(/\/$/, "");
          return t ? (t.endsWith("/api") ? t : "".concat(t, "/api")) : "";
        })("https://backend-hditjnhhna-de.a.run.app");
    },
    7970: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 4154)),
        Promise.resolve().then(a.bind(a, 5723));
    },
    8430: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bo: () => c,
        FV: () => n,
        MR: () => r,
        US: () => l,
        Zx: () => o,
        us: () => i,
      });
      var s = a(8095);
      function r(e) {
        let { className: t } = e;
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: t,
          children: (0, s.jsx)("path", {
            d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
          }),
        });
      }
      function l(e) {
        let { className: t } = e;
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: t,
          children: (0, s.jsx)("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
          }),
        });
      }
      function n(e) {
        let { className: t } = e;
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: t,
          children: (0, s.jsx)("path", {
            d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
          }),
        });
      }
      function i(e) {
        let { className: t } = e;
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: t,
          children: (0, s.jsx)("path", {
            d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1569 2.4189Z",
          }),
        });
      }
      function c(e) {
        let { className: t } = e;
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: t,
          children: (0, s.jsx)("path", {
            d: "M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.168.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174",
          }),
        });
      }
      function o(e) {
        let { className: t } = e;
        return (0, s.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: t,
          children: (0, s.jsx)("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
          }),
        });
      }
    },
    8865: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => n });
      var s = a(8095),
        r = a(9275),
        l = a(373);
      function n(e) {
        let { src: t, alt: a, className: n } = e;
        return (0, s.jsx)(r.default, {
          src: t,
          alt: a,
          width: 16,
          height: 16,
          className: (0, l.cn)("h-4 w-4 rounded-[3px] object-contain", n),
          unoptimized: !0,
        });
      }
    },
    9043: (e, t, a) => {
      "use strict";
      a.d(t, { d: () => i });
      var s = a(8095),
        r = a(8967),
        l = a(6599),
        n = a(2005);
      let i = (0, r.forwardRef)(function (e, t) {
        let { href: a = l.oO, children: i, ...c } = e,
          [o, d] = (0, r.useState)(a);
        return (
          (0, r.useEffect)(() => {
            let e;
            try {
              e = new URL(a);
            } catch (e) {
              return;
            }
            if (e.searchParams.has("ref")) return void d(e.toString());
            let t = (0, n.Zx)();
            (null == t ? void 0 : t.code)
              ? (e.searchParams.set("ref", t.code), d(e.toString()))
              : d(a);
          }, [a]),
          (0, s.jsx)("a", { ref: t, href: o, ...c, children: i })
        );
      });
    },
  },
  (e) => {
    e.O(0, [383, 681, 487, 38, 36, 381, 358], () => e((e.s = 7970))),
      (_N_E = e.O());
  },
]);
