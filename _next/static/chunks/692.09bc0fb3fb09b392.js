"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [692],
  {
    7692: (e, s, t) => {
      t.r(s), t.d(s, { TrustStrip: () => f });
      var a = t(8095),
        l = t(6720),
        i = t(292),
        n = t(5955);
      let r = [
        { id: "aave", name: "Aave" },
        { id: "hyperliquid", name: "Hyperliquid" },
        { id: "morpho", name: "Morpho" },
        { id: "balancer", name: "Balancer" },
        { id: "uniswap", name: "Uniswap" },
        { id: "compound", name: "Compound" },
        { id: "pendle", name: "Pendle" },
        { id: "merkl", name: "Merkl" },
        { id: "openocean", name: "OpenOcean" },
      ];
      var o = t(373);
      let c = {
        aave: "/integrations/aave.svg",
        morpho: "/integrations/morpho.svg",
        pendle: "/integrations/pendle.svg",
        uniswap: "/integrations/uniswap.svg",
        merkl: "/integrations/merkl.svg",
      };
      function d(e) {
        let { src: s } = e;
        return (0, a.jsx)("img", {
          src: s,
          alt: "",
          width: 200,
          height: 40,
          className: "trust-logo__img",
          loading: "lazy",
          fetchPriority: "low",
          decoding: "async",
          draggable: !1,
        });
      }
      function u() {
        return (0, a.jsxs)("div", {
          className: "trust-logo trust-logo--lockup trust-logo--hyperliquid",
          children: [
            (0, a.jsx)("svg", {
              viewBox: "0 0 144 144",
              className: "trust-logo__mark",
              "aria-hidden": !0,
              focusable: "false",
              children: (0, a.jsx)("path", {
                d: "M144 71.6991C144 119.306 114.866 134.582 99.5156 120.98C86.8804 109.889 83.1211 86.4521 64.116 84.0456C39.9942 81.0113 37.9057 113.133 22.0334 113.133C3.5504 113.133 0 86.2428 0 72.4315C0 58.3063 3.96809 39.0542 19.736 39.0542C38.1146 39.0542 39.1588 66.5722 62.132 65.1073C85.0007 63.5379 85.4184 34.8689 100.247 22.6271C113.195 12.0593 144 23.4641 144 71.6991Z",
                fill: "white",
              }),
            }),
            (0, a.jsx)("span", {
              className: "trust-logo__label",
              children: "Hyperliquid",
            }),
          ],
        });
      }
      function m() {
        return (0, a.jsxs)("div", {
          className: "trust-logo trust-logo--lockup trust-logo--openocean",
          children: [
            (0, a.jsx)("img", {
              src: "/integrations/openocean.svg",
              alt: "",
              width: 40,
              height: 40,
              className: "trust-logo__mark",
              loading: "lazy",
              fetchPriority: "low",
              decoding: "async",
              draggable: !1,
            }),
            (0, a.jsx)("span", {
              className: "trust-logo__label",
              children: "OpenOcean",
            }),
          ],
        });
      }
      function p() {
        return (0, a.jsxs)("div", {
          className: "trust-logo trust-logo--lockup trust-logo--balancer",
          children: [
            (0, a.jsxs)("svg", {
              viewBox: "195 248 632 488",
              className: "trust-logo__mark",
              "aria-hidden": !0,
              focusable: "false",
              children: [
                (0, a.jsx)("path", {
                  d: "M508.4,413.1c-93.7,0-169.7-31.4-169.7-70s76-70,169.7-70,169.7,31.4,169.7,70-76,70-169.7,70Z",
                  fill: "white",
                }),
                (0, a.jsx)("path", {
                  d: "M509.2,547.9c-121.2,0-219.5-38-219.5-84.9,0-26,30.3-49.3,77.8-64.8,33.9,17.7,84.7,29,141.7,29s107.8-11.3,141.7-29c47.6,15.6,77.8,38.8,77.8,64.8.1,46.9-98.2,84.9-219.5,84.9Z",
                  fill: "white",
                }),
                (0, a.jsx)("path", {
                  d: "M507.5,709C347.6,709,218,662.8,218,600.9c0-32.3,35.3-61.4,91.8-81.9,44.1,28.3,118.1,42.8,202,42.8,81.9,0,154.3-17.7,198.8-44.8,53.3,20.3,86.4,48.6,86.4,79.8,0,62-129.6,112.2-289.5,112.2Z",
                  fill: "white",
                }),
              ],
            }),
            (0, a.jsx)("span", {
              className: "trust-logo__label",
              children: "Balancer",
            }),
          ],
        });
      }
      function x() {
        return (0, a.jsxs)("div", {
          className: "trust-logo trust-logo--lockup trust-logo--compound",
          children: [
            (0, a.jsxs)("svg", {
              viewBox: "504 380 991 1195",
              className: "trust-logo__mark",
              "aria-hidden": !0,
              focusable: "false",
              children: [
                (0, a.jsx)("path", {
                  d: "M577.7,1335.3c-29.9-18.3-48.2-50.8-48.2-85.8v-195.4c0-23.2,18.9-42,42.1-41.9c7.4,0,14.7,2,21.1,5.7l440.9,257.1c25.8,15,41.7,42.6,41.7,72.5v202.4c0.1,27.8-22.4,50.4-50.2,50.4c-9.3,0-18.5-2.6-26.4-7.4L577.7,1335.3z",
                  fill: "white",
                  fillOpacity: "0.7",
                }),
                (0, a.jsx)("path", {
                  d: "M1234.9,964.4c25.8,15,41.6,42.7,41.7,72.5v410.8c0,12.1-6.5,23.3-17.1,29.2l-96.5,54.3c-1.2,0.7-2.5,1.2-3.9,1.6v-228.1c0-29.5-15.5-56.9-40.9-72.1L731,1001V743.5c0-23.2,18.9-42,42.1-41.9c7.4,0,14.7,2,21.1,5.7L1234.9,964.4z",
                  fill: "white",
                  fillOpacity: "0.85",
                }),
                (0, a.jsx)("path", {
                  d: "M1427.9,661c25.9,15,41.8,42.7,41.8,72.6v600c-0.1,12.3-6.9,23.6-17.7,29.5l-91.5,49.4V994.8c0-29.5-15.5-56.8-40.7-72L924,685.4V441.2c0-7.4,2-14.7,5.6-21.1c11.7-20,37.4-26.8,57.4-15.2L1427.9,661z",
                  fill: "white",
                }),
              ],
            }),
            (0, a.jsx)("span", {
              className: "trust-logo__label",
              children: "Compound",
            }),
          ],
        });
      }
      function h(e) {
        let { id: s, className: t } = e;
        return "hyperliquid" === s
          ? (0, a.jsx)(u, {})
          : "openocean" === s
          ? (0, a.jsx)(m, {})
          : "balancer" === s
          ? (0, a.jsx)(p, {})
          : "compound" === s
          ? (0, a.jsx)(x, {})
          : (0, a.jsx)("div", {
              className: (0, o.cn)("trust-logo trust-logo--wordmark", t),
              children: (0, a.jsx)(d, { src: c[s] }),
            });
      }
      function g(e) {
        let { id: s, name: t } = e;
        return (0, a.jsxs)("div", {
          className: "trust-strip__logo",
          title: t,
          children: [
            (0, a.jsx)(h, { id: s }),
            (0, a.jsx)("span", { className: "sr-only", children: t }),
          ],
        });
      }
      function j(e) {
        let { clone: s } = e;
        return (0, a.jsx)("div", {
          className: "trust-strip__sequence",
          "aria-hidden": s || void 0,
          children: r.map((e) =>
            (0, a.jsx)(
              g,
              { id: e.id, name: e.name },
              "".concat(e.id).concat(s ? "-c" : "")
            )
          ),
        });
      }
      function v() {
        return (0, n.I)()
          ? (0, a.jsx)("ul", {
              className: "trust-strip__static",
              children: r.map((e) =>
                (0, a.jsx)(
                  "li",
                  { children: (0, a.jsx)(g, { id: e.id, name: e.name }) },
                  e.id
                )
              ),
            })
          : (0, a.jsxs)("div", {
              className: "trust-strip__track",
              children: [(0, a.jsx)(j, {}), (0, a.jsx)(j, { clone: !0 })],
            });
      }
      function f() {
        let e = (0, l.c)("landing.trust");
        return (0, a.jsxs)("section", {
          id: "integrations",
          className: "trust-strip py-10 sm:py-14 lg:py-20",
          "aria-labelledby": "trust-strip-heading",
          children: [
            (0, a.jsx)("div", {
              "aria-hidden": !0,
              className:
                "pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent",
            }),
            (0, a.jsx)("div", {
              className: "relative max-w-7xl mx-auto px-4 sm:px-6",
              children: (0, a.jsxs)(i.nD, {
                className: "text-center mb-10 sm:mb-12 max-w-3xl mx-auto",
                softZoom: !0,
                viewport: { amount: 0.35 },
                children: [
                  (0, a.jsx)("p", {
                    className: "text-caption text-accent-400 mb-3",
                    children: e("eyebrow"),
                  }),
                  (0, a.jsx)("h2", {
                    id: "trust-strip-heading",
                    className:
                      "text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight tracking-tight text-balance",
                    children: e("title"),
                  }),
                ],
              }),
            }),
            (0, a.jsx)(i.nD, {
              delay: 0.06,
              viewport: { amount: 0.18 },
              children: (0, a.jsx)("div", {
                className: "trust-strip__viewport",
                role: "region",
                "aria-label": e("marqueeLabel"),
                children: (0, a.jsx)(v, {}),
              }),
            }),
          ],
        });
      }
    },
  },
]);
