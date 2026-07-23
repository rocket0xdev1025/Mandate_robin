"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [983],
  {
    3983: (e, t, n) => {
      n.r(t), n.d(t, { ThreeRoot: () => b });
      var o = n(8095),
        r = n(454);
      n(9829);
      var i = n(8967),
        s = n(6661),
        a = n(9224),
        l = n(5499),
        c = n(9671);
      let p = [
        {
          x: -6,
          y: 2,
          z: -9,
          r: 10,
          color: "#1597b8",
          sx: 3.5,
          sy: 1.6,
          sp: 0.06,
          ph: 0,
        },
        {
          x: 7,
          y: -3,
          z: -11,
          r: 12,
          color: "#15b89f",
          sx: 4,
          sy: 2,
          sp: 0.05,
          ph: 1.7,
        },
        {
          x: 2,
          y: 5,
          z: -7,
          r: 8,
          color: "#22d3ee",
          sx: 2.6,
          sy: 1.4,
          sp: 0.08,
          ph: 3.1,
        },
        {
          x: -8,
          y: -4,
          z: -13,
          r: 13,
          color: "#0fa896",
          sx: 3,
          sy: 2.2,
          sp: 0.045,
          ph: 4.4,
        },
        {
          x: 9,
          y: 4,
          z: -8,
          r: 7,
          color: "#16e0a8",
          sx: 2.2,
          sy: 1.2,
          sp: 0.07,
          ph: 2.2,
        },
        {
          x: 0,
          y: -6,
          z: -10,
          r: 9,
          color: "#1bb6a0",
          sx: 3.2,
          sy: 1.5,
          sp: 0.05,
          ph: 5,
        },
        {
          x: -3,
          y: 0,
          z: -15,
          r: 15,
          color: "#0e87a8",
          sx: 3.6,
          sy: 2.4,
          sp: 0.03,
          ph: 0.8,
        },
      ];
      function u() {
        let { scene: e } = (0, l.C)(),
          t = (0, i.useRef)(null),
          n = (0, i.useRef)([]),
          r = (0, i.useRef)([]),
          s = (0, i.useRef)(0),
          a = (0, i.useMemo)(
            () =>
              "undefined" != typeof document
                ? (function () {
                    let e = document.createElement("canvas");
                    e.width = e.height = 256;
                    let t = e.getContext("2d"),
                      n = t.createRadialGradient(128, 128, 0, 128, 128, 128);
                    n.addColorStop(0, "rgba(255,255,255,0.9)"),
                      n.addColorStop(0.25, "rgba(255,255,255,0.45)"),
                      n.addColorStop(0.6, "rgba(255,255,255,0.12)"),
                      n.addColorStop(1, "rgba(255,255,255,0)"),
                      (t.fillStyle = n),
                      t.fillRect(0, 0, 256, 256);
                    let o = new c.GOR(e);
                    return (o.colorSpace = c.er$), o;
                  })()
                : null,
            []
          );
        return ((0, i.useMemo)(() => {
          (e.background = null), (e.fog = null);
        }, [e]),
        (0, l.D)((e, o) => {
          let i = e.clock.elapsedTime;
          0 === s.current && (s.current = i);
          let a = i - s.current,
            l = c.cj9.smoothstep(a, 0, 3),
            u = window.scrollY,
            d = Math.min(
              1,
              Math.max(
                0,
                u /
                  Math.max(
                    1,
                    ("undefined" != typeof document
                      ? document.documentElement.scrollHeight
                      : 4e3) - window.innerHeight
                  )
              )
            );
          p.forEach((t, s) => {
            let a = n.current[s],
              p = r.current[s];
            if (!a) return;
            (a.position.x =
              t.x + 1.6 * Math.sin(i * t.sp + t.ph) + 0.8 * e.pointer.x),
              (a.position.y =
                t.y +
                1.2 * Math.cos(i * t.sp * 0.8 + t.ph) +
                0.5 * e.pointer.y -
                2 * d);
            let u = 0.5 + 0.5 * Math.sin(0.22 * i + t.ph),
              f = 1 + (u - 0.5) * 0.18;
            a.scale.set(t.r * t.sx * f, t.r * t.sy * f, 1),
              p &&
                (p.opacity = c.cj9.lerp(
                  p.opacity,
                  (0.05 + 0.06 * u) * l,
                  Math.min(1, 3 * o)
                ));
          }),
            t.current && (t.current.position.z = 4 * d);
        }),
        a)
          ? (0, o.jsx)("group", {
              ref: t,
              children: p.map((e, t) =>
                (0, o.jsx)(
                  "sprite",
                  {
                    ref: (e) => {
                      n.current[t] = e;
                    },
                    position: [e.x, e.y, e.z],
                    scale: [e.r * e.sx, e.r * e.sy, 1],
                    children: (0, o.jsx)("spriteMaterial", {
                      ref: (e) => {
                        r.current[t] = e;
                      },
                      map: a,
                      color: e.color,
                      transparent: !0,
                      opacity: 0,
                      depthWrite: !1,
                      blending: c.EZo,
                    }),
                  },
                  t
                )
              ),
            })
          : null;
      }
      var d = n(7040);
      function f() {
        let { camera: e, size: t } = (0, l.C)(),
          [n, r] = (0, i.useState)([]),
          s = (0, i.useRef)({});
        (0, i.useEffect)(() => {
          let e = () => {
            let e = Array.from(document.querySelectorAll(".r3d-statement-src"));
            e.forEach((e, t) => {
              e.dataset.r3dId || (e.dataset.r3dId = "r3dS".concat(t));
            }),
              r(
                e.map((e) => {
                  let t = getComputedStyle(e),
                    n =
                      "center" === t.textAlign
                        ? "center"
                        : "right" === t.textAlign
                        ? "right"
                        : "left";
                  return {
                    id: e.dataset.r3dId,
                    text: (function e(t) {
                      let n = "";
                      return (
                        t.childNodes.forEach((t) => {
                          if (t.nodeType === Node.TEXT_NODE) {
                            var o;
                            n += null != (o = t.textContent) ? o : "";
                          } else
                            t.nodeType === Node.ELEMENT_NODE &&
                              (n += "BR" === t.tagName ? " " : e(t));
                        }),
                        n
                      );
                    })(e)
                      .trim()
                      .replace(/\s+/g, " "),
                    fontPx: parseFloat(t.fontSize) || 48,
                    align: n,
                    weight: parseInt(t.fontWeight) || 700,
                  };
                })
              );
          };
          e();
          let t = setTimeout(e, 1e3);
          return (
            window.addEventListener("resize", e),
            () => {
              clearTimeout(t), window.removeEventListener("resize", e);
            }
          );
        }, []);
        let a = (0, i.useMemo)(() => {
          let n = t.width,
            o = t.height,
            r = 2 * Math.tan((e.fov * Math.PI) / 180 / 2) * e.position.z,
            i = (n / o) * r;
          return { vw: n, vh: o, visH: r, visW: i, wpp: i / n };
        }, [e, t]);
        return (
          (0, l.D)(() => {
            for (let e of n) {
              let t = document.querySelector(
                  '[data-r3d-id="'.concat(e.id, '"]')
                ),
                n = s.current[e.id];
              if (!t || !n) continue;
              let o = t.getBoundingClientRect();
              if (0 === o.width || o.bottom < -120 || o.top > a.vh + 120) {
                n.visible = !1;
                continue;
              }
              n.visible = !0;
              let r =
                "center" === e.align
                  ? o.left + o.width / 2
                  : "right" === e.align
                  ? o.right
                  : o.left;
              (n.position.x = (r / a.vw - 0.5) * a.visW),
                (n.position.y =
                  -((o.top + o.height / 2) / a.vh - 0.5) * a.visH),
                (n.position.z = 0);
            }
          }),
          (0, o.jsx)(o.Fragment, {
            children: n.map((e) => {
              var t;
              let n =
                  "undefined" != typeof document
                    ? document.querySelector(
                        '[data-r3d-id="'.concat(e.id, '"]')
                      )
                    : null,
                r =
                  (null !=
                  (t = null == n ? void 0 : n.getBoundingClientRect().width)
                    ? t
                    : 700) * a.wpp,
                i = e.fontPx * a.wpp;
              return (0, o.jsx)(
                "group",
                {
                  ref: (t) => {
                    s.current[e.id] = t;
                  },
                  visible: !1,
                  children: (0, o.jsx)(d.E, {
                    font: "/fonts/NeogroteskPro-Regular.ttf",
                    fontSize: i,
                    maxWidth: 1.02 * r,
                    lineHeight: 1.04,
                    letterSpacing: -0.02,
                    color: "#ffffff",
                    "material-toneMapped": !1,
                    anchorX: e.align,
                    anchorY: "middle",
                    textAlign: e.align,
                    outlineWidth: 0.006 * i,
                    outlineColor: "#0a1018",
                    outlineOpacity: 0.55,
                    children: e.text,
                  }),
                },
                e.id
              );
            }),
          })
        );
      }
      var h = n(7871),
        m = n(3906);
      let g = [
          {
            tag: "scan",
            msg: "Reading signals \xb7 RSI 1h/4h/1d/1w \xb7 ATR%",
          },
          { tag: "scan", msg: "Path A: 1h RSI 42.3 < 45 → oversold" },
          {
            tag: "buy",
            msg: "factor_swap_openocean \xb7 BUY WETH 65% @ $2,320",
          },
          { tag: "ok", msg: "Guardrails OK \xb7 exposure 72% < 90% cap" },
          { tag: "risk", msg: "Health factor watch \xb7 Aave HF 1.54" },
          {
            tag: "yield",
            msg: "APY scan \xb7 Aave 5.2% → Morpho 6.8% (+160bps)",
          },
          {
            tag: "yield",
            msg: "factor_lend_supply \xb7 Morpho Blue \xb7 rebalance",
          },
          { tag: "sell", msg: "Take-profit \xb7 +5.2% NET → SELL 100%" },
          { tag: "scan", msg: "Path D: 4/4 TF aligned \xb7 breakout entry" },
          { tag: "ok", msg: "Conclusion: HOLD — within tolerance band" },
          {
            tag: "buy",
            msg: "factor_hl_open_position \xb7 LONG 2x \xb7 HyperLiquid",
          },
          { tag: "risk", msg: "HF 1.25 < 1.3 → unwind collateral" },
          { tag: "sell", msg: "Quick scalp \xb7 +2.1% NET → SELL 33% (1/3)" },
          { tag: "scan", msg: "Collecting price signals \xb7 Binance feed" },
          { tag: "ok", msg: "Route check \xb7 ETH liquidity OK" },
          { tag: "yield", msg: "Rewards claimed \xb7 compounding +$2.74/day" },
          {
            tag: "buy",
            msg: "factor_lend_borrow \xb7 1.2x leverage \xb7 Morpho",
          },
          { tag: "risk", msg: "Stop-loss armed \xb7 ATR floor -2.8% @ $2,275" },
          { tag: "scan", msg: "factor_vault_analytics \xb7 positions + HF" },
          { tag: "ok", msg: "Owner-only withdrawals \xb7 protocol allowlist" },
          { tag: "sell", msg: "Trend reversal 4h → SELL \xb7 reassess" },
          { tag: "yield", msg: "Idle USDC parked \xb7 Aave V3 \xb7 5.1% APY" },
        ],
        x = {
          scan: "#7dd3fc",
          buy: "#16e0a8",
          sell: "#fb7185",
          risk: "#fbbf24",
          yield: "#22d3ee",
          ok: "#a7f3d0",
        };
      function y(e) {
        let t = 34862 + 3 * e,
          n = Math.floor(t / 3600) % 24,
          o = Math.floor(t / 60) % 60,
          r = (e) => String(e).padStart(2, "0");
        return ""
          .concat(r(n), ":")
          .concat(r(o), ":")
          .concat(r(t % 60));
      }
      let w = "/models/flying-robot.glb";
      h.p.preload(w);
      let j = (e, t, n) => Math.min(n, Math.max(t, e)),
        M = [
          { at: 0, x: 0, y: 0.04, z: 0.5, s: 0.82, p: 1 },
          { at: 0.08, x: 0.66, y: 0.18, z: -2.6, s: 0.4, p: 0 },
          { at: 0.16, x: 0.5, y: 0.08, z: 0.5, s: 0.84, p: 1 },
          { at: 0.26, x: 0.66, y: -0.22, z: -2.6, s: 0.4, p: 0 },
          { at: 0.36, x: 0.5, y: 0.04, z: 0.55, s: 0.86, p: 1 },
          { at: 0.46, x: 0, y: 0, z: 1.5, s: 1.12, p: 1 },
          { at: 0.55, x: -0.66, y: 0.2, z: -2.6, s: 0.4, p: 0 },
          { at: 0.64, x: 0.05, y: 0, z: 0.6, s: 0.96, p: 1 },
          { at: 0.72, x: 0.62, y: -0.2, z: -2.4, s: 0.4, p: 0 },
          { at: 0.82, x: -0.48, y: 0.05, z: 0.5, s: 0.86, p: 1 },
          { at: 0.9, x: 0.6, y: 0.18, z: -2.4, s: 0.4, p: 0 },
          { at: 0.97, x: 0, y: 0, z: 1.35, s: 1.05, p: 1 },
          { at: 1, x: 0.2, y: 0.6, z: -3, s: 0.4, p: 0 },
        ];
      function z() {
        let e = (0, i.useRef)(null),
          t = (0, i.useRef)([]),
          n = (0, i.useRef)([]),
          r = (0, i.useRef)(null),
          s = (0, i.useRef)(0),
          a = (0, i.useRef)(0),
          p = (0, i.useRef)(0),
          u = (0, i.useRef)(new c.I9Y(0, 0)),
          d = (0, i.useRef)(0),
          f = (0, i.useRef)(!1),
          { scene: z } = (0, h.p)(w),
          b = (0, m.zo)("/textures/robot-skin.png"),
          S = (0, i.useMemo)(
            () =>
              "undefined" != typeof document
                ? (function () {
                    let e = document.createElement("canvas");
                    (e.width = 512), (e.height = 512);
                    let t = e.getContext("2d"),
                      n = new c.GOR(e);
                    (n.colorSpace = c.er$), (n.anisotropy = 8);
                    let o = 0,
                      r = [];
                    for (let e = 0; e < 6; e++) {
                      let t = g[(o + e) % g.length];
                      r.push({ t: y(o + e), tag: t.tag, msg: t.msg });
                    }
                    function i(e) {
                      t.clearRect(0, 0, 512, 512),
                        (t.fillStyle = "#060b14"),
                        t.fillRect(0, 0, 512, 512),
                        (t.fillStyle = "#9fb6c9"),
                        (t.font =
                          "600 22px 'Geist Mono', ui-monospace, monospace"),
                        t.fillText("AGENT \xb7 LIVE", 24, 40),
                        (t.fillStyle = "#16e0a8"),
                        t.beginPath(),
                        t.arc(472, 33, 7, 0, 2 * Math.PI),
                        t.fill(),
                        (t.strokeStyle = "rgba(255,255,255,0.08)"),
                        t.beginPath(),
                        t.moveTo(20, 56),
                        t.lineTo(492, 56),
                        t.stroke(),
                        (t.font =
                          "500 19px 'Geist Mono', ui-monospace, monospace"),
                        r.forEach((e, n) => {
                          let o = 96 + 70 * n;
                          (t.fillStyle = "#5f7488"),
                            t.fillText(e.t, 24, o),
                            (t.fillStyle = x[e.tag]),
                            t.fillRect(20, o + 10, 4, 30),
                            (t.fillStyle = "#dcebf6");
                          let r = e.msg.split(" "),
                            i = "",
                            s = o + 6;
                          for (let e of r)
                            (i + e).length > 30
                              ? (t.fillText(i, 34, s), (s += 24), (i = e + " "))
                              : (i += e + " ");
                          t.fillText(i, 34, s);
                        }),
                        e &&
                          ((t.fillStyle = "#16e0a8"),
                          t.fillRect(34, 96 + 70 * r.length - 18, 12, 20)),
                        (n.needsUpdate = !0);
                    }
                    return (
                      (o += 6),
                      i(!0),
                      {
                        texture: n,
                        draw: i,
                        pushLine: function () {
                          let e = g[o % g.length];
                          r.push({ t: y(o), tag: e.tag, msg: e.msg }),
                            r.length > 6 && r.shift(),
                            o++;
                        },
                        dispose: () => n.dispose(),
                      }
                    );
                  })()
                : null,
            []
          );
        (0, i.useEffect)(() => () => null == S ? void 0 : S.dispose(), [S]),
          (0, i.useEffect)(() => {
            let e = (e) => {
              u.current.set(
                (e.clientX / window.innerWidth - 0.5) * 2,
                -(2 * (e.clientY / window.innerHeight - 0.5))
              ),
                (d.current = performance.now());
            };
            return (
              window.addEventListener("mousemove", e),
              () => window.removeEventListener("mousemove", e)
            );
          }, []);
        let {
            model: v,
            screenPos: E,
            screenSize: R,
          } = (0, i.useMemo)(() => {
            (b.flipY = !1), (b.colorSpace = c.er$), (b.anisotropy = 8);
            let e = new c._4j({
                map: b,
                metalness: 0.12,
                roughness: 0.62,
                envMapIntensity: 0.85,
              }),
              t = z.clone(!0),
              n = new c.NRn().setFromObject(t),
              o = new c.Pq0(),
              r = new c.Pq0();
            n.getSize(o), n.getCenter(r);
            let i = 2.4 / Math.max(o.x, o.y, o.z);
            t.scale.setScalar(i),
              t.position.set(-r.x * i, -r.y * i, -r.z * i),
              t.updateMatrixWorld(!0);
            let s = null,
              a = -1,
              l = new c.NRn(),
              p = new c.Pq0();
            t.traverse((t) => {
              if (!t.isMesh) return;
              (t.material = e), l.setFromObject(t), l.getSize(p);
              let n = p.x * p.y;
              t.name.startsWith("Cube") && n > a && ((a = n), (s = t));
            });
            let u = [0, 0, 1.2],
              d = [1, 1];
            if (s) {
              let e = new c.NRn().setFromObject(s),
                t = new c.Pq0(),
                n = new c.Pq0();
              e.getSize(t),
                e.getCenter(n),
                (u = [n.x, n.y, e.max.z - 0.06]),
                (d = [0.86 * t.x, 0.82 * t.y]);
            }
            return { model: t, screenPos: u, screenSize: d };
          }, [z, b]),
          [T, k] = R,
          C = (0, i.useMemo)(() => {
            let e = 0.045 * Math.min(T, k),
              t = T / 2,
              n = k / 2,
              o = new c.ypk();
            o.moveTo(-t + e, -n),
              o.lineTo(t - e, -n),
              o.lineTo(t, -n + e),
              o.lineTo(t, n - e),
              o.lineTo(t - e, n),
              o.lineTo(-t + e, n),
              o.lineTo(-t, n - e),
              o.lineTo(-t, -n + e),
              o.closePath();
            let r = new c.QCA(o, { depth: 0.28, bevelEnabled: !1 });
            return r.center(), r;
          }, [T, k]),
          { camera: L } = (0, l.C)();
        return (
          (0, l.D)((o, i) => {
            var l;
            let h = o.clock.elapsedTime,
              m = u.current;
            performance.now() - d.current > 600 &&
              ((m.x = c.cj9.lerp(m.x, 0, 0.04)),
              (m.y = c.cj9.lerp(m.y, 0, 0.04)));
            let g = window.scrollY,
              x = j(
                g /
                  Math.max(
                    1,
                    ("undefined" != typeof document
                      ? document.documentElement.scrollHeight
                      : 4e3) - window.innerHeight
                  ),
                0,
                1
              ),
              y = j(g / 160, 0, 1),
              w =
                2 *
                Math.tan(((null != (l = L.fov) ? l : 40) * Math.PI) / 360) *
                L.position.z,
              z = w * (o.size.width / o.size.height),
              b = (function (e) {
                if (e <= M[0].at) return M[0];
                if (e >= M[M.length - 1].at) return M[M.length - 1];
                let t = 0;
                for (let n = 0; n < M.length - 1; n++)
                  if (e >= M[n].at && e <= M[n + 1].at) {
                    t = n;
                    break;
                  }
                let n = M[t],
                  o = M[t + 1],
                  r = (e - n.at) / (o.at - n.at || 1),
                  i = r * r * (3 - 2 * r),
                  s = (e) => Math.sin(Math.min(1, Math.max(0, e)) * Math.PI),
                  a =
                    n.p && o.p
                      ? 1
                      : n.p
                      ? s(0.5 + (1 - r) * 0.5)
                      : o.p
                      ? s(0.5 + 0.5 * r)
                      : 0;
                return {
                  at: e,
                  x: n.x + (o.x - n.x) * i,
                  y: n.y + (o.y - n.y) * i,
                  z: n.z + (o.z - n.z) * i,
                  s: n.s + (o.s - n.s) * i,
                  p: a,
                };
              })(x),
              v = o.size.width < 820;
            v &&
              (b = {
                ...b,
                x: 0.42 * b.x + 0.18,
                y: Math.min(b.y, 0.02) - 0.26,
                z: Math.min(b.z, 0.3) - 0.5,
                s: 0.56 * b.s,
              });
            let E = b.x,
              R = b.y,
              T = b.z,
              k = b.s;
            if ("undefined" != typeof document) {
              let e = document.querySelector(".trust-strip");
              if (e) {
                let t = e.getBoundingClientRect(),
                  n = (t.top + t.height / 2) / o.size.height,
                  r = 1 - j(Math.abs(n - 0.5) / 0.22, 0, 1);
                r > 0 &&
                  ((E = c.cj9.lerp(b.x, 0.46, r)),
                  (R = c.cj9.lerp(b.y, -((n - 0.5) * 1), r)),
                  (T = c.cj9.lerp(b.z, 0.4, r)),
                  (k = c.cj9.lerp(b.s, 0.62, r)));
              }
            }
            let C = E * z + 0.12 * Math.sin(0.4 * h),
              A = R * w + 0.1 * Math.sin(0.8 * h),
              P = T + 0.18 * Math.sin(0.33 * h),
              N = k * c.cj9.lerp(0.86, 1, y);
            if (e.current) {
              let t = e.current;
              f.current ||
                (t.position.set(C, A, P),
                t.scale.setScalar(N),
                (f.current = !0));
              let n = t.position.x;
              (t.position.x = c.cj9.lerp(t.position.x, C, 0.06)),
                (t.position.y = c.cj9.lerp(t.position.y, A, 0.06)),
                (t.position.z = c.cj9.lerp(t.position.z, P, 0.05)),
                t.scale.setScalar(c.cj9.lerp(t.scale.x, N, 0.05));
              let o = t.position.x - n,
                r = -(0.14 * t.position.x);
              if (v) {
                let e = 0.4 * Math.sin(0.5 * h) + 0.16 * Math.sin(0.17 * h),
                  n = -0.17 + 0.06 * Math.sin(0.9 * h);
                (t.rotation.y = c.cj9.lerp(t.rotation.y, 0.5 * r + e, 0.05)),
                  (t.rotation.x = c.cj9.lerp(t.rotation.x, n, 0.05)),
                  (t.rotation.z = c.cj9.lerp(
                    t.rotation.z,
                    -o + 0.06 * Math.sin(0.65 * h),
                    0.06
                  ));
              } else
                (t.rotation.y = c.cj9.lerp(t.rotation.y, r + 0.34 * m.x, 0.14)),
                  (t.rotation.x = c.cj9.lerp(
                    t.rotation.x,
                    -(0.22 * m.y) + 0.04 * Math.sin(1.6 * h) * (1 - y),
                    0.14
                  )),
                  (t.rotation.z = c.cj9.lerp(
                    t.rotation.z,
                    -(1.2 * o) + 0.05 * m.x,
                    0.1
                  ));
            }
            let _ = j(g / 220, 0, 1);
            s.current = c.cj9.lerp(s.current, b.p * _, 0.08);
            let F = s.current;
            (p.current += i), p.current > 1e6 && (p.current = 0);
            let H = p.current % 3.6 < 0.12;
            t.current.forEach((e, t) => {
              e && (e.scale.y = c.cj9.lerp(e.scale.y, H ? 0.08 : 1, 0.5));
              let o = n.current[t];
              o && (o.opacity = 1 - F);
            }),
              r.current && (r.current.opacity = F),
              S &&
                F > 0.05 &&
                ((a.current += i),
                a.current > 1.2 && ((a.current = 0), S.pushLine()),
                S.draw(p.current % 1 < 0.5));
          }),
          (0, o.jsxs)("group", {
            ref: e,
            children: [
              (0, o.jsx)("primitive", { object: v }),
              (0, o.jsxs)("group", {
                position: E,
                children: [
                  (0, o.jsx)("mesh", {
                    geometry: C,
                    children: (0, o.jsx)("meshStandardMaterial", {
                      color: "#060a12",
                      metalness: 0.45,
                      roughness: 0.26,
                    }),
                  }),
                  S &&
                    (0, o.jsxs)("mesh", {
                      position: [0, 0, 0.15],
                      children: [
                        (0, o.jsx)("planeGeometry", {
                          args: [0.92 * T, 0.92 * k],
                        }),
                        (0, o.jsx)("meshBasicMaterial", {
                          ref: r,
                          map: S.texture,
                          transparent: !0,
                          opacity: 0,
                          toneMapped: !1,
                        }),
                      ],
                    }),
                  [-1, 1].map((e, r) =>
                    (0, o.jsxs)(
                      "mesh",
                      {
                        ref: (e) => {
                          t.current[r] = e;
                        },
                        position: [e * T * 0.2, 0.05 * k, 0.17],
                        children: [
                          (0, o.jsx)("planeGeometry", {
                            args: [0.1 * T, 0.46 * k],
                          }),
                          (0, o.jsx)("meshBasicMaterial", {
                            ref: (e) => {
                              n.current[r] = e;
                            },
                            color: 0 === r ? "#2ad8ff" : "#16e0a8",
                            toneMapped: !1,
                            transparent: !0,
                          }),
                        ],
                      },
                      e
                    )
                  ),
                ],
              }),
            ],
          })
        );
      }
      function b(e) {
        let { children: t } = e,
          [n, l] = (0, i.useState)(!1),
          [c, p] = (0, i.useState)(!1),
          [d, h] = (0, i.useState)(!1),
          [m, g] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
              ).matches,
              t = window.matchMedia("(max-width: 767px)").matches,
              n = !1;
            try {
              let e = document.createElement("canvas");
              n = !!(e.getContext("webgl2") || e.getContext("webgl"));
            } catch (e) {
              n = !1;
            }
            let o = !e && n;
            p(t),
              l(o),
              document.documentElement.classList.toggle("r3d-disabled", !o);
          }, []),
          (0, i.useEffect)(() => {
            if (!n) return;
            let e = 0,
              t = () => {
                let n = document.querySelector(".trust-strip");
                if (n) {
                  let e = n.getBoundingClientRect(),
                    t = e.top + e.height / 2,
                    o = window.innerHeight,
                    r = t > 0.34 * o && t < 0.66 * o;
                  h((e) => (e !== r ? r : e));
                }
                e = requestAnimationFrame(t);
              };
            return (
              (e = requestAnimationFrame(t)), () => cancelAnimationFrame(e)
            );
          }, [n]),
          (0, i.useEffect)(() => {
            if (!n) return void g(!1);
            let e = 0,
              t = 0,
              o = 0;
            return (
              (e = requestAnimationFrame(() => {
                t = requestAnimationFrame(() => {
                  o = window.setTimeout(() => g(!0), 180);
                });
              })),
              () => {
                cancelAnimationFrame(e),
                  cancelAnimationFrame(t),
                  window.clearTimeout(o);
              }
            );
          }, [n]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              n &&
                (0, o.jsxs)(r.E8, {
                  style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: d ? 20 : 1,
                    pointerEvents: "none",
                    opacity: +!!m,
                    transition: "opacity 700ms ease-out",
                    willChange: "opacity",
                  },
                  camera: { position: [0, 0, 6], fov: 40 },
                  dpr: c ? [1, 1.4] : [1, 1.75],
                  gl: { antialias: !0, powerPreference: "high-performance" },
                  children: [
                    (0, o.jsx)("ambientLight", { intensity: 1.15 }),
                    (0, o.jsx)("directionalLight", {
                      position: [2, 3, 5],
                      intensity: 2.6,
                      color: "#ffffff",
                    }),
                    (0, o.jsx)("pointLight", {
                      position: [4, 2, 4],
                      intensity: 32,
                      distance: 24,
                      color: "#d4f4fb",
                    }),
                    (0, o.jsx)("pointLight", {
                      position: [-4, -1, 3],
                      intensity: 20,
                      distance: 24,
                      color: "#d4f6ea",
                    }),
                    (0, o.jsx)("pointLight", {
                      position: [0, 1.5, 5],
                      intensity: 16,
                      distance: 20,
                      color: "#ffffff",
                    }),
                    (0, o.jsxs)(s.OH, {
                      resolution: 256,
                      children: [
                        (0, o.jsx)(a.O, {
                          intensity: 4.2,
                          position: [3, 4, 3],
                          scale: [6, 6, 1],
                          color: "#ffffff",
                        }),
                        (0, o.jsx)(a.O, {
                          intensity: 2.3,
                          position: [-5, 1, -3],
                          scale: [3, 6, 1],
                          color: "#dcf2fa",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(i.Suspense, {
                      fallback: null,
                      children: [
                        (0, o.jsx)(u, {}),
                        (0, o.jsx)(f, {}),
                        (0, o.jsx)(z, {}),
                      ],
                    }),
                  ],
                }),
              (0, o.jsx)(r.j6, { enabled: n }),
              (0, o.jsx)("div", {
                className: "relative",
                style: { zIndex: 2 },
                children: t,
              }),
            ],
          })
        );
      }
    },
  },
]);
